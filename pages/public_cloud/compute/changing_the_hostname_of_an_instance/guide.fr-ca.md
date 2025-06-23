---
title: 'Modifier le hostname d’une instance Public Cloud'
excerpt: "Découvrez comment modifier le hostname d'une instance Public Cloud"
updated: 2025-03-20
---

## Objectif

Le module Cloud-init permet de configurer votre [instance Public Cloud](/links/public-cloud/public-cloud){.external} lors de sa création, mais aussi à chaque redémarrage. Par conséquent, si vous souhaitez reconfigurer votre hostname, à cause d'une erreur lors de la création de votre instance ou pour reconfigurer votre serveur e-mail, il vous sera nécessaire de désactiver le module Cloud-init. Celui-ci se charge de configurer le hostname afin que celui ci ne soit pas rétabli.

**Ce guide vous explique comment reconfigurer cloud-init afin d'être en mesure de modifier le hostname de votre instance.**

> [!warning]
>
> OVHcloud met à votre disposition des services dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs et ne pourrons vous fournir d'assistance. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](/links/partner) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. Plus d’informations dans la section « Aller plus loin » de ce guide.
>
> Ce guide est destiné aux instances basées sur des distributions Linux **uniquement**.
>

## Prérequis

- Avoir créé une [instance Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps).
- [Être connecté en SSH](/pages/public_cloud/compute/public-cloud-first-steps#connect-instance) (sudo) à l'instance.

## En pratique

### Désactiver le module cloud-init

> [!primary]
>
> Pour ce guide nous utiliserons l'éditeur de fichier **vi** car il est présent par défaut sur les distributions Linux. Vous pouvez bien sûr utiliser l'éditeur de votre choix.
>
> Utilisation basique de vi :
>
> - Appuyer sur **i** pour passer en mode insertion de texte.
> - Appuyer sur **Échap** (Esc) pour quitter le mode insertion.
> - Taper **:wq** puis **Entrée** pour enregistrer et quitter.
> - Taper **:q!** puis **Entrée** pour quitter sans enregistrer.

Pour désactiver cloud-init, vous devez commencer par modifier le fichier de configuration :

```sh
sudo vi /etc/cloud/cloud.cfg
```

Il vous suffit d'ajouter les deux lignes suivantes ou de les modifier si elles existent déjà :

```sh
preserve_hostname: true
manage_etc_hosts: false
```

### Modifier le hostname

La première étape consiste à modifier le nom d’hôte (*hostname*). Dans cet exemple, nous allons changer le nom d’hôte en **webserver**. Vous pouvez bien sûr le modifier selon vos préférences :

```sh
sudo vi /etc/hostname
```

Ajoutez ou remplacez le contenu par :

```sh
webserver
```

Ensuite il reste à modifier le fichier `/etc/hosts` :

```sh
sudo vi /etc/hosts
```

Ajoutez ou remplacez le contenu par :

```sh
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

Échangez avec notre [communauté d'utilisateurs](/links/community).