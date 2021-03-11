---
title: 'Premiers pas avec un serveur dédié'
slug: premiers-pas-serveur-dedie
excerpt: 'Découvrez comment prendre en main votre nouveau serveur dédié'
section: 'Premiers pas'
order: 1
---

**Dernière mise à jour le 16 février 2021**

## Objectif

Un serveur dédié est un serveur physique situé dans l'un de nos datacenters. Contrairement aux offres d'hébergement web (décrits comme « mutualisés »), qui sont techniquement gérées par OVHcloud, vous êtes entièrement responsable de l'administration sur votre serveur dédié.

**Découvrez comment prendre en main votre nouveau serveur dédié.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/I2G6TkKg0gQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> [!warning]
>
> OVHcloud met à votre disposition des services dont la responsabilité vous revient. En effet, n’ayant aucun accès à ces machines, nous n’en sommes pas les administrateurs et ne pourrons vous fournir d'assistance. Il vous appartient de ce fait d’en assurer la gestion logicielle et la sécurisation au quotidien.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la sécurisation d’un serveur. Plus d’informations dans la section « Aller plus loin » de ce guide.
>

## Prérequis

- Posséder un [serveur dédié](https://www.ovh.com/fr/serveurs_dedies/){.external}.
- Être connecté en SSH (accès root) sous Linux ou en tant qu'administrateur sous Windows.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## En pratique

Lorsque votre serveur dédié est configuré pour la première fois, vous pouvez sélectionner le système d'exploitation à installer.

### Installation ou réinstallation de votre serveur dédié

Vous pouvez facilement réinstaller votre serveur et choisir une autre image du système d'exploitation dans votre [Panneau de configuration OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Sous l'onglet `Informations générales`{.action}, cliquez sur `...`{.action} en regard du système d'exploitation, puis cliquez sur `Installer`{.action}.

![Bouton Réinstaller](images/reinstalling-your-server-00.png){.thumbnail}

Sur l'écran suivant, sélectionnez `Installer à partir d'un modèle OVH`{.action} (pour utiliser l'un de nos modèles d'installation) ou `Installer l'un de vos modèles`{.action} (pour utiliser le vôtre).

Pour pouvoir installer une image personnalisée sur le serveur, choisissez la troisième option `installer à partir d'une image personnalisée`{.action}. Reportez-vous au [guide de l'interface utilisateur du navigateur](../bringyourownimage/) pour en savoir plus sur les paramètres de cette fonctionnalité.

>  [!primary]
>
> Certains systèmes d'exploitation ou plates-formes propriétaires tels que Plesk ou Windows nécessitent des licences qui génèrent des frais supplémentaires. Vous pouvez acheter des licences [via OVHcloud](https://www.ovhcloud.com/fr/bare-metal/os/) ou auprès d'un revendeur externe. Vous devrez ensuite appliquer votre licence, dans le système d'exploitation lui-même ou à l'aide de votre [Panneau de configuration OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
>
Vous pouvez gérer toutes vos licences dans la section `Bare Metal Cloud`{.action} sous `Licences`{.action}. Dans cette section, vous pouvez également commander des licences ou ajouter des licences existantes via le bouton `Actions`{.action}.
>

Cliquez sur `Suivant`{.action} pour continuer.

![Sélection de modèle](images/reinstalling-your-server-02.png){.thumbnail}

Après avoir choisi `Installer à partir d'un modèle OVHcloud`{.action}, vous pouvez sélectionner le système d'exploitation dans les menus déroulants.

![Sélection opérationnelle](images/reinstalling-your-server-03.png){.thumbnail}

Si vous devez modifier le schéma de partitionnement de votre système d'exploitation, cochez la case « Personnaliser la configuration de la partition » avant de cliquer sur `Suivant`{.action}.

![Personnaliser la configuration de la partition](images/SSH_02.png){.thumbnail}

Une fois les ajustements terminés, cliquez sur `Suivant`{.action} pour accéder à la page de résumé.

#### Installation de la surveillance en temps réel (facultatif) <a name="installrtm"></a>

Si vous avez sélectionné un système d'exploitation compatible GNU/Linux, l'option d'activation de RTM pour le serveur s'affiche.

![RTM](images/reinstalling-your-server-04.png){.thumbnail}

Réglez le curseur sur `Activer`{.action} pour l'installer. Pour en savoir plus sur la fonctionnalité RTM, consultez notre [guide](../installer-rtm/).

#### Ajout d'une clé SSH (facultatif)

Si vous installez un système d'exploitation GNU/Linux, vous pouvez ajouter votre clé SSH à la dernière étape du processus d'installation.

![Personnaliser la configuration de la partition](images/SSH_03.png){.thumbnail}

Si une clé SSH est déjà enregistrée, elle apparaît dans le menu déroulant sous « Clés SSH » en bas. Sinon, vous devrez d'abord en ajouter un dans la section Mes services.

Pour ce faire, ouvrez la barre latérale en cliquant sur votre nom dans le coin supérieur droit et utilisez le raccourci `Produits et services`{.action}.

![Personnaliser la configuration de la partition](images/SSH_13.png){.thumbnail}

Dans « Mes services », basculez vers l'onglet `SSH keys`{.action} et cliquez sur `Add an SSH key`{.action}.

![Personnaliser la configuration de la partition](images/SSH_14.png){.thumbnail}

Pendant l'installation d'un serveur dédié, veillez à sélectionner « Dédié » dans le menu déroulant (compatible avec un VPS également).

Dans la nouvelle fenêtre, entrez un ID (nom de votre choix) et la clé elle-même (de type RSA, ECDSA ou Ed25519) dans les champs correspondants.

![Personnaliser la configuration de la partition](images/SSH_12.png){.thumbnail}

Pour obtenir une explication détaillée sur la génération de clés SSH, reportez-vous notre [guide](..//creer-cle-ssh-serveur-dediees/).

> [!warning]
>OVHcloud vous fournit les services dont vous êtes responsable en ce qui concerne leur configuration et leur gestion. Vous êtes donc responsable de leur bon fonctionnement.
>
>Ce guide est conçu pour vous aider dans les tâches courantes le plus possible. Néanmoins, nous vous recommandons de contacter un prestataire de services spécialisé si vous rencontrez des difficultés ou des doutes concernant l'administration, l'utilisation ou la mise en oeuvre des services sur un serveur.
>

### Connexion à votre serveur

#### Linux

Une fois l'installation terminée, vous recevrez un e-mail contenant des instructions d'accès administratif. Vous pouvez vous connecter à votre serveur via un terminal de commande ou avec un client tiers en utilisant SSH, qui est un protocole de communication sécurisé.

Utilisez les exemples suivants pour vous connecter à votre serveur et remplacer les informations d'identification par vos informations réelles (l'adresse IP et le nom de référence du serveur sont interchangeables).

**Exemple avec la racine :**

```sh
ssh root@IPv4_de_votre_serveur
```

**Exemple avec un utilisateur préconfiguré :**

```sh
ssh ubuntu@nom_de_reference_de_votre_serveur
```

Pour en savoir plus sur SSH, consultez notre [guide](../ssh-introduction/).

#### Windows

Une fois l'installation terminée, vous recevrez un e-mail contenant votre mot de passe pour l'accès administratif (racine). Vous devez utiliser ces informations d'identification pour vous connecter au serveur via RDP (**R**Remote **D**esDesktop **P**rotocol). Une fois connecté, Windows vous guide tout au long de l'installation initiale.

### Redémarrage de votre serveur dédié

Un redémarrage peut être nécessaire pour appliquer des configurations mises à jour ou pour résoudre un problème. Dans la mesure du possible, effectuez un « redémarrage à chaud » via la ligne de commande:

```sh
reboot
```

Cependant, vous pouvez effectuer un « hard reboot » à tout moment dans votre [Panneau de configuration OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB). Sous l'onglet `Informations générales`{.action}, cliquez sur `...`{.action} en regard de « Status » dans la zone **Service status**, puis cliquez sur `Redémarrer`{.action} et `Valider`{.action} dans la fenêtre contextuelle.

![Redémarrage](images/rebooting-your-server.png){.thumbnail}

### Sécurisation de votre serveur dédié

Comme expliqué dans la section « Objectif » de ce guide, vous êtes l'administrateur de votre serveur dédié. En tant que tel, vous êtes responsable de vos données et de leur sécurité. Pour en savoir plus sur la sécurisation de votre serveur, consultez notre [guide](../securiser-un-serveur-dedie/).

### Configuration réseau

#### Mode bridge IP

Le mode bridge est l'action entreprise par l'équipement réseau pour créer un réseau agrégé à partir de plusieurs réseaux de communication ou de plusieurs segments réseau. Le mode bridge est distinct du routage, ce qui permet aux réseaux de communiquer indépendamment tout en restant séparés.

La configuration du pont réseau est généralement utilisée dans le contexte de la virtualisation, afin de permettre à chaque machine virtuelle d'avoir sa propre adresse IP publique.

Pour plus d'informations sur le mode bridge, reportez-vous à notre guide: [Mode bridge IP](../network-bridging/).

#### Alias IP

L'alias IP est le processus d'association de plusieurs adresses IP à la même interface réseau. Cela permet à votre serveur d'établir plusieurs connexions à un réseau, chacune servant un objectif différent.

Pour obtenir des instructions détaillées sur la configuration de son IP en alias, reportez-vous à notre [guide](../network-ipaliasing/).

#### Configuration IPv6

Tous les serveurs dédiés OVHcloud sont livrés avec un bloc /64 IPv6. Pour utiliser les adresses de ce bloc, vous devez apporter des modifications à la configuration du réseau. Consultez notre guide: [Configuration IPv6](../network-ipv6/).

### Mode de secours

Pour tout type de problème, la première étape de dépannage générale consiste à redémarrer votre serveur en mode rescue à partir de votre [Panneau de configuration OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Il est important d'identifier les problèmes de serveur dans ce mode afin d'exclure les problèmes liés aux logiciels avant de contacter nos équipes de support.

Reportez-vous au [guide du mode rescue](../ovh-rescue/).

### Accès à l'aide d'IPMI

OVHcloud déploie tous les serveurs dédiés avec une console IPMI (Intelligent Platform Management Interface) qui s'exécute dans votre navigateur ou à partir d'une applet Java, et vous permet de vous connecter directement à votre serveur même s'il n'a pas de connexion réseau. Cela en fait un outil utile pour résoudre les problèmes qui ont pu mettre votre serveur hors ligne.

Pour plus d'informations, reportez-vous à notre guide: [Utilisation de l'IPMI avec des serveurs dédiés](../utilisation-ipmi-serveurs-dedies/).

## Allez plus loin

Rejoignez notre communauté d'utilisateurs sur <https://community.ovh.com/>.