---
title: Crear una alerta
slug: crear-una-alerta
routes:
    canonical: 'https://docs.ovh.com/us/es/private-cloud/crear-una-alerta/'
excerpt: Configurar alertas en el cliente vSphere
section: Gestión de las máquinas virtuales
order: 09
updated: 2020-11-18
---

**Última actualización: 18/11/2020**

## Objetivo

Es posible crear una alerta en todos los elementos de su Managed Bare Metal: el datacenter, los clusters, las MV, los datastores, la red, etc.

**Esta guía explica cómo crear alertas en el cliente vSphere.**

## Requisitos

- Haber contratado un [Managed Bare Metal de OVHcloud](https://www.ovhcloud.com/es/managed-bare-metal/){.external}.
- Estar conectado a la [interfaz vSphere](../instalar_el_vsphere_client/).

## Procedimiento

### Crear una alerta

Para crear una alerta, haga clic derecho en el datacenter o el elemento que quiera vigilar y, a continuación, haga clic en `Alarms`{.action} > `New Alarm Definition`{.action}.

![Crear una alerta](images/alarms01.png){.thumbnail}

### Asignar un nombre y definir un objetivo

En el primer paso deberá asignarle un nombre a la alerta y definir su objetivo. También puede añadir una descripción.

![Nombre y objetivo de la alerta](images/alarms02.png){.thumbnail}

### Definir las reglas de la alerta

En el segundo paso deberá definir las reglas de la alerta y las acciones que quiere activar.

El campo `IF` permite definir el concepto que activa la alerta entre una serie de variables. En función de la variable elegida, se mostrará una lista de argumentos concreta.

El campo `THEN` permite establecer el grado de criticidad de la alerta y las acciones que esta activa, como el envío de un mensaje de correo electrónico, la ejecución de un script o la interrupción de una MV.

![Reglas de la alerta](images/alarms03.png){.thumbnail}

De este modo es posible, por ejemplo, controlar la RAM de un host, indicando el umbral que no debe superarse antes de que se active la alerta y usted reciba un correo electrónico de aviso.

> [!primary]
> Es posible añadir varias reglas a la alerta haciendo clic en `ADD ANOTHER RULE`{.action}.
>

### Interrupción de la alerta

El tercer paso permite definir los criterios que determinan el fin de la alerta y la ejecución de nuevas acciones.

![Interrupción de la alerta](images/alarms04.png){.thumbnail}

### Resumen de alerta

El último paso muestra un resumen de las reglas definidas. Puede activar la alerta marcando la opción correspondiente o, si lo prefiere, activarla más tarde haciendo clic derecho sobre el elemento correspondiente y seleccionando `Alarms`{.action} > `Enable Alarm Actions`{.action}.

![Resumen de la alerta](images/alarms05.png){.thumbnail}

En este paso también es posible configurar la frecuencia con la que quiere que se repitan las alertas.


## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
