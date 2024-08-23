---
title: "Specifiche tecniche degli hosting condivisi"
excerpt: "Questa guida ti mostra le informazioni e le specifiche tecniche relative agli hosting Web"
updated: 2023-12-08
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

I pacchetti di web hosting OVHcloud sono condivisi. Di conseguenza, la configurazione di queste offerte contiene alcune specificità tecniche. Vi consigliamo di prendere nota di queste specificità *prima* di utilizzare il vostro web hosting OVHcloud.

**Questa guida ti mostra i dettagli tecnici relativi all’infrastruttura degli hosting Web OVHcloud, in base alle domande più frequenti.**

## Prerequisiti

- Disporre di un piano di [hosting Web](/links/web/hosting){.external} attivo
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager){.external}

## Procedura

> [!warning]
>
> OVHcloud mette a disposizione i servizi ma non si occupa della loro configurazione e gestione. garantirne il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un [provider specializzato](/links/partner) o il fornitore del servizio. OVH non sarà infatti in grado di fornirti assistenza. Per maggiori informazioni consulta la sezione "[Per saperne di più](#go-further)" di questa guida.
>

### FTP

- Utilizza la **modalità passiva** per le connessioni FTP. Assicurati che il tuo script o il tuo client FTP siano configurati correttamente.

- Se riscontri l’errore di accesso "Autenticazione di connessione 530 non riuscita" durante la connessione al tuo spazio di storage FTP: assicurati che le informazioni di accesso al tuo spazio FTP siano corrette. Per farlo, accedi al tuo [Spazio Cliente OVHcloud](/links/manager) e clicca sulla sezione `Web Cloud`{.action}. Nella colonna di sinistra, clicca su `Hosting`{.action} e seleziona l’hosting Web interessato. Clicca sulla scheda `FTP - SSH`{.action}.

In questa interfaccia sono disponibili tutte le informazioni di connessione allo spazio di storage FTP, ad eccezione della password.

Le password non vengono mai mostrate, ma possono essere modificate.

Per maggiori informazioni al riguardo, consulta la nostra guida "[Accedere allo spazio di storage FTP del proprio hosting Web](/pages/web_cloud/web_hosting/ftp_connection)".

### E-mail <a name="email"></a>

Per garantire una buona qualità di servizio sull'intera infrastruttura condivisa e rendere più fluido l'invio delle email verso i tuoi destinatari, applichiamo delle quote di invio sui nostri servizi di hosting Web.

In un periodo di 3600 secondi (1 ora), la tua offerta di hosting Web ti permetterà di inviare le seguenti quote email:

|Offerte|Hosting gratuito 100M|Starter|Personale|Pro|Performance|
|---|---|---|---|---|---| 
|Quantità massima di invio email per ora e per servizio|10|20|100|200|2000|

> [!primary]
>
> Queste limitazioni si applicano a **solo** le email inviate tramite la funzione *mail()* di PHP e non sono applicabili ad altre offerte di posta elettronica (invio SMTP).
>

Ad eccezione dei sospetti di spamming o di phishing, la spedizione delle tue email potrà essere differita. I messaggi di posta elettronica saranno mantenuti in una coda fino a quando il numero di messaggi inviati nel corso dell'ora trascorsa non sarà inferiore alla quota.

In caso di abuso o pirateria, una parte o la totalità del servizio potrà essere sospesa (conformemente alle CGU/CGV e Condizioni Particolari della vostra offerta). Riceverai un’email con la notifica della sospensione del servizio. In questo caso, consulta le guide seguenti:

- [Controllare e gestire le email automatiche del proprio hosting Web](/pages/web_cloud/web_hosting/mail_function_script_records);
- [Case study - Suggerimenti in seguito alla violazione del sito Web](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked).

### Database / SQL

#### Connessioni simultanee al database

Sui piani di hosting Web (database condivisi), esiste un limite di 30 connessioni simultanee per database (questo limite passa a 200 se utilizzi una soluzione [Web Cloud Databases](/links/web/databases). Consulta il [dettaglio delle nostre offerte di hosting Web](/links/web/hosting) per conoscere le opzioni disponibili in ogni offerta di hosting Web.

È inoltre possibile ordinare soluzioni [Web Cloud Databases](/links/web/databases) aggiuntive, che dispongono di opzioni di personalizzazione:

- *max_connections*: 100 di default, con possibilità di passare a 200;
- *max_user_connections*: 50 di default, con possibilità di passare a 200.

Per saperne di più, consulta i dettagli delle nostre [offerte di hosting Web](/links/web/hosting) e la nostra guida "[Iniziare a utilizzare il servizio Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)".

#### Connessioni da un server esterno

Per ragioni di sicurezza, non è consentita la connessione a un database incluso in un piano di hosting Web OVHcloud da un server esterno. Solo i server che contengono gli hosting Web OVHcloud possono connettersi ai server di database condivisi. Qualsiasi altra connessione provocherà il seguente errore:

```bash
Warning: MySQL Connection Failed: Host ip.your.connection is not allowed to connect ...
```

Solo i server di database [Web Cloud Databases](/links/web/databases) permettono a server esterni di connettersi. previa autorizzazione dell’indirizzo IP del tuo server esterno sul tuo database server. Se necessario, consulta la nostra guida "[Iniziare a utilizzare il servizio Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)".

#### Variabili server SQL condiviso

Per conoscerne le variabili, accedi al database tramite l’interfaccia *PhpMyAdmin*. Una volta connesso, clicca sulla scheda `SQL` nella parte alta della pagina e poi inserisci la seguente query nel modulo centrale per verificare le variabili del server MySQL:

```bash
SHOW VARIABLES;
``` 

> [!primary]
>
> La versione MySQL non può essere modificata per i database integrati all'hosting Web.
>

Per maggiori informazioni sulla gestione dei database e la connessione all'interfaccia *phpMyAdmin*, consulta la guida "[Creare un database sul proprio hosting Web](/pages/web_cloud/web_hosting/sql_create_database)".

### PHP

Ti consigliamo di consultare le nostre [offerte di hosting Web](/links/web/hosting-programming-language) per assicurarti che l’offerta di hosting Web che vuoi ordinare si adatti alle tue necessità.

> [!warning]
>
> La modifica del file **php.ini** non è disponibile sulle offerte di hosting Web. Questo perché la configurazione PHP è globale all'intera infrastruttura condivisa.
>
> Puoi modificare alcuni elementi come il *programma d’esecuzione PHP*, l’*ambiente di esecuzione* o la *versione di PHP* del tuo hosting Web.
>
> Trovi maggiori dettagli su questo argomento nella nostra guida "[Hosting Web: ambiente, versione PHP, ".ovhconfig"](/pages/web_cloud/web_hosting/configure_your_web_hosting)"
>

È inoltre possibile verificare i dettagli della configurazione dell’hosting Web. Per farlo, consulta la sezione "[Informazioni tecniche del tuo hosting Web](#technical-infos-web-hosting)" in fondo a questa guida.

#### PHP-FPM

PHP-FPM è attivo di default sull’infrastruttura di un hosting Web per accelerare le risposte PHP. Ti ricordiamo che potrebbe non essere attivo se utilizzi una vecchia offerta di hosting Web che non è stata aggiornata (servizi ordinati prima del 2014).

*Alcune variabili sono diverse senza PHP-FPM:*

|Variabile|Senza PHP-FPM|Con PHP-FPM|
|---|---|---|
|max_execution_time|120s|165s|
|max_input_vars|2000|16000|
|memory_limit|128M|512M|

#### PHP scripts

Una volta connesso al tuo hosting Web in SSH, il traffico sarà bloccato per ragioni di sicurezza. Ti consigliamo di utilizzare gli script PHP. Per maggiori informazioni, consulta la nostra [guida SSH](/pages/web_cloud/web_hosting/ssh_on_webhosting). Per l’esecuzione dei comandi, consulta la "[PHP manuale](https://www.php.net/manual/en/function.system.php)".

Ad esempio, è possibile utilizzare la funzione *gethostbyaddr()* per recuperare il nome host:

```php
1. <?php
2. echo gethostbyaddr($_SERVER["REMOTE_ADDR"]);
3. ?>
```

> [!warning]
>
> OVHcloud non cambia automaticamente la versione di PHP del tuo hosting quando ne viene implementata una nuova. L'utente è responsabile della sicurezza e dell'aggiornamento regolare dei contenuti dei servizi.
>

### Informazioni tecniche dell’hosting Web <a name="technical-infos-web-hosting"></a>

Accedi alla pagina <https://webhosting-infos.hosting.ovh.net> e verifica le librerie, i linguaggi e le versioni disponibili per il tuo hosting Web

Per conoscere le specifiche tecniche del servizio Cloud Web, clicca su questa pagina: <https://cloudweb-infos.hosting.ovh.net/>.

### Informazioni sui backup automatici <a name="backup"></a>

> [!warning]
>
> OVHcloud fornisce un servizio di backup automatico dei dati e la messa a disposizione di questi backup. *non contrattuale* ed è presente in aggiunta ai tuoi servizi. Effettivamente, è vostra responsabilità impostare la vostra propria politica di ripristino e determinare i punti di ripristino nel momento che ritenete opportuno.
>

#### Spazio disco / spazio di archiviazione FTP

Tutte le nostre offerte di hosting Web condiviso situate:

- a Gravelines (GRA), in Francia, dispongono di backup automatici al G-1 / G-2 / G-3 / G-7 / G-14. Questi backup sono salvati anche nel datacenter di Roubaix (RBX), in Francia;

- a Beauharnois (BHS), Canada, dispongono di backup automatici al G-1 / G-2 / G-3 / G-7 / G-14. Questi backup sono salvati anche nel datacenter di Beauharnois (BHS), in Canada.

Questa guida ti mostra come [accedere allo spazio di storage FTP del tuo hosting Web](/pages/web_cloud/web_hosting/ftp_connection) o [ripristinare lo spazio di storage FTP del tuo hosting Web](/pages/web_cloud/web_hosting/ftp_save_and_backup) nelle nostre guide.

#### Database / SQL

> [!warning]
>
> OVHcloud fornisce un servizio di backup automatico dei dati e la messa a disposizione di questi backup. *non contrattuale* ed è presente in aggiunta ai tuoi servizi. Effettivamente, è vostra responsabilità impostare la vostra propria politica di ripristino e determinare i punti di ripristino nel momento che ritenete opportuno.
>

Per i database condivisi (inclusi nella tua offerta di hosting Web) o i server di database (Web Cloud Databases), proposti su Gravelines (GRA), in Francia e Beauharnois (BHS), in Canada, il backup dei database è fatto tutti i giorni. Questi backup sono accessibili (dallo [Spazio Cliente OVHcloud](/links/manager){.external} o tramite le [API OVHcloud](https://api.ovh.com/). I backup vengono inoltre archiviati su un'altra infrastruttura. Questi dati vengono replicati in un datacenter situato a Strasburgo (SBG). La politica di conservazione dei backup è di 30 giorni.

Questa guida ti mostra come [Recuperare il backup del database di un hosting Web](/pages/web_cloud/web_hosting/sql_database_export) nella nostra documentazione.

#### E-mail

> [!warning]
>
> OVHcloud fornisce un servizio di backup automatico dei dati. *non contrattuale* ed è presente in aggiunta ai tuoi servizi. Effettivamente, è vostra responsabilità impostare la vostra propria politica di ripristino e determinare i punti di ripristino nel momento che ritenete opportuno.
>

Per gli account email condivisi (inclusi nella soluzione di hosting Web scelta), viene effettuato un backup automatico giornaliero, che viene copiato in un altro datacenter.

### Politica di utilizzo dei cookies

**Cookies e tracciatori utilizzati nell'ambito della fornitura del servizio di hosting condiviso.**

Per garantire il buon funzionamento dei siti Internet ospitati nell’ambito del servizio di hosting Web condiviso, il cookie "SERVER ID" è collocato sui terminali dei visitatori del sito. Il cookie "SERVER ID" garantisce un servizio di ripartizione del carico del traffico in entrata tra le diverse infrastrutture utilizzate per l’hosting del sito Internet (OVHcloud Load Balancer). che consente all’utente di utilizzare lo stesso server host per tutta la durata della sessione. 

> [!success]
>
> Nel linguaggio informatico, si definisce "sessione" un periodo di tempo durante il quale un dispositivo (computer, smartphone, ecc.) interagisce con un server.
>

In questo modo viene mantenuta e preservata la coerenza del percorso dell’utente.

Il cookie "SERVER ID" è un file di testo salvato nel terminale dell’utente che indica l’istanza (server) dell’infrastruttura con cui l’utente interagisce. Il cookie è anonimo, nel senso che non viene utilizzato alcun dato personale dell’utente.

Il cookie "SERVER ID" è collocato sul terminale dell’utente per una durata inferiore a 24 ore.

Per quanto riguarda un cookie:

 - 1: necessario al funzionamento del servizio di hosting web condiviso;
 - 2: anonimo.

Non è interessato dalla raccolta preventiva del consenso del visitatore del sito internet ai sensi del Regolamento Generale sulla Protezione dei Dati (GDPR).

### Informazioni sugli strumenti di statistica

**OVHcloud Web Statistics**

OVHcloud mette a disposizione del cliente le statistiche sugli accessi e sull'analisi delle visite al/i sito/i internet ospitato/i nell'ambito del servizio di hosting condiviso. (d’ora in poi "OVHcloud Web Statistics"). "OVHcloud Web Statistics" permette, in particolare, di identificare la zona geografica degli utenti dei siti internet, le caratteristiche dei loro terminali, le pagine visitate e i codici HTTP. "OVHcloud Web Statistics" è attivo, di default, nell’ambito del servizio di un hosting condiviso e può essere disattivato su richiesta del cliente, contattando il supporto tecnico. Per fornire "OVHcloud Web Statistics", è necessario il trattamento dei dati personali da parte di OVHcloud.

I report "OVHcloud Web Statistics" si basano su dati di traffico anonimizzati, come l’indirizzo IP e i log degli utenti dei siti internet ospitati nell’ambito di un piano di hosting condiviso, l’URL della richiesta, la durata della richiesta e lo "useragent".

Per poter essere utilizzati nell’ambito di "OVHcloud Web Statistics", i dati citati precedentemente sono anonimizzati e aggregati mediante algoritmi operati da OVHcloud all’interno delle proprie infrastrutture. In particolare, l’indirizzo IP del visitatore presente nei dati di traffico viene estratto in forma anonima, prima di essere trattato e analizzato per determinarne la geolocalizzazione (limitata a un livello regionale). Pertanto, nell’"OVHcloud Web Statistics" non viene conservato alcun dato personale che consenta l’identificazione, diretta o indiretta, dei visitatori sopra citati.  

## Per saperne di più <a name="go-further"></a>

[Connettersi allo spazio di storage FTP del proprio hosting Web](/pages/web_cloud/web_hosting/ftp_connection)

[Attivare il protocollo HTTPS su un sito Internet tramite SSL](/pages/web_cloud/web_hosting/ssl-activate-https-website)

[Ottimizzazione delle prestazioni del sito](/pages/web_cloud/web_hosting/optimise_your_website_performance)

[Ripristinare lo spazio di storage FTP di un hosting Web](/pages/web_cloud/web_hosting/ftp_save_and_backup)

[Recuperare il backup del database di un hosting Web](/pages/web_cloud/web_hosting/sql_database_export)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).