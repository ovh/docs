---
title: VMware Update Manager
excerpt: Updating your hosts with VMware Update Manager 
slug: use_vmware_update_manager
space_name: vSphere as a Service
section: Maintenance and monitoring
order: 09
---

**Last Updated 11/23/2021**

## Objective

VMware Update Manager allows you to keep your hosts up to date by installing Bug Fixes and Security Patches without intervention from our team.     
*vCenter updates or major updates will still require our involvment*

**This guide will present the Update Manager functionalities**

## Requirements

- Be an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/) to receive login credentials
- Have a user account with access to vSphere (created in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB))

## Instructions

### Maintenance Mode

Before working on a host, you'll need to put it in maintenance mode.    
Indeed, patching often requires a restart of the host and would impact your live VMs.    
With that in mind, in the vSphere interface menu, go to the `Hosts and Clusters`{.action} dashboard.

![Maintenance](images/en01menu.png){.thumbnail}

On the left side, find your host and right-click on it.    
In the `Maintenance Mode`{.action} section, select `Enter Maintenance Mode`{.action}.

![Maintenance](images/en02maintenance.png){.thumbnail}

Make sure the box in the following window is checked and click `OK`{.action}.

![Maintenance](images/en03enter.png){.thumbnail}

Assuming DRS is implemented *(it is by default when we deliver the environment)*, any live VM will be moved.     
You mays see the following warning.     
*If you customized your environment, you may have to manually move live VMs from your host before putting it in Maintenance Mode*

![Maintenance](images/en04warning.png){.thumbnail}

Your host is now showing in maintenance mode.

![Maintenance](images/en05maintenanced.png){.thumbnail}

### Update Manager

Vous pouvez retrouver l'onglet `Update Manager` en selectionnant votre cluster.

![](images/Update.png){.thumbnail}

#### Attacher une ligne de base

Dans un premier temps, vous devez attacher les lignes de bases.

Pour cela cliquez sur le bouton `Attacher une ligne de base...`{.action}

![](images/Upgrade2.png){.thumbnail}

#### Rechercher des mises à jour

Les lignes de base étant attachées, vous pouvez à présent cliquer sur le bouton `Rechercher des mises à jour...`{.action}

![](images/Update1.png){.thumbnail}

Cochez les options suivantes et lancez le **Scan** en cliquant sur `Ok`{.action}

- Patches and Extensions
- Upgrades

Une tâche se lancera par la suite :

![](images/Update3.png){.thumbnail}

### Transférer des correctifs

Le **scan** étant terminé il est à présent possible de télécharger les différents correctifs sur l'hôte de votre choix.

> [!primary]
>
> Cette opération sera à effectuer pour chaque hôte.
>

Pour télécharger les mises à jour, cliquez sur le bouton `Transférer des correctifs...`{.action}.

Une nouvelle fenêtre s'ouvrira avec plusieurs étapes.

Renseignez les lignes de base attachées précedemment

![](images/Update4.png){.thumbnail}

Séléctionnez l'hôte sur lequel vous souhaitez appliquer les mises à jour.

![](images/Update5.png){.thumbnail}

Séléctionnez ensuite les mises à jour que vous souhaitez appliquer. Par défaut tout est séléctionné.

![](images/Update6.png){.thumbnail}

Enfin un résumé est disponible. Si tout est conforme, vous pouvez cliquez sur `Terminer`{.action}.

![](images/Update7.png){.thumbnail}

Une tâche se lancera sur le cluster, puis sur l'hôte.

![](images/Update8.png){.thumbnail}

### Corriger

Les correctifs sont à présent téléchargés sur l'hôte, vous pouvez maintenant les appliquer.

> [!primary]
>
> Seul cette étape nécessite le passage en mode maintenance de votre hôte.
> 

Pour appliquer ces correctifs, cliquez sur le bouton `Corriger...`{.action}.

Une nouvelle fenêtre s'ouvrira pour configurer l'application des mises à jour.

A nouveau, renseignez les lignes de base :

![](images/Update9.png){.thumbnail}

Puis l'hôte en mode maintenance sur lequel les mises à jour seront appliquées.

![](images/Update10.png){.thumbnail}

Vous retrouvez ensuite la liste des mises à jour téléchargées à l'étape précédente.

![](images/Update11.png){.thumbnail}

Dans les options avancées, vous pouvez planifier votre application. Si vous laissez décoché, elle s'appliquera immédiatement.

![](images/Update12.png){.thumbnail}

Si vous n'avez pas placé votre hôte en mode maintenance ou si vous planifiez l'application des correctifs à une heure ou date ultérieur, vous pouvez planifier la mise en maintenance à cette étape.

![](images/Update13.png){.thumbnail}

Cette ultime étape permet de désactiver certaines options du cluster et de certaines machines virtuelles pour permettre la bonne exécution des mises à jour.

La désactivation du contrôle d'admission peut être interessante si vous ne disposez pas d'assez de ressources en cas de perte d'un hôte (en plus de celui sur lequel vous appliquez les mises à jour).

Il est simplement necessaire de réactiver ce paramètre en editant [la fonction HA du cluster](https://docs.ovh.com/fr/private-cloud/vmware-ha-high-availability/){.external-link}, une fois les mises à jour appliquées sur les différents hôtes.

![](images/Update14.png){.thumbnail}

Enfin, un résumé sera disponible et si tout est en ordre, vous pourrez cliquez sur `Terminer`{.action} pour lancer l'application des mises à jour et le redémarrage de l'hôte.

![](images/Update15.png){.thumbnail}

Une première tâche se lancera sur le cluster, et en fonction des paramètres choisis, d'autres pourront se lancer également sur le cluster.

Enfin, les tâches d'installation et de redémarrage se lanceront sur l'hôte.

![](images/Update16.png){.thumbnail}

Après quelques minutes, votre hôte sera à jour, vous pourrez le sortir du mode maintenance, et si besoin effectuer ces actions sur un autre hôte.

## Go further

Join our community of users on <https://community.ovh.com/en/>.
