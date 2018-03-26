---
title: 1. La plataforma VMware Horizon 7.1
slug: plataforma-horizon-7
excerpt: Cómo conectarse por primera vez a VMware Horizon 7.1
section: Primera configuración
order: 1
---

**Última actualización: 16/02/2018**

## Objetivo

Vamos a explicar en cinco guías cómo empezar con [Cloud Desktop Infrastructure](https://www.ovh.com/es/cloud/cloud-desktop/infrastructure/){.external}.

**Esta guía describe los primeros pasos en la plataforma VMware Horizon 7.1.**

Si no conoce la solución, puede descubrirla en este [vídeo de presentación](https://www.youtube.com/watch?v=cFnpnANQHzQ&t){.external}.

## Requisitos

- Haber recibido por correo electrónico las claves de acceso a [Cloud Desktop Infrastructure](https://www.ovh.es/cloud/cloud-desktop/infrastructure/){.external}.

## Procedimiento

### Información general

La plataforma VMware Horizon 7.1 está formada por varios elementos:

- interfaz de administración VMware Horizon 7.1,
- dirección (URL) de acceso al primer grupo (*pool*) de escritorios virtuales,
- una plataforma [Private Cloud](https://www.ovh.com/fr/private-cloud/){.external} en la que se desplegarán los modelos de máquina virtual (MV) y los escritorios virtuales.


### Infraestructura

![Infraestructura de VMware Horizon 7.1](images/1200.png){.thumbnail}

Con el fin de que la capacidad de los recursos asignados para el despliegue de *pools* no se vea afectada, OVH despliega, administra y supervisa la infraestructura de administración (ConnectionServer, Composer y ActiveDirectory).

OVH despliega routers virtuales (vRouter OVH) y puntos de acceso (*access points*) que permiten a los *pools* acceder a los recursos del Private Cloud entregado con la plataforma.

Por defecto, la plataforma entregada tiene una red privada con un punto de acceso configurado. No obstante, es posible añadir más desde el área de cliente.


### Entrega

Una vez abonada la orden de pedido, recibirá un email como el de abajo. En él encontrará toda la información necesaria para conectarse a su infraestructura y crear y administrar su primer *pool*.

> [!secondary]
>
> Estimado/a cliente:
>
> Gracias por haber confiado en OVH para instalar la opción Virtual Desktop Infrastructure (VDI) en su datacenter.
>
> 
> A continuación encontrará las claves con las que podrá acceder al servicio:
>
> 
> * acceso de administrador al escritorio: https://#URL#/admin
> * usuario: #USERNAME#
> * contraseña: #PASSWORD#
> 
> 
> Para gestionar sus plantillas, deberá conectarse al Private Cloud.
>
> Puede hacerlo de dos formas:
> 
> A través del cliente vSphere de VMware:
> 
> * enlace de descarga del cliente: https://#VPNHOSTNAME#/client/VMware-viclient.exe
> * dirección IP: #VPNHOSTNAME#
>
> 
> A través de vSphere Web Client:
> 
> * https://#VPNHOSTNAME#/vsphere-client
>
> ATENCIÓN: vSphere utiliza los siguientes puertos de acceso: 80, 443 y 8443. Utilice la siguiente información para crear su primer pool:
>
> 
> * acceso al escritorio: https://#POOLURL#
> * red DHCP: #PORTGROUP#
>
> 
> A continuación se indican los diez usuarios del dominio:
> 
> * vdi1: #USER1#
> * vdi2: #USER2#
> * vdi3: #USER3#
> * ...
>
> 
> Si necesita ayuda para utilizar la solución Cloud Desktop Infrastructure, no dude en consultar la documentación disponible en esta dirección: 
> 
>  
> https://docs.ovh.com/es/cloud-desktop-infrastructure/
>
> 
> También puede formular preguntas o compartir su experiencia escribiendo a la siguiente lista de distribución:
>
> 
> cdi@ml.ovh.net
> 
>  
> Agradeciéndole la confianza depositada en OVH, quedamos a su disposición.
>
> Atentamente,
>
> El equipo de Cloud Desktop Infrastructure
> 


En la siguiente guía se explica cómo [crear un modelo de pool](https://docs.ovh.com/es/cloud-desktop-infrastructure/crear-modelo-pool/){.external}.


## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.