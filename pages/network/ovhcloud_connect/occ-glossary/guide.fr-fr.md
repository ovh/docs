---
title: 'OVHcloud Connect - Glossaire'
excerpt: 'Découvrez le vocabulaire lié aux technologies utilisées par OVHcloud Connect'
updated: 2026-01-12
---

## Objectif

OVHcloud Connect est une connexion privée et dédiée entre votre réseau sur site et votre vRack OVHcloud. Il est conçu pour étendre votre réseau et vous connecter de manière sécurisée à vos ressources cloud, en contournant l'internet public.

![OVHcloud Connect](images/VrackConnectDedicated2025.png){.thumbnail}

Ce guide a été conçu comme une ressource de référence pour vous aider à assimiler les termes techniques indispensables à la bonne compréhension des guides OVHcloud Connect.

## Glossaire

### A

**ASN (Autonomous System Number) :** Numéro d'identification unique de votre réseau nécessaire pour les échanges BGP.

**AZ (Availability Zone) :** Zones isolées au sein d'une région cloud pour garantir que si une zone tombe, l'autre prend le relais.

### B

**Bande passante (Bandwidth) :** Capacité de débit souscrite pour votre liaison (de 50 Mbps à 10 Gbps). Contrairement à Internet, ce débit est dédié et garantit des performances constantes.

**BGP (Border Gateway Protocol) :** Protocole de routage dynamique utilisé dans les configurations Layer 3 (L3). Il permet à votre routeur et à celui d'OVHcloud de s'informer mutuellement des réseaux qu'ils desservent.

**BGP-ECMP (Equal-Cost Multi-Path) :** Technique de routage permettant de répartir le trafic sur plusieurs liens physiques actifs simultanément, optimisant ainsi la charge et la redondance.

### D

**Direct :** Type de raccordement où vous (ou votre opérateur) tirez une fibre physique directement jusqu'à une baie OVHcloud.

### E

**EndPoint :** La destination finale de votre liaison, correspondant au Datacenter (DC) d'OVHcloud où sont hébergés vos services. Une fois vos données entrées par le PoP (EntryPoint), elles traversent le backbone privé d'OVHcloud pour atteindre ce point d'arrivée (ex: les centres de données de Gravelines ou Roubaix).

**EntryPoint :** Le point d'entrée physique de vos données dans le réseau privé d'OVHcloud. Il s'agit d'un Point de Présence (PoP) situé dans un centre de données neutre (ex: Equinix, Interxion). C'est à cet endroit précis que votre infrastructure locale (ou celle de votre opérateur) se raccorde physiquement aux routeurs d'OVHcloud.

### I

**Interconnexion (cross-connect) :** Liaison physique (fibre monomode) gérée par les équipes d'installation dans le PoP. L'interconnexion est établie dans la MMR (Meet-Me-Room) entre la position donnée par OVHcloud et la position détenue par le client. Dans le cas d'une offre OVHcloud Connect Direct, le client doit commander et gérer l'interconnexion. 

**Isolation :** Séparation physique ou logique de vos données, les protégeant des menaces extérieures (DDoS, interceptions) liées au web public.

### L

**LACP (Link Aggregation Control Protocol) :** Protocole permettant de regrouper plusieurs interfaces physiques en une seule liaison logique, utile pour la redondance et l'augmentation du débit.

**Liaison L2 (Layer 2) :** Mode "pont" (Ethernet), similaire à une liaison par câble. Vous gérez vous-même l'adressage IP et le routage.

**Liaison L3 (Layer 3) :** Mode "routé", où OVHcloud participe au routage de vos paquets via les protocoles IP et BGP.

**LOA (Letter of Authorization) :** Document officiel autorisant le raccordement physique de votre fibre dans un datacenter.

### P

**PoP (Point of Presence) :** Lieu physique (centre de données tiers) où le réseau OVHcloud est disponible pour le raccordement. Les PoP accessibles sont listés sur [ce lien de notre site web](/links/network/ovhcloud-connect).

**Provider (Partenaire) :** Connexion via un opérateur tiers qui possède déjà un lien physique vers les infrastructures OVHcloud.

### R

**Région :** Emplacement physique dans le monde, composé d'un ou de plusieurs datacenters où les services OVHcloud sont hébergés. Les régions OVHcloud sont déployées à travers le monde, notamment en Europe, en Amérique du Nord et en Asie-Pacifique.

### S

**Service Key :** Clé unique d'activation à fournir à votre opérateur partenaire pour établir la liaison.

**SLA (Service Level Agreement) :** Engagement contractuel sur le taux de disponibilité (ex: 99,9%).

### V

**VLAN (Virtual LAN) :** Réseau local virtuel permettant de séparer les flux (ex: flux Backup vs flux Production) sur une même liaison physique.

**vRack :** Réseau privé virtuel d'OVHcloud. C'est le "socle" sur lequel OCC se branche pour distribuer la connexion à vos serveurs.

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).