---
title: 'Trasferire il backup di un’istanza tra datacenter'
excerpt: 'Come migrare un backup da un datacenter a un altro conservando la configurazione e lo stato dell’istanza'
slug: trasferisci_il_backup_di_unistanza_da_un_datacenter_a_un_altro
section: 'Da client tramite riga di comando'
legacy_guide_number: g1853
---

**Ultimo aggiornamento: 02/12/2019**

## Obiettivo

In alcuni casi potresti avere la necessità di spostare le tue istanze da un datacenter a un altro, ad esempio per ospitare il tuo servizio in un nuovo datacenter disponibile o per migrarlo da OVH Labs alla soluzione Public Cloud.

**Questa guida ti mostra come trasferire il backup di un’istanza tra diversi datacenter conservando la configurazione e lo stato del proprio server.**


## Prerequisiti

* Disporre di un’[istanza Public Cloud OVH](https://www.ovh.it/public-cloud/compute/)
* Avere accesso in SSH al datacenter (root)
* Aver consultato la guida [Preparare l’ambiente per utilizzare l’API OpenStack](https://docs.ovh.com/it/public-cloud/prepara_il_tuo_ambiente_di_sviluppo_per_utilizzare_lapi_openstack/) (consigliato)

> [!primary]
>
I comandi utilizzati in questa guida sono basati sulla CLI OpenStack e non sulle API `Nova` e `Glance`.
>

## Procedura

### Crea un backup

Per prima cosa accedi al datacenter via SSH e visualizza l’elenco delle istanze esistenti tramite il comando:

```
#root@server:~$ openstack server list

+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
| ID                                   | Name      | Status | Networks                                         | Image Name   |
+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
| aa7115b3-83df-4375-b2ee-19339041dcfa | Server 1 | ACTIVE | Ext-Net=51.xxx.xxx.xxx, 2001:41d0:xxx:xxxx::xxxx | Ubuntu 16.04 |
+--------------------------------------+-----------+--------+--------------------------------------------------+--------------+
```


Esegui questo comando per creare un backup dell’istanza:

```
openstack server image create --name snap_server1 aa7115b3-83df-4375-b2ee-19339041dcfa
```

### Scarica il backup

Visualizza l’elenco delle istanze disponibili utilizzando il comando:

```
#root@server:~$ openstack image list
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

Identifica il backup nella lista:

```
| 825b785d-8a34-40f5-bdcd-0a3c3c350c5a | snap_server1 | qcow2 | bare | 1598029824 | active |
```

Scarica il backup:

```
#root@server:~$ openstack image save --file snap_server1.qcow 825b785d-8a34-40f5-bdcd-0a3c3c350c5a
```

### Trasferisci il backup in un altro datacenter

Prima di avviare il processo di trasferimento è necessario impostare le nuove variabili d’ambiente.

> [!warning]
>
> Per migrare il backup in un altro datacenter utilizzato nell’ambito dello stesso progetto, è sufficiente modificare la variabile `OS_REGION_NAME`.
>

```
#root@server:~$ export OS_REGION_NAME=SBG1
```

Per migrare il backup verso un altro progetto o account è invece necessario ricaricare le variabili d’ambiente associate tramite questo comando:

```
#root@server:~$ source openrc.sh
```

Avvia il trasferimento del backup verso il nuovo datacenter:


```
#root@server:~$ openstack image create --disk-format qcow2 --container-format bare --file snap_server1.qcow snap_server1

+------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field            | Value                                                                                                                                                                                     |
+------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| checksum         | 82cb7d57ec7278818bba0afcf802f0fb                                                                                                                                                          |
| container_format | bare                                                                                                                                                                                      |
| created_at       | 2019-03-22T14:26:22Z                                                                                                                                                                      |
| disk_format      | qcow2                                                                                                                                                                                     |
| file             | /v2/images/1bf21cf3-8d39-40ae-b088-5549c31b7905/file                                                                                                                                      |
| id               | 0a3f5901-2314-438a-a7af-ae984dcbce5c                                                                                                                                                    |
| min_disk         | 0                                                                                                                                                                                         |
| min_ram          | 0                                                                                                                                                                                         |
| name             | snap_server1                                                                                                                                                                             |
| owner            | 4e03fd164d504aa3aa03938f0bf4ed90                                                                                                                                                          |
| properties       | direct_url='swift+config://ref1/glance/1bf21cf3-8d39-40ae-b088-5549c31b7905', locations='[{u'url': u'swift+config://ref1/glance/1bf21cf3-8d39-40ae-b088-5549c31b7905', u'metadata': {}}]' |
| protected        | False                                                                                                                                                                                     |
| schema           | /v2/schemas/image                                                                                                                                                                         |
| size             | 3004956672                                                                                                                                                                                |
| status           | active                                                                                                                                                                                    |
| tags             |                                                                                                                                                                                           |
| updated_at       | 2019-03-22T14:41:05Z                                                                                                                                                                      |
| virtual_size     | None                                                                                                                                                                                      |
| visibility       | private                                                                                                                                                                                   |
+------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

### Crea un’istanza a partire da un backup

Per effettuare questa operazione, esegui il seguente comando utilizzando l’identificativo dell’immagine del backup:

```
#root@server:~$ openstack server create --key-name SSHKEY --flavor 98c1e679-5f2c-4069-b4da-4a4f7179b758 --image 0a3f5901-2314-438a-a7af-ae984dcbce5c Server1_from_snap
```

## Per saperne di più

[Trasferire il backup di un disco aggiuntivo da un datacenter a un altro](https://docs.ovh.com/it/public-cloud/trasferisci_il_backup_di_un_disco_aggiutivo_da_un_datacenter_a_un_altro/)

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.