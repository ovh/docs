---
title: Mise en place du NAT pour des redirections de ports avec NSX
slug: nsx-configure-nat-redirection
excerpt: Découvrez comment configurer le NAT pour créer une redirection de port
section: NSX
order: 07
updated: 2023-02-27
---

**Dernière mise à jour le 27/02/2023**

## Objectif

**Découvrez comment configurer le NAT pour créer une redirection de port avec NSX.**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Prérequis

- Être contact administrateur de l'infrastructure [Hosted Private Cloud powered by VMware](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), celui-ci recevant les identifiants de connexion.
- Avoir un identifiant utilisateur actif avec les droits spécifiques pour NSX (créé dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr))
- Avoir **NSX** déployé avec deux segments configurés dans votre configuration NSX. Consultez notre guide sur la [gestion des segments dans NSX](https://docs.ovh.com/fr/private-cloud/nsx-segment-management) pour plus d'informations.
- Avoir une machine virtuelle sous Linux avec OpenSSH activé sur le port 22.

## En pratique

Lors du déploiement de votre solution NSX, une règle de SNAT est automatiquement créée par OVHcloud pour pouvoir sortir sur Internet depuis vos segments.

Nous allons rajouter une règle de redirection (DNAT) depuis l'adresse IP virtuelle publique sur le port 2222 en TCP vers une machine virtuelle sous LINUX sur le port 22 en TCP. Dans notre exemple, nous allons utiliser des adresses IP fictives.

Depuis l'interface NSX, allez sur l'onglet `Networking`{.action}, sélectionnez `NAT`{.action} dans la rubrique **Network Services**. Sélectionnez `ovh-T0-gw | Tier-0`{.action} à droite de **Gateway** et cliquez sur `ADD NAT RULE`{.action}.

![01 Create DNAT rule 01](images/01-create-dnat-rules01.png){.thumbnail}

Renseignez ces informations :

- **Action** : sélectionnez `DNAT`{.action}.
- **Source IP** : saisissez l'adresse IP ou l'étendue des adresses qui pourront utiliser cette redirection.
- **Destination IP** : sdresse IP virtuelle publique de NSX.
- **Destination PORT** : port d'écoute sur l'adresse publique, tel que `2222`.
- **Translated IP** : adresse IP de la machine virtuelle sur laquelle la redirection est faite.

Cliquez ensuite sur les `trois points verticaux`{.action} à droite de **Select Services**.

![01 Create DNAT rule 02](images/01-create-dnat-rules02.png){.thumbnail}

Saisissez `SSH22`{.action} sous la colonne **Name** et cliquez sur `Set`{.action} sous la colonne **Service Entry**.

![01 Create DNAT rule 03](images/01-create-dnat-rules03.png){.thumbnail}

Cliquez sur `ADD SERVICE ENTRY`{.action}.

![01 Create DNAT rule 04](images/01-create-dnat-rules04.png){.thumbnail}

Renseignez ces valeurs :

- **Name** : saisissez `SSH22`.
- **Service Type** : sélectionnez `TCP`{.action}.
- **Source Ports** : écrivez le nombre `22`.

Cliquez ensuite sur `APPLY`{.action}.

![01 Create DNAT rule 05](images/01-create-dnat-rules05.png){.thumbnail}

Cliquez sur `SAVE`{.action}.

![01 Create DNAT rule 06](images/01-create-dnat-rules06.png){.thumbnail}

Cliquez à nouveau sur `SAVE`{.action} pour valider la création de la règle de redirection.

![01 Create DNAT rule 07](images/01-create-dnat-rules07.png){.thumbnail}

La règle est créée et est active. 

![01 Create DNAT rule 08](images/01-create-dnat-rules08.png){.thumbnail}

## Aller plus loin

[Premiers pas avec NSX](https://docs.ovh.com/fr/private-cloud/nsx-first-steps/)

[Gestion des segments dans NSX](https://docs.ovh.com/fr/private-cloud/nsx-segment-management/)

[Documentation VMware sur le NAT dans NSX](https://docs.vmware.com/fr/VMware-NSX-T-Data-Center/3.2/administration/GUID-7AD2C384-4303-4D6C-A44A-DEF45AA18A92.html)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.

