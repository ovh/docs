---
title: 'Windows Server -aktivointiavaimen korjaus'
excerpt: 'Katso, kuinka Windows Serverin aktivointiavainta muokataan'
slug: windows-key
section: Muut
---

**Päivitetty 22.2.2018**

## Tavoite

Windows Server -käyttöjärjestelmän asennuksen yhteydessä on mahdollista, ettei aktivointiavain ole rekisteröitynyt kunnolla. Tässä tapauksessa järjestelmä asennetaan kokeiluavaimella, joka on voimassa 120 päivää. Kun tämä ajanjakso päättyy, ei järjestelmääsi voi enää käyttää.

**Tässä ohjeessa kerrotaan, kuinka voit korjata Windows Server -ympäristösi aktivointiavaimen.**


## Edellytykset

- Windows-järjestelmässä asennettu [dedikoitu palvelin](https://www.ovh-hosting.fi/dedikoidut_palvelimet/){.external}.
- Windows SPLA -lisenssi tai [ostat sellaisen](https://www.ovh-hosting.fi/dedikoidut_palvelimet/windows-lisenssi-hinnat-2014.xml){.external}.
- Etätyöpöytäyhteys.


## Käytännössä

### Aiemman avaimen poistaminen

Kun järjestelmäsi on kokeiluversio, siihen on asennettuna oletusavain. Muokataksesi avainta, avaa apuohjelma `Suorita`{.action} (Windows-näppäin + `R`{.action}):

![Suorita-apuohjelman aktivointi](images/executer.png){.thumbnail}


![Suorita](images/executer2.png){.thumbnail}

Syötä apuohjelmassa seuraava komento:

```bash
cscript.exe c:\windows\system32\slmgr.vbs -upk
```

### Lisää uusi avain

Voit nyt lisätä uuden avaimen. Palaa sitä varten uudelleen apuohjelmaan `Suorita`{.action} ja syötä seuraava komento:
```bash
cscript.exe c:\windows\system32\slmgr.vbs -ipk KMS-AVAIN
```

Alla saatavilla olevien KMS-avainten lista jokaiselle käyttöjärjestelmälle:

|Käyttöjärjestelmä|KMS-avain|
|---|---|
|Windows Server 2008 Standard|TM24T-X9RMF-VWXK6-X8JC9-BFGM2|
|Windows Server 2008 Enterprise|YQGMW-MPWTJ-34KDK-48M3W-X4Q6V|
|Windows Server 2008 Datacenter|7M67G-PC374-GR742-YH8V4-TCBY3|
|Windows Server 2008 R2 Standard|YC6KT-GKW9T-YTKYR-T4X34-R7VHC|
|Windows Server 2008 R2 Enterprise|489J6-VHDMP-X63PK-3K798-CPX3Y|
|Windows Server 2008 R2 Datacenter|74YFP-3QFB3-KQT8W-PMXWJ-7M648|
|Windows Server 2012 Standard|XC9B7-NBPP2-83J2H-RHMBY-92BT4|
|Windows Server 2012 Datacenter|48HP8-DN98B-MYWDG-T2DCC-8W83P|
|Windows Server 2012 R2 Standard|D2N9P-3P6X9-2R39C-7RTCD-MDVJX|
|Windows Server 2012 R2 Datacenter|W3GGN-FT8W3-Y4M27-J84CP-Q3VJ9|
|Windows 8.1 Pro|GCRJD-8NW9H-F2CDX-CCM8D-9D6T9|
|Windows Server 2016 Datacenter|CB7KF-BWN84-R7R2Y-793K2-8XDDG|
|Windows Server 2016 Standard|WC2BQ-8NRM3-FDDYY-2BFGV-KHKQY|
|Windows Server 2016 Essentials|JCKRF-N37P4-C2D82-9YXRT-4M63B|
|Windows Server 2019 Standard|N69G4-B89J2-4G8F4-WWYCC-J464C|
|Windows Server 2019 Datacenter|WMDGN-G9PQG-XVVXX-R3X43-63DFG|

Lähde: [Microsoft MSDN](http://ovh.to/gwzQ9s){.external}.


> [!primary]
>
> Core-versiot käyttävät samoja KMS-avaimia kuin ei-core-versiot.
> 


### Käytä: kms.ovh.net

Jotta avaimesi yhdistyy aktivointirobottiimme, käytä alla olevaa komentoa `Suorita`{.action}-apuohjelmassa:

```bash
cscript.exe c:\windows\system32\slmgr.vbs -skms kms.ovh.net
```

> [!primary]
>
> Jos käytät virtuaalipalvelinta tai Public Cloud -instanssia, käytä komennon loppuosana `kms.cloud.ovh.net`.
> 

### Aktivoi järjestelmä
Lopuksi Windows-järjestelmän aktivoimiseksi on vielä suoritettava alla oleva komento:

```bash
cscript.exe c:\windows\system32\slmgr.vbs -ato
```

## Lue lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://ovh-hosting.fi/community/foorumi>.