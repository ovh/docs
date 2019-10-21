---
title: 'Windows Server - změna aktivačního klíče'
excerpt: 'Zjistěte, jak změnit aktivační klíč operačního systému Windows Server'
slug: windows-key
section: Ostatní
---

**Poslední aktualizace 09/03/2018**

## Cíl

Při instalaci operačního systému Windows Server může dojít k chybné registraci aktivačního klíče. V takových případech se systém nainstaluje pomocí zkušebního aktivačního klíče s dobou platnosti 120 dnů. Po uplynutí této lhůty dojde ke znepřístupnění systému.

V této příručce se dozvíte, jak opravit aktivační klíč Vašeho operačního systému Windows Server.


## Prerekvizity

- [Dedikovaný server](https://www.ovh.cz/dedikovane_servery/){.external} s operačním systémem Windows.
- Licence Windows SPLA (licenci je možné zakoupit [zde](https://www.ovh.cz/dedikovane_servery/ceny-licenci_windows-2014.xml){.external}).
- Připojení ke vzdálené ploše.


## Postup

### Odinstalace zkušebního aktivačního klíče

Zkušebního verze operačního systému je nainstalována s defaultním klíčem. Pro změnu klíče otevřete dialogové okno `Spustit`{.action} (klávesa Windows + `R`{.action}):

![Otevření dialogového okna Spustit](images/executer.png){.thumbnail}


![Spuštění](images/executer2.png){.thumbnail}

Zadejte následující příkaz:

```bash
cscript.exe c:\windows\system32\slmgr.vbs -upk
```

### Instalace nového klíče

Nyní můžete nainstalovat nový klíč. Za tímto účelem znovu otevřete dialogové okno `Spustit`{.action} a zadejte následující příkaz:

```bash
cscript.exe c:\windows\system32\slmgr.vbs -ipk CLEF KMS
```

Níže naleznete seznam aktivačních klíčů dostupných pro jednotlivé operační systémy:

|Operační systém|Aktivační klíč|
|---|---|
|Windows Server 2008 Standard|TM24T-X9RMF-VWXK6-X8JC9-BFGM2|
|Windows Server 2008 Entreprise|YQGMW-MPWTJ-34KDK-48M3W-X4Q6V|
|Windows Server 2008 Datacenter|7M67G-PC374-GR742-YH8V4-TCBY3|
|Windows Server 2008 R2 Standard|YC6KT-GKW9T-YTKYR-T4X34-R7VHC|
|Windows Server 2008 R2 Entreprise|489J6-VHDMP-X63PK-3K798-CPX3Y|
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

Zdroj: [Microsoft MSDN](http://ovh.to/B5ihvDm){.external}.


> [!primary]
>
> Core verze používají stejné aktivační klíče jako non-core verze.
> 


### Použití kms.ovh.net

Pro spárování svého klíče s automatickým aktivačním systémem zadejte do dialogového okna `Spustit`{.action} následující příkaz:

```bash
cscript.exe c:\windows\system32\slmgr.vbs -skms kms.ovh.net
```

> [!primary]
>
> V případě VPS či Public Cloud instance je zapotřebí použít `kms.cloud.ovh.net`.
> 

### Aktivace systému

Pro aktivaci operačního systému Windows zadejte následující příkaz:

```bash
cscript.exe c:\windows\system32\slmgr.vbs -ato
```

## Kam dál

Přidejte se k naší uživatelské komunitě na <https://community.ovh.com/en/>.