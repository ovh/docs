---
title: Interconnexion IPSEC entre deux sites
slug: ipsec-interconnection
excerpt: "Mise en place d'un VPN IPSEC entre deux clusters Nutanix distants"
section: Plan de reprise d'activité
order: 02
hidden: true
---

**Dernière mise à jour le 21/06/2022**

## Objectif

Interconnecter deux clusters Nutanix Fournis par OVHcloud au travers d'un VPN IPSEC en remplaçant les machines virtuelles **OVGgateway** servant à d'accès INTERNET par une passerelle sous **PFSense**.

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Prérequis

- Disposer de plusieurs clusters Nutanix chez OVHcloud :
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Être connecté sur vos clusters via Prism Central.
- Avoir les deux clusters sur deux sites distants physiquement.
- Utiliser un plan IP différent par cluster.

## En pratique

Nous allons interconnecter deux clusters Nutanix l'un se trouvant au CANADA et l'autre en FRANCE.

Le cluster du CANADA est sur  le réseau privé en 192.168.10.0/24 et celui de la FRANCE sur le réseau privé en 192.168.0.0/24.

Nous allons remplacer la machine virtuelle **OVHgateway** par une machine virtuelle **GW-PFSENSE** sur chacun des clusters pour fournir l'accès INTERNET à chacun des clusters Nutanix et permettre l'établissement d'un tunnel IPSEC sécurisé entre ces deux clusters, ce qui permettra par la suite de faire des réplications inter-clusters.


### Configuration de la passerelle au CANADA

Voici les informations détaillées pour remplacer la passerelle par défaut **OVHgateway** par une passerelle sous **PFSense**. Nous allons le faire un site se trouvant au CANADA.

#### Téléchargement des sources pour l'installation de PFSENSE

Téléchargez l'image iso de l'installation de **Pfsense** sur ce lien [Téléchargement Pfsense](https://www.pfsense.org/download/).

Ensuite à l'aide de cette documentation [Importez des images ISO](https://docs.ovh.com/fr/nutanix/image-import/) importez l'image **ISO** **Pfsense** dans votre cluster NUTANIX.

#### Création de la machine virtuelle **gw-pfsense**

Créez une machine virtuelle avec ces paramètres :

- **Nom** : `gw-pfsense`
- **Stockage1** : `60 Go HDD` 
- **Stockage2** : `Un lecteur de DVD connecté à l'image ISO de PFSENSE`
- **RAM** : `4 Go` 
- **CPU** : `2 vCPU`
- **Réseau** : `deux cartes réseaux sur le réseau de AHV: **Base**`

Vous pouvez vous aider de ces informations sur ce lien [Gestion des machines virtuelles](https://docs.ovh.com/fr/nutanix/virtual-machine-management/) pour créer une machine virtuelle.

![Create VM 01](images/00-createvm01.png){.thumbnail}

#### Arrêt de la machine virtuelle **OVH-GATEWAY**

IL faut tout d'abord arrêter la machine virtuelle **OVHgateway** car nous allons réutiliser les adresses IP de cette machines et il ne faut pas avoir de doublons sur le réseau.

Au travers de **Prism Central** cliquez en haut à gauche sur le `menu principal`{.action}.

![Arrêt OVHGateway 01](images/01-stop-ovhgateway01.png){.thumbnail}

Cliquez sur `VMs`{.action}.

![Arrêt OVHGateway 02](images/01-stop-ovhgateway02.png){.thumbnail}

Cliquez sur la machine virtuelle `OVHgateway`{.action}.

![Arrêt OVHGateway 03](images/01-stop-ovhgateway03.png){.thumbnail}

A partir du menu `More` en haut, cliquez sur `Soft Shutdown`{.action}.

![Arrêt OVHGateway 04](images/01-stop-ovhgateway04.png){.thumbnail}

#### Récupération de l'adresse publique sur l'espace client d'OVHcloud

Avant de lancer l'installation de **PFSENSE** il faut récupérez les informations concernant les paramètres réseaux de la passerelle d'OVHcloud.

Connectez-vous sur l'espace client d'OVHcloud allez dans l'onglet `Hosted Private Cloud`{.action} cliquez sur votre cluster Nutanix et relevez l'adresse se trouvant dans `IPFO`.

![Get IP Fail OVER](images/02-get-ipfailover.png){.thumbnail}


l'adresse affichée est un pack de 4 adresses avec un masque à /30 ce qui donne la possibilité de n'avoir qu'un adresse réellement disponible qui est l'adresse du reseau +1 comme indiqué en dessous :  

```console
XX.XX.XX.N      Reserved: Network address
XX.XX.XX.N+1    First usable IP
XX.XX.XX.N+2    Reserved: Network gateway
XX.XX.XX.N+3    Reserved: Network broadcast
```

Par exemple si l'adresse affichée est 123.123.123.10 il faudra utiliser l'adresse 123.123.123.11 sur la machine virtuelle et 123.123.123.12 pour la passerelle sur l'interface WAN.

#### Démarrage de la machine virtuelle **GW-pfsense**

Revenez dans la gestion des machines virtuelles sur **Prism Central**, cliquez sur `GW-Pfsense`{.action}.

![Start GATEWAY PFSENSE ](images/02-start-gatewaypfsense01.png){.thumbnail}

Au travers du menu `More` cliquez sur `Power On`{.action}.

![Start GATEWAY PFSENSE ](images/02-start-gatewaypfsense02.png){.thumbnail}

Cliquez sur `Launch console`{.action}.

![Start GATEWAY PFSENSE ](images/02-start-gatewaypfsense03.png){.thumbnail}

#### Installation de **PFSENSE**

Positionnez-vous sur `Accept` avec la touche `Tabulation`{.action} et appuyez sur la touche `Entree`{.action}.

![PFSENSE Installation 01](images/03-install-pfsense01.png){.thumbnail}

Choisissez `Install` positionnez vous sur `OK` avec la touche `tabulation`{.action} et appuyez sur la touche `Entree`{.action}.

![PFSENSE Installation 02](images/03-install-pfsense02.png){.thumbnail}

Laissez `Continue with default keymap` positionnez vous sur `select` avec la touche `tabulation`{.action} et appuyez sur la touche `Entree`{.action}.,

![PFSENSE Installation 03](images/03-install-pfsense03.png){.thumbnail}

Laissez `Auto (ZFS)` allez sur `OK` avec la touche `tabulation`{.action} et tapez sur la touche `Entree`{.action}.

![PFSENSE Installation 04](images/03-install-pfsense04.png){.thumbnail}

Positionnez vous sur `Select` avec la touche `tabulation`{.action} et appuyez sur la touche `Entree`{.action}.

![PFSENSE Installation 05](images/03-install-pfsense05.png){.thumbnail}

Gardez `stripe` positionnez vous sur `OK` avec la touche `tabulation`{.action} et appuyez sur la touche `Entree`{.action}.

![PFSENSE Installation 06](images/03-install-pfsense06.png){.thumbnail}

Sélectionnez avec la barre `Espace` NUTANIX VDISK ensuite allez sur `OK` avec la touche `tabulation`{.action} et appuyez sur la touche `Entree`{.action}.

![PFSENSE Installation 07](images/03-install-pfsense07.png){.thumbnail}

Positionnez vous sur `YES` avec la touche `tabulation`{.action} et appuyez sur la touche `Entree`{.action}.

![PFSENSE Installation 08](images/03-install-pfsense08.png){.thumbnail}

Choisissez  `NO` avec la touche `tabulation`{.action} et appuyez sur la touche `Entree`{.action}.

![PFSENSE Installation 09](images/03-install-pfsense09.png ){.thumbnail}

Laissez  `Reboot` avec la touche `tabulation`{.action} et appuyez sur la touche `Entree`{.action}.

![PFSENSE Installation 10](images/03-install-pfsense10.png ){.thumbnail}

#### Ejection du CDROM PFSENSE de la machine virtuelle **GW-PFSENSE**

Revenez dans la gestion des machines virtuelles dans **Prism Central** et arrêtez la machine virtuelle en cliquant sur `Soft Shutdown`{.action} dans le menu `More` de la machine virtuelle **GW-PFSENSE**.

![Remove CDROM 01](images/03-remove-cdrom01.png ){.thumbnail}

Cliquez sur `Update`{.action}.

![Remove CDROM 02](images/03-remove-cdrom02.png ){.thumbnail}

Cliquez sur `Next`{.action}.

![Remove CDROM 03](images/03-remove-cdrom03.png ){.thumbnail}

Cliquez sur l'icone `Eject`{.action}. au niveau du CDROM.

![Remove CDROM 04](images/03-remove-cdrom04.png ){.thumbnail}

Cliquez sur `Next`{.action}.

![Remove CDROM 05](images/03-remove-cdrom05.png ){.thumbnail}

CLiquez sur `Next`{.action}.

![Remove CDROM 06](images/03-remove-cdrom06.png ){.thumbnail}

CLiquez sur `Save`{.action}.

![Remove CDROM 07](images/03-remove-cdrom07.png ){.thumbnail}

Cliquez sur `Power On`{.action} dans le menu `More`.

![Remove CDROM 08](images/03-remove-cdrom08.png ){.thumbnail}

Cliquez sur `Launch Console`{.action} pour continuer l'installation après le démarrage. 

![Remove CDROM 09](images/03-remove-cdrom09.png ){.thumbnail}

#### Configuration des adresses IP de PFSENSE au travers de la console

Acceptez la licence en appuyant sur la touche `Entree`{.action}.

![Configure PFSENSE 01](images/04-configureip-pfsense01.png ){.thumbnail}

Saisissez `n`{.action} et appuyez sur la touche `Entree`{.action} lorsque l'on demande si il faut des VLAN.

![Configure PFSENSE 02](images/04-configureip-pfsense02.png ){.thumbnail}

Saisissez le nom de l'interface pour le wan `vtnet0`{.action} et appuyez sur la touche `Entree`{.action}.

![Configure PFSENSE 03](images/04-configureip-pfsense03.png ){.thumbnail}

Choisissez le nom de l'interface pour le wan `vtnet1`{.action} et appuyez sur la touche `Entree`{.action}.

![Configure PFSENSE 04](images/04-configureip-pfsense04.png ){.thumbnail}

Répondez `y`{.action} à la question si l'on veut valider les changement et appuyez sur la touche `Entree`{.action}.

![Configure PFSENSE 05](images/04-configureip-pfsense05.png ){.thumbnail}

Choisissez `Set interface(s) IP address` en saisissant `2` et en appuyant sur la touche `Entree`{.action}.

![Configure PFSENSE 06](images/04-configureip-pfsense06.png ){.thumbnail}

Sélectionnez l'interface **WAN** en saississant `1` et en appuyant sur la touche `Entree`{.action}.

![Configure PFSENSE 07](images/04-configureip-pfsense07.png ){.thumbnail}

Saisissez `n`{.action} et appuyez sur la touche `Entree`{.action} à la demande de la configuration de l'adresse par DHCP.

![Configure PFSENSE 08](images/04-configureip-pfsense08.png ){.thumbnail}

Saisissez la `première adresse`{.action} disponible de l'**IP FAILOVER** et appuyez sur `Entree`{.action} pour l'adresse publique.

Ensuite saisisez la `deuxième adresse`{.action} disponible de l'**IP FAILOVER** et appuyez sur `Entree`{.action} pour l'adresse de passerelle.

![Configure PFSENSE 09](images/04-configureip-pfsense09.png ){.thumbnail}

Repondez `n`{.action} et appuyez sur la touche `Entree`{.action} lors de la configuration de l'IPv6 address WAN.

![Configure PFSENSE 10](images/04-configureip-pfsense10.png ){.thumbnail}

A la demande **revert to HTTP as the webConfigurator protocol** Saisissez `n`{.action} et appuyez sur la touche `Entree`{.action}.

![Configure PFSENSE 11](images/04-configureip-pfsense11.png ){.thumbnail}

Appuyez sur `Entree`{.action} pour valider l'enregistrement de l'adresse IP du WAN.

![Configure PFSENSE 12](images/04-configureip-pfsense12.png ){.thumbnail}

Saisissez `2` et appuyez sur la touche `Entree`{.action} pour configurer les adresses IP.

![Configure PFSENSE 13](images/04-configureip-pfsense13.png ){.thumbnail}

Prenez l'option `2` et appuyez sur la touche `Entree`{.action} pour modifier l'adresse IP du LAN.

![Configure PFSENSE 14](images/04-configureip-pfsense14.png ){.thumbnail}

Saisissez l'adresse IP privée suivi du masque `192.168.10.254/24` et appuyez sur la touche `Entree`{.action}.

![Configure PFSENSE 15](images/04-configureip-pfsense15.png ){.thumbnail}

Appuyez sur la touche `Entree`{.action} sans avoir saisi de passerelle.

![Configure PFSENSE 16](images/04-configureip-pfsense16.png ){.thumbnail}

saisissez `n` et appuyez sur la touche `Entree`{.action} pour ne pas activer le serveur DHCP.

![Configure PFSENSE 17](images/04-configureip-pfsense17.png ){.thumbnail}

Repondez  `n` et appuyez sur la touche `Entree`{.action} à la demande **revert to HTTP as the webConfigurator protocol**.

![Configure PFSENSE 18](images/04-configureip-pfsense17.png ){.thumbnail}

Il est maintenant possible d'administrer la passerelle en HTTPS sur le réseau privé.

Appuyez sur la touche `Entree`{.action} pour terminer la configuration en ligne de commande.

![Configure PFSENSE 19](images/04-configureip-pfsense19.png ){.thumbnail}

#### Configuration de certaines options au travers de l'interface WEB

Connectez-vous sur la console WEB de pfsense avec cette URL https://192.168.10.254 à partir d'une machine virtuelle se trouvant sur le réseau local **AHV : Base**.

Saisissez ces informations:

* **Compte utilisateur** : admin
* **Default password** : pfsense

Et cliquez sur `SIGN IN`{.action}.

![WEB Configure PFSENSE 01](images/05-configure-pfsense01.png ){.thumbnail}

Cliquez sur `Accept`{.action} pour accepter la licence.

![WEB Configure PFSENSE 02](images/05-configure-pfsense02.png ){.thumbnail}

Cliquez sur `Close`{.action} aux remerciements.

![WEB Configure PFSENSE 03](images/05-configure-pfsense03.png ){.thumbnail}

##### Changement du mot de passe par défaut de **PFSENSE**

Au travers du menu `System`{.action} choisissez `User Manager`{.action}

![Change Password 01](images/06-change-password01.png ){.thumbnail}

Cliquez sur l'icone en forme de `Stylo`{.action}.

![Change Password 02](images/06-change-password02.png){.thumbnail}

Saisissez le mot de passe deux fois à coté de `Password` pour le confirmez ensuite faites défiler la barre de défilement jusqu'en bas de la fenêtre.

![Change Password 03](images/06-change-password03.png){.thumbnail}

Cliquez sur `Save`{.action} pour valider les changements.

![Change Password 03](images/06-change-password04.png){.thumbnail}.

##### Ajout d'une règle pour autoriser l'administration à distance sur le réseau public

Allez dans le menu `Firewall`{.action} choisissez `Rules`{.action}.

![Autorisation admin from public ADDRESS](images/07-authorize-admin-from-publicaddress01.png){.thumbnail}

Vérifiez que vous êtes sur l'onglet `Wan` et cliquez sur le bouton `Add`{.action} à gauche avec la flêche vers le haut pour créer une règle de parefeu.

![Autorisation admin from public ADDRESS](images/07-authorize-admin-from-publicaddress02.png){.thumbnail}

Choisissez ces options dans **Edit Firewall Rule**  :

* **Action** : `Pass`
* **Interface** : `WAN`
* **Address Family** : `IPv4`
* **Protocol** : `TCP`

Prenez comme **Source** `Single host or alias` et saisissez `l'adresse publique` autorisée à se connecter au pare-feu **Pfsense**.

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

### Configuration de la passerelle en France

L'installation de la passerelle en France est identique à l'installation faites au CANADA sauf pour les adresses privées et publiques qui doivent correspondre au réseau se trouvant en France. vous pouvez utiliser le chapitre précedent avec les bonnes informations pour configurer la passerelle **gw-pfsense** en FRANCE qui sont :

* **Réseau privé France** : 192.168.0.0/24 avec la passerelle en 192.168.0.254
* **Adresse publique** : L'adresse publique IP FAILOVER que l'on voit sur le site client D'OVHcloud.

### Mise en place du VPN IPSEC

Maintenant que les deux passerelles ont été remplacées nous allons interconnecter les deux sites au travers d'un VPN IPSEC.

#### Configuration du site au CANADA

##### Mise en place du VPN IPSEC vers la France

Connectez-vous sur l'adresse publique du CANADA en HTTPS avec cette URL https://adressepublique-pfsense-canada.

Allez dans le menu `VPN`{.action} et choisissez `IPSec`{.action}.

![Create VPN from CANADA 01](images/08-configure-vpn-from-canada01.png){.thumbnail}

Cliquez sur `Add P1`{.action} pour créer la phase 1 du VPN IPSEC.

![Create VPN from CANADA 02](images/08-configure-vpn-from-canada02.png){.thumbnail}

Choisissez ces informations :

* **Description** : `VPN TO FRANCE`
* **Key Exchange version** : `IKEv2`
* **Internet Protocol** : `IPv4`
* **Interface**  : `WAN`
* **Remote Gateway** : `Adresse publique du PFSENSE distant en FRANCE`

Ensuite faites défilez la fenêtre à l'aide de la `barre de défilement`{.action}.

![Create VPN from CANADA 03](images/08-configure-vpn-from-canada03.png){.thumbnail}

Cliquez sur `Generate new Pre-Shared Key`{.action} pour générer une clé prépartagée dans `Pre-Share Key`

> [!primary]
> 
> Notez ou copiez la clé, elle servira pour la configuration du VPN sur la passerelle en FRANCE.

Notez les informations contenues dans `Encryption Algorithm`

Ensuite faites défiler la fenêtre à l'aide de la `barre de défilement`{.action}.

![Create VPN from CANADA 04](images/08-configure-vpn-from-canada04.png){.thumbnail}

Cliquez sur `Save`{.action}.

![Create VPN from CANADA 05](images/08-configure-vpn-from-canada05.png){.thumbnail}

Cliquez sur `Apply Changes`{.action}.

![Create VPN from CANADA 06](images/08-configure-vpn-from-canada06.png){.thumbnail}

Cliquez sur `Show Phase 2 Entries`{.action}.

![Create VPN from CANADA 07](images/08-configure-vpn-from-canada07.png){.thumbnail}

Cliquez sur `Add P2`{.action} pour ajouter la phase 2 du VPN IPSEC.

![Create VPN from CANADA 08](images/08-configure-vpn-from-canada08.png){.thumbnail}

Effectuez la saisie de ces informations :

* **Description** : `TO LAN 192.168.0.0/24 FRANCE`
* **Local Network** : `LAN subnet`
* **Remote Network** : Type `Network`, Address `192.168.0.0/24`

Faites défilez la fenêtre avec la `barre de défilement`{.action}.

![Create VPN from CANADA 09](images/08-configure-vpn-from-canada09.png){.thumbnail}

Notez les paramètres de chiffrements et faites defilez la fenêtre à l'aide de la `barre de défilement`{.action}.

![Create VPN from CANADA 10](images/08-configure-vpn-from-canada10.png){.thumbnail}

Cliquez sur `Save`{.action}

![Create VPN from CANADA 11](images/08-configure-vpn-from-canada11.png){.thumbnail}

Cliquez sur `Apply Changes`{.action} pour finaliser la création du VPN IPSEC coté CANADA

![Create VPN from CANADA 12](images/08-configure-vpn-from-canada12.png){.thumbnail}

##### Ajout d'un règle de parefeu pour autoriser le flux réseau au travers du VPN IPSEC entre le CANADA et la FRANCE

Choisisez Cliquez sur `Rules`{.action} dans le menu `Firewall`

![Create IPSEC firewall rule CANADA 01](images/09-addipsecrule-from-canada01.png){.thumbnail}

Positionnez vous sur l'onglet `IPsec`{.action} et cliquez en bas sur `Add`{.action} avec la flêche vers le haut.

![Create IPSEC firewall rule CANADA 02](images/09-addipsecrule-from-canada02.png){.thumbnail}

Modifiez ces options :

* **Source** : `LAN net`
* **Destination** : `Network` et `192.168.0.0/24` 

Ensuite cliquez sur `Save`{.action}.

![Create IPSEC firewall rule CANADA 03](images/09-addipsecrule-from-canada03.png){.thumbnail}

Cliquez à nouveau sur `Add`{.action} avec la flêche vers le haut pour rajouter une deuxième règle.

![Create IPSEC firewall rule CANADA 04](images/09-addipsecrule-from-canada04.png){.thumbnail}

Modifiez ces options : 

* **Source** : `Network` et `192.168.0.0/24` 
* **Destination** : `LAN net`

Et cliquez sur `Save`{.action} 

![Create IPSEC firewall rule CANADA 05](images/09-addipsecrule-from-canada05.png){.thumbnail}

Cliquez sur `Apply Changes`{.action}.

![Create IPSEC firewall rule CANADA 06](images/09-addipsecrule-from-canada06.png){.thumbnail}

Le paramétrage coté CANADA est terminé.


#### Configuration du site en FRANCE

##### Mise en place du VPN IPSEC vers le CANADA

Connectez-vous sur l'adresse publique de la passerelle de la FRANCE en HTTPS comme ceci https://adressepublique-pfsense-france.

Allez dans le menu `VPN`{.action} et choisissez `IPSec`{.action}.

![Create VPN from FRANCE 01](images/10-configure-vpn-from-france01.png){.thumbnail}

Cliquez sur `Add P1`{.action} pour créer la phase 1 du VPN IPSEC.

![Create VPN from FRANCE 02](images/10-configure-vpn-from-france02.png){.thumbnail}

Choisissez ces informations :

* **Description** : `VPN TO CANADA`
* **Key Exchange version** : `IKEv2`
* **Internet Protocol** : `IPv4`
* **Interface**  : `WAN`
* **Remote Gateway** : `Adresse publique du PFSENSE distant au CANADA`

Ensuite faites défilez la fênetre à l'aide de la `barre de défilement`{.action}.

![Create VPN from FRANCE 03](images/10-configure-vpn-from-france03.png){.thumbnail}

Collez dans **Pre-shared Key** la clé prépartagée qui a été générée sur la passerelle se trouvant au CANADA.

Comparez les paramètres dans `Encryption Algorithm` avec la passerelle du CANADA.

Ensuite faites défiler la fenêtre à l'aide de la `barre de défilement`{.action}.

![Create VPN from FRANCE 04](images/10-configure-vpn-from-france04.png){.thumbnail}

Cliquez sur `Save`{.action}.

![Create VPN from FRANCE 05](images/10-configure-vpn-from-france05.png){.thumbnail}

Cliquez sur `Apply Changes`{.action}.

![Create VPN from FRANCE 06](images/10-configure-vpn-from-france06.png){.thumbnail}

Cliquez sur `Show Phase 2 Entries`{.action}.

![Create VPN from FRANCE 07](images/10-configure-vpn-from-france07.png){.thumbnail}

Cliquez sur `Add P2`{.action} pour ajouter la phase 2 du VPN IPSEC.

![Create VPN from FRANCE 08](images/10-configure-vpn-from-france08.png){.thumbnail}

Effectuez la saisie de ces informations :

* **Description** : `TO LAN 192.168.10.0/24 CANADA`
* **Local Network** : `LAN subnet`
* **Remote Network** : Type `Network`, Address `192.168.10.0/24`

Faites défilez la fenêtre avec la `barre de défilement`{.action}.

![Create VPN from FRANCE 09](images/10-configure-vpn-from-france09.png){.thumbnail}

Vérifiez les paramètres de chiffrements avec la passerelle du CANADA et faites defilez la fenêtre à l'aide de la `barre de défilement`{.action}.

![Create VPN from FRANCE 10](images/10-configure-vpn-from-france10.png){.thumbnail}

Cliquez sur `Save`{.action}.

![Create VPN from FRANCE 11](images/10-configure-vpn-from-france11.png){.thumbnail}

Cliquez sur `Apply Changes`{.action} pour finaliser la création du VPN IPSEC.

![Create VPN from FRANCE 12](images/10-configure-vpn-from-france12.png){.thumbnail}

##### Ajout d'un règle de parefeu pour autoriser le flux réseau au travers du VPN IPSEC entre le CANADA et la FRANCE

Cliquez sur `Rules`{.action} dans le menu `Firewall`.

![Create IPSEC firewall rule FRANCE01](images/11-addipsecrule-from-france01.png){.thumbnail}

Positionnez vous sur l'onglet `IPsec`{.action} et cliquez en bas sur `Add`{.action} avec la flêche vers le haut.

![Create IPSEC firewall rule FRANCE02](images/11-addipsecrule-from-france02.png){.thumbnail}

Modifiez ces options :

* **Source** : `LAN net`
* **Destination** : `Network` et `192.168.10.0/24` 

Ensuite cliquez sur `Save`{.action}.

![Create IPSEC firewall rule FRANCE03](images/11-addipsecrule-from-france03.png){.thumbnail}

Cliquez à nouveau sur `Add`{.action} avec la flêche vers le haut. pour rajouter une deuxième règle.

![Create IPSEC firewall rule FRANCE04](images/11-addipsecrule-from-france04.png){.thumbnail}

Modifiez ces options : 

* **Source** : `Network` avec ce réseau `192.168.10.0/24` qui correspond au réseau privé du CANADA
* **Destination** : `LAN net`

Et cliquez sur `Save`{.action}.

![Create IPSEC firewall rule FRANCE05](images/11-addipsecrule-from-france05.png){.thumbnail}

Cliquez sur `Apply Changes`{.action}. 

![Create IPSEC firewall rule FRANCE06](images/11-addipsecrule-from-france06.png){.thumbnail}

Le paramétrage du VPN est terminée sur les deux clusters, il est maintenant possible de communiquer entre les deux sites pour mettre en place des réplications.


## Aller plus loin




Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
