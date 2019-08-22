---
title: 'Configurer votre MegaRAID en RAID 0'
slug: using-the-maximum-amount-of-disk-space
excerpt: 'Découvrez comment paramétrer les disques de votre serveur en RAID 0, afin d''exploiter le maximum d’espace utilisable'
section: 'Gestion du serveur'
---

**Dernière mise à jour le 02/08/2018**
 
## Objectif

Le RAID (Redundant Array of Independent Disks) est un ensemble de techniques qui atténuent la perte de données sur un serveur, en répliquant les informations sur plusieurs disques.

Le niveau de RAID par défaut des serveurs OVH est le RAID 1\. Celui-ci double le volume occupé par vos données, réduisant ainsi l'espace disponible.

**Découvrez comment paramétrer les disques de votre serveur en RAID 0, afin d'exploiter le maximum d’espace utilisable.**

> [!warning]
> 
> Attention : le RAID 0 n’offre ni **tolérance aux pannes** ni ** redondance des données**. Cela rend très probable la perte d’informations en cas de panne de disque.
> 

## Prérequis

- Disposer d’un [serveur dédié](https://www.ovh.com/fr/serveurs_dedies/){.external} avec un RAID matériel.
- Avoir accès à votre serveur via SSH en tant qu'administrateur (root)

## En pratique

### Utiliser votre espace client OVH

Dans votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, cliquez sur le menu `Dédié`{.action} et sélectionnez votre serveur.

Ensuite, sous l'onglet `État du serveur`{.action}, cliquez sur le bouton `Réinstaller`{.action} pour installer un nouveau système d'exploitation avec votre configuration RAID 0 personnalisée.

Sélectionnez **Installer depuis un template OVH** puis cliquez sur `Suivant`{.action}.

![MegaRAID](images/server_installation_raid0_01.png){.thumbnail}

Sélectionnez le système d’exploitation que vous voulez installer et cliquez sur `Suivant`{.action}.

Cochez les cases **Personnaliser la configuration du RAID matériel** et **Personnaliser la configuration de la partition** puis cliquez sur `Suivant`{.action}.

![MegaRAID](images/server_installation_raid0_02.png){.thumbnail}

Sélectionnez « raid0 » dans la liste de RAID déroulante et cliquez sur `Suivant`{.action}.

![MegaRAID](images/server_installation_raid0_03.png){.thumbnail}

Configurez les partitions selon vos besoins, puis cliquez sur `Suivant`{.action}.

![MegaRAID](images/server_installation_raid0_04.png){.thumbnail}

Enfin, cliquez sur `Confirmer`{.action}.

![MegaRAID](images/server_installation_raid0_05.png){.thumbnail}

Une fois votre serveur configuré, vérifiez la taille des partitions en vous y connectant via SSH et en exécutant la commande suivante :

```sh
df -h
```

### Utiliser le mode rescue

Dans votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, cliquez sur le menu `Dédié`{.action} et sélectionnez votre serveur.

Sous l'onglet `État du serveur`{.action}, cliquez sur le bouton `Modifier`{.action} pour changer le système de démarrage.

![MegaRAID](images/rescue_mode_raid0_01.png){.thumbnail}

Ensuite, sélectionnez `Démarrer en mode rescue`{.action} et choisissez `rescue64-pro`{.action} dans la liste déroulante.

Entrez maintenant votre adresse e-mail dans le champ `Obtenir votre nom d'utilisateur à jour`{.action}.

![MegaRAID](images/rescue_mode_raid0_02.png){.thumbnail}

Cliquez sur `Suivant`{.action} puis sur `Confirmer`{.action} dans l'écran qui s’affiche.

![MegaRAID](images/rescue_mode_raid0_03.png){.thumbnail}

Cliquez sur le bouton `Redémarrer`{.action} dans [l’espace client](https://www.ovh.com/auth/?action=gotomanager){.external}.

![MegaRAID](images/server_installation_raid0_06.png){.thumbnail}

Lorsque votre serveur redémarre, connectez-vous à ce dernier via SSH en utilisant vos identifiants du mode recue. Ceux-ci vous ont été envoyés à l’adresse e-mail fournie précédemment.

Depuis la ligne de commande, tapez les commandes suivantes pour supprimer les paramètres RAID existants. Toutes les données du RAID seront supprimées :

```sh
MegaCli -CfgLdDel -L0 -a0
MegaCli -CfgLdDel -Lall -aAll
```

Entrez la commande suivante pour récupérer les identifiants d’emplacement de vos disques :

```sh
MegaCli -PdList -aALL | egrep "Slot|Device ID"
```

Entrez les commandes suivantes pour configurer le RAID 0 :

```sh
MegaCli -CfgLDAdd -R0[252:0,252:1] -a0
```

Dans cet exemple, 252 est l'identifiant du boîtier du disque.

Après avoir défini le nouveau niveau de RAID, vous pouvez vérifier les paramètres à l'aide de la commande suivante :

```sh
MegaCli -LDInfo -Lall -a0 |grep -i size
```

## Aller plus loin

[« Remplacer à chaud un disque sur un serveur en RAID matériel. »](https://docs.ovh.com/fr/dedicated/hotswap-raid-hard/){.external}

[« Remplacer à chaud un disque sur un serveur en RAID logiciel. »](https://docs.ovh.com/fr/dedicated/hotswap-raid-soft/){.external}

[« Gestion du RAID matériel. »](https://docs.ovh.com/fr/dedicated/raid-hard/){.external} 

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.