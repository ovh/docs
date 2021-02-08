---
deprecated: true
title: Hosted Exchange -palvelun käytön aloitus
excerpt: Katso, kuinka Hosted Exchange -palvelun käyttö aloitetaan
slug: exchange_20132016_palvelun_ensimmainen_konfigurointi
section: Exchange-tuotteen konfigurointi
order: 1
---

**Päivitetty 6.2.2018**

## Tavoite

Hosted Exchange -palvelulla voidaan hyödyntää yrityskäyttöön tarkoitettuja sähköpostiosoitteita, jotka helpottavat ryhmätyöskentelyä ominaisuuksiensa kuten kalenterien ja yhteystietojen synkronoinnin ansiosta.

**Katso, kuinka Hosted Exchange -palvelun käyttö aloitetaan.**

## Edellytykset

- Olet tilannut [Hosted Exchange](https://www.ovh-hosting.fi/sahkopostit/hosted-exchange/){.external} -tuotteen
- Olet saanut vahvistussähköpostin Hosted Exchange -ratkaisun asennusta koskien
- Sinulla on verkkotunnus.
- Olet kirjautunut [hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}

## Käytännössä

### 1. vaihe: Mene palvelusi hallintaan

Kun Hosted Exchange -palvelusi on luotu ja käytettävissä, voit hallita sitä [hallintapaneelistasi](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.

Klikkaa sitä varten vasemman reunan valikossa kohtaa `Microsoft`{.action} ja sitten `Exchange`{.action}. Klikkaa lopuksi kyseessä olevan Hosted Exchange -palvelun nimeä.

> [!primary]
>
> Hosted Exchange -palvelusi nimi hallintapaneelissa on **hosted-** alkuinen ja sisältää osan asiakastunnuksesta ja päättyy lukuun (1 ensimmäisenä asennettu Hosted Exchange -palvelu, 2 toisena asennettu jne.).
>

### 2. vaihe: Palvelun aloituskonfiguraatio

Koska palveluasi ei ole vielä koskaan aiemmin käytetty, sinun on suoritettava sen ensimmäinen konfigurointi. Konfiguraation tehtyäsi voit käyttää uusia Exchange-sähköpostiosoitteitasi.

Aloituskonfiguraatiota varten näkyviin ilmestyy konfiguroinninavustaja, kun menet ensimmäistä kertaa Hosted Exchange -palvelusi hallintaan. Alkuun päästäksesi klikkaa painiketta `Aloita`{.action}.

Konfiguroinninavustaja mahdollistaa useita menettelyjä. Tilanteestasi riippuen seuraava taulukko voi tehdä tietyistä tämän ohjeen vaiheista valinnaisia.

|Menettely|Kuvaus|
|---|---|
|Verkkotunnuksen valinta|Määritä verkkotunnus, jota käytetään Exchange-sähköpostiosoitteillesi. Tämä on yksi elementeistä, joista sähköpostiosoitteesi koostuu (esimerkiksi contact@mypersonaldomain.ovh).|
|Verkkotunnuksen konfigurointi|Annettu verkkotunnus konfiguroidaan automaattisesti, jos OVH hallinnoi sitä samalla asiakastunnuksella kuin Exchange-palveluasi. Muussa tapauksessa sinun on toteutettava konfigurointi manuaalisesti.|
|Exchange-tilien konfigurointi|Määritä Exchange-sähköpostiosoitteidesi nimi ja lisää täydentävät tiedot.|
|Tietojen migraatio (tarvittaessa)|Jos olet tekemässä sähköpostiosoitteidesi migraatiota jostakin toisesta OVH:n ratkaisusta (MX Plan tai E-mail Pro), voit käynnistää tämän migraation avustajasta käsin. Jos käytät sähköpostiohjelmistoa, täytyy tilit samoin konfiguroida uudelleen.|

### 3. vaihe: Ylimääräisten verkkotunnusten lisäys (valinnainen)

Kun verkkotunnuksesi aloituskonfiguraatio on valmis, voit myös halutessasi konfiguroida ylimääräisiä verkkotunnuksia, mikäli et sitä jo tehnyt avustajan kautta.

> [!warning]
>
> Kaikki Exchange-palvelussasi luodut osoitteet voidaan näyttää palvelun kaikkien osoitteiden luettelossa, mukaan lukien ne, joilla on eri verkkotunnus. Irrottaaksesi verkkotunnukset näkymästä sinun on tilattava uusi Hosted Exchange-ratkaisu näille kyseisille verkkotunnuksille.
>

Uuden verkkotunnuksen lisäämiseksi valitse kyseinen Hosted Exchange -palvelu [hallintapaneelistasi](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} ja klikkaa välilehteä `Liitetyt verkkotunnukset`{.action}. Taulukossa näkyvät tällä hetkellä konfiguroidut tai palveluusi siirtymässä olevat verkkotunnukset. Uusien lisäämiseksi klikkaa painiketta `Lisää verkkotunnus`{.action} ja seuraa sitten prosessin eri vaiheita.

Voit lukea lisää aiheesta dokumentaatiostamme [Verkkotunnuksen lisääminen Exchange-palveluun](https://docs.ovh.com/fi/microsoft-collaborative-solutions/verkkotunnuksen-lisaaminen-exchange-palveluun/){.external}.

> [!primary]
>
> Jos verkkotunnus vaatii erityistoimia konfiguraatioon liittyen, näkyy silloin punainen pyörylä taulukon sarakkeessa `Vianhaku`{.action}. Klikkaamalla sitä tulevat tehtävät muokkaukset näkyviin. Jos verkkotunnus ei käytä OVH:n konfiguraatiota (nimipalvelimia), sinun on tehtävä muokkaukset käyttöliittymässä, jossa voit hallita verkkotunnuksesi konfiguraatiota. 
>

![Verkkotunnuksen lisäys](images/first-steps-hosted-exchange-add-domain.png){.external}


### 4. vaihe: Ylimääräisten Exchange-tilien konfigurointi (valinnainen)

Voit halutessasi konfiguroida ylimääräisiä verkkotunnuksia, mikäli et sitä jo tehnyt avustajan kautta.

Klikkaa kyseistä Hosted Exchange -palvelua [hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} ja sitten välilehteä `Sähköpostitilit`{.action}. Taulukossa näkyvät palvelussasi tällä hetkellä konfiguroidut tai sitä odottavat verkkotunnukset.

Konfigurointia odottavat tilit näkyvät taulukossa muodossa “*@configureme.me*”. Klikkaa niiden konfiguroimiseksi kynänmuotoista kuvaketta.

> [!primary]
>
> Tee tämä vaihe niin monta kertaa kuin on tarvetta, omistamiesi tilien lukumäärän mukaan. Voit tilata uusia painikkeella `Tilaa tilejä`{.action}.
>

![Tilin lisäys](images/first-steps-hosted-exchange-add-account.png){.external}

### 5. vaihe: Sähköpostiosoitteiden käyttö

Kun tilisi on konfiguroitu, voit aloittaa niiden käytön! Tätä varten OVH tarjoaa käytettäväksi **Outlook Web Application** (OWA) -selainpostin. Se on saatavilla osoitteessa [https://www.ovh-hosting.fi/mail/](https://www.ovh-hosting.fi/mail/){.external}. Kirjautuaksesi sisään anna sähköpostiosoitteeseesi liittyvät käyttäjätunnukset. Mikäli haluat saada apua OWAn käyttöön liittyen, tutustu dokumentaatioomme tästä linkistä [https://docs.ovh.com/fi/microsoft-collaborative-solutions/](https://docs.ovh.com/fi/microsoft-collaborative-solutions/){.external}.

Jos haluat konfiguroida sähköpostiosoitteen sähköpostiohjelmistoon tai laitteeseen kuten älypuhelimelle tai tabletille, tutustu dokumentaatioomme tässä portaalissa: [https://docs.ovh.com/fi/microsoft-collaborative-solutions/](https://docs.ovh.com/fi/microsoft-collaborative-solutions/){.external}. Tarkista Exchange-osoitteen yhteensopivuus palvelun kanssa, jotta voit varmistua sen toimivan moitteettomasti ohjelmistossa.

OVH tarjoaa Outlook-lisenssejä [hallintapaneelista](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} sekä Office 365 -lisenssejä sivulla [https://www.ovh-hosting.fi/office-365/](https://www.ovh-hosting.fi/office-365/){.external}. Suosittelemme jompaakumpaa näistä ratkaisuista, mikäli haluat hyödyntää Outlook-sähköpostiohjelmistoa tai useampaa Office Suiten ohjelmistoa tarpeidesi mukaan.

> [!primary]
>
> Exchange mahdollistaa asetustesi täydellisen synkronoinnin (suodattimet, allekirjoitukset, kansiot jne.), käytitpä sitten verkkosovellusta tai yhteensopivaa sähköpostiohjelmistoa.
> Näin ollen jos käytät Exchangea kolmella laitteella eri yhdistämiskeinoilla (selainposti, yhteensopiva sähköpostiohjelmisto tai asiakasohjelma), kaikki tietosi ovat saatavilla samanaikaisesti.
>

### 6. vaihe: Ryhmätyöominaisuuksien asetusten määritys (valinnainen)

Nyt kun Hosted Exchange -palvelusi on konfiguroitu ja toiminnallinen, voit asentaa palveluun sisältyviä ryhmätyöominaisuuksia [hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}. Ne antavat mahdollisuuden resurssien (kokoustilat, laitteistot jne.) ja myös muun muassa ryhmien luomiseen.

Näiden eri toimintojen aktivoimiseksi valitse kyseinen Hosted Exchange -palvelu [hallintapaneelistasi](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} ja valitse sitten näkyviin tulevista välilehdistä haluamasi toiminto.

Mikäli haluat saada apua johonkin ominaisuuteen liittyen, tutustu dokumentaatioomme, joka on saatavilla portaalissa [https://docs.ovh.com/fi/microsoft-collaborative-solutions/](https://docs.ovh.com/fi/microsoft-collaborative-solutions/){.external}.

![Ryhmätyöominaisuudet](images/first-steps-hosted-exchange-intro-to-functions.png){.external}

## Lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa [https://ovh-hosting.fi/community/foorumi](https://ovh-hosting.fi/community/foorumi){.external}.