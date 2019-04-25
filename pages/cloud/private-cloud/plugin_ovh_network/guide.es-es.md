---
title: 'Utilizar el plugin OVH Network'
slug: plugin-ovh-network
excerpt: 'Cómo utilizar el plugin OVH Network en la solución Private Cloud'
section: 'Funcionalidades de OVH'
---

**Última actualización: 04/10/2018**

## Objetivo

OVH ha desarrollado para sus clientes el plugin OVH Network, que ofrece una gestión más precisa de todas las direcciones IP asociadas a la solución [Private Cloud](https://www.ovh.es/private-cloud/){.external}.

**Esta guía explica cómo utilizar el plugin OVH Network en la solución Private Cloud.**

## Requisitos

* Tener contratado un servicio [Private Cloud](https://www.ovh.es/private-cloud/){.external}.
* Tener un bloque de IP asociado al servicio [Private Cloud](https://www.ovh.es/private-cloud/){.external}.
* Estar conectado al panel de administración vSphere.

## Procedimiento

En la pestaña `Hosts and Clusters`{.action} de la columna izquierda, seleccione un datacenter de la infraestructura. A continuación, abra la pestaña `Configure`{.action} y haga clic en `OVH Network`{.action}.

![Plugin OVH Network](images/network_01.png){.thumbnail}

Se abrirá el resumen de la red, que muestra una tabla que contiene los bloques de IP y la información principal de cada bloque.

![Información sobre la IP y los bloques](images/network_02.png){.thumbnail}

Seleccionando un bloque de IP en el menú `IP Blocks`{.action} podrá ver la lista de direcciones IP que componen dicho bloque. Cada bloque tiene **5 IP reservadas** para la configuración y la alta disponibilidad del mismo, que son las siguientes:

- la primera IP, que anuncia el bloque en el router;
- la última IP, utilizada para **broadcast**;
- la penúltima, utilizada como **gateway**;
- las dos IP anteriores a la de gateway, que se utilizan como **HSRP** (Hot Standby Router Protocol) en los routers.

![Bloques de IP](images/network_03.png){.thumbnail}

Para indicarle al plugin de OVH que las IP públicas ya están en uso, es necesario enviar una petición ARP (*arping*) desde las máquinas virtuales que utilizan dichas direcciones. 

> [!warning]
>
> Algunas configuraciones con firewall virtual no permiten la recuperación de direcciones MAC si el protocolo ARP no está autorizado.
>


A continuación puede configurar los registros inversos de las IP, por ejemplo, para un servidor de correo. También puede realizar esta configuración desde el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external} y la [API de OVH](https://api.ovh.com/){.external}. Haga clic en los tres puntos situados al principio de la línea correspondiente a la IP y seleccione `Edit Reverse`{.action}.

![Botón Edit Reverse](images/network_04.png){.thumbnail}

Introduzca el registro inverso y haga clic en `Confirm`{.action}.

![Configuración del registro inverso](images/network_05.png){.thumbnail}

El registro inverso aparecerá a la derecha de la IP en la tabla de direcciones IP del bloque.

![Configuración de las IP](images/network_06.png){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.