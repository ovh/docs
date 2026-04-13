---
title: "Configura il tuo database server"
excerpt: "Come configurare e ottimizzare il tuo database server"
updated: 2026-03-24
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

I database server Web Cloud Databases permettono di modificare le impostazioni globali del server. È inoltre possibile visualizzare l'attività del server.

**Questa guida ti mostra come configurare e ottimizzare il tuo database server.**

## Prerequisiti

- Disporre di un'[istanza Web Cloud Databases](/links/web/databases) (inclusa in un piano di [hosting web Performance](/links/web/hosting)).

<!-- CP-NAV-START:web-cloud-databases -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Seleziona il tuo servizio di database

---
<!-- CP-NAV-END:web-cloud-databases -->

## Procedura

### Visualizza le informazioni generali del tuo database server

<!-- CP-STEPS-START:visualizza-informazioni-generali -->
Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **2** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Web Cloud Databases](/links/control-panel/web-cloud-databases), poi seleziona la soluzione interessata.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Assicurati di trovarti nella scheda `Informazioni generali`{.action}.
>>
>> In questa interfaccia vengono mostrate le informazioni principali della tua istanza SQL. Ti consigliamo di verificarne la correttezza e assicurarti che corrispondano alle descrizioni indicate qui sotto.
>>
>> |Informazione|Descrizione|
>> |---|---|
>> |Stato del servizio|Indica se l'istanza è attiva, in corso di riavvio o sospesa. Per poter eseguire operazioni, l'istanza deve essere attiva.|
>> |Tipo|Indica il sistema di database utilizzato dal server. Se non sei sicuro che il tipo sia corretto, tieni presente che il più diffuso è "MySQL", ma ne esistono anche altri (PostgreSQL, MariaDB). Ad esempio, se il tuo sito è un WordPress, il sistema MySQL è perfetto.|
>> |Versione|Indica la versione del sistema di database utilizzato dal server. Verifica la compatibilità del tuo sito con la versione scelta.|
>> |Saturazione CPU|Indica il tempo CPU passato in saturazione nelle ultime 24 ore.|
>> |RAM|Indica la memoria RAM disponibile per la tua istanza e segnala l'eventuale raggiungimento della soglia limite. Il database server dispone di risorse dedicate e garantite: la sua memoria RAM. Se necessario, è possibile aumentarla e ricevere una notifica in caso di utilizzo di tutte le risorse disponibili.|
>> |Infrastruttura|Indica l'infrastruttura utilizzata dall'istanza. Questa informazione è relativa all'infrastruttura di OVHcloud.|
>> |Datacenter|Indica il datacenter in cui è stata creata l'istanza. Assicurati che il datacenter dell'istanza sia lo stesso dell'hosting Web OVHcloud in cui è (o sarà) ospitato il tuo sito.|
>> |Host|Indica il server OVHcloud in cui è stata creata l'istanza. Questa informazione è relativa all'infrastruttura di OVHcloud e può essere utilizzata nelle comunicazioni relative agli [incidenti OVHcloud](https://web-cloud.status-ovhcloud.com/).|
>>
>> ![Informazioni generali](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/general-information.png){.thumbnail}

<!-- CP-STEPS-END:visualizza-informazioni-generali -->

### Gestisci i tuoi accessi

Il tuo Web Cloud Databases è accessibile dai tuoi hosting Web OVHcloud e/o dalla rete pubblica.

**Clicca su ogni titolo per visualizzare il contenuto.**

<!-- CP-STEPS-START:autorizzare-ip -->
/// details | Autorizzare un indirizzo IP

Per accedere alla tua istanza Web Cloud Databases, è necessario indicare gli indirizzi IP o le classi di IP autorizzati a connettersi ai tuoi database.

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **3** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Web Cloud Databases](/links/control-panel/web-cloud-databases), poi seleziona la soluzione interessata.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sulla scheda `IP autorizzati`{.action}, poi sul pulsante `Aggiungi un indirizzo IP/mask`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Nella finestra che appare, indica l'indirizzo IP o la maschera da autorizzare in `IP/mask`{.action}, poi aggiungi una descrizione se necessario. Scegli se fornire l'accesso esclusivamente ai database o anche via SFTP. Infine, clicca su `Conferma`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask-confirmation.png){.thumbnail}

///
<!-- CP-STEPS-END:autorizzare-ip -->

<!-- CP-STEPS-START:autorizzare-hosting -->
/// details | Autorizzare le connessioni verso gli hosting Web OVHcloud

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **3** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Web Cloud Databases](/links/control-panel/web-cloud-databases), poi seleziona la soluzione interessata.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sulla scheda `IP autorizzati`{.action}.
>>
> **Passaggio 3**
>>
>> Seleziona la casella `Autorizza gli hosting Web OVHcloud ad accedere al database`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/tab-empty.png){.thumbnail}

///
<!-- CP-STEPS-END:autorizzare-hosting -->

### Modifica la tua offerta Web Cloud Databases <a name="modify-ram-web-cloud-db"></a>

> [!warning]
>
> Se la tua offerta Web Cloud Databases è associata a un hosting Web **Performance**, è necessario svincolare preventivamente l'offerta Web Cloud Databases dal tuo hosting **Performance** prima di passare a un'offerta superiore.
>
> Per scollegare un'offerta Web Cloud Databases da un hosting Web **Performance**, consulta la nostra guida "[Scollegare la mia soluzione Web Cloud Databases da un hosting Web](/pages/web_cloud/web_cloud_databases/detach-from-web-hosting)".
>
> **Questa azione è irreversibile e l'offerta Web Cloud Databases sarà fatturata separatamente dal tuo hosting Web Performance.**
>

<!-- CP-STEPS-START:modifica-offerta -->
Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **3** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Web Cloud Databases](/links/control-panel/web-cloud-databases), poi seleziona la soluzione interessata.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nella scheda **Informazioni generali** visualizzata di default, clicca su `...`{.action} a destra della voce "RAM", poi su `Modifica la quantità di RAM`{.action} per accedere all'ordine di questa modifica.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/change-the-amount-of-ram.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Scegli la quantità di RAM desiderata, poi clicca su `Continua`{.action}. Potrai quindi scegliere la durata desiderata.
>>
>> > [!primary]
>> >
>> > Il periodo residuo fino alla scadenza sarà calcolato proporzionalmente. Questo calcolo proporzionale si baserà sulla data di scadenza della tua istanza Web Cloud Databases, non sulla data del buono d'ordine.
>>
>> Dopo la conferma dei contratti, verrai reindirizzato al buono d'ordine per pagare questa modifica. L'operazione sarà effettiva entro qualche ora.
>>
>> > [!warning]
>> >
>> > Se disponi attualmente di un Web Cloud Databases gratuito con il tuo hosting Performance, la modifica dell'offerta comporterà la perdita della gratuità.

<!-- CP-STEPS-END:modifica-offerta -->

### Modifica la configurazione del tuo database server

**Clicca su ogni titolo per visualizzare il contenuto.**

<!-- CP-STEPS-START:configurare-mysql-mariadb -->
/// details | Istanza MySQL e MariaDB

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **3** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Web Cloud Databases](/links/control-panel/web-cloud-databases), poi seleziona la soluzione interessata.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sulla scheda `Configurazione`{.action}.
>>
> **Passaggio 3**
>>
>> Nel riquadro **Configurazione generale di MySQL** troverai la configurazione attualmente definita per il tuo database. Puoi modificarla direttamente, poi clicca su `Applica`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/configuration/general-configuration-of-mysql.png){.thumbnail}
>>
>> - **MaxAllowedPacket**: Dimensione massima dei pacchetti.
>> - **Max_user_connections**: Numero di connessioni simultanee autorizzate per utente.
>> - **AutoCommit**: Definisce se le richieste sono automaticamente confermate (committed) o meno.
>> - **Interactive_timeout**: Tempo (in secondi) durante il quale il server attende l'attività su una connessione interattiva prima di chiuderla.
>> - **InnodbBufferPoolSize**: Dimensione della memoria buffer selezionata.
>> - **MaxConnections**: Numero di connessioni simultanee autorizzate sul database server.
>> - **Wait_timeout**: Tempo (in secondi) durante il quale il server attende l'attività su una connessione non interattiva prima di chiuderla.
>> - **Event_scheduler**: Consente di avviare l'esecuzione di richieste programmate direttamente sul server MySQL.
>> - **sql_mode**: L'opzione **sql_mode** influisce sulla sintassi SQL supportata e sulle verifiche di convalida dei dati eseguite da MySQL/MariaDB.
>>
>> > [!primary]
>> > Quando si verifica un errore sul tuo sito indicando **"Too many connections"**, è dovuto al superamento del numero di connessioni simultanee sul database server. In questo caso, puoi aumentare la variabile **"MaxConnections"** se non è al massimo.
>>
>> > [!primary]
>> >
>> > <b>sql_mode</b>:
>> >
>> > &emsp;&emsp;Modalità di default di MariaDB 10.1:
>> > <pre class="highlight language-console"><code class="language-console">NO_ENGINE_SUBSTITUTION,NO_AUTO_CREATE_USER</code></pre>
>> >
>> > &emsp;&emsp;Modalità di default di MariaDB 10.2 e versioni superiori:
>> > <pre class="highlight language-console"><code class="language-console">STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION</code></pre>
>> >
>> > &emsp;&emsp;Modalità di default di MySQL 5.6:
>> > <pre class="highlight language-console"><code class="language-console">NO_ENGINE_SUBSTITUTION</code></pre>
>> >
>> > &emsp;&emsp;Modalità di default di MySQL 5.7 e versioni superiori:
>> > <pre class="highlight language-console"><code class="language-console">ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION</code></pre>
>> >
>> > Consigliamo di utilizzare sempre la modalità di default, tranne nel caso in cui il database sia stato aggiornato a partire da una versione con modalità di default differente da quella della versione attuale.
>>
>> Effettua le modifiche necessarie, poi clicca su `Conferma`{.action}.

> [!warning]
>
> Qualsiasi modifica richiede il riavvio del database server.
>

///
<!-- CP-STEPS-END:configurare-mysql-mariadb -->

<!-- CP-STEPS-START:configurare-postgresql -->
/// details | Istanza PostgreSQL

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **3** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Web Cloud Databases](/links/control-panel/web-cloud-databases), poi seleziona la soluzione interessata.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sulla scheda `Configurazione`{.action}.
>>
> **Passaggio 3**
>>
>> Nel riquadro **Configurazione generale di PostgreSQL** troverai la configurazione attualmente definita per il tuo database. Puoi modificarla direttamente, poi clicca su `Applica`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/configuration/general-configuration-of-postgresql.png){.thumbnail}
>>
>> - **log_min_messages**: Controlla i livelli dei messaggi da memorizzare nei log del server. I livelli disponibili per una soluzione Web Cloud Databases sono:
>>     - **"WARNING"**: Fornisce messaggi di avvertenza su potenziali problemi.
>>     - **"ERROR"**: Invia l'errore che ha determinato l'annullamento di un comando in corso.
>>     - **"LOG"**: Registra informazioni destinate agli amministratori del server.
>>     - **"FATAL"**: Invia l'errore che ha determinato la fine della sessione in corso.
>>     - **"PANIC"**: Invia l'errore che ha provocato la fine di tutte le sessioni.
>>
>> Ogni livello include tutti i livelli successivi. Più il livello è elevato, meno messaggi saranno salvati nei log del server.
>>
>> Il valore predefinito è **"WARNING"**, in quanto include i valori **"ERROR"**, **"LOG"**, **"FATAL"** e **"PANIC"**.
>>
>> È inoltre possibile attivare estensioni per i tuoi database. Clicca sulla scheda `Database`{.action}, poi sull'icona della tabella del tuo database nella colonna **"Estensioni"**.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/extensions.png){.thumbnail}

///
<!-- CP-STEPS-END:configurare-postgresql -->

### Modifica la versione MySQL, PostgreSQL o MariaDB del database server

<!-- CP-STEPS-START:modifica-versione -->
Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **3** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Web Cloud Databases](/links/control-panel/web-cloud-databases), poi seleziona la soluzione interessata.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nella scheda **Informazioni generali**, la versione attuale compare nella riga **Versione**.
>>
> **Passaggio 3**
>>
>> Per modificare questa versione, clicca su `Modifica la versione`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/postgre-12-update-version.png){.thumbnail}

/// details | Come conoscere la versione esatta di PostgreSQL in uso?

Inserisci questo comando in phpPgAdmin cliccando sul **tuo database**, nella sezione **"SQL"**, poi clicca su `Avvia`{.action}:

```sql
select version();
```

///

/// details | Come conoscere la versione esatta di MySQL o MariaDB in uso?

Inserisci questo comando in phpMyAdmin, nella sezione **"SQL"**, poi clicca su `Esegui`{.action}:

```sql
show variables like "version";
```

///

> [!primary]
>
> - Prima di passare a una versione superiore, assicurati che il tuo database sia compatibile con la versione scelta.
> - La modifica sarà effettiva entro qualche minuto.
>

> [!warning]
>
> Non è possibile passare da una versione precedente all'ultima
> direttamente. È obbligatorio passare per tutte le versioni intermedie.
>

<!-- CP-STEPS-END:modifica-versione -->

### Log e Metriche

**Clicca su ogni titolo per visualizzare il contenuto.**

/// details | Accesso ai log

Per accedere ai log della tua soluzione Web Cloud Databases, consulta la nostra guida "[Web Cloud Databases - Come recuperare i log](/pages/web_cloud/web_cloud_databases/retrieve-logs)".

///

<!-- CP-STEPS-START:monitorare-ram -->
/// details | Monitorare l'utilizzo della RAM

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **2** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Web Cloud Databases](/links/control-panel/web-cloud-databases), poi seleziona la soluzione interessata.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sulla scheda `Metriche`{.action}. Troverai il grafico **"Statistiche della memoria RAM utilizzata"**.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/metrics/ram-memory-usage-statistics.png){.thumbnail}

///
<!-- CP-STEPS-END:monitorare-ram -->

<!-- CP-STEPS-START:monitorare-connessioni -->
/// details | Monitorare il numero di connessioni al minuto

Questo grafico permette di seguire, nelle ultime 24 ore, il carico di connessioni al minuto sul tuo database server.

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **2** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Web Cloud Databases](/links/control-panel/web-cloud-databases), poi seleziona la soluzione interessata.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sulla scheda `Metriche`{.action}. Troverai il grafico **"Statistiche del totale delle connessioni al minuto"**.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/metrics/statistics-for-total-connections-per-minute.png){.thumbnail}

///
<!-- CP-STEPS-END:monitorare-connessioni -->

### Ottimizza i tuoi database

La manutenzione del database è importante per garantire prestazioni elevate. Le informazioni contenute nel database devono essere restituite il più rapidamente possibile allo script che le richiede. A tal fine, è necessario un database strutturato e ottimizzato.

**Clicca su ogni titolo per visualizzare il contenuto.**

/// details | Indicizzare il database

Per aumentare la rapidità delle ricerche durante una query, è necessario inserire un indice sui campi utilizzati nelle clausole WHERE.

Esempio: effettui regolarmente una ricerca di persona sulla città. Indicizza il campo "city" con la seguente query:

```sql
ALTER TABLE 'test' ADD INDEX ('city')
```

///

/// details | Eliminare i dati inutili dal database

Alcuni dei tuoi dati non sono più consultati? Archiviandoli, le tabelle saranno meno pesanti e le ricerche più veloci.

///

/// details | Limitazione della visualizzazione

Limita la visualizzazione dei record a un numero definito (ad esempio 10 per pagina) con la sezione LIMIT della tua query SQL.

///

/// details | Raggruppamento delle query

Raggruppa le tue query all'inizio dello script in questo modo:

```bash
open_connection
request1
request2
...
close_connection
Display...
Process data
Loop through data...
Display...
...
```

///

/// details | Recuperare solo i dati utili

Nelle tue query SQL, verifica di selezionare solo ciò di cui hai bisogno e soprattutto di non aver dimenticato i collegamenti tra le tabelle.

Esempio:

```sql
(where table1.champs = table2.champs2)
```

///

/// details | Evitare opzioni che consumano troppe risorse

Evita di utilizzare **"HAVING"**, ad esempio. Questa opzione appesantisce le query. Allo stesso modo, evita di utilizzare **"GROUP BY"**, tranne quando sia strettamente necessario.

///

## Per saperne di più

[Elenco degli indirizzi IP dei cluster e hosting Web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).
