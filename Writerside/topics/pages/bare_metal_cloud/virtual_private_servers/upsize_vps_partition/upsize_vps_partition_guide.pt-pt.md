---
title: Reparticionar um VPS após um upgrade de armazenamento
excerpt: "Saiba como aumentar a quantidade de espaço útil no disco após uma atualização"
updated: 2023-09-05
---

## Objetivo

Depois de aumentar a capacidade de armazenamento do seu VPS, deverá reparticionar o espaço em disco para beneficiar do tamanho real. Os passos seguintes descrevem como fazer isso.

> [!warning]
>
> O reparticionamento do VPS pode danificar os dados que contém de forma definitiva. A OVHcloud não poderá ser responsabilizada pela sua deterioração ou perda. Por isso, antes de tomar qualquer medida, certifique-se de que guarda as suas informações. 
>

**Saiba como aumentar o seu espaço de armazenamento após um upgrade de disco.**

## Requisitos

- Ter acesso de administrador ao VPS ([Windows](upsize_vps_partition_#windows.)).
- Ter reiniciado o servidor em [modo rescue](rescue1.) (apenas Linux).

## Instruções

Após uma atualização da memória (RAM) ou do processador (vCores), estes dois recursos são automaticamente ajustados no seu VPS, ao contrário do espaço em disco aquando de um upgrade de armazenamento do seu VPS.

### Linux

#### Realizar uma cópia de segurança dos dados

Tentar expandir uma partição pode causar perda de dados. Por isso, recomendamos **vivamente** que efetue uma cópia de segurança dos dados do seu VPS.

#### Ativar o modo rescue e verificar as partições

Se o VPS ainda não estiver em modo rescue, ative-o graças ao [nosso guia](rescue1.).

De seguida, poderá verificar a configuração dos discos:

```bash
lsblk
```

A partição correspondente ao modo rescue (`sda1`, neste exemplo) é montada no diretório `/` .Quanto a este, o disco do VPS é denominado `sdb` e não deve ter nenhum ponto de montagem.

Por exemplo:

```console
NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
sda 254:0 0 10G 0 disk
└─sda1 254:1 0 10G 0 part /
sdb 254:16 0 25G 0 disk
└─sdb1 254:17 0 25G 0 part
```

Se o seu resultado se assemelha ao exemplo acima e a coluna `MOUNTPOINT` está vazia na linha correspondente, você pode passar para [a próxima etapa](#checkfs.).

No entanto, se o seu resultado mostrar que existe um ponto de montagem para a partição VPS, esta deverá ser desmontada primeiro.

Por exemplo:

```console
sdb 254:16 0 25G 0 disk
└─sdb1 254:17 0 25G 0 part /mnt/sdb1
```

No exemplo de saída acima, a partição `sdb1` é montada em `/mnt/`. Para redimensionar a partição, esta não deve estar montada.

Para desmontar a partição, execute o seguinte comando:

```bash
umount /dev/partition_name
```

Neste exemplo de configuração, o comando seria:

```bash
umount /dev/sdb1
```

#### Verificar o sistema de ficheiros <a name="checkfs"></a>

Antes de continuar, é recomendável verificar o sistema de arquivos (`filesystem check`) para ver se há erros na partição. O comando é o seguinte:

```sh
e2fsck -yf /dev/sdb1
```

```console
e2fsck 1.42.9 (4-Feb-2014)
Pass 1: Checking inodes, blocks, and sizes
Pass 2: Checking directory structure
Pass 3: Checking directory connectivity
Pass 4: Checking reference counts
Pass 5: Checking group summary information
/dev/sdb1: 37870/1310720 files (0.2% non-contiguous), 313949/5242462 blocks
```

Se verificar algum erro, deverá adotar as medidas adequadas para cada situação. Estes são alguns dos exemplos mais frequentes:

- `bad magic number in superblock`: não continuar. Para resolver este problema, consulte a secção “[Como corrigir os erros *bad magic number in superblock*](upsize_vps_partition#como-corrigir-os-erros-bad-magic-number-in-superblock.)” deste manual.

- `/dev/vdb1 has unsupported feature(s): metadata_csum` seguido de `e2fsck: Get a newer version of e2fsck!`: atualizar “e2fsck”. Se a última versão não estiver disponível através de `apt` (ou outro gestor de pacotes), deverá compilá-la a partir do código fonte.

A seguinte lista não é exaustiva.

### Abrir a aplicação fdisk

Depois de verificar que não existem erros no sistema de ficheiros, abra a a aplicação`fdisk`. Aí, deverá introduzir o nome do disco (e não o da partição) como parâmetro. Se a partição for `sdb1`, por exemplo, o nome do disco será `/dev/sdb`.

```sh
fdisk -u /dev/sdb
```

> [!primary]
>
> Esta aplicação dispõe de vários subcomandos, que poderão ser listados através do comando `m`.
>

### Eliminar a antiga partição

Antes de eliminar a antiga partição, recomendamos que anote o número correspondente ao primeiro setor da partição. Para obter esta informação, execute o comando `p`{.action}. O número é o que aparece no campo `Start`. Conserve esta informação para ser usada mais tarde.

```console
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
> Esta ação é irreversível. Certifique-se de que tem uma cópia de segurança dos dados.
>

Em seguida, elimine a partição através do comando `d`{.action}.

```console
Command (m for help): d
Selected partition 1
```

A única partição será eliminada de forma automática.

### Criar uma nova partição

Agora é necessário criar uma nova partição executando o comando `n`{.action}. Recomendamos a utilização dos valores predefinidos.

```console
Command (m for help): n
Partition type:
p primary (0 primary, 0 extended, 4 free)
e extended
Select (default p): p
Partition number (1-4, default 1): 1
First sector (2048-41943039, default 2048): 2048
Last sector, +sectors or +size{K,M,G} (2048-41943039, default 41943039): 41943039
```

Na linha `First sector`, certifique-se que o valor predefinido é igual ao que foi anotado anteriormente. Se for diferente, use o valor que anotou antes.

### Configurar uma partição de arranque (bootable)

A seguir, certifique-se de que a partição seja de arranque (bootable). Para tal, utilize o comando `a`{.action}.

```console
Command (m for help): a
 
Partition number (1-4): 1
```

Guarde as alterações e saia da aplicação com o comando`w`{.action}:

```console
Command (m for help): w
 
The partition table has been altered!
 
Calling ioctl() to re-read partition table.
Syncing disks.
```

### Ampliar o sistema de ficheiros na partição

A partição foi aumentada, mas o sistema de ficheiros (filesystem) ainda ocupa o espaço definido anteriormente. Para o ampliar, introduza o seguinte comando:

```sh
resize2fs /dev/sdb1
```

```console
resize2fs 1.42.9 (4-Feb-2014)
Resizing the filesystem on /dev/sdb1 to 5242624 (4k) blocks.
The filesystem on /dev/sdb1 is now 5242624 blocks long.
```

### Verificar os resultados

Para confirmar que a operação foi realizada corretamente, pode montar a partição que acabou de criar e verificar o seu tamanho.

```sh
mount /dev/sdb1 /mnt
```

```sh
df -h
```

```console
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

A novo tamanho da partição está indicado na coluna `Size`.

### Como corrigir os erros *bad magic number in superblock*?

Se o comando `e2fsck`{.action} devolver a mensagem de erro`bad magic number in superblock`, deverá verificar e corrigir o sistema de ficheiros utilizando um superbloco de backup. Para ver os superblocos de backups disponíveis, execute este comando:

```sh
dumpe2fs /dev/sdb1 | grep superblock
```

```console
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

De seguida, utilize o primeiro superbloco de backup para verificar e corrigir sistema de ficheiros:

```sh
fsck -b 32768 /dev/sdb1
```

### Windows <a name="windows"></a>

#### Aceder à File and Storage Services

Pode encontrá-lo no "Server Manager":

![Serviços de File and Storage](file-and-storage.png){.thumbnail}

#### Redimensionar o volume

Clique com o botão direito do rato em C: e selecione `Extend Volume...`{.action}.

Neste caso, deverá escolher o novo tamanho do volume:

![Set New Volume Size](extend.png){.thumbnail}

Introduza o tamanho pretendido e clique em `OK`{.action}. O seu volume será então aumentado.

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
