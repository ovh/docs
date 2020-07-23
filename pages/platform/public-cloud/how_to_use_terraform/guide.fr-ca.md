---
title: Comment utiliser Terraform sur le Public Cloud OVHcloud ?
slug: utiliser-terraform
description: Utilisation de Terraform
keywords: infrastructure, instance, cloud, creation
excerpt: Documentation pas à pas sur l'utilisation de l'outil Terraform pour abstraire le déploiement de votre infrastructure
section: Tutoriels
---


## Préambule
OpenStack est un système d'exploitation de cloud open source pour créer des instances publiques. OpenStack est proposé dans le produit [Public Cloud OVHcloud](https://www.ovh.com/ca/fr/public-cloud/instances/){.external}. Terraform, également open source, est un outil développé dans l'esprit de créer facilement de complexes infrastructures dans le Cloud. Il abstrait de nombreux concepts, donne un moyen de décrire une infrastructure dans un fichier texte et de déployer cette infrastructure grâce à ce fichier. Dans ce guide, nous vous expliquerons comment utiliser Terraform sur le Public Cloud OVHcloud.


### Prérequis
- [Un utilisateur OpenStack](https://docs.ovh.com/ca/fr/public-cloud/creation-et-suppression-dun-utilisateur-openstack/){.external}
- [Les variables d'environnement OpenStack](https://docs.ovh.com/ca/fr/public-cloud/charger-les-variables-denvironnement-openstack/){.external}
- [Vos identifiants API et clés d'autorisations OVHcloud](../customer/first-steps-with-ovh-api/){.external}
- [Une clé SSH](https://docs.ovh.com/ca/fr/public-cloud/creation-des-cles-ssh/){.external}
- [L'exécutable Terraform](https://www.terraform.io/intro/getting-started/install.html){.external}
- [Les clients OpenStack (nova, glance)](https://github.com/openstack/python-openstackclient){.external}



> [!primary]
>
> Ce tutorial a été fait avec la version suivante : Terraform v0.9.11
> 


## Creer un environement Terraform
Après l'installation de Terraform, vous allez créer un dossier dans lequel nous allons mettre tous les fichiers texte qui vont décrire votre infrastructure. Créez un dossier test_terraform et dirigez vous dedans :


```sh
1. $ mkdir test_terraform && cd test_terraform
```

Maintenant vous allez créer un environnement Terraform. Grâce à celui-ci, Terraform va pouvoir créer et gérer l'évolution de votre infrastructure. La ligne de commande suivante va créer un nouvel environnement Terraform :


```sh
1. $ terraform env new test_terraform
```

/!\ Notes : Dans les dernières versions de Terraform, la commande `terraform env` est dépréciée, `terraform workspace` est maintenant le terme utilisé pour créer ce que les anciennes versions de Terraform appelaient, un "environnement".


## Creer des ressources

### Definir un fournisseur
Un fournisseur, comme OVHcloud, vous donne un environnement pour créer et développer des applications. Dans Terraform, un fournisseur est le point d'entrée de votre environnement de déploiement.

Dans un fichier provider.tf, ajoutez les lignes suivantes :


```python
1. # Configure le fournisseur OpenStack hébergé par OVHcloud
2. provider "openstack" {
3.   auth_url = "https://auth.cloud.ovh.net/v3" # URL d'authentification
4.   domain_name = "default" # Nom de domaine - Toujours à "default" pour OVHcloud
5.   alias = "ovh" # Un alias
6. }
```

Un alias est un unique identifiant pour un type de fournisseur. Il permt de gérer des resources (instance, ect.) provenant de différents fournisseurs. Dans le code précédent on pourra donc appeler ce fournisseur grâce à ce nom: openstack.ovh


### Creer une machine virtuelle
Dans Terraform, une ressource est un composant de votre infrastructure. Cela peut être une machine virtuelle, un bloc de stockage, un réseau, etc.

Pour créer une machine virtuelle simple, vous avez besoin de 4 éléments :

- Un nom de machine virtuelle (libre)
- Une clé SSH
- Un nom d'image proposée par le fournisseur
- Un type de machine (flavor)

Pour lister les différents types de machine disponibles sur l'offre Public Cloud d'OVHcloud, vous pouvez entrer la commande suivante :


```sh
1. $ nova flavor-list
```

Dans cette liste, nous décidons de prendre le type "s1-2" ("vps-ssd-1" si vous disposez de l'ancien catalogue).

Pour lister les différentes images disponibles, vous pouvez entrer la commande suivante :


```sh
1. $ glance image-list
```

Dans cette liste, nous décidons de prendre l'image "Ubuntu 16.04".

Ici, nous voulons créer une simple machine virtuelle sur Ubuntu 16.04 avec la flavor "s1-2", et importer une clé SSH pour permettre l'accès à la machine. Ajoutez les lignes suivantes dans un fichier nommé simple_instance.tf :


```python
1. # Import de la clé SSH au sein d'OpenStack
2. resource "openstack_compute_keypair_v2" "test_keypair" {
3.   provider = "openstack.ovh" # Nom du fournisseur déclaré dans provider.tf
4.   name = "test_keypair" # Nom de la clé SSH à utiliser pour la création
5.   public_key = "${file("~/.ssh/id_rsa.pub")}" # Chemin vers votre clé SSH précédemment générée
6. }
7. 
8. # Création d'une machine virtuelle OpenStack
9. resource "openstack_compute_instance_v2" "test_terraform_instance" {
10.   name = "terraform_instance" # Nom de l'instance
11.   provider = "openstack.ovh" # Nom du fournisseur
12.   image_name = "Ubuntu 16.04" # Nom de l'image
13.   flavor_name = "s1-2" # Nom du type de machine
14.   # Nom de la ressource openstack_compute_keypair_v2 nommé test_keypair
15.   key_pair = "${openstack_compute_keypair_v2.test_keypair.name}"
16.   network {
17.     name = "Ext-Net" # Ajoute le réseau public à votre instance
18.   }
19. }
```

Tous les fichiers sont maintenant créés, vous pouvez entrer la commande suivante pour importer votre clé SSH et créer votre première instance :


```sh
1. $ terraform apply
```

Vous pouvez suivre le démarrage de votre instance dans la console, mais aussi dans votre espace client OVHcloud ou OpenStack Horizon : vous devez maintenant voir l'instance "terraform_instance".

Lancez une nouvelle fois la commande précédente et vous verrez qu'il n'y a aucun changement. Terraform applique les opérations uniquement s'il y a des modifications dans les fichiers de configuration (modification, ajout, suppression).


### Creation de multiples machines
Dans cette partie, nous souhaitons créer une machine sous Ubuntu avec le type s1-2 dans chaque région.

Pour trouver les acronymes des différentes régions, vous pouvez regarder l'API suivante :

> [!api]
>
> @api {GET} cloud/project/{serviceName}/region
> 

Voici un exemple de trois régions qui peuvent être proposées lors de toute création d'un nouveau projet :

- GRA3
- SBG3
- BHS3

Pour créer une instance dans chaque région, il est possible de définir plusieurs ressources identiques dans votre fichier de configuration. Néanmoins, si vous souhaitez démarrer des dizaines d'instances de manière simple, copier/coller la même configuration peut vite s'avérer contre-productif. C'est pour cela que Terraform propose un meta paramètre appelé "count". Ce paramètre permet de préciser à Terraform de créer plusieurs fois une même ressource.

Pour ce faire, nous allons créer un fichier nommé multiple_instance.tf. Nous allons commencer par définir une variable contenant les 3 régions disponibles, puis ajouter un compteur de création d'instances :


```python
1. # Créer une variable région contenant la liste des régions d'OVHcloud
2. # On l'utilisera pour itérer sur les différentes régions afin de
3. # démarrer une instance sur chacune d'entre elles.
4. variable "region" {
5.   type = "list"
6.   default = ["GRA3", "SBG3", "BHS3"]
7. }
8. 
9. # Création d'une paire de clé SSH
10. resource "openstack_compute_keypair_v2" "test_keypair_all" {
11.   count = "${length(var.region)}"
12.   provider = "openstack.ovh" # Préciser le nom du fournisseur
13.   name = "test_keypair_all" # Nom de la clé SSH
14.   public_key = "${file("~/.ssh/id_rsa.pub")}" # Chemin de votre clé SSH
15.   region = "${element(var.region, count.index)}"
16. }
17. 
18. # Créer une ressource qui est une machine OpenStack dans chaque région
19. resource "openstack_compute_instance_v2" "instances_on_all_regions" {
20.   # Nombre de répétitions de création d'instance
21.   # Ici c'est la longueur de la list nommé région
22.   count = "${length(var.region)}"
23.   provider = "openstack.ovh" # Nom du fournisseur
24.   name = "terraform_instances" # Nom de la machine
25.   flavor_name = "s1-2" # Nom du type de machine
26.   image_name = "Ubuntu 16.04" # Nom de l'image
27.   # element est une fonction qui accède à l'élément à la position
28.   # count.index de la liste var.region. Il permet d'itérer entre les régions
29.   region = "${element(var.region, count.index)}"
30.   # Accède au nom de la variable de la ressource openstack_compute_keypair_v2 nomé test_keypair
31.   key_pair = "${element(openstack_compute_keypair_v2.test_keypair_all.*.name, count.index)}"
32.   network {
33.     name = "Ext-Net" # Ajoute le réseau public à votre instance
34.   }
35. }
```

N'oubliez pas d'appliquer vos changements avec la commande suivante :


```sh
1. $ terraform apply
```

Avec Terraform, il est simple de créer plusieurs machines mais c'est aussi simple de modifier votre infrastructure existante.


### Modifier votre machine
Ici, nous voulons attacher un nouveau volume à votre première machine. Un volume correspond à de l'espace disque supplémentaire qui peut être créé et attaché à une instance. Pour ce faire, modifier le fichier nommé simple_instance.tf pour ajouter les lignes suivantes :


```python
1. # Créer une ressource de volume afin de stocker des données
2. resource "openstack_blockstorage_volume_v2" "volume_to_add" {
3.   provider = "openstack.ovh" # Nom du fournisseur
4.   name = "simple_volume" # Nom du volume
5.   size = 10 # Taille du volume en GB
6. }
7. 
8. # Ajouter le volume créé précédemment à la machine
9. resource "openstack_compute_volume_attach_v2" "attached" {
10.   # Identifiant de la ressource openstack_compute_instance_v2 nommé test_terraform_instance
11.   instance_id = "${openstack_compute_instance_v2.test_terraform_instance.id}"
12.   # Identifiant de la ressource openstack_blockstorage_volume_v2 nommé volume_to_add
13.   volume_id = "${openstack_blockstorage_volume_v2.volume_to_add.id}"
14. }
```

Encore une fois, n'oubliez pas d'appliquer vos changements avec :


```sh
1. $ terraform apply
```


### Creer une instance dans un reseau privé vRack
Le plugin OVHcloud pour Terraform vous permet de lier vos projets dans votre vRack, de créer un réseau privé, et ses sous-réseau privés. Dans cette partie, nous allons nous focaliser sur la création d'un réseau privé.

Premièrement, vous devez charger les identifiants OVHcloud dans votre environnement . Ces identifiants sont :


```console
1. $ export OVHcloud_ENDPOINT=ovh-ca
2. $ export OVHcloud_APPLICATION_KEY=Votre_cle_dapplication_OVHcloud(ou_AK)
3. $ export OVHcloud_APPLICATION_SECRET=Votre_cle_dapplication_secrete_OVHcloud(ou_AS)
4. $ export OVHcloud_VRACK=Lidentifiant_vRack_ovh
5. $ export OVHcloud_PUBLIC_CLOUD=Votre_tenant_id_openstack
6. $ export TF_ACC=1
7. $ export OVHcloud_CONSUMER_KEY=Votre_token(ou_CK)
```

Ensuite ajouter au fichier provider.tf les lignes suivantes :


```python
1. # Configuration du fournisseur OVHcloud
2. provider "ovh" {
3.   endpoint = "ovh-eu" # Point d'entrée du fournisseur
4.   alias = "ovh" # Un alias
5. }
```

Créer un fichier create_private_network_instance.tf et mettre le contenu suivant dans celui-ci :


```python
1. # Création d'un réseau privé
2. resource "ovh_publiccloud_private_network" "network" {
3.    project_id = "OS_TENANT_ID" # Remplacer OS_TENANT_ID par votre ID de projet
4.    name = "private_network" # Nom du réseau
5.    regions = ["OS_REGION_NAME"] # Remplacer OS_REGION_NAME par la variable d'environnement OS_REGION_NAME
6.    provider = "ovh.ovh" # Nom du fournisseur
7.    vlan_id = 168 # Identifiant du vlan pour le vRrack
8. }
9. 
10. # Création d'un sous-réseau grâce au réseau privé créé précédemment
11. resource "ovh_publiccloud_private_network_subnet" "subnet" {
12.    project_id = "OS_TENANT_ID" # Remplacer OS_TENANT_ID par votre ID de projet
13.    # Identifiant de la ressource ovh_publiccloud_private_network nommée network
14.    network_id = "${ovh_publiccloud_private_network.network.id}"
15.    start = "192.168.168.100" # Première IP du sous réseau
16.    end = "192.168.168.200" # Dernière IP du sous réseau
17.    network = "192.168.168.0/24" # Place d'adressage IP du sous réseau
18.    dhcp = true # Activation du DHCP
19.    region = "OS_REGION_NAME" # Remplacer OS_REGION_NAME par la variable d'environnement OS_REGION_NAME
20.    provider = "ovh.ovh" # Nom du fournisseur
21. }
22. 
23. # Création d'une instance avec 2 interfaces réseau
24. resource "openstack_compute_instance_v2" "proxy_instance" {
25.   provider = "openstack.ovh" # Nom du fournisseur
26.   name = "proxy_instance" # Nom de l'instance
27.   image_name = "Ubuntu 16.04" # Nom de l'image
28.   flavor_name = "s1-2" # Nom du type de machine
29.   # Nom de la ressource openstack_compute_keypair_v2 nommée test_keypair
30.   key_pair = "${openstack_compute_keypair_v2.test_keypair.name}"
31.   # Ajout du réseau public et privé
32.   network = [{name = "Ext-Net"}, {name = "${ovh_publiccloud_private_network.network.name}"}]
33. }
```

N'oubliez pas d'appliquer vos changements avec la commande suivante :


```sh
1. $ terraform apply
```

Vous verrez apparaître dans votre projet Public Cloud une nouvelle instance, avec une interface publique et une interface privée.


### Creation d'une infrastructure pour un site web
Dans cette exemple, nous allons créer une infrastructure simple pour un site web :

- Un réseau privé
- 2 machines avec 2 interfaces réseau : la première publique et la seconde privée, représentant les frontaux web
- 1 machine avec 1 interface réseau et 2 périphériques de stockage, représentant la BDD


![public-cloud](images/basic_infrastructure_for_a_web_site.png){.thumbnail}

Pour commencer, créez un fichier simple_web_site.tf :


```python
1. # Création d'un réseau privé
2. resource "ovh_publiccloud_private_network" "private_network" {
3.   name = "backend" # Nom du réseau
4.   regions = ["OS_REGION_NAME"] # Remplacer OS_REGION_NAME par la variable d'environnement OS_REGION_NAME
5.   provider = "ovh.ovh" # Nom du fournisseur
6.   project_id = "OS_TENANT_ID" # Remplacer OS_TENANT_ID par votre ID de projet
7.   vlan_id = 42 # Identifiant du vlan pour le vRrack
8. }
9. 
10. # Création d'un sous réseau privé
11. resource "ovh_publiccloud_private_network_subnet" "private_subnet" {
12.   # Identifiant de la ressource ovh_publiccloud_private_network nommé private_network
13.   network_id = "${ovh_publiccloud_private_network.private_network.id}"
14.   project_id = "OS_TENANT_ID" # Remplacer OS_TENANT_ID par votre ID de projet
15.   region = "OS_REGION_NAME" # Remplace OS_REGION_NAME par la variable d'environnement OS_REGION_NAME
16.   network = "192.168.42.0/24" # IP du sous réseau
17.   start = "192.168.42.2" # Première IP du sous réseau
18.   end = "192.168.42.200" # Dernière IP du sous réseau
19.   dhcp = false # Activation du DHPC
20.   provider = "ovh.ovh" # Nom du fournisseur
21. }
22. 
23. # Cherche l'image Archlinux la plus récente
24. data "openstack_images_image_v2" "archlinux" {
25.   name = "Archlinux" # Nom de l'image
26.   most_recent = true # Limite la recherche à la plus récente
27.   provider = "openstack.ovh" # Nom du fournisseur
28. }
29. 
30. # Liste d'adresses IP privées possibles pour les frontaux
31. variable "front_private_ip" {
32.   type = "list"
33.   default = ["192.168.42.2", "192.168.42.3"]
34. }
35. 
36. # Création de 2 instances avec 2 interfaces réseau
37. resource "openstack_compute_instance_v2" "front" {
38.   count = "${length(var.front_private_ip)}" # Nombre d'instances à créer
39.   provider = "openstack.ovh" # Nom du fournisseur
40.   name = "front" # Nom de l'instance
41.   key_pair = "${openstack_compute_keypair_v2.test_keypair.name}"
42.   flavor_name = "s1-2" # Nom du type de la machine
43.   image_id = "${data.openstack_images_image_v2.archlinux.id}" # Identifiant de l'image de la machine
44.   security_groups = ["default"] # Ajoute la machine au groupe de sécurité
45.   network = [
46.     {
47.       name = "Ext-Net" # Nom de l'interface réseau publique
48.     },
49.     {
50.       # Nom de l'interface réseau privé
51.       name = "${ovh_publiccloud_private_network.private_network.name}"
52.       # Adresse IP prise depuis la liste défini précédemment
53.       fixed_ip_v4 = "${element(var.front_private_ip, count.index)}"
54.     }
55.   ]
56. }
57. 
58. # Création d'un périphérique de stockage attachable pour le backup (volume)
59. resource "openstack_blockstorage_volume_v2" "backup" {
60.   name = "backup_disk" # Nom du périphérique de stockage
61.   size = 10 # Taille
62.   provider = "openstack.ovh" # Nom du fournisseur
63. }
64. 
65. # Création d'une instance avec une interface réseau et d'un phériphérique de stockage
66. resource "openstack_compute_instance_v2" "back" {
67.   provider = "openstack.ovh" # Nom du fournisseur
68.   name = "back" # Nom de la machine
69.   key_pair = "${openstack_compute_keypair_v2.test_keypair.name}"
70.   flavor_name = "s1-2" # Nom du type de machine
71.   image_id = "${data.openstack_images_image_v2.archlinux.id}" # Identifiant de l'image de la machine
72.   security_groups = ["default"] # Ajoute la machine au groupe de sécurité
73.   network = [
74.     {
75.       name = "${ovh_publiccloud_private_network.private_network.name}" # Nom du réseau privé
76.       fixed_ip_v4 = "192.168.42.150" # Addresse IP privé choisie arbitrairement
77.     }
78.   ]
79.   # Périphérique de stockage bootable avec l'OS
80.   block_device {
81.     uuid = "${data.openstack_images_image_v2.archlinux.id}" # Identifiant de l'image de la machine
82.     source_type = "image" # Type de source
83.     destination_type = "local" # Destination
84.     volume_size = 10 # Taille
85.     boot_index = 0 # Ordre de boot
86.     delete_on_termination = true # Le périphérique sera supprimé avec la machine
87.   }
88.   # Périphérique de stockage
89.   block_device {
90.     source_type = "blank" # Type de source
91.     destination_type = "volume" # Destination
92.     volume_size = 20 # Taille
93.     boot_index = 1 # Ordre de boot
94.     delete_on_termination = true # Le périphérique sera supprimé avec la machine
95.   }
96.  # Périphérique de stockage créer précédemment
97.  block_device {
98.    uuid = "${openstack_blockstorage_volume_v2.backup.id}" # Identifiant du périphérique de stockage
99.    source_type = "volume" # Type de source
100.    destination_type = "volume" # Destination
101.    boot_index = 2 # Ordre de boot
102.    delete_on_termination = true # Le périphérique sera supprimé avec la machine
103.  }
104. }
```


## Supprimer l'infrastructure
Terraform peut créer une infrastructure mais peut aussi la détruire. Si vous voulez enlever chaque ressource vous pouvez taper la commande suivante :


```sh
1. $ terraform destroy
```



> [!primary]
>
> Si vous rencontrez des problèmes à la suppression, n'hésiter pas à relance la
> commande.
> 
