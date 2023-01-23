---
title: 'Mise à jour du format des disques vSAN'
slug: vsan-disk-format-upgrade
excerpt: "Découvrez comment mettre à jour le format des disques vSAN"
section: 'Fonctionnalités VMware vSphere'
---

**Dernière mise à jour le 20/01/2023**

## Objectif

Le format des disques vSAN est régulièrement amélioré avec de nouvelles versions, ce qui permet de nouvelles fonctionnalités ou le maintien de la compatibilité avec les versions de votre cluster VMware, comme décrit dans cet article : [Understanding vSAN on-disk format versions and compatibility (2148493)](https://kb.vmware.com/s/article/2148493).

**Découvrez comment mettre à jour le format de vos disques vSAN** 

## Prérequis

- Être contact [« Administrateur »](https://docs.ovh.com/fr/customer/gestion-des-contacts/) de l'infrastructure [Hosted Private Cloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), afin de recevoir les identifiants de connexion.
- Avoir un identifiant utilisateur actif avec les droits spécifiques pour NSX (créé dans l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr))
- Avoir déployé un [cluster vSan](https://docs.ovh.com/fr/private-cloud/vmware-vsan/)

## En pratique

Connectez-vous à votre interface vSphere à l'aide de ce [guide](https://docs.ovh.com/fr/private-cloud/connexion-interface-vsphere/).

Au travers de l'interface vSphere, cliquez à gauche sur votre `Cluster`{.action} puis positionnez-vous à droite sur l'onglet `Configurer`{.action}. Choisissez `Services`{.action} dans la rubrique **vSAN** et cliquez sur `PRÉVERIFIER LA MISE A NIVEAU`{.action}.

![01 vSAN disk format upgrade 01](images/01-vsan-disk-format-upgrade01.png){.thumbnail}

Le contrôle de mise à niveau vous indique que tout est ok pour effectuer la mise à jour.

Cliquez sur `METTRE À NIVEAU`{.action}.

![01 vSAN disk format upgrade 02](images/01-vsan-disk-format-upgrade02.png){.thumbnail}

Cliquez de nouveau sur `METTRE À NIVEAU`{.action} pour confirmer la mise à niveau.

![01 vSAN disk format upgrade 03](images/01-vsan-disk-format-upgrade03.png){.thumbnail}

La mise à niveau se déroule en quelques instants.

![01 vSAN disk format upgrade 04](images/01-vsan-disk-format-upgrade04.png){.thumbnail}

Lorsque la mise à niveau est terminée, une information vous indique que tout est correct ainsi que le numéro de version du format des disques vSAN.

![01 vSAN disk format upgrade 05](images/01-vsan-disk-format-upgrade05.png){.thumbnail}

## Aller plus loin

[Mise à niveau du format de disque vSAN à l'aide de vSphere Web Client](https://docs.vmware.com/fr/VMware-vSphere/6.7/com.vmware.vsphere.virtualsan.doc/GUID-9FB6F6D8-80A9-4584-BD0D-8FED073B3D40.html)

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
