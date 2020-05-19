---
title: 'Ottimizza le performance del tuo sito'
excerpt: 'Guida all''ottimizzazione delle performance del tuo sito'
id: '1396'
slug: web_hosting_ottimizza_le_performance_del_tuo_sito
legacy_guide_number: g1396
---

**Ultimo aggiornamento: 05/02/2020**

## Obiettivo
Le performance di un sito possono essere influenzate da diversi fattori. 
Ti proponiamo qualche spunto per risolvere i problemi di un sito lento e per ottimizzarne performance e posizionamento.

**Questa guida ti mostra come migliorare le performance del tuo sito web**.

> [!warning]
> Questa guida ti mostra come utilizzare una o più soluzioni OVHcloud con strumenti esterni e ti illustra le operazioni da eseguire in un contesto specifico. Ricordati di adattare queste operazioni al tuo caso. In caso di difficoltà, rivolgiti a un fornitore specializzato e/o contatta la nostra Community di utenti all’indirizzo<https://community.ovh.com/en/>. OVHcloud non può fornirti alcuna assistenza a questo proposito.

## Prerequisiti
- Una [soluzione Web Hosting OVHcloud](https://www.ovh.it/hosting-web/){.external}
- Una email conferma che la tua soluzione di Web Hosting è stato configurato
- Un [dominio](https://www.ovh.it/domini/){.external}per accedere al tuo sito
- avere accesso allo [Spazio Cliente](https://www.ovh.com/auth/?action=gotomanager){.external}OVHcloud

## Procedura

### Step 1: Definisci il campo di applicazione

#### Domande da porsi in caso di rallentamenti:
Se il tuo sito Web è lento, può essere utile porsi le seguenti domande per restringere il campo d’indagine.

1. **Da quanto tempo riscontri dei rallentamenti?**

Valuta se il problema è legato a una modifica recente apportata al tuo sito, ad esempio l’aggiunta di un nuovo plugin malfunzionante o di un nuovo tema che effettua numerose richieste e può quindi rallentare il sito.
2. **Il rallentamento è temporaneo o permanente?**

Verifica in quale momento della giornata si presentano questi rallentamenti e se corrispondono a una grande affluenza di traffico al sito, o se contemporaneamente vengono avviati altri task.
3. **Su tutto o su parte del tuo sito?**

Se è interessata una sola pagina e non tutto il sito, è utile analizzarla e verificare quale richiesta o script causa il rallentamento.
4. **Viene rilevato un errore? Se sì, di che tipo?**
Verifica se si generano errori per capire meglio la causa del problema. e poi consulta i log per una migliore visione d’insieme.

Le risposte a queste domande possono aiutarti a concentrarti su aspetti ben specifici e a individuare le aree di miglioramento del tuo sito.

I CMS come WordPress, PrestaShop, Drupal o Joomla! utilizzano numerose librerie, in modo che una sola pagina possa contenere molti elementi.
Questi devono essere caricati e letti dal browser Internet dei tuoi utenti.
Ti forniamo alcuni consigli su quale soluzione Hosting Web utilizzare per i CMS sopraelencati in questa [pagina](https://www.ovh.it/hosting-web/){.external}.

Per maggiori informazioni clicca [qui](https://www.ovh.it/hosting-web/quale_piano_di_hosting_scegliere.xml){.external}.


### Step 2: Verifica la versione PHP
L’utilizzo dell’ultima versione php compatibile con il tuo sito può influenzare significativamente le performance del tuo sito.
Per verificarne la compatibilità, consulta [la documentazione ufficiale di PHP](https://php.net/eol.php){.external}.

**PHP-FPM**

Abbiamo adattato PHP-FPM alla nostra infrastruttura Web per accelerare le risposte PHP e ridurre drasticamente il carico CPU.
I test effettuati dimostrano che puoi ottenere performance fino a **7 volte più rapide** di prima.

Utilizzando PHP-FPM cambiano alcune variabili del server:

|Variabile|senza PHP-FPM|con PHP-FPM|
| ------------- |:-------------:| -----:|
|max_execution_time|120s|300s|
|max_input_vars|2000|16000|
|memory_limit|128M|512M|

Per configurare una nuova versione di PHP, consulta [questa guida](https://docs.ovh.com/it/hosting/configura_php_sul_tuo_hosting_web_condiviso_2014_ovh/){.external}.

Per passare all’uso di PHP-FPM nella versione _stabile_o per ottenere informazioni sulle opzioni più avanzate del tuo Web hosting, consulta [questa guida](https://docs.ovh.com/it/hosting/modifica_lambiente_di_esecuzione_del_tuo_hosting_web/){.external}.

Il file _.ovhconfig_ funziona nella root del tuo hosting o nella sottodirectory di livello 1 (es.:_/www/_), ma non nella directory di livello 2 o superiore (es.: _/www/test/_, _/www/test/test2/_)



### Step 3: Verifica i contenuti media (immagini, video, ecc.)
Quando si accede ad un sito web tutti i contenuti devono essere scaricati dal browser.

Questa operazione potrebbe risultare particolarmente problematica quando si accede a un sito non ottimizzato da un dispositivo mobile.

L’utilizzo di immagini e video compressi riduce i tempi di caricamento.
Per ottimizzare i tuoi contenuti puoi utilizzare vari algoritmi e strumenti. I plugin esistono anche per i CMS più comuni.
Spetta a te scegliere quelli che più si adattano alle tue esigenze.

Puoi trovare maggiori informazioni più avanti, allo step 5.

### Step 4: Ottimizza i tuoi script
Correla i grafici relativi all’utilizzo delle risorse del tuo hosting (ulteriori informazioni qui di seguito) per trovare l’origine dei ritardi e poi consulta i log per rilevare le date dei picchi.

Puoi accedere ai tuoi log, alle statistiche e ai grafici direttamente dallo [Spazio Cliente OVHcloud](https://www.ovh.com/manager/web/login.html){.external}.

Per accedere ai log:
- Nella sezione `Hosting`{.action}, clicca sul Dominio.
- Clicca sulla scheda `More+`{.action} e seleziona `Statistiche e log`{.action}.
- Quindi clicca sui link visualizzati per accedere alle_Statistiche sito Web_ oppure ai _Log_.
![logs](images/logs_highlighted.png){.thumbnail}


Per consultare i grafici:
- Nella sezione `Hosting`{.action}, clicca sul Dominio.
-  Vai alla sezione `Informazioni generali`{.action}, scorri fino in fondo alla pagina e consulta i grafici relativi all’utilizzo del tuo hosting.
Qui puoi selezionare il tipo di informazione e il periodo di tempo riguardante i dati da visualizzare.
![graphs](images/graphs_highlighted.png){.thumbnail}

Che tipo di informazioni è possibile visualizzare?

- **Richieste HTTP **: indica il numero di hit medio al sito. (Hit: richiesta di accesso a un qualsiasi file - testo, immagine, ecc. - di una pagina web effettuata dal tuo browser).  Gli hit sono classificati per codice http: 2xx/3xx - 4xx - 5xx

- **Tempo medio di risposta**: corrisponde al tempo medio di risposta delle pagine, distinguendo tra quelle dinamiche e quelle statiche.

- **Superamento del limite consentito**: questo grafico ti mostra l’utilizzo dei Workers PHP e l’eventualità di effettuare un upgrade dell’offerta di hosting. L’utilizzo di PHP-FPM ti aiuta a ridurre l’uso dei Worker PHP.

- **Utilizzo della CPU**: indica l’utilizzo della CPU da parte del tuo sito, cosa che può aiutarti a identificare un possibile sovraccarico.

- **Connessioni in uscita**: permette di vedere le connessioni in uscita realizzate dal server. Ad esempio, in caso di hack, il server può essere utilizzato per attaccare altri siti esterni. Puoi anche verificare le chiamate esterne realizzate dai moduli come Facebook, Twitter, ecc.  Riducendo il numero di richieste TCP in uscita, si riducono i tempi di caricamento, perché se il server da cui stai richiedendo il contenuto impiega molto tempo per rispondere, i tempi di caricamento del tuo sito aumenteranno ulteriormente.

- **Comandi FTP**: mostra i vari comandi FTP utilizzati nell’hosting. Ad esempio i tentativi di accesso riusciti e non riusciti, download, upload, eliminazione file, ecc.

Visualizzi le due seguenti categorie, solo se al momento usi un database sul tuo piano di hosting.
Ricordati di selezionare il nome del tuo database e il periodo che ti interessa.

- **Tempo di risposta SQL**: mostra i tempi di risposta delle richieste

- **Richieste SQL**: mostra la quantità di richieste

### Step 5: Controlla le richieste della rete
Uno strumento utile di analisi è rappresentato dal [Network Monitor](https://developer.mozilla.org/en-US/docs/Tools/Network_Monitor){.external}, che è direttamente integrato nel browser Mozilla Firefox e permette di analizzare nel dettaglio i tempi di caricamento di una pagina.

Questo strumento è in grado di verificare quali elementi del tuo sito sono più lenti o più pesanti nel caricare.
Può essere utile ridurre le immagini e i contenuti che aumentano i tempi di caricamento del sito e stabilire le priorità riguardo alle ottimizzazioni da effettuare.

Per accedere a questo strumento premi il pulsante F12 sulla tastiera (tramite Firefox o Chrome).

Riducendo il numero di richieste TCP in uscita, si riducono i tempi di caricamento, perché se il server da cui stai richiedendo il contenuto impiega molto tempo per rispondere, i tempi di caricamento del tuo sito aumenteranno ulteriormente.

**CDN**

Per migliorare l’accessibilità, il download e il posizionamento naturale del tuo sito, puoi utilizzare la CDN (Content Delivery Network) OVH per salvare i tuoi file, le tue applicazioni e i tuoi siti.

In questo modo, migliorano i tempi di risposta degli utenti finali in tutto il mondo, dato che le parti statiche del tuo sito vengono caricate direttamente dall’utente nel POP a lui più vicino.

Trovi tutte le offerte CDN OVH [qui](https://www.ovh.it/cdn/){.external}.


### Step 6: Verifica i CMS (Content Management System) e i plugin utilizzati

_Se non utilizzi un CMS, questo step è facoltativo_

Per essere sicuro che il tuo piano di hosting sia adatto alle esigenze del tuo CMS, puoi confrontare i nostri servizi in [questa pagina](https://www.ovh.it/hosting-web/){.external}.

- **Utilizzo dei plugin di cache:** I CMS utilizzano molte librerie in modo che una sola pagina Web possa contenere una grande quantità di elementi. Per ottimizzare l’utilizzo del tuo CMS, ti consigliamo di usare dei plugin di cache che ti permettono di evitare di rigenerare completamente il contenuto del tuo sito ogni volta che la pagina viene caricata. Cercane uno sul sito del CMS che utilizzi (Joomla! - PrestaShop - WordPress) per ottimizzare il tuo sito.

- **Disattivazione o eliminazione dei plugin inutili:** Sempre al fine di migliorare le performance del tuo CMS, può essere utile disattivare o cancellare i plugin non utilizzati. In questo modo eviterai che il browser carichi gli elementi inutili.

### Step 7: ottimizza il tuo database

_Se non usi un database, questo step è facoltativo_
È possibile accedere al database utilizzando PHPMyAdmin. (Dato che le istruzioni su come utilizzare PHPMyAdmin andrebbero oltre lo scopo di questa guida, non saranno forniti ulteriori dettagli).
Tuttavia, sono disponibili numerose guide esterne su questo argomento.

**Come accedere al database tramite phpMyAdmin:** Per accedere al database tramite phpMyAdmin, segui la procedura dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}:

- Clicca sul tuo dominio nella sezione `Hosting`{.action}
- Vai alla scheda `Database`{.action}
- Clicca sui tre puntini`...`{.action} a destra del database per accedere a phpMyAdmin.

**Perché ottimizzare un database?** Perché un database sia sempre performante, è necessario mantenerlo tale.  Questo significa fare in modo che le informazioni che contiene vengano fornite il più rapidamente possibile allo script che le richiede. A tal fine, è essenziale avere un database ben strutturato e ottimizzato. Ecco come fare:

#### Nel database:

- **Indicizza il database:** Per aumentare la velocità di ricerca al momento di una richiesta, è necessario indicizzare i campi che vengono utilizzati nei parametri WHERE. Esempio: Ricerchi regolarmente le persone in base alla città.  Devi indicizzare il campo “città” con questa richiesta:

```
ALTER TABLE `test` ADD INDEX (`città`);
```

- **Elimina dal database i dati non necessari** Se alcuni dati non vengono più consultati, archiviali. Le tue tabelle saranno meno piene e le ricerche più rapide.

#### Nei tuoi script

- **Limita la visualizzazione:**
 Limita la visualizzazione dei risultati (ad esempio 10 per pagina) usando il parametro LIMIT della tua richiesta SLQ.


- **Raggruppa le richieste:**
 Raggruppa le tue richieste all’inizio dello script in questo modo:

```
connessione_base
richiesta 1
richiesta 2
...
disconnessione_base

Visualizzazione...
Elaborazione dei dati
Cicli
Visualizzazione...
...
```

La chiusura della connessione dopo la richiesta permette al server del database di essere immediatamente disponibile per altre richieste (ed evita di produrre l'errore "L'utente ha già più di 'max_user_connections' connessioni attive').

#### Ottimizza il database grazie all’uso della cache


- Se hai degli elementi che vengono recuperati dal database e che non cambiano, mettili nella cache. In questo modo diminuirà sensibilmente l’accesso al database e aumenterà la velocità di caricamento del tuo sito.

- Puoi anche utilizzare la cache di sessione inserendo i risultati della ricerca nelle variabili di sessione. In questo modo, una ricerca uguale, non verrà avviata nuovamente, ma verranno recuperate le variabili di sessione.

- Recupera esclusivamente i dati utili: Nelle tue ricerche SQL verifica di selezionare solo ciò che ti serve e soprattutto di non aver dimenticato i collegamenti tra le tabelle.

Esempio:

```
(where table1.champs = table2.champs2)
```

#### Evita le opzioni che utilizzano molte risorse:

Ad esempio, evita di utilizzare “HAVING” (che appesantisce le tue richieste) e “GROUP BY” se non strettamente necessario.


#### SQL Privato
Se, nonostante tutte le modifiche e le ottimizzazioni effettuate, il database è lento, o se vengono inviate numerose richieste al database, ti consigliamo di passare alla nostra soluzione SQL Privato per avere più risorse disponibili.
Per consultare le nostre offerte, clicca [qui](https://www.ovh.it/hosting-web/opzioni-sql.xml){.external}.

## Per saperne di più 

[Modificare la configurazione di un hosting Web](https://docs.ovh.com/it/hosting/modifica_lambiente_di_esecuzione_del_tuo_hosting_web/){.external}

[Gestisci un database dal tuo hosting condiviso](https://docs.ovh.com/it/hosting/gestisci_un_database_dal_tuo_hosting_condiviso/){.external}

[Iniziare a utilizzare il servizio SQL Privato](https://docs.ovh.com/it/hosting/iniziare-a-utilizzare-sql-privato/){.external}

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.