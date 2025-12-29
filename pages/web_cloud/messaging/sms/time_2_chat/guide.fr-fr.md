---
title: Time2Chat, la messagerie conversationnelle par SMS pour les entreprises
excerpt: Lancez vos premières conversations SMS bidirectionnelles avec un numéro dédié en 09
updated: 2025-11-27
---

## Objectif

Time2Chat est une solution de messagerie conversationnelle par SMS. Elle permet à une entreprise d’envoyer et de recevoir des messages depuis un numéro unique commençant par « 09 », accessible partout en France métropolitaine.

Ce guide présente le principe de Time2Chat, ses avantages, les conditions d’accès et les premières étapes d’utilisation.

## Prérequis

- Disposer d’un [compte SMS OVHcloud](/links/telecom/sms).
- Être connecté à [l’espace client OVHcloud](/links/manager), partie `Télécom`{.action} puis `SMS`{.action}.

## En pratique

### Informations générales sur Time2Chat

Time2Chat est une solution de messagerie conversationnelle bidirectionnelle (marque ↔ client) permettant à une entreprise et à ses clients d’échanger par SMS en France.

Contrairement à un envoi de SMS classique, le service repose sur un numéro dédié commençant par « 09 », attribué spécifiquement à chaque entreprise. Ce numéro peut être utilisé à la fois pour envoyer et recevoir des SMS.

Une « session » de conversation débute dès qu’un premier message est envoyé — qu’il provienne de la marque ou du client. À partir de cet instant, la session reste active pendant 24 heures. Durant ce laps de temps, les deux interlocuteurs peuvent échanger un nombre illimité de SMS via le même canal, sous réserve de crédits disponibles côté marque. Une fois la période écoulée, tout nouveau message provenant de la marque ou du client relance automatiquement une nouvelle session de 24 heures.

#### Exemples d’usage

- Prise ou confirmation de rendez-vous.
- Suivi de commande ou notification de livraison.
- Service après-vente et assistance client.
- Enquêtes de satisfaction ou sondages rapides.
- Interaction directe sans application à installer.

#### Avantages pour votre entreprise

- **Canal universel** : Le SMS reste accessible à toute personne disposant d'un forfait de téléphonie mobile.
- **Numéro unique et identifiable** (en « 09 »), renforçant la reconnaissance de marque.
- **Expérience fluide** : Échanges naturels et continus, sans contrainte de format.
- **Conformité** : Respect de la réglementation française sur la messagerie professionnelle.

#### Différences avec l’offre SMS historique

Le service Time2Chat repose sur un modèle conversationnel, différent des envois de SMS classiques :

| Fonctionnalité | SMS classique | Time2Chat |
|----------------|------------------------|-----------|
| Expéditeurs | Numéro court mutualisé permettant la réponse, pouvant changer.<br> Expéditeur alphanumérique. | Numéro dédié en 09. |
| Type d’usage | Envoi unidirectionnel (notification, alerte). | Conversation bidirectionnelle. |
| Gestion des réponses | Réponses ponctuelles sur le numéro court, sans fil de discussion.<br> Pas de réponse possible pour un expéditeur alphanumérique. | Fil de conversation de 24 heures entre la marque et le client. |
| Facturation | 1 SMS envoyé = 1 crédit. | 1 SMS envoyé = 2 crédits. |

> [!primary]
>
> Le client s’engage à utiliser le service Time2Chat de manière équilibrée, en visant un **ratio d’échange proche de 1:1** entre les messages envoyés et reçus.

#### Conditions d'accès

La phase de lancement de Time2Chat est réservée aux clients déjà détenteurs d’un expéditeur SMS de type numéro virtuel (VLN) commençant par « 06 » ou « 07 ».

Nous proposerons prochainement ce service à tous les clients possédant un [compte SMS OVHcloud](/links/telecom/sms).

> [!primary]
>
> Les crédits SMS existants peuvent être utilisés sur Time2Chat.
>
> Vous pouvez également acheter un pack de crédits SMS depuis votre [espace client OVHcloud](/links/manager-telecom), rubrique `Télécom`{.action} puis section `SMS`{.action}. Cliquez sur votre compte SMS puis sur `Créditer mon compte`{.action} depuis l'onglet `Accueil`{.action}.

### Commander un numéro Time2Chat

Connectez-vous à votre [espace client OVHcloud](/links/manager) puis sélectionnez `Télécom`{.action}. Cliquez ensuite sur `SMS`{.action} et sur votre compte SMS. Dans l’onglet `Accueil`{.action}, cliquez sur le bouton `Commander un numéro Time2Chat`{.action}.

![time2chat](images/time2chat_order_number_button.png){.thumbnail}

Dans le formulaire qui s’affiche, remplissez tous les champs puis cliquez sur `Continuer`{.action}.

![time2chat](images/time2chat_order_number_form.png){.thumbnail}

> [!primary]
>
> Les informations saisies pourront être modifiées ultérieurement depuis l’espace client.

Suivez toutes les étapes avant de procéder au paiement.

### Configurer un expéditeur Time2Chat

Une fois votre numéro Time2Chat commandé, cliquez sur l’onglet `Expéditeurs`{.action} de votre compte SMS. Le numéro Time2Chat apparaît automatiquement dans la liste des expéditeurs avec le type « Numéro virtuel ». Pour le configurer, cliquez à droite du numéro sur le bouton `...`{.action} puis sélectionnez `Configurer`{.action}. Vous accédez alors à la page de configuration du SMS conversationnel Time2Chat.

![time2chat](images/time2chat_configuration_number.png){.thumbnail}

Dans cette interface, vous pouvez :

- définir les informations de réponse automatique :
    - Si un client final répond par le mot-clé « contact », il recevra automatiquement un message contenant votre nom commercial, votre numéro de téléphone et votre site web.
    - Si vous ne répondez pas à un message client sous 24 heures, une réponse automatique (par exemple : « Votre message a bien été reçu ») sera envoyée pour indiquer la fin de la conversation.
- compléter les informations KYC (**K**now **Y**our **C**ustomer) : Renseignez la raison sociale, la marque utilisant le service, le cas d’utilisation principal, ainsi que les coordonnées du contact principal (nom et e-mail).

Ces éléments permettent de personnaliser votre numéro Time2Chat et de garantir le bon fonctionnement des échanges bidirectionnels entre votre marque et vos clients.

Dès que le client répond, la **session de 24 heures** démarre. Tous les échanges effectués durant cette période sont décomptés de vos **crédits SMS disponibles**, qu’ils proviennent de votre pack initial ou d’achats complémentaires.

## Aller plus loin

[Gérer les crédits SMS et activer la recharge automatique](/pages/web_cloud/messaging/sms/activer_la_recharge_automatique_du_credit_sms)

[Gérer l’historique des SMS](/pages/web_cloud/messaging/sms/gerer_l_historique_des_sms)

Échangez avec notre [communauté d'utilisateurs](/links/community).