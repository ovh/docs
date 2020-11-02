---
deprecated: true
title: Webhotellit Miten tutkia mistä tyhjä valkoinen sivu aiheutuu?
excerpt: Ohjeessa kerrotaan miten tutkia mistä tyhjä valkoinen sivu aiheutuu nettisivuilla.
slug: webhotellit_miten_tutkia_mista_tyhja_valkoinen_sivu_aiheutuu
legacy_guide_number: g1562
---


## Yleistä
Miksi nettisivullani näkyy valkoinen tyhjä sivu?

Toisin kuin voisi ajatella, valkoisella tyhjällä sivulla on käyttönsä.


- Sen avulla piilotetaan nettisivun generoimat virheet. Sen ansiosa murtautuja ei saa mitään tärkeitä tietoja nettisivusta.

Miten valkoinen tyhjä sivu korjataan?

- Kuten edellä mainittiin, sen avulla piilotetaan nettisivun generoimat virheet. Ensin on saatava näkyviin virheet, jotta ne voi sitten korjata.

- Yritä muistaa, milloin valkoinen tyhjä sivu ilmaantui. Ehkä se liittyy liitännäisen tai teeman asennukseen tai päivitykseen tai nettisivun päivitykseen.




## Aktivoi PHP-virheet
Lisää nettisivun tiedostoihin seuraava koodi:


```
ini_set('display_errors',1);
```


Yleensä kannattaa lisätä koodi joko "index.php"-tiedostoon tai johonkin toiseen tiedostoon, jota nettisivusto kutsuu usein, kuten nettisivun konfigurointitiedosto.

Huomio, komento on lisättävä PHP-aloitustunnisteen jälkeen:


```
<?php
```


Tällä tavoin sivusto näyttää korjattavan virheen eikä valkoinen tyhjä sivu enää näy.

## .ovhconfig kehitystila
Virheiden näyttämiseksi kunnolla on tehtävä toinenkin toimenpide:


- Laita ".ovhconfig"-tiedosto kehitystilaan:


Tiedoston ".ovhconfig" on sisällettävä koodi:


```
app.engine=php
app.engine.version=5.4
http.firewall=none
environment=development
```


Ohje PHP-FPM:n käyttöönotosta: []({legacy}1175)

![](images/img_2159.jpg){.thumbnail}
Vinkki


- WordPress järjestelmää käyttävillä verkkosivuilla voi muokata komentoriviä define('WP_DEBUG', false); muuttamalla tiedostossa wp-config.php oleva arvo false muotoon true.




## Välimuistiin liittyvien virheiden tarkastaminen
Tarkistaaksesi näkyykö valkoinen sivu edelleen käyttämättä palvelimen välimuistia:


- Lisää verkkosivuston URL-osoitteen loppuun portin numero :82

Esimerkki: http://esimerkkisivusto.fi:82


Tämän avulla kutsutaan suoraan sivustoa klusterissa ilman "GeoCache"-toiminnon käyttöä.

Saman voi tehdä porteilla 81 - 85.

![](images/img_2160.jpg){.thumbnail}


## Firebugin käyttö - Virheet 429 - 500 - 200

## Yleistä
Suosittelemme FireBugin käyttöä lisätietojen saamiseksi havaitulta valkoiselta tyhjältä sivulta.

## Virhe 429
FireBugin avulla löytyy jopa valkoisesta tyhjästä sivusta mielenkiintoisia virheitä.

Esimerkki: tarkista, löytyykö virhe 429 verkot-välilehdeltä.

Virhe 429 tarkoittaa liian suurta kyselymäärää verkkosivulle.


- PHP-FPM:n aktivointi saattaa ratkaista ongelman:

Ohje PHP-FPM:n käyttöönotosta: []({legacy}1175)

Tällä hetkellä virhe näkyy suoraan verkkosivulla OVH:n generoiman tietosivun kautta, ks. oheinen kuvakaappaus.

- Jos PHP-FPM:n aktivointi ei ratkaise tätä ongelmaa, tuotteen päivittäminen suuremmaksi voi myös tulla kyseeseen.



![](images/img_2158.jpg){.thumbnail}

## Virhe 500
Sivulla näkyy parhaillaan valkoinen tyhjä sivu.

FireBugin käytön jälkeen tällä sivulla löytyy virhe 500 verkko-osiosta.

On mahdotonta tunnistaa virheen syytä tällaisenaan, virhetiedot on aktivoitava, kuten selitettiin [ylempänä](#diagnostique_applicable_activer_les_erreurs_php).

Seuraavaksi voi korjata todetut virheet.

![](images/img_2161.jpg){.thumbnail}

## Vastaus 200 OK
Sivulla näkyy parhaillaan valkoinen tyhjä sivu.

FireBugin käytön jälkeen tällä sivulla löytyy virhe 200 OK verkko-osiosta.

200 OK -vastaus ei ole varsinainen virheviesti.

Se ilmoittaa, että sivu on ladattu oikein, mutta kuitenkin se näkyy tyhjänä.


- Tässä tapauksessa on tarpeetonta aktivoida virheviestit, sillä mitään virhetietoja ei anneta.

Sivustoa on yritettävä korjata ilman tarkempaa tietoa virheviesteistä.
Tämä ilmoitus näyttää olevan yleinen WordPressillä kehitetyille sivuille.


![](images/img_2162.jpg){.thumbnail}

