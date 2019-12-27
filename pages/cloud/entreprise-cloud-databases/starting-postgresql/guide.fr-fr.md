---
title: 'Démarrer avec votre cluster PostgreSQL'
slug: debuter-avec-postgresql
excerpt: 'Découvrez comment commander, sécuriser et vous connecter à votre instance PostgreSQL'
section: 'Démarrer avec votre cluster PostgreSQL'
order: 2
---

**Dernière mise à jour le 20/12/2019**

## Objectif

L'offre Enterprise Cloud Databases vous propose des moteurs de bases de données tels que PostgreSQL sur un cluster dédié.
Le cluster est managé par OVHcloud mais vous avez le rôle **superuser** sur votre cluster.
Ce guide va vous présenter toutes les étapes permettant de créer votre cluster PostgreSQL et de tester la connexion.

## Pré-requis
- Disposer d'un compte client OVHcloud.
- Pouvoir établir une connexion depuis le réseau public (Internet).
- Avoir un client PostgreSQL installé sur le poste depuis lequel vous souhaitez vous connecter à votre base de données.

## Présentation
La composition initiale d'un cluster :

- un nœud principal en lecture/écriture.
- un nœud de réplication en lecture seule.
- un nœud de sauvegarde de données (backup) qui n’accepte pas de connexion cliente.

Consultez la [documentation d'architecture technique](https://www.postgresql.org/docs/){.external} pour avoir davantage d'informations sur le fonctionnement technique de votre offre managée.

## En pratique

### Étape 1 : commander votre cluster

Depuis votre espace client, rendez-vous successivement sur `Server`{.action} puis `Enterprise Cloud Databases`{.action} et enfin cliquez sur `Commander un cluster`{.action}.

Vous serez amenés à choisir différents paramètres pour créer votre cluster :

- La version de PostgreSQL que vous souhaitez installer.
- La région.
- Les caractéristiques techniques de votre offre (parmi 4 configurations possibles : cluster16, cluster32, cluster64, cluster128).
- La possibilité d'ajouter des nœuds supplémentaires à votre cluster (de caracteristiques techniques équivalentes à celles du cluster).
- La période d'engagement.
- La fréquence de paiement.

### Étape 2 : mettre à jour votre utilisateur

Une fois votre commande réalisée, votre cluster apparaitra dans votre espace client.
Par défaut, OVHcloud vous crée un utilisateur avec les droits d'administration "**superuser**". Vous devez définir son mot de passe avant la première connexion.

### Étape 3 : configurer un groupe de sécurité

L'accès à votre instance PostgreSQL étant exposé sur le réseau public, il est nécessaire de filtrer les accès par un groupe de sécurité. Celui-ci peut comprendre des IP seules ou des blocs d'adresses IP.

Dans la vue de votre service sur l'espace client, allez dans l'onglet `Paramètres`{.action} puis dans la section `Groupe(s) de sécurité`{.action}. Cliquez sur `Créer un groupe`{.action}.

Donnez un nom à votre groupe puis renseignez une ou plusieurs adresses IP autorisées à se connecter au cluster.

```
Exemple :
181.36.14.xxx/32
83.4.121.xxx/32
```

### Étape 4 : vous connecter à votre cluter

OVHcloud vous fournit deux points d'entrée uniques vers votre cluster, peu importe le nombre de nœuds :

- point de connexion en lecture-écriture.
- point de connexion en lecture seule.

Les paramètres de connexion ainsi que les différentes méthodes disponibles pour vous connecter sont disponibles dans votre espace client.

Rendez-vous dans l'onglet `Accueil`{.action} puis dans la section `Informations de connexion`{.action}.

Voici des exemples de chaînes de connexions :

```
read-write
postgresql://postgres:*******@5f771a6d99ee4102980c2d.prm.clouddb.ovh.net:38697/postgres?sslmode-require
psql -U postgres -h 5f771a6d99ee4102980c2d.prm.clouddb.ovh.net -p 38697 -W --set=sslmode=require
```
   
```
read-only
postgresql://postgres:*******@5f771a6d99ee4102980c2d.prm.clouddb.ovh.net:6713/postgres?sslmode=require
psql -U postgres -h 5f771a6d99ee4102980c2d.prm.clouddb.ovh.net -p 6713 -W --set=sslmode=require
```

### Étape 5 : créer les bases et les utilisateurs

Une fois connecté sur votre cluster vous pouvez y créer des bases et des utilisateurs supplémentaires.
Consultez à cet effet la [https://www.postgresql.org/docs/](documentation PostgreSQL){.external} documentation PostgreSQL officielle pour la création de bases et d'utilisateurs.


## Aller plus loin

Apprenez à gérer votre cluster PostgreSQL en consultant la [documentation technique d'OVHcloud](../enterprise-cloud-databases/){.external} pour davantage d'informations sur le fonctionnement technique de votre offre managée.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>