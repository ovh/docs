---
title: Modifica l’ambiente di esecuzione del tuo hosting Web
excerpt: Modifica l'ambiente di esecuzione del tuo hosting Web
slug: modifica_lambiente_di_esecuzione_del_tuo_hosting_web
legacy_guide_number: g2149
---


## Come fai a modificare il tuo ambiente di esecuzione?

## Nel tuo Spazio Cliente OVH
Accedi al tuo Spazio Cliente OVH, seleziona il tuo hosting nel menu a sinistra e clicca su Modifica la configurazione.

![](images/img_4127.jpg){.thumbnail}
A questo punto puoi cambiare la configurazione corrente.

![](images/img_4128.jpg){.thumbnail}
Scegli un ambiente di esecuzione nel menu a tendina.

![](images/img_4129.jpg){.thumbnail}

## Nel file .ovhconfig
L'aggiornamento viene effettuato nel file .ovhconfig che si trova nella root del tuo hosting.
La modifica del tuo ambiente di esecuzione è quindi possibile sia nel tuo Spazio Cliente OVH che direttamente nel file .ovhconfig.

Per maggiori informazioni sul file .ovhconfig, consulta la guida []({legacy}1207)


## Gli ambienti di esecuzione

## Ambiente "Legacy"
È l'ambiente storico degli hosting Web e in passato era l'unica configurazione disponibile.


- Questo ambiente è ancora utilizzato ma è comunque consigliato passare a un sistema di tipo "Stable" per poter usufruire automaticamente degli ultimi aggiornamenti stabili disponibili. L'ambiente "Legacy" può essere utile per i siti sviluppati con le vecchie versioni di PHP o per i software che non sono più utilizzati (ad esempio, un vecchio connettore per i database mysql).


Per impostare "Legacy" come ambiente di esecuzione, aggiungi questa riga al file .ovhconfig*:


```
container.image=legacy
```



## Ambiente "Stable"
Questo ambiente ti permette di usufruire automaticamente degli ultimi aggiornamenti stabili.

Per impostare "Stable" come ambiente di esecuzione, aggiungi questa riga al file .ovhconfig*:


```
container.image=stable
```



## Ambiente "Jessie.i386"
Questo ambiente ti permette di utilizzare Debian Jessie.


- Al momento è la versione proposta quando selezioni l'ambiente di esecuzione "Stable".


Per impostare "Jessie.i386" come ambiente di esecuzione, aggiungi questa riga al file .ovhconfig*:


```
container.image=jessie.i386
```


Scegliere "Jessie.i386" al posto di "Stable" non è consigliato, ma garantisce che un eventuale aggiornamento dell'immagine relativa all'ambiente "Stable" non renderà il tuo sito irraggiungibile. Questo caso potrebbe verificarsi solo se il tuo sito utilizza script PHP esterni.

## Ambiente "Testing"
Questo ambiente ti permette di usufruire di "anteprime" come patch, nuove immagini e nuove tecnologie, ma non garantisce la stabilità.

Per impostare "Testing" come ambiente di esecuzione, aggiungi questa riga al file .ovhconfig*:


```
container.image=testing
```


*Il file .ovhconfig presente nella root del tuo hosting Web "/".


## Differenza tra le immagini
|Ambiente|Legacy|Stable|Testing|Jessie.i386|
|---|---|---|---|
|Ambiente|Legacy|Stable|Testing|Jessie.i386|
|Immagine associata|Legacy|Jessie.i386|Jessie.i386|Jessie.i386|
|Versione PHP minima|4.4|5.3|5.3|5.3|
|Openssl|0.9.8o|1.0.1k (compatibile con TLS1.2)|1.0.1k (compatibile con TLS1.2)|1.0.1k (compatibile con TLS1.2)|
|Estensione php imagick||x|x|x|
|Estensione php memcache|x|x|x|x|
|Estensione php memcached||x|x|x|
|Estensione php mongo (PHP 5.4, 5.5, 5.6)||x|x|x|
|Estensione mysqlnd (solo in utf-8)||x|x|x|
|Estensione redis||x|x|x|
|Opcache**|x|x|x|x|
|Python|2.6|2.7 e 3.4|2.7 e 3.4|2.7 e 3.4|
|Ruby|1.8.7|2.1.5|2.1.5|2.1.5|
|Rails|2.3.5|4.1.8|4.1.8|4.1.8|
|Perl|5.10|5.20|5.20|5.20|
|git|1.7.2.5|2.1.4|2.1.4|2.1.4|


i]**È necessario attivare PHP-FPM: []({legacy}1175)


## La modifica dell'ambiente di esecuzione interesserà tutto il tuo hosting?
Sì, quindi non è possibile utilizzare contemporaneamente più ambienti di esecuzione.


## Su quale offerta puoi modificare il tuo ambiente di esecuzione?
La modifica del tuo ambiente di esecuzione è possibile con tutte le offerte di hosting Web.


## Durante la modifica dell'ambiente le sessioni PHP vengono mantenute attive?
No, la modifica dell’ambiente di esecuzione comporta la reinizzializzazione automatica delle sessioni PHP.

