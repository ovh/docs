---
title: "Modo rescue Windows en un servidor dedicado"
excerpt: "Inicie su servidor dedicado Windows en modo rescue de OVHcloud para solucionar problemas, reparar o restablecer contraseñas"
updated: 2025-01-28
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

El modo de rescate es una herramienta proporcionada por OVHcloud que permite arrancar en un sistema operativo temporal. Su objetivo es diagnosticar y resolver los problemas del servidor.

El funcionamiento general del modo de rescate se describe en la guía [Cómo activar y utilizar el modo de rescate](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

La opción **Windows customer rescue system** sólo está disponible para los servidores dedicados que tengan instalado un sistema operativo **Windows Server**. Se aplican las siguientes condiciones:

- El sistema rescue para Windows (`rescue-customer-windows`) funciona en una máquina virtual (MV) lanzada desde el sistema rescue cliente (`rescue-customer`, basado en Debian GNU/Linux).
- Los discos del servidor están asociados a la MV con *passthrough*, por lo que es posible acceder a ellos.
- Los demás componentes del servidor serán inaccesibles (CPU, RAM, tarjeta de red, tarjeta RAID).
- La red está montada con *passthrough* pero sin acceso directo a la tarjeta de red. La MV lleva la dirección IP y la dirección MAC del servidor *bare metal*.

> [!warning]
>
> Asegúrese de realizar una copia de seguridad de sus datos si todavía no dispone de una copia de seguridad reciente.
>
> Si tiene servicios en producción en su servidor, el modo de rescate los interrumpirá hasta que la máquina se haya reiniciado en modo normal.
>

**Aprenda a arrancar un servidor en el sistema de reserva del cliente de Windows.**

## Requisitos

- Microsoft Windows instalado en su [servidor dedicado](/links/bare-metal/bare-metal)
- Al menos 16 GB de RAM instalados en el servidor

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Servidores dedicados](/links/control-panel/baremetal-dedicated-servers)
- **Ruta de navegación:** `Bare Metal Cloud`{.action} > `Servidores dedicados`{.action} > Seleccione su servidor

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## Procedimiento

### Activación del modo de rescate para Windows

Haga clic en el nombre de su servidor para abrir la pestaña `Información general`{.action}.

<a name="netboot"></a>

En el cuadro **Información general**, haga clic en el botón `...`{.action} situado junto a `Boot`. Haga clic en `Editar`{.action} en el menú contextual.

![Cambiar modo de arranque](images/rescue-mode-001.png){.thumbnail}

En la página **Editar el netboot**, seleccione `Arrancar en modo rescue`{.action}.

Seleccione `Windows customer rescue system`{.action} en el menú desplegable.

![Cambiar modo de arranque](images/manager-rescue-windows-menu.png){.thumbnail width="800"}

El email de notificación del modo de rescate, junto con sus claves de acceso, se enviará a la dirección de correo electrónico de contacto de su cuenta de OVHcloud. Para utilizar otra dirección de correo electrónico, introdúzcala en el campo `Recibir las claves del modo de la dirección de correo electrónico`.

Haga clic en `Siguiente`{.action}.

En el paso **Resumen**, haga clic en `Aceptar`{.action}.

![Summary](images/winresc_summ.png){.thumbnail}

Ahora debería recibir una notificación sobre el parámetro `Netboot` en la pestaña `Información general`{.action}.

![Netboot](images/rescue-mode-006.png){.thumbnail}

El último paso consiste en reiniciar el servidor. Haga clic en el botón `...`{.action} situado junto a "Estado" en el cuadro **Estado de los servicios** y seleccione `Reiniciar`{.action}. Haga clic en `Aceptar`{.action} en la ventana emergente.

![Reboot](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/dedicated-servers/general-information/rebooting-your-server.png){.thumbnail}

Este *hard reboot* tardará unos minutos en completarse. Puede comprobar el estado actual en la pestaña `Tareas`{.action}.

> [!primary]
>
> Una vez que haya completado las acciones en modo de rescate, no olvide cambiar el parámetro `Netboot` a `Arrancar en el disco duro`{.action} antes de reiniciar el servidor.

### Acceder al servidor en modo de rescate

Una vez que haya recibido el mensaje de correo electrónico informándole de que el modo de rescate está activado, puede conectarse al sistema a través del modo de rescate de Windows y acceder a su servidor.  
Una vez enviado el mensaje de correo electrónico, ya puede consultarlo en el [área de cliente de OVHcloud](/links/manager). Haga clic en el nombre asociado a su ID de cliente en la esquina superior derecha y seleccione `Correo de servicio`{.action}.

Para establecer una sesión remota en el sistema en modo de rescate de Windows, necesitará las siguientes credenciales:

- Dirección IP del servidor
- Nombre de usuario de la cuenta de administrador temporal (`Administrator`)
- Contraseña de la cuenta de administrador temporal

Puede utilizar los siguientes métodos de conexión para acceder al servidor a través del sistema en modo de rescate de Windows:

- Remote Desktop Protocol (RDP)
- KVM over IP (si su servidor lo permite)
- OpenSSH (componente oficial de Windows Server)

#### RDP

/// details | Despliegue esta sección

Para conectarse, utilice el cliente Windows `Remote Desktop Connection` o cualquier aplicación compatible.

![rdp connection](/pages/assets/screens/other/windows/windows_rdp.png){.thumbnail}

///

#### KVM

/// details | Despliegue esta sección

En la pantalla de inicio de sesión de KVM, puede seleccionar otro idioma de teclado.

![KVM Login Screen](images/rescue-kvm-login-screen.png){.thumbnail width="800"}

![KVM Language Screen](images/rescue-kvm-login-language.png){.thumbnail width="800"}

Puede cambiar las opciones de accesibilidad y activar el teclado virtual:

![KVM accessibility Screen](images/rescue-kvm-login-accessibility.png){.thumbnail width="800"}

![KVM keyboard screen](images/rescue-kvm-login-keyboard.png){.thumbnail width="800"}

Para más información, consulte nuestra guía: [Cómo utilizar la consola IPMI con un servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers)

///

#### SSH

/// details | Despliegue esta sección

Abra la aplicación de línea de comandos en el dispositivo local e introduzca el siguiente comando:

```bash
ssh Administrator@SERVER_IP
```

Ejemplo:

```bash
ssh Administrator@203.0.113.100
```

Introduzca la contraseña del modo de rescate temporal cuando se le solicite. Ejemplo:

```console
Administrator@ns9356771.ip-203-0-113.eu's password:
administrator@WINRESCUEOVH C:\Users\Administrator>
```

Para más información sobre las conexiones SSH, consulte nuestra [guía de introducción al SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).  
También puede utilizar cualquier herramienta de conexión SSH, como [PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows).

///

### Importación de discos para acceder a sus archivos

Una vez que se haya conectado al sistema de reserva del cliente de Windows, deberá importar (*mount*) los discos del servidor de Windows para poder acceder al sistema de archivos.

/// details | Despliegue esta sección

> [!warning]
> A continuación se muestran ejemplos de instrucciones y capturas de pantalla que muestran el proceso de montaje basado en servidor con dos discos duplicados (RAID1). Los detalles que muestra la herramienta Administración de discos dependen de la configuración de disco del servidor.  
> Para obtener más información, consulte la [documentación oficial de Microsoft](https://learn.microsoft.com/en-us/windows-server/storage/disk-management/overview-of-disk-management).
>
> Si necesita ayuda profesional para administrar su servidor, consulte la sección [Más información](#gofurther) de esta guía.

| ![Administración de discos de Windows](images/rescue-disk-mgmt1.png){.thumbnail} |
|---|
| Haga clic derecho en el botón `Start Menu`{.action} y abra `Disk Management`{.action}. |

| ![Administración de discos de Windows](images/rescue-disk-mgmt2.png){.thumbnail width="700"} |
|---|
| `Disk 0` contiene el sistema rescue (volume `C:`). Los discos de su servidor Windows se mostrarán como `Offline`. |

| ![Administración de discos de Windows](images/rescue-disk-mgmt3.png){.thumbnail} |
|---|
| Haga clic derecho en cada disco y seleccione `Online`{.action} en el menú contextual. |

| ![Administración de discos de Windows](images/rescue-disk-mgmt4.png){.thumbnail} |
|---|
| Los discos del servidor están ahora [reconocidos por el sistema rescue como `Foreign`](https://learn.microsoft.com/en-us/troubleshoot/windows-server/backup-and-storage/troubleshoot-disk-management#a-dynamic-disks-status-is-foreign), un estado que indica que los discos adjuntos pertenecen a un sistema operativo diferente. |

| ![Administración de discos de Windows](images/rescue-disk-mgmt5.png){.thumbnail} |
|---|
| Haga clic derecho en un disco y seleccione `Import Foreign Disks...`{.action} en el menú contextual. |

| ![Administración de discos de Windows](images/rescue-disk-mgmt6.png){.thumbnail} |
|---|
| Si lo desea, seleccione los discos que desea importar. Haga clic en `OK`{.action}. |

| ![Administración de discos de Windows](images/rescue-disk-mgmt7.png){.thumbnail} |
|---|
| Haga clic en `OK`{.action}. |

| ![Administración de discos de Windows](images/rescue-disk-mgmt8.png){.thumbnail} |
|---|
| En este ejemplo, los dos discos del servidor están duplicados, por lo que se mostrará el estado `Resynching`. Este es el proceso normal; la resincronización continuará cuando el servidor se reinicie en su sistema operativo instalado. |

| ![Administración de discos de Windows](images/rescue-disk-mgmt9.png){.thumbnail} |
|---|
| Para acceder a sus archivos, haga clic derecho en la partición Windows de su `Disk 1` y seleccione `Open`{.action} en el menú contextual. |

///

### Utilidades recomendadas

> [!primary]
>
> No hay software adicional preinstalado en el sistema en modo de rescate. A continuación se incluye una lista de las herramientas recomendadas, disponibles en el sitio web de sus respectivos desarrolladores.

| Software | Descripción |
| --- | --- |
| CrystalDiskInfo | Herramienta de diagnóstico de discos |
| 7-Zip | Herramienta de gestión de archivos |
| FileZilla | Cliente FTP |

### Salida del modo de rescate

En su [área de cliente de OVHcloud](/links/manager), [cambie el modo de arranque](#netboot) de nuevo a `Arrancar en el disco duro`{.action} y acepte.

![Netboot Disk](images/rescue-mode-007.png){.thumbnail width="800"}

A continuación, utilice la función `Reiniciar`{.action} en el área de cliente de OVHcloud.

<a name="gofurther"></a>

## Más información

[Cómo activar y utilizar el modo de rescate](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[Cómo cambiar la contraseña de administrador en un servidor dedicado Windows](/pages/bare_metal_cloud/dedicated_servers/rcw-changing-admin-password-on-windows)

Para servicios especializados (posicionamiento web, desarrollo...), póngase en contacto con los [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).