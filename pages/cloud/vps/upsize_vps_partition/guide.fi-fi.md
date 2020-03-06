---
title: VPS:n uudelleen osiointi tuotetason korotuksen jälkeen
slug: uudelleen-osiointi-vps-tuotetason-korotuksen-jalkeen
section: Aluksi
---

**Päivitetty 14.11.2017**

## Tavoite

VPS:n tuotetason korotuksen jälkeen on mahdollista, että datasäilön osiointi on tehtävä uudelleen. Tässä seurattavat vaiheet:

> [!warning]
>
> Uudelleen osiointi saattaa vahingoittaa pysyvästi tietojasi. OVH ei ole vastuussa tietojen vahingoittumisesta tai menetyksestä. Ennen kuin teet mitään, muista varmuuskopioida tiedostosi.
>

## Edellytykset

- SSH-yhteys VPS-palvelimeen (pääkäyttöoikeus)
- Palvelin on uudelleenkäynnistetty [Rescue-tilassa](https://docs.ovh.com/fi/vps/rescue/){.external}.

## Käytännössä

Tuotetason muuttuessa RAM ja suoritin (CPU) mukautetaan automaattisesti. Datasäilöä ei sen sijaan mukauteta systemaattisesti.

**Tässä ohjeessa käydään läpi vaiheet tallennustilan kasvattamiseen.**

### Varmuuskopioi tiedostosi

Koska osion laajennusyritys saattaa johtaa tietojen menetykseen, on **erittäin suositeltavaa** tehdä varmuuskopio VPS:äsi osioista.  

### Pura osio

Kun olet kirjautunut VPS-palvelimeesi [Rescue-tilassa](https://docs.ovh.com/fi/vps/rescue/){.external}, osiosi alustetaan automaattisesti. Jotta osion kokoa voidaan muuttaa, se täytyy ensin purkaa. Jos tiedät osiosi nimen, voit hypätä tämän kohdan yli. Jos et tiedä sitä, käytä seuraavaa komentoa:

```sh
# lsblk
```

Rescue-tilaa vastaava osio on se, joka alustetaan /-hakemistoon, joka on todellisuudessa järjestelmän juuri. VPS:n osio löytyy puolestaan todennäköisesti /mnt:hen liittyvästä hakemistosta, tai ei lainkaan alustettuna.

```sh
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda 254:0 0 10G 0 disk
└─sda1 254:1 0 10G 0 part /
sdb 254:16 0 25G 0 disk
└─sdb1 254:17 0 25G 0 part /mnt/sdb1
```

Käytä osion purkamiseen seuraavaa komentoa:

```sh
umount /dev/sdb1
```

### Tarkista filesystem

Kun osio on purettu, on tarpeen tarkistaa tiedostojärjestelmä (`filesystem check`) mahdollisten osiossa olevien virheiden varalta. Komento siihen on seuraava:

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
> Jos havaitset virheen tyyppiä `bad magic number in superblock`, älä jatka eteenpäin. Menettely tämän ongelman ratkaisuun kerrotaan ohjeen lopussa.

### Avaa fdisk-sovellus

Jos tiedostojärjestelmän tarkistus ei pääty oikein, avaa `fdisk`-sovellus.  Tässä sinun on annettava asetuksena levyn eikä osion nimi.   Jos osiosi on esimerkiksi `sdb1` eikä `vdb1`, on levyn nimi tällöin  /dev/sdb.

```sh
 /dev/sdb.
```

> [!primary]
>
> Tämä sovellus on varustettuna useilla alakomennoilla, jotka voit listata komennolla `m`.
>

### Poista vanha osio

Ennen vanhan osion poistamista on suositeltua ottaa muistiin numero, joka vastaa osion ensimmäistä sektoria. Saat tämän tiedon komennolla `p`{.action}. Se näkyy kentän `Start` alapuolella. Säilytä tämä tieto myöhempää käyttöä varten.

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
> Tämä on piste, jonka jälkeen ei ole paluuta, jos et ole varmuuskopioinut tietojasi. 
>

Poista seuraavaksi osio komennolla `d`{.action}.

```sh
Command (m for help): d

Selected partition 1
```

Ainut osio poistetaan automaattisesti.

### Luo uusi osio

Nyt on luotava uusi osio komennolla `n`{.action}. On suositeltavaa käyttää oletusasetuksia.

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

Varmista, että `First sector` -rivillä oleva oletusarvo on sama kuin aiemmin muistiin kirjaamasi. Jos ne poikkeavat toisistaan, käytä säilyttämääsi arvoa. 

### Tee osiosta käynnistettävä (bootable)

Nyt on varmistettava, että osio on käynnistettävissä (bootable). Voit tehdä sen komennolla `a`{.action}.

```sh
Command (m for help): a
 
Partition number (1-4): 1
```

Tallenna muutoksesi ja sulje sovellus komennolla `w`{.action}:

```sh
Command (m for help): w
 
The partition table has been altered!
 
Calling ioctl() to re-read partition table.
Syncing disks.
```

### Sammuta filesystem osiossa

Vaikka osio on sammutettu, sen tiedostojärjestelmä (filesystem) vie yhä saman tilan kuin ennenkin. Käytä sen sammuttamiseksi seuraavaa komentoa:

```sh
resize2fs /dev/sdb1
 
resize2fs 1.42.9 (4-Feb-2014)
Resizing the filesystem on /dev/sdb1 to 5242624 (4k) blocks.
The filesystem on /dev/sdb1 is now 5242624 blocks long.
```

### Tarkista tulokset

Komennon toimimisen tarkistamiseksi voit alustaa juuri luodun osion ja katsoa sen koon.

```sh
mount /dev/sdb1 /mnt
```

```sh
# df -h
 
Size  Used Avail Use% Mounted on
/dev/sda1 991M 793M 132M 86% /
none 4.0K 0 4.0K 0% /sys/fs/cgroup
udev 1.9G 12K 1.9G 1% /dev
tmpfs 386M 360K 386M 1% /run
tmpfs           5.0M     0  0.0M   5% /run/lock
none 1.9G 0 1.9G 0% /run/shm
none 100M 0 100M 0% /run/user
/dev/sdb1 50G 842M 48G 2% /mnt
```

Löydät osion uuden koon kohdan `size` alapuolelta.

### Kuinka *bad magic number in superblock* -virheet korjataan?

Jos komento `e2fsck`{.action} palauttaa virheviestin `bad magic number in superblock`, tarkista ja korjaa filesystem superblock-varmuuskopiolla. Nähdäksesi saatavilla olevat suberblock-varmuuskopiot syötä seuraava komento:

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

Käytä seuraavaksi ensimmäistä superblock-varmuuskopiota filesystem-järjestelmän tarkistamiseen ja korjaamiseen:

```sh
fsck -b 32768 /dev/sdb1
```

## Lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa <https://ovh-hosting.fi/community/foorumi>.
