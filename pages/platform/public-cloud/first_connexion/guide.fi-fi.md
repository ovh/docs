---
title: Kirjautuminen Public Cloud -instanssiin
slug: ensimmainen-kirjautuminen
legacy_guide_number: 1787
excerpt: Katso, kuinka Public Cloud -instansseihin kirjaudutaan
section: Aluksi
---

**Päivitetty 07.3.2018**

## Tavoite

Kirjautuminen Public Cloud -instanssiin tapahtuu samalla tavalla kuin “normaali” kirjautuminen dedikoidulle palvelimelle (VPS, dedikoitu palvelin jne.), mutta siinä on tietty käyttäjä.

**Tässä ohjeessa kerrotaan, kuinka Public Cloud -instansseille kirjaudutaan Linuxilla tai Windowsilla.**


## Edellytykset

- Olet kirjautunut [hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager){.external}.
- Olet luonut [Public Cloud -instanssin](https://www.ovh-hosting.fi/public-cloud/instances/){.external}.


## Käytännössä

### Kirjautuminen Linux-instanssille Linux/Mac-ympäristössä

Alla SSH-komento, jolla kirjaudutaan Public Cloud -instanssiin:

```sh
ssh*käyttäjä*@IP_instance
```

Public Cloud -käyttäjä on eri distribuutiosta riippuen. Alla taulukko (ei kattava) käyttäjistä distribuutioiden mukaan:

|Distribuutio|Käyttäjä|
|---|---|
|Archlinux|arch|
|CentOS 6|centos|
|Centos 7|centos|
|CoreOS|core|
|Debian 7|debian|
|Debian 8|debian|
|Debian 9|debian|
|Fedora 25|fedora|
|Fedora 26|fedora|
|FreeBSD 11.0 ZFS|freeBSD|
|Ubuntu 14.04|ubuntu|
|Ubuntu 16.04|ubuntu|
|Ubuntu 16.10|ubuntu|
|Ubuntu 17.04|ubuntu|

> [!primary]
>
> Suoraan kirjauduttaessa sinulla on näiden käyttäjien oikeudet. Jos haluat käyttää *super-käyttäjän* etuoikeuksia, on käytettävä komentoa `sudo`.
>


- Varoitus SSH-etäpalvelimen sormenjäljestä:

Kun kirjaudut ensimmäistä kertaa, täytyy isäntäpalvelimen aitous vahvistaa klikkaamalla `yes`.

```sh
The authenticity of host 217.xxx.xxx.98 (217.xxx.xx.98) cant be established.
ECDSA key fingerprint is f4:95:09:ce:b6:63:73:ea:54:db:76:5e:64:f1:5e:6d.
Are you sure you want to continue connecting (yes/no)?
```


### Kirjautuminen Linux-instanssille Windows-ympäristössä

Jotta voit kirjautua Linux-instanssille Windowsilla, tarvitset  [PuTTY](https://www.putty.org/){.external}-ohjelmiston. Viimeisimmissä Windows 10 -versioissa voit käyttää [natiiveja](https://docs.microsoft.com/fi-fi/windows/wsl/about){.external} ominaisuuksia. Tämän jälkeen täytyy vain seurata samoja ohjeita, jotka kuvailtiin Linuxille.


### Windows-instanssille kirjautuminen

#### Asennuksen viimeistely

Kun instanssisi on luotu, on viimeisteltävä *sysprep*. Sitä varten [hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager){.external} on käynnistettävä VNC-konsoli:

![VNC-konsoli](images/vnc_console.png)

Ensimmäisen vaiheen aikana voit valita maan, kielen ja näppäimistön kielen. Klikkaa sitten `Next`{.action}:

![sysprep-kielen valinta](images/sysprep_first_step.png)

Seuraavaksi on valittava salasana käyttäjälle *administrator*:

![sysprep-salasanan valinta](images/sysprep_first_step.png)

Nyt tarvitsee vain vahvistaa valintasi klikkaamalla `Finish`{.action}. Instanssi käynnistyy uudelleen ja voit kirjautua Windows-palvelimellesi.


#### Kirjautuminen Windowsiin

Yhdistäminen Windows-instanssiin tapahtuu suoraan `Etätyöpöytä`-ominaisuuden kautta Windows-asemaltasi:

![sysprep-salasanan valinta](images/remote_desktop.png)

Seuraavissa vaiheissa tarvitsee vain määritellä instanssisi IP-osoite (etätyöpöydän kautta kirjautumisen ensimmäinen vaihe) ja lisätä sitten käyttäjätunnuksesi (*administrator*) ja määrittelemäsi salasana.

![Etätyöpöytä - Kirjautuminen](images/remote_desktop_connection_IP.png)

![Etätyöpöytä-kirjautuminen-käyttäjä](images/remote_desktop_connection_user.png)

Ilmoitus pyytää vahvistamaan kirjautumisen, valitse `Kyllä`{.action} tai `Yes`{.action}:

![Kirjautumisen vahvistaminen](images/connection_validation.png)

Olet nyt kirjautunut instanssiisi.

> [!primary]
>
> Mikäli sinulla on ongelmia yhteyden luomisessa Windows-instanssiin, varmista, että Windows-palomuuri hyväksyy RDP-yhteyden. Jos tarvitset tarkempia tietoja, katso [ohjetta.](https://docs.ovh.com/fi/vps/windows-first-config/){.external}
>


## Lue lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://ovh-hosting.fi/community/foorumi>.