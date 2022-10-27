 ---
title: "Configuration d'un plan de reprise d'activité avec Metro"
slug: metro-availability
excerpt: "Mise en oeuvre de Metro pour un plan de reprise d'activité"
section: "Plan de Reprise d'Activité"
order: 06
---

**Dernière mise à jour le 27/10/2022**

## Objectif

**Ce guide vous présente Metro Availability qui permet un plan de reprise d'activité automatisé.** 

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

[Etape 1 Prérequis](#prerequis)
[Etape 2 Présentation](#presentation)
[Etape 3 En pratique](#enpratique)
    - [Etape 3.1 Configuration](#configuration)
        - [Etape 3.1.1 Interconnexion des trois clusters](#connectcl)
        - [Etape 3.1.2 Suppression des enregistrements Prism Central pour les cluster de Roubaix et Gravelines](#supprpc)
        - [Etape 3.1.3 Enregistrement des deux clusters sur le **Prism Central** d'Erith](#enregpc)
        - [Etape 3.1.4 Ajout des adresses IP pour les connexions iSCSI sur les trois clusters](#paramiscsi)
        - [Etape 3.1.5 Création de deux Storage Containers](#addsc)
        - [Etape 3.1.6 Déplacement des machines virtuelles dans le Storage Container](#deplst)
        - [Etape 3.1.7 Création d'une catégorie qui servira lors de la mise en place du P.R.A](#creacat)
        - [Etape 3.1.8 Ajout des machines virtuelles dans les catégories](#addvmcat)
        - [Etape 3.1.9 Mise en place des réplications synchrones entre Roubaix et Gravelines](#confreplsync)
        - [Etape 3.1.10 Création de sous-réseaux nécessaires au plan de reprise d'activité](#addsublan)
        - [Etape 3.1.11 Mise en place des plans de reprises d'activités](#adddr)
- [Etape 3.2 Validation du plan de reprise d'activité](#validation)
        - [Etape 3.2.1 Contrôle du plan de reprise d'activité](#ctrldr)
        - [Etape 3.2.2 Live migration des machines virtuelles de Roubaix sur Gravelines](#livemigration)
        - [Etape 3.2.3 Opérations à effectuer après une migration](#aftermigration)
        - [Etape 3.2.4 Exécution du plan de reprise d'activité en condition réelle](#epmcr)
[Etape 3 Aller plus loin](#gofurther)


<a name="prerequis"></a> 
## Etape 1 Prérequis

- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Être connecté sur vos clusters via Prism Central.
- Avoir 3 clusters Nutanix au sein de l'infrastructure OVHcloudavec des licences **Pack Advanced** si vous avez une offre packagée sur les deux clusters du P.R.A. Ces 3 clusters devont être sur des sites distants pour assurer un maximum de sureté.
- Avoir une latence de moins de 5ms entre les deux clusters répliqués.


<a name="presentation"></a>
## Etape 2 Présentation

Nous allons mettre en place un plan de reprise d'activité bidirectionnel entre deux clusters avec ce matériel :

- Un cluster Nutanix à Roubaix en France avec des machines virtuelles répliquées à Gravelines.
- Un cluster Nutanix à Gravelines en France avec des machines virtuelles répliquées à Roubaix.
- Un cluster Nutanix à Erith en Angleterre avec **Prism Central** qui servira de témoin dans le plan de reprise d'activité.

Nous n'utiliserons qu'un seul **vRack** qui contiendra :

- Les trois clusters Nutanix.
- Les loadbalancers.
- les adresses IP additionnelles sur le **rtvRack**.

Vous trouverez ci-dessous le schéma représentant les trois sites :

![00 - Metro Availability Diagram 01](images/00-metro-availability-diagram01.png){.thumbnail}

<a name="enpratique"></a>
## Etape 3 En pratique

Nous allons étape par étape mettre en place ce P.R.A (Plan de reprise d'activité).

Les informations de configuration des clusters utilisées par notre guide sont les suivantes :

- Cluster de Roubaix :
    + Serveur 1 : adresse VM **CVM** `192.168.0.21`, adresse IP hyperviseur **AHV** `192.168.0.1`.
    + Serveur 2 : adresse VM **CVM** `192.168.0.22`, adresse IP hyperviseur **AHV** `192.168.0.2`.
    + Serveur 3 : adresse VM **CVM** `192.168.0.23`, adresse IP hyperviseur **AHV** `192.168.0.3`.
    + Adresse virtuelle de **Prism Element** : `192.168.0.100`.
    + Adresse iScsi de **Prism Element** : `192.168.0.102`.
    + Adresse IP **Prism Central** : `192.168.0.101`.
    + Passerelle : `192.168.3.254`.
    + Masque : `255.255.252.0`
    + Version du cluster : `6.5`

- Cluster de Gravelines :
    + Serveur 1 : adresse VM **CVM** `192.168.1.21`, adresse IP hyperviseur **AHV** `192.168.1.1`.
    + Serveur 2 : adresse VM **CVM** `192.168.1.22`, adresse IP hyperviseur **AHV** `192.168.1.2`.
    + Serveur 3 : adresse VM **CVM** `192.168.1.23`, adresse IP hyperviseur **AHV** `192.168.1.3`.
    + Adresse virtuelle de **Prism Element** : `192.168.1.100`.
    + Adresse iScsi de **Prism Element** : `192.168.1.102`.
    + Adresse IP **Prism Central** : `192.168.1.101`.
    + Passerelle : `192.168.3.254`.
    + Masque : `255.255.252.0`
    + Version du cluster : `6.5`.
 
- Cluster d'Erith :
    + Serveur 1 : adresse VM **CVM** `192.168.2.21`, adresse IP hyperviseur **AHV** `192.168.2.1`.
    + Serveur 2 : adresse VM **CVM** `192.168.2.22`, adresse IP hyperviseur **AHV** `192.168.2.2`.
    + Serveur 3 : adresse VM **CVM** `192.168.2.23`, adresse IP hyperviseur **AHV** `192.168.2.3`.
    + Adresse virtuelle de **Prism Element** : `192.168.2.101`.
    + Adresse iScsi de **Prism Element** : `192.168.2.102`.   
    + Adresse IP **Prism Central** : `192.168.2.100`.
    + Passerelle : `192.168.3.254`.
    + Masque : `255.255.252.0`
    + Version du cluster : `6.5`.


En plus de ce guide vous pouvez vous appuyer sur ces documentations [Hyperconvergence Nutanix](https://docs.ovh.com/fr/nutanix/nutanix-hci/) et [outils avancées](https://docs.ovh.com/fr/nutanix/advanced-tools/) pour vous aider.

<a name="configuration"></a>
### Etape 3.1 Configuration

<a name="connectcl"></a>
#### **Etape 3.1.1 Interconnexion des trois clusters**

La première étape est de réaliser l'interconnexion des trois clusters sur le même **vRack** **OVHcloud**. 

Aidez-vous de ce guide pour interconnecter vos clusters [Interconnexion de clusters au travers du vRack](https://docs.ovh.com/fr/nutanix/nutanix-vrack-interconnection/).

Le guide explique la connexion entre deux clusters. Pour la connexion des trois clusters utilisez les instructions fournies sur le guide dans ce sens :

- Les clusters de Roubaix dans le **vRack** dédié à Gravelines.
- Les clusters de Erith dans le **vRack** dédié à Gravelines.

Lorsque vous aurez terminé la configuration vous verrez dans votre vRack ces éléments :

- 9 Dedicated servers (3 par cluster)
- 3 adresses IP publiques
- 3 Load Balancers

![01 - vRack Configuration 01](images/01-vrack-configuration01.png){.thumbnail}

Les trois clusters sont pour l'instant accessibles à partir des l'URL **Prism Central** de chaque clusters.

<a name="supprpc"></a>
#### **Etape 3.1.2 Suppression des enregistrements Prism Central pour les clusters de Roubaix et Gravelines.**

Pour pouvoir mettre en place une solution de plan de reprise d'activité avec **Metro Availability** il faut un témoin de cluster qui assure l'automatisation des tâches en cas d'indisponibilité d'un des clusters. Le témoin de cluster se trouve sur une machine virtuelle **Prism Central**.

Le cluster d'Erith hébergera la machine virtuelle **Prism Central** pour les trois clusters et servira de témoin de clusters pour le plan de reprise d'activité entre Roubaix et Gravelines. 

##### **Désactivation de **Prism Central** sur le cluster de Roubaix**

Connectez-vous en SSH au cluster **Prism Element** de Roubaix.

```bash
ssh nutanix@adresse_ip_privee_prism_element_Roubaix
Saisissez le mot de passe de Prism Element
```
Exécutez cette commande pour retirer Prism Element de la configuration de Prism Central :

```
ncli multicluster remove-from-multicluster external-ip-address-or-svm-ips=adresse_ip_privee_prism_central_roubaix\
username=admin password=mdp_pe_Roubaix force=true
```

Ce message apparait lors de la déconnexion à Prism Central.

```console
Cluster unregistration is currently in progress. This operation may take a while.
```

Saisissez cette commande :

```bash
ncli cluster info
```

Notez la valeur de **Cluster UUID** qui doit avoir cette forme **xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx**.

Déconnectez-vous de **Prism Element** et connectez-vous en SSH sur la machine virtuelle **Prism Central** de Roubaix.

```bash
ssh nutanix@adresse_ip_privee_prism_central_roubaix
Saisissez le mot de passe de Prism Central
```

Saisissez cette commande :

```bash
python /home/nutanix/bin/unregistration_cleanup.py cluster_uuid_prism_element_Roubaix
```

###### **Désactivation de **Prism Central** sur le cluster de Gravelines**

Connectez-vous en SSH au cluster **Prism Element** de Gravelines.

```bash
ssh nutanix@adresse_ip_prism_element_Gravelines
Saisissez le mot de passe de Prism Element
```
Saisissez cette commande :

```bash
ncli multicluster remove-from-multicluster external-ip-address-or-svm-ips=adresse_ip_privee_prism_central_Gravelines\
username=admin password=mdp_pe_Gravelines force=true
```

Ce message apparait lors de la déconnexion à Prism Central.

```console
Cluster unregistration is currently in progress. This operation may take a while.
```

Saisissez cette commande :

```bash
ncli cluster info
```

Notez la valeur de **Cluster UUID* qui doit avoir cette forme **xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx**

Déconnectez-vous de **Prism Element** et connectez-vous en SSH sur la machine virtuelle **Prism Central** de Gravelines.

```bash
ssh nutanix@adresse_ip_privee_prism_central_Gravelines
saisissez le mot de passe de Prism Central
python /home/nutanix/bin/unregistration_cleanup.py cluster_uuid_prism_element_Gravelines
```
<a name="enregpc"></a>                                               
#### **Etape 3.1.3 Enregistrement des deux clusters sur le **Prism Central** d'Erith**

Connectez-vous en ssh sur **Prism Element** de Roubaix :

```bash
ssh nutanix@adresse_ip_privee_prism_element_Roubaix
saisissez le mot de passe de Prism Element
```

Executer cette commande :

```bash
ncli multicluster register-to-prism-central username=admin password=passwod_admin\ external-ip-address-or-svm-ips=adresse_ip_privee_prism_central_Erith
```

Ce message apparait :

```console
Cluster registration is currently in progress. This operation may take a while.
```

Patientez et saisissez cette commande :

```bash
ncli multicluster get-cluster-state
```

Si le cluster est bien connecté à **Prism Central** d'Erith vous verrez apparaitre ces informations :

```console
Registered Cluster Count: 1

    Cluster Id                : xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
    Cluster Name              : Prism-Central-Erith-FQDN
    Is Multicluster           : true
    Controller VM IP Addre... : [adresse_ip_privee_prisme_central_Erith]
    External or Masqueradi... :
    Cluster FQDN              :
    Controller VM NAT IP A... :
    Marked for Removal        : false
    Remote Connection Exists  : true
```


Connectez-vous en ssh sur **Prism Element** de Gravelines :

```bash
ssh nutanix@adresse_ip_prism_element_Gravelines
Saisissez le mot de passe de Prism Element de Gravelines
```

Exécutez cette commande :

```bash
ncli multicluster register-to-prism-central username=admin password=passwod_admin_Erith external-ip-address-or-svm-ips=adresse_ip_privee_prism_central_Erith
```

Ce message apparait :

```console
Cluster registration is currently in progress. This operation may take a while.
```

Patientez et saisissez cette commande :

```bash
ncli multicluster get-cluster-state
```

Si le cluster est bien connecté au **Prism Central** d'Erith vous verrez appparaitre ces informations :

```console
Registered Cluster Count: 1

    Cluster Id                : xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
    Cluster Name              : Prism-Central-Erith-FQDN
    Is Multicluster           : true
    Controller VM IP Addre... : [adresse_ip_privee_prism_central_Erith]
    External or Masqueradi... :
    Cluster FQDN              :
    Controller VM NAT IP A... :
    Marked for Removal        : false
    Remote Connection Exists  : true
```

A partir d'un navigateur WEB connectez-vous sur l'URL de Prism-Central à Erith, vous verrez les trois clusters.

![02 - Prism Central Dashboard 01](images/02-show-prismcentral01.png){.thumbnail}

Les machines virtuelles **Prism Central** de Gravelines et Roubaix ne servent plus, vous pouvez les arrêter.

Au travers du menu principal cliquez sur `Vms`{.action} dans le sous-menu **Compute & Storage**.

![02b - Shutdow Prism Central Gravelines Roubaix 01](images/02-shutdown-prism-central01.png){.thumbnail}

Sélectionnez les machines virtuelles de **Prism Central** de Gravelines et Roubaix et cliquez sur `Guest Shutdown`{.action} à partir du menu `Actions`{.action}

![02b - Shutdow Prism Central Gravelines Roubaix 02](images/02-shutdown-prism-central02.png){.thumbnail}


<a name="paramiscsi"></a>
#### **Etape 3.1.4 Ajout des adresses IP pour les connexions iSCSI sur les trois clusters**

A partir du tableau de bord **Prism Central** cliquez sur le lien vers le `cluster d'Erith`{.action}.

![03 - Add iscsi address Erith 01](images/03-add-iscsi-address-erith01.png){.thumbnail}

Sur le tableau de bord de **Prism Element** cliquez en haut à gauche sur le `nom du cluster`{.action}.

![03 - Add iscsi address Erith 02](images/03-add-iscsi-address-erith02.png){.thumbnail}

Faites défilez la fenêtre, ajouter une `adresse IP non utilisée`{.action} à **ISCSI Data Services IP** et cliquez sur `Save`{.action}.

![03 - Add iscsi address Erith 03](images/03-add-iscsi-address-erith03.png){.thumbnail}

A partir du tableau de bord **Prism Central** cliquez sur le lien vers le `cluster de Gravelines`{.action}.

![03 - Add iscsi address Gravelines 01](images/03-add-iscsi-address-gravelines01.png){.thumbnail}

Sur le tableau de bord de **Prism Element** cliquez en haut à gauche sur le `nom du cluster`{.action}.

![03 - Add iscsi address Gravelines 02](images/03-add-iscsi-address-gravelines02.png){.thumbnail}

Faites défilez la fenêtre, ajouter une `adresse IP non utilisée`{.action} à **ISCSI Data Services IP** et cliquez sur `Save`{.action}.

![03 - Add iscsi address graveline 03](images/03-add-iscsi-address-gravelines03.png){.thumbnail}

A partir du tableau de bord **Prism Central** cliquez sur le lien vers le `cluster de Roubaix`{.action}.

![03 - Add iscsi address Roubaix 01](images/03-add-iscsi-address-roubaix01.png){.thumbnail}

Sur le tableau de bord de **Prism Element** cliquez en haut à gauche sur le `nom du cluster`{.action}.

![03 - Add iscsi address Roubaix 02](images/03-add-iscsi-address-roubaix02.png){.thumbnail}

Faites défilez la fenêtre, ajouter une `adresse IP non utilisée`{.action} à **ISCSI Data Services IP** et cliquez sur `Save`{.action}.

![03 - Add iscsi address Roubaix 03](images/03-add-iscsi-address-roubaix03.png){.thumbnail}

<a name="addsc"></a>
#### **Etape 3.1.5 Création de deux **Storage Containers**** 

Nous allons créer deux **Storage Containers** portant le même nom, un à Roubaix et l'autre à Gravelines. 
 
Depuis le menu principal de **Prism Element** cliquez sur `Storage Containers`{.action} dans le sous-menu **Compute & Storage**.

![05 - Add-storage-container 01](images/05-add-storage-container01.png){.thumbnail}

Cliquez sur `Create Storage Container`{.action}.

![05 - Add-storage-container 02](images/05-add-storage-container02.png){.thumbnail}

Saisissez `UsedForDR` dans **Name**, Choisissez le `cluster de Roubaix` dans **Cluster** et cliquez sur `Create`{.action}.

![05 - Add-storage-container 03](images/05-add-storage-container03.png){.thumbnail}

Cliquez sur `Create Storage Container`{.action}.

![05 - Add-storage-container 04](images/05-add-storage-container04.png){.thumbnail}

Saisissez `UsedForDR` dans **Name**, Choisissez le `cluster de Gravelines` dans **Cluster** et cliquez sur `Create`{.action}.

![05 - Add-storage-container 05](images/05-add-storage-container05.png){.thumbnail}

Dans la liste des **Storages Containers** vous verrez deux **Storage Containers** portant le même Nom.

![05 - Add-storage-container 06](images/05-add-storage-container06.png){.thumbnail}

<a name="deplst"></a>
#### **Etape 3.1.6 Déplacement des machines virtuelles dans le **Storage Container****

Nous allons déplacer le stockage des machines virtuelles sur les **Storage Container** que nous avons créé.

Connectez-vous en SSH sur **Prism Element** du cluster de Roubaix :

```bash
ssh nutanix@adresse_ip_privee_Prism_element_Roubaix
Saisissez le mot de passe du compte Nutanix de Prism Element
```

Exécutez cette commande pour chaque VM que nous allons déplacer dans le **Storage Container** en remplaçant **nomvm** par le nom de la machine virtuelle (Dans notre Plan de reprise d'activité nous avons deux machines virtuelles à Roubaix une avec Windows et un autre sous Linux).

```bash
acli vm.update_container nomvm container=UsedForDR
Saisissez le mot de passe du compte Nutanix de Prism Element
```

Connectez-vous en SSH sur **Prism Element** du cluster de Gravelines :

```bash
ssh nutanix@adresse_ip_privee_Prism_element_Gravelines
Saisissez le mot de passe du compte Nutanix de Prism Element
```

Exécutez cette commande pour chaque VM que nous allons déplacer dans le **Storage Container** en remplaçant **nomvm** par le nom de la machine virtuelle (Dans notre Plan de reprise d'activité nous avons trois machines virtuelles à Gravelines une avec Windows, une autre sous Linux ainsi que la gateway qui donne accès à Internet). 

```bash
acli vm.update_container nomvm container=UsedForDR
Saisissez le mot de passe du compte Nutanix de Prism Element
```
<a name="creacat"></a>
#### **Etape 3.1.7 Création d'une catégorie qui servira lors de la mise en place du P.R.A**

Nous allons créer une catégorie avec deux valeurs dans **Prism Central** pour affectuer les machines virtuelles concernées par la réplication.

Faites défiler le menu principal cliquez sur `Categories`{.action} dans le sous menu `Administration`.

![06 - Add Categorie 01](images/06-add-categories01.png){.thumbnail}

Cliquez sur `New Category`{.action}.

![06- Add Categorie 02](images/06-add-categories02.png){.thumbnail}

Saisissez `Protected VM` dans **Name**, ajouter ces valeurs `Roubaix` et `Gravelines` dans **Values** ensuite cliquez sur `Save`{.action}.

![06 - Add Categorie 03](images/06-add-categories03.png){.thumbnail}

La catégorie apparait dans la liste et elle est prête à être utilisé.

![06 - Add Categorie 04](images/06-add-categories04.png){.thumbnail}

<a name="addvmcat"></a>
#### **Etape 3.1.8 Ajout des machines virtuelles dans les catégories**

Nous allons affecter deux machines virtuelles sur le cluster de Roubaix dans une catégorie et trois machines virtuelles sur le cluster de Gravelines dans une autre catégorie.

Au travers du menu principal de **Prism Central** cliquez sur `Vms`{.action} dans le sous menu **Compute & Storage**.

![07 - Add Categorie to VM Roubaix 01](images/07-add-categorie-to-vm-roubaix01.png){.thumbnail}

Sélectionnez à gauche `les deux machines virtuelles`{.action} de Roubaix, Ensuite au travers du menu **Actions** cliquez sur `Manage Categories`{.action}.

![07 - Add Categorie to VM Roubaix 02](images/07-add-categorie-to-vm-roubaix02.png){.thumbnail}

Ajouter la catégorie `ProcectedVM: Roubaix`, ensuite cliquez sur `Save`{.action}.

![07 - Add Categorie to VM Roubaix 03](images/07-add-categorie-to-vm-roubaix03.png){.thumbnail}

Sélectionnez à gauche `les trois machines virtuelles`{.action} de Gravelines, Ensuite au travers du menu **Actions** cliquez sur `Manage Categories`{.action}

![08 - Add Categorie to VM Gravelines 01](images/08-add-categorie-to-vm-gravelines01.png){.thumbnail}

Ajouter la catégorie `ProcectedVM: Gravelines`, ensuite cliquez sur `Save`{.action}

![08 - Add Categorie to VM Gravelines 02](images/08-add-categorie-to-vm-gravelines02.png){.thumbnail}

<a name="confreplsync"></a>
#### **Etape 3.1.9 Mise en place des réplications synchrones entre Roubaix et Gravelines**

la réplication synchrone permet une réplication permanente avec 0 secondes de pertes de données.

##### **Mise en place de réplication entre Roubaix et Gravelines**

Au travers du menu principal de **Prism Central** cliquez sur `Protection Policies`{.action} dans le sous menu **Data Protection**.

![09 - Create Protection Policy Roubaix 01](images/09-create-data-protection-roubaix01.png){.thumbnail}

Cliquez sur `Create Protection Policy`{.action}.

![09 - Create Protection Policy Roubaix 02](images/09-create-data-protection-roubaix02.png){.thumbnail}

Saisissez `ROUBAIX-TO-GRAVELINES`{.action} dans **Policy name**, gardez **Local AZ** et cliquez sur `Select Cluster`{.action} dans **Primary Location**.

![09 - Create Protection Policy Roubaix 03](images/09-create-data-protection-roubaix03.png){.thumbnail}

Choisissez le cluster de Roubaix et cliquez sur `Save`{.action}.

![09 - Create Protection Policy Roubaix 04](images/09-create-data-protection-roubaix04.png){.thumbnail}

En haut à gauche à coté de **Disaster Recovery** cliquez sur `Enable`{.action}. 

![09 - Create Protection Policy Roubaix 05](images/09-create-data-protection-roubaix05.png){.thumbnail}

Le système contrôle que tout est correct avant d'activer l'option **Disaster Recovery**.

![09 - Create Protection Policy Roubaix 06](images/09-create-data-protection-roubaix06.png){.thumbnail}

Cliquez sur `Enable`{.action} pour activer l'option **Disaster Recovery**. 

![09 - Create Protection Policy Roubaix 07](images/09-create-data-protection-roubaix07.png){.thumbnail}

Cliquez à nouveau sur `Enable`{.action}. 

![09 - Create Protection Policy Roubaix 07](images/09-create-data-protection-roubaix08.png){.thumbnail}

L'activation de l'option **Disaster Recovery** est en cours.

Garder **Local AZ**, sélectionnez le cluster dans **Recovery Location** et cliquez sur `Save`{.action}.

![09 - Create Protection Policy Roubaix 08](images/09-create-data-protection-roubaix09.png){.thumbnail}

Cliquez sur `+ Add Schedule`{.action}.

![09 - Create Protection Policy Roubaix 10](images/09-create-data-protection-roubaix10.png){.thumbnail}

Choisissez ces options `Synchronous`{.action} pour **Protection Type** et `Automatic`{.action} pour **Failure Detection Mode**, ensuite cliquez sur `Save Schedule`{.action}.

![09 - Create Protection Policy Roubaix 11](images/09-create-data-protection-roubaix11.png){.thumbnail}

Cliquez sur `Next`{.action}.

![09 - Create Protection Policy Roubaix 12](images/09-create-data-protection-roubaix12.png){.thumbnail}

Sélectionnez la catégorie `ProtectedVM : Roubaix`{.action} et cliquez sur `Add`{.action}.

![09 - Create Protection Policy Roubaix 13](images/09-create-data-protection-roubaix13.png){.thumbnail}

Cliquez sur `Create`{.action}.

![09 - Create Protection Policy Roubaix 14](images/09-create-data-protection-roubaix14.png){.thumbnail}

Les machines virtuelles de Roubaix sont à présent répliquées vers Gravelines, après une première copie complète, les données seront synchronisées en permanence de Roubaix vers Gravelines.

![09 - Create Protection Policy Roubaix 15](images/09-create-data-protection-roubaix15.png){.thumbnail}

##### **Mise en place de réplication entre Gravelines et Roubaix**

La réplication peut être bidirectionnelle nous allons maintenant créer une réplication de Gravelines vers Roubaix.

Cliquez sur `Create Protection Policy`{.action}.

![10 - Create Protection Policy Gravelines 01](images/10-create-data-protection-gravelines01.png){.thumbnail}

Choisissez comme nom `GRAVELINES-TO-ROUBAIX` dans **Policy Name**, gardez **Local AZ** et choisissez le cluster de Gravelines dans **Primary Location**, ensuite cliquez sur `Save`{.action}.

![10 - Create Protection Policy Gravelines 02](images/10-create-data-protection-gravelines02.png){.thumbnail}

Conservez **Local AZ**, sélectionnez le cluster de Roubaix et cliquez sur `Save`{.action}.

![10 - Create Protection Policy Gravelines 03](images/10-create-data-protection-gravelines03.png){.thumbnail}

Cliquez sur `+ Add Schedule`{.action}.

![10 - Create Protection Policy Gravelines 04](images/10-create-data-protection-gravelines04.png){.thumbnail}

Choisissez ces options `Synchronous`{.action} pour **Protection Type** et  `Automatic`{.action} pour **Failure Detection Mode**, ensuite cliquez sur `Save Schedule`{.action}.

![10 - Create Protection Policy Gravelines 05](images/10-create-data-protection-gravelines05.png){.thumbnail}

Cliquez sur `Next`{.action}.

![10 - Create Protection Policy Gravelines 06](images/10-create-data-protection-gravelines06.png){.thumbnail}

Sélectionnez la catégorie `ProtectedVM : Gravelines`{.action} et cliquez sur `Add`{.action}.

![10 - Create Protection Policy Gravelines 07](images/10-create-data-protection-gravelines07.png){.thumbnail}

Cliquez sur `Create`{.action}.

![10 - Create Protection Policy Gravelines 08](images/10-create-data-protection-gravelines08.png){.thumbnail}

Une deuxième stratégie de protection est en place.

![10 - Create Protection Policy Gravelines 09](images/10-create-data-protection-gravelines09.png){.thumbnail}

<a name="addsublan"></a>
#### **Etape 3.1.10 Création de sous-réseaux nécessaires au plan de reprise d'activité**

Nous allons créer des sous-réseaux qui serviront pour les tests de plans de reprises d'activité intégrés dans Nutanix

Il faut un sous réseau de test par sous réseau existant sur nos clusters, nous avons 3 sous réseaux de production.

- **base** sur le VLAN 0.
- **infra** sur le VLAN 1.
- **production*** sur le VLAN 2.

Nous allons donc créer 3 sous-réseaux supplémentaires sur les clusters de Gravelines et de Roubaix avec ces noms :

- **testbase** sur le VLAN 100.
- **testinfra** sur le VLAN 101.
- **production** sur le VLAN 102.

Aidez-vous de ce guide pour créer des VLAN sur vos clusters Nutanix [Isoler les machines de gestion de la production](https://docs.ovh.com/fr/nutanix/nutanix-isolate-management-machines/).

Six nouveaux sous-réseaux sont visibles au travers de votre interface **Prism Central** dans le tableau de bord **Subnets**

![11 - Create Test Subnet 01](images/11-create-testsubnet01.png){.thumbnail}

<a name="adddr"></a>
#### **Etape 3.1.11 Mise en place des plans de reprises d'activités**

Maintenant que les réplications et les sous-réseaux sont en place nous allons mettre en œuvre des plans de reprises d'activités automatisés ou manuel à la demande pour :

- Migrer des machines virtuelles à chaud entre les deux clusters.
- Tester que la réplication fonctionne correctement.
- Redémarrer automatiquement les machine virtuelles membres du P.R.A en cas de défaillance d'un deux clusters. 

##### **Création du plan de reprise d'activité pour le cluster de Roubaix**

Au travers du menu principal de **Prism Central** cliquez sur `Recovery Plans`{.action} dans le sous-menu **Data Protection**. 

![12 - Create Recovery Plan Roubaix 01](images/12-create-roubaix-recovery-plan01.png){.thumbnail}

Cliquez à Gauche sur `Enable Disaster Recovery`{.action}.

![12 - Create Recovery Plan Roubaix 02](images/12-create-roubaix-recovery-plan02.png){.thumbnail}

Normalement le plan de de reprise doit être activé comme indiqué avec ce message **Disaster Recovery enabled**, cliquez sur la `croix`{.action} à droite pour fermer cette fenêtre. 

![12 - Create Recovery Plan Roubaix 03](images/12-create-roubaix-recovery-plan03.png){.thumbnail}

Cliquez sur `Create New Recovery Plan`{.action}.

![12 - Create Recovery Plan Roubaix 04](images/12-create-roubaix-recovery-plan04.png){.thumbnail}

Choisissez ces informations :

* **Recovery Plan Name** : `Recovery VM from ROUBAIX to GRAVELINES`.

* **Primary Location** : `Local AZ`.
* **Primary Cluster** : `cluster de Roubaix`.

* **Recovery Location** : `Local AZ`.
* **Recovery Cluster** : `cluster de Gravelines`.

* **Failure Execution Mode** : `Automatic`.
* **Execute failover after disconnectivity of** : `30 seconds`.

Ensuite cliquez sur `Next`{.action}.

![12 - Create Recovery Plan Roubaix 05](images/12-create-roubaix-recovery-plan05.png){.thumbnail}

Cliquez sur `+ Add VM(s)`{.action}.

![12 - Create Recovery Plan Roubaix 06](images/12-create-roubaix-recovery-plan06.png){.thumbnail}

Sélectionnez les deux machines virtuelles et cliquez sur `Add`{.action}.

![12 - Create Recovery Plan Roubaix 07](images/12-create-roubaix-recovery-plan07.png){.thumbnail}

Cliquez sur `Next`{.action}.

![12 - Create Recovery Plan Roubaix 08](images/12-create-roubaix-recovery-plan08.png){.thumbnail}

Cliquez sur `OK. Got it`{.action}.

![12 - Create Recovery Plan Roubaix 09](images/12-create-roubaix-recovery-plan09.png){.thumbnail}

Cliquez sur `Stretch networks`{.action}.

![12 - Create Recovery Plan Roubaix 10](images/12-create-roubaix-recovery-plan10.png){.thumbnail}

Cliquez sur `Proceed`{.action}.

![12 - Create Recovery Plan Roubaix 11](images/12-create-roubaix-recovery-plan11.png){.thumbnail}

Choisissez les VLAN qui seront utilisés lors du P.R.A comme ceci :

* **Primary**
    + **Production** : `production`
    + **Test Failback** : `testproduction`
* **Recovery**
    + **Production** : `production`
    + **Test Failback** : `testproduction`

Ensuite cliquez sur `Done`{.action}.

![12 - Create Recovery Plan Roubaix 12](images/12-create-roubaix-recovery-plan12.png){.thumbnail}

##### **Création du plan de reprise d'activité pour le cluster de Roubaix**

Le plan de reprise d'activité est créé pour le site de Roubaix. cliquez sur `Create Recovery Plan`{.action} pour créer le plan de reprise d'activité de Gravelines.

![12 - Create Recovery Plan Roubaix 13](images/12-create-roubaix-recovery-plan13.png){.thumbnail}

Choisissez ces informations :

* **Recovery Plan Name** : `Recovery VM from Gravelines to Roubaix`.

* **Primary Location**: `Local AZ`.
* **Primary Cluster**: `cluster de Gravelines`.

* **Recovery Location**: `Local AZ`.
* **Recovery Cluster**: `cluster de Roubaix`.

* **Failure Execution Mode** : `Automatic`.
* **Execute failover after disconnectivity of** : `30 seconds`.

Ensuite cliquez sur `Next`{.action}.

![13 - Create Recovery Plan Gravelines 01](images/13-create-gravelines-recovery-plan01.png){.thumbnail}

Cliquez sur `+ Add VM(s)`{.action}.

![13 - Create Recovery Plan Gravelines 02](images/13-create-gravelines-recovery-plan02.png){.thumbnail}

Sélectionnez les trois machines virtuelles et cliquez sur `Add`{.action}.

![13 - Create Recovery Plan Gravelines 03](images/13-create-gravelines-recovery-plan03.png){.thumbnail}

Cliquez sur `Next`{.action}.

![13 - Create Recovery Plan Gravelines 04](images/13-create-gravelines-recovery-plan04.png){.thumbnail}

Cliquez sur `Stretch networks`{.action}.

![13 - Create Recovery Plan Gravelines 05](images/13-create-gravelines-recovery-plan05.png){.thumbnail}

Cliquez sur `Proceed`{.action}.

![13 - Create Recovery Plan Gravelines 06](images/13-create-gravelines-recovery-plan06.png){.thumbnail}

Choisissez ces informations :

* **Primary**
    + **Production** : `base`
    + **Test Failback** : `testbase`
* **Recovery**
    + **Production** : `base`
    + **Test Failback** : `testbase`

Ensuite cliquez sur `+ Add Network Mapping`{.action}.

![13 - Create Recovery Plan Gravelines 07](images/13-create-gravelines-recovery-plan07.png){.thumbnail}

Choisissez ces informations :

* **Primary**
    + **Production** : `infra`
    + **Test Failback** : `testinfra`
* **Recovery**
    + **Production** : `infra`
    + **Test Failback** : `testinfra`

Ensuite cliquez sur `+ Add Network Mapping`{.action}.

![13 - Create Recovery Plan Gravelines 08](images/13-create-gravelines-recovery-plan08.png){.thumbnail}

Choisissez ces informations :

* **Primary**
    + **Production** : `production`
    + **Test Failback** : `testproduction`
* **Recovery**
    + **Production** : `production`
    + **Test Failback** : `testproduction`

Ensuite cliquez sur `Done`{.action}.

![13 - Create Recovery Plan Gravelines 09](images/13-create-gravelines-recovery-plan09.png){.thumbnail}

> [!primary]
> 3 réseaux ont été rajoutés dans ce plan de reprise d'activité car la machine virtuelle Gateway utilise ces trois réseaux.
>

Les deux plans de reprises d'activités sont en productions.

![13 - Create Recovery Plan Gravelines 10](images/13-create-gravelines-recovery-plan10.png){.thumbnail}


<a name="validation"></a>
### Etape 3.2 Validation du plan de reprise d'activité 

<a name="ctrldr"></a>
#### **Etape 3.2.1 Contrôle du plan de reprise d'activité**

##### **Utilisation de l'option validation dans le plan de reprise d'activité**

Il est possible de valider le plan de reprise d'activité au travers de **Prism Central**.

Cliquez sur le `Recovery VM from Roubaix`{.action} à valider et tester.

![14 - Validate test recovery plan 01](images/14-validate-test-recovery-plan01.png){.thumbnail}

Cliquez sur `Validate`{.action}

![14 - Validate test recovery plan 02](images/14-validate-test-recovery-plan02.png){.thumbnail}

Sélectionnez le cluster de Roubaix pour **Entity Failing Over From** et le cluster de Gravelines pour **Entity Failing Over To**. Ensuite cliquez sur `Proceed`{.action}

![14 - Validate test recovery plan 03](images/14-validate-test-recovery-plan03.png){.thumbnail}

Le plan de de reprise est validé, cliquez sur `Close`{.action}

![14 - Validate test recovery plan 04](images/14-validate-test-recovery-plan04.png){.thumbnail}

##### **Test du plan de reprise d'activité**

Nous avons la possibilité de tester le plan de reprise d'activité sans impacter la production. Le test crée des machines virtuelles avec des noms différents sur le cluster de destination dans les VLAN créés précédemment.

Cliquez sur `Test`{.action}.

![14 - Validate test recovery plan 05](images/14-validate-test-recovery-plan05.png){.thumbnail}

Sélectionnez le cluster de Roubaix pour **Entity Failing Over From** et le cluster de Gravelines pour **Entity Failing Over To**. Ensuite cliquez sur `Test`{.action}

![14 - Validate test recovery plan 06](images/14-validate-test-recovery-plan06.png){.thumbnail}

> [!primary]
> Assurez-vous d'avoir les bonnes licences, Si vous avez choisi un cluster avec des licences chez OVHcloud il est nécessaire d'avoir souscrit le pack **Nutanix Advanced** sur les clusters de Roubaix et Gravelines.
>

Cliquez sur `Execute Anyway`{.action}.

![14 - Validate test recovery plan 07](images/14-validate-test-recovery-plan07.png){.thumbnail}

Allez dans le tableau de bord des VM dans **Prism Central** et vous verrez les machines virtuelles de tests qui sont créés avec les données répliquées.

![14 - Validate test recovery plan 08](images/14-validate-test-recovery-plan08.png){.thumbnail}

Revenez sur votre plan de reprise et cliquez sur `Clean-up test Entities`{.action} pour supprimer les machines virtuelles de test.

![14 - Validate test recovery plan 09](images/14-validate-test-recovery-plan09.png){.thumbnail}

cliquez sur `Clean Up`{.action}

![14 - Validate test recovery plan 10](images/14-validate-test-recovery-plan10.png){.thumbnail}

<a name="livemigration"></a>
#### **Etape 3.2.2 Live migration des machines virtuelles de Roubaix sur Gravelines**

Sur une infrastructure entièrement opérationnelle il est possible de déplacer des machines virtuelles d'un cluster à l'autre sans coupure de service.

Allez sur une machine virtuelle qui se trouve à Roubaix et qui fait partie du plan de reprise nous allons lancer un ping vers le serveur DNS OVHcloud **213.186.33.99**.

![15 - livemigration Roubaix to Gravelines 00](images/15-livemigration-roubaix-to-gravelines00.png){.thumbnail}

Revenez sur votre plan de reprise et cliquez sur `Failover`{.action} dans le menu `More`.

![15 - livemigration Roubaix to Gravelines 01](images/15-livemigration-roubaix-to-gravelines01.png){.thumbnail}

Choisissez `Planned Failover`{.action}, cochez `Live Migrate Entities`{.action}.

Prenez le cluster de Roubaix pour **Entity Failing Over From** et le cluster de Gravelines pour **Entity Failing Over To**.

Ensuite cliquez sur `Failover`{.action}

![15 - livemigration Roubaix to Gravelines 02](images/15-livemigration-roubaix-to-gravelines02.png){.thumbnail}

Saisissez `Failover`{.action} et cliquez sur `Failover`

![15 - livemigration Roubaix to Gravelines 03](images/15-livemigration-roubaix-to-gravelines03.png){.thumbnail}

La migration à chaud est en cours.

![15 - livemigration Roubaix to Gravelines 04](images/15-livemigration-roubaix-to-gravelines04.png){.thumbnail}

La migration s'est terminée avec succès sans coupure de service.

![15 - livemigration Roubaix to Gravelines 05](images/15-livemigration-roubaix-to-gravelines05.png){.thumbnail}

Vous pouvez revenir sur la machine virtuelle et constater que le ping continue à fonctionner même si la machine virtuelle a été déplacé d'un cluster à l'autre.

![15 - livemigration Roubaix to Gravelines 06](images/15-livemigration-roubaix-to-gravelines06.png){.thumbnail}

<a name="aftermigration"></a>
#### **Etape 3.2.3 Opérations à effectuer après une migration à chaud**

Après une migration il est nécessaire d'inverser la réplication et le fonctionnement du plan de reprise d'activité.


##### **Inversion de la réplication**

Au travers du menu principal de **Prism Central** cliquez sur `Protections Policies`{.action} dans le sous-menu **Data Protection**.

![16 - invert replication after failover 01](images/16-invert-replication-after-failover01.png){.thumbnail}

Cliquez sur le plan de protection nommé `ROUBAIX TO GRAVELINES`{.action}.

![16 - invert replication aftr failover 02](images/16-invert-replication-after-failover02.png){.thumbnail}

Cliquez sur `Update`{.action}.

![16 - invert replication after failover 03](images/16-invert-replication-after-failover03.png){.thumbnail}

Positionnez la souris en dessous du nom du cluster de Roubaix dans **Primary Location** et cliquez sur `Edit`{.action}.

![16 - invert replication after failover 04](images/16-invert-replication-after-failover04.png){.thumbnail}

Cochez le cluster de `Gravelines`{.action} à la place de celui de Roubaix.

![16 - invert replication after failover 05](images/16-invert-replication-after-failover05.png){.thumbnail}

Cliquez sur `Save`{.action}.

![16 - invert replication after failover 06](images/16-invert-replication-after-failover06.png){.thumbnail}

Cliquez sur `Update Location`{.action}.

![16 - invert replication after failover 07](images/16-invert-replication-after-failover07.png){.thumbnail}

Positionnez la souris en dessous du nom du cluster de Gravelines dans **Recovery Location** et cliquez sur `Edit`{.action}.

![16 - invert replication after failover 08](images/16-invert-replication-after-failover08.png){.thumbnail}

Sélectionnez le cluster de `Roubaix`{.action} à la place de celui de Gravelines.

![16 - invert replication after failover 09](images/16-invert-replication-after-failover09.png){.thumbnail}

Cliquez sur `Save`{.action}.

![16 - invert replication after failover 10](images/16-invert-replication-after-failover10.png){.thumbnail}

Cliquez sur `Update Location`{.action}.

![16 - invert replication after failover 11](images/16-invert-replication-after-failover11.png){.thumbnail}

Cliquez sur `Next`{.action}.

![16 - invert replication after failover 12](images/16-invert-replication-after-failover12.png){.thumbnail}

Cliquez sur `Update`{.action}.

![16 - invert replication after failover 12](images/16-invert-replication-after-failover13.png){.thumbnail}

La réplication est inversée cliquez sur la `croix`{.action} pour fermer le plan de protection.

##### **Inversion du plan de reprise d'activité**

Au travers du menu principal de **Prism Central** cliquez sur `Recovery Plans`{.action} dans le sous menu **Data Protection**.

![17 - invert recovery plan after failover 01](images/17-invert-recovery-plan-after-failover01.png){.thumbnail}

Cliquez sur `Recovery VM from Roubaix to Gravelines`{.action}.

![17 - invert recovery plan after failover 02](images/17-invert-recovery-plan-after-failover02.png){.thumbnail}

Au travers du menu **More** cliquez sur `Update`{.action}.

![17 - invert recovery plan after failover 03](images/17-invert-recovery-plan-after-failover03.png){.thumbnail}

Dans **locations** mettez le cluster de Gravelines dans **Primary CLusters** et le cluster de Roubaix dans **Recovery Clusters** et cliquez sur `Next`{.action}.

![17 - invert recovery plan after failover 04](images/17-invert-recovery-plan-after-failover04.png){.thumbnail}

Cliquez sur `Proceed`{.action}.

![17 - invert recovery plan after failover 05](images/17-invert-recovery-plan-after-failover05.png){.thumbnail}

Cliquez sur `Next`{.action}.

![17 - invert recovery plan after failover 06](images/17-invert-recovery-plan-after-failover06.png){.thumbnail}

Choisissez ces informations :

* **Primary**
    + **Production** : `production`
    + **Test Failback** : `testproduction`
* **Recovery**
    + **Production** : `production`
    + **Test Failback** : `testproduction`

Et cliquez sur `Done`{.action}.

![17 - invert recovery plan after failover 07](images/17-invert-recovery-plan-after-failover07.png){.thumbnail}

> [!primary]
> La réplication et le plan de reprise ont été inversés à la suite d'une migration des machines virtuelles de Roubaix vers Gravelines.
>
> Pour revenir à la situation d'origine il faut effectuer à nouveau une migration à chaud et inverser la réplication et le plan de reprise d'activité.
> Il est possible d'utiliser cette partie du guide en cas de déclenchement du plan de reprise d'activité en raison de l'indisponibilité d'un cluster.
>

<a name="epmcr"></a>
#### **Etape 3.2.4 Exécution du plan de reprise d'activité en condition réelle**

Nous allons simuler une perte totale de connexion à Gravelines où se trouve trois machines virtuelles dans le plan de reprise d'activité (la passerelle Internet et deux autres machines virtuelles).

Connectez-vous en ligne de commande et exécuter un ping permanent vers l'adresse publique de la passerelle.

```bash
## Ping à partir d'un console linux distante
ping xx.xx.xx.xx
Reply from xx.xx.xx.xx: bytes=32 time=21ms TTL=58
Reply from xx.xx.xx.xx: bytes=32 time=21ms TTL=58
Reply from xx.xx.xx.xx: bytes=32 time=23ms TTL=58
Reply from xx.xx.xx.xx: bytes=32 time=20ms TTL=58
```

Laisser la commande ping tourner en permanence et retournez dans **Prism Central**

Au travers du menu principal cliquez sur `VMs`{.action}. dans le sous-menu **Compute & Storage** 

![18 - fail on Gravelines 01](images/18-fail-on-gravelines01.png){.thumbnail}

Les trois machines virtuelles du plan de reprise d'activité sont fonctionnelles.

![18 - fail on Gravelines 02](images/18-fail-on-gravelines02.png){.thumbnail}

Une déconnexion des trois noeuds du cluster de Gravelines va être faites.

> [!primary]
> La déconnexion est effectuée en supprimant du vRack les 3 nœuds du cluster de Gravelines.
>

Revenez sur la console qui exécute le ping vers la passerelle, vous allez constater une perte de connexion.

```bash
Reply from xx.xx.xx.xx: bytes=32 time=20ms TTL=58
Reply from xx.xx.xx.xx: bytes=32 time=21ms TTL=58
Reply from xx.xx.xx.xx: bytes=32 time=20ms TTL=58
Reply from xx.xx.xx.xx: bytes=32 time=20ms TTL=58
Reply from xx.xx.xx.xx: bytes=32 time=20ms TTL=58
Request timed out.
Request timed out.
Request timed out.
Request timed out.
```

Cliquez en haut à droite sur les `tâches`{.action} dans **Prism Central pour afficher le lancement des tâches et notamment **Recovery plan execute**.

![18 - fail on Gravelines 03](images/18-fail-on-gravelines03.png){.thumbnail}

> [!warning]
> Lors d'un incident sur la totalité d'un cluster (Nombres de nœud insuffisants pour fonctionner, ou une coupure réseau) les machines virtuelles qui font partie du P.R.A et qui sont sur ce cluster vont être démarrées sur l'autre cluster. 
> Le RPO est de 0 secondes (Recovery Point Objective) ce qui signifie qu'aucunes pertes de données ne sera à déplorer.
>
> Par contre le redémarragage des machines virtuelles sur l'autre cluster va mettre un certain temps. Dans ce guide 3 machines virtuelles sont redémarrées sur le cluster distant, 4 minutes sont nécessaire pour le démarrage des machines virtuelles. Ce temps est mesurable en effectuant régulièrerment des tests sur les plans de reprise d'activité.
>

Revenez sur la console texte et vous allez voir que le ping fonctionne à nouveau.

```bash
Request timed out.
Reply from xx.xx.xx.xx: bytes=32 time=20ms TTL=58
Reply from xx.xx.xx.xx: bytes=32 time=19ms TTL=58
Reply from xx.xx.xx.xx: bytes=32 time=18ms TTL=58
Reply from xx.xx.xx.xx: bytes=32 time=18ms TTL=58
Reply from xx.xx.xx.xx: bytes=32 time=19ms TTL=58
Reply from xx.xx.xx.xx: bytes=32 time=19ms TTL=58
```

Allez sur **Prism Central** dans la gestion des machines virtuelles, vous verrez les trois machines virtuelles du plan de reprise en double, elles sont notées comme démarrées mais réellement ce ne sont que celles qui ont redémarrés sur Roubaix qui fonctionnent.

![18 - fail on Gravelines 04](images/18-fail-on-gravelines04.png){.thumbnail}

Nous allons reconnecter les trois nœuds dans le vRack pour revenir en mode normal.

Après le retour à la normale les machines virtuelles qui se trouvent sur le cluster d'origine sont toujours visibles mais éteintes. Vous pouvez les supprimer ou les conserver pour en cas de problèmes sur les machines virtuelles qui sont redémarrées.

![18 - fail on Gravelines 05](images/18-fail-on-gravelines05.png){.thumbnail}

Il est possible de voir l'historique de actions de **Disaster Recovery** dans **Prism Central**.

Cliquez sur `l'engrenage`{.action} en haut à droite pour aller dans la configuration de **Prism Central**.

![19 - show Witness information 01](images/19-show-witness-information01.png){.thumbnail}

Cliquez à gauche sur `Witness`{.action} et cliquez sur `View Usage History`{.action}.

![19 - show Witness information 02](images/19-show-witness-information02.png){.thumbnail}

La liste des événemments survenus apparait, cliquez sur `Close pour fermer`{.action}.

![19 - show Witness information 03](images/19-show-witness-information03.png){.thumbnail}


<a name="gofurther"></a>
## Aller plus loin

[Interconnexion de clusters au travers du vRack](https://https://docs.ovh.com/fr/nutanix/nutanix-vrack-interconnection/)

[Plan de reprise d'activité sous Nutanix](https://docs.ovh.com/fr/nutanix/disaster-recovery-plan-overview/)

[Réplication asynchrone ou NearSync au travers de Prism Element](https://docs.ovh.com/fr/nutanix/prism-element-nutanix-replication/)

[Réplication avancée avec Leap](https://docs.ovh.com/fr/nutanix/leap-replication/)

[Présentation des vRack](https://www.ovh.com/fr/solutions/vrack/)

[AHV Metro - Witness Option](https://portal.nutanix.com/page/documents/details?targetId=Leap-Xi-Leap-Admin-Guide-v2022_6:ecd-ecdr-witness-syncrep-pc-c.html)


Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.


