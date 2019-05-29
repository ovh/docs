---
title: Utilisation d’une clé SSH dans l’interface Public Cloud
slug: utilisation-d-une-cle-ssh-dans-l-interface-public-cloud
description: Procédure d’utilisation de clé SSH dans l’interface Public Cloud
keywords: ssh, clef, clé, manager, interface, accès, instance, cloud
excerpt: Documentation pas a pas traitant de l’utilisation d’une clé SSH afin de simplifier l’accès  aux serveurs cloud
section: Base de connaissances
---


## Préambule
SSH est un protocole d'accès à un serveur permettant une communication authentifiée et chiffrée. Elle apporte par conséquent toute la sécurité nécessaire à une instance cloud.

Il existe deux façons d'ajouter une clé depuis l'interface Public Cloud :

- La première, plus directe, se fait au moment de la création d'une instance.
- La deuxième façon est de faire cette action depuis le gestionnaire de clés SSH du projet.


### Prérequis
- Une [clé SSH](../guide.fr-fr.md){.ref}


## A la création d'une instance
Depuis l'interface client Public Cloud, pour créer une instance cloud, cliquer sur `Ajouter`{.action} puis `Ajouter un serveur`{.action}.


![Add a server](images/add_a_server.png){.thumbnail}

Si vous avez déjà des clés présentes, il vous suffit de sélectionner celle de votre choix.

Si vous souhaitez ajouter une clé, cliquer ensuite sur `Ajouter une clé`{.action} puis de cliquer sur `Ajouter cette clé`{.action} après avoir donné un nom et collé votre clé SSH.


![Add a key](images/add_a_key.png){.thumbnail}


## Depuis l'outil de gestion de cles
Une fois le menu `Infrastructure`{.action} de votre projet sélectionné, un onglet `Clés SSH`{.action} est disponible


![Add a key](images/add_a_key.png){.thumbnail}

Cliquer sur `Ajouter une clé`{.action} puis de cliquer sur `Ajouter cette clé`{.action} après avoir donné un nom et collé votre clé SSH.


![Add a key](images/add_a_key2.png){.thumbnail}

Cette clé sera directement utilisable lors de la [création de votre prochaine instance cloud](../guide.fr-fr.md){.ref}.
