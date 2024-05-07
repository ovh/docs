---
title: Object Storage - Endpoints et géo-disponibilité de l’Object Storage
updated: 2024-05-13
---

<style>
td:nth-of-type(2) {
  white-space:nowrap;
}
</style>

Nous avons conçu les classes de stockage S3 pour qu’elles soient **compatibles avec l’API S3**, considérée comme une référence sur le marché du stockage objet. Vous pouvez donc utiliser l'Object Storage avec la plupart des outils de gestion de données via les points de terminaison définis par région et non par classe de stockage.

## Object Storage S3

OVHcloud Object Storage S3 est accessible via un point de terminaison unique : `https://s3.<region>.io.cloud.ovh.net`. Ce point de terminaison unique peut traiter à la fois les classes de stockage Standard et High Performance. Toutes les opérations de l'API S3 sont prises en charge avec ce point de terminaison unique.

### Liste des régions disponibles

| Nom de la région | Région<br><b><i>À saisir en minuscules</i></b> | Protocole | Version de la signature |
| ----- | ----- | ----- | ----- |
| Gravelines | gra | HTTPS | 4 |
| Francfort | de | HTTPS | 4 |
| Beauharnois | bhs | HTTPS | 4 |
| Roubaix | rbx | HTTPS | 4 |
| Varsovie | gueuler | HTTPS | 4 |
| Londres | uk | HTTPS | 4 |

Le point de terminaison de bucket est une URL, par exemple `https://my-bucket.s3.gra.io.cloud.ovh.net` qui représente un point de terminaison de style hôte virtuel.

### Rétrocompatibilité des points de terminaison

L'ancien point de terminaison `https://s3.<region>.perf.cloud.ovh.net` sera toujours maintenu à des fins de rétrocompatibilité et toutes les opérations de l'API S3 seront toujours prises en charge. Cependant, veuillez noter que ce point de terminaison appliquera automatiquement la classe de stockage High Performance des opérations d'upload d'objets.

## Object Storage Swift

| Solution de stockage | URL du point de terminaison | Région disponible<br><b><i>À saisir en minuscules</i></b> |
| ----- | ----- | ----- |
| Object Storage SWIFT - Standard - Legacy |`https://s3.<region>.cloud.ovh.net` | Strasbourg : sbg<br>Londres : uk<br>Francfort : de<br>Varsovie : waw<br>Beauharnois : bhs<br>Gravelines : gra |

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
