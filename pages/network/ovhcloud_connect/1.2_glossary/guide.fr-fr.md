---
title: 'OVHcloud Connect - Glossaire'
excerpt: 'Découvrez le vocabulaire lié aux technologies utilisées par OVHcloud Connect'
updated: 2026-01-12
---

## Glossaire OVHcloud Connect

Cette page définit les termes clés que vous rencontrerez tout au long de la documentation OVHcloud Connect. Les termes sont listés par ordre alphabétique.

### A

**ASN (Autonomous System Number)**
Numéro unique qui identifie un réseau sur internet, utilisé pour échanger des informations de routage via BGP. Votre réseau dispose de son propre ASN, et OVHcloud dispose de son propre ASN. Ces numéros sont utilisés lors de la configuration des sessions BGP.

**AZ (Availability Zone)**
Datacenter physiquement séparé au sein d'une région, contenant un ou plusieurs datacenters hébergeant vos services. Les AZ sont à la fois suffisamment éloignées géographiquement les unes des autres pour être isolées en cas de sinistre, et suffisamment proches pour garantir une faible latence.

### B

**Bande passante**
Capacité de débit souscrite pour votre lien (de 50 Mbps à 10 Gbps). Contrairement à une connexion établie via internet, ce débit est garanti et assure des performances constantes.

**BGP (Border Gateway Protocol)**
Protocole de routage standard utilisé pour échanger des routes réseau entre différents réseaux. Dans le cadre d'OVHcloud Connect, BGP est utilisé en mode L3 pour indiquer à chaque côté (votre réseau et OVHcloud) quelles plages d'adresses IP sont accessibles via la connexion.

**BGP-ECMP (Equal-Cost Multi-Path)**
Technique de routage qui répartit le trafic sur plusieurs liens physiques actifs simultanément, optimisant ainsi la charge et la redondance.

**Session BGP**
Connexion active entre deux routeurs BGP (appelés « peers ») qui leur permet de partager des informations de routage. Vous configurerez au moins une session BGP entre votre routeur et celui d'OVHcloud au PoP.

### C

**Clé de service**
Clé d'activation unique que vous devez fournir à votre opérateur partenaire pour établir la connexion.

**Cross-connect**
Câble physique qui relie votre équipement (ou celui de votre provider) à celui d'OVHcloud à l'intérieur d'un Point de présence. Les cross-connects sont généralement des câbles à fibre optique.

### D

**Connexion directe (OVHcloud Connect Direct)**
Type de connexion où vous gérez vous-même le lien physique, généralement via un cross-connect dans une installation de colocation où OVHcloud dispose d'un PoP.

### I

**Isolation**
Séparation physique ou logique de vos données, les protégeant des menaces externes (DDoS, interceptions) liées au web public.

### L

**LACP (Link Aggregation Control Protocol)**
Protocole qui permet de regrouper plusieurs interfaces physiques en un seul lien logique, utile pour la redondance et l'augmentation du débit.

**Connectivité Layer 2 (L2)**
Mode de connexion où OVHcloud Connect agit comme un pont transparent. Vous gérez votre propre routage et adressage IP par-dessus le lien. Cela offre une flexibilité maximale.

**Connectivité Layer 3 (L3)**
Mode de connexion où le routage est géré au niveau de la couche réseau. Des sessions BGP sont établies pour échanger des routes entre votre réseau et OVHcloud.

**LOA (Letter of Authorization)**
Document officiel fourni par OVHcloud qui autorise un opérateur de datacenter à mettre en place ou à supprimer un cross-connect pour votre compte. Vous remettez la LOA à l'opérateur de l'installation pour finaliser le brassage physique.

### M

**Multi-AZ**
Stratégie de déploiement qui répartit vos ressources et connexions sur plusieurs Availability Zones. Cela protège contre la défaillance d'un datacenter ou d'un chemin réseau unique.

### P

**PoP (Point de présence)**
Emplacement physique (datacenter tiers) où le réseau OVHcloud est disponible pour la connexion. C'est également le point d'entrée de vos données dans le réseau privé d'OVHcloud. Les PoPs accessibles sont listés sur [ce lien de notre site web](/links/network/ovhcloud-connect).

**Provider (OVHcloud Connect Provider)**
Opérateur réseau tiers qui facilite la connectivité physique entre votre réseau et celui d'OVHcloud. Recourir à un provider signifie que vous n'avez pas besoin d'être physiquement présent dans le même datacenter qu'OVHcloud.

### R

**Région**
Zone géographique où OVHcloud exploite un ou plusieurs datacenters et Availability Zones. Les régions OVHcloud sont déployées dans le monde entier, notamment en Europe, en Amérique du Nord et en Asie-Pacifique. Pour en savoir plus sur les régions OVHcloud, consultez [ce lien vers notre site web](https://www.ovhcloud.com/en/about-us/global-infrastructure/expansion-regions-az/).

### S

**SLA (Service Level Agreement)**
Engagement contractuel d'OVHcloud qui définit le niveau de service garanti — généralement exprimé en pourcentage de disponibilité (par exemple 99,9 %) ainsi qu'en délais de réponse du support.


### V

**VLAN (Virtual Local Area Network)**
Réseau logique indépendant créé sur une infrastructure physique partagée, permettant de segmenter un réseau local en plusieurs groupes isolés afin d'améliorer la sécurité et les performances.

**vRack**
Réseau privé virtuel isolé fourni par OVHcloud, qui vous permet d'interconnecter vos autres services OVHcloud (serveurs Bare Metal, instances Public Cloud, Hosted Private Cloud, etc.) au sein d'un réseau privé isolé, indépendamment de leur emplacement. OVHcloud Connect est associé à un vRack pour étendre votre réseau privé jusque dans OVHcloud. Pour plus d'informations, veuillez consulter la [page produit sur notre site web](/links/network/vrack).

## Aller plus loin

Pour bénéficier d'une formation ou d'une assistance technique dans la mise en œuvre de nos solutions, contactez votre conseiller commercial ou cliquez sur [ce lien](/links/professional-services) afin d'obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l'équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
