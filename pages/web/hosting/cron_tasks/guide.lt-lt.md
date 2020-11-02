---
deprecated: true
title: 'Svetainių talpinimas: Automatinės užduotys / Cron'
excerpt: 'Svetainių talpinimas: Automatinės užduotys / Cron'
id: '1990'
slug: svetainiu_talpinimas_automatines_uzduotys_cron
legacy_guide_number: g1990
---


## Automatinės užduoties kūrimas
Pasirinkite savo Svetainių talpinimo planą kairiajame stulpelyje, spauskite „Daugiau +“, po to Suplanuotos užduotys - Cron (2) ir Pridėti planavimą (3).

![](images/3261.png){.thumbnail}
Šiame pirmajame žingsnyje jūs turite nurodyti kelią iki savo skripto ir programavimo kalbos tipą.

Du kiti laukeliai yra neprivalomi žymėti. Sisteminiai įrašai el. paštu jums leis gauti Cron užduoties vykdymo įrašus iš anksto nustatytu arba jūsų pasirinktu el. paštu.


- Šis el. laiškas jums bus išsiųstas tik klaidos atveju.


Pagaliau jūs galite apibūdinti savo Cron užduotį.

![](images/3262.png){.thumbnail}
Antrajame žinsgnyje nustatomas jūsų Cron užduoties vykdymo periodiškumas.

![](images/3264.png){.thumbnail}
Jums siūlomas paprastas ir eksperto režimas.

![](images/3265.png){.thumbnail}
Atlikę savo Cron užduoties nustatymus, atsidarys santraukos langas.


- Jeigu duomenys tikslūs, patvirtinkite savo automatinės užduoties kūrimą.



![](images/3266.png){.thumbnail}
Matysite pranešimą apie tai, jog jūsų užklausa buvo priimta.

![](images/3267.png){.thumbnail}


## Automatinės užduoties keitimas
Pasirinkite savo Svetainių talpinimo planą kairiajame stulpelyje (1), po to spragtelėkite „Daugiau +“ ir pagaliau Suplanuotos užduotys - Cron (2). Spauskite pieštuko piktogramą (3), atitinkančią automatinę užduotį, kurią norite keisti.

![](images/3268.png){.thumbnail}
Šiame žingsnyje jūs galite keisti kelią arba programavimo kalbą, įjungti sisteminius įrašus el. paštu ir pridėti Cron užduoties apibūdinimą.

![](images/3269.png){.thumbnail}


## Automatinės užduoties trynimas
Pasirinkite savo Svetainių talpinimo planą kairiajame stulpelyje (1), po to spragetelėkite „Daugiau +“ ir pagaliau Suplanuotos užduotys - Cron (2). Spragtelėkite šiukšliadėžės piktogramą (3), atitinkančią automatinę užduotį, kurią norite ištrinti.

![](images/3270.png){.thumbnail}
Po to matysite automatinės užduoties, kurią norite ištrinti, santrauką. 
Patvirtinkite savo pasirinkimą, jei viskas teisingai.

![](images/3271.png){.thumbnail}


## Automatinės užduoties vykdymo testavimas interneto naršyklėje
Jūs galite testuoti savo skriptą tiesiai savo interneto naršyklėje, jei norite matyti galimas klaidas.

Pavyzdžiui, jeigu jūsų Cron yra www/cron.php kataloge ir jūsų domenas yra test.com, įveskite URL http://test.com/cron.php.
Siekiant užtikrinti optimalų testavimą, jūsų svetainių talpinimo plano PHP versija turėtų būti identiška versijai, kurią nurodėte automatinės užduoties kūrimo metu.
Klaidos aptikimo atveju, jūs turėtumėte pakeisti savo skriptą.

Klaidos nebuvimo atveju, patariame patikrinti sisteminius įrašus, susijusius su jūsų Cron užduočių vykdymu.


## Automatinės užduoties vykdymo įrašų peržiūra
Pasirinkite savo Svetainių talpinimo planą kairiajame stulpelyje ir spauskite langelį Daugiau +.

![](images/4012.png){.thumbnail}
Po to spauskite nuorodą Sisteminiai įrašai.

![](images/4013.png){.thumbnail}
Jeigu jūsų automatinė užduotis buvo įvykdyta dienos metu, šios užduoties vykdymo įrašus galėsite peržiūrėti „OVH Speed Log“ dalyje (1).

-> Jeigu užduotis buvo įvykdyta prieš daugiau nei 24 val., pasirinkite aktualaus mėnesio sisteminių įrašų failą (OVH pateiktame pavyzdyje, tai birželis).

![](images/3274.png){.thumbnail}
Automatinės užduoties vykdymo sisteminių įrašų pavyzdys:


```
[2015-06-04 10:39:03] ## OVH ## START - 2015-06-04 10:39:03.700912 executing: /usr/local/php5.6/bin/php /homez.600/loginftp/www/cron.php
[2015-06-04 10:39:03] Could not open input file: /homez.600/loginftp/www/cron.php
[2015-06-04 10:39:03]
[2015-06-04 10:39:03] ## OVH ## END - 2015-06-04 10:39:03.762685 exitcode: 1
```


Šiuo atveju, sisteminio įrašo eilutė nurodo, kad mano automatinė užduotis nebuvo įvykdyta teisingai, kadangi prieigos kelias iki skripto yra klaidingas ar neegzistuojantis:


```
Could not open input file: /homez.600/loginftp/www/cron.php
```




## Apribojimai

- Svetainių talpinimo plane neleidžiama nustatyti tikslaus laiko minutėmis, kada automatinė užduotis turi būti įvykdyta. Be to, automatinė užduotis gali būti vykdoma tik kartą per valandą. 

- Vykdymo laikas ribojamas iki 60 minučių.

- Nustatytas duomenų generavimo apribojimas: 5 MB (stdin/stderr).




## Automatinės užduotys su kintamaisiais
Nėra galimybės naudoti automatinės užduoties kelio su kintamaisiais 

Pavyzdžiui:

```
/www/cron.php?kintamasis=test
```



-  Tačiau jūs galite nustatyti šiuos kintamuosius savo skripte.




## Tikslių kelių naudojimas
Siekdami užtikrinti savo cron užduoties veikimą, savo skripte turite naudoti tikslų (visą), bet ne reliatyvų, kelią.
Norėdami sužinoti esamo kelio adresą galėsite naudoti _DIR_ konstantą:
[PHP dokumentai](http://php.net/manual/fr/language.constants.predefined.php)


## Vykdymo ataskaita
Per dieną siunčiamas tik vienas jūsų Cron vykdymo ataskaitos el. laiškas.


## Kreipimasis į kitą skriptą
Jeigu jūsų CRON užduoties naudojamas skriptas kreipiasi į kitus skriptus, jūs turėtumėte naudoti tikslų, bet ne reliatyvų, kelią, kad užklausa būtų sėkminga. Jūsų svetainių talpinimo plano tikslaus kelio pradžia:


```
/home/loginFTP/
```




## Vykdymo klaidos atveju
Jeigu jūsų suplanuota užduotis (Cron) yra klaidinga, ši užduotis bus išjungta po 10 bandymų ją įvykdyti.


## Sisteminių įrašų pavyzdys
Teisingas skripto vykdymas:

```
# OVH ## START - 2014-12-23 15:34:12.680711 executing: /homez.600/loginftp/test/run.sh
I am the client and I'm printing stuff with this nice 'echo' feature.

# OVH ## END - 2014-12-23 15:34:13.056472 exitcode: 0
```


Klaidingas skripto vykdymas, kadangi nepavyko rasti užklausto failo:

```
# OVH ## START - 2014-12-23 15:36:16.206693 executing: /homez.600/loginftp/test/idontexist.sh
# OVH ## ERROR command '/homez.600/loginftp/test/idontexist.sh' not found

# OVH ## END - 2014-12-23 15:36:16.546574 exitcode: 255
```


Klaidingas skripto vykdymas dėl timeout:

```
# OVH ## START - 2014-12-23 16:05:52.233058 executing: /homez.600/loginftp/test/sleep.sh
mardi 23 décembre 2014, 16:05:52 (UTC+0100)
Now sleeping 9000 sec

# OVH ## ERROR - CRON TASK INTERRUPTED BY OVH - reason: your script duration exceeded the maximum permitted (3600 seconds)
# OVH ## END - 2014-12-23 17:05:54.690413 exitcode: 0
```


Klaidingas skripto vykdymas dėl duomenų generavimo apribojimo viršijimo:

```
# OVH ## START - 2014-12-23 15:43:27.606083 executing: /homez.600/loginftp/test/echoer.sh
[...a lot of logs here...]
# OVH ## ERROR - CRON TASK INTERRUPTED BY OVH - reason: cron output (9288634 bytes) exceeds maximum permitted (5242880 bytes)
# OVH ## END - 2014-12-23 15:43:50.999934 exitcode: 255
```


Klaidingas skripto vykdymas dėl klaidos, susijusios su netinkamai panaudotomis teisėmis (chmod) ar netinkamu .ovhconfig failo konfigūravimu:

```
[2015-01-08 18:07:10]
[2015-01-08 18:07:10] ## OVH ## Your job could not be initiated for an unknown reason. Please contact customer support for more information.
[2015-01-08 18:07:10] ## OVH ## END - 2015-01-08 18:07:10.969840 exitcode: 255
```



