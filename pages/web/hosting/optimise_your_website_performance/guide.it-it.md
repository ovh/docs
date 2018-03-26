---
title: 'Web Hosting: ottimizza le performance del tuo sito'
excerpt: Guida all'ottimizzazione delle performance del tuo sito
id: '1396'
slug: web_hosting_ottimizza_le_performance_del_tuo_sito
legacy_guide_number: g1396
---


## Informazioni generali

## Domande da porsi in caso di rallentamenti:

- Da quanto tempo riscontri dei rallentamenti?

Valuta se il problema è legato a una modifica recente apportata al tuo sito, ad esempio l'aggiunta di un nuovo plugin malfunzionante o di un nuovo tema che effettua numerose richieste e può quindi rallentare il sito.

- Il rallentamento è temporaneo o permanente?

Verifica in quale momento della giornata si presentano questi rallentamenti e se corrispondono a una grande affluenza di traffico al sito, o se contemporaneamente vengono avviati altri task.

- Su tutto o su parte del tuo sito?

Se è interessata una sola pagina e non tutto il sito, è utile analizzarla e verificare quale richiesta o script causa il rallentamento.

- Viene rilevato un errore? Se sì, di che tipo?

Verifica se vengono generati degli errori per capire meglio la causa del problema. Trovi in questa guida i diversi tipi di errore e le loro principali cause.


![](images/img_1876.jpg){.thumbnail}


## Firebug
Uno strumento di analisi che può servirti è [Firebug](https://addons.mozilla.org/it/firefox/addon/firebug/).

È un add-on per Firefox che ti permette di analizzare in dettaglio i tempi di caricamento della tua pagina.

Per farlo vai alla scheda "Net".

In questo esempio, la pagina viene caricata in 5,6 secondi. Grazie a Firebug, puoi notare che una delle immagini caricate "accueil.png" richiede 2,42 secondi per essere scaricata poiché pesa oltre 1 MB. È possibile quindi ottimizzare l'immagine per migliorare i tempi di accesso al sito.

![](images/img_1886.jpg){.thumbnail}


## Statistiche del tuo sito

## Lettura dei dati
Dal tuo [Spazio Cliente OVH](https://www.ovh.com/manager/web/login.html) puoi ora accedere alle nuove statistiche del tuo sito.


- Richieste HTTP: indica il numero di hit medio al sito. (Hit: richiesta di accesso a un qualsiasi file (testo, immagine, ecc.) di una pagina web effettuata dal tuo browser). 

Gli hit sono classificati per codice http:
2xx/3xx - 4xx - 5xx


- Tempo medio di risposta: corrisponde al tempo medio di risposta delle pagine, distinguendo tra quelle dinamiche e quelle statiche.

- Superamento del limite consentito: questo grafico ti mostra l'utilizzo dei Workers PHP e l'eventualità di effettuare un upgrade dell'offerta di hosting. L'utilizzo di PHP-FPM ti aiuta a ridurre l'uso dei Worker PHP.

- Utilizzo della CPU: indica l'utilizzo della CPU da parte del tuo sito, cosa che può aiutarti a identificare un possibile sovraccarico.

- Connessioni in uscita: permette di vedere le connessioni in uscita realizzate dal server. Ad esempio, in caso di hack, il server può essere utilizzato per attaccare altri siti esterni. Puoi anche verificare le chiamate esterne realizzate dai moduli come Facebook, Twitter, ecc. Questa può essere una delle cause del rallentamento del tuo sito.



![](images/img_2105.jpg){.thumbnail}

- Nell'esempio riportato nello screenshot, il sito è stato attaccato l'11 luglio. Da quella data, i tempi di caricamento del sito e le connessioni in uscita sono aumentate in modo esponenziale. Dopo la correzione di questa falla di sicurezza, i tempi di risposta, le connessioni in uscita e l'utilizzo della CPU sono tornate normali.




## PHP-FPM
Abbiamo adattato PHP-FPM alla nostra infrastrutta Web per accelerare le risposte PHP.

I test effettuati dimostrano che puoi ottenere performance fino a 7 volte più rapide di prima.

È disponibile una guida sull'utilizzo di PHP-FPM:


- []({legacy}1175)


Utilizzando PHP-FPM cambiano alcune variabili del server:


|Variabile|senza PHP-FPM|con PHP-FPM|
|max_execution_time|120s|300s|
|max_input_vars|2000|16000|
|memory_limit|128M|512M|



![](images/img_1890.jpg){.thumbnail}

- Il file .ovhconfig funziona nella root del tuo hosting o nella sottodirectory di livello 1 (es.: /www/), ma non nella directory di livello 2 o superiore (es.: /www/test/, /www/test/test2/)


Ecco un grafico di esempio sull'utilizzo di PHP-FPM.

Tieni presente che dopo l'installazione, l'utilizzo della CPU si riduce sensibilmente aumentando la performance del sito.

![](images/img_2167.jpg){.thumbnail}


## Plugin

## Utilizzo dei plugin di cache
I CMS utilizzano molte librerie in modo che una sola pagina Web possa contenere molti elementi. Questi devono essere caricati e letti dal browser Internet dei tuoi utenti.

Per ottimizzare l'utilizzo del tuo CMS, ti consigliamo di usare dei plugin di cache che ti permettono di evitare di rigenerare completamente il contenuto del tuo sito ogni volta che la pagina viene caricata.

Cercane uno sul sito del CMS che utilizzi (Joomla! - PrestaShop - WordPress) per ottimizzare il tuo sito.

![](images/img_1892.jpg){.thumbnail}

## Disattivazione o eliminazione dei plugin inutili
Sempre al fine di migliorare le performance del tuo CMS, può essere utile disattivare o cancellare i plugin non utilizzati. In questo modo eviterai che il browser carichi gli elementi inutili.


## CDN
Per migliorare l'accessibilità, il download e il posizionamento naturale del tuo sito, puoi utilizzare la CDN (Content Delivery Network) OVH per salvare i tuoi file, le tue applicazioni e i tuoi siti.

In questo modo, migliorano i tempi di risposta degli utenti finali in tutto il mondo, dato che le parti statiche del tuo sito vengono caricate direttamente dall'utente nel POP a lui più vicino.

Trovi tutte le offerte CDN OVH [qui](https://www.ovh.it/cdn/)

![](images/img_1891.jpg){.thumbnail}


## SQL

## Perché ottimizzare un database?
Perché un database sia sempre performante, è necessario mantenerlo tale. Questo significa fare in modo che le informazioni che contiene vengano fornite il più rapidamente possibile allo script che le richiede.

![](images/img_2002.jpg){.thumbnail}
A tal fine, è essenziale avere un database ben strutturato e ottimizzato, ecco come fare.

## 1. Nel database

- Indicizzare il database


Per aumentare la velocità di ricerca al momento di una richiesta, è necessario indicizzare i campi che vengono utilizzati nei parametri WHERE.

Esempio:

Ricerchi regolarmente delle persone in base alla città. Devi indicizzare il campo "città" con questa richiesta:


```
ALTER TABLE `test` ADD INDEX ( `città` );
```



- Eliminare dal database i dati non necessari


Se alcuni dati non vengono più consultati, archiviali. Le tue tabelle saranno meno piene e le ricerche più rapide.

## 2. Nei tuoi script

- Limitare la visualizzazione


Limita la visualizzazione dei risultati (ad esempio 10 per pagina) usando il parametro LIMIT della tua richiesta SLQ.


- Raggruppare le richieste


Raggruppa le tue richieste all'inizio dello script in questo modo:


```
connessione_base
richiesta1
richiesta2
...
disconnessione_base

Visualizzazione...
Elaborazione dei dati
Cicli...
Visualizzazione...
...
```



- Ottimizzare grazie all'uso della cache


Se hai degli elementi che vengono recuperati dal database e che non cambiano, mettili nella cache.

In questo modo diminuirà sensibilmente l'accesso al database e aumenterà la velocità di caricamento del tuo sito.

Puoi anche utilizzare la cache di sessione inserendo i risultati della ricerca nelle variabili di sessione. In questo modo, una ricerca uguale, non verrà avviata nuovamente, ma verranno recuperate le variabili di sessione.


- Recuperare esclusivamente i dati utili


Nelle tue ricerche SQL verifica di selezionare solo ciò che ti serve e soprattutto di non aver dimenticato i collegamenti tra le tabelle.

Esempio:


```
(where table1.champs = table2.champs2)
```



- Evita le opzioni che utilizzano molte risorse


Ad esempio, evita di utilizzare "HAVING" (che appesantisce le tue richieste) e "GROUP BY" se non strettamente necessario.

