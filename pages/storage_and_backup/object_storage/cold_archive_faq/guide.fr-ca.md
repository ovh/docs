---
title: Cold Archive - FAQ
excerpt: FAQ sur la solution Cold Archive
updated: 2026-01-19
---

## Clarification sur les options associée à Cold Archive

### Quelles sont les deux manières de consommer Cold Archive ?

- **Cold Archive v1, une solution standalone (granularité au niveau du bucket)**, et
- **Cold Archive v2, une classe Object Storage permettant d'archiver des objets individuellement au sein d'un bucket**.

Bien qu'il existe deux manières différentes de consommer Cold Archive, nous continuons à faire référence à la solution sous le nom de « Cold Archive » dans tous les documents destinés aux utilisateurs, y compris la page produit et dans l'espace client, sans mentionner explicitement 'v1' ou 'v2'.

### Qu'est-ce que Cold Archive v1 ?

Cold Archive v1 est une solution standalone **introduite en 2023** qui **archive des buckets entiers** sur des bandes physiques. Cette méthode est toujours disponible pour les utilisateurs qui l'utilisaient avant novembre 2025, mais elle n'est plus disponible pour de nouveaux utilisateurs depuis l'espace client OVHcloud, sans que cela affecte les utilisateurs existants. Les API continuent de fonctionner normalement et les données restent sécurisées et disponibles à tout moment. Nous modifions uniquement la manière dont les utilisateurs accèdent aux objets et les gèrent.

### Qu'est-ce que Cold Archive v2 ?

Depuis **novembre 2025**, Cold Archive v2 est disponible comme une classe Object Storage **permettant d'archiver individuellement des objets au sein d'un bucket compatible S3<sup>1</sup>**. Cette fonctionnalité est désormais directement disponible depuis l'espace client OVHcloud, dans la section `Object Storage`, où vous pouvez téléverser des objets dans la classe Cold Archive ou utiliser des règles de lifecycle pour déplacer des données vers la classe Cold Archive. À ce jour, Cold Archive v2 n'est disponible que depuis la région Paris 3-AZ (eu-west-par). Retrouvez plus d'informations sur la géo-disponibilité du service Object Storage sur [cette page](/pages/storage_and_backup/object_storage/s3_location).

### Quelles sont les principales différences entre Cold Archive v1 et v2 ?

La principale différence est que Cold Archive v1 archive **des buckets entiers**, tandis que Cold Archive v2 permet **d'archiver des objets individuellement** au sein d'un bucket.
Du point de vue de la restauration, la granularité est également différente : d'une part, avec Cold Archive v1, la restauration est effectuée pour l'ensemble du bucket (plus d'informations [ici](/pages/storage_and_backup/object_storage/cold_archive_overview)), tandis que pour Cold Archive v2, la restauration est disponible à l'objet (plus d'informations [ici](/pages/storage_and_backup/object_storage/s3_restoring_objects)).

#### Tableau comparatif

| Sujet | Cold Archive v1 | Cold Archive v2 |
| ------ | ------ | ------ |
| Présentation |  solution standalone introduite en 2023 qui archive des buckets entiers sur des bandes physiques | nouvelle classe Object Storage qui permet d'archiver des objets individuellement |
| Granularité | au bucket : l'ensemble du bucket est archivé/restauré | à l'objet : un objet unique peut être archivé/restauré |
| Disponibilité | accessible via la région rbx-archive uniquement | actuellement, depuis eu-west-par (Paris, FR) uniquement |
| Compatibilité S3 | limitée, les détails peuvent être trouvés [ici](/pages/storage_and_backup/object_storage/cold_archive_getting_started) | complète (réplication asynchrone, lifecycle, versioning, object lock...) |
| Facturation | Object Storage Standard pour le stockage temporaire - frais de suppression anticipée (durée de stockage minimale de 180 jours) - frais de restauration - minimum 1 Tio par bucket - voir [tarification](/links/public-cloud/prices-old-prices) | frais de suppression anticipée (durée de stockage minimale de 180 jours) - frais de restauration - voir [tarification](/links/public-cloud/prices) |
| Statut | non disponible pour les nouveaux clients depuis novembre 2025 - support à long terme pour les utilisateurs existants | disponible dans la région eu-west-par (Paris, FR) depuis novembre 2025 |

### Cold Archive v1 est-il toujours disponible pour les nouveaux utilisateurs ?

Depuis novembre 2025, Cold Archive v1 n'est plus disponible pour les nouveaux utilisateurs depuis l'espace client OVHcloud, bien qu'il soit toujours en production pour les utilisateurs existants.
En d'autres termes, avant novembre 2025, si un projet Public Cloud avait au moins un conteneur Cold Archive, l'entrée `Cold Archive` dans l'espace client OVHcloud reste disponible.
Enfin, les API continuent de fonctionner normalement et les données restent sécurisées et disponibles à tout moment. Nous modifions uniquement la manière dont les utilisateurs accèdent aux objets et les gèrent.

### Comment accéder à Cold Archive v2 ?

Cold Archive v2 est directement disponible depuis l'espace client OVHcloud pour un bucket Object Storage, où vous pouvez téléverser des objets dans la classe Cold Archive ou utiliser des règles de lifecycle pour déplacer des données vers la classe Cold Archive.
**À ce jour, Cold Archive v2 n'est disponible que depuis la région Paris 3-AZ (eu-west-par).**

### Quels sont les avantages de Cold Archive v2 ?

Cold Archive v2 offre davantage de flexibilité et de granularité, vous permettant d'archiver des objets individuellement au sein d'un bucket, plutôt que des conteneurs entiers.

### Puis-je migrer mes conteneurs Cold Archive v1 existants vers Cold Archive v2 ?

Non, le processus d'archivage étant différent et géré selon une granularité différente, la migration de Cold Archive v1 vers Cold Archive v2 n'est pas possible.

### Y a-t-il des différences de prix entre Cold Archive v1 et v2 ?

Oui. Tout d'abord, les deux options prévoient des frais de suppression anticipée (associés à une durée de stockage minimale de 180 jours) et des frais de récupération/restauration. Cependant, les frais de stockage et de récupération des données diffèrent entre Cold Archive v1 et v2. Pour connaître les prix officiels, consultez [cette page](/links/public-cloud/prices).

## Informations générales

### Quels sont les cas d'usage adaptés au service de stockage Cold Archive ? 

La classe de stockage Cold Archive est un service de stockage objet (*Object Storage*) adapté au stockage de longue durée. Il est adapté aux cas d'usage suivants :

- stockage long terme pour des raisons légales ;
- renforcement de plan de résilience, mise en place d'une stratégie 3+2+1 ;
- stockage volumineux de media vidéos, photo.

Cette classe de stockage, facilement accessible via l'API compatible S3, est recommandée si vos données sont stockées pour une durée supérieure à 6 mois sans besoin particulier de restauration (moins d'une restauration par an).

Son design est hautement résilient (4 centre de données dédiés), à bas coût, durable (la durée de vie d'une bande physique est de 16 ans). En contrepartie, il vous faudra patienter 48 heures lors d'une demande de restauration des données.

Retrouvez une présentation de l'offre sur [cette page](/pages/storage_and_backup/object_storage/cold_archive_overview).

### Comment utiliser le service pour la première fois ? 

Pour utiliser le service, les prérequis sont les suivants :

- Avoir un [projet Public Cloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project) dans votre compte OVHcloud. 
- Etre connecté à votre [espace client OVHcloud](/links/manager).
- Avoir créé un [utilisateur Object Storage](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage).

### Quelles sont les fonctionnalités disponibles avec Cold Archive ?

L'ensemble des fonctionnalités de nos classes de stockage Object Storage sont supportées par Cold Archive (v1 et v2). Vous trouverez la liste des fonctions sur [cette page](/pages/storage_and_backup/object_storage/s3_s3_compliancy).

Quelques opérations sont disponibles spécifiquement pour cette classe de stockage : archivage (sur Cold Archive v1), restauration (sur Cold Archive v1 et v2), statut du conteneur (sur Cold Archive v1 et v2), suppression de l'archive (sur Cold Archive v1).

## Cold Archive v1 - Archivage et restauration

### Comment téléverser des données dans un conteneur pour Cold Archive v1 ?

Vous créez un conteneur/bucket Object Storage Standard.

Veillez à utiliser l'endpoint correspondant à ce service : [https://s3.rbx-archive.io.cloud.ovh.net/](https://s3.rbx-archive.io.cloud.ovh.net/).

Après sa création, un bucket est en lecture / écriture.

Vous téléversez ensuite des fichiers dans ce conteneur via l'API compatible S3, CLI ou SDK.

### Comment archiver un conteneur ?

Vous archivez le conteneur depuis l'espace client OVHcloud, via l'API compatible S3, CLI ou SDK. 

Dans l'espace client OVHcloud, l'action est réalisée en activant le bouton `Archiver`{.action}. 

Après cette requête, le bucket n’est pas encore archivé. L’archivage sur les bandes prendra un certain temps. A partir de cette commande et jusqu’à une restauration, le bucket ne peut accepter aucune requête de lecture ou d’écriture sur les objets (lister les objets est toujours autorisé).

Par API, les commandes sont décrites dans [notre documentation](/pages/storage_and_backup/object_storage/cold_archive_getting_started).

### Comment restaurer une archive ?

Vous avez la possibilité de restaurer une archive afin de rendre la donnée disponible en lecture dans le conteneur Object Storage d'origine. Cette action ne supprime pas l'archive sur les cassettes.

Dans l'interface utilisateur, cliquez sur `Restaurer une archive`{.action}.  

Après cette requête, le bucket est en statut `restoring` le temps de la restauration. Celle-ci peut durer jusqu'à 48h.

Une fois la restauration terminée, le conteneur est en status `restored`. L’accès aux objets sera en lecture seule (l’écriture est interdite). Les objets sont disponibles à la lecture pendant 30 jours. Au delà de cette période, le conteneur est à nouveau en statut `archived` et les objets ne sont plus accessibles en lecture.

### Comment supprimer une archive ?

Dans l'interface utilisateur, vous supprimez votre archive en sélectionnant les boutons `Vider l'archive`{.action}.

Après cette requête, les objets du bucket ne sont pas encore supprimés.<br>
La suppression des objets prendra un certain temps.<br>
Une fois les objets supprimés, le bucket peut être supprimé en sélectionnant `Supprimer le conteneur`{.action}.

Retrouvez le descriptif des commandes par API dans notre guide « [Premiers pas avec Cold Archive](/pages/storage_and_backup/object_storage/cold_archive_getting_started) ».

### Comment consulter le contenu de mon archive ?

Les metadata sont disponibles en lecture et non facturées. Il est possible de les consulter à tout moment du cycle de vie, même lorsque le conteneur est archivé.

### Existe-t-il une limitation en volume ? 

Un conteneur ne pourra pas être archivé s'il dépasse la taille de 100 Tio.

Nous n’avons pas de limitation sur le nombre d’objets. Avoir beaucoup de petits objets aura un impact sur le temps d’archivage/restauration.

A volume équivalent, un bucket avec beaucoup de petits objets sera plus long à archiver/restaurer qu’un bucket avec de gros objets.

### Combien de temps dure l'archivage et la restauration d'un conteneur ?

Le temps d'archivage et de restauration dépend du volume de données et du nombre d'objets.

Le temps de restauration dépend du volume de données et du nombre d'objets.

Pour un volume de quelques TB, cela peut prendre quelques minutes ou quelques heures.

C’est pourquoi le SLA est à 48h bien qu'en réalité le délai peut parfois être bien plus court.

## Téléchargement de volume de données

### Est-ce que je peux archiver mes données provenant d'un autre cloud provider ?

Oui, vous pouvez utiliser la classe de stockage Cold Archive pour archiver vos données sauvegardées chez un autre cloud provider.

Par exemple, vous installez un serveur, vous paramétrez Rclone pour synchroniser vos fichiers d'un Object Storage (cloud provider tiers) vers OVHcloud Object Storage, en suivant le guide : [Object Storage - Utiliser Object Storage avec Rclone](/pages/storage_and_backup/object_storage/s3_rclone).

### Comment télécharger de larges volumes ?

Le service Object Storage est conçu pour recevoir un grand volume de données.

Comme la connexion est limitée à 1Gbps, vous devez définir un téléchargement en plusieurs parties avec 10 connexions en parallèle.

Pour télécharger 8PB par exemple, cela prendra environ 15 jours avec une bande passante disponible de 5 Gbit/s.

### Est-il possible de recevoir une copie physique de l'archive ?

Nous n'offrons pas ce service. Les archives sont conservées dans des cassettes magnétiques *off line* mises à disposition dans des librairies situées dans 4 centre de données basés en France et dédiés au stockage d'archives.

## Facturation

### Comment est facturé le service Cold Archive ? 

La facturation se fait au volume en Gio par heure.

#### Cold Archive v1

Pendant la phase de téléchargement, vos volumes de stockage sont facturés au prix de la classe de stockage **Object Storage - Standard**.

Après archivage du conteneur (*put-archive*), vos volumes de données sont facturés au prix de la classe de stockage **Cold Archive**.

La facturation s'arrête dès lors que l'archive est supprimée (*delete-ovh-archive*).

Une réduction de 7% est appliquée pour un volume de données supérieur à 3 Po.

Le montant minimum facturé pour l'archivage est de 1 Tio. Même si la volumétrie totale du bucket est inférieure à 1 Tio, elle sera facturée pour 1 Tio.

#### Cold Archive v2

Lors du téléchargement d'objets dans la classe Cold Archive, les objets sont facturés au tarif Cold Archive disponible sur [cette page](/links/public-cloud/prices).
Cold Archive v2 est facturé à partir du premier octet.

### Y a-t-il une durée de stockage minimale ?

Oui, il s'agit de la durée minimale pendant laquelle un objet doit être stocké dans une classe de stockage concernéee. La durée de stockage minimale pour Cold Archive est de 180 jours.

En cas de suppression anticipée, via une requête `delete-ovh-archive`{.action} sur Cold Archive v1 ou des requêtes `delete-object`{action} sur Cold Archive v2, des frais proportionnels aux jours restants sont appliqués. Sur Cold Archive v2, soyez prudent avec les buckets non versionnés, si l'objet est écrasé, la nouvelle écriture sera considérée comme une suppression de la version actuelle de l'objet et les frais mentionnés seront également appliqués.

### Exemples de facturation pour Cold Archive v1

#### Cas d'usage n°1

- Volume de données: 10 Tio. 
- Je téléverse mes données vers Object Storage Standard (Object Storage temporaire).
- 7 jours après l'upload de mes données, je lance l'archivage (*put-archive*).
- Après 8 mois je supprime mon archive.
- Facturation : 
    - (7€ x 7/30 + 1,3 € x 21/30) x 10 Tio = 25€ le premier mois
    - puis pendant 7 mois : 1,3 € x 10 Tio = 13 € /mois

#### Cas d'usage n°2

- Volume de données : 10 Tio. 
- Je téléverse mes données vers Object Storage Standard (Object Storage temporaire).
- 7 jours après l'upload de mes données, je lance l'archivage (*put-archive*).
- Après 4 mois je supprime mon archive.
- Facturation : 
    - (7€ x 7/30 + 1,3 € x 21/30) x 10 Tio = 25€ le premier mois
    - les mois suivants : 1,3 € x 10 Tio = 13 € /mois
    - le dernier mois (mois 4, c'est à dire 2 mois avant la fin de période d'engagement) : 1,3 € x 10 Tio = 13 €  + 2 mois x 1,3 € x 10 Tio = 39 €

### Quel est le prix de la bande passante ?

L'ingress et l'egress sont gratuits chez OVHcloud avec nos services Object Storage.

## Durabilité  

### Pourquoi OVHcloud a choisi la bande magnétique comme support de stockage ?

Les bandes magnétiques sont construites pour durer plusieurs décennies (contrairement à une moyenne de cinq ans pour les disques modernes). Hors phases de lecture et d’écriture, les cartouches ne consomment pas d’électricité. Cela permet une économie d’énergie de plus de 95 % par rapport à une baie de disques similaire.

### Quelle est la politique de gestion des bandes magnétiques ?

OVHcloud offre un service managé. OVHcloud se charge du remplacement des bandes magnétiques lorsque celles-ci arrivent en fin de vie ou de génération.

## Sécurité

### Puis-je protéger mes données en transit ?

Pour protéger les données contre un vol, la connexion entre un service Object Storage d'un fournisseur tiers « *from* » et l'Object Storage d'OVHcloud « *to* » est chiffrée, protégée par https.

En complément, nous vous recommandons de chiffrer vos données avant de les envoyer. Vous pouvez utiliser plusieurs options de chiffrement. Retrouvez-les en détails [ici](/pages/storage_and_backup/object_storage/s3_encrypt_your_objects_with_sse_c).

### Les données sont-elles chiffrées ?

Oui, les données sont chiffrées à la source au niveau du serveur Object Storage.

## Identité et gestion des rôles avec Cold Archive v1

### Quels sont les rôles pouvant être paramétrés pour contrôler l'accès aux ressources Object Storage ?

Vous avez à votre disposition 4 niveaux d'identifiants :

- L'utilisateur administrateur (communément appelé *NIC admin*) 
- L'utilisateur de facturation (communément appelé *NIC billing*)
- L'utilisateur OpenStack
- Un utilisateur Object Storage

| ID | Rôle |
| --- | --- |
| NIC admin | Administrator<br>Billing |
| NIC billing | Billing |
| NIC technical | Administrator |
| OpenStack user | (1) Administrator<br>(2) Object Storage |
| Object Storage user (Object Storage credentials) | 4 rôles<br>(1) Administrator<br>(2) Read only<br>(3) Read<br>(4) Deny<br><br>Seul le rôle administrateur a accès aux actions de tiering (archive, delete, restore) |

## Résilience

### Quel est le niveau de résilience des données ? 

Le service Cold Archive est conçu autour de 4 centres de données situés à plus de 100 km les uns des autres en France.

La redondance des données est assurée grâce à un mécanisme d'Erasure Coding. Les données peuvent être récupérées après la perte complète d'un centre de données et une panne matérielle dans un deuxième centre de données, offrant un niveau de résilience sans précédent sur le marché.

![redondance](images/Cold-Archive-Architecture.png){.thumbnail}

### Quel est le SLA du service ?

Le SLA du service est disponible sur [cette page](/links/terms-conditions-contracts).

Sur Cold Archive v1, il correspond au SLA de disponibilité du service Object Storage (endpoint `rbx-archive`) et des fonctionnalités associées (API compatible S3 et tiering).

## Aller plus loin

Découvrez notre chaîne dédiée Discord : <https://discord.gg/ovhcloud>. Posez vos questions, faites vos commentaires et interagissez directement avec l’équipe qui conçoit nos services de stockage et de sauvegarde.

Échangez avec notre [communauté d'utilisateurs](/links/community).

<sup>1</sup> : S3 est une marque déposée appartenant à Amazon Technologies, Inc. Les services de OVHcloud ne sont pas sponsorisés, approuvés, ou affiliés de quelque manière que ce soit.
