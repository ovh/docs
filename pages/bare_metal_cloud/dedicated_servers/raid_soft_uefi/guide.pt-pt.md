---
title: "Gerir o RAID por software (modo de arranque UEFI) num servidor dedicado"
excerpt: "Faça a gestão e reconstrua o RAID por software após a substituição de um disco num servidor dedicado em modo de arranque UEFI."
updated: 2026-01-26
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

**Este guia explica como gerir e reconstruir um RAID software após a substituição de um disco no seu servidor em modo UEFI.**

Antes de começar, note que este guia está focado em servidores dedicados que utilizam o modo UEFI como modo de arranque. Este é o caso das placas-mãe modernas. Se o seu servidor utiliza o modo de arranque legacy (BIOS), consulte este guia: [Gestão e reconstrução de um RAID software em servidores no modo de arranque legacy (BIOS)](/pages/bare_metal_cloud/dedicated_servers/raid_soft).

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

- O disco principal é o disco cuja partição ESP (EFI System Partition) está montada pelo Linux.
- O(s) disco(s) secundário(s) são todos os outros discos do RAID.

## Instruções

Quando compra um novo servidor, pode sentir a necessidade de realizar uma série de testes e ações. Um tal teste pode ser simular uma falha de disco para compreender o processo de reconstrução do RAID.

### Visão geral do conteúdo

- [Informações básicas](#basicinformation)
- [Compreensão da partição do sistema EFI (ESP)](#efisystempartition)
- [Simulação de falha de disco](#diskfailure)
    - [Remoção do disco defeituoso](#removedisk)
- [Reconstrução do RAID (com ESP não espelhadas)](#raidrebuildnonmirrored)
    - [Reconstrução do RAID após a substituição do disco principal (modo rescue)](#nonmirroredrescuemode)
    - [Recriação da partição EFI System](#recreateesp)
    - [Reconstrução do RAID com ESP não sincronizados após atualizações importantes do sistema (GRUB)](#efiraidgrub)
    - [Reconstrução do RAID após a substituição do disco principal (modo normal)](#nonmirrorednormalmode)
- [Reconstrução do RAID (com ESP em espelho)](#raidrebuildmirrored)
- [Adição da etiqueta à partição SWAP (se aplicável)](#swap-partition)

<a name="basicinformation"></a>

### Informações básicas

Numa sessão de linha de comandos, introduza o seguinte comando para determinar o estado atual do RAID:

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

De acordo com os resultados, temos atualmente dois dispositivos RAID software configurados, **md2** e **md3**, com **md3** sendo o maior dos dois. **md3** é composto por duas partições, chamadas **nvme0n1p3** e **nvme1n1p3**.

O [UU] significa que todos os discos estão a funcionar normalmente. Um `_` indicaria um disco defeituoso.

Em outros casos, obteria os seguintes resultados:

```sh
Personalities : [raid1]
md3 : active raid1 nvme0n1p3[1] nvme1n1p3[0]
      497875968 blocks super 1.2 [2/2] [UU]
      bitmap: 2/4 pages [8KB], 65536KB chunk

md1 : active raid1 nvme0n1p1[1] nvme1n1p1[0]
      523200 blocks [2/2] [UU]

md2 : active raid1 nvme1n1p2[0] nvme0n1p2[1]
      1046528 blocks super 1.2 [2/2] [UU]

unused devices: <none>
```

De acordo com os resultados, temos atualmente três dispositivos RAID software configurados, **md1**, **md2** e **md3**, com **md3** sendo o maior dos dois. **md3** é composto por duas partições, chamadas **nvme0n1p3** e **nvme1n1p3**.

Se tiver um servidor com discos SATA, obterá os seguintes resultados:

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

Este comando mostra-nos os volumes RAID, mas não o tamanho das partições. Podemos encontrar esta informação com `fdisk -l`:

/// details | **fdisk -l**

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

Este comando também permite identificar o tipo de partição.

Para partições **GPT**, a linha 6 exibe: `Disklabel type: gpt`.
Esta informação só é visível quando o servidor está no modo normal.

Ainda com base nos resultados, podemos ver que `/dev/md2` é composto por 1022 MiB e `/dev/md3` contém 474,81 GiB. Se executarmos o comando `mount`, também podemos encontrar a disposição dos discos.

///

Como alternativa, o comando `lsblk` oferece uma visão diferente das partições:

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

Além disso, se executarmos `lsblk -f`, obtemos mais informações sobre estas partições, tais como o LABEL e o UUID:

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

Note os dispositivos, as partições e os pontos de montagem, pois isso é importante, especialmente após a substituição de um disco. Isso permitirá verificar que as partições estão corretamente montadas nos seus respetivos pontos de montagem no novo disco.

No nosso exemplo, temos:

- Duas matrizes RAID: `/dev/md2` e `/dev/md3`.
- Partições pertencentes ao RAID: **nvme0n1p2**, **nvme0n1p3**, **nvme1n1p2** e **nvme0n1p3** com os pontos de montagem `/boot` e `/`.
- Partições que não pertencem ao RAID: **nvme0n1p1**, **nvme0n1p4** e **nvme1n1p4** com os pontos de montagem `/boot/efi` e [SWAP].
- Uma partição não tem ponto de montagem: **nvme1n1p1**.

A partição `nvme0n1p5` é uma partição de configuração, ou seja, um volume somente leitura ligado ao servidor que lhe fornece os dados de configuração inicial.

<a name="efisystempartition"></a>

### Compreender a partição do sistema EFI (ESP)

/// details | **Desdobrar esta secção**

***O que é uma partição do sistema EFI?***

Uma partição do sistema EFI é uma partição que pode conter os carregadores de arranque, os gestores de arranque ou as imagens do kernel de um sistema operativo instalado. Também pode conter programas utilitários do sistema destinados a serem executados antes do arranque do sistema operativo, bem como ficheiros de dados tais como registos de erros.

***A partição do sistema EFI está incluída no RAID?***

A partir de dezembro de 2025, apenas as seguintes versões do sistema operativo espelham a partição do sistema EFI no RAID para novas instalações ou reinstalações:

* Debian 13
* Proxmox 9
* Ubuntu 25.10
* AlmaLinux e Rocky Linux 10
* Fedora 43

Para versões anteriores destes sistemas operativos, a partição EFI não é espelhada no RAID; são criadas várias ESP, uma por disco. No entanto, apenas uma ESP é montada de cada vez, e todas as ESP contêm os mesmos ficheiros. A partição do sistema EFI é montada em `/boot/efi`, e o disco em que está montada é selecionado pelo Linux no arranque.

Pode utilizar o comando `lsblk` para verificar se a sua partição faz parte de uma configuração RAID.

> [!tabs]
> **ESP não espelhada**
>>
>> ```sh
>> lsblk
>> NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINTS
>> nvme0n1     259:0    0 476.9G  0 disk
>> ├─nvme0n1p1 259:6    0   511M  0 part
>> ├─nvme0n1p2 259:7    0     1G  0 part
>> │ └─md2       9:2    0  1022M  0 raid1 /boot
>> ├─nvme0n1p3 259:8    0 474.9G  0 part
>> │ └─md3       9:3    0 474.8G  0 raid1 /
>> ├─nvme0n1p4 259:9    0   512M  0 part  [SWAP]
>> └─nvme0n1p5 259:10   0     2M  0 part
>> nvme1n1     259:1    0 476.9G  0 disk
>> ├─nvme1n1p1 259:2    0   511M  0 part  /boot/efi
>> ├─nvme1n1p2 259:3    0     1G  0 part
>> │ └─md2       9:2    0  1022M  0 raid1 /boot
>> ├─nvme1n1p3 259:4    0 474.9G  0 part
>> │ └─md3       9:3    0 474.8G  0 raid1 /
>> └─nvme1n1p4 259:5    0   512M  0 part  [SWAP]
>> ```
>>
>> De acordo com os resultados acima, podemos ver que apenas uma partição do sistema EFI está montada em `/boot/efi`. As ESP, portanto, não estão espelhadas (replicadas).
>>
> **ESP espelhada**
>>
>> ```sh
>> lsblk
>> NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINTS
>> nvme0n1     259:0    0 476.9G  0 disk
>> ├─nvme0n1p1 259:1    0   511M  0 part
>> │ └─md1       9:1    0 510.9M  0 raid1 /boot/efi
>> ├─nvme0n1p2 259:2    0     1G  0 part
>> │ └─md2       9:2    0  1022M  0 raid1 /boot
>> ├─nvme0n1p3 259:3    0 474.9G  0 part
>> │ └─md3       9:3    0 474.8G  0 raid1 /
>> └─nvme0n1p4 259:4    0   512M  0 part  [SWAP]
>> nvme1n1     259:5    0 476.9G  0 disk
>> ├─nvme1n1p1 259:6    0   511M  0 part
>> │ └─md1       9:1    0 510.9M  0 raid1 /boot/efi
>> ├─nvme1n1p2 259:7    0     1G  0 part
>> │ └─md2       9:2    0  1022M  0 raid1 /boot
>> ├─nvme1n1p3 259:8    0 474.9G  0 part
>> │ └─md3       9:3    0 474.8G  0 raid1 /
>> ├─nvme1n1p4 259:9    0   512M  0 part  [SWAP]
>> └─nvme1n1p5 259:10   0     2M  0 part
>> ```
>>
>> De acordo com os resultados acima, podemos ver que as duas partições do sistema EFI estão montadas em `/boot/efi`. Estão, portanto, espelhadas no RAID.
>>

***O conteúdo da partição do sistema EFI muda regularmente?***

Em geral, o conteúdo desta partição não muda muito, o seu conteúdo só deve mudar durante as atualizações do carregador de arranque (*bootloader*) (por exemplo, GRUB).

No entanto, se a sua partição EFI não estiver espelhada, recomendamos que execute um script automático ou manual para sincronizar todas as ESP, de modo que contenham todos os mesmos ficheiros atualizados. Assim, se o disco em que esta partição está montada falhar, o servidor poderá reiniciar a partir da ESP de um dos outros discos.

***O que acontece se o disco principal (com a partição do sistema EFI montada) falhar?***

Se a sua ESP não estiver espelhada, pode encontrar as seguintes dificuldades:

> [!primary]
> Note que, embora abaixo examinemos os casos mais comuns, existem várias outras razões pelas quais um servidor pode não conseguir arrancar em modo normal após a substituição de um disco.
> 

**Estudo de caso 1** - Nenhuma modificação ou atualização maior (por exemplo, GRUB) foi feita no sistema operativo.

- O servidor é capaz de arrancar em modo normal e pode proceder à reconstrução do RAID.
- O servidor não consegue arrancar em modo normal. Utilize o ambiente do modo rescue para reconstruir o RAID e recriar a partição EFI no novo disco.

**Estudo de caso 2** - Foram feitas atualizações maiores do sistema (por exemplo, GRUB) e as ESP estão sincronizadas.

- O servidor é capaz de arrancar em modo normal porque todas as ESP contêm informações atualizadas e a reconstrução do RAID pode ser feita em modo normal.
- O servidor não consegue arrancar em modo normal. Utilize o ambiente do modo rescue para reconstruir o RAID e recriar a partição EFI no novo disco.

**Estudo de caso 3** - Foram feitas atualizações maiores do sistema (por exemplo, GRUB) no sistema operativo e as partições ESP não foram sincronizadas.

- O servidor não consegue arrancar em modo normal. Utilize o ambiente do modo rescue para reconstruir o RAID, recriar a partição do sistema EFI no novo disco e reinstalar o carregador de arranque (*bootloader*) (por exemplo, GRUB).
- O servidor é capaz de arrancar em modo normal (isso pode acontecer no caso de um sistema operativo ser atualizado mas a versão de GRUB permanecer inalterada), o que permite proceder à reconstrução do RAID.

Em alguns casos, o arranque a partir de uma ESP obsoleta pode falhar; por exemplo, uma atualização maior de GRUB pode tornar o binário GRUB na ESP incompatível com os novos módulos GRUB na partição `/boot`.

***Como posso sincronizar as minhas partições do sistema EFI e com que frequência devo sincronizá-las?***

Se a sua partição do sistema EFI não estiver espelhada, tenha em conta os seguintes pontos:

> [!primary]
> Note que o processo pode variar consoante o seu sistema operativo. Por exemplo, o Ubuntu pode sincronizar várias partições do sistema EFI a cada atualização de GRUB, mas é o único sistema operativo que o faz. Recomendamos que consulte a documentação oficial do seu sistema operativo para compreender como gerir as ESP.
>
> Neste guia, o sistema operativo utilizado é o Debian.

Recomendamos que sincronize as suas ESP regularmente ou após cada atualização maior do sistema. Por defeito, todas as partições do sistema EFI contêm os mesmos ficheiros após a instalação. No entanto, se uma atualização maior do sistema estiver envolvida, a sincronização das ESP é essencial para manter o conteúdo atualizado.

A execução de um script é um meio eficaz de sincronizar regularmente as suas partições. Abaixo encontrará um script que pode utilizar para sincronizar manualmente as suas ESP. Também pode configurar um script automático para as sincronizar diariamente ou a cada arranque do sistema.

Antes de executar o script, certifique-se de que `rsync` está instalado no seu sistema:

**Debian/Ubuntu**

```sh
sudo apt install rsync
```

**CentOS, Red Hat e Fedora**

```sh
sudo yum install rsync
```

Para executar um script em Linux, precisa de um ficheiro executável:

- Comece por criar um ficheiro .sh no diretório da sua escolha, substituindo `script_name` pelo nome da sua escolha.

```sh
sudo touch script_name.sh
```

- Abra o ficheiro com um editor de texto e adicione as seguintes linhas:

```sh
sudo nano script_name.sh
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
sudo chmod +x script_name.sh
```

- Execute o script

```sh
sudo ./script_name.sh
```

- Se não estiver no diretório

```sh
./caminho/para/diretório/script_name.sh
```

Quando o script é executado, o conteúdo da partição EFI montada será sincronizado com as outras. Para aceder ao conteúdo, pode montar uma destas partições EFI não montadas no ponto de montagem: `/var/lib/grub/esp`.

///

<a name="diskfailure"></a>

### Simulação de uma falha de disco

Agora que dispomos das informações necessárias, podemos simular uma falha de disco. Neste exemplo, vamos provocar a falha do disco principal `nvme0n1` (note que é o disco em que está montada a ESP).

O método preferido para o fazer é através do modo rescue da OVHcloud.

Reinicie o servidor em modo rescue e ligue-se com as credenciais fornecidas.

Para remover um disco do RAID, o primeiro passo é marcá-lo como **Failed** e remover as partições dos respetivos arrays RAID.

**Nota**: trata-se apenas de uma ilustração; adapte os comandos à sua própria configuração.

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

A partir do resultado acima, nvme0n1 tem duas partições em RAID que são **nvme0n1p2** e **nvme0n1p3**.

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

Em seguida, executamos o comando `cat /proc/mdstat`:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md3 : active raid1 nvme0n1p3[0](F) nvme1n1p3[1]
      497875968 blocks super 1.2 [2/1] [_U]
      bitmap: 0/4 pages [0KB], 65536KB chunk

md2 : active raid1 nvme0n1p2[2](F) nvme1n1p2[1]
      1046528 blocks super 1.2 [2/1] [_U]

unused devices: <none>
```

Como podemos ver acima, o [F] ao lado das partições indica que o disco está defeituoso ou em falha.

Em seguida, removemos estas partições dos arrays RAID para eliminar completamente o disco do RAID.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md2 --remove /dev/nvme0n1p2
# mdadm: hot removed /dev/nvme0n1p2 from /dev/md2
```

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md3 --remove /dev/nvme0n1p3
# mdadm: hot removed /dev/nvme0n1p3 from /dev/md3
```

O estado do RAID deverá agora parecer-se com isto:

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

Agora, apenas duas partições aparecem atualmente nos arrays RAID. Conseguimos provocar com sucesso a falha do disco **nvme0n1**.

Para obter um disco semelhante a um disco vazio, execute o seguinte comando em cada partição, depois no disco:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ #
shred -s10M -n1 /dev/nvme0n1p1
shred -s10M -n1 /dev/nvme0n1p2
shred -s10M -n1 /dev/nvme0n1p3
shred -s10M -n1 /dev/nvme0n1p4
shred -s10M -n1 /dev/nvme0n1
```

O disco aparece agora como um disco novo e vazio:

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

Execute o seguinte comando para verificar que o disco foi realmente "apagado":

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

Além disso, se executar o seguinte comando, obterá mais detalhes sobre os arrays RAID:

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

Podemos agora proceder à substituição do disco e à reconstrução do RAID.

<a name="raidrebuildnonmirrored"></a>

### Reconstrução do RAID (com ESP não espelhadas)

> [!primary]
> Este processo pode variar consoante o sistema operativo instalado no seu servidor. Recomendamos que consulte a documentação oficial do seu sistema operativo para obter os comandos adequados.
>
> Se o seu servidor conseguir arrancar em modo normal após a substituição do disco, siga simplesmente as etapas descritas [nesta secção](#nonmirrorednormalmode) se a sua partição EFI não estiver espelhada ou [nesta secção](#raidrebuildmirrored) se a sua partição EFI estiver espelhada.
>

#### Reconstrução do RAID após a substituição do disco principal (modo rescue) <a name="nonmirroredrescuemode"></a>

Uma vez o disco substituído, copie a tabela de partições do disco saudável (neste exemplo, nvme1n1) para o novo disco (nvme0n1).

**Para as partições GPT**

O comando deve estar neste formato: `sgdisk -R /dev/novo disco /dev/disco saudável`

Exemplo:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -R /dev/nvme0n1 /dev/nvme1n1
```

Execute `lsblk` para se certificar de que as tabelas de partições foram corretamente copiadas:

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

Em seguida, aleatorize o GUID do novo disco para evitar quaisquer conflitos com os GUID de outros discos:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -G /dev/nvme0n1
```

Se receber a seguinte mensagem:

```console
Warning: The kernel is still using the old partition table.
The new table will be used at the next reboot or after you run partprobe(8) or kpartx(8)
The operation has completed successfully.
```

Execute simplesmente o comando `partprobe`.

Em seguida, reconstruímos o array RAID. O seguinte excerto mostra como adicionar as novas partições (`nvme0n1p2` e `nvme0n1p3`) ao array RAID.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --add /dev/md2 /dev/nvme0n1p2
# mdadm: added /dev/nvme0n1p2

root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --add /dev/md3 /dev/nvme0n1p3
# mdadm: re-added /dev/nvme0n1p3
```

Para verificar o processo de reconstrução:

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

Depois de terminada a reconstrução do RAID, execute o seguinte comando para se certificar de que as partições foram corretamente adicionadas ao RAID:

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

Para recolocar a partição EFI System no novo disco, temos de formatar **nvme0n1p1** e replicar o conteúdo da partição EFI System saudável (no nosso exemplo: nvme1n1p1) para esta última.

Aqui, assumimos que as duas partições foram sincronizadas e contêm ficheiros atualizados.

> [!warning]
> Se uma atualização importante do sistema, tal como uma atualização do kernel ou do GRUB, tiver ocorrido e as duas partições não tiverem sido sincronizadas, consulte esta [secção](#efiraidgrub) uma vez que tenha terminado a criação da nova partição EFI System.
>

Primeiro, formate a partição:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkfs.vfat /dev/nvme0n1p1
```

Em seguida, nomeie a partição `EFI_SYSPART` (este nome é específico da OVHcloud):

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # fatlabel /dev/nvme0n1p1 EFI_SYSPART
```

Em seguida, duplique o conteúdo de nvme1n1p1 para nvme0n1p1.

Comece por criar dois diretórios, nomeados `old` e `new` neste exemplo:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkdir old new
```

Em seguida, monte **nvme1n1p1** no diretório `old` e **nvme0n1p1** no diretório `new` para fazer a distinção:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/nvme1n1p1 old
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/nvme0n1p1 new
```

Copie os ficheiros do diretório `old` para o diretório `new`:

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

Depois disso, desmonte as duas partições:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount /dev/nvme0n1p1
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount /dev/nvme1n1p1
```

Em seguida, monte a partição contendo a raiz do sistema operativo em `/mnt`. Neste exemplo, esta partição é **md3**.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/md3 /mnt
```

Monte os seguintes diretórios para se certificar de que todas as modificações feitas no ambiente `chroot` funcionam corretamente:

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

Em seguida, utilize o comando `chroot` para aceder ao ponto de montagem e verifique se a nova partição do sistema EFI foi corretamente criada e se o sistema reconhece os dois ESP:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # chroot /mnt
```

Para mostrar as partições ESP, execute o comando `blkid -t LABEL=EFI_SYSPART`:

```sh
root@rescue12-customer-eu:/# blkid -t LABEL=EFI_SYSPART
/dev/nvme1n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="4629-D183" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="889f241b-49c3-4031-b5c9-60df0746f98f"
/dev/nvme0n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="521F-300B" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="02bf2b2d-7ada-4461-ba50-07683519f65d"
```

Os resultados acima mostram que a nova partição EFI foi criada corretamente e que o LABEL foi aplicado corretamente.

Depois disso, saia do ambiente `chroot`:

```sh
root@rescue12-customer-eu:/# exit
```

Em seguida, consulte [esta secção](#swap-partition) para recolocar a partição SWAP (se aplicável).

#### Reconstrução do RAID com ESP não sincronizados após atualizações importantes do sistema (GRUB) <a name="efiraidgrub"></a>

/// details | **Desdobre esta secção**

> [!warning]
> Siga as etapas desta secção apenas se aplicável ao seu caso.
>

Se o disco principal for substituído enquanto contém partições do sistema EFI que não foram sincronizadas após atualizações importantes do sistema que modificaram o GRUB, o arranque a partir de um dos discos secundários com uma ESP obsoleta pode falhar.

Neste caso, para além de reconstruir o RAID e recolocar a partição do sistema EFI em modo rescue, também terá de reinstalar o GRUB nela.

Uma vez criada a ESP (como explicado acima) e reconhecida pelo sistema, ainda no ambiente `chroot`, crie a pasta /boot/efi para montar a nova partição do sistema EFI **nvme0n1p1**.

```sh
root@rescue12-customer-eu:/# mount /boot
root@rescue12-customer-eu:/# mount /dev/nvme0n1p1 /boot/efi
```

Em seguida, reinstale o carregador de arranque GRUB (*bootloader*):

```sh
root@rescue12-customer-eu:/# grub-install --efi-directory=/boot/efi /dev/nvme0n1p1
```

Depois, execute o seguinte comando:

```sh
root@rescue12-customer-eu:/# update-grub
```

Depois disso, saia do ambiente `chroot`:

```sh
root@rescue12-customer-eu:/# exit
```

Em seguida, consulte [esta secção](#swap-partition) para recolocar a partição SWAP (se aplicável).

///

<a name="nonmirrorednormalmode"></a>

#### Reconstrução do RAID após a substituição do disco principal (modo normal)

/// details | **Desdobre esta secção**

Se o seu servidor conseguir arrancar em modo normal após a substituição do disco, pode seguir as etapas abaixo para reconstruir o RAID.

Uma vez substituído o disco, copiamos a tabela de partições do disco saudável (neste exemplo, nvme1n1) para o novo (nvme0n1).

**Para as partições GPT**

```sh
sudo sgdisk -R /dev/nvme0n1 /dev/nvme1n1
```

O comando deve estar neste formato: `sgdisk -R /dev/novo disco /dev/disco saudável`.

Uma vez feito isto, o passo seguinte consiste em atribuir um GUID aleatório ao novo disco para evitar conflitos de GUID com outros discos:

```sh
sudo sgdisk -G /dev/nvme0n1
```

Se receber a seguinte mensagem:

```console
Warning: The kernel is still using the old partition table.
The new table will be used at the next reboot or after you
run partprobe(8) or kpartx(8)
The operation has completed successfully.
```

Execute simplesmente o comando `partprobe`. Se ainda não conseguir ver as novas partições criadas (com o comando `lsblk`), terá de reiniciar o servidor antes de continuar.

Em seguida, adicione as partições ao RAID:

```sh
[user@server_ip ~]# sudo mdadm --add /dev/md2 /dev/nvme0n1p2

# mdadm: added /dev/nvme0n1p2

[user@server_ip ~]# sudo mdadm --add /dev/md3 /dev/nvme0n1p3

# mdadm: re-added /dev/nvme0n1p3
```

Utilize este comando para seguir a reconstrução do RAID: `cat /proc/mdstat`.

Uma vez terminada a reconstrução, recolha a partição do sistema EFI no novo disco.

- Primeiro, certifique-se de que as ferramentas necessárias estão instaladas:

**Debian e Ubuntu**

```sh
[user@server_ip ~]# sudo apt install dosfstools
```

**CentOS**

```sh
[user@server_ip ~]# sudo yum install dosfstools
```

- Formate a partição. No nosso exemplo `nvme0n1p1`:

```sh
[user@server_ip ~]# sudo mkfs.vfat /dev/nvme0n1p1
```

- Atribua a etiqueta `EFI_SYSPART` à partição (este nome é específico da OVHcloud):

```sh
[user@server_ip ~]# sudo fatlabel /dev/nvme0n1p1 EFI_SYSPART
```

Uma vez feito isto, pode sincronizar as duas partições com o script fornecido neste guia.

- Verifique que a nova partição EFI System foi corretamente criada e que o sistema a reconhece:

```sh
[user@server_ip ~]# sudo blkid -t LABEL=EFI_SYSPART
/dev/nvme1n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="4629-D183" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="889f241b-49c3-4031-b5c9-60df0746f98f"
/dev/nvme0n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="521F-300B" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="02bf2b2d-7ada-4461-ba50-07683519f65d"
```

Em seguida, consulte [esta secção](#swap-partition) para recolocar a partição SWAP (se aplicável).

///

<a name="raidrebuildmirrored"></a>

### Reconstrução do RAID (com ESP em espelho)

/// details | **Desdobre esta secção**

> [!tabs] 
> **Em modo Rescue**
>>
>> A reconstrução do RAID com todas as partições em espelho é mais simples; basta copiar os dados do disco saudável para o novo disco e recolocar a partição [SWAP] (se aplicável).
>>
>> De acordo com as ilustrações acima, o estado do RAID deverá ser semelhante a este após uma falha do disco:
>>
>> ```sh
>> Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
>> md3 : active raid1 nvme1n1p3[2] nvme0n1p3[0](F)
>>       497875968 blocks super 1.2 [2/1] [_U]
>>       bitmap: 0/4 pages [0KB], 65536KB chunk
>>
>> md1 : active raid1 nvme0n1p1[2](F) nvme1n1p1[1]
>>       523200 blocks [2/1] [_U]
>>
>> md2 : active raid1 nvme1n1p2[2] nvme0n1p2[0](F)
>>       1046528 blocks super 1.2 [2/1] [_U]
>>
>> unused devices: <none>
>> ```
>>
>> Uma vez substituído o disco, a primeira etapa consiste em copiar a tabela de partições do disco saudável (neste exemplo, nvme1n1) para o novo disco (nvme0n1).
>>
>> **Para as partições GPT**
>>
>> O comando deve estar no seguinte formato: `sgdisk -R /dev/novo disco /dev/disco saudável`.
>>
>> No nosso exemplo:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -R /dev/nvme0n1 /dev/nvme1n1
>> ```
>>
>> Execute `lsblk` para se certificar de que as tabelas de partições foram corretamente copiadas:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk
>>
>> NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINTS
>> nvme1n1     259:0    0 476.9G  0 disk
>> ├─nvme1n1p1 259:1    0   511M  0 part
>> │ └─md1       9:1    0  510.9M 0 raid1
>> ├─nvme1n1p2 259:2    0     1G  0 part
>> │ └─md2       9:2    0  1022M  0 raid1
>> ├─nvme1n1p3 259:3    0 474.9G  0 part
>> │ └─md3       9:3    0 474.8G  0 raid1
>> └─nvme1n1p4 259:4    0   512M  0 part
>> nvme0n1     259:5    0 476.9G  0 disk
>> ├─nvme0n1p1 259:10   0   511M  0 part
>> ├─nvme0n1p2 259:11   0     1G  0 part
>> ├─nvme0n1p3 259:12   0 474.9G  0 part
>> └─nvme0n1p4 259:13   0   512M  0 part
>> ```
>>
>> O passo seguinte consiste em atribuir um GUID aleatório ao novo disco para evitar conflitos de GUID com outros discos:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -G /dev/nvme0n1
>> ```
>>
>> Se receber a seguinte mensagem:
>>
>> ```console
>> Warning: The kernel is still using the old partition table.
>> The new table will be used at the next reboot or after you run partprobe(8) or kpartx(8)
>> The operation has completed successfully.
>> ```
>>
>> Execute o comando `partprobe`.
>>
>> Podemos agora reconstruir a matriz RAID. O seguinte extrato de código mostra como adicionar novamente as novas partições (nvme0n1p2 e nvme0n1p3) à matriz RAID.
>>
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --add /dev/md1 /dev/nvme0n1p1
>> # mdadm: added /dev/nvme0n1p1
>>
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --add /dev/md2 /dev/nvme0n1p2
>> # mdadm: added /dev/nvme0n1p2
>>
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --add /dev/md3 /dev/nvme0n1p3
>> # mdadm: added /dev/nvme0n1p3
>> ```
>>
>> Para verificar o processo de reconstrução:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat
>> Personalities : [raid1]
>> md3 : active raid1 nvme0n1p3[2] nvme1n1p3[0]
>>       497875968 blocks super 1.2 [2/1] [U_]
>>       [=========>...........]  recovery = 47.0% (234461184/497875968) finish=21.
>>       bitmap: 4/4 pages [16KB], 65536KB chunk
>>
>> md1 : active raid1 nvme0n1p1[1] nvme1n1p1[0]
>>       523200 blocks [2/2] [UU]
>>
>> md2 : active raid1 nvme0n1p2[2] nvme1n1p2[0]
>>       1046528 blocks super 1.2 [2/2] [UU]
>> ```
>>
>> Uma vez terminada a reconstrução, execute o seguinte comando para se certificar de que as partições foram corretamente adicionadas ao RAID:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk -f
>> NAME        FSTYPE            FSVER LABEL          UUID                                 FSAVAIL FSUSE% MOUNTPOINTS
>> nvme1n1
>> ├─nvme1n1p1 linux_raid_member 0.90.0                          2043a004-0743-7bc6-37f2-12c43604630c
>> │ └─md1     vfat              FAT16            EFI_SYSPART    D28D-6A4F
>> ├─nvme1n1p2 linux_raid_member 1.2              md2            0772556e-3f45-a551-ab32-c96e502dab22
>> │ └─md2     xfs                                boot           0b22431a-7020-427c-aa31-324feec6ea84
>> ├─nvme1n1p3 linux_raid_member 1.2              md3            071571aa-1b36-9ef7-15b3-190ffdcf3a8b
>> │ └─md3     xfs                                root           3a2cb95b-c142-4d72-835b-52fcce99a0c5
>> ├─nvme1n1p4 swap              1                swap-nvme1n1p4 0d502997-853d-4986-b40a-407d5f187e82
>> └─nvme1n1p5
>> nvme0n1
>> ├─nvme0n1p1 linux_raid_member 0.90.0                          2043a004-0743-7bc6-37f2-12c43604630c
>> │ └─md1     vfat              FAT16            EFI_SYSPART    D28D-6A4F
>> ├─nvme0n1p2 linux_raid_member 1.2              md2            0772556e-3f45-a551-ab32-c96e502dab22
>> │ └─md2     xfs                                boot           0b22431a-7020-427c-aa31-324feec6ea84
>> ├─nvme0n1p3 linux_raid_member 1.2              md3            071571aa-1b36-9ef7-15b3-190ffdcf3a8b
>> │ └─md3     xfs                                root           3a2cb95b-c142-4d72-835b-52fcce99a0c5
>> ├─nvme0n1p4
>> └─nvme0n1p5 iso9660           Joliet Extension config-2       2025-12-16-15-40-00-00
>> ```
>>
>> Em seguida, consulte [esta secção](#swap-partition) para recolocar a partição SWAP (se aplicável).
>>
> **Em modo Normal**
>>
>> De acordo com as ilustrações acima, o estado do RAID deverá ser semelhante a este após uma falha do disco:
>>
>>
>> ```sh
>> Personalities : [raid1]
>> md3 : active raid1 nvme0n1p3[1](F) nvme1n1p3[0]
>>       497875968 blocks super 1.2 [2/1] [U_]
>>       bitmap: 4/4 pages [16KB], 65536KB chunk
>>
>> md1 : active raid1 nvme0n1p1[2](F) nvme1n1p1[0]
>>       523200 blocks [2/1] [U_]
>>
>> md2 : active raid1 nvme1n1p2[0] nvme0n1p2[1](F)
>>       1046528 blocks super 1.2 [2/1] [U_]
>> ```
>>
>> Uma vez substituído o disco, a primeira etapa consiste em copiar a tabela de partições do disco saudável (neste exemplo, nvme1n1) para o novo disco (nvme0n1).
>>
>> **Para as partições GPT**
>>
>> ```sh
>> sudo sgdisk -R /dev/nvme0n1 /dev/nvme1n1
>> ```
>>
>> O comando deve estar no seguinte formato: `sgdisk -R /dev/novo disco /dev/disco saudável`.
>>
>> Em seguida, randomize o GUID do novo disco para evitar qualquer conflito com os GUID de outros discos:
>>
>> ```sh
>> sudo sgdisk -G /dev/nvme0n1
>> ```
>>
>> Se receber a seguinte mensagem:
>>
>> ```console
>> Warning: The kernel is still using the old partition table.
>> The new table will be used at the next reboot or after you
>> run partprobe(8) or kpartx(8)
>> The operation has completed successfully.
>> ```
>>
>> Execute simplesmente o comando `partprobe`. Se ainda não conseguir ver as novas partições criadas (ex. com `lsblk`), terá de reiniciar o servidor antes de continuar.
>>
>> Em seguida, adicione as partições ao RAID:
>>
>> ```sh
>> [user@server_ip ~]# sudo mdadm --add /dev/md1 /dev/nvme0n1p1
>> # mdadm: added /dev/nvme0n1p1
>>
>> [user@server_ip ~]# sudo mdadm --add /dev/md2 /dev/nvme0n1p2
>> # mdadm: added /dev/nvme0n1p2
>>
>> [user@server_ip ~]# sudo mdadm --add /dev/md3 /dev/nvme0n1p3
>> # mdadm: added /dev/nvme0n1p3
>> ```
>>
>> Utilize o seguinte comando para monitorizar a reconstrução do RAID:
>>
>> ```sh
>> [user@server_ip ~]# cat /proc/mdstat
>> ```
>>
>> Uma vez terminada a reconstrução do RAID, consulte [esta secção](#swap-partition) para recolocar a partição SWAP (se aplicável).
>>

///

#### Adição da etiqueta à partição SWAP (se aplicável) <a name="swap-partition"></a>

/// details | **Desdobre esta secção**

> [!tabs]
> **Através do modo Rescue**
>>
>> Fora do ambiente `chroot`, recolha a partição [SWAP] **nvme0n1p4** e adicione a etiqueta `swap-nvmenxxx`:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkswap /dev/nvme0n1p4 -L swap-nvme0n1p4
>> Setting up swapspace version 1, size = 512 MiB (536866816 bytes)
>> LABEL=swap-nvme0n1p4, UUID=b3c9e03a-52f5-4683-81b6-cc10091fcd
>> ```
>>
>> Verifique que a etiqueta foi corretamente aplicada:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk -f
>> NAME        FSTYPE            FSVER LABEL          UUID                                 FSAVAIL FSUSE% MOUNTPOINTS
>> nvme1n1
>> ├─nvme1n1p1 vfat              FAT16 EFI_SYSPART    B27E-16D2
>> ├─nvme1n1p2 linux_raid_member 1.2   md2            fb3c5180-526f-56ad-3a0a-3f7961f57684
>> │ └─md2     xfs                     boot           ed3a4730-b3eb-4aa5-a550-dd6cd188c3a4
>> ├─nvme1n1p3 linux_raid_member 1.2   md3            a14af9ed-f791-46e5-4381-224e6d79088c
>> │ └─md3     xfs                     root           5041d916-abb3-4dc8-acdc-baeb3977ce6d  469.6G     1% /mnt
>> └─nvme1n1p4 swap              1     swap-nvme1n1p4 133ca9a3-1bd6-4519-9b5a-01b8ffa55ca4
>> nvme0n1
>> ├─nvme0n1p1 vfat              FAT16 EFI_SYSPART    3557-B372
>> ├─nvme0n1p2 linux_raid_member 1.2   md2            fb3c5180-526f-56ad-3a0a-3f7961f57684
>> │ └─md2     xfs                     boot           ed3a4730-b3eb-4aa5-a550-dd6cd188c3a4
>> ├─nvme0n1p3 linux_raid_member 1.2   md3            a14af9ed-f791-46e5-4381-224e6d79088c
>> │ └─md3     xfs                     root           5041d916-abb3-4dc8-acdc-baeb3977ce6d  469.6G     1% /mnt
>> └─nvme0n1p4 swap              1     swap-nvme0n1p4 dedd4d49-7d40-40c8-b529-41f251a7ff81
>> ```
>>
>> Aceda novamente ao ambiente `chroot`:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # chroot /mnt
>> ```
>>
>> Recupere o UUID das duas partições SWAP:
>>
>> ```sh
>> root@rescue12-customer-eu:/# blkid -s UUID blkid /dev/nvme0n1p4
>> /dev/nvme0n1p4: UUID="b3c9e03a-52f5-4683-81b6-cc10091fcd15"
>>
>> root@rescue12-customer-eu:/# blkid -s UUID blkid /dev/nvme1n1p4
>> /dev/nvme1n1p4: UUID="d6af33cf-fc15-4060-a43c-cb3b5537f58a"
>> ```
>>
>> Em seguida, substitua o antigo UUID da partição SWAP (**nvme0n1p4**) pelo novo no ficheiro `/etc/fstab`:
>>
>> ```sh
>> root@rescue12-customer-eu:/# nano /etc/fstab
>> ```
>>
>> Exemplo:
>>
>> ```sh
>> UUID=6abfaa3b-e630-457a-bbe0-e00e5b4b59e5       /       ext4    defaults       0       1
>> UUID=f925a033-0087-40ec-817e-44efab0351ac       /boot   ext4    defaults       0       0
>> LABEL=EFI_SYSPART       /boot/efi       vfat    defaults        0     1
>> UUID=b7b5dd38-9b51-4282-8f2d-26c65e8d58ec       swap    swap    defaults       0       0
>> UUID=d6af33cf-fc15-4060-a43c-cb3b5537f58a       swap    swap    defaults       0       0
>> ```
>>
>> Com base nos resultados acima, o antigo UUID é `b7b5dd38-9b51-4282-8f2d-26c65e8d58ec` e deve ser substituído pelo novo `b3c9e03a-52f5-4683-81b6-cc10091fcd15`. Certifique-se de substituir o UUID correto.
>>
>> Em seguida, verifique que tudo está corretamente montado com o seguinte comando:
>>
>> ```sh
>> root@rescue12-customer-eu:/# mount -av
>> /                        : ignored
>> /boot                    : successfully mounted
>> /boot/efi                : successfully mounted
>> swap                     : ignored
>> swap                     : ignored
>> ```
>>
>> Ative a partição SWAP:
>>
>> ```sh
>> root@rescue12-customer-eu:/# swapon -av
>>
>> swapon: /dev/nvme0n1p4: found signature [pagesize=4096, signature=swap]
>> swapon: /dev/nvme0n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
>> swapon /dev/nvme0n1p4
>> swapon: /dev/nvme1n1p4: found signature [pagesize=4096, signature=swap]
>> swapon: /dev/nvme1n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
>> swapon /dev/nvme1n1p4
>> ```
>>
>> Saia do ambiente chroot com `exit` e recarregue o sistema:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # systemctl daemon-reload
>> ```
>>
>> Desmonte todos os discos:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount -Rl /mnt
>> ```
>>
>> Temos agora terminado com sucesso a reconstrução RAID no servidor e podemos agora reiniciá-lo em modo normal.
>>
> **Através do modo Normal**
>>
>> Para recolocar a partição SWAP, proceda da seguinte forma:
>>
>> - Primeiro, recolha a partição em **nvme0n1p4** e adicione a etiqueta **swap-nvme0n1p4**:
>>
>> ```sh
>> [user@server_ip ~]# sudo mkswap /dev/nvme0n1p4 -L swap-nvme0n1p4
>> ```
>>
>> - Recupere os UUID das duas partições SWAP:
>>
>> ```sh
>> [user@server_ip ~]# sudo blkid -s UUID blkid /dev/nvme0n1p4
>> /dev/nvme0n1p4: UUID="b3c9e03a-52f5-4683-81b6-cc10091fcd15"
>> [user@server_ip ~]# sudo blkid -s UUID blkid /dev/nvme1n1p4
>> /dev/nvme1n1p4: UUID="d6af33cf-fc15-4060-a43c-cb3b5537f58a"
>> ```
>>
>> - Substitua o antigo UUID da partição SWAP (**nvme0n1p4**) pelo novo em `/etc/fstab`:
>>
>> ```sh
>> [user@server_ip ~]# sudo nano /etc/fstab
>> ```
>>
>> Exemplo:
>>
>> ```sh
>> [user@server_ip ~]# sudo nano /etc/fstab
>> UUID=6abfaa3b-e630-457a-bbe0-e00e5b4b59e5       /       ext4    defaults       0       1
>> UUID=f925a033-0087-40ec-817e-44efab0351ac       /boot   ext4    defaults       0       0
>> LABEL=EFI_SYSPART       /boot/efi       vfat    defaults        0     1
>> UUID=b7b5dd38-9b51-4282-8f2d-26c65e8d58ec       swap    swap    defaults       0       0
>> UUID=d6af33cf-fc15-4060-a43c-cb3b5537f58a       swap    swap    defaults       0       0
>> ```
>>
>> De acordo com os resultados acima, o UUID antigo é `b7b5dd38-9b51-4282-8f2d-26c65e8d58ec` e deve ser substituído pelo novo `b3c9e03a-52f5-4683-81b6-cc10091fcd15`. 
>>
>> Certifique-se de substituir o UUID correto.
>>
>> Em seguida, execute o seguinte comando para ativar a partição SWAP:
>>
>> ```sh
>> [user@server_ip ~]# sudo swapon -av
>> swapon: /dev/nvme1n1p4: already active -- ignored
>> swapon: /dev/nvme0n1p4: found signature [pagesize=4096, signature=swap]
>> swapon: /dev/nvme0n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
>> swapon /dev/nvme0n1p4
>> ```
>>
>> Em seguida, recarregue o sistema:
>>
>> ```sh
>> [user@server_ip ~]# sudo systemctl daemon-reload
>> ```
>>
>> Concluímos com sucesso a reconstrução do RAID.
>>

///

<a name="go-further"></a>

## Quer saber mais?

[Hot Swap - Software RAID](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_soft)

[OVHcloud API and Storage](/pages/bare_metal_cloud/dedicated_servers/partitioning_ovh)

[Managing hardware RAID](/pages/bare_metal_cloud/dedicated_servers/raid_hard)

[Hot Swap - Hardware RAID](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_hard)

Para serviços especializados (SEO, desenvolvimento, etc.), contacte [os parceiros da OVHcloud](/links/partner).

Se precisar de assistência para utilizar e configurar as suas soluções OVHcloud, consulte as [nossas ofertas de suporte](/links/support).

Se precisar de formação ou de assistência técnica para implementar as nossas soluções, contacte o seu representante comercial ou clique [neste link](/links/professional-services) para obter um orçamento e solicitar que a equipa de Professional Services intervenha no seu caso de utilização específico.

Fale com a nossa [comunidade de utilizadores](/links/community).