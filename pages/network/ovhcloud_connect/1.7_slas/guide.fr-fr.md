---
title: 'OVHcloud Connect - SLAs'
excerpt: 'Découvrez les Service Level Agreements d''OVHcloud Connect et comment atteindre une plus haute disponibilité'
updated: 2026-02-18
---

## Objectif

Un **Service Level Agreement (SLA)** est un engagement contractuel d'OVHcloud qui définit le niveau de service garanti pour OVHcloud Connect. Les SLAs vous donnent l'assurance que votre connexion atteindra des objectifs de performance et de disponibilité spécifiques.

## Ce que couvre le SLA

Les SLAs OVHcloud Connect portent généralement sur les domaines suivants :

| Domaine | Signification |
|---|---|
| **Disponibilité (uptime)** | Le pourcentage de temps pendant lequel le service est opérationnel sur une période donnée (par exemple 99,9 % de disponibilité mensuelle). |
| **Latence** | Le délai maximal acceptable pour le trafic traversant le lien OVHcloud Connect. |
| **Délai de réponse du support** | La rapidité avec laquelle OVHcloud accuse réception d'un incident signalé et commence à le traiter. |
| **Temps de résolution** | L'objectif de délai pour rétablir le service après un incident. |

## Niveaux de SLA et type de connexion

Le niveau de SLA que vous pouvez atteindre dépend de votre architecture :

| Architecture | Disponibilité typique | Remarques |
|---|---|---|
| **Connexion unique** (un PoP, un lien) | Jusqu'à 99,9 % | Couvre la portion du lien gérée par OVHcloud. Un chemin physique unique reste un point de défaillance. |
| **Connexions redondantes** (Multi-AZ, deux PoPs) | Jusqu'à 99,99 % | Plusieurs chemins indépendants protègent contre les défaillances d'un lien unique et d'un site unique. Des paliers SLA supérieurs peuvent s'appliquer. |
| **Connexion via Provider** | Variable | Le SLA de bout en bout dépend à la fois du SLA d'OVHcloud et de celui de votre provider. Vérifiez les deux. |

> **Important :** les garanties SLA s'appliquent à la portion du service gérée par OVHcloud. Les éléments tiers (votre routeur, les liens du provider, les cross-connects gérés par les opérateurs de datacenters) ne sont pas couverts par le SLA d'OVHcloud.

## Prérequis du SLA

Pour que le SLA soit valide, vous devez :

1. **Suivre les recommandations de configuration d'OVHcloud** — Une configuration BGP incorrecte ou un montage non pris en charge peut invalider le SLA.
2. **Signaler les incidents rapidement** — Utilisez les canaux de support officiels (consultez [Déclarer un incident et en assurer le suivi](../3.10_incident_followup/guide.fr-fr.md)).
3. **Accepter les maintenances planifiées** — OVHcloud peut effectuer des fenêtres de maintenance. L'indisponibilité durant les maintenances annoncées est généralement exclue du calcul du SLA.
4. **Utiliser une architecture prise en charge** — Les paliers SLA supérieurs nécessitent des connexions redondantes. Une connexion unique ne peut prétendre au SLA de 99,99 %.

## Recours et avoirs de service

Si OVHcloud ne respecte pas les objectifs SLA, vous pouvez avoir droit à :

- **Des avoirs de service** — Un pourcentage de votre redevance mensuelle crédité sur votre compte, proportionnel à l'indisponibilité constatée.
- **Un support prioritaire** — Un traitement accéléré pour les incidents non résolus.

Le calcul exact des avoirs et la procédure de réclamation sont décrits dans les conditions particulières OVHcloud Connect, disponibles dans votre contrat ou sur le site web d'OVHcloud.

## Suivi de la conformité au SLA

Pour suivre le respect du SLA par votre connexion :

- Utilisez l'**espace client OVHcloud** pour consulter le statut de la connexion, la disponibilité et les métriques historiques.
- Mettez en place des **alertes** pour les événements de coupure de lien, les chutes de session BGP et les pics de latence.
- Utilisez l'**API OVHcloud** pour interroger le statut de manière programmatique et l'intégrer à vos outils de supervision.

Consultez [Superviser votre OVHcloud Connect](../3.9_monitor/guide.fr-fr.md) pour des conseils détaillés sur la supervision.

## Et ensuite ?

- Consultez [Prérequis et limitations](../1.8_prerequisites_limitations/guide.fr-fr.md)
- Mettez en place la [supervision](../3.9_monitor/guide.fr-fr.md) de votre connexion
- Apprenez à [déclarer un incident et en assurer le suivi](../3.10_incident_followup/guide.fr-fr.md)

## Aller plus loin

Pour bénéficier d'une formation ou d'une assistance technique dans la mise en œuvre de nos solutions, contactez votre conseiller commercial ou cliquez sur [ce lien](/links/professional-services) afin d'obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l'équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
