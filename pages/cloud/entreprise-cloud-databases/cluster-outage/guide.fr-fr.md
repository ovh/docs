---
title: 'En cas de défaillance d''un nœud'
slug: defaillance-noeud
excerpt: 'Découvrez ce qu''il se passe si le cluster connaît la défaillance de l''un de ses nœuds pendant son fonctionnement'
section: 'Informations techniques'
---

## Présentation

Votre cluster est équipé de plusieurs systèmes permettant la haute disponibilité (voir la [documentation technique](../principes-architectures){.external})


## Cas d'usages

Si pour une quelquonque raison un nœud connaît une défaillance, les conséquences dépendent du rôle qu'il avait :

- **sur un noeud replica**

Le répartiteur de charge va détecter que le nœud ne peut plus assurer son rôle et redirige le trafic sur les autres nœuds qui acceptent les requêtes de lecture (primaire inclus).

- **sur le noeud primaire**

Une nouvelle élection se met place et la majorité absolue du cluster choisit communément un nœud replica pour le promouvoir en tant que nœud primaire.

- **sur le noeud de sauvegarde**

Si la défaillance intervient sur un nœud de sauvegarde, cela n'a pas de conséquence sur les performances du cluster. Cependant, la réalisation des sauvegardes peut être décalée dans le temps.

Une alerte sera automatiquement remontée aux équipes OVHcloud, qui mèneront les investigations et effectuerons les actions nécessaires au rétablissement de la situation nominale.

Si ce nœud portait le rôle lectures/écritures, une bascule nœud va s'effectuer automatiquement sur un autre membre du cluster (excepté pour le backup).
