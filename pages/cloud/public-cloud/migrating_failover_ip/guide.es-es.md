---
title: Migrar una IP Failover
excerpt: Migrar una IP Failover
slug: migrar_una_ip_failover
legacy_guide_number: g1890
section: Red e IP
---


## 
Esta guía explica cómo migrar una dirección IP Failover de una instancia a otra. 

Esta operación puede tener diversas aplicaciones, por lo general relacionadas con la necesidad de limitar o evitar los posibles casos de inaccesibilidad del servicio:


- Migrar un sitio web a su «nueva versión». 
- Hacer funcionar la producción en un servidor replicado mientras realiza una operación de mantenimiento o una actualización en el servidor de producción.




## Requisitos
Para seguir los pasos descritos en esta guía, es necesario:


- tener al menos dos instancias de Public Cloud iniciadas; 
- tener una IP Failover.




## 
Partimos de una situación en la que tenemos una IP enrutada hacia el Servidor 1, y queremos redirigirla al Servidor 2.

![](images/img_3815.jpg){.thumbnail}
Para ello, haga clic en la flecha y seleccione «Cambiar el servidor asociado».

![](images/img_3816.jpg){.thumbnail}
Marque la casilla correspondiente para seleccionar el servidor de destino.

![](images/img_3817.jpg){.thumbnail}
Haga clic en «Asociar».
La IP Failover puede configurarse en el servidor de destino antes o después de realizar la migración. Si se configura antes, empezará a responder en cuanto finalice la operación de enrutamiento.


## 
 

