---
deprecated: true
title: 'E-mail Pro konfigurointi'
slug: ensimmainen-konfigurointi
excerpt: 'Katso, kuinka E-mail Pro -ratkaisu konfiguroidaan. '
section: Yleistä
---

**Päivitetty 28.11.2018**

## Tavoite

Olet hankkinut E-mail Pro -ratkaisun. Sen avulla saat käyttöösi yrityskäyttöön tarkoitettuja sähköpostiosoitteita parhaalla hinnalla liiketoimintasi tueksi tai sen aloittamista varten.

**Katso, kuinka E-mail Pro -ratkaisu konfiguroidaan.** 

## Edellytykset

- Sinulla on [E-mail Pro -tuote](https://www.ovh-hosting.fi/sahkopostit/email-pro/){.external}.
- Olet saanut vahvistussähköpostin E-mail Pro -ratkaisun asennusta koskien.
- Sinulla on verkkotunnus.
- Olet kirjautunut [hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.

## Käytännössä

### 1. vaihe: Mene palvelusi hallintaan

Kun E-mail Pro -palvelusi on luotu ja käytettävissä, voit hallita sitä [hallintapaneelistasi](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.

Kirjautuaksesi palveluun klikkaa kohtaa `E-mail Pro`{.action} vasemmassa reunassa olevassa valikossa, ja valitse sitten kyseinen palvelu.
 
> [!primary]
> 
> E-mail Pro -palvelusi nimi hallintapaneelissa on *emailpro-*alkuinen ja sisältää osan asiakastunnuksesta ja päättyy lukuun (1 ensimmäisenä asennettu E-mail Pro -palvelu, 2 toisena asennettu jne.)
>


### 2. vaihe: Verkkotunnuksen lisäys

Jos olet juuri tilannut E-mail Pro -palvelusi, avautuu eteesi automaattisesti ikkuna, jossa kehotetaan `Lisäämään verkkotunnus`{.action}.  Mikäli ikkuna ei avaudu, mene kuvakkeeseen `Liitetyt verkkotunnukset`{.action} ja klikkaa sitten painiketta `Lisää verkkotunnus`{.action}.

Valitse seuraavista vaihtoehdoista:

- **Valitse verkkotunnus listasta**: ainoastaan OVH:n konfiguraatiota käyttävät verkkotunnukset ja ne, joiden kontaktiksi asiakastunnuksesi on merkitty, näkyvät.
- **Syötä verkkotunnus, jota ei hallita OVH:n asiakastililläsi**: sinulla täytyy olla valtuudet muokata verkkotunnuksen konfiguraatiota (DNS-aluetta), jotta E-mail Pro -palvelu voi toimia kunnolla.

Kun olet tehnyt valintasi, klikkaa painiketta `Seuraava`{.action}.

![emailpro](images/first_config_email_pro_add_domain.png){.thumbnail}

Ikkunassa näkyy nyt tilan konfiguraatiota koskevat tiedot.

- **Jos olet syöttänyt verkkotunnuksen, joka ei ole OVH:n hallitsema**: ei-autoritatiivinen tila konfiguroidaan oletuksena.
- **Jos olet valinnut listasta OVH:n hallitseman verkkotunnuksen**: sinun on valittava kahden tilan väliltä.

|Tila|Kuvaus|
|---|---|
|Autoritatiivinen|Sopiva vaihtoehto silloin, kun käytät ainoastaan E-mail Pro -ratkaisua verkkotunnuksellasi. Ei mahdollista muita sähköpostipalveluja E-mail Pro -palvelun rinnalla.|
|Ei-autoritatiivinen|Sopiva vaihtoehto, jos käytät verkkotunnuksellasi E-mail Pro -palvelun lisäksi toista sähköpostiratkaisua.| 

> [!primary]
>
> Tilan valinta ei ole lopullinen, sitä voidaan muokata myöhemmin hallintapaneelin kautta.
>

Klikkaa painiketta `Seuraava`{.action} jatkaaksesi verkkotunnuksen lisäykseen.

![emailpro](images/first_config_email_pro_add_domain_step2.png){.thumbnail}

**Jos olet valinnut listasta OVH:n hallitseman verkkotunnuksen**, sen konfigurointi voidaan toteuttaa automaattisesti. Rastita sitä varten ruudut ja klikkaa painiketta **Seuraava** jatkaaksesi verkkotunnuksen lisäykseen.

**Jos olet valinnut verkkotunnuksen, joka ei ole OVH:n hallitsema**, konfiguroinnin täytyy tapahtua seuraavan vaiheen aikana.

![emailpro](images/first_config_email_pro_add_domain_step3.png){.thumbnail}

Konfiguroinnin lopussa kehotamme tarkistamaan näkyvät tiedot ja klikkaamaan sitten painiketta `Vahvista`{.action} verkkotunnuksen lisäyksen käynnistämiseksi.

### 3. vaihe: Verkkotunnuksen konfigurointi

Kun verkkotunnus on lisätty liitettynä verkkotunnuksena, tarkista sen asetukset näkyviin tulevassa taulukossa.

`Vianhaku`{.action}-sarakkeen avulla voit hallita verkkotunnuksen MX-kenttien konfigurointia. Näkyvissä on punainen pyörylä, mikäli asetuksia tarvitsee muokata.

- **Jos olet valinnut automaattisen konfiguroinnin verkkotunnuksen lisäyksen jälkeen**: voi kestää useita tunteja, ennen kuin se on näkyvissä hallintapaneelissa.
- **Jos olet syöttänyt verkkotunnuksen, joka ei ole OVH:n hallitsema**: klikkaa punaista pyörylää katsoaksesi tarvittavat muokkaukset. Jos olet juuri tehnyt ne, voi kestää useita tunteja ennen kuin ne ovat näkyvissä hallintapaneelissa.

![emailpro](images/first_config_email_pro_configure_domain.png){.thumbnail}

### 4. vaihe: Konfiguroi E-mail Pro -tilit

Siirry sähköpostiosoitteiden konfiguroimiseksi kuvakkeeseen `Sähköpostitilit`{.action}. Taulu näyttää tilit, jotka olet tilannut muodossa “*@configureme.me*”.

Klikkaa niiden konfiguroimiseksi kynänmuotoista logoa.

![emailpro](images/first_config_email_pro_configure_email_accounts.png){.thumbnail}

Täytä näkyvät tiedot.

|Nimike|Kuvaus|
|---|---|
|Sähköpostitili|Syötä nimi sähköpostiosoitteellesi (esimerkiksi etunimi.sukunimi) ja valitse kyseinen verkkotunnus listasta.|
|Etunimi|Anna etunimi.|
|Nimi|Anna sukunimi.|
|Näytettävä nimi|Syötä nimi, joka näkyy lähettäjänä, kun viestejä lähetetään tällä osoitteella.|
|Salasana ja vahvistus|Määritä salasana ja vahvista se.| 

Kun tiedot on täytetty, klikkaa painiketta `Seuraava`{.action}, tarkista näkyviin tulevat tiedot ja klikkaa sitten `Vahvista`{.action} tilin konfiguroinnin käynnistämiseksi.

> [!primary]
>
> Tee tämä vaihe niin monta kertaa kuin on tarvetta, omistamiesi tilien lukumäärän mukaan. Voit tilata lisää tilejä painikkeesta `Tilaa tilejä`{.action}.
>

![emailpro](images/first_config_email_pro_configure_email_accounts_step2.png){.thumbnail}

### 5. vaihe: Sähköpostiosoitteiden käyttö

Kun tilisi on konfiguroitu, voit aloittaa niiden käytön! Tätä varten OVH tarjoaa käytettäväksi selainpostin. Se on käytettävissä osoitteessa <https://pro1.mail.ovh.net>, jossa sinun on syötettävä OVH:lla luotuun sähköpostiosoitteeseen liittyvät tunnukset.

Jos haluat konfiguroida sähköpostiosoitteen sähköpostiohjelmistoon tai laitteeseen (esim. älypuhelin tai tabletti), tutustu dokumentaatioomme tässä portaalissa: <https://docs.ovh.com/fi/emails-pro/>. Jos haluat yksinkertaisesti E-mail Pro -tilisi konfigurointiin tarvittavat elementit, voit katsoa alta käytettävät asetukset:

|Palvelimen tyyppi|Palvelimen nimi|Salaus|Portti|
|---|---|---|---|
|Saapuva|pro1.mail.ovh.net|SSL/TLS|993|
|Lähtevä|pro1.mail.ovh.net|STARTTLS|587|

## Lue lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa [https://community.ovh.com/en](https://community.ovh.com/en/){.external}.
