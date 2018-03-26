---
title: 'Svetainių talpinimas: Svetainės įkėlimas į internetą'
description: 'Šiame gide pateikiama informacija, kaip į OVH talpinimo planą įkelti svetainę.'
slug: svetainiu_talpinimas_svetaines_ikelimas_i_interneta
legacy_guide_number: g1374
---


## Bendra informacija
Svetainė gerai veiks, kai įkelsite ją į tinkamą katalogą. Pagrindinė taisyklė OVH yra ta, kad svetaines reikia kelti į katalogą www. Būtent į šį katalogą (pagal nutylėjimą) keliami svetainės failai. Failų perkėlimui reikės programos, naudojančios FTP (File Transfer Protocol) protokolą.
Mes rekomenduojame naudoti nemokamą programą [FileZilla](http://filezilla-project.org/).


## FTP prisijungimo duomenys

### Svetainių talpinimo plano diegimo el. laiškas
OVH patvirtinus jūsų svetainių talpinimo plano užsakymą, el. paštu informuosime apie jūsų paslaugų įdiegimą.

Šiame el. laiške, tarp visų kitų duomenų, pateikti FTP prisijungimo duomenys.

Priklausomai nuo užsakyto plano ir su jūsų talpinimo planu susieto domeno, el. laiško tema gali būti:


```
/* Asmeninis talpinimo planas užsakytas domenui jusu-domenas.tld */

[OVH-perso] jusu-domenas.tld įdiegtas
```


Turinys:


```
[...]
JŪSŲ FTP KODAI
--------------

Šie kodai padės įkelti svetainę on-line 
(Dėmesio: jūsų duomenys turi būti įkelti į www katalogą).

ftp serveris: ftp.jusu-domenas.tld ar ftp.cluster0XX.ovh.net
Login ar naudotojas: loginftp
Slaptažodis: mDpFtP

[...]
```


Taigi prisijungimui reikės naudotojo vardo ir slaptažodžio.

Jeigu slaptažodis buvo pakeistas po įdiegimo, šiame el. laiške nebus slaptažodžio duomenų.

Vadinasi, slaptažodis buvo pakeistas jūsų valdymo sąsajoje. Naudotojo vardas lieka toks pat, išsaugokite jį.


### OVH valdymo sąsajoje
Valdymo sąsajoje

Kai prisijungsite prie valdymo sąsajos, spragtelėkite savo talpinimo planą skiltyje Svetainių talpinimas.
Pažymėkite langelį FTP.
Savo prisijungimo vardo dešinėje spragtelėkite krumpliaratį ir Keisti slaptažodį. Šiame lygmenyje primenamas prisijungimo vardas. 
Įveskite naują pageidaujamą slaptažodį ir patvirtinkite jį paspaudę Patvirtinti. Slaptažodis turi būti sudarytas iš 8 - 12 raidžių ir/ar skaičių.

Slaptažodis bus pakeistas per kelias minutes.


### FileZilla naudojimas

FileZilla naudojimas aprašytas šiame gide:[]({legacy}1380)

Jums reikės šių duomenų:

- Svetainės failų;
- Duomenų bazės kopijos (jeigu DB reikalinga).

FTP prisijungimo duomenys:

- Mazgas/host: ftp.jusu-domenas.tld, arba ftp.cluster0XX.ovh.net;
- Prisijungimo vardas/login: jūsų FTP prisijungimo vardas;
- Slaptažodis/password: FTP slaptažodis (žr. aukščiau);
- Prievadas/port: 21 (Jeigu norite jungtis per SSH: 22; SSH prieiga suteikiama su PRO ir galingesniais planais).



![](images/img_1858.jpg){.thumbnail}


## FTP prisijungimo duomenys

### Valdymo sąsajoje
Valdymo sąsajoje galite automatiškai atkurti FTP saugyklos kopiją, t.y. atstatyti failus į ankstesnę būseną.

Norėdami tai padaryti, prisijunkite prie valdymo sąsajos ir eikite į Svetainių talpinimas.

Toliau FTP skiltyje pasirinkite Atkurti atsarginę kopiją.

![](images/img_2690.jpg){.thumbnail}
Pasirinkite atkūrimo datą.

Atkreipkite dėmesį, kad šis veiksmas pakeis visus FTP talpykloje esančius duomenis į pasirinktos datos būseną!

Spragtelėkite Toliau, kad baigtumėte operaciją. Failų atkūrimas užtruks keletą ar keliolika minučių.


- Jeigu nenorite atkurti visų FTP failų, naudokite failų perkėlimą per FileZilla.



### Per FileZilla
Esame paruošę atskirą visos atsarginės kopijos ar tam tikro failo atkūrimo FTP per FileZilla gidą:[]({legacy}1380)


## Bendra informacija
Duomenų bazės leidžia kaupti, saugoti ir nuskaityti duomenis, reikalingus svetainėms ar aplikacijoms, internete.

Duomenų bazėse galite saugoti įvairaus tipo duomenis, pvz., svetainės turinį, nuorodas ir lankytojų informaciją.

OVH svetainių talpinimo planai suderinami su skirtingų tipų duomenų bazėmis: MySQL, PostgreSQL ir SQL Server (pastarosios duomenų bazės galimos tik su Windows talpinimo planais).

## Duomenų bazės 

### Kūrimas
Diegiant jūsų svetainių talpinimo planą, įskaičiuota duomenų bazė nėra diegiama automatiškai.
Todėl negausite šios informacijos automatiškai el. paštu.
Pirmiausiai jūs turite sukurti savo duomenų bazę.
Prisijunkite prie savo valdymo sąsajos ir Svetainių talpinimo skiltyje pasirinkite svetainių talpinimo planą.

Po to meniu skiltyje SQL pasirinkite Sukurti duomenų bazę

![](images/img_2743.jpg){.thumbnail}
Pasirinkite duomenų bazės variklį:
Mysql ar PostgreSQL.
Pasirinkite duomenų bazės tipą ir Toliau

Jums reikės įvesti naudotojo vardą ir slaptažodį.

Prisijungimo prie duomenų bazės duomenys jums bus išsiųsti el. paštu.

Po kelių minučių el. paštu gausite visą duomenų bazės informaciją.

![](images/img_2694.jpg){.thumbnail}


### SQL prisijungimo duomenys

- Dėmesio: jūsų duomenų bazė nėra sukuriama automatiškai diegiant svetainių talpinimo planą.


Prisijungimo prie duomenų bazės duomenis gausite el. paštu tik po to, kai sukursite duomenų bazę.
Šį el. laišką taip pat rasite savo valdymo sąsajoje. Prisijungus spragtelėkite meniu skiltį Pagalba ir El. laiškų istorija.

![](images/img_2747.jpg){.thumbnail}
El. laiško tema:


```
[MySQL] MySQL bazė DB_pavadinimas
```


Turinys:


```
[...]

Jūsų MySQL bazė įdiegta mūsų serveryje.

Parametrai:
-----------

MySQL:
Serveris: mysql51-66.pro
Naudotojo vardas: DB_pavadinimas
Duomenų bazės pavadinimas: DB_pavadinimas
Slaptažodis: ************

[...]
```

Duomenų bazės slaptažodį galima keisti kliento sąsajoje.


- Dėmesio: slaptažodžio keitimas gali sukelti problemų. Jeigu dėl slaptažodžio keitimo nebus negalima prisijungti prie duomenų bazės, gali neveikti svetainė ar paslaugos.


Norėdami keisti duomenų bazės slaptažodį, junkitės prie kliento sąsajos, po to pasirinkite savo svetainių talpinimo planą ir SQL -> Spragtelėkite jūsų duomenų bazės dešinėje esantį krumpliaratį ir Keisti slaptažodį.

Jūs galėsite atnaujinti savo duomenų bazės slaptažodį.

Nepamirškite atnaujinti savo svetainės konfigūracinio failo (config). Taip užtikrinsite, kad svetainės variklis, jungdamasis su duomenų baze, naudos naują slaptažodį.


### Prisijungimas per PhpMyAdmin
Junkitės per bendrą [PhpMyAdmin sąsają](https://phpmyadmin.ovh.net/).

Reikės pateikti šiuos duomenis:


- Server: vartotojas.mysql.db (vartotojas nurodytas duomenų bazės kūrimo el. laiške).

- Username: vartotojas, nurodytas duomenų bazės kūrimo el. laiške.

- Password: duomenų bazės slaptažodis.

- Version: šioje vietoje galite pasirinkti, ar jungtis prie naudojamos (darbinės) duomenų bazės, ar 1 - 7 dienų senumo kopijos.


Užpildykite reikiamus laukus ir spragtelėkite Go, kad prisijungtumėte.

![](images/img_1960.jpg){.thumbnail}

- Jeigu naudojate MySQL4 duomenų bazes, spragtelėkite nuorodą, esančią prisijungimo sąsajos apačioje.




### Duomenų bazės eksportavimas
Kaip eksportuoti SQL duomenų bazę? Kaip padaryti atsargines duomenų bazių kopijas?

Skaitykite duomenų bazės eksportavimo gidą:[]({legacy}1394)

![](images/img_1932.jpg){.thumbnail}


### Duomenų bazės importavimas
Kaip importuoti SQL duomenų bazės atsargines kopijas? Kokie galimi importavimo būdai?

Skaitykite MySql duomenų bazės importavimo gidą:[]({legacy}1393)

![](images/img_1933.jpg){.thumbnail}


### Taisymas - Optimizavimas - Analizė
Galite atlikti duomenų bazių taisymus, jas optimizuoti bei analizuoti.

Visa tai padarysite prisijungę prie [PhpMyAdmin sąsajos](https://phpmyadmin.ovh.net/).

Prisijungę pasirinkite duomenų bazę, su kuria dirbsite.

Po to, dešiniajame viršutiniame kampe, spragtelėkite Operacijos.

Lentelės darbų skyriuje galėsite atlikti įvairias operacijas su pačia lentele.

![](images/img_1961.jpg){.thumbnail}


### Private SQL naudojimas
Norite sužinoti, kaip naudoti Private SQL serverio paslaugą? Kaip joje importuoti ir eksportuoti duomenis?

Skaitykite[Private SQL naudojimo gidą](http://guides.ovh.com/GuideSqlPrive)

![](images/img_1866.jpg){.thumbnail}


## Diegimo gidas
Norite greitai susikurti svetainę nesimokydami svetainių kūrimo paslapčių?

Skaitykite OVH modulių diegimo gidą:[]({legacy}1402)

![](images/img_1930.jpg){.thumbnail}


### Naujas WordPress diegimas

WordPress – tai turinio valdymo sistema (TVS), leidžianti nesunkiai sukurti bei valdyti interneto svetainę arba internetinį dienoraštį (blogą). 
Nemokamą ir laisvai prieinamą WordPress galima personalizuoti naudojant įvairias temas bei plėtinius.  


- Dienoraštis ir svetainė

Šiame gide pateikiama informacija apie WordPress TVS diegimą rankiniu būdu: []({legacy}1375)


![](images/img_1873.jpg){.thumbnail}


### Naujas Joomla diegimas

Joomla - tai nemokama ir laisvai prieinama turinio valdymo sistema (TVS). Joomla galima personalizuoti naudojant įvairias temas bei plėtinius.
Ši TVS – tai žiniatinklio programa, leidžianti visiškai paprastai valdyti interneto svetainę arba dinaminį intraneto puslapį. 


- Interneto svetainė

Šiame gide pateikiama informacija apie TVS Joomla diegimą: []({legacy}1375)


![](images/img_1874.jpg){.thumbnail}


### Naujas PrestaShop diegimas

PrestaShop – tai atvirojo kodo žiniatinklio aplikacija, leidžianti sukurti e-parduotuvę ir vykdyti el. prekybą. 


- Parduotuvė internete

Šiame gide pateikiama informacija apie TVS PrestaShop diegimą rankiniu būdu: []({legacy}1375)


![](images/img_1862.jpg){.thumbnail}


## .ovhconfig failas
Ketinate pakeisti savo interneto svetainių talpinimo plano PHP versiją? Arba aktyvuoti phpfpm?

Šiuose giduose pateikiama informacija apie .ovhconfig failo naudojimą bei konfigūravimą:  


- []({legacy}1175)

- []({legacy}1207)



![](images/img_1867.jpg){.thumbnail}


## Galimos bendrų svetainių talpinimo planų bibliotekos
Informacija apie prieinamas bibliotekas:

|Biblioteka|Pasiekiamumas|
|---|---|
|ffmepg|neaktyvuota|
|GD|aktyvuota|
|imagemagik|aktyvuota|
|zend (opcache)|aktyvuota|
|PDO|aktyvuota|
|Zip - Gzip|aktyvuota|

![](images/img_1867.jpg){.thumbnail}
Dėmesio: naudojant PHP-FPM, taip pat dėl saugumo priežasčių, šios parinktys išjungtos (nebenaudojamos PHP):


- register_globals
- magic_quotes_gpc




## Mano interneto svetainės našumo optimizavimas
Jūs norite ištirti lėtą savo interneto svetainės veikimą? Arba paprasčiausiai pagerinti savo interneto svetainės našumą?

Šiame gide pateikiama informacija apie lėtai veikiančios interneto svetainės diagnostiką, taip pat našumo optimizavimą:[]({legacy}1396)

![](images/img_1865.jpg){.thumbnail}

