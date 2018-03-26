---
title: Virtualios mašinos resursų keitimas
excerpt: Kaip pakeisti virtualios mašinos resursus Horizon sąsajoje.
slug: virtualios_masinos_resursu_keitimas
legacy_guide_number: g1778
---


## 
Suaktyvėjus veiklai ar atsiradus naujiems poreikiams, jūsų virtuali mašina gali nebeatlaikyti naujos apkrovos dėl resursų trūkumo. Tačiau naudojant Public Cloud galima padidinti virtualios mašinos resursus vos keliais spragtelėjimais.

Šiame gide paaiškinama, kaip jūs galite keisti savo virtualios mašinos parametrus OpenStack Horizon sąsajoje.

## Dėmesio:
Galimas parametrų keitimas tik į aukštesnį lygį.

Atlikus šį veiksmą virtuali mašina kurį laiką neveiks.


## Reikalavimai

- [Sukurti prieigą prie Horizon]({legacy}1773)
- Virtuali mašina




## Virtualios mašinos resursų keitimas
Norėdami keisti virtualios mašinos resursus:


- Prisijunkite prie Horizon
- Kairiajame meniu spragtelėkite Instances
- Iššokančiame meniu spragtelėkite Redimension Instance.



![](images/img_2718.jpg){.thumbnail}


## Resursų pasirinkimo langas
Šioje skiltyje matomi naudojami virtualios mašinos resursai ir galima nustatyti naujus.

![](images/img_2717.jpg){.thumbnail}

## Patarimas:
Galite tikrinti naudojamus resursus ir tuo pat metu matyti visus projektui paskirtus resursus.


## Pažangių nustatymų langas
Šioje skiltyje galite keisti disko skaidymą.

Disk partitioning: (Automatic arba Manual)

![](images/img_2652.jpg){.thumbnail}

- Spragtelėkite Redimension




## Disko keitimas Windows sistemoje
 Dėmesio 
Atliekant parametrų keitimus Windows virtualiai mašinai, skirsnio dydis neatnaujinamas automatiškai, todėl jį reikės išjungti naudojant Disko valdiklį:


- Paleisti disko valdiklį:



![](images/img_2980.jpg){.thumbnail}
Dešiniuoju pelės klavišu pažymėkite pagrindinį skirsnį

![](images/img_2981.jpg){.thumbnail}

- Išjungti pagrindinį skirsnį:



![](images/img_2978.jpg){.thumbnail}

- Patvirtinti disko praplėtimą:



![](images/img_2979.jpg){.thumbnail}


## 
[Grįžti į Cloud gidų sąrašą]({legacy}1785)

