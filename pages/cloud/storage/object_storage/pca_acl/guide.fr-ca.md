---
title: Object Storage Swift - Mettre en place une Access Control List sur Public Cloud Archive
slug: pca/acl
routes:
    canonical: 'https://docs.ovh.com/fr/storage/pcs/acl/'
excerpt: Retrouvez ici les concepts permettant de mettre en oeuvre les ACL dans Object Storage
section: Spécificités de la classe de stockage d'archive OpenStack Swift
order: 040
---

**Dernière mise à jour le 15/12/2021**

## Objectif

Ce guide à pour objectif de vous aider à vous familiariser avec les ACL afin d'affiner les droits d'accès à vos conteneurs.

## Préambule

Les ACL des conteneurs sont stockées dans les métadonnées **X-Container-Write** et **X-Container-Read**. La portée de l'ACL est limitée au conteneur dans lequel les métadonnées sont définies et aux objets du conteneur. De plus :

- **X-Container-Write** accorde la possibilité d'effectuer des opérations PUT, POST et DELETE sur les objets d'un conteneur. Il ne permet pas d'effectuer des opérations POST ou DELETE sur le conteneur lui-même. Certains éléments de la liste de contrôle d'accès permettent également d'effectuer des opérations HEAD ou GET sur le conteneur.

- **X-Container-Read** permet d'effectuer des opérations GET et HEAD sur des objets dans un conteneur. Certains éléments de la liste de contrôle d'accès permettent également d'effectuer des opérations HEAD ou GET sur le conteneur lui-même. Toutefois, une ACL de conteneur ne permet pas d'accéder aux métadonnées privilégiées (telles que X-Container-Sync-Key).

Les ACL de conteneurs utilisent la syntaxe ACL « V1 » qui est une chaîne d'éléments séparés par des virgules comme le montre l'exemple suivant :

```
.r:*,.rlistings,702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf:*
```

Les éléments peuvent être séparés par des espaces, comme dans l'exemple suivant :

```
.r : *, .rlistings, 702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf:*
```

## Prérequis

- Avoir créé un container Object Storage.
- [Avoir créé des utilisateurs OpenStack](https://docs.ovh.com/ca/fr/public-cloud/creation-et-suppression-dun-utilisateur-openstack/).
- [Préparer l’environnement pour utiliser l’API OpenStack](https://docs.ovh.com/ca/fr/public-cloud/preparer-lenvironnement-pour-utiliser-lapi-openstack/) en installant python-swiftclient.
- [Charger les variables d’environnement OpenStack](https://docs.ovh.com/ca/fr/public-cloud/charger-les-variables-denvironnement-openstack/).

## En pratique

### Créer trois utilisateurs

- Un compte **admin** ayant le rôle `ObjectStore operator`
- Un compte **user** sans aucun rôle
- Un compte **limited_user** sans aucun rôle

![Création des utilisateurs](images/create-users.png)

### Charger l'environnement du compte **admin**

```bash
. openrc-admin.sh
```

### Créer un conteneur et déposer deux fichiers test

```bash
swift post -H "X-Storage-Policy: PCA" <conteneur>
swift upload <conteneur> <largeobject>
swift upload <conteneur> <object>
```

#### Vérification des accès

Depuis le compte **admin** :

```bash
. openrc-admin.sh
swift stat
```

```
Account: AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b
Containers: 2
Objects: 14
Bytes: 6442454246
Containers in policy "pca": 2
Objects in policy "pca": 14
Bytes in policy "pca": 6442454246
X-Timestamp: 1628236187.15682
Content-Type: text/plain; charset=utf-8
Accept-Ranges: bytes
X-Account-Project-Domain-Id: default
Vary: Accept
X-Trans-Id: txa90afd77faf64420a26fe-0061272ba6
X-Openstack-Request-Id: txa90afd77faf64420a26fe-0061272ba6
X-Iplb-Request-Id: 6DBEFE1E:EDE8_3626E64B:01BB_61272BA5_1E67059:20729
X-Iplb-Instance: 12308
```

```bash
swift list
```

```
<conteneur>
<conteneur_segments>
```

```bash
swift stat <conteneur>
```

```
Account: AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b
Container: <conteneur>
Objects: 1
Bytes: 3302
Read ACL:
Write ACL:
Sync To:
Sync Key:
Accept-Ranges: bytes
X-Storage-Policy: PCS
Last-Modified: Wed, 25 Aug 2021 21:13:08 GMT
X-Timestamp: 1629925917.23282
Content-Type: text/plain; charset=utf-8
 Vary: Accept
X-Trans-Id: tx5dc255c8afcb46e8a39be-0061272d16
X-Openstack-Request-Id: tx5dc255c8afcb46e8a39be-0061272d16
X-Iplb-Request-Id: 6DBEFE1E:806A_3626E64B:01BB_61272D16_2672F8C:12099
X-Iplb-Instance: 38426
```

```bash
swift list <conteneur>
```

```
<largeobject>
<object>
```

Depuis le compte **user** :

```bash
. openrc-user.sh
swift stat
```

```
Account HEAD failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b 403 Forbidden
Failed Transaction ID: tx5c07e0049b244351a8ad3-0061272d97
```

```bash
swift list
```

```
Account GET failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b?format=json 403 Forbidden  [first 60 chars of response] b'<html><h1>Forbidden</h1><p>Access was denied to this resourc'
Failed Transaction ID: txc64f2ae1b13b4512921d7-0061272dbe
```

```bash
swift stat <conteneur>
```

```
Container HEAD failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b/<conteneur> 403 Forbidden
Failed Transaction ID: txe28a06b820024e2db7fdd-0061272dd0
```

```bash
swift list <conteneur>
```

```
Container GET failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b/<conteneur>?format=json 403 Forbidden  [first 60 chars of response] b'<html><h1>Forbidden</h1><p>Access was denied to this resourc'
Failed Transaction ID: tx7f02e551b0124f33bf7e3-0061272dde
```

Depuis le compte **limited_user** :

```bash
. openrc-limited-user.sh
swift stat
```

```
Account HEAD failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b 403 Forbidden
Failed Transaction ID: tx08b18a4a051d490ca02b6-00612734a6
```

```bash
swift list
```

```
Account GET failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b?format=json 403 Forbidden  [first 60 chars of response] b'<html><h1>Forbidden</h1><p>Access was denied to this resourc'
Failed Transaction ID: tx072cebdc7d634368ab78f-00612734b3
```

```bash
swift stat <conteneur>
```

```
Container HEAD failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b/<conteneur> 403 Forbidden
Failed Transaction ID: tx1370b790fcf14068b3c4b-00612734c4
```

```bash
swift list <conteneur>
```

```
Container GET failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b/<conteneur>?format=json 403 Forbidden  [first 60 chars of response] b'<html><h1>Forbidden</h1><p>Access was denied to this resourc'
Failed Transaction ID: tx46316b5682924d4c849ac-00612734db
```

### Partager le conteneur en lecture / écriture avec un membre spécifique du projet

Obtenir l'`id` de l'utilisateur :

```bash
. openrc-user.sh
openstack user show --format json "${OS_USERNAME}"
```

```json
{
  "default_project_id": "297xxxxxxxxxxxxxxxxxxxxxxxxxx49b",
  "description": "user",
  "domain_id": "default",
  "enabled": true,
  "id": "febxxxxxxxxxxxxxxxxxxxxxxxxxxc72",
  "name": "user-rAawn9H2qxnn",
  "options": {},
  "password_expires_at": null
}
```

```bash
. openrc-admin.sh
swift post <conteneur> -r "297xxxxxxxxxxxxxxxxxxxxxxxxxx49b:febxxxxxxxxxxxxxxxxxxxxxxxxxxc72" \
                       -w "297xxxxxxxxxxxxxxxxxxxxxxxxxx49b:febxxxxxxxxxxxxxxxxxxxxxxxxxxc72"
```

#### Vérification des accès

Depuis le compte **admin** :

```bash
. openrc-admin.sh
swift stat
```

```
Account: AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b
Containers: 2
Objects: 15
Bytes: 6442454992
Containers in policy "pca": 2
Objects in policy "pca": 15
Bytes in policy "pca": 6442454992
X-Timestamp: 1628236187.15682
Content-Type: text/plain; charset=utf-8
Accept-Ranges: bytes
X-Account-Project-Domain-Id: default
Vary: Accept
X-Trans-Id: txa02aabbe1e154f7284a12-0061273617
X-Openstack-Request-Id: txa02aabbe1e154f7284a12-0061273617
X-Iplb-Request-Id: 6DBEFE1E:8412_3626E64B:01BB_61273616_20D6218:4ED7
X-Iplb-Instance: 33617
```

```bash
swift list
```

```
<conteneur>
<conteneur_segments>
```

```bash
swift stat <conteneur>
```

```
Account: AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b
Container: <conteneur>
Objects: 2
Bytes: 4048
Read ACL: 297xxxxxxxxxxxxxxxxxxxxxxxxxx49b:febxxxxxxxxxxxxxxxxxxxxxxxxxxc72
Write ACL: 297xxxxxxxxxxxxxxxxxxxxxxxxxx49b:febxxxxxxxxxxxxxxxxxxxxxxxxxxc72
Sync To:
Sync Key:
Accept-Ranges: bytes
X-Storage-Policy: PCS
Last-Modified: Thu, 26 Aug 2021 06:32:26 GMT
X-Timestamp: 1629925917.23282
Content-Type: text/plain; charset=utf-8
Vary: Accept
X-Trans-Id: tx36cc5c3ed5224bdabaa61-0061273644
X-Openstack-Request-Id: tx36cc5c3ed5224bdabaa61-0061273644
X-Iplb-Request-Id: 6DBEFE1E:8486_3626E64B:01BB_61273644_20D14A0:15614
X-Iplb-Instance: 38342
```

```bash
swift list <conteneur>
```

```
<largeobject>
<object>
```

Depuis le compte **user** :

```bash
. openrc-user.sh
swift stat
```

```
Account HEAD failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b 403 Forbidden
Failed Transaction ID: txd478e14d3a044d27a1069-0061273678
```

```bash
swift list
```

```
Account GET failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b?format=json 403 Forbidden  [first 60 chars of response] b'<html><h1>Forbidden</h1><p>Access was denied to this resourc'
Failed Transaction ID: txdf7a083913a449a0bdaa0-0061273699
```

```bash
swift stat <conteneur>
```

```
Account: AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b
Container: <conteneur>
Objects: 2
Bytes: 4048
Read ACL:
Write ACL:
Sync To:
Sync Key:
Accept-Ranges: bytes
X-Storage-Policy: PCS
Last-Modified: Thu, 26 Aug 2021 06:32:26 GMT
X-Timestamp: 1629925917.23282
Content-Type: text/plain; charset=utf-8
 Vary: Accept
X-Trans-Id: txe320d39085464a24b7e48-00612736a9
X-Openstack-Request-Id: txe320d39085464a24b7e48-00612736a9
X-Iplb-Request-Id: 6DBEFE1E:8514_3626E64B:01BB_612736A8_202065D:27FE7
X-Iplb-Instance: 33618
```

```bash
swift list <conteneur>
```

```
<largeobject>
<object>
```

Depuis le compte **limited_user** :

```bash
. openrc-limited-user.sh
swift stat
```

```
Account HEAD failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b 403 Forbidden
Failed Transaction ID: tx9ee6002842844cf791a8c-0061273715
```

```bash
swift list
```

```
Account GET failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b?format=json 403 Forbidden  [first 60 chars of response] b'<html><h1>Forbidden</h1><p>Access was denied to this resourc'
Failed Transaction ID: txab4706eabf354d2982630-0061273724
```

```bash
swift stat <conteneur>
```

```
Container HEAD failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b/<conteneur> 403 Forbidden
Failed Transaction ID: txa7a488b0549647e886757-0061273734
```

```bash
swift list <conteneur>
```

```
Container GET failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b/<conteneur>?format=json 403 Forbidden  [first 60 chars of response] b'<html><h1>Forbidden</h1><p>Access was denied to this resourc'
Failed Transaction ID: txdd45d71c14314f589744e-0061273744
```

### Partager le conteneur avec les membres du projet

```bash
. openrc-admin.sh
swift post <conteneur> -r "297xxxxxxxxxxxxxxxxxxxxxxxxxx49b:*" \
                       -w "297xxxxxxxxxxxxxxxxxxxxxxxxxx49b:*"
```

#### Vérification des accès

Depuis le compte **admin** :

```bash
. openrc-admin.sh
swift stat
```

```
Account: AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b
Containers: 2
Objects: 15
Bytes: 6442454992
Containers in policy "pca": 2
Objects in policy "pca": 15
Bytes in policy "pca": 6442454992
X-Timestamp: 1628236187.15682
Content-Type: text/plain; charset=utf-8
Accept-Ranges: bytes
X-Account-Project-Domain-Id: default
Vary: Accept
X-Trans-Id: tx1d665074c05545ce9f398-0061273cad
X-Openstack-Request-Id: tx1d665074c05545ce9f398-0061273cad
X-Iplb-Request-Id: 6DBEFE1E:8712_3626E64B:01BB_61273CAD_1EB615D:20727
X-Iplb-Instance: 12308
```

```bash
swift list
```

```
<conteneur>
<conteneur_segments>
```

```bash
swift stat <conteneur>
```

```
Account: AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b
Container: <conteneur>
Objects: 2
Bytes: 4048
Read ACL: 297xxxxxxxxxxxxxxxxxxxxxxxxxx49b:*
Write ACL: 297xxxxxxxxxxxxxxxxxxxxxxxxxx49b:*
Sync To:
Sync Key:
Accept-Ranges: bytes
X-Storage-Policy: PCS
Last-Modified: Thu, 26 Aug 2021 06:43:31 GMT
X-Timestamp: 1629925917.23282
Content-Type: text/plain; charset=utf-8
Vary: Accept
X-Trans-Id: txa2611c408ccd4c5599a69-0061273cdd
X-Openstack-Request-Id: txa2611c408ccd4c5599a69-0061273cdd
X-Iplb-Request-Id: 6DBEFE1E:874E_3626E64B:01BB_61273CDD_1F01CA8:20722
X-Iplb-Instance: 12308
```

```bash
swift list <conteneur>
```

```
<largeobject>
<object>
```

Depuis le compte **user** :

```bash
. openrc-user.sh
swift stat
```

```
Account HEAD failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b 403 Forbidden
Failed Transaction ID: txa890a6d4b42c4f32be23e-0061273d10
```

```bash
swift list
```

```
Account GET failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b?format=json 403 Forbidden  [first 60 chars of response] b'<html><h1>Forbidden</h1><p>Access was denied to this resourc'
Failed Transaction ID: txc3a82eda633e47e691633-0061273d1f
```

```bash
swift stat <conteneur>
```

```
Account: AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b
Container: <conteneur>
Objects: 2
Bytes: 4048
Read ACL:
Write ACL:
Sync To:
Sync Key:
Accept-Ranges: bytes
X-Storage-Policy: PCS
Last-Modified: Thu, 26 Aug 2021 06:43:31 GMT
X-Timestamp: 1629925917.23282
Content-Type: text/plain; charset=utf-8
Vary: Accept
X-Trans-Id: txb6c4e1e26225414fbfee6-0061273d2a
X-Openstack-Request-Id: txb6c4e1e26225414fbfee6-0061273d2a
X-Iplb-Request-Id: 6DBEFE1E:87A8_3626E64B:01BB_61273D2A_2218418:4ED4
X-Iplb-Instance: 33617
```

```bash
swift list <conteneur>
```

```
<largeobject>
<object>
```

Depuis le compte **limited_user** :

```bash
. openrc-limited-user.sh
swift stat
```

```
Account HEAD failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b 403 Forbidden
Failed Transaction ID: txf0ef1ea9e9024e8da4886-0061273d58
```

```bash
swift list
```

```
Account GET failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b?format=json 403 Forbidden  [first 60 chars of response] b'<html><h1>Forbidden</h1><p>Access was denied to this resourc'
Failed Transaction ID: tx554571e2af674d58913d2-0061273d65
```

```bash
swift stat <conteneur>
```

```
Account: AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b
Container: <conteneur>
Objects: 2
Bytes: 4048
Read ACL:
Write ACL:
Sync To:
Sync Key:
Accept-Ranges: bytes
X-Storage-Policy: PCS
Last-Modified: Thu, 26 Aug 2021 06:43:31 GMT
X-Timestamp: 1629925917.23282
Content-Type: text/plain; charset=utf-8
Vary: Accept
X-Trans-Id: tx677723846a044648b1498-0061273d73
X-Openstack-Request-Id: tx677723846a044648b1498-0061273d73
X-Iplb-Request-Id: 6DBEFE1E:8804_3626E64B:01BB_61273D73_1F9C77D:27FE7
X-Iplb-Instance: 12309
```

```bash
swift list <conteneur>
```

```
<largeobject>
<object>
```

### Autoriser un domaine reférent à télécharger des objets

Afin d'autoriser toutes les requêtes en provenance du domaine `example.com` à avoir accès aux objets du conteneur :

```bash
swift post <conteneur> -r ".r:.example.com"
```

> [!primary]
>
> Bien que la plupart des navigateurs modernes incluent l'en-tête `Referrer` dans leurs requêtes, cela constitue un risque de sécurité car il est tout à fait possible de changer la valeur de cet en-tête.
>

#### Vérification des accès

```bash
STORAGE_URL=`swift auth | awk -F = '/OS_STORAGE_URL/ {print $2}'`
curl -i $STORAGE_URL/<conteneur>/<object> -H "Referrer: http://example.com/index.html"
```

### Partager un conteneur avec un utilisateur externe au projet

Depuis un autre projet, créez un utilisateur **other-project-user** sans aucun rôle.

![Autre utilisateur](images/other-user.png)

Obtenir l'`id` de l'utilisateur :

```bash
. openrc-other-project-user.sh
openstack user show --format json "${OS_USERNAME}"
```

```json
{
  "default_project_id": "702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf",
  "description": "other-project-user",
  "domain_id": "default",
  "enabled": true,
  "id": "c9677ed21acb4724aeafe2f60b7123f9",
  "name": "user-Pkwgh5CqDbdm",
  "options": {},
  "password_expires_at": null
}
```

Obtenir l'URL du stockage :

```bash
. openrc-admin.sh
swift auth | awk -F = '/OS_STORAGE_URL/ {print $2}'
```

```
https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b
```

Autoriser l'utilisateur **other-project-user** à avoir accès au conteneur en lecture :

```bash
. openrc-admin.sh
swift post -r "702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf:c9677ed21acb4724aeafe2f60b7123f9" <conteneur>
```

#### Vérification des accès

Depuis le compte `other-project-user` :

```bash
. openrc-other-project-user.sh
swift --os-storage-url https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b list <conteneur>
```
```
<largeobject>
<object>
```

Depuis le compte **admin** :

```bash
. openrc-admin.sh
swift stat <conteneur>
```

```
Account: AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b
Container: <conteneur>
Objects: 2
Bytes: 4048
Read ACL: 702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf:c9677ed21acb4724aeafe2f60b7123f9
Write ACL:
Sync To:
Sync Key:
Accept-Ranges: bytes
X-Storage-Policy: PCS
Last-Modified: Thu, 26 Aug 2021 07:24:25 GMT
X-Timestamp: 1629925917.23282
Content-Type: text/plain; charset=utf-8
Vary: Accept
X-Trans-Id: tx21f55cdaee1f4ebc907b0-0061274202
X-Openstack-Request-Id: tx21f55cdaee1f4ebc907b0-0061274202
X-Iplb-Request-Id: 6DBEFE1E:8A5A_3626E64B:01BB_61274201_22328AF:4ED4
X-Iplb-Instance: 33617
```

## Le cas des Large Objects

Si un objet de plus de 5Gb à été déposé, cela génère un conteneur tel que : `<conteneur_segments>`.<br>
Il faut appliquer les mêmes ACL à ce conteneur afin de pouvoir récupérer l'objet de plus de 5Gb

```bash
swift stat <conteneur>
```

```
Account: AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b
Container: <conteneur>
Objects: 2
Bytes: 4048
Read ACL: 297xxxxxxxxxxxxxxxxxxxxxxxxxx49b:febxxxxxxxxxxxxxxxxxxxxxxxxxxc72
Write ACL: 297xxxxxxxxxxxxxxxxxxxxxxxxxx49b:febxxxxxxxxxxxxxxxxxxxxxxxxxxc72
Sync To:
Sync Key:
Accept-Ranges: bytes
X-Storage-Policy: PCS
Last-Modified: Thu, 26 Aug 2021 07:34:41 GMT
X-Timestamp: 1629925917.23282
Content-Type: text/plain; charset=utf-8
Vary: Accept
X-Trans-Id: tx446a45d7108648c2b9054-0061274418
X-Openstack-Request-Id: tx446a45d7108648c2b9054-0061274418
X-Iplb-Request-Id: 6DBEFE1E:8B28_3626E64B:01BB_61274418_1FF3C2C:45FC
X-Iplb-Instance: 38343
```

```bash
swift stat <conteneur_segments>
```

```
Account: AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b
Container: <conteneur_segments>
Objects: 13
Bytes: 6442450944
Read ACL:
Write ACL:
Sync To:
Sync Key:
Accept-Ranges: bytes
X-Storage-Policy: PCS
Last-Modified: Wed, 25 Aug 2021 21:13:09 GMT
X-Timestamp: 1629925988.34920
Content-Type: text/plain; charset=utf-8
Vary: Accept
X-Trans-Id: tx4f5ce8af0bd845129c0d0-006127443b
X-Openstack-Request-Id: tx4f5ce8af0bd845129c0d0-006127443b
X-Iplb-Request-Id: 6DBEFE1E:8B3C_3626E64B:01BB_6127443A_1E867A3:15625
X-Iplb-Instance: 38342
```

```bash
swift download <conteneur> <largeobject>
```

```
Error downloading object '<conteneur>/<largeobject>': Object GET failed: https://storage.gra.cloud.ovh.net/v1/AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b/<conteneur>/<largeobject> 409 Conflict  [first 60 chars of response] b'<html><h1>Conflict</h1><p>There was a conflict when trying t'
```

```bash
swift post <conteneur_segments> -r "297xxxxxxxxxxxxxxxxxxxxxxxxxx49b:febxxxxxxxxxxxxxxxxxxxxxxxxxxc72"
```

```bash
swift stat <conteneur_segments>
```

```
Account: AUTH_297xxxxxxxxxxxxxxxxxxxxxxxxxx49b
Container: <conteneur_segments>
Objects: 13
Bytes: 6442450944
Read ACL: 297xxxxxxxxxxxxxxxxxxxxxxxxxx49b:febxxxxxxxxxxxxxxxxxxxxxxxxxxc72
Write ACL:
Sync To:
Sync Key:
Accept-Ranges: bytes
X-Storage-Policy: PCS
Last-Modified: Thu, 26 Aug 2021 07:38:40 GMT
X-Timestamp: 1629925988.34920
Content-Type: text/plain; charset=utf-8
Vary: Accept
X-Trans-Id: txaba4d18d7cdd413581ab6-0061274504
X-Openstack-Request-Id: txaba4d18d7cdd413581ab6-0061274504
X-Iplb-Request-Id: 6DBEFE1E:8C04_3626E64B:01BB_61274504_28945B6:1209B
X-Iplb-Instance: 38426
```

```bash
swift download <conteneur> <largeobject>
```

```
<largeobject> [auth 0.739s, headers 1.408s, total 5504.436s, 1.171 MB/s]
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com){.external}.
