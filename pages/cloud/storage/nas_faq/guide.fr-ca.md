---
title: Les questions fréquentes concernant le service NAS-HA
slug: faq-nas
excerpt: Une question sur le NAS ? Voici les questions les plus fréquemment posées.
section: NAS
order: 02
---

**Dernière mise à jour le 29/07/2022**

## Objectif

**Voici les questions les plus fréquemment posées concernant l'offre NAS-HA OVHcloud.**

## Questions générales

### Qu’est-ce que la solution NAS-HA OVHcloud ?

NAS-HA est un service de stockage fichier partagé et entièrement managé, basé sur la technologie open-source OpenZFS.

### Que puis-je faire avec NAS-HA ?

NAS-HA permet de centraliser les données de différentes charges de travail Linux mais aussi Windows pour de nombreux scénarios :

- stockage partagé et externalisé pour des applications IT (VM, DB…) ;
- gestion de contenus web ; 
- partage de fichiers sur le réseau, etc.

### Peut-on gérer le NAS-HA via un espace de configuration ?

Oui, cet espace est accessible depuis votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc), rubrique `Bare Metal Cloud`{.action} puis `NAS et CDN`{.action}.

## Disponibilité

### Quel SLA est fourni avec NAS-HA ?

NAS-HA est fourni avec un taux de disponibilité de 99,99%.

## Réseau et sécurité

### Quels protocoles de transfert de fichiers sont actuellement supportés sur la solution NAS-HA ?

NAS-HA supporte le transfert de fichiers via NFS (NFSv3) et CIFS (SMB).

### Depuis quels services OVHcloud puis-je pousser des données ?

NAS-HA est un service qui peut recevoir des données depuis l’ensemble des services existants OVHcloud : Bare Metal Cloud (VPS, Serveurs Dédiés OVHcloud, So you Start, Kimsufi), Public Cloud, Hosted Private Cloud, service ADSL/FTTH, etc.

### Comment gère-t-on les accès au NAS-HA ?

La liste des contrôles d'accès (ACL) est configurable depuis votre espace client OVHcloud. Il vous suffit simplement de saisir l'adresse IP du service pour lequel vous souhaitez autoriser l'accès au NAS-HA.

### Le service NAS-HA est-il compatible avec d’autres serveurs en dehors d’OVHcloud ?

Non, il n’est possible d’accéder à votre NAS-HA que depuis le réseau OVHcloud.

### NAS-HA est-il éligible à l’offre vRack ?

Actuellement, le NAS-HA ne peut pas être intégré dans le réseau privé du vRack. Cependant, l’utilisation du NAS-HA et du vRack ne sont pas incompatibles en passant par le chemin IP public du serveur connecté au vRack.

## Capacités et performances

### Quelles sont les capacités de stockage disponibles ?

La taille minimum d’un service est de 3 To et la taille maximum est de 144 To.<br>
Nous proposons les capacités de stockage suivantes sur une base de disques de 3 To :

- 3 To ;
- 6 To ;
- 9 To ;
- 18 To ;
- 36 To ;

Nous proposons les capacités de stockage suivantes sur une base de disques de 12 To :

- 12 To ;
- 24 To ;
- 36 To ;
- 72 To ;
- 144 To ;

Les capacités de stockage proposées sont les capacités utilisables.

### Les ressources de mon NAS-HA me sont-elles dédiées ?

Les disques de votre NAS-HA vous sont dédiés. Les autres ressources de la machine sont partagées (RAM, CPU, Bande Passante).

**Cas particulier :** si vous souscrivez à l'offre 144 To, l'ensemble des ressources du serveur hôte vous sont dédiées (RAM, CPU, Bande Passante).

### Combien de services NAS-HA puis-je créer depuis mon compte client ?

Il n’y a pas de limite de nombre de services par compte client.

### Quel est le nombre de partitions maximum par service ?

Il est possible de créer autant de partitions que vous souhaitez. La taille minimum est de 10 Go et la taille maximum est définie par la taille maximum du service.

### Le taux de transfert et de disponibilité est-il garanti ?

- Transfert : la bande passante du service est mutualisée. Les taux de transfert ne peuvent être garantis par OVHcloud.
- Disponibilité : la disponibilité du service est garantie et sujette à un accord de niveau de service. Les détails sont consultables dans nos conditions spécifiques d’utilisation.

## Usage du produit

### Le NAS-HA peut-il être connecté à plusieurs serveurs en même temps ?

Oui. Il est possible de faire interagir simultanément votre NAS avec plusieurs services OVHcloud.

### Peut-on installer un système d’exploitation sur un NAS-HA ?

Non, il n'est pas possible d'installer un OS sur les offres NAS-HA.

### L'espace alloué est-il partitionnable ?

Oui, il est nécessaire de créer une ou plusieurs partitions selon votre utilisation. La création de partition n'est pas limitée.

## Snapshots

### Que sont les snapshots ?

Les snapshots sont des images instantanées de l’état de votre disque et des données qui y sont stockées à un instant donné. Ils permettent de proposer un premier niveau de sauvegarde. La configuration et la gestion des snapshots sont réalisables depuis votre espace client OVHcloud.

Par défaut, la fonction snapshot est activée lors de la création de votre partition, la fréquence est préréglée sur « toutes les heures ».

### Quelle politique de sauvegarde est associée à NAS-HA ?

Les utilisateurs sont responsables de la gestion de leurs sauvegardes (outils et règles) à l'intérieur ainsi qu'à l'extérieur du service, ainsi que de leurs plans de continuité d'activité et de reprise d'activité. Cependant, pour des raisons de sécurité et de résilience de l’infrastructure, OVHcloud peut effectuer des snapshots du service sur un serveur distant, sans obligation toutefois.

En cas de panne ou d’attaque, si OVHcloud a effectuée un snapshot sur un serveur distant, nous pouvons ainsi restaurer les données du dernier snapshot disponible. Veuillez toutefois noter que cette action s’effectue sur demande et constitue un service optionnel facturé.

### Quelle est la fréquence des snapshots ? <a name="frequency"></a>

La fréquence des snapshots est administrable depuis votre espace client OVHcloud. Vous pouvez choisir la fréquence parmi les options suivantes :

- toutes les heures (par défaut) ;
- toutes les 6 heures ;
- tous les jours ;
- tous les deux jours ;
- tous les trois jours ;
- hebdomadaire.

Vous pouvez aussi, à tout moment, créer des snapshots manuels, les conserver sans limitation de durée ou les supprimer. Cette fonctionnalité est disponible au sein de votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) ou via l'appel [API](https://ca.api.ovh.com/) suivant :

> [!api]
>
> @api {POST} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
>

> [!primary]
> Consultez notre guide « [Premiers pas avec les API OVHcloud](https://docs.ovh.com/ca/fr/api/first-steps-with-ovh-api/) » pour vous familiariser avec l'utilisation des API OVHcloud.
>

### Comment fonctionne le système de gestion des snapshots ?

Vous pouvez configurer des snapshots automatiques, à différentes fréquences disponibles. Quelle que soit la fréquence paramétrée, le dernier snapshot effectué remplacera et écrasera toujours le précédent. Vous pouvez également créer et supprimer des snapshots à la demande.

### Peut-on supprimer un snapshot ?

Seuls les snapshots créés « à la demande » peuvent être supprimés (voir la question précédente « [Quelle est la fréquence des snapshots ?](#frequency) »).<br>
Les snapshots à fréquence fixe sont automatiquement supprimés, sans possibilité de les supprimer manuellement.

### Les snapshots sont-ils compris dans la capacité d’un service ?

Un espace additionnel sur le même support physique vous est alloué pour assurer le stockage de vos snapshots. Cet espace correspond à au moins 15 % du volume principal. Dans le cas où vous le dépasseriez, les snapshots seront stockés sur votre espace de stockage principal. L'espace additionnel ne peut pas être utilisé pour un autre usage que le stockage de vos snapshots.

Par exemple, pour un service de 3 To, 450 Go additionnels sont réservés pour les snapshots.

### Combien de snapshots puis-je réaliser au maximum ?

- Pour les snapshots automatiques : un par partition
- Pour les snapshots manuels : dix par partition

### Où sont stockés les snapshots ?

Les snapshots sont stockés au même niveau que votre service. Les snapshots sont ainsi répliqués sur deux serveurs distincts dans deux racks différents. En complément, OVHcloud effectue un snapshot quotidien sur un site distant.

### Où puis-je récupérer mes snapshots ?

Dans la partition concernée, vous trouverez un répertoire caché appelé `.zfs` qui contient un répertoire `snapshots`. Les fichiers sont disponibles en read only.

### Combien de politiques de snapshots puis-je créer par volume ?

1

## Tarification

### Quel type de tarification est lié au service ?

NAS-HA est un service facturé mensuellement au volume (de 3 à 144 To par paliers).

### Pour quelle durée puis-je souscrire à un NAS-HA ?

Les périodes proposées sont de 1, 12, 24 et 36 mois. À la fin de votre période d’engagement, votre abonnement est reconduit tacitement si aucune [demande de résiliation](https://docs.ovh.com/ca/fr/billing/how-to-cancel-your-services/) n’a été formulée. Celle-ci peut être effectuée pendant toute la durée de votre abonnement via votre espace client OVHcloud.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com).
