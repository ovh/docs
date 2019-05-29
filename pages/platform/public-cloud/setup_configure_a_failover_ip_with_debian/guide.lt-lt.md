---
title: IP Failover konfigūravimas Debian sistemoje
excerpt: IP Failover konfigūravimas Debian sistemoje
slug: ip_failover_konfiguravimas_debian_sistemoje
legacy_guide_number: g2042
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

- Konfigūracinis failas redaguojamas naudojant komandą:

```
vi /etc/network/interfaces
```


- Failo pabaigoje pridėti:

```
auto ethX:Y
iface ethX:Y inet static
address xxx.xxx.xxx.xxx
netmask 255.255.255.255
broadcast xxx.xxx.xxx.xxx
```



|Nustatymai|Vertės|
|---|---|
|X|pagrindinės sąsajos numeris (paprastai eth0)|
|xxx.xxx.xxx.xxx|konfigūruotinas IP failover adresas|
|Y|alias numeris (nuo 0 vėliau 1... priklausomai nuo konfigūruotinų ip adresų skaičiaus)|


Jei reikia pridėti keletą IP adresų, visada reikia pridėti tose pačiose eilutėse:
didinant Y vertę (alias numeris).


## Tinklo paslaugos paleidimas iš naujo

- Iš naujo paleiskite tinklo paslaugas naudodami komandą:

```
service networking restart
```





## 

- [IP Failover perjungimas]({legacy}1890)




## 
[Grįžti į Cloud gidų sąrašą]({legacy}1785)

