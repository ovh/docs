---
title: Guida all’utilizzo dell’Acceleratore GeoCache su un hosting Web
excerpt: Questa guida ti mostra come utilizzare l'Acceleratore Geocache incluso nel tuo Hosting Web OVH
slug: guida_allutilizzo_dellacceleratore_geocache_su_un_hosting_web
legacy_guide_number: g1290
---


## 
Accedi al tuo [Spazio Cliente OVH](https://www.ovh.com/manager/web) e seleziona il tuo hosting Web nella sezione Hosting.

![](images/img_2904.jpg){.thumbnail}


## Cancella la cache dell'Acceleratore GeoCache
Il TTL (Time To Live, durata di vita di un file in cache su un PoP) dura da 5 a 60 minuti e viene gestito in modo ottimizzato dai nostri server. Trascorso questo tempo, il file viene eliminato ed è necessario che un nuovo utente lo richieda prima che venga nuovamente inserito in cache sul PoP corrispondente.

Se vuoi forzare la sostituzione di un file presente nei PoP, ad esempio in seguito a una modifica del tuo sito, è necessario svuotare la cache in modo che i tuoi utenti visualizzino il contenuto aggiornato. Il file viene inserito nuovamente in cache quando un utente lo richiede  dalla zona che dipende da quel PoP.

Per cancellare manualmente la cache dei PoP della rete OVH, clicca su Svuota la cache della CDN

![](images/img_2957.jpg){.thumbnail}


## Disattiva l'Acceleratore GeoCache
Se non vuoi più utilizzare la GeoCache inclusa nella tua soluzione di hosting, puoi scegliere tra due opzioni:


- non utilizzare l'IP (record A) del tuo hosting associato alla GeoCache
- modificare il file delle regole presente nella root del tuo hosting


Per modificare l'IP utilizzato dal tuo sito, seleziona il tuo dominio associato all'hosting che utilizza la Geocache nella sezione Domini e clicca su Zona DNS.

Fra i record che compongono la zona DNS, ricerca il record A associato a un IP di tipo 213.xxx.xxx.xxx*

*Questo IP corrisponde all'Acceleratore GeoCache associato al tuo hosting. Per riattivare l'Acceleratore, è necessario reiserirlo. La lista degli IP è disponibile più in basso o puoi richiederla al nostro supporto. Ricordati di salvarla in modo che sia disponibile in caso di necessità.

Clicca sul tasto Modifica (icona a forma di matita) del record A per accedere al form di modifica in cui trovi questi campi:


- sottodominio: record A selezionato di default (non modificare)
- TTL: scegli tra "Standard" o "Personalizzato"
- Destinazione: inserisci un IPv4 valido


Clicca su Seguente, il tuo IP verrà aggiornato in pochi minuti.

Ecco la lista degli IP associati all'Acceleratore Geocache 3 PoP/17 PoP

Per verificare il cluster che corrisponde al tuo hosting, accedi alla sezione Hosting  del tuo Spazio Cliente OVH e clicca sulla scheda FTP-SSH oppure controlla nell'email che hai ricevuto al momento dell'attivazione della tua offerta.

|Cluster|IPV4 FR|IPV6 FR|17 PoP (full-cdn)|SSL (GlobalSign)|
|HOST|clusterXXX.ovh.net|clusterXX.ovh.net|full-cdn-01.clusterXX.ovh.net|cluster0XX.proxy1.rbx4.hostedssl.ovh.net|
|cluster002.ovh.net|213.186.33.2|2001:41d0:1:1b00:213:186:33:2|213.186.33.69|46.105.174.33|
|cluster003.ovh.net|213.186.33.4|2001:41d0:1:1b00:213:186:33:4|213.186.33.85|46.105.174.34|
|cluster005.ovh.net|213.186.33.16|2001:41d0:1:1b00:213:186:33:16|213.186.33.95|46.105.174.35|
|cluster006.ovh.net|213.186.33.17|2001:41d0:1:1b00:213:186:33:17|213.186.33.97|46.105.174.36|
|cluster007.ovh.net|213.186.33.18|2001:41d0:1:1b00:213:186:33:18|213.186.33.105|46.105.174.37|
|cluster010.ovh.net|213.186.33.19|2001:41d0:1:1b00:213:186:33:19|213.186.33.107|46.105.174.38|
|cluster011.ovh.net|213.186.33.40|2001:41d0:1:1b00:213:186:33:40|213.186.33.151|46.105.174.39|
|cluster012.ovh.net|213.186.33.48|2001:41d0:1:1b00:213:186:33:48|213.186.33.153|46.105.174.40|
|cluster013.ovh.net|213.186.33.24|2001:41d0:1:1b00:213:186:33:24|213.186.33.83|46.105.174.41|
|cluster014.ovh.net|213.186.33.87|2001:41d0:1:1b00:213:186:33:87|213.186.33.169|46.105.174.42|
|cluster015.ovh.net|213.186.33.3|2001:41d0:1:1b00:213:186:33:3|213.186.33.171|46.105.174.43|
|cluster017.ovh.net|213.186.33.50|2001:41d0:1:1b00:213:186:33:50|213.186.33.173|46.105.174.44|
|cluster020.hosting.ovh.net|46.105.57.169|IPV6 non ancora disponibile|213.186.33.176|46.105.57.169|




## 
Per accedere a un file, accedi in FTP al tuo spazio di hosting utilizzando un client come FileZilla.


## Attiva/Disattiva l'Acceleratore GeoCache
Una volta connesso all'FTP del tuo hosting accedi automaticamente alla root, dove sono presenti vari file e cartelle. Quello che ci interessa è il file .ovhconfig.

Scaricalo sul tuo PC (doppio click dovrebbe funzionare) e poi modificalo con un editor di testo. Se necessario, rinominalo "ovhconfig.txt".

Modifica "environment" sostituendo "production" con "development".

Rinomina di nuovo il file .ovhconfig e salvalo di nuovo nella root dell'FTP, sostituendo il precedente. 

Per riattivare l'Acceleratore GeoCache, riesegui questa operazione modificando il parametro "environment" in "production".

![](images/img_1207.jpg){.thumbnail}
Puoi anche aggiungere questa riga nel tuo file .htaccess:

```
Header set Cache-Control "no-cache"
```



