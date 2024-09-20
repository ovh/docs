---
title: "Risolvi gli errori più comuni relativi ai CMS/moduli in 1 click"
excerpt: "Questa guida ti mostra come diagnostica i casi più comuni di errore associati alla creazione di moduli in 1 click"
updated: 2024-03-12
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

I "[moduli in 1 click](/pages/web_cloud/web_hosting/cms_install_1_click_modules)" permettono di creare rapidamente un sito Web. Questa tecnologia permette di creare il tuo sito Web utilizzando i **C**ontent **M**anagement **S**ystem (**CMS**) più conosciuti, come *Wordpress*, *Joomla!*, *Drupal* o *PrestaShop*.
Tuttavia, se la configurazione non viene effettuata correttamente, l’installazione del "modulo in 1 click" potrebbe non riuscire e/o causare malfunzionamenti.

**Questa guida ti mostra come diagnosticare i casi più comuni di errori legati alla creazione di "moduli in 1 click"**

> [!warning]
>
> OVHcloud mette a disposizione i servizi ma non si occupa della loro configurazione e gestione. garantirne il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un [provider specializzato](/links/partner) o il fornitore del servizio. OVH non sarà infatti in grado di fornirti assistenza. Per maggiori informazioni consulta la sezione "[Per saperne di più](#go-further)" di questa guida.
>

## Prerequisiti

- Disporre di un piano di [hosting Web](/links/web/hosting) compatibile.
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager).
- Aver utilizzato la funzionalità "[Modulo in 1 click](/pages/web_cloud/web_hosting/cms_install_1_click_modules)" per creare un nuovo sito Web.

## Procedura

> [!primary]
>
> Di seguito sono riportati gli errori più comuni. Se ti trovi di fronte a una situazione diversa da quelle presentate, consulta la nostra [FAQ sugli hosting Web](/pages/web_cloud/web_hosting/faq-web_hosting).
>

### Il dominio non è stato proposto durante la creazione del "modulo in 1 click"

![domainenotproposed](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/domain-unavailable.png){.thumbnail}

Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}. Clicca su `Hosting`{.action} nella colonna di sinistra e seleziona l’hosting Web interessato dall’installazione. Nella nuova pagina clicca sulla scheda `Multisito`{.action} ed effettua le seguenti verifiche:

|Scenario|Soluzione|
|---|---| 
|Il dominio o sottodominio associato al sito Web che vuoi creare non compare nella tabella presente nella scheda `Multisito`{.action}.|Aggiungi il tuo dominio seguendo [queste indicazioni](/pages/web_cloud/web_hosting/multisites_configure_multisite).|
|Il dominio è stato rimosso dal multisito senza alcuna azione da parte tua.|Se il tuo dominio o la sua [Zona DNS](/pages/web_cloud/domains/dns_zone_edit) non sono gestiti dal tuo account OVHcloud, aggiungi il tuo dominio dalla scheda `Multisito`{.action} seguendo [questa guida](/pages/web_cloud/web_hosting/multisites_configure_multisite).|

### "Si è verificato un errore durante il caricamento delle informazioni (You need at least one free database)"

![No databases available](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/message-no-db-available.png){.thumbnail}

Questo messaggio viene visualizzato quando si avvia l’installazione del "modulo in 1 click" quando non si ha o non si ha più la possibilità di creare un nuovo database associato al proprio hosting Web.

#### Soluzione n°1: ordina un nuovo database

Se con il tuo hosting Web non sono più inclusi database, puoi ordinare un nuovo [database Start SQL](/links/web/hosting-options-startsql) e associarlo al tuo attuale hosting Web. In seguito sarà possibile riavviare l'installazione del "modulo in 1 click". Se hai bisogno di più spazio di storage (superiore a 1 GB), ti consigliamo di utilizzare il nostro servizio [Web Cloud Databases](/links/web/databases).

Nel tuo [Spazio Cliente OVHcloud](/links/manager), accedi alla sezione `Web Cloud`{.action}. Clicca su `Hosting`{.action} nella colonna di sinistra e seleziona l’hosting Web per cui vuoi aggiungere un database supplementare. Clicca sulla scheda `Database`{.action} e poi su `Azioni`{.action} per ordinare un database aggiuntivo:

![order_a_database](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/order-a-db.png){.thumbnail}

Una volta terminato, sarà possibile installare un nuovo "modulo in 1 click".

> [!primary]
>
> Ti ricordiamo di consultare preventivamente le nostre offerte di database unitari [start SQL](/links/web/hosting-options-startsql) e la nostra offerta [Web Cloud Databases](/links/web/databases).
>

#### Soluzione n°2: modificare il piano di hosting Web

> [!primary]
>
> Confronta le nostre diverse [soluzioni di hosting](/links/web/hosting).
>

Nel tuo [Spazio Cliente OVHcloud](/links/manager), clicca su `Web Cloud`{.action}. Clicca su `Hosting`{.action} e seleziona l’hosting Web interessato. Nella pagina visualizzata nella sezione `Abbonamento` - `Servizio`, clicca sul pulsante `...`{.action} `Modifica offerta`{.action}:

![upgrade_hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/upgrade-perso.png){.thumbnail}

Le offerte [Pro](/links/web/hosting-professional-offer) e [Performance](/links/web/hosting-performance-offer) permettono di creare fino a tre "moduli in 1 click" supplementari con un database indipendente per ciascuno di essi. Le offerte **Performance** ti permettono di attivare gratuitamente un server [Web Cloud Databases](/links/web/databases).

Una volta terminato, sarà possibile installare un nuovo "modulo in 1 click".

#### Soluzione n°3: eliminare un database inutilizzato <a name="delete-the-database"></a>

> [!warning]
>
> L'operazione di eliminazione di un database è definitiva. Comporta anche la cancellazione dei backup del database in questione. In caso di dubbi, contatta il tuo webmaster o uno dei nostri [partner](/links/partner).
>

Per eliminare un database dallo [Spazio Cliente OVHcloud](/links/manager), accedi alla sezione `Web Cloud`{.action}. Clicca su `Hosting`{.action} nella colonna di sinistra e seleziona il nome dell’hosting Web interessato.

Clicca sulla scheda `Database`{.action}. Nella tabella che appare, clicca sul pulsante `...`{.action} a destra della riga corrispondente al database che vuoi eliminare e poi su `Elimina il database`{.action}:

![delete_a_database](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/sharedsql-deletion.png){.thumbnail}

Una volta terminato, sarà possibile installare un nuovo "modulo in 1 click".

#### Soluzione n°4: installa il tuo "modulo in 1 click" su un database già utilizzato

Per installare il "modulo in 1 click" su un database già esistente, è necessario utilizzare la funzionalità di installazione in [modalità avanzata](/pages/web_cloud/web_hosting/cms_install_1_click_modules) di un nuovo "modulo in 1 click".

Per recuperare gli identificativi del database, consulta la nostra guida [Installare il sito Web con un "modulo in 1 click" (CMS)](/pages/web_cloud/web_hosting/cms_install_1_click_modules).

Se possiedi un server [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb), puoi creare un database della dimensione di tua scelta, nel limite dello spazio disco assegnato.

Una volta terminato, sarà possibile installare un nuovo "modulo in 1 click".

> [!primary]
>
> In questa situazione, è possibile salvare i dati di un solo sito Web utilizzando uno [script PHP o un comando SSH](/pages/web_cloud/web_hosting/sql_database_export).
>
> Per maggiori informazioni sulle operazioni da effettuare, contatta la [Community OVHcloud](/links/community) o uno dei nostri [partner](/links/partner).<br>
> Non saremo in grado di fornirti assistenza.
>

### Il "modulo in 1 click" viene visualizzato su un indirizzo Web di tipo "xxxxx.cluster0xx.hosting.ovh.net"

![url-cluster](/pages/assets/screens/other/browsers/urls/url-cluster.png){.thumbnail}

Dopo aver effettuato tutti i backup necessari, [elimina il "modulo in 1 click"](#delete-the-module) e poi il suo [database](#delete-the-database). Riavvia l’installazione del "modulo in 1 click" sul dominio scelto.

### "La directory di installazione non è vuota"

![folder_not_empty](/pages/assets/screens/email-sending-to-customer/webhosting/folder-not-empty.png){.thumbnail}

Dopo aver avviato la creazione del "modulo in 1 click", hai ricevuto un’email che ti informa che la directory di installazione del "modulo in 1 click" non è vuota.

Questo messaggio indica che la **Cartella di root** associata al dominio contiene già uno o più file o cartelle.

Per associare un dominio a un’altra directory, accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}. Clicca su `Hosting`{.action} nella colonna di sinistra e seleziona il nome dell’hosting Web interessato. Clicca sulla scheda `Multisito`{.action}. Nella tabella che appare, clicca sul pulsante `...`{.action} a destra della riga corrispondente al tuo dominio e poi clicca su `Modifica il dominio`{.action}. Infine, inserisci il nome di una nuova **Cartella di root** (verrà creata automaticamente una directory vuota sul tuo hosting Web).

![modify_root_folder](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain.png){.thumbnail}

È inoltre possibile accedere all’hosting Web tramite il protocollo [FTP](/pages/web_cloud/web_hosting/ftp_connection) e quindi eliminare il contenuto della cartella. Dopo averlo salvato localmente o dopo averlo svuotato spostando tutto il suo contenuto in un'altra directory FTP.

### "Either no configuration (ovhConfig or runtime), or the current configuration is not valid (please, double check the module's requirement) (as a reminder, the global configuration is used for module).".

Questo messaggio indica che il file ".ovhconfig" è inesistente o non valido per poter installare il "modulo in 1 click". Questo file contiene la versione di PHP e l’ambiente di esecuzione applicati al tuo hosting Web.

Ti consigliamo di utilizzare la versione PHP più recente disponibile. **Prima** di modificare la configurazione del file ".ovhconfig", assicurati che gli altri siti presenti sull’hosting Web siano compatibili con la nuova versione di PHP e/o con il nuovo ambiente di esecuzione che verrà applicato all’hosting.

Per verificare questa configurazione, consulta la nostra guida "[Modificare la configurazione del proprio hosting Web](/pages/web_cloud/web_hosting/configure_your_web_hosting)".

### "Si è verificato un errore durante il caricamento delle informazioni (There is not enough space on your hosting (you need at least xxx MB)"

![not_enough_space](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/message-not-enough-ftp-space.png){.thumbnail}

Questo messaggio indica che lo [spazio di storage FTP](/pages/web_cloud/web_hosting/ftp_connection) del tuo hosting Web comporta un volume di dati troppo elevato. 

#### Soluzione n°1: eliminare dati per liberare spazio di archiviazione FTP

In questo caso, elimina (o sposta) i dati per installare un nuovo "[modulo in 1 click](/pages/web_cloud/web_hosting/cms_install_1_click_modules)".

In questo caso, [accedi in FTP](/pages/web_cloud/web_hosting/ftp_connection) al tuo hosting Web, [salva localmente](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide) i tuoi dati e poi elimina i file che non sono necessari al funzionamento del tuo sito Web.

> [!primary]
>
> Per informazioni sulla cancellazione dei dati al fine di ridurre la quantità di dati sull’hosting Web, contatta la nostra [Community di utenti](/links/community) o i [partner OVHcloud](/links/partner).<br>
> Il supporto OVHcloud non è autorizzato a fornirti assistenza.
>

#### Soluzione n°2: modificare il piano di hosting Web

> [!primary]
>
> Confronta le nostre diverse [soluzioni di hosting Web](/links/web/hosting).
>

Nel tuo [Spazio Cliente OVHcloud](/links/manager), accedi alla sezione `Web Cloud`{.action}. Clicca su `Hosting`{.action} e seleziona l’hosting Web interessato. Nella pagina visualizzata nella sezione `Abbonamento` - `Servizio`, clicca sul pulsante `...`{.action} `Modifica offerta`{.action}:

![upgrade_hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/upgrade-perso.png){.thumbnail}

Le offerte [Pro](/links/web/hosting-professional-offer) e [Performance](/links/web/hosting-performance-offer) permettono di creare fino a tre "moduli in 1 click" supplementari con un database indipendente per ciascuno di essi. Le offerte **Performance** ti permettono di attivare gratuitamente un server [Web Cloud Databases](/links/web/databases).

### "Impossibile connettersi al database" <a name="delete-the-module"></a>

![wrong_id_database](/pages/assets/screens/email-sending-to-customer/databases/db-connection-failed.png){.thumbnail}

Dopo aver avviato l’installazione del "modulo in 1 click" in modalità avanzata, ricevi un’email che indica che il "modulo in 1 click" non può connettersi al database indicato.

ed è quindi necessario verificare gli identificativi del database. Per trovarli, consulta questa [guida](/pages/web_cloud/web_hosting/cms_install_1_click_modules).

Elimina il "modulo in 1 click". Per farlo, accedi al tuo [Spazio Cliente OVHcloud](/links/manager), sezione `Web Cloud`{.action}. Clicca su `Hosting`{.action} nella colonna di sinistra e seleziona il nome dell’hosting Web interessato. Clicca sulla scheda `CMS in 1 click`{.action}. Nella tabella che appare, clicca sul pulsante `...`{.action} a destra della riga corrispondente al tuo dominio e poi clicca su `Elimina un modulo`{.action}.

![delete_a_module](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/delete-a-module-2.png){.thumbnail}

> [!warning]
>
> **Eliminare elementi dal database può causare l'interruzione del sito Web.**
>
> Assicurarsi di rimuovere solo l'installazione appena avviata. Verifica che si tratti della directory indicata nella colonna `Path` (percorso).
>

Riavvia l’installazione del "modulo in 1 click".

### "You have insufficient rights on this database".

![insufficient_rights](/pages/assets/screens/email-sending-to-customer/databases/db-insufficient-rights.png){.thumbnail}

Questo messaggio viene visualizzato solo quando si installa un "modulo in 1 click" in **modalità avanzata**. Impossibile modificare il database perché la quantità di dati in esso contenuti supera il limite consentito. In questo caso, il database è bloccato in sola lettura.

In questo caso, installa il "modulo in 1 click" passando per la [modalità "semplice"](/pages/web_cloud/web_hosting/cms_install_1_click_modules) o scegli un altro database durante l’installazione in modalità avanzata. Se necessario, ordina una [offerta di database](/links/web/hosting-options-startsql) aggiuntiva.

Se non disponi di altri database e non vuoi ordinare un piano aggiuntivo, [importa una copia locale del database](/pages/web_cloud/web_hosting/sql_database_export) e poi elimina i dati non necessari.

> [!warning]
>
> **Eliminare elementi dal database può causare l'interruzione del sito Web.**
>
> Per ulteriori informazioni, contatta la nostra [Community di utenti](/links/community) o i [partner OVHcloud](/links/partner).<br>
> Non saremo in grado di fornirti assistenza.
>

### "Can't connect to database 'xxxxxxxx' at 'xxxxxx-xxx.eu.clouddb.ovh.net'. The error is: Access denied for user 'xxxx'@'xxxxxxxx' (using password: YES)"

![cant_connect](/pages/assets/screens/email-sending-to-customer/databases/db-cant-connect-access-denied.png){.thumbnail}

Hai avviato l’installazione di un "modulo in 1 click" in [modalità avanzata](/pages/web_cloud/web_hosting/cms_install_1_click_modules) su un database situato su un server [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb). Questo messaggio di errore è stato ricevuto via email. Significa che l’utente indicato al momento dell’installazione non dispone dei diritti sufficienti sul database o che gli identificativi indicati non sono corretti.

In questo caso, modifica innanzitutto i [diritti dell’utente](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server) in modo che disponga dei diritti **Amministratore** o in **Lettura/scrittura** sul database.

Verifica le credenziali di accesso [accedi direttamente](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server) al tuo database server e riavvia l’installazione del "modulo in 1 click".

### "Can't connect to database 'xxxxxxxx' at 'xxxxxxxx.mysql.db'. The error is: Unknown MySQL server host 'xxxxxxxx.mysql.db'"

![cant_connect_server](/pages/assets/screens/email-sending-to-customer/databases/db-cant-connect-server.png){.thumbnail}

Hai avviato l’installazione di un "modulo in 1 click" in [modalità avanzata](/pages/web_cloud/web_hosting/cms_install_1_click_modules) su un database situato su un server [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb). Questo messaggio di errore è stato ricevuto via email. Significa che il nome del database server specificato non è corretto.

Per recuperare il nome del tuo database server, accedi al tuo [Spazio Cliente OVHcloud](/links/manager), clicca su `Web Cloud`{.action}. Clicca su `Web Cloud Databases`{.action} nella colonna di sinistra e seleziona il database server interessato.

Nella nuova pagina, il nome del server da utilizzare è indicato nel riquadro `Informazioni di login`, sottosezione `SQL`, sotto la dicitura `Nome host`.

### Il vecchio sito Web continua a essere visualizzato

Nella scheda `CMS in 1 click` dell’hosting Web che contiene il tuo sito, quando clicchi sul link del tuo sito Web nella colonna `Percorso`, si apre una nuova scheda con il tuo sito Web. Il dominio associato all’installazione viene visualizzato nell’indirizzo del browser. Ad esempio, se il dominio si chiama "domain.tld", potrebbe comparire un altro dominio o una pagina OVHcloud standard.

Questo malfunzionamento può avere diverse cause:

- verifica che il dominio che consulti ("domain.tld") sia quello con cui hai appena installato il "modulo in 1 click".

- Se hai apportato di recente una modifica alla [zona DNS attiva](/pages/web_cloud/domains/dns_zone_edit)/[server DNS](/pages/web_cloud/domains/dns_server_edit) del tuo dominio o un [trasferimento di dominio](/pages/web_cloud/domains/transfer_incoming_generic_domain). Attendi il completamento delle operazioni (4-24 ore per una modifica nella zona DNS e 24-48 ore per una modifica dei server DNS). Non dimenticare di riavviare i tuoi dispositivi (PC, smartphone, box, ecc...) e di svuotare la cache del tuo browser.

- Il dominio è sempre associato al vecchio hosting Web. In questo caso, modifica la [zona DNS attiva](/pages/web_cloud/domains/dns_zone_edit) associata al dominio o i suoi [server DNS](/pages/web_cloud/domains/dns_server_edit). Se la zona DNS attiva del dominio non è gestita in OVHcloud, contatta il provider DNS.

### La password "Amministratore" di accesso all'"interfaccia di amministrazione" del tuo "modulo in 1 click" non funziona <a name="adminpassword"></a>

In caso di rifiuto della password di accesso all’interfaccia di gestione del tuo **C**ontent **M**anagement **S**ystem (**CMS**), consulta il paragrafo "Modificare la password del tuo modulo" della nostra documentazione relativa alla [gestione del tuo "modulo in 1 click"](/pages/web_cloud/web_hosting/cms_manage_1_click_module).

### Il prefisso delle tabelle del database è già utilizzato sul database

Questo errore riguarda solo l'installazione di moduli in 1 click in *modalità avanzata*.

Ti informa via email che, durante il tentativo di installazione del "modulo in 1 click", hai inserito un prefisso di tabelle già utilizzato sul database precedentemente selezionato per installare il "modulo in 1 click". L'installazione verrà annullata. 

Rieseguire l'installazione con un prefisso di tabella o un database diverso per correggere la situazione.

### I DNS del dominio non puntano verso un hosting Web OVHcloud

Questo errore informa che i record DNS del nome di dominio utilizzato per il sito Web non puntano verso un hosting Web OVHcloud. Non è possibile installare un "modulo in 1 click" su un dominio che non punti a un hosting OVHcloud.
Per risolvere il problema, modifica la zona DNS. Per maggiori informazioni sugli indirizzi IP da inserire, consulta la guida [Elenco degli indirizzi IP di cluster e hosting Web](/pages/web_cloud/web_cloud_databases/configure-database-server). Dopodiché sarà necessario [Modificare la zona DNS](/pages/web_cloud/domains/dns_zone_edit).
Se la zona DNS non è ospitata in OVHcloud, contatta il fornitore della zona DNS per richiedere di effettuare le operazioni necessarie.

Una volta terminata, riavvia l'installazione di un nuovo "modulo in 1 click".

### Il tuo database deve essere in versione "X", ma questa è attualmente in versione "Y"

Questo messaggio ti informa che la versione del tuo database è troppo vecchia per installare il "modulo in 1 click". 

Nella stessa email troverai la versione in cui deve trovarsi il tuo database. Le opzioni disponibili sono tre:

- Aggiornamento del **S**istema di **G**estione di **B**ase di **D**ati (SGBD come MySQL, PostgreSQL, MariaDB, ecc.) in una versione più recente.
- Installazione di un nuovo database associato all’hosting Web. Questo assicurandosi che il SGDB e la versione siano compatibili con il "modulo in 1 click" desiderato.
- Se possiedi un server [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb), verifica che il tuo server utilizzi il DBMS e la versione corretti e crea il database di tua scelta.

Una volta terminata, riavvia l'installazione di un nuovo "modulo in 1 click".

## Per saperne di più <a name="go-further"></a>

[Installa il tuo sito con i moduli in 1 click](/pages/web_cloud/web_hosting/cms_install_1_click_modules)

[Problemi ricorrenti nell'utilizzo di un software FTP](/pages/web_cloud/web_hosting/ftp_recurring_ftp_problems)
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).
 
Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).
 
Contatta la nostra [Community di utenti](/links/community).