---
title:' 'Créer une image OpenStack personnalisée avec Packer'
excerpt: Créer et personnaliser une image OpenStack à partir d'une image existante avec Packer
slug: packer-openstack-builder
section: Tutoriels
---

**Dernière mise à jour le 24/10/2020**

## Objectif

**Ce guide vous montrera comment créer un fichier de configuration Packer pour créer votre propre image OpenStack.**

## Prérequis

Un projet [Public Cloud](https://www.ovh.com/fr/ca/public-cloud/instances.
Un terminal

### Installer Packer

Packer peut être téléchargé à partir du site officiel [ici](https://www.packer.io/downloads.html) et vous devrez le "unzip".

Pour Linux x64

```sh
wget https://releases.hashicorp.com/packer/1.3.1/packer_1.3.1_linux_amd64.zip
unzip packer_1.3.1_linux_amd64.zip
```

### Installer jq

`jq` est un outil de ligne de commande pour [analyser le document JSON](https://stedolan.github.io/jq/manual/). Il sera utilisé pour automatiser la création du fichier de configuration.

```sh
apt-get install jq
```

### Récupérer votre configuration openrc.sh

À partir de votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager), récupérez votre fichier de configuration "openrc.sh". Vous pouvez l'extraire de l'entrée de menu OpenStack dans le panneau gauche et sous le `..." sur la droite, "Télécharger un fichier de configuration OpenStack". Vous devrez peut-être créer un utilisateur OpenStack avant.

### Installer le client de ligne de commande openstack

La façon la plus simple d'utiliser un environnement virtuel python.

```sh
python3 -m venv venv3 # creates a virtualenv named venv3
. ./venv3/bin/activate # enter the virtualenv
pip install --upgrade pip
pip install python-openstackclient
```

ou installer votre paquet de distribution "apt-get install python-openstackclient"

#### Vérification

Sourcing du fichier de configuration "openrc.sh" récupéré précédemment, essayez votre installation locale avec

```sh
. ./openrc.sh
openstack token issue
```

## Configuration Packer

D'abord, source votre fichier "openrc.sh" avec

```sh
. ./openrc.sh
``

Trouvons ensuite l'identité nécessaire. Vous aurez besoin de l'ID de l'image, de la saveur et du réseau. Nous construirons notre image à partir de "Ubuntu 16.04" sur un matériel "vps-ssd-1", avec une interface connectée au réseau public "Ext-Net"

```sh
SOURCE_ID=`openstack image list -f json | jq -r '.[] | select(.Name == "Ubuntu 16.04") | .ID'`
FLAVOR_ID=`openstack flavor list -f json | jq -r '.[] | select(.Name == "vps-ssd-1") | .ID'`
NETWORK_ID=`openstack network list -f json | jq -r '.[] | select(.Name == "Ext-Net") | .ID'`
```

**INFO**: pour "FLAVOR_ID", vous pouvez utiliser directement le nom, comme "vps-ssd-1"

Enfin, créez un fichier "packer.json"

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

Dans la dernière sélection du fichier de configuration, nous spécifions un script shell "setup_vm.sh" à exécuter.

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

## Construction de l'image

À l'aide du fichier de configuration créé ci-dessus, vérifiez-le et créez l'image avec

```shell
packer validate packer.json
packer build packer.json
```

Si tout allait bien, vous devriez avoir une nouvelle image disponible. Vous pouvez vérifier avec

```shell
openstack image list | grep 'My Custom Image'
```

> [!primary]
>
> **Conseil**: Pour activer les informations de débogage: `export PACKER_LOG=1
>

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
