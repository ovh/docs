---
title: Rozpoczęcie pracy z API Cinder
excerpt: Rozpoczęcie pracy z API Cinder
slug: rozpoczecie_pracy_z_api_cinder
legacy_guide_number: g2071
section: Zarządzanie w OpenStack CLI
---


## 
Jeśli chcesz zautomatyzować operacje wykonywane w ramach usługi Public Cloud, możesz skorzystać z API OpenStack do generowania skryptów. Oprogramowanie Cinder OpenStack pozwoli Ci na wykonywanie operacji na dodatkowych woluminach. 

Będziesz mógł na przykład utworzyć nowy wolumin o wysokiej wydajności i podłączyć go do instancji Public Cloud (niezbędny jest do tego klient Nova).

Przewodnik ten pozwala na zapoznanie się z API OpenStack, dzięki któremu można zarządzać woluminami za pomocą klienta Python Cinder.


## Wymagania

- [Przygotowanie środowiska dla API OpenStack]({legacy}1851) poprzez zainstalowanie python-cinderclient i python-novaclient
- [Pobranie zmiennych środowiskowych OpenStack]({legacy}1852)




## Dokumentacja Cinder
W dokumentacji oprogramowania dostępna jest lista możliwych poleceń:


```
admin@serveur-1:~$ cinder help
```


Lista najważniejszych poleceń:

|create|Tworzenie nowego woluminu|
|---|
|create|Tworzenie nowego woluminu|
|delete|Usuwanie woluminu|
|list|Lista woluminów|
|snapshot-create|Tworzenie zrzutu woluminu|

Informacje na temat danego polecenia można uzyskać dodając "help" przed poleceniem:


```
admin@serveur-1:~$ cinder help snapshot-create
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


Dokumentacja dotycząca programu Cinder znajduje się na [stronie OpenStack](http://docs.openstack.org/cli-reference/content/cinderclient_commands.html).


## Tworzenie woluminu o wysokiej wydajności

- Pobieranie listy typów woluminów:


```
admin@serveur-1:~$ cinder type-list

+--------------------------------------+------------+
| ID | Name |
+--------------------------------------+------------+
| 07673884-d6f0-49b0-8bfb-1cec1b6f3905 | high-speed |
| 28b78be3-5e7b-480a-b20d-3c0d3e144c70 | classic |
+--------------------------------------+------------+
```


- Tworzenie woluminu typu high-speed o rozmiarze 10GB i nazwie volume1:


```
admin@serveur-1:~$ cinder create --volume-type high-speed --display_name volume1 10

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




## Ważne
Można zainstalować obraz na woluminie za pomocą argumentu --image-id:


```
admin@serveur-1:~$ cinder create --volume-type high-speed --image-id bdcb5042-3548-40d0-b06f-79551d3b4377 --display_name volume_debian 20
```


Gdzie bdcb5042-3548-40d0-b06f-79551d3b4377 to ID obrazu Debian 8.


## Podłączanie woluminu do instancji

- Pobieranie listy dodatkowych woluminów:


```
admin@serveur-1:~$ cinder list

+--------------------------------------+-----------+---------------+------+-------------+----------+---------------------+
| ID | Status | Display Name | Size | Volume Type | Bootable | Attached to |
+--------------------------------------+-----------+---------------+------+-------------+----------+---------------------+
| 1dd5fa60-6346-465a-ac8f-eb848da97f7f | available | volume1 | 10 | high-speed | false | |
| fe78323f-9e6c-4a8c-9e51-06a112a467c2 | available | volume_debian | 20 | high-speed | true | |
+--------------------------------------+-----------+---------------+------+-------------+----------+---------------------+
```




## Ważne
Większość kolejnych poleceń będzie wymagała podania IP woluminu a nie jego nazwy.

- Montowanie woluminu na instancji za pomocą programu Nova:


```
admin@serveur-1:~$ nova volume-attach 84f5dde4-cf64-40f5-8499-75d6849fc5d6 1dd5fa60-6346-465a-ac8f-eb848da97f7f auto
+----------+--------------------------------------+
| Property | Value |
+----------+--------------------------------------+
| device | /dev/vdb |
| id | 1dd5fa60-6346-465a-ac8f-eb848da97f7f |
| serverId | 84f5dde4-cf64-40f5-8499-75d6849fc5d6 |
| volumeId | 1dd5fa60-6346-465a-ac8f-eb848da97f7f |
+----------+--------------------------------------+
```



Czyli nova volume-attach <instance_id> <volume_id> auto.


## Usuwanie woluminu

- Odłączanie woluminu od instancji


```
admin@serveur-1:~$ nova volume-detach 84f5dde4-cf64-40f5-8499-75d6849fc5d6 1dd5fa60-6346-465a-ac8f-eb848da97f7f
```


- Usuwanie woluminu


```
admin@serveur-1:~$ cinder delete 1dd5fa60-6346-465a-ac8f-eb848da97f7f
```





## 

- [Rozpoczęcie pracy z API Nova]({legacy}1935)
- [Uruchomienie instancji z podłączonego woluminu]({legacy}2064)




## 
[Przewodniki Cloud]({legacy}1785)

