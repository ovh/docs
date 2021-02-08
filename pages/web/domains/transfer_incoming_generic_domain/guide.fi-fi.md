---
deprecated: true
title: 'Verkkotunnuksen siirto OVH:lle'
slug: yleisen-verkkotunnuksen-siirto
excerpt: 'Opi tekemään verkkotunnuksen siirto OVH:lle.'
section: Siirto
order: 1
---

**Päivitetty 5.9.2018**

## Tavoite

Verkkotunnusta siirtämällä voidaan vaihtaa sen verkkotunnusvälittäjää. Siirto on mahdollista tehdä OVH:lle ja se voi kestää 1 - 10 päivää.

**Opi tekemään verkkotunnuksen siirto OVH:lle.**

## Edellytykset

- Sinulla on verkkotunnus toisella verkkotunnusvälittäjällä.
- Sinulla on oikeus pyytää verkkotunnuksen siirtoa. Omistajan ja admin-yhteyshenkilöiden on oltava tietoisia välittäjän vaihdosta.
- Sinulla on oltava hallussasi välittäjänvaihtoavain tai mahdollisuus sen saamiseen.
- Verkkotunnuksen luomisesta on kulunut yli 60 päivää.
- Välittäjää ei ole vaihdettu tai verkkotunnuksen omistajaa muutettu viimeisen 60 päivän aikana.
- Verkkotunnuksen lukitus on poistettu.

## Käytännössä

Verkkotunnustasi ylläpitää tällä hetkellä jokin verkkotunnusvälittäjä. Haluatko antaa tämän tehtävän OVH:lle? Välittäjän vaihtaminen onnistuu siirtoprosessin kautta.

Tämä toimenpide koostuu useasta vaiheesta, joiden aikana osallisina on eri tahoja: nykyinen verkkotunnusvälittäjäsi, OVH sekä muita osapuolia. Alla olevan taulukon avulla voit ymmärtää paremmin siirron kulun.

|Vaihe|Kuvaus|Kuka toimii?|Missä?|Aikaraja|
|---|---|---|---|---|
|1|Verkkotunnukseen liittyvien tietojen tarkistaminen|Verkkotunnuksen administraattori|Nykyisellä verkkotunnusvälittäjällä|Toimintasi mukaan|
|2|Verkkotunnuksesi lukituksen poistaminen ja siirtokoodin hakeminen|Verkkotunnuksen administraattori omistajan suostumuksella|Nykyisellä verkkotunnusvälittäjällä|Toimintasi mukaan|
|3|Verkkotunnuksen siirron pyytäminen|Kuka tahansa, jolla on hallussaan välittäjänvaihtoavain ja aina omistajan hyväksyntä|Uudella verkkotunnusvälittäjällä (esim. OVH)|Toimintasi mukaan|
|4|Siirron vahvistuksen ensimmäisen vaiheen suorittaminen|Verkkotunnuksen omistaja sekä uudella verkkotunnusvälittäjällä oleva administraattori|Vastaanotetun sähköpostiviestin kautta|Enintään viisi päivää|
|5|Siirron vahvistuksen toisen vaiheen suorittaminen|Nykyinen verkkotunnusvälittäjä|Verkkotunnuspäätettä hallinnoivan elimen tekemän pyynnön kautta|Enintään viisi päivää|

> [!warning]
>
> Tämä menettely pätee suurimpaan osaan siirroista. Se voi kuitenkin olla erilainen verkkotunnuksesi päätteestä riippuen. Suosittelemme tarkistamaan verkkotunnuspäätteesi tiedot, sitä koskevalta sivulta tätä linkkiä käyttäen: <https://www.ovh-hosting.fi/verkkotunnukset/hinnat/>.
>

### 1. vaihe: Verkkotunnukseen liittyvien tietojen tarkistus

**Aluksi on tärkeää tarkistaa, että verkkotunnukseen liitetyt tiedot ovat ajan tasalla.** *Euroopan parlamentin tietosuoja-asetuksen* täytäntöönpanon jälkeen *WHOIS*-rekisterissä on näkyvissä hyvin vähän tietoja. Suosittelemme siis tutustumaan verkkotunnuksesi tietoihin nykyisellä verkkotunnusvälittäjälläsi.

- **Jos tiedot ovat oikein**: siirry tämän ohjeen seuraavaan vaiheeseen.

- **Jos tiedot eivät ole oikein tai eivät näy**: ota yhteyttä nykyiseen verkkotunnusvälittäjääsi tarkistaaksesi tai korjataksesi tiedot.

> [!primary]
>
> Jos et tiedä nykyistä verkkotunnusvälittäjääsi, voit saada vihjeen siitä riveiltä “Registrar”, jotka näkyvät *WHOIS-*[työkalun](https://www.ovh-hosting.fi/cgi-bin/whois.pl){.external} antamassa tuloksessa.
>

### 2. vaihe: Poista verkkotunnuksesi lukitus ja hae siirtokoodi

Kun tiedot on tarkistettu, on verkkotunnuksen lukitus avattava. Tämä menettely tapahtuu ainoastaan nykyisellä verkkotunnusvälittäjälläsi. Ota yhteys nykyiseen välittäjääsi saadaksesi tietoosi vaihtoon tarvittavat toimenpiteet.

Kun verkkotunnuksesi lukitus on avattu, verkkotunnusvälittäjän on toimitettava sinulle verkkotunnukseesi liittyvä välittäjän vaihtoavain. Välittäjän vaihtoavainta voidaan kutsua useilla erilaisilla nimillä: **siirtokoodi**, AuthCode**, **AuthInfo** tai **EPP-koodi**.

Huomaa, ettei OVH ole nykyinen verkkotunnusvälittäjäsi. Emme voi siis poistaa verkkotunnuksen lukitusta tai toimittaa sen vaihtoavainta.

> [!warning]
>
> Verkkotunnuksesi lukituksen poistamisesta alkaen on seitsemän päivää aikaa siirron tekemiseen OVH:lle. Tämän jälkeen verkkotunnus lukittuu automaattisesti uudelleen, ellei yhtään siirtopyyntöä ole tehty.
>

### 3. vaihe: Pyydä verkkotunnuksen siirtoa

Nyt kun verkkotunnuksesi lukitus on poistettu ja sinulla on hallussasi vaihtoavain, voit pyytää siirtoa OVH:lle. Sitä varten sinun täytyy tehdä siirtotilaus [verkkosivuillamme](https://www.ovh-hosting.fi/){.external}. Syötä verkkotunnuksesi ja seuraa sitten tilauksen vaiheita.

Kun siirtokoodia pyydetään, syötä se verkkotunnuksesi vieressä olevaan laatikkoon. Jos sinulla ei ole siirtokoodia, voit rastittaa ruudun `Anna tunnistuskoodi myöhemmin`{.action}. Suosittelemme kuitenkin varmistamaan, että pystyt hankkimaan siirtokoodin ennen tilauksen jatkamista.

Sinulla on mahdollisuus täydentää tilaustasi [webhotellituotteella](https://www.ovh-hosting.fi/webhotelli/){.external} tai muilla OVH:n ratkaisuilla. Nämä voivat olla kiinnostavia erityisesti, jos verkkotunnuksesi siirto liittyy palveluidesi migraatioprosessiin. Ohje [Verkkosivun ja sähköpostien migraatio OVH:lle](https://docs.ovh.com/fi/hosting/sivun-migraatio-ovhlle/){.external} tarjoaa kokonaisnäkymän tässä tapauksessa tehtävistä toimista.

> [!warning]
>
> Tilauksen aikana kehotamme erityiseen tarkkaavaisuuteen koskien:
>
> - **verkkotunnuksen omistajan tietoja**: EU:n tietosuoja-asetuksen tultua täytäntöön on varmistettava, että antamasi omistajan tiedot ovat samat kuin nykyisellä verkkotunnusvälittäjällä välttääksesi epäilyn verkkotunnusvarkaudesta.
>
> - **nimipalvelinten valintaa**: jos verkkotunnustasi käytetään tällä hetkellä verkkosivulla tai sähköpostiosoitteissa, ilmoita niiden nimipalvelimet palvelukatkoksen välttämiseksi.  
>

Kun tilauskaavake tulee näkyviin, maksa tilaus, jotta verkkotunnuksen siirto voi alkaa. Verkkotunnuksen siirto käynnistetään ainoastaan, kun maksusi on vastaanotettu. Tämän jälkeen voit seurata siirtoprosessia milloin tahansa [hallintapaneelisi](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} kautta osiossa `Verkkotunnukset`{.action} ja siellä `Käynnissä olevat operaatiot`{.action}.

### 4. vaihe: Suorita siirron vahvistuksen ensimmäinen vaihe

Nyt kun siirto on käynnistetty, on käytävä läpi kaksi vahvistusvaihetta. Ensimmäinen kestää enintään viisi päivää. Se alkaa heti siirron alussa kahden vahvistuspyynnön lähettämisellä. 

|Kuka saa vahvistuspyynnön?|Mihin vahvistuspyyntö lähetetään?|
|---|---|
|Verkkotunnuksen omistaja|*Whois-tietokantaan* merkityn verkkotunnuksen omistajan sähköpostiosoitteeseen, mikäli se on näkyvissä. Mikäli näin ei ole, käytetään OVH:n tilauksen yhteydessä annettua sähköpostiosoitetta.|
|OVH:n tilauksen yhteydessä administraattoriksi merkitty henkilö|Sähköpostiosoitteeseen, joka on merkitty administraattorin profiiliin OVH:lla|

Molemmat kontaktit vahvistavat siirron OVH:n käyttöliittymässä. Linkki tähän löytyy lähetetyistä sähköpostiviesteistä. 

![verkkotunnus](images/domaintransfer_gTLD_validation.png){.thumbnail}

On olemassa useita mahdollisia skenaarioita vastauksista riippuen.

|Skenaariot|Tapahtumien seuraus|
|---|---|
|Omistajan ja administraattorin vahvistus|Siirtyminen toiseen vahvistusvaiheeseen 24 tunnin kuluessa|
|Vain yksi vahvistus (ei väliä kumpi kontakteista) ja toinen ilman vastausta|Siirtyminen toiseen vahvistusvaiheeseen viiden päivän kuluessa|
|Ei vastausta kumpaankaan vahvistuspyyntöön|Siirtyminen toiseen vahvistusvaiheeseen viiden päivän kuluessa|
|Yksi hylkäys (ei väliä kumpi kontakteista)|Siirto hylätään, jos yksikin kontakteista kieltää sen|

Mikäli siirto hylätään, varmista, että kaikki osapuolet ovat samaa mieltä asiasta ja, että sähköpostiosoitteet ovat ajan tasalla. Siirto voidaan käynnistää myöhemmin uudelleen [OVH:n hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} osiossa `Verkkotunnukset`{.action} ja `Käynnissä olevat operaatiot`{.action}.

### 5. vaihe: Suorita siirron vahvistuksen toinen vaihe

Kun toinen vaihe on käynnistetty, nykyinen verkkotunnusvälittäjä (joka ei ole vielä OVH) vastaanottaa vahvistuspyynnön. On olemassa useita mahdollisia skenaarioita vastauksista riippuen.

|Skenaariot|Tapahtumien seuraus|
|---|---|
|Nykyinen verkkotunnusvälittäjä antaa vahvistuksen|Siirto tapahtuu 24 tunnin kuluessa|
|Ei vastausta nykyiseltä verkkotunnusvälittäjältä|Siirto tapahtuu viiden päivän kuluessa|
|Nykyinen verkkotunnusvälittäjä hylkää siirron|Siirto hylätään, jos yksikin osapuoli kieltää sen|

Jos nykyinen verkkotunnusvälittäjä hylkää pyynnön, kehotamme ottamaan tähän yhteyttä hylkäyksen syiden selvittämiseksi. Siirto voidaan käynnistää uudelleen [OVH:n hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} osiossa `Verkkotunnukset`{.action} ja `Käynnissä olevat operaatiot`{.action}.

### 6. vaihe: Verkkotunnuksesi hallinnointi OVH:lla

Siirtomenettelyn lopussa voit hallinnoida verkkotunnustasi [OVH:n hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.

Sinne päästäksesi klikkaa, sisään kirjauduttuasi, hallintapaneelin vasemmassa reunassa olevassa valikossa kohtaa `Verkkotunnukset`{.action} ja valitse tämän jälkeen kyseessä oleva verkkotunnus.

## Lue lisää aiheesta

[Verkkosivun ja sähköpostiosoitteiden migraatio OVH:lle](https://docs.ovh.com/fi/hosting/sivun-migraatio-ovhlle/){.external}

Viesti käyttäjäyhteisömme kanssa osoitteessa [https://community.ovh.com/en](https://community.ovh.com/en/){.external}.