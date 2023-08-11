---
title: Creación de VLAN
excerpt: Cómo crear VLAN (vRack)
updated: 2020-11-18
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 18/11/2020**

## Objetivo

En una infraestructura Managed Bare Metal, dispondrá de 11 VLAN incluidas con el vRack.

**Esta guía explica cómo crear más VLAN.**

## Requisitos

- Tener acceso al cliente vSphere Web (HTML5).

## Procedimiento

### Crear VLAN

Los planes Managed Bare Metal incluyen dos switchs virtuales distribuidos (vDS). 

Estos *vDS* incluyen varios *portGroup*, cada uno de los cuales tiene su utilidad.

El primer vDS dispone de un único tipo de *puertoGroup*, el VMnetwork que permite comunicarse a internet.

El segundo vDS también dispone de un único tipo de *puertoGroup* , con VLAN que permiten aislar las comunicaciones privadas dentro del Managed Bare Metal y entre los distintos servicios de OVHcloud compatibles con el vRack (servidor dedicado, Public Cloud...). 

En este switch, se crean 11 VLAN de base (VLAN10 a VLAN20). Concediendo el permiso de `administrador` sobre el `acceso a la VLAN` en [la gestión de los usuarios de su área de cliente](/pages/bare_metal_cloud/managed_bare_metal/manager-ovhcloud#usuarios), podrá crear VLAN adicionales.

En primer lugar, acceda a la vista de `networking` de su cliente vSphere. Despliegue la carpeta **vrack**, haga clic derecho en el puerto **dVS** que termina en *-vrack*. A continuación, haga clic en `New Distributed Port Group`{.action}.

![vRack](images/07network.png){.thumbnail}

![New Distributed Port Group](images/08network1.png){.thumbnail}

El siguiente paso es asignar un nombre a su **PortGroup**:

![nombrar portgroup](images/09network2.png){.thumbnail}

A continuación, configure los parámetros recomendados por OVHcloud:

- **Port binding**: Static (reserva y asignación del puerto a una máquina virtual)
- **Port allocation**: Elastic (Permite ampliar en caliente el número de puertos)
- **Number of ports**: 24
- **VLAN type** : VLAN (los demás son [PVLAN](https://kb.vmware.com/s/article/1010691){.external} y Trunk)
- **VLAN ID** : 21 (sabiendo que el ID puede configurarse de 1 a 4096)
- Marque la opción *Customize default policies configuracion*.

![configuración portgroup](images/10network3.png){.thumbnail}

Tiene 3 parámetros de seguridad que pueden activarse en función de sus necesidades : 

- *Promiscuous mode* (Elimina todo filtrado de recepción que el adaptador de máquina virtual puede realizar para que el sistema operativo invitado reciba todo el tráfico observado en la red).
- *MAC address changes* (Afecta el tráfico que recibe una máquina virtual. Si la opción está definida en **Accept**, ESXi acepta las solicitudes de modificación de la dirección MAC efectiva en una dirección diferente de la MAC inicial.)
- *Forged transmits* (afecta al tráfico transferido desde una máquina virtual). Si la opción está configurada en **Accept**, ESXi no compara las direcciones MAC de origen con las de efecto).

> [!primary]
>
> El uso más frecuente de estos 3 parámetros es el CARP, especialmente utilizado en **pfSense**.
> 

![configuración de seguridad](images/11network4.png){.thumbnail}

Permite desactivar el [Traffic shaping](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.networking.doc/GUID-CF01515C-8525-4424-92B5-A982489BACE2.html){.external}.

![suavizado de tráfico](images/12network5.png){.thumbnail}

A nivel del Load Balancing, seleccione *Route Based on IP hash* que es el mejor método en cuanto a redundancia y repartición.

> [!warning]
>
> Atención al nivel de configuración del orden de la migración, es necesario poner la conexión montante `lag1` en *Active* (conexión entre la red virtual y la red física), ya que de lo contrario no será posible la comunicación entre los hosts.
>

![load balancing](images/13network6.png){.thumbnail}

El `Netflow` está desactivado (informe de actividad sobre los flujos de tráfico).

![netflow](images/14network7.png){.thumbnail}

Deje el valor `Block All Ports` en "No".

![finalización de portgroup](images/15network9.png){.thumbnail}

A continuación, se mostrará un resumen de los cambios realizados. Haga clic en `Finish`{.action} para confirmar la creación.

![finalización de portgroup](images/16network10.png){.thumbnail}

Aquí observamos que la **VLAN21** está bien disponible y es funcional.

![vlan creada](images/17network11.png){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
