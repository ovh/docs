---
deprecated: true
title: Antrinio DNS konfigūravimas
excerpt: Domeno konfigūravimas antriniame DNS
slug: antrinio_dns_konfiguravimas
section: DNS and DNS zone
order: 9
---


## 
Klientai, norintys sukonfigūruoti domeno DNS zoną savo serveryje, gali naudoti OVH suteiktą antrinį DNS serverį.

Antrinio DNS parinktį rasite OVH valdymo sąsajoje, serverio paslaugos skyriuje.

Matomas toks puslapis:

![](images/img_2008.jpg){.thumbnail}
Šiame puslapyje galima:

-Pamatyti jau sukonfigūruotus domenus antriniame DNS serveryje.
-Pridėti arba pašalinti domenus iš antrinio DNS.


## 1. Domeno pridėjimas
Norint pridėti domeną, spragtelėkite Pridėti domeną ir užpildykite formą:

![](images/img_2009.jpg){.thumbnail}

- "Domenas" lauke įveskite domeną.



![](images/img_2010.jpg){.thumbnail}
Užpildę laukus paspauskite Patvirtinti.

Įvykdžius komandą jūsų domenas atsiranda sąraše:

![](images/img_2011.jpg){.thumbnail}
Prie kiekvieno domeno rodoma ši informacija:


- DOMENAS: Antriniuose DNS serveriuose sukonfigūruotas domenas.
- SUKŪRIMO DATA: Data, kada buvo domenas pridėtas į antrinį DNS.
- IP: Domeno pirminio DNS serverio IP adresas.
- Antrinis DNS: Antrinio DNS, kuriame sukonfig8ruotas domenas, pavadinimas.


Gali būti paprašyta patvirtinti domeno nuosavybę. Tokiu atveju matysite tokį pranešimą:
Įtraukiant domeną į antrinį DNS įvyko klaida. (Pirmiausia turime įsitikinti, kad jūs esate domeno savininkas. Jūs turite savo domeno DNS zonoje sukurti įrašą su subdomenu "ownercheck", nurodant vertę: '339ea8d0'. Patvirtinę ir perkrovę zoną, pabandykite dar karą (jums nereikia laukti, kol pasklis DNS nustatymai).)
Tokiu atveju jums reikės pridėti TXT lauką į dabar galiojančią DNS zoną subdomenui ownercheck.domenas.com:


```
ownercheck TXT "339ea8d0"
```




## 2. Domeno šalinimas
Norint pašalinti domeno įrašą iš antrinio DNS pakanka paspausti Šiukšliadėžės piktogramą, esančią sukonfigūruoto domeno dešinėje.


## 
Šiame gide paaiškinta kaip:
-Pridėti domeną į antrinį DNS.
-Pašalinti domeną iš antrinio DNS.

