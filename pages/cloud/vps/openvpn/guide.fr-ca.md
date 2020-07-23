---
title: 'Déployer un serveur OpenVPN en un clic'
description: 'Découvrez comment déployer un serveur OpenVPN en un clic avec les applications pré-installées sur VPS.'
slug: openvpn
excerpt: 'Découvrez ici comment instancier un VPS avec l’application OpenVPN pré-installée.'
section: 'Utilisation avancée'
---

## Introduction
OpenVPN est un logiciel permettant de créer un Réseau Virtuel Privé (ou Virtual Private Network), plus communément appelé VPN.

## Prérequis

- Avoir accès à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager).
- Un [VPS OVHcloud](https://www.ovhcloud.com/fr-ca/vps/)


## Commande

Afin de créer votre serveur OpenVPN, il faut d'abord commander un VPS. (Si vous possédez déjà un VPS, vous pouvez installer OpenVPN via votre panneau de contrôle OVHcloud)

![horizon](images/OpenVPN.png){.thumbnail}

Quand votre VPS est prêt, vous recevez un e-mail vous donnant les accès pour vous connecter à votre serveur OpenVPN:

![horizon](images/opencredent2.png){.thumbnail}

Votre serveur VPN est maintenant prêt à être utilisé.

Rendez-vous sur l'url donnée.

Connectez-vous avec les identifiants donnés dans le mail :


![horizon](images/login_web.png){.thumbnail}


## Partie client

### Sur Windows

Choisissez `OpenVPN client for Windows`{.action}

![horizon](images/admin_or_client.png){.thumbnail}

Sauvegardez le fichier et lancez-le:

![horizon](images/connection_openvpn1.png){.thumbnail}

Connectez-vous au VPN:

![horizon](images/login_screen.png){.thumbnail}

Vous sortez sur internet avec l'IP de votre VPN

Vous pouvez vérifier votre IP en vous rendant sur la page [https://ifconfig.ovh/](https://ifconfig.ovh/){.external}


### Sur Linux

**Installation d'un client OpenVPN**

Pour les distributions du type Fedora/CentOS/RedHat:

```sh
sudo yum install openvpn
```

Pour les distributions du type Ubuntu/Debian:

```sh
sudo apt-get install openvpn
```

Il vous faudra ensuite récupérer le fichier de configuration `client.ovpn` disponible ici:

![horizon](images/client_ovpn.png){.thumbnail}

**Lancement du client OpenVPN avec le fichier de configuration**

```sh
sudo openvpn --config client.ovpn
```

Il vous sera ensuite demandé de renseigner l'utilisateur et le mot de passe:

```sh
 Enter Auth Username: openvpn
 Enter Auth Password: ******************************************
```

Vous sortez maintenant sur internet avec l'IP de votre VPN

Vous pouvez vérifier votre IP en vous rendant sur la page [https://ifconfig.ovh/](https://ifconfig.ovh/){.external}.

### Sur MacOS

**Installation d'un client OpenVPN**

Choisissez `OpenVPN client for Mac OS X`{.action}:

![horizon](images/admin_or_client.png){.thumbnail}

Enregistrez le fichier, puis exécutez-le:

![horizon](images/mac_installation.png){.thumbnail}

Une fois l'installation terminée, connectez-vous au VPN:

![horizon](images/login_screen_mac.png){.thumbnail}

![horizon](images/connection_openvpn_mac.png){.thumbnail}

Vous sortez sur internet avec l'IP de votre VPN.

Vous pouvez vérifier votre IP en vous rendant sur la page [https://ifconfig.ovh/](https://ifconfig.ovh/){.external}.


## Partie serveur

Rendez-vous sur l'url donnée dans le mail et choisissez `Admin`:

![horizon](images/admin_or_client.png){.thumbnail}

Connectez-vous avec les identifiants donnés dans le mail puis acceptez les conditions d'utilisation

![horizon](images/openvpncredent.png){.thumbnail}

Vous avez maintenant accès au panneau d'administration :

![horizon](images/admin_panel.png){.thumbnail}

## Aller plus loin

[Débuter avec un VPS](https://docs.ovh.com/ca/fr/vps/debuter-avec-vps/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
