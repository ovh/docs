---
title: Comment utiliser Terraform sur le Public Cloud OVHcloud
slug: utiliser-terraform
description: Utilisation de Terraform
keywords: infrastructure, instance, cloud, creation
excerpt: Décrouvez comment utiliser l'outil Terraform pour abstraire le déploiement de votre infrastructure
section: Tutoriels
---

**Dernières mise à jour le 01/07/2021**

## Objectif

OpenStack est un système d'exploitation de Cloud open source pour la création et la gestion de plateformes de cloud computing publiques et privées. Les composants logiciels OpenStack constituent la base de l'infrastructure Public Cloud de OVHcloud.

L'outil Open Source Terraform a été développé pour faciliter la création d'infrastructures de Cloud complexes. Il permet d'extraire les propriétés de votre infrastructure dans des fichiers texte qui peuvent servir de base au déploiement de votre infrastructure.

**Découvrez comment utiliser Terraform sur le Public Cloud OVHcloud.**

## Prérequis

* [Configurer un accès utilisateur à Horizon](../creer-un-acces-a-horizon/)
* [Préparer l’environnement pour utiliser l’API OpenStack](../preparer-lenvironnement-pour-utiliser-lapi-openstack/)
* [Charger les variables d'environnement OpenStack](../charger-les-variables-denvironnement-openstack/)
* [Disposer de vos identifiants API et de votre clé d'autorisation OVHcloud](https://docs.ovh.com/fr/api/api-premiers-pas/)
* [Une clé SSH](../creation-des-cles-ssh/)
* [Le provider Terraform OpenStack](https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs){.external}
* [Le provider Terraform OVHcloud](https://registry.terraform.io/providers/ovh/ovh/latest/docs){.external}

> [!primary]
>
> Ce tutoriel est compatible avec les versions 0.14.0 et suivantes de Terraform.
>

## En pratique

### Créer un environement Terraform

Après l'installation de Terraform, pour tous les fichiers texte décrivant votre infrastructure :

```console
mkdir test_terraform && cd test_terraform
```

Vous pouvez à présent créer un environnement Terraform avec la commande suivante. Cela vous permettra de créer et de gérer l'évolution de votre infrastructure.

```console
terraform workspace new test_terraform
```

### Créer des ressources

#### Définir un fournisseur (provider)

Dans Terraform, vous spécifiez des « fournisseurs » (ou *providers*) pour votre environnement cloud. Un « fournisseur » (tel que OVHcloud) héberge vos ressources d'infrastructure OpenStack.

Dans un fichier nommé *provider.tf*, insérez les lignes suivantes :

```python
# Définir les providers et fixer les versions
terraform {
required_version    = ">= 0.14.0"                    # Prend en compte les versions de terraform à partir de la 0.14.0
  required_providers {
    openstack = {
      source  = "terraform-provider-openstack/openstack"
      version = "~> 1.42.0"
    }
 
    ovh = {
      source  = "ovh/ovh"
      version = ">= 0.13.0"
    }
  }
}
 
# Configure le fournisseur OpenStack hébergé par OVHcloud
provider "openstack" {
  auth_url    = "https://auth.cloud.ovh.net/v3/"    # URL d'authentification
  domain_name = "default"                           # Nom de domaine - Toujours à "default" pour OVHcloud
  alias       = "ovh"                               # Un alias
}
```

Faites un clic-droit <a href="https://raw.githubusercontent.com/ovh/docs/develop/pages/platform/public-cloud/how_to_use_terraform/images/TF1.txt" download>ici et cliquez sur « Enregistrer le lien sous »</a> pour télécharger uniquement le code ci-dessus en fichier texte.

Un « alias » est un identifiant unique pour un type de fournisseur. Par exemple, si vous avez deux fournisseurs OpenStack avec des informations d'identification différentes, vous devez spécifier chaque fournisseur dans la ressource.

#### Créer une instance

Dans Terraform, une « ressource » est un composant de votre infrastructure. Il peut s'agir d'une instance, d'un bloc de stockage, fourni par un fournisseur OpenStack ou un réseau fourni par le fournisseur OVHcloud.

Pour créer une instance simple, vous avez besoin de 4 éléments :

* Un nom d'instance
* Une image
* Un type d'instance (flavor)
* Une clé SSH

A des fins d'exemple, nous allons créer une instance simple sur **Debian 10** avec la flavor **s1-2**, et importer une clé SSH. Ajoutez les lignes suivantes dans un fichier nommé *simple_instance.tf* :

```python
# Création d'une ressource de paire de clés SSH
resource "openstack_compute_keypair_v2" "test_keypair" {
  provider   = openstack.ovh             # Nom du fournisseur déclaré dans provider.tf
  name       = "test_keypair"            # Nom de la clé SSH à utiliser pour la création
  public_key = file("~/.ssh/id_rsa.pub") # Chemin vers votre clé SSH précédemment générée
}
 
# Création d'une instance
resource "openstack_compute_instance_v2" "test_terraform_instance" {
  name        = "terraform_instance"    # Nom de l'instance
  provider    = openstack.ovh           # Nom du fournisseur
  image_name  = "Debian 10"             # Nom de l'image
  flavor_name = "s1-2"                  # Nom du type d'instance
  # Nom de la ressource openstack_compute_keypair_v2 nommée test_keypair
  key_pair    = openstack_compute_keypair_v2.test_keypair.name
  network {
    name      = "Ext-Net" # Ajoute le composant réseau pour atteindre votre instance
  }
}
```

Faites un clic-droit <a href="https://raw.githubusercontent.com/ovh/docs/develop/pages/platform/public-cloud/how_to_use_terraform/images/TF2.txt" download>ici et cliquez sur « Enregistrer le lien sous »</a> pour télécharger uniquement le code ci-dessus en fichier texte.

Vous devez maintenant [créer un nouvel utilisateur OpenStack](https://docs.ovh.com/fr/public-cloud/creation-et-suppression-dun-utilisateur-openstack/) puis [générer le fichier OpenRC](https://docs.ovh.com/fr/public-cloud/charger-les-variables-denvironnement-openstack/#etape-1-recuperer-les-variables) contenant l'ensemble des identifiants à exporter en variables d'environnement.

Chargez ce fichier puis saisissez le mot de passe de l'utilisateur créé précédemment :

```console
$ source openrc.sh
Please enter your OpenStack Password:
```

Vous devez maintenant initialiser votre workspace afin de pouvoir télécharger les plugins du provider :

```console
terraform init
```

Afin de voir ce qui va être ajouté/créé/supprimé dans votre infrastructure, vous pouvez utiliser :

```console
terraform plan
```

Vous pouvez entrer la commande suivante pour importer votre clé SSH et créer votre première instance :

```console
terraform apply
```

Si vous vous connectez à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) ou sur [l'interface Horizon](https://horizon.cloud.ovh.net/auth/login/), vous devriez y trouver une instance nommée « terraform_instance ».

> [!primary]
> Notez que la création d'une seconde instance identique avec « terraform apply » ne fonctionnera pas.
> <br>Terraform applique les modifications uniquement s'il détecte une différence dans vos fichiers de configuration ou si un nouveau fichier est créé.
>

#### Créer des instances multiples

Dans cette partie, nous souhaitons créer une instance sous Ubuntu avec la flavor « s1-2 » dans chaque région.

Vous pouvez rechercher tous les noms de régions en utilisant cet appel API OVHcloud :

> [!api]
>
> @api {GET} cloud/project/{serviceName}/region
>

Nous utiliserons les régions OVHcloud suivantes pour cet exemple :

* GRA11
* SBG5
* BHS5

Vous pouvez créer trois ressources nommées « openstack_compute_instance_v2 » et modifier le paramètre de région pour chacune d'elles. Néanmoins, il peut devenir difficile de gérer des fichiers avec une grande quantité de ressources identiques.

C'est pour cela que Terraform propose un meta paramètre appelé « count ». Ce paramètre permet de préciser à Terraform de créer plusieurs fois une même ressource.

Pour ce faire, vous pouvez créer un fichier nommé *multiple_instance.tf*. Vous y définirez d'abord une variable contenant les trois régions, puis vous ajoutez un compteur de création d'instances :

```python
# Créer une variable région contenant la liste des régions OVHcloud
# On l'utilisera pour itérer sur les différentes régions afin de
# démarrer une instance sur chacune d'entre elles.
 variable "region" {
   type = list
   default = ["GRA11", "SBG5", "BHS5"]
 }
  
# Création d'une paire de clé SSH
 resource "openstack_compute_keypair_v2" "test_keypair_all" {
   count = length(var.region)
   provider = openstack.ovh                         # Préciser le nom du fournisseur
   name = "test_keypair_all"                        # Nom de la clé SSH
   public_key = file("~/.ssh/id_rsa.pub")           # Chemin de votre clé SSH
   region = element(var.region, count.index)
 }
  
 # Créer une ressource qui est une instance OpenStack dans chaque région
 resource "openstack_compute_instance_v2" "instances_on_all_regions" {
   # Nombre de fois où la ressource sera créée
   # défini par la longueur de la liste nommée région
   count = length(var.region)
   provider = openstack.ovh                         # Nom du fournisseur
   name = "terraform_instances"                     # Nom de l'instance
   flavor_name = "s1-2"                             # Nom du type d'instance
   image_name = "Debian 10"                         # Nom de l'image
   # element est une fonction qui accède à l'élément à la position
   # count.index de la liste var.region. Il permet d'itérer entre les régions
   region = element(var.region, count.index)
   # Accède au nom de la variable de la ressource openstack_compute_keypair_v2 nommée test_keypair
   key_pair = element(openstack_compute_keypair_v2.test_keypair_all.*.name, count.index)
   network {
     name = "Ext-Net"                               # Ajoute le réseau public à votre instance
   }
 }
```

Faites un clic-droit <a href="https://raw.githubusercontent.com/ovh/docs/develop/pages/platform/public-cloud/how_to_use_terraform/images/TF3.txt" download>ici et cliquez sur « Enregistrer le lien sous »</a> pour télécharger uniquement le code ci-dessus en fichier texte.

Vérifiez les modifications à apporter à votre infrastructure à l'aide de la commande suivante :

```console
terraform plan
```

Appliquez vos modifications à l'aide de la commande suivante :

```console
terraform apply
```

Terraform peut créer plusieurs instances avec cette méthode, mais vous pouvez l'utiliser également pour modifier votre infrastructure actuelle.

#### Modifier une instance

Dans cet exemple, nous allons attacher un nouveau volume de stockage à notre première instance. Ouvrez et modifiez le fichier nommé *simple_instance.tf*, puis ajoutez les lignes suivantes :

```python
# Créer une ressource de stockage
resource "openstack_blockstorage_volume_v2" "volume_to_add" {
  name = "simple_volume"                           # Nom du volume
  size = 10                                        # Taille du volume en GB
  provider = openstack.ovh                         # Nom du fournisseur
}
 
# Ajouter à l'instance le volume créé précédemment
resource "openstack_compute_volume_attach_v2" "attached" {
  # Identifiant de la ressource openstack_compute_instance_v2 nommée test_terraform_instance
  instance_id = openstack_compute_instance_v2.test_terraform_instance.id
  # Identifiant de la ressource openstack_blockstorage_volume_v2 nommée volume_to_add
  volume_id = openstack_blockstorage_volume_v2.volume_to_add.id
}
```

Faites un clic-droit <a href="https://raw.githubusercontent.com/ovh/docs/develop/pages/platform/public-cloud/how_to_use_terraform/images/TF4.txt" download>ici et cliquez sur « Enregistrer le lien sous »</a> pour télécharger uniquement le code ci-dessus en fichier texte.

Vérifiez les modifications à apporter à votre infrastructure à l'aide de la commande suivante :

```console
terraform plan
```

Appliquez vos modifications à l'aide de la commande suivante :

```console
terraform apply
```

#### Créer une instance dans le réseau OVHcloud (vRack)

Le plug-in Terraform OVHcloud peut gérer des réseaux privés, des sous-réseaux privés, des utilisateurs Public Cloud et des liaisons vRack. Dans cette partie, nous nous concentrerons sur la création du réseau.

Premièrement, vous devez [créer les identifiants OVHcloud](https://docs.ovh.com/fr/api/api-premiers-pas/#creer-les-cles-de-votre-application) puis les charger dans votre environnement. Personnalisez les commandes avec vos valeurs réelles :

```console
$ export OVH_ENDPOINT=ovh-eu
$ export OVH_APPLICATION_KEY=Votre_cle_dapplication_OVH(ou_AK)
$ export OVH_APPLICATION_SECRET=Votre_cle_dapplication_secrete_OVH(ou_AS)
$ export OVH_CONSUMER_KEY=Votre_token(ou_CK)
$ export TF_ACC=1
```

Ajoutez ensuite au fichier *provider.tf* les lignes suivantes :

```python
# Configuration du fournisseur
provider "ovh" {
  endpoint = "ovh-eu"                                      # Point d'entrée du fournisseur
  alias    = "ovh"                                         # Alias du fournisseur
}
```

Faites un clic-droit <a href="https://raw.githubusercontent.com/ovh/docs/develop/pages/platform/public-cloud/how_to_use_terraform/images/TF5.txt" download>ici et cliquez sur « Enregistrer le lien sous »</a> pour télécharger uniquement le code ci-dessus en fichier texte.

Créez à présent un fichier *create_private_network_instance.tf* et insérez-y le contenu suivant :

```python
# Association du projet cloud au vRack
 resource "ovh_vrack_cloudproject" "vcp" {
  service_name = "VRACK_NAME"                               # Remplacez par le nom de votre vRack
  project_id   = "OS_TENANT_ID"                             # Remplacez OS_TENANT_ID par votre Tenant ID de projet
} 
 # Création d'un réseau privé
 resource "ovh_cloud_project_network_private" "network" {
    service_name = "OS_TENANT_ID"                           # Remplacez OS_TENANT_ID par votre Tenant ID de projet
    name         = "private_network"                        # Nom du réseau
    regions      = ["OS_REGION_NAME"]                       # Remplacez OS_REGION_NAME par la variable d'environnement OS_REGION_NAME
    provider     = ovh.ovh                                  # Nom du fournisseur
    vlan_id      = 168                                      # Identifiant du vlan pour le vRrack
    depends_on   = [ovh_vrack_cloudproject.vcp]             # Dépend de l'association du vrack au projet cloud
 }
  
 # Création d'un sous-réseau grâce au réseau privé créé précédemment
 resource "ovh_cloud_project_network_private_subnet" "subnet" {
    service_name = "OS_TENANT_ID"                               # Remplacez OS_TENANT_ID par votre Tenant ID de projet
    # Identifiant de la ressource ovh_cloud_network_private nommée network
    network_id   = ovh_cloud_project_network_private.network.id
    start        = "192.168.168.100"                            # Première IP du sous réseau
    end          = "192.168.168.200"                            # Dernière IP du sous réseau
    network      = "192.168.168.0/24"                           # Place d'adressage IP du sous réseau
    dhcp         = true                                         # Activation du DHCP
    region       = "OS_REGION_NAME"                             # Remplacez OS_REGION_NAME par la variable d'environnement OS_REGION_NAME
    provider     = ovh.ovh                                      # Nom du fournisseur
    no_gateway   = true                                         # Pas de gateway par defaut
 }
  
 # Création d'une instance avec 2 interfaces réseau
 resource "openstack_compute_instance_v2" "proxy_instance" {
   provider     = openstack.ovh                             # Nom du fournisseur
   name         = "proxy_instance"                              # Nom de l'instance
   image_name   = "Debian 10"                           # Nom de l'image
   flavor_name  = "s1-2"                                # Nom du type d'instance
   # Nom de la ressource openstack_compute_keypair_v2 nommée test_keypair
   key_pair     = openstack_compute_keypair_v2.test_keypair.name
   # Ajout du réseau public et privé
   network {
        name    = "Ext-Net"
    }
   network {
        name    = ovh_cloud_project_network_private.network.name
    }
 }
```

Faites un clic-droit <a href="https://raw.githubusercontent.com/ovh/docs/develop/pages/platform/public-cloud/how_to_use_terraform/images/TF6.txt" download>ici et cliquez sur « Enregistrer le lien sous »</a> pour télécharger uniquement le code ci-dessus en fichier texte.

Vérifiez les modifications à apporter à votre infrastructure à l'aide de la commande suivante :

```console
terraform plan
```

Appliquez vos modifications à l'aide de la commande suivante :

```console
terraform apply
```

Vous verrez apparaître dans votre projet Public Cloud une nouvelle instance, avec une interface publique et une interface privée.

#### Creation d'une infrastructure pour un site web

Dans cet exemple, nous allons créer une infrastructure de site Web de base à l'aide de Terraform et du réseau privé OVHcloud. Les composants créés sont les suivants :

* Un réseau privé
* Un sous-réseau
* 2 instances avec 2 interfaces réseau chacune : la première publique et la seconde privée, représentant les frontaux web
* 1 instance avec 1 interface réseau et 2 disques additionnels, représentant la BDD

![public-cloud](images/basic_infrastructure_for_a_web_site.png){.thumbnail}

Créez un fichier *simple_web_site.tf* et entrez les lignes suivantes :

```python
# Création d'un réseau privé
resource "ovh_cloud_project_network_private" "private_network" {
  service_name  = "c076ca2979904ef6bf93faff181dab18" # Remplacer OS_TENANT_ID par votre Tenant ID de projet
  name          = "backend"                          # Nom du réseau
  regions       = ["SBG5"]                           # Remplacez OS_REGION_NAME par la variable d'environnement OS_REGION_NAME
  provider      = ovh.ovh                            # Nom du fournisseur
  vlan_id       = 42                                 # Identifiant du vlan pour le vRrack
  depends_on    = [ovh_vrack_cloudproject.vcp]       # Depend de l'association du vRack au projet cloud
}
 
# Création d'un sous réseau privé
resource "ovh_cloud_project_network_private_subnet" "private_subnet" {
  # Identifiant de la ressource ovh_cloud_network_private nommée private_network
  network_id    = ovh_cloud_project_network_private.private_network.id
  service_name  = "c076ca2979904ef6bf93faff181dab18" # Remplacez OS_TENANT_ID par votre Tenant ID de projet
  region        = "SBG5"                             # Remplacez OS_REGION_NAME par la variable d'environnement OS_REGION_NAME
  network       = "192.168.42.0/24"                  # IP du sous réseau
  start         = "192.168.42.2"                     # Première IP du sous réseau
  end           = "192.168.42.200"                   # Dernière IP du sous réseau
  dhcp          = false                              # Désactivation du DHCP
  provider      = ovh.ovh                            # Nom du fournisseur
  no_gateway    = true                               # Pas de gateway par defaut
}
 
# Chercher l'image Archlinux la plus récente
data "openstack_images_image_v2" "archlinux" {
  name          = "Archlinux"   # Nom de l'image
  most_recent   = true          # Limite la recherche à la plus récente
  provider      = openstack.ovh # Nom du fournisseur
}
 
# Liste d'adresses IP privées possibles pour les frontaux
variable "front_private_ip" {
  type          = list(any)
  default       = ["192.168.42.2", "192.168.42.3"]
}
 
# Création de 2 instances avec 2 interfaces réseau
resource "openstack_compute_instance_v2" "front" {
  count           = length(var.front_private_ip)                # Nombre d'instances à créer
  provider        = openstack.ovh                               # Nom du fournisseur
  name            = "front"                                     # Nom de l'instance
  key_pair        = openstack_compute_keypair_v2.test_keypair.name
  flavor_name     = "s1-2"                                      # Nom du type d'instance
  image_id        = data.openstack_images_image_v2.archlinux.id # Identifiant de l'image de l'instance
  security_groups = ["default"]                                 # Ajoute l'instance au groupe de sécurité
  network {
    name = "Ext-Net" # Nom de l'interface réseau publique
  }
  network {
    # Nom de l'interface réseau privé
    name = ovh_cloud_project_network_private.private_network.name
    # Adresse IP prise depuis la liste définie précédemment
    fixed_ip_v4 = element(var.front_private_ip, count.index)
  }
  depends_on = [ovh_cloud_project_network_private_subnet.private_subnet] # Dépend du réseau privé
}
 
# Création d'un périphérique de stockage attachable pour le backup (volume)
resource "openstack_blockstorage_volume_v2" "backup" {
  name     = "backup_disk" # Nom du périphérique de stockage
  size     = 10            # Taille
  provider = openstack.ovh # Nom du fournisseur
}
 
# Création d'une instance avec une interface réseau et d'un phériphérique de stockage
resource "openstack_compute_instance_v2" "back" {
  provider        = openstack.ovh                                        # Nom du fournisseur
  name            = "back"                                               # Nom de l'instance
  key_pair        = openstack_compute_keypair_v2.test_keypair.name
  flavor_name     = "s1-2"                                               # Nom du type d'instance
  image_id        = data.openstack_images_image_v2.archlinux.id          # Identifiant de l'image de l'instance
  security_groups = ["default"]                                          # Ajoute l'instance au groupe de sécurité
  network {
    name        = ovh_cloud_project_network_private.private_network.name # Nom du réseau privé
    fixed_ip_v4 = "192.168.42.150"                                       # Addresse IP privée choisie arbitrairement
  }
  # Périphérique de stockage bootable contenant l'OS
  block_device {
    uuid                  = data.openstack_images_image_v2.archlinux.id # Identifiant de l'image de l'instance
    source_type           = "image"                                     # Type de source
    destination_type      = "local"                                     # Destination
    volume_size           = 10                                          # Taille
    boot_index            = 0                                           # Ordre de boot
    delete_on_termination = true                                        # Le périphérique sera supprimé quand l'instance sera supprimée
  }
  # Périphérique de stockage
  block_device {
    source_type           = "blank"                                     # Type de source
    destination_type      = "volume"                                    # Destination
    volume_size           = 20                                          # Taille
    boot_index            = 1                                           # Ordre de boot
    delete_on_termination = true                                        # Le périphérique sera supprimé quand l'instance sera supprimée
  }
  # Périphérique de stockage créé précédemment
  block_device {
    uuid                  = openstack_blockstorage_volume_v2.backup.id # Identifiant du périphérique de stockage
    source_type           = "volume"                                   # Type de source
    destination_type      = "volume"                                   # Destination
    boot_index            = 2                                          # Ordre de boot
    delete_on_termination = true                                       # Le périphérique sera supprimé quand l'instance sera supprimée
  }
  depends_on = [ovh_cloud_project_network_private_subnet.private_subnet] # Dépend du réseau privé
}
```

Faites un clic-droit <a href="https://raw.githubusercontent.com/ovh/docs/develop/pages/platform/public-cloud/how_to_use_terraform/images/TF7.txt" download>ici et cliquez sur « Enregistrer le lien sous »</a> pour télécharger uniquement le code ci-dessus en fichier texte.

Vérifiez les modifications à apporter à votre infrastructure à l'aide de la commande suivante :

```console
terraform plan
```

Appliquez vos modifications à l'aide de la commande suivante :

```console
terraform apply
```

### Supprimer une infrastructure

Pour supprimer toutes les ressources, vous pouvez entrer la commande suivante:

```console
terraform destroy
```

## Aller plus loin

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com/>.
