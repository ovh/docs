---
title: VMware Update Manager
slug: vmware-update-manager
excerpt: Utiliser l'outil de VMware pour tenir à jour vos hôtes.
legacy_guide_number: '2163146'
space_key: VS
space_name: vSphere as a Service
section: Fonctionnalités VMware vSphere
order: 09
---

**Dernière mise à jour le 23/11/2021**

## Objectif

Le gestionnaire de mises à jour de VMware permet de maintenir vos hôtes à jour en installant les Bug Fixes et Patch de Sécurité sans intervention de nos équipes.
*Les mises à jours de vCenter ou les mises à jours majeures nécessitent toujours notre présence*

**Ce guide explique le fonctionnement de cet outil**

## Prérequis

- Être contact administrateur du [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), pour recevoir des identifiants de connexion.
- Avoir un identifiant utilisateur actif avec les droits spécifiques pour NSX (créé dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr))


## En pratique

### Mode de Maintenance

Avant de travailler sur un hôte, vous devez le mettre en mode de maintenance.    
En effet, patcher entraine un redémarrage de l'hôte la plupart du temps et cela limitera l'impact sur vos VMs de production.    
Donc, dans votre menu de l'interface vSphere, allez dans le tableau de bord `Hôtes et clusters`{.action}.

![Maintenance](images/en01menu.png){.thumbnail}


Sur la gauche de l'écran, trouvez votre hôte et cliquez dessus avec le bouton droit.    
Dans la section `Mode de maintenance`{.action}, selectionnez `Passer en mode de maintenance`{.action}.

![Maintenance](images/en02maintenance.png){.thumbnail}


Assurez-vous que la case est cochée dans l'écran suivant puis cliquez sur `OK`{.action}.

![Maintenance](images/en03enter.png){.thumbnail}


En supposant que DRS est actif, vos VMs de production seront migrées vers un autre hôte.    
*Si vous avez personnalisé votre environnement, vous pourriez devoir effectuer manuellement les migrations des VMs*
L'avertissement suivant peut apparaitre.     

![Maintenance](images/en04warning.png){.thumbnail}


Votre hôte est désormais en mode de maintenance.

![Maintenance](images/en05maintenanced.png){.thumbnail}



### Mises à jour

Selectionnez votre hôte et allez dans la section `Mises à jour`{.action}.   
Vous voyez les différents statuts de base et la conformité de l'hôte.     
Avant de se réjouir, vous allez devoir appliquer une ligne de base pour vérifier la conformité.

![Update](images/en06summary.png){.thumbnail}


Dans la section Lignes de base attachées, cliquez sur `Attacher`{.action} puis `Attacher une ligne de base ou un groupe de...`{.action}.

![Update](images/en07attach.png){.thumbnail}

Il existe des lignes de bases prédéfinies pour les différents niveau de correctifs recommandés.    
*Nous utilisons les correctifs critiques dans notre exemple mais vous pouvez utiliser les deux lignes existantes ou en créer d'autres à votre convenance pour couvrir les différents besoins de votre environement*       
Sélectionnez la ligne de base requise puis cliquez sur `Attacher`{.action}

![Update](images/en08define.png){.thumbnail}

Maintenant, le résumé de conformité nous raconte une nouvelle histoire.     

![Update](images/en09noncompliant.png){.thumbnail}


Retournez dans la section Lignes de base attachées, sélectionnez toutes les lignes de bases assignées et cliquez sur `Corriger`{.action}.

![Update](images/en10remediate.png){.thumbnail}


Sélectionnez l'hôte et cliquer encore sur `Corriger`{.action} again.

![Update](images/en11remediate.png){.thumbnail}


Le processus de mise à jour démarre et durera en fonction du nombre et de la taille des correctifs appliqués. Votre hôte sera redémarré automatiquement si nécessaire.

![Update](images/en12remediating.png){.thumbnail}


A la fin du processus, la vérification de conformité sera relancée (ou elle peut etre forcée en cliquant sur le lien) et une coche verte devrait apparaitre.

![Update](images/en13compliant.png){.thumbnail}

Votre hôte est maintenant à jour.    
N'oubliez pas de le sortir du mode de maintenance et il sera de retour en production.

Bravo et merci!

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
