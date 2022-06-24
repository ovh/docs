---
title: Interconnexion IPsec entre deux sites
slug: ipsec-interconnection
excerpt: "Mise en place d'un VPN IPsec entre deux clusters Nutanix distants"
section: Plan de reprise d'activité
order: 02
hidden: true
---

**Dernière mise à jour le 23/06/2022**

## Objectif

Interconnecter deux clusters Nutanix Fournis par OVHcloud au travers d'un VPN IPsec en remplaçant les machines virtuelles **OVHgateway** servant à d'accès INTERNET par une passerelle sous le systême d'exploitation **pfsense**.

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Prérequis

- Disposer de deux clusters Nutanix chez OVHcloud dans des sites différents
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Être connecté sur vos clusters via Prism Central.
- Utiliser un plan d'adressage IP privé différent par cluster.

## En pratique

Dans ce guide nous devons réaliser des tâches sur deux clusters vous trouverez ci-dessous un index de l'installation 

[Etape 1 Présentation de la solution](#presentation)<br /> 
[Etape 2 Remplacement de la passerelle au CANADA](#configurecanada)<br />
&ensp;&ensp;[Etape 2.1 Téléchargement des sources pour l'installation de pfsense](#downloadsources)<br />
&ensp;&ensp;[Etape 2.2 Création de la machine virtuelle **GW-PFSENSE**](#createvmpfsense)<br />
&ensp;&ensp;[Etape 2.3 Arrêt de la machine virtuelle **OVH-GATEWAY**](#shutdownovhgateway)<br />
&ensp;&ensp;[Etape 2.4 Récupération de l'adresse publique sur l'espace client d'OVHcloud](#getpublicaddress)<br />
&ensp;&ensp;[Etape 2.5 Démarrage de la machine virtuelle **GW-PFSENSE**](#poweronvmpfsense)<br />
&ensp;&ensp;[Etape 2.6 Installation de **pfsense**](#pfsenseinstall)<br />
&ensp;&ensp;[Etape 2.7 Ejection du CDROM pfsense de la machine virtuelle **GW-PFSENSE**](#pfsenseremovecdrom)<br />
&ensp;&ensp;[Etape 2.8 Configuration des adresses IP de pfsense au travers de la console](#configureippfsense)<br />
&ensp;&ensp;[Etape 2.9 Configuration de certaines options au travers de l'interface WEB](#configurepfsenseoptions)<br />
&emsp;&emsp;[Etape 2.9.1 Changement du mot de passe par défaut de **pfsense**](#changepassword)<br />
&emsp;&emsp;[Etape 2.9.2 Ajout d'une règle pour autoriser l'administration à distance sur l'adresse publique au travers d'une autre adresse.](#addadminrule)<br />
[Etape 3 Configuration de la passerelle en FRANCE](#configuregatewayfrance)<br />
&ensp;&ensp;[Etape 3.1 Téléchargement des sources pour l'installation de pfsense](#downloadsources-fr)<br />
&ensp;&ensp;[Etape 3.2 Création de la machine virtuelle **GW-PFSENSE**](#createvmpfsense-fr)<br />
&ensp;&ensp;[Etape 3.3 Arrêt de la machine virtuelle **OVH-GATEWAY**](#shutdownovhgateway-fr)<br />
&ensp;&ensp;[Etape 3.4 Récupération de l'adresse publique sur l'espace client d'OVHcloud](#getpublicaddress-fr)<br />
&ensp;&ensp;[Etape 3.5 Démarrage de la machine virtuelle **GW-PFSENSE**](#poweronvmpfsense-fr)<br />
&ensp;&ensp;[Etape 3.6 Installation de **pfsense**](#pfsenseinstall-fr)<br />
&ensp;&ensp;[Etape 3.7 Ejection du CDROM pfsense de la machine virtuelle **GW-PFSENSE**](#pfsenseremovecdrom-fr)<br />
&ensp;&ensp;[Etape 3.8 Configuration des adresses IP de pfsense au travers de la console](#configureippfsense-fr)<br />
&ensp;&ensp;[Etape 3.9 Configuration de certaines options au travers de l'interface WEB](#configurepfsenseoptions-fr)<br />
&emsp;&emsp;[Etape 3.9.1 Changement du mot de passe par défaut de **pfsense**](#changepassword-fr)<br />
&emsp;&emsp;[Etape 3.9.2 Ajout d'une règle pour autoriser l'administration à distance sur l'adresse publique au travers d'une autre adresse.](#addadminrule-fr)<br />
[Etape 4 Mise en place du VPN IPsec](#configurevpnipsec)<br />
&ensp;&ensp;[Etape 4.1 Configuration du site au CANADA](#ipseccanada)<br />
&emsp;&emsp;[Etape 4.1.1 Mise en place du VPN IPsec vers la France](#paramipsectofrance)<br />
&emsp;&emsp;[Etape 4.1.2 Ajout d'une règle de pare-feu pour autoriser le flux réseau au travers du VPN IPsec entre le CANADA et la FRANCE](#addfwruletofrance)<br />
&ensp;&ensp;[Etape 4.2 Configuration du site en FRANCE](#ipsecfrance)<br />
&emsp;&emsp;[Etape 4.2.1 Mise en place du VPN IPsec vers le CANADA](#paramipsectocanada)<br />
&emsp;&emsp;[Etape 4.2.2 Ajout d'une règle de pare-feu pour autoriser le flux réseau au travers du VPN IPsec entre le CANADA et la FRANCE](#addruletocanada)<br />



<a name="presentation"></a>
### Etape 1 Présentation de la solution

Nous allons interconnecter deux clusters Nutanix l'un se trouvant au CANADA et l'autre en FRANCE, tous les deux dans des datacenters d'OVHcloud, ils utilisent un plan IP différent que voici :

* **Le Cluster au CANADA** : 192.168.10.0/24
* **Le Cluster en FRANCE** : 192.168.0.0/24

Pour permettre cette interconnexion nous allons remplacer sur chacun des sites les machines virtuelles **OVHgateway** par une machine virtuelle avec le système d'exploitation **pfsense** qui continuera à fournir l'accès Internet en sortie et permettra la création d'un tunnel VPN avec le protocole IPsec.

<a name="configurecanada"></a>
### Etape 2 Remplacement de la passerelle au CANADA 

<a name="downloadsources"></a>
#### Etape 2.1 Téléchargement des sources pour l'installation de pfsense

Téléchargez l'image iso de l'installation de **pfsense** à partir de ce lien [Téléchargement pfsense](https://www.pfsense.org/download/).

Ensuite à l'aide de cette documentation [Importez des images ISO](https://docs.ovh.com/fr/nutanix/image-import/) importez l'image **ISO** **pfsense** dans votre cluster NUTANIX.

<a name="createvmpfsense"></a>
#### Etape 2.2 Création de la machine virtuelle **GW-PFSENSE**

Créez une machine virtuelle avec ces paramètres :

- **Nom** : `GW-PFSENSE`
- **Stockage1** : `60 Go HDD` 
- **Stockage2** : `Un lecteur de DVD connecté à l'image ISO de pfsense`
- **RAM** : `4 Go` 
- **CPU** : `2 vCPU`
- **Réseau** : `deux cartes réseaux sur le réseau de AHV: **Base**`

Vous pouvez vous aider de ces informations sur ce lien [Gestion des machines virtuelles](https://docs.ovh.com/fr/nutanix/virtual-machine-management/) pour créer cette machine virtuelle.

![Create VM 01](images/00-createvm01.png){.thumbnail}

<a name="shutdownovhgateway"></a>
#### Etape 2.3 Arrêt de la machine virtuelle **OVH-GATEWAY**

Pour éviter des adresses IP en double sur le réseau il faut arrêter la machine virtuelle **OVHgateway** avant de démarrer la nouvelle machine virtuelle sous **pfsense**.

Au travers de **Prism Central** cliquez en haut à gauche sur le `menu principal`{.action}.

![Arrêt OVHGateway 01](images/01-stop-ovhgateway01.png){.thumbnail}

Cliquez sur `VMs`{.action}.

![Arrêt OVHGateway 02](images/01-stop-ovhgateway02.png){.thumbnail}

Cliquez sur la machine virtuelle `OVHgateway`{.action}.

![Arrêt OVHGateway 03](images/01-stop-ovhgateway03.png){.thumbnail}

A partir du menu `More` en haut, cliquez sur `Soft Shutdown`{.action}.

![Arrêt OVHGateway 04](images/01-stop-ovhgateway04.png){.thumbnail}

<a name="getpublicaddress"></a>
#### Etape 2.4 Récupération de l'adresse publique sur l'espace client d'OVHcloud <a name="getipcustomerportal"></a>

Récupérez les informations concernant les paramètres réseaux de la passerelle d'OVHcloud.

Connectez-vous sur l'espace client d'OVHcloud allez dans l'onglet `Hosted Private Cloud`{.action} cliquez sur votre cluster Nutanix et relevez l'adresse IP se trouvant dans `IPFO`.

![Get IP Fail OVER](images/02-get-ipfailover.png){.thumbnail}


L'adresse IPFO sur le site client d'OVHcloud est en fait un pack de 4 adresses, La deuxième adresse est affectée à la machine virtuelle **OVHgateway** et la troisième sert de passerelle pour aller sur Internet à partir de la machine virtuelle **OVHgateway**.

Lors de l'installation nous allons réutiliser ces informations pour les affecter à la nouvelle machine virtuelle **GW-PFSENSE**

```console
XX.XX.XX.N      Adresse de réseau réservé qui apparait sur le site client d'OVHcloud.
XX.XX.XX.N+1    Adresse IP utilisable qui doit être affectée à l'interface WAN.
XX.XX.XX.N+2    Passerelle qui se trouve sur un équipement d'OVHcloud à utiliser en tant que passerelle sur l'interface WAN. 
XX.XX.XX.N+3    Réseau de diffusion réservé.
```

Par exemple si l'adresse **IPFO** affichée sur le site client est 123.123.123.4/30 il faut utiliser :

- **123.123.123.5** pour l'adresse de l'interface **WAN** 
- **123.123.123.6** pour la passerelle sur l'interface **WAN**.

<a name="poweronvmpfsense"></a>
#### Etape 2.5  Démarrage de la machine virtuelle **GW-PFSENSE**

Revenez dans la gestion des machines virtuelles sur **Prism Central**, cliquez sur `GW-PFSENSE`{.action}.

![Start GATEWAY pfsense](images/02-start-gatewaypfsense01.png){.thumbnail}

Au travers du menu `More` cliquez sur `Power On`{.action}.

![Start GATEWAY pfsense](images/02-start-gatewaypfsense02.png){.thumbnail}

Cliquez sur `Launch console`{.action}.

![Start GATEWAY pfsense](images/02-start-gatewaypfsense03.png){.thumbnail}

<a name="pfsenseinstall"></a>
#### Etape 2.6 Installation de **pfsense**

Appuyez sur la touche `entrée`{.action} pour accepter la licence.

![pfsense Installation 01](images/03-install-pfsense01.png){.thumbnail}

Choisissez `Install`, positionnez-vous sur `OK` avec la touche `tabulation`{.action} et appuyez sur la touche `entrée`{.action}.

![pfsense Installation 02](images/03-install-pfsense02.png){.thumbnail}

Laissez `Continue with default keymap`, allez sur `select` avec la touche `tabulation`{.action} et appuyez sur la touche `entrée`{.action}.,

![pfsense Installation 03](images/03-install-pfsense03.png){.thumbnail}

Laissez `Auto (ZFS)` allez sur `OK` avec la touche `tabulation`{.action} et tapez sur la touche `entrée`{.action}.

![pfsense Installation 04](images/03-install-pfsense04.png){.thumbnail}

Positionnez-vous sur `Select` avec la touche `tabulation`{.action} et appuyez sur la touche `entrée`{.action}.

![pfsense Installation 05](images/03-install-pfsense05.png){.thumbnail}

Gardez `stripe`, positionnez-vous sur `OK` avec la touche `tabulation`{.action} et appuyez sur la touche `entrée`{.action}.

![pfsense Installation 06](images/03-install-pfsense06.png){.thumbnail}

Sélectionnez avec la barre `espace` NUTANIX VDISK ensuite allez sur `OK` avec la touche `tabulation`{.action} et appuyez sur la touche `entrée`{.action}.

![pfsense Installation 07](images/03-install-pfsense07.png){.thumbnail}

Allez sur `YES` avec la touche `tabulation`{.action} et appuyez sur la touche `entrée`{.action}.

![pfsense Installation 08](images/03-install-pfsense08.png){.thumbnail}

Choisissez `NO` avec la touche `tabulation`{.action} et appuyez sur la touche `entrée`{.action}.

![pfsense Installation 09](images/03-install-pfsense09.png){.thumbnail}

Laissez `Reboot` et appuyez sur la touche `entrée`{.action}.

![pfsense Installation 10](images/03-install-pfsense10.png){.thumbnail}

<a name="pfsenseremovecdrom"></a>
#### Etape 2.7 Ejection du CDROM pfsense de la machine virtuelle **GW-PFSENSE**

Revenez dans la gestion des machines virtuelles dans **Prism Central** et arrêtez la machine virtuelle en cliquant sur `Soft Shutdown`{.action} dans le menu `More` de la machine virtuelle **GW-PFSENSE**.

![Remove CDROM 01](images/03-remove-cdrom01.png){.thumbnail}

Cliquez sur `Update`{.action}.

![Remove CDROM 02](images/03-remove-cdrom02.png){.thumbnail}

Cliquez sur `Next`{.action}.

![Remove CDROM 03](images/03-remove-cdrom03.png){.thumbnail}

Cliquez sur l'icone `Eject`{.action}. au niveau du CDROM.

![Remove CDROM 04](images/03-remove-cdrom04.png){.thumbnail}

Cliquez sur `Next`{.action}.

![Remove CDROM 05](images/03-remove-cdrom05.png){.thumbnail}

CLiquez sur `Next`{.action}.

![Remove CDROM 06](images/03-remove-cdrom06.png){.thumbnail}

CLiquez sur `Save`{.action}.

![Remove CDROM 07](images/03-remove-cdrom07.png){.thumbnail}

Cliquez sur `Power On`{.action} dans le menu `More`.

![Remove CDROM 08](images/03-remove-cdrom08.png){.thumbnail}

Cliquez sur `Launch Console`{.action} pour continuer l'installation après le démarrage. 

![Remove CDROM 09](images/03-remove-cdrom09.png){.thumbnail}

<a name="configureippfsense"></a>
#### Etape 2.8 Configuration des adresses IP de pfsense au travers de la console

Nous allons configurer les adresses IP de passerelle **pfsense** comme ceci:

- Interface WAN : Voir cette partie du guide [Récupération de l'adresse publique sur l'espace client d'OVHcloud](#getipcustomerportal)

- Interface LAN: 192.168.10.254/24 qui correspond à la passerelle du réseau privé pour le cluster Nutanix et le masque de sous réseau 

Acceptez la licence en appuyant sur la touche `entrée`{.action}.

![Configure pfsense 01](images/04-configureip-pfsense01.png){.thumbnail}

Saisissez `n`{.action} et appuyez sur la touche `entrée`{.action} lorsque l'on demande si il faut des **VLAN**.

![Configure pfsense 02](images/04-configureip-pfsense02.png){.thumbnail}

Saisissez le nom de l'interface pour le **WAN** `vtnet0`{.action} et appuyez sur la touche `entrée`{.action}.

![Configure pfsense 03](images/04-configureip-pfsense03.png){.thumbnail}

Choisissez le nom de l'interface pour le **LAN** `vtnet1`{.action} et appuyez sur la touche `entrée`{.action}.

![Configure pfsense 04](images/04-configureip-pfsense04.png){.thumbnail}

Répondez `y`{.action} à la question si l'on veut valider les changements et appuyez sur la touche `entrée`{.action}.

![Configure pfsense 05](images/04-configureip-pfsense05.png){.thumbnail}

Saisissez `2` pour Choisir `Set interface(s) IP address` , ensuite appuyez sur la touche `entrée`{.action}.

![Configure pfsense 06](images/04-configureip-pfsense06.png){.thumbnail}

Sélectionnez l'interface **WAN** en saisissant `1` et appuyez sur la touche `entrée`{.action}.

![Configure pfsense 07](images/04-configureip-pfsense07.png){.thumbnail}

Saisissez `n`{.action} et appuyez sur la touche `entrée`{.action} à la demande de la configuration de l'adresse par DHCP.

![Configure pfsense 08](images/04-configureip-pfsense08.png){.thumbnail}

Saisissez l'`Adresse publique avec le masque`{.action} et appuyez sur la touche `entrée`{.action} comme par exemple **123.123.123.5/30**.

Ensuite saisissez l'`adresse de la passerelle publique`{.action} et appuyer sur la touche `entrée`{.action} comme par exemple **123.123.123.6**.

![Configure pfsense 09](images/04-configureip-pfsense09.png){.thumbnail}

Répondez `n`{.action} et appuyez sur la touche `entrée`{.action} lors de la configuration de l'**IPv6 address WAN**.

![Configure pfsense 10](images/04-configureip-pfsense10.png){.thumbnail}

A la demande **revert to HTTP as the webConfigurator protocol** Saisissez `n`{.action} et appuyez sur la touche `entrée`{.action}.

![Configure pfsense 11](images/04-configureip-pfsense11.png){.thumbnail}

Appuyez sur `entrée`{.action} pour valider l'enregistrement de l'adresse IP du **WAN**.

![Configure pfsense 12](images/04-configureip-pfsense12.png){.thumbnail}

Saisissez `2` et appuyez sur la touche `entrée`{.action} pour configurer les adresses IP.

![Configure pfsense 13](images/04-configureip-pfsense13.png){.thumbnail}

Prenez l'option `2` et appuyez sur la touche `entrée`{.action} pour modifier l'adresse IP du LAN.

![Configure pfsense 14](images/04-configureip-pfsense14.png){.thumbnail}

Saisissez l'adresse IP privée suivi du masque `192.168.10.254/24` et appuyez sur la touche `entrée`{.action}.

![Configure pfsense 15](images/04-configureip-pfsense15.png){.thumbnail}

Appuyez sur la touche `entrée`{.action} pour ne pas mettre de passerelle sur l'interface **LAN**

![Configure pfsense 16](images/04-configureip-pfsense16.png){.thumbnail}

Saisissez `n` et appuyez sur la touche `entrée`{.action} pour ne pas activer le serveur DHCP.

![Configure pfsense 17](images/04-configureip-pfsense17.png){.thumbnail}

Répondez `n` et appuyez sur la touche `entrée`{.action} à la demande **revert to HTTP as the webConfigurator protocol**.

![Configure pfsense 18](images/04-configureip-pfsense17.png){.thumbnail}

Il est maintenant possible d'administrer la passerelle en HTTPS sur le réseau privé.

Appuyez sur la touche `entrée`{.action} pour terminer la configuration en ligne de commande.

![Configure pfsense 19](images/04-configureip-pfsense19.png){.thumbnail}

<a name="configurepfsenseoptions"></a>
#### Etape 2.9 Configuration de certaines options au travers de l'interface WEB

Connectez-vous sur la console WEB de pfsense avec cette URL https://192.168.10.254 à partir d'une machine virtuelle se trouvant sur le réseau local **AHV : Base**.

Saisissez ces informations :

* **Compte utilisateur** : admin
* **Default password** : pfsense

Et cliquez sur `SIGN IN`{.action}.

![WEB Configure pfsense 01](images/05-configure-pfsense01.png){.thumbnail}

Cliquez sur `Accept`{.action} pour accepter la licence.

![WEB Configure pfsense 02](images/05-configure-pfsense02.png){.thumbnail}

Cliquez sur `Close`{.action} aux remerciements.

![WEB Configure pfsense 03](images/05-configure-pfsense03.png){.thumbnail}

<a name="changepassword"></a>
##### Etape 2.9.1 Changement du mot de passe par défaut de **pfsense**

Au travers du menu `System`{.action} choisissez `User Manager`{.action}

![Change Password 01](images/06-change-password01.png){.thumbnail}

Cliquez sur l'icône en forme de `Stylo`{.action}.

![Change Password 02](images/06-change-password02.png){.thumbnail}

Saisissez le mot de passe deux fois à coté de `Password` pour le confirmez ensuite faites défiler la `barre de défilement`{.action} jusqu'en bas de la fenêtre.

![Change Password 03](images/06-change-password03.png){.thumbnail}

Cliquez sur `Save`{.action} pour valider les changements.

![Change Password 03](images/06-change-password04.png){.thumbnail}.

<a name="addadminrule"></a>
##### Etape 2.9.2 Ajout d'une règle pour autoriser l'administration à distance sur l'adresse publique au travers d'une autre adresse.

Allez dans le menu `Firewall`{.action} choisissez `Rules`{.action}.

![Autorisation admin from public ADDRESS](images/07-authorize-admin-from-publicaddress01.png){.thumbnail}

Vérifiez que vous êtes sur l'onglet `WAN` et cliquez sur le bouton `Add`{.action} en bas avec la flèche vers le haut pour créer une règle de pare-feu.

![Autorisation admin from public ADDRESS](images/07-authorize-admin-from-publicaddress02.png){.thumbnail}

Choisissez ces options dans **Edit Firewall Rule** :

* **Action** : `Pass`
* **Interface** : `WAN`
* **Address Family** : `IPv4`
* **Protocol** : `TCP`

Prenez dans **Source** `Single host or alias` et saisissez `l'adresse publique` autorisée à se connecter au pare-feu **pfsense**.

Cliquez sur la `barre de défilement`{.action} pour aller en bas de la fenêtre.

![Autorisation admin from public ADDRESS 03](images/07-authorize-admin-from-publicaddress03.png){.thumbnail}

Ajoutez ces options dans **Destination** :

* **Destination** : `WAN address`
* **Destination Port Range From** : `HTTPS`
* **Destination Port Range To** : `HTTPS`

Cliquez sur `Save`{.action}.

![Autorisation admin from public ADDRESS 04](images/07-authorize-admin-from-publicaddress04.png){.thumbnail}

Cliquez sur `Apply Change`{.action} pour activer la règle.

![Autorisation admin from public ADDRESS 05](images/07-authorize-admin-from-publicaddress05.png){.thumbnail}

L'interface d'administration de **pfsense** et accessible depuis internet sur le réseau autorisé avec cette url https://adressewan comme par exemple https://123.123.123.5.


<a name="configuregatewayfrance"></a>
### Etape 3 Configuration de la passerelle en FRANCE

L'installation de la passerelle en **FRANCE** est identique à la passerelle du CANADA sauf pour ces paramètres :

* **Adresse privée en FRANCE** : 192.168.0.254 avec un masque en /24
* **Adresse publique** et **Adresse de passerelle publique** comme indiqué sur cette partie du guide [Récupération de l'adresse publique sur l'espace client d'OVHcloud](#getipcustomerportal)

<a name="downloadsources-fr"></a>
#### Etape 3.1 Téléchargement des sources pour l'installation de pfsense

Téléchargez l'image iso de l'installation de **pfsense** à partir de ce lien [Téléchargement pfsense](https://www.pfsense.org/download/).

Ensuite à l'aide de cette documentation [Importez des images ISO](https://docs.ovh.com/fr/nutanix/image-import/) importez l'image **ISO** **pfsense** dans votre cluster NUTANIX.

<a name="createvmpfsense-fr"></a>
#### Etape 3.2 Création de la machine virtuelle **GW-PFSENSE**

Créez une machine virtuelle avec ces paramètres :

- **Nom** : `GW-PFSENSE`
- **Stockage1** : `60 Go HDD` 
- **Stockage2** : `Un lecteur de DVD connecté à l'image ISO de pfsense`
- **RAM** : `4 Go` 
- **CPU** : `2 vCPU`
- **Réseau** : `deux cartes réseaux sur le réseau de AHV: **Base**`

Vous pouvez vous aider de ces informations sur ce lien [Gestion des machines virtuelles](https://docs.ovh.com/fr/nutanix/virtual-machine-management/) pour créer cette machine virtuelle.

![Create VM 01](images/00-createvm01.png){.thumbnail}

<a name="shutdownovhgateway-fr"></a>
#### Etape 3.3 Arrêt de la machine virtuelle **OVH-GATEWAY**

Pour éviter des adresses IP en double sur le réseau il faut arrêter la machine virtuelle **OVHgateway** avant de démarrer la nouvelle machine virtuelle sous **pfsense**.

Au travers de **Prism Central** cliquez en haut à gauche sur le `menu principal`{.action}.

![Arrêt OVHGateway 01](images/01-stop-ovhgateway01.png){.thumbnail}

Cliquez sur `VMs`{.action}.

![Arrêt OVHGateway 02](images/01-stop-ovhgateway02.png){.thumbnail}

Cliquez sur la machine virtuelle `OVHgateway`{.action}.

![Arrêt OVHGateway 03](images/01-stop-ovhgateway03.png){.thumbnail}

A partir du menu `More` en haut, cliquez sur `Soft Shutdown`{.action}.

![Arrêt OVHGateway 04](images/01-stop-ovhgateway04.png){.thumbnail}

<a name="getpublicaddress-fr"></a>
#### Etape 3.4 Récupération de l'adresse publique sur l'espace client d'OVHcloud <a name="getipcustomerportal"></a>

Récupérez les informations concernant les paramètres réseaux de la passerelle d'OVHcloud.

Connectez-vous sur l'espace client d'OVHcloud allez dans l'onglet `Hosted Private Cloud`{.action} cliquez sur votre cluster Nutanix et relevez l'adresse IP se trouvant dans `IPFO`.

![Get IP Fail OVER](images/02-get-ipfailover.png){.thumbnail}


L'adresse IPFO sur le site client d'OVHcloud est en fait un pack de 4 adresses, La deuxième adresse est affectée à la machine virtuelle **OVHgateway** et la troisième sert de passerelle pour aller sur Internet à partir de la machine virtuelle **OVHgateway**.

Lors de l'installation nous allons réutiliser ces informations pour les affecter à la nouvelle machine virtuelle **GW-PFSENSE**

```console
XX.XX.XX.N      Adresse de réseau réservé qui apparait sur le site client d'OVHcloud.
XX.XX.XX.N+1    Adresse IP utilisable qui doit être affectée à l'interface WAN.
XX.XX.XX.N+2    Passerelle qui se trouve sur un équipement d'OVHcloud à utiliser en tant que passerelle sur l'interface WAN. 
XX.XX.XX.N+3    Réseau de diffusion réservé.
```

Par exemple si l'adresse **IPFO** affichée sur le site client est 123.123.123.4/30 il faut utiliser :

- **123.123.123.5** pour l'adresse de l'interface **WAN** 
- **123.123.123.6** pour la passerelle sur l'interface **WAN**.

<a name="poweronvmpfsense-fr"></a>
#### Etape 3.5 Démarrage de la machine virtuelle **GW-PFSENSE**

Revenez dans la gestion des machines virtuelles sur **Prism Central**, cliquez sur `GW-PFSENSE`{.action}.

![Start GATEWAY pfsense](images/02-start-gatewaypfsense01.png){.thumbnail}

Au travers du menu `More` cliquez sur `Power On`{.action}.

![Start GATEWAY pfsense](images/02-start-gatewaypfsense02.png){.thumbnail}

Cliquez sur `Launch console`{.action}.

![Start GATEWAY pfsense](images/02-start-gatewaypfsense03.png){.thumbnail}

<a name="pfsenseinstall-fr"></a>
#### Etape 3.6 Installation de **pfsense**

Appuyez sur la touche `entrée`{.action} pour accepter la licence.

![pfsense Installation 01](images/03-install-pfsense01.png){.thumbnail}

Choisissez `Install`, positionnez-vous sur `OK` avec la touche `tabulation`{.action} et appuyez sur la touche `entrée`{.action}.

![pfsense Installation 02](images/03-install-pfsense02.png){.thumbnail}

Laissez `Continue with default keymap`, allez sur `select` avec la touche `tabulation`{.action} et appuyez sur la touche `entrée`{.action}.,

![pfsense Installation 03](images/03-install-pfsense03.png){.thumbnail}

Laissez `Auto (ZFS)` allez sur `OK` avec la touche `tabulation`{.action} et tapez sur la touche `entrée`{.action}.

![pfsense Installation 04](images/03-install-pfsense04.png){.thumbnail}

Positionnez-vous sur `Select` avec la touche `tabulation`{.action} et appuyez sur la touche `entrée`{.action}.

![pfsense Installation 05](images/03-install-pfsense05.png){.thumbnail}

Gardez `stripe`, positionnez-vous sur `OK` avec la touche `tabulation`{.action} et appuyez sur la touche `entrée`{.action}.

![pfsense Installation 06](images/03-install-pfsense06.png){.thumbnail}

Sélectionnez avec la barre `espace` NUTANIX VDISK ensuite allez sur `OK` avec la touche `tabulation`{.action} et appuyez sur la touche `entrée`{.action}.

![pfsense Installation 07](images/03-install-pfsense07.png){.thumbnail}

Allez sur `YES` avec la touche `tabulation`{.action} et appuyez sur la touche `entrée`{.action}.

![pfsense Installation 08](images/03-install-pfsense08.png){.thumbnail}

Choisissez `NO` avec la touche `tabulation`{.action} et appuyez sur la touche `entrée`{.action}.

![pfsense Installation 09](images/03-install-pfsense09.png){.thumbnail}

Laissez `Reboot` et appuyez sur la touche `entrée`{.action}.

![pfsense Installation 10](images/03-install-pfsense10.png){.thumbnail}

<a name="pfsenseremovecdrom-fr"></a>
#### Etape 3.7 Ejection du CDROM pfsense de la machine virtuelle **GW-PFSENSE**

Revenez dans la gestion des machines virtuelles dans **Prism Central** et arrêtez la machine virtuelle en cliquant sur `Soft Shutdown`{.action} dans le menu `More` de la machine virtuelle **GW-PFSENSE**.

![Remove CDROM 01](images/03-remove-cdrom01.png){.thumbnail}

Cliquez sur `Update`{.action}.

![Remove CDROM 02](images/03-remove-cdrom02.png){.thumbnail}

Cliquez sur `Next`{.action}.

![Remove CDROM 03](images/03-remove-cdrom03.png){.thumbnail}

Cliquez sur l'icone `Eject`{.action}. au niveau du CDROM.

![Remove CDROM 04](images/03-remove-cdrom04.png){.thumbnail}

Cliquez sur `Next`{.action}.

![Remove CDROM 05](images/03-remove-cdrom05.png){.thumbnail}

CLiquez sur `Next`{.action}.

![Remove CDROM 06](images/03-remove-cdrom06.png){.thumbnail}

CLiquez sur `Save`{.action}.

![Remove CDROM 07](images/03-remove-cdrom07.png){.thumbnail}

Cliquez sur `Power On`{.action} dans le menu `More`.

![Remove CDROM 08](images/03-remove-cdrom08.png){.thumbnail}

Cliquez sur `Launch Console`{.action} pour continuer l'installation après le démarrage. 

![Remove CDROM 09](images/03-remove-cdrom09.png){.thumbnail}

<a name="configureippfsense-fr"></a>
#### Etape 3.8 Configuration des adresses IP de pfsense au travers de la console

Nous allons configurer les adresses IP de passerelle **pfsense** comme ceci:

- Interface WAN : Voir cette partie du guide [Récupération de l'adresse publique sur l'espace client d'OVHcloud](#getipcustomerportal)

- Interface LAN: 192.168.10.254/24 qui correspond à la passerelle du réseau privé pour le cluster Nutanix et le masque de sous réseau 

Acceptez la licence en appuyant sur la touche `entrée`{.action}.

![Configure pfsense 01](images/04-configureip-pfsense01.png){.thumbnail}

Saisissez `n`{.action} et appuyez sur la touche `entrée`{.action} lorsque l'on demande si il faut des **VLAN**.

![Configure pfsense 02](images/04-configureip-pfsense02.png){.thumbnail}

Saisissez le nom de l'interface pour le **WAN** `vtnet0`{.action} et appuyez sur la touche `entrée`{.action}.

![Configure pfsense 03](images/04-configureip-pfsense03.png){.thumbnail}

Choisissez le nom de l'interface pour le **LAN** `vtnet1`{.action} et appuyez sur la touche `entrée`{.action}.

![Configure pfsense 04](images/04-configureip-pfsense04.png){.thumbnail}

Répondez `y`{.action} à la question si l'on veut valider les changements et appuyez sur la touche `entrée`{.action}.

![Configure pfsense 05](images/04-configureip-pfsense05.png){.thumbnail}

Saisissez `2` pour Choisir `Set interface(s) IP address` , ensuite appuyez sur la touche `entrée`{.action}.

![Configure pfsense 06](images/04-configureip-pfsense06.png){.thumbnail}

Sélectionnez l'interface **WAN** en saisissant `1` et appuyez sur la touche `entrée`{.action}.

![Configure pfsense 07](images/04-configureip-pfsense07.png){.thumbnail}

Saisissez `n`{.action} et appuyez sur la touche `entrée`{.action} à la demande de la configuration de l'adresse par DHCP.

![Configure pfsense 08](images/04-configureip-pfsense08.png){.thumbnail}

Saisissez l'`Adresse publique avec le masque`{.action} et appuyez sur la touche `entrée`{.action} comme par exemple **123.123.123.5/30**.

Ensuite saisissez l'`adresse de la passerelle publique`{.action} et appuyer sur la touche `entrée`{.action} comme par exemple **123.123.123.6**.

![Configure pfsense 09](images/04-configureip-pfsense09.png){.thumbnail}

Répondez `n`{.action} et appuyez sur la touche `entrée`{.action} lors de la configuration de l'**IPv6 address WAN**.

![Configure pfsense 10](images/04-configureip-pfsense10.png){.thumbnail}

A la demande **revert to HTTP as the webConfigurator protocol** Saisissez `n`{.action} et appuyez sur la touche `entrée`{.action}.

![Configure pfsense 11](images/04-configureip-pfsense11.png){.thumbnail}

Appuyez sur `entrée`{.action} pour valider l'enregistrement de l'adresse IP du **WAN**.

![Configure pfsense 12](images/04-configureip-pfsense12.png){.thumbnail}

Saisissez `2` et appuyez sur la touche `entrée`{.action} pour configurer les adresses IP.

![Configure pfsense 13](images/04-configureip-pfsense13.png){.thumbnail}

Prenez l'option `2` et appuyez sur la touche `entrée`{.action} pour modifier l'adresse IP du LAN.

![Configure pfsense 14](images/04-configureip-pfsense14.png){.thumbnail}

Saisissez l'adresse IP privée suivi du masque `192.168.10.254/24` et appuyez sur la touche `entrée`{.action}.

![Configure pfsense 15](images/04-configureip-pfsense15.png){.thumbnail}

Appuyez sur la touche `entrée`{.action} pour ne pas mettre de passerelle sur l'interface **LAN**

![Configure pfsense 16](images/04-configureip-pfsense16.png){.thumbnail}

Saisissez `n` et appuyez sur la touche `entrée`{.action} pour ne pas activer le serveur DHCP.

![Configure pfsense 17](images/04-configureip-pfsense17.png){.thumbnail}

Répondez `n` et appuyez sur la touche `entrée`{.action} à la demande **revert to HTTP as the webConfigurator protocol**.

![Configure pfsense 18](images/04-configureip-pfsense17.png){.thumbnail}

Il est maintenant possible d'administrer la passerelle en HTTPS sur le réseau privé.

Appuyez sur la touche `entrée`{.action} pour terminer la configuration en ligne de commande.

![Configure pfsense 19](images/04-configureip-pfsense19.png){.thumbnail}

<a name="configurepfsenseoptions-fr"></a>
#### Etape 3.9 Configuration de certaines options au travers de l'interface WEB

Connectez-vous sur la console WEB de pfsense avec cette URL https://192.168.10.254 à partir d'une machine virtuelle se trouvant sur le réseau local **AHV : Base**.

Saisissez ces informations :

* **Compte utilisateur** : admin
* **Default password** : pfsense

Et cliquez sur `SIGN IN`{.action}.

![WEB Configure pfsense 01](images/05-configure-pfsense01.png){.thumbnail}

Cliquez sur `Accept`{.action} pour accepter la licence.

![WEB Configure pfsense 02](images/05-configure-pfsense02.png){.thumbnail}

Cliquez sur `Close`{.action} aux remerciements.

![WEB Configure pfsense 03](images/05-configure-pfsense03.png){.thumbnail}

<a name="changepassword-fr"></a>
##### Etape 3.9.1 Changement du mot de passe par défaut de **pfsense**

Au travers du menu `System`{.action} choisissez `User Manager`{.action}

![Change Password 01](images/06-change-password01.png){.thumbnail}

Cliquez sur l'icône en forme de `Stylo`{.action}.

![Change Password 02](images/06-change-password02.png){.thumbnail}

Saisissez le mot de passe deux fois à coté de `Password` pour le confirmez ensuite faites défiler la `barre de défilement`{.action} jusqu'en bas de la fenêtre.

![Change Password 03](images/06-change-password03.png){.thumbnail}

Cliquez sur `Save`{.action} pour valider les changements.

![Change Password 03](images/06-change-password04.png){.thumbnail}.

<a name="addadminrule-fr"></a>
##### Etape 3.9.2 Ajout d'une règle pour autoriser l'administration à distance sur l'adresse publique au travers d'une autre adresse.

Allez dans le menu `Firewall`{.action} choisissez `Rules`{.action}.

![Autorisation admin from public ADDRESS](images/07-authorize-admin-from-publicaddress01.png){.thumbnail}

Vérifiez que vous êtes sur l'onglet `WAN` et cliquez sur le bouton `Add`{.action} en bas avec la flèche vers le haut pour créer une règle de pare-feu.

![Autorisation admin from public ADDRESS](images/07-authorize-admin-from-publicaddress02.png){.thumbnail}

Choisissez ces options dans **Edit Firewall Rule** :

* **Action** : `Pass`
* **Interface** : `WAN`
* **Address Family** : `IPv4`
* **Protocol** : `TCP`

Prenez dans **Source** `Single host or alias` et saisissez `l'adresse publique` autorisée à se connecter au pare-feu **pfsense**.

Cliquez sur la `barre de défilement`{.action} pour aller en bas de la fenêtre.

![Autorisation admin from public ADDRESS 03](images/07-authorize-admin-from-publicaddress03.png){.thumbnail}

Ajoutez ces options dans **Destination** :

* **Destination** : `WAN address`
* **Destination Port Range From** : `HTTPS`
* **Destination Port Range To** : `HTTPS`

Cliquez sur `Save`{.action}.

![Autorisation admin from public ADDRESS 04](images/07-authorize-admin-from-publicaddress04.png){.thumbnail}

Cliquez sur `Apply Change`{.action} pour activer la règle.

![Autorisation admin from public ADDRESS 05](images/07-authorize-admin-from-publicaddress05.png){.thumbnail}

L'interface d'administration de **pfsense** et accessible depuis internet sur le réseau autorisé avec cette url https://adressewan comme par exemple https://123.123.123.5.


<a name="configurevpnipsec"></a>
### Etape 4 Mise en place du VPN IPsec

Maintenant que les deux passerelles ont été remplacées nous allons interconnecter les deux sites au travers d'un VPN IPsec.

<a name="ipseccanada"></a>
#### Etape 4.1 Configuration du site au CANADA

<a name="paramipsectofrance"></a>
##### Etape 4.1.1 Mise en place du VPN IPsec vers la France

Connectez-vous sur depuis un réseau autorisé sur l'adresse publique du CANADA en HTTPS avec cette URL https://adressepublique-pfsense-canada. 

Allez dans le menu `VPN`{.action} et choisissez `IPsec`{.action}.

![Create VPN from CANADA 01](images/08-configure-vpn-from-canada01.png){.thumbnail}

Cliquez sur `Add P1`{.action} pour créer la phase 1 du VPN IPsec.

![Create VPN from CANADA 02](images/08-configure-vpn-from-canada02.png){.thumbnail}

Choisissez ces informations :

* **Description** : `VPN TO FRANCE`
* **Key Exchange version** : `IKEv2`
* **Internet Protocol** : `IPv4`
* **Interface**  : `WAN`
* **Remote Gateway** : `Adresse publique de la machine virtuelle **pfsense** se trouvant en FRANCE`

Ensuite faites défilez la fenêtre à l'aide de la `barre de défilement`{.action}.

![Create VPN from CANADA 03](images/08-configure-vpn-from-canada03.png){.thumbnail}

Cliquez sur `Generate new Pre-Shared Key`{.action} pour générer une clé pré-partagée dans `Pre-Share Key`

> [!primary]
> 
> Notez ou copiez la clé, elle servira pour la configuration du VPN sur la passerelle en FRANCE.
> 
> conserver les informations contenues dans `Encryption Algorithm`
>

Ensuite faites défiler la fenêtre à l'aide de la `barre de défilement`{.action}.

![Create VPN from CANADA 04](images/08-configure-vpn-from-canada04.png){.thumbnail}

Cliquez sur `Save`{.action}.

![Create VPN from CANADA 05](images/08-configure-vpn-from-canada05.png){.thumbnail}

Cliquez sur `Apply Changes`{.action}.

![Create VPN from CANADA 06](images/08-configure-vpn-from-canada06.png){.thumbnail}

Cliquez sur `Show Phase 2 Entries`{.action}.

![Create VPN from CANADA 07](images/08-configure-vpn-from-canada07.png){.thumbnail}

Cliquez sur `Add P2`{.action} pour ajouter la phase 2 du VPN IPsec.

![Create VPN from CANADA 08](images/08-configure-vpn-from-canada08.png){.thumbnail}

Effectuez la saisie de ces informations :

* **Description** : `TO LAN 192.168.0.0/24 FRANCE`
* **Local Network** : `LAN subnet`
* **Remote Network** : Type `Network`, Address `192.168.0.0/24`

Faites défilez la fenêtre avec la `barre de défilement`{.action}.

![Create VPN from CANADA 09](images/08-configure-vpn-from-canada09.png){.thumbnail}

> [!primary]
> 
> Notez les paramètres de chiffrements et faites défilez la fenêtre à l'aide de la `barre de défilement`{.action}.
>

![Create VPN from CANADA 10](images/08-configure-vpn-from-canada10.png){.thumbnail}

Cliquez sur `Save`{.action}

![Create VPN from CANADA 11](images/08-configure-vpn-from-canada11.png){.thumbnail}

Cliquez sur `Apply Changes`{.action} pour finaliser la création du VPN IPsec coté CANADA

![Create VPN from CANADA 12](images/08-configure-vpn-from-canada12.png){.thumbnail}

<a name="addfwruletofrance"></a>
##### Etape 4.1.2 Ajout d'une règle de pare-feu pour autoriser le flux réseau au travers du VPN IPsec entre le CANADA et la FRANCE

Cliquez sur `Rules`{.action} dans le menu `Firewall`

![Create IPsec firewall rule CANADA 01](images/09-addipsecrule-from-canada01.png){.thumbnail}

Positionnez-vous sur l'onglet `IPsec`{.action} et cliquez en bas sur `Add`{.action} avec la flèche vers le haut.

![Create IPsec firewall rule CANADA 02](images/09-addipsecrule-from-canada02.png){.thumbnail}

Modifiez ces options :

* **Source** : `LAN net`
* **Destination** : `Network` et `192.168.0.0/24` 

Ensuite cliquez sur `Save`{.action}.

![Create IPsec firewall rule CANADA 03](images/09-addipsecrule-from-canada03.png){.thumbnail}

Cliquez à nouveau sur `Add`{.action} avec la flêche vers le haut pour rajouter une deuxième règle.

![Create IPsec firewall rule CANADA 04](images/09-addipsecrule-from-canada04.png){.thumbnail}

Modifiez ces options : 

* **Source** : `Network` et `192.168.0.0/24` 
* **Destination** : `LAN net`

Et cliquez sur `Save`{.action} 

![Create IPsec firewall rule CANADA 05](images/09-addipsecrule-from-canada05.png){.thumbnail}

Cliquez sur `Apply Changes`{.action}.

![Create IPsec firewall rule CANADA 06](images/09-addipsecrule-from-canada06.png){.thumbnail}

Le paramétrage sur la passerelle au CANADA est terminé.

<a name="ipsecfrance"></a>
#### Etape 4.2 Configuration du site en FRANCE

<a name="paramipsectocanada"></a>
##### Etape 4.2.1 Mise en place du VPN IPsec vers le CANADA

Connectez-vous sur l'adresse publique de la passerelle de la FRANCE en HTTPS comme ceci https://adressepublique-pfsense-france.

Allez dans le menu `VPN`{.action} et choisissez `IPsec`{.action}.

![Create VPN from FRANCE 01](images/10-configure-vpn-from-france01.png){.thumbnail}

Cliquez sur `Add P1`{.action} pour créer la phase 1 du VPN IPsec.

![Create VPN from FRANCE 02](images/10-configure-vpn-from-france02.png){.thumbnail}

Choisissez ces informations :

* **Description** : `VPN TO CANADA`
* **Key Exchange version** : `IKEv2`
* **Internet Protocol** : `IPv4`
* **Interface**  : `WAN`
* **Remote Gateway** : `Adresse publique de la machine virtuelle **pfsense** se trouvant au CANADA`

Ensuite faites défilez la fenêtre à l'aide de la `barre de défilement`{.action}.

![Create VPN from FRANCE 03](images/10-configure-vpn-from-france03.png){.thumbnail}

Collez dans **Pre-shared Key** la clé pré-partagée qui a été générée sur la passerelle se trouvant au CANADA.

Comparez et faites correspondre les paramètres dans `Encryption Algorithm` avec la passerelle du CANADA.

Ensuite faites défiler la fenêtre à l'aide de la `barre de défilement`{.action}.

![Create VPN from FRANCE 04](images/10-configure-vpn-from-france04.png){.thumbnail}

Cliquez sur `Save`{.action}.

![Create VPN from FRANCE 05](images/10-configure-vpn-from-france05.png){.thumbnail}

Cliquez sur `Apply Changes`{.action}.

![Create VPN from FRANCE 06](images/10-configure-vpn-from-france06.png){.thumbnail}

Cliquez sur `Show Phase 2 Entries`{.action}.

![Create VPN from FRANCE 07](images/10-configure-vpn-from-france07.png){.thumbnail}

Cliquez sur `Add P2`{.action} pour ajouter la phase 2 du VPN IPsec.

![Create VPN from FRANCE 08](images/10-configure-vpn-from-france08.png){.thumbnail}

Effectuez la saisie de ces informations :

* **Description** : `TO LAN 192.168.10.0/24 CANADA`
* **Local Network** : `LAN subnet`
* **Remote Network** : Type `Network`, Address `192.168.10.0/24`

Faites défilez la fenêtre avec la `barre de défilement`{.action}.

![Create VPN from FRANCE 09](images/10-configure-vpn-from-france09.png){.thumbnail}

Vérifiez les paramètres de chiffrements et faites en sorte qu'ils soient identiques avec la passerelle du CANADA ensuite faites défilez la fenêtre à l'aide de la `barre de défilement`{.action}.

![Create VPN from FRANCE 10](images/10-configure-vpn-from-france10.png){.thumbnail}

Cliquez sur `Save`{.action}.

![Create VPN from FRANCE 11](images/10-configure-vpn-from-france11.png){.thumbnail}

Cliquez sur `Apply Changes`{.action} pour finaliser la création du VPN IPsec.

![Create VPN from FRANCE 12](images/10-configure-vpn-from-france12.png){.thumbnail}

<a name="addruletocanada"></a>
##### Etape 4.2.2 Ajout d'une règle de pare-feu pour autoriser le flux réseau au travers du VPN IPsec entre le CANADA et la FRANCE

Cliquez sur `Rules`{.action} dans le menu `Firewall`.

![Create IPsec firewall rule FRANCE01](images/11-addipsecrule-from-france01.png){.thumbnail}

Positionnez-vous sur l'onglet `IPsec`{.action} et cliquez en bas sur `Add`{.action} avec la flêche vers le haut.

![Create IPsec firewall rule FRANCE02](images/11-addipsecrule-from-france02.png){.thumbnail}

Modifiez ces options :

* **Source** : `LAN net`
* **Destination** : `Network` et `192.168.10.0/24` 

Ensuite cliquez sur `Save`{.action}.

![Create IPsec firewall rule FRANCE03](images/11-addipsecrule-from-france03.png){.thumbnail}

Cliquez à nouveau sur `Add`{.action} avec la flèche vers le haut pour rajouter une deuxième règle.

![Create IPsec firewall rule FRANCE04](images/11-addipsecrule-from-france04.png){.thumbnail}

Modifiez ces options : 

* **Source** : `Network` avec ce réseau `192.168.10.0/24` qui correspond au réseau privé du CANADA
* **Destination** : `LAN net`

Et cliquez sur `Save`{.action}.

![Create IPsec firewall rule FRANCE05](images/11-addipsecrule-from-france05.png){.thumbnail}

Cliquez sur `Apply Changes`{.action}. 

![Create IPsec firewall rule FRANCE06](images/11-addipsecrule-from-france06.png){.thumbnail}

Le paramétrage du VPN est terminée sur les deux clusters, il est possible de mettre en place des réplications au travers du tunnel VPN sécurisé.



<a name="gofurther"></a>
## Aller plus loin


Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
