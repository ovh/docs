---
title: "Utiliser le snapshot"
excerpt: "Découvrez comment activer et utiliser l’option snapshot depuis l’espace client OVHcloud"
updated: 2024-09-18
---

## Objectif

La création d'un snapshot (instantané) est un moyen simple et rapide de sauvegarder un système fonctionnel avant d'y apporter des modifications pouvant avoir des conséquences non souhaitées ou imprévues. Par exemple, tester une nouvelle configuration ou un nouveau logiciel. 
Un snapshot ne constitue pas pour autant une sauvegarde complète du système.

**Découvrez comment activer et utiliser l’option snapshot depuis l’espace client OVHcloud.**

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/Pazh9ozbkEk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> [!primary]
> Avant d'appliquer une option de sauvegarde, nous vous recommandons de consulter les [options VPS](https://www.ovhcloud.com/fr-ca/vps/options/) afin de comparer les détails et tarifs de chaque option.
>

## Prérequis

- Avoir accès à votre [espace client OVHcloud](/links/manager).
- Un [VPS OVHcloud](https://www.ovhcloud.com/fr-ca/vps/) déjà configuré.

## En pratique

Connectez-vous à votre [espace client OVHcloud](/links/manager), rendez-vous dans la section `Bare Metal Cloud`{.action} et sélectionnez votre serveur sous la partie `Serveur privés virtuels`{.action}.

### Étape 1 : souscrire l'option snapshot

Depuis l'onglet `Accueil`{.action}, descendez jusqu'au menu « Résumé des options ».  
Si « Snapshot » est déjà sur l'état « Activé », passez directement à l'étape 2. Si « Snapshot » n'est pas encore activé, cliquez sur `...`{.action} à droite de l'option « Snapshot » puis cliquez sur `Commander`{.action} dans le menu qui s'affiche.

![snapshotvps](images/snapshot_vps_step1b.png){.thumbnail}

Veuillez prendre connaissance des informations de tarification de cette option, puis cliquez sur `Commander`{.action}. Vous serez orienté dans le processus de commande et recevrez un e-mail de confirmation.

Pour résilier l'option de service, cliquez sur le bouton `...`{.action} à côté de « Snapshot » et choisissez `Résilier`{.action} dans le menu contextuel.

![snapshotvps](images/snapshot_vps_cancel.png){.thumbnail}

### Étape 2 : prendre un snapshot

Une fois l'option activée, cliquez sur `...`{.action} à droite de l'option « Snapshot » puis cliquez sur `Prendre un Snapshot`{.action} dans le menu qui apparaît. Vous pouvez tapez une description qui sera attachée à votre snapshot. La durée de création du snapshot dépend de l'espace de stockage utilisé. Par la suite, l'horodatage de la création s'affiche dans le menu « Résumé des options ».

### Étape 3 : supprimer/restaurer un snapshot

Étant donné que vous ne pouvez activer qu'un seul snapshot à la fois, vous devez supprimer le snapshot existant avant d'en créer un nouveau. Choisissez simplement `Supprimer le snapshot`{.action} dans le menu contextuel.

![snapshotvps](images/snapshot_vps_step2.png){.thumbnail}

Si vous êtes sûr de vouloir restaurer votre VPS à l'état du snapshot, cliquez sur `Restaurer le snapshot`{.action} et confirmez la restauration dans la fenêtre qui s'affiche alors.

> [!alert]
>
> Lorsque vous restaurez un VPS à partir d’un snapshot, ce dernier sera supprimé. Si vous souhaitez conserver le même snapshot, vous devez en créer un nouveau avant d'apporter des modifications au système restauré.
>
> Si la fonction snapshot est trop limitée pour votre projet, l'option [Sauvegardes automatisées](/pages/bare_metal_cloud/virtual_private_servers/using-automated-backups-on-a-vps) est une alternative.
>

### Télécharger un snapshot

Le snapshot en cours peut être récupéré via un lien de téléchargement. Cliquez sur le bouton `...`{.action} à côté de l'option `Snapshot` et choisissez `Télécharger le Snapshot`{.action} dans le menu contextuel.

![snapshotvps](images/snapshot_vps03.png){.thumbnail}

> [!primary]
>
> Si votre VPS est issu d'une ancienne gamme, il est possible que vous receviez un message d'erreur car l'option n'est pas disponible sur les anciens VPS. Votre VPS est issu d'une ancienne gamme si le nom du modèle est nommé de cette façon : *vpsXXXX.ovh.net* (les *X* représentent le numéro de votre modèle). Vous pouvez vérifier cette référence de serveur dans l'onglet `Accueil`{.action} de votre [espace client OVHcloud](/links/manager).
>

Dans la fenêtre qui s'affiche, cliquez sur `Générer le lien de téléchargement`{.action}.

![snapshotvps](images/snapshot_vps04.png){.thumbnail}

Patientez un instant, un message de succès s'affiche. En dessous, vous pouvez copier la commande complète de téléchargement en un clic.

![snapshotvps](images/snapshot_vps05.png){.thumbnail}

La taille du snapshot et la date d'expiration du lien seront également affichées.

Notez que le lien de téléchargement expirera après **24 heures**.

La commande de téléchargemment utilise un `curl` au format suivant :

```bash
curl "https://storage.sbg.cloud.ovh.net/v1/AUTH_f5fgh4674dd706f15f6ffgf4z667d3f4g5f05/glance/5ceg3f93-8b49-436b-aefe-4185f9fc3f78?
temp_url_sig=f508cacda60256d5f211ddddf3f81130e935f0e4&temp_url_expires=1678247579" --output vps-x11x11xyy.vps.ovh.net --fail
```

Cette commande doit fonctionner depuis n'importe quel terminal de ligne de commande. Cependant, lorsque vous utilisez Windows *PowerShell*, vous devrez ajuster la commande ainsi :

```powershell
curl -Uri "https://storage.sbg.cloud.ovh.net/v1/AUTH_f5fgh4674dd706f15f6ffgf4z667d3f4g5f05/glance/5ceg3f93-8b49-436b-aefe-4185f9fc3f78?
temp_url_sig=f508cacda60256d5f211ddddf3f81130e935f0e4&temp_url_expires=1678247579" -OutFile vps-x11x11xyy.vps.ovh.net
```

![snapshotvps](images/snapshot_vps06.png){.thumbnail}

> [!primary]
>
> Pour éviter de consommer trop d'espace de stockage, nous vous déconseillons de télécharger les snapshots directement sur le VPS.
>
> Le fichier téléchargé peut être importé dans un Projet Public Cloud en tant qu'image (QCOW2) via [OpenStack](products/public-cloud-compute-instance-management). (Retrouvez un exemple d'utilisation dans [ce guide](/pages/public_cloud/compute/upload_own_image).)
>

### Bonnes pratiques pour la création d'un snapshot

#### Configuration de l'agent QEMU sur un VPS

Les snapshots sont des images instantanées de votre système en cours d'exécution (« live snapshots »). Pour garantir la disponibilité de votre système lors de la création du snapshot, l'agent QEMU est utilisé pour préparer le système de fichiers au processus.

Le *qemu-guest-agent* requis n'est pas installé par défaut sur la plupart des distributions. En outre, les restrictions de licence peuvent empêcher OVHcloud de l'inclure dans les images d'OS disponibles. Par conséquent, il est recommandé de vérifier et d'installer l'agent au cas où il ne serait pas activé sur votre VPS. Connectez-vous à votre VPS en SSH et suivez les instructions ci-dessous, selon votre système d'exploitation.

##### **Distributions Debian (Debian, Ubuntu)**

Utilisez la commande suivante pour vérifier si le système est correctement configuré pour les snapshots :

```bash
file /dev/virtio-ports/org.qemu.guest_agent.0
/dev/virtio-ports/org.qemu.guest_agent.0: symbolic link to ../vport2p1
```

Si le résultat est différent (« No such file or directory »), installez le dernier package :

```bash
sudo apt-get update
sudo apt-get install qemu-guest-agent
```

Redémarrez le VPS:

```bash
sudo reboot
```

Vérifier le service pour vous assurer qu'il est en cours d'exécution :

```bash
sudo service qemu-guest-agent status
```

##### **Distributions Redhat (CentOS, Fedora)**

Utilisez la commande suivante pour vérifier si le système est correctement configuré pour les snapshots :

```bash
file /dev/virtio-ports/org.qemu.guest_agent.0
/dev/virtio-ports/org.qemu.guest_agent.0: symbolic link to ../vport2p1
```

Si le résultat est différent (« No such file or directory »), installez et activez l'agent :

```bash
sudo yum install qemu-guest-agent
sudo chkconfig qemu-guest-agent on
```

Redémarrez le VPS:

```bash
sudo reboot
```

Vérifier l'agent et vérifiez qu'il est en cours d'exécution :

```bash
sudo service qemu-guest-agent status
```

##### **Problèmes Kernel sur cPanel**

Consultez notre guide [Sauvegarde automatique - Kernel panic (cPanel)](/pages/bare_metal_cloud/virtual_private_servers/cpanel_snapshot) pour savoir comment résoudre les problèmes de blocage des serveurs cPanel lors de la sauvegarde automatique OVHcloud.

##### **Windows**

Vous pouvez installer l'agent via un fichier MSI, disponible sur le site du projet Fedora: <https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/latest-qemu-ga/>

Vérifiez que le service est en cours d'exécution à l'aide de la commande *PowerShell* suivante :

```powershell
PS C:\Users\Administrator> Get-Service QEMU-GA

Status   Name               DisplayName
------   ----               -----------
Running  QEMU-GA            QEMU Guest Agent
```

## Aller plus loin

[Utiliser la sauvegarde automatique sur un VPS](/pages/bare_metal_cloud/virtual_private_servers/using-automated-backups-on-a-vps)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
