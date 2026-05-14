---
title: 'Créer une image OpenStack personnalisée avec Packer'
excerpt: 'Créer et personnaliser une image OpenStack à partir d’une image existante avec Packer'
updated: 2024-11-12
---

## Objectif

**Ce guide vous montrera comment créer un fichier de configuration Packer pour créer votre propre image OpenStack.**

## Prérequis

- Un projet [Public Cloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project).
- Un terminal

<!-- CP-NAV-START:publiccloud-projects -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [Projets Public Cloud](/links/control-panel/publiccloud-projects)
- **Pour accéder à vos services :** `Public Cloud`{.action} > Sélectionnez votre projet

---
<!-- CP-NAV-END:publiccloud-projects -->

## En pratique

### Installer Packer

Packer peut être téléchargé depuis le site officiel [ici](https://www.packer.io/downloads.html) et vous devrez le décompresser.

Pour Linux 64bits :

```shell
wget https://releases.hashicorp.com/packer/1.11.2/packer_1.11.2_linux_amd64.zip
unzip packer_1.11.2_linux_amd64.zip
```

### Installer le plugin OpenStack pour Packer

```shell
packer plugins install github.com/hashicorp/openstack
```

### Installer jq

`jq` est un outil de ligne de commande pour [analyser le document JSON](https://stedolan.github.io/jq/manual/). 

Il sera utilisé pour automatiser la création du fichier de configuration.

```shell
apt-get install jq
```

### Récupérer votre configuration openrc.sh

À partir de votre [espace client OVHcloud](/links/manager), récupérez votre fichier de configuration `openrc.sh`. 

Vous pouvez le retrouver via le menu OpenStack dans le panneau latéral gauche puis sous le bouton `...`{.action} sur la droite, vous trouverez le bouton `Télécharger un fichier de configuration OpenStack`{.action} 

La [création d'un utilisateur OpenStack](/pages/public_cloud/public_cloud_cross_functional/create_and_delete_a_user) peut s'avérer nécessaire au préalable.

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

Il faut à présent trouver les ID nécessaires. Vous aurez besoin des ID de l’image, de la flavor et du réseau. Nous construirons notre image à partir de `Ubuntu 24.04` sur un matériel `b2-7`, avec une interface connectée au réseau public `Ext-Net`

```shell
export SOURCE_ID=`openstack image list -f json | jq -r '.[] | select(.Name == "Ubuntu 24.04") | .ID'`
export FLAVOR_ID=`openstack flavor list -f json | jq -r '.[] | select(.Name == "b2-7") | .ID'`
export NETWORK_ID=`openstack network list -f json | jq -r '.[] | select(.Name == "Ext-Net") | .ID'`
```

**INFO**: pour `FLAVOR_ID`, vous pouvez utiliser directement le nom, comme `b2-7`

Enfin, créez un fichier `packer.json`

```shell
cat > packer.json <<EOF
{
    "variables": {
        "os_region_name": "{{env `OS_REGION_NAME`}}",
        "os_tenant_id": "{{env `OS_TENANT_ID`}}",
        "source_id": "{{env `SOURCE_ID`}}",
        "flavor_id": "{{env `FLAVOR_ID`}}",
        "network_id": "{{env `NETWORK_ID`}}"
    },
    "builders": [
        {
            "type": "openstack",
            "region": "{{user `os_region_name`}}",
            "tenant_id": "{{user `os_tenant_id`}}",
            "image_name": "My Custom Image",
            "ssh_username": "ubuntu",
            "source_image": "{{user `source_id`}}",
            "flavor": "{{user `flavor_id`}}",
            "ssh_ip_version": "4",
            "networks": [
                "{{user `network_id`}}"
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
> **Conseil** : Pour activer les informations de débogage : `export PACKER_LOG=1`
>

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).
