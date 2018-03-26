---
title: 'Exchange 2013: Send As (lähetys toisen tilin kautta)'
excerpt: ''
slug: exchange_2013_send_as_lahetys_toisen_tilin_kautta
legacy_guide_number: g1250
---


## Send As -oikeuksien asetus: osa 1
Send As -oikeuksien asetus täytyy tehdä [Web-hallintapaneelin kautta](https://www.ovh.com/manager/web/login.html).

Kun olet kirjautunut sisään OVH-asiakastunnuksellasi, valitse Exchange-palvelu vasemmalta puolelta osiosta ”Alustat”.

Klikkaa ”Sähköpostitilit”-nappia ja tämän jälkeen ”Lisää toimintoja”-kuvaketta (kolme päällekkäin olevaa sinistä pistettä) oikealla puolella.

Sen jälkeen valitse ”Hallinnoi delegaatioita”.

![](images/img_1208.jpg){.thumbnail}


## Send As -oikeuksien asetus: osa 2
Delegaatioiden määritysikkuna aukeaa eteesi. Valitse molemmat valintalaatikot ”Anna lähetysoikeudet kohteelle” sekä ”Myönnä käyttöoikeudet” ja klikkaa ”Seuraava”.

![](images/img_1209.jpg){.thumbnail}


## Send As -oikeuksien asetus: osa 3
Delegaatioyhteenveto aukeaa eteesi vahvistusta varten.

Delegaatioiden päivittymisessä palvelimella kestää maksimissaan muutaman minuutin.

Klikkaa lopuksi ”Vahvista”.

![](images/img_1063.jpg){.thumbnail}


## OWA-käyttö: osa 1
Voit tarkistaa [OWA](https://ex.mail.ovh.net/owa):n kautta toisen tilin lähetysoikeudet. Eli esimerkiksi pystyykö ”test@domain.fi”-tilillä lähettämään postia käyttäen osoitetta ”config@domain.fi”.

Klikkaa ”+ new mail” ja tämän jälkeen ”...”-nappia ”Insert”-napin vieressä saadaksesi ”From”-kentän esiin.

Klikkaa ”From” ja nyt voit klikata hiiren oikealla napilla lähetysosoitetta poistaaksesi sen. Lopuksi voit syöttää toisen osoitteesi käsin jonka jälkeen viesti tallentuu automaattisesti.

![](images/img_1325.jpg){.thumbnail}


## OWA-käyttö: osa 2
Sähköposti on vastaanotettu onnistuneesti ”config”-etuliitteenä

![](images/img_1032.jpg){.thumbnail}


## Mahdollinen virhe:
Tällainen virheilmoitus voi tulla, mikäli Send As -oikeuksia ei ole määritelty oikein.

![](images/img_1033.jpg){.thumbnail}

