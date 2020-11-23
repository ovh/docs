---
deprecated: true
title: 'Svetainių talpinimas: D.U.K. - Migravimas į naujausią PHP versiją'
excerpt: 'Svetainių talpinimas: D.U.K. - Migravimas į naujausią PHP versiją'
slug: svetainiu_talpinimas_duk_-_migravimas_i_naujausia_php_versija
legacy_guide_number: g1758
---


## Apie PHP
Kas yra PHP?

PHP - tai laisva programavimo kalba, naudojama dinaminėse interneto svetainėse.

Tai yra viena populiauriausių programavimo kalbų, kurią naudoja tokios turinio valdymo sistemos kaip Wordpress, Joomla, Drupal...
Kodėl OVH išjungia kai kurias PHP versijas?

Kaip ir visos programavimo kalbos, PHP vystosi. Naujos versijos siūlo naują funkcionalumą, ištaisomos klaidos... Senos versijos palaikomos tik tam tikrą laiką, po to nutraukiamas jų atnaujinimas.

Senos neprižiūrimos versijos gali būti pavojingos dėl galimų saugumo spragų. Dėl to OVH jas išjungs.
Kokia nauda vartotojui migruoti į naujesnę PHP versiją?

Migruodami į naujesnę PHP versiją sumažinate įsibrovimo į jūsų svetainę riziką ir galite pasinaudoti naujomis galimybėmis.

OVH taip pat siūlo nemokamą PHP-FPM optimizavimą, tai paspartins svetainę nuo 5.3 PHP versijos. Norėdami sužinoti daugiau spauskite [čia](http://www.ovh.lt/svetainiu-talpinimas/php-fpm-optimizavimas.xml).
Kurioms versijoms tai aktualu ir kurios versijos bus išjungtos?

Susijusios versijos yra:

|Versija|Oficialaus palaikymo pabaiga|Gyvenimo ciklo pabaiga + ...||4.X| 2008 m. rugpjūčio 7 d.|6 metai ir 8 mėn.|
|5.2|2011 m. sausio 6 d.|4 metai ir 3 mėnesiai|
|5.3|2014 m. rugpjūčio 14 d.|8 mėnesiai|


Šaltinis: http://php.net/eol.php

Šios versijos bus atjungtos nuo 2015 m. rugsėjo 24 d. Jūs galite stebėti darbus čia: [http://travaux.ovh.net/?do=details&id=12795](http://travaux.ovh.net/?do=details&id=12795)
Kokioms talpinimo paslaugoms tai aktualu?

Tai aktualu visoms Linux paremtoms talpinimo paslaugoms, išskyrus 60Free ir Demo1G.
Mano svetainė ar tam tikra jos dalis naudoja seną PHP versiją, ką daryti?

Svetainės ir CRON užduotys pagal nutylėjimą bus perjungtos į PHP 5.6.

Mes rekomenduojame išbandyti jūsų svetaines ir užduotis naudojant naujausias PHP versijas. Toliau paaiškinsime, kaip tai padaryti.
Kodėl OVH nemigruoja mano skriptų automatiškai?

Savo talpinimo plano PHP versiją galite keisti kliento sąsajoje. Kaip tai padaryti, skaitykite gide: []({legacy}1999)

Be to, visos svetainės yra unikalios, todėl OVH negali prisitaikyti prie kiekvieno kliento atskirai, kad galėtų automatiškai atlikti migraciją.


## 1 žingsnis: įsitikinkite, kad jūsų svetainė yra suderinama
A) Jeigu jūs naudojate TVS, pavyzdžiui, Wordpress, Joomla, Dotclear PHPBB ir pan., jūs pirmiausiai turite atnaujinti savo svetaines, pagal jų oficialius gidus:

- Wordpress: [https://codex.wordpress.org/Updating_WordPress](https://codex.wordpress.org/Updating_WordPress)
- Joomla: [https://docs.joomla.org/Portal:Upgrading_Versions](https://docs.joomla.org/Portal:Upgrading_Versions)
- Drupal: [https://www.drupal.org/node/1494290r](https://www.drupal.org/node/1494290)
- Prestashop: [url="http://doc.prestashop.com/display/PS15/Updating+PrestaShop"][blue][u]http://doc.prestashop.com/display/PS15/Updating+PrestaShop[/u][/blue][/url]
- ...


B) Jeigu jūs naudojate savo sprendimus, žiūrėkite oficialius PHP migravimo gidus: [http://php.net/manual/en/appendices.php](http://php.net/manual/en/appendices.php)

Jeigu jūs nesate svetainės kūrėjas, susisiekite su žiniatinklio agentūra.


## 2 žingsnis: iš karto nustatykite prieglobos PHP versiją.
Turite dvi galimybes
Pakeisti PHP versiją valdymo sąsajoje

Kaip tai atlikti, skaitykite gide []({legacy}1999)
Taip pat galite tai atlikti patys, sekdami šias instrukcijas:

Prisijunkite prie šakninio FTP katalogo. Jeigu reikia pagalbos jungiantis, skaitykite OVH paruoštą [gidą](https://www.ovh.lt/g1380.filezilla-naudojimas).


- Jeigu nerasite failo .ovhconfig, sukurkite jį. Naudodami tekstinį redaktorių, įrašykite jame šias 4 eilutes (pavyzdyje naudojama 5.6 PHP versija):


```
app.engine=php
app.engine.version=5.6
http.firewall=none
environment=production
```



Išsaugokite failą pavadinimu .ovhconfig ir įkelkite jį į šakninį svetainės talpinimo katalogą.


- Jeigu matysite, kad failas .ovhconfig egzistuoja, jį tikrinti ir redaguoti galite su paprastu teksto redaktoriumi (pvz., notepad).


Daugiau informacijos apie tai, kokius parametrus keisti, rasite [šiame gide](https://www.ovh.lt/g1207.php_nustatymai).


## Naudojimo atvejis
Kaip sužinoti, kurią PHP versiją mano svetainė naudoja?

Tiesiog atsisiųskite šią bylą: [info.php](https://www.ovh.com/fr/documents/info.php) (spragtelėkite dešiniuoju pelės mygtuku ir tuomet Save As).

Jeigu norite sukurti savo bylą, sukurkite tuščią bylą, įdėkite į ją  <?php phpinfo(); ?> ir išsaugokite ją .php formatu pavadindami 'info.php'.

Paskelbkite bylą per FTP įkėlę į šakninį katalogą ar kitos svetainės aplanką (jeigu tokios pridėtos kaip subdomenai). Pavyzdžiui: /www/mywordpress/

Tuomet naršyklėje atverkite šią bylą info.php. Pavyzdžiui: www.svetainė.tld/mywordpress/info.php

![](images/img_2601.jpg){.thumbnail}
OVH taip pat informavo klientus el. paštu apie naudojamas PHP versijas.
Naudoju subdomenus ar multidomenus, ar galiu naudoti skirtingas PHP versijas?

Taip, OVH leidžia naudoti skirtingas PHP versijas kiekvienam jūsų subdomenui ar multidomenui (multidomenas laikomas subdomenu).

Jums tereikia sukurti .ovhconfig failą svetainės šakniniame kataloge. Failas .ovhconfig įkraunamas tokiu būdu:


- Failas atveriamas užklausiamo domeno šakniniame kataloge. Pavyzdžiui, www.domenas.tld yra nukreipiamas į katalogą "/www", o beta.example.com į katalogą "/beta", failas /www/.ovhconfig yra naudojamas užklausai į http://www.domenas.tld/index.php, o failas "/beta/.ovhconfig" naudojamas užklausai į http://beta.domenas.tld/index.php.
- Jeigu nerandamas atskiras subdomeno failas .ovhconfig, tuomet naudojamas failas "/.ovhconfig".
- Jeigu tokios failo iš viso nėra, tuomet naudojama standartinė paslaugos konfigūracija (PHP 5.6 su FPM)


Aš turiu sukonfigūravęs .htaccess failą su PHP versija. Kas bus su šiuo failu?

Pagal nutylėjimą, svetainės naudos 5.6 PHP versiją. Jeigu norite naudoti naujesnę versiją (pavyzdžiui, 7.0), įjunkite ją naudodami .ovhconfig failą (įkeliamas per FTP).

Kiti .htaccess failo nustatymai, pavyzdžiui, URL rewriting, redirection, ir pan., veiks toliau.
Ar galiu naudoti 7 PHP versiją?

7 PHP versiją galima naudoti mūsų talpinimo planuose.
Man nepavyksta migruoti. Ką man daryti?

Mūsų pagalbos tarnyba negali migruoti jūsų svetainės už jus, tačiau galime padėti nustatyti kitą PHP versiją (naudojant .ovhconfig bylą). Tokiais atvejais pagalbos tarnyba nėra atsakinga už galimus sutrikimus.

