---
title: 'Configurer vos groupes de sécurité'
slug: configurer-groupes-securite
excerpt: 'Protéger l''accès à votre cluster au travers de filtres d''accès'
section: 'Démarrer avec votre cluster PostgreSQL'
---

**Dernière mise à jour le 20/12/2019**

## Objectif
Les offres Enterprise Cloud Databases sont compatibles avec n'importe quel service joignable par le réseau public (Internet), tel que l'ensemble des produits cloud OVHcloud, mais également des fournisseurs de cloud tiers, ou encore votre propre architecture.

Afin de sécuriser les accès, il est nécessaire d'autoriser des IPs à ce connecter sur votre cluster.

**Ce guide vous explique comment gérer vos groupes et règles de sécurité.**


## Pré-requis
- Disposer d'un cluster Enterprise Cloud Databases.
- Disposer d'un accès à l'espace client ou à l'API avec des droits suffisants (administrateur ou technique).
- Disposer d'une IPv4 ou plage IPv4 à autoriser.


## En pratique

### Étape 1 : comprendre les mécansimes de sécurité
Votre cluster est un service exposé sur le réseau public,  n'autorisant par défaut aucune connexion extérieure.
Pour des questions de sécurité, OVHcloud vous impose la création de groupes et règles de sécurité pour vous connecter à votre cluster.
Ces groupes et règles de filtrage viennent en complément d'autres mécanismes, tels que des flux sécurisés via TLS ou du chiffrement de vos données.


### Étape 2 : crée ou supprimer un groupe de sécurité
Un groupe de sécurité peut contenir de multiples règles de sécurité. Ils vous permettent de ranger et trier vos règles de sécurité plus facilement.
Pour créer un groupe, rendez-vous dans votre espace client, puis cliquez sur `Paramètres`{.action} puis `Groupes de sécurité`{.action} et enfin `Créer un groupe`{.action}.
Un nom pour votre groupe vous sera demandé.

Une fois créé, vous verrez apparaître votre groupe de sécurité sur cette même page, dans laquel il est possible de modifier le nom de votre groupe ou le supprimer.


### Étape 3: créer ou supprimer une règle de sécurité
Une fois votre groupe de sécurité créé, cliquez sur `...`{.action} puis `Ajouter une règle`{.action}.
Renseignez la règle de sécurité désirée puis validez.


> [!primary]
> Les adresses IP que vous renseignez doivent respecter certaines règles :
>
> - être une IP valide
> - ne pas commencer par 0.0.0.0
> - ne pas être une IP privée ("10.0.0.0/8", "172.16.0.0/12" ou "192.168.0.0/16")
>


> [!primary]
> Attention : vous devez conserver un groupe de sécurité actif contenant au moins une adresse IP valide pour pouvoir accéder à votre cluster.
>


## Aller plus loin

Apprenez à gérer votre cluster PostgreSQL en consultant la [documentation technique d'OVHcloud](../enterprise-cloud-databases/){.external} pour davantage d'informations sur le fonctionnement technique de votre offre managée.


