---
deprecated: true
title: 'Výměna vadného disku'
slug: vymena-disku
excerpt: 'Zjistěte, jak identifikovat vadný disk a jak požádat o jeho výměnu'
section: 'RAID a disky'
---

**Poslední aktualizace 25/06/2018**

## Cíl

Pokud a svém disku zaznamenáte defekt nebo pokud obdržíte e-mailové upozornění na vadu, je zapotřebí přijmout potřebná opatření pro výměnu vadného disku v co možná nejkratším čase.

**Zjistěte, jak identifikovat vadný disk a jak požádat o jeho výměnu.**

> [!warning]
>
> Společnost OVH Vám dává k dispozici stroje, za jejichž správu nesete plnou odpovědnost. Společnost OVH není administrátorským subjektem těchto strojů a nedisponuje žádnými přístupovými právy. Z toho důvodu spočívá zajištění každodenní správy softwaru a zabezpečení stroje pouze na Vás.
> 
> Tato příručka slouží jako úvod do nejčastějších úkonů spojených se správou a zabezpečením Vašeho serveru. Pokud narazíte na jakékoli potíže či pochybnosti ohledně správy, použití nebo zabezpečení svého serveru, obraťte se prosím na profesionálního serverového administrátora. Další informace naleznete v poslední sekci této příručky.
> 


## Prerekvizity

- SSH připojení k [dedikovanému serveru OVH](https://www.ovh.cz/dedikovane_servery/){.external} s *root* přístupem (Linux)


## Postup

### Vytvoření datové zálohy

Ze všeho nejdříve je zapotřebí provést zálohu dat.  Účelem vícenásobného diskového pole nezávislých disků (RAID) je zajistit ochranu Vašich dat v případě selhání jednoho z disků. V případě poruchy disku závisí všechna Vaše data na správné funkčnosti zbývajícího disku (či disků).

Ačkoli je vysoce nepravděpodobné, že by došlo k poruše dvou disků zároveň, není to nemožné.
Výměna disku nemůže být provedena bez:

-	Potvrzení o provedení zálohy dat.
-	Potvrzení o srozumění s rizikem potenciální ztráty dat vyplývající z výměny disku.


### Identifikace vadného disku

Pokud obdržíte e-mailové upozornění nebo pokud si sami všimnete podezřelého chování disku, je zapotřebí provést kontrolu správné funkčnosti všech disků. V případě podezření na defekt dvou disků v RAIDu bude přednostně vyměněn disk s větším počtem chyb.

#### Software RAID servery

Postup pro identifikaci disků instalovaných na Vašem serveru v softwarovém RAIDu naleznete v následující příručce: [Konfigurace softwarového RAIDu](https://docs.ovh.com/gb/en/dedicated/raid-soft/){.external} (ENG).

Jakmile naleznete přístupovou cestu ke svým diskům, můžete je otestovat použitím příkazu `smartctl`:

```sh
smartctl -a /dev/sdX
```

> [!primary]
>
> Nezapomeňte za `/dev/sdX` dosadit přístupovou cestu ke svému disku. Proměnnou `sdX` nahraďte názvem disku (sdA, sdB apod.).
> 

Provedením tohoto příkazu zároveň získáte *sériová čísla* disků, které je nutné vyměnit. Tato čísla je zapotřebí odeslat našim technikům.

Následuje příklad výstupu po zadání příkazu `smartctl -a /dev/sdX`:

```sh
smartctl -a /dev/sda

>>> smartctl 5.41 2011-06-09 r3365 [x86_64-linux-3.14.32-xxxx-grs-ipv6-64] (local build)                                                                                          
>>> Copyright (C) 2002-11 by Bruce Allen, http://smartmontools.sourceforge.net

>>> === START OF INFORMATION SECTION ===
>>> Device Model:     TOSHIBA DT01ACA050
>>> Serial Number:    5329T58NS
>>> LU WWN Device Id: 5 000039 ff6d28993
>>> Firmware Version: MS1OA750
>>> User Capacity:    500 107 862 016 bytes [500 GB]
>>> Sector Sizes:     512 bytes logical, 4096 bytes physical
>>> Device is:        Not in smartctl database [for details use: -P showall]
>>> ATA Version is:   8
>>> ATA Standard is:  ATA-8-ACS revision 4
>>> Local Time is:    Thu Nov 24 15:51:25 2016 CET
>>> SMART support is: Available - device has SMART capability.
>>> SMART support is: Enabled
```

Důležitým údajem v našem případě je sériové číslo:

**`Serial Number:    5329T58N`**

#### Hardware RAID servery

Pokud používáte server s hardwarovým RAIDem, obraťte se na následující příručku: [Hardwarový RAID](https://docs.ovh.com/gb/en/dedicated/raid-hard/){.external} (ENG). Pro nalezení přístupové cesty ke svým diskům postupujte podle instrukcí vážících se k Vámi využívanému typu RAID ovladače.

Jakmile naleznete přístupovou cestu ke svým diskům, můžete je otestovat použitím příkazu `smartctl`:

```sh
smartctl -d megaraid,N -a /dev/sdX
```

> [!primary]
>
> Nezapomeňte za `/dev/sdX` dosadit přístupovou cestu ke svému disku. Proměnnou `sdX` nahraďte názvem disku (sdA, sdB apod.).
> 


> [!warning]
>
> V některých případech může dojít k vrácení následujícího výstupu: `/dev/sda [megaraid_disk_00][SAT]: Device open changed type from 'megaraid' to 'sat'`.
> 
> V takovém případě je nutné nahradit `megaraid` za `sat+megaraid`, a to následujícím způsobem: `smartctl -d sat+megaraid,N -a /dev/sdX`.
> 

V případě LSI RAID karet můžete své disky otestovat zadáním příkazu `smartctl`:

```sh
smartctl -a /dev/sgY
```

V tomto případě je nutné specifikovat číslo RAIDu: `/dev/sg0 = 1er RAID, /dev/sg1 = 2e RAID`, apod.


#### Servery s NVMe disky

V případě NVMe disků je server zapotřebí restartovat do režimu [Recue-pro](https://docs.ovh.com/gb/en/dedicated/rescue_mode/){.external} (ENG), v němž je implicitně zahrnut nástroj **nvme-cli**.

Pro získání sériových čísel disků poté použijte příkaz `nvme list`:

```sh
root@rescue:~# nvme list
>>> Node           SN                  Model                 Namespace Usage                     Format        FW Rev
>>> -------------- ------------------- --------------------- --------- ------------------------- ------------- --------
>>> /dev/nvme0n1   CVPF636600YC450RGN  INTEL SSDPE2MX450G7   1         450.10  GB / 450.10  GB   512  B +  0 B MDV10253
>>> /dev/nvme1n1   CVPF6333002Y450RGN  INTEL SSDPE2MX450G7   1         450.10  GB / 450.10  GB   512  B +  0 B MDV10253
```


### Žádost o výměnu disku

#### Výměna disku s přerušením dostupnosti služby (Cold-Swap):

Pokud si přejete zažádat o výměnu disku, jednoduše vytvořte support ticket prostřednictvím [Zákaznického prostoru OVH](https://www.ovh.com/manager/dedicated/index.html#/ticket){.external}. Pokud do žádosti zahrnete veškeré relevantní údaje, můžete tím celý proces značně urychlit. Níže naleznete seznam požadovaných informací:

- **Sériové číslo vadného disku a sériová čísla všech ostatních disků, které fungují normálně.** Za účelem získání sériového čísla vadného disku postupujte podle instrukcí v následující příručce: [Identifikace sériového čísla pevného disku](https://docs.ovh.com/gb/en/dedicated/find-disk-serial-number/){.external} (ENG). Pokud se Vám sériové číslo vadného disku nepodaří získat, zahrňte tuto informaci společně se sériovými čísly všech ostatních disků do ticketu. 

Jak bylo řečeno již výše, informace o sériových číslech všech disků jsou velice důležité. Tato čísla jsou odesílána technikům v našich datacentrech, což zajistí vyhnutí se případným chybám v průběhu výměny Vašeho disku.

- **Čas a datum intervence.** V průběhu výměny disku dojde k chvilkové nedostupnosti Vaší služby. Intervenci je však možné naplánovat kdykoli, 24/7.

- Potvrzení o provedení zálohy Vašich dat, včetně srozumění o potenciálním riziku ztráty dat.


#### Výměna disku bez přerušení dostupnosti služby (Hot-Swap):

> [!primary]
>
> Tento typ výměny disku je dostupný pouze pro servery [FS-MAX](https://www.ovh.cz/dedikovane_servery/storage/1801fs05.xml){.external} a [Big-HG](https://www.ovh.cz/dedikovane_servery/hg/1801bhg01.xml){.external}, disponující RAID kartou.
> 

Pokud se chystáte provést výměnu disku bez přerušení dostupnosti služby na serveru s megaRAID kartou, aktivujte prosím po naplánování intervence u příslušného disku blikající LED diodu. Tento krok značně zjednoduší práci našim týmům v datacentru.

Pokud Váš server používá megaRAID kartu, použijte prosím následující příkazy:

- Rozsvícení LED diody:

```sh
MegaCli -PdLocate -start -physdrv[E0:S0] -a0
```

- Deaktivace LED diody:

```sh
MegaCli -PdLocate -stop -physdrv[E0:S0] -a0
```

> [!primary]
>
> Ekvivalentní postup prostřednictvím příkazu `storcli`:
>
> - Rozsvícení LED diody:
>
> ```sh
> storcli /c0/e0/s0 start locate
> ```
>
> - Deaktivace LED diody:
>
> ```sh
> storcli /c0/e0/s0 stop locate
> ```
>


> [!primary]
>
> I přesto, že je na serveru aktivována blikající LED dioda, je do support ticketu stále zapotřebí zahrnout informace o sériovém čísle a *slotu* serveru.
> 

### Dokončení procesu výměny disku

Pokud používáte hardwarový RAID, Váš RAID se nastaví automaticky. Funkce *auto-rebuild* je aktivována ve výchozím nastavení. Pro správnou funkčnost se prosím ujistěte, že jste ji nedeaktivovali. Resynchronizační proces může trvat několik minut a v jeho průběhu může dojít ke snížení výkonu Vašeho RAIDu.

Pokud používáte softwarový RAID, doporučujeme resynchronizaci provést manuálně. Detailní postup naleznete v následující příručce: [Konfigurace softwarového RAIDu](https://docs.ovh.com/gb/en/dedicated/raid-soft/){.external} (ENG).


## Kam dál

[Konfigurace softwarového RAIDu](https://docs.ovh.com/gb/en/dedicated/raid-soft/){.external} (ENG)

[Hardwarový RAID](https://docs.ovh.com/gb/en/dedicated/raid-hard/){.external} (ENG)

[Režim rescue](https://docs.ovh.com/gb/en/dedicated/rescue_mode/){.external} (ENG)


Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.