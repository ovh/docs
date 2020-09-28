---
title: Interface securisée
slug: interface-secure
excerpt: Utilisation de l'interface securisée sur des infrastructure HDS ou PCI-DSS
section: Services et options OVH
order: 04
---

**Dernière mise à jour le 30 juin 2020**

## Objectif

OVHcloud vous met à disposition une interface sécurisée pour valider les opérations sensibles (changement de mot de passe, ajout d'utilisateur...) réalisées par des utilisateurs ou des tiers sur votre Private Cloud HDS ou PCI-DSS.

**Ce guide explique le fonctionnement de l'interface pour valider ces opérations.**

## Prérequis

- Disposer d'une infrastructure avec l'option **advanced security** (inclus dans les offres [PCI-DSS](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/safety-compliance/sddc/) et [HDS](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/safety-compliance/hds/)). Ce droit permet la validation.
- Avoir accès à l'interface sécurisée du PCC, exemple : https://pcc-xxx-xxx-xxx-xxx.ovh.com/secure/ (attention à ne pas oublier le “/” final de l’adresse).

## En pratique

La validation des opérations « sensibles » à partir de l'interface sécurisée n'est possible que pour les utilisateurs disposant de l'autorisation **token validator**. L'administrateur dispose déjà de ce privilège, car il est nécessaire d'activer l'option **advanced security**. 

Notez qu'il est également possible d'accorder cette autorisation à d'autres utilisateurs via l'espace client OVHcloud. Reportez-vous si nécessaire à notre [Présentation de l’espace client Private Cloud OVHcloud](../manager-ovh-private-cloud/).

A partir de l'interface sécurisée, vous pouvez effectuer trois opérations. Reportez-vous à la section appropriée de ce guide, selon l'opération à effectuer :

- [Valider une opération avec un token](./#valider-une-operation-avec-un-jeton)
- [Modifier le mot de passe de l'utilisateur](./#modifier-le-mot-de-passe-de-lutilisateur)
- [Réinitialiser un mot de passe](./#reinitialiser-un-mot-de-passe)

### Valider une opération avec un token

Lorsqu'un token est reçu par SMS, il doit être entré dans l'interface sécurisée pour valider la tâche en attente.

> [!warning]
>
> Le token généré n'est valide que pour 15 minutes. Sans votre approbation, la tâche sera annulée une fois ce temps écoulé.
>
> Il sera ensuite de nouveau généré (dans le cas d'une maintenance), ou vous devrez le régénérer (s'il suit une action de votre part).
>

Voici un exemple de SMS envoyé:

![Premier SMS](images/SMS1.png){.thumbnail}

Ce message contient:

- l'utilisateur disposant de l'autorisation **token validator** qui a reçu le SMS. Cela peut vous aider à gérer les tokens à valider si vous avez entré votre numéro de téléphone dans plusieurs comptes utilisateurs.
- le nom de l'opération qui nécessite une validation
- l'ID de l'opération
- le token de validation
- un lien permettant de valider l'opération (notez que si votre téléphone n'est pas connecté à un réseau dont [l'adresse IP est autorisée](../manager-ovh-private-cloud/#securite), la page n'apparaîtra pas).

Pour valider l'opération, connectez-vous via le lien affiché dans le message. Accédez ensuite à la section `Operation calidation`{.action}.

![Validation de l'opération](images/operationValidation.png){.thumbnail}

Une fenêtre de connexion s'ouvre, dans laquelle seul un utilisateur disposant de l'autorisation **token validator** peut exécuter une validation.

Chargez l'opération en entrant son ID dans le champ « ID d'opération » puis en cliquant sur le bouton `Charger l'opération`{.action}. Entrez ensuite le token que vous venez de recevoir par SMS et cliquez sur `Confirm operation`{.action}.

![Jeton d'opération](images/operationIdAndToken.png){.thumbnail}

Un SMS confirmant la validation de l'opération sera ensuite envoyé aux utilisateurs disposant de l'autorisation **token validator**. Voici un exemple:

![Second SMS](images/SMS2.png){.thumbnail}

Comme vous le verrez, ce message contient:

- l'utilisateur disposant de l'autorisation **token validator** qui a reçu le SMS
- le nom de l'opération et son ID
- l'utilisateur disposant de l'autorisation **token validator** qui a confirmé la validation

### Modifier le mot de passe de l'utilisateur

Tout utilisateur peut modifier son mot de passe, même sans l'autorisation **token validator**. Toutefois, cette personne doit posséder son mot de passe actuel pour effectuer la manipulation.

> [!primary]
>
> Si l'utilisateur n'a plus son mot de passe, il doit demander à un autre utilisateur disposant de l'autorisation **token validator** d'effectuer la modification pour lui, via la procédure [password reset](./#reinitialiser-un-mot-de-passe).
> 

Pour modifier le mot de passe d'un utilisateur, connectez-vous à l'interface sécurisée (`https://pcc-xxx-xxx-xxx-xxx.ovh.com/secure/`) et cliquez sur le bouton `Modifier le mot de passe`{.action}.

![Modifier le mot de passe](images/changePassword.png){.thumbnail}

Dans la page qui apparaît, sélectionnez l'utilisateur concerné, puis définissez son nouveau mot de passe.

Un token sera ensuite envoyé aux utilisateurs avec l'autorisation [token validator](./#valider-une-operation-avec-un-jeton), afin qu'ils puissent **confirmer l'opération**.

![Définir le mot de passe](images/defineNewPassword.png){.thumbnail}

### Réinitialiser un mot de passe

Cette procédure n'est disponible que pour les utilisateurs disposant de l'autorisation **token validator**.

> [!primary]
>
> Si un utilisateur qui ne dispose pas de l'autorisation **token validator** perd son mot de passe, il devra demander à un utilisateur disposant de ce privilège de le réinitialiser.
> 

Pour réinitialiser le mot de passe d'un utilisateur, connectez-vous à l'interface sécurisée (`https://pcc-xxx-xxx-xxx-xxx.ovh.com/secure/`) et cliquez sur le bouton `Password lost`{.action}.

![Mot de passe perdu](images/passwordLost.png){.thumbnail}

Un message indique que vous devez être en mesure de recevoir des messages SMS pour continuer. Si tel est le cas, renseignez les informations demandées (y compris l'utilisateur nécessitant une réinitialisation) et cliquez sur `Next step`{.action}.

![Informations utilisateur](images/infoUser.png){.thumbnail}

Entrez les deux jetons reçus par SMS et e-mail, puis définissez le nouveau mot de passe.

> [!primary]
>
> Si la réinitialisation est effectuée pour un autre utilisateur, la personne qui a exécuté la procédure doit fournir le nouveau mot de passe. Nous vous recommandons ensuite vivement de [modifier ce mot de passe](./#modifier-le-mot-de-passe-de-lutilisateur) dès que possible.
> 

![Jeton et mot de passe](images/tokenAndPassword.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
