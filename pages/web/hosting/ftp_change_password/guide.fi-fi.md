---
deprecated: true
title: 'FTP-käyttäjän salasanan vaihtaminen'
slug: ftp-kayttajan-salasanan-vaihtaminen
excerpt: 'Opi vaihtamaan OVH:n webhotellissasi luodun FTP-käyttäjän salasana'
section: 'FTP ja SSH'
order: 1
---

**Päivitetty 9.2.2018**

## Tavoite

OVH:n webhotellituotteet tarjoavat pääsyn tallennustilaan, jonka avulla voit asettaa verkkosivusi verkkoon. Pääsy tähän tilaan tapahtuu käyttämällä FTP-käyttäjätunnusta ja siihen liittyvää salasanaa.

**Opi muokkaamaan FTP-käyttäjän salasanaa OVH:n webhotellissasi.**

## Edellytykset

- Sinulla on [webhotellituote](https://www.ovh-hosting.fi/webhotelli){.external}.
- Olet kirjautunut [hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Käytännössä

### vaihe 1: Mene FTP-käyttäjien hallintaan

Kirjaudu [hallintapaneeliisi](https://www.ovh.com/auth/?action=gotomanager){.external}, klikkaa kohtaa `Webhotellit`{.action} vasemman reunan valikossa ja valitse sitten kyseessä olevan webhotellin nimi. Mene lopuksi välilehdelle `FTP - SSH`{.action}.

Taulukossa on näkyvissä webhotellissasi luodut FTP-käyttäjät. Näiden käyttäjien avulla voit kirjautua tallennustilaasi ja siirtää verkkosivusi tiedostot verkkoon. Yksi käyttäjä on luotu automaattisesti webhotellisi asennuksen yhteydessä.

![ftppassword](images/change-ftp-password-step1.png){.thumbnail}

### vaihe 2: FTP-käyttäjän salasanan vaihtaminen

Webhotellissasi luodun FTP-käyttäjän salasanan vaihtaminen tapahtuu kahdella tapaa [webhotellituotteestasi](https://www.ovh-hosting.fi/webhotelli/){.external} riippuen.

- **Tuotteissa jotka eivät voi luoda FTP-käyttäjiä** (Start 10M, Personal): klikkaa kynän kuvaa taulukon sarakkeessa `Salasana`{.action}, syötä uusi salasana tekstialueelle ja vahvista muutos.

- **Tuotteissa, joissa on mahdollista luoda FTP-käyttäjiä** (Pro, Performance ja Cloud Web): klikkaa taulukossa halutun käyttäjän oikealla puolella olevaa hammasrattaan kuvaa ja siten `Vaihda salasana`{.action}. Syötä näkyviin tulevassa ikkunassa haluamasi salasana, vahvista se ja klikkaa painiketta `Vahvista`{.action}.

Muutos astuu voimaan joidenkin minuuttien kuluessa.

> [!primary]
>
> Turvallisuussyistä kehotamme noudattamaan uuden salasanan valinnan yhteydessä ilmoitettuja ehtoja. Tässä lisäksi salasanoihin liittyvät suosituksemme:
>
> - Älä käytä samaa salasanaa kahdesti.
>
> - Valitse salasana, jolla ei ole yhteyttä henkilötietoihisi (vältä esimerkiksi viittauksia sukunimeesi, etunimeesi tai syntymäpäivään).
>
> - Uusi salasanasi säännöllisesti.
>
> - Älä kirjoita salasanaa paperille tai lähetä sitä sähköpostiosoitteeseesi.
>
> - Älä tallenna salasanojasi verkkoselaimeesi, vaikka selaimesi ehdottaisi sitä.
>

### vaihe 3: Kirjaudu tallennustilaasi

Kun FTP-käyttäjän salasana on vaihdettu, voit kirjautua tallennustilaasi.

[Webhotellituotteestasi riippuen](https://www.ovh-hosting.fi/webhotelli){.external} siihen on olemassa useita vaihtoehtoja:

- **Käyttämällä FTP Exploreria**: voit kirjautua tallennustilaasi verkkoselaimesta. Käyttääksesi sitä klikkaa edelleen `FTP - SSH`{.action}-välilehdellä painiketta `FTP Explorer`{.action}

- **Käyttämällä FTP-protokollan kanssa yhteensopivaa ohjelmistoa**: sinun on asennettava yhteensopiva ohjelmisto tietokoneellesi (esim. FileZilla)

- **Käyttämällä SSH-yhteyttä**: sinun on käytettävä päätteen kautta annettavia komentoja voidaksesi toimia vuorovaikutuksessa tallennustilasi kanssa. Tämän tyyppisen yhteyden käyttämiseen tarvitaan kehittyneempää osaamista.

## Lue lisää aiheesta

[Lue lisää salasanojen turvallisuudesta Viestintäviraston sivuilta.](https://www.viestintavirasto.fi/kyberturvallisuus/tietoturvanyt/2014/12/ttn201412031257.html){.external}

[Filezillan käyttö webhotellin kanssa.](https://docs.ovh.com/fi/hosting/webhotellit_filezilla_kayttoohje/){.external}

[SSH webhotellissa.](https://docs.ovh.com/fi/hosting/webhotellit_ssh_webhotellissa/){.external}

Viesti käyttäjäyhteisömme kanssa osoitteessa [https://ovh-hosting.fi/community/foorumi](https://ovh-hosting.fi/community/foorumi){.external}.