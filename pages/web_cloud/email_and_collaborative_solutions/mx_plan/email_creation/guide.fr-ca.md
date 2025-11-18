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

Lors d'une première connexion au webmail, vous êtes invité à définir la langue de l'interface ainsi que le fuseau horaire sur lequel vous vous trouvez. Votre boîte de réception s'affiche ensuite. Pour découvrir comment utiliser votre adresse e-mail depuis le webmail Outlook Web App (OWA), aidez-vous de notre guide « [Utiliser son adresse e-mail depuis le webmail Outlook Web App (OWA)](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa) ».

![email](images/mxplan-creation-new-step5.png){.thumbnail .w-400}

Pour consulter vos e-mails depuis un logiciel de messagerie, référez-vous la rubrique « [Consulter un compte e-mail depuis un appareil](#configdevices) ».

#### Supprimer un compte e-mail

Depuis la nouvelle version MX Plan, on parle de *réinitialisation de compte* lorsque vous devez supprimer celui-ci.

> [!warning]
>
> Avant de supprimer des comptes e-mail, assurez-vous qu'ils ne sont pas utilisés. Une sauvegarde de ces comptes peut s'avérer nécessaire. Au besoin, consultez le guide [Migrer manuellement votre adresse e-mail](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration) qui vous décrira comment exporter les données d'un compte depuis votre espace client ou un logiciel de messagerie.

Depuis l'onglet `Comptes e-mail`{.action}, cliquez sur le bouton `...`{.action} à droite du compte à supprimer, puis cliquez sur `Réinitialiser ce compte`{.action}.

![email](images/mxplan-new-reset.png){.thumbnail .w-400}

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
- Consultez notre offre e-mail [Exchange](/links/web/emails) pour compléter votre offre MX Plan sur le même nom de domaine.

## Aller plus loin

[Utiliser le webmail Outlook Web App (OWA)](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).