---
title: Comment déployer une NSX Edge Gateway
slug: comment-deployer-une-nsx-edge-gateway
excerpt: Découvrez comment déployer une edge gateway NSX
legacy_guide_number: '7766362'
section: NSX
order: 02
---

**Dernière mise à jour le 18/11/2021**

## Objectif

La NSX Edge Services Gateway est une appliance VMware offrant des services tels que le pare-feu, NAT, DHCP, VPN, l'équilibrage de charge et la haute disponibilité.

**Ce guide explique comment procéder au déploiement de cette appliance**

## Prérequis

- Être contact administrateur du [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), pour recevoir des identifiants de connexion 
- Avoir un identifiant utilisateur actif avec les droits spécifiques pour NSX (créé dans le [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB))

## En pratique

Vous allez vous embarquer dans l'aventure du déploiement d'une appliance NSX.   
Nous vous guiderons étape par étape dans l'installation d'une Edge Services Gateway avec une connection interne à votre environnement et une autre pour communiquer avec l'extérieur.    

Tout d'abord, dans votre interface vSphere, allez dans the tableau de bord `Mise en réseau et sécurité`{.action}.

![Menu](images/fr01dash.png)

Sur la gauche de votre écran, cliquez sur `Dispositifs NSX Edge`{.action}.

![NSX](images/fr02nsx.png)

Cliquez sur `+ Ajouter`{.action} puis `Edge Services Gateway`{.action}.

![AddNSX](images/fr03add.png)

La fenêtre d'installation guidée apparait.   
Remplissez les détails de base. Seuls le nom est obligatoire. Les autres champs seront créés automatiquement ou ignorés en fonction de votre infrastucture.   
Quand vous êtes prêt, cliquez sure `Suivant`{.action}.    
*Laissez Déployer une VM de dispositif Edge cochée. Décocher l'option entraine la création des règles et paramètres mais tout sera inactif tant qu'une VM n'est pas déployée. Nous laissons la Haute Disponibilité de coté pour l'instant.*

![Basic](images/fr04basic.png)

La fenêtre des Paramètres suit.    
Le compte d'administration par défaut est rempli automatiquement. Vous pouvez le changer à votre convenance.    
Créez et confirmez un mot de passe conforme.    
*Génération automatique de règles ajoute les règles de Pare-Feu, NAT, et routage pour la surveillance des services.*    
L'option Accès SSH autorise un accès par console sur le port 22. Nous recommandons de la laisser désactivée par défaut et de ne l'activer que de manière temporaire quand c'est nécessaire.     
Mode FIPS impose le chiffrement et un niveau de sécurité conforme aux normes des Federal Information Processing Standards du gouvernement américain.     
Le niveau de journalisation peut être adapté a vos besoin.    
Cliquez sur `Suivant`{.action}

![Settings](images/fr05settings.png)

Au tour de la Configuration du déploiement.     
Selectionnez le centre de données cible (si vous n'avez qu'un seul centre de données dans vSphere, il n'y a pas d'autre choix possible), la taille du dispositif (la taille détermine la consommation de ressources et la puissance de calcul) puis appuyez sur le bouton `+`{.action}.

![Deployment](images/fr06deploy.png)

In the next window, select where the appliance will live within the chosen datacenter.    
Only Cluster/Resource Pool and Datastore are mandatory field.   
*vSphere will select the best suited places for the rest if you do not input data.*    
Click `Add`{.action}.

![add](images/fr07add.png)

Back in the Deployment Configuration window, click `Next`{.action}.

Things get more serious with the Configure Interfaces.    
Click on `+Add`{.action}

![Interfaces](images/fr08inter.png)

There are 2 types of interfaces:
- Uplink will communicate with the outside of your netword
- Internal will be confined to your network

Let's name an interface and choose Uplink.   
Click on the `pen symbol`{.action} to select how it will connect out.

![Outside](images/fr09out.png)

Typically, in the `Distributed Virtual Port Group`{.action} tab, the VM Network is the default outside access network.    
*If you customized your environment, select accordingly.*   
Click `OK`{.action}.

![Net](images/fr10standard.png)

Back in the Interface configuration window, add a primary IP and subnet prefix for the interface.    
Click `OK`{.action}.

![addIP](images/fr10standard02.png)

Add a second interface. This time it will be an Internal one.    
Click on the `pen symbol`{.action} again to select the network the interface will be part of.    
Also, add the primary IP and subnet prefix for the vNIC.

![Inside](images/fr11in.png)

Interfaces are ready. Review and click `Next`{.action}.

![Ready](images/fr12ready.png)

Configure the Default Gateway for external access.   
*This is not mandatory and can be disabled to be done later.*    
Click `Next`{.action}

![Gateway](images/fr13gw.png)

Enable or disable Firewall Default Policy and click `Next`{.action}.

![Firewall](images/fr14fw.png)

Review the configuration and hit that `Finish`{.action} button.

![Review](images/fr15review.png)

The Gateway will deploy. It will show a Busy and Installing status until done.    
*If the deployment fails, it will show you basic error message and link to the full logs in the Failed section.*

![Installing](images/fr16busy.png)

After some time, your appliance will show as Deployed.

![Final](images/fr17done.png)

Congratulations and welcome to the world of NSX!   
The journey is only starting.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
