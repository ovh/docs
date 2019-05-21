---
title: 'Public Cloud y vRack: explicaciones y hoja de ruta'
excerpt: 'Public Cloud y vRack: explicaciones y hoja de ruta'
slug: public_cloud_y_vrack_explicaciones_y_hoja_de_ruta
legacy_guide_number: g2148
section: Red e IP
---


## 
El vRack es una tecnología que ofrece OVH para conectar sus distintos productos de OVH mediante redes privadas con independencia de su localización. El único requisito es que los productos sean compatibles con el vRack.

Podemos imaginar el vRack como un switch privado virtual capaz de conectar entre sí, por ejemplo, servidores dedicados ubicados en Beauharnois, servidores cloud de Estrasburgo y un Dedicated Cloud localizado en Roubaix.

Una vez que este «switch» esté conectado a sus productos, puede hacer que se comuniquen entre sí a través de VLAN (cada VLAN es una red privada aislada).


## 
El vRack para Public Cloud es un vRack de tercera generación. Algunos dispositivos de red necesitan ser sustituidos o actualizados para que el vRack funcione, por lo que serán necesarias varias etapas antes de que esté totalmente disponible.


## Etapa 1: Solo Public Cloud y únicamente en Estrasburgo y Gravelines
Esta etapa ya está en producción.
La primera fase consiste en desplegar esta tecnología para las instancias de Public Cloud de los centros de datos de Estrasburgo y Gravelines.

Así pues, será posible hacer que las instancias de un mismo proyecto que estén desplegadas en las regiones SBG1 y GRA1 se comuniquen entre sí.


## Etapa 2: Conexión de todos los centros de datos para Public Cloud
Esta etapa ya está en producción.
En una segunda fase, el vRack estará disponible en todas las regiones. Además de en SBG1 y GRA1, también será posible activar el vRack en la región BHS1 de Beauharnois.

Por otro lado, las distintas regiones estarán conectadas entre sí, siendo posible la comunicación entre diferentes centros de datos incluidos dentro de un mismo tenant.

Las redes privadas que tengan el mismo ID se conectarán automáticamente. Será posible hacer que una instancia de SBG1 comunique con una instancia del mismo tenant que se encuentre en la misma red privada en BHS1 o GRA1.


## Etapa 3: Apertura del vRack a los demás productos
El vRack podrá utilizarse para conectar las instancias de Public Cloud con los demás productos de OVH.

Solo habrá que añadir los servicios al mismo vRack en el que se encuentre el proyecto de Public Cloud para que comuniquen entre sí, independientemente de que estén localizados en Estrasburgo, Gravelines, Beauharnois o en los otros centros de datos de OVH. Por ejemplo, para un proyecto de Public Cloud, las instancias situadas en BHS1 podrán comunicarse con las instancias situadas en SBG1, pero también con un Dedicated Cloud ubicado en Roubaix.


## 
En un servidor dedicado, existen dos posibilidades para configurar la interfaz de red vRack (eth1 en Linux).


- eth1: 192.168.0.2 - Aquí se ha asignado directamente una dirección privada a eth1. En este caso, la red vRack utilizará implícitamente una VLAN ID 0 para comunicar los servidores.
- eth1.8: 10.8.0.2 - Aquí se ha especificado la VLAN ID 8 etiquetando eth1. Se ha elegido el ID de VLAN a utilizar y se define una dirección privada para esta interfaz etiquetada.


Así, todas las VLAN son dirigidas a la interfaz del servidor dedicado y es la configuración de la interfaz de red la que elegirá entre las VLAN en función del ID utilizado.

En cuanto al Public Cloud, para poder utilizar las redes privadas es necesario añadir un proyecto a un vRack.

Una vez añadido el proyecto a un vRack, es posible crear redes privadas que llevarán directamente el ID de VLAN que se haya elegido previamente, de modo que no es necesario etiquetar las interfaces en las instancias, ya que el aislamiento se realiza directamente a nivel de la red privada.

Una consecuencia de esto es que para utilizar varias VLAN, las instancias de Public Cloud tendrán varias interfaces de red (eth1, eth2...), mientras que en servidor dedicado es necesario utilizar la misma interfaz con diferentes etiquetas (eth1.4, eth1.123...).