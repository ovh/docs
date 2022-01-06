---
title: 'Basculer une IP Fail Over'
slug: basculer-une-ip-fail-over
legacy_guide_number: 1890
section: 'Réseau'
order: 12
---

**Dernière mise à jour le 21/02/2020**

## Objectif

Ce guide vous explique comment basculer une IP Failover d'une instance à une autre. Cette opération peut avoir plusieurs applications, permettant généralement de limiter ou de supprimer les éventuels cas d'indisponibilité de service :

- basculer sur un site dans sa "nouvelle version" ;
- faire tourner votre production sur un serveur répliqué pendant que vous faites une maintenance, une mise à jour, sur le serveur de production.


## Prérequis
- Au moins deux instances Public Cloud démarrées
- Une IP Failover
- Être connecté à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## En pratique 

### Migration de l'IP Fail Over

Tout d’abord, connectez-vous à l’[Espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), accédez à la section `Public Cloud`{.action} et sélectionnez le service Public Cloud concerné. Sélectionnez ensuite Failover IP dans la partie **Network** .
Dans notre exemple, une IP failover est routée vers "Instance_A" et nous voulons la rediriger vers "Instance_B".

![migrating failover ip](images/failover2022.png){.thumbnail}

Cliquez sur les 3 points à droite de l’IP failover, puis sur `Modifier l’instance associée`{.action}.

![migrating failover ip](images/modify1.2022.png){.thumbnail}

Cliquez sur la case à côté du serveur de destination.

![migrating failover ip](images/modify1.png){.thumbnail}

- Cliquez sur `Associer`{.action}.

- Après quelques secondes, votre espace client sera mis à jour et le message suivant s’affichera, confirmant que la migration a été effectuée avec succès :

![migrating failover ip](images/modify2.2022.png){.thumbnail}



> [!success]
>
> L'IP Fail Over peut être configurée sur le serveur de destination avant
> d'effectuer le basculement, ou après bien sûr. Si elle est pré-configurée,
> elle se met à répondre dès que l'opération de routage est terminée.
> 

## Aller plus loin

[Configurer une IP fail-over](https://docs.ovh.com/fr/public-cloud/configurer_une_ip_failover/)

[Importer une IP Fail Over](https://docs.ovh.com/fr/public-cloud/importer-une-ip-fail-over/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
