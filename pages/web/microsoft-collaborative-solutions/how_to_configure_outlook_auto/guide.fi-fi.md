---
deprecated: true
title: Manuaalinen konfiguraatio Outlookilla
excerpt: Jos et voi asettaa SRV-tietueita verkkotunnuksellesi automaattikonfiguraatiota varten, etene tämän ohjeen mukaisesti
slug: manuaalinen_konfiguraatio_outlookilla
legacy_guide_number: g1358
---


## Exchange-tilin GUID
Konfiguroidaksesi tilin Outlookiin manuaalisesti, sinun täytyy ensin selvittää Exchange-tilisi GUID jonka voit tehdä [hallintapaneelimme kautta](https://www.ovh.com/manager/web) sisäänkirjautumisen jälkeen klikkaamalla tilaamaasi Exchange-palvelua ja sen jälkeen ”Sähköpostitilit”-osiossa ”Konfiguraatio”-kynäkuvaketta.

Lisää ”@verkkotunnus.fi”-GUID joka tässä esimerkissä on 45c94143-1a29-4ef8-a990-06b54f9d6ad7@support-exchange.eu.

![](images/img_1568.jpg){.thumbnail}


## Hallintapaneeli
Tehdyt muokkaukset on suoritettu Windows-työasemalla.

Aloittaaksesi sinun täytyy mennä hallintapaneeliin.

Muista valita ”Näytä pienet kuvakkeet” nähdäksesi kuvakkeen ”Mail” tai ”Mail (32-bit)”

Klikkaa ”Mail” tai ”Mail (32-bit)” joka on löydettävissä yleensä tästä sijainnista tai käyttäjätunnukset-osion alta. Tähän on mahdollista päästä käsiksi myös suoraan Outlookista.

Klikkaa sitten ”Mail Accounts”

![](images/img_992.jpg){.thumbnail}


## Vaihe 2: uuden postitilin lisäys
Klikkaa ”New” lisätäksesi Exchange 2013 -sähköpostitilin.

![](images/img_1551.jpg){.thumbnail}


## Vaihe 3: postitili
Valitse ”Email Account” jonka jälkeen ”Next”.

![](images/img_994.jpg){.thumbnail}


## Vaihe 4: manuaalinen tilin pystytys
Rastita ”Manual Setup or additional server types”

Tämän jälkeen klikkaa ”Next”.

![](images/img_1552.jpg){.thumbnail}


## Vaihe 5: palvelun valinta
Valitse ”Microsoft Exchange Server or a service compatible”

Klikkaa tämän jälkeen ”Next”.

![](images/img_1553.jpg){.thumbnail}


## Vaihe 6: palvelinasetukset
Server: syötä tähän kenttään aiemmin Web-hallintapaneelin kautta katsomasi Exchange GUID-tieto jatkettuna verkkotunnuksellasi (”@verkkotunnus.fi”).

 Username: tähän osioon syötä täysi sähköpostiosoitteesi.

Klikkaa tämän jälkeen ”More Settings ...”.

![](images/img_1554.jpg){.thumbnail}


## Vaihe 7: Exchange-proxyasetukset
Osiossa ”Connection”, varmista että ”Connect to Microsoft Exchange using HTTP” on valittuna.

Tämän jälkeen klikkaa ”Exchange Proxy Settings”.

![](images/img_1555.jpg){.thumbnail}


## Vaihe 8: yhdistämisasetukset
Osiossa ”Use this URL to connect to my proxy server for Exchange”, syötä ”ex.mail.ovh.net”.

Valitse sitten ”Connect using SSL only” ja ”Only connect to proxy servers that includes the certificate principal name” tyypiltään ”msstd:ex.mail.ovh.net”.

Varmista että valintalaatikot ”On fast networks, connect using HTTP first, then connect using TCP/IP” ja ”On slow networks, connect using HTTP first, then connect using TCP/IP” ovat valittuina.

Tämän jälkeen klikkaa OK.

![](images/img_1556.jpg){.thumbnail}
Exchange Private -palvelua varten korvaa ex.mail.ovh.net palvelimesi SSL-sertifikaatin nimellä.


## Vaihe 9: tunnistautuminen
Eteesi aukeaa ikkuna jossa Outlook pyytää syöttämään salasanan ja käyttäjätunnuksen Exchange-palvelinta varten. Syötä siis koko sähköpostiosoitteesi ja salasana.

Muista rastittaa myös ”Remember this information”

Exchange-sähköpostitilisi on nyt käytössä ja voit lähettää viestejä Outlookilla.

![](images/img_1557.jpg){.thumbnail}

