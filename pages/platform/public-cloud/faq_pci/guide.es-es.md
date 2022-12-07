---
title: FAQ Public Cloud OVHcloud
slug: public-cloud-faq
section: Información general
order: 01
---

**Última actualización: 02/12/2022**

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## FAQ Public Cloud

## ¿Cómo conectarse a una instancia de Public Cloud?

La conexión se realiza gracias a un par de llaves SSH que deberá configurar al crear la instancia de Public Cloud.

Para más información, consulte la guía [Crear y conectarse a una primera instancia de Public Cloud](https://docs.ovh.com/es/public-cloud/public-cloud-primeros-pasos/).

### He perdido o quiero cambiar la llave SSH, ¿cómo puedo hacerlo?

Si no puede conectarse debido a la pérdida de su clave privada, deberá cambiar la clave pública de su instancia pasando esta a modo de rescate.

Por favor, consulte la guía [Modificar su llave SSH en caso de pérdida](https://docs.ovh.com/es/public-cloud/modificar_su_llave_ssh_en_caso_de_perdida/).

### ¿Cuáles son las posibilidades de backup de mi instancia?

En cualquier momento puede crear una copia de seguridad de una instancia desde el área de cliente de OVHcloud. con el que podrá restaurar su instancia con una configuración anterior o volver a crearla.

Para más información, consulte la guía [Guardar una copia de seguridad de una instancia](https://docs.ovh.com/es/public-cloud/guardar_copia_de_seguridad_de_una_instancia/).

## ¿Cómo crear y gestionar usuarios de OpenStack?  

Para poder utilizar las API Horizon o OpenStack, es necesario crear previamente un usuario OpenStack. Puede crear un número ilimitado.

Para más información, consulte la guía [Crear y eliminar un usuario de OpenStack](https://docs.ovh.com/es/public-cloud/crear-y-eliminar-un-usuario-de-openstack/).

## ¿Cómo funciona la facturación de Public Cloud?

El consumo realizado cada mes se factura entre los días 1 y 5 del mes siguiente. Si ha optado por una tarificación mensual, el pago de la cuota del mes entrante se factura junto con el consumo del mes anterior (instancias, Object Storage). En caso de cambiar un recurso a cuota mensual, se cargará inmediatamente la parte proporcional al período restante del mes en curso.
Tenga en cuenta que toda instancia será facturada mientras no sea eliminada del área de cliente de OVHcloud.
Puede consultar el consumo en el historial de uso de su proyecto. También puede elegir una facturación diferenciada para cada proyecto de Public Cloud, lo que permite una posible refacturación dentro de su empresa.

Para pasar de un modo de facturación a otro, consulte nuestra guía [Cambiar de facturación por horas a mensual](https://docs.ovh.com/es/public-cloud/cambiar-modalidad-facturacion-public-cloud/).

## ¿Cómo puedo escalar mis instancias si necesito más o menos recursos?

Cualquier instancia puede redimensionarse hacia una instancia más potente de la misma gama desde el área de cliente, haciendo clic en el botón `Editar`{.action} en la página de la instancia. También es posible redimensionar la migración hacia un modelo inferior, si se ha iniciado con la opción "flex". Esta opción impone un tamaño de disco de 50 GB para todos los modelos, permitiendo así redimensionamientos en ambos sentidos.
En cualquier caso, el redimensionamiento de una instancia requiere un reinicio.

### ¿Las instancias de Public Cloud son compatibles con cloud-init?

Sí, las imágenes cloud que ofrece OVHcloud incluyen los scripts cloud-init que permiten personalizar las instancias al iniciarlas. La infraestructura entrega la información de personalización de la instancia a través de un servidor de metadatos con el que cloud-init comunica directamente.

## ¿Es posible guardar copia de seguridad de mis servidores Public Cloud?

En cualquier momento puede crear backups de instancias de sus servidores sin límites. Estas copias de seguridad se almacenan y se facturan como las imágenes en "Private Image". A través de las API OpenStack, podrá descargarlas fuera de la infraestructura de OVHcloud o en otros proyectos.

Para más información, consulte la guía [Guardar una copia de seguridad de una instancia](https://docs.ovh.com/es/public-cloud/guardar_copia_de_seguridad_de_una_instancia/).

### ¿Puedo aumentar dinámicamente el tamaño de un volumen mientras sigo escribiendo en el disco?

No, es necesario desvincular un volumen antes de poder aumentarlo.

## ¿Cuántos volúmenes adicionales puedo asociar a cada instancia?

Puede asociar hasta 25 volúmenes adicionales por instancia.

## ¿Cómo están protegidos mis servidores?

OVHcloud protege toda su infraestructura gracias a su solución anti-DDoS exclusiva. Además, puede añadir los grupos de seguridad OpenStack: este equivalente de un cortafuegos se gestiona directamente a nivel de la infraestructura de OpenStack, antes de sus instancias.

Le invitamos a consultar la guía [Configurar un grupo de seguridad](https://docs.ovh.com/es/public-cloud/configurar-un-grupo-de-seguridad).

Estos sistemas de protección, combinados con los que usted puede implementar en sus servidores, le permitirán optimizar la fiabilidad de su despliegue.

## ¿Cómo puedo crear una red privada entre mis servidores?

Public Cloud integra una solución SDN (software-defined network). que permite crear redes privadas dinámicamente y conectarlas a las instancias desde el área de cliente o a través de la API.
Estas redes privadas se basan en la tecnología vRack de OVHcloud, compartida con otros servicios de la empresa, como Private Cloud o servidores dedicados. de esta forma, la solución ofrece la posibilidad de comunicar todos sus elementos de infraestructura con OVHcloud de forma aislada y segura.

Para más información, consulte la guía [Configuración del vRack Public Cloud](https://docs.ovh.com/es/publiccloud/network-services/public-cloud-vrack/).

La red privada dispone por defecto de las protecciones de red nativas de OpenStack. Estas incluyen diferentes mecanismos, como la protección contra el spoofing de IP.<br>
En cuanto a las instancias, esto puede traducirse en bloques de paquetes de red según el uso (pfSense, router, protocolo CARP, etc.).

Si lo necesita, deberá desactivar la función de `Port Security` en el puerto o la red privada.
Para más información, consulte la guía [gestión de las reglas de firewall y port security en las redes que utilizan OpenStack CLI](https://docs.ovh.com/es/public-cloud/firewall_security_pci/).

También encontrará más información sobre [documentación de OpenStack](https://docs.openstack.org/developer/dragonflow/specs/mac_spoofing.html) o sobre [superuser.openstack.org](https://superuser.openstack.org/articles/managing-port-level-security-openstack/).

### ¿Puedo cambiar la IP pública de mi instancia?

Las IP públicas se asignan automáticamente a las instancias, por lo que no pueden modificarse. Para controlar la IP pública de una instancia, le recomendamos que utilice una Additional IP. De este modo, cualquiera que sea la dirección pública que se haya asignado automáticamente a la instancia, puede añadir una o varias Additional IP a su instancia.

Para más información, consulte la guía [Comprar una Additional IP](https://docs.ovh.com/es/publiccloud/network-services/buy-additional-ip/).

### ¿Cómo comprobar si mi instancia es vulnerable a la fallo MDS?

La vulnerabilidad a [fallo MDS](https://www.kernel.org/doc/html/latest/admin-guide/hw-vuln/mds.html) puede comprobarse con el siguiente comando:

```bash
cat /sys/devices/system/cpu/vulnerabilities/mds
```

Si el resultado es `Vulnerable`, no tenga miedo, el hipervisor subyacente te protege.

No obstante, es posible mitigar este fallo directamente en su instancia realizando un "hard reboot" de su instancia, bien [a través del área de cliente de OVHcloud](https://docs.ovh.com/es/public-cloud/empezar-con-una-instancia-public-cloud/), o bien con un comando como este:

```bash
openstack server reboot --hard $serverID
```

### ¿Mi instancia sigue siendo vulnerable a la fallo SSBD?

La vulnerabilidad a [fallo SSBD](https://www.kernel.org/doc/html/latest/userspace-api/spec_ctrl.html) puede comprobarse con el siguiente comando:

```bash
cat /sys/devices/system/cpu/vulnerabilities/ssbd
```

Aunque el resultado sea `Vulnerable`, su instancia está protegida frente a esta falla.

La *flag CPU SSBD* no está disponible para su instancia, ya que puede provocar inestabilidad en determinados sistemas operativos.

### ¿Es posible la virtualización en la instancia?

Sí y no.

Sí, ya que la opción está activada (la *flag CPU VMX* está visible en su instancia). Así podrá utilizar cualquier solución de virtualización en su instancia (KVM, QEMU, VirtualBox, Xen, Hyper-V, etc.).

No, ya que una migración directa de su instancia se producirá (y puede producirse en cualquier momento, basándose en el ciclo de vida del hipervisor subyacente), su kernel Linux podría funcionar mal (kernel panic).

Siga [este enlace](https://www.linux-kvm.org/page/Nested_Guests#Limitations) para más información.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
