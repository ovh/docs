---
deprecated: true
title: SPF-kentän lisäys verkkotunnuksen konfiguraatioon
slug: webhotelli_spf-kentta
excerpt: Opi lisäämään SPF-kenttä verkkotunnuksesi konfiguraatioon OVH:lla
section: Edistynyt käyttö
---

**Päivitetty 15.01.2018**

## Tavoite

SPF:n (Sender Policy Framework) avulla sähköpostin vastaanottava palvelin voi varmistaa, että viestin on lähettänyt viestin lähetykseen oikeutettu palvelin. SPF lisätään tietueen tavoin DNS-alueelle. Siellä ilmoitetaan palvelimet tai hyväksytyt IP-osoitteet, jotka saavat lähettää sähköpostiviestejä kyseiseen verkkotunnukseen.

**Opi lisäämään SPF-kenttä verkkotunnuksesi konfiguraatioon OVH:lla**

## Edellytykset

- Olet kirjautunut verkkotunnuksen hallintaan [OVH:n hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager){.external}.
- Olet kirjautunut [hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager){.external}.
- Kyseessä olevan verkkotunnuksen on käytettävä OVH:n konfigurointia (eli OVH:n nimipalvelimia).

> [!warning]
>
> Jos verkkotunnuksesi ei käytä OVH:n nimipalvelimia, sinun on tehtävä SPF-muokkaus verkkotunnuksesi konfiguraatiota hallinnoivalla palveluntarjoajalla.
>
> Jos verkkotunnuksesi on OVH:n ylläpitämä, voit tarkistaa käyttääkö se konfiguraatiotamme [hallintapaneelisi](https://www.ovh.com/auth/?action=gotomanager){.external} `Nimipalvelimet`{.action}-välilehdeltä kyseessä olevan verkkotunnuksen kohdalta.
>

## Käytännössä

### 1.vaihe: SPF-kenttä

Ennen kuin lisäät tai muokkaat SPF-kenttää, on tärkeää ymmärtää sen hyödyt. Sen tarkoituksena on estää mahdolliset henkilötietojen väärinkäyttötapaukset sähköpostiosoitteilla, jotka käyttävät verkkotunnustasi.

Tämän mahdollistavat SPF:ään syötetyt tiedot. Sieltä voidaan löytää:

- **Palvelimia tai useita IP-osoitteita**: joiden ansiosta ne voidaan tunnistaa laillisina lähetyksen lähteinä
- **Tarkenne**: tämän avulla sähköposteja vastaanottavalle palvelimelle voidaan neuvoa tietty reagointitapa laittomina pidettyihin, eli mahdollisesta riskikohteesta tuleviin viesteihin.

Varmista siis, että SPF-kenttään laitetaan ne lähetyslähteet, joita käytät sähköpostiviestin lähetykseen verkkotunnuksellasi. Näitä lähteitä voivat olla oma palvelimesi, palveluntarjoajan palvelin tai jokin OVH:n sähköpostiratkaisu.

> [!primary]
>
> SPF on vain ilmoitus palvelimille, jotka vastaanottavat sähköposteja mukaan lukien omat sähköpostisi. Palvelimet joko soveltavat tai ovat soveltamatta niiden verkkotunnusten SPF-kentän määrityksiä, joille palvelimet vastaanottavat viestejä.
>

### 2. vaihe: OVH:n konfiguraatio

OVH:n konfiguraatiota käytetään alla olevissa ratkaisuissa:

- MX Plan erillistuotteena tai [OVH:n webhotelliin](https://www.ovh-hosting.fi/webhotelli){.external} sisältyvänä
- [E-mail Pro](https://www.ovh-hosting.fi/sahkopostit/email-pro/){.external}
- [Hosted Exchange](https://www.ovh-hosting.fi/sahkopostit/hosted-exchange/){.external}

Kun tilaat jonkin näistä ratkaisuista, suosittelemme käyttämään OVH:n tiedot sisältävää SPF-kenttää verkkotunnuksesi konfiguraatiossa. Se näyttää tältä:

```bash
mypersonaldomain.ovh IN TXT "v=spf1 include:mx.ovh.com ~all"
```

Jos verkkotunnuksesi käyttää OVH:n konfiguraatiota, voit tarkistaa, onko SPF jo konfiguroitu siihen. Kirjaudu sitä varten [hallintapaneeliisi](https://www.ovh.com/auth/?action=gotomanager){.external} ja mene sitten vasemmanpuoleiseen valintapalkkiin. Mene osioon `Verkkotunnukset`{.action}. Klikkaa sitten kyseessä olevaa verkkotunnusta ja jatka `DNS-alue`{.action}-välilehdelle.

Näkyviin pitäisi tulla taulukko. Siinä on näkyvissä verkkotunnuksesi konfiguraatio OVH:lla. Se koostuu useista DNS-tietueista, joita kutakin symboloi yksi taulukon rivi.

> [!primary]
>
> Jos verkkotunnuksesi on OVH:lla, voit tarkistaa käyttääkö se OVH:n konfiguraatiota `Nimipalvelimet`{.action}-välilehdeltä.
>

Voit löytää suodatuskentän avulla taulukosta SPF:ää vastaavan rivin. Tämä voi löytyä kahdesta paikasta, valitse suodatuskentässä `TXT`{.action} tai `SPF`{.action} ja tarvittaessa siirtymällä yhdestä toiseen. Taulukko voi näyttää tämän jälkeen erilaiselta.

- **"v=spf1 include:mx.ovh.com ~all" näkyy kohdesarakkeessa**: verkkotunnuksesi käyttää jo OVH:n konfiguraatiota. Jos et halua enää käyttää sitä, sinun on muokattava sitä seuraavassa vaiheessa.

- **SPF, joka ei vastaa OVH:n tietoja, näkyy kohdesarakkeessa**: verkkotunnuksesi käyttää jo personoitua SPF-kenttää. Sen muokkaus tai OVH:n konfiguroinnin valinta tapahtuu seuraavassa vaiheessa.

- **Yhtään SPF-kenttää ei näy kohdesarakkeessa**: tarkista ensin, onko kenttä luotu SPF:nä vai TXT:nä muokkaamalla suodatusta. Jos yhtään SPF-kenttää ei suodatuksen tuloksena näy, verkkotunnuksesi ei käytä sitä. Voit lisätä sen seuraavassa vaiheessa.

> [!primary]
>
> SPF koostuu aina seuraavasta kaavasta: "v=spf1 lähteet tarkenne". Esimerkiksi OVH:n SPF on: "v=spf1 include:mx.ovh.com ~all".
>

![verkkotunnus](images/spf_records_check_OVH_configuration.png){.thumbnail}

### 3. vaihe: SPF:n muokkaus

Muokataksesi SPF:ää verkkotunnuksesi OVH:n konfiguraatiossa kirjaudu [hallintapaneeliisi](https://www.ovh.com/auth/?action=gotomanager){.external}. Mene vasemmanpuoleisessa valikossa osioon `Verkkotunnukset`{.action}, klikkaa kyseessä olevaa verkkotunnusta ja mene sitten `DNS-alue`{.action}-välilehdelle.

Taulukossa on näkyvissä verkkotunnuksesi konfiguraatio OVH:lla. Kukin rivi vastaa DNS-tietuetta.

SPF:n muokkausta tai lisäystä varten sinun on lisättävä uusi tietue verkkotunnuksesi OVH:n konfiguraatioon (DNS-alue). Tämä onnistuu klikkaamalla `Lisää tietue`{.action}.

![verkkotunnus](images/spf_records_add_entry_step1.png){.thumbnail}

Näkyviin tulevassa ikkunassa tarjotaan useita DNS-kenttiä. SPF:n lisäystä varten on olemassa kaksi vaihtoehtoa:

- **Lisää SPF käsin**: sopii asiantunteville käyttäjille tai niille, joilla on jo syötettävät (esimerkiksi sähköpostejasi hallinnoivan palveluntarjoajasi toimittamat) tiedot.
- **Käytä SPF-konfigurointiavustajaa**: sopii kokemattomille käyttäjille tai niille, joilla ei ole hallussaan tarvittavia tietoja.

Jatkotoimenpiteet riippuvat käytetystä vaihtoehdosta.

![verkkotunnus](images/spf_records_add_entry.png){.thumbnail}

#### Lisää SPF käsin

Klikkaa ehdotettujen kenttien joukossa kenttää `TXT`{.action}, täytä sitten pyydetyt tiedot. Syötä `Arvo`{.action}-alueeseen SPF, jota haluat käyttää.

Klikkaa toimenpiteen viimeistelemiseksi kohtaa `Seuraava`{.action}. Varmista, että näytetyt tiedot ovat okein, klikkaa sitten `Vahvista`{.action}.

> [!primary]
>
> DNS-alueen muokkaus tarvitsee 4 - 24 tunnin propagaatioajan ennen kuin muutos on astunut täysin voimaan.
>

![verkkotunnus](images/spf_records_add_TXT_entry.png){.thumbnail}

#### OVH:n SPF-konfigurointiavustajan käyttö

Klikkaa ehdotettujen kenttien joukossa kohtaa `SPF`{.action}. Seuraavassa vaiheessa valitse kahdesta vaihtoehdosta:

- käytä SPF:ää OVH:n ratkaisuille (MX Plan, E-mail Pro ja Hosted Exchange)
- räätälöi SPF avustajamme avulla

##### Käytä OVH:n SPF:ää

Klikkaa painiketta `Käytä SPF OVH:n webhotellille`{.action}. OVH:n SPF:ään liittyvät tiedot tulevat näkyviin. Klikkaa painiketta `Vahvista`{.action} muokkauksen toteuttamiseksi.

> [!primary]
>
> DNS-alueen muokkaus tarvitsee 4 - 24 tunnin propagaatioajan ennen kuin muutos on astunut täysin voimaan.

![verkkotunnus](images/spf_records_add_entry_step2.png){.thumbnail}

##### Räätälöi SPF

Konfigurointiavustajan avulla SPF on mahdollista räätälöidä vaihe vaiheelta. Vastaa esitettyihin kysymyksiin ja anna tarvittavat tiedot. Jotkin pyydetyt elementit voivat olla tarkoitettuja asiantunteville käyttäjille.

Käymme läpi pyydetyt tiedot yksitellen.

|Tieto|Kuvaus|
|---|---|
|Aliverkkotunnus|Täytä, jos SPF:ää täytyy soveltaa verkkotunnuksesi aliverkkotunnukseen. Tämä pätee, jos lähetät sähköpostiviestejä aliverkkotunnukselta.|
|TTL|Tämä on (sovelluksen) propagaatioaika, jota sovelletaan, kun muokkaat uudelleen tätä DNS-tietuetta.|
|Anna IP-osoitteelle lupa lähettää sähköpostiviestejä|Voi olla olennainen, jos verkkosivusi ja sähköpostiosoitteesi ovat ylläpidettyinä palvelimella, joka käyttää samaa IP-osoitetta (esim. dedikoidulla palvelimellasi).|
|Anna MX-palvelimillesi lupa lähettää sähköpostiviestejä|Voi olla olennainen, jos sähköposteja vastaanottavat palvelimet voivat myös lähettää viestejä.|
|Salli sähköpostiviestien lähettäminen kaikille palvelimille, joiden nimi päättyy verkkotunnukseesi|Tätä vaihtoehtoa ei suositella, sillä se voi lisätä liian laajasti oikeutettuja lähteitä SPF:ääsi.|

![verkkotunnus](images/spf_records_add_entry_personnalize_step1.png){.thumbnail}

Koskien kysymystä “**Lähettävätkö muut palvelimet postia verkkotunnuksellasi?**”, useita kohtia voidaan täyttää:

|Tieto|Kuvaus|
|---|---|
|a|Syötä tähän verkkotunnuksia. Tämä oikeuttaa kyseisiä verkkotunnuksia ylläpitävät palvelimet lähettämään sähköpostiviestejä verkkotunnuksillasi.|
|mx|Syötä tähän palvelimet (MX-palvelimet), jotka vastaanottavat sähköpostiviestejäsi, jos ne voivat myöskin lähettää viestejä. Näin ne tunnistetaan oikeutetuiksi lähetyslähteiksi.|
|ptr|Syötä tähän isäntäpalvelimet, joiden *reverse* on toiminnassa (PTR-kentän ansiosta DNS-alueella). Näin ne tunnistetaan oikeutetuiksi lähetyslähteiksi.|
|ip4|Ilmoita IP-osoitteet tai IP-alue (IPv4), jotka saavat lähettää sähköpostiviestejä osoitteillasi.|
|ip6|Ilmoita IP-osoitteet tai IP-alue (IPv6), jotka saavat lähettää sähköpostiviestejä osoitteillasi.|
|include|Syötä tähän verkkotunnuksia. Tämän avulla kyseisten verkkotunnusten SPF:ää voidaan käyttää verkkotunnuksellesi. Esimerkiksi, OVH käyttää tätä tapaa SPF-konfiguraatiossaan: "v=spf1 include:mx.ovh.com ~all", jonka avulla OVH voi hallinnoida kohteen mx.ovh.com SPF:ää ja antaa tämän asiakkaille luvan käyttää sitä.|

Lopuksi koskien kysymystä “**Kuvaavatko antamasi tiedot kaikkia isäntäpalvelimia, jotka lähettävät sähköpostia verkkotunnuksellasi?**”, on olemassa kolme vastausvaihtoehtoa:

|Tieto|Kuvaus|
|---|---|
|Kyllä, olen varma|Neuvo verkkotunnuksestasi tulevia sähköpostiviestejä vastaanottavia palvelimia estämään ei oikeutetuista lähteistä (joita ei löydy SPF:stä) peräisin olevat sähköpostiviestit.|
|Kyllä, mutta käytä safe-tilaa|Neuvo verkkotunnuksestasi tulevia sähköpostiviestejä vastaanottavia palvelimia hyväksymään ei oikeutetuista lähteistä tulevat viestit (joita ei löydy SPF:stä), mutta merkitsemään ne, jotta ne voidaan tunnistaa mahdollisesti ei oikeutettuina (esim. roskapostina).|
|Ei|Neuvo verkkotunnuksestasi tulevia sähköpostiviestejä vastaanottavia palvelimia hyväksymään ei oikeutetuista lähteistä (joita ei löydy SPF:stä) peräisin olevat sähköpostiviestit ilman erityisiä toimenpiteitä. Sähköpostiviestin otsaketiedot kuitenkin muutetaan.|

Muista, että SPF on vain ilmoitus palvelimille, jotka vastaanottavat sähköposteja mukaan lukien omat sähköpostisi. Palvelimet joko soveltavat tai ovat soveltamatta niiden verkkotunnusten SPF-kentän määrityksiä, joille palvelimet vastaanottavat viestejä.

Kun tiedot on täytetty, klikkaa `Seuraava`{.action}, varmista, että näytetyt tiedot ovat oikein ja klikkaa sitten `Vahvista`{.action}.

> [!primary]
>
> DNS-alueen muokkaus tarvitsee 4 - 24 tunnin propagaatioajan ennen kuin muutos on astunut täysin voimaan.
>

## Lisää aiheesta

[Yleistä nimipalvelimista.](https://docs.ovh.com/fi/domains/webhotellit_yleista_nimipalvelimista/){.external}

Viesti käyttäjäyhteisömme kanssa osoitteessa [https://ovh-hosting.fi/community/foorumi](https://www.ovh-hosting.fi/community/foorumi){.external}.