---
deprecated: true
title: 'Verkkosivun siirto verkkoon webhotellissa'
slug: verkkosivun-siirto-verkkoon
excerpt: 'Opi siirtämään verkkosivu verkkoon OVH:n webhotellissa'
section: Aluksi
order: 2
---

**Päivitetty 20.6.2018**

## Tavoite

Verkossa on olemassa valtava määrä verkkosivuja. Olipa kyse blogin tai verkkokaupan perustamisesta, kiinnostuksen kohteen jakamisesta tai liiketoiminnan edistämisestä, [OVH:n webhotellilla](https://www.ovh-hosting.fi/webhotelli/){.external} voit ylläpitää haluamiasi verkkosivuja kunhan se on yhteensopiva [infrastruktuuriemme konfiguraation](https://webhosting-infos.hosting.ovh.net){.external} kanssa.

**Opi siirtämään verkkosivu verkkoon OVH:n webhotellissa.**

## Edellytykset

- Sinulla on [webhotellituote](https://www.ovh-hosting.fi/webhotelli){.external}.
- Olet saanut webhotellisi asennusta koskevan vahvistussähköpostin.
- Sinulla on [verkkotunnus](https://www.ovh-hosting.fi/verkkotunnukset){.external}, joka on osoite verkkosivullesi.
- Olet kirjautunut [hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.

## Käytännössä

### 1. vaihe: Projektin rajaaminen

Selkeä näkemys tavoitteista on erittäin tärkeää, jotta projektisi sujuu hyvin. Mitä haluat tehdä verkkosivullasi? Kuinka se siirretään verkkoon? OVH:n webhotellilla on olemassa useita mahdollisuuksia projektin konkreettiseen toteuttamiseen.

- **Avaimet käteen -verkkosivun käyttäminen OVH:n yhden klikkauksen moduulilla**: tällä ratkaisulla voit hyödyntää käyttövalmiita ja räätälöitäviä rakenteita (teemat, tekstit jne.). OVH:lla on tarjolla neljä tällaista valmiiksi infrastruktuuriemme sekä niiden yhden klikkausten moduulien kanssa yhteensopivaa ratkaisua. Katso sitä varten sivua: [“Luo verkkosivu yhden klikkauksen moduulilla”](https://www.ovh-hosting.fi/webhotelli/website/){.external}.

- **Käsin asennettavan avaimet käteen -verkkosivun käyttäminen**: tässä vaihtoehdossa voit hyödyntää käyttövalmista ja räätälöitävää rakennetta (teemat, tekstit jne.), jonka asennat itse OVH:n webhotelliisi.

- **Sivun luominen itse**: tämä vaihtoehto on teknisempi ja edellyttää ohjelmointikokemusta, mutta tarjoaa mahdollisuuden mittatilausprojektin luomiseen.

- **Olemassa olevan sivun siirtäminen OVH:lle**: tämä vaihtoehto voi vaatia varovaisuutta, jos palvelukatko ei ole mahdollinen kyseiselle sivulle. Voit katsoa apua menettelyyn dokumentaatiosta: [“Verkkosivun ja sähköpostiosoitteiden migraatio OVH:lle”](https://docs.ovh.com/fi/hosting/sivun-migraatio-ovhlle/){.external}.


Kun olet arvioinut yllä olevat vaihtoehdot, voit valita kahdesta mahdollisuudesta:

- **haluat käyttää yhden klikkauksen moduulia**: siirry ohjeeseen [“Verkkosivun asennus yhden klikkauksen moduuleilla”](https://docs.ovh.com/fi/hosting/1-klikkauksen-moduulit/){.external}.

- **et halua käyttää yhden klikkauksen moduuliamme**: verkkosivun asennus on toteutettava käsin webhotellissasi. Tästä dokumentaatiosta löytyy sitä varten tietoa, josta voi olla apua tässä menettelyssä. Tämä ei kuitenkaan korvaa webmasterin apua.
 
> [!warning]
>
> OVH tarjoaa käyttöösi palveluja, joiden konfigurointi, hallinta ja vastuu kuuluvat sinulle. Tehtävänäsi on siis varmistaa palvelun kunnollinen toiminta.
> 
> Tämän ohjeen tarkoituksena on auttaa sinua yleisimmissä tehtävissä. Suosittelemme ottamaan kuitenkin yhteyttä erikoistuneeseen palveluntarjoajaan ja/tai palvelun kehittäjään, mikäli kohtaat hankaluuksia. Me emme voi tarjota avustusta asiassa. Lisätietoa tämän ohjeen kohdasta “Lisää aiheesta”.
>

### 2. vaihe: Sivun tiedostojen siirto verkkoon tallennustilassa

Verkkosivun käsin tehtävä siirto verkkoon webhotellissa edellyttää useita toimenpiteitä. Tietyt toimenpiteet ovat valinnaisia asennettavasta verkkosivusta riippuen ja niiden toteutukseen voi olla olemassa useita eri tapoja. Suurimmassa osassa projekteja voidaan kuitenkin tunnistaa kaksi päävaihetta, jotka tukevat verkkosivun siirtoa verkkoon. Ensimmäinen näistä on sivun tiedostojen lataaminen tallennustilaan.

Verkkoon siirto tapahtuu useassa alavaiheessa.

#### 1. Hae sivun tiedostot

Varmista, että sinulla on tiedostot sivulle, jonka haluat siirtää verkkoon. Jos olet siirtämässä olemassa olevia verkkosivuja, hae tiedostot vanhalta palveluntarjoajaltasi.

#### 2. Kirjaudu tallennustilaasi

FTP-tunnisteen, salasanan sekä palvelimen osoitteen avulla voit kirjautua tallennustilaasi. Nämä tiedot löytyvät sähköpostiviestistä, jossa ilmoitettiin webhotellisi asennuksesta. Jos sinulla ei ole enää salasanaa, mene ohjeisiin, jotka on kuvattu dokumentaatiossa [“FTP-käyttäjän salasanan vaihtaminen”](https://docs.ovh.com/fi/hosting/ftp-kayttajan-salasanan-vaihtaminen/){.external}.

Palvelimen osoitteen tai tallennustilaan kirjautumisen mahdollistavan tunnisteen voit hakea [hallintapaneelistasi](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}, klikkaa sitten `Webhotellit`{.action} palveluvalikossa vasemmassa reunassa. Valitse kyseessä oleva webhotelli ja mene sitten välilehdelle `FTP-SSH`{.action}.

![siteinstallation](images/get-website-online-step1.png){.thumbnail}

Kun sinulla on kaikki tiedot, kirjautuminen tallennustilaan voi tapahtua kolmella eri tavalla:

- **Käyttämällä FTP Exploreria**: voit kirjautua tallennustilaasi verkkoselaimesta. Käyttääksesi sitä klikkaa edelleen `FTP - SSH`{.action}-välilehdellä painiketta `FTP Explorer`{.action}

- **Käyttämällä FTP-protokollan kanssa yhteensopivaa ohjelmistoa**: sinun on asennettava yhteensopiva ohjelmisto tietokoneellesi (esim. FileZilla). Kehotamme ottamaan yhteyttä asennetun ohjelmiston kehittäjään, jos haluat saada apua sen käytössä. OVH ei ole luonut ohjelmistoa.

- **Käyttämällä SSH-yhteyttä**: sinun on käytettävä päätteen kautta annettavia komentoja voidaksesi toimia vuorovaikutuksessa tallennustilasi kanssa. Tämän tyyppisen tavan käyttö edellyttää edistynyttä osaamista sekä tietyn [webhotellituotteen](https://www.ovh-hosting.fi/webhotelli/){.external}.

#### 3. Lataa tiedostot tallennustilaan

Kun olet kirjautunut tallennustilaan, ei jäljellä ole enää muuta kuin sivusi tiedostojen siirto verkkoon. **Kehotamme erityiseen varovaisuuteen liittyen hakemistoon, johon tiedostot ladataan.** Perinteisessä käytössä sivun on oltava ladattu “www”-kansioon. Jos kuitenkin käytät webhotelliasi useamman verkkosivuston ylläpitoon, sinulla on varmastikin useita **“Multisite”**-sivuja.

Voit tarkistaa oikean kansion, jossa verkkosivusi tulee julkaista, menemällä hallintapaneelisi välilehdelle `Multisite`{.action}. Näkyviin tulevassa taulukossa katso halutun verkkotunnuksen kohdalla näkyvä `Juurikansio`{.action}. Julkaise sitten sivut tässä kansiossa.

On mahdollista, että löydät tallennustilastasi tiedoston nimeltä “index.html”. OVH on voinut luoda sen webhotellisi asennuksen yhteydessä näyttääkseen oletussivun verkkosivullasi. Jos näin on, muista poistaa se tiedostojesi verkkoon lisäyksen yhteydessä.

![siteinstallation](images/get-website-online-step2.png){.thumbnail}

### 3. vaihe: Verkkosivun yhdistäminen tietokantaan

> [!primary]
>
> Tämä osa on valinnainen, mikäli verkkosivuasi ei tarvitse liittää tietokantaan.
>

Nykyään lähes kaikki sisällönhallintajärjestelmät kuten WordPress ja Joomla!, käyttävät tietokantaa dynaamisten elementtien kuten kommenttien tai artikkeleiden tallennukseen. Yhteys sivun tiedostojen ja tietokannan välillä on siis välttämätön, jotta verkkosivu voi toimia kunnolla. Tätä varten on olemassa tietokannan tiedot sisältävä konfigurointitiedosto, joka mahdollistaa tämän yhteyden.

Käytetystä verkkosivusta riippuen tämä yhteys on muodostettava käsin tai sivun itse muodostaman käyttöliittymän kautta. Se toteutetaan useassa vaiheessa, joista jotkut voivat olla valinnaisia.

#### 1. Hae olemassa olevan tietokannan tiedot (valinnainen)

Jos olet siirtämässä olemassa olevia verkkosivuja, hae olemassa oleva tietokanta vanhalta palveluntarjoajaltasi. Jos kyseessä on uusi verkkosivu, jatka seuraavaan vaiheeseen.

#### 2. Luo tietokanta OVH:lla (valinnainen)

Jos sinulla on jo tietokanta, jota haluat käyttää ([OVH:n webhotellituotteeseen](https://www.ovh-hosting.fi/webhotelli/){.external} sisältyvä tai [Private SQL](https://www.ovh-hosting.fi/webhotelli/sql-optiot.xml){.external} tai [Cloud DB](https://www.ovh-hosting.fi/cloud/cloud-databases/){.external} -ratkaisu), syötä sen käyttäjänimi, tietokannan salasana sekä palvelimen osoite. Jatka sitten seuraavaan vaiheeseen.

Jos haluat luoda uuden tietokannan OVH:lla, [kirjaudu hallintapaneeliisi](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} ja klikkaa kohtaa `Webhotellit`{.action} vasemman puoleisessa palveluvalikossa. Valitse kyseessä oleva webhotelli ja mene sitten välilehdelle `Tietokannat`{.action}.

Klikkaa nyt painiketta `Luo tietokanta`{.action} tai jos sitä ei näy, kohtaa `Toiminnot`{.action} ja sitten `Luo tietokanta`{.action}. Seuraa sitten näkyviä tietoja.

![siteinstallation](images/get-website-online-step3.png){.thumbnail}


#### 3. Tuo olemassa oleva tietokanta (valinnainen)

Jos olet siirtämässä olemassa olevia verkkosivuja, tuo olemassa oleva tietokanta juuri luotuun tietokantaan. Jos kyseessä on uusi verkkosivu, jatka seuraavaan vaiheeseen.

Tuonnin toteuttamiseen on olemassa useita eri tapoja. OVH tarjoaa yhtä tapaa hallintapaneelissa. Kun olet palvelussasi luotujen tietokantojen luettelossa OVH:n hallintapaneelissa, klikkaa kolmea pistettä juuri luodun tietokannan kohdalla ja sitten `Tuo tiedosto`{.action}. Seuraa sitten näkyviä tietoja.

![siteinstallation](images/get-website-online-step4.png){.thumbnail}

#### 4. Yhdistä sivusi tietokantaan

Kun tietokantasi on saatavilla ja tiedostot ladattu tallennustilaasi, ne täytyy vielä yhdistää toisiinsa. Sitä varten tarvitset tiedot, joiden avulla voit kirjautua tietokantaan (käyttäjänimi, salasana, tietokannan nimi sekä palvelimen osoite).

Yhteyden luominen riippuu verkkosivusta, jota olet siirtämässä verkkoon. Tämä on lähtöisin verkkosivusi konfiguraatiosta eikä OVH:lta. Suosittelemme siis ottamaan yhteyttä verkkosivusi kehittäjään tai asiantuntijaan kuten erikoistuneeseen palveluntarjoajaan, mikäli kaipaat apua toimenpiteessä.

### 4. vaihe: Mene verkkosivullesi

Kun tiedostot on ladattu tallennustilaasi ja siihen on liitetty tietokanta (jos sivusi käyttää sellaista), voit nyt päästä verkkosivullesi. Sen pitäisi nyt näkyä oikein verkkoselaimesi kautta.

Jos huomaat, ettei sivu näy oikein, suosittelemme:

- **tarkistamaan verkkotunnuksesi konfiguroinnin**: voi olla, että nimipalvelimesi konfigurointi estää sitä näyttämästä OVH:n webhotelliin ladattua sivua. Varmista, että tällä hetkellä verkkotunnuksesi DNS-alueelle määritetty A-tietue vastaa OVH:n webhotellisi IP-osoitetta.

- **varmistamaan, ettei yhtään tiedostoa puutu**: on mahdollista, että ladatessasi tietoja OVH:n webhotellin, olet unohtanut tiedostoja tai on tapahtunut virhe. Ole kuitenkin valppaana muutoksia tehdessäsi, ettet riko sivun tiedostojen ja tietokannan välistä yhteyttä (jos sivu käyttää tietokantaa).

- **tarkistamaan, ettei sivun koodissa ole virheitä**: tämä tarkistus on kaikkein teknisin, mutta lataamissasi tiedostoissa saattaa olla virheitä, joiden vuoksi sivu ei näy kunnolla tai ei ollenkaan.

Muistathan, että mikäli sinulla on vaikeuksia sivun siirtämisessä verkkoon, suosittelemme ottamaan yhteyttä erikoistuneeseen palveluntarjoajaan ja/tai ottamaan yhteyttä palvelun kehittäjään (esim. käyttämäsi sisällönhallintajärjestelmän kehittäjään).

## Lue lisää aiheesta

[Verkkosivun ja sähköpostiosoitteiden migraatio OVH:lle](https://docs.ovh.com/fi/hosting/sivun-migraatio-ovhlle/){.external}.

[Verkkosivun asennus yhden klikkauksen moduuleilla](https://docs.ovh.com/fi/hosting/1-klikkauksen-moduulit){.external}.

[FTP-käyttäjän salasanan vaihtaminen](https://docs.ovh.com/fi/hosting/ftp-kayttajan-salasanan-vaihtaminen/){.external}.

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.