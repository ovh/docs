---
title: Comment déployer et vérifier un OpenNebula Hosted Cloud sur des serveurs Bare Metal
excerpt: Déployez un OpenNebula Hosted Cloud certifié en utilisant des serveurs Bare Metal OVHcloud et des playbooks Ansible
updated: 2025-12-09
---

## Introduction

OpenNebula est une puissante plateforme open source de **gestion de cloud** (CMP) conçue pour gérer et provisionner une infrastructure virtualisée.

En tant qu'orchestrateur, elle transforme une infrastructure physique en un cloud managé **Infrastructure as a Service** (IaaS), accessible via une interface de contrôle unifiée. Elle prend en charge les principaux hyperviseurs et permet des déploiements hybrides en s'intégrant aux fournisseurs Public Cloud, tels qu'OVHcloud.

Le déploiement d'OpenNebula sur l'infrastructure OVHcloud est validé dans le cadre du **programme de certification OpenNebula Cloud-Ready**.

Pour simplifier ce processus, OpenNebula fournit un ensemble de **playbooks Ansible** appelés [Hosted Cloud OVHcloud](https://github.com/OpenNebula/hosted-cloud-ovhcloud) pour le déploiement et la vérification automatisés. **Ces playbooks seront utilisés tout au long de ce guide**.

## Objectif

Ce guide détaille le processus complet de création d'un Cloud Hébergé OpenNebula sur OVHcloud, s'appuyant sur une architecture dédiée respectant les spécifications matérielles requises.

En suivant ce guide, vous serez en mesure de :

- Commander les ressources nécessaires via votre compte OVHcloud.
- Préparer le projet de déploiement Ansible avec la configuration requise.
- Déployer OpenNebula sur ces ressources.
- Vérifier le fonctionnement avec une procédure de vérification automatisée.

## Prérequis

- **Deux** [serveurs dédiés](/links/bare-metal/bare-metal) des gammes Scale ou High Grade
- Un service [vRack](/links/network/vrack) actif
- Un bloc public d'adresses [Additional IP](/links/network/additional-ip), dimensionné selon vos besoins
- Un accès à [l'espace client OVHcloud](/links/manager)

> [!primary]
>
> Le déploiement OpenNebula de référence utilise la configuration suivante :
> 
> | Spécifications matérielles | |
> |:---|:---|
> | Processeur | AMD EPYC GENOA 9124 - 16 cœurs / 32 threads - 3GHz/3,6GHz |
> | Mémoire | 128 Go DDR5 ECC 4800 MHz |
> | Stockage | 2 x SSD NVMe 960 Go Datacenter Class Soft RAID |
> | Bande passante publique | 2 adaptateurs, 5 Gbit/s non facturés et garantis |
> | Bande passante privée | 2 adaptateurs, 50 Gbit/s non facturés et garantis |
> 
> | Spécifications logicielles | |
> |:---|:---|
> | Version d'OpenNebula | 7.0 |
> | Nombre de nœuds frontend | 1 |
> | Configuration du nœud frontend | Ubuntu 24.04 LTS |
> | Nombre de nœuds de virtualisation | 2 (Le premier nœud héberge également l'application frontend) |
> | Configuration du nœud de virtualisation | Ubuntu 24.04 LTS - Hyperviseur KVM |
> 
> Les serveurs de la [gamme Scale](/links/bare-metal/scale) sont adaptés aux environnements de cloud de petite à moyenne taille.
> 
> Les serveurs de la [gamme High Grade](/links/bare-metal/hg) sont plus appropriés pour les charges de travail de production lourdes.
> 
> Pour plus d'informations sur l'évolutivité, veuillez consulter le [guide OpenNebula sur les tests d'évolutivité et l'optimisation](https://docs.opennebula.io/7.0/product/control_plane_configuration/large-scale_deployment/scalability/).

## En pratique

### Étape 1 - Configuration de votre infrastructure OVHcloud <a name="infrastructure_provisioning"></a>

Tout d'abord, vous devez installer Ubuntu 24.04 LTS sur vos deux serveurs dédiés, en suivant les instructions de [ce guide](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server).

Ensuite, ajoutez les deux serveurs à votre service vRack en suivant l'étape 2 de [ce guide de configuration vRack](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server).

Enfin, depuis l'espace client OVHcloud, ouvrez la section `Réseau`{.action}, puis sélectionnez `Adresses IP publiques`{.action} sous **Réseau public**. Une fois que vous avez atteint l'interface de gestion des IP, cliquez sur le bouton `Commander des IPs`{.action} en haut de la page. Choisissez la version d'IP, puis **sélectionnez le vRack auquel vos serveurs sont connectés**, et la région dans laquelle ces serveurs sont hébergés.

> [!warning]
> 
> **Important :** Afin d'assurer le bon fonctionnement, veuillez vous assurer que le bloc d'IP commandé est **routé vers le vRack** auquel les serveurs sont connectés, et non utilisé comme configuration classique de basculement.
> 
> Si vous avez des doutes ou besoin d'informations supplémentaires, veuillez consulter le guide suivant : [Configuration d'un bloc d'IP supplémentaire dans un vRack](/pages/bare_metal_cloud/dedicated_servers/configuring-an-ip-block-in-a-vrack/).
>

### Étape 2 - Collecte des paramètres Bare Metal et Réseau

Avant de commencer le déploiement OpenNebula, recueillez tous les paramètres nécessaires pour le processus d'automatisation. **Mettez à jour les valeurs de l'inventaire** dans le [dépôt Hosted Cloud OVHcloud](https://github.com/OpenNebula/hosted-cloud-ovhcloud) avec ces paramètres pour correspondre à l'infrastructure déployée.

Pour plus de détails sur la procédure de déploiement automatisé, veuillez consulter la section suivante : [Configurer et déployer le dépôt Hosted Cloud OVHcloud](#initial_setup)

Chaque serveur est équipé de deux adaptateurs réseau dédiés à la connectivité publique et de deux adaptateurs pour la connectivité privée. Les deux interfaces dans chaque segment seront **agrégées** en utilisant les **paramètres LACP par défaut pour les serveurs Scale et High Grade**.

Le **lien (*bond*) réseau public** est exclusivement utilisé pour la gestion du service OpenNebula, y compris le déploiement du cluster, l'administration via l'interface Web Sunstone ou l'interface en ligne de commande OpenNebula, et la connectivité entre le Front-end et les hôtes de virtualisation.

Le **lien (*bond*) réseau privé** fournit un réseau aux serveurs virtuels, en exploitant le vRack OVHcloud. Ce lien prend en charge le réseau privé, segmenté via les VLAN 802.1Q, et permet l'adressage public des serveurs virtuels. Pour attribuer des adresses publiques aux serveurs virtuels, une plage d'IP dédiée doit être achetée et routée via le vRack. Cette configuration assure l'isolation du trafic de gestion du cluster par rapport au réseau des machines virtuelles.

![Network](images/opennebula_network.png){.thumbnail}

> [!warning]
> Ce guide suppose la configuration par défaut de l'agrégation. Si vous modifiez le mode réseau (par exemple OLA), veuillez vérifier à nouveau que vos noms d'interfaces et liens sont corrects avant d'exécuter les playbooks.
> 
> Pour plus d'informations sur les paramètres d'agrégation de liens, veuillez consulter le guide suivant : [Améliorer la résilience réseau sur les serveurs Bare Metal](/pages/bare_metal_cloud/dedicated_servers/lacp-resilience-scale-hg/).
>

#### Paramètres réseau Bare Metal <a name="bare_metal_network_settings"></a>

Depuis votre espace client OVHcloud, accédez à `Bare Metal Cloud`{.action}, puis sélectionnez `Serveurs dédiés`{.action}. Ouvrez les pages de gestion des deux serveurs dédiés et recueillez les paramètres mis en évidence :

![page d'administration des serveurs dédiés](images/bare_metal_network.png){.thumbnail}

| Description                              | Noms de variables                                           | Commentaire                                                |
|------------------------------------------|----------------------------------------------------------|--------------------------------------------------------|
| IP de l'hôte Frontend/KVM                  | `ansible_host`                                           | Adresse IP public_aggregation                          |
| Adresses MAC des interfaces réseau publiques de l'hôte Frontend/KVM | `public_nics.macaddress`                                 | Adresses MAC public_aggregation                 |
| Adresses MAC des interfaces réseau privées de l'hôte Frontend/KVM | `private_nics.macaddress`                                | Adresses MAC private_aggregation                  |

Pour recueillir les noms des adaptateurs réseau, connectez-vous à votre serveur dédié et exécutez la commande `ip address` :

![ip address des serveurs dédiés](images/bare_metal_ip_address.png){.thumbnail}

| Description                              | Noms de variables                                                | Commentaire                                                |
|------------------------------------------|---------------------------------------------------------------|--------------------------------------------------------|
| Noms des interfaces réseau publiques de l'hôte Frontend/KVM       | `public_nics.name`                                            | Noms des adaptateurs réseau public_aggregation               |
| Noms des interfaces réseau privées de l'hôte Frontend/KVM      | `private_nics.name`                                           | Noms des adaptateurs réseau private_aggregation              |

#### Paramètres réseau vRack

**Adresses IP publiques**

Le bloc d'adresses IP publiques commandé à l'étape précédente permet d'attacher une connectivité publique directe aux serveurs virtuels. Pour un bloc d'adresses IP publiques déployé sur un vRack, la première, l'avant-dernière et la dernière adresse d'un bloc d'adresses IP sont toujours réservées respectivement pour l'adresse réseau, la passerelle (*gateway*) et la diffusion (*broadcast*).

Cela signifie que la première adresse utilisable est la deuxième adresse du bloc, comme indiqué ci-dessous :

```bash
46.105.135.96   Réservée : Adresse réseau
46.105.135.97   Première adresse utilisable
46.105.135.98
46.105.135.99
46.105.135.100
46.105.135.101
46.105.135.102
46.105.135.103
46.105.135.104
46.105.135.105
46.105.135.106
46.105.135.107
46.105.135.108
46.105.135.109  Dernière adresse utilisable
46.105.135.110  Réservée : Passerelle (gateway)
46.105.135.111  Réservée : Diffusion (broadcast)
```

Configurez un réseau en mode bridge pour les adresses IP publiques en utilisant toutes les adresses utilisables de votre plage d'IP :

| Description                              | Noms de variables                                                | Fichiers/Emplacement                                         |
|------------------------------------------|---------------------------------------------------------------|--------------------------------------------------------|
| Plage d'IP publique des VMs, première IP            | `vn.vm_public.template.AR.IP`                                 | Deuxième IP de la plage : 46.105.135.97 dans l'exemple |
| Plage d'IP publique des VMs, nombre d'adresses utilisables                      |   `vn.vm_public.template.AR.SIZE` |  Nombre d'adresses utilisables, taille de la plage moins trois adresses : 13 dans l'exemple     |
| DNS des VMs publiques                           | `vn.vm_public.template.DNS`                                   | 213.186.33.99 : DNS OVHcloud   |
| Masque réseau des VMs publiques                  | `vn.vm_public.template.NETWORK_MASK`                          | Masque réseau de la plage d'IP : 255.255.255.240 pour un réseau /28 dans l'exemple   |
| Passerelle des VMs publiques                       | `vn.vm_public.template.GATEWAY`                               | Avant-dernière IP de la plage, Passerelle réseau : 46.105.135.110 dans l'exemple  |

**Adresses IP privées**

Sur le lien réseau privé, déployez un réseau virtuel 802.1Q par réseau privé. Pour chaque réseau virtuel, créez une section dans le fichier d'inventaire Ansible, et déclarez le VLAN_ID, la plage d'IP et le masque réseau.

| Description                              | Noms de variables                                                | Fichiers/Emplacement                                         |
|------------------------------------------|---------------------------------------------------------------|--------------------------------------------------------|
| VLAN_ID des VMs privées                      | `vn.vm_vlan*.template.VLAN_ID`                                | VLAN_ID, entre 1 et 4096                            |
| Plage d'IP privée des VMs, première IP           | `vn.vm_vlan*.template.AR.IP`                                  | Première IP, par exemple 10.1.10.100              |
| Plage d'IP privée des VMs, nombre d'adresses utilisables                    | `vn.vm_vlan*.template.AR.SIZE`  | Nombre d'adresses utilisables, par exemple 50 pour la plage d'IP 10.1.10.100-10.1.10.149   |
| Masque réseau des VMs privées                 | `vn.vm_vlan*.template.NETWORK_MASK`                           | Masque réseau de la plage d'IP : 255.255.255.0 pour un réseau /24 par exemple   |

### Étape 3 - Configurer et déployer le dépôt Hosted Cloud OVHcloud <a name="initial_setup"></a>

Le déploiement utilise le **dépôt Hosted Cloud OVHcloud d'OpenNebula**.

Les étapes de déploiement à haut niveau sont les suivantes :

1. **Cloner** le dépôt de déploiement.
2. **Installer** les dépendances listées dans la [section Requirements](https://github.com/OpenNebula/hosted-cloud-ovhcloud?tab=readme-ov-file#requirements).
3. **Mettre à jour** les paramètres d'inventaire dans le dépôt avec la configuration recueillie ci-dessus.
4. **Exécuter les commandes de déploiement** :
    - `make pre-tasks-ovhcloud` : Corriger le noyau Ubuntu et effectuer la configuration réseau.
    - `make deployment` : Déployer OpenNebula.
    - `make validation` : Valider le déploiement automatisé.

### Étape 4 - Ajout de serveurs dédiés à une infrastructure OpenNebula active

Pour étendre le cloud avec de nouveaux serveurs :

1. **Provisionnez** le nouvel hôte comme indiqué dans la section [Configuration de votre infrastructure OVHcloud](#infrastructure_provisioning).
2. **Recueillez** les paramètres de configuration nécessaires, en particulier les paramètres réseau bare-metal.
3. **Réexécutez** les commandes de déploiement et de vérification depuis la section [Configurer et déployer le dépôt Hosted Cloud OVHcloud](#initial_setup).

### Étape 5 - Gérer votre infrastructure cloud

La section suivante explique comment accéder à un déploiement de cloud OpenNebula via l'interface web, et comment créer et accéder à une machine virtuelle.

Ce guide fournit les étapes de base. Si vous avez besoin d'un guide plus détaillé, veuillez consulter la [documentation publique OpenNebula](https://docs.opennebula.io/7.0/product/virtual_machines_operation/virtual_machines/).

### Créer un modèle à partir de la marketplace OpenNebula

Depuis la marketplace OpenNebula, recherchez et importez les modèles de serveurs virtuels nécessaires à votre infrastructure. L'exemple ci-dessous importe le modèle Debian 13 "Trixie".

![user guide template 1](images/user_guide_template_1.png){.thumbnail}

![user guide template 2](images/user_guide_template_2.png){.thumbnail}

### Démarrer un nouveau serveur virtuel

Sur la base du modèle importé, créez une nouvelle instance de serveur virtuel.

![user guide create vm 1](images/user_guide_create_vm_1.png){.thumbnail}

![user guide create vm 2](images/user_guide_create_vm_2.png){.thumbnail}

![user guide create vm 3](images/user_guide_create_vm_3.png){.thumbnail}

Vous pouvez ajuster la capacité de stockage, l'allocation CPU et RAM lors de cette phase de configuration.

![user guide create vm 4](images/user_guide_create_vm_4.png){.thumbnail}

![user guide create vm 5](images/user_guide_create_vm_5.png){.thumbnail}

![user guide create vm 6](images/user_guide_create_vm_6.png){.thumbnail}

Enfin, attachez les adaptateurs réseau. Dans cet exemple, nous attribuons une adresse IP publique à ce serveur, basée sur la plage d'adresses IP publiques créée lors du déploiement automatisé d'OpenNebula. Sans aucune modification, une adresse IP disponible dans la plage publique sera sélectionnée pour cette interface.

![user guide create vm 7](images/user_guide_create_vm_7.png){.thumbnail}

![user guide create vm 8](images/user_guide_create_vm_8.png){.thumbnail}

### Vérifier la connectivité

Vous pouvez utiliser la console du serveur virtuel pour vérifier le déploiement et la connectivité du serveur. Configurez le mot de passe root en utilisant les variables de contexte de la machine virtuelle.

![user guide check vm 1](images/user_guide_connectivity_1.png){.thumbnail}

![user guide check vm 2](images/user_guide_connectivity_2.png){.thumbnail}

Lancez la console de votre serveur virtuel pour valider le déploiement.

![user guide check vm 3](images/user_guide_connectivity_3.png){.thumbnail}

![user guide check vm 4](images/user_guide_connectivity_4.png){.thumbnail}

### Mettre à jour les paramètres des serveurs virtuels

Utilisez les paramètres du serveur virtuel pour mettre à jour la configuration du serveur. Cet exemple montre le branchement dynamique d'un adaptateur réseau privé sur le serveur virtuel.

![user guide hotplug 1](images/user_guide_hotplug_1.png){.thumbnail}

![user guide hotplug 2](images/user_guide_hotplug_2.png){.thumbnail}

![user guide hotplug 3](images/user_guide_hotplug_3.png){.thumbnail}

![user guide hotplug 4](images/user_guide_hotplug_4.png){.thumbnail}

### Supprimer le serveur virtuel

Enfin, en tant qu'étape de nettoyage, supprimez le serveur virtuel en cliquant sur l'icône rouge « Corbeille ».

![user guide terminate 1](images/user_guide_terminate_1.png){.thumbnail}

![user guide terminate 2](images/user_guide_terminate_2.png){.thumbnail}

## Aller plus loin

**Ressources externes :**

- Si vous avez besoin d'informations supplémentaires sur OpenNebula, vous pouvez consulter le [site web OpenNebula](https://opennebula.io/) ou la [documentation officielle OpenNebula](https://docs.opennebula.io/).
- Si vous avez besoin d'informations supplémentaires sur Ansible, vous pouvez consulter la [page Ansible sur le site RedHat](https://www.redhat.com/en/ansible-collaborative?) ou la [documentation officielle Ansible](https://docs.ansible.com/).
- Le dépôt de déploiement OpenNebula utilisé et référencé dans ce guide est [Hosted Cloud OVHcloud](https://github.com/OpenNebula/hosted-cloud-ovhcloud).

Si vous avez besoin de formation ou d'une assistance technique pour mettre en œuvre nos solutions, contactez votre représentant commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander l'assistance des experts de notre équipe Professional Services pour votre cas d'utilisation et projet spécifiques.

Rejoignez notre [communauté d'utilisateurs](/links/community).