---
deprecated: true
title: Spartesnis failų siutimas į Object Storage
excerpt: Spartesnis failų siutimas į Object Storage
slug: spartesnis_failu_siutimas_i_object_storage
section: Object Storage
legacy_guide_number: g1951
---


## 
Siunčiant didelės apimties failus (pvz., vaizdo įrašus ar disko atvaizdus) į Object Storage, galima naudoti OpenStack Swift klientą, leidžiantį optimizuoti perkėlimą segmentuojant failus.
Šiame gide paaiškinama, kaip paspartinti failų siuntimą į Object Storage naudojantis šia funkcija.


## Reikalavimai

- [Paruošti aplinką OpenStack API naudojimui]({legacy}1851) su python-swiftclient klientu
- [Įkelti OpenStack aplinkos kintamuosius]({legacy}1852)




## 
OpenStack Swift leidžia saugoti failus be dydžio apribojimų juos suskirstant į daugybę segmentų.

Naudojant Swift klientą failo siuntimui, Swift proxy serveris nustato saugyklos mazgą naudodamas objekto pavadinimo vienakryptį šifravimą.

Todėl padidėja tikimybė, kad segmentai bus saugomi skirtinguose saugyklos mazguose, tai leis žymiai sparčiau įrašyti duomenis.

Taigi galime išsiųsti 10 GB - 100 GB dydžio failą 100 MB segmentais:


```
root@server:~$ swift upload --segment-size 104857600 --segment-threads 100
container_name 10Gio.dat
```


|Argument|Description|
|---|---|
|--segment-size|Segmentų dydis baitais|
|--segment-threads|Segmentų kiekis|


Siuntimo spartos matavimas galimas naudojant iftop ir panašias programas.


## 
[Grįžti į Cloud gidų sąrašą]({legacy}1785)

