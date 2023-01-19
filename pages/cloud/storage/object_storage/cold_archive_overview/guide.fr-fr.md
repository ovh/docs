---
title: Cold Archive - Overview
slug: cold-archive/overview
excerpt: Discover the service, understand the capabilities and billing
section: Cold Archive Storage Class Specifics
order: 010
---

**Dernière mise à jour le 17 janvier 2023**

## Objectif

OVHcloud Cold Archive est une classe de stockage conçue pour un stockage à long terme

- Conservation des données pour une durée > 8 mois
- Archive immuable, les données ne peuvent pas être mises à jour après avoir été archivées
- A tout moment vous avez accès aux métadonnées toujours en ligne pour consultation. Vous pouvez récupérer les données à la demande dans les 48 heures lorsque vous en avez besoin.

La conception matérielle est spécifiquement conçue pour ce cas d'utilisation, afin de fournir une plate-forme de confiance avec le meilleur rapport résilience/prix

- Sans limite de volume jusqu'à plusieurs pétaoctets de données
- Basé sur le stockage sur bande magnétique pour une longue durée (> 10 ans) et une faible consommation de carbone
- Au sein d'une architecture hautement résiliente de plusieurs centres de données

Ce service est adapté à votre entreprise

- Archivage réglementaire et de conformité
- Préservation des actifs multimédias
- Stockage de données scientifiques
- Conservation des données sensibles
- Archivage des informations de santé
- Archivage des informations financières
- Archivage des informations du secteur public

Le service vous permet de vous concentrer sur la création et le déploiement d'applications cloud tandis qu'OVHcloud s'occupe de l'infrastructure et de la maintenance du service.

**Ce guide explique les concepts de la classe de stockage.**

## Concepts

Le service est entièrement géré par OVHcloud et accessible via l'API S3

**Opération en 3 étapes**

1. Stockez d'abord vos données dans un bucket de la région RBX,
2. Archivez-le dans des bandes.
3. Restaurez vos données ou/et supprimez votre archive.

![Cold Archive concept](images/cold_archive_overview-20230117154349550.png){.thumbnail}

## Téléchargement des données

Créer une archive au niveau du bucket

Archivez et récupérez vos données avec la méthodologie de votre choix

- par CLI
- avec rClone
- avec les outils du marché

La limite d'un bucket est de 100 To

## Cycle de vie des données

Au cours du cycle de vie, les données sont placées au niveau d' Object Storage pour un dépôt ou une récupération ou stockées dans une bande magnétique pour un archivage de longue durée

Vous pouvez suivre les différentes étapes de vos données par le statut de votre bucket

| État de l'archive (= bucket) | Description | Autorisations d'objets | Durée | Tarification des données |
| --- | --- | --- | --- | --- |
| **`None`** | Aucune configuration Intelligent-Tiering n'a encore été appliquée au compartiment. | Tous | illimité | Standard |
| **`Archiving`** | Archivage en cours sur bandes. | Liste | <48h | Archive |
| **`Archived`** | Objets archivés sur bandes uniquement. | Liste | illimité | Archive |
| **`Restoring`** | Restauration en cours à partir des bandes. | Liste | <48h | Archive |
| **`Restored`** | Objets restaurés et accessibles. | Lecture seule + Liste | 30 jours | Archive |
| **`Deleting`** | Suppression des objets des bandes (et des disques si restaurés) en cours. | Liste | <48h | Archive |
| **`Flushed`** | Le bucket est vide et peut être retiré en toute sécurité. | Liste (bucket vide) | N / A | Archive |

## Performances réseau, téléchargement et récupération

Cold Archive est un service basé sur Object Storage - API S3. Les performances et les limitations (nombre de contenus, compte, bande passante maximale par connexion, nombre de requêtes par seconde sur le bucket, taille maximale par objet / mpu / part) etc) sont disponibles [ici](https://docs.ovh.com/fr/storage/object-storage/s3/limitations/)

Pour télécharger vos données la bande passante maximale est de **1 Gbps par connexion logique** et le nombre de connexion utilisable en parallèle est **illimité.**

Le temps de téléchargement dépend de votre connexion Internet.

Quelques exemples

- J'ai une connexion Internet de 1 Gbps, je télécharge une archive de 1 To, cela prendra 2,2 heures.
- J'ai une connexion internet de 5 Gbps, je télécharge une archive de 1To, cela prendra 26 minutes.
- J'ai une connexion internet de 5 Gbps, je télécharge une archive de 100 To, cela prendra 1,9 jours.

**Temps de récupération des données**

Le délai d'accessibilité des données dépend du volume de données. Par exemple, pour une récupération de plusieurs centaines de To, le délai moyen est de 48 heures. Pour un volume de quelques To, cela peut être compris entre quelques minutes et quelques heures

## RSE, Certifications & Conformité

### Conformité

Le service sera certifié HDS et ISO 27001. Vous pouvez suivre ces certifications sur notre page roadmap publique : [https://github.com/ovh/public-cloud-roadmap/projects/3?card\_filter\_query=label%3Astorage](https://github.com/ovh/public-cloud-roadmap/projects/3?card_filter_query=label%3Astorage)

### Faible consommation de carbone

En dehors de la phase de lecture et d'écriture, les cartouches ne consomment pas d'électricité. Cela permet d'économiser plus de 95% d'énergie par rapport à une baie de disques similaire.

### Durée

Les bandes magnétiques sont conçues pour durer des décennies (par opposition à une moyenne de cinq ans pour les disques modernes).

### Sécurité

Chiffrement

L'utilisation du chiffrement côté serveur avec des clés de chiffrement fournies par le client (SSE-C) vous permet de définir vos propres clés de chiffrement.

Lorsque vous chargez un objet, Object Storage - S3 API utilise la clé de chiffrement que vous fournissez pour appliquer le chiffrement AES-256 à vos données. Lorsque vous récupérez un objet, vous devez fournir la même clé de chiffrement dans le cadre de votre demande. Object Storage - S3 API vérifie d'abord que la clé de chiffrement que vous avez fournie correspond, puis déchiffre l'objet avant de vous renvoyer les données de l'objet.

### Immutabilité par WORM

Le stockage immuable est souvent obligatoire pour des raisons légales et une certification de ne pas modifier ou supprimer les données après leur écriture.

Le stockage immuable est un moyen de se protéger contre les logiciels malveillants et les attaques.

Le service Cold archive est WORM (**W**rite **O**nce, **R**ead **M**any) par conception.

### Réseau privé / public

Object Storage est disponible via un point de terminaison public (IP publique).

## Tarification

<!--
Nos prix sont décrits [ici](https://www.ovhcloud.com/fr/public-cloud/prices/) .
-->

La solution Cold Archive est facturée en fonction de l'espace d'archivage utilisé (sur bandes magnétiques) et de l'espace de dépôt utilisé (espace Object Storage) avec une granularité de 1 Go. Pour assurer sa lisibilité, le prix est affiché en Go/mois, mais la granularité de facturation est au Go/heure, considérant qu'il y a en moyenne 720 heures dans un mois.

La durée minimale d'archivage est de 180 jours. En cas de suppression d'une archive dans ce délai d'engagement, le client se verra facturer un supplément calculé comme suit :  
(180 jours - nombre de jours pendant lesquels le service a été utilisé) x prix de la classe de stockage.

Il est possible de commencer à archiver un bucket avec moins de 1 To de données, mais l'action d'archivage sera facturée au prix de 1 To.

## Aller plus loin

Exploitez votre cycle de vie et apprenez à créer un bucket, archiver, récupérer des données, répertorier les métadonnées, en suivant le guide [ici](https://docs.ovh.com/fr/storage/object-storage/cold-archive/getting-started/) .

Toute la documentation Object Storage est listée [ici](https://docs.ovh.com/fr/storage/object-storage/) .

Rendez-vous sur notre chaîne Discord dédiée : [https://discord.gg/ovhcloud](https://discord.gg/ovhcloud) . Posez des questions, fournissez des commentaires et interagissez directement avec l'équipe qui construit nos services de stockage et de sauvegarde.

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com/>.
