---
title: Object Storage Swift - Optimizar los envíos hacia el Object Storage
slug: pcs/optimised-method-for-uploading-files-to-object-storage
section: OpenStack Swift Storage Class Specifics
legacy_guide_number: g1951
order: 130
---

**Última actualización: 27/10/2021**

## Objetivo

Para enviar archivos muy pesados al Object Storage (como vídeos o imágenes de disco, por ejemplo), es posible utilizar el cliente OpenStack Swift, que optimiza las transferencias segmentando los archivos.

Esta guía explica cómo mejorar la velocidad de los envíos hacia el Object Storage utilizando esta funcionalidad.


## Requisitos

- [Preparar el entorno para utilizar la API de OpenStack](https://docs.ovh.com/us/es/public-cloud/preparar_el_entorno_para_utilizar_la_api_de_openstack/) con el cliente python-swiftclient
- [Cargar las variables de entorno necesarias para OpenStack](https://docs.ovh.com/us/es/public-cloud/cargar-las-variables-de-entorno-openstack/)


## Procedimiento

OpenStack Swift permite almacenar archivos sin límite de tamaño dividiéndolos en varios segmentos.

Cuando se utiliza un cliente Swift para enviar un archivo, el proxy Swift determina el nodo de almacenamiento utilizando un hash del nombre del objeto. Por lo tanto, hay una alta probabilidad de que los segmentos sean almacenados en distintos nodos de almacenamiento, lo que permitirá escribir los datos a mayor velocidad.

De este modo, podemos enviar un archivo de 10 GB en 100 segmentos de 100 MB como se indica a continuación:


```bash
root@server:~$ swift upload --segment-size 104857600 --segment-threads 100
container_name 10Gio.dat
```

--segment-size: Tamaño de los segmentos (en bytes)
--segment-threads: Número de segmentos
Es posible medir la velocidad de envío utilizando programas como iftop.

## Más información
  
Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
