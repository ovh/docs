---
title: "Comment créer une instance Public Cloud et s'y connecter"
excerpt: "Découvrez comment configurer des instances Public Cloud dans votre espace client OVHcloud ainsi que les premières étapes avec vos instances"
updated: 2026-02-24
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

<!-- CP-NAV-START:publiccloud-projects -->
---

### Accès à l’espace client OVHcloud

- **Lien direct :** [Projets Public Cloud](/links/control-panel/publiccloud-projects)
- **Pour accéder à vos services :** `Public Cloud`{.action} > Sélectionnez votre projet

---
<!-- CP-NAV-END:publiccloud-projects -->

> [!success]
> Bénéficiez de prix réduits en vous engageant sur une période de 1 à 36 mois sur vos ressources Public Cloud. Plus d’informations sur notre page [Savings Plans](/links/public-cloud/savings-plan).

## En pratique

> [!primary]
>
> Si vous n'avez pas encore créé de projet Public Cloud, commencez par notre [guide sur la création d'un projet](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project).
>
> **Les détails techniques** importants concernant le Public Cloud d’OVHcloud sont disponibles sur [cette page](/pages/public_cloud/public_cloud_cross_functional/00-essential-info-to-get-started-on-public-cloud).
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
    - [Étape 4.1 : Nom de l'instance](#etape-41-nom-de-linstance)
    - [Étape 4.2 : Sélectionnez une localisation](#etape-42-selectionnez-une-localisation)
    - [Étape 4.3 : Sélectionnez un modèle](#etape-43-selectionnez-un-modele)
      - [Informations complémentaires](#informations-complementaires)
    - [Étape 4.4 : Sélectionnez une image](#etape-44-selectionnez-une-image)
    - [Étape 4.5 : Sélectionnez une clé SSH (non applicable aux instances Windows)](#etape-45-selectionnez-une-cle-ssh-non-applicable-aux-instances-windows)
    - [Étape 4.6 : Configurez les paramètres de sauvegarde](#etape-46-configurez-les-parametres-de-sauvegarde)
    - [Étape 4.7 : Configurez le réseau](#etape-47-configurez-le-reseau)
    - [Étape 4.8 : Sélectionnez une période de facturation](#etape-48-selectionnez-une-periode-de-facturation)
    - [Étape 4.9 : Configurez les paramètres avancés](#etape-49-configurez-les-parametres-avances)
      - [Instance flexible](#instance-flexible)
      - [Script de post-installation](#script-de-post-installation)
    - [Étape 4.10 : Finalisation de votre instance](#etape-410-finalisation-de-votre-instance)
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

Vous pouvez stocker vos clés SSH publiques dans la section `Public Cloud`{.action} de votre [espace client OVHcloud](/links/manager). Ce n'est pas obligatoire, mais cela rend le processus de création d'instance plus pratique.

> [!primary]
>
> Les clés SSH stockées vous permettent de créer vos instances plus rapidement dans votre espace client. Pour changer les paires de clés et ajouter des utilisateurs une fois l'instance créée, reportez-vous au guide sur [les clés SSH supplémentaires](/pages/public_cloud/compute/configuring_additional_ssh_keys).
>
> Les clés SSH publiques ajoutées à votre espace client OVHcloud seront disponibles pour les services Public Cloud de toutes les [régions](/links/public-cloud/regions-pci). Vous pouvez stocker des clés chiffrées avec **RSA**, **ECDSA** et **ED25519**.
>

Ouvrez `Clés SSH`{.action} dans le menu de gauche sous **Paramètres**. Cliquez sur le bouton `Ajouter une clé SSH`{.action}.

![ssh keys](/pages/assets/screens/control_panel/product-selection/public-cloud/cp_pci_sshkeys.png){.thumbnail}

Dans la nouvelle fenêtre, entrez un nom pour la clé. Remplissez le champ `Clé` avec votre chaîne de clé publique, par exemple celle créée à l'[étape 1](#etape-1-creer-un-jeu-de-cles-ssh). Confirmez en cliquant sur `Ajouter`{.action}.

![add key](images/24-addkey.png){.thumbnail}

Vous pouvez dorénavant sélectionner cette clé à l'[Étape 4](#etape-4-creer-linstance) pour l'ajouter à une nouvelle instance.

### Étape 3 : préparer la configuration réseau

Avant de créer votre instance, nous vous recommandons d'étudier la manière dont l'instance sera utilisée en termes de mise en réseau.

- Si vous n'avez pas besoin de configurer l'instance avec un réseau privé pour le moment, vous pouvez passer à l'[étape 4](#etape-4-creer-linstance). Vous pouvez créer une instance exposée à l'Internet public (voir le **Mode Public** [ci-dessous](#networking-modes).)
- Si l'instance doit être connectée à un nouveau réseau privé (OVHcloud [vRack](/links/network/vrack)), notez que le vRack est créé automatiquement lors de la création de votre projet Public Cloud. Aucune action préalable n’est donc requise. Pour plus d’informations, consultez le [guide sur le vRack Public Cloud](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack).

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

> [!primary]
>
> Une clé SSH publique est obligatoire lors de la création d'une instance dans l'espace client OVHcloud (à l'exception des instances Windows).
>
> Reportez-vous à l'[étape 1](#etape-1-creer-un-jeu-de-cles-ssh) et l'[étape 2](#etape-2-importer-les-cles-ssh) de ce guide si vous n'avez pas de clés SSH prêtes à l'emploi.
>

Sur la page **Accueil**, cliquez sur `Créer une instance`{.action}.

#### Étape 4.1 : Nom de l'instance

Entrez un nom complet pour votre instance. La référence commerciale du modèle d'instance est la valeur par défaut. Si nécessaire, vous pouvez également ajouter la région et la date pour faciliter l’identification et la gestion de vos instances.

#### Étape 4.2 : Sélectionnez une localisation

Sélectionnez une [localisation](/links/public-cloud/regions-pci) la plus proche de vos utilisateurs ou clients. Notez que si vous sélectionnez une **Local Zone** à cette étape, des limitations de réseau s'appliqueront à l'instance (voir [Étape 3](#networking-modes)).

Reportez-vous également aux informations de notre [page web sur les Local Zones](/links/public-cloud/local-zones) et de la [documentation des capacités des Local Zones](/pages/public_cloud/compute/local-zones-capabilities-limitations).

Le choix de la région détermine le mode de déploiement de votre instance (1-AZ, 3-AZ ou Local Zones). Pour comprendre les différences en termes de résilience, de disponibilité et d’architecture, consultez notre guide [Comparaison et résilience des modes de déploiement – Comprendre les régions 3-AZ / 1-AZ / Local Zones](/pages/public_cloud/public_cloud_cross_functional/deployment_modes_comparison_resilience_details).

#### Étape 4.3 : Sélectionnez un modèle

À cette étape, vous choisissez le modèle d’instance (également appelé flavour), qui détermine les ressources allouées à votre instance : processeur, mémoire et capacités associées. Ouvrez la liste déroulante `Modèle de l'instance`, puis sélectionnez le type de modèle le plus adapté à votre cas d’usage afin d’accéder à notre gamme d’instances optimisées.

Le type de modèle `Discovery` regroupe des instances à ressources partagées, proposées à des tarifs compétitifs. Elles sont particulièrement adaptées pour découvrir le Public Cloud OVHcloud, réaliser des tests, ou héberger des charges de travail légères comme des applications web.

Les modèles `Metal Instances` offrent quant à eux des ressources physiques entièrement dédiées, garantissant des performances constantes et une isolation maximale pour les workloads les plus exigeants.

> [!primary]
>
> Le total de vos ressources Public Cloud sera initialement limité pour des raisons de contrôle des coûts et de sécurité. Vous pouvez vérifier ces quotas en cliquant sur `Quota & Régions`{.action} dans la barre de navigation de gauche sous **Paramètres**. Consultez [la documentation dédiée](/pages/public_cloud/public_cloud_cross_functional/increasing_public_cloud_quota) pour plus d'informations.
>
> Notez que vous pouvez **mettre à niveau** votre instance après sa création pour avoir plus de ressources disponibles. Le passage à un modèle plus petit n'est cependant pas possible avec une instance régulière. Vous trouverez plus d'informations sur ce sujet à l'**étape 4.9** ci-dessous.
>

##### Informations complémentaires

/// details | Catégories de modèles d'instance

| Type | Ressources garanties | Notes d'utilisation |
| :---         |     :---:      |          :--- |
| Best Sellers   | ✓     | Modèles les plus utilisés.    |
| General Purpose   | ✓     | Serveurs de développement, applications web ou métier    |
| Compute Optimized     | ✓       | Encodage vidéo ou autre calcul haute performance      |
| Memory Optimized    | ✓     | Bases de données, analyses et calculs en mémoire    |
| Storage Optimized   | ✓     | Optimisé pour le transfert de données sur disque    |
| Discovery    | -       | Hébergement sur ressources partagées pour les environnements de test et de développement      |
| Cloud GPU     | ✓       | Puissance de traitement massivement parallèle pour les applications spécialisées (rendu, big data, deep learning, etc.)       |
| Metal Instances | ✓ | Ressources dédiées avec accès direct aux ressources de calcul, de stockage et de réseau|

///

/// details | Régions et Local Zones

**Régions**

Une **région** est définie comme un emplacement dans le monde composé d'un ou plusieurs datacenters où les services OVHcloud sont hébergés. Vous pouvez trouver plus d'informations sur les régions, la répartition géographique et la disponibilité des services sur notre [page web dédiée](/links/public-cloud/regions-pci) et notre [page web sur les localisations des infrastructures OVHcloud](/links/infrareg).

**Local Zones**

Les Local Zones sont une extension des **régions** qui rapprochent les services OVHcloud de sites spécifiques, offrant une latence réduite et des performances améliorées pour les applications. Vous pouvez trouver plus d'informations sur la [page web des Local Zones](/links/public-cloud/local-zones) et dans la [documentation des capacités des Local Zones](/pages/public_cloud/compute/local-zones-capabilities-limitations).

///

#### Étape 4.4 : Sélectionnez une image

Ouvrez la liste déroulante `Type de distribution`, sélectionnez la catégorie correspondant à votre besoin, puis choisissez le système d’exploitation à déployer sur votre instance à l’aide du menu déroulant `Version de l'image`.

Les images disponibles à cette étape dépendent des choix opérés lors des étapes précédentes, c'est-à-dire de la compatibilité avec le modèle d'instance et de la disponibilité régionale. Par exemple, si vous souhaitez sélectionner un système d'exploitation Windows et qu'il n'y a pas d'options dans l'onglet Windows, vous devez modifier vos choix des étapes précédentes.

> [!primary]
>
> Si vous choisissez un système d'exploitation nécessitant une licence payante, ces coûts seront automatiquement inclus dans la facturation du projet.
>

#### Étape 4.5 : Sélectionnez une clé SSH (non applicable aux instances Windows)

À l'exception des instances Windows, la configuration de votre instance nécessite également **l'ajout d'une clé SSH publique**. Vous avez deux options :

- Utiliser une clé publique déjà stockée dans l'espace client OVHcloud
- Saisir directement une clé publique

Cliquez sur les onglets ci-dessous pour afficher leur présentation :

> [!tabs]
> **Utiliser une clé stockée**
>>
>> Pour ajouter une clé stockée dans votre espace client OVHcloud (voir [Étape 2](#etape-2-importer-les-cles-ssh)), sélectionnez-la dans la liste.
>>
> **Saisir directement une clé**
>>
>> Pour ajouter une clé publique en collant la chaîne de clé, cliquez sur le bouton `Créer une nouvelle clé SSH`{.action}.
>>
>> Entrez un nom pour la clé et la chaîne de clé dans les champs respectifs. Cliquez ensuite sur `Valider la clé`{.action}.
>>


#### Étape 4.6 : Configurez les paramètres de sauvegarde

[Les sauvegardes automatisées](/pages/public_cloud/compute/save_an_instance) sont activées par défaut. Consultez les informations tarifaires et les détails complémentaires avant de poursuivre.

Ensuite, sélectionnez le type de rotation, c’est-à-dire le nombre maximum de sauvegardes conservées en historique : 7 ou 14 jours.

#### Étape 4.7 : Configurez le réseau

Dans cette étape, vous allez configurer le réseau de votre instance.

**Réseau privé**

Vous pouvez connecter votre instance à un [réseau privé](#networking-modes) et lui attribuer une [Floating IP](/links/public-cloud/floating-ip).

En cliquant sur `Créer un réseau privé`{.action}, vous pouvez en créer un directement :

- Nommer le réseau
- **Choisir le VLAN ID:** identifiant permettant d’interconnecter plusieurs services et ressources au sein d’un même réseau privé, via un numéro de segmentation réseau commun
- **Définir le CIDR:** plage d’adresses IP du réseau
- **Activer le DHCP en cochant la case correspondante, si nécessaire:** activez cette option si vous souhaitez une attribution automatique des adresses IP

> [!primary]
>
> L’instance peut rester entièrement privée si vous ne lui attribuez pas d’IP publique.
>

**Gateway**

Vous pouvez activer l’option pour attribuer une gateway à votre réseau. Par défaut, la gateway est de taille S, mais vous pourrez ajuster sa taille ultérieurement dans les paramètres.

**Attribuer une connectivité publique**

Vous pouvez activer ou désactiver cette fonctionnalité selon vos besoins. Si vous choisissez de l’activer, deux options s’offrent à vous :

- **Basic Public IP :** une adresse IP publique temporaire, qui ne persiste pas au-delà de la durée de vie de l’instance. Notez que l’utilisation d’une Basic Public IP n’est pas compatible avec une gateway.
- **Floating IP :** vous pouvez créer une nouvelle Floating IP ou réutiliser une adresse existante, permettant une IP publique persistante et détachable de l’instance.

#### Étape 4.8 : Sélectionnez une période de facturation

> [!primary]
>
> Veuillez noter que, selon le modèle d’instance choisi, la facturation **horaire** peut être la seule sélection affichée. Il s’agit d’une limitation temporaire, de nouvelles options de facturation de Public Cloud seront bientôt disponibles.
>

> [!tabs]
> **Facturation mensuelle**
>>
>> La facturation mensuelle entraînera une baisse des coûts au fil du temps, mais **ne peut pas être changée** en facturation à l'heure une fois l'instance créée.
>>
> **Facturation à l’heure**
>>
>> La facturation à l'heure est le meilleur choix si vous n'avez pas clairement déterminé la durée de la période d'utilisation. Si vous décidez de conserver l’instance pour une utilisation à long terme, vous pouvez toujours [passer à un abonnement mensuel](/pages/account_and_service_management/managing_billing_payments_and_services/changing_hourly_monthly_billing).
>>
>> L'instance sera facturée tant qu'elle n'est **pas supprimée**, quelle que soit l'utilisation réelle de l'instance.
>>

Voici notre documentation de facturation dédiée :

- [Facturation du Public Cloud](/pages/public_cloud/public_cloud_cross_functional/analyze_billing)
- [FAQ sur la facturation mensuelle](/pages/public_cloud/compute/faq_change_of_monthly_billing_method)

Une fois la configuration de votre instance terminée, vous pouvez choisir de cliquer sur le bouton `Lancer mon instance`{.action} ou de configurer les paramètres avancés (voir ci-dessous). La livraison de votre service peut prendre quelques minutes.

#### Étape 4.9 : Configurez les paramètres avancés

##### Instance flexible

Une instance Flex est une instance à disque unique de 50 Go, conçue pour offrir un processus de création et de restauration de snapshots plus rapide.

Elle permet de redimensionner l’instance vers des modèles supérieurs ou inférieurs, tout en conservant un espace de stockage fixe. Les modèles classiques autorisent uniquement un redimensionnement vers des modèles supérieurs.

##### Script de post-installation

Vous pouvez ajouter [votre script de post-installation](/pages/public_cloud/compute/launching_script_when_creating_instance) dans ce champ.

#### Étape 4.10 : Finalisation de votre instance

Sur le côté droit de votre écran, se trouve le récapitulatif de votre configuration. Dans cette section, vous pourrez configurer le nombre d’instances à créer. Vous pouvez créer plusieurs instances en fonction des sélections effectuées lors des étapes de création, mais [les limites de quota de ressources](/pages/public_cloud/public_cloud_cross_functional/increasing_public_cloud_quota) s’appliqueront.

Une fois la configuration de votre instance terminée, cliquez sur le bouton `Lancer mon instance`{.action}. La livraison de votre service peut prendre quelques minutes.

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

Sélectionnez `Instances`{.action} dans la barre de navigation de gauche sous **Compute**. Votre instance est prête lorsque l'état est défini sur `Activé` dans le tableau. Si l'instance a été créée récemment et a un statut différent, cliquez sur le bouton « Actualiser » situé à côté du filtre de recherche.

![page instances](images/24-instance-connect01.png){.thumbnail}

Cliquez sur le nom de l'instance dans ce tableau pour ouvrir le `Tableau de bord`{.action} sur lequel vous pouvez trouver toutes les informations concernant l'instance. Pour en savoir plus sur les fonctions disponibles sur cette page, consultez notre guide sur [la gestion des instances dans l’espace client](/pages/public_cloud/compute/first_steps_with_public_cloud_instance).

Un **utilisateur avec des droits élevés (*sudo*) est automatiquement créé** sur l'instance. Le nom d'utilisateur reflète l'image installée, par exemple « ubuntu », « debian », « fedora », etc. Vous pouvez le vérifier sur le côté droit du `Tableau de bord`{.action} dans la section **Réseaux**.

![page instances](images/24-instance-connect02.png){.thumbnail}

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
> Si vous recevez des messages d’erreur concernant vos **clés SSH**, vérifiez que votre appareil local dispose d’une clé SSH privée correctement configurée en utilisant les informations de [ce guide](/pages/public_cloud/compute/creating-ssh-keys-pci#create-ssh-key).<br>
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

[En fonction de votre configuration](#etape-1-creer-un-jeu-de-cles-ssh), vous devrez entrer une phrase secrète qui protège votre clé privée ou spécifier le chemin d'accès à votre fichier de clé. Consultez notre [guide des clés SSH](/pages/public_cloud/compute/creating-ssh-keys-pci#multiplekeys) pour des informations détaillées sur ce sujet.

Si vous utilisez un autre logiciel client SSH, reportez-vous à sa documentation utilisateur. Un exemple d'utilisation de la solution open source `PuTTY` est disponible dans [ce guide](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows).

Poursuivez à l'[étape 6 ci-dessous](#etape-6-premiers-pas-sur-une-nouvelle-instance).

#### 5.3 : instances Windows

##### 5.3.1 : Terminer l'installation d'une instance Windows

Après avoir vérifié que l'instance Windows est [installée](#51-verifier-letat-de-linstance-dans-lespace-client), ouvrez l'onglet `Console VNC`{.action} dans votre [espace client OVHcloud](/links/manager).

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

##### 5.3.2 : Connectez-vous à distance depuis Windows

Sur votre poste Windows local, vous pouvez utiliser l'application cliente `Remote Desktop Connection` pour vous connecter à votre instance.

![rdp connection](/pages/assets/screens/other/windows/windows_rdp.png){.thumbnail}

Renseignez l'adresse IPv4 de votre instance, puis votre identifiant et votre passphrase. Généralement, un message d'avertissement apparaît, vous demandant de confirmer la connexion en raison d'un certificat inconnu. Cliquez sur `Oui`{.action} pour vous connecter.

> [!primary]
>
> Si vous rencontrez des difficultés avec cette procédure, vérifiez que les connexions à distance (RDP) sont autorisées sur votre appareil en vérifiant les paramètres système, les règles de pare-feu et les restrictions réseau possibles.
>

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

#### 5.4 : accès console VNC

La console VNC vous permet de vous connecter à vos instances même lorsque d'autres moyens d'accès ne sont pas disponibles.

Sélectionnez `Instances`{.action} dans la barre de navigation de gauche sous **Compute**. Cliquez sur le nom de l'instance et ouvrez l'onglet `Console VNC`{.action}.

![console vnc](/pages/assets/screens/control_panel/product-selection/public-cloud/cp-pci-vnc-login.png){.thumbnail}

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
> Aucune étape supplémentaire n’est requise pour les instances sur lesquelles un système d’exploitation Windows est installé.
>
> Retrouvez plus d’informations dans la section [Aller plus loin](#aller-plus-loin) ci-dessous.
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

[Gestion des instances dans l’espace client](/pages/public_cloud/compute/first_steps_with_public_cloud_instance)

[Comment démarrer avec OpenStack](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api)

[Comment démarrer avec Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
