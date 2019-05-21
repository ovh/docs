---
title: Installeer WordPress op een instance
excerpt: Installeer WordPress op een instance
slug: installeer_wordpress_op_een_instance
legacy_guide_number: g2060
---


## 
WordPress is een content management systeem (CMS) waarmee u uw website snel en gemakkelijk kunt creëren. U behoeft geen kennis van programmeren om hiermee te kunnen werken. 

In tegenstelling tot OVH VPS zijn er geen WordPress templates geïnstalleerd op uw Public Cloud instance. Maar het is wel mogelijk om zelf WordPress op een instance te installeren. 

Deze handleiding legt uit hoe u WordPress op een Public Cloud instance kunt installeren.


## Vereisten

- [Creëer een instance in uw OVH klantaccount.]({legacy}1775)




## Een web server installeren
U zult allereerst een web server op uw Public Cloud instance moeten installeren. 

Om dit te kunnen doen moet u eerst checken of uw instance up-to-date is: 


- Voor Debian/Ubuntu


```
admin@instance:~$ sudo apt-get update && sudo apt-get upgrade -y
```


- Voor Fedora/CentOS


```
[admin@instance ~]$ sudo yum update && sudo yum upgrade
```



U kunt dan een web server installeren
In dit boorbeeld gaan we de Apache web server gebruiken met de volgende elementen: 

- Php5
- Php5-mysql
- Serveur Mysql

- Voor Debian/Ubuntu


```
admin@instance:~$ sudo apt-get install apache2 php5 php5-mysql mysql-server -y
```


- Voor Fedora/CentOS


```
[admin@instance ~]$ sudo yum 
install httpd php php-mysql mariadb-
server -y
```



U zult verzocht worden een wachtwoord in te voeren voor het configureren van het 'root' account voor de MySQL database.

Daarna zal u de web server opnieuw moeten starten om er zeker van te zijn dat dit geregistreerd is.  



- Voor Debian/Ubuntu


```
admin@instance:~$ sudo service 
apache2 restart
```


- Voor Fedora/CentOS


```
admin@instance:~$ sudo service httpd restart
```





## Download WordPress
Ga naar de [Wordpress](https://wordpress.org/download/) website om de nieuwste versie te verkrijgen:


```
admin@instance:~$ wget 
https://wordpress.org/wordpress-4.4.tar.gz
```


Decomprimeer (uncompress) het archief dat u zojuist heeft gedownload:


```
admin@instance:~$ tar zxvf wordpress-4.4.tar.gz
```



- Verwijder de web server standaard map.


```
admin@instance:~$ sudo rm -R /var/www/html/
```


- Vervang de standaard web server map met de WordPress map. 


```
admin@instance:~$ sudo mv wordpress /var/www/html
```


- Zodra dit vervangen is kunt u de web server permissions laten schrijven voor de map. 

- Voor Debian/Ubuntu


```
admin@instance:~$ sudo chown -R www-data:www-data /var/www/html/
```


- Voor Fedora/CentOS


```
[admin@serveur-7 ~]$ sudo chown -R apache:apache /var/www/html/
```





## MySQL configuratie
In tegenstelling tot MySQL-Server, welke u op Debian/Ubuntu kunt installeren, configureert MariaDB uw root wachtwoord niet tijdens installatie.
U dient daarom de MariaDB server te lanceren en uw wachtwoord in te stellen middels de volgende commands: 


- Lanceer de database server:


```
[admin@instance ~]$ sudo 
/sbin/service mariadb start
```


- Reconfigureer 'root' wachtwoord

:


```
[admin@instance ~]$ sudo /usr/bin/mysql_secure_installation
```


Zodra u uw 'root' wachtwoord heeft kunt u zich inloggen op uw database server:


```
admin@instance:~$ sudo mysql -u 
root -p
```


U kunt nu een nieuwe gebruiker en een database gewijd aan WordPress creëren: 


- Creëer een gebruiker:


```
mysql> CREATE USER 'wordpress'@'localhost' IDENTIFIED BY 'P@ssw0rd';
```


- Creëer database


```
mysql> CREATE DATABASE `wordpress` ;
```


- Vervolgens kunt u alle rechten toewijzen aan de 'wordpress' gebruiker op de 'wordpress' database


```
mysql> GRANT ALL PRIVILEGES ON `wordpress` . * TO 
'wordpress'@'localhost';
```



```
mysql> GRANT ALL PRIVILEGES ON `wordpress` . * TO 
'wordpress'@'localhost';
```





## WordPress configuratie
Na het configureren van de database kunt u een browser lanceren en inloggen op uw WordPress website door de IP-adressen van uw instance in uw browser in te voeren. 

Er zal een WordPress pagina verschijnen, u kunt allereerst toegang tot uw database configureren.

![](images/img_3674.jpg){.thumbnail}
Hierna kunt de algemene informatie van uw website en uw admin gebruikerstoegang configureren.

![](images/img_3675.jpg){.thumbnail}
Zodra dit bevestigd is zult u kunnen inloggen op het administratiepanel van uw website met de gebruiker die u zojuist heeft aangemaakt.


## 

- [url=GUIDE#1708]How to use Docker to optimise a WordPress website hosted on a VPS

[/url]


## 
[Ga terug naar de index van Cloud handleidingen]({legacy}1785)

