---
title: 'Premiers pas avec un serveur dédié'
slug: premier-pas-serveur-dedie
excerpt: 'Découvrez comment prendre en main votre nouveau serveur dédié'
section: 'Premiers pas'
---

**Dernière mise à jour le 16/05/2018**

## Objectif

Un serveur dédié est un serveur physique situé dans un de nos datacenters. Contrairement aux solutions d'hébergement Web (décrites comme «mutualisées») qui sont techniquement gérées par OVH, vous êtes entièrement responsable de l'administration de votre serveur dédié.

**Ce guide vous donnera des conseils pour vous aider à prendre en main votre serveur dédié nouvellement livré.**

> [!warning]
>
> OVH met à votre disposition des services dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs et ne pourrons vous fournir d'assistance. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. Plus d’informations dans la section « Aller plus loin » de ce guide.
>


## Prérequis

* Posséder un [serveur dédié](https://www.ovh.com/fr/serveurs_dedies/){.external}, visible dans votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external} dans `Dédié`{.action} puis `Serveurs Dédiés`{.action}


## En pratique

### Se connecter à votre serveur

#### Linux

Lorsque votre serveur dédié est configuré pour la première fois, un e-mail contenant votre mot de passe vous sera envoyé avec les accès *root*. L'accès *root* vous permet de vous connecter à votre serveur via SSH, qui est un protocole de communication sécurisée. Vous pouvez accéder à votre serveur via un terminal de commande (Linux ou MAC) ou via un logiciel tiers sous Windows (par exemple: PuTTy).

Une fois que vous avez ouvert le terminal, tapez la commande suivante pour vous connecter à votre serveur, en remplaçant le texte après le symbole @ par les informations requises (adresse IP ou nom de référence du serveur). Le nom de référence de votre serveur commencera toujours par *ns*.

**Exemple utilisant une adresse IP**

```sh
ssh root@IPv4_de_votre_serveur
```

**Exemple utilisant une référence de serveur**

```sh
ssh root@nom_de_référence_de_votre_serveur
```

#### Windows

Lorsque votre serveur dédié est configuré pour la première fois, vous recevrez un e-mail contenant votre mot de passe pour l'accès *adminitrateur*. Vous devrez utiliser ces informations d'identification pour vous connecter au serveur via RDP. Une fois connecté, Windows vous guidera dans la configuration initiale.

### Installation ou réinstallation de votre serveur dédié

Accédez à la page de votre serveur dans votre [espace client](https://www.ovh.com/auth/?action=gotomanager){.external} et cliquez sur le bouton `Réinstaller`{.action}.

![Bouton Réinstaller](images/reinstalling-your-server-01-edited.png){.thumbnail}

Sur l’écran suivant, sélectionnez `Installer à partir d’un template OVH`{.action} (pour utiliser l’un de nos templates d’installation) ou `Installer un de vos gabarits`{.action} (pour utiliser le vôtre), puis cliquez sur `Suivant`{.action}.

![Sélection de modèles](images/reinstalling-your-server-02.PNG){.thumbnail}

Sélectionnez le système d’exploitation que vous voulez installer et cliquez sur `Suivant`{.action}.

![Sélection de fonctionnement](images/reinstalling-your-server-03.PNG){.thumbnail}

Suivez le reste des instructions à l’écran, puis cliquez sur `Confirmer`{.action} pour poursuivre l’installation.


> [!principal]
>
> Certains systèmes d'exploitation ou plateformes, tels que Plesk et Windows, nécessitent l'achat d'une licence avant l'installation. Vous pouvez acheter votre licence par l'intermédiaire OVH dans votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external} dans `Dédié`{.action} puis `Licences`{.action} ou auprès d'un revendeur. Vous devrez ensuite l'intégrer manuellement, via le système d'exploitation lui-même, ou via votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}. 
> 


### Sécuriser votre serveur dédié

Comme expliqué dans la section *Objectif* de ce guide, vous êtes l'administrateur de votre serveur dédié. De ce fait, vous êtes responsable de vos données et de sa sécurité. Cependant, les conseils suivants vous aideront à le sécuriser:

* Gardez votre système d'exploitation à jour ;
* Gardez votre logiciel à jour ;
* Changez votre port SSH par défaut (port 22) pour un autre port ;
* Changez votre mot de passe root ;
* Créez un nouvel utilisateur de système avec un accès restreint pour une utilisation quotidienne.


### Configurer un réseau

#### Mode Bridge IP

Le mode *bridge* est l'action entreprise par un équipement réseau pour créer un réseau global à partir de deux réseaux de communication ou plus, ou deux segments de réseau ou plus. Le mode *bridge* se distingue du routage parce qu’il permet aux réseaux de communiquer indépendamment en tant que réseaux séparés.

Le mode Bridge est une configuration qui est le plus souvent utilisée dans le contexte de virtualisation pour permettre à chaque machine virtuelle d’avoir sa propre adresse IP publique.

Pour plus d’informations, référez-vous au guide sur le [Mode Bridge IP](https://docs.ovh.com/fr/dedicated/network-bridging/){.external}.

#### Mode Alias IP

Le mode Alias IP associe deux IP ou plus à une interface réseau. Cela permet à votre serveur d’établir plusieurs connexions à un réseau, chacune servant un objectif différent.

Pour obtenir des instructions détaillées sur la configuration de l'alias IP, reportez-vous à [ce guide](https://docs.ovh.com/fr/dedicated/network-ipaliasing/){.external}.

#### Configuration de l’IPv6

Tout les serveurs dédiés OVH comprennent un block /64 d'IPv6. Pour utiliser les adresses de ce bloc, vous devrez effectuer certaines modifications de configuration du réseau. Référez-vous au guide: [Configuration de IPv6](https://docs.ovh.com/fr/dedicated/network-ipv6/){.external}.


### Résoudre des soucis de configuration via l'IPMI

OVH déploie tous ses serveurs dédiés avec une console IPMI (Intelligent Platform Management Interface), qui s'exécute dans votre navigateur ou depuis une applet Java et qui vous permet de vous connecter directement à votre serveur, même s'il n'a pas de connexion réseau. Cela permet de résoudre les problèmes qui ont pu entraîner la déconnexion de votre serveur.

Pour plus d’informations, référez-vous au guide sur [l’utilisation de l’IPMI pour les serveurs dédiés](https://docs.ovh.com/fr/dedicated/utilisation-ipmi-serveurs-dedies/){.external}.


### Mode rescue

S'il y a un problème avec votre serveur, la première étape de dépannage est de redémarrer votre serveur en mode rescue. Pour l'activer connectez-vous à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external} et allez sur la page de votre serveur. Ensuite, allez sur `Etat du serveur`{.action} > `Informations générales`{.action} > `Boot`{.action}. Cliquez sur le bouton `Modifier`{.action} pour changer le mode démarrage.

![Changer la sélection du démarrage](images/rescue-mode-01-edited.png){.thumbnail}

À l’écran suivant, sélectionnez `Booter en mode rescue`{.action} et sélectionnez `rescue64-pro`{.action} dans la liste déroulante. Ajoutez votre adresse e-mail dans le champ de texte, puis cliquez sur `Suivant`{.action}.

![Rescue Pro 64](images/rescue-mode-03-edited.png){.thumbnail}


Confirmez vos options sur l'écran suivant, puis redémarrez votre serveur pour appliquer les modifications.

![Confirmation et redémarrage](images/rescue-mode-02-edited.png){.thumbnail}


Votre serveur va maintenant redémarrer en mode rescue et vous recevrez les informations d'identification pour vous connecter via l'adresse e-mail que vous avez fournie. Pour quitter le mode rescue, changez simplement le mode de démarrage à nouveau pour démarrer sur le disque dur, puis redémarrez votre serveur.

Pour en savoir plus sur la façon dont vous pouvez utiliser le mode rescue pour résoudre les problèmes rencontrés avec votre serveur, veuillez consulter notre guide surle [mode rescue] (https://docs.ovh.com/fr/dedicated/ovh-rescue/){.external}


#### Diagnostic matériel (hardware)

Les tests matériels (hardware) disponibles en mode rescue peuvent vous aider à diagnostiquer les défaillances matérielles susceptibles de causer des problèmes avec votre serveur.

Une fois connecté sur l'interface Web du mode rescue, vous pourrez exécuter des tests sur les composants matériels hardware suivants:

* RAM
* Disques durs
* Baie RAID
* Processeur
* Connection du réseau

#### Interface web du mode rescue

![L’interface Web](images/rescue-mode-04-edited.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.