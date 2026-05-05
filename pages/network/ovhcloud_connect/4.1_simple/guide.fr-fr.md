---
title: Mettre en place une architecture OVHcloud Connect simple
excerpt: Connectez un site on-premises unique, un WAN d'agences ou un environnement de cloud public (AWS, Azure, GCP) à OVHcloud via un seul lien OVHcloud Connect.
updated: 2026-02-18
---

## Objectif

Ce tutoriel vous guide dans la connexion d'un site on-premises unique à OVHcloud à l'aide d'**un seul lien OVHcloud Connect**. Il s'agit de l'architecture la plus simple, adaptée lorsque vous avez besoin d'une connectivité privée mais que vous pouvez accepter un chemin unique (sans redondance intégrée).

## En pratique

Vous trouverez ci-dessous les prérequis et les instructions pour cinq cas d'usage distincts, que vous pouvez choisir en fonction de l'architecture souhaitée.

> [!tabs]
> On-Premises
>>### Prérequis
>>
>>- Un compte OVHcloud avec un vRack
>>- Un routeur dans un datacenter avec présence d'un PoP OVHcloud (pour Direct) ou un compte chez un fournisseur (pour Provider)
>>- Un équipement réseau compatible BGP
>>- Un plan d'adressage IP sans chevauchement entre votre réseau et les sous-réseaux OVHcloud
>>
>>### Architecture
>>
>>```svg
>><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 200" font-family="Arial, sans-serif" font-size="12">
>>  <rect width="750" height="200" fill="#f8f9fa" rx="8"/>
>>
>>  <!-- On-Premises -->
>>  <rect x="20" y="50" width="180" height="100" rx="8" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
>>  <text x="110" y="80" text-anchor="middle" font-weight="bold" fill="#1565c0">On-Premises</text>
>>  <text x="110" y="100" text-anchor="middle" fill="#555" font-size="10">Votre datacenter</text>
>>  <text x="110" y="118" text-anchor="middle" fill="#555" font-size="10">Routeur + BGP</text>
>>  <text x="110" y="136" text-anchor="middle" fill="#555" font-size="10">10.0.0.0/16</text>
>>
>>  <!-- PoP -->
>>  <rect x="270" y="60" width="140" height="80" rx="8" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
>>  <text x="340" y="90" text-anchor="middle" font-weight="bold" fill="#e65100">PoP</text>
>>  <text x="340" y="110" text-anchor="middle" fill="#555" font-size="10">Cross-connect</text>
>>  <text x="340" y="126" text-anchor="middle" fill="#555" font-size="10">Peering BGP</text>
>>
>>  <!-- OVHcloud -->
>>  <rect x="480" y="40" width="240" height="120" rx="8" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
>>  <text x="600" y="70" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud</text>
>>  <text x="600" y="92" text-anchor="middle" fill="#555" font-size="10">vRack</text>
>>  <text x="600" y="110" text-anchor="middle" fill="#555" font-size="10">Serveurs / VM</text>
>>  <text x="600" y="128" text-anchor="middle" fill="#555" font-size="10">172.16.0.0/16</text>
>>
>>  <!-- Arrows -->
>>  <line x1="200" y1="100" x2="270" y2="100" stroke="#555" stroke-width="2" marker-end="url(#t1)"/>
>>  <line x1="410" y1="100" x2="480" y2="100" stroke="#555" stroke-width="2" marker-end="url(#t1)"/>
>>  <text x="235" y="90" text-anchor="middle" fill="#555" font-size="10">1 Gbps ou</text>
>>  <text x="235" y="120" text-anchor="middle" fill="#555" font-size="10">10 Gbps</text>
>>
>>  <defs>
>>    <marker id="t1" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
>>      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
>>    </marker>
>>  </defs>
>></svg>
>>```
>>
>>### Quand utiliser cette architecture
>>
>>| ✅ Idéal pour | ❌ Non recommandé pour |
>>|---|---|
>>| Environnements de développement et de test | Charges de production critiques pour l'activité |
>>| Charges de production non critiques | Environnements régulés ou à fortes exigences de conformité |
>>| Preuves de concept ou projets pilotes | Applications nécessitant une disponibilité de 99,99 % |
>>| Petites entreprises avec un site unique | Organisations multisites nécessitant une bascule |
>>
>>#### 1. Commander OVHcloud Connect
>>
>>Choisissez **Direct** ou **Provider** selon votre situation :
>>
>>- **Direct** — Vous disposez d'équipements dans le même datacenter qu'un PoP OVHcloud. Consultez [Commander Direct](../3.1_order_direct).
>>- **Provider** — Vous préférez une connexion managée. Consultez [Commander Provider](../3.2_order_provider).
>>
>>#### 2. Installer la connexion physique
>>
>>- **Direct :** fournissez la LOA à l'opérateur du datacenter pour installer un cross-connect. Consultez [LOA Cross-Connect](../3.11_cross_connect_loa).
>>- **Provider :** partagez la clé de service avec votre fournisseur et attendez l'activation.
>>
>>#### 3. Configurer BGP
>>
>>Mettez en place une session BGP unique entre votre routeur on-premises et OVHcloud :
>>
>>- Annoncez vos préfixes on-premises (par exemple `10.0.0.0/16`) à OVHcloud.
>>- Acceptez les préfixes OVHcloud (par exemple `172.16.0.0/16`) provenant d'OVHcloud.
>>
>>Consultez [Configurer OCC L3 avec BGP](../3.7_occ_l3_bgp) pour obtenir des instructions détaillées et des exemples de configuration.
>>
>>#### 4. Associer au vRack
>>
>>Reliez votre service OVHcloud Connect à votre vRack. Consultez [Associer au vRack](../3.5_associate_vrack).
>>
>>#### 5. Configurer les sous-réseaux d'AZ
>>
>>Définissez les sous-réseaux privés dans OVHcloud que votre réseau on-premises doit atteindre. Consultez [Configurer votre réseau vRack](../3.6_vrack_network_setup).
>>
>>#### 6. Tester la connectivité
>>
>>| Test | Commande |
>>|---|---|
>>| Ping depuis l'on-prem vers une VM OVHcloud | `ping 172.16.1.10` |
>>| Ping depuis une VM OVHcloud vers l'on-prem | `ping 10.0.0.1` |
>>| Traceroute | `traceroute 172.16.1.10` (ne doit pas passer par Internet) |
>>| Vérification BGP | `show ip bgp summary` |
>>
>>#### 7. Mettre en place la supervision
>>
>>Configurez des alertes de supervision pour le statut du lien, la session BGP et la bande passante. Consultez [Superviser](../3.9_monitor).
>>
>>### Limites d'une connexion simple
>>
>>- **Point unique de défaillance** — Si le lien, le PoP ou le cross-connect tombe en panne, la connectivité est perdue.
>>- **Pas de bascule automatique** — Vous devez intervenir manuellement ou compter sur un secours via Internet.
>>- **SLA plus faible** — Une connexion unique prend généralement en charge un SLA jusqu'à 99,9 % (consultez [SLA](../1.7_slas)).
>>
>>**Recommandation :** pour les charges de production, envisagez de passer à une [architecture résiliente](../4.2_resilient).
>>
> WAN
>>### Prérequis
>>
>>- Un compte OVHcloud avec un vRack
>>- Un routeur dans un datacenter avec présence d'un PoP OVHcloud (pour Direct) ou un compte chez un fournisseur (pour Provider)
>>- Un équipement réseau compatible BGP
>>- Un plan d'adressage IP sans chevauchement entre votre réseau et les sous-réseaux OVHcloud
>>
>>### Architecture
>>
>>```svg
>><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200" font-family="Arial, sans-serif" font-size="12">
>>  <rect width="800" height="200" fill="#f8f9fa" rx="8"/>
>>
>>  <!-- Branch offices -->
>>  <rect x="20" y="30" width="140" height="140" rx="8" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
>>  <text x="90" y="55" text-anchor="middle" font-weight="bold" fill="#1565c0">Agences</text>
>>  <text x="90" y="80" text-anchor="middle" fill="#555" font-size="10">Agence A</text>
>>  <text x="90" y="100" text-anchor="middle" fill="#555" font-size="10">Agence B</text>
>>  <text x="90" y="120" text-anchor="middle" fill="#555" font-size="10">Agence C</text>
>>  <text x="90" y="145" text-anchor="middle" fill="#555" font-size="10">10.x.x.x/16</text>
>>
>>  <!-- WAN -->
>>  <rect x="210" y="50" width="150" height="100" rx="8" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
>>  <text x="285" y="80" text-anchor="middle" font-weight="bold" fill="#6a1b9a">WAN / SD-WAN</text>
>>  <text x="285" y="100" text-anchor="middle" fill="#555" font-size="10">Backbone MPLS</text>
>>  <text x="285" y="118" text-anchor="middle" fill="#555" font-size="10">ou fabric SD-WAN</text>
>>
>>  <!-- PoP -->
>>  <rect x="410" y="55" width="110" height="90" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
>>  <text x="465" y="85" text-anchor="middle" font-weight="bold" fill="#e65100">PoP</text>
>>  <text x="465" y="105" text-anchor="middle" fill="#555" font-size="10">Session BGP</text>
>>  <text x="465" y="120" text-anchor="middle" fill="#555" font-size="10">VLAN</text>
>>
>>  <!-- OVHcloud -->
>>  <rect x="570" y="40" width="200" height="120" rx="8" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
>>  <text x="670" y="70" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud</text>
>>  <text x="670" y="95" text-anchor="middle" fill="#555" font-size="10">vRack · Serveurs · VM</text>
>>  <text x="670" y="115" text-anchor="middle" fill="#555" font-size="10">172.16.0.0/16</text>
>>
>>  <!-- Arrows -->
>>  <line x1="160" y1="100" x2="210" y2="100" stroke="#555" stroke-width="1.5" marker-end="url(#t3)"/>
>>  <line x1="360" y1="100" x2="410" y2="100" stroke="#555" stroke-width="1.5" marker-end="url(#t3)"/>
>>  <line x1="520" y1="100" x2="570" y2="100" stroke="#555" stroke-width="1.5" marker-end="url(#t3)"/>
>>
>>  <defs>
>>    <marker id="t3" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
>>      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
>>    </marker>
>>  </defs>
>></svg>
>>```
>>
>>### Différences par rapport à l'on-premises
>>
>>Dans un scénario WAN, votre trafic provient généralement de **plusieurs agences** ou sites et est agrégé via un backbone WAN (MPLS ou SD-WAN) avant d'atteindre le PoP OVHcloud. L'équipement de bordure WAN (routeur ou passerelle SD-WAN) est l'équipement qui établit le peering avec OVHcloud via BGP.
>>
>>### Quand utiliser cette architecture
>>
>>| ✅ Idéal pour | ❌ Non recommandé pour |
>>|---|---|
>>| Connecter plusieurs agences à OVHcloud via une sortie WAN unique | Charges critiques nécessitant une disponibilité de 99,99 % |
>>| Consolidation d'agences vers un environnement cloud | Configurations multicloud nécessitant des chemins diversifiés |
>>| Déploiements SD-WAN hybrides | Environnements fortement régulés |
>>
>>### Étape par étape
>>
>>#### 1. Coordonner avec votre fournisseur WAN
>>
>>Contactez votre fournisseur WAN/MPLS/SD-WAN et demandez :
>>
>>- Un **circuit** ou une **connexion virtuelle** depuis votre backbone WAN vers le PoP OVHcloud.
>>- Le circuit doit se terminer dans un site où OVHcloud dispose d'un PoP (consultez [Emplacements des PoP](../1.4_pop_locations_regions)).
>>
>>Si votre fournisseur WAN est également un fournisseur OVHcloud Connect (par exemple Megaport, Equinix), il peut gérer à la fois la livraison WAN et le provisionnement OVHcloud Connect.
>>
>>#### 2. Commander OVHcloud Connect
>>
>>- **Direct :** si votre routeur de bordure WAN est colocalisé avec le PoP OVHcloud. Consultez [Commander Direct](../3.1_order_direct).
>>- **Provider :** si la connexion est gérée par un fournisseur. Consultez [Commander Provider](../3.2_order_provider).
>>
>>#### 3. Configurer BGP sur la bordure WAN
>>
>>Mettez en place une session BGP entre votre **équipement de bordure WAN** et OVHcloud :
>>
>>- Annoncez les préfixes agrégés des agences (par exemple `10.0.0.0/8` ou des sous-réseaux plus spécifiques par agence).
>>- Acceptez les routes OVHcloud.
>>- Assurez-vous que votre routage WAN propage les routes OVHcloud vers toutes les agences.
>>
>>Consultez [Configurer OCC L3 avec BGP](../3.7_occ_l3_bgp).
>>
>>#### 4. Associer au vRack et configurer les sous-réseaux
>>
>>Reliez la connexion à votre vRack et configurez les sous-réseaux requis. Consultez [Associer au vRack](../3.5_associate_vrack) et [Configurer votre réseau vRack](../3.6_vrack_network_setup).
>>
>>#### 5. Tester la connectivité de bout en bout
>>
>>Depuis une agence, vérifiez que vous pouvez atteindre les ressources OVHcloud :
>>
>>```
>>ping 172.16.1.10           ## Ping d'une VM OVHcloud
>>traceroute 172.16.1.10     ## Doit passer : agence → WAN → PoP → OVHcloud (privé)
>>```
>>
>>Vérifiez depuis OVHcloud vers une agence :
>>
>>```bash
>>ping 10.1.0.1              ## Ping d'une IP d'agence depuis une VM OVHcloud
>>```
>>
>>#### 6. Mettre en place la supervision
>>
>>Supervisez la session BGP de bordure WAN et le lien OVHcloud Connect. Consultez [Superviser](../3.9_monitor).
>>
> AWS
>>### Prérequis
>>
>>- Un **compte AWS** avec un VPC configuré
>>- Un **compte OVHcloud** avec un vRack
>>- Un compte chez un **fournisseur partagé** prenant en charge à la fois AWS Direct Connect et OVHcloud Connect
>>- Des plages IP non chevauchantes entre le VPC AWS et les sous-réseaux OVHcloud
>>
>>### Architecture
>>
>>```svg
>><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200" font-family="Arial, sans-serif" font-size="12">
>>  <rect width="800" height="200" fill="#f8f9fa" rx="8"/>
>>
>>  <!-- AWS -->
>>  <rect x="20" y="40" width="180" height="120" rx="8" fill="#fff3e0" stroke="#ff9800" stroke-width="2"/>
>>  <text x="110" y="70" text-anchor="middle" font-weight="bold" fill="#e65100">AWS</text>
>>  <text x="110" y="95" text-anchor="middle" fill="#555" font-size="10">VPC : 10.1.0.0/16</text>
>>  <text x="110" y="115" text-anchor="middle" fill="#555" font-size="10">Direct Connect</text>
>>  <text x="110" y="135" text-anchor="middle" fill="#555" font-size="10">Virtual Interface (VIF)</text>
>>
>>  <!-- Provider / Exchange -->
>>  <rect x="270" y="50" width="200" height="100" rx="8" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
>>  <text x="370" y="80" text-anchor="middle" font-weight="bold" fill="#6a1b9a">Fournisseur d'interconnexion</text>
>>  <text x="370" y="100" text-anchor="middle" fill="#555" font-size="10">Megaport / Equinix Fabric</text>
>>  <text x="370" y="118" text-anchor="middle" fill="#555" font-size="10">Pont AWS ↔ OVHcloud</text>
>>
>>  <!-- OVHcloud -->
>>  <rect x="540" y="40" width="220" height="120" rx="8" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
>>  <text x="650" y="70" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud</text>
>>  <text x="650" y="95" text-anchor="middle" fill="#555" font-size="10">vRack : 172.16.0.0/16</text>
>>  <text x="650" y="115" text-anchor="middle" fill="#555" font-size="10">OVHcloud Connect</text>
>>  <text x="650" y="135" text-anchor="middle" fill="#555" font-size="10">Serveurs / VM</text>
>>
>>  <!-- Arrows -->
>>  <line x1="200" y1="100" x2="270" y2="100" stroke="#555" stroke-width="2" marker-end="url(#t5)"/>
>>  <line x1="470" y1="100" x2="540" y2="100" stroke="#555" stroke-width="2" marker-end="url(#t5)"/>
>>
>>  <defs>
>>    <marker id="t5" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
>>      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
>>    </marker>
>>  </defs>
>></svg>
>>```
>>
>>### Fonctionnement
>>
>>La connexion entre AWS et OVHcloud est généralement routée via un **fournisseur partagé** (tel que Megaport ou Equinix Fabric) qui dispose d'une présence physique à la fois sur les sites AWS Direct Connect et sur les PoP OVHcloud.
>>
>>1. **Côté AWS**, vous créez une connexion Direct Connect (ou une connexion hébergée) et une Virtual Interface (VIF) qui relie votre VPC AWS.
>>2. **Côté fournisseur**, vous créez un cross-connect virtuel (VXC) qui ponte la VIF AWS vers le service OVHcloud Connect.
>>3. **Côté OVHcloud**, vous configurez BGP et associez la connexion à votre vRack.
>>
>>### Étape par étape
>>
>>#### 1. Configurer AWS Direct Connect
>>
>>1. Dans la **console AWS**, accédez à **Direct Connect** → **Connections**.
>>2. Créez une nouvelle connexion (ou utilisez une connexion hébergée via votre fournisseur).
>>3. Sélectionnez l'**emplacement AWS Direct Connect** le plus proche de votre PoP OVHcloud.
>>4. Créez une **Private Virtual Interface (VIF)** associée à votre VPC ou à votre Virtual Private Gateway.
>>5. Notez l'ASN BGP, les IP de peer et l'identifiant VLAN.
>>
>> Pour plus d'informations, consultez la [documentation AWS Direct Connect](https://docs.aws.amazon.com/directconnect/).
>>
>>#### 2. Commander OVHcloud Connect Provider
>>
>>1. Dans l'**espace client OVHcloud**, commandez OVHcloud Connect Provider.
>>2. Sélectionnez le même fournisseur que celui que vous utilisez pour AWS (par exemple Megaport).
>>3. Choisissez l'emplacement du PoP.
>>4. Copiez la **clé de service**.
>>
>>Consultez [Commander OVHcloud Connect Provider](../3.2_order_provider).
>>
>>#### 3. Créer le pont chez le fournisseur
>>
>>Dans le portail de votre fournisseur, créez les connexions qui pontent AWS et OVHcloud :
>>
>>**Exemple avec Megaport :**
>>
>>1. Créez un **port Megaport** ou utilisez-en un existant.
>>2. Créez une **VXC vers AWS** en utilisant les détails de la connexion hébergée AWS Direct Connect.
>>3. Créez une **VXC vers OVHcloud** en utilisant la clé de service OVHcloud.
>>4. En option, utilisez un **Megaport MCR (Cloud Router)** pour router entre les deux VXC si vous avez besoin de routage de couche 3 au niveau du fournisseur.
>>
>>#### 4. Configurer BGP
>>
>>Vous avez besoin de sessions BGP sur trois segments :
>>
>>| Segment | Votre côté | Côté distant |
>>|---|---|---|
>>| **VIF AWS** | VPC AWS (via VGW/TGW) | Fournisseur ou votre routeur |
>>| **Pont fournisseur** | Géré par le fournisseur (avec MCR) | — |
>>| **OVHcloud Connect** | Routeur OVHcloud | Votre routeur ou MCR du fournisseur |
>>
>>Avec un MCR du fournisseur :
>>- Le MCR établit le peering avec AWS via la VIF.
>>- Le MCR établit le peering avec OVHcloud via OVHcloud Connect.
>>- Les routes sont échangées automatiquement entre les deux peers.
>>
>>**Sans** MCR du fournisseur :
>>- Vous avez besoin de votre propre routeur (physique ou virtuel) colocalisé avec le fournisseur pour gérer le routage BGP entre AWS et OVHcloud.
>>
>>#### 5. Associer OVHcloud Connect au vRack
>>
>>Consultez [Associer au vRack](../3.5_associate_vrack).
>>
>>#### 6. Tester la connectivité
>>
>>| Test | Détails |
>>|---|---|
>>| **Depuis AWS EC2 vers OVHcloud** | `ping 172.16.1.10` depuis une instance EC2 |
>>| **Depuis OVHcloud vers AWS** | `ping 10.1.0.10` depuis une VM OVHcloud |
>>| **Traceroute** | Vérifiez que le trafic reste sur des chemins privés (pas de sauts Internet) |
>>| **Routes BGP** | Vérifiez que les routes du VPC AWS et les routes OVHcloud apparaissent dans les tables de routage de chacun |
>>
>>### Considérations importantes
>>
>>- **Domaines de routage :** assurez-vous qu'il n'y a pas de chevauchement de plages IP entre les VPC AWS et les sous-réseaux OVHcloud.
>>- **Coûts :** vous serez facturé par AWS (Direct Connect), par le fournisseur (VXC/MCR) et par OVHcloud (Connect). Consultez les trois modèles tarifaires.
>>- **Latence :** la latence totale dépend de la distance entre la région AWS et la région OVHcloud, ainsi que des sauts intermédiaires éventuels chez le fournisseur.
>>
> Azure
>>### Prérequis
>>
>>- Un **abonnement Azure** avec les autorisations nécessaires pour créer des circuits ExpressRoute
>>- Un **compte OVHcloud** avec un vRack
>>- Un compte chez un **fournisseur partagé** prenant en charge à la fois Azure ExpressRoute et OVHcloud Connect
>>- Des plages IP non chevauchantes entre le VNet Azure et le vRack OVHcloud
>>
>>### Architecture
>>
>>```svg
>><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 820 230" font-family="Arial, sans-serif" font-size="11">
>>  <rect width="820" height="230" fill="#f8f9fa" rx="8"/>
>>
>>  <!-- Azure -->
>>  <rect x="15" y="55" width="150" height="130" rx="8" fill="#e3f2fd" stroke="#0078d4" stroke-width="2"/>
>>  <text x="90" y="80" text-anchor="middle" font-weight="bold" fill="#0078d4">Azure</text>
>>  <rect x="30" y="90" width="120" height="35" rx="4" fill="#fff" stroke="#90caf9"/>
>>  <text x="90" y="112" text-anchor="middle" fill="#555" font-size="10">Circuit ExpressRoute</text>
>>  <text x="90" y="155" text-anchor="middle" fill="#555" font-size="10">VNet : 10.2.0.0/16</text>
>>  <text x="90" y="170" text-anchor="middle" fill="#555" font-size="9">Private Peering</text>
>>
>>  <!-- Provider -->
>>  <rect x="240" y="65" width="150" height="100" rx="6" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
>>  <text x="315" y="90" text-anchor="middle" font-weight="bold" fill="#6a1b9a">Fournisseur</text>
>>  <text x="315" y="110" text-anchor="middle" fill="#555" font-size="10">Megaport / Equinix</text>
>>  <text x="315" y="130" text-anchor="middle" fill="#555" font-size="10">VXC ou Fabric</text>
>>  <text x="315" y="148" text-anchor="middle" fill="#555" font-size="9">Clé de service ↔ Clé de service</text>
>>
>>  <!-- OVHcloud PoP -->
>>  <rect x="465" y="65" width="130" height="100" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
>>  <text x="530" y="90" text-anchor="middle" font-weight="bold" fill="#2e7d32">PoP OVHcloud</text>
>>  <text x="530" y="115" text-anchor="middle" fill="#555" font-size="10">OCC Provider</text>
>>  <text x="530" y="135" text-anchor="middle" fill="#555" font-size="10">Peering BGP</text>
>>  <text x="530" y="150" text-anchor="middle" fill="#555" font-size="9">ASN variable selon le PoP</text>
>>
>>  <!-- vRack -->
>>  <rect x="660" y="55" width="140" height="130" rx="8" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
>>  <text x="730" y="85" text-anchor="middle" font-weight="bold" fill="#2e7d32">vRack</text>
>>  <text x="730" y="110" text-anchor="middle" fill="#555" font-size="10">172.16.0.0/16</text>
>>  <text x="730" y="130" text-anchor="middle" fill="#555" font-size="10">Bare Metal</text>
>>  <text x="730" y="150" text-anchor="middle" fill="#555" font-size="10">Hosted Private Cloud</text>
>>  <text x="730" y="170" text-anchor="middle" fill="#555" font-size="10">Public Cloud</text>
>>
>>  <!-- Arrows -->
>>  <line x1="165" y1="115" x2="240" y2="115" stroke="#555" stroke-width="1.5" marker-end="url(#t7)"/>
>>  <line x1="390" y1="115" x2="465" y2="115" stroke="#555" stroke-width="1.5" marker-end="url(#t7)"/>
>>  <line x1="595" y1="115" x2="660" y2="115" stroke="#555" stroke-width="1.5" marker-end="url(#t7)"/>
>>
>>  <text x="200" y="105" text-anchor="middle" fill="#555" font-size="9">VXC</text>
>>  <text x="428" y="105" text-anchor="middle" fill="#555" font-size="9">VXC</text>
>>  <text x="628" y="105" text-anchor="middle" fill="#555" font-size="9">vRack</text>
>>
>>  <!-- Labels -->
>>  <text x="410" y="25" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">Azure ↔ Fournisseur ↔ OVHcloud Connect ↔ vRack</text>
>>
>>  <defs>
>>    <marker id="t7" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
>>      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
>>    </marker>
>>  </defs>
>></svg>
>>```
>>
>>### Quand l'utiliser
>>
>>| Scénario | Recommandation |
>>|---|---|
>>| Migrer des VM depuis Azure vers OVHcloud | ✅ Connexion simple |
>>| Burst de calcul depuis Azure vers OVHcloud | ✅ Connexion simple |
>>| Multicloud de production (haute disponibilité) | Utilisez le [tutoriel résilient](../4.2_resilient/4.4.2_azure_resilient) |
>>| PRA entre Azure et OVHcloud | Utilisez le [tutoriel résilient](../4.2_resilient/4.4.2_azure_resilient) |
>>
>>### Étape par étape
>>
>>#### 1. Créer un circuit Azure ExpressRoute
>>
>>1. Dans le **portail Azure** → **Créer une ressource** → **ExpressRoute**.
>>2. Sélectionnez :
>>   - **Provider** : Megaport ou Equinix
>>   - **Peering location** : choisissez un emplacement partagé avec votre PoP OVHcloud
>>   - **Bandwidth** : faites correspondre la bande passante de votre OVHcloud Connect (1 Gbps / 10 Gbps)
>>3. Finalisez la création. Notez la **clé de service** (un GUID).
>>
>>#### 2. Commander votre OVHcloud Connect Provider
>>
>>Si ce n'est pas déjà fait, [commandez un OVHcloud Connect Provider](../3.2_order_provider) sur un PoP desservi par le même fournisseur.
>>
>>Récupérez votre **clé de service** depuis l'espace client OVHcloud ou via l'API.
>>
>>#### 3. Créer le pont chez le fournisseur
>>
>>Sur la plateforme du fournisseur, créez **deux VXC** (ou connexions équivalentes) :
>>
>>| VXC | Source | Destination |
>>|---|---|---|
>>| VXC 1 | Azure ExpressRoute (clé de service) | MCR / Port du fournisseur |
>>| VXC 2 | MCR / Port du fournisseur | OVHcloud Connect (clé de service) |
>>
>>Si le fournisseur le prend en charge, un MCR (Cloud Router) joue le rôle de point de transit entre Azure et OVHcloud.
>>
>>**Exemple Megaport :**
>>
>>1. Créez un **Megaport Cloud Router (MCR)** dans la même métropole.
>>2. Ajoutez une VXC depuis le MCR → Azure ExpressRoute en utilisant la clé de service Azure.
>>3. Ajoutez une VXC depuis le MCR → OVHcloud Connect en utilisant la clé de service OVHcloud.
>>
>>**Exemple Equinix Fabric :**
>>
>>1. Créez une connexion depuis votre port Fabric → Azure ExpressRoute en utilisant la clé de service.
>>2. Créez une connexion depuis votre port Fabric → OVHcloud Connect en utilisant la clé de service.
>>
>>#### 4. Configurer Azure Private Peering
>>
>>Sur le circuit Azure ExpressRoute :
>>
>>1. Allez dans **Peerings** → **Azure private**.
>>2. Configurez :
>>   - **Peer ASN** : l'ASN de votre MCR ou de votre fournisseur
>>   - **Primary subnet** : un /30 pour BGP (par exemple `169.254.100.0/30`)
>>   - **Secondary subnet** : un /30 pour BGP (par exemple `169.254.100.4/30`)
>>   - **VLAN ID** : fourni par le fournisseur
>>
>>#### 5. Configurer le peering BGP OVHcloud
>>
>>[Configurez OCC L3 avec BGP](../3.7_occ_l3_bgp) pour le service OVHcloud Connect.
>>
>>Assurez-vous que le MCR ou le routeur du fournisseur annonce les préfixes Azure (`10.2.0.0/16`) vers OVHcloud, et les préfixes OVHcloud (`172.16.0.0/16`) vers Azure.
>>
>>#### 6. Associer votre vRack
>>
>>[Associez le service OVHcloud Connect à votre vRack](../3.5_associate_vrack).
>>
>>#### 7. Vérifier la connectivité
>>
>>| Vérification | Commande / Action |
>>|---|---|
>>| Statut du circuit Azure | Portail Azure → ExpressRoute → Overview → **Provider status: Provisioned** |
>>| Peering BGP Azure | Portail Azure → ExpressRoute → Peerings → **State: Enabled** |
>>| Statut BGP OVHcloud | API OVHcloud : `GET /ovhCloudConnect/{serviceName}` → `status: active` |
>>| Statut VXC fournisseur | Portail fournisseur → VXC → **Active / Up** |
>>| Ping de bout en bout | Depuis une VM Azure → IP privée d'un serveur OVHcloud |
>>
>>### Flux de routage BGP
>>
>>Cette architecture comporte **trois segments BGP** :
>>
>>| Segment | Extrémités | ASN |
>>|---|---|---|
>>| Azure ↔ Fournisseur | Azure (ASN 12076) ↔ ASN du MCR/fournisseur | 12076 ↔ Fournisseur |
>>| Fournisseur ↔ OVHcloud | ASN du MCR/fournisseur ↔ AS BGP OVHcloud [TODO: par PoP — 65501 EU / 65502 CA / 65519 Asia] | Fournisseur ↔ [TODO: par PoP] |
>>| OVHcloud ↔ vRack | Routage interne au sein d'OVHcloud | N/A |
>>
>> **Note :** Azure utilise l'ASN **12076** pour le Private Peering ExpressRoute.
>>
>>### Dépannage
>>
>>| Symptôme | Cause probable | Action |
>>|---|---|---|
>>| Circuit ExpressRoute bloqué dans « Enabling » | Le fournisseur n'a pas finalisé le provisionnement | Consultez le portail du fournisseur ; contactez son support |
>>| Le peering privé Azure n'est pas établi | Discordance de sous-réseau ou d'ASN | Vérifiez que les sous-réseaux /30 et l'ASN du peer correspondent aux paramètres du fournisseur |
>>| Session BGP OVHcloud en panne | Clé de service non activée ou discordance de VLAN | Vérifiez l'API OVHcloud et la configuration VXC du fournisseur |
>>| Pas de route vers le VNet Azure | Annonce de route manquante | Vérifiez que le MCR transmet les préfixes Azure vers OVHcloud |
>>| Routage asymétrique | Chemins différents pour le sortant/entrant | Assurez-vous que les deux côtés préfèrent le même chemin ; vérifiez les attributs BGP |
>>
> GCP
>>### Prérequis
>>
>>- Un **projet GCP** avec le rôle Compute Network Admin
>>- Un **GCP Cloud Router** créé dans la région la plus proche de l'emplacement du fournisseur
>>- Un **compte OVHcloud** avec un vRack
>>- Un compte chez un **fournisseur partagé** prenant en charge à la fois GCP Cross-Cloud Interconnect et OVHcloud Connect
>>- Des **plages IP non chevauchantes** entre le VPC GCP et le vRack OVHcloud
>>
>>### Architecture
>>
>>```svg
>><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 820 230" font-family="Arial, sans-serif" font-size="11">
>>  <rect width="820" height="230" fill="#f8f9fa" rx="8"/>
>>
>>  <!-- GCP -->
>>  <rect x="15" y="55" width="150" height="130" rx="8" fill="#e8eaf6" stroke="#4285f4" stroke-width="2"/>
>>  <text x="90" y="80" text-anchor="middle" font-weight="bold" fill="#4285f4">Google Cloud</text>
>>  <rect x="30" y="90" width="120" height="35" rx="4" fill="#fff" stroke="#c5cae9"/>
>>  <text x="90" y="112" text-anchor="middle" fill="#555" font-size="10">Interconnect</text>
>>  <text x="90" y="150" text-anchor="middle" fill="#555" font-size="10">VPC : 10.3.0.0/16</text>
>>  <text x="90" y="170" text-anchor="middle" fill="#555" font-size="9">Cloud Router</text>
>>
>>  <!-- Provider -->
>>  <rect x="240" y="65" width="150" height="100" rx="6" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
>>  <text x="315" y="90" text-anchor="middle" font-weight="bold" fill="#6a1b9a">Fournisseur</text>
>>  <text x="315" y="110" text-anchor="middle" fill="#555" font-size="10">Megaport / Equinix</text>
>>  <text x="315" y="130" text-anchor="middle" fill="#555" font-size="10">VXC ou Fabric</text>
>>  <text x="315" y="148" text-anchor="middle" fill="#555" font-size="9">Pont par clé de service</text>
>>
>>  <!-- OVHcloud PoP -->
>>  <rect x="465" y="65" width="130" height="100" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
>>  <text x="530" y="90" text-anchor="middle" font-weight="bold" fill="#2e7d32">PoP OVHcloud</text>
>>  <text x="530" y="115" text-anchor="middle" fill="#555" font-size="10">OCC Provider</text>
>>  <text x="530" y="135" text-anchor="middle" fill="#555" font-size="10">Peering BGP</text>
>>  <text x="530" y="150" text-anchor="middle" fill="#555" font-size="9">ASN variable selon le PoP</text>
>>
>>  <!-- vRack -->
>>  <rect x="660" y="55" width="140" height="130" rx="8" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
>>  <text x="730" y="85" text-anchor="middle" font-weight="bold" fill="#2e7d32">vRack</text>
>>  <text x="730" y="110" text-anchor="middle" fill="#555" font-size="10">172.16.0.0/16</text>
>>  <text x="730" y="130" text-anchor="middle" fill="#555" font-size="10">Bare Metal</text>
>>  <text x="730" y="150" text-anchor="middle" fill="#555" font-size="10">Hosted Private Cloud</text>
>>  <text x="730" y="170" text-anchor="middle" fill="#555" font-size="10">Public Cloud</text>
>>
>>  <!-- Arrows -->
>>  <line x1="165" y1="115" x2="240" y2="115" stroke="#555" stroke-width="1.5" marker-end="url(#t9)"/>
>>  <line x1="390" y1="115" x2="465" y2="115" stroke="#555" stroke-width="1.5" marker-end="url(#t9)"/>
>>  <line x1="595" y1="115" x2="660" y2="115" stroke="#555" stroke-width="1.5" marker-end="url(#t9)"/>
>>
>>  <text x="200" y="105" text-anchor="middle" fill="#555" font-size="9">VXC</text>
>>  <text x="428" y="105" text-anchor="middle" fill="#555" font-size="9">VXC</text>
>>  <text x="628" y="105" text-anchor="middle" fill="#555" font-size="9">vRack</text>
>>
>>  <!-- Title -->
>>  <text x="410" y="25" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">GCP ↔ Fournisseur ↔ OVHcloud Connect ↔ vRack</text>
>>
>>  <defs>
>>    <marker id="t9" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
>>      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
>>    </marker>
>>  </defs>
>></svg>
>>```
>>
>>### Quand l'utiliser
>>
>>| Scénario | Recommandation |
>>|---|---|
>>| Transfert de données depuis GCP vers OVHcloud | ✅ Connexion simple |
>>| Pipeline IA/ML hybride (compute GCP + stockage OVHcloud) | ✅ Connexion simple |
>>| Multicloud de production avec exigences de SLA | Utilisez le [tutoriel résilient](../4.2_resilient) |
>>| Reprise d'activité après sinistre | Utilisez le [tutoriel résilient](../4.2_resilient) |
>>
>>### Types d'Interconnect GCP
>>
>>GCP propose deux principales options d'interconnect :
>>
>>| Type | Description | À utiliser quand |
>>|---|---|---|
>>| **Dedicated Interconnect** | Connexion physique directe au réseau de Google | Vous disposez d'une présence dans un site de colocation GCP |
>>| **Partner Interconnect** | Connexion via un fournisseur de services pris en charge | Vous utilisez Megaport, Equinix ou un autre partenaire GCP |
>>
>> **Pour ce tutoriel**, nous utilisons **Partner Interconnect** car le fournisseur partagé (Megaport ou Equinix) joue le rôle de pont entre GCP et OVHcloud.
>>
>>### Étape par étape
>>
>>#### 1. Créer un GCP Cloud Router
>>
>>Dans la **console GCP** → **Hybrid Connectivity** → **Cloud Routers** → **Create** :
>>
>>- **Name** : `router-ovhcloud`
>>- **Network** : votre VPC
>>- **Region** : la région la plus proche du PoP du fournisseur (par exemple `europe-west1` pour Paris)
>>- **ASN** : utilisez un ASN privé (par exemple `65001`) ou la valeur par défaut de Google (`16550`)
>>
>>#### 2. Créer une VLAN attachment Partner Interconnect
>>
>>Allez dans **Hybrid Connectivity** → **Interconnect** → **VLAN attachments** → **Create** :
>>
>>1. Sélectionnez **Partner Interconnect connection**.
>>2. Choisissez votre Cloud Router.
>>3. Sélectionnez la région et le edge availability domain appropriés.
>>4. Définissez la **MTU** à 1500 (standard) ou à 1440 pour l'interopérabilité VPN.
>>5. Notez la **pairing key** générée par GCP.
>>
>> **Format de la pairing key GCP** : une chaîne de la forme `<random>/<region>/<edge-availability-domain>`
>>
>>#### 3. Créer le pont chez le fournisseur
>>
>>Sur la plateforme du fournisseur, créez les connexions qui pontent GCP et OVHcloud :
>>
>>**Exemple Megaport :**
>>
>>1. Créez un **MCR** (Megaport Cloud Router) dans une métropole avec présence GCP et OVHcloud.
>>2. **VXC 1** : MCR → Google Cloud Partner Interconnect (utilisez la pairing key GCP).
>>3. **VXC 2** : MCR → OVHcloud Connect (utilisez la clé de service OVHcloud).
>>
>>**Exemple Equinix Fabric :**
>>
>>1. Créez une connexion depuis votre port Fabric → GCP Partner Interconnect (utilisez la pairing key GCP).
>>2. Créez une connexion depuis votre port Fabric → OVHcloud Connect (utilisez la clé de service OVHcloud).
>>
>>#### 4. Activer la VLAN attachment GCP
>>
>>Une fois que le fournisseur a provisionné la connexion :
>>
>>1. Retournez dans la **console GCP** → **VLAN attachments**.
>>2. L'attachement doit afficher **« Waiting for provider »** puis **« Pending customer »**.
>>3. Cliquez sur **Activate** pour activer l'attachement.
>>4. GCP configurera automatiquement BGP entre le Cloud Router et le fournisseur.
>>
>>#### 5. Configurer le peering BGP OVHcloud
>>
>>[Configurez OCC L3 avec BGP](../3.7_occ_l3_bgp).
>>
>>Assurez-vous que le MCR du fournisseur :
>>- Annonce les préfixes du VPC GCP (`10.3.0.0/16`) vers OVHcloud (AS BGP [TODO: par PoP — 65501 EU / 65502 CA / 65519 Asia]).
>>- Annonce les préfixes OVHcloud (`172.16.0.0/16`) vers le GCP Cloud Router.
>>
>>#### 6. Associer votre vRack
>>
>>[Associez le service OVHcloud Connect à votre vRack](../3.5_associate_vrack).
>>
>>#### 7. Vérifier la connectivité
>>
>>| Vérification | Comment vérifier |
>>|---|---|
>>| VLAN attachment GCP | Console GCP → VLAN attachments → **Status: Active** |
>>| BGP du Cloud Router GCP | Console GCP → Cloud Routers → BGP peers → **Status: Established** |
>>| VXC fournisseur | Portail fournisseur → VXC → **Active / Up** |
>>| BGP OVHcloud | API OVHcloud → statut du service = **active** |
>>| De bout en bout | Ping depuis une VM GCP → IP privée d'un serveur OVHcloud |
>>
>>### Flux de routage BGP
>>
>>| Segment | Extrémités | ASN |
>>|---|---|---|
>>| GCP ↔ Fournisseur | Cloud Router (ASN 16550) ↔ MCR (ASN du fournisseur) | 16550 ↔ Fournisseur |
>>| Fournisseur ↔ OVHcloud | MCR (ASN du fournisseur) ↔ AS BGP OVHcloud [TODO: par PoP — 65501 EU / 65502 CA / 65519 Asia] | Fournisseur ↔ [TODO: par PoP] |
>>| OVHcloud ↔ vRack | Routage interne OVHcloud | N/A |
>>
>> **Note :** le GCP Cloud Router utilise l'ASN **16550** par défaut. Vous pouvez configurer un ASN personnalisé lors de la création du Cloud Router.
>>
>>### Dépannage
>>
>>| Symptôme | Cause probable | Action |
>>|---|---|---|
>>| VLAN attachment bloqué dans « Waiting for provider » | VXC du fournisseur pas encore provisionnée | Consultez le portail du fournisseur ; vérifiez que la pairing key GCP est correcte |
>>| VLAN attachment dans « Pending customer » | Pas encore activé dans la console GCP | Cliquez sur **Activate** sur la VLAN attachment |
>>| BGP du Cloud Router non établi | Discordance d'ASN ou d'IP de peering | Vérifiez que l'ASN du Cloud Router correspond à ce que le fournisseur attend |
>>| Pas de routes vers le VPC GCP | Annonce de route manquante | Assurez-vous que le Cloud Router annonce les sous-réseaux du VPC et que le MCR les transmet |
>>| BGP OVHcloud en panne | Clé de service non consommée ou discordance de VLAN | Vérifiez le statut du service OVHcloud et la configuration de la VXC du fournisseur |

### Et ensuite ?

- [Architecture On-Prem résiliente](../4.2_resilient) pour la haute disponibilité
- [Superviser votre connexion](../3.9_monitor)

### Aller plus loin

Pour bénéficier d'une formation ou d'une assistance technique dans la mise en œuvre de nos solutions, contactez votre conseiller commercial ou cliquez sur [ce lien](/links/professional-services) afin d'obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l'équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
