---
title: "OPCP - Comment configurer un RAID logiciel sur un nœud"
excerpt: "Apprenez à configurer et gérer un RAID logiciel sur un nœud OpenStack Ironic dans OPCP"
updated: 2026-01-13
---

## Objectif

Ce guide vous explique comment configurer et gérer un **RAID logiciel** (RAID software) sur un nœud OpenStack Ironic dans votre environnement OPCP.

Le RAID logiciel permet de créer une configuration de redondance au niveau logiciel, sans nécessiter de contrôleur RAID matériel dédié. Cette solution est particulièrement utile pour améliorer la disponibilité et les performances de stockage de vos instances.

**Ce guide couvre :**

- La configuration du RAID logiciel via l'interface agent d'Ironic
- La vérification de la configuration RAID
- Les bonnes pratiques pour la gestion du RAID logiciel

> [!warning]
> La configuration du RAID logiciel doit être effectuée **avant** le déploiement d'une instance sur le nœud.
> Une fois une instance déployée, la modification de la configuration RAID nécessite la suppression de l'instance et la reconfiguration du nœud.
> La création ou la modification d'un RAID efface les données présentes sur les disques utilisés.
>
> La supervision du RAID logiciel est à la charge du client final, nous n'avons pas d'accès à l'instance déployée pour gérer le monitoring. Il est recommandé de mettre en place un système d'alerte (par exemple en utilisant la commande `mdadm --monitor`) et d'intégrer cette supervision à vos outils de monitoring existants.

## Prérequis

Avant de commencer, assurez-vous de disposer des éléments suivants :

- Un service [OPCP](/links/hosted-private-cloud/onprem-cloud-platform) actif.
- Un accès **[OpenStack CLI configuré](/pages/hosted_private_cloud/opcp/how-to-use-api-and-get-credentials)** avec les droits nécessaires (`clouds.yaml` ou variables d'environnement).
- Le rôle **admin** et/ou les nœuds transférés dans votre projet.
- Un nœud disponible (statut `available`) ou en mode maintenance.
- Une image système **Linux** (type GNU/Linux) est requise pour l'instance. Cette image doit inclure le paquet `mdadm` ou permettre son installation. Les appliances VMware et les systèmes d'exploitation Windows par exemple ne sont pas compatibles avec cette procédure.
- Connaissances de base sur OpenStack Ironic et la gestion des nœuds baremetal.

## Pourquoi utiliser un RAID logiciel ?

Le RAID logiciel offre plusieurs avantages dans un environnement OPCP :

- **Redondance des données** : Protection contre la perte de données en cas de défaillance d'un disque.
- **Amélioration des performances** : Répartition des opérations de lecture/écriture sur plusieurs disques.
- **Coût réduit** : Pas besoin de contrôleur RAID matériel dédié.

## En pratique

### 1. Vérifier les disques disponibles sur le nœud

Avant de configurer le RAID, vous devez identifier les disques disponibles sur votre nœud.

**Lister les nœuds disponibles :**

```bash
openstack baremetal node list
```

**Vérifier les propriétés hardware du nœud :**

```bash
openstack baremetal node show <node-id>
```

### 2. Activer le mode maintenance

Avant toute modification de configuration, placez le nœud en **mode maintenance** :

```bash
openstack baremetal node maintenance set <node-id> --reason "Configuration RAID logiciel"
```

### 3. Niveaux de RAID supportés <a name="raid-levels"></a>

Ironic supporte plusieurs niveaux de RAID logiciel. Les valeurs suivantes sont acceptées dans la configuration JSON :

| Niveau RAID | Valeur JSON | Description | Nombre minimum de disques |
|-------------|-------------|-------------|---------------------------|
| **RAID 1** | `"1"` | Mirroring (miroir) | 2 |

> [!warning]
> 
> **Contrainte importante** : Le premier disque logique avec `is_root_volume: true` **doit obligatoirement être en RAID 1**. Les autres niveaux RAID (RAID 0, 5, 6, 10, etc.) ne sont pas autorisés pour le volume racine.

Il est donc possible de faire uniquement du RAID 1 pour le déploiement de l'instance.

### 4. Configurer le RAID logiciel

Ironic permet de configurer le RAID logiciel via l'interface **agent**. Cette configuration est appliquée automatiquement lors du déploiement d'une instance.

#### 4.1. Vérifier et activer l'interface agent si nécessaire <a name="check-agent"></a>

Avant de configurer le RAID, vérifiez l'interface RAID actuellement configurée sur le nœud :

```bash
openstack baremetal node show <node-id> -f json | jq '.raid_interface'
```

Si la sortie est `null` ou différente de `"agent"`, activez l'interface agent pour le RAID :

```bash
openstack baremetal node set <node-id> --raid-interface=agent
```

#### 4.2. Créer le fichier de configuration RAID

Créez un fichier JSON contenant la configuration RAID souhaitée. Voici un exemple pour créer un RAID 1 (mirroring) avec deux disques :

```bash
cat > /tmp/raid1.json <<EOF
{
  "logical_disks": [{
    "controller": "software",
    "size_gb": "MAX",
    "raid_level": "1",
    "is_root_volume": true,
    "physical_disks": [
      {"size": "<1000"},
      {"size": "<1000"}
    ]
  }]
}
EOF
```

> [!primary]
> 
> Le paramètre `"size": "<1000"` dans `physical_disks` permet de sélectionner automatiquement des disques de moins de 1000 Go. Vous pouvez ajuster cette valeur selon la taille de vos disques ou utiliser d'autres critères de sélection.

#### 4.3. Appliquer la configuration RAID

Une fois le fichier de configuration créé, appliquez-le au nœud :

```bash
openstack baremetal node set <node-id> --target-raid-config /tmp/raid1.json
```

> [!primary]
> La configuration RAID est appliquée lors du prochain cycle de *cleaning* ou de déploiement. Si le *cleaning* automatique est désactivé, déclenchez un nettoyage manuel avant de remettre le nœud en `available` :
>
> ```bash
> openstack baremetal node clean <node-id>
> ```

#### 4.4. Vérifier la configuration RAID

Pour vérifier la configuration RAID appliquée sur un nœud :

```bash
openstack baremetal node show <node-id> -f json | jq '.target_raid_config'
```

### 5. Désactiver le mode maintenance

Une fois la configuration RAID terminée, désactivez le mode maintenance :

```bash
openstack baremetal node maintenance unset <node-id>
```

### 6. Déployer une instance sur le nœud configuré

Une fois le RAID configuré, vous pouvez déployer une instance sur le nœud :

```bash
openstack server create \
  --image <image-name> \
  --flavor <flavor-id> \
  --key-name <keypair-name> \
  --nic net-id=<network-id> \
  --availability-zone "nova::<node-id>" \
  <instance-name>
```

> [!success]
> 
> Pour vous assurer que votre instance est déployée sur le nœud configuré avec RAID, utilisez la zone de disponibilité `nova::<node-id>`.

### 7. Vérifier la configuration RAID après déploiement

Une fois l'instance déployée, vous pouvez vérifier la configuration RAID depuis l'instance :

**Vérifier les périphériques RAID :**

```bash
cat /proc/mdstat
```

**Exemple de sortie :**

```
Personalities : [raid1] [raid10] [linear] [multipath] [raid0] [raid6] [raid5] [raid4]
md0 : active raid1 sda[0] sdb[1]
      500G 0 blocks super 1.2 [2/2] [UU]

unused devices: <none>
```

**Vérifier les détails d'un périphérique RAID :**

```bash
mdadm --detail /dev/md0
```

## Résumé des commandes principales

| Action | Commande |
|--------|----------|
| Lister les nœuds | `openstack baremetal node list` |
| Activer le mode maintenance | `openstack baremetal node maintenance set <node-id>` |
| Vérifier l'interface RAID | `openstack baremetal node show <node-id> -f json \| jq '.raid_interface'` |
| Activer l'interface agent RAID | `openstack baremetal node set <node-id> --raid-interface=agent` |
| Appliquer la configuration RAID | `openstack baremetal node set <node-id> --target-raid-config /tmp/raid1.json` |
| Vérifier la configuration RAID | `openstack baremetal node show <node-id> -f json \| jq '.target_raid_config'` |
| Désactiver le mode maintenance | `openstack baremetal node maintenance unset <node-id>` |
| Déployer une instance | `openstack server create --image <image-name> --flavor <flavor-id> --key-name <keypair-name> --nic net-id=<network-id> --availability-zone "nova::<node-id>" <instance-name>` |
| Vérifier l'état RAID (depuis l'instance) | `cat /proc/mdstat` |

## Bonnes pratiques

- **Toujours configurer le RAID avant le déploiement** : La configuration doit être effectuée sur un nœud sans instance active.
- **Utiliser le mode maintenance** : Placez toujours le nœud en maintenance avant toute modification.
- **Sauvegardes régulières** : Le RAID n'est pas une solution de sauvegarde, effectuez des sauvegardes régulières de vos données.
- **Supervision du RAID** : Mettez en place un monitoring du RAID (par exemple via `mdadm --monitor`) et intégrez les alertes à vos outils de supervision pour détecter rapidement toute dégradation ou panne de disque.

## Limitations et considérations

- **Performance** : Le RAID logiciel peut avoir un impact sur les performances CPU par rapport au RAID matériel.
- **Compatibilité** : Tous les systèmes d'exploitation ne supportent pas tous les niveaux de RAID logiciel.
- **Reconstruction** : La reconstruction d'un RAID après remplacement d'un disque peut prendre du temps et consommer des ressources.

## Dépannage

| Erreur | Cause | Solution |
|--------|-------|----------|
| `Driver redfish does not support raid (disabled or not implemented). (HTTP 404).` | L'interface RAID n'est pas configurée sur `agent`. | Voir la [section 4.1 - Vérifier et activer l'interface agent si nécessaire](#check-agent). |
| `Software RAID Configuration requires RAID-1 for the first logical disk`. | Le premier disque logique avec `is_root_volume: true` doit être en RAID 1. | Utiliser RAID 1 pour le volume racine.<br/> Voir la [section 3 - Niveaux de RAID supportés](#raid-levels). |

## Références

- [OpenStack Ironic Documentation - RAID Configuration](https://docs.openstack.org/ironic/latest/admin/raid.html)
- [mdadm Documentation](https://linux.die.net/man/8/mdadm)
- [Guide OPCP - Cycle de vie d'un nœud](/pages/hosted_private_cloud/opcp/node-lifecycle)

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en œuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour demander un devis et faire analyser votre projet par nos experts de l'équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
