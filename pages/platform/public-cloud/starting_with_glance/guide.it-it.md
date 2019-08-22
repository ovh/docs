---
title: Come utilizzare l’API Glance
excerpt: Come utilizzare l'API Glance
slug: come_utilizzare_lapi_glance
legacy_guide_number: g2072
---


## 
Se vuoi automatizzare le tue operazioni sul Public Cloud, puoi utilizzare le API di OpenStack per creare diversi script.
Il client Glance di OpenStack ti consente di gestire ed eseguire operazioni sulle tue immagini e i tuoi backup.

Ad esempio, puoi caricare l'immagine di una delle tue macchine virtuali o di un OS cloud-ready verso il tuo progetto, per utilizzarla per creare un'istanza.
Puoi anche scaricare uno dei backup delle tue istanze.

Questa guida ti mostra come utilizzare le API OpenStack per gestire le tue immagini con il client Python Glance.


## Requisiti necessari

- [url=GUIDE#1851]Prepara il tuo ambiente di sviluppo per utilizzare l'API OpenStack
- [Imposta le variabili d'ambiente OpenStack]({legacy}1852)
- un'immagine o un backup (in questa guida, un'immagine Cloud Gentoo)




## Documentazione Glance
Per visualizzare la lista dei comandi disponibili, consulta la documentazione del client:


```
admin@server-1:~$ glance help
```


Ecco i comandi principali:

|image-create|Crea un'immagine|
|---|
|image-create|Crea un'immagine|
|image-delete|Elimina  un'immagine|
|image-download|Scarica un'immagine|
|image-list|Visualizza la lista delle immagini|


Per visualizzare le informazioni relative a un comando specifico, aggiungi "help" all'inizio:


```
admin@server-1:~$ glance help image-download
usage: glance image-download [--file <FILE>] [--progress] <IMAGE>

Download a specific image.

Positional arguments:
<IMAGE> Name or ID of image to download.

Optional arguments:
--file <FILE> Local file to save downloaded image data to. If this is not
specified the image data will be written to stdout.
--progress Show download progress bar.
```


La documentazione del client Glance è disponibile anche sul [sito Openstack](http://docs.openstack.org/cli-reference/content/glanceclient_commands.html)


## Crea un'immagine

- Invia la tua immagine al tuo progetto:


```
admin@server-1:~$ glance image-create --name Gentoo --disk-format qcow2 --container-format bare --file gentoo.qcow2
```


- Visualizza la lista delle immagini disponibili:


```
admin@server-1:~$ glance image-list

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




## Informazioni utili:
Dopo aver effettuato questa operazione, è possibile utilizzare l'immagine "Gentoo" durante la creazione di un'istanza.


## Scarica un'immagine

- Scarica un backup:


```
admin@server-1:~$ glance image-download 8161a7b5-571b-433d-ad6b-6d7f145341d8 --file snapshot.qcow2
```





## Elimina un'immagine

- Elimina il tuo backup:


```
admin@server-1:~$ glance image-delete 8161a7b5-571b-433d-ad6b-6d7f145341d8
```





## 

- [Come utilizzare l'API Nova]({legacy}1935)
- [Crea, carica ed elimina immagini con Horizon]({legacy}1784)
- [Trasferisci il backup di un'istanza da un datacenter a un altro]({legacy}1853)




## 
[Ritorna all'indice delle guide Cloud]({legacy}1785)

