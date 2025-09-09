---
title: Comment bien débuter avec les connexions SSH
excerpt: "Découvrez comment utiliser SSH pour accéder à votre serveur OVHcloud depuis la plupart des postes de travail"
updated: 2024-12-03
---

<style>
details>summary {
	color:rgb(33, 153, 232) !important;
	cursor: pointer;
}
details>summary::before {
	content:'\25B6';
	padding-right:1ch;
}
details[open]>summary::before {
	content:'\25BC';
}
</style>

## Objectif

Le protocole de communication SSH (Secure Shell) est le moyen privilégié pour établir des connexions hôtes cryptées via des réseaux publics. L'utilitaire OpenSSH est disponible sur tous les serveurs OVHcloud (VPS, serveurs dédiés, instances Public Cloud) pour permettre des connexions à distance sécurisées aux serveurs ainsi que d'autres opérations.

**Ce guide vous explique comment vous connecter en toute sécurité à votre serveur avec le protocole SSH.**

<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/gi7JqUvcEt0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> [!warning]
> OVHcloud fournit des services dont la configuration et la gestion relèvent de votre responsabilité. Il est donc de votre responsabilité de vous assurer de leur bon fonctionnement.
>
> Ce guide est conçu pour vous aider avec les tâches courantes. Néanmoins, nous vous recommandons de contacter un [prestataire de services spécialisé](/links/partner) ou de contacter la [communauté OVHcloud](/links/community) si vous rencontrez des difficultés. Plus d'informations dans la section [Aller plus loin](#gofurther) de ce guide.
>

## Prérequis

- Un [serveur dédié](/links/bare-metal/bare-metal) ou un [VPS](/links/bare-metal/vps) dans votre compte OVHcloud

> [!primary]
> Ce guide ne s'applique pas aux installations de serveurs Windows standard, car elles reposent sur le protocole Remote Desktop Protocol (RDP) pour les connexions. Cependant, les connexions SSH sont pertinentes lors de l'utilisation du mode rescue OVHcloud. Retroouvez plus d'informations dans la section [Aller plus loin](#gofurther) de ce guide.
>

## En pratique

Il existe plusieurs façons d'authentifier une connexion à un hôte distant via SSH. Les instructions suivantes concernent la méthode d'authentification avec **nom d'utilisateur et mot de passe**.  
Vous pouvez également configurer l'authentification par clé pour activer des connexions sécurisées sans échange de mot de passe. Retrouvez les détails dans nos guides :

- [Comment créer et utiliser des clés pour l'authentification SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)
- [Comment créer et utiliser des clés pour l'authentification SSH avec PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

Les identifiants initiaux (identifiant et mot de passe) vous sont transmis par e-mail après une installation ou une réinstallation du serveur depuis l'[espace client OVHcloud](/links/manager).

Le nom d'utilisateur correspond au système d'exploitation, par exemple `ubuntu` ou `debian`. Pour vous connecter, vous devez également spécifier l'adresse IP ou le `hostname` du serveur. Ces détails sont disponibles dans l'e-mail d'installation et dans l'espace client.

N’hésitez pas à consulter nos guides « Premiers pas » si vous souhaitez obtenir plus de détails sur ce sujet :

- Pour un [serveur dédié](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- Pour un [serveur dédié de la gamme **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- Pour un [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

### Comment se connecter à un serveur distant depuis une distribution GNU/Linux ou macOS

/// details | Dépliez cette section

#### Établissement d’une connexion

Un client en ligne de commande pour SSH (protocole OpenSSH) est généralement disponible par défaut. Ouvrez l'application de ligne de commande (Terminal) et connectez-vous au serveur avec la commande suivante :

```bash
ssh username@server_IP
```

Si vous avez changé le port SSH du serveur, utilisez plutôt cette commande :

```bash
ssh username@server_IP -p port_number
```

#### Connexion et fingerprint

Lorsque vous y êtes invité, tapez le mot de passe de l'utilisateur qui se connecte (ou collez-le d'un clic via le bouton central de la souris) et appuyez sur `Entrée`{.action}.

S'il s'agit d'une nouvelle connexion, votre client SSH recevra une **empreinte de clé** du serveur. Saisissez `yes` pour confirmer, puis le mot de passe de l'utilisateur qui se connecte pour se connecter.

Exemple de sortie :

```bash
ssh ubuntu@203.0.113.100
```

```console
The authenticity of host '203.0.113.100 (203.0.113.100)' can't be established.
ECDSA key fingerprint is SHA256:rRwrdsmJfzvJF5k0a4JmMSdaWbTlCgRKBukbmQ3gmso.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
Warning: Permanently added '203.0.113.100' (ECDSA) to the list of known hosts.
ubuntu@203.0.113.100's password:
```

L'empreinte sera enregistrée sur votre équipement et vérifiée à chaque nouvelle connexion. Si la clé a changé sur l'hôte distant, vous recevrez un message d'avertissement lors de la tentative de connexion.

Exemple de sortie :

```console
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Host key verification failed.
Offending ECDSA key in /home/user/.ssh/known_hosts:3
```

Cela signifie que l'un des événements suivants s'est produit :

- Le serveur a été réinstallé avec succès.
- Le service SSH sur le serveur a été réinstallé avec succès.
- Vous vous connectez à un hôte différent avec la même adresse IP.

> [!primary]
> Le message d'avertissement n'indique pas nécessairement un problème de sécurité. Cependant, si vous n'êtes pas à l'origine de l'un de ces incidents, le serveur distant pourrait être compromis.
>

Pour résoudre ce problème, utilisez la commande suivante avec l'adresse IP de votre serveur :

```bash
ssh-keygen -f ~/.ssh/known_hosts -R 203.0.113.100
```

Vous pouvez également modifier le fichier `known_hosts` situé dans le dossier `home` de votre compte d'utilisateur local à l'aide d'un éditeur de texte.

Exemple :

```bash
nano ~/.ssh/known_hosts
```

Localisez la ligne `offending` spécifiée dans le message d'avertissement (dans cet exemple, il s'agirait de la troisième ligne). Mettez en surbrillance la ligne entière et supprimez-la.

Enregistrez les modifications et quittez l'éditeur. Vous devrez confirmer la nouvelle empreinte lors de la prochaine connexion au serveur.

///

### Comment se connecter à un serveur distant à partir d'un périphérique Windows

/// details | Dépliez cette section

#### Établissement d’une connexion

Les versions récentes du système d'exploitation Windows incluent OpenSSH, ce qui vous permet de l'utiliser directement à partir des applications de ligne de commande natives (PowerShell ou Invite de commandes).

Faites un clic droit sur le bouton `Démarrer`{.action} de Windows et sélectionnez `Windows PowerShell`{.action}. Vous pouvez également utiliser le champ de recherche pour démarrer l'une des applications de ligne de commande.

![PowerShell](images/windowsps.png){.thumbnail}

Connectez-vous au serveur avec la commande suivante :

```bash
ssh username@server_IP
```

Si vous avez changé le port SSH du serveur, utilisez plutôt cette commande :

```bash
ssh username@server_IP -p port_number
```

#### Connexion et fingerprint

Lorsque vous y êtes invité, tapez le mot de passe de l'utilisateur qui se connecte (ou collez-le via un clic droit) et appuyez sur `Entrée`{.action}.

S'il s'agit d'une nouvelle connexion, votre client SSH recevra une **empreinte de clé** du serveur. Saisissez `yes` pour confirmer, puis le mot de passe de l'utilisateur qui se connecte pour se connecter.

Exemple de sortie :

```bash
ssh ubuntu@203.0.113.100
```

```console
The authenticity of host '203.0.113.100 (203.0.113.100)' can't be established.
ECDSA key fingerprint is SHA256:rRwrdsmJfzvJF5k0a4JmMSdaWbTlCgRKBukbmQ3gmso.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
Warning: Permanently added '203.0.113.100' (ECDSA) to the list of known hosts.
ubuntu@203.0.113.100's password:
```

L'empreinte sera enregistrée sur votre équipement et vérifiée à chaque nouvelle connexion. Si la clé a changé sur l'hôte distant, vous recevrez un message d'avertissement lors de la tentative de connexion.

Exemple de sortie :

```console
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Host key verification failed.
Offending ECDSA key in C:\\Users\\Name_Windows_User/.ssh/known_hosts:3
```

Cela signifie que l'un des événements suivants s'est produit :

- Le serveur a été réinstallé avec succès.
- Le service SSH sur le serveur a été réinstallé avec succès.
- Vous vous connectez à un hôte différent avec la même adresse IP.

> [!primary]
> Le message d'avertissement n'indique pas nécessairement un problème de sécurité. Cependant, si vous n'êtes pas à l'origine de l'un de ces incidents, le serveur distant pourrait être compromis.
>

Pour résoudre ce problème, entrez la commande suivante avec le nom de votre compte d'utilisateur Windows local et l'adresse IP de votre serveur :

```bash
ssh-keygen -f "C:\Users\Name_Windows_User\.ssh\known_hosts" -R 203.0.113.100
```

Vous pouvez également accéder à ce dossier, effectuer un clic droit sur le fichier et l'ouvrir avec un éditeur de texte (Notepad, Notepad++, etc.)

![known_hosts](images/windowskh.png){.thumbnail}

Localisez la ligne `offending` spécifiée dans le message d'avertissement (dans cet exemple, il s'agirait de la troisième ligne). Mettez en surbrillance la ligne entière et supprimez-la.

Enregistrez les modifications et quittez l'éditeur. Vous devrez confirmer la nouvelle empreinte lors de la prochaine connexion au serveur.

///


### Utilisation de clients GUI dédiés ou de logiciels compatibles SSH

Si vous préférez une interface utilisateur graphique, vous pouvez trouver de nombreuses applications logicielles pour chaque type de système d'exploitation qui vous permettent de vous connecter à des hôtes distants via le protocole SSH.

Par exemple, [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) est un logiciel client SSH open source doté de nombreuses fonctionnalités utiles. Découvrez comment l’utiliser pour les connexions aux serveurs OVHcloud dans notre tutoriel détaillé :

[Comment utiliser PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

<a name="gofurther"></a>

## Aller plus loin

[Configuration des comptes utilisateurs et de l'accès root sur un serveur](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds)

[Comment créer et utiliser des clés pour l'authentification SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)

[Comment créer et utiliser des clés pour l'authentification SSH avec PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

[Mode rescue sur un serveur dédié](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[Mode rescue sur un VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).