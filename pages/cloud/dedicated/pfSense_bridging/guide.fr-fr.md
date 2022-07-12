---
title : Tutoriel - Configurer le mode bridge sur pfSense
slug : pfSense-bridging
excerpt: 'Apprenez à configurer le mode bridge sur une machine virtuelle Pfsense'
section : Tutoriel
---

**Dernière mise à jour le 23/05/2022**

## Objectif

La mise en réseau en mode bridge peut être utilisée pour configurer votre machine virtuelle pfSense comme un pare-feu NAT pour d'autres machines virtuelles sur le même hôte. Elle peut même être utilisée comme un filtre supplémentaire pour un serveur web par exemple. Des étapes et configurations spécifiques sont nécessaires pour permettre au routeur pfSense de fonctionner sur notre réseau et ce tutoriel vous montrera comment effectuer une configuration NAT pfSense de base.

## Prérequis

- Avoir un serveur dédié avec un hyperviseur installé, par exemple [VMware ESXi](http://www.vmware.com/products/esxi-and-esx/overview.html){.external}, [Citrix Xenserver](https://www.citrix.com/products/citrix-hypervisor/){.external}, [Proxmox](https://www.proxmox.com/en/proxmox-ve){.external}, etc.
- Avoir au moins une adresse [IP fail-over](https://www.ovhcloud.com/fr/bare-metal/ip/) connectée au serveur 
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## Recommandations pour votre machine virtuelle pfSense

- Avoir un serveur dédié avec le [jeu d'instructions AES](https://en.wikipedia.org/wiki/AES_instruction_set){.external}
- 2 coeurs virtuels pour la machine virtuelle
- 2 Go (2048 Mo) de RAM pour la machine virtuelle
- Un hyperviseur avec accès console aux machines virtuelles

> [!warning]
> Ce tutoriel vous présente l’utilisation d’une ou de plusieurs solutions OVHcloud avec des outils externes et décrit les actions à réaliser dans un contexte précis. Veuillez noter que ces actions décrites ici doivent être adaptées à votre cas particulier.
>
Si vous rencontrez des difficultés lors de l'exécution de ces actions, merci de contacter un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) et/ou d'échanger avec notre communauté sur <https://community.ovh.com/>. OVHcloud ne peut pas vous fournir d’assistance technique à ce sujet.
>

## En pratique

### Premiers pas

Pour la configuration réseau des machines virtuelles pfSense, nous utiliserons les valeurs suivantes, qui doivent être remplacées par vos propres valeurs :

- FAILOVER_IP = L'adresse de votre IP fail-over
- Adresse MAC Virtuelle = L'adresse MAC créée dans votre espace client OVHcloud
- GATEWAY_IP = L'adresse de votre passerelle par défaut

#### Assigner une adresse MAC virtuelle

Dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), rendez-vous dans la section `Bare Metal Cloud`{.action} et ouvrez le menu `IP`{.action}.

Le menu déroulant `Service` vous permet de filtrer les IPs fail-over. 

![Ajouter une MAC virtuelle (1)](images/manageIPs.png){.thumbnail} 

Cliquez sur les `...`{.action} à côté de l'IP fail-over de votre choix puis sur `Ajouter une MAC virtuelle`{.action}.

![Ajouter une MAC virtuelle (1)](images/addvmac.png){.thumbnail}

Sélectionnez « ovh » dans la liste déroulante `Type`, tapez un nom dans le champ `Nom de la machine virtuelle` puis cliquez sur `Valider`{.action}.

![Ajouter une MAC virtuelle (2)](images/addvmac2.png){.thumbnail}

#### Déterminer l'adresse de la passerelle

Pour configurer vos machines virtuelles pour l'accès à Internet, vous devez connaître la passerelle de votre machine hôte, c’est-à-dire votre serveur dédié. L'adresse de la passerelle est constituée des trois premiers octets de l'adresse IP principale de votre serveur, le dernier octet étant de 254.

Par exemple, si l’adresse IP principale de votre serveur est :

- 123.456.789.012

Votre adresse de passerelle sera donc :

- 123.456.789.254

### Configurer pfSense

> [!primary]
>
En ce qui concerne les logiciels externes, veuillez noter que la procédure appropriée pour configurer vos services peut être sujette à changement. Nous vous recommandons de consulter les manuels et documentations des logiciels respectifs si vous rencontrez des difficultés.
> 

Lors de la mise en place de pfSense sur notre réseau, le point de départ habituel serait la console de pfSense.<br>
Comme notre réseau requiert que l'IP publique utilise un masque de sous-réseau plus une passerelle /32(255.255.255.255) en dehors du champ de l'IP publique, la console ne vous permettra pas de le faire. Pour arriver à cet objectif, vous devrez commencer par configurer le côté LAN.

#### L’hyperviseur 

Étant donné que pfSense, comme la plupart des routeurs, nécessite deux interfaces réseau pour séparer le réseau public du réseau privé, il sera nécessaire d'avoir deux interfaces bridge sur votre hyperviseur. Dans cette démonstration, nous utilisons Proxmox VE 6.

Dans cet exemple, nous avons deux interfaces `enp1s0` et `enp2s0` mais l'interface `enp1s0` est déjà « bridged » avec l'interface `vmbr0`. Il faudra donc faire une interface bridge supplémentaire `vmbr1` avec `enp2s0` :

![Nouveau pont 1](images/hypervisor-1_1.png){.thumbnail}

![Nouveau pont 2](images/hypervisor-1_2.png){.thumbnail}

Veuillez noter que si votre serveur ne dispose pas d'une seconde interface réseau, il n'est pas nécessaire de le relier à une interface.Le bridge fonctionnera bien mais pourra uniquement router en interne sur le serveur.<br>
L'utilisation d'une interface sur un réseau bridge vous permet de router vers d'autres machines virtuelles, serveurs dédiés, instances Public Cloud et même des infrastructures Hosted Private Cloud à l'aide du vRack. 

#### Création des machines virtuelles : pfSense

Nous allons commencer par la création de la machine virtuelle pfSense. 

- Sous l'onglet `OS`{.action}, choisissez : `Autre type OS`.
- Sous l'onglet `Hard Disk`{.action}, « Bus/Device » doit être : `VirtIO`.
- Sous l’onglet `Network`{.action}, « Bridge » doit être `vmbr0`.
- Toujours sous l'onglet `Network`{.action}, « Model » doit être : `VirtIO (paravirtualized)`

![Nouvelle vm 1](images/pfsense-vm-1.png){.thumbnail}

Si votre CPU dispose du jeu d’instructions AES, celui-ci doit être activé (depuis l'onglet `CPU`{.action})

![Nouvelle vm 2](images/pfsense-vm-2.png){.thumbnail}

Dans l'onglet `Network`{.action} de la création de la machine virtuelle, assurez-vous de renseigner `l'adresse MAC virtuelle` créée dans votre espace client.

![Nouvelle vm 3](images/pfsense-vm-3.png){.thumbnail}

Après la création de la machine virtuelle, vous devrez vous assurer qu'une seconde interface réseau est créée sur votre deuxième bridge :

![Nouvelle vm 3](images/pfsense-vm-4_1.png){.thumbnail}

![Nouvelle vm 4](images/pfsense-vm-4_2.png){.thumbnail}

#### Création des machines virtuelles : Bureau virtuel 

Étant donné que certains paramètres de pfSense sont accessibles à l'aide de son interface graphique Web, la méthode la plus simple est d'installer un bureau virtuel. 
Dans ce tutoriel, nous utilisons un ISO Ubuntu 20.04. Lors de la création du bureau virtuel, assurez-vous que l'interface bridge choisie est l'interface secondaire et non l'interface bridge vers votre réseau public.

![Nouvelle vm 5](images/desktop-vm-1.png){.thumbnail}

Nous allons démarrer le bureau virtuel avant de démarrer la machine virtuelle pfSense. Dans cet exemple, nous allons juste sélectionner `Try Ubuntu`{.action} pour commencer à travailler sur pfSense. Nous l'installerons plus tard.

![Nouvelle vm 6](images/desktop-vm-2.png){.thumbnail}

#### La console pfSense

Nous allons maintenant démarrer la machine virtuelle pfSense et procéder à l'installation du système d'exploitation.

![Configuration pfSense 1](images/pfsense-vm-5.png){.thumbnail}

Une fois l'installation du système d'exploitation terminée, pfSense demandera demandera en premier lieu de configurer les VLAN. Puisque pfSense est installé dans un hyperviseur, nous ne suggérons pas de le configurer sur la machine virtuelle. Si toutefois vous avez besoin de VLANs, configurez-les sur l'interface virtuelle au niveau de l'hyperviseur.

![Configuration pfSense 2](images/pfsense-vm-6.png){.thumbnail}

L'étape suivante consiste à choisir l'interface qui sera votre `WAN` et celle qui sera votre `LAN`. Nous pourrons voir laquelle sera le `WAN` en voyant qu'elle a `l'adresse MAC virtuelle` qui a été créée dans l'espace client OVHcloud.

![Configuration pfSense 3](images/pfsense-vm-7.png){.thumbnail}

![Configuration pfSense 4](images/pfsense-vm-8.png){.thumbnail}

Dans cet exemple, nous avons choisi `vtnet0` comme `WAN` et `vtnet1` comme `LAN`. Après cette étape, pfSense vous demandera si vous souhaitez poursuivre et confirmer quelle interface est `WAN` et `LAN.` Après validation, il configurera automatiquement `192.168.1.1` sur son interface `LAN`.

#### L'interface graphique utilisateur web pfSense

Maintenant qu’une IP privée est assignée à l’interface `LAN` de notre machine virtuelle pfSense, nous allons lancer une requête DHCP pour pouvoir accéder à l’interface graphique web pfSense.

Rendez-vous dans les Paramètres réseau sur la VM Ubuntu.

![desktop net enable 1](images/desktop-vm-3_1.png){.thumbnail}

Activons maintenant le réseau. S'il était déjà activé, il suffit de le désactiver puis de l'activer à nouveau.

![desktop net enable 2](images/desktop-vm-3_2.png){.thumbnail}

Ouvrez un navigateur web et entrez `192.168.1.1`{.action} dans l'URL. Vous obtiendrez un avertissement de sécurité sur l'interface mais vous n'avez pas à vous en préoccuper. Cliquez sur `Avancé` puis sur `Accepter et continuer`{.action}.

![desktop pfsense access 1](images/desktop-vm-4_1.png){.thumbnail}

![desktop pfsense access 1](images/desktop-vm-4_2.png){.thumbnail}

Par défaut, le nom d'utilisateur est `admin` et le mot de passe `pfsense`. Connectez-vous.

Nous allons maintenant passer en revue la configuration générale.<br>
Véillez à définir `SelectedType`{.action} sur `Static`, sous `Configure WAN Interface` (étape 4 sur 9).<br>
Tous les autres paramètres ne doivent pas être modifiés, à l'exception du DNS. Dans notre exemple, nous avons indiqué `213.186.33.99` car il s'agit de notre résolveur au sein de notre réseau.

![Configuration pfSense 3](images/pfsense-vm-9.png){.thumbnail}

A ce stade, la VM pfSense n'a pas d'IP publique. Cliquez sur l'icône de menu en haut à droite, puis sur `Interfaces`{.action} et sélectionnez `WAN`{.action}.

![Configuration pfSense 4](images/pfsense-vm-10_1.png){.thumbnail}

Assurez-vous que les paramètres correspondent à ceux affichés dans les captures d'écran ci-dessous et entrez votre `IP fail-over`. La `passerelle IPv4 Upstream` (en amont) sera configurée ultérieurement.

![Configuration de pfSense 5](images/pfsense-vm-10_2.png){.thumbnail}

![pfSense setup 6](images/pfsense-vm-10_3.png){.thumbnail}

Maintenant que nous avons une IP publique sur l'interface, nous allons nous assurer qu'elle sera correctement routée sur notre réseau. Cliquez sur l'icône de menu en haut à droite. Cliquez ensuite sur `Système`{.action} et sélectionnez `Routage`{.action}.

![pfSense setup 7](images/pfsense-vm-11_1.png){.thumbnail}

Assurez-vous que les paramètres correspondent à ceux affichés dans la capture d'écran ci-dessous, puis cliquez sur le bouton `Ajouter`{.action} pour créer votre passerelle.

![pfSense setup 8](images/pfsense-vm-11_2.png){.thumbnail}

![Configuration pfSense 9](images/pfsense-vm-11_3.png){.thumbnail}

Assurez-vous que les paramètres correspondent à ceux affichés dans les captures d'écran ci-dessous et entrez votre `IP de passerelle`. Veillez à bien ouvrir les paramètres avancés.

![Configuration pfSense 10](images/pfsense-vm-11_4.png){.thumbnail}

![Configuration pfSense 11](images/pfsense-vm-11_5.png){.thumbnail}

![Configuration de pfSense 12](images/pfsense-vm-11_6.png){.thumbnail}

![Configuration de pfSense 14](images/pfsense-vm-11_7.png){.thumbnail}

Maintenant que nous avons une passerelle en amont, nous allons devoir attribuer la passerelle à l'interface `WAN`. Cliquez à nouveau sur l'icône de menu en haut à droite, puis sur `Interfaces`{.action} et sélectionnez `WAN`{.action}. 

![Configuration de pfSense 14](images/pfsense-vm-10_1.png){.thumbnail}

![Configuration de pfSense 15](images/pfsense-vm-11_8.png){.thumbnail}

Étant donné que nous utilisons pfSense comme machine virtuelle et qu'il ne dispose pas de sa propre carte réseau dédiée, certaines modifications doivent être apportées. Cliquez sur l'icône de menu en haut à droite, puis sur `Système`{.action} et sélectionnez `Avancé`{.action}.

![pfSense optimization 1](images/pfsense-vm-trouble-1_1.png){.thumbnail}

Dans ce menu, sélectionnez l'onglet `Mise en réseau`{.action}. En bas de ce menu, assurez-vous que les paramètres correspondent à ceux affichés dans les captures d'écran ci-dessous.

![pfSense optimization 2](images/pfsense-vm-trouble-1_2.png){.thumbnail}

![pfSense optimization 3](images/pfsense-vm-trouble-1_3.png){.thumbnail}

La configuration est maintenant terminée ! Vous devriez voir que la navigation sur le web peut se faire exactement comme sur un bureau derrière un pare-feu NAT.

## Ressources externes

Dans le cadre de l'utilisation de Proxmox, afin de choisir les bonnes interfaces virtuelles, le bon type d’OS, etc, ce tutoriel suit les recommandations de Netgate.<br>
Si vous n'avez pas l'intention d'utiliser Proxmox, nous vous suggérons de consulter les documentations suivantes de Netgate à ce sujet :

[https://docs.netgate.com/pfsense/en/latest/recipes/virtualize-proxmox.html](https://docs.netgate.com/pfsense/en/latest/recipes/virtualize-proxmox-ve.html){.external}

[https://docs.netgate.com/pfsense/en/latest/recipes/virtualize-esxi.html#installing-pfsense-software-on-vsphere-6-x-using-vsphere-web-client](https://docs.netgate.com/pfsense/en/latest/recipes/virtualize-esxi.html#installing-pfsense-software-on-vsphere-6-x-using-vsphere-web-client){.external}

[https://docs.netgate.com/pfsense/en/latest/recipes/virtualize-hyper-v.html](https://docs.netgate.com/pfsense/en/latest/recipes/virtualize-hyper-v.html){.external}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
