---
deprecated: true
title: Webhotellin käytön aloitus
slug: webhotellin-kayton-aloitus
excerpt: Katso, kuinka webhotellin käyttö aloitetaan.
section: Aluksi
order: 1
---

**Päivitetty 24.11.2017**

## Tavoite

Olet hankkinut webhotellin verkkosivun luomista varten. Tässä webhotellissa on mahdollista asentaa avaimet käteen -ratkaisulla (WordPress, PrestaShop) tehty sivu tai kehittää alustaa itse pysyvästi saatavilla olevilla palvelimilla.  Tämän ohjeen avulla voit oppia, kuinka verkkosivu avataan käden käänteessä.

**Katso, kuinka webhotellin käyttö aloitetaan.**

## Edellytykset

- Sinulla on [webhotellituote](https://www.ovh-hosting.fi/webhotelli){.external}.
- Olet saanut vahvistussähköpostin webhotellisi asennusta koskien.
- Sinulla on [verkkotunnus](https://www.ovh-hosting.fi/verkkotunnukset){.external}, joka on osoite verkkosivullesi.
- Olet kirjautunut [hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}


## Käytännössä

### 1. vaihe: Projektin rajaaminen

Haluatko luoda blogin tai verkkokaupan? Haluatko jakaa kiinnostuksesi kohteen tai edistää liiketoimintaasi verkossa? Haluatko siirtää olemassa olevan sivun OVH:lle? Jotta projektisi sujuu hyvin, on tärkeää olla selkeä näkemys tavoitteista.

OVH:n webhotellin ansiosta voit luoda uuden verkkosivun tai siirtää jo olemassa olevan.

- **Uuden verkkosivun luominen**

 Voit luoda verkkosivusi itse, mikäli sinulla on ohjelmointiosaamista tai käyttää avaimet käteen -sivuja kuten sisällönhallintajärjestelmiä (CMS). Ensimmäinen vaihtoehto on teknisempi, mutta tarjoaa mahdollisuuden mittatilausprojektin luomiseen. Toinen mahdollistaa käyttövalmiin rakenteen hyödyntämisen eikä edellytä teknisiä taitoja.

OVH on antanut asiakkaidensa käyttöön hallintapaneeliin työkalun, jolla voidaan asentaa sisällönhallintajärjestelmä (vaihtoehtoina WordPress, PrestaShop, Drupal ja Joomla) yhdellä klikkauksella. Jos et tiedä, mitä sisällönhallintajärjestelmää käyttäisit, tämä [vertailu](https://www.ovh-hosting.fi/webhotelli/website/cms-vertailu/){.external} voi auttaa valinnan tekemisessä. Jos OVH ei tarjoa sisällönhallintajärjestelmää, jonka haluaisit asentaa, voit asentaa sen käsin webhotelliisi.

- **Olemassa olevan sivun siirtäminen OVH:lle**

Verkkosivun migraatio saattaa osoittautua herkäksi toimenpiteeksi erityisesti kun se toteutetaan palveluilla, jotka ovat sillä hetkellä tuotannossa ja joilla palvelukatkosta ei saa tapahtua. Tässä mielessä tämä ohje kertaa vain jotkut palveluiden migraation vaiheet. Verkkosivuston migraatioprosessin täydellisen kuvauksen voit lukea ohjeesta [Verkkosivuston siirtäminen OVH:lle](https://docs.ovh.com/fi/hosting/sivun-migraatio-ovhlle/){.external}.


### 2. vaihe: Verkkosivuston asennus

Kun projektisi on määritetty tarkasti, se täytyy enää toteuttaa webhotellissasi. Seuraava vaihe koskeekin siis sivujesi siirtämistä verkkoon. Siihen on olemassa kolme mahdollista tapaa käytettävissä olevasta ajasta sekä teknisen osaamisesi tasosta riippuen.


#### Helppo yhden klikkauksen vaihtoehto ilman teknistä osaamista

Tässä vaihtoehdossa käytetään OVH:n yhden klikkauksen moduulia, jolla voidaan asentaa sisällönhallintajärjestelmä helposti ja nopeasti. OVH toteuttaa verkkosivun asennuksen ja välittää sinulle sen hallinnoimiseen tarvittavat käyttäjätunnukset.

Jotta OVH:n moduulin asennus onnistuu, varmista, että moduulin asennushakemisto on tyhjä (se on tyhjä, jos et ole vielä kirjautunut tallennustilaasi). Kirjaudu [hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} yhden klikkauksen moduulin asennusta varten. Mene  vasemmassa laidassa olevassa valikossa kohtaan `Webhotellit`{.action} ja sitten tilaamaasi webhotelliin. Klikkaa kuvakkeessa `Yhden klikkauksen moduulit`{.action} painiketta `Lisää moduuli`{.action}.

![Mene yhden klikkauksen moduuleihin](images/access_to_the_1_click_modules_section.png){.thumbnail}

Käynnistääksesi yhden klikkauksen moduulin asennuksen valitse haluamasi sisällönhallintajärjestelmä ja varmista, ettei kohta `Edistynyt asennus`{.action} ole rastitettu. Klikkaa sitten painiketta `Asenna`{.action}.

Nyt täytyy enää odottaa, että saat moduulin asennuksesta kertovan vahvistusviestin. Tämä viesti sisältää sivun hallinnoimiseen tarvittavat tunnukset. Tämän jälkeen voit seurata alla olevia vaiheita.

Mikäli haluat lisätietoa OVH:n yhden klikkauksen moduuleista, tutustu dokumentaatioomme:  [Verkkosivun asennus yhden klikkauksen moduuleilla.](https://docs.ovh.com/fi/hosting/1-klikkauksen-moduulit){.external}


#### Muutaman klikkauksen nopea vaihtoehto, ei vaatimuksia teknisen osaamisen suhteen

Tässä vaihtoehdossa käytetään OVH:n yhden klikkauksen moduulia, jolla sisällönhallintajärjestelmä voidaan asentaa helposti. OVH asentaa verkkosivusi antamiesi räätälöityjen tietojen ansiosta (esimerkiksi sisällönhallintajärjestelmän kirjautumistietojen mukautus). Jotta voit käyttää tätä vaihtoehtoa, tuotteessasi on oltava vähintään yksi tietokanta.

Jotta moduulin asennus onnistuu, varmista, että:

- moduulin asennushakemisto on tyhjä (se on tyhjä, jos et ole vielä kirjautunut tallennustilaasi)
- webhotellissasi on jo luotu tietokanta (mene kuvakkeeseen `Tietokannat`{.action} ja sitten kohtaan `Luo tietokanta`{.action} toimenpiteen tekemiseksi).

Kirjaudu tietokannan luomista varten [Hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}. Mene vasemmassa laidassa olevassa valikossa kohtaan `Webhotellit`{.action} ja klikkaa sitten tilaamaasi webhotellia. Klikkaa kuvakkeessa `Tietokannat`{.action} painiketta `Luo tietokanta`{.action}. Täydennä pyydetyt tiedot ja odota sitten asennuksen valmistumista.

![Mene yhden klikkauksen moduuleihin](images/create_a_database.png){.thumbnail}

Kun tietokanta on luotu, mene yhden klikkauksen moduulin luomista varten kuvakkeeseen `1 klikkauksen moduulit`{.action} ja klikkaa sitten painiketta `Lisää moduuli`{.action}. Valitse sisällönhallintajärjestelmä, jonka haluat asentaa ja varmista, että kohta `Edistynyt asennus`{.action} on rastitettu. Klikkaa sitten painiketta `Seuraava`{.action}.

![Mene yhden klikkauksen moduuleihin](images/access_to_the_1_click_modules_section.png){.thumbnail}

Seuraa pyydettyjä tietoja moduulin asennuksen käynnistymiseen asti. Nyt tarvitsee enää odottaa, että saat asennusta koskevan vahvistusviestin. Tämän jälkeen voit seurata loput alla olevat vaiheet.

Jos haluat tietää lisää moduulin asennuksesta edistyneessä tilassa, tutustu dokumentaatioomme: [Verkkosivun asennus yhden klikkauksen moduuleilla.](https://docs.ovh.com/fi/hosting/1-klikkauksen-moduulit){.external}


#### Käsin tehtävä vaihtoehto, edellyttää teknistä osaamista

Tämä vaihtoehto on sopiva silloin, kun haluat luoda tai siirtää verkkosivun käyttämättä OVH:n moduuleja. Sinulla on oltava hallussasi siirrettäväksi tarkoitetun sivun tiedostot. Tallennustilaan täytyy siis kirjautua manuaalisesti, ladata sivun tiedostot ja sitten, mikäli mahdollista, liittää ne aiemmin luotuun tietokantaan.

Tähän ei ole olemassa yleistä ohjetta, sillä sivut voivat poiketa toisistaan hyvin paljon. Pystymme kuitenkin ohjaamaan sinua webhotellissasi suoritettavissa menettelyissä dokumentaatiomme avulla: [Kotisivujen siirto verkkoon](https://docs.ovh.com/fi/hosting/webhotellit_kotisivujen_siirto_verkkoon/){.external} ja [Verkkosivujen siirtäminen OVH:lle](https://docs.ovh.com/fi/hosting/sivun-migraatio-ovhlle/){.external}. Kun verkkosivusi on asennettu käsin webhotelliisi, voit seurata loput alla olevat vaiheet.


### 3. vaihe: Sähköpostiosoitteiden luonti

Tämä vaihe voi olla valinnainen, jos et halua käyttää [webhotellituotteeseesi](https://www.ovh-hosting.fi/webhotelli){.external} sisältyviä sähköpostiosoitteita. Varmista yhden tai useamman sähköpostiosoitteen luomista varten, että olet kirjautuneena [hallintapaneeliisi](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}. Mene vasemmassa laidassa olevassa valikossa kohtaan `Sähköpostit`{.action} ja sitten tilaamaasi webhotelliin. Klikkaa sitten kuvakkeessa `Sähköpostit`{.action} painiketta `Luo sähköpostiosoite`{.action}.

![Luo sähköpostiosoite](images/create_an_email_address.png){.thumbnail}

Seuraa pyydettyjä tietoja sähköpostiosoitteesi luomiseen saakka. Toista vaihe useiden sähköpostiosoitteiden luomiseksi. Jos olet siirtämässä sähköpostejasi OVH:lle, kehotamme käyttämään apunasi [OVH Mail Migrator -työkaluamme](https://omm.ovh.net/){.external}. 

Mikäli haluat lukea lisää sähköpostiosoitteen luomisesta tai palveluiden siirtämisestä OVH:lle, voit tutustua dokumentaatioomme: [Ohje postilaatikon luomiseen](https://docs.ovh.com/fi/emails/webhotellit_ja_sahkopostit_ohje_postilaatikon_luomiseen/){.external} ja [Verkkosivujen siirtäminen OVH:lle](https://docs.ovh.com/fi/hosting/sivun-migraatio-ovhlle/){.external}.


### 4. vaihe: Tarkista tai muokkaa verkkotunnuksesi konfiguraatiota

Tässä vaiheessa verkkosivusi on oltava asennettuna OVH:n webhotelliin ja sähköpostiosoitteesi on luotuna. On mahdollista, että nämä eivät ole vielä toiminnassa, mikäli verkkotunnuksesi konfiguraatio on virheellinen. Tämä liittyy DNS-kenttiin, jotka mahdollistavat verkkosivusi saatavuuden ja viestien vastaanoton verkkotunnustasi käyttävissä sähköpostiosoitteissa.

Esimerkiksi kun vierailija avaa verkkosivusi, hän syöttää selaimeensa verkkosivusi osoitteen (verkkotunnuksesi). Tällöin tapahtuu nimipalvelimen selvitys. Verkkotunnuksesi voidaan juuri tämän menettelyn avulla liittää palvelimeen, jolla sivusi on ylläpidettynä. Tämä vuorovaikutus on mahdollista tiedoilla, jotka on syötetty DNS-alueelle. Se toimii eräänlaisena puhelinluettelona, johon verkkotunnuksesi konfiguraatio on kirjattuna.

Jos olet tilannut verkkotunnuksesi OVH:n webhotellin yhteydessä etkä ole vielä tehnyt DNS-alueen muokkausta hallintapaneelissa, voit siirtyä suoraan seuraavaan vaiheeseen. Päinvastaisessa tilanteessa tai jos olet epävarma, suosittelemme lukemaan tämän vaiheen loppuun asti.


#### Opi tuntemaan OVH:n DNS-tietueet 

OVH:lla on olemassa useita DNS-kenttiä. Keskitymme erityisesti niistä kahteen, jotka mahdollistavat verkkosivusi saatavuuden ja viestien vastaanoton verkkotunnustasi käyttävissä sähköpostiosoitteissa.

- **A-kenttä verkkosivua varten**

Tarkistaaksesi verkkotunnuksesi DNS-alueen käyttöä varten tarvittavan A-kentän, kirjaudu [OVH:n hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}. Mene vasemmassa laidassa olevassa valikossa kohtaan `Webhotellit`{.action} ja sitten tilaamaasi webhotelliin. Hae sitten kuvakkeesta `Yleiset tiedot`{.action} IP-osoite, joka löytyy kohdan “IPv4” alta.

![A-kentän muokkaus](images/know_the_OVH_A_records.png){.thumbnail}

- **MX-kenttä sähköposteja varten**

Tarkistaaksesi MX-kentän, jota täytyy käyttää verkkotunnuksesi DNS-alueella, kirjaudu [OVH:n hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}. Mene hallintapaneelin vasemmassa laidassa olevassa valikossa kohtaan `Sähköpostit`{.action} ja sitten tilaamaasi webhotelliin. Hae lopuksi kuvakkeesta `Yleiset tiedot`{.action} kohdan “MX-kentät” vieressä näkyvät tiedot. Nämä voivat vaihdella eri palveluissa valitsemastasi DNS-suodattimesta riippuen.

![MX-kenttien muokkaus](images/know_the_OVH_MX_records.png){.thumbnail}


#### Tarkista ja/tai muokkaa DNS-tietueita

Nyt kun webhotelliisi sisältyvät DNS-tietueet ovat tulleet tutuiksi, täytyy ne vielä tarkistaa ja tehdä tarvittaessa muokkauksia. Menettely vaihtelee toteuttamastasi projektista riippuen.

- **Verkkotunnuksen tilaus OVH:n webhotellin yhteydessä**

Verkkotunnuksesi konfiguraatio on jo oikein. Jatka seuraavaan vaiheeseen. Mikäli olet kuitenkin tehnyt jo toimenpiteitä [hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} verkkotunnuksesi DNS-alueella, on mahdollista, ettei näin enää ole.
    
Verkkotunnuksesi DNS-alueelle pääset osiosta `Verkkotunnukset`{.action}, joka löytyy vasemmanpuoleisesta valikosta. Klikkaa sitten kyseessä olevaa verkkotunnusta. Tarkista lopuksi tiedot kuvakkeessa `DNS-alue`{.action} ja muokkaa niitä tarvittaessa.


- **Verkkotunnus, joka ei käytä OVH:n DNS-aluetta**
    
Tarkista verkkotunnuksesi DNS-alue verkkotunnustasi hallinnoivalta palveluntarjoajalta. Muokkaa tietoja tarvittaessa.


- **Siirrä palvelusi (sivusi ja sähköpostisi) OVH:lle**

Tämän tyyppisissä tilanteissa DNS-alueeseen liittyvät menettelyt voivat aiheuttaa palvelukatkoksen, mikäli niitä ei ole tehty oikeaan aikaan. Dokumentaatiossamme [Verkkosivujen siirto OVH:lle](https://docs.ovh.com/fi/hosting/){.external} kuvailtujen vaiheiden mukaisesti sinun on muokattava prosessin lopussa verkkotunnuksesi nimipalvelimia.


> [!primary]
>
> DNS-alueen muokkaus tarvitsee 4 - 24 tunnin propagaatioajan ennen kuin muutos on astunut täysin voimaan.
>


### 5. vaihe: Sivun räätälöinti

Sivusi on nyt käytettävissä. Tämä vaihe voi olla valinnainen, jos olet siirtänyt olemassa olevan ja siis jo valmiiksi räätälöidyn verkkosivun! Jos olet kuitenkin asentanut uuden sivun esimerkiksi moduuliemme kautta, voit räätälöidä sitä muokkaamalla teemaa ja julkaisemalla ensimmäiset omat sisältösi.

Jos haluat apua sivusi toimintoihin liittyen, kehotamme siirtymään sisällönhallintajärjestelmän kehittäjän sivuille, josta löydät dokumentaation projektisi avuksi.


### 6. vaihe: Sähköpostiosoitteiden käyttö

Enää ei ole muuta jäljellä kuin sähköpostiosoitteidesi käyttö. Tätä varten OVH tarjoaa käytettäväksi selaintyökalun (selainposti eli webmail) nimeltä RoundCube. Se on käytettävissä osoitteessa <https://mail.ovh.net/>, jossa sinun on syötettävä OVH:lla luotuun sähköpostiosoitteeseen liittyvät tunnukset.

Lisää tietoa RoundCubesta löydät seuraavasta ohjeesta: [RoundCuben käyttö](https://docs.ovh.com/fi/emails/selainposti_roundcube-ohje/){.external} Jos haluat konfiguroida sähköpostiosoitteen sähköpostiohjelmistoon tai laitteeseen (esim. älypuhelin tai tabletti), tutustu dokumentaatiomme tässä portaalissa: <https://docs.ovh.com/fi/emails//>.


## Lisää aiheesta

[Verkkosivun siirtäminen OVH:lle](https://docs.ovh.com/fi/hosting/sivun-migraatio-ovhlle/){.external}

[Kotisivujen siirtäminen verkkoon](https://docs.ovh.com/fi/hosting/webhotellit_kotisivujen_siirto_verkkoon/){.external}

[Verkkosivun asennus yhden klikkauksen moduuleilla](https://docs.ovh.com/fi/hosting/1-klikkauksen-moduulit){.external}

[Postilaatikon luominen](https://docs.ovh.com/fi/emails/webhotellit_ja_sahkopostit_ohje_postilaatikon_luomiseen/){.external}

[RoundCuben käyttö](https://docs.ovh.com/fi/emails/selainposti_roundcube-ohje/){.external}

Viesti käyttäjäyhteisömme kanssa osoitteessa <https://ovh-hosting.fi/community/foorumi>.