---
title: Kirjautuminen Horizon-käyttöliittymään
slug: konfiguroi_yhteys_horizon-kayttoliittymaan
legacy_guide_number: 1773
excerpt: Katso, kuinka Horizon-käyttöliittymään kirjaudutaan
section: Horizon-käyttöliittymässä
order: 1
---

**Päivitetty 08.3.2018**

## Tavoite

Horizon on OpenStackin graafinen hallintakäyttöliittymä. Tietyt hallintaominaisuudet ovat käytettävissä ainoastaan tämän käyttöliittymän kautta.

**Tässä ohjeessa kerrotaan, kuinka sinne päästään.**


## Edellytykset

- Olet luonut Public Cloud -projektin.


## Käytännössä

### OpenStack-käyttäjän luominen

Horizoniin kirjautumista varten on luotava aluksi OpenStack-käyttäjä. Mene sitä varten hallintapaneelisi `Cloud`{.action}-osioon ja sitten `Palvelimet`{.action} ja valitse kyseessä oleva projekti. Valitse tämän jälkeen välilehti `OpenStack`{.action} vasemmasta sarakkeesta.

![Käyttäjän lisäys](images/1_H_add_user.png){.thumbnail}

Klikkaa painiketta `Lisää käyttäjä`{.action} ja valitse sitten käyttäjän kuvaus. Käyttäjätunnus ja salasana muodostuvat seuraavaksi automaattisesti. Kun operaatio on päättynyt, näkyviin tulee käyttäjätilin luomisen vahvistava viesti.

Salasana näkyy hallintapaneelissa sivun virkistykseen asti. Voit säilyttää sen käyttääksesi sitä uudelleen uuden kirjautumisen yhteydessä. Lisäksi on mahdollista generoida uusi salasana klikkaamalla kuvaketta nykyisen salasanasi vieressä.

![Projektivalikko](images/2_H_user_manage.png){.thumbnail}

### OpenStack Horizoniin kirjautuminen

Nähdäksesi valikon klikkaa kolmea pistettä esittävää kuvaketta rivin päässä `...`{.action}. Klikkaa sitten linkkiä `Avaa OpenStack Horizon`{.action}. Näkyviin tulee [Horizonin](https://horizon.cloud.ovh.net/auth/login/){.external} kirjautumissivu. Syötä kirjautumista varten käyttäjätunnuksesi (`User Name`) ja salasanasi.

![Projektivalikko](images/3_H_open_menu.png){.thumbnail}

![Kirjautumisnäkymä](images/4_H_login_window.png){.thumbnail}

Kun olet kirjautunut, näkyviin tulee OpenStack Horizon -käyttöliittymä:

![Horizon-käyttöliittymä](images/5_H_view.png){.thumbnail}


## Lue lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.