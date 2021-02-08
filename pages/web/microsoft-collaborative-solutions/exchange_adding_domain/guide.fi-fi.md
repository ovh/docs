---
deprecated: true
title: Verkkotunnuksen lisääminen Exchange-palveluun
slug: verkkotunnuksen-lisaaminen-exchange-palveluun
excerpt: Katso, kuinka Exchange-palveluun lisätään verkkotunnus
section: Exchange-tuotteen konfigurointi
---

**Päivitetty 22.1.2018**

## Tavoite

Verkkotunnuksen lisääminen Exchange-palveluun on välttämätöntä, jotta voit käyttää siihen liittyviä tilejä. Lisäksi Exchange-palveluun on mahdollista lisätä useita verkkotunnuksia. 

**Katso, kuinka Exchange-palveluun lisätään verkkotunnus.**

## Edellytykset

- Sinulla on [Exchange-ratkaisu](https://www.ovh-hosting.fi/sahkopostit/){.external}
- Sinulla on yksi tai useampi verkkotunnus
- Voit muokata verkkotunnuksesi konfiguraatiota (DNS-aluetta)
- Olet kirjautunut [hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}

## Käytännössä

### 1. vaihe: Mene palvelusi hallintaan

Kun Exchange-palvelusi on luotu ja käytettävissä, voit hallita sitä [hallintapaneelistasi](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.

Klikkaa sitä varten vasemmassa reunassa olevassa valikossa kohtaa `Microsoft`{.action} ja sitten `Exchange`{.action}. Valitse lopuksi kyseessä olevan Exchange-palvelun nimi.

> [!primary]
>
> Exchange-palvelusi nimi hallintapaneelissa on **hosted-** tai **private-** alkuinen ja sisältää osan asiakastunnuksesta ja päättyy lukuun (1 ensimmäisenä asennettu Hosted tai Private Exchange -palvelu, 2 toisena asennettu jne.).
>

### 2. vaihe: Verkkotunnuksen lisäys

Lisätäksesi verkkotunnuksen klikkaa välilehteä `Liitetyt verkkotunnukset`{.action}. Taulukossa on näkyvissä Exchange-palvelussasi tällä hetkellä liitettynä olevat verkkotunnukset. Lisätäksesi uuden klikkaa painiketta `Lisää verkkotunnus`{.action}.

> [!warning]
>
> Kaikki Exchange-palvelussasi luodut osoitteet voidaan näyttää palvelun kaikkien osoitteiden luettelossa, mukaan lukien ne, joilla on eri verkkotunnus. Irrottaaksesi verkkotunnukset näkymästä sinun on tilattava uusi [Exchange-ratkaisu](https://www.ovh-hosting.fi/sahkopostit/){.external} näille kyseisille verkkotunnuksille.
>

![Exchange](images/add_domain_exchange_step1.png){.thumbnail}

Verkkotunnuksen lisäysikkunassa on tehtävä valinta:

- **Valitse verkkotunnus listasta**: ainoastaan OVH:n konfiguraatiota käyttävät verkkotunnukset ja ne, joiden kontaktiksi asiakastunnuksesi on merkitty, näkyvät.

- **Syötä verkkotunnus, jota ei hallita OVH:n asiakastililläsi**: sinulla täytyy olla valtuudet muokata verkkotunnuksen konfiguraatiota (DNS-aluetta), jotta palvelu voi toimia kunnolla.

Kun olet tehnyt valintasi, klikkaa painiketta `Seuraava`{.action}.

![Exchange](images/add_domain_exchange_step2.png){.thumbnail}

Ikkunassa näkyy nyt tilojen konfiguraatiota koskevat tiedot.

- **Jos olet syöttänyt verkkotunnuksen, joka ei ole OVH:n hallitsema**: ei-autoritatiivinen tila konfiguroidaan oletuksena.

- **Jos olet valinnut listasta OVH:n hallitseman verkkotunnuksen**: sinun on valittava kahden tilan väliltä.

|Tila|Kuvaus|
|---|---|
|Autoritatiivinen|Sopiva vaihtoehto silloin, kun käytät ainoastaan Exchange-ratkaisua verkkotunnuksellasi. Ei mahdollista muita sähköpostiratkaisuja Exchange-palvelun rinnalla.|
|Ei-autoritatiivinen|Sopiva vaihtoehto, jos käytät verkkotunnuksellasi Exchange-palvelun lisäksi toista sähköpostiratkaisua. Sinun on syötettävä toisen sähköpostiratkaisusi palvelin.|

> [!primary]
>
> Tilan valinta ei ole lopullinen, sitä voidaan muokata myöhemmin hallintapaneelin kautta.
>

Klikkaa painiketta `Seuraava`{.action} jatkaaksesi verkkotunnuksen lisäykseen.

![Exchange](images/add_domain_exchange_step3.png){.thumbnail}

**Jos olet valinnut listasta OVH:n hallitseman verkkotunnuksen**, sen konfigurointi voidaan toteuttaa automaattisesti. Rastita sitä varten ruudut ja klikkaa painiketta `Seuraava`{.action} jatkaaksesi verkkotunnuksen lisäykseen.

**Jos olet valinnut verkkotunnuksen, joka ei ole OVH:n hallitsema**, konfiguroinnin täytyy tapahtua seuraavan vaiheen aikana.

![emailpro](images/add_domain_exchange_step4.png){.thumbnail}

Konfiguroinnin lopussa kehotamme tarkistamaan näkyvät tiedot ja klikkaamaan sitten painiketta `Vahvista`{.action} verkkotunnuksen lisäyksen käynnistämiseksi. Toteuta tämä vaihe niin monta kertaa kuin tarvitset, mikäli haluat lisätä useita verkkotunnuksia.

### 3. vaihe: Verkkotunnuksen konfigurointi (DNS)

Kun verkkotunnus on lisätty liitettynä verkkotunnuksena, varmista, että sen konfigurointi on oikein esiin tulevan taulukon avulla. Vihreä pyörylä merkitsee, että verkkotunnus on konfiguroitu oikein. Mikäli pyörylä on punainen:

- **Jos olet valinnut automaattisen konfiguroinnin verkkotunnuksen lisäyksen jälkeen**: voi kestää useita tunteja, ennen kuin se on näkyvissä hallintapaneelissa.

- **Jos olet syöttänyt verkkotunnuksen, joka ei ole OVH:n hallitsema**: klikkaa punaista pyörylää katsoaksesi tarvittavat muokkaukset. Jos verkkotunnus ei käytä OVH:n konfiguraatiota (nimipalvelimia), sinun on tehtävä muokkaukset käyttöliittymässä, jossa voit hallita verkkotunnuksesi konfiguraatiota. CNAME-asetusten määrityksestä voit lukea lisää dokumentaatiosta nimeltä [CNAME-kentän luominen liitettyä verkkotunnusta lisättäessä](https://docs.ovh.com/fi/microsoft-collaborative-solutions/exchange_20132016_cname-tietueen_lisaaminen/){.external}.

> [!primary]
>
> Verkkotunnuksen konfiguraation muokkaus tarvitsee 4 - 24 tunnin propagaatioajan ennen kuin muutos on astunut täysin voimaan.
>

Tarkistaaksesi, että verkkotunnus on konfiguroitu oikein, mene uudelleen Exchange-palvelusi taulukkoon `Liitetyt verkkotunnukset`{.action}. Jos pyörylä on vihreä, verkkotunnus on konfiguroitu oikein. Mikäli näin ei ole, on mahdollista, että propagaatio ei ole vielä päättynyt.

![emailpro](images/add_domain_exchange_step5.png){.thumbnail}

### 4. vaihe: Tilien konfigurointi ja käyttäminen

Nyt kun olet lisännyt haluamasi verkkotunnukset Exchange-palveluusi, voit konfiguroida Exchange-tilisi näiden kanssa. Tämä toimenpide tapahtuu välilehdellä `Sähköpostitilit`{.action}. Mikäli on tarvetta, voit tilata ylimääräisiä tilejä painikkeesta `Tilaa tilejä`{.action} tai `Lisää tili`{.action}.

Muista, että kaikki Exchange-palvelussasi luodut osoitteet voidaan näyttää palvelun kaikkien osoitteiden luettelossa, mukaan lukien ne, joilla on eri verkkotunnus.

Kun tilisi on täysin konfiguroitu, voit aloittaa niiden käytön! Sitä varten OVH antaa käyttöösi **Outlook Web Application** -sovelluksen eli *selainpostin*, joka on käytettävissä osoitteessa [https://www.ovh-hosting.fi/mail/](https://www.ovh-hosting.fi/mail/){.external}. Varmista Exchange-osoitteen yhteensopivuus palvelun kanssa sen ihanteellista ohjelmistossa tapahtuvaa käyttöä varten. Jos haluat konfiguroida sähköpostiosoitteesi sähköpostiohjelmistoon tai laitteelle kuten älypuhelimelle tai tabletille, tai kaipaat apua Exchange-palvelun ominaisuuksiin liittyen, tutustu dokumentaatioomme tässä portaalissa: [https://docs.ovh.com/fi/microsoft-collaborative-solutions/](https://docs.ovh.com/fi/microsoft-collaborative-solutions/){.external}.

Outlook-lisenssejä on mahdollista hankkia [hallintapaneelista](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} sekä Office 365 -lisenssejä sivulta [https://www.ovh-hosting.fi/office-365/](https://www.ovh-hosting.fi/office-365/){.external} Suosittelemme jompaakumpaa näistä ratkaisuista, mikäli haluat hyödyntää Outlook-sähköpostiohjelmistoa tai useampaa Office Suiten ohjelmistoa tarpeidesi mukaan.

## Lisää aiheesta

[CNAME-kentän luominen liitettyä verkkotunnusta lisättäessä](https://docs.ovh.com/fi/microsoft-collaborative-solutions/exchange_20132016_cname-tietueen_lisaaminen/){.external}.

Viesti käyttäjäyhteisömme kanssa osoitteessa [https://ovh-hosting.fi/community/foorumi](https://ovh-hosting.fi/community/foorumi){.external}.