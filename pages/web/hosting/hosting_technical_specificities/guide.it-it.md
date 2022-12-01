---
title: 'Specifiche tecniche degli hosting condivisi'
excerpt: 'Questa guida contiene informazioni e specifiche tecniche degli hosting condivisi'
slug: hosting_condiviso_specifiche_tecniche
section: Configurazione dell’hosting
order: 05
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 21/11/2022**

## Obiettivo

**Questa guida ti mostra i dettagli tecnici relativi all’infrastruttura degli hosting Web OVHcloud, in base alle domande più frequenti.**

## Prerequisiti

- Disporre di un piano di [hosting Web](https://www.ovhcloud.com/it/web-hosting/){.external} attivo
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}

## Procedura

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un fornitore specializzato o l’amministratore del servizio. OVHcloud non può fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione “Per saperne di più”.
> 

### FTP

- Errore di accesso (“Autenticazione di connessione 530 non riuscita”): È possibile verificare la correttezza delle credenziali di accesso allo Spazio Cliente FTP dal tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} nella scheda `FTP - SSH`. La password non vengono mai mostrate, ma possono essere modificate. Consulta le nostre [guide FTP](../accedere-spazio-storage-ftp-hosting-web/).

- Le connessioni FTP devono utilizzare la **modalità passiva**. Assicurati che il tuo script o il tuo client FTP siano configurati correttamente.

### E-mail <a name="emails"></a>

Per garantire una buona qualità di servizio per tutti e semplificare l'invio delle tue email ai tuoi destinatari, applichiamo delle quote relative ai nostri servizi di hosting Web.

Per un periodo di 3600 secondi (1 ora), la tua offerta di hosting ti permetterà di inviare queste email:

|Offerte|Start 10M|Perso|Pro|Performance|
|---|---|---|---|---|
|Quantità massima di invio di email per ora e per servizio|10|100|200|2000|

- A parte spamming o phishing, la spedizione delle tue email può essere differita. Le tue email saranno conservate in coda fino a che il numero di email inviate nell'arco dell'ora è inferiore alla quota.
- In caso di abuso o rischio accertato, il tuo servizio verrà sospeso e riceverai un'email di notifica della sospensione. Cosa fare in caso di account bloccato per Spam? [Consulta la nostra guida](https://docs.ovh.com/it/microsoft-collaborative-solutions/blocco-per-spam/).

### Database/SQL

### Connessioni simultanee al database

- Sui piani di hosting Web (database condivisi), sono possibili un massimo di 30 connessioni simultanee per database (200 con il database CloudDB). Per verificare le opzioni disponibili in ciascuno dei nostri piani di hosting Web, consulta i [dettagli delle nostre offerte di hosting](https://www.ovhcloud.com/it/web-hosting/).

- Inoltre è possibile ordinare database **CloudDB** aggiuntivi, che dispongono di opzioni di personalizzazione.

    - *max_connections*: 100 di default, con possibilità di passare a 200

    - *max_user_connections*: 50 di default, con possibilità di passare a 200

Per saperne di più, consulta i dettagli delle nostre [soluzioni di hosting](https://www.ovhcloud.com/it/web-hosting/) e [la nostra guida](https://docs.ovh.com/it/clouddb/iniziare-a-utilizzare-clouddb/).

#### Connessioni dal server esterno

- Per ragioni di sicurezza, non è consentita la connessione al database di un hosting Web OVHcloud da un server esterno, sia che si tratti di database SQL condivisi oppure CloudDB. Solo i server OVHcloud Web Hosting possono connettersi ai server di database. Qualsiasi altro tipo di connessione genererà il seguente errore: 

```bash
Warning: MySQL Connection Failed: Host ip.your.connection is not allowed to connect ...
```


#### Variabili di server SQL condiviso

- Accedi all’interfaccia PhpMyAdmin e inserisci**show variables** per verificare le variabili del server MySQL.

- La versione MySQL non può essere modificata per i database integrati all’hosting Web.

Per maggiori informazioni sulla gestione dei database, consulta la guida [Creare un database su un hosting Web](../creare-database/).

### PHP

- Ti consigliamo di consultare le nostre [soluzioni di hosting Web](https://www.ovhcloud.com/it/web-hosting/uc-programming-language/) per assicurarti che il piano che vuoi acquistare sia adatto alle tue esigenze. 

> [!warning]
>
> La modifica del file **php.ini** non è disponibile sulle offerte di hosting condiviso. La configurazione PHP è globale per l'intera infrastruttura condivisa.
>

- È possibile verificare i dettagli della configurazione del tuo hosting Web. Per farlo, consulta la rubrica \[”Informazioni tecniche del tuo hosting Web”\](.#informazioni-tecniche-del-tuo-hosting-web) in fondo a questa guida. 

- È possibile modificare la versione PHP del tuo hosting Web dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)(“**Configurazione**”) oppure modificando il file .ovhconfig.  In questo ultimo caso sono possibili anche configurazioni miste. Per maggiori dettagli, consulta le nostre guide:

[Configurare il file .ovhconfig di un hosting Web](../configurare-file-ovhconfig/)  
[Modificare la configurazione di un hosting Web](../modifica_lambiente_di_esecuzione_del_tuo_hosting_web/)


> [!primary]
> Il file .ovhconfig è operativo nella cartella radice dell’hosting Web oppure nella sottodirectory di primo livello (di solito _/www/_). L’unico modo per sostituire i parametri principali del file .ovhconfig consiste nell’utilizzare un altro file .ovhconfig in una sottocartella.
> Posizionare questo file più in profondità nella struttura della directory non produrrà alcun effetto (ad es. /www/test_, _/www/test/test2/_). Assicurati che il file possa essere letto dal tuo CMS (CHMOD 604 o 644).


#### PHP-FPM

PHP-FPM è attivo di default sull’infrastruttura di un hosting Web per accelerare le risposte PHP. Attenzione: potrebbe non essere attivo se utilizzi un vecchio piano di hosting Web che non è stato aggiornato (servizi acquistati prima del 2014).

*Senza PHP-FPM, certe variabili possono cambiare:*

|Variabile|Senza PHP-FPM|Con PHP-FPM|
|---|---|---|
|max_execution_time|120s|165s|
|max_input_vars|2000|16000|
|memory_limit|128M|512M|


#### PHP scripts

Una volta connesso al tuo hosting Web in SSH, il traffico sarà bloccato per ragioni di sicurezza. Quindi ti consigliamo di utilizzare gli script PHP. Per maggiori informazioni, consulta la [guida SSH](../hosting_condiviso_il_protocollo_ssh/). Per l’esecuzione dei comandi, consulta la documentazione ufficiale[PHP manuale](https://www.php.net/manual/fr/function.system.php).

Ad esempio, è possibile utilizzare la funzione *gethostbyaddr()* per recuperare il nome dell’host:

```php
1. <?php
2. echo gethostbyaddr($_SERVER["REMOTE_ADDR"]);
3
```


> [!warning]
> OVHcloud non forza gli aggiornamenti PHP. I clienti sono i soli responsabili della sicurezza dei propri servizi e dell’aggiornamento regolare dei software installati.
>


#### Informazioni tecniche sul tuo hosting Web

Consulta le rispettive pagine informative per verificare le librerie disponibili per il tuo piano di hosting Web.

Ulteriori informazioni relative al tuo cluster sono disponibili a questo link: <https://webhosting-infos.hosting.ovh.net>

Sostituisci il cluster indicato nell’URL con il tuo. Per sapere su quale cluster di hosting Web si trova il tuo servizio, accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} e seleziona `Web Cloud`{.action}. Clicca nella sezione `Hosting`{.action} e seleziona il tuo servizio. A questo punto clicca sulla scheda `FTP - SSH`{.action}. Il numero del cluster è indicato nell’URL di accesso FTP al tuo hosting.

Le specifiche tecniche della soluzione di hosting Cloud Web sono disponibili a questo link: <https://cloudweb-infos.hosting.ovh.net/>

### Informazioni sui backup automatici <a name="backup"></a>

> [!warning]
>
> OVHcloud si impegna a fornire un servizio di backup automatico dei dati e la loro messa a disposizione. E' tuttavia sua responsabilità attuare la sua politica di ripristino e individuare i punti di ripristino nei momenti che ritiene opportuni.

##### spazio disco

Tutte le nostre offerte di hosting web condiviso situate:

- a Gravelines (GRA), in Francia, dispongono di backup automatici a J-1 / J-2 / J-3 / J-7 / J-14. Questi backup sono salvati anche nel datacenter di Roubaix (RBX), in Francia.

- a Beauharnois (BHS), Canada, dispongono di backup automatici a J-1 / J-2 / J-3 / J-7 / J-14. Questi backup sono salvati anche nel datacenter di Beauharnois (BHS), in Canada.

Questa guida ti mostra come [accedere allo spazio di storage](https://docs.ovh.com/it/hosting/accedere-spazio-storage-ftp-hosting-web/) o [ripristinare lo spazio di storage di un hosting Web](https://docs.ovh.com/it/hosting/web_hosting_recupera_un_backup_completo_o_un_file_in_ftp_con_filezilla/) nelle nostre guide.

#### Database / SQL

Per i database condivisi (inclusi nella tua offerta di hosting Web) o i server di database (CloudDB), proposti su Gravelines (GRA), in Francia e Beauharnois (BHS), in Canada, il backup dei database è effettuato quotidianamente. Questi backup sono accessibili via [Spazio Cliente OVHcloud](	https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} o tramite le [API OVHcloud](https://api.ovh.com/). I backup sono salvati anche su un'altra infrastruttura. Questi dati sono replicati in 3 punti distinti in Francia: Roubaix (RBX), Strasburgo (SBG) e Gravelines (GRA). La politica di mantenimento dei backup è di 30 giorni.

Questa guida ti mostra come [Recuperare il backup del database di un hosting Web](https://docs.ovh.com/it/hosting/web_hosting_come_esportare_un_database/) nella nostra guida.

#### Email

Per gli account email condivisi (inclusi nella tua offerta di hosting Web), viene effettuato un backup automatico giornaliero e copiato in un altro datacenter.

## Politica di utilizzo dei cookies

**Cookies e tracciatori utilizzati nell’ambito della fornitura del servizio di hosting condiviso.**

Per garantire il buon funzionamento dei siti internet ospitati nell’ambito del servizio di hosting condiviso, il cookie “SERVER ID” è collocato sui terminali dei visitatori del sito. Il cookie « SERVER ID » garantisce un servizio di ripartizione del carico del traffico in entrata tra le diverse infrastrutture utilizzate per l’hosting del sito Internet (OVHcloud Load Balancer). Inoltre, consente all’utente di utilizzare lo stesso server host per tutta la durata della sessione. Questo servizio permette di mantenere e preservare la coerenza del percorso dell’utente.

Il cookie SERVER ID è un file di testo salvato nel terminale dell’utente che indica l’istanza (server) dell’infrastruttura con cui l’utente interagisce. Il cookie è anonimo, nel senso che non viene utilizzato nessun dato personale dell’utente.

Il cookie “SERVER ID” permane sul terminale dell’utente per una durata inferiore a 24 ore.

Poiché si tratta di un cookie necessario al funzionamento del servizio di hosting condiviso e anonimo, non prevede la raccolta preventiva del consenso al trattamento dei dati da parte del visitatore del sito internet, ai sensi del Regolamento Generale sulla Protezione dei Dati (GDPR). 

## Informazioni sugli strumenti di monitoraggio

**OVHcloud Web Statistics**

OVHcloud mette a disposizione del cliente le statistiche sugli accessi e sull’analisi delle visite al/i sito/i internet ospitato/i nell’ambito di un servizio di hosting condiviso (d’ora in poi “OVHcloud Web Statistics”). OVHcloud Web Statistics consente, in particolare, di individuare la zona geografica degli utenti dei siti internet, le caratteristiche dei loro terminali, le pagine visitate e i codici HTTP.  OVHcloud Web Statistics è attivo, di default, nell’ambito del servizio di hosting condiviso e può’ essere disattivato su semplice richiesta da parte del cliente, contattando il supporto tecnico. Per fornire “OVHcloud Web Statistics”, è necessario il trattamento dei dati personali da parte di OVHcloud.

I report di OVHCloud Web Statistics si basano su dati di traffico anonimizzati, come l’indirizzo IP e i log dei visitatori dei siti internet ospitati nell’ambito del servizio di hosting condiviso, l’URL della richiesta, la durata della richiesta e lo “useragent”.

Per poter essere utilizzati nell’ambito del servizio OVHcloud Web Statistics, i dati citati precedentemente sono anonimizzati e aggregati mediante algoritmi operati da OVHcloud all’interno delle proprie infrastrutture. In particolare, l’indirizzo IP del visitatore presente nei dati di traffico viene estratto in forma anonima, prima di essere trattato e analizzato per determinarne la geolocalizzazione (unicamente su scala regionale). Pertanto, nell’ambito del servizio OVHcloud Web Statistics, non viene conservato alcun dato personale che consenta l’identificazione, diretta o indiretta, dei visitatori sopra citati.  

## Per saperne di più

[Accedere allo spazio di storage di un hosting Web](../accedere-spazio-storage-ftp-hosting-web/)

[Attivare HTTPS su un sito Internet tramite il certificato SSL](../attivare-https-su-sito-internet-tramite-certificato-ssl/)

[Ottimizza le performance del tuo sito](../web_hosting_ottimizza_le_performance_del_tuo_sito/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.