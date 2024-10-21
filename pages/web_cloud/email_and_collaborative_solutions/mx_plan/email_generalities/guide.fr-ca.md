---
title: 'Premiers pas avec les e-mails de votre hébergement web'
excerpt: 'Découvrez comment bien débuter avec les e-mails de votre hébergement web'
updated: 2023-11-15
---

## Objectif

Vous venez d'acquérir une solution MX Plan. Celle-ci vous permet de bénéficier d'adresses e-mail, avec lesquelles vous pouvez envoyer et recevoir des messages depuis l’appareil de votre choix. 

**Découvrez comment bien débuter avec les e-mails de votre hébergement web.**

## Prérequis

- Posséder une offre MX Plan. Celle-ci est disponible via : une offre d’[hébergement web](https://www.ovhcloud.com/fr-ca/web-hosting/){.external}, l'[hébergement gratuit Start 10M](https://www.ovhcloud.com/fr/domains/free-web-hosting/){.external} ou l'offre MX Plan commandée séparément.
- Être connecté à l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}, partie `Web Cloud`{.action}.

## En pratique

Une fois l'offre MX Plan créée et disponible, vous avez la possibilité de la gérer depuis votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}. Selon sa date d'activation ou si celle-ci a été récemment migrée, il est possible que vous disposiez de la version historique ou de la nouvelle version de l'offre. Avant de poursuivre, vous devez identifier celle-ci. 

Pour cela, connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}, partie `Web Cloud`{.action}. Cliquez sur `Emails`{.action} dans la barre de services à gauche, puis choisissez le nom du service MX Plan concerné. Poursuivez selon la version que vous possédez.

|Version historique de l'offre MX Plan|Nouvelle version de l'offre MX Plan|
|---|---|
|![email](images/mxplan-starter-legacy-step1.png){.thumbnail}<br> Repérez l'offre dans le cadre « Abonnement »|![email](images/mxplan-starter-new-step1.png){.thumbnail}<br>Repérez la `Référence serveur` dans le cadre « Résumé »|
|Poursuivre vers « [Version historique de l'offre MX Plan](./#version-historique-de-loffre-mx-plan) »|Poursuivre vers « [Nouvelle version de l'offre MX Plan](./#nouvelle-version-de-loffre-mx-plan) »|

### Nouvelle version de l'offre MX Plan

#### Étape 1 : accéder à la gestion de votre offre

Vous possédez donc la nouvelle version de l'offre MX Plan. Voici l'affichage que vous devez obtenir. Si ce n'est pas le cas, assurez-vous d'avoir suivi le bon cheminement [en vous reportant aux informations ci-dessus](./#en-pratique).  

![email](images/mxplan-starter-new-step1.png){.thumbnail}

#### Étape 2 : créer vos adresses e-mail

Pour créer une adresse e-mail, positionnez-vous sur l'onglet `Comptes e-mail`{.action}. La fenêtre qui apparaît liste les comptes e-mail déjà disponibles, ainsi que ceux que vous pouvez encore créer. Cliquez alors sur le bouton `Ajouter un compte`{.action}.

![email](images/mxplan-starter-new-step2.png){.thumbnail}

Dans la fenêtre qui s'affiche, renseignez les informations demandées :

|Information|Description|  
|---|---|  
|Compte e-mail|Un nom temporaire est déjà prérempli dans la zone de texte : supprimez-le et renseignez celui que portera votre adresse e-mail (votre prénom.nom, par exemple). Le nom de domaine composant l'adresse e-mail est déjà présélectionné dans la liste.|  
|Prénom|Renseignez un prénom.|  
|Nom|Renseignez un nom.|  
|Nom à afficher|Indiquez le nom qui s'affichera en tant qu'expéditeur lorsque des e-mails seront envoyés avec cette adresse.|
|Mot de passe|Définissez un mot de passe et confirmez-le. Pour des raisons de sécurité, nous vous recommandons de ne pas utiliser deux fois le même mot de passe, d'en choisir un qui n'a aucun rapport avec vos informations personnelles (évitez les mentions à vos nom, prénom et date de naissance, par exemple) et de le renouveler régulièrement.|

Une fois les champs complétés, cliquez sur `Suivant`{.action} puis vérifiez les informations qui s'affichent dans le récapitulatif. Si celles-ci sont correctes, cliquez sur `Valider`{.action}. Réalisez cette étape autant de fois que nécessaire, selon le nombre de comptes à votre disposition.

![email](images/mxplan-starter-new-step3.png){.thumbnail}

#### Étape 3 : utiliser vos adresses e-mail

Une fois vos adresses e-mail créées, il ne vous reste plus qu’à les utiliser. Pour cela, vous disposez de deux possibilités.

##### 1. Utiliser le webmail Outlook Web App (OWA)

Accédez à la page « [Connexion au webmail](https://www.ovh.com/ca/fr/mail/){.external} », puis renseignez l'adresse e-mail concernée ainsi que son mot de passe. Cliquez ensuite sur le bouton `Connexion`{.action}.

Lors d'une première connexion au webmail, vous êtes invité à définir la langue de l'interface ainsi que le fuseau horaire sur lequel vous vous trouvez. Votre boîte de réception s'affiche ensuite. Pour découvrir comment utiliser votre adresse e-mail depuis le webmail OWA, aidez-vous de notre guide « [Utiliser son adresse e-mail depuis le webmail Outlook Web App (OWA)](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa){.external} ».

![email](images/mxplan-starter-new-step4.png){.thumbnail}

##### 2. Utiliser l'appareil de votre choix

Vous devez configurer votre adresse e-mail sur l'appareil souhaité (comme un smartphone ou une tablette). Pour cela, vous pouvez vous aider de [nos guides de configuration](/products/web-cloud-email-collaborative-solutions-mx-plan)

Si vous désirez simplement obtenir les éléments nécessaires pour configurer votre adresse e-mail, retrouvez ci-dessous les paramètres à utiliser :

- **Pour une configuration en IMAP (recommandée)**

|Type du serveur|Nom du serveur|Port (avec SSL)|Port (sans SSL)|
|---|---|---|---|
|Entrant|imap.mail.ovh.ca|993|143|
|Sortant|smtp.mail.ovh.ca|465|587|

- **Pour une configuration en POP**

|Type du serveur|Nom du serveur|Port (avec SSL)|Port (sans SSL)|
|---|---|---|---|
|Entrant|pop.mail.ovh.ca|995|110|
|Sortant|smtp.mail.ovh.ca|465|587|

> [!warning]
>
> Si vous éprouvez des difficultés dans la configuration de votre adresse e-mail sur votre appareil, [aidez-vous de nos guides de configuration](/products/web-cloud-email-collaborative-solutions-mx-plan) ou rapprochez-vous de l'éditeur de l'application que vous utilisez, la manipulation étant inhérente à cette dernière.
>

### Version historique de l'offre MX Plan

#### Étape 1 : accéder à la gestion de votre offre

Vous possédez donc la version historique de l'offre MX Plan. Voici l'affichage que vous devez obtenir. Si ce n'est pas le cas, assurez-vous d'avoir suivi le bon cheminement [en vous reportant aux informations ci-dessus](./#en-pratique). 

![email](images/mxplan-starter-legacy-step1.png){.thumbnail}

#### Étape 2 : créer vos adresses e-mail

Pour créer une adresse e-mail, positionnez-vous sur l'onglet `Emails`{.action}. Le tableau qui s'affiche contient toutes les adresses e-mail créées dans le cadre de votre offre. Cliquez alors sur le bouton `Créer une adresse E-mail`{.action}.

![email](images/mxplan-starter-legacy-step2.png){.thumbnail}

Dans la fenêtre qui s'affiche, renseignez les informations demandées :

|Information|Description|  
|---|---|  
|Nom du compte|Renseignez le nom que portera votre adresse e-mail (votre prénom.nom, par exemple). Le nom de domaine concerné est déjà complété par défaut.|  
|Description du compte|Indiquez une courte description vous permettant de reconnaître ce compte parmi d'autres affichés dans votre espace client OVHcloud.|  
|Taille du compte|Sélectionnez la taille du compte souhaitée. Il s'agit de l'espace dont bénéficiera votre adresse pour stocker les messages.|  
|Mot de passe|Définissez un mot de passe et confirmez-le. Pour des raisons de sécurité, nous vous recommandons de ne pas utiliser deux fois le même mot de passe, d'en choisir un qui n'a aucun rapport avec vos informations personnelles (évitez les mentions à vos nom, prénom et date de naissance, par exemple) et de le renouveler régulièrement.|

Une fois les champs complétés, cliquez sur `Suivant`{.action} puis vérifiez les informations qui s'affichent dans le récapitulatif. Si celles-ci sont correctes, cliquez sur `Valider`{.action}. Réalisez cette étape autant de fois que nécessaire, selon le nombre de comptes à votre disposition.

![email](images/mxplan-starter-legacy-step3.png){.thumbnail}

#### Étape 3 : utiliser vos adresses e-mail

Une fois vos adresses e-mail créées, il ne vous reste plus qu’à les utiliser. Pour cela, vous disposez de deux possibilités.

##### 1. Utiliser le webmail

Accédez à la page « [Connexion au webmail](https://www.ovh.com/ca/fr/mail/){.external} », puis renseignez l'adresse e-mail concernée ainsi que son mot de passe. Cliquez ensuite sur le bouton `Connexion`{.action}.

Votre boîte de réception s'affiche alors. Pour découvrir comment utiliser votre adresse e-mail depuis le webmail, aidez-vous de notre guide « [Utiliser son adresse e-mail depuis le webmail](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa){.external} ».

![email](images/mxplan-starter-legacy-step4.png){.thumbnail}

##### 2. Utiliser l'appareil de votre choix

Vous devez configurer votre adresse e-mail sur l'appareil souhaité (comme un smartphone ou une tablette). Pour cela, vous avez la possibilité de vous aider de [nos guides de configuration](/products/web-cloud-email-collaborative-solutions-mx-plan)

Si vous désirez simplement obtenir les éléments nécessaires pour configurer votre adresse e-mail, retrouvez ci-dessous les paramètres à utiliser :

- **Pour une configuration en IMAP (recommandée)**

|Type du serveur|Nom du serveur|Port (avec SSL)|Port (sans SSL)|
|---|---|---|---|
|Entrant|imap.mail.ovh.ca|993|143|
|Sortant|smtp.mail.ovh.ca|465|587|

- **Pour une configuration en POP**

|Type du serveur|Nom du serveur|Port (avec SSL)|Port (sans SSL)|
|---|---|---|---|
|Entrant|pop.mail.ovh.ca|995|110|
|Sortant|smtp.mail.ovh.ca|465|587|

> [!warning]
>
> Si vous éprouvez des difficultés dans la configuration de votre adresse e-mail sur votre appareil, [aidez-vous de nos guides de configuration](/products/web-cloud-email-collaborative-solutions-mx-plan) ou rapprochez-vous de l'éditeur de l'application que vous utilisez, la manipulation étant inhérente à cette dernière.
>

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
