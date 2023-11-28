---
title: "Commande d'un certificat SSL gratuit"
universe: cloud
excerpt: Commander un certificat SSL gratuit pour vos services web derrière un Load Balancer
updated: 2022-03-29
---

## Objectif

Le service OVHcloud Load Balancer peut être configuré pour prendre en charge la terminaison SSL.<br>
La terminaison SSL a pour but de déchiffrer le flux chiffré entrant avant de le faire suivre vers le service approprié (serveur web par exemple).<br>
La terminaison SSL a un coût pour le service qui le gère. Plutôt que de laisser vos serveurs la gérer, vous pouvez configurer votre service OVHcloud Load Balancer afin qu'il s'en charge.<br>
Par ailleurs, tous vos certificats sont ainsi centralisés au même endroit et leur maintenance s'en trouve facilitée.

**Découvrez comment commander un certificat SSL gratuit depuis votre espace client OVHcloud ou via l'API OVHcloud.**

## Prérequis

- Posséder une offre [OVHcloud Load balancer](https://www.ovh.com/fr/solutions/load-balancer/) dans votre compte OVHcloud.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## En pratique

### Depuis l'espace client OVHcloud

La première étape est de configurer votre frontend pour gérer la terminaison SSL.

Vous pouvez configurer votre terminaison SSL depuis l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} dans la partie `Bare Metal Cloud`{.action} puis `Load Balancer`{.action}.

Après avoir sélectionné le Load Balancer que vous souhaitez modifier, créez un nouveau frontend ou éditez-en un existant.

Dans l'onglet `Frontends`{.action}, cliquez sur le bouton `Ajouter un frontend`{.action} pour en créer un nouveau.<br>
Une fenêtre d'édition apparait alors, sélectionnez le protocole `HTTPS`.<br>
Renseignez également les champs `Ferme par défaut` ou `Redirection HTTP` dans les paramètres avancés.

![Configuration la terminaison SSL d'un Frontend](images/enable_ssl_terminaison.png){.thumbnail}

Une fois le frontend créé, il vous sera proposé d'`Appliquer la configuration`{.action} pour appliquer vos changements dans la zone concernée.

#### Commander le certificate SSL gratuit

Dans l'onglet `Certificats SSL`{.action}, cliquez sur le bouton `Commander un certificat SSL`{.action} pour en créer un nouveau. Une fenêtre d'édition apparait alors avec un champ `FQDN` à renseigner.

![Ajouter un certificate SSL gratuit](images/add_freecertificate.png){.thumbnail}

#### Suivi de la commande

Vous pourrez suivre votre commande dans l'onglet `Tâches`{.action}. La tâche correspondant à la commande d'un certificat SSL gratuit est nommée `orderFreeCertificate`.

### Depuis l'API OVHcloud

#### Commander le certificate SSL gratuit

Dans l'API, la terminaison SSL est spécifiée par le booléen ssl (n'oubliez pas de renseigner `defaultFarmId` ou `redirectLocation`) :

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/http/frontend
>

Appliquez ensuite les modifications :

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
>

Dans l'API, la commande se fait via l'appel suivant :

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/freeCertificate
>

Pour que la commande se finalise, il faut obligatoirement que le nom de domaine choisi pointe vers votre service OVHcloud Load Balancer.

#### Suivi de la commande

- Retourner la liste des tâches

Vous pouvez spécifier le type d'action `orderFreeCertificate` pour affiner la recherche.

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/task
>

- Retourner le statut d'une tâche en particulier

> [!api]
>
> @api {v1} /ipLoadbalancing GET /ipLoadbalancing/{serviceName}/task/{id}
>

Une fois la commande finie, le certificat SSL est automatiquement installé sur votre service OVHcloud Load Balancer.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
