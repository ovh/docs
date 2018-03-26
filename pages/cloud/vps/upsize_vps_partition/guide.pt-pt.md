---
title: Como criar uma partição após o upgrade do VPS
slug: criar-particao-apos-upgrade-vps
section: Primeiros passos
---

**Última atualização 14/03/2018**

## Sumário

Por vezes, depois de efetuar o upgrade do seu VPS, é necessário redimensionar a partição do disco. Siga as instruções deste manual para realizar esta ação.

> [!warning]
>
> O redimensionamento dos discos e a criação de partições pode danificar os ficheiros e levar à perda definitiva dos dados. A utilização do VPS da OVH é da responsabilidade do cliente. A OVH não tem permissões de acesso aos VPS e não pode ser responsabilizada por eventuais danos ou perdas de dados. Como tal, antes de avançar, faça uma cópia de segurança dos dados.
>

## Requisitos

- Estar ligado ao VPS com protocolo SSH (acesso root)
- Iniciar o servidor em [Modo Rescue](https://docs.ovh.com/pt/vps/rescue/){.external}.

## Instruções

Com o upgrade do VPS, a capacidade da RAM e a frequência processador (CPU) são aumentadas automaticamente. Já o aumento do espaço de armazenamento requer um ajustamento manual.

**Este guia explica como redimensionar o espaço de armazenamento de um VPS**.

### Fazer backup dos dados

Como o aumento de uma partição pode implicar a perda de dados, **recomendamos vivamente** a realização de uma cópia de segurança dos dados armazenados no VPS.

### Desmontar a partição

Aceda ao VPS em [Mode Rescue](https://docs.ovh.com/pt/vps/rescue/){.external}. A partição será montada automaticamente. Antes de ser redimensionada, a partição precisa de ser desmontada. Se souber o nome da sua partição, passe à etapa seguinte. Se não, execute o seguinte comando:

```sh
lsblk
```

A partição correspondente ao Modo Rescue será montada na pasta root do sistema. Já a partição do seu VPS pode não estar montada, e deverá estar localizada numa pasta associada a /mnt.

```sh
NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
sda 254:0 0 10G 0 disk
└─sda1 254:1 0 10G 0 part /
sdb 254:16 0 25G 0 disk
└─sdb1 254:17 0 25G 0 part /mnt/sdb1
```

Para desmontar a partição, execute o seguinte comando:

```sh
umount /dev/sdb1
```

### Verificar o sistema de ficheiros

Depois de desmontar a partição, convém analisar o sistema de ficheiros (`filesystem check`) para verificar se existem erros. O comando é o seguinte:

```sh
e2fsck -yf /dev/sdb1
 
e2fsck 1.42.9 (4-Feb-2014)
Pass 1: Checking inodes, blocks, and sizes
Pass 2: Checking directory structure
Pass 3: Checking directory connectivity
Pass 4: Checking reference counts
Pass 5: Checking group summary information
/dev/sdb1: 37870/1310720 files (0.2% non-contiguous), 313949/5242462 blocks
```
> [!warning]
>
> Se surgir um erro do tipo`bad magic number in superblock`, não avance com o processo. Aceda à parte final deste manual, e siga as instruções para corrigir este erro.

### Abrir a aplicação fdisk

Quando terminar análise do disco, e se não existir qualquer erro, execute a aplicação`fdisk`. Quando introduzir o comando, adicione o nome do disco (e não o da partição) a seguir a fdisk. Se a partição for `sdb1` em vez de `vdb1`, por exemplo, o nome do disco será /dev/sdb.

```sh
fdisk -u /dev/sdb
```

> [!primary]
>
> O fdisk tem vários subcomandos. Estes podem ser listados através do comando`m`.
>

### Eliminar a partição antiga

Antes de eliminar partição pré-upgrade, identifique e anote o nome do primeiro setor da partição. Para obter esta informação, execute o comando `p`{.action}. A designação do setor está indicada abaixo do campo `Start`. Anote esta informação para ser usada mais tarde.

```sh
Command (m for help): p
 
Disk /dev/sdb: 21.5 GB, 21474836480 bytes
54 heads, 49 sectors/track, 15851 cylinders, total 41943040 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk identifier: 0x000132ff
 
Device Boot Start End Blocks Id System
/dev/sdb1 * *2048* 41941745 20969849 83 Linux
```

> [!warning]
>
> Esta ação é irreversível. Por favor, crie uma cópia de segurança dos dados.
>

Agora, elimine a partição executando o comando `d`{.action}.

```sh
Command (m for help): d
Selected partition 1
```

A única partição existente será eliminada de forma automática.

### Criar uma nova partição

Agora é necessário criar uma nova partição executando o comando `n`{.action}. Neste âmbito, recomendamos a utilização dos valores predefinidos.

```sh
Command (m for help): n
Partition type:
p primary (0 primary, 0 extended, 4 free)
e extended
Select (default p): p
Partition number (1-4, default 1): 1
First sector (2048-41943039, default 2048): 2048
Last sector, +sectors or +size{K,M,G} (2048-41943039, default 41943039): 41943039
```

Certifique-se que o valor predefinido apresentado na linha `First sector`, é igual ao anotado anteriormente. Se for diferente, use o valor que anotou antes.

### Configurar uma partição de arranque (bootable)

Agora, tem que definir a partição como partição de arranque. Para tal, execute o comando `a`{.action}.

```sh
Command (m for help): a
 
Partition number (1-4): 1
```

Guarde as alterações e saia da aplicação com o comando`w`{.action}:

```sh
Command (m for help): w
 
The partition table has been altered!
 
Calling ioctl() to re-read partition table.
Syncing disks.
```

### Redimensionar o sistema de ficheiros na partição

A partição foi aumentada, mas o sistema de ficheiros (filesystem) ainda ocupa o espaço definido anteriormente. Para expandir o sistema de ficheiros, execute o seguinte comando:

```sh
resize2fs /dev/sdb1
 
resize2fs 1.42.9 (4-Feb-2014)
Resizing the filesystem on /dev/sdb1 to 5242624 (4k) blocks.
The filesystem on /dev/sdb1 is now 5242624 blocks long.
```

### Verificar o resultado da alteração

Para confirmar o sucesso das alterações, monte a nova partição e verifique a dimensão da mesma.

```sh
mount /dev/sdb1 /mnt
```
```sh
df -h
 
Filesystem Size Used Avail Use% Mounted on
/dev/sda1 991M 793M 132M 86% /
none 4.0K 0 4.0K 0% /sys/fs/cgroup
udev 1.9G 12K 1.9G 1% /dev
tmpfs 386M 360K 386M 1% /run
tmpfs 5.0M 0 5.0M 0% /run/lock
none 1.9G 0 1.9G 0% /run/shm
none 100M 0 100M 0% /run/user
/dev/sdb1 50G 842M 48G 2% /mnt
```

A dimensão da partição está indicada por baixo de `size`.

### Como corrigir os erros *bad magic number in superblock*?

Se o comando `e2fsck`{.action} devolver a mensagem de erro`bad magic number in superblock`, deverá verificar e corrigir o sistema de ficheiros, usando o backup de um superblock. Para ver os backups de superblocks disponíveis, execute este comando:

```sh
dumpe2fs /dev/sdb1 | grep superblock
 
Primary superblock at 0, Group descriptors at 1-6
Backup superblock at 32768, Group descriptors at 32769-32774
Backup superblock at 98304, Group descriptors at 98305-98310
Backup superblock at 163840, Group descriptors at 163841-163846
Backup superblock at 229376, Group descriptors at 229377-229382
Backup superblock at 294912, Group descriptors at 294913-294918
Backup superblock at 819200, Group descriptors at 819201-819206
Backup superblock at 884736, Group descriptors at 884737-884742
Backup superblock at 1605632, Group descriptors at 1605633-1605638
Backup superblock at 2654208, Group descriptors at 2654209-2654214
Backup superblock at 4096000, Group descriptors at 4096001-4096006
Backup superblock at 7962624, Group descriptors at 7962625-7962630
Backup superblock at 11239424, Group descriptors at 11239425-11239430
Backup superblock at 20480000, Group descriptors at 20480001-20480006
Backup superblock at 23887872, Group descriptors at 23887873-23887878
```

Agora, utilize o primeiro backup superblock para verificar e corrigir sistema de ficheiros:

```sh
fsck -b 32768 /dev/sdb1
```

## Quer saber mais?

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.