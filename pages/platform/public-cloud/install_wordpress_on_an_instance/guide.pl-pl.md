---
title: Instalacja modułu Wordpress na instancji
excerpt: Instalacja modułu Wordpress na instancji
slug: instalacja_modulu_wordpress_na_instancji
legacy_guide_number: g2060
section: Tutoriale
---


## 
WordPress to system zarządzania treścią (CMS) pozwalający na utworzenie strony internetowej w szybki i prosty sposób.
Moduł ten nie wymaga posiadania szczególnej wiedzy z zakresu programowania i administrowania. 

W przeciwieństwie do serwerów VPS OVH, dla instancji Public Cloud nie ma szablonów Wordpress, które można byłoby zainstalować. Możesz samodzielnie zainstalować moduł Wordpress na swojej instancji.

Przewodnik ten przedstawia poszczególne etapy instalacji modułu Wordpress na instancji Public Cloud.


## Wstępne wymagania

- [Utworzenie instancji w panelu klienta OVH]({legacy}1775)




## Instalacja serwera www
Najpierw należy zainstalować serwer www na instancji Public Cloud.

Należy upewnić się, czy instancja jest zaktualizowana:


- System Debian / Ubuntu


```
admin@instance:~$ sudo apt-get update && sudo apt-get upgrade -y
```


- System Fedora / CentOS


```
[admin@instance ~]$ sudo yum update && sudo yum upgrade
```



Następnie będziesz mógł zainstalować serwer www. Będziemy korzystać z serwera Apache z następującymi elementami:

- Php5
- Php5-mysql
- Serwer Mysql

- System Debian / Ubuntu


```
admin@instance:~$ sudo apt-get install apache2 php5 php5-mysql mysql-server -y
```


- System Fedora / CentOS


```
[admin@instance ~]$ sudo yum install httpd php php-mysql mariadb-server -y
```



Zostaniesz poproszony o hasło do skonfigurowania konta "root" bazy danych MySQL.

Restartujemy serwer www, aby zostało to wzięte pod uwagę. 


- System Debian / Ubuntu


```
admin@instance:~$ sudo service apache2 restart
```


- System Fedora / CentOS


```
admin@instance:~$ sudo service httpd restart
```





## Pobieranie modułu Wordpress
Przejdź na stronę modułu [Wordpress](https://fr.wordpress.org/txt-download/), aby pobrać najnowszą wersję:


```
admin@instance:~$ wget https://fr.wordpress.org/wordpress-4.4-fr_FR.tar.gz
```


Rozpakowujemy pobrane archiwum:


```
admin@instance:~$ tar zxvf wordpress-4.4-fr_FR.tar.gz
```



- Usuwanie domyślnego katalogu serwera www


```
admin@instance:~$ sudo rm -R /var/www/html/
```


- Przenoszenie katalogu Wordpress do domyślnego katalogu serwera www


```
admin@instance:~$ sudo mv wordpress /var/www/html
```



Po przeniesieniu możemy nadać serwerowi www uprawnienia do zapisu w katalogu. 


- System Debian / Ubuntu


```
admin@instance:~$ sudo chown -R www-data:www-data /var/www/html/
```


- SystemFedora / CentOS


```
[admin@serveur-7 ~]$ sudo chown -R apache:apache /var/www/html/
```





## Konfiguracja MySQL
W przeciwieństwie do MySQL-Server, który można zainstalować w systemie Debian / Ubuntu, MariaDB nie konfiguruje hasła root podczas instalacji. 
Należy więc uruchomić serwer MariaDB i skonfigurować hasło za pomocą poniższych poleceń:



- Uruchomienie serwera bazy danych:


```
[admin@instance ~]$ sudo /sbin/service mariadb start
```


- Rekonfiguracja hasła "root":


```
[admin@instance ~]$ sudo /usr/bin/mysql_secure_installation
```



Po ustawieniu hasła "root" będziesz mógł zalogować się na serwer bazy danych:


```
admin@instance:~$ sudo mysql -u root -p
```


Możesz teraz utworzyć nowego użytkownika i bazę danych dla modułu WordPress:


- Dodawanie użytkownika:


```
mysql> CREATE USER 'wordpress'@'localhost' IDENTIFIED BY 'P@ssw0rd';
```


- Dodawanie bazy danych:


```
mysql> CREATE DATABASE `wordpress` ;
```


- Następnie nadajemy wszystkie uprawnienia użytkownikowi "wordpress" dla bazy danych "wordpress"


```
mysql> GRANT ALL PRIVILEGES ON `wordpress` . * TO 'wordpress'@'localhost';
```





## Konfiguracja modułu Wordpress
Po skonfigurowaniu bazy danych możesz uruchomić przeglądarkę i zalogować się do modułu Wordpress wpisując adres IP swojej instancji w przeglądarce. 

Pojawi się strona Wordpress. W pierwszej kolejności będziesz mógł skonfigurować dostępy do bazy danych.

![](images/img_3674.jpg){.thumbnail}
Następnie będziesz mógł skonfigurować ogólne informacje na temat strony i dostępy dla administratora.

![](images/img_3675.jpg){.thumbnail}
Po zaakceptowaniu tych zmian będziesz mógł się zalogować do panelu administracyjnego swojej strony za pomocą użytkownika, którego utworzyłeś.


## 

- [Kopia zapasowa instancji]({legacy}1881)
- [Konfiguracja Owncloud z Object Storage]({legacy}2000)




## 
[Przewodniki Cloud]({legacy}1785)

