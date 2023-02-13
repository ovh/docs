---
title: Mise en place du NAT pour des redirections de ports
slug: nsx-t-manage-distributed-firewall
excerpt: Comment configurer le NAT pour créer une redirection de port
section: NSX-T
order: 07
---

**Dernière mise à jour le 13/02/2023**

> [!warning]
> Les guides concernant NSX-T dans la solution Hosted Private Cloud Powered by VMware ne sont pas définitifs, ils seront modifiés lors de la sortie en version BETA et finalisés quand la version définitive sera prête. 
>

## Objectif

**Comment configurer le NAT pour créer une redirection de port avec NSX-T**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Prérequis

- Être contact administrateur du [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), celui-ci recevant les identifiants de connexion.
- Avoir un identifiant utilisateur actif avec les droits spécifiques pour NSX-T (créé dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr))
- Avoir **NSX-T** déployé avec deux segment configurés dans votre configuration NSX-T, vous pouvez vous aider de ce guide [Gestion des segments dans NSX-T](https://docs.ovh.com/fr/private-cloud/nsx-t-segment-management).
- Avoir une machine virtuelle sous linux avec OpenSSH activé sur le port 22


## En pratique

Nous allons créer une règle de redirection depuis l'adresse IP virtuelle publique sur le port 2222 en TCP vers une machine virtuelle sous LINUX sur le port 22 en TCP. Dans notre exemple nous allons utiliser des adresses IP fictives.

Depuis l'interface NSX-T allez sur l'onglet `Networking`{.action}, Sélectionnez `NAT`{.action} dans la rubrique **Network Services** sélectionnez sur `ovh-T0-gw`{.action} à droite de **Gateway** et cliquez sur `ADD NAT RULE`{.action}.

![01 Create DNAT rule 01](images/01-create-dnat-rules01.png){.thumbnail}

Choisissez ces informations

* **Action** : Séléctionnez `DNAT`{.action}.
* **Source IP** : Saisissez l'adresse IP ou l'étendue des adresses qui pourront utiliser cette redirection.
* **Destination IP** : Adresse IP virtuelle publique de NSX-T.
* **Destination PORT** : Port d'écoute sur l'adresse publique comme `2222`{.action}.
* **Translated IP** : Adresse IP de la machine virtuelle sur lequel la redirection est faites.

Ensuite cliquez sur les `points de suspensions verticaux`{.action} à droite de **Select Services**.

![01 Create DNAT rule 02](images/01-create-dnat-rules02.png){.thumbnail}

Saisissez `SSH22`{.action} sous la colonne **Name** et cliquez sur `Set`{.action} sous la colonne **Service Entry**.

![01 Create DNAT rule 03](images/01-create-dnat-rules03.png){.thumbnail}

Cliquez sur `ADD SERVICE ENTRY`{.action}.

![01 Create DNAT rule 04](images/01-create-dnat-rules04.png){.thumbnail}

Remplissez ces valeurs :

* **Name** : Saisissez `SSH22`{.action}.
* **Service Type** : Prenez `TCP`{.action}.
* **Source Ports** : Ecrivez le nombre `22`{.action}.

Ensuite cliquez sur `APPLY`{.action}.

![01 Create DNAT rule 05](images/01-create-dnat-rules05.png){.thumbnail}

Cliquez sur `SAVE`{.action}.

![01 Create DNAT rule 06](images/01-create-dnat-rules06.png){.thumbnail}

Cliquez sur `SAVE`{.action} pour valider la création de la règle de redirection.

![01 Create DNAT rule 07](images/01-create-dnat-rules07.png){.thumbnail}

La règle est créée et active. 

![01 Create DNAT rule 08](images/01-create-dnat-rules07.png){.thumbnail}


## Aller plus loin

[Premiers pas avec NSX-T](https://docs.ovh.com/fr/private-cloud/nsx-t-first-steps/)

[Gestion des segment dans NSX-T](https://docs.ovh.com/fr/nsx-t-segment-management/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.

