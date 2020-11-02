---
deprecated: true
title: 'Sähköposti: konfigurointiohje Thunderbird Mac'
excerpt: ''
slug: sahkoposti_konfigurointiohje_thunderbird_mac
legacy_guide_number: g1911
---


## 1. Vaihe: Käynnistys
Mene ensin Mac-käyttöjärjestelmääsi asennettuun "Thunderbird"-sovellukseen.

Näkyviin tule oletuksena tämä käyttöliittymä mikäli sinulla ei ole konfiguroitua sähköpostiosoitetta. Mikäli näin ei ole, mene valikkoon ja käynnistä uuden tilin lisääminen.

Seurataksesi sähköpostitilin asennusta, valitse "Ohita tämä vaihe ja käytä olemassa olevaa osoitettani"

![](images/img_2856.jpg){.thumbnail}


## 2. Vaihe: Tilin luominen
"Täydellinen nimesi": täytä tähän haluamasi näyttönimi.

"Sähköpostiosoite": sähköpostiosoite kokonaisuudessaan.

"Salasana": jaetulle sähköpostille hallintapaneelissa määritetty salasana.

"Muista salasana": ruksaa tämä vaihtoehto.

Klikkaa "Jatka" jatkaaksesi asennusvaiheita.

![](images/img_2857.jpg){.thumbnail}


## 3. Vaihe: Tilin luominen (jatkoa)
Thunderbird kerää sähköpostiosoitteen asetukset ja ehdottaa kahta mahdollista konfiguraatiota: IMAP tai POP3.

Esimerkissä tilille valitaan IMAP-konfiguraatio, mutta on aivan mahdollista valita myös POP-konfiguraatio. Tämä ohjeen lopussa on tiedot POP3-tilin konfiguraatiota varten.


Huomaa, että Thunderbird ehdottaa yhtä manuaalista konfiguraatiota.

Klikkaa blue]"Manuaalinen konfiguraatio" jatkaasesi asennusta.

![](images/img_2858.jpg){.thumbnail}


## 4. Vaihe: Palvelimen asetusten konfigurointi
Tarkisra, että asetukset on syötetty oikein:
Sisään tulevan palvelimen ensimmäiselle riville:
Saapuva palvelin: IMAP
Palvelimen hostnimi:
SSL0.OVH.NET
Portti: 993
SSL: SSL/TLS
Tunnistautuminen: Normaali salasana

![](images/img_2859.jpg){.thumbnail}
Toisella rivillä Lähtevä palvelin:
Lähtevä palvelin: SMTP
Palvelimen hostnimi:
SSL0.OVH.NET
Portti: 465
SSL: SSL/TLS
Tunnistautuminen: Salasana
Saapuvan/lähtevän palvelimen tunniste: sähköpostiosoitteesi kokonaisuudessaan
Klikkaa "Lopeta" viimeistelläksi asennuksen.


## 5. Vaihe: Palveliment asetukset& ulosmenevä palvelin (SMTP)
Tili on nyt asennettu ja voit nyt löytää erilaiset palvelimen asetukset.

Klikkaa [oragen]"Lähtevä palvelin (SMTP) varmistaaksesi lähtevälle palvelimelle syötetyt tiedot.

![](images/img_2860.jpg){.thumbnail}


## 6. Vaihe: Palveliment asetukset& ulosmenevä palvelin (SMTP)jatkoa
Tässä syötettävät SMTP asetukset:
Palvelimen nimi: SSL0.OVH.NET
Port: 465
Yhteyden suojaus: SSL/TLS
Tunnistautumis menetelmä: Normaali salasana
Käyttäjätunnus: sähköpostiosoitteesi kokonaisuudessaan

Klikkaa "Ok" vahvistaaksesi SMTP-tiedot.

![](images/img_2861.jpg){.thumbnail}


## POP-konfiguraatio
Tässä tarpeelliset tiedot POP-sähköpostitilin konfigurointia varten.

POP-konfigurointi aktivoidulla SSL-suojauksella tai deaktivoidulla:

Sähköpostiosoite: Jaettu sähköpostiosoite kokonaisuudessaan.
Salasana: Salasana, jonka olet määrittänyt [hallintapaneelissa](https://www.ovh.com/managerv/).
Käyttäjätunnus: Täydellinen sähköpostiosoitteesi.
Saapuva palvelin: Saapuva sähköpostipalvelin: SSL0.OVH.NET
Saapuvan palvelimen portti: Saapuvan palvelimen portti: 995 tai 110
Lähtevä palvelin: Lähtevä sähköpostipalvelin: SSL0.OVH.NET
Lähtevän palvelimen portti: Lähtevän palvelimen portti: 465 tai 587

Portit 110 ja 587 vastaavat deaktivoitua SSL-suojausta. Portit 995 ja 465 vastaavat aktivoitua SSL-suojausta.


- Lähtevän SMTP-palvelimen tunnistautuminen on ehdottomasti aktivoitava [url=#tilin_asetukset_lahtevan_smtp_palvelimen_asetukset].


|Portit|SSLaktiivinen|SSLdeaktivoitu|
|Saapuva|995|110|
|Lähtevä|465|587|




## IMAP-konfiguraatio
Tässä tarpeelliset tiedot IMAP-sähköpostitilin konfigurointia varten.

IMAP-konfigurointi aktivoidulla SSL-suojauksella tai deaktivoidulla:

Sähköpostiosoite: Jaettu sähköpostiosoite kokonaisuudessaan.
Salasana: Salasana, jonka olet määrittänyt [hallintapaneelissa](https://www.ovh.com/managerv/).
Käyttäjätunnus: Täydellinen sähköpostiosoitteesi.
Saapuva palvelin: Saapuva sähköpostipalvelin: SSL0.OVH.NET
Saapuvan palvelimen portti: Saapuvan palvelimen portti: 993 tai 143
Lähtevä palvelin: Lähtevä sähköpostipalvelin: SSL0.OVH.NET
Lähtevän palvelimen portti: Lähtevän palvelimen portti: 465 tai 587

Portit 143 ja 587 vastaavat deaktivoitua SSL-suojausta. Portit 993 ja 465 vastaavat aktivoitua SSL-suojausta.


- Lähtevän SMTP-palvelimen tunnistautuminen on ehdottomasti aktivoitava [url=#tilin_asetukset_lahtevan_smtp_palvelimen_asetukset].


|Portit|SSLaktiivinen|SSLdeaktivoitu|
|Saapuva|993|143|
|Lähtevä|465|587|



