---
title: Tester la perte temporaire d'un hôte via l'activation du mode résilience
excerpt: Découvrez comment tester la perte temporaire d'un hôte avec le mode résilience sur votre infrastructure Hosted Private Cloud OVHcloud
---

## Objectif

Si vous souhaitez réaliser un test de résilience sur votre infrastructure Hosted Private Cloud OVHcloud permet de simuler la perte temporaire d'un host afin de valider la continuité d'activité de votre production en cas d'incident.

**Découvrez comment tester la perte temporaire d'un hôte avec le mode résilience sur votre infrastructure Hosted Private Cloud OVHcloud**

## Prérequis

- Disposer d'une offre [Hosted Private cloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/){.external}.
- Être connecté à [l'espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

## En pratique

Cette opération s'effectue depuis les APIs OVHcloud et aura pour effet de couper l'accessibilité au réseau pour le host sélectionné puis sa désactivation pour une durée définie préalablement (min:10min, max:24h, default:1h).

Ce test est indépendant du système de surveillance évitant ainsi le remplacement automatique du host.

Les VMs seront ainsi mises hors tension et la migration puis le redémarrage vers le ou les hosts restant(s) seront opérés par vSphere HA si la fonctionnalité est correctement configuré sur votre cluster.

Pour plus d'information concernant vSphere HA vous pouvez consulter la documentation VMware «[Fonctionnement de vSphere HA](https://docs.vmware.com/fr/VMware-vSphere/7.0/com.vmware.vsphere.avail.doc/GUID-33A65FF7-DA22-4DC5-8B18-5A7F97CCA536.html)».

Vous pourrez ainsi estimer le temps de reprise d'activité à partir du lancement du test et la simulation de l'incident (RTO) jusqu'au redémarrage des VMs.

Voici les appels à exécuter afin de lister et obtenir les identifiants de votre infrastructure, de votre datacentre et de l'hôte sur lesquels nous souhaitons réaliser ce test :

Pour récupérer le nom de votre infrastructure : (pcc-xx-xx-xx) :

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud

Pour récupérer l'identifiant de votre datacentre :

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter

Et enfin pour récupérer l'identifiant de votre hôte :

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host

Une fois que vous avez ces informations, afin de valider que vous pouvez lancer l'action, vous pouvez utiliser l'appel suivant qui va valider les conditions de réalisation du test et ainsi éviter toute perte d'activité :

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resilience/canBeEnabled

Si le test est réalisable le résultat est : true.

Pour lancer le test, vous pouvez utiliser l'appel suivant :

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resilience/enable

L'hôte sera alors déconnecté et passera en mode "Pas de réponse" jusqu'à la fin du test :

![vsphere](images/resilience_mode.png){.thumbnail}

Vous pouvez vérifier le statut de l'action, à l'aide de l'appel suivant :

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resilience

Si le test a bien été lancé sur le host, le résultat sera alors : enabled.

Si nécessaire, vous pouvez également stopper le test avant la durée choisie à l'aide de cet appel :

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resilience/disable

Parmi les informations renvoyées on retrouvera la planification de la tâche "updateHostResilienceOff".

La connectivité de l'hôte sera rétablie à la fin du test et votre infrastructure HPC retrouvera ses conditions normales d'utilisation.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
