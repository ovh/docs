---
title: Kernelin päivitys dedikoidulla palvelimella
excerpt: Lue, kuinka käyttöjärjestelmän ydin eli kernel päivitetään
slug: kernelin-paivitys-dedikoitu-palvelin
section: Edistynyt käyttö
---

**Päivitetty 22.1.2018**

## Tavoite

OVH tarjoaa mahdollisuuden pitää Linux-käyttöjärjestelmäsi kernel helposti ajan tasalla *netboot*-käynnistysjärjestelmällä. Voi kuitenkin olla hyödyllistä, että käyttöjärjestelmääsi (OS) liittyvä kernel on ajan tasalla myös levylläsi.

**Tässä ohjeessa kerrotaan, kuinka kernel päivitetään.**

> [!warning]
>
> OVH tarjoaa käyttöösi koneita, jotka ovat sinun vastuullasi. Koska meillä ei ole minkäänlaisia käyttöoikeuksia koneisiin, emme ole niiden administraattoreja. Siksi sinun tehtävänäsi on varmistaa ohjelmistojen hallinta sekä suojaus päivittäin.
> Tämän ohjeen tarkoituksena on auttaa sinua yleisimmissä tehtävissä. Suosittelemme kuitenkin ottamaan yhteyttä erikoistuneeseen palveluntarjoajaan, mikäli sinulla on vaikeuksia tai epäselvyyksiä palvelimen hallintaan, käyttöön tai suojaamiseen liittyen.
>

## Edellytykset

- Sinulla on pääkäyttöoikeus palvelimelle (SSH).
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

Kernelin versio on tässä tapauksessa *4.09.76-xxxx-std-ipv6-64*\*.

### Kernelin päivitys

#### 1. vaihe: Oikeaan hakemistoon meneminen

Kernelin image on laitettava seuraavaan hakemistoon:

```sh
cd /boot
```

#### 2. vaihe: Imagen hakeminen

Ilman kernelin uudelleenkokoamista riittää halutun, mieluiten viimeisimmän, bzImage-version lataaminen. Löydät imaget seuraavasta osoitteesta: <https://last-public-ovh-kernel.snap.mirrors.ovh.net/builds/>. 

Kernelit ovat monoliittisia eli ne eivät huomio Kernel-, CEPH-, NBD- tai ZFS-moduuleja jne.

Palataan esimerkkitapaukseemme. Olimme kernelin versiossa: **4.9.118-xxxx-std-ipv6-64**.

On siis ladattava seuraava image alla olevalla komennolla:

```sh
wget https://last-public-ovh-kernel.snap.mirrors.ovh.net/builds/4.9.118/313405/bzImage/4.9.118-xxxx-std-ipv6-64/bzImage-4.9.118-xxxx-std-ipv6-64
```

#### 3\. vaihe: Esilatausohjelman (GRUB) päivitys

Päivitä lopuksi esilatausohjelma (GRUB) seuraavalla komennolla:

```sh
update-grub
```

Saat komennosta seuraavan vastauksen:

```sh
Generating grub configuration file ...
done
```

> [!primary]
>
> Tarkista, että seuraava tiedosto (tarvitaan päivitystä varten) on konfiguraatiossasi: `06_OVHkernel`. Voit tarkistaa sen olemassaolon seuraavalla komennolla:
>
> `ls /etc/grub.d/`
>

#### 4. vaihe: Palvelimen uudelleenkäynnistäminen

Jotta muokkaukset rekisteröidään, on palvelin vielä käynnistettävä uudelleen:

```sh
reboot
```

### Palaa taaksepäin

Mikäli teet vahingossa jotain väärin tai tapahtuu virhe, voit aina palata taaksepäin. Sitä varten on tarpeen siirtää palvelin [rescue-tilaan](https://docs.ovh.com/fi/dedicated/){.external}. Seuraavaksi järjestelmäsi on alustettava alla olevilla komennoilla:

```sh
mount /dev/md1 /mnt
```

> [!primary]
>
> Tässä esimerkissä juuri (tai slahs `/`) on nimeltään *md1*. Nimi voi kuitenkin olla eri. Voit varmistaa juuren nimen syöttämällä seuraavan komennon:
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
rm bzImage-4.14.13-xxxx-std-ipv6-64
```

Esilatausohjelma on päivitettävä uudelleen:

```sh
update-grub
```

Lopuksi on poistuttava Rescue-tilasta (levyn uudelleenkäynnistys) ja suoritettava ohjelmiston uudelleenkäynnistys komennolla:

```sh
reboot
```

### Tarkista, että päivitystä on sovellettu oikein.

Kun päivitys on suoritettu, on mahdollistaa tarkistaa juuri asennetun kernelin versio komennolla:

```sh
uname –r
```

> [!primary]
>
> Meltdown- ja Spectre-haavoittuvuuksiin liittyen voit tutustua distribuutiosi kehittäjän sivuihin ja tarkistaa, että kernelin uusi versio sisältää korjauspaketin näitä haavoittuvuuksia vastaan.
>
> Tarpeen vaatiessa on olemassa useita työkaluja (esimerkiksi <https://github.com/speed47/spectre-meltdown-checker>), joilla voit selvittää, onko käyttämäsi kernel haavoittuva vai ei.
>
> **OVH ei voi taata ulkopuolisten työkalujen luotettavuutta, käytät niitä omalla vastuullasi**.
>

## Lue lisää aiheesta

[Rescue-tila.](https://docs.ovh.com/fidedicated/){external}

[Tietoa Meltdown- ja Spectre-haavoittuvuuksista -EN-.](https://docs.ovh.com/fr/dedicated/information-about-meltdown-spectre-vulnerability-fixes/){.external}

[Käyttöjärjestelmäkohtaiset päivitykset Meltdown- ja Spectre-haavoittuvuuksien johdosta -EN-.](https://docs.ovh.com/fr/dedicated/meltdown-spectre-kernel-update-per-operating-system/){.external}

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://ovh-hosting.fi/community/foorumi>.