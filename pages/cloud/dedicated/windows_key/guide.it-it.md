---
title: 'Correggere la Product Key di Windows Server'
excerpt: 'Scopri come modificare il codice Product Key di Windows Server'
slug: windows-key
section: Altro
---

**Ultimo aggiornamento: 07/03/2018**

## Obiettivo

Quando installi Windows Server, la Product Key (ovvero il codice di attivazione del prodotto) potrebbe non essere registrata correttamente. In questo caso, significa che il sistema operativo è stato installato con un codice di prova valido 120 giorni e che, allo scadere di questo periodo, non potrai più utilizzare il servizio. 

**Questa guida ti mostra come correggere la Product Key di Windows Server.**


## Prerequisiti

- Utilizzare un [server dedicato](https://www.ovh.it/server_dedicati/){.external} con Windows
- Avere una licenza Windows SPLA oppure [ordinarne una](https://www.ovh.it/server_dedicati/tariffazione-licenze-windows-2014.xml){.external}
- Avere accesso al server da desktop remoto


## Procedura

### Rimuovi la Product Key predefinita

Quando il sistema operativo è in modalità di prova, viene installato con una Product Key di default. Per modificarla, apri la finestra di dialogo `Esegui`{.action} (tasto Windows + `R`{.action}):

![Apri la finestra di dialogo Esegui](images/executer.png){.thumbnail}


![Esegui](images/executer2.png){.thumbnail}

e inserisci questo comando:

```bash
cscript.exe c:\windows\system32\slmgr.vbs -upk
```

### Aggiungi la nuova Product Key

Da questo momento puoi inserire il codice definitivo ritornando alla finestra di dialogo `Esegui`{.action} e utilizzando questo comando:

```bash
cscript.exe c:\windows\system32\slmgr.vbs -ipk CLEF KMS
```

Ecco la lista delle chiavi KMS disponibili per ciascun sistema operativo:

|Sistema operativo|Chiave KMS|
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

Fonte: [Microsoft MSDN](http://ovh.to/uLi6Bka){.external}


> [!primary]
>
> Le versioni Core utilizzano le stesse chiavi KMS delle versioni non Core.
> 


### Recupera la tua Product Key da kms.ovh.net

Per associare la tua nuova Product Key al nostro sistema di attivazione automatico, utilizza questo comando nella finestra di dialogo `Esegui`{.action}:

```bash
cscript.exe c:\windows\system32\slmgr.vbs -skms kms.ovh.net
```

> [!primary]
>
> Per VPS o istanze Public Cloud, è necessario utilizzare `kms.cloud.ovh.net`.
> 

###  Registra il sistema operativo

Infine, inserisci questo comando per registrare Windows Server:

```bash
cscript.exe c:\windows\system32\slmgr.vbs -ato
```

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.
