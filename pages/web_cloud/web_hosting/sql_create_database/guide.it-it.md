---
title: "Creare un database su un hosting Web"
excerpt: "Questa guida ti mostra come creare un database sul tuo hosting Web OVHcloud"
updated: 2023-11-03
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Un database (BDD) è utilizzato per archiviare elementi dinamici (dati di connessione, dati degli utenti, dati di visualizzazione, dati necessari al corretto funzionamento del sito Web, ecc...). Questi database vengono utilizzati nella maggior parte dei moderni sistemi di gestione dei contenuti (CMS), ad esempio *WordPress*, *Joomla!*, *Drupal* o *PrestaShop*.

**Questa guida ti mostra come creare un database sul tuo hosting Web OVHcloud**

## Prerequisiti

- Disporre di una soluzione di [hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/) che includa almeno un database.
- Disporre di un database disponibile in "creazione" tra quelli inclusi nel piano di hosting Web.
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) con le [autorizzazioni necessarie](/pages/account_and_service_management/account_information/managing_contacts) per gestire l’hosting Web.

## Procedura

### Step 1 - Accedi alla scheda di gestione dei database di un hosting Web

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) e clicca sulla sezione `Web Cloud`{.action}. Clicca su `Hosting`{.action} nella colonna a sinistra, scegli l’offerta di hosting su cui vuoi creare un database e poi clicca sulla scheda `Database`{.action}.

La tabella di questa sezione contiene tutti i database creati con il tuo hosting Web.

![databasecreation](images/database-creation-step1.png){.thumbnail}

### Step 2 - Crea il database

Per creare un nuovo database è possibile procedere in due modi:

- **Se non hai ancora creato database** : clicca sul pulsante `Crea un database`{.action}.

- **Se hai già creato un database** : clicca sul pulsante `Azioni`{.action} e poi su `Crea un database`{.action}.

Nella nuova finestra, seleziona le informazioni richieste:

![database-creation-step1](images/database-creation-1.png){.thumbnail}

|Informazione|Descrizione|  
|---|---| 
|**Seleziona il tipo di database**|Scegli la dimensione del database. Questa dimensione si riferisce allo spazio di cui dispone il tuo database per l'archiviazione dei dati.|
|**Seleziona il motore del database da aggiungere**|Scegli il motore che il database deve utilizzare. I database inclusi nella [soluzione di hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/) sono disponibili esclusivamente con il motore MySQL.|
|**Seleziona la versione del database da aggiungere**|Scegli la versione utilizzata dal motore del database. Assicurati che il sito Web sia compatibile con la versione scelta.|

Clicca su `Continua`{.action}.

Si apre una nuova finestra:

![database-creation-step2](images/database-creation-2.png){.thumbnail}

|Informazione|Descrizione|
|---|---| 
|**Nome utente**|Inserisci un nome utente che sarà associato al tuo database (massimo 6 caratteri in aggiunta al prefisso utente già inserito).|
|**Password**|Immettere una password per questo utente rispettando i *criteri* indicati più avanti.|
|**Conferma**|Inserisci nuovamente la password per questo utente.|

> [!primary]
>
> Per motivi di sicurezza, segui i requisiti richiesti durante la creazione della password.
>
> Ti consigliamo inoltre di:
>
> - impostare una password diversa per ogni servizio;
- creare una password che non contenga informazioni personali (cognome, nome, data di nascita, ecc.);
> - modificare regolarmente la password;
- non conservare una traccia scritta della password e non inviarla ad altri (anche tramite il tuo indirizzo email);
> - non salvare la password sul vostro browser internet, anche se il vostro browser vi propone di farlo.
>

> [!warning]
>
> Tenere presente che se si modifica la password di un database, tutte le applicazioni che accedono al database devono essere aggiornate di conseguenza.
>

Inserisci le informazioni richieste e clicca su `Continua`{.action}.

![database-creation-step3](images/database-creation-3.png){.thumbnail}

Verificare che tutte le informazioni visualizzate nel riepilogo siano corrette. In questo caso, clicca su `Conferma`{.action} per avviare la creazione del database.

> [!primary]
>
> Cliccando su `Conferma`{.action}, la creazione del database potrebbe richiedere fino a **15 minuti**. Ricarica la pagina Web del tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) se il database non compare automaticamente nella tabella che elenca i tuoi database.
>

Ripeti questo processo per tutti i database che vuoi creare (nel limite dei database disponibili nella tua offerta).

### Step 3 - Gestire il database <a name="step3"></a>

> [!warning]
>
> Questa guida non sostituisce l’assistenza di un professionista in sviluppo. In caso di difficoltà o dubbi, ti consigliamo di contattare un [provider specializzato](https://partner.ovhcloud.com/it/directory/) o il fornitore del software della tua soluzione. OVHcloud non sarà in grado di fornirti assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questa guida.
>

A questo punto è possibile utilizzare il database. Per farlo, avrai bisogno delle tue informazioni di connessione:

- *nome utente* e *password* impostati,
- *nome del database* indicato,
-*indirizzo del server*.

Queste informazioni sono essenziali perché il sito Web possa connettersi al database.

Se necessario, per recuperare queste informazioni di connessione, accedi al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) e clicca sulla sezione `Web Cloud`{.action}. Clicca su `Hosting`{.action} nella colonna a sinistra, scegli l’offerta di hosting su cui vuoi recuperare le informazioni di connessione al tuo database e poi clicca sulla scheda `Database`{.action}.

Tutte le informazioni di connessione al database sono disponibili nella tabella. Ad eccezione della *password*, per motivi di sicurezza.

> [!warning]
>
> Se non ricordi più la password di accesso al database, consulta la nostra guida "[Modificare la password del database](/pages/web_cloud/web_hosting/sql_change_password)".
>

In base al software utilizzato, è possibile che questa connessione richieda una configurazione manuale o un’interfaccia generata dall’interfaccia di configurazione (backend) del sito Web. Dato che questa procedura riguarda la configurazione del sito Web e non l’hosting OVHcloud, consigliamo di consultare le risorse disponibili online o ricorrere a un [provider specializzato](https://partner.ovhcloud.com/it/directory/).

#### Accedi all'interfaccia phpMyAdmin

OVHcloud fornisce uno strumento online per la gestione dei database, "phpMyAdmin". Per trovare il link di accesso a questa applicazione, accedi al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) e clicca sulla sezione `Web Cloud`{.action}. Clicca su `Hosting`{.action} nella colonna a sinistra, scegli l’offerta di hosting su cui vuoi recuperare le informazioni di connessione al tuo database e poi clicca sulla scheda `Database`{.action}. Nella tabella che appare, clicca sul pulsante `...`{.action} a destra del database interessato e poi su `Accedi a phpMyAdmin`{.action} nel menu a tendina.

![phpMyAdmin Go Login](images/pma-interface-login.png){.thumbnail}

Inserisci le informazioni di accesso al database e clicca su `Connetti`{.action}.

Se necessario, consulta lo [step 3](#step3) di questa guida per trovare le informazioni di connessione al tuo database.

#### Utilizza i backup dei database

Per ogni database di hosting Web, vengono creati automaticamente degli Snapshot ogni giorno (fino a un massimo di 32). È quindi possibile ripristinare rapidamente una versione precedente di un database dallo Spazio Cliente OVHcloud.

Per verificare gli Snapshot disponibili e la data e l’ora della loro creazione, accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) e clicca su `Web Cloud`{.action}. Clicca su `Hosting`{.action} nella colonna a sinistra, scegli l’offerta di hosting su cui vuoi consultare gli Snapshot disponibili per il tuo database e poi clicca sulla scheda `Database`{.action}. Nella tabella visualizzata, fare clic sul simbolo accanto al cerchio verde. È inoltre possibile scaricare ogni backup di un database da questa interfaccia. Per maggiori informazioni al riguardo, consulta la nostra guida "[Recuperare il backup del database di un hosting Web](/pages/web_cloud/web_hosting/sql_database_export)".

#### Comprendere i problemi più comuni

**Troppe connessioni**

I database degli hosting Web sono limitati a 30 connessioni simultanee (variabile di sistema *max_connections*). Le richieste SQL devono quindi essere ottimizzate per evitare questo tipo di errore. Se, nonostante tutto, i problemi persistono, è necessario prendere in considerazione misure alternative. Ad esempio, è possibile migrare il database su un database [Web Cloud Databases](https://www.ovhcloud.com/it/web-cloud/databases/) o effettuare un [aggiornamento del piano di hosting Web](https://www.ovhcloud.com/it/web-hosting/uc-best-web-hosting/).

**Errori di connessione / "Non trovato"**

In genere viene visualizzato quando non si utilizza il nome reale del database nel file di connessione al database presente nel sito Web.

È consigliabile utilizzare sempre il nome effettivo del database per gli script e i file di configurazione anziché gli indirizzi IP o _localhost_.

**Quota superata per i database**

Se un database di hosting Web supera lo spazio di storage consigliato, passerà automaticamente a "Sola lettura"/"Sola selezione". L'amministratore riceverà una notifica via email.

Una volta che il database è stato ottimizzato (eliminato), ricalcola la quota dallo Spazio Cliente OVHcloud per sbloccarlo di nuovo. Per maggiori informazioni al riguardo, consulta la nostra guida "[Cosa fare quando la quota di storage del tuo database viene superata?](/pages/web_cloud/web_hosting/sql_overquota_database)"

## Per saperne di più <a name="go-further"></a>

[Modificare la password del database di un hosting Web](/pages/web_cloud/web_hosting/sql_change_password)

[Recuperare il backup del database di un hosting Web](/pages/web_cloud/web_hosting/sql_database_export)

[Importare un backup nel database di un hosting Web](/pages/web_cloud/web_hosting/sql_importing_mysql_database)

[Ottimizzare le prestazioni del sito Web](/pages/web_cloud/web_hosting/optimise_your_website_performance)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/directory/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com/en/>.