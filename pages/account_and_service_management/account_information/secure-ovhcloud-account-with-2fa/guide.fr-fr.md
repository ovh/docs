---
title: 'Sécuriser son compte OVHcloud avec la double authentification'
excerpt: 'Découvrez comment améliorer la sécurité de votre compte OVHcloud en activant la double authentification (2FA)'
updated: 2024-08-09
---

## Objectif

OVHcloud met à votre disposition des outils pour renforcer la sécurité de votre compte et de vos services.
Vous pouvez activer une authentification à deux facteurs (2FA) sur votre compte OVHcloud. Cette double authentification vient s'ajouter à votre couple identifiant/mot de passe et est gérée depuis un appareil que vous possédez : un téléphone, une tablette ou une clé de sécurité.

**Découvrez les différentes méthodes de double authentification proposées et comment les activer.**

Ce guide vous permettra de :

- [Comprendre les différentes méthodes de double authentification](#instructions)
- [Activer votre première méthode de double authentification](#enabling-2fa)
- [Découvrir comment vous connecter avec une double authentification](#login-2fa)
- [Connaître les démarches si votre téléphone/tablette/clé est perdu(e) / volé(e) / endommagé(e)](#lost-device)
- [Savoir comment désactiver complètement la double authentification](#desactivation)

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/odO58c4gJfc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prérequis

- Être connecté à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Posséder un téléphone mobile (pour la méthode par SMS), un smartphone ou une tablette (pour la méthode via application mobile) ou une clé de sécurité Universal Second Factor (U2F).
- Avoir pris connaissance des [recommandations sur la gestion du mot de passe d'accès à votre compte](/pages/account_and_service_management/account_information/manage-ovh-password).

## En pratique <a name="instructions"></a>

Vous pouvez activer une ou plusieurs méthodes de double authentification afin de sécuriser et de contrôler l'accès à votre espace client.

Nous vous proposons quatre méthodes différentes (cliquez sur les onglets ci-dessous pour afficher leur présentation) :

> [!tabs]
> SMS
>> ![2FA sms](images/sms.svg)<br>
>> Pour cette méthode, vous devez renseigner votre numéro de téléphone mobile.
>> Un code à usage unique vous est envoyé par SMS à chaque tentative de connexion à votre compte OVHcloud.
>>
>> Le principal avantage de cette méthode est d'utiliser un code envoyé sur un autre périphérique que votre ordinateur. En cas d'intrusion sur ce dernier, via un malware par exemple, votre compte restera sécurisé.
>> Vous devez cependant bénéficier d'une couverture réseau suffisante pour recevoir les SMS.
>>
> Application Mobile
>> ![2FA OTP](images/app.svg)<br>
>> Pour cette méthode, vous devez installer une application **OTP** sur votre smartphone ou tablette Android ou iOS.
>> De nombreuses applications OTP existent (aucune application OTP n'a été développée par OVHcloud) et sont à télécharger depuis le Google Play Store pour Android ou depuis l'Apple Store pour iOS. Les deux applications suivantes sont gratuites :
>>
>> - FreeOTP pour Android
>> - OTP Auth pour iOS
>>
>> Une fois l'application associée à votre compte OVHcloud, l'application génère un code à usage unique valable pendant un court laps de temps (quelques secondes) à chaque tentative de connexion.
>>
>> > [!success]
>> > **Avantages de cette méthode** :
>> >
>> > - Une fois la première association de l'application à votre compte effectuée, il n'est plus nécessaire d'être connecté à Internet sur votre smartphone/tablette pour que les codes soient générés.
>> > - Vous pouvez utiliser une seule application OTP pour l'ensemble de vos services ou sites nécessitant une double authentification.
>>
> Clé de sécurité
>> ![2FA U2F](images/key.svg)<br>
>> Pour cette méthode, vous devez disposer d'une clé physique **U2F** que vous branchez sur un port USB de votre ordinateur à chaque connexion à votre compte OVHcloud. L'authentification s'effectue alors automatiquement. 
>>
>> Cette méthode offre un niveau de sécurité plus élevé car elle repose sur un équipement de sécurité indépendant, totalement séparé de votre ordinateur, smartphone ou tablette, et qui est moins exposé aux risques de piratage.
> Codes de secours
>> ![2FA codes](images/code.svg)<br>
>> Lorsque vous configurez une double authentification (par **SMS**, **Application mobile** ou **Clé de sécurité**) pour la première fois, 10 codes de secours **à usage unique** vous sont affichés dans l'espace client.
>>
>> Cette méthode de double-authentification vient en complément d'une méthode déjà activée (par **SMS**, **Application Mobile** ou **Clé de sécurité**), elle ne peut être activée seule.
>>
>> À chaque tentative de connexion, vous pouvez saisir un des 10 codes à usage unique.
>> Il est essentiel de toujours disposer d'au moins 1 code de secours restant. Pensez à les regénérer via votre espace client si vous les avez tous utilisés ou si vous les avez perdus.

### Étape 1 - Activer votre première méthode de double authentification <a name="enabling-2fa"></a>

Connectez-vous à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, cliquez sur votre nom en haut à droite (1) puis sur vos initiales (2). Cliquez ensuite sur `Sécurité`{.action} (3) et enfin sur `Activer la double authentification`{.action} (4).

![Enabling 2FA](images/2024-001-enabling-2fa.png){.thumbnail}

**Cliquez sur l'onglet correspondant à la méthode de votre choix :**

> [!tabs]
> SMS
>> Choisissez la méthode par SMS et cliquez sur `Suivant`{.action}.
>>
>> ![2FA sms](images/2024-002-sms-choice.png){.thumbnail width="400"}<br>
>> Renseignez votre numéro de téléphone mobile au format international (par exemple, +33612345678 pour un téléphone mobile en France) et validez.
>> Un code de validation est alors envoyé par SMS au numéro que vous avez indiqué.
>>
>> ![2FA sms](images/2fasms3edit.png){.thumbnail width="400"}<br>
>> Renseignez ce code dans le champ prévu à cet effet.<br>
>> Vous pouvez également ajouter une description pour le numéro de téléphone renseigné.
>>
>> ![2FA sms](images/2024-002-sms-code.png){.thumbnail width="400"}<br>
>> La double authentification est maintenant activée. L'ajout d'autres numéros est également possible.
> Application Mobile
>> Choisissez la méthode par application mobile et cliquez sur `Suivant`{.action}.
>>
>> ![2FA mobileapp](images/2024-003-otp-choice.png){.thumbnail width="400"}<br>
>> Un QR code est généré, scannez-le via votre application OTP. Si votre application OTP ne propose pas cette option, cliquez sur `Afficher le secret`{.action} pour afficher un code à renseigner dans l'application OTP.<br>
>> Votre application génère alors un code à usage unique.
>> Renseignez alors ce code dans le champ prévu à cet effet (à droite du QR code). Vous pouvez également ajouter une description pour cette méthode d'authentification.
>>
>> ![2FA mobileapp](images/2024-003-otp-code.png){.thumbnail width="400"}<br>
>> La double authentification est maintenant activée.
> Clé de sécurité
>> Choisissez la méthode par clé de sécurité et cliquez sur `Suivant`{.action}.
>>
>> ![2FA securitykey](images/2024-004-u2f-choice.png){.thumbnail width="400"}<br>
>> Branchez votre clé de sécurité lorsque cela vous est demandé. Si elle est équipée d'un bouton, appuyez sur celui-ci.
>>
>> ![2FA securitykey](images/2024-004-u2f-insert.png){.thumbnail width="400"}
>>
>> > [!warning]
>> > Une fenêtre de type pop-up s'ouvrira pour vous demander la validation de la clé. Si vous ne voyez pas cette fenêtre apparaître, vérifiez que votre navigateur ne bloque pas les pop-ups.
>>
>> Une fois la clé reconnue, vous pouvez également ajouter une description.
>> La double authentification est maintenant activée.

Une fois la première méthode ajoutée, vous pouvez également **ajouter une ou deux autres méthodes** afin de disposer de multiples moyens de vous connecter à votre compte.

### Étape 2 - Sauvegarder les codes de secours <a name="codes"></a>

Lorsque vous ajoutez une double authentification pour la première fois, 10 codes de secours **à usage unique** vous sont affichés dans l'espace client.

**Conservez-les précieusement**. Nous vous conseillons de les sauvegarder dans un gestionnaire de mots de passe, tel que [KeePass](https://keepass.info/){.external} ou [Bitwarden](https://bitwarden.com/) (ces deux applications sont gratuites).

![2FA](images/2024-005-backup-codes.png){.thumbnail width="544"}

Vous pouvez regénérer ou supprimer les code de secours depuis votre espace client :

![2FA](images/emergency-codes.png){.thumbnail}

> [!warning]
>
> Il est **vivement recommandé de sauvegarder ces codes de secours** et de vous assurer qu’ils sont valides.
> Sans code de sécurité en votre possession et en cas de vol ou perte de votre téléphone/smartphone/tablette ou de votre clé de sécurité, l’accès à votre espace client et vos services pourrait être bloqué.
>

### Étape 3 - Se connecter à l'espace client OVHcloud avec la double authentification <a name="login-2fa"></a>

Rendez-vous sur la [page d'authentification à l'espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} et saisissez votre identifiant (ou votre adresse e-mail principale) et votre mot de passe.

L'écran d'identification affiche la dernière méthode de double authentification utilisée ou renseignée. Si vous souhaitez en utiliser une autre, cliquez sur le bouton `Essayer une autre méthode`{.action}.

![2FA](images/2024-007-log-in-01.png){.thumbnail width="400"}

Toutes les méthodes que vous avez activées apparaîtront alors, y compris la méthode des codes de secours.

![2FA](images/2024-007-log-in-02.png){.thumbnail width="400"}

En choisissant cette denière méthode, il vous suffit alors de renseigner l'un de vos codes de secours.

![2FA](images/2024-007-log-in-03.png){.thumbnail width="400"}

### Que faire si l'un de mes périphériques est perdu/volé ou cesse de fonctionner ? <a name="lost-device"></a>

Si votre périphérique (téléphone mobile/smartphone/clé de sécurité) est perdu, volé ou ne fonctionne plus, vous pouvez :

- utiliser [les code de secours](#codes) actifs que vous avez sauvegardés ;
- utiliser un autre périphérique de double authentification à votre disposition, si vous en avez activé plusieurs ;
- [désactiver la double authentification](#desactivation).

> [!warning]
>
> Si un de vos périphériques a été perdu ou volé, cela peut compromettre la sécurité de votre compte OVHcloud.
> Une fois que vous avez de nouveau accès à votre espace client, vous devez **supprimer ce périphérique de la liste de ceux utilisés pour la double authentification**.
>
> Consultez le chapitre suivant de ce guide pour plus de détails sur la suppression d'un périphérique.
>

#### Supprimer un périphérique <a name="delete-device"></a>

> [!warning]
>
> Avant de supprimer un périphérique et afin de ne pas bloquer l'accès à votre compte, vérifiez donc que vous disposez au choix :
>
> - d'un autre périphérique fonctionnel ;
> - d'une autre méthode de double authentification fonctionnelle ;
> - de codes de secours valides.
>

Pour supprimer un périphérique, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}. Cliquez sur votre nom en haut à droite, puis sur vos initiales.

Cliquez ensuite sur `Sécurité`{.action} puis sur les `...`{.action} à droite de votre périphérique à supprimer et enfin sur `Supprimer`{.action}.

![2FA](images/2024-006-delete-device.png){.thumbnail}

Un dernier code de validation vous est alors envoyé sur le périphérique que vous souhaitez supprimer. Renseignez ce code dans la fenêtre qui s'ouvre puis cliquez sur `Valider`{.action} pour terminer la suppression.

Si vous n'avez plus accès au périphérique que vous souhaitez supprimer, vous ne pourrez pas le supprimer vous-même de l'espace client OVHcloud.
Dans ce cas, **contactez directement** nos équipes du support en [créant un ticket depuis le centre d'aide](https://help.ovhcloud.com/csm?id=csm_get_help) ou en suivant le processus décrit [ci-dessous](#2FA-deletion).

> [!warning]
>
> La suppression d'un seul périphérique ne désactive pas la double authentification sur votre compte OVHcloud.

### Désactiver complètement la double authentification <a name="desactivation"></a>

#### Si vous avez accès à votre espace client OVHcloud

Pour désactiver complètement la double authentification sur votre compte OVHcloud, il vous faut supprimer **tous** les périphériques renseignés **et aussi désactiver les codes de secours**.

Pour supprimer chaque périphérique, consultez le [chapitre dédié de ce guide ci-dessus](#delete-device).

Une fois tous vos périphériques supprimés, désactivez les codes de secours en cliquant sur le bouton `Désactiver les codes 2FA`{.action}.

![2FA codes](images/disabling-codes.png){.thumbnail}

#### Si vous n'avez plus accès à votre espace client OVHcloud <a name="2FA-deletion"></a>

Si vous ne disposez plus de périphériques valides ni de codes de secours valides, vous devez alors demander la désactivation de la double authentification en fournissant des documents de justification d'identité correspondant à votre compte OVHcloud.

Tout d'abord, accédez à [la page d'authentification à l'espace client OVHcloud](/links/manager).

Renseignez votre identifiant OVHcloud et votre mot de passe pour accéder à l'étape de la double authentification. Cliquez alors sur le bouton `Je n'ai plus accès à mes périphériques, ni mes codes de secours`{.action}.<br>
Si vous ne voyez pas ce bouton, cliquez sur le bouton `Essayer une autre méthode`{.action} puis sur `Je n'ai plus accès à mes périphériques, ni mes codes de secours`{.action}.

L'interface suivante vous permet de téléverser et d'envoyer à nos équipes les documents nécessaires pour désactiver la double authentification sur votre compte.

> [!warning]
>
> - Attention, veuillez vous assurer que tous vos documents sont corrects et lisibles avant envoi.
> - **Formats acceptés** : jpg, jpeg, pdf, png. La taille maximale du fichier pour chaque document est de 10 Mo.
> - En cas de documents non valides, cette procédure sera annulée et vous devrez en effectuer une nouvelle.

Une fois vos documents ajoutés, cliquez sur le bouton `Envoyer mes documents`{.action}.

Dans un délai de 72 heures, vous recevrez la confirmation de la désactivation de la double authentification par e-mail.

/// details | Liste des justificatifs

|Type de compte OVHcloud|Justificatifs à fournir|
|---|---|
|Particulier|- Photocopie recto-verso d'une pièce d'identité (CNI, permis de conduire, passeport) au nom du titulaire du compte OVHcloud<br><br>- Justificatif de domicile (facture de fournisseur d'électricité, d'eau, de téléphone, etc... ) de moins de 3 mois<br>**Si, suite à un déménagement, vous n'avez pas mis à jour votre adresse dans votre espace client OVHcloud, vous devrez fournir :**<br>- Un justificatif de domicile à l'ancienne adresse<br>- Un justificatif de domicile à la nouvelle adresse, datant de moins de 3 mois<br>Si vous vivez à présent chez un tiers, vous devrez fournir :<br>- Un justificatif de domicile au nom de la personne vous hébergeant, datant de moins de 3 mois<br>- Une attestation d'hébergement sur l'honneur|
|Société|- Photocopie recto-verso d'une pièce d'identité (CNI, permis de conduire, passeport) du gérant de la société<br><br>- France: extrait KBIS de moins de 3 mois<br>- Belgique : extrait du Moniteur|
|Administration|- Photocopie recto-verso d'une pièce d'identité (CNI, permis de conduire, passeport) du maire/adjoint<br><br>- Avis de situation Sirene INSEE<br><br>- Attestation sur papier à en-tête indiquant que le titulaire du compte OVHcloud vous donne le droit de gérer le compte et ses services |
|Association|- Photocopie recto-verso d'une pièce d'identité (CNI, permis de conduire, passeport) du président de l'association<br><br>- Copie du dernier PV d'assemblée générale de l'association<br><br>- Copie du récépissé de déclaration de l'association<br><br>- Attestation sur papier à en-tête indiquant que le titulaire du compte OVHcloud vous donne le droit de gérer le compte et ses services|
|Profession libérale|- Photocopie recto-verso d'une pièce d'identité (CNI, permis de conduire, passeport) au nom du titulaire du compte OVHcloud<br><br>- Avis de situation Sirene INSEE|

///

En cas de difficultés, après avoir réuni vos documents justificatifs, vous pouvez contacter le support OVHcloud par téléphone :

- Canada : 1-855-684-5463. (ouvert 24h/24, 7j/7)
- France : 1007 (composez le 0033 9 72 10 10 07 depuis une ligne en dehors de la France) (ouvert de 09h à 18h du lundi au vendredi).

Après vérification de vos documents, un conseiller pourra désactiver manuellement la double authentification sur votre compte OVHcloud et reviendra vers vous une fois cette action effectuée.

> [!success]
>
> À des fins de sécurité, une fois l'accès à votre compte rétabli, nous vous recommandons de réactiver la double authentification dès que possible.

## Aller plus loin

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](https://partner.ovhcloud.com/fr/directory/).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](https://www.ovhcloud.com/fr/support-levels/).

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
