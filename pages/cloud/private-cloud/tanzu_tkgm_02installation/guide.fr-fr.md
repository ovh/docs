---
title: Installer Tanzu Kubernetes Grid
slug: tanzu-tkgm-installation
excerpt: Intégrer Tanzu Kubernetes Grid à votre infrastructure Hosted Private Cloud powered by VMware
section: Tanzu
order: 03
---

**Dernière mise à jour le 07/11/2022**

## Objectif

**Ce guide vous permet d'installer Tanzu Kubernetes Grid sur votre cluster Hosted Private Cloud powered by VMware**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Présentation

VMware Tanzu Kubernetes Grid est une plate-forme Kubernetes fournie par **VMware** et maintenue dans le cadre du support **Hosted Private Cloud powered by VMware**.

Vous pouvez installer ce produit sur votre infrastructure OVHcloud pour profiter de ses fonctionnalités et de son évolutivité.

## Prérequis

- Être contact administrateur de l'infrastructure [Hosted Private Cloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), afin de recevoir les identifiants de connexion.
- Avoir un identifiant actif dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Avoir un identifiant actif dans vSphere.
- Avoir un VLAN qui possède un accès à Internet et un serveur DHCP.
- Disposer de ces ressources :
    - 8 Go de mémoire, 4 vCPU et 250 Go de stockage pour la machine virtuelle d'administration nommmée **Bootstrap**.
    - 16 Go de mémoire, 4 vCPU, 40 Go de stockage par nœud Kubernetes (il faut 6 nœuds pour une installation du cluster d'administration en mode production et 6 nœuds par cluster de **Workload** dans le même mode).

## En pratique

Nous allons installer **VMware Tanzu Kubernetes Grid** sur un cluster **Hosted Private Cloud powered by VMware** et utiliser le VLAN 10 avec ces paramètres :

* **LAN** : `192.168.0.0/24`.
* **Plage DHCP** : `192.168.0.50 -> 192.168.0.100`.
* **Passerelle** : `192.168.0.254`.

> [!primary]
> Ces informations sont données à titre d'exemple, il est tout à fait possible d'utiliser une autre plage et un autre VLAN.
>

A la fin de l'installation, sept machines virtuelles supplémentaires seront sur votre cluster VMware, six pour le fonctionnement du cluster d'administration **TKG** et une autre pour son administration.

![00 admin cluster diagram](images/00-admin-cluster-diagram01.png){.thumbnail}

### Importation du modèle OVA pour **Tanzu KUBERNETES Grid** dans votre infrastructure

VMware fournit une machine virtuelle sous forme de modèle OVA, qui contient tous les éléments pour faire fonctionner un nœud du cluster **Tanzu Kubernetes Grid**. Cette machine virtuelle est disponible dans les **OVH Templates** d'OVHcloud.

Connectez-vous à la page d'accueil OVHcloud de votre cluster VMware et cliquez à droite sur `OVH Templates`{.action}.

![01 integrate TKGM OVA 01](images/01-integrate-tkgm-ova01.png){.thumbnail}

Dans la fenêtre **Select a template**, choisissez le quatrième modèle en partant du haut qui a ces informations :

- **Family** : Linux.
- **Distribution** : Information non indiquée
- **Version** : 3

![01 integrate TKGM OVA 02](images/01-integrate-tkgm-ova02.png){.thumbnail}

Cliquez sur l'icône `Copier`{.action} à droite pour copier l'URL dont le nom doit se terminer par **photon-3-kube-v1.23.8+vmware.1.ovf** dans le presse-papier. Cliquez ensuite sur `Close`{.action}.

![01 integrate TKGM OVA 03](images/01-integrate-tkgm-ova03.png){.thumbnail}

Connectez-vous à votre console vSphere, faites un clic-droit sur votre cluster et choisissez `Déployer un modèle OVF`{.action}.

![01 integrate TKGM OVA 03b](images/01-integrate-tkgm-ova03b.png){.thumbnail}

Sélectionnez `URL`{.action}, collez l'URL précédemment copiée et cliquez sur `SUIVANT`{.action}.

![01 integrate TKGM OVA 04](images/01-integrate-tkgm-ova04.png){.thumbnail}

Laissez l'emplacement par défaut et cliquez sur `SUIVANT`{.action}.

![01 integrate TKGM OVA 05](images/01-integrate-tkgm-ova05.png){.thumbnail}

Choisissez le cluster et cliquez sur `SUIVANT`{.action}.

![01 integrate TKGM OVA 06](images/01-integrate-tkgm-ova06.png){.thumbnail}

Vérifiez vos informations et cliquez sur `SUIVANT`{.action}.

![01 integrate TKGM OVA 07](images/01-integrate-tkgm-ova07.png){.thumbnail}

Cochez `J'accepte tous les contrats de licence`{.action} et cliquez sur `SUIVANT`{.action}.

![01 integrate TKGM OVA 08](images/01-integrate-tkgm-ova08.png){.thumbnail}

Sélectionnez un stockage partagé en NFS v3 puis cliquez sur `SUIVANT`{.action}.

![01 integrate TKGM OVA 09](images/01-integrate-tkgm-ova09.png){.thumbnail}

Choisissez le réseau de destination sur `VLAN 10`{.action} et cliquez sur `SUIVANT`{.action}.

![01 integrate TKGM OVA 10](images/01-integrate-tkgm-ova10.png){.thumbnail}

Cliquez sur `TERMINER`{.action}.

![01 integrate TKGM OVA 11](images/01-integrate-tkgm-ova11.png){.thumbnail}

Sélectionnez l'onglet `Surveiller`{.action} et cliquez sur `Tâches`{.action}.

![01 integrate TKGM OVA 12](images/01-integrate-tkgm-ova12.png){.thumbnail}

Attendez que les tâches `Déployer un modèle OVF` et `Importer un modèle OVF` soient terminées.

![01 integrate TKGM OVA 13](images/01-integrate-tkgm-ova13.png){.thumbnail}

Faites un clic-droit sur la machine virtuelle déployée et choisissez l'option `Convertir au modèle`{.action} depuis le menu `Modèle`{.action}.

![01 integrate TKGM OVA 14](images/01-integrate-tkgm-ova14.png){.thumbnail}

Répondez `OUI`{.action} pour convertir la machine virtuelle.

![01 integrate TKGM OVA 15](images/01-integrate-tkgm-ova15.png){.thumbnail}

Allez dans `Machines virtuelles (et modèles)`{.action} pour voir le modèle créé.

> [!primary]
>
> Ce modèle sera utilisé lors du déploiement des clusters **Tanzu Kubernetes Grid**. Il sert pour le déploiement initial du cluster d'administration et pour l'installation de clusters de *WorkLoad* supplémentaires. il ne faut pas le supprimer du cluster **VMware**.
>

![01 integrate TKGM OVA 16](images/01-integrate-tkgm-ova16.png){.thumbnail}

### Installation de la machine virtuelle **Bootstrap** fournie par OVHcloud

Cette machine virtuelle a été créée par OVHcloud à partir de la documentation « [Installation manuelle de l'outil CLI pour le déploiement de **Tanzu Kubernetes GRID**](https://docs.vmware.com/en/VMware-Tanzu-Kubernetes-Grid/1.5/vmware-tanzu-kubernetes-grid-15/GUID-install-cli.html) ». Ele est disponible sous forme de modèle dans les **OVH Templates** d'OVHcloud.

Connectez-vous à la page d'accueil OVHcloud de votre cluster VMware et cliquez à droite sur `OVH Templates`{.action}.

![02 Add Bootstrapvm 01](images/02-add-bootstrap-vm-from-ova01.png){.thumbnail}

Dans la fenêtre **Select a template**, choisissez le troisième modèle en partant du haut et qui contient ces informations :

- **Family** : Linux.
- **Distribution** : Ubuntu.
- **Version** : 22

![02 Add Bootstrapvm 02](images/02-add-bootstrap-vm-from-ova02.png){.thumbnail}

Cliquez sur l'icône `Copier`{.action} à droite pour copier dans le presse-papier l'URL qui doit se terminer par **Ubuntu-22.04_TKGm-1.6_with_x.ovf** . Cliquez ensuite sur `Close`{.action}.

![02 Add Bootstrapvm 03](images/02-add-bootstrap-vm-from-ova03.png){.thumbnail}

Dans l'interface vSphere, faites un clic-droit sur le cluster et choisissez `Déployer un modèle OVF`{.action} dans le menu contextuel.

![02 Add Bootstrapvm 03b](images/02-add-bootstrap-vm-from-ova03b.png){.thumbnail}

Sélectionnez `URL`{.action}, collez l'URL précédemment copiée et cliquez sur `SUIVANT`{.action}.

![02 Add Bootstrapvm 04](images/02-add-bootstrap-vm-from-ova04.png){.thumbnail}

Laissez le positionnement par défaut et cliquez sur `SUIVANT`{.action}.

![02 Add Bootstrapvm 05](images/02-add-bootstrap-vm-from-ova05.png){.thumbnail}

Gardez le `Cluster1` et cliquez sur `SUIVANT`{.action}.

![02 Add Bootstrapvm 06](images/02-add-bootstrap-vm-from-ova06.png){.thumbnail}

Cliquez sur `SUIVANT`{.action} pour valider les choix.

![02 Add Bootstrapvm 07](images/02-add-bootstrap-vm-from-ova07.png){.thumbnail}

Sélectionnez un stockage partagé en NFS v3 et cliquez sur `SUIVANT`{.action}.

![02 Add Bootstrapvm 08](images/02-add-bootstrap-vm-from-ova08.png){.thumbnail}

Choisissez `VLAN10` pour le réseau de destination et cliquez sur `SUIVANT`{.action}.

![02 Add Bootstrapvm 09](images/02-add-bootstrap-vm-from-ova09.png){.thumbnail}

Ajoutez ces informations dans **Networking** :

- **Hostname** : `bootstrap`.
- **IP Address** : `192.168.0.199`.
- **Network CIDR Prefix** : `24`.
- **Gateway** : `192.168.0.254`.
- **DNS** : `213.186.33.99`.

> [!primary]
>
> Le serveur DNS choisi dans ce guide est celui d'OVHcloud.
>

Saisissez et confirmez le mot de passe dans **OS Credentials** et cliquez sur `SUIVANT`{.action}.

![02 Add Bootstrapvm 10](images/02-add-bootstrap-vm-from-ova10.png){.thumbnail}

Cliquez sur `TERMINER`{.action}.

![02 Add Bootstrapvm 11](images/02-add-bootstrap-vm-from-ova11.png){.thumbnail}

Faites un clic-droit sur la machine virtuelle créée, allez dans `Alimentation`{.action} et cliquez sur `Mettre sous tension`{.action}.

![02 Add Bootstrapvm 12](images/02-add-bootstrap-vm-from-ova12.png){.thumbnail}

La machine virtuelle démarrée est accessible via la console avec l'interface graphique ou en **SSH**.

Positionnez-vous sur la machine virtuelle créée et cliquez sur `LANCER LA CONSOLE WEB`{.action}.

![02 Add Bootstrapvm 13](images/02-add-bootstrap-vm-from-ova13.png){.thumbnail}

L'interface graphique de la machine virtuelle Linux apparaît.

![02 Add Bootstrapvm 14](images/02-add-bootstrap-vm-from-ova14.png){.thumbnail}

### Autorisation d'accès au cluster PCC depuis la machine virtuelle **Bootstrap**

Les outils de configuration et d'administration de **Tanzu Kubernetes Grid** sont installés sur la machine virtuelle **Bootstrap**. Cette machine virtuelle doit pouvoir se connecter à Internet et au cluster vSphere.

Notez **l'adresse IP publique** que vous utilisez sur cette machine virtuelle et aidez-vous du guide « [Autoriser des adresses IP à se connecter au vCenter](https://docs.ovh.com/fr/private-cloud/autoriser-des-ip-a-se-connecter-au-vcenter/) » pour donner accès au cluster vSphere depuis la nouvelle machine virtuelle.

### Déploiement du cluster **Tanzu Kubernetes Grid** sur votre infrastructure 

Connectez-vous sur la machine virtuelle `Ubuntu-22.04_TKGm-1.5.4_with_x`, ouvrez un terminal et exécutez cette commande pour créer une clé **RSA** :

```bash
ssh-keygen -t rsa -b 4096 -C "youremail@yourdomain.com"
```

![03 Create TKG CLUSTER 01](images/03-create-tkg-cluster01.png){.thumbnail}

Deux fichiers sont créés dans le dossier **~/.ssh** :

- **id_rsa.pub** 
- **id_rsa** 

Restez sur la console et lancez cette commande :

```bash
tanzu management-cluster create --ui --bind 192.168.0.199:8080
```

> [!primary]
>
> Lorsque vous lancez cette commande depuis la console Linux avec l'interface graphique, le navigateur Web se lance et se connecte à l'adresse `https://192.168.0.199:8080`. Si vous avez lancé cette commande depuis une connexion **SSH**, il vous faudra vous connecter à l'adresse `https://192.168.0.199:8080` à partir d'une machine virtuelle qui se trouve sur le même réseau avec une interface graphique et un navigateur web opérationnel.
>

![03 Create TKG CLUSTER 02](images/03-create-tkg-cluster02.png){.thumbnail}

Cliquez sur `Deploy`{.action} en dessous de **VMware vSphere**.

![03 Create TKG CLUSTER 03](images/03-create-tkg-cluster03.png){.thumbnail}

Saisissez ces informations :

- **VCENTER SERVER** : `nom FQDN du cluster VMware`.
- **USERNAME** : `utilisateur du cluster VMware`.
- **PASSWORD** : `mot de passe de l'utilisateur du cluster VMware`.

Cliquez ensuite sur `CONNECT`{.action}.

![03 Create TKG CLUSTER 04](images/03-create-tkg-cluster04.png){.thumbnail}

A l'étape de vérification du **SSL Thumbprint**, cliquez sur `CONTINUE`{.action}.

![03 Create TKG CLUSTER 05](images/03-create-tkg-cluster05.png){.thumbnail}

Cliquez sur la croix en haut à droite pour fermer la fenêtre **vSphere 7.0.3 Environnement Detected**.

![03 Create TKG CLUSTER 06](images/03-create-tkg-cluster06.png){.thumbnail}

Collez le contenu du fichier **~.ssh/id_rsa.pub** dans **SSH PUBLIC KEY** et cliquez sur `NEXT`{.action}.

![03 Create TKG CLUSTER 07](images/03-create-tkg-cluster07.png){.thumbnail}

Choisissez à droite `Production`{.action} et sélectionnez l'option `large etc...` dans **INSTANCE TYPE** .

Saisissez ces valeurs :

- **MANAGEMEMENT CLUSTER NAME (OPTIONAL)** : `tkgm-management-cluster`.
- **CONTROL PLANE ENDPOINT** : `192.168.0.10`.

Cliquez sur `NEXT`{.action} pour passer à l'étape suivante.

![03 Create TKG CLUSTER 08](images/03-create-tkg-cluster08.png){.thumbnail}

Cliquez sur `NEXT`{.action}.

![03 Create TKG CLUSTER 09](images/03-create-tkg-cluster09.png){.thumbnail}

Dans l'option **Metadata** puis dans la partie **LABELS (OPTIONAL)**, saisissez `tkgm` pour le nom et sa valeur.

Cliquez sur `NEXT`{.action}.

![03 Create TKG CLUSTER 10](images/03-create-tkg-cluster10.png){.thumbnail}

Renseignez ces options :

- **VM FOLDER** : `Dossier de rangement des machines virtuelles`.
- **DATASTORE** : `Stockage des machines virtuelles à mettre sur un stockage partagé`.
- **CLUSTERS , HOSTS,  AND RESOURCE POOLS** : `Cluster1`.

Cliquez sur `NEXT`{.action}.

![03 Create TKG CLUSTER 11](images/03-create-tkg-cluster11.png){.thumbnail}

Sélectionnez, dans **NETWORK NAME**, le `VLAN10`{.action}.

Cliquez sur `NEXT`{.action}.

![03 Create TKG CLUSTER 12](images/03-create-tkg-cluster12.png){.thumbnail}

Désactivez l'option `Enable Identity Management Settings`{.action} et cliquez sur `NEXT`{.action}. 

![03 Create TKG CLUSTER 13](images/03-create-tkg-cluster13.png){.thumbnail}

Sélectionnez l'image OVA intégrée au cluster `photon-3-kube-v1.22.9+vmware.1` dans le menu **OS Image** et cliquez sur `NEXT`{.action}.

![03 Create TKG CLUSTER 14](images/03-create-tkg-cluster14.png){.thumbnail}

Décochez `Participate in the Customer Experience Improvement Program`{.action} et cliquez sur `NEXT`{.action}.

![03 Create TKG CLUSTER 15](images/03-create-tkg-cluster15.png){.thumbnail}

Cliquez sur `REVIEW CONFIGURATION`{.action}.

![03 Create TKG CLUSTER 16](images/03-create-tkg-cluster16.png){.thumbnail}

> [!primary]
> Notez le nom du fichier yaml qui se trouve en dessous de **CLI Command Equivalent**, il servira de modèle pour le déploiement d'un cluster de **WorkLoad**.
>

Faites défiler la fenêtre et cliquez sur `DEPLOY MANAGEMENT CLUSTER`{.action} 

![03 Create TKG CLUSTER 17](images/03-create-tkg-cluster17.png){.thumbnail}

Le déploiement du cluster **Tanzu Kubernetes Grid** est lancé, patientez jusqu'à ce qu'il soit terminé.

> [!primary]
> Le déploiement sera terminé lorsque vous verrez apparaitre dans la fenêtre les messages **Management cluster created** et **Successfully installed all required plugins**.
>
> ![03 Create TKG CLUSTER 18](images/03-create-tkg-cluster18.png){.thumbnail}
>
> Une autre indication qui signale que l'installation est terminée se trouve dans la console de la machine virtuelle de **Bootstrap** où apparaîtront les messages **Management cluster created** et **You can now create your first workload cluster etc...**.

> [!warning]
> 
> Notez ou copier le nom du fichier **yaml** qui se trouve dans le dossier `/home/tanzu/.config/tanzu/tkg/clusterconfigs`, il servira à la création d'un fichier de configuration pour l'installation d'un cluster de *WorkLoad*
>

![03 Create TKG CLUSTER 19](images/03-create-tkg-cluster19.png){.thumbnail}

Allez sur l'interface vCenter pour voir les sept machines virtuelles créées.

![04 VM CREATED ADFTER INSTALLATION 01](images/04-vm-created-after-installation01.png){.thumbnail}

## Aller plus loin

[Administrer un cluster TKG](https://docs.ovh.com/fr/private-cloud/tanzu-tkgm-management)

[Présentation de VMware Tanzu Kubernetes Grid](https://tanzu.vmware.com/kubernetes-grid)

[Documentation de VMware Tanzu Kubenetes Grid](https://https://docs.vmware.com/en/VMware-Tanzu-Kubernetes-Grid/index.html)

[Installation manuelle de l'outil CLI pour le déploiement de Tanzu Kubernetes GRID](https://docs.vmware.com/en/VMware-Tanzu-Kubernetes-Grid/1.5/vmware-tanzu-kubernetes-grid-15/GUID-install-cli.html)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
