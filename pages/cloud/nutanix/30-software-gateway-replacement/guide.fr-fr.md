---
title: Remplacement de l'OVHgateway
slug: software-gateway-replacement
excerpt: "Remplace de l'OVHgateway par un autre machine virtuelle administrable"
section: "Plan de Reprise d'Activité"
order: 02
---

**Dernière mise à jour le 25/11/2022**

## Objectif

Ce guide vous présente comment remplacer la passerelles OVHgateway qui ne permet qu'un accès Internet par une autre passerelle de votre choix et qui vous permettra de faire du NAT.

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Prérequis

- Disposer d'un clusters Nutanix fournis par OVHcloud.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Être connecté sur votre cluster via Prism Central.

## En pratique

Dans notre guide nous allons remplacer la machine virtuelle OVHgateway installéé lors du déploiement et qui ne permet qu'un accès Internet sortant par une machine virtuelle administrable sur laquelle il sera possible de faire du NAT, de rajouter un connexion Internet sur des VLAN supplémentaire et de permettre des accès VPN divers.

Nous allons utiliser une machine virtuelle sour pfsense mais vous pouvez vous appuyer sur ce guide pour d'autres systèmes administrables et qui s'installent sur Nutanix.




 
<a name="downloadsources"></a>
### Téléchargement des sources pour l'installation de pfSense

Téléchargez l'image ISO de l'installation de **pfSense** à partir de ce lien : [Téléchargement de pfSense](https://www.pfsense.org/download/){.external}.

A l'aide de [cette documentation](https://docs.ovh.com/fr/nutanix/image-import/), ajoutez l'image **ISO pfSense** dans votre cluster Nutanix.

<a name="createvmpfsense"></a>
### Création de la machine virtuelle **GW-PFSENSE**

Créez une machine virtuelle avec ces paramètres :

- **Nom** : `GW-PFSENSE`
- **Stockage1** : `60 Go HDD` 
- **Stockage2** : `Un lecteur DVD connecté à l'image ISO de pfSense`
- **RAM** : `4 Go` 
- **CPU** : `2 vCPU`
- **Réseau** : `deux cartes réseau sur le réseau de AHV: **Base**`

Vous pouvez vous aider de [notre guide sur la gestion des machines virtuelles](https://docs.ovh.com/fr/nutanix/virtual-machine-management/) pour créer cette machine virtuelle.

![Create VM 01](images/00-createvm01.png){.thumbnail}

<a name="shutdownovhgateway"></a>
### Arrêt de la machine virtuelle **OVH-GATEWAY**

Pour éviter des doublons d'adresses IP sur le réseau, il faut arrêter la machine virtuelle **OVHgateway** avant de démarrer la nouvelle machine virtuelle sous **pfSense**.

Via **Prism Central**, cliquez en haut à gauche sur le `menu principal`{.action}.

![Arrêt OVHGateway 01](images/01-stop-ovhgateway01.png){.thumbnail}

Cliquez sur `VMs`{.action}.

![Arrêt OVHGateway 02](images/01-stop-ovhgateway02.png){.thumbnail}

Cliquez sur la machine virtuelle `OVHgateway`{.action}.

![Arrêt OVHGateway 03](images/01-stop-ovhgateway03.png){.thumbnail}

Depuis le menu `More` en haut, cliquez sur `Soft Shutdown`{.action}.

![Arrêt OVHGateway 04](images/01-stop-ovhgateway04.png){.thumbnail}

<a name="getpublicaddress"></a>
### Récupération de l'adresse publique sur l'espace client OVHcloud 

Récupérez les informations concernant les paramètres réseau de la passerelle OVHcloud.

Connectez-vous à [l'espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), sélectionnez votre cluster Nutanix et relevez l'information se trouvant dans le champ `IPFO`.

![Get IP Fail OVER](images/02-get-ipfailover.png){.thumbnail}

Ce que l'on nomme **IPFO** est une plage de 4 adresses. La première et la dernière sont réservées, la troisième se trouve sur un équipement OVHcloud et sert de passerelle **Internet**. La seule adresse IP utilisable est la seconde adresse de la plage. 

Lors de l'installation, nous allons réutiliser ces informations pour les affecter à la nouvelle machine virtuelle **GW-PFSENSE**

```console
XX.XX.XX.N      Adresse de réseau réservée qui apparait sur le site client OVHcloud
XX.XX.XX.N+1    Adresse IP qui doit être affectée à l'interface WAN de la machine virtuelle GW-PFSENSE
XX.XX.XX.N+2    Adresse à utiliser en tant que passerelle sur l'interface WAN de la machine virtuelle GW-PFSENSE
XX.XX.XX.N+3    Adresse IP de broadcast réservée
```

Par exemple, si l'adresse **IPFO** affichée sur le site client est 123.123.123.4/30, il faut utiliser :

- **123.123.123.5** pour l'adresse de l'interface **WAN** ;
- **123.123.123.6** pour la passerelle sur l'interface **WAN**.

<a name="poweronvmpfsense"></a>
#### Etape 2.5 Démarrage de la machine virtuelle **GW-PFSENSE**

Revenez dans la gestion des machines virtuelles sur **Prism Central** et cliquez sur `GW-PFSENSE`{.action}.

![Start GATEWAY pfsense](images/02-start-gatewaypfsense01.png){.thumbnail}

Via le menu `More`, cliquez sur `Power On`{.action}.

![Start GATEWAY pfsense](images/02-start-gatewaypfsense02.png){.thumbnail}

Cliquez sur `Launch console`{.action}.

![Start GATEWAY pfsense](images/02-start-gatewaypfsense03.png){.thumbnail}

<a name="pfsenseinstall"></a>
### Installation de **pfsense**

Prenez connaissance des informations liées à la licence pfSense et appuyez sur la touche `Entrée`{.action} pour les accepter.

![pfsense Installation 01](images/03-install-pfsense01.png){.thumbnail}

Choisissez `Install`, positionnez-vous sur `OK` avec la touche `Tabulation`{.action} et appuyez sur la touche `Entrée`{.action}.

![pfsense Installation 02](images/03-install-pfsense02.png){.thumbnail}

Sélectionnez `Continue with default keymap`, allez sur `Select` avec la touche `Tabulation`{.action} et appuyez sur la touche `Entrée`{.action}.

![pfsense Installation 03](images/03-install-pfsense03.png){.thumbnail}

Sélectionnez `Auto (ZFS)`, allez sur `OK` avec la touche `Tabulation`{.action} et tapez sur la touche `Entrée`{.action}.

![pfsense Installation 04](images/03-install-pfsense04.png){.thumbnail}

Positionnez-vous sur `Select` avec la touche `Tabulation`{.action} et appuyez sur la touche `Entrée`{.action}.

![pfsense Installation 05](images/03-install-pfsense05.png){.thumbnail}

Sélectionnez `Stripe`, positionnez-vous sur `OK` avec la touche `Tabulation`{.action} et appuyez sur la touche `Entrée`{.action}.

![pfsense Installation 06](images/03-install-pfsense06.png){.thumbnail}

Sélectionnez `NUTANIX VDISK` avec la barre `Espace`{.action}. Allez ensuite sur `OK` avec la touche `Tabulation`{.action} et appuyez sur la touche `Entrée`{.action}.

![pfsense Installation 07](images/03-install-pfsense07.png){.thumbnail}

Allez sur `YES` avec la touche `Tabulation`{.action} et appuyez sur la touche `Entrée`{.action}.

![pfsense Installation 08](images/03-install-pfsense08.png){.thumbnail}

Choisissez `NO` avec la touche `Tabulation`{.action} et appuyez sur la touche `Entrée`{.action}.

![pfsense Installation 09](images/03-install-pfsense09.png){.thumbnail}

Sélectionnez `Reboot` et appuyez sur la touche `Entrée`{.action}.

![pfsense Installation 10](images/03-install-pfsense10.png){.thumbnail}

<a name="pfsenseremovecdrom"></a>
### Ejection du CDROM pfSense de la machine virtuelle GW-PFSENSE

Depuis **Prism central**, revenez sur la gestion de la machine virtuelle **GW-PFSENSE** et effectuez les opérations suivantes pour éjecter le **CDROM**.

Cliquez sur `Soft Shutdown`{.action} via le menu `More` de la machine virtuelle **GW-PFSENSE** pour arrêter cette machine virtuelle.

![Remove CDROM 01](images/03-remove-cdrom01.png){.thumbnail}

Cliquez sur `Update`{.action}.

![Remove CDROM 02](images/03-remove-cdrom02.png){.thumbnail}

Cliquez sur `Next`{.action}.

![Remove CDROM 03](images/03-remove-cdrom03.png){.thumbnail}

Cliquez sur l'icone `Eject`{.action} au niveau du CDROM.

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
### Configuration des adresses IP de pfSense au travers de la console

Nous allons configurer les adresses IP de passerelle **pfSense** comme ceci :

- Interface WAN : Utilisez cette partie du guide « [Récupération de l'adresse publique sur l'espace client OVHcloud](#getpublicaddress) » pour affecter l'adresse IP et la passerelle sur cette interface.
- Interface LAN: 192.168.10.254/24 qui correspond à l'adresse de passerelle du réseau privé du cluster Nutanix suivi du masque de sous réseau. 

Acceptez la licence en appuyant sur la touche `Entrée`{.action}.

![Configure pfsense 01](images/04-configureip-pfsense01.png){.thumbnail}

Saisissez `n` et appuyez sur la touche `Entrée`{.action} lorsque l'on vous demande s'il faut des **VLAN**.

![Configure pfsense 02](images/04-configureip-pfsense02.png){.thumbnail}

Saisissez `vtnet0` comme nom d'interface pour le **WAN** et appuyez sur la touche `Entrée`{.action}.

![Configure pfsense 03](images/04-configureip-pfsense03.png){.thumbnail}

Saisissez `vtnet1` comme nom d'interface pour le **LAN**  et appuyez sur la touche `Entrée`{.action}.

![Configure pfsense 04](images/04-configureip-pfsense04.png){.thumbnail}

Validez les changements en saisissant `y` et appuyez sur la touche `Entrée`{.action}.

![Configure pfsense 05](images/04-configureip-pfsense05.png){.thumbnail}

Saisissez `2` pour choisir `Set interface(s) IP address` et appuyez sur la touche `Entrée`{.action}.

![Configure pfsense 06](images/04-configureip-pfsense06.png){.thumbnail}

Sélectionnez l'interface **WAN** en saisissant `1` et appuyez sur la touche `Entrée`{.action}.

![Configure pfsense 07](images/04-configureip-pfsense07.png){.thumbnail}

Saisissez `n` et appuyez sur la touche `Entrée`{.action} à la demande de la configuration de l'adresse par DHCP.

![Configure pfsense 08](images/04-configureip-pfsense08.png){.thumbnail}

Saisissez **l'adresse IP publique avec le masque** et appuyez sur la touche `Entrée`{.action}. Par exemple **123.123.123.5/30**.

Saisissez ensuite **l'adresse IP de la passerelle publique** et appuyez sur la touche `Entrée`{.action}. Par exemple **123.123.123.6**.

![Configure pfsense 09](images/04-configureip-pfsense09.png){.thumbnail}

Répondez `n` et appuyez sur la touche `Entrée`{.action} lorsque l'assistant vous propose la configuration de l'**IPv6 address WAN interface via DHCP6**.

![Configure pfsense 10](images/04-configureip-pfsense10.png){.thumbnail}

A la demande **revert to HTTP as the webConfigurator protocol**, saisissez `n` et appuyez sur la touche `Entrée`{.action}.

![Configure pfsense 11](images/04-configureip-pfsense11.png){.thumbnail}

Appuyez sur `Entrée`{.action} pour valider l'enregistrement de l'adresse IP du **WAN**.

![Configure pfsense 12](images/04-configureip-pfsense12.png){.thumbnail}

Saisissez `2` et appuyez sur la touche `Entrée`{.action} pour configurer les adresses IP.

![Configure pfsense 13](images/04-configureip-pfsense13.png){.thumbnail}

Prenez l'option `2` et appuyez sur la touche `Entrée`{.action} pour modifier l'adresse IP du LAN.

![Configure pfsense 14](images/04-configureip-pfsense14.png){.thumbnail}

Saisissez l'adresse IP privée suivie du masque `192.168.10.254/24` et appuyez sur la touche `Entrée`{.action}.

![Configure pfsense 15](images/04-configureip-pfsense15.png){.thumbnail}

Appuyez sur la touche `Entrée`{.action} pour ne pas mettre de passerelle sur l'interface **LAN**

![Configure pfsense 16](images/04-configureip-pfsense16.png){.thumbnail}

Appuyez sur la touche `Entrée`{.action} afin de désactiver l'usage d'IPv6.

![Configure pfsense 17](images/04-configureip-pfsense17.png){.thumbnail}

Saisissez `n` et appuyez sur la touche `Entrée`{.action} à la demande d'activation du serveur DHCP.

![Configure pfsense 18](images/04-configureip-pfsense18.png){.thumbnail}

Répondez `n` et appuyez sur la touche `Entrée`{.action} à la demande **revert to HTTP as the webConfigurator protocol**.

![Configure pfsense 19](images/04-configureip-pfsense19.png){.thumbnail}

Il est maintenant possible d'administrer la passerelle en HTTPS sur le réseau privé du cluster **Nutanix**.

Appuyez sur la touche `Entrée`{.action} pour terminer la configuration en ligne de commande.

![Configure pfsense 20](images/04-configureip-pfsense20.png){.thumbnail}

<a name="configurepfsenseoptions"></a>
### Configuration de certaines options au travers de l'interface WEB

Connectez-vous sur la console Web de pfSense avec cette URL `https://192.168.10.254` à partir d'une machine virtuelle du cluster se trouvant sur le réseau local **AHV : Base**.

Saisissez ces informations :

- **Compte utilisateur** : admin
- **Default password** : pfsense

Cliquez ensuite sur `SIGN IN`{.action}.

![WEB Configure pfsense 01](images/05-configure-pfsense01.png){.thumbnail}

<a name="changepassword"></a>
#### Changement du mot de passe par défaut de pfSense**

Dans le menu `System`{.action}, choisissez `User Manager`{.action}.

![Change Password 01](images/06-change-password01.png){.thumbnail}

Cliquez sur l'icône en forme de `Stylo`{.action}.

![Change Password 02](images/06-change-password02.png){.thumbnail}

Saisissez et confirmez le mot de passe  à droite de `Password`.

![Change Password 03](images/06-change-password03.png){.thumbnail}

Validez les changements en cliquant sur `Save`{.action} en bas du menu.

![Change Password 03](images/06-change-password04.png){.thumbnail}.

<a name="addadminrule"></a>
#### Ajout d'une règle pour autoriser l'administration à distance à partir d'une adresse publique**

Allez dans le menu `Firewall`{.action} et choisissez `Rules`{.action}.

![Authorisation admin from public ADDRESS](images/07-authorize-admin-from-publicaddress01.png){.thumbnail}

Vérifiez que vous êtes sur l'onglet `WAN` puis cliquez sur le bouton `Add`{.action} (en bas avec la flèche pointant vers le haut) pour créer une règle de pare-feu.

![Authorisation admin from public ADDRESS](images/07-authorize-admin-from-publicaddress02.png){.thumbnail}

Définissez ces options dans la partie **Edit Firewall Rule** :

- **Action** : `Pass`
- **Interface** : `WAN`
- **Address Family** : `IPv4`
- **Protocol** : `TCP`

Sélectionnez `Single host or alias` dans le mendu déroulant **Source**  et saisissez `l'adresse publique` autorisée à se connecter au pare-feu **pfSense**.

![Authorisation admin from public ADDRESS 03](images/07-authorize-admin-from-publicaddress03.png){.thumbnail}

Définissez ensuite ces options dans la partie **Destination** :

- **Destination** : `WAN address`
- **Destination Port Range From** : `HTTPS`
- **Destination Port Range To** : `HTTPS`

Cliquez sur `Save`{.action}.

![Authorisation admin from public ADDRESS 04](images/07-authorize-admin-from-publicaddress04.png){.thumbnail}

Cliquez sur `Apply Changes`{.action} pour activer la règle.

![Authorisation admin from public ADDRESS 05](images/07-authorize-admin-from-publicaddress05.png){.thumbnail}

L'interface d'administration de **pfSense** est alors accessible depuis Internet, uniquement à partir du réseau autorisé en HTTPS, ici `https://123.123.123.5` .


<a name="gofurther"></a>
## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
