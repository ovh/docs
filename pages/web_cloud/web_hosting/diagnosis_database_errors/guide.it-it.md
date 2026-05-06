---
title: "Risolvi gli errori più frequenti associati ai database"
excerpt: "Diagnostica i casi di errore più frequenti associati ai database"
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

L'utilizzo dei database può provocare alcune anomalie sul tuo sito o sul tuo [Spazio Cliente OVHcloud](/links/manager), così come sull'interfaccia [phpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database).

**Scopri come risolvere gli errori associati ai database sugli hosting condivisi OVHcloud.**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell'utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un [fornitore specializzato](/links/partner) o l'amministratore del servizio. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione [Per saperne di più](#go-further) su questa guida.
>

## Prerequisiti

- Disporre di una soluzione di [hosting web](/links/web/hosting) attiva.
- Utilizzare una delle nostre offerte di database: [Web Cloud](/links/web/hosting-options-startsql) o [Web Cloud Databases](/links/web/databases).

<!-- CP-NAV-START:web-hosting -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Hosting](/links/control-panel/web-hosting)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Hosting`{.action} > Seleziona il tuo hosting web

---
<!-- CP-NAV-END:web-hosting -->

## Procedura

### "Error establishing a database connection"

![error_establishing_a_DB_connection](/pages/assets/screens/other/browsers/errors/error-establishing-a-db-connection.png){.thumbnail}

#### Verifica gli incidenti in corso

Verifica innanzitutto sulla pagina [Web Cloud Status](https://web-cloud.status-ovhcloud.com/) che il tuo datacenter, il tuo cluster di hosting web, il tuo server Web Cloud Databases o il tuo database non siano interessati da un incidente sull'infrastruttura OVHcloud.

**Clicca sull'informazione che cerchi per visualizzare il contenuto.**

<!-- CP-STEPS-START:find-datacenter -->
/// details | Trovare il datacenter del tuo hosting web

Clicca sulle schede qui sotto per visualizzare in successione ciascuno dei **2** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting), poi seleziona l'hosting web interessato.
>>
>> ![Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nella scheda `Informazioni generali`{.action}, individua il `Datacenter`.

///
<!-- CP-STEPS-END:find-datacenter -->

/// details | Trovare il cluster e il filer del tuo hosting web

Consulta la nostra guida "[Conoscere il cluster e il filer del tuo hosting web](/pages/web_cloud/web_hosting/how_to_know_cluster_and_filer)".

///

<!-- CP-STEPS-START:find-wcdb-server-name -->
/// details | Trovare il nome del server Web Cloud Databases

Clicca sulle schede qui sotto per visualizzare in successione ciascuno dei **2** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Web Cloud Databases](/links/control-panel/web-cloud-databases), poi seleziona il servizio interessato.
>>
>> ![Selezione di un server Web Cloud Databases nello Spazio Cliente OVHcloud](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Individua il `Nome host` nella sezione `SQL` delle `Informazioni di login`.

///
<!-- CP-STEPS-END:find-wcdb-server-name -->

/// details | Trovare il server del tuo database di hosting web

Consulta la nostra guida "[Trovare il server del tuo database](/pages/web_cloud/web_hosting/sql_find_server)".

///

#### Verifica le credenziali di connessione al tuo database <a name="config_file"></a>

Accedi in [FTP](/pages/web_cloud/web_hosting/ftp_connection) allo spazio di archiviazione dei file sul tuo hosting e ritrova il file di configurazione del tuo sito (ad esempio, per un sito WordPress, si tratta del file **wp-config.php** situato nella cartella che contiene il tuo sito).

> [!warning]
>
> La scelta e la configurazione del file contenente le informazioni di connessione al database sono inerenti all'editor del contenuto (CMS) interessato e non a OVHcloud.
>
> In caso di necessità, ti consigliamo di rivolgerti all'editor del [CMS](/pages/web_cloud/web_hosting/cms_install_1_click_modules) utilizzato per creare il tuo sito o di rivolgerti a un [fornitore specializzato](/links/partner). Non saremo in grado di fornirti assistenza al riguardo.
>

Verifica la corrispondenza **esatta** tra le credenziali di connessione a [phpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#accedere-all-interfaccia-phpmyadmin) e quelle del file di configurazione del tuo sito.

Modifica, se necessario, la [password del tuo database](/pages/web_cloud/web_hosting/sql_change_password).

#### Esempio per WordPress

Se il tuo sito visualizza un messaggio **"Errore durante la connessione al database"** e non è interessato da un [incidente](https://web-cloud.status-ovhcloud.com/), accedi in [FTP](/pages/web_cloud/web_hosting/ftp_connection) al tuo hosting e apri la directory contenente il tuo sito (di default la cartella `www`).

Se il tuo sito è WordPress, apri il file `wp-config.php`.

```php
define('DB_NAME', 'my_database');

/** MySQL database username */
define('DB_USER', 'my_user');

/** MySQL database password */
define('DB_PASSWORD', 'my_password');

/** MySQL hostname */
define('DB_HOST', 'my_server.mysql.db:port');
```

<!-- CP-STEPS-START:check-wp-db-credentials -->
Clicca sulle schede qui sotto per visualizzare in successione ciascuno dei **2** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting), poi seleziona l'hosting web interessato.
>>
>> ![Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sulla scheda `Databases`{.action} e verifica la corrispondenza tra gli elementi visualizzati e quelli presenti nel file `wp-config.php`:
>>
>> - **my_database** deve corrispondere a quanto indicato in `Nome del database`;
>> - **my_user** deve corrispondere a quanto riportato in `Nome utente`;
>> - **my_password** corrisponde alla [password del tuo database](/pages/web_cloud/web_hosting/sql_change_password);
>> - **my_server.mysql.db** deve corrispondere a quanto riportato in `Indirizzo del server`.
<!-- CP-STEPS-END:check-wp-db-credentials -->

> [!primary]
>
> Se queste operazioni non ti permettono di ripristinare l'accesso al tuo sito, [salva il tuo database](/pages/web_cloud/web_hosting/sql_database_export) e [ripristinalo a una data precedente](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server#ripristina-e-importa-un-database-dallo-spazio-cliente) dal tuo [Spazio Cliente OVHcloud](/links/manager).
>
> Contatta un [fornitore specializzato](/links/partner) se necessario. Non saremo in grado di fornirti assistenza al riguardo.
>

### Superamento della quota autorizzata del database

Hai ricevuto un'email dai nostri servizi che indica che la quantità di dati sul tuo database supera il limite autorizzato. Il tuo database è quindi passato in sola lettura. In questo modo il sito non può essere modificato.

![database-overquota-notification-email](/pages/assets/screens/email-sending-to-customer/databases/overquota-db.png){.thumbnail}

Tre metodi ti permettono di sbloccare il tuo database:

#### Metodo 1: attiva il tuo abbonamento su un'offerta superiore

Se disponi di una formula **Starter** o **Personale**, ti consigliamo di passare all'[offerta di hosting superiore](/links/web/hosting). La modifica dell'abbonamento aumenterà la dimensione del tuo database e la riaprirà automaticamente. Si tratta del metodo più semplice e non richiede particolari competenze tecniche.

> [!warning]
>
> L'aumento della dimensione del tuo database può essere associato a malfunzionamenti nel codice interno del tuo sito.
>
> Un'anomalia può provocare un aumento permanente della dimensione del tuo database, nel qual caso la modifica dell'offerta di hosting risulterebbe inefficace.
>
> Ti consigliamo quindi di contattare immediatamente un [fornitore specializzato](/links/partner) se riscontri un improvviso aumento nella dimensione del tuo database o se disponi di un sito di tipo "blog" normalmente a basso consumo di dati. Non saremo in grado di fornirti assistenza in merito.
>

<!-- CP-STEPS-START:upgrade-plan -->
Per effettuare questa modifica, clicca sulle schede qui sotto per visualizzare in successione ciascuno dei **3** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting), poi seleziona l'hosting web interessato.
>>
>> ![Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sul pulsante `...`{.action} nella sezione `Piano` sulla destra dello schermo.
>>
> **Passaggio 3**
>>
>> Clicca su `Modificare soluzione`{.action}.
<!-- CP-STEPS-END:upgrade-plan -->

Se utilizzi un'offerta **Performance**, consulta il [metodo 2](#methode2).

#### Metodo 2: migrare i tuoi dati su un database di dimensione superiore <a name="methode2"></a>

Puoi anche migrare i tuoi dati su un nuovo database:

- Ordina, se necessario, un [database](/links/web/hosting-options-startsql) di dimensione superiore e avviane la [creazione](/pages/web_cloud/web_hosting/sql_create_database).
- [Duplica il contenuto del vecchio database](/pages/web_cloud/web_hosting/copy_database) nel nuovo **o** effettua un [export dei tuoi dati](/pages/web_cloud/web_hosting/sql_database_export), poi [importali](/pages/web_cloud/web_hosting/sql_importing_mysql_database) nel nuovo database.
- Inserisci gli identificativi del nuovo database nel [file di configurazione](#config_file) del tuo sito.

> [!primary]
>
> Se disponi di un hosting **Performance**, puoi anche [attivare gratuitamente un server Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).
>

#### Metodo 3: eliminare i dati non necessari

Dopo aver effettuato un [backup del tuo database](/pages/web_cloud/web_hosting/sql_database_export), accedi alla tua interfaccia [phpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#accedere-all-interfaccia-phpmyadmin) per eliminare i dati inutili grazie ai comandi Drop, Delete e Truncate.

<!-- CP-STEPS-START:recalculate-quota-method3 -->
Per ricalcolare la quota, clicca sulle schede qui sotto per visualizzare in successione ciascuno dei **3** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting), poi seleziona l'hosting web interessato.
>>
>> ![Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sulla scheda `Databases`{.action}, poi sul pulsante `...`{.action} accanto al database interessato.
>>
> **Passaggio 3**
>>
>> Clicca su `Ricalcola la quota`{.action}.
<!-- CP-STEPS-END:recalculate-quota-method3 -->

> [!warning]
>
> Questa operazione richiede competenze tecniche elevate. In caso di necessità, ti consigliamo di rivolgerti a un [fornitore specializzato](/links/partner). Non saremo in grado di fornirti assistenza in merito.
>

#### Metodo 4: ottimizzare il tuo database

Per ottimizzare il tuo database, segui le istruzioni della nostra guida "[Configurare il tuo server di database](/pages/web_cloud/web_cloud_databases/configure-database-server#ottimizza-i-tuoi-database)".

<!-- CP-STEPS-START:recalculate-quota-method4 -->
Per ricalcolare la quota, clicca sulle schede qui sotto per visualizzare in successione ciascuno dei **3** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting), poi seleziona l'hosting web interessato.
>>
>> ![Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sulla scheda `Databases`{.action}, poi sul pulsante `...`{.action} accanto al database interessato.
>>
> **Passaggio 3**
>>
>> Clicca su `Ricalcola la quota`{.action}.
<!-- CP-STEPS-END:recalculate-quota-method4 -->

> [!warning]
>
> Se i consigli forniti sull'ottimizzazione del database non sono sufficienti per sbloccare l'accesso al tuo sito, ti consigliamo di contattare la nostra [Community di utenti](/links/community) o i [partner OVHcloud](/links/partner). OVHcloud non potrà fornirti alcuna assistenza al riguardo.
>

### Superamento della capacità della RAM (solo Web Cloud Databases)

Il seguente messaggio indica che il tuo server [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) ha consumato troppe risorse sull'infrastruttura OVHcloud:

![ram-exceeded](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/ram-exceeded.png){.thumbnail}

<!-- CP-STEPS-START:increase-ram-wcdb -->
Per aumentare la [quantità di memoria RAM](/pages/web_cloud/web_cloud_databases/configure-database-server#monitora-la-ram-consumata), clicca sulle schede qui sotto per visualizzare in successione ciascuno dei **3** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Web Cloud Databases](/links/control-panel/web-cloud-databases), poi seleziona il servizio interessato.
>>
>> ![Selezione di un server Web Cloud Databases nello Spazio Cliente OVHcloud](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nella scheda `Informazioni generali`{.action}, individua la sezione `RAM`.
>>
> **Passaggio 3**
>>
>> Clicca sul pulsante `...`{.action} nella sezione `RAM`, poi su `Modifica la quantità di RAM`{.action}.
<!-- CP-STEPS-END:increase-ram-wcdb -->

> [!warning]
>
> Per aumentare la RAM, il Web Cloud Databases non deve essere attivato tramite un hosting Performance. Per aumentare la quantità di RAM di un database incluso nelle [offerte performance](/links/web/hosting-performance-offer), è necessario prima scollegarlo.
>
> Per scollegare il database, consulta la nostra guida "[Scollegare un Web Cloud Databases dal tuo hosting web](/pages/web_cloud/web_cloud_databases/detach-from-web-hosting)".
>

Per ottimizzare il tuo database, segui le istruzioni della nostra guida "[Configurare il tuo server di database](/pages/web_cloud/web_cloud_databases/configure-database-server#ottimizza-i-tuoi-database)".

> [!primary]
>
> Se riscontri difficoltà nell'utilizzo delle risorse sul tuo server di database e non desideri aumentarle, contatta la nostra [Community di utenti](/links/community) o i [partner OVHcloud](/links/partner). Non saremo in grado di fornirti assistenza al riguardo.
>

### Errori di importazione di database

#### "Access denied for user to database"

>
> **"#1044 - Access denied for user to database"**
>

Questo messaggio di errore significa che il database che stai cercando di importare contiene elementi non autorizzati sull'infrastruttura condivisa OVHcloud.

<!-- CP-STEPS-START:check-db-empty-before-import -->
Per prima cosa, assicurati che il database sia vuoto. Per farlo, clicca sulle schede qui sotto per visualizzare in successione ciascuno dei **3** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting), poi seleziona l'hosting web interessato.
>>
>> ![Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sulla scheda `Databases`{.action}, poi sul pulsante `...`{.action} accanto al database interessato e su `Ricalcola la quota`{.action}.
>>
> **Passaggio 3**
>>
>> Se il database non è vuoto, [salva i dati presenti](/pages/web_cloud/web_hosting/sql_database_export) e poi eliminali prima di riavviare l'operazione di importazione.
>>
>> Puoi anche selezionare la casella `Elimina tutti i file dal tuo database attuale`{.action} immediatamente prima di [avviare l'importazione](/pages/web_cloud/web_hosting/sql_importing_mysql_database#importare-il-backup-personale-dallo-spazio-cliente-ovhcloud):
>>
>> ![import-empty-current-db](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/import-empty-current-db.png){.thumbnail}
<!-- CP-STEPS-END:check-db-empty-before-import -->

Contatta, se necessario, la nostra [Community di utenti](/links/community) o un [fornitore specializzato](/links/partner). Non saremo in grado di fornirti assistenza sulla correzione di questa anomalia.

> [!primary]
>
> **Quali elementi nello script di importazione del database possono causare un errore "#1044 - Access denied for user to database"?**

Avere un **"trigger"** nello script di importazione del tuo database non è autorizzato sui server di hosting condiviso OVHcloud. In questo caso, importa il tuo database su un server [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).

Inoltre, la seguente richiesta non è autorizzata:

```sql
CREATE DATABASE IF NOT EXISTS `Database-Name` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
```

Sostituiscila con:

```sql
USE `Database-Name`;
```

(`Database-Name`: inserisci il nome del database indicato nel tuo [Spazio Cliente OVHcloud](/links/manager).)

#### "MySQL server has gone away"

>
> **"ERROR 2006 : MySQL server has gone away"**
>

Questo messaggio di errore compare durante l'[importazione di un database](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server#importa-un-backup-locale) su un server [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb). È legato per la maggior parte del tempo alla quantità troppo elevata di dati da importare o alla mancanza di ottimizzazione delle richieste SQL nello script di importazione.

Per risolvere questa anomalia, puoi:

<!-- CP-STEPS-START:increase-ram-for-import -->
- Aumentare la [quantità di RAM](/pages/web_cloud/web_cloud_databases/configure-database-server#monitora-la-ram-consumata). Per farlo, clicca sulle schede qui sotto per visualizzare in successione ciascuno dei **3** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Web Cloud Databases](/links/control-panel/web-cloud-databases), poi seleziona il servizio interessato.
>>
>> ![Selezione di un server Web Cloud Databases nello Spazio Cliente OVHcloud](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nella scheda `Informazioni generali`{.action}, individua la sezione `RAM`.
>>
> **Passaggio 3**
>>
>> Clicca sul pulsante `...`{.action} nella sezione `RAM`, poi su `Modifica la quantità di RAM`{.action}.
<!-- CP-STEPS-END:increase-ram-for-import -->

- Frazionare il tuo database per importarlo in più operazioni anziché in una sola (per maggiori informazioni sulle operazioni da effettuare, contatta la nostra [Community di utenti](/links/community) o i [partner OVHcloud](/links/partner). OVHcloud non potrà fornirti alcuna assistenza al riguardo).

- [Ottimizza il tuo database](/pages/web_cloud/web_cloud_databases/configure-database-server#ottimizza-i-tuoi-database) e ripeti le operazioni di esportazione/importazione.

### Impossibile accedere a phpMyAdmin

#### "Access denied for user"

>
> **"mysqli::real_connect(): (HY000/1045): Access denied for user"**
>

Questo messaggio di errore può comparire durante la connessione al tuo database da [phpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#accedere-all-interfaccia-phpmyadmin). Indica che gli identificativi inseriti sono errati.

![access_denied_for_user](/pages/assets/screens/other/web-tools/phpmyadmin/pma-error-hy000-1045.png){.thumbnail}

In questa situazione, [verifica le credenziali inserite](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server#procedura) e, se necessario, modifica la [password del tuo database](/pages/web_cloud/web_hosting/sql_change_password).

#### "Too many connections"

>
> **"mysqli_real_connect(): (HY000/1040): Too many connections"**
>

Il numero massimo di connessioni attive per i database consegnati con hosting condivisi ([StartSQL](/links/web/hosting-options-startsql)) è di **30**.

Questo numero è di **200** per i database dei server [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb). (Questo parametro è modificabile nella sezione `Configurazione`{.action} del tuo server database).

Questo messaggio compare durante la [connessione a phpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#accedere-all-interfaccia-phpmyadmin) quando viene superato il numero massimo di connessioni.

Per ridurre il numero di connessioni attive, è necessario [ottimizzare i tuoi database](/pages/web_cloud/web_cloud_databases/configure-database-server#ottimizza-i-tuoi-database).

> [!warning]
>
> Per maggiori informazioni sulle operazioni da effettuare per ridurre il numero di connessioni attive sul database, contatta la nostra [Community di utenti](/links/community) o i [partner OVHcloud](/links/partner). OVHcloud non potrà fornirti alcuna assistenza al riguardo.
>

#### "Name or service not known"

>
> **"mysqli::real_connect(): (HY000/2002): php_network_getaddresses: getaddrinfo failed: Name or service not known"**
>

Questo messaggio di errore compare durante la [connessione a phpMyAdmin](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server#procedura) quando il nome del server inserito non è corretto.

![name_or_service_not_known](/pages/assets/screens/other/web-tools/phpmyadmin/pma-error-hy000-2002.png){.thumbnail}

Verifica il nome del server corrispondente.

**Clicca sulla situazione corrispondente per visualizzare il contenuto.**

<!-- CP-STEPS-START:find-server-name-hosting -->
/// details | Database su un hosting web

Clicca sulle schede qui sotto per visualizzare in successione ciascuno dei **2** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting), poi seleziona l'hosting web interessato.
>>
>> ![Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sulla scheda `Databases`{.action}. Il nome del server da inserire è indicato nella colonna `Indirizzo del server`.

///
<!-- CP-STEPS-END:find-server-name-hosting -->

<!-- CP-STEPS-START:find-server-name-wcdb -->
/// details | Database su un server Web Cloud Databases

Clicca sulle schede qui sotto per visualizzare in successione ciascuno dei **2** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Web Cloud Databases](/links/control-panel/web-cloud-databases), poi seleziona il servizio interessato.
>>
>> ![Selezione di un server Web Cloud Databases nello Spazio Cliente OVHcloud](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nella scheda `Informazioni generali`{.action}, il nome del server da inserire è indicato nella sezione `Informazioni di login`, sotto `SQL`, alla voce `Nome host`.

///
<!-- CP-STEPS-END:find-server-name-wcdb -->

### Connessione impossibile su un database Cloud Databases

Disporre di un server [Web Cloud Databases](/products/web-cloud-clouddb) permette di [accedere ai propri database](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server) dal proprio computer o da un server esterno all'infrastruttura OVHcloud.

Se non riesci a effettuare questa connessione, verifica innanzitutto di aver [autorizzato il tuo indirizzo IP pubblico](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) a connettersi al server di database.

Se l'operazione è stata effettuata correttamente, contatta il tuo ISP o i [partner OVHcloud](/links/partner). OVHcloud non sarà in grado di fornirti assistenza in questa situazione.

## Per saperne di più <a name="go-further"></a>

[Iniziare a utilizzare il servizio Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Contatta la nostra [Community di utenti](/links/community).
