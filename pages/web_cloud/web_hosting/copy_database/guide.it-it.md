---
title: "Duplicare il contenuto di un database in un altro"
excerpt: "Questa guida ti mostra come copiare il contenuto di un database OVHcloud in un altro database OVHcloud"
updated: 2023-11-22
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Il database è un elemento centrale nella costruzione di un sito Web dinamico. Durante il ciclo di vita del sito Web, per motivi pratici o tecnici, potrebbe essere necessario copiare il contenuto del database in un altro database [start SQL](/links/web/hosting-options-startsql) o [Web Cloud Databases](/links/web/databases).

**Questa guida ti mostra come copiare il contenuto di un database OVHcloud in un altro database OVHcloud**

> [!primary]
>
> Grazie a questa funzionalità, i database non vengono spostati ma copiati. Il database originale non viene eliminato automaticamente, a differenza di un processo di migrazione. Solo il contenuto del database di origine viene duplicato per essere copiato nel database di destinazione.
>

## Prerequisiti

- Disporre di offerte di database [start SQL](/links/web/hosting-options-startsql) e/o [Web Cloud Databases](/links/web/databases). Prima di poter utilizzare lo strumento di replica è necessario creare preventivamente i due database interessati.
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)
- di disporre dei diritti sufficienti su tutti i servizi di database interessati. Per maggiori informazioni consulta la nostra guida [Gestire i contatti dei servizi](/pages/account_and_service_management/account_information/managing_contacts).

## Procedura

Prima di iniziare, assicurati che:

- Il vostro **D**ata**b**ase **M**anagement **S**ystem (MySQL, PostgreSQL, ecc...) è lo stesso per i vostri due database (sorgente e destinazione).
- La versione del tuo DBMS è la stessa per i tuoi due database (sorgente e destinazione). Anche se la copia può funzionare con versioni diverse, è consigliabile utilizzare le stesse versioni.
- Il contenuto del database di origine non deve superare le dimensioni del database di destinazione.

### Identificare il database sorgente

Questa funzionalità è disponibile per la copia: 

- un database [Start SQL](/links/web/hosting-options-startsql) (incluso in alcuni dei nostri [hosting Web](/links/web/hosting) o [ordinato separatamente](/links/web/hosting-options-startsql);
- di un database presente su un server [Web Cloud Databases](/links/web/databases) (incluso con i nostri [hosting Performance](/links/web/hosting-performance-offer) o [ordinato separatamente](/links/web/databases). 

Il percorso per accedere al database di origine è diverso in base alla situazione.

#### Database Start SQL

Nel tuo [Spazio Cliente OVHcloud](/links/manager), seleziona `Web Cloud`{.action} nel menu in alto nell’interfaccia. Nella colonna a sinistra, clicca sulla scheda `Hosting`{.action} e poi sull’hosting Web in cui si trova il database di origine il cui contenuto deve essere copiato.

![Lista degli hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/web-hosting-selection.png){.thumbnail}

Clicca sulla scheda `Database`{.action} per visualizzare la lista dei database Start SQL disponibili.

![Lista dei BDD Start SQL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/sharedsql-dashboard-db-list.png){.thumbnail}

#### Web Cloud Databases

Nel tuo [Spazio Cliente OVHcloud](/links/manager), seleziona `Web Cloud`{.action} nel menu in alto nell’interfaccia. Nella colonna a sinistra, clicca sulla scheda `Web Cloud Databases`{.action} e seleziona il server Web Cloud Databases in cui si trova il database sorgente il cui contenuto deve essere copiato.

![Lista dei server WCD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/wcdb-server-selection.png){.thumbnail}

Clicca sulla scheda `Database`{.action} per visualizzare la lista dei database presenti sul tuo server Web Cloud Databases.

![Lista dei database WCD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/wcdb-dashboard-db-list.png){.thumbnail}

### Copia il contenuto di un database

Sempre nella scheda `Database`{.action} e qualunque sia la tua offerta, clicca sul pulsante `...`{.action} a destra della riga corrispondente al database di cui vuoi copiare il contenuto, poi seleziona `Copia il database`{.action}.

![CTA_copiare_BDD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/copy-db-tool.png){.thumbnail}

Verrà visualizzata una finestra che consente di identificare il database di destinazione.

![Interfaccia copia BDD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-step-1.png){.thumbnail}

Se non si dispone di un database di destinazione e come illustrato nella schermata seguente, fare clic sul collegamento per acquistare un nuovo database:

![Lista dei database WCD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-link-to-buy-db.png){.thumbnail}

È possibile scegliere se acquistare un'offerta "[start SQL](/links/web/hosting-options-startsql)" o un server di database "[Web Cloud Databases](/links/web/databases)".

> [!primary]
>
> Il nuovo database acquistato non è abilitato per impostazione predefinita. Ricordati di attivarla. Per farlo, accedi al tuo [Spazio Cliente OVHcloud](/links/manager), sezione `Web Cloud`{.action}.
> 
> - Per un database "Shared SQL": consulta la nostra guida "[Creare un database sul proprio hosting Web](/pages/web_cloud/web_hosting/sql_create_database)";
> - Per creare un database che sarà presente su un server "Web Cloud Databases": consulta la nostra guida "[Creare un database su un server Web Cloud Databases](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server)".
>

Se si dispone già di un database di destinazione, scegliere innanzitutto il tipo di database:

- `Copiare verso un database`{.action}: per copiare il contenuto del database di origine in un database **Start SQL** (destinazione).
- `Copiare verso un Web Cloud Databases`{.action}: per copiare il contenuto del database di origine in un database **Web Cloud Databases** (destinazione).

#### Scelta 1 - Copiare verso un database Start SQL

Hai selezionato `Copiare verso un database`{.action}. Vengono visualizzati due elenchi a discesa. Clicca sulla prima e seleziona l’hosting Web sul quale si trova il database Start SQL di destinazione. Una volta selezionato l'hosting Web, clicca sul secondo elenco a discesa per scegliere il database Start SQL di destinazione.

Clicca su `Continua`{.action}. Viene visualizzato il seguente messaggio di conferma:

![Messaggio di conferma copia BDD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-step-2.png){.thumbnail}

Se non si desidera sovrascrivere il database di destinazione selezionato, fare clic su `Indietro`{.action} per modificare la scelta o su `Annulla`{.action} per annullare tutto. In caso contrario, clicca su `Conferma`{.action} per confermare la duplicazione del contenuto del database di origine verso il database di destinazione.

Viene visualizzato il seguente messaggio di conferma:

![Messaggio di riuscita BDD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-copied-successfull.png){.thumbnail}

La copia del database potrebbe richiedere alcuni minuti. Per verificare che la copia sia stata presa in carico, clicca sulla scheda `Task in corso`{.action}. Nella tabella viene visualizzata una nuova riga con lo stato "Pianificato" per la copia. Al termine dell'operazione, la linea scompare.

![Attività in corso](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-ongoing-tasks.png){.thumbnail}

#### Scelta 2 - Copia in un database presente su un server Web Cloud Databases

Hai selezionato `Copiare verso un Web Cloud Databases`{.action}. Vengono visualizzati due elenchi a discesa. Clicca sulla prima e seleziona il servizio Web Cloud Databases sul quale si trova il database di destinazione. Una volta selezionata la soluzione Web Cloud Databases, clicca sul secondo elenco a discesa per scegliere il database di destinazione presente sul tuo server Web Cloud Databases.

Clicca su `Continua`{.action}. Viene visualizzato il seguente messaggio di conferma:

![Messaggio di conferma copia BDD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-step-2.png){.thumbnail}

Se non si desidera sovrascrivere il database di destinazione selezionato, fare clic su `Indietro`{.action} per modificare la scelta o su `Annulla`{.action} per annullare tutto. In caso contrario, clicca su `Conferma`{.action} per confermare la duplicazione del contenuto del database di origine verso il database di destinazione.

La copia del database potrebbe richiedere alcuni minuti. Per verificare che la copia sia stata presa in carico, clicca sulla scheda `Task in corso`{.action}. Nella tabella viene visualizzata una nuova riga con lo stato "Pianificato" per la copia. Al termine dell'operazione, la linea scompare.

![Attività in corso](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-ongoing-tasks.png){.thumbnail}

### Configura il tuo sito Web con il nuovo database

Una volta effettuata la copia del database di origine, sarà necessario effettuare un’ultima operazione per utilizzare il nuovo database.

Nella scheda `Task in corso`{.action}, assicurati che la copia sia terminata (la riga corrispondente alla copia è scomparsa).

Per connettere il nuovo database al sito Web, modifica il file di configurazione del tuo **C**ontent **M**anagement **S**ystem (**CMS**) e inserisci le informazioni di connessione del nuovo database.

> [!warning]
>
> Prima di apportare qualsiasi modifica, consigliamo di effettuare una copia del file di configurazione del sito Web. È la garanzia di poter sostituire la nuova versione del file con quella precedente in caso di errore di configurazione.

Ad esempio, se utilizzi WordPress, è necessario modificare il file di configurazione *wp-config.php* presente nella root della cartella del tuo WordPress, sullo spazio di storage (FTP) del tuo hosting, quindi aggiornare i campi seguenti:

- DB_NAME
- DB_USER
- DB_PASSWORD
- DB_HOST

Per maggiori informazioni o se utilizzi un altro CMS, consulta la nostra guida [Modificare la password del database di un hosting Web](/pages/web_cloud/web_hosting/sql_change_password).

> [!primary]
>
> Copiare il database non è una migrazione. Il database di origine esiste ancora fino a quando non viene eliminato. Ciò significa che, se necessario, potrete sempre riconfigurare il vostro sito web con il vecchio database.
>

### Casi d'uso

Durante il processo di copia del contenuto del database potrebbero verificarsi problemi.

#### Nell'elenco non compare alcun database

Questa notifica indica che è attivo un solo database. Per copiare il database di origine, è necessario disporre anche di un database di destinazione attivo. Per farlo, puoi:

- Configura un nuovo database disponibile sul tuo hosting Web;
- Configura un nuovo database sul tuo server [Web Cloud Databases](/links/web/databases);
- Ordinare un'offerta "[start SQL](/links/web/hosting-options-startsql)" o un server di database "[Web Cloud Databases](/links/web/databases)"

#### Hai già un'azione in corso

Questo messaggio indica che sul database è già in corso un'operazione. Clicca sulla scheda `Task in corso`{.action} e verifica di avere un'operazione già in corso. In caso affermativo, attendi il completamento dell’operazione per riprovare a copiare il database.

#### Il database di destinazione non contiene spazio sufficiente

Spazio insufficiente nel database di destinazione. Le soluzioni disponibili sono due:

- Ordinare un nuovo database [start SQL](/links/web/hosting-options-startsql) con più spazio.
- Se possiedi un server [Web Cloud Databases](/links/web/databases), scegli un'offerta Web Cloud Databases con più spazio di storage.

#### I database di origine e di destinazione sono incompatibili

Questa notifica significa che il **D**ata**b**ase **M**anagement **S**ystem (**DBMS**) del database di origine non è lo stesso del DBMS del database di destinazione.

Ad esempio, questo errore può verificarsi quando si utilizza MySQL per il database di origine e PostgreSQL per il database di destinazione.

## Per saperne di più

[Accedi allo Spazio Cliente OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-login)

[Eseguire il backup e l'esportazione di un database sul database server](/pages/web_cloud/web_cloud_databases/save-export-on-database-server)

[Ripristinare e importare un database sul tuo database server](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server/)

[Recuperare il backup del database di un hosting Web](/pages/web_cloud/web_hosting/sql_database_export)

[Importare un backup nel database di un hosting Web](/pages/web_cloud/web_hosting/sql_importing_mysql_database)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).