---
title: 'Svetainių talpinimas: kaip redaguoti DNS zoną?'
excerpt: Kaip redaguoti DNS zoną
slug: svetainiu_talpinimas_kaip_redaguoti_dns_zona
legacy_guide_number: g1604
---


## Apibrėžimas
DNS (arba Domain Name System) suteikia domenui IP adresą, kad jūsų užklausos galėtų patekti į paskirties serverį.

![](images/img_3710.jpg){.thumbnail}


## Skirtumai - DNS serveriai/zona

## DNS serveriai

- DNS serveriai - tai serveriai, kurie buvo deklaruoti domenui. Taigi šie serveriai atsakys anksčiausiai, prieš pereinant prie susietos DNS zonos.



## DNS zona

- DNS zona - tai failas su įvairiais įrašais, nurodančiais, tarp visų kitų duomenų, jūsų svetainių talpinimo serverių adresus (A) ar jūsų el. laiškų serverių adresus (MX). Tai gali būti IP adresai arba mazgų (host) pavadinimai.




## Kodėl redaguojami DNS serveriai ar zona?

## DNS serveriai
Keičiant registratorių būtina pakeisti DNS serverius. Iš tiesų, tam tikri registratoriai neleidžia naudoti serverių po to, kai jūsų domenas buvo perkeltas kitur.
Keitimas taip pat būtinas, jeigu jūsų dedikuotas serveris bus naudojamas kaip DNS serveris jūsų domeno valdymui.

DNS serverių naudojimo gidas prieinamas čia:

- []({legacy}2015).



## DNS zona
Jeigu norite keisti svetainės talpinimo ar el. laiškų serverį po prieglobos paslaugų teikėjo keitimo, jums reikės pakeisti savo DNS zoną.
Atnaujinus DNS zoną, jūsų domenas nukreips į šiuos naujus serverius.


## Kam reikalingas pasklidimo laikas?

## TTL poveikis
TTL, arba galiojimo trukmė (Time To Live), nurodo laikotarpį, kurį duomenys turi būti saugomi spartinančiojoje atmintineje po keitimo.
OVH naujai sukurtoms DNS zonoms taikoma 1 valandos galiojimo trukmė (TTL = 3600).


## Prisijungimas prie valdymo sąsajos

- Prisijunkite prie [kliento paskyros](https://www.ovh.com/manager/web) su savo kliento ID ir slaptažodžiu.

- Spauskite Prisijungti norėdami patvirtinti šią operaciją.



![](images/img_3711.jpg){.thumbnail}


## Domeno pasirinkimas

- Kairiajame meniu pasirinkite Domenai ir jūsų domenas.



![](images/img_3712.jpg){.thumbnail}


## DNS zonos įrašai
Spauskite langelį DNS zona, jei norite peržiūrėti savo zoną.
Jūs taip pat galite peržiūrėti įvairius laukus, esančius jūsų zonoje.
Pagaliau galite paprastai filtruoti paskelbimą pagal lauko tipą.

![](images/img_3714.jpg){.thumbnail}


## Įrašo keitimas
Norėdami pakeisti įrašą, spauskite pieštuko piktogramą, atlikite keitimą, spauskite Toliau ir Patvirtinti.

![](images/img_3723.jpg){.thumbnail}


## Įrašo pašalinimas
Norėdami pašalinti įrašą, spauskite šiukšliadėžės piktogramą ir patvirtinti.

![](images/img_3724.jpg){.thumbnail}


## Konfigūracijos atkūrimas
Šis mygtukas jums leidžia atkurti DNS zoną, jei reikia atkurti visus laukus, nustatytus pagal nutylėjimą.

![](images/img_3715.jpg){.thumbnail}
Pažymėkite varnele pageidaujamą zonos tipą ir spauskite mygtuką Patvirtinti:


- Minimalūs įrašai: šis pasirinkimas jums pateiks zoną su pagrindiniais įrašais, reikalingais jūsų domeno veikimui. 

- Normalus atkūrimas: šis pasirinkimas jums pateiks papildomus įrašus, tokius kaip CNAME FTP ir t.t.



![](images/img_3716.jpg){.thumbnail}


## Įrašo pridėjimas
Šis mygtukas leidžia pridėti naują lauką jūsų DNS zonoje.

![](images/img_3717.jpg){.thumbnail}
Jums tereikia pasirinkti įrašo tipą ir vadovautis tolimesniais gidais spaudžiant Toliau.

![](images/img_3718.jpg){.thumbnail}


## Tekstinio režimo keitimas
Šis mygtukas leidžia redaguoti tekstinio režimo zoną pažangiam naudojimui.
Šis režimas naudingas patyrusiems naudotojams, norintiems greitai atlikti keitimus.

![](images/img_3719.jpg){.thumbnail}
Jums tereikia pakeisti tekstinę zoną ir patvirtinti.

![](images/img_3720.jpg){.thumbnail}


## TTL pagal nutylėjimą
Šis mygtukas leidžia keisti jūsų DNS zonos TTL (galiojimo trukmę), jei norite keisti įrašų saugojimo spartinančiojoje atmintinėje laiką.

![](images/img_3721.jpg){.thumbnail}
Jums tereikia pasirinkti galiojimo trukmę, kurią pageidaujate nustatyti pagal nutylėjimą, ir spausti Patvirtinti.

![](images/img_3722.jpg){.thumbnail}


## A tipo laukas
A tipo įrašas atitinka IPv4 adreso prieglobos serverio (host) pavadinimą.
Tam pačiam prieglobos serverio (host) pavadinimui neleidžiama naudoti A tipą ir CNAME.


## MX tipo laukas
MX įrašas atitinka el. pašto serverį, į kurį siunčiamos užklausos siekiant, kad el. laiškas pasiektų pasirinktą domeną.
Leidžiama nurodyti tik prieglobos serverio (host) pavadinimą, bet ne IP adresą.


## CNAME tipo laukas
CNAME įrašas skirtas sukurti prieglobos serverio (host) alias į kitą prieglobos serverį (host).
Leidžiama nurodyti tik prieglobos serverio (host) pavadinimą, bet ne IP adresą.
Tam pačiam prieglobos serverio (host) pavadinimui neleidžiama naudoti CNAME ir A tipą.


## TXT tipo laukas
TXT įrašas leidžia įterpti tekstą jūsų DNS zonoje.


## SPF tipo laukas
SPF įrašas leidžia deklaruoti serverius, iš kurių leidžiama siųsti el. laiškus su jūsų domenu.
Išsamesnė informacija pateikta šiame gide:

- []({legacy}2028).




## Zone Check
Šis įrankis leidžia įsitikinti, kad jūsų DNS serverių atnaujinimas bus atliktas sėkmingai. 
Išsamesnė informacija pateikta šiame gide:

- []({legacy}1980).




## DNSSEC
Ši parinktis leidžia apsaugoti jūsų domeną nuo Cache Poisoning.
Išsamesnė informacija pateikta šiame gide:

- []({legacy}609).




## SVARBU
DNS serveriai

- Visi DNS serverių keitimai gali įsigalioti tik po 48 val..

DNS zona
- Visi DNS zonos keitimai gali įsigalioti po 24 val..



