---
title: 'Choisir et appliquer une configuration pour un numéro'
slug: quelle-configuration-est-adaptee-a-mes-besoins
excerpt: 'Découvrez comment choisir et appliquer une configuration sur votre numéro'
section: 'Numéros ou alias'
order: 3
---

**Dernière mise à jour le 07/07/2022**

## Objectif

Lorsque vous disposez d'un numéro alias chez OVHcloud, qu'il soit nouvellement commandé ou porté, il est nécessaire de le configurer pour l'utiliser. Plusieurs types de configurations existent, vous permettant de répondre au mieux à vos besoins.

**Découvrez comment choisir et appliquer une configuration sur votre numéro.**

> [!primary]
>
> Pour obtenir plus de détails sur la différence entre un **numéro alias** et une **ligne SIP**, consultez notre [FAQ](https://docs.ovh.com/fr/voip/faq-voip/#ligne-ou-numero).
>

## Prérequis

- Disposer d'un [numéro alias fourni par OVHcloud](https://www.ovhtelecom.fr/telephonie/numeros/){.external} ou d'un [numéro porté](../demander-la-portabilite-de-mon-numero) depuis un autre opérateur.
- Être connecté à l'[espace client OVHcloud](https://www.ovh.com/auth?onsuccess=https%3A%2F%2Fwww.ovhtelecom.fr%2Fmanager&ovhSubsidiary=fr){.external}, partie `Télécom`{.action}.

![espace client Telecom VoIP](https://raw.githubusercontent.com/ovh/docs/master/templates/control-panel/product-selection/telecom/tpl-telecom-02-fr-voip.png){.thumbnail}

## En pratique

### Étape 1 : accéder à la gestion de votre numéro

Pour débuter la manipulation, connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth?onsuccess=https%3A%2F%2Fwww.ovhtelecom.fr%2Fmanager&ovhSubsidiary=fr){.external} et assurez-vous de vous situer dans la partie `Télécom`{.action}. Cliquez sur `Téléphonie`{.action}, sélectionnez votre groupe de téléphonie puis le numéro à configurer.

Dès lors, deux possibilités existent selon le numéro concerné :

- **le numéro n'a aucune configuration** : cliquez sur l'onglet `Configuration`{.action}, puis suivez les instructions ci-dessous ;
- **le numéro possède déjà une configuration** : cliquez sur l'onglet `Configuration`{.action}, puis sur `Changer de configuration`{.action}. Suivez ensuite les instructions ci-dessous.

![configurationnumeroalias](images/alias-config1-2022.png){.thumbnail}

### Étape 2 : définir la configuration la plus adaptée à votre besoin

Dans la nouvelle fenêtre qui apparaît, plusieurs configurations sont possibles. Ces dernières sont réparties entre deux modes :

- **le mode simple** : les configurations de ce mode s'affichent par défaut ;
- **le mode expert** : les configurations de ce mode sont accessibles en cliquant sur le bouton `Passer en mode expert`{.action}. Cliquez sur le bouton `Passer en mode simple`{.action} pour retourner aux configurations du mode simple.

![configurationnumeroalias](images/alias-config2.png){.thumbnail}

Vous trouverez ci-dessous un récapitulatif des différentes configurations. Poursuivez vers celle(s) que vous souhaitez consulter.

|Configuration en « mode simple »|Configuration en « mode expert »|
|---|---|
|[Redirection d'appels](#redirection)|[SVI VXML](#svi-vxml)|
|[File d'appels](#file-d-appels)|[Contact Center Solution](#ccs)|
|[Conférence](#conference)| |
|[Serveur vocal interactif](#svi)| |

#### 2.1 Redirection d'appels <a name="redirection"></a>

La redirection permet de rediriger les appels reçus sur un numéro OVHcloud vers une seule ligne SIP OVHcloud.

Cette configuration est accessible en mode simple uniquement. Reportez-vous aux instructions décrites dans notre documentation « [Configurer une redirection d’appels](../creer-redirection-avec-presentation/){.external} » si vous désirez en apprendre plus.

#### 2.2 File d'appels <a name="file-d-appels"></a>

La file d'appels vous permet de gérer le flux de vos appels entrants. Elle vous permet de créer une file d'attente, avant de mettre en relation avec vos collaborateurs les interlocuteurs qui vous contactent. Cette solution s’adapte à vos besoins et à votre propre organisation en fonction de ce que vous souhaitez paramétrer.

Cette configuration n'est accessible qu'en mode simple. Reportez-vous aux instructions décrites dans notre documentation « [Configurer une file d’appels](../les-files-d-appels/) » si vous désirez en apprendre plus.

#### 2.3 Conférence <a name="conference"></a>

La conférence permet à toutes les personnes composant un numéro donné d’être en communication simultanément. Différentes fonctionnalités sont alors disponibles : protéger la conférence par un code, définir une annonce personnalisée, enregistrer les participants et recevoir un rapport par e-mail à la fin de celle-ci. Une interface spécifique vous propose également de suivre en temps réel les discussions des participants, mais aussi de gérer leur audio et leur micro.

Cette configuration n'est accessible qu'en mode simple uniquement. Reportez-vous aux instructions décrites dans notre documentation « [Créer et gérer des conférences téléphoniques](../conference/) » si vous désirez en apprendre plus.

#### 2.4 Serveur vocal interactif <a name="svi"></a>

Le serveur vocal interactif (SVI) vous propose une interface simple pour créer un menu interactif. L’appelant est invité, via des messages pré-enregistrés, à interagir avec le serveur grâce aux touches de son téléphone. Selon la configuration, il est alors possible de transférer votre interlocuteur vers un autre numéro, de le renvoyer vers une messagerie OVHcloud, de raccrocher ou de lire des sons.

Cette configuration n'est accessible qu'en mode simple. Consultez notre guide « [Configurer un serveur vocal interactif (SVI)](../svi-serveur-vocal-interactif/) » si vous en désirez en apprendre plus.

#### 2.5 SVI VXML <a name="svi-vxml"></a>

Le serveur vocal interactif en VXML permet, via une configuration VXML 2.1, d’utiliser un menu interactif avancé. L’appelant est invité, par des messages pré-enregistrés ou de la synthèse vocale, à interagir avec le serveur grâce aux touches de son téléphone. Selon la configuration choisie, il sera alors possible de lire des sons ou de transférer l'appelant vers d’autres numéros. Veuillez noter que seuls les transferts vers les numéros OVHcloud sont possibles.

Cette configuration n'est accessible qu'en mode expert uniquement.

#### 2.6 Le Contact Center Solution <a name="ccs"></a>

En cours de développement chez OVHcloud, le Contact Center Solution (ou CCS) est une évolution de la file d'appels. Il permet de gérer les flux d'appels entrants et sortants et d'en obtenir des statistiques détaillées. Étape par étape, vous pouvez définir votre stratégie afin de décrocher les appels comme bon vous semble.

Via une interface unique, vous avez la possibilité de gérer une file d'appels, de définir des services (par exemple : service commercial, technique, production, etc.), de personnaliser vos sons (musique d'attente, musique de prédécroché), mais aussi de mettre en place une supervision de l’ensemble de vos postes téléphoniques.

Des options supplémentaires sont également disponibles telles que l'enregistrement des appels entrants.

Cette configuration n'est accessible qu'en mode expert. Consultez notre guide « [Configurer un Contact Center Solution](../contact-center-solution/) » si vous en désirez en apprendre plus.

### Étape 3 : appliquer la configuration souhaitée

Une fois votre choix effectué, sélectionnez dans le menu déroulant la configuration que vous souhaitez appliquer à votre numéro, puis cliquez sur le bouton `Paramétrer`{.action}.

Patientez quelques instants afin que le changement soit pris en compte.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
