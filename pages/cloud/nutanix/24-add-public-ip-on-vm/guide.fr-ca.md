---
title: Ajouter une adresse IP publique à une nouvelle VM
slug: nutanix-public-ip
excerpt:  Découvrez comment utiliser une IP publique sur une VM Ubuntu, créée via API
section: Réseau et sécurité
order: 04
---

**Dernière mise à jour le 11/01/2022**

## Objectif

Si vous souhaitez créer un frontend web ou un reverse proxy pour créer une pile de VM (serveur web, base de données), il faudra ajouter une adresse IP publique pour créer un point d'entrée.

**Découvrez comment utiliser l'API Nutanix pour déployer une VM Ubuntu avec une adresse IP publique.**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Prérequis

- Disposer d'un cluster Nutanix dans votre compte OVHcloud
- Disposer des identifiants de connexion et l'URL de Prism Central, reçus par mail après l'installation
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc)
- Disposer d'une adresse IP failover disponible

## En pratique

### Ajouter une nouvelle IP failover à votre vRack

Connectez-vous à l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) et ajoutez une adresse IP failover à votre [vRack](https://www.ovh.com/ca/fr/solutions/vrack/){.external}.

> [!primary]
> Les instructions suivantes vont utiliser le bloc IP 123.45.6.78/30 à titre d'exemple.
>

Dans le cadre d'une utilisation du [vRack](https://www.ovh.com/ca/fr/solutions/vrack/){.external}, la première adresse, l'avant-dernière et la dernière adresse d'un bloc IP donné sont toujours réservées respectivement à l'adresse réseau, à la passerelle réseau et au broadcast du réseau. Cela signifie que la première adresse utilisable est la seconde adresse du bloc, comme indiqué ci-dessous :

```console
123.45.6.76   Reserved: Network address
123.45.6.77   First usable IP
123.45.6.78   Reserved: Network gateway
123.45.6.79   Reserved: Network broadcast
```

Pour configurer la première adresse IP utilisable, vous devez éditer le fichier de configuration réseau.

> [!primary]
> Dans cet exemple, le masque de sous-réseau (255.255.255.252) convient à la plage d'adresses IP utilisée. Votre masque de sous-réseau peut être différent selon la taille de votre bloc. Lorsque vous achetez votre bloc IP, vous recevez un e-mail vous indiquant le masque de sous-réseau à utiliser. 
>

Sur Ubuntu 20.04 LTS (Focal Fossa) avec « netplan », la configuration devrait être la suivante :

```yaml
network:
      version: 2
      renderer: networkd
      ethernets:
           ens3:
               addresses: [123.45.6.77/30]
               gateway4: 123.45.6.78
               nameservers:
                   addresses: [213.186.33.99]
```

### Déployer une VM Ubuntu via l'API Nutanix

#### Étape 1 : télécharger l'image de l'OS

Connectez-vous à Prism Central et rendez vous dans les menus `Compute & Storage`{.action}  puis `Images`{.action}.

Cliquez sur le bouton `Add Image`{.action}.

![cliquez sur ajouter une image](images/add-image.png){.thumbnail}

Collez l'URL d'une image cloud compatible, par exemple :

`https://cloud-images.ubuntu.com/focal/current/focal-server-cloudimg-amd64.img`

Cliquez sur `Upload file`{.action} puis sur `Next`{.action}.

![cliquez sur ajouter une image](images/add-image2.png){.thumbnail}

Sélectionnez `Place image directly on clusters`{.action}, puis sélectionnez votre cluster et cliquez sur `Save`{.action}.

![cliquez sur ajouter une image](images/add-image3.png){.thumbnail}

#### Étape 2 : récupérer les informations nécessaires avec l'API Nutanix

Pour déployer la VM, il faut l'UUID de l'image et du réseau.

Ouvrez un terminal et exécutez la commande suivante :

```bash
curl -k -H Accept:application/json -H Content-Type:application/json -u "admin:PRISMADMINPASSWORD" -X POST https://fqdn-cluster:9440/api/nutanix/v3/images/list -d{} | jq .
```

> [!primary]
> Prenez soin de renseigner votre mot de passe réel et votre nom de domaine complet dans les paramètres.
>

> [!primary]
> Le « jq . » permettra d'obtenir un json lisible.
>

```json
{
  "api_version": "3.1",
  "metadata": {
    "total_matches": 2,
    "kind": "image",
    "length": 2,
    "offset": 0
  },
  "entities": [
    {
      "status": {
        "state": "COMPLETE",
        "execution_context": {
          "task_uuids": [
            "4a7d3ce8-8127-4556-b30e-cf7013e74c81"
          ]
        },
        "name": "ubuntu-focal",
        "resources": {
          "retrieval_uri_list": [
            "https://127.0.0.1:9440/api/nutanix/v3/images/3cd498a2-99da-49a2-bbdf-14c349036019/file"
          ],
          "current_cluster_reference_list": [
            {
              "kind": "cluster",
              "uuid": "0005cfe0-d7b6-81c8-6173-0c42a12333ee"
            }
          ],
          "architecture": "X86_64",
          "size_bytes": 2361393152,
          "image_type": "DISK_IMAGE",
          "source_uri": "https://cloud-images.ubuntu.com/focal/current/focal-server-cloudimg-amd64.img"
        }
      },
      "spec": {
        "name": "ubuntu-focal",
        "resources": {
          "image_type": "DISK_IMAGE",
          "source_uri": "https://cloud-images.ubuntu.com/focal/current/focal-server-cloudimg-amd64.img",
          "architecture": "X86_64"
        }
      },
      "metadata": {
        "last_update_time": "2021-11-08T15:12:31Z",
        "kind": "image",
        "uuid": "3cd498a2-99da-49a2-bbdf-14c349036019",
        "spec_version": 0,
        "creation_time": "2021-11-08T15:12:06Z",
        "categories_mapping": {},
        "owner_reference": {
          "kind": "user",
          "uuid": "00000000-0000-0000-0000-000000000000",
          "name": "admin"
        },
        "categories": {}
      }
    }
```

Dans les métadonnées, vous retrouvez l'UUID, ici : 3cd498a2-99da-49a2-bbdf-14c349036019.

Vous devez ensuite trouver le bon UUID de sous-réseau. Exécutez la commande ci-dessous :

```bash
curl -k -H Accept:application/json -H Content-Type:application/json -u "admin:PRISMADMINPASSWORD" -X POST https://fqdn-cluster:9440/api/nutanix/v3/subnets/list -d{} | jq .
```

> [!primary]
> Prenez soin de renseigner votre mot de passe réel et votre nom de domaine complet dans les paramètres.
>

```json
{
  "api_version": "3.1",
  "metadata": {
    "total_matches": 2,
    "kind": "subnet",
    "length": 2,
    "offset": 0
  },
  "entities": [
    {
      "status": {
        "state": "COMPLETE",
        "name": "base",
        "resources": {
          "vswitch_name": "br0",
          "subnet_type": "VLAN",
          "virtual_switch_uuid": "4a18b6dd-be0a-4c05-bd81-59229e67ac46",
          "vlan_id": 0
        },
        "cluster_reference": {
          "kind": "cluster",
          "name": "cluster-36",
          "uuid": "0005cfe0-d7b6-81c8-6173-0c42a12333ee"
        }
      },
      "spec": {
        "name": "base",
        "resources": {
          "vswitch_name": "br0",
          "subnet_type": "VLAN",
          "virtual_switch_uuid": "4a18b6dd-be0a-4c05-bd81-59229e67ac46",
          "vlan_id": 0
        },
        "cluster_reference": {
          "kind": "cluster",
          "name": "cluster-36",
          "uuid": "0005cfe0-d7b6-81c8-6173-0c42a12333ee"
        }
      },
      "metadata": {
        "last_update_time": "2021-11-04T08:25:18Z",
        "kind": "subnet",
        "uuid": "ed156bb0-a838-4596-b427-4bbed1968864",
        "spec_version": 0,
        "creation_time": "2021-11-04T08:25:18Z",
        "categories_mapping": {},
        "categories": {}
      }
    }
```

Dans les métadonnées, vous retrouvez l'UUID, ici : ed156bb0-a838-4596-b427-4bbed1968864.

#### Étape 3 : créer les fichiers nécessaires

Pour déployer la VM, vous avez besoin de deux fichiers : `vm.json`, décrivant la machine virtuelle et le fichier de configuration `cloud-init.yaml` qui contient les données utilisateur telles que mot de passe, réseau, etc.

Créez le fichier `vm.json` :

```json
{
  "spec": {
    "name": "YOURVMNAME",
    "resources": {
      "power_state": "ON",
      "num_vcpus_per_socket": 4,
      "num_sockets": 1,
      "memory_size_mib": 4096,
      "disk_list": [
        {
          "disk_size_mib": 41264,
          "device_properties": {
            "device_type": "DISK",
            "disk_address": {
              "device_index": 0,
              "adapter_type": "SATA"
            }
          },
          "data_source_reference": {
            "kind": "image",
            "uuid": "3cd498a2-99da-49a2-bbdf-14c349036019"
          }
        }
      ],
      "nic_list": [
        {
          "nic_type": "NORMAL_NIC",
          "ip_endpoint_list": [
            {
              "ip_type": "DHCP"
            }
          ],
          "subnet_reference": {
            "kind": "subnet",
            "name": "base",
            "uuid": "d1117d0b-015b-4007-a84b-37f196f1af4d"
          },
          "is_connected": true
        },
        {
          "nic_type": "NORMAL_NIC",
          "ip_endpoint_list": [
            {
              "ip_type": "DHCP"
            }
          ],
          "subnet_reference": {
            "kind": "subnet",
            "name": "base",
            "uuid": "ed156bb0-a838-4596-b427-4bbed1968864"
          },
          "is_connected": true
        }
      ],
      "guest_customization": {
        "cloud_init": {
          "user_data": "USERDATA"
        },
        "is_overridable": false
      }
    }
  },
  "api_version": "3.1.0",
  "metadata": {
    "kind": "vm"
  }
}
```

> [!primary]
> Vous pouvez ajuster les paramètres en fonction de vos valeurs, selon vos besoins : nom de la VM, nombre de VCPU, taille de la RAM, taille du disque, etc.
>

Cochez `data_source_reference` pour vous assurer que l'UUID est bien l'UUID de votre image système :

```json
"data_source_reference": {
            "kind": "image",
            "uuid": "3cd498a2-99da-49a2-bbdf-14c349036019"
                         }
```

Vérifiez également l'UUID de votre sous-réseau :

```json
          "subnet_reference": {
            "kind": "subnet",
            "name": "base",
            "uuid": "ed156bb0-a838-4596-b427-4bbed1968864"
                              }
```

Il faut maintenant créer le fichier `cloud-init.yaml`. Ce fichier contient les « données utilisateur ». Au démarrage du système, ces paramètres tels que les utilisateurs, les paquets, les fichiers, etc, seront appliqués à la VM.

Vous trouverez ci-dessous un template que vous pourrez modifier avec vos valeurs pour créer votre VM individuelle.

> [!primary]
>
> - Modifiez les valeurs « hostname », « fqdn », « name », « passwd », « ssh-autorized-keys » et les adresses ip avec les valeurs souhaitées.
> - Ce fichier crée le fichier pour netplan, applique la configuration et initialise un redémarrage.
> - Le mot de passe doit être une valeur de hash. Vous pouvez le générer avec la commande ci-dessous.
>

```bash
mkpasswd --method=SHA-512 --rounds=4096
```

```yaml
#cloud-config
hostname: <yourhostname>
fqdn: <yourhostname.ovh.cloud>
users:
  - name: <yourusername>
    sudo: ['ALL=(ALL) NOPASSWD:ALL']
    groups: sudo
    shell: /bin/bash
    lock_passwd: false
    passwd: <yourhashpass>
    ssh-authorized-keys: <your public ssh key>
write_files: 
   - path: /etc/netplan/50-cloud-init.yaml
     content: |
        network:
           version: 2
           renderer: networkd
           ethernets:
              ens3:
                addresses: [123.45.6.77/30]
                gateway4: 123.45.6.78
                nameservers:
                  addresses: [213.186.33.99]


runcmd:
   - netplan generate
   - netplan apply
# Optional: if you want to use access via password instead of SSH key, uncomment the next line
#  - sed -i s/PasswordAuthentication/#PasswordAuthentication/g /etc/ssh/sshd_config 
   - reboot
```

#### Étape 4 : créer la VM 

Transformez le `cloud-init.yaml` en « base64 » et placez-le dans une variable :

```bash
sed -i s/USERDATA/${USERDATA}/g vm.json
```

Remplacez ensuite la chaîne « USERDATA » dans `vm.json` par la valeur de la variable `USERDATA` dans le fichier `vm.json` :

```bash
sed -i s/USERDATA/${USERDATA}/g vm.json
```

Enfin, utilisez une requête cURL pour enregistrer et mettre sous tension la VM :

```bash
curl -k -H Accept:application/json -H Content-Type:application/json -u "admin:PRISMADMINPASSWORD" -X POST https://fqdn:9440/api/nutanix/v3/vms -d @vm.json | jq .
```

> [!primary]
> Vous pouvez maintenant vous connecter à votre VM en SSH via l'adresse IP publique.
>

## Aller plus loin

[Documentation Cloud Init](https://cloudinit.readthedocs.io/en/latest/topics/examples.html){.external}

[Nutanix : Référence API v3](https://www.nutanix.dev/api-reference-v3/){.external}

[API Nutanix : Création d'une VM Linux](https://www.nutanix.dev/2020/06/16/nutanix-api-v3-creating-a-linux-vm-with-cloud-init/){.external}

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
