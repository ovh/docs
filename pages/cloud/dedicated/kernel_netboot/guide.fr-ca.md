---
title: Démarrer son serveur sur un noyau OVHcloud
slug: kernel-netboot
excerpt: Retrouvez ici les étapes a suivre pour démarrer votre serveur sur un noyau OVHcloud depuis le réseau.
section: Divers
---

**Dernière mise à jour le 25/02/2022**

## Objectif

Le Netboot est un service proposé gratuitement par OVHcloud et qui permet de démarrer le serveur dédié OVHcloud sur un kernel déjà compilé. Une fois configuré de cette façon, votre serveur charge automatiquement le noyau depuis le réseau. Vous n'avez rien d'autre à configurer. Cette méthode vous permet également de mettre à jour très simplement votre noyau car OVHcloud compile la dernière version du noyau dès sa disponibilité et la met à disposition sur le Netboot.

## Prérequis

- Posséder un [serveur dédié](https://www.ovhcloud.com/fr-ca/bare-metal/).
- Avoir accès à [l'espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc).

## En pratique

### Démarrer votre serveur à partir du mode Network

> [!primary]
>
> Cette partie est destinée aux serveurs fonctionnant sous Linux. Pour Windows, FreeBSD et les distributions de virtualisation, seuls les modes de boot sur le disque dur ou en mode rescue sont possibles.
>

Connectez-vous à votre votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca) et rendez-vous dans la section `Bare Metal Cloud`{.action} puis sélectionnez votre serveur dans `Serveurs dédiés`{.action}.

Recherchez « Boot » dans la zone **Informations générales** et cliquez sur `...`{.action} puis sur `Modifier`{.action}. 

![Netboot](images/netboot_2022.png){.thumbnail}

Sélectionnez `Booter en mode network`{.action}.

![Netboot](images/netboot_005.png){.thumbnail}

Sélectionnez le noyau (kernel) disponible puis entrez le Root Device (partition où se trouve la partition racine de votre serveur).

Pour déterminer le Root Device de votre serveur, consultez le fichier /etc/fstab de votre serveur.

En SSH :

```sh
cat /etc/fstab

/dev/sda1 / ext3 errors=remount-ro 0 1
/dev/sda2 /home ext3 defaults,grpquota,usrquota 1 2
/dev/sda3 swap swap defaults 0 0
  proc /proc proc defaults 0 0
sysfs /sys sysfs defaults 0 0
shm /dev/shm tmpfs nodev,nosuid,noexec 0 0
```

Dans notre exemple, le Root Device sera /dev/sda1.

Cliquez sur `Suivant`{.action} et `Valider`{.action}.

Une fois la modification terminée, cliquez sur `...`{.action} à droite de « Statut » dans la zone intitulée **Etat des services.** Cliquez sur `Redémarrer`{.action} pour que le netboot soit pris en compte.

![Netboot](images/netboot_004.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>
