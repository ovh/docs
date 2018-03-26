---
title: Optimizar los envíos hacia el Object Storage
excerpt: Optimizar los envíos hacia el Object Storage
slug: optimizar_los_envios_hacia_el_object_storage
section: Object Storage
legacy_guide_number: g1951
---


## 
Para enviar archivos muy pesados al Object Storage (como vídeos o imágenes de disco, por ejemplo), es posible utilizar el cliente OpenStack Swift, que optimiza las transferencias segmentando los archivos.

Esta guía explica cómo mejorar la velocidad de los envíos hacia el Object Storage utilizando esta funcionalidad.


## Requisitos
Para seguir todos los pasos de esta guía, es necesario:


- [Preparar el entorno para utilizar la API de OpenStack](https://docs.ovh.com/es/public-cloud/preparar_el_entorno_para_utilizar_la_api_de_openstack/) con el cliente python-swiftclient
- Cargar las variables de entorno de OpenStack




## 
OpenStack Swift permite almacenar archivos sin límite de tamaño dividiéndolos en varios segmentos.

Cuando se utiliza un cliente Swift para enviar un archivo, el proxy Swift determina el nodo de almacenamiento utilizando un hash del nombre del objeto. Por lo tanto, hay una alta probabilidad de que los segmentos sean almacenados en distintos nodos de almacenamiento, lo que permitirá escribir los datos a mayor velocidad.

De este modo, podemos enviar un archivo de 10 GB en 100 segmentos de 100 MB como se indica a continuación:


```
root@server:~$ swift upload --segment-size 104857600 --segment-threads 100
container_name 10Gio.dat
```


--segment-size: Tamaño de los segmentos (en bytes)
--segment-threads: Número de segmentos
Es posible medir la velocidad de envío utilizando programas como iftop.


## 
 

