---
title: Courrier sur Windows 8 - Configuration de l’adresse e-mail
slug: mail-mutualise-guide-configuration-sous-windows-8
legacy_guide_number: 1281
excerpt: Retrouvez ici les informations pour configurer votre adresse e-mail sur Courrier de Windows 8
section: Configuration sur ordinateur
hidden: true
---

Cliquez [ici](http://www.ovh.com/fr/hebergement-web/faq){.external} pour retrouver nos différents guides de configuration e-mail.

*Uniquement la configuration en IMAP sera possible dans l'application Courrier de Windows 8.*


> [!warning]
>
> OVH met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.
> 

## Configuration Protocole Imap
Ce guide ne s'applique pas aux adresses emails Exchange.


### Demarrage
Dans un premier temps, rendez-vous dans l'application "Courrier" de Windows 8 sur l'écran d'accueil de votre ordinateur.

Au premier démarrage, il vous faut indiquer une adresse de messagerie et le mot de passe associé, dans une autre interface que celle présentée ici.

Si vous avez déjà un compte existant, voici l'interface que vous allez voir apparaître.

Placez votre curseur sur la partie de droite, et sélectionnez "Paramètres".


![emails](images/img_1142.jpg){.thumbnail}


### Comptes
Cliquez ensuite sur l'icône "Comptes" afin d'ajouter votre nouveau compte e-mail mutualisé OVH.


![emails](images/img_1143.jpg){.thumbnail}


### Ajouter un compte
On voit que des adresses e-mails sont déjà présentes.

Une fois le compte e-mail ajouté, il vous sera possible, via un clic sur le compte e-mail, d'accéder aux paramètres du compte.

Cliquez sur l'icône "Ajouter un compte" pour continuer.


![emails](images/img_1144.jpg){.thumbnail}


### Type de compte
Vous devez sélectionner le type de compte e-mail à ajouter. Cliquez sur l'icône "Autre compte" pour continuer.


![emails](images/img_1145.jpg){.thumbnail}


### Parametres
Sur cette nouvelle interface, renseignez dans le champ :

"Adresse de messagerie" : L'adresse e-mail mutualisé OVH en entier.

"Mot de passe" : Le mot de passe défini dans [l'espace client](https://www.ovh.com/managerv3){.external} pour ce compte e-mail.

Cliquez sur l'icône "Connecter" pour continuer.


![emails](images/img_1146.jpg){.thumbnail}


### Parametres avances
Dans cette interface, renseignez dans le champ :

"Adresse de messagerie" : L'adresse e-mail mutualisé entière.

"Nom d'utilisateur" : Vous devez renseigner votre adresse e-mail entière.

"Mot de passe" : Le mot de passe défini dans [l'espace client](https://www.ovh.com/managerv3){.external} pour ce compte e-mail.

"Serveur de messagerie entrant (IMAP)" : L'adresse du serveur est donc  **SSL0.OVH.NET** Le  **"Port"**  est   **993** .

"Le serveur entrant requiert SSL" : doit être coché.

"Serveur de messagerie sortant (SMTP)" : L'adresse du serveur est donc  **SSL0.OVH.NET** Le  **"Port"**  est   **465** .

"Le serveur sortant requiert SSL" : doit être coché.

"Le serveur sortant requiert l'authentification" : doit être coché.

"Utiliser les mêmes nom d'utilisateur et mot de passe pour envoyer et recevoir les messages électroniques" : doit être coché.

Cliquez sur l'icône "Connecter" pour continuer.


![emails](images/img_1147.jpg){.thumbnail}



> [!success]
>
> - 
> L'Authentification pour le serveur sortant est un paramétrage
> indispensable afin que l'émission d'email puisse fonctionner sur nos
> serveurs SMTP.
> - 
> Si l'authentification n'est pas activée, un ticket incident Open SMTP
> peut être ouvert vous informant que l'authentification "POP before
> SMTP" n'est pas supportée. Vous devrez impérativement activer l'
> authentification du serveur sortant afin de pouvoir émettre des
> emails.
> 
> 


### Finalisation
Votre compte e-mail est à présent correctement configuré en IMAP.

Voici l'interface d'utilisation des mails.

On aperçoit à droite les paramètres du compte e-mail mutualisé, ([Cf la
partie 3 de ce guide](#configuration_protocole_imap_partie_3_ajouter_un_compte){.external} ).


![emails](images/img_1148.jpg){.thumbnail}


## Rappel des parametres POP - IMAP

### Configuration POP
Voici les informations à retenir pour la configuration d'un compte e-mail **POP** .

Configuration  **POP**  avec sécurisation SSL activée ou désactivée :

Adresse Email : Votre adresse e-mail mutualisée entière. Mot de passe : Le mot de passe que vous avez défini dans [l'espace client](https://www.ovh.com/managerv3/){.external}. Nom d'utilisateur : Votre adresse e-mail mutualisée entière. Serveur entrant : Le serveur de réception des e-mails :  **SSL0.OVH.NET** Port serveur entrant : Le port du serveur entrant :  **995**  ou  **110** Serveur sortant : Le serveur d'envoi des e-mails :  **SSL0.OVH.NET** Port serveur sortant : Le port du serveur sortant :  **465**  ou  **587**

Les ports  **110**  et  **587**  correspondent à la sécurisation SSL désactivée. Les ports  **995**  et  **465**  correspondent à la sécurisation SSL activée.

- Vous devez obligatoirement activer [l'authentification](#configuration_protocole_imap_partie_6_parametres_avances){.external} du serveur sortant SMTP.

|Ports|SSL activé|SSL désactivé|
|---|---|---|
|Entrant|995|110|
|Sortant|465|587|


### Configuration IMAP
Voici les informations à retenir pour la configuration d'un compte e-mail **IMAP** .

Configuration  **IMAP**  avec sécurisation SSL activée ou désactivée :

Adresse Email : Votre adresse e-mail mutualisée entière. Mot de passe : Le mot de passe que vous avez défini dans [l'espace client](https://www.ovh.com/managerv3/){.external}. Nom d'utilisateur : Votre adresse e-mail mutualisée entière. Serveur entrant : Le serveur de réception des e-mails :  **SSL0.OVH.NET** Port serveur entrant : Le port du serveur entrant :  **993**  ou  **143** Serveur sortant : Le serveur d'envoi des e-mails :  **SSL0.OVH.NET** Port serveur sortant : Le port du serveur sortant :  **465**  ou  **587**

Les ports  **143**  et  **587**  correspondent à la sécurisation SSL désactivée. Les ports  **993**  et  **465**  correspondent à la sécurisation SSL activée.

- Vous devez obligatoirement activer [l'authentification](#configuration_protocole_imap_partie_6_parametres_avances){.external} du serveur sortant SMTP.

|Ports|SSL activé|SSL désactivé|
|---|---|---|
|Entrant|993|143|
|Sortant|465|587|

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.