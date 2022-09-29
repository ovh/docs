---
title: FAQ
slug: s3/faq
section: Object Storage S3 High Performance
order: 060
---

<style>
td:nth-of-type(1){
  white-space: nowrap;
}
</style>

**Dernière mise à jour le 27/09/2022**

## Stockage et backup - FAQ

### Questions générales

#### Qu’est ce que la solution Object Storage d’OVHcloud ?

Le stockage objet « Object Storage » est une famille d’offre de stockage proposant des espaces de stockage performant, scalable et sécurisé.

Les offres de stockage objet permettent de déposer à travers un point d’accès publique appelé « endpoint » des fichiers statiques (vidéos, images, fichiers web…) dans un espace illimité, pour les exploiter depuis une application ou pour les rendre accessibles sur le web. Ces espaces de stockages sont accessibles via une interface d’API standard S3 pour les classes de stockage Object Storage S3 et Swift pour les classes de stockages Object Storage SWIFT.

#### Dans quel cas d'usage utiliser une solution de stockage objet ?

Le stockage objet est adapté pour stocker de la donnée non structurée de manière illimité en volume et en temps, pour des cas d'usage comme les websites, les plate-forme d'ecommerce, le streaming de vidéos, les librairies d'images, l'analytique, les backups, les archives.

#### Quelle est la différence entre les classes de stockage objet S3 et les classes de stockage objet SWIFT  ?

Les classes de stockages Object Storage S3 sont largement compatibles avec le protocole S3 et bénéficie d'un design récent, performant et d'une bonne bande passante. Cette offre bénéficie régulièrement de mis à jour et de nouvelles fonctionnalités

Les classes de stockage SWIFT sont de génération plus anciennes et ne bénéficie plus d'evolutions. Elles sont accessibles à travers le protocole SWIFT d'OpenStack.

#### Comment savoir quelle classe de stockage est adaptée à mes usages ?

OVHcloud propose 3 classes de stockages S3 :

* **High Performance** pour vos applications exigentes en terme de latence et de consommation de bande passante
* **Standard**  pour vos stockages volumineux pour lesquelles vous recherchez une meilleurs ratio prix/performance comme par exemple pour des sites web, des librairie de partage d'images ou des back up ,
* **Cold Archive** pour vos archives.

Vous trouverez la description des classes des stockage [ici](https://docs.ovh.com/fr/storage/s3/choosing-a-suitable-storage-class/).

#### Quelles sont les fonctionnalités disponibles pour mes classes de stockage S3 ? 

Les classes de stockages Objet S3 bénéficie de fonctionnalités enrichies pour gérer au mieux votre donnée : gestion des profils utilisateurs S3, configuration des droits d'accès par objet, protection de la données avec immutabilité des bucket, gestion de version.
En roadmap de nouvelles fonctions sont à venir, nous vous invitons à consulter régulièrement notre roadmap public Github [ici](https://github.com/ovh/public-cloud-roadmap/projects/3).

#### Quelles sont les API S3 compatibles avec les classes de stockage Object Storage S3 ? 

Les classes de stockages objet S3 offrent un  large support des API S3. L'ensemble des API compatibles sont décrites [ici](https://docs.ovh.com/fr/storage/s3/choosing-a-suitable-storage-class/). 

#### Quels sont les outils compatibles  avec l'object storage S3 ? 

La majorité des outils du marché compatible avec du stockage S3 standard sont compatibles.

#### L'object Storage S3 peut-il fonctionner avec mes outils de gestion de back up ? 

Oui, l'object storage S3 est largement compatible avec les API S3 et peut être intégré avec les outils du marché  comme par exemple [Veeam](https://docs.ovh.com/fr/storage/s3/veeam/), [Owncloud](https://docs.ovh.com/fr/storage/s3/owncloud/), [Nextcloud](https://docs.ovh.com/fr/storage/s3/nextcloud/).

#### Comment est facturé le service ? 

L'Object Storage est facturé en fonction de l'espace de stockage utilisé avec une granularité de 1 Go. Pour assurer sa lisibilité, le prix est affiché au Go/mois, mais la granularité de la facturation est au Go/heure, en considérant qu’en moyenne il y a 720 heures dans un mois. Les prix sont disponible [ici](https://www.ovhcloud.com/fr/public-cloud/prices/).

### Accès & sécurité

#### Par quels API avoir accès aux offres de stockage ?

Nous avons conçu les classes de stockages S3 pour qu’il soit **compatible avec l’API S3**, considérée comme une référence dans le marché du stockage d’objets. Vous pouvez donc utiliser Object Storage avec la plupart des outils de gestion de données via les endpoints définis par région et par classe de stockage.

Munissez vous de vos clés d'accès S3 et accédez en ligne de commande aux différentes classes de stockage par commandes AWS-CLI ou s3cmd et autres ...

La liste des endpoints est disponible [ici](https://docs.ovh.com/fr/storage/s3/location/).

#### Peut-on avoir accès au service avec un réseau privé (vRack) ?

Les endpoints object storage sont disponibles à travers le réseau publique. La classe de stockage objet n'est pas disponible sur le réseau privé.

#### Puis-je gérer plusieurs profils d'utilisateurs ?

Il est possible de gérer plusieurs profils utilisateurs grace aux S3 Policies. Un guide est disponible [ici](https://docs.ovh.com/fr/storage/s3/debuter-avec-s3/).

#### Comment configurer les droits d'accès par objet ou par bucket ?

ll est possible de configurer des droits d'accès par profil utilisateur et par objet. Un guide est disponible [ici](https://docs.ovh.com/fr/storage/s3/gestion-des-identites-et-des-acces/).

ll n'est pas encore possible de configurer des droits d'accès par bucket. 

#### Est-ce que je peux chiffrer mes données ?

L'utilisation du chiffrement côté serveur avec des clés de chiffrement fournies par le client (SSE-C) vous permet de définir vos propres clés de chiffrement.

Lorsque vous chargez un objet, S3 Object Storage utilise la clé de chiffrement que vous fournissez pour appliquer le chiffrement AES-256 à vos données. Lorsque vous récupérez un objet, vous devez fournir la même clé de chiffrement dans le cadre de votre demande. S3 Object Storage vérifie d'abord que la clé de chiffrement que vous avez fournie correspond, puis déchiffre l'objet avant de vous renvoyer les données de l'objet.

<https://docs.ovh.com/fr/storage/s3/encrypt-your-objects-with-sse-c/>

#### Comment protéger mes backups ? 

Nous vous recommandons de protéger vos backups avec l'immutabilité, fonction disponible par l'API S3 object Lock.

Le verrouillage d'objet est une fonctionnalité qui vous permet de stocker des objets à l'aide d'un modèle Write Once, Read Many (WORM) et peut être utilisé dans des scénarios où il est impératif que les données ne soient pas modifiées ou supprimées après leur écriture.

<https://docs.ovh.com/fr/storage/s3/managing-object-lock/>

### Bande passante 

#### Quelle est la bande passante ? 

La bande passante est mutualisée et non garantie. Nous offrons un maximum de 1 Gbps / connexion en upload et download.

#### Comment est facturée la bande passante  ? 

Les prix sont définis et affichés sur la page web : <https://www.ovhcloud.com/fr/public-cloud/prices/#439>

Un serveur OVHCloud est un serveur opéré pour un service OVHCloud, par exemple un serveur de la gamme bare-Metal, Public Cloud, ou Hosted Private Cloud (Dedicated server/VPS/Public Cloud/Hosted Private Cloud/So you Start/Kimsufi/ADSL)

- Le trafic interne entrant est représenté par la donnée téléchargée d’un serveur OVHCloud vers un serveur OVHCloud
- Le trafic interne sortant est représenté par la donnée téléchargée d’un serveur OVHCloud vers un serveur OVHCloud
- Le trafic public entrant est représenté par la donnée téléchargée d’internet vers un serveur OVHCloud
- Le trafic public sortant est représenté par la donnée téléchargée d’un serveur OVHCloud vers internet

### Disponibilité

#### Quel niveau de disponibilité puis-je atteindre avec Object Storage ?

Lorsque le Service est indisponible ou connaît des dysfonctionnements pour lesquels la responsabilité d'OVHcloud peut être engagée, vous pouvez contacter les équipes d'OVHcloud et d'ouvrir un Ticket Incident à partir de votre Interface de Gestion.

OVHcloud s’engage à assurer les niveaux de Service relatifs à la disponibilité du Service tels que décrits dans les T&C consultables [ici](https://docs.ovh.com/fr/storage/s3/choosing-a-suitable-storage-class/).

### Durabilité

#### Quel est le niveau de fiabilité et de durabilité pour mes données ?

Les classes de stockage sont toutes prévues pour fournir une durabilité de 99,999 % (5x9) des objets sur une année donnée.

Les données et leurs informations complémentaires permettant de reconstruire la donnée (erasure coding) sont sauvegardés sur différentes zones de panne afin de garantir une résilience des données après l'arrêt ou la perte d'une zone de panne.

Comme dans n'importe quel environnement, la bonne pratique en vigueur que nous recommandons à tous nos clients est de conserver une sauvegarde des données et de mettre en place des protections contre les suppressions accidentelles ou malveillantes. Ainsi nous recommandons fortement de surveiller les autorisations d'accès, et de mettre en place de la réplication sur plusieurs régions, ainsi qu'une gestion des versions et le maintien de sauvegardes fonctionnelles et testées régulièrement. 

|  Classe de stockage | Durabilité |
|:---:|:---|
| Object Storage S3<br>High Performance | 99,999 % (5x9) |
| Object Storage S3<br>Standard Performance	| 99,999 % (5x9) |
| Object Storage S3<br>Cold Archive |  99,999999999 % (11x9)<br>Ce niveau de durabilité correspond à une perte moyenne annuelle prévue de 0,000000001 % des objets. Par exemple, si vous stockez 10 000 000 d'objets avec S3, vous pouvez vous attendre à perdre en moyenne un objet unique une fois tous les 10 000 ans. |
| Object Storage Swift<br>Standard Performance | 99,999 % (5x9) |
| Object Storage Swift<br>Cloud Archive | 99,999 % (5x9) |

### Archive

#### Comment  archiver des données avec la classe de stockage Cold Archive ? 

L'archivage des données se fait en deux étapes.

1. Premièrement vous uploadez vos données dans un bucket de la classe object storage standard destiné recevoir vos archives (endpoint : <https://s3.rbx.archive.cloud.ovh.net/>) 

2. Vous archivez vos données avec les API "put archive"

A tout moment vous pouvez désarchiver vos données "get archive" ou supprimer votre archive "delete archive" 

A tout moment, les metadonnées restent disponibles instantanément et consultables gratuitement sur la classe objet standard, vous permettant de consulter la liste de vos archives.

![Cold Archive Illustration](images/highperf-faq-20220927224152816.png)

#### Combien de temps ai-je besoin pour desarchiver mes données ?

Le désarchivage d'une archive est payant et peut prendre 48 heures pour que les premiers objets soient disponibles à nouveau sur la classe standard.

Le temps de disponibilité de la récupération des données dépend du volume de données. Par exemple, pour une récupération de plusieurs centaines de TB, le temps moyen est de 48 heures. Pour un volume de quelques To, cela peut aller de quelques minutes à quelques heures

#### Comment est facturé le service d'archive Cold Archive ? 

- La facture standard de stockage d’objets démarre lors du téléchargement des données dans la classe de stockage et s’arrête lors de l’archivage du bucket (API put-archive)
- La facture de stockage d'archive froid commence quand l'API put-archive est envoyée et est arrêtée quand une API archive-delete est envoyée

Le volume est calculé avec la capacité totale de tous les compartiments d'un ID de projet public cloud  

La remise est appliquée pour tous les volumes, lorsqu'elle est disponible.

#### Il y a-t-il une durée minimum d'engagement ?

Il n'y a pas de durée minimum d'engagement.

A l'exception de la classe Cold Archive où la durée minimale est de 180 jours. En cas de suppression d’une archive avant cette durée, date = date comprise entre 0 jour et 180 jours, un surcoût calculé par le client est facturé : `[180 jours - date] x prix` de la classe de stockage.

### Upload / download de données 

#### Comment répliquer mes données d'une region à une autre ? 

Vous pouvez choisir de synchroniser vos données d'une région à une autre en utilisant rClone [ici](https://docs.ovh.com/fr/storage/s3/rclone/).

#### Est-il possible de gérer les cycles de vie de la donnée ? 

Les options de lifecycle ne sont pas encore disponible. Nous vous invitons à suivre notre roadmap public sur Github pour être informé de sa sortie [ici](https://github.com/ovh/public-cloud-roadmap/projects/3).

### Performances

#### Comment uploader des volumes importants de données? 

Pour télécharger de gros volumes de données, il est recommandé de paralléliser les connexions. (multithread upload). Plusieurs requêtes sont en cours en parallèle et la bande passante est multipliée (1 Gbps par connexion). Vous trouverez plus de détail sur la méthodologie [ici](https://docs.ovh.com/fr/storage/s3/optimisez-l-envoi-de-vos-fichiers/).

#### Quelle est la bande passante disponible pour l'upload et le download ? 

La bande passante maximale est de 1gbps par connexion.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
