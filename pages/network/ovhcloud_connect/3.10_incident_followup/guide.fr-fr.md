---
title: 'Déclarer et suivre un incident'
excerpt: 'Découvrez comment signaler un incident OVHcloud Connect, fournir les informations de diagnostic et suivre la résolution'
updated: 2026-02-18
---

## Objectif

Si vous constatez une dégradation de service ou une interruption sur votre lien OVHcloud Connect, suivez ce guide pour signaler l'incident, fournir les bonnes informations de diagnostic et suivre la résolution.

## Étape 1 — Recueillir les informations de diagnostic

Avant de contacter le support, collectez les informations suivantes pour accélérer le diagnostic :

### Liste de contrôle pour le tri d'incident

| Information | Comment la collecter |
|---|---|
| **Horodatage (UTC)** | Notez précisément le début du problème et sa durée |
| **Service concerné** | Nom/ID du service OVHcloud Connect, PoP, ID de VLAN |
| **Symptômes** | Lien down, chute de session BGP, perte de paquets, latence élevée, etc. |
| **État de l'interface** | `show interfaces` (Cisco) ou `show interfaces terse` (Juniper) |
| **État BGP** | `show ip bgp summary` (Cisco) ou `show bgp summary` (Juniper) |
| **Traceroute** | À exécuter de votre côté vers une ressource OVHcloud, et inversement |
| **Sortie MTR** | Si disponible, exécutez `mtr` pour combiner ping et traceroute avec le pourcentage de pertes |
| **Changements récents** | Toute modification de configuration, maintenance ou mise à jour avant l'incident |

### Exemples de commandes de diagnostic

**Cisco IOS :**
```
show ip bgp summary
show interfaces GigabitEthernet0/0
show ip route
traceroute 172.16.1.10
```

**Juniper JunOS :**
```
show bgp summary
show interfaces terse
show route
traceroute 172.16.1.10
```

**Depuis un hôte Linux dans OVHcloud :**
```bash
ping -c 10 10.0.0.1
traceroute 10.0.0.1
mtr -r -c 50 10.0.0.1
```

## Étape 2 — Vérifier les incidents connus

Avant d'ouvrir un ticket, vérifiez si le problème est déjà connu :

- **Page de statut OVHcloud** — Consultez les pages de statut OVHcloud et de maintenances planifiées (accessibles depuis l'espace client).
- **Page de statut du fournisseur** — Si vous utilisez un fournisseur (Megaport, Equinix, Console Connect), consultez ses pages de statut/maintenance.
- **Votre propre supervision** — Confirmez que le problème ne se situe pas de votre côté (panne du routeur local, panne du FAI, etc.).

## Étape 3 — Ouvrir un ticket de support

1. Connectez-vous à l'[espace client OVHcloud](https://www.ovh.com/manager/).
2. Allez dans **Support** puis **Créer un ticket** (ou rendez-vous dans la section support).
3. Sélectionnez la catégorie liée à **Réseau** / **OVHcloud Connect**.
4. Indiquez un **objet** clair (par exemple : « OVHcloud Connect — session BGP down depuis 14h30 UTC »).
5. Dans la description, incluez :
   - Le **nom/ID du service** OVHcloud Connect
   - L'**horodatage** du problème (UTC)
   - Les **symptômes** observés
   - Les **sorties de diagnostic** (collez le résumé BGP, l'état d'interface, le traceroute)
   - L'**impact** sur votre activité (nombre d'utilisateurs concernés, services critiques indisponibles)
6. Joignez toutes les **captures d'écran** ou fichiers de logs.
7. Soumettez le ticket et notez le **numéro de ticket**.

> **Astuce :** plus votre rapport initial est détaillé, plus l'équipe de support pourra diagnostiquer le problème rapidement.

## Étape 4 — Suivre

| Action | Quand |
|---|---|
| **Vérifier le statut du ticket** | Régulièrement, depuis l'espace client OVHcloud |
| **Répondre aux demandes** | Si le support demande des informations complémentaires, fournissez-les rapidement |
| **Escalader si nécessaire** | En cas d'impact métier critique, demandez un traitement prioritaire ou une escalade |
| **Tenir une chronologie** | Conservez une chronologie des événements, communications et changements de statut |

### Escalade

Si le problème est **critique pour votre activité** et que vous n'obtenez pas de réponse dans les délais :

1. Référez-vous aux conditions de SLA de votre contrat (voir [SLA](../1.7_slas/guide.fr-fr.md)).
2. Demandez une escalade via le portail de support.
3. Contactez votre interlocuteur commercial OVHcloud pour un traitement prioritaire.

## Étape 5 — Post-incident

Une fois l'incident résolu :

1. **Demandez une analyse de cause racine (RCA)** — Demandez au support OVHcloud un rapport post-incident expliquant ce qu'il s'est passé et les mesures prises pour éviter une récidive.
2. **Mettez à jour vos runbooks** — Documentez l'incident, les étapes de résolution et les enseignements tirés.
3. **Mettez en place des mesures correctives** — Si l'incident a révélé une faiblesse (par exemple un manque de redondance, une supervision insuffisante), planifiez les améliorations.
4. **Vérifiez la conformité au SLA** — Si l'incident a entraîné une indisponibilité supérieure à l'engagement SLA, vous pouvez être éligible à des avoirs (voir [SLA](../1.7_slas/guide.fr-fr.md)).

## Synthèse : flux de réponse à incident

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 120" font-family="Arial, sans-serif" font-size="11">
  <rect width="750" height="120" fill="#f8f9fa" rx="8"/>

  <rect x="10" y="35" width="120" height="50" rx="6" fill="#fce4ec" stroke="#c62828" stroke-width="1.5"/>
  <text x="70" y="55" text-anchor="middle" fill="#c62828" font-weight="bold">Détecter</text>
  <text x="70" y="72" text-anchor="middle" fill="#555" font-size="9">Alerte ou signalement</text>

  <rect x="155" y="35" width="120" height="50" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
  <text x="215" y="55" text-anchor="middle" fill="#e65100" font-weight="bold">Diagnostiquer</text>
  <text x="215" y="72" text-anchor="middle" fill="#555" font-size="9">Collecter logs et données</text>

  <rect x="300" y="35" width="120" height="50" rx="6" fill="#e3f2fd" stroke="#1565c0" stroke-width="1.5"/>
  <text x="360" y="55" text-anchor="middle" fill="#1565c0" font-weight="bold">Signaler</text>
  <text x="360" y="72" text-anchor="middle" fill="#555" font-size="9">Ouvrir un ticket de support</text>

  <rect x="445" y="35" width="120" height="50" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
  <text x="505" y="55" text-anchor="middle" fill="#2e7d32" font-weight="bold">Résoudre</text>
  <text x="505" y="72" text-anchor="middle" fill="#555" font-size="9">Corriger et vérifier</text>

  <rect x="590" y="35" width="140" height="50" rx="6" fill="#f3e5f5" stroke="#6a1b9a" stroke-width="1.5"/>
  <text x="660" y="55" text-anchor="middle" fill="#6a1b9a" font-weight="bold">Post-incident</text>
  <text x="660" y="72" text-anchor="middle" fill="#555" font-size="9">RCA et améliorations</text>

  <line x1="130" y1="60" x2="155" y2="60" stroke="#555" stroke-width="1.5" marker-end="url(#a8)"/>
  <line x1="275" y1="60" x2="300" y2="60" stroke="#555" stroke-width="1.5" marker-end="url(#a8)"/>
  <line x1="420" y1="60" x2="445" y2="60" stroke="#555" stroke-width="1.5" marker-end="url(#a8)"/>
  <line x1="565" y1="60" x2="590" y2="60" stroke="#555" stroke-width="1.5" marker-end="url(#a8)"/>

  <defs>
    <marker id="a8" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
    </marker>
  </defs>
</svg>
```

## Et ensuite ?

- Mettez en place une [supervision](../3.9_monitor/guide.fr-fr.md) proactive afin de détecter les problèmes avant qu'ils n'impactent vos utilisateurs
- Passez en revue vos engagements [SLA](../1.7_slas/guide.fr-fr.md)

## Aller plus loin

Pour bénéficier d'une formation ou d'une assistance technique dans la mise en œuvre de nos solutions, contactez votre conseiller commercial ou cliquez sur [ce lien](/links/professional-services) afin d'obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l'équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
