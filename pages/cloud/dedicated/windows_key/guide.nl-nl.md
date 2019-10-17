---
title: 'Wijziging van een Windows Server activeringssleutel'
excerpt: 'Leer hoe u een activeringssleutel van uw Windows Server kunt wijzigen'
slug: windows-key
section: Diversen
---

**Laatste update 20-02-2018**

## Introductie

Wanneer u een Windows Server-besturingssysteem installeert, wordt de activeringssleutel mogelijk niet correct opgeslagen. In dit geval is het systeem ingesteld met een 120-dagen evaluatiesleutel. Na deze periode wordt het besturingssysteem onbruikbaar.

**In deze handleiding wordt uitgelegd hoe u de activeringssleutel voor uw Windows Server-omgeving kunt wijzigen.**


## Vereisten

- U moet een Windows [dedicated server](https://www.ovh.nl/dedicated_servers/){.external} ingesteld hebben. 
- U moet beschikken over een Windows SPLA-licentie of er een hebben [besteld](https://www.ovh.nl/dedicated_servers/tarieven-windows-licenties-2014.xml){.external}. 
- U moet toegang hebben tot een externe desktop. 


## Instructies

### Wijzig de standaardsleutel

Wanneer uw besturingssysteem zich in de proefmodus bevindt, wordt een standaardsleutel opgeslagen. Om het te wijzigen, opent u het `Run`{.action}-commando (Windows-toets + `R`{.action}):

![Run-commando activering](images/executer.png){.thumbnail}


![Run](images/executer2.png){.thumbnail}

In dit veld voert u het volgende commando in:  

```bash
cscript.exe c:\windows\system32\slmgr.vbs -upk
```

### Voeg nieuwe sleutel toe

U kunt nu een nieuwe sleutel toevoegen. Hiervoor, gaat u terug naar het `Run`{.action}-veld en voert u het volgende commando in:
```bash
cscript.exe c:\windows\system32\slmgr.vbs -upk
```

Hieronder is een lijst met KMS-sleutels beschikbaar voor elk besturingssysteem:

|Besturingssysteem|KMS-sleutel|
|---|---|
|Windows Server 2008 Standard|TM24T-X9RMF-VWXK6-X8JC9-BFGM2|
|Windows Server 2008 Entreprise|YQGMW-MPWTJ-34KDK-48M3W-X4Q6V|
|Windows Server 2008 Datacenter|7M67G-PC374-GR742-YH8V4-TCBY3|
|Windows Server 2008 R2 Standard|YC6KT-GKW9T-YTKYR-T4X34-R7VHC|
|Windows Server 2008 Entreprise|489J6-VHDMP-X63PK-3K798-CPX3Y|
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

Bron [Microsoft MSDN](http://ovh.to/uLicqrr){.external}.


> [!primary]
>
> Core-versies gebruiken dezelfde KMS-sleutels als niet-Core-versies.
> 


### Gebruik kms.ovh.net

Om uw sleutel te koppelen aan ons geautomatiseerde activeringssysteem, voert u het onderstaande commando in het `Run`{.action}-veld in:

```bash
cscript.exe c:\windows\system32\slmgr.vbs -upk
```

> [!primary]
>
> Als u gebruikmaakt van een VPS- of Public Cloud-instance, moet u `kms.cloud.ovh.net` gebruiken.
> 

### Activeer het systeem

Ten slotte, om uw Windows-besturingssysteem te activeren, voert u het onderstaande commando in:

```bash
cscript.exe c:\windows\system32\slmgr.vbs -upk
```

## Verder

Ga in gesprek met andere communityleden op <https://community.ovh.com>.