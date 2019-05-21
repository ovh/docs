---
title: Trasferisci il backup di un disco aggiutivo da un datacenter a un altro
excerpt: Trasferisci il backup di un disco aggiutivo da un datacenter a un altro
slug: trasferisci_il_backup_di_un_disco_aggiutivo_da_un_datacenter_a_un_altro
legacy_guide_number: g1941
---


## 
In alcuni casi, potresti avere bisogno di trasferire i tuoi dischi aggiuntivi da un datacenter a un altro, ad esempio per spostare i tuoi dati in un nuovo datacenter disponibile o una delle tue attività da RunAbove al Public Cloud.

Questa guida ti mostra come trasferire il backup di un disco aggiutivo da un datacenter a un altro.


## Requisiti necessari

- [Prepara il tuo ambiente di sviluppo per utilizzare l'API OpenStack]({legacy}1851) aggiungendo python-cinderclient
- [Imposta le variabili d'ambiente OpenStack]({legacy}1852)




## 
Puoi consultare questa guida anceìbe per effettuare un trasferimento di un disco aggiuntivo RubAbove verso il Public Cloud OVH.


## Crea un backup

- Visualizza l'elenco dei dischi esistenti:


```
root@serveur:~$ cinder list
+--------------------------------------+--------+--------------+------+-------------+----------+--------------------------------------+
| ID | Status | Display Name | Size | Volume Type | Bootable | Attached to |
+--------------------------------------+--------+--------------+------+-------------+----------+--------------------------------------+
| 673b0ad9-1fca-485c-ae2b-8ee271b71dc7 | in-use | volume | 10 | classic | false | a8b6b5f1-4413-4d1a-8113-9597d804b07e |
+--------------------------------------+--------+--------------+------+-------------+----------+--------------------------------------+
```


- Disconnetti il disco dalla sua istanza:


```
root@serveur:~$ nova volume-detach a8b6b5f1-4413-4d1a-8113-9597d804b07e 673b0ad9-1fca-485c-ae2b-8ee271b71dc7
```


- Crea il backup come immagine:


```
root@serveur:~$ cinder upload-to-image --disk-format qcow2 --container-format bare 673b0ad9-1fca-485c-ae2b-8ee271b71dc7 snap_volume

+---------------------+------------------------------------------------------+
| Property | Value |
+---------------------+------------------------------------------------------+
| container_format | bare |
| disk_format | qcow2 |
| display_description | |
| id | 673b0ad9-1fca-485c-ae2b-8ee271b71dc7 |
| image_id | 8625f87e-8248-4e62-a0ce-a89c7bd1a9be |
| image_name | snap_volume |
| size | 10 |
| status | uploading |
| updated_at | 2015-10-21T08:33:34.000000 |
| volume_type | [..........] |
+---------------------+------------------------------------------------------+
```





## Gestisci i tuoi backup

- Visualizza l'elenco delle immagini disponibili:


```
root@serveur:~$ glance image-list

+--------------------------------------+------------------------+-------------+------------------+-------------+--------+
| ID | Name | Disk Format | Container Format | Size | Status |
+--------------------------------------+------------------------+-------------+------------------+-------------+--------+
| c17f13b5-587f-4304-b550-eb939737289a | Centos 7 | raw | bare | 2149580800 | active |
| 73958794-ecf6-4e68-ab7f-1506eadac05b | Debian 7 | raw | bare | 2149580800 | active |
| bdcb5042-3548-40d0-b06f-79551d3b4377 | Debian 8 | raw | bare | 2149580800 | active |
| 7250cc02-ccc1-4a46-8361-a3d6d9113177 | Fedora 19 | raw | bare | 2149580800 | active |
| 57b9722a-e6e8-4a55-8146-3e36a477eb78 | Fedora 20 | raw | bare | 2149580800 | active |
| 8625f87e-8248-4e62-a0ce-a89c7bd1a9be | snap_volume | qcow2 | bare | 319356928 | active |
| 3bda2a66-5c24-4b1d-b850-83333b580674 | Ubuntu 12.04 | raw | bare | 2149580800 | active |
| 9bfac38c-688f-4b63-bf3b-69155463c0e7 | Ubuntu 14.04 | raw | bare | 10737418240 | active |
| 6a123897-a5bb-46cd-8f5d-ecf9ab9877f2 | Windows-Server-2012-r2 | raw | bare | 21474836480 | active |
+--------------------------------------+------------------------+-------------+------------------+-------------+--------+
```


- Seleziona il backup:


```
| 8625f87e-8248-4e62-a0ce-a89c7bd1a9be | snap_volume | qcow2 | bare | 319356928 | active |
```


- Scarica il backup:


```
root@serveur:~$ glance image-download --file snap_volume.qcow 8625f87e-8248-4e62-a0ce-a89c7bd1a9be
```





## Avvia il trasferimento del backup

- Imposta le nuove variabili d'ambiente:


Se effettui il trasferimento di datacenter per uno stesso progetto, è sufficiente modificare la variabile OS_REGION_NAME:


```
root@serveur:~$ export OS_REGION_NAME=SBG1
```


Se invece effettui il trasferimento verso un altro progetto o un altro account, sarà necessario reimpostare le variabili d'ambiente associate al nuovo account:


```
root@serveur:~$ source openrc.sh
```



- Avvia il trasferimento del backup al nuovo datacenter:


```
root@serveur:~$ glance image-create --name snap-volume --disk-format qcow2 --container-format bare --file snap_volume.qcow

+------------------+--------------------------------------+
| Property | Value |
+------------------+--------------------------------------+
| checksum | 6cebb4104eadde099bb2721ec8c574fb |
| container_format | bare |
| created_at | 2015-10-21T08:54:22 |
| deleted | False |
| deleted_at | None |
| disk_format | qcow2 |
| id | aa2a39c6-433c-4e94-995a-a12c4398d457 |
| is_public | False |
| min_disk | 0 |
| min_ram | 0 |
| name | snap_volume |
| owner | b3e26xxxxxxxxxxxxxxxxxxx12b0ba29 |
| protected | False |
| size | 319356928 |
| status | active |
| updated_at | 2015-10-21T08:54:32 |
| virtual_size | None |
+------------------+--------------------------------------+
```





## Crea un disco aggiuntivo

- Utilizza l'identificativo dell'immagine del backup per creare il tuo disco aggiuntivo:


```
root@serveur:~$ cinder create --display-name volume_from_snap --volume-type 71435bfd-f013-4ea3-b405-fb76321d79d5 --image-id aa2a39c6-433c-4e94-995a-a12c4398d457 10

+---------------------+--------------------------------------+
| Property | Value |
+---------------------+--------------------------------------+
| attachments | [] |
| availability_zone | nova |
| bootable | false |
| created_at | 2015-10-21T08:55:20.871146 |
| display_description | None |
| display_name | volume_from_snap |
| encrypted | False |
| id | cc17d202-fcea-4a99-968c-c1191a69c678 |
| image_id | aa2a39c6-433c-4e94-995a-a12c4398d457 |
| metadata | {} |
| multiattach | false |
| size | 10 |
| snapshot_id | None |
| source_volid | None |
| status | creating |
| volume_type | classic |
+---------------------+--------------------------------------+
```





## 
[Ritorna all'indice delle guide Cloud]({legacy}1785)

