---
title: Optimizar la distribución de las máquinas virtuales en los hosts
excerpt: ¿Cuál es la mejor forma de repartir las MV en los hosts para optimizar los recursos?
updated: 2018-03-26
---


## Configuración propuesta por OVH
PRO incluye la optimización dinámica que permite repartir automáticamente la carga de un cluster enstre los distintos hosts que lo conforman.
OVH ofrece una configuración por defecto de PRO, que se muestra en la imagen.

![](images/img_1991.jpg){.thumbnail}
Con la configuración anterior, la optimización dinámica se ejecuta cada 20 minutos y migra automáticamente las MV de un host a otro.


## Excluir una MV de PRO
Si no quiere que PRO migre automáticamente alguna MV, puede excluirla marcando la casilla de la imagen en las propiedades de la MV.

![](images/img_1992.jpg){.thumbnail}


## Reglas antiafinidad
En VMM, puede establecer reglas antiafinidad para cada MV. De esa forma, puede indicar que no quiere que ciertas máquinas virtuales estén en el mismo host.

Para ello, acceda a las propiedades de la máquina virtual > Hardware Configuration > Availability > Availability Sets.

![](images/img_1993.jpg){.thumbnail}
Cree una propiedad y añádala a la columna «Assigned Properties».

![](images/img_1994.jpg){.thumbnail}
Haga lo mismo en las otras MV que quiera separar.

