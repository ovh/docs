---
title: 'Aumentar las cuotas de Public Cloud'
excerpt: 'Cómo aumentar el límite en Public Cloud'
slug: increase-public-cloud-quota
legacy_guide_number: g1904
section: 'Gestión del proyecto'
order: 04
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización 25/10/2021**

## Objetivo

Por defecto, el número de recursos (RAM, CPU, espacio en disco, número de instancias...) y de proyectos que puede crear es limitado.

Si desea crear más, es necesario aumentar el límite.

**Esta guía explica cómo solicitar y aumentar una cuota de nube pública en el Panel de control OVHcloud.**

## Requisitos

- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).
- [Disponer de una forma de pago válida](../../billing/gestionar-formas-de-pago/) en el área de cliente de OVHcloud.


## Procedimiento

### Aumentar la cuota de recursos

De acuerdo con criterios internos (antigüedad, existencia de facturas pagadas, etc.), ahora es libre de solicitar aumentos de cuota para los recursos de sus proyectos de Public Cloud directamente desde el área de cliente de OVHcloud.

Puede aumentar la cuota de recursos de forma manual o automática.

#### Aumentar manualmente la cuota de recursos

Este procedimiento le permite solicitar manualmente un aumento de cuota y validarlo con un pago inicial (crédito Public Cloud).

Conéctese a su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), acceda a la sección `Public Cloud`{.action} y seleccione su proyecto de Public Cloud. En el apartado `Project Management`, haga clic en `Quota and Regions`{.action}.

![access quota](images/raisepciquota2021.png){.thumbnail}

Esta página presenta un resumen de los límites actuales de su proyecto, por región. Cuando se alcance el 80% de su cuota, aparecerá una advertencia junto a un recurso.

Para solicitar un aumento de cuota, haga clic en `Aumentar los límites de mi cuota`{.action}.

![raise-pci-quota](images/raisepciquota2021b.png){.thumbnail}

A continuación, haga clic en la flecha desplegable situada junto a "Seleccione el volumen" para ver la lista de cuotas actualmente disponibles para actualizar sus recursos a. En esta sección también se indica la cantidad que se debe pagar para beneficiarse de esos recursos.

![select quota](images/selectquotas.png){.thumbnail}

La tabla siguiente muestra los recursos que obtiene por cada cuota:

|Quota|Instancias|CPU/núcleos|RAM|Tamaño del volumen|Volúmenes|Snapshots|
|---|---|---|---|---|---|---|
|10 VMs|10|20|40GB|20TB|20|20|
|20 VMs|20|40|240GB|20TB|40|40|
|50 VMs|50|64|496GB|20TB|100|100|
|100 VMs|100|128|992GB|39TB|200|200|
|200 VMs|200|512|3.9TB|78TB|400|400|

Una vez seleccionado el volumen, haga clic en `Confirmar`{.action}. El pago se procesará lo antes posible.

> [!warning]
> **Tenga en cuenta que el proceso de facturación es inmediato.**
>
> Una vez que haga clic en `Confirmar`{.action}, el pedido se crea automáticamente y se carga en su cuenta.
>

#### Aumentar la cuota de recursos automáticamente mediante la función « Cuota autoscaling »

Esta opción le permite solicitar un aumento automático y gradual de su cuota de recursos. Su cuota se incrementará dependiendo de su uso, y en base a un cierto número de criterios internos.

Este no es un proceso instantáneo y la cuota de recursos aumenta a lo largo del tiempo.

Conéctese a su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), acceda a la sección `Public Cloud`{.action} y seleccione su proyecto de Public Cloud. En el apartado `Project Management`, haga clic en `Quota and Regions`{.action}.

En la barra lateral izquierda, haga clic en `Cuota y regiones`{.action}.

¿Hacer clic en el `?`{.action} para obtener más información sobre esta característica, haga clic en el `icono de alternar`{.action} para cambiar el estado a "**Activada**".

![auto scaling](images/autoscaling.png){.thumbnail}

Una vez hecho, se habilitará el *Autoscaling* para su proyecto y su cuota de recursos se incrementará con el paso del tiempo.

### Incremento de la cuota de sus proyectos Public Cloud

Si ha alcanzado el número máximo de proyectos Public Cloud autorizados en el área de cliente de OVHcloud y desea crear proyectos adicionales, envíe una solicitud a nuestros equipos de soporte.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.