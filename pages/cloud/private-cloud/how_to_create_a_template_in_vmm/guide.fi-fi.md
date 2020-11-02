---
deprecated: true
title: 'Asennusmallin luominen VMM:ssä'
excerpt: 'Tässä ohjeessa kerromme miten voit helposti luoda asennusmallin VMM:ssä'
slug: asennusmallin_luominen_vmmssa
legacy_guide_number: g1436
---


## Kirjasto
Voit luoda asennusmallin VMM:n Library-osiossa:

![](images/img_1966.jpg){.thumbnail}
Library-osiosta löydät ”Create VM Template”-painikkeen.

![](images/img_1967.jpg){.thumbnail}

## Lähteen valinta:
Tässä velhossa voit tehdä haluamasi valinnat. Esimerkissämme luomme asennusmallin olemassa olevasta asemasta. Valittu levy on OVH:n levykirjastossa.

![](images/img_1971.jpg){.thumbnail}

## Nimeäminen:
Kirjoita asennusmallin nimi ja lisää sille kuvaus, mikäli tarpeen.

## Raudan konfigurointi:
Voit valita haluamasi konfiguraation.
Älä unohda HA-valintaa, Cloud-yhteensopivuutta ja migraatio-oikeuksia.
HA:

![](images/img_1997.jpg){.thumbnail}
Cloud-yhteensopivuus

![](images/img_1998.jpg){.thumbnail}
Oikeus migraatioon tapauksissa joissa prosessorit eivät ole samat:

![](images/img_1999.jpg){.thumbnail}

## Käyttöjärjestelmän konfigurointi:
Valitse haluamasi konfiguraatio: oletussalasana, asiaan kuuluvat säännöt, RunOnce-avaimet, jne.

![](images/img_1969.jpg){.thumbnail}

## Yhteenveto:
Asennusmallin luonti pitäisi olla nyt valmis. Sinun täytyy enää vain viimeistellä se klikkaamalla ”create”.

![](images/img_1970.jpg){.thumbnail}


## Jobs
Voit seurata luotuja tehtäviä ”Jobs”-valikon kautta.

![](images/img_1972.jpg){.thumbnail}
Tehtävät listataan oikealla puolella kohdassa historia.

![](images/img_1973.jpg){.thumbnail}

