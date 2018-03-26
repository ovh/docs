---
title: PHP konfigūravimas OVH svetainių talpinimo planuose (2014)
excerpt: Šiame gide pateikiama informacija, kaip OVH svetainių talpinimo planuose konfigūruoti PHP nustatymus
slug: php_konfiguravimas_ovh_svetainiu_talpinimo_planuose_2014
legacy_guide_number: g1207
---


## Kaip pasirinkti PHP versiją?

## Jūsų valdymo sąsajoje
Šiame gide paaiškinsime, kaip įjungti PHP FPM ir nustatyti PHP versiją naudojant .ovhconfig failą. Jei norite, visa tai galite atlikti paprasčiau savo valdymo sąsajoje pagal šias instrukcijas: []({legacy}1999)
Jei konfigūruojate PHP naudojant .ovhconfig failą rankiniu dūdu, jums tereikia įkelti .ovhconfig failą į savo disko vietos šakninį katalogą, per FTP.

Jei naudosite PHP 5.6, šiame .ovhconfig faile turi būti kodas:


```
app.engine=php
app.engine.version=5.6
http.firewall=none
environment=production
```




## Kokios PHP versijos prieinamos?
Jūs galite naudoti šias PHP versijas:

- PHP 7.0
- PHP 5.6 (versija pagal nutylėjimą)
- PHP 5.5  (greitai bus nenaudojama, nerekomenduojama)
- PHP 5.4  (nepalaikoma)
- PHP 5.3 (nepalaikoma) 


NB: Ankstesnės versijos, kurių kūrėjas nepalaiko, pamažu šalinamos iš talpinimo planų. Mes atnaujiname PHP versijas, kai nutraukiamas senosios palaikymas. Todėl rekomenduojame reguliariai atnaujinti savo svetaines.
Versijų atnaujinimo darbų planavimą ir vykdymą galite stebėti mūsų darbų svetainėje.

Dėmesio: kai tik įkelsite failą .ovhconfig, pradės veikti prie app.engine.version nurodyta PHP versija. Failo .htaccess konfigūracija, pvz., SetEnv PHP_VER... nebeveiks.


## Įkėlus .ovhconfig failą matoma klaida "Not Implemented"
Ši klaida reiškia, kad .ovhconfig faile nurodyta versija ar variklis neegzistuoja. 

Siūlome taip pat patikrinti savo svetainės error.log, kad gautumėte daugiau informacijos apie šią klaidą.


## Ką reiškia environment direktyva?
Ši direktyva leidžia kešuoti statinius failus ir PHP klaidas.

development režime:

- Netaikomas failų įkėlimas į spartinančiąją atmintinę;
- PHP klaidos matomos svetainėje (display_errors=On).

production režime: (parinktis pagal nutylėjimą)
- Statiniai failai, pvz., paveikslėliai, vaizdo įrašai ar garso įrašai turi ilgesnį galiojimo laiką, todėl šie failai ilgiau saugomi spartinančioje naršyklių atmintinėje;
- PHP klaidos nematomos svetainėje (display_errors=Off).




## Ką reiškia http.firewall direktyva?
Ši direktyva leidžia taikyti mod_security tipo ugniasienę. Norėdami tai įjungti, nustatykite: security.
Pagal nutylėjimą http.firewall nustatymas yra none.


## .ovhconfig failas
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
; php options .htaccess (like php version) are ignored
; phpcgi:
; IMPORTANT this is a fallback or previous system
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
; you can override it changing expiration explicitly or in your .htaccess
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




## Kokios PHP versijos prieinamos?
Jeigu naudojate svetainę su TVS (WordPress, Joomla, PrestaShop ir pan.), visą naudingą informaciją rasite oficialioje kūrėjo svetainėje. 

Jeigu TVS yra palaikoma kūrėjo ir atnaujinimai nuolatos diegiami, PHP versijų kaita neturi turėti įtakos svetainės veikimui. Dauguma TVS yra su integruotais atnaujinimo įrankiais, kurie leidžia paprastai ir greitai atnaujinti svetainę. Kai kurie įrankiai sukurti TVS kūrėjų, pvz., WordPress toks įrankis naudojamas nuo 3.7 versijos, t.y. nuo 2013 metų pabaigos.

Jeigu patys kuriate savo svetainę ar kitą asmeninį sprendimą, nustatykite, kokia PHP versija reikalinga.

Šis nesuderinamumų tarp PHP versijų sąrašas taip pat gali būti naudingas:

 > iš PHP 4 į PHP 5: http://www.php.net/manual/en/migration5.incompatible.php
 > iš PHP 5.1 į PHP 5.2: http://www.php.net/manual/en/migration52.incompatible.php
 > iš PHP 5.2 į PHP 5.3: http://www.php.net/manual/en/migration53.incompatible.php
 > iš PHP 5.3 į PHP 5.4: http://www.php.net/manual/en/migration54.incompatible.php
 > iš PHP 5.4 į PHP 5.5: http://www.php.net/manual/en/migration55.incompatible.php
 > iš PHP 5.5 į PHP 5.6: http://www.php.net/manual/en/migration56.incompatible.php
 > iš PHP 5.6 į PHP 7.0: http://php.net/manual/fr/migration70.deprecated.php


## Kaip pasirinkti PHP versiją?
Kai nustatysite, kokia PHP versija reikalinga, nurodykite ją savo svetainių talpinimo plano .ovhconfig faile, kaip nurodyta aukščiau šiame gide. 

Jeigu norite išbandyti nustatymus, perjunkite talpinimą į developpement režimą, kad matytumėte ir galėtumėte ištaisyti klaidas.

Perjungimas atliekamas .ovhconfig faile pakeičiant environment parametrą iš production į development.


## Kur išsaugoti .ovhconfig failą?

## Jūs talpinate vieną svetainę.
Dažniausiai klientai svetainių prieglobos paslaugoje talpina po vieną svetainę.

Kaip sukurti ir keisti .ovhconfig bylą yra aprašyta šiame gide: []({legacy}1999)

Tačiau, jeigu jūs vis dėl to norite rankiniu būdu įdiegti bylą .ovhconfig, jūs turite įrašyti ją į jūsų talpinimo paslaugos šakninį katalogą ("/"), kaip parodyta iliustracijoje.


- visi pokatalogiai naudos šios bylos parametrus.



![](images/img_3764.jpg){.thumbnail}

## Jūs įdiegėte kelias svetaines, kurioms tinka vienodi nustatymai.
Tuomet jums tinka ankstesnė pastraipa.


- Šakniniame kataloge esančios .ovhconfig bylos nustatymai galioja visoms svetainėms.



## Jūs turite kelias svetaines, kurioms yra būtini skirtingi nustatymai.
Galima pasirinkti skirtingas PHP versijas kiekvienai svetainei atskirai. Tam reikia į kiekvienos svetainės pagrindinį katalogą įrašyti atskirą bylą .ovhconfig.

Jeigu jokia byla nėra įrašoma į pagrindinį svetainės katalogą, tuomet galioja nustatymai aprašyti .ovhconfig byloje, esančioje šakniniame prieglobos kataloge.

 Tačiau yra nerekomenduojama naudoti skirtingas aplinkas toje pačioje priegloboje skirtingose .ovhconfig bylose. Tai gali sukelti cache nesuderinamumo klaidas. Geriausia skirtingas svetaines talpinti atskirose paslaugose.

