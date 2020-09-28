---
title: 'Configurar el servicio OVHcloud Link Aggregation desde el área de cliente de OVHcloud'
slug: ola-manager
excerpt: 'Activar el servicio OVHcloud Link Aggregation en el área de cliente'
section: 'Uso avanzado'
---

**Última actualización: 24 de octubre de 2019**

## Objetivo

La tecnología OVHcloud Link Aggregation (OLA) está diseñada para aumentar la disponibilidad de su servidor y mejorar la eficiencia de sus conexiones de red. En solo unos clics, es posible añadir sus tarjetas de red y hacer que sus enlaces de red sean redundantes. De este modo, si un enlace se cae, el tráfico se redirige automáticamente hacia otro enlace disponible. Esta guía explica cómo configurar el servicio OLA en el área de cliente.

## Requisitos

Asegúrese de que ha contratado el servicio OLA a través del área de cliente antes se seguir los pasos de estqa guía.

> [!warning]
>
> Para realizar modificaciones en el servicio OLA, primero tendrá que eliminar cualquier servidor en el que esté trabajando de los vRack a los que estén conectados y eliminar todas las IP failover.
>

## Procedimiento

Para comenzar con la configuración de OLA, conéctese al [área de cliente de OVHcloud](https://ca.ovh.com/manager/){.external}.  Haga clic en el botón **Servidor** en la parte superior de la pantalla y seleccione el servidor en cuestión del menú desplegable de la izquierda. Haga clic en la pestaña **Interfaces de red**. Una vez haya confirmado que el servidor no está conectado a ningún vRack, haga clic en el botón **Ya he hecho eso, pasar al siguiente paso**. 

![network interfaces](images/network_interfaces_2020.png){.thumbnail}

En el paso «Configruación», haga clic en el botón **Configurar**.

![configure](images/configure_2020.png){.thumbnail}

Seleccione la opción «Private aggregation» y póngale un nombre a su interfaz. Haga clic en el botón **Siguiente** cuando haya verificado que todo está correcto.

![private aggregation](images/private_aggregation_2020.png){.thumbnail}

En la pestaña siguiente, compruebe las interfaces que quiere añadir en OLA y haga clic en **Siguiente**.

![interface select](images/interface_select_2020.png){.thumbnail}

Revise ahora el paso «Resumen de la configuración». Una vez haya confirmado que toda la información es correcta, haga clic en el botón **Crear**.

![Presentación](images/overview_2020.png){.thumbnail}

La operación puede tardar unos minutos. Cuando haya terminado, el paso siguiente será configurar las interfaces de su sistema operativo con un vínculo NIC o un equipo NIC. Para saber cómo proceder, puede consultar las siguientes guías diseñadas para los sistemas operativos más populares:

[Configurar un NIC para el servicio OVHcloud Link Aggregation en Debian 9](../ola-debian9/){.ref}

[Configurar un NIC para el servicio OVHcloud Link Aggregation en CentOS 7](../ola-centos7/){.ref}

[Configurar un NIC para el servicio OVHcloud Link Aggregation en Windows Server 2019](../ola-w2k19/){.ref}

## Conclusiones

En OVHcloud, creemos en nuestra visión «Innovation for Freedom». OLA le brinda a nuestros clientes la libertad de utilizar sus NIC como quieran. Si ha leído esta guía, debe ser capaz de configurar su servidor con la funcionalidad OLA en el área de cliente de OVHcloud.
