---
title: Créer une relation d'approbation
slug: approval-ad
excerpt: Retrouvez ici comment autoriser des utilisateurs de votre Active Directory à joindre vos bureaux virtuels.
section: Tutoriels
---

**Dernière mise à jour le 20/11/2017**

## Objectif

Il est parfois utile que plusieurs utilisateurs de votre Active Directory puissent accéder à vos bureaux virtuels sur votre offre Cloud Desktop Infrastructure. Ce guide vous explique comment faire cela.

## Prérequis
- Avoir mis en place une [interconnexion au travers du vRack](https://docs.ovh.com/fr/cloud-desktop-infrastructure/interconnection-equipment/).

## En pratique

Voici les paramètres que nous allons utiliser dans ce guide. Pensez à les remplacer par vos propres paramètres :

- Domain AD OVH : *view1045.local*
- IP AD OVH : *172.16.0.6*
- Domaine AD Client : *customer.local*
- IP AD client : *10.209.0.25*
- IP interco routeur client : *192.168.169.251*
- Réseau client : *10.209.0.0/24*

### Étape 1 : créer un réseau

Si vous n'avez pas encore renseigné le réseau dans lequel se trouve votre Active Directory, il est nécessaire de le créer via l'[API d'OVH](https://www.api.ovh.com/){.external}.

Pour cela, rendez-vous dans la section `Customer Network`{.action} afin de créer le réseau :

> [!api]
>
> @api {POST} /horizonView/{serviceName}/customerNetwork
> 

![API Customer Network](images/approval1.png){.thumbnail}

Appuyez ensuite sur `Execute`{.action}.

Une tâche s'effectuera. Vous pourrez ensuite vous assurer avoir créé votre réseau privé en dressant la liste de ceux déjà existants.
Il vous faudra alors procéder via la méthode API suivante :

> [!api]
>
> @api {GET} /horizonView/{serviceName}/customerNetwork
> 

Vous obtenez alors une liste d'identifiants (ID). Afin de connaître les informations décrivant chaque réseau privé, utilisez l'appel API ci-dessous :

> [!api]
>
> @api {GET} /horizonView/{serviceName}/customerNetwork/{customerNetworkId}
> 

### Étape 2 : autoriser les flux sur votre pare-feu

Afin que l'autorisation fonctionne, il est nécessaire d'autoriser les flux sur les ports utilisés par l'Active Directory.

Nous allons donc autoriser les ports suivants vers celui-ci :

- UDP : 53, 88, 137:138, 389, 445, 3389, 49152:65535
- TCP : 53, 88, 135, 389, 445, 636, 3268, 3269, 49152:65535

Afin de connaître l'IP de l'Active Directory du Cloud Desktop Infrastructure, réalisez l'appel suivant sur l'API OVH :


> [!api]
>
> @api {GET} /horizonView/{serviceName}
> 

L'IP de l'Active Directory du Cloud Desktop Infrastructure se présente de cette façon : **activeDirectoryIp : xxx.xxx.xxx.xxx**.


### Étape 3 : faire transiter les flux jusqu'au réseau privé d'administration

Nous allons configurer la route qui nous permettra de faire transiter les flux jusqu'au réseau privé d'administration.

Afin de connaître le réseau privé d'administration, réalisez l'appel suivant sur l'API OVH :

> [!api]
>
> @api {GET} /horizonView/{serviceName}
> 

Le réseau privé se présente de cette façon : **adminPrivateNetwork: "xxx.xxx.xxx.xxx/xx"**.
Le next hop est également renseigné dans cet appel : **adminNetworkNextHop: "xxx.xxx.xxx.xxx"**.

S'il est nécessaire de créer une route via NSX, il est possible de le faire de cette façon :

![Création Route NSX](images/approval2.png){.thumbnail}

Dans notre cas, le réseau privé d'administration est le suivant : **172.16.0.0/24** et le next hop est **192.168.169.1**.


### Étape 4 : créer du Trust et ouvrir les flux

Une fois les flux ouverts, il est nécessaire de venir les ouvrir côté OVH.

Pour cela, rendez-vous dans notre API :

> [!api]
>
> @api {POST} /horizonView/{serviceName}/domainTrust
> 

Vous devez vous munir des informations suivantes :

- l'IP de votre Active Directory ;
- DNS 1 (optionnel) ;
- DNS 2 (optionnel) ;
- le domaine de votre Active Directory.


### Étape 5 : configurer l'Active Directory client

Afin de réaliser cette étape, il est nécessaire d'accomplir les actions suivantes :


#### Créer un "Conditional Forwarder"

Pour cela, il est nécessaire de connaître l'IP et le domaine de l'Active Directory OVH. Réalisez alors l'appel suivant sur l'API OVH :

> [!api]
>
> @api {GET} /horizonView/{serviceName}
> 

L'IP de l'Active Directory d'OVH se présente de cette façon : **activeDirectoryIp: "xxx.xxx.xxx.xxx"**.
Le nom de domaine de l'Active Directory d'OVH est : **adminDomain: "viewxxxx.local"**.

Une fois les informations récupérées, vous pouvez créer le `Conditional Forwarder`.

- Soit en ligne de commande :

```
add-DnsServerConditionalForwarderZone -name view1045.local -MasterServers 172.16.0.6
```

- Soit via l'interface :

* Ouvrez la console DNS ;
* faites un clic droit sur `Conditional Forwarder`{.action} ;
* cliquez sur `New Conditional Forwarder`{.action} ;
* saisissez le domaine de l'Active Directory d'OVH ;
* ajoutez l'IP de l'Active Directory d'OVH.

Le `Conditional Forwarder` est alors créé.

#### Créer le compte de domaine

Pour réaliser cette étape, il est nécessaire de générer un mot de passe **complexe** qu'il faudra ensuite renseigner lors de la création du Trust dans l'API.
Il est également nécessaire de nommer cet utilisateur **horizonUI**.

Afin de créer un compte de domaine, procédez de cette façon :

- En ligne de commande :

```
New-ADServiceAccount -Name horizonUI -AccountPassword (ConvertTo-SecureString - AsPlainText "p@ssw0rd" -Force) -Enabled $true -Path "CN=Managed Service Accounts,DC=CUSTOMER,DC=LOCAL" -RestrictToSingleComputer
```

On notera que **DC** correspond au domaine de votre Active Directory.

### Étape 6 : configurer le Trust sur votre Active Directory

Une fois l'appel API réalisé, une tâche va s'exécuter sur votre Cloud Desktop Infrastructure. Lorsqu'elle sera terminée, vous recevrez un e-mail vous confirmant que le Trust est configuré chez OVH.

Il vous restera à suivre les instructions de l'e-mail pour finaliser l'autorisation, ou suivre la procédure suivante :

- connectez-vous sur votre Active Directory ;
- ouvrez `Active Directory Domains and Trusts`{.action} ;
- sur votre domaine, dans notre exemple **customer.local**, cliquez droit et rendez-vous dans l'onglet `Trust`{.action} ;
- sélectionnez `New Trust`{.action} ;
- suivez le wizard.


![Wizard 1](images/approval3.png){.thumbnail}

- Entrez le domaine de l'Active Directory OVH.
- Choisir `Forest Trust`{.action}.
- Choisir `One-way : incoming`{.action}.


![Wizard 2](images/approval4.png){.thumbnail}

- Sélectionnez ensuite `This domain only`{.action}.
- Entrez la passphrase renseignée au moment de créer le domaine dans l'API.


![Wizard 3](images/approval5.png){.thumbnail}

- Confirmez les actions.

Le Trust est désormais créé.

### Étape 7 : créer une approbation dans l'API OVH

Afin de créer l'approbation sur l'Active Directory d'OVH, il vous faudra vous munir de ces informations :

- un mot de passe complexe destiné à être la passphrase du Trust ;
- le mot de passe complexe que vous avez utilisé lorsque vous avez crée le compte de service.

Renseignez ces informations dans l'API :

> [!api]
>
> @api {POST} /horizonView/{serviceName}/domainTrust/{domainTrustId}/createTrust
> 

Une tâche s'exécutera alors, vous recevrez un e-mail à la fin de celle-ci. L'approbation des Active Directory est créée.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.