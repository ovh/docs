---
title: 'FailOver IP -osoitteen konfigurointi CentOS:ssa'
excerpt: 'FailOver IP -osoitteen konfigurointi CentOS:ssa'
slug: failover_ip_-osoitteen_konfigurointi_centosssa
legacy_guide_number: g2044
---


## 
Sinun täytyy konfiguroida FailOver-osoite instanssillesi esimerkiksi seuraavien syiden takia:

- Sinulla on sivusto joka kerää paljon liikennettä.
- Instanssillasi isännöidään monta eri sivustoa, jotka yhdessä tuottavat paljon liikennettä.
- Isännöit kansainvälisiä projekteja.


FailOver IP -osoitteita ei konfiguroida automaattisesti instanssillesi.

Seuraamalla tätä ohjetta, voit asentaa ylimääräisen instanssillesi lisäverkkoliitännän ja lisäverkkoliitännälle FailOver IP -osoitteen.


## Edellytykset

- [Varmista että olet käynnistänyt pilvi-instanssin OVH:n hallintapaneelista.]({legacy}1775)
- Sinulla täytyy olla FailOver IP -osoite.




## Verkkoliitännän konfigurointi

- Muokkaa konfiguraatiotiedostoa nano-tekstieditorilla, seuraavalla komennolla:

```
nano /etc/sysconfig/network-scripts/ifcfg-ethX:Y
```



|#Muuttujat|#Arvot|
|X|pääasiallinen verkkoliitäntä (yleensä eth0, distribuutiosta riippuen)|
|xxx.xxx.xxx.xxx|konfiguroitava FailOver IP|
|Y|toissijainen verkkoliitäntä (aloitusarvo on 0, jonka jälkeen 1, jne. konfiguroitavien IP-osoitteiden lukumäärästä riippuen)|

- Syötä seuraavat rivit tiedoston loppuun:

```
auto ethX:Y
iface ethX:Y inet static
address xxx.xxx.xxx.xxx
netmask 255.255.255.255
broadcast xxx.xxx.xxx.xxx
```



|#Muuttujat|#Arvot|
|X|pääasiallinen verkkoliitäntä (yleensä eth0, distribuutiosta riippuen)|
|xxx.xxx.xxx.xxx|konfiguroitava FailOver IP|
|Y|toissijainen verkkoliitäntä (aloitusarvo on 0, jonka jälkeen 1, jne. konfiguroitavien IP-osoitteiden lukumäärästä riippuen)|



- Syötä seuraavat rivit tiedoston loppuun:

```
DEVICE="ethX:Y"
BOOTPROTO=static
IPADDR="xxx.xxx.xxx.xxx"
NETMASK="255.255.255.255"
BROADCAST="xxx.xxx.xxx.xxx"
ONBOOT=yes
```





## Verkkopalvelun käynnistäminen

- Käynnistä verkkopalvelu seuraavalla komennolla:

```
ifup ethX:Y
```



Mikäli konfiguraatiotiedoston asetukset ovat oikein, verkkoyhteyden pitäisi toimia välittömästi.


## 

- [FailOver IP -migraatio]({legacy}1890)




## 
[Takaisin Cloud-ohjeiden etusivulle]({legacy}1785)

