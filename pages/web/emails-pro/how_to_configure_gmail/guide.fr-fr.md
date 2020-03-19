---
title: 'Configurer son compte E-mail Pro sur l''interface en ligne de Gmail'
slug: configuration-gmail
excerpt: 'Apprenez à configurer un compte E-mail Pro sur l''interface en ligne de Gmail'
section: 'Configuration sur une interface en ligne'
order: 1
---

**Dernière mise à jour le 19/03/2020**

## Objectif

Les comptes E-mail Pro peuvent être configurés sur différents logiciels de messagerie et interfaces en ligne compatibles. Cela vous permet d'envoyer et de recevoir vos messages depuis l'appareil ou l'interface en ligne de votre choix.

**Apprenez à configurer un compte E-mail Pro sur l'interface en ligne de Gmail.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.
> 

## Prérequis

- Disposer d'une offre [E-mail Pro](https://www.ovh.com/fr/emails/email-pro/){.external}.
- Disposer des identifiants relatifs au compte E-mail Pro que vous souhaitez paramétrer.
- Disposer des identifiants du compte Gmail sur lequel vous souhaitez paramétrer le compte E-mail Pro OVHcloud.

> [!primary]
>
> Cette documentation a été réalisée depuis la nouvelle interface de Gmail. Si les visuels diffèrent légèrement de votre version, les instructions restent les mêmes et peuvent toujours être suivies.
>

## En pratique

### Étape 1 : ajouter un compte E-mail Pro OVHcloud sur l'interface de Gmail

> [!primary]
>
> Dans notre exemple, nous utilisons la mention serveur : pro**X**.mail.ovh.net. Vous devrez remplacer le « X » par le chiffre désignant le serveur de votre service E-mail Pro.
> 
> Retrouvez ce chiffre dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, dans la rubrique `Web`{.action} puis `E-mail Pro`{.action}
>  dans la colonne de gauche. Le nom du serveur est visible dans le cadre **Connexion** de l'onglet `Informations Générales`{.action}.
> 

Pour débuter la manipulation, rendez-vous sur l'interface en ligne de Gmail depuis votre navigateur internet. Une fois sur cette dernière, renseignez les informations de votre compte Gmail, puis connectez-vous.

Une fois connecté à l'interface, cliquez sur l'icône en forme de roue dentée, puis sur `Paramètres`{.action}. Sur la page qui s'affiche, cliquez sur l'onglet `Comptes et importation`{.action}. 

![emailpro](images/configuration-gmail-web-step1.png){.thumbnail}

À côté de `Consulter d'autres comptes de messagerie`, cliquez sur `Ajouter un compte de messagerie`{.action}. Dans la fenêtre qui s'affiche, renseignez votre adresse E-mail Pro OVHcloud, puis cliquez sur `Suivant`{.action}. Choisissez `Importer les e-mails de mon autre compte (POP3)`{.action}, puis cliquez de nouveau sur `Suivant`{.action}.

![emailpro](images/configuration-gmail-web-step2.png){.thumbnail}

Indiquez maintenant les paramètres du serveur POP (serveur entrant) de votre compte E-mail Pro OVHcloud :

|Information|Description| 
|---|---| 
|Nom d'utilisateur|Renseignez l'adresse e-mail **complète**.|  
|Mot de passe|Renseignez le mot de passe de l'adresse e-mail.|
|Serveur POP|Renseignez le serveur « pro**X**.mail.ovh.net ».|
|Port|Sélectionnez le port « 995 ».|

Concernant les choix que vous pouvez cocher :

- **« Conserver une copie du message récupéré sur le serveur »** : nous vous recommandons de cocher cette case si vous souhaitez conserver une copie des messages reçus de votre adresse E-mail Pro OVHcloud sur nos serveurs ;

- **« Vous devez toujours utiliser une connexion sécurisée (SSL) lorsque vous récupérez vos e-mails »** : assurez-vous de cocher cette case pour que la connexion à votre adresse E-mail Pro OVHcloud puisse s'effectuer ;

- **« Ajouter un libellé aux messages entrants »** : ce choix vous permet d'ajouter un libellé aux messages qui seront importés de votre adresse E-mail Pro OVHcloud vers votre compte Gmail ;

- **« Archiver les messages entrants (sans passer par la boîte de réception) »** : ce choix vous permet de ne pas afficher dans la boîte de réception de votre compte Gmail les messages importés de votre adresse e-mail OVHcloud.

Une fois les informations complétées, cliquez sur le bouton `Ajouter un compte`{.action}. Si les informations sont correctes, la connexion à l'adresse e-mail réussira. 

![emailpro](images/configuration-gmail-web-step3.png){.thumbnail}

Dès lors, si vous souhaitez également envoyer des messages avec votre adresse E-mail Pro OVHcloud depuis l'interface en ligne de Gmail, cochez la case `Oui, j'aimerais envoyer des e-mails depuis l'adresse`{.action}, puis cliquez sur `Suivant`{.action}. 

Complétez alors le nom qui s'affichera en tant qu'expéditeur lorsque des e-mails seront envoyés avec l'adresse e-mail, cochez la case `Traiter comme un alias`{.action}, puis cliquez sur le bouton `Étape suivante`{.action}.

![emailpro](images/configuration-gmail-web-step4.png){.thumbnail}

Indiquez maintenant les paramètres du serveur SMTP (serveur sortant) de votre compte E-mail Pro OVHcloud :

|Information|Description| 
|---|---| 
|Serveur SMTP|Renseignez le serveur « pro**X**.mail.ovh.net ».|
|Port|Sélectionnez le port « 587 ».|
|Nom d'utilisateur|Renseignez l'adresse e-mail **complète**.|  
|Mot de passe|Renseignez le mot de passe de l'adresse e-mail.|

Une fois les informations complétées, cochez la case à côté de `Connexion sécurisée TLS`{.action}, puis cliquez sur le bouton `Ajouter un compte`{.action}. Si les informations sont correctes, la connexion à l'adresse e-mail réussira. 

![emailpro](images/configuration-gmail-web-step5.png){.thumbnail}

Il ne vous reste plus qu'à valider cet ajout en renseignant un code de confirmation envoyé à votre adresse E-mail Pro OVHcloud. Pour l'obtenir, connectez-vous à celle-ci comme d'habitude depuis notre interface en ligne accessible depuis : <https://pro1.mail.ovh.net>. 

Une fois la validation effectuée, l'adresse E-mail Pro OVHcloud apparaît alors dans l'onglet `Comptes et importation`{.action} auquel vous avez accédé en début de manipulation.

### Étape 2 : utiliser un compte E-mail Pro depuis l'interface de Gmail

Une fois le compte E-mail Pro configuré, il ne reste plus qu’à l’utiliser ! Vous pouvez dès à présent envoyer et recevoir des messages sur ce dernier depuis l'interface de Gmail.

Pour envoyer un message avec votre adresse E-mail Pro OVHcloud depuis l'interface en ligne de Gmail, vous devrez choisir lors de la rédaction d'un nouveau message l'adresse e-mail qui en réalisera l'envoi. Ce choix s'effectue à côté de `De`{.action} dans la fenêtre de rédaction.

![emailpro](images/configuration-gmail-web-step6.png){.thumbnail}

Sachez également que vous pouvez toujours utiliser notre interface en ligne accessible depuis l'adresse [https://www.ovh.com/fr/mail/](https://www.ovh.com/fr/mail/) pour accéder à votre adresse E-mail Pro OVHcloud. Vous pouvez vous y connecter grâce à ses identifiants.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.