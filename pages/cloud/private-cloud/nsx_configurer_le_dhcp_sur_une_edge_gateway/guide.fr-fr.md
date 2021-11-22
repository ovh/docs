---
title: Configurer le DHCP sur une Edge NSX
slug: configurer-le-dhcp-sur-une-edge-nsx
excerpt: Découvrez comment attribuer des IPs à vo machines virtuelles à l'aide du service DHCP
section: NSX
order: 03
---

**Dernière mise à jour le 22/11/2021**

## Objectif

Le DHCP permet une attribution automatique d'IPs aux machines virtuelles résidantes derrière votre NSX Edge Services Gateway.

**Ce guide explique comment paramètrer le service DHCP**

## Prérequis

- Disposer d'un utilisateur ayant accès  à [l'interface de gestion NSX](https://docs.ovh.com/fr/private-cloud/acceder-a-l-interface-de-gestion-nsx/)

## En pratique

### Accès à l'interface

Dans l'interface vShere, allez dans le Tableau de bord `Mise en réseau et sécurité`{.action}.

![Menu](images/en01dash.png){.thumbnail}

Sur la gauche de votre écran, naviguez vers `Dispositifs NSX Edge`{.action} puis cliquez sur le dispositif à paramétrer.

![NSX](images/en02nsx.png){.thumbnail}

Dans la section `DHCP`{.action},  il y a 3 options:

- Pools
- Liaisons
- Relais

Nous allons paramétrer ces 3 services.    

Commençons par `Pools`{.action}.

![NSX](images/en03dhcpadd.png){.thumbnail}

### Menu Pools

Le menu `Pools`{.action} permet d'activer les fonctions traditionnelles du DHCP.    
Ajoutons un scope et démarrons le service.

Cliquez sur `+ Ajouter`{.action}    
Dans la fenêtre Nouveau DHCP Pool , remplissez les informations nécessaires :
- Adresse IP de début est la premère IP utilisable par le service DHCP
- Adresse IP de fin est la dernière IP utilisable par le service DHCP
- Nom de domaine est optionnel mais peut être utile pour votre dns
- Serveur de noms principal et secondaire sont vos paramètres dns personnalisés (vous pouvez activez la configuration automatique dns)
- Passerelle par défaut est également optionnelle
- Masque de sous-réseau
- Vous pouvez activer la non expiration des baux ou leur duréé si besoin.
- D'autres options avancées sont dans la section `Options DHCP`{.action} mais sont hors du cadre de ce guide

![Pool](images/en04pool.png){.thumbnail}

Cliquez sur `Ajouter`{.action}.    
Le pool DHCP est prêt mais vous devez appuyer sur `Démarrer`{.action} puis `Publier`{.action} pour lancer le service et enregistrer les changements.

![Pool](images/en05publish.png){.thumbnail}

Le DHCP est opérationel.     
Le status du service et les informations basiques sont visibles.

![Pool](images/en05started.png){.thumbnail}


### Menu Bindings

Now on the left side, click on `Bindings`{.action}.    
Bindings will always assign the same dhcp address to a specific network interface, depending on a specific information.    
Click on `+ Add`{.action} when ready.

![Bind](images/en06bind.png){.thumbnail}

There are 2 ways to create bindings:
- VM NIC Binding: the IP address will be set for a specific VM network interface
- MAC Binding: the IP address will be set for a specific MAC address

For VM NIC Binding, type in the information as follow

- Interface: Edge Services Gateway interface that will be distributing the address
- VM Name: VM that will receive the address
- VM vNIC Index: Which network adapter on the VM will be assigned the address
- Host Name: DNS name of the VM (optional)
- IP Address: Address reserved for the NIC
- Subnet Mask: Subnet mask
- Domain Name: Domain name (optional)
- Default Gateway: Default Gateway
- You can set never ending leases or mofify lease times if that's a requirement

![Bind](images/en07vnicbind.png){.thumbnail}

Don't forget your `DNS Settings`{.action}.    
They can be put manually or configured automatically.     
Click on `Save`{.action} when done.

![Bind](images/en08binddns.png){.thumbnail}

Now we'll click on `+ Add`{.action} again but will chose Use MAC Binding.

- MAC Address: Target NIC MAC address 
- Host Name: DNS name of the VM (optional)
- IP Address: Address reserved for the NIC
- Subnet Mask: Subnet mask
- Domain Name: Domain name (optional)
- Default Gateway: Default Gateway
- You can set never ending leases or mofify lease times if that's a requirement

![Bind](images/en09macbind.png){.thumbnail}

Again, do not forget your `DNS Settings`{.action}.    
Click on `Save`{.action} when done.

![Bind](images/en10autodns.png){.thumbnail}

We will now `Publish`{.action} our changes.

![Bind](images/en11publish.png){.thumbnail}

The DHCP Bindings and their basic settings are now visible.

![Bind](images/en12done.png){.thumbnail}


### Menu Relay

For our last option, click on `Relay`{.action}.   
*The set up of a DCHP relay implies the existence of routes to the target DHCP servers*    
We'll first create the Global Configuration by clicking `Edit`{.action}.    

![Relay](images/en13relay.png){.thumbnail}

You can add:
- pre existing IP sets set up in your NSX Edge Services Gateway
- IP adresses of DHCP servers
- Domain Names

Click `Save`{.action} when ready.

![Relay](images/en14relayset.png){.thumbnail}

Now click `+ Add`{.action} to set up an agent.     

![Relay](images/en15agentadd.png){.thumbnail}

The vNIC will be the Edge Services Gateway interface that will forward the dhcp requests.    
The Gateway Address is the adress that will forward the requests.    
Click `Add`{.action}.

![Relay](images/en16agent.png){.thumbnail}

We will then `Publish`{.action} the changes.

![Relay](images/en17publish.png){.thumbnail}

Your DHCP Relay is now functional after a short wait.

![Relay](images/en18done.png){.thumbnail}

Bravo et merci.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
