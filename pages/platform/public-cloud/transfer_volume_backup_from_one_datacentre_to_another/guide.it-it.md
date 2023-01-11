---
title: Trasferisci il backup di un disco aggiutivo da un datacenter a un altro
excerpt: Trasferisci il backup di un disco aggiutivo da un datacenter a un altro
slug: trasferisci_il_backup_di_un_disco_aggiutivo_da_un_datacenter_a_un_altro
legacy_guide_number: g1941
section: Storage
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 05/01/2022**

## Obiettivo

In alcuni casi, potresti avere bisogno di trasferire i tuoi dischi aggiuntivi da un datacenter a un altro, sia perché è disponibile un nuovo datacenter, sia perché vuoi migrare da [OVHcloud Labs](https://labs.ovh.com/){.external} a [Public Cloud](https://www.ovhcloud.com/it/public-cloud/){.external}.

**Questa guida ti mostra come trasferire il backup di un disco aggiutivo da un datacenter a un altro.**


## Prerequisiti

- Disporre di un'[istanza Public Cloud](https://www.ovh.com/ca/fr/public-cloud/instances/){.external} attiva nel tuo account OVHcloud
- Avere accesso in SSH al datacenter (root)
- Aver consultato la guida [Preparare l’ambiente per utilizzare l’API OpenStack](../prepare_the_environment_for_using_the_openstack_api/){.external} (consigliato)


> [!primary]
>
I comandi utilizzati in questa guida sono basati sulla CLI OpenStack e non sulle API `Nova` e `Glance`.
>

## Procedura

### Crea un backup

Crea una connessione SSH al tuo datacenter ed esegui questo comando per identificare i tuoi volumi esistenti:

```sh
root@server:~$ openstack volume list 
+--------------------------------------+--------------+--------+------+------------------------------------+ 
| ID | Display Name | Status | Size | Attached to | 
+--------------------------------------+--------------+--------+------+------------------------------------+ 
| 673b0ad9-1fca-485c-ae2b-8ee271b71dc7 | volume | in-use | 10 | Attached to Server 1 on /dev/sdb | 
+--------------------------------------+--------------+--------+------+------------------------------------+ 
```

- Disconnetti il disco dalla sua istanza:


```sh
root@server:~$ openstack server remove volume a8b6b51-4413-4d1a-8113-9597d804b07e 673b0ad9-1fca-485c-ae2b-8ee271b71dc7
```

Crea un backup sotto forma di immagine utilizzando questo comando:

```sh
root@server:~$ openstack image create --disk-format qcow2 --container-format bare --volume 673b0ad9-1fca-485c-ae2b-8ee271b71dc7 snap_volume
+---------------------+------------------------------------------------------+
|       Property      |                         Value                        |
+---------------------+------------------------------------------------------+
|   container_format  |                          bare                        |
|     disk_format     |                         qcow2                        |
| display_description |                                                      |
|          id         |           673b0ad9-1fca-485c-ae2b-8ee271b71dc7       |
|       image_id      |           8625f87e-8248-4e62-a0ce-a89c7bd1a9be       |
|      image_name     |                      snap_volume                     |
|         size        |                          10                          |
|        status       |                       uploading                      |
|      updated_at     |               2015-10-21T08:33:34.000000             |
|     volume_type     |                      [..........]                    |
+---------------------+------------------------------------------------------+
```


### Gestisci i tuoi backup

Per visualizzare le immagini disponibili, esegui questo comando:

```
root@server:~$ openstack image list
+--------------------------------------+-----------------------------------------------+--------+
| ID                                   | Name                                          | Status |
+--------------------------------------+-----------------------------------------------+--------+
| 8625f87e-8248-4e62-a0ce-a89c7bd1a9be | snap_volume                                   | active |
| 73958794-ecf6-4e68-ab7f-1506eadac05b | Debian 7                                      | active |
| bdcb5042-3548-40d0-b06f-79551d3b4377 | Debian 8                                      | active |
| 7250cc02-ccc1-4a46-8361-a3d6d9113177 | Fedora 19                                     | active |
| 57b9722a-e6e8-4a55-8146-3e36a477eb78 | Fedora 20                                     | active |
| 8625f87e-8248-4e62-a0ce-a89c7bd1a9be | snap_volume                                   | active |
| 3bda2a66-5c24-4b1d-b850-83333b580674 | Ubuntu 12.04                                  | active |
| 9bfac38c-688f-4b63-bf3b-69155463c0e7 | Ubuntu 14.04                                  | active |
| 6a123897-a5bb-46cd-8f5d-ecf9ab9877f2 | Windows-Server-2012-r2                        | active |
+--------------------------------------+-----------------------------------------------+--------+
```

Identifica il backup nella lista:

```sh
| 8625f87e-8248-4e62-a0ce-a89c7bd1a9be | snap_volume | qcow2 | bare | 319356928 | active | 
```

Esegui questo comando per scaricare il backup:

```sh 
root@server:~$ openstack image save --file snap_volume.qcow 8625f87e-8248-4e62-a0ce-a89c7bd1a9be
```

### Trasferisci il backup in un altro datacenter

Prima di avviare il processo di trasferimento è necessario impostare le nuove variabili d’ambiente.

> [!warning]
>
Per migrare il backup in un altro datacenter utilizzato nell’ambito dello stesso progetto, è sufficiente modificare la variabile OS_REGION_NAME.
>

```sh 
root@server:~$ export OS_REGION_NAME=SBG1
```

Per migrare il backup verso un altro progetto o account, è necessario ricaricare le variabili d'ambiente associate a questo account utilizzando il seguente comando:

```sh
root@server:~$ source openrc.sh
```

Per trasferire il backup nel nuovo datacenter, utilizza questo comando:

```sh
root@server:~$ openstack image create --disk-format qcow2 --container-format bare --file snap_volume.qcow snap-volume
+------------------+------------------------------------------------------+
| Field            | Value                                                |
+------------------+------------------------------------------------------+
| checksum         | None                                                 |
| container_format | bare                                                 |
| created_at       | 2019-03-22T15:26:04Z                                 |
| disk_format      | qcow2                                                |
| file             | /v2/images/783136d3-365a-49c6-9024-1e2f9c2db51a/file |
| id               | aa2a39c6-433c-4e94-995a-a12c4398d457                 |
| min_disk         | 0                                                    |
| min_ram          | 0                                                    |
| name             | snap_volume                                          |
| owner            | b3e26xxxxxxxxxxxxxxxxxxx12b0ba29                     |
| properties       | locations='[]'                                       |
| protected        | False                                                |
| schema           | /v2/schemas/image                                    |
| size             | None                                                 |
| status           | queued                                               |
| tags             |                                                      |
| updated_at       | 2019-03-22T15:26:04Z                                 |
| virtual_size     | None                                                 |
| visibility       | private                                              |
+------------------+------------------------------------------------------+
```

### Crea un volume a partire dal tuo backup

Per effettuare questa operazione, esegui il seguente comando utilizzando l’identificativo dell’immagine del backup:

```sh
root@server:~$ volume create --type classic --image aa2a39c6-433c-4e94-995a-a12c4398d457 --size 10 volume_from_snap
+---------------------+--------------------------------------+
| Field               | Value                                |
+---------------------+--------------------------------------+
| attachments         | []                                   |
| availability_zone   | nova                                 |
| bootable            | false                                |
| consistencygroup_id | None                                 |
| created_at          | 2019-03-22T15:39:39.880479           |
| description         | None                                 |
| encrypted           | False                                |
| id                  | 938b13c9-414e-45b5-b0fc-cfea743f54e1 |
| multiattach         | False                                |
| name                | volume_from_snap                     |
| properties          |                                      |
| replication_status  | disabled                             |
| size                | 10                                   |
| snapshot_id         | None                                 |
| source_volid        | None                                 |
| status              | creating                             |
| type                | classic                              |
| updated_at          | None                                 |
| user_id             | f63a1d2f27df455bb306bb79b0f2e2aa     |
+---------------------+--------------------------------------+
```

## Per saperne di più

[Trasferire il backup di un’istanza tra datacenter](https://docs.ovh.com/it/public-cloud/trasferisci_il_backup_di_unistanza_da_un_datacenter_a_un_altro/){.external}.

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com>.
