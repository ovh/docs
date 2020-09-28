---
title: 'Débuter avec NGC sur OpenStack'
slug: debuter_ngc_openstack
excerpt: 'Utilisez NVIDIA GPU Cloud (NGC) pour profiter du développement accéléré par GPU'
hidden: true
section: Gestion via OpenStack
order: 7
---

**Dernière mise à jour le 11/12/2018**

## Objectif

Les conteneurs accélérés par GPU offrent des performances de pointe pour le deep learning, les applications HPC ou encore les outils de visualisation haute performance.

**Découvrez comment configurer votre première instance de conteneur NVIDIA GPU Cloud (NGC) puis automatisez sa gestion avec le client OpenStack.**

## Prérequis

* Avoir accès à votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager).

## En pratique

### Créer une instance NGC via l'espace client OVH

Tout d'abord, [lancez un nouveau projet Public Cloud](https://docs.ovh.com/fr/public-cloud/getting_started_with_public_cloud_logging_in_and_creating_a_project/){.external}.

Puis [créez y une instance](https://docs.ovh.com/fr/public-cloud/creer-instance-espace-client/){.external} en sélectionnant les paramètres suivants :
- `NVIDIA GPU Cloud (NGC)` comme image ;
- une version compatible GPU, telle que `t1-45` ou `t1-90` pour un ou deux NVIDIA Tesla V100.

### Créer une instance NGC via l'interface en ligne de commande

Vous pouvez gérer vos instances Public Cloud à l'aide de l'API OpenStack standard et d'outils : `Terraform`, `Ansible`, etc.

Pour le moment, nous allons nous concentrer sur le client `OpenStack` en ligne de commande.

#### Configurez votre environnement local

Dans un premier temps, [créez-vous un compte utilisateur](https://docs.ovh.com/fr/public-cloud/creer-un-acces-a-horizon/){.external}.

Ensuite, cliquez sur l'icône `...`{.action} à la fin de la ligne, puis sélectionnez le lien `Télécharger le fichier de configuration OpenStack`{.action}.

Enregistrez alors le fichier sous `openrc.sh`.

##### À partir de Windows

Si vous utilisez Windows, suivez cette documentation pour configurer le client OpenStack : <https://github.com/naturalis/openstack-docs/wiki/Howto:-Installing-and-configuring-the-OpenStack-commandline-tools-on-Windows>.

##### À partir de Linux

Si vous utilisez un système d'exploitation basé sur Unix, utilisez votre gestionnaire de paquets préféré (comme `apt`, `yum` ou `emerge`) pour installer `python-openstackclient`. Puis sourcez le fichier de configuration que vous avez précédemment enregistré (`. ./Openrc.sh`).

#### Créer une machine virtuelle NGC

La première étape consiste à posséder une paire de clés SSH. Vous pouvez en créer une avec :

```shell
openstack keypair create mykey > mykey.pem
```

Ensuite, collectez les informations suivantes :
- Source ID: `openstack image list --name 'NVIDIA GPU Cloud (NGC)'` ;
- Flavor (version) : `'t1-45'` ;
- Network ID: `openstack network list --name 'Ext-Net'`.

Enfin, créez la machine virtuelle avec la commande suivante :

```shell
openstack server create --key-name mykey --image $SOURCE_ID --flavor $FLAVOR --network $NETWORK_ID my_vm
```

> [!attention]
>
> La facturation commence dès que la machine virtuelle est en service.
>

Vous pouvez vérifier le statut de la machine virtuelle avec `serveur openstack show my_vm` et la supprimer avec `serveur openstack, supprimer my_vm`.

Vous avez également la possibilité d'obtenir l'adresse IP de la machine virtuelle avec `serveur openstack avec my_vm` et SSH avec :

```shell
ssh -i ./mykey.pem ubuntu@<VM IP>
```

### Gérer votre premier conteneur NGC

Une fois connecté à la machine virtuelle, vous pouvez commencer à extraire et à exécuter le conteneur.

La liste des conteneurs disponibles (TensorFlow, Caffe2, DIGITS, Matab, MXNet, PyTorch, RAPIDS…) est disponible ici : <https://ngc.nvidia.com/catalog/containers>

Cliquez sur le lien suivant pour afficher un exemple de segmentation sémantique avec NVIDIA DIGITS : <https://github.com/NVIDIA/DIGITS/tree/master/examples/semantic-segmentation>

```shell
docker pull nvcr.io/nvidia/digits:18.11-tensorflow
docker run -p 8888:5000 nvcr.io/nvidia/digits:18.11-tensorflow
```

Ensuite, accédez à `http: // your_vm_ip: 8888`. 

Cliquez sur le lien suivant pour plus d'options et d'explications : <https://ngc.nvidia.com/catalog/containers/nvidia%2Fdigits>.

Si vous souhaitez automatiser les étapes ci-dessus, utilisez l’option `-f json` du client OpenStack et [l’analyseur de l’outil en ligne de commande `jq` JSON](https://stedolan.github.io/jq/manual/){.external}.

Exemple :

```shell
SOURCE_ID=`openstack image list --name 'NVIDIA GPU Cloud (NGC)' -f json | jq -r '.[0].ID'`
```

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
