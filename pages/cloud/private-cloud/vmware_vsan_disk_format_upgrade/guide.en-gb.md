---
title: 'Mise à jour du format des disques vSAN'
slug: vsan-disk-format-upgrade
excerpt: 'Découvrez comment mettre à jour le format des disques d'un vSAN'
section: 'VMware vSphere features'
---

**Last updated 17th January 2023**

**Ce guide vous montre comment mettre à jour le format de vos disques vSAN** 

## Objective

The aim of this guide is to explain how vSAN fault domains work and how they are implemented.

## Requirements

- Being an administrative contact of your [Hosted Private Cloud infrastructure](https://www.ovhcloud.com/en-gb/enterprise/products/hosted-private-cloud/) to receive login credentials
- A user account with access to vSphere as well as the specific rights for NSX (created in the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB))
- A deployed [vSan Datastore](https://docs.ovh.com/gb/en/private-cloud/vmware-vsan/)

## Overview

Régulièrement le format des disques vSAN est amélioré avec de nouvelles versions. nous allons voir comment mettre à jour le format des disques vSAN.

## Instructions

Connectez-vous à votre interface vSphere à l'aide de ce [guide](https://docs.ovh.com/fr/private-cloud/connexion-interface-vsphere/).

Au travers de l'interface vSphere cliquez à gauche sur votre `Cluster`{.action}, positionnez-vous à droite sur l'onglet `Configurer`{.action}, Choisissez `Services`{.action} dans la rubrique **vSAN** et cliquez sur `PRÉVERIFIER LA MISE A NIVEAU`{.action}.

![01 vSAN disk format upgrarde 01](images/01-vsan-disk-format-upgrade01.png){.thumbnail}

Le contrôle de mise à niveau vous indique que tout est ok pour effectuer la mise à jour.

Cliquez sur `METTRE À NIVEAU`{.action}.

![01 vSAN disk format upgrarde 02](images/01-vsan-disk-format-upgrade02.png){.thumbnail}

Cliquez sur `METTRE À NIVEAU`{.action} pour confirmer la mise à niveau.

![01 vSAN disk format upgrarde 03](images/01-vsan-disk-format-upgrade03.png){.thumbnail}

La mise à niveau se déroule en quelques instants.

![01 vSAN disk format upgrarde 04](images/01-vsan-disk-format-upgrade04.png){.thumbnail}

Lorsque la mise à niveau est terminée une information vous indique que tout est correct ainsi que le numéro de version du format des disque vSAN.

![01 vSAN disk format upgrarde 05](images/01-vsan-disk-format-upgrade05.png){.thumbnail}

## Go further

[Upgrade vSAN Disk Format Using vSphere Web Client](https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.vsphere.virtualsan.doc/GUID-9FB6F6D8-80A9-4584-BD0D-8FED073B3D40.html)

Join our community of users on <https://community.ovh.com/en/>.
