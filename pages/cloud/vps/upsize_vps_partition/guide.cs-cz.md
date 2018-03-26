---
title: Navýšení velikosti diskové jednotky po upgradu VPS
slug: navyseni-velikosti-disku-po-upgradu-vps
section: První kroky
---

**Poslední aktualizace 22/01/2018**

## Cíl

Po upgradu VPS může být zapotřebí provést manuální navýšení velikosti diskové jednotky. V následujícím textu se dozvíte, jak na to.

> [!warning]
>
> Tento proces může nenávratně poškodit Vaše data. Společnost OVH nenese za případné poškození čí ztrátu dat žádnou odpovědnost. Před započetím procesu si nezapomeňte vytvořit zálohu svých dat.
>

## Prerekvizity

- SSH přístup k VPS (root)
- Restart serveru v [režimu rescue](https://docs.ovh.com/cz/cs/vps/rescue/){.external}.

## Postup

Po upgradu VPS dochází k automatickému navýšení výkonu procesoru (CPU) a velikosti RAM.  V případě velikosti diskové jednotky to však neplatí.

V této příručce se dozvíte, jak manuálně navýšit velikost svého disku.

### Vytvoření datové zálohy

Pokus o navýšení velikosti diskové jednotky může vést ke ztrátě dat. Z toho důvodu **důrazně doporučujeme** vytvoření zálohy dat umístěných na Vašem VPS.

### Odpojení diskové jednotky

Při restartu VPS [v režimu rescue](https://docs.ovh.com/cz/cs/vps/rescue/){.external} dojde k automatickému připojení Vaší diskové jednotky. Aby bylo možné provést změnu velikosti, je disk ze všeho nejdříve zapotřebí odpojit. Pokud znáte název své diskové jednotky, můžete tento krok přeskočit. Pokud název diskové jednotky neznáte, použijte následující příkaz:

```sh
# lsblk
```

Disková jednotka režimu rescue bude připojena v adresáři „/“, což je vlastně system root. Disková jednotka Vašeho VPS se oproti tomu bude nejspíše nalézat v adresáři /mnt, nebo nebude připojena vůbec.

```sh
NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
sda 254:0 0 10G 0 disk
└─sda1 254:1 0 10G 0 part /
sdb 254:16 0 25G 0 disk
└─sdb1 254:17 0 25G 0 part /mnt/sdb1
```

Za účelem odpojení Vaší diskové jednotky použijte následující příkaz:

```sh
umount /dev/sdb1
```

### Ověření souborového systému (filesystem)

Po odpojení diskové jednotky doporučujeme provést kontrolu souborového systému  (`filesystem check`), díky níž lze identifikovat případné chyby na disku. Zadejte následující příkaz:

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
> Pokud dojde k nalezení chyby typu `bad magic number in superblock`, nepokračujte v procesu. Postup pro opravení této chyby naleznete v poslední části této příručky.

### Spuštění aplikace fdisk

Pokud při kontrole souborového systému nenarazíte na žádné potíže, spusťte aplikaci `fdisk`. Zadejte název disku. Pokud je Vaše disková jednotka například `sdb1` namísto `vdb1`, bude jméno disku /dev/sdb.

```sh
fdisk -u /dev/sdb
```

> [!primary]
>
> Aplikace obsahuje několik dalších příkazů, jejichž seznam zobrazíte zadáním příkazu `m`.
>

### Odstranění staré diskové jednotky

Před odstraněním staré diskové jednotky si zaznamenejte číslo odpovídající prvnímu sektoru. Tuto informaci získáte zadáním příkazu `p`{.action}. Naleznete ji v políčku `Start`. Tuto informaci si pečlivě zaznamenejte. Později ji budete potřebovat.

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
> Pokud jste si doposud nevytvořili zálohu svých dat, mějte prosím na vědomí, že nyní vstupujete do fáze procesu, z níž není návratu.
>

Následně odstraňte diskovou jednotku pomocí příkazu `d`{.action}.

```sh
Command (m for help): p
Selected partition 1
```

Disková jednotka bude automaticky vymazána.

### Vytvoření nové diskové jednotky

Nyní vytvořte novou diskovou jednotku pomocí příkazu `n`{.action}. Doporučujeme použít výchozí hodnoty.

```sh
Command (m for help): p
Partition type:
p primary (0 primary, 0 extended, 4 free)
e extended
Select (default p): p
Partition number (1-4, default 1): 1
First sector (2048-41943039, default 2048): 2048
Last sector, +sectors or +size{K,M,G} (2048-41943039, default 41943039): 41943039
```

Ujistěte se prosím, že výchozí hodnota na řádku `First sector` je identická s tou, kterou jste si zaznamenali v předcházející fázi. Pokud se hodnoty liší, použijte tu, kterou jste si zaznamenali.

### Zprovoznění diskové jednotky

Nyní je zapotřebí ujistit se, že je nově vytvořenou diskovou jednotku možné připojit (nabootovat). Učiňte tak pomocí příkazu `a`{.action}.

```sh
Command (m for help): p
 
Partition number (1-4, default 1): 1
```

Uložte změny a zavřete aplikaci prostřednictvím příkazu `w`{.action}:

```sh
Command (m for help): p
 
The partition table has been altered!
 
Calling ioctl() to re-read partition table.
Syncing disks.
```

### Rozšíření souborového systému na diskové jednotce

Disková jednotka byla sice zvětšena, ale její souborový systém stále ještě zabírá stejné místo, jako předtím. Za účelem jeho rozšíření zadejte prosím následující příkaz:

```sh
resize2fs /dev/sdb1
 
resize2fs 1.42.9 (4-Feb-2014)
Resizing the filesystem on /dev/sdb1 to 5242624 (4k) blocks.
The filesystem on /dev/sdb1 is now 5242624 blocks long.
```

### Kontrola výsledků

Připojte diskovou jednotku a ověřte její velikost.

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
none 5.0M 0 5.0M 0% /run/lock
none 1.9G 0 1.9G 0% /run/shm
none 100M 0 100M 0% /run/user
/dev/sdb1 50G 842M 48G 2% /mnt
```

Velikost nové diskové jednotky naleznete v kolonce `size`.

### Jak opravit chyby typu *bad magic number in superblock*?

Pokud Vám příkaz `e2fsck`{.action} vrací chybu `bad magic number in superblock`, zkontrolujte a opravte souborový systém prostřednictvím „superblock zálohy“. Pro zobrazení seznamu dostupných superblock záloh zadejte následující příkaz:

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

Pro opravu souborového systému následně použijte první superblock zálohu:

```sh
fsck -b 32768 /dev/sdb1
```

## Kam dál

Přidejte se k naší uživatelské komunitě na <https://community.ovh.com/en/>.