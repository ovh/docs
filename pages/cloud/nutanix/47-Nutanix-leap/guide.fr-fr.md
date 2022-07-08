---
title: Réplication avancée avec LEAP
slug: leap-replication
excerpt: "Mise en place de réplications avancées avec LEAP"
section: Plan de reprise d'activité
order: 05
---

**Dernière mise à jour le 08/07/2022**

## Objectif

Mettre en place Nutanix LEAP pour effectuer des réplications et des plans de reprises d'activités évolués avec **Prism Central**

## Présentation

Nutanix LEAP permet :

- de faire des réplication asynchrones, nearsync et synchrone. 
- de tester les réplications.
- d'automatiser la bascule sur un autre site suite à un évenement.
- Avec Leap il est possible de faire une réplication dans le cloud de Nutanix avec la solution Xi-Leap mais cette option n'est pas possible avec les pack de licence OVHcloud.



> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>


## Prérequis

- Disposer de deux clusters Nutanix dans votre compte OVHcloud.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Être connecté à vos clusters via **Prism Central**.
- Avoir mis en place une interconnexion entre deux clusters, par exemple via un VPN IPsec. ou vRack si il faut une réplication synchrone.
- Nutanix Leap a besoin de plus de resources sur la ou les VM Prism central en fonction du mode
    + Single Mode : 4Go de RAM
    + Scale Mode avec 3 machines virtuelles **Prism Central** : 8 Go de RAM par machines virtuelles

## En pratique

Notre plan de reprise d'activité au travers de Nutanix Leap sera mis en place entre deux CLUSTER, l'un se trouvant au Canada et l'autre se trouvant en France. Les deux clusters sont réliés par un VPN voici le résumé de la configuration :

- Lan d'administration sur cluster en France 192.168.0.0/24
- Lan d'administration du cluster au Canada 192.168.10.0/24

- Lan commun au deux clusters contenant les machines virtuelles du plan de reprise d'activité 192.168.50.0/24

Toutes les opérations se feront au travers de **Prism Central**
 
### Mise en service de LEAP

#### Ajout d'une adresse IP en iSCSI sur chaque cluster 
Avant d'activer **LEAP** il est nécessaire de rajouter une addresse IP pour les connexions iSCSI sur chacun des clusters

Connectez-vous à **Prism Element** au travers de **Prism Central** du cluster en France, pour vous aider vous pouvez utiliser ce guide [Hyperconvergence Nutanix](https://docs.ovh.com/fr/nutanix/nutanix-hci/).

Au travers du tableau de bord de **Prism Element** en haut à gauche cliquez sur `Le nom du cluster`{.action}.

![00 Add iSCSI address in FRANCE01](images/00-isci-add-address-france-01.png){.thumbnail}

Saisissez une `adresse IP du réseau d'administration non utilisée` dans **iSCSI Data Service IP**  et cliquez sur `Save`{.action}.

![00 Add iSCSI address in FRANCE01](images/00-isci-add-address-france-02.png){.thumbnail}

Effectuez la même opération sur le cluster se trouvant au Canada

Dans le tableau de bord de **Prism Element** en haut à gauche cliquez sur `Le nom du cluster`{.action}.

![01 Add iSCSI address in CANADA01](images/01-isci-add-address-canada-01.png){.thumbnail}

Saisissez une `adresse IP du réseau d'administration non utilisée` dans **iSCSI Data Service IP**  et cliquez sur `Save`{.action}.

![01 Add iSCSI address in CANADA01](images/00-isci-add-address-canada-02.png){.thumbnail}

#### Activation de LEAP

Revenez sur l'interface **Prism Central** du cluster se trouvant en France

Au travers **Prism Central** allez dans le menu principal et sous la rubrique `Data Protection` cliquez sur `Recovery Plans`{.action}.

![Activate Recovery 01](images/02-activate-recovery01.png){.thumbnail}

Cliquez sur `Enable LEAP`{.action}.

![Activate Recovery 02](images/02-activate-recovery02.png){.thumbnail}

Si les `Prechecks` sont successful cliquez sur `Enable`{.action}.

![Activate Recovery 03](images/02-activate-recovery03.png){.thumbnail}

Allez maintenant sur l'interface **Prism Central** du Canada et faites la même opération

Cliquez sur `Recovery Plans`{.action}.

![Activate Recovery 01](images/02-activate-recovery01.png){.thumbnail}

Cliquez sur `Enable LEAP`{.action}.

![Activate Recovery 02](images/02-activate-recovery02.png){.thumbnail}

Si les `Prechecks` sont successful cliquez sur `Enable`{.action}.

![Activate Recovery 03](images/02-activate-recovery03.png){.thumbnail}

Nutanix Leap est activé sur les deux clusters , chaque cluster possède une *Availability Zone* il faut maintenant les connecter les deux clusters pour que chacun des deux clusters voient la *Availability Zone**.

### Connexion des deux clusters.

Restez sur **Prism Central** dans le cluster se trouvant au Canada.

Allez dans le menu principal, et sous la rubrique `Administration` cliquez sur `Availability Zones`{.action}.

![Connect clusters 01](images/03-connect-cluster01.png){.thumbnail}

cliquez sur `Connect to Availability Zone`{.action}.

![Connect clusters 01](images/03-connect-cluster02.png){.thumbnail}

Saisissez ces informations :

- **Availability Zone Type** : `Physical Location`
- **IP Address for Remote PC** : `Adresse IP Prism Central distant`
- **Username** : `Compte administrateur du Prism Central distant`
- **Password** : `Mot de passe du compte Prism Central distant`

Ensuite cliquez sur `Connect`{.action}.

![Connect clusters 01](images/03-connect-cluster03.png){.thumbnail}

Le cluster distant apparait avec son adresse IP, ici celle de l'adresse de **Prism Central** en France.

![Connect clusters 02](images/03-connect-cluster04.png){.thumbnail}

Connectez vous au cluster en France avec **Prism Central** sur la même rubrique  `Availability Zones` vous allez constatez que le cluster distant au Canada aussi apparait. Les deux sites sont connectés.

![Connect clusters 03](images/03-connect-cluster05.png){.thumbnail}

### Mise en place d'une réplication du site au Canade vers la France.

> [!warning]
> Il est impossible d'avoir des machines virtuelles qui utilisent **Domain Protection** à partir de **Prism Element** si l'on veut utiliser **Nutanix Leap** , il faudra s'assurer que les machines virtuells ne fassent plus partie du **Domain Protection**.
>

#### Création d'un catégorie contenant les machines virtuelles à répliquer

Au travers du `menu principal` allez sur `Availability Zones`{.action} des options `administration`.

![Create CATEGORIE 01](images/04-create-category01.png){.thumbnail}

Cliquez sur `New Category`{.action}

![Create CATEGORIE 02](images/04-create-category02.png){.thumbnail}

Saisissez ces informations :

- **Name** : `replicated-vm`
- **values** : `from-canada`

Ensuite cliquez sur `Save`{.action}.

![Create CATEGORIE 03](images/04-create-category04.png){.thumbnail}

Revenez dans le menu principal sélectionnez `VMs`{.action} dns la catégorie `Compute et Storage`

![Create CATEGORIE 04](images/04-create-category04.png){.thumbnail}

Sélectionnez la machine virtuelle à répliquer avec la `case à cocher`{.action} à gauche de la machine virtuelle et cliquez sur `Actions`{.action} pour faire apparaitre un menu.

![Create CATEGORIE 05](images/04-create-category05.png){.thumbnail}

Au travers du menu cliquez sur `Manage Categories`{.action} 

![Create CATEGORIE 06](images/04-create-category06.png){.thumbnail}

Sélectionnez la catégorie créé et cliquez sur le bouton `+`{.action} de couleur bleu.

![Create CATEGORIE 07](images/04-create-category07.png){.thumbnail}

cliquez sur  `Save`{.action}

![Create CATEGORIE 08](images/04-create-category08.png){.thumbnail}

#### Création de la stratégie de protection

Un stratégie de protection est une connexion entre deux *Availability zones* avec un planning de réplication qui autorise tous les types de synchronisations:

- asynchrone toutes les heures
- nearsync entre 1 & 15 minutes
- synchrone avec un délai de 0 secondes (Ce mode necessite une latence de 5Ms entre les deux clusters)

Au travers du menu principal choisissez `Protection Policies`{.action} dans le sous menu `Data Protection`.

![Create Protection policy 01](images/05-create-protection-policy01.png){.thumbnail}

Cliquez sur `Create Protection Policy`{.action} 

![Create Protection policy 02](images/05-create-protection-policy02.png){.thumbnail}

- **Policy name** : `nom de la stratégie`
- **Location** : `Local AZ` pour choisir la zone contenant le cluster local
- **Cluster** : `Cluster contenant les machines virtuelles à répliquer`

Cliquez sur `Save`{.action}

![Create Protection policy 03](images/05-create-protection-policy03.png){.thumbnail}

Dans recovery location choisissez ces options :

- **Location** : `PC_192.168.0.222` qui correspond à zone contenant le cluster distant
- **Cluster** : `Cluster de destination`

Cliquez sur `Save`{.action}.

![Create Protection policy 04](images/05-create-protection-policy04.png){.thumbnail}

Cliquez sur `Add schedule`{.action}.

![Create Protection policy 05](images/05-create-protection-policy05.png){.thumbnail}

Choisissez `Asynchronous dans`  **Protection Type**.

Modifiez ces options dans takes **Take Snapshot Every** par `Minutes : 15` pour faire une réplication *nearsync*.

Cochez la case `Take App-Consistent Snapshots` et cliquez sur `Save Schedule`{.action}.

![Create Protection policy 06](images/05-create-protection-policy06.png){.thumbnail}

Cliquez sur `Next`{.action}.

![Create Protection policy 07](images/05-create-protection-policy07.png){.thumbnail}

Cochez la `catégorie` et cliquez sur `Add`{.action}.

![Create Protection policy 08](images/05-create-protection-policy08.png){.thumbnail}

cliquez sur `Create`{.action}.

![Create Protection policy 09](images/05-create-protection-policy09.png){.thumbnail}

La stratégie de protection est activée et apparait dans le tableau de bord des **Protection Policies**

![Create Protection policy 10](images/05-create-protection-policy10.png){.thumbnail}

### Activation d'un plan  de reprise d'activité.

Un plan de reprise d'activité peut être manuel ou automatique en fonction du type de réplication choisi , il peut être executé en mode programmé avec les deux clusters disponibles ou en mode de desastre si le cluster d'origine n'est pas disponible. Il est aussi possible de faire un test sur le cluster distant sur un réseau isolé.

Dans le menu principal choisissez `Recovery Plans`{.action} qui se trouve dans la rubrique `Data Protection`

![Create Recovery Plan 01](images/06-create-recovery-plan01.png){.thumbnail}

Cliquez sur `Create New Recovery Plan`{.action} 

![Create Recovery Plan 02](images/06-create-recovery-plan02.png){.thumbnail}

Saisisissez ces valeurs : 

- **Recovery Plan Name** : `nom du plan de restauration`
- **Primary Location** : `Local AZ` pour choisir la zone contenant le cluster local.
- **Recovery Location** : `Nom de la Zone distante` qui servira pour le plan de reprise.

Ensuite cliquez sur `Next`{.action} 

![Create Recovery Plan 03](images/06-create-recovery-plan03.png){.thumbnail}

Cliquez sur `Add Entities`{.action} 

![Create Recovery Plan 04](images/06-create-recovery-plan04.png){.thumbnail}

Cochez la `case`{.action} à coté des machines virtuelles qui font partie du plan de reprise.

Ensuite cliquez sur `Add`{.action} 

![Create Recovery Plan 05](images/06-create-recovery-plan05.png){.thumbnail}

Cochez la `case`{.action} à coté des machines virtuelles qui doivent démarrer automatiquement lors de l'activation du plan de reprise.

Ensuite cliquez sur `Next`{.action} 

![Create Recovery Plan 06](images/06-create-recovery-plan06.png){.thumbnail}

Lors de la présentation du plan de reprise  cliquez sur `OK, Got it`{.action} 

![Create Recovery Plan 07](images/06-create-recovery-plan07.png){.thumbnail}

Sur le site primaire choisisissez ces options :

- **Production** : `VLAN de production`
- **Test Failback** : `VLAN de test` 

Sur le site de reprise choisisissez ces options :

- **Production** : `VLAN de production`
- **Test Failback** : `VLAN de test` 

Ensuite cliquez sur `Done`{.action} 

![Create Recovery Plan 08](images/06-create-recovery-plan08.png){.thumbnail}

Le plan de reprise apparait dans la liste, il pourra être utilisé.

![Create Recovery Plan 09](images/06-create-recovery-plan09.png){.thumbnail}

### Activation programmée d'un site

Connectez-vous avec **Prism Central sur le cluster en FRANCE pour basculer la machine virtuelle du CANADA vers la FRANCE






## Aller plus loin

[Documentation Nutanix LEAP](https://portal.nutanix.com/page/documents/details?targetId=Leap-Xi-Leap-Admin-Guide-v6_1:Leap-Xi-Leap-Admin-Guide-v6_1)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
