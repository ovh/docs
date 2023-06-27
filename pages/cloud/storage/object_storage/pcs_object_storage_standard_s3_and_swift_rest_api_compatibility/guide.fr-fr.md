---
title: Object Storage Swift - Compatibilité des API REST S3/Swift
updated: 2022-03-23
---

**Dernière mise à jour le 23/03/2022**

## Objectif

Ce guide énumère les fonctionnalités principales d'Amazon S3 supportées.

### Matrice de comparaison des API REST S3/Swift

| S3 REST API method | Swift S3 API |
| --- | :---: |
| GET Object | **Yes** |
| HEAD Object | **Yes** |
| PUT Object | **Yes** |
| PUT Object Copy | **Yes** |
| DELETE Object | **Yes** |
| Initiate Multipart Upload | **Yes** |
| Upload Part | **Yes** |
| Upload Part Copy | **Yes** |
| Complete Multipart Upload | **Yes** |
| Abort Multipart Upload | **Yes** |
| List Parts | **Yes** |
| GET Object ACL | **Yes** |
| PUT Object ACL | No |
| PUT Bucket | **Yes** |
| GET Bucket List Objects | **Yes** |
| HEAD Bucket | **Yes** |
| DELETE Bucket | **Yes** |
| List Multipart Uploads | **Yes** |
| GET Bucket acl | **Yes** |
| PUT Bucket acl | **Yes** |
| Versioning | **Yes** |
| Bucket notification | No |
| Bucket Lifecycle | No |
| Bucket policy | No |
| Public website | No |
| GET Bucket location | **Yes** |
| Delete Multiple Objects | **Yes** |
| Object tagging | No |
| GET Object torrent | No |
| Bucket inventory | No |
| GET Bucket service | No |
| Bucket accelerate | No |

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com/>.
