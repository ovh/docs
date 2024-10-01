---
title: Cold Archive - FAQ
excerpt: FAQ sur la solution Cold Archive
updated: 2023-09-12
---

## Informations Générales

### Quels sont les cas d'usage adaptés au service de stockage Cold Archive ? 

La classe de stockage « Cold Archive » est un service de stockage objet (*Object Storage*) adapté au stockage de longue durée. Il est adapté aux cas d'usage suivants :

- stockage long terme pour des raisons légales ;
- renforcement de plan de résilience, mise en place d'une stratégie 3+2+1 ;
- stockage volumineux de media vidéos, photo.

Cette classe de stockage, facilement accessible par API S3, est recommandée si vos données sont stockées pour une durée supérieure à 6 mois sans besoin particulier de restauration (moins d'une restauration par an).

Son design est hautement résilient (4 datacentres), à bas coût, durable (la durée de vie d'une *tape* est de 16 ans). En contrepartie, il vous faudra patienter 48 heures lors d'une demande de restauration des données.

Retrouvez une présentation de l'offre sur [cette page](/pages/storage_and_backup/object_storage/cold_archive_overview).

### Comment  utiliser le service pour la première fois ? 

Pour utiliser le service, les prérequis sont les suivants :

- Avoir un [projet Public Cloud](/pages/public_cloud/compute/create_a_public_cloud_project) dans votre compte OVHcloud. 
- Etre connecté à votre [espace client OVHcloud](/links/manager).
- Avoir créé un [utilisateur S3](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage).

### Quelles sont les fonctions S3 disponibles avec la classe de stockage Cold Archive ? 

L'ensemble des fonctionnalités de nos classes de stockages Object Storage - S3 API sont supportées par le service Cold Archive. Vous trouverez la liste des fonctions sur [cette page](/pages/storage_and_backup/object_storage/s3_s3_compliancy).

Deux fonctions ont été désactivées (versioning et object lock) car, par design, un conteneur d'objets archivé a une seule version qui ne peut pas être modifiée.

4 opérations sont disponibles spécifiquement pour cette classe de stockage : archivage, restauration, statut du conteneur, suppression de l'archive.

## Archivage et restauration

### Comment télécharger la donnée dans un conteneur ?

Vous créez un conteneur, plus connu sous le nom de bucket, dans les standards de stockage objet.

Veillez à utiliser l'endpoint correspondant à ce service : [https://s3.rbx-archive.io.cloud.ovh.net/](https://s3.rbx-archive.io.cloud.ovh.net/).

Après sa création, un bucket est en lecture / écriture.

Vous téléversez ensuite des fichiers dans ce conteneur par API S3, CLI ou SDK.

### Comment archiver un conteneur ?

Vous archivez le conteneur depuis votre interface utilisateur, par API S3, CLI ou SDK. 

Dans l'interface utilisateur, l'action est réalisée en activant le bouton `Archiver`{.action}. 

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

Un conteneur ne pourra pas être archivé s'il dépasse la taille de 100 To.

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

Par exemple, vous installez un serveur, vous paramétrez Rclone pour synchroniser vos fichiers d'un Object Storage S3 (cloud provider tiers) vers OVHcloud S3 Object Storage, en suivant le guide : [Object Storage - Utiliser S3 Object Storage avec Rclone](/pages/storage_and_backup/object_storage/s3_rclone).

### Comment télécharger de larges volumes ?

Le service Object Storage est conçu pour recevoir un grand volume de données.

Comme la connexion est limitée à 1Gbps, vous devez définir un téléchargement en plusieurs parties avec 10 connexions en parallèle.

Pour télécharger 8PB par exemple, cela prendra environ 15 jours avec une bande passante disponible de 5 Gbit/s.

Bien qu'offrant une bande passante non garantie, l'internet public depuis les DC AWS vers le stockage objet OVHcloud fournit généralement une bande passante compatible avec de grands volumes.

### Est-il possible de recevoir une copie physique de l'archive ?

Nous n'offrons pas ce service. Les archives sont conservées dans des cassettes magnétiques *off line* mises à disposition dans des librairies situées dans 4 datacentres basés en France et dédiés au stockage d'archives.

## Facturation

### Comment est facturé le service Cold Archive ? 

La facturation se fait au volume en Go par heure.

Pendant la phase de téléchargement, vos volumes de stockage sont facturés au prix de la classe de stockage **Standard object storage - S3 API**.

Après archivage du conteneur (*put-archive*), vos volumes de données sont facturés au prix de la classe de stockage **Cold Archive**.

La facturation s'arrête dès lors que l'archive est supprimée (*delete-ovh-archive*).

Une réduction de 7% est appliquée pour un volume de données supérieur à 3 Po.

Retrouvez le détail de la tarification sur [cette page](https://www.ovhcloud.com/fr/public-cloud/prices/).

### Y a-t-il une durée minimum d'engagement ?

La facturation de l'archive s'accompagne d'un engagement minimum de 180 jours. 

Dans le cas où l'archive est supprimée avant les 6 mois, à une date entre 0 jours et 180 jours,  une pénalité est facturée de  : (180 jours - date) x 1,3€.

### Sur quel volume s'applique la réduction de tarif au volume  ? 

Le volume est calculé sur la capacité totale des buckets d'un projet Public Cloud (project ID).

### Exemple de facturation

#### Cas d'usage n°1

- Volume de données: 10 TB . 
- Je téléverse ma donnée dans l'object storage. 
- 7 jours après l'upload de ma donnée, je lance l'archivage (*put-archive*).
- Après 8 mois je supprime mon archive.
- Facturation : 
    - (7€ x 7/30 + 1,3 € x 21/30) x 10 TB = 25€ le premier mois
    - puis pendant 7 mois : 1,3 € x 10 TB = 13 € /mois

#### Cas d'usage n°2

- Volume de données : 10 TB. 
- Je téléverse ma donnée dans l'object storage. 
- 7 jours après l'upload de ma donnée, je lance l'archivage (*put-archive*).
- Après 4 mois je supprime mon archive.
- Facturation : 
    - (7€ x 7/30 + 1,3 € x 21/30) x 10 TB = 25€ le premier mois
    - les mois suivants : 1,3 € x 10 TB = 13 € /mois
    - le dernier mois (mois 4, c'est à dire 2 mois avant la fin de période d'engagement) : 1,3 € x 10 TB = 13 €  + 2 mois x 1,3 € x 10 TB = 39 €

### Quelle est la tarification de la bande passante ?

Le trafic interne entrant est gratuit.

Le trafic interne sortant est gratuit (trafic d'un serveur OVHcloud vers un serveur OVHcloud, incluant les serveurs des offres Public Cloud, Bare Metal Cloud, Hosted Private Cloud)

La bande passante externe d'OVHcloud vers l'extérieur est facturée. Les prix sont détaillés sur [cette page](https://www.ovhcloud.com/fr/public-cloud/prices/).

## Durabilité  

### Pourquoi OVHcloud a choisi la bande magnétique comme support de stockage ?

Les bandes magnétiques sont construites pour durer plusieurs décennies (contrairement à une moyenne de cinq ans pour les disques modernes). Hors phases de lecture et d’écriture, les cartouches ne consomment pas d’électricité. Cela permet une économie d’énergie de plus de 95 % par rapport à une baie de disques similaire.

### Quelle est la politique de gestion des bandes magnetiques ?

OVHcloud offre un service managé. OVHcloud se charge du remplacement des bandes magnétiques lorsque celles-ci arrivent en fin de vie ou de génération.

## Sécurité

### Puis-je protéger mes données en transit ?

Pour protéger les données contre un vol, la connexion entre un object storage S3 « *from* » et l'object storage OVHcloud « *to* » est chiffrée, protégée par https.

En complément, nous vous recommandons de chiffrer vos données avant de les envoyer.

### Les données sont elles chiffrées ?

Oui, les données sont chiffrées à la source au niveau du serveur Object Storage.

## Identité et gestion des rôles

### Quels sont les rôles pouvant être paramétrés pour contrôler l'accès aux archives ?

Vous avez à votre disposition 4 niveaux d'identifiants :

- L'utilisateur administrateur (communément appelé *NIC admin*) 
- L'utilisateur de facturation (communément appelé *NIC billing*)
- L'utilisateur OpenStack
- Un utilisateur S3

| ID | Rôle |
| --- | --- |
| NIC admin | Administrator<br>Billing |
| NIC billing | Billing |
| NIC technical | Administrator |
| OpenStack user | (1) Administrator<br>(2) Object Storage |
| S3 user (S3 credentials) | 4 rôles<br>(1) Administrator<br>(2) Read only<br>(3) Read<br>(4) Deny<br><br>Seul le rôle administrateur a accès aux actions de tiering (archive, delete, restore) |

## Resilience

### Quel est le niveau de résilience de la donnée ? 

Le service de stockage Cold Archive sauvegarde la donnée de manière redondante sur 4 datacentres situés à plus de 100 km les uns des autres en France.

La redondance de la donnée est effectuée par un mécanisme d'Erasure Coding 8+4. La donnée est récupérable après la perte complète d'un datacentre et une panne matérielle dans un deuxième datacentre, offrant ainsi un niveau de résilience inégalable sur le marché.

![redondance](images/Cold-Archive-Architecture.png){.thumbnail}

### Quel est le SLA du service ?

Le SLA du service est disponible sur [cette page](https://www.ovhcloud.com/fr/terms-and-conditions/contracts/).

Il correspond à la disponibilité du service Object Storage (endpoint RBX-archive) à 99,9% et des fonctions associées (API S3 et tiering).

## Aller plus loin

Découvrez notre chaîne dédiée Discord : <https://discord.gg/ovhcloud>. Posez vos questions, faites vos commentaires et interagissez directement avec l’équipe qui conçoit nos services de stockage et de sauvegarde.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.