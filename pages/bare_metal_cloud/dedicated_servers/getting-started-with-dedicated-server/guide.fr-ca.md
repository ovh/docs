---
title: "Premiers pas avec un serveur dédié"
excerpt: "Découvrez comment gérer un serveur dédié dans votre espace client OVHcloud et comment démarrer avec la configuration et la sécurisation d'un serveur"
updated: 2024-05-17
---

## Objectif

Un serveur dédié est un serveur physique (« bare metal ») situé dans l’un de nos datacenters. Contrairement aux offres d’hébergement web (également appelées « hébergements mutualisés »), qui sont techniquement gérées par OVHcloud, vous êtes entièrement responsable de l’administration de votre serveur dédié.

**Ce guide vous apporte toutes les informations nécessaires à vos premiers pas avec un serveur dédié.**

## Prérequis

- Disposer d'un [serveur dédié](/links/bare-metal/bare-metal) dans votre espace client OVHcloud.
- Être connecté à votre serveur en SSH sous Linux ou via un bureau distant sous Windows.
- Être connecté à votre [espace client OVHcloud](/links/manager).

> [!primary]
>
> Si votre serveur appartient à la ligne de produits **Eco**, rendez-vous plutôt dans [ce guide](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco).

## En pratique

### Sommaire

- [Installation ou réinstallation d'un système d'exploitation](#install)
- [Connexion à votre serveur](#connect)
- [Redémarrage de votre serveur dédié](#reboot)
- [Sécurisation de votre serveur dédié](#secure)
- [Monitoring OVHcloud](#monitoring-server)
- [Configuration réseau](#network)
- [Mode rescue](#rescue)
- [Accès à l'aide de l'IPMI](#console)
- [Backup storage](#backup)

<a name="install"></a>

### Installation ou réinstallation d'un système d'exploitation

> [!success]
>
> Retrouvez plus d’informations sur les systèmes d’exploitation des serveurs sur [notre page web](https://www.ovhcloud.com/fr-ca/bare-metal/os/).
>

Vous pouvez facilement réinstaller votre serveur ou choisir une autre image d'OS à installer dans votre [espace client OVHcloud](/links/manager). Sous l'onglet `Informations générales`{.action}, cliquez sur `...`{.action} en face du système d'exploitation, puis cliquez sur `Installer`{.action}.

![Bouton Réinstaller](images/reinstalling-your-server-01.png){.thumbnail}

Dans la fenêtre qui apparaît, sélectionnez l'une des options d'installation :

- `Installer à partir d'un template OVHcloud`{.action} : vous pouvez sélectionner le système d’exploitation et personnaliser la configuration de votre serveur.
- `Installer un de vos gabarits`{.action} : pour pouvoir appliquer un gabarit personnalisé, vous devez avoir enregistré au préalable au moins une configuration de serveur. Pour cela, il est nécessaire de cocher l'option « Enregistrer cette installation » à l'étape 4 du processus d'installation.
- `Installer à partir d'une image personnalisée`{.action} : cette option vous permet d'installer une image externe sur le serveur. Consultez le [guide sur la fonctionnalité Bring Your Own Image](/pages/bare_metal_cloud/dedicated_servers/bring-your-own-image) pour plus de détails sur cette option.

> [!primary]
>
> Certains systèmes d'exploitation ou plates-formes propriétaires tels que Plesk ou Windows nécessitent des licences qui génèrent des frais supplémentaires. Vous pouvez acheter des licences [auprès de OVHcloud](https://www.ovhcloud.com/fr-ca/bare-metal/os/) ou auprès d'un revendeur externe. Vous devrez ensuite appliquer votre licence, dans le système d'exploitation lui-même ou à l'aide de votre [espace client OVHcloud](/links/manager).
>
> Vous pouvez gérer toutes vos licences dans la section `Bare Metal Cloud`{.action} sous `Licences`{.action}. Dans cette section, vous pouvez également commander des licences ou ajouter des licences existantes via le bouton `Actions`{.action}.
>

Cliquez sur `Suivant`{.action} pour continuer.

![Sélection de template](images/reinstalling-your-server-02.png){.thumbnail}

Après avoir choisi `Installer à partir d'un template OVHcloud`{.action}, vous pouvez sélectionner le système d'exploitation dans les menus déroulants.

![Sélection opérationnelle](images/reinstalling-your-server-03.png){.thumbnail}

Si vous devez modifier le schéma de partitionnement de votre système d'exploitation, cochez la case « Personnaliser la configuration des partitions » avant de cliquer sur `Suivant`{.action}.

![Personnaliser la configuration des partitions](images/reinstalling-your-server-04.png){.thumbnail}

Cette étape vous permet de configurer le type de RAID ainsi que le partitionnement, dans les limites du matériel et du système d'exploitation.

> [!warning]
>
> Si votre serveur est équipé de Soft RAID, notre système donnera la priorité à l'installation du système d'exploitation en utilisant tous vos disques. Cette technologie est appelée RAID 1. RAID 1 (disk mirroring) est la réplication de données sur deux disques ou plus. Avec ce procédé, tous les disques sont automatiquement montés lors de la procédure d'installation. Cela signifie également que vous n'aurez accès au stockage que sur un seul disque, le ou les autres disques étant utilisés pour la réplication des données, ce qui assure la redondance en cas de défaillance d'un disque.
>

Si vous ne souhaitez pas utiliser tous vos disques pour l'installation, vous pouvez la mettre à jour après avoir coché la case "Personnaliser la configuration de la partition". Dans ce cas, vous serez responsable du montage des autres disques dans le système d'exploitation. Vous devez vous référer à la documentation du système d'exploitation pour savoir comment procéder.

![select disks](images/choosedisk.png){.thumbnail}

Une fois les ajustements terminés, cliquez sur `Suivant`{.action} pour accéder à la page de résumé.

Vous y trouverez notamment des questions complémentaires spécifiques au système d'exploitation sélectionné.          

Par exemple, si vous installez un système d'exploitation GNU/Linux, vous pouvez y ajouter votre clé SSH.

Pour obtenir une explication détaillée sur la génération de clés SSH, reportez-vous à notre [guide](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated).     

![configuration SSH](images/reinstalling-your-server-05.png){.thumbnail}

Cliquez enfin sur `Confirmer`{.action} pour lancer l'installation du système d'exploitation sur votre serveur dédié.

<a name="connect"></a>

### Connexion à votre serveur

> [!warning]
> OVHcloud met à votre disposition des services dont la configuration et la gestion relèvent de votre responsabilité. Il vous appartient donc d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de contacter un [prestataire de services spécialisé](/links/partner) si vous avez des difficultés ou des doutes concernant l'administration, l'utilisation ou la mise en œuvre de services sur un serveur.
>

#### Linux

Si vous avez installé un modèle d’OS OVHcloud sur votre serveur, un utilisateur disposant d’autorisations élevées est créé automatiquement. Cet utilisateur sera nommé en fonction du système d'exploitation, par exemple « ubuntu » ou « rocky ».

Vous recevrez alors un e-mail contenant les informations nécessaires à l'établissement d'une première connexion en SSH. SSH est un protocole de communication sécurisé, utilisé pour établir des connexions cryptées vers un hôte distant. Retrouvez plus d'informations dans notre guide : [Premiers pas en SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).

La plupart des systèmes d'exploitation actuels disposent d'un client **Open SSH** installé nativement. Cela signifie que vos identifiants d'accès vous permettent d'établir rapidement une connexion à votre serveur depuis votre poste de travail via l'application de ligne de commande appropriée (`Terminal`, `Command prompt`, `Powershell`, etc.). Entrez la commande suivante :

```bash
ssh username@IPv4
```

**Exemple :**

```bash
ssh ubuntu@203.0.113.1
```

Vous pouvez également utiliser toute application tierce compatible avec **Open SSH**.

Une fois connecté, vous pouvez remplacer le mot de passe prédéfini de l'utilisateur actuel par une meilleure phrase secrète (*passphrase*) en utilisant cette commande :

```bash
passwd
```

Sur une distribution GNU/Linux, **une invite de mot de passe n'affichera pas vos entrées clavier**.

Tapez votre mot de passe actuel et appuyez sur `Entrée`{.action}. Entrez la nouvelle phrase secrète et retapez-la à l'invite suivante pour la confirmer.

```console
Changing password for ubuntu.
Current password:
New password: 
Retype new password: 
passwd: password updated successfully
```

> [!warning]
> 
> **Activation du compte utilisateur root**
>
> Il n'est pas nécessaire d'utiliser le compte utilisateur « root » pour débuter l'administration de votre serveur. Ce compte doit d'abord être activé dans le système d'exploitation du serveur pour pouvoir l'utiliser. De plus, par mesure de sécurité, les connexions SSH avec l'utilisateur « root » sont **désactivées** par défaut.
> 
> Sauf mention contraire, toutes les actions d'administration décrites dans notre documentation peuvent être accomplies par le compte d'utilisateur par défaut, c'est-à-dire en tapant `sudo` suivi de la commande correspondante. Apprenez-en plus sur ce sujet dans notre guide sur la [configuration des comptes utilisateurs et de l'accès root sur un serveur](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).
>

Selon vos besoins en matière de sécurité, de mobilité et de commodité, les clés SSH peuvent servir de méthode de connexion supplémentaire ou même remplacer une identification via un nom d'utilisateur et un mot de passe. Découvrez comment les utiliser dans notre guide : [Créer et utiliser des clés SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated).

#### Windows

Une fois l'installation terminée, vous recevrez un e-mail avec vos identifiants Windows. Vous pouvez ensuite vous connecter à votre serveur via RDP (**R**emote **D**esktop **P**rotocol). Sur votre périphérique Windows local, ouvrez l'application `Remote Desktop Connection`.

![Windows remote](/pages/assets/screens/other/windows/windows_rdp.png){.thumbnail}

Renseignez l'adresse IPv4 de votre serveur, puis votre nom d'utilisateur et votre passphrase. Généralement, un message d'avertissement apparaît, vous demandant de confirmer la connexion en raison d'un certificat inconnu. Cliquez sur `Oui`{.action} pour vous connecter.

Vous pouvez également utiliser toute application tierce compatible avec RDP. Cette condition est requise si Windows n'est pas installé sur votre périphérique local.

> [!primary]
>
> Si vous rencontrez des difficultés avec cette méthode, vérifiez que les connexions à distance (RDP) sont autorisées sur votre poste de travail en inspectant les paramètres système, les règles de pare-feu et les restrictions réseau possibles.
> 

En solution de secours, vous pouvez utiliser la [console IPMI dans votre espace client OVHcloud](#console) pour vous connecter.

##### Activation des logs de démarrage Windows (facultatif)

Les logs de démarrage de Windows peuvent être utiles pour les diagnostics d'erreur de serveur.

Pour les activer, suivez les étapes ci-dessous en parcourant les onglets :

> [!tabs]
> 1. **Se connecter au serveur**
>>
>> Connectez-vous au serveur via RDP ou [IPMI](#console).<br>
>>
> 2. **Ouvrir l'utilitaire « Exécuter »**
>>
>> Ouvrez le menu Démarrer de Windows et cliquez sur `Exécuter`{.action}.<br><br>
>>![IPMI](/pages/assets/screens/other/windows/windows_start_run.png){.thumbnail}<br>
>>
> 3. **Ouvrir « msconfig »**
>>
>> Entrez « msconfig » et cliquez sur `OK`{.action}.<br><br>
>>![IPMI](/pages/assets/screens/other/windows/windows_msconfig.png){.thumbnail}<br>
>>
> 4. **Activer les logs**
>>
>> Dans la nouvelle fenêtre, activez l'option logs à côté de `Boot log`. Cliquez sur `OK`{.action}.<br><br>
>>![IPMI](/pages/assets/screens/other/windows/windows_log.png){.thumbnail}<br>
>>

Au prochain démarrage de votre serveur, les logs seront enregistrés dans un fichier `.txt`. Le chemin d'accès au fichier est : `C:\Windows\ntbtlog.txt`.

Pour accéder au fichier de logs en mode rescue, veuillez suivre les instructions du [guide du mode rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

<a name="reboot"></a>

### Redémarrage de votre serveur dédié

Un redémarrage peut être nécessaire pour appliquer des configurations mises à jour ou pour résoudre un problème. Dans la mesure du possible, effectuez un « soft reboot » du serveur via la ligne de commande suivante :

```bash
reboot
```

Cependant, vous pouvez effectuer un « hard reboot » à tout moment dans votre [espace client OVHcloud](/links/manager). Sous l'onglet `Informations générales`{.action}, cliquez sur `...`{.action} en face de « Statut » dans la zone **Etat des services**, puis cliquez sur `Redémarrer`{.action} et `Valider`{.action} dans la fenêtre contextuelle.

![Redémarrage](images/rebooting-your-server.png){.thumbnail}

<a name="secure"></a>

### Sécurisation de votre serveur dédié

Comme expliqué dans la section « Objectif » de ce guide, vous êtes l'administrateur de votre serveur dédié. En tant que tel, vous êtes responsable de vos données et de leur sécurité. Pour en savoir plus sur la sécurisation de votre serveur, consultez notre guide « [Sécuriser un serveur dédié](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server) ».

Si vous utilisez un serveur Windows, rendez-vous sur [ce guide](/pages/bare_metal_cloud/dedicated_servers/activate-port-firewall-soft-win).

<a name="monitoring-server"></a>

### Monitoring OVHcloud

Vous pouvez activer ou désactiver le monitoring d'un serveur dédié à partir de l'onglet `Informations générales`{.action} de votre [espace client OVHcloud](/links/manager). L'option se situe dans la section `État des services`.

![Monitoring](images/monitoring-your-service.png){.thumbnail}

Cliquez sur le bouton `Configurer`{.action}. Dans la fenêtre qui apparaît, vous avez trois options pour le comportement du monitoring :

- **Désactivé** : cette option interrompt les messages d'alerte et les interventions d'OVHcloud. Choisissez cette option si vous exécutez des actions d'administration spécifiques sur le serveur et qui empêchent une réponse ICMP.
- **Activé avec intervention proactive** : si le serveur ne répond plus, un e-mail d'alerte vous est envoyé et le serveur est vérifié par un technicien.
- **Activé sans intervention proactive** : vous recevrez un message d'alerte par e-mail au cas où le serveur ne répondrait plus. Pour lancer une intervention, il est nécessaire d'activer l'option avec intervention proactive.

![Monitoring](images/monitoring-your-server2.png){.thumbnail}

Cliquez sur `Confirmer`{.action} pour mettre à jour votre configuration du monitoring.

Vous trouverez plus d'informations sur le monitoring OVHcloud dans [ce guide](/pages/bare_metal_cloud/dedicated_servers/network_ip_monitoring).

<a name="network"></a>

### Configuration réseau

#### Mode bridge IP

Le mode bridge est l'action entreprise par l'équipement réseau pour créer un réseau agrégé à partir de plusieurs réseaux de communication ou de plusieurs segments réseau. Le mode bridge est distinct du routage, qui permet aux réseaux de communiquer indépendamment tout en restant séparés.

Il s'agit d'une configuration qui est le plus souvent utilisée dans le cadre de la virtualisation pour permettre à chaque machine virtuelle d’avoir sa propre adresse IP publique.

Pour plus d'informations sur le mode bridge, reportez-vous à notre guide : [Mode bridge IP](/pages/bare_metal_cloud/dedicated_servers/network_bridging).

#### Alias IP

Le mode alias IP associe deux adresses IP ou plus à une interface réseau. Cela permet à votre serveur d’établir plusieurs connexions à un réseau, chacune servant un objectif différent.

Pour obtenir des instructions détaillées sur la configuration de l'alias IP, reportez-vous au guide « [Configurer son adresse IP en alias](/pages/bare_metal_cloud/dedicated_servers/network_ipaliasing) ».

#### Configuration IPv6

Tous les serveurs dédiés OVHcloud sont livrés avec un bloc /64 IPv6. Pour utiliser les adresses de ce bloc, vous devez apporter des modifications à la configuration du réseau. Consultez notre guide « [Configuration IPv6](/pages/bare_metal_cloud/dedicated_servers/network_ipv6) ».

<a name="rescue"></a>

### Mode rescue

Pour tout type de problème, la première étape de dépannage consiste à redémarrer votre serveur en mode rescue depuis votre [espace client OVHcloud](/links/manager). Il est important d'identifier les problèmes de serveur dans ce mode, afin d'exclure les problèmes liés aux logiciels avant de contacter nos équipes de support.

Reportez-vous au guide « [Activer et utiliser le mode rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode) ».

<a name="console"></a>

### Accès à l'aide de l'IPMI

OVHcloud déploie tous les serveurs dédiés avec une console IPMI (Intelligent Platform Management Interface) qui s'exécute dans votre navigateur ou à partir d'une applet Java, et vous permet de vous connecter directement à votre serveur même s'il n'a pas de connexion réseau. Cela en fait un outil utile pour résoudre les problèmes qui ont pu mettre votre serveur hors ligne.

Pour plus d'informations, reportez-vous à notre guide « [Utilisation de l'IPMI avec des serveurs dédiés](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers) ».

<a name="backup"></a>

### Backup storage

Les serveurs dédiés OVHcloud comprennent un espace de stockage disposant d'un contrôle d'accès et fourni en tant qu'option gratuite. Il est préférable de l'utiliser comme option de sauvegarde complémentaire si jamais le serveur lui-même venait à subir une perte de données.

Pour activer et utiliser l'option Backup Storage, consultez [ce guide](/pages/bare_metal_cloud/dedicated_servers/services_backup_storage).

## Allez plus loin

[Configuration des comptes utilisateurs et de l'accès root sur un serveur](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds)

[Sécuriser un serveur dédié](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server)

[Activer et utiliser le mode rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[API OVHcloud et installation d'un OS](/pages/bare_metal_cloud/dedicated_servers/api-os-installation)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
