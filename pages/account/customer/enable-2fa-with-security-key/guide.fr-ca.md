---
title: 'Activer la double authentification par clé de sécurité'
slug: activer-la-double-authentification-par-cle-de-securite
excerpt: 'Découvrez comment sécuriser votre espace client OVHcloud en activant la double authentification par clé de sécurité U2F'
section: Sécurité
hidden: true
---

**Dernière mise à jour le 08/07/2022**

## Objectif

La double authentification par clé de sécurité Universal Second Factor (U2F) est l'une des méthodes proposées par OVHcloud afin de vous permettre de sécuriser l'accès à votre compte. Cette technique de protection par une clé USB, de plus en plus utilisée pour la double authentification dans de nombreux domaines, appartient à la FIDO Alliance.

**Ce guide vous permettra d'activer la double authentification par clé de sécurité U2F et de comprendre comment l'utiliser pour vos prochaines connexions à votre espace client.**

## Prérequis

- Prendre connaissance des [différentes méthodes de double authentification proposées par OVHcloud](https://docs.ovh.com/ca/fr/customer/securiser-son-compte-avec-une-2FA/).
- Être connecté à l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}.
- Posséder une clé de sécurité U2F.
- Disposer d'un port USB libre sur votre ordinateur.

## En pratique

> [!warning]
> **Ajout d'une nouvelle clé U2F sous les versions récentes de Chrome/Chromium**
>
> L'ajout d'une nouvelle clé U2F n'est actuellement plus possible sur les versions récentes du navigateur Chrome (à partir de Chrome v98) et ses dérivés tels que Chromium.<br>
> L'utilisation d'une clé U2F déjà ajoutée et fonctionnelle est toujours possible sur ces versions récentes du navigateur, seul l'ajout d'une nouvelle clé U2F est impossible.
>
> Nos équipes [travaillent à résoudre ce dysfonctionnement](https://customer-service.status-ovhcloud.com/incidents/wl6txzgvrym8). En attendant une résolution définitive, nous vous invitons à suivre l'une de ces deux méthodes de contournement :
>
> - Utilisez un autre navigateur (tel que Firefox) pour ajouter votre nouvelle clé U2F puis utilisez votre navigateur Chrome/Chromium habituel pour vous connecter à l'espace client OVHcloud de manière habituelle.
> - Réactivez le support de la fonctionnalité U2F dans votre navigateur Chrome/Chromium. Pour cela, comme dans l'image ci-dessous, copiez cette valeur `chrome://flags/#u2f-security-key-api` dans la barre d'adresses du navigateur, sélectionnez `Enabled` dans le menu déroulant de droite et redémarrez votre navigateur.
>
> ![2FA securitykey - Chrome](images/chrome-u2f-support.png){.thumbnail}

### Étape 1 : activer la double authentification

Connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc){.external}, cliquez sur votre nom en haut à droite (1), puis sur vos initiales (2). Cliquez ensuite sur `Sécurité`{.action} (3) et enfin sur `Activer la double authentification`{.action} (4).

![2FA securitykey](images/hub2FA.png){.thumbnail}

### Étape 2 : Choisir la méthode par clé de sécurité

Choisissez la méthode par clé de sécurité et validez.

![2FA securitykey](images/2fakeyeditca.png){.thumbnail}

### Étape 3 : valider la double authentification

Branchez votre clé de sécurité lorsque cela vous est demandé. Si elle est équipée d'un bouton, appuyez sur celui-ci. 

![2FA securitykey](images/2fakey2.png){.thumbnail}

Une fois la clé reconnue, vous pouvez également ajouter une description. Celle-ci peut être utile afin d'identifier les personnes susceptibles d'utiliser cette méthode d'authentification sur votre compte.

![2FA securitykey](images/2fakey3.png){.thumbnail}

### Étape 4 : sauvegarder les codes de sécurité

Au premier ajout d'une méthode de sécurité par double authentification, des codes de secours vous sont communiqués. Ils sont à conserver précieusement. Nous vous conseillons donc de les sauvegarder dans un gestionnaire de mots de passe.

![2FA securitykey](images/2facodes.png){.thumbnail}

Vous pourrez les supprimer ou les regénérer dans votre espace client.

![2FA securitykey](images/2facodesaction.png){.thumbnail}

> [!warning]
>
> Nous vous rappelons qu’il est indispensable de sauvegarder ces codes de secours et de vous assurer qu’ils sont valides. En cas d’indisponibilité de votre ou vos méthodes de sécurité sélectionnées (vol ou perte de votre téléphone ou de votre clé de sécurité), l’accès à votre espace client pourrait être bloqué.
> 
> 

### Étape 5 : se connecter à l'espace client avec la double authentification

Une fois votre authentification à double facteur activée, l'écran d'identification vous présentera une de vos méthodes de sécurité. Si vous souhaitez en utiliser une autre, cliquez sur le bouton `Essayer une autre méthode`{.action}.

![2FA securitykey](images/mobile_auth.png){.thumbnail}

Tous les choix que vous avez activés apparaîtront alors.

![2FA securitykey](images/backupcode_auth.png){.thumbnail}

## Aller plus loin

Le site officiel de la [FIDO Alliance](https://fidoalliance.org/){.external}.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
