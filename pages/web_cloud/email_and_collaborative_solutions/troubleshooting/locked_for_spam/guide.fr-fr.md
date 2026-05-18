---
title: 'Que faire en cas de compte bloqué pour spam ?'
excerpt: 'Découvrez comment réagir lorsque votre adresse a été bloquée pour spam'
updated: 2026-05-18
---

## Objectif

Lorsque votre adresse e-mail est bloquée pour spam, cela signifie qu'une activité suspecte a été détectée lors de l'envoi d'e-mails depuis cette adresse. Dans cette situation, vous ne pouvez plus envoyer d'e-mail depuis cette adresse e-mail. Vous devez alors comprendre pourquoi une activité suspecte a été détectée et agir pour éviter que cette situation ne se reproduise.

**Découvrez comment réagir lorsque votre adresse est bloquée pour spam.**

## Prérequis

- Disposer d'une [offre e-mail OVHcloud](/links/web/emails).

<!-- CP-NAV-START:web-mx-plan -->
<!-- CP-NAV-START:web-zimbra -->
<!-- CP-NAV-START:web-email-pro -->
<!-- CP-NAV-START:web-exchange -->
---

### Accès à l'espace client OVHcloud

**MX Plan :**

- **Lien direct :** [MX Plan](/links/control-panel/web-mx-plan)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `MX Plan`{.action} > Sélectionnez votre service MX Plan

**Zimbra (Starter / Pro) :**

- **Lien direct :** [Zimbra](/links/control-panel/web-zimbra)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Zimbra Mail`{.action} > Sélectionnez votre service Zimbra

**Email Pro :**

- **Lien direct :** [Email Pro](/links/control-panel/web-email-pro)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Email Pro`{.action} > Sélectionnez votre plateforme

**Exchange :**

- **Lien direct :** [Exchange](/links/control-panel/web-exchange)
- **Pour accéder à vos services :** `Web Cloud`{.action} > `Exchange`{.action} > Sélectionnez votre plateforme

---
<!-- CP-NAV-END:web-exchange -->
<!-- CP-NAV-END:web-email-pro -->
<!-- CP-NAV-END:web-zimbra -->
<!-- CP-NAV-END:web-mx-plan -->

## En pratique <a name="instructions"></a>

Avant de poursuivre et si le blocage concerne une adresse e-mail de type MX Plan, identifiez la technologie e-mail utilisée par votre offre pour suivre le bon processus de déblocage. Pour les offres **Zimbra Starter** et **Zimbra Pro**, suivez directement les instructions de l'onglet **Zimbra** à l'étape 2.

> [!primary]
>
> **Identifier la technologie e-mail de votre offre MX Plan.**
>
> En fonction de la date d'activation de votre offre MX Plan ou d'une migration récente, la technologie e-mail associée peut différer. Cette version est caractérisée par l'interface de son webmail. Pour l'identifier :
>
> - Depuis l'onglet `Informations générales`{.action}, relevez la technologie utilisée sous la mention **Webmail** présente dans l'encadré `Abonnement`{.action}.
>
> ![Identifier la technologie e-mail dans l'espace client MX Plan](images/technology-email.png){.thumbnail .w-500}
>
> - Si la technologie affichée est **RoundCube**, suivez les instructions de l'onglet **MX Plan - RoundCube**.
> - Si la technologie affichée est **OWA**, suivez les instructions de l'onglet **MX Plan - OWA**.
> - Si la technologie affichée est **Zimbra**, suivez les instructions de l'onglet **Zimbra** (procédure commune à MX Plan - Zimbra, Zimbra Starter et Zimbra Pro).

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

> [!warning]
>
> Si le blocage concerne une adresse utilisant la technologie **Zimbra** (MX Plan - Zimbra, Zimbra Starter ou Zimbra Pro), l'adresse n'est **plus accessible** : la connexion au webmail Zimbra est suspendue en plus de l'envoi. Les vérifications de filtres, redirections et réponses automatiques doivent alors être réalisées :
>
> - Depuis un poste ou logiciel de messagerie déjà configuré avec l'adresse (si la configuration est antérieure au blocage).
> - Ou en sollicitant le support OVHcloud après ouverture d'un ticket d'assistance (voir étape 2, onglet **Zimbra**).

#### Mettre en place un filtre pour supprimer automatiquement les messages SPAM / DCE

Pour réduire les risques de récidive après déblocage, il est recommandé d'ajouter un filtre côté adresse e-mail :

- Le filtre doit **supprimer automatiquement** les e-mails dont l'objet contient les mentions **« SPAM »** ou **« DCE »** (*Delivery Connection Error*).
- **Conservez** en revanche les éventuelles **règles de redirection** déjà en place : ne les supprimez pas lors de l'ajout du filtre.

Ce filtre se configure depuis le webmail ou un logiciel de messagerie.

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
> **Email Pro**
>>
>> Dirigez-vous vers l'onglet `Comptes e-mail`{.action} de votre plateforme. Si la colonne « statut » à droite de l'adresse e-mail concernée mentionne « Spam », cliquez sur cette mention puis sur `Répondre au ticket`{.action}. L'adresse e-mail ne se débloque pas automatiquement. Contactez le support via le ticket d'assistance en répondant aux 3 questions posées. <br>
>> Passez à [l'étape 3](#step3) du guide.
>>
>> ![Colonne statut Spam dans l'onglet Comptes e-mail Email Pro](images/blocked-for-SPAM-01-02.png){.thumbnail}
>>
> **MX Plan - OWA**
>>
>> Dirigez-vous vers l'onglet `Comptes e-mail`{.action} de votre plateforme. Si la colonne « statut » à droite de l'adresse e-mail concernée mentionne « Spam », cliquez sur cette mention puis sur `Répondre au ticket`{.action}. L'adresse e-mail ne se débloque pas automatiquement. Contactez le support via le ticket d'assistance en répondant aux 3 questions posées.<br>
>> Passez à [l'étape 3](#step3) du guide.
>>
>> ![Colonne statut Spam dans l'onglet Comptes e-mail MX Plan](images/blocked-for-SPAM-01-03.png){.thumbnail}
>>
> **Zimbra**
>>
>> Cet onglet s'applique à toutes les adresses utilisant la technologie **Zimbra** : **MX Plan - Zimbra**, **Zimbra Starter** et **Zimbra Pro**. Le processus de déblocage est identique pour ces trois offres.
>>
>> Lors du blocage, **aucun ticket d'assistance n'est généré automatiquement** et l'adresse n'est plus accessible (webmail Zimbra et envoi désactivés).
>>
>> Pour faire débloquer l'adresse :
>>
>> 1. Effectuez les vérifications décrites à [l'étape 1](#step1), à partir des éléments accessibles (postes utilisateurs, logiciels tiers, redirections visibles depuis un autre accès).
>> 2. **Créez manuellement un ticket d'assistance** depuis votre espace client OVHcloud.
>> 3. Dans le ticket, précisez :
>>     - L'adresse e-mail concernée par le blocage ;
>>     - Le service associé (MX Plan, Zimbra Starter ou Zimbra Pro) et son identifiant ;
>>     - Les actions correctives déjà engagées (analyses antivirus, suppression d'expéditeurs non légitimes, ajout du filtre SPAM/DCE, etc.).
>>
>> Une fois le ticket traité par le support, l'adresse est débloquée. L'[étape 3](#step3) ne s'applique pas dans ce cas.
>>
> **MX Plan - RoundCube**
>>
>> Si le blocage concerne une adresse e-mail MX Plan avec le webmail **RoundCube**, aucun ticket d'assistance n'est généré.
>>
>> Avant toute action de déblocage, il est **indispensable d'identifier la cause du blocage** en réalisant les vérifications de [l'étape 1](#step1) (postes potentiellement infectés, logiciels tiers, redirections, filtres, réponses automatiques). Appliquez les correctifs nécessaires en fonction de la cause identifiée.
>>
>> Une fois la cause traitée :
>>
>> - Dirigez-vous vers l'onglet `Emails`{.action} de votre plateforme.
>> - Si la colonne « Bloqué pour SPAM » mentionne « Oui », cliquez sur cette mention pour ouvrir les actions de déblocage adaptées à votre situation.
>>
>> ![Colonne Bloqué pour SPAM dans l'onglet Emails MX Plan Roundcube](images/blocked-for-SPAM-01-04.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Le **changement de mot de passe n'est pas systématique**. Il ne doit être effectué **que si une compromission est suspectée** (poste infecté, identifiants divulgués ou partagés, accès non autorisé). Un changement de mot de passe sans cause identifiée masque le vrai problème et expose à une récidive.
>>
>> > [!warning]
>> >
>> > Dans de rares cas, la colonne « Bloqué pour SPAM » peut indiquer « Non » malgré le fait que l'adresse e-mail soit bloquée. Si vous avez fait le nécessaire pour sécuriser l'adresse e-mail, la procédure reste la même que ci-dessus.

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
> Une fois votre ticket traité par le support client et votre adresse e-mail débloquée, ne procédez à un **changement de mot de passe que si une compromission est suspectée** au vu des vérifications réalisées à [l'étape 1](#step1) (poste infecté, identifiants partagés ou divulgués, accès non autorisé). Le changement de mot de passe **n'est pas systématique**.
>
> Si un nouveau mot de passe est nécessaire, veillez à ce qu'il soit suffisamment fort. Vous pouvez utiliser [l'outil de création de mot de passe solide](https://www.cnil.fr/fr/generer-un-mot-de-passe-solide) de la CNIL, ou consulter [Les conseils de la CNIL pour un bon mot de passe](https://www.cnil.fr/fr/les-conseils-de-la-cnil-pour-un-bon-mot-de-passe).

## Aller plus loin

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Pour une assistance à l'usage et à la configuration de vos solutions OVHcloud, consultez nos [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).

