---
title: FAQ Public Cloud OVHcloud
excerpt: Encuentre las preguntas más frecuentes sobre los servicios Public Cloud de OVHcloud
updated: 2024-10-11
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

## FAQ Public Cloud

### Opciones y facturación

/// details | ¿Cómo funciona la facturación de Public Cloud?

El consumo realizado cada mes se factura entre los días 1 y 5 del mes siguiente. Si ha optado por una tarificación mensual, el pago de la cuota del mes entrante se factura junto con el consumo del mes anterior (instancias, Object Storage). En caso de cambiar un recurso a cuota mensual, se cargará inmediatamente la parte proporcional al período restante del mes en curso.
Tenga en cuenta que toda instancia será facturada mientras no sea eliminada del área de cliente de OVHcloud.
Puede consultar el consumo en el historial de uso de su proyecto. También puede elegir una facturación diferenciada para cada proyecto de Public Cloud, lo que permite una posible refacturación dentro de su empresa.

Para pasar de un modo de facturación a otro, consulte nuestra guía [Cambiar de facturación por horas a mensual](/pages/account_and_service_management/managing_billing_payments_and_services/changing_hourly_monthly_billing).

> [!success]
> Descuente con descuentos al contratar recursos de Public Cloud durante un período de 1 a 36 meses. Más información en nuestra página [Savings Plans](/links/public-cloud/savings-plan).

///

/// details | ¿Cómo asociar una instancia de Public Cloud al Savings Plan que acabo de contratar?

No es necesario realizar ninguna acción. Cualquier instancia ya creada (o creada próximamente) que se corresponda con el modelo elegido para su [Savings Plan](/links/public-cloud/savings-plan) se añadirá automáticamente, siempre que no se agote la cantidad de recursos del Savings Plan.

///

/// details | ¿Cómo puedo escalar mis instancias si necesito más o menos recursos?

Cualquier instancia puede redimensionarse hacia una instancia más potente de la misma gama desde el área de cliente, haciendo clic en el botón `Editar`{.action} en la página de la instancia. También es posible redimensionar la migración hacia un modelo inferior, si se ha iniciado con la opción "flex". Esta opción impone un tamaño de disco de 50 GB para todos los modelos, permitiendo así redimensionamientos en ambos sentidos.
En cualquier caso, el redimensionamiento de una instancia requiere un reinicio.

///

/// details | ¿Las instancias de Public Cloud son compatibles con cloud-init?

Sí, las imágenes cloud que ofrece OVHcloud incluyen los scripts cloud-init que permiten personalizar las instancias al iniciarlas. La infraestructura entrega la información de personalización de la instancia a través de un servidor de metadatos con el que cloud-init comunica directamente.

///

/// details | ¿Es posible la virtualización en la instancia?

Sí y no.

Sí, ya que la opción está activada (la *flag CPU VMX* está visible en su instancia). Así podrá utilizar cualquier solución de virtualización en su instancia (KVM, QEMU, VirtualBox, Xen, Hyper-V, etc.).

No, ya que una migración directa de su instancia se producirá (y puede producirse en cualquier momento, basándose en el ciclo de vida del hipervisor subyacente), su kernel Linux podría funcionar mal (kernel panic).

Siga [este enlace](https://www.linux-kvm.org/page/Nested_Guests#Limitations) para más información.

///

### Conexión a una instancia

/// details | ¿Cómo conectarse a una instancia de Public Cloud?

La conexión se realiza gracias a un par de llaves SSH que deberá configurar al crear la instancia de Public Cloud.

Para más información, consulte la guía [Crear y conectarse a una primera instancia de Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps).

///

/// details | He perdido o quiero cambiar la llave SSH, ¿cómo puedo hacerlo?

Si no puede conectarse debido a la pérdida de su clave privada, deberá cambiar la clave pública de su instancia pasando esta a modo de rescate.

Por favor, consulte la guía [Modificar su llave SSH en caso de pérdida](/pages/public_cloud/compute/replacing_lost_ssh_key).

///

/// details | ¿Cómo crear y gestionar usuarios de OpenStack?

Para poder utilizar las API Horizon o OpenStack, es necesario crear previamente un usuario OpenStack. Puede crear un número ilimitado.

Para más información, consulte la guía [Crear y eliminar un usuario de OpenStack](/pages/public_cloud/compute/create_and_delete_a_user).

///

### Copias de seguridad

/// details | ¿Es posible guardar copia de seguridad de mis servidores Public Cloud?

En cualquier momento puede crear una copia de seguridad de una instancia desde el área de cliente de OVHcloud. con la que podrá restaurar su instancia con una configuración anterior o volver a crearla. Estas copias de seguridad se almacenan y facturan al igual que las imágenes en "Private Image". A través de las API de OpenStack, tendrá la posibilidad de descargarlas fuera de la infraestructura de OVHcloud o en otros proyectos.

Para más información, consulte la guía [Guardar una copia de seguridad de una instancia](/pages/public_cloud/compute/save_an_instance).

///

/// details | ¿Puedo aumentar dinámicamente el tamaño de un volumen mientras sigo escribiendo en el disco?

No, es necesario desvincular un volumen antes de poder aumentarlo.

///

/// details | ¿Cuántos volúmenes adicionales puedo asociar a cada instancia?

Puede asociar hasta 25 volúmenes adicionales por instancia.

///

### Red

/// details | ¿Cuántas direcciones IPv6 se entregan con mi instancia?

Cada instancia incluye una dirección IPv6.

///

/// details | ¿Puedo cambiar la IP pública de mi instancia?

Las IP públicas se asignan automáticamente a las instancias, por lo que no pueden modificarse. Para controlar la IP pública de una instancia, le recomendamos que utilice una Additional IP. De este modo, cualquiera que sea la dirección pública que se haya asignado automáticamente a la instancia, puede añadir una o varias Additional IP a su instancia.

Para más información, consulte la guía [Comprar una Additional IP](/pages/public_cloud/public_cloud_network_services/additional-ip-buy).

///

/// details | ¿Cuántas direcciones Additional IP puedo adjuntar a cada instancia?

Puede adjuntar hasta 256 direcciones Additional IP por instancia.

///

/// details | ¿Cómo puedo crear una red privada entre mis servidores?

Public Cloud integra una solución SDN (software-defined network). que permite crear redes privadas dinámicamente y conectarlas a las instancias desde el área de cliente o a través de la API.
Estas redes privadas se basan en la tecnología vRack de OVHcloud, compartida con otros servicios de la empresa, como Private Cloud o servidores dedicados. de esta forma, la solución ofrece la posibilidad de comunicar todos sus elementos de infraestructura con OVHcloud de forma aislada y segura.

Para más información, consulte la guía [Configuración del vRack Public Cloud](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack).

La red privada dispone por defecto de las protecciones de red nativas de OpenStack. Estas incluyen diferentes mecanismos, como la protección contra el spoofing de IP.<br>
En cuanto a las instancias, esto puede traducirse en bloques de paquetes de red según el uso (pfSense, router, protocolo CARP, etc.).

Si lo necesita, deberá desactivar la función de `Port Security` en el puerto o la red privada.
Para más información, consulte la guía [gestión de las reglas de firewall y port security en las redes que utilizan OpenStack CLI](/pages/public_cloud/compute/security_group_private_network).

También encontrará más información sobre [documentación de OpenStack](https://docs.openstack.org/developer/dragonflow/specs/mac_spoofing.html) o sobre [superuser.openstack.org](https://superuser.openstack.org/articles/managing-port-level-security-openstack/).

///

### Seguridad

/// details | ¿Cómo están protegidos mis servidores?

OVHcloud protege toda su infraestructura gracias a su solución anti-DDoS exclusiva. Además, puede añadir los grupos de seguridad OpenStack: este equivalente de un cortafuegos se gestiona directamente a nivel de la infraestructura de OpenStack, antes de sus instancias.

Le invitamos a consultar la guía [Configurar un grupo de seguridad](/pages/public_cloud/compute/setup_security_group).

Estos sistemas de protección, combinados con los que usted puede implementar en sus servidores, le permitirán optimizar la fiabilidad de su despliegue.

///

/// details | ¿Cómo comprobar si mi instancia es vulnerable a la fallo MDS?

La vulnerabilidad a [fallo MDS](https://www.kernel.org/doc/html/latest/admin-guide/hw-vuln/mds.html) puede comprobarse con el siguiente comando:

```bash
cat /sys/devices/system/cpu/vulnerabilities/mds
```

Si el resultado es `Vulnerable`, no tenga miedo, el hipervisor subyacente te protege.

No obstante, es posible mitigar este fallo directamente en su instancia realizando un "hard reboot" de su instancia, bien [a través del área de cliente de OVHcloud](/pages/public_cloud/compute/first_steps_with_public_cloud_instance), o bien con un comando como este:

```bash
openstack server reboot --hard $serverID
```

///

/// details | ¿Mi instancia sigue siendo vulnerable a la fallo SSBD?

La vulnerabilidad a [fallo SSBD](https://www.kernel.org/doc/html/latest/userspace-api/spec_ctrl.html) puede comprobarse con el siguiente comando:

```bash
cat /sys/devices/system/cpu/vulnerabilities/ssbd
```

Aunque el resultado sea `Vulnerable`, su instancia está protegida frente a esta falla.

La *flag CPU SSBD* no está disponible para su instancia, ya que puede provocar inestabilidad en determinados sistemas operativos.

///

## Más información

Interactúe con nuestra [comunidad de usuarios](/links/community).
