---
title: Diagnostiquer des dysfonctionnements matériels sur un serveur dédié
slug: diagnostic-dysfonctionnements-materiels-serveur-dedie
excerpt: Découvrez comment diagnostiquer des dysfonctionnements matériels sur votre serveur
section: Sécurité
---

**Dernière mise à jour le 2018/06/21**

## Objectif


L’usure d’un serveur peut impliquer avec le temps des dysfonctionnements matériels causant des erreurs. Pour cela, votre serveur est équipé de plusieurs outils de diagnostic permettant d'identifier les composants matériels défectueux.

**Découvrez comment diagnostiquer des dysfonctionnements matériels sur votre serveur.**


## Prérequis

* Posséder un [serveur dédié](https://www.ovh.com/ca/fr/serveurs-dedies/){.external}.
* Avoir redémarré le serveur en [mode rescue](../rescue-mode/){.external}.


## En pratique

### Utiliser l'interface web

Une fois que votre serveur a redémarré en [mode rescue](../rescue-mode/), vous recevrez un e-mail comportant les informations d'accès à votre service. Ce message contiendra également un lien vers l'interface web du mode rescue. Celui-ci ressemble en général à ceci : *https://IP_du_serveur:444*.

Après avoir cliqué sur le lien, vous serez redirigé vers l'interface web comme indiqué ci-dessous.

![L’interface Web](images/rescue-mode-04.png){.thumbnail}


### Exécuter tous les tests matériels

Sur l'interface web, vous pouvez cliquer sur le bouton `Démarrer tous les tests`{.action} qui exécutera simultanément tous les tests matériels disponibles.

![Démarrez tous les tests](images/rescue-mode-042.png){.thumbnail}


### Exécuter des tests matériels différents

L'interface web vous permet d'exécuter des tests différents pour :

- le ou les processeurs ;
- la connexion du réseau ;
- la mémoire RAM ;
- les partitions du disque.

Vous pourrez également voir les journaux SMART de votre serveur qui vous donnent des informations détaillées sur le ou les disques durs.

 
#### Processeurs

Le test du processeur vérifie le bon fonctionnement du processeur de votre serveur et nécessite environ 30 minutes pour s'exécuter correctement. Si le serveur tombe en panne pendant ce test, cela signifie que le processeur est défectueux.

Pour lancer le test, cliquez sur le bouton comme indiqué sur l'image ci-dessous.

![Test du processeur](images/processors.png){.thumbnail}

#### Connexion au réseau

Le test de connexion réseau vérifie votre bande passante interne et externe. Pour lancer le test, cliquez sur le bouton comme indiqué sur l'image ci-dessous.

![Test de réseau](images/network-connection.png){.thumbnail}

#### Mémoire RAM

Le test de mémoire vérifie l'intégrité des modules RAM de votre serveur. Si le serveur tombe en panne pendant ce test, cela signifie qu’un ou plusieurs modules RAM sont défectueux.

Pour lancer le test, cliquez sur le bouton comme indiqué sur l'image ci-dessous.

![Test de mémoire](images/memory.png){.thumbnail}

#### Partitions du disque

Le test des partitions comprend un test d'accès au disque et une vérification du système de fichiers. Le test d'accès au disque vérifie si le système peut communiquer avec les disques durs de votre serveur. La vérification du système de fichiers utilise la commande `fsck -fy`.

> [!warning]
>
> L'exécution d'une vérification du système de fichiers sur un disque dur endommagé peut entraîner une perte de données.
>

![Test de disque](images/partitions.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
