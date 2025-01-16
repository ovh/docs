---
title: Object Storage - Chiffrez vos objets côté serveur avec SSE-C ou SSE-OMK
excerpt: Ce guide explique comment chiffrer vos objets côté serveur avec SSE-C ou SSE-OMK
updated: 2024-11-29
---

<style>
td:nth-of-type(1) {
  vertical-align: top;
  white-space: nowrap;
}
.optional {
  font-style:italic;
  margin-top:10px;
  text-align:center;
}
</style>

## Objectif

Chez OVHcloud, nous comprenons l'importance cruciale de la protection des données dans l'écosystème numérique actuel. Face à des menaces de sécurité en constante évolution et à des exigences réglementaires de plus en plus strictes, il est essentiel de mettre en place des mesures robustes pour sécuriser les données à tout moment. Cela inclut non seulement les données en transit mais également les données au repos.

La protection des données « *at rest* », c'est-à-dire des données stockées sur des dispositifs physiques ou dans le cloud, est un élément crucial de la stratégie de sécurité informatique de toute organisation. Dans ce contexte, deux approches principales se distinguent pour le chiffrement de ces données : le chiffrement côté client (Client-Side Encryption, CSE) et le chiffrement côté serveur (Server-Side Encryption, SSE).

Le chiffrement côté client (Client-Side Encryption, CSE) permet à nos clients de chiffrer leurs données sur leur propre dispositif avant de les envoyer vers nos serveurs pour stockage. Cette méthode assure que les données restent cryptées tout au long de leur cycle de vie, offrant un haut degré de sécurité, puisque les clés de chiffrement sont gérées par le client et jamais partagées avec OVHcloud ou tout autre tiers.

Bien que cette approche exige une gestion rigoureuse des clés de la part du client, elle représente une solution idéale pour ceux qui requièrent un contrôle total sur la sécurité de leurs données.

En parallèle, le chiffrement côté serveur (Server-Side Encryption, SSE) propose une alternative où les données sont chiffrées à leur arrivée sur nos serveurs. Cette responsabilité incombe à OVHcloud, ce qui allège considérablement la charge de gestion de la sécurité pour nos clients. Deux méthodes de chiffrement côté serveur sont disponibles : 

- **SSE-C (Server-Side Encryption with Customer Keys)** : vous pouvez fournir et gérer vos propres clés de chiffrement, vous offrant ainsi une maîtrise complète sur la sécurité de vos données. Cette option est particulièrement adaptée aux organisations ayant des besoins spécifiques en matière de conformité et de sécurité des données, puisqu'elle permet une gestion exclusive des clés de chiffrement.
- **SSE-OMK  **\*** (Server-Side Encryption with OVHcloud-Managed Keys)** : simplifie le processus de chiffrement en utilisant des clés gérées par OVHcloud. Cette méthode est idéale pour les clients qui souhaitent bénéficier d'une solution de chiffrement robuste sans les complexités liées à la gestion des clés.

Notre objectif est vous aider à choisir le meilleur type de chiffrement pour vous. Cette page vous donne toutes les informations nécessaires pour faire un choix éclairé. Que vous préfériez gérer vous-même avec SSE-C ou opter pour la facilité de SSE-OMK, Nous nous engageons à vous offrir des solutions flexibles et sûres pour protéger vos données quand elles sont stockées.

**Ce guide explique comment chiffrer vos objets côté serveur avec SSE-C et SSE-OMK.**

> [!warning]
>
> Object Storage ne stocke pas la clé de chiffrement que vous fournissez. Cela signifie que si vous perdez la clé de chiffrement, vous perdez l'objet. La seule chose qui reste à faire est de le supprimer.
>

## Prérequis

- Avoir créé un bucket Object Storage
- Avoir créé un utilisateur et avoir défini les droits d'accès requis sur le bucket
- Avoir installé et configuré l'interface de ligne de commande AWS (aws-cli)

Consultez notre guide « [Débuter avec Object Storage](/pages/storage_and_backup/object_storage/s3_getting_started_with_object_storage) » pour plus de détails.

## En pratique

L'utilisation du chiffrement côté serveur avec des clés de chiffrement fournies par le client (SSE-C) vous permet de définir vos propres clés de chiffrement.

Lorsque vous téléchargez un objet, Object Storage utilise la clé de chiffrement que vous fournissez pour appliquer le chiffrement AES-256 à vos données. Lorsque vous récupérez un objet, vous devez fournir la même clé de cryptage dans le cadre de votre demande. Object Storage vérifie d'abord que la clé de chiffrement que vous avez fournie correspond, puis déchiffre l'objet avant de vous renvoyer les données de l'objet.

Lorsque vous utilisez SSE-C, vous devez fournir des informations sur la clé de chiffrement à l'aide des en-têtes de requête suivants.

| Nom | Description |
|:-----|:------------|
| --sse​-customer-algorithm | Utilisez cet en-tête pour spécifier l'algorithme du chiffrement. La valeur de l'en-tête doit être *AES256*.  |
| --sse-customer-key | Utilisez cet en-tête pour fournir la clé de chiffrement de 256 bits encodée en Base64 pour chiffrer ou déchiffrer les données. |
| --sse​-customer-key-md5 | Utilisez cet en-tête pour fournir la valeur de hachage MD5 128 bits encodée en Base64 de la clé de chiffrement conformément à la norme RFC 1321. Cet en-tête est utilisé pour vérifier l'intégrité du message et veiller à ce que la clé de chiffrement ait été transmise sans erreur. |

### SSE-C - Chiffrement côté serveur avec clés de chiffrement client

#### Création d'une clé de chiffrement

Exemple de création d'une clé de chiffrement ( *--sse-customer-key* ) et de son hash MD5 :

```bash
$ secret=$(openssl rand 32)
$ encKey=$(echo -n $secret | base64)
$ md5Key=$(echo -n $secret | openssl dgst -md5 -binary | base64)
```

#### Envoi d'un objet avec SSE-C

Pour envoyer un objet avec SSE-C et aws-cli, procédez comme suit :

```bash
$ aws s3api put-object \
  --body /etc/magic \
  --bucket <bucket_name> \
  --key encrypt_magic \
  --sse-customer-algorithm AES256 \
  --sse-customer-key $encKey \
  --sse-customer-key-md5 $md5Key
```

#### Réception d'un objet avec SSE-C

Pour recevoir un objet avec SSE-C et aws-cli, procédez comme suit :

```bash
$ aws s3api get-object \
  --bucket <bucket_name> \
  --key encrypt_magic \
  --sse-customer-algorithm AES256 \
  --sse-customer-key $encKey \
  --sse-customer-key-md5 $md5Key \
  decrypt_magic
```

Sans les en-têtes de chiffrement, vous obtiendrez une erreur `Bad Request` :

```bash
$ aws s3api get-object \
  --bucket <bucket_name> \
  --key encrypt_magic \
  decrypt_magic

$ An error occurred (400) when calling the HeadObject operation: Bad Request
```

#### Obtenir les métadonnées d'un objet avec SSE-C

Pour obtenir les métadonnées d'un objet avec SSE-C et aws-cli, procédez comme suit :

```bash
$ aws s3api head-object \
  --bucket <bucket_name> \
  --key encrypt_magic \
  --sse-customer-algorithm AES256 \
  --sse-customer-key $encKey \
  --sse-customer-key-md5 $md5Key
```

La sortie devrait ressembler à ça:

```json
{
    "LastModified": "Tue, 19 Apr 2022 09:38:47 GMT",
    "ContentLength": 111,
    "ETag": "\"272913026300e7ae9b5e2d51f138e674\"",
    "VersionId": "1650376416551536",
    "ContentType": "binary/octet-stream",
    "Metadata": {},
    "StorageClass": "STANDARD"
}
```

Sans les en-têtes de chiffrement, vous obtiendrez une erreur `Bad Request`.

### Suppression d'un objet chiffré avec SSE-C

Pour supprimer un objet chiffré avec SSE-C et aws-cli, procédez comme suit :

```bash
$ aws s3 rm s3://<bucket_name>/encrypt_magic
```

#### URLs présignées et SSE-C

Les URL pré-signées, qui peuvent être utilisées pour des opérations telles que l'envoi d'un nouvel objet, la récupération d'un objet existant ou des métadonnées d'un objet, prennent en charge le SSE-C comme suit :

- Lorsque vous créez une URL pré-signée, vous devez spécifier l'algorithme en utilisant l'en-tête `x-amz-server-side-encryption-customer-algorithm` dans le calcul de la signature.

- Lorsque vous utilisez l'URL pré-signée pour envoyer un nouvel objet, récupérer un objet existant ou récupérer uniquement les métadonnées d'un objet, vous devez fournir tous les en-têtes de chiffrement dans votre application client.

> [!primary]
>
> Vous pouvez donc utiliser l'URL pré-signée pour les objets SSE-C uniquement par programmation, car en plus de l'URL pré-signée, vous devez également inclure des en-têtes HTTP spécifiques aux objets SSE-C.

### SSE-OMK - Chiffrement côté serveur avec clés gérées par OVHcloud

L'utilisation du chiffrement côté serveur avec des clés gérées par OVHcloud (SSE-OMK) permet de protéger vos données stockées sur OVHcloud en les chiffrant automatiquement au repos. SSE-OMK utilise des clés gérées et protégées par OVHcloud, éliminant ainsi le besoin pour l'utilisateur de gérer manuellement ces clés de chiffrement.

#### Avantages

- **Gestion des Clés Simplifiée**

Avec OVHcloud prenant en charge la gestion sécurisée des clés de chiffrement, les utilisateurs bénéficient d'une gestion des clés simplifiée. Cette approche élimine les complexités liées à la rotation des clés tout en maintenant un niveau élevé de sécurité pour les données. Elle permet de concilier sécurité et efficacité opérationnelle, en éliminant la charge administrative de la gestion manuelle des clés de chiffrement.

- **Sécurité Renforcée**

Nous employons une stratégie de chiffrement avancée pour offrir une protection maximale de vos données. Chaque bucket bénéficie d'une clé unique, et pour chaque objet stocké, une clé de chiffrement distincte est générée. Cette clé est obtenue en combinant la clé unique du bucket avec un sel aléatoire, ce qui assure que chaque objet est chiffré avec sa propre clé. Cette méthode de dérivation de clés limite le risque associé à l'exposition d'une clé unique et garantit une sécurité renforcée pour vos données.

- **Transparence**

Le processus de chiffrement et de déchiffrement est entièrement transparent pour l'utilisateur, permettant d'accéder et de gérer les données chiffrées aussi aisément que s'il s'agissait de données non chiffrées.

- **Sécurité renforcée grâce à OVHcloud Key Management Service (KMS)**

Notre engagement envers la sécurité de vos données est renforcé par l'utilisation d'OVHcloud Key Management Service (KMS), une plateforme avancée pour le stockage sécurisé et la gestion des clés de chiffrement. Cette approche garantit une protection optimale de vos données, mettant en place une infrastructure de sécurité robuste sans les complexités liées à la gestion directe des clés de chiffrement.

Pour approfondir votre compréhension du Key Management Service (KMS) d'OVHcloud et de ses applications dans divers contextes d'infrastructure cloud, nous vous recommandons de consulter les ressources suivantes :

- **[Mise en route du KMS CipherTrust Manager - OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/kms_cipher_trust)** : ce guide offre un aperçu détaillé de la mise en œuvre et de l'utilisation du KMS pour sécuriser vos données.
- **[Enabling Virtual Machine Encryption (VM Encrypt) - OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vm_encrypt)** : guide pratique sur l'activation du chiffrement de machines virtuelles en utilisant les capacités de KMS.
- **[Enabling virtual machine encryption with vSphere Native Key Provider - OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vm_encrypt-vnkp)** : instructions détaillées sur l'utilisation de KMS en conjonction avec le fournisseur de clés natif vSphere pour le chiffrement de machines virtuelles.

Ces documents fournissent des informations précieuses sur la manière dont le KMS peut être utilisé pour renforcer la sécurité dans différents scénarios d'infrastructure cloud.

#### Mise en œuvre

Pour renforcer la sécurité des données uploadées chez OVHcloud, l'activation du chiffrement côté serveur (SSE-OMK) a été conçue pour être à la fois facile et transparente. En configurant une méthode de chiffrement par défaut sur votre bucket via la requête `PutBucketEncryption`, tout objet uploadé sera automatiquement chiffré sans nécessiter d'actions supplémentaires de votre part. Lors de l'upload d'un objet, il suffit de spécifier l'option de chiffrement dans la requête d'API ou via la ligne de commande AWS CLI. OVHcloud prend en charge le reste, chiffrant vos données avant leur stockage en utilisant une clé unique générée automatiquement pour le bucket.

#### Gestion sécurisée des clés de chiffrement avec SSE-OMK sur Object Storage

L'implémentation du chiffrement SSE-OMK sur Object Storage est conçue pour offrir une gestion des clés de chiffrement à la fois sécurisée et transparente pour l'utilisateur. Chaque bucket bénéficie d'une clé distincte, ce qui assure que les données y sont sécurisées de façon individuelle et isolée. Cette méthode de chiffrement, intégrée et gérée par la plateforme, élimine les complexités associées à la gestion manuelle des clés par les utilisateurs. Tout en rendant le processus utilisateur aussi fluide et intuitif que possible, elle maintient une sécurité robuste et conforme aux standards les plus stricts en matière de protection des données.

#### Envoi d'un objet avec SSE-OMK sur Object Storage

##### Upload d'un objet sur Object Storage avec chiffrement SSE-OMK

Pour envoyer un objet dans votre bucket Object Storage sur OVHcloud avec chiffrement SSE-OMK, utilisez la commande Bash suivante via l'AWS CLI. Cette commande intègre l'option de chiffrement côté serveur pour renforcer la sécurité de vos données stockées.

```bash
aws s3api put-object --bucket votre-bucket --key votre-objet --body chemin/vers/votre/fichier --server-side-encryption AES256 --endpoint-url https://s3.io.cloud.ovh.net
```

Lorsque vous utilisez la commande AWS CLI pour uploader un objet avec chiffrement SSE-OMK sur Object Storage, assurez-vous de remplacer les valeurs suivantes selon vos informations spécifiques :

- `votre-bucket` : remplacez cette valeur par le nom de votre bucket Object Storage où vous souhaitez envoyer l'objet.
- `votre-objet` : remplacez par la clé ou le nom sous lequel vous voulez que l'objet soit stocké dans le bucket.
- `chemin/vers/votre/fichier` : indiquez le chemin d'accès complet au fichier que vous prévoyez d'envoyer.

L'option `--server-side-encryption AES256` dans la commande indique que vous souhaitez appliquer le chiffrement SSE-OMK. Cela garantit que l'objet envoyé est chiffré de manière sécurisée directement sur le serveur OVHcloud, offrant une couche supplémentaire de protection pour vos données.

##### Téléchargement d'un Objet avec SSE-OMK sur Object Storage

Pour télécharger un objet qui a été chiffré avec SSE-OMK depuis Object Storage, il n'est pas nécessaire de spécifier des headers du chiffrement dans la commande. En effet, l'objet peut être téléchargé directement sans manipulation supplémentaire liée au chiffrement, car le déchiffrement est géré automatiquement côté serveur. Voici un exemple de commande de téléchargement :

```bash
aws s3api get-object --bucket votre-bucket --key votre-objet chemin/vers/destination/fichier --endpoint-url https://s3.io.cloud.ovh.net
```

- Remplacez `votre-bucket` par le nom de votre bucket.
- Remplacez `votre-objet` par la clé de l'objet que vous souhaitez télécharger.
- Remplacez `chemin/vers/destination/fichier` par le chemin où vous souhaitez sauvegarder le fichier téléchargé.
- Le paramètre `--endpoint-url https://s3.io.cloud.ovh.net` doit être ajusté à la région de votre service Object Storage.

Attention de ne pas inclure de headers de chiffrement spécifiques lors du téléchargement d'un objet chiffré avec SSE-OMK pour éviter des erreurs, telles qu'une erreur 400 Bad Request. 

#### Ajout du chiffrement à un bucket existant sur Object Storage

Pour ajouter le chiffrement SSE-OMK à un bucket Object Storage existant sur OVHcloud, vous devez utiliser la commande `put-bucket-encryption` de l'AWS CLI. Cette commande configure le chiffrement du bucket pour que tous les nouveaux objets ajoutés soient automatiquement chiffrés avec SSE-OMK. Voici la commande spécifique que vous utiliseriez :

```bash
aws s3api put-bucket-encryption --bucket votre-bucket --server-side-encryption-configuration '{"Rules":[{"ApplyServerSideEncryptionByDefault":{"SSEAlgorithm":"AES256"}}]}' --endpoint-url https://s3.io.cloud.ovh.net
```

- Remplacez `votre-bucket` par le nom de votre bucket Object Storage.

Cela va configurer le bucket pour utiliser le chiffrement SSE-OMK avec les clés gérées par Object Storage (AES256) pour tous les nouveaux objets. Les objets existants ne seront pas affectés. Si vous souhaitez également les chiffrer, vous devrez les copier ou les uploader à nouveau après avoir changé cette configuration.

##### Affichage de la configuration du chiffrement du Bucket

Après avoir configuré le chiffrement de votre bucket via `PutBucketEncryption` pour utiliser SSE-OMK, assurez-vous que tout est correctement mis en place en utilisant la commande suivante avec l'AWS CLI :

```bash
aws s3api get-bucket-encryption --bucket votre-bucket --endpoint-url https://s3.io.cloud.ovh.net
```

- Remplacez `votre-bucket` par le nom de votre bucket.

Cette commande vous permet de vérifier la configuration actuelle du chiffrement de votre bucket pour vous assurer que le chiffrement SSE-OMK est bien activé.

Dans cette commande, remplacez `votre-bucket` par le nom de votre bucket. Cette commande vous renvoie les détails de la configuration du chiffrement actuelle de votre bucket, vous confirmant l'utilisation de SSE-OMK pour le chiffrement des données au repos.

Cette étape supplémentaire garantit une transparence totale et vous permet de vous assurer que la sécurité de vos données est maintenue selon les normes les plus élevées, avec la simplicité et l'efficacité que propose le chiffrement SSE-OMK gérée par OVHcloud.

##### Suppression d'un objet chiffré avec SSE-OMK

La suppression d'objets chiffrés avec SSE-OMK ne diffère pas de la suppression d'objets non chiffrés. Vous pouvez utiliser la commande suivante pour supprimer un objet :

```bash
aws s3 rm s3://mon-Bucket/mon-objet
```

- Remplacez `mon-Bucket` par le nom de votre bucket
- Remplacez `mon-objet` par le nom de l'objet que vous souhaitez supprimer.

Cette commande permet de supprimer efficacement un objet, qu'il soit chiffré ou non, de votre bucket sur Object Storage.

### Considérations sur le Chiffrement SSE-OMK

Lors de l'utilisation du chiffrement SSE-OMK sur Object Storage, il est important de prendre en compte les éléments suivants :

#### Performances

- ***Overhead*** : le chiffrement SSE-OMK peut introduire un léger *overhead* dû au processus de chiffrement et de déchiffrement. Cependant, cet *overhead* est généralement minime et n'affecte pas significativement les performances globales.

#### Sécurité

- **Gestion des clés** : SSE-OMK offre un haut niveau de sécurité en gérant automatiquement les clés de chiffrement. Cela simplifie la gestion de la sécurité pour les utilisateurs.
- **Pratiques de sécurité supplémentaires** : il est crucial de combiner le chiffrement SSE-OMK avec d'autres pratiques de sécurité pour une protection optimale. Cela inclut l'utilisation de politiques IAM strictes et le suivi des accès aux logs pour surveiller et contrôler l'accès aux données.

#### Comparaison des méthodes de chiffrement

Il est essentiel de comparer les différentes méthodes de chiffrement disponibles pour choisir celle qui convient le mieux à vos besoins spécifiques. Les méthodes à considérer incluent le chiffrement côté client (CSE) et le chiffrement côté serveur (SSE), avec ses variantes SSE-C et SSE-OMK.

#### Avantages et inconvénients

- **CSE vs SSE** : chaque méthode a ses propres avantages et inconvénients en termes de facilité de gestion, de sécurité et d'impact sur les performances.
- **Cas d'usage recommandés** : selon votre situation spécifique, certaines méthodes peuvent être plus appropriées que d'autres. Il est important d'évaluer les cas d'usage recommandés pour chaque méthode de chiffrement.

Un tableau comparatif peut être utile pour résumer ces éléments, offrant une vue d'ensemble claire qui facilite la prise de décision.

| Méthode de Chiffrement | Avantages | Inconvénients | Cas d’Usage Recommandés |
|------------------------|-----------|---------------|-------------------------|
| **CSE (Client-Side Encryption)** | - Contrôle total sur les clés de chiffrement<br>- Sécurité maximisée car les clés ne quittent jamais le client | - Gestion complexe des clés<br>- Responsabilité complète de la sécurité des clés | - Scénarios nécessitant une conformité spécifique<br>- Haute sensibilité des données |
| **SSE-C (Server-Side Encryption with Customer Keys)** | - Maîtrise sur les clés de chiffrement<br>- Sécurité renforcée sans la complexité totale de CSE<br>- Aucun coût supplémentaire | - Nécessité de fournir les clés à chaque requête<br>- Gestion des clés plus complexe que SSE-OMK | - Conformité et contrôle sur les clés<br>- Besoins intermédiaires en sécurité |
| **SSE-OMK (Server-Side Encryption with OVHcloud-Managed Keys)** | - Simplicité de mise en œuvre<br>- Gestion des clés automatique par OVHcloud<br>- Transparence d'utilisation<br>- Aucun coût supplémentaire | - Moins de contrôle sur les clés de chiffrement par rapport à CSE et SSE-C | - Usage général où la facilité de gestion est prioritaire<br>- Données moins sensibles |

Chaque méthode de chiffrement a ses propres forces et faiblesses. Le choix de la méthode dépend de plusieurs facteurs, notamment le niveau de sécurité requis, la complexité de la gestion des clés que vous êtes prêt à assumer, et les spécificités réglementaires ou de conformité auxquelles votre organisation doit adhérer.

> [!primary]
>
> Il n’y a pas de frais supplémentaires pour l’utilisation du chiffrement côté serveur avec SSE-C ou SSE-OMK.
>

### Cas d'usage recommandés pour le chiffrement sur Object Storage

#### CSE (Client-Side Encryption)

- **Idéal pour** : organisations avec des exigences de sécurité très élevées, nécessitant que les clés de chiffrement restent sous contrôle exclusif.
- **Adapté pour** : environnements réglementés strictement, tels que les institutions financières ou les services de santé.

#### SSE-C (Server-Side Encryption with Customer Keys)

- **Convient aux** : organisations recherchant un équilibre entre le contrôle des clés et la facilité de gestion.
- **Utile pour** : cas où les clients sont prêts à gérer les clés mais souhaitent déléguer le chiffrement et le déchiffrement.

#### SSE-OMK (Server-Side Encryption with OVHcloud-Managed Keys)

- **Parfait pour**:  utilisateurs préférant une solution clé en main sans la charge de la gestion des clés.
- **Méthode privilégiée pour** : entreprises cherchant à protéger leurs données sans nécessités spécifiques de conformité en matière de chiffrement.

Le choix entre ces méthodes doit être guidé par les politiques de sécurité et exigences réglementaires, ainsi que la capacité à gérer les clés de chiffrement. Un équilibre entre facilité d'utilisation et sécurité est essentiel.

### Exemples de scripts et commandes

#### CSE (Client-Side Encryption)

```bash
# Génération d'une clé de chiffrement côté client
client_key=$(openssl rand -base64 32)
# Chiffrement d'un fichier avant l'envoi
openssl enc -aes-256-cbc -salt -in path/to/your/file -out path/to/encrypted/file -pass pass:$client_key
# Envoi du fichier chiffré vers le bucket Object Storage
aws s3 cp path/to/encrypted/file s3://your-bucket/your-encrypted-object
```

#### SSE-C (Server-Side Encryption with Customer Keys)

```bash
# Création d'une clé de chiffrement et de son empreinte MD5
sse_c_key=$(openssl rand -base64 32)
sse_c_key_md5=$(echo -n $sse_c_key | openssl md5 -binary | base64)
# Téléchargement d'un objet avec chiffrement SSE-C
aws s3api put-object \
  --bucket your-bucket \
  --key your-object \
  --body path/to/your/file \
  --sse-customer-algorithm AES256 \
  --sse-customer-key $sse_c_key \
  --sse-customer-key-md5 $sse_c_key_md5
# Récupération d'un objet avec chiffrement SSE-C
aws s3api get-object \
  --bucket your-bucket \
  --key your-object \
  --sse-customer-algorithm AES256 \
  --sse-customer-key $sse_c_key \
  --sse-customer-key-md5 $sse_c_key_md5 \
  path/to/destination/file
```

#### SSE-OMK (Server-Side Encryption with OVHcloud-Managed Keys)

```bash
# Envoi d'un objet avec chiffrement SSE-OMK
aws s3api put-object \
  --bucket your-bucket \
  --key your-object \
  --body path/to/your/file \
  --server-side-encryption AES256
# Téléchargement d'un objet avec chiffrement SSE-OMK
aws s3api get-object \
  --bucket your-bucket \
  --key your-object \
  path/to/destination/file
```

## Dépannage et Résolution d'erreurs communnes

### Erreur lors de l'utilisation de SSE-C sans les en-têtes de chiffrement appropriés

- **En-têtes nécessaires** : assurez-vous que les en-têtes `--sse-customer-algorithm`, `--sse-customer-key`, et `--sse-customer-key-md5` sont inclus correctement dans votre commande.
- **Vérification de la clé**: Confirmez que la clé de chiffrement est exacte et n'a subi aucune modification ou altération depuis son utilisation pour chiffrer l'objet.

### En cas de perte de la clé de chiffrement SSE-C

- **Récupération impossible** : Si la clé de chiffrement est perdue, il n'est pas possible de récupérer les données chiffrées avec SSE-C. Conservez vos clés en lieu sûr et envisagez d'utiliser des services de gestion des clés pour améliorer la sécurité.

### Erreur de requête incorrecte lors de l'utilisation de SSE-OMK

- **Sans en-têtes spécifiques** : pour SSE-OMK, évitez de spécifier des en-têtes de chiffrement lors du téléchargement. L'option `--server-side-encryption AES256` suffit.
- **Vérification de la méthode de chiffrement**: assurez-vous que l'objet n'a pas été chiffré initialement avec une méthode différente.

### Problèmes de performance ou de latence lors du chiffrement/déchiffrement avec SSE-OMK

- ***Overhead* potentiel** : le chiffrement et le déchiffrement peuvent causer un *overhead*.
- **Optimisation de performance** : pour améliorer les performances, réalisez le chiffrement et le déchiffrement dans une région géographique proche de votre localisation pour minimiser la latence.

### En cas de perte de la clé de chiffrement SSE-C

- **Récupération impossible**: si la clé de chiffrement est perdue, il est impossible de récupérer les données chiffrées avec SSE-C. Gardez vos clés dans un endroit sûr et envisagez l'utilisation de services de gestion des clés pour améliorer la sécurité.

## Conclusion

Cette documentation met en évidence notre engagement à fournir des solutions de sécurité des données avancées. Que vous optiez pour le chiffrement côté client (CSE) ou côté serveur (SSE-OMK), notre objectif est de vous offrir une sécurité optimale avec un *overhead* opérationnel minimal.

L'OVHcloud Key Management Service (KMS) témoigne de notre engagement dans la sécurisation de vos données, offrant une protection complète sans les complexités de gestion directe des clés. Nous encourageons l'adoption de ces pratiques de chiffrement pour sécuriser vos données au repos, vous fournissant les outils et les connaissances nécessaires pour une mise en œuvre efficace. OVHcloud est à votre disposition pour toute assistance supplémentaire concernant le chiffrement et la sécurité des données. N'hésitez pas à consulter nos ressources supplémentaires ou à contacter notre support technique pour toute clarification ou assistance.

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).

**\*** : S3 est une marque déposée appartenant à Amazon Technologies, Inc. Les services de OVHcloud ne sont pas sponsorisés, approuvés, ou affiliés de quelque manière que ce soit.
