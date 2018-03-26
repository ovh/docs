---
title: 'Horizon: Crear un contenedor de objetos'
excerpt: 'Horizon: Crear un contenedor de objetos'
slug: horizon_crear_un_contenedor_de_objetos
section: Object Storage
legacy_guide_number: g1921
---


## 
Para utilizar la solución de almacenamiento que ofrece Public Cloud, lo primero que hay que hacer es crear un contenedor que albergue los archivos.

Esta guía explica cómo crearlo desde el panel Horizon de OpenStack.


## Requisitos:

Para seguir todos los pasos de esta guía, es necesario [crear un acceso a Horizon](https://docs.ovh.com/es/public-cloud/crear_un_acceso_a_horizon/) previamente.


## 
Conéctese a Horizon.

En el menú izquierdo, seleccione «Almacén de objetos» > «Contenedores».

![](images/img_2935.jpg){.thumbnail}
Haga clic en el botón «Crear contenedor».

Se abrirá una nueva ventana.

![](images/img_2937.jpg){.thumbnail}
Desde esta ventana, puede:


- asignar un nombre al contenedor;
- seleccionar el tipo de contenedor: público (todo el mundo puede acceder) o privado (solo es posible acceder autentificándose).


A continuación, se mostrará el nuevo contenedor en la tabla.

![](images/img_2938.jpg){.thumbnail}
Podrá realizar las siguientes acciones:


- ver los detalles del contenedor
- hacer el contenedor público o privado
- borrar el contenedor


También puede crear una pseudo-carpeta haciendo clic en el nombre del contenedor o en el botón correspondiente.
Los datos subidos al Object Storage no se almacenan siguiendo una jerarquía de carpetas convencional (carpeta / subcarpeta...), sino que todos se guardan al mismo nivel. Esto reduce el tiempo de acceso a los archivos.

Estas pseudo-carpetas se mostrarán en forma de prefijo y le permitirán organizar sus datos de otra manera.
Otras acciones posibles son:


- cargar archivos
- eliminar archivos y pseudo-carpetas
- descargar archivos
- copiar archivos
- ver los detalles de los archivos