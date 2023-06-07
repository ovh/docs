---
title: Object Storage - Endpoints et géo-disponibilité de l’Object Storage
slug: s3/location
section: Informations générales
order: 025
updated: 2023-04-28
---

<style>
td:nth-of-type(2) {
  white-space:nowrap;
}
</style>

**Dernière mise à jour le 28/04/2023**

Nous avons conçu les classes de stockages S3 pour qu’elles soient **compatibles avec l’API S3**, considérée comme une référence dans le marché du stockage d’objets. Vous pouvez donc utiliser Object Storage avec la plupart des outils de gestion de données via les endpoints définis par région et pas classe de stockage.

## Liste des endpoints par région et par classe de stockage 

| Storage class | endpoint URL | Region available<br><b><i>To be entered in lower case</i></b> |
| ------ | ------ | ------ |
| Object Storage S3 - Standard | `https://s3.<region>.io.cloud.ovh.net` | Gravelines: gra<br>Strasbourg: sbg<br> Frankfurt: de <br>Beauharnois: bhs <br>Roubaix: rbx <br>Warsaw: waw <br>London: uk |
| Object Storage S3 - High Performance |`https://s3.<region>.perf.cloud.ovh.net` | Gravelines: gra<br>Strasbourg: sbg<br>Beauharnois: bhs |
| Object Storage SWIFT - Standard - Legacy |`https://s3.<region>.cloud.ovh.net` | Strasbourg: sbg<br>London: uk<br>Frankfurt: de<br>Warsaw: waw<br>Beauharnois: bhs<br>Gravelines: gra |

Le point de terminaison des bucket est une URL, par exemple `https://my-bucket.s3.gra.perf.cloud.ovh.net` qui représente un point de terminaison de style « hôte virtuel ».

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr-ca/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com>.
