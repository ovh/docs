---
title: Se connecter à une instance Public Cloud
slug: premiere-connexion
legacy_guide_number: 1787
excerpt: Découvrez comment vous connecter à vos instances Public Cloud
section: Premiers pas
---

**Dernière mise à jour le 13/02/2018**

## Objectif

La connexion à votre instance Public Cloud est similaire à une connexion « normale » à un serveur dédié (VPS, serveur dédié, etc.), mais elle possède un utilisateur spécifique.

**Ce guide vous explique comment vous connecter à vos instances Public Cloud sous Linux ou Windows.**


## Prérequis

- Être connecté à l'[espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.
- Avoir créé une [instance Public Cloud](https://www.ovh.com/fr/public-cloud/instances/){.external}.


## En pratique

### Se connecter sur une instance Linux depuis un environnement Linux/Mac

Voici la commande SSH pour vous connecter à votre instance Public Cloud :

```sh
ssh *utilisateur*@IP_instance
```

En fonction des distributions, l'utilisateur sera différent sur Public Cloud. Voici un tableau (non exhaustif) des utilisateurs en fonction des distributions :

|Distribution|Utilisateur|
|---|---|
|Archlinux|arch|
|Centos 6|centos|
|Centos 7|centos|
|CoreOS|core|
|Debian 7|debian|
|Debian 8|debian|
|Debian 9|debian|
|Fedora 25|fedora|
|Fedora 26|fedora|
|FreeBSD 11.0 ZFS|freeBSD|
|Ubuntu 14.04|ubuntu|
|Ubuntu 16.04|ubuntu|
|Ubuntu 16.10|ubuntu|
|Ubuntu 17.04|ubuntu|

> [!primary]
>
> En connexion directe, vous posséderez les droits de ces utilisateurs. Si vous souhaitez utiliser les privilèges de *super-utilisateur*, il faudra utiliser la commande `sudo`.
>


- Mise en garde sur l'empreinte du serveur SSH distant :

Lors de votre première connexion, vous devrez confirmer l'authenticité de l'hôte en cliquant sur `yes`.

```sh
The authenticity of host 217.xxx.xxx.98 (217.xxx.xx.98) cant be established.
ECDSA key fingerprint is f4:95:09:ce:b6:63:73:ea:54:db:76:5e:64:f1:5e:6d.
Are you sure you want to continue connecting (yes/no)?`
```


### Se connecter sur une instance Linux depuis un environnement Windows

Pour vous connecter à une instance Linux depuis Windows, il suffit d'utiliser un logiciel de type [PuTTY](https://www.putty.org/){.external} ou, pour les dernières versions de Windows 10, d'en utiliser les fonctions [désormais natives](https://docs.microsoft.com/en-us/windows/wsl/about){.external}. Il vous suffira ensuite de suivre ensuite les mêmes consignes décrites précédemment pour Linux.


### Se connecter sur une instance Windows

#### Finaliser l'installation

Une fois votre instance créée, il faut finaliser ce qu'on appelle le *sysprep*. Pour cela, dans votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, il faut lancer la console VNC :

![Console VNC](images/vnc_console.png)

Durant la première étape, vous pourrez choisir votre pays, la langue souhaitée et la langue du clavier. Cliquez ensuite `Next`{.action} :

![Choix de la langue dans le sysprep](images/sysprep_first_step.png)

Vous devez ensuite choisir le mot de passe pour l'utilisateur *administrator* :

![Choix du mot de passe dans le sysprep](images/sysprep_first_step.png)

Il vous reste à valider votre choix avec `Finish`{.action}. L'instance va redémarrer et vous pourrez vous connecter sur votre serveur Windows.


#### Se connecter à Windows

La connexion à votre instance Windows se fait directement via la fonction `Bureau à distance` depuis votre poste sous Windows :

![Choix du mot de passe dans le sysprep](images/remote_desktop.png)

Il suffira dans les étapes suivantes de préciser l'IP de votre instance (première étape de votre connexion via le bureau à distance) puis d'ajouter votre identifiant (*administrator*) et le mot de passe que vous avez définis :

![Bureau à distance - Connexion](images/remote_desktop_connection_IP.png)

![Bureau à distance - Connexion utilisateur](images/remote_desktop_connection_user.png)

Un message vous demande de valider la connexion, choisissez `Oui`{.action} ou `Yes`{.action} :

![Validation de la connexion](images/connection_validation.png)

Vous êtes désormais connecté à votre instance.

> [!primary]
>
> En cas de difficulté de connexion à votre instance Windows, vérifiez bien que le pare-feu Windows autorise la connexion RDP. Reportez-vous au [guide correspondant](https://docs.ovh.com/fr/vps/windows-first-config/){.external} si vous avez besoin de plus amples informations.
>


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.