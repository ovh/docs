---
title: Transferir o backup de um volume de um datacenter para outro
excerpt: Transferir o backup de um volume de um datacenter para outro
slug: transferir_o_backup_de_um_volume_de_um_datacenter_para_outro
legacy_guide_number: g1941
---


## 
Poderá necessitar de migrar os seus volumes adicionais de um datacenter para outro, seja porque prefere movê-lo para um novo datacenter, seja porque pretende migrar do RunAbove para Public CLoud.

Este guia explica como transferir os backups de um volume de um datacenter para o outro para evitar uma reinstalação.


## Pré-requisitos

- [Preparar o ambiente para utilizar a API OpenStack]({legacy}1851) ao adicionar o cliente python-cinderclient
- [Carregar as variáveis de ambiente OpenStack]({legacy}1852)




## 
Este guia pode ser igualmente utilizado para transferir um backup de uma conta RunAbove para o Public Cloud.


## Criação de um backup

- Listar os volumes existantes:


```
root@serveur:~$ cinder list
+--------------------------------------+--------+--------------+------+-------------+----------+--------------------------------------+
| ID | Status | Display Name | Size | Volume Type | Bootable | Attached to |
+--------------------------------------+--------+--------------+------+-------------+----------+--------------------------------------+
| 673b0ad9-1fca-485c-ae2b-8ee271b71dc7 | in-use | volume | 10 | classic | false | a8b6b5f1-4413-4d1a-8113-9597d804b07e |
+--------------------------------------+--------+--------------+------+-------------+----------+--------------------------------------+
```


- Remover o volume da sua instância:


```
root@serveur:~$ nova volume-detach a8b6b5f1-4413-4d1a-8113-9597d804b07e 673b0ad9-1fca-485c-ae2b-8ee271b71dc7
```


- Criar o backup sob a forma de imagem:


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





## Efetuar download do backup

- Listar as imagens disponíveis:


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


- Identificar o backup:


```
| 8625f87e-8248-4e62-a0ce-a89c7bd1a9be | snap_volume | qcow2 | bare | 319356928 | active |
```


- Efetuar download do backup


```
root@serveur:~$ glance image-download --file snap_volume.qcow 8625f87e-8248-4e62-a0ce-a89c7bd1a9be
```





## Envio do backup

- Alterar as novas variáveis de ambiente:


No quando de uma transferência de datacenter no seio do mesmo projeto basta alterar a variável OS_REGION_NAME :


```
root@serveur:~$ export OS_REGION_NAME=SBG1
```


Para o transferir para outro projeto ou conta é necessário recarregar as variáveis de ambiente associadas a essa conta:


```
root@serveur:~$ source openrc.sh
```



- Envio do backup para o novo datacenter:


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





## Criação de um volume

- Criar o vulme ao precisar o ID do backup como imagem:


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
[Voltar ao índice dos guias Cloud]({legacy}1785)

