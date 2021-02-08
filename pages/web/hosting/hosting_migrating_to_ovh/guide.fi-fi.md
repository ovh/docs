---
deprecated: true
title: Verkkosivun ja sähköpostiosoitteiden migraatio OVH:lle
slug: sivun-migraatio-ovhlle
excerpt: Katso, kuinka oman sivun sekä sähköpostiosoitteiden migraatio tehdään OVH:lle ilman katkosta
section: Aluksi
---

**Päivitetty 14.02.2018**

## Tavoite

Tässä ohjeessa kerrotaan verkkosivun, yhden tai useamman tietokannan ja sähköpostiosoitteidesi migraation vaiheet miltä tahansa alustalta OVH:lle. Migraatiomenettely voi olla eri, jos haluat suorittaa migraation ilman katkosta.

**Katso, kuinka oman sivun sekä sähköpostiosoitteiden migraatio tehdään OVH:lle ilman katkosta.**

## Edellytykset

- Sinulla on valtuudet hallinnoida kyseistä verkkotunnusta.
- Sinulla on pääsy verkkosivun tiedostoihin.
- Sinulla on tarvittaessa pääsy verkkosivun tietokantaan.
- Sinulla on tiedot (käyttäjätunnus, salasana, palvelimet), joiden avulla voit kirjautua sähköpostiosoitteisiin.
- Olet kirjautunut [hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.

## Käytännössä

Verkkosivun ja sähköpostien migraatio OVH:lle vaatii tietyn migraatioprosessin seuraamista. Siihen kuuluu useita välivaiheita.

|Vaihe|Kuvaus| 
|---|---| 
|Webhotellin tilaus|Hanki OVH:n webhotelli, jossa ylläpidät sivuasi sekä hyödynnät sähköpostiosoitteita.| 
|Verkkosivun siirto|Siirrä sivu uuteen OVH:n webhotelliisi hakemalla sen täydellisen varmuuskopion.| 
|Sähköpostiosoitteiden siirto|Luomalla etukäteen samat sähköpostiosoitteet OVH:lle voit siirtää niiden sisällön vanhalta palveluntarjoajaltasi OVH:lle.| 
|Verkkotunnuksen DNS-konfiguraation muokkaaminen|Verkkotunnuksesi konfiguraatiota muuttamalla verkkotunnuksesi käyttää OVH:n webhotellia (verkkosivullasi sekä sähköpostiosoitteillasi) eikä enää vanhan palveluntarjoajasi palveluja.| 
|Verkkotunnuksen siirto|Vaihda verkkotunnusvälittäjäksesi OVH.| 

Vaiheiden järjestys voi olla eri verkkotunnuksesi verkkotunnusvälittäjästä riippuen.

> [!warning]
>
> Jotkut verkkotunnusvälittäjät katkaisevat verkkotunnuksesi nimipalvelimen selvittämisen, mikäli tämä on konfiguroitu heillä, heti kun siirtopyyntö ulospäin on vastaanotettu.
> Tämän seurauksena pääsy verkkotunnukseesi ja kaikkiin siitä riippuvaisiin palveluihin kuten verkkosivuusi ja sähköpostiosoitteeseesi estyy. Suosittelemme vahvasti ottamaan yhteyttä verkkotunnusvälittäjääsi varmistuaksesi verkkotunnusten siirtoa koskevista käytännöistä.
>

Tämän tilanteen huomioiden tarjolla on kaksi menettelytapaa:

- migraatio ilman palvelukatkosta
- migraatio, jossa palvelukatkos on mahdollinen

### Migraatio ilman palvelukatkosta

#### 1. vaihe: Webhotellin tilaus OVH:lta

Tilaa webhotelli [OVH:n](https://ovh-hosting.fi){.external} verkkosivulta. Varmista, ettet pyydä verkkotunnuksesi siirtoa. Se hoidetaan myöhemmin. Kun maksusi on vastaanotettu, webhotellisi asennus käynnistyy. Saat sähköpostitse vahvistuksen asennuksesta.

#### 2. vaihe: Verkkosivun siirto

Tähän kuuluu useita välivaiheita.

|Välivaihe|Kuvaus|Tieto|
|---|---|---|
|1|Verkkosivun varmuuskopion hakeminen|Kyseessä on verkkosivusi täydellinen varmuuskopio, joka sisältää tiedostot sekä (tarvittaessa) tietokannan. Tämä kattava varmuuskopio on välttämätön verkkosivusi siirtämiseksi OVH:lle.|
|2|Verkkosivun siirto verkkoon OVH:lla|Kirjaudu tallennustilaasi (FTP) tuodaksesi sieltä verkkosivusi tiedostot. Siirrä ne verkkoon asettamalle ne **“www”**-kansioon. FTP-tunnuksesi saat sähköpostitse.|
|3|OVH:n tietokannan luominen|Jos verkkosivusi toimii tietokannalla, sinun on [luotava uusi tietokanta OVH:lla](https://docs.ovh.com/fi/hosting/){.external} hallintapaneelisi[ kautta.|
|4|Tietokantojen tuominen|Tuo tietokantasi varmuuskopio käyttämällä [OVH:n tarjoamaa työkalua hallintapaneelissasi.](https://docs.ovh.com/fi/hosting/webhotellit_ohje_mysql-tietokannan_tuonnista/){.external}|
|5|Verkkosivun yhdistäminen uuteen tietokantaan|Vanhan tietokantasi tiedot ovat edelleen verkkosivusi konfigurointitiedostossa. Muokkaa tätä tiedostoa OVH:n tallennustilassasi syöttämällä sinne OVH:n tietokannan tiedot.|

Verkkotunnuksesi konfiguraatio ei ole muuttunut ja verkkosivusi näyttämiseen käytetty webhotelli on yhä nykyisen palveluntarjoajasi tarjoama.

#### 3. vaihe: Sähköpostiosoitteiden uudelleen luominen OVH:lla

Kun verkkosivu on siirretty, sinun on [luotava OVH:lla samat osoitteet](https://docs.ovh.com/fi/emails/webhotellit_ja_sahkopostit_ohje_postilaatikon_luomiseen/){.external}, joita käytät vanhalla palveluntarjoajallasi. Niillä täytyy olla samat nimet. Mene [hallintapaneelin](https://www.ovh.com/auth/){.external} vasemmassa laidassa olevassa valikossa kohtaan `Sähköpostit`{.action} ja sitten tilaamaasi webhotelliin (jolla on sama nimi kuin verkkotunnuksellasi). Seuraa vaiheita klikkaamalla painiketta `Luo sähköpostiosoite`{.action}.

Verkkotunnuksesi konfiguraatio ei ole muuttunut ja uusien viestien vastaanotto tapahtuu yhä nykyisellä palveluntarjoajallasi luoduilla sähköpostiosoitteilla. Sinun on edelleen käytettävä niitä viestiesi lähetystä varten.

#### 4\. vaihe: Muokkaa verkkotunnuksesi konfiguraatiota

Nyt kun verkkosivusi on siirretty ja sähköpostiosoitteesi on luotu uudelleen OVH:lla, on tarpeen muokata verkkotunnuksesi konfiguraatiota. Tämä tapahtuu muuttamalla verkkotunnuksesi nimipalvelimet OVH:n nimipalvelimiin (ne on lähetetty sähköpostitse ja lisäksi ne näkyvät [hallintapaneelissasi](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.) Tämä muokkaus vaikuttaa kahdella tapaa:

- **verkkotunnuksesi yhdistyy teknisesti OVH:n ratkaisuihin**: OVH:n webhotelliasi käytetään verkkosivusi näyttämiseen ja uusien viestien vastaanotto tapahtuu OVH:n sähköpostiosoitteilla.
- **estetään palvelukatkos**: jos verkkotunnusvälittäjäsi päättää katkaista oman nimipalvelinkonfiguraationsa kun siirrät verkkotunnuksesi, tällä ei ole vaikutusta, jos käytät jo OVH:n konfiguraatiota.

> [!warning]
>
> Nimipalvelinten muuttaminen tapahtuu nykyisellä verkkotunnusvälittäjälläsi ja tarvitaan 24 - 48 tunnin propagaatioaika ennen kuin muutos on astunut täysin voimaan.
>

#### 5. vaihe: Sähköpostiosoitteidesi sisällön siirtäminen

Tähän kuuluu useita välivaiheita.

|Välivaihe|Kuvaus|Tieto|
|---|---|---|
|1|Siirrä sähköpostiosoitteidesi sisältö OVH:lle|Käytä [OVH Mail Migrator (OMM)](https://omm.ovh.net/){.external} -työkalua, jolla voit kopioida vanhalle palveluntarjoajallesi rekisteröityjen sähköpostiosoitteidesi sisällön OVH:lla luotuihin sähköpostiosoitteisiin.|
|2|Sähköpostiosoitteiden käyttö|OVH:n sähköpostiosoitteesi ovat käytettävissä verkkosovelluksen ([selainposti](https://mail.ovh.net/){.external}) kautta. Jos olit määrittänyt jonkin osoitteistasi sähköpostiohjelmaan (esim. Outlook), sinun on konfiguroitava se uudelleen syöttämällä siihen [OVH:n nimipalvelimet](https://docs.ovh.com/fi/domains/webhotellit_yleista_nimipalvelimista/) vanhan palveluntarjoajan nimipalvelimien sijasta.|

#### 6. vaihe: Verkkotunnuksen siirto OVH:lle

Nyt jäljellä on enää verkkotunnuksesi siirto OVH:lle! Tähän kuuluu useita välivaiheita.

|Välivaihe|Kuvaus|Tieto|
|---|---|---|
|1|Poista verkkotunnuksesi lukitus|Verkkotunnuksen lukitus estää siirron toiselle verkkotunnusvälittäjälle kuten OVH:lle. On siis tarpeen poistaa lukitus etukäteen nykyisellä verkkotunnusvälittäjälläsi.|
|2|Välittäjänvaihtoavaimen hakeminen|Nykyinen verkkotunnusvälittäjäsi antaa sinulle vaihtoavaimen, kun poistat verkkotunnuksesi lukituksen.|
|3|Tee siirtotilaus OVH:lle|Tee siirtotilaus [OVH:n](https://ovh-hosting.fi){.external} verkkosivuilla. Syötä edellisessä vaiheessa saamasi välittäjänvaihtoavain.|
|4|Maksa tilaus|Kun maksusi on vastaanotettu, verkkotunnuksesi siirto käynnistyy.|
|5|Vahvista siirto tai odota siirron vahvistusta| Tämä vaihtelee verkkotunnuksesi päätteestä riippuen. Kun vahvistusta vaaditaan, lähetetään vahvistuspyyntö useimmiten sähköpostitse. Sähköposti sisältää toimintaohjeet. Seuraa ohjeita siirtopyynnön vahvistamiseksi.| 

Kun siirto on valmis, verkkosivusi, sähköpostiosoitteesi ja verkkotunnuksesi ovat siirtyneet OVH:lle ilman palvelukatkosta!

### Migraatio, jossa palvelukatkos on mahdollinen

#### 1. vaihe: Siirron ja webhotellin tilaus palveluillesi OVH:lta

Tähän kuuluu useita välivaiheita.

|Välivaihe|Kuvaus|Tieto|
|---|---|---|
|1|Poista verkkotunnuksesi lukitus|Verkkotunnuksen lukitus estää siirron toiselle verkkotunnusvälittäjälle kuten OVH:lle. On siis tarpeen poistaa lukitus etukäteen nykyisellä verkkotunnusvälittäjälläsi.|
|2|Välittäjänvaihtoavaimen hakeminen|Nykyinen verkkotunnusvälittäjäsi antaa sinulle vaihtoavaimen, kun poistat verkkotunnuksesi lukituksen.|
|3|Tilauksen tekeminen OVH:lla|Tee verkkotunnuksesi ja webhotellisi siirtotilaus [OVH:n](https://ovh.com/){.external} sivuilla. Syötä edellisessä vaiheessa saamasi välittäjänvaihtoavain. Syötä nykyisen palveluntarjoajasi nimipalvelimet.|
|4|Maksa tilaus|Kun maksusi on vastaanotettu, verkkotunnuksesi siirto sekä webhotellisi asennus käynnistyvät. **Nykyisen verkkotunnusvälittäjäsi omista käytännöistä riippuen nimipalvelimen selvitys saatetaan keskeyttää, minkä seurauksena kaikki siitä riippuvaiset palvelut (erityisesti verkkosivut ja sähköpostiosoitteet) eivät ole saatavilla.|
|5|Vahvista siirto tai odota siirron vahvistusta|Tämä vaihtelee verkkotunnuksesi päätteestä riippuen. Kun vahvistusta vaaditaan, lähetetään vahvistuspyyntö sähköpostitse. Sähköposti sisältää toimintaohjeet. Seuraa ohjeita siirtopyynnön vahvistamiseksi.|

#### 2. vaihe: Verkkosivun siirto

Tähän kuuluu useita välivaiheita.

|Välivaihe|Kuvaus|Tieto|
|---|---|---|
|1|Verkkosivun varmuuskopion hakeminen|Kyseessä on verkkosivusi täydellinen varmuuskopio, joka sisältää tiedostot sekä (tarvittaessa) tietokannan. Tämä kattava varmuuskopio on välttämätön verkkosivusi siirtämiseksi OVH:lle.|
|2|Verkkosivun siirto verkkoon OVH:lla|Kirjaudu tallennustilaasi (FTP) tuodaksesi sieltä verkkosivusi tiedostot. Siirrä ne verkkoon asettamalle ne **“www”**-kansioon. FTP-tunnuksesi saat sähköpostitse.|
|3|OVH:n tietokannan luominen|Jos verkkosivusi toimii tietokannalla, sinun on [luotava uusi tietokanta OVH:lla](https://docs.ovh.com/fi/hosting/){.external} [hallintapaneelisi](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} kautta.|
|4|Tietokantojen tuominen|Tuo tietokantasi varmuuskopio käyttämällä [OVH:n tarjoamaa työkalua hallintapaneelissasi.](https://docs.ovh.com/fi/hosting/webhotellit_ohje_mysql-tietokannan_tuonnista/){.external}|
|5|Verkkosivun yhdistäminen uuteen tietokantaan|Vanhan tietokantasi tiedot ovat edelleen verkkosivusi konfigurointitiedostossa. Muokkaa tätä tiedostoa OVH:n tallennustilassasi syöttämällä sinne OVH:n tietokannan tiedot.|

Verkkotunnuksesi konfiguraatio ei ole muuttunut ja verkkosivusi näyttämiseen käytetty webhotelli on yhä nykyisen palveluntarjoajasi tarjoama, jos nimipalvelimen selvitys on yhä aktiivinen.

#### 3. vaihe: Sähköpostiosoitteiden uudelleen luominen OVH:lla

**Kun sähköpostiosoitteesi siirto on päättynyt**, saat sähköpostiviestin ilmoituksena webhotelliisi liitetyn sähköpostipalvelun asennuksesta. Nyt sinun on [luotava OVH:lle uudelleen samat osoitteet](https://docs.ovh.com/fi/emails/webhotellit_ja_sahkopostit_ohje_postilaatikon_luomiseen/){.external}, joita käytät vanhalla palveluntarjoajallasi (nimien täytyy olla samat). Mene [hallintapaneelin](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} vasemmassa laidassa olevassa valikossa kohtaan `Sähköpostit`{.action} ja sitten tilaamaasi webhotelliin (jolla on sama nimi kuin verkkotunnuksellasi). Seuraa vaiheita klikkaamalla painiketta `Luo sähköpostiosoite`{.action}.

Verkkotunnuksesi konfiguraatio ei ole muuttunut ja uusien viestien vastaanotto tapahtuu yhä nykyisellä palveluntarjoajallasi luoduilla sähköpostiosoitteilla, jos nimipalvelimen selvitys on vielä toiminnassa. Jatka niiden käyttöä lähetyksiäsi varten.

#### 4. vaihe: Muokkaa verkkotunnuksesi konfiguraatiota

Nyt kun verkkosivusi on siirretty, sähköpostiosoitteesi on luotu uudelleen ja verkkotunnuksesi on siirretty OVH:lle, on tarpeen muokata verkkotunnuksesi konfiguraatiota. Tämä tapahtuu muuttamalla verkkotunnuksesi nimipalvelimet OVH:n nimipalvelimiin.

Muokkaus on tehtävä [hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}. Apua toimenpiteeseen löydät dokumentaatiosta *[Yleistä nimipalvelimista](https://docs.ovh.com/fi/domains/webhotellit_yleista_nimipalvelimista/){.external}*.

Tämä muokkaus vaikuttaa kahdella tapaa:

- **verkkotunnuksesi yhdistyy teknisesti OVH:n ratkaisuihin**: OVH:n webhotelliasi käytetään verkkosivusi näyttämiseen ja uusien viestien vastaanotto tapahtuu OVH:n sähköpostiosoitteilla.
- **korjaa palvelukatkoksen**: jos verkkotunnusvälittäjäsi on katkaissut oman nimipalvelunsa konfiguraation verkkotunnuksesi siirron yhteydessä, voidaan verkkotunnukseesi saada jälleen yhteys tällä toimenpiteellä.

> [!warning]
>
> Verkkotunnuksen nimipalvelinten muutos tarvitsee 24 - 48 tunnin propagaatioajan ennen kuin se on astunut täysin voimaan.
>

#### 5. vaihe: Sähköpostiosoitteidesi sisällön siirtäminen

Tähän kuuluu useita välivaiheita.

|Välivaihe|Kuvaus|Tieto|
|---|---|---|
|1|Siirrä sähköpostiosoitteidesi sisältö OVH:lle|Käytä [OVH Mail Migrator (OMM)](https://omm.ovh.net/){.external} -työkalua, jolla voit kopioida vanhalle palveluntarjoajallesi rekisteröityjen sähköpostiosoitteidesi sisällön OVH:lla luotuihin sähköpostiosoitteisiin. |
|2|Sähköpostiosoitteiden käyttö|OVH:n sähköpostiosoitteesi ovat käytettävissä verkkosovelluksen ([selainposti](https://mail.ovh.net/){.external}) kautta. Jos olit määrittänyt jonkin osoitteistasi sähköpostiohjelmalla (esim. Outlook), sinun on konfiguroitava se uudelleen [OVH:n nimipalvelinten](https://docs.ovh.com/fi/emails/webhotelli_yleista_tietoa_ovhn_jaetuista_sahkoposteista/) syöttämiseksi sinne vanhan palveluntarjoajan nimipalvelimien sijasta.|

Verkkosivusi, sähköpostiosoitteesi ja verkkotunnuksesi on nyt siirretty OVH:lle!

## Lue lisää aiheesta

[Yleistä tietoa jaetuista sähköposteista](https://docs.ovh.com/fi/emails/webhotelli_yleista_tietoa_ovhn_jaetuista_sahkoposteista/){.external}

[Yleistä nimipalvelimista](https://docs.ovh.com/fi/domains/webhotellit_yleista_nimipalvelimista/){.external}

[Postilaatikon luominen](https://docs.ovh.com/fi/emails/webhotellit_ja_sahkopostit_ohje_postilaatikon_luomiseen/){.external}

[MySQL-tietokannan tuominen](https://docs.ovh.com/fi/hosting/webhotellit_ohje_mysql-tietokannan_tuonnista/){.external}

[Tietokannan hallinta webhotellin kautta](https://docs.ovh.com/fi/hosting/){.external}

Viesti käyttäjäyhteisömme kanssa osoitteessa [https://ovh-hosting.fi/community/foorumi](https://ovh-hosting.fi/community/foorumi).