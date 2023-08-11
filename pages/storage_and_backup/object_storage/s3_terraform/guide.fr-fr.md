---
title: Object Storage - Gérer un bucket S3 avec Terraform
updated: 2023-03-14
---

**Dernière mise à jour le 14/03/2023**

## Objectif

Ce tutoriel va vous permettre d'automatiser et d'orchestrer des actions pour utiliser l'Object Storage - S3 API avec Terraform. Terraform est un outil open source permettant d'orchestrer la provision et la mise à disposition des ressources. Les actions suivantes seront automatisées :

- la création d'un utilisateur S3 ;
- la création d'un conteneur d'objet ;
- la copie d'un objet dans un bucket ;
- la gestion des accès des utilisateurs avec *S3 policies*.

## Prérequis

- Installer la CLI Terraform  (se réferer au [tutoriel](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli) d'Hashicorp, la société qui a créé Terraform). 
- Installer la commande git 
- Avoir accès aux API v6 (reportez à notre guide de [premiers pas avec les API OVHcloud](/pages/manage_and_operate/api/first-steps)). Une fois les accès aux API créés, exportez les 4 IDs dans les variables, tel que décrit ci-dessous :

```bash
$ export OVH_ENDPOINT=ovh-eu
$ export OVH_APPLICATION_KEY=Your_key_application_OVH(or_AK)
$ export OVH_APPLICATION_SECRET=Your_secret_application_key_OVH(or_AS)
$ export OVH_CONSUMER_KEY=Your_token(or_CK)
```   

- Un projet Public Cloud. Exportez l'ID dans la variable `TF_VAR_OVH_PUBLIC_CLOUD_PROJECT_ID` :

```bash
$ export TF_VAR_OVH_PUBLIC_CLOUD_PROJECT_ID=Your_public_cloud_project_id
```

**Si vous n'avez pas la CLI AWS configurée**, vous devez paramétrer les access key S3 et secret keys S3, peu importe leur valeur car elles seront surchargées. Cela est dû à une limitation de Terraform au moment de son initialisation (référez-vous au [ticket Terraform associé](https://github.com/hashicorp/terraform/issues/2430)) :

```bash
$ export AWS_ACCESS_KEY_ID="no_need_to_define_an_access_key"  
$ export AWS_SECRET_ACCESS_KEY="no_need_to_define_a_secret_key"
```

## En pratique

### Gérer un bucket S3 avec Terraform @OVHcloud

#### Initialisation

Clonez le répertoire depuis GitHub :

```bash
git clone https://github.com/yomovh/tf-at-ovhcloud && cd tf-at-ovhcloud/s3_bucket_only
```

Initialisez Terraform :

```bash
$ terraform init
```

#### Planification

Avec la commande suivante, vous verrez quelles sont les actions que Terraform va effectuer :

```bash
$ terraform plan
```

Regardez à présent le contenu du fichier `main.tf` :

- Le bloc *variable* définit la région et le *s3 endpoint* qui sont utilisés pour créer le bucket. Vous pouvez l'adapter en fonction de votre besoin : [Object Storage - Endpoints et géo-disponibilité de l’Object Storage](/pages/storage_and_backup/object_storage/s3_location) to know what region / endpoints are available..
- Le bloc *Providers* définit 2 providers : celui d'OVHcloud et celui d'Hashicorp AWS. Le premier est nécessaire pour créer les utilisateurs qui seront utilisés par le second.
- Le bloc *User / Credential* définit les user & credential qui sont visibles dans la table Settings > Users & Roles. Ils sont nécessaires pour la configuration du provider Hashicorp AWS provider.
- Le bloc Bucket définit le bucket 
- La sortie Output définit l'access et le secret key pouvant être utiles pour l'utilisation de la CLI.

#### Run

```bash
$ terraform apply
```

Vous pouvez aller dans la Console et vérifier la table « Object Storage ». Votre bucket est créé.

#### Suppression

Avec la commande ci-dessous, vous revenez à votre état initial : Terraform va détruire la ressource initialement créée.

```bash
$ terraform destroy
```

> [!primary]
>
> - Le script ne suit pas les bonnes pratiques de Terraform, à savoir séparer le projet en multiples fichiers tels que `provider.tf`, `main.tf`, `variables.tf`, `outputs.tf`, ... Ce point est intentionnel pour éviter de basculer dans de multiples fichiers pour cet exemple qui se veut didactique et simple.
>
> - Le secret créé par ce script est stocké dans le *[local state back-end](https://developer.hashicorp.com/terraform/language/settings/backends/local)*. Si vous utilisez ce back-end en production, assurez-vous de gérer le *state file* comme un secret.
>

### Automatisation des S3 policies avec Terraform

#### Initialisation

Clonez le répertoire :

```bash
git clone https://github.com/yomovh/tf-at-ovhcloud && cd tf-at-ovhcloud/s3_policy
```

Initialisez Terraform :

```bash
$ terraform init
```

#### Planification

Avec la commande suivante, vous verrez quelles sont les actions que Terraform va effectuer :

```bash
$ terraform plan
```

Regardez à présent le contenu du fichier `main.tf` file et comparez avec l'exemple précédent :

- Le bloc *User / Credential* définit 3 *user & credentials* : un *user* va être utilisateur du bucket et le créer, les deux autres vont avoir les droits read/write pour l'un et les accès read-only access pour l'autre.
- Le bloc *Bucket* réalise la création d'un objet dans un bucket.
- Le bloc *Policy* définit 2 S3 policies, une pour read/write et l'autre pour read-only.

#### Run

```bash
$ terraform apply
```

Maintenant allez dans le manager (Console) et vérifiez la table « Object Storage ». Vous verrez le bucket et l'objet.

Vous pouvez vérifier les accès en utilisant la CLI AWS et vérifier les user policies.

#### Suppression

Avec la commande ci-dessous, vous revenez à votre état initial : Terraform va détruire la ressource initialement créée :

```bash
$ terraform destroy
```

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com).
