---
deprecated: true
title: Pääkäyttäjän salasanan vaihtaminen VPS-palvelimella
slug: root-password
excerpt: Lue tästä, kuinka yksityisen virtuaalipalvelimen salasana vaihdetaan.
section: Vianhaku ja Rescue-tila
---

**Päivitetty 27.06.2018**

## Tavoite

Distribuution asennuksen tai uudelleenasennuksen yhteydessä saat pääkäyttäjän salasanan. On erittäin suositeltavaa muokata sitä [tietoturvaoppaamme](https://docs.ovh.com/fi/vps/tietoturvaohjeita-vps/) ohjeiden mukaisesti. Lisäksi on mahdollista, ettet löydä enää tätä salasanaa ja joudut muokkaamaan sitä. Tässä ohjeessa esitellään kaksi esimerkkitapausta.
Lue tästä, kuinka yksityisen virtuaalipalvelimen pääkäyttäjän salasana vaihdetaan.

## Edellytykset

- SSH-yhteys VPS-palvelimeen (pääkäyttöoikeus)
- [Uudelleenkäynnistä VPS Rescue-tilassa](https://docs.ovh.com/fi/vps/rescue/).

<iframe width="560" height="315" src="https://www.youtube.com/embed/ua1qoTMq35g?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Käytännössä

### Vaihda salasana pääkäyttäjän tunnuksella

Jos nykyinen salasana on edelleen hallussasi, menettely on helpompi. Kirjaudu palvelimellesi ja näppäile seuraava komento:

```sh
passwd
```

Ilmoita nyt uusi salasana ja vahvista se. Saat seuraavaksi seuraavanlaisen vahvistuksen:

```sh
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

> [!primary]
>
> Linuxilla salasana **ei tule näkyviin**, kun kirjoitat sen.
> 

### Kadonneen salasanan vaihtaminen

#### 1. vaihe: Asennuspisteen tunnistaminen

VPS 2016 -virtuaalipalvelimilla alustus tapahtuu automaattisesti, joten on siis tarpeen tunnistaa, mihin paikkaan levyosiosi asennetaan. Sitä varten on olemassa kaksi komentoa:

##### df -h

```sh
root@rescue-pro:~# df -h
Size  Used Avail Use% Mounted on
/dev/vda1       4.7G  1.3G  3.2G  29% /
udev 10M 0 10M 0% /dev
tmpfs 774M 8.4M 766M 2% /run
tmpfs 1.9G 0 1.9G 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 1.9G 0 1.9G 0% /sys/fs/cgroup
/dev/vdb1 20G 934M 18G 5% /mnt/vdb1
```

##### lsblk

```sh
root@rescue-pro:~# lsblk
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
vda 254:0 0 4.9G 0 disk
└─vda1 254:1 0 4.9G  0 part /
vdb 254:16 0 20G 0 disk
└─vdb1 254:17 0 20G 0 part /mnt/vdb1
```

Voimme nähdä, että osiojärjestelmä on alustettu sijaintiin **/mnt/vdb1.


#### 2. vaihe: CHROOT-oikeudet

Seuraavaksi juurihakemistoa on muokattava, jotta muutokset suoritetaan järjestelmässäsi. Tämä muokkaus voidaan toteuttaa komennolla `chroot. Tee näin:

```sh
root@rescue-pro:~# chroot /mnt/vdb1/
root@rescue-pro:/#
```

Voit tarkistaa näppäilemällä komennon `ls -l`, joka listaa järjestelmäsi juuressa olevan sisällön:

```sh
root@rescue-pro:/# ls -I
```

#### 3. vaihe: Muokkaa pääkäyttäjän salasanaa

Jäljellä on enää pääkäyttäjän salasanan vaihtaminen komennolla `passwd`:

```sh
passwd
```
```sh
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

Käynnistä VPS lopuksi uudelleen sen omalla levyllä hallintapaneelisi kautta.

## Lisää aiheesta

[Johdanto SSH-protokollaan](https://docs.ovh.com/fi/dedicated/ssh-johdanto/)
[Rescue-tilan aktivointi yksityisellä virtuaalipalvelimella](https://docs.ovh.com/fi/vps/rescue/)

Viesti käyttäjäyhteisömme kanssa osoitteessa [https://ovh-hosting.fi/community/foorumi](https://ovh-hosting.fi/community/foorumi).