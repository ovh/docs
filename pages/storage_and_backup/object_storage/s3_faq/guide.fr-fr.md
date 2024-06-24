---
title: Object Storage - FAQ
excerpt: "FAQ sur la solution Object Storage"
updated: 2024-06-21
---

## Questions générales

### Qu’est ce que la solution Object Storage d’OVHcloud ?

Le stockage objet «Object Storage» est une famille d’offres de stockage proposant des espaces de stockage performant, scalable et sécurisé.

Les offres de stockage objet permettent de déposer, à travers un point d’accès public appelé « endpoint », des fichiers statiques (vidéos, images, fichiers web, etc...) dans un espace illimité, pour les exploiter depuis une application ou pour les rendre accessibles sur le web. Ces espaces de stockages sont accessibles via une interface d’API standard S3 pour les classes de stockage Object Storage S3 et Swift pour les classes de stockage Object Storage SWIFT.

### Dans quel cas d'usage utiliser une solution de stockage objet ?

Le stockage objet est adapté pour stocker de la donnée non structurée de manière illimitée en volume et en temps, pour des cas d'usage comme les websites, les plateformes d'e-commerce, le streaming de vidéos, les librairies d'images, l'analytique, les sauvegardes, les archives.

### Quelle est la différence entre les classes de stockage objet S3 et les classes de stockage objet SWIFT ?

Les classes de stockage Object Storage S3 sont largement compatibles avec le protocole S3 et bénéficient d'un design récent, performant et d'une bonne bande passante. Cette offre bénéficie régulièrement de mises à jour et de nouvelles fonctionnalités.

Les classes de stockage SWIFT sont de générations plus anciennes et ne bénéficient plus d'évolutions. Elles sont accessibles à travers le protocole SWIFT d'OpenStack.

### Comment savoir quelle classe de stockage est adaptée à mes usages ?

OVHcloud propose 3 classes de stockages S3 :

- **High Performance** pour vos applications exigeantes en termes de latence et de consommation de bande passante.
- **Standard** pour vos stockages volumineux pour lesquels vous recherchez un meilleur ratio prix/performance, comme par exemple pour des sites web, des librairies de partage d'images ou des sauvegardes.
- **Cold Archive** pour vos archives.

Retrouvez la description des classes des stockage sur [cette page](https://www.ovhcloud.com/fr/public-cloud/storage/).

### Quelles sont les fonctionnalités disponibles pour les classes de stockage S3 ?

Les classes de stockage Objet S3 bénéficient de [fonctionnalités enrichies pour gérer au mieux votre donnée](https://www.ovhcloud.com/fr/public-cloud/object-storage/#features).

De nouvelles fonctionnalités sont à venir, nous vous invitons à consulter régulièrement notre [roadmap GitHub publique](https://github.com/orgs/ovh/projects/16/?card_filter_query=label%3A%22object+storage%22).

### Quelles sont les API S3 compatibles avec les classes de stockage Object Storage S3 ?

Les classes de stockages objet S3 offrent un large support des API S3. L'ensemble des API compatibles sont décrites dans notre [guide de compatibilité S3](/pages/storage_and_backup/object_storage/s3_s3_compliancy).

### Quels sont les outils compatibles avec l'Object Storage S3 ?

La majorité des outils du marché compatibles avec du stockage S3 standard sont compatibles avec l'Object Storage S3 OVHcloud.

### L'Object Storage S3 peut-il fonctionner avec mes outils de gestion de back up ?

Oui, l'Object Storage S3 est largement compatible avec les API S3 et peut être intégré avec les outils du marché comme par exemple [Veeam](/pages/storage_and_backup/object_storage/s3_veeam), [Owncloud](/pages/storage_and_backup/object_storage/s3_owncloud), [Nextcloud](/pages/storage_and_backup/object_storage/s3_nextcloud).

### Comment est facturé le service ?

L'Object Storage est facturé en fonction de l'espace de stockage utilisé, avec une granularité de 1 Go. Pour assurer sa lisibilité, le prix est affiché au Go/mois, mais la granularité de la facturation est au Go/heure, en considérant qu’en moyenne il y a 720 heures dans un mois. Consultez la tarification sur [cette page](https://www.ovhcloud.com/fr/public-cloud/prices/).

## Accès & sécurité

### Par quels API avoir accès aux offres de stockage ?

Nous avons conçu les classes de stockage S3 pour qu’il soit **compatible avec l’API S3**, considérée comme une référence dans le marché du stockage d’objets. Vous pouvez donc utiliser Object Storage avec la plupart des outils de gestion de données via les endpoints définis par région.

Munissez-vous de vos clés d'accès S3 et accédez en ligne de commande aux différentes classes de stockage par commandes AWS-CLI, s3cmd ou autres.

La liste des endpoints est disponible dans le guide « [Endpoints et géo-disponibilité de l’Object Storage](/pages/storage_and_backup/object_storage/s3_location) ».

### Peut-on avoir accès au service avec un réseau privé (vRack) ?

Les endpoints Object Storage sont disponibles à travers le réseau public. La classe de stockage objet n'est pas disponible sur le réseau privé.

### Puis-je gérer plusieurs profils d'utilisateurs ?

Il est possible de gérer plusieurs profils utilisateurs grâce aux S3 Policies. Consultez notre guide « [Gestion des identités et des accès](/pages/storage_and_backup/object_storage/s3_identity_and_access_management) ».

### Comment configurer les droits d'accès par objet ou par bucket ?

Il est possible de configurer des droits d'accès par profil utilisateur et par objet. Consultez notre guide « [Gestion des identités et des accès](/pages/storage_and_backup/object_storage/s3_identity_and_access_management) ».

Il n'est pas encore possible de configurer des droits d'accès par bucket.

### Est-ce que je peux chiffrer mes données ?

L'utilisation du chiffrement côté serveur avec des clés de chiffrement fournies par le client (SSE-C) vous permet de définir vos propres clés de chiffrement.

Lorsque vous chargez un objet, S3 Object Storage utilise la clé de chiffrement que vous fournissez pour appliquer le chiffrement AES-256 à vos données. Lorsque vous récupérez un objet, vous devez fournir la même clé de chiffrement dans le cadre de votre demande. S3 Object Storage vérifie d'abord que la clé de chiffrement que vous avez fournie correspond, puis déchiffre l'objet avant de vous renvoyer les données de l'objet.

Retrouvez plus d'informations dans notre guide « [Chiffrez vos objets côté serveur avec SSE-C](/pages/storage_and_backup/object_storage/s3_encrypt_your_objects_with_sse_c) ».

### Comment protéger mes sauvegardes ?

Nous vous recommandons de protéger vos sauvegardes avec l'immutabilité, une fonction disponible via l'API S3 Object Lock. Cette fonction n'est pas disponible pour la classe de stockage Cold Archive.

Le verrouillage d'objet est une fonctionnalité qui vous permet de stocker des objets à l'aide d'un modèle *WriteOnce, ReadMany (WORM)*, pouvant être utilisé dans des scénarios où il est impératif que les données ne soient pas modifiées ou supprimées après leur écriture.

Retrouvez plus d'informations dans notre guide « [Gestion de l’immuabilité des objets avec Object Lock (WORM)](/pages/storage_and_backup/object_storage/s3_managing_object_lock) ».

### Comment partager temporairement l'accès à un objet via une URL ?

Par défaut, tous les objets sont privés, c'est-à-dire que seul le propriétaire des objets est autorisé à y accéder. Cependant, les objets peuvent être partagés temporairement avec d'autres personnes à l'aide d'une URL présignée pour accorder une autorisation limitée dans le temps pour télécharger les objets, sans avoir besoin de reconfigurer les autorisations.

Veuillez noter que toute personne ayant accès à l'URL présignée peut télécharger votre objet. Nous vous recommandons donc de le protéger convenablement.

Assurez-vous d'avoir les autorisations nécessaires en utilisant les credentials du propriétaire de l'objet (par défaut, le propriétaire du bucket).

Pour générer une URL présignée afin de partager un objet à l'aide de la CLI AWS, vous pouvez utiliser la commande `presign` :

```bash
$ aws s3 presign s3://<bucket>/<key>
```

- Exemple :

```bash
$ aws s3 presign s3://gribs/grib-file
https://s3.gra.perf.cloud.ovh.net/gribs/grib-file?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=5ba255c12baf43be9d00289070faf936%2F20230221%2Fgra%2Fs3%2Faws4_request&X-Amz-Date=20230221T142726Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=a43dc63c483d469f6f747ef041a434145b3661541e95e4334eee3a96e059e15e
```

Vous pouvez également définir une expiration du lien via l'option `--expire`. La commande ci-dessous définit une expiration au bout de 24h (la durée est exprimée en secondes) :

```bash
aws s3 presign s3://<bucket>/<key> --expires-in 86400
```

## Bande passante

### Quelle est la bande passante ?

La bande passante est mutualisée et non garantie. Nous offrons un maximum de 1 Gbps/connexion en upload et download.

### Comment est facturée la bande passante ?

Les prix sont définis et affichés sur [le site OVHcloud](https://www.ovhcloud.com/fr/public-cloud/prices/#439).

Un serveur OVHcloud est un serveur opéré pour un service OVHcloud, par exemple un serveur de la gamme Bare Metal Cloud, Public Cloud ou Hosted Private Cloud (Serveur Dédié / VPS / Public Cloud / Hosted Private Cloud / So You Start / Kimsufi / xDSL).

Le trafic interne entrant est représenté par la donnée téléchargée d’un serveur OVHcloud vers un serveur OVHcloud.

Le trafic interne sortant est représenté par la donnée téléchargée d’un serveur OVHcloud vers un serveur OVHcloud.

Le trafic public entrant est représenté par la donnée téléchargée depuis Internet vers un serveur OVHcloud.

Le trafic public sortant est représenté par la donnée téléchargée d’un serveur OVHcloud vers Internet.

## Disponibilité

### Quel niveau de disponibilité puis-je atteindre avec Object Storage ?

Lorsque le service est indisponible ou connaît des dysfonctionnements pour lesquels la responsabilité d'OVHcloud peut être engagée, vous pouvez contacter les équipes d'OVHcloud et ouvrir un ticket d'assistance à partir de votre espace client OVHcloud.

OVHcloud s’engage à assurer les niveaux de service relatifs à la disponibilité du service, tels que décrits dans les [termes et conditions consultables en ligne](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/8e514ce-Conditions_particulieres_OVH_Stack-FR-14.0.pdf).

## Upload / download de données

### Comment répliquer mes données d'une region à une autre ?

Vous pouvez choisir de synchroniser vos données d'une région à une autre en utilisant rClone. Consultez nos guides suivant la solution Object Storage choisie :

- [Utiliser S3 Object Storage avec rClone](/pages/storage_and_backup/object_storage/s3_rclone)
- [Utiliser Object Storage Swift avec rClone](/pages/storage_and_backup/object_storage/pcs_sync_rclone_object_storage)

### Est-il possible de gérer les cycles de vie de la donnée ?

Les options de cycle de vie ne sont pas encore disponibles. Nous vous invitons à suivre notre [roadmap GitHub publique](https://github.com/orgs/ovh/projects/16/?card_filter_query=label%3A%22object+storage%22) pour être informé de leur sortie.

## Performances

### Comment uploader des volumes importants de données ?

Pour téléverser de gros volumes de données, il est recommandé de paralléliser les connexions (*multithread upload*).Plusieurs requêtes sont en cours en parallèle et la bande passante est multipliée (1 Gbps par connexion). Vous trouverez plus de détail sur la méthodologie dans notre guide « [Optimisez l’envoi de vos fichiers vers S3 Object Storage](/pages/storage_and_backup/object_storage/s3_optimise_the_sending_of_your_files) ».

Plus globalement, il existe différentes méthodes vous permettant de maximiser vos performances d'upload et de download sur notre Object Storage. Découvrez ces optimisations dans le guide suivant : [Object Storage - Optimiser les performances](/pages/storage_and_backup/object_storage/s3_performance_optimization).

### Quelle est la différence de performance entre les classes de stockage High Performance et Standard Performance?

Adaptée aux cas d'usage d'IA ou d'analytique, la classe High Performance est construite pour apporter de la performance grâce à son design et l'utilisation de disques SSD NVMe. Elle est adaptée à des cas d'usage nécessitant une grande vitesse de lecture / écriture sur des volumes de données importants. Des tests de performances sont disponibles sur le site Cloud Mercato : 

- [OVHcloud High performance Object Storage benchmark](https://projector.cloud-mercato.com/projects/ovh-high-perf-object-storage-benchmark){.external}
- [OVHcloud Standard Object Storage benchmark](https://projector.cloud-mercato.com/projects/ovhcloud-standard-object-storage-benchmark){.external}

### Quelle est la bande passante disponible pour l'upload et le download ?

La bande passante maximale est de 1 Gbps par connexion.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
