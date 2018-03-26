---
title: IP failover adreso perjungimas
excerpt: IP failover adreso perjungimas
slug: ip_failover_adreso_perjungimas
legacy_guide_number: g1890
---


## 
Šiame gide paaiškinama, kaip perjungti IP failover adresą nuo vienos virtualios mašinos į kitą. Tai gali būti naudinga turint daugiau veikiančių paslaugos kopijų, paprastai naudojama įvykus paslaugos sutrikimui:

- perjungiant į naujesnę svetainės versiją;
- perjungiant į svetainės kopiją, atliekant priežiūros darbus pagrindiniame serveryje.




## Reikalavimai

- Bent dvi veikiančios Public Cloud virtualios mašinos;
- Vienas IP failover adresas.




## 

- Pradžioje IP yra nukreiptas į 1 serverį, ir mes norime jį nukreipti į 2 serverį.



![](images/img_3815.jpg){.thumbnail}

- Paspauskite rodyklėlę žemyn, tuomet „Keisti susietą serverį“.



![](images/img_3816.jpg){.thumbnail}

- Pažymėkite reikiamą serverį.



![](images/img_3817.jpg){.thumbnail}

- Paspauskite „Pridėti“.


IP failover turi būti sukonfigūruotas antrame serveryje iš anksto ar po perjungimo. Jeigu IP yra sukonfigūruotas iš anksto, tuomet įvykus perjungimui, jis pradės iš karto veikti.


## 
[Grįžti į Cloud gidų turinį]({legacy}1785)

