---
title: Manager un bucket S3 avec Terraform
slug: s3/manage-s3-bucket-with-terraform
section: Tutorials
order: 140
updated: 2023-03-01
---

**Dernière mise à jour le 01/03/2023**

## Objectif

Ce tutorial va vous permettre d'automatiser, d'orchestrer des actions pour utiliser l'Object Storage - S3 API avec Terraform. Terraform est un outil open source permettant d'orchestrer la provision et mise à disposition des ressources. Les actions suivantes seront automatisées :

- la création d'un utilisateur *S3 user*
- la création d'un conteneur d'objet (=bucket)  *bucket creation*
- la copy d'un objet dans un bucket 
- la gestion des accès des utilisateurs avec *S3 policies*

## Prérequis

- Installer la CLI terraform  (se réferrer au [tutorial](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli) d'Hashicorp, qui est derrièreTerraform). 
- Installer la commande git 
- Demander les accès aux API v6 tels que décrit dans le guide : [https://docs.ovh.com/ca/fr/first-steps-with-ovh-api/](https://docs.ovh.com/ca/fr/first-steps-with-ovh-api/) . Une fois les accès aux API créée, vous exportez les 4 ID dans les variables comme décrit ici :

```bash
$ export OVH_ENDPOINT=ovh-eu
$ export OVH_APPLICATION_KEY=Your_key_application_OVH(or_AK)
$ export OVH_APPLICATION_SECRET=Your_secret_application_key_OVH(or_AS)
$ export OVH_CONSUMER_KEY=Your_token(or_CK)  
```   

- Un projet Public Cloud. Exportez l'ID dans la variable `TF_VAR_OVH_PUBLIC_CLOUD_PROJECT_ID`

```bash
$ export TF_VAR_OVH_PUBLIC_CLOUD_PROJECT_ID=Your_public_cloud_project_id  
```

**Si vous n'avez pas la CLI AWS configurée**, vous devez paramétrer les access key S3 et secret keys S3, même si cela est avec une valeur autre. Cela est du à une limitation de Terrafrom à son initialisation (se referrer au dernier ticket Terraform associé: [issue)](https://github.com/hashicorp/terraform/issues/2430)

```bash
$ export AWS_ACCESS_KEY_ID="no_need_to_define_an_access_key"  
$ export AWS_SECRET_ACCESS_KEY="no_need_to_define_a_secret_key"
```

## En pratique

### Manager un bucket S3 avec Terraform @OVHcloud

#### Initialisation

Cloner le répertoire depuis github

```bash
git clone https://github.com/yomovh/tf-at-ovhcloud && cd tf-at-ovhcloud/s3_bucket_only
```

Initialiser terraform

```bash
$ terraform init
```

#### Planification

Avec la commande suivante, vous verrez quelles sont les actions que Terraform va effectuer

```bash
$ terraform plan
```

Maintenant regardons le contenu du fichier `main.tf`:

- La *variable* block définit la région et le *s3 endpoint* qui sont utilisés pour créer le bucket. Vous pouvez l'adapter en fonction de votre besoin [https://docs.ovh.com/ca/fr/storage/object-storage/s3/location/](https://docs.ovh.com/ca/fr/storage/object-storage/s3/location/)
- Le bloc *Providers* block définit 2 providers : celui d'OVHcloud et celui d'Hashicorp AWS . Le premier est nécessaire pour pour créer les Users Openstack qui s'identifient aux access key et credentials S3 qui seront utilisés par le second
- Le bloc *User / Credential* block définit les user & credential qui sont visibles dans la table Settings > Users & Roles. Ils sont nécessaires pour la configuration du provider Hashicorp  AWS provider.
- Le Bucket block définit le bucket 
- La sortie Output définit l'access et le secret key pouvant être utiles pour l'utilisation de la CLI.

#### Run

```bash
$ terraform apply
```  

Vous pouvez aller dans la Console du Manager et vérifier la table "Object Storage". Votre bucket est créé !

#### Suppression

Avec la commande ci-dessous, vous revenez à votre état initial : terraform va détruire la ressource initialement créée.

```bash
$ terraform destroy
```

**Note :**

*   Le script ne suit pas les bonnes pratiques de terraform, de séparer le projet en multiples fichiers e.g. `provider.tf`, `main.tf`, `variables.tf`, `outputs.tf`, ... Ce point est intentionnel pour éviter de basculer dans de multiples fichiers lors de cet exemple qui se veut didactique et simple. 
*   Le secret créée par ce script est stocké dans le *[local](https://developer.hashicorp.com/terraform/language/settings/backends/local) state back-end*. Si vous utilisez ce back-end en production, assurez-vous d'utiliser le *state file* comme un secret.

### Automatisation des S3 policies avec Terraform

#### Initialisation

Cloner le répertoire

```bash
git clone https://github.com/yomovh/tf-at-ovhcloud && cd tf-at-ovhcloud/s3_policy
```

Initialiser Terraform

```bash
$ terraform init
```

#### Planification

Avec la commande suivante, vous verrez quelles sont les actions que Terraform va effectuer

```bash
$ terraform plan
```

Maintenant regardons le contenu du fichier `main.tf` file et comparons avec l'exemple précédant

- Le bloc *User / Credential* block définit 3 *user & credentials* : un *user* va être utilisateur du bucket et le créer, les deux autres vont avoir les droits read/write pour l'un et les accès read-only access pour l'autre.
- Le bloc *Bucket* block réalise la création d'un objet dans un bucket
- Le *Policy* block définit 2 S3 policies une pou read/write et l'autre pour read-only

#### Run

```bash
$ terraform apply
```

Maintenant allez dans le manager (Console) et vérifier la table "Object Storage". Vous verrez le bucket et l'objet.

Vous pouvez vérifier les accès en utilisant la CLI AWS et vérifier les user policies

#### Suppression

Avec la commande ci-dessous, vous revenez à votre état initial : terraform va détruire la ressource initialement créée

```bash
$ terraform destroy
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com).
