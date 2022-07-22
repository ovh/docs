---
title: 'API OVHcloud & Partitionnement'
slug: api-partitioning
excerpt: "Découvrez comment l'API OVHcloud vous permet de personnaliser la configuration du partitionnement lors de l'installation de l'OS sur votre serveur"
section: 'RAID & disques'
---

<!-- markdownlint-disable-next-line MD036 -->
**Dernière mise à jour le 13/07/2022**

## Objectif

> [!warning]
>
> Cet article est destiné aux utilisateurs expérimentés qui ont au minimum des connaissances de base sur Linux, mais surtout des connaissances plus approfondies sur le stockage et en particulier sur les logiciels RAID ainsi que sur la gestion logique des volumes (LVM).
>

Les [serveurs dédiés](https://www.ovhcloud.com/fr/bare-metal/) OVHcloud vous permettent de configurer des partitions, le [RAID logiciel](https://docs.ovh.com/fr/dedicated/raid-soft/), LVM, ZFS, etc. pendant [l’installation](https://docs.ovh.com/fr/dedicated/premiers-pas-serveur-dedie/) de votre système d'exploitation depuis l’[API OVHcloud](https://api.ovh.com/) ou depuis votre [espace client OVHcloud](https://www.ovh.com/manager/#/dedicated/configuration). Dans cet article, nous allons nous concentrer sur l'[API OVHcloud](https://api.ovh.com/).<br>
Cela vous donnera plus de détails sur le moteur qui s'exécute en arrière-plan, afin de créer le partitionnement sur le serveur dédié à partir des données d'entrée transmises à l'API OVHcloud.

Fournir des détails avancés sur le partitionnement peut vous aider à comprendre pourquoi :

- votre partitionnement personnalisé n'a pu être appliqué sur votre serveur dédié.
- le partitionnement réel sur votre serveur dédié est légèrement différent de ce que vous aviez demandé.

## Prérequis

* Un [serveur dédié](https://www.ovhcloud.com/fr/bare-metal/) **prêt à être installé/réinstallé** sur votre compte OVHcloud.
* Avoir accès à l'[API OVHcloud](https://api.ovh.com/console/).

> [!warning]
>
> La réinstallation d'un serveur dédié supprime toutes les données qui y sont actuellement stockées.
>

## En pratique

Lors de l'installation du système d'exploitation par défaut, l'installateur du système d'exploitation (fourni par l'éditeur du logiciel) invite l'utilisateur à spécifier les disques sur lesquels le système d'exploitation sera installé, la configuration du partitionnement, etc.<br>
Une fois l’OS installé, il est possible de modifier la disposition du partitionnement mais cela peut s’avérer très délicat et risqué, notamment pour les partitions qui sont actuellement utilisées par le système.<br>
Pour cette raison, le partitionnement des serveurs est un sujet très important qui doit être pris en compte **avant** d'installer un système d'exploitation.

Outre la simplicité de l'API, le principal avantage est la possibilité de personnaliser totalement les disques et partitions sur lesquels sera installé l’OS.

### Présentation du partitionnement

Lorsque l’on parle de schéma de partitionnement, on évoque l’organisation de vos données sur les disques, c’est-à-dire tout ce qui arrive sur votre disque, jusqu’au système de fichiers monté et visible sur l’OS, des couches les plus basses aux plus hautes :

- Disque (disque physique, PD)
- Partition (partition physique, PP)
- ZFS : vdev (zgroup, ZG), zpool (ZP), dataset ZFS (ZD), volume ZFS (ZV)
- [RAID logiciel](https://docs.ovh.com/fr/dedicated/raid-soft/) (SR)
- LVM : volume physique (VP), groupe de volumes (VG), volume logique (LV)
- Système de fichiers avec point de montage (FS)

Le tableau suivant donne une vue d'ensemble des différents composants de partitionnement et de la manière dont ces couches interagissent :

![Tableau représentant les différentes couches du partitionnement](images/partitioning-layers-table.png){.thumbnail}

> [!primary]
>
> Dans le tableau ci-dessus, `/dev/zd1` représente un volume ZFS (aussi appelé `zvol`). Il s'agit d'un disque virtuel situé au-dessus d'un ensemble de données ZFS (ZD) et d'un zpool (ZP), qui est considéré comme un disque physique normal (PD) par le système d'exploitation. Cette fonctionnalité n'est pas disponible sur l'API OVHcloud et nous ne prévoyons pas de l'implémenter.
>

### Partitionnement avec l'API

#### Concepts des gabarits

Lors du lancement de l’installation du système d'exploitation, vous pouvez soit choisir entre plusieurs modèles/gabarits (*templates*) OVHcloud, soit choisir un de vos templates personnels (basé sur un template OVHcloud).

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/install/start
>

**Templates OVHcloud <a name="OVHcloudtemplates"></a>**

Un template OVHcloud est un template officiel quasi-identique à l'image prête à l'emploi de l'éditeur/vendeur de logiciel officiel. 

Pour lister les templates disponibles (en fonction du matériel de votre serveur), utilisez l'appel API suivant :

> [!api]
>
> @api {GET} /dedicated/installationTemplate
>

Vous pouvez obtenir les détails tels que la compatibilité LVM, la disponibilité du système de fichiers d'un template OVHcloud spécifique avec l'appel API suivant :

> [!api]
>
> @api {GET} /dedicated/installationTemplate/{templateName}
>

Par exemple :

```json
{
    "templateName": "debian11_64",
    "filesystems": [
        "ext3",
        "ext4",
        "swap",
        "xfs"
    ],
    ...
    "lvmReady": true
}
```

La configuration du partitionnement définie dans un template OVHcloud n'est pas modifiable : c'est ce qu'on appelle la disposition par défaut du schéma de partitionnement.

> [!api]
>
> @api {GET} /dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition
> @api {GET} /dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}
>

**Templates personnalisés**

Les utilisateurs peuvent créer des templates d'installation personnalisés à partir des templates OVHcloud afin de pouvoir créer des dispositions de partitionnement personnalisées :

> [!api]
>
> @api {POST} /me/installationTemplate
>

Une fois créé, le template hérite de la disposition de partitionnement par défaut et les partitions peuvent être listées sur le schéma "default" :

> [!api]
>
> @api {GET} /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition
>

Une partition peut bien sûr être modifiée, supprimée, ajoutée puis affichée :

> [!api]
>
> @api {PUT} /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}
> @api {DELETE} /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}
> @api {POST} /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition
> @api {GET} /me/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}
>

#### Disposition des partitions dans l'API

**Structure**

Une disposition de partition est une liste de partitions. Voici un exemple de structure de partition :

```JSON
{
  "raid" : "1",
  "filesystem" : "ext4",
  "volumeName": "data",
  "size": 0,
  "order": 4,
  "type": "lv",
  "mountpoint": "/var/lib/vz",
}
```

> [!primary]
>
> order : il s'agit de l'ordre des partitions dans la matrice de partitions.
>

<!-- markdownlint-disable-next-line MD028 -->
> [!primary]
>
> type : primary, logical, lv.
>
> - lv : cela signifie que des couches LVM seront ajoutées au-dessus du périphérique [RAID logiciel](https://docs.ovh.com/fr/dedicated/raid-soft/) (ou de la partition physique si le niveau du RAID est 0)
> - primary : n'a de sens que pour les tables de partition MBR (quelques anciens serveurs non-UEFI ne supportent toujours pas GPT)
> - logical: si vous ne savez pas quoi choisir
>

<!-- markdownlint-disable-next-line MD028 -->
> [!primary]
>
> volumeName : utile uniquement si le type lv est défini.
>

**Tableau de compatibilité des systèmes de fichiers et des niveaux LVM + RAID**

Le tableau suivant donne une vue d'ensemble de la compatibilité des systèmes de fichiers avec les niveaux RAID et LVM dans le contexte OVHcloud :

|Filesystem|LVM|RAID 0|RAID 1|RAID 5|RAID 6|RAID 7|RAID 10|
|---|---|---|---|---|---|---|---|
|Btrfs, ext4, XFS|✅|✅|✅|✅|✅|❌|✅|
|ZFS¹|❌|✅|✅|✅|✅|✅|❌|
|swap|❌|⚠️²|❌|❌|❌|❌|❌|
|NTFS|❌|❌|✅³|❌|❌|❌|❌|
|UFS, VMFS5, VMFS6, VMFS-L⁴|❌|❌|❌|❌|❌|❌|❌|

¹ Pour plus d'informations, reportez-vous au tableau [vdevs ZFS vs standard RAID](#raidz2RAID).<br />
² Le niveau de RAID pour swap ne peut être que égal à 1 au sein de l’[API OVHcloud](https://api.ovh.com/). En réalité, les partitions swap n'utiliseront pas de RAID. Lorsqu'une partition swap de taille `s` est définie sur un serveur avec un nombre `n` de disques, cela créera `n` partitions de taille `s` sur chaque disque sans aucun dispositif RAID logiciel en dessous.<br />
³ Le RAID natif Windows (celui configuré par l'installateur OVHcloud) prend en charge le RAID 1 mais uniquement entre deux disques, alors que les autres implémentations en autorisent plus de deux.<br />
⁴ Le programme d'installation ESXi ne prend pas en charge les schémas de partitionnement personnalisés. Le partitionnement est défini par l'éditeur du logiciel. Néanmoins, l’[API OVHcloud](https://api.ovh.com/) peut vous donner une idée de ce à quoi ressemble le partitionnement : pour plus d'informations, consultez [les templates OVHcloud](#OVHcloudtemplates).<br />

> [!warning]
>
> Ce tableau est fourni uniquement à titre d'information. À noter que la compatibilité LVM et surtout filesystem dépend également de l’OS (template OVHcloud) installé. Consultez les [templates OVHcloud](#OVHcloudtemplates) pour plus de détails.
>

#### Vdevs ZFS vs RAID standard <a name="raidz2RAID"></a>

ZFS ne supporte pas les niveaux RAID standards. Il s'agit de périphériques virtuels (vdevs) pour décrire la tolérance aux pannes au sein d'un groupe de périphériques. Consultez la [documentation officielle d'OpenZFS](https://openzfs.github.io/openzfs-docs/man/7/zpoolconcepts.7.html) pour plus de détails sur les vdevs.

Afin de rendre l'API OVHcloud la plus simple possible, il est nécessaire que vous définissiez un RAID standard au sein de l'API pour les systèmes de fichiers ZFS. Le niveau RAID standard sera alors traduit par une définition équivalente de vdev. Le tableau suivant illustre la traduction des différents niveaux RAID proposés par l'API OVHcloud ainsi qu'un rappel de leurs caractéristiques respectives.

|RAID Standard|Type vdev équivalent|Nombre minimal de disques de données|Nombre de disques de parité|
|---|---|---|---|
|RAID 0|vdev entrelacé|1|0|
|RAID 1|mirror|2|0|
|RAID 5|raidz1|2|1|
|RAID 6|raidz2|3|2|
|RAID 7|raidz3|4|3|
|RAID 10|❌|4|0|

> [!warning]
>
> Le choix du RAID 7 (raidz3) ne peut être effectué que depuis l'API OVHcloud et non depuis l'espace client OVHcloud. Nous travaillons actuellement à ajouter cette fonctionnalité à votre espace client.
>

### Partitionnement du backend

#### Architecture

Il y a une couche d'abstraction entre la description du partitionnement sur l'API OVHcloud (assez minimaliste) et le partitionnement réel (qui peut être très complexe).

La particularité de ce partitionnement est la séparation entre le **pre-processing** et le **action script** :

![Composants du diagramme](images/Diagram-Components-Simplified.svg){.thumbnail}

- le **pre-processing** fonctionne sur l’infrastructure OVHcloud. Il convertit simplement les données de l'API OVHcloud en une représentation JSON plus riche.

- le **action-script** s'exécute sur votre serveur, prend la représentation riche en JSON du partitionnement et crée les partitions.

> [!primary]
>
> Les données JSON générées par le **pre-processing** sont également réutilisées à la fin du processus d'installation de l'OS pour valider le partitionnement. Ce script s'exécute sur votre serveur, il prend la représentation riche en JSON du partitionnement et la compare au partitionnement réel du serveur.
>

#### Gestion des erreurs

Les erreurs basiques de données d'entrée client sont directement traitées par l'API OVHcloud. Il s'agit de la situation la plus courante et la plus simple car les clients peuvent voir l'erreur de manière synchrone et réessayer immédiatement.

Les données d'entrée client liées au partitionnement peuvent être trop spécifiques pour être vérifiées par l'API OVHcloud et nécessiter par conséquent un **pre-processing**. L'inconvénient est que les clients sont avertis plus tard pendant le processus d'installation du système d'exploitation.

Celui-ci est visible via la barre de progression depuis [l'espace client OVHcloud](https://www.ovh.com/manager/#/dedicated/configuration).
Depuis l'[API OVHcloud](https://api.ovh.com/), cet état peut être obtenu avec l'appel API suivant :

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/install/status
>

Il y a 2 types d'erreurs :

- **erreurs ovh** : vous n'êtes pas responsable de l'erreur, vous pouvez réinstaller avec une autre disposition de partitionnement mais OVHcloud devra corriger le défaut.
- **erreurs clients**: vous avez demandé un schéma de partitionnement qui ne peut pas être réalisé ou qui empêcherait le serveur de démarrer correctement.

> [!primary]
>
> Le **action script** de partitionnement ne renvoie que des erreurs de type **ovh**.
>

Dans la section suivante, nous allons nous concentrer uniquement sur les types d'**erreurs client** dans l'étape de pre-processing du partitionnement, car cela n'est utile qu'aux clients.

#### Les erreurs clients fréquentes

Le tableau suivant donne un aperçu des erreurs clients les plus connues et de la manière de les corriger.

|Message d'erreur|Détails|Solution(s)|
|---|---|---|
|Certaines distributions Linux comme les OS de la famille RHEL ne supportent pas ces mountpoints / mountpoint reservé / managed by OVHcloud (`liste des mountpoints interdits`). Supprimez ces points de montage et relancez une installation.|- Vous avez choisi `/boot/efi` comme point de montage. OVHcloud créera cette partition automatiquement pour vous si votre serveur en a besoin.<br />- Vous avez choisi un point de montage qui est *symlinked* sur certains OS. Voir [Filesystem Hierarchy Standard](https://refspecs.linuxfoundation.org/fhs.shtml) pour plus de détails.|- Choisissez un autre point de montage pour la partition ou supprimez cette partition de votre schéma de partitionnement.|
|Une partition de type `t` avec un point de montage `m` ne peut pas remplir le disque.|- Vous avez choisi la partition `swap` pour remplir le disque, nous interdisons cela pour éviter de créer des partitions `swap` inutilement grosses.|- Définissez une taille fixe pour la partition de `swap`.|
|Partition `/` manquante. Veuillez ajouter une partition `/` dans votre schéma de partition!|- Tout système d'exploitation Linux nécessite au moins une partition `/`.|- Ajoutez une partition `/` dans votre schéma de partitionnement.|
|`message`. Veuillez ajuster les partitions de sorte que la partition `p` tienne sur `n` disque(s).|- Vous avez choisi une partition avec un RAID nécessitant un nombre de disques que votre serveur peut fournir, mais certains disques sont déjà pleins à cause d'autres partitions et/ou de cette partition actuelle.|- Si ce n'est pas déjà fait sur une autre partition, définissez la taille de la partition pour remplir le disque.<br />- Réduisez la taille de cette partition pour qu'elle s'adapte aux disques.<br />- Réduisez la taille des autres partitions pour que cette partition s'adapte aux disques.|

#### Saisir l'auto-correction du client

Afin d'améliorer l'expérience client, réduire la charge de travail du [support OVHcloud](https://help.ovhcloud.com/fr/) et éviter les changements brutaux qui pourraient avoir un impact pour le client, certaines saisies effectuées par le client sont automatiquement corrigées ou modifiées par le backend. Le tableau suivant donne une vue d'ensemble de ce qui est actuellement auto-corrigé / changé lors du **pre-processing** :

|Sujet|Description|
|---|---|
|Regroupement ZP|Toutes les partitions ZFS de même niveau RAID seront regroupées au sein d’un même zpool (ZP) (si possible en fonction de la taille des disques).|
|Regroupement LV|Toutes les partitions de type `lv` ayant le même niveau de RAID seront regroupées au sein d'un même VG (si possible en fonction de la taille des disques).|
|Expansion VG|Dans le cas de partitions lv de niveau RAID 0, le VG s’étendra sur plusieurs PP (donc PD) et aucun périphérique SR ne sera créé.|
|VG Remplissage de disque|L'espace disque restant sera comblé par un VG (si un LV existe). La taille des LV contenus dans ce VG n'est pas affectée.|
|Réduction du niveau RAID|Dans le cas où vous choisissez une partition avec un niveau RAID nécessitant plus de disques que le serveur n’en a, le niveau RAID sera automatiquement réduit dans l’ordre suivant : 6, 10, 5, 1, 0 (ou raidz3, raidz2, raidz, mirror, striped vdev pour ZFS).|
|Réduction de la taille du PP|Dans le cas où vous avez choisi un PP qui nécessite plus d'espace que le serveur a, la taille de ce PP sera réduite afin qu'il s'adapte au disque. Notez que dans le cas où plusieurs PP nécessitent plus d'espace que celui dont dispose le système, le script n'agira que sur la première partition, en remontant une erreur plus tard dans le script pour la seconde partition surdimensionnée. Notez également qu’une erreur sera générée si vous avez paramétré une autre partition pour remplir le disque via l’API OVHcloud.|

## Aller plus loin <a name="gofurther"></a>

[RAID logiciel](https://docs.ovh.com/fr/dedicated/raid-soft/)

[Gestion du RAID Matériel](https://docs.ovh.com/fr/dedicated/raid-hard/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
