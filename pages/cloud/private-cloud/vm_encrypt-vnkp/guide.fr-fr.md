---
title: Activation du chiffrement des machines virtuelles (VM Encryption) avec vnkp
slug: vm-encrypt-vpnkp
excerpt: Découvrez comment mettre en oeuvre le chiffrement de vos machines virtuelles avec vnkp (Vsphere Native Key Provider)
section: Fonctionnalités VMware vSphere
order: 07
---

**Dernière mise à jour le 01/07/2020**

## Objectif

Ce guide a pour objectif d'expliquer les détails de la mise en oeuvre de VM Encryption sur l'offre Private Cloud de OVHcloud, en employant vNKP le serveur de clé interne à vsPhere disponible depuis la version 7.0 update 2.


**Découvrez comment mettre en oeuvre le chiffrement de vos machines virtuelles avec VM Encryption.**

## Prérequis

- Avoir souscrit une offre [Private Cloud](https://www.ovh.com/fr/private-cloud/){.external}.
- Utiliser un cluster vSphere en version 7.0 Update 2 au minimum. 
- Avoir accès à l’interface de gestion vSphere.


## Présentation

vNKP (Vcenter Native Key provider) est présent sur vSphere 7.0 Update 2, c'est un serveur de clé de chiffrement interne ne necessitant pas de serveur KMS, il est possible de l'activer dans l'espace client OVHcloud et administrable à partir de la console PCC.



## En pratique


<!--- Partie à écrire dès que la fonctionnalité sera présente

### Autorisation de la fonctionnalité au travers de l'espace client OVHcloud

-->

### Création d'une clé vNKP

Nous allons créer la clé de chiffrement

Connectez-vous à l'interface vSPHERE à l'aide de ce guide [Se connecter à l'interace vSphere](https://docs.ovh.com/fr/private-cloud/connexion-interface-vsphere/)

Cliquez en haut à gauche sur le la racine du `cluster`{.action}, ensuite cliquez sur `Configurer`{.action} dans la barre des menu et choisissez `Fournisseurs de clés`{.action}.

![01 Create KEY 01](images/01-create-key01.png)

Cliquez sur le bouton `Ajouter`{.action} et choississez dans le menu `Ajouter un fournisseur de clés natif`{.action}.

![01 Create KEY 02](images/01-create-key02.png)

Saisissez un nom dans `Nom` et  Cliquez sur `AJOUTER UN FOURNISSEUR DE CLÉS`{.action}.

![01 Create KEY 03](images/01-create-key03.png)

Cliquez sur le bouton `SAUVEGARDE`{.action} à gauche pour protéger la sauvegarde de la clé par un mot de passe.

![01 Create KEY 04](images/01-create-key04.png)

Cliquez sur `La case à cocher`{.action} à gauche pour protéger la sauvegarde de la clé par un mot de passe.

![01 Create KEY 05](images/01-create-key05.png)

Saisissez `le mot de passe ainsi que sa confirmation` ensuite cliquez sur `J'ai enregistré le mot de passe dans un lieu sûr`{.action} et cliquez sur `SAUVEGARDER LE FOURNISSEUR DE CLÉS`{.action}.

![01 Create KEY 06](images/01-create-key06.png)

Il est possible maintenant d'utiliser la clé pour chiffrer des machines virtuelles.

[01 Create KEY 07](images/01-create-key07.png)






### Chiffrement d'une machine virtuelle




### Migration de la solution KMS vers vnkp


## Aller plus loin

[Présentation de Vsphere Native Key Provider](https://core.vmware.com/native-key-provider)

[Documentation Vsphere Native Key Profider](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.security.doc/GUID-54B9FBA2-FDB1-400B-A6AE-81BF3AC9DF97.html)

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
