---
title: Rozpoczęcie pracy z API Glance
excerpt: Rozpoczęcie pracy z API Glance
slug: rozpoczecie_pracy_z_api_glance
legacy_guide_number: g2072
section: Zarządzanie w OpenStack CLI
---


## 
Jeśli chcesz zautomatyzować operacje wykonywane w ramach usługi Public Cloud, możesz skorzystać z API OpenStack do generowania skryptów. Oprogramowanie Glance OpenStack pozwoli Ci na zarządzanie obrazami i kopiami zapasowymi. 

Będziesz mógł na przykład przesłać obraz jednej ze swoich wirtualnych maszyn, lub obraz systemu operacyjnego cloud-ready na projekt, aby utworzyć nową instancję z tym obrazem. 
Będziesz mógł również pobrać jedną z kopii zapasowych instancji.

Przewodnik ten pozwala na zapoznanie się z API OpenStack, dzięki któremu można zarządzać obrazami za pomocą klienta Python Glance.


## Wymagania

- [Przygotowanie środowiska dla API OpenStack]({legacy}1851) poprzez zainstalowanie python-glanceclient
- [Pobranie zmiennych środowiskowych OpenStack]({legacy}1852)
- Obraz lub kopia zapasowa (w naszym przykładzie będzie to obraz cloud Gentoo)




## Dokumentacja Glance
W dokumentacji oprogramowania dostępna jest lista możliwych poleceń:


```
admin@serveur-1:~$ glance help
```


Lista najważniejszych poleceń:

|image-create|Tworzenie obrazu|
|---|
|image-create|Tworzenie obrazu|
|image-delete|Usuwanie obrazu|
|image-download|Pobieranie obrazu|
|image-list|Pobieranie listy obrazów|


Informacje na temat danego polecenia można uzyskać dodając "help" przed poleceniem:



```
admin@serveur-1:~$ glance help image-download
usage: glance image-download [--file <FILE>] [--progress] <IMAGE>

Download a specific image.

Positional arguments:
<IMAGE> Name or ID of image to download.

Optional arguments:
--file <FILE> Local file to save downloaded image data to. If this is not
specified the image data will be written to stdout.
--progress Show download progress bar.
```


Dokumentacja dotycząca programu Glance znajduje się na [stronie Openstack](http://docs.openstack.org/cli-reference/content/glanceclient_commands.html).


## Tworzenie obrazu

- Wysyłanie obrazu na projekt:


```
admin@serveur-1:~$ glance image-create --name Gentoo --disk-format qcow2 --container-format bare --file gentoo.qcow2
```


- Lista dostępnych obrazów:


```
admin@serveur-1:~$ glance image-list

+--------------------------------------+------------------------------------+-------------+------------------+--------------+--------+
| ID | Name | Disk Format | Container Format | Size | Status |
+--------------------------------------+------------------------------------+-------------+------------------+--------------+--------+
| c17f13b5-587f-4304-b550-eb939737289a | Centos 7 | raw | bare | 2149580800 | active |
| 73958794-ecf6-4e68-ab7f-1506eadac05b | Debian 7 | raw | bare | 2149580800 | active |
| bdcb5042-3548-40d0-b06f-79551d3b4377 | Debian 8 | raw | bare | 2149580800 | active |
| 7250cc02-ccc1-4a46-8361-a3d6d9113177 | Fedora 19 | raw | bare | 2149580800 | active |
| 57b9722a-e6e8-4a55-8146-3e36a477eb78 | Fedora 20 | raw | bare | 2149580800 | active |
| d3d71235-1548-4c84-af47-9d39054be9d0 | Gentoo | qcow2 | bare | 1811218432 | active |
| 8161a7b5-571b-433d-ad6b-6d7f145341d8 | Snapshot 07/01/2016 | qcow2 | bare | 1054605312 | active |
| 3bda2a66-5c24-4b1d-b850-83333b580674 | Ubuntu 12.04 | raw | bare | 2149580800 | active |
| 9bfac38c-688f-4b63-bf3b-69155463c0e7 | Ubuntu 14.04 | raw | bare | 10737418240 | active |
| 0c58e90e-168e-498a-a819-26792e4c469e | Ubuntu 15.10 | qcow2 | bare | 309854720 | active |
| 7d983a54-d06b-488f-986c-ba0eaa98ea51 | ubuntu-14.04-rescue | raw | bare | 1073741824 | active |
| bb37762b-5a82-4c2b-b72b-91ea10169941 | Windows-Server-2012-r2 | raw | bare | 107374182400 | active |
+--------------------------------------+------------------------------------+-------------+------------------+--------------+--------+
```




## Ważne
Po wykonaniu tej operacji będzie można używać naszego obrazu "Gentoo" podczas tworzenia instancji.


## Pobieranie obrazu

- Pobieranie kopii zapasowej:


```
admin@serveur-1:~$ glance image-download 8161a7b5-571b-433d-ad6b-6d7f145341d8 --file snapshot.qcow2
```





## Usuwanie obrazu

- Usuwanie kopii zapasowej:


```
admin@serveur-1:~$ glance image-delete 8161a7b5-571b-433d-ad6b-6d7f145341d8
```





## 

- [Rozpoczęcie pracy z API Nova]({legacy}1935)
- [Tworzenie, uruchamianie i usuwanie obrazów w interfejsie Horizon]({legacy}1784)
- [Przenoszenie kopii zapasowych między centrami danych]({legacy}1853)




## 
[Przewodniki Cloud]({legacy}1785)

