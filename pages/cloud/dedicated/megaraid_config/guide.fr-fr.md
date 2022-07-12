---
title: 'Configurer votre MegaRAID en RAID 0'
slug: using-the-maximum-amount-of-disk-space
excerpt: "Découvrez comment paramétrer les disques de votre serveur en RAID 0, afin d'exploiter le maximum d’espace utilisable"
section: 'RAID & disques'
---

**Dernière mise à jour le 08/07/2022**
 
## Objectif

Le RAID (Redundant Array of Independent Disks) est un ensemble de techniques qui atténuent la perte de données sur un serveur, en répliquant les informations sur plusieurs disques.

Le niveau de RAID par défaut des serveurs OVHcloud est le RAID 1\. Celui-ci double le volume occupé par vos données, réduisant ainsi l'espace disponible.

**Découvrez comment paramétrer les disques de votre serveur en RAID 0, afin d'exploiter le maximum d’espace utilisable.**

> [!warning]
> 
> Attention : le RAID 0 n’offre ni **tolérance aux pannes** ni ** redondance des données**. Cela rend très probable la perte d’informations en cas de panne de disque.
> 

## Prérequis

- Disposer d’un [serveur dédié](https://www.ovhcloud.com/fr/bare-metal/){.external} avec un RAID matériel.
- Avoir accès à votre serveur via SSH en tant qu'administrateur (root)

## En pratique

### Utiliser votre espace client OVHcloud

Dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, sélectionnez votre serveur en allant dans la partie `Bare Metal Cloud`{.action}, puis `Serveurs dédiés`{.action}. 

Recherchez « Dernier système d'exploitation (OS) installé par OVHcloud » dans la zone `Informations générales`{.action} et cliquez sur `...`{.action} puis sur `Installer`{.action} pour installer un nouveau système d'exploitation avec votre configuration RAID 0 personnalisée.

Sélectionnez **Installer à partir d'un template OVH** puis cliquez sur `Suivant`{.action}.

![MegaRAID](images/server_installation_raid0_1.png){.thumbnail}

Sélectionnez le système d’exploitation que vous voulez installer et cliquez sur `Suivant`{.action}.

Cochez les cases **Personnaliser la configuration du hardware RAID** et **Personnaliser la configuration des partitions** puis cliquez sur `Suivant`{.action}.

![MegaRAID](images/server_installation_raid0_2.png){.thumbnail}

Sélectionnez « raid0 » dans la liste de RAID déroulante et cliquez sur `Suivant`{.action}.

![MegaRAID](images/server_installation_raid0_3.png){.thumbnail}

Configurez les partitions selon vos besoins, puis cliquez sur `Suivant`{.action}.

![MegaRAID](images/server_installation_raid0_4.png){.thumbnail}

Enfin, cliquez sur `Confirmer`{.action}.

![MegaRAID](images/server_installation_raid0_5.png){.thumbnail}

Une fois votre serveur configuré, vérifiez la taille des partitions en vous y connectant via SSH et en exécutant la commande suivante :

```sh
df -h
```

### Utiliser le mode rescue

Dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, sélectionnez votre serveur en allant dans la partie `Bare Metal Cloud`{.action}, puis `Serveurs dédiés`{.action}.

Recherchez « Boot » dans la zone **Informations générales** et cliquez sur `...`{.action} puis sur `Modifier`{.action} pour changer le système de démarrage.

![MegaRAID](images/rescue_mode_raid0_1.png){.thumbnail}

Ensuite, sélectionnez `Booter en mode rescue`{.action} et choisissez `rescue-customer`{.action} dans la liste déroulante.

Dans le champ "Recevoir les identifiants du mode sur l'adresse e-mail :", spécifiez une autre adresse e-mail si vous ne souhaitez pas que les identifiants de connexion soient envoyées à l’adresse principale de votre compte OVHcloud.

![MegaRAID](images/rescue_mode_raid0_2.png){.thumbnail}

Cliquez sur `Suivant`{.action} puis sur `Confirmer`{.action} dans l'écran qui s’affiche.

![MegaRAID](images/rescue_mode_raid0_3.png){.thumbnail}

Une fois la modification terminée, cliquez sur `...`{.action} à droite de « Statut » dans la zone intitulée **Etat des services.** 

Cliquez sur le bouton `Redémarrer`{.action} et le serveur redémarrera en mode rescue. Cette opération peut prendre quelques minutes. 

![MegaRAID](images/server_installation_raid0_6.png){.thumbnail}

Lorsque votre serveur redémarre, connectez-vous à ce dernier via SSH en utilisant vos identifiants du mode rescue. Ceux-ci vous ont été envoyés à l’adresse e-mail principale du compte ou dans le cas échéant, à l'adresse e-mail fournie précédemment.

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
MegaCli -LDInfo -Lall -a0 | grep -i size
```

## Aller plus loin

[« Remplacer à chaud un disque sur un serveur en RAID matériel. »](https://docs.ovh.com/fr/dedicated/hotswap-raid-hard/){.external}

[« Remplacer à chaud un disque sur un serveur en RAID logiciel. »](https://docs.ovh.com/fr/dedicated/hotswap-raid-soft/){.external}

[« Gestion du RAID matériel. »](https://docs.ovh.com/fr/dedicated/raid-hard/){.external} 

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.