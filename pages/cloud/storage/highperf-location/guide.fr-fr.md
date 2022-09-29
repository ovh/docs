---
title: Location (endpoints)
slug: s3/location
section: Object Storage S3 High Performance
order: 025
---

<style>
td:nth-of-type(2) {
  white-space:nowrap;
}
</style>

**Dernière mise à jour le 27/09/2022**

Nous avons conçu les classes de stockages S3 pour qu’il soit **compatible avec l’API S3**, considérée comme une référence dans le marché du stockage d’objets. Vous pouvez donc utiliser Object Storage avec la plupart des outils de gestion de données via les endpoints définis par région et pas classe de stockage.

Munissez vous de vos clés d'accès S3 et accédez en ligne de commande aux différentes classes de stockage par commandes (s3cmd) ou CLI (AWS-CLI)

## Liste des endpoints par région et par classe de stockage 

| Classe de stockage recommandée | URL endpoint | Region disponible<br><b><i>A inscrire en minuscule</i></b>  |
| --- | --- | --- |
| Object Storage S3 - Standard | `https://s3.<region>.io.cloud.ovh.net` | Gravelines: gra |
| Object Storage S3 - High Performance | `https://s3.<region>.perf.cloud.ovh.net` | Gravelines: gra<br>Strasbourg : sbg |
| Object Storage S3 - Cold Archive | `https://s3.<region>.archive.cloud.ovh.net` | Roubaix: rbx-archive <br><i>Note : datacentre d'ingestion de données. Après archivage, le bucket est  archivé dans 4 datacentre en France.</i> |
| Object Storage SWIFT - Standard | `https://s3.<region>.cloud.ovh.net` | Strasbourg : sbg<br>London: uk<br>Francfort: de<br>Warsaw: waw<br><br><i>En cours : Gravelines</i> |

Le point de terminaison de bucket est une URL, par exemple https://my-bucket.s3.fr-par.scw.cloud. qui représente un point de terminaison de style hôte virtuel

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
