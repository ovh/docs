---
title: "Comment créer une instance Public Cloud et s'y connecter"
excerpt: "Découvrez comment configurer des instances Public Cloud dans votre espace client OVHcloud ainsi que les premières étapes avec vos instances"
updated: 2024-08-22
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

Les instances Public Cloud sont faciles à déployer et à gérer. Cependant, en tant que membre de l’écosystème Public Cloud d’OVHcloud, les instances offrent de nombreuses options de configuration et peuvent être adaptées à différents cas d'utilisation. Les instructions suivantes incluent toutes les étapes nécessaires (et aussi les étapes facultatives) pour créer une instance dans l’espace client OVHcloud et y accéder à distance.  
Vous pourrez ensuite aller plus loin avec votre projet Public Cloud en fonction de vos besoins.

**Ce guide vous détaille les premiers pas avec une instance Public Cloud.**

## Prérequis

- Un [projet Public Cloud](/links/public-cloud/public-cloud) dans votre compte OVHcloud
- Accès à l’[espace client OVHcloud](/links/manager)

## En pratique

> [!primary]
>
> Si vous n'avez pas encore créé de projet Public Cloud, commencez par notre [guide sur la création d'un projet](/pages/public_cloud/compute/create_a_public_cloud_project).
>
> **Les détails techniques** importants concernant le Public Cloud d’OVHcloud sont disponibles sur [cette page](/pages/public_cloud/compute/00-essential-info-to-get-started-on-public-cloud).
>

### Présentation du contenu

- [**1** Création de clés SSH](#create-ssh)
- [**2** Importation de clés SSH](#import-ssh)
- [**3** Préparation de la configuration réseau](#network)
- [**4** Création de l'instance](#create-instance)
    - [**4.1** Sélection d'un modèle d'instance](#model)
    - [**4.2** Sélection d'une région](#region)
    - [**4.3** Sélection d'une image](#image)
    - [**4.4** Configuration de votre instance](#configuration)
    - [**4.5** Configurer votre réseau](#network)
    - [**4.6** Sélectionner une période de facturation](#billing)
- [**5** Connexion à l'instance](#connect-instance)
    - [**5.1** Vérification de l'installation de l'instance dans l'espace client OVHcloud](#verify-status)
    - [**5.2** Première connexion sur une instance avec un OS GNU/Linux installé](#login-linux)
    - [**5.3** instances Windows](#windows)
        - [**5.3.1** Fin de l'installation d'une instance Windows](#windows)
        - [**5.3.2** Connexion à distance depuis Windows](#login-windows)
        - [**5.3.3** Connexion à distance depuis un autre OS](#login-other)
    - [**5.4** Accès console VNC](#vnc-console)
- [**6** Premiers pas sur une nouvelle instance](#manage-access)
    - [**6.1** Gestion des utilisateurs](#user-mgmt)
        - [**6.1.1** Définition d'un mot de passe pour le compte d'utilisateur actuel](#set-password)
        - [**6.1.2** Activation des connexions à distance par mot de passe](#remote-password)
    - [**6.2** Clés SSH supplémentaires](#add-keys)

> [!primary]
>
> **Vous devez fournir une clé SSH publique lors de la création d'instances Public Cloud dans votre espace client.** Une fois l'instance créée, vous pouvez configurer votre accès à distance à votre convenance.
>
> **Exception** : l'authentification de connexion sur les instances Windows nécessite un nom d'utilisateur et un mot de passe car Windows utilise RDP (**R**emote **D**esktop **P**rotocol).
>

<a name="create-ssh"></a>

### Étape 1 : créer un jeu de clés SSH

Si vous disposez déjà d'une paire de clés SSH prête à l'emploi, vous pouvez ignorer cette étape.

Le [protocole SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction) permet une communication client-serveur cryptée. Une **paire de clés SSH** se compose d'une clé publique et d'une clé privée.

- La **clé publique** est ajoutée à votre instance Public Cloud (et peut également être [stockée dans votre espace client OVHcloud](#import-ssh)).
- La **clé privée** est stockée sur votre équipement local et doit être sécurisée contre tout accès non autorisé. Seuls les périphériques clients avec la clé privée correspondante peuvent accéder à votre instance. Aucun mot de passe de compte d'utilisateur n'est requis pour la connexion.

Vous disposez de 2 options pour créer et gérer vos clés SSH :

- L'interface de ligne de commande de votre OS (simple client **Open SSH**).
- Un logiciel supplémentaire (compatible avec le protocole **Open SSH**) avec ligne de commande ou interface graphique.

La plupart des systèmes d'exploitation de bureau contemporains incluent nativement le client **Open SSH** accessible via l'application de ligne de commande du système (`cmd`, `Powershell`, `Terminal`, etc.). Si vous n'êtes pas familier avec l'utilisation des clés SSH comme méthode d'authentification, vous pouvez utiliser les instructions de [ce guide](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated#create-ssh-key) pour créer votre paire de clés.

Si vous utilisez un autre logiciel, reportez-vous à sa documentation utilisateur. Les instructions pour la solution open source `PuTTY` sont disponibles dans [ce guide](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated#useputty).

<a name="import-ssh"></a>

### Étape 2 : Importer les clés SSH

Vous pouvez stocker vos clés SSH publiques dans la section `Public Cloud`{.action} de votre [espace client OVHcloud](/links/manager). Ce n'est pas obligatoire, mais cela rend le processus de création d'instance plus pratique.

> [!primary]
>
> Les clés SSH stockées vous permettent de créer vos instances plus rapidement dans votre espace client. Pour changer les paires de clés et ajouter des utilisateurs une fois l'instance créée, reportez-vous au guide sur [les clés SSH supplémentaires](/pages/public_cloud/compute/configuring_additional_ssh_keys).
>
> Les clés SSH publiques ajoutées à votre espace client OVHcloud seront disponibles pour les services Public Cloud de toutes les [régions](/links/public-cloud/regions-pci). Vous pouvez stocker des clés chiffrées avec **RSA**, **ECDSA** et **ED25519**.
>

Connectez-vous à l'[espace client OVHcloud](/links/manager), rendez-vous dans la section `Public Cloud`{.action} et sélectionnez le projet Public Cloud concerné.

![control panel](/pages/assets/screens/control_panel/product-selection/public-cloud/tpl-pci-en.png){.thumbnail}

Ouvrez `SSH Keys`{.action} dans le menu de gauche sous **Project Management**. Cliquez sur le bouton `Ajouter une clé SSH`{.action}.

![ssh keys](/pages/assets/screens/control_panel/product-selection/public-cloud/cp_pci_sshkeys.png){.thumbnail}

Dans la nouvelle fenêtre, entrez un nom pour la clé. Remplissez le champ `Clé` avec votre chaîne de clé publique, par exemple celle créée à l'[étape 1](#create-ssh). Confirmez en cliquant sur `Ajouter`{.action}.

![add key](images/24-addkey.png){.thumbnail}

Vous pouvez dorénavant sélectionner cette clé à l'[Étape 4](#create-instance) pour l'ajouter à une nouvelle instance.

<a name="network"></a>

### Étape 3 : préparer la configuration réseau

Avant de créer votre instance, nous vous recommandons d'étudier la manière dont l'instance sera utilisée en termes de mise en réseau.

- Si vous n'avez pas besoin de configurer l'instance avec un réseau privé pour le moment, vous pouvez passer à l'[étape 4](#create-instance). Vous pouvez créer une instance exposée à l'Internet public (voir le **Mode Public** [ci-dessous](#networking-modes).)
- Si l'instance doit être connectée à un nouveau réseau privé (OVHcloud [vRack](/links/network/vrack)), **créez d'abord votre vRack** avant de continuer. Retrouvez les détails dans le [guide sur le vRack Public Cloud](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack).

<a name="networking-modes"></a>

/// details | Public Cloud Networking - Modes

**Mode Public**

Les instances en mode public sont exposées à Internet directement via IPv4/IPv6. Les adresses IP ne peuvent pas être modifiées, mais les instances peuvent avoir des adresses [Additional IP](/links/network/additional-ip) attachées ([y compris votre propre IP](/links/network/byoip)) et elles peuvent être connectées à un [vRack](/links/network/vrack).

**Mode Privé**

Les instances en mode privé peuvent uniquement être exposées à Internet via un service [Gateway](/links/public-cloud/gateway) ou [Load Balancer](/links/public-cloud/load-balancer) et des adresses [Floating IP](/links/public-cloud/floating-ip).

Pour plus d'informations, veuillez consulter nos guides dans la section [Public Cloud Network Services](/products/public-cloud-network). Le [guide des concepts](/pages/public_cloud/public_cloud_network_services/concepts-01-public-cloud-networking-concepts) fournit une introduction au Public Cloud Networking.

**Mode Privé Local**

Le mode privé local ne s'applique que si vous créez une instance dans une **Local Zone**. Les instances peuvent être exposées à Internet directement via IPv4/IPv6. Seules les instances d'une même Local Zone peuvent être connectées via des réseaux privés. Les Local Zones ne sont pas compatibles avec le [vRack](/links/network/vrack). Dans ce mode, DHCP fournit automatiquement des adresses IP à vos instances.

Pour en savoir plus, consultez la [page Web des Local Zones](/links/public-cloud/local-zones).

///

<a name="create-instance"></a>

### Étape 4 : créer l'instance

> [!primary]
>
> Une clé SSH publique est obligatoire lors de la création d'une instance dans l'espace client OVHcloud (à l'exception des instances Windows).
>
> Reportez-vous à l'[étape 1](#create-ssh) et l'[étape 2](#import-ssh) de ce guide si vous n'avez pas de clés SSH prêtes à l'emploi.
>

Connectez-vous à l'[espace client OVHcloud](/links/manager), rendez-vous dans la section `Public Cloud`{.action} et sélectionnez le projet Public Cloud concerné.

![control panel](/pages/assets/screens/control_panel/product-selection/public-cloud/tpl-pci-en.png){.thumbnail}

Sur la page « **Accueil** », cliquez sur `Créer une instance`{.action}.

![instance creation](images/24-instance-creation01.png){.thumbnail}

<a name="model"></a>

#### Étape 4.1 : Sélectionnez un modèle

Lors de la première étape, vous sélectionnez un modèle d'instance (que l'on peut également appeler « *flavour* ») qui définit les ressources de l'instance. Cliquez sur l'onglet avec la ressource clé pour vos besoins afin de trouver nos modèles d'instances optimisés.

![instance model](images/24-instance-creation02.png){.thumbnail}

Dans la section `Découverte`{.action}, nous vous proposons des modèles d’instances à ressources partagées à des prix avantageux. Elles sont idéales pour tester le Public Cloud en général ou une application web par exemple.

Les modèles d'instance de type `Metal`{.action} fournissent des ressources physiques dédiées.

> [!primary]
>
> Le total de vos ressources Public Cloud sera initialement limité pour des raisons de contrôle des coûts et de sécurité. Vous pouvez vérifier ces quotas en cliquant sur `Quota and Regions`{.action} dans la barre de navigation de gauche sous **Project Management**. Consultez [la documentation dédiée](/pages/public_cloud/compute/increasing_public_cloud_quota) pour plus d'informations.
>
> Notez que vous pouvez **mettre à niveau** votre instance après sa création pour avoir plus de ressources disponibles. Le passage à un modèle plus petit n'est cependant pas possible avec une instance régulière. Vous trouverez plus d'informations sur ce sujet à l'**étape 4.4** ci-dessous.
>

#### Informations complémentaires

/// details | Catégories de modèles d'instance

| Type | Ressources garanties | Notes d'utilisation |
| :---         |     :---:      |          :--- |
| General Purpose   | ✓     | Serveurs de développement, applications web ou métier    |
| Compute Optimized     | ✓       | Encodage vidéo ou autre calcul haute performance      |
| Memory Optimized    | ✓     | Bases de données, analyses et calculs en mémoire    |
| GPU     | ✓       | Puissance de traitement massivement parallèle pour les applications spécialisées (rendu, big data, deep learning, etc.)       |
| Discovery    | -       | Hébergement sur ressources partagées pour les environnements de test et de développement      |
| Storage Optimized   | ✓     | Optimisé pour le transfert de données sur disque    |
| Metal | ✓ | Ressources dédiées avec accès direct aux ressources de calcul, de stockage et de réseau|

///

/// details | Régions et Local Zones

**Régions**

Une **région** est définie comme un emplacement dans le monde composé d'un ou plusieurs datacenters où les services OVHcloud sont hébergés. Vous pouvez trouver plus d'informations sur les régions, la répartition géographique et la disponibilité des services sur notre [page web dédiée](/links/public-cloud/regions-pci) et notre [page web sur les localisations des infrastructures OVHcloud](/links/infrareg).

**Local Zones**

Les Local Zones sont une extension des **régions** qui rapprochent les services OVHcloud de sites spécifiques, offrant une latence réduite et des performances améliorées pour les applications. Vous pouvez trouver plus d'informations sur la [page Web des Local Zones](/links/public-cloud/local-zones) et dans la [documentation des capacités des Local Zones](/pages/public_cloud/compute/local-zones-capabilities-limitations).

///

<a name="region"></a>

#### Étape 4.2 : Sélectionnez une localisation

Sélectionnez une [région](/links/public-cloud/regions-pci) la plus proche de vos utilisateurs ou clients. Cette option peut être limitée, selon le choix du modèle à l'**étape 4.1**. Notez que si vous sélectionnez une **Local Zone** à cette étape, des limitations de réseau s'appliqueront à l'instance (voir [Étape 3](#networking-modes)).

Reportez-vous également aux informations de la [page Web des Local Zones](/links/public-cloud/local-zones) et de la [documentation des capacités des Local Zones](/pages/public_cloud/compute/local-zones-capabilities-limitations).

![sélection de région](images/24-instance-creation03.png){.thumbnail}

<a name="image"></a>

#### Étape 4.3 : Sélectionnez une image

Cliquez sur l'onglet de votre choix et sélectionnez un système d'exploitation pour votre instance dans les menus déroulants.

![image selection](images/24-instance-creation04.png){.thumbnail}

Les images disponibles à cette étape dépendent des choix opérés lors des étapes précédentes, c'est-à-dire de la compatibilité avec le modèle d'instance et de la disponibilité régionale. Par exemple, si vous souhaitez sélectionner un système d'exploitation Windows et qu'il n'y a pas d'options dans l'onglet Windows, vous devez modifier vos choix des étapes précédentes.

> [!primary]
>
> Si vous choisissez un système d'exploitation nécessitant une licence payante, ces coûts seront automatiquement inclus dans la facturation du projet.
>

Cette étape nécessite également **l'ajout d'une clé SSH publique** (à l'exception des instances Windows). Vous avez 2 options :

- Utiliser une clé publique déjà stockée dans l'espace client OVHcloud
- Saisir directement une clé publique

Cliquez sur les onglets ci-dessous pour afficher leur présentation :

> [!tabs]
> **Utiliser une clé stockée**
>>
>> Pour ajouter une clé stockée dans votre espace client OVHcloud (voir [Étape 2](#import-ssh)), sélectionnez-la dans la liste.<br><br>
>>![key selection](images/24-instance-creation05.png){.thumbnail}<br>
>>
> **Saisir directement une clé**
>>
>> Pour ajouter une clé publique en collant la chaîne de clé, cliquez sur le bouton `Ajouter une clé`{.action}.<br><br>
>>![key selection](images/24-instance-creation06.png){.thumbnail}<br>
>> Entrez un nom pour la clé et la chaîne de clé dans les champs respectifs. Cliquez ensuite sur `Suivant`{.action}.<br><br>
>>![key selection](images/24-instance-creation07.png){.thumbnail}<br>
>> Avant de cliquer sur `Suivant`{.action}, vous pouvez faire le choix d'utiliser le bouton `Ajouter une clé`{.action} pour stocker cette clé dans votre espace client OVHcloud (voir l'[étape 2](#import-ssh) pour plus de détails).
>>

<a name="configuration"></a>

#### Étape 4.4 : Configurez votre instance

![instance select](images/24-instance-creation08.png){.thumbnail}

Cette étape offre plusieurs options de configuration. Cliquez sur les onglets ci-dessous pour afficher les détails :

> [!tabs]
> **1 : Nombre d'instances à créer**
>>
>> Vous pouvez créer plusieurs instances en fonction des sélections effectuées lors des étapes de création, mais [les limites de quota de ressources](/pages/public_cloud/compute/increasing_public_cloud_quota) s’appliqueront.<br>
>>
> **2 : Instance flexible**
>>
>> Si le modèle sélectionné est compatible, vous pouvez choisir de créer une **instance Flex**. Cette option vous permet d’effectuer une mise à niveau vers un modèle plus petit (et même de passer à une autre catégorie de modèle), mais elle limite l’instance à **50 Go de stockage inclus fixes**, quelles que soient les autres mises à niveau ou rétrogradations.<br>
>>
> **3 : Nom de l’instance**
>>
>> Entrez un nom complet pour votre instance. La référence commerciale du modèle d'instance est la valeur par défaut.<br>
>>
> **4 : Script de post-installation**
>>
>> Vous pouvez ajouter [votre script](/pages/public_cloud/compute/launching_script_when_creating_instance) dans ce champ.<br>
>>
> **5 : Sauvegarde automatique des instances**
>>
>> Vous pouvez activer [les sauvegardes automatisées](/pages/public_cloud/compute/save_an_instance) en sélectionnant cette option. Veuillez prendre connaissance des informations tarifaires et des détails complémentaires.
>>

<a name="network"></a>

#### Étape 4.5 : Configurez votre réseau

Dans cette étape, vous devez appliquer le mode de réseau Public Cloud que vous avez décidé, en fonction des informations de l'[étape 3](#network) ci-dessus. Vos options dépendent du [choix de l'emplacement précédent](#region) pour l'instance (**Région** ou **Local Zone**).

##### Régions

> [!tabs]
> **Mode Privé**
>>
>> L’instance peut rester entièrement privée.<br><br>
>>![network type](images/24-instance-creation09.png){.thumbnail}<br>
>> Vous pouvez connecter l'instance à un [réseau privé](#networking-modes) et une [Floating IP](/links/public-cloud/floating-ip). Aucune adresse IP publique dédiée ne sera attachée.<br><br>
>>![network type](images/24-instance-creation10.png){.thumbnail}<br>
>> Notez que si vous cliquez sur `Créer un nouveau réseau privé`{.action}, le processus de création d'instance sera interrompu et devra être redémarré depuis le début.<br>
>>
> **Mode Public**
>>
>> L’instance sera exposée à Internet directement via IPv4/IPv6.<br><br>
>>![network type](images/24-instance-creation11.png){.thumbnail}<br>
>> Vous pouvez également connecter l’instance à un [réseau privé](#networking-modes) (vRack) via le menu déroulant.<br>
>> Notez que si vous cliquez sur `Créer un nouveau réseau privé`{.action}, le processus de création d'instance sera interrompu et devra être redémarré depuis le début.
>>

Cliquez sur `Suivant`{.action} pour passer à la dernière étape.

##### Local Zones

Vous pouvez choisir d'attacher l'instance à un réseau privé, de la rendre accessible publiquement ou les deux.

![network type](images/24-instance-creation12.png){.thumbnail}

> [!tabs]
> **Réseau Public**
>>
>> Si vous sélectionnez l'option `Réseau Public`, l'instance sera exposée à Internet directement via IPv4/IPv6.<br>
>> Vous pouvez en plus connecter l'instance à un [réseau privé](#networking-modes) (non compatible avec vRack) si vous sélectionnez `Réseau Privé Local compatible avec Local Zones` (voir l'onglet **Réseau Privé Local**).
>>
> **Réseau Privé Local**
>>
>> Cochez la case `Réseau Privé Local compatible avec Local Zones`. Si vous sélectionnez **cette option sans sélectionner** `Réseau Public`, l'instance restera entièrement privée, attachée à un [réseau privé](#networking-modes) (non compatible avec vRack). Choisissez un réseau existant dans la liste via l'option `Associer un réseau privé existant` ou créez-en un nouveau pour la Local Zone en choisissant `Créer un réseau privé local` (sans interrompre le processus de création de l'instance).<br><br>
>>![network type](images/24-instance-creation13.png){.thumbnail}
>>

Cliquez sur `Suivant`{.action} pour passer à la dernière étape.

<a name="billing"></a>

#### Étape 4.6 : Sélectionnez une période de facturation

![mode de facturation](images/24-instance-creation14.png){.thumbnail}

> [!primary]
>
> Veuillez noter que, selon le modèle d’instance choisi, la facturation **horaire** peut être la seule sélection affichée. Il s’agit d’une limitation temporaire, de nouvelles options de facturation de Public Cloud seront bientôt disponibles.
>

> [!tabs]
> **Facturation mensuelle**
>>
>> La facturation mensuelle entraînera une baisse des coûts au fil du temps, mais **ne peut pas être changé** en facturation à l'heure une fois l'instance créée.<br>
>>
> **Facturation à l’heure**
>>
>> La facturation à l'heure est le meilleur choix si vous n'avez pas clairement déterminé la durée de la période d'utilisation. Si vous décidez de conserver l’instance pour une utilisation à long terme, vous pouvez toujours [passer à un abonnement mensuel](/pages/account_and_service_management/managing_billing_payments_and_services/changing_hourly_monthly_billing).<br>
>> L'instance sera facturée tant qu'elle n'est **pas supprimée**, quelle que soit l'utilisation réelle de l'instance.
>>

Retrouvez les détails dans notre documentation de facturation dédiée :

- [Facturation du Public Cloud](/pages/public_cloud/compute/analyze_billing)
- [FAQ sur la facturation mensuelle](/pages/public_cloud/compute/faq_change_of_monthly_billing_method)

Une fois la configuration de votre instance terminée, cliquez sur le bouton `Créer une instance`{.action}. La livraison de votre service peut prendre quelques minutes.

<a name="connect-instance"></a>

### Étape 5 : Se connecter à l'instance

Les instructions de cette partie concernent les connexions à distance au moyen des protocoles **Open SSH** et **RDP** via un réseau public (internet).

Notez que nous proposons des moyens d'accès alternatifs (principalement utilisés pour le dépannage) qui ne sont disponibles que via votre espace client OVHcloud :

- [Console VNC](#vnc-console)
- [Mode rescue](/pages/public_cloud/compute/put_an_instance_in_rescue_mode)

> [!primary]
>
> Si vous avez installé un **OS avec application**, reportez-vous à notre [guide sur les premiers pas avec les applications](/pages/public_cloud/compute/apps_first_steps) ainsi qu'à la documentation officielle de l'éditeur de l'OS.
>

<a name="verify-status"></a>

#### 5.1 : Vérifier l'état de l'instance dans l'espace client

Connectez-vous à l'[espace client OVHcloud](/links/manager), rendez-vous dans la section `Public Cloud`{.action} et sélectionnez le projet Public Cloud concerné.

![espace client](/pages/assets/screens/control_panel/product-selection/public-cloud/tpl-pci-en.png){.thumbnail}

Sélectionnez `Instances`{.action} dans la barre de navigation de gauche sous **Compute**. Votre instance est prête lorsque l'état est défini sur `Activé` dans le tableau. Si l'instance a été créée récemment et a un statut différent, cliquez sur le bouton « Actualiser » situé à côté du filtre de recherche.

![page instances](images/24-instance-connect01.png){.thumbnail}

Cliquez sur le nom de l'instance dans ce tableau pour ouvrir le `Tableau de bord`{.action} sur lequel vous pouvez trouver toutes les informations concernant l'instance. Pour en savoir plus sur les fonctions disponibles sur cette page, consultez notre guide sur [la gestion des instances dans l’espace client](/pages/public_cloud/compute/first_steps_with_public_cloud_instance).

Un **utilisateur avec des droits élevés (*sudo*) est automatiquement créé** sur l'instance. Le nom d'utilisateur reflète l'image installée, par exemple « ubuntu », « debian », « fedora », etc. Vous pouvez le vérifier sur le côté droit du `Tableau de bord`{.action} dans la section **Réseaux**.

![page instances](images/24-instance-connect02.png){.thumbnail}

Si votre [paire de clés SSH est correctement configurée](#create-ssh), vous pouvez maintenant vous connecter à l'instance avec l'utilisateur préconfiguré et votre clé SSH. Vous trouverez des instructions plus détaillées dans les paragraphes suivants.

> [!primary]
>
> L'accès via la **console VNC** sur une nouvelle instance OS GNU/Linux créée dans l'espace client doit d'abord être activé comme décrit dans la [section du guide ci-dessous](#vnc-console).
>
> Ce guide ne couvre pas le réseau privé pour les instances. Veuillez consulter notre documentation [Public Cloud Network Services](/products/public-cloud-network) à ce sujet.
>

<a name="login-linux"></a>

#### 5.2 : Première connexion sur une instance sous OS GNU/Linux

> [!primary]
>
> Si vous recevez des messages d’erreur concernant vos **clés SSH**, vérifiez que votre appareil local dispose d’une clé SSH privée correctement configurée en utilisant les informations de [ce guide](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated#create-ssh-key).</br>
> Si vous rencontrez toujours des difficultés, vous pouvez remplacer la paire de clés à l'aide de [ce guide](/pages/public_cloud/compute/replacing_lost_ssh_key).
>
> Si vous avez créé une instance sans clé SSH, via l’[API OVHcloud](/pages/manage_and_operate/api/first-steps) ou l’[interface OpenStack Horizon](/pages/public_cloud/compute/create_instance_in_horizon), vous ne pouvez ajouter une clé SSH à votre instance que via le [mode rescue](/pages/public_cloud/compute/put_an_instance_in_rescue_mode) en suivant les instructions décrites dans [ce guide](/pages/public_cloud/compute/replacing_lost_ssh_key).
>

Vous pouvez accéder à votre instance immédiatement après sa création via l'interface de ligne de commande de votre poste de travail local (`Terminal`, `Command prompt`, `Powershell`, etc.) via SSH.

```bash
ssh username@IPv4_instance
```

Exemple :

```bash
ssh ubuntu@203.0.113.101
```

[En fonction de votre configuration](#create-ssh), vous devrez entrer une phrase secrète qui protège votre clé privée ou spécifier le chemin d'accès à votre fichier de clé. Consultez notre [guide des clés SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated#multiplekeys) pour des informations détaillées sur ce sujet.

Si vous utilisez un autre logiciel client SSH, reportez-vous à sa documentation utilisateur. Un exemple d'utilisation de la solution open source `PuTTY` est disponible dans [ce guide](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated#useputty).

Poursuivez à l'[étape 6 ci-dessous](#manage-access).

<a name="windows"></a>

#### 5.3 : instances Windows

##### 5.3.1 : Terminer l'installation d'une instance Windows

Après avoir vérifié que l'instance Windows est [installée](#verify-status), ouvrez l'onglet `Console VNC`{.action} dans votre [espace client OVHcloud](/links/manager).

Il vous faudra ensuite finaliser la configuration initiale de votre système d’exploitation Windows. Suivez les étapes ci-dessous en parcourant les onglets :

> [!tabs]
> 1. **Paramètres régionaux**
>>
>> Configurez votre **pays/région**, la **langue Windows** préférée et votre **disposition du clavier**. Cliquez ensuite sur le bouton `Suivant`{.action} en bas à droite.<br><br>
>>![VNC](/pages/assets/screens/other/windows/windows_locale.png){.thumbnail}<br>
>>
> 2. **Mot de passe administrateur**
>>
>> Définissez un mot de passe pour votre compte Windows `Administrator` et confirmez-le, puis cliquez sur `Terminer`{.action}.<br><br>
>>![VNC](/pages/assets/screens/other/windows/windows_admin.png){.thumbnail}<br>
>>
> 3. **Écran de connexion**
>>
>> Windows appliquera vos paramètres, puis affichera l'écran de connexion. Cliquez sur le bouton `Send CtrlAltDel`{.action} en haut à droite pour vous connecter.<br><br>
>>![VNC](/pages/assets/screens/other/windows/windows_vnc.png){.thumbnail}<br>
>>
> 4. **Login administrateur**
>>
>> Entrez le mot de passe `Administrator` que vous avez créé à l'étape précédente et cliquez sur le bouton « Arrow ».<br><br>
>>![VNC](/pages/assets/screens/other/windows/windows_login.png){.thumbnail}
>>

<a name="login-windows"></a>

##### 5.3.2 : Connectez-vous à distance depuis Windows

Sur votre poste Windows local, vous pouvez utiliser l'application cliente `Remote Desktop Connection` pour vous connecter à votre instance.

![rdp connection](/pages/assets/screens/other/windows/windows_rdp.png){.thumbnail}

Renseignez l'adresse IPv4 de votre instance, puis votre identifiant et votre passphrase. Généralement, un message d'avertissement apparaît, vous demandant de confirmer la connexion en raison d'un certificat inconnu. Cliquez sur `Oui`{.action} pour vous connecter.

> [!primary]
>
> Si vous rencontrez des difficultés avec cette procédure, vérifiez que les connexions à distance (RDP) sont autorisées sur votre appareil en vérifiant les paramètres système, les règles de pare-feu et les restrictions réseau possibles.
>

<a name="login-other"></a>

##### 5.3.3 : Se connecter à distance depuis un autre OS

Les connexions à partir d'un système d'exploitation de bureau autre que Windows nécessitent généralement un logiciel client compatible avec le `Remote Desktop Protocol` (RDP). Certains environnements de bureau et systèmes d'exploitation peuvent avoir un client natif intégré.

Quel que soit le client que vous utilisez, vous n'avez besoin que de l'adresse IP de votre instance et de votre mot de passe pour que le compte `Administrator` puisse se connecter.

**Exemple d’utilisation**

Le logiciel libre et open source `Remmina Remote Desktop Client` est disponible pour de nombreuses distributions de bureau GNU/Linux. Si vous ne trouvez pas Remmina dans le gestionnaire de logiciels de votre environnement de bureau, vous pouvez l'obtenir sur le [site officiel](https://remmina.org/).

![linux remote](images/24-rem-connect01.png){.thumbnail}<br>

> [!tabs]
> 1. **Connexion**
>>
>> Ouvrez Remmina et assurez-vous que le protocole de connexion est défini sur « RDP ». Entrez l'adresse IPv4 de votre instance Public Cloud et appuyez sur « Entrée ».<br><br>
>>![linux remote](images/24-rem-connect02.png){.thumbnail}<br>
>>
> 2. **Authentification**
>>
>> Si un message d'avertissement de certificat apparaît, cliquez sur `Yes`{.action}. Entrez le nom d'utilisateur et votre mot de passe pour Windows et cliquez sur `OK`{.action} pour établir la connexion.<br><br>
>>![linux remote](images/24-rem-connect03.png){.thumbnail}<br>
>>
> 3. **Paramètres**
>>
>> Vous pouvez trouver des éléments utiles dans la barre d'outils de gauche. Par exemple, cliquez sur l'icône `Toggle dynamic resolution update`{.action} pour améliorer la résolution de la fenêtre.<br><br>
>>![linux remote](images/24-rem-connect04.png){.thumbnail}
>>

<a name="vnc-console"></a>

#### 5.4 : accès console VNC

La console VNC vous permet de vous connecter à vos instances même lorsque d'autres moyens d'accès ne sont pas disponibles.

Connectez-vous à l'[espace client OVHcloud](/links/manager), rendez-vous dans la section `Public Cloud`{.action} et sélectionnez le projet Public Cloud concerné.

![espace client](/pages/assets/screens/control_panel/product-selection/public-cloud/tpl-pci-en.png){.thumbnail}

Sélectionnez `Instances`{.action} dans la barre de navigation de gauche sous **Compute**. Cliquez sur le nom de l'instance et ouvrez l'onglet `Console VNC`{.action}.

![console vnc](/pages/assets/screens/control_panel/product-selection/public-cloud/cp-pci-vnc-login.png){.thumbnail}

> [!tabs]
> **Instance avec un OS GNU/Linux installé**
>>
>> Un compte utilisateur **avec un mot de passe** doit être configuré sur l'instance pour utiliser la console VNC. Pour définir un mot de passe pour le compte préconfiguré, suivez les étapes de [section 6.1.1 ci-dessous](#set-password).
>>
> **Instance Windows**
>>
>> Connectez-vous avec vos identifiants Windows. En cas de session active, vous disposez d'un accès immédiat. Il y aura une latence notable par rapport à une connexion RDP.
>>

<a name="manage-access"></a>

### Étape 6 : premiers pas sur une nouvelle instance

> [!primary]
>
>**Instances Windows**
>
> Aucune étape supplémentaire n’est requise pour les instances sur lesquelles un système d’exploitation Windows est installé.
>
> Retrouvez plus d’informations dans la section [Aller plus loin](#go-further) ci-dessous.
>

<a name="user-mgmt"></a>

#### 6.1 : Gestion des utilisateurs

<a name="set-password"></a>

> [!primary]
>
> Lors de la configuration des comptes d'utilisateurs et des niveaux d'autorisation sur une instance, nous vous recommandons d'utiliser les informations de notre [guide du compte d'utilisateur](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).
>

##### 6.1.1 : Définissez un mot de passe pour le compte d'utilisateur actuel

Lors de la [connexion à votre instance](#manage-access), définissez un mot de passe pour l'utilisateur actuel en entrant cette commande :

```bash
sudo passwd
```

Entrez une phrase secrète, confirmez avec `Enter` et répétez.

```console
New password: 
Retype new password:
passwd: password updated successfully
```

**C'est suffisant pour activer les logins via la [console VNC](#vnc-console) dans votre [espace client OVHcloud](/links/manager)**. Les connexions SSH distantes avec ce mot de passe sont cependant toujours **désactivées** par défaut.

<a name="remote-password"></a>

#### 6.1.2 : Activation de la connexion à distance par mot de passe (optionnel)

> [!warning]
>
> Cette étape n'est pas nécessaire et ne doit être exécutée que si vous avez une raison valable d'activer ce type d'accès ; par exemple, si vous devez vous connecter temporairement à l'instance à partir d'un appareil sur lequel n'est pas stockée votre clé SSH privée.
>
> L'exemple suivant illustre une solution temporaire sur une instance sur laquelle Ubuntu est installé. Notez que vous devrez peut-être ajuster les commandes en fonction de votre système d'exploitation. Il n'est pas recommandé de conserver cette configuration en permanence car elle ajoute un risque potentiel de sécurité en ouvrant le système aux attaques basées sur SSH.
>

Une fois [connecté à votre instance](#manage-access), ouvrez le fichier de configuration concerné avec un éditeur de texte. Exemple :

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

<a name="add-keys"></a>

#### 6.2 : Clés SSH supplémentaires

Si vous souhaitez autoriser davantage de comptes d'utilisateurs à accéder à l'instance, la procédure standard est la suivante :

- Créer le compte sur l'instance.
- Créer une nouvelle paire de clés SSH sur le périphérique concerné.
- Ajouter la clé publique à l'instance.

Consultez notre [guide dédié](/pages/public_cloud/compute/configuring_additional_ssh_keys) pour une explication détaillée de ces étapes.

<a name="go-further"></a>

## Aller plus loin

[Comment activer une licence Windows pour une instance en mode privé](/pages/public_cloud/compute/activate-windows-license-private-mode)

[Comment réinitialiser un mot de passe administrateur Windows](/pages/bare_metal_cloud/virtual_private_servers/resetting_a_windows_password)

[Gestion des instances dans l’espace client](/pages/public_cloud/compute/first_steps_with_public_cloud_instance)

[Comment démarrer avec OpenStack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api)

[Comment démarrer avec Horizon](/pages/public_cloud/compute/introducing_horizon)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
