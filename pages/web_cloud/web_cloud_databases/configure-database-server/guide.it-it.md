---
title: Configura il tuo database server 
excerpt: Come configurare e ottimizzare il tuo database server
updated: 2024-03-20
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

I database server Cloud Database ti danno la possibilità di agire sui parametri globali del tuo server. Inoltre, è possibile visualizzare l'attività del server.

**Questa guida ti mostra come configurare e ottimizzare il tuo database server.**

## Prerequisiti

- Disporre di una [istanza Web Cloud Databases](https://www.ovh.it/cloud/cloud-databases/) (inclusa in un'offerta di[hosting web Performance](/links/web/hosting).
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)

## Procedura

### Visualizza le informazioni generali del tuo database server

Nello [Spazio Cliente OVHcloud](/links/manager), clicca su Database nella sezione `Web Cloud Databases`{.action} e seleziona l'istanza SQL. Assicurati di trovarti nella scheda `Informazioni generali`{.action}.

In questa interfaccia vengono mostrate anche le informazioni principali della tua istanza SQL. Ti consigliamo di verificarne la correttezza e assicurarti che corrispondano alle descrizioni indicate qui sotto:

|Informazione|Descrizione|
|---|---|
|Stato del servizio|Indica se l'istanza è attiva, in corso di riavvio o sospesa. Per poter eseguire operazioni, l’istanza deve essere attiva.|
|Tipo|Indica il sistema di database utilizzato dal server. MySQL è il più diffuso, ma ne esistono anche altri (come PostgreSQL e MariaDB). Ad esempio, se il tuo sito è un WordPress, il sistema MySQL è perfetto.|
|Versione|Indica la versione del sistema di database utilizzato dal server. Ti ricordiamo di verificare la compatibilità del tuo sito con la versione scelta.|
|Saturazione CPU|Indica il tempo CPU passato in saturazione nelle ultime 24 ore.|
|RAM|Indica la memoria disponibile sulla tua istanza e segnala l’eventuale raggiungimento della soglia limite. I database server dispongono di risorse dedicate e garantite: la sua memoria RAM. Se necessario, è possibile aumentarla e ricevere una notifica in caso di utilizzo di tutte le risorse disponibili.|
|Infrastruttura|Indica l’infrastruttura utilizzata dall’istanza. Questa informazione è relativa all'infrastruttura di OVHcloud.|
|Datacenter|Indica il datacenter in cui è stata creata l’istanza. Assicurati che il datacenter dell'istanza sia lo stesso dell'hosting Web OVHcloud in cui è (o sarà) ospitato il tuo sito.|
|Host|Indica il server OVHcloud in cui è stata creata l'istanza. Questa informazione è relativa all'infrastruttura OVHcloud e può essere utilizzata nelle comunicazioni relative agli [incidenti](https://web-cloud.status-ovhcloud.com/).|

![Informazioni generali](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/general-information.png){.thumbnail}

### Gestisci i tuoi accessi

Il tuo Web Cloud Databases è accessibile dai tuoi hosting Web OVHcloud o dalla rete pubblica.

#### Autorizza un indirizzo IP

Per il corretto funzionamento dell'accesso alla tua istanza Web Cloud Databases, è necessario indicare gli indirizzi IP o le classi di IP che possono connettersi ai tuoi database.

Nello [Spazio Cliente OVHcloud](/links/manager), seleziona `Web Cloud Databases`{.action} > Istanza Web Cloud Databases corrispondente.

Clicca sulla scheda `IP autorizzati`{.action} e poi sul pulsante `Aggiungi un indirizzo IP/mask`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask.png){.thumbnail}

Nella finestra che appare indica l’indirizzo IP o la mask da autorizzare in `IP/mask`{.action} e poi, se vuoi, aggiungi una descrizione. Decidi se vuoi fornire un accesso soltanto ai database o anche via SFTP. Infine clicca su `Conferma`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask-confirmation.png){.thumbnail}

#### Autorizza la connessione a un hosting Web OVHcloud

Per gli hosting Web OVHcloud è sufficiente selezionare `Autorizza gli hosting Web OVHcloud ad accedere al database`.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/tab-empty.png){.thumbnail}

### Modifica la tua offerta Web Cloud Databases <a name="modify-ram-web-cloud-db"></a>

> [!warning]
> 
> Se la tua offerta Web Cloud Databases è associata a un'offerta di hosting Web **Performance**, per passare a un'offerta superiore è necessario svincolare preventivamente l'offerta Web Cloud Databases del tuo hosting **Performance**.
>
> Per creare un'offerta Web Cloud Databases associata a un hosting Web **Performance**, accedi al tuo [Spazio Cliente OVHcloud](/links/manager). Nella colonna di sinistra, clicca sulla scheda `Web Cloud`{.action} e poi su `Hosting`{.action}. 
>
> Nella nuova pagina `Informazioni generali`{.action} è possibile trovare un riquadro `Configurazione`{.action}. A destra della menzione `Web Cloud Databases`{.action}, clicca sul pulsante `...`{.action}, quindi su `Scollega`{.action}. Scegli la durata minima del rinnovo e prosegui fino alla conferma dell'ordine.
>
> **Questa azione è irreversibile e l'offerta Web Cloud Database sarà fatturata indipendentemente dal tuo hosting Web Performance.**
>

Per modificare l'offerta del tua istanza Web Cloud Databases, accedi al tuo [Spazio Cliente OVHcloud](/links/manager). Clicca sulla scheda `Web Cloud` e poi su `Web Cloud Databases`{.action}. Seleziona il nome del tuo database server.
Nella scheda **"Informazioni generali"**, visualizzata di default, clicca su `...`{.action} a destra della voce "RAM" e poi su `Modifica la quantità di RAM`{.action} per accedere all'ordine di questo passaggio.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/change-the-amount-of-ram.png){.thumbnail}

Scegli la quantità di RAM desiderata e clicca su `Seguente`{.action}. e scegliere la durata scelta.

> [!primary]
>
> Se hai ancora qualche mese prima della scadenza, verrà effettuato un prorata. Questo prorata sarà basato sulla data di scadenza della tua istanza Web Cloud Databases e non su quello del buono d'ordine.
> 

Dopo la conferma dei contratti, verrai reindirizzato al buono d'ordine da cui sarà possibile pagare la modifica. L'operazione diventerà effettiva entro qualche ora.

> [!warning]
>
> Se disponi attualmente di un Web Cloud Databases gratuito grazie al tuo hosting Performance, la modifica dell'offerta ti farà perdere la gratuità.
> 

### Modifica la configurazione del tuo database server

Accedi allo [Spazio Cliente OVHcloud](/links/manager). Clicca sulla scheda `Web Cloud` e poi su `Web Cloud Databases`{.action}. Seleziona il nome del tuo server Web Cloud Databases.

#### Istanza MySQL e MariaDB

- Clicca sulla scheda `Configurazione`{.action}.

Nel riquadro **"Configurazione generale di MySql"** troverai la configurazione attualmente definita per il tuo database. Puoi modificarla direttamente e cliccare su `Applica`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/configuration/general-configuration-of-mysql.png){.thumbnail}

- **Temp**: Directory dei file temporanei. **/dev/shm** corrisponde alla memoria RAM dell'istanza. **/tmp** corrisponde all'hard disk dell'istanza.
- **MaxAllowedPacket**: Dimensione massima dei pacchetti
- **Max_user_connections**: Numero di connessioni simultanee autorizzate per utente.
- **AutoCommit**: Definisce se le richieste sono automaticamente confermate (committed) o no.
- **Interactive_timeout**: Tempo in secondi durante il quale il server attende l'attività su una connessione interattiva prima di chiuderla.
- **InnodbBufferPoolSize**: Scelta della dimensione della memoria buffer.
- **MaxConnessioni**: Numero di connessioni simultanee autorizzate sul database.
- **Wait_timeout**: Tempo in secondi durante il quale il server attende l'attività su una connessione non interattiva prima di chiuderla.
- **Event_scheduler**: Consente di avviare l'esecuzione di richieste programmate direttamente sul server MySQL.
- **sql_mode**: L'opzione **sql_mode** influisce sull'interpretazione della sintassi SQL e sulle verifiche di convalida dei dati eseguite da MySQL/MariaDB.

> [!primary]
> Quando si verifica un errore sul tuo sito indicando **"Too many connections"**, è dovuto al superamento del numero di connessioni simultanee sul tuo database.
> In questo caso, puoi aumentare la variabile **"MaxConnections"** se non è al massimo.
>

> [!primary]
>
> <b>Tmpdir</b>:
>
> - /dev/shm: Il database server assegnerà metà della memoria RAM a questa directory per ottenere migliori performance.
>
> - /tmp: Il server assegnerà sul suo hard disk uno spazio illimitato per questa directory, ma sarà molto meno performante. Ti consigliamo di utilizzare questa directory solo per operazioni occasionali di grande impatto.
>

> [!primary]
>
> <b>sql_mode</b>:
>
> &emsp;&emsp;Modalità di default di MariaDB 10.1:
> <pre class="highlight language-console"><code class="language-console">NO_ENGINE_SUBSTITUTION,NO_AUTO_CREATE_USER</code></pre>
> 
> &emsp;&emsp;Modalità di default di MariaDB 10.2 e versioni superiori:
> <pre class="highlight language-console"><code class="language-console">STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION</code></pre>
>
> &emsp;&emsp;Modalità di default di MySQL 5.6:
> <pre class="highlight language-console"><code class="language-console">NO_ENGINE_SUBSTITUTION</code></pre>
> 
> &emsp;&emsp;Modalità di default di MySQL 5.7 e versioni superiori:
> <pre class="highlight language-console"><code class="language-console">ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION</code></pre>
>
> Consigliamo di utilizzare sempre la modalità di default, tranne nel caso in cui il database sia stato aggiornato a partire da una versione con modalità di default differente da quella della versione attuale.
>

Effettua le modifiche necessarie e clicca su `Conferma`{.action}.

> [!warning]
>
> Qualsiasi modifica richiede il riavvio del database server.
> 

#### Instance PostgreSQL

- Clicca sulla scheda `Configurazione`{.action}.

Nel riquadro **"Configurazione generale di PostgreSQL"**, trovi la configurazione attualmente definita per il tuo database. È possibile modificarla direttamente e cliccare su `Applica`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/configuration/general-configuration-of-postgresql.png){.thumbnail}

- **log_min_messages***: controlla i livelli dei messaggi da memorizzare nei log del server. I livelli disponibili per una soluzione Web Cloud Databases sono i seguenti: 
    - **"WARNING"**: fornisce messaggi di avvertenza su potenziali problemi.
    - **"ERROR"**: Invia l'errore che ha determinato l'annullamento di un ordine in corso.
    - **"LOG"**: Registra informazioni destinate agli amministratori del server.
    - **"FATAL"**: Invia l'errore che ha determinato la fine della sessione in corso.
    - **"PANIC"**: Invia l'errore che ha provocato la fine di tutte le sessioni.

Ogni livello include tutti i livelli successivi. Più il livello è elevato, meno messaggi saranno salvati nei log del server.

Il valore predefinito è **"WARNING"**, in quanto include i valori **"ERROR"**, **"LOG"**, **"FATAL"** e **"PANIC"**.

È inoltre possibile attivare estensioni sui database. Clicca sulla scheda `Database`{.action}, poi sull'icona della tabella del tuo database sotto la colonna "**Estensioni"**

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/extensions.png){.thumbnail}

### Modifica la versione MySQL, PostgreSQL o MariaDB del database server

Per conoscere la versione di MySQL, PostgreSQL o MariaDB del Vostro database server, dovete collegarvi alla scheda **"Informazioni generali"** dopo aver scelto il Vostro database server.

La versione attuale compare nella riga **"Versione"**.

Per modificare questa versione, clicca su `Modifica la versione`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/postgre-12-update-version.png){.thumbnail}

#### Come conoscere la versione esatta di PostgreSQL che uso?

Inserisci questo comando in phpPgAdmin cliccando sul **tuo database**, rubrica **"SQL"**, poi su `Esegui`{.action}:

```sql
select version();
```

#### Come conoscere la versione esatta del MySQL o MariaDB che uso?

Per effettuare questa operazione, inserisci questo comando in phpMyAdmin, sezione **"SQL"**, poi clicca su `Esegui`{.action}:

```sql
show variables like "version";
```

> [!primary]
>
> - Prima di passare a una versione superiore, assicurati che il tuo database sia compatibile con la versione scelta.
> - La modifica è effettiva in pochi minuti.
>

> [!warning]
>
> Non è possibile passare da una versione precedente all'ultima
> direttamente. È obbligatorio passare per tutte le versioni intermedie.
> 

### Log e Metriche

#### Accesso ai log

Per accedere ai log della soluzione Web Cloud Databases, consulta la nostra guida "[Web Cloud Databases - Come recuperare i log?](/pages/web_cloud/web_cloud_databases/retrieve-logs)".

#### Monitora la RAM consumata

Accedi allo [Spazio Cliente OVHcloud](/links/manager). Clicca sulla scheda `Web Cloud` e poi su `Web Cloud Databases`{.action}. Seleziona il nome del tuo database server.

Clicca sulla scheda `Metriche` dello Spazio Cliente. Il grafico **"Statistiche della memoria RAM utilizzata"**.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/metrics/ram-memory-usage-statistics.png){.thumbnail}

#### Controlla il numero di connessioni al minuto

Questo grafico permette di seguire, nelle ultime 24 ore, il carico di connessione al minuto sul tuo database server.

Accedi allo [Spazio Cliente OVHcloud](/links/manager). Clicca sulla scheda `Web Cloud` e poi su `Web Cloud Databases`{.action}. Seleziona il nome del tuo database server.

Clicca sulla scheda `Metriche` dello Spazio Cliente. Il grafico **"Statistiche del totale delle connessioni al minuto"**.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/metrics/statistics-for-total-connections-per-minute.png){.thumbnail}

### Ottimizza i tuoi database

Si consiglia di mantenere il proprio database in modo da renderlo efficiente. Ciò che si intende per prestazione è che le informazioni contenute nel database sono reindirizzate il più rapidamente possibile allo script che le richiede. Per fare ciò, è necessario un database strutturato e ottimizzato.

#### Indicizza il database

Per aumentare la rapidità delle ricerche in caso di una richiesta, è necessario inserire un indice sui campi utilizzati nelle clausole WHERE.

Esempio: fate regolarmente una ricerca di persona sulla città. Inserisci il campo "Città" con questa richiesta:

```sql
ALTER TABLE 'test' ADD INDEX ('city')
```

#### Elimina il database

Alcuni dei tuoi dati non sono più utilizzati? Archiviateli, le vostre tabelle saranno meno piene e le ricerche saranno più veloci.

#### Limitazione della visualizzazione

Limita la visualizzazione dei record a un numero limitato (ad esempio 10 per pagina) con la sezione LIMIT della tua richiesta SQL.

#### Raggruppamento delle richieste

Raggruppa le tue richieste all'inizio dello script in questo modo:

```bash
connexion_base
richiesta1
requete2
...
disconnessione_base
Visualizzazione ...
Trattamento dei dati
Canali ...
Visualizzazione ...
...
```

#### Recupera solo i dati utili

Nelle tue richieste SQL, verifica di selezionare solo quello di cui hai bisogno e soprattutto di non aver dimenticato i collegamenti tra le tabelle.

Esempio:

```sql
(where table1.record = tavolo2.record2)
```

#### Evitare opzioni che utilizzano troppe risorse

Evita di utilizzare **"HAVING"**, ad esempio. Aumenta le tue richieste. Allo stesso modo, evita di utilizzare **"GROUP BY"**, tranne quando ciò sia strettamente necessario.

## Per saperne di più

[Elenco degli indirizzi IP di cluster e hosting Web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).