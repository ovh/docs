---
title: En cas de défaillance d'un noeud
slug: defaillance-noeud
excerpt: Découvrez ce qu'il se passe si le cluster connaît la défaillance de l'un de ses noeuds pendant son fonctionnement
section: Informations techniques
---

## Présentation

Votre cluster est équipé de plusieurs systèmes permettant la haute disponibilité (voir la [documentation technique](../principes-architectures){.external})


## Cas d'usages

Si pour une quelquonque raison un noeud connaît une défaillance, les conséquences dépendent du rôle qu'il avait :

- **sur un noeud replica**

Le répratiteur de charge va detecter que le noeud ne peut plus assurer son role et redirige le trafic sur les autres noeuds qui accepent les requêtes de lecture (primaire inclu)

- **sur le noeud primaire**

Une nouvelle election se met place et la majorite absolue du cluster choisi communément un noeud replica pour le promouvoir en tant que noeud primaire.

- **sur le noeud de sauvegarde**

Si la defaillance intervient sur un noeud de sauvegarde, cela n'a pas de conséquence sur les performances du cluster, cependant, la réalistation des sauvegardes peut être décalée dans le temps.

Une alerte sera automatiquement remontée aux équipes OVH, qui mèneront les investigations et effecutrons les actions nécessaires au retablissement de la sitution nominale.

Si ce nœud portait le rôle lectures/écritures, une bascule nœud va seffectura automatiquement sur un autre membre du cluster (excepté pour le backup).
