---
title: Comment utiliser Terraform sur le Public Cloud OVHcloud
slug: utiliser-terraform
description: Utilisation de Terraform
keywords: infrastructure, instance, cloud, creation
excerpt: Décrouvez comment utiliser l'outil Terraform pour abstraire le déploiement de votre infrastructure
section: Tutoriels
order: 02
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

**Dernières mise à jour le 27/05/2022**

## Objectif

OpenStack est un système d'exploitation de Cloud open source pour la création et la gestion de plateformes de cloud computing publiques et privées. Les composants logiciels OpenStack constituent la base de l'infrastructure Public Cloud de OVHcloud.

L'outil Open Source Terraform a été développé pour faciliter la création d'infrastructures de Cloud complexes. Il permet d'extraire les propriétés de votre infrastructure dans des fichiers texte qui peuvent servir de base au déploiement de votre infrastructure.

À titre d’exemple, la vidéo ci-dessous vous montre comment faire évoluer facilement le nombre d’instances, tout en conservant votre infrastructure existante, en ne modifiant qu’une seule ligne de code :

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/TFfKd24rzvE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Découvrez comment utiliser Terraform sur le Public Cloud OVHcloud.**

## Prérequis

* [Configurer un accès utilisateur à Horizon](../horizon/)
* [Préparer l’environnement pour utiliser l’API OpenStack](../prepare_the_environment_for_using_the_openstack_api/)
* [Charger les variables d'environnement OpenStack](../set-openstack-environment-variables/)
* [Disposer de vos identifiants API et de votre clé d'autorisation OVHcloud](https://docs.ovh.com/ca/fr/api/first-steps-with-ovh-api/)
* [Une clé SSH](../premiers-pas-instance-public-cloud/)
* [Le provider Terraform OpenStack](https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs){.external}
* [Le provider Terraform OVHcloud](https://registry.terraform.io/providers/ovh/ovh/latest/docs){.external}

> [!primary]
>
> Ce tutoriel est compatible avec les versions 0.14.0 et suivantes de Terraform.
>

## En pratique

### Créer un environnement Terraform

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

provider "ovh" {
  alias              = "ovh"
  endpoint           = "ovh-eu"
  application_key    = "<votre_access_key>"
  application_secret = "<votre_application_secret>"
  consumer_key       = "<votre_consumer_key>"
}
```

> [!primary]
> Si vous ne souhaitez pas définir vos secrets dans le fichier de configuration Terraform, vous pouvez également les définir dans des variables d'environnement :
> 
> ```console
> $ export OVH_ENDPOINT=ovh-eu
> $ export OVH_APPLICATION_KEY=Your_key_application_OVH(or_AK)
> $ export OVH_APPLICATION_SECRET=Your_secret_application_key_OVH(or_AS)
> $ export OVH_CONSUMER_KEY=Your_token(or_CK)
> ```

Un « alias » est un identifiant unique pour un type de fournisseur. Par exemple, si vous avez deux fournisseurs OpenStack avec des informations d'identification différentes, vous devez spécifier chaque fournisseur dans la ressource.

Il faut maintenant [créer un nouvel utilisateur OpenStack](https://docs.ovh.com/ca/fr/public-cloud/creation-et-suppression-dun-utilisateur-openstack/), puis [générer le fichier OpenRC ](https://docs.ovh.com/ca/fr/public-cloud/set-openstack-environment-variables/#etape-1-recuperer-les-variables) contenant tous les identifiants que vous souhaitez exporter en tant qu'environnement variables.

Chargez ce fichier, puis entrez le mot de passe de l'utilisateur que vous avez créé précédemment :

```console
$ source openrc.sh
Please enter your OpenStack Password:
```

Vous devez maintenant initialiser votre espace de travail afin de télécharger les plugins du provider (fournisseur) :

```console
terraform init
```

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

Afin de voir ce qui va être ajouté/créé/supprimé dans votre infrastructure, vous pouvez utiliser :

```console
terraform plan
```

Vous pouvez entrer la commande suivante pour importer votre clé SSH et créer votre première instance :

```console
terraform apply
```

La sortie devrait ressembler à ceci :

<pre class="console"><code>$ terraform apply
openstack_compute_keypair_v2.test_keypair: Refreshing state... [id=test_keypair]

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # openstack_compute_instance_v2.test_terraform_instance will be created
  + resource "openstack_compute_instance_v2" "test_terraform_instance" {
      + access_ip_v4        = (known after apply)
      + access_ip_v6        = (known after apply)
      + all_metadata        = (known after apply)
      + all_tags            = (known after apply)
      + availability_zone   = (known after apply)
      + flavor_id           = (known after apply)
      + flavor_name         = "s1-2"
      + force_delete        = false
      + id                  = (known after apply)
      + image_id            = (known after apply)
      + image_name          = "Debian 10"
      + key_pair            = "test_keypair"
      + name                = "terraform_instance"
      + power_state         = "active"
      + region              = (known after apply)
      + security_groups     = (known after apply)
      + stop_before_destroy = false

      + network {
          + access_network = false
          + fixed_ip_v4    = (known after apply)
          + fixed_ip_v6    = (known after apply)
          + floating_ip    = (known after apply)
          + mac            = (known after apply)
          + name           = "Ext-Net"
          + port           = (known after apply)
          + uuid           = (known after apply)
        }
    }

Plan: 1 to add, 0 to change, 0 to destroy.

Do you want to perform these actions in workspace "test_terraform"?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes

openstack_compute_instance_v2.test_terraform_instance: Creating...
openstack_compute_instance_v2.test_terraform_instance: Still creating... [10s elapsed]
openstack_compute_instance_v2.test_terraform_instance: Still creating... [20s elapsed]
openstack_compute_instance_v2.test_terraform_instance: Creation complete after 25s [id=f83d3a7a-xxxx-xxxx-xxxx-53c2cee0b0fd]

Apply complete! Resources: 1 added, 0 changed, 0 destroyed.
</code></pre>

Connectez-vous maintenant à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc), cliquez sur ` Public Cloud`{.action} et cliquez sur `Instances`{.action}.
Comme vous pouvez le voir, votre instance nommée "terraform_instance" est en train de se créer.

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

Pour ce faire, vous pouvez créer un fichier nommé `multiple_instance.tf`. Vous y définirez d'abord une variable contenant les trois régions, puis vous ajoutez un compteur de création d'instances :

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

Créez à présent un fichier `create_private_network_instance.tf` et insérez-y le contenu suivant :

```python
variable "service_name" {
  default = "OS_PROJECT_ID" # Remplacez par le service name / la valeur de OS_PROJECT_ID
}

variable "project_id" {
  default = "OS_TENANT_ID" # Remplacez OS_TENANT_ID par votre Project Tenant ID
}

variable "region" {
  default = "GRA11" # Remplacez avec votre region, par exemple avec le contenu de la variable d'environment OS_REGION_NAME
}

# Association du projet cloud au vRack
 resource "ovh_vrack_cloudproject" "vcp" {
  service_name = var.service_name
  project_id   = var.project_id
} 

 # Création d'un réseau privé
 resource "ovh_cloud_project_network_private" "network" {
    service_name = var.service_name
    name         = "private_network"                        # Nom du réseau
    regions      = [var.region]
    provider     = ovh.ovh                                  # Nom du fournisseur
    vlan_id      = 168                                      # Identifiant du vlan pour le vRrack
    depends_on   = [ovh_vrack_cloudproject.vcp]             # Dépend de l'association du vrack au projet cloud
 }
  
 # Création d'un sous-réseau grâce au réseau privé créé précédemment
 resource "ovh_cloud_project_network_private_subnet" "subnet" {
    service_name = var.service_name
    # Identifiant de la ressource ovh_cloud_network_private nommée network
    network_id   = ovh_cloud_project_network_private.network.id
    start        = "192.168.168.100"                            # Première IP du sous réseau
    end          = "192.168.168.200"                            # Dernière IP du sous réseau
    network      = "192.168.168.0/24"                           # Place d'adressage IP du sous réseau
    dhcp         = true                                         # Activation du DHCP
    region       = var.region
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

> [!primary]
>
> Cette création d'instance est liée à la ressource `openstack_compute_keypair_v2.test_keypair` que vous avez créée précédemment dans ce guide.

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
variable myregion {
  default = "SBG5" # Remplacez par la valeur de la variable d'environnment OS_REGION_NAME
}

# Création d'un réseau privé
resource "ovh_cloud_project_network_private" "private_network" {
  service_name  = var.service_name
  name          = "backend"                          # Nom du réseau
  regions       = [var.myregion] 
  provider      = ovh.ovh                            # Nom du fournisseur
  vlan_id       = 42                                 # Identifiant du vlan pour le vRrack
  depends_on    = [ovh_vrack_cloudproject.vcp]       # Depend de l'association du vRack au projet cloud
}
 
# Création d'un sous réseau privé
resource "ovh_cloud_project_network_private_subnet" "private_subnet" {
  # Identifiant de la ressource ovh_cloud_network_private nommée private_network
  network_id    = ovh_cloud_project_network_private.private_network.id
  service_name  = var.service_name
  region        = var.myregion
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

Vérifiez les modifications à apporter à votre infrastructure à l'aide de la commande suivante :

```console
terraform plan
```

Appliquez vos modifications à l'aide de la commande suivante :

```console
terraform apply
```

#### Création d'un projet Public Cloud

La création d'un projet OVHcloud est également possible directement par code, via Terraform.

Néanmoins, deux conditions s’appliquent :

- Vous devez avoir au moins 3 projets Public Cloud (notez qu'il y a une limite par défaut de 3 projets maximum). Afin de débloquer cette limite, merci d’effectuer une demande auprès de notre support.
- Avoir créé un projet Public Cloud au cours des 3 derniers mois.

Si l'une de ces conditions n'est pas remplie, vous obtiendrez l'erreur suivante :  `Found eligibility issues: challengePaymentMethod`.<br>
Dans ce cas, la seule solution est de vous connecter à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) pour créer un projet.<br>
Vous serez alors invité à valider que vous êtes bien le propriétaire des moyens de paiement utilisés sur ce compte (cette validation dépend des moyens de paiement et d'autres paramètres).

Ces règles et ces actions supplémentaires ont été mises en place pour offrir une sécurité supplémentaire aux clients ayant pu divulguer leurs identifiants OVHcloud. Nous vous remercions donc de votre compréhension.<br>
Nous allons essayer de continuer à améliorer ces règles à l’avenir afin de faciliter les scénarii d’Infra-as-code, comme celui de « public cloud project as code ».

Créez un fichier nommé `project.tf` et saisissez les lignes suivantes :

```python
data "ovh_order_cart" "cart" {
  ovh_subsidiary = "fr"
  description    = "Use the French OVH cart by default"
}

data "ovh_order_cart_product_plan" "cloud" {
  cart_id        = data.ovh_order_cart.cart.id
  price_capacity = "renew"
  product        = "cloud"
  plan_code      = "project.2018"
}

resource "ovh_cloud_project" "cloud" {
  ovh_subsidiary = data.ovh_order_cart.cart.ovh_subsidiary
  description    = var.project_description
  payment_mean   = "fidelity"

  plan {
    duration     = data.ovh_order_cart_product_plan.cloud.selected_price.0.duration
    plan_code    = data.ovh_order_cart_product_plan.cloud.plan_code
    pricing_mode = data.ovh_order_cart_product_plan.cloud.selected_price.0.pricing_mode
  }
}
```

### Supprimer une infrastructure

Pour supprimer toutes les ressources, vous pouvez entrer la commande suivante:

```console
terraform destroy
```

## Aller plus loin

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com/>.
