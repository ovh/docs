---
title: Virtualios mašinos sustabdymas ar veikimo pertraukimas
excerpt: Kaip sustabdyti ar pertraukti virtualios mašinos veikimą Horizon sistemoje?
slug: virtualios_masinos_sustabdymas_ar_veikimo_pertraukimas
legacy_guide_number: g1781
---


## 
Konfigūruojant aukšto pasiekiamumo infrastruktūrą, jums gali prireikti nutraukti prieigą prie virtualių mašinų, kad atliktumėte įvairius testus.

OpenStack jums leidžia sustabdyti ar pristabdyti jūsų virtualią mašiną.

Sustabdymas suprantamas kaip jūsų virtualios mašinos užmigdymas, pristabdymas - tai virtualios mašinos veikimo pertraukimas.
Būsena „Sustabdyta“ taip pat bus naudojama apmokėjimo trikdžių atveju.
Šiame gide paaiškinama, kaip sustabdyti (hibernate) arba pertraukti/pristabdyti (pause) virtualios mašinos veikimą Horizon sąsajoje.

## Informacija
Šie veiksmai leidžia vykdyti virtualios mašinos apmokėjimą tol, kol virtuali mašina nepanaikinta.


## Reikalavimai

- [Sukurti prieigą prie Horizon]({legacy}1773)
- Virtuali mašina




## 
Virtualios mašinos sustabdymas:


- Prisijunkite prie Horizon
- Kairiajame meniu spragtelėkite Instances
- Iššokančiame virtualios mašinos meniu spragtelėkite Suspend instance.



![](images/img_2656.jpg){.thumbnail}

- Matysite virtualios mašinos stabdymo patvirtinimo langą.



## Informacija
Norėdami vėl paleisti virtualią mašiną, iššokančiame virtualios mašinos meniu spragtelėkite Relaunch instance.


## 
Virtualios mašinos veikimo pertraukimas:


- Prisijunkite prie Horizon
- Kairiajame meniu spragtelėkite Instances
- Iššokančiame virtualios mašinos meniu spragtelėkite Pause instance.



![](images/img_2656.jpg){.thumbnail}

- Matysite virtualios mašinos veikimo pertraukimo patvirtinimo langą.




## 
[Grįžti į Cloud gidus]({legacy}1785)

