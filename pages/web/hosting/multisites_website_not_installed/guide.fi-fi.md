---
deprecated: true
title: Ratkaisu virheeseen “Verkkosivu ei asennettu”
excerpt: Katso, kuinka virhe “Verkkosivu ei asennettu” ratkaistaan
slug: webhotellit_asentamattoman_sivun_virhe
section: Webhotellin konfigurointi
order: 2
---

**Päivitetty 5.3.2018**

## Tavoite

Varoitussivu “Verkkosivu ei asennettu” merkitsee, että verkkotunnuksen nimipalvelimen konfigurointi on virheellinen tai että verkkosivusi käyttämä verkkotunnus on konfiguroitu virheellisesti OVH:n webhotellissa.

**Katso, kuinka virhe“Verkkosivu ei asennettu” ratkaistaan.**

## Edellytykset

- Sinulla on [webhotellituote](https://www.ovh-hosting.fi/webhotelli){.external}.
- Sinulla on valtuudet hallita [webhotelliasi](https://www.ovh-hosting.fi/webhotelli/){.external} (, joka ylläpitää kyseistä verkkosivua).
- Sinulla on valtuudet hallita kyseisen verkkotunnuksen konfigurointia (eli sen DNS-aluetta).
- Olet kirjautunut [hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Käytännössä

Varoitussivu “Verkkosivu ei asennettu” tulee näkyviin ainoastaan kahdessa erityistapauksessa:

- Verkkosivusi käyttämää verkkotunnusta ei ole lisätty oikein **Multisite**-ominaisuudessa OVH:n webhotellisi konfiguraatioon.
- Verkkosivusi käyttämää verkkotunnusta ei ole yhdistetty kunnolla webhotelliisi, sillä se ei käytä DNS-konfiguroinnissa oikeaa IP-osoitetta.

Kahden alla olevan vaiheen avulla voit tarkistaa nämä kaksi konfigurointia ja ratkaista “Verkkosivu ei asennettu” -virheen näkymisen.

![sitenotinstalled](images/site-not-installed-webpage.png){.thumbnail}

### 1. vaihe: Tarkista webhotellin konfiguraatio (Multisite)

Jotta voit tarkistaa, onko verkkotunnuksesi lisätty oikein Multisite-ominaisuudessa webhotelliisi, kirjaudu [hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager){.external}. Klikkaa sitten `Webhotellit`{.action} vasemmanpuoleisessa palveluvalikossa. Valitse webhotellilistasta se, jonka ylläpitämälle verkkosivulle “Asentamattoman sivun”-virhe näkyy. Mene lopuksi välilehdelle `Multisite`{.action}.

Näkyviin tuleva taulukko sisältää kaikki webhotelliisi Multisite-ominaisuudessa lisätyt verkkotunnukset. Voit käyttää kyseessä olevan verkkotunnuksen etsimisessä apuna hakupalkkia.

Etsi nyt verkkotunnus taulukosta. On olemassa useita mahdollisia skenaarioita:

|Mahdolliset skenaariot|Tehtävä toiminto|
|---|---|
|Verkkotunnus näkyy taulukossa|Tämä merkitsee sitä, että verkkotunnus on lisätty Multisite-ominaisuudessa webhotelliisi. Jos lisäyksestä on kulunut alle 15 minuuttia, odota hetki, että ilmoitus “Verkkosivu ei asennettu” häviää. Jos varoitus pysyy edelleen näkyvissä, jatka [vaiheeseen 2. “Verkkotunnuksen DNS-konfiguraation tarkistaminen”.](https://docs.ovh.com/fi/hosting/webhotellit_asentamattoman_sivun_virhe/#2-vaihe-verkkotunnuksen-dns-konfiguraation-tarkistaminen)external}|
|Verkkotunnus ei enää näy taulukossa|Jos olit lisännyt verkkotunnuksen eikä se näy enää taulukossa, on mahdollista, ettet ole suorittanut kaikkia webhotelliin lisäämisen vaiheita tai olet epähuomiossa poistanut sen. Kehotamme seuraamaan dokumentaatiossamme [“Webhotellin jakaminen useille verkkosivuille”](https://docs.ovh.com/fi/hosting/multisiten-konfigurointi-webhotellissa/){.external} kuvattuja vaiheita lisätäksesi verkkotunnuksesi uudelleen.|
|Verkkotunnus ei näy taulukossa|Et ole vielä lisännyt tätä verkkotunnusta Multisite-ominaisuudessa OVH:n webhotelliisi. Kehotamme seuraamaan dokumentaatiotamme [“Webhotellin jakaminen useille verkkosivuille”](https://docs.ovh.com/fi/hosting/multisiten-konfigurointi-webhotellissa/){.external} kuvattuja vaiheita tämän toimenpiteen tekemiseksi.|

Jos “Verkkosivu ei asennettu” tulee edelleen näkyviin verkkosivusi sijasta kaikista toimista huolimatta, jatka alla olevaan vaiheeseen “Verkkotunnuksen DNS-konfiguraation tarkistaminen”.

### 2. vaihe: Verkkotunnuksen DNS-konfiguraation tarkistaminen

Hae ensin käytettävä OVH:n konfiguraatio. Mene sitä varten kyseisessä webhotellissa välilehdelle `Yleiset tiedot`{.action}, ja hae sitten kohtien **IPv4** ja **IPv6** vieressä näkyvät osoitteet.

![sitenotinstalled](images/site-not-installed-know-a-records.png){.thumbnail}

Voit nyt tarkistaa verkkotunnuksesi DNS-konfiguroinnin. Tämä tarkistus on tehtävä konfigurointia hallinnoivan palveluntarjoajan käyttöliittymässä.

> [!primary]
>
> Jos verkkotunnuksesi on rekisteröity OVH:lle, voit tarkistaa käyttääkö se konfiguraatiotamme. Klikkaa sitä varten [hallintapaneelin](https://www.ovh.com/auth/?action=gotomanager){.external} vasemmassa reunassa olevassa valikossa kohtaa `Verkkotunnukset`{.action} ja tämän jälkeen kyseessä olevaa verkkotunnusta. Mene lopuksi välilehdelle `Nimipalvelimet`{.action}.
>

Tarkistus voi tapahtua kahdessa eri paikassa verkkotunnuksesi käyttämästä konfiguraatiosta riippuen:

- **Verkkotunnuksesi ei käytä OVH:n nimipalvelimia**: sinun on tehtävä tarkistus (kuvattu alla) verkkotunnuksesi konfiguraatiota hallinnoivan palveluntarjoajan käyttöliittymässä.

- **Verkkotunnuksesi käyttää OVH:n konfiguraatiota**: tee tarkistus [hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager){.external}. Mene välilehdelle `DNS-alue`{.action}, kun olet siirtynyt kyseessä olevaan verkkotunnukseen. DNS-konfiguraatio on näkyvissä taulukossa, jonka jokainen rivi vastaa tiettyä DNS-tietuetta. Sisältöä on mahdollista suodattaa tietueen tyypin tai verkkotunnuksen perusteella.

![sitenotinstalled](images/site-not-installed-edit-ovh-dns-zone.png){.thumbnail}

Varmista verkkotunnusta hallinnoivasta käyttöliittymästä, että alla olevat DNS-tietueet on konfiguroitu oikein.

|Tietue|Kohde|
|---|---|
|A|Kohteen on vastattava aiemmin haettua **IPv4**-osoitetta.|
|AAAA|Kohteen on vastattava aiemmin haettua **IPv6**-osoitetta.|

On olemassa kaksi mahdollista skenaariota:

|Mahdolliset skenaariot|Tehtävä toiminto|
|---|---|
|Kohteet ovat oikein|Tämä merkitsee sitä, että verkkotunnuksesi on oikein. Jos olet muokannut sen DNS-konfigurointia 24 tunnin sisällä, odota, että muutos on astunut täysin voimaan.|
|Kohteet eivät ole oikein|Verkkotunnuksesi konfiguraatiota on muokattava. Jos se käyttää OVH:n konfigurointia, kehotamme seuraamaan dokumentaatiossa [“Miten DNS-aluetta muokataan”](https://docs.ovh.com/fi/domains/miten_dns-aluetta_muokataan/){.external}. Muussa tapauksessa seuraa palveluntarjoajasi käyttöliittymässä annettuja ohjeita. Kun muokkaus on tehty, tarvitaan enintään 24 tunnin propagaatioaika ennen kuin muutos on astunut voimaan.|

Vaiheissa 1 ja 2 tehtyjen toimien mukaisesti sekä ilmoitetut viiveet huomioiden, varoituksen “Verkkosivu ei asennettu” ei pitäisi tulla enää näkyviin.

## Lue lisää aiheesta 

[Webhotellin jakaminen useille verkkosivuille.](https://docs.ovh.com/fi/hosting/multisiten-konfigurointi-webhotellissa/){.external}

[Miten DNS-aluetta muokataan?](https://docs.ovh.com/fi/domains/miten_dns-aluetta_muokataan/){.external}

Viesti käyttäjäyhteisömme kanssa osoitteessa [https://ovh-hosting.fi/community/foorumi](https://ovh-hosting.fi/community/foorumi){.external}.