---
title: Mettre en oeuvre l'hyperconvergence VMware avec vSAN
slug: vmware-vsan
excerpt: Découvrez comment mettre en oeuvre la puissance de l'hyperconvergence pour vos machines virtuelles avec vSAN
section: Fonctionnalités VMware vSphere
order: 08
---

**Dernière mise à jour le 17/09/2019**

## Objectif

Ce guide a pour objectif d’expliquer les concepts et les détails de la mise en oeuvre de VMware vSAN sur Private Cloud.

**Découvrez comment mettre en oeuvre la puissance de l'hyperconvergence pour vos machines virtuelles avec vSAN.**

## Prérequis

* Posséder une offre [Private Cloud](https://www.ovh.com/fr/private-cloud/){.external},
* Avoir ajouté au minimum trois hôtes vSAN,
* Pouvoir accéder à l’interface de gestion vSphere.

## En pratique

### vSAN : les concepts clés

#### Qu'est-ce que vSAN ?

vSAN est une solution de stockage de type objet proposée par VMware. Elle agrège un ensemble de disques situés directement dans les hôtes VMware et les présente comme un datastore unique. Ce type d'architecture qui utilise conjointement les capacités de traitement et de stockage distribuées sur un ensemble d'hôtes physiques est également appelée **architecture hyperconvergée**. Comme ce datastore est une construction virtuelle gérée par le logiciel vSAN, on emploie également le terme de Software Defined Storage ou SDS. Un des avantages de vSAN est d'être complétement intégré à vSphere et géré directement depuis vCenter.

#### Stockage objet ?

Un des points les plus importants à comprendre est que le datastore vSAN est un système de stockage objet. Les VM hébergées sur ce datastore sont composées de différents objets alors que sur un stockage "traditionnel" les VM sont constitués de fichiers hébergés sur un LUN. La protection de ces objets se fait simplement en les répliquant sur plusieurs hôtes du cluster là ou habituellement cette protection est assurée par le niveau de RAID des disques.

Une VM est constituée des objets suivants :

* Les fichiers base de la VM (VMX, nvram, logs, snapshots mémoire...), appelés aussi VM Home ("Accueil VM" en francais),
* les disques virtuels (VMDK),
* le Swap,
* Les snapshots disques.

Les éléments qui constituent un objet sont appelés composants. Par exemple, si l'objet est répliqué sur deux hôtes il est donc constitué de deux composants. Le nombre de composants associés à un objet va permettre de définir le niveau de résilience des données.

#### Protection des données

Afin d'assurer la protection des données en cas de défaillance matérielle (hôtes, disques, etc...), il est nécessaire de définir les niveaux de redondance attendus. vSAN propose deux mécanismes complémentaires pour arriver à cela.

##### Failure To Tolerate (FTT)

Le premier niveau de redondance concerne le nombre de défaillances que le cluster vSAN doit pouvoir supporter, que ce soit la perte d'un disque, d'un hôte ou bien du réseau. Cette valeur est appelée « Niveau de panne primaire à tolérer » (*Failure To Tolerate* ou FTT) qui peut aller de 0 (aucune redondance) à 3, le niveau maximum. Selon le niveau « n » attendu, vSAN va créer plusieurs composants et les distribuer sur chacun des hôtes. Ainsi, en cas de défaillance, les machines virtuelles continuent d'être accessibles. Plus le niveau de redondance attendu est élevé, plus le nombre d'hôtes requis augmente :

* FTT=1 :  3 hôtes minimum,
* FTT=2 :  5 hôtes minimum,
* FTT=3 :  7 hôtes minimum.

> [!warning]
>
> Configurer un niveau de FTT à 0 implique que les données concernées ne sont absolument pas redondées. Cela expose à une indisponibilité des VM concernées.
>

##### Failure Tolerance Method (FTM)

En complément du nombre de défaillance supporté, vSAN propose de choisir entre deux méthodes de protection des données, le mirroring et l'erasure coding. Ces mécanismes fonctionnent de manière analogue aux grappes RAID utilisées par les contrôleurs de disques durs, mais ils sont appliqués directement aux objets et donc aux composants.

* Mirroring (RAID 1) : il s'agit du niveau par défaut. Chaque objet est écrit simultanément sur deux hôtes différents (miroir) ;
* Erasure Coding + FTT=1 (RAID 5) : chaque objet est découpé en trois composants et un quatrième composant de parité est calculé. Il permet de retrouver les données manquantes en cas de perte d'un des composants. Pour écrire quatre composants, il faut donc bien quatre hôtes.
* Erasure Coding + FTT=2 (RAID 6) : chaque objet est découpé en quatre composants de données et deux composants de parité. Ils permettent de recalculer deux morceaux manquants. Là encore, pour écrire six composants à des endroits différents et assurer la redondance, il faut donc six hôtes.

Ces différents paramètres vont définir le nombre de composants (components) qui constitues un objet et de ce fait vont définir le nombre d’hôte minimum et le nombre de pannes (hôtes, disques, etc…) supportable sans perte d’accès aux données.

|         | | Configuration des objets en fonction de FTT et FTM|||
|------------------------|----------------------------------|------------------------|------------------------|------------------------|
| Failure Tolerance Method (FTM)   | Failure To Tolerate (FTT) | Equivalent RAID | Nombre minimum d'hôte | Nombre de pannes toléré |
| Mirroring | 1 | RAID 1 | 3 | 1 |
| Mirroring | 2 | RAID 1 | 5 | 2 |
| Mirroring | 3 | RAID 1 | 7 | 3 |
| Erasure Coding | 1 | RAID 5 | 4 | 1 |
| Erasure Coding | 2 | RAID 6 | 6 | 2 |

> [!primary]
>
> Dans le cas de l'erasure coding, les niveaux de protection RAID 5 et 6 imposent respectivement un FTT=1 ou 2, les autres valeurs (0 ou 3) ne sont pas supportées.
>

#### Consommation d'espace disque

L'utilisation des mécanismes de redondances induit logiquement une consommation d'espace accrue, il est donc nécessaire de trouver le bon compromis. Le point fort de vSAN est de pouvoir choisir les politiques de redondance par VM et non pas globalement au niveau du datastore. Cela permet d'avoir des politiques différenciées en fonction des types d'environnement.

|         | Surconsommation liée à la redondance |||
|------------------------|----------------------------------|------------------------|------------------------|
| Niveau de protection   | RAID 1 | RAID 5 | RAID 6 |
| 3 hosts FTT=1          | x 2    | - | - |
| 4 hosts FTT=1          | x 2    | x 1.33 | - |
| 5 hosts FTT=1          | x 2    | x 1.33 | - |
| 6 hosts FTT=2          | x 2    | - | x 1.5 |

> [!warning]
>
> Pour des raisons de performance et de résilience, VMware recommande de ne pas dépasser 70% de remplissage sur un datastore vSAN.
>

#### Espace net utilisable pour les données utilisateur

Pour illustrer très concrètement le point précédent, voici une estimation conservatrice de l'espace disponible pour les données dans différentes configuration PCC vSAN 256 ou 512, en prenant en compte la contrainte de remplissage à 70% que VMware recommande fortement de ne pas dépasser.

| NB Hosts vSAN 256  | FTT  | Host capacity (TB)  | Total Space  | 	Usable Space RAID 1 Policy (TB)  | Usable Space RAID 5 Policy (TB)  | Usable Space RAID 6 Policy (TB)  |
|---|---|---|---|---|---|---|
| 3  | 1  | 4  | 12  | 4,2  | n/a  | n/a  |
| 4  | 1  | 4  | 16  | 5,6  | 8,4  | n/a  |
| 5  | 1  | 4  | 20  | 7,0  | 10,5  | n/a  |
| 6  | 1  | 4  | 24  | 8,4  | 12,6  | n/a  |
| 6  | 2  | 4  | 24  | n/a  | n/a  | 11,1  |

| NB Hosts vSAN 512  | FTT  | Host capacity (TB)  | Total Space  | 	Usable Space RAID 1 Policy (TB)  | Usable Space RAID 5 Policy (TB)  | Usable Space RAID 6 Policy (TB)  |
|---|---|---|---|---|---|---|
| 3  | 1  | 8  | 24  | 8,4  | n/a  | n/a  |
| 4  | 1  | 8  | 32  | 11,2  | 16,8  | n/a  |
| 5  | 1  | 8  | 40  | 14,0  | 21,0  | n/a  |
| 6  | 1  | 8  | 48  | 16,8  | 25,2  | n/a  |
| 6  | 2  | 8  | 48  | n/a  | n/a  | 22,2  |

> [!primary]
>
> Ces chiffres reposent sur l'hypothèse que **100% des VMs** utilisent la même politique de stockage.
> Ils ne tiennent pas compte des gains liés à la déduplication/compression (qui fluctuent énormément en fonction de la nature des données stockées).
> Il s'agit donc d'une estimation très conservatrice de la volumétrie.
>

#### Les groupes de disque ou disk groups

Les disques physiques présents sur les hôtes sont regroupés au sein d'un groupe de disque. Il constitue l'unité de base de gestion par vSAN, et se compose d'un disque de cache SSD (obligatoire) et de jusqu'à 7 disques de stockage (les configurations OVH utilisent uniquement des disques SSD NVMe afin d’offrir un niveau maximum de performance). Chaque hôte qui participe à vSAN doit disposer à minima d'un groupe de disque et jusqu'à 5 maximum.

L'ajout de disk group apporte des disques de cache au pool de stockage, et donc permet d'augmenter l'espace de cache et les performances globales.

En contrepartie, comme toutes les écritures ont lieu dans le volume de cache, la défaillance du disque de cache sur un hôte invalide automatiquement les disques de stockage du disk group concerné. Si l'hôte dispose d'un unique DG, il n'est plus disponible pour vSAN jusqu'à remplacement du disque défaillant.

L'opération d'attribution des disques de cache et de stockage à un disk group s'appelle **Réclamation** ou **Claiming** et à lieu lors de l'initialisation du vSAN.

##### Le witness

Il existe un objet particulier appelé objet témoin ou witness. Sa fonction est de permettre de résoudre un problème de partition dans le cluster. Une partition se produit lorsque certains membres du cluster ne peuvent plus communiquer ou lorsqu'un hôte est isolé.

Dans le cas d'une policy RAID 1 où les deux copies d'un objet se trouvent dans une partition différente et sont modifiées simultanément il n'est plus possible de savoir où sont les données de reférences. C'est là qu'intervient le witness : c'est un fichier de petite taille (2MB) qui contient uniquement des metadatas et qui permet de décider quelle copie sert de référence. Dans le cas d'un cluster de 3 hôtes et d'une policy RAID 1, deux hosts recevront une copie des données et le troisième le witness qui contient des informations sur les objets de données. En cas de partition ou d'isolation, l'hôte qui a toujours accés au witness va continuer son activité en mode dégradé. Lorsque le problème est résolu l'hôte isolé est resynchronisé avec les données les plus récentes.

Le witness n'est utilisé que pour la policy RAID1, puisqu'en RAID 5 ou 6, les données et leur
parité sont distribuées sur tous les hosts, leur nombre est suffisant pour éviter toute ambiguité en cas d'isolation d'un hôte.

##### Visualisation des objets

L'état des objets peut être visualisé en allant sur les propriétés du cluster, Onglet "Surveiller" (ou Monitor dans l'interface en anglais), rubrique vSAN.

On peut alors cliquer sur "Objets virtuels" (ou Objects)

![](images/vsan_21.png){.thumbnail}

On voit 3 types d'objet vSAN :

* VM home
* Disque dur
* Fichier de swap RAM (fichier vswp)

Si on clique sur un objet, on peut voir comment il est stocké dans le cluster, on peut aussi voir les différents composants qui constituent l'objet :

![](images/vsan_22.png){.thumbnail}

Pour illustrer les autres types d'objets, créons un snapshot de cette VM :

![](images/vsan_23.png){.thumbnail}

On voit qu'un nouvel objet snapshot s'est ajouté à chacun des objets hard disk.

#### vSAN maximums

##### vSAN 6.6

* 5 diskgroups par hôtes **(1 seul possible sur Host SDDC vSAN)**
* 9000 composants par hôte vSAN
* 35 disques de stockage par hôte **(1 seul possible sur Host SDDC vSAN)**
* 64 hôtes par cluster vSAN
* 1 seul vSAN Datastore par cluster
* 6000 machines virtuelles par cluster
* 12 stripes par objet
* Tolerance de perte d'hôte : 3
* Taille de disque virtuel maximum : 62To

#### vSAN limitations

##### vSAN 6.6

Les fonctions suivantes de vSphere ne sont pas supportées :

* RDM,VMFS, partition de diagnostic
* Raw Device Mapping (RDM)
* Storage I/O control
* Reservation de volume SCSI

### Activer vSAN

> [!warning]
>
> Dans vSphere 6.5, les opérations concernant vSAN ne sont disponibles que dans le vSphere Web Client en Flash (Flex), et pas dans l'interface HMTL 5.
>

#### Désactivation du mode de haute disponibilité (vSphere HA)

vSAN s'appuie sur les fonctionnalités de haute disponibilité du cluster. Mais avant toute opération, il est nécessaire que ce mode soit désactivé.

Pour ce faire, rendez-vous dans les propriétés du cluster sur lequel le vSAN doit être activé, dans la rubrique « Disponibilité vSphere », puis décochez la case correspondante :

![](images/vsan_01.png){.thumbnail}

#### Paramétrage vSAN

Ce guide porte sur les fonctionnalités essentielles de vSAN. Nous utiliserons par conséquent les options par défaut, parfaitement adaptées à ce type d'usage :

![](images/vsan_03.png){.thumbnail}

Les seules options que nous allons activer sont la déduplication et la compression. Celles-ci vont vous permettre d’optimiser le stockage des données en ne stockant qu’une seule fois celles qui se répètent.

Ce processus est rendu possible par l’usage de disques flash haute performance en remplacement des disques mécaniques traditionnels.

![](images/vsan_04.png){.thumbnail}

Les cartes réseau pour le trafic vSAN vous sont automatiquement proposées.

Cliquez ensuite sur `Suivant`{.action} pour sélectionner les disques à utiliser pour le stockage vSAN. Dans le cadre d’une première activation, les disques sont détectés automatiquement.

![](images/vsan_05.png){.thumbnail}

> [!primary]
>
> Si les disques ont déjà été initialisés par un précédent déploiement vSAN, ils n’ont pas besoin d’être sélectionnés de nouveau. L’écran de sélection est vide, mais vous permettra quand même de passer à l’étape suivante.
>
> ![](images/vsan_06.png){.thumbnail}
>

Le dernier écran vous permet de vérifier que les paramètres sont corrects avant de lancer l'initialisation du processus.

![](images/vsan_07.png){.thumbnail}

L’activation de vSAN peut prendre quelques minutes. Une fois celle-ci terminée, les informations de configuration seront disponibles en cliquant sur l’onglet « vSAN » :

![](images/vsan_08.png){.thumbnail}

> [!warning]
>
> Il est important de réactiver la fonction de haute disponibilité de votre cluster.
>

### Désactiver vSAN

> [!warning]
>
> Dans vSphere 6.5, les opérations concernant vSAN ne sont disponibles que dans le vSphere Web Client en Flash, et pas dans l'interface HMTL 5.
>

#### Évacuer le datastore

À l’aide d’un Storage vMotion, vous devez évacuer toutes les machines virtuelles résidant sur le datastore vSAN, ou supprimer celles qui ne vous servent plus.

Cliquez sur l'onglet « Datastore » et vérifiez qu'aucune machine virtuelle n'est installée sur le datastore vSAN.

![](images/vsan_09.png){.thumbnail}

#### Suppression des groupes de disques

Si vous souhaitez supprimer toutes les informations de configuration vSAN de vos disques, vous pouvez effacer le groupe de disques créé par vSAN lors de l’activation.

Pour cela, sélectionnez l’onglet « vSAN » dans les propriétés du cluster, rubrique « Gestion des disques ».

![](images/vsan_11.png){.thumbnail}

Pour chacun de vos hôtes, sélectionnez le groupe de disques concerné et cliquez sur l'icône de suppression qui se trouve juste au-dessus.

Une confirmation vous est ensuite demandée.

![](images/vsan_12.png){.thumbnail}

Les deux premières options sont utiles si vous souhaitez retirer un hôte du cluster tout en préservant le fonctionnement du datastore vSAN.

Comme vous allez supprimer l'intégralité du datastore, il n’est pas nécessaire de migrer vos données. Vous pouvez donc sélectionner la dernière option « Ne pas évacuer les données ».

La suppression prend quelques instants.

Il suffit de répéter l’opération sur chacun des nœuds du cluster, jusqu’à la suppression totale du groupe de disques :

![](images/vsan_13.png){.thumbnail}

Si des messages d'erreur concernant la santé du groupe de disques apparaissent, vous pouvez les ignorer.

#### Désactivation de la haute disponibilité

Comme pour l'activation, vous devez désactiver la haute disponibilité au niveau du cluster avant d'arrêter vSAN. Pour cela, rendez-vous dans les propriétés du cluster, rubrique « Disponibilité vSphere », puis décochez la case « Activer vSphere HA ».

![](images/vsan_14.png){.thumbnail}

#### Désactivation de vSan

Une fois la haute disponibilité désactivée, il est possible d’arrêter vSAN.

Toujours situé dans les propriétés du cluster, cliquez sur le bouton « Modifier ».

![](images/vsan_16.png){.thumbnail}

Décochez ensuite la case « Activer vSAN ».

![](images/vsan_17.png){.thumbnail}

Confirmez enfin la demande qui s'affiche :

![](images/vsan_18.png){.thumbnail}

> [!primary]
>
> Si la haute disponibilité n’a pas été correctement désactivée, un message d’erreur vous le signalera :
>
> ![](images/vsan_19_FR.png){.thumbnail}
>

Une fois l’opération terminée, un message de confirmation s’affiche :

![](images/vsan_20.png){.thumbnail}

> [!warning]
>
> Si nécessaire, il faut réactiver les fonctions de haute disponibilité après cette manipulation si le cluster continue d’héberger des machines virtuelles stockées sur des datastores externes.
>

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
