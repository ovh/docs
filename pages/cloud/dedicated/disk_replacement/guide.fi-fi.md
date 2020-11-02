---
deprecated: true
title: 'Viallisen levyn vaihtaminen'
slug: disk-replacement
excerpt: 'Opi tunnistamaan viallinen levy ja pyytämään sen vaihtamista'
section: 'RAID & levyt'
---

**Päivitetty 23.8.2018**

## Tavoite

Jos havaitset levyvian tai järjestelmämme on lähettänyt sähköpostitse ilmoituksen viallisesta levystä, sinun on tehtävä tarvittavat toimenpiteet sen korvaamiseksi uudella mahdollisimman pian.

**Tässä ohjeessa kerrotaan, kuinka tunnistat viallisen levyn ja kuinka voit pyytää tiimiltämme sen vaihtamista.**

> [!warning]
>
> OVH tarjoaa käyttöösi palveluja, jotka ovat sinun vastuullasi. Koska meillä ei ole minkäänlaisia käyttöoikeuksia koneisiin, emme ole niiden administraattoreja emmekä voi avustaa niiden käytössä. Siksi sinun tehtävänäsi on varmistaa ohjelmistojen hallinta sekä suojaus päivittäin.
> 
> Tämän ohjeen tarkoituksena on auttaa sinua yleisimmissä tehtävissä. Suosittelemme kuitenkin ottamaan yhteyttä erikoistuneeseen palveluntarjoajaan, mikäli sinulla on vaikeuksia tai epäselvyyksiä palvelimen hallintaan, käyttöön tai suojaamiseen liittyen. Lisätietoa tämän ohjeen kohdasta “Lisää aiheesta”.
> 


## Edellytykset

- Olet kirjautunut SSH-yhteydellä [dedikoituun palvelimeesi](https://www.ovh-hosting.fi/dedikoidut_palvelimet/){.external} *pääkäyttäjänä* (Linux).


## Käytännössä

### Varmuuskopioi tiedostosi

Ennen kuin teet mitään, **tietosi tarvitsee varmuuskopioida**. RAIDin (lukuunottamatta RAID 0) ainoana tarkoituksena on suojata tietojasi levyvioilta. Kun levy on käyttökelvoton, kaikki tietosi ovat riippuvaisia jäljellä olevan levyn tai levyjen kunnosta.

Vaikka kahden levyn vioittuminen samaan aikaan on harvinaista, ei se ole kuitenkaan mahdotonta.
Levyn vaihtoa ei tehdä ilman:

- antamaasi vahvistusta tietojesi varmuuskopioinnista,
- vahvistustasi siitä, että olet täysin tietoinen levyn vaihtamisesta mahdollisesti aiheutuvasta tietojen menetyksestä.


### Viallisen levyn havaitseminen

Jos saat sähköpostitse varoituksen tai huomaat mitään vioittumiseen viittaavaa, on välttämätöntä tarkistaa levyjesi tila. Jos kaksi saman RAIDin levyä on vioittunut, vaihdamme ensisijaisesti enemmän virheitä sisältävän levyn.

#### Palvelin, jolla on ohjelmistopohjainen RAID

Jos sinulla on palvelin, jolla on ohjelmistopohjainen RAID, katso ohjetta [Ohjelmistopohjainen RAID (EN)](https://docs.ovh.com/gb/en/dedicated/raid-soft/){.external} palvelimellesi asennettujen levyjen löytämiseksi.

Kun olet löytänyt polun levyillesi, voit testata sitä käyttämällä komentoa `smartctl` seuraavalla tavalla:

```sh
smartctl -a /dev/sdX
```

> [!primary]
>
> Muista korvata `/dev/sdX` levysi polulla, jossa sdX on kyseinen levy esim. sdA, sdB jne.
> 

Näin voit myös saada korvattavan levyn tai levyjen sarjanumeron (*Serial Number*), jonka voit välittää teknikolle.

Tässä esimerkki palautuneesta vastauksesta:

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

Meidän tapauksessamme tärkeä rivi on seuraava:

**`Serial Number:    5329T58N`**

#### Palvelin, jolla on laitteistopohjainen RAID

Jos sinulla on palvelin, jolla on laitteistopohjainen RAID, voit katsoa ohjetta [“Laitteistopohjainen RAID” (EN)](https://docs.ovh.com/gb/en/dedicated/raid-hard/){.external} ja käyttää RAID-ohjaimesi tyyppiä koskevaa menetelmää löytääksesi levyjesi polut.

Kun olet löytänyt polun levyillesi, voit testata sitä käyttämällä komentoa `smartctl` seuraavalla tavalla:

```sh
smartctl -d megaraid,N -a /dev/sdX
```

> [!primary]
>
> Muista korvata /dev/sdX levysi polulla, jossa sdX on kyseinen levy esim. sdA, sdB jne.
> 

> [!warning]
>
> Tietyissä tapauksissa voit saada seuraavan viestin: `/dev/sda [megaraid_disk_00][SAT]: Device open changed type from 'megaraid' to 'sat'`.
> 
> Tällöin on vaihdettava `megaraid`-kohdan tilalle `sat+megaraid` seuraavasti: `smartctl -d sat+megaraid,N -a /dev/sdX`.
> 

Raid LSI -korttia varten voit testata levyjä käyttämällä komentoa `smartctl` seuraavasti:

```sh
smartctl -a /dev/sgY
```

Tarkenna RAIDin numero (/dev/sg0 = ensimmäinen RAID, /dev/sg1 = toinen RAID, jne.)


#### Palvelin NVMe-levyllä

NVMe-levyn tapauksessa on tarpeen asettaa palvelin [“Rescue-pro”](https://docs.ovh.com/gb/en/dedicated/rescue_mode/){.external} -tilaan, johon **nvme-cli** on asennettu oletuksena.

Levyjesi sarjanumeroiden hakemiseksi on siis käytettävä komentoa `nvme list`:

```sh
root@rescue:~# nvme list
>>> Node           SN                  Model                 Namespace Usage                     Format        FW Rev
>>> -------------- ------------------- --------------------- --------- ------------------------- ------------- --------
>>> /dev/nvme0n1   CVPF636600YC450RGN  INTEL SSDPE2MX450G7   1         450.10  GB / 450.10  GB   512  B +  0 B MDV10253
>>> /dev/nvme1n1   CVPF6333002Y450RGN  INTEL SSDPE2MX450G7   1         450.10  GB / 450.10  GB   512  B +  0 B MDV10253
```


### Pyydä levyn vaihtamista

#### Levyn vaihto off-line-tilassa (edellyttää palvelimen käyttökatkoa)

Levyn vaihtamisen pyytämiseksi tee tiketti [OVH:n hallintapaneelissa](https://www.ovh.com/manager/dedicated/index.html#/ticket){.external}. Prosessin nopeuttamiseksi voit antaa testaukseen liittyvät elementit, joita ovat:

- **Vaihdettavan levyn sarjanumero sekä kaikkien muiden kunnossa olevien levyjen numerot**. Sarjanumeron löytämiseksi voit katsoa apua [tästä ohjeesta (EN)](https://docs.ovh.com/gb/en/dedicated/find-disk-serial-number/){.external}. Jos levyn sarjanumeron hakeminen ei jostain syystä ole mahdollista, ilmoita siitä tiketissä ja anna säilytettävien levyjen sarjanumerot. 

Kuten aiemmin tarkennettiin, kaikkien levyjen sarjanumerot ovat tärkeitä. Ne välitetään teknikolle konesaliin ja niiden ansiosta voidaan välttää virhe toimenpiteen aikana.

- **Toimenpiteen päivä ja aloitusaika**. Lyhyeen palvelukatkokseen on varauduttava, mutta toimenpide voidaan tehdä milloin vain ympäri vuorokauden viikon jokaisena päivänä.

- **Vahvistus, että tietosi on varmuuskopioitu tai hyväksyntä mahdolliselle tietojen menetykselle.**


#### Levyn vaihto koneen käydessä (ilman palvelimen käyttökatkoa)

> [!primary]
>
> Tämän tyyppinen vaihtaminen on mahdollista ainoastaan [FS-MAX-palvelimille](https://www.ovh-hosting.fi/dedikoidut_palvelimet/storage/1801fs05.xml){.external} sekä [Big-HG-palvelimille](https://www.ovh-hosting.fi/dedikoidut_palvelimet/hg/1801bhg01.xml){.external}, joilla on RAID-kortti.
> 

Jos levynvaihto tehdään MegaRAID-kortilla varustetulla palvelimella koneen käydessä, pyydetään sinua vilkuttamaan vaihdettavan levyn LED-valoa, kun toimenpide on tilattu. Tämä helpottaa tiimin työskentelyä.

Jos palvelimellasi on MegaRAID-kortti, käytä seuraavia komentoja:

- LED-valon vilkkumisen käynnistämiseksi

```sh
MegaCli -PdLocate -start -physdrv[E0:S0] -a0
```

- LED-valon vilkkumisen pysäyttämiseksi

```sh
MegaCli -PdLocate -stop -physdrv[E0:S0] -a0
```

> [!primary]
>
> Sama `storcli`-komennon kautta:
>
> - LED-valon vilkkumisen käynnistämiseksi
>
> ```
> storcli /c0/e0/s0 start locate
> ```
>
> - LED-valon vilkkumisen pysäyttämiseksi
>
> ```
> storcli /c0/e0/s0 stop locate
> ```
>


> [!primary]
>
> Vaikka LED-valo vilkkuukin, muista merkitä tikettiin levyn sarjanumero ja *slot*.
> 

### Kun vaihdos on tehty

Jos sinulla on palvelin laitteistopohjaisella RAIDilla, RAID muodostuu uudestaan itsestään. Huomio, oletuksena aktivoitua *auto-rebuild*-toimintoa ei tule poistaa käytöstä omin päin. Huomaa, että uudelleensynkronointiprosessi voi viedä joitakin minuutteja ja vähentää RAIDin luku-/kirjoitustehoa.

Jos sinulla on palvelin ohjelmistopohjaisella RAIDilla, on levyjen uudelleensynkronointi tarpeen käynnistää käsin. Katso sitä varten aiheeseen liittyvää dokumentaatiota [“Ohjelmistopohjainen RAID”](https://docs.ovh.com/gb/en/dedicated/raid-soft/){.external}.


## Lue lisää aiheesta

[Ohjelmistopohjainen RAID (EN)](https://docs.ovh.com/gb/en/dedicated/raid-soft/){.external}

[Laitteistopohjainen RAID (EN)](https://docs.ovh.com/gb/en/dedicated/raid-hard/){.external}

[Rescue-tila (EN)](https://docs.ovh.com/gb/en/dedicated/rescue_mode/){.external}


Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.
