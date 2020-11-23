---
deprecated: true
title: Webhotelli Muita .htacess-tiedostolla toteutettavia toimenpiteitä
excerpt: Tässä ohjeessa kerrotaan muista toiminnoista, joita .htaccess-tiedostolla voi tehdä
slug: webhotelli_muita_htacess-tiedostolla_toteutettavia_toimenpiteita
legacy_guide_number: g1972
---


## Hakemiston sisällön listaamisen estäminen
Jotta käyttäjiä voidaan estää luetteloimasta indeksisivuttoman hakemiston tiedostojen sisältöjä kokonaisuudessaan(.cgi, .html, .php jne...), luo .htaccess-tiedosto seuraavalla rivillä:


```
Options -Indexes
```




## Virheilmoitusten kirjoittaminen
Jos haluat personoida tai kirjoittaa omia virheilmoituksia, voit luoda .htaccess-tiedoston, jossa on seuraavat rivit:


```
ErrorDocument virheen_numero
viesti_tai_määränpää
```


Korvaa "virheen_numero" sitä vastaavalla numerolla. Yleisimmäit virheilmoitukset ovat:


- 401 : Authorization required. Tämä virhe tulee, jos käyttäjä antaa väärän käyttäjätunnuksen/salasanan kirjautuessaan suojattuun tiedostoon tai hakemistoon.
- 403 : Access denied. Pääsy hakemistoon, jossa ei ole yhtään index.html-tiedostoa ja palvelimen konfiguraatio kieltää hakemiston tietojen näyttämisen. 
- 404 : Not Found. Käyttäjän etsimää sivua ei ole olemassa.
- 500 : Server Error. Tämä virhe johtuu tyypillisesti CGI:n virheellisestä suorituksesta tai skriptin virheellisistä oikeuksista.


Korvaa "viesti_tai_määränpää" toteuttavalla toiminnolla. Yksinkertaista viestiä varten kirjoita sopiva viesti lainausmerkkien sisään. Jos haluat tehdä uudelleenohjauksen jollekin sivulle, on sivulle laitettava sinne johtava polku. Tässä kaksi selkeyttävää esimerkkiä:


- Haluat ilmoittaa virheilmoituksen 403 yhteydessä "Valitettavasti sinulla ei ole pääsyoikeutta tähän tiedostoon". Laita .htaccess -tiedostoosi alla oleva rivi: 


```
ErrorDocument 403 "Valitettavasti sinulla ei ole pääsyoikeutta tähän tiedostoon"
```


- Haluat lähettää 404 virheet personoidulle 404.html-sivullesi (verkkotunnuksessasi: verkkotunnus.com): 


code]
ErrorDocument 404 http://www.verkkotunnus.com/404.php
[/code]

Voit myös uudelleenohjata virheen CGI-skriptiin, joka näyttää viestin, uudelleenohjaa sitten käyttäjän alussa kysytyn URL:n mukaan määräytyvään toiseen tiedostoon (saatavana ympäristömuuttujassa REQUEST_URI) sekä/ tai lähettää sinulle sähköpostin jne. Tätä varten lisää seuraava rivi .htaccess-tiedostoon:


```
Errordocument 404 /cgi-bin/error.cgi?type=404
```



Muutos on tarpeellinen ainoastaan siinä tapauksessa, että sivu on https (SSL) -muodossa. Tätä varten on laitettava:


```
Errordocument 401 /~login/error.html
```


Mikäli tämä ei toimi, tarkista että Internet Explorerin ominaisuuksissa, kohdassa Edistynyt on ruksattuna "Näytä yksinkertaistetut HTTP-virheilmoitukset".


## Eri indeksitiedoston määrittäminen
Oletuksena hakemiston indeksitiedosto on muotoa index.html, index.htm tai index.php. Jos haluat, että se on jokin muu tiedosto, voit asettaa seuraavan tyyppisen rivin .htaccess-tiedostoon:


```
DirectoryIndex tiedoston_nimi
```


Jos haluat esimerkiksi käyttää indeksisivuna sivua tervetuloa.html, käytä seuraavaa riviä:


```
DirectoryIndex tervetuloa.html
```




## Uudelleenohjausten tekeminen
Tätä varten klikkaa seuraavaa linkkiä: [tästä](https://www.ovh-hosting.fi/g1339.uudelleenohjaus-verkkotunnus)


## URL uudelleenkirjoittaminen
Tätä varten klikkaa seuraavaa linkkiä:
[tästä](https://www.ovh-hosting.fi/g1971.url_uudelleenkirjoittaminen)


## 
Kaikki mitä haluat tietää .htaccess-tiedostosta löytyy [tästä linkistä](https://www.ovh-hosting.fi/g1967.kaikki_htaccess_tiedostosta)

