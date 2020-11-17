---
title: Uso de las IP RIPE y el vRack 1.5
excerpt: ¿Cómo añadir una MV a la red vRack 1.5 o utilizar una IP del bloque RIPE?
slug: uso_de_las_ip_ripe_y_el_vrack_15
legacy_guide_number: g1441
section: Funcionalidades de OVHcloud
---


## Presentación de la red VM Network
OVH ha creado una red «VM Network» predeterminada con un pool de IP que contiene la configuración asociada a su bloque RIPE. Dicha «VM Network» también le permite utilizar el vRack 1.5.

![](images/img_1984.jpg){.thumbnail}


## Obtener una IP del bloque RIPE dinámicamente (ejemplo con una MV Windows)
Creación de la plantilla correspondiente

Para poder obtener una IP del pool de IP «VM Network», es necesario crear previamente una plantilla para desplegar correctamente la MV. 

En esta guía encontrará más información sobre la creación de plantillas: 

- []({legacy}1436)).


En primer lugar, es conveniente añadir a la plantilla la configuración de red adecuada.

![](images/img_1985.jpg){.thumbnail}
Para responder al Sysprep de la máquina, es necesario pasar por la etapa de personalización de la plantilla.

![](images/img_1986.jpg){.thumbnail}
Creación de la MV

Cuando haya completado las etapas anteriores, puede crear la MV a partir de la plantilla. 

Una vez creada, la MV debería tener la configuración de la imagen.

![](images/img_1989.jpg){.thumbnail}
Si la configuración de red se corresponde con la de la imagen, puede iniciar la MV y comprobar que la IP esté correctamente asignada a su MV.


## Asignar manualmente una IP del bloque RIPE
Si quiere configurar manualmente la IP de la MV (independientemente de que la haya creado o no desde una plantilla), solo tiene que conectarla a la red «VM Network».

![](images/img_1989.jpg){.thumbnail}
Una vez iniciada la MV, puede asignarle la IP que desee directamente en el sistema operativo.

Puede consultar la información relativa al bloque RIPE en el email de entrega, el área de cliente o las propiedades de la «VM Network».

![](images/img_1990.jpg){.thumbnail}


## VMM y el vRack 1.5
En VMM, la conexión con el vRack 1.5 también se realiza a través de la red «VM Network».

Para comunicar con una IP situada en el vRack 1.5, es necesario configurar la MV para que esté conectada a la red «VM Network».

![](images/img_1989.jpg){.thumbnail}
Después solo tendrá que configurar manualmente los parámetros de la IP para que la MV pueda comunicar con los demás elementos del vRack 1.5.

