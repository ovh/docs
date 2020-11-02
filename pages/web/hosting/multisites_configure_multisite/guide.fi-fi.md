---
deprecated: true
title: 'Webhotellin jakaminen useille verkkosivuille'
slug: multisiten-konfigurointi-webhotellissa
excerpt: 'Katso, kuinka webhotelli jaetaan usean verkkosivun kesken.'
section: 'Webhotellin konfigurointi'
order: 1
---

**Päivitetty 5.9.2018**

## Tavoite

Webhotelli on mahdollista jakaa usean verkkosivun kesken. Tämä menettely on mahdollista samanaikaisesti OVH:lla tai muualla rekisteröidyillä verkkotunnuksilla.

**Katso, kuinka webhotelli jaetaan useiden verkkosivujen kesken.**

## Edellytykset

- Sinulla on yhteensopiva [webhotellituote](https://www.ovh-hosting.fi/webhotelli/){.external}
- Sinulla on yksi tai useampi [verkkotunnus](https://www.ovh-hosting.fi/verkkotunnukset/){.external}
- Voit muokata verkkotunnuksesi tai verkkotunnustesi konfiguraatiota (DNS-aluetta)
- Olet kirjautunut [hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Käytännössä

### 1. vaihe: Mene Multisiten hallintaan

Kirjaudu [hallintapaneeliisi](https://www.ovh.com/auth/?action=gotomanager){.external}, klikkaa kohtaa `Webhotellit`{.action} vasemman reunan valikossa ja valitse sitten kyseessä oleva webhotelli. Mene lopuksi välilehdelle `Multisite`{.action}.

Näkyviin tuleva taulukko sisältää kaikki webhotelliisi lisätyt verkkotunnukset. Jotkut niistä on luotu automaattisesti webhotellisi asennuksen yhteydessä.

> [!primary]
>
> Jos olet siirtämässä verkkosivuasi ja haluat välttää palvelukatkoksen, voit toteuttaa [4. vaiheen: “Verkkosivun siirto verkkoon”](https://docs.ovh.com/fi/hosting/multisiten-konfigurointi-webhotellissa/#4-vaihe-verkkosivun-siirto-verkkoon){.external} toisena vaiheena.
>

![multisite](images/access-multisite-ovh.png){.thumbnail}

### 2. vaihe: Verkkotunnuksen tai aliverkkotunnuksen lisäys

Uuden verkkotunnuksen lisäämiseksi webhotelliin klikkaa painiketta `Lisää verkkotunnus tai aliverkkotunnus`{.action} ja tee sitten valintasi avautuvassa ikkunassa.

- **OVH:lla rekisteröidyn verkkotunnuksen lisäys**:

Ainoastaan OVH:n konfiguraatiota käyttävät verkkotunnukset ja ne, joiden kontaktiksi asiakastunnuksesi on merkitty, näkyvät. Valitse listasta yksi ja klikkaa sitten painiketta `Seuraava`{.action}. Jatka sitten [vaiheeseen 3.1: OVH:lla rekisteröidyn verkkotunnuksen lisäys](https://docs.ovh.com/fi/hosting/multisiten-konfigurointi-webhotellissa/#vaihe-31-ovhlla-rekisteroidyn-verkkotunnuksen-lisays){.external}

- **Ulkopuolisen verkkotunnuksen lisäys**:

Jos verkkotunnusta ei näy listassa, sitä pidetään tällöin ulkopuolisena (asiakastunnuksesi tai OVH:n ulkopuolella). Mikäli näin on, valitse `Lisää ulkopuolinen verkkotunnus`{.action} ja klikkaa sitten painiketta `Seuraava`{.action}. Jatka sitten [vaiheeseen 3.2: “OVH:lla rekisteröidyn verkkotunnuksen lisäys”](https://docs.ovh.com/fi/hosting/multisiten-konfigurointi-webhotellissa/#vaihe-32-ulkopuolisen-verkkotunnuksen-lisays){.external}.

![multisite](images/add-multisite-step1.png){.thumbnail}

### Vaihe 3.1: OVH:lla rekisteröidyn verkkotunnuksen lisäys

> [!primary]
>
> Tätä vaihetta sovelletaan ainoastaan, jos valitsit “OVH:lla rekisteröidyn verkkotunnuksen lisäyksen”. Ulkopuolista verkkotunnusta varten siirry tämän dokumentaation kohtaan [3.2: “Ulkopuolisen verkkotunnuksen lisäys”](https://docs.ovh.com/fi/hosting/multisiten-konfigurointi-webhotellissa/#vaihe-32-ulkopuolisen-verkkotunnuksen-lisays){.external}.
>

Sinun on nyt personoitava verkkotunnuksen lisäys. [Webhotellituotteestasi](https://www.ovh-hosting.fi/webhotelli/){.external} riippuen kaikkia tarjottuja elementtejä ei voida valita.

|Tieto|Kuvaus|
|---|---|
|Verkkotunnus|Syöttämäsi verkkotunnus valitaan oletuksena automaattisesti. Voit määrittää sille aliverkkotunnuksen (esim. blog.mypersonaldomain.ovh) ja luoda samanaikaisesti sitä vastaavan “www”-aliverkkotunnuksen (esim. www.mypersonaldomain.ovh). Tästä tulee verkkoon siirrettävän sivusi internetosoite.|
|Juurikansio|Määritä tallennustilassasi kansio, jossa verkkotunnustasi ylläpidetään. Tämä on tila, josta verkkosivusi tiedostot siirretään verkkoon. Esimerkiksi, sivun blog.mypersonaldomain.ovh juurikansio voi olla “blog”. Jos hakemistoa ei ole, se luodaan automaattisesti.|
|Aktivoi IPv6|Mahdollistaa IPv6-protokollan aktivoinnin annetulle verkkotunnukselle. Lue lisää [IP-sivultamme](https://www.ovh-hosting.fi/webhotelli/ip.xml){.external}.|
|SSL|Mahdollistaa suojatun yhteyden hyödyntämisen (HTTPS://) valitulla verkkotunnuksella. Lue lisää [SSL-sivultamme](https://www.ovh-hosting.fi/ssl/){.external}. Aktivoimalla SSL:n ja CDN:n (Content Delivery Network), voit lisäksi hyödyntää **HTTP2-protokollaa**.|
|Aktivoi CDN|Mahdollistaa CDN:n aktivoinnin (verkkosivun staattisten elementtien kuten kuvien asettamisen välimuistiin) valitulle verkkotunnukselle. Lue lisää [CDN-sivultamme](https://www.ovh-hosting.fi/webhotelli/cdn.xml){.external}. Aktivoimalla SSL:n ja CDN:n voit lisäksi hyödyntää **HTTP2-protokollaa**.|
|Maan IP-osoite|Mahdollistaa geolokalisoidun IP-osoitteen hyödyntämisen (luettelossa olevissa maissa) valitulla verkkotunnuksella. Lue lisää [IP-sivultamme](https://www.ovh-hosting.fi/webhotelli/ip.xml){.external}.|
|Aktivoi palomuuri|Mahdollistaa palomuurin (kyselyjen analysoinnin) aktivoinnin valitulle verkkotunnukselle. Lue lisää [Mod Security -sivultamme](https://www.ovh-hosting.fi/webhotelli/mod_security.xml){.external}.|
|Yksilöidyt tilastot|Mahdollistaa uuden lokitietojen tilan aktivoinnin valitulla verkkotunnuksella. Listasta on valittava verkkotunnus, joka määrittää käyttäjätunnuksen tähän uuteen tilaan. Lue lisää [Yksilöidyistä tilastoista](https://www.ovh-hosting.fi/webhotelli/verkkosivuston_tilastot.xml){.external}.|

Kun tiedot on annettu, klikkaa painiketta `Seuraava`{.action}. On suositeltavaa tarkistaa seuraavaksi näkyviin tuleva yhteenveto.

![multisite](images/add-multisite-step2.png){.thumbnail}

Kun olet valinnut OVH:lla rekisteröidyn verkkotunnuksen, sinulla on mahdollisuus suorittaa sen DNS-konfigurointi automaattisesti tai käsin:

- **automaattinen DNS-konfigurointi**: rastita ruutu `Automaattinen konfigurointi (suositeltu)`{.action}
- **DNS-konfigurointi käsin**: poista rasti ruudusta `Automaattinen konfigurointi (suositeltu)`{.action} ja hae näkyviin tulevat muokattavat tiedot. Kun haluat toteuttaa tämän konfiguroinnin, katso apua dokumentaatiosta [“OVH:n DNS-alueen muokkaaminen”](https://docs.ovh.com/fi/domains/miten_dns-aluetta_muokataan/){.external}.

Klikkaa painiketta `Vahvista`{.action} verkkotunnuksen lisäyksen käynnistämiseksi. Tämä voi kestää jopa tunnin. Verkkotunnuksen DNS-konfiguraation muokkaus tarvitsee 4 - 24 tunnin propagaatioajan ennen kuin muutos on astunut täysin voimaan.

Nyt kun verkkotunnus on lisätty, siirry [vaiheeseen 4: “Verkkosivun siirto verkkoon”](https://docs.ovh.com/fi/hosting/multisiten-konfigurointi-webhotellissa/#4-vaihe-verkkosivun-siirto-verkkoon){.external}.

### Vaihe 3.2: Ulkopuolisen verkkotunnuksen lisäys

> [!primary]
>
> Tätä vaihetta tarvitaan ainoastaan, jos valitsit vaihtoehdon “ulkopuolisen verkkotunnuksen lisäys” (jota ei ole rekisteröity OVH:lla tai jonka hallinta ei tapahdu OVH:n hallintapaneelin kautta). OVH:lle rekisteröityä verkkotunnuksesta varten palaa [vaiheeseen 3.1: “OVH:lle rekisteröidyn verkkotunnuksen lisäys”](https://docs.ovh.com/fi/hosting/multisiten-konfigurointi-webhotellissa/#vaihe-31-ovhlla-rekisteroidyn-verkkotunnuksen-lisays){.external}.
>

Verkkotunnuksen lisäys on nyt personoitava. Huomaa, ettei tiettyjä [OVH:n webhotellituotteeseen](https://www.ovh-hosting.fi/webhotelli){.external} sisältyviä lisäoptioita voida aktivoida heti verkkotunnuksen lisäyksen jälkeen. Menettely on viimeisteltävä ennen kuin ne voidaan aktivoida. Tämä tapahtuu muokkaamalla Multisite-asetuksia webhotellia lisättäessä.

|Tieto|Kuvaus|
|---|---|
|Verkkotunnus|Syötä verkkotunnus, jota haluat käyttää. Voit määrittää sille tarvittaessa aliverkkotunnuksen (esim. blog.mypersonaldomain.ovh) ja luoda samanaikaisesti sitä vastaavan “www”-aliverkkotunnuksen (esim. www.mypersonaldomain.ovh). Tästä tulee verkkoon siirettävän sivusi internetosoite. Muistathan, että sinulla on oltava valtuudet muokata verkkotunnuksen konfiguraatiota (DNS-alue), jotta lisäys voidaan saada päätökseen.|
|Juurikansio|Määritä tallennustilassasi kansio, jossa verkkotunnustasi ylläpidetään. Tämä on tila, josta verkkosivusi tiedostot siirretään verkkoon. Esimerkiksi, sivun blog.mypersonaldomain.ovh juurikansio voi olla “blog”. Jos hakemistoa ei ole, se luodaan automaattisesti.|
|Aktivoi IPv6|Mahdollistaa IPv6-protokollan aktivoinnin annetulle verkkotunnukselle. Lue lisää [IP-sivultamme](https://www.ovh-hosting.fi/webhotelli/ip.xml){.external}.|

Kun tiedot on annettu, klikkaa painiketta `Seuraava`{.action}. On suositeltavaa tarkistaa seuraavaksi näkyviin tuleva yhteenveto.

![multisite](images/add-multisite-external-step1.png){.thumbnail}

Kun valittuna on OVH:n ulkopuolinen verkkotunnus, on välttämätöntä toteuttaa erityinen vahvistusvaihe. Näin voimme varmistua siitä, että lisäys on oikeutettu. Tähän liittyen näet viestin, joka pyytää muokkaamaan verkkotunnuksen DNS-konfiguraatiota. 

Huomioi näkyviin tulevat elementit ja klikkaa sitten painiketta `Vahvista`{.action}. Nyt verkkotunnuksesi on lisätty tilapäisesti siksi aikaa, että voit muokata sen DNS-konfiguraatiota.

> [!warning]
>
> Tämä muokkaus on välttämätön, jotta verkkotunnuksen lisäys voidaan suorittaa täysin. Mikäli sitä ei tehdä, verkkotunnuksen lisäys perutaan.
>

Verkkotunnuksen konfiguraation (DNS-alueen) muokkaus täytyy toteuttaa verkkotunnusta hallinnoivan verkkotunnusvälittäjän käyttöliittymässä. Jos se on OVH, katso apua dokumentaatiosta [“OVH:n DNS-alueen muokkaaminen”](https://docs.ovh.com/fi/domains/miten_dns-aluetta_muokataan/){.external}. Kun muokkaus on tehty, tarvitaan 4 - 24 tunnin propagaatioaika ennen kuin se on astunut täysin voimaan.

Jos haluat löytää verkkotunnuksen DNS-konfigurointia varten muokattavat elementit:

|Kenttä|Mistä tämä tieto löytyy?|Kuvaus|
|---|---|---|
|TXT|`Multisite`{.action}-välilehti, klikkaa sitten kohtaa **ovhcontrol-tunnisteen konfigurointi**|OVH voi tämän avulla varmistaa, että kaikki ulkopuolisten verkkotunnusten lisäykset ovat oikeutettuja. Varmista, että luot TXT-kentän aliverkkotunnuksella **ovhcontrol** (esim. ovhcontrol.mypersonaldomain.ovh).|
|A ja AAAA|Välilehti `Yleiset tiedot`{.action}, ja kohtien **IPv4** ja **IPv6** vieressä|Näiden ansiosta verkkotunnuksesi voi näyttää verkkosivusi, jonka siirrät verkkoon webhotellissasi.|

### 4. vaihe: Verkkosivun siirto verkkoon

Kun verkkotunnus on lisätty, jäljellä on enää siihen liittyvän verkkosivun siirto verkkoon. Muistathan, että tämä toimenpide on suoritettava edellisessä vaiheessa määrittämässäsi juurikansiossa.

Voit hyödyntää apuna käyttövalmista sivupohjaa OVH:n yhden klikkauksen moduulien avulla. Verkkosivu asennetaan siis automaattisesti aiemmin konfiguroituun juurikansioon. Voit lukea niistä lisää tästä mahdollisuudesta dokumentaatiostamme [Verkkosivun asennus yhden klikkauksen moduuleilla](https://docs.ovh.com/fi/hosting/1-klikkauksen-moduulit/){.external}. 

Jos taas haluat asentaa verkkosivusi käsin, hanki sen tiedostot ja siirrä ne verkkoon tallennustilasi oikeassa juurikansiossa. Voit lukea niistä lisää tästä mahdollisuudesta dokumentaatiostamme [“Verkkosivun siirto verkkoon webhotellissa”](https://docs.ovh.com/fi/hosting/verkkosivun-siirto-verkkoon/){.external}.

> [!primary]
>
> Jos haluat suorittaa useita jakoja, tee tämä menettely kokonaisuudessaan useita kertoja.
>
> Kehotamme olemaan valppaana webhotellisi jakavien verkkosivujen lukumäärän suhteen. Mitä useampi sivu jakaa webhotellisi, sitä enemmän tarvitaan sille osoitettuja resursseja. Webhotellien [tuotesivultamme](https://www.ovh-hosting.fi/webhotelli/){.external} näet, kuinka montaa verkkosivua tilassasi voi ylläpitää.
>

## Lue lisää aiheesta

[Verkkosivun asennus yhden klikkauksen moduuleilla.](https://docs.ovh.com/fi/hosting/1-klikkauksen-moduulit){.external}

[Miten DNS-aluetta muokataan?](https://docs.ovh.com/fi/domains/miten_dns-aluetta_muokataan/){.external}

[Verkkosivun siirto verkkoon webhotellissa](https://docs.ovh.com/fi/hosting/verkkosivun-siirto-verkkoon/){.external}.

Viesti käyttäjäyhteisömme kanssa osoitteessa [https://community.ovh.com/en](https://community.ovh.com/en/){.external}.