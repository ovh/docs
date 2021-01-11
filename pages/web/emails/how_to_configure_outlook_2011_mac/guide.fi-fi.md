---
deprecated: true
title: 'Webhotellit ja sähköpostit: Outlook 2011 -konfigurointiohje OS X:lle'
excerpt: Outlook 2011 & Mac OS X
slug: webhotellit_ja_sahkopostit_outlook_2011_-konfigurointiohje_os_xlle
legacy_guide_number: g1345
---


## Vaihe 1: aloitus
Käynnistä Outlook 2011. Tässä ohjeessa Outlook konfiguroidaan käyttämään IMAP-yhteyttä SSL-varmennettuna.

Voit toki määritellä tilin käyttämään myös POP-yhteyttä tämän ohjeen lopussa olevan mallin mukaisesti.

Ohjeessa käytetään OS X -versiota 10.9.1 Outlook 2011 -versiolla 14.0.0.

![](images/img_1492.jpg){.thumbnail}


## Vaihe 2: työkalut – tilit
Klikkaa ”Options” jonka jälkeen ”Accounts...”.

Sovellukseen ei ole tässä vaiheessa määritelty käyttöön yhtään tiliä.

![](images/img_1493.jpg){.thumbnail}


## Vaihe 3: tilin lisäys
Saat eteesi uuden käyttöliittymän.

Klikkaa osiota ”Email Account” lisätäksesi sähköpostitilin POP- tai IMAP-tyyppisenä.

![](images/img_1494.jpg){.thumbnail}


## Vaihe 4: tilin tiedot
Tässä on uusi käyttöliittymä, joka aukeaa eteesi.

Täytä seuraavat kentät:

Email Address: koko sähköpostiosoite

Password:[hallintapaneelin kautta](https://www.ovh.com/auth/?action=gotomanager) määrittelemäsi sähköpostilaatikon salasana.

Username: koko sähköpostiosoite.

Type: valitse IMAP (voit valita postilaatikon tyypiksi myös POP-protokollan, katso ohjeen loppuosa POP-tiliä varten).

Incoming server:SSL0.OVH.NET
Incoming server port:993

Rastita valinnat ”Override the default port” ja  ”Use SSL to connect (recommended)”.

Outgoing server:SSL0.OVH.NET
Outgoing server port:465

Valitse valinnat ”Override the default port” ja  ”Use SSL to connect (recommended)”.

Jos sinulta kysytään salasanan muistamista OS X:n toimesta, voit tallentaa sen tulevaisuuden salasanakyselyitä välttääksesi.

Klikkaa lopuksi ”Add Account” lisätäksesi tilisi.

![](images/img_1495.jpg){.thumbnail}


## Vaihe 5: viimeistely
Sähköpostilaatikkosi on nyt lisätty Outlook 2011 -sovellukseen.

Voit siis tarkastella, kirjoittaa tai poistaa sähköpostejasi.

![](images/img_1496.jpg){.thumbnail}


## Työkalut – tilit
Klikkaa ”Options” jonka jälkeen ”Accounts...”.

Valitse sähköpostitili, jota haluat muokata jonka jälkeen eteesi aukeaa uusi käyttöliittymä (ks. kuvakaappaus).

Valitse ”More options...”-pudotusvalikosta ”Authentications” jonka jälkeen ”Use incoming server information”.

Voit vaihtaa tässä vaiheessa myös muita teknisiä tietoja paitsi tilin tyypin (POP tai IMAP).

Katso eri vaihtoehdot, jotka ovat saatavilla osiossa ”Advanced...”.

![](images/img_2138.jpg){.thumbnail}

- Lähtevän palvelimen autentikointi on pakollinen asetus, jotta sähköpostinlähetys toimisi moitteettomasti SMTP-palvelimillamme.

- Jos autentikointia ei aktivoida, Open SMTP-häiriötiketti voidaan avata, jossa ilmoitetaan, että "POP before SMTP" autentikointia ei tueta. Lähtevän palvelimen autentikointi on aktivoitava sähköpostien lähettämiseksi.




## Palvelin
Tässä näkyy muokattavat asetukset ”Server”-välilehdellä ”Advanced account options”-asetusten alaisuudessa.

![](images/img_1498.jpg){.thumbnail}
Jotta asetukset olisivat täysin toimintakykyisiä, suosittelemme määrittelemään kohtaan "IMAP-juurikansio" kansion "INBOX".


## Kansiot
Tässä näkyy muokattavat asetukset ”Folders”-välilehdellä ”Advanced account options”-asetusten alaisuudessa.

![](images/img_1499.jpg){.thumbnail}


## Tietoturva
Tässä näkyy muokattavat asetukset ”Security”-välilehdellä ”Advanced account options”-asetusten alaisuudessa.

![](images/img_1500.jpg){.thumbnail}


## POP-konfiguraatio
Tässä ovat sähköpostilaatikon POP-tilin asetukset.

POP-tilin konfigurointi SSL-suojaus aktivoituna tai deaktivoituna: 

Sähköpostiosoite: sähköpostiosoite kokonaisuudessaan.
Salasana: salasana, joka on määritelty [hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager).
Käyttäjätunnus:jaettu sähköpostiosoite kokonaisuudessaan.
Saapuvan postin palvelin: saapuvien sähköpostiviestien palvelin: SSL0.OVH.NET
Saapuvan postin palvelimen portti: saapuvien sähköpostiviestien palvelimen portti: 995 tai 110
Lähtevän postin palvelin: lähtevien sähköpostiviestien palvelin: SSL0.OVH.NET
Saapuvan postin palvelimen portti: lähtevien sähköpostiviestien palvelimen portti: 465 tai 587

Portit 110 ja 587 vastaavat deaktivoitua SSL-suojausta.
Portit 995 ja 465 vastaavat  aktivoitua SSL-suojausta.


- Lähtevän SMTP-palvelimen [autentikointi](#modification_du_compte_e-mail_sur_outlook_2011_mac_outils_-_comptes) on aktivoitava.


|Portti|SSLaktiivinen|SSLdeaktivoitu|
|Saapuva|995|110|
|Lähtevä|465|587|




## IMAP-konfiguraatio
Tässä ovat sähköpostilaatikon IMAP-tilin asetukset.

IMAP-tilin konfigurointi SSL-suojaus aktivoituna tai deaktivoituna: 

Sähköpostiosoite: sähköpostiosoite kokonaisuudessaan.
Salasana: salasana, joka on määritelty [hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager).
Käyttäjätunnus: sähköpostiosoite kokonaisuudessaan.
Saapuvan postin palvelin: saapuvien sähköpostiviestien palvelin: SSL0.OVH.NET
Saapuvan postin palvelimen portti: saapuvien sähköpostiviestien palvelimen portti: 993 tai 143
Lähtevän postin palvelin: lähtevien sähköpostiviestien palvelin: SSL0.OVH.NET
Saapuvan postin palvelimen portti: lähtevien sähköpostiviestien palvelimen portti: 465 tai 587

Portit 143 ja 587 vastaavat deaktivoitua SSL-suojausta.
Portit 993 ja 465 vastaavat  aktivoitua SSL-suojausta.


- Lähtevän SMTP-palvelimen [autentikointi](#modification_du_compte_e-mail_sur_outlook_2011_mac_outils_-_comptes) on aktivoitava.


|Portti|SSLaktiivinen|SSLdeaktivoitu|
|Saapuva|993|143|
|Lähtevä|465|587|




## Yleistä
Halutessasi voimme maksua vastaan määritellä sähköpostilaatikon puolestasi käyttämääsi sähköpostiohjelmaan. Voimme suorittaa muitakin sähköpostiin liittyviä toimenpiteitä.

Maksulliset toimenpiteet on eritelty seuraavassa linkissä:


- []({legacy}1683)


Katso ohjeesta, miten maksullista toimenpidettä pyydetään.

![](images/img_2505.jpg){.thumbnail}

