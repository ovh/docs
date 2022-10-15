---
title: Les questions fréquentes concernant le NAS
slug: nas/faq
excerpt: Une question sur le NAS ? Voici les questions les plus fréquemment posées.
section: NAS
order: 02
---

**Dernière mise à jour le 09/09/2021**

## L'offre

### Peut-on gérer le NAS-HA via un espace de configuration ?

Oui, cet espace est accessible depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), rubrique `Bare Metal Cloud`{.action} puis `NAS et CDN`{.action}.

### Est-il possible d'augmenter la capacité totale de mon NAS ?

Il n'est pas possible d'augmenter la capacité d'un NAS-HA une fois celui-ci commandé. Pour augmenter votre capacité de stockage, vous devrez migrer vos données sur un second NAS de plus grande capacité.

### Quelles sont les capacités de stockage disponibles ?

Nous proposons les capacités de stockage suivantes :

- 3 To;
- 6 To;
- 9 To;
- 18 To;
- 36 To;

Les capacités de stockage proposées sont les capacités utilisables.

### Les ressources de mon NAS-HA me sont-elles dédiées ?

Les disques de votre NAS-HA vous sont dédiés. Les autres ressources de la machine sont partagées (RAM, CPU, Bande Passante).

**Cas particulier :** si vous souscrivez à l'offre 36 To, l'ensemble des ressources du serveur hôte vous sont dédiées (RAM, CPU, Bande Passante).

### Pour quelle durée puis-je souscrire à un NAS-HA ?

Les périodes proposées sont de 1, 3, 6 et 12 mois. À la fin de votre période d'engagement, votre abonnement est reconduit tacitement si aucune demande de résiliation n'a été formulée. Celle-ci peut être effectuée durant toute la durée de votre abonnement via votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

## Usage du produit

### Le NAS-HA peut-il être connecté à plusieurs serveurs en même temps ?

Oui. Il est possible de faire interagir simultanément votre NAS avec plusieurs services OVHcloud.

### Peut-on installer un système d’exploitation sur un NAS-HA ?

Non, il n'est pas possible d'installer un OS sur les offres NAS-HA.

### Quels sont les protocoles compatibles avec l'offre NAS-HA ?

Le NAS-HA peut être monté sur un serveur Windows ou Linux via les protocoles CIFS (Samba) ou NFS.

### L'espace alloué est-il partitionnable ?

Oui, il est nécessaire de créer une ou plusieurs partitions selon votre utilisation. La création de partition n'est pas limitée.

## Compatibilité du produit

### Le NAS-HA est-il compatible avec d'autres serveurs en dehors d'OVHcloud ?

Non, il n’est possible d'accéder à votre NAS-HA que depuis le réseau OVHcloud.

### Par quel(s) service(s) le NAS-HA est-il accessible ?

Le service est accessible depuis l'ensemble des produits OVHcloud disposant d'une distribution : les serveurs dédiés (OVHcloud, So you Start, Kimsufi), le Hosted Private Cloud, le Public Cloud et le VPS.

### Comment gère-t-on les accès au NAS-HA ?

La liste des contrôles d'accès (ACL) est configurable depuis votre espace client OVHcloud. Il vous suffit simplement de saisir l'adresse IP du service auquel vous souhaitez autoriser l'accès au NAS-HA.

### Le NAS-HA est-il éligible à l'offre vRack ?

Actuellement, le NAS-HA ne peut pas être intégré dans le réseau privé du vRack. Cependant, l'utilisation du NAS-HA et du vRack ne sont pas incompatibles en passant par le chemin IP public du serveur connecté au vRack.

## Débits

### Le taux de transfert et de disponibilité est-il garanti ?

- Transfert : la bande passante du service est mutualisée. Les taux de transfert ne peuvent être garantis par OVHcloud.
- Disponibilité : la disponibilité du service est garantie et sujette à un accord de niveau de service. Les détails sont consultables dans nos conditions spécifiques d'utilisation.

## Snapshots

### Que sont les snapshots ?

Les snapshots sont des images instantanées de l’état de votre disque et des données qui y sont stockées à un instant donné. La configuration et la gestion des snapshots sont réalisables depuis votre espace client OVHcloud.

Par défaut, la fonction snapshot est activée lors de la création de votre partition, la fréquence est préréglée sur « toutes les heures ».

### Quelle est la fréquence des snapshots ?

La fréquence des snapshots est administrable depuis votre espace client OVHcmpid. Vous pouvez choisir la fréquence parmi les options suivantes :

- toutes les heures (par défaut) ;
- toutes les 6 heures ;
- tous les jours ;
- tous les deux jours ;
- tous les trois jours ;
- hebdomadaire.

Vous pouvez aussi, à tout moment, créer des snapshots manuels, les conserver sans limitation de durée ou les supprimer. Cette fonctionnalité est disponible au sein de votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) ou via l'[API](https://api.ovh.com/):

> [!api]
>
> @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
>

### Comment fonctionne le système de gestion des snapshots ?

Vous pouvez configurer des snapshots automatiques, à différentes fréquences disponibles. Quelle que soit la fréquence paramétrée, le dernier snapshot effectué remplacera et écrasera toujours le précédent. Vous pouvez également créer et supprimer des snapshots à la demande.

### Peut-on supprimer un snapshot ?

Seuls les snapshots créés « à la demande » peuvent être supprimés (voir la question précédente « Quelle est la fréquence des snapshots ? »). Les snapshots à fréquence fixe sont automatiquement supprimés, sans possibilité de les supprimer manuellement.

### Quel est l'espace occupé par les snapshots sur un NAS-HA ?

La capacité utilisée par un snapshot est variable en fonction des actions effectuées dans le laps de temps séparant deux snapshots.

À partir du moment où vous déclenchez le snapshot, toutes les actions effectuées sur la partition concernée seront stockées dans ce snapshot et augmenteront la taille du fichier.

### Combien de snapshots puis-je réaliser au maximum ?

- Pour les snapshots automatiques : un par partition
- Pour les snapshots manuels : dix par partitions

### Où puis-je récupérer mes snapshots ?

Dans la partition concernée : répertoire caché appelé `.zfs` → répertoire `snapshots` . Fichiers disponibles en read only.

### OVHcloud réalise-t-il également des sauvegardes de mes données ?

Oui, une sauvegarde interne est réalisée quotidiennement. Celle-ci génère un snapshot de plus. Cette sauvegarde n'est pas désactivable par le client.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com).
