---
title: 'Error «Controller VM deleted»'
slug: error-controlador-nsx
excerpt: 'Por qué puede aparecer el error «Controller VM deleted» y cómo solucionarlo'
section: NSX
---

**Última actualización: 11/07/2018**

## Objetivo

Es posible que en vSphere aparezca el error **Controller VM deleted** relativo a NSX.

**Esta guía explica por qué se produce este error y cómo solucionarlo.**


## Requisitos

- Disponer de la opción [NSX](https://www.ovh.es/private-cloud/opciones/nsx.xml){.external}.
- Haber creado un usuario con permisos de acceso NSX.


## Procedimiento

Es posible que en el cliente web vSphere, en `Networking & Security`{.action}  > `Installation`{.action}, aparezca el mensaje de error **Controller VM deleted** bajo el nombre del controlador.

![Error «Controller VM deleted»](images/controllervmdeleted.JPG)


La razón es la siguiente: cuando se hace un uso estándar de NSX, los controladores se encuentran en el mismo datacenter que las máquinas virtuales. En cambio, en OVH, para evitar que consuman recursos de la infraestructura de nuestros clientes, alojamos los controladores en otra infraestructura (de gestión interna), lo que explica este error. 

**El funcionamiento de la máquina virtual no se verá afectado por este mensaje**. Lo único que debe hacer es asegurarse de que, en la interfaz NSX, el estado de los controladores sea **Connected**, lo que indica que la máquina está funcionando correctamente.


> [!warning]
>
> Si intenta resolver este error con el botón `Resolve`{.action}, se eliminarán los controladores de su infraestructura, lo cual afectará al funcionamiento tanto de NSX como de la red de la infraestructura. Por lo tanto, le recomendamos que no haga clic en este botón; OVH se encarga de la gestión de los controladores NSX.
> 

También puede aparecer un mensaje de alerta en el panel de control de NSX, que se debe a la misma razón.

![Alerta en la interfaz NSX](images/controllervmdeleted2.JPG)


## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.