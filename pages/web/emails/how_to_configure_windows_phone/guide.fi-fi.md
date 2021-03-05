---
deprecated: true
title: 'OVH Sähköpostit: Windows Phonen konfigurointiohje'
excerpt: Miten konfiguroidaan Windows-puhelin
slug: ovh_sahkopostit_windows_phonen_konfigurointiohje
legacy_guide_number: g1346
---


## Vaihe 1: Asetukset
Ensin klikkaa "Asetukset"-kuvaketta.

Esimerkissämme konfiguroidaan POP-sähköpostitili Nokia Lumia 625 Windows Phone 8.0 -puhelimeen.

Lisättäessä sähköpostia, tarkasta, että puhelimen internetyhteys on aktiivinen.

![](images/img_1501.jpg){.thumbnail}


## Vaihe 2: Järjestelmä
Sähköpostitilin lisäämiseksi valitse "sähköposti + tilit".

![](images/img_1502.jpg){.thumbnail}


## Vaihe 3: Tilin lisäys
Seuraavaksi valitse "lisää tili" OVH:n jaetun sähköpostitilin lisäämiseksi.

Huomaa, että tästä löytyy myös muun tyyppisiä esikonfiguroituja sähköpostitilejä.

![](images/img_1503.jpg){.thumbnail}


## Vaihe 4: Tilin tyyppi
Valitse haluttu tilin tyyppi.

Valitse "muu tili" lisätäksesi POP- tai IMAP-sähköpostitilin.

![](images/img_1504.jpg){.thumbnail}


## Vaihe 5: Tilin konfigurointi
Syötä ensimmäisenn kenttään sähköpostiosoite kokonaisuudessaan.

Seuraavaksi syötä salasana, kuten se on [hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie) OVH:n sähköpostitilille määritelty.

Valittuasi "kirjaudu" tulee näkyviin varoitusviesti.

Tilin konfigurointia jatkaaksesi, valitse "edistyneet".

![](images/img_1505.jpg){.thumbnail}


## Vaihe 6: Edistynyt konfigurointi
Päästäksesi sähköpostitilin edistyneisiin asetuksiin ja jatkaaksesi tilin konfigurointia POP- tai IMAP-tyyppisenä, valitse "Sähköposti Internetissä".

![](images/img_1506.jpg){.thumbnail}


## Vaihe 7: Sähköpostitilin asetukset
Määrittele pyydetyt tiedot:

Tilin nimi: miten tilin nimi näkyy puhelimessa.

Nimi: viestejä lähetettäessä näytetty nimi.

Saapuvan postin palvelin: SSL0.OVH.NET

Tilin tyyppi: POP3 (voit myös konfiguroida tilin IMAP-tyyppisenä, missä tapauksessa käytä tietoja, jotka on annettu ohjeen lopussa).

Käyttäjänimi: sähköpostiosoite kokonaisuudessaan.

Salasana: salasana, jonka määrittelit[hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie)OVH:n sähköpostitilillle.

Lähtevän postin palvelin (SMTP): SSL0.OVH.NET

Rastita molemmat ruudut " Lähtevän postin palvelin vaatii autentikoinnin" ja "Käytä samaa käyttäjätunnusta ja salasanaa sähköpostin lähetykseen"

Jatkaaksesi klikkaa "kirjaudu".

![](images/img_2401.jpg){.thumbnail}

- Lähtevän palvelimen autentikointi on tehtävä, jotta sähköpostinlähetys toimisi moitteettomasti SMTP-palvelimillamme.

- Jos autentikointia ei aktivoida, Open SMTP-häiriötiketti voidaan avata, jossa ilmoitetaan, että "POP before SMTP" autentikointia ei tueta. Lähtevän palvelimen autentikointi on aktivoitava sähköpostien lähettämiseksi.




## Vaihe 8: Valmis
Sähköpostilaatikko on nyt oikein konfiguroitu ja se tulee näkyviin puhelimessa.

![](images/img_1508.jpg){.thumbnail}


## Pääsy viesteihin
Sähköpostiviestit ovat nyt saatavilla puhelimen etusivun kautta.

![](images/img_1509.jpg){.thumbnail}


## POP-konfiguraatio
Tässä ovat sähköpostilaatikon POP-tilin asetukset.

POP-tilin konfigurointi SSL-suojaus aktivoituna tai deaktivoituna: 

Sähköpostiosoite: sähköpostiosoite kokonaisuudessaan.
Salasana: salasana, joka on määritelty [hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie).
Käyttäjätunnus: sähköpostiosoite kokonaisuudessaan.
Saapuvan postin palvelin: saapuvien sähköpostiviestien palvelin: SSL0.OVH.NET
Saapuvan postin palvelimen portti: saapuvien sähköpostiviestien palvelimen portti: 995 tai 110
Lähtevän postin palvelin: lähtevien sähköpostiviestien palvelin: SSL0.OVH.NET
Saapuvan postin palvelimen portti: lähtevien sähköpostiviestien palvelimen portti: 465 tai 587

Portit 110 ja 587 vastaavat deaktivoitua SSL-suojausta.
Portit 995 ja 465 vastaavat  aktivoitua SSL-suojausta.


- Lähtevän SMTP-palvelimen [autentikointi](#configuration_du_compte_e-mail_mutualise_sous_windows_phone_8_partie_7_parametres_du_compte_e-mail) on aktivoitava.


|Portti|SSLaktivoitu|SSLdeaktivoitu|
|Saapuva|995|110|
|Lähtevä|465|587|




## IMAP-konfiguraatio
Tässä ovat sähköpostilaatikon IMAP-tilin asetukset.

IMAP-tilin konfigurointi SSL-suojaus aktivoituna tai deaktivoituna: 

Sähköpostiosoite: sähköpostiosoite kokonaisuudessaan.
Salasana: salasana, joka on määritelty [hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie).
Käyttäjätunnus: sähköpostiosoite kokonaisuudessaan.
Saapuvan postin palvelin: saapuvien sähköpostiviestien palvelin: SSL0.OVH.NET
Saapuvan postin palvelimen portti: saapuvien sähköpostiviestien palvelimen portti: 993 tai 143
Lähtevän postin palvelin: lähtevien sähköpostiviestien palvelin: SSL0.OVH.NET
Saapuvan postin palvelimen portti: lähtevien sähköpostiviestien palvelimen portti: 465 tai 587

Portit 143 ja 587 vastaavat deaktivoitua SSL-suojausta.
Portit 993 ja 465 vastaavat  aktivoitua SSL-suojausta.


- Lähtevän SMTP-palvelimen [autentikointi](#configuration_du_compte_e-mail_mutualise_sous_windows_phone_8_partie_7_parametres_du_compte_e-mail) on aktivoitava.


|Portti|SSLaktivoitu|SSLdeaktivoitu|
|Saapuva|993|143|
|Lähtevä|465|587|



