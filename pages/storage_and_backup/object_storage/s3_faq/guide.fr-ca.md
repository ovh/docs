---
title: Object Storage - FAQ
excerpt: "FAQ sur la solution Object Storage"
updated: 2024-12-11
---

## Questions générales

### Qu’est ce que la solution Object Storage d’OVHcloud ?

Le stockage objet «Object Storage» est une famille d’offres de stockage proposant des espaces de stockage performant, scalable et sécurisé.

Les offres de stockage objet permettent de déposer, à travers un point d’accès public appelé « endpoint », des fichiers statiques (vidéos, images, fichiers web, etc...) dans un espace illimité, pour les exploiter depuis une application ou pour les rendre accessibles sur le web. Ces espaces de stockages sont accessibles via une interface d’API standard compatible S3 **\*** pour les classes de stockage Object Storage et Swift pour les classes de stockage Object Storage SWIFT.

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/8xXbL3Ftgwk?si=OaRx5koocA-OyRXC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Dans quel cas d'usage utiliser une solution de stockage objet ?

Le stockage objet est adapté pour stocker de la donnée non structurée de manière illimitée en volume et en temps, pour des cas d'usage comme les websites, les plateformes d'e-commerce, le streaming de vidéos, les librairies d'images, l'analytique, les sauvegardes, les archives.

### Quelle est la différence entre les classes de stockage objet compatible S3 et les classes de stockage objet SWIFT ?

Les classes de stockage Object Storage sont largement compatibles avec le protocole S3 et bénéficient d'un design récent, performant et d'une bonne bande passante. Cette offre bénéficie régulièrement de mises à jour et de nouvelles fonctionnalités.

Les classes de stockage SWIFT sont de générations plus anciennes et ne bénéficient plus d'évolutions. Elles sont accessibles à travers le protocole SWIFT d'OpenStack.

### Comment savoir quelle classe de stockage est adaptée à mes usages ?

OVHcloud propose 3 classes de stockages compatibles S3 :

- **High Performance** pour vos applications exigeantes en termes de latence et de consommation de bande passante.
- **Standard** pour vos stockages volumineux pour lesquels vous recherchez un meilleur ratio prix/performance, comme par exemple pour des sites web, des librairies de partage d'images ou des sauvegardes.
- **Cold Archive** pour vos archives.

Retrouvez la description des classes des stockage sur [cette page](/links/public-cloud/storage).

### Quelles sont les fonctionnalités disponibles pour les classes de stockage Object Storage ?

Les classes de stockage Objet bénéficient de [fonctionnalités enrichies pour gérer au mieux votre donnée](/links/public-cloud/object-storage).

De nouvelles fonctionnalités sont à venir, nous vous invitons à consulter régulièrement notre [roadmap GitHub publique](https://github.com/orgs/ovh/projects/16/?card_filter_query=label%3A%22object+storage%22).

### Quelles sont les API Amazon S3 compatibles avec les classes de stockage Object Storage ?

Les classes Object Storage offrent un large support d'API S3. L'ensemble des API compatibles sont décrites dans notre [guide de compatibilité](/pages/storage_and_backup/object_storage/s3_s3_compliancy).

### Quels sont les outils compatibles avec Object Storage ?

La majorité des outils du marché compatibles avec le protocole Amazon S3 sont compatibles avec l'Object Storage OVHcloud.

### Object Storage peut-il fonctionner avec mes outils de gestion de back up ?

Oui, Object Storage est largement compatible avec  S3 et peut être intégré avec les outils du marché comme par exemple [Veeam](/pages/storage_and_backup/object_storage/s3_veeam), [Owncloud](/pages/storage_and_backup/object_storage/s3_owncloud), [Nextcloud](/pages/storage_and_backup/object_storage/s3_nextcloud).

## Facturation

### Comment est facturé le service ?

L'Object Storage est facturé en fonction de l'espace de stockage utilisé, avec une granularité de 1 Go. Pour assurer sa lisibilité, le prix est affiché au Go/mois, mais la granularité de la facturation est au Go/heure. Consultez la tarification sur [cette page](/links/public-cloud/prices).

### Exemple de tarification pour Object Storage – 1-AZ

Supposons que vous stockiez au sein d'un **bucket Object Storage** dans une région 1-AZ, **100 Gio** de données Standard Object Storage pendant les **10 premiers jours** du mois d'octobre, et **100 Tio** (102 400 Go) de données Standard Object Storage pendant les **21 derniers jours** du mois. On imagine donc dans ce cas une évolution du stockage au sein de ce bucket au cours du mois.

Une fois le mois d'octobre terminé, vous obtiendriez en Gigaoctet-heure : **Gigaoctet-heure total** = [100 Go x 10 jours x (24 heures/jour)] + [102 400 Go x 21 jours x (24 heures/jour)] = 24 000 + 51 609 600 = **51 633 600 Go-heures**.

Le coût de stockage mensuel (au prix de 0,00000972 EUR / Go-heure) est : 51 633 600 Go-heures * 0,00000972= **501.88 EUR**

Sur le mois de novembre, la volumétrie n'évolue plus, le coût de stockage mensuel est calculé comme suit : **Go-heure du mois de novembre** = 100 * 1024 * 720 = **73 728 000 Go-heure** (il y a 720 heures en novembre).

Soit le coût du stockage mensuel (au prix de 0,00000972 EUR / Go-heure) : 73 728 000 * 0,00000972 = **716.63 EUR**.

### Exemple de tarification pour un Object Storage – 3-AZ (tarification par paliers)

Dans une région 3-AZ, la tarification du stockage se fait par paliers, ou tranches de volumes de stockage. Consultez ces tarifs sur [cette page](/links/public-cloud/prices).

Supposons que vous stockiez au sein d'un bucket **Object Storage - Standard** dans une région 3-AZ, **100 Gio** de données pendant les **10 premiers jours** du mois d'octobre, et **100 Tio** (102 400 Go) de données pendant les **21 derniers jours** du mois. On imagine donc dans ce cas une évolution du stockage au sein de ce bucket au cours du mois.

Une fois le mois d'octobre terminé, vous obtiendriez en Gigaoctet-heure : **Gigaoctet-heure total** = [100 Go x 10 jours x (24 heures/jour)] + [102 400 Go x 21 jours x (24 heures/jour)] = 24 000 + 51 609 600 = **51 633 600 Go-heures**

Ce volume d'utilisation traverse deux paliers de tarifications différents. Le coût de stockage mensuel est calculé comme suit :

- Premier palier de **0 Go-heures à (50 * 1024 * 730 = 37 376 000 Go-heures)**, prix appliqué : 0.00001917 / Go-heure (ou env. 14 EUR/To/mois).
- Deuxième palier de **37 376 001 Go-heures à (500 * 1024 * 730 = 373 760 000 Go-heures)**, prix appliqué : 0.00001712 / Go-heure ou (ou env. 12,5 EUR/To/mois).

Le coût de stockage mensuel est : 37 376 000 * 0.00001917 + (51 633 600 - 37 376 000) * 0.00001712 = 716.49792 + 244.090112 = **960.59 EUR**

Sur le mois de novembre, la volumétrie n'évolue plus, le coût de stockage mensuel est calculé comme suit : **Go-heure du mois de novembre** = 100 * 1024 * 720 = **73 728 000 Go-heure** (il y a 720 heures en novembre)

Soit le coût du stockage mensuel : 37 376 000 * 0.00001917 + (73 728 000 - 37 376 000) * 0.00001712 = 716.49792 + 622,34624 = **1338,84 EUR**

## Accès & sécurité

### Par quels API avoir accès aux offres de stockage ?

Nous avons conçu les classes de stockage Object Storage pour qu’elles soient **compatibles avec S3**, considérée comme une référence dans le marché du stockage d’objets. Vous pouvez donc utiliser Object Storage avec la plupart des outils de gestion de données via les endpoints définis par région.

Munissez-vous de vos clés d'accès Object Storage et accédez en ligne de commande aux différentes classes de stockage par commandes AWS-CLI, s3cmd ou autres.

La liste des endpoints est disponible dans le guide « [Endpoints et géo-disponibilité de l’Object Storage](/pages/storage_and_backup/object_storage/s3_location) ».

### Peut-on avoir accès au service avec un réseau privé (vRack) ?

Les endpoints Object Storage sont disponibles à travers le réseau public. La classe de stockage objet n'est pas disponible sur le réseau privé.

### Puis-je gérer plusieurs profils d'utilisateurs ?

Il est possible de gérer plusieurs profils utilisateurs grâce aux  Object Storage Policies. Consultez notre guide « [Gestion des identités et des accès](/pages/storage_and_backup/object_storage/s3_identity_and_access_management) ».

### Comment configurer les droits d'accès par objet ou par bucket ?

Il est possible de configurer des droits d'accès par profil utilisateur et par objet. Consultez notre guide « [Gestion des identités et des accès](/pages/storage_and_backup/object_storage/s3_identity_and_access_management) ».

Il n'est pas encore possible de configurer des droits d'accès par bucket.

### Est-ce que je peux chiffrer mes données ?

Vous pouvez chiffrer vos données via deux méthodes:

- **SSE-C (Server-Side Encryption with Customer Keys)** : vous pouvez fournir et gérer vos propres clés de chiffrement, vous offrant ainsi une maîtrise complète sur la sécurité de vos données. Cette option est particulièrement adaptée aux organisations ayant des besoins spécifiques en matière de conformité et de sécurité des données, puisqu'elle permet une gestion exclusive des clés de chiffrement.
- **SSE-OMK (Server-Side Encryption with OVHcloud-Managed Keys)** : simplifie le processus de chiffrement en utilisant des clés gérées par OVHcloud. Cette méthode est idéale pour les clients qui souhaitent bénéficier d'une solution de chiffrement robuste sans les complexités liées à la gestion des clés.

Lorsque vous chargez un objet, Object Storage utilise la clé de chiffrement que vous fournissez pour appliquer le chiffrement AES-256 à vos données. Lorsque vous récupérez un objet, vous devez fournir la même clé de chiffrement dans le cadre de votre demande. Object Storage vérifie d'abord que la clé de chiffrement que vous avez fournie correspond, puis déchiffre l'objet avant de vous renvoyer les données de l'objet.

Retrouvez plus d'informations dans notre guide « [Chiffrez vos objets côté serveur avec SSE-C ou SSE-OMK](/pages/storage_and_backup/object_storage/s3_encrypt_your_objects_with_sse_c) ».

### Comment protéger mes sauvegardes ?

Nous vous recommandons de protéger vos sauvegardes avec l'immutabilité, une fonction disponible via l'API Object Lock. Cette fonction n'est pas disponible pour la classe de stockage Cold Archive.

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

Les prix sont définis et affichés sur [le site OVHcloud](/links/public-cloud/prices-object-storage).

Un serveur OVHcloud est un serveur opéré pour un service OVHcloud, par exemple un serveur de la gamme Bare Metal Cloud, Public Cloud ou Hosted Private Cloud (Serveur Dédié / VPS / Public Cloud / Hosted Private Cloud / So You Start / Kimsufi / xDSL).

Le trafic interne entrant est représenté par la donnée téléchargée d’un serveur OVHcloud vers un serveur OVHcloud.

Le trafic interne sortant est représenté par la donnée téléchargée d’un serveur OVHcloud vers un serveur OVHcloud.

Le trafic public entrant est représenté par la donnée téléchargée depuis Internet vers un serveur OVHcloud.

Le trafic public sortant est représenté par la donnée téléchargée d’un serveur OVHcloud vers Internet.

Des limitations de trafic/bande passante publique peuvent exister pour un service OVHcloud donné et/ou pour une région donnée. Nous vous recommandons de consulter la documentation spécifique au service OVHcloud que vous utilisez pour plus de détails.

## Disponibilité

### Quel niveau de disponibilité puis-je atteindre avec Object Storage ?

Lorsque le service est indisponible ou connaît des dysfonctionnements pour lesquels la responsabilité d'OVHcloud peut être engagée, vous pouvez contacter les équipes d'OVHcloud et ouvrir un ticket d'assistance à partir de votre espace client OVHcloud.

OVHcloud s’engage à assurer les niveaux de service relatifs à la disponibilité du service, tels que décrits dans les [termes et conditions consultables en ligne](https://storage.gra.cloud.ovh.net/v1/AUTH_325716a587c64897acbef9a4a4726e38/contracts/8e514ce-Conditions_particulieres_OVH_Stack-FR-14.0.pdf).

## Upload / download de données

### Comment répliquer mes données d'une region à une autre ?

Vous pouvez choisir de synchroniser vos données d'une région à une autre en utilisant rClone. Consultez nos guides suivant la solution Object Storage choisie :

- [Utiliser Object Storage avec rClone](/pages/storage_and_backup/object_storage/s3_rclone)
- [Utiliser Object Storage Swift avec rClone](/pages/storage_and_backup/object_storage/pcs_sync_rclone_object_storage)

Vous pouvez également utiliser la fonction de réplication asynchrone disponible sur les buckets Object Storage. Suivez [ce guide](/pages/storage_and_backup/object_storage/s3_asynchronous_replication) pour obtenir plus de détails sur cette fonctionnalité.

### Est-il possible de gérer les cycles de vie de la donnée ?

Les options de cycle de vie ne sont pas encore disponibles. Nous vous invitons à suivre notre [roadmap GitHub publique](https://github.com/orgs/ovh/projects/16/?card_filter_query=label%3A%22object+storage%22) pour être informé de leur sortie.

## Performances

### Comment uploader des volumes importants de données ?

Pour téléverser de gros volumes de données, il est recommandé de paralléliser les connexions (*multithread upload*). Plusieurs requêtes sont en cours en parallèle et la bande passante est multipliée (1 Gbps par connexion). Vous trouverez plus de détail sur la méthodologie dans notre guide « [Optimisez l’envoi de vos fichiers vers Object Storage](/pages/storage_and_backup/object_storage/s3_optimise_the_sending_of_your_files) ».

Plus globalement, il existe différentes méthodes vous permettant de maximiser vos performances d'upload et de download sur notre Object Storage. Découvrez ces optimisations dans le guide suivant : [Object Storage - Optimiser les performances](/pages/storage_and_backup/object_storage/s3_performance_optimization).

### Quelle est la différence de performance entre les classes de stockage High Performance et Standard Performance?

Adaptée aux cas d'usage d'IA ou d'analytique, la classe High Performance est construite pour apporter de la performance grâce à son design et l'utilisation de disques SSD NVMe. Elle est adaptée à des cas d'usage nécessitant une grande vitesse de lecture / écriture sur des volumes de données importants. Des tests de performances sont disponibles sur le site Cloud Mercato : 

- [OVHcloud High performance Object Storage benchmark](https://projector.cloud-mercato.com/projects/ovh-high-perf-object-storage-benchmark){.external}
- [OVHcloud Standard Object Storage benchmark](https://projector.cloud-mercato.com/projects/ovhcloud-standard-object-storage-benchmark){.external}

### Quelle est la bande passante disponible pour l'upload et le download ?

La bande passante maximale est de 1 Gbps par connexion.

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).

**\*** : S3 est une marque déposée appartenant à Amazon Technologies, Inc. Les services de OVHcloud ne sont pas sponsorisés, approuvés, ou affiliés de quelque manière que ce soit.
