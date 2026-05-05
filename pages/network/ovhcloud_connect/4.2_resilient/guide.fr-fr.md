---
title: Mettre en place une architecture OVHcloud Connect résiliente
excerpt: Connectez votre infrastructure à OVHcloud via deux liens OVHcloud Connect redondants pour assurer la haute disponibilité et la bascule automatique.
updated: 2026-02-18
---

## Objectif

Ce tutoriel vous guide pour connecter votre infrastructure à OVHcloud à l'aide de **deux liens OVHcloud Connect indépendants** afin d'obtenir la haute disponibilité. Si un lien tombe en panne, le trafic bascule automatiquement vers l'autre.

## En pratique

Vous trouverez ci-dessous les prérequis et les instructions pour cinq cas d'usage distincts, que vous pouvez choisir selon l'architecture souhaitée.

> [!tabs]
> On-Premises
>>### Prérequis
>>
>>- Deux services OVHcloud Connect (Direct, Provider ou un mix) se terminant sur **des PoPs différents**
>>- Un routeur (ou deux routeurs) capable de gérer **plusieurs sessions BGP** avec bascule
>>- Un plan d'adressage IP couvrant **deux AZ** chez OVHcloud
>>- Un vRack avec des ressources dans les deux AZ
>>
>>### Architecture
>>
>>```svg
>><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 300" font-family="Arial, sans-serif" font-size="12">
>>  <rect width="800" height="300" fill="#f8f9fa" rx="8"/>
>>
>>  <!-- On-Premises -->
>>  <rect x="20" y="70" width="180" height="160" rx="8" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
>>  <text x="110" y="100" text-anchor="middle" font-weight="bold" fill="#1565c0">On-Premises</text>
>>  <text x="110" y="125" text-anchor="middle" fill="#555" font-size="10">Router 1</text>
>>  <text x="110" y="145" text-anchor="middle" fill="#555" font-size="10">(or dual-homed router)</text>
>>  <text x="110" y="175" text-anchor="middle" fill="#555" font-size="10">ASN: 65001</text>
>>  <text x="110" y="195" text-anchor="middle" fill="#555" font-size="10">10.0.0.0/16</text>
>>
>>  <!-- PoP A -->
>>  <rect x="280" y="40" width="140" height="70" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
>>  <text x="350" y="65" text-anchor="middle" font-weight="bold" fill="#e65100">PoP A</text>
>>  <text x="350" y="85" text-anchor="middle" fill="#555" font-size="10">Primary link</text>
>>
>>  <!-- PoP B -->
>>  <rect x="280" y="180" width="140" height="70" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
>>  <text x="350" y="205" text-anchor="middle" font-weight="bold" fill="#e65100">PoP B</text>
>>  <text x="350" y="225" text-anchor="middle" fill="#555" font-size="10">Backup link</text>
>>
>>  <!-- OVHcloud AZ 1 -->
>>  <rect x="500" y="30" width="260" height="90" rx="8" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
>>  <text x="630" y="55" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud AZ 1</text>
>>  <text x="630" y="78" text-anchor="middle" fill="#555" font-size="10">vRack · Servers · VMs</text>
>>  <text x="630" y="98" text-anchor="middle" fill="#555" font-size="10">172.16.1.0/24</text>
>>
>>  <!-- OVHcloud AZ 2 -->
>>  <rect x="500" y="170" width="260" height="90" rx="8" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
>>  <text x="630" y="195" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud AZ 2</text>
>>  <text x="630" y="218" text-anchor="middle" fill="#555" font-size="10">vRack · Servers · VMs</text>
>>  <text x="630" y="238" text-anchor="middle" fill="#555" font-size="10">172.16.2.0/24</text>
>>
>>  <!-- Arrows -->
>>  <line x1="200" y1="120" x2="280" y2="75" stroke="#2e7d32" stroke-width="2" marker-end="url(#t2)"/>
>>  <line x1="200" y1="180" x2="280" y2="215" stroke="#e65100" stroke-width="2" stroke-dasharray="6,3" marker-end="url(#t2)"/>
>>  <line x1="420" y1="75" x2="500" y2="75" stroke="#2e7d32" stroke-width="2" marker-end="url(#t2)"/>
>>  <line x1="420" y1="215" x2="500" y2="215" stroke="#e65100" stroke-width="2" stroke-dasharray="6,3" marker-end="url(#t2)"/>
>>
>>  <!-- Labels -->
>>  <text x="240" y="85" text-anchor="middle" fill="#2e7d32" font-size="10" font-weight="bold">Primary</text>
>>  <text x="240" y="210" text-anchor="middle" fill="#e65100" font-size="10">Backup</text>
>>
>>  <defs>
>>    <marker id="t2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
>>      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
>>    </marker>
>>  </defs>
>></svg>
>>```
>>
>>### Quand utiliser cette architecture
>>
>>| ✅ Recommandée pour | Détails |
>>|---|---|
>>| Production critique pour l'activité | Workloads ne tolérant aucune indisponibilité |
>>| Environnements réglementés | Cadres de conformité exigeant la haute disponibilité |
>>| Exigences de SLA ≥ 99,99 % | Architecture multi-chemins nécessaire pour un SLA premium |
>>| Reprise après sinistre | Bascule automatique sans intervention manuelle |
>>
>>#### 1. Commander deux liens OVHcloud Connect
>>
>>Commandez deux services OVHcloud Connect distincts sur **des PoPs différents** pour assurer la diversité physique :
>>
>>- **Lien 1 (principal) :** commandez sur le PoP A — voir [Commander Direct](../3.1_order_direct) ou [Commander Provider](../3.2_order_provider).
>>- **Lien 2 (secours) :** commandez sur le PoP B — même processus, PoP différent.
>>
>>> **Conseil de diversité :** utilisez des datacenters différents ou, à défaut, des chemins physiques distincts pour éviter un point de défaillance partagé.
>>
>>#### 2. Installer les deux connexions physiques
>>
>>Pour chaque lien :
>>- **Direct :** installez les cross-connects sur chaque PoP. Voir [LOA Cross Connect](../3.11_cross_connect_loa).
>>- **Provider :** partagez les clés d'appairage respectives avec votre ou vos opérateurs.
>>
>>#### 3. Configurer BGP avec bascule
>>
>>Mettez en place **deux sessions BGP** — une par lien — avec des politiques de routage qui définissent le chemin préféré.
>>
>>##### Exemple actif/passif (Cisco IOS)
>>
>>```
>>router bgp 65001
>> ! Primary link via PoP A
>> neighbor 192.0.2.1 remote-as 35540
>> neighbor 192.0.2.1 description OVHcloud-Primary
>> neighbor 192.0.2.1 route-map PRIMARY-IN in
>> neighbor 192.0.2.1 route-map PRIMARY-OUT out
>>
>> ! Backup link via PoP B
>> neighbor 198.51.100.1 remote-as 35540
>> neighbor 198.51.100.1 description OVHcloud-Backup
>> neighbor 198.51.100.1 route-map BACKUP-IN in
>> neighbor 198.51.100.1 route-map BACKUP-OUT out
>>
>>! Prefer primary path using Local Preference
>>route-map PRIMARY-IN permit 10
>> set local-preference 200
>>
>>route-map BACKUP-IN permit 10
>> set local-preference 100
>>
>>! Influence OVHcloud's return traffic using AS-path prepending on backup
>>route-map PRIMARY-OUT permit 10
>>
>>route-map BACKUP-OUT permit 10
>> set as-path prepend 65001 65001
>>```
>>
>>##### Attributs BGP clés pour la bascule
>>
>>| Attribut | Effet | Cas d'usage |
>>|---|---|---|
>>| **Local Preference** | Contrôle la préférence du chemin sortant (plus élevé = préféré) | Rendre le chemin principal préféré pour le trafic sortant de votre réseau |
>>| **AS-path prepending** | Fait paraître un chemin plus long (moins préféré) | Influencer le choix du chemin de retour par OVHcloud |
>>| **MED** | Suggère une préférence au côté distant | Peut ne pas être pris en compte dans toutes les configurations OVHcloud |
>>
>>#### 4. Associer les deux liens à votre vRack
>>
>>Associez les deux services OVHcloud Connect au **même vRack**. Voir [Associer à un vRack](../3.5_associate_vrack).
>>
>>#### 5. Configurer les sous-réseaux dans les deux AZ
>>
>>Configurez des sous-réseaux privés dans les deux Availability Zones. Voir [Configurer votre réseau vRack](../3.6_vrack_network_setup).
>>
>>#### 6. Tester la bascule
>>
>>**Cette étape est critique.** Ne sautez pas les tests de bascule.
>>
>>1. **Vérifiez le fonctionnement normal :**
>>   - Les deux sessions BGP sont à l'état Established.
>>   - Le trafic transite par le lien principal.
>>
>>2. **Simulez la défaillance du lien principal :**
>>   - Arrêtez la session BGP principale ou déconnectez physiquement le lien principal.
>>   - Vérifiez que le trafic bascule vers le lien de secours dans le délai de convergence BGP (généralement 30 à 90 secondes ; cela peut être plus rapide avec BFD).
>>   - Confirmez l'absence de perte de paquets au-delà de la fenêtre de convergence.
>>
>>3. **Restaurez le lien principal :**
>>   - Remettez le lien principal en service.
>>   - Vérifiez que le trafic revient sur le chemin principal.
>>
>>4. **Testez l'inverse :**
>>   - Simulez une défaillance du lien de secours pendant que le principal est actif. Cela confirme que les deux liens fonctionnent indépendamment.
>>
>>#### 7. Mettre en place la supervision
>>
>>Supervisez les **deux liens** indépendamment. Configurez des alertes pour :
>>- Les chutes de session BGP sur l'un ou l'autre lien
>>- Le déséquilibre de trafic (tout le trafic sur un seul lien peut indiquer une défaillance de l'autre)
>>- La bande passante approchant la capacité maximale sur l'un ou l'autre lien
>>
>>Voir [Superviser](../3.9_monitor).
>>
>>### Avancé : configuration actif/actif
>>
>>Pour un débit maximal et une bascule plus rapide, vous pouvez exploiter les deux liens en mode **actif/actif** :
>>
>>- Définissez une **Local Preference égale** sur les deux chemins.
>>- Utilisez **ECMP (Equal-Cost Multi-Path)** s'il est pris en charge.
>>- Le trafic est réparti sur les deux liens.
>>- Si un lien tombe en panne, l'intégralité du trafic transite immédiatement par le lien restant.
>>
>>> Le mode actif/actif offre une bande passante agrégée plus élevée mais nécessite une planification de capacité rigoureuse — chaque lien doit être en mesure d'absorber seul la totalité de la charge en cas de défaillance.
>>
> WAN
>>### Prérequis
>>
>>- Un compte OVHcloud avec un vRack
>>- Deux services OVHcloud Connect (Direct, Provider ou un mix) se terminant sur **des PoPs différents**
>>- Un backbone WAN (MPLS ou SD-WAN) avec des circuits atteignant les deux PoPs
>>- Des équipements de bordure WAN compatibles BGP
>>- Un plan d'adressage IP sans recouvrement entre vos sous-réseaux WAN et OVHcloud
>>
>>### Architecture
>>
>>```svg
>><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 300" font-family="Arial, sans-serif" font-size="12">
>>  <rect width="800" height="300" fill="#f8f9fa" rx="8"/>
>>
>>  <!-- Branch offices -->
>>  <rect x="15" y="80" width="120" height="140" rx="6" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/>
>>  <text x="75" y="110" text-anchor="middle" font-weight="bold" fill="#1565c0" font-size="11">Branches</text>
>>  <text x="75" y="135" text-anchor="middle" fill="#555" font-size="10">Office A</text>
>>  <text x="75" y="155" text-anchor="middle" fill="#555" font-size="10">Office B</text>
>>  <text x="75" y="175" text-anchor="middle" fill="#555" font-size="10">Office C</text>
>>
>>  <!-- WAN -->
>>  <rect x="175" y="90" width="120" height="120" rx="6" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
>>  <text x="235" y="125" text-anchor="middle" font-weight="bold" fill="#6a1b9a" font-size="11">WAN</text>
>>  <text x="235" y="145" text-anchor="middle" fill="#555" font-size="10">SD-WAN /</text>
>>  <text x="235" y="160" text-anchor="middle" fill="#555" font-size="10">MPLS</text>
>>
>>  <!-- PoP A -->
>>  <rect x="345" y="45" width="110" height="65" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
>>  <text x="400" y="70" text-anchor="middle" font-weight="bold" fill="#e65100">PoP A</text>
>>  <text x="400" y="90" text-anchor="middle" fill="#555" font-size="10">Primary</text>
>>
>>  <!-- PoP B -->
>>  <rect x="345" y="185" width="110" height="65" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
>>  <text x="400" y="210" text-anchor="middle" font-weight="bold" fill="#e65100">PoP B</text>
>>  <text x="400" y="230" text-anchor="middle" fill="#555" font-size="10">Backup</text>
>>
>>  <!-- OVHcloud AZ1 -->
>>  <rect x="510" y="30" width="250" height="85" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
>>  <text x="635" y="58" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud AZ 1</text>
>>  <text x="635" y="78" text-anchor="middle" fill="#555" font-size="10">vRack · Servers · 172.16.1.0/24</text>
>>
>>  <!-- OVHcloud AZ2 -->
>>  <rect x="510" y="180" width="250" height="85" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
>>  <text x="635" y="208" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud AZ 2</text>
>>  <text x="635" y="228" text-anchor="middle" fill="#555" font-size="10">vRack · Servers · 172.16.2.0/24</text>
>>
>>  <!-- Arrows -->
>>  <line x1="135" y1="150" x2="175" y2="150" stroke="#555" stroke-width="1.5" marker-end="url(#t4)"/>
>>  <line x1="295" y1="120" x2="345" y2="77" stroke="#2e7d32" stroke-width="2" marker-end="url(#t4)"/>
>>  <line x1="295" y1="180" x2="345" y2="217" stroke="#e65100" stroke-width="2" stroke-dasharray="6,3" marker-end="url(#t4)"/>
>>  <line x1="455" y1="77" x2="510" y2="72" stroke="#2e7d32" stroke-width="2" marker-end="url(#t4)"/>
>>  <line x1="455" y1="217" x2="510" y2="222" stroke="#e65100" stroke-width="2" stroke-dasharray="6,3" marker-end="url(#t4)"/>
>>
>>  <defs>
>>    <marker id="t4" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
>>      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
>>    </marker>
>>  </defs>
>></svg>
>>```
>>
>>### Quand utiliser cette architecture
>>
>>- **Connectivité WAN critique pour l'activité** — plusieurs sites dépendent de l'accès à OVHcloud.
>>- **Exigences de SLA ≥ 99,99 %** — des liens redondants sont nécessaires pour des garanties de disponibilité premium.
>>- **SD-WAN avec chemins diversifiés** — les plateformes SD-WAN peuvent router automatiquement sur le meilleur chemin disponible.
>>
>>### Étape par étape
>>
>>#### 1. Commander deux liens OVHcloud Connect
>>
>>Commandez sur **des PoPs différents** pour assurer la diversité physique. Vous pouvez combiner connexions Direct et Provider.
>>
>>#### 2. Provisionner les deux circuits WAN
>>
>>Coordonnez-vous avec votre opérateur WAN pour livrer des circuits sur les deux PoPs. Si vous utilisez une plateforme SD-WAN, configurez les deux chemins comme connexions de transport (underlay).
>>
>>#### 3. Configurer BGP avec bascule
>>
>>Mettez en place deux sessions BGP avec des politiques de routage adaptées :
>>
>>- **Actif/passif :** utilisez la Local Preference et l'AS-path prepending (voir l'onglet On-Premises pour des exemples BGP détaillés).
>>- **Actif/actif :** utilisez ECMP pour répartir la charge sur les deux liens.
>>- **Intégration SD-WAN :** de nombreuses plateformes SD-WAN détectent la qualité des liens et redirigent le trafic automatiquement, en complément de la bascule BGP.
>>
>>#### 4. Associer les deux liens à votre vRack
>>
>>Les deux services OVHcloud Connect doivent être associés au même vRack.
>>
>>#### 5. Configurer les sous-réseaux dans les AZ
>>
>>Répartissez les sous-réseaux entre les deux AZ pour une redondance complète. Voir [Configurer votre réseau vRack](../3.6_vrack_network_setup).
>>
>>#### 6. Tester la bascule
>>
>>1. Vérifiez que les deux sessions BGP sont à l'état Established.
>>2. Arrêtez le lien principal et confirmez que le trafic bascule vers le lien de secours.
>>3. Restaurez le lien principal et vérifiez que le trafic revient.
>>4. Répétez pour le lien de secours.
>>
>>#### 7. Superviser les deux chemins
>>
>>Mettez en place une supervision indépendante pour chaque lien, chaque session BGP et chaque circuit WAN. Voir [Superviser](../3.9_monitor).
>>
>>### Considérations SD-WAN
>>
>>Si vous utilisez un overlay SD-WAN :
>>
>>- Configurez les liens OVHcloud Connect comme **transports underlay** dans votre contrôleur SD-WAN.
>>- La plateforme SD-WAN peut effectuer une **sélection de chemin** basée sur la latence, la gigue et la perte de paquets — plus rapidement que la convergence BGP.
>>- Assurez-vous que les politiques BGP et SD-WAN sont **alignées** (évitez les décisions de routage contradictoires).
>>
> AWS
>>### Prérequis
>>
>>- Un **compte AWS** avec un VPC configuré
>>- Un **compte OVHcloud** avec un vRack
>>- Deux connexions AWS Direct Connect sur **des emplacements différents**
>>- Deux services OVHcloud Connect Provider sur **des PoPs différents**
>>- Un opérateur partagé (Megaport ou Equinix) présent sur les deux emplacements
>>- Des plages IP non chevauchantes entre le VPC AWS et les sous-réseaux OVHcloud
>>
>>### Architecture
>>
>>```svg
>><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 310" font-family="Arial, sans-serif" font-size="11">
>>  <rect width="800" height="310" fill="#f8f9fa" rx="8"/>
>>
>>  <!-- AWS -->
>>  <rect x="15" y="60" width="160" height="190" rx="8" fill="#fff3e0" stroke="#ff9800" stroke-width="2"/>
>>  <text x="95" y="85" text-anchor="middle" font-weight="bold" fill="#e65100">AWS</text>
>>  <rect x="30" y="100" width="130" height="40" rx="4" fill="#fff" stroke="#ffcc80"/>
>>  <text x="95" y="125" text-anchor="middle" fill="#555" font-size="10">Direct Connect 1</text>
>>  <rect x="30" y="155" width="130" height="40" rx="4" fill="#fff" stroke="#ffcc80"/>
>>  <text x="95" y="180" text-anchor="middle" fill="#555" font-size="10">Direct Connect 2</text>
>>  <text x="95" y="230" text-anchor="middle" fill="#555" font-size="10">VPC: 10.1.0.0/16</text>
>>
>>  <!-- Provider -->
>>  <rect x="230" y="80" width="140" height="65" rx="6" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
>>  <text x="300" y="105" text-anchor="middle" font-weight="bold" fill="#6a1b9a">Provider A</text>
>>  <text x="300" y="125" text-anchor="middle" fill="#555" font-size="10">VXC / MCR</text>
>>
>>  <rect x="230" y="170" width="140" height="65" rx="6" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
>>  <text x="300" y="195" text-anchor="middle" font-weight="bold" fill="#6a1b9a">Provider B</text>
>>  <text x="300" y="215" text-anchor="middle" fill="#555" font-size="10">VXC / MCR</text>
>>
>>  <!-- OVHcloud -->
>>  <rect x="440" y="50" width="130" height="70" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
>>  <text x="505" y="75" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud</text>
>>  <text x="505" y="95" text-anchor="middle" fill="#2e7d32" font-size="10">PoP A / AZ 1</text>
>>
>>  <rect x="440" y="180" width="130" height="70" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
>>  <text x="505" y="205" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud</text>
>>  <text x="505" y="225" text-anchor="middle" fill="#2e7d32" font-size="10">PoP B / AZ 2</text>
>>
>>  <!-- vRack -->
>>  <rect x="620" y="100" width="150" height="110" rx="8" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
>>  <text x="695" y="130" text-anchor="middle" font-weight="bold" fill="#2e7d32">vRack</text>
>>  <text x="695" y="150" text-anchor="middle" fill="#555" font-size="10">172.16.0.0/16</text>
>>  <text x="695" y="170" text-anchor="middle" fill="#555" font-size="10">Servers / VMs</text>
>>  <text x="695" y="190" text-anchor="middle" fill="#555" font-size="10">Multi-AZ</text>
>>
>>  <!-- Arrows -->
>>  <line x1="160" y1="120" x2="230" y2="112" stroke="#2e7d32" stroke-width="1.5" marker-end="url(#t6)"/>
>>  <line x1="160" y1="175" x2="230" y2="202" stroke="#e65100" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#t6)"/>
>>  <line x1="370" y1="112" x2="440" y2="85" stroke="#2e7d32" stroke-width="1.5" marker-end="url(#t6)"/>
>>  <line x1="370" y1="202" x2="440" y2="215" stroke="#e65100" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#t6)"/>
>>  <line x1="570" y1="85" x2="620" y2="135" stroke="#555" stroke-width="1.5" marker-end="url(#t6)"/>
>>  <line x1="570" y1="215" x2="620" y2="175" stroke="#555" stroke-width="1.5" marker-end="url(#t6)"/>
>>
>>  <text x="80" y="40" text-anchor="middle" fill="#2e7d32" font-size="10" font-weight="bold">Primary path ───</text>
>>  <text x="260" y="40" text-anchor="middle" fill="#e65100" font-size="10">Backup path - - -</text>
>>
>>  <defs>
>>    <marker id="t6" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
>>      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
>>    </marker>
>>  </defs>
>></svg>
>>```
>>
>>### Stratégie de résilience
>>
>>Pour une disponibilité maximale entre AWS et OVHcloud :
>>
>>1. **Deux connexions AWS Direct Connect** sur des emplacements AWS Direct Connect différents.
>>2. **Deux VXC opérateur** (ou opérateurs distincts) reliant deux PoPs OVHcloud.
>>3. **Deux services OVHcloud Connect** sur des PoPs différents, tous deux associés à votre vRack.
>>4. **Bascule BGP** configurée sur les deux chemins.
>>
>>### Étape par étape
>>
>>#### 1. Commander des connexions AWS Direct Connect redondantes
>>
>>Dans la **console AWS**, créez deux connexions Direct Connect sur **des emplacements différents** :
>>
>>- Connexion 1 : emplacement AWS Direct Connect A
>>- Connexion 2 : emplacement AWS Direct Connect B
>>
>>Créez une **Private VIF** sur chaque connexion pointant vers votre VPC (via Virtual Private Gateway ou Transit Gateway).
>>
>>> AWS recommande d'utiliser **Transit Gateway** avec plusieurs Direct Connect Gateways pour des architectures multi-régions résilientes.
>>
>>#### 2. Commander deux services OVHcloud Connect Provider
>>
>>Commandez sur **deux PoPs OVHcloud différents**. Récupérez deux clés d'appairage distinctes. Voir [Commander Provider](../3.2_order_provider).
>>
>>#### 3. Créer des ponts opérateur redondants
>>
>>Sur la plateforme de votre opérateur :
>>
>>- **Pont 1 :** AWS Direct Connect 1 ↔ OVHcloud PoP A
>>- **Pont 2 :** AWS Direct Connect 2 ↔ OVHcloud PoP B
>>
>>Si vous utilisez un MCR (Cloud Router), créez des instances MCR séparées ou des sessions de peering pour chaque chemin.
>>
>>#### 4. Configurer la bascule BGP
>>
>>Assurez-vous que les préférences de routage BGP sont définies de telle sorte que le trafic privilégie le chemin principal et bascule sur le chemin de secours :
>>
>>- Utilisez la **Local Preference** côté OVHcloud.
>>- Utilisez l'**AS-path prepending** sur le chemin de secours.
>>- Sur AWS, utilisez **Direct Connect Gateway** avec des priorités de routes adaptées.
>>
>>Consultez [Configurer OCC L3 avec BGP](../3.7_occ_l3_bgp) pour les instructions détaillées.
>>
>>#### 5. Associer les deux liens à votre vRack
>>
>>Associez les deux services OVHcloud Connect au même vRack. Voir [Associer à un vRack](../3.5_associate_vrack).
>>
>>#### 6. Tester la bascule
>>
>>1. Vérifiez que les deux chemins sont actifs et acheminent du trafic.
>>2. Désactivez la VIF AWS Direct Connect principale — confirmez que le trafic transite par le chemin de secours.
>>3. Désactivez le service OVHcloud Connect principal — confirmez que le trafic transite par le chemin de secours.
>>4. Restaurez les deux et vérifiez que le trafic revient sur le chemin préféré.
>>
>>### Considérations de coût
>>
>>Une connectivité résiliente entre AWS et OVHcloud nécessite :
>>- 2× connexions AWS Direct Connect (facturation AWS)
>>- 2× VXC opérateur ou sessions MCR (facturation opérateur)
>>- 2× services OVHcloud Connect (facturation OVHcloud)
>>
>>Planifiez votre budget en conséquence. Le coût de la redondance est généralement justifié par la réduction du risque pour les workloads de production.
>>
>> Pour plus d'informations, veuillez consulter la [documentation AWS Direct Connect](https://docs.aws.amazon.com/directconnect/)
>>
> Azure
>>### Prérequis
>>
>>- Un **abonnement Azure** avec les autorisations nécessaires pour créer des circuits ExpressRoute
>>- Un **compte OVHcloud** avec un vRack
>>- Deux circuits Azure ExpressRoute sur **des emplacements de peering différents**
>>- Deux services OVHcloud Connect Provider sur **des PoPs différents**
>>- Un opérateur partagé (Megaport ou Equinix) présent sur les deux emplacements
>>- Un vRack avec Multi-AZ activé ([guide Multi-AZ](../1.5_multi_az))
>>- Des plages IP non chevauchantes entre le VNet Azure et le vRack OVHcloud
>>
>>### Architecture
>>
>>```svg
>><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 310" font-family="Arial, sans-serif" font-size="11">
>>  <rect width="800" height="310" fill="#f8f9fa" rx="8"/>
>>
>>  <!-- Azure -->
>>  <rect x="15" y="60" width="160" height="190" rx="8" fill="#e3f2fd" stroke="#0078d4" stroke-width="2"/>
>>  <text x="95" y="85" text-anchor="middle" font-weight="bold" fill="#0078d4">Azure</text>
>>  <rect x="30" y="100" width="130" height="40" rx="4" fill="#fff" stroke="#90caf9"/>
>>  <text x="95" y="125" text-anchor="middle" fill="#555" font-size="10">ExpressRoute 1</text>
>>  <rect x="30" y="155" width="130" height="40" rx="4" fill="#fff" stroke="#90caf9"/>
>>  <text x="95" y="180" text-anchor="middle" fill="#555" font-size="10">ExpressRoute 2</text>
>>  <text x="95" y="230" text-anchor="middle" fill="#555" font-size="10">VNet: 10.2.0.0/16</text>
>>
>>  <!-- Provider A -->
>>  <rect x="230" y="80" width="140" height="65" rx="6" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
>>  <text x="300" y="105" text-anchor="middle" font-weight="bold" fill="#6a1b9a">Provider A</text>
>>  <text x="300" y="125" text-anchor="middle" fill="#555" font-size="10">Location 1</text>
>>
>>  <!-- Provider B -->
>>  <rect x="230" y="170" width="140" height="65" rx="6" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
>>  <text x="300" y="195" text-anchor="middle" font-weight="bold" fill="#6a1b9a">Provider B</text>
>>  <text x="300" y="215" text-anchor="middle" fill="#555" font-size="10">Location 2</text>
>>
>>  <!-- OVHcloud PoP A -->
>>  <rect x="440" y="50" width="130" height="70" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
>>  <text x="505" y="75" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud</text>
>>  <text x="505" y="95" text-anchor="middle" fill="#2e7d32" font-size="10">PoP A / AZ 1</text>
>>
>>  <!-- OVHcloud PoP B -->
>>  <rect x="440" y="180" width="130" height="70" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
>>  <text x="505" y="205" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud</text>
>>  <text x="505" y="225" text-anchor="middle" fill="#2e7d32" font-size="10">PoP B / AZ 2</text>
>>
>>  <!-- vRack -->
>>  <rect x="630" y="100" width="150" height="110" rx="8" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
>>  <text x="705" y="130" text-anchor="middle" font-weight="bold" fill="#2e7d32">vRack</text>
>>  <text x="705" y="150" text-anchor="middle" fill="#555" font-size="10">172.16.0.0/16</text>
>>  <text x="705" y="170" text-anchor="middle" fill="#555" font-size="10">Multi-AZ Servers</text>
>>  <text x="705" y="190" text-anchor="middle" fill="#555" font-size="10">Hosted Private Cloud</text>
>>
>>  <!-- Arrows -->
>>  <line x1="160" y1="120" x2="230" y2="112" stroke="#2e7d32" stroke-width="1.5" marker-end="url(#t8)"/>
>>  <line x1="160" y1="175" x2="230" y2="202" stroke="#e65100" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#t8)"/>
>>  <line x1="370" y1="112" x2="440" y2="85" stroke="#2e7d32" stroke-width="1.5" marker-end="url(#t8)"/>
>>  <line x1="370" y1="202" x2="440" y2="215" stroke="#e65100" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#t8)"/>
>>  <line x1="570" y1="85" x2="630" y2="140" stroke="#555" stroke-width="1.5" marker-end="url(#t8)"/>
>>  <line x1="570" y1="215" x2="630" y2="175" stroke="#555" stroke-width="1.5" marker-end="url(#t8)"/>
>>
>>  <text x="80" y="40" text-anchor="middle" fill="#2e7d32" font-size="10" font-weight="bold">Primary ───</text>
>>  <text x="230" y="40" text-anchor="middle" fill="#e65100" font-size="10">Backup - - -</text>
>>
>>  <defs>
>>    <marker id="t8" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
>>      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
>>    </marker>
>>  </defs>
>></svg>
>>```
>>
>>### Stratégie de résilience
>>
>>Microsoft recommande **deux circuits ExpressRoute sur des emplacements de peering différents** pour une disponibilité maximale. Combinés à deux services OVHcloud Connect Provider sur des PoPs différents, cela offre une redondance de bout en bout :
>>
>>| Composant | Principal | Secours |
>>|---|---|---|
>>| Azure ExpressRoute | Circuit 1 (emplacement A) | Circuit 2 (emplacement B) |
>>| VXC opérateur | Set VXC 1 | Set VXC 2 |
>>| OVHcloud Connect | Service 1 (PoP A) | Service 2 (PoP B) |
>>| AZ OVHcloud | AZ 1 | AZ 2 |
>>
>>### Étape par étape
>>
>>#### 1. Créer deux circuits ExpressRoute
>>
>>Dans le **portail Azure** → **Créer ExpressRoute** (à répéter pour chaque circuit) :
>>
>>| Paramètre | Circuit 1 | Circuit 2 |
>>|---|---|---|
>>| Provider | Megaport (ou Equinix) | Megaport (ou Equinix) |
>>| Emplacement de peering | Emplacement A (par exemple, Paris) | Emplacement B (par exemple, Francfort) |
>>| Bande passante | 1 Gbps | 1 Gbps |
>>| SKU | Standard ou Premium | Standard ou Premium |
>>
>>Notez la **clé de service** de chaque circuit.
>>
>>> **Astuce :** utilisez **ExpressRoute Premium** si vos VNets se trouvent dans des régions Azure différentes des emplacements de peering.
>>
>>#### 2. Commander deux services OVHcloud Connect Provider
>>
>>[Commandez deux services OVHcloud Connect Provider](../3.2_order_provider) sur des PoPs différents correspondant aux emplacements de peering ExpressRoute :
>>
>>- OVHcloud Connect 1 → PoP A
>>- OVHcloud Connect 2 → PoP B
>>
>>Récupérez les deux **clés d'appairage**.
>>
>>#### 3. Créer les ponts opérateur pour chaque chemin
>>
>>**Chemin 1 (principal) :**
>>
>>1. Créez un MCR ou un port à l'emplacement A.
>>2. VXC : Azure ExpressRoute 1 (clé de service 1) → MCR A.
>>3. VXC : MCR A → OVHcloud Connect 1 (clé d'appairage 1).
>>
>>**Chemin 2 (secours) :**
>>
>>1. Créez un MCR ou un port à l'emplacement B.
>>2. VXC : Azure ExpressRoute 2 (clé de service 2) → MCR B.
>>3. VXC : MCR B → OVHcloud Connect 2 (clé d'appairage 2).
>>
>>#### 4. Configurer le peering privé Azure sur les deux circuits
>>
>>Pour chaque circuit ExpressRoute, configurez l'**Azure Private Peering** :
>>
>>| Paramètre | Circuit 1 | Circuit 2 |
>>|---|---|---|
>>| ASN du peer | ASN du provider | ASN du provider |
>>| /30 principal | 169.254.100.0/30 | 169.254.101.0/30 |
>>| /30 secondaire | 169.254.100.4/30 | 169.254.101.4/30 |
>>| ID VLAN | Attribué par le provider | Attribué par le provider |
>>
>>#### 5. Lier les deux circuits à votre VNet
>>
>>Dans Azure :
>>
>>1. Accédez à **Virtual Network Gateways** → **Connections**.
>>2. Ajoutez Connection 1 → ExpressRoute Circuit 1 (poids : **100**).
>>3. Ajoutez Connection 2 → ExpressRoute Circuit 2 (poids : **50** — plus bas = secours).
>>
>>Azure utilise le **poids de connexion** pour privilégier un chemin par rapport à l'autre.
>>
>>#### 6. Configurer BGP côté OVHcloud avec bascule
>>
>>Côté OVHcloud, utilisez [Configurer OCC L3 avec BGP](../3.7_occ_l3_bgp) pour privilégier le chemin principal :
>>
>>| Chemin | Local Preference | AS-path prepend |
>>|---|---|---|
>>| OVHcloud Connect 1 (principal) | 200 | Aucun |
>>| OVHcloud Connect 2 (secours) | 100 | 1× prepend |
>>
>>#### 7. Associer les deux services à votre vRack
>>
>>[Associez les deux services OVHcloud Connect](../3.5_associate_vrack) au même vRack. Les deux injecteront des routes ; le vRack utilisera le chemin avec la Local Preference la plus élevée.
>>
>>#### 8. Tester la bascule
>>
>>| Test | Action | Résultat attendu |
>>|---|---|---|
>>| Défaillance du lien principal | Désactiver la VIF ExpressRoute 1 dans Azure | Le trafic bascule vers ExpressRoute 2 dans le délai de convergence BGP |
>>| Défaillance OCC principal | Désactiver OVHcloud Connect 1 | Le trafic bascule vers OVHcloud Connect 2 |
>>| Défaillance opérateur | Mettre hors service les VXC du MCR A | Le trafic bascule sur le chemin via MCR B |
>>| Récupération complète | Réactiver tous les liens | Le trafic revient sur le chemin principal |
>>
>>> **Temps de convergence :** la bascule BGP s'effectue généralement en **30 à 90 secondes** selon les hold timers et la configuration BFD.
>>
>>### Considérations spécifiques à Azure
>>
>>- **ExpressRoute Global Reach :** si les deux PoPs OVHcloud sont dans des régions Azure différentes, envisagez d'activer [Global Reach](https://learn.microsoft.com/en-us/azure/expressroute/expressroute-global-reach) pour permettre la communication directe entre circuits.
>>- **FastPath :** pour les passerelles Ultra Performance ou ErGw3AZ, activez [FastPath](https://learn.microsoft.com/en-us/azure/expressroute/about-fastpath) afin d'améliorer les performances réseau.
>>- **Limites de routes :** Azure Private Peering prend en charge jusqu'à **4 000 routes** par circuit. Agrégez les préfixes OVHcloud pour rester dans la limite.
>>
>> Pour plus d'informations, veuillez consulter la [documentation Azure ExpressRoute](https://learn.microsoft.com/en-us/azure/expressroute/)
>>
> GCP
>>### Prérequis
>>
>>- Un **projet GCP** avec le rôle Compute Network Admin
>>- Deux Cloud Routers (un par région ou domaine de disponibilité)
>>- Un **compte OVHcloud** avec un vRack
>>- Deux services OVHcloud Connect Provider sur **des PoPs différents**
>>- Un opérateur partagé (Megaport ou Equinix) présent sur les deux emplacements
>>- Un vRack avec Multi-AZ activé
>>- Des **plages IP non chevauchantes** entre le VPC GCP et le vRack OVHcloud
>>
>>### Architecture
>>
>>```svg
>><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 310" font-family="Arial, sans-serif" font-size="11">
>>  <rect width="800" height="310" fill="#f8f9fa" rx="8"/>
>>
>>  <!-- GCP -->
>>  <rect x="15" y="60" width="160" height="190" rx="8" fill="#e8eaf6" stroke="#4285f4" stroke-width="2"/>
>>  <text x="95" y="85" text-anchor="middle" font-weight="bold" fill="#4285f4">Google Cloud</text>
>>  <rect x="30" y="100" width="130" height="40" rx="4" fill="#fff" stroke="#c5cae9"/>
>>  <text x="95" y="125" text-anchor="middle" fill="#555" font-size="10">Interconnect 1</text>
>>  <rect x="30" y="155" width="130" height="40" rx="4" fill="#fff" stroke="#c5cae9"/>
>>  <text x="95" y="180" text-anchor="middle" fill="#555" font-size="10">Interconnect 2</text>
>>  <text x="95" y="230" text-anchor="middle" fill="#555" font-size="10">VPC: 10.3.0.0/16</text>
>>
>>  <!-- Provider A -->
>>  <rect x="230" y="80" width="140" height="65" rx="6" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
>>  <text x="300" y="105" text-anchor="middle" font-weight="bold" fill="#6a1b9a">Provider A</text>
>>  <text x="300" y="125" text-anchor="middle" fill="#555" font-size="10">Edge domain 1</text>
>>
>>  <!-- Provider B -->
>>  <rect x="230" y="170" width="140" height="65" rx="6" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
>>  <text x="300" y="195" text-anchor="middle" font-weight="bold" fill="#6a1b9a">Provider B</text>
>>  <text x="300" y="215" text-anchor="middle" fill="#555" font-size="10">Edge domain 2</text>
>>
>>  <!-- OVHcloud PoP A -->
>>  <rect x="440" y="50" width="130" height="70" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
>>  <text x="505" y="75" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud</text>
>>  <text x="505" y="95" text-anchor="middle" fill="#2e7d32" font-size="10">PoP A / AZ 1</text>
>>
>>  <!-- OVHcloud PoP B -->
>>  <rect x="440" y="180" width="130" height="70" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
>>  <text x="505" y="205" text-anchor="middle" font-weight="bold" fill="#2e7d32">OVHcloud</text>
>>  <text x="505" y="225" text-anchor="middle" fill="#2e7d32" font-size="10">PoP B / AZ 2</text>
>>
>>  <!-- vRack -->
>>  <rect x="630" y="100" width="150" height="110" rx="8" fill="#e8f5e9" stroke="#2e7d32" stroke-width="2"/>
>>  <text x="705" y="130" text-anchor="middle" font-weight="bold" fill="#2e7d32">vRack</text>
>>  <text x="705" y="150" text-anchor="middle" fill="#555" font-size="10">172.16.0.0/16</text>
>>  <text x="705" y="170" text-anchor="middle" fill="#555" font-size="10">Multi-AZ Servers</text>
>>  <text x="705" y="190" text-anchor="middle" fill="#555" font-size="10">Cloud Instances</text>
>>
>>  <!-- Arrows -->
>>  <line x1="160" y1="120" x2="230" y2="112" stroke="#2e7d32" stroke-width="1.5" marker-end="url(#t10)"/>
>>  <line x1="160" y1="175" x2="230" y2="202" stroke="#e65100" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#t10)"/>
>>  <line x1="370" y1="112" x2="440" y2="85" stroke="#2e7d32" stroke-width="1.5" marker-end="url(#t10)"/>
>>  <line x1="370" y1="202" x2="440" y2="215" stroke="#e65100" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#t10)"/>
>>  <line x1="570" y1="85" x2="630" y2="140" stroke="#555" stroke-width="1.5" marker-end="url(#t10)"/>
>>  <line x1="570" y1="215" x2="630" y2="175" stroke="#555" stroke-width="1.5" marker-end="url(#t10)"/>
>>
>>  <text x="80" y="40" text-anchor="middle" fill="#2e7d32" font-size="10" font-weight="bold">Primary ───</text>
>>  <text x="230" y="40" text-anchor="middle" fill="#e65100" font-size="10">Backup - - -</text>
>>
>>  <defs>
>>    <marker id="t10" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
>>      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
>>    </marker>
>>  </defs>
>></svg>
>>```
>>
>>### Stratégie de résilience
>>
>>Google Cloud recommande d'utiliser des VLAN attachments dans **des edge availability domains différents** pour atteindre un SLA de 99,9 % à 99,99 %. Combiné à des liens OVHcloud Connect en double, vous obtenez une résilience complète de bout en bout :
>>
>>| Composant | Principal | Secours |
>>|---|---|---|
>>| GCP VLAN attachment | Edge domain zone1 | Edge domain zone2 |
>>| VXC opérateur | Set VXC 1 | Set VXC 2 |
>>| OVHcloud Connect | Service 1 (PoP A) | Service 2 (PoP B) |
>>| AZ OVHcloud | AZ 1 | AZ 2 |
>>
>>##### Niveaux de SLA GCP
>>
>>| Configuration | SLA GCP |
>>|---|---|
>>| Un seul VLAN attachment | Aucun SLA |
>>| Deux attachments dans des edge domains différents, même metro | 99,9 % |
>>| Quatre attachments dans deux metros différents | 99,99 % |
>>
>>### Étape par étape
>>
>>#### 1. Créer deux Cloud Routers
>>
>>Créez un Cloud Router dans chaque région ou pour chaque edge availability domain :
>>
>>| Router | Région | ASN |
>>|---|---|---|
>>| `router-ovhcloud-1` | `europe-west1` | 16550 (par défaut) |
>>| `router-ovhcloud-2` | `europe-west3` | 16550 (par défaut) |
>>
>>#### 2. Créer deux VLAN attachments
>>
>>Pour chaque Cloud Router, créez un **VLAN attachment Partner Interconnect** :
>>
>>| Attachment | Cloud Router | Edge availability domain |
>>|---|---|---|
>>| `attachment-1` | `router-ovhcloud-1` | `zone1` |
>>| `attachment-2` | `router-ovhcloud-2` | `zone2` |
>>
>>Notez les deux **clés d'appairage GCP**.
>>
>>#### 3. Commander deux services OVHcloud Connect Provider
>>
>>[Commandez deux services OVHcloud Connect Provider](../3.2_order_provider) sur des PoPs différents :
>>
>>- OVHcloud Connect 1 → PoP A
>>- OVHcloud Connect 2 → PoP B
>>
>>Récupérez les deux **clés d'appairage OVHcloud**.
>>
>>#### 4. Créer les ponts opérateur pour chaque chemin
>>
>>**Chemin 1 (principal) :**
>>
>>1. MCR ou port à l'emplacement A.
>>2. VXC : GCP Partner Interconnect (clé d'appairage GCP 1) → MCR A.
>>3. VXC : MCR A → OVHcloud Connect 1 (clé d'appairage OVHcloud 1).
>>
>>**Chemin 2 (secours) :**
>>
>>1. MCR ou port à l'emplacement B.
>>2. VXC : GCP Partner Interconnect (clé d'appairage GCP 2) → MCR B.
>>3. VXC : MCR B → OVHcloud Connect 2 (clé d'appairage OVHcloud 2).
>>
>>#### 5. Activer les deux VLAN attachments GCP
>>
>>Dans la console GCP :
>>
>>1. Accédez à **Hybrid Connectivity** → **VLAN attachments**.
>>2. Pour chaque attachment : cliquez sur **Activate** dès qu'il affiche « Pending customer ».
>>3. Vérifiez que les sessions BGP sont établies dans les deux Cloud Routers.
>>
>>#### 6. Configurer la bascule BGP
>>
>>**Côté GCP :**
>>
>>Le Cloud Router de GCP utilise le **MED (Multi-Exit Discriminator)** pour influencer la sélection du chemin. Définissez des valeurs MED différentes :
>>
>>| Attachment | MED annoncé |
>>|---|---|
>>| `attachment-1` (principal) | 100 (plus bas = préféré) |
>>| `attachment-2` (secours) | 200 |
>>
>>Vous pouvez configurer le MED via les annonces de routes personnalisées dans les paramètres du peer BGP du Cloud Router.
>>
>>**Côté OVHcloud :**
>>
>>Utilisez [Configurer OCC L3 avec BGP](../3.7_occ_l3_bgp) :
>>
>>| Chemin | Local Preference | AS-path prepend |
>>|---|---|---|
>>| OVHcloud Connect 1 (principal) | 200 | Aucun |
>>| OVHcloud Connect 2 (secours) | 100 | 1× prepend |
>>
>>#### 7. Associer les deux services à votre vRack
>>
>>[Associez les deux services OVHcloud Connect](../3.5_associate_vrack) au même vRack.
>>
>>#### 8. Tester la bascule
>>
>>| Test | Action | Résultat attendu |
>>|---|---|---|
>>| Défaillance du lien GCP | Désactiver le VLAN attachment 1 | Le trafic bascule vers l'attachment 2 |
>>| Défaillance du lien OCC | Désactiver OVHcloud Connect 1 | Le trafic bascule vers OVHcloud Connect 2 |
>>| Défaillance opérateur | Mettre hors service le MCR A | Le trafic bascule sur le chemin via MCR B |
>>| Récupération complète | Tout réactiver | Le trafic revient sur le chemin principal |
>>
>>### Considérations spécifiques à GCP
>>
>>- **Annonces de routes personnalisées :** utilisez les annonces de routes personnalisées du Cloud Router pour contrôler les sous-réseaux annoncés à OVHcloud. Évitez d'annoncer le VPC entier si seuls certains sous-réseaux sont nécessaires.
>>- **Dataplane v2 :** si vous utilisez GKE avec Dataplane v2, veillez à inclure les plages CIDR des Pods dans les annonces de routes si les pods GKE doivent communiquer avec OVHcloud.
>>- **Shared VPC :** si vous utilisez un Shared VPC, créez l'Interconnect dans le projet hôte et partagez-le avec les projets de service.
>>- **MTU :** GCP Interconnect prend en charge un **MTU de 1440** pour Partner Interconnect. Assurez-vous qu'OVHcloud Connect et les VXC opérateur utilisent des paramètres MTU correspondants.
>>
>> Pour plus d'informations, veuillez consulter la [documentation GCP Interconnect](https://cloud.google.com/network-connectivity/docs/interconnect) et la [documentation GCP Cloud Router](https://cloud.google.com/network-connectivity/docs/router)

### Et ensuite ?

- [Architecture simple](../4.1_simple) pour les cas d'usage non critiques
- [Superviser vos connexions](../3.9_monitor)
- [Configuration Multi-AZ](../1.5_multi_az) pour la résilience côté OVHcloud

### Aller plus loin

Pour bénéficier d'une formation ou d'une assistance technique dans la mise en œuvre de nos solutions, contactez votre conseiller commercial ou cliquez sur [ce lien](/links/professional-services) afin d'obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l'équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
