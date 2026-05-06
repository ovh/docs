---
title: Cómo utilizar la consola KVM para acceder a un VPS
excerpt: Descubra cómo conectarse a su VPS a través de un navegador web gracias a la funcionalidad KVM
updated: 2025-02-07
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

La consola KVM para VPS, disponible en el área de cliente de OVHcloud, le permite abrir una conexión a su VPS en su navegador web, independientemente de un programa de conexión adicional. En este contexto, KVM significa "*keyboard, video, and mouse*", en referencia al método de entrada/salida emulada de la conexión remota.

> [!primary]
>
> Tenga en cuenta que la consola KVM no es una solución alternativa si ha perdido el acceso al sistema operativo de su VPS. Deberá [utilizar el modo de rescate del VPS para recuperar el acceso al servidor](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password).

**Esta guía explica cómo utilizar la consola KVM para acceder a su VPS.**

## Requisitos

- Un [VPS](/links/bare-metal/vps) en su cuenta de OVHcloud.

<!-- CP-NAV-START:baremetal-vps -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [VPS management](/links/control-panel/baremetal-vps)
- **Ruta de navegación:** `Bare Metal Cloud`{.action} > `Servidores privados virtuales`{.action} > Seleccione su VPS

---
<!-- CP-NAV-END:baremetal-vps -->

## Procedimiento

### Cómo abrir la consola KVM desde el área de cliente de OVHcloud

En la pestaña `Información general`{.action}, haga clic en el botón `...`{.action} situado junto al nombre de su VPS en la sección **Su VPS**.

![Open KVM](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/vps/cp_kvm.png){.thumbnail}

### Cómo abrir la consola KVM a través de la API de OVHcloud

/// details | Despliegue esta sección

Si no está familiarizado con el uso de la API de OVHcloud, consulte nuestra guía "[Primeros pasos con las API de OVHcloud](/pages/manage_and_operate/api/first-steps)".

Para recuperar la URL de acceso KVM, abra este extremo:

> [!api]
>
> @api {v1} /vps POST /vps/{serviceName}/getConsoleUrl
>

Introduzca el nombre interno de su VPS (`vps-x11x11xyy.vps.ovh.net`) en el campo `serviceName`.

Pulse el botón `EXECUTE`{.action}.

La URL de acceso se mostrará en la sección `RESPONSE`.

///

### Uso de la consola KVM

Si accede al KVM desde el área de cliente, aparecerá una ventana emergente. Para usarlo en pantalla completa, haga clic en el vínculo `Abrir en ventana nueva`{.action} en la esquina inferior derecha. Normalmente, esto abrirá una nueva pestaña del explorador.

![Conexión al KVM](images/kvm_screen.png){.thumbnail}

La pantalla KVM que se muestra depende del sistema operativo y del estado individual del VPS. Si se le pide, inicie sesión con las credenciales de una cuenta de usuario activa.

También puede utilizar software cliente de terceros para conectarse.

#### Cómo cambiar la distribución del teclado

> [!primary]
>
> El teclado de la consola KVM puede tener una distribución diferente a la suya. Antes de escribir una contraseña, escriba algunos caracteres para comprobar el diseño, por ejemplo, mediante [esta página](https://en.wikipedia.org/wiki/Keyboard_layout#Conventional_Latin-script_keyboard_layouts).
>

Puede activar la distribución de teclado deseada para facilitar el uso de la consola. Introduzca el siguiente comando:

```bash
sudo dpkg-reconfigure keyboard-configuration
```

Si es necesario, instale primero el paquete a través del gestor de paquetes de su distribución (`sudo dnf install keyboard-configuration` o `sudo apt install keyboard-configuration`).

Se abrirá un menú gráfico en el que podrá seleccionar un modelo de teclado.

![KVM](images/kvm_vps01.png){.thumbnail}

Utilice las teclas de flecha para acceder a la opción más cercana a su dispositivo y pulse `Enter`{.action}.

En el menú siguiente, seleccione su país.

![KVM](images/kvm_vps02.png){.thumbnail}

En el tercer menú, puede especificar la distribución real del teclado.

![KVM](images/kvm_vps03.png){.thumbnail}

En función de las selecciones, pueden aparecer otras opciones después del tercer menú.

Al volver a la línea de comandos, introduzca el siguiente comando para aplicar los cambios:

```bash
sudo systemctl restart keyboard-setup
```

> [!primary]
>
> Este cambio no persistirá si se reinicia el servidor.
>

## Más información

Para servicios especializados (posicionamiento web, desarrollo...), póngase en contacto con los [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas [ofertas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).