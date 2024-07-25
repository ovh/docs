---
title: "Recuperare il backup di un database eliminato"
excerpt: "Scopri come recuperare il backup di un database eliminato dal tuo Spazio Cliente OVHcloud"
updated: 2024-07-25
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

La maggior parte delle nostre soluzioni di [hosting Web](/links/web/hosting) includono database. In caso di eliminazione accidentale di un database associato all’hosting Web, è possibile tentare di recuperarne il backup tramite le nostre API.

**Questa guida ti mostra come recuperare il backup di un database dallo Spazio Cliente OVHcloud utilizzando le API OVHcloud.**

> [!warning]
>
> OVHcloud mette a disposizione i servizi ma non si occupa della loro configurazione e gestione. garantirne il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. In caso di difficoltà o dubbi, ti consigliamo di contattare un [provider specializzato](/links/partner). OVHcloud non sarà infatti in grado di fornirti un’assistenza aggiuntiva sulle API. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questa guida.
>

## Prerequisiti

- Disporre di una [soluzione di hosting Web OVHcloud](/links/web/hosting) attiva che include uno o più database condivisi associati a OVHcloud.
- L'eliminazione del database deve risalire a meno di 30 giorni prima.

## Procedura

Le API OVHcloud sono messe a disposizione per permettere agli sviluppatori o agli integratori di associare funzionalità presenti o meno nello Spazio Cliente OVHcloud direttamente alle proprie applicazioni o soluzioni.

> [!warning]
>
> I backup proposti da OVHcloud per gli hosting condivisi e i database associati sono non contrattuali. In aggiunta ai servizi offerti, OVHcloud ti offre assistenza in situazioni di emergenza. Per evitare eventuali perdite di dati, ti consigliamo di effettuare regolarmente backup di sicurezza personalizzati.
>
> Inoltre, quando un database viene eliminato dall'utente o dall'amministratore, OVHcloud non potrà garantire il recupero del backup per le ragioni sopra indicate.
>

### Step 1 - Recupera il nome dell’hosting Web al quale era associato il database eliminato

Per recuperare il nome dell’hosting Web, esegui queste operazioni:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
2. Nella riga superiore dello Spazio Cliente, clicca sulla scheda `Web Cloud`{.action}.
3. Nella colonna di sinistra, clicca sul menu a tendina `Hosting`{.action}.
4. Seleziona il tuo hosting Web.
5. In alto a sinistra della pagina, trovi il nome del tuo hosting Web a destra della voce `Hosting /`{.action}.

![API](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-webhosting-name.png){.thumbnail}

### Step 2 - Connettersi alle API OVHcloud e consentire loro l'accesso ai servizi

Per effettuare questa operazione, esegui le operazioni seguenti:

- Accedi al nostro sito [API OVHcloud](/links/api) (verifica di essere su `https://eu.api.ovh.com` se i tuoi servizi sono ospitati in Europa e su `https://ca.api.ovh.com` se i tuoi servizi sono ospitati al di fuori dell’Europa).
- Nella nuova pagina, clicca al centro su `Esplora l’API OVHcloud`{.action}.
- Nella nuova pagina che appare e nella parte sinistra della pagina, clicca sul form a destra del form `v1`{.action} e seleziona/inserisci la voce `/hosting/web`.
- Dall’elenco di API che appare sotto nella colonna di sinistra, cerca e clicca su questa API: **GET /hosting/web/{serviceName}/dump**. Per accedervi, clicca direttamente sull’API :

> [!api]
>
> @api {v1} /hosting/web GET /hosting/web/{serviceName}/dump
>

- Sul lato destro della pagina compare l’API con i suoi moduli da compilare.
- Clicca sul pulsante in alto a destra intitolato `Authenticate`{.action} e poi sul pulsante `Login with OVHcloud SSO`{.action}.
- Si apre l’interfaccia di connessione al tuo [Spazio Cliente OVHcloud](/links/manager).
- Accedi con il tuo identificativo cliente e clicca su `Authorize`{.action} per utilizzare le API OVHcloud con i servizi presenti nel tuo Spazio Cliente.
- Verrai reindirizzato automaticamente alla pagina precedente dell’API **GET /hosting/web/{serviceName}/dump**, mentre sarai connesso al tuo Spazio Cliente OVHcloud.

### Step 3 - Verifica la disponibilità dei backup e recupera l'ID dell'ultimo backup

Per farlo, compila i diversi moduli come dettagliato di seguito:

- Per la sezione intitolata `PATH PARAMETERS`:
- `serviceName`: Inserisci il nome del tuo hosting Web precedentemente recuperato nello Step 1 di questa guida.

- Per la sezione intitolata `QUERY-STRING PARAMETERS`:
- `creationDate.from`: lasciare il modulo vuoto.
- `creationDate.to`: lasciare il modulo vuoto.
- `databaseName`: Inserisci il nome del database eliminato accidentalmente. (esempio: **deletedDatabase.mysql.db**).
- `deletionDate.from`: lasciare il modulo vuoto.
- `deletionDate.to`: lasciare il modulo vuoto.
- `orphan`: Inserisci in minuscolo il valore: `true`.

![API](/pages/assets/screens/api/get-hosting-web-servicename-dump.png){.thumbnail}

Una volta completati i moduli, clicca sul pulsante blu `Try`{.action} in basso a destra delle due sezioni precedentemente compilate.

Se tutto è stato inserito correttamente e alcuni backup sono disponibili per il database eliminato, nella finestra `RESPONSE`{.action} viene visualizzato un elenco di numeri di identificativi di backup quando si scende alla pagina sotto il pulsante `Try`{.action}.

![API](/pages/assets/screens/api/get-hosting-web-servicename-dump-response.png){.thumbnail}

Ognuno di questi numeri corrisponde a un identificativo di backup disponibile (ID). Questi numeri identificativi di backup vengono visualizzati dal più recente al meno recente. **Copia l'ID più alto della lista** (senza `,` alla fine) per recuperare (allo Step 4 di questa guida) l'ultimo backup del database eliminato.

Se nella finestra non compare alcun ID, verifica di aver effettuato l’accesso con il corretto identificativo cliente OVHcloud (se ne hai diversi). Verificare inoltre le informazioni inserite nelle sezioni **PATH PARAMETERS** e **QUERY-STRING PARAMETERS**. Quindi riavviare l'operazione.

Se nonostante tutto non hai ancora un ID visualizzato, vuol dire che non ci sono o non ci sono più backup disponibili per il database eliminato sulla nostra infrastruttura.

### Step 4 - Recupera l'ultimo backup

Grazie al numero identificativo di backup recuperato allo Step 3, è possibile scaricare l’ultimo backup del database eliminato utilizzando un link generato via API.

Per farlo, resta sul nostro sito [API OVHcloud](/links/api) ed effettua le seguenti operazioni:

- Nella parte sinistra della pagina, clicca sul form a destra del form `v1`{.action} e seleziona/inserisci la voce `/hosting/web`{.action}.
- Dall’elenco di API che appare sotto nella colonna di sinistra, cerca e clicca su questa API: **GET /hosting/web/{serviceName}/dump/{id}**. Per accedervi, clicca direttamente sull’API :

> [!api]
>
> @api {v1} /hosting/web GET /hosting/web/{serviceName}/dump/{id}
>

- Sul lato destro della pagina compare l’API con i suoi moduli da compilare.

Compila i moduli disponibili nella sezione `PATH PARAMETERS` nel modo seguente:

- `id`: Copia il numero identificativo di backup recuperato allo Step 3. Se non eri disconnesso dal nostro sito API OVHcloud, l’interfaccia può proporti direttamente i diversi numeri di ID di backup disponibili. In questo caso, clicca sul primo numero di ID dell’elenco presente subito sotto il form **id**.
- `serviceName`: Inserisci il nome del tuo hosting Web precedentemente recuperato nello Step 1 di questa guida.

![API](/pages/assets/screens/api/get-hosting-web-servicename-dump-id.png){.thumbnail}

Una volta completati i moduli, clicca sul pulsante blu `Try`{.action} in basso a destra nella sezione precedentemente compilata.

Se tutto è stato inserito correttamente, il seguente risultato appare nella finestra `RESPONSE`{.action} quando si scende alla pagina sotto il pulsante `Try`{.action}:

![API](/pages/assets/screens/api/get-hosting-web-servicename-dump-id-response.png){.thumbnail}

```bash
{
  "taskId": null,
  "orphan": true,
  "status": "created",
  "deletionDate": "2024-07-18T20:02:00+02:00",
  "databaseName": "deleteDatabase.mysql.db",
  "url": "Find here the complete URL to download the deleted database backup",
  "type": "now",
  "creationDate": "2024-06-17T22:17:42+02:00",
  "id": 22XXXXX888
}
```

> [!warning]
>
> Le righe nell'output sopra riportato non vengono sempre visualizzate in questo ordine.
>

In questo risultato, copia l'intero URL in "HTTPS" **senza virgolette** presente a destra della dicitura `"url":`, quindi incollalo nella barra di ricerca del tuo browser Internet per avviare il download del backup.

### Step 5 - Crea un nuovo database, importa il file di backup e ripristina il collegamento tra il tuo sito Web e il nuovo database

Una volta recuperato il backup del database, sarà necessario crearne uno nuovo. Per farlo, consulta la nostra guida "[Creare un database sul proprio hosting Web](/pages/web_cloud/web_hosting/sql_create_database)".

Una volta creato il nuovo database, importa il backup utilizzando la nostra guida "[Importare un backup nel database di un hosting Web](/pages/web_cloud/web_hosting/sql_importing_mysql_database)".

Infine, collega il database OVHcloud al file di configurazione del sito Web presente nello [spazio di storage FTP dell’hosting OVHcloud](/pages/web_cloud/web_hosting/ftp_connection).
Per farlo, sostituisci le informazioni di connessione al database eliminato accidentalmente con quelle del nuovo database OVHcloud. Queste informazioni si trovano nel file di "configurazione/connessione al tuo database" del tuo sito Web.

> [!success]
>
> Per collegare il tuo nuovo database se utilizzi un Content Management System (CMS) come WordPress, Joomla!, Drupal o PrestaShop, accedi alle informazioni relative ai file di configurazione da **allo step 2** della guida "[Modificare la password di un database](/pages/web_cloud/web_hosting/sql_change_password)".
>

## Per saperne di più <a name="go-further"></a>

[Creare un database sul proprio hosting Web](/pages/web_cloud/web_hosting/sql_create_database).

[Importare un backup nel database di un hosting Web](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

[Modificare la password di un database](/pages/web_cloud/web_hosting/sql_change_password).
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).
 
Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).
 
Contatta la nostra [Community di utenti](/links/community).