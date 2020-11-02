---
deprecated: true
title: 'Sériové číslo pevného disku'
slug: seriove-cislo-pevneho-disku
excerpt: 'Zjistěte, jak získat sériové číslo pevného disku'
section: 'RAID a disky'
---

**Poslední aktualizace 12/09/2018**

## Cíl

Za účelem minimalizace rizika vzniku chyby zapříčiněné lidským faktorem žádáme v průběhu výměny pevného disku naše zákazníky o poskytnutí sériového čísla disku, který si přejí vyměnit. Detailní informace týkající se samotného procesu výměny pevného disku naleznete v následující dokumentaci: [Výměna vadného disku](https://docs.ovh.com/cz/cs/dedicated/vymena-disku/){.external}.

**V této příručce se dozvíte, jak získat sériové číslo pevného disku. Ve většině případů lze sériové číslo získat prostřednictvím otestování disků pomocí nástroje smartmontools.**


## Prerekvizity

- Root (Linux) nebo administrátorské (Windows) připojení k serveru prostřednictvím protokolu SSH.
- Nástroj sas2ircu nainstalovaný na serveru s operačním systémem Windows (dostupný prostřednictvím vyhledávače [broadcom](https://www.broadcom.com/support/download-search/?dk=sas2ircu){.external}).


## Postup

> [!primary]
>
> V případě NVMe disků je server zapotřebí restartovat do režimu [Recue64](https://docs.ovh.com/cz/cs/dedicated/ovh-rescue/){.external} a použít implicitně zahrnutý nástroj nvme-cli.
> 

### Získání sériového čísla pevného disku (softwarový RAID)

Za účelem získání sériového čísla pevného disku v soft-RAID konfiguraci použijte následující příkaz:

```sh
smartctl -a /dev/sdX | grep Serial Serial Number:    XXXXXXX
```

Zařízení je detekováno operačním systémem (např.: /dev/sda, /dev/sdb, etc.).


### Získání sériového čísla pevného disku (NVMe)

V případě NVMe disků je zapotřebí použít příkaz `nvme list`:

```sh
nvme list

Node          SN                  Model                Namespace  Usage                      Format   FW Rev
/dev/nvme0n1  CVPF636600YC450RGN  INTEL SSDPE2MX450G7  1          450.10 GB / 450.10 GB 512  B + 0 B  MDV10253
/dev/nvme1n1  CVPF6333002Y450RGN  INTEL SSDPE2MX450G7  1          450.10 GB / 450.10 GB 512  B + 0 B  MDV10253
```

Ve sloupci SN jsou obsažena sériová čísla jednotlivých NVMe disků  („nvme0“ a „nvme1“).


### Získání sériového čísla pevného disku (Windows)

Postup pro získání sériového čísla je v případě operačního systému Windows podobný. V tomto případě použijeme nástroj sas2ircu a stejné příkazy, jako v případě operačního systému Linux.

> [!primary]
>
> Abyste předešli případným chybovým hlášením, spusťte příkazový řádek v režimu „jako správce“.
> 

Do příkazového řádku zadejte následující příkaz:

```sh
.\smartctl -a /dev/sdX Serial Number: 1234567890
```

Zařízení bude detekováno operačním systémem a zobrazeno jako `/dev/sda`, `/dev/sdb`, apod.

![smart_sdb_windows](images/smart_sdb_windows.png){.thumbnail}


### Získání sériového čísla pevného disku (hardwarový RAID)

Detailní rozbor jednotlivých příkazů a procesu testování pevných disků naleznete v následující dokumentaci: [Hardware RAID (ENG)](https://docs.ovh.com/gb/en/dedicated/raid-hard/){.external}.


#### MegaRaid Controller

##### Krok 1: získání informací o RAID sadách

Sériová čísla pevných disků lze získat pomocí příkazu `smartctl`. Před provedením tohoto příkazu je však zapotřebí zjistit, kolik RAID sad (nebo virtuálních disků) se na Vašem serveru nachází.

Tuto informaci získáte zadáním následujícího příkazu:

```sh
MegaCli -LDInfo -Lall -aALL | egrep 'Adapter|Size' | grep -v Strip

Adapter 0

Virtual Drive Information: Size : 36.321 GB

Adapter 1

Virtual Drive Information: Size : 2.727 TB
```

V našem případě na serveru existují dva RAIDy (Adapter 0 a Adapter 1), které by měly být namapovány na `/dev/sda` a `/dev/sdb`. 


##### Krok 2: získání informací o discích

Nyní je zapotřebí získat informace o fyzických discích. Toho dosáhneme pomocí následujícího příkazu:

```sh
 MegaCli -PDList -aAll | egrep 'Slot\ Number|Device\ Id|Inquiry\ Data|Raw|Firmware\ state' | sed 's/Slot/\nSlot/g'

Slot Number: 0
Device Id: 4
Raw Size: 279.460 GB [0x22eec130 Sectors]
Firmware state: Online, Spun Up
Inquiry Data: BTWL3450062J300PGN  INTEL SSDSC2BB300G4                     D2010355

Slot Number: 1
Device Id: 5
Raw Size: 279.460 GB [0x22eec130 Sectors] 
Firmware state: Online, Spun Up 
Inquiry Data: BTWL345003X6300PGN  INTEL SSDSC2BB300G4                     D2010355

Slot Number: 2
Device Id: 7
Raw Size: 2.728 TB [0x15d50a3b0 Sectors] 
Firmware state: Online, Spun Up 
Inquiry Data:       PN2234P8K2PKDYHGST HUS724030ALA640                    MF8OAA70

Slot Number: 3 
Device Id: 6 
Raw Size: 2.728 TB [0x15d50a3b0 Sectors] 
Firmware state: Online, Spun Up 
Inquiry Data:       PN2234P8JYP59YHGST HUS724030ALA640                    MF8OAA70
```

##### Krok 3: získání sériového čísla

ID zařízení a ID adaptéru budou v rámci `smartctl` použita pro rozlišení, které disky ve kterém RAIDu hledat.

Příkaz by měl vypadat takto:

```sh
smartctl -d megaraid,N -a /dev/sdX | grep Serial Serial Number: 1234567890
```

RAID Device ID bude zobrazeno jako: `/dev/sda` = 1\. RAID, `/dev/sdb` = 2\. RAID apod.


> [!primary]
>
> V určitých situacích můžete získat následující výsledek:
> 
> ```
> /dev/sda [megaraid_disk_00] [SAT]: Device open changed type from 'megaraid' to 'sat'
> ```
> 
> V takovém případě je zapotřebí hodnotu `megaraid` nahradit hodnotou `sat+megaraid`:
>
> ```
> smartctl -d sat+megaraid,N -a /dev/sdX | grep Serial Serial Number:    1234567890
> ```
>

#### Získání sériového čísla pevného disku (LSI RAID Controller)

LSI RAID Controller používá modul s názvem `sg-map`, který mapuje zařízení v `/dev/sgX` (**X** je číslo definující příslušné zařízení).

Detailní informace o sg mapování naleznete v následující dokumentaci: [Hardware RAID (ENG)](https://docs.ovh.com/gb/en/dedicated/raid-hard/){.external}.

Jakmile identifikujete sg zařízení příslušející k disku, který si přejete analyzovat, použijte následující příkaz:

```sh
smartctl -a /dev/sgX | grep Serial Serial Number:    1234567890
```

Jednotlivá sg zařízení budou zobrazena jako `/dev/sg0`, `/dev/sg1` apod.


## Kam dál

[Výměna vadného disku](https://docs.ovh.com/cz/cs/dedicated/vymena-disku/){.external}

[Hardware RAID (ENG)](https://docs.ovh.com/gb/en/dedicated/raid-hard/){.external}

[Software RAID (ENG)](https://docs.ovh.com/gb/en/dedicated/raid-soft/){.external}

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.