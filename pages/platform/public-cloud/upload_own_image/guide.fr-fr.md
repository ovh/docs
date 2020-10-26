---
title: 'importez votre propre image'
slug: importer-votre-propre-image
excerpt: Découvrez comment importer votre propre image sur Public Cloud
section: 'OpenStack'
order: 10
---

**Dernière mise à jour le 26/10/20**

## Objectif

OVHcloud offre aux clients Public Cloud des images prêtes à l'emploi, mais nous offrons également aux clients la possibilité d'utiliser leurs propres images.

**Découvrez comment télécharger vos propres images dans votre projet.**

## Prérequis

- a [Public Cloud instance](../create_an_instance_in_your_ovh_customer_account/) in your OVHcloud account.
- your own RAW/QCOW2 (recommended formats) image 
- an [OpenStack user](../creation-and-deletion-of-openstack-user) 
- an [OpenStack CLI ready environment](../prepare_the_environment_for_using_the_openstack_api) (if using CLI)

## En pratique

### Avant de commencer

It is advisable to either use cloud ready images already provided by the distribution vendor or build your own image using solutions such as [Packer OpenStack builder](../packer-openstack-builder).

Les images Cloud compatibles sont disponibles ici :

- https://cloud.centos.org/centos/
- https://cloud.debian.org/images/cloud/
- https://cloud-images.ubuntu.com/releases/
- https://alt.fedoraproject.org/cloud/

Les systèmes d'exploitation proposent des images ISO qui sont également applicables lors de la [création d'images avec Packer](https://www.packer.io/docs/builders) tels que QEMU et VirtualBox builders.

Assurez-vous que les éléments suivants sont installés sur vos images pour qu'elles soient intégrables à l’environnement cloud :
- QEMU Guest Agent: cette opération permet de bénéficier d'une meilleure expérience de sauvegarde, car elle permet à l'hôte de communiquer avec l'instance pour les sauvegardes en direct. Tous les systèmes d'exploitation ne sont pas compatibles avec ce package.
- Cloud-init : cela vous permettra de démarrer votre instance au premier démarrage, comme l'ajout de clés SSH et la configuration du réseau. La plupart des systèmes d'exploitation sont compatibles avec cette fonctionnalité.

Nous recommandons que les images soient au format RAW ou QCOW2. Optimisez la taille de l'image pour qu'elle soit la plus petite possible afin de minimiser le coût de facturation mensuel et réduire le délai de génération de vos instances.

### Importer votre image

Avec OpenStack il y a deux façons d'importer votre propre image. Vous pouvez le faire via l'interface en ligne de commande OpenStack, ou avec [l'interface web Horizon](https://horizon.cloud.ovh.net/auth/login/).

#### Utiliser CLI

Une fois que votre image est prête, suivez les étapes ci-dessous pour lancer l'importation à l'aide de la CLI OpenStack ::

1\. Téléchargez votre fichier openrc.sh pour votre utilisateur OpenStack à partir de votre espace client OVHcloud (sélectionnez la région vers laquelle vous souhaitez effectuer le téléchargement).

![openrc](images/openrc_file.png){.thumbnail}

2\. Rafraîchissez le fichier ouvert:

```sh
source openrc.sh
```

3\. Une fois le fichier créé, vous serez invité à entrer le mot de passe de l'utilisateur OpenStack.

4\. Maintenant vous pouvez importer votre image. Cet exemple de commande effectue les opérations suivantes :

- Le format de disque est « RAW »
- Télécharger une image à partir du chemin actuel appelé « debian9.raw »
- Appelez l'image « Debian 9 - Mon image »
- Définissez l'image à l'état privé
- Définissez les propriétés recommandées. Une configuration optimale permet l'utilisation de fonctionnalités telles que Live-snapshot et cloud-init (nécessite l'utilisation du nom d'utilisateur)

```sh
openstack image create --disk-format raw --container-format bare --file debian9.raw "Debian 9 - Mon image" --private --property distribution=debian --property hw_disk_bus=scsi --property hw_scsi_model=virtio-scsi --property hw_qemu_guest_agent=yes --property image_original_user=debian
```

#### Depuis l'interface Horizon

Une fois que votre image est prête à être importé, suivez les étapes suivantes pour l'importer depuis l'interface Web OpenStack Horizon :

1\. Connectez-vous à [l'interface Horizon](https://horizon.cloud.ovh.net/auth/login/).

2\. Sélectionnez en haut à gauche la région vers laquelle vous souhaitez télécharger votre image.

![horizon_1](images/horizon_1.png){.thumbnail}

3\. Dirigez-vous vers la section `Images` puis cliquez sur `Create Image`{.action}.

![horizon_2](images/horizon_2.png){.thumbnail}

4\. Entrez les détails de votre image et sélectionnez le fichier de votre ordinateur.

![horizon_3](images/horizon_3.png){.thumbnail}

5\. Entrez les métadonnées de l'instance (les métadonnées personnalisées que vous pouvez ajouter), puis cliquez sur `Create Image`{.action}.

![horizon_4](images/horizon_4.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
