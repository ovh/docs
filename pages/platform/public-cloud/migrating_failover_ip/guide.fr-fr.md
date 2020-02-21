---
title: 'Basculer une IP Fail Over'
slug: basculer-une-ip-fail-over
legacy_guide_number: 1890
section: 'Base de connaissances'
---

## Objectif

Ce guide vous explique comment basculer une IP Failover d'une instance à une autre. Cette opération peut avoir plusieurs applications, permettant généralement de limiter ou de supprimer les éventuels cas d'indisponibilité de service :

- basculer sur un site dans sa "nouvelle version" ;
- faire tourner votre production sur un serveur répliqué pendant que vous faites une maintenance, une mise à jour, sur le serveur de production.


## Prérequis
- Au moins deux instances Public Cloud démarrées
- Une IP Failover

## En pratique 

### Migration de l'IP Fail Over

Tout d’abord, cliquez sur la section IP Failover sous la rubrique Network dans le menu de gauche de votre espace client Public Cloud OVHcloud. Vous verrez alors que l’IP failover est acheminée vers l’instance_A et nous voulons la rediriger vers l’instance_B.

![migrating failover ip](images/failover.png){.thumbnail}

Cliquez sur les 3 points à droite de l’IP failover, puis sur `Modifier l’instance associée`{.action}.

![migrating failover ip](images/modify.png){.thumbnail}

Cliquez sur la case à côté du serveur de destination.

![migrating failover ip](images/modify1.png){.thumbnail}

- Cliquez sur Joindre

- Après quelques secondes, votre espace client sera mis à jour et le message suivant s’affichera, confirmant que la migration a été effectuée avec succès :

![migrating failover ip](images/modify2.png){.thumbnail}



> [!success]
>
> L'IP Fail Over peut être configurée sur le serveur de destination avant
> d'effectuer le basculement, ou après bien sûr. Si elle est pré-configurée,
> elle se met à répondre dès que l'opération de routage est terminée.
> 

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.