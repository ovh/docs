---
title: 'Adapter votre Private Cloud aux certifications HDS ou PCI DSS'
slug: activer-l-option-hds-hipaa-ou-pci-dss
excerpt: 'Découvrez comment adapter votre Private Cloud aux certifications HDS ou PCI DSS'
section: 'Services et options OVH'
---

**Dernière mise à jour le 26/02/2019**

## Objectif

Vous avez la possibilité d'adapter votre Private Cloud avec l'une des certifications HDS ou PCI DSS. Bénéficier de l'une d'elles peut être indispensable à votre activité, en particulier si vous devez héberger [des données de santé](https://www.ovh.com/fr/private-cloud/healthcare/agrement.xml){.external} (HDS) ou [des données de cartes bancaires](https://www.ovh.com/fr/private-cloud/payment-infrastructure/pci-dss.xml){.external} (PCI DSS). Cette adaptation s'effectue en quelques étapes.

**Découvrez comment adapter votre Private Cloud aux certifications HDS ou PCI DSS.**

## Prérequis

- Disposer d'une infrastructure Private Cloud en version 6.0 minimum.
- Être connecté à l'[espace client OVH](https://www.ovh.com/auth/?action=gotomanager), partie `Dédié`{.action}.

## En pratique

### S'assurer que l'option de sécurité est activée

Afin d'adapter votre Private Cloud à l'une de ces certifications (HDS ou PCI DSS), l'une des options de sécurité correspondantes doit être activée. Pour le vérifier, connectez-vous à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager), et assurez-vous de vous situer dans la partie « Dédié ». Cliquez sur `Private Cloud`{.action}, puis sélectionnez le service concerné. 

Dans la fenêtre qui s'affiche, assurez-vous de vous trouver sur l'onglet `Informations générales`{.action}. Vérifiez alors l'état d'activation des options de sécurité dans la partie « Options de sécurité ». **À noter qu'il n'est actuellement pas possible de cumuler plusieurs options de sécurité pour un même Private Cloud.**

![hdspcidsscompliance](images/HomeSDDCManager-2.png){.thumbnail}

Si l'option de sécurité souhaitée n'est pas activée, activez-la en cliquant sur le bouton `...`{.action}, puis sur `Activer`{.action}. Plusieurs prérequis sont alors indispensables.

- **Les options [NSX](https://www.ovh.com/fr/private-cloud/options/nsx.xml){.external} et [vROps](https://www.ovh.com/fr/private-cloud/options/vrops.xml){.external} doivent être installées** : depuis l'onglet `Informations générales`{.action} dans la partie « Options du Private Cloud », vous pouvez vérifier l'état d'activation de ces options. Si elles ne sont pas activées, activez-les en cliquant sur le bouton `...`{.action}, puis sur `Activer`{.action}.

- **La politique d'accès au vCenter doit être restreinte** : depuis l'onglet « Sécurité », vous pouvez vérifier l'état de la politique d'accès. Si elle n'est pas restreinte, effectuez le changement en cliquant sur le bouton `Politique d'accès au vCenter`{.action}, puis en suivant les étapes. Notre documentation « [Présentation de l'espace client Private Cloud OVH](../manager-ovh-private-cloud/#securite) » peut vous accompagner dans cette démarche.

- **Vous devez disposer d'au moins une adresse IP autorisée à se connecter au vCenter** : depuis l'onglet « Sécurité », assurez-vous de posséder au moins une adresse IP autorisée. Si nécessaire, utilisez le bouton `Ajout des IP`{.action}. Notre documentation « [Présentation de l'espace client Private Cloud OVH](../manager-ovh-private-cloud/#securite) » peut vous accompagner dans cette démarche.

Afin d'être toujours en mesure de pouvoir vous connecter, nous vous recommandons d'avoir au moins deux adresses IP autorisées. Pour des raisons évidentes d'accessibilité, ces dernières doivent être fixes et non dynamiques.

- **Les informations de l'utilisateur « admin » sont complètes et celui-ci dispose du droit nécessaire** : depuis l'onglet « Utilisateurs », assurez-vous pour l'utilisateur « admin » que le numéro de téléphone et l'adresse e-mail sont bien renseignés et qu'il dispose du droit « **token validator** ». Si nécessaire, pour modifier l'utilisateur, cliquez sur le bouton `...`{.action}, puis sur `Modifier`{.action}. Notre documentation « [Présentation de l'espace client Private Cloud OVH](../manager-ovh-private-cloud/#utilisateurs) » peut vous aider dans cette démarche.

Afin d'être toujours en mesure de vous connecter au vCenter, nous vous recommandons de posséder au moins deux utilisateurs disposant des informations et des droits nécessaires (avec adresse e-mail et numéro de téléphone différents).

Une fois les étapes d'activation complétées, vous devrez :

- valider le token envoyé par SMS aux utilisateurs disposant du droit « **token validator** ». Ceci permet de confirmer que vous serez en mesure de recevoir ces tokens, indispensables par la suite pour valider des opérations ;
- compléter les documents que vous recevrez par e-mail permettant de finaliser la partie contractuelle. 

En attendant, nous vous conseillons d'effectuer vos premiers pas avec l'interface sécurisée en poursuivant la lecture de cette documentation. 

> [!primary]
>
> Prenez en considération que l'interface vSphere ne sera pas accessible pendant l'activation de l'option de sécurité.
>

### Débuter avec l'interface sécurisée

Suite à l'activation de l'option de sécurité, vous recevrez par e-mail le processus de validation des tokens. Celui-ci détaille entre autres leur fonctionnement et ce que vous devez effectuer pour pouvoir les utiliser. 

Comme précisé, par mesure de sécurité suite à l'activation de l'option de sécurité :

- tous les utilisateurs en place sur votre Private Cloud sont désactivés ;
- vous devez changer les mots de passe de vos utilisateurs pour les réactiver ;
- le changement des mots de passe de vos utilisateurs doit dorénavant s'effectuer exclusivement depuis l'interface sécurisée. Vous ne serez plus en mesure de réaliser cette manipulation depuis l'espace client OVH. 

Pour rappel, l'accès à l'interface ne sera possible qu'une fois l'activation de l'option de sécurité arrivée à son terme.

Connectez-vous alors à l'interface sécurisée via le lien communiqué dans l'e-mail que vous avez reçu. Celui-ci devrait ressembler à « https://pcc-xxx-xxx-xxx-xxx.ovh.com/secure/password-lost ». Une fois connecté, vous pourrez modifier le mot de passe de l'utilisateur « admin », puis celui des utilisateurs additionnels. Notre documentation « [Utiliser l'interface sécurisée](../interface-secure/) » peut vous accompagner dans cette démarche.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.