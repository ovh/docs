---
title: 'Utilisation d’une clé SSH dans l’interface Public Cloud'
slug: utilisation-d-une-cle-ssh-dans-l-interface-public-cloud
keywords: 'ssh, clef, clé, manager, interface, accès, instance, cloud'
excerpt: 'Découvez comment ajouter une clé SSH afin de simplifier l’accès  aux serveurs cloud'
section: 'Base de connaissances'
---

**Dernière mise à jour le 4 décembre 2019**

## Objectif

Le protocole SSH permet d’accéder à un serveur et de communiquer avec lui de manière authentifiée et cryptée.

Deux méthodes existent pour ajouter une clé SSH à partir de l’interface Public Cloud :

- La première, plus directe, consiste à ajouter la clé au moment de la création d’une instance.
- La seconde consiste à ajouter une clé via le gestionnaire de clés SSH.


### Prérequis
- Une [clé SSH](https://docs.ovh.com/fr/public-cloud/creation-des-cles-ssh/){.ref}


## Création d’une instance
Pour créer une instance cloud, accédez à l’interface client Public Cloud et cliquez sur `Créer une instance`{.action} dans le menu « Instances » situé dans la section `Compute`{.action} du menu de gauche.

![Add a server](images/compute.png){.thumbnail}

Ensuite, durant la création de l’instance et à l’étape 3, vous serez invité à fournir votre clé SSH.

![Add a server](images/selectkey.png){.thumbnail}

Si vous avez déjà des clés, utilisez simplement une clé de votre choix.

Si vous voulez ajouter une clé, cliquez sur `Ajouter une clé`{.action}. Créez un nom pour votre clé dans le champ « Nom de la clé SSH » et collez la clé dans le champ « Clé SSH ». Cliquez sur `Ajouter une clé`{.action} pour terminer.

![Add a key](images/addkey.png){.thumbnail}

## À partir de l’outil de gestion de clés

Une fois que l’option « Clés SSH » a été sélectionnée dans le menu gauche de votre projet, un onglet « Clés SSH » devient accessible.

![Add a key](images/addkeymenu.png){.thumbnail}

Cliquez sur `Ajouter une clé`{.action}, définissez un nom pour la clé puis collez la clé dans le champ dédié. Validez en cliquant sur `Ajouter cette clé`{.action}.

![Add a key](images/addkeymenu1.png){.thumbnail}

Cette clé pourra être utilisée au moment de la [création de votre prochaine instance cloud](https://docs.ovh.com/fr/public-cloud/debuter-avec-une-instance-public-cloud/){.ref}.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>