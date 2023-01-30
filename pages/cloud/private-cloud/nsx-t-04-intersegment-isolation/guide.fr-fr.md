---
title: Sécurisation Inter Segment
slug: nsx-t-intersegment-isolation
excerpt: Comment sécuriser les accès entre segments
section: NSX-T
order: 04
---

**Dernière mise à jour le 30/01/2023**

> [!warning]
> Les guides concernant NSX-T dans la solution Hosted Private Cloud Powered by VMware ne sont pas définitifs, ils seront modifiés lors de la sortie en version BETA et finalisés quand la version définitive sera prête. 
>

## Objectif

**Comment faire pour isoler les segments entre eux**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Prérequis

- Être contact administrateur du [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), celui-ci recevant les identifiants de connexion.
- Avoir un identifiant utilisateur actif avec les droits spécifiques pour NSX-T (créé dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr))
- Avoir **NSX-T** déployé avec deux segment configurés dans votre configuration NSX-T, vous pouvez vous aider de ce guide [Gestion des segments dans NSX-T](https://docs.ovh.com/fr/private-cloud/nsx-t-segment-management).


## En pratique

Les réseaux de chaque segment derrière la **ovh-T1-gw** ne sont pas isolés par défaut. 

Nous allons créer une règle qui isole ces deux segments entre eux à partir de leurs adresses de sous-réseaux :

- ov1-segment : 192.168.1.0/24.
- ov2-segment : 192.168.2.0/24.

Au travers de l'interface **NSX-T** sélectionnez l'onglet `Security`{.action} cliquez sur `Distributed Firewall`{.action} dans la barre de menu verticale à gauche et cliquez sur `+ ADD POLICY`{.action}.

![01 go to distributed firewall security01](images/01-goto-distributed-firewall-security01.png){.thumbnail}

Positionnez-vous sur l'onglet `Category Specific Rules`{.action} et cliquez sur `ADD POLICY`{.action}.

![02 Configure policy 01](images/02-configure-policy01.png){.thumbnail}

Dans la colonne **Name** saisissez `ov1 <-> ov2 isolation`{.action}.

![02 Configure policy 02](images/02-configure-policy02.png){.thumbnail}

À gauche de votre stratégie cliquez sur les `trois petits points verticaux`{.action} et choisissez `Add Rule`{.action} dans le menu.

![02 Configure policy 03](images/02-configure-policy03.png){.thumbnail}

Saisissez `drop ov1 -> ov2`{.action} dans la colonne **Name**.

![02 Configure policy 04](images/02-configure-policy04.png){.thumbnail}

Cliquez sur le `stylo`{.action} dans la colonne **Sources**.

![02 Configure policy 05](images/02-configure-policy05.png){.thumbnail}

Choisissez `IP Addresses`{.action}, saisissez `192.168.1.0/24`{.action} qui est le sous-réseau du segment ov1-segment et cliquez sur `APPLY`{.action}.

![02 Configure policy 06](images/02-configure-policy06.png){.thumbnail}

Cliquez sur le `stylo`{.action} dans la colonne **Destinations**.

![02 Configure policy 07](images/02-configure-policy07.png){.thumbnail}

Choisissez `IP Addresses`{.action}, saisissez `192.168.2.0/24`{.action} qui est le sous-réseau du segment ov2-segment et cliquez sur `APPLY`{.action}.

![02 Configure policy 08](images/02-configure-policy08.png){.thumbnail}

Sélectionnez `Drop`{.action} dans la colonne **Action**.

![02 Configure policy 09](images/02-configure-policy09.png){.thumbnail}

Cliquez sur les `trois petits points verticaux`{.action} à gauche de votre stratégie et choisissez `Add Rule`{.action} dans le menu.

![02 Configure policy 10](images/02-configure-policy10.png){.thumbnail}

Saisissez `drop ov2 -> ov1`{.action} dans la colonne **Name**.

![02 Configure policy 11](images/02-configure-policy11.png){.thumbnail}

Cliquez sur le `stylo`{.action} dans la colonne **Sources**.

![02 Configure policy 12](images/02-configure-policy12.png){.thumbnail}

Choisissez `IP Addresses`{.action}, saisissez `192.168.2.0/24`{.action} qui est le sous-réseau du segment ov2-segment et cliquez sur `APPLY`{.action}.

![02 Configure policy 13](images/02-configure-policy13.png){.thumbnail}

Cliquez sur le `stylo`{.action} dans la colonne **Destinations**.

![02 Configure policy 14](images/02-configure-policy14.png){.thumbnail}

Choisissez `IP Addresses`{.action}, saisissez `192.168.1.0/24`{.action} qui est le sous-réseau du segment ov1-segment et cliquez sur `APPLY`{.action}.

![02 Configure policy 15](images/02-configure-policy15.png){.thumbnail}

Sélectionnez `Drop`{.action} dans la colonne **Action**.

![02 Configure policy 16](images/02-configure-policy16.png){.thumbnail}

Cliquez sur `PUBLISH`{.action} pour activer la règle.

![02 Configure policy 16](images/02-configure-policy17.png){.thumbnail}

Dans la colonne **Action** un rond vert avec *Success* indique que la règle est active. la communication entre les deux segments ne sera plus possible.

![02 Configure policy 18](images/02-configure-policy18.png){.thumbnail}

## Aller plus loin

[Premiers pas avec NSX-T](https://docs.ovh.com/fr/private-cloud/nsx-t-first-steps/)

[Gestion des segment dans NSX-T](https://docs.ovh.com/fr/nsx-t-segment-management/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.

