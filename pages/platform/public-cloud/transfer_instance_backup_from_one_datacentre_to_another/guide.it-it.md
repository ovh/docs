---
title: Trasferisci il backup di un’istanza da un datacenter a un altro
excerpt: Trasferisci il backup di un'istanza da un datacenter a un altro
slug: trasferisci_il_backup_di_unistanza_da_un_datacenter_a_un_altro
legacy_guide_number: g1853
---


## 
In alcuni casi, potresti avere bisogno di trasferire le tue istanze da un datacenter a un altro, ad esempio per spostare i tuoi dati in un nuovo datacenter disponibile o una delle tue attività da RunAbove al Public Cloud.

Questa guida ti mostra come trasferire il backup di un'istanza da un datacenter a un altro, per evitarne la reinstallazione.


## Requisiti necessari

- [Prepara il tuo ambiente di sviluppo per utilizzare l'API OpenStack]({legacy}1851)
- [Imposta le variabili d'ambiente OpenStack]({legacy}1852)




## 
Puoi seguire questa guida anche per trasferire il backup di un'istanza RunAbove verso il Public Cloud OVH.


## Crea un backup

- Visualizza l'elenco delle istanze esistenti:


```
root@serveur:~$ nova list

+--------------------------------------+----------------------------------------+--------+------------+-------------+-------------------------+
| ID | Name | Status | Task State | Power State | Networks |
+--------------------------------------+----------------------------------------+--------+------------+-------------+-------------------------+
| aa7115b3-83df-4375-b2ee-19339041dcfa | Serveur1 | ACTIVE | - | Running | Ext-Net=149.xxx.xxx.254 |
+--------------------------------------+----------------------------------------+--------+------------+-------------+-------------------------+
```


- Crea un backup dell'istanza:


```
root@serveur:~$ nova image-create aa7115b3-83df-4375-b2ee-19339041dcfa snap_serveur1
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
| 825b785d-8a34-40f5-bdcd-0a3c3c350c5a | snap_serveur1 | qcow2 | bare | 1598029824 | active |
| 3bda2a66-5c24-4b1d-b850-83333b580674 | Ubuntu 12.04 | raw | bare | 2149580800 | active |
| 9bfac38c-688f-4b63-bf3b-69155463c0e7 | Ubuntu 14.04 | raw | bare | 10737418240 | active |
| 6a123897-a5bb-46cd-8f5d-ecf9ab9877f2 | Windows-Server-2012-r2 | raw | bare | 21474836480 | active |
+--------------------------------------+------------------------+-------------+------------------+-------------+--------+
```


- Seleziona il backup:


```
| 825b785d-8a34-40f5-bdcd-0a3c3c350c5a | snap_serveur1 | qcow2 | bare | 1598029824 | active |
```


- Scarica il backup:


```
root@serveur:~$ glance image-download --file snap_serveur1.qcow 825b785d-8a34-40f5-bdcd-0a3c3c350c5a
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
root@serveur:~$ glance image-create --name snap_serveur1 --disk-format qcow2 --container-format bare --file snap_serveur1.qcow

+------------------+--------------------------------------+
| Property | Value |
+------------------+--------------------------------------+
| checksum | 6cebb4104eadde099bb2721ec8c574fb |
| container_format | bare |
| created_at | 2015-10-21T13:26:42 |
| deleted | False |
| deleted_at | None |
| disk_format | qcow2 |
| id | 0a3f5901-2314-438a-a7af-ae984dcbce5c |
| is_public | False |
| min_disk | 0 |
| min_ram | 0 |
| name | snap_serveur1 |
| owner | b3e269xxxxxxxxxxxxxxxxxxxxxxba29 |
| protected | False |
| size | 319356928 |
| status | active |
| updated_at | 2015-10-21T13:26:51 |
| virtual_size | None |
+------------------+--------------------------------------+
```





## Crea un'istanza

- Utilizza l'identificativo dell'immagine del backup per creare la tua istanza:


```
root@serveur:~$ nova boot --key_name SSHKEY --flavor 98c1e679-5f2c-4069-b4da-4a4f7179b758 --image 0a3f5901-2314-438a-a7af-ae984dcbce5c Serveur1_from_snap
+--------------------------------------+------------------------------------------------------+
| Property | Value |
+--------------------------------------+------------------------------------------------------+
| OS-DCF:diskConfig | MANUAL |
| OS-EXT-AZ:availability_zone | nova |
| OS-EXT-STS:power_state | 0 |
| OS-EXT-STS:task_state | scheduling |
| OS-EXT-STS:vm_state | building |
| OS-SRV-USG:launched_at | - |
| OS-SRV-USG:terminated_at | - |
| accessIPv4 | |
| accessIPv6 | |
| adminPass | 2Rxxvb4wx2iS |
| config_drive | |
| created | 2015-10-21T13:31:41Z |
| flavor | vps-ssd-1 (98c1e679-5f2c-4069-b4da-4a4f7179b758) |
| hostId | |
| id | 68d38ef7-1b25-40bb-a629-4f91f4b24b59 |
| image | snap_serveur1 (0a3f5901-2314-438a-a7af-ae984dcbce5c) |
| key_name | SSHKEY |
| metadata | {} |
| name | Serveur1_from_snap |
| os-extended-volumes:volumes_attached | [] |
| progress | 0 |
| security_groups | default |
| status | BUILD |
| tenant_id | b3e269f057d14af594542d6312b0ba29 |
| updated | 2015-10-21T13:31:41Z |
| user_id | 01e3c1c9c3584311931233798e411ba4 |
+--------------------------------------+------------------------------------------------------+
```





## 
[Ritorna all'indice delle guide Cloud]({legacy}1785)

