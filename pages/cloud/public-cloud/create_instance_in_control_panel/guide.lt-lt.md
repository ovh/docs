---
title: Virtualios mašinos kūrimas OVH kliento valdymo sąsajoje
excerpt: Virtualios mašinos kūrimas OVH kliento valdymo sąsajoje
slug: virtualios_masinos_kurimas_ovh_kliento_valdymo_sasajoje
legacy_guide_number: g1775
---


## 
Public Cloud jums leidžia bet kuriuo metu greitai ir paprastai kurti virtualias mašinas (instances), vos keliais spragtelėjimais.

Šios virtualios mašinos panašios į naujausios kartos [OVH VPS](https://www.ovh.lt/vps/), tačiau gali atsakyti į kitus poreikius.

Pagrindiniai VPS ir Public Cloud skirtumai:

VPS:

- Paprasta valdymo sąsaja
- Daugiau dėmesio vienam virtualiam serveriui
- Platus distribucijų pasirinkimas.


Public Cloud virtuali mašina:

- Apmokėjimo pasirinkimas: mėnesinis, valandinis
- OpenStack API valdymo sąsaja
- Virtualios mašinos veikia kartu


Šiame gide paaiškinama, kaip sukurti virtualią mašiną OVH kliento sąsajoje.


## Reikalavimai

- Prisijungti prie [OVH kliento sąsajos](https://www.ovh.com/manager/cloud/)
- Sukonfigūruoti SSH raktą OVH valdymo sąsajoje pagal šį gidą: []({legacy}1769)




## Serverio pridėjimas

- Viršutiniame kairiajame kampe paspauskite mygtuką Add.



![](images/img_2707.jpg){.thumbnail}

- Pasirinkite Add a server



![](images/img_2708.jpg){.thumbnail}


## Pasirinkite serverio technines ypatybes

- Paspaudus modelio dešinėje parodomas naujas meniu:



![](images/img_2709.jpg){.thumbnail}
Tuomet galite pasirinkti virtualios mašinos tipą:

- VPS-SSD gama

|nuo 1 iki 2 vCores|nuo 2 GB iki 8 GB RAM|nuo 10 GB iki 40 GB disko vietos|



- CPU gama

|nuo 2 iki 32 vCores|nuo 7 GB iki 120 GB RAM|nuo 200 GB iki 1600 GB disko vietos|



- RAM gama

|nuo 2 iki 16 vCores|nuo 30 GB iki 240 GB RAM|nuo 200 GB iki 1600 GB disko vietos|




## Pasirinkite operacinę sistemą

- Pavyzdžiui Ubuntu 14.04



![](images/img_2710.jpg){.thumbnail}


## Duomenų centro regiono pasirinkimas

- Pavyzdžiui, Strasbūras



![](images/img_2711.jpg){.thumbnail}


## Pasirinkite SSH raktą, kurį naudosite

- Pavyzdžiui:



![](images/img_2712.jpg){.thumbnail}

## Informacija
Kuriant Windows virtualią mašiną, nebūtina konfigūruoti SSH rakto.


## Pavadinkite serverį ir paleiskite jį

- Įveskite virtualios mašinos pavadinimą
- Pasirinkite valandinį ar mėnesinį apmokėjimą



## Dėmesio:
Pasirinkdami mėnesinį apmokėjimą už virtualią mašiną, jūs įsipareigojate ją naudoti bent iki einamojo mėnesio pabaigos.

- Spragtelėkite Start now




## 
[Grįžti į Cloud gidų sąrašą]({legacy}1785)

