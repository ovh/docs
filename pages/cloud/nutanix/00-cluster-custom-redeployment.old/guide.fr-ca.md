---
title: Redéploiement personnalisé de votre Cluster
slug: cluster-custom-redeployment
excerpt: "Redéploiement personnalisé d'un Cluster Nutanix via l'API OVHcloud"
section: Premiers pas
order: 05
---

**Dernière mise à jour le 10/06/2022**

## Objectif

Découvrez comment reconditionner un Cluster avec des paramètres réseau personnalisés via l'API OVHcloud.

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Prérequis

- Disposer d'un Cluster Nutanix dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc)
- Être connecté sur la page des [API OVHcloud](https://ca.api.ovh.com/)

## Présentation de l'utilisation du réseau privé pour un Cluster Nutanix chez OVHcloud

Avant de redéployer un Cluster Nutanix, vous devez définir un réseau privé avec son masque de sous réseau comme ceci : `XX.XX.XX.XX/XX`.<br>
Vous devez ensuite choisir des adresses IP à l'intérieur de cette étendue.

La liste des adresses IP nécessaires varie en fonction du nombre de serveurs commandés (La solution proposée par OVHcloud va de 3 à 18 nœuds) et du mode de configuration de **Prism Central** (**Alone** ou **Scale**). 

Voici le détail des besoins :

- Entre 6 et 36 adresses IP pour les serveurs physiques (il faut deux adresses par serveur, une pour l'hyperviseur **AHV** et une autre pour la machine virtuelle **CVM**).
- Une adresse IP pour **Prism Element**.
- Une adresse IP pour l'adresse IP de **Prism Central**.
- 3 adresses IP optionnelles pour un déploiement de **Prism Central** en mode Scale avec 3 machines virtuelles.
- Une adresse IP pour la passerelle Internet.

> [!warning]
> Certaines adresses du plan IP sont réservées pour le **Load balancer**. Elles sont toujours sur le réseau `XX.XX.XX.128/27`, soit les adresses comprises entre `XX.XX.XX.129` et `XX.XX.XX.158` du réseau. Il ne faut pas les utiliser lors du redéploiement.
>

Voici deux exemples possibles de configuration d'un cluster Nutanix chez OVHcloud :

**Exemple 1 :** Reconfiguration d'un cluster avec 3 nœuds sur un plan IP en `192.168.10.0/24`.

- Serveur 1 : adresse VM **CVM** `192.168.10.1`, adresse IP hyperviseur **AHV** `192.168.10.21`.
- Serveur 2 : adresse VM **CVM** `192.168.10.2`, adresse IP hyperviseur **AHV** `192.168.10.22`.
- Serveur 3 : adresse VM **CVM** `192.168.10.3`, adresse IP hyperviseur **AHV** `192.168.10.23`.
- Adresse virtuelle de **Prism Element** : `192.168.10.111`.
- Adresse IP  **Prism Central** :`192.168.10.222`.
- Etendue réservée pour le load balancer : `192.168.10.128 à 192.168.10.159`.
- Passerelle : `192.168.10.254`.

**Exemple 2 :** Reconfiguration d'un cluster avec 4 nœuds en mode Scale pour **Prism Central** sur un plan IP en `172.16.0.0/16`.

- Serveur 1 : adresse VM **CVM** `172.16.0.1`, adresse IP hyperviseur **AHV** `172.16.0.21`.
- Serveur 2 : adresse VM **CVM** `172.16.0.2`, adresse IP hyperviseur **AHV** `172.16.0.22`.
- Serveur 3 : adresse VM **CVM** `172.16.0.3`, adresse IP hyperviseur **AHV** `172.16.0.23`.
- Serveur 4 : adresse VM **CVM** `172.16.0.4`, adresse IP hyperviseur **AHV** `172.16.0.24`.
- Adresse virtuelle de **Prism Element** : `172.16.0.111`.
- Adresse virtuelle de **Prism Central** : `172.16.0.222`.
- VM Prism Central : `172.16.0.223 à 172.16.0.225`.
- Le load balancer : `172.16.0.128 à 172.16.0.159`.
- Passerelle : `172.16.0.254`.

## En pratique

Nous allons redéployer un cluster de 3 nœuds comme dans l'exemple 1 du chapitre précèdent.

> [!warning]
> L'opération de redéploiement du Cluster est irréversible. Toutes les données du Cluster seront supprimées et un nouveau mot de passe du compte admin sera généré et envoyé par e-mail au titulaire du compte client OVHcloud.
>

Connectez-vous à l'[API OVHcloud](https://api.ovh.com). Pour plus de détails sur le fonctionnement de l'API OVHcloud, consultez notre guide [Premiers pas avec les API OVHcloud](https://docs.ovh.com/ca/fr/api/first-steps-with-ovh-api/.)

Utilisez l'appel API suivant :

> [!api]
>
> @api {put} /nutanix/{serviceName}
>

Saisissez ces données :

- **ServiceName :** `Nom FQDN de votre Cluster Nutanix`.
- **redeploycluster :**  `Cochez la case`.
- **gatewayCidr :** `l'adresse IP de la passerelle suivi du masque de sous réseau`.

Saisissez les informations suivantes en dessous de **nodes :**

- **ahvip :** `Adresse IP de l'hyperviseur du premier nœud`.
- **cvmip :** `Adresse IP de la CVM du second nœud`.

Cliquez ensuite sur le bouton `Plus`{.action}.

![Cluster Redeployment 03](images/01-cluster-redeployment03.png)

Rajoutez les informations du deuxième nœud :
 
- **ahvip :** `Adresse IP de l'hyperviseur du deuxième nœud`.
- **cvmip :** `Adresse IP de la CVM du deuxième nœud`.

Cliquez à nouveau sur le bouton `Plus`{.action}.

![Cluster Redeployment 04](images/01-cluster-redeployment04.png)

Ajoutez alors les informations du dernier nœud :

- **ahvip :** `Adresse IP de l'hyperviseur du dernier nœud`.
- **cvmip :** `Adresse IP de la CVM du dernier nœud`.

Ensuite faites défilez la fenêtre du navigateur avec la barre de défilement.

![Cluster Redeployment 04](images/01-cluster-redeployment05.png)

Dans la rubrique **Prism Central Configuration** cochez `Define property`{.action} et `Empty array`{.action}.<br>
Choisissez `alone` dans le menu déroulant **type**  et saisissez `L'adresse IP de Prism Central` dans le menu déroulant **vip** .

Saisissez ensuite :

- `L'adresse IP de Prism Element` dans le menu déroulant **prismElementVip**.
- Le `Numero du facteur de redondance` dans le menu déroulant **redondancyFactor**.
- Le `numéro de version du cluster` dans le menu déroulant **version**.

Cliquez sur `Execute`{.action} pour lancer le redéploiement du cluster.

![Cluster Redeployment 05](images/01-cluster-redeployment06.png)

> [!warning]
> Le redéploiement du Cluster dure deux heures au minimum. Patientez jusqu'à la réception d'un e-mail adressé au titulaire du compte OVHcloud **avant** d'utiliser à nouveau le Cluster.
>
> Le **Load Balancer** est reconfiguré lors du redéploiement et fait pointer l'adresse FQDN du Cluster sur l'adresse privée de **Prism Central**.
>

## Aller plus loin

[Utilisation de l'API OVHcloud](https://docs.ovh.com/ca/fr/api/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
