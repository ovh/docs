---
deprecated: true
title: Automaattinen varmuuskopio
excerpt: ''
slug: automaattinen_varmuuskopio
legacy_guide_number: g1486
---


## 
Automaattista varmuuskopiota varten tarvitaan:


- VPS Cloud
- Hallintapaneelin käyttäjätunnus ja salasana
- Yhteys palvelimelle (SSH tai RDP)




## Hallintapaneeli
Kirjautuminen [hallintapaneeliin](https://www.ovh.com/manager/web/)

![](images/img_2080.jpg){.thumbnail}
Kirjaudu syöttämällä asiakastunnuksesi käyttäjätunnukseen ja itse valitsemasi salasana.
Valitse ensin VPS vasemmanpuoleisesta valikosta:

![](images/img_2023.jpg){.thumbnail}
Avaa päävalikosta välilehti "Automaattinen varmuuskopio":

![](images/img_2026.jpg){.thumbnail}
Klikkaa oikealla olevaa painiketta "Aktivoi automaattinen varmuuskopio"

![](images/img_2027.jpg){.thumbnail}
Klikkaa painiketta Maksa, josta avautuu tilauslomake:

![](images/img_2028.jpg){.thumbnail}
Maksusuorituksen saavuttua, palvelu toimitetaan.


## Hallintapaneeli
Kirjaudu hallintapaneeliin ja valitse vasemmanpuoleisesta valikosta ko. VPS.
Avaa päävalikosta välilehti "Automaattinen varmuuskopio", josta löytyvät käytettävissä olevat varmuuskopiot:

![](images/img_2021.jpg){.thumbnail}
Klikkaa "Palauta":

![](images/img_2025.jpg){.thumbnail}
Tehtävä palautuksen hakemiseksi alkaa (viive puolesta tunnista tuntiin riippuen VPS-mallista).

Kun palautus on valmistunut, siitä lähetetään sähköpostilla viesti, joka sisältää VPS:n kirjautumistiedot:


```
KIRJAUTUMISASETUKSET:

VPS:n IPv4-osoite on: IPv4-osoite
VPS:n IPv6-osoite on: IPv6-osoite

VPS:n nimi on: vpsXXXXX.ovh.net

VPS:n salasana on tullut voimaan 2014-06-24 02:37:16.
```




## Hallintapaneelin kautta
Kirjaudu hallintapaneeliin ja valitse vasemmanpuoleisesta valikosta ko. VPS. Avaa päävalikosta välilehti "Automaattinen varmuuskopio" ja valitse haluttu palautuskohta:

![](images/img_2022.jpg){.thumbnail}
Vahvista palautuspyyntö, jolloin sähköpostilla tulee tiedot kirjautumistiedot varmuuskopion mountaamiseksi VPS:ään.

Viestissä annetaan komennot varmuuskopion mountaamiseksi NFS:llä tai CIFS:llä.


```
Voit mountata varmuuskopiosi Linuxissa seuraavalla komennolla:

mount -t nfs -o ro,vers=3 IP.IP.IP.IP:/mnt/veeam/vpsXXXXX /mnt

Debianin ja Ubuntun päällä nfs-common -paketin asennus vaaditaan, tai CentOS:n/Fedoran päällä nfs-utils- tai nfs-lib -paketin.

mount -t cifs -o username=vpsXXXXX,password=YYYYYY //IP.IP.IP.IP/VPSXXXXX /mnt

Debianin, Ubuntun ja CentOS:n päällä vaaditaan cifs-utils -paketin asennus.
```



