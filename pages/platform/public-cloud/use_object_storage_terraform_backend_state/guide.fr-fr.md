---
title: "Utiliser OVHcloud Object Storage comme Backend Terraform pour stocker votre état (state) Terraform"
slug: use_object_storage_terraform_backend_state
excerpt: "Découvrez comment utiliser l’Object Storage d’OVHcloud comme Backend Terraform pour stocker votre état (state) Terraform"
section: Tutoriels
order: 03
---

<style>
 pre {
     font-size: 14px;
 }
 pre.console {
   background-color: #300A24; 
   color: #ccc;
   font-family: monospace;
   padding: 5px;
   margin-bottom: 5px;
 }
 pre.console code {
   border: solid 0px transparent;
   font-family: monospace !important;
   font-size: 0.75em;
   color: #ccc;
 }
 .small {
     font-size: 0.75em;
 }
</style>

**Dernière mise à jour le 09/05/2022**

## Objectif

Il est possible de stocker l’état de Terraform (le `tfstate`) dans un data store/backend distant comme un compartiment /bucket AWS S3, un Google Cloud Storage (GCS). Mais savez-vous que vous pouvez également stocker vos états Terraform dans un conteneur OVHcloud Object Storage ?

Dans ce tutoriel, vous allez :

- Créer un conteneur Object Storage
- Créer un backend Terraform distant
- Créer un utilisateur OpenStack avec les droits Object Storage et récupérer ses identifiants OpenStack
- Initialiser votre backend Terraform

## Prérequis

- Être connecté votre [espace client OVHcloud](https://www.ovh.com/auth?onsuccess=https%3A%2F%2Fwww.ovh.com%2Fmanager%2Fpublic-cloud&ovhSubsidiary=fr)
- Une instance [Public Cloud](https://www.ovhcloud.com/fr/public-cloud/) dans votre compte OVHcloud
- Installation de la CLI [Terraform](https://www.terraform.io/downloads){.external}

## Avant de commencer

* Vous devez avoir installé Terraform CLI, version 0.12.x minimum, sur votre machine. Vous pouvez l'installer en suivant les instructions d'installation [détaillées](https://www.terraform.io/docs/cli/index.html){.external} ou avec l'outil [tfenv](https://github.com/tfutils/tfenv){.external}.

## Terraform

[Terraform](https://www.terraform.io/) est un outil open source d’Infrastructure as Code (IaC) créé par [Hashicorp](https://www.hashicorp.com/) en 2014 et écrit en Go. Il a pour but de construire, de modifier et de contrôler la version de votre infrastructure. Vous pouvez définir et provisionner votre infrastructure en écrivant la définition de vos ressources dans **Hashicorp Configuration Language** (HCL).

![Terraform](images/terraform.png){.thumbnail}

Cet outil dispose d’une interface de ligne de commande (CLI) puissante et très intuitive.
Si vous souhaitez tirer parti de vos connaissances sur Terraform CLI, consultez [l'aide-mémoire](https://github.com/scraly/terraform-cheat-sheet/blob/master/terraform-cheat-sheet.pdf){.external}.

Chez OVHcloud, nous avons créé un [provider Terraform](https://registry.terraform.io/providers/ovh/ovh/latest){.external} qui vous permet d'interagir et de gérer les ressources OVHcloud.

### Terraform states et backend

Terraform a plusieurs concepts, dont celui de `state` (état).

Un état Terraform est un snapshot de votre infrastructure depuis la dernière exécution de la commande `terraform apply`.
Par défaut, le fichier d'état est stocké localement dans un fichier `terraform.tfstate`.
Mais l’usage courant, en environnement de production, est de le stocker à distance.

![Terraform state schema](images/schema.png){.thumbnail}

Vous pouvez par exemple stocker votre état Terraform dans un conteneur Object Storage d'OVHcloud.

Pour ce faire, vous devez configurer un `backend` dans vos fichiers de configuration Terraform HCL.

> [!primary]
> 
> Les états Terraform ne sont pas chiffrés lorsqu'ils sont stockés dans un conteneur Object Storage.

## Instructions

### Création d'un conteneur/bucket Object Storage

Vous devez d’abord disposer d’un conteneur Object Storage. Si ce n’est pas le cas, suivez le tutoriel [Création d’un conteneur Object Storage](https://docs.ovh.com/fr/storage/object-storage/pcs/create-container/).

Pour ce guide, notre conteneur Object Storage s'appelle `terraform-state` et sa région `GRA`.

![terraform state container in OVHcloud Object Storage](images/object_storage.png){.thumbnail}

### Initialisation de la configuration de Terraform

Créez un fichier `backend.tf` avec le contenu suivant :

```yaml
terraform {
    backend "swift" {
        container = "terraform-state"
        region_name = "GRA"
        cloud = "tfstate"
        archive_container = "terraform-state-archive"
    }
}
```

Dans ce fichier, vous définissez un backend [Swift Terraform](https://www.terraform.io/language/settings/backends/swift) dans la région `GRA`. N'hésitez pas à modifier ce paramètre si vous avez créé un conteneur Object Storage dans une autre région.

Nous utilisons également un fichier OpenStack `clouds.yaml`.

> [!primary]
>
> N'oubliez pas de définir un `archive_container` pour activer le versioning des objets dans Swift.

### Création d'un utilisateur OpenStack avec les droits Object Storage

Afin de stocker vos états Terraform dans un Object Storage, et de manière générale si vous souhaitez interagir avec l'Object Storage, vous devez être en mesure de gérer un Object Storage.

Pour ce faire, vous allez créer un utilisateur OpenStack.

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), rendez-vous dans la section Public Cloud et sélectionnez le projet Public Cloud concerné.

Accédez à l'interface d'administration de vos clusters OVH Managed Kubernetes en cliquant sur `Users & Roles`{.action} dans le menu de gauche et cliquez sur `+ Add user`{.action}.

![Créer un utilisateur OpenStack](images/create_openstack_user1.png){.thumbnail}

Entrez une description de l'utilisateur que vous souhaitez créer, par exemple `Terraform` et cliquez sur `Suivant`{.action}.

![Créer un utilisateur OpenStack](images/create_openstack_user2.png){.thumbnail}

Vérifiez le rôle `ObjectStore operator` et cliquez sur `Confirmer`{.action}.

![Créer un utilisateur OpenStack](images/create_openstack_user3.png){.thumbnail}

Votre utilisateur est en cours de création.
L’identifiant et le mot de passe sont automatiquement générés et affichés dans votre espace client.

![Créer un utilisateur OpenStack](images/create_openstack_user4.png){.thumbnail}

Veillez à enregistrer le mot de passe affiché dans le message en vert, dans un gestionnaire de mots de passe, pour le moment. Le mot de passe ne pourra pas être récupéré par la suite. Cependant, il est toujours possible de créer un nouveau mot de passe en cliquant sur `...`{.action} et en sélectionnant `Générer un mot de passe`{.action}.

![Générer un mot de passe utilisateur OpenStack](images/create_openstack_user5.png){.thumbnail}

### Récupérer les identifiants OpenStack 

Cliquez sur `...`{.action} et sélectionnez `Lancer OpenStack Horizon`.

Entrez les informations d'utilisateur et de mot de passe que vous avez enregistrées, puis cliquez sur `Connexion`{.action}.

![Connexion à Horizon](images/horizon_login.png){.thumbnail}

Dans la barre latérale, cliquez sur `API Access`{.action}.

![Page d'accueil Horizon](images/horizon_hp.png){.thumbnail}

Cliquez sur le bouton `Télécharger un fichier`{.action} RC OpenStack, puis sur `OpenStack clouds.yaml File`{.action}.

![Accès API Horizon](images/horizon_api_access.png){.thumbnail}

Enregistrez le fichier `clouds.yaml` sur votre machine locale.

Il est nécessaire d’éditer le fichier généré `clouds.yaml` pour y renseigner tous les détails nécessaires à Terraform.

Modifiez ce fichier `clouds.yaml` comme ci-dessous :

```yaml
clouds:
  tfstate:
    auth:
      auth_url: https://auth.cloud.ovh.net/v3/
      domain_name: default
      username: "user-xxxxxx"
      password: xxxxx
      project_domain_name: default
      project_name: "xxxxx"
      user_domain_name: default
    region_name: GRA
```

> [!primary]
>
> Si la ligne de `mot de passe` est manquante dans votre fichier `clouds.yaml`, nous vous invitons à l'ajouter en reprenant le mot de passe que vous avez copié/collé précédemment.

Terraform a besoin de savoir où se trouvent vos identifiants OpenStack (fichier `clouds.yaml`), plusieurs possibilités s'offrent à vous :

- Placez le fichier `clouds.yaml` dans le répertoire de travail courant de vos fichiers Terraform
- Placez-le dans `~/.config/openstack`
- Ou placez-le sur `/etc/openstack`

Quelle que soit la solution choisie, Terraform recherche automatiquement le fichier `clouds.yaml`.

Dans ce guide, nous choisissons de l'enregistrer à côté du fichier `backend.tf` :

```bash
.
├── backend.tf
└── clouds.yaml
```

### Terraform Init

Vous pouvez maintenant initialiser votre configuration Terraform avec la commande `terraform init`.

La commande [terraform init](https://www.terraform.io/cli/commands/init) permet d'initialiser un répertoire de travail contenant les fichiers de configuration Terraform. Il s’agit de la première commande à exécuter après l’écriture d’une nouvelle configuration Terraform ou le clonage d’une configuration existante à partir du contrôle de version. Il est sûr d'exécuter cette commande plusieurs fois.

Cette commande initialise le backend (état distant ou local).

Après avoir exécuté cette commande, vous devriez obtenir un résultat comme ceci :

<pre class="console"><code>$ terraform init

Initializing the backend...

Successfully configured the backend "swift"! Terraform will automatically
use this backend unless the backend configuration changes.

Terraform has been successfully initialized!

You may now begin working with Terraform. Try running "terraform plan" to see
any changes that are required for your infrastructure. All Terraform commands
should now work.

If you ever set or change modules or backend configuration for Terraform,
rerun this command to reinitialize your working directory. If you forget, other
commands will detect it and remind you to do so if necessary.
</code></pre>

Il est maintenant possible de définir vos fichiers de configuration et providers/fournisseurs Terraform et, après l'exécution de la commande `terraform apply`, votre fichier d'état Terraform sera stocké dans un conteneur de l'Object Storage d'OVHcloud.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
