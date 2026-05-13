---
title: Hôte de spare
excerpt: Comprendre le mécanisme de remplacement d'hôte
updated: 2026-05-12
---

## Objectif

OVHcloud garantit dans ses contrats le remplacement d'un hôte inaccessible.

**Ce guide explique le fonctionnement de ce remplacement.**

## Prérequis

- Disposer d'une offre [Hosted Private Cloud](/links/hosted-private-cloud/vmware).

## En pratique

### Livraison d’un hôte de spare

Si l’un de vos hôtes est victime d’une panne, afin d’assurer la continuité de service, nous vous livrons automatiquement un hôte de remplacement gratuit dans votre infrastructure.

Dès que cet hôte est livré, vous recevez un email vous indiquant toutes les informations concernant cet hôte ainsi que son adresse IP vous permettant de le retrouver facilement dans votre interface vSphere.

Par défaut, le service [HA (High Availability)](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_ha_high_availability) de VMware est activé sur votre cluster. Si vous l’avez laissé activé, vos machines virtuelles vont redémarrer automatiquement. Si le service [DRS (Distributed Resource Scheduler)](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_drs_distributed_ressource_scheduler_new) est activé et configuré en mode « Entièrement automatisé », la répartition de charge sur les hôtes de votre cluster sera également effectuée automatiquement.

> [!warning]
> 
> Si un lecteur CD/DVD est encore monté ou connecté sur une VM, le service HA ne pourra pas la redémarrer sur l'hôte de spare. Il est recommandé de toujours avoir le lecteur CD/DVD en périphérique client.
>

### Que faire après avoir reçu l'hôte de spare

Nous vous recommandons de nous rendre l'hôte original afin que nous puissions lui faire subir une batterie de tests suite à cet incident (pour éviter d’éventuelles futures pannes). Vous pourrez alors conserver l'hôte de spare. Pour cela, suivez le guide « [suppression d’un hôte](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/delete_host) ».

> [!warning]
> 
> En cas de non-restitution de l'un des deux hôtes (original ou spare) dans un délai de 7 jours, l'hôte de spare sera facturé à l'heure à compter du 8e jour.
>

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).
