---
title: 'Installer Plesk sur une instance'
slug: installer-plesk-sur-une-instance
excerpt: 'Apprenez à mettre en place Plesk sur votre instance Public Cloud'
section: Tutoriels
---

**Dernière mise à jour le 26/03/2018**

## Objectif

Plesk est une interface de gestion de serveurs simple à prendre en main. Vous avez la possibilité de la mettre en place et de l'utiliser sur vos instances Public Cloud OVH.

**Apprenez à installer Plesk sur votre instance Public Cloud.** 

> [!warning]
> 
> OVH met à votre disposition des services dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs et ne pourrons vous fournir d'assistance. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. N'hésitez pas à vous rendre sur notre [forum communautaire](https://community.ovh.com/){.external} pour échanger avec d'autres utilisateurs.
>

## Prérequis

- [Avoir créé une instance depuis l'espace client OVH](../creer-instance-espace-client/).
- [Passer root et définir un mot de passe](../passer-root-et-definir-un-mot-de-passe/).

## En pratique

### Étape 1 : installer Plesk

L'installation de Plesk s'effectue facilement depuis une connexion en SSH. Pour cela, téléchargez puis lancez le script d'installation de Plesk en utilisant la commande la plus adaptée à votre situation ci-dessous.

- **Pour une installation par défaut non personnalisée de Plesk** :

```bash
# sh <(curl https://autoinstall.plesk.com/one-click-installer || wget -O - https://autoinstall.plesk.com/one-click-installer)
```

- **Pour une installation personnalisée de Plesk** :

```bash
# sh <(curl https://autoinstall.plesk.com/plesk-installer || wget -O - https://autoinstall.plesk.com/plesk-installer)
```

Patientez ensuite le temps de l'installation. 

### Étape 2 : configurer Plesk

Vous pouvez maintenant vous connecter à l'interface Plesk afin de la configurer. Pour cela, utilisez l'adresse `https://IP.de.l.instance:8443` dans votre navigateur internet. Vous serez alors invité à renseigner vos identifiants **root**.

![public-cloud](images/3301.png){.thumbnail}

Une fois connecté, un assistant de configuration apparaît. Celui-ci vous permet de configurer le type d'affichage dont disposera l'interface Plesk. Réalisez votre choix en fonction de votre activité.

![public-cloud](images/3302.png){.thumbnail}

Sélectionnez le type d'affichage de l'interface Plesk que vous souhaitez appliquer.

![public-cloud](images/3303.png){.thumbnail}

Vous devez alors indiquer des informations concernant l'accès à votre instance :

- le Hostname ;
- l'adresse IP ;
- le mot de passe root.

Complétez ces dernières dans les champs spécifiés.

![public-cloud](images/3304.png){.thumbnail}

Enfin, vous devez renseigner les informations du compte **administrateur**.

![public-cloud](images/3305.png){.thumbnail}

### Étape 3 : ajouter une licence

Pour ajouter votre licence Plesk, munissez-vous de la clé qui vous a été transmise par votre prestataire.

> [!primary]
>
> Nous ne commercialisons pas de licences Plesk pour nos offres Public Cloud. Vous pouvez cependant en obtenir une depuis le site de [Plesk](https://www.plesk.com/){.external}.
> 

Lors de votre première connexion à l'interface, une page vous proposant d'installer votre licence Plesk s'affiche automatiquement.

![public-cloud](images/3306-2.png){.thumbnail}

Vous souhaitez modifier votre licence, par exemple pour remplacer une clé de test ou pour changer d'offre ? Depuis l'interface Plesk, rendez-vous alors dans la partie `Server Management` puis cliquez sur `Tools & Settings`{.action}. Dans la section **Plesk**, sélectionnez ensuite `License Management`{.action}.

Une fois la nouvelle clé ajoutée, vous pouvez visualiser le type de licence installé en haut de la barre de menu, sur la gauche.

![public-cloud](images/3322-2.png){.thumbnail}

## Aller plus loin

[Documentation officielle de Plesk](https://docs.plesk.com/en-US/onyx/){.external}.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.