---
title: Ruby HowTo
excerpt: Allgemeines zur Ruby-Distribution
slug: ruby_howto
legacy_guide_number: g1370
hidden: true
---


## 
Bei der Erstellung der Ruby-Distribution sind wir so nah wie möglich an der Standardkonfiguration geblieben. Das erlaubt Ihnen, Ihren VPS frei zu individualisieren.
Wir haben die Abhängikeiten installiert, die Sie für die Installation/Compilation von rubygems und die Nutzung von RubyOnRails benötigen.

Hier sind die Komponenten Ihres VPS:

- Debian Wheezy
- rbenv (erlaubt die Nutzung einer Rubyversion Ihrer Wahl)
- Passenger (Apache oder Nginx)
- Datenbank (MySQL, PostgreSQL oder MongoDB)




## 
root: zur allgemeinen Serveradministration benutzt (Updates, anlegen von Datenbanken usw.)
webmaster: zur Verwaltung Ihrer Anwendungen genutzt (Installation von Ruby, Deployment von Anwendungen usw.)


## 
die von Ihnen gewünschte Rubyversion wird über rbenv für den Benutzer "webmaster" und Passenger installiert. Der Rest des Systems nutzt das Paket in Debian Wheezy (1.9.3p194 zum Zeitpunkt der Verfassung dieses Artikels)

Um die Rubyversion zu ändern verbinden Sie sich als webmaster und geben Sie ein:

```
rbenv update (aktualisert rbenv und seine plugins)
rbenv install --list (um alle verfügbaren Rubyversionen zu erfahren)
rbenv install <version>
rbenv global <version>
```




## 
Passenger wurde aus den offiziellen Repositories von Phusion installiert. Sie haben also die neuste Stableversion von Phusion Passenger. Passenger nutzt die gleiche Version von Ruby wie der Benutzer "webmaster".

Ihr VPS ist standardmäßig mit seinem Namen (vps*****.ovh.net) als virtualHost ausgeliefert.
Sie können diesen direkt zum deployment Ihrer Anwendungen in /var/www/vps*****.ovh.net verwenden.
Sie können dies aber auch anpassen oder kopieren um mehrere Anwendungen zu deployen

Um den Status der Speicherauslastung von Passenger zu erfahren:

```
passenger-status (root)
passenger-memory-stats (root)
```




## 
Die Konfiguration Ihrer Anwendung befindet sich in /etc/apache2/sites-enabled/vps*****.ovh.net

Neustart des Servers:
```
service apache2 restart (root)
```

Neustart der Anwendung:
```
touch /var/www/vpsXXXXX.ovh.net/tmp/restart.txt (webmaster)
```


Für eine detailierte Dokumentation von Passenger:[Passenger](http://www.modrails.com/documentation/Users%20guide%20Apache.html)


## 
Die Konfiguration Ihrer Anwendung befindet sich in /etc/nginx/sites-enabled/vps*****.ovh.net

Neustart des Servers: 
```
service nginx restart (root)
```

Neustart der Anwendung: 
```
touch /var/www/vps*****.ovh.net/tmp/restart.txt (webmaster)
```


Für eine detailierte Dokumentation von Passenger:[Passenger](http://www.modrails.com/documentation/Users%20guide%20Nginx.html)


## 
Ihre Datenbank wurde mit den Standardparametern installiert und so eingerichtet, dass sie nur von Ihrem VPS aus erreicht werden kann.

