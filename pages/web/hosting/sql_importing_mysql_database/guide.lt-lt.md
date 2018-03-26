---
title: 'Svetainių talpinimas: MySQL duomenų bazės importavimas'
excerpt: MySQL duomenų bazės importavimas į turimą OVH svetainių talpinimo planą
id: '1393'
slug: svetainiu_talpinimas_mysql_duomenu_bazes_importavimas
legacy_guide_number: g1393
---


## Reikalavimai
Turite turėti ar žinoti:


- Atsarginę duomenų bazės kopiją, dar vadinamą dump*, kuri buvo sukurta išsaugant duomenų bazę (kaip nurodyta šiame gide: []({legacy}1394)). 

Atsarginė duomenų bazės kopija paprastai žymima plėtiniu .sql.
Jeigu jūsų duomenų bazė yra kitur, rekomenduojame kreiptis į paslaugų teikėją, kad šis suteiktų informacijos apie duomenų bazės kopijos atlikimą.


- Taip pat būtina žinoti SQL serverio pavadinimą, prisijungimo vardą ir slaptažodį, kad galėtumėte prisijungti prie naujos duomenų bazės. 
Kaip gauti SQL prisijungimo duomenis, skaitykite gide []({legacy}1374)


![](images/img_1802.jpg){.thumbnail}


## Per OVH valdymo sąsają
Paprasčiausias ir greičiausias jūsų duomenų bazės importavimo sprendimas yra jūsų [OVH valdymo sąsajoje](https://www.ovh.com/manager/). Šio metodo privalumas: importuojant atsarginės kopijos failą netaikomi jokie dydžio apribojimai. 

Prisijungę prie savo [valdymo sąsajos](https://www.ovh.com/manager/) su kliento ID ir slaptažodžiu, pasirinkite savo svetainių talpinimo planą kairėje, po to Duomenų bazės.

![](images/img_4125.jpg){.thumbnail}
Duomenų bazės, į kurią bus importuota jūsų asarginė kopija, dešinėje, spauskite krumpliaratį ir pasirinkite „Importuoti failą“.

Vadovaukitės tolimesniais žingsniais valdymo sąsajoje norėdami importuoti savo SQL atsarginę kopiją.

![](images/img_4126.jpg){.thumbnail}


## Per PhpMyAdmin (MySQL)
Prisijunkite prie duomenų bazės per PhpMyAdmin.

Prisijungimui naudokite adresą: [OVH PhpMyAdmin](https://phpmyadmin.ovh.net).

Taip pat esame paruošę PhpMyAdmin naudojimo gidą: []({legacy}1374).


- Kai prisijungsite prie PhpMyAdmin, pasirinkite duomenų bazę spragtelėdami jos pavadinimą (žr. iliustraciją, DB pavadinimas apibrauktas mėlynai).

- Spragtelėkite Importuoti.

- Spragtelėkite Naršyti/Browse ir pasirinkite atsarginės kopijos failą (dėmesio, failas negali viršyti 16 MB).

- Spragtelėkite Vykdyti/Go, kad pradėtumėte importavimą.

Jeigu duomenų bazės kopiją parsisiuntėte per mūsų valdymo sąsają, nepamirškite išarchyvuoti failo prieš jį importuodami.


![](images/img_1962.jpg){.thumbnail}

## Pastaba:

- Importuojamas failas negali viršyti 16 MB.




## Naudojant scenarijų, esantį talpinimo plane
Naudodami teksto redaktorių galite susikurti importavimo scenarijų. Jam reikės priskirti naudojamos programavimo kalbos plėtinį.

Pateiktuose scenarijų pavyzdžiuose keiskite šiuos duomenis:


- database_name.sql duomenų bazės kopijos failo pavadinimas.

- server_sql serverio, į kurį importuosite duomenų bazę, pavadinimas.

- database_name duomenų bazės pavadinimas.

- password Duomenų bazės slaptažodis.

Atsarginės duomenų bazės kopijos failą reikia įkelti į FTP saugyklą prieš paleidžiant scenarijų.


## PHP (importbase.php):
Scenarijaus kodas PHP kalba: 


```
<?php
echo "Duomenų bazė importuojama.......
<br>";
system("cat database_name.sql | mysql --host=server_sql --user=database_name --password=your_password database_name");
echo "Baigta. Duomenų bazė sėkmingai importuota.";
?>
```



## Perl (importbase.cgi) :
Scenarijaus kodas Perl kalba: 


```
#!/usr/bin/perl

print "Duomenų bazė importuojama.......
<br>";
system("cat database_name.sql | mysql --host=server_sql --user=database_name --password=your_password database_name");
print "Baigta. Duomenų bazė sėkmingai importuota.";
```



- Įkelkite scenarijų ir dump* failą per FTP į svetainės talpinimo plano katalogą www, tuomet paleiskite scenarijų naršyklėje įvedę adresą: http://jusu_domenas.tld/importbase.php


Pakeiskite jusu_domenas.tld savo domenu, o importbase.php - visu failo pavadinimu (su plėtiniu).

Atsarginės kopijos failas yra suarchyvuotas?

Jeigu dump* failas yra suarchyvuotas (jo plėtinys yra .sql.gz), scenarijaus pradžioje įrašykite tokią eilutę:


```
system("gunzip nom_de_la_base.sql.gz");
```


Pavyzdžiai:

## PHP: dump išarchyvavimas + DB importavimas
Visas kodas: 


```
<?php
echo "Išarchyvuojamas failas.....
<br>";
system("gunzip testbackup.sql.gz");
echo "Duomenų bazė importuojama......
<br>";
system("cat testbackup.sql | mysql --host=mysql5-21.pro --user=testimport --password=RtPgDsmLE testimport");
echo "Baigta. Duomenų bazė sėkmingai importuota.";
?>
```



## Perl: dump išarchyvavimas + DB importavimas
Visas kodas: 


```
#!/usr/bin/perl

print "Išarchyvuojamas failas.....
<br>";
system("gunzip testbackup.sql.gz");
print "Duomenų bazė importuojama.......
<br>";
system("cat testbackup.sql | mysql --host=mysql5-21.pro --user=testimport --password=RtPgDsmLE testimport");
print "Baigta. Duomenų bazė sėkmingai importuota.";
```




## Komandinėje eilutėje per SSH

## Reikalavimai

- Reikia žinoti savo FTP prisijungimo vardą ir slaptažodį. 
FTP prisijungimo duomenų gavimo gidas: []({legacy}1374)

- Talpinimo planas, prie kurio galima jungtis per SSH ([peržiūrėti talpinimo planų ypatybes](http://www.ovh.lt/svetainiu-talpinimas/)).


Prisijungimo per SSH gidas:


- [Prisijungimas per SSH](http://gidai.ovh.lt/SshTelnet).



## Duomenų bazės importavimas per SSH
Prisijunkite prie talpinimo plano per SSH.

Pereikite į katalogą, į kurį įkeltas importavimui paruoštas failas. Po to įveskite komandą:

Bendrinė komanda: 


```
cat nom_de_la_base.sql | mysql --host=serveur_sql --user=nom_de_la_base --password=mot_de_passe nom_de_la_base
```


Pavyzdys su netikrais duomenimis: 


```
cat testbackup.sql | mysql --host=mysql5-21.pro --user=testimport --password=RtPgDsmLE testimport
```




## Naudojant privataus SQL serverio paslaugą
Duomenų bazės importavimo gidas prieinamas čia:


- [Private SQL duomenų bazės importavimas](https://www.ovh.lt/g2023.viskas-apie-private-sql)




## Duomenų bazės pavadinimo klaida
Atsarginės kopijos failo pradžioje gali prireikti įrašyti šią eilutę:


```
use duomenų_bazės_pavadinimas;
```


Čia duomenų_bazės_pavadinimas yra duomenų bazės, į kurią įkeliate informaciją, pavadinimas.


## Leksika
dump: specialus duomenų bazės atsarginės kopijos failas. 

