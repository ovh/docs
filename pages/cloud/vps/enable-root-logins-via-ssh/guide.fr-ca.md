---
title: "Comment activer les connexions avec l'utilisateur root avec SSH"
excerpt: "Découvrez comment configurer SSH pour autoriser les connexions avec l'utilisateur root"
slug: activer-connexion-root
section: Tutoriel
hidden: true
---

**Dernière mise à jour le 19/09/2020**

## Objectif

Pour effectuer certaines fonctions administratives sur votre serveur (p. ex. l'installation de paquets), vous aurez besoin d'un niveau élevé d'accès utilisateur. Sur les serveurs Linux, cet accès est appelé "root".

**Ce guide fournit des informations de base sur la façon d'activer les connexions root avec SSH.**

> [!warning]
>
> Ce tutoriel vous présente l’utilisation d’une ou de plusieurs solutions OVHcloud avec des outils externes et vous décrit des manipulations réalisées dans un contexte précis. Pensez à les adapter en fonction de votre situation ! Si vous rencontrez des difficultés lors de ces manipulations, nous vous invitons à faire appel à un prestataire spécialisé et/ou à poser vos questions à notre communauté sur <https://community.ovh.com/>. OVHcloud ne sera pas en mesure de vous fournir une assistance.
>

## Prérequis

- Un service (VPS, Serveur dédié, Instance Public Cloud) qui n'a actuellement pas de connexion root activée.

## En pratique

### Devenez utilisateur root

Pour devenir utilisateur root, entrez la commande suivante en ligne de commande:

```sh
~$ sudo su -
~#
```

Vous devez être invité à indiquer votre mot de passe actuel pour changer d'utilisateur.

### Définir le mot de passe utilisateur root

Maintenant que vous êtes l'utilisateur root, vous pouvez définir un mot de passe pour cet utilisateur.

```sh
~# passwd
New password:
Retype new password:
passwd: password updated successfully
```
### Activer les connexions avec le compte root

Vous devez configurer le service SSH pour autoriser les connexions avec l'utilisateur root.

> [!warning]
> L'activation des connexions root n'est pas recommandée, car elle peut exposer votre serveur à des attaques de force brute.
> Nous vous recommandons de prendre des mesures pour d'abord sécuriser votre VPS. Vous pouvez vous référer à notre guide sur [Sécuriser un VPS](../conseils-securisation-vps/){.external}
>

#### Ouvrir le fichier sshd_config

Vous devez utiliser un éditeur de texte comme vim ou nano.

```sh
~# vi /etc/ssh/sshd_config
```

Ajoutez la ligne suivante pour autoriser les connexions avec l'utilisateur root.

```sh
PermitRootLogin yes
```

Enregistrer le fichier

### Redémarrez le service SSH

```sh
~# systemctl restart ssh
```

Vous devriez maintenant pouvoir vous connecter avec l'utilisateur root.



## Aller plus loin

[Sécuriser un VPS](../conseils-securisation-vps/){.external}

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
