---
title: 'Sauvegarde automatique - Kernel panic (cPanel)'
slug: cpanel_auto_backup
excerpt: 'Découvrez comment résoudre les problèmes de blocage des serveurs cPanel lors de la sauvegarde automatique OVHcloud'
section: 'Utilisation avancée'
updated: 2021-03-09
---

**Dernière mise à jour le 3 février 2021**

## Objectif

Lorsque vous utilisez la fonction de sauvegarde automatique sur un VPS qui exécute cPanel, vous pouvez rencontrer des cas de figure où votre VPS est bloqué dans l'état de sauvegarde trop longtemps et devient inaccessible. La cause principale est liée aux utilisateurs de cPanel utilisant l'accès Jailed Shell. Celui-ci crée un « virtfs » sur votre système de fichiers.

Lors de la création d'une sauvegarde de votre VPS (dans le cas d'une souscription aux sauvegardes automatiques ou aux snapshots), l'hyperviseur communique avec votre VPS par l'intermédiaire du QEMU Guest Agent pour figer le système de fichiers sur le VPS, avant de procéder à la sauvegarde. Ce mécanisme permet de garantir qu'aucune écriture n'est effectuée sur votre disque pendant l'exécution de la sauvegarde et garantit donc la cohérence de la sauvegarde.
<br>Cependant, lorsque vous autorisez l'accès à Jailed Shell, cPanel crée un « virtfs » qui ne peut pas être figé de cette façon. Celui-ci se bloque alors et provoque un kernel panic.
<br>Trois méthodes existent pour éviter cela :

1. Désactiver le QEMU Guest Agent
2. Ne pas autoriser Jailed Shell
3. Désactiver la sécurité de la partition /tmp (non recommandé par cPanel, mais il s'agit d'une option disponible)

## Prérequis

- Disposer d'un [VPS](https://www.ovhcloud.com/fr-ca/vps/) (VPS Value, Essential, Comfort ou Elite) sur votre compte OVHcloud
- cPanel doit être installé sur votre serveur

## En pratique

Choisissez parmi les 3 options ci-dessus et suivez la section du guide correspondant à votre choix. Vous ne devez en suivre qu'une seule.
Veuillez choisir soigneusement car chacune a ses avantages et inconvénients.

### Désactiver le QEMU Guest Agent

Tout d'abord, vous devez vérifier si le QEMU Guest Agent est en cours d'exécution sur votre serveur. Vous pouvez le vérifier à l'aide de la commande suivante :

```
systemctl status qemu-guest-agent
```

Le statut du service est indiqué à côté de  "Active:". S'il est actif ou en cours d'exécution, il faudra arrêter le service et le désactiver afin de l'empêcher de se réactiver à nouveau à l'avenir. Pour ce faire, utilisez les commandes suivantes :

```
systemctl stop qemu-guest-agent
systemctl disable qemu-guest-agent
```

### Passer de Jailed Shell à Normal Shell

Découvez les différences entre Jailed Shell et Normal Shell [ici](https://support.cpanel.net/hc/en-us/articles/360051992634-Differences-Between-Normal-and-Jailed-Shell)

Pour désactiver un environnement Jailed Shell pour tous les utilisateurs, vous devez désactiver l'option jailshell par défaut dans l'interface « WHM’s Tweak Settings »  (WHM >> Home >> Server Configuration >> Tweak Settings).

Cette option vous permet d'activer/désactiver l'utilisation d'un Jailed Shell pour les nouveaux comptes et ceux utilisés dans les interfaces suivantes :

1. L'interface « WHM’s Modify an Account » (WHM >> Home >> Account Functions >> Modify An Account).
2. L'interface « WHM’s Upgrade/Downgrade an Account » (WHM >> Home >> Account Functions >> Upgrade/Downgrade An Account).

Cette option n'affecte pas les comptes qui existent déjà sur le serveur mais que vous n'avez pas modifiés dans ces interfaces.

Pour désactiver l'environnement Jailed Shell d'un utilisateur spécifique, utilisez l'interface « WHM's Manage Shell Access » (WHM >> Home >> Account Functions >> Manage Shell Access).

### Désactiver la sécurité de la partition /tmp sur cPanel

Veuillez noter que cette méthode n'est pas recommandée par cPanel. Son utilisation est à vos risques et périls. Si vous souhaitez continuer avec cette option, vous pouvez lire les étapes exactes à partir de la [documentation cPanel](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/#harden-your-tmp-partition).

## Allez plus loin

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com/>.
