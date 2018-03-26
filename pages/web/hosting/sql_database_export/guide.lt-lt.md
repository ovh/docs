---
title: 'Svetainių talpinimas: Duomenų bazių eksportavimo gidas'
excerpt: 'Šiame gide pateikiami keli būdai, kaip eksportuoti duomenų bazę.'
slug: svetainiu_talpinimas_duomenu_baziu_eksportavimo_gidas
legacy_guide_number: g1394
---


## Reikalavimai
Turite žinoti:


- Prieigos prie kliento sąsajos parametrus;

- Duomenų bazės naudotojo vardą ir slaptažodį, taip pat SQL serverio pavadinimą.

Kaip gauti SQL prisijungimo duomenis aprašyta gide:[]({legacy}1374)


Toliau šiame gide pateikiami keli būdai, kaip eksportuoti duomenų bazę.

![](images/img_1833.jpg){.thumbnail}


## Kliento sąsajoje
Duomenų bazės kopiją galite parsisiųsti iš kliento sąsajos.

Tai paprasčiausias ir greičiausias metodas duomenų bazės kopijos kūrimui.

Pirmiausia prisijunkite prie [kliento sąsajos](https://www.ovh.com/manager/web).

Kai prisijungsite, Svetainių talpinimo skyriuje spragtelėkite savo domeną.

## 1 žingsnis
Skyriuje Svetainių talpinimas pasirinkite domeną, ir paspauskite SQL.

Atsarginės kopijos kūrimo trukmė priklauso nuo duomenų bazės dydžio.

![](images/img_2698.jpg){.thumbnail}

## 2 žingsnis
Spragtelėkite krumpliaratį prie duomenų bazės ir pasirinkite Sukurti dump failą.

Lentelėje matysite duomenų bazių sąrašą (žr. iliustraciją).

![](images/img_2699.jpg){.thumbnail}

## 3 žingsnis
Jūs turite pasirinkti savo atsarginio kopijavimo datą: dabar, vakar, savaitės senumo.

Jūs galite pasirinkti:


- Dabar: duomenų bazės kopija T momentu.

- Vakar: duomenų bazės kopija naktį (D-0), paskutinė atsarginė kopija buvo atlikta apie 3 val. ryto.

- Savaitės senumo: duomenų bazės kopija, atlikta prieš 7 dienas (D-7), paskutinė atsarginė kopija buvo atlikta apie 3 val. ryto.


Spauskite Toliau ir Patvirtinti, kad paleistumėte savo SQL atsarginės kopijos perkėlimą.

Po patvirtinimo jums reikia palaukti, kol bus perkeltas jūsų atsarginio kopijavimo failas (dump*), paskui el. paštu gausite nuorodą, leidžiančią parsisiųsti dump failą.

El. paštu išsiųsto pranešimo antraštės pavyzdys:


```
[OVH-SQL] testovh.ovh - Jūsų duomenų bazės dump failas: testovhmod1
```


Nuoroda į dump failą bus pateikta el. laiške. Jūsų duomenų bazės atsarginė kopija bus pasiekiama nuotoliniame serveryje 30 dienų.

Gautas failas bus suarchyvuotas, todėl patariame jį išarchyvuoti prieš importuojant jūsų SQL atsarginio kopijavimo failą.

![](images/img_2700.jpg){.thumbnail}


## Per PhpMyAdmin
Jei norite, galite eksportuoti duomenų bazę per PhpMyAdmin sąsają.

Prisijunkite prie [PhpMyAdmin sąsajos](https://phpmyadmin.ovh.net/).

## Greitas eksportavimas
Kai prisijungsite, pasirinkite duomenų bazę (žr. iliustraciją).

Po to eikite į Eksportuoti.

Greitojo eksportavimo funkcija neleis pasirinkti duomenų bazės formato, kuris aktualus importuojant.

Toliau bus apžvelgtas išsamesnis eksportavimas.

![](images/img_1963.jpg){.thumbnail}

## Išsamus eksportavimas
Kai prisijungsite, pasirinkite duomenų bazę.

Po to eikite į Eksportuoti.

Pasirinkite Personalised - show all possible options.

Matysite įvairias galimas parinktis.

Tables: 

Galite pasirinkti, kurias lenteles eksportuoti.

Tai gali būti naudinga tada, kai duomenų bazė yra didelė ir norite ją eksportuoti/importuoti per kelis kartus.

Output: 

Čia galite nurodyti, ar kopiją išsaugoti išoriniame faile, ar naršyklėje pateikti rezultatą, kad galėtumėte jį nukopijuoti.

Format: 

Nurodykite eksportuojamos duomenų bazės formatą. Patariame naudoti SQL.

Object creation options:

Čia galite nustatyti, kaip eksportuoti lenteles.
Galite nustatyti, ar eksportuoti tik struktūras ar duomenis, arba viską.
Rekomenduojame rinktis struktūrą ir duomenis.

Data dump options:

Pažymėkite parinktį None of the above, kad išvengtumėte Max_Allowed_Packet klaidos.

Šiame gide apžvelgiamos tik svarbiausios funkcijos.

Eksportavimą pradėsite spragtelėję Go.

![](images/img_1964.jpg){.thumbnail}

## Atsarginės kopijos .sql failas
Matysite nuorodą į dump* failą, kurį galėsite parsisiųsti.

Išsaugokite failą, kurį PhpMyAdmin pasiūlys parsisiųsti.

![](images/img_1848.jpg){.thumbnail}

## Ankstesnė atsarginė kopija

- Prisijungę prie PhpMyAdmin galėsite atkurti dienos ir savaitės senumo atsarginę kopiją per phpMyAdmin pagrindinį puslapį, šiuos nustatymus galėsite pasirinkti išskleidžiamame meniu.




## Naudojant scenarijų
Naudodami paprastą teksto redaktorių, galite susikurti scenarijų ir išsaugoti jį su programavimo kalbos, kurią naudojate, plėtiniu.

Šis sprendimas patrauklus tuo, kad sukuriamas dump* failas, tinkantis praktiškai visoms talpinimo platformoms.

Pateiktuose scenarijų pavyzdžiuose keiskite šiuos duomenis:


- database_name.sql duomenų bazės kopijos failo pavadinimas;

- server_sql serverio, į kurį importuosite duomenų bazę, pavadinimas;

- database_name duomenų bazės pavadinimas;

- password duomenų bazės slaptažodis.

Atsarginės duomenų bazės kopijos failas atsiras FTP saugykloje.

PHP kalba (backupbase.php):
Scenarijaus kodas PHP kalba: 


```
<?
echo "Duomenų bazė kopijuojama.......";
system("mysqldump --host=server_sql --user=database_name --password=your_password database_name > database_name.sql");
echo "Baigta. Duomenų bazės kopiją galite parsisiųsti per FTP.";
?>
```


Perl (backupbase.cgi):
Scenarijaus kodas Perl kalba: 


```
#!/usr/bin/perl
print "Duomenų bazė kopijuojama.......";
system("mysqldump --host=server_sql --user=database_name --password=your_password database_name > database_name.sql");
print "Baigta. Duomenų bazės kopiją galite parsisiųsti per FTP.";
```


- Įkelkite scenarijų į FTP saugyklą, į katalogą www ir interneto naršyklės adreso juostoje įveskite adresą: http://jusu_domenas.tld/backupbase.php


Pakeiskite jusu_domenas.tld savo domenu, o backupbase.php - visu failo pavadinimu (su plėtiniu).

Šis scenarijus kataloge, kuriame jis įkeltas, sukurs failą duomenų_bazės_pavadinimas.sql.

Šiame faile bus visos SQL instrukcijos, reikalingos duomenų bazės atkūrimui su visa struktūra ir visais duomenimis.

- 1 pastaba: Jeigu duomenų bazė yra labai didelė, geriau dump* failą generuoti kiekvienai lentelei atskirai. Tam naudokite parinktį --tables lentelės_pavadinimas:


mysqldump --host=serveur_sql --user=nom_de_la_base --password=mot_de_passe nom_de_la_base --tables lentelės_pavadinimas > nom_de_la_base.sql


- 2 pastaba: Taip pat galite suarchyvuoti failą, kad greičiau jį parsiųstumėte į savo kompiuterį (per FTP ar WEB).

Failo suarchyvavimui naudokite komandą gzip, kuri sukurs failą su plėtiniu .sql.gz:
system("gzip nom_de_la_base.sql")


## Per SSH komandinę eilutę

## Reikalavimai

- Reikia žinoti prisijungimo prie FTP saugyklos duomenis. Esame paruošę atskirą prisijungimo prie FTP saugyklos duomenų gavimo gidą: []({legacy}1374).

- Reikia turėti planą su įjungta SSH prieiga ([mūsų planų aprašymai](https://www.ovh.lt/svetainiu-talpinimas/)).


Prisijungimo per SSH gidas:


- [Prisijungimas per SSH](http://gidai.ovh.lt/SshTelnet).



## Duomenų bazės eksportavimas per SSH
Prisijunkite prie talpinimo plano per SSH.

Pereikite į katalogą, kuriame norite išsaugoti kopiją, ir įveskite komandą:

Bendrinis kodo pavyzdys: 


```
mysqldump --host=server_sql --user=database_name --password=your_password database_name > database_name.sql
```


Komandos pavyzdys su netikrais duomenimis: 


```
mysqldump --host=sql3 --user=testbackup --password=RtPgDsmL testbackup > testbackup.sql
```




## Naudojant Private SQL paslaugą
Naudojant Private SQL paslaugą, rekomenduojame vadovautis šiuo gidu:


- []({legacy}2023)




## Kitos atsarginės kopijos
Jeigu norite naudoti scenarijų ir parsisiųsti senesnę duomenų bazės kopiją, keiskite prievado numerį:

Dabartinės duomenų bazės = 3306
Vakarykštė kopija = 3307
Savaitės senumo kopija = 3317

Kodo pavyzdys:

PHP:

```
system("mysqldump --host=server_sql --user=database_name --password=your_password --port=3317 database_name > database_name.sql ");
```



- Čia aprašyti kopijavimo veiksmai tinka MySQL 5 ir naujesnėms versijoms.




## Klaida [i]Max_Allowed_Packet[/i] importuojant dump* failą
Kuriant dump* failą per PhpMyAdmin, rekomenduojama naudoti išsamesnio eksportavimo funkcijas.

Reikia išjungti veikimą, kuomet naudojama komanda INSERT INTO ir bandoma įterpti visa lentelė iškart. Importuojant dump* failą, ypač dideles duomenų bazes, kintamasis
Max_Allowed_Packet gali iššaukti klaidas.

Pavyzdžiui, jeigu lentelė A yra su 500 eilučių, vietoje INSERT INTO komandos panaudojimo vieną kartą ir bandymo įterpti 500 eilučių iškart, geriau yra naudoti 500 INSERT INTO komandų kiekvienai eilutei.

PhpMyAdmin sąsajoje:

Eksportuodami duomenų bazę per PhpMyAdmin, pažymėkite laukelį None of the above ir išvengsite Max_Allowed_Packet klaidų.

Per SSH:

Pridėkite parinktį --skip-extended-insert.

Parinktis --extended-insert, esanti parinkčių --opt rinkinyje (įjungtame pagal nutylėjimą), sugeneruoja tik vieną INSERT INTO komandą visai lentelei, todėl dažnai reikia išjungti šią parinktį su:


```
--skip-extended-insert
```



![](images/img_1965.jpg){.thumbnail}


## Leksika
dump: specialus duomenų bazės atsarginės kopijos failas. 

