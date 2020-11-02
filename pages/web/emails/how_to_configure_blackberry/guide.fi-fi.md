---
deprecated: true
title: 'Webhotellit: BlackBerryn konfigurointiohje'
excerpt: Webhotellin sähköpostin konfigurointi BlackBerryyn
slug: webhotellit_blackberryn_konfigurointiohje
legacy_guide_number: g1381
---


## Vaihe 1: Asetukset
Aloita klikkaamalla kuvaketta "Asetukset".

Esimerkissä OVH:n sähköposti konfiguroidaan IMAP-protokollaa käyttäen BlackBerry Z10 -puhelimeen, jonka käyttöjärjestelmäversio on 10.20.429.

Varmista, että puhelimessa on internetyhteys ennen tilin lisäämistä.

![](images/img_1747.jpg){.thumbnail}


## Vaihe 2: Järjestelmäasetukset
Valitse "Tilit".

![](images/img_1748.jpg){.thumbnail}


## Vaihe 3: Tilin lisäys
Valitse "Lisää tili" OVH:n sähköpostiosoitteen lisäämiseksi.

Huomaa, että täältä löytyy myös muun tyyppisiä valmiiksi konfiguroituja tilejä.

![](images/img_1749.jpg){.thumbnail}


## Vaihe 4: Sähköpostin ja salasanan määrittely
Syötä sähköpostiosoite kokonaisuudessaan (tarkista, että se on kirjoitettu oikein).

Klikkaa "Seuraava" jatkaaksesi.

![](images/img_1750.jpg){.thumbnail}
Syötä sähköpostille [hallintapaneelissasi](https://www.ovh.com/managerv3/) määrittelemä salasana.

Klikkaa "Seuraava" vahvistaaksesi salasana.

![](images/img_1751.jpg){.thumbnail}
Sovellus etsii kirjautumistietoja. Odota seuraavan vaiheen ilmestymistä.

![](images/img_1752.jpg){.thumbnail}


## Vaihe 5: Sähköpostiasetukset
Syötä pyydetyt tiedot:

Kuvaus: nimi, joka puhelimessa näkyy.

Näyttönimi: nimi, joka näkyy viestin lähetyksessä.

Käyttäjänimi: sähköpostiosoite kokonaisuudessaan.

Sähköpostiosoite: sähköpostiosoite kokonaisuudessaan.

Salasana: sähköpostille [hallintapaneelissa](https://www.ovh.com/managerv3/) määrittelemäsi salasana.

Palvelimen osoite:SSL0.OVH.NET

Portti:993

Salaus: SSL

IMAP-polun etuliite: jätä kenttä tyhjäksi

SMTP-käyttäjätunnus: sähköpostiosoite kokonaisuudessaan.

SMTP-salasana: sähköpostille[hallintapaneelissa](https://www.ovh.com/managerv3/)määrittelemäsi salasana.

SMTP-palvelimen osoite: SSL0.OVH.NET

SMTP-portti: 465

SMTP-salaus: SSL

Käytä Push-toimintoa, jos sitä tuetaan: poista käytöstä, Push ei ole käytössä webhotellien sähköpostiosoitteilla.

Synkronointi-intervalli: määrittelee sähköpostien synkronointien aikavälin puhelimeen.

Alkuperäisen haun määrä: kyseessä on alunperin synkronoitujen viestien määrä puhelimessa.

Vahvista syötetyt tiedot klikkaamalla "Valmis".

![](images/img_1753.jpg){.thumbnail}
Sovellus rekisteröi ja varmistaa annetut asetukset. Odota seuraavaa vaihetta jatkaaksesi.

![](images/img_1754.jpg){.thumbnail}

- SMTP-palvelimen autentikointi käyttäjätunnuksella ja salasanalla on tehtävä, jotta sähköpostinlähetys toimisi moitteettomasti SMTP-palvelimillamme.

- Jos autentikointia ei aktivoida, Open SMTP-häiriötiketti voidaan avata, jossa ilmoitetaan, että "POP before SMTP" autentikointia ei tueta. SMTP-palvelimen autentikointi on aktivoitava sähköpostien lähettämiseksi.




## Viimeistely
Valmis, tili on nyt konfiguroitu puhelimeen!

Tiliä voi muokata valitsemalla se valikosta (ks. oheinen ruutu).

![](images/img_1755.jpg){.thumbnail}

## Sähköpostien luku
Sähköpostien lukua varten mene "Hubiin".

![](images/img_1756.jpg){.thumbnail}


## POP-asetukset
Tässä ovat sähköpostilaatikon POP-tilin asetukset.

POP-tilin konfigurointi SSL-suojaus aktivoituna tai deaktivoituna: 

Sähköpostiosoite: sähköpostiosoite kokonaisuudessaan.
Salasana: salasana, joka on määritelty [hallintapaneelissa](https://www.ovh.com/managerv3/).
Käyttäjätunnus:jaettu sähköpostiosoite kokonaisuudessaan.
Saapuvan postin palvelin: saapuvien sähköpostiviestien palvelin: SSL0.OVH.NET
Saapuvan postin palvelimen portti: saapuvien sähköpostiviestien palvelimen portti: 995 tai 110
Lähtevän postin palvelin: lähtevien sähköpostiviestien palvelin: SSL0.OVH.NET
Saapuvan postin palvelimen portti: lähtevien sähköpostiviestien palvelimen portti: 465 tai 587

Portit 110 ja 587 vastaavat deaktivoitua SSL-suojausta.
Portit 995 ja 465 vastaavat  aktivoitua SSL-suojausta.


- Lähtevän SMTP-palvelimen [autentikointi](#configuration_du_compte_e-mail_mutualise_sous_blackberry_partie_5_parametres_du_compte_e-mail) on aktivoitava.


|Portti|SSLaktivoitu|SSLdeaktivoitu|
|Saapuva|995|110|
|Lähtevä|465|587|




## IMAP-asetukset
Tässä ovat sähköpostilaatikon IMAP-tilin asetukset.

IMAP-tilin konfigurointi SSL-suojaus aktivoituna tai deaktivoituna: 

Sähköpostiosoite: sähköpostiosoite kokonaisuudessaan.
Salasana: salasana, joka on määritelty [hallintapaneelissa](https://www.ovh.com/managerv3/).
Käyttäjätunnus: sähköpostiosoite kokonaisuudessaan.
Saapuvan postin palvelin: saapuvien sähköpostiviestien palvelin: SSL0.OVH.NET
Saapuvan postin palvelimen portti: saapuvien sähköpostiviestien palvelimen portti: 993 tai 143
Lähtevän postin palvelin: lähtevien sähköpostiviestien palvelin: SSL0.OVH.NET
Saapuvan postin palvelimen portti: lähtevien sähköpostiviestien palvelimen portti: 465 tai 587

Portit 143 ja 587 vastaavat deaktivoitua SSL-suojausta.
Portit 993 ja 465 vastaavat  aktivoitua SSL-suojausta.


- Lähtevän SMTP-palvelimen [autentikointi](#configuration_du_compte_e-mail_mutualise_sous_blackberry_partie_5_parametres_du_compte_e-mail) on aktivoitava.


|Portti|SSLaktivoitu|SSLdeaktivoitu|
|Saapuva|993|143|
|Lähtevä|465|587|



