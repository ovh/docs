---
title: 'Come cambiare la Product Key di Windows Server'
excerpt: 'Scopri come modificare il codice Product Key di Windows Server'
updated: 2026-01-06
---

## Obiettivo

Quando installi Windows Server, la Product Key (ovvero il codice di attivazione del prodotto) potrebbe non essere registrata correttamente. In questo caso, significa che il sistema operativo è stato installato con un codice di prova valido 120 giorni e che, allo scadere di questo periodo, non potrai più utilizzare il servizio. 

**Questa guida ti mostra come modificare la Product Key di Windows Server.**

## Prerequisiti

- Disporre di un [server dedicato OVHcloud](/links/bare-metal/os) che esegue Windows Server o di una macchina virtuale che esegue Windows Server su un servizio [Managed VMware](/links/hosted-private-cloud/vmware-images-licenses).
- Avere una licenza Windows SPLA sul tuo account OVHcloud
- Avere un accesso amministrativo al tuo server tramite una connessione desktop remoto

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
cscript.exe c:\windows\system32\slmgr.vbs -ipk CHIAVE KMS
```

I codici Product Key per le versioni di Windows Server supportate sono disponibili nella tabella [pagina ufficiale di Microsoft](https://learn.microsoft.com/en-gb/windows-server/get-started/kms-client-activation-keys).

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

Contatta la nostra [Community di utenti](/links/community).
