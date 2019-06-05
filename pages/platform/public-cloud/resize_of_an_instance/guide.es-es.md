---
title: Redimensionar una instancia
excerpt: Cómo redimensionar una instancia en Horizon.
slug: redimensionar_una_instancia
legacy_guide_number: g1778
section: Gestión de las instancias en Horizon
---


## 
En algunos casos, bien debido a un aumento de la actividad o a sus nuevas necesidades, es posible que su instancia no pueda dar respuesta a esta nueva carga debido a la falta de recursos. 
Sin embargo, Public Cloud le permite aumentar los recursos de su instancia, con tal solo unos clics. 
Esta guía explica cómo redimensionar una instancia en OpenStack Horizon.

## Atención:
Solo es posible redimensionar la instancia a un modelo superior. 

Además, esta acción conlleva una interrupción de la instancia durante la operación.


## Requisitos

- [Crear un acceso a Horizon](https://docs.ovh.com/es/public-cloud/crear_un_acceso_a_horizon/)
- Una instancia




## Redimensionar una instancia
Para redimensionar una instancia:


- Conéctese a Horizon.
- En el menú izquierdo, haga clic en «Instancias».
- En el menú desplegable de la columna «Acciones» correspondiente a la instancia que quiera redimensionar, seleccione «Redimensionar instancia».



![](images/img_2718.jpg){.thumbnail}


## Elección del sabor
En esta pestaña se indica la plantilla actual y le permite seleccionar una nueva plantilla para la instancia.

![](images/img_2717.jpg){.thumbnail}

## Consejo:
Es posible ver la parte de recursos utilizados de los recursos totales asignados al proyecto.


## Opciones avanzadas
Desde esta pestaña es posible gestionar el particionamiento del disco.

En el desplegable «Partición de disco», seleccione «Automático» o «Manual».

![](images/img_2652.jpg){.thumbnail}

- Cuando termine la configuración, haga clic en «Redimensionar».




## Redimensionar el disco en Windows
Atención
Al redimensionar una Instancia Windows, el tamaño de la partición no se actualiza automáticamente. Tendremos que aumentar el tamaño utilizando la «Administración de discos»: 


- Inicie la administración de discos.



![](images/img_2980.jpg){.thumbnail}

- Haga clic con el botón derecho sobre la partición principal.



![](images/img_2981.jpg){.thumbnail}

- Haga clic en «Extender volumen».



![](images/img_2978.jpg){.thumbnail}

- Acepte la extensión del disco.



![](images/img_2979.jpg){.thumbnail}