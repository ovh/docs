---
title: Configurer le Load Balancer NSX-v Edge
excerpt: Utiliser le service d'équilibrage de charge du NSX-v Edge
updated: 2021-11-29
---

**Dernière mise à jour le 29/11/2021**

## Objectif

La fonctionnalité d'équilibrage de charge NSX permet de répartir la charge du trafic depuis une IP publique ou privée unique vers plusieurs VMs de votre infrastructure.

## Prérequis

- Être contact administrateur de l'infrastructure [Hosted Private Cloud](https://www.ovhcloud.com/fr-ca/enterprise/products/hosted-private-cloud/) afin de recevoir des identifiants de connexion.
- Avoir un identifiant utilisateur actif avec les droits spécifiques pour NSX (créé dans l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc))
- Avoir déployé une [NSX Edge Services Gateway](/pages/cloud/private-cloud/nsx_deploying_edge_gateway)

## En pratique

### Accès à l'interface

Dans l'interface vSphere, rendez-vous dans le tableau de bord `Mise en réseau et sécurité`{.action}.

![Menu](images/en01dash.png){.thumbnail}

Sur la gauche de votre écran, naviguez vers `Dispositifs NSX Edge`{.action} puis cliquez sur le dispositif à paramétrer.

![NSX](images/en02nsx.png){.thumbnail}

L'onglet `Équilibrage de charge` donne le statut du service et ses fonctions de base.

### Configuration globale

Allez dans `Configuration globale`{.action} puis cliquez sur `Modifier`{.action}.

![Global](images/en03edit.png){.thumbnail}

Activez les options nécessaires :

- Équilibrage de charge : service global.
- Accélération : activée, le moteur d'équilibrage fonctionne sur la couche 4 (plus rapide) contre la couche 7 si désactivée. 
- Journalisation : capture les logs pour le service (niveau de journalisation personnalisable).

Cliquez sur `Sauvegarder`{.action}.

![Global](images/en04conf.png){.thumbnail}

Le service est maintenant actif.

#### Surveillance des services

La surveillance d'un service définit les paramètres de contrôle pour un type de trafic réseau. Lorsque la surveillance d'un service est associée à un pool, les membres sont monitorés en fonction des paramètres de cette surveillance.

Par défaut, trois services sont monitorés par NSX Edge :

- TCP
- HTTP
- HTTPS

Dans `Surveillance des services`{.action} cliquez sur `+ Ajouter`{.action}.     

![Monitor](images/en07service.png){.thumbnail}

Nommez et choisissez le type de service. Vous pouvez également personnaliser tous les autres paramètres.

Cliquez sur `Ajouter`{.action}.

![Monitor](images/en08monitor.png){.thumbnail}

Le service est désormais surveillé.

#### Profils d'application

Un profil d'application définit comment diriger un type particulier de trafic réseau. Après avoir configuré un profil, vous l'associerez à un serveur virtuel.

Dans `Profils d'application`{.action}, cliquez sur `+ Ajouter`{.action}.         

![Profiles](images/en06app.png){.thumbnail}

Choisissez le type et nommez le profil. 

Configurez les paramètres en fonction du type sélectionné.

Notez les deux paramètres suivants :

- La persistance garde les données de session attachées à un cookie ou à l'adresse IP d'origine.
- Insérer l'en-tête HTTP X-Forwarded-For garde l'IP d'origine des connections client qui traversent l'équilibreur de charge.

Cliquez sur `Ajouter`{.action}.

![Profiles](images/en06profile.png){.thumbnail}

Le profil est alors disponible.

#### Pools

Un pool de serveurs traite la charge distribuée par l'équilibreur de charge et est associé à une surveillance de service pour son monitoring.

Dans `Pools`{.action}, cliquez sur `+ Ajouter`{.action}.     

![Pools](images/en09pool.png){.thumbnail}

Nommez le pool.

Selectionnez l'Algorithme à appliquer :

- **IP-HASH** sélectionne un serveur en fonction d'un hachage de l'adresse IP source et du poids total de tous les serveurs en cours d'exécution.
- **LEASTCONN** répartit les demandes clients aux serveurs en fonction du nombre de connexions déjà actives sur ce dernier.
- **ROUND_ROBIN** utilise chaque serveur à tour de rôle en fonction du poids attribué.
- **URI** hashe la partie gauche de l'URI et divise par le poids total des serveurs en cours d'exécution. Le résultat désigne quel serveur reçoit la requête. Cela garantit qu'une URI est toujours dirigée vers le même serveur s'il fonctionne.
- **HTTPHEADER** regarde l'en-tête HTTP dans chaque requête.
- **URL** regarde l'argument dans la chaîne de requête de chaque requête HTTP GET.

Choisissez le service à surveiller.

> [!primary]
>
> Utiliser le mode Transparent rend l'addresse IP client visible aux serveurs back-end.

![Pools](images/en10genpool.png){.thumbnail}

Dans l'onglet `Membres`{.action}, cliquez sur`+ Ajouter`{.action} pour ajouter les serveurs à utiliser.

Cliquez sur `Ajouter`{.action}.

![Pools](images/en11members.png){.thumbnail}

Votre pool est alors défini.

#### Serveurs virtuels

Un serveur virtuel est une interface interne ou externe de la NSX Edge utilisée pour rediriger le trafic.

Dans `Serveurs virtuels`{.action} cliquez sur `+ Ajouter`{.action}.     

![Virtual](images/en11virtual.png){.thumbnail}

Remplissez les champs avec les objets précédemment crées ou déjà existants.

Entrez l'adresse IP à rediriger manuellement ou cliquez sur `Sélectionner une addresse IP`{.action}.

![Virtual](images/en12serv.png){.thumbnail}

Choisissez la vNIC etl'IP.

Cliquez sur `OK`{.action} puis sur `Ajouter`{.action}.

![Virtual](images/en13IP.png){.thumbnail}

Votre serveur virtuel est désormais actif.

#### Règles d'application

Une règle d'application est un script appliqué au serveur utilisant la syntaxe HAProxy pour manipuler le trafic.

Dans `Règles d'application`{.action}, cliquez sur `+ Ajouter`{.action}.     

![Rules](images/en14app.png){.thumbnail}

Nommez la règle et copiez votre script.   

Cliquez sur `Ajouter`{.action}.

![Rules](images/en15rule.png){.thumbnail}

Vous pouvez appliquer la règle dans l'onglet `Mise en réseau` de votre serveur virtuel.

L'équilibrage de charge est désormais paramètré.

![Done](images/en05enabled.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
