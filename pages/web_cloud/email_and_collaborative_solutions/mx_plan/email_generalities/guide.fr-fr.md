---
title: "Premiers pas avec l'offre MX Plan"
excerpt: 'Découvrez comment bien débuter avec votre offre MX Plan'
updated: 2025-05-19
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
.w-500 {
  max-width:500px !important;
}
</style>

## Objectif

Vous venez d'acquérir une solution MX Plan. Celle-ci vous permet de bénéficier d'adresses e-mail, avec lesquelles vous pourrez envoyer et recevoir des messages depuis l’appareil de votre choix.

**Découvrez comment débuter avec votre offre MX Plan.**

## Prérequis

- Posséder une offre MX Plan liée à une offre d’[hébergement web](/links/web/hosting), un [hébergement gratuit 100M](/links/web/domains-free-hosting), ou seule.
- Être connecté à l'[espace client OVHcloud](/links/manager).

## En pratique <a name="instructions"></a>

1. Connectez-vous à votre [espace client OVHcloud](/links/manager).
1. Rendez-vous dans la partie `Web Cloud`{.action}.
1. Cliquez sur `MX Plan`{.action}.
1. Sélectionnez le domaine concerné.
1. **Poursuivez selon la technologie e-mail utilisée par votre service MX Plan**.

> [!primary]
>
> **Identifier la technologie e-mail de votre offre MX Plan.**
>
> En fonction de la date d’activation de votre offre MX Plan ou d’une migration récente, la technologie e-mail associée peut différer. Cette version est caractérisée par l'interface de son webmail. Pour l'identifier :
>
> - Depuis l'onglet `Informations Générales`{.action}, relevez la technologie utilisée sous la mention **Webmail** présente dans l'encadré `Abonnement`{.action} sous `Webmail`{.action}.
>
> ![MX plan](images/technology-email.png){.thumbnail .w-500}

**Sommaire**

- [Créer une adresse e-mail](#create-email)
- [Utiliser vos adresses e-mail](#consult-emails)
    - [Utiliser le Webmail](#consult-emails-webmail)
    - [Utiliser un client de messagerie](#consult-emails-client)
        - [Paramètres de réception IMAP et POP](#imap-pop)
        - [Paramètres d'envoi SMTP](#smtp)
- [Redirections et Alias](#redirection-alias)
- [Réponse automatique](#autoreply)

### Créer une adresse e-mail <a name="create-email"></a>

Pour découvrir comment créer une adresse e-mail, cliquez sur l'onglet correspondant à la technologie e-mail utilisée par votre service MX Plan :

> [!tabs]
> **Roundcube**
>>
>> Pour créer une adresse e-mail, positionnez-vous sur l'onglet `Emails`{.action}. La fenêtre qui apparaît liste les comptes déjà créés. Pour ajouter un nouveau compte e-mail, cliquez sur le bouton `Ajouter un compte`{.action}.
>>
>> ![email](images/mxplan-starter-new-step2.png){.thumbnail .w-500}
>>
>> Dans la fenêtre qui s'affiche, renseignez les informations demandées :
>>
>> - **Nom du compte** : Indiquez votre nouvelle adresse e-mail (par exemple, votre prénom.nom). Le nom de domaine composant l'adresse e-mail est déjà présélectionné dans la liste.
>> - **Description du compte** : Information sur l'adresse e-mail, visible uniquement dans le tableau de l'onglet `Emails`{.action} de votre service e-mail.
>> - **Taille du compte** : Déterminez la taille que vous souhaitez attribuer au compte e-mail.
>> - **Mot de passe** : [Définissez un mot de passe](/pages/account_and_service_management/account_information/manage-ovh-password) et confirmez-le. Pour des raisons de sécurité, nous vous recommandons de ne pas utiliser deux fois le même mot de passe, d'en choisir un qui n'a aucun rapport avec vos informations personnelles (évitez par exemple les mentions à vos nom, prénom et date de naissance) et de le renouveler régulièrement.
>>
>> Une fois les champs complétés, cliquez sur `Suivant`{.action} puis vérifiez les informations qui s'affichent dans le récapitulatif. Si celles-ci sont correctes, cliquez sur `Valider`{.action}. Réalisez cette étape autant de fois que nécessaire, selon le nombre de comptes à votre disposition.
>>
>> ![email](images/mxplan-creation-new-step3-roundcube.png){.thumbnail .w-500}
>>
> **Zimbra et OWA**
>>
>> Pour créer une adresse e-mail, positionnez-vous sur l'onglet `Comptes e-mail`{.action}. La fenêtre qui apparaît liste les comptes déjà disponibles, ainsi que ceux que vous pouvez encore créer. Pour ajouter un nouveau compte e-mail, cliquez sur le bouton `Ajouter un compte`{.action}.
>>
>> ![email](images/mxplan-starter-new-step2.png){.thumbnail .w-500}
>>
>> Dans la fenêtre qui s'affiche, renseignez les informations demandées :
>>
>> - **Compte e-mail** : Un nom temporaire est déjà prérempli dans la zone de texte : supprimez-le et indiquez votre nouvelle adresse e-mail (par exemple, votre prénom.nom). Le nom de domaine composant l'adresse e-mail est déjà présélectionné dans la liste.
>> - **Prénom** : Renseignez un prénom.
>> - **Nom** : Renseignez un nom.
>> - **Nom à afficher** : Indiquez le nom qui s'affichera en tant qu'expéditeur lorsque des e-mails seront envoyés avec cette adresse.
>> - **Mot de passe** : [Définissez un mot de passe](/pages/account_and_service_management/account_information/manage-ovh-password) et confirmez-le. Pour des raisons de sécurité, nous vous recommandons de ne pas utiliser deux fois le même mot de passe, d'en choisir un qui n'a aucun rapport avec vos informations personnelles (évitez par exemple les mentions à vos nom, prénom et date de naissance) et de le renouveler régulièrement.
>> - **Quota** : Déterminez la taille que vous souhaitez attribuer au compte e-mail.
>>
>> Une fois les champs complétés, cliquez sur `Suivant`{.action} puis vérifiez les informations qui s'affichent dans le récapitulatif. Si celles-ci sont correctes, cliquez sur `Valider`{.action}. Réalisez cette étape autant de fois que nécessaire, selon le nombre de comptes à votre disposition.
>>
>> ![email](images/mxplan-starter-new-step3.png){.thumbnail .w-500}
>>

### Utiliser vos adresses e-mail <a name="consult-emails"></a>

Une fois vos adresses e-mail créées, vous pouvez commencer à les utiliser. Pour cela, vous disposez de deux possibilités : utiliser le webmail depuis un navigateur Internet ou utiliser un logiciel de messagerie.

#### Utiliser le Webmail <a name="consult-emails-webmail"></a>

Accédez à la page de « [Connexion au webmail](/links/web/email) », puis renseignez l'adresse e-mail concernée ainsi que son mot de passe. Cliquez ensuite sur le bouton `Connexion`{.action}.

Sélectionnez l'onglet correspondant à la technologie e-mail de votre offre MX Plan :

> [!tabs]
> **Roundcube**
>>
>> Vous devriez obtenir une interface ressemblante à l'image ci-dessous avec la mention « Rouncube » en haut à gauche.
>> Pour découvrir l'interface Roundcube et son utilisation, consultez notre guide « [Utiliser son adresse e-mail depuis le webmail Roundcube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube) ».
>>
>> ![email](images/mxplan-webmail-roundcube01.png){.thumbnail .w-500}
>>
> **Zimbra**
>>
>> Comme sur l'image ci-dessous, une fenêtre s'affiche avec la mention « Zimbra » en haut à gauche.
>> Pour découvrir comment utiliser votre adresse e-mail depuis le webmail Zimbra, aidez-vous de notre guide « [Utiliser le webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra) ».
>>
>> ![email](images/mxplan-webmail-zimbra01.png){.thumbnail .w-500}
>>
> **OWA**
>>
>> Lors d'une première connexion au webmail, vous êtes invité à définir la langue de l'interface ainsi que le fuseau horaire sur lequel vous vous trouvez. Votre boîte de réception s'affiche ensuite.
>>
>> Pour découvrir comment utiliser votre adresse e-mail depuis le webmail OWA, aidez-vous de notre guide « [Utiliser son adresse e-mail depuis le webmail Outlook Web App (OWA)](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa) ».
>>
>> ![email](images/mxplan-webmail-owa01.png){.thumbnail .w-500}
>>

#### Utiliser un client de messagerie <a name="consult-emails-client"></a>

Il est possible de configurer votre compte e-mail sur un logiciel de messagerie tel qu’Outlook, Thunderbird, Mail de Mac, etc.

Retrouvez ci-dessous les liens des guides de configuration selon votre type d'appareil :

> [!tabs]
> **Ordinateur Windows**
>>
>> - [Outlook pour Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016).<br>
>> - [Thunderbird pour Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_windows).<br>
>> - [Courrier pour Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10).
>>
> **Ordinateur Apple Mac**
>>
>> - [Outlook pour macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac).<br>
>> - [Mail pour macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos).<br>
>> - [Thunderbird pour macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_mac).
>>
> **iPhone ou iPad**
>>
>> - [Mail pour iPhone et iPad](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios).
>>
> **Smartphone ou tablette Android**
>>
>> - [Gmail pour Android](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android).
>>

Si vous désirez simplement obtenir les éléments nécessaires pour configurer votre adresse e-mail, retrouvez ci-dessous les paramètres à utiliser.

##### Paramètres de réception IMAP et POP <a name="imap-pop"></a>

Pour la réception des e-mails, lors du choix du type de compte, nous vous conseillons une utilisation en **IMAP**. Vous pouvez cependant sélectionner **POP**.

> [!warning]
>
> Il est nécessaire de bien relever la valeur correspondante à votre localisation (**EUROPE** ou **AMERIQUE / ASIE-PACIFIQUE**).

Sélectionnez l'onglet correspondant à votre type de configuration :

> [!tabs]
> **Configuration IMAP**
>>
>> - **Nom d'utilisateur** : Renseignez l'adresse e-mail **complète**.
>> - **Mot de passe** : Renseignez le mot de passe de l'adresse e-mail.
>> - **Serveur EUROPE (entrant)** : imap.mail.ovh.net **ou** ssl0.ovh.net.
>> - **Serveur AMERIQUE/ASIE-PACIFIQUE (entrant)** : imap.mail.ovh.ca.
>> - **Port** : 993.
>> - **Type de sécurité** : SSL/TLS.
>>
> **Configuration POP**
>>
>> - **Nom d'utilisateur** : Renseignez l'adresse e-mail **complète**.
>> - **Mot de passe** : Renseignez le mot de passe de l'adresse e-mail.
>> - **Serveur EUROPE (entrant)** : pop.mail.ovh.net **ou** ssl0.ovh.net.
>> - **Serveur AMERIQUE/ASIE-PACIFIQUE (entrant)** : pop.mail.ovh.ca.
>> - **Port** : 995.
>> - **Type de sécurité** : SSL/TLS.

##### Paramètres d'envoi SMTP <a name="smtp"></a>

Pour l'envoi des e-mails, retrouvez ci-dessous les paramètres **SMTP** à utiliser :

**Configuration SMTP**

- **Nom d'utilisateur** : Renseignez l'adresse e-mail **complète**.
- **Mot de passe** : Renseignez le mot de passe de l'adresse e-mail.
- **Serveur EUROPE (sortant)** : pop.mail.ovh.net **ou** ssl0.ovh.net.
- **Serveur AMERIQUE/ASIE-PACIFIQUE (sortant)** : pop.mail.ovh.ca.
- **Port** : 465.
- **Type de sécurité** : SSL/TLS.

### Redirections et Alias <a name="redirection-alias"></a>

Vous souhaitez rediriger vos e-mails vers un autre destinataire, créer un alias ou encore mettre systématiquement en copie une autre adresse e-mail ?

Pour ce faire, cliquez sur l'onglet correspondant à votre technologie e-mail :

> [!tabs]
> **Roundcube**
>>
>> Pour ajouter une redirection ou un alias, cliquez sur l'onglet `Emails`{.action} de votre service MX Plan puis cliquez sur le bouton `Gestion des redirections`{.action} à droite.
>> Le tableau des redirections déjà actives s'affiche. À droite, cliquez sur le bouton `Ajouter une redirection`{.action} pour lancer la création de votre redirection ou alias.
>>
>> - `De l'adresse` : Renseignez ici l'adresse e-mail que vous souhaitez rediriger.<br>
>> - `Vers l'adresse` : Renseignez ici l'adresse de destination de votre redirection. Il peut s'agir de l'une de vos adresses e-mail OVHcloud, ou d'une adresse e-mail externe.<br>
>> - `Choisissez un mode de copie` : Définissez si vous souhaitez conserver une copie de l'e-mail reçu sur l'adresse e-mail ciblée (`De l'adresse`) ou directement renvoyer vers l'adresse de redirection (`Vers l'adresse`) sans conserver de copie.
>>
>> Pour comprendre l'utilisation des redirections et alias sur votre service MX Plan, consultez notre guide complet : « [Utiliser les redirections e-mail](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections) ».
>>
> **OWA et Zimbra**
>>
>> Lorsque vous êtes sur une technologie **OWA** ou **Zimbra**, vous pouvez procéder de deux manières :
>>
>> 1. **Créer votre redirection depuis le webmail** : Via les règles de boîte de réception ou filtres. En effet ces règles que l'on applique lors de la réception d'un e-mail permettent de transférer ou rediriger un e-mail. Pour cela, nous vous invitons à suivre notre guide « [Règles de boîte de réception depuis l’interface OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/creating-inbox-rules-in-owa-mx-plan) » ou à consulter le chapitre « Filtres » de notre guide « [Utiliser le webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra) ».
>>
>> 2. **Créer votre redirection et alias depuis votre espace client OVHcloud** : Pour ajouter une redirection ou un alias, cliquez sur l'onglet `Redirections`{.action}. Le tableau des redirections déjà actives s'affiche. À droite, cliquez sur le bouton `Ajouter une redirection`{.action}.
>>
>> - `De l'adresse` : Renseignez ici l'adresse e-mail que vous souhaitez rediriger.<br>
>> - `Vers l'adresse` : Renseignez ici l'adresse de destination de votre redirection. Il peut s'agir de l'une de vos adresses e-mail OVHcloud, ou d'une adresse e-mail externe.<br>
>> - `Choisissez un mode de copie` : Définissez si vous souhaitez conserver une copie de l'e-mail reçu sur l'adresse e-mail ciblée (`De l'adresse`) ou directement renvoyer vers l'adresse de redirection (`Vers l'adresse`) sans conserver de copie.
>>
>> Pour comprendre l'utilisation des redirections et alias sur votre service MX Plan, consultez notre guide complet : « [Utiliser les redirections e-mail](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections) ».

### Réponse automatique <a name="autoreply"></a>

Lorsque vous devez vous absenter, il est important de pouvoir mettre en place une réponse automatique pour indiquer que vous ne pouvez pas consulter ou traiter vos e-mails.

Sélectionnez l'onglet correspondant à la technologie e-mail de votre offre MX Plan :

> [!tabs]
> **Roundcube**
>>
>> Pour ajouter une réponse automatique à l'une de vos adresses e-mail, cliquez sur l'onglet `Emails`{.action} de votre service MX Plan puis cliquez sur le bouton `Gestion des répondeurs`{.action} à droite.
>> Le tableau des répondeurs déjà actifs s'affiche. À droite, cliquez sur le bouton `Ajouter un répondeur`{.action} pour lancer la création de votre redirection ou alias.
>>
>> Pour obtenir plus de détails sur la mise en place d'une réponse automatique depuis votre service MX Plan dans votre espace client OVHcloud, consultez notre guide « [MX Plan - Créer une réponse automatique sur une adresse e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_auto_responses) ».
>>
> **Zimbra**
>>
>> La mise en place d'une réponse automatique se réalise directement en se connectant à l'adresse e-mail depuis le Webmail. Pour obtenir les détails, référez-vous à notre guide « [Utiliser le webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra) », sélectionnez « Réponses automatiques / Répondeur » dans le sommaire.
>>
> **OWA**
>>
>> La mise en place d'une réponse automatique se réalise directement en se connectant à l'adresse e-mail depuis le Webmail. Pour obtenir les détails, référez-vous à notre guide « [Utiliser son adresse e-mail depuis le webmail Outlook Web App (OWA)](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa) », allez directement au chapitre « Ajouter la réponse automatique ».
>>

## Aller plus loin

[Utiliser le webmail Roundcube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube)

[Utiliser le webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[Utiliser le webmail Outlook Web App (OWA)](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)

[Utiliser les redirections e-mail](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)

[MX Plan - Créer une réponse automatique sur une adresse e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_auto_responses)

[Utiliser les redirections e-mail](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).
