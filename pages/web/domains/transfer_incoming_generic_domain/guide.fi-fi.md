---
title: Yleisen verkkotunnuksen siirto OVH:lle 
slug: yleisen-verkkotunnuksen-siirto 
excerpt: Opi tekemään yleisen verkkotunnuksen siirto OVH:lle 
section: Siirrot
---

**Päivitetty 15.01.2018**

## Tavoite

Verkkotunnusvälittäjää voi vaihtaa siirtämällä verkkotunnuksen. Siirto on mahdollista tehdä OVH:lle ja se voi kestää 1 - 10 päivää.

**Opi tekemään yleisen verkkotunnuksen siirto OVH:lle.**

## Edellytykset

- Sinulla on yleinen verkkotunnus (jonka pääte on esimerkiksi .com, .net tai .info) ja jota ylläpitää jokin muu verkkotunnusvälittäjä.
- Sinulla on oikeus pyytää verkkotunnuksen siirtoa. Omistajan ja admin-yhteyshenkilöiden on oltava tietoisia välittäjän vaihdosta.
- Verkkotunnuksen luomisesta on kulunut yli 61 päivää.
- Välittäjää ei ole vaihdettu tai verkkotunnuksen omistajaa muutettu viimeisen 61 päivän aikana.
- Verkkotunnuksen lukitus on poistettu.
- Sinulla on oltava hallussasi välittäjän vaihtoavain tai mahdollisuus sen saamiseen.
- *Whois*-tietokannassa olevien yhteyshenkilöiden sähköpostiosoitteiden on oltava oikein.

## Käytännössä

### 1. vaihe: Verkkotunnukseen liittyvien tietojen tarkistus

Verkkotunnustasi ylläpitää tällä hetkellä jokin verkkotunnusvälittäjä. Haluatko vaihtaa välittäjää ja tehdä OVH:sta uuden verkkotunnusvälittäjäsi?

Välittäjän vaihtaminen onnistuu siirtoprosessin kautta. Prosessissa on useita osallisia: OVH, nykyinen verkkotunnusvälittäjä sekä muita osapuolia. Prosessin aikana vaaditaan useita vahvistuksia. **On tärkeää tarkistaa, että verkkotunnukseen liitetyt tiedot ovat ajan tasalla.**

Se onnistuu käyttämällä *Whois*-työkaluamme tästä linkistä: [https://www.ovh-hosting.fi/cgi-bin/whois.pl](https://www.ovh-hosting.fi/cgi-bin/whois.pl){.external}. Tuloksena näytetään useita tietoja.

- **Jos tiedot ovat oikein**: avaa verkkotunnuksesi lukitus nykyisellä verkkotunnusvälittäjälläsi.

- **Jos tiedot eivät ole oikein tai eivät näy**: ota yhteyttä nykyiseen verkkotunnusvälittäjääsi tarkistaaksesi tai korjataksesi tiedot.

> [!primary]
>
> Jos et tiedä nykyistä verkkotunnusvälittäjääsi, voit saada vihjeen siitä riveiltä “Registrar”, jotka näkyvät *Whois-*[työkalun](https://www.ovh-hosting.fi/cgi-bin/whois.pl){.external} antamassa tuloksessa.
>

Yhteenveto siirron eri vaiheista.

|Vaihe|Kuvaus|Kuka toimii?|Missä tai miten?|Aikaraja| 
|---|---|---|---|---| 
|1|Poista verkkotunnuksesi lukitus|Verkkotunnuksen administraattori omistajan suostumuksella|Nykyisellä verkkotunnusvälittäjällä|Toimintasi mukaan| 
|2|Hae siirtokoodi|Verkkotunnuksesi administraattori omistajan suostumuksella|Nykyisellä verkkotunnusvälittäjällä|Toimintasi mukaan| 
|3|Pyydä verkkotunnuksen siirtoa|Kuka tahansa, jolla on hallussaan välittäjän vaihtoavain ja omistajan hyväksyntä|Uudella verkkotunnusvälittäjällä (esimerkiksi OVH)|Toimintasi mukaan| 
|4|Siirron vahvistuksen ensimmäinen vaihe|Verkkotunnuksen omistaja sekä uudella verkkotunnusvälittäjällä oleva administraattori|Vastaanotetun sähköpostiviestin kautta|Enintään viisi päivää| 
|5|Siirron vahvistuksen toinen vaihe|Nykyinen verkkotunnusvälittäjä|Verkkotunnuspäätettä hallinnoivan elimen tekemän pyynnön kautta|Enintään viisi päivää|

### 2. vaihe: Verkkotunnuksen lukituksen poistaminen

Kun tiedot on tarkistettu, on verkkotunnuksen lukitus avattava. Tämä menettely tapahtuu nykyisellä verkkotunnusvälittäjälläsi. Ota yhteys nykyiseen välittäjääsi saadaksesi tietoosi vaihtoon tarvittavat toimenpiteet.

Kun verkkotunnuksesi lukitus on avattu, verkkotunnusvälittäjän on toimitettava sinulle verkkotunnukseesi liittyvä välittäjän vaihtoavain. Välittäjän vaihtoavainta voidaan kutsua useilla erilaisilla nimillä: **siirtokoodi**, AuthCode**, **AuthInfo** tai **EPP-koodi**.

Huomaa, ettei OVH ole nykyinen verkkotunnusvälittäjäsi. Emme voi siis poistaa verkkotunnuksen lukitusta tai toimittaa sen vaihtoavainta.

> [!warning]
>
> Verkkotunnuksen lukituksen poistamisen jälkeen sinulla on seitsemän päivää aikaa käynnistää siirto OVH:lle. Tämän ajan umpeuduttua verkkotunnus lukittuu automaattisesti, mikäli verkkotunnusvälittäjän vaihtoa ei ole käynnistetty.
>

### 3. vaihe: Tilaa siirto OVH:lle

Nyt kun verkkotunnuksesi lukitus on poistettu ja sinulla on hallussasi vaihtoavain, voit pyytää siirtoa OVH:lle. Sitä varten sinun täytyy tehdä siirtotilaus [verkkosivuillamme](https://www.ovh-hosting.fi/){.external}.

Syötä verkkotunnuksesi ja seuraa sitten tilauksen vaiheita. Kun siirtokoodia pyydetään, syötä se verkkotunnuksesi vieressä olevaan laatikkoon. Jos sinulla ei ole siirtokoodia, voit rastittaa ruudun `Anna tunnistuskoodi myöhemmin`{.action}. Mahdollisuuksien rajoissa suosittelemme varmistamaan etukäteen, että pystyt hankkimaan siirtokoodin ennen tilauksen jatkamista. 

Tilauksen eri vaiheissa voit täydentää sitä [webhotellilla](https://www.ovh-hosting.fi/webhotelli/){.external}, muilla OVH:n ratkaisuilla tai valitsemalla nimipalvelimet. Nämä vaiheet voivat olla mielenkiintoisia erityisesti, jos verkkotunnuksesi siirto liittyy palveluidesi (verkkosivut ja sähköpostit) migraatioprosessiin OVH:lle. Ohje [Verkkosivun ja sähköpostien migraatio OVH:lle](https://docs.ovh.com/fi/hosting/) tarjoaa kokonaisnäkymän tässä tapauksessa tehtävistä toimista.

> [!warning]
>
> Kehotamme erityiseen tarkkaavaisuuteen nimipalvelinten valinnassa tilauksen yhteydessä. Jos verkkotunnustasi käytetään verkkosivua tai sähköpostiosoitteita varten, varmista, että annat verkkotunnuksesi tällä hetkellä käyttämät nimipalvelimet.
>

Kun tilauskaavake tulee näkyviin, maksa tilaus ja verkkotunnuksen siirto voi alkaa. Verkkotunnuksen siirto käynnistetään, kun maksusi on vastaanotettu. Verkkotunnuksesi päätteestä riippuen voi siirtoprosessia mahdollisesti seurata [hallintapaneelista](https://www.ovh.com/auth/?action=gotomanager){.external}.

### 4. vaihe: Vahvista siirto

Nyt kun siirto on käynnistetty, on käytävä läpi kaksi vahvistusvaihetta, jotta siirto saadaan päätökseen.

#### Ensimmäinen vahvistusvaihe

Tämä alkaa heti siirron alussa ja voi kestää enintään viisi päivää. Kaksi vahvistuspyyntöä lähetetään ensimmäisen vaiheen vahvistamiseksi.

|Kuka saa vahvistuspyynnön?|Mihin vahvistuspyyntö lähetetään?| 
|---|---| 
|Verkkotunnuksen omistaja|*Whois*-tietokantaan merkityn verkkotunnuksen omistajan sähköpostiosoitteeseen|
|OVH:lla tehdyn tilauksen yhteydessä määritetty administraattori|Administraattorin profiilissa OVH:lla ilmoitettuun sähköpostiosoitteeseen|

On olemassa useita mahdollisia vastausskenaarioita.

|Mahdolliset vastausskenaariot|Tapahtumien seuraus| 
|---|---| 
|Administraattorin ja omistajan vahvistus|Siirtyminen toiseen vahvistusvaiheeseen enintään 24 tunnin kuluessa|
|Vain yksi vahvistus (ei väliä kumpi kontakteista) ja toinen jättää vastaamatta|Siirtyminen toiseen vahvistusvaiheeseen viiden päivän kuluttua| 
|Ei vastausta kumpaankaan pyyntöön|Siirto hylätään viiden päivän kuluttua| 
|Yksi hylkäys (ei väliä kumpi kontakteista)|Siirto hylätään, jos yksikin kontakteista kieltää sen|

Molemmat kontaktit vahvistavat siirron OVH:n käyttöliittymässä. Sinne ohjaava linkki löytyy molemmille osapuolille lähetetystä sähköpostiviestistä. Tässä käyttöliittymässä on vahvistettava tai muokattava näytettyjä tietoja.

![verkkotunnus](images/domaintransfer_gTLD_validation.png){.thumbnail}

Mikäli siirto hylätään, varmista, että kaikki osapuolet ovat samaa mieltä asiasta ja, että sähköpostiosoitteet ovat ajan tasalla. Siirto voidaan käynnistää myöhemmin uudelleen [OVH:n hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager){.external} osiossa `Verkkotunnukset`{.action} ja `Käynnissä olevat operaatiot`{.action}.

#### Toinen vahvistusvaihe

Kun toinen vaihe on käynnistetty, nykyinen verkkotunnusvälittäjä (joka ei ole vielä OVH) vastaanottaa vahvistuspyynnön. On olemassa useita mahdollisia vastausskenaarioita.

|Mahdolliset vastausskenaariot| Tapahtumien seuraus| 
|---|---| 
|Nykyisen verkkotunnusvälittäjän vahvistus|Siirto tapahtuu enintään 24 tunnin kuluessa||Ei vastausta nykyiseltä verkkotunnusvälittäjältä|Siirto tapahtuu viiden päivän kuluessa| 
|Nykyisen verkkotunnusvälittäjän tekemä hylkäys|Siirto hylätään hylkäysilmoituksen vastaanottamisen jälkeen|

Jos nykyinen verkkotunnusvälittäjä hylkää pyynnön, kehotamme ottamaan yhteyttä siihen hylkäyksen syiden selvittämiseksi. Siirto voidaan käynnistää uudelleen [OVH:n hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager){.external} osiossa `Verkkotunnukset`{.action} ja `Käynnissä olevat operaatiot`{.action}.

### 5. vaihe: Verkkotunnuksesi hallinnointi

Kun siirtoprosessi on päättynyt, verkkotunnusta hallinnoidaan [OVH:n hallintapaneelistasi](https://www.ovh.com/auth/?action=gotomanager){.external}.

Tiedoksi, jokaisesta maksullisesta yleisen verkkotunnuksen siirrosta OVH:lle lisäämme verkkotunnukselle yhden ylimääräisen vuoden sen voimassaolon päättymispäivänä.

## Lue lisää aiheesta
[Verkkosivun ja sähköpostiosoitteiden migraatio OVH:lle](https://docs.ovh.com/fi/hosting/webhotellit_sivuston_ja_sahkopostien_siirto_ilman_palvelun_katkosta/){.external}.

Viesti käyttäjäyhteisömme kanssa osoitteessa [https://ovh-hosting.fi/community/foorumi](https://ovh-hosting.fi/community/foorumi.){.external}.