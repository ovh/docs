---
title: Object Storage Swift - "Débuter avec l’API Swift"
excerpt: "Découvrez comment utiliser l'API Swift"
slug: pcs/getting-started-with-the-swift-api
legacy_guide_number: 1916
section: Spécificités de la classe de stockage OpenStack Swift
order: 010
---

**Dernière mise à jour le 25/06/2021**

## Objectif

Vous pouvez utiliser l'API OpenStack pour générer divers scripts afin d'automatiser vos actions sur vos instances Public Cloud.

Le *swiftclient* OpenStack vous permet d'interagir avec vos conteneurs et objets et de les gérer. Vous pourrez par exemple envoyer des fichiers de manière régulière vers vos conteneurs afin de les sauvegarder.

**Ce guide vous aidera à vous familiariser avec l'API OpenStack afin de gérer vos conteneurs d'objets à l'aide de *python-swiftclient*.**

## Prérequis

- [Préparer l'environnement pour utiliser l'API OpenStack](https://docs.ovh.com/fr/public-cloud/prepare_the_environment_for_using_the_openstack_api/) en installant python-swiftclient
- [Charger les variables d'environnement OpenStack](https://docs.ovh.com/fr/public-cloud/set-openstack-environment-variables/)

## En pratique

> [!primary]
>
Veuillez noter que les instructions suivantes concernent uniquement l'interface de ligne de commande d'une distribution GNU/Linux, après avoir mis en oeuvre les prérequis ci-dessus.
>

### Documentation Swift

Vous pouvez récupérer la liste des commandes possibles dans la documentation du client :

```
admin@server-1:~$ swift --help
```

Voici la liste des commandes principales :

|Commande|Description|
|---|---|
|**delete**|Supprime un conteneur ou les objets présents dans un conteneur|
|**download**|Télécharge des objets à partir de conteneurs|
|**list**|Répertorie les conteneurs d'un compte ou les objets d'un conteneur|
|**post**|Met à jour les métadonnées du compte, du conteneur ou de l'objet. Si le conteneur est introuvable, il sera créé automatiquement.|
|**stat**|Affiche les informations relatives au compte, au conteneur ou à l'objet.|
|**upload**|Télécharge les fichiers et répertoires spécifiés vers le conteneur donné.|
|**capabilities**|Extrait la capacité du proxy.|
|**tempurl**|Génère une URL temporaire pour un objet Swift.|


Pour obtenir plus de d'explications sur une commande Swift spécifique, ajoutez `--help` à la fin de celle-ci :

```
admin@server-1:~$ swift post --help

Updates meta information for the account, container, or object.
If the container is not found, it will be created automatically.

Positional arguments:
[container] Name of container to post to.
[object] Name of object to post. Specify multiple times
for multiple objects.
[...]
```

Vous pouvez également consulter la documentation de Swift disponible sur le [site OpenStack](http://docs.openstack.org/cli-reference/content/swiftclient_commands.html).

### Création d'un conteneur d'objet public

- Créez le conteneur « container1 » :

```
admin@server-1:~$ swift post container1
```

- Configurez les droits d'accès pour rendre votre conteneur public :

```
admin@server-1:~$ swift post --header "X-Container-Read: .r:*" container1
```

- Vérifiez la configuration du conteneur :

```
admin@server-1:~$ swift stat container1

Account: AUTH_b3e26xxxxxxxxxxxxxxxxxxxb0ba29
Container: container1
Objects: 0
Bytes: 0
Read ACL: .r:*
Write ACL:
Sync To:
Sync Key:
Accept-Ranges: bytes
X-Trans-Id: B2210C05:8D93_052711A1:01BB_561CC9DF_1B305:30D7
X-Storage-Policy: Policy-0
Connection: close
X-Timestamp: 1444726875.27475
Content-Type: text/plain; charset=utf-8
```

### Envoi de fichiers dans votre conteneur

- Téléversez le contenu d'un dossier local dans un conteneur :

```
admin@server-1:~$ swift upload container1 images/

images/OVHlogo.png
images/OVHSummitKeynote.jpg
```

Un préfixe sera automatiquement ajouté à vos fichiers si vous envoyez un dossier entier au lieu d'un seul fichier.

- Lister les fichiers d'un conteneur :

```
admin@server-1:~$ swift list container1

images/OVHSummitKeynote.jpg
images/OVHlogo.png
text1.txt
text2.txt
text3.txt
```

Il est possible d'afficher les fichiers ayant un préfixe particulier grâce à l'argument `--prefix` :

```
admin@server-1:~$ swift list container1 --prefix images

images/OVHSummitKeynote.jpg
images/OVHlogo.png
```

Si le conteneur est configuré comme public, vous pouvez accéder au fichier à l'aide d'une URL :

```
https://storage.gra1.cloud.ovh.net/v1/AUTH_b3e26xxxxxxxxxxxxxxxxxxxb0ba29/container1/images/OVHlogo.png
```

Cette URL est composée d'un point de terminaison, disponible à partir de l'[interface Horizon](https://docs.ovh.com/fr/public-cloud/access_and_security_in_horizon/), du nom de votre conteneur et du nom de votre objet (y compris le préfixe).

### Téléchargement de fichiers

- Télécharger un fichier :

```
admin@server-1:~$ swift download container1 text1.txt

text1.txt [auth 0.328s, headers 0.452s, total 0.453s, 0.000 MB/s]
```

Vous pouvez télécharger plusieurs fichiers ayant le même préfixe grâce à la commande suivante :

```
admin@server-1:~$ swift download container1 --prefix images

images/OVHlogo.png [auth 0.383s, headers 0.520s, total 0.522s, 0.135 MB/s]
images/OVHSummitKeynote.jpg [auth 0.371s, headers 0.514s, total 0.559s, 2.657 MB/s]
```

### Suppression de conteneurs ou d'objets

- Supprimer un fichier :

```
admin@server-1:~$ swift delete container1 text1.txt

text1.txt
```

Comme pour le téléchargement, vous pouvez supprimer plusieurs fichiers ayant le même préfixe, via la commande suivante :

```
admin@server-1:~$ swift delete container1 images/*

images/OVHSummitKeynote.jpg
images/OVHlogo.png
```

- Supprimer un conteneur :

```
admin@server-1:~$ swift delete container1

text2.txt
text3.txt
```

Cette opération supprimera tous les fichiers du conteneur.

## Aller plus loin

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com/>.
