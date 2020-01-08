---
title: 'Créer vos bases et utilisateurs à l''intérieur de votre cluster'
slug: creer-utilisateur-db
excerpt: 'Comment créer vos bases et utilisateurs à l''intérieur de votre cluster'
section: 'Démarrer avec votre cluster PostgreSQL'
---

**Dernière mise à jour le 26/12/2019**

## Objectif

Ce guide vous explique comment créer vos premières bases de données et utilisateurs dans votre cluster Enteprise Cloud Databases pour PostgreSQL.
Pour une documentation exhaustive, référez-vous à la [documentation technique officielle de PostgreSQL](https://www.postgresql.org/docs/){.external}.


## Pré-requis
- Disposer d'un cluster Enterprise Cloud Databases pour PostgreSQL.
- Avoir configuré le mot de passe de votre utilisateur administrateur.
- Avoir configuré au moins une règle de sécurité.


## Rappel

Vous possédez le compte administrateur PostgreSQL **postgres** qui a la possibilité de réaliser tous types d'opérations sur la base de données.

> [!primary]
> Il est impératif de ne pas modifier les configurations techniques mises en place par OVHcloud au risque de dégrader ou d’empêcher le bon fonctionnement de votre cluster.
>


## En pratique

### Étape 1 : Installation d'un client PostgreSQL

Sur un système d'exploitation Unix/Linux, il convient d'installer le paquet postgresql-client pour se connecter en ligne de commande. Référez-vous à la documentation officielle de votre système d'exploitation.

Sur Microsoft Windows, il existe une multitude de solutions en lignes de commande ou interfaces visuelles (GUI). Elles sont référencées dans la [documentation wiki de PostgreSQL](https://wiki.postgresql.org/wiki/PostgreSQL_Clients){.external}. Choisissez celui qui vous convient le mieux.

La suite des étapes détaille une procédure de connexion par lignes de commande.


### Étape 2 : Connexion au cluster

Dans votre espace client OVHcloud, retrouvez les informations utiles depuis la section `Accueil`{.action} puis `Informations de connexion`{.action}.

Enterprise Cloud Databases vous propose des paramètres de connexion en lecture seule, et en lecture-écriture.
Pour créer des bases de données et utilisateurs, il est nécessaire d'utiliser les paramètres de connexion en lecture-écriture.

Exemples d'informations de connexion en lignes de commandes :

    read-write
        psql -U postgres -h 123456d99ee4102980c2d.prm.clouddb.ovh.net -p 38697 -W --set=sslmode=require

    read-only
        psql -U postgres -h 1234566d99ee4102980c2d.prm.clouddb.ovh.net -p 6713 -W --set=sslmode=require


Copiez les informations de connexion dans votre interface de lignes de commande.
Un mot de passe vous sera demandé, celui de votre administrateur `postgres` préalablement configuré.


### Étape 3 : Création d'utilisateurs

Une fois connecté à votre cluster, vous avez la possibilité de réaliser une multitude d'opérations.
[La documentation officielle de PostgreSQL](https://www.postgresql.org/docs/manuals/){.external} recense et détaille ces cas de figures, par version.

PostgreSQL repose sur un sytème de rôles et d'utilisateurs. Un rôle peut contenir plusieurs utilisateurs et ses capacités peuvent être définies précisément : accès à une base spécifique, en lecture seule ou lecture-écriture, pendant une période limitée, capacité à créer des tables, des utilisateurs, ...


En version 12, voici un exemple basique de ligne de commande créant l'utilisateur `martin` avec le mot de passe `password`.


    postgres=# CREATE ROLE martin NOINHERIT LOGIN PASSWORD 'password';


### Étape 4 : Création de bases de données

De la même manière, voici un exemple basique pour la création de la base de données `mydatabase`, avec l'utilisateur `martin` qui en sera le propriétaire.

    postgres=# CREATE DATABASE mydatabase OWNER username;


Votre utilisateur `martin` pourra ainsi s'y connecter de la manière suivante :

    psql -U martin -h fqdn -p port -W --set=sslmode=require mydatabase


## Aller plus loin

Apprenez à gérer votre cluster PostgreSQL en consultant la [documentation technique d'OVHcloud](../enterprise-cloud-databases/){.external} pour davantage d'informations sur le fonctionnement technique de votre offre managée.
