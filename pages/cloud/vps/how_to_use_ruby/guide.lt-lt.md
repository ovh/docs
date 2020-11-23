---
deprecated: true
title: How to Ruby
excerpt: Bendrai apie Ruby paketą
slug: how_to_ruby
legacy_guide_number: g1370
hidden: true
---


## 
Ruošdami Ruby paketą stengėmės kaip įmanoma mažiau nutolti nuo konfigūracijos pagal nutylėjimą. Dėl to galėsite laisvai personalizuoti savo VPS.
Įdiegėme būtinus paketus (dependancies), kad galėtumėte diegti/kompiliuoti rubygems ir naudoti RubyOnRails.

VPS komponentų sąrašas:

- Debian Wheezy
- rbenv (galėsite naudoti norimą ruby versiją)
- Passenger (Apache ar Nginx)
- Duomenų bazės (MySQL, PostgreSQL ar MongoDB)




## 
root: naudojama serverio administravimui (atnaujinimams, duomenų bazių kūrimui ir t.t.). 
webmaster: naudojama programų valdymui (ruby diegimui, programų rašymui ir t.t.).


## 
Norima ruby versija bus diegiama per rbenv, naudojant "webmaster" naudotoją ir Passenger. Likusi sistema naudos Debian Wheezy (gido rašymo metu: 1.9.3p194) ruby paketą.

Norėdami pakeisti ruby versiją, prisijunkite kaip webmaster ir įveskite komandas:

```
rbenv update (rbenv iš papildinių atnaujinimas)
rbenv install --list (visos galimos ruby versijos)
rbenv install <version>
rbenv global <version>
```




## 
Passenger diegiamas iš oficialių Phusion šaltinių. Todėl visada turėsite naujausią Phusion Passenger versiją. Be to, Passenger naudoją tą pačią ruby versiją, kaip ir vartotojas "webmaster".

VPS suteikiamas su virtualHost, kuris atitinka serverio pavadinimą (vpsXXXXX.ovh.net).
Galite jį naudoti savo aplikacijoms, jas kelkite į /var/www/vpsXXXXX.ovh.net
Jeigu norite įkelti daugiau aplikacijų, galite šį VirtualHost nukopijuoti ar pervadinti.

Passenger atminties naudojimo tikrinimas:

```
passenger-status (root)
passenger-memory-stats (root)
```




## 
Konfigūracinis failas yra /etc/apache2/sites-enabled/vpsXXXXX.ovh.net.
Serverio perkrovimas: 
```
service apache2 restart (root)
```

Tik aplikacijos perkrovimas: 
```
touch /var/www/vpsXXXXX.ovh.net/tmp/restart.txt (webmaster)
```


Išsami Passenger dokumentacija: [Passenger](http://www.modrails.com/documentation/Users%20guide%20Apache.html)


## 
Konfigūracinis failas yra /etc/nginx/sites-enabled/vpsXXXXX.ovh.net

Serverio perkrovimas: 
```
service nginx restart (root)
```

Tik aplikacijos perkrovimas: 
```
touch /var/www/vpsXXXXX.ovh.net/tmp/restart.txt (webmaster)
```


Išsami Passenger dokumentacija: [Passenger](http://www.modrails.com/documentation/Users%20guide%20Nginx.html)


## 
Duomenų bazės diegiamos su numatytaisiais parametrais ir sukonfigūruojamos taip, kad prie jų būtų galima jungtis tik iš VPS serverio.

