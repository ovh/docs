---
title : Object Storage - Héberger un site statique dans un bucket S3
excerpt: Apprenez à configurer un bucket S3 pour héberger un site web statique
updated: 2023-05-11
---

## Objectif

**Découvrez comment créer, configurer et activer un site statique hébergé dans un bucket S3.**

## Prérequis

- Un bucket S3 avec une ACL en lecture publique
- Vos ressources statiques (HTML, CSS, images, js, etc.)

## En pratique

### Étape 1 : téléverser les resources du site web

Un bucket S3 est un conteneur d'objets « plat ». Il ne fournit aucune organisation hiérarchique comme le système de fichiers de votre ordinateur. Cependant, vous pouvez créer une hiérarchie logique en utilisant des noms de clés d'objet qui impliquent une structure de dossiers.

**Exemple** :

- `index.html`: l'objet est la racine du bucket.
- `doc/page1.html`: l'objet se trouve dans un sous-dossier.

> [!warning]
>
> - Les pages HTML doivent être téléversées avec un ContentType de type text/html.
> - Les fichiers CSS doivent être téléversés avec un ContentType de type text/css.
> - Le contenu de votre bucket doit être public, c'est à dire que toutes les ressources doivent avoir un ACL "public-read".

### Étape 2 : configuration d'un site sur un bucket

Pour activer votre hébergement web, il est nécessaire de téléverser la configuration du site web.

**Exemple** :

```sh
aws --profile user-aws s3 website s3://my-website/ --index-document index.html --error-document error.html
```

ou

```sh
aws --profile user-aws s3api put-bucket-website --bucket my-website --website-configuration file://website-conf.json
```

Si vous utilisez les commandes de bas niveau AWS avec website-conf.json :

```sh
{
    "IndexDocument": {
        "Suffix": "index.html"
    },
    "ErrorDocument": {
        "Key": "error.html"
    }
}
```

### Étape 3 : test du endpoint

Une fois la configuration du site web téléversée avec succès, vous pouvez tester le endpoint dans votre navigateur web.
Le endpoint par défaut dépendra de la région de votre bucket.

```sh
http://{bucket-name}.s3-website.{region}.{storage_class}.cloud.ovh.net
```

Où `storage_class` est :

- "io" si vous utilisez un bucket standard.
- "perf" si vous utilisez un bucket High Performance.

> [!primary]
> Si vous souhaitez utiliser un endpoint personnalisé, vous devrez fournir votre propre nom de domaine.
> Retrouvez plus d'informations sur les offres de noms de domaine OVHcloud sur [le site OVHcloud](https://www.ovhcloud.com/fr/domains/).

> [!warning]
> - Assurez-vous que la région dans laquelle vous hébergez votre bucket supporte la classe de stockage que vous choisissez. Vous pouvez consulter la liste des classes de stockage prises en charge par région [ici](/pages/cloud/storage/object_storage/s3_location).
> - Par défaut, les endpoints d'un site OVHcloud S3 Object Storage ne prennent pas en charge le HTTPS. Afin d'activer le HTTPS, vous pouvez utiliser le service OVHcloud Load Balancer pour créer un proxy pour votre site web. Pour plus d’informations, vous pouvez consulter la section "Aller plus loin" de ce guide.


## Aller plus loin

[Activer HTTPS sur un site statique S3 avec un fqdn personnalisé](/pages/cloud/storage/object_storage/s3_website_https)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
