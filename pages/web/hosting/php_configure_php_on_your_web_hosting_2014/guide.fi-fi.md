---
title: 'Webhotellin PHP-version vaihtaminen'
slug: php-konfigurointi_ovhn_webhotellissa
excerpt: 'Katso, kuinka OVH:n webhotellin PHP-versio vaihdetaan'
section: PHP
order: 1
---

**Päivitetty 20.9.2018**

## Tavoite

Verkossa on olemassa valtava määrä verkkosivuja. [OVH:n webhotellissa](https://www.ovh-hosting.fi/webhotelli/){.external} voit ylläpitää haluamaasi verkkosivua, kunhan se on yhteensopiva [infrastruktuuriemme konfiguraation kanssa](https://cluster028.hosting.ovh.net/infos/){.external}. Tästä johtuen saatat haluta muuttaa webhotellisi käyttämää PHP-versiota.

**Katso, kuinka OVH:n webhotellin PHP-versio vaihdetaan.**

## Edellytykset

- Sinulla on yhteensopiva [webhotellituote](https://www.ovh-hosting.fi/webhotelli/){.external} (ei Cloud Web)
- Käytetystä tavasta riippuen, sinulla on pääsyoikeudet webhotellituotteesi hallintaan [hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager) tai tiedot, joiden avulla voit kirjautua tallennustilaan. 

## Käytännössä

PHP-ohjelmointikielestä on olemassa nykyään useita eri versioita. Kuten on tapana, kehittyneemmät versiot tuovat erilaisia korjauksia sekä lisäävät tai poistavat toimintoja. OVH tarjoaa viimeisimmät merkittävät PHP-versiot, joiden listan voit löytää tästä linkistä: <https://www.ovh-hosting.fi/webhotelli/php.xml> 

Koska tiettyjä ominaisuuksia ei voida enää ylläpitää uusien versioiden myötä, **varmista ennen muutosten tekemistä, että uusi PHP-versio on yhteensopiva verkkosivusi kanssa.**

### 1. vaihe: Varmista verkkosivusi yhteensopivuus

Vaikka OVH hallinnoi viimeisimpien PHP-versioiden asennuksia palvelimillaan, on sinun tehtäväsi webmasterin ominaisuudessa varmistaa, että sivusi on aina päivitetty ja siis yhteensopiva uusimpien PHP-versioiden kanssa. Varmistamiseen on olemassa kaksi mahdollisuutta käyttämäsi verkkosivun mukaan.

**Käytän avaimet-käteen-sivua, kuten järjestelmänhallintaohjelmaa (Content Management System tai CMS) kuten WordPress tai Joomla!**: 

- katso käyttämäsi CMS:n tekijän virallinen dokumentaatio 
- hae tiedot koskien CMS:äsi toiminnan kannalta välttämättömiä teknisiä edellytyksiä sekä menettelytapa ohjelman päivittämiseksi
- päivitä tarvittaessa CMS:äsi varmistuen sen yhteensopivuudesta OVH:n webhotellin kanssa.

**Käytän personoituun ratkaisuun perustuvaa sivua**: 

- ota yhteyttä verkkosivusi tehneeseen webmasteriin
- katso apua virallisesta PHP-dokumentaatiosta, jossa on lisätietoa versioiden migraatioista: <http://php.net/manual/en/appendices.php>
- päivitä tarvittaessa verkkosivusi koodi varmistuen sen yhteensopivuudesta OVH:n webhotellin kanssa.

Tarvittaessa sinulla on mahdollisuus selvittää webhotellisi tällä hetkellä käyttämä PHP-versio kahdella tavalla. 

|Tapa|Kuvaus|
|---|---|
|Hallintapaneelin kautta|Kirjaudu [hallintapaneeliisi](https://www.ovh.com/auth/?action=gotomanager){.external}, klikkaa kohtaa `Webhotellit`{.action} vasemman reunan valikossa ja valitse sitten kyseessä oleva webhotelli. Välilehdellä `Yleiset tiedot`{.action} poimi versio kohdan “**Globaali PHP-versio**” alapuolelta. Jos näet sinisen pyöreän symbolin, odota muutama minuutti version päivittymistä.|
|Skriptin kautta|Luo **.php**-skripti, joka sisältää ainoastaan koodin `<?php phpinfo(); ?>`. Aseta se verkkoon tallennustilassasi ja kutsu sitä sitten menemällä sen täydelliseen URL-osoitteeseen.|

![php-versio](images/change-php-version-step1.png){.thumbnail}

Jos et onnistu varmistamaan verkkosivusi yhteensopivuutta uuden PHP-version kanssa, voit yrittää vaihtaa nykyisen version ja palata tarvittaessa taaksepäin, **vaikkakaan emme suosittele toimimaan näin**. Olemassa on nimittäin se riski, että aiheutat toimintahäiriön verkkosivulle. On mahdollista, että jokin verkkosivun erityistoiminnoista kärsii eikä enää toimi, vaikka verkkosivu olisi yhä näkyvissä muutoksen jälkeen. 

Kun olet valmis toteuttamaan muutoksen, mene seuraavaan vaiheeseen.

### 2. vaihe: Vaihda webhotellisi PHP-versio

Webhotellisi PHP-version muokkaamiseen on olemassa kaksi tapaa:

- **konfiguraatioavustajan kautta OVH:n hallintapaneelissa**: tämä ratkaisu on vähemmän tekninen ja edellyttää kirjautumista hallintapaneeliin, jossa voit valita halutun PHP-version muiden asetusten joukosta. Katso ohjeita, jotka löytyvät dokumentaatiosta [“Webhotellin konfiguraation muokkaaminen”](https://docs.ovh.com/fi/hosting/webhotellin_kayttoympariston_muokkaaminen/){.external} muutoksen toteuttamiseksi tällä tavalla.

- **muokkaamalla käsin tallennustilassasi olevaa tiedostoa**: tämä vaihtoehto on teknisempi ja edellyttää kirjautumista tallennustilaan, jossa on muokattava “.ovhconfig”-tiedostoa. Katso ohjeita, jotka löytyvät dokumentaatiosta [“Webhotellin .ovhconfig-tiedoston konfigurointi”](https://docs.ovh.com/fi/hosting/ovhconfig-tiedoston-konfigurointi/){.external} muutoksen toteuttamiseksi tällä tavalla.

Teknofriikeille: PHP-version muokkaus .htaccess-tiedoston kautta ei ole enää mahdollista viimeisissä [OVH:n webhotellituotteissa](https://www.ovh-hosting.fi/webhotelli/){.external}. Hakemisto, joka mahdollistaa PHP-version vaihtamisen, ei salli edellisten PHP-versioiden käyttämistä infrastruktuureissamme. Sitä varten on ehdottomasti käytettävä “.ovhconfig”-tiedostoa. Tarvittaessa voit katsoa apua dokumentaatiostamme [“Webhotellin .ovhconfig-tiedoston konfigurointi”](https://docs.ovh.com/fi/hosting/ovhconfig-tiedoston-konfigurointi/){.external}.

## Lue lisää aiheesta

[Webhotellin konfiguraation muokkaaminen](https://docs.ovh.com/fi/hosting/webhotellin_kayttoympariston_muokkaaminen/){.external}

[Webhotellin .ovhconfig-tiedoston konfigurointi](https://docs.ovh.com/fi/hosting/ovhconfig-tiedoston-konfigurointi/){.external}

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.