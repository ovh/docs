---
title: 'Aumentar o tamanho de um disco suplementar'
excerpt: 'Este guia explica como aumentar o tamanho de um disco suplementar, bem como expandir a sua partição principal.'
slug: aumentar_o_tamanho_de_um_disco_suplementar
legacy_guide_number: g1865
---

**Última atualização a 14 de Novembro de 2019**

## Sumário

Mesmo que tenha atingido a capacidade máxima de armazenamento no seu disco adicional, ainda lhe pode aumentar o tamanho. 

**Este guia explica como aumentar o tamanho de um disco adicional, bem como expandir a sua partição principal.**

## Requisitos

* uma [Instância de Public Cloud](https://www.ovhcloud.com/pt/public-cloud/){.external} na sua conta OVH
* um [disco adicional](https://www.ovhcloud.com/pt/public-cloud/block-storage/){.external} associado à sua instância
* acesso à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}
* acesso administrativo (raiz) à sua instância via SSH (apenas para Linux )
* acesso administrativo à sua instância via RDP (apenas para Windows)

## Instruções

### Utilizando a Área de Cliente

Para implementar uma instância Public Cloud, faça login na [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}. Clique em `Public Cloud`{.action}no canto superior esquerdo da página. No ecrã seguinte, clique na seta ao lado do nome do seu projeto predefinido no canto superior esquerdo do ecrã. Agora selecione o projeto em que pretende editar o tamanho do disco adicional.

![área de cliente](images/select_project.png){.thumbnail}

Localize o seu disco de Bloco de Armazenamento na secção "Armazenamento" na barra lateral esquerda.

![área de cliente](images/increase-disk-02.png){.thumbnail}

Em seguida, clique nos 3 pontos à direita do disco e clique em Edit. Será redirecionado para esta página, onde poderá alterar a capacidade do volume.

![área de cliente](images/increase-disk-03.png){.thumbnail}

Quando terminar, clique no botão `Modify the volume.`{.action}


### Utilizando o Linux

Primeiro desmonte o disco, utilizando este comando.

```
admin@server-1:~$ sudo unmount /mnt/disk
```

Em seguida, recrie a partição.

```
admin@server-1:~$ sudo fdisk /dev/vdb
Welcome to fdisk (util-linux 2.25.2).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command
```

```
Command (m for help): d

Selected partition 1
Partition 1 has been deleted.
```

```
Command (m for help): n

Partition type
p primary (0 primary, 0 extended, 4 free)
e extended (container for logical partitions)
Select (default p):
Using default response p.
Partition number (1-4, default 1):
First sector (2048-146800639, default 2048):
Last sector, +sectors or +size{K,M,G,T,P} (2048-146800639, default 146800639):

Created a new partition 1 of type 'Linux' and of size 70 GiB.
```

```
Command (m for help): w

The partition table has been altered.
Calling ioctl() to re-read partition table.
Syncing disks.
```

Em seguida, volte a verificar a partição.

```
#admin@server-1:~$ sudo e2fsck -f /dev/vdb1

e2fsck 1.42.12 (29-Aug-2014)
Pass 1: Checking inodes, blocks, and sizes
Pass 2: Checking directory structure
Pass 3: Checking directory connectivity
Pass 4: Checking reference counts
Pass 5: Checking group summary information
/dev/vdb: 12/3276800 files (0.0% non-contiguous), 251700/13107200 blocks
```

```
#admin@server-1:~$ sudo resize2fs /dev/vdb1

resize2fs 1.42.12 (29-Aug-2014)
Resizing the filesystem on /dev/vdb to 18350080 (4k) blocks.
The filesystem on /dev/vdb is now 18350080 (4k) blocks long.
```

Por fim, monte e verifique o disco.

```
#admin@server-1:~$ sudo mount /dev/vdb1 /mnt/disk/
```

```
#admin@server-1:~$ df -h
Filesystem Size Used Avail Use% Mounted on
/dev/vda1 9.8G 840M 8.6G 9% /
udev 10M 0 10M 0% /dev
tmpfs 393M 5.2M 388M 2% /run
tmpfs 982M 0 982M 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 982M 0 982M 0% /sys/fs/cgroup
/dev/vdb1 69G 52M 66G 1% /mnt/disk
```

### Utilizando o Windows

Estabeleça uma conexão RDP com a sua instância. Depois de fazer login, clicar com o botão direito do rato em  `Start Menu`{.action} e depois clicar em `Disk Management`{.action}.

![windows](images/increase-disk-04.png){.thumbnail}

Quando a ferramenta de gestão de discos abrir, verá o seu novo disco como um volume desconhecido com espaço não alocado, como se mostra abaixo.

![windows](images/increase-disk-05.png){.thumbnail}

Se o disco estiver offline, provavelmente é devido a uma política em vigor na instância. Para resolver isto, clicar com o botão direito do rato no disco e selecionar Online

![windows](images/increase-disk-06.png){.thumbnail}

> [!primary]
>
Dependendo da sua versão do Windows, poderá ter de inicializar o seu disco adicional antes de o utilizar. Para inicializar o seu disco, clicar nele novamente com o botão direito do rato, e desta vez selecionar `Initialise Disk`{.action}.
>

Se o volume principal do seu disco for menor do que a capacidade total do disco, clicar com o botão direito do rato sobre o volume e depois clicar em `Extend Volume`{.action}

![windows](images/increase-disk-07.png){.thumbnail}

O assistente do Extend Volume vai aparecer Clicar em `Next`{.action} para iniciar o assistente.

![windows](images/increase-disk-08.png){.thumbnail}

Agora aumente o volume para o tamanho desejado e clique em `Next`{.action} quando terminar.

![windows](images/increase-disk-09.png){.thumbnail}

Por fim, clicar em `Finish`{.action} para concluir o processo.

![windows](images/increase-disk-10.png){.thumbnail}

## Vá mais longe

* [Criar e configurar um disco adicional numa instância](https://docs.ovh.com/pt/public-cloud/criar_e_configurar_um_disco_suplementar_numa_instancia/){.external}
* Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
