---
deprecated: true
title: Real Time Monitoring -järjestelmän (RTM) asennus
slug: rtm-asennus
excerpt: Katso, kuinka Real Time Monitoring asennetaan Linuxilla tai Windowsilla
section: Vianhaku ja Rescue-tila
---

**Päivitetty 15.01.2018**

## Tavoite

Real Time Monitoring (RTM) -järjestelmällä voidaan osittain monitoroida palvelintasi ja sen toimintaa. Hallintapaneelista löytyvät suorittimen käyttö (CPU), keskusmuistin käyttö (RAM) ja avoimet portit. RTM-paketti on asennettava, jotta nämä tiedot voidaan saada käyttöön.

**Tässä ohjeessa kerrotaan, kuinka RTM asennetaan Windowsilla tai Linuxilla.**

## Edellytykset

- Olet kirjautunut SSH-yhteydellä (tai graafisen käyttöliittymän kautta) Linux-palvelimeesi (*pääkäyttäjänä*).
- Olet kirjautunut Windows -palvelimesi etätyöpöydälle (*administraattorina*).
- Olet kirjautunut [hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Käytännössä

Voit valvoa palvelintasi, kun RTM on asennettu hallintapaneeliisi osiossa `Dedikoidut`{.action}. Palvelimesi pääsivulla saat monitorointitiedot `Real Time Monitoring -järjestelmässä`:

![Real Time Monitoring](images/rtm.png){.thumbnail}

> [!primary]
>
> Palomuurisäännöt saattavat estää infrastruktuurisi valvonnan RTM-järjestelmän lisäyksestä huolimatta. Muista avata yhteys palvelimeesi monitorointi IP -osoitteille. Löydät tarkemmat tiedot \[tästä\](https://docs.ovh.com/fi/).
> 

### RTM:n asentaminen Linuxilla

Kun olet kirjautunut palvelimellesi SSH-yhteydellä, aja seuraava komento:

```sh
wget ftp://ftp.ovh.net/made-in-ovh/rtm/install_rtm.sh -O install_rtm.sh ; /bin/bash install_rtm.sh
```

### RTM:n asentaminen Windowsilla

Kun olet kirjautunut etätyöpöydällesi, tee seuraavasti:

- Asenna ActivePerl, jos RTM-järjestelmää ei ole koskaan asennettu. Se voidaan ladata tästä linkistä: <http://www.activestate.com/activeperl/>.
- Lataa ja asenna viimeisin RTM-versio tästä: <ftp://ftp.ovh.net/made-in-ovh/rtm/windows/>.
- Klikkaa hiiren oikeaa näppäintä ja klikkaa sitten `Suorita administraattorina`{.action}.


## Lisää aiheesta

[OVH:n monitorointi IP -osoitteet](https://docs.ovh.com/fi/dedicated/){.external}

Viesti käyttäjäyhteisömme kanssa osoitteessa <https://ovh-hosting.fi/community/foorumi>.