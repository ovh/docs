---
deprecated: true
title: Hälytyksen luonti
excerpt: ''
slug: halytyksen_luonti
legacy_guide_number: g599
---


## 
Sinun on käytettävä vSphere-asiakasohjelmaa joko oman paikallisen asiakasohjelman kautta tai käyttäen RDP-yhteyttä, jonka sait meiltä PCC:n aktivoinnin yhteydessä.


## 
On mahdollista luoda hälytys kaikille Private Cloudin osille kuten itse Private Cloudille, klustereille, virtuaalikoneille, datastroreille, verkolle...
Tätä varten klikkaa oikeaa hiiren painiketta Private Cloudin päällä tai sen osan päällä, jota halutaan seurata, ja valitse "Alarm" > "Add Alarm".

![](images/img_91.jpg){.thumbnail}
"Yleistä"-välilehdellä merkitse hälytyksen nimi ja valitse hälytyksen tyyppi:

![](images/img_92.jpg){.thumbnail}
"Käynnistys"-välilehdessä voi merkitä seurattavat asetukset sekä hälytyksen ehdot. "Lisää"-painikkeella voi muokata sääntöjä haluamikseen.
Esimerkiksi hostin muistia voi seurata merkitsemällä rajan, jonka ylittyessä muisti tila muuttuu hälytystilaan, josta lähtee hälytyssähköposti.

![](images/img_93.jpg){.thumbnail}
"Raportointi"-välilehdellä voi merkitä hälytyksen käynnistymiseen tarvittavat rajat sekä sen toistumistiheys.
Esimerkiksi jo host ylittää 95 % sen käytöstä yli viiden minuutin ajan, siitä lähtee hälytyssähköposti.

"Toiminta"-välilehdellä voi määritellä toiminnon, jonka hälytys käynnistää, sähköpostin lähetys, VM:n pysäytys tai komennon suorittaminen.

![](images/img_103.jpg){.thumbnail}

