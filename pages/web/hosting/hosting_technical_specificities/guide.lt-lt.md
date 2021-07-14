---
deprecated: true
title: 'Svetainių talpinimas: techninės svetainių talpinimo planų ypatybės'
excerpt: Techninės OVH svetainių talpinimo planų ypatybės
id: '1463'
slug: svetainiu_talpinimas_technines_svetainiu_talpinimo_planu_ypatybes
legacy_guide_number: g1463
---


## FTP perdavimas - pasyvus režimas
FTP kliento programą galite nustatyti taip:

FileZilla:

Eikite į meniu Redaguoti/Edit --> Nustatymai/Settings --> Jungtys/Connections --> FTP

Skiltyje Perdavimas/Transfer mode pažymėkite Pasyvus (rekomenduojamas)/Passive (recommended).

Cyberduck:

Spragtelėkite New connection.

Pasirinkite More options, tuomet skiltyje Connection mode pasirinkite Passive.

Kiti FTP klientai:

Kitų FTP klientų nustatymo ieškokite programų kūrėjų pagalbos svetainėse.


## Vienalaikiai prisijungimai prie duomenų bazės.

- Šiuo metu svetainių talpinimo duomenų bazės (Asmeninės / Pro / modulių) yra ribojamos iki 30 vienalaikių jungčių.




## Prisijungimas iš išorinio serverio.

- Saugumo sumetimais negalima jungtis prie duomenų bazių serverių iš išorinių (ne OVH svetainių talpinimo) serverių.


Tik svetainių talpinimo serveriai gali jungtis prie MySQL serverių.

Bandant jungtis iš kitų serverių, bus matoma tokia klaida:


```
Warning: MySQL Connection Failed: Host jusu.serverio.ip is not allowed to connect ...
```



- Šiuo metu tai taikoma ir Private SQL paslaugai.




## Svetainių talpinimo SQL serverio kintamieji
Kaip sužinoti kintamųjų reikšmes, pvz., max_allowed_packet?

Prisijunkite prie PhpMyAdmin sąsajos, pereikite prie SQL komandų sąsajos ir įveskite show variables;

Matysite kintamųjų sąrašą, kuriame rasite norimą kintamąjį ir jo reikšmę.


## PHP-FPM
Savo infrastruktūroje esame įdiegę PHP-FPM palaikymą, kad pagerintume PHP atsaką.

Savo laboratorijose su šia technologija pasiekėme iki 7 kartų didesnį našumą, lyginant su ankstesnėmis technologijomis.

Taip pat esame paruošę atskirą PHP-FPM naudojimo gidą:


- []({legacy}1175)


Kai kurie serverių kintamieji buvo pakeisti dėl PHP-FPM:

|Kintamasis|be PHP-FPM|su PHP-FPM|
|max_execution_time|120s|165s|
|max_input_vars|2000|16000|
|memory_limit|128M|512M|



- Pagrindiniam domenui byla .ovhconfig veikia šakniame svetainės kataloge (pavyzdžiui direktorijoje /www/), tačiau neveiks 2 ar aukštesnio lygio kataloge (www/test, ar www/test/test).

- PHP-FPM yra įjungtas pagal nutylėjimą 2014 hostingo paslaugų pasiūlymuose.




## Santykinis aplanko kelias serveryje
Atlikus saugumo atnaujinimą (04/06/2014) serveryje, pasikeitė serverio santykinis aplanko kelias.

Naudojant, pavyzdžiui, šį skriptą:


```
<?php
echo $_SERVER['SCRIPT_FILENAME'];
?>
```


Bus parodytas aplanko kelias panašus į: /homez.XXX/VARTOTOJAS/APLANKAS/test.php

Pagrindinė paskyra bus: 
/home/VARTOTOJAS/APLANKAS/test.php


- Suderinamumas užtikrinamas simbolinėmis nuorodomis (/homez.XXX/VARTOTOJAS nukreipiama į /home/USER)




## Serverio hostas
Nėra galima gauti hosto pavadinimo naudojant funkciją REMOTE_HOST:


```
<?php
echo $_SERVER['REMOTE_HOST'] ;
?>
```


Tačiau yra galima naudoti funkciją gethostbyaddr()


```
<?php
echo gethostbyaddr($_SERVER["REMOTE_ADDR"]); 
?>
```




## FTP per PHP
Atlikus saugumo atnaujinimą (2014-06-04) hostingo serveriuose, nėra galima FTP jungtis per PHP aktyviame režime.

Galite pamatytu šią PHP klaidą : 


```
Warning: ftp_put() [function.ftp-put]: bind() failed: Permission denied (13)
```


Funkcija bind() nėra galima

Tam, kad išvengti jos pakanka aktyvuotį pasyvų režimą:

Code PHP:

```
$conn_id = ftp_connect($ftp_server);
$login_result = ftp_login($conn_id, $ftp_user_name, $ftp_user_pass);
# switch to passive mode (mandatory on Ovh shared hosting)
ftp_pasv( $conn_id, true );
```



- Aktyvus FTP nėra galimas, tokiu atveju jūs galite naudoti pasyvų režimą




## Bibliotekos
Prieinamos bibliotekos:

|Biblioteka|Prieinamumas|
|Django Python|ne aktyvus|
|FFmpeg|ne aktyvus|
|memcached|ne aktyvus|
|apc|ne aktyvus|
|imagick|ne aktyvus|
|GD|aktyvus|
|zend (opcache)|aktyvus|
|PDO|aktyvus|
|Zip - Gzip|aktyvus|


Papildomi duomenys apie klasterį yra pateikti čia:
[https://webhosting-infos.hosting.ovh.net](https://webhosting-infos.hosting.ovh.net)

Pakeiskite klasterį nurodyta šiame URL į jūsų, kurį galite sužinoti tvarkytuve, prieglobos paslaugos santraukoje.
Dėmesio: naudojant PHP-FPM ir saugumo sumetimais šios funkcijos yra išjungtos:


- register_globals
- magic_quotes_gpc




## Vykdyti skriptą PHP per SSH
Šiuo metu svetainių talpyklose pagal nutylėjimą yra naudojama 4.4.9 PHP versija.


- Žemiau yra pateiktas komandinės eilutės pavyzdys skirtas paleisti bylą test.php naudojant 4.4.9 PHP versiją.


```
php test.php
```


- Jeigu norite naudoti 5.3 PHP skripto test.php versiją:


```
php.ORIG.5_3 test.php
```


- Jeigu 5.4:


```
php.ORIG.5_4 -c /usr/local/lib/php.ini-2 test.php
```




