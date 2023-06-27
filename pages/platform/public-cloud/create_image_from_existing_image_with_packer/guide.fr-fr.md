---
title: Créer une image OpenStack personnalisée avec Packer
excerpt: Créer et personnaliser une image OpenStack à partir d’une image existante avec Packer
updated: 2018-10-24
---

**Dernière mise à jour le 24/10/2020**

## Objectif

**Ce guide vous montrera comment créer un fichier de configuration Packer pour créer votre propre image OpenStack.**

## Prérequis

- Un projet [Public Cloud](https://www.ovhcloud.com/fr/public-cloud/).
- Un terminal

## En pratique

### Installer Packer

Packer peut être téléchargé depuis le site officiel [ici](https://www.packer.io/downloads.html) et vous devrez le décompresser.

Pour Linux 64bits :

```shell
wget https://releases.hashicorp.com/packer/1.3.1/packer_1.3.1_linux_amd64.zip
unzip packer_1.3.1_linux_amd64.zip
```

### Installer jq

`jq` est un outil de ligne de commande pour [analyser le document JSON](https://stedolan.github.io/jq/manual/). 

Il sera utilisé pour automatiser la création du fichier de configuration.

```shell
apt-get install jq
```

### Récupérer votre configuration openrc.sh

À partir de votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), récupérez votre fichier de configuration `openrc.sh`. 

Vous pouvez le retrouver via le menu OpenStack dans le panneau latéral gauche puis sous le bouton `...`{.action} sur la droite, vous trouverez le bouton `Télécharger un fichier de configuration OpenStack`{.action} 

La [création d'un utilisateur OpenStack](/pages/platform/public-cloud/create_and_delete_a_user) peut s'avérer nécessaire au préalable.

### Installer le client de ligne de commande OpenStack

La méthode la plus simple est  d'utiliser un environnement virtuel python.

```shell
python3 -m venv venv3 # crée un environnement virtuel nommé venv3
. ./venv3/bin/activate # renseignez l’environnement virtuel
pip install --upgrade pip
pip install python-openstackclient
```

ou d'installer votre package de distribution  `apt-get install python-openstackclient`.

#### Vérification

En utilisant le fichier de configuration `openrc.sh` récupéré précédemment, essayez votre installation locale avec :

```shell
. ./openrc.sh
openstack token issue
```

## Configuration de Packer

D'abord, chargez votre fichier `openrc.sh` avec

```shell
. ./openrc.sh
```

Il faut à présent trouver les ID nécessaires. Vous aurez besoin des ID de l’image, de la flavor et du réseau. Nous construirons notre image à partir de `Ubuntu 16.04` sur un matériel `vps-ssd-1`, avec une interface connectée au réseau public `Ext-Net`

```shell
SOURCE_ID=`openstack image list -f json | jq -r '.[] | select(.Name == "Ubuntu 16.04") | .ID'`
FLAVOR_ID=`openstack flavor list -f json | jq -r '.[] | select(.Name == "vps-ssd-1") | .ID'`
NETWORK_ID=`openstack network list -f json | jq -r '.[] | select(.Name == "Ext-Net") | .ID'`
```

**INFO**: pour `FLAVOR_ID`, vous pouvez utiliser directement le nom, comme `vps-ssd-1`

Enfin, créez un fichier `packer.json`

```shell
cat > packer.json <<EOF
{
    "builders": [
        {
            "type": "openstack",
            "username": "$OS_USERNAME",
            "password": "$OS_PASSWORD",
            "identity_endpoint": "$OS_AUTH_URL",
            "region": "$OS_REGION_NAME",
            "tenant_id": "$OS_TENANT_ID",
            "image_name": "My Custom Image",
            "ssh_username": "ubuntu",
            "source_image": "$SOURCE_ID",
            "flavor": "$FLAVOR_ID",
            "ssh_ip_version": "4",
            "networks": [
                "$NETWORK_ID"
            ]
        }
    ],
    "provisioners": [
        {
            "script": "setup_vm.sh",
            "type": "shell"
        }
    ]
}
EOF
```

Dans la dernière sélection du fichier de configuration, nous spécifions un script shell `setup_vm.sh` à exécuter.

```sh
#!/bin/sh

set -ex

if [ `id -u` -ne 0 ]; then
     sudo $0
    exit 0
fi

## votre code personnalisé ci-dessous
apt-get install git
git clone ...
```

## Construction de l’image

À l'aide du fichier de configuration créé ci-dessus, vérifiez-le et créez l'image avec :

```shell
packer validate packer.json
packer build packer.json
```

Si tout s'est bien passé, vous devriez obtenir une nouvelle image disponible. Vous pouvez le vérifier avec :

```shell
openstack image list | grep 'My Custom Image'
```

> [!primary]
>
> **Conseil**: Pour activer les informations de débogage: `export PACKER_LOG=1`
>

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
