---
title: Réplication avancée avec LEAP
slug: leap-replication
excerpt: "Mise en place de réplications avancées avec LEAP"
section: Plan de reprise d'activité
order: 05
---

**Dernière mise à jour le 11/07/2022**

## Objectif

Mettre en place des réplication avancées avec Nutanix LEAP dans **Prism Central**

## Présentation

Nutanix LEAP permet :

- de faire des réplication asynchrones et synchrone en fonction du pack de licence choisi. 
- de tester les réplications.
- de faire des plan de reprises avancées avec démarrage de machine virtuelles et dans certains cas une automatisation de la bascule d'un cluster à l'autre (Uniquement avec une réplication synchrone et un témoin de cluster)
- La réplication peut se faire aussi sur des clusters stockées chez Nutanix avec la solution Xi-Leap qui n'est pas compris avec le pack de Licence OHVcloud.

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>


## Prérequis

- Disposer de deux clusters Nutanix dans votre compte OVHcloud.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Être connecté à vos clusters via **Prism Central**.
- Avoir mis en place une interconnexion entre deux clusters, par exemple via un VPN IPsec. ou vRack si il faut une réplication synchrone. Vous pouvez utiliser cette documentation pour vous aider à interconnecter deux clusters Nutanix en IPsec [Interconnexion IPsec entre deux sites](https://docs.ovh.com/fr/nutanix/ipsec-interconnection/)
- Nutanix Leap a besoin de plus de resources sur la ou les VM Prism central en fonction du mode
    + Single Mode : 4Go de RAM
    + Scale Mode avec 3 machines virtuelles **Prism Central** : 8 Go de RAM par machines virtuelles

## En pratique

Notre plan de reprise d'activité au travers de Nutanix Leap sera mis en place entre deux clusters, l'un se trouvant au Canada et l'autre se trouvant en France. Les deux clusters sont reliés par un VPN IPSec avec cette configuration réseau :

- Lan d'administration sur cluster en France : **192.168.0.0/24**.
- Lan d'administration du cluster au Canada **192.168.10.0/24**.

- Lan commun au deux clusters pour les machines virtuelles du plan de reprise d'activité **192.168.50.0/24**.

Toutes les opérations se feront au travers de **Prism Central**.
 
### Mise en service de LEAP

#### Ajout d'une adresse IP en iSCSI sur chaque cluster 
Avant d'activer **LEAP** il est nécessaire de rajouter une addresse IP pour les connexions iSCSI sur chacun des clusters.

Connectez-vous à **Prism Element** au travers de **Prism Central** du cluster en France, pour vous aider vous pouvez utiliser ce guide [Hyperconvergence Nutanix](https://docs.ovh.com/fr/nutanix/nutanix-hci/).

Au travers du tableau de bord de **Prism Element** en haut à gauche cliquez sur `Le nom du cluster`{.action}.

![00 Add iSCSI address in FRANCE01](images/00-isci-add-address-france-01.png){.thumbnail}

Saisissez une `adresse IP du réseau d'administration non utilisée` dans **iSCSI Data Service IP** et cliquez sur `Save`{.action}.

![00 Add iSCSI address in FRANCE01](images/00-isci-add-address-france-02.png){.thumbnail}

Allez sur le cluster se trouvant au CANADA avec **Prism Central** pour effectuer la même opération qu'en France.

Dans le tableau de bord de **Prism Element** en haut à gauche cliquez sur `Le nom du cluster`{.action}.

![01 Add iSCSI address in CANADA01](images/01-isci-add-address-canada-01.png){.thumbnail}

Saisissez une `adresse IP du réseau d'administration non utilisée` dans **iSCSI Data Service IP** ensuite cliquez sur `Save`{.action}.

![01 Add iSCSI address in CANADA01](images/00-isci-add-address-canada-02.png){.thumbnail}

#### Activation de LEAP

Revenez sur l'interface **Prism Central** du cluster se trouvant en France.

Depuis le menu principal, cliquez sur `Recovery Plans`{.action} dans le sous-menu `Data Protection`

![Activate Recovery 01](images/02-activate-recovery01.png){.thumbnail}

Cliquez sur `Enable LEAP`{.action}.

![Activate Recovery 02](images/02-activate-recovery02.png){.thumbnail}

Si sur l'écran apparait `Prechecks successful` Cliquez sur `Enable`{.action}.

![Activate Recovery 03](images/02-activate-recovery03.png){.thumbnail}

Revenez sur l'interface **Prism Central** du Canada et faites la même manipulation.

Cliquez sur `Recovery Plans`{.action}.

![Activate Recovery 01](images/02-activate-recovery01.png){.thumbnail}

Cliquez sur `Enable LEAP`{.action}.

![Activate Recovery 02](images/02-activate-recovery02.png){.thumbnail}

Si sur l'écran est affiché `Prechecks successful`, cliquez sur `Enable`{.action}.

![Activate Recovery 03](images/02-activate-recovery03.png){.thumbnail}

Chaque cluster a maintenant une **Availability zone**, il va être possible d'interconnecter ces deux clusters.

### Connexion des deux clusters.

Restez sur **Prism Central** dans le cluster se trouvant au Canada.

Depuis le menu principal, cliquez sur `Availability Zones`{.action} sous `Administration`.

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

Le cluster distant apparait avec comme nom l'adresse IP privée du **Prism Central** se trouvant en France précédé de **PC_**.

![Connect clusters 02](images/03-connect-cluster04.png){.thumbnail}

Connectez-vous au cluster en France avec **Prism Central** 

Depuis le menu principal, cliquez sur `Availability Zones`{.action} dans le sous-menu `Administration` pour constater que le site distant du Canada apparait avec l'adresse IP privée du **Prism Central** se trouvant au Canada précédé de **PC_**

![Connect clusters 03](images/03-connect-cluster05.png){.thumbnail}

### Mise en place d'une réplication à partir du Canada vers la France.

> [!warning]
> Les machines virtuelles qui seront protégées avec **Nutanix Leap** ne doivent pas être membre d'un **Domain Protection** créé à partir de **Prism Element**. Il existe une procédure sur le site de Nutanix pour éffectuer une migration. 
>

#### Création d'un catégorie contenant les machines virtuelles à répliquer

Depuis le `menu principal`, cliquez sur `Availability Zones`{.action} dans le sous menu `administration`.

![Create CATEGORIE 01](images/04-create-category01.png){.thumbnail}

Cliquez sur `New Category`{.action}

![Create CATEGORIE 02](images/04-create-category02.png){.thumbnail}

Saisissez ces informations :

- **Name** : `replicated-vm`
- **values** : `from-canada`

Ensuite cliquez sur `Save`{.action}.

![Create CATEGORIE 03](images/04-create-category04.png){.thumbnail}

Revenez dans le menu principal sélectionnez `VMs`{.action} sous `Compute et Storage`

![Create CATEGORIE 04](images/04-create-category04.png){.thumbnail}

Utilisez la  `case à cocher`{.action} à gauche de la machine virtuelle pour la séléctionner. 

Ensuite cliquez sur le menu `Actions`{.action}.

![Create CATEGORIE 05](images/04-create-category05.png){.thumbnail}

Dans le menu cliquez sur `Manage Categories`{.action} 

![Create CATEGORIE 06](images/04-create-category06.png){.thumbnail}

Sélectionnez la catégorie créée et cliquez sur le bouton `+`{.action} de couleur bleu.

![Create CATEGORIE 07](images/04-create-category07.png){.thumbnail}

cliquez sur `Save`{.action}

![Create CATEGORIE 08](images/04-create-category08.png){.thumbnail}

#### Création de la stratégie de protection

Une stratégie de protection consiste à une connexion entre deux *Availability zones* avec un planning de réplication qui autorise tous les types de synchronisations:

- asynchrone toutes les heures
- nearsync entre 1 & 15 minutes
- synchrone avec un délai de 0 secondes (Ce mode nécessite une latence inférieure à 5Ms entre les deux clusters)

Depuis le menu principal, cliquez `Protection Policies`{.action} sous `Data Protection`.

![Create Protection policy 01](images/05-create-protection-policy01.png){.thumbnail}

Cliquez sur `Create Protection Policy`{.action}. 

![Create Protection policy 02](images/05-create-protection-policy02.png){.thumbnail}

Choisissez le `nom de la stratégie` dans **Policy name**

Ensuite dans **Primary location** choisissez ces options : 

- **Location** : `Local AZ` pour choisir la zone contenant le cluster local.
- **Cluster** : `Cluster contenant les machines virtuelles à répliquer`.

Cliquez sur `Save`{.action}.

![Create Protection policy 03](images/05-create-protection-policy03.png){.thumbnail}

Dans **Recovery location** choisissez ces options :

- **Location** : `PC_192.168.0.222` qui correspond à zone contenant le cluster distant
- **Cluster** : `Cluster de destination à l'intérieur de cette zone`

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

Cliquez sur `Create`{.action}.

![Create Protection policy 09](images/05-create-protection-policy09.png){.thumbnail}

La stratégie de protection est activée et apparait dans le tableau de bord des **Protection Policies**.

![Create Protection policy 10](images/05-create-protection-policy10.png){.thumbnail}

### Gestion des plans de reprises d'activité.

#### Présentation 

En fonction du choix de réplication et de la disponibilité d'un témoin de cluster supplémentaire il est possible d'avoir ces possibilités lors de la mise en service d'un plan de reprise d'activité :

- Lancement manuel du plan de reprise d'activité si l'on n'a pas de témoin de cluster.
- Automatisation du plan de reprise d'activité en réplication synchrone avec un un témoin de cluster.
- Choix du démarrage des machines virtuelles lors de l'activation du plan de reprise d'activité avcc exécution d'un script.

#### Création 

Depuis le menu principal choisissez `Recovery Plans`{.action} sous `Data Protection`.

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

Ensuite cliquez sur `Next`{.action}. 

![Create Recovery Plan 06](images/06-create-recovery-plan06.png){.thumbnail}

Lors de la présentation du plan de reprise cliquez sur `OK, Got it`{.action}. 

![Create Recovery Plan 07](images/06-create-recovery-plan07.png){.thumbnail}

Sur le site primaire choisisissez ces options :

- **Production** : `VLAN de production`
- **Test Failback** : `VLAN de test` 

Sur le site de reprise choisisissez ces options :

- **Production** : `VLAN de production`
- **Test Failback** : `VLAN de test` 

Ensuite cliquez sur `Done`{.action}. 

![Create Recovery Plan 08](images/06-create-recovery-plan08.png){.thumbnail}

Le plan de reprise apparait dans la liste, il pourra être utilisé.

![Create Recovery Plan 09](images/06-create-recovery-plan09.png){.thumbnail}

#### Migration programmée 

##### Migration du site se trouvant au Canada vers la France

Connectez-vous avec **Prism Central** sur le cluster en France pour basculer la machine virtuelle du Canada vers la France.

Allez dans le menu `Principal` choisissez `Recovery Plans`{.action} dans la rubrique `Data Protection`.

![Planned Migration 01](images/07-planned-migration01.png){.thumbnail}

    Sélectionnez le plan de reprise en utilisant la `case à cocher` à coté ensuite cliquez sur `Actions`{.action} pour faire apparaitre le menu.

![Planned Migration 02](images/07-planned-migration02.png){.thumbnail}

cliquez sur `Failover`{.action} 

![Planned Migration 03](images/07-planned-migration03.png){.thumbnail}

Dans Failover type sélectionnez `Planned Failover`{.action} et cliquez sur le bouton `Failover`{.action}

![Planned Migration 04](images/07-planned-migration04.png){.thumbnail}

Saisissez `Failover`{.action} et cliquez sur le bouton `Failover`{.action}

![Planned Migration 05](images/07-planned-migration05.png){.thumbnail}

La machine virtuelle se trouvant sur le cluster d'origine va être démarré , une dernière synchronisation des données va être faites, ensuite la machine virtuelle disparaitra du cluster d'origine pour apparaitre et démarrer sur le cluster de destinations.

Au travers du tableau de bord on peut voir dans **Last Failover Status** le résultat qui est `Succeeded` si tout c'est bien déroulé.

![Planned Migration 06](images/07-planned-migration06.png){.thumbnail}

##### Inversion de la réplication 

Dans le cas d'un basculement programmée il faut inverser la réplication pour continuer à avoir la redondance entre les deux sites.

Connectez-vous sur le cluster de destination en FRANCE au travers de **Prism Central**

Utilisez le `menu principal`, choisissez `Protection Policies`{.action} dans le sous-menu `Data Protection`.

![Replication Inversion 01](images/08-replication-inversion01.png){.thumbnail}

Cochez la `case`{.action} à gauche de la stratégie de protection et cliquez sur le boutons `Actions`{.action}.

![Replication Inversion 02](images/08-replication-inversion02.png){.thumbnail}

Cliquez sur le bouton `Update`{.action}.

![Replication Inversion 03](images/08-replication-inversion03.png){.thumbnail}

Positionnez-vous à gauche en dessous de `Primary Location ` jusqu'a qu'un choix apparaisse et cliquez sur `Edit`{.action}

![Replication Inversion 04](images/08-replication-inversion04.png){.thumbnail}

Modifier ces informations dans **Primary Location** :

- **Location** : `Local AZ`
- **cluster** : `cluster de la zone locale`

Ensuite cliquez sur `Save`{.action}

![Replication Inversion 05](images/08-replication-inversion05.png){.thumbnail}

cliquez sur `Update Location`{.action}

![Replication Inversion 06](images/08-replication-inversion06.png){.thumbnail}

Positionnez-vous à droite en dessous de la destination jusqu'a qu'un choix apparaisse et cliquez sur `Edit`{.action}

![Replication Inversion 07](images/08-replication-inversion07.png){.thumbnail}

Modifier ces informations dans **Primary Location** :

- **Location** : `zone de destination`
- **cluster** : `cluster de la zone de destination`

Ensuite cliquez sur `Save`{.action}.

![Replication Inversion 08](images/08-replication-inversion08.png){.thumbnail}

Cliquez sur `Update Location`{.action}.

![Replication Inversion 09](images/08-replication-inversion09.png){.thumbnail}

Cliquez sur `Next`{.action}. 

![Replication Inversion 10](images/08-replication-inversion10.png){.thumbnail}

Cliquez sur `Update`{.action} pour finaliser l'inversion.

![Replication Inversion 11](images/08-replication-inversion11.png){.thumbnail}

##### Modification du plan de reprise 

De même que la réplication doit être inversée il faut aussi modifier le plan de reprise d'activité pour avoir la possibilité de migrer vers le site distant :

Allez dans le `menu principal` choisissez `Recovery Plans`{.action} dans le sous-menu `Data Protection`.

![Recovery Plan Inversion 01](images/09-replication-plan-inversion01.png){.thumbnail}

Sélectionnez le plan de reprise d'activité à l'aide de la `case à cocher`{.action} à gauche et ensuite cliquez sur le bouton `Actions`{.action}.

![Recovery Plan Inversion 02](images/09-replication-plan-inversion02.png){.thumbnail}

cliquez dans le menu sur `Update`{.action}.

![Recovery Plan Inversion 03](images/09-replication-plan-inversion03.png){.thumbnail}

Remplacez dans **Primary Location** à gauche `le cluster distant` par `Local AZ`{.action}.

![Recovery Plan Inversion 04](images/09-replication-plan-inversion04.png){.thumbnail}

Choisissez `La zone distante`{.action} dans **Recovery Location** à droite à la place de `Local AZ`.

![Recovery Plan Inversion 05](images/09-replication-plan-inversion05.png){.thumbnail}

Maintenant que la source et la destination du plan de reprise sont modifiées, cliquez sur `Next`{.action}.

![Recovery Plan Inversion 06](images/09-replication-plan-inversion06.png){.thumbnail}

Cliquez sur `Proceed`{.action}.

![Recovery Plan Inversion 07](images/09-replication-plan-inversion07.png){.thumbnail}

Selectionnez  la `Machine virtuelle` qui doit démarrer lors du plan de reprise et cliquez sur `Next`{.action}.

![Recovery Plan Inversion 08](images/09-replication-plan-inversion08.png){.thumbnail}

Sur le site primaire choisisissez ces options :

- **Production** : `VLAN de production`
- **Test Failback** : `VLAN de test` 

Sur le site de reprise choisisissez ces options :

- **Production** : `VLAN de production`
- **Test Failback** : `VLAN de test` 

Ensuite cliquez sur `Done`{.action}. 

![Recovery Plan Inversion 09](images/09-replication-plan-inversion09.png){.thumbnail}

Le plan de reprise est modifié pour fonctionner du cluster en France vers le cluster au Canada. 

Si vous souhaitez revenir au fonctionnement d'origine il faudra refaire un failover , modifier le sens de la réplication et modirer le plan de reprise d'activité.

![Recovery Plan Inversion 10](images/09-replication-plan-inversion10.png){.thumbnail}

#### Activation du plan de reprise suite à un incident sur le cluster d'origine

Il est possible d'activer les machines virtuelles sur le cluster de destination en cas de problème sur le cluster d'origine, dans ce cas l'activation se fera avec un risque de perte données dans le cas d'une réplication asynchrone ou nearsync, mais si l'on a une solution de réplication synchrone aucune perte ne sera à déplorer.

Dans notre cas la réplication se faisant toute les 15 minutes le risque de perte de données peut atteindre ce temps.

Connectez-vous au cluster qui est le destinataire des replications avec  **Prism Central** 

Allez dans le `menu principal`, choisissez `Recovery Plan`{.action} dans le sous menu `Data Protection`.

![Unplanned Recovery 01](images/10-unplanned-recovery01.png){.thumbnail}

Sélectionnez le plan de reprise d'activité avec `la case à cocher`{.action} et cliquez sur `Actions`{.action} 

![Unplanned Recovery 02](images/10-unplanned-recovery02.png){.thumbnail}

Choisissez dans le menu `Failover`{.action} 

![Unplanned Recovery 03](images/10-unplanned-recovery03.png){.thumbnail}

Cochez `Unplanned Failover`{.action} et cliquez sur `Failover`{.action}

![Unplanned Recovery 04](images/10-unplanned-recovery04.png){.thumbnail}

Saisissez `Failover` et cliquez sur `Failover`{.action}

![Unplanned Recovery 05](images/10-unplanned-recovery05.png){.thumbnail}

La machine virtuelle va démarrer sur le cluster secondaire sans essayer de faire de réplication. Dans ce type de reprise il faudra supprimer toute trace de réplication et de de connexion avec le cluster d'origine.


## Aller plus loin

[Interconnexion IPsec entre deux sites](https://docs.ovh.com/fr/nutanix/ipsec-interconnection/)

[Documentation Nutanix LEAP](https://portal.nutanix.com/page/documents/details?targetId=Leap-Xi-Leap-Admin-Guide-v6_1:Leap-Xi-Leap-Admin-Guide-v6_1)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
