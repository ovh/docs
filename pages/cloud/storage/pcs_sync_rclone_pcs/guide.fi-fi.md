---
deprecated: true
title: Object Storagen käyttö rClone-ohjelmistolla
slug: sync-rclone-object-storage 
section: Object Storage
---

**Päivitetty 27.12.2017**

## Tavoite


OVH:n Object Storage on mahdollista synkronoida rClone-ohjelmiston kautta.

**Tämän ohjeen tarkoituksena on kerrata tarvittavat vaiheet synkronoinnin suorittamiseen hallintapaneelissa.**

rClone on ulkopuolinen synkronointiohjelmisto, tarkemmat tiedot sen käytöstä voit löytää suoraan sen [virallisesta dokumentaatiosta](https://Rclone.org/).

## Edellytykset

- Olet luonut *Object Storage* -säilön (hallintapaneelissa tai [Horizon-käyttöliittymässä](https://docs.ovh.com/fi/storage/object_storage_-sailon_luominen/){.external}.
- Olet luonut [OpenStack-käyttäjän](https://docs.ovh.com/fi/public-cloud/){.external}.

## Käytännössä

Kun säilösi ja OpenStack-käyttäjä on luotu, on jäljellä kaksi tehtävää asiaa:

- Konfigurointitiedoston hakeminen rClone-ohjelmistoa varten:

Kun [OpenStack-käyttäjä](https://docs.ovh.com/fi/public-cloud/){.external} on luotu, voit hakea rClone-ohjelmiston tarvitseman konfigurointitiedoston hallintapaneelistasi.

Klikkaa tätä varten hallintapaneelin OpenStack-käyttäjien sivun oikeassa laidassa olevaa jakoavaimen kuvaa ja sitten `Lataa rClone konfigurointitiedosto`{.external}.

![Lataa rClone-konfigurointitiedosto](images/download_file.png){.thumbnail}.


- Konfiguroi rClone:

Kun tiedosto on ladattu, voit tehdä seuraavan komennon uuden tallennustilasi lisäämiseksi:

```sh
Rclone config
```

Sinua pyydetään antamaan tiedostossasi olevat konfigurointitiedot.

> [!primary]
>
> Voit myös leikata ja liittää tiedostosi sisällön rClonen konfiguroinneille varattuun tilaan (*.config/Rclone/Rclone.conf*).
> 

Kun konfigurointi on suoritettu, voit testata sen listaamalla esimerkiksi säilösi:

```sh
Rclone lsd BackupStorage
```

*BackupStorage* on sama kuin tallennustilallesi annettu nimi.

Löydät rClone-ohjelmiston virallisilta sivuilta tarkemmat tiedot tarvittavista toimista Object Storagen ja rClonen synkronoimiseksi. [Virallinen rClone-dokumentaatio](https://Rclone.org/swift/){.external}.


## Lue lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://ovh-hosting.fi/community/foorumi>.