---
title: "Déterminer les actions à entreprendre à la suite du cycle de vie de l'offre Hosted Private Cloud powered by VMware"
slug: lifecycle
excerpt: Déterminer les actions à entreprendre, en fonction de ses caractéristiques
section: FAQ
order: 010
---

**Dernière mise à jour le 23/12/2022**

## Objectif

LL'objectif de ce guide est de rassembler les actions que vous pouvez avoir à mener dans le cadre de la gestion du cycle de vie des produits VMware hébergés chez OVHcloud. Les éléments déterminants ce cycle de vie peuvent être liés à nos opérations en datacentre, nos approvisonnements, la durée de vie des ressources physiques ou encore les versions des logiciels déployés.

Dans ce guide, nous détaillerons les actions à mener pour les sujets en cours
* Datacentre de Roubaix, Salle 29
* Datastore antérieur à 2020
* Host antérieur à 2018
* Version de vSphere antérieure à vCSA 7.0 (build 20845200)
* Version de NSX-v antérieure à 6.4.14

**Nulla condimentum rhoncus nisl eget efficitur. Quisque sit amet nisl id velit vestibulum tempus nec id purus. Cras venenatis lectus ligula, id laoreet nisi vulputate id.**

## Prérequis

- Posséder une offre [Hosted Private Cloud powered by VMware](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/){.external}.
- Être connecté à [l'espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Être connecté aux [API OVHCloud](https://api.ovh.com/console){.external}. si besoin en suivant le guide « [Premiers pas avec les API OVHcloud](https://docs.ovh.com/fr/api/first-steps-with-ovh-api/) ».
- Avoir [créé ses identifiants pour l'API OVHCloud](https://docs.ovh.com/fr/customer/first-steps-with-ovh-api/){.external}.

## En pratique



### Etape 1 - Récupération des informations de votre service Hosted Private Cloud

Connectez-vous aux APIv6 OVHcloud en suivant le guide « [Premiers pas avec les API OVHcloud](https://docs.ovh.com/fr/api/first-steps-with-ovh-api/) ».

Une fois identifié, suivez les quatres étapes décrites ci-dessous.

#### Etape 1.1 **Récupération de vos serviceName**

> [!api]
>
> @api {GET} /dedicatedCloud
>

Vous obtiendrez la liste de vos services, notez ces serviceName

#### Etape 1.2 **Récupération de vos datacenterId**

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter
>

Renseignez les champs de l'appel avec les informations suivantes :

**serviceName** : renseignez le serviceName obtenu à l'étape 1.1 <br>

Vous obtiendrez la liste de vos datacenterId, notez ces derniers

#### Etape 1.3 **Récupération de vos filerId*

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer
>

Renseignez les champs de l'appel avec les informations suivantes :

**serviceName** : renseignez le serviceName obtenu à l'étape 1.1 <br>
**datacenterId** : renseignez le datacenterId obtenu à l'étape 1.2 <br>

Vous obtiendrez la liste de vos filerId, notez ces derniers

#### Etape 1.4 **Récupération de vos hostId*

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host
>

Renseignez les champs de l'appel avec les informations suivantes :

**serviceName** : renseignez le serviceName obtenu à l'étape 1.1 <br>
**datacenterId** : renseignez le datacenterId obtenu à l'étape 1.2 <br>

Vous obtiendrez la liste de vos hostId, notez ces derniers



Vous devez maintenant avoir récupéré les informations suivantes :

- tous vos serviceName ;
- tous vos datacenterId ;
- tous vos hostId ;
- tous vos filerId ;




### Cycle de vie des datastores 

L'objectif de cette étape est de vérifier si certains de vos datastores nécessitent des actions liés au cycle de vie des environnements VMware hébergés chez OVHcloud

##### **Récupération de la localisation de vos datastore**

> [!api]
>
> @api {GET}  /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}/location
>

Renseignez les champs de l'appel avec les informations suivantes :

**serviceName** : renseignez le serviceName obtenu à l'étape 1.1 <br>
**datacenterId** : renseignez le datacenterId obtenu à l'étape 1.2 <br>
**filerId** : renseignez le filerId obtenu à l'étape 1.3 <br>

Si votre datastore est située en salle 29 de notre datacentre de Roubaix, alors il est nécéssaire de changer d'espace de stockage. En effet, cette salle ne réponds plus à nos critères de sécurité.

Commencez par ajouter de nouveaux datastores en suivant le guide « [Ajouter des espaces de stockage](https://docs.ovh.com/fr/private-cloud/additional-storage/) ».

Puis utilisez la fonctionalité Storage vMotion de VMware pour déplacer vos VMs vers vos nouveaux datastores. Vous pouvez consulter la documentation VMware « [Storage vMotion](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.vcenterhost.doc/GUID-A15EE2F6-AAF5-40DC-98B7-0DF72E166888.html) ».

Enfin supprimez vos anciens datastores en suivant le guide « [Supprimer un datastore](https://docs.ovh.com/fr/private-cloud/suppression-data-store/) ».

##### **Récupération de votre type de datastore**

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}
>

Renseignez les champs de l'appel avec les informations suivantes :

**serviceName** : renseignez le serviceName obtenu à l'étape 1.1 <br>
**datacenterId** : renseignez le datacenterId obtenu à l'étape 1.2 <br>
**filerId** : renseignez le filerId obtenu à l'étape 1.3 <br>

Si la réponse au champ fullprofile ne commence pas par "2020-", alors il est nécéssaire de passer aux nouvelles gammes de storage. Ces derniers en plus d'une meilleure qualité de service bénéficie de meilleures performances lié notamment à une technologie full-SSD.

Commencez par ajouter de nouveaux datastores en suivant le guide « [Ajouter des espaces de stockage](https://docs.ovh.com/fr/private-cloud/additional-storage/) ».

Puis utilisez la fonctionalité Storage vMotion de VMware pour déplacer vos VMs vers vos nouveaux datastores. Vous pouvez consulter la documentation VMware « [Storage vMotion](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.vcenterhost.doc/GUID-A15EE2F6-AAF5-40DC-98B7-0DF72E166888.html) ».

Enfin supprimez vos anciens datastores en suivant le guide « [Supprimer un datastore](https://docs.ovh.com/fr/private-cloud/suppression-data-store/) ».

### Cycle de vie des hosts 

L'objectif de cette étape est de vérifier si certains de vos hosts nécessitent des actions liés au cycle de vie des environnements VMware hébergés chez OVHcloud

##### **Récupération de votre type de datastore**

> [!api]
>
> @api {GET} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/filer/{filerId}
>

Renseignez les champs de l'appel avec les informations suivantes :

**serviceName** : renseignez le serviceName obtenu à l'étape 1.1 <br>
**datacenterId** : renseignez le datacenterId obtenu à l'étape 1.2 <br>
**hostId** : renseignez le hostId obtenu à l'étape 1.4 <br>

Si la réponse au champ profile indique "Dedicated Cloud", alors il est nécéssaire de passer aux nouvelles gammes. En effet ces hosts ne sont plus compatibles avec les dernières versions d'ESXi et donc ne peuvent plus être supportés par VMware ou OVHcloud

Pour réaliser votre migration, vous pouvez suivre ce guide « [Migrer vers une nouvelle infrastructure](https://docs.ovh.com/fr/private-cloud/vdc-migration/) ».

### Cycle de vie des composants software

#### Récupération des informations de votre PCC dans l'espace client OVHcloud

Connectez-vous à l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) avec un compte administrateur.

Cliquez sur l'onglet `Hosted Private Cloud`{.action}, sélectionnez votre service dans la liste `VMware`{.action}.

Dans l'onglet `Informations générales`{.action}, récupérez la version de votre vSphere.

![espace client - récupération de la version de vsphere](images/manager-version-vsphere.png){.thumbnail}

Si votre version de vSphere n'est pas vCSA 7.0 (build 20845200), veuillez créer un ticket afin de planifier votre update vers la dernière version

#### Récupération des informations de votre PCC dans vSphere

Rendez vous dans la vue `Mise en réseau` de votre client vSphere puis dans `Sécurité` et enfin cliquez sur l'onglet `Upgrade`.

Prenez note de la version de votre NSX-v.

![vSphere - récupération des données](images/vsphere-version-nsx-v.png){.thumbnail}

Si votre version de NSX-v n'est pas 6.4.14, veuillez créer un ticket afin de planifier votre update vers la dernière version

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.