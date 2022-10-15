---
title: Object Storage Swift - Compatibilité des API REST S3/Swift
slug: pcs/object-storage-standard-s3-and-swift-rest-api-compatibility
section: Spécificités de la classe de stockage OpenStack Swift
order: 030
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

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com/>.
