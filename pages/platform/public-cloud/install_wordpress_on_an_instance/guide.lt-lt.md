---
title: Wordpress diegimas virtualioje mašinoje
excerpt: Wordpress diegimas virtualioje mašinoje
slug: wordpress_diegimas_virtualioje_masinoje
legacy_guide_number: g2060
---


## 
WordPress - tai turinio valdymo sistema (TVS), leidžianti greitai ir paprastai kurti interneto svetainę. Administruojant svetainę nebūtina turėti specialių programavimo įgūdžių.

Priešingai nei OVH VPS atveju, Public Cloud virtualioje mašinoje nėra išankstiniam diegimui paruoštų WordPress šablonų, tačiau jūs galite bet kuriuo metu įsidiegti WordPress virtualioje mašinoje.

Šiame gide paaiškinama, kaip diegiama WordPress sistema Public Cloud virtualioje mašinoje.


## Reikalavimai

- [Sukuriama virtuali mašina OVH kliento paskyroje]({legacy}1775)




## Žiniatinklio serverio diegimas
Pirmiausia reikia įdiegti žiniatinklio (web) serverį jūsų Public Cloud virtualioje mašinoje.

Tačiau turime įsitikinti, kad virtuali mašina yra atnaujinta: 


- Debian / Ubuntu


```
admin@instance:~$ sudo apt-get update && sudo apt-get upgrade -y
```


- Fedora / CentOS


```
[admin@instance ~]$ sudo yum update && sudo yum upgrade
```



Po to galėsite įsidiegti žiniatinklio serverį.

Mes naudosime Apache su šiais elementais:

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



Jums reikės patikslinti slaptažodį konfigūruojant MySQL duomenų bazės root paskyrą.   

Po to iš naujo paleidžiamas žiniatinklio serveris.


- Debian / Ubuntu


```
admin@instance:~$ sudo service apache2 restart
```


- Fedora / CentOS


```
admin@instance:~$ sudo service httpd restart
```





## WordPress atsisiuntimas
[Wordpress](https://lt.wordpress.org/txt-download/) svetainėje atsisiųskite naujausią versiją, pvz.:


```
admin@instance:~$ wget https://lt.wordpress.org/wordpress-4.4-lt_LT.tar.gz
```


Po to išarchyvuokite atsisiųstą failą: 


```
admin@instance:~$ tar zxvf wordpress-4.4-lt_LT.tar.gz
```



- Pašalinkite žiniatinklio serverio katalogą pagal nutylėjimą


```
admin@instance:~$ sudo rm -R /var/www/html/
```


- Įkelkite Wordpress katalogą į žiniatinklio serverio katalogą pagal nutylėjimą


```
admin@instance:~$ sudo mv wordpress /var/www/html
```



Pakeitus katalogą, žiniatinklio serveriui galėsime suteikti rašymo teises kataloge.  


- Debian / Ubuntu


```
admin@instance:~$ sudo chown -R www-data:www-data /var/www/html/
```


- Fedora / CentOS


```
[admin@serveur-7 ~]$ sudo chown -R apache:apache /var/www/html/
```





## MySQL konfigūravimas
Priešingai nei MySQL-Server, kurį galite įsidiegti Debian / Ubuntu, MariaDB nekonfigūruoja jūsų root slaptažodžio diegimo metu. Taigi jums reikės paleisti MariaDB serverį ir po to sukonfigūruoti slaptažodį naudojant šias komandas:


- Paleiskite duomenų bazės serverį:


```
[admin@instance ~]$ sudo /sbin/service mariadb start
```


- Iš naujo sukonfigūruokite root slaptažodį:


```
[admin@instance ~]$ sudo /usr/bin/mysql_secure_installation
```



Kai tik turėsite savo root slaptažodį, jūs galėsite prisijungti prie savo duomenų bazės serverio:


```
admin@instance:~$ sudo mysql -u root -p
```


Po to galėsite sukurti naują naudotoją ir duomenų bazę, skirtą WordPress:


- Naudotojo kūrimas


```
mysql> CREATE USER 'wordpress'@'localhost' IDENTIFIED BY 'P@ssw0rd';
```


- Duomenų bazės kūrimas


```
mysql> CREATE DATABASE `wordpress` ;
```


- Po to suteikiamos visos teisės wordpress naudotojui wordpress duomenų bazėje


```
mysql> GRANT ALL PRIVILEGES ON `wordpress` . * TO 'wordpress'@'localhost';
```





## Wordpress konfigūravimas
Po duomenų bazės konfigūravimo jūs galėsite paleisti naršyklę ir prisijungti prie savo WordPress svetainės naršyklėje nurodant jūsų virtualios mašinos IP adresą.

Atsidarius WordPress puslapiui, visų pirma sukonfigūruokite prieigą prie savo duomenų bazės.

![](images/img_3674.jpg){.thumbnail}
Po to jūs galėsite konfigūruoti bendrąją jūsų svetainės informaciją, taip pat prieigą prie administratoriaus naudotojo.

![](images/img_3675.jpg){.thumbnail}
Po šių veiksmų atlikimo jūs galėsite prisijungti prie savo interneto svetainės administratoriaus paskyros su naudotojo duomenimis.


## 

- [Virtualios mašinos atsarginis kopijavimas]({legacy}1881)
- [Owncloud konfigūravimas su Object Storage]({legacy}2000)




## 
[Grįžti į Cloud gidų sąrašą]({legacy}1785)

