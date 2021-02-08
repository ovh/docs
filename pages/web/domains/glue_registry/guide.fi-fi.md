---
deprecated: true
title: 'OVH:n verkkotunnuksen nimipalvelinten personointi'
slug: glue_registry
excerpt: 'Opi personoimaan OVH:n verkkotunnuksesi nimipalvelimia'
section: 'DNS ja DNS-alue'
order: 7
---

**Päivitetty 10.10.2018**

## Tavoite

Nimipalvelimet ylläpitävät verkkotunnusten DNS-konfiguraatioita. Niitä voidaan kutsua myös DNS-alueeksi ja ne koostuvat teknisistä tiedoista eli tietueista. Perinteisessä käytössä niillä voidaan yhdistää verkkotunnuksesi ja palvelin tai palvelimet, jotka ylläpitävät verkkosivuasi ja sähköpostiosoitteitasi.

Tarpeen mukaan voit personoida OVH:n verkkotunnuksesi nimipalvelinten nimeä.

**Opi personoimaan OVH:n verkkotunnuksesi nimipalvelimia**

## Edellytykset

- Sinulla on OVH:lla rekisteröity verkkotunnus.
- Olet kirjautunut [hallintapaneelin](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} `Web Cloud`{.action}-osioon.

## Käytännössä

**DNS-alueen personoinnissa on noudatettava huolellisuutta.** Vääränlaisen muutoksen tekeminen saattaa esimerkiksi estää pääsyn verkkosivullesi tai uusien viestien saapumisen sähköpostiosoitteisiisi. Kehotamme seuraamaan tarkasti alla kuvattuja vaiheita tai pyytämään apua, jos et ole varma siitä, mitä teet.

### 1. vaihe: GLUE-tietueen lisääminen

Kirjaudu [hallintapaneelisi](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} `Web Cloud`-osioon, klikkaa `Verkkotunnukset`{.action} vasemman reunan valikossa ja valitse sitten verkkotunnus, jolle haluat personoida nimipalvelimia. Mene lopuksi välilehdelle `GLUE`{.action}.

Näkyviin tulevalla sivulla on taulukko, jossa on tämänhetkiset OVH:lla konfiguroidut GLUE-tietueet verkkotunnustasi koskien. GLUE-tietueen lisäämiseksi klikkaa painiketta `Lisää`{.action}.

![glueregistry](images/customize-dns-servers-step1.png){.thumbnail}

Täydennä näkyviin tulevassa ikkunassa pyydetyt tiedot:

|Tiedot|Tiedot|  
|---|---|
|Isäntäpalvelimen nimi|Mukauta personoituna isäntäpalvelimena käytettävän isäntäpalvelimen nimeä.|
|Kohde-IP-osoitteet|Ilmoita IP-osoitteet, joihin isäntäpalvelin on liitettävä. Kyseessä on verkkotunnuksesi tällä hetkellä käyttämän nimipalvelimen IP-osoite. Jos verkkotunnuksesi käyttää OVH:n nimipalvelimia etkä tiedä sitä vastaavaa IP-osoitetta, käytä “[Dig](https://www.ovh-hosting.fi/tuki/tyokalut/dig_domain.pl){.external}”-työkaluamme sen hakemiseksi. Se tulee näkyviin osioon `ANSWER SECTION` kohdan “A” viereen.|

Kun tiedot on täytetty, klikkaa painiketta `Lisää`{.action}, tutustu näkyvissä oleviin tietoihin ja klikkaa sitten `Vahvista`{.action}. Toista tätä niin monta kertaa kuin tarvitset verkkotunnuksesi käyttämien nimipalvelinten lukumäärän mukaan.

![glueregistry](images/customize-dns-servers-step2.png){.thumbnail}

### 2. vaihe: Nimipalvelinten A-tietueiden luominen

Nyt sinun on luotava A-tietueet edellisessä vaiheessa määrittämillesi isäntäpalvelimille. Jokaisen A-tietueen kohteena on oltava aiemmin luotua isäntäpalvelimen nimeä vastaava kohde-IP-osoite.

Tämä toimenpide on tehtävä verkkotunnuksesi DNS-konfiguraatiota hallinnoivan palveluntarjoajan käyttöliittymässä. Sitten on olemassa kaksi vaihtoehtoa:

- **verkkotunnuksesi ei käytä OVH:n nimipalvelimia**: ota yhteyttä nimipalvelimiasi hallinnoivaan palveluntarjoajaan. Kun A-tietueet on luotu, jatka seuraavaan vaiheeseen.

- **verkkotunnuksesi käyttää OVH:n nimipalvelimia**: mene välilehdelle `DNS-alue`{.action} ja aloita uuden A-tietueen lisäys klikkaamalla `Lisää tietue`{.action}. Valitse lisättävän tietueen tyypiksi A ja jatka sitten seuraavat vaiheet loppuun saakka. Katso tarvittaessa dokumentaatiossa “[DNS-alueen muokkaus](https://docs.ovh.com/fi/domains/miten_dns-aluetta_muokataan/){.external}” kuvattuja ohjeita.

![glueregistry](images/customize-dns-servers-step3.png){.thumbnail}

### 3. vaihe: OVH:n verkkotunnuksesi nimipalvelinten muokkaus

Jäljellä on enää OVH:n verkkotunnuksesi nimipalvelinten muokkaus. Mene sitä varten välilehdelle `Nimipalvelimet`{.action}, klikkaa sitten `Muokkaa nimipalvelimia`{.action}. Korvaa nyt nykyiset nimipalvelimet niillä, joita haluat käyttää. 

Viimeistele vaiheet ja katso tarvittaessa ohjeita, jotka on kuvattu dokumentaatiossa “[OVH:n verkkotunnuksen nimipalvelinten muokkaus](https://docs.ovh.com/fi/domains/webhotellit_yleista_nimipalvelimista/){.external}”.

Kun nimipalvelinten muokkaus on tehty, odota toimenpiteen rekisteröitymistä. Siihen tarvitaan 48 tunnin propagaatioaika.

![glueregistry](images/customize-dns-servers-step4.png){.thumbnail}

## Lue lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.
