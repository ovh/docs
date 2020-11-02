---
deprecated: true
title: 'Oikeuksien jakaminen Exchange-tilillä'
slug: exchange_2013_taysien_oikeuksien_antaminen_tilille
excerpt: 'Katso, kuinka voit antaa Exchange-tilisi oikeuksia toiselle osapuolelle'
section: 'Ominaisuudet ja Exchangen jakaminen'
---

**Päivitetty 21.8.2018**

## Tavoite

Exchange-palvelun avulla voidaan hyödyntää yrityssähköpostiosoitteita, jotka helpottavat eri ominaisuuksiensa ansiosta tiimityöskentelyä. Yksi niistä mahdollistaa tiettyjen oikeuksien jakamisen (kuten viestien lähetyksen tai pääsyoikeuden) eri Exchange-tilien välillä.

**Katso, kuinka voit antaa Exchange-tilisi oikeuksia toiselle osapuolelle.**

## Edellytykset

- Sinulla on [Exchange-tuote](https://www.ovh-hosting.fi/sahkopostit/){.external}.
- Sinulla on vähintään kaksi aktiivista Exchange-tiliä konfiguroituna samalla OVH:n Exchange-alustalla.
- Olet kirjautunut [hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager).
- Sinulla on tunnukset sille Exchange-tilille, joka tulee saamaan uusia jaettuja oikeuksia.

## Käytännössä

Ennen aloittamista määritä oikeudet, jotka tulet jakamaan. Muistathan, että oikeuksia jakaessasi annat yhdelle tai useammalle Exchange-tilille ylimääräisiä oikeuksia kyseistä Exchange-tiliä koskien.

|Oikeudet|Kuvaus|
|---|---|
|Lähetysoikeudet|Mahdollistaa sähköpostiviestin lähetyksen toisen nimissä. Viestin lähettänyt tili ei näy lähettäjänä vaan tili, johon tällä on lähetysoikeudet. Viestissä ei ole mainintaa siitä, että se on lähetetty toisen henkilön kautta.|
|Edustajakäyttöoikeudet|Mahdollistaa sähköpostiviestin lähetyksen toisen puolesta. Viestin lähettänyt tili ei näy lähettäjänä vaan tili, johon tällä on edustuskäyttöoikeudet. Viestissä kuitenkin lukee, että se on lähetetty viestin oikean lähettäjän toimesta.|
|Pääsyoikeudet|Antaa pelkän lukuoikeuden tilille, jonka pääsyoikeus on jaettu. Tämä oikeus ei mahdollista viestien lähetystä vaan ainoastaan sisällön lukemisen.|

> [!warning]
>
> “Lähetysoikeutta” ei ole mahdollista yhdistää “Edustajakäyttöoikeuksien” kanssa. Muut yhdistelmät ovat kuitenkin mahdollisia.
> 

Kun olet tunnistanut tilin, jonka oikeuksia jaetaan, määrittänyt jaettavat oikeudet sekä tunnistanut lisäksi ylimääräiset oikeudet saavan tilin tai tilit, jatka seuraavaan vaiheeseen.

### 1\. vaihe: Jaon toteutus

Toimenpiteen aloittamiseksi kirjaudu [OVH:n hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager){.external}. Klikkaa kohtaa `Microsoft`{.action} vasemman reunan palveluvalikossa, sitten `Exchange`{.action}. Klikkaa sitten sitä Exchange-palvelua, jossa tili, jonka oikeuksia jaetaan, sijaitsee. Mene lopuksi välilehdelle `Sähköpostit`{.action}.

Näkyviin tulevassa taulukossa on kaikki Exchange-palveluusi liitetyt tilit. Klikkaa oikeuksien jakamisen kohteena olevan tilin oikealla puolella olevaa kolmea pistettä ja sitten `Valtuutusten hallinta`{.action}.

![valtuutus](images/delegation-step1.png){.thumbnail}

Valitse näkyviin tulevalla sivulla oikeudet, jotka haluat jakaa. Niiden on vastattava yhtä tai useampaa oikeudet saavaa tiliä. Klikkaa sitten `Seuraava`{.action}.

![valtuutus](images/delegation-step2.png){.thumbnail}

Käytä muutama minuutti muutosten yhteenvedon huolelliseen tarkistamiseen. Jos kaikki on kunnossa, klikkaa `Vahvista`{.action}. Muutaman minuutin kuluttua jako luodaan palvelimillamme.

Kun jako on konfiguroitu, *test@mypersonaldomain.ovh* voi suorittaa tilille *test2@mypersonaldomain.ovh* valitut toiminnot.

### 2\. vaihe: Jaettujen oikeuksien käyttäminen

Nyt kun oikeudet on jaettu, ei ole muuta jäljellä kuin niiden käyttö. Varmista ennen jatkamista, että sinulla on jaetut oikeudet saaneen Exchange-tilin tunnukset.

Toimintatapa on erilainen riippuen jaetuista oikeuksista sekä ohjelmistosta tai verkkokäyttöliittymästä, jota käytät Exchange-tilillesi kirjautumista varten. Jatka tämän dokumentaation lukemista jakamiesi oikeuksien mukaan.

- [“Pääsyoikeuden” käyttäminen](https://docs.ovh.com/fi/microsoft-collaborative-solutions/exchange_2013_taysien_oikeuksien_antaminen_tilille/#21-paasyoikeuden-kayttaminen){.external}

- [“Lähetysoikeuden” käyttäminen](https://docs.ovh.com/fi/microsoft-collaborative-solutions/exchange_2013_taysien_oikeuksien_antaminen_tilille/#22-lahetysoikeuden-kayttaminen){.external}

- [“Edustajakäyttöoikeuksien” käyttäminen](https://docs.ovh.com/fi/microsoft-collaborative-solutions/exchange_2013_taysien_oikeuksien_antaminen_tilille/#23-edustajakayttoikeuksien-kayttaminen){.external}

> [!warning]
>
> Tämä ratkaisu edellyttää osaamista käyttämästäsi sovelluksesta tai käyttöliittymästä. Joitakin menettelyä koskevia tietoja on esitelty alla. Suosittelemme ottamaan kuitenkin yhteyttä erikoistuneeseen palveluntarjoajaan ja/tai sovelluksen tai käyttöliittymän kehittäjään, mikäli kohtaat hankaluuksia. Me emme voi tarjota avustusta asiassa.
>

#### 2.1 “Pääsyoikeuden” käyttäminen

- **Webmail Outlook Web Application (OWA)**

Mene osoitteeseen <https://www.ovh-hosting.fi/mail/> ja syötä jaettuja oikeuksia sisältävän Exchange-tilin tunnukset. Kun olet kirjautunut, klikkaa hiiren oikeaa painiketta vasemman puoleisessa valikossa ja valitse sitten `Lisää jaettu tiedosto`{.action}.

Anna näkyviin tulevassa ikkunassa tilin nimi (sen, jonka oikeuksia on jaettu sinulle) ja klikkaa sitten `Lisää`{.action}. Tili näkyy nyt vasemman reunan valikossa ja sen sisältöä voidaan tarkastella.

![valtuutus](images/delegation-step3.png){.thumbnail}

- **Outlook Windowsille**

Klikkaa Outlook 2016 -sovelluksessasi yläreunan valintapalkissa kohtaa `Tiedosto`{.action} ja klikkaa sitten `Tilin asetukset`{.action}. Klikkaa alasvetovalikosta uudestaan `Tilin asetukset`{.action}. Valitse näkyviin tulevassa ikkunassa jaetut oikeudet saanut tili ja klikkaa sitten `Muokkaa`{.action}. 

![valtuutus](images/delegation-step4.png){.thumbnail}

Klikkaa nyt `Lisäasetukset`{.action}. Valitse uudessa ikkunassa välilehti `Edistynyt`{.action} ja klikkaa sitten `Lisää`{.action}. Syötä jaetut oikeudet saaneen tilin nimi ja vahvista lisäys sen päätökseen asti. Tili näkyy nyt vasemman reunan valikossa ja sen sisältöä voidaan tarkastella.

![valtuutus](images/delegation-step5.png){.thumbnail}

#### 2.2 “Lähetysoikeuden” käyttäminen

- **Webmail Outlook Web Application (OWA)**

Mene osoitteeseen <https://www.ovh-hosting.fi/mail/> ja syötä jaettuja oikeuksia sisältävän Exchange-tilin tunnukset. Kun olet kirjautunut, aloita uuden viestin kirjoitus painamalla painiketta `+Uusi`{.action}.

Klikkaa näkyviin tulevalla alueella kolmea pistettä esittävää painiketta ja sitten ` Näytä Lähettäjä-kenttä`{.action}. Klikkaa sitten painiketta `Lähettäjä`{.action} ja valitse osoite, joka näkyy lähettäjänä (jonka jaetut oikeudet sinulla on). Jos se ei tule näkyviin, poista jo syötetty osoite ja kirjoita haluamasi. 

Nyt tarvitsee vain kirjoittaa ja lähettää viesti. 

![valtuutus](images/delegation-step6.png){.thumbnail}

- **Outlook Windowsille**

Aloita Outlook 2016 -sovelluksellasi uuden viestin kirjoittaminen. Varmista, että painike `Lähettäjä`{.action} näkyy kirjoitusikkunassa. Jos näin ei ole, siirry välilehdelle `Asetukset`{.action} ja klikkaa sitten `Näytä Lähettäjä`{.action}.

Klikkaa sitten painiketta `Lähettäjä`{.action} ja valitse osoite, joka näkyy lähettäjänä (jonka jaetut oikeudet sinulla on). Mikäli se ei tule näkyviin, klikkaa kohtaa `Muu sähköpostiosoite`{.action}, syötä haluamasi osoite ja vahvista. 

Nyt tarvitsee vain kirjoittaa ja lähettää viesti. 

![valtuutus](images/delegation-step7.png){.thumbnail}

#### “Edustajakäyttöoikeuksien” käyttäminen

- **Webmail Outlook Web Application (OWA)**

Mene osoitteeseen <https://www.ovh-hosting.fi/mail/> ja syötä jaettuja oikeuksia sisältävän Exchange-tilin tunnukset. Kun olet kirjautunut, aloita uuden viestin kirjoitus painamalla painiketta `+Uusi`{.action}.

Klikkaa näkyviin tulevalla alueella kolmea pistettä esittävää painiketta ja sitten ` Näytä Lähettäjä-kenttä`{.action}. Klikkaa sitten painiketta `Lähettäjä`{.action} ja valitse osoite, joka näkyy lähettäjänä (jonka jaetut oikeudet sinulla on). Jos se ei tule näkyviin, poista jo syötetty osoite ja kirjoita haluamasi. 

Nyt tarvitsee vain kirjoittaa ja lähettää viesti. 

![valtuutus](images/delegation-step6.png){.thumbnail}

- **Outlook Windowsille**

Aloita Outlook 2016 -sovelluksellasi uuden viestin kirjoittaminen. Varmista, että painike `Lähettäjä`{.action} näkyy kirjoitusikkunassa. Jos näin ei ole, siirry välilehdelle `Asetukset`{.action} ja klikkaa sitten `Näytä Lähettäjä`{.action}.

Klikkaa sitten painiketta `Lähettäjä`{.action} ja valitse osoite, joka näkyy lähettäjänä (jonka jaetut oikeudet sinulla on). Mikäli se ei tule näkyviin, klikkaa kohtaa `Muu sähköpostiosoite`{.action}, syötä haluamasi osoite ja vahvista. 

Nyt tarvitsee vain kirjoittaa ja lähettää viesti. 

![valtuutus](images/delegation-step7.png){.thumbnail}

## Lue lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.