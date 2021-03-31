---
deprecated: true
title: Verkkosivun asennus yhden klikkauksen moduuleilla
slug: 1-klikkauksen-moduulit
excerpt: Katso, kuinka verkkosivu asennetaan yhden klikkauksen moduuliemme avulla
section: Sisällönhallintajärjestelmä
---

**Päivitetty 22.11.2017**

## Tavoite

Yhden klikkauksen moduuleilla voidaan asentaa verkkosivu helposti ja nopeasti (teknistä osaamista ei vaadita). Ne käyttävät tunnetuimpia sisällönhallintajärjestelmiä, joita ovat: WordPress, PrestaShop, Drupal ja Joomla.

**Katso, kuinka verkkosivu asennetaan yhden klikkauksen moduuliemme avulla.**


## Edellytykset

- Sinulla on [webhotelli](https://www.ovh-hosting.fi/webhotelli/).
- Olet kirjautunut [hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie).
- Et ole ladannut tiedostoja hakemistoon, jonne moduuli asennetaan.
- Verkkosivullasi käytettävän verkkotunnuksen (sekä haluttaessa myös aliverkkotunnuksen) on oltava tyyppiä multisite.


## Käytännössä

### Sisällönhallintajärjestelmän huolellinen valinta

Sisällönhallintajärjestelmällä (CMS eli Content Management System) on mahdollista luoda verkkosivu helppokäyttöisellä käyttöliittymällä.  Niitä on olemassa useita tyyppejä erilaisille projekteille. Voit näin hyödyntää käyttövalmiin sivun rakennetta ja räätälöidä sitä (teema, tekstit jne.) omien toiveidesi mukaisesti.

OVH:lla on tarjolla neljä sisällönhallintajärjestelmää yhden klikkauksen moduulilla. Helppokäyttöistä ratkaisua käyttääksesi valitse jokin näistä neljästä vaihtoehdosta. Jos olet jo valinnut sopivan moduulin, jatka lukemista ja toimi ohjeen mukaan. Mikäli näin ei ole, voi [tästä CMS-vertailusta](https://www.ovh-hosting.fi/webhotelli/website/cms-vertailu/){.external} olla apua valinnan tekemisessä.

Jos haluat asentaa sisällönhallintajärjestelmän, jota ei tarjota yhden klikkauksen moduuleissa, voit tehdä aina asennuksen käsin webhotelliisi. Sisällönhallintajärjestelmäsi ja tuotteesi on kuitenkin oltava yhteensopivia (katso tuotteemme [tästä](https://www.ovh-hosting.fi/webhotelli/){.external}.)

![Sisällönhallintajärjestelmien logo](images/CMS_logo.png){.thumbnail}


### Mene yhden klikkauksen moduulien hallintaan

Mene hallintapaneelin vasemmassa laidassa olevassa valikossa kohtaan `Webhotellit`{.action} ja sitten kyseessä olevaan webhotelliin. Klikkaa nyt kuvaketta `1 klikkauksen moduulit`{.action}.

Voit tarkastella siellä jo asennettuja moduuleja, hallinnoida niitä ja asentaa uusia.

![Pääsy osioon 1 klikkauksen moduulit](images/access_to_the_1_click_modules_section.png){.thumbnail}

### Lisää moduuli

Uuden moduulin asennus tapahtuu klikkaamalla painiketta `Lisää moduuli`{.action}.

Avautuvassa ikkunassa voit valita haluamasi sisällönhallintajärjestelmän ja sitten verkkotunnuksen, johon haluat asentaa sivusi:

![Moduulin valinta](images/add_a_module.png){.thumbnail}

Jos et löydä listalta haluamaasi verkkotunnusta, mene kuvakkeeseen `Multisite`{.action} ja lisää se. Yritä sitten moduulin lisäystä uudelleen.

Voit myös katsoa apua ohjeesta [Verkkotunnuksen jakaminen usealle sivulle](https://docs.ovh.com/fi/hosting/multisiten-konfigurointi-webhotellissa/){.external}.

Kun olet valinnut verkkotunnuksen, sinun on valittava helpotettu tai edistynyt asennus:

- Helpotettu asennus (oletusvalintana): toteutamme sisällönhallintajärjestelmän asennuksen ja välitämme sinulle tunnuksesi sen hallinnoimista varten. Tämä on helpoin ja nopein tapa asentaa moduuli.
- Edistynyt asennus: voit räätälöidä sisällönhallintajärjestelmän asennuksessa sovellettavaa konfigurointia. Tätä varten tietokantaasi on syötettävä useita sisällönhallintajärjestelmän toiminnan kannalta välttämättömiä tietoja: kirjautumistiedot, asennushakemisto, asennuksen kieli, administraattorin tunnus jne.

#### Moduulin yksinkertainen asennus

Toteuttaaksesi tämän asennuksen varmista, että kohtaa `Edistynyt asennus`{.action} ei ole rastitettu. Klikkaa sitten painiketta `Asenna`{.action}.

> [!warning]
>
> Moduulisi asennushakemiston on oltava tyhjä ja sinulla on oltava käytettävissä oleva tietokanta, jotta asennus voi onnistua.
> 

![Moduulin yksinkertainen asennus](images/choose_installation.png){.thumbnail}

Kun asennus on päättynyt saat sähköpostiviestin, joka sisältää sisällönhallintajärjestelmän käyttöliittymään tarvittavat tunnukset. Voit nyt kirjautua käyttöliittymään muokkaamaan verkkosivuasi.

#### Moduulin edistynyt asennus

Toteuttaaksesi tämän asennuksen varmista, että kohta `Edistynyt asennus`{.action} on rastitettu. Klikkaa sitten painiketta `Asenna`{.action}.

![Moduulin edistynyt asennus](images/advanced_installation.png){.thumbnail}

##### Valitse tietokanta.

Syötä nyt tietokantasi kirjautumistiedot. On olemassa useita vaihtoehtoja:

- Webhotelliisi on jo luotu tietokanta: valitse se listasta ja täydennä pyydetyt tiedot.
- Webhotellissasi ei ole vielä luotu tietokantaa: seuraa ohjeita sellaisen luomiseksi ja tee sitten menettely uudelleen.
- Tietokanta on luotu Private SQL - tai CloudDB-instanssissa: valitse se listasta `Webhotellin ulkopuoliset tietokannat`{.action} ja täydennä pyydetyt tiedot. Instanssin ja webhotellin on oltava ylläpidettyinä samassa konesalissa.
- Tietokanta on luotu toisessa OVH:n webhotellissa: valitse se listasta `Webhotellin ulkopuoliset tietokannat`{.action} ja täydennä pyydetyt tiedot. Tietokannan ja webhotellin on oltava ylläpidettyinä samassa konesalissa.

Kun tiedot on annettu, klikkaa painiketta `Seuraava`{.action}.

> [!warning]
>
> Mikäli antamasi tiedot ovat virheellisiä, asennusta ei saada päätökseen. Tämän välttämiseksi suosittelemme ensi sijassa testaamaan yhteytesi tietokantaan.
> 

![Tietokanta edistynyttä asennusta varten](images/advanced_installation_database.png){.thumbnail}

##### Konfiguroi moduuli

Sinun on syötettävä seuraavat tiedot moduulin konfiguroimiseksi:

- *administraattorin nimi tai sähköpostiosoite:* tämä on käyttäjätunnus, jota käytät sisällönhallintajärjestelmän käyttöliittymään kirjautumisessa.
- *salasana:* tämä on salasana, jota tarvitset kirjautumisessa sisällönhallintajärjestelmän käyttöliittymään.
- *verkkotunnus:* verkkotunnus, jolle haluat asentaa verkkosivusi.
Voit myös katsoa apua ohjeesta [Webhotellin jakaminen usealle sivulle](https://docs.ovh.com/fi/hosting/multisiten-konfigurointi-webhotellissa/).
- *kieli:* sisällönhallintajärjestelmän asennuskieli
- *asennuspolku:* tämä täytetään automaattisesti verkkotunnuksen valinnan yhteydessä. Sitä on mahdollista täydentää syöttämällä alahakemistoja. 

Kun tiedot on annettu, klikkaa painiketta `Seuraava`{.action}.

> [!warning]
>
> Annetun asennuspolun on oltava tyhjä kaikesta sisällöstä, jotta asennus saadaan päätökseen. 
> 

![Moduulin konfigurointi edistyneessä asennuksessa](images/advanced_installation_configuration.png){.thumbnail}

##### Vahvista asennus

Edistyneen asennuksen viimeisessä vaiheessa on suositeltavaa tarkistaa näytetyt tiedot, klikkaa sitten `Vahvista`{.action}:

![Asennuksen vahvistus edistyneessä tilassa](images/advanced_installation_summary.png){.thumbnail}

### Oman sivun räätälöinti

Saat sähköpostitse ilmoituksen sisällönhallintajärjestelmän moduulin asennuksen onnistumisesta sekä ohjeet hallintakäyttöliittymään kirjautumista varten. Voit nyt muokata verkkosivusi teemaa ja julkaista ensimmäiset sisältösi.

Jos haluat apua sivusi toimintoihin liittyen, kehotamme siirtymään sisällönhallintajärjestelmän kehittäjän sivuille, josta löydät dokumentaation projektisi avuksi.

|CMS|Dokumentaatio|
|---|---|
|WordPress|[First steps with WordPress](https://wordpress.org/support/article/first-steps-with-wordpress/){.external}|
|PrestaShop|[Getting started with PrestaShop](http://doc.prestashop.com/display/PS17/Getting+Started){.external}|
|Joomla!|[Getting started with Joomla!](https://www.joomla.org/about-joomla/getting-started.html){.external}|
|Drupal|[Understanding Drupal](https://www.drupal.org/docs/7/understanding-drupal/overview){.external}|

## Lisää aiheesta

[Sisällönhallintajärjestelmän valinta verkkosivun luomista varten](https://www.ovh-hosting.fi/webhotelli/website/cms-vertailu/){.external}

[Kuinka jakaa webhotelli useille sivuille](https://docs.ovh.com/fi/hosting/multisiten-konfigurointi-webhotellissa/){.external}

Tutustu [Private SQL -tuotteisiimme](https://www.ovh-hosting.fi/webhotelli/sql-optiot.xml){.external}

Tutustu [Cloud Database -tuotteisiimme](https://www.ovh-hosting.fi/cloud/cloud-databases/){.external}

Viesti käyttäjäyhteisömme kanssa osoitteessa <https://ovh-hosting.fi/community/foorumi>.
