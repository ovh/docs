---
title: Configuration automatique d’un compte Exchange sous Outlook
legacy_guide_number: 1245
slug: exchange-configuration-automatique-sous-outlook
excerpt: Retrouvez ici la procedure d’ajout d’un compte Exchange de maniere automatique depuis outlook
section: Configuration client de messagerie Exchange
---

Avant de réaliser ces manipulations, assurez-vous que le champ SRV de votre nom de domaine est correctement configuré. Cliquez [ici](https://www.ovh.com/fr/emails/hosted-exchange/guides/){.external} pour retrouver nos différents guides Outlook 2007 n'est pas compatible avec Exchange 2016


> [!warning]
>
> OVH met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.
> 

## Mise en place

### Étape 1 &#58; Panneau de configuration
Les manipulations réalisées sont effectuées sur un poste équipé du système d'exploitation Windows.

Pour commencer, vous devez vous rendre dans le panneau de configuration de votre ordinateur.

Cliquez sur l'onglet "Courrier" ou  "Courrier (32-bit)" qui se trouve généralement à cet endroit ou dans les comptes utilisateurs. A noter qu'il vous est aussi possible d'y accéder depuis Outlook directement.

Cliquez ensuite sur "Comptes de messagerie"

Dans le panneau de configuration, pensez à sélectionner "afficher les petites icônes" afin de faire apparaître les icônes "Courrier" ou "Courrier (32-bit)"

Attention, pour Outlook 2007 la configuration automatique sera fonctionnelle uniquement si vous disposez au minimum de la version SP1 d'Outlook 2007.

Il est possible que le champ SRV ne soit pas reconnu sur la version 2007 du logiciel Outlook.

Un correctif est disponible sur le site de Microsoft en cliquant [ici](http://support.microsoft.com/kb/939184){.external}.


![emails](images/992.png){.thumbnail}


### Étape 2 &#58; Ajout du nouveau compte e-mail
Il faudra ensuite sélectionner le bouton "Nouveau" afin d'ajouter notre compte e-mail Exchange.


![emails](images/993.png){.thumbnail}


### Étape 3 &#58; Compte de messagerie
Sélectionnez "Compte de messagerie" puis cliquez sur "Suivant".


![emails](images/994.png){.thumbnail}


### Étape 4 &#58; Configuration de compte automatique
Nom : le nom d'affichage dans Outlook Adresse de messagerie : votre adresse e-mail complète. Mot de passe : le mot de passe choisi lors de la création de votre compte Exchange via votre [espace client](https://www.ovh.com/manager/web/login.html){.external}.

Cliquez ensuite sur "Suivant".


![emails](images/995.png){.thumbnail}


### Étape 5 &#58; Validation autodiscover
Vous devez autoriser l'autodiscover à configurer les paramètres serveurs de votre compte Exchange.

Cliquez sur "Autoriser".


![emails](images/997.png){.thumbnail}


### Étape 6 &#58; Finalisation installation
Votre compte doit à présent être configuré avec succès.

Lancez votre logiciel Outlook. Votre identifiant (Compte e-mail Exchange) ainsi que votre mot de passe vous sont demandés.

Une première synchronisation sera initiée avec les informations présentes sur le serveur Exchange une fois votre logiciel Outlook démarré.


![emails](images/999.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.