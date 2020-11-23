---
deprecated: true
title: 'OVH:n DNS-alueen luominen verkkotunnukselle'
slug: dns_alueen_luominen_ulkopuoliselle_verkkotunnukselle
excerpt: 'Opi luomaan DNS-alue verkkotunnuksellesi hallintapaneelisi kautta OVH:lla'
section: 'DNS ja DNS-alue'
order: 2
---

**Päivitetty 9.8.2018**

## Tavoite

Verkkotunnuksen Domain Name System (DNS) -alue muodostaa sen konfigurointitiedoston. Se koostuu teknisistä tiedoista, joita kutsutaan tietueiksi. Perinteisessä käytössä näillä tietueilla voidaan yhdistää verkkotunnuksesi ja palvelin tai palvelimet, jotka ylläpitävät verkkosivuasi ja sähköpostiosoitteitasi.

On erilaisia syitä, joiden vuoksi saatat joutua luomaan DNS-alueen verkkotunnuksellesi OVH:lla.

**Opi luomaan DNS-alue verkkotunnuksellesi hallintapaneelisi kautta OVH:lla.**

## Edellytykset

- Sinulla on verkkotunnus.
- Kyseisellä verkkotunnuksella ei ole ennestään OVH:n DNS-aluetta eikä sillä ole meneillään toimenpidettä tai tilausta OVH:lla.
- Verkkotunnuksen tekninen konfigurointi on oikein (tila, SOA jne.).
- Olet kirjautunut [hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Käytännössä

### 1. vaihe: DNS-alueen luominen hallintapaneelissa

Kirjaudu [hallintapaneeliisi](https://www.ovh.com/auth/?action=gotomanager){.external}, klikkaa `Tilaa`{.action} vasemman reunan valikossa ja sitten `DNS-alue`{.action}.

Syötä näkyviin tulevalle sivulle verkkotunnus, jolle haluat luoda DNS-alueen. Odota hetki, että työkalu suorittaa verkkotunnusta koskevat tarkistukset.

Jos näkyviin ilmestyvä viesti ilmoittaa, ettei DNS-aluetta voida luoda, tarkista, että verkkotunnus noudattaa vaadittuja ennakkoedellytyksiä tai pyydä verkkotunnusta hallinnoivaa henkilöä tekemään tämä tarkistus. Kun kaikki on oikein, yritä menettelyä uudestaan.

![dnszonecreate](images/dns-zone-create-step1.png){.thumbnail}

Kun tarkastus on tehty, sinun on valittava aktivoitko vähimmäistietueet DNS-alueelle, jota olet luomassa. Valinta ei ole lopullinen, sillä voit muokata tietueita DNS-alueen luomisen jälkeen.

|Aktivoitko vähimmäistietueet?|Yksityiskohdat|
|---|---|
|Kyllä|Valitse tämä, jos haluat jatkossa personoida DNS-aluetta itse.|
|Ei|Valitse tämä, jos tarkoituksesi on käyttää OVH:n palveluja kuten [webhotellia](https://www.ovh-hosting.fi/webhotelli/){.external}, joissa alue on esikonfiguroitu.|

![dnszonecreate](images/dns-zone-create-step2.png){.thumbnail}

Kun olet tehnyt valintasi, seuraa vaiheita DNS-alueen luomiseen saakka.

### 2. vaihe: DNS-alueen muokkaus (valinnainen)

Kun verkkotunnuksesi DNS-alue on luotu, voit muokata sitä. Tämä toimenpide on valinnainen, mutta se voi olla välttämätön, jos haluat varmistua verkkotunnukseen liitettyjen palveluidesi (kuten verkkosivujen ja sähköpostiosoitteiden) käytettävyydestä.

Jos haluat muokata DNS-aluetta [hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager){.external}, klikkaa kohtaa `Verkkotunnukset`{.action} vasemman reunan valikossa ja valitse sitten kyseessä oleva verkkotunnus. Mene lopuksi välilehdelle `DNS-alue`{.action}.

> [!primary]
>
> Jos olet juuri luonut DNS-alueen eikä verkkotunnustasi näy vielä `Verkkotunnusten`{.action} palvelulistassasi, odota hetki ja lataa sitten sivu uudelleen.
>

Tee tämän jälkeen tarvittavat toimenpiteet. Voit lukea lisää DNS-alueen muokkauksesta dokumentaatiostamme [“OVH:n DNS-alueen muokkaus”](https://docs.ovh.com/fi/domains/miten_dns-aluetta_muokataan/){.external}. Kun verkkotunnuksesi OVH:n DNS-aluetta on muokattu, tarvitaan enintään 4-24 tuntia kestävä propagaatioaika, jotta muutokset astuvat voimaan.

### 3. vaihe: OVH:n verkkotunnuksen nimipalvelinten muokkaus

Kun DNS-alue OVH:lla on valmis käytettäväksi, sinun on liitettävä siihen verkkotunnuksesi. Hae sitä varten etukäteen verkkotunnustasi varten aktivoidut nimipalvelimet hallintapaneelista. Nämä näkyvät kohdan `Name Servers`{.action} alla.

![dnszonecreate](images/dns-zone-create-step3.png){.thumbnail}

Kun sinulla on verkkotunnuksesi nimipalvelimet, **muokkaa nimipalvelimia verkkotunnustasi hallinnoivan palveluntarjoajan käyttöliittymässä.** Kun toimenpide on tehty, tarvitaan enintään 48 tunnin propagaatioaika ennen kuin muutos on astunut voimaan.

## Lue lisää aiheesta

[Miten DNS-aluetta muokataan?](https://docs.ovh.com/fi/domains/miten_dns-aluetta_muokataan/){.external}

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.