---
title: 'Aumentar las cuotas de Public Cloud'
excerpt: "Descubra cómo solicitar el aumento de cuota para sus recursos de Public Cloud (RAM, CPU, espacio en disco, instancias) directamente desde su área de cliente OVHcloud."
updated: 2026-05-05
---

## Objetivo

Por defecto, el número de recursos (RAM, CPU, espacio en disco, número de instancias, etc.) y de proyectos que puede crear está limitado por razones de seguridad.

Si desea crear más, será necesario aumentar la cuota.

**Descubra cómo solicitar y aumentar una cuota de Public Cloud en su área de cliente OVHcloud.**

## Requisitos

- [Disponer de una forma de pago válida](/pages/account_and_service_management/managing_billing_payments_and_services/manage-payment-methods) en el área de cliente de OVHcloud.

## Procedimiento

<!-- CP-NAV-START:publiccloud-projects -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Ruta de navegación:** `Public Cloud`{.action} > Seleccione su proyecto

---
<!-- CP-NAV-END:publiccloud-projects -->

En el menú de la izquierda, haga clic en `Cuotas y regiones`{.action} bajo **Ajustes**.

![Página Cuotas y regiones que muestra las cuotas actuales del proyecto por región](images/raisepciquota1.png){.thumbnail}

Esta página presenta un resumen de las cuotas actuales de su proyecto por región. Aparece una advertencia cuando un recurso alcanza el 80 % de su cuota.

### Aumentar la cuota de recursos

De acuerdo con criterios internos (antigüedad, existencia de facturas pagadas, etc.), puede solicitar aumentos de cuota para los recursos de sus proyectos de Public Cloud directamente desde el área de cliente de OVHcloud.

> [!primary]
>
> Los nuevos usuarios de Public Cloud disfrutan de [$200 de crédito gratuito](/links/public-cloud/free-trial) que se activa automáticamente al crear el proyecto, válido durante un mes. La elegibilidad para el aumento de cuota depende de criterios como la antigüedad de la cuenta y la existencia de facturas pagadas. Por lo tanto, los usuarios en período de prueba pueden tener opciones de aumento de cuota limitadas mientras no se haya pagado su primera factura.
>

Puede aumentar la cuota de recursos de forma manual o automática.

#### Aumentar automáticamente su cuota de recursos con la función "Cuota autoscaling"

Esta opción le permite solicitar un aumento automático y progresivo de su cuota de recursos. La cuota se ajustará en función de su uso real **si supera el 60 % de su cuota actual durante 30 días consecutivos**, así como según un conjunto de criterios internos y financieros.

> [!primary]
>
> Este proceso no es adecuado para aumentos rápidos de cuota.
>

En la parte superior derecha de la página, la opción **Cuota autoscaling** está disponible:

- Para obtener más información sobre esta función, haga clic en el `?`{.action} junto a esta opción.
- Active la opción pulsando el botón situado a la derecha de la misma. Su estado pasará de *Desactivada* a *Activada*.

![Botón de alternancia Cuota autoscaling configurado en Activada](images/autoscaling.png){.thumbnail}

Una vez activado, el auto-scaling aumenta progresivamente la cuota de su proyecto en función de sus necesidades reales.

#### Aumentar manualmente su cuota de recursos

> [!primary]
>
> Si necesita aumentar su cuota y el botón `Aumentar los límites de mi cuota`{.action} no está disponible en su área de cliente, haga clic en el botón `Contactar con el soporte`{.action}.
>

![Botón Contactar con el soporte visible en la página de cuotas del área de cliente](images/contact_support_quota.png){.thumbnail}

Este procedimiento permite un aumento rápido e importante de sus cuotas (por ejemplo: escalado rápido, instancias GPU, etc.). Este método se basa en la compra inmediata de un crédito, del que se deducirán automáticamente todos los consumos en la nube.

Puede comprar diferentes cantidades de crédito.

Haga clic en el botón `Aumentar los límites de mi cuota`{.action}.

![Botón Aumentar los límites de mi cuota en la sección de cuotas de Public Cloud](images/raisepciquota2.png){.thumbnail}

A continuación, haga clic en la flecha desplegable situada junto a `Seleccione el volumen`{.action} para ver la lista de cuotas disponibles. En esta sección también se indica la cantidad que se debe pagar para beneficiarse de esos recursos.

![Lista desplegable que muestra los niveles de cuota disponibles con los costes asociados](images/selectquotas.png){.thumbnail}

La tabla siguiente muestra los recursos obtenidos para cada cuota:

|Cuota|Instancias|CPU/núcleos|RAM (GB)|Tamaño del volumen (TB)|Volúmenes (número máximo)|Copias de seguridad|Tamaño de las copias de seguridad (TB)|Floating IPs|Octavia Load Balancer|Gateway (Routers)|
|---|---|---|---|---|---|---|---|---|---|---|
|20 VMs|20|40|430|20|200|1200|120|30|10|4|
|50 VMs|50|64|507|20|500|3000|300|75|25|10|
|100 VMs|100|128|1015|40|1000|6000|600|300|50|10|
|200 VMs|200|512|4063|80|2000|12000|1200|600|50|50|

Una vez que haya seleccionado su volumen, haga clic en `Confirmar`{.action}. Su pago se procesará en breve.

> [!warning]
>
> **Cualquier aumento manual de cuota se facturará inmediatamente.**
>
> Después de hacer clic en el botón `Confirmar`{.action}, el pedido se crea automáticamente y el importe se deduce de su método de pago predeterminado.
>

Para una vista más detallada de sus recursos, acceda a la [interfaz Horizon](https://horizon.cloud.ovh.net/auth/login/). Una vez conectado, haga clic en `Proyecto`{.action} y, a continuación, en `Descripción general`{.action}.

### Aumentar la cuota de sus proyectos Public Cloud

Existen dos situaciones principales en las que podría necesitar un ajuste de cuota:

1. **Número máximo de proyectos alcanzado**: si ha alcanzado el número máximo de proyectos Public Cloud autorizados en su área de cliente y desea crear nuevos, debe enviar una solicitud a nuestro equipo de soporte.

2. **Otros tipos de solicitudes de cuota**: para cualquier otro límite (CPU, RAM, almacenamiento, etc.) o necesidad específica relacionada con sus proyectos Public Cloud, también puede ponerse en contacto con el soporte para solicitar un aumento.

> [!primary]
>
> Las solicitudes de cuota se tratan manualmente por nuestro equipo. El plazo de tratamiento puede variar según la complejidad de la solicitud. Le recomendamos que envíe su solicitud lo antes posible para evitar cualquier bloqueo en sus proyectos.

Para acelerar el tratamiento, le rogamos que especifique en su solicitud:

- el tipo de cuota a aumentar (número de proyectos, recursos, etc.);
- el uso previsto y la justificación de la necesidad;
- el período o la duración deseada para el aumento.

### Cuotas específicas y recursos particulares

Para ciertos recursos o servicios, pueden aplicarse cuotas específicas. Para obtener más información:

**Cuota S3**<sup>1</sup>: consulte la documentación oficial "[Object Storage - Limitaciones técnicas (EN)](/pages/storage_and_backup/object_storage/s3_limitations)".

**Cuota Managed Kubernetes Service (MKS)**: consulte la documentación oficial "[ETCD Quotas, usage, troubleshooting and error (EN)](/pages/public_cloud/containers_orchestration/managed_kubernetes/etcd-quota-error)".

## Más información

Interactúe con nuestra [comunidad de usuarios](/links/community).

<sup>1</sup>: S3 is a trademark of Amazon Technologies, Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies, Inc.
