---
title: "Bare Metal 3-AZ Region - Presentación del producto"
excerpt: 'Descubra el servicio Bare Metal 3-AZ, que ofrece una alta disponibilidad y redundancia sin igual entre tres datacenters'
updated: 2025-06-04
---

## Objetivo

OVHcloud ofrece su servicio Bare Metal en la [región 3-AZ](/links/bare-metal/regions), una evolución significativa en la estrategia de regionalización de la empresa. Este servicio, disponible en la aglomeración de París, constituye un nuevo estándar del sector en materia de fiabilidad y rendimiento de los servidores Bare Metal.

El Bare Metal de la región 3-AZ responde a las necesidades de los clientes que necesitan alta disponibilidad y redundancia en sus planes de continuidad del negocio. Este servicio ofrece servidores Bare Metal en tres datacenters cercanos a París, conectados por una red de baja latencia. Ofrece una seguridad mejorada, un rendimiento mejorado y funcionalidades ininterrumpidas, incluso en caso de incidencia localizada.

> [!primary]
>
> **Información importante - Evolución de la oferta Bare Metal 3-AZ**
>
> A partir de mayo de 2025, el modelo de entrega de los servidores Bare Metal en la región París 3-AZ evoluciona significativamente. Se abandonará el modelo anterior de entrega obligatoria en clusters de 3 servidores (uno en cada zona de disponibilidad).
>
> **Cambios clave:**

> - Los clientes podrán elegir libremente el número exacto de servidores que necesitan.
> - La distribución de los servidores entre las diferentes zonas de disponibilidad (AZ) será totalmente personalizable.
> - No hay ninguna obligación de despliegue en las tres zonas simultáneamente.
>
> **Importante:** la información presentada en esta guía, en particular la relativa al despliegue obligatorio del cluster y la posible experiencia de usuario que refleja este modelo, se aplica principalmente a los clientes cuyos servidores se entregaron *antes de mayo de 2025* bajo el modelo de cluster anterior. Los nuevos despliegues a partir de mayo de 2025 se beneficiarán de la flexibilidad del nuevo modelo y, potencialmente, de una interfaz adecuada. Si tiene alguna pregunta sobre esta evolución o si desea adaptar su infraestructura existente, póngase en contacto con el administrador de su cuenta o con el soporte de OVHcloud.
>

## Información general

### Objetivo del Servicio

El valor de la región 3-AZ reside en ofrecer varios servidores idénticos repartidos en tres zonas de disponibilidad dentro de una misma región. Esta configuración garantiza una alta disponibilidad y redundancia de los datos, al tiempo que mantiene la continuidad operativa y reduce el riesgo de pérdida de datos. La distribución estratégica de servidores reduce la latencia y mejora el rendimiento de las aplicaciones.

### La regionalización en OVHcloud

OVHcloud tiene presencia en todo el mundo, especialmente en Europa, Estados Unidos, Canadá y Asia-Pacífico. La introducción del concepto de región y el soporte de zonas de disponibilidad es una iniciativa estratégica para proporcionar a los clientes un rendimiento y una resiliencia óptimos. La región de París es la primera en adoptar el modelo 3-AZ.

### Sugerencias de selección de región

Para obtener un rendimiento óptimo, debe seleccionar una región lo más cerca posible de sus usuarios. Para garantizar la disponibilidad mundial, los servicios deben distribuirse en varias regiones. La región 3-AZ es ideal para los clientes que buscan la máxima resiliencia y debe utilizarse para crear diseños de aplicaciones multi-AZ.

En el [área de cliente de OVHcloud](/links/manager), puede ver sus clusters en la lista de `Servidores dedicados`{.action} del menú `Bare Metal Cloud`{.action} pasando a la pestaña `Clusters 3-AZ`{.action}.

![list_clusters](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/dedicated-servers/general-information/clusters1.png){.thumbnail}

Haga clic en el nombre del cluster en la tabla para ver los detalles.

![list_clusters](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/dedicated-servers/general-information/clusters2.png){.thumbnail}

Haga clic en la pestaña `Nodos`{.action} para abrir la lista de servidores del cluster.

![list_clusters](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/dedicated-servers/general-information/clusters3.png){.thumbnail}

Haciendo clic en un nombre de servidor/nodo de esta lista se abre la pestaña `Información general`{.action} Puede consultar los detalles en esta sección del área de cliente en nuestra guía:

[Cómo empezar con un servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)

## Más información <a name="go-further"></a>

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
