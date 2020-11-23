---
deprecated: true
title: Hyvät tietoturvakäytännöt vSphere Web -asiakasohjelmassa
slug: vsphere-web-yhteyden-suojaaminen
excerpt: Katso, kuinka voit suojata pääsyn vSphere Web -asiakasohjelmaan
section: Aluksi
---

**Päivitetty 08.3.2018**

## Tavoite

Pääsyä infrastruktuuriisi on aiheellista rajata järjestelmäsi eheyden varmistamiseksi. Tarjoamme tähän tarkoitukseen erilaisia menettelytapoja.

**Opi suojaamaan pääsy vSphere Web -asiakasohjelmaasi nopeasti ja helposti muutamilla vinkeillä.**

## Edellytykset

- Olet kirjautunut [hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Käytännössä

### IP-yhteyksien hallinta

Ensimmäinen menettely liittyy IP-osoitteiden yhteyksien rajoittamiseen. Suosittelemme toimimaan aina valkoista listaa käyttävällä merkintäjärjestelmällä. Tämä tekniikka kieltää oletuksena pääsyn kaikilta IP-osoitteilta. Tämän jälkeen on mahdollista lisätä osoitteita, jotka tarvitsevat yhteyden infrastruktuuriisi.

Tämä toiminto on käytettävissä suoraan [hallintapaneelissasi.](https://www.ovh.com/auth/?action=gotomanager){.external} Kun olet Private Cloud -osiossasi, mene kohtaan `Tietoturva`{.action}. Näkyviin tulee taulukko, jossa voit nähdä hyväksytyt tai estetyt IP-osoitteet. Lisätäksesi uusia klikkaa oikealla kohtaa `Lisää IP-osoitteita`{.action}.

![IP-osoitteen lisäys](images/adding_ip.png){.thumbnail}


### Erityisten käyttäjien luominen

Suosittelemme vahvasti luomaan henkilökohtaiset pääsyoikeudet jokaiselle henkilölle, jonka tarvitsee päästä infrastruktuuriisi. Tämän toimenpiteen voi tehdä myös [OVH:n hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager){.external}, mutta tällä kertaa välilehdellä `Käyttäjät`{.action}. Klikkaa uusien lisäämiseksi oikealla olevaa painiketta: `Lisää käyttäjä`{.action}.

![Käyttäjät](images/users.png){.thumbnail}


Käyttäjän luomisen yhteydessä vaaditaan salasana.

> [!primary]
>
> Jotta tietosi ovat täysin suojattuja, on salasanasi noudatettava alla olevia kriteerejä:
>
> - Se sisältää vähintään kahdeksan merkkiä.
> - Se sisältää vähintään kolmen tyyppisiä merkkejä.
> - Se ei ole suoraan sanakirjasta löytyvä sana.
> - Se ei sisällä henkilötietoja (etunimi, sukunimi tai syntymäpäivä).
> - Sitä ei käytetä millään muulla käyttäjätilillä.
> - Sitä säilytetään salasanojen hallintaohjelmassa.
> - Se vaihdetaan kolmen kuukauden välein.
> - Se ei ole sama kuin aiemmat salasanat.
>

Voit muokata seuraavaksi jokaisen käyttäjän oikeuksia klikkaamalla hammasratasta kunkin tunnuksen vieressä:

![Käyttäjien asetusten muokkaaminen](images/users_edit.png){.thumbnail}

### Istuntoaikojen rajoittaminen

Käytön lopuksi on suositeltavaa sulkea käyttäjäistunto. Yhteysajan rajoittamiseksi istunnolle on mahdollista lisätä vanhentumisaika.

Se voidaan määrittää [OVH:n hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager){.external}. Kun olet Private Cloud -osiossasi, valitse `Tietoturva`{.action}. Klikkaa sitten oikealla olevaa painiketta `Vanhentumisajan muuttaminen`{.action}. Seuraavassa ikkunassa voit valita istunnon vanhentumiseen kuluvan ajan (minuuteissa).

![Istunnon vanhentuminen](images/expiration.png){.thumbnail}

## Lue lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.