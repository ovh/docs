---
title: 'Créer une adresse e-mail avec son offre MX Plan'
excerpt: 'Découvrez comment créer une adresse e-mail avec votre offre MX Plan'
updated: 2025-08-26
---
 
<style>
.w-400 {
  max-width:400px !important;
}
</style>

## Objectif

Vous venez d'acquérir une solution e-mail MX Plan. Celle-ci vous permet de bénéficier d'adresses e-mail associées à un nom de domaine.

**Découvrez comment créer une adresse e-mail avec votre offre MX Plan.**

## Prérequis

- Disposer d'une offre MX Plan. Celle-ci est disponible via :
    - Une offre d’[hébergement web](/links/web/hosting).
    - Un[hébergement gratuit 100M](/links/web/domains-free-hosting) compris avec un nom de domaine (activé au préalable).
    - Une offre MX Plan commandée séparément.
- Être connecté à l'[espace client OVHcloud](/links/manager), partie `Web Cloud`{.action}.

> [!primary]
>
> **Cas particuliers**
>
> - Concernant l’hébergement gratuit 100M : il est impératif de l’activer au préalable afin de pouvoir créer une adresse e-mail. Vous pouvez effectuer cette opération depuis votre [espace client OVHcloud](/links/manager), en vous positionnant sur le nom de domaine concerné.
> - Dans le cadre d'un [hébergement web](/links/web/hosting), il est nécessaire d'activer votre offre MX Plan incluse avant de poursuivre la lecture de cette documentation. Pour cela, consultez notre guide « [Activer les adresses e-mail incluses dans votre hébergement web](/pages/web_cloud/web_hosting/activate-email-hosting) ».

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
> ![MX plan](images/technology-email.png){.thumbnail .w-400}

### OWA et Zimbra

Cette section documente les offres MX Plan utilisant la technologie webmail **OWA** et **Zimbra**.

#### Créer un compte e-mail

Pour obtenir une nouvelle adresse e-mail, positionnez-vous sur l'onglet `Comptes e-mail`{.action}. La fenêtre qui apparaît affiche les comptes e-mail déjà disponibles, ainsi que ceux que vous pouvez encore créer. Cliquez alors sur le bouton `Ajouter un compte`{.action}.

![email](images/mxplan-creation-new-step2.png){.thumbnail .w-400}

Dans la fenêtre qui s'affiche, renseignez les informations demandées :

- **Compte e-mail** : Un nom temporaire est déjà prérempli dans la zone de texte. Remplacez-le par celui que vous souhaitez pour votre adresse e-amil (votre prénom.nom, par exemple). Le nom de domaine composant l'adresse e-mail est déjà présélectionné dans la liste.

> [!warning]
>
> Le choix du nom de votre adresse e-mail doit respecter les conditions suivantes :
>
> - Minimum 2 caractères
> - Maximum 32 caractères
> - Aucun caractère accentué
> - Pas de caractères spéciaux, à l'exception des caractères suivants : `.`, `,`, `-` et `_`

- **Prénom** : renseignez un prénom.
- **Nom** : renseignez un nom.
- **Nom à afficher** : indiquez le nom qui s'affichera en tant qu'expéditeur lorsque des e-mails seront envoyés depuis cette adresse.
- **Mot de passe** : définissez un mot de passe fort et confirmez-le. Pour des raisons de sécurité, n'utilisez pas deux fois le même mot de passe. Choisissez-en un qui n'a aucun rapport avec vos informations personnelles (évitez par exemple de mentionner vos nom, prénom et date de naissance). Changez-le régulièrement.

> [!warning]
>
> Le choix du mot de passe doit respecter les conditions suivantes:
>
> - Minimum 9 caractères
> - Maximum 30 caractères
> - Aucun caractère accentué

Une fois les champs complétés, cliquez sur `Suivant`{.action}.

![email](images/mxplan-creation-new-step3.png){.thumbnail .w-400}

Vérifiez maintenant les informations qui s'affichent dans le récapitulatif ; si celles-ci sont correctes, cliquez sur `Valider`{.action}. Le compte nouvellement ajouté apparaît alors dans le tableau. Patientez quelques instants le temps que le compte soit disponible.

Réalisez cette étape autant de fois que nécessaire, selon le nombre de comptes à votre disposition.

#### Consulter les e-mails

Accédez à la page « [Connexion au webmail](/links/web/email) », puis renseignez l'adresse e-mail concernée ainsi que son mot de passe. Cliquez ensuite sur le bouton `Connexion`{.action}.

Sélectionnez l'onglet correspondant à la technologie e-mail de votre offre MX Plan :

> [!tabs]
> **Zimbra**
>>
>> Lorsque vous êtes connecté au webmail Zimbra, vous obtenez l'interface ci-dessous. Pour obtenir plus de détails sur l'utilisation du webmail Zimbra, référez-vous à notre guide « [Utiliser le webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra) ».
>>
>> ![Zimbra - interface](images/zimbra-01.png){.thumbnail .w-400}
>>
> **OWA**
>>
>> Lors d'une première connexion au webmail, vous êtes invité à définir la langue de l'interface ainsi que le fuseau horaire sur lequel vous vous trouvez. Votre boîte de réception s'affiche ensuite. Pour découvrir comment utiliser votre adresse e-mail depuis le webmail Outlook Web App (OWA), aidez-vous de notre guide « [Utiliser son adresse e-mail depuis le webmail Outlook Web App (OWA)](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa) ».
>>
>> ![email](images/mxplan-creation-new-step5.png){.thumbnail .w-400}

Pour consulter vos e-mails depuis un logiciel de messagerie, référez-vous la rubrique « [Consulter un compte e-mail depuis un appareil](#configdevices) ».

#### Supprimer un compte e-mail

Depuis la nouvelle version MX Plan, on parle de *réinitialisation de compte* lorsque vous devez supprimer celui-ci.

> [!warning]
>
> Avant de supprimer des comptes e-mail, assurez-vous qu'ils ne sont pas utilisés. Une sauvegarde de ces comptes peut s'avérer nécessaire. Au besoin, consultez le guide [Migrer manuellement votre adresse e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration) qui vous décrira comment exporter les données d'un compte depuis votre espace client ou un logiciel de messagerie.

Depuis l'onglet `Comptes e-mail`{.action}, cliquez sur le bouton `...`{.action} à droite du compte à supprimer, puis cliquez sur `Réinitialiser ce compte`{.action}.

![email](images/mxplan-new-reset.png){.thumbnail .w-400}

### MX Plan Roundcube

Cette section est dédiée aux offres MX Plan utilisant la technologie webmail **Roundcube**.

#### Créer un compte e-mail

Pour obtenir une nouvelle adresse e-mail, positionnez-vous sur l'onglet `Emails`{.action}. Le tableau qui s'affiche contient tous les comptes e-mail créés dans le cadre de votre offre MX Plan. Cliquez alors sur le bouton `Créer une adresse E-mail`{.action}.

![email](images/mxplan-creation-legacy-step2.png){.thumbnail .w-400}

Dans la fenêtre qui s'affiche, renseignez les informations demandées :

- **Nom du compte**: Renseignez le nom que vous souhaitez pour votre adresse e-mail (votre prénom.nom, par exemple). Le nom de domaine concerné est déjà complété par défaut.
- **Description du compte**: Indiquez une courte description vous permettant de reconnaître ce compte parmi d'autres affichés dans votre espace client OVHcloud.
- **Taille du compte**: Sélectionnez la taille du compte souhaitée. Il s'agit de l'espace dont bénéficiera votre adresse pour stocker les messages.
- **Mot de passe**: Définissez un mot de passe et confirmez-le. Pour des raisons de sécurité, nous vous recommandons de ne pas utiliser deux fois le même mot de passe, d'en choisir un qui n'a aucun rapport avec vos informations personnelles (évitez les mentions à vos nom, prénom et date de naissance, par exemple) et de le renouveler régulièrement.

Une fois les champs complétés, cliquez sur `Suivant`{.action}.

![email](images/mxplan-creation-legacy-step3.png){.thumbnail .w-400}

Vérifiez alors les informations qui s'affichent dans le récapitulatif ; si celles-ci sont correctes, cliquez de nouveau sur `Suivant`{.action}. Enfin, sélectionnez `Valider`{.action} pour lancer la création de l'adresse e-mail. Patientez quelques instants le temps que celle-ci soit disponible.

Réalisez cette étape autant de fois que nécessaire, selon le nombre de comptes à votre disposition.

#### Consulter les e-mails 

Accédez à la page « [Connexion au webmail](/links/web/email) », puis renseignez l'adresse e-mail concernée ainsi que son mot de passe. Cliquez ensuite sur le bouton `Connexion`{.action}.

Votre boîte de réception s'affiche. Pour découvrir comment utiliser votre adresse e-mail depuis le webmail OWA, aidez-vous de notre guide « [Utiliser son adresse e-mail depuis le webmail RoundCube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube) ».

![email](images/mxplan-creation-legacy-step4.png){.thumbnail .w-400}

Pour consulter vos e-mails depuis un logiciel de messagerie, référez-vous la rubrique [Consulter un compte e-mail depuis un appareil](#configdevices)

#### Supprimer un compte e-mail

> [!warning]
>
> Avant de supprimer des comptes e-mail, assurez-vous qu'ils ne sont pas utilisés. Une sauvegarde de ces comptes peut s'avérer nécessaire. Au besoin, consultez le guide [Migrer manuellement votre adresse e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration) qui vous décrira comment exporter les données d'un compte depuis votre espace client ou un logiciel de messagerie.

Depuis l'onglet `Comptes e-mail`{.action}, cliquez sur le bouton `...`{.action} à droite du compte à supprimer, puis cliquez sur `Supprimer le compte`{.action}

![email](images/mxplan-legacy-reset.png){.thumbnail .w-400}

### Consulter un compte e-mail depuis un appareil <a name="configdevices"></a>

Vous devez configurer votre adresse e-mail sur l'appareil souhaité (comme un smartphone ou une tablette). Pour cela, vous pouvez vous aider de nos guides de configuration :

> [!tabs]
> **Windows**
>>
>> - [Courrier sur Windows 10](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10)
>> - [Outlook](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)
>> - [Thunderbird](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_windows)
>>
> **Apple**
>>
>> - [Mail de macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos)
>> - [Mail pour iPhone ou iPad](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios)
>> - [Outlook Mac OS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac)
>> - [Thunderbird](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_mac)
>>
> **Android**
>>
>> - [Android](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android)
>>
> **Autre**
>>
>> - [Interface Gmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_gmail)
>>

Si vous désirez simplement obtenir les éléments nécessaires pour configurer votre adresse e-mail, retrouvez ci-dessous les paramètres à utiliser.

#### Paramètres de réception IMAP et POP <a name="imap-pop"></a>

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

#### Paramètres d'envoi SMTP <a name="smtp"></a>

Pour l'envoi des e-mails, retrouvez ci-dessous les paramètres **SMTP** à utiliser :

**Configuration SMTP**

- **Nom d'utilisateur** : Renseignez l'adresse e-mail **complète**.
- **Mot de passe** : Renseignez le mot de passe de l'adresse e-mail.
- **Serveur EUROPE (sortant)** : smtp.mail.ovh.net **ou** ssl0.ovh.net.
- **Serveur AMERIQUE/ASIE-PACIFIQUE (sortant)** : smtp.mail.ovh.ca.
- **Port** : 465.
- **Type de sécurité** : SSL/TLS.

### Cas d'usage

**Vous avez utilisé toutes les adresses comprises dans votre offre ?**

- Consultez les questions de [notre FAQ e-mail](pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails).
- Consultez l'ensemble de nos offres e-mail [Zimbra](/links/web/emails-zimbra) ou [Exchange](/links/web/emails) pour compléter votre offre MX Plan sur le même nom de domaine.

## Aller plus loin

[Utiliser le webmail Roundcube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube)

[Utiliser le webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[Utiliser le webmail Outlook Web App (OWA)](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).