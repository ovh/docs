---
title: Object Storage Swift - Capacités et limitations
slug: pcs/capabilities-and-limitations
excerpt: Retrouvez ici les principales capacités et limitations pour la gestion de vos conteneurs
section: Spécificités de la classe de stockage OpenStack Swift
order: 080
---

**Dernière mise à jour le 23/09/2021**

## Objectif

Ce guide à pour objectif de vous présenter les principales capacités et limitations pour la gestion de vos conteneurs.

## En pratique

> [!primary]
>
> Vous pouvez consulter une partie des ces informations directement depuis un navigateur en vous rendant sur : `https://storage.<region>.cloud.ovh.net/info`, ou, si vous utilisez python-swiftclient, via la commande : `swift capabilities`.
>

### container_listing_limit = 10000

Le nombre par défaut (et maximum) d'éléments renvoyés pour une demande de liste de conteneurs.

Afficher tous les éléments avec python-swiftclient :

```bash
swift list <conteneur>

container_listing_limit/00001
container_listing_limit/00002
container_listing_limit/00003
container_listing_limit/00004
container_listing_limit/00005
container_listing_limit/00006
container_listing_limit/00007
[...]
container_listing_limit/10038
```

N'afficher que les 10000 premiers objets :

```bash
curl -i "https://storage.gra.cloud.ovh.net/v1/AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf/<conteneur>" -X GET -H "X-Auth-Token: xxx"
```

```
Content-Length: 300000
X-Container-Object-Count: 10038
X-Timestamp: 1627567737.86773
Accept-Ranges: bytes
X-Storage-Policy: PCA
Last-Modified: Mon, 02 Aug 2021 07:20:42 GMT
X-Container-Bytes-Used: 973749
Content-Type: text/plain; charset=utf-8
Vary: Accept
X-Trans-Id: tx03e7a5725123423d9962c-0061080b90
X-Openstack-Request-Id: tx03e7a5725123423d9962c-0061080b90
Date: Mon, 02 Aug 2021 15:13:20 GMT
X-IPLB-Request-ID: 6DBEFE1E:A1BE_3626E64B:01BB_61080B90_3F0404F:1454
X-IPLB-Instance: 38342

container_listing_limit/00001
container_listing_limit/00002
container_listing_limit/00003
container_listing_limit/00004
container_listing_limit/00005
container_listing_limit/00006
container_listing_limit/00007
[...]
container_listing_limit/10000
```

Vous pouvez utiliser les paramètres `marker`, `limit` et `end_marker` pour contrôler le nombre d'éléments retournés dans une liste et l'endroit où la liste commence ou se termine.

| Paramètre | Type | Description |
|:----------|:-----|:------------|
| marker | string | Pour obtenir les noms suivants, vous devez faire une autre demande avec le paramètre marker. Définissez le paramètre marker sur le nom du dernier élément renvoyé dans la liste précédente. |
| limit | integer | Pour renvoyer moins de 10 000 noms, utilisez le paramètre limit. |
| end_marker | string | Limite le jeu de résultats aux noms dont le nombre est inférieur à la valeur du paramètre end_marker. |

Afficher la suite via `marker` :

```bash
curl -i "https://storage.gra.cloud.ovh.net/v1/AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf/<conteneur>?marker=container_listing_limit/10000" -X GET -H "X-Auth-Token: xxx"
```

```output
Content-Length: 10038
X-Container-Object-Count: 10038
X-Timestamp: 1627567737.86773
Accept-Ranges: bytes
X-Storage-Policy: PCA
Last-Modified: Mon, 02 Aug 2021 07:20:42 GMT
X-Container-Bytes-Used: 973749
Content-Type: text/plain; charset=utf-8
Vary: Accept
X-Trans-Id: tx03e7a5725123423d9962c-0061080b90
X-Openstack-Request-Id: tx03e7a5725123423d9962c-0061080b90
Date: Mon, 02 Aug 2021 15:13:20 GMT
X-IPLB-Request-ID: 6DBEFE1E:A1BE_3626E64B:01BB_61080B90_3F0404F:1454
X-IPLB-Instance: 38342

container_listing_limit/10001
container_listing_limit/10002
container_listing_limit/10003
container_listing_limit/10004
container_listing_limit/10005
container_listing_limit/10006
container_listing_limit/10007
[...]
container_listing_limit/10038
```

### max_container_name_length = 256

Le nombre maximum d'octets dans l'encodage utf8 d'un nom de conteneur.

```bash
max_container_name_length="max_container_name_length_$(cat /dev/urandom | tr -dc "a-zA-Z0-9" | fold -w 300 | head -n1)"
swift post $max_container_name_length
```

```
Container PUT failed: https://storage.gra.cloud.ovh.net/v1/AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf/max_container_name_length_MoZOkNO4bnbrTR6iQz2kXMstW3D5STEF6Ojw48oOEat3pTMWL47gHomhl5FRx7biOz2ELDIlSaVI4757vSP6lgqKIQlDS36lMLSitWSLoD7CDnQ6mWW5GpnwNxrtKsxT6jLYOCbrknEmpXTSOqfoFmaqSwc7g3ZLbxP1zUJ1EKp1xJVI7ZoQg4VqRX6iQtZreVlbhe0mc9n1Chia1zE4JHduGV9HkeMJyRIpAe7yTN83L7rCz0EdXwFMTSfJzYs4l01Ph0LKvogenhQzTMFtLIS57hMgOPYMVnfhCzHBNiZY 400 Bad Request   b'Container name length of 326 longer than 256'
Failed Transaction ID: txd3664103d22a445687c5a-00610a32e3
```

### max_file_size = 5368709122 (5Gb)

Le plus grand objet normal qui peut être enregistré dans le cluster. Il s'agit également de la limite de la taille de chaque segment d'un grand objet lors de l'utilisation du support du manifeste de grand objet. Cette valeur est définie en octets. Si elle est inférieure à 1MiB, certains tests échoueront. Il est FORTEMENT recommandé de laisser cette valeur par défaut (`5 * 2**30 + 2`).

```bash
swift upload <conteneur> <largeobject>
```

```
Object PUT failed: https://storage.gra.cloud.ovh.net/v1/AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf/<conteneur>/<largeobject> 413 Request Entity Too Large   b'Your request is too large.'
Consider using the --segment-size option to chunk the object
```

```bash
swift upload --use-slo --segment-size 1G <conteneur> <largeobject>
```

```
<largeobject> segment 5
<largeobject> segment 4
<largeobject> segment 0
<largeobject> segment 1
<largeobject> segment 2
<largeobject> segment 3
<largeobject>
```

```bash
swift list <conteneur_segments>
```

```
<largeobject>/slo/1627934910.652204/6442450944/1073741824/00000000
<largeobject>/slo/1627934910.652204/6442450944/1073741824/00000001
<largeobject>/slo/1627934910.652204/6442450944/1073741824/00000002
<largeobject>/slo/1627934910.652204/6442450944/1073741824/00000003
<largeobject>/slo/1627934910.652204/6442450944/1073741824/00000004
<largeobject>/slo/1627934910.652204/6442450944/1073741824/00000005
```

### max_meta_count = 90

Le nombre maximum de clés de métadonnées qui peuvent être stockées sur un seul compte, conteneur ou objet.

```bash
for i in $(seq 1 1 100)
do
swift post -m "max_meta_count_$i:value" <conteneur>
done
```

```output
Container POST failed: https://storage.gra.cloud.ovh.net/v1/AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf/<conteneur> 400 Bad Request   b'Too many metadata items; max 90'
Failed Transaction ID: txef5aa187467c4c949c0d4-00610a35f0
```

```bash
swift stat <conteneur>
```

```output
Container HEAD failed: https://storage.gra.cloud.ovh.net/v1/AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf/<conteneur> 502 Bad Gateway
```

### max_meta_name_length = 128

Le nombre maximum d'octets dans l'encodage utf8 de la partie « nom » d'un en-tête de métadonnées.

```bash
swift post -m 'max_meta_name_length_oROpb2gFutM1NrZI9Q5aOuJDi0eiO0hFvJIJo9Hrd7mhPeAOoRwoCk00CJPX0yFvmbcatIuqXY8avxTLhhQBRwVhBJ0Ht2DeUKFTEZDeKfF2xBou4aC9krFMjVoF8wEsdb:value' <conteneur>
```

```
Container POST failed: https://storage.gra.cloud.ovh.net/v1/AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf/<conteneur> 400 Bad Request  [first 60 chars of response] b'Metadata name too long: x-container-meta-Max-Meta-Name-Lengt'
Failed Transaction ID: tx6ced883b311a4c1eb5e75-00610a30eb
```

### max_meta_overall_size = 4096

Le nombre maximum d'octets dans l'encodage utf8 des métadonnées (clés + valeurs).

```bash
for i in $(seq 1 1 50)
do
swift post -m "max_meta_overall_size_$i:oROpb2gFutM1NrZI9Q5aOuJDi0eiO0hFvJIJo9Hrd7mhPeAOoRwoCk00CJPX0yFvmbcatIuqXY8avxTLhhQBRwVhBJ0Ht2DeUKFTEZDeKfF2xBou4aC9krFMjVoF8wEsdb" <conteneur>
done
```

```
Container POST failed: https://storage.gra.cloud.ovh.net/v1/AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf/<conteneur> 400 Bad Request   b'Total metadata too large; max 4096'
Failed Transaction ID: tx062504c366c3454c958c9-00610a34c0
```

### max_object_name_length = 1024

Le nombre maximum d'octets dans l'encodage utf8 d'un nom d'objet.  
Le nom d'un objet inclut son préfixe.

```bash
cd /tmp/
d=$(cat /dev/urandom | tr -dc "a-zA-Z0-9" | fold -w 100 | head -n1)
mkdir -p "$d/$d/$d/$d/$d/$d/$d/$d/$d/$d/$d/" && cd $_
touch max_object_name_length.txt
file="$(pwd)/max_object_name_length.txt"
swift upload <conteneur> $file
```

```
Object PUT failed: https://storage.gra.cloud.ovh.net/v1/AUTH_702de32b692c4842b0bb751dc5085daf/<conteneur>/tmp/dyL8Vb4KVkMnusLEWgDRsHWFIqGRJvxepapekbHHcQ08GFLPDEctdtRCpkpdZAOITkN4P0km0O717djG5qHd9EPA82zqyIrmEB4T/dyL8Vb4KVkMnusLEWgDRsHWFIqGRJvxepapekbHHcQ08GFLPDEctdtRCpkpdZAOITkN4P0km0O717djG5qHd9EPA82zqyIrmEB4T/dyL8Vb4KVkMnusLEWgDRsHWFIqGRJvxepapekbHHcQ08GFLPDEctdtRCpkpdZAOITkN4P0km0O717djG5qHd9EPA82zqyIrmEB4T/dyL8Vb4KVkMnusLEWgDRsHWFIqGRJvxepapekbHHcQ08GFLPDEctdtRCpkpdZAOITkN4P0km0O717djG5qHd9EPA82zqyIrmEB4T/dyL8Vb4KVkMnusLEWgDRsHWFIqGRJvxepapekbHHcQ08GFLPDEctdtRCpkpdZAOITkN4P0km0O717djG5qHd9EPA82zqyIrmEB4T/dyL8Vb4KVkMnusLEWgDRsHWFIqGRJvxepapekbHHcQ08GFLPDEctdtRCpkpdZAOITkN4P0km0O717djG5qHd9EPA82zqyIrmEB4T/dyL8Vb4KVkMnusLEWgDRsHWFIqGRJvxepapekbHHcQ08GFLPDEctdtRCpkpdZAOITkN4P0km0O717djG5qHd9EPA82zqyIrmEB4T/dyL8Vb4KVkMnusLEWgDRsHWFIqGRJvxepapekbHHcQ08GFLPDEctdtRCpkpdZAOITkN4P0km0O717djG5qHd9EPA82zqyIrmEB4T/dyL8Vb4KVkMnusLEWgDRsHWFIqGRJvxepapekbHHcQ08GFLPDEctdtRCpkpdZAOITkN4P0km0O717djG5qHd9EPA82zqyIrmEB4T/dyL8Vb4KVkMnusLEWgDRsHWFIqGRJvxepapekbHHcQ08GFLPDEctdtRCpkpdZAOITkN4P0km0O717djG5qHd9EPA82zqyIrmEB4T/dyL8Vb4KVkMnusLEWgDRsHWFIqGRJvxepapekbHHcQ08GFLPDEctdtRCpkpdZAOITkN4P0km0O717djG5qHd9EPA82zqyIrmEB4T/max_object_name_length.txt 400 Bad Request   b'Object name length of 1141 longer than 1024'

```

### Durée de validité d'un token

Un token est valide 24h.

> [!warning]
>
> Un trop grand nombre de demandes de token renverra une erreur 429 Too Many Requests.
>

### Nombre de conteneurs dans un stockage

Il n'y a pas de limite au nombre de conteneurs dans un stockage.

### Nombre de comptes utilisateurs par projet

1000

### Keystone API version

La version actuelle de keystone est la 3, la v2 étant obsolète depuis plusieures années : <https://public-cloud.status-ovhcloud.com/incidents/gwqhdkprm136>

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com){.external}.
