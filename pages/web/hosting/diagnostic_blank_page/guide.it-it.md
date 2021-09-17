---
title: Web hosting come fai a diagnosticare una pagina bianca?
excerpt: Questa guida ti spiega come determinare la causa della visualizzazione di una pagina bianca nel tuo sito
slug: web_hosting_come_fai_a_diagnosticare_una_pagina_bianca
legacy_guide_number: g1562
section: Diagnostica
order : 8
---


## Informazioni generali
Perché visualizzi una pagina bianca sul tuo sito?

Contrariamente a quanto si pensa, la pagina vuota ha una sua utilità, perché nasconde gli errori generati dal tuo sito Web e non rende visibili agli hacker delle informazioni importanti.

Come correggere una pagina bianca?


- Dal momento che la pagina bianca nasconde gli errori, innanzitutto devi visualizzarli per poi correggerli.

- Cerca di ricordare quando è apparso l'errore: durante l'installazione o l'aggiornamento di un plug-in, di un tema o del tuo sito Internet.




## Attiva gli errori PHP
Nel file del tuo sito aggiungi questa riga:


```
ini_set('display_errors',1);
```


In genere si aggiunge questo codice nel file "index.php", o in un file interrogato frequentemente dal tuo sito, come ad esempio quello di configurazione del sito.

ATTENZIONE: aggiungi questa stringa dopo il tag di apertura del PHP:


```
<?php
```


In questo modo il tuo sito ti mostrerà l'errore da correggere e la pagina bianca non si aprirà più.

## Modalità development .ovhconfig
Per visualizzare correttamente gli errori: 


- Metti il file ".ovhconfig" in modalità development:


Il file ".ovhconfig" deve contenere il codice:


```
app.engine=php 
app.engine.version=5.4 
http.firewall=none 
environment=development
```


Consulta la guida sugli aggiornamenti phpfpm: []({legacy}1175)

![](images/img_2159.jpg){.thumbnail}
Suggerimento


- Per un sito in WordPress, modifica la riga define('WP_DEBUG', false); cambiando la variabile che trovi nel file wp-config.php da false a true




## Verifica gli errori della cache
Per verificare se la pagina bianca è ancora visualizzabile senza utilizzare la cache del server: 


- Aggiungi un accesso con la porta specifica :82 alla fine dell'url del tuo sito Web.

Ad esempio, http://tuo-sito.it:82


Puoi così collegarti direttamente al sito sul cluster senza utilizzare la funzione "Geocache".

Puoi farlo utilizzando le porte dalla 81 alla 85.

![](images/img_2160.jpg){.thumbnail}


## Utilizza Firebug - Errore 429 - 500 - 200

## Informazioni generali
Puoi utilizzare FireBug per recuperare ulteriori informazioni sulla pagina bianca.

## Errore 429
FireBug è in grado di trovare gli errori di una pagina vuota.

Ad esempio, verifica se l'errore 429 si trova nel menu reti.

L'errore429 corrisponde a un numero troppo alto di richieste sul tuo sito.


- L'attivazione di phpfpm può aiutarti a risolvere questo problema:

Consulta la guida sugli aggiornamenti di phpfpm: []({legacy}1175).

A questo punto visualizzerai l'errore direttamente sul tuo sito tramite una pagina generata da OVH (vedi immagine).

- Se l'attivazione di PHP-FPM non risolve il problema, ti consigliamo un upgrade della tua offerta.



![](images/img_2158.jpg){.thumbnail}

## Errore 500
Se sul tuo sito visualizzi una pagina bianca e utilizzando FireBug compare l'errore 500 nella sezione reti, significa che al momento non è possibile identificare la provenienza dell'errore. 

Devi quindi attivare il messaggio di errore come spiegato [precedentemente](#diagnostic_applicable_activer_les_erreurs_php) e correggerlo.

![](images/img_2161.jpg){.thumbnail}

## Risposta 200 ok
Se sul tuo sito visualizzi una pagina bianca e utilizzando FireBug ottieni la risposta "200 OK" nella sezione reti, significa che la pagina è vuota anche se è stata caricata correttamente. 


- In questo caso, l'attivazione dell'errore è inutile, perché la risposta 200 ok non è un vero e proprio messaggio di errore e l'unica soluzione è ripristinare il sito.

Si tratta di un caso frequente sui siti in WordPress.


![](images/img_2162.jpg){.thumbnail}

