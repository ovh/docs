---
title: 'Que faire en cas de compte bloqué pour spam ?'
excerpt: 'Découvrez comment réagir lorsque votre adresse a été bloquée pour spam'
updated: 2026-03-05
---

## Objectif

Lorsque votre adresse e-mail est bloquée pour spam, cela signifie qu'une activité suspecte a été détectée lors de l'envoi d'e-mails depuis cette adresse. Dans cette situation, vous ne pouvez plus envoyer d'e-mail depuis cette adresse e-mail. Vous devez alors comprendre pourquoi une activité suspecte a été détectée et agir pour éviter que cette situation ne se reproduise.

**Découvrez comment réagir lorsque votre adresse est bloquée pour spam.**

## Prérequis

- Disposer d'une [offre e-mail OVHcloud](/links/web/emails).

<!-- CP-NAV-START:web-mx-plan -->
<!-- CP-NAV-START:web-exchange -->
---

### Accès à l'espace client OVHcloud

**MX Plan :**

- **Lien direct :** [MX Plan](/links/control-panel/web-mx-plan)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `MX Plan`{.action} > Sélectionnez votre service MX Plan

**Exchange :**

- **Lien direct :** [Exchange](/links/control-panel/web-exchange)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Exchange`{.action} > Sélectionnez votre plateforme

---
<!-- CP-NAV-END:web-exchange -->
<!-- CP-NAV-END:web-mx-plan -->

## En pratique <a name="instructions"></a>

### Étape 1 : pourquoi votre adresse e-mail est bloquée pour spam ? <a name="step1"></a>

Lorsqu'une activité suspecte est détectée au niveau de l'envoi des e-mails, l'adresse concernée est automatiquement bloquée. Dans cette situation, vous ne pouvez plus envoyer d'e-mails depuis cette adresse e-mail.

> [!warning]
>
> Une « activité suspecte » signifie que :
>
> - Le serveur anti-spam, qui scanne les e-mails à l'envoi, a constaté qu'un ou plusieurs éléments de l'e-mail sont considérés comme suspects et peuvent constituer un e-mail spam.
> - La fréquence d'envoi et le nombre de destinataires sont trop importants et contribuent à considérer l'envoi comme du spamming. En effet, pour réaliser des envois massifs, il est nécessaire d'utiliser un service de mailing list et non une adresse e-mail standard.
>
> Les raisons précises d'un blocage ne peuvent pas être divulguées pour éviter toute tentative de contournement du système de détection des spam. Pour tester le contenu d'un e-mail, vous pouvez utiliser un outil externe à OVHcloud tel que [Mailtester](https://www.mail-tester.com/).
>

Tout d'abord, assurez-vous, auprès du (des) utilisateur(s) de l'adresse e-mail bloquée, qu'il(s) n'est (ne sont) pas directement à l'origine du blocage, suite à une utilisation inhabituelle de l'adresse e-mail (par exemple, suite à des envois massifs d'e-mails). Si c'est le cas, vous devez corriger la situation avant de débloquer l'adresse.

Si l'activité suspecte détectée par l'anti-spam n'a pas été initiée par le (les) utilisateur(s) légitime(s) de l'adresse e-mail, prenez les mesures suivantes :

- Effectuez une analyse antivirus de chacun des postes utilisant l'adresse e-mail bloquée pour spam et appliquez un correctif si ces derniers sont infectés.

- Vérifiez tous les logiciels utilisant les identifiants de l'adresse e-mail bloquée pour spam (par exemple : télécopieur, logiciel métier, logiciel de messagerie).

- Vérifiez les redirections appliquées sur l'adresse e-mail bloquée pour spam.

- Vérifiez les filtres appliqués sur l'adresse e-mail bloquée pour spam, via un logiciel de messagerie ou le webmail.

- Vérifiez les réponses automatiques configurées sur l'adresse e-mail bloquée pour spam, via un logiciel de messagerie ou le webmail.

### Étape 2 : vérifier le statut de l'adresse e-mail et accéder au ticket d'assistance associé

Sélectionnez l'offre e-mail concernée dans les onglets suivants :

> [!tabs]
> **Exchange**
>>
>> Dirigez-vous vers l'onglet `Comptes e-mail`{.action} de votre plateforme. Si la colonne « statut » de l'adresse e-mail concernée mentionne « bloqué », cliquez sur `...`{.action} à droite du compte puis sur `Débloquer`{.action}. L'adresse e-mail ne se débloque pas automatiquement. Contactez le support via le ticket d'assistance en répondant aux 3 questions posées.<br>
>> Passez à [l'étape 3](#step3) du guide.
>>
>> ![Colonne statut bloqué dans l'onglet Comptes e-mail Exchange](images/blocked-for-SPAM-01-01.png){.thumbnail}
>>
> **MX Plan**
>>
>> Dirigez-vous vers l'onglet `Comptes e-mail`{.action} de votre plateforme. Si la colonne « statut » à droite de l'adresse e-mail concernée mentionne « Spam », cliquez sur cette mention puis sur `Répondre au ticket`{.action}. L'adresse e-mail ne se débloque pas automatiquement. Contactez le support via le ticket d'assistance en répondant aux 3 questions posées.<br>
>> Passez à [l'étape 3](#step3) du guide.
>>
>> ![Colonne statut Spam dans l'onglet Comptes e-mail MX Plan](images/blocked-for-SPAM-01-03.png){.thumbnail}
>>

### Étape 3 : accéder au ticket d'assistance <a name="step3"></a>

Suite à l'étape 2, vous êtes alors redirigé vers la fenêtre « Mes demandes d'assistance ». Cliquez sur le bouton `...`{.action} à droite du ticket mentionnant l'objet « Account locked for spam. » puis cliquez sur `Voir le détail`{.action}.

![Fenêtre Mes demandes d'assistance avec le ticket de blocage spam](images/blocked-for-SPAM-02.png){.thumbnail}

Vous retrouvez ainsi l'e-mail qui vous a été transmis, celui-ci génère un ticket d'assistance auprès du support.

Le ticket d'assistance se présente comme suit :

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

> [!primary]
>
> Une fois que votre ticket a été traité par le support client et que votre adresse e-mail a été débloquée, modifiez le mot de passe de l'adresse e-mail, en veillant à ce qu'il soit suffisamment fort. Vous pouvez utiliser [l'outil de création de mot de passe solide](https://www.cnil.fr/fr/generer-un-mot-de-passe-solide) de la CNIL. Vous pouvez également consulter [Les conseils de la CNIL pour un bon mot de passe](https://www.cnil.fr/fr/les-conseils-de-la-cnil-pour-un-bon-mot-de-passe)

## Aller plus loin

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Pour une assistance à l'usage et à la configuration de vos solutions OVHcloud, consultez nos [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).
