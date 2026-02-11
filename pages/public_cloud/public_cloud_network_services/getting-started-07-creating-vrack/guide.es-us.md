---
title: 'Configuración del vRack Public Cloud'
excerpt: 'Cómo configurar el vRack para sus instancias Public Cloud'
updated: 2025-12-23
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objetivo

El [vRack](/links/network/vrack) es una red privada que le permite configurar la dirección entre varios Servidores dedicados de OVHcloud. Pero también le permite añadir [instancias Public Cloud](/links/public-cloud/compute) a su red privada para crear una infraestructura de recursos físicos y virtuales.

**Este guía tiene como objetivo acompañarle en la configuración de sus instancias Public Cloud dentro de su vRack.**

## Requisitos

- Tener un [proyecto Public Cloud](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project)
- Estar conectado a su [área de cliente de OVHcloud](/links/manager)
- Tener [creado un usuario OpenStack](/pages/public_cloud/public_cloud_cross_functional/create_and_delete_a_user) (opcional)
- Conocimientos básicos de redes

## Presentación de las interfaces

Ya sea para crear su vRack o para añadir una instancia en esta red, puede que tenga que utilizar el área de cliente de OVHcloud, las APIv6 de OVHcloud, las API OpenStack, la interfaz Horizon o Terraform.

Según su perfil técnico y sus necesidades, puede que tenga que elegir qué interfaz o método utilizar. Así, para cada acción, le propondremos las diferentes opciones posibles.

**A continuación, se muestra un breve descriptivo de las acciones posibles según el método o interfaz elegido:** <a name="horizon"></a>

/// details | área de cliente de OVHcloud

[El área de cliente de OVHcloud](/links/manager) es una interfaz completamente y exclusivamente visual, lo que la convierte en una interfaz ideal para la gestión de varios VLAN. También tendrá la posibilidad de personalizar el rango de IP privada, que por defecto es 10.1.0.0/16.

Los VLAN se desplegarán en la región seleccionada. También tendrá la posibilidad de activar o no las pasarelas, activar las distribuciones DHCP, etc.

También podrá gestionar la facturación de sus servicios a través de su área de cliente de OVHcloud.

///

/// details | Interfaz Horizon

Interfaz visual independiente de OVHcloud, [Horizon](https://horizon.cloud.ovh.net/auth/login/) es la implementación original del panel de control de OpenStack, que proporciona una interfaz de usuario web a los servicios OpenStack, entre ellos Nova, Swift, Keystone, etc.

Esta interfaz completa y técnica le permite gestionar casi todas las acciones de OpenStack. Será una de las interfaces necesarias si desea gestionar más de dos VLAN, añadir interfaces de red privadas a sus instancias, gestionar imágenes personalizadas, etc.

Consulte el guía "[Presentación de Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon)" para familiarizarse con Horizon.

> [!primary]
> Como Horizon funciona por zonas, recuerde elegir su zona geográfica de trabajo en la parte superior izquierda de su interfaz (GRA5, SBG3, BHS1, etc.)
>

///

/// details | APIv6 OVHcloud

Cada acción que realice en el área de cliente de OVHcloud llama a las [APIv6 de OVHcloud](/links/api). 
Incluso puede ir más allá en las API que en su espacio cliente.

La interfaz es menos visual que el área de cliente de OVHcloud, pero le permitirá realizar un gran número de acciones. Podrá gestionar y personalizar sus VLAN, añadir interfaces a sus instancias o crear servidores altamente personalizados.

A veces será necesario recuperar varias informaciones antes de utilizar una API específica.

Puede acceder fácilmente a las API desde [nuestra página web](/links/api), pero también crear sus scripts PHP o Python para llamarlas.

De este modo, podrá automatizar libremente las tareas básicas mediante scripts, optimizar sus propias funciones, etc.

Consulte el guía "["Primeros pasos con las API de OVHcloud](/pages/manage_and_operate/api/first-steps)" para familiarizarse con el uso de las APIv6 de OVHcloud.

///

/// details | API OpenStack

Es posible administrar los servicios Public Cloud mediante líneas de comandos de Linux o Windows, después de descargar e instalar las herramientas OpenStack.

Este método requiere buenos conocimientos de Linux o Windows para aprovecharlo, pero le permite aprovechar toda la potencia de OpenStack mediante este medio.

Según la capa que desee gestionar, deberá utilizar el cliente Nova (Compute), Neutron (red), Glance (Imagen) o también Swift (Object Storage). El último nacido de la familia, el cliente OpenStack, le permite gestionar directamente casi todas las capas de OpenStack.

Gracias a la API OpenStack, también puede automatizar fácilmente esta gestión a través de sus scripts.

Para familiarizarse con la API OpenStack, consulte primero los siguientes guías:

- [Preparar el entorno para utilizar la API OpenStack](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api)
- [Cargar las variables de entorno necesarias para OpenStack](/pages/public_cloud/public_cloud_cross_functional/loading_openstack_environment_variables)

Podrá, según su necesidad, utilizar las API dedicadas a OpenStack:

- Nova (Compute)
- Glance (imagen)
- Cinder (imagen)
- Neutron (red)

> [!primary]
> En algunos casos, será más sencillo utilizar las API OpenStack y en otros, las API Nova, Neutron, etc.
>
> Del mismo modo, ciertas funcionalidades pueden faltar en la API OpenStack según la versión de su cliente y de su sistema operativo.
> En el marco de este guía, se ha optado por proponerle las alternativas más sencillas y intuitivas.
> Puede consultar en cualquier momento la [documentación oficial de OpenStack](https://docs.openstack.org/fr/) si desea profundizar en su uso.
>

///

/// details | CLI OpenStack

Puede gestionar sus servicios Public Cloud y su vRack de OVHcloud directamente desde su terminal Linux o Windows gracias a la CLI OpenStack.

Esta interfaz permite gestionar todas las capas OpenStack:

- Nova: instancias (Compute)
- Neutron: redes
- Glance: imágenes
- Cinder: volúmenes

La CLI centraliza estas funcionalidades y puede integrarse en sus scripts para automatizar sus tareas.

Antes de comenzar, consulte los siguientes guías:

- [Preparar el entorno para utilizar la API OpenStack](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api)
- [Cargar las variables de entorno necesarias para OpenStack](/pages/public_cloud/public_cloud_cross_functional/loading_openstack_environment_variables)

> [!primary]
>
> La CLI OpenStack es útil para gestionar su vRack, sin embargo ciertas funciones pueden variar según la versión del cliente o del sistema operativo. Consulte la [documentación oficial de OpenStack](https://docs.openstack.org/fr/).
>

///

/// details | Terraform

Terraform también permite gestionar las infraestructuras de OVHcloud.

Para ello, debe elegir el proveedor y el recurso Terraform adecuados. Encuentre más información en nuestro [guía de uso de Terraform](/pages/manage_and_operate/terraform/terraform-at-ovhcloud).

///

## Procedimiento

### Paso 1: Activar y gestionar un vRack <a name="activation"></a>

> [!warning]
>
> El vRack se gestiona a nivel de infraestructura de OVHcloud, lo que significa que solo puede administrarlo desde su área de cliente y las APIv6 de OVHcloud.
>

> [!tabs]
> Desde el área de cliente de OVHcloud
>> > [!primary]
>> >
>> > Este paso no se aplica a los proyectos recientemente creados, que ahora se entregan automáticamente con un vRack. Para visualizar el vRack una vez creado el proyecto, vaya a la sección `Network`{.action} y haga clic en `Red privada vRack`{.action} para ver el o los vRacks.
>> >
>>
>> Si tiene un proyecto más antiguo y no dispone de un vRack, deberá pedirlo. Este producto es gratuito y la entrega solo tarda unos minutos.
>>
>> En el menú situado a la izquierda de la pantalla, haga clic en el botón `Añadir un servicio`{.action} (icono de cesta de compra). Utilice el filtro situado en la parte superior de la página o desplácese hacia abajo para encontrar el servicio `vRack`{.action}.
>>
>> ![Comprar el vrack](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/orderingvrack25.png){.thumbnail}
>>
>> Será redirigido a otra página para validar el pedido, la operación solo tardará unos minutos.
>>
>> Una vez que el servicio esté activo, lo encontrará en su área de cliente en la sección `Network`{.action} > `Red privada vRack`{.action}, con la denominación "pn-xxxxxx".
>>
>> Haga clic en su vRack, seleccione el proyecto que desea añadir en la lista de servicios compatibles y haga clic en el botón `Añadir`{.action}.
>>
>> ![añadir el proyecto](images/addprojectvrack.png){.thumbnail}
>>
>> Para continuar la configuración del vRack desde el área de cliente de OVHcloud, siga leyendo este guía desde el [paso 2: Crear una red privada en el vRack](#create-pn-in-vrack), pestaña **Desde el área de cliente de OVHcloud**.
>>
> Desde las APIv6 de OVHcloud
>>
>> **Paso 1: Activar y gestionar un vRack**
>>
>> Conéctese a las APIv6 de OVHcloud siguiendo el guía "[Primeros pasos con las API de OVHcloud](/pages/manage_and_operate/api/first-steps)".
>>
>> Una vez autenticado, siga los pasos descritos a continuación:
>>
>> **Creación del carrito**
>>
>> > [!api]
>> >
>> > @api {v1} /order POST /order/cart
>> >
>>
>> > [!primary]
>> >
>> > Esta llamada creará un identificador para su "carrito". Puede añadir tantos artículos como desee antes de validar.
>> >
>> > En este caso, el pedido de un vRack es gratuito. Recupere el número de su carrito (cartId), será indispensable para continuar.
>> >
>>
>> **Recuperación de las informaciones necesarias para el pedido del vRack**
>>
>> > [!api]
>> >
>> > @api {v1} /order GET /order/cart/{cartId}/vrack
>> >
>>
>> > [!primary]
>> >
>> > Esta llamada le permitirá recuperar todas las informaciones necesarias para el pedido del vRack. Copie los siguientes elementos:
>> >
>> > *cartId*, *duration*, *planCode*, y *pricingMode*.
>> >
>>
>> **Añadido del vRack al carrito**
>> 
>> > [!api]
>> >
>> > @api {v1} /order POST /order/cart/{cartId}/vrack
>> >
>>
>> > [!primary]
>> >
>> > Esta llamada le permitirá añadir el vRack al carrito añadiendo todas las informaciones necesarias para el pedido.
>> >
>> > En el caso del vRack, esto daría por ejemplo:
>> >
>> > cartId: [identificador de su carrito]
>> >
>> > duration: "P1M"
>> >
>> > planCode: "vrack"
>> >
>> > pricingMode: "default"
>> >
>> > quantity: 1
>> >
>>
>> Una vez que haya validado el pedido, obtendrá un número de artículo ("itemId"). Consérvelo, le será útil si desea realizar modificaciones antes de validar el carrito.
>>
>> **Validación del carrito**
>>
>> Una vez que todos los artículos estén en su carrito, deberá validar:
>>
>> > [!api]
>> >
>> > @api {v1} /order POST /order/cart/{cartId}/checkout
>> >
>>
>> > [!primary]
>> >
>> > Esta llamada validará el carrito y le creará un bon de commande (orderId). Consérvelo, será necesario para la validación del pedido.
>> >
>>
>> **Validación del pedido final**
>>
>> Para validar el pedido, tiene dos métodos posibles:
>>
>> - Pasar por la URL visible cuando el carrito se valida.  
>> Ejemplo de URL: https://www.ovh.com/cgi-bin/order/displayOrder.cgi?orderId=12345678&orderPassword=xxxxxxxxxx
>>
>> - Validar mediante la llamada siguiente:
>>
>> > [!api]
>> >
>> > @api {v1} /me POST /me/order/{orderId}/payWithRegisteredPaymentMean
>> >
>>
>> > [!primary]
>> >
>> > Aunque se trata de un bon de commande de 0 €, es necesario simular un pago del bon de commande (orderId). Su bon de commande será entonces validado y su tratamiento comenzará.
>> >
>>
>> Una vez que el bon de commande gratuito se haya validado, puede ser necesario un plazo de unos minutos para que el vRack esté activo.
>>
>> **Paso 2: Añadir su proyecto Public Cloud al vRack**
>>
>> Una vez que el vRack esté activo, deberá integrar su o sus proyectos Public Cloud en el vRack.
>>
>> Conéctese a las APIv6 de OVHcloud siguiendo el guía "[Primeros pasos con las API de OVHcloud](/pages/manage_and_operate/api/first-steps)".
>>
>> En el caso de que el identificador del proyecto Public Cloud no sea conocido, las llamadas siguientes le permitirán recuperarlo.
>>
>> **Identificación del proyecto**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project
>> >
>>
>> > [!primary]
>> >
>> > Esta llamada permite recuperar la lista de proyectos.
>> >
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}
>> >
>>
>> > [!primary]
>> >
>> > Esta llamada permite identificar el proyecto gracias al campo "description".
>> >
>>
>> **Añadido del proyecto al vRack**
>>
>> Una vez conocido el identificador del proyecto y el nombre del vRack, su asociación se hace mediante la llamada siguiente:
>>
>> > [!api]
>> >
>> > @api {v1} /vrack POST /vrack/{serviceName}/cloudProject
>> >
>>
>> Rellene los campos de la llamada con las informaciones recogidas anteriormente:
>>
>> - **serviceName**: nombre del vRack en la forma "pn-xxxxxx".  
>> - **project**: identificador del proyecto Public Cloud, en forma de cadena de 32 caracteres.
>>
>> > [!primary]
>> >
>> > Esta llamada inicializa la asociación del proyecto al vRack, hay que recuperar entonces el identificador de la tarea para verificar su avance.
>> >
>>
>> **Verificación del avance de la tarea de añadido**
>>
>> Puede consultar la evolución del añadido del proyecto en el vRack gracias a esta llamada:
>>
>> > [!api]
>> >
>> > @api {v1} /vrack GET /vrack/{serviceName}/cloudProject/{project}
>> >
>>
>> > [!primary]
>> >
>> > Esta llamada es opcional y permite simplemente verificar el estado de la tarea. Una vez que esta esté terminada, puede pasar al paso siguiente.
>> >
>>
 
### Paso 2: Crear una red privada en el vRack <a name="create-pn-in-vrack"></a>

Es necesario crear una red privada con una red local virtual (VLAN) para que las instancias conectadas al vRack puedan comunicarse entre sí.

En la oferta Public Cloud, puede crear hasta 4 000 VLAN en un solo vRack. Esto significa que puede utilizar cada dirección IP privada hasta 4 000 veces.
Así, por ejemplo, la IP 192.168.0.10 de la VLAN 2 es diferente de la IP 192.168.0.10 de la VLAN 42.

Esto puede serle útil para segmentar su vRack entre varios redes virtuales.

Desde el área de cliente de OVHcloud y las APIv6 de OVHcloud, podrá personalizar todos los parámetros: modo y región de implementación, nombre e ID de la VLAN, rango de direcciones IP privadas (por ejemplo, 10.0.0.0/16), DHCP y puerta de enlace.

> [!primary]
> En los Servidores dedicados, por defecto, está en la VLAN 0. El funcionamiento de la infraestructura OpenStack hace que deba especificar directamente el número de su VLAN a nivel de infraestructura.
>
> A diferencia de los Servidores dedicados, no es necesario "etiquetar" directamente la VLAN en una instancia Public Cloud.
>
> Para más información sobre la gestión de las VLAN del vRack de los Servidores dedicados, consulte este guía: [Crear múltiples VLAN en el vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack).

> [!warning]
> El vRack es una infraestructura gestionada a nivel de OVHcloud, por lo que solo podrá administrarlo a través del área de cliente de OVHcloud y de las APIv6 de OVHcloud.
>
> OpenStack no está situado al mismo nivel de la infraestructura, por lo que no podrá personalizar las VLAN a través de la interfaz Horizon o de las API OpenStack.
>

> [!tabs]
> Desde el área de cliente de OVHcloud
>> Una vez que su vRack esté creado, el siguiente paso consiste en crear una red privada.
>>
>> En la pestaña `Public cloud`{.action}, haga clic en `Private Network`{.action} en el menú de la izquierda bajo **Network**.
>>
>> ![Creación de VLAN](images/vrack2022-03.png){.thumbnail}
>>
>> Haga clic ahora en `Crear una red privada`{.action}. La página siguiente le permitirá personalizar varios parámetros.
>>
>> Para empezar, seleccione un modo de despliegue así como la región en la que desea crear la red privada.
>>
>> ![seleccionar región](images/vrack5-2024.png){.thumbnail}
>>
>> En la siguiente etapa, se le presentan varias opciones:
>>
>> ![crear red](images/vrack6-2022.png){.thumbnail}
>>
>> En el campo **Nombre de la red privada**, defina un nombre para su red privada.
>>
>> **Opción de red de la capa 2**
>>
>> Si marca la casilla `Establecer un ID de VLAN`{.action}, deberá elegir un número de VLAN comprendido entre 0 y 4000.
>>
>> Si no marca esta casilla, el sistema asignará un número de VLAN aleatorio.
>>
>> En el caso en que deba hacer comunicar Servidores dedicados OVHcloud con VLAN etiquetados, consulte el siguiente guía: [Crear varios VLAN en el vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack).
>>
>> **Opciones de distribución de direcciones DHCP**
>>
>> El rango DHCP por defecto es 10.1.0.0/16. Puede utilizar otro rango privado a su elección o desactivar el DHCP para esta red privada.
>>
>> **Opciones de puerta de enlace de red**
>>
>> - **Anunciar la primera dirección de un CIDR determinado como puerta de enlace predeterminada (opción DHCP 3)**: Cuando esta opción está activada, el servidor DHCP anuncia la primera dirección del CIDR como puerta de enlace predeterminada a las máquinas conectadas a la red.
>> - **Asignar un servicio Gateway y conectarse a la red privada**: Seleccione esta opción si tiene la intención de crear instancias con una red privada únicamente. Para más información, le invitamos a consultar las siguientes guías: [Crear una red privada con una Gateway](/pages/public_cloud/public_cloud_network_services/getting-started-02-create-private-network-gateway) y [Crear una primera instancia Public Cloud y conectarse a ella](/pages/public_cloud/Compute/public-cloud-first-steps).
>>
>> > [!warning]
>> >
>> > Si la segunda opción está gris, significa que es incompatible con la región seleccionada. Para más información, consulte nuestra página sobre la [disponibilidad de los productos Public Cloud para cada región](/links/public-cloud/regions-pci).
>> >
>>
>> Una vez que haya tomado sus decisiones, haga clic en `Configure su red privada`{.action} para iniciar el proceso.
>>
>> > [!primary]
>> >
>> > La creación de la red privada puede tardar varios minutos.
>> >
>>
> Desde las APIv6 de OVHcloud <a name="vlansetup"></a>
>>
>> Una vez conectado a la [APIv6 de OVHcloud](/links/api), ejecute los siguientes comandos en orden.
>>
>> **Paso 1 - Recuperación de las informaciones necesarias:**
>>
>> **Proyecto Public Cloud**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project
>> >
>>
>> > [!primary]
>> >
>> > Esta llamada permite recuperar la lista de proyectos.
>> >
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}
>> >
>>
>> > [!primary]
>> >
>> > Esta llamada permite identificar el proyecto gracias al campo "description".
>> >
>>
>> **vRack concernido**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/vrack
>> >
>>
>> > [!primary]
>> >
>> > En el campo serviceName, indique el identificador de su proyecto. Conserve la información relativa al identificador del vRack bajo la forma "pn-xxxxx".
>> >
>>
>> **Paso 2 - Creación de la red privada:**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/network/private
>> >
>>
>> > [!primary]
>> >
>> > Rellene los campos con las informaciones obtenidas anteriormente:
>> >
>> > - **serviceName**: ID del proyecto.
>> > - **name**: el nombre que quiere dar al VLAN.
>> >
>> > Puede dejar el campo "Region" vacío para que se active para todas las regiones.
>> >
>> > El identificador del VLAN (vlanId) es necesario si desea crear un VLAN específico.
>> >
>>
>> La creación tarda unos instantes.
>>
>> Para verificar las informaciones de sus VLAN, puede utilizar la llamada siguiente:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/network/private
>> >
>>
>> > [!primary]
>> >
>> > Esta llamada permite recuperar el networkId. Este se presentará bajo la forma siguiente: nom-vrack_vlanId.
>> >
>> > Por ejemplo, para el VLAN 42: pn-xxxxxx_42.
>> >
>>
>> **Paso 3 - Creación del subred:**
>>
>> Por defecto, si no añade un subred, el rango de IP utilizado es el siguiente:
>>
>> ```
>> 10.1.0.0/16
>> ```
>>
>> Si desea gestionar usted mismo las asignaciones de IP, deberá crear un subred.
>>
>> Para ello, una vez que el VLAN esté creado, deberá crear el subred para cada zona afectada mediante la llamada siguiente:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/network/private/{networkId}/subnet
>> >
>>
>> Puede rellenar los campos como sigue:
>>
>> |Campo|Descripción| 
>> |---|---| 
>> |serviceName|Identificador de su proyecto.|
>> |networkId|Identificador de su red obtenido durante los comandos anteriores. Por ejemplo: pn-xxxxxx_42 para el VLAN 42.|
>> |dhcp|Casilla marcada para activación / desmarcada para desactivación del DHCP en el VLAN.|
>> |end|Última dirección del subred de la región. Por ejemplo: 192.168.1.50.|
>> |network|Bloque IP del subred. Por ejemplo: 192.168.1.0/24.|
>> |region|Ejemplo: SBG3.|
>> |start|Primera dirección del subred para esta región Por ejemplo: 192.168.1.15.|
>>
>> > [!primary]
>> >
>> > Esta es la etapa de creación del subred por región. Puede activar o no la asignación de direcciones IP privadas de forma dinámica mediante DHCP.
>> >
>> > Deberá realizar la misma operación para cada zona en la que estén sus instancias.
>> >
>>
>> > [!warning]
>> >
>> > Asegúrese de separar bien sus pools de direcciones IP para las diferentes regiones. Por ejemplo:
>> >
>> > - De 192.168.0.2 a 192.168.0.254 para SBG1.
>> > - De 192.168.1.2 a 192.168.1.254 para GRA1.
>> >
>>
> Desde Terraform
>>
>> En Terraform, hay que utilizar el provider OpenStack. Puede descargar un ejemplo de script terraform completo en [este depósito GitHub](https://github.com/yomovh/tf-at-ovhcloud/tree/main/private_network).
>>
>> La parte específica de OVHcloud para la integración vRack es el parámetro `value_specs`.
>>
>> ```python
>> resource "openstack_networking_network_v2" "tf_network" {
>>   name = "tf_network"
>>   admin_state_up = "true"
>>   value_specs = {
>>     "provider:network_type"    = "vrack"
>>     "provider:segmentation_id" = var.vlan_id
>>   }
>> }
>> resource "openstack_networking_subnet_v2" "tf_subnet"{
>>   name       = "tf_subnet"
>>   network_id = openstack_networking_network_v2.tf_network.id
>>   cidr       = "10.1.0.0/16"
>>   enable_dhcp       = true
>> }
>> ```
>>
> Desde la CLI OpenStack
>> En el ejemplo siguiente, especificamos el `VLAN_ID` al que queremos que la red pertenezca mediante `--provider-network-type` y `--provider-segment`.
>>
>> Puede eliminar estos parámetros. En este caso, se utilizará un `VLAN_ID` disponible.
>>
>> ```bash 
>> openstack network create --provider-network-type vrack --provider-segment 42 OS_CLI_private_network
>> openstack subnet create --dhcp --network OS_CLI_private_network OS_CLI_subnet --subnet-range 10.1.0.0/16
>> ```
>> 

### Paso 3: Integrar una instancia en el vRack

Dos situaciones pueden presentarsele:

- La instancia aún no existe.
- La instancia ya existe y debe añadirla al vRack.

/// details | **Caso de una nueva instancia**

> [!tabs]
> Desde el área de cliente de OVHcloud
>> Consulte la guía "[Cómo crear una instancia de Public Cloud y conectarse a ella](/pages/public_cloud/Compute/public-cloud-first-steps)". Durante la creación de una instancia, puede elegir en el paso 5, un modo de red y luego una red privada en la que integrar su instancia.
>>
>> ![attach new instance](images/network-selection.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Al crear una nueva instancia, solo podrá conectar su instancia a **un único** vRack desde el área de cliente de OVHcloud.
>> >
>> > Para añadir varias interfaces diferentes, deberá utilizar las API OpenStack o Horizon.
>> >
>>
> Desde las APIv6 de OVHcloud
>> Una vez conectado a la [APIv6 de OVHcloud](/links/api), ejecute los siguientes comandos en orden.
>>
>> **Paso 1 - Recuperación de la información necesaria**
>>
>> **Recuperación del identificador del proyecto:**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project
>> >
>>
>> **Recuperación del networkID de la red pública (EXT-NET)**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/network/public
>> >
>>
>> **Recuperación del networkID de la red privada (interfaz vRack creada anteriormente)**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/network/private
>> >
>>
>> > [!primary]
>> >
>> > El identificador obtenido tiene la forma: "pn-xxxxx_yy" donde yy es el número del VLAN.
>> >
>>
>> **Recuperación del identificador del tipo de instancia elegido (flavorId)**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/flavor
>> >
>>
>> > [!primary]
>> >
>> > Puede limitar la lista indicando la zona de creación de su instancia.
>> >
>>
>> **Recuperación del identificador de la imagen elegida (imageId)**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/image
>> >
>>
>> > [!primary]
>> >
>> > Puede limitar la lista indicando la zona de creación de su instancia.
>> >
>>
>> **Recuperación del identificador de su clave SSH OpenStack (sshKeyId)**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/sshkey
>> >
>>
>> Si aún no ha añadido una clave SSH a su área de cliente, puede hacerlo a través de la siguiente función API:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/sshkey
>> >
>>
>> **Paso 2 - Despliegue de la instancia**
>>
>> Una vez reunidos todos los elementos necesarios para el despliegue, puede utilizar la llamada siguiente:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/instance
>> >
>>
>> Deberá rellenar al menos los siguientes campos:
>>
>> |Campo|Descripción| 
>> |---|---| 
>> |serviceName|Identificador del proyecto Public Cloud concernido.|
>> |flavorId|Identificador del tipo de instancia (por ejemplo: D2-2, B2-7, WIN-R2-15, etc.).|
>> |imageId|Identificador de la imagen de despliegue (por ejemplo: Debian 9, Centos 7, etc.).|
>> |name|Nombre que le da a su instancia.|
>> |networks|En la parte "networkId", indique el identificador de la red pública (ext-net) o el de su VLAN (pn-xxxxxx_yy). Puede hacer clic en el botón "+" para añadir otras redes.|
>> |region|Regiones de despliegue de la instancia (por ejemplo: GRA5).|
>> |sshKeyId|Identificador de su clave SSH OpenStack.|
>>
>> Una vez realizada la llamada, si todas las informaciones están correctamente rellenadas, la instancia se creará con una o varias interfaces de red.
>>
>> > [!warning]
>> >
>> > Según los sistemas operativos, deberá configurar manualmente sus interfaces de red privadas para que se tome en cuenta.<br>
>> > OpenStack no siendo capaz de priorizar la interfaz pública de la interfaz vRack, puede ocurrir que esta última pase a ser la ruta por defecto.<br>
>> > La consecuencia directa es que la instancia no sea accesible desde una IP pública.<br>
>> > Un o varios reinicios de la instancia desde el espacio cliente pueden permitir restablecer la situación.<br>
>> > Otra solución consiste en conectarse a la instancia en SSH a través de otro de sus servidores presentes en la misma red privada. También puede corregir la configuración de red de la instancia a través del modo Rescue.
>> >
>>
> Desde la CLI OpenStack
>> **Recuperación de la información necesaria**
>>
>> Identificación de las redes públicas y privadas:
>>
>> ```bash
>> openstack network list
>> 
>> +--------------------------------------+------------+-------------------------------------+
>> | ID                                   | Name       | Subnets                             |
>> +--------------------------------------+------------+-------------------------------------+
>> | 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MiVLAN-42  | xxxxxxxx-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
>> | 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | zzzzzzzz-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
>> | 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MiVLAN_0   | yyyyyyyy-xxxx-xxxx-yyyy-xxxxxxxxxxxx|
>> +--------------------------------------+------------+-------------------------------------+
>> ```
>>
>> o
>>
>> ```bash
>> nova net-list
>> 
>> +--------------------------------------+------------+------+
>> | ID                                   | Label      | CIDR |
>> +--------------------------------------+------------+------+
>> | 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MiVLAN-42  | None |
>> | 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | None |
>> | 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MiVLAN_0   | None |
>> +--------------------------------------+------------+------+
>> ```
>>
>> > [!primary]
>> >
>> > Deberá anotar los ID de las redes que le interesan:
>> >
>> > - Ext-Net para tener una IP pública.
>> > - El del o de los VLAN necesarios para su configuración.
>> >
>>
>> También deberá anotar las siguientes informaciones, como se indica en el [guía de uso de la API Nova](/pages/public_cloud/Compute/starting_with_nova):
>>
>> - ID o nombre de la clave SSH OpenStack.
>> - ID del tipo de instancia (flavor).
>> - ID de la imagen deseada (Sistema operativo, snapshot, etc.).
>>
>> **Despliegue de la instancia**
>>
>> Con los elementos recuperados anteriormente, es posible crear una instancia incluyéndola directamente en el vRack:
>>
>> ```bash
>> nova boot --key-name SSHKEY --flavor [ID-flavor] --image [ID-Image] --nic net-id=[ID-Network 1] --nic net-id=[ID-Network 2] [nom de votre instance]
>> ```
>>
>> Por ejemplo:
>>
>> ```bash
>> nova boot --key-name ma-cle-ssh --flavor xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx --image yyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy --nic net-id=[id_Ext-Net] --nic net-id=[id_VLAN] NomDeMonInstance
>> 
>> +--------------------------------------+------------------------------------------------------+
>> | Property                             | Value                                                |
>> +--------------------------------------+------------------------------------------------------+
>> | OS-DCF:diskConfig                    | MANUAL                                               |
>> | OS-EXT-AZ:availability_zone          |                                                      |
>> | OS-EXT-STS:power_state               | 0                                                    |
>> | OS-EXT-STS:task_state                | scheduling                                           |
>> | OS-EXT-STS:vm_state                  | building                                             |
>> | OS-SRV-USG:launched_at               | -                                                    |
>> | OS-SRV-USG:terminated_at             | -                                                    |
>> | accessIPv4                           |                                                      |
>> | accessIPv6                           |                                                      |
>> | adminPass                            | xxxxxxxxxxxx                                         |
>> | config_drive                         |                                                      |
>> | created                              | YYYY-MM-DDTHH:MM:SSZ                                 |
>> | flavor                               | [Flavor Type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)   |
>> | hostId                               |                                                      |
>> | id                                   | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx                   |
>> | image                                | [Image Type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)    |
>> | key_name                             | [Nombre de la clave]                                 |
>> | metadata                             | {}                                                   |
>> | name                                 | [Nombre de su instancia]                             |
>> | os-extended-volumes:volumes_attached | []                                                   |
>> | progress                             | 0                                                    |
>> | security_groups                      | default                                              |
>> | status                               | BUILD                                                |
>> | tenant_id                            | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
>> | updated                              | YYYY-MM-DDTHH:MM:SSZ                                 |
>> | user_id                              | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
>> +--------------------------------------+------------------------------------------------------+
>> ```
>>
>> o
>>
>> ```bash
>> openstack server create --key-name SSHKEY --flavor [ID-flavor] --image [ID-Image] --nic net-id=[ID-Network 1] --nic net-id=[ID-Network 2] [nom de votre instance]
>> ```
>>
>> Por ejemplo:
>>
>> ```bash
>> openstack server create --key-name ma-cle-ssh --flavor xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx --image yyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy --nic net-id=[id_Ext-Net] --nic net-id=[id_VLAN] NomDeMonInstance
>>
>> +--------------------------------------+------------------------------------------------------+
>> | Property                             | Value                                                |
>> +--------------------------------------+------------------------------------------------------+
>> | OS-DCF:diskConfig                    | MANUAL                                               |
>> | OS-EXT-AZ:availability_zone          |                                                      |
>> | OS-EXT-STS:power_state               | 0                                                    |
>> | OS-EXT-STS:task_state                | scheduling                                           |
>> | OS-EXT-STS:vm_state                  | building                                             |
>> | OS-SRV-USG:launched_at               | -                                                    |
>> | OS-SRV-USG:terminated_at             | -                                                    |
>> | accessIPv4                           |                                                      |
>> | accessIPv6                           |                                                      |
>> | adminPass                            | xxxxxxxxxxxx                                         |
>> | config_drive                         |                                                      |
>> | created                              | YYYY-MM-DDTHH:MM:SSZ                                 |
>> | flavor                               | [Flavor Type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)   |
>> | hostId                               |                                                      |
>> | id                                   | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx                   |
>> | image                                | [Image Type] (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)    |
>> | key_name                             | [Nombre de la clave]                                 |
>> | metadata                             | {}                                                   |
>> | name                                 | [Nombre de su instancia]                             |
>> | os-extended-volumes:volumes_attached | []                                                   |
>> | progress                             | 0                                                    |
>> | security_groups                      | default                                              |
>> | status                               | BUILD                                                |
>> | tenant_id                            | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
>> | updated                              | YYYY-MM-DDTHH:MM:SSZ                                 |
>> | user_id                              | zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz                     |
>> +--------------------------------------+------------------------------------------------------+
>> ```
>>
>> Usted tiene la posibilidad de definir la dirección IP de la interfaz vRack de su instancia a nivel de OpenStack.
>>
>> Para ello, puede añadir un argumento sencillo en la función "--nic":
>>
>> `--nic net-id=[ID-Network],v4-fixed-ip=[IP_static_vRack]`
>>
>> Por ejemplo:
>>
>> `--nic net-id=[ID-vRack],v4-fixed-ip=192.168.0.42`
>>
>> **Verificación de la instancia**
>>
>> Después de unos minutos, puede verificar la lista de las instancias existentes para encontrar el servidor creado:
>>
>> ```bash
>> openstack server list
>> +--------------------------------------+--------------------------+--------+--------------------------------------------------+--------------------------+
>> | ID                                   |       Name               | Status | Networks                                         |     Image Name           |
>> +--------------------------------------+--------------------------+--------+--------------------------------------------------+--------------------------+
>> | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxxxx | [Nombre de la instancia] | ACTIVE | Ext-Net=[IP_V4], [IP_V6]; MonVrack=[IP_V4_vRack] | [Nombre de la instancia] |
>> +--------------------------------------+--------------------------+--------+--------------------------------------------------+--------------------------+
>> ```
>>
>> ```bash
>> nova list
>> +--------------------------------------+--------------------------+--------+------------+-------------+--------------------------------------------------+
>> | ID                                   | Name                     | Status | Task State | Power State | Networks                                         |
>> +--------------------------------------+--------------------------+--------+------------+-------------+--------------------------------------------------+
>> | xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx   | [Nombre de la instancia] | ACTIVE | -          | Running     | Ext-Net=[IP_V4], [IP_V6]; MonVrack=[IP_V4_vRack] |
>> +--------------------------------------+--------------------------+--------+------------+-------------+--------------------------------------------------+
>> ```
>>

///

/// details | **Caso de una instancia ya existente**

El área de cliente de OVHcloud permite adjuntar una instancia a una o varias redes privadas, pero no ofrece una configuración avanzada de las interfaces de red. Si desea personalizar más estas interfaces, deberá gestionarlas desde las APIv6 de OVHcloud, desde las API de OpenStack o desde Horizon.

La acción consistirá simplemente en añadir una nueva interfaz de red a su servidor, además de la existente.

Por ejemplo, si tiene una interfaz pública *eth0*, tendrá además una interfaz *eth1*.

> [!warning]
> La configuración de esta nueva interfaz rara vez es automática. Por lo tanto, deberá configurarla en DHCP o con una IP fija según su infraestructura.
>

> [!tabs]
> Desde el área de cliente de OVHcloud
>> Inicie sesión en su [área de cliente de OVHcloud](/links/manager), vaya a la sección `Public Cloud`{.action} y seleccione el proyecto Public Cloud correspondiente en la esquina superior izquierda.
>>
>> Haga clic en `Instancias`{.action} en el menú lateral izquierdo. A continuación, haga clic en el botón `⁝`{.action} a la derecha de la instancia correspondiente y luego en `Detalles de la instancia`{.action}.
>>
>> ![detalles de la instancia](images/instance_details.png){.thumbnail}
>>
>> Se le mostrará el panel de control de su instancia. Haga clic en el botón `⁝`{.action} a la derecha de "Redes privadas" y luego en `Asociar una red`{.action}.
>>
>> ![adjuntar red](images/vrack2021-01.png){.thumbnail}
>>
>> En la ventana emergente que aparece, seleccione la o las redes privadas que desee adjuntar a su instancia y haga clic en `Confirmar`{.action}.
>>
>> ![adjuntar red](images/vrack9.png){.thumbnail}
>>
> Desde las APIv6 de OVHcloud
>> La acción consistirá simplemente en añadir una nueva interfaz de red a su servidor, además de la existente.
>>
>> Por ejemplo, si el servidor dispone de una interfaz pública eth0, se añadirá una interfaz adicional eth1.
>>
>> > [!primary]
>> >
>> > La configuración de esta nueva interfaz rara vez es automática.<br>
>> > Deberá por tanto configurarla en DHCP o con una IP fija según su infraestructura.
>> >
>>
>> **Los pasos siguientes describen cómo gestionar las interfaces de red de sus instancias.**
>>
>> **Paso 1 - Recuperación de la información necesaria**
>>
>> **Recuperación del identificador del proyecto:**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project
>> >
>>
>> **Recuperación del identificador de la instancia:**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/instance
>> >
>>
>> **Recuperación del networkID de la red pública (EXT-NET):**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/network/public
>> >
>>
>> **Recuperación del networkID de la red privada (interfaz vRack creada anteriormente):**
>>
>> > [!api]
>> >
>> > @api {v1} /cloud GET /cloud/project/{serviceName}/network/private
>> >
>>
>> > [!primary]
>> >
>> > El identificador obtenido tiene la forma: "pn-xxxxx_yy" donde yy es el número del VLAN.
>> >
>>
>> **Paso 2 - Añadido de una interfaz a su instancia**
>>
>> Una vez recuperada toda la información necesaria, puede utilizar el siguiente llamado:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/instance/{instanceId}/interface
>> >
>>
>> Deberá rellenar al menos los siguientes campos:
>>
>> |Campo|Descripción| 
>> |---|---| 
>> |serviceName|Identificador del proyecto Public Cloud correspondiente.|
>> |instanceId|Identificador de la instancia correspondiente.|
>> |networkId|Indique el identificador de la red pública (ext-net) o el de su VLAN (pn-xxxxxx_yy).|
>> |ip|Definir una IP específica (funciona únicamente para interfaces privadas).|
>>
>> Una vez realizado el llamado, si todas las informaciones están correctamente rellenadas, una nueva interfaz se añadirá a su instancia.
>>
>> > [!primary]
>> >
>> > Su instancia OVHcloud dispondrá por tanto de una nueva interfaz de red además de la interfaz pública (Ext-net).<br>
>> > Podrá ver, en el resumen de la instancia, la dirección IP privada asignada automáticamente a su interfaz.<br>
>> > Será su responsabilidad utilizarla configurando su interfaz mediante DHCP o utilizando sus propias IP mediante una configuración en IP estática.
>> >
>>
>> **Paso 3 - Desenganchar una interfaz de su instancia**
>>
>> > [!warning]
>> >
>> > Desenganchar una interfaz de red la eliminará inmediatamente.
>> >
>> > Sin embargo, es importante señalar que si desengancha la interfaz "Ext-Net" (IP pública), esta dirección se liberaría y se pondría en circulación. No podría por tanto reclamarla.<br>
>> > Esta acción solo debe realizarse si desea aislar su servidor en el vRack (red privada) o, por el contrario, retirarlo de uno o varios VLAN.
>> >
>>
>> Una vez recuperada toda la información necesaria, puede utilizar el siguiente llamado para eliminar una interfaz:
>>
>> > [!api]
>> >
>> > @api {v1} /cloud DELETE /cloud/project/{serviceName}/instance/{instanceId}/interface/{interfaceId}
>> >
>>
>> Deberá rellenar al menos los siguientes campos:
>>
>> |Campo|Descripción| 
>> |---|---| 
>> |serviceName|Identificador del proyecto Public Cloud correspondiente.|
>> |instanceId|Identificador de la instancia correspondiente.|
>> |networkId|Indique el identificador de la red pública (ext-net) o el de su VLAN (pn-xxxxxx_yy).|
>>
> Desde OpenStack Horizon
>> Inicie sesión en la interfaz [Horizon](https://horizon.cloud.ovh.net/auth/login/) siguiendo el método indicado en la [primera parte de este guía](#horizon).
>>
>> Inicie sesión en su zona de trabajo:
>>
>> ![conexión Horizon](images/horizon1.png){.thumbnail}
>>
>> Vaya a `Compute`, y luego a `Instances`:
>>
>> ![Horizon Compute instances](images/horizon2.png){.thumbnail}
>>
>> **Añadido de una interfaz de red privada**
>>
>> Para añadir una interfaz, en la columna `Actions`, haga clic en la flecha que permite acceder a las acciones posibles sobre la instancia. Haga clic a continuación en `Attach Interface`{.action}:
>>
>> ![Horizon attach interface](images/horizon3.png){.thumbnail}
>>
>> Seleccione su interfaz y valide:
>>
>> ![Horizon attach interface](images/horizon4.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > Su instancia OVHcloud dispondrá por tanto de una nueva interfaz de red además de la interfaz pública (Ext-net).<br>
>> > Podrá ver, en el resumen de la instancia, la dirección IP privada asignada automáticamente a su interfaz.<br>
>> > Será su responsabilidad utilizarla configurando su interfaz mediante DHCP o utilizando sus propias IP mediante una configuración en IP estática.
>> >
>>
>> **Desenganchar una interfaz de red**
>>
>> > [!warning]
>> >
>> > Desenganchar una interfaz de red la eliminará inmediatamente.
>> >
>> > Sin embargo, es importante señalar que si desengancha la interfaz "Ext-Net" (IP pública), esta dirección se liberaría y se pondría en circulación. No podría por tanto reclamarla.<br>
>> > Esta acción solo debe realizarse si desea aislar su servidor en el vRack (red privada) o, por el contrario, retirarlo de uno o varios VLAN.
>> >
>>
>> Para desenganchar una interfaz de red privada, en la columna `Actions`, haga clic en la flecha que permite acceder a las acciones posibles sobre la instancia. Haga clic a continuación en `Detach Interface`{.action}:
>>
>> ![Horizon detach interface](images/horizon5.png){.thumbnail}
>>
>> Seleccione la interfaz a eliminar y valide:
>>
>> ![Horizon detach interface](images/horizon6.png){.thumbnail}
>>
> Desde la CLI OpenStack
>> **Recuperación de la información necesaria**
>>
>> Identificación de sus instancias:
>>
>> ```bash
>> openstack server list
>>
>> +--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
>> | ID                                   | Name         | Status | Networks                                                               | Image Name |
>> +--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
>> | 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | Mi-instancia | ACTIVE | Ext-Net=xx.xx.xx.xx, 2001:41d0:yyyy:yyyy::yyyy; MonVrack=192.168.0.124 | Debian 9   |
>> +--------------------------------------+--------------+--------+------------------------------------------------------------------------+------------+
>> ```
>>
>> o
>>
>> ```bash
>> nova list
>> 
>> +--------------------------------------+--------------+--------+------------+-------------+----------------------------------------------------------------------+
>> | ID                                   | Name         | Status | Task State | Power State | Networks                                                             |
>> +--------------------------------------+--------------+--------+------------+-------------+----------------------------------------------------------------------+
>> | 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | Mi-instancia | ACTIVE | -          | Running     | Ext-Net=xx.xx.xx.xx,2001:41d0:yyyy:yyyy::yyyy;MonVrack=192.168.0.124 |
>> +--------------------------------------+--------------+--------+------------+-------------+----------------------------------------------------------------------+
>> ```
>>
>> Identificación de las redes públicas y privadas:
>>
>> ```bash
>> openstack network list
>>  
>> +--------------------------------------+------------+-------------------------------------+
>> | ID                                   | Name       | Subnets                             |
>> +--------------------------------------+------------+-------------------------------------+
>> | 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MiVLAN-42  | xxxxxxxx-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
>> | 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | zzzzzzzz-yyyy-xxxx-yyyy-xxxxxxxxxxxx|
>> | 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MiVLAN-0   | yyyyyyyy-xxxx-xxxx-yyyy-xxxxxxxxxxxx|
>> +--------------------------------------+------------+-------------------------------------+
>> ```
>>
>> o
>>
>> ```bash
>> nova net-list
>> 
>> +--------------------------------------+------------+------+
>> | ID                                   | Label      | CIDR |
>> +--------------------------------------+------------+------+
>> | 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx | MiVLAN-42  | None |
>> | 34567890-12ab-cdef-xxxx-xxxxxxxxxxxx | Ext-Net    | None |
>> | 67890123-4abc-ef12-xxxx-xxxxxxxxxxxx | MiVLAN-0   | None |
>> +--------------------------------------+------------+------+
>> ```
>>
>> > [!primary]
>> >
>> > Deberá anotar los ID de las redes que le interesen:
>> >
>> > - Ext-Net para tener una IP pública.
>> > - El de los VLAN necesarios para su configuración.
>> >
>>
>> **Añadido de una interfaz de red privada**
>>
>> Para adjuntar una nueva interfaz, puede realizar el siguiente comando:
>>
>> ```bash
>> nova interface-attach --net-id <ID-VLAN> <ID-instance>
>> ```
>>
>> Por ejemplo:
>>
>> ```bash
>> nova interface-attach --net-id 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx
>> ```
>>
>> Puede verificar que la acción ha sido correctamente realizada:
>>
>> ```bash
>> nova show <ID-instance>
>> 
>> +--------------------------------------+----------------------------------------------------------+
>> | Property                             | Value                                                    |
>> +--------------------------------------+----------------------------------------------------------+
>> | Ext-Net network                      | xx.xx.xx.xx, 2001:41d0:xxx:xxxx::xxxx                    | => su IP pública
>> | MiVLAN-42 network                    | 192.168.0.x                                              | => su IP privada
>> [...]
>> ```
>>
>> o
>>
>> ```bash
>> openstack server show <ID-instance>
>> +--------------------------------------+-------------------------------------------------------------------------+
>> | Field                                | Value                                                                   |
>> +--------------------------------------+-------------------------------------------------------------------------+
>> [...]
>> | addresses                            | Ext-Net=xx.xx.xx.xx, 2001:41d0:xxx:xxxx::xxxx ; MiVLAN-42=192.168.0.x   | => su IP pública ; su IP privada
>> [...]
>> ```
>>

### Desenganchar una interfaz de red

> [!warning]
> Desenganchar una interfaz de red la eliminará inmediatamente.
>
> Sin embargo, es importante señalar que si desengancha la interfaz "Ext-Net" (IP pública), esta dirección se liberaría y se pondría en circulación. No podría por tanto reclamarla.<br>
> Esta acción solo debe realizarse si desea aislar su servidor en el vRack (red privada) o, por el contrario, retirarlo de uno o varios VLAN.
>

Para desenganchar una interfaz de red, necesitará en primer lugar identificar el puerto Neutron que se haya creado.

Para ello, puede utilizar los siguientes comandos:

```bash
neutron port-list
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------------------------------+
| id                                   | name | mac_address       | fixed_ips                                                                                         |
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------------------------------+
| 12345678-abcd-ef01-2345-678910abcdef |      | fa:xx:xx:xx:xx:xx | {"subnet_id": "01234567-8901-abscdef12345678910abcd", "ip_address": "192.168.0.x"}                |
| 09876543-210a-bcde-f098-76543210abcd |      | fa:yy:yy:yy:yy:yy | {"subnet_id": "65432109-abcd-ef09-8765-43210abcdef1", "ip_address": "2001:41d0:xxx:xxxx::xxxx"}   |
|                                      |      |                   | {"subnet_id": "abcdef12-3456-7890-abcd-ef1234567890", "ip_address": "YY.YY.YY.YY"}                |
+--------------------------------------+------+-------------------+---------------------------------------------------------------------------------------------------+
```

o

```bash
openstack port list
+--------------------------------------+------+-------------------+-------------------------------------------------------------------------------------------+
| ID                                   | Name | MAC Address       | Fixed IP Addresses                                                                        |
+--------------------------------------+------+-------------------+-------------------------------------------------------------------------------------------+
| 12345678-abcd-ef01-2345-678910abcdef |      | fa:xx:xx:xx:xx:xx | ip_address='192.168.0.xx', subnet_id='301234567-8901-abscdef12345678910abcd'              |
| 09876543-210a-bcde-f098-76543210abcd |      | fa:yy:yy:yy:yy:yy | ip_address='2001:41d0:xxx:xxxx::xxxx', subnet_id='65432109-abcd-ef09-8765-43210abcdef1'   |
|                                      |      |                   | ip_address='YY.YY.YY.YY', subnet_id='abcdef12-3456-7890-abcd-ef1234567890'                |
+--------------------------------------+------+-------------------+-------------------------------------------------------------------------------------------+
```

Una vez identificado el puerto que desea eliminar, puede ejecutar el siguiente comando:

```bash
nova interface-detach <ID_instance> <port_id>
```

Por ejemplo:

```bash
nova interface-detach 12345678-90ab-cdef-xxxx-xxxxxxxxxxxx 12345678-abcd-ef01-2345-678910abcdef
```

///

## Más información

[Servidores dedicados - Crear varios VLAN en el vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack)

Si necesita formación o asistencia técnica para la implementación de nuestras soluciones, póngase en contacto con su comercial o haga clic en [este enlace](/links/professional-services) para obtener un presupuesto y solicitar un análisis personalizado de su proyecto a nuestros expertos del equipo de Professional Services.

Interactúe con nuestra [comunidad de usuarios](/links/community).