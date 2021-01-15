---
deprecated: true
title: 'OVH-sähköposti: asetukset Windows 8:lla'
excerpt: ''
slug: ovh-sahkoposti_asetukset_windows_8lla
legacy_guide_number: g1281
---


## Vaihe 1: aloitus
Aloittaaksesi käynnistä Windows 8:n sähköpostiohjelma. Käynnistettyäsi sähköpostiohjelman, sinun täytyy määritellä sähköpostiosoite ja postilaatikolle kuuluva salasana.

Mikäli sinulla on jo käytössä tili, tämä on käyttöliittymä, jonka näet.

Siirrä hiiri näytön oikealle puolelle ja valitse ”Asetukset”.

![](images/img_1142.jpg){.thumbnail}


## Vaihe 2: tilit
Klikkaa ”Tilit” lisätäksesi OVH-sähköpostitilisi.

![](images/img_1143.jpg){.thumbnail}


## Vaihe 3: tilin lisäys
Kun sähköpostitili on lisätty, pääset sen asetuksiin klikkaamalla sähköpostitiliä.

Klikkaa ”Lisää tili”-kuvaketta jatkaaksesi.

![](images/img_1144.jpg){.thumbnail}


## Vaihe 4: tilin tyyppi
Sinun täytyy valita sähköpostitilin tyyppi lisätäksesi sen. Klikkaa ”Muu tili”-kuvaketta jatkaaksesi.

![](images/img_1145.jpg){.thumbnail}


## Vaihe 5: asetukset
Syötä seuraavat tiedot:

”Sähköposti”: koko OVH:n sähköpostiosoitteesi.

”Salasana”: syötä salasanasi kuten määrittelit sen [url=”https://www.ovh-hosting.fi/managerv3”]hallintapaneelissa[/url] sähköpostitilillesi.

Klikkaa ”Yhdistä” jatkaaksesi.

![](images/img_1146.jpg){.thumbnail}


## Vaihe 6: lisäasetukset
Syötä seuraavat tiedot:

”Sähköposti”: koko sähköpostiosoite.

”Käyttäjätunnus”: käyttäjätunnuksena toimii sähköpostiosoite.

”Salasana”: salasana kuten määrittelit sen [url=”https://www.ovh-hosting.fi/managerv3”]hallintapaneelissa[/url] sähköpostitilillesi.

”Tuleva palvelin (IMAP)”: Palvelimen osoite on SSL0.OVH.NET. ”Portti” on 993.

”Tuleva palvelin edellyttää SSL-suojausta täytyy olla valittuna.

”Lähtevä palvelin (SMTP)”: PAlvelimen osoite on SSL0.OVH.NET. b]”Portti” on 465.

”Lähtevä palvelin edellyttää SSL-suojausta täytyy olla valittuna.

”Palvelin edellyttää tunnistautumista täytyy olla valittuna.

”Käytä samaa käyttäjätunnusta ja salasanaa lähetykseen ja vastaanottamiseen” täytyy olla valittuna.

Klikkaa ”Yhdistä” jatkaaksesi.

![](images/img_1147.jpg){.thumbnail}

- Lähtevän palvelimen autentikointi on tehtävä, jotta sähköpostinlähetys toimisi moitteettomasti SMTP-palvelimillamme.

- Jos autentikointia ei aktivoida, Open SMTP-häiriötiketti voidaan avata, jossa ilmoitetaan, että "POP before SMTP" autentikointia ei tueta. Lähtevän palvelimen autentikointi on aktivoitava sähköpostien lähettämiseksi.




## Vaihe 7: viimeistely
Sähköpostitilisi on nyt konfiguroitu IMAP-protokollalle ja pystyt lukemaan ja lähettämään sähköposteja.

Oikealla näkyvät webhotellin sähköpostien asetukset ([ks. ohjeen vaihe 3](#configuration_protocole_imap_partie_3_ajouter_un_compte)).

![](images/img_1148.jpg){.thumbnail}


## POP-asetukset
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


- Lähtevän SMTP-palvelimen [autentikointi](#configuration_protocole_imap_partie_6_parametres_avances) on aktivoitava.


|Portti|SSLaktiivinen|SSLdeaktivoitu|
|Saapuva|995|110|
|Lähtevä|465|587|




## IMAP-asetukset
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


- Lähtevän SMTP-palvelimen [autentikointi](#configuration_protocole_imap_partie_6_parametres_avances) on aktivoitava.


|Portti|SSLaktiivinen|SSLdeaktivoitu|
|Saapuva|993|143|
|Lähtevä|465|587|




## Yleistä
Halutessasi voimme maksua vastaan määritellä sähköpostilaatikon puolestasi käyttämääsi sähköpostiohjelmaan. Voimme suorittaa muitakin sähköpostiin liittyviä toimenpiteitä.

Maksulliset toimenpiteet on eritelty seuraavassa linkissä:


- []({legacy}1683)


Katso ohjeesta, miten maksullista toimenpidettä pyydetään.

![](images/img_2500.jpg){.thumbnail}

