---
title: 'Public Cloud -instanssin hostnamen muokkaaminen'
slug: instanssin-hostnamen-muokkaaminen
excerpt: 'Katso, kuinka Public Cloud -instanssin hostnamea muokataan'
legacy_guide_number: 1928
section: Oppaat
---

**Päivitetty 31.8.2018**

## Tavoite

Cloud-init-moduulilla voidaan konfiguroida [Public Cloud -instanssi](https://www.ovh-hosting.fi/public-cloud/instances/){.external} sen luomisen yhteydessä, mutta myös jokaisen uudelleenkäynnistämisen aikana. Jos kuitenkin haluat konfiguroida hostnamesi uudelleen instanssin luonnin yhteydessä tapahtuneen virheen vuoksi tai konfiguroida postipalvelimesi uudelleen, täytyy Cloud-init-moduuli poistaa käytöstä. Moduuli vastaa hostnamen konfiguroinnista, jotta sitä ei palauteta.

**Tässä ohjeessa kerrotaan, kuinka voit uudelleenkonfiguroida cloud-init-moduulin, jotta voit muokata instanssisi hostnamea.**

> [!warning]
>
> OVH tarjoaa käyttöösi palveluja, jotka ovat sinun vastuullasi. Koska meillä ei ole minkäänlaisia käyttöoikeuksia koneisiin, emme ole niiden administraattoreja emmekä voi avustaa niiden käytössä. Siksi sinun tehtävänäsi on varmistaa ohjelmistojen hallinta sekä suojaus päivittäin.
>
> Tämän ohjeen tarkoituksena on auttaa sinua yleisimmissä tehtävissä. Suosittelemme kuitenkin ottamaan yhteyttä erikoistuneeseen palveluntarjoajaan, mikäli sinulla on vaikeuksia tai epäselvyyksiä palvelimen hallintaan, käyttöön tai suojaamiseen liittyen. Lisätietoa tämän ohjeen kohdasta “Lisää aiheesta”.
>


## Edellytykset

- Olet luonut [Public Cloud -instanssin](https://www.ovh-hosting.fi/public-cloud/instances/){.external}.
- [Olet kirjautunut SSH-yhteydellä](https://docs.ovh.com/fi/public-cloud/ensimmainen-kirjautuminen/){.external} (pääkäyttäjä) instanssiin.


## Käytännössä

### Cloud-init-moduulin poistaminen käytöstä

Poistaaksesi cloud-init-moduulin käytöstä on ensimmäiseksi muokattava konfigurointitiedostoa:

```sh
sudo vim /etc/cloud/cloud.cfg
```

Sitten täytyy lisätä tai muokata seuraavia kahta riviä:

```sh
preserve_hostname: true
manage_etc_hosts: false
```

### Muokkaa hostnamea

Ensimmäisessä vaiheessa muokataan hostnamea:

```sh
sudo vim /etc/hostname
webserver
```

Tämän jälkeen on enää muokattava tiedostoa `/etc/hosts`:

```sh
sudo vim /etc/hosts

127.0.1.1 webserver.localdomain webserver
127.0.0.1 localhost
```

Tämän jälkeen instanssi on käynnistettävä uudelleen:

```bash
sudo reboot
```

Uudelleenkäynnistyksen jälkeen hostnamen muokkaus on rekisteröity oikein:

```sh
sudo cat /etc/hosts

127.0.1.1 webserver.localdomain webserver
127.0.0.1 localhost
```

## Lue lisää aiheesta 

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.