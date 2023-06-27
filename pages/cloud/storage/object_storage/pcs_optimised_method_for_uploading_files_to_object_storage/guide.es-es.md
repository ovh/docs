---
title: Object Storage Swift - Optimizar los envíos hacia el Object Storage
legacy_guide_number: g1951
updated: 2021-10-27
---

**Última actualización: 27/10/2021**

## Objetivo

Para enviar archivos muy pesados al Object Storage (como vídeos o imágenes de disco, por ejemplo), es posible utilizar el cliente OpenStack Swift, que optimiza las transferencias segmentando los archivos.

Esta guía explica cómo mejorar la velocidad de los envíos hacia el Object Storage utilizando esta funcionalidad.


## Requisitos

- [Preparar el entorno para utilizar la API de OpenStack](/pages/platform/public-cloud/prepare_the_environment_for_using_the_openstack_api) con el cliente python-swiftclient
- [Cargar las variables de entorno necesarias para OpenStack](/pages/platform/public-cloud/loading_openstack_environment_variables)


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
  
Si necesita formación o asistencia técnica para implantar nuestras soluciones, póngase en contacto con su representante de ventas o haga clic en [este enlace](https://www.ovhcloud.com/es-es/professional-services/) para obtener un presupuesto y solicitar un análisis personalizado de su proyecto a nuestros expertos del equipo de Servicios Profesionales.

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
