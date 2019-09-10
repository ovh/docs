---
title: Setting up Zerto Virtual Replication for your DRP
slug: zerto-virtual-replication-vmware-vsphere-drp
excerpt: Discover how to set up Zerto Virtual Replication between your Private Cloud platforms
section: Services et options OVH
---

**Last updated 30/08/2019**

## Goal
This guide will present the concepts and steps required to setup Zerto Virtual Replication on the Private Cloud platform
Ce guide a pour objectif d’expliquer les concepts et les détails de la mise en oeuvre de Zerto Virtual Replication sur Private Cloud.

**excerpt: Discover how to set up Zerto Virtual Replication between your Private Cloud platforms**

## Prerequisites 

* Having 2 Private Cloud Platforms [Private Cloud](https://www.ovh.ie/sddc/){.external} on 2 different datacenters
* In each Datacenter, a free public IP

###  Zerto Virtual Replication Concepts

Zerto Virtual Replication est une solution technique permettant de mettre en place une réplication des données entre infrastructure de virtualisation ou cloud en étant agnostique des technologies de stockage. Pour cela elle s'appuie sur les hyperviseurs de la plateforme en déployant des machines virtuelles (VM)
agent appeler Virtual Replication Appliance (VRA) qui se charge de dupliquer les écritures vers les unités de stockage et les transmettent vers le site distant pour être écrite.

#### Virtual Replication Appliance (VRA)

Les VRA sont ainsi déployés sur chaque hyperviseur et vont consommer des ressources pour effectuer la réplication :

* vCPU : 1
* RAM : 2 GB
* Stockage : 36 GB

À noter que pour le stockage, OVH ajoute gratuitement un datastore dédié pour l'ensemble des VRA.

#### Sites

La réplication des données se fait entre deux (2) sites appairés, grâce aux VRA déployés de chaque côté qui gèrent les flux de réplication.

Par défaut ces flux  ne sont pas chiffrés par Zerto. La sécurité étant une priorité pour OVH, nous mettons en place entre les deux (2) sites un tunnel chiffré (via IPSec) au moyen d'une appliance réseau appelée L2VPN.

#### Groupe de réplication (VPG)

L'activation et le pilotage de la réplication des VM se fait au travers de Groupe de réplication (VPG).
Ils permettent de regrouper logiquement un groupe de VM correspondant à un besoin métier ou opérationnel (ex: une application avec sa base de données) afin de configurer l'objectif de perte de données maximale admissible (**RPO**), l'ordre de démarrage des machines (la base avant l'application), les configurations réseau à utiliser pour les tests de bascule ou lors d'un sinistre. 

À noter qu'il est aussi possible de définir un niveau de priorité entre les VPG afin de prioriser le transfert de données en cas de problème de bande passante réseau.

## En pratique

### Activer le service

#### Depuis Espace client OVH

Dans votre espace client OVH, rendez-vous dans la partie "Server" -> "Private Cloud" -> sélectionner votre plateforme Private-Cloud primaire -> sélectionner 
le datacenter voulu -> cliquer sur l'onglet "Disaster Recovery Plan (DRP)".

![zerto ovh enable](images/zerto_OvhToOvh_enable_01.png){.thumbnail}

Sélectionner **Between two OVH Private Cloud solutions** puis cliquer sur `Activate Zerto DRP`{.action},

![zerto ovh enable](images/zerto_OvhToOvh_enable_02.png){.thumbnail}
La sélection du **Private Cloud** Primaire ainsi que le **datacenter** se fait automatiquement en se basant sur l'infrastructure par laquelle vous avez accédé.
Sélectionner dans le menu déroulant une adresse IP publique **libre** issue du bloc d'IP public attaché au **Private Cloud**. Elle sera utilisée pour la mise en place du lien sécurisé entre les infrastructures.
Cliquer sur `Next`{.action},

![zerto ovh enable](images/zerto_OvhToOvh_enable_03.png){.thumbnail}
La sélection du site secondaire est à faire parmi vos **Private Cloud** présents
dans le menu déroulant. À noter que seuls ceux éligibles sont présents et pour cela
doivent répondre aux critères suivants :

* Être physiquement dans une autre Localisation
* Ne pas déjà avoir de réplication Zerto en place

Sélectionner ensuite le **datacenter** du **Private Cloud** de destination dans 
le menu déroulant.

Sélectionner dans le menu déroulant une adresse IP publique **libre** issue du bloc d'IP Publique attaché au **Private Cloud**. Elle sera utilisée pour la mise en place du lien sécurisé entre les infrastructures.
Cliquer sur `Next`{.action},

![zerto ovh enable](images/zerto_OvhToOvh_enable_04.png){.thumbnail}
Configuration de la bonne prise en compte de la demande d'activation, comme indiqué celle-ci peut prendre jusqu'à une (1) heure, sous réserve que les informations fournies soient correctes (notamment si l'adresse IP n'est déjà utilisée par l'une de vos machines virtuelles, si c'est le cas l'activation échouera).

![zerto ovh enable](images/zerto_OvhToOvh_enable_05.png){.thumbnail}
Une fois l'activation effectuée, vous recevrez par courriel un résumé de la configuration de l'installation ainsi que les liens d'accès à l'interface Zerto de chacune des infrastructures.

> [!primary]
> Bonjour,
> 
> Vous venez d'activer la solution de PRA Zerto entre 2 de vos Private Cloud.
> 
> Vous pouvez vous connecter au site principal à l'adresse suivante :
> 
>   * URL        : https://zerto.pcc-192-0-2-1.ovh.com/
> 
> Vous pouvez vous connecter au site secondaire à l'adresse suivante :
> 
>   * URL        : https://zerto.pcc-192-0-2-2.ovh.com/
> 
> Vous pourrez vous authentifier avec vos comptes administrateurs de la même > façon que pour vSphere.
> 

#### Depuis l'API OVH

### Interface Zerto Replication

L'interface est accessible depuis les deux (2) infrastructures via l'adresse :

* URL : https://zerto.pcc-x-x-x-x.ovh.com/ (à modifier selon vos plateformes)

> [!warning]
>
> Comme indiqué dans le corps du courriel, les identifiants pour se connecter sont les même que ceux utiliser pour se connecter à l'interface vSphere.
>

Une fois identifier, vous arrivez sur un écran affichant le tableau de bord :
![Zerto Dashboard](images/zerto_OvhToOvh_int_01.png){.thumbnail}

Vous retrouverez sur cet écran :

* Un visuel rapide de l'état de santé des VPG
* Le statut global de Zerto Réplication avec quatre (4) indicateurs
* Un tableau des performances de Zerto Réplication
* Un visuel sur les statuts de l'ensemble des VPG
* La liste des dernières alertes, actions et évènements Zerto Réplication

### Configurer un groupe de réplication (VPG)

Depuis le menu `Actions`{.action}, sélectionner `Create VPG`{.action}

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_01.png){.thumbnail}

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_02.png){.thumbnail}

Sur le premier écran :

* Saisir un nom pour le VPG, idéalement celui-ci doit être parlant dans un contexte opérationnel
* Sauf besoin particulier, la priorité définit a **Medium** peut-être laissé tel-quelle

Continuer avec `NEXT`{.action}

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_03.png){.thumbnail}

L'étape suivante consiste à sélectionner les VM qui vont faire partie du VPG.

> [!warning]
>
> Une VM ne peut pas être dans plusieurs VPG.
> 

* Filtrer les VM par nom via le champ **Search**
* Cocher les cases à gauche des VM correspondantes

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_04.png){.thumbnail}

* Cliquer sur la flèche pointant vers la droite pour passer celle-ci dans le VPG

Continuer avec `NEXT`{.action}

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_05.png){.thumbnail}

On passe ensuite à l'étape de sélection du site distant :

* **Recovery Site** : sélectionner le site distant (celui qui n'est pas local) au niveau de la liste 
* **ZORG** : sélectionner **No Organization** dans la liste. Toute autre valeur affichera une erreur au moment de passer à l'étape suivante.

Puis on passe à l'étape de définition des ressources distantes :

* **Hosts** : Sélectionner la ressource de calcul, qui peut être un **hôte seul** (indiqué par son adresse IP et précédé du nom du cluster entre crochets le cas échéant), un **Ressource Pool** (commençant par RP puis suivi du nom du cluster et pour finir par le nom du Ressource Pool) ou un **Cluster** (via son nom). Seul un **Ressource Pool** ou un **Cluster** doit être sélectionné (ici Cluster1).
* **Datastore** : Sélectionner la ressource de stockage, qui peut être un **Datastore seul** (indiqué par son nom et précédé du nom du **Storage Cluster** entre crochets le cas échéant) ou un **Storage Cluster** (via son nom).

Laisser les autres valeurs telles quelles sauf besoins avancés.

Continuer avec `NEXT`{.action}

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_06.png){.thumbnail}

À l'étape suivante, on peut éventuellement affiner la configuration pour le stockage.
Laisser les autres valeurs telles quelles sauf besoins avancés.

Continuer avec `NEXT`{.action}

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_07.png){.thumbnail}

Ensuite vient une partie importante, première étape de la configuration réseau

* **Failover/Move Network** : choisir le portgroup par défaut pour la bascule
* **Failover Test Network** : choisir le portgroup pour les tests de bascule
* **Recovery Folder** : choisir le dossier (ou alors / pour la racine) dans lequel les VM basculées sur le site de secours seront regroupées

> [!primary]
> Les options de **Pre-recovery Script** et **Post-recovery Script** ne sont pas utilisables.
> 

Continuer avec `NEXT`{.action}

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_08.png){.thumbnail}

Puis la deuxième étape de la configuration réseau :
* Pour chaque VM, vous allez pouvoir choisir le portgroup pour les tests ou bascules
* Il est aussi possible de changer la configuration IP des VM pour chacune des situations

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_09.png){.thumbnail}

> [!warning]
>
> Le changement d'IP n'est possible que pour les VM avec un OS supporté et pour lesquelles les **VMware Tools** sont en fonctionnement
> 

Continuer avec `NEXT`{.action}

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_10.png){.thumbnail}

Passer cette étape avec `NEXT`{.action}

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_11.png){.thumbnail}

Sur le dernier écran, on retrouve un récapitulatif de l'ensemble des éléments configurés.

Après vérification, valider la création avec `DONE`{.action}

![Zerto VPG Creation](images/zerto_OvhToOvh_vpg_13.png){.thumbnail}

Vous retrouverez le VPG nouvellement créer dans la liste, ainsi que le statut de celui-ci (commence par **Initializing**).

### Lancer un exercice de reprise d'activité 

Après avoir configuré la réplication et laissé celle-ci s'effectuer plusieurs jours, vous allez peut-être vouloir tester si votre PRA fonctionne avec notamment les actions gérées par Zerto Réplication.

> [!warning]
>
> Le test de failover sur Zerto Replication se fait **sans** coupure sur le site principal, il faut donc avoir fait attention à bien avoir configuré les réseaux de test pour éviter tout conflit d'adressage IP et autre pour ne pas impacter votre production avec cet exercice.
>
> L'ensemble des ressources qui seront démarrées sur le site secondaire par le test ne doivent pas être modifiées ni supprimées manuellement. L'ensemble du test sera démantelé par Zerto Replication à la fin du test.
>
> À noter que la réplication continue de s'effectuer entre les deux sites lors d'un test.
>

![Zerto Test Failover](images/zerto_OvhToOvh_test_00.png){.thumbnail}

Pour cela se connecter à l'interface Zerto Replication et cliquer sur `FAILOVER`{.action} (le sélecteur à gauche étant par défaut sur **TEST**).
Si le texte du bouton est en gris, c'est qu'il n'y a pas de VPG éligible pour le test (l'initialisation n'est peut-être pas terminée ou il y'a un problème).

![Zerto Test Failover](images/zerto_OvhToOvh_test_01.png){.thumbnail}

Immédiatement, un écran apparait avec les VPG disponibles, le sens de réplication, le site de destination et si le niveau de protection est respecté (**Meeting SLA**).

Vous allez alors plusieurs choix :

1. Cocher la case pour sélectionner le VPG et donc l'ensemble des VMs de celui-ci pour le test.
2. Cliquer sur l'icône à droite du nom du VPG pour faire apparaitre la liste des VM du VPG. Vous avez alors la possibilité de choisir quelles VM du VPG vont faire partie du test.

Valider et passer à l'étape suivante avec `NEXT`{.action}

![Zerto Test Failover](images/zerto_OvhToOvh_test_02.png){.thumbnail}

Nous sommes partis sur le choix un (1) à savoir test sur un VPG.

À cette étape on retrouve un résumé des actions lié au VPG :
* Sens de réplication
* Site distant
* Si une séquence de démarrage des VM a été définie
* Si des scripts Pre ou Post bascule sont présent (fonctionnalité non disponible)

Continuer avec `NEXT`{.action}

![Zerto Test Failover](images/zerto_OvhToOvh_test_03.png){.thumbnail}

Dernier écran de récapitulatif sur une vue des différents sites avec le nombre de VPG pour le test.

Confirmer le lancement du test avec `START FAILOVER TEST`{.action}

Le test de bascule se lance immédiatement avec les actions sur le vCenter du site distant.

Il ne vous reste plus qu'à contrôler si tout fonctionne correctement sur le site distant.

![Zerto Test Failover](images/zerto_OvhToOvh_test_05.png){.thumbnail}

Quand vous avec fini de vérifier le bon fonctionnement des machines basculées.
Cliquer sur le petit carré rouge à droite du **Testing Failover**

![Zerto Test Failover](images/zerto_OvhToOvh_test_06.png){.thumbnail}

Dans la nouvelle fenêtre, il est possible d'indiquer si le test s'est déroulé de manière satisfaisante et de rajouter un commentaire.

Confirmer la fin du test avec `STOP`{.action}

Le démantèlement du test se lance immédiatement avec les actions sur le vCenter du site distant.

### Lancer une reprise d'activité

En cas d'incident majeur sur le site principal ou dans le cadre d'un exercice en condition réelle, le lancement de la bascule s'effectue logiquement depuis le site secondaire (de reprise).

> [!warning]
>
> Le failover en mode **LIVE** sur Zerto Replication se fait en considérant le site principal comme indisponible, il faut donc avoir fait attention à la configuration réseaux de pour éviter tout conflit d'adressage IP et autre.
>
> L'ensemble des ressources qui seront démarrées sur le site secondaire vont devenir active au niveau du traitement de données 
>
> À noter que la réplication entre les deux sites est modifiée ou couper (voir plus loin).
>

![Zerto Live Failover](images/zerto_OvhToOvh_live_02.png){.thumbnail}

Pour cela se connecter à l'interface Zerto Replication, basculer le sélecteur en bas à droite de l'interface sur **LIVE** (noter le changement de couleur du bandeau pour pour signaler que vous allez faire des actions qui peuvent avoir un impact sur la production) et cliquer sur `FAILOVER`{.action}.

![Zerto Live Failover](images/zerto_OvhToOvh_live_03.png){.thumbnail}

Immédiatement, un écran apparait avec les VGP disponibles, le sens de réplication, le site de destination et si le niveau de protection est correct (**Meeting SLA**).

Vous allez alors plusieurs choix :

1. Cocher la case pour sélectionner le VPG et donc l'ensemble des VMs de celui-ci pour la bascule.
2. Cliquer sur l'icône à droite du nom du VPG pour faire apparaitre la liste des VM du VPG. Vous avez alors la possibilité de choisir quelles VM du VPG vont faire partie de la bascule.

Valider et passer à l'étape suivante avec `NEXT`{.action}

![Zerto Live Failover](images/zerto_OvhToOvh_live_04.png){.thumbnail}

Nous sommes partis sur le choix un (1) à savoir test sur un VPG.

À cette étape on retrouve un résumé des actions lié au VPG :
* Sens de réplication
* Site distant
* Le **Checkpoint** : il s'agit de la date à laquelle seront restaurées les données. L'écart entre le point choisi et la date courante déterminera le **RPO**
* La **Commit Policy** : voir après.
* **VM Shutdown** : détermine le comportement à adopter sur le site primaire, pas de coupure des VM, extinction, extinction forcée.
* **Reverse Protection** : indique si la réplication du VPG doit être configurée en sens inverse à l'issue du failover pour pouvoir éventuellement procéder plus tard au failback.
* Si une séquence de démarrage des VM a été définie
* Si des scripts Pre ou Post bascule sont présent (fonctionnalité non disponible)

![Zerto Live Failover](images/zerto_OvhToOvh_live_05.png){.thumbnail}

Au niveau de la **Commit Policy**, vous avez trois (3) options :
* Auto-Rollback : sans action de votre part, le retour en arrière est déclenché au bout du temps prévu
* Auto-Commit : sans action de votre part, la validation des données sur la plateforme secondaire est déclenchée au bout du temps prévu (il n'est plus possible de revenir simplement sur la plateforme principale)
* None : les actions de **Rollback** ou de **Commit** doivent être validées par votre part.

![Zerto Live Failover](images/zerto_OvhToOvh_live_06.png){.thumbnail}

Au niveau des options **Auto** la temporisation par défaut est de soixante (60) minutes.

Continuer avec `NEXT`{.action}

![Zerto Live Failover](images/zerto_OvhToOvh_live_07.png){.thumbnail}

Dernier écran de récapitulatif sur une vue des différents sites avec le nombre de VPG pour la bascule.

> [!warning]
>
> Il est fortement recommandé de bien lire le résumé ainsi que les avertissements pour 
>

Lancer la bascule avec `START FAILOVER`{.action}

![Zerto Live Failover](images/zerto_OvhToOvh_live_08.png){.thumbnail}

Si vous avez choisi une **Commit Policy** de type **Auto**, un message d'avertissement vous rappelle l'impact de celui-ci.

Confirmer le lancement avec `START FAILOVER`{.action}

La bascule se lance immédiatement avec les actions sur le vCenter du site distant.

Il ne vous reste plus qu'à contrôler si tout fonctionne correctement sur le site distant.

![Zerto Live Failover](images/zerto_OvhToOvh_live_10.png){.thumbnail}

Après avoir lancé la bascule, vous pouvez voir une alerte au niveau de l'interface Zerto Replication.
Celle-ci est liée à la **Commit Policy** et temps que le commit n'est pas confirmé ou annulé.

Les actions sont à faire le cas échéant via les icônes à droite du VPG

![Zerto Live Failover](images/zerto_OvhToOvh_live_11.png){.thumbnail}

Au moment de la validation du commit, vous pouvez automatiquement configurer le VPG en sens inverse (appeler **Reverse Protection**).

Valider avec `COMMIT`{.action}

![Zerto Live Failover](images/zerto_OvhToOvh_live_13.png){.thumbnail}

Au niveau du VPG, vous pouvez noter que la direction (via la flèche) de réplication a été changée.

### Préparer et effectuer un retour en arrière

Suivant comment a éfé fait le **Failover**, l'éventuel retour sur le site principal (cela n'est pas une obligation) peut nécessiter plusieurs actions.

Si vous avez basculé avec du **Reverse Protection**, le retour arrière consiste à faire un **Failover Live** (se reporter à la partie idoine pour les actions à faire).

Si vous avec basculer **sans** du **Reverse Protection**, le retour arrière consiste à créer un VPG **puis** faire un **Failover Live** (se reporter aux sections précédentes pour les actions à faire).

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
