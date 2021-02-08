---
deprecated: true
title: 'OVH:n verkkotunnuksen nimipalvelinten muokkaus'
slug: webhotellit_yleista_nimipalvelimista
excerpt: 'Opi muokkaamaan OVH:n verkkotunnuksesi nimipalvelimia'
section: 'DNS ja DNS-alue'
order: 1
---

**Päivitetty 15.5.2018**

## Tavoite

Nimipalvelimet ylläpitävät verkkotunnuksen DNS-konfiguraatiota. Niitä voidaan kutsua myös DNS-alueeksi, ja ne koostuvat teknisistä tiedoista eli tietueista. Perinteisessä käytössä niillä voidaan yhdistää verkkotunnuksesi ja palvelin tai palvelimet, jotka ylläpitävät verkkosivuasi ja sähköpostiosoitteitasi.

Voidaan siis sanoa, että näiden nimipalvelimille varastoitujen DNS-tietueiden avulla verkkotunnuksesi voidaan saavuttaa Internetissä.

**Opi muokkaamaan OVH:n verkkotunnuksesi nimipalvelimia.**

## Edellytykset

- Sinulla on OVH:lla rekisteröity verkkotunnus.
- Sinulla on pääsyoikeus verkkotunnuksen hallintaan [OVH:n hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.
- Olet kirjautunut [hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.

> [!warning]
>
> Jos verkkotunnustasi ei ole rekisteröity OVH:lla, sinun on tehtävä nimipalvelinten muokkaus verkkotunnustasi hallinnoivalla palveluntarjoajalla.
>

## Käytännössä

**DNS-alueen muokkauksessa on noudatettava varovaisuutta.** Epäasianmukaisen muutoksen tekeminen saattaa esimerkiksi estää pääsyn verkkosivullesi tai uusien viestien saapumisen sähköpostiosoitteisiisi. Ymmärtämällä tällaisten muokkausten vaikutukset, voit saada paremmin käsityksen muutoksista, joita tulet tekemään.

Kun muokkaat verkkotunnuksesi nimipalvelimia, muokkaat sen käyttämää DNS-konfiguraatiota. Uusi konfiguraatio tallennetaan siis uusille määritetyille nimipalvelimille ja se korvaa vanhan. Teknisesti verkkotunnus käyttää siis uutta DNS-aluetta.

Ole kuitenkin varovainen:

- vanhan DNS-konfiguraation sisältöä ei kopioida automaattisesti uuteen. Varmista siis, että se sisältää kaikki tarvittavat elementit verkkotunnukseesi liitettyjen palveluiden (kuten verkkosivun ja sen sähköpostiosoitteiden) toimintaan.

- Jos haluat muokata vain yhtä tämän hetkistä DNS-konfiguraatiota (kuten muokata tietuetta), suosittelemme muokkaamaan mieluummin DNS-aluetta. Apua siihen löydät tästä ohjeesta: [DNS-alueen muokkaus](https://docs.ovh.com/fi/domains/miten_dns-aluetta_muokataan/){.external}.

> [!warning]
>
> Varmista ennen muutoksen aloittamista, ettei toimenpide estä verkkotunnuksesi saavutettavuutta. Jos olet epävarma, ota yhteyttä muutosta pyytävään henkilöön asian varmistamiseksi.
>

### 1. Mene verkkotunnuksesi OVH:n nimipalvelinten hallintaan

Kirjaudu [hallintapaneeliisi](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}, klikkaa `Verkkotunnukset`{.action} vasemman reunan valikossa ja valitse sitten kyseessä oleva verkkotunnus. Mene lopuksi välilehdelle `Nimipalvelimet`{.action}.

Näkyviin tuleva taulukko näyttää tämän hetkiset verkkotunnuksellesi määritetyt nimipalvelimet OVH:lla. Näkyvissä voi olla useita nimipalvelimia, joita kaikkia symboloi yksi taulukon rivi.

![dnsserver](images/edit-dns-server-ovh-step1.png){.thumbnail}

### 2. Muokkaa verkkotunnuksesi nimipalvelimia

Aloita nimipalvelinten muokkaus klikkaamalla painiketta `Muokkaa nimipalvelimia`{.action}.

Muokkaa näkyviin tulevilla tekstialueilla nykyisistä nimipalvelimista niitä, jotka haluat määrittää. Lisätäksesi ylimääräisiä palvelimia olemassa olevaan listaan klikkaa `+`{.action}-merkkiä taulukon viimeisen rivin oikeassa reunassa ja näkyviin tulee ylimääräinen tekstialue.

Kun tiedot on annettu, klikkaa painiketta `Aseta konfiguraatio`{.action}. Nimipalvelinten tila päivittyy taulukossa vastaamaan juuri tekemiäsi muutoksia.

> [!primary]
>
> Painikkeella `Palauta nimipalvelimet`{.action} voidaan muuttaa verkkotunnuksen nykyiset nimipalvelimet OVH:n alkuperäisiksi nimipalvelimiksi. Suosittelemme käyttämään ainoastaan tätä vaihtoehtoa, jos haluat käyttää uudestaan OVH:n nimipalvelimia. 
>

![dnsserver](images/edit-dns-server-ovh-step2.png){.thumbnail}

### 3. Odota muokkauksen ajan

Kun toimenpide on tehty, on odotettava sen toteutumista. Kaksi perättäistä määräaikaa on otettava huomioon:

- OVH:lla toteutettu muutos täytyy rekisteröidä verkkotunnuspäätettäsi hallinnoivalla organisaatiolla. Voit seurata etenemistä [hallintapaneelisi](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} osassa `Verkkotunnukset`{.action}, vasemmanpuoleisessa palveluvalikossa kohdassa `Meneillään olevat operaatiot`{.action}.

- Kun verkkotunnustasi hallinnoiva organisaatio on rekisteröinyt muutoksen, seuraa enintään 48 tunnin mittainen propagaatioaika ennen kuin muutokset ovat astuneet täysin voimaan.

## Lue lisää aiheesta

[Miten DNS-aluetta muokataan?](https://docs.ovh.com/fi/domains/miten_dns-aluetta_muokataan/){.external}

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.