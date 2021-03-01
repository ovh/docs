---
deprecated: true
title: MX-kentän lisäys verkkotunnuksen konfiguraatioon
excerpt: Opi lisäämään MX-kenttä verkkotunnukseesi OVH:lla
slug: webhotellin_sahkoposti_opas_mx-konfiguraatioon_dns-alueella
section: DNS ja DNS-alue
order: 4
---

**Päivitetty 26.3.2018**

## Tavoite

MX-kenttä mahdollistaa verkkotunnuksen yhdistämisen sähköpostipalvelimeen. Sen ansiosta palvelimet, jotka lähettävät sähköpostiviestejä osoitteisiisi, tietävät, mihin viestit kuuluu siirtää. Palveluntarjoajallasi on todennäköisesti monta sähköpostipalvelinta. On siis luotava useita MX-kenttiä.

**Opi lisäämään MX-kenttä verkkotunnuksesi konfiguraatioon OVH:lla.**

## Edellytykset

- Sinulla on pääsyoikeudet verkkotunnuksen hallintaan [OVH:n hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.
- Olet kirjautunut [hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.
- Kyseessä olevan verkkotunnuksen on käytettävä OVH:n konfigurointia (eli OVH:n nimipalvelimia).

> [!warning]
>
> - Jos verkkotunnuksesi ei käytä OVH:n nimipalvelimia, sinun on tehtävä muokkaus verkkotunnuksesi konfiguraatiota hallinnoivan palveluntarjoajan käyttöliittymässä.
>
> - Jos verkkotunnuksesi on OVH:n ylläpitämä, voit tarkistaa käyttääkö se konfiguraatiotamme [hallintapaneelisi](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} `Nimipalvelimet`{.action}-välilehdeltä kyseessä olevan verkkotunnuksen kohdalta.
>

## Käytännössä

### 1. MX-kentän peruskäsitteet

MX-kenttä yhdistää verkkotunnuksesi sähköpostipalveluntarjoajasi, kuten OVH:n, palvelimeen. Kun sinulle lähetetään sähköpostia, lähetyksen suorittava palvelin tietää MX-kentän ansiosta, mille palvelimelle lähetys on toimitettava eteenpäin.

Koska MX-kenttiä voidaan määrittää useampia samalle verkkotunnukselle, on tarpeen määritellä niiden tärkeysjärjestys. Näin sähköposteja lähettävät palvelimet voivat tietää, mille palvelimelle viestit on ensisijaisesti toimitettava. Voit kuitenkin lisätä ainoastaan samalle palveluntarjoajalle kuuluvia MX-kenttiä.

Yleisesti **MX-kentän muutoksissa on noudatettava varovaisuutta**. Epäasianmukainen muutos saattaa estää uusien sähköpostiviestien vastaanottamisen osoitteillasi. Kehotamme erityiseen tarkkaavaisuuteen näitä muutoksia toteuttaessa.

### 2. OVH:n MX-konfiguraatio

Alla näet MX Plan - (erikseen tai [OVH:n webhotelliin sisältyvänä](https://www.ovh-hosting.fi/webhotelli/){.external}), [E-mail Pro -](https://www.ovh-hosting.fi/sahkopostit/email-pro/){.external} ja [Exchange](https://www.ovh-hosting.fi/sahkopostit/hosted-exchange/){.external}-ratkaisuissamme käytettävän OVH:n MX-konfiguraation. Sähköpostipalvelimissamme on roskapostisuodatin ja virustorjunta.

|Verkkotunnus|TTL|Tietueen tyyppi|Prioriteetti|Kohde|
|---|---|---|---|---|
|*jätä tyhjäksi*|3600|MX|1|mx0.mail.ovh.net.|
|*jätä tyhjäksi*|3600|MX|5|mx1.mail.ovh.net.|
|*jätä tyhjäksi*|3600|MX|50|mx2.mail.ovh.net.|
|*jätä tyhjäksi*|3600|MX|100|mx3.mail.ovh.net.|

Näitä eri MX-kenttiä on nyt käytettävä verkkotunnuksesi DNS-alueen konfiguraatiossa. Seuraavassa vaiheessa voit tehdä tämän toimenpiteen verkkotunnuksesi OVH:n DNS-alueen konfiguraatiossa.

### 3. OVH:n MX-kentän konfiguraation muokkaus

Muokataksesi MX-kenttiä verkkotunnuksesi OVH:n konfiguraatiossa, kirjaudu [hallintapaneeliisi](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}. Mene vasemmanpuoleisessa valikossa osioon `Verkkotunnukset`{.action}, klikkaa kyseessä olevaa verkkotunnusta ja mene sitten `DNS-alue`{.action}-välilehdelle.

Taulukossa näkyy verkkotunnuksesi konfiguraatio OVH:lla. Kukin rivi vastaa DNS-tietuetta. Kehotamme tarkistamaan aluksi, onko MX-kenttiä jo olemassa verkkotunnuksesi OVH:n DNS-konfiguraatiossa. Voit käyttää apuna suodatuskenttää.

![dnsmxrecord](images/mx-records-dns-zone.png){.thumbnail}

Jos MX-kenttiä on jo olemassa ja haluat korvata ne, klikkaa hammasrattaan kuvaa kyseisen rivin oikeassa reunassa. Klikkaa sitten `Poista tietue`{.action}. Varmista kuitenkin, kun lisäät haluttuja MX-tietueita, ettet jätä verkkotunnustasi ilman MX-tietuetta.

Tätä varten klikkaa painiketta `Lisää tietue`{.action} ja valitse `MX`{.action}. Täytä pyydetyt tiedot valitun sähköpostiratkaisun mukaan:

- **jos sinulla on OVH:n sähköpostiratkaisu**: katso [vaiheessa 2 “OVH:n MX-konfiguraatio”](https://docs.ovh.com/fi/domains/webhotellin_sahkoposti_opas_mx-konfiguraatioon_dns-alueella/#2-ovhn-mx-konfiguraatio){.external} annettuja tietoja

- **jos sinulla on jokin muu sähköpostiratkaisu**: katso sähköpostipalveluntarjoajasi toimittamat tiedot.

Kun tiedot on täytetty, viimeistele vaiheet ja klikkaa sitten `Vahvista`{.action}.

> [!primary]
>
> Muokkaus tarvitsee 4 - 24 tunnin propagaatioajan ennen kuin se on astunut täysin voimaan.
>

## Lue lisää aiheesta

[Yleistä nimipalvelimista](https://docs.ovh.com/fi/domains/webhotellit_yleista_nimipalvelimista/){.external}

[DNS-alueen muokkaus](https://docs.ovh.com/fi/domains/miten_dns-aluetta_muokataan/){.external}

Viesti käyttäjäyhteisömme kanssa osoitteessa <https://community.ovh.com/en/>.