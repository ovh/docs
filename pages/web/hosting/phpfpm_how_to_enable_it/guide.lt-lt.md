---
deprecated: true
title: Svetainių talpinimo paslaugos PHP optimizavimas
excerpt: Remdamiesi šiuo gidu jūs galite sukonfigūruoti PHP-FPM savo svetainių talpinimo paslaugoje. Ši funkcija paspartins PHP veikimą
slug: svetainiu_talpinimo_paslaugos_php_optimizavimas
legacy_guide_number: g1175
---


## Kas yra PHP-FPM?
Mes pritaikėme PHP-FPM optimizavimą mūsų Web infrastruktūroje, todėl jūs galite paspartinti PHP veikimą.

Atliekamas kompiliavimas su opcode-caching, įkeliant kodą į spartinančiąją atmintinę, o tai trumpina PHP kodo nuskaitymo ir vykdymo laiką.

Testai parodė, kad sparta padidėja iki 7 kartų, lyginant su senesniais mechanizmais.

## Jūsų valdymo sąsajoje
Šiame gide paaiškinsime, kaip įjungti PHP FPM ir nustatyti PHP versiją naudojant .ovhconfig failą. Jei norite, jūs galite visa tai atlikti tiesiai savo valdymo sąsajoje kaip aprašyta gide: []({legacy}1999)

Dėmesio: nuo PHP-FPM, ir dėl saugumo priežasčių, šios parinktys yra išjungtos (nepalaikomos PHP):


```
register_globals
magic_quotes_gpc
```



Dėl magic_quote_gpc:


- Be PHP-FPM:


PHP 5.4: magic_quotes_gpc išjungtas


- Su PHP-FPM:


PHP 5.4: magic_quotes_gpc išjungtas
PHP 5.5: magic_quotes_gpc išjungtas

## Dėmesio:
Patariame naudoti naujausias PHP versijas (5.5 ar 5.6), kadangi senesnės versijos nebepalaikomos kūrėjų ir gali būti su saugumo spragomis.


## Kaip aktyvuoti PHP-FPM?
Jums tereikia įkelti .ovhconfig į savo disko vietos šakninį katalogą, per FTP.

DĖMESIO: .ovhconfig failas yra suteiktas pagal nutylėjimą visuose 2014 m. svetainių talpinimo planuose. Jei naudojatės ankstesniais svetainių talpinimo planais, jums reikės sukurti ir įkelti šį failą į savo disko vietos šakninį katalogą. Failas nepridėdas automatiškai ankstesniems planams ir tuo atveju, jei keičiamas talpinimo planas, kadangi tam tikri nustatymai gali būti nesuderinami su naudojama PHP versija.

NB: .ovhconfig failas negali būti įkeltas į šakninį kalatalogą ar pirmojo lygio katalogą, nėra galimybės naudoti kelių failų, jei norite, kad tame pačiame svetainių talpinimo plane būtų naudojamos skirtingos PHP konfigūracijos (išskyrus atvejį, jei [ teisingai paskelbtas multi-domenas](https://www.ovh.lt/g1332.multi-domeno_diegimas)).

Faile .ovhconfig turi būti kodas:


```
app.engine=php
app.engine.version=5.6
http.firewall=none
environment=production
```


Jeigu PHP-FPM neveikia, bus naudojamas ankstesnis PHP variklis kaip atsarginis.


## Kokios galimos PHP versijos?
Jūs galite naudoti PHP versijas:

- PHP 7.0
- PHP 5.6 (versija pagal nutylėjimą)
- PHP 5.5  (greitai bus nenaudojama, nerekomenduojama)
- PHP 5.4  (nepalaikoma)
- PHP 5.3 (nepalaikoma) 

- ionCube taip pat prieinamas

Dėmesio: įkėlus .ovhconfig, naudojamą PHP versiją apibrėžia app.engine.version, todėl jūsų .htaccess direktyvos tokios kaip SetEnv PHP_VER ... ignoruojamos



## Aš sukūriau savo .ovhconfig ir gaunu klaidą "Not Implemented"
Vadinasi, tam tikras variklis ar versija jūsų .ovhconfig neegzistuoja.

Rekomenduojame patikrinti jūsų interneto svetainės error.log, jeigu norite sužinoti daugiau apie klaidą.


## Ką reiškia environment direktyva?
Development aplinka leidžia patikslinti statinių failų spartinančiąją atmintinę bei PHP klaidas:


- netaikoma jokia spartinančioji atmintinė; 
- PHP įrašai matomi jūsų interneto svetainėje (display_errors=On).

Production aplinkoje: (parinktis pagal nutylėjimą)

- statinių failų (nuotraukų, vaizdo ir garso įrašų) galiojimo trukmė ilgesnė, todėl paieškos naršyklėse šių failų įkėlimas į spartinančiąją atmintinę užtrunka ilgiau;
- PHP įrašai nematomi jūsų interneto svetainėje (display_errors=Off).




## Ką reiškia http.firewall direktyva?
Ši direktyva jums leidžia aktyvuoti mod_security taikomąją ugniasienę, šiam tikslui nurodykite security

http.firewall pagal nutylėjimą none


## Ar su PHP-FPM suteikiamas IonCube?
Taip, IonCube nuo šiol prieinamas su versijomis

- 5.6
- 5.5
- 5.4


Šis sprendimas galimas tik tokiu atveju, jei naudojamas IonCube kodavimas jūsų PHP skriptams šifruoti, kad jie galėtų veikti jūsų svetainių talpinimo plane. Daugiau informacijos rasite IonCube D.U.K.: [FAQ IonCube](http://www.ioncube.com/faq.php)


## Kaip išjungti PHP-FPM?
Jums tereikia įkelti į savo .ovhconfig:


```
app.engine=phpcgi
app.engine.version=AUTO
```




## Išsamiau apie .ovhconfig
config failo aplikacijos detali informacija:


```
; ovhconfig
;
; this file must be placed in $HOME/.ovhconfig or in $DOCUMENT_ROOT/.ovhconfig

; __app.engine__
;
; values: php (php engine + opcache accelerator)
; notice: if php, a phpcgi engine will be activated as fallback (if previous engine crash)
;
; php:
; IMPORTANT: register_globals and magic_quotes_gpc are off for security
; php optiones .htaccess (like php version) are ignored
; phpcgi:
; IMPORTANT this is a fallback to previous system
; in this case __app.engine.version__ will be considerated as AUTO and php version will be old system
; (meaning depending .htaccess or .phpX extension)
;
app.engine=php

; __app.engine.version__ specify version of your engine
;
; for php:
; default: 5.6
; for phpcgi:
; this options is ignored (= fallback in AUTO)
;
app.engine.version=5.6

; __http.firewall__ used to add application firewall (filter http requests)
;
; values: none | security
; default: none
;
http.firewall=none

; __environment__
;
; values: production | development
;
; production:
; apache will maximise local cache
; mod_expires will grow up TTL of js, css, pdf, images, video, audio
; you can override it changing expiration explicitly in your .htaccess
; feel free to look on our guide.
; development:
; no expiration is added, files are not locally in cache,
; will speed up tests but decrease performances
;
; choosen environment will also be available in your variable ENVIRONMENT unix env
;
; default: production
;
environment=development
```



