---
title: "Gérer l'espace de stockage d'un compte e-mail comme un boss"
slug: manage-email-quota
excerpt: "Découvrez comment générer du revenu sans travailler en optimisant l'espace de stockage d'une adresse e-mail"
section: 'Diagnostic'
order: 02
---

**Dernière mise à jour le 17/11/2022**

## Objectif

Chaque compte e-mail OVHcloud dispose d'un espace de stockage dédié. Bien gérer son espace de stockage permet d'éviter sa saturation, aussi appelée « overquota ». Par défaut, les e-mails que vous recevez et envoyez sont stockés sur le serveur de votre compte e-mail. Il est également possible, via un logiciel de messagerie (Outlook, Mail de macOS, Thunderbird, etc.), de stocker vos e-mails en local sur votre ordinateur.

**Découvrez comment gérer et optimiser l'espace de stockage d'une adresse e-mail.**

## Prérequis

- Disposer d'une solution e-mail OVHcloud préalablement configurée (**MX Plan**, proposée parmi nos [offres d’hébergement web](https://www.ovhcloud.com/fr/web-hosting/), incluse dans un [hébergement Start10M gratuit](https://www.ovhcloud.com/fr/domains/free-web-hosting/) ou commandée séparément comme solution autonome, telle que [**Hosted Exchange**](https://www.ovhcloud.com/fr/emails/hosted-exchange/) ou [**Email Pro**](https://www.ovhcloud.com/fr/emails/email-pro/))
- Être connecté à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, partie `Web Cloud`{.action}.
- Disposer des informations de connexion aux adresses e-mails concernées.

> [!primary]
>
> **Cas particuliers**
>
> - Concernant l’hébergement gratuit Start 10M : il est impératif de l’activer au préalable afin de pouvoir créer une adresse e-mail. Vous pouvez effectuer cette opération depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, en vous positionnant sur le nom de domaine concerné.
> - Dans le cadre d'un [hébergement web](https://www.ovhcloud.com/fr/web-hosting/){.external}, il est nécessaire d'activer votre offre MX Plan incluse avant de poursuivre la lecture de cette documentation. Pour cela, consultez notre guide « [Activer les adresses e-mail incluses dans votre hébergement web](https://docs.ovh.com/fr/hosting/activer-email-hebergement-web/) ».

## En pratique <a name="instructions"></a>

La gestion de l'espace de stockage de votre compte e-mail sera décomposée en 3 étapes dans ce guide. Elles peuvent être réalisées dans l'ordre ou indépendamment, selon votre besoin.

- [**Vérifier**](#check-quota) le quota actuel de vote compte e-mail. Cette étape vous permettra d'évaluer votre consommation actuelle, en vue des 2 étapes suivantes.
- [**Optimiser**](#optimise) votre compte e-mail. Cette étape vous donne des astuces qui vous permettront de maintenir un espace de stockage sans éléments superflus.
- [**Archiver** ou **Changer d'offre e-mail**](#archiveorswitch). Si l'étape précédente ne suffit pas, vous trouverez les informations nécessaires pour configurer un espace d'archivage local (sur votre ordinateur) pour vos e-mails via votre logiciel de messagerie. Vous trouverez également les informations nécessaires pour modifier l'offre e-mail de votre compte au profit d'une offre disposant d'un espace de stockage plus important.

![email](images/email-quota-intro.gif){.thumbnail}

### 1- **Vérifier** le quota actuel de votre compte email <a name="check-quota"></a>

Vous pouvez réaliser cette action depuis l'espace client si vous avez la gestion du service e-mail concerné, ou depuis le webmail si vous êtes uniquement l'utilisateur du compte e-mail.

#### Depuis l'espace client <a name="quotacontrolpanel"></a>

Depuis votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, dirigez-vous dans la partie `Web Cloud`{.action} puis suivez les instructions selon votre offre:

> [!tabs]
> **Emails (MXplan)**
>>
>> Cliquez sur `Emails`{.action} puis choisissez le nom du service MX Plan concerné. Positionnez-vous sur l'onglet `Comptes e-mail`{.action}. La fenêtre qui apparaît affiche les comptes e-mail existants. Vous pouvez observer, dans la colonne `Taille`, la consommation en cours du stockage de votre adresse e-mail.<br><br>
>>![email](images/email-quota-quotacontrolpanel01.png){.thumbnail}<br>
>>
> **Email Pro**
>>
>> Cliquez sur `E-mail Pro`{.action}, puis choisissez le nom de la plateforme concernée. Positionnez-vous sur l'onglet `Comptes e-mail`{.action}. La fenêtre qui apparaît affiche les comptes e-mail existants. Vous pouvez observer, dans la colonne `Taille`, la consommation en cours du stockage de votre adresse e-mail .<br><br>
>>![email](images/email-quota-quotacontrolpanel02.png){.thumbnail}<br>
>>
> **Exchange**
>>
>> Cliquez sur `Microsoft`{.action} / `Exchange`{.action}, puis choisissez le nom de la plateforme concernée. Positionnez-vous sur l'onglet `Comptes e-mail`{.action}. La fenêtre qui apparaît affiche les comptes e-mail existants. Vous pouvez observer, dans la colonne `Taille`, la consommation en cours du stockage de votre adresse e-mail.<br><br>
>>![email](images/email-quota-quotacontrolpanel03.png){.thumbnail}<br>
>>

#### Depuis le webmail <a name="quotawebmail"></a>

Pour vous connecter au webmail, rendez-vous sur la page <https://www.ovhcloud.com/fr/mail/> et saisissez les informations de connexion à votre compte e-mail. Sélectionnez ensuite ci-dessous le webmail correspondant à votre offre :

> [!tabs]
> **OWA** : **Emails (MXplan)** / **Email Pro** / **Exchange**
>>
>> Cliquez sur le bouton <i class=".icons-gear-concept icons-masterbrand-blue"></i> en haut à droite de votre écran, cliquez sur `Options`{.action}. Cliquez sur `Mon compte`{.action} dans la section `Général`{.action} dans la colonne de gauche. Vous pouvez visualiser le quota actuel de votre compte dans la partie inférieure droite du formulaire.<br><br>
>>![email](images/email-quota-webmail01.png){.thumbnail}<br>
>>
> **Roundcube** : **Emails (MXplan)**
>>
>> Lorsque vous êtes connecté au webmail Roundcube, le quota est visible dans la partie inférieure gauche, matérialisé par un camembert et le pourcentage consommé.<br><br>
>>![email](images/email-quota-webmail02.png){.thumbnail}<br>
>>

### 2- **Optimiser** son compte e-mail <a name="optimise"></a>

Si votre compte e-mail est saturé, cela signifie que vous n'êtes plus en mesure de recevoir des e-mails.<br>
Lorsque qu'une personne vous envoie un e-mail, elle reçoit, en réponse automatique, un e-mail d'erreur du type *« 552, "5.2.2", Le compte de messagerie auquel vous avez envoyé un message a épuisé son quota. »*.<br>
Lorsque votre compte e-mail est saturé, vous pouvez toujours envoyer des e-mails de votre côté. En revanche, ces e-mails ne pourront pas être stockés dans votre « boite d'envoi ».

#### Optimiser l'espace aloué de votre compte e-mail

Avant toute autre opération sur votre compte e-mail, il est nécessaire de bien prendre connaissance du contenu de votre compte e-mail afin de supprimer tous les éléments superflus. Nous vous invitons à en vérifier certains en particulier :

- `1`{.action} **La Corbeille (trash)** : celle-ci contient les éléments que vous avez supprimés. Pour éviter de cumuler des e-mails dans ce dossier, nous vous conseillons de vider la corbeille régulièrement.
- `2`{.action} **Les éléments envoyés (sent messages)** : lorsque vous envoyez un e-mail, celui-ci est transmis au destinataire. Cependant, il est aussi conservé sur votre compte e-mail dans les « éléments envoyés ». Nous vous conseillons de purger ce dossier régulièrement ou d'archiver son contenu en local sur votre ordinateur ou sur un espace de stockage distant de type « cloud ».
- `3`{.action} **Les e-mails stockés contenant des pièces jointes volumineuses** : les e-mails contenant des pièces jointes prennent davantage d'espace sur votre compte e-mail. Nous vous conseillons de stocker les éléments volumineux sur un espace de stockage local (ordinateur) ou distant (cloud).
- `4`{.action}**Trier ses dossiers** : lorsque vous avez beaucoup de dossiers sur votre compte e-mail, il est moins aisé de mesurer l'espace occupé sur votre compte e-mail. Faites régulièrement l'inventaire de vos dossiers et de leur contenu.

![email](images/email-quota-optimise01.png){.thumbnail}

#### Augmenter la capacité de votre compte e-mail

Il est possible d'augmenter la capacité de stockage de votre compte e-mail, si celui-ci n'a pas atteint sa capacité maximale. Vous trouverez ci-dessous la démarche à suivre en fonction de votre offre:

> [!tabs]
> **Emails (MXplan)**
>>
>> La capacité d'un compte MXplan peut aller de 2,5 Mo à 5 Go. S'il est saturé et que sa capacité est inférieure à 5 Go, vous pouvez modifier sa capacité via l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).<br>
>> Depuis l'onglet `Comptes e-mail`{.action}, cliquez sur le bouton <i class="icons-ellipsis icons-border-rounded icons-masterbrand-blue"></i> à droite du compte à modifier, puis cliquez sur `Modifier`{.action}.
>> Depuis la case `Quota`{.action}, sélectionnez la taille qui vous convient, cliquez sur `Suivant`{.action} puis `Valider`{.action}.<br><br>
>> ![email](images/email-quota-more01.png){.thumbnail}<br>
>>
> **Email Pro**
>> 
>> L'offre Email Pro dispose d'une capacité unique de 10 Go. Si vous avez besoin d'un stockage plus important, vous devrez passer sur une offre proposant davantage d'espace. Pour cela, lisez la section [changer d'offre pour augmenter sa capacité](#switchingoffer) de ce guide.<br>
>>
> **Exchange**
>>
>> Si votre compte Exchange arrive à saturation de ses 50 Go, il est possible, pour les offres **Hosted** et **Provider**, de souscrire à une option d'extension pour étendre sa capacité à 300 Go.<br>
>> Depuis l'onglet `Comptes e-mail`{.action} de votre plateforme, cliquez sur le bouton <i class="icons-ellipsis icons-border-rounded icons-masterbrand-blue"></i> à droite du compte à modifier, puis cliquez sur `Augmenter la capacité à 300 Go`{.action}. Choisissez le mode de facturation qui vous convient et cliquez sur `Valider`{.action}.<br><br>
>>![email](images/email-quota-more02.png){.thumbnail}<br>
>>
>> Si votre compte Exchange a déjà rempli ses 300 Go de stockage sur une offre **Hosted** ou **Provider**, vous devrez libérer de l'espace sur votre compte Exchange en supprimant des éléments superflus ou [archiver vos e-mails](#archiveorswitch) sur votre ordinateur en local. Cette situation est valable également pour les comptes Exchange de 50 Go présents sur une offre **Private**.
>>

### 3- **Archiver** ou **changer d'offre e-mail** <a name="archiveorswitch"></a>

#### Archiver vos e-mails en local sur votre ordinateur

> [!warning]
> 
> Les informations qui suivent sont basées sur une configuration IMAP de votre compte e-mail, cette configuration étant la plus répandue. La configuration POP est fondée sur un principe de stockage des e-mails en local. Dans notre contexte, il n'est donc pas pertinent d'archiver des e-mails qui sont déjà stockés localement sur votre ordinateur.

Lorsque vous avez configuré votre adresse e-mail sur votre client de messagerie en IMAP, **par défaut**, le contenu visible correspond à ce qui est **synchronisé sur le serveur e-mail**. Cela signifie que les e-mails sont chargés sur votre ordinateur mais disparaissent si on les supprime du serveur. Pour les **archiver sur votre ordinateur**, vous devez configurer votre logiciel de messagerie.

![email](images/email-quota-step03-archive.png){.thumbnail}

Si vous le souhaitez, il est possible de libérer l'espace de stockage de votre compte e-mail en stockant vos e-mails directement sur votre ordinateur. Pour cela il vous sera necessaire de faire appel à un logiciel de messagerie installé sur votre ordinateur. 
En effet, le logiciel de messagerie aura pour rôle de convertir vos e-mails en fichiers, pour pouvoir les stocker sur votre ordinateur. Il est néanmoins nécessaire de paramétrer la fonction « archive » de votre logiciel de messagerie. Les e-mails seront alors dans un dossier « local » et non directement sur le serveur de votre compte e-mail.

Vous trouverez ci-dessous, une liste non-exhaustive des guides de configuration pour les clients de messagerie sur ordinateur, en fonction de l'offre que vous possédez :

Vous trouverez ci-dessous une liste non-exhaustive des guides de configuration pour les clients de messagerie utilisant:

- le protocole IMAP sur les offres **MXplan** et **E-mail Pro** ;
- le protocole MAPI sur l'offre **Exchange** pour Outlook Windows ;
- le protocole EWS sur l'offre **Exchange** pour Outlook macOS.

> [!tabs]
> **Emails (MXplan)**
>>
>> Configuration d'un compte MXplan sur **Windows** :<br><br>
>> - [Courrier sur Windows 10](https://docs.ovh.com/fr/emails/configuration-courrier-sur-windows-10/) (inclus avec Windows)<br>
>> - [Outlook pour Mxplan](https://docs.ovh.com/fr/emails/configuration-outlook-2016/)
>> - [Thunderbird](https://docs.ovh.com/fr/emails/configuration-email-configuration-pour-thunderbird/) (gratuit)<br><br>
>> Configuration d'un compte MXplan sur **macOS** :<br><br>
>> - [Mail](https://docs.ovh.com/fr/emails/guide-configuration-mail-de-mac-el-capitan/) (inclus avec macOS)<br>
>> - [Outlook](https://docs.ovh.com/fr/emails/configuration-outlook-2016-mac/)<br>
>> - [Thunderbird](https://docs.ovh.com/fr/emails/guide-de-configuration-email-pour-thunderbird-mac/) (gratuit)<br>
>>
> **E-mail Pro**
>>
>> Configuration d'un compte E-mail Pro sur **Windows** :<br><br>
>> - [Courrier sur Windows 10](https://docs.ovh.com/fr/emails-pro/configuration-courrier-windows-10/) (inclus avec Windows)<br>
>> - [Outlook](https://docs.ovh.com/fr/emails-pro/configuration-outlook-2016/)<br>
>> - [Thunderbird](https://docs.ovh.com/fr/emails-pro/configuration-thunderbird-45-8-0/) (gratuit)<br><br>
>> Configuration d'un compte E-mail Pro sur **macOS** :<br><br>
>> - [Mail](https://docs.ovh.com/fr/emails-pro/configurer-email-pro-mail-macos/) (inclus avec macOS)<br>
>> - [Outlook](https://docs.ovh.com/fr/emails-pro/configuration-outlook-2016-mac/)<br>
>> - [Thunderbird](https://docs.ovh.com/fr/emails-pro/configuration-thunderbird-macos/) (gratuit)<br>
>>
> **Exchange**
>>
>> Configuration d'un compte Exchange sur **Windows** :<br><br>
>> - [Courrier sur Windows 10](https://docs.ovh.com/fr/microsoft-collaborative-solutions/configuration-courrier-windows-10/) (inclus avec Windows)<br>
>> - [Outlook](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-configuration-automatique-sous-outlook-2016/)<br>
>> - [Thunderbird](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-configuration-de-thunderbird/) (gratuit)<br><br>
>> Configuration d'un compte Exchange sur **macOS** :<br><br>
>> - [Mail](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-configuration-automatique-sous-mail-mac/) (inclus avec macOS)<br>
>> - [Outlook](https://docs.ovh.com/fr/microsoft-collaborative-solutions/configuration-outlook-2016-mac/)<br>
>> - [Thunderbird](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-configuration-de-thunderbird-mac/) (gratuit)<br>
>>

Une fois votre logiciel de messagerie installé, suivez les instructions ci-dessous pour préparer le dossier d'archive sur votre logiciel de messagerie.

> [!tabs]
> **Outlook**
>>
>> Sur Outlook, assurez-vous que, dans votre colonne de gauche, le dossier « archive » ou « sur mon ordinateur » soit présent pour pouvoir y déposer les éléments que vous souhaitez garder en local sur votre ordinateur. Consultez la documentation de Microsoft pour préparer votre dossier d'archive :<br><br>
>> - [Archivage dans Outlook pour Windows](https://support.microsoft.com/fr-fr/office/archivage-dans-outlook-pour-windows-25f75777-3cdc-4c77-9783-5929c7b47028){.external}<br>
>> - [À propos des dossiers sur mon ordinateur dans Outlook pour Mac](https://support.microsoft.com/fr-fr/office/%C3%A0-propos-des-dossiers-sur-mon-ordinateur-dans-outlook-pour-mac-c91b8729-924d-4c25-a5f6-38883d0f763d){.external}<br>
>>
> **Mail macOS**
>>
>> Depuis Mail sur macOS, créez un dossier qui apparaîtra dans la section « Sur mon Mac » dans la colonne de gauche. Pour ce faire, suivez la documentation d'Apple :<br><br>
>> - [Créer ou supprimer des boites aux lettres dans Mail sur Mac](https://support.apple.com/fr-fr/guide/mail/mlhlp1021/15.0/mac/12.0){.external}<br>
>>
> **Thunderbird**
>>
>> Via thunderbird depuis Windows, macOS ou Linux, vous pouvez déplacer vos e-mails dans un dossier du volet de gauche. Aidez-vous de la documentation de Mozilla :<br><br>
>> - [Archivage des messages](https://support.mozilla.org/fr/kb/archivage-des-messages){.external}<br>
>>

#### Changer d'offre pour augmenter sa capacité <a name="switchingoffer"></a>

Sélectionnez, dans le menu ci-dessous, l'offre actuelle de votre compte e-mail :

> [!tabs]
> **Emails (MXplan)**
>>
>> Si la capacité de votre compte e-mail est déjà à son maximum de 5 Go, vous pouvez opter pour une migration vers une offre [**Email Pro** de 10 Go](https://www.ovhcloud.com/fr/emails/email-pro/) ou [**Hosted Exchange** de 50 Go](https://www.ovhcloud.com/fr/emails/hosted-exchange/). Pour cela, nous vous invitons à commander l'offre qui vous convient et suivre notre documentation « [Migrer une adresse e-mail MX Plan vers un compte E-mail Pro ou Exchange](https://docs.ovh.com/fr/microsoft-collaborative-solutions/migration-adresse-e-mail-mutualisee-vers-exchange/) ». 
>>
> **Email Pro**
>>
>> L'offre Email Pro dispose d'une capacité unique de 10Go. Vous pouvez opter pour une migration vers une offre [**Hosted Exchange** de 50 Go](https://www.ovhcloud.com/fr/emails/hosted-exchange/). Pour cela, nous vous invitons à commander l'offre qui vous convient et suivre notre documentation « [Migrer vos adresses e-mail d’une plateforme e-mail OVHcloud vers une autre](https://docs.ovh.com/fr/microsoft-collaborative-solutions/migration-email-platform/) ».
>>
> **Exchange**
>>
>> Si votre compte Exchange arrive à saturation des 50 Go d'espace, il est possible de souscrire à une option d'extension pour étendre sa capacité à 300 Go. Ceci uniquement si le compte Exchange est présent sur une offre **Hosted** ou **Provider**.<br>
>> Depuis l'onglet `Comptes e-mail`{.action} de votre plateforme Exchange, cliquez sur le bouton <i class="icons-ellipsis icons-border-rounded icons-masterbrand-blue"></i> à droite du compte à modifier, puis cliquez sur `Augmenter la capacité à 300 Go`{.action}.<br><br>
>> ![email](images/email-quota-more02.png){.thumbnail}<br>
>>

## Aller plus loin

[Migrer une adresse e-mail MX Plan vers un compte E-mail Pro ou Exchange](https://docs.ovh.com/fr/microsoft-collaborative-solutions/migration-adresse-e-mail-mutualisee-vers-exchange/)

[Migrer manuellement votre adresse e-mail](https://docs.ovh.com/fr/emails/migrer-ses-adresses-email-manuellement/)

[Migrer vos adresses e-mail d’une plateforme e-mail OVHcloud vers une autre](https://docs.ovh.com/fr/microsoft-collaborative-solutions/migration-email-platform/)

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
