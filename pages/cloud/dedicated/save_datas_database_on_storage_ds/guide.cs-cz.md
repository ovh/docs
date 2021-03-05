---
deprecated: true
title: 'Zásady ukládání informací a databází na úložném serveru'
slug: ukladani-informace-databaze-storage-servery
excerpt: 'Zabezpečte svá data v pěti krocích'
section: Tutoriál
---

## Úvod

Ochrana dat představuje jedno z nejdůležitějších témat na v oblasti provozování IT infrastruktur: jakákoli ztráta či narušení integrity dat může mít zdrcující dopad na Vaše podnikání. Nulové riziko ztráty dat neexistuje, existují však efektivní způsoby, jak toto riziko minimalizovat. Jedním z nich může být ukládání pravidelných záloh na serveru či úložném řešení, které je fyzicky nezávislé na Vašich produkčních infrastrukturách.

Společnost OVH nabízí řadu dedikovaných serverů s názvem [Storage](https://www.ovh.cz/dedikovane_servery/storage/){.external}, která byla navržena speciálně pro tyto účely. Tyto dedikované zdroje lze využít pro zálohování infrastruktury hostované jak u OVH, tak u ostatních poskytovatelů (prostřednictvím veřejné sítě).

V rámci této příručky se dozvíte, jak správně nakonfigurovat úložný server OVH z řady Storage tak, aby co nejlépe odpovídal Vašim individuálním požadavkům na zabezpečení Vašich citlivých dat.


## Prerekvizity

### Co musíte znát

- Administrace operačního systému Linux.
- Připojení prostřednictvím zabezpečeného protokolu SSH. 
- Připojení k databázi. 
- Zálohování databáze.
- Instalace systémové distribuce (příklady v této příručce vycházejí z Debian 9.4).

### Co musíte mít k dispozici

- [Dedikovaný server OVH z řady Storage](https://www.ovh.cz/dedikovane_servery/storage/){.external}.
- Produkční infrastruktura ([VPS](https://www.ovh.cz/vps/){.external}, [dedikované servery](https://www.ovh.cz/dedikovane_servery/){.external}, [Public Cloud](https://www.ovh.cz/public-cloud/instances/){.external}...).
- SSH připojení nakonfigurované mezi úložným serverem a produkční infrastrukturou.
- Doporučeno: privátní síť [OVH vRack](https://www.ovh.cz/reseni/vrack/){.external} nakonfigurovaná mezi jednotlivými servery.



## Postup

### Fáze 1: jak zvolit ten správný RAID

Všechny dedikované servery OVH z řady [Storage](https://www.ovh.cz/dedikovane_servery/storage/){.external} disponují pevnými disky v režimu RAID (redundantní pole nezávislých disků, z anglického _Redundant Array of Independent Disks_). Příklady v této příručce vycházejí z konfigurace software RAID (někdy také _soft RAID_) o čtyřech discích, každý s kapacitou 6 TB.

Společnost OVH nabízí úložné konfigurace s možností volby mezi RAID 0, 1, 5, 6 a 10. Každý z těchto režimů má své specifické výhody a nevýhody co se výkonu a odolnosti týče. V případě konfigurace o čtyřech discích můžeme volit mezi režimy RAID 5, 6 a 10 (RAID 0 a 1 v tomto případě nelze aplikovat).

Podívejme se nyní na specifika jednotlivých typů režimu RAID.

#### RAID 5

V rámci tohoto režimu jsou Vaše data redistribuována napříč třemi pevnými disky (3 disky v tomto případě představují minimum). Čtvrtý disk je zde využíván pro rekonstrukci ostatních disků pro případ selhání některého z nich. V důsledku toho daný režim nabízí toleranci proti chybám na disku. Dochází ke zlepšení výkonu v případě čtení, nikoli však v případě zápisu.

V našem případě je celková úložná kapacita 18 TB.

#### RAID 6

Jedná se o vylepšenou verzi RAID 5, vyžadující zapojení minimálně čtyř pevných disků. Paritní informace jsou zapisovány na dva pevné disky, díky čemuž se zvyšuje redundance neboli tolerance proti chybám na disku. Dochází ke zlepšení výkonu čtení i zápisu.

V našem případě je celková úložná kapacita 12 TB.

#### RAID 10

Tento režim představuje kombinaci dvou procesů. První z nich spočívá v „naboostování“ Vašich dat a jejich rozložení na dva disky, v důsledku čehož dochází k navýšení výkonu, neboť data mohou být vyžadována zároveň. V rámci druhého dochází k duplikaci Vašich dat na dva disky v „zrcadlovém“ režimu. V důsledku toho získáváte toleranci proti chybám na dvou discích v jednom clusteru.

V našem případě je celková úložná kapacita 12 TB.

Obecně nelze říci, že by některý RAID by lepší než jiný, neboť každý z nich se hodí pro odlišné účely. V našem případě nám jde o dosažení maximální tolerance proti chybám na disku při zachování vysokého výkonu čtení i zápisu. Z toho důvodu zvolíme konfiguraci s RAID 6.


### Fáze 2: instalace a konfigurace serveru

Přejděte do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} a nainstalujte svůj server. Jak bylo zmíněno již v úvodní části této příručky, pro naše účely zvolíme Debian 9.4. Detailní informace týkající se instalace systémové distribuce naleznete v následující dokumentaci: [Začínáme s dedikovaným serverem](https://docs.ovh.com/cz/cs/dedicated/zaciname-s-dedikovanym-serverem/){.external}.

Po výběru systémové distribuce zaškrtněte políčko `Upravení nastavení diskových oddílů`{.action}.

![Upravení nastavení diskových oddílů](images/partition_customization.png){.thumbnail}

Díky tomu budete moci v dalším kroku upravit RAID přípojného adresáře `/home` (1) a - pokud si budete přát - rozšířit diskový oddíl (2).

![Úprava /home](images/partition_customization_menu.png){.thumbnail}

> [!primary]
> 
> RAID přípojného bodu `/boot` nelze modifikovat.
> 

### Fáze 3: vytvoření cílových adresářů

Pro přehledné ukládání záloh je zapotřebí vytvořit cílové adresáře. Připojte se ke svému dedikovanému serveru prostřednictvím protokolu SSH a zobrazte si své oddíly:

```sh
df -h

Filesystem      Size    Used Avail Use% Mounted on
udev            7,8G       0  7,8G   0% /dev
tmpfs           1,6G     51M  1,6G   4% /run
/dev/md3         20G    740M   18G   4% /
tmpfs           7,9G       0  7,9G   0% /dev/shm
tmpfs           5,0M       0  5,0M   0% /run/lock
tmpfs           7,9G       0  7,9G   0% /sys/fs/cgroup
/dev/md2        487M     32M  426M   7% /boot
/dev/sda1       510M    152K  510M   1% /boot/efi
/dev/md4         11T     31M   11T   1% /home
```

Pomocí příkazu `mkdir` vytvořte stromový adresář. V našem příkladu budou na server ukládány zálohy ze dvou webových serverů. Vytvoříme proto dvě složky: *server1* a *server2*. Každá z těchto složek bude obsahovat podsložku *dump* pro SQL zálohy a podsložku *data* pro webová data.

Pro vizualizaci adresáře zadejte příkaz `tree`: 

```sh
tree
.
└── backups
    ├── server1
    │   ├── datas
    │   └── dump
    └── server2
        ├── datas
        └── dump

7 directories, 0 files
```

### Fáze 4: přenos dat ze vzdálených serverů na úložné servery

Váš úložný server je nyní připraven na příjem datových záloh.

> [!primary]
> 
> Pokud svou produkční infrastrukturu hostujete u společnosti OVH a disponujete naším řešením vRack, neváhejte svůj úložný server připojit ke své privátní síti. Předejte tak odesílání svých záloh prostřednictvím veřejné sítě.
>

Smyslem této fáze je navázat SSH připojení s Vašimi produkčními servery, které se následně spojí s Vaším úložným serverem prostřednictvím protokolu SCP.  Z toho důvodu musí být veškeré zdroje schopny komunikovat prostřednictvím SSH.

Nyní provedeme zálohu MySQL databáze (*dump*). Pro pokročilé použití a funkce se obraťte na oficiální dokumentaci příslušné databáze.

```sh
mysql --host=localhost --user=myname --password=password mydb
mysqldump --all-databases > dump.sql
```

Připojte se ke svým produkčním serverům pomocí SSH a zadejte následující příkaz: `scp`.

```sh
scp Váš_adresář_dump user@IP_Storage:/home/backups/server1/dump

The authenticity of host 'IP_Storage (IP_Storage)' can't be established.
ECDSA key fingerprint is SHA256:fmmeu5feHlnaUC56+2DB73sgNd4aMPVkS7oEtcyO2o8.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'IP_Storage' (ECDSA) to the list of known hosts.

user@IP_Storage‘s password: 
```

> [!primary]
> 
> Pokud jste upravili SSH port svého úložného serveru, je zapotřebí přidat argument `-P`.
>

Stejný postup opakujte i pro webová data. Příkaz `scp` rovněž umožňuje provádět zálohu celých složek.

```sh
scp -r složka_pro_zálohování user@IP_Storage:/home/backups/server1/datas/2018_01_01
```

Další způsoby, jako například *rsync*, jsou dostupné zdarma a nabízejí široké spektrum pokročilých funkcí.


### Fáze 5: naplánování pravidelných úloh pomocí nástroje Cron

Připojovat se ke každému serveru manuálně a každý den velmi rychle omrzí. Z toho důvodu existují nejrůznější nástroje pro automatizaci úloh. Nejznámějším reprezentantem je zcela jistě unixový nástroj *Cron*. Tento nástroj umožňuje vytvoření pravidel pro automatické a pravidelné spouštění příkazů na Vašem serveru (ať již denně, měsíčně či ročně). Každý unixový uživatel má k dispozici svůj vlastní seznam naplánovaných úloh neboli *crontab*.

Z bezpečnostních důvodů je doporučováno vytvořit speciální unixový uživatelský účet a práva pro plánování úloh přidělit pouze jemu.

Seznam lze upravit pomocí následujícího příkazu:

```sh
crontab -e
```

Pro automatizaci ukládání databázové zálohy SQL každý den v roce ve 2 hodiny ráno zkopírujte následující řádek:

```sh
0 2 * * * scp Váš_adresář_dump user@IP_Storage:/home/backups/server1/dump >/dev/null 2>&1
```

Crontab má svou vlastní syntaxi, kterou zde nebudeme rozebírat. Existuje však mnoho webových stránek, které nabízejí nástroje pro snadné vygenerování crontab příkazů.



## Závěr

V této příručce jste se seznámili s postupem pro konfiguraci dedikovaného serveru za účelem ukládání datových záloh produkčního prostředí. Zálohování dat představuje stěžejní bod strategie zabezpečení dat.

Jak bylo vysvětleno výše, existují i další metody (ať již placené či bezplatné) pro pokročilou optimalizaci Vašich záloh. Pokud jsou Vaše data citlivého charakteru, doporučujeme přenos záloh mezi produkčními a úložnými servery šifrovat. Tato komunikace by rovněž měla být realizována v rámci privátní, nikoli veřejné sítě. Detailní informace o privátní síti OVH (vRack) naleznete [zde](https://www.ovh.cz/reseni/vrack/){.external}.