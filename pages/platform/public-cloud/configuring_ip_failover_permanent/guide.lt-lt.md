---
title: Papildomo IP (Failover) priskyrimas ilgalaikiam naudojimui
excerpt: Papildomo IP (Failover) priskyrimas ilgalaikiam naudojimui
slug: papildomo_ip_failover_priskyrimas_ilgalaikiam_naudojimui
legacy_guide_number: g1885
---


## 
Jeigu planuojate VM naudoti ilgą laiką, patogu sukonfigūruoti papildomus IP adresus ilgalaikiam naudojimui, kad nereikėtų jų deklaruoti kiekvieną kartą po perkrovimo.

Šiame gide paaiškinama, kaip sukonfigūruoti papildomą IP visam laikui.


## Reikalavimai

- Turėti Public Cloud VM.
- Turėti į Public Cloud importuotą papildomą IP (Failover).
- Galėti jungtis prie VM per SSH.




## Debian / Ubuntu

- Redaguokite konfigūracinį failą:

```
vi /etc/network/interfaces
```



Failo pabaigoje įrašykite:

```
auto ethX:Y
iface ethX:Y inet static
address xxx.xxx.xxx.xxx
netmask 255.255.255.255
broadcast xxx.xxx.xxx.xxx
```


|Parametras|Reikšmė|
|---|---|
|X|Pagrindinės sąsajos numeris (paprastai eth0)|
|xxx.xxx.xxx.xxx|papildomas IP|
|Y|alias numeris (pradedama 0, po to 1 ir nuolat didinamas kiekvienam papildomam IP)|


Jeigu norite pridėti daugiau IP, pridėkite tas pačias eilutes, tik padidinkite Y reikšmę (alias numerį).

- Perkraukite tinklo paslaugą:

```
service networking restart
```





## CentOS / Fedora

- Redaguokite konfigūracinį failą:

```
vi /etc/sysconfig/network-scripts/ifcfg-ethX:Y
```


|Parametras|Reikšmė|
|---|---|
|X|Pagrindinės sąsajos numeris (paprastai eth0)|
|xxx.xxx.xxx.xxx|papildomas IP|
|Y|alias numeris (pradedama 0, po to 1 ir nuolat didinamas kiekvienam papildomam IP)|



- Failo pabaigoje įrašykite:

```
DEVICE="ethX:Y"
BOOTPROTO=static
IPADDR="xxx.xxx.xxx.xxx"
NETMASK="255.255.255.255"
BROADCAST="xxx.xxx.xxx.xxx"
ONBOOT=yes
```


- Perkraukite tinklo paslaugą:

```
ifup ethX:Y
```





## Windows
Windows nepriima papildomo IP adreso kartu su pagrindinio IP konfigūracija per DHCP.
Dėl to tinklo nustatymus reikės keisti patiems.


- Tinklo nustatymus matysite komandinėje eilutėje įvedę komandą ipconfig:



![](images/img_3545.jpg){.thumbnail}

- Po to atidarykite valdymo skydą ir tinklas ir bendras naudojimas.



![](images/img_3543.jpg){.thumbnail}

- Keisti tinklo kortos nustatymus:



![](images/img_3544.jpg){.thumbnail}

- Pereikite prie tinklo kortos nustatymų:



![](images/img_3546.jpg){.thumbnail}

- Atidarykite TCP/IPv4 protokolo konfigūravimą.



![](images/img_3547.jpg){.thumbnail}

- Pereikite prie rankinio konfigūravimo ir naudokite IP adreso parametrus, kurių pavyzdžius pateiksime toliau. Parametrus pritaikykite prie ipconfig pateiktos informacijos. Konfigūravimas prasidės spragtelėjus Advanced:



![](images/img_3548.jpg){.thumbnail}

- Pridėkite papildomą IP:



![](images/img_3551.jpg){.thumbnail}


## 

- [Papildomo (Failover) IP perkėlimas]({legacy}1890)




## 
[Grįžti į Cloud gidų sąrašą]({legacy}1785)

