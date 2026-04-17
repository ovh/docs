---
title: "Envoi de SMS aux États-Unis"
excerpt: "Découvrez comment respecter les règles spécifiques pour envoyer des SMS aux États-Unis et les appliquer depuis votre espace client OVHcloud"
updated: 2022-08-05
---

## Objectif

L'envoi de SMS aux États-Unis est soumis à des règles spécifiques. Ce guide vous les explique et vous montre comment les appliquer.

## Prérequis

- Disposer d'un compte SMS OVHcloud avec des crédits SMS.
- Être connecté aux [API OVHcloud](/links/api) (uniquement pour la méthode d'envoi via API).

<!-- CP-NAV-START:telecom-sms -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [SMS](/links/control-panel/telecom-sms)
- **Pour accéder à vos services :** `Télécom`{.action} > `SMS`{.action} > Sélectionnez votre compte SMS

---
<!-- CP-NAV-END:telecom-sms -->

![espace client Telecom SMS](/pages/assets/screens/control_panel/product-selection/telecom/tpl-telecom-03-fr-sms.png){.thumbnail}

## En pratique

### Étape 1 : Connaître les restrictions

En accord avec l'autorité de régulation des SMS des États-Unis (Neustar), l'envoi de SMS vers cette destination doit faire l'objet d'une validation préalable par nos services d'un modèle de message.
Seuls les messages d’alerte et de double authentification sont autorisés et aucun modèle de SMS publicitaire ne sera accepté. Une fois votre modèle validé, l’envoi se fera de la même manière que pour les autres destinations.

Vous pouvez demander la validation de plusieurs modèles de messages.

> [!primary]
>
> La validation des modèles de messages est gratuite et effectuée par les équipes de OVHcloud sous un à deux jours ouvrés.
>

### Étape 2 : Ajouter un modèle

#### 2.1 Depuis l'espace client

<!-- CP-STEPS-START:add-template-cp -->
Cliquez sur l'onglet `Message et campagne`{.action} puis sur `Gestion des SMS`{.action}.

Enfin, cliquez sur `Gérer les modèles`{.action}.

![SMS aux États-Unis](images/smstousa1.png){.thumbnail}

Sur la page qui s'affiche alors, cliquez sur `Action`{.action} puis sur `Ajouter`{.action}.

![SMS aux États-Unis](images/smstousa2.png){.thumbnail}

Une pop-up apparaît avec les champs à remplir.

![SMS aux États-Unis](images/smstousa3.png){.thumbnail}

| Champ       | Description                                                                                                      |
|-------------|------------------------------------------------------------------------------------------------------------------|
| Nom         | Nom du template                                                                                                  |
| Activité    | Sélectionnez le type de modèle :<br>- Alerte<br>- Authentification<br>- Système de traitement transactionnel |
| Description | Description du modèle                                                                                            |
| Modèle      | Écrire le modèle comprenant la variable entre #                                                                  |

<!-- CP-STEPS-END:add-template-cp -->

#### 2.2 Via les API

> [!success]
> Si vous n'êtes pas familier avec l'utilisation de l'API OVHcloud, consultez notre guide « [Premiers pas avec les API OVHcloud](/pages/manage_and_operate/api/first-steps) ».

Connectez-vous sur [api.ovh.com](/links/api) puis utilisez l’API suivante :

> [!api]
>
> @api {v1} /sms POST /sms/{serviceName}/templatesControl
>

![SMS aux États-Unis](images/smstousa4.png){.thumbnail}

Remplissez les champs requis et cliquez sur `Execute`{.action}.

#### Exemples de modèles

Vous trouverez ci-dessous 2 exemples de modèles de messages à destination des États-Unis.

- Exemple de template d'authentification :

```bash
Your security code is #CODE#, have a good day
```

- Exemple de template d'alerte :

```bash
Our monitoring system detected your server #SERVER# doesn't respond to ping requests
```

### Étape 3 : Analyser les retours

Une fois votre modèle de message créé et validé, l'envoi d'un SMS génère une comparaison automatique de son contenu avec vos modèles. Si la comparaison est positive, le SMS est envoyé de manière identique à un envoi vers une autre destination.

Si vous envoyez un SMS aux États-Unis sans avoir au préalable créé et validé un modèle, le SMS sera refusé et un Premium Tracking Transaction Code (PTT code) à 1999 vous sera adressé. Ce code correspond au message d'erreur « No templates available » (pas de modèle de messages créé).

Vous pouvez consulter les autres codes de retour possibles sur le guide « [Tout savoir sur les utilisateurs SMS](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_utilisateurs_sms) ».

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).
