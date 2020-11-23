---
deprecated: true
title: "OVH:n hallinnoiman verkkotunnuksen uudelleenohjaus"
slug: verkkotunnuksen-uudelleenohjaus
excerpt: Tutustu uudelleenohjauksen eri tyyppeihin ja opi tekemään sellainen OVH:n hallinnoimalle verkkotunnukselle
section: Yleistä
---

**Päivitetty 3.1.2018**

## Tavoite

Uudelleenohjauksella verkkotunnus voidaan ohjata uuteen kohteeseen. On olemassa erityyppisiä uudelleenohjauksia erilaisiin tarpeisiin.

**Tutustu uudelleenohjauksen eri tyyppeihin ja opi tekemään sellainen OVH:n hallinnoimalle verkkotunnukselle.**

## Edellytykset

- Olet kirjautunut [hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager){.external}
- Olet kirjautunut webhotelliisi (jos haluat lisätä [.htaccess-tiedoston](https://docs.ovh.com/fi/hosting/webhotelli_kaikki_mita_haluat_tietaa_htaccess-tiedostosta/){.external})

## Käytännössä

### Verkkotunnuksen uudelleenohjaus

Ennen uudelleenohjauksen luomista verkkotunnuksellesi on tärkeää ymmärtää sen hyödyt. Sen avulla verkkotunnuksesi voidaan ohjata uuteen kohteeseen, joka on useimmiten toinen verkkotunnus.

On olemassa useita tilanteita, jolloin uudelleenohjaus voi tulla kyseeseen. Tyypillisin on verkkosivun verkkotunnuksen muutos. Tässä tapauksessa uudelleenohjauksen avulla vanhalle sivulle tulevat vierailijat voidaan ohjata automaattisesti uudelle verkkotunnukselle.

Tämä toiminto voidaan toteuttaa useilla tavoilla:

- **OVH:n hallintapaneelissa**: voit määrittää konfiguroinninavustajan avulla uudelleenohjauksesi asetukset.

- **Menetelmällä, joka edellyttää ohjelmointia**: sinun on luotava itse uudelleenohjaus tiedostoon (yleensä *.htaccess*).

Tiedäthän, että uudelleenohjauksen asettaminen saattaa vaikuttaa verkkosivusi hakukonesijoitukseen. Kehotamme valppauteen toimenpiteissä, joita aiot suorittaa ja ottamaan tarvittaessa yhteyttä hakukoneoptimoinnin asiantuntijaan.

### Verkkotunnuksen uudelleenohjaus hallintapaneelin kautta

Kun olet kirjautunut [hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager){.external}, mene vasemmanpuoleisen valikon osioon `Verkkotunnukset`{.action} (*1* alla olevassa kuvassa) ja sitten välilehdelle `Uudelleenohjaus`{.action} (*2* alla olevassa kuvassa).

Taulukossa on näkyvissä verkkotunnuksesi aktiiviset uudelleenohjaukset.

Uudelleenohjauksen lisäämiseksi klikkaa painiketta `Lisää uudelleenohjaus`{.action} (*3* edellisessä kuvassa).

![Uudelleenohjausten pääsivu](images/create_redirection_global.png){.thumbnail}

Avautuvassa ikkunassa on määritettävä verkkotunnus (tai aliverkkotunnus), jonka haluat uudelleenohjata. Tämä on uudelleenohjauksen lähde.

![Uudelleenohjauksen lisäämisen ensimmäinen vaihe](images/adding_redirection_1.png){.thumbnail}

Sinun on nyt valittava, mihin kohteeseen haluat uudelleenohjata halutun verkkotunnuksen. Vaihtoehtoja on kaksi:

- **uudelleenohjaus verkko-osoitteeseen**

Uudelleenohjaa verkkotunnus toiseen verkkotunnukseen. Tämä ratkaisu on ihanteellinen, kun vaihdat verkkosivusi verkkotunnuksen.

- **uudelleenohjaus OVH:n palvelimelle tai muualle**

Muokkaa verkkotunnuksen nimipalvelimen konfiguraatiota toiseen kohteeseen (A-, AAAA- tai CNAME-kenttä). Tämä ratkaisu on ihanteellinen, jos verkkosivuasi ei ylläpidetä enää samassa paikassa, mutta verkkotunnus pysyy samana.
Voit myös tehdä tämän toiminnon, jos verkkotunnuksesi käyttää OVH:n konfiguraatiota, muokkaamalla sitä hallintapaneelissa (katso ohje [Miten DNS-aluetta muokataan?](https://docs.ovh.com/fi/domains/miten_dns-aluetta_muokataan/){.external}).

Tästä kohdasta eteenpäin tämä ohje keskittyy ainoastaan uudelleenohjaukseen **verkko-osoitteeseen**. Muissa vaihtoehdoissa ota yhteyttä palveluntarjoajaasi saadaksesi selville DNS-tietueet, joita on muokattava ennen jatkamista.

![Uudelleenohjauksen lisäämisen toinen vaihe](images/adding_redirection_2.png){.thumbnail}

Valitse **verkko-osoitteeseen** tapahtuvaa uudelleenohjausta varten uudelleenohjauksen tyyppi, jonka haluat asettaa. Vaihtoehtoja on kaksi:

|Uudelleenohjauksen tyyppi|Kuvaus|
|---|---|
|Näkyvä|Verkkotunnus, jonka syötät verkkoselaimeesi (vanha osoite) uudelleenohjataan uuteen verkkotunnukseen. Tämän seurauksena selainrivillä näkyvä osoite muuttuu uudeksi osoitteeksi.|
|Näkymätön|Verkkotunnusta, jonka syötät verkkoselaimeesi (vanha osoite) ei uudelleenohjata uuteen verkkotunnukseen. Pääset yhä vanhaan osoitteeseesi, joka näyttää *iframe*-nimisen jäljennöksen kautta uudella verkkotunnuksella ylläpidetyn sivun. Huomio, tämä toiminto ei ole välttämättä yhteensopiva kaikkien verkkosivujen kanssa ja se voi vaikuttaa sivun hakukonesijoitukseen.|

![Näkyvän tai näkymättömän uudelleenohjauksen valinta](images/redirection_3xx_1.png){.thumbnail}

#### Näkyvä uudelleenohjaus

On olemassa kaksi vaihtoehtoa koskien **näkyvää uudelleenohjausta**.

|Uudelleenohjauksen tyyppi|HTTP-koodi|Kuvaus|
|---|---|---|
|Pysyvästi näkyvä|301|Tämä on uudelleenohjauksen “standardityyppi”.|
|Tilapäisesti näkyvä|302|Tätä uudelleenohjauksen tyyppiä on käytettävä väliaikaisesti (tilapäisten ja kausittaisten tapahtumien yhteydessä). Hakukonesijoitus ei ole yhtä hyvä kuin tyypin 301 uudelleenohjauksessa.|

Kun olet tehnyt valintasi, syötä uudelleenohjauksen kohde (verkko-osoite, jonne uudelleenohjauksen halutaan vievän).

![Tilapäisesti tai pysyvästi näkyvän uudelleenohjauksen valinta](images/redirection_3xx_2.png){.thumbnail}

Kun tiedot on täytetty, klikkaa `Seuraava`{.action}. Varmista, että näytetyt tiedot ovat oikein ja klikkaa sitten `Vahvista`{.action}.

> [!primary]
>
> DNS-alueen muokkaus tarvitsee 4 - 24 tunnin propagaatioajan ennen kuin muutos on astunut täysin voimaan.
>

#### Näkymätön uudelleenohjaus

Täytä näkymätöntä uudelleenohjausta (HTTP-koodi 200) varten näkyvissä olevat tiedot (verkko-osoite ja lisävalinnat) ja klikkaa sitten `Seuraava`{.action}. Varmista, että näytetyt tiedot ovat oikein ennen kuin klikkaat `Vahvista`{.action}.

|Kentät|Kuvaus|
|---|---|
|Otsikko|Tämä on verkkosivusi otsikko. Se näkyy sivusi otsikkona esimerkiksi selaimen välilehdillä.|
|Hakusanat|Hakukonemoottorit voivat käyttää näitä avainsanoja sivun hakukonesijoittumisen määrittämisessä.|
|Kuvaus|Tämä on verkkosivusi kuvaus. Hakukonemoottorit voivat käyttää sitä tuloksissaan.|

> [!primary]
>
> DNS-alueen muokkaus tarvitsee 4 - 24 tunnin propagaatioajan ennen kuin muutos on astunut täysin voimaan.
>

![Näkymättömän uudelleenohjauksen luominen](images/invisible_redirection.png){.thumbnail}

### Verkkotunnuksen uudelleenohjaus .htaccess-tiedoston kautta

.htaccess-tiedostot ovat konfigurointitiedostoja, joissa komennot voidaan eritellä. Verkkopalvelimen (Apache) suorittaessa verkkosivusi koodia, komennot tulkataan ja suoritetaan. Komentojen joukkoon on mahdollisuus luoda uudelleenohjauksia.

.htaccess-tiedoston muokkaus saattaa vaatia teknistä osaamista siitä syystä, että virheellinen toiminto voi estää pääsyn yhdelle tai useammalle verkkosivulle, jos käytät webhotellissasi alahakemistoja. Jos jokin on epäselvää ja haluat saada apua .htaccess-tiedoston muokkauksessa, suosittelemme ottamaan yhteyttä asiaan erikoistuneeseen verkkopalveluiden kehittäjään.

Voit myös etsiä apua dokumentaatiostamme [Kaikki, mitä haluat tietää .htaccess-tiedostosta](https://docs.ovh.com/fi/hosting/webhotelli_kaikki_mita_haluat_tietaa_htaccess-tiedostosta/){.external}, josta saat muutamia vinkkejä tiedoston käyttöön liittyen.

> [!primary]
>
> Ennen kuin jatkat eteenpäin, suosittelemme **tekemään varmuuskopion .htaccess-tiedostosta** ennen kuin teet siinä muutoksia aiemman version palauttamiseksi tarvittaessa.
>

- **Redirect permanent**

Lähetetty koodi on HTTP 301 -koodi. Se ilmoittaa hakukonemoottorien roboteille, että linkit on päivitettävä uuteen osoitteeseen.

Tässä koko sivun uudelleenohjausta varten lisättävä koodi:

```
Redirect permanent / http://uusi-sivu.tld/
```

Hakemiston/tiedoston lataamista varten:

```
Redirect permanent /vanha_hakemisto http://uusi-sivu.tld/uusi_hakemisto.php
Redirect permanent /vanha_tiedosto.php http://sivu.tld/uusi_tiedosto.php
```

- **Redirect gone**

Jos tiedostoa ei ole enää olemassa, on parempi korvata viesti *404 sivua ei löydy* hieman tarkemman tyyppisellä viestillä *410 kohdetta ei ole enää olemassa*:

```
Redirect gone /supprime.html
```

- **Redirect seeother**

Jos muutat tiedoston päätettä, *seeother* mahdollistaa sen tyypin muokkauksen lähettämällä HTTP 303 -koodin:

```
Redirect seeother /esimerkki.doc http://sivu.tld/esimerkki.pdf
```

- **Redirect Temp**

Tilapäistä tyypin HTTP 302 -uudelleenohjausta voidaan käyttää, kun siirrät tilapäisesti tiedostosi toiselle sivulle:

```
Redirect temp / http://toinen_verkko_sivu.tld/sivu/
```

## Lisää aiheesta

[Kaikki, mitä haluat tietää .htaccess-tiedostosta.](https://docs.ovh.com/fi/hosting/webhotelli_kaikki_mita_haluat_tietaa_htaccess-tiedostosta/){.external}

[Miten DNS-aluetta muokataan?](https://docs.ovh.com/fi/domains/miten_dns-aluetta_muokataan/){.external}

Viesti käyttäjäyhteisömme kanssa osoitteessa [https://ovh-hosting.fi/community/foorumi](https://ovh-hosting.fi/community/foorumi){.external}.