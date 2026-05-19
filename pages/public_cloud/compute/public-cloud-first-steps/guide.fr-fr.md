---
title: "Comment créer une instance Public Cloud et s'y connecter"
excerpt: "Découvrez comment configurer des instances Public Cloud dans votre espace client OVHcloud ainsi que les premières étapes avec vos instances"
updated: 2026-05-19
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objectif

Les instances Public Cloud sont faciles à déployer et à gérer. Cependant, en tant que membre de l'écosystème Public Cloud d'OVHcloud, les instances offrent de nombreuses options de configuration et peuvent être adaptées à différents cas d'utilisation. Les instructions suivantes incluent toutes les étapes nécessaires (et aussi les étapes facultatives) pour créer une instance dans l'espace client OVHcloud et y accéder à distance.  
Vous pourrez ensuite aller plus loin avec votre projet Public Cloud en fonction de vos besoins.

**Ce guide vous détaille les premiers pas avec une instance Public Cloud.**


## Prérequis

- Un [projet Public Cloud](/links/public-cloud/public-cloud) dans votre compte OVHcloud
- Être connecté à l'[espace client OVHcloud](/links/manager)

> [!success]
> Bénéficiez de prix réduits en vous engageant sur une période de 1 à 36 mois sur vos ressources Public Cloud. Plus d'informations sur notre page [Savings Plans](/links/public-cloud/savings-plan).

## En pratique

> [!primary]
>
> Si vous n'avez pas encore créé de projet Public Cloud, commencez par notre [guide sur la création d'un projet](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project).
>
> **Les détails techniques** importants concernant le Public Cloud d'OVHcloud sont disponibles sur [cette page](/pages/public_cloud/public_cloud_cross_functional/00-essential-info-to-get-started-on-public-cloud).
>

### Présentation du contenu

- [Objectif](#objectif)
- [Prérequis](#prerequis)
- [En pratique](#en-pratique)
  - [Présentation du contenu](#presentation-du-contenu)
  - [Étape 1 : créer un jeu de clés SSH](#etape-1-creer-un-jeu-de-cles-ssh)
  - [Étape 2 : Importer les clés SSH](#etape-2-importer-les-cles-ssh)
  - [Étape 3 : préparer la configuration réseau](#etape-3-preparer-la-configuration-reseau)
  - [Étape 4 : créer l'instance](#etape-4-creer-linstance)
  - [Étape 5 : Se connecter à l'instance](#etape-5-se-connecter-a-linstance)
    - [5.1 : Vérifier l'état de l'instance dans l'espace client](#51-verifier-letat-de-linstance-dans-lespace-client)
    - [5.2 : Première connexion sur une instance sous OS GNU/Linux](#52-premiere-connexion-sur-une-instance-sous-os-gnulinux)
    - [5.3 : instances Windows](#53-instances-windows)
      - [5.3.1 : Terminer l'installation d'une instance Windows](#531-terminer-linstallation-dune-instance-windows)
      - [5.3.2 : Connectez-vous à distance depuis Windows](#532-connectez-vous-a-distance-depuis-windows)
      - [5.3.3 : Se connecter à distance depuis un autre OS](#533-se-connecter-a-distance-depuis-un-autre-os)
    - [5.4 : accès console VNC](#54-acces-console-vnc)
  - [Étape 6 : premiers pas sur une nouvelle instance](#etape-6-premiers-pas-sur-une-nouvelle-instance)
    - [6.1 : Gestion des utilisateurs](#61-gestion-des-utilisateurs)
      - [6.1.1 : Définissez un mot de passe pour le compte d'utilisateur actuel](#611-definissez-un-mot-de-passe-pour-le-compte-dutilisateur-actuel)
      - [6.1.2 : Activation de la connexion à distance par mot de passe (optionnel)](#612-activation-de-la-connexion-a-distance-par-mot-de-passe-optionnel)
    - [6.2 : Clés SSH supplémentaires](#62-cles-ssh-supplementaires)
- [Aller plus loin](#aller-plus-loin)

> [!primary]
>
> **Vous devez fournir une clé SSH publique lors de la création d'instances Public Cloud dans votre espace client.** Une fois l'instance créée, vous pouvez configurer votre accès à distance à votre convenance.
>
> **Exception** : l'authentification de connexion sur les instances Windows nécessite un nom d'utilisateur et un mot de passe car Windows utilise RDP (**R**emote **D**esktop **P**rotocol).
>

### Étape 1 : créer un jeu de clés SSH

Si vous disposez déjà d'une paire de clés SSH prête à l'emploi, vous pouvez ignorer cette étape.

Le [protocole SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction) permet une communication client-serveur cryptée. Une **paire de clés SSH** se compose d'une clé publique et d'une clé privée.

- La **clé publique** est ajoutée à votre instance Public Cloud (et peut également être [stockée dans votre espace client OVHcloud](#etape-2-importer-les-cles-ssh)).
- La **clé privée** est stockée sur votre équipement local et doit être sécurisée contre tout accès non autorisé. Seuls les périphériques clients avec la clé privée correspondante peuvent accéder à votre instance. Aucun mot de passe de compte d'utilisateur n'est requis pour la connexion.

Vous disposez de 2 options pour créer et gérer vos clés SSH :

- L'interface de ligne de commande de votre OS (simple client **OpenSSH**).
- Un logiciel supplémentaire (compatible avec le protocole **OpenSSH**) avec ligne de commande ou interface graphique.

La plupart des systèmes d'exploitation de bureau contemporains incluent nativement le client **OpenSSH** accessible via l'application de ligne de commande du système (`cmd`, `Powershell`, `Terminal`, etc.). Si vous n'êtes pas familier avec l'utilisation des clés SSH comme méthode d'authentification, vous pouvez utiliser les instructions de [ce guide](/pages/public_cloud/compute/creating-ssh-keys-pci#create-ssh-key) pour créer votre paire de clés.

Si vous utilisez un autre logiciel, reportez-vous à sa documentation utilisateur. Les instructions pour la solution open source `PuTTY` sont disponibles dans [ce guide](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows).

### Étape 2 : Importer les clés SSH

Vous pouvez stocker vos clés SSH publiques dans votre projet Public Cloud. Ce n'est pas obligatoire, mais cela rend le processus de création d'instance plus pratique.

> [!primary]
>
> Les clés SSH stockées vous permettent de créer vos instances plus rapidement dans votre espace client. Pour changer les paires de clés et ajouter des utilisateurs une fois l'instance créée, reportez-vous au guide sur [les clés SSH supplémentaires](/pages/public_cloud/compute/configuring_additional_ssh_keys).
>
> Les clés SSH publiques ajoutées à votre espace client OVHcloud seront disponibles pour les services Public Cloud de toutes les [régions](/links/public-cloud/regions-pci). Vous pouvez stocker des clés chiffrées avec **RSA**, **ECDSA** et **ED25519**.
>

> [!tabs]
> **Via l'espace client**
>>
>> Connectez-vous à l'[espace client OVHcloud](/links/manager), rendez-vous dans la section `Public Cloud`{.action} et sélectionnez le projet Public Cloud concerné.
>>
>> Ouvrez `Clés SSH`{.action} dans le menu de gauche sous **Paramètres**. Cliquez sur le bouton `Ajouter une clé SSH`{.action}.
>>
>> Dans la nouvelle fenêtre, entrez un nom pour la clé. Remplissez le champ `Clé` avec votre chaîne de clé publique, par exemple celle créée à l'[étape 1](#etape-1-creer-un-jeu-de-cles-ssh). Confirmez en cliquant sur `Ajouter`{.action}.
>>
>> Vous pouvez dorénavant sélectionner cette clé à l'[Étape 4](#etape-4-creer-linstance) pour l'ajouter à une nouvelle instance.
>>
> **Via l'API OVHcloud**
>>
>> Utilisez l'appel suivant pour importer votre clé SSH publique :
>>
>> > [!api]
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/sshkey
>>
>> Paramètres :
>>
>> - `serviceName` : identifiant de votre projet Public Cloud
>> - `name` : nom de la clé SSH
>> - `publicKey` : contenu de votre clé publique
>>
>> Notez l'`id` retourné, il sera nécessaire lors de la création de l'instance.
>>
> **Via l'OVHcloud CLI**
>>
>> Assurez-vous d'avoir installé et configuré l'[OVHcloud CLI](https://github.com/ovh/ovhcloud-cli), puis importez votre clé :
>>
>> ```bash
>> ovhcloud cloud ssh-key create \
>>   --cloud-project <project_id> \
>>   --name my-key \
>>   --public-key "$(cat ~/.ssh/id_rsa.pub)"
>> ```
>>
>> Vérifiez l'import et notez le `name` de la clé pour l'[Étape 4](#etape-4-creer-linstance) :
>>
>> ```bash
>> ovhcloud cloud ssh-key list --cloud-project <project_id>
>> ```
>>
> **Via le CLI OpenStack**
>>
>> Assurez-vous d'avoir configuré votre environnement OpenStack ([guide dédié](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api)), puis importez votre clé :
>>
>> ```bash
>> openstack keypair create --public-key ~/.ssh/id_rsa.pub my-key
>> ```
>>
>> Vérifiez l'import :
>>
>> ```bash
>> openstack keypair list
>> ```
>>
> **Via Terraform**
>>
>> Déclarez la ressource dans votre fichier `.tf` :
>>
>> ```hcl
>> resource "openstack_compute_keypair_v2" "my_keypair" {
>>   name       = "my-key"
>>   public_key = file("~/.ssh/id_rsa.pub")
>> }
>> ```
>>
>> Consultez le [guide Terraform pour le Public Cloud OVHcloud](/pages/public_cloud/public_cloud_cross_functional/how_to_use_terraform) pour la configuration initiale du provider.
>>

### Étape 3 : préparer la configuration réseau

Avant de créer votre instance, nous vous recommandons d'étudier la manière dont l'instance sera utilisée en termes de mise en réseau.

- Si vous n'avez pas besoin de configurer l'instance avec un réseau privé pour le moment, vous pouvez passer à l'[étape 4](#etape-4-creer-linstance). Vous pouvez créer une instance exposée à l'Internet public (voir le **Mode Public** [ci-dessous](#networking-modes).)
- Si l'instance doit être connectée à un nouveau réseau privé (OVHcloud [vRack](/links/network/vrack)), notez que le vRack est créé automatiquement lors de la création de votre projet Public Cloud. Aucune action préalable n'est donc requise. Pour plus d'informations, consultez le [guide sur le vRack Public Cloud](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack).

<a name="networking-modes"></a>

/// details | Public Cloud Networking - Modes

**Mode Public**

Les instances en mode public sont exposées à Internet directement via IPv4/IPv6. Les adresses IP ne peuvent pas être modifiées, mais les instances peuvent avoir des adresses [Additional IP](/links/network/additional-ip) attachées ([y compris votre propre IP](/links/network/byoip)) et elles peuvent être connectées à un [vRack](/links/network/vrack).

**Mode Privé**

Les instances en mode privé peuvent uniquement être exposées à Internet via un service [Gateway](/links/public-cloud/gateway) ou [Load Balancer](/links/public-cloud/load-balancer) et des adresses [Floating IP](/links/public-cloud/floating-ip).

Pour plus d'informations, veuillez consulter nos guides dans la section [Public Cloud Network Services](/products/public-cloud-network). Le [guide des concepts](/pages/public_cloud/public_cloud_network_services/concepts-01-public-cloud-networking-concepts) fournit une introduction au Public Cloud Networking.

**Mode Privé Local**

Le mode privé local ne s'applique que si vous créez une instance dans une **Local Zone**. Les instances peuvent être exposées à Internet directement via IPv4/IPv6. Seules les instances d'une même Local Zone peuvent être connectées via des réseaux privés. Les Local Zones ne sont pas compatibles avec le [vRack](/links/network/vrack). Dans ce mode, DHCP fournit automatiquement des adresses IP à vos instances.

Pour en savoir plus, consultez la [page web des Local Zones](/links/public-cloud/local-zones).

///

### Étape 4 : créer l'instance

> [!tabs]
> **Via l'espace client**
>>
>> > [!primary]
>> >
>> > Une clé SSH publique est obligatoire lors de la création d'une instance (à l'exception des instances Windows). Reportez-vous à l'[étape 1](#etape-1-creer-un-jeu-de-cles-ssh) et l'[étape 2](#etape-2-importer-les-cles-ssh) si vous n'avez pas de clés prêtes à l'emploi.
>>
>> Connectez-vous à l'[espace client OVHcloud](/links/manager), rendez-vous dans la section `Public Cloud`{.action} et sélectionnez le projet Public Cloud concerné. Sur la page **Accueil**, cliquez sur `Créer une instance`{.action}.
>>
>> **4.1 Nom**
>>
>> Entrez un nom complet pour votre instance.
>>
>> **4.2 Localisation**
>>
>> Sélectionnez une [localisation](/links/public-cloud/regions-pci) proche de vos utilisateurs. Si vous sélectionnez une **Local Zone**, des limitations réseau s'appliquent (voir [Étape 3](#networking-modes)). Consultez le guide [Comparaison des modes de déploiement](/pages/public_cloud/public_cloud_cross_functional/deployment_modes_comparison_resilience_details) pour les différences entre 3-AZ, 1-AZ et Local Zones.
>>
>> **4.3 Modèle**
>>
>> Choisissez le modèle (flavor) adapté à votre cas d'usage. Le type `Discovery` propose des ressources partagées à tarif réduit. Les `Metal Instances` offrent des ressources physiques dédiées.
>>
>> > [!primary]
>> >
>> > Vérifiez vos quotas via `Quota & Régions`{.action} dans la barre de navigation de gauche sous **Paramètres**.
>>
>> **4.4 Image**
>>
>> Sélectionnez le système d'exploitation via les menus `Type de distribution` et `Version de l'image`. Les options disponibles dépendent du modèle et de la région choisis.
>>
>> **4.5 Clé SSH** *(non applicable aux instances Windows)*
>>
>> Sélectionnez une clé SSH stockée dans la liste (voir [Étape 2](#etape-2-importer-les-cles-ssh)), ou cliquez sur `Créer une nouvelle clé SSH`{.action} pour saisir directement une clé publique.
>>
>> **4.6 Sauvegarde**
>>
>> Les [sauvegardes automatisées](/pages/public_cloud/compute/save_an_instance) sont activées par défaut. Sélectionnez la rotation souhaitée (7 ou 14 jours).
>>
>> **4.7 Réseau**
>>
>> La section **Network settings** se divise en deux parties :
>>
>> - **Private network** : sélectionnez un réseau privé existant ou cliquez sur `Créer un réseau privé`{.action}. Si un réseau privé est sélectionné mais ne possède pas de gateway, activez le toggle `Attribuer une gateway`{.action} pour attacher une gateway automatiquement.
>> - **Attribuer une connectivité publique** : activez le toggle pour assigner une IP publique. Choisissez `Basic Public IP`{.action} (gratuite, liée à la durée de vie de l'instance, incompatible avec une gateway) ou `Créer une nouvelle`{.action} (persistante et réutilisable).
>>
>> Consultez l'[Étape 3](#networking-modes) pour un aperçu des modes réseau.
>>
>> **4.8 Facturation**
>>
>> Choisissez entre **mensuelle** (coût réduit, non réversible) ou **à l'heure** (flexible, [convertible en mensuel](/pages/account_and_service_management/managing_billing_payments_and_services/changing_hourly_monthly_billing) ultérieurement). La facturation à l'heure court jusqu'à la **suppression de l'instance**. Consultez la [documentation de facturation](/pages/public_cloud/public_cloud_cross_functional/analyze_billing).
>>
>> **4.9 Paramètres avancés** *(optionnel)*
>>
>> - **Instance flexible** : disque unique de 50 Go, permet le redimensionnement vers des modèles supérieurs ou inférieurs.
>> - **Script de post-installation** : ajoutez votre [script de post-installation](/pages/public_cloud/compute/launching_script_when_creating_instance).
>>
>> **4.10 Finalisation**
>>
>> Vérifiez le récapitulatif sur la droite de l'écran et configurez le nombre d'instances. Cliquez sur `Lancer mon instance`{.action}. La livraison peut prendre quelques minutes.
>>
> **Via l'API OVHcloud**
>>
>> Récupérez les identifiants nécessaires :
>>
>> ```
>> GET /cloud/project/{serviceName}/flavor     → flavorId
>> GET /cloud/project/{serviceName}/image      → imageId
>> GET /cloud/project/{serviceName}/region     → region
>> GET /cloud/project/{serviceName}/sshkey     → sshKeyId
>> ```
>>
>> Créez l'instance :
>>
>> > [!api]
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/instance
>>
>> Paramètres principaux :
>>
>> - `name` : nom de l'instance
>> - `flavorId` : ID du modèle
>> - `imageId` : ID de l'image OS
>> - `region` : région de déploiement
>> - `sshKeyId` : ID de la clé SSH (depuis l'[étape 2](#etape-2-importer-les-cles-ssh))
>> - `monthlyBilling` : `true` pour une facturation mensuelle
>>
>> Consultez la [documentation API OVHcloud](/pages/manage_and_operate/api/first-steps) pour configurer votre accès à l'API.
>>
> **Via l'OVHcloud CLI**
>>
>> Récupérez les identifiants nécessaires :
>>
>> ```bash
>> ovhcloud cloud reference list-flavors --cloud-project <project_id>
>> ovhcloud cloud reference list-images --cloud-project <project_id>
>> ovhcloud cloud ssh-key list --cloud-project <project_id>
>> ```
>>
>> Créez l'instance :
>>
>> ```bash
>> ovhcloud cloud instance create GRA9 \
>>   --cloud-project <project_id> \
>>   --name my-instance \
>>   --boot-from.image <image_id> \
>>   --flavor <flavor_id> \
>>   --ssh-key.name my-key \
>>   --network.public \
>>   --wait
>> ```
>>
>> Remplacez `GRA9` par votre région. Pour une création interactive avec sélection guidée :
>>
>> ```bash
>> ovhcloud cloud instance create GRA9 \
>>   --cloud-project <project_id> \
>>   --editor \
>>   --image-selector \
>>   --flavor-selector
>> ```
>>
>> Vérifiez l'état après création :
>>
>> ```bash
>> ovhcloud cloud instance list --cloud-project <project_id>
>> ```
>>
> **Via le CLI OpenStack**
>>
>> Récupérez les informations nécessaires :
>>
>> ```bash
>> openstack flavor list
>> openstack image list --property visibility=public
>> openstack keypair list
>> ```
>>
>> Créez l'instance :
>>
>> ```bash
>> openstack server create \
>>   --flavor b2-7 \
>>   --image "Ubuntu 24.04" \
>>   --key-name my-key \
>>   --network Ext-Net \
>>   my-instance
>> ```
>>
>> Vérifiez l'état :
>>
>> ```bash
>> openstack server list
>> openstack server show my-instance
>> ```
>>
>> Consultez le [guide de préparation de l'environnement OpenStack](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api) pour la mise en place initiale.
>>
> **Via Terraform**
>>
>> Exemple de configuration complète :
>>
>> ```hcl
>> data "openstack_images_image_v2" "ubuntu" {
>>   name        = "Ubuntu 24.04"
>>   most_recent = true
>> }
>>
>> resource "openstack_compute_instance_v2" "my_instance" {
>>   name            = "my-instance"
>>   flavor_name     = "b2-7"
>>   key_pair        = openstack_compute_keypair_v2.my_keypair.name
>>   security_groups = ["default"]
>>
>>   block_device {
>>     uuid                  = data.openstack_images_image_v2.ubuntu.id
>>     source_type           = "image"
>>     destination_type      = "local"
>>     boot_index            = 0
>>     delete_on_termination = true
>>   }
>>
>>   network {
>>     name = "Ext-Net"
>>   }
>> }
>> ```
>>
>> Consultez le [guide Terraform pour le Public Cloud OVHcloud](/pages/public_cloud/public_cloud_cross_functional/how_to_use_terraform) pour la configuration initiale du provider et l'authentification.
>>

### Étape 5 : Se connecter à l'instance

Les instructions de cette partie concernent les connexions à distance au moyen des protocoles **OpenSSH** et **RDP** via un réseau public (Internet).

Notez que nous proposons des moyens d'accès alternatifs (principalement utilisés pour le dépannage) qui ne sont disponibles que via votre espace client OVHcloud :

- [Console VNC](#54-acces-console-vnc)
- [Mode rescue](/pages/public_cloud/compute/put_an_instance_in_rescue_mode)

> [!primary]
>
> Si vous avez installé un **OS avec application**, reportez-vous à notre [guide sur les premiers pas avec les applications](/pages/public_cloud/compute/apps_first_steps) ainsi qu'à la documentation officielle de l'éditeur de l'OS.
>

#### 5.1 : Vérifier l'état de l'instance dans l'espace client

Connectez-vous à l'[espace client OVHcloud](/links/manager), rendez-vous dans la section `Public Cloud`{.action} et sélectionnez le projet Public Cloud concerné.

Sélectionnez `Instances`{.action} dans la barre de navigation de gauche sous **Compute**. Votre instance est prête lorsque l'état est défini sur `Activé` dans le tableau. Si l'instance a été créée récemment et a un statut différent, cliquez sur le bouton « Actualiser » situé à côté du filtre de recherche.

Cliquez sur le nom de l'instance dans ce tableau pour ouvrir le `Tableau de bord`{.action} sur lequel vous pouvez trouver toutes les informations concernant l'instance. Pour en savoir plus sur les fonctions disponibles sur cette page, consultez notre guide sur [la gestion des instances dans l'espace client](/pages/public_cloud/compute/first_steps_with_public_cloud_instance).

Un **utilisateur avec des droits élevés (*sudo*) est automatiquement créé** sur l'instance. Le nom d'utilisateur reflète l'image installée, par exemple « ubuntu », « debian », « fedora », etc. Vous pouvez le vérifier dans le `Tableau de bord`{.action} dans la section **Réseaux**.

> [!primary]
>
> Via l'OVHcloud CLI, vérifiez l'état et récupérez l'adresse IP de votre instance avec :
>
> ```bash
> ovhcloud cloud instance list --cloud-project <project_id>
> ```
>

Si votre [paire de clés SSH est correctement configurée](#etape-1-creer-un-jeu-de-cles-ssh), vous pouvez maintenant vous connecter à l'instance avec l'utilisateur préconfiguré et votre clé SSH. Vous trouverez des instructions plus détaillées dans les paragraphes suivants.

> [!primary]
>
> L'accès via la **console VNC** sur une nouvelle instance OS GNU/Linux créée dans l'espace client doit d'abord être activé comme décrit dans la [section du guide ci-dessous](#54-acces-console-vnc).
>
> Ce guide ne couvre pas le réseau privé pour les instances. Veuillez consulter notre documentation [Public Cloud Network Services](/products/public-cloud-network) à ce sujet.
>

#### 5.2 : Première connexion sur une instance sous OS GNU/Linux

> [!primary]
>
> Si vous recevez des messages d'erreur concernant vos **clés SSH**, vérifiez que votre appareil local dispose d'une clé SSH privée correctement configurée en utilisant les informations de [ce guide](/pages/public_cloud/compute/creating-ssh-keys-pci#create-ssh-key).<br>
> Si vous rencontrez toujours des difficultés, vous pouvez remplacer la paire de clés à l'aide de [ce guide](/pages/public_cloud/compute/replacing_lost_ssh_key).
>
> Si vous avez créé une instance sans clé SSH, via l'[API OVHcloud](/pages/manage_and_operate/api/first-steps) ou l'[interface OpenStack Horizon](/pages/public_cloud/compute/create_instance_in_horizon), vous ne pouvez ajouter une clé SSH à votre instance que via le [mode rescue](/pages/public_cloud/compute/put_an_instance_in_rescue_mode) en suivant les instructions décrites dans [ce guide](/pages/public_cloud/compute/replacing_lost_ssh_key).
>

Vous pouvez accéder à votre instance immédiatement après sa création via l'interface de ligne de commande de votre poste de travail local (`Terminal`, `Command prompt`, `Powershell`, etc.) via SSH.

```bash
ssh username@IPv4_instance
```

Exemple :

```bash
ssh ubuntu@203.0.113.101
```

[En fonction de votre configuration](#etape-1-creer-un-jeu-de-cles-ssh), vous devrez entrer une phrase secrète qui protège votre clé privée ou spécifier le chemin d'accès à votre fichier de clé. Consultez notre [guide des clés SSH](/pages/public_cloud/compute/creating-ssh-keys-pci#multiplekeys) pour des informations détaillées sur ce sujet.

Si vous utilisez un autre logiciel client SSH, reportez-vous à sa documentation utilisateur. Un exemple d'utilisation de la solution open source `PuTTY` est disponible dans [ce guide](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows).

Poursuivez à l'[étape 6 ci-dessous](#etape-6-premiers-pas-sur-une-nouvelle-instance).

#### 5.3 : instances Windows

##### 5.3.1 : Terminer l'installation d'une instance Windows

Après avoir vérifié que l'instance Windows est [installée](#51-verifier-letat-de-linstance-dans-lespace-client), ouvrez l'onglet `Console VNC`{.action} dans votre [espace client OVHcloud](/links/manager).

Il vous faudra ensuite finaliser la configuration initiale de votre système d'exploitation Windows. Suivez les étapes ci-dessous en parcourant les onglets :

> [!tabs]
> 1. **Paramètres régionaux**
>>
>> Configurez votre **pays/région**, la **langue Windows** préférée et votre **disposition du clavier**. Cliquez ensuite sur le bouton `Suivant`{.action} en bas à droite.
>>
> 2. **Mot de passe administrateur**
>>
>> Définissez un mot de passe pour votre compte Windows `Administrator` et confirmez-le, puis cliquez sur `Terminer`{.action}.
>>
> 3. **Écran de connexion**
>>
>> Windows appliquera vos paramètres, puis affichera l'écran de connexion. Cliquez sur le bouton `Send CtrlAltDel`{.action} en haut à droite pour vous connecter.
>>
> 4. **Login administrateur**
>>
>> Entrez le mot de passe `Administrator` que vous avez créé à l'étape précédente et cliquez sur le bouton « Arrow ».
>>

##### 5.3.2 : Connectez-vous à distance depuis Windows

Sur votre poste Windows local, vous pouvez utiliser l'application cliente `Remote Desktop Connection` pour vous connecter à votre instance.

Renseignez l'adresse IPv4 de votre instance, puis votre identifiant et votre passphrase. Généralement, un message d'avertissement apparaît, vous demandant de confirmer la connexion en raison d'un certificat inconnu. Cliquez sur `Oui`{.action} pour vous connecter.

> [!primary]
>
> Si vous rencontrez des difficultés avec cette procédure, vérifiez que les connexions à distance (RDP) sont autorisées sur votre appareil en vérifiant les paramètres système, les règles de pare-feu et les restrictions réseau possibles.
>

##### 5.3.3 : Se connecter à distance depuis un autre OS

Les connexions à partir d'un système d'exploitation de bureau autre que Windows nécessitent généralement un logiciel client compatible avec le `Remote Desktop Protocol` (RDP). Certains environnements de bureau et systèmes d'exploitation peuvent avoir un client natif intégré.

Quel que soit le client que vous utilisez, vous n'avez besoin que de l'adresse IP de votre instance et de votre mot de passe pour que le compte `Administrator` puisse se connecter.

**Exemple d'utilisation**

Le logiciel libre et open source `Remmina Remote Desktop Client` est disponible pour de nombreuses distributions de bureau GNU/Linux. Si vous ne trouvez pas Remmina dans le gestionnaire de logiciels de votre environnement de bureau, vous pouvez l'obtenir sur le [site officiel](https://remmina.org/).

> [!tabs]
> 1. **Connexion**
>>
>> Ouvrez Remmina et assurez-vous que le protocole de connexion est défini sur « RDP ». Entrez l'adresse IPv4 de votre instance Public Cloud et appuyez sur « Entrée ».
>>
> 2. **Authentification**
>>
>> Si un message d'avertissement de certificat apparaît, cliquez sur `Yes`{.action}. Entrez le nom d'utilisateur et votre mot de passe pour Windows et cliquez sur `OK`{.action} pour établir la connexion.
>>
> 3. **Paramètres**
>>
>> Vous pouvez trouver des éléments utiles dans la barre d'outils de gauche. Par exemple, cliquez sur l'icône `Toggle dynamic resolution update`{.action} pour améliorer la résolution de la fenêtre.
>>

#### 5.4 : accès console VNC

La console VNC vous permet de vous connecter à vos instances même lorsque d'autres moyens d'accès ne sont pas disponibles.

Connectez-vous à l'[espace client OVHcloud](/links/manager), rendez-vous dans la section `Public Cloud`{.action} et sélectionnez le projet Public Cloud concerné.

Sélectionnez `Instances`{.action} dans la barre de navigation de gauche sous **Compute**. Cliquez sur le nom de l'instance et ouvrez l'onglet `Console VNC`{.action}.

> [!tabs]
> **Instance avec un OS GNU/Linux installé**
>>
>> Un compte utilisateur **avec un mot de passe** doit être configuré sur l'instance pour utiliser la console VNC. Pour définir un mot de passe pour le compte préconfiguré, suivez les étapes de la [section 6.1.1 ci-dessous](#611-definissez-un-mot-de-passe-pour-le-compte-dutilisateur-actuel).
>>
> **Instance Windows**
>>
>> Connectez-vous avec vos identifiants Windows. En cas de session active, vous disposez d'un accès immédiat. Il y aura une latence notable par rapport à une connexion RDP.
>>

### Étape 6 : premiers pas sur une nouvelle instance

> [!primary]
>
> **Instances Windows**
>
> Aucune étape supplémentaire n'est requise pour les instances sur lesquelles un système d'exploitation Windows est installé.
>
> Retrouvez plus d'informations dans la section [Aller plus loin](#aller-plus-loin) ci-dessous.
>

#### 6.1 : Gestion des utilisateurs

> [!primary]
>
> Lors de la configuration des comptes d'utilisateurs et des niveaux d'autorisation sur une instance, nous vous recommandons d'utiliser les informations de notre [guide du compte d'utilisateur](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).
>

##### 6.1.1 : Définissez un mot de passe pour le compte d'utilisateur actuel

Lors de la [connexion à votre instance](#etape-6-premiers-pas-sur-une-nouvelle-instance), définissez un mot de passe pour l'utilisateur actuel en entrant cette commande :

```bash
sudo passwd
```

Entrez une phrase secrète, confirmez avec `Enter` et répétez.

```console
New password: 
Retype new password:
passwd: password updated successfully
```

**C'est suffisant pour activer les logins via la [console VNC](#54-acces-console-vnc) dans votre [espace client OVHcloud](/links/manager)**. Les connexions SSH distantes avec ce mot de passe sont cependant toujours **désactivées** par défaut.

##### 6.1.2 : Activation de la connexion à distance par mot de passe (optionnel)

> [!warning]
>
> Cette étape n'est pas nécessaire et ne doit être exécutée que si vous avez une raison valable d'activer ce type d'accès ; par exemple, si vous devez vous connecter temporairement à l'instance à partir d'un appareil sur lequel n'est pas stockée votre clé SSH privée.
>
> L'exemple suivant illustre une solution temporaire sur une instance sur laquelle Ubuntu est installé. Notez que vous devrez peut-être ajuster les commandes en fonction de votre système d'exploitation. Il n'est pas recommandé de conserver cette configuration en permanence car elle ajoute un risque potentiel de sécurité en ouvrant le système aux attaques basées sur SSH.
>

Une fois [connecté à votre instance](#etape-6-premiers-pas-sur-une-nouvelle-instance), ouvrez le fichier de configuration concerné avec un éditeur de texte. Exemple :

```bash
sudo nano /etc/ssh/sshd_config
```

Modifiez la ligne `#PasswordAuthentication yes` comme suit :

```console
PasswordAuthentication yes
```

Modifiez la ligne `Include /etc/ssh/sshd_config.d/*.conf` comme suit :

```console
#Include /etc/ssh/sshd_config.d/*.conf
```

Enregistrez le fichier et fermez l'éditeur.

Redémarrez le service SSH avec l'une des commandes suivantes :

```bash
sudo systemctl restart ssh
```

```bash
sudo systemctl restart sshd
```

Vous pouvez maintenant vous connecter en SSH avec un nom d'utilisateur et un mot de passe.

Annulez ces modifications pour revenir à la connexion par clé pour l'instance.

#### 6.2 : Clés SSH supplémentaires

Si vous souhaitez autoriser davantage de comptes d'utilisateurs à accéder à l'instance, la procédure standard est la suivante :

- Créer le compte sur l'instance.
- Créer une nouvelle paire de clés SSH sur le périphérique concerné.
- Ajouter la clé publique à l'instance.

Consultez notre [guide dédié](/pages/public_cloud/compute/configuring_additional_ssh_keys) pour une explication détaillée de ces étapes.

## Aller plus loin

[Comment activer une licence Windows pour une instance en mode privé](/pages/public_cloud/compute/activate-windows-license-private-mode)

[Comment réinitialiser un mot de passe administrateur Windows](/pages/bare_metal_cloud/virtual_private_servers/resetting_a_windows_password)

[Gestion des instances dans l'espace client](/pages/public_cloud/compute/first_steps_with_public_cloud_instance)

[Comment démarrer avec OpenStack](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api)

[Comment démarrer avec Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l'équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
