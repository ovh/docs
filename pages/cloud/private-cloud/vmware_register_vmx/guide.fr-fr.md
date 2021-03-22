---
title: Re-enregistrer des VM dans un nouveau PCC
slug: vsphere-register-vm-vmx
excerpt: Découvrez comment Re-enregistrer des VM sur un nouveau service depuis d'anciens datastores
section: Fonctionnalités VMware vSphere
order: 06
hidden: true
---

**Dernière mise à jour le 22/03/2021**

## Objectif

Suite à un incident, des machines virtuelles n'apparaissent plus dans votre inventaire vSphere mais l'ensemble les fichiers sont toujours présent sur les datastores.

**Découvrez comment réinscrire des VM d'un datastore dans votre inventaire vSphere**

## Prérequis

- Être connecté à votre [interface vSphere](../connexion-interface-vsphere/).
- Disposer des datastores contenant les fichiers de machines virtuelles.

## En pratique

Dans votre [interface vSphere](../connexion-interface-vsphere/), placez-vous dans la vue `Stockage`.

![vue stockage](images/restore-vm-01.png){.thumbnail}

Sélectionnez un datastore dans la liste.

![sélectionner datastore](images/restore-vm-02.png){.thumbnail}

Dans les dossiers de ce datastore, sélectionnez le fichier `.vmx` et cliquez sur `Enregistrer la VM`.

![enregistrer VM](images/restore-vm-03.png){.thumbnail}

Complétez les informations requises puis cliquez sur `Terminer`.

![enregistrer VM](images/restore-vm-04.png){.thumbnail}

Ces mêmes opérations sont à répéter sur chaque datastore et pour chaque VM à re-enregister.

Vérifiez les paramètres de vos VM (nom, [portgroup](creation-vlan-vxlan), etc...) en faisant un clic droit sur chacune d'elles puis en sélectionnant `Edit Settings`.

![modifier paramètres](images/restore-vm-06.png){.thumbnail}

En cas d'erreur de paramétrage, un message d'erreur vous sera affiché lorsque vous rallumerez la VM.

Vous pourrez rallumer une VM en faisant un clic droit sur celle-ci puis en cliquant sur `Power On`

![enregistrer VM](images/restore-vm-05.png){.thumbnail}

## Automatisation

Dans le cas où vous auriez plusieurs dizaines de VM et/ou datastores, il est possible d'utilier des scripts pour effectuer le parcourt des datastores et l'enregistrement des VM s'y trouvant.

### Avec PowerCLI

> [!warning]
>
> En cours !
>


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
