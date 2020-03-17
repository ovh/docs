---
title: 'Que faire en cas de compte bloqué pour spam ?'
slug: bloque-pour-spam
excerpt: 'Découvrez comment réagir lorsque votre adresse a été bloquée pour spam'
section: 'Diagnostic Exchange'
order: 1
---

**Dernière mise à jour le 16/03/2020**

## Objectif

Si vous avez reçu un e-mail indiquant que l'une de vos adresses e-mail est bloquée pour spam, voici les vérifications et actions à mener.

**Découvrez comment réagir lorsque votre adresse est bloquée pour spam.**

## Prérequis

- Disposer d'une [offre e-mail OVHcloud](https://www.ovh.com/fr/emails/){.external}.
- Être connecté à [l'espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager), partie `Web`{.action}.

## En pratique

### Étape 1 : vérifier le statut de l'adresse e-mail et accéder au ticket d'assistance associé

#### Pour une adresse e-mail Exchange

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager) et dirigez-vous dans la section « Web ». Cliquez sur `Microsoft`{.action} dans la barre de services à gauche puis sur `Exchange`{.action} et sélectionnez la plateforme Exchange concernée.

Dirigez-vous vers l'onglet `Comptes e-mail`{.action} de votre plateforme. Si la colonne « statut » de l'adresse e-mail concernée mentionne « bloqué », cliquez sur `...`{.action} à droite du compte puis sur `Débloquer`{.action}. Passez ensuite à [l'étape 2](./#etape-2-acceder-au-ticket-dassistance){.external} du guide.

![spam](images/blocked-for-SPAM-01-01.png){.thumbnail}

#### Pour une adresse E-mail Pro

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager) et dirigez-vous dans la section « Web ». Cliquez sur `E-mail Pro`{.action} dans la barre de services à gauche puis sélectionnez la plateforme E-mail Pro concernée.

Dirigez-vous vers l'onglet `Comptes e-mail`{.action} de votre plateforme. Si la colonne « statut » à droite de l'adresse e-mail concernée mentionne « Spam », cliquez sur cette mention puis sur `Répondre au ticket`{.action}. Passez ensuite à  [l'étape 2](./#etape-2-acceder-au-ticket-dassistance){.external} du guide.

![spam](images/blocked-for-SPAM-01-02.png){.thumbnail}

#### Pour une adresse e-mail MX plan

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager) et dirigez-vous dans la section « Web ». Cliquez sur `Emails`{.action} dans la barre de services à gauche, puis sélectionnez le nom de domaine concerné.

Dirigez-vous vers l'onglet `Comptes e-mail`{.action} de votre plateforme. Si la colonne « statut » à droite de l'adresse e-mail concernée mentionne « Spam », cliquez sur cette mention puis sur `Répondre au ticket`{.action}. Passez ensuite à [l'étape 2](./#etape-2-acceder-au-ticket-dassistance){.external} du guide.

![spam](images/blocked-for-SPAM-01-03.png){.thumbnail}


### Étape 2 : accéder au ticket d'assistance

Suite à l'étape 1, vous serez alors redirigé vers la fenêtre « Mes demandes d'assistance ». Cliquez sur `...`{.action} à droite du ticket mentionnant l'objet « Account locked for spam.», puis cliquez sur `Voir le détail`{.action}. 

![spam](images/blocked-for-SPAM-02.png){.thumbnail}

Vous retrouverez ainsi l'e-mail qui vous a été transmis, celui-ci génère un ticket d'assistance auprès du support.

Le ticket d'assistance qui a été créé se présente comme ci-dessous :

> 
> Cher Client,
>
> Notre système a détecté que l'adresse **youraddress@domain.com** hébergée sur nos systèmes sous le service **servicename** est source d'envoi de courriers indésirables (spams).
> L'envoi d'e-mail a donc été temporairement désactivé.
>
> Nous avons actuellement détecté **X** message(s) suspect(s).
>
> Afin de nous aider à réactiver l'envoi d'e-mail pour l'adresse : **address@domain.com**,
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

### Étape 3 : répondre aux trois questions posées

> [!warning]
>
> Le déblocage de l'adresse e-mail ne se fait pas automatiquement. Il est nécessaire de contacter le support, sur le ticket d'assistance, en répondant aux 3 questions posées.

- **Êtes-vous l'émetteur de l'e-mail en question ?** : à l'aide des en-têtes fournis, vérifiez l'expéditeur, le destinataire ainsi que l'objet du message pour vérifier s'il s'agit bien de l'un de vos messages.

- **Avez-vous une règle de redirection vers une autre adresse e-mail ?** : vérifiez les règles de boîte de réception de votre adresse e-mail pour vous assurer que des e-mails non-désirés n'ont pas été redirigés vers une autre adresse.

- **Avez-vous répondu à un spam ?** : en effet, le simple fait d'avoir répondu à un spam contribue à dégrader la réputation des serveurs d'envoi d'e-mails mais aussi de votre nom de domaine.    


### Étape 4 : mesures à prendre en cas d'accès frauduleux à votre adresse e-mail

Si les envois mentionnés dans les en-têtes n'ont pas été initiés par le ou les utilisateurs légitimes de l'adresse e-mail, nous vous invitons à prendre les mesures ci-dessous:

- Effectuer une analyse antivirus de chacun des postes utilisant l'adresse e-mail bloquée pour spam et appliquer un correctif si ces derniers sont infectés.

- Vérifier tous les logiciels utilisant les identifiants de l'adresse e-mail bloquée pour spam (Exemple: télécopieur, logiciel métier, logiciel de messagerie).

- Modifier le mot de passe de l'adresse e-mail, après avoir effectué l'analyse antivirus, en veillant à ce qu'il soit suffisamment fort. Vous pouvez utiliser [l'outil de création de mot de passe solide](https://www.cnil.fr/fr/generer-un-mot-de-passe-solide) de la CNIL.


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.