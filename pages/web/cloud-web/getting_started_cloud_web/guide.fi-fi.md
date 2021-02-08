---
deprecated: true
title: 'Cloud Web -webhotellin käytön aloitus'
slug: cloud-web-kayton-aloitus
excerpt: 'Katso, kuinka webhotellin käyttö aloitetaan.'
section: Aluksi
---

**Päivitetty 11.7.2018**

## Tavoite

Cloud Web -webhotellissamme yhdistyvät kahdenkymmenen vuoden kokemuksemme webhotellitoiminnasta sekä Public Cloud -tuotteemme tehokkuus. Perinteisten webhotelliemme tavoin verkkosivujasi ylläpidetään vuorokauden ympäri ja viikon jokaisena päivänä hallinnoidussa palvelussa. Samalla tarjoamme enemmän ominaisuuksia kuten suorituskykyiset SSD-levyt.

**Katso, kuinka Cloud Web -webhotellin käyttö aloitetaan.**

## Edellytykset

- Sinulla on [Cloud Web -webhotellituote](https://www.ovh-hosting.fi/webhotelli/cloud-web.xml).
- Olet saanut Cloud Web -webhotellisi asennusta koskevan vahvistussähköpostin.
- Sinulla on [verkkotunnus](https://www.ovh-hosting.fi/verkkotunnukset/), joka on osoite verkkosivullesi.
- Olet kirjautunut [hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie).

## Käytännössä

### 1. vaihe: Projektin rajaaminen

Jotta saisit paremman tuntuman projektiisi, Cloud Web -webhotelli tarjoaa enemmän konfigurointimahdollisuuksia perinteiseen webhotelliin verrattuna. Selkeä näkemys tavoitteista on tärkeää, jotta projekti voidaan viedä sujuvasti päätökseen asti. Tätä varten suosittelemme:

- **määrittelemään, mitä haluat asentaa**: Haluatko luoda blogin tai verkkokaupan? Haluatko jakaa kiinnostuksesi kohteen tai edistää liiketoimintaasi verkossa? Määritä projektisi selkeästi ennen aloittamista.

- **selvittämään asennusta varten vaadittavat tekniset edellytykset**: On mahdollista, että asennettava projekti edellyttää erityisiä teknisiä ennakkovaatimuksia. Varmista, että olet tutustunut niihin etukäteen.

- **varmistumaan projektisi teknisestä yhteensopivuudesta Cloud Web -webhotellin kanssa**: Tarvitsetko runtime engine -moottoria tai tiettyä SQL:ää? Jos et ole vielä tehnyt sitä, varmista, että se on saatavilla [Cloud Web -webhotellisi](https://www.ovh-hosting.fi/webhotelli/cloud-web.xml) kanssa.

Kun olet arvioinut tarjolla olevat erilaiset vaihtoehdot ja rajannut projektisi tarkasti, voit aloittaa sen siirtämisen verkkoon.

### 2. vaihe: Runtime engine -moottorin valinta

Cloud Web tarjoaa useita ohjelmointikieliä projektisi rakentamiseen. Jos haluat käyttää muuta kuin oletuksena olevaa PHP-kieltä, sinun on valittava ohjelmointikieltäsi vastaava “runtime engine”.

Tällä hetkellä saatavilla olevat ohjelmointikielet ovat PHP ja Node.js.

Runtime engine -moottoriin päästäksesi kirjaudu [hallintapaneeliisi](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}, klikkaa kohtaa `Webhotellit`{.action} vasemman reunan valikossa ja valitse sitten kyseessä oleva Cloud Web -webhotelli. Mene lopuksi välilehdelle `Runtime engine -moottorit`{.action}.

Yksi moottori on luotu automaattisesti webhotellisi asennuksen yhteydessä. Se on `oletusvalintana` näkyviin tulevassa taulukossa. Muokataksesi jo määritettyä moottoria klikkaa sen vieressä olevia kolmea pistettä ja sitten `Muokkaa`{.action}. 

Voit myös lisätä ylimääräisiä runtime engine -moottoreita [Cloud Web](https://www.ovh-hosting.fi/webhotelli/cloud-web.xml) -tuotteestasi riippuen klikkaamalla painiketta `Toiminnot`{.action} ja sitten `Lisää runtime engine`{.action}. Huomaa, että runtime engine -moottorien enimmäismäärä riippuu tilaamastasi Cloud Web -tuotteesta.

Voit nyt varmistaa, että sinulla on projektiasi varten tarvittavat runtime engine -moottorit ennen jatkamista eteenpäin.

![cloudweb](images/cloud-web-first-steps-step1.png){.thumbnail}

### 3. vaihe: Ympäristömuuttujien valinta (valinnainen)

Kun haluat ottaa käyttöön projektisi useamman kerran eri ympäristöissä (esimerkiksi kehitys-, testi- tai tuotantoympäristö), sinun on annettava ympäristömuuttujat, jotta koodisi reagoi sen mukaisesti. Tätä varten Cloud Web -tuote tarjoaa mahdollisuuden määrittää ympäristömuuttujia, jotka ovat verkkosivusi tai verkkosovelluksesi koodin saatavilla.

Esimerkiksi tämä ei mahdollista “env”-tiedoston määrittämistä PHP Laravel -kehyksessä kuten kyseisen kehyksen dokumentaatiossa mainitaan: <https://laravel.com/docs/5.6/configuration>.

Lisätäksesi ympäristömuuttujan, pysy edelleen kyseisessä Cloud Web -webhotellissa ja klikkaa välilehteä `Ympäristömuuttujat`{.action}. Näkyviin tulee taulukko, joka näyttää tuotteessasi luodut ympäristömuuttujat. Lisätäksesi uuden klikkaa painiketta `Toiminnot`{.action} ja sitten `Lisää ympäristömuuttuja`{.action}. Seuraa sitten ohjeita sen mukaan, minkä muuttujan haluat luoda.

![cloudweb](images/cloud-web-first-steps-step2.png){.thumbnail}

Jos et käytä ympäristömuuttujia sisältävää kehityskehystä tai haluat vain tarkistaa muuttujien toimivuuden, voit luoda skriptin, joka tekee tämän tarkistuksen. Alla on näkyvissä kaksi esimerkkiä, joita voit käyttää apuna tässä toimenpiteessä. Ne eivät kuitenkaan korvaa webmasterin apua.

- **PHP**:

```php
<?php echo "ENV: " . $_ENV['DB_DATABASE']; ?>
```

- **Node.js**:

```sh
var http = require('http');

http.createServer(function(request, response) {  
    response.writeHeader(200, {"Content-Type": "text/html"});  

    response.write( process.env.DB_DATABASE);

    response.end();  
}).listen(80);
```

Korvaa huolellisesti “DB_DATABASE”-skriptin yleiset tiedot kyseisellä ympäristömuuttujalla.

### 4. vaihe: Ylimääräisten verkkotunnusten konfigurointi Multisite-verkkotunnuksina

Nyt kun Cloud Web -webhotellisi tekninen ympäristö on valmis, voit konfiguroida siihen ylimääräisiä verkkotunnuksia Multisite-verkkotunnuksina. Näin voit jakaa tallennustilasi esimerkiksi useiden verkkosivujen ylläpitoa varten. Jos tämä pätee projektiisi, klikkaa Cloud Web -webhotellissa olevaa välilehteä `Multisite`{.action}.

Näkyviin tuleva taulukko sisältää webhotelliisi lisätyt verkkotunnukset. Jotkut niistä on luotu automaattisesti webhotellisi asennuksen yhteydessä. Lisätäksesi uuden verkkotunnuksen klikkaa painiketta `Lisää verkkotunnus tai aliverkkotunnus`{.action} ja seuraa näkyviin tulevia ohjeita. Menettelytapa voi vaihdella riippuen siitä, onko verkkotunnus rekisteröity OVH:lle tai ei. 

Kehotamme valppauteen seuraavia tietoja täydentäessä:

- **Juurikansio**: kyseessä on hakemisto, jonne annettu verkkotunnus on sijoitettava Cloud Web -webhotellisi tallennustilassa. 

- **Runtime engine**: kyseessä on etukäteen määritetty runtime engine -moottori, jota parhaillaan konfiguroimasi Multisite tulee käyttämään.

> [!warning]
>
> Jos olet lisännyt ulkopuolisena pidetyn verkkotunnuksen, sinun on määritettävä DNS-konfiguroinnissa TXT-kenttä nimeltä **ovhcontrol**. Sen avulla OVH voi varmistaa, että lisäys on oikeutettu. Tämä on siis välttämätöntä, ja jos sitä ei ole tehty, lisäys perutaan. 
>

Toista tämä menettely, jos haluat lisätä useita verkkotunnuksia Cloud Web -webhotelliisi. Lisätietoa Multisite-verkkotunnuksen lisäämisestä löydät dokumentaatiostamme: [Webhotellin jakaminen useille verkkosivuille](https://docs.ovh.com/fi/hosting/multisiten-konfigurointi-webhotellissa/){.external}.

![cloudweb](images/cloud-web-first-steps-step3.png){.thumbnail}

### 5. vaihe: Projektisi asennus Cloud Web -webhotelliin

Projektin asennus voidaan toteuttaa kahdella tapaa. Toista sopivimman menettelyn kohdat, jos haluat siirtää verkkoon useampia projekteja.

#### 1. Käytä yhden klikkauksen moduulejamme

Tämän vaihtoehdon avulla voit hyödyntää käyttövalmiin sivun rakennetta ja räätälöidä sitä (teema, tekstit jne.). OVH:lla on tarjolla neljä erilaista ratkaisua: [“Luo verkkosivu yhden klikkauksen moduulilla”](https://www.ovh-hosting.fi/webhotelli/website/){.external}.

Jos valitset yhden klikkauksen moduulin, klikkaa edelleen kyseisessä Cloud Web -webhotellissa välilehteä `Yhden klikkauksen moduulit`{.action} ja sitten `Lisää moduuli`{.action}. Tämän jälkeen voit käynnistää asennuksen “yksinkertaisessa” (ei personoidussa) tai “edistyneessä” tilassa (mahdollisuus personoida tiettyjä elementtejä).

Mikäli haluat lisätietoa OVH:n yhden klikkauksen moduuleista, tutustu dokumentaatioomme: [Verkkosivun asennus yhden klikkauksen moduuleilla](https://docs.ovh.com/fi/hosting/1-klikkauksen-moduulit/){.external}

> [!primary]
>
> Yhden klikkauksen moduulin käyttämiseksi on ehdottomasti käytettävä PHP runtime engine -moottoria.
>

![cloudweb](images/cloud-web-first-steps-step4.png){.thumbnail}

#### 2. Projektin asentaminen käsin

Oli sitten kyse uuden sivun asentamisesta tai olemassa olevan sivun siirtämisestä, on käsin asentaminen teknisempää ja se täytyy tehdä oman osaamisesi mukaisesti. Suosittelemme ottamaan sitä varten yhteyttä erikoistuneeseen palveluntarjoajaan ja/tai palvelun kehittäjään, mikäli kohtaat hankaluuksia. 

Jos valitset asennuksen käsin, sinulla on oltava hallussasi kaikki asennettavaa verkkosivua tai sovellusta koskevat tiedostot sekä etukäteen Cloud Web -webhotelliisi luodun tietokannan tunnukset, mikäli sitä tarvitaan verkkosivusi toimintaan. Mikäli kyse on sivun siirrosta, sinulla on oltava sen täydellinen kopio.

Yleistä menettelyä ei ole olemassa, sillä projektit voivat vaihdella toisistaan niin paljon. Dokumentaatiomme [“Verkkosivujen siirto verkkoon”](https://docs.ovh.com/fi/hosting/verkkosivun-siirto-verkkoon/){.external} sekä [“Verkkosivujen siirto OVH:lle”](https://docs.ovh.com/fi/hosting/sivun-migraatio-ovhlle/){.external} voivat kuitenkin auttaa toimenpiteissä.

### 6. vaihe: Sähköpostiosoitteiden luonti

Nyt kun projektisi on asennettu Cloud Web -webhotelliin, voit luoda sähköpostiosoitteita. Jos et halua luoda sähköpostiosoitetta, siirry suoraan seuraavaan vaiheeseen.

Luodaksesi yhden tai useamman sähköpostiosoitteen pysy edelleen [hallintapaneelissasi](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}, klikkaa kohtaa `Sähköpostit`{.action} vasemman reunan palveluvalikossa ja valitse sitten verkkotunnus, johon Cloud Web on tilattu.

Luodaksesi uuden sähköpostiosoitteen klikkaa painiketta `Luo sähköpostiosoite`{.action} ja seuraa näkyviin tulevia vaiheita. Tutustu tarvittaessa dokumentaatioomme: [“Sähköpostiosoitteen luominen MX Plan -tuotteella”](https://docs.ovh.com/fi/emails/webhotellit_ja_sahkopostit_ohje_postilaatikon_luomiseen/){.external}

![cloudweb](images/cloud-web-first-steps-step5.png){.thumbnail}

### 7. vaihe: Muokkaa verkkotunnuksen konfiguraatiota

Tässä vaiheessa verkkosivusi on oltava asennettuna Cloud Web -webhotelliin ja sähköpostiosoitteesi on luotuna. Jos nämä eivät ole vielä toiminnassa, saattaa verkkotunnuksesi konfiguraatio olla virheellinen. Jos näin on tai olet epävarma tilanteesta, suosittelemme jatkamaan tämän vaiheen loppuun asti.

Huomaa kuitenkin, että jos olet siirtämässä palveluitasi OVH:lle, voivat nimipalvelimiin liittyvät toimenpiteet johtaa palvelukatkokseen, mikäli ne toteutetaan huonolla hetkellä. Dokumentaatiossamme [Verkkosivujen siirto OVH:lle](https://docs.ovh.com/fi/hosting/sivun-migraatio-ovhlle/){.external} kuvailtujen vaiheiden mukaisesti sinun on muokattava prosessin lopussa verkkotunnuksesi nimipalvelimia.

#### 1. Opi tuntemaan OVH:n DNS-tietueet 

OVH:lla on olemassa useita DNS-tietueita. Keskitymme erityisesti niistä kahteen, jotka mahdollistavat verkkosivusi saatavuuden ja viestien vastaanoton verkkotunnustasi käyttävissä sähköpostiosoitteissa. Alla olevia ohjeita seuraamalla opit, mistä nämä voidaan hakea:

|DNS-tietue|Palvelu, johon tietue liittyy|Mistä se löytyy?|
|---|---|---|
|A|Verkkosivu|[Hallintapaneelisi](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} osiosta `Webhotellit`{.action} kyseessä olevan Cloud Web -webhotellin kohdalla. Hae IP-osoite, joka näkyy välilehdellä `Yleiset tiedot`{.action} kohdan ”IPv4” vieressä.|
|MX|Sähköpostit|[Hallintapaneelisi](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} osiosta `Sähköpostit`{.action} kyseisen verkkotunnuksen kohdalla. Hae tiedot, jotka näkyvät välilehdellä `Yleiset tiedot`{.action} kohdan “MX-kentät” vieressä.|

#### 2. Tarkista ja/tai muokkaa DNS-tietueita

Nyt kun tiedät Cloud Web -webhotelliisi kuuluvat DNS-tietueet sekä OVH:n sähköpostituotteesi, sinun täytyy tarkistaa, että nämä on konfiguroitu oikein ja muokattava niitä tarvittaessa. Nämä kaksi toimenpidettä on tehtävä ehdottomasti verkkotunnuksesi DNS-konfiguraatiota (DNS-alue) hallinnoivalla palveluntarjoajalla.

> [!warning]
>
> - Jos verkkotunnuksesi ei käytä OVH:n nimipalvelimia, sinun on tehtävä muokkaus verkkotunnuksesi konfiguraatiota hallinnoivan palveluntarjoajan käyttöliittymässä.
> 
> - Jos verkkotunnuksesi on rekisteröity OVH:lle, voit tarkistaa, käyttääkö se konfiguraatiotamme. Mene sitä varten [hallintapaneelin](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} välilehdelle `Nimipalvelimet`{.action}, kun olet ensin siirtynyt kyseiseen verkkotunnukseen.
>

Toimenpiteiden suorittamiseksi katso alla olevia ohjeita:

|Käytetty DNS-konfigurointi|Missä toimenpide tehdään?|
|---|---|
|OVH|[Hallintapaneelisi](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} osiossa `Verkkotunnukset`{.action} kyseisen verkkotunnuksen kohdalla. Tarkista tiedot välilehdeltä `DNS-alue`{.action} ja muokkaa niitä tarvittaessa. Voit katsoa tarvittaessa apua dokumentaatiosta [“OVH:n DNS-alueen muokkaus”](https://docs.ovh.com/fi/domains/miten_dns-aluetta_muokataan/){.external}.|
|Muu|Verkkotunnuksesi DNS-konfiguraatiota hallinnoivan palveluntarjoajan käyttöliittymässä. Kehotamme ottamaan yhteyttä tähän tahoon, jos kohtaat hankaluuksia toimenpiteen teossa.|

Kun verkkotunnuksesi DNS-aluetta on muokattu, tarvitaan enintään 24 tuntia kestävä propagaatioaika, jotta muutokset astuvat voimaan. Jos olet liittänyt useamman verkkotunnuksen Cloud Web -webhotelliisi Multisite-verkkotunnuksina, sinun on tehtävä nämä kaksi toimenpidettä kummallekin verkkotunnukselle. 

### 8. vaihe: Sivun räätälöinti

Tämä vaihe voi olla valinnainen, jos olet siirtänyt olemassa olevan ja siis jo valmiiksi räätälöidyn verkkosivun! Jos olet kuitenkin asentanut uuden sivun esimerkiksi moduuliemme kautta, voit räätälöidä sitä muokkaamalla teemaa ja julkaisemalla ensimmäiset omat sisältösi.

Jos haluat apua sivusi toimintoihin liittyen, kehotamme siirtymään sisällönhallintajärjestelmän kehittäjän sivuille, josta löydät dokumentaation projektisi avuksi.

### 9. vaihe: Sähköpostiosoitteiden käyttö

Enää ei ole muuta jäljellä kuin sähköpostiosoitteidesi käyttö. Tätä varten OVH tarjoaa käytettäväksi selaintyökalun (selainposti eli webmail) nimeltä RoundCube. Se on käytettävissä osoitteessa <https://www.ovh-hosting.fi/mail/>, jossa sinun on syötettävä OVH:lla luotuun sähköpostiosoitteeseen liittyvät tunnukset.

Lisää tietoa RoundCubesta löydät seuraavasta ohjeesta: [RoundCuben käyttö](https://docs.ovh.com/fi/emails/selainposti_roundcube-ohje/){.external}. Jos haluat konfiguroida sähköpostiosoitteen sähköpostiohjelmistoon tai laitteeseen (esim. älypuhelin tai tabletti), tutustu dokumentaatioomme tässä portaalissa: <https://docs.ovh.com/fi/emails//>.

## Lisää aiheesta

[Verkkosivun siirtäminen OVH:lle](https://docs.ovh.com/fi/hosting/sivun-migraatio-ovhlle/){.external}

[Verkkosivun siirto verkkoon webhotellissa](https://docs.ovh.com/fi/hosting/verkkosivun-siirto-verkkoon/){.external}

[Verkkosivun asennus yhden klikkauksen moduuleilla](https://docs.ovh.com/fi/hosting/1-klikkauksen-moduulit){.external}

[Webhotellin jakaminen useille verkkosivuille](https://docs.ovh.com/fi/hosting/multisiten-konfigurointi-webhotellissa/){.external}

[Postilaatikon luominen](https://docs.ovh.com/fi/emails/webhotellit_ja_sahkopostit_ohje_postilaatikon_luomiseen/){.external}

[RoundCuben käyttö](https://docs.ovh.com/fi/emails/selainposti_roundcube-ohje/){.external}

Viesti käyttäjäyhteisömme kanssa osoitteessa <https://community.ovh.com/en/>.