---
title: Installation von WordPress auf einer Instanz
excerpt: Installation von WordPress auf einer Instanz
slug: installation_von_wordpress_auf_einer_instanz
legacy_guide_number: g2060
---


## 
WordPress ist ein CMS (Content Management System, System zur Verwaltung von Inhalten), mit dem Sie schnell und einfach Ihre Webseite erstellen können. Die Lösung erfordert keine speziellen Programmierkenntnisse für deren Administration.

Anders als bei den OVH VPS Angeboten gibt es keine WordPress Templates für die Installation in Ihrer Public Cloud. Sie können jedoch WordPress von Hand auf einer Instanz installieren.

In dieser Hilfe wird die Vorgehensweise zur Installation von WordPress auf einer Public Cloud Instanz beschrieben.


## Voraussetzungen

- [Eine erstellte Instanz im OVH Kundencenter]({legacy}1775)




## Installation des Web-Servers
Zuerst müssen Sie einen Web-Server auf Ihrer Public Cloud Instanz installieren.

Stellen Sie dazu erst einmal sicher, dass Ihre Instanz softwareseitig auf dem neuesten Stand ist:


- Debian / Ubuntu


```
admin@instance:~$ sudo apt-get update && sudo apt-get upgrade -y
```


- Fedora / CentOS


```
[admin@instance ~]$ sudo yum update && sudo yum upgrade
```



Anschließend kann dann der Web-Server installiert werden.
In unserem Beispiel verwenden wir Apache mit folgenden Elementen:

- Php5
- Php5-mysql
- Serveur Mysql

- Debian / Ubuntu


```
admin@instance:~$ sudo apt-get install apache2 php5 php5-mysql mysql-server -y
```


- Fedora / CentOS


```
[admin@instance ~]$ sudo yum install httpd php php-mysql mariadb-server -y
```



Sie werden dann gebeten, ein Passwort für die Konfiguration des "root" Accounts der MySQL Datenbank anzugeben.

Starten Sie anschließend den Web-Server neu, damit die Änderungen angewandt werden.


- Debian / Ubuntu


```
admin@instance:~$ sudo service apache2 restart
```


- Fedora / CentOS


```
admin@instance:~$ sudo service httpd restart
```





## Download von WordPress
Begeben Sie sich auf die [WordPress Webseite](https://de.wordpress.org/txt-download/) und laden Sie die aktuellste Version herunter:


```
admin@instance:~$ wget https://de.wordpress.org/wordpress-4.4.2-de_DE.tar.gz
```


Entpacken Sie anschließend das heruntergeladene Archiv:


```
admin@instance:~$ tar zxvf wordpress-4.4.2-de_DE.tar.gz
```



- Löschen Sie den Standard-Ordner des Web-Servers


```
admin@instance:~$ sudo rm -R /var/www/html/
```


- Verschieben Sie den WordPress Ordner in den Standard-Ordner des Web-Servers


```
admin@instance:~$ sudo mv wordpress /var/www/html
```



Nachdem dies erfolgt ist, können Sie dem Web-Server Schreibrechte für diesen Ordner geben.


- Debian / Ubuntu


```
admin@instance:~$ sudo chown -R www-data:www-data /var/www/html/
```


- Fedora / CentOS


```
[admin@serveur-7 ~]$ sudo chown -R apache:apache /var/www/html/
```





## MySQL Konfiguration
Im Gegensatz zu MySQL Server, das Sie auf Debian / Ubuntu installieren können, konfiguriert MariaDB bei der Installation nicht Ihr root-Passwort.
Sie müssen also den MariaDB Server starten und Ihr Passwort mit folgenden Befehlen konfigurieren:


- Starten des Datenbank-Servers:


```
[admin@instance ~]$ sudo /sbin/service mariadb start
```


- Konfiguration des root-Passworts:


```
[admin@instance ~]$ sudo /usr/bin/mysql_secure_installation
```



Sobald Sie über Ihr root-Passwort verfügen, können Sie sich mit Ihrem Datenbank-Server verbinden:


```
admin@instance:~$ sudo mysql -u root -p
```


Anschließend erstellen Sie einen neuen Benutzer und eine Datenbank für WordPress:


- Benutzer erstellen:


```
mysql> CREATE USER 'wordpress'@'localhost' IDENTIFIED BY 'P@ssw0rd';
```


- Datenbank erstellen:


```
mysql> CREATE DATABASE `wordpress` ;
```


- Anschließend geben Sie dem Benutzer "wordpress" die notwendigen Rechte für die Datenbank "wordpress":


```
mysql> GRANT ALL PRIVILEGES ON `wordpress` . * TO 'wordpress'@'localhost';
```





## WordPress Konfiguration
Sobald die Datenbank konfiguriert wurde, können Sie einen Browser starten und Ihre WordPress Seite aufrufen, indem Sie die IP-Adresse Ihrer Instanz in Ihrem Browser angeben.

Es wird dann eine WordPress Seite angezeigt, und Sie können zuerst die Zugänge zu Ihrer Datenbank konfigurieren.

![](images/img_3674.jpg){.thumbnail}
Danach können Sie die allgemeinen Einstellungen Ihrer Seite sowie die Zugänge Ihres Administrator-Benutzers konfigurieren.

![](images/img_3675.jpg){.thumbnail}
Nachdem dies erfolgt ist, können Sie sich mit dem soeben erstellten Benutzer mit dem Administrations-Panel Ihrer WordPress Seite verbinden.


## 

- [Sicherung einer Instanz]({legacy}1881)
- [Konfiguration von Owncloud mit Object Storage]({legacy}2000)




## 
[Zurück zum Index der Cloud Hilfen]({legacy}1785)

