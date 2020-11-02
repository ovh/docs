---
deprecated: true
title: Composer diegimas į svetainių talpinimo planą
excerpt: „Composer“ diegimas į svetainių talpinimo planą
id: '1894'
slug: composer_diegimas_i_svetainiu_talpinimo_plana
legacy_guide_number: g1894
---


## Reikalavimai
„Composer“ galima diegti į PRO ar galingesnį OVH svetainių talpinimo planą. Tai yra komandinės eilutės įrankis, todėl bus reikalinga SSH prieiga.


## Diegimas

## Prisijungimas per SSH
Įsitikinkite, kad naudojate naujausią PHP versiją (5.6). Tai galite patikrinti su komanda:


```
php --version
```


Jeigu naudojama kita versija, pakeiskite ją:


```
alias php='/usr/local/php5.6/bin/php'
```


Rekomenduojame likti šakniniame talpinimo kataloge, neperjungti jo į „Composer“.

## Parsiuntimas ir diegimas
Paleiskite šią komandą:


```
curl -sS https://getcomposer.org/installer | php
```


Viskas, „Composer“ įdiegta į talpinimo paslaugą!


## Naudojimo pavyzdžiai
Jeigu norite paprastai įdiegti Symfony 2, paleiskite šią komandą:


```
php composer.phar create-project symfony/framework-standard-edition projekto_pavadinimas "2.7.*"
```


Panašiai galite naudoti ir OVH API savo talpinimo paslaugoje, kartu su oficialiu susiejimu. Pakanka tiesiog pridėti failą composer.json, kuriame būtų visi reikalingi šaukiniai (dependencies). Pavyzdys su OVH API:


```
{
"name": "Pavyzdys",
"description": "OVH API naudojimo pavyzdys",
"require": {
"ovh/ovh": "1.1.*"
}
}
```


Diegimui pakaks pereiti į reikiamą katalogą ir paleisti komandą:


```
php composer.phar install
```


Daugiau informacijos, dokumentacijos ir kodų pavyzdžių rasite [github](https://github.com/ovh/php-ovh).

