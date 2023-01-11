---
title: Iniziare con la gestione dei volumi con l'API OpenStack
slug: iniziare-con-volumi-api-openstack
legacy_guide_number: 2071
section: Gestione via OpenStack
order: 6
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 19/05/2021**

## Obiettivo

Per automatizzare le operazioni sul Public Cloud è possibile utilizzare le API OpenStack per generare diversi script.
<br>Ad esempio, è possibile creare un nuovo volume di tipo "high performance" per associarlo a un'istanza Public Cloud.

**Questa guida ti mostra come utilizzare le API OpenStack per gestire i tuoi volumi utilizzando il client Python OpenStack.**

## Prerequisiti

- [Preparare l'ambiente per utilizzare l'API OpenStack](../prepare_the_environment_for_using_the_openstack_api/) installando python-cinderclient e python-novaclient
- [Impostare le variabili d'ambiente OpenStack](../set-openstack-environment-variables/)

## Procedura

### Documentazione Cinder

Per ottenere la lista dei possibili ordini, consulta la documentazione del client OpenStack:

```bash
admin@server-1:~$ openstack help
```

Ecco la lista dei comandi principali:

|Comando|Descrizione|
|---|---|
|volume create|Crea un nuovo volume|
|volume delete|Elimina un volume|
|volume list|Lista i volumi|
|create volume snapshot|Crea uno snaspshot di un volume|

Per ottenere informazioni su un comando specifico, aggiungi `help` davanti a questo comando:

```bash
admin@server-1:~$ openstack help volume snapshot create
usage: openstack volume snapshot create [-h] [-f {json,shell,table,value,yaml}] [-c COLUMN] [--noindent] [--prefix PREFIX] [--max-width <integer>] [--fit-width] [--print-empty] [--volume <volume>] [--description <description>] [--force] [--property <key=value>]
                                        [--remote-source <key=value>]
                                        <snapshot-name>

Create new volume snapshot

positional arguments:
  <snapshot-name>       Name of the new snapshot

optional arguments:
  -h, --help            show this help message and exit
  --volume <volume>     Volume to snapshot (name or ID) (default is <snapshot-name>)
  --description <description>
                        Description of the snapshot
  --force               Create a snapshot attached to an instance. Default is False
```

> [!primary]
>
> Puoi consultare anche la documentazione del client Openstack direttamente [sul sito OpenStack](https://docs.openstack.org/python-openstackclient/latest/){.external}.
>

### Operazioni basiche

#### Crea un volume high performance

- Lista i tipi di volumi:

```bash
admin@server-1:~$ openstack volume type list
+--------------------------------------+------------+-----------+
| ID                                   | Name       | Is Public |
+--------------------------------------+------------+-----------+
| e9551830-6362-4bf8-92e5-391829456b03 | classic    | True      |
| 6fc8e512-3cac-4f39-b9a8-af098d710506 | high-speed | True      |
+--------------------------------------+------------+-----------+
```

- Creare il volume di tipo high speed da 10GB chiamato volume1:

``` bash
admin@serveur-1:~$ openstack volume create --type high-speed --size 10 volume1

+---------------------+--------------------------------------+
| Field               | Value                                |
+---------------------+--------------------------------------+
| attachments         | []                                   |
| availability_zone   | nova                                 |
| bootable            | false                                |
| consistencygroup_id | None                                 |
| created_at          | 2021-05-18T14:16:28.658308           |
| description         | None                                 |
| encrypted           | False                                |
| id                  | f75d60b3-4179-4ca9-8bc7-8e5f7a1682f8 |
| multiattach         | False                                |
| name                | volume1                              |
| properties          |                                      |
| replication_status  | disabled                             |
| size                | 10                                   |
| snapshot_id         | None                                 |
| source_volid        | None                                 |
| status              | creating                             |
| type                | high-speed                           |
| updated_at          | None                                 |
| user_id             | ...                                  |
+---------------------+--------------------------------------+
```

Puoi installare un'immagine su un volume utilizzando l'argomento `--image`:

```bash
admin@server-1:~$ openstack volume create --type high-speed --image be66762f-b849-43e1-b57c-005d9fe28088 --size 20 volume_debian
+---------------------+--------------------------------------+
| Field               | Value                                |
+---------------------+--------------------------------------+
| attachments         | []                                   |
| availability_zone   | nova                                 |
| bootable            | false                                |
| consistencygroup_id | None                                 |
| created_at          | 2021-05-18T14:26:38.887508           |
| description         | None                                 |
| encrypted           | False                                |
| id                  | 442d9dff-7df5-41b2-95e9-fa8ac5f4784a |
| multiattach         | False                                |
| name                | volume_debian                        |
| properties          |                                      |
| replication_status  | disabled                             |
| size                | 20                                   |
| snapshot_id         | None                                 |
| source_volid        | None                                 |
| status              | creating                             |
| type                | high-speed                           |
| updated_at          | None                                 |
| user_id             | ...                                  |
+---------------------+--------------------------------------+
```

Dove **be66762f-b849-43e1-b57c-005d9fe28088** corrisponde all'ID dell'immagine Debian 10.

#### Associa un volume a un'istanza

- Lista i volumi aggiuntivi:

```bash
admin@server-1:~$ openstack volume list
+--------------------------------------+---------------+-----------+------+-------------+
| ID                                   | Name          | Status    | Size | Attached to |
+--------------------------------------+---------------+-----------+------+-------------+
| 442d9dff-7df5-41b2-95e9-fa8ac5f4784a | volume_debian | available |   20 |             |
| f75d60b3-4179-4ca9-8bc7-8e5f7a1682f8 | volume1       | available |   10 |             |
+--------------------------------------+---------------+-----------+------+-------------+
```

> [!primary]
>
> Per eseguire la maggior parte dei comandi è necessario inserire l'ID del volume invece del nome.
>

- Montare il volume su un'istanza con il client Openstack:

```bash
admin@server-1:~$ openstack server add volume 46aec29f-fe50-4562-b3f9-2e6665a7270d f75d60b3-4179-4ca9-8bc7-8e5f7a1682f8
```

- Verifica che il volume sia associato correttamente all'istanza con il client OpenStack:

```bash
admin@server-1:~$ openstack volume list
+--------------------------------------+---------------+-----------+------+-----------------------------------------+
| ID                                   | Name          | Status    | Size | Attached to                             |
+--------------------------------------+---------------+-----------+------+-----------------------------------------+
| 442d9dff-7df5-41b2-95e9-fa8ac5f4784a | volume_debian | available |   20 |                                         |
| f75d60b3-4179-4ca9-8bc7-8e5f7a1682f8 | volume1       | in-use    |   10 | Attached to cli-playground on /dev/sdb  |
+--------------------------------------+---------------+-----------+------+-----------------------------------------+
```

#### Elimina un volume

- Scollega il volume dall'istanza:

```bash
admin@server-1:~$ openstack server remove volume 46aec29f-fe50-4562-b3f9-2e6665a7270d f75d60b3-4179-4ca9-8bc7-8e5f7a1682f8
```

- Elimina il volume:

```bash
admin@server-1:~$ opesntack volume delete f75d60b3-4179-4ca9-8bc7-8e5f7a1682f8
```

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
