---
title: Object Storage Swift - Mémo de commandes Swift
slug: pcs/swift-commands-memo
excerpt: Retrouvez ici les principales commandes swift pour gérer vos conteneurs d'objets
section: Spécificités de la classe de stockage OpenStack Swift
order: 100
---

**Dernière mise à jour le 21/09/2021**

## Objectif

Vous pouvez utiliser l’API OpenStack pour générer divers scripts afin d’automatiser vos actions sur vos instances Public Cloud.

Le swiftclient OpenStack vous permet d’interagir avec vos conteneurs et objets et de les gérer. Vous pourrez par exemple envoyer des fichiers de manière régulière vers vos conteneurs afin de les sauvegarder.

**Retrouvez dans ce guide les principales commandes swift pour gérer vos conteneurs d'objets à l’aide de python-swiftclient.**

## Prérequis

- [Préparer l’environnement pour utiliser l’API OpenStack](https://docs.ovh.com/fr/public-cloud/preparer-lenvironnement-pour-utiliser-lapi-openstack/) en installant python-swiftclient.
- [Charger les variables d’environnement OpenStack](https://docs.ovh.com/fr/public-cloud/charger-les-variables-denvironnement-openstack/).

## En pratique

### Créer un conteneur PCS

```bash
swift post <conteneur>
```

### Afficher les informations relatives à un compte

```bash
swift stat
```

### Afficher les informations relatives à un conteneur

```bash
swift stat <conteneur>
```

### Afficher les informations relatives à un objet

```bash
swift stat <conteneur> <objet>
```

### Lister le(s) conteneur(s) relatif(s) à un compte

```bash
swift list
```

### Lister le contenu d'un conteneur

```bash
swift list <conteneur>
```

### Upload d'un objet inférieur à 5GB

```bash
swift upload <conteneur> <objet>
```

### Upload d'un objet supérieur à 5GB en mode SLO

```bash
swift upload --use-slo --segment-size 1G <conteneur> <objet>
```

### Upload d'un objet supérieur à 5GB en mode DLO

```bash
swift upload --segment-size 1G <conteneur> <objet>
```

### Abandon de l'upload d'un LargeObject

```bash
$ swift upload --use-slo --segment-size 500M <conteneur> <objet>
^C Aborted
$ swift list
<conteneur>
<conteneur_segments>
$ swift list <conteneur>
$
$ swift list <conteneur_segments>
<objet>/slo/1628738591.297565/6442450944/524288000/00000000
<objet>/slo/1628738591.297565/6442450944/524288000/00000001
<objet>/slo/1628738591.297565/6442450944/524288000/00000002
<objet>/slo/1628738591.297565/6442450944/524288000/00000003
<objet>/slo/1628738591.297565/6442450944/524288000/00000004
<objet>/slo/1628738591.297565/6442450944/524288000/00000005
<objet>/slo/1628738591.297565/6442450944/524288000/00000006
<objet>/slo/1628738591.297565/6442450944/524288000/00000007
<objet>/slo/1628738591.297565/6442450944/524288000/00000008
<objet>/slo/1628738591.297565/6442450944/524288000/00000009
```

> Il est donc recommandé de supprimer le conteneur `<conteneur_segments>` ou au moins les segments ccorrespondant à l'objet abandonné.

### Download d'un objet

```bash
swift download <conteneur> <objet>
```

### Supprimer un conteneur vide

```bash
swift delete <conteneur>
```

### Supprimer un conteneur non vide

```bash
swift delete <conteneur>
```

### Supprimer un objet

```bash
swift delete <conteneur> <objet>
```

### Supprimer des objets répondant à un préfixe

```bash
swift delete --prefix <prefix> <conteneur>
```

### Ajouter un metadata à un conteneur

```bash
swift post -H "X-Container-Meta-Access-Control-Allow-Origin:http://example.com" <conteneur>
```

### Ajouter un metadata à un objet

```bash
swift post -m "my-custom-key:value" <conteneur> <objet>
```

### Supprimer un metadata d'un conteneur

```bash
swift post -H "X-Container-Meta-Access-Control-Allow-Origin:" <conteneur>
```

### Supprimer un metadata d'un objet

```bash
swift post -m "my-custom-key:" <conteneur> <objet>
swift post -H "X-Remove-Object-My-Custom-Key:" <conteneur> <objet>
```

### Définir l'ACL de lecture sur un conteneur

```bash
swift post <conteneur> -r "${OS_TENANT_ID}:*"
```

### Définir l'ACL d'écriture sur un conteneur

```bash
swift post <conteneur> -w "${OS_TENANT_ID}:*"
```

### Supprimer l'ACL de lecture sur un conteneur

```bash
swift post <conteneur> -r ""
```

### Supprimer l'ACL d'écriture sur un conteneur

```bash
swift post <conteneur> -w ""
```

### Déplacer des objets d'un conteneur à un autre

```bash
swift copy -d /<conteneur_de_destination> <conteneur> <objet>
```

#### Particularité des LargeObject

> [!primary]
>
> Dans cet exemple, le LargeObject à été uploadé en mode SLO.
> Consultez la documentation [Mémo de commandes curl](https://docs.ovh.com/fr/storage/pcs/curl-commands-memo/) pour l'upload du manifest.
>

Sur un LargeObject, la commande `swift copy` renvoie une **erreur 413** :

```bash
swift copy -d /<conteneur_de_destination> <conteneur> <largeobject>
created container <conteneur_de_destination>
Object COPY failed: https://storage.gra.cloud.ovh.net/v1/AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf/<conteneur>/<largeobject> 413 Request Entity Too Large  [first 60 chars of response] b'<html><h1>Request Entity Too Large</h1><p>The body of your r'
```

Il faut donc commencer par déplacer les segments:

```bash
for obj in $(swift list <conteneur_segments>);do swift copy -d /<conteneur_de_destination_segments> <conteneur_segments> $obj;done
created container <conteneur_de_destination_segments>
<conteneur_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000000 copied to /<conteneur_de_destination_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000000
created container <conteneur_de_destination_segments>
<conteneur_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000001 copied to /<conteneur_de_destination_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000001
created container <conteneur_de_destination_segments>
<conteneur_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000002 copied to /<conteneur_de_destination_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000002
created container <conteneur_de_destination_segments>
<conteneur_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000003 copied to /<conteneur_de_destination_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000003
created container <conteneur_de_destination_segments>
<conteneur_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000004 copied to /<conteneur_de_destination_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000004
created container <conteneur_de_destination_segments>
<conteneur_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000005 copied to /<conteneur_de_destination_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000005
```

Puis récupérer le manifest, l'adapter et le ré-uploader

```bash
$(swift auth)
curl -s -X GET "$OS_STORAGE_URL/<conteneur>/<largeobject>?multipart-manifest=get" -H "X-Auth-Token:$OS_AUTH_TOKEN" | jq '.' > <largeobject>.json

sed -i 's/name/path/g' <largeobject>.json
sed -i 's/bytes/size_bytes/g' <largeobject>.json
sed -i '/hash/d' <largeobject>.json
sed -i '/last_modified/d' <largeobject>.json
sed -i '/content_type/d' <largeobject>.json
sed -i '/path/s/,$//g' <largeobject>.json

curl -i -X PUT -H "X-Auth-Token:$OS_AUTH_TOKEN" -T <largeobject>.json "$OS_STORAGE_URL/<conteneur_de_destination>/<largeobject>?multipart-manifest=put"
```

### Renommer un conteneur

Il n'est pas possible de renommer un conteneur. Il faut pour cela créer un nouveau conteneur et ré-uploader les objets dedans. Cependant, Swift dispose de la fonction `copy` qui semble fournir de meilleures performances.

Délai pour uploader 2Gb (1500 objets de 1M et 1 objet de 500M) :

```bash
time swift upload <conteneur> ./*
real	69m26,159s
user	0m20,017s
sys	0m3,689s
```
```bash
swift list --lh -t <conteneur>
2.0G
```
```bash
swift list
<conteneur>
```
```bash
time for obj in $(swift list <conteneur>);do swift copy -d /<autre_conteneur> <conteneur> $obj; done
real	54m43,898s
user	12m38,060s
sys	1m34,394s
```
```bash
swift list
<autre_conteneur>
<conteneur>
```
```bash
swift list --lh -t <autre_conteneur>
2.0G
```

On remarque que, pour les petits objets, cela ne change pas grand chose. Par contre, pour les objets de taille un peu plus conséquente (500M) :

```bash
time swift upload <conteneur> <objet> --object-name <objet_bis>
<objet_bis>

real	15m51,525s
user	0m4,245s
sys	0m0,848s
```
```bash
time swift copy -d /<autre_conteneur> <conteneur> <objet_bis>
created container <autre_conteneur>
<conteneur>/<objet_bis> copied to /<autre_conteneur>/<objet_bis>

real	0m11,924s
user	0m0,464s
sys	0m0,091s
```

#### Particularité des LargeObject

> [!primary]
>
> Dans cet exemple, le LargeObject à été uploader en mode SLO.
> Consultez la documentation [Mémo de commandes Curl](https://docs.ovh.com/fr/storage/pcs/curl-commands-memo/) pour l'upload du manifest.
>

```bash
time swift upload --use-slo --segment-size 1G <conteneur> <largeobject>
<largeobject> segment 4
<largeobject> segment 2
<largeobject> segment 0
<largeobject> segment 1
<largeobject> segment 5
<largeobject> segment 3
<largeobject>

real	190m55,547s
user	0m57,906s
sys	0m14,246s
```

Sur un LargeObject, la commande `swift copy` renvoie une **erreur 413** :

```bash
swift copy -d /<conteneur_de_destination> <conteneur> <largeobject>
created container <conteneur_de_destination>
Object COPY failed: https://storage.gra.cloud.ovh.net/v1/AUTH_702xxxxxxxxxxxxxxxxxxxxxxxxxxdaf/<conteneur>/<largeobject> 413 Request Entity Too Large  [first 60 chars of response] b'<html><h1>Request Entity Too Large</h1><p>The body of your r'
```

Il faut donc commencer par déplacer les segments :

```bash
for obj in $(swift list <conteneur_segments>);do swift copy -d /<conteneur_de_destination_segments> <conteneur_segments> $obj;done
created container <conteneur_de_destination_segments>
<conteneur_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000000 copied to /<conteneur_de_destination_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000000
created container <conteneur_de_destination_segments>
<conteneur_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000001 copied to /<conteneur_de_destination_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000001
created container <conteneur_de_destination_segments>
<conteneur_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000002 copied to /<conteneur_de_destination_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000002
created container <conteneur_de_destination_segments>
<conteneur_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000003 copied to /<conteneur_de_destination_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000003
created container <conteneur_de_destination_segments>
<conteneur_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000004 copied to /<conteneur_de_destination_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000004
created container <conteneur_de_destination_segments>
<conteneur_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000005 copied to /<conteneur_de_destination_segments>/<largeobject>/slo/1629978906.614903/6442450944/1073741824/00000005
```

Puis récupérer le manifest, l'adapter et le ré-uploader

```bash
$(swift auth)
curl -s -X GET "$OS_STORAGE_URL/<conteneur>/<largeobject>?multipart-manifest=get" -H "X-Auth-Token:$OS_AUTH_TOKEN" | jq '.' > <largeobject>.json

sed -i 's/name/path/g' <largeobject>.json
sed -i 's/bytes/size_bytes/g' <largeobject>.json
sed -i '/hash/d' <largeobject>.json
sed -i '/last_modified/d' <largeobject>.json
sed -i '/content_type/d' <largeobject>.json
sed -i '/path/s/,$//g' <largeobject>.json

curl -i -X PUT -H "X-Auth-Token:$OS_AUTH_TOKEN" -T <largeobject>.json "$OS_STORAGE_URL/<conteneur_de_destination>/<largeobject>?multipart-manifest=put"
```

### Obtenir l'espace utilisé dans un conteneur

```bash
swift list --lh -t <conteneur>
8.4G
```

Il n'y a pas de notion de dossier dans un conteneur, cependant on peut utiliser les préfixes :

```bash
swift list -p <prefix> <conteneur>
<prefix>/1.jpg
<prefix>/10.jpg
<prefix>/11.jpg
<prefix>/12.jpg
<prefix>/13.jpg
<prefix>/14.jpg
<prefix>/15.jpg
<prefix>/16.jpg
<prefix>/17.jpg
<prefix>/18.jpg
<prefix>/2.jpg
<prefix>/3.jpg
<prefix>/4.jpg
<prefix>/5.jpg
<prefix>/6.jpg
<prefix>/7.jpg
<prefix>/8.jpg
<prefix>/9.jpg
```

```bash
swift list --lh -t -p <prefix> <conteneur>
685K
```

### Obtenir l'id d'un utilisateur

```bash
openstack user show --format json "${OS_USERNAME}" | jq -r '.id'
openstack token issue -f json | jq -r '.user_id'
```

### Obtenir les limites du cluster

```bash
swift capabilities
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com){.external}.
