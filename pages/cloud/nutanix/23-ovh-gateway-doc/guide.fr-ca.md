---
title: Fonctionnement de la passerelle OVHgateway
slug: ovh-gateway-documentation
excerpt: Découvrez comment fonctionne la passerelle OVHgateway
section: Réseau et sécurité
order: 03
---

**Dernière mise à jour le 08/12/2022**

## Objectif

« OVHgateway » est le nom du point de sortie de votre cluster vers Internet.

**Ce guide vous décrit le fonctionnement de cette passerelle, et la méthode pour la redéployer.**

## En pratique

### Détails techniques

#### Informations générales

La VM est basée sur Ubuntu 20.04 LTS (« The Focal Fossa »).

> [!primary]
> La gateway est construite sur la base des « *cloud* » images « *Daily Build* » Ubuntu.
> Le fichier utilisé est téléchargé directement depuis les serveurs Ubuntu : <https://cloud-images.ubuntu.com/focal/current/focal-server-cloudimg-amd64.img> puis personnalisé à l'aide de cloud-init.

> [!primary]
> OVHcloud vous recommande de remplacer cette passerelle par une de votre choix. Vous pouvez-vous aider de ce guide : [Remplacement de l'OVHgateway](https://docs.ovh.com/ca/fr/nutanix/software-gateway-replacement/).

La passerelle OVHgateway a un design léger, avec 2 NICs, 1 vCPU, 1 GB de mémoire et 20 GiB d'espace-disque.

`ens3` est l'interface pour le réseau externe et possède l'adresse Additional IP dans le sous-réseau **base** avec le VLAN 0. <br>
`ens4` est l'interface pour le réseau interne dans le sous-réseau **infra** avec le VLAN 1.

> [!primary]
> Il n'y a aucun moyen de se connecter avec SSH ou tout autre protocole.
> Il n'est pas non plus possible de se loguer depuis la console via Prism Central.
>

> [!primary]
> La VM est utilisée uniquement pour le trafic NAT entre les hosts, le CVM, la VM et Internet.
>
Les requêtes ICMP ne sont autorisées que dans le réseau privé.

#### Script de données utilisateur

La VM est déployée avec *cloud-init*, un outil qui applique automatiquement les données utilisateur à vos instances.

```yaml
#cloud-config
---
hostname: gw
fqdn: gw.ovh.cloud
users:
  - name: ovh
    shell: /bin/nologin
disable_root: true
write_files:
  - path: /etc/netplan/50-cloud-init.yaml
    content: |
      network:
        version: 2
        renderer: networkd
        ethernets:
          ens3:
            addresses: [PUBLICIP]
            gateway4: PUBLICGW
            nameservers:
              addresses: [DNS]
          ens4:
            addresses: [PRIVATEIP]
  - path: /etc/systemd/system/firegateway.service
    content: |
      [Unit]
      Description=GatewayFirewall
      Wants=network.target network-online.target
      After=network.target network-online.target
      [Service]
      Type=simple
      ExecStart=/root/firegateway
      Restart=always
      TimeoutStartSec=0
      [Install]
      WantedBy=multi-user.target
  - path: /root/firegateway
    content: |
      #!/bin/bash
      iptables -F
      iptables -X
      iptables -t nat -F
      iptables -t nat -X
      iptables -t mangle -F
      iptables -t mangle -X
      iptables -P INPUT DROP
      iptables -P OUTPUT DROP
      iptables -P FORWARD ACCEPT
      iptables -A INPUT -i ens4 -p ICMP -j ACCEPT
      iptables -A OUTPUT -p ICMP -j ACCEPT
      iptables -A INPUT -i ens3 -m state --state ESTABLISHED,RELATED -j ACCEPT
      iptables -A INPUT -i ens4 -j ACCEPT      
      iptables -t nat -A POSTROUTING -o ens3 -j MASQUERADE
 
runcmd:
  - netplan generate
  - netplan apply
  - /sbin/sysctl -w net.ipv4.conf.default.rp_filter=1
  - /sbin/sysctl -w net.ipv4.tcp_syncookies=1
  - /sbin/sysctl -w net.ipv4.conf.all.accept_redirects=0
  - /sbin/sysctl -w net.ipv4.conf.all.secure_redirects=0
  - /sbin/sysctl -w net.ipv4.conf.default.accept_source_route=0
  - sed -i s/#net.ipv4.ip_forward/net.ipv4.ip_forward/g /etc/sysctl.conf
  - /sbin/sysctl -w net.ipv4.ip_forward=1
  - iptables -t nat -A POSTROUTING -o ens3 -j MASQUERADE
  - chmod +x /root/firegateway
  - systemctl enable firegateway.service
  - systemctl disable ssh.service
  - apt remove -y wget curl ftp git htop mtr-tiny open-vm-tools tcpdump telnet tmux snapd openssh-server
  - apt update && apt upgrade -y
  - apt-get clean -y
  - apt autoremove -y
final_message: "The system is finally up, after $UPTIME seconds"
```

### Comment redéployer la passerelle de la VM avec l'interface Prism central

#### Étape 1 : collecter les informations

Pour redéployer la VM de la passerelle, vous aurez besoin des éléments suivants :

- Adresse Additional IP
- Sous-réseau LAN (sous-réseau des hyperviseurs CVM, Prism Central, AHV)
- Nom du sous-réseau

##### **Vérifier l'adresse Additional IP**

Connectez-vous à l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) et accédez à la gestion de votre [vRack](https://www.ovh.com/ca/fr/solutions/vrack/){.external}. Vérifiez l'adresse Additional IP utilisée par le cluster Nutanix.

![Additional IP](images/check_subnet0.png){.thumbnail}

> [!primary]
> Les instructions suivantes vont utiliser le bloc IP 198.51.100.0/30 à titre d'exemple.
>

Dans le cadre d'une utilisation du [vRack](https://www.ovh.com/ca/fr/solutions/vrack/){.external}, la première adresse, l'avant-dernière et la dernière adresse d'un bloc IP donné sont toujours réservées respectivement à l'adresse réseau, à la passerelle réseau et au broadcast du réseau. Cela signifie que la première adresse utilisable est la seconde adresse du bloc, comme indiqué ci-dessous :

```console
198.51.100.0  Reserved: Network address
198.51.100.1  First usable IP
198.51.100.2  Reserved: Network gateway
198.51.100.3  Reserved: Network broadcast
```

##### **Vérifier l'adresse IP privée du sous-réseau ou de la passerelle privée**

##### **Vérifier l'adresse IP privée du sous-réseau ou de la passerelle privée**

Si la passerelle existe toujours, rendez-vous sur la VM de la section VM de l'interface web Prism Central.

L'IP de la passerelle est affichée ici.

![check subnet on gateway](images/check_subnet2.png){.thumbnail}

Cependant, si la passerelle n'est pas présente, vérifiez le sous-réseau en vous rendant dans les menus « Hardware » puis « Hosts » de  l'interface web Prism Central.

![check subnet on gateway2](images/check_subnet1.png){.thumbnail}

Dans ce cas, le sous-réseau est 192.168.0.0/24. Dans la configuration par défaut, l'adresse IP de la passerelle est donc 192.168.0.254.

##### **Récupérer les noms des sous-réseaux**

Si la passerelle existe toujours, rendez-vous sur la VM de la section VM de l'interface web Prism Central.

Cliquez sur la VM OVHgateway et ouvrez l'onglet « NICs ».

![check subnet on gateway2](images/check_subnet_name0.png){.thumbnail}

#### Étape 2 : créer la VM 

Connectez-vous à Prism Central puis créez une vm.

Personnalisez le nom et les caractéristiques de la VM.

![Deploy VM](images/deploy_vm.png){.thumbnail}

Cliquez sur `Next`{.action}

Vous devez ensuite attacher un disque. Pour cela, vous pouvez sélectionner l'image utilisée pour créer la gateway d'origine.

![Attach Disk1](images/attach_disk.png){.thumbnail}

![Attach Disk2](images/attach_disk2.png){.thumbnail}

Ajoutez ensuite **deux nics** sur le réseau « base » :

![Attach subnet](images/attach_subnet.png){.thumbnail}

![Attach subnet](images/attach_subnet2.png){.thumbnail}

Cliquez sur `Next`{.action}.

Dans l'interface de gestion, choisissez `cloud-init` dans la partie « Guest customization ».

![Guest customization](images/cloud-init.png){.thumbnail}

Il faut maintenant créer un script yaml pour définir les paramètres. Ce script contient les données utilisateur. Au démarrage du système, ces paramètres tels que les utilisateurs, les paquets, les fichiers, etc. seront appliqués à la VM.

Vous trouverez ci-dessous un template que vous pourrez modifier avec vos valeurs pour créer votre VM.

> [!primary]
> Vous pouvez utiliser le fichier d'origine de création de la VM ou utiliser un fichier personnalisé pour créer votre propre gateway. C'est ce que nous verrons dans cet exemple.
>

> [!primary]
>
> - Remplacez les valeurs « hostname », « fqdn », « name », « passwd », « ssh-autorized-keys » et les adresses IP par les valeurs souhaitées.
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
                addresses: [198.51.100.1/30]
                gateway4: 198.51.100.2
                nameservers:
                  addresses: [213.186.33.99]
              ens4:
                addresses: [192.168.0.254/24]


runcmd:
   - netplan generate
```

Collez ce script dans la zone prévue à cet effet.

![Guest customization](images/cloud-init.png){.thumbnail}

Cliquez sur `Next`{.action}, puis sur `Create VM`{.action}.

> [!primary]
> Attendez quelques minutes pour que la VM prenne en compte tous les paramètres.

### Comment redéployer la passerelle de la VM en ligne de commande

#### Étape 1 : collecter les informations

Pour redéployer la VM de la passerelle, vous aurez besoin des éléments suivants :

- Adresse Additional IP
- Sous-réseau LAN (sous-réseau des hyperviseurs CVM, Prism Central, AHV)
- Nom du sous-réseau

##### **Vérifier l'adresse Additional IP**

Connectez-vous à l'[espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) et accédez à la gestion de votre [vRack](https://www.ovh.com/ca/fr/solutions/vrack/){.external}. Vérifiez l'adresse Additional IP utilisée par le cluster Nutanix.

![Additional IP](images/check_subnet0.png){.thumbnail}

> [!primary]
> Les instructions suivantes vont utiliser le bloc IP 198.51.100.0 à titre d'exemple.
>

Dans le cadre d'une utilisation du [vRack](https://www.ovh.com/ca/fr/solutions/vrack/){.external}, la première adresse, l'avant-dernière et la dernière adresse d'un bloc IP donné sont toujours réservées respectivement à l'adresse réseau, à la passerelle réseau et au broadcast du réseau. Cela signifie que la première adresse utilisable est la seconde adresse du bloc, comme indiqué ci-dessous :

```console
198.51.100.0  Reserved: Network address
198.51.100.1  First usable IP
198.51.100.2  Reserved: Network gateway
198.51.100.3  Reserved: Network broadcast
```

##### **Vérifier l'adresse IP privée du sous-réseau ou de la passerelle privée**

Si la passerelle existe toujours, rendez-vous sur la VM de la section VM de l'interface web Prism Central.

L'IP de la passerelle est affichée ici.

![check subnet on gateway](images/check_subnet2.png){.thumbnail}

Cependant, si la passerelle n'est pas présente, vérifiez le sous-réseau en vous rendant dans les menus « Hardware » puis « Hosts » de  l'interface web Prism Central.

![check subnet on gateway2](images/check_subnet1.png){.thumbnail}

Dans ce cas, le sous-réseau est 192.168.0.0/24. Dans la configuration par défaut, l'adresse IP de la passerelle est donc 192.168.0.254.

##### **Récupérer le nom du sous-réseau**

Si la passerelle existe toujours, rendez-vous sur la VM de la section VM de l'interface web Prism Central.

Cliquez sur la VM OVHgateway et ouvrez l'onglet « NICs ».

![check subnet on gateway2](images/check_subnet_name0.png){.thumbnail}

##### **Récupérer les informations nécessaires grâce à l’API Nutanix**

Pour déployer la VM, il vous faut l'UUID de l' « image » et du réseau.

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
    "total_matches": 1,
    "kind": "image",
    "length": 1,
    "offset": 0
  },
  "entities": [
    {
      "status": {
        "state": "COMPLETE",
        "name": "focal-server-cloudimg-amd64.img",
        "resources": {
          "retrieval_uri_list": [
            "https://127.0.0.1:9440/api/nutanix/v3/images/22c00053-a23e-4dae-a9a9-de0d60ce29ce/file"
          ],
          "current_cluster_reference_list": [
            {
              "kind": "cluster",
              "uuid": "0005dda3-c2a2-6485-5399-043f72b508a0"
            }
          ],
          "architecture": "X86_64",
          "size_bytes": 2361393152,
          "image_type": "DISK_IMAGE",
          "source_uri": "http://192.168.0.1:49200/focal-server-cloudimg-amd64.img"
        },
        "description": "ubuntu-focal"
      },
      "spec": {
        "name": "focal-server-cloudimg-amd64.img",
        "resources": {
          "image_type": "DISK_IMAGE",
          "source_uri": "http://192.168.0.1:49200/focal-server-cloudimg-amd64.img",
          "architecture": "X86_64"
        },
        "description": "ubuntu-focal"
      },
      "metadata": {
        "last_update_time": "2022-05-02T08:49:21Z",
        "kind": "image",
        "uuid": "54b919e1-b1e5-4d4a-b055-47ff298bf7d7",
        "spec_version": 0,
        "creation_time": "2022-05-02T08:49:21Z",
        "spec_hash": "00000000000000000000000000000000000000000000000000",
        "categories_mapping": {},
        "categories": {}
      }
    }
  ]
}
```

Dans les métadonnées, vous retrouvez l'UUID, ici : `54b919e1-b1e5-4d4a-b055-47ff298bf7d7`, pour l'image nommée focal-server-cloudimg-amd64.img.

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
    "total_matches": 3,
    "kind": "subnet",
    "length": 3,
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
          "virtual_switch_uuid": "3dba2120-9467-4c57-8781-2b21b40485c1",
          "vlan_id": 0,
          "ip_usage_stats": {
            "num_macs": 2
          }
        },
        "cluster_reference": {
          "kind": "cluster",
          "name": "cluster-xxxx.nutanix.ovh.net",
          "uuid": "0005ee26-4f51-e468-2a6a-043f72b50ef0"
        }
      },
      "spec": {
        "name": "base",
        "resources": {
          "vswitch_name": "br0",
          "subnet_type": "VLAN",
          "virtual_switch_uuid": "3dba2120-9467-4c57-8781-2b21b40485c1",
          "vlan_id": 0
        },
        "cluster_reference": {
          "kind": "cluster",
          "name": "cluster-xxxx.nutanix.ovh.net",
          "uuid": "0005ee26-4f51-e468-2a6a-043f72b50ef0"
        }
      },
      "metadata": {
        "last_update_time": "2022-11-25T13:09:43Z",
        "kind": "subnet",
        "uuid": "3652d420-9f94-4350-8af7-b921d0761781",
        "spec_version": 0,
        "creation_time": "2022-11-25T13:09:43Z",
        "spec_hash": "00000000000000000000000000000000000000000000000000",
        "categories_mapping": {},
        "categories": {}
      }
    },
    {
      "status": {
        "state": "COMPLETE",
        "name": "infra",
        "resources": {
          "vswitch_name": "br0",
          "subnet_type": "VLAN",
          "virtual_switch_uuid": "3dba2120-9467-4c57-8781-2b21b40485c1",
          "vlan_id": 1,
          "ip_usage_stats": {
            "num_macs": 4
          }
        },
        "cluster_reference": {
          "kind": "cluster",
          "name": "cluster-xxxx.nutanix.ovh.net",
          "uuid": "0005ee26-4f51-e468-2a6a-043f72b50ef0"
        }
      },
      "spec": {
        "name": "infra",
        "resources": {
          "vswitch_name": "br0",
          "subnet_type": "VLAN",
          "virtual_switch_uuid": "3dba2120-9467-4c57-8781-2b21b40485c1",
          "vlan_id": 1
        },
        "cluster_reference": {
          "kind": "cluster",
          "name": "cluster-xxxx.nutanix.ovh.net",
          "uuid": "0005ee26-4f51-e468-2a6a-043f72b50ef0"
        }
      },
      "metadata": {
        "last_update_time": "2022-11-25T13:09:43Z",
        "kind": "subnet",
        "uuid": "e60826da-4aab-4810-b7d3-0604a3e16719",
        "spec_version": 0,
        "creation_time": "2022-11-25T13:09:43Z",
        "spec_hash": "00000000000000000000000000000000000000000000000000",
        "categories_mapping": {},
        "categories": {}
      }
    },
   ]
}
```

Le résultat de la requête vous renvoie la configuration des sous-réseaux. Il faut relever les UUID de chaque sous réseau qui se trouve en dessous de `"kind": "subnet"` dans la variable "uuid", comme ici par exemple : 

 * `3652d420-9f94-4350-8af7-b921d0761781` pour le VLAN **base** sur le VLAN 0  
 * `e60826da-4aab-4810-b7d3-0604a3e16719` pour le VLAN **infra** sur le VLAN 1

#### Étape 2 : créer les fichiers nécessaires pour le déploiement en CLI

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
            "uuid": "54b919e1-b1e5-4d4a-b055-47ff298bf7d7"
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
            "uuid": "3652d420-9f94-4350-8af7-b921d0761781"
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
            "name": "infra",
            "uuid": "e60826da-4aab-4810-b7d3-0604a3e16719"
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
            "uuid": "54b919e1-b1e5-4d4a-b055-47ff298bf7d7"
                         }
```

Vérifiez également l'UUID de vos sous-réseaux :

```json
          "subnet_reference": {
            "kind": "subnet",
            "name": "base",
            "uuid": "3652d420-9f94-4350-8af7-b921d0761781"
                              }
```

```json
          "subnet_reference": {
            "kind": "subnet",
            "name": "infra",
            "uuid": "e60826da-4aab-4810-b7d3-0604a3e16719"
                              }
```

Il faut maintenant créer le fichier `cloud-init.yaml`. Ce fichier contient les données utilisateur. Au démarrage du système, ces paramètres tels que les utilisateurs, les paquets, les fichiers, etc, seront appliqués à la VM.

Vous trouverez ci-dessous un template que vous pourrez modifier avec vos valeurs pour créer votre VM individuelle.

> [!primary]
> Vous pouvez utiliser le fichier d'origine de création ou utiliser un fichier personnalisé pour créer votre propre gateway. C'est ce que nous verrons dans cet exemple.
>

> [!primary]
>
> - Remplacez les valeurs « hostname », « fqdn », « name », « passwd », « ssh-autorized-keys » et les adresses IP par les valeurs souhaitées.
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
                addresses: [198.51.100.1/30]
                gateway4: 198.51.100.2
                nameservers:
                  addresses: [213.186.33.99]
              ens4:
                addresses: [192.168.0.254/24]


runcmd:
   - netplan generate
```

#### Étape 3 : créer la VM 

Transformez le `cloud-init.yaml` en « base64 » et placez-le dans une variable :

```bash
USERDATA=$(base64 -w 0 cloud-init.yaml)
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
> Attendez quelques minutes pour que la VM prenne en compte tous les paramètres.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
