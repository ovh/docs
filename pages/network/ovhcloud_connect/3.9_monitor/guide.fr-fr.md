---
title: 'Surveiller votre OVHcloud Connect'
excerpt: 'Découvrez les outils et les métriques disponibles pour surveiller votre service OVHcloud Connect'
updated: 2026-02-18
---

## Objectif

La surveillance de votre service OVHcloud Connect garantit que la connexion est saine, performante et conforme à vos attentes. Ce guide présente les outils et les métriques disponibles.

## Outils de surveillance

### Espace client OVHcloud

L’interface principale pour surveiller votre connexion :

1. Connectez-vous à l’[espace client OVHcloud](https://www.ovh.com/manager/).
2. Naviguez vers **Network** → **OVHcloud Connect**.
3. Sélectionnez votre service.

Vous pouvez consulter :

| Métrique | Description |
|---|---|
| **État de la connexion** | Indique si le lien physique est actif ou inactif |
| **État de la session BGP** | Indique si le peering BGP est Established, Active ou Idle |
| **Utilisation de la bande passante** | Débit actuel et historique (entrant/sortant) |
| **État du port** | État de l’interface physique et compteurs d’erreurs |
| **Détails du service** | PoP, niveau de bande passante, association vRack, configuration |

### API OVHcloud

Pour une surveillance programmatique et une intégration avec vos propres outils :

```python
import ovh

client = ovh.Client(endpoint='ovh-eu')

service_name = "your-occ-service-uuid"

# Get service status
service = client.get(f"/ovhCloudConnect/{service_name}")
print(f"Status: {service['status']}")

# Get PoP configuration and BGP state
pop_config = client.get(f"/ovhCloudConnect/{service_name}/config/pop")
print(pop_config)
```

> Référence complète de l’API : [eu.api.ovh.com/console](https://eu.api.ovh.com/console/?section=%2FovhCloudConnect&branch=v1)

### Vos propres outils de surveillance

Complétez la surveillance d’OVHcloud avec votre propre infrastructure :

- **SNMP** — Interrogez les interfaces de votre routeur pour obtenir les compteurs de trafic, les taux d’erreur et l’état des interfaces.
- **Surveillance BGP** — Utilisez des outils tels que `bgpstream`, `exabgp` ou la surveillance intégrée de votre routeur pour suivre la stabilité des sessions BGP et les changements de préfixes.
- **Sondes ping / latence** — Mettez en place des pings réguliers ou des mesures de latence entre votre réseau on-premises et les ressources OVHcloud.
- **Plateformes tierces** — Des outils comme Datadog, Zabbix, PRTG ou Grafana peuvent agréger les métriques provenant à la fois de votre infrastructure et de l’API OVHcloud.

## Diagnostics à la demande

Vous pouvez lancer des diagnostics à la demande depuis l’espace client OVHcloud afin d’obtenir un rapport d’état ponctuel de votre service OVHcloud Connect. Chaque diagnostic s’exécute en temps réel sur les équipements côté OVHcloud et renvoie un résultat que vous pouvez consulter ou télécharger.

### Diagnostics disponibles

**Mode Layer 3 :**

| Diagnostic | Description |
|---|---|
| **BGP Peering Test** | Récupère l’état de la session BGP et les informations associées. |
| **Routes** | Récupère la table de routage apprise par OVHcloud via BGP (routes reçues de votre côté). |
| **Advertised-Routes** | Récupère la table de routage annoncée par OVHcloud à votre côté. |

**Mode Layer 2 :**

| Diagnostic | Description |
|---|---|
| **MAC Address** | Récupère la liste des adresses MAC vues sur le segment Layer 2 entre vos équipements réseau et le vRack. |

### Lancer un diagnostic

1. Connectez-vous à l’[espace client OVHcloud](/links/manager).
2. Allez dans **Network** > `OVHcloud Connect`{.action} et ouvrez le service à diagnostiquer.
3. En bas du panneau « POP Configuration », dans la section « Diagnostic POP », cliquez sur le bouton points de suspension `...`{.action}.
4. Sélectionnez le diagnostic à exécuter — par exemple `BGP Peering Test`{.action} en mode Layer 3, ou `Obtenir la liste de mes adresses MAC`{.action} en mode Layer 2.
5. Confirmez en cliquant sur `Lancer le diagnostic`{.action}.

### Récupérer un résultat

1. Ouvrez l’onglet `Diagnostics`{.action} du service. Chaque diagnostic est listé avec son ID et son horodatage.
2. Cliquez sur le bouton points de suspension `...`{.action} en regard de l’entrée.
3. Sélectionnez `Voir le résultat`{.action} pour ouvrir la sortie dans une nouvelle fenêtre, ou `Télécharger le résultat`{.action} pour enregistrer un fichier `.txt`.

### Limites

| Limite | Valeur |
|---|---|
| **Rétention** | Seuls les diagnostics initiés **au cours des sept derniers jours** sont accessibles. Téléchargez et archivez ceux que vous souhaitez conserver. |
| **Limite de débit** | **10 diagnostics par type, par service et par période de 24 heures.** Cela s’applique indépendamment à chaque type de diagnostic (BGP Peering Test, Routes, Advertised-Routes, MAC Address). |

> [!primary]
>
> Les diagnostics sont également disponibles de manière programmatique via l’API OVHcloud sous les endpoints `/ovhCloudConnect/{serviceName}/diagnostic/...`. Consultez la [console API](/links/api) pour la liste complète.
>

## Métriques clés à surveiller

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 220" font-family="Arial, sans-serif" font-size="12">
  <rect width="700" height="220" fill="#f8f9fa" rx="8"/>

  <rect x="20" y="20" width="150" height="80" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
  <text x="95" y="48" text-anchor="middle" font-weight="bold" fill="#2e7d32">État du lien</text>
  <text x="95" y="68" text-anchor="middle" fill="#555" font-size="10">Up / Down</text>
  <text x="95" y="83" text-anchor="middle" fill="#555" font-size="10">Compteurs d’erreurs</text>

  <rect x="190" y="20" width="150" height="80" rx="6" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/>
  <text x="265" y="48" text-anchor="middle" font-weight="bold" fill="#1565c0">État BGP</text>
  <text x="265" y="68" text-anchor="middle" fill="#555" font-size="10">État de la session</text>
  <text x="265" y="83" text-anchor="middle" fill="#555" font-size="10">Nombre de préfixes</text>

  <rect x="360" y="20" width="150" height="80" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
  <text x="435" y="48" text-anchor="middle" font-weight="bold" fill="#e65100">Débit</text>
  <text x="435" y="68" text-anchor="middle" fill="#555" font-size="10">Bande passante in/out</text>
  <text x="435" y="83" text-anchor="middle" fill="#555" font-size="10">Pic vs moyenne</text>

  <rect x="530" y="20" width="150" height="80" rx="6" fill="#fce4ec" stroke="#c62828" stroke-width="1.5"/>
  <text x="605" y="48" text-anchor="middle" font-weight="bold" fill="#c62828">Latence</text>
  <text x="605" y="68" text-anchor="middle" fill="#555" font-size="10">Temps aller-retour</text>
  <text x="605" y="83" text-anchor="middle" fill="#555" font-size="10">Gigue</text>

  <rect x="20" y="120" width="320" height="80" rx="6" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
  <text x="180" y="148" text-anchor="middle" font-weight="bold" fill="#6a1b9a">Alertes à configurer</text>
  <text x="180" y="168" text-anchor="middle" fill="#555" font-size="10">Lien down · Flap BGP · Bande passante &gt; 80 % · Pic de latence · Changement de préfixes</text>
  <text x="180" y="185" text-anchor="middle" fill="#555" font-size="10">Notification par e-mail, SMS ou intégration avec votre système d’incidents</text>
</svg>
```

### Alertes critiques (à mettre en place immédiatement)

| Alerte | Déclencheur | Action |
|---|---|---|
| **Lien down** | L’état du port physique passe à « down » | Vérifiez le cross-connect, le SFP et contactez le datacenter ou le fournisseur |
| **Session BGP down** | L’état de la session BGP n’est plus « Established » | Vérifiez la configuration du routeur, l’accessibilité du pair et les règles de pare-feu |
| **Utilisation élevée de la bande passante** | Le débit dépasse 80 % de la capacité provisionnée | Planifiez une montée en bande passante ou optimisez le trafic |
| **Pic de latence** | Le RTT augmente significativement au-dessus de la référence | Lancez un traceroute et vérifiez la présence de congestion ou de changements de routage |
| **Changement du nombre de préfixes** | Augmentation ou diminution inattendue des préfixes reçus/envoyés | Investiguez d’éventuelles fuites de routes ou modifications de configuration |

## Commandes de surveillance sur votre routeur

### Cisco IOS

```
show interfaces GigabitEthernet0/0
show ip bgp summary
show ip bgp neighbors 192.0.2.1 received-routes
show ip bgp neighbors 192.0.2.1 advertised-routes
show ip route bgp
```

### Juniper JunOS

```
show interfaces terse
show bgp summary
show route receive-protocol bgp 192.0.2.1
show route advertising-protocol bgp 192.0.2.1
show route protocol bgp
```

## Bonnes pratiques

- **Surveillez des deux côtés** — Vérifiez les métriques sur votre routeur et dans l’espace client OVHcloud.
- **Établissez une référence pour vos métriques** — Enregistrez la bande passante, la latence et le nombre de préfixes en conditions normales afin de pouvoir détecter les anomalies.
- **Automatisez les alertes** — Ne vous fiez pas aux contrôles manuels. Configurez des notifications automatiques pour les événements critiques.
- **Faites des revues régulières** — Consultez les tableaux de bord de surveillance chaque semaine afin de repérer les tendances (croissance de la bande passante, augmentation de la latence).
- **Testez la bascule** — Si vous disposez d’une configuration Multi-AZ, testez périodiquement la bascule et vérifiez que la surveillance détecte le basculement.

## Et ensuite ?

- [Transférer les logs de votre OVHcloud Connect](../3.12_log_forwarding/guide.fr-fr.md) vers Logs Data Platform pour un stockage et une analyse à long terme
- [Déclarer et suivre un incident](../3.10_incident_followup/guide.fr-fr.md) si vous détectez un problème
- Consultez les [SLA](../1.7_slas/guide.fr-fr.md) pour comprendre les garanties de disponibilité

## Aller plus loin

Pour bénéficier d'une formation ou d'une assistance technique dans la mise en œuvre de nos solutions, contactez votre conseiller commercial ou cliquez sur [ce lien](/links/professional-services) afin d'obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l'équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
