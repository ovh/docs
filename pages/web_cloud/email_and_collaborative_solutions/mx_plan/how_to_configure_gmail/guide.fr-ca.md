---
title: "MX Plan - Configurer son adresse e-mail sur l'interface en ligne de Gmail"
excerpt: "Apprenez à configurer une adresse e-mail MX Plan sur l'interface en ligne de Gmail"
updated: 2024-09-24
---

## Objectif

Les adresses e-mail de l'offre MX Plan peuvent être configurées sur différents logiciels de messagerie et interfaces en ligne compatibles. Cela vous permet d'envoyer et de recevoir vos messages depuis l'appareil ou l'interface en ligne de votre choix.

**Apprenez à configurer une adresse e-mail MX Plan sur l'interface en ligne de Gmail.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.
> 

## Prérequis

- Disposer d’une adresse e-mail MX Plan (comprise dans l’offre MX Plan ou dans une offre d’[hébergement web OVHcloud](/links/web/hosting)).
- Disposer des identifiants relatifs à l'adresse e-mail OVHcloud que vous souhaitez paramétrer.
- Disposer des identifiants du compte Gmail (Personnel ou Professionnel) sur lequel vous souhaitez paramétrer l'adresse OVHcloud.

> [!primary]
>
> Cette documentation a été réalisée depuis la nouvelle interface de Gmail. Si les visuels diffèrent légèrement de votre version, les instructions restent les mêmes et peuvent toujours être suivies.
>

## En pratique

### Étape 1 : ajouter le compte e-mail OVHcloud sur l'interface de Gmail

Pour débuter la manipulation, rendez-vous sur l'interface en ligne de Gmail depuis votre navigateur internet. Une fois sur cette dernière, renseignez les informations de votre compte Gmail, puis connectez-vous.

Une fois connecté à l'interface, cliquez sur l'icône en forme de roue dentée, puis sur `Voir tous les paramètres`{.action}. Sur la page qui s'affiche, cliquez sur l'onglet `Comptes et importation`{.action}. 

![mxplan](images/configuration-gmail-web-step1.png){.thumbnail}

À côté de `Consulter d'autres comptes de messagerie`, cliquez sur `Ajouter un compte de messagerie`{.action}. Dans la fenêtre qui s'affiche, renseignez votre adresse e-mail OVHcloud, puis cliquez sur `Suivant`{.action}. Choisissez `Importer les e-mails de mon autre compte (POP3)`{.action}, puis cliquez de nouveau sur `Suivant`{.action}.

![mxplan](images/configuration-gmail-web-step2.png){.thumbnail}

Indiquez maintenant les paramètres du serveur POP (serveur entrant) de votre adresse e-mail OVHcloud :

|Information|Description| 
|---|---| 
|Nom d'utilisateur|Renseignez l'adresse e-mail **complète**.|  
|Mot de passe|Renseignez le mot de passe de l'adresse e-mail.|
|Serveur POP|Renseignez le serveur « pop.mail.ovh.ca ».|
|Port|Sélectionnez le port « 995 ».|

Concernant les choix que vous pouvez cocher :

- **« Conserver une copie du message récupéré sur le serveur »** : nous vous recommandons de cocher cette case si vous souhaitez conserver une copie des messages reçus de votre adresse e-mail OVHcloud sur nos serveurs ;

- **« Vous devez toujours utiliser une connexion sécurisée (SSL) lorsque vous récupérez vos e-mails »** : assurez-vous de cocher cette case pour que la connexion à votre adresse e-mail OVHcloud puisse s'effectuer ;

- **« Ajouter un libellé aux messages entrants »** : ce choix vous permet d'ajouter un libellé aux e-mails qui seront importés de votre adresse e-mail OVHcloud vers votre compte Gmail ;

- **« Archiver les messages entrants (sans passer par la boîte de réception) »** : ce choix vous permet de ne pas afficher dans la boîte de réception de votre compte Gmail les messages importés de votre adresse e-mail OVHcloud.

Une fois les informations complétées, cliquez sur le bouton `Ajouter un compte`{.action}. Si les informations sont correctes, la connexion à l'adresse e-mail réussira. 

![mxplan](images/configuration-gmail-web-step3-ca.png){.thumbnail}

Dès lors, si vous souhaitez également envoyer des e-mails avec votre adresse OVHcloud depuis l'interface en ligne de Gmail, cochez la case `Oui, j'aimerais envoyer des e-mails depuis l'adresse`{.action}, puis cliquez sur `Suivant`{.action}. 

Complétez alors le nom qui s'affichera en tant qu'expéditeur lorsque des e-mails seront envoyés avec l'adresse e-mail, cochez la case `Traiter comme un alias`{.action}, puis cliquez sur le bouton `Étape suivante`{.action}.

![mxplan](images/configuration-gmail-web-step4.png){.thumbnail}

Indiquez maintenant les paramètres du serveur SMTP (serveur sortant) de votre adresse e-mail OVHcloud :

|Information|Description| 
|---|---| 
|Serveur SMTP|Renseignez le serveur « smtp.mail.ovh.ca ».|
|Port|Sélectionnez le port « 587 ».|
|Nom d'utilisateur|Renseignez l'adresse e-mail **complète**.|  
|Mot de passe|Renseignez le mot de passe de l'adresse e-mail.|

Une fois les informations complétées, cochez la case à côté de `Connexion sécurisée TLS`{.action}, puis cliquez sur le bouton `Ajouter un compte`{.action}. Si les informations sont correctes, la connexion à l'adresse e-mail réussira. 

![mxplan](images/configuration-gmail-web-step5-ca.png){.thumbnail}

Il ne vous reste plus qu'à valider cet ajout en renseignant un code de confirmation envoyé à votre adresse e-mail OVHcloud. Pour l'obtenir, connectez-vous à celle-ci comme d'habitude depuis notre interface en ligne accessible depuis : [Webmail](/links/web/email). 

Une fois la validation effectuée, l'adresse e-mail OVHcloud apparaît alors dans l'onglet `Comptes et importation`{.action} auquel vous avez accéder en début de manipulation.

### Étape 2 : utiliser l'adresse e-mail depuis l'interface de Gmail

Une fois l’adresse e-mail configurée, il ne reste plus qu’à l’utiliser ! Vous pouvez dès à présent envoyer et recevoir des messages sur cette dernière depuis l'interface de Gmail.

Pour envoyer un message avec votre adresse e-mail OVHcloud depuis l'interface en ligne de Gmail, vous devrez choisir lors de la rédaction d'un nouveau message l'adresse e-mail qui en réalisera l'envoi. Ce choix s'effectue à côté de `De`{.action} dans la fenêtre de rédaction.

![mxplan](images/configuration-gmail-web-step6.png){.thumbnail}

Sachez également que vous pouvez toujours utiliser notre interface en ligne accessible depuis l'adresse [Webmail](/links/web/email) pour accéder à votre adresse e-mail OVHcloud. Vous pouvez vous y connecter grâce à ses identifiants.

## Aller plus loin

> [!primary]
>
> Pour plus d'informations sur la configuration d'une adresse e-mail depuis l'interface Gmail en ligne, consultez [le centre d'aide de Google](https://support.google.com/mail/answer/21289?hl=fr&co=GENIE.Platform%3DDesktop).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
