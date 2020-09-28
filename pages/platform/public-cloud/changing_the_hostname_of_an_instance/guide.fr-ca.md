---
title: 'Modifier le hostname d’une instance Public Cloud'
slug: modifier-le-hostname-dune-instance
excerpt: 'Découvrez comment modifier le hostname d''une instance Public Cloud'
legacy_guide_number: 1928
section: Tutoriels
---

**Dernière mise à jour le 07/06/2018**

## Objectif

Le module Cloud-init permet de configurer votre [instance Public Cloud](https://www.ovh.com/ca/fr/public-cloud/instances/){.external} lors de sa création, mais aussi à chaque redémarrage. Par conséquent, si vous souhaitez reconfigurer votre hostname, à cause d'une erreur lors de la création de votre instance ou pour reconfigurer votre serveur e-mail, il vous sera nécessaire de désactiver le module Cloud-init. Celui-ci se charge de configurer le hostname afin que celui ci ne soit pas rétabli.

**Ce guide vous explique comment reconfigurer cloud-init afin d'être en mesure de modifier le hostname de votre instance.**

> [!warning]
>
> OVH met à votre disposition des services dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs et ne pourrons vous fournir d'assistance. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. Plus d’informations dans la section « Aller plus loin » de ce guide.
>


## Prérequis

- Avoir créé une [instance Public Cloud](https://www.ovh.com/ca/fr/public-cloud/instances/){.external}.
- [Être connecté en SSH](../premiere-connexion/){.external} (root) à l'instance.


## En pratique

### Désactiver le module cloud-init

Afin de désactiver cloud-init, il faut dans un premier temps modifier le fichier de configuration :

```sh
sudo vim /etc/cloud/cloud.cfg
```

Il suffit enfin d'ajouter ou de modifier les deux lignes suivantes :

```sh
preserve_hostname: true
manage_etc_hosts: false
```

### Modifier le hostname

La première étape consiste à modifier le hostname :

```sh
sudo vim /etc/hostname
webserver
```

Ensuite il reste à modifier le fichier `/etc/hosts` :

```sh
sudo vim /etc/hosts

127.0.1.1 webserver.localdomain webserver
127.0.0.1 localhost
```

L'instance doit ensuite être redémarrée :

```bash
sudo reboot
```

Après le redémarrage, la modification du hostname a correctement été prise en compte :

```sh
sudo cat /etc/hosts

127.0.1.1 webserver.localdomain webserver
127.0.0.1 localhost
```

## Aller plus loin 

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
