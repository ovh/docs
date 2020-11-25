---
title: 'Ruby: how to'
excerpt: Un po' di informazioni sulla distribuzione Ruby
slug: ruby_how_to
legacy_guide_number: g1370
hidden: true
---


## 
Quando abbiamo ottimizzato la distribuzione, siamo rimasti il più possibile vicini alla configurazione di default. 
In questo modo puoi personalizzare il tuo VPS.
Abbiamo installato gli elementi di cui puoi aver bisogno per installare/compilare le tue rubygems e utilizzare RubyOnRails.

Questi sono i componenti del tuo VPS:

- Debian Wheezy
- rbenv (permette di scegliere la versione di Ruby da utilizzare)
- Passenger (Apache o Nginx)
- Database (MySQL, PostgreSQL o MongoDB)




## 
Root: utilizzato per amministrare il server (aggiornamento, creazione database, etc.).
Webmaster: utilizzato per la gestione della tua applicazione (installazione di Ruby, sviluppo applicazione, etc.).


## 
La versione di Ruby che hai scelto viene installata con rbenv per l'utente "Webmaster" e Passenger. Il resto del sistema utilizza la versione di Ruby presente in Debian Wheezy (1.9.3p194 al momento della redazione di questo articolo).

Per cambiare versione di Ruby, accedi come webmaster e inserisci:

```
rbenv update (mise à jour de rbenv et ses plugins)
rbenv install --list (pour connaître toutes les versions de ruby disponibles)
rbenv install <version>
rbenv global <version>
```




## 
Passenger è stato installato a partire dai file ufficiali di Phusion. Hai a disposizione l'ultima versione stabile di Phusion Passenger. Passenger utilizza la stessa versione di Ruby dell'utente "Webmaster".

Il tuo VPS viene consegnato con un virtualHost con il nome predefinito (vpsXXXXX.ovh.net).
Utilizzalo direttamente sviluppando la tua applicazione in /var/www/vpsXXXXX.ovh.net, personalizzalo o copialo per sviluppare diverse applicazioni.

Per conoscere lo stato e il consumo di memoria di Passenger, utilizza: 

```
passenger-status (root)
passenger-memory-stats (root)
```




## 
La configurazione della tua applicazione è in 
/etc/apache2/sites-enabled/vpsXXXXX.ovh.net.

Riavvio del server: 
```
service apache2 restart (root)
```

Riavvio dell'applicazione: 
```
touch /var/www/vpsXXXXX.ovh.net/tmp/restart.txt (webmaster)
```


In questa pagina trovi la documentazione dettagliata di Passenger: 
[Passenger](http://www.modrails.com/documentation/Users%20guide%20Apache.html)


## 
La configurazione della tua applicazione è in
 /etc/nginx/sites-enabled/vpsXXXXX.ovh.net

Riavvio del server: 
```
service nginx restart (root)
```

Riavvio dell'applicazione: 
```
touch /var/www/vpsXXXXX.ovh.net/tmp/restart.txt (webmaster)
```


In questa pagina trovi la documentazione dettagliata di Passenger: [Passenger](http://www.modrails.com/documentation/Users%20guide%20Nginx.html)


## 
Il tuo database è stato installato con le impostazioni di default e configurato in modo da essere accessibile solo dal tuo VPS.

