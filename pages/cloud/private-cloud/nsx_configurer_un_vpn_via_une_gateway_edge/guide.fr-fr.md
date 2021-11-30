---
title: Configurer un VPN via une Gateway Edge
slug: configurer-un-vpn-via-une-gateway-edge
excerpt: Utiliser le service VPN de la NSX Edge Gateway pour interconnecter des sites distants
legacy_guide_number: '7766647'
section: NSX
order: 07
---

**Dernière mise à jour le 30/11/2021**

## Objectif

Le VPN crée un tunnel securisé pour connecter des clients ou sites distants au travers de réseaux publics.

**Ce guide explique les deux façons d'établir un VPN sur la NSX Edge Gateway**

## Prérequis

- Être contact administrateur du [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), pour recevoir des identifiants de connexion.
- Avoir un identifiant utilisateur actif avec les droits spécifiques pour NSX (créé dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr))
- Avoir déployer une [NSX Edge Services Gateway](https://docs.ovh.com/fr/private-cloud/comment-deployer-une-nsx-edge-gateway/)

## En pratique

### Accès à l'interface

Dans l'interface vSphere, allez dans le Tableau de bord `Mise en réseau et sécurité`{.action}.

![Menu](images/en01dash.png){.thumbnail}


Sur la gauche de votre écran, naviguez vers `Dispositifs NSX Edge`{.action} puis cliquez sur le dispositif à paramétrer.

![NSX](images/en02nsx.png){.thumbnail}


Dans l'onglet `VPN`{.action}, vous voyez deux types de VPN     
- VPN IPsec : le VPN Internet Protocol Security sécurise le trafic entre deux réseaux privés connectés à travers des réseaux publics par des passerelles IPsec appellées points de terminaisons. Tout matériel compatible peut être utilisé.
- VPN L2 : Dans le cadre de la NSX Edge Gateway, le VPN Layer 2 connecte des appliances NSX sur de multiples sites et sécurise la connection avec IPsec. 


### VPN IPsec

Dans la section `VPN IPsec`{.action}, cliquez sur `Modifier`{.action} la Configuration globale

![IPSEC](images/en03vpn.png){.thumbnail}


Créez la Clé pré-partagée qui sera utilisée par les points de terminaison.     
Si vous utilisez des certificats tiers, ils peuvent être ajoutés dans cette fenêtre.   
Cliquez `Enregistrer`{.action}.

![IPSEC](images/en04global.png){.thumbnail}


Cliquez pour `+ Ajouter`{.action} un Sites VPN IPsec

![IPSEC](images/en04bisadd.png){.thumbnail}


Nommez et activez le site.    
Sur la page `Point de terminaison`{.action}:
- ID local est l'IP publique ou le FQDN du VPN
- Point de terminaison local est l'adresse IP ou FQDN de la NSX Edge Gateway (généralement identique à l'ID local) 
- Sous-réseaux locaux sont les sous-réseaux partagés par le VPN
- ID homologue est l'IP publique ou FQDN du site distant
- Point de terminaison homologue à pour valeur par défaut "any" mais peut être changée pour une IP ou un FQDN. *Si vous conservez "any", assurez-vous que la clé pré-partagée globale est bien renseignée.*
- Sous-réseaux homologues sont les sous-réseaux utilisés sur le site distant

![IPSEC](images/en05newipsec.png){.thumbnail}


Sur la page `Configuration de tunnel`{.action}, entrez vos paramètres de chiffrement (y compris vos certificats) puis cliquez `Ajouter`{.action}

![IPSEC](images/en06ipsectunnel.png){.thumbnail}


Vous pouvez `Démarrer`{.action} le service VPN IPsec et `Publier`{.action} vos changements.

![IPSEC](images/en07ipsecstart.png){.thumbnail}


Le tunnel est fonctionnel et actif.


### VPN L2

Le VPN L2 utilise une architecture client-serveur.


#### Serveur

Dans l'onglet `VPN L2`{.action}, selectionnez le mode Serveur puis `Modifier`{.action} les Détails de la configuration globale.

![L2](images/en08l2.png){.thumbnail}


Entrez les paramètres du serveur:
- Adresse IP de l'écouteur est l'adresse IP publique de la NSX Edge Gateway
- Port de l'écouteur est 443 part défaut (standard https) mais peut être changé
- Choisissez l'Algorithme de chiffrement
- Utiliser le certificat généré par le système ou sélectionnez un tiers si vous en avez ajouté un      
Cliquez `OK`{.action} puis `Enregister`{.action}.

![L2](images/en09l2global.png){.thumbnail}


De retour dans l'onglet VPN L2 , cliquez `+ Ajouter`{.action} dans Détails de la configuration du site.      
Paramétrez le site homologue:
- Activez le site
- Nommez le
- Définnissez un  ID d'utilisateur et mot de passe qui serviront à l'authentification du tunnel VPN
- Interfaces étirées sont les interfaces internes qui communiquerons avec le site homologue. *ces interfaces doivent être en mode Trunk*      
Cliquez sur `Ajouter`{.action}.

![L2](images/en10l2peer.png){.thumbnail}


Vous pouvez `Démarrer`{.action} le service VPN L2 et `Publier`{.action} vos changements.

![L2](images/en11l2pub.png){.thumbnail}


Le serveur est fonctionnel et actif.


#### Client

Sur le NSX coté client, dans l'onglet `VPN L2`{.action}, selectionnez le mode Client puis `Modifier`{.action} les Détails de la configuration globale

![L2](images/en12l2client.png){.thumbnail}


Les paramètres dépendent de ceux du serveur:
- Adresse du serveur est l'IP publique du serveur
- Port du serveur est celui défini (443 par défaut)
- Algorithme de chiffrement doit être identique à celui du serveur
- Cette fois, les Interfaces étirées sont celles du côté client
- L'ID d'utilisateur et le mot de passe doivent aussi être identique à ceux du serveur   
Cliquez `Enregistrer`{.action}.

![L2](images/en13l2clientset.png){.thumbnail}


Vous pouvez `Démarrer`{.action} le service VPN L2 et `Publier`{.action} vos changements.

![L2](images/en14l2clientpub.png){.thumbnail}


Le côté client est paramétré et la communication inter-sites est fonctionnelle.


Bravo et merci.


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
