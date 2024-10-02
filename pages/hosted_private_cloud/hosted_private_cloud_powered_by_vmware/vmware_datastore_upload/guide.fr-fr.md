---
title: "Téléverser des fichiers dans un datastore"
excerpt: "Découvrez comment utiliser l'outil de téléversement de fichiers du datastore et la cli officiel govc afin de pouvoir importer des données dans votre environnement VMware vSphere on OVHcloud managé"
updated: 2024-10-01
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objectif

**L'objectif est de téléverser des fichiers dans un dossier de votre banque de données vSphere.**

## Prérequis

- Être connecté à [l'espace client OVHcloud](/links/manager).
- Être administrateur technique de l'infrastructure [VMware on OVHcloud](/links/hosted-private-cloud/vmware).
- Si vous utilisez IAM, vérifiez bien que vous disposez des droits, rôles et actions nécessaires pour téléverser des fichiers ou créer des répertoires dans le datastore. Pour plus d'informations, consultez le guide « [IAM pour VMware on OVHcloud - Présentation et FAQ](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_getting_started) ».

## En pratique

> [!primary]
> 
> Ce guide remplace la méthode SFTP, devenue obsolète : [Se connecter en SFTP](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/sftp_connexion).
>

### Étape 1 - Téléverser depuis le client HTML

#### Accéder au datastore

Connectez-vous à l'interface web vSphere, en vous aidant si besoin du guide « [Se connecter à la console Web vSphere on OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vsphere_interface_connexion) ».

Vous devez ensuite accéder aux repertoires sur lequel vous voulez stocker vos fichiers (ISO par exemple). L'objectif étant de créer une arborescence afin de retrouver facilement vos éléments au sein de votre vSphere managé.

![vSphere Home](images/vsphere_home.png){.thumbnail}

#### Téléverser des fichiers

Vous disposez de 2 façons d'y accéder, libre à vous de choisir celle qui vous convient le mieux :

**1\. Depuis le menu `Inventaire`{.action} :**

|                                        **Images**                                         | **Étapes**                                                                       |
|:-----------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------|
| ![vSphere Datastore Upload 01](images/datastore_inventory_2.png){.thumbnail}      | - Cliquez sur `Inventaire`{.action}.                                         |
| ![vSphere Datastore Upload 01](images/datastore.png){.thumbnail}<br/> ![vSphere Datastore Upload 01](images/datastore_1.png){.thumbnail}| - Depuis `pcc-XXX-XXX-XXX-XXX.ovh.XX`, cliquez sur `Banques de données`{.action}. |

Vous retrouvez alors l'ensemble de vos banques de données (datastores) listées.

Cliquez sur votre banque de données pour voir apparaitre une section `Fichiers`{.action} dans laquelle s'ouvre votre fenêtre automatiquement.

![vSphere Datastore Inventory](images/inventory_datastore.png){.thumbnail}

Depuis la section `Fichiers`{.action} de votre banque de données ouverte, cliquez sur `TÉLÉCHARGER DES FICHIERS`{.action}

Localisez l'élément à téléverser depuis votre ordinateur local (un fichier `XXX.iso` par exemple) et cliquez sur `Ouvrir`{.action} pour téléverser le fichier (ISO ou autre) depuis votre machine connectée au client HTML vSphere.

Le téléversement du fichier ISO commence automatiquement sans validation dans le dossier (s'il y en a un) de votre banque de données sélectionnée.

Vous pouvez actualiser l'explorateur de fichiers de la banque de données pour afficher le fichier téléversé dans la liste.

![Datastore Upload - Files](images/datastore_4.png){.thumbnail}

Vous pouvez ainsi lancer ce fichier ISO depuis un périphérique CD/DVD au sein de vote VM et lancer l'installation de l'OS en suivant le processus d'installation. Il est cependant recommandé d'utiliser des modèles de déploiement OVHcloud ou des clones de VM transformés en modèles (*templates*) par vos soins.

**2\. Depuis le menu `Listes d'inventaires globaux`{.action} :**

Ce menu vous renvoie également à l'interface `Fichers`{.action} de téléversement :

|                                        **Images**                                         | **Étapes**                                                |
|:-----------------------------------------------------------------------------------------:|:----------------------------------------------------------|
| ![vSphere Global Inventory](images/global_inventory.png){.thumbnail}      | - Cliquez sur `Listes d'inventaires globaux`{.action}. |
| ![vSphere Global Inventory Datastore](images/global_inventory_datastores.png){.thumbnail} | - Puis sur `Banques de données`{.action}.                  |

![vSphere Global Inventory Datastore](images/global_inventory_datastores_2.png){.thumbnail}

Cliquez sur le `Datastore` souhaité.

Vous allez vous retrouver dans la section `Fichiers`{.action} ou vous pourrez téléverser des données dans votre banque de données.

Cliquez ensuite sur `TELECHARGER DES FICHIERS`{.action} pour sélectionner le fichier (ISO ou autre) à téléverser depuis votre machine locale.

Localisez l'élément à téléverser depuis votre ordinateur local (un fichier `XXX.iso` par exemple) et cliquez sur `Ouvrir`{.action}

#### Téléverser des dossiers

Depuis votre banque de données, dans la section `Fichiers`{.action}, cliquez sur `TÉLÉCHARGER UN DOSSIER`{.action}.

Localisez l'élément à téléverser depuis votre machine connectée au client HTML vSphere et cliquez sur `Ouvrir`{.action}

Le téléversement ne commencera qu'après la confirmation validée : 

|                                       **Images**                                       | **Étapes**                                       |
|:--------------------------------------------------------------------------------------:|:-------------------------------------------------|
|        ![vSphere Upload Folder](images/datastore_folder_upload.png){.thumbnail}        | - Pour confirmer, cliquez sur `Envoyer`{.action}. |

#### Déplacer/Copier des fichiers

Depuis votre banque de données, cliquez sur `DÉPLACER VERS`{.action} ou `COPIER DANS`{.action}.

![Datastore Upload- Move/copy](images/datastore_4.png){.thumbnail}

Localisez l'élément de destination à déplacer depuis la banque de données et cliquez sur `OK`{.action}.

![Datastore Upload - Move/copy](images/datastore_move.png){.thumbnail}

Vous devez disposer des droits suffisants pour effectuer ce type d'actions.

#### Renommer des fichiers

Depuis votre banque de données, cliquez sur `Remplacer le nom par`{.action}.

![Datastore Upload - Rename](images/datastore_upload_rename.png){.thumbnail}

Renommez votre fichier puis cliquez sur `OK`{.action}.

#### Créer un dossier (facultatif)

Depuis la section `Fichiers`{.action} de votre banque de données, cliquez sur `NOUVEAU DOSSIER`{.action} pour créer un dossier où stocker vos fichiers.

Nommez votre dossier et cliquez sur `OK`{.action}.

![Datastore Upload - Create a folder](images/datastore_4.png){.thumbnail}

### Étape 2 - Téléversement avec govc depuis l'API VMware

Une bibliothèque Go pour interagir avec les API VMware vSphere (ESXi et/ou vCenter Server) est fournis par VMware.  Vous pouvez consulter le dépot github à [cette url](https://github.com/vmware/govmomi?tab=readme-ov-file)

En plus du client API vSphere, ce dépôt comprend :

- [govc](https://github.com/vmware/govmomi/blob/main/govc/README.md) - vSphere CLI
- [vcsim](https://github.com/vmware/govmomi/blob/main/vcsim/README.md) - vSphere API mock framework
- [toolbox](https://github.com/vmware/govmomi/blob/main/toolbox/README.md) - Framework des outils invités des VM

#### Installation et configuration de govc

**Sur Linux**

Avec le binaire :

Vous pouvez télécharger le binaire depuis de dépot officiel Github VMware : https://github.com/vmware/govmomi/releases

Le curl ci dessous extrait la bonne version nécessaire pour votre OS (`uname`), faite quand même attention à bien télécharger l'asset `Govc` qui dispose de la version d'OS (Freebsd, Linux, x64_86, arm etc..).

```bash
# extract govc binary to /usr/local/bin
# note: the "tar" command must run with root permissions
curl -L -o - "https://github.com/vmware/govmomi/releases/latest/download/govc_$(uname -s)_$(uname -m).tar.gz" | tar -C /usr/local/bin -xvzf - govc
```
**Remarque** : Vous devez être root pour éxécuter `tar` ou avoir les droits `sudo` suffisants.

Avec go install :

```bash
go install github.com/vmware/govmomi/govc@latest
```
Avec Docker :

[L'image Docker](https://hub.docker.com/r/vmware/govc) `govc` est construite depuis ce [Dockerfile](https://github.com/vmware/govmomi/blob/main/Dockerfile.govc).

Pour les installations alternatives, consultez le dépot Git `Govc` VMware officiel à [cette url](https://github.com/vmware/govmomi/blob/main/govc/README.md).

Le programme fournit un vaste choix d’arguments pour définir les conditions d’accès à l’API (par exemple son URL, l’utilisateur/mot de passe etc..). Mais nous vous conseillons d’utiliser des variables d’environnements pour gérer plus efficacement vos clusters, surtout si vous êtes amenés à vous connecter à plusieurs APIs. Et de les placer dans un fichier pour une réutilisation ulterieur lors d’une autre session par exemple.

|      **Variable d'environnement**      |                                    **Standard**                                    |                                  **Premium (vSAN)**                                   | **Comments**                                                                                                                                                                                                                                                                                                                                                                                                                         | 
|:--------------------------------------:|:----------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|           `GOVC_DATACENTER`            |                         `pcc-XXX-XX-XX-XX_datacenterXXXX`                          |                           `pcc-XXX-XX-XX-XX_datacenterXXXX`                           | - Nom du datacenter par défaut au sens VMWare du terme.                                                                                                                                                                                                                                                                                                                                                                              | 
|            `GOVC_USERNAME`             |                                      `jsnow`                                       |                                        `jsnow`                                        | - L'utilisateur local de connexion VMware vSphere on OVHcloud. Vous pouvez vous passez de cette variable si vous spécifiez vos identifiants dans la variable `GOVC-URL`.                                                                                                                                                                                                                                                             |
|            `GOVC_PASSWORD`             |                                 `John_passwordXX`                                  |                                   `John_passwordXX`                                   | - Le mot de passe de connexion de l'utilisateur local VMware vSphere on OVHcloud. Vous pouvez vous passez de cette variable si vous spécifiez vos identifiants dans la variable `GOVC-URL`.                                                                                                                                                                                                                                          | 
|               `GOVC_URL`               | `user:pass@host`<br/>`vsphere.local`<br/>`vc.local`<br/>`pcc-XXX-XX-XX-XX.ovh.XX`  |   `user:pass@host`<br/>`vsphere.local`<br/>`vc.local`<br/>`pcc-XXX-XX-XX-XX.ovh.XX`   | - L'IP ou hostname de l'hôte VMware vsphere on OVHcloud. Vous pouvez spécifier en plus l'identifiant utilisateur et le mot de passe, tel que `user:pass@host`. Et vous passez des variables `GOVC_USERNAME/PASSWORD`. Attention le `host` definit bien l'IP de vos ESX et non le `pcc-XXX-XXX-XXX-XXX`. Si vous utilisez govc au sein d'une VM de votre environnement vous pouvez ajouter en `host` : `vsphere.local` ou `vc.local`. |
|            `GOVC_DATASTORE`            |                              `ssd-XXXXXX`<br/>`NFS-XXXXXX`                              |                      `ssd-XXXXXX`<br/>`NFS-XXXXXX`<br/>`vsanDatastore`                       | - Le Datastore utilisé par défaut au sens VMWare du terme.                                                                                                                                                                                                                                                                                                                                                                           |
|             `GOVC_NETWORK`             |                                   `172.XX.XX.XX`                                   |                                    `172.XX.XX.XX`                                     | - Le Network par défaut au sens VMWare du terme. Vous pouvez les retrouver dans votre inventaire globale `Networks`.                                                                                                                                                                                                                                                                                                                 |
|              `GOVC_HOST`               |                                   `172.XX.XX.XX`                                   |                                    `172.XX.XX.XX`                                     | - L'hôte par défaut au sens VMWare du terme. Vous pouvez les retrouver dans votre inventaire globale `Hosts`.                                                                                                                                                                                                                                                                                                                        |
|          `GOVC_RESOURCE_POOL`          |                                    `ovhServer`                                     |                                      `ovhServer`                                      | - Le pool de ressource par défaut au sens VMWare du terme. Vous pouvez les retrouver dans votre inventaire globale `Ressource Pools`.                                                                                                                                                                                                                                                                                                |
|              `HTTP_PROXY`              |                             `http://XXX.XX.X.X:XXXXX`                              |                               `http://XXX.XX.X.X:XXXXX`                               | - L'url de votre server proxy sans https.                                                                                                                                                                                                                                                                                                                                                                                            |
|             `HTTPS_PROXY`              |                             `https://XXX.XX.X.X:XXXXX`                             |                              `https://XXX.XX.X.X:XXXXX`                               | - L'url de votre server proxy avec https.                                                                                                                                                                                                                                                                                                                                                                                            |

Voici un exemple de configuation pour un OS Linux :

```bash
# govc.env
export GOVC_DATACENTER=<Nom du datacenter par défaut au sens VMWare du terme>
export GOVC_USERNAME=<Utilisateur local vmware>
export GOVC_PASSWORD=<Mot de passe de l'utilisateur local VMware>
export GOVC_URL=<IP ou hostname du vsphere>
export GOVC_DATASTORE=<Datastore par défaut>

# Si besoin d'utiliser un proxy réseau
# export HTTP_PROXY=http://XXX.XX.X.X:XXXXX
# export HTTPS_PROXY=http://XXX.XX.X.X:XXXXX
```

Comme pour tout fichier contenant des variables, il suffit de le sourcer dans un terminal.

```bash
source govc.env
```

Au lancement de chaques commandes, des options peuvent être modifiées à la volée pour surcharger les variables d’environnement, par exemple :

```bash
govc datastore.ls -dc=Datacenter2 -ds=Datastore1 -debug=true
```

À noter que si vous utilisez la commande debug (le “=true” est optionnel, s’agissant d’un flag Go), un dossier caché `.govmomi/debug` sera créé avec des logs vous permettant de tracer votre problème.

#### Usage de govc

Nous allons vous exposer ici la commande de téléversement.

Tout d’abord, il faut comprendre qu’au sein d’un datacenter les objets sont regroupés au sein d’un même type, sous `VM`, `Network`, `Host` et `Datastore`. Ainsi, il existe une seule méthode pour téléverser des fichiers avec la commande `govc datastore.upload`.

**Téléverser un iso**

Voici un exemple de téléversement d'une image iso avec `govc`. Attention à bien localiser le dossier sur lequel vous voulez importer votre iso, si vous en avez un :

```bash
govc datastore.upload image.iso dossier-isos/image.iso
```
Télécharger un ISO avec curl avant de le téléverser à l'aide d'un pipe shell :

```bash
curl https://example.com/iso/image.iso | govc datastore.upload - dossier-isos/image.iso
```

## Aller plus loin

- [IAM pour VMware on OVHcloud - Présentation et FAQ](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_getting_started)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en œuvre de nos solutions, contactez votre Technical Account Manager ou rendez-vous sur [cette page](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Posez des questions, donnez votre avis et interagissez directement avec l’équipe qui construit nos services Hosted Private Cloud sur le [channel Discord dédié](https://discord.gg/ovhcloud).

Échangez avec notre [communauté d'utilisateurs OVHcloud](/links/community).
