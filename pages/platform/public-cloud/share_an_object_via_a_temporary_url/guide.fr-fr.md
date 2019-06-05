---
title: 'Partager un objet avec une adresse temporaire'
slug: partager-un-objet-avec-une-adresse-temporaire
excerpt: 'Découvrez comment partager un objet sans fournir vos informations personnelles'
section: Base de connaissances
---

**Dernière mise à jour le 21/01/2019**

## Objectif 

OpenStack Swift permet de stocker un grand nombre de fichiers. Afin de gérer ces derniers, vous devez être authentifié à l'aide d'un *token* (ou jeton) pour chacune de vos requêtes vers l'API. Ceci permet de confirmer vos autorisations sur Swift en lecture ainsi qu'en écriture. Ce *token* provient du système d'authentification à l'aide de votre identifiant et mot de passe.

Lorsque vous souhaitez partager un fichier avec quelqu'un d'autre, vous ne souhaitez évidemment pas donner vos informations personnelles pour l'authentification. Dans ce cas, les adresses temporaires (ou *tempurl*) peuvent répondre à votre besoin.

**Découvrez comment partager un objet avec une adresse temporaire.**

## Prérequis

- [Avoir préparé l'environnement pour utiliser l'API OpenStack](https://docs.ovh.com/fr/public-cloud/preparer-lenvironnement-pour-utiliser-lapi-openstack/){.ref}.
- [Charger les variables d'environnement OpenStack](https://docs.ovh.com/fr/public-cloud/charger-les-variables-denvironnement-openstack/){.ref}.
- Disposer de Python installé sur votre poste.

## En pratique

### Comprendre le principe

L'adresse temporaire (ou *tempurl*) est une fonctionnalité qui vous permet de contrôler les fichiers que vous souhaitez partager. Elle utilise pour cela les éléments suivants :

- **l'adresse du point d'accès**, comme https://storage.sbg1.cloud.ovh.net ;
- **le chemin vers l'objet contenant votre projet, le conteneur et le nom de l'objet**, comme `v1/AUTH_tenant/default/file` ;
- **le paramètre tempurlsign**, qui correspond à une signature générée selon votre clé secrète, la méthode HTTP, le chemin du fichier et la date d'expiration ;
- **le paramètre url_expires**, qui correspond à la date d'expiration de votre adresse temporaire.

### Générer l'adresse temporaire (*tempurl*)

#### 1. Génération de la clé

Dans un premier temps, vous devez créer une clé. Celle-ci sera valable pour tous les fichiers de votre projet. Une seule génération de clé est donc suffisante pour toutes vos adresses temporaires. 

> [!primary]
>
> Nous vous recommandons fortement de choisir une longue clé sécurisée, d'au minimum 20 caractères. Sachez cependant qu'il est possible de générer une nouvelle clé à tout moment.
> 

Pour générer votre clé, plusieurs solutions s’offrent à vous, telles que les commandes sha512sum ou sha256sum. Nous vous recommandons d’utiliser la méthode la plus adaptée à votre situation, selon le niveau de chiffrement que vous souhaitez employer. Par exemple, du chiffrement le plus efficace au moins efficace :

- date +%s | sha512sum
- date +%s | sha256sum
- date +%s | md5sum 

Une fois en possession de votre clé, vous pouvez configurer celle-ci sur votre projet à l'aide du client Swift. Prenez soin de remplacer la chaîne « 12345 » par votre clé) :

```bash
swift post -m "Temp-URL-Key: 12345"
```

Ou en utilisant curl :

```bash
curl -i -X POST \ -H "X-Account-Meta-Temp-URL-Key: 12345" \ -H "X-Auth-Token: abcdef12345" \ https://storage.sbg1.cloud.ovh.net/v1/AUTH_ProjectID
```

> [!primary]
>
> Le nom du header au complet est `X-Account-Meta-Temp-Url-Key` mais le client Swift utilise `Temp-Url-Key` car il ajoute automatiquement `X-Account-Meta`.
> 

Maintenant que la clé est configurée sur le compte, vérifiez que le **header** a correctement été appliqué grâce à la commande suivante en utilisant le client Swift :

```bash
swift stat
```

Ou avec curl :

```bash
curl -i -X HEAD \ -H "X-Auth-Token: abcdef12345" \ https://storage.sbg1.cloud.ovh.net/v1/AUTH_ProjectID
```

#### 2. Génération de l'URL

Les tâches suivantes peuvent être effectuées hors ligne. Nous allons générer l'adresse URL temporaire à l'aide d'une commande. Celle-ci devrait être personnalisée avec vos propres informations.

Par exemple, pour les éléments ci-dessous :

- **GET** : méthode HTTP.
- **60** : lien disponible pendant 60 secondes (vous pouvez personnaliser cette valeur).
- **/v1/AUTH_tenant/default/file** : le chemin vers votre fichier. Il n'est pas nécessaire d'ajouter le point d'accès à ce stade de la procédure.
- **12345** : à remplacer par votre clé.

```
swift tempurl GET 60 /v1/AUTH_tenant/default/file 12345
```

Vous obtenez la **tempURL** qui vous permet de visualiser le **chemin vers le fichier**, la **signature** et la **date d'expiration** comme expliqué précédemment.

```
v1/AUTH_tenant/default/file?temp_url_sig=8016dsdf3122d526afds60911cde59fds3&temp_url_expires=1401548543
```

Pour que votre URL fonctionne correctement, vous devrez ajouter l'adresse du point d'accès devant votre **tempURL** :

```
https://storage.sbg1.cloud.ovh.net/v1/AUTH_tenant/default/file?temp_url_sig=8016dsdf3122d526afds60911cde59fds3&temp_url_expires=1401548543
```

Dans l'exemple ci-dessus, cette adresse temporaire permet de télécharger le fichier **file** dans le conteneur **default** pendant 60 secondes, et cela sans authentification. Au-delà, l'URL ne fonctionnera plus.

> [!primary]
>
> Pour les utilisateurs les plus avancés, qui veulent générer des adresses temporaires sans le script **swift-temp-url**, il est possible d’avoir plus d’informations directement sur la documentation officielle d’OpenStack.

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com>.