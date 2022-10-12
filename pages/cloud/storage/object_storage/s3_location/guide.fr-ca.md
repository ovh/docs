---
title: Object Storage - Endpoints et geodisponibilité de l’Object Storage
slug: s3/location
section: Informations générales
order: 025
---

<style>
td:nth-of-type(2) {
  white-space:nowrap;
}
</style>

**Dernière mise à jour le 27/09/2022**

Nous avons conçu les classes de stockages S3 pour qu’elles soient **compatibles avec l’API S3**, considérée comme une référence dans le marché du stockage d’objets. Vous pouvez donc utiliser Object Storage avec la plupart des outils de gestion de données via les endpoints définis par région et pas classe de stockage.

## Liste des endpoints par région et par classe de stockage 

| Storage class | endpoint URL | Region available<br><b><i>To be entered in lower case</i></b> |
| ------ | ------ | ------ |
| Object Storage S3 - Standard | `https://s3.<region>.io.cloud.ovh.net` | Gravelines: gra |
| Object Storage S3 - High Performance |`https://s3.<region>.perf.cloud.ovh.net` | Gravelines: gra<br>Strasbourg: sbg<br>Beauharnois: bhs |
| Object Storage SWIFT - Standard - Legacy |`https://s3.<region>.cloud.ovh.net` | Strasbourg: sbg<br>London: uk<br>Frankfurt: de<br>Warsaw: waw<br>Beauharnois: bhs<br>Gravelines: gra |

Le point de terminaison des bucket est une URL, par exemple `https://my-bucket.s3.gra.perf.cloud.ovh.net` qui représente un point de terminaison de style « hôte virtuel ».

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
