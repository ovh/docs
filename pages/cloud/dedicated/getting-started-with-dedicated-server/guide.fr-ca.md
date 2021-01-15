---
title: 'Premiers pas avec un serveur dédié'
slug: premiers-pas-serveur-dedie
excerpt: 'Découvrez comment prendre en main votre nouveau serveur dédié'
section: 'Premiers pas'
---

**Dernière mise à jour le 2 avril 2020**

## Objectif

Un serveur dédié est un serveur physique situé dans l'un de nos datacenters. Contrairement aux solutions d'hébergement web (décrites comme « mutualisées »), qui sont techniquement gérées par OVHcloud, vous êtes entièrement responsable de l'administration de votre serveur dédié.

**Découvrez comment prendre en main votre nouveau serveur dédié.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/MkayHx0LCN8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 

> [!warning]
>
> OVHcloud met à votre disposition des services dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs et ne pourrons vous fournir d'assistance. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. Plus d’informations dans la section « Aller plus loin » de ce guide.
>

## Prérequis

- Posséder un [serveur dédié](https://www.ovhcloud.com/fr-ca/bare-metal/){.external}.
- Être connecté en SSH (accès root) sous Linux ou en tant qu'administrateur sous Windows.
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager)

## En pratique

Lorsque votre serveur dédié est configuré pour la première fois, vous pouvez sélectionner le système d'exploitation à installer.

### Installation ou réinstallation de votre serveur dédié

Vous pouvez facilement réinstaller votre serveur et choisir un autre modèle de système d'exploitation dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager). Sous l'onglet `Informations générales`{.action}, cliquez sur `...`{.action} à côté de `Système (OS)`, puis cliquez sur `Installer`{.action}.

![Bouton Réinstaller](images/reinstalling-your-server-00.png){.thumbnail}

Sur l'écran suivant, sélectionnez `Installer à partir d'un template OVH`{.action} (pour utiliser l'un de nos modèles d'installation) ou `Installer un de vos gabarits`{.action} (pour utiliser le vôtre), puis cliquez sur `Suivant`{.action}.

![Sélection de modèle](images/reinstalling-your-server-02.png){.thumbnail}

Sélectionnez le système d'exploitation à installer et cliquez sur `Suivant`{.action}".

![Sélection opérationnelle](images/reinstalling-your-server-03.png){.thumbnail}

Si vous devez modifier le schéma de partitionnement de votre système d'exploitation, cochez la case « Personnaliser la configuration des partitions » puis cliquez sur `Suivant`{.action}.

![Personnaliser la configuration de la partition](images/SSH_02.png){.thumbnail}

Une fois les ajustements terminés, cliquez sur `Suivant`{.action} pour accéder à la page de résumé.

### Ajout d'une clé SSH (facultatif)

Si vous installez un système d'exploitation Linux, vous pouvez ajouter votre clé SSH à la dernière étape du processus d'installation.

![Personnaliser la configuration de la partition](images/SSH_03.png){.thumbnail}

Si une clé SSH est déjà enregistrée, elle apparaît dans le menu déroulant sous `Clés SSH` en bas. Sinon, vous devrez d'abord en ajouter un dans la section « Mes services ».

Pour ce faire, ouvrez la barre latérale en cliquant sur votre nom dans le coin supérieur droit et utilisez le raccourci `Produits et services`{.action}.

![Personnaliser la configuration de la partition](images/SSH_13.png){.thumbnail}

Dans « Mes services », basculez vers l'onglet `Clés SSH`{.action} et cliquez sur `Ajouter une clé SSH`{.action}.

![Personnaliser la configuration de la partition](images/SSH_14.png){.thumbnail}

Comme il s'agit ici d'installer un serveur dédié (ou un VPS), sélectionnez « Dédié » dans le menu déroulant.

Dans la nouvelle fenêtre, entrez un ID (nom de votre choix) et la clé elle-même (de type RSA, ECDSA ou Ed25519) dans les champs correspondants.

![Personnaliser la configuration de la partition](images/SSH_12.png){.thumbnail}

Pour obtenir une explication détaillée sur la création de clés SSH, reportez-vous à [ce guide](https://docs.ovh.com/ca/fr/public-cloud/creation-des-cles-ssh/).


> [!primary]
>
> Certains systèmes d'exploitation ou plates-formes, tels que Plesk et Windows, nécessitent l'acquisition d'une licence avant l'installation. Vous pouvez acheter cette [licence auprès de OVHcloud](https://www.ovhcloud.com/fr-ca/bare-metal/os/) ou auprès d'un revendeur. Vous devrez ensuite l'intégrer manuellement, via le système d'exploitation lui-même ou via votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager). Vous pouvez gérer vos licences dans le Panneau de configuration de la section `Bare Metal Cloud`{.action} sous `Licences`{.action}. Dans cette section, vous pouvez également commander des licences (via le bouton `Commander`{.action} à gauche) ou ajouter votre propre licence de serveur SQL ou Windows SPLA (via le bouton `Ajouter une licence SPLA`{.action} à gauche).
>

### Connexion à votre serveur

#### Linux

Une fois l'installation terminée, vous recevrez un e-mail contenant votre mot de passe pour l'accès root. L'accès root vous permet de vous connecter à votre serveur via SSH, qui est un protocole de communication sécurisé. Vous pouvez accéder à votre serveur via un terminal de commande (Linux ou MAC) ou via un logiciel tiers sous Windows (par exemple: PuTTy).

Après avoir ouvert le terminal, tapez la commande suivante pour vous connecter à votre serveur, en remplaçant le texte situé après le symbole @ par les informations requises (adresse IP ou nom de référence du serveur). Le nom de référence de votre serveur commencera toujours par *ns*.

**Exemple utilisant une adresse IP**

```sh
ssh root@IPv4_de_votre_serveur
```

**Exemple utilisant une référence de serveur**

```sh
ssh root@nom_de_référence_de_votre_serveur
```

#### Windows

Une fois l'installation terminée, vous recevrez un e-mail contenant votre mot de passe pour l'accès administrateur (root). Vous devez utiliser ces informations d'identification pour vous connecter au serveur via RDP (**R**Remote **D**esktop **P**rotocol). Une fois connecté, Windows vous guidera tout au long de l'installation initiale.


### Sécurisation de votre serveur dédié

Comme expliqué dans la section « Objectif » de ce guide, vous êtes l'administrateur de votre serveur dédié. De ce fait, vous êtes responsable de vos données et de la sécurité de votre machine. Cependant, les conseils suivants vous aideront à le sécuriser :

* gardez votre système d'exploitation à jour ;
* gardez votre logiciel à jour ;
* changez votre port SSH par défaut (port 22) pour un autre port ;
* modifiez votre mot de passe root ;
* créez un nouvel utilisateur système avec un accès restreint pour une utilisation quotidienne.

Plus d'informations dans notre [guide](../securiser-un-serveur-dedie/){.external}.

### Configuration réseau

#### Mode bridge IP

Le mode bridge est l'action entreprise par un équipement pour créer un réseau global à partir de deux réseaux de communication ou plus, ou deux segments de réseau ou plus. Le mode bridge est différent du routage, qui permet aux réseaux de communiquer indépendamment tout en restant séparés.

Il s'agit d'une configuration qui est le plus souvent utilisée dans le cadre de la virtualisation pour permettre à chaque machine virtuelle d’avoir sa propre adresse IP publique.

Pour plus d'informations, reportez-vous à notre guide: [Mode bridge IP](../network-bridging/){.external}.

#### Mode Alias IP

Le mode alias IP associe deux adresses IP ou plus à une interface réseau. Cela permet à votre serveur d’établir plusieurs connexions à un réseau, chacune servant un objectif différent.

Pour obtenir des instructions détaillées sur la configuration de l'alias IP, reportez-vous au guide [Configurer son adresse IP en alias](../network-ipaliasing).

#### Configuration IPv6

Tous les serveurs dédiés OVHcloud comprennent un bloc /64 IPv6. Pour utiliser les adresses de ce bloc, vous devez apporter des modifications de configuration du réseau. Consultez notre guide: [Configurer IPv6 sur un serveur dédié](../network-ipv6/).


### Dépannage

OVHcloud déploie tous ses serveurs dédiés avec une console IPMI (Intelligent Platform Management Interface), qui s'exécute dans votre navigateur ou depuis une applet Java, et vous permet de vous connecter directement à votre serveur, même s'il n'a pas de connexion réseau. Cela permet de résoudre les problèmes qui ont pu entraîner la déconnexion de votre serveur..

Pour plus d'informations, reportez-vous à notre guide: [Utilisation de l’IPMI pour les serveurs dédiés](../utilisation-ipmi-serveurs-dedies/).

### Mode rescue

En cas de problème avec votre serveur, la première étape de dépannage consiste à redémarrer votre serveur en mode rescue. Pour activer le mode rescue, connectez-vous à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager) et accédez à la page de votre serveur. Dans le menu `Informations générales`, cliquez sur  `...`{.action} puis sur `Modifier`{.action} pour modifier le mode de démarrage.

![Modifier la sélection de démarrage](images/rescue-mode-01.png){.thumbnail}

Sur l'écran suivant, sélectionnez `Booter en rescue mode`{.action} et sélectionnez `rescue64-pro`{.action} dans la liste déroulante. Tapez votre adresse e-mail dans le champ de texte, puis cliquez sur `Suivant`{.action}. Si vous laissez le champ de l'e-mail vide, l'adresse e-mail associé à votre compte OVHcloud est utilisée par défaut.

![Rescue Pro 64](images/rescue-mode-03.png){.thumbnail}

Confirmez vos options sur l'écran suivant, puis redémarrez votre serveur pour appliquer les modifications.

![Confirmation et redémarrage](images/rescue-mode-02.png){.thumbnail}

Votre serveur va maintenant redémarrer en mode rescue et vous recevrez les informations d'identification pour vous connecter via l'adresse e-mail que vous avez renseignée. Pour quitter le mode rescue, il suffit de modifier à nouveau le netboot pour le remettre sur `Booter sur le disque dur`{.action}, puis de redémarrer votre serveur.

Pour en savoir plus sur l'utilisation du mode rescue pour résoudre les problèmes avec votre serveur, consultez notre guide sur le [mode rescue](../ovh-rescue/).


#### Diagnostic matériel

Les tests matériels disponibles en mode rescue peuvent vous aider à diagnostiquer les défaillances matérielles susceptibles de causer des problèmes sur votre serveur.

Après vous être connecté à l'interface Web du mode rescue, vous pourrez exécuter des tests sur les composants matériels suivants:

* RAM
* Disques durs
* Baie RAID
* Processeur
* Connexion réseau

#### Interface Web du mode rescue

![Interface Web](images/rescue-mode-04.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
