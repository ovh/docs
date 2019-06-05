---
title: Suojausryhmän luominen ja poistaminen Horizon-käyttöliittymässä
excerpt: Katso, kuinka suojausryhmä luodaan tai poistetaan Horizon-käyttöliittymässä
slug: suojausryhma-luominen-poistaminen-horizonissa
section: Horizon-käyttöliittymässä
---

**Päivitetty 08.3.2018**


## Tavoite

Suojausryhmät (Security Groups) koostuvat IP-osoitteiden suodatussäännöistä sekä instanssin verkkoyhteyden määrittävistä porteista, joita sovelletaan kaikkiin projektin instansseihin. Ryhmän säännöt ovat projektikohtaisia. Sen jäsenet voivat muokata ryhmänsä oletussääntöjä ja lisätä uusia sääntökokonaisuuksia.

Kaikilla projekteilla on oletuksena suojausryhmä, jota käytetään jokaisessa instanssissa, jolle ei ole erikseen määritetty toista ryhmää. OVH:lla suojausryhmän oletusasetukset sallivat niin lähtevän kuin saapuvankin liikenteen instanssissa.

**Tässä ohjeessa kerrotaan, kuinka suojausryhmiä voidaan luoda ja poistaa Horizon-käyttöliittymässä.**

## Edellytykset

- Sinulla on pääsy [Horizon-käyttöliittymään](https://docs.ovh.com/fi/public-cloud/konfiguroi_yhteys_horizon-kayttoliittymaan/){.external}.


## Käytännössä

Kirjaudu aluksi [Horizon](https://horizon.cloud.ovh.net/){.external}-käyttöliittymään ja valitse yläreunasta alue, jonne haluat luoda suojausryhmän:

![Alueen valinta](images/1_H_sec_groups_region_choosing.png){.thumbnail}

Suojausryhmä on luotu valitulle alueelle. Jos ryhmää on käytettävä useilla alueilla, se on määritettävä jokaiselle erikseen.


Klikkaa painiketta `Network`{.action} ja sitten `Security Groups`{.action}:

![Suojausryhmä](images/2_H_crete_sec_group.png){.thumbnail}

Suojausryhmän luomiseksi klikkaa painiketta `+ Create Security Group`{.action}. Nimeä sitten ryhmä ja anna sille kuvaus (valinnainen).

![Suojausryhmän luominen](images/3_H_new_sec_gr_name.png){.thumbnail}

Vahvista sitten painikkeella `Create Security Group`{.action}.

Suojausryhmän poistamiseksi rastita ja klikkaa `Delete Security Groups`{.action}.


## Lue lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.