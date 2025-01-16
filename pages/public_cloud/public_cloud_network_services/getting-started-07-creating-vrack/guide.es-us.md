---
title: 'Configuración del vRack Public Cloud'
excerpt: 'Cómo configurar el vRack para sus instancias Public Cloud'
updated: 2024-11-07
---

## Objetivo

El [vRack](/links/network/vrack) OVHcloud es una solución de red privada que permite configurar el direccionamiento entre varios servidores dedicados de OVHcloud. Al mismo tiempo, le permite agregar [instancias de Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps) a su red privada para crear una infraestructura de recursos físicos y virtuales.

**Esta guía le ayudará a configurar sus instancias de Public Cloud en el vRack.**

## Requisitos

- Tener un [proyecto de Public Cloud.](/pages/public_cloud/compute/create_a_public_cloud_project)
- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager).
- Haber [creado un usuario de OpenStack](/pages/public_cloud/compute/create_and_delete_a_user) (opcional).
- Conocimientos básicos de redes.

## Presentación de las interfaces

La creación de un vRack o la adición de una instancia a la red se pueden realizar mediante el área de cliente de OVHcloud, las APIv6 de OVHcloud, las API de OpenStack, la interfaz Horizon o Terraform.

Según su perfil técnico y sus necesidades, deberá elegir qué interfaz o método utilizar. Así pues, para cada acción, le proponemos los distintos pasos posibles.

**Para empezar, a continuación se proporciona una breve descripción de las posibles acciones según el método/interfaz elegido.**

### Área de cliente de OVHcloud

El [área de cliente de OVHcloud](/links/manager) es una interfaz completa y únicamente visual, lo que la convierte en una interfaz ideal para la gestión de varias VLAN. También podrá personalizar el rango de IP privadas, que por defecto es 10.x.x.x/16.

Las VLAN se desplegarán en la Región seleccionada. También podrá activar las puertas de enlace, las distribuciones DHCP, etc.

También podrá gestionar la facturación de sus servicios desde el área de cliente de OVHcloud.

### Interfaz Horizon

Interfaz visual independiente de OVHcloud, [Horizon](https://horizon.cloud.ovh.net/auth/login/){.external} es la implementación original del panel de control de OpenStack, que proporciona una interfaz de usuario web a los servicios OpenStack, incluyendo Nova, Swift, Keystone, etc.

Esta completa interfaz técnica le permite gestionar casi todas las acciones de OpenStack. Será una de las interfaces necesarias si desea gestionar más de dos VLAN, añadir interfaces de red privadas a sus instancias, gestionar imágenes personalizadas, etc.

Consulte la guía [Conectarse a Horizon](/pages/public_cloud/compute/introducing_horizon) para familiarizarse con Horizon.

> [!primary]
> Horizon que funciona por zonas. No olvide elegir su zona geográfica de trabajo en la parte superior izquierda de su interfaz (GRA5, SBG3, BHS1, etc.).
>

### OVHcloud APIv6

Cada acción que realice en el área de cliente de OVHcloud recurre a las [APIv6 de OVHcloud](https://ca.api.ovh.com/).
Puede incluso ir más lejos en las API que en el área de cliente.

La interfaz es menos visual que el área de cliente de OVHcloud, pero le permitirá realizar un gran número de acciones. De este modo, podrá gestionar y personalizar sus VLAN, añadir interfaces a sus instancias o crear servidores altamente personalizados.

A veces deberá obtener más información antes de utilizar una API específica.

Solo tiene que acceder a las API desde [nuestra página web](https://ca.api.ovh.com/), pero también puede crear sus scripts PHP o Python para llamar.

De este modo, podrá automatizar libremente las tareas básicas mediante scripts, optimizar sus propias funciones, etc.

Consulte la guía [Primeros pasos con las API de OVHcloud](/pages/manage_and_operate/api/first-steps), para familiarizarse con el uso de las APIv6 de OVHcloud.

### API OpenStack

Una vez que haya descargado e instalado las herramientas OpenStack, es posible administrar los servicios de Public Cloud con comandos Linux o Windows.

Este método requiere conocimientos Linux o Windows para aprovecharlo, pero permite disfrutar de toda la potencia de OpenStack a través de este método.

Según la capa que quiera gestionar, deberá utilizar el cliente **Nova** (Compute), **Neutron** (red), **Glance** (Image) o **Swift** (Object Storage). El último hijo de la familia, el cliente OpenStack, le permite gestionar directamente las capas de OpenStack.

Gracias a la API de OpenStack, también puede automatizar esta gestión a través de sus scripts.

Para familiarizarse con la API de OpenStack, consulte las siguientes guías:

- [Preparar el entorno para utilizar la API de OpenStack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api)
- [Cargar las variables de entorno necesarias para OpenStack](/pages/public_cloud/compute/loading_openstack_environment_variables)

En ese caso, podrá utilizar las siguientes API dedicadas a OpenStack:

- Nova (compute)
- Glance (image)
- Cinder (image)
- Neutron (network)

> [!primary]
> En algunos casos será más fácil utilizar las API OpenStack y en otros, las API Nova, Neutron, etc.
>
> Asimismo, algunas funcionalidades pueden estar ausentes de la API OpenStack en función de la versión de su cliente y su sistema operativo.
En esta guía, hemos elegido las alternativas más sencillas e intuitivas.
Si desea más información sobre su uso, consulte la [documentación oficial de OpenStack](https://docs.openstack.org/){.external}.
>

Para más información, consulte esta guía: [Configuración del vRack Public Cloud con OpenStack CLI](/pages/public_cloud/public_cloud_network_services/getting-started-09-creating-vrack-with-openstack).

### Terraform

Terraform también permite gestionar las infraestructuras de OVHcloud.

Para ello, elija el proveedor y el recurso de Terraform adecuados. Para más información, consulte nuestra [guía de uso de Terraform (EN)](/pages/manage_and_operate/terraform/terraform-at-ovhcloud).

## Procedimiento

### Etapa 1: Activar y gestionar un vRack <a name="activation"></a>

#### Desde el área de cliente de OVHcloud

> [!primary]
> No se aplicará a los proyectos recién creados que se entreguen automáticamente con un vRack. Para ver el vRack una vez creado el proyecto, acceda al menú `Bare Metal Cloud`{.action} y haga clic en `Network`{.action} en la pestaña de la izquierda. Haga clic en `Red privada vRack`{.action} para ver el vRack(s).
>

Si tiene un proyecto más antiguo y no tiene un vRack, debe contratar uno. Este producto es gratuito y solo tarda unos minutos en estar disponible.

Vaya al menú `Bare Metal Cloud`{.action} y haga clic en el botón `Contratar`{.action}. En este menú, haga clic en la opción `vRack`{.action}.

![Contratar el vRack](images/ordering_vrack_2024.png){.thumbnail}

Será redirigido a otra página para validar el pedido. La operación tardará unos minutos.

Una vez activado el servicio, puede consultarlo en el área de cliente, en la sección `Bare Metal Cloud`{.action} > `Network`{.action} > `Red privada vRack`{.action}. Bajo la denominación «pn-xxxxx».

En la lista de servicios compatibles, seleccione el proyecto que quiera añadir al vRack y haga clic en el botón `Añadir`{.action}.

![agregar proyecto](images/addprojectvrack.png){.thumbnail}

Para continuar la configuración del vRack desde el área de cliente de OVHcloud, continúe leyendo esta guía: [Crear una VLAN en el vRack desde el área de cliente de OVHcloud](./#crear-una-red-privada-desde-el-area-de-cliente-de-ovhcloud).

#### Desde la APIv6 de OVHcloud

Para activar y gestionar un vRack desde la APIv6 de OVHcloud, haga clic [aquí](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api#step-1-activating-and-managing-a-vrack) (EN), para consultar la guía específica sobre este método.

### Etapa 2: Crear una red privada en el vRack

Es necesario crear una red privada con una red de área local virtual (VLAN) para que las instancias conectadas al vRack puedan comunicarse entre sí.

En la solución Public Cloud, puede crear hasta 4000 VLAN en un único vRack. Esto significa que puede utilizar cada dirección IP privada hasta 4000 veces.
Así, por ejemplo, la IP 192.168.0.10 de la VLAN 2 es diferente de la IP 192.168.0.10 de la VLAN 42.

Esto puede ser útil para segmentar el vRack entre varias redes virtuales.

Desde el área de cliente de OVHcloud, puede asignar la VLAN que desee y personalizar el rango de IP privadas.

> [!primary]
> En los servidores dedicados, por defecto está en la VLAN 0. Para que la infraestructura OpenStack funcione, deberá indicar el número de su VLAN directamente a nivel de la infraestructura.
>
> A diferencia de los servidores dedicados, no es necesario « etiquetar » la VLAN directamente en una instancia de Public Cloud. 
>
> Para más información sobre la gestión de las VLAN del vRack de los servidores dedicados, consulte la siguiente guía: [Crear varias VLAN en el vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack).

> [!warning]
> El vRack es una infraestructura gestionada a nivel de OVHcloud, por lo que solo podrá administrarla desde el área de cliente de OVHcloud y las APIv6 de OVHcloud.
>
> OpenStack no está situada al mismo nivel de la infraestructura, por lo que no podrá personalizar las VLAN a través de Horizon o de las API OpenStack.
>

#### Crear una red privada desde el área de cliente de OVHcloud

Una vez creado el vRack, el siguiente paso es crear una red privada.

En la pestaña Public Cloud , haga clic en `Private Network`{.action} en el menú de la izquierda, en **Network**.

![Creación de la VLAN](images/vrack2022-03.png){.thumbnail}

A continuación, haga clic en `Crear una red privada`{.action}. La página siguiente le permitirá personalizar varios parámetros.

En el paso 1, seleccione la región en la que quiere crear la red privada.

![select region](images/vrack5-2024.png){.thumbnail}

En la siguiente etapa podrá elegir entre una serie de opciones:

![create network](images/vrack6-2022.png){.thumbnail}

En el campo **Nombre de la red privada**, defina un nombre para la red privada.

**Cree un servicio Gateway y conéctese a la red privada**

Seleccione esta opción si quiere crear instancias únicamente con una red privada. Para más información, consulte las siguientes guías: [Creating a private network with Gateway (EN)](/pages/public_cloud/public_cloud_network_services/getting-started-02-create-private-network-gateway) y [Crear y conectarse a una instancia de Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps).

> [!warning]
> Si la opción aparece atenuada, significa que es incompatible con la región seleccionada. Para más información, consulte nuestra página sobre la [disponibilidad de productos de Public Cloud para cada región](/links/public-cloud/regions-pci).
>

**Opciones de red de la capa 2 (L2)**

Si marca la casilla `Indicar un ID de VLAN`, deberá elegir un número de VLAN de 0 a 4000.

Si no activa esta casilla, el sistema asignará un número de VLAN aleatoria.

Si desea que los servidores dedicados de OVHcloud se comuniquen con una VLAN « etiquetada », consulte la siguiente guía: [Crear varias VLAN en el vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack).

**Opciones de distribución de direcciones DHCP**

El intervalo DHCP predeterminado es 10.0.0.0/16. Puede utilizar otro rango privado de su elección.

Una vez hecha su elección, haga clic en `Crear`{.action} para iniciar el proceso.

> [!primary]
> La creación de la red privada puede tardar varios minutos.
>

#### Crear una red privada desde las APIv6 de OVHcloud <a name="vlansetup"></a>

Para crear una red privada desde las APIv6 de OVHcloud, haga clic [aquí](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api#step-3-creating-a-vlan-in-the-vrack) (EN), para consultar la guía específica.

#### Crear una red privada a través de Terraform

En Terraform, necesitas usar el proveedor openstack. Puedes descargar un script terraform de ejemplo completo desde [este repositorio](https://github.com/yomovh/tf-at-ovhcloud/tree/main/private_network).

La parte específica de OVHcloud para la integración con vRack es el parámetro `value_specs`.

```python
resource "openstack_networking_network_v2" "tf_network" {
  name = "tf_network"
  admin_state_up = "true"
  value_specs = {
    "provider:network_type"    = "vrack"
    "provider:segmentation_id" = var.vlan_id
  }
}
resource "openstack_networking_subnet_v2" "tf_subnet"{
  name       = "tf_subnet"
  network_id = openstack_networking_network_v2.tf_network.id
  cidr       = "10.0.0.0/16"
  enable_dhcp       = true
}
```

### Etapa 3: Integrar una instancia en el vRack

Puede darse dos situaciones:

- La instancia aún no existe.
- La instancia ya existe y debe añadirla al vRack.

**Caso de una nueva instancia**

#### Desde el área de cliente de OVHcloud

Consulte la guía [Crear una instancia desde el área de cliente](/pages/public_cloud/compute/public-cloud-first-steps). Al crear una instancia, podrá especificar, en el paso 5, un modo de red y, a continuación, una red privada en la que integrar su instancia.

![attach new instance](images/network-selection.png){.thumbnail}

> [!warning]
> Al crear una nueva instancia, solo podrá conectar su instancia a un único vRack desde el área de cliente de OVHcloud.
> Para añadir varias interfaces diferentes, debe utilizar las API de OpenStack u Horizon.
>

#### Desde la APIv6 de OVHcloud

Haga clic [aquí](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api#step-4-integrating-an-instance-into-the-vrack) (EN), para consultar la guía específica sobre este método.

**Caso de una instancia ya existente**

El área de cliente de OVHcloud permite asociar una instancia a una o más redes privadas, pero no ofrece una configuración avanzada de las interfaces de red. Si quiere personalizarlas más, deberá administrarlas, o bien a través de las API de OVHcloud, o bien a través de las API de OpenStack, o bien a través de Horizon.

Añada una nueva interfaz de red al servidor, además de la que ya existe.

Por ejemplo, si tiene una interfaz pública *eth0*, agregará la interfaz *eth1*.

> [!warning]
> La configuración de esta nueva interfaz rara vez es automática.
> Deberá configurarla en DHCP o IP fija según su infraestructura.
>

#### Desde el área de cliente de OVHcloud

Conéctese al [área de cliente de OVHcloud](/links/manager), acceda a la sección `Public Cloud`{.action} y seleccione el proyecto de Public Cloud correspondiente en la parte superior izquierda.

En la columna izquierda, haga clic en `Instances`{.action}. Haga clic en el botón `...`{.action} a la derecha de la instancia correspondiente y, seguidamente, en `Detalles de la instancia`{.action}.

![detail instance](images/vrack2021.png){.thumbnail}

Se mostrará el panel de control de la instancia. Haga clic en el botón `...`{.action} a la derecha de "Red(es) privada(s)" y, seguidamente, en `Asociar una red`{.action}.

![conexión de red](images/vrack2021-01.png){.thumbnail}

En la nueva ventana, seleccione la red o redes privadas que quiera asociar a la instancia y haga clic en `Asociar`{.action}.

![conexión de red](images/vrack9.png){.thumbnail}

#### Gestión de las interfaces de red desde las APIv6 de OVHcloud

Haga clic [aquí](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api#in-case-of-an-existing-instance) (EN), para consultar la guía específica sobre este método.

#### Gestión de las interfaces de red desde OpenStack Horizon

Conéctese a la interfaz [Horizon](https://horizon.cloud.ovh.net/auth/login/){.external} utilizando el método que se indica en la [primera parte de esta guía](./#interfaz-horizon).

Conéctese a su zona de trabajo:

![connexion Horizon](images/horizon1.png){.thumbnail}

Acceda a `Compute` y seleccione `Instances`.

![Horizon compute instances](images/horizon2.png){.thumbnail}

**Añadir una interfaz privada**

Para añadir una interfaz, haga clic en la flecha que le permitirá acceder a las acciones que pueda realizar en la instancia, en la columna "Actions". Haga clic en `Attach Interface`{.action}.

![Horizon attach interface](images/horizon3.png){.thumbnail}

Seleccione la interfaz y acepte:

![Horizon attach interface](images/horizon4.png){.thumbnail}

> [!primary]
> El servicio de OVHcloud dispondrá de una nueva interfaz de red, además de la interfaz pública (Ext-net).
><br>En el resumen de la instancia, podrá ver la dirección IP privada asignada automáticamente a su interfaz.
><br>que deberá utilizar configurando la interfaz a través del DHCP o utilizando sus propias IP mediante una configuración de IP estática.
>

**Eliminación de una interfaz privada**

> [!warning]
> La eliminación de una interfaz es definitiva.
>
> En caso de que elimine la interfaz "Ext-Net" (IP pública), esta dirección se liberará y volverá a estar en circulación. Así que no se podría reasignar.
><br>Esta operación solo es necesaria si desea aislar su servidor en el vRack (interfaz "Ext-Net") o sacarlo de una VLAN.
>

Para eliminar una interfaz, haga clic en la flecha que le permitirá acceder a las acciones que pueda realizar en la instancia, en la columna "Actions". Haga clic en `Detach Interface`{.action}.

![Horizon detach interface](images/horizon5.png){.thumbnail}

Seleccione la interfaz que desea eliminar y acepte:

![Horizon detach interface](images/horizon6.png){.thumbnail}


## Más información

[Configuración del vRack Public Cloud desde las APIv6 de OVHcloud](/pages/public_cloud/public_cloud_network_services/getting-started-08-creating-vrack-with-api) (EN)

[Servidores dedicados - Crear varias VLAN en el vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack)

Si necesita formación o asistencia técnica para implantar nuestras soluciones, póngase en contacto con su representante de ventas o haga clic en [este enlace](/links/professional-services) para obtener un presupuesto y solicitar un análisis personalizado de su proyecto a nuestros expertos del equipo de Servicios Profesionales.

Interactúe con nuestra [comunidad de usuarios](/links/community).