---
deprecated: true
title: 'Kovalevyn sarjanumeron hakeminen'
slug: kovalevyn-sarjanumeron-hakeminen
excerpt: 'Katso, kuinka kovalevyn sarjanumero haetaan levyn korvaamista varten'
section: 'RAID & levyt'
---

**Päivitetty 1.10.2018**

## Tavoite

Kovalevyn vaihdossa tapahtuvien virheiden minimoimiseksi pyydämme asiakkaitamme toimittamaan vaihdettavan kovalevyn sarjanumeron. Lue kovalevyn vaihtoa käsittelevä [dokumentaatiomme](https://docs.ovh.com/fi/dedicated/disk-replacement/){.external} menettelytavan ymmärtämiseksi, mikäli et ole sitä jo tehnyt.

**Tässä ohjeessa kerrotaan, kuinka voit hakea levyjesi sarjanumerot. Useimmissa tapauksissa voit löytää ne testaamalla kovalevyjäsi yksitellen smartmontools-työkalulla.**


## Edellytykset

- Sinulla on SSH-yhteys pääkäyttäjän tunnuksella \[Linux] tai administraattorin tilillä \[Windows].
- Olet asentanut sas2ircu-apuohjelman Windows-palvelimellesi (saatavilla [broadcom](https://www.broadcom.com/support/download-search/?dk=sas2ircu){.external}-hakukoneen kautta).


## Käytännössä

> [!primary]
>
> NVMe-levyn tapauksessa on tarpeen asettaa palvelin [“Rescue64”](https://docs.ovh.com/fi/dedicated/ovh-rescue/){.external}-tilaan ja käyttää oletuksena asennettua nvme-cli-työkalua.
> 

### Kovalevyn sarjanumeron hakeminen (ohjelmistopohjainen RAID)

Voit hakea sarjanumeron ohjelmistopohjaista RAIDia käyttävälle kovalevylle käyttämällä komentoa `smartctl`:

```sh
smartctl -a /dev/sdX | grep Serial Serial Number:    XXXXXXX
```

Käyttöjärjestelmä on havainnut laitteen (esim. /dev/sda, /dev/sdb, jne.).


### Kovalevyn sarjanumeron hakeminen (NVMe-levy)

NVMe-levyillä on käytettävä komentoa `nvme list`:

```sh
nvme list

Node          SN                  Model                Namespace  Usage                      Format   FW Rev
/dev/nvme0n1  CVPF636600YC450RGN  INTEL SSDPE2MX450G7  1          450.10 GB / 450.10 GB 512  B + 0 B  MDV10253
/dev/nvme1n1  CVPF6333002Y450RGN  INTEL SSDPE2MX450G7  1          450.10 GB / 450.10 GB 512  B + 0 B  MDV10253
```

Voit nyt nähdä eri NVMe-levyjen sarjanumerot (“nvme0” ja “nvme1”).


### Kovalevyn sarjanumeron hakeminen Windowsilla

Windowsiin perustuva ohje on pääosin samanlainen kuin Linuxiin perustuva. Käytämme sas2ircu-apuohjelmaa samoilla komennoilla kuin Linuxilla.

> [!primary]
>
> Komennot on ajettava administraattorin oikeuksilla virheiden välttämiseksi.
> 

Ohjelmistopohjaisen RAID-konfiguraation sarjanumeron hakemiseksi käytä seuraavaa komentoa:

```sh
.\smartctl -a /dev/sdX Serial Number: 1234567890
```

Käyttöjärjestelmä havaitsee laitteen ja näyttää sen seuraavasti: `/dev/sda`, `/dev/sdb`, jne.

![smart_sdb_windows](images/smart_sdb_windows.png){.thumbnail}


### Kovalevyn sarjanumeron hakeminen (laitteistopohjainen RAID)

Lisätietoja näistä komennoista sekä kovalevyjen testaustavasta voit lukea tästä [ohjeesta](https://docs.ovh.com/gb/en/dedicated/raid-hard/){.external} (EN).


#### MegaRaid-ohjain

##### 1\. vaihe: RAID-kokonaisuuksien hakeminen

Voit löytää levyjen sarjanumerot käyttämällä komentoa `smartctl`. Ennen komennon ajamista on kuitenkin saatava selville, kuinka monta RAID-kokonaisuutta (tai virtuaalilevyä) palvelimeltasi löytyy.

Saat tämän tiedon käyttämällä seuraavaa komentoa:

```sh
MegaCli -LDInfo -Lall -aALL | egrep 'Adapter|Size' | grep -v Strip

Adapter 0

Virtual Drive Information: Size : 36.321 GB

Adapter 1

Virtual Drive Information: Size : 2.727 TB
```

Tässä esimerkissä palvelimella on olemassa kaksi konfiguroitua RAID-ohjainta (“Adapter 0” ja “Adapter 1”). Nämä täytyy kartoittaa hakemistoon `/dev/sda` ja `/dev/sdb`.


##### 2\. vaihe: Levytietojen hakeminen

Seuraavaksi on koottava levyn fyysiset tiedot käyttämällä seuraavaa komentoa:

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

##### 3\. vaihe: Sarjanumeron hakeminen

Laitteen ja adaptorin ID-tunnuksilla ilmoitetaan `smartctl`-komennolle, mitä levyä haetaan ja mistä RAID-kokonaisuudesta.

Komennon pitäisi siis näyttää tältä:

```sh
smartctl -d megaraid,N -a /dev/sdX | grep Serial Serial Number: 1234567890
```

RAID-laitteen ID tulee näkyviin seuraavasti: `/dev/sda`= 1\. RAID, `/dev/sdb`= 2\. RAID jne.


> [!primary]
>
> Tietyissä tilanteissa saatat saada tällaisen tuloksen:
> 
> ```
> /dev/sda [megaraid_disk_00] [SAT]: Device open changed type from 'megaraid' to 'sat'.
> ```
> 
> Korvaa silloin kohta `megaraid` kohdalla `sat+megaraid`:
>
> ```
> smartctl -d sat+megaraid,N -a /dev/sdX | grep Serial Serial Number:    1234567890
> ```
>

#### Kovalevyn sarjanumeron hakeminen (LSI RAID -ohjain)

LSI RAID -ohjain käyttää moduulia nimeltä `sg-map`, joka kartoittaa laitteet `/dev/sgX`-hakemistossa, (jossa **X** on laitteen määrittävä numero).

Voit katsoa [tätä ohjetta](https://docs.ovh.com/gb/en/dedicated/raid-hard/){.external} (EN) varmistaaksesi, että kovalevy vastaa tiettyä sg-laitetta.

Kun olet löytänyt analysoitavaan kovalevyyn liitetyn sg-laitteen, käytä seuraavaa komentoa:

```sh
smartctl -a /dev/sgX | grep Serial Serial Number:    1234567890
```

Sg-laitteen numero näkyy seuraavasti: `/dev/sg0`, `/dev/sg1`...


## Lue lisää aiheesta

[Viallisen levyn vaihtaminen](https://docs.ovh.com/fi/dedicated/disk-replacement/){.external}

[Laitteistopohjaisen RAID-ohjaimen konfigurointi](https://docs.ovh.com/gb/en/dedicated/raid-hard/){.external} (EN)

[Ohjelmistopohjaisen RAID-ohjaimen konfigurointi](https://docs.ovh.com/gb/en/dedicated/raid-soft/){.external} (EN)

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.