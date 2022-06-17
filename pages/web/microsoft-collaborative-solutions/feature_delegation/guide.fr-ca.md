---
title: 'Déléguer des droits sur un compte Exchange'
slug: exchange-donner-les-droits-full-access-sur-un-compte
excerpt: 'Découvrez comment déléguer des droits de votre compte Exchange à un autre'
section: 'Fonctionnalités des comptes Exchange'
order: 3
---

**Dernière mise à jour le 02/08/2018**

## Objectif

Le service Exchange permet de bénéficier d’adresses e-mail professionnelles, qui facilitent le travail collaboratif grâce à différentes fonctionnalités. L'une d'elles permet de déléguer des droits spécifiques (comme celui d'envoi ou d'accès) entre différents comptes Exchange.

**Découvrez comment déléguer des droits de votre compte Exchange à un autre.**

## Prérequis

- Disposer d'une offre [Exchange](https://www.ovh.com/ca/fr/emails/){.external}.
- Disposer au minimum de deux comptes Exchange actifs et configurés sur la même plateforme Exchange OVH.
- Être connecté à l'[espace client OVH](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc).
- Disposer des identifiants relatifs au compte Exchange qui bénéficiera des nouveaux droits délégués.

## En pratique

Avant de débuter, définissez le ou les droits que vous allez déléguer. Pour rappel, quand vous mettez en place une délégation, vous accordez à un ou plusieurs comptes Exchange des droits supplémentaires sur le compte Exchange concerné.

|Droits|Description|
|---|---|
|Droit d'envoi|Permet de réaliser un envoi « en tant que ». Ce n'est pas le compte effectuant l'envoi qui apparaîtra en tant qu'expéditeur, mais le compte pour lequel il dispose du droit d'envoi. Aucune mention ne permettra de savoir que le message a été envoyé par le biais de quelqu'un d'autre.|
|Droit d'envoyer de la part|Permet de réaliser un envoi « de la part de ». Ce n'est pas le compte effectuant l'envoi qui apparaîtra en tant qu'expéditeur, mais le compte pour lequel il dispose du droit d'envoyer de la part de. Une mention indiquera cependant que le message a été envoyé de la part du compte ayant réalisé l'envoi.|
|Droit d'accès|Donne un accès en lecture seule au compte concerné par la création de la délégation. Cet accès ne permet pas d'effectuer des envois, mais de consulter le contenu.|

> [!warning]
>
> Vous n'avez pas la possibilité de cumuler le « droit d'envoi » avec le « droit d'envoyer de la part de ». Les autres combinaisons sont quant à elles possibles.
> 

Lorsque vous avez identifié le compte concerné par la délégation, déterminé les droits que vous allez déléguer, ainsi qu'identifié le ou les comptes qui bénéficieront de ces droits supplémentaires, poursuivez vers la première étape.

### Étape 1 : mettre en place la délégation

Pour effectuer cette manipulation, connectez-vous à votre [espace client OVH](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}. Cliquez sur `Microsoft`{.action}, puis sur `Exchange`{.action}. Cliquez ensuite sur le nom du service Exchange dans lequel se trouve le compte concerné par la création de la délégation. Positionnez-vous enfin sur l'onglet `Comptes e-mail`{.action}.

Le tableau qui apparaît affiche les comptes liés à votre service Exchange. Cliquez sur les trois points à droite du compte pour lequel vous souhaitez créer une délégation,  puis sur `Gérer les délégations`{.action}.

![delegation](images/delegation-step1.png){.thumbnail}

Sur la page qui s'affiche, sélectionnez les droits que vous souhaitez déléguer. Vous devez les faire correspondre à un ou plusieurs comptes bénéficiaires. Ensuite, cliquez sur `Suivant`{.action}.

![delegation](images/delegation-step2.png){.thumbnail}

Prenez quelques instants pour vérifier attentivement le récapitulatif des changements. Si tout est correct, cliquez sur `Valider`{.action}. Sous quelques minutes, la délégation sera créée sur nos serveurs.

Une fois la délégation configurée, *test@mypersonaldomain.ovh* pourra effectuer les actions sélectionnées sur le compte *test2@mypersonaldomain.ovh*.

### Étape 2 : utiliser les droits délégués

Maintenant que la délégation est en place, il ne reste plus qu'à l'utiliser. Assurez-vous avant de poursuivre d'être en possession des identifiants relatifs au compte Exchange qui bénéficie des nouveaux droits délégués.

La manière de faire est différente selon le ou les droits que vous avez délégués et le logiciel ou l'interface web que vous utilisez pour accéder à votre compte Exchange. Poursuivez la lecture de cette documentation en fonction du ou des droits que vous avez délégués.

- [Utiliser son « droit d'accès »](./#21-utiliser-son-droit-dacces){.external}

- [Utiliser son « droit d'envoi »](./#22-utiliser-son-droit-denvoi){.external}

- [Utiliser son « droit d'envoyer de la part de »](./#23-utiliser-son-droit-denvoyer-de-la-part-de){.external}

> [!warning]
>
> Cette solution requiert des connaissances sur le logiciel ou l'interface que vous allez utiliser. Quelques informations sur la manière de procéder sont présentes ci-dessous. Cependant, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/) et/ou de vous rapprocher de l’éditeur du logiciel ou de l’interface si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance.
>

#### 2.1 Utiliser son « droit d'accès »

- **Depuis le webmail Outlook Web Application (OWA)**

Rendez-vous à l'adresse <https://www.ovh.com/ca/fr/mail/> et renseignez les identifiants du compte Exchange disposant du droit délégué. Une fois connecté, effectuez un clic droit sur le nom du compte dans le menu à gauche, puis sélectionnez `Ajouter un dossier partagé`{.action}.

Dans la fenêtre qui apparaît, indiquez le nom du compte pour lequel vous bénéficiez du droit délégué puis cliquez sur `Ajouter`{.action}. Le compte s'affiche alors dans le menu de gauche, vous permettant d'en explorer son contenu.

![delegation](images/delegation-step3.png){.thumbnail}

- **Depuis le logiciel Outlook pour Windows**

Sur votre logiciel Outlook 2016, cliquez sur `Fichier`{.action} dans la barre de menu en haut de votre écran puis cliquez sur `Paramètres du compte`{.action}. Dans le menu déroulant, cliquez de nouveau sur `Paramètres du compte`{.action}. Dans la fenêtre qui s'affiche, sélectionnez le compte bénéficiant du droit délégué puis cliquez sur `Modifier`{.action}. 

![delegation](images/delegation-step4.png){.thumbnail}

Cliquez à présent sur `Paramètres supplémentaires`{.action}. Dans la nouvelle fenêtre, positionnez-vous sur l'onglet `Avancé`{.action} puis cliquez sur `Ajouter`{.action}. Renseignez le nom du compte pour lequel vous bénéficiez du droit délégué puis validez l'ajout jusqu'à son terme. Le compte s'affiche alors dans le menu de gauche de votre logiciel, vous permettant d'en explorer son contenu.

![delegation](images/delegation-step5.png){.thumbnail}

#### 2.2 Utiliser son « droit d'envoi »

- **Depuis le webmail Outlook Web Application (OWA)**

Rendez-vous à l'adresse <https://www.ovh.com/ca/fr/mail/> et renseignez les identifiants du compte Exchange disposant du droit délégué. Une fois connecté, débutez la rédaction d'un nouveau message en appuyant sur le bouton `+ Nouveau`{.action}.

Dans la zone qui apparaît, cliquez sur le bouton représentant trois points puis sur `Afficher le champ De`{.action}. Cliquez ensuite sur le bouton `De`{.action} et sélectionnez l'adresse qui apparaîtra en tant qu'expéditeur (pour laquelle vous disposez du droit délégué). Si celle-ci n'apparaît pas, supprimez celle déjà renseignée et inscrivez celle souhaitée. 

Il ne vous reste plus qu'à rédiger votre message et à l'envoyer. 

![delegation](images/delegation-step6.png){.thumbnail}

- **Depuis le logiciel Outlook pour Windows**

Sur votre logiciel Outlook 2016, débutez la rédaction d'un nouveau message. Assurez-vous que le bouton `De`{.action} apparaît dans la fenêtre de rédaction. Si ce n'est pas le cas, positionnez-vous sur l'onglet `Options`{.action} puis cliquez sur `Afficher De`{.action}.

Cliquez ensuite sur le bouton `De`{.action} et sélectionnez l'adresse qui apparaîtra en tant qu'expéditeur (pour laquelle vous disposez du droit délégué). Si celle-ci n'apparaît pas, cliquez sur `Autre`{.action}, renseignez l'adresse souhaitée, puis validez. 

Il ne vous reste plus qu'à rédiger votre message et à l'envoyer. 

![delegation](images/delegation-step7.png){.thumbnail}

#### 2.3 Utiliser son « droit d'envoyer de la part de »

- **Depuis le webmail Outlook Web Application (OWA)**

Rendez-vous à l'adresse <https://www.ovh.com/ca/fr/mail/> et renseignez les identifiants du compte Exchange disposant du droit délégué. Une fois connecté, débutez la rédaction d'un nouveau message en appuyant sur le bouton `+ Nouveau`{.action}.

Dans la zone qui s'affiche, cliquez sur le bouton représentant trois points puis sur `Afficher le champ De`{.action}. Cliquez ensuite sur le bouton `De`{.action} et sélectionnez l'adresse qui apparaîtra en tant qu'expéditeur (pour laquelle vous disposez du droit délégué). Si celle-ci n'apparaît pas, supprimez celle déjà renseignée et inscrivez celle souhaitée. 

Il ne vous reste plus qu'à rédiger votre message et à l'envoyer. 

![delegation](images/delegation-step6.png){.thumbnail}

- **Depuis le logiciel Outlook pour Windows**

Sur votre logiciel Outlook 2016, débutez la rédaction d'un nouveau message. Assurez-vous que le bouton `De`{.action} apparaît dans la fenêtre de rédaction. Si ce n'est pas le cas, positionnez-vous sur l'onglet `Options`{.action} puis cliquez sur `Afficher De`{.action}.

Cliquez ensuite sur le bouton `De`{.action} et sélectionnez l'adresse qui apparaîtra en tant qu'expéditeur (pour laquelle vous disposez du droit délégué). Si celle-ci n'apparaît pas, cliquez sur `Autre`{.action}, renseignez l'adresse souhaitée, puis validez. 

Il ne vous reste plus qu'à rédiger votre message et à l'envoyer. 

![delegation](images/delegation-step7.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
