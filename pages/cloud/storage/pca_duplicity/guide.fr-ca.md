---
title: Gérer vos archives avec duplicité
slug: pca/duplicity
excerpt: Archivez vos données dans PCA avec duplicité
section: Public Cloud Archive
order: 110
---


## Introduction
La duplication est une solution de sauvegarde prenant en charge un large éventail de services de stockage en tant que backends. Elle prend en charge de nombreuses fonctionnalités telles que le cryptage, la compression, le filtrage, la signature, etc. Il s'agit d'une solution de stockage à froid extrêmement bon marché, [PCA](https://www.ovhcloud.com/fr-ca/public-cloud/cloud-archive/){.external} est un choix de première classe pour l'archivage des sauvegardes.


## Comment fonctionne la duplicité
La duplicité produit trois types d'informations:

**Manifeste**

Ils contiennent la liste des fichiers stockés en volumes.

**Signatures**

Ils contiennent des métadonnées sur ces fichiers (checksums) et aident à détecter les changements de contenu.

**Volumes**

Ils détiennent les données réelles. Leur taille est configurée par l'utilisateur.


## Stockage à chaud ou à froid
Alors que le stockage à chaud permet d'accéder immédiatement aux données, le stockage à froid introduit une latence dans le processus d'extraction. Pour fonctionner, la duplicité exige que les manifestes et les signatures soient toujours disponibles. En conséquence, les données à stocker doivent être réparties en fonction du niveau de disponibilité attendu. Les fichiers de volume, qui représentent la plus grande partie d'une sauvegarde, et les plus gros en taille, seront poussés vers l'ACP tandis que les autres informations légères seront stockées dans [PCS](https://www.ovhcloud.com/fr-ca/public-cloud/object-storage/){.external}. Cela est possible grâce à la fonction multibackend de la duplication.


## Version double
Les fonctionnalités décrites dans le reste de ce guide utilisent la (pas encore publié) [version 0.8](https://code.launchpad.net/~duplicity-team/duplicity/0.8-series){.external} de la duplicité.


## Installer la duplicité
**Exigences**

Adaptez les noms de commandes et de paquets suivants à votre environnement.

```
$ apt install -y bzr gcc librsync-dev python python-dev python-pip
```
**Obtenir les sources du projet**

Pour cloner des sources de duplicité localement, il faut utiliser bzr (prononcé en anglais *bazaar*), le VCS de launchpad.

```
$ bzr branch lp:duplicity
```
**Installer la version de développement de la duplicité**

```
$ pip install setuptools wheel
$ pip install -r requirements.txt
$ python setup.py install
```

## Configuration multi-backend

Mettez les informations suivantes complétées dans un fichier config.json :


```json
[
    {
        "description": "Cold storage",
        "url": "pca://duplicity_cold",
        "env": [
            {
                "name": "PCA_AUTHURL",
                "value": "https://auth.cloud.ovh.net/v3"
            },
            {
                "name": "PCA_AUTHVERSION",
                "value": "3"
            },
            {
                "name": "PCA_PROJECT_DOMAIN_NAME",
                "value": "Default"
            },
            {
                "name": "PCA_TENANTID",
                "value": "<your_tenant_id>"
            },
            {
                "name": "PCA_USERNAME",
                "value": "<your_username>"
            },
            {
                "name": "PCA_PASSWORD",
                "value": "<your_password>"
            },
            {
                "name": "PCA_REGIONNAME",
                "value": "<region_name>"
            }
        ],
        "prefixes": ["cold_"]
    },
    {
        "description": "Hot storage",
        "url": "swift://duplicity_hot",
        "env": [
            {
                "name": "SWIFT_AUTHURL",
                "value": "https://auth.cloud.ovh.net/v3"
            },
            {
                "name": "SWIFT_AUTHVERSION",
                "value": "3"
            },
            {
                "name": "SWIFT_PROJECT_DOMAIN_NAME",
                "value": "Default"
            },
            {
                "name": "SWIFT_TENANTID",
                "value": "<your_tenant_id>"
            },
            {
                "name": "SWIFT_USERNAME",
                "value": "<your_username>"
            },
            {
                "name": "SWIFT_PASSWORD",
                "value": "<your_password>"
            },
            {
                "name": "SWIFT_REGIONNAME",
                "value": "<region_name>"
            }
        ],
        "prefixes": ["hot_"]
    }
]
```


## Effectuer des sauvegardes
Pour effectuer votre première sauvegarde complète:


```bash
duplicity \
--file-prefix-manifest 'hot_' \
--file-prefix-signature 'hot_' \
--file-prefix-archive 'cold_' \
full \
/what/to/backup 'multi:///path/to/config.json?mode=mirror&onfail=abort'
```

Vous pouvez ensuite effectuer des sauvegardes incrémentielles du même chemin en remplaçant "full" par "incremental" dans la commande précédente.