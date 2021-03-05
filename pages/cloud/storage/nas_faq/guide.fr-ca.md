---
title: Les questions fréquentes concernant le NAS
slug: faq-nas
excerpt: Une question sur le NAS? Voici les questions les plus fréquemment posées
section: NAS
---

**Dernière mise à jour le 2017/12/27**

## L'offre

### Que signifie la mention HA lorsque je commande un NAS chez OVH ?
Le sigle HA (ou « High Availability » pour haute disponibilité) signifie qu'OVH s'engage à vous garantir une disponibilité de service élevée. Cette garantie se manifeste par des accords de niveau de service (aussi appelés SLA pour « Service Level Agreements »), contraignant OVH à dédommager ses clients si un incident rendait le service indisponible.

### Dans quel centre de données puis-je souscrire à un NAS-HA?
Vous pouvez souscrire à l'offre NAS-HA dans les centres de données français (Roubaix, Strasbourg, Gravelines) ainsi que dans celui situé au Canada à Beauharnois. Le choix du centre de données se fait au moment de la commande. ATTENTION : une fois le produit commandé, le centre de données ne pourra plus être modifié.

### Peut-on gérer le NAS-HA via un espace de configuration?
Oui, cet espace est accessible depuis votre [espace client OVH](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}, rubrique `Cloud`{.action} et `Plateformes et services`{.action}.

### Est-il possible d'augmenter la capacité totale de mon NAS?
Il n'est pas possible d'augmenter la capacité d'un NAS-HA une fois celui-ci commandé. Pour augmenter votre capacité de stockage, vous devrez migrer vos données sur un second NAS de plus grande capacité.

### Quelles sont les capacités de stockage disponibles?
Nous proposons les capacités de stockage suivantes :

- 1,2 To (soit 1,1 To d'espace utilisable) ;
- 2,4 To (soit 2,2 To d'espace utilisable) ;
- 3,6 To (soit 3,2 To d'espace utilisable) ;
- 7,2 To (soit 6,4 To d'espace utilisable) ;
- 13,2 To (soit 10 To d'espace utilisable) ;
- 19,2 To (soit 17 To d'espace utilisable) ;
- 26,4 To (soit 24 To d'espace utilisable).

Ces capacités sont toutes composées de disques 1,2 To dédiés.

### Les ressources de mon NAS-HA me sont-elles dédiées?
Les disques de votre NAS-HA vous sont dédiés. Les autres ressources de la machine sont partagées (mémoire vive, processeur, bande passante).

**Cas particulier :** si vous vous abonnez à l'offre 26,4 To, l'ensemble des ressources du serveur hôte vous sont dédiées (mémoire vive, processeur, bande passante).

### Pour quelle durée puis-je souscrire à un NAS-HA?
Les périodes proposées sont de 1, 3, 6 et 12 mois. À la fin de votre période d'engagement, votre abonnement est renouvelé automatiquement si aucune demande de résiliation n'a été formulée. Celle-ci peut être effectuée durant toute la durée de votre abonnement via votre [espace client OVH](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}.

### Dispose-t-on de la capacité affichée lors de la commande?
Comme pour la plupart des solutions de stockage, la capacité théorique diffère légèrement de la capacité utilisable, une partie de l’espace étant nécessaire pour permettre l’exploitation du disque :

- pour un NAS-HA 1,2 To, 1,1 To seront utilisables ;
- pour un NAS-HA 2,4 To, 2,2 To seront utilisables ;
- pour un NAS-HA 3,6 To, 3,2 To seront utilisables ;
- pour un NAS-HA 7,2 To, 6,4 To seront utilisables ;
- pour un NAS-HA 13,2 To, 10 To seront utilisables ;
- pour un NAS-HA 19,2 To, 17 To seront utilisables ;
- pour un NAS-HA 26,4 To, 24 To seront utilisables.

À noter que ces données sont exprimées à titre indicatif et sont susceptibles de varier.

## Usage du produit

### Dans quels cas utiliser un NAS-HA?
Dans une infrastructure, l'offre NAS-HA constitue un espace de stockage auquel vous pouvez connecter plusieurs [serveurs dédiés](https://www.ovh.com/fr/serveurs_dedies/){.external}, [Cloud Privé](https://www.ovh.com/fr/dedicated-cloud/){.external} ou [instances Cloud Public](https://www.ovh.com/fr/public-cloud/instances/){.external}.

Les cas d'usage sont multiples, mais la haute disponibilité des NAS OVH est particulièrement appréciable pour les utilisations suivantes :

- le stockage de données peu fréquentées : données ne générant pas un trafic conséquent, mais ayant besoin d'être accessibles en permanence (documentation légale, guides d'utilisation, etc.) ;
- le stockage de données "statiques" : données n'ayant pas vocation à être modifiées régulièrement. Cela permet de libérer de l'espace sur une infrastructure performante pour privilégier les données qui évoluent en permanence ou ont besoin de puissance de calcul (bases de données, applications métiers, etc.) ;
- solution Hot Backup : la haute disponibilité du service NAS vous assure des données accessibles à tout moment, vous permettant d'accéder (ou de rediriger) à des fichiers qui seraient indisponibles ou corrompus ailleurs.

### Dans quel cas conseille-t-on le NAS-HA plutôt que le stockage de sauvegarde?
Le NAS-HA et le stockage de sauvegarde ne répondent pas aux mêmes usages. Nous conseillons l'utilisation d'un NAS pour le stockage de données statiques qui doivent être accessibles en permanence. Au contraire, le stockage de sauvegarde constitue une sauvegarde de données qui n'ont pas vocation à être consultées régulièrement.

Techniquement, les différences majeures sont les suivantes :

- les données du NAS-HA sont stockées sur des disques dédiés alors que l'espace du stockage de sauvegarde est partagé ;
- le NAS-HA est un espace de stockage monté sur un autre serveur qui utilise les protocoles de transferts NFS ou CIFS. Le stockage de sauvegarde est un espace autonome, joignable via FTP.

### Y a-t-il des fonctions de synchronisation (de type Synology)?
Non, le NAS-HA ne peut uniquement être monté qu’en tant que système de fichiers directement sur une distribution. La mise en place d’un processus de synchronisation pourra néanmoins être réalisé par l’administrateur de l’espace.

### Le NAS-HA peut-il être connecté à plusieurs serveurs en même temps?
Oui. Il est possible de faire interagir simultanément votre NAS avec plusieurs services OVH.

### Peut-on installer un système d’exploitation sur un NAS-HA?
Non, il n'est pas possible d'installer un OS sur les offres NAS-HA.

### Quels sont les protocoles compatibles avec l'offre NAS-HA?
Le NAS-HA peut être monté sur un serveur Windows ou Linux à l’aide des protocoles CIFS (Samba) ou NFS.

### Le NAS-HA est-il compatible avec le protocole FTP?
Non, l'offre n'est pas compatible avec le protocole FTP.

### L'espace alloué est-il partitionnable?
Oui, il est nécessaire de créer une ou plusieurs partitions selon votre utilisation. La création de partition n'est pas limitée.

## Compatibilité du produit

### Le NAS-HA est-il compatible avec d'autres serveurs en dehors d'OVH?
Non, il n’est possible d'accéder à votre NAS-HA que depuis le réseau OVH.

### Par quel(s) service(s) le NAS-HA est-il accessible?
Le service est accessible depuis l'ensemble des produits OVH disposant d'une distribution : les serveurs dédiés (OVH, So you Start, Kimsufi), le Cloud Dédié, le  Cloud Public et le VPS.

### Comment gère-t-on les accès au NAS-HA?
La liste des contrôles d'accès (ACL) est configurable depuis votre espace client OVH. Il vous suffit simplement de saisir l'adresse IP du service auquel vous souhaitez autoriser l'accès au NAS-HA.

### Le NAS-HA est-il éligible à l'offre vRack?
Actuellement, le NAS-HA ne peut pas être intégré dans le réseau privé du vRack. Cependant, l'utilisation du NAS-HA et du vRack ne sont pas incompatibles en passant par le chemin IP public du serveur connecté au vRack.

## Débits

### Le taux de transfert et de disponibilité est-il garanti?

- Transfert : la bande passante du service est partagée. Les taux de transfert ne peuvent être garantis par OVH.
- Disponibilité : la disponibilité du service est garantie et sujette à un accord de niveau de service. Les détails sont consultables dans nos conditions spécifiques d'utilisation.

## Images instantanées

### Que sont les images instantanées?
Les images instantanées sont des images instantanées de l’état de votre disque et des données qui y sont stockées à un instant donné. La configuration et la gestion des images instantanées sont réalisables depuis votre espace client.

Par défaut, la fonction images instantanée est activée lors de la création de votre partition, la fréquence est préréglée sur "toutes les heures".

### Quelle est la fréquence des images instantanées?

La fréquence des images instantanées est administrable depuis votre espace client. Vous pouvez choisir la fréquence parmi les options suivantes : 

- toutes les heures ;
- toutes les 6 heures ;
- tous les jours ;
- tous les deux jours ;
- tous les trois jours ;
- hebdomadaire. 


Vous pouvez aussi, à tout moment, créer des images instantanées manuelles, les conserver sans limitation de durée ou les supprimer. Cette fonctionnalité est disponible au sein de votre [espace client OVH](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external} ou via l'[API](https://api.ovh.com/){.external}:

> [!api]
>
> @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
> 

### Comment fonctionne le système de gestion des images instantanées?

Vous pouvez configurer des images instantanées automatiques, à différentes fréquences disponibles. Quelle que soit la fréquence paramétrée, la dernière image instantanée effectuée remplacera et écrasera toujours le précédent. Vous pouvez également créer et supprimer des images instantanées à la demande.

### Peut-on supprimer un image instantanée?
Seuls les images instantanées créées "à la demande" peuvent être supprimées (voir la question précédente "Quelle est la fréquence des images instantanées"). Les images instantanées à fréquence fixe sont supprimées automatiquement, sans possibilité de les supprimer manuellement.

### Quel est l'espace occupé par les images instantanées sur un NAS-HA?
La capacité utilisée par une image instantanée est variable en fonction des actions effectuées dans le laps de temps séparant deux images instantanées.

À partir du moment où vous déclenchez l’image instantanée, toutes les actions effectuées sur la partition concernée seront stockées dans cette image instantanée. Ainsi, vous pourrez à tout moment revenir à l'état initial de votre partition (telle qu'elle était au moment du déclenchement de l’image instantanée). Techniquement, ce sont bien les actions de modification et de suppression de données qui font augmenter l'espace de stockage consommé par les fichiers d’  image instantanée.

### Combien d’images instantanées puis-je réaliser au maximum?
- Pour les images instantanées automatiques : une par partition
- Pour les images instantanées manuelles : dix par partitions

### Où puis-je récupérer mes images instantanées?
Dans la partition concernée : répertoire caché appelé `.zfs` → répertoire `images instantanées` . Fichiers disponibles en lecture seule.

### OVH réalise-t-il également des sauvegardes de mes données?
Oui, une sauvegarde interne est réalisée quotidiennement. Elle génère une image instantanée de plus. Cette sauvegarde n'est pas désactivable par le client.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com/ca/fr](https://community.ovh.com).