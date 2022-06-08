---
title: Redeploiment de votre Cluster
slug: nutanix-hci
excerpt: "Redeploiement du cluster Nutanix au travers de l'API d'OVHcloud"
section: Premiers pas
order: 03
---

**Dernière mise à jour le 31/05/2022**

## Objectif

Reconditionner un cluster avec des paramètres réseaux personnalisées au travers de l'API OVHcloud

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Prérequis

- Disposer d'un cluster Nutanix dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)


## Présentation des besoins techniques pour la reconfiguration d'un cluster.

Avant de reconfigurer un cluster il est necessaire de connaitre les besoins techniques pour la reconfiguration d'un cluster.

La liste des adresses IP necessaire varie en fonction du nombre de serveurs achetés et du choix de configuration de Prism Central (Mode alone ou mode Scale) voici le détail des besoins

- 2 adresses IP privés par serveur (OVHcloud propose une solution avec 18 serveurs ce qui fera au maximum 36 adresses IP privés)
- Une adresse IP privé pour l'adresse IP virtuelle de Prism ELEMENT.
- Une adresse IP pour l'adresse IP de Prism Central
- 3 adresses IP optionnelles pour un déploiement de Prism Central en mode scale avec 3 machines virtuelles
- Une adresse IP pour la passerelle
- Certaines adresses du plan IP choisie sont réservées pour le LOAD-BALANCER elle seront toujours avec le réseau XX.XX.XX.128 et un masque à 255.255.255.228. soit les adresses comprise en XX.XX.XX.129 & XX.XX.XX.158 du réseau choisi

**Exemple1 :**  Reconfiguration d'un cluster avec 3 noeuds sur un plan IP en 192.168.10.0/24

- Serveur1: adresse VM CVM1 : 192.168.10.1, adresse IP hyperviseur 192.168.10.21.
- Serveur2: adresse VM CVM2 : 192.168.10.2, adresse IP hyperviseur 192.168.10.22.
- Serveur3: adresse VM CVM3 : 192.168.10.3, adresse IP hyperviseur 192.168.10.23.
- Adresse virtuelle Prism Element : 192.168.10.111.
- Adresse virtuelle Prism Central : 192.168.10.222.
- réservé pour le load balancer 192.168.10.128 à 192.168.10.159.
- Passerelle 192.168.10.254

**Exemple2 :**  Reconfiguration d'un cluster avec 4 noeuds en mode Scale pour Prism Central sur un plan IP en 172.16.0.0/16

- Serveur1: adresse VM CVM1 : 172.16.10.1, adresse IP hyperviseur 172.16.10.21.
- Serveur2: adresse VM CVM2 : 172.16.10.2, adresse IP hyperviseur 172.16.10.22.
- Serveur3: adresse VM CVM3 : 172.16.10.3, adresse IP hyperviseur 172.16.10.23.
- Serveur4: adresse VM CVM4 : 172.16.10.4, adresse IP hyperviseur 172.16.10.24.
- Adresse virtuelle Prism Element : 172.16.10.111.
- Adresse virtuelle Prism Central : 172.16.10.222.
- VM Prism Central : 172.16.10.223 à 172.16.10.225
- Le load balancer 172.16.10.128 à 172.16.10.159.
- Passerelle 172.16.0.254

## Reconfiguration d'un cluster à l'aide de l'API d'OVHcloud

Se connecter à l'API d'OVHcloud au travers de l'interface WEB [API OVHcloud](https://api.ovh.com) avec votre compte client




https://api.ovh.com/console/#/nutanix/%7BserviceName%7D~PUT



## Aller plus loin



Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
