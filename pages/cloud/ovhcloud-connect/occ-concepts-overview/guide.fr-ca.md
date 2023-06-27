---
title: Présentation des concepts
excerpt: Présentation des concepts nécessaires à la compréhension de l’offre OVHcloud Connect
updated: 2020-09-14
---

**Dernière mise à jour le 07/09/2020**

## Qu'est-ce que OVHcloud Connect?

Il s'agit d'une connexion entre votre vRack et un réseau externe.

![OVHcloud Connect](images/VrackConnectDedicated.png){.thumbnail}

## Avantages de l'offre

### Dédié

Le mode dédié est une connexion directe avec les services OVHcloud. Vous pouvez gérer différentes configurations, d'une connexion unique à une connexion multiple à l'aide de LACP (L2) ou BGP-ECMP (L3) avec une vitesse de port de 1 Gbps ou 10 Gbps. L'interface et la bande-passante ne sont pas partagées avec d'autres clients.

### Privé

Votre trafic est isolé d'Internet, vous gérez vos propres VLAN (L2) et/ou vos propres adresses IP (L3). Même les instances BGP sont privées et vous pouvez configurer l'ASN de votre choix.
OVHcloud Connect est connecté à votre vRack avec tous les services compatibles.

### Extension réseau

OVHcloud Connect peut être connecté à votre réseau WAN ou à votre réseau de Datacentres, ce qui permet d'étendre le cloud ou même d'assouplir votre migration en conservant la topologie des VLAN ou les adresses IP.

### Haute disponibilité

Grâce à BGP, vous pouvez interconnecter votre réseau via plusieurs PoP et atteindre plusieurs Datacentres OVHcloud. À partir du vRack, configurez BGP pour permettre une résilience maximale avec les services distribués.

## Composants

### PoP - EntryPoint

Les points de présence (PoP) sont des installations comme Equinix, InterXion, Telehouse ou Global Switch. Le PoP est l'entrée de service d'OVHcloud Connect: nous l'appelons EntryPoint.

### DC - EndPoint

Le Datacentre (DC) OVHcloud est la terminaison du service, le EndPoint.

### Interconnexion

Une interconnexion (Cross-connect) est une liaison physique (fibre monomode) gérée par les équipes d'installation dans le PoP. L'interconnexion est établie dans la MMR (Meet-Me-Room) entre la position donnée par OVHcloud et la position détenue par le client. Dans le cas d'une offre OVHcloud Connect Direct, le client doit commander et gérer l'interconnexion. 

### vRack

Réseau privé OVHcloud, disponible sur les ressources Cloud entre tous les Datacentres OVHcloud.

### BGP

Protocole de routage à utiliser lors de l'utilisation du mode de L3.

## Principes

OVHcloud Connect est basé sur une liaison virtuelle entre un EntryPoint et un EndPoint. Le EntryPoint est là où vous voulez établir l'interconnexion avec OVHcloud. Le EndPoint est le Datacentre OVHcloud où sont situés vos services. Vous pouvez choisir n'importe quel Datacentre de la même région que le PoP. 

### Layer 2 (L2)

La liaison virtuelle est un tunnel L2 pour OVHcloud Connect L2. Seul un PoP/EntryPoint avec 1 DC/EndPoint peut être configuré.

### Layer 3 (L3)

La liaison virtuelle est un réseau IP à maillage complet entre tout PoP/EntryPoint et tout DC/EndPoint de la même région.

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](https://www.ovhcloud.com/fr-ca/professional-services/) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
