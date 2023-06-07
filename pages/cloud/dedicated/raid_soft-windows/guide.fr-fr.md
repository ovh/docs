---
title: Configurer un miroir logiciel (RAID) sous Windows
excerpt: "Découvrez comment reconstruire la configuration des disques de votre serveur après un remplacement de disque"
updated: 2023-03-28
---

**Dernière mise à jour le 28/03/2023**

## Objectif

Sur un système Windows, la redondance des données est assurée par la mise en miroir du disque principal sur un second disque. Cette configuration est similaire à une configuration en RAID 1 mais ne concerne que deux disques.

**Découvrez comment reconfigurer le miroir de disque de votre système Windows s'il doit être reconstruit en raison d'une corruption ou d'une panne de disque.**

## Prérequis

- Un [serveur dédié Windows](https://www.ovhcloud.com/fr/bare-metal/) avec un miroir logiciel
- Un accès administratif au serveur via RDP

## En pratique

Établissez une connexion RDP (Remote Desktop) avec votre serveur.

Une fois connecté, faites un clic droit sur le bouton du menu `Démarrer`{.action} et ouvrez `Exécuter`{.action}.

![Software mirror Windows](images/raid-soft-windows-01.png){.thumbnail}

Renseignez `cmd` et cliquez sur `OK`{.action}.

![Software mirror Windows](images/raid-soft-windows-02.png){.thumbnail}

La méthode à utiliser dépend du type de partition de vos disques. Suivez les instructions de [cette section](#mbr) pour **MBR** ou passez à la [section suivante](#gpt) pour **GPT**. Si vous n'en êtes pas sûr, exécutez la commande `diskpart` dans l'invite de commande et entrez `list disk`. Vérifiez la colonne « Gpt » dans le résultat fourni.

### Reconstruction du miroir (schéma de partition MBR) <a name="mbr"></a>

À l'invite de commande, ouvrez DiskPart :

```
C:\Windows\system32> diskpart
```

> [!alert]
>
> DiskPart exécute les commandes sans émettre d'avertissements ou demander de confirmation. Toute modification effectuée dans DiskPart est irréversible. La saisie de commandes alors que le mauvais disque ou volume est sélectionné peut donc entraîner une perte immédiate de données et/ou empêcher le démarrage de votre système. Nous vous recommandons de procéder avec prudence et de vérifier chaque commande.
>

#### Liste de tous les disques et volumes

```console
DISKPART> list disk
 
  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---
  Disk 0    Online          447 GB      0 B   *
  Disk 1    Online          447 GB   447 GB
  Disk M0   Missing            0 B      0 B   *
 
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Mirror       447 GB  Failed Rd  System

```

Dans cet exemple, le `Disk 1` est un disque de remplacement qui a été installé pour remplacer le `Disk M0` défectueux qui avait été [physiquement retiré](/pages/cloud/dedicated/disk_replacement) précédemment.


> [!primary]
>
> Les sections de code suivantes sont fournies à titre d'illustration uniquement, en fonction de l'exemple de sortie ci-dessus. Vous devrez ajuster les instructions en fonction de votre configuration réelle, en remplaçant les valeurs dans les commandes par vos identifiants de disque et de volume.
>

#### Retrait du disque remplacé de la configuration

```console
DISKPART> select volume c
 
Volume 0 is the selected volume.
 
DISKPART> break disk M0 nokeep
 
DiskPart successfully broke the mirror volume.
 
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Simple       447 GB  Healthy    System
 
DISKPART> select disk m0
 
Disk M0 is now the selected disk.
 
DISKPART> delete disk
 
DiskPart successfully deleted the missing disk.
 
DISKPART> list disk
 
  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---s
  Disk 0    Online          447 GB      0 B   *
  Disk 1    Online          447 GB   447 GB
 
```

#### Initialisation du disque de remplacement

```console
DISKPART> select disk 1
 
Disk 1 is now the selected disk.
 
DISKPART> convert mbr
 
DiskPart successfully converted the selected disk to MBR format.
 
DISKPART> convert dynamic
 
DiskPart successfully converted the selected disk to dynamic format.

```

#### Recréation du miroir entre le premier et le second disque

```console
DISKPART> select volume c
 
Volume 0 is the selected volume.
 
DISKPART> add disk 1
 
DiskPart succeeded in adding a mirror to the volume.
<===>
 
DISKPART> list disk
 
  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---
* Disk 0    Online          447 GB      0 B   *
  Disk 1    Online          447 GB      0 B   *

```

Répétez cette étape pour chaque volume existant à partir du `Disk 0` que vous souhaitez mettre en miroir sur le `Disk 1`, en utilisant la lettre de lecteur associée (par exemple, *d*, *e*, *f*, etc.).

L’état du volume sera `Rebuild` au cours du processus, ce qui peut prendre plusieurs heures en fonction des données stockées sur le disque. Vous pouvez vérifier l'état dans DiskPart :
 
```console
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
* Volume 0     C   Windows      NTFS   Mirror       447 GB  Rebuild    System

```

Il est préférable de ne pas redémarrer le serveur tant que le processus de reconstruction n'est pas terminé.

### Reconstruction du miroir (schéma de partition GPT) <a name="gpt"></a>

À l'invite de commande, ouvrez DiskPart :

```
C:\Windows\system32> diskpart
```

> [!alert]
>
> DiskPart exécute les commandes sans émettre d'avertissements ou demander de confirmation. Toute modification effectuée dans DiskPart est irréversible. La saisie de commandes alors que le mauvais disque ou volume est sélectionné peut donc entraîner une perte immédiate de données et/ou empêcher le démarrage de votre système. Nous vous recommandons de procéder avec prudence et de vérifier chaque commande.
>

#### Liste de tous les disques et volumes

```console
DISKPART> list disk
 
  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---
  Disk 0    Online         1863 GB      0 B   *    *
  Disk 1    Online         1863 GB  1863 GB
  Disk M0   Missing           0  B      0 B   *   
 
 
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Mirror      1862 GB  Failed Rd  Boot
  Volume 1         EFI          FAT32  Partition    350 MB  Healthy    System
 
```

Dans cet exemple, le `Disk 1` est un disque de remplacement qui a été installé pour remplacer le `Disk M0` défectueux qui avait été [physiquement retiré](/pages/cloud/dedicated/disk_replacement) précédemment.

> [!primary]
>
> Les sections de code suivantes sont fournies à titre d'illustration uniquement, en fonction de l'exemple de sortie ci-dessus. Vous devrez ajuster les instructions en fonction de votre configuration réelle en remplaçant les valeurs dans les commandes par vos identifiants de disque et de volume.
>

#### Retrait du disque remplacé de la configuration

```console
DISKPART> select volume c
  
Volume 0 is the selected volume.
  
DISKPART> break disk M0 nokeep
  
DiskPart successfully broke the mirror volume.
 
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Simple      1862 GB  Healthy    Boot
  Volume 1         EFI          FAT32  Partition    350 MB  Healthy    System
 
DISKPART> select disk M0
 
Disk M0 is now the selected disk.
 
DISKPART> delete disk
 
DiskPart successfully deleted the missing disk.
 
DISKPART> list disk
 
  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---
  Disk 0    Online         1863 GB      0 B   *    *
  Disk 1    Online         1863 GB  1863 GB
 
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Simple      1862 GB  Healthy    Boot
  Volume 1         EFI          FAT32  Partition    350 MB  Healthy    System
 
```

#### Initialisation du disque de remplacement

Sur le nouveau disque, créez les partitions par défaut et obligatoires, reflétant le partitionnement existant du premier disque :

```console
DISKPART> select disk 1
 
Disk 1 is now the selected disk.
 
DISKPART> clean
 
DiskPart succeeded in cleaning the disk.
 
DISKPART> convert gpt
 
DiskPart successfully converted the selected disk to GPT format.
 
DISKPART> select partition 1
 
Partition 1 is now the selected partition.
 
DISKPART> delete partition override
 
DiskPart successfully deleted the selected partition.
 
DISKPART> create partition efi size=350
 
DiskPart succeeded in creating the specified partition.
 
DISKPART> format quick fs=fat32 label=EFI
 
  100 percent completed
 
DiskPart successfully formatted the volume.
 
DiskPart successfully formatted the volume.
 
DISKPART> assign letter=t
 
DiskPart successfully assigned the drive letter or mount point.
 
DISKPART> create partition msr size=128
 
DiskPart succeeded in creating the specified partition.
 
DISKPART> list partition
 
  Partition ###  Type              Size     Offset
  -------------  ----------------  -------  -------
  Partition 1    System             350 MB  1024 KB
* Partition 2    Reserved           128 MB   351 MB

```

#### Recréation du miroir entre le premier et le second disque 

```console
DISKPART> select volume c
 
Volume 0 is the selected volume.
 
DISKPART> add disk 1
 
DiskPart succeeded in adding a mirror to the volume.
 
DISKPART> list disk
 
  Disk ###  Status         Size     Free     Dyn  Gpt
  --------  -------------  -------  -------  ---  ---
* Disk 0    Online         1863 GB      0 B   *    *
  Disk 1    Online         1863 GB      0 B   *    *

```

Répétez cette étape pour chaque volume existant à partir du `Disk 0` que vous souhaitez mettre en miroir sur le `Disk 1`, en utilisant la lettre de lecteur associée (par exemple, *d*, *e*, *f*, etc.).

#### Recréation de l'environnement d'initialisation et définition des options d'initialisation du second disque

```console
DISKPART> select disk 0
 
Disk 0 is now the selected disk.
 
DISKPART> list partition
 
  Partition ###  Type              Size     Offset
  -------------  ----------------  -------  -------
  Partition 1    System             350 MB  1024 KB
  Partition 2    Dynamic Reserved  1024 KB   351 MB
  Partition 3    Reserved           127 MB   352 MB
  Partition 4    Dynamic Data      1862 GB   479 MB
  Partition 5    Dynamic Data        71 KB  1863 GB
 
DISKPART> select partition 1
 
Partition 1 is now the selected partition.
 
DISKPART> assign letter=s
 
DiskPart successfully assigned the drive letter or mount point.
 
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Mirror      1862 GB  Rebuild    Boot
* Volume 1     S   EFI          FAT32  Partition    350 MB  Healthy    System
  Volume 2     T   EFI          FAT32  Partition    350 MB  Healthy    Hidden
 
DISKPART> exit
 
Leaving DiskPart...
```

De retour à l'invite de commande, copiez les fichiers de démarrage de la partition de démarrage (EFI) sur le premier disque (`Disk 0`) vers la partition de démarrage sur le second disque (`Disk 1`).

Tapez les 3 commandes suivantes et exécutez-les chacune avec la touche `Entrer` :

```
robocopy s:\ t:\ * /e /copyall /xf BCD.* /xd "System Volume Information"
bcdedit /export t:\EFI\Microsoft\Boot\BCD
bcdedit /store t:\EFI\Microsoft\Boot\BCD /set {bootmgr} device partition=t:
``` 

Relancez alors DiskPart et exécutez les commandes suivantes :

```console
DISKPART> select volume s
 
Volume 2 is the selected volume.
 
DISKPART> remove
 
DiskPart successfully removed the drive letter or mount point.
 
DISKPART> select volume t
 
Volume 1 is the selected volume.
 
DISKPART> remove
 
DiskPart successfully removed the drive letter or mount point.

```

L’état du volume sera `Rebuild` au cours du processus, ce qui peut prendre plusieurs heures en fonction des données stockées sur le disque. Vous pouvez vérifier l'état dans DiskPart :

```console
DISKPART> list volume
 
  Volume ###  Ltr  Label        Fs     Type        Size     Status     Info
  ----------  ---  -----------  -----  ----------  -------  ---------  --------
  Volume 0     C   Windows      NTFS   Mirror      1862 GB  Rebuild    Boot
  Volume 1         EFI          FAT32  Partition    350 MB  Healthy    Hidden
  Volume 2         EFI          FAT32  Partition    350 MB  Healthy    System

```

Il est préférable de ne pas redémarrer le serveur tant que le processus de reconstruction n'est pas terminé.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.