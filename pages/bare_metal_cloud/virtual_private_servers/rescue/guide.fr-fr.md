---
title: Activer et utiliser le mode rescue sur un VPS
excerpt: Découvrez comment utiliser le mode rescue OVHcloud pour dépanner votre VPS et effectuer des vérifications système
updated: 2024-02-19
---

## Objectif

Le mode secours (*rescue*) est un outil fourni par OVHcloud pour démarrer votre VPS dans un système d'exploitation temporaire. Vous pouvez alors accéder à votre système afin d'exécuter des tâches de diagnostic et résoudre différents problèmes, par exemple :

- [Réinitialisation du mot de passe de l'utilisateur pour récupérer l'accès](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)
- Diagnostic des problèmes réseau
- Réparer un système d'exploitation défectueux
- Réparer un firewall logiciel mal configuré
- Test des performances du disque

Si vous rencontrez un problème avec votre système, effectuer des vérifications en mode rescue permet de déterminer s'il est lié à un logiciel installé sur le VPS ou s'il y a une cause plus profonde. Avant de contacter nos équipes de support, nous vous recommandons d'utiliser le mode rescue pour collecter les résultats des tests et exclure toute erreur logicielle.

> [!warning]
>
> Si certains de vos services sont toujours en ligne, le mode rescue les interrompt au moment du redémarrage du serveur dans l'environnement de secours auxiliaire.
>

**Ce guide vous explique comment activer le mode rescue depuis votre espace client OVHcloud et comment l'utiliser pour accéder à votre système de fichiers VPS.**

## Prérequis

- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.
- Avoir votre [VPS OVHcloud](https://www.ovhcloud.com/fr/vps/){.external} déjà configuré.

> [!warning]
> OVHcloud fournit des services dont la configuration et la gestion relèvent de votre responsabilité. Il est donc de votre responsabilité de vous assurer de leur bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de contacter un [prestataire de services spécialisé](https://partner.ovhcloud.com/fr/directory/) ou de contacter [notre communauté](https://community.ovh.com/) si vous rencontrez des difficultés ou des doutes concernant l'administration, l'utilisation ou la mise en œuvre de services sur un serveur.
>

## En pratique

### Activation du mode rescue

Connectez-vous à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), rendez-vous dans la section `Bare Metal Cloud`{.action} et sélectionnez votre serveur sous la partie `Serveur privés virtuels`{.action}.

Sous l'onglet `Accueil`{.action}, cliquez sur `...`{.action} à côté de « Boot » dans la zone **Votre VPS**.

![configuration du mode rescue](images/rescue_new.png){.thumbnail}

Sélectionnez `Redémarrer en mode rescue`{.action} dans le menu.

Si votre espace client est différent, reportez-vous à notre guide « [Gérer un VPS legacy](/pages/bare_metal_cloud/virtual_private_servers/vps_legacy_control_panel) ».

### Utilisation du mode rescue

Une fois le redémarrage initié, une barre de progression vous indiquera la durée de la tâche. Notez que cela peut prendre plusieurs minutes.

> [!primary]
>
> Vous recevrez un e-mail automatique contenant les informations d'identification SSH pour accéder au mode rescue. Veuillez attendre la réception de l'e-mail avant de poursuivre toute action. Cet e-mail est également disponible dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Pour le retrouver, cliquez sur le nom associé à votre identifiant OVHcloud dans la barre de menus située dans le coin supérieur droit, puis sélectionnez `E-mails de service`{.action}.
>

Vous devrez ensuite [accéder à votre serveur via SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction), en utilisant le mot de passe temporaire généré pour le mode rescue.

Exemple :

```bash
ssh root@vps-x11x11xyy.vps.ovh.net
```

```console
root@vps-x11x11xyy.vps.ovh.net's password:
```

> [!warning]
>
> Votre client SSH bloquera probablement la connexion dans un premier temps en raison d'une incompatibilité de l'empreinte ECDSA. Ceci est normal car le mode rescue utilise son propre serveur SSH temporaire.
>
> Une façon de contourner ce problème est de « commenter » l'empreinte de votre VPS en ajoutant un `#` devant sa ligne dans le fichier `known_hosts`. N’oubliez pas d’annuler cette modification avant de repasser le netboot en mode « normal ».<br>Vous pouvez également supprimer la ligne du fichier. Votre client SSH ajoutera alors une nouvelle entrée d'empreinte pour le VPS lorsque la connexion sera à nouveau établie. Si vous avez besoin d'instructions plus détaillées, reportez-vous à notre guide « [Introduction au SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction#login) ».
>

Pour effectuer la plupart des modifications sur votre serveur via SSH en mode rescue, vous devrez monter la partition système.

Une fois connecté, vérifiez les disques attachés avec cette commande :

```bash
lsblk
```

Le résultat sera similaire à l'exemple de sortie suivant :

```console
NAME    MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sda       8:0    0   2.9G  0 disk
└─sda1    8:1    0   2.9G  0 part /
sdb       8:16   0   160G  0 disk
├─sdb1    8:17   0 159.9G  0 part
├─sdb14   8:30   0     4M  0 part
└─sdb15   8:31   0   106M  0 part
```

En mode rescue, `sda` est le disque en mode rescue et `sda1` est la partition de secours principale montée sur `/`.

Dans cet exemple, le disque principal du VPS est `sdb` et la partition système est `sdb1` (indiquée par la taille).

Montez cette partition avec la commande suivante :

```bash
mount /dev/sdb1 /mnt/
```

Vos fichiers sont maintenant accessibles depuis le point de montage `/mnt` :


```bash
cd /mnt
```

```bash
ls
```

Vous devriez alors voir votre système de fichiers s'afficher :

```console
bin  boot  dev  etc  home  lib  lib32  lib64  libx32  lost+found  media  mnt  opt  proc  root  run  sbin  snap  srv  sys  tmp  usr  var
```

Cependant, avant de pouvoir manipuler cette partition, vous devez l'ouvrir pour un accès en écriture, ce que vous pouvez faire avec la commande suivante :

```bash
chroot /mnt
```

Vous pouvez maintenant appliquer des modifications à votre système, par exemple [réinitialiser les mots de passe utilisateur et les clés SSH](#gofurther).

Une fois vos actions terminées en mode rescue, redémarrez le VPS en mode normal depuis votre espace client.

![rescue mode control panel](images/rescue_exit.png){.thumbnail}

### Résoudre les problèmes de démarrage

En cas d'erreur lors du redémarrage d'un VPS, suivez ces étapes :

- Vérifiez le KVM dans votre espace client pour obtenir des informations pertinentes sur les raisons pour lesquelles le VPS ne peut pas démarrer. Consultez notre [guide KVM](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps) pour obtenir de l’aide sur cette fonctionnalité.
- Si le KVM indique que le VPS est bloqué au démarrage ou ne parvient pas à trouver le disque, assurez-vous que [les logs de démarrage sont activés](/pages/bare_metal_cloud/virtual_private_servers/bootlog_display_kvm). Relayez les logs pertinents à nos équipes support pour de plus amples investigations en [créant une demande d'assistance](https://help.ovhcloud.com/csm?id=csm_get_help).

<a name="gofurther"></a>

## Aller plus loin

[Introduction au SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Comment récupérer l'accès au serveur en cas de perte du mot de passe de l'utilisateur](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)

[Remplacer une paire de clés SSH](/pages/bare_metal_cloud/dedicated_servers/replacing-lost-ssh-key)

[Vérifier le système de fichiers sur un VPS](/pages/bare_metal_cloud/virtual_private_servers/check-filesystem)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
