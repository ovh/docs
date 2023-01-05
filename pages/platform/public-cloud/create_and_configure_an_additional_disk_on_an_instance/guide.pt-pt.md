---
title: 'Criar e configurar um disco suplementar numa instância'
excerpt: 'Saiba como associar um novo volume à sua instância Public Cloud'
slug: criar_e_configurar_um_disco_suplementar_numa_instancia
legacy_guide_number: g1863
section: Armazenamento
order: 1
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 04/01/2023**

## Objetivo

Pode criar discos suplementares para as suas instâncias Public Cloud.
Tal pode ser útil nos seguintes casos:

- Se deseja aumentar a sua capacidade de armazenamento sem ter de alterar o modelo de instância.
- Se deseja dispor de um espaço de armazenamento de alta disponibilidade e de alta performance.
- Se pretender mover o seu armazenamento e os seus dados para outra instância.

**Saiba como criar um disco adicional e configurá-lo na instância.**

## Requisitos

- Estar ligado à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt).
- Dispor de uma instância [Public Cloud](https://www.ovhcloud.com/pt/public-cloud/){.external} na sua conta OVHcloud
- Ter acesso de administrador (root) à sua instância através de SSH

> [!warning]
> Esta funcionalidade não está atualmente disponível para as instâncias Metal.
>

## Instruções

### Associar um novo volume

Ligue-se à sua [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt), aceda à secção `Public Cloud`{.action} e selecione o projeto Public Cloud em causa. A seguir, abra o `Block Storage`{.action} no menu à esquerda.

Nesta parte, clique no botão `Criar um volume`{.action}.

![selecione o projeto](images/avolume01.png){.thumbnail}

Siga os passos de configuração para selecionar as opções de localização, o tipo de disco e a capacidade de disco. Introduza um nome para o volume e valide clicando em `Criar o volume`{.action}.

![creme disk](images/avolume02.png){.thumbnail}

O novo disco aparecerá na Área de Cliente.

![configurar disk](images/avolume03.png){.thumbnail}

À direita do volume, clique no botão `...`{.action} e selecione `Associar a instância`{.action}.

![attach disk 01](images/avolume04.png){.thumbnail}

Na nova janela, selecione uma instância na lista e clique em `Confirmar`{.action} para associar o disco.

![attach disk 02](images/avolume05.png){.thumbnail}

O processo de conexão do disco à sua instância vai então começar. A operação pode demorar alguns minutos.

> [!warning]
> Certifique-se de que não sai da página atual da sua Área de Cliente OVHcloud quando o disco está a ser ligado. Isto poderia interromper o processo.
>

### Configuração do novo disco

Os exemplos abaixo pressupõem que está ligado enquanto utilizador com autorizações suficientes.

#### Em Linux

Abra uma [ligação SSH à sua instância](https://docs.ovh.com/pt/public-cloud/public-cloud-primeiros-passos/#connect-to-instance) e utilize o comando abaixo para listar os discos ligados.

```bash
~$ admin@server-1:~$ lsblk

NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda 254:0 0 10G 0 disk
└─vda1 254:1 0 10G 0 part /
vdb 254:16 0 10G 0 disk
```

> [!primary]
>
> Neste exemplo, `vda` refere-se ao disco predefinido da instância. O disco adicional será então denominado `vdb`.
>

Crie uma partição no disco suplementar através dos comandos abaixo.

```bash
~$ admin@server-1:~$ sudo fdisk /dev/vdb

Welcome to fdisk (util-linux 2.25.2).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.

Device does not contain a recognized partition table.
Created a new DOS disklabel with disk identifier 0x95c4adcc.
```

```bash
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

```bash
Command (m for help): w

The partition table has been altered.
Calling ioctl() to re-read partition table.
Syncing disks.
```

De seguida, configure a nova partição `vdb1` utilizando o seguinte comando:

```bash
~$ admin@server-1:~$ sudo mkfs.ext4 /dev/vdb1
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

Monte a partição com os seguintes comandos:

```bash
admin@server-1:~$ sudo mkdir /mnt/disk
admin@server-1:~$ sudo mount /dev/vdb1 /mnt/disk/
```

Por fim, verifique o ponto de montagem com este comando:

```bash
~$ admin@server-1:~$ df -h

Filesystem Size Used Avail Use% Mounted on
/dev/vda1 9.8G 840M 8.6G 9% /
udev 10M 0 10M 0% /dev
tmpfs 393M 5.2M 388M 2% /run
tmpfs 982M 0 982M 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 982M 0 982M 0% /sys/fs/cgroup
/dev/vdb1 9.8G 23M 9.2G 1% /mnt/disk
```

> [!primary]
>
> A montagem não é persistente pois o disco será desligado aquando do reboot da instância. Para automatizar a montagem, é necessário editar o ficheiro `fstab`.
>

Primeiro, obtenha a UUID (bloco ID) do novo volume:

```bash
~$ admin@server-1:~$ sudo blkid

/dev/vda1: UUID="51ba13e7-398b-45f3-b5f3-fdfbe556f62c" TYPE="ext4" PARTUUID="000132ff-01"
/dev/vdb1: UUID="2e4a9012-bf0e-41ef-bf9a-fbf350803ac5" TYPE="ext4" PARTUUID="95c4adcc-01"
```

Abra `/etc/fstab` com um editor de texto:

```
~$ sudo nano /etc/fstab
```

Adicione a linha abaixo ao ficheiro e substitua a UUID pela sua:

```console
UUID=2e4a9012-bf0e-41ef-bf9a-fbf350803ac5 /mnt/disk ext4 nofail 0 0
```

Registe e saia do editor. O disco deve ser automaticamente montado em cada reinício.

#### Em Windows

Crie uma ligação RDP (Remote Desktop) com a sua instância Windows.

Uma vez ligado, clique com o botão `Iniciar`{.action} e abra a `Gestão dos discos`{.action}.

![disk management](images/start-menu.png){.thumbnail}

O novo disco será apresentado como um volume desconhecido com espaço não atribuído.

![volume desconhecido](images/disk-management-01.png){.thumbnail}

Se o disco for indicado como estando fora de linha, deve ser iniciado. Para isso, pode utilizar a [interface de utilizador Windows](#initDiskManagement) ou o [utilitário DISKPART](#initDiskpart). Caso contrário, faça a [formatação do disco na Gestão dos discos](#formatDiskManagement).

##### **Iniciar o disco na Gestão dos discos** <a name="initDiskManagement"></a>

Faça um clique direito no disco e selecione `Online`{.action}. 

Se o disco for indicado como estando offline, isso deve-se provavelmente a uma política existente na instância. Para resolver este problema, clique com o botão direito do rato e selecione a opção `online`{.action}.

![offline disk](images/disk-management-02.png){.thumbnail}

Faça novamente um clique direito e selecione `Iniciar o disco`{.action}.

![offline disk](images/disk-management-03.png){.thumbnail}

De seguida, selecione `MBR`{.action} e clique em `OK`{.action}.

![inicializa disk](images/initialise-disk.png){.thumbnail}

##### **Iniciar o disco com DISKPART** <a name="initDiskpart"></a>

Clique com o botão `Iniciar`{.action} e abra a `Executar`{.action}.

![inicializa disk](images/diskpart.png){.thumbnail}

Introduza `cmd` e clique em `OK`{.action} para abrir a aplicação de linha de comando.

![run pronto](images/run-prompt.png){.thumbnail}

No menu de encomenda, abra o DISKPART:

```
C:\> diskpart
```

Utilize a seguinte série de comandos DISKPart para colocar o disco `online`:

```
DISKPART> san

SAN Policy : Offline Shared
```

```
DISKPART> san policy = OnlineAll

DiskPart successfully changed the SAN policy for the current operating system .

- Implementation of the strategy on the extra disk:
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

##### **Formatação do disco** <a name="formatDiskManagement"></a>

Na ferramenta `Gestão dos discos`{.action}, clique com o botão direito do rato no novo disco e selecione `Novo volume simples...`{.action}.

![formato disk](images/format-disk-01.png){.thumbnail}

No assistente, clique em `Seguinte`{.action} para especificar o tamanho do volume. Por predefinição, deve estar no máximo. Clique em `Seguinte`{.action} para continuar.

![formato disk](images/format-disk-03.png){.thumbnail}

Deixe a nova letra de leitor predefinida ou selecione outra e clique em `Seguinte`{.action}.

![formato disk](images/format-disk-04.png){.thumbnail}

Dê um nome ao volume (facultativo) e confirme as opções de formatação ao clicar em `Seguinte`{.action}.

![formato disk](images/format-disk-05.png){.thumbnail}

Na última janela, clique em `Terminar`{.action} para formatar o disco.

![formato disk](images/format-disk-06.png){.thumbnail}

O disco estará disponível como leitor no explorador de ficheiros.

## Quer saber mais?

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.