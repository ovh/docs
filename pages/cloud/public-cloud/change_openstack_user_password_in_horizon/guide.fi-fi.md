---
title: OpenStack-käyttäjän salasanan vaihtaminen Horizonissa
excerpt: Katso, kuinka käyttäjän salasanaa muokataan Horizon-käyttöliittymässä
slug: openstack-kayttajan-salasanan-muokkaus
section: Horizon-käyttöliittymässä
---

**Päivitetty 09.3.2018**


## Tavoite

Ohjeessa [Kirjautuminen Horizon-käyttöliittymään](https://docs.ovh.com/fi/public-cloud/konfiguroi_yhteys_horizon-kayttoliittymaan/){.external} kerrottiin, kuinka voit luoda ja poistaa OpenStack-käyttäjiä ja muodostaa salasanan.

Horizon-paneelissa voidaan määrittää salasana jokaiselle käyttäjälle. Huomio, käyttäjätilin salasanan muutos johtaa aktiivisten tunnusten poistamiseen muutoshetkellä.

**Tässä ohjeessa kerrotaan, kuinka voit muokata salasanaa Horizon-käyttöliittymässä.**


## Edellytykset

- Olet luonut OpenStack Horizon -käyttäjätilin.


## Käytännössä

Voit luoda OpenStack-salasana, kun olet kirjautunut [OpenStack Horizoniin](https://horizon.cloud.ovh.net){.external}:

![Kirjautuminen Horizoniin](images/1_H_login_window.png){.thumbnail}

Käyttäjätunnus löytyy Horizon-käyttöliittymän oikeasta yläkulmasta. Klikkaa asiakastunnustasi ja saat näkyviin käytettävissä olevien vaihtoehtojen valikon.
Valitse `Asetukset`{.action} ja vasemmalta `Vaihda salasana`{.action}:

![Salasanan vaihtaminen](images/2_H_pass_change_option.png){.thumbnail}

Syötä nykyinen salasanasi ensimmäiseen kenttään ja uusi salasanasi kahteen seuraavaan kenttään.

> [!primary]
>
> Suosittelemme vahvasti noudattamaan alla olevia neuvoja salasanaa vaihtaessa:
>
> - Salasanassa on oltava vähintään 8 merkkiä.
> - Salasanassa on oltava enintään 30 merkkiä.
> - Salasanan täytyy sisältää vähintään yksi iso alkukirjain.
> - Salasanan täytyy sisältää vähintään yksi pieni alkukirjain.
> - Salasanan täytyy sisältää vähintään yksi numero.
> - Salasana voi sisältää ainoastaan kirjaimia ja numeroja.
>

Vahvista sitten uuden salasanan luominen klikkaamalla `Muuta`{.action}.

![Salasanan asetusten määritys](images/3_H_set_new_passord.png){.thumbnail}

Huomioi, että salasanan vaihtaminen johtaa aiemmin käytettyjen tunnusten välittömään poistamiseen.

## Lue lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.