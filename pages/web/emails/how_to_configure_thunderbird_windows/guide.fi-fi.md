---
deprecated: true
title: 'OVH-sähköposti: Thunderbirdin konfigurointi'
excerpt: ''
slug: ovh-sahkoposti_thunderbirdin_konfigurointi
legacy_guide_number: g1297
---


## Vaihe 1: Aloitus
Käynnistä ensin Thunderbird[/ blue]. 

Näet tämän näkymän kun yhtään sähköpostitiliä ei ole otettu käyttöön. Muussa tapauksessa mene valikkoon lisätäksesi postitilin.

Valitse ”Sähköposti”[/ green] jatkaaksesi.

![](images/img_1227.jpg){.thumbnail}


## Vaihe 2: Aloitus (jatkoa)
Jatkaaksesi asennusta, valitse ”Ohita tämä kohta ja käytä olemassa olevaa osoitetta”.

![](images/img_1228.jpg){.thumbnail}


## Vaihe 2: Tilin luominen
Täydennä kentät:

”Nimi”: haluamasi nimi, joka näkyy muille.

”Sähköpostiosoite”: sähköpostiosoitteesi täydellisenä.

”Salasana”: [hallintapaneelissa](https://www.ovh-hosting.fi/managerv3/) sähköpostitilille määrittelemäsi salasana.

”Tallenna salasana”: Valitse tämä.

Thunderbird hakee sähköpostin asetukset ja ehdottaa kahta vaihtoehtoa: IMAP tai POP3.

Tässä esimerkissä käytetään IMAP-tiliä. POP-tilin määrittäminen on myös helppoa, ohjeet löytyvät tämän ohjeen lopusta.

Thunderbird tukee manuaalista konfiguraatiota, jonka löydät tästä ohjeesta, kohdasta ”Manuaaliset asetusmuutokset”

Klikkaa ”Jatka”  viimeistelläksesi.

![](images/img_1229.jpg){.thumbnail}


## Vaihe 4: Viimeistely
Tässä kohdassa sähköpostiosoitteesi on lisätty ja toiminnassa.

Näet loput ohjeesta kaikkine asetuksineen.

Tarkastellaksesi tilin yksityiskohtia valitse ”View settings for this account” klikattuasi sähköpostiosoitetta.

![](images/img_1230.jpg){.thumbnail}


## Tilin asetus
Täältä näet tilin yleiset tiedot.

Voit lisätä allekirjoitukset ja määritellä vastausosoitteesi. 

Voit myös katsoa ja muokata käytettävää SMTP-palvelinta, jota tilisi käyttää.

![](images/img_1231.jpg){.thumbnail}


## Saapuvan palvelimen asetukset
Tässä ikkunassa näet kaiken tiedon saapuvasta SMTP-palvelimesta.

Voit asettaa aikavälin miten usein uudet viestit haetaan ja hallita viestin poistamissääntöjä.

![](images/img_1232.jpg){.thumbnail}


## Kopiot & kansiot
Tällä tasolla näet asetukset eri tiedostoille, tiedostojen lähetykselle ja arkistoille.

![](images/img_1233.jpg){.thumbnail}


## Synkronointi ja tallennustila.
Täällä voit valita miten postit synkronoidaan ja milloin ne tuhotaan.

![](images/img_1234.jpg){.thumbnail}


## Lähtevä SMTP-palvelin
SMTP-palvelinasetuksien lisäys tai muokkaus on mahdollinen tässä vaiheessa

![](images/img_1235.jpg){.thumbnail}


## Lähtevä SMTP-palvelin (jatkoa)
Voit tarkastella muokattavia eri asetuksia valitsemalla ensin SMTP-palvelimen ja klikkaamalla ”Muokkaa”.


- Lähtevän SMTP-palvelimen autentikointi on aktivoitava.


Valitse autentikointitavaksi: Tavallinen salasana

![](images/img_1236.jpg){.thumbnail}

- Salasanalla tehtävä autentikointi on pakollinen asetus, jotta sähköpostinlähetys toimisi moitteettomasti SMTP-palvelimillamme.

- Jos autentikointia ei suoriteta salasanan avulla, Open SMTP-häiriötiketti voidaan avata, jossa ilmoitetaan, että "POP before SMTP" autentikointia ei tueta. Autentikointi salasanalla on pakollisesti aktivoitava sähköpostien lähettämiseksi.




## Tilin lisäys manuaalisesti
Näet tämän kun olet klikannut ”Manual config” (katso vaihe 3).

![](images/img_1237.jpg){.thumbnail}


## POP-konfigurointi
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


- Lähtevän SMTP-palvelimen [autentikointi](#parametres_des_comptes_parametres_du_serveur_sortant_smtp) on aktivoitava.


|Portti|SSLaktivoitu|SSLdeaktivoitu|
|Saapuva|995|110|
|Lähtevä|465|587|




## IMAP-konfigurointi
Ohje IMAP-tyyppisen postitilin käyttöön Thunderbirdille SSL aktivoituna tai deaktivoituna.

Sähköpostiosoite: sähköpostiosoite kokonaisuudessaan.
Salasana: salasana, joka on määritelty [hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie).
Käyttäjätunnus: sähköpostiosoite kokonaisuudessaan.
Saapuvan postin palvelin: saapuvien sähköpostiviestien palvelin: SSL0.OVH.NET
Saapuvan postin palvelimen portti: saapuvien sähköpostiviestien palvelimen portti: 993 tai 143
Lähtevän postin palvelin: lähtevien sähköpostiviestien palvelin: SSL0.OVH.NET
Saapuvan postin palvelimen portti: lähtevien sähköpostiviestien palvelimen portti: 465 tai 587

Portit 143 ja 587 ovat postitilin käytölle ilman SSL-suojausta.
Portit 993 ja 465 ovat postitilin käytölle SSL-suojaus aktivoituna.


- Lähtevän SMTP-palvelimen [autentikointi](#parametres_des_comptes_parametres_du_serveur_sortant_smtp) on aktivoitava.


|Portti|SSLaktivoitu|SSLdeaktivoitu|
|Saapuva|993|143|
|Lähtevä|465|587|




## Yleistä
Halutessasi voimme maksua vastaan määritellä sähköpostilaatikon puolestasi käyttämääsi sähköpostiohjelmaan. Voimme suorittaa muitakin sähköpostiin liittyviä toimenpiteitä.

Maksulliset toimenpiteet on eritelty seuraavassa linkissä:


- []({legacy}1683)


Katso ohjeesta, miten maksullista toimenpidettä pyydetään.

![](images/img_2501.jpg){.thumbnail}

