---
title: 'Gérer vos instances Public Cloud'
excerpt: 'Découvrez comment gérer vos instances Public Cloud dans l’espace client OVHcloud'
updated: 2026-02-24
---

## Objectif

Vous pouvez gérer vos instances Public Cloud dans votre [espace client OVHcloud](/links/manager).

**Ce guide détaille les actions disponibles dans l'espace client OVHcloud pour une instance Public Cloud.**

## Prérequis

- Un [projet Public Cloud](/links/public-cloud/public-cloud) dans votre compte OVHcloud
- Une [instance Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps) dans votre projet

<!-- CP-NAV-START:publiccloud-projects -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Projets Public Cloud](/links/control-panel/publiccloud-projects)
- **Pour accéder à vos services :** `Public Cloud`{.action} > Sélectionnez votre projet

---
<!-- CP-NAV-END:publiccloud-projects -->

## En pratique

### Utiliser l'interface de gestion des instances

Cliquez sur `Instances`{.action} dans le menu de gauche.

Cette page liste l'ensemble de vos instances Public Cloud et certaines de leurs propriétés :

- l'ID de l'instance, nécessaire pour certains appels API;
- la localisation du datacentre, c'est-à-dire la région de l'instance;
- le modèle de l'instance;
- l'image, c'est-à-dire l'OS installé sur l'instance;
- l'adresse IPv4 de l'instance;
- l'adresse privée actuellement attachée à l'instance;
- les volumes (disques) additionnels actuellement attachés à l'instance;
- le statut de l'instance, indiquant si elle est à l'état `Activé`.

### Options de gestion sur le tableau de bord de l'instance

Depuis la page de gestion des instances, cliquez sur le nom de l’instance concernée. 

Vous accédez alors à la page `Informations générales`, qui centralise les principaux détails et l’état de fonctionnement de votre instance (statut, ressources, réseau, accès, et métadonnées).

Certaines de ces opérations sont aussi accessibles depuis la page de gestion des instances, via le bouton `...`{.action} du tableau.

#### Éditer la configuration d'une instance

Cliquez sur `Modifier l’image`{.action} ou `Modifier le modèle`{.action}.

Vous pouvez également ouvrir `Actions supplémentaires`{.action}, puis sélectionner `Éditer`{.action}.

La nouvelle page présente une version modifiée des options [de création d'instance](/pages/public_cloud/compute/public-cloud-first-steps), dans laquelle vous pouvez modifier les éléments suivants :

- **Modifier le nom** : vous pouvez donner un nom à l'instance pour plus de facilité d'identification.
- **Modifier l’image** : vous pouvez choisir un autre système d'exploitation pour l'instance (notez que la réinstallation d'une instance supprimera toutes les données qu'elle contient).
- **Modifier le modèle** : vous pouvez changer de modèle d'instance. Consultez [ce guide](/pages/public_cloud/compute/public-cloud-first-steps#model) pour plus d'informations sur les options.
- **Modifier la période de facturation** : vous pouvez modifier la période de facturation de l'instance d'une facturation horaire à mensuelle. Consultez [ce guide](/pages/account_and_service_management/managing_billing_payments_and_services/changing_hourly_monthly_billing) pour plus d'informations.

#### Créer un backup d'une instance

Cliquez sur `Créer un backup`{.action}.

Reportez-vous au guide « [Sauvegarder une instance](/pages/public_cloud/compute/save_an_instance) » pour plus d'informations.

#### Supprimer une instance

Cliquez sur `Supprimer`{.action}.

Cette action supprimera définitivement l'instance et toutes ses données.

Confirmez la demande de suppression dans la fenêtre qui apparaît.

> [!warning]
> La suppression d'une instance ne supprime pas automatiquement toutes les options qui lui sont associées (storage, snapshot, backup, etc...), assurez-vous que toutes les autres options associées à l'instance sont également supprimées pour arrêter d'être facturé.
>

#### Attacher un volume

Cliquez sur `Attacher un volume`{.action}.

Sélectionnez ensuite le volume à associer à l’instance, puis cliquez sur `Confirmer`{.action}. Une fois attaché, le volume est immédiatement disponible et peut être monté depuis le système d’exploitation de l’instance.

#### Changer le reverse DNS

Cliquez sur `⋮`{.action} puis `Changer le reverse DNS`{.action}.

Reportez-vous au guide « [Configurer le reverse DNS d'une instance Public Cloud](/pages/public_cloud/compute/setup_instance_reverse) » pour plus d'informations.

#### Configurer le pare-feu

Cliquez sur `⋮`{.action} puis `Configurer le pare-feu`{.action}.

Reportez-vous au guide « [Activer et configurer le Edge Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network) » pour plus d'informations.

#### Gérer les réseaux privés

Cliquez sur `⋮`{.action} puis `Gérer les réseaux privés`{.action}.

Reportez-vous au guide « [Créer un réseau privé avec une Gateway](/pages/public_cloud/public_cloud_network_services/getting-started-02-create-private-network-gateway) » pour plus d'informations.

#### Attacher un réseau

Cliquez sur `⋮`{.action} puis `Attacher un réseau`{.action}.

Sélectionnez le réseau souhaité dans la liste déroulante, puis cliquez sur `Confirmer`{.action}.

#### Actions supplémentaires

Cliquez sur `Actions supplémentaires`{.action}

##### Créer un backup automatique d'une instance

Cliquez sur `Créer une sauvegarde automatisée`{.action}.

Reportez-vous au guide « [Sauvegarder une instance](/pages/public_cloud/compute/save_an_instance#creer-une-sauvegarde-automatisee-dune-instance) » pour plus d'informations.

##### Arrêter une instance

Cliquez sur `Arrêter`{.action}.

Ceci mettra l'instance dans l'état `Éteinte`, mais vous serez toujours facturé au même prix pour votre instance. Référez-vous à notre guide « [Suspendre ou mettre en pause une instance](/pages/public_cloud/compute/suspend_or_pause_an_instance#arreter-suspend-une-instance) » pour plus d'informations.

Cliquez sur `Démarrer`{.action} pour réactiver l'instance.

##### Utiliser le mode rescue

Cliquez sur `Redémarrer en mode rescue`{.action}.

Cela activera le mode rescue de l'instance. Consultez notre guide [Comment activer le mode rescue sur une instance Public Cloud](/pages/public_cloud/compute/put_an_instance_in_rescue_mode) pour obtenir des informations détaillées.

##### Redémarrer une instance

> [!warning]
> L'option de redémarrage à chaud (soft) est actuellement indisponible pour les instances Metal.
>

- Cliquez sur `Redémarrer à chaud (soft)`{.action} pour effectuer un redémarrage au niveau logiciel.
- Cliquez sur `Redémarrer à froid (hard)`{.action} pour lancer un reboot au niveau matériel.

Confirmez la demande de redémarrage dans la fenêtre qui apparaît.

##### Suspendre (*shelve*) une instance

Cliquez sur `Suspendre`{.action}.

Ceci placera l'instance dans l'état « *shelved* », affiché ici comme `Suspendue`. Consultez notre guide « [Suspendre ou mettre en pause une instance](/pages/public_cloud/compute/suspend_or_pause_an_instance#suspendre-shelve-une-instance) » pour plus d'informations sur les différents états de suspension d'une instance.

Cliquez sur `Réactiver`{.action} pour restaurer l'état `Activé` de l'instance.

##### Réinstaller une instance

Cliquez sur `Réinstaller`{.action}.

Cette action réinstallera l'instance avec le même système d'exploitation, à condition que l'image soit toujours prise en charge.

Notez que la réinstallation **supprime toutes les données** actuellement stockées sur votre instance.


### Accéder à la console VNC <a name="accessvnc"></a>

Cliquez sur `Instances`{.action} dans le menu de gauche. Sur la page de gestion des instances, cliquez sur le nom de l'instance dans le tableau.

Cliquez alors sur l'onglet `Console VNC`{.action}.

![public-cloud](images/vnc1.png){.thumbnail}

La console VNC fournit un accès direct à votre instance. Pour que cet accès fonctionne, vous devez d'abord configurer un nom d'utilisateur et un mot de passe sur l'instance. 

Consultez notre guide « [Créer une première instance Public Cloud et s'y connecter](/pages/public_cloud/compute/public-cloud-first-steps#vnc-console) » pour plus d'informations.

## Aller plus loin

[Créer une première instance Public Cloud et s’y connecter](/pages/public_cloud/compute/public-cloud-first-steps)

[Présentation d'Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en œuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
