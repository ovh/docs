---
title: Horizon prieiga ir saugumas
description:  Prieigos ir saugumo gide nurodoma, kaip apsaugoti virtualias mašinas ir prieigą prie jų.
excerpt: Prieigos ir saugumo gide nurodoma, kaip apsaugoti virtualias mašinas ir prieigą prie jų.
slug: horizon_prieiga_ir_saugumas
legacy_guide_number: g1774
---


## 
OpenStack Horizon yra meniu, kuriame galima konfigūruoti prieigą prie Instances ir kitų paslaugų.

Pavyzdžiui, galima sukonfigūruoti saugumo grupes, kuriose galima filtruoti įeinančius ir išeinančius virtualios mašinos prisijungimus, taip pat galima parsisiųsti OpenRC failą, kuriame yra OpenStack API naudotojų duomenys.

Šiame gide apžvelgiama, ką rasite OpenStack Horizon meniu.


## Reikalavimai
[Prieigos prie Horizon kūrimas]({legacy}1773)


## 

- Prisijunkite prie [Horizon sąsajos](https://horizon.cloud.ovh.net/auth/login/)
- Spragtelėkite Access and Security


Matysite tris skiltis:

- Groups and Security: čia galėsite valdyti saugumo taisykles ir prieigą prie virtualių mašinų, taip pat blokuoti tam tikrus prievadus.



![](images/img_2630.jpg){.thumbnail}

- Key pairs: čia valdomi SSH raktai. Galima rinktis iš dviejų būdų:

|Create key pair|Įveskite raktų poros pavadinimą, serveris sugeneruos juos ir pasiūlys juos parsisiųsti|
|Import key pair|Importuokite savo turimą raktų porą|



- API Access: čia pateikiama API informacija, taip pat galima parsisiųsti openrc.sh failą, kuris leis naudoti OpenStack API.



![](images/img_2632.jpg){.thumbnail}


## 
[Grįžti į Cloud gidų sąrašą]({legacy}1785)

