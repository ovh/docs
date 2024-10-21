---
title: "Trasferire il backup di un’istanza da una Region OpenStack ad un’altra"
excerpt: "Scopri come trasferire un backup di istanza da una Region OpenStack ad un’altra preservando la configurazione e lo stato dell’istanza"
updated: 2023-09-25
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

In alcuni casi, potrebbe essere necessario spostare un’[istanza Public Cloud](https://www.ovhcloud.com/it/public-cloud/) da una Region OpenStack a un’altra. Sia perché preferisci migrare verso una nuova Region OpenStack disponibile, sia perché vuoi migrare da OVHcloud Labs verso Public Cloud.

**Questa guida ti mostra come migrare un backup di istanza da una Region OpenStack a un’altra, preservandone la configurazione e lo stato.**

## Prerequisiti

Per effettuare il trasferimento, avrete bisogno di un ambiente con:

- CLI OpenStack. Consulta la nostra guida "[Come preparare l’ambiente per utilizzare l’API OpenStack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api)".
- Connettività con le API OVHcloud OpenStack.
- Spazio di storage disponibile corrispondente alla dimensione del disco dell’istanza (per lo storage di backup temporaneo).

Questo ambiente verrà utilizzato come "jump host" per trasferire il backup da una regione all'altra. L’ambiente può essere costituito da un’istanza ospitata in OVHcloud o sulla macchina locale.

È inoltre necessario creare un'[istanza Public Cloud](https://www.ovhcloud.com/it/public-cloud/) sull'account OVHcloud.

### Crea un backup

```bash
$ openstack server list
 
+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
| ID | Name | Status | Networks | Image Name |
+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
| aa7115b3-83df-4375-b2ee-19339041dcfa | Server 1 | ACTIVE | Ext-Net=51.xxx.xxx.xxx, 2001:41d0:xxx:xxxx::xxxx | Ubuntu 16.04 |
+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
```

Per creare un backup dell’istanza, esegui questo comando:

```bash 
$ openstack server image create --name snap_server1 aa7115b3-83df-4375-b2ee-19339041dcfa
```

### Scarica il backup

Esegui questo comando per visualizzare l’elenco delle istanze disponibili:
 
```bash
$ openstack image list
+--------------------------------------+-----------------------------------------------+--------+
| ID | Name | Status |
+--------------------------------------+-----------------------------------------------+--------+
| 825b785d-8a34-40f5-bdcd-0a3c3c350c5a | snap_server1 | active |
| 3ff877dc-1a62-43e7-9655-daff37a0c355 | NVIDIA GPU Cloud (NGC) | active |
| a14a7c1e-3ac5-4a61-9d36-1abc4ab4d5e8 | Centos 7 | active |
| f720a16e-543b-42e5-af45-cc188ad2dd34 | Debian 8 - GitLab | active |
| d282e7aa-332c-4dc7-90a9-d49641fa7a95 | CoreOS Stable | active |
| 2519f0fb-18cc-4915-9227-7754292b9713 | Ubuntu 16.04 | active |
| b15789f8-2e2f-4f6c-935d-817567319627 | Windows Server 2012 R2 Standard - UEFI | active |
| ed2f327f-dbae-4f9e-9754-c677a1b76fa3 | Ubuntu 14.04 | active |
| 9c9b3772-5320-414a-90bf-60307ff60436 | Debian 8 - Docker | active |
```

Identifica il backup dell’istanza nella lista:

```text
| 825b785d-8a34-40f5-bdcd-0a3c3c350c5a | snap_server1 | qcow2 | bare | 1598029824 | active |
```

Infine, esegui questo comando per scaricare il backup sull’host di collegamento:

```bash
$ openstack image save --file snap_server1.qcow 825b785d-8a34-40f5-bdcd-0a3c3c350c5a
```

<a name="transfer"></a>

### Trasferisci il backup in un’altra Region OpenStack

Prima di avviare il processo di trasferimento è necessario impostare le nuove variabili d’ambiente.

> [!warning]
>
> In caso di trasferimento del backup in una Region OpenStack all’interno dello stesso progetto, sarà necessario modificare la variabile `OS_REGION_NAME`.
>

```bash
$ export OS_REGION_NAME=SBG1
```

In caso di trasferimento del backup verso un altro progetto o account, è necessario ricaricare le variabili d’ambiente associate utilizzando questo comando:

```bash
$ source openrc.sh
```

Per trasferire il backup nella nuova Region OpenStack, utilizza questo comando:

```bash
$ openstack image create --disk-format qcow2 --container-format bare --file snap_server1.qcow snap_server1
```

```text
+------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field | Value |
+------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| checksum | 82cb7d57ec7278818bba0afcf802f0fb |
| container_format | bare |
| created_at | 2019-03-22T14:26:22Z |
| disk_format | qcow2 |
| file | /v2/images/1bf21cf3-8d39-40ae-b088-5549c31b7905/file |
| id | 0a3f5901-2314-438a-a7af-ae984dcbce5c |
| min_disk | 0 |
| min_ram | 0 |
| name | snap_server1 |
| owner | 4e03fd164d504aa3aa03938f0bf4ed90 |
| properties | direct_url='swift+config://ref1/glance/1bf21cf3-8d39-40ae-b088-5549c31b7905', locations='[{u'url': u'swift+config://ref1/glance/1bf21cf3-8d39-40ae-b088-5549c31b7905', u'metadata': {}}]' |
| protected | False |
| schema | /v2/schemas/image |
| size | 3004956672 |
| status | active |
| tags | |
| updated_at | 2019-03-22T14:41:05Z |
| virtual_size | None |
| visibility | private |
+------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

### Crea un’istanza a partire da un backup

Per creare un’istanza a partire dal backup, utilizza l’ID di backup come immagine con questo comando:

```bash
$ openstack server create --key-name SSHKEY --flavor 98c1e679-5f2c-4069-b4da-4a4f7179b758 --image 0a3f5901-2314-438a-a7af-ae984dcbce5c Server1_from_snap
```

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.