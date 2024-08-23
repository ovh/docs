---
title: 'Inziare a utilizzare Web Cloud Databases'
excerpt: 'Scopri come utilizzare la soluzione Web Cloud Databases'
updated: 2024-03-18
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

La soluzione Web Cloud Databases permette di usufruire di un'istanza di database, le cui risorse sono dedicate e garantite che ti offrono prestazioni e flessibilità.
La soluzione Web Cloud Databases è associata di default alla rete di hosting Web OVHcloud. È possibile associarla a qualsiasi altra rete tramite una lista di indirizzi IP autorizzati.

**Scopri come iniziare a utilizzare la soluzione Web Cloud Databases**. 

## Prerequisiti

- Disporre di un’[istanza Web Cloud Databases](https://www.ovh.it/cloud/cloud-databases/){.external} (inclusa nelle soluzioni di [hosting Web performance](/links/web/hosting))
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager){.external}

## Procedura

### Attiva il tuo server Web Cloud Databases incluso con la tua offerta di hosting Web

Se la tua offerta di hosting include l'opzione Web Cloud Databases, accedi al tuo [Spazio Cliente OVHcloud](/links/manager){.external}. Dalla sezione `Web Cloud`{.action}, clicca su `Hosting`{.action} nella colonna di sinistra.

Nella scheda `Informazioni generali`, riquadro `Configurazione`, clicca sul pulsante `...`{.action} a destra del **Web Cloud Databases**. Clicca su `Attiva`{.action} per avviare il processo di attivazione.

![Informazioni generali](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/web-cloud-databases-enable.png){.thumbnail}

Per completare l'operazione segui le istruzioni riportate qui di seguito per determinare il tipo e la versione del tuo server Web Cloud Databases. e sarà accessibile dalla colonna di sinistra nel `Web Cloud Databases`{.action}.

### Visualizza le informazioni generali dell'istanza

Accedi allo [Spazio Cliente OVHcloud](/links/manager){.external}, clicca su `Web Cloud Databases`{.action} nel menu a sinistra e seleziona la tua istanza Web Cloud Databases. Assicurati di trovarti nella scheda `Informazioni generali`{.action}.

> [!primary]
>
> Il nome del servizio Web Cloud Databases nello Spazio Cliente OVHcloud contiene una parte del tuo identificativo cliente e termina con tre numeri (001 per il primo servizio Web Cloud Databases installato, 002 per il secondo, ecc...).
>

In questa interfaccia puoi visualizzare anche le informazioni principali relative alla tua istanza. Ti consigliamo di verificarne la correttezza e assicurarti che corrispondano alle descrizioni indicate di seguito:

|Informazione|Descrizione|
|---|---|
|Stato del servizio|Indica se l’istanza è attiva, in stato di riavvio o sospesa. Per poter eseguire operazioni, l’istanza deve essere attiva.|
|Tipo|Indica il sistema di database utilizzato dal server.|
|Versione|Indica la versione del sistema di database utilizzata dal server. Ti ricordiamo di verificare la compatibilità del tuo sito con la versione scelta.|
|Saturazione CPU| Indica il tempo CPU passato in saturazione. La tua istanza Web Cloud Databases non è limitata in termini di CPU, ma devi fare attenzione a non sovraccaricare la CPU del tuo Web Cloud Databases.|
|RAM|Indica la memoria disponibile sulla tua istanza e segnala l’eventuale raggiungimento della soglia limite. La tua istanza Web Cloud Databases dispone di risorse dedicate e garantite: la memoria RAM.  Se necessario, è possibile aumentarla e ricevere una notifica in caso di utilizzo di tutte le risorse disponibili.|
|Infrastruttura|Indica l’infrastruttura utilizzata dall’istanza. Questa informazione è relativa alla piattaforma di OVHcloud.|
|Datacenter|Indica il datacenter in cui è stata creata l’istanza. Assicurati che corrisponda a quello dell’hosting Web OVHcloud in cui è (o sarà) ospitato il tuo sito.|
|Host|Indica il server OVHcloud in cui è stata creata l’istanza. Questa informazione è relativa all'infrastruttura OVHcloud e, in caso di [incidenti](http://status.ovh.net/){.external}, può essere presente nelle nostre comunicazioni.|

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/general-information.png){.thumbnail}

### Crea un database

> [!primary]
>
> Questo step non si applica al sistema di database Redis.
>

Per creare il tuo primo database sull’istanza Web Cloud Databases, clicca sulla scheda `Database`{.action} e poi sul pulsante `Aggiungi database`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database.png){.thumbnail}

Nella finestra che appare, oltre alla creazione del database, puoi scegliere di:

-  **creare un utente**: quest’ultimo potrà effettuare delle richieste sul tuo database (come la lettura, l’inserimento o la cancellazione dei dati); 

- **aggiungere un indirizzo IP autorizzato**: le richieste provenienti dall’IP aggiunto saranno autorizzate ad accedere ai tuoi database.

In base alla tua scelta, completa le informazioni richieste e poi clicca su `Conferma`{.action}. 

|Informazione|Descrizione|
|---|---|
|Nome del database|È il nome del tuo futuro database.|
|Nome utente|È l’utente che potrà connettersi al tuo database ed effettuare richieste (opzionale se non hai selezionato la voce *Creare un utente*).|
|Permessi|Sono le autorizzazioni che saranno assegnate all’utente; per un utilizzo standard, seleziona `Amministratore`{.action} (facoltativo se non hai selezionato la voce *Creare un utente*).|
|Password|Indica una password, poi confermala (opzionale se non hai selezionato la voce *Creare un utente*).|
|IP/maschera|È l’indirizzo IP o della maschera d’IP del server che saranno autorizzati ad accedere ai tuoi database (opzionale se non hai selezionato la voce *Aggiungere un indirizzo IP autorizzato*).|

> [!warning]
>
> Per motivi di sicurezza, durante l’inserimento dei dati ti invitiamo a rispettare i requisiti richiesti.
>

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database-create-user-confirmation.png){.thumbnail}

### Crea un utente 

> [!primary]
>
> Questo step non si applica al sistema di database Redis.
>

Se hai creato l'utente insieme al database, questo step è opzionale. Per un progetto più complesso, invece, potrebbe essere necessario autorizzare più utenti a lavorare sullo stesso database. Ad esempio, uno potrebbe disporre dei permessi di lettura e scrittura mentre l’altro dei permessi di sola lettura.

Se un utente aggiuntivo non è necessario al tuo progetto, puoi passare allo step successivo. In caso contrario, per creare un utente sulla tua istanza Web Cloud Databases, clicca sulla scheda `Utenti e diritti`{.action} e poi sul pulsante `Aggiungi un utente`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/add-user.png){.thumbnail}

Inserisci le informazioni richieste nella finestra che appare e poi clicca su `Conferma`{.action}.

|Informazione|Descrizione|
|---|---|
|Nome utente|È l'utente che sarà in grado di accedere alla tua istanza. È possibile assegnargli i permessi nel passaggio successivo.|
|Password|Seleziona una password e poi confermala. |

> [!warning]
>
> Per motivi di sicurezza, durante l’inserimento dei dati ti invitiamo a rispettare i requisiti richiesti.
>

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/add-user-confirmation.png){.thumbnail}

Una volta creato l’utente è necessario assegnargli i permessi per autorizzarlo a effettuare operazioni sul database (come lettura, inserimento e cancellazione dei dati): clicca sull’icona a forma di ingranaggio e seleziona `Gestisci i diritti`{.action}. Si apre una nuova pagina in cui puoi scegliere i permessi da assegnare. Per un utilizzo standard, scegli Amministratore.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/manage-rights-2.png){.thumbnail}

### Importa un database

> [!primary]
>
> Questo step mostra come importare un backup di un database già esistente. Se non è il tuo caso, passa allo step successivo.
>

Esistono diverse tecniche per importare un database e OVHcloud mette anche a disposizione un tool nello Spazio Cliente. Puoi comunque utilizzare la modalità che preferisci in base alle tue conoscenze.

Negli step successivi descriviamo come importare un database attraverso lo Spazio Cliente OVHcloud.

- **Step 1: accedi all’interfaccia d’importazione**

Seleziona la scheda `Database`{.action}, clicca sull’icona a forma di ingranaggio e poi su `Importa un file`{.action}. Nella nuova finestra, seleziona l’opzione `Importa un nuovo file`{.action} e clicca su `Continua`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/import-file.png){.thumbnail}

- **Step 2: seleziona e invia il file di backup**

Assegna un nome al file che ti permetterà di identificare questo backup in futuro nel caso in cui volessi ripristinarlo. In seguito, accanto a **File**, seleziona il file di backup del database sul tuo computer, poi clicca su `Continua`{.action}. Attendi la conferma di invio del file e poi clicca sul pulsante `Continua`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/database-import-new-file-step-2.png){.thumbnail}

- **Step 3: avvia l'importazione del database**

A questo punto scegli se applicare o meno le seguenti opzioni aggiuntive, poi clicca su `Conferma`{.action}.

|Opzioni aggiuntive|Descrizione|
|---|---|
|Svuota il database attuale|Il contenuto del database viene totalmente eliminato e sostituito da quello del backup.|
|Ricevi una email al termine dell’importazione|Una volta completata l'importazione del database, riceverai una notifica via email.|

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/database-import-new-file-step-3-send-email.png){.thumbnail} 

### Autorizza un indirizzo IP <a name="trustip"></a>

Affinché l’accesso alla tua istanza Web Cloud Databases funzioni correttamente, è fondamentale indicare gli IP o i blocchi di IP che possono connettersi ai tuoi database. Per fare ciò, clicca sulla scheda `IP autorizzati`{.action} e poi sul pulsante `Aggiungere un IP/mask`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask-2.png){.thumbnail}

Nella finestra che appare indica l’indirizzo IP o la mask da autorizzare in `IP/mask`{.action} e poi, se vuoi, aggiungi una descrizione. Decidi se vuoi fornire un accesso soltanto ai database o anche via SFTP. Infine clicca su `Conferma`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask-confirmation.png){.thumbnail}

### Autorizza la connessione a un hosting Web OVHcloud <a name="trustip"></a>

Di default, la soluzione Web Cloud Databases è automaticamente associata agli hosting Web OVHcloud. Se necessario, è possibile disattivare l'accesso degli hosting Web OVHcloud al database Web Cloud Databases.

Clicca sulla scheda `IP autorizzati`{.action} e poi sul pulsante `Accesso agli hosting Web OVHcloud`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/access-to-ovhcloud-web-hosting.png){.thumbnail}

### Collega il tuo sito al database

Una volta creato il database, che uno o più utenti dispongono dei diritti su quest'ultima e che sull'istanza Web Cloud Databases sono stati autorizzati almeno un indirizzo IP o gli hosting Web OVHcloud, non resta che collegare il sito al database. Questo step può essere effettuato in diversi modi, in base al sito o al CMS utilizzato (WordPress, Joomla!, ecc...) e allo step in cui ti trovi se installi un sito Web.

In ogni caso, è necessario disporre di queste cinque informazioni:

|Informazione|Descrizione|
|---|---|
|Nome del database|È il nome assegnato in fase di creazione del database. Puoi trovare tutti i database creati sulla tua istanza Web Cloud Databases dalla scheda `Database`{.action}.|
|Nome utente|È il nome utente definito durante la creazione del database o degli eventuali utenti aggiuntivi. Puoi trovare tutti gli utenti creati sulla tua istanza Web Cloud Databases dalla scheda `Utenti e diritti`{.action}.|
|Password dell’utente|È la password associata all'utente definita durante le operazioni precedenti.|
|Hostname del server|È l’indirizzo del server utilizzato dal tuo sito per connettersi al tuo database. Questa informazione è disponibile nello Spazio Cliente OVHcloud, scheda **Informazioni generali** > `Informazioni di login`{.action}.|
|Porta del server|È la porta di connessione all'istanza Web Cloud Databases, che permette l’accesso del tuo sito al database. Questa informazione è disponibile nello Spazio Cliente OVHcloud, scheda **Informazioni generali** > `Informazioni di login`{.action}.|

> [!warning]
>
> Il campo `port`{.action} potrebbe non essere disponibile nella configurazione del sito. È necessario aggiungere questo campo dopo il nome dell'host del server, separandoli con un *:*. <br><br>
> Ad esempio, per il nome host `zz1111111-002.eu.clouddb.ovh.net` con la porta SQL `34567`, dovrai inserire `zz1111111-002.eu.clouddb.ovh.net:34567` nel Parte "Host" / "Nome host".
>

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/login-information.png){.thumbnail}

### Recupera i log del tuo server Web Cloud Databases

Per accedere ai log della soluzione Web Cloud Databases, consulta la nostra guida "[Web Cloud Databases - Come recuperare i log?](/pages/web_cloud/web_cloud_databases/retrieve-logs)".

## Per saperne di più

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).