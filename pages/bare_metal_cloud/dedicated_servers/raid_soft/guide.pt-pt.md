---
title: Gestão e reconstrução do RAID software nos servidores em modo de arranque legado (BIOS)
excerpt: "Aprenda a gerir e reconstruir o RAID software após a substituição de um disco no seu servidor em modo de arranque legado (BIOS)"
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

O RAID (Redundant Array of Independent Disks) é um conjunto de técnicas concebidas para mitigar a perda de dados num servidor replicando-os em vários discos.

O nível RAID predefinido para as instalações de servidores OVHcloud é o RAID 1, o que duplica o espaço ocupado pelos seus dados, reduzindo assim metade do espaço de disco utilizável.

**Este guia explica como gerir e reconstruir um RAID software em caso de substituição de um disco no seu servidor em modo de arranque legado (BIOS).**

Antes de começar, note que este guia se concentra nos servidores dedicados que utilizam o modo de arranque legado (BIOS). Se o seu servidor utiliza o modo UEFI (placas-mãe mais recentes), consulte este guia [Gestão e reconstrução do RAID software nos servidores em modo de arranque UEFI](/pages/bare_metal_cloud/dedicated_servers/raid_soft_uefi).

Para verificar se um servidor está a executar em modo BIOS ou em modo UEFI, execute o seguinte comando:

```sh
[user@server_ip ~]# [ -d /sys/firmware/efi ] && echo UEFI || echo BIOS
```

## Requisitos

- Ter um [servidor dedicado](/links/bare-metal/bare-metal) com uma configuração de RAID software.
- Ter acesso ao seu servidor via SSH com privilégios de administrador (sudo).
- Conhecimento de RAID e partições

## Instruções

### Apresentação do conteúdo

- [Informações básicas](#basicinformation)
- [Simular uma falha de disco](#diskfailure)
    - [Remover o disco defeituoso](#diskremove)
- [Reconstrução do RAID](#raidrebuild)
    - [Reconstrução do RAID em modo rescue](#rescuemode)
    - [Adicionar o rótulo à partição SWAP (se aplicável)](#swap-partition)
    - [Reconstrução do RAID em modo normal](#normalmode)


<a name="basicinformation"></a>

### Informações básicas

Numa sessão de linha de comandos, introduza o seguinte código para determinar o estado atual do RAID.

```sh
[user@server_ip ~]# cat /proc/mdstat

Personalities: [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2: active raid1 nvme0n1p2[1] nvme0n1p20]
      931954688 blocks super 1.2 [2/2] [UU]
      bitmap: 2/7 pages [8KB], 65536KB chunk

md4: active raid1 nvme0n1p4[0] nvme1n1p4[1]
      1020767232 blocks super 1.2 [2/2] [UU]
      bitmap: 0/8 pages [0KB], 65536KB chunk
      
unused devices: <none>
```

Este comando indica-nos que dois dispositivos RAID software estão atualmente configurados, sendo **md4** o maior. O dispositivo RAID **md4** é composto por duas partições, denominadas **nvme1n1p4** e **nvme0n1p4**.

O [UU] significa que todos os discos estão a funcionar normalmente. Um `_` indica um disco defeituoso.

Se tiver um servidor com discos SATA, obterá os seguintes resultados:

```sh
[user@server_ip ~]# cat /proc/mdstat

Personalities: [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2: active raid1 sda2[1] sdb2[0]
      931954688 blocks super 1.2 [2/2] [UU]
      bitmap: 2/7 pages [8KB], 65536KB chunk

md4: active raid1 sda4[0] sdb4[1]
      1020767232 blocks super 1.2 [2/2] [UU]
      bitmap: 0/8 pages [0KB], 65536KB chunk
      
unused devices: <none>
```

Embora este comando nos devolva os nossos volumes RAID, não nos indica o tamanho das próprias partições. Podemos encontrar esta informação com o seguinte comando:

```sh
[user@server_ip ~]# sudo fdisk -l

Disk /dev/sdb: 1.8 TiB, 2000398934016 bytes, 3907029168 sectors
Disk model: HGST HUS724020AL
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: F92B6C5B-2518-4B2D-8FF9-A311DED5845F

Device          Start        End    Sectors   Size Type
/dev/sdb1        2048       4095       2048     1M BIOS boot
/dev/sdb2        4096 1864177663 1864173568 888.9G Linux RAID
/dev/sdb3  1864177664 1865226239    1048576   512M Linux filesystem
/dev/sdb4  1865226240 3907024895 2041798656 973.6G Linux RAID

Disk /dev/sda: 1.8 TiB, 2000398934016 bytes, 3907029168 sectors
Disk model: HGST HUS724020AL
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 2E1DCCBA-8808-4D2B-BA33-9FEC3B96ADA8

Device          Start        End    Sectors   Size Type
/dev/sda1        2048       4095       2048     1M BIOS boot
/dev/sda2        4096 1864177663 1864173568 888.9G Linux RAID
/dev/sda3  1864177664 1865226239    1048576   512M Linux filesystem
/dev/sda4  1865226240 3907024895 2041798656 973.6G Linux RAID
/dev/sda5  3907025072 3907029134       4063     2M Linux filesystem

Disk /dev/md4: 973.5 GiB, 1045265645568 bytes, 2041534464 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes

Disk /dev/md2: 888.8 GiB, 954321600512 bytes, 1863909376 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```

O comando `fdisk -l` permite-nos também identificar o tipo de partição. Esta é uma informação importante para reconstruir o seu RAID em caso de falha de um disco.

Para as partições **GPT**, a linha 6 mostrará: `Disklabel type: gpt`. Estas informações só são visíveis quando o servidor está em modo normal.

Ainda com base nos resultados de `fdisk -l`, podemos ver que `/dev/md2` é composto por 888.8GB e `/dev/md4` contém 973.5GB.

Alternativamente, o comando `lsblk` oferece uma visão diferente das partições:

```sh
[user@server_ip ~]# lsblk

NAME    MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINT
sda       8:0    0   1.8T  0 disk
├─sda1    8:1    0     1M  0 part
├─sda2    8:2    0 888.9G  0 part
│ └─md2   9:2    0 888.8G  0 raid1 /
├─sda3    8:3    0   512M  0 part  [SWAP]
├─sda4    8:4    0 973.6G  0 part
│ └─md4   9:4    0 973.5G  0 raid1 /home
└─sda5    8:5    0     2M  0 part
sdb       8:16   0   1.8T  0 disk
├─sdb1    8:17   0     1M  0 part
├─sdb2    8:18   0 888.9G  0 part
│ └─md2   9:2    0 888.8G  0 raid1 /
├─sdb3    8:19   0   512M  0 part  [SWAP]
└─sdb4    8:20   0 973.6G  0 part
  └─md4   9:4    0 973.5G  0 raid1 /home
```

Temos em conta os dispositivos, as partições e os seus pontos de montagem. A partir dos comandos e resultados acima, temos:

- Dois arrays RAID: `/dev/md2` e `/dev/md4`.
- Quatro partições fazem parte do RAID com os pontos de montagem: `/` e `/home`.

<a name="diskfailure"></a>

### Simular uma falha de disco

Agora que dispomos de todas as informações necessárias, podemos simular uma falha de disco e continuar com os testes. Neste exemplo, vamos fazer falhar o disco `sda`.

O meio preferido para isso é o ambiente em modo rescue da OVHcloud.

Reinicie primeiro o servidor em modo rescue e faça login com as credenciais fornecidas.

Para remover um disco do RAID, o primeiro passo é marcá-lo como **Failed** e remover as partições dos seus arrays RAID respetivos.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat

Personalities: [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2: active raid1 sda2[1] sdb2[0]
      931954688 blocks super 1.2 [2/2] [UU]
      bitmap: 2/7 pages [8KB], 65536KB chunk

md4: active raid1 sda4[0] sdb4[1]
      1020767232 blocks super 1.2 [2/2] [UU]
      bitmap: 0/8 pages [0KB], 65536KB chunk
      
unused devices: <none>
```

A partir da saída acima, sda é composto por duas partições em RAID que são **sda2** e **sda4**.

<a name="diskremove"></a>

#### Remover o disco defeituoso

Começamos por marcar as partições **sda2** e **sda4** como **Failed**.

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md2 --fail /dev/sda2
# mdadm: set /dev/sda2 faulty in /dev/md2
```

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md4 --fail /dev/sda4
# mdadm: set /dev/sda4 faulty in /dev/md4
```

Agora simulámos uma falha do RAID, quando executamos o comando `cat /proc/mdstat`, obtemos o seguinte resultado:

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat 

Personalities: [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2: active raid1 sda2[1](F) sdb2[0]
      931954688 blocks super 1.2 [2/2] [_U]
      bitmap: 2/7 pages [8KB], 65536KB chunk

md4: active raid1 sda4[0](F) sdb4[1]
      1020767232 blocks super 1.2 [2/2] [_U]
      bitmap: 0/8 pages [0KB], 65536KB chunk
unused devices: <none>
```

Como podemos ver acima, o [F] ao lado das partições indica que o disco está defeituoso ou com falha.

Em seguida, removemos estas partições dos arrays RAID.

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # sudo mdadm --manage /dev/md2 --remove /dev/sda2
# mdadm: hot removed /dev/sda2 from /dev/md2
```

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # sudo mdadm --manage /dev/md4 --remove /dev/sda4
# mdadm: hot removed /dev/sda4 from /dev/md4
```

Para nos certificarmos de que obtemos um disco semelhante a um disco vazio, utilizamos o seguinte comando. Substitua **sda** pelos seus próprios valores:

```sh
shred -s10M -n1 /dev/sda1
shred -s10M -n1 /dev/sda2
shred -s10M -n1 /dev/sda3
shred -s10M -n1 /dev/sda4
shred -s10M -n1 /dev/sda
```

O disco aparece agora como um disco novo e vazio:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk 
NAME    MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINT
sda       8:0    0   1.8T  0 disk
sdb       8:16   0   1.8T  0 disk
├─sdb1    8:17   0     1M  0 part
├─sdb2    8:18   0 888.9G  0 part
│ └─md2   9:2    0 888.8G  0 raid1 /
├─sdb3    8:19   0   512M  0 part  [SWAP]
└─sdb4    8:20   0 973.6G  0 part
  └─md4   9:4    0 973.5G  0 raid1 /home
```

Se executarmos o seguinte comando, vemos que o nosso disco foi corretamente «apagado»:

```sh
parted /dev/sda
GNU Parted 3.5
Using /dev/sda
Welcome to GNU Parted! Type 'help' to view a list of commands.
(parted) p
Error: /dev/sda: unrecognised disk label
Model: HGST HUS724020AL (SATA)
Disk /dev/sda: 1.8T
Sector size (logical/physical): 512B/512B
Partition Table: unknown
Disk Flags:
```

O estado do nosso RAID deve agora ser semelhante a isto:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat 

Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2 : active raid1 sdb2[0]
      931954688 blocks super 1.2 [1/2] [_U]
      bitmap: 2/7 pages [8KB], 65536KB chunk

md4 : active raid1 sdb4[1]
      1020767232 blocks super 1.2 [1/2] [_U]
      bitmap: 0/8 pages [0KB], 65536KB chunk
unused devices: <none>
```

Os resultados acima mostram que agora apenas duas partições aparecem nas matrizes RAID. Conseguimos fazer com que o disco **sda** falhasse e agora podemos proceder à substituição do disco.

Para obter mais informações sobre como preparar e solicitar a substituição de um disco, consulte este [guia](/pages/bare_metal_cloud/dedicated_servers/disk_replacement).


O comando seguinte permite obter mais detalhes sobre a(s) matriz(es) RAID:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --detail /dev/md4

/dev/md4:
           Version : 1.2
     Creation Time : Tue Jan 24 15:35:02 2023
        Raid Level : raid1
        Array Size : 1020767232 (973.48 GiB 1045.27 GB)
     Used Dev Size : 1020767232 (973.48 GiB 1045.27 GB)
      Raid Devices : 2
     Total Devices : 1
       Persistence : Superblock is persistent

     Intent Bitmap : Internal

       Update Time : Tue Jan 24 16:28:03 2023
             State : clean, degraded
    Active Devices : 1
   Working Devices : 1
    Failed Devices : 0
     Spare Devices : 0

Consistency Policy : bitmap

              Name : md4
              UUID : 7b5c1d80:0a7ab4c2:e769b5e5:9c6eaa0f
            Events : 21

    Number   Major   Minor   RaidDevice State
       -       0        0        0      removed
       1       8       20        1      active sync   /dev/sdb4
```

<a name="raidrebuild"></a>

### Reconstruir o RAID

> [!primary]
> Este processo pode variar dependendo do sistema operativo instalado no seu servidor. Recomendamos que consulte a documentação oficial do seu sistema operativo para obter os comandos apropriados.
>

> [!warning]
>
> Para a maioria dos servidores em RAID de software, após a substituição de um disco, o servidor é capaz de iniciar em modo normal (no disco saudável) para reconstruir o RAID. No entanto, se o servidor não conseguir iniciar em modo normal, ele será reiniciado em modo de recuperação para prosseguir com a reconstrução do RAID.
>

<a name="normalmode"></a>

#### Reconstruir o RAID no modo normal

As etapas a seguir são realizadas no modo normal. No nosso exemplo, substituímos o disco **sda**.

Depois de substituir o disco, precisamos copiar a tabela de partições do disco saudável (neste exemplo, sdb) para o novo (sda).

> [!tabs]
> **Para partições GPT**
>>
>> ```sh
>> sudo sgdisk -R /dev/sdX /dev/sdX
>> ```
>>
>> O comando deve ter o seguinte formato: `sgdisk -R /dev/novo disco /dev/disco saudável`.
>>
>> Depois de concluir esta operação, o próximo passo é atribuir um GUID aleatório ao novo disco para evitar conflitos com os GUIDs de outros discos:
>>
>> ```sh
>> sudo sgdisk -G /dev/sdX
>> ```
>>
>> Se a seguinte mensagem for exibida:
>>
>> ```console
>> Warning: The kernel is still using the old partition table.
>> The new table will be used at the next reboot or after you
>> run partprobe(8) or kpartx(8)
>> The operation has completed successfully.
>> ```
>>
>> Pode simplesmente executar o comando `partprobe`. Se ainda não conseguir ver as partições recém-criadas (por exemplo, com `lsblk`), deve reiniciar o servidor antes de continuar.
>>
> **Para partições MBR**
>>
>> ```sh
>> [user@server_ip ~]# sudo sfdisk -d /dev/sdX | sfdisk /dev/sdX
>> ```
>>
>> O comando deve ter o seguinte formato: `sfdisk -d /dev/disco saudável | sfdisk /dev/novo disco`.
>>

Em seguida, adicionamos as partições ao RAID:

```sh
[user@server_ip ~]# sudo mdadm --add /dev/md2 /dev/sda2
# mdadm: added /dev/sda2

[user@server_ip ~]# sudo mdadm --add /dev/md4 /dev/sda4
# mdadm: re-added /dev/sda4
```

Utilize o seguinte comando para monitorizar a reconstrução do RAID:

```sh
[user@server_ip ~]# cat /proc/mdstat

Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2 : active raid1 sda2[0] sdb2[1]
      931954688 blocks super 1.2 [2/2] [UU]
      bitmap: 4/4 pages [16KB], 65536KB chunk

md4 : active raid1 sda4[0](F) sdb4[1]
      1020767232 blocks super 1.2 [2/1] [UU]
      [============>........]  recovery = 64.8% (822969856/1020767232) finish=7.2min speed=401664K/sec
      bitmap: 0/8 pages [0KB], 65536KB chunk
unused devices: <none>
```

Por fim, adicionamos um rótulo e montamos a partição [SWAP] (se aplicável).

Para adicionar um rótulo à partição SWAP:

```sh
[user@server_ip ~]# sudo mkswap /dev/sda4 -L swap-sda4
```

Em seguida, recupere os UUID das duas partições SWAP:

```sh
[user@server_ip ~]# sudo blkid -s UUID /dev/sda4
/dev/sda4: UUID="b3c9e03a-52f5-4683-81b6-cc10091fcd15"
[user@server_ip ~]# sudo blkid -S UUID /dev/sdb4
/dev/sdb4: UUID="d6af33cf-fc15-4060-a43c-cb3b5537f58a"
```

Substituímos o antigo UUID da partição swap (**sda4**) pelo novo em `/etc/fstab`.

Exemplo:

```sh
[user@server_ip ~]# sudo nano etc/fstab

UUID=6abfaa3b-e630-457a-bbe0-e00e5b4b59e5       /       ext4    defaults       0       1
UUID=f925a033-0087-40ec-817e-44efab0351ac       /boot   ext4    defaults       0       0
LABEL=BIOS       /boot       vfat    defaults        0     1
UUID=b7b5dd38-9b51-4282-8f2d-26c65e8d58ec       swap    swap    defaults       0       0
UUID=d6af33cf-fc15-4060-a43c-cb3b5537f58a       swap    swap    defaults       0       0
```

De acordo com os resultados acima, o UUID antigo é `b7b5dd38-9b51-4282-8f2d-26c65e8d58ec` e deve ser substituído pelo novo `b3c9e03a-52f5-4683-81b6-cc10091fcd15`.

Certifique-se de substituir o UUID correto.

Em seguida, verificamos se tudo está montado corretamente usando o seguinte comando:

```sh
[user@server_ip ~]# sudo mount -av
/                        : ignored
/boot                    : successfully mounted
/boot/efi                : successfully mounted
swap                     : ignored
swap                     : ignored
```

Execute o seguinte comando para ativar a partição SWAP:

```sh
[user@server_ip ~]# sudo swapon -av
```

Em seguida, reinicie o sistema usando o seguinte comando:

```sh
[user@server_ip ~]# sudo systemctl daemon-reload
```

A reconstrução do RAID está agora concluída.

<a name="rescuemode"></a>

/// details | **Reconstrução do RAID no modo rescue**

Se o seu servidor não conseguir reiniciar no modo normal após a substituição do disco, ele será reiniciado no modo de recuperação pela nossa equipa do datacenter.

Neste exemplo, substituímos o disco `sdb`.

Depois de substituir o disco, devemos copiar a tabela de partições do disco saudável (neste exemplo, sda) para o novo (sdb).

> [!tabs]
> **Para as partições GPT**
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -R /dev/sdX /dev/sdX
>> ```
>>
>> O comando deve estar no seguinte formato: `sgdisk -R /dev/novo disco /dev/disco saudável`
>>
>> Exemplo:
>>
>> ```sh
>> sudo sgdisk -R /dev/sdb /dev/sda
>> ```
>>
>> Depois de realizar esta operação, o passo seguinte consiste em atribuir um GUID aleatório ao novo disco para evitar quaisquer conflitos com os GUID de outros discos:
>>
>> ```sh
>> sudo sgdisk -G /dev/sdb
>> ```
>>
>> Se aparecer a seguinte mensagem:
>>
>> ```console
>> Warning: The kernel is still using the old partition table.
>> The new table will be used at the next reboot or after you
>> run partprobe(8) or kpartx(8)
>> The operation has completed successfully.
>> ```
>>
>> Pode simplesmente executar o comando `partprobe`.
>>
> **Para as partições MBR**
>>
>> ```sh
>> sudo sfdisk -d /dev/sda | sfdisk /dev/sdb
>> ```
>>
>> O comando deve estar no seguinte formato: `sfdisk -d /dev/disco saudável | sfdisk /dev/novo disco`
>>

Agora podemos reconstruir a matriz RAID. O seguinte código mostra como adicionar as novas partições (sdb2 e sdb4) na matriz RAID.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sudo mdadm --add /dev/md2 /dev/sdb2
# mdadm: added /dev/sdb2

root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sudo mdadm --add /dev/md4 /dev/sdb4
# mdadm: re-added /dev/sdb4
```

Utilize o comando `cat /proc/mdstat` para monitorizar a reconstrução do RAID:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat

Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2 : active raid1 sda2[0] sdb2[1]
      931954688 blocks super 1.2 [2/2] [UU]
      bitmap: 4/4 pages [16KB], 65536KB chunk

md4 : active raid1 sda4[0](F) sdb4[1]
      1020767232 blocks super 1.2 [2/1] [UU]
      [============>........]  recovery = 64.8% (822969856/1020767232) finish=7.2min speed=401664K/sec
      bitmap: 0/8 pages [0KB], 65536KB chunk
unused devices: <none>
```

Para mais detalhes sobre a(s) baia(s) RAID:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --detail /dev/md4

/dev/md4:
        Version : 1.2
     Creation Time : Tue Jan 24 15:35:02 2023
        Raid Level : raid1
        Array Size : 1020767232 (973.48 GiB 1045.27 GB)
     Used Dev Size : 1020767232 (973.48 GiB 1045.27 GB)
      Raid Devices : 2
     Total Devices : 2
       Persistence : Superblock is persistent

     Intent Bitmap : Internal

       Update Time : Tue Jan 24 17:02:55 2023
             State : clean
    Active Devices : 2
   Working Devices : 2
    Failed Devices : 0
     Spare Devices : 0

 Rebuild Status : 21% complete

           UUID : 7f39d062:9f16a016:a4d2adc2:26fd5302
         Events : 0.95

    Number   Major   Minor   RaidDevice State
       0       8        2        0      spare rebuilding   /dev/sda4
       1       8       18        1      active sync   /dev/sdb4
```

<a name="swap-partition"></a>

#### Adição do rótulo à partição SWAP (se aplicável)

Depois de concluir a reconstrução do RAID, montamos a partição que contém a raiz do nosso sistema operativo em `/mnt`. No nosso exemplo, esta partição é `md4`.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/md4 /mnt
```

Adicionamos o rótulo à nossa partição swap com o seguinte comando:

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkswap /dev/sda4 -L swap-sda4
mkswap: /dev/sda4: warning: wiping old swap signature.
Setting up swapspace version 1, size = 512 MiB (536866816 bytes)
LABEL=swap-nvme0n1p4, UUID=b3c9e03a-52f5-4683-81b6-cc10091fcd
```

Em seguida, montamos os seguintes diretórios para garantir que todas as operações que realizamos no ambiente chroot funcionem corretamente:

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

Agora, acedemos ao ambiente `chroot`:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # chroot /mnt
```

Recuperamos os UUID das duas partições SWAP:

```sh
root@rescue12-customer-eu:/# blkid -s UUID /dev/sda4
root@rescue12-customer-eu:/# blkid -s UUID /dev/sdb4
```

Exemplo:

```sh
blkid /dev/sda4
/dev/sda4: UUID="b3c9e03a-52f5-4683-81b6-cc10091fcd15"
blkid /dev/sdb4
/dev/sdb4: UUID="d6af33cf-fc15-4060-a43c-cb3b5537f58a"
```

Em seguida, substituímos o antigo UUID da partição SWAP (**sdb4**) pelo novo em `/etc/fstab`:

```sh
root@rescue12-customer-eu:/# nano etc/fstab
```

Exemplo:

```sh
UUID=6abfaa3b-e630-457a-bbe0-e00e5b4b59e5       /       ext4    defaults       0       1
UUID=f925a033-0087-40ec-817e-44efab0351ac       /home   ext4    defaults       0       0
UUID=b7b5dd38-9b51-4282-8f2d-26c65e8d58ec       swap    swap    defaults       0       0
UUID=d6af33cf-fc15-4060-a43c-cb3b5537f58a       swap    swap    defaults       0       0
```

Certifique-se de substituir o UUID correto. No nosso exemplo acima, o UUID a substituir é `d6af33cf-fc15-4060-a43c-cb3b5537f58a` pelo novo `b3c9e03a-52f5-4683-81b6-cc10091fcd15`. Certifique-se de substituir o UUID correto.

Em seguida, verificamos que tudo está corretamente montado:

```sh
root@rescue12-customer-eu:/# mount -av
/boot                   : successfully mounted
/boot/efi               : successfully mounted
swap                    : ignored
swap                    : ignored
```

Ative a partição swap com o seguinte comando:

```sh
root@rescue12-customer-eu:/# swapon -av

swapon: /dev/sda4: found signature [pagesize=4096, signature=swap]
swapon: /dev/sda4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/sda4
swapon: /dev/sdb4: found signature [pagesize=4096, signature=swap]
swapon: /dev/sdb4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/sdb4
```

Saímos do ambiente `chroot` com exit e reiniciamos o sistema:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # systemctl daemon-reload
```

Desmontamos todos os discos:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount -R /mnt
```
///


## Quer saber mais?

[Remplacement à chaud - RAID logiciel](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_soft)

[API OVHcloud e Armazenamento](/pages/bare_metal_cloud/dedicated_servers/partitioning_ovh)

[Gestão do RAID físico](/pages/bare_metal_cloud/dedicated_servers/raid_hard)

[Remplacement à chaud - RAID Matériel](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_hard)

Para serviços especializados (referênciação, desenvolvimento, etc), contacte os [parceiros OVHcloud](/links/partner).

Se desejar beneficiar de assistência no uso e configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](/links/support).

Se precisar de formação ou assistência técnica para a implementação das nossas soluções, contacte o seu contacto comercial ou clique [neste link](/links/professional-services) para obter um orçamento e solicitar uma análise personalizada do seu projeto aos nossos especialistas da equipa Professional Services.

Fale com a nossa [comunidade de utilizadores](/links/community).