---
title: 'Que faire en cas de compte bloqué pour spam ?'
slug: bloque-pour-spam
excerpt: 'Découvrez comment réagir lorsque votre adresse a été bloquée pour spam'
section: Diagnostic
order: 01
updated: 2020-04-20
---

**Dernière mise à jour le 16/03/2020**

## Objectif

Lorsque votre adresse e-mail est bloqué pour SPAM, cela signifie qu'une activité suspecte a été détecté au niveau de l'envoi des e-mails depuis cette adresse. Dans cette situation vous ne pouvez plus envoyer d'e-mail depuis cette adresse e-mail, il est donc nécessaire de comprendre pourquoi une activité détecté et comment l'éviter.

**Découvrez comment réagir lorsque votre adresse est bloquée pour spam.**

## Prérequis

- Disposer d'une [offre e-mail OVHcloud](https://www.ovhcloud.com/fr/emails/){.external}.
- Être connecté à [l'espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), partie `Web Cloud`{.action}.

## En pratique <a name="instructions"></a>

Avant de poursuivre, si le blocage concerne une adresse e-mail de type MXplan, il est necessaire d'identifier la version que vous possédez pour suivre le bon processus de déblocage. Verifiez à l'aide du tableau ci-dessous comment distinguer les deux versions.

|Version historique de l'offre MX Plan|Nouvelle version de l'offre MX Plan|
|---|---|
|![email](images/mxplan-starter-legacy-step1.png){.thumbnail}<br> Repérez l'offre dans le cadre « Abonnement »|![email](images/mxplan-starter-new-step1.png){.thumbnail}<br>Repérez la « Référence serveur » dans le cadre « Résumé »|

### Étape 1 : Pourquoi votre adresse e-mail est bloqué pour SPAM ?

Lorsqu'une activité suspecte est détectée au niveau de l'envoi des e-mails, l'adresse concernée est automatiquement bloqué. Dans cette situation vous ne pouvez plus envoyer d'e-mail depuis cette adresse e-mail.

Tout d'abord, asurez-vous auprès du ou des utilisateurs de l'adresse e-mail bloquée qu'ils ne soient pas directement à l'origine du blocage, suite à une utilisation inhabituel. Si c'est le cas, il est necessaire de corriger cela avant de débloquer l'adresse.

Si l'activité suspect détecté par l'anti-spam n'a pas été initiée par le ou les utilisateurs légitimes de l'adresse e-mail, nous vous invitons à prendre les mesures ci-dessous:

- Effectuer une analyse antivirus de chacun des postes utilisant l'adresse e-mail bloquée pour spam et appliquer un correctif si ces derniers sont infectés.

- Vérifier tous les logiciels utilisant les identifiants de l'adresse e-mail bloquée pour spam (Exemple: télécopieur, logiciel métier, logiciel de messagerie).

- Modifier le mot de passe de l'adresse e-mail, après avoir effectué l'analyse antivirus, en veillant à ce qu'il soit suffisamment fort. Vous pouvez utiliser [l'outil de création de mot de passe solide](https://www.cnil.fr/fr/generer-un-mot-de-passe-solide) de la CNIL.

### Étape 2 : répondre aux trois questions posées

> [!warning]
>
> Si le blocage concerne une adresse e-mail [MXplan version historique](#instructions), il n'y a pas d'e-mail 

Le déblocage de l'adresse e-mail ne se fait pas automatiquement. Il est nécessaire de contacter le support, sur le ticket d'assistance, en répondant aux 3 questions posées.

- **Êtes-vous l'émetteur de l'e-mail en question ?** : à l'aide des en-têtes fournis, vérifiez l'expéditeur, le destinataire ainsi que l'objet du message pour vérifier s'il s'agit bien de l'un de vos messages.

- **Avez-vous une règle de redirection vers une autre adresse e-mail ?** : vérifiez les règles de boîte de réception de votre adresse e-mail pour vous assurer que des e-mails non-désirés n'ont pas été redirigés vers une autre adresse.

- **Avez-vous répondu à un spam ?** : en effet, le simple fait d'avoir répondu à un spam contribue à dégrader la réputation des serveurs d'envoi d'e-mails mais aussi de votre nom de domaine.

### Étape 3 : vérifier le statut de l'adresse e-mail et accéder au ticket d'assistance associé

Sélectionnez l'offre e-mail concernée dans les onglets suivant:

> [!tabs]
> **Exchange**
>>
>> Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) et dirigez-vous dans la section `Webcloud`{.action}. Cliquez sur `Microsoft`{.action} puis sur `Exchange`{.action} et sélectionnez la plateforme Exchange concernée.
>> 
>> Dirigez-vous vers l'onglet `Comptes e-mail`{.action} de votre plateforme. Si la colonne « statut » de l'adresse e-mail concernée mentionne « bloqué », cliquez sur `...`{.action} à droite du compte puis sur `Débloquer`{.action}. Passez ensuite à [l'étape 2](./#etape-2-acceder-au-ticket-dassistance_1){.external} du guide.
>> 
>> ![spam](images/blocked-for-SPAM-01-01.png){.thumbnail}
>>
> **Email Pro**
>>
>> Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) et dirigez-vous dans la section `Webcloud`{.action}. Cliquez sur `E-mail Pro`{.action} puis sélectionnez la plateforme E-mail Pro concernée.
>> 
>> Dirigez-vous vers l'onglet `Comptes e-mail`{.action} de votre plateforme. Si la colonne « statut » à droite de l'adresse e-mail concernée mentionne « Spam », cliquez sur cette mention puis sur `Répondre au ticket`{.action}. Passez ensuite à [l'étape 2](./#etape-2-acceder-au-ticket-dassistance_1){.external} du guide.
>> 
>> ![spam](images/blocked-for-SPAM-01-02.png){.thumbnail}
>>
> **MX plan - Nouvelle version**
>>
>> Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) et dirigez-vous dans la section `Webcloud`{.action}. Cliquez sur `Emails`{.action}, puis sélectionnez le nom de domaine concerné.
>>
>> Dirigez-vous vers l'onglet `Comptes e-mail`{.action} de votre plateforme. Si la colonne « statut » à droite de l'adresse e-mail concernée mentionne « Spam », cliquez sur cette mention puis sur `Répondre au ticket`{.action}. Passez ensuite à [l'étape 2](./#etape-2-acceder-au-ticket-dassistance_1){.external} du guide.
>>
>> ![spam](images/blocked-for-SPAM-01-03.png){.thumbnail}
>>
> **MX plan - Historique**
>>
>> Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) et dirigez-vous dans la section `Webcloud`{.action}. Cliquez sur `Emails`{.action}, puis sélectionnez le nom de domaine concerné.
>>
>> Dirigez-vous vers l'onglet `Emails`{.action} de votre plateforme. Si la colonne « Bloqué pour SPAM » mentionne « Oui », cliquez sur cette mention puis sur `Changer le mot de passe`{.action}. Passez ensuite à [l'étape 2](./#etape-2-acceder-au-ticket-dassistance_1){.external} du guide.
>>
>> ![spam](images/blocked-for-SPAM-01-04.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Dans de rares cas, la colonne « Bloqué pour SPAM » peut indiquer « Non » malgré le fait que l'adresse e-mail soit bloqué. Si vous avez fait le nécessaire pour sécuriser l'adresse e-mail, la solution reste la même que ci-dessus.


### Étape 4 : accéder au ticket d'assistance

Suite à l'étape 3, vous serez alors redirigé vers la fenêtre « Mes demandes d'assistance ». Cliquez sur `...`{.action} à droite du ticket mentionnant l'objet « Account locked for spam.», puis cliquez sur `Voir le détail`{.action}.

![spam](images/blocked-for-SPAM-02.png){.thumbnail}

Vous retrouverez ainsi l'e-mail qui vous a été transmis, celui-ci génère un ticket d'assistance auprès du support.

Le ticket d'assistance qui a été créé se présente comme ci-dessous :

> 
> Cher Client,
>
> Notre système a détecté que l'adresse **youraddress@example.com** hébergée sur nos systèmes sous le service **servicename** est source d'envoi de courriers indésirables (spams).
> L'envoi d'e-mail a donc été temporairement désactivé.
>
> Nous avons actuellement détecté **X** message(s) suspect(s).
>
> Afin de nous aider à réactiver l'envoi d'e-mail pour l'adresse : **address@example.com**,
> répondez à cet e-mail en complétant les questions suivantes :
>
> - Êtes-vous l'émetteur de l'e-mail en question (voir l'entête ci-dessous) ?
>
> - Avez-vous une règle de redirection vers une autre adresse e-mail ?
>
> - Avez-vous répondu à un Spam ?
> 
> Ces réponses nous aideront à réactiver votre compte rapidement.
> <br>
> <br>
> 

Dans la continuité de ce message, un échantillon d'en-têtes des e-mails envoyés vous a été transmis.

Ces en-têtes permettent de déterminer le cheminement et l'origine des e-mails envoyés.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.