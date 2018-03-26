---
title: IP Failover konfigūravimas Windows sistemoje
excerpt: IP Failover konfigūravimas Windows sistemoje
slug: ip_failover_konfiguravimas_windows_sistemoje
legacy_guide_number: g2046
---


## 
Jeigu jums reikia konfigūruoti IP Failover savo virtualiose mašinose dėl bent vienos iš šių priežasčių:

- jūsų virtualioje mašinoje veikia kelios interneto svetainės;
- jūs talpinate tarptautinius projektus;

Jūs galite įsigyti arba importuoti IP Failover adresą Public Cloud virtualioms mašinoms.

Tačiau reikia žinoti, kad IP Failover adresai nebus automatiškai sukonfigūruoti jūsų virtualioje mašinoje.

Šiame gide paaiškinama, kaip konfigūruojama jūsų virtualios mašinos tinklo sąsaja, kad jūs galėtumėte pridėti IP Failover adresą.


## Reikalavimai

- [Virtuali mašina sukurta OVH valdymo sąsajoje]({legacy}1775)
- IP Failover adresas




## Sąsajos konfigūravimas
Windows nepriima IP Failover adreso konfigūracijos, papildančios pagrindidio IP adreso konfigūraciją per DHCP. Taigi reikės iš naujo sukonfigūruoti jūsų tinklo kortą su IP adresu, suteiktu rankiniu būdu.


- Sužinoti tinklo informaciją naudojant ipconfig:



![](images/img_3609.jpg){.thumbnail}

- Eikite į konfigūracijos valdymo sąsają, vėliau Network and Sharing Centre



![](images/img_3602.jpg){.thumbnail}

- Keisti kortos nustatymus:



![](images/img_3603.jpg){.thumbnail}

- Prieiga prie sąsajos ypatybių:



![](images/img_3604.jpg){.thumbnail}

- Prieiga prie TCP/IPv4 protokolo konfigūracijos



![](images/img_3605.jpg){.thumbnail}

- Pradėkite konfigūravimą rankiniu būdu naudodami konfigūraciją, panašią į žemiau parodytą, adaptuodami IP adresus pagal iš ipconfig gautus duomenis, po to spauskite Advanced:



![](images/img_3606.jpg){.thumbnail}

- Pridėkite savo IP Failover šia tvarka:



![](images/img_3607.jpg){.thumbnail}


## 

- [IP Failover perjungimas]({legacy}1890)




## 
[Grįžti į Cloud gidų sąrašą]({legacy}1785)

