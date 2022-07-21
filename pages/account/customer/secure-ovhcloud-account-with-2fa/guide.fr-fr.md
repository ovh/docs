---
title: 'Sécuriser son compte OVHcloud avec la double authentification'
slug: securiser-son-compte-avec-une-2FA
excerpt: 'Découvrez comment améliorer la sécurité de votre compte OVHcloud en activant la double authentification'
section: Sécurité
---

**Dernière mise à jour le 21/07/2022**

## Objectif

OVHcloud met à votre disposition des outils pour renforcer la sécurité de votre compte et de vos services.
Vous pouvez activer une authentification à deux facteurs (2FA). Celle-ci vient s'ajouter à votre couple identifiant-mot de passe et est gérée depuis un appareil que vous possédez : un téléphone, une tablette ou une clé de sécurité.

**Découvrez les différentes méthodes proposées et comment les activer.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/odO58c4gJfc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prérequis

- Être connecté à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Posséder un téléphone mobile (pour la méthode par SMS), un smartphone ou une tablette (pour la méthode via application mobile) ou une clé de sécurité Universal Second Factor (U2F).
- Avoir pris connaissance des [recommandations sur la gestion du mot de passe d'accès à votre compte](https://docs.ovh.com/fr/customer/gerer-son-mot-de-passe/).

## En pratique

Vous pouvez activer une ou plusieurs méthodes de double authentification afin de sécuriser et de contrôler l'accès à votre espace client.
Nous vous proposons trois méthodes différentes :

- **via SMS**. Renseignez votre numéro de téléphone mobile. Un code à usage unique vous sera envoyé par SMS à chaque tentative de connexion à votre compte OVHcloud. Le principal avantage de cette méthode est d'utiliser un code envoyé sur un autre périphérique que votre ordinateur. En cas d'intrusion sur celui-ci, via un malware par exemple, votre compte restera sécurisé. Vous devez cependant bénéficier d'une couverture réseau suffisante pour recevoir les SMS ;

- **via une application mobile OTP**. Installez une application mobile OTP sur votre smartphone ou tablette Android ou iOS. Associez ensuite l'application à votre compte OVHcloud. À chaque tentative de connexion, l'application générera un code à usage unique valable pendant un court laps de temps.
Une fois la première association de l'application à votre compte effectuée, il n'est plus nécessaire d'être connecté à Internet sur votre périphérique pour que les codes soient générés.

- **via une clé de sécurité U2F**. Cette méthode nécessite de brancher une clé USB de sécurité U2F sur votre ordinateur à chaque connexion à votre compte OVHcloud. L'authentification s'effectue alors automatiquement. Cette méthode offre un niveau de sécurité plus élevé, car elle repose sur un équipement de sécurité indépendant, totalement séparé de votre ordinateur, smartphone ou tablette, et qui est moins exposé aux risques de piratage.

### Étape 1 : activer votre première méthode de double authentification

- [Activer la méthode de double authentification par SMS](https://docs.ovh.com/fr/customer/activer-la-double-authentification-par-sms/).
- [Activer la méthode de double authentification par application mobile](https://docs.ovh.com/fr/customer/activer-la-double-authentification-par-application-mobile/).
- [Activer la méthode de double authentification par clé de sécurité](https://docs.ovh.com/fr/customer/activer-la-double-authentification-par-cle-de-securite/).

Une fois la première méthode ajoutée, vous pouvez également en ajouter une ou deux autres afin de disposer de multiples moyens de vous connecter à votre compte.

### Étape 2 : sauvegarder les codes de secours <a name="codes"></a>

Lorsque vous ajoutez une double authentification pour la première fois, des codes de secours vous seront communiqués. **Conservez-les précieusement**. Nous vous conseillons de les sauvegarder dans un gestionnaire de mots de passe, tel que [Keepass](https://keepass.info/){.external}.

![2FA](images/2facodes.png){.thumbnail}

Vous pourrez les supprimer ou les regénérer depuis votre espace client :

![2FA](images/emergency-codes.png){.thumbnail}

> [!warning]
>
> Nous vous rappelons qu’il est indispensable de **sauvegarder ces codes de secours** et de vous assurer qu’ils sont valides. En cas d’indisponibilité de votre ou vos méthodes de sécurité sélectionnées (vol ou perte de votre téléphone ou de votre clé de sécurité), l’accès à votre espace client pourrait être bloqué.
>

### Étape 3 : se connecter à l'espace client avec la double authentification

Une fois la double authentification activée, l'écran d'identification affiche la méthode de sécurité sélectionnée. Si vous souhaitez en utiliser une autre, cliquez sur `Essayer une autre méthode`{.action}.

![2FA](images/2fasmsloginedit.png){.thumbnail}

Toutes les méthodes que vous avez activées apparaîtront alors :

![2FA](images/2faloginchoice.png){.thumbnail}

### Que faire si l'un de mes périphériques est perdu ou cesse de fonctionner ?

Si votre périphérique (téléphone mobile/smartphone/clé de sécurité) est perdu, volé ou ne fonctionne plus, nous vous conseillons de choisir l'une des options suivantes :

- utiliser [les code de secours](#codes) actifs que vous avez sauvegardés;
- utiliser un autre périphérique de double authentification à votre disposition, si vous en avez activé plusieurs;
- [désactiver la double authentification](#desactivation).

> [!alert]
>
>Si vous avez encore accès à votre espace client OVHcloud malgré la perte de votre périphérique, il est essentiel, à des fins de sécurité, de **supprimer ce périphérique de la liste de ceux utilisés pour la double authentification**.
>
>Consultez le chapitre suivant de ce guide pour plus de détails sur la suppression d'un périphérique.
>

#### Supprimer un périphérique <a name="supprimer-peripherique"></a>

> [!warning]
>
> La suppression d'un seul périphérique ne désactive pas la double authentification.
>
> Avant de supprimer un périphérique et afin de ne pas bloquer l'accès à votre compte, vérifiez donc que vous disposez au choix :
>
> - d'un périphérique fonctionnel;
>
> - d'une autre méthode de double authentification fonctionnelle;
>
> - de codes de secours valides.
>

Pour supprimer un périphérique, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}. Cliquez sur votre nom en haut à droite (première étape sur l'image ci-dessous), puis sur vos initiales (seconde étape).

![2FA](images/hub2FAb.png){.thumbnail}

Cliquez ensuite sur `Sécurité`{.action} (première étape sur l'image ci-dessous), puis sur les `...`{.action} (deuxième étape) à droite de votre périphérique à supprimer et enfin sur `Supprimer`{.action} (troisième étape).

![2FA](images/delete-device.png){.thumbnail}

### Désactiver complètement la double authentification <a name="desactivation"></a>

#### Si vous avez accès à votre espace client OVHcloud

Pour désactiver complètement la double authentification sur votre compte OVHcloud, il vous faut supprimer **tous** les périphériques renseignés **et aussi désactiver les codes de secours**.

Pour supprimer chaque périphérique, consultez la [partie dédiée de ce guide](#supprimer-peripherique).

Une fois tous vos périphériques supprimés, désactivez les codes de secours en cliquant sur le bouton `Désactiver les codes 2FA`{.action}.

![2FA codes](images/disabling-codes.png){.thumbnail}

#### Si vous n'avez plus accès à votre espace client OVHcloud

Si vous ne disposez plus de périphériques valides et si vous ne disposez plus de codes de secours valides, vous pouvez demander la désactivation de la double authentification en contactant nos équipes support.

Avant de nous contacter, vous devez réunir les éléments justificatifs suivants :

|Type de compte OVHcloud|Justificatifs à fournir|
|---|---|
|Particulier|- Photocopie recto-verso d'une pièce d'identité (CNI, permis de conduire, passeport) au nom du titulaire du compte OVHcloud<br><br>- Justificatif de domicile (facture de fournisseur d'électricité, d'eau, de téléphone, etc... ) de moins de 3 mois<br>**Si, suite à un déménagement, vous n'avez pas mis à jour votre adresse dans votre espace client OVHcloud, vous devrez fournir :**<br>- Un justificatif de domicile à l'ancienne adresse<br>- Un justificatif de domicile à la nouvelle adresse, datant de moins de 3 mois<br>Si vous vivez à présent chez un tiers, vous devrez fournir :<br>- Un justificatif de domicile au nom de la personne vous hébergeant, datant de moins de 3 mois<br>- Une attestation d'hébergement sur l'honneur|
|Société|- Photocopie recto-verso d'une pièce d'identité (CNI, permis de conduire, passeport) du gérant de la société<br><br>- France: extrait KBIS de moins de 3 mois<br>- Belgique : extrait du Moniteur|
|Administration|- Photocopie recto-verso d'une pièce d'identité (CNI, permis de conduire, passeport) du maire/adjoint<br><br>- Avis de situation Sirene INSEE<br><br>- Attestation sur papier à en-tête indiquant que le titulaire du compte OVHcloud vous donne le droit de gérer le compte et ses services |
|Association|- Photocopie recto-verso d'une pièce d'identité (CNI, permis de conduire, passeport) du président de l'association<br><br>- Copie du dernier PV d'assemblée générale de l'association<br><br>- Copie du récépissé de déclaration de l'association<br><br>- Attestation sur papier à en-tête indiquant que le titulaire du compte OVHcloud vous donne le droit de gérer le compte et ses services|
|Profession libérale|- Photocopie recto-verso d'une pièce d'identité (CNI, permis de conduire, passeport) au nom du titulaire du compte OVHcloud<br><br>- Avis de situation Sirene INSEE|

Une fois vos justificatifs réunis, contactez le support OVHcloud au 1007 (composez le 0033 9 72 10 10 07 depuis une ligne en dehors de la France).

Après vérification de vos documents, un conseiller pourra désactiver manuellement la double authentification sur votre compte OVHcloud et reviendra vers vous une fois cette action effectuée.

A des fins de sécurité, une fois l'accès à votre compte rétabli, nous vous recommandons de réactiver la double authentification dès que possible.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com).
