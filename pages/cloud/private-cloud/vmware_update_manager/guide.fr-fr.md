---
title: VMware Update Manager
slug: vmware-update-manager
legacy_guide_number: '2163146'
space_key: VS
space_name: vSphere as a Service
section: Fonctionnalités VMware vSphere
---


Avec l'outil de VMware en l'occurrence **Update Manager** vous pouvez mettre à jour (patch de sécurité et critique) vos hôtes sans intervention de nos équipes. (Une mise à jour du vCenter ou majeure de votre hôte requiert une opération de notre part)

En premier lieu je vous invite à mettre votre hôte en mode **maintenance**, les machines virtuelles enregistrés seront automatiquement transférés sur un autre hôte de votre **Cluster**.

![](images/Update13.png){.thumbnail}

Le plugin **Update Manager** est actuellement disponible pour le client Lourd en l'occurrence sélectionnez votre hôte et dirigez-vous dans l'onglet "Update Manager" et cliquez sur **Scan**..

![](images/Update.png){.thumbnail}

Cochez les options suivantes et lancez le **Scan**

- Patches and Extensions
- Upgrades

Lorsque l'opération est terminée je vous invite à cliquer sur l'option "**Attach**" en haute à droite de la page principale de l'**Update Manager**.

![](images/Update1.png){.thumbnail}

Sélectionnez les mises à jours critiques et non critique pour votre hôte et enfin cliquez de nouveau sur **Attach**.

![](images/Upgrade2.png){.thumbnail}

Nous apercevons dans le menu du bas le nombre de patch à appliquer, Cliquez maintenant sur **Stage** pour télécharger les mises à jour sur votre hôte.

![](images/Upgrade3.png){.thumbnail}

Maintenant Il suffit de suivre les opérations en cliquant sur **Next**

![](images/Upgrade4.png){.thumbnail}

Attention au listing des Updates, surtout **ne pas cocher** la mise à jour du **CiscoNexus1000v** car c'est OVH qui gère ce module vDS et en cas d'update automatique vous risquez une isolation réseau de votre hôte.

![](images/Update5.png){.thumbnail}

Voici le récapitulatif des **patches**.

![](images/Upgrade6.png){.thumbnail}

Le téléchargement des **mises à jours**sont en cours sur votre hôte.

![](images/Upgrade7.png){.thumbnail}

Lorsque ce téléchargement est terminé, appuyez sur "**Remediate**" en bas à droite de la page principale de l'**update manager**.

Sélectionnez de nouveau les mises à jours en vérifiant que le patche **Cisco Nexus1000v** n'est pas dans cette liste.

![](images/Update8.png){.thumbnail}

Cette page vous permet de nommer le nom de la tâche pour les logs vSphere ou encore de planifier la date de la mise à jour.

![](images/Update9.png){.thumbnail}

Je vous conseil de cocher les options suivantes.

- Disable High Availability admission control if it is enabled for any of the selected clusters.
- Migration powered off and suspended virtual machines to other hosts in the cluster, if a host must enter maintenance mode.

Sachant que pour la deuxième option, en suivant ce guide vous avez normalement déjà mis votre hôte en **mode maintenance**.

![](images/Update11.png){.thumbnail}

Cliquez sur **Finish**pour lancer la mise à jour.

![](images/Update12.png){.thumbnail}

La mise à jour est en cours sur votre **hôte**, cela prends moins de 5 minutes.

![](images/Update14.png){.thumbnail}

Votre hôte **redémarre** (si pre-requis au niveau de l'update) lorsqu'il répond de nouveau dans votre **Cluster** vous pouvez le sortir du **mode maintenance**, vérifiez aussi dans les **options** de votre **Cluster** que **HA** (High Availability) est bien activée.

![](images/Upgrade16.png){.thumbnail}

Suite à cette **mise à jour**, je vous invite à réaliser des tests en migrant une machine virtuelle sur celui-ci et vérifiez la **connectivité réseau** depuis le réseau **Wan** et **Local**.

Attention La mise à jour de votre**vCenter** doit être réalisé par **OVH** par le biais d'une de la création d'un **ticket** depuis votre [manager](https://www.ovh.com/manager/dedicated/login/){.external-link}.
