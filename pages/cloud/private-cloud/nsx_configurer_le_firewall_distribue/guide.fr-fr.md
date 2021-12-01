---
title: Configurer le firewall distribué NSX
slug: configurer-le-firewall-distribue-nsx
legacy_guide_number: '7766505'
section: NSX
order: 08
---

**Dernière mise à jour le 01/12/2021**

## Objectif

Comme le [pare-feu NSX Edge](https://docs.ovh.com/fr/private-cloud/configurer-le-nsx-edge-firewall/), Le pare-feu distribué  accepte ou refuse le trafic réseau en fonction de règles appliquées à des objets ou groupes d’objets.
Le pare-feu distribué optimise le trafic et la consommation de bande passante en appliquant des règles aux paquets avant qu'ils ne soient envoyés au pare-feu Edge.

**Ce guide explique comment créer des règles.**

## Prérequis

- Être contact administrateur du [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), pour recevoir des identifiants de connexion.
- Avoir un identifiant utilisateur actif avec les droits spécifiques pour NSX (créé dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr))


## En pratique

### Accès à l'interface

Dans l'interface vSphere, allez dans le Tableau de bord `Mise en réseau et sécurité`{.action}.

![Menu](images/en01dash.png){.thumbnail}


Sur la gauche de votre écran, naviguez vers `Pare-feu`{.action}.

![FW](images/en02fw.png){.thumbnail}


Le pare-feu distribué permet trois types de paramètres
- `Général`{.action} pour des règles sur la couche 3 et supérieures
- `Ethernet`{.action} pour des règles sur la couche 2
- `Services de partenaires`{.action} pour des règles sur des services tiers (à intégrer au préalable)

![FW](images/en03layer.png){.thumbnail}


### Prioritié

Avant de vréer de nouvelles règles, il est important de comprendre quand et comment elles seront appliquées.<br>
Le pare-feu distribué a trois niveaux de priorisation:
- Types
- Sections
- Règles

#### Types

Le type de règle/section est définie par la couche OSI sur laquelle elle agit.<br>
Les règles de couche 2 seront appliquées avant celles de couche 3 et supérieures.<br>
Ce qui veut dires que les règles de l'onglet Ethernet seront prioritaires sur celles de l'onglet Général.

#### Sections

Les sections sont des dossiers de règles qui permettent une meilleure segmentation et une gestion plus aisée.<br>
Les sections sont appliquées de haut en bas.<br>
Cela implique qu'en cas de conflit entre règles de différentes sections, c'est la règle de la section la plus haute qui sera appliquée.

#### Règles

Les règles contrôlent des services identifiés, en provenance de sources spécifiques et en direction de destinations définies.<br>
Les règles sont appliquées de haut en bas.<br>
La première règle qui s'applique au trafic annule toutes les suivantes.<br>
Cela implique qu'en cas de conflit entre deux règles d'une même section, c'est la règle avec le plus forte priorité (le plus petit nombre) qui sera appliquée.

#### Order

Vous pouvez ajouter des règles et/ou sections dans tous les onglets du pare-feu.<br>
Vous pouvez modifier l'ordre des règles et sections en les cochant puis en utilisant les flèches haut et bas. 

![Order](images/en04order.png){.thumbnail}


### Règles de pare-feu

Cliquez sur `+ Ajouter une règle`{.action}.

La nouvelle règle apparaît avec les champs suivants :

- Bouton (*slider*) d'activation
- Coche de sélection pour des actions spécifiques (changement de priorité, suppression...)
- Nom
- ID
- Source
- Destination
- Service
- Appliqué à
- Action
- Bouton (*slider*) de journal (*log*)
- Paramètres avancés

![Rule](images/en05rule.png){.thumbnail}


> [!warning]
>
> Par défaut, une règle a pour source et destination `Quelconque`, soit une sélection de tout le trafic. Pour des raisons de sécurité, il est recommandé d'éviter les règles globales.
>

#### Nom

Nommez la règle via un clic sur le nom. Les champs`ID` and `Type` seront automatiquement complétés.

#### Source

The source field defines the origin of the traffic.

Hover over the field and click on the `pencil`{.action} icon. You can add objects and/or IP addresses as needed.     

> [!primary]
>
> If "Negate Source" is turned on, the rule is applied to all sources except for the sources selected.
    
Click `Save`{.action} when ready.

![Source](images/en06sourceobject.png){.thumbnail}

![Source](images/en07sourceip.png){.thumbnail}


#### Destination

The destination field defines the target of the traffic.

Hover over the field and click on the `pencil`{.action} icon. You have the same choices for destination as you had for source.    

> [!primary]
>
> If "Negate Source" is turned on, the rule is applied to all destinations except for the destinations selected.

Click `Save`{.action} when ready.

![Destination](images/en08destobject.png){.thumbnail}

![Destination](images/en09destip.png){.thumbnail}


#### Service

The service field defines the type of traffic aimed at.

Hover over the field and click on the `pencil`{.action} icon. You have the choice between using existing services and groups or add raw ports/protocols.

> [!primary]
>
> Clicking on an existing service or group will show you a description with the ports and protocols involved.

Click `Save`{.action} when ready.

![Service](images/en10serv.png){.thumbnail}

![Service](images/en11servdetail.png){.thumbnail}

![Service](images/en12servport.png){.thumbnail}


#### Appliqué à

The applied to field defines the scope of the rule.

Hover over the field and click on the `pencil`{.action} icon.<br>
By default, the rule is set to apply to all clusters on which Distributed Firewall is installed, which means it will apply to all VMs.<br>
You can add all Edge gateways or specific objects available in the list.   

Click `Save`{.action} when ready.

![Applied](images/en13appliedto.png){.thumbnail}


#### Action

The action field defines how to handle the traffic.

You have three possible options to choose from:

- Allow: The traffic will go through.
- Block: The traffic will be blocked with no further communication.
- Reject: The traffic will be blocked and a "port unreachable" message will be sent to the source.     

![Action](images/en14action.png){.thumbnail}

#### Journal

The log slider allows you to keep a journal of events on the rule.

#### Paramètres avancés

Aside from a comments section and a statistics section, the advanced settings section allows you to define if the target traffic is inbound, outbound or both and if you want to target IPv4, IPv6 or both.

Click `Save`{.action} when ready.

![Advanced](images/en15adv.png){.thumbnail}


### Publier les règles

No creation/modification of a rule/section will be registered until you click the `Publish`{.action} button.

![Publish](images/en16pub.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
