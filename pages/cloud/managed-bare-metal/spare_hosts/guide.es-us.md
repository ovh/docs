---
title: Host de sustitución
routes:
    canonical: '/pages/cloud/private-cloud/spare_hosts'
excerpt: Cómo sustituir un host
updated: 2020-11-18
---

**Última actualización: 18/11/2020**

## Objetivo

OVHcloud garantiza en sus contratos la sustitución de los hosts que no están accesibles.

**Esta guía explica cómo sustituir un host.**

## Requisitos

- Tener una solución [Managed Bare Metal](https://www.ovhcloud.com/es-es/managed-bare-metal/){.external}.

## Procedimiento

### Entrega de un host de sustitución

En caso de fallo en uno de los hosts que componen su infraestructura, OVHcloud entrega automáticamente un host de sustitución gratuito para garantizar la continuidad del servicio en su infraestructura. 

Una vez entregado el host, recibirá un mensaje de correo electrónico con toda la información necesaria y su dirección IP, para que así pueda encontrarlo fácilmente en su interfaz vSphere.

Por defecto, el servicio HA ([High Availability](/pages/cloud/managed-bare-metal/vmware_ha_high_availability)) de VMware está activado en su cluster. Si este servicio permanece activado, las máquinas virtuales se reiniciarán automáticamente. En caso de que el servicio DRS (Distributed Ressources Scheduler) esté activado y configurado en modo «Fully automated», la carga en los hosts del cluster se repartirá de forma automática.

> [!warning]
> 
> Si hay montado o conectado un lector de CD/DVD en una MV, el servicio HA no podrá arrancarla en el host de sustitución. Así pues, le recomendamos que siempre conecte estos lectores en un periférico a nivel de cliente.
>

### Qué hacer con el host de sustitución

Una vez que el host original vuelva a estar operativo, podrá devolver cualquiera de los dos hosts (el de sustitución o el original).

Le recomendamos que nos devuelva el host original para que podamos realizar un diagnóstico más preciso de la incidencia y evitar así fallos futuros. Si devuelve el host original, podrá conservar el host de sustitución. Para más información, consulte la guía [Eliminar un servidor host](/pages/cloud/managed-bare-metal/delete_host).

Una vez retirado el host original, OVHcloud podrá recuperarlo automáticamente.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
