---
title: IP Failover konfigūravimas CentOS sistemoje
excerpt: IP Failover konfigūravimas CentOS sistemoje
slug: ip_failover_konfiguravimas_centos_sistemoje
legacy_guide_number: g2044
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
vi /etc/sysconfig/network-scripts/ifcfg-ethX:Y
```



|Nustatymai|Vertės|
|---|---|
|X|pagrindinės sąsajos numeris (paprastai eth0)|
|Y|alias numeris (nuo 0 vėliau 1... priklausomai nuo konfigūruotinų ip adresų skaičiaus)|


Faile pridėti:

```
DEVICE="ethX:Y"
BOOTPROTO=static
IPADDR="xxx.xxx.xxx.xxx"
NETMASK="255.255.255.255"
BROADCAST="xxx.xxx.xxx.xxx"
ONBOOT=yes
```




## Tinklo paslaugos paleidimas iš naujo

- Iš naujo paleiskite tinklo paslaugas naudodami komandą:

```
ifup ethX:Y
```





## 

- [IP Failover perjungimas]({legacy}1890)




## 
[Grįžti į Cloud gidų sąrašą]({legacy}1785)

