---
title: "Recuperação das bases de dados em modo rescue"
excerpt: "Descubra como aceder às suas bases de dados e registá-las em modo rescue"
updated: 2023-04-13
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo

O modo Rescue permite aceder aos seus dados de forma permanente, mesmo que o sistema operativo do servidor ou os softwares alojados no mesmo já não funcionem.

**Saiba como aceder ao seu sistema operativo em modo rescue e recuperar os ficheiros de base de dados.**

## Requisitos

- Um [servidor dedicado](https://www.ovhcloud.com/pt/bare-metal/), um [VPS](https://www.ovhcloud.com/pt/vps/) ou uma instância [Public Cloud](https://www.ovhcloud.com/pt/public-cloud/) na sua conta OVHcloud (exceto sistemas Windows)
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt)


> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
>
> Este tutorial tem como objetivo acompanhá-lo o melhor possível em tarefas comuns. No entanto, se encontrar dificuldades ou dúvidas relativamente à administração, utilização ou implementação de serviços num servidor, recomendamos que recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/directory/) ou que contacte a [nossa comunidade](https://community.ovh.com/en/).
>


## Instruções

### Reiniciar o servidor em modo de rescue

Siga o guia correspondente para passar o seu serviço OVHcloud em modo rescue:

- [Servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)
- [VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)
- [Instância Public Cloud](/pages/public_cloud/compute/put_an_instance_in_rescue_mode)

Siga as instruções [desta secção](#pci) para um **VPS** ou uma instância **Public Cloud**. Passe para a [secção seguinte](#dedicated) para um servidor **dedicado**. 

### Aceder aos seus dados através de um VPS ou de uma instância Public Cloud <a name="pci"></a>

Em primeiro lugar, temos de identificar o ponto de montagem que contém o `/` do nosso sistema.

Para isso, pode utilizar os comandos `lsblk` e `fdisk -l`.

- Exemplo de saída **lsblk**:

```output
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0   10G  0 disk
└─sdb1   8:17   0   10G  0 part
```
 
- Exemplo de saída **fdisk -l**:

```output
Disk /dev/sdb: 10 GiB, 10737418240 bytes, 20971520 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0x961fcb1c
 
Device     Boot Start      End  Sectors Size Id Type
/dev/sdb1  *     2048 20971486 20969439  10G 83 Linux
 
 
Disk /dev/sda: 2.5 GiB, 2621440000 bytes, 5120000 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0xaf5119d2
 
Device     Boot Start     End Sectors  Size Id Type
/dev/sda1  *     2048 5117951 5115904  2.5G 83 Linux
```

> [!primary]
>
> As secções de código seguintes são apresentadas a título ilustrativo, em relação ao exemplo de saída acima. Deverá ajustar as instruções com a sua configuração real e substituir os valores nos comandos pelos seus ID de disco e de volume.
>

Neste exemplo, o disco principal (10 GB) é denominado "sdb". Os nossos dados in `/` encontram-se na partição `/dev/sdb1`. (Enquanto que "sda" está em modo rescue e "sda1" a partição principal em modo rescue montada em `/`.)

Montamos a partição do sistema na pasta `/mnt` e depois verificamos o seu conteúdo:

```shell-session
root@rescue:~# mount /dev/sdb1 /mnt
root@rescue:~# ls /mnt
bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@rescue:~#
```

Para lançar serviços no sistema a partir do modo rescue, deverá também montar estas partições:

```shell-session
root@rescue:~# mount -o rbind /dev /mnt/dev
root@rescue:~# mount -t proc proc /mnt/proc
root@rescue:~# mount -t sysfs sys /mnt/sys
 
root@rescue:~# mount | grep /mnt
/dev/sdb1 on /mnt type ext4 (rw,relatime,data=ordered)
udev on /mnt/dev type devtmpfs (rw,nosuid,relatime,size=990236k,nr_inodes=247559,mode=755)
devpts on /mnt/dev/pts type devpts (rw,nosuid,noexec,relatime,gid=5,mode=620,ptmxmode=000)
tmpfs on /mnt/dev/shm type tmpfs (rw,nosuid,nodev)
hugetlbfs on /mnt/dev/hugepages type hugetlbfs (rw,relatime)
mqueue on /mnt/dev/mqueue type mqueue (rw,relatime)
proc on /mnt/proc type proc (rw,relatime)
sys on /mnt/sys type sysfs (rw,relatime)
```

Consulte a secção de recuperação da [base de dados abaixo](#databases).
 
### Aceder aos seus dados num servidor dedicado (configuração RAID por software) <a name="dedicated"></a>

Em primeiro lugar, temos de identificar o ponto de montagem que contém o `/` do nosso sistema.

Para isso, pode utilizar os comandos `lsblk` e `fdisk -l`.

Exemplo de saída:

```shell-session
root@rescue:~# fdisk -l
```
```output
Disk /dev/sda: 1.8 TiB, 2000398934016 bytes, 3907029168 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 5E158D46-2A45-42C9-8089-697BE070F669
 
Device          Start        End    Sectors    Size Type
/dev/sda1          40       2048       2009 1004.5K BIOS boot
/dev/sda2        4096    1050623    1046528    511M Linux RAID
/dev/sda3     1050624   42008575   40957952   19.5G Linux RAID
/dev/sda4    42008576 3905972223 3863963648    1.8T Linux RAID
/dev/sda5  3905972224 3907018751    1046528    511M Linux swap
 
Disk /dev/sdb: 1.8 TiB, 2000398934016 bytes, 3907029168 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 8039EE93-AB98-4EA1-B316-74EE89EF5EB6
 
Device          Start        End    Sectors    Size Type
/dev/sdb1          40       2048       2009 1004.5K BIOS boot
/dev/sdb2        4096    1050623    1046528    511M Linux RAID
/dev/sdb3     1050624   42008575   40957952   19.5G Linux RAID
/dev/sdb4    42008576 3905972223 3863963648    1.8T Linux RAID
/dev/sdb5  3905972224 3907018751    1046528    511M Linux swap
 
Disk /dev/md4: 1.8 TiB, 1978349322240 bytes, 3863963520 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk /dev/md3: 19.5 GiB, 20970405888 bytes, 40957824 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk /dev/md2: 511 MiB, 535756800 bytes, 1046400 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```

> [!primary]
>
> As secções de código seguintes são apresentadas a título ilustrativo, em relação ao exemplo de saída acima. Deverá ajustar as instruções com a sua configuração real e substituir os valores nos comandos pelos seus ID de disco e de volume.
>

Neste exemplo, os nossos dados `/` encontram se no volume `/dev/md3`.

Montamos a partição do sistema na pasta `/mnt` e depois verificamos o seu conteúdo:

```shell-session
root@rescue:~# mount /dev/md3 /mnt
root@rescue:~# ls /mnt
bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@rescue:~#
```

Para lançar serviços no sistema a partir do modo rescue, deverá também montar estas partições:

```shell-session
root@rescue:~# mount -o rbind /dev /mnt/dev
root@rescue:~# mount -t proc proc /mnt/proc
root@rescue:~# mount -t sysfs sys /mnt/sys
 
root@rescue:~# mount | grep /mnt
/dev/md3 on /mnt type ext4 (rw,relatime,data=ordered)
devtmpfs on /mnt/dev type devtmpfs (rw,relatime,size=16412720k,nr_inodes=4103180,mode=755)
tmpfs on /mnt/dev/shm type tmpfs (rw,nosuid,nodev)
devpts on /mnt/dev/pts type devpts (rw,nosuid,noexec,relatime,gid=5,mode=620,ptmxmode=000)
hugetlbfs on /mnt/dev/hugepages type hugetlbfs (rw,relatime)
mqueue on /mnt/dev/mqueue type mqueue (rw,relatime)
proc on /mnt/proc type proc (rw,relatime)
sys on /mnt/sys type sysfs (rw,relatime)
```

 
### Recuperação das bases de dados <a name="databases"></a>

Depois de montar todas as partições necessárias, temos de poder executar comandos sobre o próprio sistema. Para isso, utilize o comando `chroot`:

```shell-session
root@rescue:~# chroot /mnt/
root@rescue:/#
```
Agora, todos os comandos que vai entrar serão aplicados ao seu sistema em vez do ambiente temporário do modo rescue.

Agora podemos iniciar o serviço `mysql`:

```shell-session
root@rescue:/# service mysql start
[ ok ] Starting MariaDB database server: mysqld ..
root@rescue:/#
```

Utilize o comando `mysqldump` para registar a base de dados num ficheiro:

```shell-session
root@rescue:/# mysqldump -u root -p scarif > /home/dump.sql
Enter password:
root@rescue:/#
```

Neste caso, o utilizador `mysql` que se liga à base de dados é `root`. A opção `-p` permite-lhe introduzir a palavra-passe do `root` e a base de dados recuperada é denominada `scarif`.

O ficheiro de base de dados é então registado no diretório `/home` sob o nome `dump.sql`.

Também pode realizar o backup de todas as bases de dados de uma só vez:

```shell-session
root@rescue:/# mysqldump -u root -p --all-databases > alldb.sql
Enter password:
root@rescue:/#
```

A lista do conteúdo de `/home` apresenta os dois ficheiros de base de dados criados pelos comandos anteriores:

```shell-session
root@rescue:/# ls /home
alldb.sql  dump.sql
```

No caso de tabelas corrompidas, este comando pode ser utilizado para a reparação:

```shell-session
root@rescue:/# mysqlcheck -u root -p Password_Root_MySQL --auto-repair --optimize --all-databases
```

A partir da pasta `/home`, pode agora enviar os seus ficheiros de backup para um servidor distante. Neste exemplo, utilizamos o utilitário de transferência de ficheiros `scp`:

```shell-session
root@rescue:/# scp -P SSH_Port_Number dump.sql user@IP_address:/home/backup
```

## Quer saber mais?

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.