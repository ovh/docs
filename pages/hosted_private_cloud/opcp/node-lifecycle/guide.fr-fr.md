---
title: "Cycle de vie d'un nœud OPCP"
excerpt: "Découvrez le cycle de vie d'un nœud OPCP et ses différents status"
updated: 2025-11-18
---

## Objectif

Un nœud dans openstack représente la configuration d'un serveur physique du rack OPCP. Il faut les différencer des instances qui représente le système d'exploitation sur un nœud.

Ce guide vous détaille les différents status d'un nœud dans une baie OPCP et comment les modifier.

## Prérequis

- Disposer d'un service [OPCP](/links/hosted-private-cloud/onprem-cloud-platform) actif.
- Posséder un compte utilisateur avec les droits admin pour se connecter à Horizon sur l'offre OPCP.
- (Optionnel) Avoir un accès aux API Openstack de votre projet.
- (Optionnel) Avoir installé le client ironic.

## En pratique

Connectez vous à l'interface Horizon de votre OPCP sur le projet admin.

![dashboard](images/01-log-to-horizon.png){.thumbnail}

Si vous souhaitez suivre la partie API Openstack, il sera nécessaire d'installer les paquets ironic sur votre environnement :

```bash
pip install python-ironicclient
```

### Vérifier le status d'un nœud

Vous pouvez vérifier le statut d'un nœud directement depuis Horizon via l'onglet `Admin` > `System` > `Ironic Bare Metal Provisioning` :

![server-status](images/02-server-status.png){.thumbnail}

Vous retrouverez la liste de vos nœuds ainsi que leurs différents status.

Depuis les API Openstack, vous pouvez retrouver la même liste via la commande suivante :

```bash
baremetal node list
```

Vous pouvez également vérifier le statut d'un nœud spécifique :

```bash
baremetal node show $BAREMETAL_NODE_ID
```

### Différents status possibles

|Statuts|Description|
|---|---|
|Enroll|Premier état du nœud lorsqu'il a été découvert automatiquement par OPCP. Le serveur n'a pas encore été vérifié et doit être rendu `Manageable` manuellement.|
|Manageable|Le nœud a été vérifié et est géré par Ironic, il n'est cependant pas encore installable. Le nœud doit être passé en état `Available` avant de pouvoir être installé.|
|Available|Le nœud est disponible et peut être installé.|
|Active|Le nœud est installé et a une instance active sur celui-ci.|
|Verifying|Etat transitoire lorsqu'un nœud passe de l'état `Enroll` à `Manageable`. Ironic vérifie qu'il peut gérer le nœud via les drivers et propriétés hardware configurés lors de la découverte faite par le control plane.|
|Cleaning / Clean-wait|Etat transitoire lorsqu'une instance est supprimée ou sort de l'état `Manageable` avant de redevenir `Available`. Les disques sont formatés durant cette étape.|
|Deploying / Wait call-back|Etat transitoire lorsque le nœud est en cours d'installation.|

Vous pouvez retrouver le détail des différents status dans la [documentation OpenStack officielle](https://docs.openstack.org/ironic/7.0.1/api/ironic.common.states.html).

### Cycle de vie d'un nœud

![node-lifecyle](images/03-node-lifecycle.png){.thumbnail}

Lorsqu'un nœud est installé et démarré dans une baie OPCP, la découverte du nœud est automatiquement effectuée par le control plane. C'est à ce moment que le nœud récupère ses propriétés et **traits** en fonction du profil hardware de celui-ci.

Une fois que le nœud est dans l'état `Enroll`, vous pouvez modifier son état pour qu'il soit géré par Ironic.

**Depuis l'interface Horizon :**

![server-manageable](images/03-server-status-to-manageable.png){.thumbnail}

**Depuis les API Openstack :**

```bash
baremetal node manage $BAREMETAL_NODE_ID
```

Pour rendre le nœud disponible à l'installation, il faut ensuite le passer en statut `Available` :

**Depuis l'interface Horizon :**

![server-available](images/03-server-status-to-available.png){.thumbnail}

**Depuis les API Openstack :**

```bash
baremetal node provide $BAREMETAL_NODE_ID
```

Le nœud passe alors en status `Cleaning` puis `Available`, ce qui le rend installable par les différents projets de votre environnement OPCP.

### Mode maintenance

Ce mode peut être activé afin de rendre un nœud non disponible pour un installation, même si celui-ci est dans le statut `Available`.

**Depuis l'interface Horizon :**

![Maintenance-on](images/04-server-to-maintenance-on.png){.thumbnail}

Lors de la mise en maintenance, vous pouvez indiquer un motif afin que l'équipe responsable des nœuds dispose de cette information. Cette raison reste optionnelle.

![Maintenance-reason](images/04-server-to-maintenance-reason.png){.thumbnail}

Une fois votre maintenance terminée, vous pouvez retirer la maintenance :

![Maintenance-off](images/04-server-to-maintenance-off.png){.thumbnail}

**Depuis les API openstack :**

```bash
baremetal node maintenance set $BAREMETAL_NODE_ID --reason "Maintenance reason"
```

Vous pouvez ensuite retrouver la maintenance et la raison via la commande suivante :

```bash
baremetal node show $BAREMETAL_NODE_ID
```

Vous trouverez les lignes :

```bash
| maintenance              | True
| maintenance_reason       | "Maintenance reason"
```

Pour sortir le nœud de la maintenance, vous pouvez utiliser la commande :

```bash
baremetal node maintenance unset $BAREMETAL_NODE_ID
```

### Références

- [Openstack Official Documentation - Horizon](https://docs.openstack.org/horizon/latest/)
- [Openstack Ironic States](https://docs.openstack.org/ironic/7.0.1/api/ironic.common.states.html)
- [Openstack Ironic Troubleshooting - Maintenance](https://docs.openstack.org/ironic/latest/install/troubleshooting.html)

## Go further

If you need training or technical assistance for the implementation of our solutions, contact your sales representative or click [this link](/links/professional-services) to request a quote and have your project analyzed by our Professional Services team experts.

Join our [community of users](/links/community).
