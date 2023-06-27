---
title: VMware DRS (Distributed Ressource Scheduler)
excerpt: Aprenda a gestionar el balanceo de carga con la función DRS
updated: 2020-07-07
---

**Última actualización: 29/06/2020**

## Objetivo

La función **DRS** (Distributed Ressource Scheduler) está disponible en un cluster **VMware**, y permite repartir la carga de los host migrando las máquinas virtuales de forma automática (vMotion). Reparte las MV en los diferentes hosts del cluster en función de su uso y sus recursos.

**Esta guía explica cómo configurar esta función**

## Requisitos

- Tener contratado un [Hosted Private Cloud de OVHcloud](https://www.ovhcloud.com/es-es/enterprise/products/hosted-private-cloud/){.external}.
- Estar conectado a la [interfaz vSphere](/pages/cloud/private-cloud/vsphere_interface_connexion).

## Procedimiento

El objetivo principal de la funcionalidad **DRS**es repartir de forma más eficiente los recursos. Para ello, puede migrar las MV a un Host o un Pool (más apropiado) de su cluster, u ofrecerle consejos sobre el proceso.

![Principio del DRS](images/drs0.png){.thumbnail}

### Activación

La funcionalidad DRS está activa por defecto en el primer cluster que OVHcloud le proporciona cuando contrata el servicio Hosted Private Cloud.

Si se crea un cluster nuevo, se puede activar la funcionalidad DRS en el momento de creación del cluster o posteriormente.

Si la función DRS no está activa en su cluster, selecciónelo y diríjase a la pestaña `Configurar`{.action}.

Haga clic en el menú `Servicios`{.action} y a continuación seleccione `vSphere DRS`{.action}.

Haga clic en `Modificar`{.action}y active la funcionalidad con el botón `vSphere DRS`.

![Activación del DRS](images/drs01.png){.thumbnail}

### Configuración 

En la misma ventana de configuración, aparecen 4 categorías de opciones.

#### Automatización

En esta categoría hay tres niveles diferentes de automatización:

- En el modo «Manual», la función DRS no moverá las máquinas virtuales, usted deberá encargarse de gestionar el desplazamiento y el balanceo de sus máquinas virtuales.

- En el modo «Parcialmente automático», la función DRS le aconsejará que migre sus máquinas virtuales, pero tendrá que confirmar la migración.

- En el modo «Completamente automático», la función DRS migrará sus máquinas virtuales de forma automática sin necesidad de confirmación por su parte, en función de la carga de los hosts.

También se puede definir un umbral de migración más o menos agresivo en los modos automáticos.

La opción « Predictive DRS », disponible a partir de la versión 6.5 de VMware, permite llevar a cabo migraciones en función de las medidas previstas devueltas por vRops.
Por ello esto último es indispensable para el funcionamiento de esta opción DRS.

La opción «Automatización de máquina virtual» permite configurar parámetros concretos del DRS para ciertas máquinas virtuales en el submenú `Reemplazo de las MV` de la pestaña `Configurar`. (Algunas máquinas virtuales pueden tener un modo de migración parcialmente automático mientras que el cluster estará en modo completamente automático).

![Automatización DRS](images/drs02.png){.thumbnail}


#### Opciones adicionales

Existen 3 opciones adicionales en la configuración DRS:

- Distribución de las máquinas virtuales: Distribuya un número más equilibrado de máquinas virtuales en los hosts para conseguir mayor disponibilidad. 

- Medidas de memoria para el balanceo de la carga: Balanceo de carga basado en la memoria consumida de las máquinas virtuales en vez de en la memoria activa.
Esta configuración solo es recomendable para los cluster en los que la memoria del host no esté sobrecargada. 

- Sobrecarga de la CPU: Puede limitar la sobrecarga de la CPU para todos los hosts del cluster. Esta configuración creará una CPU virtual en un límite de proporción de CPU física principal (vCPU:pCPU) en cada host ESXi. 

![Opciones adicionales DRS](images/drs03.png){.thumbnail}

#### Gestión de la fuente de alimentación

**Esta opción debe estar siempre desactivada.**

La función principal de esta opción es apagar los host de su infraestructura si el DRS determina que no se necesitan, sin comprometer el nivel de balanceo de carga requerido por HA.
Sin embargo, el monitoring de OVHcloud detectará esta operación como una anomalía y creará una intervención en datacenter.

#### Opciones avanzadas

Puede realizar varios ajustes de configuración avanzada en su cluster DRS.

Estos son algunos ejemplos:

|Nombre de la opción avanzada|Descripción|Valor por defecto|Valor más agresivo|
|:---|:---|:---|:---|
|UseDownTime|Si el análisis de costes debe tener en cuenta el impacto sobre la carga de trabajo de posibles bloqueos de memoria (memory stall) durante la migración|1|0 (no se tienen en cuenta el impacto)|
|IgnoreDownTimeLessThan|Límite (en segundos) para ignorar los tiempos acumulados de paralización de la migración en el análisis de costes (se puede aumentar si las cargas de trabajo de las máquinas virtuales no son sensibles a los tiempos de bloqueo de la memoria durante la migración).|1|Un número elevado (sin tener en cuenta el tiempo de inactividad)|
|MinImbalance|Se utiliza para calcular el desequilibrio objetivo|50|0|
|MinGoodness|Mínima mejora del desequilibrio del cluster requerido para cada migración|Flexible|0 (Se tienen en cuenta todos los movimientos)|
|MaxMovesPerHost|Número máximo de movimientos por host recomendado por invocación|Flexible|0 (Sin límite)|

![opciones avanzadas drs](images/drs05.png){.thumbnail}

### Reglas DRS

Para gestionar las reglas de MV/host, diríjase a la pestaña `Configurar`.

![reglas drs](images/drs06.png){.thumbnail}

- Mantener las máquinas virtuales juntas: Las máquinas virtuales permanecen en el mismo host.
- Separar las máquinas virtuales: Separación de las MV en host diferentes dentro del mismo cluster.
- Máquinas virtuales a los host: Las máquinas virtuales que forman parte del grupo de MV del cluster especificado deben ejecutarse en el grupo de host indicado. Hay que crear grupos de MV y host en la pestaña `Grupos de MV/Host`.

La cuarta regla, «máquinas virtuales a máquinas virtuales», viene explicada en nuestra guía sobre la [funcionalidad HA](/pages/cloud/private-cloud/vmware_ha_high_availability).

![creación reglas drs](images/drs07.png){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>
