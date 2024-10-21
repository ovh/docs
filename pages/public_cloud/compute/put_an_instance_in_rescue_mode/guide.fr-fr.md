---
title: "Comment activer le mode rescue sur une instance Public Cloud"
excerpt: "Découvrez comment activer et utiliser le mode rescue OVHcloud pour votre instance Public Cloud"
updated: 2024-06-03
---

## Objectif

En cas de mauvaises configurations, ou de perte de clé SSH, votre instance peut être inaccessible.

Dans de telles circonstances, vous pouvez utiliser le mode rescue pour reconfigurer votre instance ou récupérer vos données. 

**Ce guide vous explique comment redémarrer votre instance Public Cloud OVHcloud en mode rescue et accéder à vos fichiers.**

## Prérequis

- Une [instance Public Cloud](/links/public-cloud/public-cloud) dans votre compte OVHcloud
- Avoir accès à votre [espace client OVHcloud](/links/manager)

## En pratique

> [!alert]
>
> A ce jour, le mode rescue pour les instances Metal n'est pas accessible via l'espace client OVHcloud. Pour plus d'informations, consultez notre guide dédié au [mode rescue pour les instances Metal](/pages/public_cloud/compute/rescue_mode_metal_instance).

### Activer le mode rescue

Tout d’abord, connectez-vous à [l’espace client d’OVHcloud](/links/manager), accédez à la section `Public Cloud`{.action} et sélectionnez le projet Public Cloud concerné.

Cliquez ensuite sur l'onglet `Instances`{.action} dans la barre de navigation à gauche.

Cliquez sur `...`{.action} à droite de l'instance et sélectionnez `Redémarrer en mode rescue`{.action}.

![tableau de bord](images/rescue2022.png){.thumbnail}

Vous allez maintenant voir la boîte de dialogue « Démarrer en mode rescue ». Cliquez sur la liste déroulante pour sélectionner la distribution Linux que vous souhaitez utiliser en mode rescue, puis cliquez sur le bouton `Redémarrer`{.action}.

![tableau de bord](images/rescue2.png){.thumbnail}

Une fois l’instance redémarrée en mode rescue, une boîte d’information affiche les méthodes d’accès disponibles.

![tableau de bord](images/rescuedata.png){.thumbnail}

Votre **mot de passe du mode rescue** temporaire sera uniquement affiché dans la console VNC. Cliquez sur votre instance dans le tableau, puis accédez à l'onglet `Console VNC`{.action} pour le récupérer.

<table><tbody><tr><td><img alt="VNC console" class="thumbnail" src="/images/vncconsole.png" loading="lazy"></td><td><img alt="VNC rescue" class="thumbnail" src="/images/vncrescue.png" loading="lazy"></td></tr></tbody></table>

### Accéder à vos données

Une fois le mode rescue activé, les données de votre instance seront attachées en tant que disque supplémentaire. Il suffit donc de le monter, en suivant les étapes suivantes.

En premier lieu, ouvrez une [connexion SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction) avec votre instance. Une fois connecté, vérifiez les disques disponibles avec cette commande :

```bash
lsblk
```

Le résultat sera similaire à l'exemple de sortie suivant :

```console
NAME    MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS
sda       8:0    0  2.9G  0 disk
└─sda1    8:1    0  2.9G  0 part /
sdb       8:16   0   25G  0 disk
├─sdb1    8:17   0   24G  0 part
├─sdb14   8:30   0    4M  0 part
├─sdb15   8:31   0  106M  0 part
└─sdb16 259:0    0  913M  0 part
```

En mode rescue, `sda` est le disque en mode rescue et `sda1` est la partition de secours principale montée sur `/`.

Dans cet exemple, le disque principal est `sdb` et la partition système est `sdb1` (indiquée par la taille).

Montez cette partition avec la commande suivante :

```bash
mount /dev/sdb1 /mnt/
```

Vos fichiers sont maintenant accessibles depuis le point de montage `/mnt`.

### Désactiver le mode rescue

Une fois vos tâches terminées, vous pouvez désactiver le mode rescue en redémarrant votre instance depuis l'espace client. Pour cela, cliquez sur `...`{.action} et sélectionnez `Sortir du mode rescue`{.action}.

![tableau de bord](images/rescueexit2022.png){.thumbnail}

> [!warning]
> Si le bouton `Sortir du mode rescue`{.action} n'apparaît pas une fois l'instance en mode rescue, nous vous recommandons de rafraîchir votre onglet.
>

### Activer le mode rescue avec les API OpenStack

Vous pouvez activer le mode rescue via les API OpenStack en utilisant la commande suivante :

```bash
nova rescue INSTANCE_ID
```

Pour sortir du mode rescue, utilisez la commande suivante :

```bash
nova unrescue INSTANCE_ID
```

## Aller plus loin

[Comment remplacer une paire de clés SSH sur une instance](/pages/public_cloud/compute/replacing_lost_ssh_key)

Échangez avec notre [communauté d'utilisateurs](/links/community).
