---
title: 'Plage de maintenance du cluster'
slug: plage-de-maintenance
excerpt: 'Prenez le contrôle des maintenances appliquées à votre cluster'
section: 'Démarrer avec votre cluster PostgreSQL'
---

## Définition

La plage de maintenance est une période pendant laquelle les équipes d'OVHcloud ont la possibilité de réaliser des actions techniques sur votre cluster de base de données.

Voici une liste (non exhaustive) d'actions techniques susceptibles d’être réalisées pendant les plages de maintenances :

- mises à jour mineures du système d'exploitation ou des logiciels connexes.
- mises à jour de sécurité.
- montée de versions mineures de PostgreSQL.
- remplacement de matériels défectueux.

> [!primary]
> Ne sont pas inclus dans les plages de maintenance les opérations exceptionnelles (non programmables ou non prévisibles) nécessaires à la sécurité ou l’intégrité de votre cluster.
>

Au sein d'une même plage de maintenance, plusieurs actions techniques peuvent être effectuées de manière automatisée par les équipes d'OVHcloud. Plus cette plage de maintenance est longue, plus nos équipes peuvent planifier d'opérations.
Nous recommandons une plage de 2 heures minimum.

> [!primary]
> Si une action de maintenance est en cours et que son exécution dépasse le temps défini dans la plage, celle-ci ne sera pas interrompue afin de préserver la cohérence du système et des données.
>
> En revanche, les actions suivantes qui étaient programmées seront reportées à la prochaine occurrence de la maintenance.
>

## Editer votre plage de maintenance

Une plage par défaut vous est proposée mais vous pouvez la modifier depuis votre espace client dans la rubrique `Settings`{.action}.

La plage définie affectera l'ensemble des nœuds du cluster (dont celui de sauvegarde).
