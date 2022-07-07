---
title: FAQ Public Cloud OVHcloud
slug: public-cloud-faq
section: Información general
order: 01
---

**Última actualización: 06/09/2021**

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## FAQ Public Cloud

## ¿Cómo conectarse a una instancia de Public Cloud?

La conexión se realiza gracias a un par de llaves SSH que deberá configurar al crear la instancia de Public Cloud.

Para más información, consulte la guía [Crear y conectarse a una primera instancia de Public Cloud](../public-cloud-primeros-pasos/).

### He perdido o quiero cambiar la llave SSH, ¿cómo puedo hacerlo?

Si no puede conectarse debido a la pérdida de su clave privada, deberá cambiar la clave pública de su instancia pasando esta a modo de rescate.

Por favor, consulte la guía [Modificar su llave SSH en caso de pérdida](../modificar_su_llave_ssh_en_caso_de_perdida/).

### ¿Cuáles son las posibilidades de backup de mi instancia?

En cualquier momento puede crear una copia de seguridad de una instancia desde el área de cliente de OVHcloud. con el que podrá restaurar su instancia con una configuración anterior o volver a crearla.

Para más información, consulte la guía [Guardar una copia de seguridad de una instancia](../guardar_copia_de_seguridad_de_una_instancia/).

## ¿Cómo crear y gestionar usuarios de OpenStack?  

Para poder utilizar las API Horizon o OpenStack, es necesario crear previamente un usuario OpenStack. Puede crear un número ilimitado.

Para más información, consulte la guía [Crear y eliminar un usuario de OpenStack](../crear-y-eliminar-un-usuario-de-openstack/).

## ¿Cómo funciona la facturación de Public Cloud?

El consumo realizado cada mes se factura entre los días 1 y 5 del mes siguiente. Si ha optado por una tarificación mensual, el pago de la cuota del mes entrante se factura junto con el consumo del mes anterior (instancias, Object Storage). En caso de cambiar un recurso a cuota mensual, se cargará inmediatamente la parte proporcional al período restante del mes en curso.
Tenga en cuenta que toda instancia será facturada mientras no sea eliminada del área de cliente de OVHcloud.
Puede consultar el consumo en el historial de uso de su proyecto. También puede elegir una facturación diferenciada para cada proyecto de Public Cloud, lo que permite una posible refacturación dentro de su empresa.

Para pasar de un modo de facturación a otro, consulte nuestra guía [Cambiar de facturación por horas a mensual](../cambiar-modalidad-facturacion-public-cloud/).

## ¿Cómo puedo escalar mis instancias si necesito más o menos recursos?

Cualquier instancia puede redimensionarse hacia una instancia más potente de la misma gama desde el área de cliente, haciendo clic en el botón `Editar`{.action} en la página de la instancia. También es posible redimensionar la migración hacia un modelo inferior, si se ha iniciado con la opción "flex". Esta opción impone un tamaño de disco de 50 GB para todos los modelos, permitiendo así redimensionamientos en ambos sentidos.
En cualquier caso, el redimensionamiento de una instancia requiere un reinicio.

### ¿Las instancias de Public Cloud son compatibles con cloud-init?

Sí, las imágenes cloud que ofrece OVHcloud incluyen los scripts cloud-init que permiten personalizar las instancias al iniciarlas. La infraestructura entrega la información de personalización de la instancia a través de un servidor de metadatos con el que cloud-init comunica directamente.

## ¿Es posible guardar copia de seguridad de mis servidores Public Cloud?

En cualquier momento puede crear backups de instancias de sus servidores sin límites. Estas copias de seguridad se almacenan y se facturan como las imágenes en "Private Image". A través de las API OpenStack, podrá descargarlas fuera de la infraestructura de OVHcloud o en otros proyectos.

Para más información, consulte la guía [Guardar una copia de seguridad de una instancia](../guardar_copia_de_seguridad_de_una_instancia/).

### ¿Puedo aumentar dinámicamente el tamaño de un volumen mientras sigo escribiendo en el disco?

No, es necesario desvincular un volumen antes de poder aumentarlo.

## ¿Cuántos volúmenes adicionales puedo asociar a cada instancia?

Puede asociar hasta 25 volúmenes adicionales por instancia.

## ¿Cómo están protegidos mis servidores?

OVHcloud protege toda su infraestructura gracias a su solución anti-DDoS exclusiva. Además, puede añadir los grupos de seguridad OpenStack: este equivalente de un cortafuegos se gestiona directamente a nivel de la infraestructura de OpenStack, antes de sus instancias.

Le invitamos a consultar la guía [Configurar un grupo de seguridad](../configurar-un-grupo-de-seguridad).

Estos sistemas de protección, combinados con los que usted puede implementar en sus servidores, le permitirán optimizar la fiabilidad de su despliegue.

## ¿Cómo puedo crear una red privada entre mis servidores?

Public Cloud integra una solución SDN (software-defined network). que permite crear redes privadas dinámicamente y conectarlas a las instancias desde el área de cliente o a través de la API.
Estas redes privadas se basan en la tecnología vRack de OVHcloud, compartida con otros servicios de la empresa, como Private Cloud o servidores dedicados. de esta forma, la solución ofrece la posibilidad de comunicar todos sus elementos de infraestructura con OVHcloud de forma aislada y segura.

Para más información, consulte la guía [Configuración del vRack Public Cloud](https://docs.ovh.com/gb/en/public-cloud/public-cloud-vrack/) (EN).

### ¿Puedo cambiar la IP pública de mi instancia?

Las IP públicas se asignan automáticamente a las instancias, por lo que no pueden modificarse. Para controlar la IP pública de una instancia, le recomendamos que utilice una IP Failover. De este modo, cualquiera que sea la dirección pública que se haya asignado automáticamente a la instancia, puede añadir una o varias IP failover a su instancia.

Para más información, consulte la guía [Comprar una IP failover](../comprar-una-ip-failover/).

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
