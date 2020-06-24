---
title: 'Premiers pas avec un serveur dédié'
slug: premiers-pas-serveur-dedie
excerpt: 'Découvrez comment prendre en main votre nouveau serveur dédié'
section: 'Premiers pas'
---

**Dernière mise à jour le 01/04/2020**

## Objectif

Un serveur dédié est un serveur physique situé dans l'un de nos datacenters. Contrairement aux solutions d'hébergement web (décrites comme « mutualisées ») qui sont techniquement gérées par OVHcloud, vous êtes entièrement responsable de l'administration de votre serveur dédié.

**Découvrez comment prendre en main votre nouveau serveur dédié.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/MkayHx0LCN8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> [!warning]
>
> OVHcloud met à votre disposition des services dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs et ne pourrons vous fournir d'assistance. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. Plus d’informations dans la section « Aller plus loin » de ce guide.
>


## Prérequis

* Posséder un [serveur dédié](https://www.ovh.com/fr/serveurs_dedies/){.external}, visible dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external} dans la partie `Server`{.action}, puis `Serveurs Dédiés`{.action}.


## En pratique

### Se connecter à votre serveur

#### Sous Linux

Lorsque votre serveur dédié est configuré pour la première fois, un e-mail contenant votre mot de passe vous sera envoyé avec les accès root. L'accès root vous permet de vous connecter à votre serveur via SSH, qui est un protocole de communication sécurisé. Vous pouvez accéder à votre serveur via un terminal de commande (Linux ou Mac) ou un logiciel tiers sous Windows (par exemple: PuTTy).

Une fois le terminal ouvert, tapez la commande suivante pour vous connecter à votre serveur, en remplaçant le texte après le symbole @ par les informations requises (adresse IP ou nom de référence du serveur). Le nom de référence de votre serveur commencera toujours par **ns**.

- Exemple utilisant une adresse IP :

```sh
ssh root@IPv4_de_votre_serveur
```

- Exemple utilisant une référence de serveur :

```sh
ssh root@nom_de_référence_de_votre_serveur
```

#### Sous Windows

Lorsque votre serveur dédié est configuré pour la première fois, vous recevrez un e-mail contenant votre mot de passe pour l'accès adminitrateur. Vous devrez utiliser ces informations d'identification pour vous connecter au serveur via le *Remote Desktop Protocol* (RDP). Une fois connecté, Windows vous guidera dans la configuration initiale.

### Installation ou réinstallation de votre serveur dédié

Accédez à la page de votre serveur dans votre [espace client](https://ca.ovh.com/auth/?action=gotomanager){.external}, puis dans `Informations générales` cliquez sur `...`{.action} puis `Réinstaller`{.action} dans la section `Système (OS)`.

![Bouton Réinstaller](images/reinstalling-your-server-01.png){.thumbnail}

Sur l’écran suivant, sélectionnez `Installer à partir d’un template OVH`{.action} (pour utiliser l’un de nos templates d’installation) ou `Installer un de vos gabarits`{.action} (pour utiliser le vôtre), puis cliquez sur `Suivant`{.action}.

![Sélection de modèles](images/reinstalling-your-server-02.png){.thumbnail}

Sélectionnez le système d’exploitation que vous voulez installer et cliquez sur `Suivant`{.action}.

![Sélection de fonctionnement](images/reinstalling-your-server-03.png){.thumbnail}

Suivez le reste des instructions à l’écran, puis cliquez sur `Confirmer`{.action} pour poursuivre l’installation.


> [!primary]
>
> Certains systèmes d'exploitation ou plateformes, tels que Plesk et Windows, nécessitent l'achat d'une licence avant leur installation. Vous pouvez acheter celle-ci par l'intermédiaire d'OVHcloud dans votre [espace client](https://ca.ovh.com/auth/?action=gotomanager){.external} dans la partie `Dédié`{.action}, puis `Licences`{.action} ou auprès d'un revendeur. Vous devrez ensuite l'intégrer manuellement, via le système d'exploitation lui-même, ou via votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}. 
> 


### Sécuriser votre serveur dédié

Comme expliqué dans la section « Objectif » de ce guide, vous êtes l'administrateur de votre serveur dédié. De ce fait, vous êtes responsable de vos données et de la sécurité de votre machine. Cependant, les conseils suivants vous aideront à le sécuriser :

* gardez votre système d'exploitation à jour ;
* gardez votre logiciel à jour ;
* changez votre port SSH par défaut (port 22) pour un autre port ;
* changez votre mot de passe root ;
* créez un nouvel utilisateur de système avec un accès restreint pour une utilisation quotidienne.

Plus d'informations dans notre [guide](https://docs.ovh.com/fr/dedicated/securiser-un-serveur-dedie/){.external}.


### Configurer un réseau

#### Mode bridge IP

Le mode bridge est l'action entreprise par un équipement pour créer un réseau global à partir de deux réseaux de communication ou plus, ou deux segments de réseau ou plus.

Il s'agit d'une configuration qui est le plus souvent utilisée dans le cadre de la virtualisation pour permettre à chaque machine virtuelle d’avoir sa propre adresse IP publique.

Pour plus d’informations, vous pouvez vous référer au guide sur le [Mode bridge IP](https://docs.ovh.com/fr/dedicated/network-bridging/){.external}.

#### Mode alias IP

Le mode alias IP associe deux adresses IP ou plus à une interface réseau. Cela permet à votre serveur d’établir plusieurs connexions à un réseau, chacune servant un objectif différent.

Pour obtenir des instructions détaillées sur la configuration de l'alias IP, reportez-vous à [ce guide](https://docs.ovh.com/fr/dedicated/network-ipaliasing/){.external}.

#### Configuration de l’IPv6

Tous les serveurs dédiés OVHcloud comprennent un bloc /64 d'IPv6. Pour utiliser les adresses de ce bloc, vous devrez effectuer certaines modifications de configuration du réseau. Référez-vous au guide: [Configuration de IPv6](https://docs.ovh.com/fr/dedicated/network-ipv6/){.external}.


### Résoudre des soucis de configuration via l'IPMI

OVHcloud déploie tous ses serveurs dédiés avec une console IPMI (Intelligent Platform Management Interface), qui s'exécute dans votre navigateur ou depuis une applet Java et qui vous permet de vous connecter directement à votre serveur, même s'il n'a pas de connexion réseau. Cela permet de résoudre les problèmes qui ont pu entraîner la déconnexion de votre serveur.

Pour plus d’informations, référez-vous au guide sur [l’utilisation de l’IPMI pour les serveurs dédiés](https://docs.ovh.com/fr/dedicated/utilisation-ipmi-serveurs-dedies/){.external}.


### Mode rescue

S'il y a un problème avec votre serveur, la première étape de dépannage est le redémarrage de votre serveur en mode rescue. Pour l'activer connectez-vous à votre [espace client OVH](https://ca.ovh.com/auth/?action=gotomanager){.external} et allez sur la page de votre serveur. Ensuite, allez sur `État du serveur`{.action}, puis sur `Informations générales`{.action} et `Boot`{.action}. Cliquez sur le bouton `Modifier`{.action} pour changer le mode démarrage.

![Changer la sélection du démarrage](images/rescue-mode-01.png){.thumbnail}

Sur l’écran suivant, sélectionnez `Booter en mode rescue`{.action}, puis choisissez `rescue64-pro`{.action} dans la liste déroulante. Ajoutez votre adresse e-mail dans le champ de texte, puis cliquez sur `Suivant`{.action}.

![Rescue Pro 64](images/rescue-mode-03.png){.thumbnail}

Confirmez vos options sur l'écran suivant, puis redémarrez votre serveur pour appliquer les modifications.

![Confirmation et redémarrage](images/rescue-mode-02.png){.thumbnail}

Votre serveur va maintenant redémarrer en mode rescue et vous recevrez les informations d'identification pour vous connecter via l'adresse e-mail que vous avez fournie. Pour quitter le mode rescue, changez simplement le mode de démarrage pour démarrer sur le disque dur, puis redémarrez votre serveur.

Pour en savoir plus sur la façon dont vous pouvez utiliser le mode rescue pour résoudre les problèmes rencontrés avec votre serveur, veuillez consulter notre guide sur le [mode rescue](https://docs.ovh.com/fr/dedicated/ovh-rescue/){.external}


#### Diagnostic matériel (hardware)

Les tests matériels (hardware) disponibles en mode rescue peuvent vous aider à diagnostiquer les défaillances physiques susceptibles de causer des dysfonctionnements avec votre serveur.

Une fois connecté sur l'interface web du mode rescue, vous pourrez exécuter des tests sur les composants matériels suivants :

* RAM ;
* disques durs ;
* baie RAID ;
* processeur ;
* connexion du réseau.

#### Interface web du mode rescue

![L’interface Web](images/rescue-mode-04.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.