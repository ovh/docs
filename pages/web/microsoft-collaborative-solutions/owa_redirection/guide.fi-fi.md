---
deprecated: true
title: 'Exchange 2016: Sähköpostin uudelleenohjaus OWAn kautta'
excerpt: Sähköpostin uudelleenohjaus OWAssa
slug: exchange_2016_sahkopostin_uudelleenohjaus_owan_kautta
legacy_guide_number: g1920
---


## Vaihe 1
Kirjaudu [OWA-käyttöliittymään](https://ex.mail.ovh.net) käyttäen sähköpostiosoitettasi ja sille määriteltyä salasanaa.

Kun olet kirjautunut sisään, klikkaa oikeasta yläkulmasta löytyvää hammasrattaan kuvaa. Tämän jälkeen klikkaa ”Asetukset”.

![](images/img_2936.jpg){.thumbnail}


## Vaihe 2
Klikkaa ”Saapuneet-kansion säännöt ja tyhjennyssäännöt” -kohtaa, jonka jälkeen ”+”-painiketta.

![](images/img_2939.jpg){.thumbnail}


## Vaihe 3
Eteesi aukeaa uusi käyttöliittymä

Täytä seuraavat kohdat:

Nimi: näytettävä nimi.

Kun viesti saapuu, ja se vastaa kaikkia ehtoja: valitse, minkälaista suodatinta haluat viestiin soveltaa.

Toimi seuraavasti: valitse, minkä toiminnon haluat saapuneelle sähköpostille suorittaa. Esimerkiksi ”Siirrä viesti kansioon”.

![](images/img_2940.jpg){.thumbnail}
Eteesi aukeaa uusi ikkuna josta voit valita, tai syöttää itse sähköpostiosoitteen johon postit haluat ohjata.

Tämän jälkeen sinulla on kaksi vaihtoehtoa:



- Syötä sähköpostiosoite käsin

- Etsi sähköpostiosoite yhteystiedoistasi


Klikkaa ”OK” vahvistaaksesi valinnan.

![](images/img_2942.jpg){.thumbnail}


## Vaihe 4
Voit lisätä myös poikkeuksia. Esimerkiksi poikkeuksen, joka määrittelee että tietyiltä vastaanottajilta saapuneita posteja ei uudelleenohjatakaan.

Vahvista tekemäsi poikkeus klikkaamalla ”OK”-painiketta.


## Vaihe 5
Sääntösi pitäisi olla onnistuneesti määritelty.

Yhteenveto asetuksista näytetään oikealla puolella. Voit poistaa säännön tästä osiosta myöhemmin, mikäli tarpeen.

![](images/img_2944.jpg){.thumbnail}


## Roskaposti/virusuodatuksen käyttöönotto
Tämä on esimerkkiasetus roskapostisuodattimesta, joka siirtää roskapostin ”Roskaposti”-kansioon.

OVH:n sähköpostijärjestelmä ei koskaan poista roskaposteja sillä sen yhteydessä poistuisi mahdollisia virheellisesti spämmiksi tulkittuja täysin asiallisiakin sähköposteja.

Ne kuitenkin merkataan roskapostiksi, mikäli olet aktivoinut roskapostisuodattimen exchange-palvelusi konfiguraatiossa hallintapaneelissa. 

Esimerkki, asetettavasta säännöstä:

Nimi:säännön nimi. 

Kun viesti saapuu ja täyttää kaikki seuraavat ehdot:"Se sisältää seuraavat sanat otsikossa..." lisää sitten termi "[spam]" tai "[virus]"

Suorita kaikki seuraavat operaatiot: "Siirrä viesti kansioon..." valitse kansio "Roskaposti"

![](images/img_2945.jpg){.thumbnail}

