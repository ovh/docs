---
deprecated: true
title: Interneto svetainių talpinimas kaip diagnozuoti tuščią puslapį?
excerpt: Šiame gide pateikiami patarimai, kaip diagnozuoti jūsų interneto svetainėje pasirodantį tuščią puslapį
slug: interneto_svetainiu_talpinimas_kaip_diagnozuoti_tuscia_puslapi
legacy_guide_number: g1562
---


## Bendra informacija
Kodėl savo interneto svetainėje matau tuščią puslapį?

Kitaip nei galima pagalvoti, tuščias puslapis turi savo naudą. 


- Jis leidžia paslėpti klaidas, kurias generuoja jūsų interneto svetainė. Taip pat išvengiamas svarbios informacijos atskleidimas programišiams apie jūsų interneto svetainę.

Kaip ištaisyti tuščią puslapį?

- Kaip jau paaiškinome, tuščias puslapis skirtas jūsų interneto svetainės klaidoms paslėpti. Taigi visų pirma reikia paskelbti klaidas, kad paskui jas galėtumėte ištaisyti.  

- Pasistenkite prisiminti, kada pasirodė tuščias puslapis: ar tai susiję su įskiepio ar temos diegimu ar atnaujinimu, ar jūsų interneto svetainės atnaujinimu.




## PHP klaidų įjungimas
Savo interneto svetainės failuose įrašykite šią kodo eilutę:


```
ini_set('display_errors',1);
```


Paprastai šią eilutę naudinga pridėti prie failo index.php, arba prie jūsų interneto svetainės dažnai užklausiamo failo, pvz., interneto svetainės konfigūravimo failo.

Dėmesio: ši komandinė eilutė turi būti pridėta prie PHP atidarymo žymės:


```
<?php
```


Taip jūsų interneto svetainė paskelbs taisytiną klaidą, o tuščias puslapis nebebus matomas.

## .ovhconfig plėtojimo režimas (development mode)
Kitas dalykas, kurį reikia įgyvendinti, siekiant teisingai paskelbti klaidas: 


- Perjunkite failą .ovhconfig į plėtojimo režimą (development mode):


Šiame faile .ovhconfig turi būti nurodytas šis kodas:


```
app.engine=php 
app.engine.version=5.4 
http.firewall=none 
environment=development
```


Gidas apie phpfpm įdiegimą prieinamas čia: []({legacy}1175)

![](images/img_2159.jpg){.thumbnail}
Patarimas


- Jeigu jūsų interneto svetainėje įdiegtas WordPress, pakeiskite komandinę eilutę define('WP_DEBUG', false); vietoje kintamojo false nurodydami true, esantį wp-config.php faile.




## Patikrinkite su spartinančiąja atmintine susijusias klaidas
Norėdami patikrinti, ar tuščias puslapis vis dar matomas, nenaudojant serverio spartinančiosios atmintinės: 


- Savo interneto svetainės url adreso pabaigoje pridėkite prieigą per specialų prievadą:82

Pavyzdžiui: http://jusu-svetaine.lt:82


Taip galėsite tiesiogiai kreiptis į svetainę klasteryje, nenaudojant Geocache funkcijos.

Jūs galite tai atlikti su prievadais nuo 81 iki 85.

![](images/img_2160.jpg){.thumbnail}


## Firebug naudojimas - Klaida 429 - 500 – 200

## Bendra informacija
Mes rekomenduojame naudoti FireBug, jei reikia papildomos informacijos apie pasirodžiusį tuščią puslapį.

## Klaida 429
Net jeigu matysite tuščią puslapį, FireBug leis aptikti įdomias klaidas.

Pavyzdžiui: patikrinkite, ar klaida 429 teberodoma tinklo langelyje.

Klaida 429 nurodo, kad jūsų interneto svetainė gavo itin daug užklausų.  


- Problemą galėsite išspręsti aktyvavus phpfpm:

phpfpm diegimo gidas pateiktas čia: []({legacy}1175).

Šiuo metu, klaida matoma tiesiogiai jūsų interneto svetainėje per OVH generuojamą informacinį puslapį, žr. priešais esantį langelį

- Jeigu PHP-FPM aktyvavimas problemos neišsprendžia, jūs taip pat galite numatyti galingesnį pasiūlymą.



![](images/img_2158.jpg){.thumbnail}

## Klaida 500
Interneto svetainėje matomas tuščias puslapis. 

Po FireBug naudojimo šiame puslapyje matome 500 klaidą tinklo dalyje.  

Tokiu atveju, neįmanoma identifikuoti problemos priežasties, jūs turėtumėte aktyvuoti klaidas kaip jau [paaiškinome](#diagnostique_applicable_activer_les_erreurs_php).

Vėliau jums reikės ištaisyti atsiradusią klaidą.

![](images/img_2161.jpg){.thumbnail}

## Atsakas 200 ok
Interneto svetainėje matomas tuščias puslapis.

Po FireBug naudojimo šiame puslapyje, matome atsaką 200 OK tinklo dalyje.

Atsakas 200 ok iš tiesų nėra klaidos pranešimas. 

Šis atsakas nurodo, kad puslapis buvo įkeltas teisingai, tačiau matomas tuščias puslapis.


- Šiuo atveju, klaidos pranešimų aktyvavimas nenaudingas, kadangi nerasta jokia klaida.  

Taigi reikės atlikti interneto svetainės klaidų aptikimą ir taisymą neturint prieigos prie klaidų pranešimų.
Šis atvejis dažniau aptinkamas svetainėse su WordPress .


![](images/img_2162.jpg){.thumbnail}

