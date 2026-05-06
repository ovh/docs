---
title: "Configurer MegaRAID en RAID 0 sur un serveur dédié"
excerpt: "Configurez le RAID 0 avec le contrôleur MegaRAID pour utiliser la capacité maximale des disques de votre serveur dédié OVHcloud"
updated: 2025-04-29
---

 
## Objectif

Le RAID (Redundant Array of Independent Disks) est un ensemble de techniques qui atténuent la perte de données sur un serveur, en répliquant les informations sur plusieurs disques.

Le niveau de RAID par défaut des serveurs OVHcloud est le RAID 1\. Celui-ci double le volume occupé par vos données, réduisant ainsi l'espace disponible.

**Découvrez comment paramétrer les disques de votre serveur en RAID 0, afin d'exploiter le maximum d’espace utilisable.**

> [!warning]
> 
> Attention : le RAID 0 n’offre ni **tolérance aux pannes** ni **redondance des données**. Cela rend très probable la perte d’informations en cas de panne de disque.
> 

## Prérequis

- Disposer d’un [serveur dédié](/links/bare-metal/bare-metal) avec un RAID matériel.
- Avoir accès à votre serveur via SSH en tant qu’administrateur (sudo).

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### Accès à l’espace client OVHcloud

- **Lien direct :** [Serveurs dédiés](/links/control-panel/baremetal-dedicated-servers)
- **Pour accéder à vos services :** `Bare Metal Cloud`{.action} > `Serveurs dédiés`{.action} > Sélectionnez votre serveur

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## En pratique

### Utiliser votre espace client OVHcloud

Sous l'onglet `Informations générales`{.action}, cliquez sur `...`{.action} en face du système d'exploitation, puis cliquez sur `Installer`{.action}.

Sélectionnez le système d’exploitation que vous voulez installer et cliquez sur `Suivant`{.action}.

Cochez les cases **Personnaliser la configuration du hardware RAID** et **Personnaliser la configuration des partitions** puis cliquez sur `Suivant`{.action}.

![Cases a cocher pour personnaliser le RAID materiel et les partitions](images/server_installation_raid0_2.png){.thumbnail}

Sélectionnez « raid0 » dans la liste de RAID déroulante et cliquez sur `Suivant`{.action}.

![Selectionner RAID 0 dans la liste deroulante du niveau RAID](images/server_installation_raid0_3.png){.thumbnail}

Configurez les partitions selon vos besoins, puis cliquez sur `Suivant`{.action}.

![Configurer les partitions du disque pour l'installation](images/server_installation_raid0_4.png){.thumbnail}

Enfin, cliquez sur `Confirmer`{.action}.

![Confirmer les paramètres d'installation en RAID 0](images/server_installation_raid0_5.png){.thumbnail}

Une fois votre serveur configuré, vérifiez la taille des partitions en vous y connectant via SSH et en exécutant la commande suivante :

```sh
df -h
```

### Utiliser le mode rescue

Recherchez « Boot » dans la zone **Informations générales** et cliquez sur `...`{.action} puis sur `Modifier`{.action} pour changer le système de démarrage.

![Modifier le paramètre de démarrage dans l'onglet Informations générales](images/rescue_mode_raid0_1.png){.thumbnail}

Ensuite, sélectionnez `Booter en mode rescue`{.action} et choisissez `rescue-customer`{.action} dans la liste déroulante.

Dans le champ "Recevoir les identifiants du mode sur l'adresse e-mail :", spécifiez une autre adresse e-mail si vous ne souhaitez pas que les identifiants de connexion soient envoyées à l’adresse principale de votre compte OVHcloud.

![Selectionner le démarrage en mode rescue avec l'option rescue-customer](images/rescue_mode_raid0_2.png){.thumbnail}

Cliquez sur `Suivant`{.action} puis sur `Confirmer`{.action} dans l'écran qui s’affiche.

![Étape de confirmation du mode rescue](images/rescue_mode_raid0_3.png){.thumbnail}

Une fois la modification terminée, cliquez sur `...`{.action} à droite de « Statut » dans la zone intitulée **Etat des services.** 

Cliquez sur le bouton `Redémarrer`{.action} et le serveur redémarrera en mode rescue. Cette opération peut prendre quelques minutes. 

![Redemarrer le serveur depuis la section Etat des services](images/server_installation_raid0_6.png){.thumbnail}

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

[« Remplacer à chaud un disque sur un serveur en RAID matériel. »](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_hard)

[« Remplacer à chaud un disque sur un serveur en RAID logiciel. »](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_soft)

[« Gestion du RAID matériel. »](/pages/bare_metal_cloud/dedicated_servers/raid_hard) 

Échangez avec notre [communauté d'utilisateurs](/links/community).
