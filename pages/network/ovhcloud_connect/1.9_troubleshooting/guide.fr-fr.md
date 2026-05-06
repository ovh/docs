---
title: 'Dépannage d''OVHcloud Connect'
excerpt: 'Diagnostiquez et résolvez les problèmes les plus courants rencontrés avec OVHcloud Connect'
updated: 2026-02-18
---

## Objectif

Ce guide vous aide à diagnostiquer et à résoudre les problèmes les plus courants rencontrés avec OVHcloud Connect. Chaque section décrit un problème connu, ses causes possibles ainsi que les étapes pour le corriger.

## Avant de commencer

### Considérations générales

- **Vérifiez toujours les deux côtés** — La plupart des problèmes liés à OVHcloud Connect impliquent des éléments de configuration ou physiques de votre côté comme du côté OVHcloud. Vérifiez votre routeur, le cross-connect (ou le circuit virtuel du fournisseur) ainsi que l'espace client OVHcloud avant d'ouvrir un ticket.
- **Collectez les diagnostics au préalable** — Avant toute modification, recueillez l'état des interfaces, l'état BGP, un traceroute et les valeurs optiques. Ces informations accélèrent la résolution, que vous régliez le problème vous-même ou que vous deviez contacter le support.
- **Vérifiez les maintenances planifiées** — Certains problèmes peuvent être causés par des travaux planifiés sur l'infrastructure OVHcloud ou chez votre fournisseur. Consultez toujours la page de statut avant d'approfondir le dépannage.

### Ressources utiles

| Ressource | Lien |
|---|---|
| **FAQ** | [Foire aux questions](../5_faq/guide.fr-fr.md) |
| **Glossaire** | [Glossaire des termes OVHcloud Connect](../1.2_glossary/guide.fr-fr.md) |
| **Statut des services OVHcloud** | [status.ovhcloud.com](https://www.status-ovhcloud.com/) |
| **Prérequis et limitations** | [Prérequis et limitations](../1.8_prerequisites_limitations/guide.fr-fr.md) |
| **Guide de monitoring** | [Superviser votre OVHcloud Connect](../3.9_monitor/guide.fr-fr.md) |
| **Suivi d'incident** | [Déclarer et suivre un incident](../3.10_incident_followup/guide.fr-fr.md) |

---

## Problème 1 — Aucune lumière sur le lien physique (OVHcloud Connect Direct)

Après la commande d'OVHcloud Connect Direct, le lien physique n'affiche aucun signal optique d'un côté ou des deux.

### Causes possibles et solutions

| # | Cause possible | Solution |
|---|---|---|
| 1 | **Cross-connect non encore installé** | Contactez l'opérateur de votre datacenter et fournissez-lui la LOA. Consultez [Commander un cross-connect avec une LOA](../3.11_cross_connect_loa/guide.fr-fr.md). |
| 2 | **LOA mal interprétée par le datacenter** | Vérifiez les détails de la LOA avec l'opérateur du PoP : baie, cage, panneau de brassage, port, terminaison de la fibre. Consultez [Comment lire les informations d'une LOA](#comment-lire-les-informations-dune-loa) ci-dessous. |
| 3 | **Inversion des fibres Tx/Rx** | Les fibres d'émission et de réception peuvent être inversées, ce qui fait arriver la lumière sur le mauvais port. Demandez à l'opérateur du datacenter de vérifier l'absence d'inversion Tx/Rx sur le cross-connect. |
| 4 | **Problème de module SFP** | Assurez-vous que le SFP correspond à la bande passante commandée : 1000Base-LX/LH pour 1 Gbps, 10GBase-LR pour 10 Gbps, 100GBase-LR4 pour 100 Gbps. Remplacez le SFP s'il est défectueux. Consultez [Prérequis et limitations](../1.8_prerequisites_limitations/guide.fr-fr.md). |
| 5 | **Port désactivé ou verrouillé** | Vérifiez l'espace client OVHcloud — le port peut être verrouillé administrativement. Si la valeur optique OUT est DOWN, le port peut également être en cours de résiliation. |
| 6 | **Câble cross-connect défectueux** | Demandez à l'opérateur du datacenter de tester le câble ou de provisionner un nouveau câble. |

### Comment lire les informations d'une LOA

Une LOA classique contient des informations formatées ainsi :

```
Equipment: 103 PA3:OG:00GMC3:OVH Patch Panel: PP:0103:1132697
Port: P16/FO31-32/BCK Fiber Termination: SC/PC
```

Interprétation :

| Champ | Valeur | Signification |
|---|---|---|
| Baie | 103 | Position de la baie où se trouve le rack |
| Cage | PA3:OG:00GMC3:OVH | Référence du rack |
| Panneau de brassage (côté Z) | PP:0103:1132697 | Position du switch côté OVHcloud |
| Port | 16 | Position sur le switch |
| Port fibre optique A | 31 | Identifiant de la fibre A |
| Port fibre optique B | 32 | Identifiant de la fibre B |
| Côté | BCK (Back) | Avant ou arrière de l'équipement |
| Terminaison de fibre | SC/PC | Type de connecteur |

### Vérifier les valeurs optiques

Dans l'espace client OVHcloud, accédez à **Network** → **OVHcloud Connect** → sélectionnez votre service, puis vérifiez les valeurs optiques IN/OUT :

- **OUT est DOWN** — Le port côté OVHcloud n'émet pas de lumière. Causes possibles : problème de port, service en cours de résiliation, port verrouillé, panne de SFP.
- **IN est DOWN** — OVHcloud ne reçoit pas de lumière de votre côté. Causes possibles : cross-connect non installé, votre équipement non connecté, votre port désactivé, inversion des fibres Tx/Rx.

### Logigramme de diagnostic

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 520" font-family="Arial, sans-serif" font-size="11">
  <rect width="720" height="520" fill="#f8f9fa" rx="8"/>

  <!-- Start -->
  <rect x="260" y="10" width="200" height="36" rx="18" fill="#1565c0" stroke="none"/>
  <text x="360" y="33" text-anchor="middle" fill="#fff" font-weight="bold">Pas de lumière sur le lien</text>

  <!-- Check OUT -->
  <rect x="245" y="70" width="230" height="36" rx="6" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/>
  <text x="360" y="93" text-anchor="middle" fill="#1565c0">OUT (OVHcloud → Vous) UP ?</text>
  <line x1="360" y1="46" x2="360" y2="70" stroke="#888" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- OUT = No -->
  <rect x="30" y="140" width="250" height="50" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
  <text x="155" y="158" text-anchor="middle" fill="#e65100" font-weight="bold">OUT est DOWN</text>
  <text x="155" y="175" text-anchor="middle" fill="#555" font-size="10">Vérifier : port verrouillé ? résiliation ? SFP ?</text>
  <line x1="300" y1="106" x2="155" y2="140" stroke="#888" stroke-width="1.5" marker-end="url(#arrow)"/>
  <text x="210" y="118" fill="#c62828" font-size="10">Non</text>

  <!-- OUT = Yes → Check IN -->
  <rect x="440" y="140" width="230" height="36" rx="6" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/>
  <text x="555" y="163" text-anchor="middle" fill="#1565c0">IN (Vous → OVHcloud) UP ?</text>
  <line x1="420" y1="106" x2="555" y2="140" stroke="#888" stroke-width="1.5" marker-end="url(#arrow)"/>
  <text x="500" y="118" fill="#2e7d32" font-size="10">Oui</text>

  <!-- IN = No -->
  <rect x="440" y="210" width="250" height="50" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
  <text x="565" y="228" text-anchor="middle" fill="#e65100" font-weight="bold">IN est DOWN</text>
  <text x="565" y="245" text-anchor="middle" fill="#555" font-size="10">Vérifier : cross-connect, inversion Tx/Rx, votre port</text>
  <line x1="555" y1="176" x2="565" y2="210" stroke="#888" stroke-width="1.5" marker-end="url(#arrow)"/>
  <text x="545" y="195" fill="#c62828" font-size="10">Non</text>

  <!-- IN = Yes -->
  <rect x="200" y="210" width="200" height="36" rx="18" fill="#2e7d32" stroke="none"/>
  <text x="300" y="233" text-anchor="middle" fill="#fff" font-weight="bold">Lumière OK des deux côtés ✓</text>
  <line x1="480" y1="176" x2="400" y2="210" stroke="#888" stroke-width="1.5" marker-end="url(#arrow)"/>
  <text x="425" y="195" fill="#2e7d32" font-size="10">Oui</text>

  <!-- Contact support -->
  <rect x="30" y="210" width="150" height="36" rx="6" fill="#fce4ec" stroke="#c62828" stroke-width="1.5"/>
  <text x="105" y="233" text-anchor="middle" fill="#c62828" font-size="10">Contacter le support OVHcloud</text>
  <line x1="155" y1="190" x2="105" y2="210" stroke="#888" stroke-width="1.5" marker-end="url(#arrow)"/>

  <!-- Arrow marker -->
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#888"/>
    </marker>
  </defs>
</svg>
```

---

## Problème 2 — Lien Ethernet down (pas de peering) malgré une lumière UP

Les valeurs optiques sont UP des deux côtés, mais l'interface Ethernet reste DOWN et aucun peering ne peut être établi.

### Causes possibles et solutions

| # | Cause possible | Solution |
|---|---|---|
| 1 | **Type de SFP incompatible** | Le SFP doit correspondre à la bande passante commandée. Utilisez **1000Base-LX/LH** pour 1 Gbps, **10GBase-LR** pour 10 Gbps, **100GBase-LR4** pour 100 Gbps. |
| 2 | **Auto-négociation activée** | L'auto-négociation **n'est pas prise en charge** sur OVHcloud Connect. Désactivez-la sur votre routeur (voir les commandes ci-dessous). |
| 3 | **Vitesse incompatible** | La vitesse de votre interface doit correspondre à celle du lien commandé. Configurez-la explicitement. |
| 4 | **SFP ou transceiver défectueux** | Essayez de remplacer le module SFP de votre côté. |

### Désactiver l'auto-négociation

**Cisco IOS :**

```
interface GigabitEthernet0/0
 no negotiate auto
```

ou :

```
interface GigabitEthernet0/0
 speed nonegotiate
```

**Cisco NX-OS :**

```
interface Ethernet1/1
 speed 1000
 no negotiate auto
```

**Juniper JunOS :**

```
set interfaces ge-0/0/0 ether-options no-auto-negotiation
```

---

## Problème 3 — Session BGP bloquée à l'état Active ou Idle

Le lien physique est up, mais la session BGP n'atteint pas l'état `Established`.

### Causes possibles et solutions

| # | Cause possible | Solution |
|---|---|---|
| 1 | **Adresse IP du pair incorrecte** | Vérifiez que l'IP du pair configurée sur votre routeur correspond exactement à l'IP attribuée par OVHcloud dans l'espace client. Le sous-réseau de peering du PoP est un /30 : OVHcloud prend la première IP, vous prenez la seconde. Consultez [Configurer OCC L3 avec BGP](../3.7_occ_l3_bgp/guide.fr-fr.md). |
| 2 | **ASN incorrect** | Vérifiez que vous établissez le peering avec l'ASN OVHcloud **35540** et que votre propre ASN est correctement configuré (plage d'ASN privés 64512-65534 recommandée). Évitez les ASN réservés : **65501** (PoP UE), **65502** (PoP CA), **65519** (PoP Asie). |
| 3 | **ID de VLAN incompatible** | Le tag VLAN sur votre interface doit correspondre à l'ID de VLAN configuré dans la configuration du PoP de l'espace client OVHcloud. Vérifiez avec `show interfaces` ou `show vlans`. |
| 4 | **Pare-feu bloquant le port TCP 179** | BGP utilise le port TCP 179. Assurez-vous qu'aucun pare-feu ou ACL ne bloque ce port entre les deux pairs. |
| 5 | **Interface non configurée avec l'encapsulation correcte** | Pour les connexions L3, l'interface doit utiliser l'encapsulation 802.1Q avec l'ID de VLAN correct. Consultez les exemples de configuration dans [Configurer OCC L3 avec BGP](../3.7_occ_l3_bgp/guide.fr-fr.md). |
| 6 | **Configuration du PoP non créée chez OVHcloud** | Vérifiez dans l'espace client OVHcloud qu'une configuration de PoP a bien été créée pour votre service. Sans cela, le routeur OVHcloud n'établira pas le peering. |
| 7 | **Authentification MD5 incompatible** | Si MD5 est configuré, le mot de passe doit correspondre des deux côtés. Vérifiez avec les détails de votre service OVHcloud Connect. |

### Commandes de vérification

**Cisco IOS :**

```
show ip bgp summary
show bgp ipv4 unicast neighbors 192.0.2.1
show interfaces GigabitEthernet0/0
show ip interface brief
```

**Juniper JunOS :**

```
show bgp summary
show bgp neighbor 192.0.2.1
show interfaces terse
```

### Logigramme de diagnostic

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 480" font-family="Arial, sans-serif" font-size="11">
  <rect width="720" height="480" fill="#f8f9fa" rx="8"/>

  <!-- Start -->
  <rect x="240" y="10" width="240" height="36" rx="18" fill="#1565c0" stroke="none"/>
  <text x="360" y="33" text-anchor="middle" fill="#fff" font-weight="bold">BGP bloqué en Active / Idle</text>

  <!-- Check interface -->
  <rect x="230" y="70" width="260" height="36" rx="6" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/>
  <text x="360" y="93" text-anchor="middle" fill="#1565c0">L'interface physique est-elle UP ?</text>
  <line x1="360" y1="46" x2="360" y2="70" stroke="#888" stroke-width="1.5" marker-end="url(#arrow2)"/>

  <!-- No → fix link -->
  <rect x="30" y="140" width="220" height="40" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
  <text x="140" y="155" text-anchor="middle" fill="#e65100" font-weight="bold" font-size="10">Corriger le lien physique d'abord</text>
  <text x="140" y="170" text-anchor="middle" fill="#555" font-size="9">Voir Problème 1 &amp; Problème 2</text>
  <line x1="290" y1="106" x2="140" y2="140" stroke="#888" stroke-width="1.5" marker-end="url(#arrow2)"/>
  <text x="200" y="120" fill="#c62828" font-size="10">Non</text>

  <!-- Yes → check IP/ASN -->
  <rect x="430" y="140" width="260" height="36" rx="6" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/>
  <text x="560" y="163" text-anchor="middle" fill="#1565c0">IP du pair et ASN concordent ?</text>
  <line x1="430" y1="106" x2="560" y2="140" stroke="#888" stroke-width="1.5" marker-end="url(#arrow2)"/>
  <text x="500" y="120" fill="#2e7d32" font-size="10">Oui</text>

  <!-- No → fix config -->
  <rect x="480" y="210" width="220" height="36" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
  <text x="590" y="233" text-anchor="middle" fill="#e65100" font-size="10">Corriger la configuration IP/ASN/VLAN</text>
  <line x1="610" y1="176" x2="590" y2="210" stroke="#888" stroke-width="1.5" marker-end="url(#arrow2)"/>
  <text x="615" y="195" fill="#c62828" font-size="10">Non</text>

  <!-- Yes → check firewall -->
  <rect x="210" y="210" width="240" height="36" rx="6" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/>
  <text x="330" y="233" text-anchor="middle" fill="#1565c0">TCP 179 autorisé (pas de blocage FW) ?</text>
  <line x1="490" y1="176" x2="330" y2="210" stroke="#888" stroke-width="1.5" marker-end="url(#arrow2)"/>
  <text x="395" y="195" fill="#2e7d32" font-size="10">Oui</text>

  <!-- No → fix firewall -->
  <rect x="30" y="280" width="200" height="36" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
  <text x="130" y="303" text-anchor="middle" fill="#e65100" font-size="10">Ouvrir TCP 179 des deux côtés</text>
  <line x1="270" y1="246" x2="130" y2="280" stroke="#888" stroke-width="1.5" marker-end="url(#arrow2)"/>
  <text x="185" y="260" fill="#c62828" font-size="10">Non</text>

  <!-- Yes → check PoP config -->
  <rect x="310" y="280" width="280" height="36" rx="6" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/>
  <text x="450" y="303" text-anchor="middle" fill="#1565c0">Config du PoP créée chez OVHcloud ?</text>
  <line x1="385" y1="246" x2="450" y2="280" stroke="#888" stroke-width="1.5" marker-end="url(#arrow2)"/>
  <text x="420" y="260" fill="#2e7d32" font-size="10">Oui</text>

  <!-- No → create PoP config -->
  <rect x="475" y="340" width="220" height="36" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
  <text x="585" y="363" text-anchor="middle" fill="#e65100" font-size="10">Créer la config PoP dans l'espace client</text>
  <line x1="530" y1="316" x2="585" y2="340" stroke="#888" stroke-width="1.5" marker-end="url(#arrow2)"/>
  <text x="565" y="330" fill="#c62828" font-size="10">Non</text>

  <!-- Yes → contact support -->
  <rect x="230" y="340" width="200" height="36" rx="6" fill="#fce4ec" stroke="#c62828" stroke-width="1.5"/>
  <text x="330" y="363" text-anchor="middle" fill="#c62828" font-size="10">Contacter le support OVHcloud</text>
  <line x1="395" y1="316" x2="330" y2="340" stroke="#888" stroke-width="1.5" marker-end="url(#arrow2)"/>
  <text x="350" y="330" fill="#2e7d32" font-size="10">Oui</text>

  <defs>
    <marker id="arrow2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#888"/>
    </marker>
  </defs>
</svg>
```

---

## Problème 4 — Session BGP établie mais aucune route reçue

La session BGP affiche `Established`, mais aucun préfixe n'est reçu d'OVHcloud (ou de votre réseau).

### Causes possibles et solutions

| # | Cause possible | Solution |
|---|---|---|
| 1 | **Instruction `network` ou politique d'export manquante** | Sur votre routeur, assurez-vous d'annoncer les bons préfixes via les commandes `network` (Cisco) ou les politiques d'export (Juniper). Consultez [Configurer OCC L3 avec BGP](../3.7_occ_l3_bgp/guide.fr-fr.md). |
| 2 | **Filtre de préfixes bloquant les routes** | Votre prefix-list d'import peut être trop restrictive et filtrer les routes OVHcloud. Vérifiez vos prefix-lists et vos politiques de routage. |
| 3 | **vRack non associé** | Les routes OVHcloud ne sont échangées que si le service OVHcloud Connect est associé à un vRack. Vérifiez l'association dans l'espace client. Consultez [Associer à un vRack](../3.5_associate_vrack/guide.fr-fr.md). |
| 4 | **Sous-réseaux d'AZ non configurés** | Si aucun sous-réseau n'est défini dans la configuration de l'Availability Zone, aucune route ne pourra être échangée. Consultez [Configurer votre réseau vRack](../3.6_vrack_network_setup/guide.fr-fr.md). |
| 5 | **Limite maximale de préfixes atteinte** | OVHcloud prend en charge jusqu'à **100 préfixes** par session BGP. Si vous dépassez cette limite, la session peut cesser d'accepter de nouvelles routes. Agrégez vos préfixes. |
| 6 | **Route absente de la table de routage** | Le préfixe que vous tentez d'annoncer doit exister dans la table de routage de votre routeur (via un réseau connecté, une route statique ou un IGP). |

### Commandes de vérification

**Cisco IOS :**

```
show ip bgp summary
show ip bgp neighbors 192.0.2.1 received-routes
show ip bgp neighbors 192.0.2.1 advertised-routes
show ip route bgp
```

**Juniper JunOS :**

```
show bgp summary
show route receive-protocol bgp 192.0.2.1
show route advertising-protocol bgp 192.0.2.1
show route protocol bgp
```

---

## Problème 5 — Session BGP qui flappe en permanence (montées et descentes répétées)

La session BGP oscille entre les états `Established` et `Active`/`Idle`, provoquant une connectivité intermittente.

### Causes possibles et solutions

| # | Cause possible | Solution |
|---|---|---|
| 1 | **Lien physique instable** | Vérifiez les compteurs d'erreurs des interfaces (`show interfaces`) pour les erreurs CRC, les erreurs d'entrée ou les drops de sortie. Inspectez le SFP, le câble cross-connect et le panneau de brassage. |
| 2 | **MTU incompatible** | Une incompatibilité de MTU entre votre équipement et OVHcloud peut entraîner la perte des grands paquets de mise à jour BGP. Le MTU par défaut est de **1500 octets**. Confirmez les paramètres de MTU des deux côtés. |
| 3 | **Expiration du hold timer BGP** | Le hold timer BGP par défaut est de 90 secondes. Si des keepalives sont perdus à cause de l'instabilité du lien, la session tombe. Envisagez d'ajuster les timers BGP, mais corrigez d'abord la cause racine. |
| 4 | **Surcharge CPU ou mémoire de votre routeur** | Le traitement BGP peut être retardé si le routeur est en forte charge. Vérifiez l'utilisation CPU et mémoire. |
| 5 | **Changements agressifs de préfixes** | Le retrait et l'annonce rapides de routes peuvent déclencher du flap dampening. Stabilisez vos annonces de routage. |

### Commandes de vérification

**Cisco IOS :**

```
show interfaces GigabitEthernet0/0
show ip bgp summary
show ip bgp flap-statistics
show log | include BGP
```

**Juniper JunOS :**

```
show interfaces ge-0/0/0 extensive
show bgp summary
show log messages | match BGP
```

---

## Problème 6 — Le trafic ne circule pas malgré une session BGP établie et des routes échangées

BGP est up, les routes apparaissent dans la table de routage des deux côtés, mais le trafic réel (ping, données applicatives) ne passe pas.

### Causes possibles et solutions

| # | Cause possible | Solution |
|---|---|---|
| 1 | **Pare-feu ou ACL bloquant le trafic** | Vérifiez les règles de pare-feu et les listes de contrôle d'accès sur votre routeur, sur vos ressources OVHcloud (security groups, iptables) et sur tout équipement intermédiaire. |
| 2 | **Tag VLAN incompatible** | L'ID de VLAN sur votre interface doit correspondre au VLAN configuré chez OVHcloud. Une incompatibilité entraîne un drop silencieux du trafic taggé. |
| 3 | **Configuration de sous-réseau incorrecte** | Vérifiez que les IPs source et destination appartiennent aux bons sous-réseaux et qu'aucune plage ne se chevauche. Consultez [Configurer votre réseau vRack](../3.6_vrack_network_setup/guide.fr-fr.md). |
| 4 | **Routage asymétrique** | Si vous avez plusieurs chemins (par exemple internet + OVHcloud Connect), le trafic retour peut emprunter un chemin différent. Garantissez un routage symétrique grâce aux attributs BGP (Local Preference, AS-path prepending). |
| 5 | **Ressource vRack non rattachée** | La ressource OVHcloud cible (serveur Bare Metal, instance Public Cloud, Hosted Private Cloud) doit être rattachée au même vRack qu'OVHcloud Connect. Vérifiez dans l'espace client. |
| 6 | **MTU incompatible entraînant de la fragmentation** | Les grands paquets peuvent être perdus silencieusement si le MTU diffère entre les segments. Testez avec différentes tailles de paquets : `ping -s 1472 -M do <destination>` (Linux) pour vérifier les problèmes de fragmentation. |

### Commandes de vérification

**De votre côté :**

```
ping 172.16.1.1
traceroute 172.16.1.1
```

**Depuis un hôte Linux dans OVHcloud :**

```bash
ping -c 10 10.0.0.1
traceroute 10.0.0.1
mtr -r -c 50 10.0.0.1
```

---

## Problème 7 — Performances lentes ou latence élevée

La connexion fonctionne, mais le débit est inférieur aux attentes ou la latence est plus élevée que la normale.

### Causes possibles et solutions

| # | Cause possible | Solution |
|---|---|---|
| 1 | **Saturation de la bande passante** | Vérifiez l'utilisation des interfaces dans l'espace client OVHcloud et sur votre routeur. Si vous dépassez régulièrement 80 % de la bande passante provisionnée, planifiez une montée en gamme. |
| 2 | **MTU incompatible entraînant de la fragmentation** | Les paquets fragmentés réduisent le débit effectif. Vérifiez le MTU de bout en bout et exécutez une découverte de path MTU : `ping -s 1472 -M do <destination>`. |
| 3 | **Erreurs d'interface (CRC, FCS, drops)** | Vérifiez les compteurs d'erreurs avec `show interfaces`. Les problèmes physiques (fibre encrassée, SFP défectueux, connecteur mal serré) provoquent des retransmissions et dégradent les performances. |
| 4 | **Routage sous-optimal** | Le trafic peut emprunter un chemin plus long qu'attendu. Vérifiez le `traceroute` et les attributs BGP (Local Preference, AS-path) pour garantir une sélection optimale du chemin. |
| 5 | **Congestion chez le fournisseur** | Si vous utilisez OVHcloud Connect Provider, vérifiez le portail du fournisseur (Megaport, Equinix Fabric, Console Connect) pour l'utilisation et les alertes sur le circuit virtuel. |
| 6 | **Mauvaise configuration de la taille de fenêtre TCP** | Pour les liens à haute bande passante et latence élevée, assurez-vous que le TCP window scaling est activé sur les hôtes afin de maximiser le débit. |

### Commandes de vérification

**Cisco IOS :**

```
show interfaces GigabitEthernet0/0 | include rate|error|drop|CRC
show ip route 172.16.1.0
```

**Depuis un hôte Linux :**

```bash
iperf3 -c <destination> -t 30
mtr -r -c 100 <destination>
```

---

## Problème 8 — Circuit virtuel du fournisseur ne s'établit pas (OVHcloud Connect Provider)

Vous avez commandé un service OVHcloud Connect Provider, mais la connexion via votre fournisseur (Megaport, Equinix Fabric ou Console Connect) ne monte pas.

### Causes possibles et solutions

| # | Cause possible | Solution |
|---|---|---|
| 1 | **Pairing key / clé de service incorrecte** | Vérifiez que la pairing key (ou clé de service) saisie dans le portail de votre fournisseur correspond exactement à la clé issue de l'espace client OVHcloud. |
| 2 | **Circuit virtuel du fournisseur non provisionné** | Vérifiez le statut du VXC (Megaport), de la connexion virtuelle (Equinix) ou de la connexion (Console Connect) dans le portail du fournisseur. Il doit être affiché « Active » ou « Provisioned ». |
| 3 | **Le fournisseur n'est pas présent au PoP** | Le fournisseur doit être disponible au PoP OVHcloud que vous avez sélectionné. Vérifiez la disponibilité du PoP dans [Fournisseurs](../1.3_providers/guide.fr-fr.md) et [Localisations des PoP](../1.4_pop_locations_regions/guide.fr-fr.md). |
| 4 | **Bande passante incompatible** | La bande passante commandée côté fournisseur doit correspondre, ou être compatible, avec la bande passante du service OVHcloud Connect. |
| 5 | **Maintenance ou incident côté fournisseur** | Consultez la page de statut de votre fournisseur pour vérifier les incidents en cours ou les maintenances planifiées. |

> **Astuce :** si le portail du fournisseur affiche la connexion comme « Active » mais qu'OVHcloud l'affiche encore comme « Pending », attendez quelques minutes que le provisionnement se termine. Si cela persiste au-delà de 30 minutes, contactez le support OVHcloud.

---

## Problème 9 — Service commandé mais non livré / non configurable

Votre service OVHcloud Connect apparaît dans l'espace client mais ne peut pas être configuré.

### Causes possibles et solutions

| # | Cause possible | Solution |
|---|---|---|
| 1 | **Cross-connect non encore installé (Direct)** | Le service devient configurable une fois qu'OVHcloud détecte de la lumière sur le port. Commandez le cross-connect auprès de l'opérateur de votre datacenter à l'aide de la LOA et assurez-vous que votre équipement est connecté. |
| 2 | **Fenêtre d'interconnexion de 60 jours (Direct)** | Après la commande, vous disposez de **60 jours** pour finaliser l'interconnexion (commander le cross-connect et interconnecter votre équipement). Au-delà de 60 jours — même sans détection de lumière — le service est considéré comme opérationnel et la facturation démarre. |
| 3 | **Circuit du fournisseur non encore relié (Provider)** | Assurez-vous que le circuit virtuel du fournisseur est provisionné et relié au service OVHcloud à l'aide de la pairing key correcte. |
| 4 | **Provisionnement en cours** | Les nouveaux services peuvent mettre quelques minutes à devenir configurables après la commande. Patientez et rafraîchissez l'espace client. |
| 5 | **Problème de commande** | Si le service reste à l'état « Pending » pendant une période prolongée, contactez le support OVHcloud avec la référence de votre commande. |

---

## Problème 10 — Bascule inopérante en configuration Multi-AZ

Vous disposez de deux liens OVHcloud Connect pour la redondance, mais le trafic ne bascule pas lorsque l'un des liens tombe.

### Causes possibles et solutions

| # | Cause possible | Solution |
|---|---|---|
| 1 | **Les deux liens dans le même PoP** | Pour une véritable résilience Multi-AZ, les deux liens doivent se terminer sur des **PoP différents** et des **Availability Zones différentes**. Consultez [Multi-AZ](../1.5_multi_az/guide.fr-fr.md). |
| 2 | **Bascule BGP non configurée** | Configurez les attributs BGP pour contrôler la sélection du chemin : utilisez la **Local Preference** pour privilégier le chemin principal et l'**AS-path prepending** sur le secours. Consultez [Configurer OCC L3 avec BGP](../3.7_occ_l3_bgp/guide.fr-fr.md). |
| 3 | **BFD non activé** | Sans BFD, la bascule BGP repose sur les hold timers (90 secondes par défaut). Activez **BFD (Bidirectional Forwarding Detection)** pour réduire le temps de bascule à moins d'une seconde. Contactez le support OVHcloud pour confirmer la disponibilité de BFD pour votre service. |
| 4 | **vRack non partagé entre les deux services** | Les deux services OVHcloud Connect doivent être associés au **même vRack** pour que la bascule fonctionne. Vérifiez dans l'espace client. Consultez [Associer à un vRack](../3.5_associate_vrack/guide.fr-fr.md). |
| 5 | **Prefix-list filtrant les routes de secours** | Assurez-vous que vos filtres de préfixes en import/export autorisent les mêmes préfixes sur les deux liens. |

### Commandes de vérification

**Cisco IOS :**

```
show ip bgp
show ip bgp summary
show ip route bgp
show ip bgp neighbors 192.0.2.1
show ip bgp neighbors 198.51.100.1
```

Vérifiez que les deux sessions BGP sont à l'état `Established` et que les routes sont reçues des deux pairs avec des attributs différents (Local Preference, longueur de l'AS-path).

---

## Problème 11 — Conflit d'adresses IP dans la configuration PoP ou DC

La session BGP peut ne pas s'établir, ou le trafic peut être mal routé en raison de conflits d'adresses IP.

### Causes possibles et solutions

| # | Cause possible | Solution |
|---|---|---|
| 1 | **Utilisation d'IPs réservées par OVHcloud** | Dans le sous-réseau /30 du PoP, la **première IP** est réservée à OVHcloud. Dans le sous-réseau /28 (minimum) du DC, les **trois premières IPs** sont réservées à OVHcloud. Assurez-vous d'utiliser les bonnes IPs. |
| 2 | **Sous-réseaux qui se chevauchent** | Vos sous-réseaux on-premises ne doivent pas se chevaucher avec les sous-réseaux utilisés dans le vRack OVHcloud. Planifiez soigneusement votre adressage IP. Consultez [Configurer votre réseau vRack](../3.6_vrack_network_setup/guide.fr-fr.md). |
| 3 | **ASN en doublon** | Votre ASN BGP doit être différent de celui d'OVHcloud (35540) et des ASN réservés (65501, 65502, 65519). |

---

## Problème 12 — Fonctionnalités non prises en charge ou comportement inattendu

Certaines fonctionnalités peuvent ne pas se comporter comme attendu en raison des limitations actuelles de la plateforme.

### Limitations connues

| Fonctionnalité | Statut | Notes |
|---|---|---|
| **IPv6** | Non pris en charge | OVHcloud Connect ne prend en charge qu'IPv4 actuellement. |
| **QoS / CoS** | Non pris en charge | Aucun mécanisme de qualité de service ou de classe de service 802.1p. |
| **Tag VLAN 802.1q (mode L2)** | Pris en charge | Le mode L2 n'est toutefois disponible que sur OVHcloud Connect Direct. |
| **Multi-VRF** | Non pris en charge | Une seule instance de routage par service OVHcloud Connect. |
| **eBGP Multi-Hop** | Non pris en charge | Le peering BGP doit être directement connecté (single hop). |
| **iBGP** | Non pris en charge | Seul l'eBGP est pris en charge. |
| **Routage statique au PoP** | Non pris en charge | Tout le routage se fait via BGP. |
| **Spanning Tree (L2)** | Non pris en charge | Le mode L2 ne transmet pas les BPDU. |
| **Multicast / IGMP (L2)** | Non pris en charge | Seul le trafic unicast est pris en charge en mode L2. |
| **FCoE (L2)** | Non pris en charge | Fibre Channel over Ethernet n'est pas pris en charge. |
| **LACP (L2)** | Pris en charge | Peut être utilisé pour l'agrégation de liens en mode L2 au sein d'un même PoP. |

Pour la liste complète des prérequis et limitations, consultez [Prérequis et limitations](../1.8_prerequisites_limitations/guide.fr-fr.md).

---

## Référence rapide : commandes de diagnostic

### Cisco IOS / IOS-XE

| Objectif | Commande |
|---|---|
| État de l'interface | `show interfaces GigabitEthernet0/0` |
| Résumé des interfaces | `show ip interface brief` |
| Résumé de la session BGP | `show ip bgp summary` |
| Détails du voisin BGP | `show bgp ipv4 unicast neighbors <peer-IP>` |
| Routes reçues du pair | `show ip bgp neighbors <peer-IP> received-routes` |
| Routes annoncées au pair | `show ip bgp neighbors <peer-IP> advertised-routes` |
| Table de routage BGP | `show ip route bgp` |
| Statistiques de flap BGP | `show ip bgp flap-statistics` |
| Logs | `show log \| include BGP` |

### Juniper JunOS

| Objectif | Commande |
|---|---|
| État de l'interface | `show interfaces ge-0/0/0 extensive` |
| Résumé des interfaces | `show interfaces terse` |
| Résumé de la session BGP | `show bgp summary` |
| Détails du voisin BGP | `show bgp neighbor <peer-IP>` |
| Routes reçues du pair | `show route receive-protocol bgp <peer-IP>` |
| Routes annoncées au pair | `show route advertising-protocol bgp <peer-IP>` |
| Table de routage BGP | `show route protocol bgp` |
| Logs | `show log messages \| match BGP` |

### Hôte Linux

| Objectif | Commande |
|---|---|
| Test de connectivité | `ping -c 10 <destination>` |
| Trace de chemin | `traceroute <destination>` |
| Ping + trace combinés | `mtr -r -c 50 <destination>` |
| Test de MTU (sans fragmentation) | `ping -s 1472 -M do <destination>` |
| Test de débit | `iperf3 -c <destination> -t 30` |

---

## Quand contacter le support

Si vous avez suivi les étapes de dépannage ci-dessus et que le problème persiste, ouvrez un ticket de support :

1. Depuis l'[espace client OVHcloud](/links/manager), allez dans **Support** → **Créer un ticket**.
2. Sélectionnez **Network** → **OVHcloud Connect**.
3. Incluez :
   - Le **nom/ID de service** de votre OVHcloud Connect
   - L'**horodatage** du problème (UTC)
   - Les **symptômes** observés
   - Les **sorties de diagnostic** (résumé BGP, état des interfaces, traceroute, valeurs optiques)
   - Les **étapes déjà entreprises** pour le dépannage
4. Consultez [Déclarer et suivre un incident](../3.10_incident_followup/guide.fr-fr.md) pour le processus complet de gestion des incidents.

---

## Et ensuite ?

- Mettez en place un [monitoring](../3.9_monitor/guide.fr-fr.md) proactif pour détecter les problèmes avant qu'ils n'impactent vos utilisateurs
- Consultez [Prérequis et limitations](../1.8_prerequisites_limitations/guide.fr-fr.md) pour éviter les écueils connus
- Consultez la [FAQ](../5_faq/guide.fr-fr.md) pour les réponses aux questions courantes
- Vérifiez les [SLA](../1.7_slas/guide.fr-fr.md) pour les garanties de disponibilité et les avoirs de service

## Aller plus loin

Pour bénéficier d'une formation ou d'une assistance technique dans la mise en œuvre de nos solutions, contactez votre conseiller commercial ou cliquez sur [ce lien](/links/professional-services) afin d'obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l'équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
