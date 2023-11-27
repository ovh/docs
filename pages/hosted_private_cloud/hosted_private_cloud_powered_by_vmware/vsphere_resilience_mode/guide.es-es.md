---
title: Probar la pérdida temporal de un host mediante la activación del modo de resiliencia
excerpt: Cómo probar la pérdida temporal de un host utilizando el modo de resiliencia en su infraestructura Hosted Private Cloud de OVHcloud
---

## Objetivo

Si quiere realizar una prueba de resiliencia en su infraestructura Hosted Private Cloud de OVHcloud, el modo de resiliencia permite simular la pérdida temporal de un host para validar la continuidad de la actividad de su producción en caso de incidencia.

**Cómo probar la pérdida temporal de un host utilizando el modo de resiliencia en su infraestructura Hosted Private Cloud de OVHcloud**

## Requisitos

- Tener una solución [Hosted Private Cloud](https://www.ovhcloud.com/es/enterprise/products/hosted-private-cloud/).
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

## Procedimiento

Esta operación se efectúa desde las API de OVHcloud y tendrá como efecto cortar la accesibilidad a la red para el host seleccionado y desactivarlo por un tiempo determinado previamente (min:10min, max:24h, default:1h).

Esta prueba es independiente del sistema de vigilancia, evitando así la sustitución automática del host.

De este modo, las MV se apagarán y vSphere HA realizará la migración y el reinicio hacia el o los hosts restantes si la funcionalidad está correctamente configurada en el cluster.

Para más información sobre vSphere HA, consulte la documentación de VMware «[Funcionamiento de vSphere HA](https://docs.vmware.com/es/VMware-vSphere/7.0/com.vmware.vsphere.avail.doc/GUID-33A65FF7-DA22-4DC5-8B18-5A7F97CCA536.html)».

Así podrá estimar el tiempo de reanudación de la actividad desde el lanzamiento del test y la simulación de la incidencia (RTO) hasta el reinicio de las MV.

A continuación le indicamos las llamadas que deberá realizar para consultar y obtener las claves de acceso de su infraestructura, su datacenter y el host en los que quiera realizar la prueba:

Para recuperar el nombre de su infraestructura: (pcc-xx-xx-xx):

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud

Para obtener el identificador de su datacenter:

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter

Y, por último, para obtener el identificador del host:

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host

Una vez que disponga de esta información, para confirmar que puede iniciar la acción, puede utilizar la siguiente llamada que validará las condiciones de realización del test y así evitar cualquier pérdida de actividad:

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resilience/canBeEnabled

Si se puede realizar la prueba, el resultado es: true.

Para iniciar el test, puede utilizar la siguiente llamada:

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resilience/enable

El host se desconectará y entrará en modo "Sin respuesta" hasta que finalice la prueba:

![vsphere](images/resilience_mode.png){.thumbnail}

Puede comprobar el estado de la acción mediante la siguiente llamada:

> [!api]
>
> @api {v1} /dedicatedCloud GET /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resiliencia

Si el test se ha iniciado correctamente en el host, el resultado será: enabled.

Si es necesario, también puede detener la prueba antes de la duración elegida mediante esta llamada:

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}/resilience/disable

La información devuelta incluye la programación de la tarea "updateHostResilienceOff".

La conectividad del host se restablecerá al final del test y su infraestructura HPC recuperará sus condiciones normales de uso.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
