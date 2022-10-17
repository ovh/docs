---
title: Object Storage - Utiliser S3 Object Storage avec S3cmd
slug: s3/s3cmd
excerpt: Découvrez comment configurer S3cmd afin de gérer vos buckets et objets
section: Tutoriels
order: 130
---

**Dernière mise à jour le 03/01/2022**

## Objectif

S3cmd est un outil de ligne de commande gratuit et un client de gestion des données dans des espaces de stockage qui utilisent le protocole S3, tels que S3 Object Storage, Google Cloud Storage ou DreamHost DreamObjects.

**Ce guide explique comment configurer S3cmd afin gérer vos buckets et objets.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) et/ou de contacter l'éditeur du logiciel si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.
>

## Prérequis

- Avoir créé un bucket
- Avoir créé un utilisateur et avoir défini les droits d'accès requis sur le bucket
- Connaître vos informations d'identification S3 (access_key et secret_access_key)

Consultez notre guide « [Débuter avec S3 Object Storage](https://docs.ovh.com/fr/storage/s3/debuter-avec-s3/) » pour plus de détails.

## En pratique

Pour configurer s3cmd, exécutez la commande suivante :

```bash
$ s3cmd --configure

Enter new values or accept defaults in brackets with Enter.
Refer to user manual for detailed description of all options.

Access key and Secret key are your identifiers for Amazon S3. Leave them empty for using the env variables.
Access Key: `<access_key>`
Secret Key: `<secret_key>`
Default Region [US]: `<region_in_lowercase>`

Use "s3.amazonaws.com" for S3 Endpoint and not modify it to the target Amazon S3.
S3 Endpoint [s3.amazonaws.com]: `s3.<region_in_lowercase>.perf.cloud.ovh.net`

Use "%(bucket)s.s3.amazonaws.com" to the target Amazon S3. "%(bucket)s" and "%(location)s" vars can be used
if the target S3 system supports dns based buckets.
DNS-style bucket+hostname:port template for accessing a bucket [%(bucket)s.s3.amazonaws.com]: `<bucket>.s3.<region_in_lowercase>.perf.cloud.ovh.net`

Encryption password is used to protect your files from reading
by unauthorized persons while in transfer to S3
Encryption password: `<passphrase>`      
Path to GPG program [/usr/bin/gpg]:
When using secure HTTPS protocol all communication with Amazon S3
servers is protected from 3rd party eavesdropping. This method is
slower than plain HTTP, and can only be proxied with Python 2.7 or newer
Use HTTPS protocol [Yes]:

On some networks all internet access must go through a HTTP proxy.
Try setting it here if you can\'t connect to S3 directly
HTTP Proxy server name:


New settings:
  Access Key: ACCESS_KEY
  Secret Key: SECRET_KEY
  Default Region: sbg
  S3 Endpoint: s3.sbg.perf.cloud.ovh.net
  DNS-style bucket+hostname:port template for accessing a bucket: hp-bucket.s3.sbg.perf.cloud.ovh.net
  Encryption password: passphrase
  Path to GPG program: /usr/bin/gpg
  Use HTTPS protocol: True
  HTTP Proxy server name:
  HTTP Proxy server port: 0

Test access with supplied credentials? [Y/n]
Please wait, attempting to list all buckets...
Success. Your access key and secret key worked fine :-)

Now verifying that encryption works...
Success. Encryption and decryption worked fine :-)

Save settings? [y/N] y
Configuration saved to '/home/user/.s3cfg'  
```

S3cmd est maintenant prêt à être utilisé.

**Exemples de commande**

Lister tous les buckets :

```bash
$ s3cmd ls
```

Créer un nouveau bucket :

```bash
$ s3cmd mb s3://BUCKET
```

Lister le contenu d'un bucket :

```bash
$ s3cmd ls s3://BUCKET[/PREFIX]
```

Synchroniser `/home/user/documents` vers un bucket :

```bash
$ s3cmd sync /home/user/documents s3://BUCKET[/PREFIX]
```

Copier un fichier `/home/user/file.txt` dans un bucket :

```bash
$ s3cmd put FILE [FILE...] s3://BUCKET[/PREFIX]
```

Télécharger un fichier `file.txt` depuis un bucket :

```bash
$ s3cmd get s3://BUCKET/OBJECT LOCAL_FILE
```

Vous trouverez sur le site officiel de S3cmd une documentation détaillée des actions possibles: [Documentation officielle S3cmd](https://s3tools.org/usage){.external}.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com){.external}.
