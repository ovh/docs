---
title: 'Utilizar el modo de resiliencia'
slug: modo-resiliencia
excerpt: 'Cómo utilizar el modo de resiliencia de OVHcloud'
section: 'Funcionalidades de OVHcloud'
---

**Última actualización: 25/10/2018**

## Objetivo

El modo de resiliencia es una herramienta desarrollada por OVHcloud que simula un fallo en uno de los servidores host de la infraestructura para comprobar que los sistemas **High Availability** (HA) y **Fault Tolerance** (FT) funcionan correctamente en un cluster **de desarrollo**.

**Esta guía explica cómo utilizar el modo de resiliencia de OVHcloud.**

## Requisitos

- Tener contratado un servicio [Private Cloud](https://www.ovhcloud.com/es/enterprise/products/hosted-private-cloud/).
- Estar conectado al cliente vSphere.


## Procedimiento

En primer lugar, asegúrese de que cumple los siguientes requisitos:

- El servidor host debe estar en un cluster.
- La opción High Availability (HA) debe estar activada.
- Debe haber otro servidor host disponible y funcionando en el cluster.

> [!warning]
>
> Este test está diseñado para un **entorno de prueba o desarrollo**. No realice esta operación en infraestructuras de **producción**.
> 


### Activar el modo de resiliencia

Una vez que se haya conectado al cliente vSphere, acceda al inventario de su plataforma en la pestaña `Hosts and Clusters`{.action} de la columna izquierda. Haga clic derecho sobre el servidor host en el que quiera activar el modo de resiliencia y seleccione `OVH Private Cloud`{.action} y `Resilience`{.action}.

![Selección del host para activar el modo de resiliencia](images/resilience_01.png){.thumbnail}

Después de comprobar que cumple todos los requisitos, haga clic en el botón `Next`{.action}.

![Verificación de los requisitos y validación](images/resilience_02.png){.thumbnail}

Para poder ejecutar el test, es necesario aceptar las condiciones de uso. Léalas, marque la casilla `I accept the terms of the failure simulation agreement`{.action} y haga clic en `Next`{.action}.

![Aceptación de las condiciones de uso](images/resilience_03.png){.thumbnail}

La solicitud de activación se enviará.

![Modo de resiliencia activado](images/resilience_04.png){.thumbnail}

Al cabo de unos minutos, el servidor host dejará de responder.

![Host no disponible](images/resilience_05.png){.thumbnail}


### Desactivar el modo de resiliencia

Para finalizar la simulación, vuelva a seleccionar `OVH Private Cloud`{.action} y `Resilience`{.action}.

![Desactivar el modo de resiliencia](images/resilience_06.png){.thumbnail}

La solicitud de desactivación se enviará.

![Modo de resiliencia desactivado](images/resilience_07.png){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.