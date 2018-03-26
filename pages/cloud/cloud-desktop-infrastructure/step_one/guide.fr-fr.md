---
title: Étape 1 - votre plateforme VMware Horizon 7.1
slug: plateforme-horizon-7
excerpt: Découvrez comment vous connecter pour la première fois à VMware Horizon 7.1
section: Mise en place
order: 1
---

**Dernière mise à jour le 14/02/2018**

## Objectif

À travers cinq grandes étapes, nous allons vous expliquer comment prendre en main votre [Cloud Desktop Infrastructure](https://www.ovh.com/fr/cloud/cloud-desktop/infrastructure/){.external}.

**Ce premier guide vous explique comment démarrer sur votre plateforme VMware Horizon 7.1**.

Si vous souhaitez découvrir l'offre n'hésitez pas à consulter cette vidéo :

<iframe width="560" height="315" src="https://www.youtube.com/embed/cFnpnANQHzQ?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Prérequis

- Avoir reçu vos accès au [Cloud Desktop Infrastructure](https://www.ovh.com/fr/cloud/cloud-desktop/infrastructure/){.external} par e-mail.

## En pratique

### Informations générales

La plateforme VMware Horizon 7.1 est composée de plusieurs éléments :

- une interface d'administration VMware Horizon 7.1 ;
- une adresse d'accès (URL) à votre première flotte de bureaux virtuels (pool) ;
- une plateforme [Private Cloud](https://www.ovh.com/fr/private-cloud/){.external} pour y déployer les modèles de machines virtuelles (VM) et les bureaux virtuels.


### Infrastructure

![infrastructure de VMware Horizon 7.1](images/1200.png){.thumbnail}

L'infrastructure d'administration (*View ConnectionServer*, *View composerServer*, *ActiveDirectory*) est déployée, administrée et supervisée par OVH pour ne pas affecter les capacités des ressources mises à disposition pour le déploiement des pools.

OVH déploie des routeurs virtuels (vRouter OVH) et les *AccessPoint* permettant l'accès des pools aux ressources du Private Cloud livré avec votre plateforme.

Par défaut, un réseau privé avec un *AccessPoint* est configuré à la livraison de la plateforme. Il est possible d'en ajouter d'autres via l'espace client.


### Livraison

Après avoir réglé votre bon de commande, vous recevez dans l'heure qui suit l'e-mail ci-dessous. Vous y retrouverez l'intégralité des éléments vous permettant de vous connecter à votre infrastructure afin de créer et d'administrer votre premier pool. 

> [!secondary]
>
> Chère cliente, cher client,
>
> Vous venez d'installer sur votre datacenter l'option Virtual Desktop Infrastructure (VDI) et nous vous en remercions.
>
> 
> Vous trouverez ci-dessous les identifiants vous permettant d’accéder à votre service :
>
> 
> * desktop administration access : https://#URL#/admin
> 
> * identifiant : #USERNAME#
> 
> * mot de passe : #PASSWORD#
> 
> 
> Une connexion à votre Private Cloud est requise pour administrer vos templates.
>
> Vous pouvez y accéder :
> 
> - via le client vSphere
> 
>   * Pour télécharger le client : https://#VPNHOSTNAME#/client/VMware-viclient.exe
> 
>   * Adresse IP : #VPNHOSTNAME#
>
> 
> - via le client web vSphere
> 
>   *  https://#VPNHOSTNAME#/vsphere-client
>
> N.B. : vSphere utilise ces ports d'accès : 80, 443 et 8443. Pour créer votre premier pool, vous devez utiliser les informations suivantes :
>
> 
> * desktop access : https://#POOLURL#
> 
> * réseau DHCP : #PORTGROUP#
>
> 
> Voici les dix utilisateurs du domaine :
> 
> * vdi1 : #USER1#
> 
> * vdi2 : #USER2#
> 
> * vdi3 : #USER3#
> ...
>
> 
> Pour vous accompagner, n’hésitez pas à consulter la documentation de la solution Cloud Desktop Infrastructure à cette adresse :
> 
>  
> https://www.ovh.com/fr/cloud/cloud-desktop/infrastructure/
>
> 
> Vous pouvez également poser vos questions et partager votre expérience sur notre mailing list :
>
> 
> cdi@ml.ovh.net
> 
>  
> Nous vous remercions pour la confiance que vous accordez à OVH et restons à votre disposition.
> 
> L'équipe Cloud Desktop Infrastructure
> 


Voyons maintenant comment [créer un modèle de pool](https://docs.ovh.com/fr/cloud-desktop-infrastructure/create-pool/){.external}.


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.