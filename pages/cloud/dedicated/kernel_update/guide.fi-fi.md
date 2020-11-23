---
deprecated: true
title: 'Kernelin päivitys dedikoidulla palvelimella'
slug: kernelin-paivitys-dedikoitu-palvelin
excerpt: 'Katso, kuinka distribuution kernel päivitetään OVH:n ydintä käyttämällä'
section: 'Edistynyt käyttö'
---

**Päivitetty 12.9.2018**

## Tavoite

OVH tarjoaa mahdollisuuden pitää Linux-käyttöjärjestelmäsi kernel helposti ajan tasalla *netboot*-käynnistysjärjestelmällä. On kuitenkin suositeltavaa päivittää se kovalevyllä, johon käyttöjärjestelmäsi (OS) on liitetty.

**Tässä ohjeessa kerrotaan, kuinka distribuution kernel päivitetään OVH:n ydintä käyttäen.**

Oletuksena kaikki OVH:n dedikoiduille palvelimille tarjotut järjestelmäimaget käyttävät optimoitua OVH:n ydintä.  Nämä imaget omilla distribuutioillaan korvanneille käyttäjille suositellaan tutustumista näiden jälkimmäisten virallisiin dokumentaatioihin.


> 
>
> OVH tarjoaa käyttöösi koneita, jotka ovat sinun vastuullasi. Koska meillä ei ole minkäänlaisia käyttöoikeuksia koneisiin, emme ole niiden administraattoreja. Siksi sinun tehtävänäsi on varmistaa ohjelmistojen hallinta sekä suojaus päivittäin.
> 
> Tämän ohjeen tarkoituksena on auttaa sinua tässä päivityksessä. Suosittelemme kuitenkin ottamaan yhteyttä erikoistuneeseen palveluntarjoajaan, mikäli sinulla on vaikeuksia tai epäselvyyksiä palvelimen hallintaan, käyttöön tai suojaamiseen liittyen.
>


## Edellytykset

- Sinulla on [dedikoitu palvelin.](https://www.ovh-hosting.fi/dedikoidut_palvelimet/){.external}
- Sinulla on SSH-yhteys pääkäyttäjän tunnuksella \[Linux].
- Olet tehnyt tiedoista aiemmin varmuuskopion (tutustu distribuutiosi viralliseen dokumentaatioon).


## Käytännössä

### Kernelin tunnistaminen

Syötä kernelin tunnistamiseksi seuraava komento:

```sh
uname -r
```

Esimerkiksi:

```sh
uname -r

4.09.76-xxxx-std-ipv6-64
```

Kernelin versio on tässä tapauksessa **4.09.76-xxxx-std-ipv6-64**.

### Kernelin päivitys OVH:n paketteja käyttäen

Distribuutioissa, joiden perustana on Debian ja RedHat, kernel päivitetään pakettienhallintaa käyttämällä.


#### 1.vaihe: Kernelin päivitys

Debianiin perustuvissa distribuutioissa kernelin päivitys tapahtuu seuraavalla komennolla:

```sh
apt-get update && apt-get dist-upgrade
```

RedHat-järjestelmään perustuvissa distribuutioissa kernelin päivitys tapahtuu seuraavalla komennolla:

```sh
yum update
```

#### 2\. vaihe: Palvelimen uudelleenkäynnistäminen

Palvelin on käynnistettävä uudelleen, jotta muokkaukset astuvat voimaan:

```sh
reboot
```


### Kernelin päivitys ilman OVH:n pakettien käyttämistä

#### 1\. vaihe: Oikeaan hakemistoon meneminen

Kernelin image on laitettava seuraavaan hakemistoon:

```sh
cd /boot
```

#### 2\. vaihe: Imagen hakeminen

Ilman kernelin uudelleenkokoamista riittää halutun bzImage-version (mieluiten viimeisimmän) lataaminen. Löydät imaget seuraavasta osoitteesta: <https://last-public-ovh-kernel.snap.mirrors.ovh.net/builds/>. 

Kernelit ovat monoliittisia eli ne eivät huomioi kernel-moduuleja: CEPH, NBD, ZFS...

Palataan esimerkkiimme, jonka kernelin versio oli: **4.09.76-xxxx-std-ipv6-64**.

Siinä on siis ladattava seuraava image alla olevalla komennolla:

```sh
wget https://last-public-ovh-kernel.snap.mirrors.ovh.net/builds/4.9.118/313405/bzImage/4.9.118-xxxx-std-ipv6-64/bzImage-4.9.118-xxxx-std-ipv6-64
```

#### 3\. vaihe: Esilatausohjelman (GRUB) päivitys

Päivitä esilatausohjelma (GRUB) seuraavalla komennolla:

```sh
update-grub
```

Saat komennosta seuraavan vastauksen:

```sh
Generating grub configuration file ...
done
```

> 
>
> Tarkista, että seuraava tiedosto (tarvitaan päivitystä varten) on konfiguraatiossasi: `06_OVHkernel`. Voit tehdä tarkistuksen seuraavalla komennolla:
>
> `ls /etc/grub.d/`
>

#### 4\. vaihe: Palvelimen uudelleenkäynnistäminen

Jotta muokkaukset rekisteröidään, on palvelin vielä käynnistettävä uudelleen:

```sh
reboot
```

### Palaa taaksepäin

Mikäli teet vahingossa jotain väärin tai tapahtuu virhe, voit aina palata taaksepäin. Sitä varten on tarpeen siirtää palvelin [rescue-tilaan](https://docs.ovh.com/fi/dedicated/){.external}. Seuraavaksi järjestelmäsi on alustettava alla olevilla komennoilla:

```sh
mount /dev/md1 /mnt
```

> 
>
> Tässä esimerkissä juuri (tai slahs `/`) on nimeltään *md1*. Nimi voi kuitenkin olla eri. Voit tarkistaa juuren nimen syöttämällä seuraavan komennon:
>
> `fdisk` tai `lsblk`
>

```sh
mount -o rbind /dev /mnt/dev
```

```sh
mount -t proc proc /mnt/proc
```

```sh
mount -t sysfs sys /mnt/sys
```

```sh
chroot /mnt
```

Mene seuraavaksi `/boot`-hakemistoon ja poista viimeiset asennetut tiedostot (komento `rm`). Esimerkissämme on tarpeen tehdä näin:

```sh
rm bzImage-4.9.118-xxxx-std-ipv6-64
```

Tämän jälkeen esilatausohjelma on päivitettävä uudelleen:

```sh
update-grub
```

Lopuksi on poistuttava Rescue-tilasta (levyn uudelleenkäynnistys) ja suoritettava ohjelmiston uudelleenkäynnistys komennolla:

```sh
reboot
```

### Tarkista, että päivitystä on sovellettu oikein.

Kun päivitys on suoritettu, on mahdollista tarkistaa juuri asennetun kernelin versio komennolla:

```sh
uname –r
```

> 
>
> Meltdown- ja Spectre-haavoittuvuuksiin liittyen voit tutustua distribuutiosi kehittäjän sivuihin ja tarkistaa, että kernelin uusi versio sisältää korjauspaketin näitä haavoittuvuuksia vastaan.
>
> Tarpeen vaatiessa on olemassa useita työkaluja (esimerkiksi <https://github.com/speed47/spectre-meltdown-checker>), joilla voit selvittää, onko käyttämäsi kernel haavoittuva vai ei.
>
> **OVH ei voi taata ulkopuolisten työkalujen luotettavuutta, käytät niitä omalla vastuullasi**.
>

## Lue lisää aiheesta

[Rescue-tila.](https://docs.ovh.com/fi/dedicated/ovh-rescue/){.external}

[Tietoa Meltdown- ja Spectre-haavoittuvuuksista -EN-.](https://docs.ovh.com/fr/dedicated/information-about-meltdown-spectre-vulnerability-fixes/){.external}

[Käyttöjärjestelmäkohtaiset päivitykset Meltdown- ja Spectre-haavoittuvuuksien johdosta -EN-.](https://docs.ovh.com/fr/dedicated/meltdown-spectre-kernel-update-per-operating-system/){.external}

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.