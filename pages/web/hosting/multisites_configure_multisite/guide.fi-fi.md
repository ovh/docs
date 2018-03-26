---
title: Webhotellin jakaminen useille verkkosivuille
slug: multisiten-konfigurointi-webhotellissa
excerpt: Katso, kuinka webhotelli jaetaan usean verkkosivun kesken
section: Aluksi
---

**Päivitetty 21.2.2018**

## Tavoite

Webhotelli on mahdollista jakaa usean verkkosivun kesken. Tämä menettely on mahdollista samanaikaisesti OVH:lla tai muualla rekisteröidyillä verkkotunnuksilla.

**Katso, kuinka webhotelli jaetaan useiden verkkosivujen kesken.**

## Edellytykset

- Sinulla on yhteensopiva [webhotellituote](https://www.ovh-hosting.fi/webhotelli/){.external}
- Sinulla on yksi tai useampi [verkkotunnus](https://www.ovh-hosting.fi/verkkotunnukset/){.external}
- Voit muokata verkkotunnuksesi tai verkkotunnustesi konfiguraatiota (DNS-aluetta)
- Olet kirjautunut [hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager){.external}

## Käytännössä

### 1. vaihe: Mene Multisiten hallintaan

Kirjaudu menettelyn aloittamiseksi [hallintapaneeliisi](https://www.ovh.com/auth/?action=gotomanager){.external}, klikkaa kohtaa `Webhotellit`{.action} vasemman reunan valikossa ja valitse sitten kyseessä oleva webhotelli. Mene lopuksi välilehdelle `Multisite`{.action}.

Näkyviin tuleva taulukko sisältää kaikki webhotelliisi lisätyt verkkotunnukset. Jotkut niistä on luotu automaattisesti webhotellisi asennuksen yhteydessä.

> [!primary]
>
> Jos olet siirtämässä verkkosivuasi ja haluat välttää palvelukatkoksen, voit toteuttaa [4. vaiheen: “Verkkosivun siirto verkkoon”](https://docs.ovh.com/fi/hosting/multisiten-konfigurointi-webhotellissa/#4-vaihe-verkkosivun-siirto-verkkoon){.external} toisena vaiheena.
>

![multisite](images/access-multisite-ovh.png){.thumbnail}

### 2. vaihe: Verkkotunnuksen tai aliverkkotunnuksen lisäys

Uuden verkkotunnuksen lisäämiseksi webhotelliin klikkaa painiketta `Lisää verkkotunnus tai aliverkkotunnus`{.action} ja tee sitten valintasi avautuvassa ikkunassa.

- **OVH:lla rekisteröidyn verkkotunnuksen lisäys**:
Ainoastaan OVH:n konfiguraatiota käyttävät verkkotunnukset ja ne, joiden kontaktiksi asiakastunnuksesi on merkitty, näkyvät. Valitse listasta yksi ja klikkaa sitten painiketta `Seuraava`{.action}.
Jos olet valinnut tämän vaihtoehdon, siirry kohtaan [3.1: “OVH:lla rekisteröidyn verkkotunnuksen lisäys”](https://docs.ovh.com/fi/hosting/multisiten-konfigurointi-webhotellissa/#vaihe-31-ovhlla-rekisteroidyn-verkkotunnuksen-lisays){.external}.

- **Ulkopuolisen verkkotunnuksen lisäys**:
Syötä kyseessä oleva verkkotunnus seuraavan vaiheen yhteydessä. Huomaa, että sinulla on oltava valtuudet tämän konfiguraation muokkaamiseen (DNS-alue), jotta lisäys voidaan suorittaa täysin.
Jos olet valinnut tämän vaihtoehdon, siirry kohtaan [3.2: “Ulkopuolisen verkkotunnuksen lisäys”](https://docs.ovh.com/fi/hosting/multisiten-konfigurointi-webhotellissa/#vaihe-32-ulkopuolisen-verkkotunnuksen-lisays){.external}.

![multisite](images/add-multisite-step1.png){.thumbnail}

### Vaihe 3.1: OVH:lla rekisteröidyn verkkotunnuksen lisäys

> [!primary]
>
> Tätä vaihetta sovelletaan ainoastaan, jos valitsit “OVH:lla rekisteröidyn verkkotunnuksen lisäyksen”. Ulkopuolista verkkotunnusta varten siirry tämän dokumentaation kohtaan [3.2: “Ulkopuolisen verkkotunnuksen lisäys”](https://docs.ovh.com/fi/hosting/multisiten-konfigurointi-webhotellissa/#vaihe-32-ulkopuolisen-verkkotunnuksen-lisays){.external}.
>

Pysy hallintapaneelisi `Multisite`{.action}-osion kohdassa `Lisää verkkotunnus tai aliverkkotunnus`{.action}. Kun olet valinnut OVH:lle rekisteröidyn verkkotunnuksen, sinun on räätälöitävä sen lisäys. [Webhotellituotteestasi](https://www.ovh-hosting.fi/webhotelli/){.external} riippuen kaikkia tarjottuja elementtejä ei voida valita.

|Tieto|Kuvaus|
|---|---|
|Verkkotunnus|Syöttämäsi verkkotunnus valitaan oletuksena automaattisesti. Voit määrittää siihen aliverkkotunnuksen (esim. blog.mypersonaldomain.ovh) ja luoda samanaikaisesti www-aliverkkotunnuksen (esim. www.mypersonaldomain.ovh).|
|Juurikansio|Tämä on hakemisto, jossa valittu verkkotunnus sijaitsee tallennustilassasi. Jos hakemistoa ei ole, se luodaan automaattisesti.|
|Aktivoi IPv6|Mahdollistaa IPv6-protokollan aktivoinnin annetulle verkkotunnukselle. Lue lisää [IP-sivultamme](https://www.ovh-hosting.fi/webhotelli/ip.xml){.external}.|
|SSL|Mahdollistaa suojatun yhteyden hyödyntämisen (HTTPS://) valitulla verkkotunnuksella. Lue lisää [SSL-sivultamme](https://www.ovh-hosting.fi/ssl/){.external}. Aktivoimalla SSL:n ja CDN:n (Content Delivery Network), voit lisäksi hyödyntää **HTTP2-protokollaa**.|
|Aktivoi CDN|Mahdollistaa CDN:n aktivoinnin (verkkosivun staattisten elementtien kuten kuvien asettamisen välimuistiin) valitulle verkkotunnukselle. Lue lisää [CDN-sivultamme](https://www.ovh-hosting.fi/webhotelli/cdn.xml){.external}. Aktivoimalla SSL:n ja CDN:n voit lisäksi hyödyntää **HTTP2-protokollaa**.|
|Maan IP-osoite|Mahdollistaa geolokalisoidun IP-osoitteen hyödyntämisen (luettelossa olevissa maissa) valitulla verkkotunnuksella. Lue lisää [IP-sivultamme](https://www.ovh-hosting.fi/webhotelli/ip.xml){.external}.|
|Aktivoi palomuuri|Mahdollistaa palomuurin (kyselyjen analysoinnin) aktivoinnin valitulle verkkotunnukselle. Lue lisää [Mod Security -sivultamme](https://www.ovh-hosting.fi/webhotelli/mod_security.xml){.external}.|
|Yksilöidyt tilastot|Mahdollistaa uuden lokitietojen tilan aktivoinnin valitulla verkkotunnuksella. Listasta on valittava verkkotunnus, joka määrittää käyttäjätunnuksen tähän uuteen tilaan. Lue lisää [Yksilöidyistä tilastoista](https://www.ovh-hosting.fi/webhotelli/verkkosivuston_tilastot.xml){.external}.|

Kun tiedot on annettu, klikkaa painiketta `Seuraava`{.action}.

![multisite](images/add-multisite-step2.png){.thumbnail}

Kehotamme tarkistamaan yhteenvedossa näkyvät tiedot.

Kun olet valinnut OVH:lla rekisteröidyn verkkotunnuksen, sinulla on mahdollisuus suorittaa sen DNS-konfigurointi automaattisesti rastittamalla kohta `Automaattinen konfigurointi (suositeltu)`{.action}. Tämä toiminto voidaan tehdä myöhemmin käsin poistamalla rasti tästä kohdasta. Muokattavat tiedot tulevat seuraavaksi näkyviin.

Klikkaa painiketta `Vahvista`{.action} verkkotunnuksen lisäyksen käynnistämiseksi. Jos valitsit käsin tehtävän konfiguroinnin, voit katsoa apua toimenpiteeseen dokumentaatiosta [*DNS-alueen muokkaaminen*](https://docs.ovh.com/fi/domains/miten_dns-aluetta_muokataan/){.external}.

> [!primary]
>
> Verkkotunnuksen lisääminen webhotelliin voi kestää enintään tunnin. Verkkotunnuksen DNS-konfiguraation muokkaus tarvitsee 4 - 24 tunnin propagaatioajan ennen kuin muutos on astunut täysin voimaan.
>

Nyt kun verkkotunnuksesi on lisätty, voit jatkaa tämän dokumentaation kohtaan [4: “Verkkosivun siirto verkkoon”](https://docs.ovh.com/fi/hosting/multisiten-konfigurointi-webhotellissa/#4-vaihe-verkkosivun-siirto-verkkoon){.external}.

### Vaihe 3.2: Ulkopuolisen verkkotunnuksen lisäys

> [!primary]
>
> Tätä vaihetta tarvitaan ainoastaan, jos valitsit vaihtoehdon “ulkopuolisen verkkotunnuksen lisäys” (jota ei ole rekisteröity OVH:lla tai jonka hallinta ei tapahdu OVH:n hallintapaneelin kautta). OVH:lla rekisteröityä verkkotunnusta varten siirry tämän dokumentaation kohtaan [3.1: “OVH:lla rekisteröidyn verkkotunnuksen lisäys”](https://docs.ovh.com/fi/hosting/multisiten-konfigurointi-webhotellissa/#vaihe-31-ovhlla-rekisteroidyn-verkkotunnuksen-lisays){.external}.
>

Pysy hallintapaneelisi `Multisite`{.action}-osion kohdassa `Lisää verkkotunnus tai aliverkkotunnus`{.action}. Kun olet valinnut ulkopuolisen verkkotunnuksen, sinun on räätälöitävä sen lisäys.
Tiettyjä [OVH:n webhotellituotteeseen](https://www.ovh-hosting.fi/webhotelli){.external} sisältyviä lisäoptioita ei voida aktivoida heti verkkotunnuksen lisäyksen jälkeen. Tämä vaihe on viimeisteltävä ennen kuin voit muokata verkkotunnuksen asetuksia.

|Tieto|Kuvaus|
|---|---|
|Verkkotunnus|Syötä verkkotunnus, jonka haluat lisätä webhotelliisi. Voit määrittää sille aliverkkotunnuksen (esim. blog.mypersonaldomain.ovh) ja luoda samanaikaisesti www-aliverkkotunnuksen (esim. www.mypersonaldomain.ovh). Muistathan, että sinulla on oltava valtuudet muokata verkkotunnuksen konfiguraatiota (DNS-alue), jotta lisäys voidaan saada päätökseen.|
|Juurikansio|Tämä on hakemisto, jossa valittua verkkotunnusta säilytetään tallennustilassasi. Jos hakemistoa ei ole, se luodaan automaattisesti toimenpiteen päätyttyä.|
|Aktivoi IPv6|Mahdollistaa IPv6-protokollan aktivoinnin annetulle verkkotunnukselle. Lue lisää [IP-sivultamme](https://www.ovh-hosting.fi/webhotelli/ip.xml){.external}.|

Kun tiedot on annettu, klikkaa painiketta `Seuraava`{.action}.

![multisite](images/add-multisite-external-step1.png){.thumbnail}

Kehotamme tarkistamaan yhteenvedossa näkyvät tiedot.

Kun valittuna on OVH:n ulkopuolinen verkkotunnus, kehottaa viesti muokkaamaan sen konfiguraatiota. Kirjoita muistiin näkyviin tulevat elementit (voit kuitenkin löytää ne tarvittaessa myöhemmin) ja klikkaa sitten painiketta `Vahvista`{.action}.

Verkkotunnuksen konfigurointiin liittyen:

|Kenttä|Mistä tämä tieto löytyy?|Kuvaus|
|---|---|---|
|TXT|`Multisite`{.action}-välilehti, klikkaa sitten kohtaa **ovhcontrol-tunnisteen konfigurointi**|OVH voi tämän avulla varmistaa, että kaikki ulkopuolisten verkkotunnusten lisäykset ovat oikeutettuja. Varmista, että luot TXT-kentän aliverkkotunnuksella **ovhcontrol** (esim. ovhcontrol.mypersonaldomain.ovh).|
|A ja AAAA|Välilehti `Yleiset tiedot`{.action}, ja kohtien **IPv4** ja **IPv6** vieressä|Näiden ansiosta verkkotunnuksesi voi näyttää verkkosivusi, jonka siirrät verkkoon webhotellissasi.|

Kun vahvistus on tehty, verkkotunnus on lisätty tilapäisesti. Sinun on nyt muokattava sen konfiguraatiota (DNS-aluetta) verkkotunnusta hallinnoivan palveluntarjoajan käyttöliittymässä. Kun muokkaus on tehty, tarvitaan 4 - 24 tunnin propagaatioaika ennen kuin se on astunut täysin voimaan.

> [!warning]
>
> Tämä muokkaus on välttämätön, jotta verkkotunnuksen lisäys voidaan suorittaa täysin. Mikäli sitä ei tehdä, verkkotunnuksen lisäys perutaan.
>

Nyt kun verkkotunnuksesi on lisätty tai sen konfigurointi on käynnistetty, voit jatkaa tämän dokumentaation kohtaan [4: “Verkkosivun siirto verkkoon”](https://docs.ovh.com/fi/hosting/multisiten-konfigurointi-webhotellissa/#4-vaihe-verkkosivun-siirto-verkkoon){.external}.

### 4. vaihe: Verkkosivun siirto verkkoon

Kun verkkotunnus on lisätty, jäljellä on enää siihen liittyvän verkkosivun siirto verkkoon.

Voit hyödyntää apuna käyttövalmista sivupohjaa OVH:n yhden klikkauksen moduulien avulla. Voit lukea niistä lisää dokumentaatiostamme [*Verkkosivun asennus yhden klikkauksen moduuleilla*](https://docs.ovh.com/fi/hosting/1-klikkauksen-moduulit/){.external}.

Jos haluat suorittaa useita jakoja, tee tämä menettely kokonaisuudessaan useita kertoja.

Kehotamme olemaan valppaana webhotellisi jakavien verkkosivujen lukumäärän suhteen. Mitä useampi sivu jakaa webhotellisi, sitä enemmän tarvitaan sille osoitettuja resursseja. Webhotellien [tuotesivultamme](https://www.ovh-hosting.fi/webhotelli/){.external} näet, kuinka montaa verkkosivua tilassasi voi ylläpitää.

## Lue lisää aiheesta

[Verkkosivun asennus yhden klikkauksen moduuleilla.](https://docs.ovh.com/fi/hosting/1-klikkauksen-moduulit){.external}

[Miten DNS-aluetta muokataan?](https://docs.ovh.com/fi/domains/miten_dns-aluetta_muokataan/){.external}

Viesti käyttäjäyhteisömme kanssa osoitteessa [https://ovh-hosting.fi/community/foorumi](https://ovh-hosting.fi/community/foorumi){.external}.