---
title: 'Migrar una IP Failover'
excerpt: 'Migrar una IP Failover'
slug: migrar_una_ip_failover
legacy_guide_number: g1890
section: 'Red e IP'
---

**Última actualización: 4/12/2019**

## Objetivo
Esta guía explica cómo migrar una IP de conmutación de una instancia a otra. Por lo general, esta acción limita o elimina la posibilidad de que su servidor esté inaccesible y le permite:

- Migrar un sitio web a su «nueva versión»
- Ejecutar su actividad en un servidor replicado mientras realiza un mantenimiento o ejecuta una actualización en el servidor de producción.

## Requisitos:

- Tener al menos dos instancias de Public Cloud ejecutándose
- Tener una IP de conmutación
- Estar conectado al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}.

## Procedimiento

- Para comenzar, haga clic en la sección «IP de conmutación» a continuación de «Red» en el menú de la izquierda. Entonces podrá ver que nuestra IP de conmutación está enrutada hacia la instancia A, pero queremos redireccionarla hacia la instancia B.

![migrar IP failover](images/failover.png){.thumbnail}

Haga clic en los 3 puntos a la derecha de la IP de conmutación y, a continuación, modifique la instancia asociada.

![migrar IP failover](images/modify.png){.thumbnail}

Haga clic en la casilla junto al servidor de destino

![migrar IP failover](images/modify1.png){.thumbnail}

- Haga clic en «Adjuntar»

- Pasados unos segundos, el panel de control se actualizará y se mostrará el siguiente mensaje, confirmando que la migración se ha realizado correctamente:

![migrar IP failover](images/modify2.png){.thumbnail}


La IP de conmutación puede configurarse en el servidor de destino antes o después de realizar la migración. Si está preconfigurada, comenzará a responder en cuanto se haya realizado la operación de enrutamiento.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
