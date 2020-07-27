---
title: Los hosts de spare
description: Cómo gestionar la entrega y el seguimiento de los hosts de spare en Dedicated Cloud.
excerpt: Cómo gestionar la entrega y el seguimiento de los hosts de spare en Dedicated Cloud.
slug: los_hosts_de_spare
legacy_guide_number: g860
section: Funcionalidades de OVH
---


## 
En caso de fallo de uno de los hosts que componen su infraestructura Dedicated Cloud, le entregamos un host de spare, previa apertura de un tíquet de incidencia. Al realizar la entrega, le informamos por correo electrónico.

Este host es gratuito. El tíquet de incidencia especifica la IP del host afectado por la interrupción del servicio. Si se conecta a su cliente vSphere, verá la alerta relativa al host.

Si ha configurado correctamente las funcionalidades HA y DRS de VMware, las máquinas virtuales se migrarán automáticamente al host de spare. Si no, deberá migrarlas manualmente.


## 

## ¡Atención!
OVH entrega el host de spare para limitar el alcance de una posible pérdida de recursos. Cuando el funcionamiento del host vuelva a la normalidad, OVH puede recuperar el host de spare.


## 
Debe devolver el host de spare. No es posible conservar un host de spare ni transformarlo en host facturado. Si lo que quiere es sustituir un host que falla, consulte la guía [«Sustituir un host defectuoso»]({legacy}861).


## 
Cuando el estado de su host vuelva a la normalidad y hayan desaparecido los mensajes de alerta, puede devolver el host de spare. Para ello, siga las indicaciones del apartado «Supresión de un host» de la guía [«¿Cómo agregar un host?»]({legacy}605).

