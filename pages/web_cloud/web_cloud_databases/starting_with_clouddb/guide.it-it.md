---
title: 'Iniziare a utilizzare Web Cloud Databases'
excerpt: 'Scopri come iniziare a utilizzare la soluzione Web Cloud Databases'
updated: 2026-03-24
---

## Obiettivo

La soluzione Web Cloud Databases offre un'istanza di database con risorse dedicate e garantite, per prestazioni e flessibilità ottimali.
Di default, la soluzione Web Cloud Databases è associata alla rete di hosting Web OVHcloud. È possibile associarla anche a qualsiasi altra rete tramite una lista di indirizzi IP autorizzati.

**Scopri come iniziare a utilizzare la soluzione Web Cloud Databases.**

## Prerequisiti

- Un'[istanza Web Cloud Databases](/links/web/databases) (inclusa in un piano di [hosting Web Performance](/links/web/hosting)).

<!-- CP-NAV-START:web-cloud-databases -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Seleziona il tuo servizio di database

---
<!-- CP-NAV-END:web-cloud-databases -->

## Procedura

### Attivazione del server Web Cloud Databases incluso con il piano di hosting Web

Se il piano di hosting include l'opzione Web Cloud Databases, clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **3** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting), poi seleziona l'hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Dalla scheda `Informazioni generali`, nella sezione `Configurazione`, clicca sul pulsante `...`{.action} a destra di **Web Cloud Databases**. Clicca poi su `Attiva`{.action} per avviare il processo di attivazione.
>>
>> ![Informazioni generali](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/web-cloud-databases-enable.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Segui le istruzioni fornite per determinare il tipo e la versione del server Web Cloud Databases. Sarà poi accessibile dalla colonna di sinistra in `Web Cloud Databases`{.action}.

### Visualizzare le informazioni generali dell'istanza

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **2** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Web Cloud Databases](/links/control-panel/web-cloud-databases), poi seleziona la soluzione interessata.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > Il nome del servizio Web Cloud Databases nello Spazio Cliente OVHcloud contiene una parte del riferimento cliente e termina con tre cifre (001 per il primo servizio Web Cloud Databases installato, 002 per il secondo, ecc.).
>>
> **Passaggio 2**
>>
>> Assicurati di trovarti nella scheda `Informazioni generali`{.action}.
>>
>> Verifica che le informazioni visualizzate siano corrette o corrispondano alle indicazioni riportate di seguito.
>>
>> |Informazione|Dettagli|
>> |---|---|
>> |Stato del servizio|Indica se l'istanza è avviata, in fase di riavvio o sospesa. L'istanza deve essere avviata per poter eseguire operazioni.|
>> |Tipo|Indica il sistema di database utilizzato dal server.|
>> |Versione|Indica la versione del sistema di database utilizzata dal server. Verifica la compatibilità del tuo sito Web con la versione scelta.|
>> |Saturazione CPU|Indica il tempo di CPU in saturazione. L'istanza Web Cloud Databases non è limitata in termini di CPU, ma è necessario assicurarsi di non sovraccaricarla.|
>> |RAM|Indica la memoria RAM disponibile per l'istanza e gli eventuali superamenti di memoria. L'istanza Web Cloud Databases dispone di risorse dedicate e garantite: la sua memoria RAM. Se necessario, è possibile potenziarla e ricevere una notifica in caso di consumo totale delle risorse di memoria dell'istanza.|
>> |Infrastruttura|Indica l'infrastruttura utilizzata dall'istanza. Si tratta di un'informazione inerente all'infrastruttura OVHcloud.|
>> |Datacenter|Indica il datacenter in cui è stata creata l'istanza.|
>> |Host|Indica il server OVHcloud su cui è stata creata l'istanza. Si tratta di un'informazione inerente all'infrastruttura OVHcloud e può essere utilizzata nelle comunicazioni relative agli [incidenti OVHcloud](https://www.status-ovhcloud.com/).|
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/general-information.png){.thumbnail}

### Creare un database

> [!primary]
>
> Questo passaggio non si applica al sistema di database Redis.

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **4** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Web Cloud Databases](/links/control-panel/web-cloud-databases), poi seleziona la soluzione interessata.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sulla scheda `Databases`{.action}.
>>
> **Passaggio 3**
>>
>> Clicca su `Aggiungi un database`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > La creazione di schemi PostgreSQL non è attualmente disponibile sui server Web Cloud Databases.
>>
> **Passaggio 4**
>>
>> Compila i campi rispettando i criteri indicati. È possibile creare direttamente un utente selezionando la casella **"Crea un utente"**:
>>
>> - **Nome del database** (obbligatorio): è il nome del futuro database.
>> - **Nome utente** (solo se la casella `Crea un utente` è selezionata): l'utente che potrà connettersi al database ed eseguire query.
>> - **Diritti** (solo se la casella `Crea un utente` è selezionata): i permessi associati all'utente sul database. Per un utilizzo standard, seleziona `Amministratore`{.action}. I diritti possono essere modificati successivamente.
>> - **Password**/**Conferma password** (solo se la casella `Crea un utente` è selezionata): seleziona una password, poi confermala.
>>
>> Clicca su `Conferma`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database-confirmation.png){.thumbnail}

### Creare un utente

> [!primary]
>
> Questo passaggio non si applica al sistema di database Redis.

Se l'utente è stato creato contemporaneamente al database nello passaggio precedente, questo passaggio è facoltativo. Tuttavia, un progetto potrebbe richiedere più utenti con diritti diversi (ad esempio, lettura/scrittura per uno e sola lettura per un altro).

Se il progetto non necessita di un utente aggiuntivo, è possibile passare allo passaggio successivo. In caso contrario, clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **4** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Web Cloud Databases](/links/control-panel/web-cloud-databases), poi seleziona la soluzione interessata.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sulla scheda `Utenti e diritti`{.action}.
>>
> **Passaggio 3**
>>
>> Clicca su `Aggiungi un utente`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/add-user.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Inserisci un "nome utente" e una "password", poi clicca su `Conferma`{.action}.

Per modificare i diritti di un utente esistente, consulta la guida "[Web Cloud Databases - Modificare i diritti di un utente](/pages/web_cloud/web_cloud_databases/modify_rights_for_users)".

### Importare un database

> [!primary]
>
> Questo passaggio si applica se vuoi importare un backup di un database esistente. In caso contrario, passa allo passaggio successivo.

Per importare un database, consulta la guida "[Ripristinare e importare un database sul server di database](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server)".

Nella guida sono descritti diversi metodi di importazione.

### Autorizzare un indirizzo IP

Affinché l'istanza Web Cloud Databases funzioni, è necessario indicare gli IP o gli intervalli di IP autorizzati a connettersi ai database.

Per farlo, clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **4** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Web Cloud Databases](/links/control-panel/web-cloud-databases), poi seleziona la soluzione interessata.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nella pagina visualizzata, clicca sulla scheda `IP autorizzati`{.action}.
>>
>> ![IP autorizzati](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorised-ips.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Clicca sul pulsante `Aggiungi un indirizzo IP/mask`{.action} sopra la tabella.
>>
>> ![Interfaccia IP autorizzati](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/tab-0000-sftp-hosting-enabled.png){.thumbnail}
>>
>> > [!success]
>> >
>> > Per modificare un indirizzo IP o un intervallo di IP già autorizzato, clicca sul pulsante `...`{.action} a destra della riga corrispondente nella tabella, poi su `Modifica la whitelist`{.action}.
>>
> **Passaggio 4**
>>
>> Nella finestra che si apre, diversi campi devono essere compilati:
>>
>> ![Aggiungere un indirizzo IP o mask](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask-confirmation.png){.thumbnail}
>>
>> - `IP/mask *`{.action}: Inserisci l'indirizzo IP (ad esempio `203.0.113.44`) o l'intervallo di IP (ad esempio `203.0.113.0/24`, che rappresenta tutti gli indirizzi IP da `203.0.113.0` a `203.0.113.255`) da autorizzare sulla soluzione Web Cloud Databases.
>> - `Descrizione`{.action} (facoltativo): È possibile aggiungere informazioni sul ruolo dell'indirizzo IP o dell'intervallo di IP interessato.
>> - `Databases`{.action}: Seleziona questa casella per consentire all'indirizzo IP o all'intervallo di IP di accedere ai database della soluzione Web Cloud Databases.
>> - `SFTP`{.action}: Seleziona questa casella per consentire all'indirizzo IP o all'intervallo di IP di accedere ai log della soluzione Web Cloud Databases.
>>
>> > [!warning]
>> >
>> > Si sconsiglia fortemente di selezionare la casella `Databases`{.action} per autorizzare l'intervallo di IP `0.0.0.0/0` ad accedere ai database.
>> >
>> > Questo consentirebbe a tutti gli indirizzi IPv4 esistenti di accedere ai database.
>>
>> Una volta inserite le informazioni, clicca sul pulsante `Conferma`{.action}.

### Autorizzare le connessioni da un hosting Web OVHcloud <a name="trustip"></a>

Di default, la soluzione Web Cloud Databases è automaticamente associata agli hosting Web OVHcloud. Se lo desideri, puoi disattivare l'accesso degli hosting Web OVHcloud al tuo Web Cloud Databases.

Per farlo, consulta i casi particolari nella guida "[Web Cloud Databases - Come autorizzare un indirizzo IP?](/pages/web_cloud/web_cloud_databases/authorise_IP)" per attivare o disattivare l'accesso degli hosting Web OVHcloud al tuo Web Cloud Databases.

### Associare il sito Web al database

Ora che il database è stato creato, uno o più utenti dispongono dei diritti necessari e almeno un indirizzo IP o gli hosting Web OVHcloud sono stati autorizzati sull'istanza Web Cloud Databases, non resta che associare il sito Web al database. Questo passaggio può essere eseguito in diversi modi, a seconda del sito Web o del CMS (WordPress, Joomla!, ecc.) utilizzato, nonché della fase di installazione del sito Web.

A tal fine, sono necessarie le seguenti 5 informazioni:

|Informazione|Descrizione|
|---|---|
|Nome del database|Il nome definito al momento della creazione del database.|
|Nome utente|Il nome utente definito al momento della creazione del database o un eventuale utente aggiuntivo aggiunto in seguito.|
|Password dell'utente|La password associata all'utente, definita negli step precedenti.|
|Hostname del server|Il server da indicare affinché il sito Web possa connettersi al database.|
|Porta del server|La porta di connessione all'istanza Web Cloud Databases, necessaria affinché il sito Web possa connettersi al database.|

Per recuperare queste informazioni, clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **2** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Web Cloud Databases](/links/control-panel/web-cloud-databases), poi seleziona la soluzione interessata.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Recupera le seguenti informazioni di connessione:
>>
>> - **Server (hostname) e porta:** visibili nella scheda `Informazioni generali`{.action}, nella sezione `Informazioni di connessione`.
>> - **Nome utente:** visibile nella scheda `Utenti e diritti`{.action}.
>> - **Password:** la password associata all'utente. Se l'hai dimenticata, accedi alla scheda `Utenti e diritti`{.action}, clicca su `...`{.action} a destra dell'utente interessato, poi su `Modifica la password`{.action}.
>>
>> > [!warning]
>> >
>> > Se modifichi la password di un utente del database, tutte le applicazioni/siti Web che accedono a questo database devono essere aggiornati di conseguenza.

> [!warning]
>
> Il campo `porta`{.action} potrebbe non essere disponibile nella configurazione del sito Web. È necessario aggiungere questo campo dopo l'hostname del server, separandoli con *:*.
>
> Ad esempio, per l'hostname `aaXXXXX-XXX.eu.clouddb.ovh.net` con la porta SQL `12345`, sarà necessario inserire `aaXXXXX-XXX.eu.clouddb.ovh.net:12345` nella sezione "Host" / "Hostname".

### Recuperare i log del server Web Cloud Databases

Per accedere ai log della soluzione Web Cloud Databases, consulta la guida "[Web Cloud Databases - Come recuperare i log?](/pages/web_cloud/web_cloud_databases/retrieve-logs)".

## Per saperne di più

[Creare database e utenti sul server di database](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server)

[Connettersi al database del server di database](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server)

[Salvare ed esportare un database sul server di database](/pages/web_cloud/web_cloud_databases/save-export-on-database-server)

[Ripristinare e importare un database sul server di database](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server)

[Configurare il server di database](/pages/web_cloud/web_cloud_databases/configure-database-server)

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre [soluzioni di supporto](/links/support).

Per servizi specializzati (SEO, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Contatta la nostra [Community di utenti](/links/community).
