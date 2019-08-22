---
title: FailOver IP -osoitteen konfigurointi Windowsissa
excerpt: FailOver IP -osoitteen konfigurointi Windowsissa
slug: failover_ip_-osoitteen_konfigurointi_windowsissa
legacy_guide_number: g2046
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
Windows ei mahdollista toisen osoitteen konfiguroimista kiinteäksi silloin kun DHCP on käytössä. Sinun täytyy siis määritellä verkkokortille manuaalisesti kiinteä, ensisijainen IP-osoite.

Katso verkkokortin IP-osoitetieto käyttäen komentoa ”ipconfig /all”:

![](images/img_3609.jpg){.thumbnail}

- Mene osioon Control Panel jonka jälkeen Network and Sharing Center



![](images/img_3602.jpg){.thumbnail}

- Muokkaa kortin asetuksia:



![](images/img_3603.jpg){.thumbnail}

- Valitse vetolaatiksota kohta ”Properties”:



![](images/img_3604.jpg){.thumbnail}

- Tuplaklikkaa kohtaa ”Internet Protocol Version 4 (TCP/IPv4)”:



![](images/img_3605.jpg){.thumbnail}

- Viimeistele manuaalinen kiinteän IP-osoitteen asettaminen ja määrittele ensisijainen osoite samaksi, kuin minkä sait ”ipconfig /all” -komennolla. Klikkaa lopuksi ”Advanced...”:



![](images/img_3606.jpg){.thumbnail}

- Lisää FailOver IP -osoite ao. kuvakaappauksen mukaisesti:



![](images/img_3607.jpg){.thumbnail}


## 

- [FailOver IP -migraatio]({legacy}1890)




## 
[Takaisin Cloud-ohjeiden etusivulle]({legacy}1785)

