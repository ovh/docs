---
title: Créer vos bases et utilisateurs à l'interieur de votre cluster
slug: creer-utilisateur-db
excerpt: Comment créer vos bases et utilisateurs à l'interieur de votre cluster
section: Démarrer avec votre cluster PostgreSQL
---



## Pour commencer

Cette documentation fournit les étapes à suivre afin de créer votre première base de données et votre premier utilisateur.

*Note : référez-vous à la [documentation technique de PostgreSQL](https://www.postgresql.org/docs/){.external} pour de plus amples informations.*


## Interagir avec votre cluster en ligne de commandes

- **Étape 1 - Connectez-vous à votre cluster avec votre super-utilisateur**

L'espace client vous affichera les informations utiles depuis la section `Overview`{.action} puis `Connection Information`{.action}

Exemples de chaînes de connexions :

    read-write
        postgresql://postgres:************@5f771a6d99ee4102980c2d.prm.clouddb.ovh.net:38697/postgres?sslmode-require
        psql -U postgres -h 5f771a6d99ee4102980c2d.prm.clouddb.ovh.net -p 38697 -W --set=sslmode=require

    read-only
        postgresql://postgres:************@5f771a6d99ee4102980c2d.prm.clouddb.ovh.net:6713/postgres?sslmode=require
        psql -U postgres -h 5f771a6d99ee4102980c2d.prm.clouddb.ovh.net -p 6713 -W --set=sslmode=require


- **Étape 2 - Créez votre utilisateur**

Depuis le shell PostgreSQL

    postgres=# CREATE ROLE username NOINHERIT LOGIN PASSWORD 'password';


- **Étape 3 - Créez votre base de données**

Depuis le shell PostgreSQL

    postgres=# CREATE DATABASE name OWNER username;

- **Étape 4 - Accédez à votre base de données avec votre nouvel utilisateur dédié**

    psql -U username -h fqdn -p port -W --set=sslmode=require databasename


## Rappel

Vous possédez le compte administrateur PostgreSQL **postgres** qui à la possibilité de réaliser tous types d'opérations sur la base de données.

> [!primary]
> Il est impératif de ne pas modifier les configurations techniques mises en place par OVH au risque de dégrader ou d’empêcher le bon fonctionnement de votre cluster.
>
