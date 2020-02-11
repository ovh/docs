---
title: 'Criar e configurar um disco suplementar numa instância'
excerpt: 'Este manual explica como criar um disco adicional e como o configurar numa das suas instâncias.'
slug: criar_e_configurar_um_disco_suplementar_numa_instancia
legacy_guide_number: g1863
---

**Última atualização: 14 de novembro de 2019**

## Sumário

É possível criar discos adicionais para as suas instâncias Public Cloud
Isto pode ser útil caso pretenda:

* Aumentar a sua capacidade de armazenamento sem mudar o modelo de instância.
* Dispor de armazenamento de elevada disponibilidade e com um excelente desempenho.
* Migrar o seu armazenamento e os seus dados para outra instância.

**Este manual explica como criar um disco adicional e como o configurar numa das suas instâncias.**

## Requisitos

* acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.
* uma [Instância de Public Cloud](https://www.ovh.pt/public-cloud/){.external} na sua conta OVHcloud.
* acesso administrativo (root) à sua instância via SSH.

## Instruções

Primeiro, faça login na [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external} e clique no menu `Public Cloud.`{.action} Em seguida, clique em `Project`{.action} onde pretende criar a instância.

Agora, clique no botão`Actions`{.action} e em seguida selecione `Create a volume`{.action}.

![select project](images/attach-disk-01.png){.thumbnail}

Agora configure as suas opções relativamente ao tipo, tamanho e localização do disco. Quando terminar, clique no botão `Add.`{.action}

![create disk](images/attach-disk-02.png){.thumbnail}

O novo disco será apresentado na sua Área de Cliente

![configure disk](images/attach-disk-03.png){.thumbnail}

Para associar o disco a uma instância, clique em “...” e, em seguida, selecione `Attach to instance`{.action}

![attach disk 01](images/attach-disk-04.png){.thumbnail}

Selecione a instância e clique no botão `Confirm`{.action} para associar o disco.

![attach disk 02](images/attach-disk-05.png){.thumbnail}

O processo de associação do disco à sua instância inicia agora e pode levar alguns minutos a concluir.

![attach disk 03](images/attach-disk-06.png){.thumbnail}

> [!warning]
Assegure-se de que não sai do separador de infraestrutura enquanto o disco está a ser associado. Isso poderia interromper o processo.
>

### Utilizando o Linux

Primeiro, estabeleça uma conexão SSH para sua instância e em seguida utilize o comando abaixo para listar os discos da instância.

```
# admin@serveur-1:~$ lsblk

NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda 254:0 0 10G 0 disk
└─vda1 254:1 0 10G 0 part /
vdb 254:16 0 10G 0 disk
```

> [!primary]
>
Geralmente, o VDA corresponde ao disco rígido predefinido da sua instância O VDB corresponde ao disco adicional
>

Em seguida, crie uma partição no disco adicional usando o comando abaixo.

```
# admin@serveur-1:~$ sudo fdisk /dev/vdb

Welcome to fdisk (util-linux 2.25.2).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.

Device does not contain a recognized partition table.
Created a new DOS disklabel with disk identifier 0x95c4adcc.
```



```
Command (m for help): n

Partition type
p primary (0 primary, 0 extended, 4 free)
e extended (container for logical partitions)
Select (default p):
Using default response p.
Partition number (1-4, default 1):
First sector (2048-20971519, default 2048):
Last sector, +sectors or +size{K,M,G,T,P} (2048-20971519, default 20971519):

Created a new partition 1 of type 'Linux' and of size 10 GiB.
```



```
Command (m for help): w

The partition table has been altered.
Calling ioctl() to re-read partition table.
Syncing disks.
```

Em seguida, formate a partição utilizando o comando abaixo.

```
# admin@serveur-1:~$ sudo mkfs.ext4 /dev/vdb1
mke2fs 1.42.12 (29-Aug-2014)
Creating filesystem with 2621184 4k blocks and 655360 inodes
Filesystem UUID: 781be788-c4be-462b-b946-88429a43c0cf
Superblock backups stored on blocks:
32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632

Allocating group tables: done
Writing inode tables: done
Creating journal (32768 blocks): done
Writing superblocks and filesystem accounting information: done
```

Em seguida, monte a partição utilizando este comando:

```
admin@serveur-1:~$ sudo mkdir /mnt/disk
admin@serveur-1:~$ sudo mount /dev/vdb1 /mnt/disk/
```


Por fim, verifique o ponto de montagem utilizando este comando:

```
admin@serveur-1:~$ df -h

Filesystem Size Used Avail Use% Mounted on
/dev/vda1 9.8G 840M 8.6G 9% /
udev 10M 0 10M 0% /dev
tmpfs 393M 5.2M 388M 2% /run
tmpfs 982M 0 982M 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 982M 0 982M 0% /sys/fs/cgroup
/dev/vdb1 9.8G 23M 9.2G 1% /mnt/disk
```

Para criar um ponto de montagem persistente, é necessário modificar o ficheiro /etc/fstab: Primeiro, utilize o comando abaixo para obter a identificação do bloco.

```
admin@serveur-1:~$ sudo blkid

/dev/vda1: UUID="51ba13e7-398b-45f3-b5f3-fdfbe556f62c" TYPE="ext4" PARTUUID="000132ff-01"
/dev/vdb1: UUID="2e4a9012-bf0e-41ef-bf9a-fbf350803ac5" TYPE="ext4" PARTUUID="95c4adcc-01"
```

Agora pode utilizar a identificação do bloco para alterar o ficheiro /etc/fstab.

```
admin@serveur-1:~$ vim /etc/fstab

/etc/fstab: static file system information.

# Use 'blkid' to print the universally unique identifier for a
# device; this may be used with UUID= as a more robust way to name devices
# that works even if disks are added and removed. See fstab(5).
#
# <file system> <mount point> <type> <options> <dump> <pass>
UUID=51ba13e7-398b-45f3-b5f3-fdfbe556f62c / ext4 defaults 0 0
UUID=2e4a9012-bf0e-41ef-bf9a-fbf350803ac5 /mnt/disk ext4 nofail 0 0
```

### Utilizando o Windows

Primeiro, clicar com o botão direito do rato em `Start Menu`{.action} e depois clicar em `Disk Management`{.action}.

![](images/start-menu.png){.thumbnail}

Quando a ferramenta de gestão de discos abrir, verá o seu novo disco como um volume desconhecido com espaço não alocado, como se mostra abaixo.

![disk management](images/disk-management-01.png){.thumbnail}

#### Inicializar o disco utilizando o Disk Management

Se o disco estiver offline, provavelmente é devido a uma política em vigor na instância. Para resolver isto, clicar com o botão direito do rato no disco e selecionar `Online`{.action}.

![offline disk](images/disk-management-02.png){.thumbnail}

Para inicializar o seu disco, clicar nele novamente com o botão direito do rato, e desta vez selecionar `Initialise Disk`{.action}.

![offline disk](images/disk-management-03.png){.thumbnail}

Em seguida, selecione `MBR`{.action} e clique em`OK`{.action}.

![initialise disk](images/initialise-disk.png){.thumbnail}

#### Inicializar o disco utilizando DISKPART

Primeiro, clicar com o botão direito do rato no `Start Menu`{.action} e depois clicar em `Run`{.action}.

![initialise disk](images/diskpart.png){.thumbnail}

Em seguida, digite `cmd` no prompt Run e depois clique em `OK`{.action}

![run prompt](images/run-prompt.png){.thumbnail}

No prompt de comando, digite o seguinte comando para abrir o utilitário DISKPART

```
C:\> diskpart
```

Em seguida, altere a política do disco com a seguinte série de comandos:

```
DISKPART> san

SAN Policy : Offline Shared
```

```
DISKPART> san policy = OnlineAll

DiskPart successfully changed the SAN policy for the current operating system . [/ Code]

Implementação da estratégia no disco adicional:
[Code] DISKPART> list disk

Disk ### Status Size Free Dyn Gpt
-------- ------------- ------- ------- --- ---
Disk 0 Online 200 GB 0 B
* Disk 1 Offline 10 GB 1024 KB
```

```
DISKPART> select disk 1

Disk 1 is now the selected disk.
```

```
DISKPART> attributes disk clear readonly

Disk attributes cleared successfully.
```

```
DISKPART> attributes disk

Current Read-only State : No
Read-only : No
Boot Disk : No
Pagefile Disk : No
Hibernation File Disk : No
Crashdump Disk : No
Clustered Disk : No
```

```
DISKPART> online disk

DiskPart successfully onlined the selected disk.
```

#### Formatar o disco

Abra novamente o utilitário Disk Management, clique com o botão direito do rato no volume e, em seguida, clique em `New Simple Volume...`{.action}

![format disk](images/format-disk-01.png){.thumbnail}

Agora, clique em `Next`{.action}.

![format disk](images/format-disk-02.png){.thumbnail}

Configure o tamanho de disco pretendido. Geralmente, isto deve corresponder a 100% do espaço. Em seguida, clique em`Next`{.action}.

![format disk](images/format-disk-03.png){.thumbnail}

Selecione uma letra da lista pendente para identificar o drive e em seguida clique em `Next`{.action}.

![format disk](images/format-disk-04.png){.thumbnail}

Selecione as opções que pretende para o disco e em seguida clique em `Next`{.action} para efetuar a formatação.

![format disk](images/format-disk-05.png){.thumbnail}

Por fim, clique em `Finish`{.action} para concluir a operação.

![format disk](images/format-disk-06.png){.thumbnail}

Logo que o disco estiver formatado, poderá simplesmente aceder-lhe a partir do File Explorer.

## Vá mais longe

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.