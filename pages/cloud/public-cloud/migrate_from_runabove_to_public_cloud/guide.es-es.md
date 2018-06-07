---
title: Migrar de RunAbove a Public Cloud
excerpt: Migrar de RunAbove a Public Cloud
slug: migrar_de_runabove_a_public_cloud
legacy_guide_number: g1942
section: Miscelánea
---


## 
Como podemos ver en su [página](https://www.runabove.com/index.xml), RunAbove es la marca que presenta todas las innovaciones de OVH a través de diferentes Labs.


## 
Debido a la fase de cierre de RunAbove, deberá migrar sus actividades relacionadas con las instancias, los discos adicionales y el Object Storage lo antes posible. Para ello, hemos creado distintas guías que le ayudarán en este proceso.


## Requisitos

- [Preparar el entorno para utilizar la API de OpenStack](https://docs.ovh.com/es/public-cloud/preparar_el_entorno_para_utilizar_la_api_de_openstack/)




## Cargar las variables del entorno OpenStack para RunAbove
En primer lugar, debemos recuperar el archivo RC que contiene la información necesaria para utilizar la API de OpenStack: 


- Conéctese a RunAbove. 

- Haga clic en su nombre en la parte superior derecha y seleccione OpenStack Horizon.



![](images/img_3038.jpg){.thumbnail}

- Seleccione la región a la izquierda. 

- Acceda al menú «Access & Security» y, a continuación, a «API Access».



![](images/img_3039.jpg){.thumbnail}

- Haga clic en «Download OpenStack RC File».

- Cargue las variables del entorno OpenStack para RunAbove gracias al archivo RC:


```
root@serveur:~$ source RunAbove_OpenRC.sh
```





## Migración
Tiene a su disposición distintas guías en las que se explica cómo transferir las copias de seguridad de las instancias y los discos adicionales de un centro de datos a otro. 

Al ser compatibles con RunAbove, pueden ayudarle a la hora de migrar su actividad: 

Migrar las instancias:

- [Transferir la copia de seguridad de una instancia de un centro de datos a otro]({legacy}1853)


Migrar los discos adicionales:

- [Transferir la copia de seguridad de un disco de un centro de datos a otro]({legacy}1941)


Para la migración del Object Storage, es posible descargar y enviar los datos al nuevo proyecto. También se pueden sincronizar dos contenedores entre sí:

- [Sincronizar contenedores de objetos]({legacy}1919)




## Facturación
A diferencia de RunAbove, existen dos tipos de facturación: 


- Facturación por horas: 

Con esta modalidad, similar a la existente en RunAbove, la factura se genera en función de su consumo al mes siguiente. 

Facturación mensual: 
Con esta modalidad puede disfrutar de un descuento del 50%. La factura se genera de forma inmediata, calculando la parte proporcional al tiempo restante del mes en curso.


## Funcionalidades
Actualmente, hay ciertas funcionalidades que aún no están disponibles en Public Cloud: 


- Las redes privadas
- Las IP flotantes


Las redes privadas llegarán dentro de poco y serán compatibles con el vRack. 

Asimismo, algunas funcionalidades que no estaban presentes en RunAbove sí están disponibles en Public Cloud: 


- Las licencias Windows disponibles para las instancias EG y SP
- La importación de la IP Failover
- El uso de la IP Load Balancing




## 
 

