---
title: FailOver IP -osoitteen konfigurointi Debianissa
excerpt: FailOver IP -osoitteen konfigurointi Debianissa
slug: failover_ip_-osoitteen_konfigurointi_debianissa
legacy_guide_number: g2042
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
nano /etc/network/interfaces
```


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


Mikäli sinulla on monta konfiguroitavaa IP-osoitetta, ne täytyy ottaa käyttöön samalla tavalla. Nostamalla Y-arvon lukemaa (ns. alias-lukemaa).


## Verkkopalvelun uudelleenkäynnistäminen

- Uudelleenkäynnistä verkkopalvelu seuraavalla komennolla:

```
service networking restart
```





## 

- [FailOver IP -migraatio]({legacy}1890)

Mikäli liikennöinti uudella osoitteella ei toimi ollenkaan ja olet varmasti uudelleenkäynnistänyt verkkopalvelun, suosittelemme käynnistämään koko palvelimen uudestaan.


## 
[Takaisin Cloud-ohjeiden etusivulle]({legacy}1785)

