---
deprecated: true
title: Yksityisen virtuaalipalvelimen käytön aloitus
excerpt: Opi virtuaalipalvelimen käytön perusteet
slug: vps-kayton-aloitus
section: Aluksi
order: 1
---

**Päivitetty 18.04.2018**
 
## Tavoite

Yksityinen virtuaalipalvelin (VPS eli Virtual Private Server) on virtualisoitu dedikoitu palvelin. Toisin kuin webhotellissa (kutsutaan myös jaetuksi webhotelliksi), jonka teknisestä hallinnasta OVH vastaa, VPS-palvelimessa vastaat itse täysin sen hallinnasta.

**Tässä ohjeessa annetaan muutamia vinkkejä avuksi juuri toimitetun ja asennetun VPS-palvelimesi käyttöönottoon.**


> [!warning]
>
> OVH tarjoaa käyttöösi koneita, jotka ovat sinun vastuullasi. Koska meillä ei ole minkäänlaisia käyttöoikeuksia koneisiin, emme ole niiden administraattoreja. Siksi sinun tehtävänäsi on varmistaa ohjelmistojen hallinta sekä suojaus päivittäin. Tämän ohjeen tarkoituksena on auttaa sinua yleisimmissä tehtävissä. Suosittelemme kuitenkin ottamaan yhteyttä erikoistuneeseen palveluntarjoajaan, mikäli sinulla on vaikeuksia tai epäselvyyksiä palvelimen hallintaan, käyttöön tai suojaamiseen liittyen. Lisätietoa tämän ohjeen kohdasta “Lisää aiheesta”.
> 


## Edellytykset

- Olet varannut VPS-tuotteesi [OVH:n sivuilta](https://www.ovh-hosting.fi/vps/){.external}
- Olet saanut asennuksen jälkeen käyttäjätunnuksesi sisältävän sähköpostiviestin (vahvistettu alkuperäisen tilauksesi yhteydessä).


## Käytännössä

Kun olet kirjautunut [hallintapaneeliisi](https://www.ovh.com/auth/?action=gotomanager){.external}, voit katsoa VPS:äsi tiedot menemällä osioon `Cloud`{.action} ja sitten vasemmassa laidassa olevassa valikossa kohtaan `Palvelimet`{.action}. Näet täällä kaikki VPS-tuotteeseesi liittyvät tiedot: yleiset tiedot keskellä, mahdolliset toiminnot, joita voit tehdä kuvaruudun oikeassa reunassa näkyvien painikkeiden avulla sekä lisäoptiot alareunassa.

### Kirjaudu VPS-tuotteeseesi

VPS:n asennuksen (tai uudelleenasennuksen) yhteydessä saat sähköpostiviestin, joka sisältää pääkäyttäjän salasanan, jota käytetään SSH-protokollan kautta kirjautumisessa. SSH on suojattu tiedonsiirtoprotokolla. Kirjautuminen tapahtuu ohjauspäätteeltä (Linux tai MAC) tai kolmannen osapuolen ohjelmiston kautta Windowsilla (esimerkiksi Putty).

Kun päätteesi on auki, naputtele tämä komento kirjautuaksesi VPS-tuotteeseesi:

```sh
ssh root@VPS:n_IPv4_osoite
```

Tai:

```sh
ssh root@VPS:n_tunnus
```

VPS-tuotteesi tunnus alkaa aina muodossa vpsXXXX.ovh.net (jossa XXXX on numerosarja).


### VPS-palvelimen asennus tai uudelleenasennus

Uudelleenasennus tapahtuu aina suoraan hallintapaneelissa. Se onnistuu klikkaamalla painiketta `Uudelleen asenna VPS`{.action}:

![VPS:n uudelleenasennus](images/reinstall_manager.png){.thumbnail}

Uusi ikkuna avautuu, jossa voit valita:

- distribuutiosi ehdotettujen distribuutioiden listasta
- kielen
- SSH-avaimen, jos olet jo luonut avaimia hallintapaneelissasi.


![Uudelleenasennuksen valikko](images/reinstall_menu.png){.thumbnail}

> [!primary]
>
> Jotkut distribuutiot kuten Plesk tai Windows vaativat etukäteen hankitun lisenssin, jonka voit lunastaa OVH:lta tai joltakin jälleenmyyjältä. Sitten se on integroitava käsin tai hallintapaneelisi kautta. Voit hallinnoida lisenssejäsi osion `Dedikoidut tuotteet`{.action} kohdassa `Lisenssit`{.action}.
Täällä voit lisäksi tilata lisenssejä (oikealla oleva painike `Tilaa`{.action} tai lisätä oman SPLA Windows - tai SPLA SQL Server -lisenssisi (oikealla oleva painike `Lisää SPLA-lisenssi`{.action}).
> 

Hallintapaneelissa edistymispalkki kuvaa uudelleenasennuksen etenemistä. Se voi kestää jopa 30 minuuttia.

### VPS-palvelimesi tietoturva

Kuten tämän ohjeen “Tavoitteet”-osiossa selitettiin, olet virtuaalipalvelimesi administraattori. Olet siis vastuussa sen sisältämistä tiedoista sekä sen suojaamisesta.

Katso apua ohjeesta [VPS:n tietoturva](https://docs.ovh.com/fi/vps/tietoturvaohjeita-vps/){.external}, jos haluat selityksiä joistakin perusasioista.


### Verkkotunnuksen suojaus SSL-varmenteella

Kun VPS on asennettu ja suojattu, saatat haluta suojata myös verkkotunnuksesi sekä sivusi. Tätä varten on tärkeää asentaa SSL-varmenne, jonka avulla sivusi saadaan *https*-formaattiin pelkän *http*-formaatin lisäksi.

SSL-varmenne voidaan asentaa itse käsin suoraan VPS:ssä. Katso tätä varten käyttämäsi distribuution dokumentaatiota.

Automaattisempaan tapaan OVH tarjoaa [SSL Gateway -palvelun](https://www.ovh-hosting.fi/ssl-gateway/). Katso tuotteen [kaupalliset verkkosivut](https://www.ovh-hosting.fi/ssl-gateway/){.external} tai [dokumentaatio](https://docs.ovh.com/fi/ssl-gateway/){.external}.

## Lisää aiheesta

[Johdanto SSH-protokollaan](https://docs.ovh.com/fi/dedicated/ssh-johdanto/){.external}

Viesti käyttäjäyhteisömme kanssa osoitteessa <https://ovh-hosting.fi/community/foorumi>.