---
title: WordPressin asentaminen instanssiin
excerpt: WordPressin asentaminen instanssiin
slug: wordpressin_asentaminen_instanssiin
legacy_guide_number: g2060
---


## 
WordPress on sisällönhallintajärjestelmä (CMS), jonka avulla voit luoda verkkosivuja nopeasti ja yksinkertaisesti.
Sen käyttämiseen ei tarvita erityisiä ohjelmointitaitoja.


Toisin kuin OVH:n VPS:ssä, Public Cloud -instanssissa ei ole Wordpress-pohjia valmiina, voit kuitenkin aina asentaa WordPress-järjestelmän itse instanssiin.

Tässä ohjeessa käydään läpi vaiheet WordPress-järjestelmän asentamiseksi Public Cloud -instanssiin.


## Edellytykset

- [Luo instanssi hallintapaneelissa]({legacy}1775)




## Verkkopalvelimen asennus
Aluksi Public Cloud -instanssiin täytyy asentaa verkkoselain.

Sitä varten on tarkistettava, että instanssimme on varmasti ajan tasalla:


- Debian/Ubuntu


```
admin@instance:~$ sudo apt-get update && sudo apt-get upgrade -y
```


- Fedora/CentOS


```
[admin@instance ~]$ sudo yum update && sudo yum upgrade
```



Tämän jälkeen verkkoselaimen asentaminen on mahdollista.
Käytämme siis Apachea seuraavilla elementeillä:

- Php5
- Php5-mysql
- Mysql-palvelin


- Debian/Ubuntu


```
admin@instance:~$ sudo apt-get install apache2 php5 php5-mysql mysql-server -y
```



- Fedora/CentOS


```
[admin@instance ~]$ sudo yum install httpd php php-mysql mariadb-server -y
```



Sinua pyydetään antamaan salasana MySQL-tietokannan pääkäyttäjän(root) tilin konfiguroimiseksi.

Verkkoselain käynnistetään nyt uudestaan, jotta muutokset huomioidaan.

-Debian/Ubuntu


```
admin@instance:~$ sudo service apache2 restart
```


-Fedora/CentOS


```
admin@instance:~$ sudo service httpd restart
```




## WordPress-ohjelman lataus
Mene WordPress-kehittäjän sivulle [](https://wordpress.org/download/)ja lataa sielä järjestelmän tuorein versio:


```
admin@instance:~$ wget
https://wordpress.org/wordpress-4.4.tar.gz
```


Pura sitten juuri lataamasi kansio:


```
admin@instance:~$ tar zxvf wordpress-4.4.tar.gz
```



- Poista verkkoselaimen oletuskansio


```
admin@instance:~$ sudo rm -R /var/www/html/
```



- Korvaa oletuskansio Wordpress-kansiolla


```
admin@instance:~$ sudo mv wordpress /var/www/html
```



Kun siirto on tapahtunut, voidaan verkkoselaimelle antaa oikeus kirjoittaa kansioon.


- Debian/Ubuntu


```
admin@instance:~$ sudo chown -R www-data:www-data /var/www/html/
```


- [b[Fedora/CentOS


```
[admin@serveur-7 ~]$ sudo chown -R apache:apache /var/www/html/
```





## MySQL-konfiguraatio
Toisin kuin MySQL-palvelin, jonka voi asentaa suoraan Debianiin/Ubuntuun, MariaDB ei konfiguroi pääkäyttäjän salasanaa asennuksen yhteydessä.
MariaDB-palvelin täytyy siis käynnistää ja konfiguroida sitten salasana seuraavien komentojen avulla:


- Käynnistä tietokantapalvelin:


```
[admin@instance ~]$ sudo
/sbin/service mariadb start[/code

- Pääkäyttäjän salasanan uudelleen konfigurointi:

[code][admin@instance ~]$ sudo /usr/bin/mysql_secure_installation
```



Kun sinulla on pääkäyttäjän salasana, voit kirjautua tietokantapalvelimelle:


```
admin@instance:~$ sudo mysql -u root -p
```


Seuraavaksi on mahdollista luoda uusi käyttäjä ja tietokanta WordPressiä varten:


- Käyttäjän luominen


```
mysql> CREATE USER 'wordpress'@'localhost' IDENTIFIED BY 'P@ssw0rd';
```


- Tietokannan luominen


```
mysql> CREATE DATABASE `wordpress` ;
```


- Annetaan oikeudet käytäjälle "wordpress" tietokantaan "wordpress"


```
mysql> GRANT ALL PRIVILEGES ON `wordpress` . * TO 'wordpress'@'localhost';
```





## WordPress-konfiguraatio
Kun tietokanta on konfiguroitu, voit käynnistää selaimen ja kirjautua Wordpress-sivullesi syöttämällä instanssisi IP-osoite selaimeen.

Wordpress-sivu tulee näkyviin, voit ensimmäiseksi konfiguroida pääsyoikeudet tietokantaan.

![](images/img_3674.jpg){.thumbnail}
Tämän jälkeen voit konfiguroia sivun yleiset tiedot sekä admin-käyttäjäsi pääsyoikeudet.

![](images/img_3675.jpg){.thumbnail}
Kun nämä on vahvistettu, pääset kirjautumaan juuri luomasi verkkosivun hallintapaneeliin.


## 

- [Varmuuskopioi instanssi]({legacy}1881)
- [Owncloud varmuuskopiointi Objcet Storagella]({legacy}2000)




## 
[url=GUIDE#1785]Paluu Cloud-tuotteiden ohjeiden hakemistoon

