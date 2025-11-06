---
title: "OPCP - Comment configurer LACP sur un serveur"
excerpt: "Apprenez à configurer un serveur dans OpenStack pour utiliser LACP (Link Aggregation Control Protocol)"
updated: 2025-11-06
---


## Objectif

Ce guide explique comment configurer un **serveur** dans **OPCP** pour activer **LACP (Link Aggregation Control Protocol)**.  
LACP permet d’agréger plusieurs interfaces réseau physiques afin d’augmenter la bande passante disponible et d’assurer la redondance réseau.  
Cette configuration s’effectue au niveau du serveur et permet à OpenStack de déployer une instance avec les interfaces configurées correctement.

> [!warning]
> Un utilisateur standard ne peut pas configurer LACP lui-même.  
> Vous devez être **opérateur**, ou disposer de **serveur disponible** dans votre projet OpenStack.
>
> Il est recommandé de configurer LACP **avant** le déploiement d’une instance.  
> Ce guide **ne couvre pas** la configuration sur un système déjà en production.

## Prérequis

Avant de commencer, assurez-vous de disposer des éléments suivants :

- Un accès **OpenStack CLI** configuré avec les droits nécessaires (`clouds.yaml` ou variables d’environnement).
- Le rôle **operator** ou des serveur transférés dans votre projet.
- Une compréhension basique des concepts suivants :
  - serveur (Ironic)
  - ports et groupes de ports dans OpenStack
  - commandes `openstack baremetal`

## En pratique

### Configuration du serveur

#### 1. Lister les serveur

La liste des serveurs disponibles dans votre projet peut être affichée avec la commande suivante :

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

---

#### 2. Transférer la propriété d’un serveur (opérateur uniquement)

Un opérateur peut transférer la propriété d’un serveur à un projet (tenant) donné :

```bash
openstack baremetal node set <node-id> --owner <tenant-id>
```

---

#### 3. Lister les ports réseau

Chaque carte réseau physique (NIC) d’un serveur est représentée dans OpenStack par un **port**.

Pour afficher la liste des ports associés à un serveur :

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

---

#### 4. Activer le mode maintenance

Avant toute modification de configuration réseau, le serveur doit être placé en **mode maintenance** :

```bash
openstack baremetal node maintenance set <node-id>
```

---

#### 5. Créer un groupe de ports (LACP Bond)

Le **groupe de ports** permet d’activer l’agrégation LACP entre plusieurs interfaces réseau.

Utilisez le paramètre `--mode 802.3ad` pour activer LACP.  
Si vous n’indiquez pas d’adresse MAC avec `--address`, l’adresse d’un des ports sera utilisée automatiquement.

> [!note]
> Vous pouvez créer :
> - un **groupe de ports unique** pour un bond 1×4, ou  
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

---

#### 6. Associer les ports au groupe

Chaque port du serveur doit être associé au groupe de ports créé :

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

---

#### 7. Désactiver le mode maintenance

Une fois la configuration terminée, désactivez le mode maintenance :

```bash
openstack baremetal node maintenance unset  <node-id>
```

---

#### 8. Créer une instance sur le serveur configuré

Une fois votre serveur configuré avec LACP, vous pouvez déployer une instance.

Par défaut, OpenStack sélectionne un hôte selon le **flavor** choisi et les **règles du scheduler**, ce qui ne garantit pas que le serveur que vous venez de configuré sera utilisé.

Deux solutions existent :

##### Option 1 — Créer un flavor spécifique

Définissez un flavor qui ne correspond qu’à votre serveur  
Cependant, cela peut être peu pratique si chaque projet doit avoir son propre flavor.

##### Option 2 — Utiliser une zone de disponibilité

Vous pouvez cibler un serveur précis en utilisant sa **zone de disponibilité** :

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

---

#### Résumé des étapes

| Étape | Action | Commande |
|-------|---------|-----------|
| 1 | Lister les serveurs | `openstack baremetal node list` |
| 2 | Transférer la propriété | `openstack baremetal node set <node-id> --owner <tenant-id>` |
| 3 | Lister les ports | `openstack baremetal port list --node <node-id>` |
| 4 | Activer le mode maintenance | `openstack baremetal node maintenance set <node-id>` |
| 5 | Créer un groupe LACP | `openstack baremetal port group create --node <node-id> --name <port-group-name> --mode 802.3ad` |
| 6 | Associer les ports | `openstack baremetal port set --port-group <port-group-id> <port-id>` |
| 7 | Désactiver le mode maintenance | `openstack baremetal node maintenance unset <node-id>` |
| 8 | Créer une instance | `openstack server create --image <image-name> --nic net-id=<network-1> --flavor <flavor-id> --key-name <keypair-name> --availability-zone "nova::<node-id>" <instance-name>` |

### Configuration du système d’exploitation de l’instance

#### Vérifier la configuration du bonding

Sur certaines images (comme **Debian 12** ou **Ubuntu 22.04**), la configuration du bonding est automatiquement détectée et configurée.  
Cependant, d’autres distributions peuvent nécessiter un ajustement manuel.

##### 1. Vérifier les bonds actifs

```bash
ls /proc/net/bonding/
bond0
```

##### 2. Vérifier les interfaces membres

```bash
cat /proc/net/bonding/bond0 | grep Interface
Slave Interface: ens22f1np1
Slave Interface: ens22f0np0
Slave Interface: ens21f1np1
Slave Interface: ens21f0np0
```

---

##### 3. Vérifier la politique de hachage (`Transmit Hash Policy`)

```bash
cat /proc/net/bonding/* | grep Trans
Transmit Hash Policy: layer2 (0)
```

> [!warning]  
> Pour exploiter toute la bande passante, la politique `layer3+4` doit être configurée.  
> Par défaut, certain OS utilise `layer2`, moins performante.

---

#### Modifier la configuration

##### 1. Changement à chaud (non persistant)

```bash
sudo ip link set bond0 type bond xmit_hash_policy layer3+4
```

#### 2. Changement persistant (exemple via Netplan et cloud-init)

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

---

#### 3. Tester la bande passante avec `iperf3`

Pour tester correctement LACP, vous devez disposer de **2 serveurs** dans le **même réseau**, tous deux configurés avec LACP.

##### Serveur Iperf3 (serveur 1)

```bash
iperf3 -s
```

##### Client Iperf3 (serveur 2)

Utilisez `-P` pour générer plusieurs flux parallèles, afin d’atteindre la bande passante maximale.

```bash
iperf3 -c <ip-du-serveur> -P 64
```

##### Exemple de résultat

```bash
[SUM] 0.0000-10.0121 sec   110 GBytes  94.0 Gbits/sec
```

Avec un lien 4×25 Gbps, vous devriez atteindre environ **100 Gbps**.
Il peux être nécessaire d'ajuster certains paramètres système pour exploiter pleinement cette capacité.

---

## Conclusion

Vous avez configuré :

- Le **LACP (802.3ad)** au niveau du serveur Baremetal OpenStack,  
- Le **paramétrage du bonding** dans l’OS invité,  
- Et validé la **performance réseau** via `iperf3`.

Votre instance est désormais prête à exploiter toute la bande passante disponible du lien agrégé.

---
