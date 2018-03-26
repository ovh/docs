---
title: ¿Cómo puedo administrar mis recursos?
excerpt: ''
slug: como_puedo_administrar_mis_recursos
legacy_guide_number: g602
section: Primeros pasos
---


## 
Aqui vemos como vigilar los recursos de su Privated Cloud. 
Debe utilizar el cliente vSphere, ya sea accediendo con su propio cliente instalado en su máquina, ya sea utilizando la conexión RDP que le hemos proporcionado al activar su PCC.


## En los Hosts
Puede tener una visión global de los recursos de su host visitando su PCC, en la pestaña "host" :

![](images/img_98.jpg){.thumbnail}


## En un cluster o en un pool de recursos.
Es posible visualizar la información de los recursos para su PCC en la pestaña "Ressource Allocation". 
Aquí encontrará el conjunto de recursos disponibles : RAM, CPU, espacio de almacenamiento. 
Esta vista le permite aislar una carga eventual anormal, producida por una VM en uno de sus hosts o en unos de los datacenters virtuales. Puede fijar limitaciones de acceso al disco (I/O) para su almacenamiento. También puede dar prioridad a cada una de sus VM y gestionar los límites de sus recursos para sus VM con el fin de impedir que algunas de sus VM puedan monopolizar los recursos y empeorar el rendimiento general. Es igualmente posible gestionar los recursos para una pool VM.

![](images/img_96.jpg){.thumbnail}


## Gráficos de recursos para sus clusters o para sus hosts
En el apartado "Performance" encontrará los gráficos de uso de su cluster o de su host :

![](images/img_95.jpg){.thumbnail}
Puede utilizar el botón "Advanced", luego "Char Option..." para personalizar los gráficos.
Puede seleccionar el rango de tiempo a mostrar o, incluso, el tipo de gráficos para hacer más preciso el análisis de estos datos:

![](images/img_100.jpg){.thumbnail}
Personalización de gráficos :

![](images/img_101.jpg){.thumbnail}


## En sus almacenamientos
Visitando la sección Datacenter, luego en la pestaña datastore (o base de datos), verá todos sus almacenamientos. Puede monitorizar el espacio usado en toda su infraestructura:

![](images/img_102.jpg){.thumbnail}

