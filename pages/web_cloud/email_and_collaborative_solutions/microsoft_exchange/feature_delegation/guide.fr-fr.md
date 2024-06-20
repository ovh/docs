---
title: 'Déléguer des droits sur un compte e-mail'
excerpt: 'Découvrez comment déléguer des droits de votre compte e-mail à un autre'
updated: 2024-06-19
---

## Objectif

Les services Exchange et Email Pro permettent de bénéficier d’adresses e-mail professionnelles, qui facilitent le travail collaboratif grâce à différentes fonctionnalités. L'une d'elles permet de déléguer des droits spécifiques (comme celui d'envoi ou d'accès) entre différents comptes e-mail.

**Découvrez comment déléguer des droits de votre compte e-mail à un autre.**

## Prérequis

- Avoir souscrit une offre [Exchange OVHcloud](/links/web/emails-hosted-exchange) ou [Email Pro](/links/web/email-pro)

> [!warning]
>
> **Pour l'offre [Email Pro](/links/web/email-pro)** les fonctionnalités de délégations décrites dans ce guide s'utilisent uniquement au travers du [Webmail](/links/web/email). Les protocoles permettant leur utilisation via un logiciel de messagerie nécessitent de disposer d'un compte [Exchange](/links/web/emails-hosted-exchange).

- Disposer au minimum de deux comptes e-mail actifs et configurés sur la même plateforme e-mail OVHcloud.
- Être connecté à l'[espace client OVHcloud](/links/manager).
- Disposer des identifiants relatifs au compte e-mail qui bénéficiera des nouveaux droits délégués.

## En pratique

Avant de débuter, définissez le ou les droits que vous allez déléguer. Pour rappel, quand vous mettez en place une délégation, vous accordez à un ou plusieurs comptes e-mail des droits supplémentaires sur le compte e-mail concerné.

|Droits|Description|
|---|---|
|**Droit d'envoi**|Permet de réaliser un envoi « en tant que ». Ce n'est pas le compte effectuant l'envoi qui apparaîtra en tant qu'expéditeur, mais le compte pour lequel il dispose du droit d'envoi. Aucune mention ne permettra de savoir que le message a été envoyé par le biais de quelqu'un d'autre.|
|**Droit d'envoyer de la part**|Permet de réaliser un envoi « de la part de ». Ce n'est pas le compte effectuant l'envoi qui apparaîtra en tant qu'expéditeur, mais le compte pour lequel il dispose du droit d'envoyer de la part de. Une mention indiquera cependant que le message a été envoyé de la part du compte ayant réalisé l'envoi.|
|**Droit d'accès**|Donne un accès en lecture seule au compte concerné par la création de la délégation. Cet accès ne permet pas d'effectuer des envois, mais de consulter le contenu.|

> [!warning]
>
> Vous n'avez pas la possibilité de cumuler le « droit d'envoi » avec le « droit d'envoyer de la part de ». Les autres combinaisons sont quant à elles possibles.
>

Lorsque vous avez identifié le compte concerné par la délégation, déterminé les droits que vous allez déléguer, ainsi qu'identifié le ou les comptes qui bénéficieront de ces droits supplémentaires, poursuivez vers la première étape.

### Étape 1 : mettre en place la délégation

Pour effectuer cette manipulation, connectez-vous à votre [espace client OVHcloud](/links/manager):

- **Exchange**: Cliquez sur `Microsoft`{.action}, puis sur `Exchange`{.action}.
- **Email Pro**: Cliquez sur `Email Pro`{.action}.

Cliquez ensuite sur le nom du service e-mail dans lequel se trouve le compte concerné par la création de la délégation. Positionnez-vous enfin sur l'onglet `Comptes e-mail`{.action}.

Le tableau qui apparaît affiche les comptes liés à votre service e-mail. Cliquez sur les trois points à droite du compte pour lequel vous souhaitez créer une délégation,  puis sur `Gérer les délégations`{.action}.

![delegation](images/delegation-step1.png){.thumbnail}

Sur la page qui s'affiche, sélectionnez les droits que vous souhaitez déléguer. Vous devez les faire correspondre à un ou plusieurs comptes bénéficiaires. Ensuite, cliquez sur `Suivant`{.action}.

![delegation](images/delegation-step2.png){.thumbnail}

Prenez quelques instants pour vérifier attentivement le récapitulatif des changements. Si tout est correct, cliquez sur `Valider`{.action}. Sous quelques minutes, la délégation sera créée sur nos serveurs.

Une fois la délégation configurée, *test@mypersonaldomain.ovh* pourra effectuer les actions sélectionnées sur le compte *test2@mypersonaldomain.ovh*.

### Étape 2 : utiliser les droits délégués

Maintenant que la délégation est en place, il ne reste plus qu'à l'utiliser. Assurez-vous avant de poursuivre d'être en possession des identifiants relatifs au compte e-mail qui bénéficie des nouveaux droits délégués.

La manière de faire est différente selon le ou les droits que vous avez délégués et le logiciel ou l'interface web que vous utilisez pour accéder à votre compte e-mail. Poursuivez la lecture de cette documentation en fonction du ou des droits que vous avez délégués.

- [Utiliser son « droit d'accès »](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_delegation#21-utiliser-son-droit-dacces){.external}

- [Utiliser son « droit d'envoi »](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_delegation#22-utiliser-son-droit-denvoi){.external}

- [Utiliser son « droit d'envoyer de la part de »](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_delegation#23-utiliser-son-droit-denvoyer-de-la-part-de){.external}

> [!warning]
>
> Cette solution requiert des connaissances sur le logiciel ou l'interface que vous allez utiliser. Quelques informations sur la manière de procéder sont présentes ci-dessous. Cependant, nous vous recommandons de faire appel à un [partenaire spécialisé](/links/partner) et/ou de vous rapprocher de l’éditeur du logiciel ou de l’interface si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance.
>

#### 2.1 Utiliser son « droit d'accès »

- **Depuis le webmail Outlook Web App (OWA)**

Rendez-vous à l'adresse <https://www.ovh.com/fr/mail/> et renseignez les identifiants du compte e-mail disposant du droit délégué. Une fois connecté, effectuez un clic droit sur le nom du compte dans le menu à gauche, puis sélectionnez `Ajouter un dossier partagé`{.action}.

Dans la fenêtre qui apparaît, indiquez le nom du compte pour lequel vous bénéficiez du droit délégué puis cliquez sur `Ajouter`{.action}. Le compte s'affiche alors dans le menu de gauche, vous permettant d'en explorer son contenu.

![delegation](images/delegation-step3.png){.thumbnail}

- **Depuis le logiciel Outlook pour Windows**

> [!warning]
>
> L'utilisation de cette fonctionnalité **via Outlook** est uniquement disponible pour un compte e-mail [Exchange](/links/web/emails-hosted-exchange).

Sur votre logiciel Outlook, cliquez sur `Fichier`{.action} dans la barre de menu en haut de votre écran puis cliquez sur `Paramètres du compte`{.action}. Dans le menu déroulant, cliquez de nouveau sur `Paramètres du compte`{.action}. Dans la fenêtre qui s'affiche, sélectionnez le compte bénéficiant du droit délégué puis cliquez sur `Modifier`{.action}.

![delegation](images/delegation-step4.png){.thumbnail}

Cliquez à présent sur `Paramètres supplémentaires`{.action}. Dans la nouvelle fenêtre, positionnez-vous sur l'onglet `Avancé`{.action} puis cliquez sur `Ajouter`{.action}. Renseignez le nom du compte pour lequel vous bénéficiez du droit délégué puis validez l'ajout jusqu'à son terme. Le compte s'affiche alors dans le menu de gauche de votre logiciel, vous permettant d'en explorer son contenu.

![delegation](images/delegation-step5.png){.thumbnail}

#### 2.2 Utiliser son « droit d'envoi »

- **Depuis le webmail Outlook Web App (OWA)**

Rendez-vous à l'adresse <https://www.ovh.com/fr/mail/> et renseignez les identifiants du compte e-mail disposant du droit délégué. Une fois connecté, débutez la rédaction d'un nouveau message en appuyant sur le bouton `+ Nouveau`{.action}.

Dans la zone qui apparaît, cliquez sur le bouton représentant trois points puis sur `Afficher le champ De`{.action}. Cliquez ensuite sur le bouton `De`{.action} et sélectionnez l'adresse qui apparaîtra en tant qu'expéditeur (pour laquelle vous disposez du droit délégué). Si celle-ci n'apparaît pas, supprimez celle déjà renseignée et inscrivez celle souhaitée.

Il ne vous reste plus qu'à rédiger votre message et à l'envoyer.

![delegation](images/delegation-step6.png){.thumbnail}

- **Depuis le logiciel Outlook pour Windows**

> [!warning]
>
> L'utilisation de cette fonctionnalité **via Outlook** est uniquement disponible pour un compte e-mail [Exchange](/links/web/emails-hosted-exchange).

Sur votre logiciel Outlook, débutez la rédaction d'un nouveau message. Assurez-vous que le bouton `De`{.action} apparaît dans la fenêtre de rédaction. Si ce n'est pas le cas, positionnez-vous sur l'onglet `Options`{.action} puis cliquez sur `Afficher De`{.action}.

Cliquez ensuite sur le bouton `De`{.action} et sélectionnez l'adresse qui apparaîtra en tant qu'expéditeur (pour laquelle vous disposez du droit délégué). Si celle-ci n'apparaît pas, cliquez sur `Autre`{.action}, renseignez l'adresse souhaitée, puis validez.

Il ne vous reste plus qu'à rédiger votre message et à l'envoyer.

![delegation](images/delegation-step7.png){.thumbnail}

#### 2.3 Utiliser son « droit d'envoyer de la part de »

- **Depuis le webmail Outlook Web App (OWA)**

Rendez-vous à l'adresse <https://www.ovh.com/fr/mail/> et renseignez les identifiants du compte e-mail disposant du droit délégué. Une fois connecté, débutez la rédaction d'un nouveau message en appuyant sur le bouton `+ Nouveau`{.action}.

Dans la zone qui s'affiche, cliquez sur le bouton représentant trois points puis sur `Afficher le champ De`{.action}. Cliquez ensuite sur le bouton `De`{.action} et sélectionnez l'adresse qui apparaîtra en tant qu'expéditeur (pour laquelle vous disposez du droit délégué). Si celle-ci n'apparaît pas, supprimez celle déjà renseignée et inscrivez celle souhaitée.

Il ne vous reste plus qu'à rédiger votre message et à l'envoyer.

![delegation](images/delegation-step6.png){.thumbnail}

- **Depuis le logiciel Outlook pour Windows**

> [!warning]
>
> L'utilisation de cette fonctionnalité **via Outlook** est uniquement disponible pour un compte e-mail [Exchange](/links/web/emails-hosted-exchange).

Sur votre logiciel Outlook, débutez la rédaction d'un nouveau message. Assurez-vous que le bouton `De`{.action} apparaît dans la fenêtre de rédaction. Si ce n'est pas le cas, positionnez-vous sur l'onglet `Options`{.action} puis cliquez sur `Afficher De`{.action}.

Cliquez ensuite sur le bouton `De`{.action} et sélectionnez l'adresse qui apparaîtra en tant qu'expéditeur (pour laquelle vous disposez du droit délégué). Si celle-ci n'apparaît pas, cliquez sur `Autre`{.action}, renseignez l'adresse souhaitée, puis validez.

Il ne vous reste plus qu'à rédiger votre message et à l'envoyer.

![delegation](images/delegation-step7.png){.thumbnail}

## Aller plus loin <a name="go-further"></a>

[Utiliser son adresse e-mail depuis le webmail Outlook Web App (OWA)](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)

[Partager un dossier depuis l'interface OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_directory_sharing)

[Créer un groupe de contacts](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_groups)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).