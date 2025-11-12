---
title: "OPCP - Comment configurer LACP sur un noeud"
excerpt: "Apprenez à configurer un noeud dans OpenStack pour utiliser LACP (Link Aggregation Control Protocol)"
updated: 2025-11-10
---

## Objectif

La configuration de LACP doit être appliquée sur le noeud avant de déployer une instance, afin que les interfaces réseau soient correctement agrégées.

**Ce guide explique comment configurer un noeud (serveur physique) dans OPCP pour activer LACP (Link Aggregation Control Protocol)**.

Nous verrons également comment configurer le **bonding** (association logique de plusieurs interfaces réseau pour former une seule interface virtuelle) au niveau de votre instance, afin de tirer pleinement parti du **LACP**.

> [!warning]
> Un utilisateur standard ne peut pas configurer LACP lui-même.
> Vous devez être **admin**, ou disposer de **noeud disponible** dans votre projet OpenStack.
>
> Il est recommandé de configurer LACP **avant** le déploiement d’une instance.
> Ce guide **ne couvre pas** la configuration d'un noeud déjà en production.

## Pourquoi utiliser LACP ?

LACP peut être utilisé dans deux cas d'usage précis :

- **Augmenter la capacité réseau :** En agrégeant plusieurs cartes réseau, vous pourrez ajouter la bande passante de chaque carte réseau ajoutée à cet agrégat, pour les mêmes réseaux.
- **Augmenter la résilience :** Chaque serveur de OPCP bénéficie de 4 interfaces 25G. Chaque serveur est relié à deux switchs réseau (A&B) pour assurer la résilience en cas de panne matérielle de l'un d'entre eux. LACP permet de créer des interfaces virtuelles résilientes en cas de panne matérielle en aggrégant deux cartes réseau reliées sur des switchs distincts.

## Prérequis

Avant de commencer, assurez-vous de disposer des éléments suivants :

- Disposer d'un service [OPCP](/links/hosted-private-cloud/onprem-cloud-platform) actif.
- Un accès **[OpenStack CLI configuré](/pages/hosted_private_cloud/opcp/how-to-use-api-and-get-credentials)** avec les droits nécessaires (`clouds.yaml` ou variables d’environnement).
- Le rôle **admin** et/ou ou des noeuds transférés dans votre projet.

LACP est une configuration réseau spécifique, nécessitant des connaissances réseau et système avancées. Nous vous conseillons d'appliquer ce guide si vous connaissez déjà l'un ou plusieurs des concepts suivants : configuration de noeuds au sein de OpenStack Ironic, gestion des ports au sein de OpenStack Neutron, et la connaissance de la CLI OpenStack.

## En pratique

### Configuration du noeud

#### 1. Lister les noeuds

La liste des noeuds disponibles dans votre projet peut être affichée avec la commande suivante :

```bash
openstack baremetal node list
```

**Exemple de sortie :**

```bash
+--------------------------------------+----------------+--------------------------------------+-------------+--------------------+-------------+
| UUID                                 | Name           | Instance UUID                        | Power State | Provisioning State | Maintenance |
+--------------------------------------+----------------+--------------------------------------+-------------+--------------------+-------------+
| 88830859-5b16-4935-8f41-d381b754cbe5 | SERVER-1       | None                                 | power off   | available          | False       |
| 726bb7e9-3b20-4a44-99d7-2af747983781 | SERVER-2       | None                                 | power off   | available          | False       |
| af711edf-a579-491e-b474-3c03639ed99b | SERVER-3       | 83b7083b-bbdd-4327-941c-ee91197818c5 | None        | active             | True        |
+--------------------------------------+----------------+--------------------------------------+-------------+--------------------+-------------+
```

#### 2. Transférer la propriété d’un noeud (admin uniquement)

Un admin peut transférer la propriété d’un noeud à un projet donné :

```bash
openstack baremetal node set <node-id> --owner <project-id>
```

#### 3. Lister les ports réseau

Chaque carte réseau physique, appelée Network Interface Card (NIC), d’un nœud est représentée dans OpenStack par un port.

Pour afficher la liste des ports associés à un noeud :

```bash
openstack baremetal port list --node <node-id>
```

**Exemple de sortie :**

```bash
+--------------------------------------+-------------------+
| UUID                                 | Address           |
+--------------------------------------+-------------------+
| 068a06b2-ebf9-48c9-a3c3-94016ca5e3da | 85:32:f2:87:29:da |
| 4937d704-7517-4525-86d1-abecb94a7ce9 | 85:32:f2:87:29:db |
| 422eece6-dcfa-40cd-975d-ba8bb11c774e | 85:32:f2:89:66:f8 |
| 34073903-92ad-47d1-a751-15aa96991415 | 85:32:f2:89:66:f9 |
+--------------------------------------+-------------------+
```

Pour visualiser les détails d'un port, y compris les informations sur la connexion physique.<br>
Cela est particulièrement utile si vous souhaitez configurer un **bonding LACP 2x2**, en répartissant les NIC sur deux switches différents pour assurer une **meilleure redondance et tolérance aux pannes**.

```bash
openstack baremetal port show <port-id>
```

**Exemple de sortie :**

```bash
openstack baremetal port show 71899d54-546d-4fdd-8d8b-52ad986bf425
+-----------------------+------------------------------------------------------------------------------------------------+
| Field                 | Value                                                                                          |
+-----------------------+------------------------------------------------------------------------------------------------+
| address               | 85:32:f2:89:66:f9                                                                              |
| created_at            | 2025-01-06T10:43:38.020574+00:00                                                               |
| extra                 | {}                                                                                             |
| internal_info         | {}                                                                                             |
| is_smartnic           | False                                                                                          |
| local_link_connection | {'switch_id': 'c0:00:15:8c:33:78', 'port_id': 'Ethernet25/2', 'switch_info': 'demo-tor1b-a70'} |
| node_uuid             | ddc7c763-74fc-4900-b9e6-5463233836b0                                                           |
| physical_network      | None                                                                                           |
| portgroup_uuid        | c3d3fcb3-7a92-4257-b944-736d222e8c4a                                                           |
| pxe_enabled           | False                                                                                          |
| updated_at            | 2025-11-06T09:52:46.355883+00:00                                                               |
| uuid                  | 71899d54-546d-4fdd-8d8b-52ad986bf425                                                           |
+-----------------------+------------------------------------------------------------------------------------------------+
```

#### 4. Activer le mode maintenance

Avant toute modification de configuration réseau, le noeud doit être placé en **mode maintenance**. Cela assure que ce noeud ne puisse pas être déployé durant toute l'opération  :

```bash
openstack baremetal node maintenance set <node-id>
```

#### 5. Créer un groupe de ports (LACP Bond)

Le **groupe de ports** permet d’activer l’agrégation LACP entre plusieurs interfaces réseau.

Utilisez le paramètre `--mode 802.3ad` pour activer LACP.  Si vous n’indiquez pas d’adresse MAC avec `--address`, l’adresse d’un des ports sera utilisée automatiquement.

> [!success]
> Vous pouvez créer :<br>
> - un **groupe de ports unique** pour un bond 1×4, ou<br>
> - deux **groupes de ports** pour des bonds 2×2.

**Exemple :**

```bash
openstack baremetal port group create \
  --node 88830859-5b16-4935-8f41-d381b754cbe5 \
  --name portgroup-lacp \
  --mode 802.3ad \
  --address 00:00:00:20:00:01
```

**Exemple de sortie :**

```bash
+----------------------------+-------------------------------------------+
| Champ                      | Valeur                                    |
+----------------------------+-------------------------------------------+
| uuid                       | d082c2ab-5960-44e3-920d-3d6dfb6811e9      |
| address                    | 00:00:00:20:00:01                         |
| node_uuid                  | 88830859-5b16-4935-8f41-d381b754cbe5      |
| name                       | portgroup-lacp                            |
| mode                       | 802.3ad                                   |
| standalone_ports_supported | True                                      |
+----------------------------+-------------------------------------------+
```

#### 6. Associer les ports au groupe

Chaque port du noeud doit être associé au groupe de ports créé :

```bash
openstack baremetal port set --port-group <port-group-id> <port-id>
```

**Exemple :**

```bash
openstack baremetal port set --port-group d082c2ab-5960-44e3-920d-3d6dfb6811e9 068a06b2-ebf9-48c9-a3c3-94016ca5e3da
openstack baremetal port set --port-group d082c2ab-5960-44e3-920d-3d6dfb6811e9 4937d704-7517-4525-86d1-abecb94a7ce9
openstack baremetal port set --port-group d082c2ab-5960-44e3-920d-3d6dfb6811e9 422eece6-dcfa-40cd-975d-ba8bb11c774e
openstack baremetal port set --port-group d082c2ab-5960-44e3-920d-3d6dfb6811e9 34073903-92ad-47d1-a751-15aa96991415
```

#### 7. Désactiver le mode maintenance

Une fois la configuration terminée, désactivez le mode maintenance :

```bash
openstack baremetal node maintenance unset  <node-id>
```

#### 8. Créer une instance sur le noeud configuré

Une fois votre noeud configuré avec LACP, vous pouvez déployer une instance.

Par défaut, OpenStack sélectionne un hôte en fonction du **flavor** choisi et des **règles du scheduler**, ce qui ne garantit pas que le noeud que vous venez de configurer sera utilisé.

Pour vous assurer que votre instance sera déployée sur ce nœud précis, vous pouvez cibler ce dernier utilisant sa **zone de disponibilité** :

```bash
openstack server create --availability-zone "nova::<node-id>"
```

**Exemple :**

```bash
openstack server create --image <image-name> \
   --nic net-id=NETWORK1,v4-fixed-ip=198.18.56.200 \
   --flavor <flavor-id> \
   --key-name <keypair-name>  \
   --availability-zone "nova::<node-id>" \
   <instance-name>
```

#### Résumé des étapes

| Étape | Action | Commande |
|-------|---------|-----------|
| 1 | Lister les noeuds | `openstack baremetal node list` |
| 2 | Transférer la propriété | `openstack baremetal node set <node-id> --owner <tenant-id>` |
| 3 | Lister les ports | `openstack baremetal port list --node <node-id>` |
| 4 | Activer le mode maintenance | `openstack baremetal node maintenance set <node-id>` |
| 5 | Créer un groupe LACP | `openstack baremetal port group create --node <node-id> --name <port-group-name> --mode 802.3ad` |
| 6 | Associer les ports | `openstack baremetal port set --port-group <port-group-id> <port-id>` |
| 7 | Désactiver le mode maintenance | `openstack baremetal node maintenance unset <node-id>` |
| 8 | Créer une instance | `openstack server create --image <image-name> --nic net-id=<network-1> --flavor <flavor-id> --key-name <keypair-name> --availability-zone "nova::<node-id>" <instance-name>` |

### Configuration du système d’exploitation de l’instance

Après avoir configuré votre noeud dans OpenStack et déployé un système d’exploitation, il reste à configurer le réseau afin de bénéficier du network **bonding**, qui permet d’agréger plusieurs interfaces réseau pour plus de performance et de redondance.

#### Vérifier la configuration du bonding

Sur certaines images (comme **Debian 12** ou **Ubuntu 22.04**), la configuration du **bonding** est automatiquement détectée et configurée.<br>
Cependant, d’autres distributions peuvent nécessiter un ajustement manuel.

**1. Vérifier les bonds actifs**

```bash
ls /proc/net/bonding/
bond0
```

**2. Vérifier les interfaces membres**

```bash
cat /proc/net/bonding/bond0 | grep Interface
Slave Interface: ens22f1np1
Slave Interface: ens22f0np0
Slave Interface: ens21f1np1
Slave Interface: ens21f0np0
```

**3. Vérifier la politique de hachage (`Transmit Hash Policy`)**

```bash
cat /proc/net/bonding/* | grep Trans
Transmit Hash Policy: layer2 (0)
```

> [!warning]
> Pour exploiter toute la bande passante, configurez la politique `layer3+4` (par défaut, certains OS utilisent `layer2`, moins performante).
> Plus de détails : [Ubuntu Bonding Documentation](https://help.ubuntu.com/community/UbuntuBonding?utm_source=chatgpt.com)

#### Modifier la configuration

**1. Changement à chaud (non persistant)**

Si vous souhaitez tester votre configuration manuellement, vous pouvez utiliser la commande suivante :

```bash
sudo ip link set bond0 type bond xmit_hash_policy layer3+4
```

Attention, cette configuration sera réinitialisée si votre machine redémarre.

**2. Changement persistant (exemple via Netplan et cloud-init)**

Créez votre fichier de configuration (ex. `/etc/cloud/cloud.cfg.d/99-custom-network.cfg`) pour y inclure :

```yaml
network:
  version: 2
  ethernets:
    ens21f0np0: {}
    ens21f1np1: {}
    ens22f0np0: {}
    ens22f1np1: {}
  bonds:
    bond0:
      dhcp4: true
      interfaces:
        - ens21f0np0
        - ens21f1np1
        - ens22f0np0
        - ens22f1np1
      macaddress: 00:00:00:20:00:23
      parameters:
        mode: 802.3ad
        transmit-hash-policy: layer3+4
        lacp-rate: fast
        mii-monitor-interval: 100
```

Puis appliquez la configuration en rédémarrant l'instance.

#### 3. Tester la bande passante avec `iperf3`

Pour tester correctement LACP, vous devez disposer de **2 noeuds** dans le **même réseau**, tous deux configurés avec LACP.

**Serveur Iperf3 (noeud 1)**

```bash
iperf3 -s
```

**Client Iperf3 (noeud 2)**

Utilisez `-P` pour générer plusieurs flux parallèles, afin d’atteindre la bande passante maximale.

```bash
iperf3 -c <ip-du-noeud> -P 64
```

**Exemple de résultat**

```bash
[SUM] 0.0000-10.0121 sec   110 GBytes  94.0 Gbits/sec
```

Avec un lien 4×25 Gbps, vous devriez atteindre environ **100 Gbps**.
Il peux être nécessaire d'ajuster certains paramètres système pour exploiter pleinement cette capacité.

## Conclusion

Vous avez configuré :

- Le **LACP (802.3ad)** au niveau du noeud Baremetal OpenStack ;
- Le **paramétrage du bonding** dans l’OS invité ;
- Et validé la **performance réseau** via `iperf3`.

Votre instance est désormais prête à exploiter toute la bande passante disponible du lien agrégé.

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).
