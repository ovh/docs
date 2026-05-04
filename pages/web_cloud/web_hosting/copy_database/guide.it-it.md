---
title: "Duplicare il contenuto di un database in un altro"
excerpt: "Questa guida ti mostra come copiare il contenuto di un database OVHcloud in un altro database OVHcloud"
updated: 2026-03-31
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Obiettivo

Il database è un elemento centrale nella costruzione di un sito Web dinamico. Durante il ciclo di vita del sito Web, per motivi pratici o tecnici, potrebbe essere necessario copiare il contenuto del database in un altro database [start SQL](/links/web/hosting-options-startsql) o [Web Cloud Databases](/links/web/databases).

**Questa guida ti mostra come copiare il contenuto di un database OVHcloud in un altro database OVHcloud.**

> [!primary]
>
> Grazie a questa funzionalità, i database non vengono spostati ma copiati. Il database originale non viene eliminato automaticamente, a differenza di un processo di migrazione. Solo il contenuto del database di origine viene duplicato per essere copiato nel database di destinazione.
>

## Prerequisiti

- Disporre di offerte di database [start SQL](/links/web/hosting-options-startsql) e/o [Web Cloud Databases](/links/web/databases). Prima di poter utilizzare lo strumento di replica è necessario creare preventivamente i due database interessati.
- Disporre dei diritti sufficienti su tutti i servizi di database interessati. Per maggiori informazioni consulta la nostra guida [Gestire i contatti dei servizi](/pages/account_and_service_management/account_information/managing_contacts).

<!-- CP-NAV-START:web-hosting -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Hosting](/links/control-panel/web-hosting)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Hosting`{.action} > Seleziona il tuo hosting web

---
<!-- CP-NAV-END:web-hosting -->

## Procedura

Prima di iniziare, assicurati che:

- Il **D**ata**b**ase **M**anagement **S**ystem (MySQL, PostgreSQL, ecc.) è lo stesso per i due database (sorgente e destinazione).
- La versione del DBMS è la stessa per i due database (sorgente e destinazione). Anche se la copia può funzionare con versioni diverse, è consigliabile utilizzare le stesse versioni.
- Il contenuto del database di origine non deve superare le dimensioni del database di destinazione.

### Copiare il contenuto di un database

Questa funzionalità è disponibile per la copia:

- di un database [Start SQL](/links/web/hosting-options-startsql) (incluso in alcuni dei nostri [hosting Web](/links/web/hosting) o [ordinato separatamente](/links/web/hosting-options-startsql));
- di un database presente su un server [Web Cloud Databases](/links/web/databases) (incluso con i nostri [hosting Performance](/links/web/hosting-performance-offer) o [ordinato separatamente](/links/web/databases)).

Il percorso per accedere al database di origine è diverso in base alla situazione.

**Clicca sulla situazione corrispondente per visualizzare il contenuto.**

<!-- CP-STEPS-START:copy-from-startsql -->
/// details | Da un database Start SQL

Clicca sulle schede qui sotto per visualizzare ciascuno dei **6** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting), poi seleziona l'hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sulla scheda `Databases`{.action}. La tabella elenca i database creati sul tuo piano di hosting Web.
>>
>> ![Lista dei BDD Start SQL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/sharedsql-dashboard-db-list.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Clicca sul pulsante `...`{.action} a destra della riga corrispondente al database di cui vuoi copiare il contenuto, poi seleziona `Copiare il database`{.action}.
>>
>> ![CTA_copiare_BDD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/copy-db-tool.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Verrà visualizzata una finestra per scegliere il database di destinazione.
>>
>> ![Interfaccia copia BDD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-step-1.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > Se non disponi di un database di destinazione, clicca sul link nella finestra per acquistarne uno. Ricordati di attivarlo:
>> >
>> > - Per un database Shared SQL: consulta la nostra guida « [Creare un database sul proprio hosting Web](/pages/web_cloud/web_hosting/sql_create_database) ».
>> > - Per un database su un server Web Cloud Databases: consulta la nostra guida « [Creare un database su un server Web Cloud Databases](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server) ».
>>
>> - **Scelta 1 - Copiare verso un database Start SQL**: seleziona `Copiare verso un database`{.action} e scegli il database di destinazione nell'elenco a discesa.
>> - **Scelta 2 - Copiare verso un server Web Cloud Databases**: seleziona `Copiare verso un Web Cloud Databases`{.action}. Vengono visualizzati due elenchi a discesa. Clicca sul primo per selezionare la soluzione Web Cloud Databases, poi sul secondo per scegliere il database di destinazione.
>>
> **Passaggio 5**
>>
>> Clicca su `Continua`{.action}. Viene visualizzato il seguente messaggio di conferma:
>>
>> ![Messaggio di conferma copia BDD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-step-2.png){.thumbnail}
>>
>> Se non si desidera sovrascrivere il database di destinazione selezionato, clicca su `Indietro`{.action} per modificare la scelta o su `Annulla`{.action} per annullare tutto. In caso contrario, clicca su `Conferma`{.action} per confermare la duplicazione.
>>
> **Passaggio 6**
>>
>> La copia del database potrebbe richiedere alcuni minuti. Nella scheda `Operazioni in corso`{.action} viene visualizzata una nuova riga con lo stato "Pianificato" per la copia. Al termine dell'operazione, la riga scompare.
>>
>> ![Task in corso](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-ongoing-tasks.png){.thumbnail}

///
<!-- CP-STEPS-END:copy-from-startsql -->

<!-- CP-STEPS-START:copy-from-wcdb -->
/// details | Da un server Web Cloud Databases

Clicca sulle schede qui sotto per visualizzare ciascuno dei **6** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Web Cloud Databases](/links/control-panel/web-cloud-databases), poi seleziona la soluzione interessata.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sulla scheda `Databases`{.action}. La lista dei database presenti sul server Web Cloud Databases viene visualizzata.
>>
>> ![Lista dei database WCD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/wcdb-dashboard-db-list.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Clicca sul pulsante `...`{.action} a destra della riga corrispondente al database di cui vuoi copiare il contenuto, poi seleziona `Copiare il database`{.action}.
>>
>> ![CTA_copiare_BDD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/copy-db-tool.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Verrà visualizzata una finestra per scegliere il database di destinazione.
>>
>> ![Interfaccia copia BDD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-step-1.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > Se non disponi di un database di destinazione, clicca sul link nella finestra per acquistarne uno. Ricordati di attivarlo:
>> >
>> > - Per un database Shared SQL: consulta la nostra guida « [Creare un database sul proprio hosting Web](/pages/web_cloud/web_hosting/sql_create_database) ».
>> > - Per un database su un server Web Cloud Databases: consulta la nostra guida « [Creare un database su un server Web Cloud Databases](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server) ».
>>
>> - **Scelta 1 - Copiare verso un database Start SQL**: seleziona `Copiare verso un database`{.action} e scegli il database di destinazione nell'elenco a discesa.
>> - **Scelta 2 - Copiare verso un server Web Cloud Databases**: seleziona `Copiare verso un Web Cloud Databases`{.action}. Vengono visualizzati due elenchi a discesa. Clicca sul primo per selezionare la soluzione Web Cloud Databases, poi sul secondo per scegliere il database di destinazione.
>>
> **Passaggio 5**
>>
>> Clicca su `Continua`{.action}. Viene visualizzato il seguente messaggio di conferma:
>>
>> ![Messaggio di conferma copia BDD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-step-2.png){.thumbnail}
>>
>> Se non si desidera sovrascrivere il database di destinazione selezionato, clicca su `Indietro`{.action} per modificare la scelta o su `Annulla`{.action} per annullare tutto. In caso contrario, clicca su `Conferma`{.action} per confermare la duplicazione.
>>
> **Passaggio 6**
>>
>> La copia del database potrebbe richiedere alcuni minuti. Nella scheda `Operazioni in corso`{.action} viene visualizzata una nuova riga con lo stato "Pianificato" per la copia. Al termine dell'operazione, la riga scompare.
>>
>> ![Task in corso](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-ongoing-tasks.png){.thumbnail}

///
<!-- CP-STEPS-END:copy-from-wcdb -->

### Configura il tuo sito Web con il nuovo database

Una volta effettuata la copia del database di origine, sarà necessario effettuare un'ultima operazione per utilizzare il nuovo database.

Nella scheda `Operazioni in corso`{.action}, assicurati che la copia sia terminata (la riga corrispondente alla copia è scomparsa).

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
> Copiare il database non è una migrazione. Il database di origine esiste ancora fino a quando non viene eliminato. Ciò significa che potrai sempre riconfigurare il tuo sito Web con il vecchio database, se necessario.
>

### Casi d'uso

Durante il processo di copia del contenuto del database potrebbero verificarsi problemi.

**Clicca sulla situazione corrispondente per visualizzare il contenuto.**

/// details | Nell'elenco non compare alcun database

Questa notifica indica che è attivo un solo database. Per copiare il database di origine, è necessario disporre anche di un database di destinazione attivo. Per farlo, puoi:

- Configurare un nuovo database disponibile sul tuo hosting Web.
- Configurare un nuovo database sul tuo server [Web Cloud Databases](/links/web/databases).
- Ordinare un'offerta [start SQL](/links/web/hosting-options-startsql) o un server di database [Web Cloud Databases](/links/web/databases).

///

/// details | Hai già un'azione in corso

Questo messaggio indica che sul database è già in corso un'operazione. Clicca sulla scheda `Operazioni in corso`{.action} e verifica di avere un'operazione già in corso. In caso affermativo, attendi il completamento dell'operazione per riprovare a copiare il database.

///

/// details | Il database di destinazione non contiene spazio sufficiente

Spazio insufficiente nel database di destinazione. Le soluzioni disponibili sono due:

- Ordinare un nuovo database [start SQL](/links/web/hosting-options-startsql) con più spazio.
- Se possiedi un server [Web Cloud Databases](/links/web/databases), scegli un'offerta Web Cloud Databases con più spazio di storage.

///

/// details | I database di origine e di destinazione sono incompatibili

Questa notifica significa che il **D**ata**b**ase **M**anagement **S**ystem (**DBMS**) del database di origine non è lo stesso del DBMS del database di destinazione.

Ad esempio, questo errore può verificarsi quando si utilizza MySQL per il database di origine e PostgreSQL per il database di destinazione.

///

## Per saperne di più

[Accedi allo Spazio Cliente OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-login)

[Eseguire il backup e l'esportazione di un database sul database server](/pages/web_cloud/web_cloud_databases/save-export-on-database-server)

[Ripristinare e importare un database sul tuo database server](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server/)

[Recuperare il backup del database di un hosting Web](/pages/web_cloud/web_hosting/sql_database_export)

[Importare un backup nel database di un hosting Web](/pages/web_cloud/web_hosting/sql_importing_mysql_database)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).
