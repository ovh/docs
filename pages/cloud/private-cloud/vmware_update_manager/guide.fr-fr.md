---
title: VMware Update Manager
slug: vmware-update-manager
excerpt: Utilisez l'outil de VMware pour maintenir à jour vos hôtes
legacy_guide_number: '2163146'
section: Fonctionnalités VMware vSphere
order: 11
---

**Dernière mise à jour le 09/12/2021**

## Objectif

Le gestionnaire de mises à jour de VMware permet de maintenir vos hôtes à jour en installant les *Bug Fixes* et Patchs de sécurité, sans intervention de nos équipes.     

> [!primary]
> Les mises à jour de vCenter ou les mises à jours majeures nécessitent toujours notre participation.

**Ce guide explique le fonctionnement de cet outil**

## Prérequis

- Être contact administrateur du [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), pour recevoir des identifiants de connexion.
- Avoir un identifiant utilisateur actif avec les droits spécifiques pour NSX (créé dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr))

## En pratique

### Mode de maintenance

Avant de travailler sur un hôte, vous devez le mettre en mode de maintenance.    
En effet, patcher entraîne la plupart du temps un redémarrage de l'hôte et cela limitera l'impact sur vos VMs de production. 

Dans le menu de l'interface vSphere, rendez-vous dans le tableau de bord `Hôtes et clusters`{.action}.

![Maintenance](images/en01menu.png){.thumbnail}

Sur la gauche de l'écran, faites un clic-droit sur votre hôte. Dans la section `Mode de maintenance`{.action}, selectionnez `Passer en mode de maintenance`{.action}.

![Maintenance](images/en02maintenance.png){.thumbnail}

Assurez-vous que la case est cochée à l'étape suivante puis cliquez sur `OK`{.action}.

![Maintenance](images/en03enter.png){.thumbnail}

En supposant que DRS est actif, vos VMs de production seront migrées vers un autre hôte.

> [!primary]
> Si vous avez personnalisé votre environnement, vous pourriez avoir à effectuer manuellement les migrations des VMs.
>

L'avertissement suivant peut apparaître :     

![Maintenance](images/en04warning.png){.thumbnail}

Votre hôte est alors en mode de maintenance.

![Maintenance](images/en05maintenanced.png){.thumbnail}

### Mises à jour

Selectionnez votre hôte et rendez-vous dans la section `Mises à jour`{.action}.
Vous voyez les différents statuts de base et la conformité de l'hôte.     

Vous allez devoir appliquer une « ligne de base » pour vérifier la conformité.

![Update](images/en06summary.png){.thumbnail}

Dans la section `Lignes de base attachées`, cliquez sur `Attacher`{.action} puis `Attacher une ligne de base ou un groupe de...`{.action}.

![Update](images/en07attach.png){.thumbnail}

Il existe des lignes de bases prédéfinies pour les différents niveau de correctifs recommandés.

> [!primary]
> Dans notre exemple, nous utilisons les correctifs critiques mais vous pouvez utiliser les deux lignes existantes ou en créer d'autres à votre convenance pour couvrir les différents besoins de votre environnement.
>

Sélectionnez la ligne de base requise puis cliquez sur `Attacher`{.action}.

![Update](images/en08define.png){.thumbnail}

Le résumé de conformité se met alors à jour.     

![Update](images/en09noncompliant.png){.thumbnail}

Retournez dans la section `Lignes de base attachées`, sélectionnez toutes les lignes de bases assignées et cliquez sur `Transfert intermédiaire`{.action}.

![Update](images/en10bisstage.png){.thumbnail}

Sélectionnez l'hôte et cliquez à nouveau sur `Transfert intermédiaire`{.action}.

![Update](images/en10terstagea.png){.thumbnail}

Le processus de transfert démarre et durera en fonction du nombre et de la taille des correctifs.

![Update](images/en10terstage.png){.thumbnail}

Toujours dans la section `Lignes de base attachées`, sélectionnez toutes les lignes de bases assignées et cliquez sur `Corriger`{.action}.

![Update](images/en10remediate.png){.thumbnail}

Sélectionnez l'hôte et cliquez à nouveau sur `Corriger`{.action}.

![Update](images/en11remediate.png){.thumbnail}

Le processus de mise à jour démarre et durera en fonction du nombre et de la taille des correctifs appliqués.<br>
Si nécessaire, votre hôte sera redémarré automatiquement.

![Update](images/en12remediating.png){.thumbnail}

A la fin du processus, la vérification de conformité sera relancée (ou elle peut etre forcée en cliquant sur le lien) et une coche verte devrait apparaître.

![Update](images/en13compliant.png){.thumbnail}

Votre hôte est maintenant à jour.    

N'oubliez pas de le sortir du mode de maintenance et il sera de retour en production.

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
