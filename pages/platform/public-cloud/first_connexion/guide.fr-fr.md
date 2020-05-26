---
title: 'Se connecter à une instance Public Cloud'
slug: premiere-connexion
legacy_guide_number: 1787
excerpt: 'Découvrez comment vous connecter à vos instances Public Cloud OVHcloud sous Windows et Linux'
section: 'Premiers pas'
order: 4
---

**Dernière mise à jour le 11/02/2020**

## Objectif

La connexion à vos instances Public Cloud avec OVHcloud est similaire à une connexion standard pour un VPS ou un serveur dédié, mais chaque instance a un compte utilisateur spécifique.

**Ce guide explique comment vous connecter à vos instances Public Cloud OVHcloud sous Windows et Linux.**

## Prérequis

* Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.
* Avoir créé une [instance Public Cloud OVHcloud](https://www.ovhcloud.com/fr/public-cloud/){.external} dans votre compte

## En pratique

### Connexion à une instance Linux à l'aide d'un système d'exploitation Linux / Mac

Exécutez la commande SSH suivante pour vous connecter à votre instance Public Cloud OVHcloud, en remplaçant "user" si nécessaire et "instance_IP" par l'adresse IP de votre instance:

```sh
ssh user@instance_IP
```

L'utilisateur de Public Cloud sera différent selon le système d'exploitation que vous utilisez. Le tableau ci-dessous présente une liste (non exhaustive) d'utilisateurs, par système d'exploitation:

|Système d'exploitation|Utilisateur|
|---|---|
|Arch Linux|arch|
|CentOS 6|centos|
|CentOS 7|centos|
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
> En vous connectant directement, vous aurez les droits d'utilisateur standard. Si vous souhaitez devenir l'utilisateur root, vous pouvez utiliser la commande sudo -i ou sudo su.
>


**Avertissement concernant la signature publique du serveur distant SSH:**

Lorsque vous vous connectez pour la première fois, vous devrez confirmer l'authenticité du host en cliquant sur `yes`.

```sh
The authenticity of host 217.xxx.xxx.98 (217.xxx.xx.98) cant be established.
ECDSA key fingerprint is f4:95:09:ce:b6:63:73:ea:54:db:76:5e:64:f1:5e:6d.
Are you sure you want to continue connecting (yes/no)?`
```


### Connexion à une instance Linux à l'aide d'un système d'exploitation Windows

Pour vous connecter à une instance Linux à l'aide de Windows, vous pouvez utiliser un logiciel tel que [PuTTY](https://www.putty.org/){.external}. Vous pouvez également utiliser [les fonctionnalités natives](https://docs.microsoft.com/en-us/windows/wsl/about){.external} des dernières versions de Windows 10. Vous pouvez alors suivre les mêmes instructions que ci-dessus.


### Se connecter à une instance Windows

#### Finaliser l'installation

Une fois que vous avez créé votre instance, vous devrez finaliser une chose appelée *sysprep*. Pour cela, connectez-vous à [l’Espace client d’OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external} et lancez la console VNC:

![Console VNC](images/vnc_console.png)

Dans un premier temps, choisissez votre pays, votre langue et votre clavier, puis cliquez sur `Suivant`{.action}:

![Choisissez la langue dans sysprep](images/sysprep_first_step.png)

Vous devrez ensuite choisir le mot de passe *administrateur*:

![Choisissez un mot de passe dans sysprep](images/sysprep_password.png)

Finalement, confirmez les modifications que vous avez faites en cliquant sur `Terminer`{.action}. L'instance va redémarrer et vous pourrez ensuite vous connecter à votre serveur Windows.


#### Se connecter à Windows

Vous devrez vous connecter à votre instance Windows directement à partir de votre PC Windows, à l'aide de la fonction `Bureau à distance`:

![Choisissez un mot de passe dans sysprep](images/remote_desktop.png)

Dans les étapes suivantes, vous devrez ensuite entrer l’adresse IP de votre instance (première étape de connexion via le bureau à distance), puis entrer votre nom d’utilisateur (administrateur) et le mot de passe que vous avez défini:

![Bureau à distance - Connexion](images/remote_desktop_connection_IP.png)

![Bureau à distance - Connexion utilisateur](images/remote_desktop_connection_user.png)

Un message apparaîtra vous demandant de confirmer vos informations de connexion. Cliquez sur `Oui`{.action}:

![Confirmation de connexion](images/connection_validation.png)

Vous serez ensuite connecté à votre instance.

> [!primary]
>
> Si vous rencontrez des problèmes de connexion à votre instance Windows, assurez-vous que votre pare-feu Windows autorise les connexions RDP. Veuillez consulter notre guide sur la [configuration du serveur Windows](https://docs.ovh.com/gb/en/vps/windows-first-config/){.external} si vous avez besoin de plus d'informations.
> 


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/en/>.
