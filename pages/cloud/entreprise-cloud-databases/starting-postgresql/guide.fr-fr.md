---
title: Démarrer avec votre cluster PostgreSQL
slug: debuter-avec-postgresql
excerpt: Découvrez comment comment commander, sécuriser et vous connecter a votre instance PostgreSQL
section: Démarrer avec votre cluster PostgreSQL
order: 2
---

## Objectifs
Cette offre vous propose une instance PostgreSQL sur un cluster dédié.

Le cluster est managé par OVH mais vous avez le rôle **superuser** sur votre cluster.

Cette documentation va vous présenter toutes les étapes permettant de créer votre cluster PostgreSQL et de tester la connexion.

## Pré-requis
- avoir un compte client OVH
- pouvoir établir une connexion depuis une IP ajoutée dans les groupes de sécurités
- avoir un client PostgreSQL installé sur le poste depuis lequel vous souhaitez vous connecter à votre base de données

## Présentation
Composition d'un cluster :

- un nœud principal en lecture/écriture
- un nœud de réplication en lecture seule
- un nœud de sauvegarde de données (backup) qui n’accepte pas de connexion cliente

Consultez la [documentation d'architecture technique](../principes-architectures){.external} pour avoir davantage d'informations sur le fonctionnement technique de votre offre managée.

## Instructions
- **Étape 1 - commander votre cluster**

Depuis votre espace client, allez dans `Server > Enterprise Cloud Databases > Order a Enterprise Cloud Databases`{.action}.

Vous serez amenés à choisir différents paramètres pour créer votre cluster :

- la version de PostgreSQL que vous souhaitez installer
- la région
- les caractéristiques techniques de votre offre (regroupées en 4 séléctions cluster16, cluster32, cluster64, cluster128)
- la possibilité d'ajouter des nœuds supplémentaires à votre cluster (de caracteristiques techniques équivalentes à celles du cluster)
- la période d'engagement
- la fréquence de paiement



- **Étape 2 - Mettre à jour votre utilisateur**

Par défaut, OVH vous crée un utilisateur avec les droits d'administration "**postgres**". Vous devez définir son mot de passe avant la première connexion.

- **Étape 3 - configurer un groupe de sécurité**

L'accès à votre instance PostgreSQL étant exposé sur le réseau public, il est nécessaire de filtrer les accès par un groupe de sécurité. Celui-ci comprenant des IP seules ou des blocs d'adresses IP.

Dans la vue de votre service sur l'espace client, allez dans l'onglet `Settings > Security Groups`{.action}

Exemples :

    181.36.14.xxx/32
    83.4.121.xxx/32

- **Étape 4 - vous connecter à votre instance**

Vous pouvez vous connecter à votre instance de différentes manières.

L'espace client vous affichera les informations utiles depuis la section `Overview`{.action} puis `Connection Information`{.action}

Exemples de chaînes de connexions :

    read-write
        postgresql://postgres:*******@5f771a6d99ee4102980c2d.prm.clouddb.ovh.net:38697/postgres?sslmode-require
        psql -U postgres -h 5f771a6d99ee4102980c2d.prm.clouddb.ovh.net -p 38697 -W --set=sslmode=require

    read-only
        postgresql://postgres:*******@5f771a6d99ee4102980c2d.prm.clouddb.ovh.net:6713/postgres?sslmode=require
        psql -U postgres -h 5f771a6d99ee4102980c2d.prm.clouddb.ovh.net -p 6713 -W --set=sslmode=require


- **Étape 5 - Création de bases et d'utilisateurs**

Consultez la [https://www.postgresql.org/docs/](documentation PostgreSQL){.external} documentation PostgreSQL pour la création de bases et d'utilisateurs.


## Pour aller plus loin
Apprenez à gérer votre cluster PostgreSQL en consultant la [documentation technique d'OVH](../enterprise-cloud-databases/){.external} pour davantage d'informations sur le fonctionnement technique de votre offre managée.
