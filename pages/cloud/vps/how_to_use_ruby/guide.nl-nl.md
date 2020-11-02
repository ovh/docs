---
deprecated: true
title: Hoe Ruby te gebruiken
excerpt: Algemene informatie over de Ruby distributie
slug: hoe_ruby_te_gebruiken
legacy_guide_number: g1370
hidden: true
---


## 
Tijdens het aanmaken van de Ruby distributie, bleven we zo dicht mogelijk bij de standaard configuratie. Zodat u uw VPS vrijelijk kunt aanpassen.
We installeerden de dependencies waarmee u uw rubygems moet installeren/compileren en u uw RubyOnRails moet gebruiken.

Hier zijn de componenten van uw VPS:

- Debian Wheezy
- Rbenv (maakt het mogelijk om de Ruby versie van uw keuze te gebruiken)
- Passenger (Apache of Nginx)
- Database (MySQL, PostgreSQL of MongoDB)




## 
root: wordt gebruikt voor een algemene administratie server (updates, het aanmaken van databases, etc.).
webmaster: wordt gebruikt om uw applicatie te beheren (installatie van ruby, applicatie implementatie, etc.).


## 
De door u aangevraagde Ruby versie wordt geïnstalleerd via rbenv voor 'webmaster' gebruiker en Passenger. De rest van het systeem maakt gebruik van de Ruby versie verpakt in Debian Wheezy (1.9.3p194 op het tijdstip dat dit artikel werd geschreven).

Indien u de ruby versie wilt veranderen, log dan in met de user webmaster en voer in:

```
rbenv-update (update rbenv en zijn plugins)
rbenv installeren - lijst (om alle beschikbare Ruby versies te zien)
rbenv install
rbenv global
```




## 
Passenger werd geïnstalleerd vanaf de officiële Repositories van Phusion. Dus u heeft de laatste stabiele versie van Phusion Passenger. Passenger gebruikt dezelfde Ruby versie als de 'webmaster' gebruiker.

Uw VPS wordt geleverd met een VirtualHost default naam (vpsXXXXX.ovh.net).
U kunt het direct gebruiken bij het inzetten van uw aanvraag in /var/www/vpsXXXXX.ovh.net
Maar u kunt het ook aanpassen of kopiëren om meerdere applicaties te implementeren.


Voor de status en het geheugengebruik van Passenger:
[code]
Passenger-status (root)
Passenger-memory-statistieken (root)
[/ code]


## 
De configuratie van uw applicatie vindt u op /etc/apache2/sites-enabled/vpsXXXXX.ovh.net.

Herstart de server: 
```
service apache2 restart (root)
```

Herstart de applicatie: 
```
touch /var/www/vpsXXXXX.ovh.net/tmp/restart.txt (webmaster)
```


Voor een gedetailleerde Passenger handleiding: [Passenger](http://www.modrails.com/documentation/Users%20guide%20Apache.html)


## 
De configuratie van uw applicatie vindt u op /etc/nginx/sites-enabled/vpsXXXXX.ovh.net

Herstart de server: 
```
service nginx restart (root)
```

Herstart de applicatie: 
```
touch /var/www/vpsXXXXX.ovh.net/tmp/restart.txt (webmaster)
```


Voor een gedetailleerde Passenger handleiding: [Passenger](http://www.modrails.com/documentation/Users%20guide%20Nginx.html)


## 
Uw database is geïnstalleerd met de standaardinstellingen, en geconfigureerd om alleen toegankelijk te zijn vanuit uw VPS.

