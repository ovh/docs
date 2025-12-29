---
title: "Gestão e reconstrução de um RAID software nos servidores que utilizam o modo de arranque UEFI"
excerpt: Descubra como gerir e reconstruir um RAID software após a substituição de disco num servidor que utiliza o modo de arranque UEFI
updated: 2025-12-15
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objetivo

Um Redundant Array of Independent Disks (RAID) é uma tecnologia que atenua a perda de dados num servidor ao replicar os dados em dois discos ou mais.

O nível RAID predefinido para as instalações de servidores OVHcloud é o RAID 1, que duplica o espaço ocupado pelos seus dados, reduzindo assim o espaço de disco utilizável para metade.

**Este guia explica como gerir e reconstruir um RAID software após a substituição de disco no seu servidor em modo UEFI.**

Antes de começar, note que este guia foca-se nos servidores dedicados que utilizam o modo UEFI como modo de arranque. Este é o caso das placas-mãe modernas. Se o seu servidor utiliza o modo de arranque legacy (BIOS), consulte este guia: [Gestão e reconstrução de um RAID software em servidores no modo de arranque legacy (BIOS)](/pages/bare_metal_cloud/dedicated_servers/raid_soft).

Para verificar se um servidor está a funcionar no modo BIOS legacy ou no modo UEFI, execute o seguinte comando:

```sh
[user@server_ip ~]# [ -d /sys/firmware/efi ] && echo UEFI || echo BIOS
```

Para mais informações sobre a UEFI, consulte o seguinte artigo: [https://uefi.org/about](https://uefi.org/about).

## Requisitos

- Um [servidor dedicado](/links/bare-metal/bare-metal) com uma configuração RAID software
- Acesso administrativo (sudo) ao servidor através de SSH
- Compreensão do RAID, partições e GRUB

Ao longo deste guia, utilizamos os termos **disco principal** e **disco secundário**. Neste contexto:

- O disco principal é o disco cuja ESP (EFI System Partition) está montada pelo Linux
- Os discos secundários são todos os outros discos do RAID

## Instruções

Quando compra um novo servidor, pode sentir a necessidade de realizar uma série de testes e ações. Um destes testes pode ser simular uma falha de disco para compreender o processo de reconstrução do RAID e preparar-se em caso de problema.

### Visão geral do conteúdo

- [Informações básicas](#basicinformation)
- [Compreensão da partição do sistema EFI (ESP)](#efisystemparition)
- [Simulação de uma falha de disco](#diskfailure)
    - [Remoção do disco defeituoso](#diskremove)
- [Reconstrução do RAID](#raidrebuild)
    - [Reconstrução do RAID após a substituição do disco principal (modo rescue)](#rescuemode)
    - [Recriação da partição do sistema EFI](#recreateesp)
    - [Reconstrução do RAID quando as partições EFI não estão sincronizadas após atualizações maiores do sistema (ex. GRUB)](#efiraidgrub)
    - [Adição da etiqueta à partição SWAP (se aplicável)](#swap-partition)
    - [Reconstrução do RAID em modo normal](#normalmode)

<a name="basicinformation"></a>

### Informações básicas

Numa sessão de linha de comandos, introduza o seguinte comando para determinar o estado atual do RAID :

```sh
[user@server_ip ~]# cat /proc/mdstat
Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md3 : active raid1 nvme1n1p3[1] nvme0n1p3[0]
      497875968 blocks super 1.2 [2/2] [UU]
      bitmap: 2/4 pages [8KB], 65536KB chunk

md2 : active raid1 nvme1n1p2[1] nvme0n1p2[0]
      1046528 blocks super 1.2 [2/2] [UU]

unused devices: <none>
```

Este comando mostra-nos que temos atualmente dois volumes RAID software configurados, **md2** e **md3**, com **md3** sendo o maior dos dois. **md3** é composto por duas partições, chamadas **nvme1n1p3** e **nvme0n1p3**.

O [UU] significa que todos os discos estão a funcionar normalmente. Um `_` indicaria um disco defeituoso.

Se tiver um servidor com discos SATA, obterá os seguintes resultados :

```sh
[user@server_ip ~]# cat /proc/mdstat
Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md3 : active raid1 sda3[0] sdb3[1]
      3904786432 blocks super 1.2 [2/2] [UU]
      bitmap: 2/30 pages [8KB], 65536KB chunk

md2 : active raid1 sda2[0] sdb2[1]
      1046528 blocks super 1.2 [2/2] [UU]

unused devices: <none>
```

Embora este comando devolva os nossos volumes RAID, não nos indica o tamanho das próprias partições. Podemos encontrar esta informação com o seguinte comando :

```sh
[user@server_ip ~]# sudo fdisk -l

Disk /dev/nvme1n1: 476.94 GiB, 512110190592 bytes, 1000215216 sectors
Disk model: WDC CL SN720 SDAQNTW-512G-2000
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: A11EDAA3-A984-424B-A6FE-386550A92435

Device             Start        End   Sectors   Size Type
/dev/nvme1n1p1      2048    1048575   1046528   511M EFI System
/dev/nvme1n1p2   1048576    3145727   2097152     1G Linux RAID
/dev/nvme1n1p3   3145728  999161855 996016128 474.9G Linux RAID
/dev/nvme1n1p4 999161856 1000210431   1048576   512M Linux files


Disk /dev/nvme0n1: 476.94 GiB, 512110190592 bytes, 1000215216 sectors
Disk model: WDC CL SN720 SDAQNTW-512G-2000
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: F03AC3C3-D7B7-43F9-88DB-9F12D7281D94

Device              Start        End   Sectors   Size Type
/dev/nvme0n1p1       2048    1048575   1046528   511M EFI System
/dev/nvme0n1p2    1048576    3145727   2097152     1G Linux RAID
/dev/nvme0n1p3    3145728  999161855 996016128 474.9G Linux RAID
/dev/nvme0n1p4  999161856 1000210431   1048576   512M Linux file
/dev/nvme0n1p5 1000211120 1000215182      4063     2M Linux file


Disk /dev/md2: 1022 MiB, 1071644672 bytes, 2093056 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/md3: 474.81 GiB, 509824991232 bytes, 995751936 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```

O comando `fdisk -l` permite também identificar o tipo das suas partições. Esta é uma informação importante durante a reconstrução do seu RAID em caso de falha de disco.

Para as partições **GPT**, a linha 6 mostrará: `Disklabel type: gpt`.
Essas informações só ficam visíveis quando o servidor está no modo normal.

Também com base nos resultados de `fdisk -l`, podemos ver que `/dev/md2` é composto por 1022 MiB e `/dev/md3` contém 474,81 GiB. Se executarmos o comando `mount`, também podemos encontrar a disposição dos discos.

Como alternativa, o comando `lsblk` oferece uma visão diferente das partições :

```sh
[user@server_ip ~]# lsblk
NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINT
nvme1n1     259:0    0 476.9G  0 disk
├─nvme1n1p1 259:7    0   511M  0 part
├─nvme1n1p2 259:8    0     1G  0 part
│ └─md2       9:2    0  1022M  0 raid1 /boot
├─nvme1n1p3 259:9    0 474.9G  0 part
│ └─md3       9:3    0 474.8G  0 raid1 /
└─nvme1n1p4 259:10   0   512M  0 part  [SWAP]
nvme0n1     259:1    0 476.9G  0 disk
├─nvme0n1p1 259:2    0   511M  0 part  /boot/efi
├─nvme0n1p2 259:3    0     1G  0 part
│ └─md2       9:2    0  1022M  0 raid1 /boot
├─nvme0n1p3 259:4    0 474.9G  0 part
│ └─md3       9:3    0 474.8G  0 raid1 /
├─nvme0n1p4 259:5    0   512M  0 part  [SWAP]
└─nvme0n1p5 259:6    0     2M  0 part
```

Além disso, se executarmos `lsblk -f`, obtemos mais informações sobre estas partições, tais como o LABEL e o UUID :

```sh
[user@server_ip ~]# sudo lsblk -f
NAME        FSTYPE            FSVER            LABEL          UUID                                 FSAVAIL FSUSE% MOUNTPOINT
nvme1n1
├─nvme1n1p1 vfat              FAT16            EFI_SYSPART    B493-9DFA
├─nvme1n1p2 linux_raid_member 1.2              md2            baae988b-bef3-fc07-615f-6f9043cfd5ea
│ └─md2     ext4              1.0              boot           96850c4e-e2b5-4048-8c39-525194e441aa  851.8M     7% /boot
├─nvme1n1p3 linux_raid_member 1.2              md3            ce0c7fac-0032-054c-eef7-7463b2245519
│ └─md3     ext4              1.0              root           6fea39e9-6297-4ea3-82f1-bf1a3e88106a  441.3G     0% /
└─nvme1n1p4 swap              1                swap-nvme1n1p4 483b9b41-ada3-4143-8cac-5bff7afb73c7                [SWAP]
nvme0n1
├─nvme0n1p1 vfat              FAT16            EFI_SYSPART    B486-9781                             504.9M     1% /boot/efi
├─nvme0n1p2 linux_raid_member 1.2              md2            baae988b-bef3-fc07-615f-6f9043cfd5ea
│ └─md2     ext4              1.0              boot           96850c4e-e2b5-4048-8c39-525194e441aa  851.8M     7% /boot
├─nvme0n1p3 linux_raid_member 1.2              md3            ce0c7fac-0032-054c-eef7-7463b2245519
│ └─md3     ext4              1.0              root           6fea39e9-6297-4ea3-82f1-bf1a3e88106a  441.3G     0% /
├─nvme0n1p4 swap              1                swap-nvme0n1p4 51e7172b-adb0-4729-b0f8-613e5dede38b                [SWAP]
└─nvme0n1p5 iso9660           Joliet Extension config-2       2025-08-05-14-55-41-00
```

Note os dispositivos, as partições e os seus pontos de montagem; isto é importante, especialmente após a substituição de um disco.

A partir dos comandos e resultados acima, temos :

- Duas matrizes RAID: `/dev/md2` e `/dev/md3`.
- Quatro partições que fazem parte do RAID: **nvme0n1p2**, **nvme0n1p3**, **nvme1n1p2**, **nvme0n1p3** com os pontos de montagem `/boot` e `/`.
- Duas partições não incluídas no RAID, com os pontos de montagem: `/boot/efi` e [SWAP].
- Uma partição que não possui ponto de montagem: **nvme1n1p1**

A partição `nvme0n1p5` é uma partição de configuração, ou seja, um volume somente leitura ligado ao servidor que lhe fornece os dados de configuração inicial.

<a name="efisystempartition"></a>

### Compreender a partição do sistema EFI (ESP)

***O que é uma partição do sistema EFI ?***

Uma partição do sistema EFI é uma partição na qual o servidor inicia. Contém os ficheiros de arranque, bem como os gestores de arranque ou as imagens do núcleo de um sistema operativo instalado. Pode também conter programas utilitários concebidos para serem executados antes que o sistema operativo inicie, bem como ficheiros de dados tais como registos de erros.

***A partição do sistema EFI está incluída no RAID ?***

Não, a partir de agosto de 2025, quando uma instalação do sistema operativo é efetuada pela OVHcloud, a partição ESP não está incluída no RAID. Quando utiliza os nossos modelos de SO para instalar o seu servidor com um RAID software, várias partições do sistema EFI são criadas: uma por disco. No entanto, apenas uma partição EFI é montada de cada vez. Todas as ESP criadas contêm os mesmos ficheiros. Todas as ESP criadas no momento da instalação contêm os mesmos ficheiros.

A partição do sistema EFI é montada em `/boot/efi` e o disco no qual está montada é selecionado pelo Linux no arranque.

Exemplo :

```sh
[user@server_ip ~]# sudo lsblk -f
NAME        FSTYPE            FSVER            LABEL          UUID                                 FSAVAIL FSUSE% MOUNTPOINT
nvme1n1
├─nvme1n1p1 vfat              FAT16            EFI_SYSPART    B493-9DFA
├─nvme1n1p2 linux_raid_member 1.2              md2            baae988b-bef3-fc07-615f-6f9043cfd5ea
│ └─md2     ext4              1.0              boot           96850c4e-e2b5-4048-8c39-525194e441aa  851.8M     7% /boot
├─nvme1n1p3 linux_raid_member 1.2              md3            ce0c7fac-0032-054c-eef7-7463b2245519
│ └─md3     ext4              1.0              root           6fea39e9-6297-4ea3-82f1-bf1a3e88106a  441.3G     0% /
└─nvme1n1p4 swap              1                swap-nvme1n1p4 483b9b41-ada3-4143-8cac-5bff7afb73c7                [SWAP]
nvme0n1
├─nvme0n1p1 vfat              FAT16            EFI_SYSPART    B486-9781                             504.9M     1% /boot/efi
├─nvme0n1p2 linux_raid_member 1.2              md2            baae988b-bef3-fc07-615f-6f9043cfd5ea
│ └─md2     ext4              1.0              boot           96850c4e-e2b5-4048-8c39-525194e441aa  851.8M     7% /boot
├─nvme0n1p3 linux_raid_member 1.2              md3            ce0c7fac-0032-054c-eef7-7463b2245519
│ └─md3     ext4              1.0              root           6fea39e9-6297-4ea3-82f1-bf1a3e88106a  441.3G     0% /
├─nvme0n1p4 swap              1                swap-nvme0n1p4 51e7172b-adb0-4729-b0f8-613e5dede38b                [SWAP]
└─nvme0n1p5 iso9660           Joliet Extension config-2       2025-08-05-14-55-41-00
```

De acordo com os resultados acima, vemos que temos duas partições de sistema EFI idênticas (nvme0n1p1 e nvme1n1p1), mas apenas **nvme0n1p1** está montada em `/boot/efi`. Ambas as partições têm a LABEL: `EFI_SYSPART` (esta nomenclatura é específica da OVHcloud).

***O conteúdo da partição do sistema EFI muda regularmente?***

Em geral, o conteúdo desta partição não muda muito, o seu conteúdo só deve mudar durante as atualizações do carregador de arranque (*bootloader*).

No entanto, recomendamos executar um script automático ou manual para sincronizar todas as ESP, para que todas contenham os mesmos ficheiros atualizados. Dessa forma, se o disco no qual essa partição está montada falhar, o servidor poderá reiniciar na ESP de um dos outros discos.

***O que acontece se o disco principal montado em `boot/efi` falhar?***

> [!primary]
> Observe que exploramos abaixo os casos mais comuns, mas existem várias outras razões pelas quais um servidor pode não iniciar no modo normal após uma substituição de disco.
>

**Caso de estudo 1** - Não houve nenhuma alteração ou atualização significativa no sistema (por exemplo, GRUB)

- O servidor consegue arrancar no modo normal e pode proceder à reconstrução do RAID.
- O servidor não consegue arrancar no modo normal, o servidor é reiniciado no modo de recuperação, onde pode reconstruir o RAID e recriar a partição EFI no novo disco.

**Caso de estudo 2** - Houve atualizações importantes no sistema (por exemplo, GRUB) e os ESP foram sincronizados

- O servidor é capaz de iniciar no modo normal, pois todos os ESP contêm informações atualizadas e a reconstrução do RAID pode ser realizada no modo normal.
- O servidor não consegue iniciar no modo normal, o servidor é reiniciado no modo de recuperação, onde você pode reconstruir o RAID e recriar a partição do sistema EFI no novo disco.

**Caso de estudo 3** - Houve atualizações importantes no sistema (por exemplo, GRUB) e as partições ESP não foram sincronizadas.

- O servidor não consegue iniciar no modo normal, o servidor é reiniciado no modo de recuperação, onde pode reconstruir o RAID, recriar a partição do sistema EFI no novo disco e reinstalar o carregador de arranque (bootloader) neste.
- O servidor consegue iniciar no modo normal (isso pode acontecer no caso de um sistema operativo ser atualizado para uma versão mais recente, mas a versão do GRUB permanecer inalterada) e pode proceder à reconstrução do RAID.

De facto, em alguns casos, o arranque a partir de um ESP obsoleto não funciona. Por exemplo, uma atualização importante do GRUB pode tornar a versão antiga do GRUB presente no ESP incompatível com os módulos GRUB mais recentes instalados na partição `/boot`.

***Como posso sincronizar as minhas partições do sistema EFI e com que frequência devo sincronizá-las?***

> [!primary]
> Observe que, dependendo do seu sistema operativo, o processo pode ser diferente. Por exemplo, o Ubuntu é capaz de manter várias partições do sistema EFI sincronizadas a cada atualização do GRUB. No entanto, este é o único sistema operativo que faz isso. Recomendamos que consulte a documentação oficial do seu sistema operativo para entender como gerenciar o ESP.
>
> Neste guia, o sistema operativo utilizado é o Debian.

Recomendamos que sincronize os seus ESP regularmente ou após cada atualização importante do sistema. Por predefinição, todas as partições do sistema EFI contêm os mesmos ficheiros após a instalação. No entanto, se estiver envolvida uma atualização importante do sistema, a sincronização dos ESP é essencial para manter o conteúdo atualizado.

<a name="script"></a>

#### Script

Aqui está um script que pode utilizar para os sincronizar manualmente. Também pode executar um script automatizado para sincronizar as partições diariamente ou sempre que o serviço iniciar.

Antes de executar o script, certifique-se de que o `rsync` está instalado no seu sistema :

**Debian/Ubuntu**

```sh
sudo apt install rsync
```

**CentOS, Red Hat e Fedora**

```sh
sudo yum install rsync
```

Para executar um script em Linux, necessita de um ficheiro executável :

- Comece por criar um ficheiro .sh no diretório da sua escolha, substituindo `nome-do-script` pelo nome da sua escolha.

```sh
sudo touch nome-do-script.sh
```

- Abra o ficheiro com um editor de texto e adicione as seguintes linhas :

```sh
sudo nano nome-do-script.sh
```

```sh
#!/bin/bash

set -euo pipefail

MOUNTPOINT="/var/lib/grub/esp"
MAIN_PARTITION=$(findmnt -n -o SOURCE /boot/efi)

echo "${MAIN_PARTITION} is the main partition"

mkdir -p "${MOUNTPOINT}"

while read -r partition; do
    if [[ "${partition}" == "${MAIN_PARTITION}" ]]; then
        continue
    fi
    echo "Working on ${partition}"
    mount "${partition}" "${MOUNTPOINT}"
    rsync -ax "/boot/efi/" "${MOUNTPOINT}/"
    umount "${MOUNTPOINT}"
done < <(blkid -o device -t LABEL=EFI_SYSPART)
```

Guarde e feche o ficheiro.

- Torne o script executável

```sh
sudo chmod +x nome-do-script.sh
```

- Execute o script

```sh
sudo ./nome-do-script.sh
```

- Se não estiver no diretório

```sh
./path/to/folder/nome-do-script.sh
```

Quando o script é executado, o conteúdo da partição EFI montada será sincronizado com as outras. Para aceder ao conteúdo, pode montar uma destas partições EFI não montadas no ponto de montagem: `/var/lib/grub/esp`.

<a name="diskfailure"></a>

### Simulação de uma falha de disco

Agora que temos todas as informações necessárias, podemos simular uma falha de disco e proceder aos testes. Neste primeiro exemplo, vamos provocar uma falha no disco principal `nvme0n1`.

O método preferido para o fazer é através do modo rescue da OVHcloud.

Reinicie primeiro o servidor em modo rescue e ligue-se com as credenciais fornecidas.

Para retirar um disco do RAID, o primeiro passo é marcá-lo como **Failed** e retirar as partições dos seus arrays RAID respetivos.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md3 : active raid1 nvme0n1p3[0] nvme1n1p3[1]
      497875968 blocks super 1.2 [2/2] [UU]
      bitmap: 0/4 pages [0KB], 65536KB chunk

md2 : active raid1 nvme0n1p2[2] nvme1n1p2[1]
      1046528 blocks super 1.2 [2/2] [UU]

unused devices: <none>
```

A partir do resultado acima, nvme0n1 contém duas partições em RAID que são **nvme0n1p2** e **nvme0n1p3**.

<a name="removedisk"></a>

#### Remoção do disco defeituoso

Primeiro, marcamos as partições **nvme0n1p2** e **nvme0n1p3** como defeituosas (*Failed*).

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md2 --fail /dev/nvme0n1p2
# mdadm: set /dev/nvme0n1p2 faulty in /dev/md2
```

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md3 --fail /dev/nvme0n1p3
# mdadm: set /dev/nvme0n1p3 faulty in /dev/md3
```

Quando executamos o comando `cat /proc/mdstat`, obtemos :

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md3 : active raid1 nvme0n1p3[0](F) nvme1n1p3[1]
      497875968 blocks super 1.2 [2/1] [_U]
      bitmap: 0/4 pages [0KB], 65536KB chunk

md2 : active raid1 nvme0n1p2[2](F) nvme1n1p2[1]
      1046528 blocks super 1.2 [2/1] [_U]

unused devices: <none>
```

Como podemos ver acima, o [F] ao lado das partições indica que o disco está defeituoso ou em falha.

Em seguida, retiramos estas partições dos arrays RAID para eliminar completamente o disco do RAID.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md2 --remove /dev/nvme0n1p2
# mdadm: hot removed /dev/nvme0n1p2 from /dev/md2
```

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md3 --remove /dev/nvme0n1p3
# mdadm: hot removed /dev/nvme0n1p3 from /dev/md3
```

O estado do nosso RAID deverá agora assemelhar-se a isto :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md3 : active raid1 nvme1n1p3[1]
      497875968 blocks super 1.2 [2/1] [_U]
      bitmap: 0/4 pages [0KB], 65536KB chunk

md2 : active raid1 nvme1n1p2[1]
      1046528 blocks super 1.2 [2/1] [_U]

unused devices: <none>
```

De acordo com os resultados acima, podemos ver que agora existem apenas duas partições nos arrays RAID. Conseguimos degradar com sucesso o disco **nvme0n1**.

Para nos certificarmos de obter um disco semelhante a um disco vazio, utilizamos o seguinte comando em cada partição, seguido do próprio disco :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ #
shred -s10M -n1 /dev/nvme0n1p1
shred -s10M -n1 /dev/nvme0n1p2
shred -s10M -n1 /dev/nvme0n1p3
shred -s10M -n1 /dev/nvme0n1p4
shred -s10M -n1 /dev/nvme0n1p5
shred -s10M -n1 /dev/nvme0n1
```

O disco aparece agora como um disco novo e vazio :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk

NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINTS
nvme1n1     259:0    0 476.9G  0 disk
├─nvme1n1p1 259:1    0   511M  0 part
├─nvme1n1p2 259:2    0     1G  0 part
│ └─md2       9:2    0  1022M  0 raid1
├─nvme1n1p3 259:3    0 474.9G  0 part
│ └─md3       9:3    0 474.8G  0 raid1
└─nvme1n1p4 259:4    0   512M  0 part
nvme0n1     259:5    0 476.9G  0 disk
```

Se executarmos o seguinte comando, verificamos que o nosso disco foi corretamente "apagado" :

```sh
parted /dev/nvme0n1
GNU Parted 3.5
Using /dev/nvme0n1
Welcome to GNU Parted! Type 'help' to view a list of commands.
(parted) p
Error: /dev/nvme0n1: unrecognised disk label
Model: WDC CL SN720 SDAQNTW-512G-2000 (nvme)
Disk /dev/nvme0n1: 512GB
Sector size (logical/physical): 512B/512B
Partition Table: unknown
Disk Flags:
```

Para mais informações sobre a preparação e a solicitação de substituição de um disco, consulte este [guia](/pages/bare_metal_cloud/dedicated_servers/disk_replacement).

Se executar o seguinte comando, pode obter mais detalhes sobre os arrays RAID :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --detail /dev/md3

/dev/md3:
           Version : 1.2
     Creation Time : Fri Aug  1 14:51:13 2025
        Raid Level : raid1
        Array Size : 497875968 (474.81 GiB 509.82 GB)
     Used Dev Size : 497875968 (474.81 GiB 509.82 GB)
      Raid Devices : 2
     Total Devices : 1
       Persistence : Superblock is persistent

     Intent Bitmap : Internal

       Update Time : Fri Aug  1 15:56:17 2025
             State : clean, degraded
    Active Devices : 1
   Working Devices : 1
    Failed Devices : 0
     Spare Devices : 0

Consistency Policy : bitmap

              Name : md3
              UUID : b383c3d5:7fb1bb5e:6b7c4d96:6ea817ff
            Events : 215

    Number   Major   Minor   RaidDevice State
       -       0        0        0      removed
       1     259        4        1      active sync   /dev/nvme1n1p3
```

Agora podemos proceder à substituição do disco.

<a name="raidrebuild"></a>

### Reconstrução do RAID

> [!primary]
> Este processo pode variar consoante o sistema operativo instalado no seu servidor. Recomendamos que consulte a documentação oficial do seu sistema operativo para obter os comandos adequados.
>

> [!warning]
>
> Na maioria dos servidores com RAID software, após a substituição de um disco, o servidor é capaz de arrancar em modo normal (no disco saudável) e a reconstrução pode ser efetuada em modo normal. No entanto, se o servidor não conseguir arrancar em modo normal após a substituição do disco, reiniciará em modo rescue para proceder à reconstrução do RAID.
>
> Se o seu servidor for capaz de arrancar em modo normal após a substituição do disco, siga apenas as etapas da [secção seguinte](#rebuilding-the-raid-in-normal-mode).

<a name="rescuemode"></a>

#### Reconstrução do RAID em modo rescue

Uma vez o disco substituído, o próximo passo consiste em copiar a tabela de partições do disco saudável (neste exemplo, nvme1n1) para o novo (nvme0n1).

**Para as partições GPT**

O comando deve estar neste formato : `sgdisk -R /dev/novo disco /dev/disco saudável`

No nosso exemplo :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -R /dev/nvme0n1 /dev/nvme1n1
```

Execute `lsblk` para se certificar de que as tabelas de partições foram corretamente copiadas :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk

NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINTS
nvme1n1     259:0    0 476.9G  0 disk
├─nvme1n1p1 259:1    0   511M  0 part
├─nvme1n1p2 259:2    0     1G  0 part
│ └─md2       9:2    0  1022M  0 raid1
├─nvme1n1p3 259:3    0 474.9G  0 part
│ └─md3       9:3    0 474.8G  0 raid1
└─nvme1n1p4 259:4    0   512M  0 part
nvme0n1     259:5    0 476.9G  0 disk
├─nvme0n1p1 259:10   0   511M  0 part
├─nvme0n1p2 259:11   0     1G  0 part
├─nvme0n1p3 259:12   0 474.9G  0 part
└─nvme0n1p4 259:13   0   512M  0 part
```

Uma vez feito isto, o próximo passo consiste em atribuir um GUID aleatório ao novo disco para evitar conflitos de GUID com outros discos :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -G /dev/nvme0n1
```

Se receber a seguinte mensagem :

```console
Warning: The kernel is still using the old partition table.
The new table will be used at the next reboot or after you run partprobe(8) or kpartx(8)
The operation has completed successfully.
```

Execute simplesmente o comando `partprobe`.

Agora podemos reconstruir a matriz RAID. O seguinte trecho de código mostra como adicionar novamente as novas partições (nvme0n1p2 e nvme0n1p3) à matriz RAID.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --add /dev/md2 /dev/nvme0n1p2
# mdadm: added /dev/nvme0n1p2

root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --add /dev/md3 /dev/nvme0n1p3
# mdadm: re-added /dev/nvme0n1p3
```

Para verificar o processo de reconstrução :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md3 : active raid1 nvme0n1p3[2] nvme1n1p3[1]
      497875968 blocks super 1.2 [2/1] [_U]
      [>....................]  recovery =  0.1% (801920/497875968) finish=41.3min speed=200480K/sec
      bitmap: 0/4 pages [0KB], 65536KB chunk

md2 : active raid1 nvme0n1p2[2] nvme1n1p2[1]
      1046528 blocks super 1.2 [2/2] [UU]
```

Uma vez a reconstrução do RAID terminada, execute o seguinte comando para se assegurar que as partições foram corretamente adicionadas ao RAID :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk -f
NAME        FSTYPE            FSVER LABEL          UUID                                 FSAVAIL FSUSE% MOUNTPOINTS
nvme1n1
├─nvme1n1p1 vfat              FAT16 EFI_SYSPART    4629-D183
├─nvme1n1p2 linux_raid_member 1.2   md2            83719c5c-2a27-2a56-5268-7d49d8a1d84f
│ └─md2     ext4              1.0   boot           4de80ae0-dd90-4256-9135-1735e7be4b4d
├─nvme1n1p3 linux_raid_member 1.2   md3            b383c3d5-7fb1-bb5e-6b7c-4d966ea817ff
│ └─md3     ext4              1.0   root           9bf386b6-9523-46bf-b8e5-4b8cc7c5786f
└─nvme1n1p4 swap              1     swap-nvme1n1p4 9bf292e8-0145-4d2f-b891-4cef93c0d209
nvme0n1
├─nvme0n1p1
├─nvme0n1p2 linux_raid_member 1.2   md2            83719c5c-2a27-2a56-5268-7d49d8a1d84f
│ └─md2     ext4              1.0   boot           4de80ae0-dd90-4256-9135-1735e7be4b4d
├─nvme0n1p3 linux_raid_member 1.2   md3            b383c3d5-7fb1-bb5e-6b7c-4d966ea817ff
│ └─md3     ext4              1.0   root           9bf386b6-9523-46bf-b8e5-4b8cc7c5786f
└─nvme0n1p4
```

De acordo com os resultados acima, as partições do novo disco foram corretamente adicionadas ao RAID. No entanto, a partição EFI System e a partição SWAP (em alguns casos) não foram duplicadas, o que é normal, pois não fazem parte do RAID.

> [!warning]
> Os exemplos acima ilustram apenas as etapas necessárias com base numa configuração de servidor predefinida. Os resultados de cada comando dependem do tipo de hardware instalado no seu servidor e da estrutura das suas partições. Em caso de dúvida, consulte a documentação do seu sistema operativo.
> 
> Se precisar de assistência profissional para a administração do seu servidor, consulte os detalhes da secção [Quer saber mais?](#go-further) deste guia.
>

<a name="recreateesp"></a>

#### Recriação da partição EFI System

Para recolocar a partição EFI System, temos de formatar **nvme0n1p1** e replicar o conteúdo da partição EFI System saudável (no nosso exemplo: nvme1n1p1) para esta.

Aqui, assumimos que as duas partições foram sincronizadas e contêm ficheiros actualizados.

> [!warning]
> Se uma actualização importante do sistema, tal como uma actualização do núcleo ou do GRUB, ocorreu e as duas partições não foram sincronizadas, consulte esta [secção](#rebuilding-raid-when-efi-partitions-are-not-synchronized-after-major-system-updates-eg-grub) uma vez que tenha terminado a criação da nova partição EFI System.
>

Em primeiro lugar, formatamos a partição :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkfs.vfat /dev/nvme0n1p1
```

Em seguida, atribuímos a etiqueta `EFI_SYSPART` à partição. (este nome é específico da OVHcloud) :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # fatlabel /dev/nvme0n1p1 EFI_SYSPART
```

Em seguida, replicamos o conteúdo de nvme1n1p1 para nvme0n1p1. Começamos por criar dois diretórios, que chamamos « old » e « new » no nosso exemplo :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkdir old new
```

Em seguida, montamos **nvme1n1p1** no diretório « old » e **nvme0n1p1** no diretório « new » para diferenciá-los :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/nvme1n1p1 old
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/nvme0n1p1 new
```

Em seguida, copiamos os ficheiros do diretório 'old' para 'new' :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # rsync -axv old/ new/
sending incremental file list
EFI/
EFI/debian/
EFI/debian/BOOTX64.CSV
EFI/debian/fbx64.efi
EFI/debian/grub.cfg
EFI/debian/grubx64.efi
EFI/debian/mmx64.efi
EFI/debian/shimx64.efi

sent 6,099,848 bytes  received 165 bytes  12,200,026.00 bytes/sec
total size is 6,097,843  speedup is 1.00
```

Uma vez feito isto, desmontamos as duas partições :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount /dev/nvme0n1p1
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount /dev/nvme1n1p1
```

Em seguida, montamos a partição contendo a raiz do nosso sistema operativo em `/mnt`. No nosso exemplo, esta partição é **md3**:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/md3 /mnt
```

Montamos os seguintes diretórios para nos assegurarmos que qualquer manipulação que realizamos no ambiente `chroot` funciona corretamente :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ #
mount --types proc /proc /mnt/proc
mount --rbind /sys /mnt/sys
mount --make-rslave /mnt/sys
mount --rbind /dev /mnt/dev
mount --make-rslave /mnt/dev
mount --bind /run /mnt/run
mount --make-slave /mnt/run
```

Em seguida, utilizamos o comando `chroot` para aceder ao ponto de montagem e assegurar-nos que a nova partição do sistema EFI foi corretamente criada e que o sistema reconhece as duas ESP :

```sh
root@rescue12-customer-eu:/# chroot /mnt
```

Para mostrar as partições ESP, executamos o comando `blkid -t LABEL=EFI_SYSPART` :

```sh
root@rescue12-customer-eu:/# blkid -t LABEL=EFI_SYSPART
/dev/nvme1n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="4629-D183" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="889f241b-49c3-4031-b5c9-60df0746f98f"
/dev/nvme0n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="521F-300B" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="02bf2b2d-7ada-4461-ba50-07683519f65d"
```

Os resultados acima mostram que a nova partição EFI foi criada corretamente e que a etiqueta foi aplicada corretamente.

<a name="efiraidgrub"></a>

#### Reconstrução do RAID quando as partições EFI não estão sincronizadas após actualizações importantes do sistema (GRUB)

/// details | **Expanda esta secção**

> [!warning]
> Siga as etapas desta secção apenas se se aplicarem ao seu caso.
> 

Quando as partições do sistema EFI não estão sincronizadas após actualizações importantes do sistema que modificam/afetam o GRUB, e o disco principal no qual a partição está montada é substituído, o arranque a partir de um disco secundário contendo uma ESP obsoleta pode não funcionar.

Neste caso, para além de reconstruir o RAID e recolocar a partição do sistema EFI no modo rescue, também deve reinstalar o GRUB nela.

Uma vez que tenhamos recolocado a partição EFI e nos certificamos que o sistema reconhece as duas partições (etapas anteriores no `chroot`), criamos a pasta `/boot/efi` para montar a nova partição do sistema EFI **nvme0n1p1** :

```sh
root@rescue12-customer-eu:/# mount /boot
root@rescue12-customer-eu:/# mount /dev/nvme0n1p1 /boot/efi
```

Em seguida, reinstalamos o carregador de arranque GRUB (*bootloader*) :

```sh
root@rescue12-customer-eu:/# grub-install --efi-directory=/boot/efi /dev/nvme0n1p1
```

Uma vez feito isto, execute o seguinte comando :

```sh
root@rescue12-customer-eu:/# update-grub
```
///

<a name="swap-partition"></a>

#### Adição da etiqueta à partição SWAP (se aplicável)

Uma vez que tenhamos terminado com a partição EFI, passamos à partição SWAP.

Sair do ambiente `chroot` com `exit` para recolocar a nossa partição [SWAP] **nvme0n1p4** e adicionar a etiqueta `swap-nvme0n1p4` :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkswap /dev/nvme0n1p4 -L swap-nvme0n1p4
Setting up swapspace version 1, size = 512 MiB (536866816 bytes)
LABEL=swap-nvme0n1p4, UUID=b3c9e03a-52f5-4683-81b6-cc10091fcd
```

Verificamos que a etiqueta foi corretamente aplicada :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk -f
NAME FSTYPE FSVER LABEL UUID                                 FSAVAIL FSUSE% MOUNTPOINTS
nvme1n1

├─nvme1n1p1
│    vfat   FAT16 EFI_SYSPART
│                       BA77-E844                             504.9M     1% /root/old
├─nvme1n1p2
│    linux_ 1.2   md2   53409058-480a-bc65-4e1d-6acc848fe233
│ └─md2
│    ext4   1.0   boot  f925a033-0087-40ec-817e-44efab0351ac
├─nvme1n1p3
│    linux_ 1.2   md3   a3b8816c-a5c3-7f01-ee17-e1aa9685c35c
│ └─md3
│    ext4   1.0   root  6abfaa3b-e630-457a-bbe0-e00e5b4b59e5  441.2G     0% /mnt
└─nvme1n1p4
     swap   1     swap-nvme1n1p4
                        d6af33cf-fc15-4060-a43c-cb3b5537f58a
nvme0n1

├─nvme0n1p1
│    vfat   FAT16 EFI_SYSPART
│                       477D-6658
├─nvme0n1p2
│    linux_ 1.2   md2   53409058-480a-bc65-4e1d-6acc848fe233
│ └─md2
│    ext4   1.0   boot  f925a033-0087-40ec-817e-44efab0351ac
├─nvme0n1p3
│    linux_ 1.2   md3   a3b8816c-a5c3-7f01-ee17-e1aa9685c35c
│ └─md3
│    ext4   1.0   root  6abfaa3b-e630-457a-bbe0-e00e5b4b59e5  441.2G     0% /mnt
└─nvme0n1p4
     swap   1     swap-nvme0n1p4
                        b3c9e03a-52f5-4683-81b6-cc10091fcd15
```

Acedemos novamente ao ambiente `chroot` :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # chroot /mnt
```

Recuperamos o UUID das duas partições SWAP:

```sh
root@rescue12-customer-eu:/# blkid -s UUID blkid /dev/nvme0n1p4
/dev/nvme0n1p4: UUID="b3c9e03a-52f5-4683-81b6-cc10091fcd15"

root@rescue12-customer-eu:/# blkid -s UUID blkid /dev/nvme1n1p4
/dev/nvme1n1p4: UUID="d6af33cf-fc15-4060-a43c-cb3b5537f58a"
```

Em seguida, substituímos o UUID antigo da partição SWAP (**nvme0n1p4**) pelo novo no ficheiro `/etc/fstab`:

```sh
root@rescue12-customer-eu:/# nano /etc/fstab
```

Exemplo:

```sh
UUID=6abfaa3b-e630-457a-bbe0-e00e5b4b59e5       /       ext4    defaults       0       1
UUID=f925a033-0087-40ec-817e-44efab0351ac       /boot   ext4    defaults       0       0
LABEL=EFI_SYSPART       /boot/efi       vfat    defaults        0     1
UUID=b7b5dd38-9b51-4282-8f2d-26c65e8d58ec       swap    swap    defaults       0       0
UUID=d6af33cf-fc15-4060-a43c-cb3b5537f58a       swap    swap    defaults       0       0
```

Com base nos resultados acima, o UUID antigo é `b7b5dd38-9b51-4282-8f2d-26c65e8d58ec` e deve ser substituído pelo novo `b3c9e03a-52f5-4683-81b6-cc10091fcd15`. Certifique-se de substituir o UUID correto.

Em seguida, verificamos se tudo está montado corretamente com o seguinte comando:

```sh
root@rescue12-customer-eu:/# mount -av
/                        : ignored
/boot                    : successfully mounted
/boot/efi                : successfully mounted
swap                     : ignored
swap                     : ignored
```

Ativamos a partição SWAP:

```sh
root@rescue12-customer-eu:/# swapon -av

swapon: /dev/nvme0n1p4: found signature [pagesize=4096, signature=swap]
swapon: /dev/nvme0n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/nvme0n1p4
swapon: /dev/nvme1n1p4: found signature [pagesize=4096, signature=swap]
swapon: /dev/nvme1n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/nvme1n1p4
```

Saímos do ambiente chroot com `exit` e recarregamos o sistema:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # systemctl daemon-reload
```

Desmontamos todos os discos:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount -Rl /mnt
```

Agora concluímos com sucesso a reconstrução do RAID no servidor e podemos reiniciá-lo no modo normal.

<a name="normalmode"></a>

#### Reconstrução do RAID no modo normal

/// details | **Expanda esta secção**

Se o seu servidor conseguir iniciar no modo normal após a substituição do disco, pode seguir as etapas abaixo para reconstruir o RAID.

Depois de substituir o disco, copiamos a tabela de partições do disco saudável (neste exemplo, nvme1n1) para o novo (nvme0n1).

**Para partições GPT**

```sh
sgdisk -R /dev/nvme0n1 /dev/nvme1n1
```

O comando deve estar neste formato: `sgdisk -R /dev/novo disco /dev/disco saudável`.

Feito isso, o próximo passo é atribuir um GUID aleatório ao novo disco para evitar conflitos de GUID com outros discos:

```sh
sgdisk -G /dev/nvme0n1
```

Se receber a seguinte mensagem:

```console
Warning: The kernel is still using the old partition table.
The new table will be used at the next reboot or after you
run partprobe(8) or kpartx(8)
The operation has completed successfully.
```

Basta executar o comando `partprobe`. Se ainda não conseguir ver as novas partições criadas (por exemplo, com `lsblk`), deve reiniciar o servidor antes de continuar.

Em seguida, adicionamos as partições ao RAID:

```sh
[user@server_ip ~]# sudo mdadm --add /dev/md2 /dev/nvme0n1p2

# mdadm: added /dev/nvme0n1p2

[user@server_ip ~]# sudo mdadm --add /dev/md3 /dev/nvme0n1p3

# mdadm: re-added /dev/nvme0n1p3
```

Utilize o seguinte comando para seguir a reconstrução do RAID: `cat /proc/mdstat`.

**Recriação da partição do sistema EFI no disco**

Primeiro, instalamos as ferramentas necessárias:

**Debian e Ubuntu**

```sh
[user@server_ip ~]# sudo apt install dosfstools
```

**CentOS**

```sh
[user@server_ip ~]# sudo yum install dosfstools
```

Em seguida, formatamos a partição. No nosso exemplo `nvme0n1p1`:

```sh
[user@server_ip ~]# sudo mkfs.vfat /dev/nvme0n1p1
```

Em seguida, atribuímos a etiqueta `EFI_SYSPART` à partição. (este nome é específico da OVHcloud):

```sh
[user@server_ip ~]# sudo fatlabel /dev/nvme0n1p1 EFI_SYSPART
```

Depois disso, pode sincronizar as duas partições com o script que fornecemos [aqui](#script).

Verificamos que a nova partição do sistema EFI foi corretamente criada e que o sistema a reconhece:

```sh
[user@server_ip ~]# sudo blkid -t LABEL=EFI_SYSPART
/dev/nvme1n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="4629-D183" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="889f241b-49c3-4031-b5c9-60df0746f98f"
/dev/nvme0n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="521F-300B" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="02bf2b2d-7ada-4461-ba50-07683519f65d"
```

Por fim, ativamos a partição [SWAP] (se aplicável):

- Criamos e adicionamos a etiqueta:

```sh
[user@server_ip ~]# sudo mkswap /dev/nvme0n1p4 -L swap-nvme0n1p4
```

- Recuperamos os UUID das duas partições SWAP:

```sh
[user@server_ip ~]# sudo blkid -s /dev/nvme0n1p4
/dev/nvme0n1p4: UUID="b3c9e03a-52f5-4683-81b6-cc10091fcd15"
[user@server_ip ~]# sudo blkid -s /dev/nvme1n1p4
/dev/nvme1n1p4: UUID="d6af33cf-fc15-4060-a43c-cb3b5537f58a"
```

- Substituímos o antigo UUID da partição SWAP (**nvme0n1p4)** pelo novo em `/etc/fstab`:

```sh
[user@server_ip ~]# sudo nano /etc/fstab
```

Exemplo:

```sh
[user@server_ip ~]# sudo nano /etc/fstab
UUID=6abfaa3b-e630-457a-bbe0-e00e5b4b59e5       /       ext4    defaults       0       1
UUID=f925a033-0087-40ec-817e-44efab0351ac       /boot   ext4    defaults       0       0
LABEL=EFI_SYSPART       /boot/efi       vfat    defaults        0     1
UUID=b7b5dd38-9b51-4282-8f2d-26c65e8d58ec       swap    swap    defaults       0       0
UUID=d6af33cf-fc15-4060-a43c-cb3b5537f58a       swap    swap    defaults       0       0
```

De acordo com os resultados acima, o antigo UUID é `b7b5dd38-9b51-4282-8f2d-26c65e8d58ec` e deve ser substituído pelo novo `b3c9e03a-52f5-4683-81b6-cc10091fcd15`.

Certifique-se de substituir o UUID correto.

Em seguida, executamos o seguinte comando para ativar a partição SWAP:

```sh
[user@server_ip ~]# sudo swapon -av
swapon: /dev/nvme0n1p4: found signature [pagesize=4096, signature=swap]
swapon: /dev/nvme0n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/nvme0n1p4
swapon: /dev/nvme1n1p4: found signature [pagesize=4096, signature=swap]
swapon: /dev/nvme1n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/nvme1n1p4
```

Em seguida, recarregamos o sistema:

```sh
[user@server_ip ~]# sudo systemctl daemon-reload
```
///

Agora terminámos com sucesso a reconstrução do RAID.

## Quer saber mais?

[Hot Swap - Software RAID](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_soft)

[OVHcloud API and Storage](/pages/bare_metal_cloud/dedicated_servers/partitioning_ovh)

[Managing hardware RAID](/pages/bare_metal_cloud/dedicated_servers/raid_hard)

[Hot Swap - Hardware RAID](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_hard)

Para serviços especializados (SEO, desenvolvimento, etc.), contacte [os parceiros da OVHcloud](/links/partner).

Se precisar de assistência para utilizar e configurar as suas soluções OVHcloud, consulte as [nossas ofertas de suporte](/links/support).

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique [neste link](/links/professional-services) para obter um orçamento e solicitar que a equipa de Professional Services intervenha no seu caso de utilização específico.

Fale com a nossa [comunidade de utilizadores](/links/community).