---
title: 'Configurer le vRack sur vos serveurs dédiés'
slug: configurer-plusieurs-serveurs-dedies-dans-le-vrack
excerpt: 'Découvrez comment configurer le vRack sur plusieurs serveurs dédiés'
section: 'vRack'
order: 01
---

**Dernière mise à jour le 02/05/2022**

## Objectif

Le vRack (baie virtuelle) OVHcloud permet de rassembler virtuellement plusieurs serveurs (quel que soit leur nombre et leur emplacement physique dans nos datacenters) et de les connecter à un switch virtuel au sein d’un même réseau privé. Vos serveurs peuvent ainsi communiquer de manière privée et sécurisée entre eux, au sein d'un VLAN dédié.

**Déouvrez comment configurer le vRack sur plusieurs serveurs dédiés.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZA7IsbDdAmc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Prérequis

- Un service [vRack](https://www.ovh.com/ca/fr/solutions/vrack/) activé dans votre compte
- Plusieurs [serveurs dédiés](https://www.ovh.com/ca/fr/serveurs-dedies/) (compatibles vRack)
- Disposer d’un accès administrateur (root) au serveur via SSH ou RDP
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc)
- Préparer la plage d'adresses IP privées que vous avez choisie

> [!warning]
> Cette fonctionnalité peut être indisponible ou limitée sur les [serveurs dédiés **Eco**](https://eco.ovhcloud.com/fr-ca/about/).
>
> Consultez notre [comparatif](https://eco.ovhcloud.com/fr-ca/compare/) pour plus d’informations.

## En pratique

### Étape 1 : commander le vRack

Une fois connecté à votre espace client OVHcloud, rendez-vous dans le menu `Bare Metal Cloud`{.action} et cliquez sur le bouton `Commander`{.action}. Sous ce menu, cliquez sur `vRack`{.action}.

![Commander le vrack](images/orderingvrack.png){.thumbnail}

Vous serez redirigé vers une autre page pour valider la commande, l’opération prendra quelques minutes.

### Étape 2 : ajouter vos serveurs au vRack

Une fois le vRack activé dans votre compte, rendez-vous dans la section `Bare Metal Cloud`{.action} de votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc), cliquez sur `Network`{.action} et ouvrez le menu `vRack`{.action}.

Sélectionnez votre vRack dans la liste pour afficher la liste des services éligibles. Cliquez sur chacun des serveurs que vous souhaitez ajouter au vRack, puis cliquez sur le bouton `Ajouter`{.action}.

![Choix du vRack](images/vrack_selection.png){.thumbnail}

### Étape 3 : configuration de vos interfaces réseau

Les étapes suivantes contiennent les configurations des distributions/systèmes d'exploitation récents les plus couramment utilisés. La première étape consiste toujours à vous [connecter à votre serveur](https://docs.ovh.com/ca/fr/dedicated/premiers-pas-serveur-dedie/) en SSH ou en session RDP (pour Windows). Les exemples ci-dessous supposent que vous êtes connecté en tant qu'utilisateur avec des autorisations élevées (Administrateur/sudo).

> [!primary]
>
Concernant les différentes distributions, sachez que la procédure à suivre pour configurer votre interface réseau, ainsi que les noms de fichiers, ont pu être sujets à modification. Si vous rencontrez des difficultés, Nous vous recommandons de consulter les manuels et les bases de connaissances des versions respectives du système d'exploitation.
>
Par exemple, les détails de configuration ci-dessous auront l'adresse IP `192.168.0.0/16` (**Masque de sous-réseau**: `255.255.0.0`).
>
Vous pouvez utiliser n'importe quelle plage d'IP privée de votre choix et n'importe quelle adresse dans cette plage.
>

#### Configurations GNU/Linux

Les noms des interfaces réseau de vos serveurs ne sont pas toujours les mêmes. Dans les exemples suivants, remplacez NETWORK_INTERFACE par le nom d'interface approprié.

Le meilleur moyen de vérifier la bonne interface pour le vRack est de vérifier l'onglet `Interfaces réseau`{.action} de votre serveur dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc). Dans le tableau du bas, notez l'adresse MAC qui est aussi le **Nom** de l'interface **Privée**.

![Interface vRack](images/private_interface.png){.thumbnail}

Une fois connecté à votre serveur via SSH, vous pouvez lister vos interfaces réseau avec la commande suivante :

```bash
ip a
```

Sur la ligne qui commence par ```link ether```, vous pouvez vérifier que cette interface correspond à l'interface **Privée** renseignée dans votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc). Utilisez ce nom d'interface pour remplacer `NETWORK_INTERFACE` dans les configurations ci-dessous (exemple : `eno2`).

```console
link ether f0:00:00:ef:0e:f0
```

##### **Debian**

Dans un éditeur de texte, ouvrez le fichier de configuration réseau situé dans `/etc/network/interfaces.d` pour le modifier. Ici, le fichier s'appelle `50-cloud-init`.

```bash
editor /etc/network/interfaces.d/50-cloud-init
```

Ajoutez les lignes suivantes :

```console
auto NETWORK_INTERFACE
iface NETWORK_INTERFACE inet static
address 192.168.0.1
netmask 255.255.0.0
```

Enregistrez vos modifications dans le fichier de configuration et quittez l'éditeur.

Redémarrez le service réseau pour appliquer la configuration :

```bash
systemctl restart networking
```

Répétez cette procédure pour vos autres serveurs et attribuez à chacun d'entre eux une adresse IP inutilisée à partir de votre plage privée. Dès lors, vos serveurs pourront communiquer entre eux sur le réseau privé.

##### **Ubuntu**

A l'aide de l'éditeur de texte de votre choix, ouvrez le fichier de configuration réseau se trouvant dans `/etc/netplan/` afin de l'éditer. Ici, le fichier s'appelle `50-cloud-init.yaml`.

```bash
editor /etc/netplan/50-cloud-init.yaml
```

Ajoutez la configuration IP à la configuration existante après la ligne `ethernets` :

```yaml
    ethernets:
        NETWORK_INTERFACE :
            dhcp4: no
            addresses:
              - 192.168.0.1/16
```

> [!warning]
>
> Il est important de respecter l'alignement de chaque élément dans les fichiers `yaml` comme représenté dans l'exemple ci-dessus. N'utilisez pas la touche de tabulation pour créer votre espacement. Seule la touche espace doit être utilisée.
>

Enregistrez vos modifications dans le fichier de configuration et quittez l'éditeur.

Appliquez la configuration :

```bash
netplan apply
```

Répétez cette procédure pour vos autres serveurs et attribuez à chacun d'entre eux une adresse IP inutilisée à partir de votre plage privée. Dès lors, vos serveurs pourront communiquer entre eux sur le réseau privé.

##### **CentOS**

A l'aide de l'éditeur de texte de votre choix, ouvrez le fichier `/etc/sysconfig/network-scripts/ifcfg-NETWORK_INTERFACE`.

```bash
editor /etc/sysconfig/network-scripts/ifcfg-NETWORK_INTERFACE
```

Ajouter ces lignes :

```console
DEVICE=NETWORK_INTERFACE
BOOTPROTO=static
IPADDR=192.168.0.1
NETMASK=255.255.0.0
ONBOOT=yes
TYPE=Ethernet
```

Enregistrez vos modifications dans le fichier de configuration et quittez l'éditeur.

Redémarrez le service réseau pour appliquer les modifications :

```bash
systemctl restart networking
```

Sous **CentOS 8**, utilisez cette commande :

```bash
systemctl restart NetworkManager.service
```

Répétez cette procédure pour vos autres serveurs et attribuez à chacun d'entre eux une adresse IP inutilisée à partir de votre plage privée. Dès lors, vos serveurs pourront communiquer entre eux sur le réseau privé.

#### Configuration Windows

À titre d'exemple, les configurations suivantes utiliseront la plage d'adresses IP de `192.168.0.0/16` (**Masque de sous-réseau**: `255.255.0.0`).

Connectez-vous à votre serveur Windows via le bureau à distance et allez dans le **Panneau de configuration**.

![Windows Control Panel](images/windows_control_panel.png){.thumbnail}

Cliquez sur `Network and Internet`{.action}.

![Réseau et Internet](images/windows_network_and_internet.png){.thumbnail}

Ouvrez `Network and Sharing Center`{.action}.

![Network and Sharing Center](images/windows_network_and_sharing_centre.png){.thumbnail}

Cliquez sur `Change Adapter Settings`{.action}.

![Change Adapter Settings](images/windows_change_adapter_settings.png){.thumbnail}

Faites un clic-droit sur l'interface réseau secondaire, puis cliquez sur `Propriétés`{.action}.

![Windows Properties](images/windows_properties_button.png){.thumbnail}

Double-cliquez sur `Internet Protocol Version 4 (TCP/IPv4)`{.action}.

![Internet Protocol Version 4 (TCP/IP/IPv4)](images/windows_ipv4.png){.thumbnail}

Cliquez sur **Utiliser l'adresse IP suivante**. Entrez n'importe quelle adresse **IP** de votre plage privée et le **masque** de sous-réseau approprié (`255.255.0.0` dans cet exemple) dans le champ correspondant.

![Utiliser l'adresse IP suivante](images/windows_use_following_ip_address.png){.thumbnail}

Cliquez sur `OK`{.action} pour sauvegarder les modifications puis redémarrez votre serveur pour les appliquer.

Répétez cette procédure pour vos autres serveurs et attribuez à chacun d'entre eux une adresse IP inutilisée à partir de votre plage privée. Dès lors, vos serveurs pourront communiquer entre eux sur le réseau privé.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
