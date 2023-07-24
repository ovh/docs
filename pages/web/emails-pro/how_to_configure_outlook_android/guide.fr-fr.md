---
title: "Configurer son compte E-mail Pro sur Android avec l'application Microsoft Outlook"
excerpt: "Découvrez comment configurer un compte E-mail Pro sur Adroid avec l'application Microsoft Outlook"
updated: 2023-07-24
---

## Objectif

Les comptes E-mail Pro peuvent être configurés sur différents logiciels de messagerie compatibles. Cela permet d'utiliser votre adresse e-mail depuis l'appareil de votre choix.

**Découvrez comment configurer un compte E-mail Pro sur Android avec l'application Microsoft Outlook.**

## Prérequis

- Disposer d'une offre [E-mail Pro](https://www.ovhcloud.com/fr/emails/email-pro/){.external}.
- Avoir installé l'application Microsoft Outlook sur votre appareil Android. Vous pouvez télécharger cette dernière depuis le *Google Play Store*.
- Préparer les identifiants relatifs à l'adresse e-mail que vous souhaitez paramétrer (voir l'[étape 1](#step1) ci-dessous si besoin).

## En pratique

### Étape 1 : récupérer les informations du compte E-mail Pro <a name="step1"></a>

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} puis rendez-vous dans la partie `Web Cloud`. Dans la colonne de gauche, cliquez sur `E-mails Pro`{.action} puis choisissez la plateforme *E-mail Pro* où se trouve l'adresse e-mail à configurer.

Sur la nouvelle page, cliquez sur l'onglet `Comptes e-mail`{.action}.

![Outlook-android-emailpro-login](images/ol-android-ep-login.png){.thumbnail}

Récupérez le nom du serveur *E-mail Pro* qui apparaît en dessous de la mention `Webmail`{.action}. Dans notre exemple illustré ci-dessus il s'agit de **proX.mail.ovh.net**.

> [!warning]
>
> Récupérez bien le bon nom du serveur *E-mail Pro* où se trouve l'adresse e-mail que vous souhaitez configurer. En effet, celui-ci peut différer en fonction de l'ancienneté de votre offre *E-mail Pro* (pro1.mail.ovh.net, pro2.mail.ovh.net, etc.).
> 

Toujours dans l'onglet `Comptes e-mail`{.action} de votre plateforme *Email Pro*, un tableau s'affiche avec votre (vos) adresse(s) *E-mail Pro*.

Si vous ne vous souvenez plus du mot de passe d'accès à l'adresse e-mail que vous souhaitez configurer, vous pouvez le modifier à l'aide du bouton `...`{.action} situé sur la même ligne à droite du compte e-mail.
Sélectionnez ensuite `Modifier`{.action}, choisissez un nouveau mot de passe puis confirmez-le. Cliquez enfin sur `Suivant`{.action} puis sur `Valider`{.action} dans la seconde fenêtre.

Le changement du mot de passe se fait en 15 minutes approxymativement.

> [!warning]
>
> Si vous changez le mot de passe de votre adresse e-mail et que celle-ci est déjà utilisée par un autre appareil (logiciel de messagerie, ordinateur, tablette, smartphone, photocopieur, etc.), vous devrez mettre à jour le mot de passe sur ces autres appareils.
> En effet, ces derniers ne seront plus en mesure de se connecter avec votre adresse e-mail avec l'ancien mot de passe.
>

A la fin de cette première étape, vous devez désormais avoir les éléments suivants en votre possession :

- le nom du serveur *E-mail Pro* (pro1.mail.ovh.net, pro2.mail.ovh.net, etc.)
- l'adresse e-mail à configurer
- le mot de passe de l'adresse e-mail à configurer sur Android via l'application Microsoft Outlook

### Étape 2 : configurer votre adresse sur Android via l'application Microsoft Outlook <a name="step2"></a>

Lancer sur votre appareil Android l'application Microsoft Outlook. Si vous ne l'avez pas déjà installée, téléchargez-la depuis le *Google Play Store*.

|||
|---|---|
|![Outlook-android-emailpro-login](images/Screenshot_Outlook_1.png){.thumbnail}|![Outlook-android-emailpro-login](images/Screenshot_Outlook_3.png){.thumbnail}|

Une fois ouverte, cliquez sur `Ajouter un compte`{.action}, saisissez votre adresse e-mail complète dans le formulaire intitulé `Entrez votre adresse de courrier`{.action} puis cliquez sur `Continuer`{.action}.

Dès lors, deux choix de configuration vous sont proposés en bas de votre écran : `IMAP`{.action} et `POP3`{.action}.

|||
|---|---|
| ![Outlook-android-emailpro-login](images/Screenshot_Outlook_4.png){.thumbnail} | ![Outlook-android-emailpro-login](images/Screenshot_Outlook_2.png){.thumbnail} |

> [!success]
>
> Le protocole de synchronisation **IMAP** permet de récupérer une *image* des e-mails présents dans votre adresse *E-mail Pro* côté serveur pour l'afficher dans votre application Microsoft Outlook.
> Ceci **sans** supprimer le mail du serveur *E-mail Pro* où se trouve votre adresse e-mail. Ce protocole est très utile notamment si vous avez plusieurs appareils configurés avec votre adresse e-mail.
>
> Le protocole **POP3** va, par défaut, récupérer l'e-mail reçu sur le serveur *E-mail Pro* où se trouve votre adresse e-mail pour le garder dans l'application / le logiciel configuré avec cette dernière. De ce fait l'e-mail n'est plus présent sur le serveur *E-mail Pro* mais uniquement sur l'appareil configuré avec votre adresse e-mail via le protocole POP.
> Ce protocole n'est pas recommandé si vous avez plusieurs appareils configurés avec votre adresse e-mail. En effet, l'e-mail ne sera présent que sur l'un des appareils configuré en **POP3** et pas sur l'ensemble des appareils configurés avec votre adresse e-mail.
>
> Cependant et malgré une configuration en **POP3**, certains logiciels de messagerie / applications renvoient tout de même une copie de l'e-mail sur le serveur où se trouve votre adresse e-mail. Cette copie peut rester de manière temporaire ou permanente.
> Pour savoir si votre application / logiciel fait parti de ceux-là, contactez l'éditeur du logiciel directement.
>
>

#### Cas n°1 : configuration de l'application Microsoft Outlook sur Android avec le protocole "IMAP"

Cliquez sur `IMAP`{.action} en bas de votre écran. 

Sur la nouvelle page qui s'affiche, votre adresse e-mail est pré-remplie.

Saisissez le mot de passe de votre adresse *E-mail Pro* dans le formulaire `Mot de passe`{.action} juste en dessous de l'endroit où votre adresse e-mail est déjà pré-remplie.

Dans les deux formulaires qui suivent et de manière totalement **facultative**, vous pouvez renseigner un `Nom complet`{.action} et une `Description`{.action}.

Pour poursuivre, cochez le bouton intitulé `PARAMETRES AVANCÉS`{.action} pour faire apparaître le reste du menu de configuration.

Remplissez ensuites les différents formulaires à l'aide des informations qui suivent.

Pour la section **Serveur de courrier entrant IMAP** :

 - **Nom d'hôte IMAP** : précisez le nom de votre serveur *E-mail Pro* récupéré précédemment lors de l'[étape 1](#step1) : (exemples : *pro1.mail.ovh.net*, *pro2.mail.ovh.net*, etc.) ;
 - **Port** : saisissez le numéro de port *993* ;
 - **Type de sécurité** : choisissez parmi la liste déroulante la sécurité *SSL/TLS* ;
 - **Nom d'utilisateur IMAP** : précisez l'adresse e-mail que vous souhaitez configurer ;
 - **Mot de passe IMAP** : renseignez le mot de passe d'accès à l'adresse e-mail que vous souhaitez configurer.

Pour la section **Serveur de courrier sortant SMTP** :

 - **Nom d'hôte SMTP** : précisez le nom de votre serveur *E-mail Pro* récupéré précédemment lors de l'[étape 1](#step1) : (exemples : *pro1.mail.ovh.net*, *pro2.mail.ovh.net*, etc.) ;
 - **Port** : saisissez le numéro de port *587* ;
 - **Type de sécurité** : choisissez parmi la liste déroulante la sécurité *StartTls* ;
 - **Nom d'utilisateur SMTP** : précisez l'adresse e-mail que vous souhaitez configurer ;
 - **Mot de passe SMTP** : renseignez le mot de passe d'accès à l'adresse e-mail que vous souhaitez configurer.

Vérifiez ensuite que l'ensemble des paramètres saisis correspondent aux éléments indiqués ci-dessus puis cliquez sur l'icône en forme de `V`{.action} en haut à droite de votre écran.

#### Cas n°2 : configuration de l'application Microsoft Outlook sur Android avec le protocole "POP3"

Cliquez sur `POP3`{.action} en bas de votre écran. 

Sur la nouvelle page qui s'affiche, votre adresse e-mail est pré-remplie.

Saisissez le mot de passe de votre adresse *E-mail Pro* dans le formulaire `Mot de passe`{.action} juste en dessous de l'endroit où votre adresse e-mail est déjà pré-remplie.

Dans les deux formulaires qui suivent et de manière totalement **facultative**, vous pouvez renseigner un `Nom complet`{.action} et une `Description`{.action}.

Pour poursuivre, cochez le bouton intitulé `PARAMETRES AVANCÉS`{.action} pour faire apparaître le reste du menu de configuration.

Remplissez ensuites les différents formulaires à l'aide des informations qui suivent.

Pour la section **Serveur de courrier entrant POP** :

 - **Nom d'hôte POP** : précisez le nom de votre serveur *E-mail Pro* récupéré précédemment lors de l'[étape 1](#step1) : (exemples : *pro1.mail.ovh.net*, *pro2.mail.ovh.net*, etc.) ;
 - **Port** : saisissez le numéro de port *995* ;
 - **Type de sécurité** : choisissez parmi la liste déroulante la sécurité *SSL/TLS* ;
 - **Nom d'utilisateur POP** : précisez l'adresse e-mail que vous souhaitez configurer ;
 - **Mot de passe POP** : renseignez le mot de passe d'accès à l'adresse e-mail que vous souhaitez configurer.

Pour la section **Serveur de courrier sortant SMTP** :

 - **Nom d'hôte SMTP** : précisez le nom de votre serveur *E-mail Pro* récupéré précédemment lors de l'[étape 1](#step1) : (exemples : *pro1.mail.ovh.net*, *pro2.mail.ovh.net*, etc.) ;
 - **Port** : saisissez le numéro de port *587* ;
 - **Type de sécurité** : choisissez parmi la liste déroulante la sécurité *StartTls* ;
 - **Nom d'utilisateur SMTP** : précisez l'adresse e-mail que vous souhaitez configurer ;
 - **Mot de passe SMTP** : renseignez le mot de passe d'accès à l'adresse e-mail que vous souhaitez configurer.

Vérifiez ensuite que l'ensemble des paramètres saisis correspondent aux éléments indiqués ci-dessus puis cliquez sur l'icône en forme de `V`{.action} en haut à droite de votre écran.

### Étape 3 : finaliser la configuration sur Android de l'application  Microsoft Outlook

Après avoir cliqué sur l'icône en forme de `V`{.action}, l'application va tester les paramètres et se connecter au serveur *E-mail Pro* où se trouvent votre adresse e-mail.
Cette dernière va ensuite synchroniser / récupérer le contenu de votre adresse e-mail pour l'afficher dans votre appareil.

Testez ensuite l'envoi et la réception d'e-mails depuis votre application Microsoft Outlook pour terminer la configuration.

## Aller plus loin <a name="go-further"></a>

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/directory/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.