---
title: Object Storage Swift - Rendi disponibili i tuoi dati salvati su Public Cloud Archive
slug: pca/unlock
excerpt: Come sbloccare i tuoi archivi
section: OpenStack Swift Archive Storage Class Specifics
order: 030
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 12/04/2022**

## Obiettivo

Il Public Cloud Archive è un'offerta di storage a freddo che permette di ospitare grandi volumi di dati, senza limiti di dimensione e con tariffe molto attraenti.

Per i dati raramente consultati, è necessaria una richiesta di sblocco che comporta un periodo di tempo prima del recupero. Questo tempo è variabile in base all'anzianità e alla frequenza di accesso ai tuoi dati.

## Prerequisiti

- Dallo Spazio Cliente OVHcloud:
    - Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).
- Via python-swiftclient:
    - [Preparare l'ambiente di sviluppo per utilizzare l'API OpenStack](https://docs.ovh.com/it/public-cloud/prepara_il_tuo_ambiente_di_sviluppo_per_utilizzare_lapi_openstack/) installando python-swiftclient.
    - [Impostare le variabili d'ambiente OpenStack](https://docs.ovh.com/it/public-cloud/impostare-le-variabili-dambiente-openstack/).

## Procedura

### Sposta i tuoi oggetti dallo Spazio Cliente

Nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) clicca sulla scheda `Public Cloud`{.action}, seleziona il tuo progetto Public Cloud e clicca sulla sezione `Cloud Archive`{.action} nel menu a sinistra.

Per sbloccare un archivio, clicca sul pulsante `...`{.action} a destra e poi su `Sblocca`{.action} per avviare il processo di recupero.

![disgelo](images/unfreeze.png){.thumbnail}

Una volta avviato il processo, la data e l'ora di disponibilità dell'archivio sono mostrate nella colonna `Disponibilità`.

![tempo prima del ritiro](images/unfreeze_result.png){.thumbnail}

Il tuo file sarà disponibile al download al termine di questo periodo. Il download può essere avviato direttamente dal browser o tramite [un client Swift/SFTP/SCP](https://docs.ovh.com/it/storage/pca/sftp/).

### Rendi liberi i tuoi oggetti tramite python-swiftclient

Verifica lo stato dell'oggetto da scaricare:

```bash
swift stat <pca_container> <object>
```

```
               Account: AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf
             Container: <pca_container>
                Object: <object>
          Content Type: text/plain
        Content Length: 746
         Last Modified: Tue, 10 Aug 2021 08:39:41 GMT
                  ETag: 51f122f524c46cafcf9628305db99144
            Meta Mtime: 1627974571.298786
         Accept-Ranges: bytes
 X-Ovh-Retrieval-State: sealed
           X-Timestamp: 1628584780.95458
            X-Trans-Id: txbb0eff9ebf9442eab0d02-0061123b5a
X-Openstack-Request-Id: txbb0eff9ebf9442eab0d02-0061123b5a
     X-Iplb-Request-Id: 6DBEFE1E:942A_3626E64B:01BB_61123B59_649EACF:8F28
       X-Iplb-Instance: 12308
```

La riga seguente indica che l'oggetto è congelato:

```
X-Ovh-Retrieval-State: sealed
```

Di conseguenza, il comando `swift download` restituirà un errore 429:

```bash
swift download <pca_container> <object>
```
```
Error downloading object '<pca_container>/<object>': Object GET failed: https://storage.gra.cloud.ovh.net/v1/AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf/<pca_container>/<object> 429 Too Many Requests
```

Riavvia il comando `swift stat`:

```bash
swift stat <pca_container> <object>
```

```
               Account: AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf
             Container: <pca_container>
                Object: <object>
          Content Type: text/plain
        Content Length: 746
         Last Modified: Tue, 10 Aug 2021 08:39:41 GMT
                  ETag: 51f122f524c46cafcf9628305db99144
            Meta Mtime: 1627974571.298786
         Accept-Ranges: bytes
 X-Ovh-Retrieval-State: unsealing
           X-Timestamp: 1628584780.95458
 X-Ovh-Retrieval-Delay: 14313
            X-Trans-Id: tx9012d12434a447bd81528-0061123c54
X-Openstack-Request-Id: tx9012d12434a447bd81528-0061123c54
     X-Iplb-Request-Id: 6DBEFE1E:94D0_3626E64B:01BB_61123C54_6823B54:10ABF
       X-Iplb-Instance: 12309
```

La linea seguente indica che l'oggetto è in fase di sblocco:

```
X-Ovh-Retrieval-State: unsealing
```

E la seguente linea indica il tempo (in secondi) che bisogna attendere prima di poter scaricare l'oggetto:

```
X-Ovh-Retrieval-Delay: 14313
```

Una volta trascorso il termine:

```bash
swift stat <pca_container> <object>
```

```
               Account: AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf
             Container: <pca_container>
                Object: <object>
          Content Type: text/plain
        Content Length: 746
         Last Modified: Tue, 10 Aug 2021 08:39:41 GMT
                  ETag: 51f122f524c46cafcf9628305db99144
            Meta Mtime: 1627974571.298786
         Accept-Ranges: bytes
 X-Ovh-Retrieval-State: unsealed
           X-Timestamp: 1628584780.95458
            X-Trans-Id: txaf1eac9ceb8a45efb36e1-0061127482
X-Openstack-Request-Id: txaf1eac9ceb8a45efb36e1-0061127482
     X-Iplb-Request-Id: 6DBEFE1E:ACCC_3626E64B:01BB_61127482_E75B0:1B979
       X-Iplb-Instance: 38343
```

La riga seguente indica che l'oggetto è scongelato:

```
X-Ovh-Retrieval-State: unsealed
```

Il download dell'oggetto funziona:

```bash
swift download <pca_container> <object>
```

```bash
swift download <pca_container> <object>
<object> [auth 0.961s, headers 1.767s, total 1.768s, 0.001 MB/s]
```

#### Automatizza il download dell'oggetto

> [!primary]
>
> Questa funzionalità richiede il package `at`.
>

```bash
swift download <pca_container> <object>
```
```
Error downloading object '<pca_container>/<object>': Object GET failed: https://storage.gra.cloud.ovh.net/v1/AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf/<pca_container>/<object> 429 Too Many Requests
```

```bash
X_OVH_RETRIEVAL_DELAY=$(swift download <pca_container> <object> | awk -F ": " '/X-Ovh-Retrieval-Delay/ {print $2}'
RETRIEVAL_DELAY=$((${X_OVH_RETRIEVAL_DELAY} / 60 + 2))
swift download <pca_container> <object> | at now + ${RETRIEVAL_DELAY} minutes
```

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.