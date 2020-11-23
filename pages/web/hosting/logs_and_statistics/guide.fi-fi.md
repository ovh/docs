---
deprecated: true
title: 'Webhotellit: sivuston tilastojen tarkastelu'
excerpt: Pääsy sivuston tilastoihin
id: '1344'
slug: webhotellit_sivuston_tilastojen_tarkastelu
legacy_guide_number: g1344
---


## Hallintapaneeliin kirjautuminen
Kirjaudu [hallintapaneeliin](https://www.ovh.com/manager/web/) asiakastunnuksellasi ja sille määrittelemälläsi salasanalla.

Sisäänkirjautumisen jälkeen valitse vasemman puoleisesta valikosta webhotelli, jonka lokitiedostoja haluat tarkastella.

Kun olet klikannut verkkotunnusta, valitse vasemmalta puolelta ensin ”Webhotelli” jonka jälkeen yläriviltä ”Tilastot”.

![](images/img_2827.jpg){.thumbnail}
Klikkaa webhotellin yhteenvedossa "Tilastot ja lokitiedostot".

![](images/img_2826.jpg){.thumbnail}


## Pääsy tilasto- ja lokitiedostosivustolle
Vaihtoehtoinen kirjautumistapa on kirjoittaa selaimeen osoite https://logs.ovh.net/omaverkkotunnuksesi ja kirjaudu käyttäen OVH:n asiakastunnusta ja salasanaa.

Tietojen tarkastelu on helppoa. Pystyt analysoimaan sivustosi tilastotietoja muutamalla klikkauksella.

Klikkaa hallintapaneelissa automaattisesti luodusta linkistä nähdäksesi tilasto- ja lokitiedostot.

Kirjaudu käyttäen OVH:n asiakastunnusta ja salasanaa.


## Tilastosivu
Kun olet kirjautunut sisään tilastosivulle, näkymä näyttää tältä (ks. kuvakaappaus).

Käytettävissäsi on kaksi vaihtoehtoa:


- Sivuston tilastojen tarkastelu Urchin v6:n kautta (ks. vihreä laatikko).

- Sivuston tilastojen tarkastelu raakalogeja tutkimalla lähes reaaliajassa (ks. oranssi laatikko).



![](images/img_2832.jpg){.thumbnail}


## Urchin v6
Tilastot tarjoavat seuraavia tietoja:

Sivuston liikenne


- Vierailijoiden määrä.
- Ladattujen sivujen määrä.
- Ladattujen sivujen paino toisiinsa suhteutettuna.
- HTTP-pyyntöjen määrä.

Näitä voidaan tarkastella tunti-, päivä-, viikko-, kuukausi- tai vuositasolla.

Sivut

- Keskimääräinen vierailuaika koko sivustollasi tai tietyllä sivulla.

Hakukonenäkyvyys

- Miten sivustolle päätynyt löysi itsensä sivustolle?
- Mitä hakukonetta käyttäen he löysivät sivustosi?
- Mitä hakusanoja he käyttivät hakuehdoissa?

Seuranta

- Mitä sivustosi sivuja tarkastellaan ensimmäisenä kävijöiden toimesta?
- Mitä sivuja tarkastellaan viimeisenä?
- Mikä on keskimääräinen sivulla käytetty aika?
- Mikä on sivustojen lukumäärä jota vierailun aikana tarkastellaan?



![](images/img_1490.jpg){.thumbnail}


## Raakalogit
Voit tarkastella sivustosi tilastoja lähes reaaliajassa. Logit muodostetaan alle 15 minuutissa eri sivuston tapahtumista.

Saatavilla olevat logityypit:


- Web-logit: Tähän tallentuu yleiset sivustosi tapahtumat. Hyödyllinen varsinkin kräkkeröintiyrityksien selvittelyssä.

- FTP-logit: FTP-yhteyksien tilastointi ja näyttö.

- Error-logit: Sivustollasi tapahtuneet virhetilanteet.

- CGI-logit: Logitaso, joka näyttää cgi-sovelluksien tekemät toimenpiteet.

- Out-logit: Lokitiedosto, joka näyttää eri sovelluksien tekemät yhteydenotot ulospäin.

- SSH-logit: Tämän avulla näet webhotellitilaasi muodostetut SSH-yhteydet.

- Cron-logit: suunniteltujen tehtävien suoritus.



![](images/img_2828.jpg){.thumbnail}


## Onko tilastosovellus Urchinin käyttö suomeksi mahdollista?
Urchinin käyttö suomeksi ei ole mahdollista.

