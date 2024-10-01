---
title: "Cycle de vie du VMware on OVHcloud - Déterminer les actions à entreprendre"
excerpt: Découvrez les actions à mener sur votre offre VMware on OVHcloud, en fonction de ses caractéristiques
updated: 2022-12-27
---

## Objectif

L'objectif de ce guide est de rassembler les actions que vous pouvez avoir à mener dans le cadre de la gestion du cycle de vie des produits VMware hébergés chez OVHcloud. Les éléments déterminants de ce cycle de vie peuvent être liés à nos opérations en datacentre, nos approvisonnements, la durée de vie des ressources physiques ou encore les versions des logiciels déployés.

Dans ce guide, nous détaillons les actions à mener pour les sujets en cours :

- Datacentre de Roubaix, Salle 29
- Datastore antérieur à 2020
- Host antérieur à 2018
- Version de vSphere antérieure à vCSA 7.0 (build 20845200)
- Version de NSX-v antérieure à 6.4.14

**Découvrez les actions à mener sur votre offre VMware on OVHcloud, en fonction de ses caractéristiques.**

## Prérequis

- Posséder une offre [VMware on OVHcloud](https://www.ovhcloud.com/fr-ca/enterprise/products/hosted-private-cloud/){.external}.
- Être connecté à [l'espace client OVHcloud](/links/manager).
- Être connecté aux [API OVHCloud](https://api.ovh.com/){.external}. Au besoin, consultez le guide « [Premiers pas avec les API OVHcloud](/pages/manage_and_operate/api/first-steps) ».
- Avoir [créé ses identifiants pour l'API OVHCloud](/pages/manage_and_operate/api/first-steps){.external}.

## En pratique

### Etape 1 - Récupérer les informations de votre service Hosted Private Cloud

Connectez-vous aux APIv6 OVHcloud en suivant le guide « [Premiers pas avec les API OVHcloud](/pages/manage_and_operate/api/first-steps) ».

Une fois identifié, suivez les quatres étapes décrites ci-dessous.

#### Etape 1.1 - Récupérer vos serviceName

Exécutez l'appel suivant :

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud
>

Vous obtiendrez la liste de vos services, prenez note des **serviceName** obtenus.

#### Etape 1.2 - Récupérer vos datacenterId

Exécutez l'appel suivant :

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter
>

Renseignez les champs de l'appel avec les informations suivantes :

- **serviceName** : renseignez le serviceName obtenu à l'étape 1.1

Vous obtiendrez la liste de vos **datacenterId**, prenez note de ces derniers.

#### Etape 1.3 - Récupérer vos filerId

Exécutez l'appel suivant :

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer
>

Renseignez les champs de l'appel avec les informations suivantes :

- **serviceName** : renseignez le serviceName obtenu à l'étape 1.1
- **datacenterId** : renseignez le datacenterId obtenu à l'étape 1.2

Vous obtiendrez la liste de vos **filerId**, prenez note de ces derniers.

#### Etape 1.4 - Récupérer vos hostId

Exécutez l'appel suivant :

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host
>

Renseignez les champs de l'appel avec les informations suivantes :

- **serviceName** : renseignez le serviceName obtenu à l'étape 1.1
- **datacenterId** : renseignez le datacenterId obtenu à l'étape 1.2

Vous obtiendrez la liste de vos **hostId**, prenez note de ces derniers.

Vous devez maintenant avoir récupéré les informations suivantes :

- tous vos **serviceName** ;
- tous vos **datacenterId** ;
- tous vos **hostId** ;
- tous vos **filerId**.

### Cycle de vie des datastores 

L'objectif de cette étape est de vérifier si certains de vos datastores nécessitent des actions liées au cycle de vie des environnements VMware hébergés chez OVHcloud.

#### Récupérer la localisation de vos datastores

Exécutez l'appel suivant :

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/location
>

Renseignez les champs de l'appel avec les informations suivantes :

- **serviceName** : renseignez le serviceName obtenu à l'étape 1.1
- **datacenterId** : renseignez le datacenterId obtenu à l'étape 1.2
- **filerId** : renseignez le filerId obtenu à l'étape 1.3

Si votre datastore est située en salle 29 de notre datacentre de Roubaix, il est alors nécéssaire de changer d'espace de stockage. En effet, cette salle ne répond plus à nos critères de sécurité.

Commencez par ajouter de nouveaux datastores en suivant le guide « [Ajouter des espaces de stockage](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/how_to_add_storage) ».

Utilisez ensuite la fonctionalité *Storage vMotion* de VMware pour déplacer vos VMs vers vos nouveaux datastores. Vous pouvez consulter la documentation VMware « [Storage vMotion](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.vcenterhost.doc/GUID-A15EE2F6-AAF5-40DC-98B7-0DF72E166888.html) ».

Enfin, supprimez vos anciens datastores en suivant le guide « [Supprimer un datastore](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/delete_datastore) ».

#### Récupérer votre type de datastore

Exécutez l'appel suivant :

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}
>

Renseignez les champs de l'appel avec les informations suivantes :

- **serviceName** : renseignez le serviceName obtenu à l'étape 1.1
- **datacenterId** : renseignez le datacenterId obtenu à l'étape 1.2
- **filerId** : renseignez le filerId obtenu à l'étape 1.3

Si la réponse au champ **fullprofile** ne commence pas par `2020-`, il est alors nécéssaire de passer aux nouvelles gammes de stockage. Ces dernières, en plus d'une meilleure qualité de service, bénéficient de meilleures performances liées notamment à une technologie full-SSD.

Commencez par ajouter de nouveaux datastores en suivant le guide « [Ajouter des espaces de stockage](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/how_to_add_storage) ».

Utilisez ensuite la fonctionalité *Storage vMotion* de VMware pour déplacer vos VMs vers vos nouveaux datastores. Vous pouvez consulter la documentation VMware « [Storage vMotion](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.vcenterhost.doc/GUID-A15EE2F6-AAF5-40DC-98B7-0DF72E166888.html) ».

Enfin, supprimez vos anciens datastores en suivant le guide « [Supprimer un datastore](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/delete_datastore) ».

### Cycle de vie des hosts 

L'objectif de cette étape est de vérifier si certains de vos hosts nécessitent des actions liées au cycle de vie des environnements VMware hébergés chez OVHcloud.

#### Récupérer votre type de datastore

Exécutez l'appel suivant :

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}
>

Renseignez les champs de l'appel avec les informations suivantes :

- **serviceName** : renseignez le serviceName obtenu à l'étape 1.1
- **datacenterId** : renseignez le datacenterId obtenu à l'étape 1.2
- **hostId** : renseignez le hostId obtenu à l'étape 1.4

Si la réponse au champ **profile** est `Dedicated Cloud`, il est alors nécéssaire de passer aux nouvelles gammes. En effet, ces hosts ne sont plus compatibles avec les dernières versions d'ESXi et ne peuvent donc plus être supportés par VMware ou OVHcloud.

Pour réaliser votre migration, vous pouvez suivre ce guide : [Migrer vers une nouvelle infrastructure](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/service-migration-vdc).

### Cycle de vie des composants software

#### Récupérer les informations de votre PCC dans l'espace client OVHcloud

Connectez-vous à l'[espace client OVHcloud](/links/manager) avec un compte administrateur.

Cliquez sur l'onglet `Hosted Private Cloud`{.action} et sélectionnez votre service dans la liste `VMware`{.action}.

Dans l'onglet `Informations générales`{.action}, récupérez la version de votre vSphere.

![espace client - récupération de la version de vsphere](images/manager-version-vsphere.png){.thumbnail}

Si votre version de vSphere n'est pas vCSA 7.0 (build 20845200), veuillez créer un ticket afin de planifier une mise à jour vers la dernière version.

#### Récupérer les informations de votre PCC dans vSphere

Rendez vous dans la vue `Mise en réseau et sécurité`{.action} de votre client vSphere. Cliquez ensuite sur `Installation et mise à niveai`{.action} et enfin sur l'onglet `Mise à niveau`{.action}.

Prenez note de la version de votre NSX-v.

![vSphere - récupération des données](images/vsphere-version-nsx-v.png){.thumbnail}

Si votre version de NSX-v n'est pas 6.4.14, veuillez créer un ticket afin de planifier une mise à jour vers la dernière version.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
