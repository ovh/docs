---
title: 'Configurer son compte Exchange sur Thunderbird pour Windows'
slug: exchange-configuration-de-thunderbird
legacy_guide_number: 1278
excerpt: 'Retrouvez ici la procédure d’ajout d’un compte Exchange pour Thunderbird'
section: 'Configuration Exchange sur ordinateur'
order: 6
---

**Dernière mise à jour le 17/01/2020**

## Objectif

Les comptes Exchange peuvent être configurés sur différents logiciels de messagerie compatibles. Thunderbird n'est pas compatible avec le protocole Exchange MAPI, mais la configuration peut se faire en POP ou en IMAP. Dans notre exemple, un compte Hosted Exchange est configuré en IMAP.

**Apprenez à configurer un compte Exchange sur le logiciel de messagerie Thunderbird sur Windows.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de 
> contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section [Aller plus loin](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-configuration-de-thunderbird/#aller-plus-loin_1)
> de ce guide.
> 

## Prérequis

- Disposer d'une [offre Exchange](https://www.ovh.com/fr/emails/){.external}.
- Disposer de l'application Thunderbird installée sur votre appareil.
- Disposer des identifiants relatifs à l'adresse e-mail que vous souhaitez paramétrer.

## En pratique

### Étape 1 : démarrage
Rendez-vous dans l'application "Thunderbird" installée sur votre poste.

Il sera nécessaire d'ajouter un nouveau compte via le menu ci-dessous. Sélectionnez `Courrier électronique`{.action} pour continuer.

![emails](images/configuration-thunderbird-exchange-step1.png){.thumbnail}


### Étape 2 : création du compte
Renseignez les champs affichés :

- Vos nom et prénom : *Renseignez ici le nom d'affichage désiré.*
- Adresse électronique : *Votre adresse e-mail complète.*
- Mot de passe : *Le mot de passe défini dans votre [espace client](https://www.ovh.com/manager/web/login.html){.external} pour le compte Exchange.*
- Retenir le mot de passe : *Vous devez cocher cette option.*

Cliquez sur `Configuration manuelle`{.action} pour poursuivre les étapes d'installation.


![emails](images/configuration-thunderbird-exchange-step2.png){.thumbnail}


### Étape 3 : configuration manuelle

> [!primary]
>
> Dans notre exemple, nous utilisons la mention serveur : ex**X**.mail.ovh.net.
> 
> Retrouvez l'information de votre serveur dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, dans la rubrique `Web`{.action} puis `Microsoft`{.action}
>  dans la colonne de gauche. Sélectionnez `Exchange`{.action} puis votre plateforme. Le serveur est visible dans le cadre **Connexion** de l'onglet `Informations Générales`{.action}
> 

Après avoir cliqué sur `Configuration manuelle`{.action}, vérifiez que ces éléments sont correctement renseignés :

- Serveur entrant : **IMAP** 
- Le nom d'hôte du serveur : *Indiquez le serveur sur lequel est hébergé votre service Exchange.*
- Le port :  **993**
- La méthode de chiffrement :   **SSL**
- L'authentification :  **Mot de passe normal**
- Serveur sortant : **SMTP**
- Le nom d'hôte du serveur : *Indiquez le serveur sur lequel est hébergé votre service Exchange.* 
- Le port :  **587** 
- La méthode de chiffrement :  **STARTTLS** 
- L'authentification :  **Mot de passe normal** 
- Identifiant : *Votre adresse e-mail complète.*

> [!primary]
>
> Pour les comptes de type [Private Exchange](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-premiers-pas-avec-un-serveur-private/){.external}, le serveur à renseigner sera celui choisi lors de la commande.
>

Si l'authentification **Mot de passe normal** n'est pas fonctionnelle, il vous est aussi possible de renseigner **NTLM**.

Cliquez sur `Terminé`{.action} pour finaliser l'installation.


![emails](images/configuration-thunderbird-exchange-step3.png){.thumbnail}


### Étape 4 : finalisation

Votre compte Exchange est à présent correctement configuré en IMAP, vous pouvez dès à présent envoyer et recevoir vos messages.

OVHcloud propose également une application web disposant de [fonctions collaboratives](https://www.ovh.com/fr/emails/){.external}. Celle-ci est accessible à l’adresse <https://www.ovh.com/fr/mail/>. Vous pouvez vous y connecter grâce aux identifiants de votre adresse e-mail.


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.