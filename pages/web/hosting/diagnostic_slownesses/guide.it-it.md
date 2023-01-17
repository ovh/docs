---
title: "Il mio sito è lento. Cosa fare?" 
excerpt: "Individua l'origine delle lentezze del tuo sito Web e scopri come risolvere questa situazione"
slug: slow-website-fix
sezione: Diagnostica
order: 01
---

**Ultimo aggiornamento: 01/03/2023**
 
> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

## Obiettivo

Un rallentamento nel tuo sito è dovuto a un carico troppo lungo per visualizzare l'insieme o alcune parti del tuo sito. 

Se il caricamento è troppo lungo, la richiesta effettuata dal tuo browser può raggiungere il tempo massimo di esecuzione autorizzato dal server in cui si trova il tuo hosting. In questo caso, il server restituisce il codice "**504 Gateway Timeout**" per segnalare al visitatore che la variabile "max_execution_time" è stata raggiunta, il che blocca anche l'esecuzione della richiesta.

I rallentamenti hanno principalmente due cause:

- sovraccarico dell'infrastruttura condivisa su cui è ospitato il tuo sito
- una richiesta troppo lunga o troppo onerosa da eseguire sull'infrastruttura condivisa in cui è ospitato il tuo sito 

La maggior parte dei ritardi è dovuta al sito Internet e non all'hosting condiviso. Abbiamo creato questa guida per aiutarti al meglio in questa situazione.

In rari casi, la visualizzazione lenta può anche provenire dal tuo provider Internet o da una connessione Internet troppo bassa. Verifica la tua connettività di rete **prima** di proseguire la diagnostica.

**Questa guida ti mostra come diagnosticare l'origine dei ritardi nel tuo sito Web e agire di conseguenza.**

> [!primary]
>
> **Dopo aver eseguito tutte le diagnostiche indicate in questa guida**, se il rallentamento viene generato dalla nostra infrastruttura di hosting, ti ricordiamo che è condivisa tra più utenti.
>
> Gli utenti condividono le risorse dell'infrastruttura di hosting condivisi per far funzionare i loro siti Web. Se uno di loro è su richiesta dell'infrastruttura condivisa, ciò può avere conseguenze sugli altri hosting presenti sulla stessa infrastruttura.
>
> I nostri hosting condivisi non dispongono di "Service Level Agreement" (SLA). 
>
> In caso di necessità di un servizio con un tasso di disponibilità SLA superiore al 99%, ti consigliamo di considerare l'utilizzo di un [Server Privato Virtuale (VPS)](https://www.ovhcloud.com/it/vps/) o di un [Server Dedicato](https://www.ovhcloud.com/it/bare-metal/).
>
> Inoltre, le prestazioni dell'infrastruttura di hosting condivisi OVHcloud sono monitorate 24 ore su 24 e 7 giorni su 7, al fine di garantirti un alto tasso di disponibilità e, in caso di comprovata necessità, un rapido ripristino dei tuoi servizi.
>

## Prerequisiti

- Disporre di un sito ospitato su una delle nostre offerte di [hosting condiviso OVHcloud](https://www.ovhcloud.com/it/web-hosting/)
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a uno [specialista del settore](https://partner.ovhcloud.com/it/). OVHcloud non sarà infatti in grado di fornirti assistenza **se l'infrastruttura in cui è presente la tua offerta di hosting condiviso non è interessata**. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questa guida.
>

> [!success]
>
> Ti consigliamo di registrare i risultati della diagnostica in base ai tuoi progressi in questa guida. In effetti, questi risultati si riveleranno molto utili per la risoluzione della sua situazione, qualunque sia la causa della lentezza.
>

### Comprendere la nozione di Time To First Byte (TTFB)

Il *Time To First Byte* (TTFB) rappresenta la durata che il tuo hosting Web trasmetterà per inoltrare il primo byte di dati al tuo browser in seguito a una richiesta effettuata da quest'ultimo per visualizzare il tuo sito Web.

Se l'infrastruttura di hosting condiviso non presenta sovraccarichi e il tuo sito Internet è ottimizzato al massimo, il TTFB non supera gli 800 ms.

**Un TTFB elevato non significa automaticamente che i tuoi ritardi provengano dal tuo hosting condiviso.**

Infatti, per Content Managment System (CMS) come WordPress, Joomla!, PrestaShop o Drupal, la pagina che chiamate dal browser può generare richieste complementari internamente sul tuo hosting. Il tuo hosting non restituirà nulla al tuo browser fino a quando queste richieste interne non saranno state completate.

> **Esempio**:
>
> Dal browser, ti consigliamo di visualizzare la home page del tuo sito Web. La richiesta telefonerà di default al file "**index.php**" del tuo sito Web.
>
> Una volta inoltrata la richiesta, il file "**index.php**" viene eseguito dal server web del tuo hosting condiviso. 
>
>Nella sua esecuzione, il file "**index.php**" deve recuperare informazioni tra gli altri file che compongono il tuo sito web e gli elementi presenti nel tuo database. 
>
>Ogni richiesta di informazioni genera una richiesta interna sul tuo servizio di hosting. 
>
>Il file "**index.php**" aspetta di avere il risultato di tutte le richieste interne richieste **prima** di rinviare il primo byte di dati al tuo browser.
>
>Se il tuo file "**index.php**" genera richieste "lente" o farraginose da eseguire, il TTFB sarà elevato e il tuo sito richiederà diversi secondi per essere visualizzato. Le prestazioni della tua offerta di hosting non sono quindi in dubbio.

Gli strumenti di diagnostica online ti permettono di recuperare il TTFB dal tuo hosting. Tuttavia, la maggior parte di loro funziona come browser e i loro risultati vanno relativizzati.<br>
Questi strumenti non sono infatti in grado di prendere in carico le richieste interne richieste dal file che hai chiamato tramite il tuo browser, come nell'esempio con il file "**index.php**".

### Step 1 - verifica se i ritardi provengono dall'hosting o dal tuo sito Web

Questo primo step ti permette di determinare se le lentezze provengono:

- del tuo sito, per il suo funzionamento interno;
- dell'infrastruttura di hosting condiviso in cui si trova il tuo sito.

Tutte le diagnostiche dello step 1 devono essere eseguite **senza eccezione** per determinare se i rallentamenti provengono dai tuoi servizi di hosting Web o dal sito Web su cui ti trovi.

#### 1.1 - Verifica lo stato dei tuoi servizi OVHcloud

Per garantire che i tuoi servizi (hosting condiviso **e** database) non siano oggetto di manutenzione o incidente, recupera le informazioni sul cluster e il filer del tuo hosting condiviso, così come le informazioni generali relative al tuo database. In seguito potrai verificare il loro stato su [status.ovhcloud.com](https://web-cloud.status-ovhcloud.com/).

Accedi al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), clicca su `Web Cloud`{.action}, seleziona il cluster e il file in cui si trova il tuo hosting condiviso, clicca su `Hosting`{.action} e seleziona l'hosting Web corrispondente. Nella scheda `Informazioni generali`{.action}, clicca su `datacenter` del tuo hosting condiviso e `filer` dov'è.

![Recupera Filer](images/DropFilerCluster1.png){.thumbnail}

Clicca sulla scheda `Multisito`{.action} per recuperare il numero del cluster in cui si trova il tuo hosting condiviso.

![Recuperare cluster](images/DropFilerCluster2.png){.thumbnail}

> [!success]
>
> Se un incidente o una manutenzione sono dichiarati sull'infrastruttura in cui si trova il tuo hosting condiviso, segui questi ultimi fino alla loro risoluzione da parte dei nostri amministratori. **Non è necessario effettuare altre azioni al tuo livello**.
>
> Puoi iscriverti con il tuo indirizzo email alla dichiarazione di incidente o di manutenzione per ricevere una notifica via email sullo stato di avanzamento delle operazioni.
>
> Una volta che lo stato dell'incidente o della manutenzione è stato marcato come **risolto**, la stabilizzazione del carico accumulato può richiedere un tempo massimo di **3 ore** dopo la notifica di risoluzione per potersi riassorbire completamente.
>

Se non vengono segnalati incidenti o interventi di manutenzione, prosegui nella diagnostica.

#### 1.2 - Testare il sito su più dispositivi

Prova il tuo sito Web da un altro dispositivo/computer e poi da un altro punto di accesso a Internet. Svuotare la cache del tuo browser ogni volta che vuoi, in modo che il tuo sito sia caricato direttamente dall'hosting Web.

#### 1.3 - Prova l'hosting con un file indipendente dal tuo sito Web

Nella root del tuo sito Web accedi allo [spazio di storage FTP del tuo hosting condiviso](https://docs.ovh.com/it/hosting/accedere-spazio-storage-ftp-hosting-web/), un file che potrai chiamare `phpinfo.php`.

Inserisci questo codice nel file:

```bash
<?php
phpinfo();
?>
```

> [!warning]
>
> In alcuni casi, i file "**.htaccess**" presenti nelle directory/cartelle a monte o allo stesso livello del luogo in cui hai inserito il tuo file "**phpinfo.php**" possono influire sulla visualizzazione in un browser del "**phpinfo.php**". 
>
> Le operazioni su un file "**.htaccess**" possono avere conseguenze sulla visualizzazione del tuo sito. In caso di difficoltà o dubbi, rivolgiti a un [fornitore specializzato](https://partner.ovhcloud.com/it/).
>
> Se non compare e **solo per gli utenti esperti**, rinomina i tuoi file "**.htaccess**" in "**.htaccess_OLD**" affinché il server non li esegua più durante il test. Rinominali correttamente una volta completata la diagnostica.
>

**Esempio**: se il dominio che permette l'accesso al tuo sito è "domain.tld" e se il file "**phpinfo.php**" è stato inserito alla radice del tuo sito web, quest'ultimo sarà accessibile tramite il seguente URL: `http://domain.tld/phpinfo.php` (o `https://domain.tld/phpinfo.php`).

> [!primary]
>
> Se la chiamata del file "**phpinfo.php**" mostra **istantaneamente** una tabella di configurazione, significa che i rallentamenti non provengono dall'hosting condiviso in cui si trova il tuo sito Web. In caso contrario, il file apparirà così lentamente come le altre pagine. 
>
> In altre parole, se i ritardi si verificano solo in parte delle pagine o del contenuto del tuo sito Web, significa che l'hosting condiviso **non è la causa dei ritardi*** riscontrati sul tuo sito Web.
>

#### 1.4 - Prova la connettività del tuo database:

Accedi al tuo database seguendo **lo step 3** della nostra guida sulla [creazione di un database condiviso](https://docs.ovh.com/it/hosting/creare-database/).

Se utilizzi un database su un'offerta **Web Cloud Databases**, consulta la nostra guida su [la connessione al tuo database presente su un'offerta Web Cloud Databases](https://docs.ovh.com/it/clouddb/connessione-database-server-bdd/).

Se la connessione è andata a buon fine, accedi all'interfaccia seguente:

![PHPMyAdmin](images/pma.png){.thumbnail}

> [!warning]
>
> In caso di errore, consulta la nostra guida sugli [errori ricorrenti riscontrati nel database](https://docs.ovh.com/it/hosting/errori-frequenti-database/). Per correggere la posizione del tuo database, utilizza la guida qui sotto.
>

#### 1.5 - Interpretazione delle diagnostiche effettuate

**Caso n°1**

Le seguenti affermazioni si applicano **tutte** alla tua situazione:

- almeno una pagina, uno script o un file (incluso il file "**phpinfo.php**") si è caricato rapidamente durante i test dello step 1;
- la connessione al tuo database è stata effettuata correttamente durante i test dello Step 1.

> Significa che i ritardi riscontrati provengono direttamente dagli script che compongono il tuo sito Web. È possibile passare direttamente allo Step 2 per seguire i consigli di ottimizzazione per risolvere la tua situazione.

**Caso n°2**

Le seguenti affermazioni si applicano **tutte** alla tua situazione:

- **nessun incidente e nessuna manutenzione** sono dichiarati o sono stati dichiarati come **risolti** meno di tre ore fa per i tuoi servizi di hosting Web sul nostro sito [status-ovhcloud.com](https://web-cloud.status-ovhcloud.com/);
- il **caso n°1** dettagliato di cui sopra non corrisponde alla tua configurazione.

> Saranno necessarie ulteriori indagini da parte di OVHcloud. Contatta i nostri servizi di assistenza sulle soluzioni Web per confermare con te l'origine dei rallentamenti riscontrati.

### Step 2 - identifica la(le) fonte(e) che genera(no) la(le) lentezza(e) del tuo sito Web <a name="step2"></a>

A questo punto, sai che i rallentamenti sono generati dalle pagine/script/file che compongono il tuo sito Web.

> [!warning]
>
> In caso di difficoltà nell'esecuzione delle azioni successive, contatta uno dei nostri [specialisti del settore](https://partner.ovhcloud.com/it/). OVHcloud non fornirà assistenza nello sviluppo e/o nell'ottimizzazione del contenuto del tuo sito Web.
>

Di seguito trovi le azioni da effettuare per identificare la fonte o le fonti dei rallentamenti e ottimizzare il tuo sito Web.

#### 2.1 - Verifica la configurazione del tuo hosting Web

Per verificare il motore PHP, la versione PHP e l'ambiente di esecuzione utilizzati sull'hosting Web, consulta la guida sulla [configurazione del tuo hosting Web](https://docs.ovh.com/it/hosting/modifica_lambiente_di_esecuzione_del_tuo_hosting_web/).

Se utilizzi sul tuo hosting Web una versione di PHP obsoleta, il motore "**PHP CGI**" e/o l'ambiente "**legacy**" e **se il tuo sito Web è compatibile**, preferisci l'utilizzo del motore "**PHP**" (PHP FPM), l'ambiente "**stable**" o "**stable64**" versione di PHP più recente possibile.

Per confrontare le versioni di PHP disponibili in base all'ambiente di esecuzione utilizzato, consulta **lo Step 2** della guida sulla [configurazione della versione PHP sul tuo hosting](https://docs.ovh.com/it/hosting/configura_php_sul_tuo_hosting_web_condiviso_2014_ovh/).

Utilizzare una versione di PHP recente, l'ambiente di esecuzione "**stable**" o "**stable64**" con il motore "**PHP**" (PHP FPM) rende il tuo sito molto più fluido e veloce. A titolo indicativo, il motore "**PHP**" (PHP FPM) può essere fino a 50 volte più performante del motore "**PHP CGI**" per eseguire i suoi compiti.

#### 2.2 - Analizza le connessioni in uscita / le connessioni TCP realizzate dal tuo hosting Web

Le connessioni in uscita richiedono molte risorse. Quando queste connessioni sono numerose, quando non vengono eseguite correttamente o restano attive per troppo tempo, monopolizzano talmente tante risorse a livello dell'hosting Web che non ne restano abbastanza per far funzionare normalmente il resto del sito. 

Questo si traduce in rallentamenti o addirittura in codici "504 gateway timeout".

Per analizzare le connessioni in uscita dal tuo hosting, consulta i log **OUT** di quest'ultimo. Consulta la nostra guida su [consulta i log del tuo hosting](https://docs.ovh.com/it/hosting/hosting_condiviso_consulta_le_statistiche_e_i_log_del_tuo_sito/).

Se rilevi che sul tuo hosting sono presenti molte connessioni in uscita, confronta i tuoi log **OUT** con i tuoi log **WEB** con l'aiuto dell'orario di questi ultimi. per identificare gli script responsabili.

Se utilizzi un Content Management System (CMS) come WordPress, Joomla!, PrestaShop o Drupal, identifica il plugin o i plugin e/o il tema che genera questo flusso di connessioni in uscita.

#### 2.3 - Analizza il flusso di richieste HTTP verso il tuo hosting Web:

Per effettuare questa azione, consulta i log **WEB** del tuo hosting web utilizzando la nostra guida su [Come consultare i log del tuo hosting](https://docs.ovh.com/it/hosting/hosting_condiviso_consulta_le_statistiche_e_i_log_del_tuo_sito/).

Le richieste più impegnative in termini di risorse sono le richieste HTTP di tipo **POST** e quelle di tipo **PUT**. Queste ultime eseguono rispettivamente modifiche e inserzioni.

Le richieste HTTP di tipo **GET** non fanno altro che recuperare elementi presenti sull'hosting, per visualizzarli nel browser. In genere, le risorse sono poco onerose. Possono tuttavia provocare rallentamenti se diverse centinaia di esse vengono richieste ogni secondo nell'arco di diversi minuti.

Se nei log riscontri una delle seguenti situazioni:

- richieste di tipo **POST** o **PUT** sono effettuate più volte al minuto e in modo permanente;
- le richieste **POST** o **PUT** sono eseguite più volte al minuto su uno stesso file.

Identifica e ottimizza lo script/file per diminuire il flusso di richieste HTTP.

Infatti, meno il numero di richieste sarà elevato, meno saranno richieste le risorse destinate al tuo hosting condiviso.

> [!success]
>
> Per identificare gli elementi lunghi da caricare su una delle pagine del tuo sito web, puoi ad esempio effettuare un'analisi di rete tramite il browser **Firefox**. 
>
> cliccando sul tasto `F12` quando sei sul tuo browser Firefox e poi seleziona la scheda `Rete`. Ricarica la tua pagina Web con i tasti `Ctrl + Maj + R` per visualizzare le richieste eseguite per caricare la tua pagina. Identifica gli elementi più lunghi da caricare e ottimizzarli.
>
>![Analisi di rete Firefox](images/F12.png){.thumbnail}
>

Per diminuire il flusso di richieste a ogni caricamento delle tue pagine, puoi anche impostare una Content Delivery Network (CDN). che permetterà di mettere in cache il contenuto statico del tuo sito Web. Il tuo hosting Web sarà meno sollecitato e disporrà di maggiori risorse per gestire le altre richieste che non possono essere salvate in cache.

> [!primary]
>
> OVHcloud propone diverse [offerte CDN](https://www.ovhcloud.com/it/web-hosting/options/). Per utilizzarne o attivarne uno per il tuo hosting Web, accedi al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) e consulta la nostra guida su [l'utilizzo della CDN OVHcloud](https://docs.ovh.com/it/hosting/guida_allutilizzo_dellacceleratore_geocache_su_un_hosting_web/).
>

#### 2.4 - ottimizza il tuo database

> [!warning]
>
> Le azioni eseguite nei database possono avere conseguenze irreversibili se non eseguite in modo corretto e metodico. Se non sei sicuro delle azioni da realizzare, rivolgiti a un [provider specializzato](https://partner.ovhcloud.com/it/). 
>

Verifica che vengano effettuate richieste in quantità sufficiente verso il tuo database.<br>
In effetti, questa situazione può provocare una sovrasollecitazione e portare a rallentamenti o addirittura a codici "504 Gateway Timeout".

Controlla anche la dimensione delle tue tabelle presenti nel tuo database.<br>
Se il tavolo viene chiamato regolarmente e si tratta di una tavola voluminosa, il caricamento di questa tavola può essere più lento e generare richieste lente.<br>
L'accumulo di queste richieste lente può causare rallentamenti di accesso al sito e persino un codice "504 Gateway Timeout".

Se disponi di tabelle voluminose o flussi di richieste in database consistenti, ottimizza le tue tabelle e installa soluzioni che permettono di diminuire il flusso di richieste verso il tuo database.

Se riscontri la presenza di dati inutilizzati o obsoleti nel tuo database, pulitilo per migliorare le performance quotidiane.

#### 2.5 - Ottimizza le tue immagini

Se, ad esempio, sul tuo sito è presente un'immagine con risoluzione "1000x2000" che compare al massimo in 100x200 pixel sulla pagina del tuo sito web, questo comporta un consumo di risorse sul lato hosting che può essere ottimizzato.

Il server dovrà infatti effettuare un'operazione di ridimensionamento dell'immagine e poi mostrarla alla dimensione richiesta sul sito web.

Se il tuo sito contiene molte immagini, questo può comportare un consumo di risorse non trascurabile a livello delle risorse assegnate al tuo hosting.

Ridimensiona l'insieme delle tue immagini per ridurre al minimo il consumo di risorse.

#### 2.6 - Ottimizza il resto del tuo sito web

Consulta la nostra guida sull'[ottimizzazione delle performance per il tuo sito Internet](https://docs.ovh.com/it/hosting/web_hosting_ottimizza_le_performance_del_tuo_sito/).

Per ottimizzare il tuo sito è possibile consultarlo su [gtmetrix.com](https://gtmetrix.com){.external} (il sito non è associato a OVHcloud).

> [!success]
>
> Indipendentemente dalla lentezza, maggiore sarà l'ottimizzazione del tuo sito Web, maggiore sarà la sua referenziazione naturale nei motori di ricerca.

### Conclusioni

Se il tuo hosting Web e il tuo database **non sono in causa** e il tuo sito Web continua ad essere lento, nonostante la realizzazione di **tutti gli step** di questa guida, probabilmente l'offerta che utilizzi per ospitare il tuo sito Web non è o non è più adatta alle tue necessità. 

È possibile scegliere una [offerta di hosting condiviso](https://www.ovhcloud.com/it/web-hosting/) superiore o un'infrastruttura dedicata come [Server Privato Virtuale (VPS)](https://www.ovhcloud.com/it/vps/) o un [Server Dedicato](https://www.ovhcloud.com/it/bare-metal/). 

## Per saperne di più <a name="go-further"></a>

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com/en/>.
