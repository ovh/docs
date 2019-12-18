---
title: 'Envoi de SMS aux Etats-Unis'
slug: envoi_de_sms_aux_etats-unis
excerpt: 'Découvrez comment envoyer des SMS aux États-Unis'
legacy_guide_number: g1754
section: 'Envoyer des SMS'
---

**Dernière mise à jour le 17/12/2019**

## Objectif

L'envoi de SMS aux Etats-Unis est soumis à des règles spécifiques. Ce guide a pour but de vous les expliquer et vous montrer comment les appliquer afin de pouvoir envoyer vos SMS vers cette destination.

## Prérequis

* Disposer d’un compte SMS OVHcloud avec des crédits SMS.
* Avoir accès à votre compte OVHcloud.

## En pratique

### Étape 1 : connaître les restrictions

En accord avec l’autorité de régulation des SMS des Etats-Unis (Neustar), l'envoi de SMS vers cette destination doit faire l'objet d'une validation préalable par nos services d'un modèle de message.
Seuls les messages d’alerte et de double authentification sont autorisés et aucun modèle de SMS publicitaire ne sera accepté. Une fois votre modèle validé, l’envoi se fera de la même manière que pour les autres destinations.

Vous pouvez demander la validation de plusieurs modèles de messages.

> [!primary]
>
La validation des modèles de messages est gratuite et effectuée par les équipes de OVHcloud sous un à deux jours ouvrés.
>


### Étape 2 : Ajouter un modèle

#### 2.1 Depuis l'espace client

Connectez-vous à votre [espace client OVH](https://www.ovhtelecom.fr/manager/#/){.external} puis sélectionnez `Télécom`{.action} (1). Cliquez ensuite sur `SMS`{.action} à gauche et choisissez votre `compte SMS`{.action} (2). Cliquez sur l'onglet `SMS`{.action} (3) et enfin sur `Gérer les modèles`{.action} (4).

![SMS aux Etats-Unis](images/smstousa1.png){.thumbnail}

Sur la page qui s'affiche alors, cliquez sur `Action`{.action} puis sur `Ajouter`{.action}.

![SMS aux Etats-Unis](images/smstousa2.png){.thumbnail}

Une pop-up apparaît avec les champs à remplir.

![SMS aux Etats-Unis](images/smstousa3.png){.thumbnail}


| Champ       | Description                                                                                                      |
|-------------|------------------------------------------------------------------------------------------------------------------|
| Nom         | Nom du template                                                                                                  |
| Activité    | Sélectionnez le type de modèle :<br>- Alerte<br>- Authentification<br>- Système de traitement transactionnel |
| Description | Description du modèle                                                                                            |
| Modèle      | Écrire le modèle comprenant la variable entre #                                                                  |


#### 2.2 Via les API

Connectez-vous sur [api.ovh.com](https://api.ovh.com/) puis utilisez l’API suivante :

> [!api]
>
> @api {post} /sms/{serviceName}/templatesControl
>


![SMS aux Etats-Unis](images/smstousa4.png){.thumbnail}

Remplissez les champs requis et cliquez sur `Execute`{.action}

#### Exemples de modèles

Vous trouverez ci dessous 2 exemples de modèles de messages à destination des Etats-Unis.

- Exemple de template d'authentification :

```
Your security code is #CODE#, have a good day
```

- Exemple de template d'alerte :

```
Our monitoring system detected your server #SERVER# doesn't respond to ping requests
```
### Étape 3 : analyser les retours

Une fois votre modèle de message créé et validé, l'envoi d'un SMS génère une comparaison automatique de son contenu avec vos modèles. Si la comparaison est positive, le SMS est envoyé de manière identique à un envoi vers une autre destination.

Si vous envoyez un SMS aux Etats-Unis sans avoir au préalable créé et validé un modèle, le SMS sera refusé et un Premium Tracking Transaction Code (PTT code) à 1999 vous sera adressé. Ce code correspond au message d'erreur « No templates available » (pas de modèle de messages créé).

Vous pouvez consulter les autres codes de retour possibles sur [ce guide](https://docs.ovh.com/fr/sms/tout_savoir_sur_les_utilisateurs_sms/).


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
