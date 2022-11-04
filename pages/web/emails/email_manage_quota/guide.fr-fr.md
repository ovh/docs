---
title: "Gérer l'espace de stockage d'un compte e-mail"
slug: manage-email-quota
excerpt: "Découvrez comment gérer et optimiser l'espace de stockage d'une adresse e-mail "
section: 'Diagnostic'
order: 02
---

**Dernière mise à jour le 03/11/2022**

## Objectif

Vous détenez une ou plusieurs des 3 solutions e-mail OVHcloud. Chaque compte e-mail dispose d'un espace de stockage dédié. Il est parfois nécessaire de bien gérer son espace de stockage pour éviter sa saturation, aussi appelé « overquota ». Par défaut, les e-mails que vous recevez et envoyez sont stockés sur le serveur de votre compte e-mail. Il est également possible, via un logiciel de messagerie (Outlook, Mail de macOS, Thunderbird, etc.), de stocker vos e-mails en local sur votre ordinateur.

**Découvrez comment gérer l'espace de stockage d'une adresse e-mail.**

## Prérequis

- Disposer d'une solution e-mail OVHcloud qui doit avoir été configurée au préalable (**MX Plan**, proposée parmi nos [offres d’hébergement web](https://www.ovhcloud.com/fr/web-hosting/), incluse dans un [hébergement Start10M gratuit](https://www.ovhcloud.com/fr/domains/free-web-hosting/) ou commandée séparément comme solution autonome, telles que [**Hosted Exchange**](https://www.ovhcloud.com/fr/emails/hosted-exchange/) ou [**Email Pro**](https://www.ovhcloud.com/fr/emails/email-pro/))
- Être connecté à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, partie `Web Cloud`{.action}.
- Disposer des informations de connexion aux adresses e-mails concernées.

> [!primary]
>
> **Cas particuliers**
>
> - Concernant l’hébergement gratuit Start 10M : il est impératif de l’activer au préalable afin de pouvoir créer une adresse e-mail. Vous pouvez effectuer cette opération depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, en vous positionnant sur le nom de domaine concerné.
> - Dans le cadre d'un [hébergement web](https://www.ovhcloud.com/fr/web-hosting/){.external}, il est nécessaire d'activer votre offre MX Plan incluse avant de poursuivre la lecture de cette documentation. Pour cela, consultez notre guide « [Activer les adresses e-mail incluses dans votre hébergement web](https://docs.ovh.com/fr/hosting/activer-email-hebergement-web/) ».

## En pratique <a name="instructions"></a>

Pour organiser la gestion de l'espace de stockage de votre compte e-mail, ce guide est décomposé en 3 étapes. Elles peuvent être réalisées dans l'ordre ou indépendament selon votre besoin.

- [**Vérifier**](#check-quota) le quota actuel de vote compte e-mail. Cette étape vous permettra simplement d'évaluer votre consommation actuelle, en vue des 2 étapes suivantes.
- [**Optimiser**](#optimise) son compte e-mail. Vous trouverez dans cette étapes, des astuces qui vous permettront de maintenir un espace de stockage sans éléments superflux.
- [**Archiver** ou **Changer d'offre e-mail**](#archiveorswitch). Si l'étape précédente ne suffit pas, vous trouverez les informations nécessaires pour configurer un espace d'archivage local (sur votre ordinateur) pour vos e-mails via votre logiciel de messagerie. Vous trouverez également les informations nécessaires pour changer l'offre e-mail de votre compte vers une offre offrant plus d'espace de stockage, si cela est possible.

![email](images/email-quota-intro.gif){.thumbnail}

### 1- **Vérifier** le quota actuel de vote compte email <a name="check-quota"></a>

Il existe plusieurs manières de vérifier la consommation de l'espace de stockage de votre compte e-mail. Depuis l'espace client si vous avez la gestion du service e-mail concerné ou depuis le webmail si vous êtes simplement l'utilisateur du compte e-mail.

#### Depuis l'espace client <a name="quotacontrolpanel"></a>

Depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, dirigez-vous dans la partie `Web Cloud`{.action}. Suivez les instructions selon votre offre:

> [!tabs]
> **MXplan**
>>
>> Cliquez sur `Emails`{.action}, puis choisissez le nom du service MX Plan concerné. Poursuivez selon la version que vous possédez. Positionnez-vous sur l'onglet `Comptes e-mail`{.action}. La fenêtre qui apparaît affiche les comptes e-mail existants. Vous pouvez observer l'état de consommation du stockage de votre adresse e-mail dans la colonne `Taille`.
>>![email](images/email-quota-quotacontrolpanel01.png){.thumbnail}
>>
> **Email Pro**
>> Cliquez sur `E-mail Pro`{.action}, puis choisissez le nom de la plateforme concernée. Positionnez-vous sur l'onglet `Comptes e-mail`{.action}. La fenêtre qui apparaît affiche les comptes e-mail existants. Vous pouvez observer l'état de consommation du stockage de votre adresse e-mail dans la colonne `Taille`.
>>![email](images/email-quota-quotacontrolpanel02.png){.thumbnail}
>>
> **Exchange**
>> Cliquez sur `Microsoft`{.action}/`Exchange`{.action}, puis choisissez le nom de la plateforme concernée. Positionnez-vous sur l'onglet `Comptes e-mail`{.action}. La fenêtre qui apparaît affiche les comptes e-mail existants. Vous pouvez observer l'état de consommation du stockage de votre adresse e-mail dans la colonne `Taille`.
>>![email](images/email-quota-quotacontrolpanel03.png){.thumbnail}
>>

#### Depuis le Webmail <a name="quotawebmail"></a>

Pour vous connecter au webmail, dirigez-vous vers la page <https://www.ovhcloud.com/fr/mail/> et saisissez les informations de connexion à votre compte e-mail, puis choisissez le webmail correspondant à votre offre:

> [!tabs]
> **MXplan OWA** / **Email Pro** / **Exchange**
>>
>> Cliquez sur le bouton <i class=".icons-gear-concept icons-masterbrand-blue"></i> en haut à droite de votre écran, cliquez sur `Options`{.action}. Cliquez sur `Mon compte`{.action} dans la section `Général`{.action} dans la colonne de gauche. Vous pouvez visualiser le quota actuel de votre compte dans la partie inférieure droite du formulaire.
>>![email](images/email-quota-webmail01.png){.thumbnail}
>>
> **MXplan Roundcube**
>>
>> Lorsque vous êtes connecté à Roundcube. Le quota est directement visible dans la partie inférieure gauche, matérialisé par un camembert avec le pourcentage consommé.
>>![email](images/email-quota-webmail02.png){.thumbnail}
>>

### 2- **Optimiser** son compte e-mail <a name="optimise"></a>

Si votre compte e-mail est saturé, cela signifie que vous n'êtes plus en mesure de recevoir des e-mails. L'expéditeur est notifié par e-mail, une erreur indiquant qu'il est impossible de transmettre un e-mail en raison d'une saturation de son espace de stockage. Néanmoins, lorsque votre compte e-mail est saturé, il est toujours possible d'envoyer des e-mails, ces e-mails ne pourront pas être stockés dans la "boite d'envoi" de votre compte e-mail.

#### Optimiser l'espace aloué à votre compte e-mail

Avant toute autre opération sur votre compte e-mail, il est nécessaire de bien prendre connaissance du contenu de votre compte e-mail afin de supprimer tout les éléments superflux que vous n'avez pas la nécessité de conserver. Nous vous invitons à vérifier des dossiers en particulier:

- `1`{.action} **La Corbeille (trash)**: Celle-ci contient les éléments que vous avez supprimés, pour éviter de cumulé des e-mails dans ce dossier, nous vous conseillons de vider régulièrement celle-ci
- `2`{.action}**La boite d'envoi (send messages)**: Lorsque vous envoyez un e-mai, celui-ci est transmis au destinataire, mais aussi conservé sur votre compte e-mail dans la boite d'envoi. De la même façon, nous vous conseillons de purger celle-ci régulièrement ou d'archiver son contenu en local sur votre ordinateur ou un espace de stockage "cloud".
- `3`{.action}**Les e-mails stockés contenant des pièces jointes volumineuses**: Les e-mails contenant des pièces jointes consomment davantage d'espace sur votre compte e-mail. Nous vous conseillons stocker les éléments volumineux sur un espace de stockage local (ordinateur) ou distant (cloud).
- `4`{.action}**Trier ses dossiers**: Lorsque vous avez beaucoup de dossiers sur votre compte e-mail, il est moins aisé de prendre la mesure de l'espace stocké sur votre compte e-mail. C'est pourquoi, nous vous conseillons très simplement de faire l'inventaire de vos dossiers.

![email](images/email-quota-optimise01.png){.thumbnail}

#### Augmenter la capacité de votre compte e-mail

Il est possible d'augmenter la capacité de stockage de votre compte e-mail, si celui-ci n'est pas au maximum de sa capacité. Vous trouverez ci-dessous, la démarche à suivre en fonction de votre offre:

> [!tabs]
> **MXplan**
>>
>> Un compte Mxplan peut faire entre 2,5Mo et 5Go. Si votre compte e-mail est saturé, que sa capacité est inférieure 5Go, vous pouvez modifier sa capacité via l'espace client.
>> Depuis l'onglet `Comptes e-mail`{.action}, cliquez sur le bouton <i class="icons-ellipsis icons-border-rounded icons-masterbrand-blue"></i> à droite du compte à modifier, puis cliquez sur `Modifier`{.action}.
>> Depuis la case `Quota`{.action}, sélectionner la taille qui vous convient, cliquez sur `suivant`{.action} puis `Valider`{.action}.
>> ![email](images/email-quota-more01.png){.thumbnail}
>>
> **Email Pro**
>> 
>> L'offre Email Pro dispose d'une capacité unique de 10Go. Vous devrez passer sur une offre bénéficiant de plus d'espace. Pour cela, suivez la section suivante de ce guide, [« Changer d'offre pour augmenter sa capacité »](#switchingoffer).
>>
> **Exchange**
>>
>> Si votre compte Exchange arrive à saturation des 50Go, il est possible de souscrire à une option d'extension pour étendre sa capacité à 300Go.
>> Depuis l'onglet `Comptes e-mail`{.action} de votre plateforme, cliquez sur le bouton <i class="icons-ellipsis icons-border-rounded icons-masterbrand-blue"></i> à droite du compte à modifier, puis cliquez sur `Augmenter la capacité à 300Go`{.action}. Choisissez le mode de facturation qui vous convient et cliquez sur `valider`{.action}.
>>![email](images/email-quota-more02.png){.thumbnail}
>>

### 3- **Archiver** ou **Changer d'offre e-mail** <a name="archiveorswitch"></a>

#### Archiver vos e-mail en local sur votre ordinateur

> [!warning]
> 
> Les informations qui suivent sont basées sur une configuration IMAP de votre compte e-mail, cette configuration étant la plus répandu. La configuration POP est fondée sur un principe de stockage des e-mails en local. Dans notre contexte, il n'est donc pas pertinent de décrire comment archiver des e-mails qui sont déjà stockés localement sur votre ordinateur.

Lorsque vous avez configuré votre adresse e-mail sur votre client de messagerie en IMAP, **par défaut**, le contenu visible correspond à ce qui est **synchronisé sur le serveur e-mail**. Cela signifie que les e-mails sont chargés sur votre ordinateur mais disparaissent si on les supprime du serveur. Pour les **archive sur votre ordinateur**, vous devez configurer votre logiciel de messagerie.

![email](images/email-quota-step03-archive.png){.thumbnail}

Si vous le souhaitez, il est possible de libérer l'espace de stockage de votre compte e-mail en stockant vos e-mails directement sur votre ordinateur.Pour cela il vous sera necessaire de faire appel à un logiciel de messagerie installé sur votre ordinateur. En effet, le logiciel de messagerie aura pour rôle de convertir vos e-mails en fichiers pour pouvoir les stocker sur votre ordinateur. Il est néanmoins nécessaire de paramétrer la fonction « archive » de votre logiciel de messagerie. Les e-mails seront alors dans un dossier « local » et non directement sur votre compte e-mail.

Vous trouverez ci-dessous, une liste non-exhaustive des guides de configuration pour client de messagerie sur ordinateur, en fonction de l'offre que vous possédez:

> [!tabs]
> **MXplan**
>>
>> **Windows**
>> - [Courrier sur Windows 10](https://docs.ovh.com/fr/emails/configuration-courrier-sur-windows-10/)(inclus avec Windows)
>> - [Outlook](https://docs.ovh.com/fr/emails/configuration-outlook-2016/)
>> - [Thunderbird](https://docs.ovh.com/fr/emails/configuration-email-configuration-pour-thunderbird/)(Gratuit)
>> **macOS**
>> - [Mail](https://docs.ovh.com/fr/emails/guide-configuration-mail-de-mac-el-capitan/)(inclus avec macOS)
>> - [Outlook](https://docs.ovh.com/fr/emails/configuration-outlook-2016-mac/)
>> - [Thunderbird](https://docs.ovh.com/fr/emails/guide-de-configuration-email-pour-thunderbird-mac/)(Gratuit)
>>
> **E-mail Pro**
>>
>> **Windows**
>> - [Courrier sur Windows 10](https://docs.ovh.com/fr/emails-pro/configuration-courrier-windows-10/)(inclus avec Windows)
>> - [Outlook](https://docs.ovh.com/fr/emails-pro/configuration-outlook-2016/)
>> - [Thunderbird](https://docs.ovh.com/fr/emails-pro/configuration-thunderbird-45-8-0/)(Gratuit)
>> **macOS**
>> - [Mail](https://docs.ovh.com/fr/emails-pro/configurer-email-pro-mail-macos/)(inclus avec macOS)
>> - [Outlook](https://docs.ovh.com/fr/emails-pro/configuration-outlook-2016-mac/)
>> - [Thunderbird](https://docs.ovh.com/fr/emails-pro/configuration-thunderbird-macos/)(Gratuit)
>>
> **Exchange**
>>
>> **Windows**
>> - [Courrier sur Windows 10](https://docs.ovh.com/fr/microsoft-collaborative-solutions/configuration-courrier-windows-10/)(inclus avec Windows)
>> - [Outlook](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-configuration-automatique-sous-outlook-2016/)
>> - [Thunderbird](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-configuration-de-thunderbird/)(Gratuit)
>> **macOS**
>> - [Mail](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-configuration-automatique-sous-mail-mac/)(inclus avec macOS)
>> - [Outlook](https://docs.ovh.com/fr/microsoft-collaborative-solutions/configuration-outlook-2016-mac/)
>> - [Thunderbird](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-configuration-de-thunderbird-mac/)(Gratuit)
>>

Une fois votre logiciel de messagerie installé, suivez les informations suivantes, pour préparer le dossier d'archive sur votre logiciel de messagerie.

> [!tabs]
> **Outlook**
>>
>> Sur Outlook, assurez-vous que dans votre colonne de gauche, le dossier « archive » ou « sur mon ordinateur » soit présent pour pouvoir y déposer les éléments que vous souhaitez garder en locale sur votre ordinateur. Consulter la documentation de Microsoft pour préparer votre dossier d'archive:
>> - [Archivage dans Outlook pour Windows](https://support.microsoft.com/fr-fr/office/archivage-dans-outlook-pour-windows-25f75777-3cdc-4c77-9783-5929c7b47028)
>> - [À propos des dossiers sur mon ordinateur dans Outlook pour Mac](https://support.microsoft.com/fr-fr/office/%C3%A0-propos-des-dossiers-sur-mon-ordinateur-dans-outlook-pour-mac-c91b8729-924d-4c25-a5f6-38883d0f763d)
>>
> **Mail macOS**
>>
>> Depuis Mail sur mac OS, créez un dossier qui apparaîtra dans la section « Sur mon Mac » dans la colonne de gauche. Pour se faire, suivez la documentation d'Apple:
>> - [Créer ou supprimer des boites aux lettres dans Mail sur Mac](https://support.apple.com/fr-fr/guide/mail/mlhlp1021/15.0/mac/12.0)
>>
> **Thunderbird**
>>
>> Via thunderbird depuis Windows, macOS ou Linux vous pouvez déplacer vos e-mails dans un dossier du volet gauche 
>> - [Archivage des messages](https://support.mozilla.org/fr/kb/archivage-des-messages)
>>

#### Changer d'offre pour augmenter sa capacité <a name="switchingoffer"></a>

Sélectionnez dans le menu, ci-dessous, l'offre actuelle de votre compte e-mail :

> [!tabs]
> **MXplan**
>>
>> Si la capacité de votre compte e-mail est déjà à son maximum de 5Go, vous pouvez opter pour une migration vers une offre [**Email Pro** de 10 Go](https://www.ovhcloud.com/fr/emails/email-pro/) ou [**Hosted Exchange** de 50Go](https://www.ovhcloud.com/fr/emails/hosted-exchange/). Pour cela, nous vous invitons à commander l'offre qui vous convient et suivre notre documentation [« Migrer une adresse e-mail MX Plan vers un compte E-mail Pro ou Exchange »](https://docs.ovh.com/fr/microsoft-collaborative-solutions/migration-adresse-e-mail-mutualisee-vers-exchange/). 
>>
> **Email Pro**
>>
>> L'offre Email Pro dispose d'une capacité unique de 10Go. Vous pouvez opter pour une migration vers une offre [**Hosted Exchange** de 50Go](https://www.ovhcloud.com/fr/emails/hosted-exchange/). Pour cela, nous vous invitons à commander l'offre qui vous convient et uivre notre documentation [« Migrer une adresse e-mail MX Plan vers un compte E-mail Pro ou Exchange »](https://docs.ovh.com/fr/microsoft-collaborative-solutions/migration-adresse-e-mail-mutualisee-vers-exchange/).
>>
> **Exchange**
>>
>> Si votre compte Exchange arrive à saturation des 50Go d'espace, il est possible de souscrire à une option d'extension
pour étendre sa capacité à 300Go.
>> Depuis l'onglet `Comptes e-mail`{.action} de votre plateforme Exchange, cliquez sur le bouton <i class="icons-ellipsis icons-border-rounded icons-masterbrand-blue"></i> à droite du compte à modifier, puis cliquez sur `Augmenter la capacité à 300Go`{.action}.
>>

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
