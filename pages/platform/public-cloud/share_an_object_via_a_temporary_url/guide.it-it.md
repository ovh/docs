---
title: 'Condividere un oggetto con un indirizzo temporaneo'
slug: condividi_un_oggetto_con_un_indirizzo_temporaneo
excerpt: 'Come condividere un oggetto senza fornire informazioni personali'
section: 'Object Storage'
legacy_guide_number: g2007
---

**Ultimo aggiornamento: 24/10/2019**

## Obiettivo 

OpenStack Swift è un servizio di storage di oggetti che permette di archiviare un grande numero di file. Per poterli gestire è necessario autenticarsi con un *token* ogni volta che si esegue una richiesta API, in modo da verificare i permessi di lettura e scrittura su Swift.  Il *token* viene generato dal sistema di autenticazione tramite le credenziali dell’utente.

Per condividere un file con un amico o un collega senza fornire le informazioni personali relative all’autenticazione, è possibile creare un indirizzo temporaneo (TempURL).

**Questa guida ti mostra come utilizzare la funzionalità TempURL per condividere temporaneamente un file.**

## Prerequisiti

- [Aver preparato l’ambiente di sviluppo per utilizzare l’API OpenStack](https://docs.ovh.com/it/public-cloud/prepara_il_tuo_ambiente_di_sviluppo_per_utilizzare_lapi_openstack/){.ref}
- Impostare le variabili d'ambiente OpenStack
- Aver installato Python sul proprio dispositivo

## Procedura

### Principio di funzionamento

TempURL è una funzionalità che permette di decidere quali file condividere, mettendoli a disposizione per un tempo stabilito. L’indirizzo temporaneo viene generato utilizzando questi elementi:

- **indirizzo del punto di accesso** (ad esempio “https://storage.sbg1.cloud.ovh.net”)
- **percorso completo dell’oggetto che contiene il progetto, il container e il nome dell’oggetto** (ad esempio `v1/AUTH_tenant/default/file`)
- **parametro tempurlsign**, che corrisponde alla firma generata in base a chiave di sicurezza, metodo HTTP, percorso del file e data di scadenza
- **parametro url_expires**, che corrisponde alla data di scadenza dell’indirizzo temporaneo

### Genera l’indirizzo temporaneo (*TempURL*)

#### 1. Genera la chiave

Per prima cosa è necessario generare una chiave, che potrà essere utilizzata per tutti i file del progetto  e i futuri indirizzi temporanei. 

> [!primary]
>
> Per motivi di sicurezza consigliamo di scegliere una chiave lunga (almeno 20 caratteri), anche se è possibile crearne una nuova in qualsiasi momento.
> 

Per generare la chiave sono disponibili diverse soluzioni, come i comandi `sha512sum` e `sha256sum`. Utilizza il metodo più adatto alla tua situazione e al livello di cifratura desiderato. Ecco alcuni esempi, dal più al meno efficace:

- date +%s | sha512sum
- date +%s | sha256sum
- date +%s | md5sum 

Una volta generata la chiave, è possibile configurarla sul progetto tramite il client Swift (ricordati di sostituire la stringa “12345” con la tua chiave):

```bash
swift post -m "Temp-URL-Key: 12345"
```

o con curl:

```bash
curl -i -X POST \ -H "X-Account-Meta-Temp-URL-Key: 12345" \ -H "X-Auth-Token: abcdef12345" \ https://storage.sbg1.cloud.ovh.net/v1/AUTH_ProjectID
```

> [!primary]
>
> Il nome completo dell’header è `X-Account-Meta-Temp-Url-Key` ma il client Swift utilizza `Temp-Url-Key` perché aggiunge automaticamente `X-Account-Meta`.
> 

Una volta configurata la chiave sull’account, utilizza il client Swift per verificare la corretta applicazione dell’**header**:

```bash
swift stat
```

O con curl:

```bash
curl -i -X HEAD \ -H "X-Auth-Token: abcdef12345" \ https://storage.sbg1.cloud.ovh.net/v1/AUTH_ProjectID
```

#### 2. Genera l’URL

Queste operazioni possono essere effettuate offline. Per generare l'indirizzo temporaneo è possibile utilizzare il comando indicato qui sotto, sostituendo i valori generici con le proprie informazioni.

Ad esempio:

- **GET**: metodo HTTP
- **60**: link disponibile per 60 secondi (valore personalizzabile)
- **/v1/AUTH_tenant/default/file**: percorso verso il file (in questa fase, non è necessario aggiungere il punto di accesso)
- **12345**: da sostituire con la propria chiave

```
swift tempurl GET 60 /v1/AUTH_tenant/default/file 12345
```

Lo script fornirà un **TempURL** in cui è indicato **percorso del file**, **firma** e **data di scadenza**.

```
v1/AUTH_tenant/default/file?temp_url_sig=8016dsdf3122d526afds60911cde59fds3&temp_url_expires=1401548543
```

Per il corretto funzionamento dell’URL è sufficiente aggiungere l’indirizzo del punto di accesso davanti al proprio **Temp URL**:

```
https://storage.sbg1.cloud.ovh.net/v1/AUTH_tenant/default/file?temp_url_sig=8016dsdf3122d526afds60911cde59fds3&temp_url_expires=1401548543
```

Nel nostro esempio, l’URL temporaneo permette a chiunque di scaricare l’oggetto **file** dal container **default**, entro 60 secondi e senza autenticazione. Scaduti i 60 secondi l’URL non sarà più funzionante.

> [!primary]
>
> Gli utenti avanzati che intendono generare un Temp URL senza utilizzare lo script **swift-temp-url** possono consultare la documentazione ufficiale di OpenStack.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.