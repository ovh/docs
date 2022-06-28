---
title: Réplication asynchrone ou synchrone au travers de Prism Element
slug: prism-element-nutanix-replication
excerpt: "Comment mettre en place la réplication asynchrone ou synchrone au travers de Prism Element"
section: Plan de reprise d'activité
order: 04
hidden: true
---

**Dernière mise à jour le 28/06/2022**

## Objectif

**Mettre en place une réplication entre clusters au travers de Prism Element**


> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>


## Présentation

Au travers de **Prism Element** il est possible :


- d'ajouter des liaisons vers des clusters distants.
- De créer des domaines de protections pour rajouter des réplications vers des sites distants.

> [!warning]
> 
> Avec le pack **Nutanix Standard** OVHcloud il est possible d'utiliser des réplications asynchrones toutes les heures. Si l'on veut une réplication plus courte il faut faire des réplications synchrones qui permet d'avoir une réplication comprise entre 1 et 15 minutes, cette option n'est possible qu'avec le pack **Nutanix Advanced** OVHcloud.
> 
>

## Prérequis

- Disposer de deux clusters Nutanix dans votre compte OVHcloud.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Être connecté sur vos clusters via **Prism Central**.
- Avoir mis en place une interconnexion entre deux clusters comme avec un VPN IPsec.

## En pratique

Nous allons utiliser deux clusters Nutanix se trouvant dans les datacenters OVHcloud, l'un au Canada et l'autre en France connectés via un VPN IPsec, sur deux plans d'adressages IP différents qui sont :

* **192.168.0.0/24** pour le cluster se trouvant dans un Datacenter en France.
* **192.168.10.0/24** pour le cluster se trouvant dans un Datacenter au Canada.

Si vous souhaitez de l'aide concernant la mise en place d'un VPN IPsec vous pouvez vous aider de ce guide [Interconnexion de deux clusters Nutanix au travers d'un VPN IPsec](https://docs.ovh.com/fr/nutanix/IPsec-interconnection/).

Connectez-vous au travers de **Prism Element** sur le cluster en France à partir de **Prism Central**, comme indiqué sur cette documentation [Hyper-convergence Nutanix](https://docs.ovh.com/fr/nutanix/nutanix-hci/)

Cliquez sur `Data Protection`{.action} depuis le menu `Home`.

![01 Create Remote Site From France01](images/01-create-remote-site-from-france01.png){.thumbnail} 

Cliquez sur `Remote Site`{.action} à gauche de l'écran.

![01 Create Remote Site From France02](images/01-create-remote-site-from-france02.png){.thumbnail}

Cliquez `+ Remote Site`{.action} à droite de l'écran et choisissez `Physical Cluster`{.action} pour rajouter un site distant.

![01 Create Remote Site From France04](images/01-create-remote-site-from-france04.png){.thumbnail}

Nommez le site distant dans `REMOTE SITE NAME`, saisissez l'adresse IP de **Prism Element** du site distant en France dans `CLUSTER VIRTUAL IP` et cliquez sur `Add Site`{.action}.

![01 Create Remote Site From France05](images/01-create-remote-site-from-france05.png){.thumbnail}

Faites défiler la fenêtre à l'aide de La `barre de défilement`{.action}.

![01 Create Remote Site From France06](images/01-create-remote-site-from-france06.png){.thumbnail}

Dans la rubrique **Network Mapping** Sélectionnez `AHV: base` pour **Source Cluster** ainsi que **Destination Cluster** et cliquez sur le bouton `+`{.action}  

![01 Create Remote Site From France07](images/01-create-remote-site-from-france07.png){.thumbnail}

Si vous avez un autre VLAN Faites la même opération avec le nom du VLAN `AHV: VLAN50`. Cliquez sur le bouton `+`{.action} pour valider l'association des réseaux sources et destinations.

![01 Create Remote Site From France08](images/01-create-remote-site-from-france08.png){.thumbnail}

Choisissez `default-container...` dans Source **VStore** et **Destination VStore** cliquez ensuite sur le bouton `+`{.action} pour relier le stockage source et destination.

![01 Create Remote Site From France09](images/01-create-remote-site-from-france09.png){.thumbnail}

Cliquez sur `Save`{.action}.

![01 Create Remote Site From France10](images/01-create-remote-site-from-france10.png){.thumbnail}

Le site distant apparait dans la liste.

![01 Create Remote Site From France11](images/01-create-remote-site-from-france11.png){.thumbnail}

Nous allons maintenant nous connecter sur l'interface **Prism Element** du site distant au Canada et effectuer la même opération.

Via le menu Home cliquez sur `Data Protection`{.action}.

![02 Create Remote Site From Canada01](images/02-create-remote-site-from-canada01.png){.thumbnail} 

Cliquez sur `Remote Site`{.action} à gauche de l'écran.

![02 Create Remote Site From Canada02](images/02-create-remote-site-from-canada02.png){.thumbnail}

Cliquez `+ Remote Site`{.action} à droite de l'écran et choisissez `Physical Cluster`{.action} pour rajouter un site distant.

![02 Create Remote Site From Canada04](images/02-create-remote-site-from-canada04.png){.thumbnail}

Nommez le site distant dans `REMOTE SITE NAME`, saisissez l'adresse IP de **Prism Element** du site distant au Canada dans `CLUSTER VIRTUAL IP` et cliquez sur `Add Site`{.action}.

![02 Create Remote Site From Canada05](images/02-create-remote-site-from-canada05.png){.thumbnail}

Faites défiler la fenêtre à l'aide de La `barre de défilement`{.action}.

![02 Create Remote Site From Canada06](images/02-create-remote-site-from-canada06.png){.thumbnail}

Dans **Network Mapping** Sélectionnez `AHV: base` pour **Source Cluster** et **Destination Cluster** et cliquez sur le bouton `+`{.action}  

![02 Create Remote Site From Canada07](images/02-create-remote-site-from-canada07.png){.thumbnail}

Si vous avez un autre VLAN effectuez la même opération avec le nom du VLAN `AHV: VLAN50`. Cliquez sur le bouton `+`{.action} pour valider l'association du réseau sources et destination.

![02 Create Remote Site From Canada08](images/02-create-remote-site-from-canada08.png){.thumbnail}

Choisissez `default-container...` dans Source **VStore** et **Destination VStore** et cliquez sur le bouton `+`{.action} pour valider la connexion  du stockage source et destination. 

![02 Create Remote Site From Canada09](images/02-create-remote-site-from-canada09.png){.thumbnail}

Cliquez sur `Save`{.action}.

![02 Create Remote Site From Canada10](images/02-create-remote-site-from-canada10.png){.thumbnail}

Le site distant apparait dans la liste des sites distants. 

![02 Create Remote Site From Canada11](images/02-create-remote-site-from-canada11.png){.thumbnail}

### Mise en place de la réplication entre site

Maintenant que les deux sites sont reliés, nous allons créer un domaine de protection avec une réplication asynchrone contenant trois machines virtuelles se trouvant sur le cluster en France vers le site distant au Canada.

Revenez sur l'interface **Prism Element** du cluster se trouvant en France.

Choisissez dans le menu principal `Data Protection`{.action}

![03 Create dataprotection 01](images/03-create-dataprotection01.png){.thumbnail}

Au travers du tableau de bord **Data Protection** cliquez en haut à droite sur `+ Protection Domain`{.action} et cliquez sur `Async DR`{.action}.

![03 Create dataprotection 03](images/03-create-dataprotection03.png){.thumbnail}

Saisissez un `Nom` et cliquez sur `Create`{.action}.

![03 Create dataprotection 04](images/03-create-dataprotection04.png){.thumbnail}

Sélectionnez `trois machines` virtuelles et cliquez sur `Protect Selected Entities`{.action}.

![03 Create dataprotection 05](images/03-create-dataprotection05.png){.thumbnail}

Cliquez sur `Next`{.action}

![03 Create dataprotection 06](images/03-create-dataprotection06.png){.thumbnail}

Cliquez sur `New Schedule`{.action} pour configurer la planification.

![03 Create dataprotection 07](images/03-create-dataprotection07.png){.thumbnail}

Modifier ces options pour **Configure your local schedule** :

* Saisissez **Repeat every** `1 hour`. 

Ensuite saisissez les règles de rétentions dans **Retention policy** :

* Choisissez en local et à distance **keep the last** `2` **snapshots** pour garder deux snapshots en local et à distance. 

Cliquez sur `Create Schedule`{.action} pour valider la planification.

![03 Create dataprotection 08](images/03-create-dataprotection08.png){.thumbnail}

La tâche de réplication est créée pour fonctionner toutes les heures, ce sera une réplication asynchrone utilisable avec le pack **Nutanix Standard** OVHcloud. 

Cliquez sur `Close`{.action} pour fermer la fenêtre.

> [!primary]
> 
> Il est possible de modifier la planification pour réduire le risque de perte de données en cas de désastre mais la réplication va basculer du mode asynchrone au mode synchrone et il faudra alors faire évoluer la licence vers le pack **Nutanix Advanced** OVHcloud.

![03 Create dataprotection 09](images/03-create-dataprotection09.png){.thumbnail}

Le domaine de protection est créé et apparait dans la liste des réplications.

![03 Create dataprotection 10](images/03-create-dataprotection10.png){.thumbnail}


### Migration des machines virtuelles

La migration des machines virtuelles est une opération de bascule des machines virtuelles membres d'un domaine de protection vers le site distant sans perte de données, il faut que les deux clusters soient en ligne et communiquent correctement entre eux. 

Les étapes de la migration sont décrites ci-dessous :

* Arrêt des machines virtuelles sur le cluster source (si elles sont allumées).
* Réplication des données manquantes vers le cluster de destination.
* Suppression des machines virtuelles sur le cluster source.
* Activation des machines virtuelles sur le cluster de destination.
* La réplication est inversée, la destination devient la source sans planification programmée.


Allez sur **Prism Element** où se trouve les machines virtuelles répliquées.

Au travers du tableau de bord **Data Protection** cliquez sur `Migrate`{.action}. 

![04 Migrate VM to Canada 01](images/04-migrate-to-canada01.png){.thumbnail}

Sélectionnez le site distant, saisissez `MIGRATE` et cliquez sur `Migrate`{.action}

![04 Migrate VM to Canada 02](images/04-migrate-to-canada02.png){.thumbnail}

La migration est lancée elle sera terminée quand les machines virtuelles apparaitront sur le site distant et ne seront plus visibles sur le site d'origines. 

Les machines virtuelles migrées sont éteintes il faut les démarrer manuellement.

![04 Migrate VM to Canada 03](images/04-migrate-to-canada03.png){.thumbnail}


### Basculement des machine virtuelles en cas de sinistre

Si le site d'origine est hors service il est possible d'activer les machines virtuelles membres d'un domaine de protection sur le site de destination. 

> [!warning]
> L'activation des machines virtuelles sur le site distant se fera avec les dernières données répliquées, dans le cas d'une réplication asynchrone le risque de perte de données maximale est d'une heure. 

Connectez-vous sur le site fonctionnel avec **Prism Element**.

Allez sur le tableau de bord **Data Protection**.

Sélectionnez le site à activer et cliquez sur `Activate`{.action}. 

![05 Active VM on remote site 01](images/05-activate-protection-domain01.png){.thumbnail}

Cliquez sur `Yes`{.action}. 

![05 Active VM on remote site 02](images/05-activate-protection-domain02.png){.thumbnail}

Les machines virtuelles apparaîtront dans la console de **Prism Element** dans l'état de la dernière réplication, les données modifiées après la dernière réplication valide seront perdues.


## Aller plus loin

[Plan de reprise d'activité sur Nutanix](https://docs.ovh.com/fr/nutanix/disaster-recovery-overview/)

[Connexion IPsec](https://docs.ovh.com/fr/nutanix/IPsec-interconnection/)

[Documentation Nutanix sur Data Protection and Disaster Recovery](https://portal.nutanix.com/page/documents/solutions/details?targetId=BP-2005-Data-Protection:top-backup-and-disaster-recovery-on-remote-sites.html)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
