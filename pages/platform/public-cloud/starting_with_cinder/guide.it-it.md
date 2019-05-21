---
title: Come utilizzare l’API Cinder
excerpt: Come utilizzare l'API Cinder
slug: come_utilizzare_lapi_cinder
legacy_guide_number: g2071
---


## 
Se vuoi automatizzare le tue operazioni sul Public Cloud, puoi utilizzare le API di OpenStack per creare diversi script.
Il client Cinder di OpenStack ti consente di eseguire operazioni sui tuoi volumi aggiuntivi.

Ad esempio, puoi creare un nuovo volume di tipo "high performance" e collegarlo a un'istanza Public Cloud (è necessario utilizzare client Nova).

Questa guida ti mostra come utilizzare le API OpenStack per gestire i tuoi volumi con il Python Cinder.


## Requisiti necessari

- [Prepara il tuo ambiente di sviluppo per utilizzare l'API OpenStack]({legacy}1851) installando python-cinderclient e python-novaclient
- [Imposta le variabili d'ambiente OpenStack]({legacy}1852)




## Documentazione Cinder
Per visualizzare la lista dei comandi disponibili, consulta la documentazione del client:


```
admin@server-1:~$ cinder help
```


Ecco i comandi principali:

|create|Crea un nuovo volume|
|---|
|create|Crea un nuovo volume|
|delete|Elimina un volume|
|list|Mostra la lista dei volumi|
|snapshot-create|Crea lo Snapshot di un volume|

Per visualizzare le informazioni relative a un comando specifico, aggiungi "help" all'inizio:


```
admin@server-1:~$ cinder help snapshot-create
usage: cinder snapshot-create [--force <True|False>]
[--display-name <display-name>]
[--display-description <display-description>]
<volume>

Add a new snapshot.

Positional arguments:
<volume> Name or ID of the volume to snapshot

Optional arguments:
--force <True|False> Optional flag to indicate whether to snapshot a volume
even if it's attached to an instance. (Default=False)
--display-name <display-name>
Optional snapshot name. (Default=None)
--display-description <display-description>
Optional snapshot description. (Default=None)
```


La documentazione del client Cinder è disponibile anche sul [sito OpenStack](http://docs.openstack.org/cli-reference/content/cinderclient_commands.html)


## Crea un volume high performance

- Visualizza la lista dei tipi di volumi:


```
admin@server-1:~$ cinder type-list

+--------------------------------------+------------+
| ID | Name |
+--------------------------------------+------------+
| 07673884-d6f0-49b0-8bfb-1cec1b6f3905 | high-speed |
| 28b78be3-5e7b-480a-b20d-3c0d3e144c70 | classic |
+--------------------------------------+------------+
```


- Crea il volume di tipo high-speed da 10 GB e assegnagli il nome volume1:


```
admin@server-1:~$ cinder create --volume-type high-speed --display_name volume1 10

+---------------------+--------------------------------------+
| Property | Value |
+---------------------+--------------------------------------+
| attachments | [] |
| availability_zone | nova |
| bootable | false |
| created_at | 2016-01-13T15:56:44.676098 |
| display_description | None |
| display_name | volume1 |
| encrypted | False |
| id | 1dd5fa60-6346-465a-ac8f-eb848da97f7f |
| metadata | {} |
| multiattach | false |
| size | 10 |
| snapshot_id | None |
| source_volid | None |
| status | creating |
| volume_type | high-speed |
+---------------------+--------------------------------------+
```




## Informazioni
Per installare un'imaagine su un volume, utilizza l'argomento --image-id:


```
admin@server-1:~$ cinder create --volume-type high-speed --image-id bdcb5042-3548-40d0-b06f-79551d3b4377 --display_name volume_debian 20
```


bdcb5042-3548-40d0-b06f-79551d3b4377 corrisponde all'ID dell'immagine Debian 8.


## Associa un volume alla tua istanza

- Visualizza la lista dei volumi aggiuntivi:


```
admin@server-1:~$ cinder list

+--------------------------------------+-----------+---------------+------+-------------+----------+---------------------+
| ID | Status | Display Name | Size | Volume Type | Bootable | Attached to |
+--------------------------------------+-----------+---------------+------+-------------+----------+---------------------+
| 1dd5fa60-6346-465a-ac8f-eb848da97f7f | available | volume1 | 10 | high-speed | false | |
| fe78323f-9e6c-4a8c-9e51-06a112a467c2 | available | volume_debian | 20 | high-speed | true | |
+--------------------------------------+-----------+---------------+------+-------------+----------+---------------------+
```




## Informazioni utili:
Per la maggior parte di questi comandi è necessario inserire l'ID del volume, non il suo nome.

- Associa il volume alla tua istanza utilizzando il client Nova:

nova volume-attach <instance_id> <volume_id> auto


Esempio:


```
admin@server-1:~$ nova volume-attach 84f5dde4-cf64-40f5-8499-75d6849fc5d6 1dd5fa60-6346-465a-ac8f-eb848da97f7f auto
+----------+--------------------------------------+
| Property | Value |
+----------+--------------------------------------+
| device | /dev/vdb |
| id | 1dd5fa60-6346-465a-ac8f-eb848da97f7f |
| serverId | 84f5dde4-cf64-40f5-8499-75d6849fc5d6 |
| volumeId | 1dd5fa60-6346-465a-ac8f-eb848da97f7f |
+----------+--------------------------------------+
```




## Elimina un volume

- Scollega il volume dell'istanza


```
admin@server-1:~$ nova volume-detach 84f5dde4-cf64-40f5-8499-75d6849fc5d6 1dd5fa60-6346-465a-ac8f-eb848da97f7f
```


- Elimina il volume:


```
admin@server-1:~$ cinder delete 1dd5fa60-6346-465a-ac8f-eb848da97f7f
```





## 

- [Come utilizzare l'API Nova]({legacy}1935)
- [Avvia la tua istanza da un volume aggiuntivo]({legacy}2064)




## 
[Ritorna all'indice delle guide Cloud]({legacy}1785)

