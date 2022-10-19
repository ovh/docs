---
title: Configuration d'un plan de reprise d'activité avec Metro
slug: metro-availability
excerpt: "Mise en oeuvre de Metro pour un plan de reprise d'activité"
section: Plan de Reprise d'Activité
order: 06
---

**Dernière mise à jour le 13/10/2022**

## Objectif

** Ce guide vous présente la solution Metro qui permet un plan de reprise d'activité automatisé** 

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Prérequis

- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Être connecté sur vos clusters via Prism Central.

## Présentation

Nous allons mettre en place un plan de reprise d'activité bi-directionnel entre deux clusters avec ce matériel :

- Un cluster Nutanix à ROUBAIX
- Un cluster Nutanix à GRAVELINES
- Un cluster Nutanix à ERTITH uniquement pour héberger Prism Central 


Nous n'utiliserons qu'un seul vRack qui contiendra

- Les clusters Nutanix.
- Les loadbalancers.
- Le serveur Standalone avec Prism Central.
- les adresses IP additionnelles sur le rtvRack.

Vous trouverez ci-dessous le schéma de cette configuration sur trois sites:

![00 - Metro Availability Diagram 01](images/00-metro-availability-diagram01.png)

## En pratique

Voici la marche à suivre pour mettre en place notre solution de P.R.A. (Plan de reprise d'activité)

Le informations techniques utilisés par notre guide sont les suivantes :

- Cluster de ROUBAIX :
    + Serveur 1 : adresse VM **CVM** `192.168.0.1`, adresse IP hyperviseur **AHV** `192.168.0.21`.
    + Serveur 2 : adresse VM **CVM** `192.168.0.2`, adresse IP hyperviseur **AHV** `192.168.0.22`.
    + Serveur 3 : adresse VM **CVM** `192.168.0.3`, adresse IP hyperviseur **AHV** `192.168.0.23`.
    + Adresse virtuelle de **Prism Element** : `192.168.0.100`.
    + Adresse IP **Prism Central** :`192.168.0.101`.
    + Passerelle : `192.168.3.254`.
    + Masque : `255.255.252.0`
    + Version du cluster : `6.5`

- Cluster de GRAVELINES :
    + Serveur 1 : adresse VM **CVM** `192.168.1.1`, adresse IP hyperviseur **AHV** `192.168.1.21`.
    + Serveur 2 : adresse VM **CVM** `192.168.1.2`, adresse IP hyperviseur **AHV** `192.168.1.22`.
    + Serveur 3 : adresse VM **CVM** `192.168.1.3`, adresse IP hyperviseur **AHV** `192.168.1.23`.
    + Adresse virtuelle de **Prism Element** : `192.168.1.100`.
    + Adresse IP **Prism Central** :`192.168.1.101`.
    + Passerelle : `192.168.3.254`.
    + Masque : `255.255.252.0`
    + Version du cluster : `6.5`.

- Cluster de ERITH :
    + Serveur 1 : adresse VM **CVM** `192.168.2.1`, adresse IP hyperviseur **AHV** `192.168.2.21`.
    + Serveur 2 : adresse VM **CVM** `192.168.2.2`, adresse IP hyperviseur **AHV** `192.168.2.22`.
    + Serveur 3 : adresse VM **CVM** `192.168.2.3`, adresse IP hyperviseur **AHV** `192.168.2.23`.
    + Adresse virtuelle de **Prism Element** : `192.168.2.101`.
    + Adresse IP **Prism Central** :`192.168.2.100`.
    + Passerelle : `192.168.3.254`.
    + Masque : `255.255.252.0`
    + Version du cluster : `6.5`.


### Interconnexion des trois clusters

Aidez-vous de ce guide pour interconnecter les deux premiers clusters [https://docs.ovh.com/fr/nutanix/nutanix-vrack-interconnection/].

Pour configurer le troisième cluster à Erith il faudra réutiliser la procédure pour l'interconnexion des deux clusters mais cette fois ce sera ERITH -> GRAVELINES à la place de ROUBAIX -> GRAVELINES

Après avoir interconnectés vos 3 serveurs et finit la configurations des **Loadbalancer** vous verrez dans la configuration du vRack 

- 9 Dedicated servers (3 par cluster)
- 3 adresses IP
- 3 Load Balancer

vous pous pourrez vous connecter aux URL des machines virtuelles **Prism Central** depuis l'extérieur avec les URL d'origine de chaque cluster qui ont la forme **https://cluster-XXXX.nutanix.ovh.net:9440**

### Deconnexion du Prism Central d'origine sur les deux clusters qui seront répliqués

Maintenant que les trois clusters sont reliés sur le même vRack nous dissocier le cluster de Roubaix et Celui de Gravelines de leur machine virtuelle **Prism Central** pour la connecter à la machine virtuelle **Prism Central** du site d'ERITH

Ces opérations se font en ligne de commande en ssh avec l'adresse IP de **Prism Element**, vous pouvez utiliser le **Load Balancer** pour ajouter une connexion en ssh vers l'adresse IP de **Prism Element** vous pouvez vous aider de l'ensemble de ces guides [OVHcloud Load Balancer](https://docs.ovh.com/fr/load-balancer/)

connectez-vous sur l'adresse IP privé du Prism Element de Roubaix à l'aide de ces commandes :

```bash
ssh nutanix@adresse_ip_pe_roubaix
saississez le mot de passe de Prism Element
ncli multicluster remove-from-multicluster external-ip-address-or-svm-ips=192.168.0.101\
username=admin password=mdp_pe_roubaix force=true
```

Ce message apparait lors de la deconnexion à Prism Central.

```console
Cluster unregistration is currently in progress. This operation may take a while.
```

Saisissez cette commande

```bash
ncli cluster info
```

Notez la valeur de **Cluster UUID* qui doit avoir cette forme xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

Deconnectez-vous de **Prism Element** et connectez vous en SSH sur **Prism Central**

```bash
ssh nutanix@adresse_ip_pc_roubaix
saississez le mot de passe de Prism Central
python /home/nutanix/bin/unregistration_cleanup.py cluster_uuid_pe
```

connectez-vous sur l'adresse IP privé du Prism Element de Gravelines à l'aide de ces commandes

```bash
ssh nutanix@adresse_ip_pe_gravelines
saississez le mot de passe de Prism Element
ncli multicluster remove-from-multicluster external-ip-address-or-svm-ips=192.168.0.101\
username=admin password=mdp_pe_gravelines force=true
```

Ce message apparait lors de la deconnexion à Prism Central.

```console
Cluster unregistration is currently in progress. This operation may take a while.
```

Saisissez cette commande

```bash
ncli cluster info
```

Notez la valeur de **Cluster UUID* qui doit avoir cette forme xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

Deconnectez-vous de **Prism Element** et connectez vous en SSH sur le **Prism Central** de Gravelines

```bash
ssh nutanix@adresse_ip_pc_gravelines
saississez le mot de passe de Prism Central
python /home/nutanix/bin/unregistration_cleanup.py cluster_uuid_pe
```
                                                
### Connexion des deux clusters au Prism Central distant servant de témoin

Connectez-vous en ssh sur le  **Prism Element de Roubaix** :

```bash
ssh nutanix@adresse_ip_pe_roubaix
ncli multicluster register-to-prism-central username=admin password=passwod_admin external-ip-address-or-svm-ips=adresse_ip_pc_erith
```

Ce message apparait

```console
Cluster registration is currently in progress. This operation may take a while.
```

Patientez et saisissez cette commande

```bash
ncli multicluster get-cluster-state
```

Si le cluster est bien connecté à **Prism Central** d'Erith vous verrez appparaitre ces informations :

```console
Registered Cluster Count: 1

    Cluster Id                : xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
    Cluster Name              : FQDN-Prism-Central-Erith
    Is Multicluster           : true
    Controller VM IP Addre... : [adresse_ip_PC_Erith]
    External or Masqueradi... :
    Cluster FQDN              :
    Controller VM NAT IP A... :
    Marked for Removal        : false
    Remote Connection Exists  : true
```

Connectez-vous en ssh sur le  **Prism Element de Gravelines** :

```bash
ssh nutanix@adresse_ip_pe_gravelines
ncli multicluster register-to-prism-central username=admin password=passwod_admin_erith external-ip-address-or-svm-ips=adresse_ip_pc_erith
```

Ce message apparait

```console
Cluster registration is currently in progress. This operation may take a while.
```

Patientez et saisissez cette commande

```bash
ncli multicluster get-cluster-state
```

Si le cluster est bien connecté à **Prism Central** d'Erith vous verrez appparaitre ces informations :

```console
Registered Cluster Count: 1

    Cluster Id                : xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
    Cluster Name              : FQDN-Prism-Central-Erith
    Is Multicluster           : true
    Controller VM IP Addre... : [adresse_ip_PC_Erith]
    External or Masqueradi... :
    Cluster FQDN              :
    Controller VM NAT IP A... :
    Marked for Removal        : false
    Remote Connection Exists  : true
```

Connectez-vous au Prism Central sur site d'ERITH, vous verrez trois clusters Dans le panneau **Cluster Quick Access**. Nous allons mettre en place la solution de P.R.A (Plan de reprise d'activité) entre les deux clusters qui sont distant de ce Prism Central à Roubaix et Gravelines

### Création de deux **Storage Containers** sur chacun des clusters

### Création d'un catégorie qui servira lors de la mise en place du P.R.A

### Activation de la réplication synchrone

#### Déplacement des machines virtuelles dans le **Storage Container** 

Connectez-vous à **Prism Element** de Roubaix et exécuter cette commande pour déplacer une machine virtuelle dans le **Storage Container** qui sera utilsé lors du plan de reprise d'activité. 

```bash
ssh nutanix@adresse_ip_pe_roubaix
acli vm.update_container nomvmmembrepra container=UsedForDR
```

> [Primary]
> Cette opération sera à faire sur chaque VM qui devra être répliquée
>

Connectez-vous à **Prism Element** de Gravelines et exécuter cette commande pour déplacer une machine virtuelle dans le **Storage Container** qui sera utilsé lors du plan de reprise d'activité. 

```bash
ssh nutanix@adresse_ip_pe_gravelines
acli vm.update_container nomvmmembrepra container=UsedForDR
```

> [Primary]
> Cette opération sera à faire sur chaque VM qui devra être répliquée
>






### Activation du plan de reprise d'activité

### Test de bon fonctionnement

#### Utilisation de la configuration de test dans plan de reprise

#### Mise en indisponibilité sur 




## Aller plus loin




[Interconnexion de clusters au travers du vRack](https://https://docs.ovh.com/fr/nutanix/nutanix-vrack-interconnection/)

[Plan de reprise d'activité sous Nutanix](https://docs.ovh.com/fr/nutanix/disaster-recovery-plan-overview/)

[Réplication asynchrone ou NearSync au travers de Prism Element](https://docs.ovh.com/fr/nutanix/prism-element-nutanix-replication/)

[Réplication avancée avec Leap](https://docs.ovh.com/fr/nutanix/leap-replication/)

[Présentation des vRack](https://www.ovh.com/fr/solutions/vrack/)

[AHV Metro (Witness Option)][https://portal.nutanix.com/page/documents/details?targetId=Leap-Xi-Leap-Admin-Guide-v2022_6:ecd-ecdr-witness-syncrep-pc-c.html]


Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.


