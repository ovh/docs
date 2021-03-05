---
title: 'Sauvegarde automatique - Kernel panic (cPanel)'
slug: cpanel_auto_backup
excerpt: 'Découvrez comment résoudre les problèmes de blocage des serveurs cPanel lors de la sauvegarde automatisée OVHcloud''
section: 'Utilisation avancée'
---

**Dernière mise à jour le 3 février 2021**

## Objectif

Lorsque vous utilisez la fonction de sauvegarde automatisée sur un VPS qui exécute cPanel, vous pouvez rencontrer des cas où votre VPS est bloqué dans l'état de sauvegarde trop longtemps et peut ne pas être accessible. La principale cause est liée aux utilisateurs de cPanel utilisant l'accès Jail Shell qui crée un virtfs sur votre système de fichiers. 
Lorsque nous créons des sauvegardes de votre VPS (dans le cas d'un abonnement aux sauvegardes automatisées ou des snapshots), l'hyperviseur communique avec votre VPS par l'intermédiaire du QEMU Guest Agent pour figer le système de fichiers sur le VPS avant de procéder à la sauvegarde. Ce mécanisme permet de garantir qu'aucune écriture n'est effectuée sur votre disque pendant l'exécution de la sauvegarde et garantit donc la cohérence de la sauvegarde.

Cependant, les fichiers virtfs créés par cPanel lorsque vous autorisez l'accès à Jailded Shell, ne peuvent pas être figés. Par conséquent, lorsqu'un hyperviseur émet un gel du système de fichiers invité sur votre VPS, il se bloque et provoque un Kernel panic. Il y a trois façons d'éviter cela.

1. Désactiver QEMU Guest Agent
2. Ne pas autoriser Jailed Shell
3. Désactiver la sécurité de la partition /tmp (non recommandé par cPanel, mais il s'agit d'une option disponible)

## Prérequis

- une [solution VPS](https://www.ovhcloud.com/fr/vps/) (VPS Value, Essentiel, Confort ou Elite) sur votre compte OVHcloud
- cPanel installé sur votre serveur

## En pratique

Choisissez parmi les 3 options ci-dessus et suivez la section du guide correspondant à votre choix. Vous ne devez en suivre qu'une seule.

Veuillez choisir soigneusement car elles ont chacunes leurs avantages et leurs inconvénients.

### Désactiver QEMU Guest Agent

Tout d'abord, vous devez vérifier si QEMU Guest Agent est en cours d'exécution sur votre serveur. Vous pouvez vérifier ceci à l'aide de la commande suivante:

```
systemctl status qemu-guest-agent
```

Le statut du service est indiqué en regard de "Actif:". S'il est actif ou en cours d'exécution, il faudra arrêter le service et le désactiver à nouveau à l'avenir. Pour ce faire, utilisez les commandes suivantes:

```
systemctl stop qemu-guest-agent
systemctl disable qemu-guest-agent
```

### Basculement de Jailed Shell en Normal Shell

Vous pouvez en savoir plus sur ce qui est en Jailed Shell et Normal Shell [ici](https://support.cpanel.net/hc/en-us/articles/360051992634-Differences-Between-Normal-and-Jailed-Shell)

Pour désactiver un environnement Jailed Shell pour tous les utilisateurs, vous devez désactiver l'option jailshell par défaut dans l'interface des paramètres de réglage de WHM (WHM >> Accueil >> Configuration du serveur >> Paramètres de réglage).

Cette option vous permet d'activer/désactiver l'utilisation d'un Jailed Shell pour les nouveaux comptes et ceux utilisés dans les interfaces suivantes:

1. WHM Modifie une interface de compte (WHM >> Home >> Account Functions >> Modify An Account).
2. WHM Upgrade/Downgrade l'interface de compte (WHM >> Home >> Account Functions >> Upgrade/Downgrade An Account).

Cette option n'affecte pas les comptes qui existent déjà sur le serveur mais que vous n'avez pas modifiés dans ces interfaces.

Pour désactiver l'environnement Jailed Shell d'un utilisateur spécifique, utilisez l'interface de gestion de l'environnement (WHM >> Accueil >> Fonctions de compte >> Gérer l'accès au shell de WHM).

### Désactiver la sécurité de la partition cPanel /tmp

Veuillez noter qu'il n'est pas recommandé par cPanel de le faire et qu'il en est de votre responsabilité. Si vous souhaitez continuer avec cette option, vous pouvez lire les étapes exactes à partir de la [documentation cPanel](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/#harden-your-tmp-partition).


## Allez plus loin

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com/>.
