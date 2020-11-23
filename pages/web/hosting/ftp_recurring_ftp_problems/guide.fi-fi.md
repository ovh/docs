---
deprecated: true
title: 'Webhotelli: Yleisimmät FTP-ongelmat'
slug: webhotelli_yleisimmat_ftp-ongelmat
excerpt: 'Webhotelli: Yleisimmät FTP-ongelmat'
legacy_guide_number: g1996
---

## Olen siirtänyt tiedostoni FTP-ohjelmistolla, mutta mitään ei tule näkyviin.

- Tarkista, että sivusi tiedostot ovat varmasti webhotellisi www-hakemistossa.
- Jos olet tehnyt muutoksia DNS-alueella, saattaa niiden propagaatioviive olla 4 - 24 tuntia.

## Ftp-koodini eivät toimi
Tarkista, että olet kopioinut salasanan oikein. Varminta on käyttää leikkaa/liimaa toimintoa (Ctrl-C Ctrl-V windowsissa). Huomaa ero l (L) ja 1 (yksi) välillä sekä O (kirjain) ja 0 (nolla) välillä. 
Mikäli tämä ei auta, käyttämäsi tunnukset ovat todennäköisesti virheelliset. Siinä tapauksessa voit katsoa ohjeita [tästä oppaasta](https://www.ovh-hosting.fi/g1374.sivusto-internetiin).


## Kuinka paljon tilaa sivullani on jäljellä?
Tilanpuute webhotellissa saattaa johtaa toimintahäiriöihin, jos yrität siirtää sivulle uusia tiedostoja.

- Voit tarkistaa asian kirjautumalla [hallintapaneeliin](https://www.ovh.com/manager/web/login/).
- Valitse webhotellisi alusta.



![](images/img_3298.jpg){.thumbnail}
Näkyviin tulee yhteenveto FTP-tilan käytöstä.

![](images/img_3299.jpg){.thumbnail}


## En pysty lähettämään tiedostojani FTP-palvelimelle?
Kirjaudu passiivisessa tilassa (FTP-palvelimen konfigurointitila, jossa FTP-palvelin määrittää itse yhteysportin) ftp-asiakasohjlemaan, esimerkiksi Filezillalla mene (Muokkaus -> Asetukset ->Yhdistä-> Palomuurin asetukset -> Passiivinen tila).


## Mikä on cgi-bin -hakemisto?
cgi-bin -hakemistoa ei voida lukea suoraan verkkoselaimesta. Se on www-hakemiston rinkkainen hakemisto. On olemassa siis seuraavia turvatoimia:

- cgi-bin -hakemistoon laitettuja tiedostoja ei voida lukea. Niitä voidaan ainoastaan suorittaa. Sinne ei voi esimerkiksi laittaa gif. tai jpeg. -kuvia. Niiden lukeminen aiheuttaisi virheen.
- Koska yhtään tiedostoa ei voida lukea cgi-bin -hakemistossa, voit laittaa sinne esimerkiksi tietokannan tekstitiedostoja, joita haluat suojata.
- cgi-skriptien suorittaminen cgi-bin -hakemistossa tapahtuu verkkosivusi aliaksen kautta. Et voi suorittaa skriptejä muuten kuin verkkotunnuksellasi.



