---
deprecated: true
title: Gebruik van Object Storage met Rclone 
slug: sync-rclone-object-storage
section: Object Storage Standard (Swift)
---

**Laatste update 17-01-2018**

## Introductie

OVH's Object Storage kan via Rclone gesynchroniseerd worden.

**Deze handleiding legt uit hoe u OVH's Object Storage via Rclone kunt synchroniseren op uw OVH Control Panel.**

Omdat Rclone een extern synchronisatieprogramma is, zijn de details voor het gebruik ervan rechtstreeks te vinden op de [officiële documentatie](https://Rclone.org/).

## Vereisten

- U moet een eigen *Object Storage* container creëren (vanaf het Control Panel of vanaf [Horizon](https://docs.ovh.com/fr/public-cloud/creer-un-conteneur-dobjets/){.external}.
- U moet een [OpenStack gebruikersnaam](https://docs.ovh.com/fr/public-cloud/creation-et-suppression-dun-utilisateur-openstack/){.external} creëren.

## Instructie

Wanneer u uw container en uw OpenStack gebruikersnaam gecreëerd hebt, moet u nog twee dingen doen:

- Het configuratiebestand voor Rclone ophalen:

Wanneer u uw [OpenStack gebruikersnaam](https://docs.ovh.com/fr/public-cloud/creation-et-suppression-dun-utilisateur-openstack/){.external} hebt gecreëerd, kunt u in het Control Panel kiezen om het benodigde configuratiebestand voor Rclone op te halen.

Hiervoor klikt u, wanneer u op de gebruikerspagina OpenStack in uw Control Panel bent, op de moersleutel rechts van de gebruikersnaam, daarna op `Een Rclone-configuratiebestand downloaden`{.external}.

![Een Rclone-configuratiebestand downloaden](images/download_file.png){.thumbnail}


- Rclone configureren:

Wanneer het bestand is gedownload dan kunt u de volgende opdracht lanceren om uw nieuwe opslagruimte toe te voegen:

```sh
Rclone config
```

Er zal nu gevraagd worden om uw configuratiegegevens in uw bestand toe te voegen.

> [!primary]
>
> U kunt ook de inhoud van uw bestand kopiëren/plakken in de ruimte die bestemd is voor de Rclone-configuraties (*.config/Rclone/Rclone.conf*).
> 

Wanneer de configuratie voltooid is kunt u het testen door bijvoorbeeld uw containers te rangschikken.

```sh
Rclone lsd BackupStorage
```

*BackupStorage* komt overeen met de naam.

Op de officiële site van Rclone kunt u nauwkeurige documentatie vinden voor de acties die u moet uitvoeren om uw Object Storage en Rclone te synchroniseren: [Officiële Rclone documentatie](https://Rclone.org/swift/){.external}.


## Verder 

Ga in gesprek met onze communitygebruikers via: <https://community.ovh.com>.
