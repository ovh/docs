---
title: Cloner une VM
slug: cloner-une-vm
excerpt: Découvrez comment cloner une VM existante via vSphere
section: Gestion des machines virtuelles
order: 07
---

**Dernière mise à jour le 29/06/2020**

## Objectif

Le clonage d'une VM permet de créer une copie de la VM source.

**Ce guide explique comment réaliser cette opération**

## Prérequis

- Posséder un produit [Hosted Private Cloud](https://www.ovhcloud.com/fr-ca/enterprise/products/hosted-private-cloud/){.external}.
- Disposer d'au moins une VM dans votre cluster.
- Être connecté à votre [interface vSphere](../connexion-interface-vsphere/).

## En pratique

### Cloner la VM

Dans votre [interface vSphere](../connexion-interface-vsphere/), placez-vous dans la vue `Hôtes et clusters`.

Faites un clic-droit sur la VM à cloner puis cliquez sur `Cloner`{.action} et sur `Cloner vers une machine virtuelle...`{.action}. 

![Cloner vers une VM](images/clonevm01.png){.thumbnail}

Donnez un nom à cette nouvelle VM et définissez son emplacement dans votre arborescence.

![Nommer la vm](images/clonevm02.png){.thumbnail}

### Sélection de la ressource

Spécifiez le cluster, l'hôte, la vApp ou le resource pool de cette VM.

![Ressources de la vm](images/clonevm03.png){.thumbnail}

### Choix du stockage

Définissez alors l'emplacement de stockage (espace-disque) cette VM. 

Le format de disque virtuel est de type « Thin Provision » (Provisionnement dynamique), ce qui veut dire qu'un disque virtuel sera créé mais il n'utilisera que l'espace-disque réellement employé sur le stockage, peu importe l'espace-disque précédemment utilisé sur la VM source.

Vous retrouverez plus d'explications sur les formats de disque dans [ce guide](../quel-format-de-disque-choisir/){.external-link}.

Vous pourrez choisir, via la ligne `VM Storage Policy`, la politique de stockage par défaut si vous avez des datastores, ou une politique personalisée si vous avez des hôtes [vSAN](../vmware-vsan/){.external-link}, ou encore l'option [VM encryption](../vm-encrypt/){.external-link}.

![stockage vm](images/clonevm04.png){.thumbnail}

### Configuration système

Cette étape vous permet de définir configuration réseau à appliquer à cette VM. Vous avez deux choix :

- Si vous ne cochez rien, cela ne fera aucun changement sur la configuration réseau de la nouvelle VM par rapport à la source ;

- `Personnaliser le matériel de cette machine virtuelle (Expérimental)`{.action} : cette option vous permettra de spécifier les nouvelles configurations que vous souhaitez mettre en place sur cette nouvelle VM.

![réseau vm](images/clonevm05.png){.thumbnail}

> [!warning]
>
> Si vous n'avez pas fait de personalisation de la machine virtuelle, il est nécessaire de modifier la configuration du clone avant de la démarrer, afin d'éviter un conflit d'IP / MAC. 
>
>Dans ce cas, il vous suffit simplement de décocher la carte réseau dans les paramètres de la machine virtuelle une fois celle ci clonée, juste avant de la démarrer.
>
>![déconnecter vm](images/clonevm06.png){.thumbnail}
>

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
