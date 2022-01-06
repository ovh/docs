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

## Requisitos

- Tener al menos dos instancias de Public Cloud ejecutándose
- Tener una IP Failover
- Estar conectado al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}.

## Procedimiento

### Migración de la IP failover

En primer lugar, conéctese al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws), acceda a la sección `Public Cloud`{.action} y seleccione el servicio Public Cloud correspondiente. A continuación, seleccione Failover IP en el apartado **Network** .
En nuestro ejemplo, una IP failover se enruta hacia "Instancia_A" y queremos redirigirla hacia "Instancia_B".

![migrar IP failover](images/failover2022.png){.thumbnail}

Haga clic en los 3 puntos a la derecha de la IP de conmutación y, a continuación, modifique la instancia asociada.

![migrar IP failover](images/modify3.2022.png){.thumbnail}

Haga clic en la casilla junto al servidor de destino

![migrar IP failover](images/modify1.png){.thumbnail}

- Haga clic en «Adjuntar»

- Pasados unos segundos, el panel de control se actualizará y se mostrará el siguiente mensaje, confirmando que la migración se ha realizado correctamente:

![migrar IP failover](images/modify2.2022.png){.thumbnail}

> [!success]
> La IP de conmutación puede configurarse en el servidor de destino antes o después de realizar la migración. Si está preconfigurada, comenzará a responder en cuanto se haya realizado la operación de enrutamiento (*routing*).
>

## Más información

[Configurar una IP failover](https://docs.ovh.com/us/es/public-cloud/configurer-une-ip-failover/)

[Importar una IP Failover](https://docs.ovh.com/us/es/public-cloud/importar_una_ip_failover/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
