---
title: 'Basculer une Additional IP'
slug: basculer-une-ip-fail-over
section: 'Réseau'
order: 12
---

**Dernière mise à jour le 06/01/2022**

> [!primary]
>
> Depuis le 6 octobre 2022, notre solution "IP Failover" s'appelle désormais [Additional IP](https://www.ovhcloud.com/fr-ca/network/additional-ip/). Cela n'a aucun impact sur ses fonctionnalités ou le fonctionnement de vos services.
>

## Objectif

Ce guide vous explique comment basculer une Additional IP d'une instance à une autre. Cette opération peut avoir plusieurs applications, permettant généralement de limiter ou de supprimer les éventuels cas d'indisponibilité de service :

- basculer sur un site dans sa "nouvelle version" ;
- faire tourner votre production sur un serveur répliqué pendant que vous faites une maintenance, une mise à jour, sur le serveur de production.


## Prérequis
- Au moins deux instances Public Cloud démarrées
- Une Additional IP
- Être connecté à l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc)

## En pratique 

> [!primary]
> Une Additional IP ne peut pas être déplacée d'une zone à l'autre. Par exemple, une IP située dans le datacenter SBG pourra être déplacée vers GRA ou RBX mais ne pourra pas être déplacée vers BHS.
>

### Migration de l'Additional IP

Tout d’abord, connectez-vous à l’[Espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc), accédez à la section `Public Cloud`{.action} et sélectionnez le service Public Cloud concerné. Sélectionnez ensuite Additional IP dans la partie **Network** .
Dans notre exemple, une Additional IP est routée vers "Instance_A" et nous voulons la rediriger vers "Instance_B".

![migrating failover ip](images/failover2022.png){.thumbnail}

Cliquez sur les 3 points à droite de l’Additional IP, puis sur `Modifier l’instance associée`{.action}.

![migrating failover ip](images/modify1.2022.png){.thumbnail}

Cliquez sur la case à côté du serveur de destination.

![migrating failover ip](images/modify1.png){.thumbnail}

- Cliquez sur `Associer`{.action}.

- Après quelques secondes, votre espace client sera mis à jour et le message suivant s’affichera, confirmant que la migration a été effectuée avec succès :

![migrating failover ip](images/modify2.2022.png){.thumbnail}



> [!success]
>
> L'Additional IP peut être configurée sur le serveur de destination avant
> d'effectuer le basculement, ou après bien sûr. Si elle est pré-configurée,
> elle se met à répondre dès que l'opération de routage est terminée.
> 

## Aller plus loin

[Configurer une Additional IP](https://docs.ovh.com/ca/fr/public-cloud/configurer_une_ip_failover/)

[Importer une Additional IP](https://docs.ovh.com/ca/fr/public-cloud/importer-une-ip-fail-over/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
