---
title: Veeam Cloud Connect
slug: veeam-cloud-connect
excerpt: Présentation de l’offre Veeam Cloud Connect
section: Veeam
---

**Dernière mise à jour le 22/07/2020**

## Objectif

Veeam Cloud Connect est une solution proposée par l'éditeur Veeam. Elle permet de disposer d'une sauvegarde hors site et ce, sans avoir à gérer une infrastructure sur un second site. L'idée de Veeam Cloud Connect est de fournir un moyen facile et sécurisé de réaliser des backups et de restaurer vos données à partir du cloud.

**Découvrez comment configurer votre offre Veeam Cloud Connect**

## Prérequis

- Avoir souscrit à l'offre [Veeam Cloud Connect](https://www.ovh.com/fr/storage-solutions/veeam-cloud-connect/){.external}.

## En pratique

### Produits compatibles

Le principal intérêt de Veeam Cloud Connect, en dehors de sa simplicité, est que cette solution fonctionne peu importe où est hébergée votre infrastructure d'exploitation. Celle-ci peut être hébergée chez OVHcloud (un Hosted Private Cloud, ou encore un serveur dédié sur lequel vous réalisez vous-même de la virtualisation avec un hyperviseur VMware ou Microsoft), chez un autre fournisseur, ou encore dans vos locaux.

Liste des produits OVHcloud compatibles :

- [Hosted Private Cloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/){.external}
- Machines virtuelles hébergées sur nos [Serveurs dédiés](https://www.ovh.com/fr/serveurs_dedies/){.external} et administrées via Microsoft Hyper-V ou VMware ESXi.


### Commande de l'offre

L'offre peut être commandée depuis le site [OVH.com](https://www.ovh.com/fr/storage-solutions/veeam-cloud-connect/){.external}

Une fois le paiement effectué, vous recevrez un mail avec :

- L'adresse IP/nom de votre service.
- L'utilisateur et le mot de passe.


### Espace client OVHcloud

Dans votre espace client OVHcloud, rendez-vous dans la partie `Server` puis `Plateformes et Services`.

![veeam cloud connect](images/veeam-cloud-connect-manager-start.png){.thumbnail}

Vous arriverez ensuite sur cette page reprenant la configuration de votre offre, votre abonnement, le lieu de stockage.

![veeam cloud connect](images/veeam-cloud-connect-manager.png){.thumbnail}

Dans le second onglet `Espace de stockage`, vous retrouverez le nom de votre espace de stockage, son utilisation, le quota, et le datacentre de réplication.


![veeam cloud connect](images/veeam-cloud-connect-manager-espace.png){.thumbnail}

Au bout de cette ligne, vous pouvez apercevoir un bouton.

Celui-ci sert à augmenter ou diminuer le quota de stockage.


![veeam cloud connect](images/veeam-cloud-connect-manager-modif-espace.png){.thumbnail}

Lorsque vous avez modifié la valeur, ce message apparaîtra :


![veeam cloud connect](images/veeam-cloud-connect-manager-modif-espace-ok.png){.thumbnail}


### Installation

Afin de mettre en place votre Veeam Cloud Connect, vous devez au préalable avoir votre propre serveur de sauvegarde Veeam.

La mise en place du Veeam Cloud Connect se fait dans la même interface, la console Veeam Backup & Replication, téléchargeable sur le site de [Veeam](https://www.veeam.com/){.external}.


> [!success]
>
> Vous pouvez retrouver l'installation de la console sur cette page.
> 

Dans un premier temps, ajoutez le service dans votre console, en cliquant sur "ADD SERVICE PROVIDER"


![veeam cloud connect](images/veeam-cloud-connect-add-provider.png){.thumbnail}

Renseignez l'IP/nom de votre offre, qui vous a été transmis par e-mail.


![veeam cloud connect](images/veeam-cloud-connect-add-provider-ip.png){.thumbnail}

Ajoutez l'utilsateur et le mot de passe, puis appliquez pour valider.


![veeam cloud connect](images/veeam-cloud-connect-add-provider-login.png){.thumbnail}

Le résumé des resssources disponibles sur cette offre apparaîtra.


![veeam cloud connect](images/veeam-cloud-connect-add-provider-ressources.png){.thumbnail}

Et un dernier récapitulatif sera présent.


![veeam cloud connect](images/veeam-cloud-connect-add-provider-recap.png){.thumbnail}

En cliquant sur `terminer`{.action}, vous retrouvez votre service sur la console.


![veeam cloud connect](images/veeam-cloud-connect-add-provider-finish.png){.thumbnail}


### Configuration

Afin de réaliser une réplication d'une de vos sauvegardes, rendez-vous dans l'onglet `Backup & Replication` situé en bas à gauche de la console.

Vous retrouverez vos tâches de sauvegarde et vous devrez cliquer sur `Backup Copy`{.action}, situé sur la barre d'action en haut de la console, pour commencer la configuration.


![veeam cloud connect](images/veeam-cloud-connect-replicat.png){.thumbnail}

Dans un premier temps, donnez un nom à cette nouvelle tâche. Vous pouvez également choisir la fréquence de cette dernière.


![veeam cloud connect](images/veeam-cloud-connect-replicat-name.png){.thumbnail}

En cliquant sur le bouton `Ajouter`{.action} vous aurez trois choix, détaillés sur [cette page](https://helpcenter.veeam.com/docs/backup/vsphere/backup_copy_vms.html?ver=95){.external}.

Ici, nous allons répliquer une sauvegarde.


![veeam cloud connect](images/veeam-cloud-connect-replicat-select.png){.thumbnail}

Choisissez ensuite le répértoire de stockage vu précédemment.


![veeam cloud connect](images/veeam-cloud-connect-replicat-target.png){.thumbnail}

Afin de transférer votre sauvegarde de votre serveur à notre infrastructure, à travers la solution Veaam Cloud Connect, vous pouvez soit laisser la communication en direct, soit utiliser le WAN accelerator.

Voici une page expliquant le fonctionnement du [WAN accelerator](https://helpcenter.veeam.com/docs/backup/vsphere/wan_hiw.html?ver=95){.external}.


![veeam cloud connect](images/veeam-cloud-connect-replicat-data.png){.thumbnail}

Vous pourrez également programmer les périodes durant lesquelles cette tâche s'éxécutera.


![veeam cloud connect](images/veeam-cloud-connect-replicat-schedule.png){.thumbnail}

Un résumé vous sera proposé, et il vous restera à cliquer sur `Terminer`{.action} pour finaliser l'ajout de cette tâche.


![veeam cloud connect](images/veeam-cloud-connect-replicat-finish.png){.thumbnail}

La case démarrant la tâche une fois validée étant resté cochée, la tâche est en cours.

Vous retrouverez la page du début avec votre nouvelle tâche.


![veeam cloud connect](images/veeam-cloud-connect-replicat-cloud.png){.thumbnail}


### Restauration

Afin de restaurer votre backup, il vous suffira de faire un clic droit sur la tâche.

Vous pourrez choisir de restaurer la machine virtuelle entière, ou certains fichiers.


![veeam cloud connect](images/veeam-cloud-connect-restore.png){.thumbnail}

Choisissez la VM et la sauvegarde à restaurer.


![veeam cloud connect](images/veeam-cloud-connect-restore-select.png){.thumbnail}

Choisissez ensuite le lieu de restauration (inital ou différent).


![veeam cloud connect](images/veeam-cloud-connect-restore-mode.png){.thumbnail}

Vous pourrez indiquer une raison si vous le souhaitez, et un résumé de l'opération s'affichera.


![veeam cloud connect](images/veeam-cloud-connect-restore-resume.png){.thumbnail}

Une fenêtre s'ouvrira dans votre console Veeam, indiquant les tâches en cours.

Vous constaterez, dans votre vSphere, différentes opérations lors de la restauration.


![veeam cloud connect](images/veeam-cloud-connect-restore-done.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur [https://community.ovh.com/](https://community.ovh.com/){.external}.
