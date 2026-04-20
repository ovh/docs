---
title: NTP configuration private gateway
excerpt: Découvrez comment utiliser le NTP de la Private Gateway sur une infrastructure Hosted Private Cloud
updated: 2026-04-20
---

## Objectif

La private gateway vous offre la possibilité d'utiliser un serveur NTP.

**Ce guide vous explique comment utiliser le NTP de la private gateway sur votre infrastructure Hosted Private Cloud.**

## Prérequis

* Posséder une offre [Hosted Private Cloud](https://www.ovh.com/fr/private-cloud/).
* Accéder à l’interface de gestion vSphere.
* Être connecté aux [API OVHCloud](/links/api).
* Avoir [créé ses identifiants pour l'API OVHCloud](/pages/manage_and_operate/api/first-steps).
* Avoir [activé la private gateway](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/private_gateway/).

## En pratique

### Architecture

* La private gateway n'a pas de route, donc seul l'utilisateur du même sous-réseau peut utiliser le serveur NTP. La connexion à partir d'un autre réseau doit être source-natté.
![NTP private gateway - Architecture](images/architecture.png){.thumbnail}

<a name="useNTP"></a>

### Utiliser le NTP de la private gateway

#### Récupérer l'IP de la private gateway:

Faire un call API pour récupérer les informations de la private gateway et récupérer la valeur de customerIp :

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/privateGateway
>
![NTP private gateway - Api call](images/apiGet.png){.thumbnail}

#### Installer chrony
Sur la vm concernée, lancer la commande suivante :

```shell
apt-get install chrony
```

#### Configurer chrony
Editer le fichier /etc/chrony.conf en ajoutant l'IP du serveur de la private gateway et enlever la configuration par défaut
![NTP private gateway - Configuration](images/configFile.png){.thumbnail}

#### Redémarrer chrony
Redémarrer le service chrony :
```shell
systemctl restart chrony
```

#### Vérifier le client
Vérifier que la vm se connecte bien au serveur :
```shell
chronyc sources
```
![NTP private gateway - Server Check](images/ntpServer.png){.thumbnail}

Vérifier que la synchronisation fonctionne:
```shell
chronyc tracking
```
![NTP private gateway - Synchronization check](images/ntpSynchro.png){.thumbnail}

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).
