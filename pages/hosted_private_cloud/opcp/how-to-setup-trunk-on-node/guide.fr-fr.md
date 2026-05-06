---
title: "OPCP - Comment configurer les ports Trunk sur un nœud"
excerpt: "Apprenez à configurer les ports Trunk Neutron dans OPCP pour une connectivité multi-réseau vlan sur des instances baremetal ou machines virtuelles"
updated: 2026-02-19
---

## Objectif

Les ports Trunk permettent à une seule instance (bare metal ou machine virtuelle) d'envoyer et de recevoir du trafic sur plusieurs réseaux Neutron via du vlan tagging, à travers une seule interface physique ou un [bond LACP](/pages/hosted_private_cloud/opcp/how-to-setup-lacp-on-node).

**Ce guide explique comment configurer les ports Trunk Neutron dans OPCP pour activer la connectivité multi-réseau (vlan) sur un nœud bare metal ou une machine virtuelle.**

Ce guide montre également comment configurer des **sous-interfaces vlan** au sein de votre instance pour accéder à chaque réseau rattaché au trunk.

> [!warning]
> La création de trunk nécessite le rôle **admin**. Un utilisateur projet ne peut pas créer de trunks.<br>
> L'ajout de sous-ports à un trunk nécessite également les droits admin par défaut, mais cela peut être délégué par votre administrateur.
>
> Il est recommandé de configurer le trunk **avant** le déploiement d'une instance.<br>
> Ce guide **ne couvre pas** la configuration d'un trunk sur une instance déjà en production.

## Pourquoi utiliser les ports Trunk ?

Les ports Trunk peuvent être utilisés dans trois cas d'usage précis :

- **Accès multi-réseau depuis une seule instance :** Les ports Trunk permettent à un serveur bare metal ou une machine virtuelle de communiquer sur plusieurs réseaux Neutron isolés via du vlan tagging, sans nécessiter de ports séparés pour chaque réseau.
- **Dépasser la limite d'interfaces physiques sur bare metal :** Sur un serveur bare metal, le nombre de réseaux Neutron est normalement limité par le nombre d'interfaces réseau physiques. Grâce aux ports Trunk, vous pouvez connecter plus de réseaux que d'interfaces physiques disponibles en multiplexant plusieurs vlans sur une seule interface ou un bond LACP.
- **Gestion réseau simplifiée :** Au lieu de provisionner plusieurs ports et de les attacher individuellement, vous créez un seul trunk avec des sous-ports, chacun taggé avec un vlan ID spécifique. Cela permet de garder la topologie réseau claire et maintenable.

## Prérequis

Avant de commencer, assurez-vous de disposer des éléments suivants :

- Un service [OPCP](/links/hosted-private-cloud/onprem-cloud-platform) actif.
- Un accès **[OpenStack CLI configuré](/pages/hosted_private_cloud/opcp/how-to-use-api-and-get-credentials)** avec les droits nécessaires (`clouds.yaml` ou variables d'environnement).
- Le rôle **admin** (nécessaire pour la création de trunks et la gestion des sous-ports).
- Au moins **deux réseaux Neutron** déjà créés dans votre projet (un pour le port parent et un ou plusieurs pour les sous-ports).
- Un nœud bare metal ou un projet de machine virtuelle disponible.

La configuration des ports Trunk est une fonctionnalité réseau avancée nécessitant une bonne connaissance des concepts réseau OpenStack Neutron, du vlan tagging et de la CLI OpenStack.

## En pratique

### Configuration réseau et Trunk

#### 1. Identifier vos réseaux

Avant de créer le trunk, identifiez les réseaux auxquels votre instance doit accéder. Listez les réseaux disponibles dans votre projet :

```bash
openstack network list
```

**Exemple de sortie :**

```bash
+--------------------------------------+--------------------+--------------------------------------+
| ID                                   | Name               | Subnets                              |
+--------------------------------------+--------------------+--------------------------------------+
| 3fa85f64-5717-4562-b3fc-2c963f66afa6 | primary-network    | a1b2c3d4-e5f6-7890-abcd-ef1234567890 |
| 7c9e6679-7425-40de-944b-e07fc1f90ae7 | network-1          | b2c3d4e5-f6a7-8901-bcde-f12345678901 |
| 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d | network-2          | c3d4e5f6-a7b8-9012-cdef-123456789012 |
+--------------------------------------+--------------------+--------------------------------------+
```

#### 2. Créer le port parent

Créez un port Neutron qui servira de **port parent** du trunk. Ce port est requis par le modèle trunk de Neutron pour ancrer le trunk à l'instance.

```bash
openstack port create --network <nom-reseau> <nom-port-parent>
```

**Exemple :**

```bash
openstack port create --network primary-network primary-port
```

**Exemple de sortie :**

```bash
+-------------------------+--------------------------------------+
| Field                   | Value                                |
+-------------------------+--------------------------------------+
| id                      | f47ac10b-58cc-4372-a567-0e02b2c3d479 |
| mac_address             | fa:16:3e:aa:bb:cc                    |
| name                    | primary-port                         |
| network_id              | 3fa85f64-5717-4562-b3fc-2c963f66afa6 |
| status                  | DOWN                                 |
+-------------------------+--------------------------------------+
```

> [!warning]
> Sur les **instances bare metal**, le port parent est un **port factice**. Il existe dans la base de données Neutron mais n'a **aucun effet sur le fabric réseau**. Le réseau assigné au port parent ne transportera **aucun** trafic vers l'instance. Toute la connectivité réseau réelle doit être configurée via les **sous-ports** (voir étapes 4 et 5).
>
> Sur les **machines virtuelles**, le port parent transporte le réseau parent en trafic **non taggé** sur l'interface de base. Les réseaux des sous-ports sont délivrés en trafic vlan taggé.

#### 3. Créer le Trunk

Créez un trunk Neutron en utilisant le port parent créé à l'étape précédente :

```bash
openstack network trunk create --parent-port <nom-port-parent> <nom-trunk>
```

**Exemple :**

```bash
openstack network trunk create --parent-port primary-port my-trunk
```

**Exemple de sortie :**

```bash
+----------------+--------------------------------------+
| Field          | Value                                |
+----------------+--------------------------------------+
| id             | 550e8400-e29b-41d4-a716-446655440000 |
| name           | my-trunk                             |
| parent_port_id | f47ac10b-58cc-4372-a567-0e02b2c3d479 |
| status         | DOWN                                 |
| sub_ports      |                                      |
+----------------+--------------------------------------+
```

> [!primary]
> À ce stade, le trunk existe mais n'est attaché à aucun serveur. Le port parent est un port Neutron standard qui sera référencé lors de la création de l'instance.

#### 4. Créer un sous-port

Créez un port Neutron sur chaque réseau que vous souhaitez rendre accessible via le trunk :

```bash
openstack port create --network <nom-reseau> <nom-sous-port>
```

**Exemple :**

```bash
openstack port create --network network-1 sub-port-1
```

#### 5. Ajouter le sous-port au Trunk

Attachez le sous-port au trunk en spécifiant le type de segmentation (`vlan`) et l'identifiant de segmentation correspondant au tag vlan du réseau :

```bash
openstack network trunk set \
  --subport port=<nom-sous-port>,segmentation-type=vlan,segmentation-id=<vlan-id> \
  <nom-trunk>
```

**Exemple :**

```bash
openstack network trunk set \
  --subport port=sub-port-1,segmentation-type=vlan,segmentation-id=100 \
  my-trunk
```

> [!warning]
> Le comportement du `segmentation-id` diffère selon le type d'instance :
>
> - **Bare metal :** le `segmentation-id` **doit correspondre** à l'identifiant de segmentation du réseau assigné au sous-port. Neutron ne vérifie pas cette valeur, mais si elle ne correspond pas, le trafic n'atteindra pas l'instance.
> - **Machines virtuelles :** le `segmentation-id` peut être **n'importe quelle valeur** de votre choix. L'hyperviseur gère la traduction entre le tag vlan du sous-port et l'identifiant de segmentation réel du réseau.

> [!primary]
> Pour ajouter d'autres réseaux, répétez les étapes 4 et 5 pour chaque réseau supplémentaire. Pour les instances bare metal, utilisez le `segmentation-id` correspondant à chaque réseau.

#### 6. Vérifier la configuration du Trunk

Confirmez que le trunk est correctement configuré avec tous les sous-ports attendus :

```bash
openstack network trunk show <nom-trunk>
```

**Exemple :**

```bash
openstack network trunk show my-trunk
```

**Exemple de sortie :**

```bash
+----------------+------------------------------------------------------------------------------------------------+
| Field          | Value                                                                                          |
+----------------+------------------------------------------------------------------------------------------------+
| id             | 550e8400-e29b-41d4-a716-446655440000                                                           |
| name           | my-trunk                                                                                       |
| parent_port_id | f47ac10b-58cc-4372-a567-0e02b2c3d479                                                           |
| status         | DOWN                                                                                           |
| sub_ports      | [{"port_id": "...", "segmentation_id": 100, "segmentation_type": "vlan"}]                      |
+----------------+------------------------------------------------------------------------------------------------+
```

#### 7. Déployer une instance avec le Trunk

Créez l'instance en référençant le **port parent**. OpenStack configurera le trunk lors du provisionnement.

```bash
openstack server create \
  --image <nom-image> \
  --flavor <flavor> \
  --port <nom-port-parent> \
  --key-name <nom-keypair> \
  <nom-instance>
```

**Exemple bare metal :**

```bash
openstack server create \
  --image ubuntu-22.04 \
  --flavor baremetal \
  --port primary-port \
  --key-name my-keypair \
  --availability-zone "nova::88830859-5b16-4935-8f41-d381b754cbe5" \
  my-trunk-instance
```

**Exemple machine virtuelle :**

```bash
openstack server create \
  --image ubuntu-22.04 \
  --flavor m1.large \
  --port primary-port \
  --key-name my-keypair \
  my-trunk-instance
```

> [!warning]
> Vous **devez** utiliser `--port` (en référençant le port parent) plutôt que `--nic net-id=...`. Utiliser `--nic` créerait un nouveau port et contournerait entièrement la configuration trunk.

#### Résumé des étapes

| Étape | Action | Commande |
|-------|--------|----------|
| 1 | Lister les réseaux | `openstack network list` |
| 2 | Créer le port parent | `openstack port create --network <nom-reseau> <nom-port-parent>` |
| 3 | Créer le trunk | `openstack network trunk create --parent-port <nom-port-parent> <nom-trunk>` |
| 4 | Créer un sous-port | `openstack port create --network <nom-reseau> <nom-sous-port>` |
| 5 | Ajouter le sous-port au trunk | `openstack network trunk set --subport port=<nom-sous-port>,segmentation-type=vlan,segmentation-id=<vlan-id> <nom-trunk>` |
| 6 | Vérifier le trunk | `openstack network trunk show <nom-trunk>` |
| 7 | Déployer l'instance | `openstack server create --port <nom-port-parent> --flavor <flavor> ...` |

### Configuration du système d'exploitation de l'instance

Après le déploiement de votre instance, vous devez configurer des **sous-interfaces vlan** dans l'OS invité pour accéder à chaque réseau rattaché via les sous-ports du trunk.

> [!warning]
> La configuration automatique du trunk via cloud-init n'est **pas possible**. OpenStack ne transmet pas les métadonnées trunk au userdata de l'instance. Vous devez configurer les sous-interfaces vlan manuellement ou via un outil de provisionnement post-déploiement.

> [!warning]
> Sur les **instances bare metal**, le port parent étant un port factice sans effet sur le fabric réseau, l'interface réseau de base n'aura **aucune** connectivité réseau par défaut. Tous les réseaux doivent être accessibles via des sous-interfaces vlan correspondant au `segmentation-id` assigné à chaque sous-port.
>
> Sur les **machines virtuelles**, l'interface de base transporte le réseau parent en trafic non taggé. Seuls les réseaux des sous-ports nécessitent des sous-interfaces vlan.

#### 1. Identifier l'interface réseau principale

Connectez-vous à votre instance et identifiez l'interface réseau principale :

```bash
ip link show
```

Repérez l'interface principale (par exemple `ens3`, `ens21f0np0`, ou `bond0` si LACP est configuré). C'est l'interface physique qui transporte le trunk.

#### 2. Créer des sous-interfaces vlan (temporaire)

Pour chaque sous-port, créez une sous-interface vlan correspondant au `segmentation-id` que vous avez assigné. Il s'agit d'une méthode non persistante pour les tests :

```bash
sudo ip link add link <interface-principale> name <interface-principale>.<vlan-id> type vlan id <vlan-id>
sudo ip link set <interface-principale>.<vlan-id> up
sudo ip addr add <adresse-ip>/<cidr> dev <interface-principale>.<vlan-id>
```

**Exemple :**

```bash
sudo ip link add link ens3 name ens3.100 type vlan id 100
sudo ip link set ens3.100 up
sudo ip addr add 192.168.1.10/24 dev ens3.100
```

> [!warning]
> Cette configuration ne survivra pas à un redémarrage. Consultez l'étape suivante pour une configuration persistante.

#### 3. Configuration persistante (exemple Netplan)

Pour une configuration persistante des sous-interfaces vlan avec Netplan (Ubuntu/Debian avec cloud-init), créez un fichier de configuration (par exemple `/etc/netplan/60-vlans.yaml`) :

```yaml
network:
  version: 2
  vlans:
    ens3.100:
      id: 100
      link: ens3
      addresses:
        - 192.168.1.10/24
    ens3.200:
      id: 200
      link: ens3
      addresses:
        - 10.0.0.10/24
```

Puis appliquez la configuration :

```bash
sudo netplan apply
```

> [!primary]
> Si votre instance utilise le bonding LACP (voir le [guide LACP](/pages/hosted_private_cloud/opcp/how-to-setup-lacp-on-node)), remplacez `ens3` par le nom de votre interface bond (par exemple `bond0`). Les sous-interfaces vlan deviennent alors `bond0.100`, `bond0.200`, etc.

#### 4. Vérifier la connectivité

Vérifiez que vos sous-interfaces vlan sont actives et possèdent les bonnes adresses IP :

```bash
ip addr show <interface-principale>.<vlan-id>
```

Puis testez la connectivité :

```bash
ping <passerelle-ou-pair-sur-vlan>
```

**Exemple :**

```bash
ip addr show ens3.100
ping 192.168.1.1
```

> [!success]
> Si le ping réussit, votre sous-interface vlan est correctement configurée et le trunk transporte le trafic du réseau correspondant.

## Conclusion

Vous avez configuré avec succès :

- Les **ports Trunk Neutron** au niveau OpenStack, connectant une instance à plusieurs réseaux via du vlan tagging ;
- Les **sous-interfaces vlan** dans l'OS invité pour accéder à chaque réseau rattaché via les sous-ports du trunk ;
- Et vérifié la **connectivité réseau** sur chaque vlan.

Votre instance peut désormais communiquer sur plusieurs réseaux isolés grâce à une seule configuration trunk.

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en œuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts du service Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).