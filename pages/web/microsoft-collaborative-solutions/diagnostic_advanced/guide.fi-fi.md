---
deprecated: true
title: 'Exchange Diagnostiikka: Mitä tehdä virhetilanteessa?'
excerpt: 'Exchange Diagnostiikka: Mitä tehdä virhetilanteessa?'
slug: exchange_diagnostiikka_mita_tehda_virhetilanteessa
legacy_guide_number: g2277
---


## Diagnostiikan toteutus
Mene hallintapaneeliin tästä linkistä: [Hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie).

Kun olet kirjautunut, valitse vasemmanpuoleisesta sarakkaeesta valikko Microsoft ja sitten Echxhange-palvelu.

![](images/img_4450.jpg){.thumbnail}
Klikkaa sitten kuvaketta "Diagnostiikka", sinun on syötettävä Exchange-sähköpostitilisi  ja sitten salasana diagnostiikan käynnistämistä varten.

Exchange-diagnostiika  voi kestää 3 - 10 minuuttia.

![](images/img_4451.jpg){.thumbnail}
Tässä esimerkki diagnostiiikan tuloksista Exchange-tilillä:

Mahdolliset toiminnat:


- Uusi diagnostiikka: Käynnistä diagnostiikka uudestaan

- Luo avustuspyyntö: voit asiakastukeemme tiketin, johon diagnostiikan tulos sisällytetään



![](images/img_4471.jpg){.thumbnail}


## Virheitä diagnostiikassa?
Esittelemme nyt jokaisen mahdollisen virheen avuksi ongelman ratkaisuun:


- HUOM: Tili on lukittu rospakostin lähettämisen vuoksi:


Tämä tarkoittaa sitä, että sähköpostiviestien lähetys tilitäsi on tilapäisesti poistettu käytöstä. Tällä ei ole vaikutusta viestien vastaanottoon.

Kun tilisi on lukittu roskapostin vuoski, tämä näkyy Exchange-palvelussasi sähköpostitiliosiossa. Merkintä SPAM on ilmoitettu. Voit klikata sitä, jotta sinut ohjataan lukituksen johdosta saamaasi sähköpostiviestiin.

Tähän viestiin täytyy vastata, jotta tilin lukituksen  purkaminen voidaan toteuttaa.

![](images/img_4453.jpg){.thumbnail}

- HUOM: Tilin tilaus on vanhentunut:


Tässä tapauksessa sopimuksesi ei ole enää voimassa. Sähköpostien lähetys ja vastaanotto on poistettu käytöstä. On otettava yhteyttä asiakastukeen palvelun uudellenaktivoimiseksi.

- HUOM: Tili on lukittu turvallisuussyistä:


Exchange-palvelussa on mahdollista määritellä turvallisuusperiaatteet. Tämä voi johtaa tilin lukkiutumiseen joksikin ajaksi turvallisuuspolitiikan konfiguroinnin aikana. 

Voit päättää, että tili lukittuu muutaman epäonnistuneen kirjautumisyrityksen jälkeen tietyksi ajaksi, jonka voit itse määrittää. 

Jos tili lukittuu tässä kohtaa, voit joko odottaa kunnes määritetty aika on kulunut ja tili avautuu, tai ottaa yhteyttä Exchangen tekniseen tukeen luomalla avustuspyyntö.

- HUOMIO: Tunnistautuminen webmailiin epäonnistui:


Tämä voi johtua virheellisestä salasanasta, joka on syötetty diagnostiikan toteutusta varten. Tässä tapauksessa voit käynnistää diagnostiikan uudestaan.

Voit myös päivittää salasanasi Exchange-palvelussa, kuvakkeessa sähköpostitili ja käynnistää sitten diagnostiikaan uudelleen. Mikäli ongelma jatkuu edelleen, voit luoda avustuspyynnön.

- HUOMIO: Verkkotunnuksen MX-rekisteröinti ei ole hyväksyttävä 


Tämä virhe kertoo ettei sähköpostiviestien vastaanottaminen ole mahdollista. Se on myös yhteydessä tähän virheeseen: HUOM: Testiviestiä ei vastaanotettu.

Tässä hyväksytyt MX-palvelimet Exchange-tuotteelle:


- Pelkkä Exchange : mx1.mail.ovh.net
- Exchange + OVH:n ylläpitämä E-mail pop/imap : mx1.mail.ovh.net
- Exchange + OVH:n ulkopuolinen E-mail pop/imap : ex.mail.ovh.net ou ex2.mail.ovh.net



-  HUOM: Verkkotunnuksen SRV:rekisteröinti ei ole hyväksytty:


SRV-rekisteröintiä tarvitaan Exchange-tilin automaattiseen konfiguraatioon yhteensopivassa sähköpostiohjelmassa kuten Outlook 2010, 2013 ja 2016.

Voit tarkistaa SRV-kenttäsi verkkotunnuksesi DNS-alueelta.

Tässä Exchange-tuotteen vaatima SRV-kenttä:

|Prioriteetti|0|
|Paino|0|
|Portti|443|
|Juuri Hosted-tuote| ex.mail.ovh.net tai ex2.mail.ovh.net |
|Juuri Private-tuote| Hostisi-nimi|



- HUOM: Testisähköpostia ei voitu lähettää tililtä


Tämä virhe kertoo, ettei sähköpostitilitäsi voi lähettää viestejä.

Siihen voi olla useita syitä:


- Tilisi on jäädytetty
- Antamasi salasana ei ole oikein
- Tilisi on estetty roskapostin lähettämisen vuoksi
- Häiriö Exchange-infrastruktuurissa


Tässä tapauksessa, katso yllä olevia ohjeita virheen korjaamiseksi tai tee avustuspyyntö diganostiikkaa seuraamalla.

