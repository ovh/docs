---
title: Configurer une Additional IP
slug: configure-additional-ip
excerpt: Découvrez comment ajouter des adresses Additional IP à la configuration de votre instance
section: Additional IP
order: 01
---

**Dernière mise à jour le 02/11/2022**

> [!primary]
>
> Depuis le 6 octobre 2022, notre solution "IP Failover" s'appelle désormais [Additional IP](https://www.ovhcloud.com/fr-ca/network/additional-ip/). Cela n'a aucun impact sur ses fonctionnalités ou le fonctionnement de vos services.
>

## Objectif

Vous devrez peut-être configurer des adresses Additional IP sur vos instances, par exemple si vous hébergez un grand nombre de sites web sur votre intance ou si vous hébergez des projets internationaux. Les adresses Additional IP OVHcloud vous permettent d'associer plusieurs adresses IP à une seule interface réseau.

**Ce guide explique comment ajouter des adresses Additional IP à votre configuration réseau.**

> [!warning]
>OVHcloud vous fournit des services dont vous êtes responsable en ce qui concerne leur configuration et leur gestion. Vous êtes donc responsable de leur bon fonctionnement.
>
>Ce guide est conçu pour vous aider le plus possible dans les tâches courantes. Néanmoins, nous vous recommandons de contacter un prestataire de services spécialisé si vous rencontrez des difficultés ou des doutes concernant l'administration, l'utilisation ou la mise en oeuvre des services sur un serveur.
>

## Prérequis

- une [instance Public Cloud](https://www.ovhcloud.com/fr-ca/public-cloud/) dans votre compte OVHcloud
- une [adresse Additional IP](https://www.ovhcloud.com/fr-ca/bare-metal/ip/) ou un bloc Additional IP
- un accès administrateur (root) via SSH ou GUI à votre instance
- des connaissances de base sur les réseaux et leur administration

## En pratique

Ce guide contient les configurations des distributions/systèmes d’exploitation les plus couramment utilisés. La première étape consiste toujours à se connecter à votre instance via SSH ou via une session de connexion à l’interface graphique utilisateur (VNC pour une instance Windows). Les exemples ci-dessous supposent que vous êtes connecté en tant qu’utilisateur avec des autorisations élevées (administrateur/sudo).

> [!primary]
>
En ce qui concerne les différentes versions de distributions, veuillez noter que la procédure appropriée pour configurer votre interface réseau ainsi que les noms de fichiers peuvent avoir été modifiés. Si vous rencontrez des difficultés, nous vous recommandons de consulter la documentation relative à votre système d’exploitation.
>

**Veuillez prendre note de la terminologie suivante qui sera utilisée dans les exemples de code et les instructions détaillées dans ce guide :**

|Terme|Description|Exemples|
|---|---|---|
|ADDITIONAL_IP|Adresse Additional IP attribuée à votre service|169.254.10.254|
|NETWORK_INTERFACE|Nom de l'interface réseau|*eth0*, *ens3*|
|ID|ID de l'alias IP, commençant par *0* (en fonction du nombre d'adresses IP supplémentaires à configurer)|*0*, *1*|

### Debian 11

#### Etape 1 : désactiver la configuration automatique du réseau

Ouvrez le chemin d'accès au fichier suivant avec un éditeur de texte :

```bash
sudo nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
```

Entrez la ligne suivante, puis enregistrez et quittez l'éditeur.

```bash
network: {config: disabled}
```

La création de ce fichier de configuration empêche l'exécution automatique des modifications apportées à la configuration de votre réseau.

#### Etape 2 : modifier le fichier de configuration réseau

Vous pouvez vérifier le nom de votre interface réseau à l'aide de la commande suivante :

```bash
ip a
```

Ouvrez le fichier de configuration réseau pour le modifier à l'aide de la commande suivante :

```bash
sudo nano /etc/network/interfaces.d/50-cloud-init
```

Ajoutez ensuite les lignes suivantes :

```bash
auto NETWORK_INTERFACE:ID
iface NETWORK_INTERFACE:ID inet static
address ADDITIONAL_IP
netmask 255.255.255.255
```

#### Etape 3 : redémarrer l'interface

Appliquez les modifications à l'aide de la commande suivante :

```bash
sudo systemctl restart networking
```

### Ubuntu 22.04

Le fichier de configuration de vos adresses Additional IP se trouve dans `/etc/netplan/`. Dans cet exemple, il s'appelle « 50-cloud-init.yaml ». Avant d'apporter des modifications, vérifiez le nom de fichier réel dans ce dossier. Chaque adresse Additional IP nécessite sa propre ligne dans le fichier.

#### Etape 1 : désactiver la configuration automatique du réseau

Ouvrez le chemin d'accès au fichier suivant avec un éditeur de texte :

```bash
sudo nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
```

Entrez la ligne suivante, puis enregistrez et quittez l'éditeur.

```bash
network: {config: disabled}
```

La création de ce fichier de configuration empêche l'exécution automatique des modifications apportées à la configuration de votre réseau.

#### Etape 2 : modifier le fichier de configuration

Vous pouvez vérifier le nom de votre interface réseau à l'aide de la commande suivante :

```bash
ip a
```

Ouvrez le fichier de configuration réseau pour le modifier à l'aide de la commande suivante :

```bash
sudo nano /etc/netplan/50-cloud-init.yaml
```

Ne modifiez pas les lignes existantes dans le fichier. Ajoutez votre adresse Additional IP en suivant l'exemple ci-dessous :

```yaml
network:
    version: 2
    ethernets:
        NETWORK_INTERFACE:
            dhcp4: true
            match:
                macaddress: fa:xx:xx:xx:xx:63
            set-name: NETWORK_INTERFACE
            addresses:
            - ADDITIONAL_IP/32
```

> [!warning]
>
> Il est important de respecter l'alignement de chaque élément de ce fichier tel que représenté dans l'exemple ci-dessus. N'utilisez pas la touche de tabulation pour créer votre espacement.
>

Enregistrez et fermez le fichier.

#### Etape 3 : appliquer la nouvelle configuration réseau

Vous pouvez tester votre configuration à l'aide de la commande suivante :

```bash
sudo netplan try
```

Si elle est correcte, appliquez-la à l'aide de la commande suivante :

```bash
sudo netplan apply
```

Répétez cette procédure pour chaque adresse Additional IP.

### Windows Server (2016)

Connectez-vous à [l’espace client d’OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc), accédez à la section `Public Cloud`{.action} et sélectionnez le projet Public Cloud concerné.

Ouvrez `Instances`{.action} dans le menu de gauche. Cliquez sur le nom de votre instance. Accédez à l'onglet `Console VNC`{.action}.

#### Etape 1 : vérifier la configuration réseau

Faites un clic droit sur le bouton `Menu Démarrer`{.action} et ouvrez `Exécuter`{.action}.

Tapez `cmd` et cliquez sur `OK`{.action} pour ouvrir l'application de ligne de commande.

![cmdprompt](images/pci_win07.png){.thumbnail}

Afin de récupérer la configuration IP actuelle, entrez `ipconfig` dans l'invite de commandes.

![vérifier la configuration IP principale](images/image1-1.png){.thumbnail}

#### Etape 2 : modifier les propriétés IPv4

Vous devez maintenant modifier les propriétés IP en une configuration statique.

Ouvrez les paramètres de l'adaptateur dans le Panneau de configuration Windows, puis ouvrez les `Propriétés`{.action} de `Internet Protocol Version 4 (TCP/IPv4)`{.action}.

![modifier la configuration IP](images/image2.png){.thumbnail}

Dans la fenêtre Propriétés IPv4, sélectionnez `Utiliser l'adresse IP suivante`{.action}. Entrez l'adresse IP que vous avez récupérée à la première étape, puis cliquez sur `Avancé`{.action}.

#### Etape 3 : ajouter l'adresse Additional IP dans les « Paramètres TCP/IP avancés »

Dans la nouvelle fenêtre, cliquez sur `Ajouter...`{.action} sous « Adresses IP ». Entrez votre adresse Additional IP et le masque de sous-réseau (255.255.255.255).

![section de configuration avancée](images/image4-4.png){.thumbnail}

Confirmez en cliquant sur `Ajouter`{.action}.

![Configuration du basculement IP](images/image5-5.png){.thumbnail}

#### Etape 4 : redémarrer l'interface réseau

De retour dans le panneau de configuration (`Connexions réseau`{.action}), faites un clic droit sur votre interface réseau, puis sélectionnez `Désactiver`{.action}.

![désactivation du réseau](images/image6.png){.thumbnail}

Pour la redémarrer, faites un nouveau clic droit dessus, puis sélectionnez `Activer`{.action}.

![activation du réseau](images/image7.png){.thumbnail}

#### Etape 5 : vérifier la nouvelle configuration réseau

Ouvrez l'invite de commandes (cmd) et entrez `ipconfig`. La configuration doit maintenant inclure la nouvelle adresse Additional IP.

![vérifier la configuration réseau actuelle](images/image8-8.png){.thumbnail}

### cPanel (CentOS 7) / dérivés Red Hat

#### Etape 1 : modifier le fichier de configuration réseau

Vous pouvez vérifier le nom de votre interface réseau à l'aide de la commande suivante :

```bash
ip a
```

Ouvrez le fichier de configuration réseau pour le modifier :

```bash
sudo nano /etc/sysconfig/network-scripts/ifcfg-NETWORK_INTERFACE:ID
```

Ajoutez ensuite ces lignes :

```bash
DEVICE=NETWORK_INTERFACE:ID
BOOTPROTO=static
IPADDR=ADDITIONAL_IP
NETMASK=255.255.255.255
BROADCAST=ADDITIONAL_IP
ONBOOT=yes
```

#### Etape 2 : redémarrer l'interface

Appliquez les modifications à l'aide de la commande suivante :

```bash
sudo systemctl restart networking
```

### Plesk

#### Etape 1 : accéder à la section Gestion de Plesk IP

Dans le panneau de configuration Plesk, choisissez `Outils et paramètres`{.action} dans la barre latérale gauche.

![accès à la gestion des adresses IP](images/pleskip1.png){.thumbnail}

Cliquez sur `Adresses IP`{.action} sous **Outils et ressources**.

#### Etape 2 : ajouter les informations IP supplémentaires

Dans cette section, cliquez sur le bouton `Add IP Address`{.action}.

![ajouter des informations IP](images/pleskip2-2.png){.thumbnail}

Entrez votre adresse Additional IP sous la forme `xxx.xxx.xxx.xxx/32` dans le champ « Adresse IP et masque de sous-réseau », puis cliquez sur `OK`{.action}.

![ajouter des informations IP](images/pleskip3-3.png){.thumbnail}

#### Etape 3 : vérifier la configuration IP actuelle

Dans la section « Adresses IP », vérifiez que l'adresse Additional IP a été correctement ajoutée.

![configuration IP actuelle](images/pleskip4-4.png){.thumbnail}

### Diagnostic


Tout d'abord, redémarrez votre instance à l'aide du système d'exploitation de l'instance ou de l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc). Si vous ne parvenez toujours pas à établir une connexion entre le réseau public et votre Additional IP et que vous suspectez un problème réseau, vous devez redémarrer l'instance en [mode rescue](https://docs.ovh.com/ca/fr/public-cloud/passer-une-instance-en-mode-rescue/). Vous pouvez ensuite configurer l'adresse Additional IP directement sur l'instance.

Une fois que vous êtes connecté en mode rescue via SSH, entrez la commande suivante :

```bash
ifconfig ens3:0 ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP up
```

Pour tester la connexion, il vous suffit d'envoyer un ping à votre adresse Additional IP depuis l'extérieur. S'il répond en mode rescue, cela signifie probablement qu'il y a une erreur de configuration. Toutefois, si l'IP ne fonctionne toujours pas, veuillez en informer nos équipes du support en créant un ticket d'assistance depuis votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc).

## Aller plus loin

[Importer une Additional IP](https://docs.ovh.com/ca/fr/publiccloud/network-services/import-additional-ip/)

[Basculer une Additional IP](https://docs.ovh.com/ca/fr/publiccloud/network-services/migrate-additional-ip/)

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
