---
title: Suspender o poner en pausa una instancia
excerpt: Cómo suspender o poner en pausa una instancia en Horizon.
slug: suspender_o_poner_en_pausa_una_instancia
legacy_guide_number: g1781
section: Gestión de las instancias en Horizon
---


## 
Durante la configuración de una infraestructura altamente disponible, puede que sea necesario cortar el acceso a las instancias para poder realizar distintas pruebas. 
OpenStack le permite suspender o poner en pausa sus instancias. 
El proceso de suspensión es similar a la hibernación de la instancia y la puesta en pausa es similar a la puesta en espera.
El estatus «Suspendida» también se utilizará en caso de problema de facturación.
Esta guía explica cómo suspender (poner una instancia en modo de hibernación) o poner en pausa una instancia.

## Importante:
Estas operaciones no interrumpen la facturación de la instancia, que seguirá facturándose mientras no haya sido terminada.


## Requisitos

- [Crear un acceso a Horizon](https://docs.ovh.com/es/public-cloud/crear_un_acceso_a_horizon/)
- Una instancia




## 
Para suspender una instancia:


- Conéctese a Horizon.
- En el menú izquierdo, haga clic en «Instancias».
- En el menú desplegable de la columna «Acciones» correspondiente a la instancia que quiera suspender, seleccione «Instancia suspendida».



![](images/img_2656.jpg){.thumbnail}
Aparecerá un mensaje confirmando la suspensión de la instancia.

## Importante:
Para reanudar la instancia, en el menú desplegable de la columna «Acciones» correspondiente a la instancia que quiera reanudar, seleccione «Continuar instancia».


## 
Para poner en pausa una instancia:


- Conéctese a Horizon.
- En el menú izquierdo, haga clic en «Instancias».
- En el menú desplegable de la columna «Acciones» correspondiente a la instancia que quiera poner en pausa, seleccione «Pausar instancia».



![](images/img_2656.jpg){.thumbnail}
Aparecerá un mensaje confirmando la puesta en pausa de la instancia.