---
title: Outils avancés
slug: advanced-tools
excerpt: "Présentation de divers outils avancés disponibles pour l'offre Nutanix on OVHcloud"
section: Utilisation avancée
order: 01
---

**Dernière mise à jour le 28/03/2022**

## Objectif

Ce guide vous présente l'ensemble des outils d'administration, autres que les interfaces web **Prism Central** et **Prim Element**, que sont :

* ncli accessible sur un poste local, en SSH sur **Prism Central** et **Prism Element**.
* acli utilisable en SSH sur les **CVM**.
* Cmdlets pour **Powershell**.
* L'interface **REST API** à partir de l'URL de **Prism Central** ou **Prism Element**.

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr-ca/) si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.
>

## Prérequis

- Disposer d'un cluster Nutanix dans votre compte OVHcloud.
- Être connecté à votre [espace client OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc).
- Pour l'interface **REST API**, vous devez disposer d'une machine virtuelle sous Linux avec un éditeur de texte, afin d'exécuter les commandes **curl** et **jq**.

> [!primary]
> Certaines commandes ne sont utilisables que si vous avez accès à **Prism Central** et **Prism Element** en SSH.
>

## Présentation des outils

### Commande ncli

**ncli** se trouve sur **Prism Central** et sur toutes les **CVM** au travers d'une connexion SSH. Vous pouvez aussi l'installer en local sur un poste Windows ou Linux à partir de l'interface web **Prism Central**.

**ncli** permet de gérer des aspects du cluster Nutanix comme le stockage, les tâches et certaines actions sur les machines virtuelles à l'intérieur du cluster.

### Outil acli

La commmande acli est uniquement disponible sur les **CVM**. Elle est utilisée pour la gestion des hôtes des machines virtuelles, des réseaux et des snapshots. 

### Extensions **Powershell** 

Powershell est un langage de script qui a été développé par Microsoft et qui se base sur **Net.Framework**. 

Il fonctionne dans les environnements **Microsoft**, **Linux** et **MacOS** mais il est principalement utilisé dans un environnement **Microsoft**.<br>
Tous les exemples cités ci-dessous ont été exécutés uniquement sur cet environnement.

Nutanix a rajouté des extensions qui permettent l'administration du cluster et des VM en utilisant des scripts Powershell.

### Interface d'administration **REST API**

Au travers de l'URL de **Prism central** ou **Prism Element**, vous pouvez utiliser une **API** nommée **REST API** soit en ligne de commande avec l'outil **curl**, soit au travers d'un autre langage de programmation comme **python** ou **php**, voire même avec les commandes standard de **Powershell**.

Pour plus de détails sur ces commandes, reportez-vous à la section « [Aller plus loin](#gofurther) » de ce guide.

## En pratique

### Exemples d'utilisation de **ncli**

Connectez-vous en SSH avec un client SSH sur une des **CVM** :

```bash
ssh nutanix@oneofcvm
```

La commande ncli s'utilise suivie d'options, comme ici ```ncli entitée action option1="valeur" option2="valeur2``` mais elle est aussi utilisable de manière interactive en exécutant uniquement ```ncli```.

#### Création d'un Storage Container nommé **newcontainer** en mode interactif

```bash
ncli
<ncli> 
<ncli> ctr create name="NewContainer" sp-name="default-storage-pool-10728992352041"

    Id                        : 0005ce15-3f3c-a8ce-3802-043f72bf18a6::2900908
    Uuid                      : c3db4020-2a98-4636-b9eb-8ebf10a1b351
    Name                      : Moncontainer
    Storage Pool Id           : 0005ce15-3f3c-a8ce-3802-043f72bf18a6::9
    Storage Pool Uuid         : 111d4e91-10df-4f6c-a774-b79b53077131
    Free Space (Logical)      : 37.69 TiB (41,445,056,716,652 bytes)
    Used Space (Logical)      : 0 bytes
    Allowed Max Capacity      : 37.69 TiB (41,445,056,716,652 bytes)
    Used by other Containers  : 260.86 GiB (280,096,141,312 bytes)
    Explicit Reservation      : 0 bytes
    Thick Provisioned         : 0 bytes
    Replication Factor        : 2
    Oplog Replication Factor  : 2
    NFS Whitelist Inherited   : true
    Container NFS Whitelist   : 192.168.0.77/255.255.255.255
    VStore Name(s)            : Moncontainer
    Random I/O Pri Order      : SSD-PCIe, SSD-SATA, DAS-SATA
    Sequential I/O Pri Order  : SSD-PCIe, SSD-SATA, DAS-SATA
    Compression               : off
    Fingerprint On Write      : off
    On-Disk Dedup             : off
    Erasure Code              : off
    Software Encryption       : off
<ncli> 
```

#### Suppression du **Storage Container**

Lancez la commande ci-dessous pour supprimer sans confirmation le **Storage Container** :

```bash
ncli ctr remove name="Newcontainer"
```

### Exemples d'utilisation de la commande **acli**

Connectez-vous en SSH avec un client SSH sur une des **CVM** :

```bash
ssh nutanix@oneofcvmipaddress
```

La commande acli s'utilise suivie d'options, comme ici ```acli entities.action for-which option1="value1" option2="value2"``` mais elle est aussi utilisable de manière interactive en uniquement ```acli``` depuis une **CVM**

Si l'on utilise **acli** suivie d'une suite de commandes, une demande de confirmation sera systématiquement proposée si un choix se présente.

Pour automatiser la tâche et faire un choix par défaut, utilisez plutôt cette syntaxe ```acli -y entities.action for-which option1="value" option2="value2"```

#### Création d'un **snapshot** en mode interactif

Executez cette suite de commandes à partir d'une des **CVM** :

```bash
acli 
<acropolis> vm.snapshot_create VM-TEST snapshot_name_list="Example"
<acropolis> exit
```
#### Affichage et suppression d'un **snapshot** sans passer par le mode interactif

Saisissez ces commandes pour afficher et supprimer un snapshot avec une demande de confirmation :

```bash
# Snapshot listing
acli snapshot.list
Snapshot Name  Snapshot ID                           Creation Time                         VM Name
Example2       fce5483f-5a9d-4b76-9ad7-48685fb4a638  Wednesday March 23 2022, 09:27:16 AM  VM-TEST
# Snapshot delete
acli snapshot.delete Example2
Delete 1 snapshots? (yes/no)
Delete 1 snapshots? (yes/no) yes
Example2: pending
Example2: complete
```

Utilisez cette syntaxe sans demande de confirmation lors de la suppression du snapshot :

```bash
# Snapshot delete
acli -y snapshot.delete Example2
Example2: pending
Example2: complete
```

### Configuration de **Powershell** sous Windows et utilisation pratique

#### Installation de **Powershell** 7 et des modules pour Nutanix

Il est nécessaire d'installer la dernière version de **Powershell** à partir ce lien [Site pour installation Powershell](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.2#msi)

Téléchargez et installez le programme d'installation qui correspond à votre version de Windows, en 32 bits ou plus généralement en 64 bits.<br>
Lancez l'invite de Commande Powershell 7 en mode administrateur.

```powershell
PS C:\Users\Administrator> Install-Module Nutanix.Cli

Untrusted repository
You are installing the modules from an untrusted repository. If you trust this repository, change its
InstallationPolicy value by running the Set-PSRepository cmdlet. Are you sure you want to install the modules from
'PSGallery'?
[Y] Yes  [A] Yes to All  [N] No  [L] No to All  [S] Suspend  [?] Help (default is "N"):A
PS C:\Users\Administrator> Install-module Nutanix.Prism.PS.Cmds
PS C:\Users\Administrator> Install-module Nutanix.Prism.Common
```

#### Exemples de commandes avec Powershell pour Nutanix

Importez les modules pour Powershell depuis la  console **PowerShell 7** :

```powershell
PS C:\Users\Administrator> Import-Module Nutanix.Cli -Prefix NTNX
PS C:\Users\Administrator> Import-Module Nutanix.Prism.Common -Prefix NTNX
PS C:\Users\Administrator> Import-Module Nutanix.Prism.PS.Cmds -Prefix NTNX
```

Connectez-vous à Prism Central en executant la commande ci-dessous en modifiant ces éléments :

- `< PRISM CENTRAL IP >` remplacez cet élément par l'adresse IP ou le FQDN de **Prism Central**
- `< PRISM CENTRAL USERNAME >` remplacez cet élément par le nom de l'utilisateur de **Prism Central**

```powershell
PS C:\Users\Administrator> Connect-NTNXPrismCentral <PRISM CENTRAL IP>  -UserName < PRISM CENTRAL USERNAME > -AcceptInvalidSSLCerts
Password: *****************
[Warning]: This Prism Central version[pc.2022.1] might not be compatible.This might cause some cmdlets to not function correctly.Please consider upgrading to pc.2020.7 or later Do you still want to continue [Y/N]?:Y

Server                : ipprismcentral
Version               : pc.2022.1
UserName              : < PRISM CENTRAL IP >
AcceptInvalidSSLCerts : True
ForcedConnection      : False
```

Exécutez la commande ci-dessous pour afficher la liste de toutes les machines virtuelles :

```powershell
PS C:\Users\Administrator> Get-NTNXvm

pcHostName                    : 192.168.0.222
vmId                          : 0005ce15-3f3c-a8ce-3802-043f72bf18a6::c8ef83db-a095-49f3-9bb8-cbcdc85c3ebf
uuid                          : c8ef83db-a095-49f3-9bb8-cbcdc85c3ebf
powerState                    : off
vmName                        : OVHgateway
guestOperatingSystem          :
ipAddresses                   : {}
hypervisorType                : kKvm
hostName                      :
hostId                        :
hostUuid                      :
containerIds                  : {0005ce15-3f3c-a8ce-3802-043f72bf18a6::728, 0005ce15-3f3c-a8ce-3802-043f72bf18a6::728}
containerUuids                : {98e67c38-77c4-4e05-bc20-b38bab5b28b2, 98e67c38-77c4-4e05-bc20-b38bab5b28b2}
nutanixVirtualDisks           : {/SelfServiceContainer/.acropolis/vmdisk/a7da0957-9f90-4c07-8d12-65f851350453,
                                /SelfServiceContainer/.acropolis/vmdisk/b308778d-594f-4903-bc30-c2a2fd45ed5d}
nutanixVirtualDiskIds         : {0005ce15-3f3c-a8ce-3802-043f72bf18a6::a7da0957-9f90-4c07-8d12-65f851350453,
                                0005ce15-3f3c-a8ce-3802-043f72bf18a6::b308778d-594f-4903-bc30-c2a2fd45ed5d}
nutanixVirtualDiskUuids       : {a7da0957-9f90-4c07-8d12-65f851350453, b308778d-594f-4903-bc30-c2a2fd45ed5d}
virtualNicIds                 : {0005ce15-3f3c-a8ce-3802-043f72bf18a6::c8ef83db-a095-49f3-9bb8-cbcdc85c3ebf:50:6b:8d:c5
                                :d4:8a, 0005ce15-3f3c-a8ce-3802-043f72bf18a6::c8ef83db-a095-49f3-9bb8-cbcdc85c3ebf:50:6
                                b:8d:e2:16:4e}
virtualNicUuids               : {1e8defc6-ea18-4d67-ba41-d3ae21047940, 537632dc-4db3-483e-a7bb-500d2c1e56ba}
clusterUuid                   : 0005ce15-3f3c-a8ce-3802-043f72bf18a6
virtualGpuUuids               :
memoryCapacityInBytes         : 1073741824
memoryReservedCapacityInBytes : 0
numVCpus                      : 1
cpuReservedInHz               :
numNetworkAdapters            : 2
controllerVm                  : False
controlDomain                 :
vdiskNames                    : {}
vdiskFilePaths                : {/SelfServiceContainer/.acropolis/vmdisk/a7da0957-9f90-4c07-8d12-65f851350453,
                                /SelfServiceContainer/.acropolis/vmdisk/b308778d-594f-4903-bc30-c2a2fd45ed5d}
diskCapacityInBytes           : 11811543040
displayable                   : False
acropolisVm                   : True
protectionDomainName          :
protectionType                :
consistencyGroupName          :
description                   :
runningOnNdfs                 : True
nonNdfsDetails                :
fingerPrintOnWrite            :
onDiskDedup                   :
gpusInUse                     : False
vmType                        :
```

Réutilisez la commande précedente suivie de `|` et de la commande `ft` pour n'afficher que le nom de la machine virtuelle :

```powershell
PS C:\Users\Administrator> Get-NTNXvm | ft vmname

vmName
------
vmfromrestapimajhttpd3
WS2022TEMPLATE
vmfromrestapiws
NTNX-221060034-A-CVM
VM-WS2019
gateway368
PFSENSE-POUR-MOVE
VM-TESTFG
WS2022b
prism-central
NutaDemo1
NTNX-520001155-A-CVM
NTNX-520001158-A-CVM
MOVE
NTNX-520000892-A-CVM
VM-WS2022
OVHgateway
```

Utilisez cet enchainement de commandes pour rechercher une machine virtuelle nommée VW-WS2022 et la supprimer :

```powershell
PS C:\Users\Administrator> Get-NTNXVM | where-object {$_.Source.vmname -like "VM-WS2022" } | Remove-NTNXVM
```

### Utilisation des commandes **REST API**

Tous les exemples montrés ci-dessous doivent être exécutés sur une machine virtuelle sous Linux avec l'outil **curl**.<br>
Certaines commandes ont besoin d'autres outils qui sont disponibles dans la plupart des distributions Linux.

#### Affichage de toutes les options **API** à partir de **Prism central**

Il est possible d'avoir la liste des options **REST API** à partir de **Prism Central**.

En haut à droite de l'interface **Prism Central**, cliquez sur `Username`{.action} puis sur `REST API Explorer`{.action}.

![Display RESTAPI commands 01](images/Displayrestapicmds-01.png){.thumbnail}

La liste des groupes de commandes est affichée à gauche.

Cliquez sur `List operations`{.action} à droite d'un des groupes de commandes pour faire apparaitre toutes les commandes possibles de ce groupe.

![Display RESTAPI commands 02](images/Displayrestapicmds-02.png){.thumbnail}

Cliquez sur `Expand operations`{.action} pour lister la syntaxe d'une commande en particulier.

![Display RESTAPI commands 03](images/Displayrestapicmds-03.png){.thumbnail}

![Display RESTAPI commands 04](images/Displayrestapicmds-04.png){.thumbnail}

#### Divers exemples simples

Connectez-vous en SSH sur une VM Linux du cluster qui a les commandes **curl** et **jq** installées.

Pour que ces exemples fonctionnent, remplacez :

-  `< PRISMCENTRAL IP >` par l'adresse IP ou le nom FQDN de **Prism Central**;
-  `< PRISM CENTRAL USER >` par l'utilisateur de **Prism Central**;
-  `< PRISM CENTRAL PASSWORD >` par le mot de passe de l'utilisateur de **Prism Central**.

##### **Afficher la liste des images ISO et QCOW2 installées sur Prism Central**

```bash
curl -k -X POST --header "Content-Type: application/json" --header "Accept: application/json" -u "< PRISM CENTRAL USER >:< PRISM CENTRAL PASSWORD >" -d {} "https://< PRISM CENTRAL IP >:9440/api/nutanix/v3/images/list" | jq
```

Cette commande a généré un fichier au format json lisible grâce à la commande **jq** qui contient la liste des images et les informations nécessaires pour d'autres commandes **REST API**.

```json
{
  "api_version": "3.1",
  "metadata": {
    "total_matches": 14,
    "kind": "image",
    "length": 14,
    "offset": 0
  },
  "entities": [
    {
      "status": {
        "state": "COMPLETE",
        "execution_context": {
          "task_uuid": [
            "3a4315c8-0f9e-4182-be89-9083371ef40e"
          ]
        },
        "name": "ubuntu-20.04.3-live-server-amd64.iso",
        "resources": {
          "retrieval_uri_list": [
            "https://127.0.0.1:9440/api/nutanix/v3/images/4a48f395-80f3-4afe-a3e4-91700db88901/file"
          ],
          "current_cluster_reference_list": [
            {
              "kind": "cluster",
              "uuid": "0005ce15-3f3c-a8ce-3802-043f72bf18a6"
            }
          ],
          "architecture": "X86_64",
          "size_bytes": 1261371392,
          "image_type": "ISO_IMAGE",
          "source_uri": "file://4a48f395-80f3-4afe-a3e4-91700db88901"
        },
        "description": "Ubuntu Server 20.04"
      },
      "spec": {
        "name": "ubuntu-20.04.3-live-server-amd64.iso",
        "resources": {
          "image_type": "ISO_IMAGE",
          "source_uri": "file://4a48f395-80f3-4afe-a3e4-91700db88901",
          "architecture": "X86_64"
        },
        "description": "Ubuntu Server 20.04"
      },
      "metadata": {
        "last_update_time": "2021-10-12T13:38:55Z",
        "kind": "image",
        "uuid": "4a48f395-80f3-4afe-a3e4-91700db88901",
        "creation_time": "2021-10-12T13:38:49Z",
        "spec_version": 2,
        "spec_hash": "00000000000000000000000000000000000000000000000000",
        "categories_mapping": {},
        "owner_reference": {
          "kind": "user",
          "uuid": "00000000-0000-0000-0000-000000000000",
          "name": "admin"
        },
        "categories": {}
      }
    },
```

##### **Affichage de la liste des machines virtuelles**

Exécutez cette commande pour afficher la liste des machines virtuelles :

```bash
curl -k -X POST --header "Content-Type: application/json" --header "Accept: application/json" -u "< PRISM CENTRAL USER >:< PRISM CENTRAL PASSWORD >" -d {} "https://< PRISM CENTRAL IP >:9440/api/nutanix/v3/vms/list" | jq 
```
Le résultat est toujours au format **json**.

Ci-dessous une partie du fichier généré, contenant l'**UUID** de la machine virtuelle. 

Il existe un UUID pour chaque élément des clusters Nutanix (VM, Vdisks, images, etc....). Ce numéro est unique.

`"kind:" "vm"` correspond au type de l'objet.

```json
        "kind": "vm",
        "uuid": "46574b90-333b-4cd9-a737-3af0f8e242b7",
```

##### **Affichage des informations d'une machine virtuelle à partir de son uuid**

Lancez la commande ci dessous en remplaçant `< VM UUID >` par l'UUID d'une machine virtuelle listée précédemment :

```bash
curl -k -X GET --header "Accept: application/json" - u "< PRISM CENTRAL USER >:< PRISM CENTRAL PASSWORD >" "https://< PRISM CENTRAL IP >:9440/api/nutanix/v3/vms/< VM UUID >" | jq
```

##### **Affichage de la liste des réseaux**

Lancez cette commande pour afficher la liste des réseaux dans Nutanix :

```bash
 curl -k -X POST --header "Content-Type: application/json" --header "Accept: application/json" -u "< PRISM CENTRAL USER >:< PRISM CENTRAL PASSWORD >" -d {} "https://< PRISM CENTRAL IP >:9440/api/nutanix/v3/subnets/list" | jq
```
 
#### **Affichage des informations sur les clusters administrées la console Prism Central**

Lancez la commande ci-dessous pour afficher les informations sur les clusters administrés par **Prism Central** :

```bash
curl -k --request POST --url "https://< PRISM CENTRAL IP >:9440/api/nutanix/v3/clusters/list" -u "< PRISM CENTRAL USER >:< PRISM CENTRAL PASSWORD >" --header 'Content-Type: application/json' --data '{ }' | jq
```

#### Exemples avancés

En plus de pouvoir afficher des informations, vous pouvez agir sur le cluster Nutanix pour créer ou modifier des éléments d'un cluster. 
 
Nous allons voir comment créer deux machines virtuelles d'une manière automatisée, l'une dans un environnement Linux, l'autre sous Windows.

##### **Création d'une machine virtuelle sous Linux**

Il est possible d'installer Linux à partir d'images préinstallées et de personnaliser la configuration avec cloud-init qui utilise le format de fichiers yaml. Pour importer des images dans un cluster Nutanix, vous pouvez vous aider de notre guide sur l'[importation d'images ISO](https://docs.ovh.com/ca/fr/nutanix/image-import/).

Suivez ces instructions pour créer une machine virtuelle à partir d'une image personnalisable avec cloud-init d'Ubuntu.

Sous Linux, créez un mot passe au format SHA-512 avec la commande ```mkpasswd``` :

```bash
mkpasswd --method=SHA-512 -s
Password:
ExampleSHA512axUNIzgF$4R6hbeVF7Nqz3JMUSI47vINSmwt3XufAIC1lvu15twR/8HMkuRIGd7ZNNLMDGYYGyrgZXwgI7q2BP2rCAv9BU1
```

Editez le fichier ```cloud-config.yaml```. Remplacez : 

- `< RSAKEYFORLOGIN >` par une clé RSA qui permettra de se connecter avec le compte userlinux en SSH au travers de cette clé. 
- `< PASSWORDGENERATEDBYMKPASSWORD >` par le mot de passe créé au format SHA-512.

```yaml
#cloud-config
hostname: vm-fromcloudinit
fqdn: vm-fromcloudinit.localdomain
users:
  - name: userlinux
    ssh-authorized-keys:
      - ssh-rsa < RSAKEYFORLOGIN >
    sudo: ['ALL=(ALL) NOPASSWD:ALL']
    groups: sudo
    shell: /bin/bash
    lock_passwd: false
    passwd: < PASSWORDGENERATEDBYMKPASSWD >

package_upgrade: true

packages:
  - nginx

runcmd:
  - sleep 60 & reboot
```

Le fichier au format **yaml** est créé avec la possibilité de faire l'installation d'une machine virtuelle sous LINUX avec le serveur WEB **NGINX**.

Transformez le fichier **yaml** au format **mime64** puis stockez-le dans une variable pour pouvoir l'intégrer dans le fichier de configuration de la machine virtuelle.

```bash
USERDATA=$(base64 -w 0 cloud-config.yaml)
echo $USERDATA
```

Editez le fichier **vmlinux.json** ci-dessous en modifiant ces éléments pour l'adapter à votre environnement :

- `< VMNAME >` doit être remplacé par le nom de la machine virtuelle que vous voulez donner dans la console Nutanix. 
- `< UUID-IMAGE-LINUX-CLOUD-INIT >` doit être remplacé par l'UUID de l'image Linux compatible avec cloud-init.
- `< UUID-NETWORK >` doit être remplacé par l'UUID du réseau sur laquelle la machine virtuelle va fonctionner. 
- `< MIME64FORMATEDYAMLFILE >` doit être remplacé par le contenu de la variable ```$USERDATA```.
- `< CLUSTER-NAME >` doit être remplacé par le nom du cluster.
- `< CLUSTER-UUID >` doit être remplacé par l'UUID du cluster.  

Toutes les informations nécessaires sont soit accessibles depuis l'interface web de **Prism central**, soit au travers des accès à **REST API** vus précédemment. 

```json
{
	"spec":{
		"name":"< VMNAME >",
		"resources":{
			"power_state":"ON",
			"num_vcpus_per_socket":1,
			"num_sockets":1,
			"memory_size_mib":1024,
			"disk_list":[{
				"device_properties":{
					"device_type":"DISK",
					"disk_address": {
						"device_index": 0,
						"adapter_type": "SCSI"
					}
				},
				"data_source_reference": {
					"kind": "image",
					"uuid": "< UUID-IMAGE-LINUX-CLOUD-INIT >"
				}
			},
			{
				"device_properties":{
					"device_type":"CDROM",
					"disk_address": {
                                                "device_index": 0,
                                                "adapter_type": "IDE"
					}
				}
			}],
			"nic_list":[{
				"nic_type":"NORMAL_NIC",
				"is_connected":true,
				"ip_endpoint_list":[{
					"ip_type":"DHCP"
				}],
				"subnet_reference":{
					"kind":"subnet",
					"name":"base",
					"uuid":"< UUID-NETWORK >"
				}
			}],
			"guest_tools":{
				"nutanix_guest_tools":{
					"state":"ENABLED",
					"iso_mount_state":"MOUNTED"
				}
			},
			"guest_customization": {
				"cloud_init": {
					"user_data": "< MIME64FORMATEDYAMLFILE >"
				},
				"is_overridable": false
			}
		},
		"cluster_reference":{
			"kind":"cluster",
			"name":"Cluster_368",
			"uuid":"0005ce15-3f3c-a8ce-3802-043f72bf18a6"
		}
	},
	"api_version":"3.1.0",
	"metadata":{
		"kind":"vm"
	}
}
```

Lancez cette commande pour installer la machine virtuelle :

```bash
curl -k -H Accept:application/json -H Content-Type:application/json -u "< PRISM CENTRAL USER >:< PRISM CENTRAL PASSWORD >"  -X POST "https://< PRISM CENTRAL IP >:9440/api/nutanix/v3/vms" -d @vmlinux.json | jq .
```

La nouvelle machine virtuelle va alors apparaitre dans **Prism Central** avec **NGINX** installé et les mises à jours effectuées.

##### **Création d'une machine virtuelle sous Windows**

Vous pouvez installer des machines virtuelles sous Windows à partir d'une image préparée à l'aide de la commande **sysprep** intégrée à Windows, et y appliquer un fichier de personnalisation.<br>
L'image peut être importée directement d'une machine virtuelle du cluster.

Le fichier de configuration est un fichier au format **XML**. Il est possible de créer ce fichier au travers des outils **Windows ADK** téléchargeables sur le site de **Microsoft** via [ce lien](https://docs.microsoft.com/en-us/windows-hardware/get-started/adk-install#download-the-adk-for-windows-11) et d'utiliser **Windows system image manager** pour créer un fichier **XML** adéquat.

Ci-dessous un exemple de fichier **XML** pour Windows 2019 qui crée un utilisateur admin et qui modifie le mot de passe du compte **admin** et **Administrator** en P@ssw0rd :

```xml
<?xml version="1.0" encoding="utf-8"?>
<unattend xmlns="urn:schemas-microsoft-com:unattend">
    <settings pass="windowsPE">
        <component name="Microsoft-Windows-International-Core-WinPE" processorArchitecture="amd64" publicKeyToken="31bf3856ad364e35" language="neutral" versionScope="nonSxS" xmlns:wcm="http://schemas.microsoft.com/WMIConfig/2002/State" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
            <SetupUILanguage>
                <UILanguage>en-US</UILanguage>
                <WillShowUI>Never</WillShowUI>
            </SetupUILanguage>
            <InputLocale>0409:00000409</InputLocale>
            <SystemLocale>en-US</SystemLocale>
            <UILanguage>en-US</UILanguage>
            <UserLocale>en-US</UserLocale>
        </component>
        <component name="Microsoft-Windows-Setup" processorArchitecture="amd64" publicKeyToken="31bf3856ad364e35" language="neutral" versionScope="nonSxS" xmlns:wcm="http://schemas.microsoft.com/WMIConfig/2002/State" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
            <UserData>
                <AcceptEula>true</AcceptEula>
                <FullName>Nutanix Doc</FullName>
                <Organization>Nutanix Doc</Organization>
            </UserData>
            <EnableFirewall>true</EnableFirewall>
            <EnableNetwork>true</EnableNetwork>
        </component>
    </settings>
    <settings pass="specialize">
        <component name="Microsoft-Windows-Shell-Setup" processorArchitecture="amd64" publicKeyToken="31bf3856ad364e35" language="neutral" versionScope="nonSxS" xmlns:wcm="http://schemas.microsoft.com/WMIConfig/2002/State" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
            <TimeZone>Central Standard Time</TimeZone>
        </component>
    </settings>
    <settings pass="oobeSystem">
        <component name="Microsoft-Windows-Shell-Setup" processorArchitecture="amd64" publicKeyToken="31bf3856ad364e35" language="neutral" versionScope="nonSxS" xmlns:wcm="http://schemas.microsoft.com/WMIConfig/2002/State" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
            <UserAccounts>
                <AdministratorPassword>
                    <Value>UABAAHMAcwB3ADAAcgBkAEEAZABtAGkAbgBpAHMAdAByAGEAdABvAHIAUABhAHMAcwB3AG8AcgBkAA==</Value>
                    <PlainText>false</PlainText>
                </AdministratorPassword>
                <LocalAccounts>
                    <LocalAccount wcm:action="add">
                        <Password>
                            <Value>UABAAHMAcwB3ADAAcgBkAFAAYQBzAHMAdwBvAHIAZAA=</Value>
                            <PlainText>false</PlainText>
                        </Password>
                        <Group>Administrators</Group>
                        <Name>admin</Name>
                    </LocalAccount>
                </LocalAccounts>
            </UserAccounts>
            <OOBE>
                <HideEULAPage>true</HideEULAPage>
                <HideOEMRegistrationScreen>true</HideOEMRegistrationScreen>
                <HideOnlineAccountScreens>true</HideOnlineAccountScreens>
                <HideWirelessSetupInOOBE>true</HideWirelessSetupInOOBE>
                <ProtectYourPC>1</ProtectYourPC>
                <HideLocalAccountScreen>true</HideLocalAccountScreen>
            </OOBE>
        </component>
        <component name="Microsoft-Windows-International-Core" processorArchitecture="wow64" publicKeyToken="31bf3856ad364e35" language="neutral" versionScope="nonSxS" xmlns:wcm="http://schemas.microsoft.com/WMIConfig/2002/State" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
            <UILanguage>en-US</UILanguage>
            <UserLocale>en-US</UserLocale>
            <SystemLocale>en-US</SystemLocale>
            <InputLocale>0409:00000409</InputLocale>
        </component>
    </settings>
    <cpi:offlineImage cpi:source="wim:c:/sw2019/sources/install.wim#Windows Server 2019 SERVERSTANDARD" xmlns:cpi="urn:schemas-microsoft-com:cpi" />
</unattend>
```

Copiez le fichier **XML** sur une VM Linux du cluster et transformez-le au format MIME64, comme ci-dessous, pour l'intégrer dans le fichier de configuration de la machine virtuelle au format **json** :

```bash
USERDATA=$(base64 -w 0 answerfile.xml)
echo $USERDATA
```

Editez le fichier *vmwindows.json* ci-dessous en modifiant ces éléments pour l'adapter à votre environnement :

- `< VMNAME >` doit être remplacé par le nom de la VM que vous voulez donner dans la console Nutanix.
- `< UUID-IMAGE-WINDOWS2022SYSPREPED >` doit être remplacé par l'UUID de l'image Windows SYSPREPED utilisable avec un fichier XML.
- `< UUID-NETWORK >` doit être remplacé par le nom du réseau sur laquelle la machine virtuelle va fonctionner. 
- `< MIME64FORMATEDYAMLFILE >` doit être remplacé  par le contenu de la variable ```$USERDATA```.
- `< CLUSTER-NAME >` doit être remplacé par le nom du cluster.
- `< CLUSTER-UUID >` doit être remplacé par l'UUID du cluster.

Toutes les informations nécessaires sont soit accessibles depuis l'interface web de **Prism central** ou au travers de commandes **REST API**.

```json
{
	"spec":{
		"name":"< VMNAME >",
		"resources":{
			"power_state":"ON",
			"num_vcpus_per_socket":2,
			"num_sockets":2,
			"memory_size_mib":4096,
			"disk_list":[{
				"device_properties":{
					"device_type":"DISK",
					"disk_address": {
						"device_index": 0,
						"adapter_type": "SCSI"
					}
				},
				"data_source_reference": {
					"kind": "image",
					"uuid": "< UUID-IMAGE-WINDOWS2022SYSPREPED >"
				}
			},
			{
				"device_properties":{
					"device_type":"CDROM",
					"disk_address": {
                                                "device_index": 0,
                                                "adapter_type": "IDE"
					}
				}
			}],
			"nic_list":[{
				"nic_type":"NORMAL_NIC",
				"is_connected":true,
				"ip_endpoint_list":[{
					"ip_type":"DHCP"
				}],
				"subnet_reference":{
					"kind":"subnet",
					"name":"base",
					"uuid":"< UUID-NETWORK >"
				}
			}],
			"guest_tools":{
				"nutanix_guest_tools":{
					"state":"ENABLED",
					"iso_mount_state":"MOUNTED"
				}
			},
			"guest_customization": {
				"sysprep": {
					"unattend_xml": "< MIME64FORMATEDYAMLFILE >"



},
				"is_overridable": false
			}
		},
		"cluster_reference":{
			"kind":"cluster",
			"name":"< CLUSTER-NAME >",
			"uuid":"< CLUSTER-UUID >"
		}
	},
	"api_version":"3.1.0",
	"metadata":{
		"kind":"vm"
	}
}
```

```bash
curl -k -H Accept:application/json -H Content-Type:application/json -u "< PRISM CENTRAL USER >:< PRISM CENTRAL PASSWORD >"  -X POST "https://< PRISM CENTRAL IP >:9440/api/nutanix/v3/vms" -d @vmwindows.json | jq .
```

La nouvelle machine virtuelle doit apparaitre dans **Prism Central**, elle est alors démarrée avec les options du fichier de réponse.

## Aller plus loin <a name="gofurther"></a>

[Références NCLI de Nutanix](https://portal.nutanix.com/page/documents/details?targetId=Command-Ref-AOS-v5_20:man-ncli-c.html)

[Références ACLI de NUTANIX](https://portal.nutanix.com/page/documents/details?targetId=Command-Ref-AOS-v5_20:man-acli-c.html)

[Installation des CmdLets Nutanix](https://portal.nutanix.com/page/documents/details?targetId=PS-Cmdlets-AOS-v6_0:ps-ps-cmdlets-installv2-r.html) 

[Réferences sur les outils de développements de Nutanix](https://www.nutanix.dev)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
