---
title: "VPS - Gestión desde el área de cliente de OVHcloud"
excerpt: "Descubra cómo utilizar el área de cliente de OVHcloud para gestionar su VPS: panel de control, reinicio, respaldos y configuración del servicio"
updated: 2026-01-21
---

## Objetivo

- Comprender la interfaz de gestión de los VPS.
- Identificar la información esencial.
- Saber dónde realizar las acciones principales.

## Requisitos

- Tener una oferta [VPS](/links/bare-metal/vps) activa en su área de cliente de OVHcloud.

> [!warning]
> Algunas funcionalidades de VPS mencionadas en esta página no están disponibles en las Local Zones de OVHcloud.
>
> Por favor, visite nuestra [página web de Local Zones](/links/bare-metal/vps-lz) para obtener más información.

<!-- CP-NAV-START:baremetal-vps -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [VPS management](/links/control-panel/baremetal-vps)
- **Ruta de navegación:** `Bare Metal Cloud`{.action} > `Servidores privados virtuales`{.action} > Seleccione su VPS

---
<!-- CP-NAV-END:baremetal-vps -->

## Procedimiento

Esta guía le ayuda a **comprender la interfaz de gestión de su VPS en el área de cliente de OVHcloud**, a identificar la información esencial y a utilizar las acciones principales disponibles (reinstalación, reinicio, copia de seguridad, configuración).

**Índice:**

- [Panel de control](#controlpanel)
- [Su VPS](#myvps)
- [Su configuración](#myconf)
- [IP](#ip)
- [Copia de seguridad](#save)
- [Mi solución](#myoffer)
- [Reiniciar su VPS](#rebootvps)
- [Reinstalar su VPS](#reinstallvps)

### Panel de control <a name="controlpanel"></a>

La pestaña `Inicio`{.action} constituye el **panel de control principal** de su VPS.

Centraliza la **información clave sobre el servicio** y da acceso a las **acciones esenciales de gestión**.

![VPS Home](images/vpshome.png){.thumbnail}

#### Su VPS <a name="myvps"></a>

Encuentre a continuación la información básica sobre su VPS y el estado del servicio. Haga clic en las pestañas siguientes para mostrar los detalles.

> [!tabs]
> Nombre
>>
>> Para personalizar el nombre de su VPS, haga clic en el botón `...`{.action} y seleccione `Cambiar el nombre`{.action}. Esta funcionalidad es útil para facilitar la navegación en el espacio cliente cuando gestiona varios servicios VPS. Sin embargo, el nombre interno del servicio sigue el formato *VPS-XXXXXXX.VPS.ovh.net*.
>>
> Boot
>>
>> El modo de arranque indicado es:
>>
>> - en **modo normal** (*LOCAL*), donde el servidor carga el sistema operativo instalado.
>> - en **modo de rescate**, proporcionado por OVHcloud en caso de avería.
>>
>> Utilice el botón `...`{.action} para [reiniciar el VPS](#rebootvps) o arrancarlo en modo de rescate si es necesario.
>>
>> Si es necesario, consulte más información en nuestra guía sobre el [modo rescue](/pages/bare_metal_cloud/virtual_private_servers/rescue).
>>
> SO/Distribución
>>
>> Este es el sistema operativo actualmente instalado. Utilice el botón `...`{.action} para [reinstalar el mismo sistema operativo o elegir otro entre las opciones disponibles](#reinstallvps).
>>
>> > [!warning]
>> >
>> > Una reinstalación provocará la eliminación de todos los datos actualmente alojados en el VPS (excepto los discos adicionales).
>>
>> > [!primary]
>> >
>> > Si ha adquirido un VPS **Windows**, solo podrá elegir un sistema operativo Windows para la reinstalación. Del mismo modo, si Windows no se seleccionó durante la compra, no podrá instalarse después de la entrega del VPS.
>>
>> Una vez instalado el sistema, usted es responsable de aplicar las actualizaciones de seguridad del sistema operativo. Puede encontrar más información en la sección "[Reinstalar su VPS](#reinstallvps)" así como en nuestra guía "[Seguridad de un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)".
>> 
> Zona/Localización
>>
>> Estas secciones proporcionan información sobre la localización de su VPS. Esto puede ser útil para identificar y evaluar los posibles impactos en su servicio, como los mencionados en los [informes de incidentes o mantenimiento](https://bare-metal-servers.status-ovhcloud.com/).
>>

#### Su configuración <a name="myconf"></a>

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/BbyE52W7aBo?si=mmgSmaqIxx0zzGz2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Haga clic en las pestañas siguientes para mostrar los detalles de esta sección.

> [!tabs]
> Modelo
>>
>> Este elemento indica la referencia comercial identificando el modelo de VPS, correspondiente a las [ofertas VPS en nuestro sitio](/links/bare-metal/vps).
>>
> vCores/Memoria/Almacenamiento
>> 
>> Los recursos actuales de su VPS se muestran aquí y pueden actualizarse por separado haciendo clic en el enlace correspondiente. Tenga en cuenta que las actualizaciones están limitadas por el modelo de VPS elegido y solo pueden estar disponibles al pasar a una [gama superior](/links/bare-metal/vps).
>>
> Discos adicionales
>> 
>> Añada discos adicionales a su VPS para aumentar la capacidad de almacenamiento de su servidor más allá de la incluida en la configuración inicial. Por ejemplo, puede almacenar datos de copia de seguridad.

#### IP <a name="ip"></a>

Haga clic en las pestañas siguientes para mostrar los detalles de esta sección.

> [!tabs]
> IPv4
>>
>> La dirección IPv4 pública principal del VPS se configura automáticamente durante la instalación. Encuentre más información sobre la gestión de IP en nuestra guía "[Configurar una dirección IP en alias](/pages/bare_metal_cloud/virtual_private_servers/configuring-ip-aliasing)".
>>
> IPv6/Gateway
>> 
>> Encuentre aquí la dirección IPv6 pública y la dirección de la pasarela asociada. Estas se adjuntan automáticamente al VPS durante la instalación. Encuentre más información en nuestra guía "[Configurar IPv6 en un servidor VPS](/pages/bare_metal_cloud/virtual_private_servers/configure-ipv6)".
>> 
> DNS secundario
>>
>> Esta funcionalidad es útil para alojar servicios DNS. Consulte nuestra guía "[Configurar un DNS secundario OVHcloud en un VPS](/pages/bare_metal_cloud/virtual_private_servers/adding-secondary-dns-on-vps)" para más detalles al respecto.

#### Copia de seguridad <a name="save"></a>

Estas opciones se refieren a servicios VPS adicionales para las copias de seguridad y la restauración de su sistema.

> [!tabs]
> Snapshot
>>
>> Una instantánea en un VPS es una copia instantánea del estado del servidor, que permite restaurar rápidamente el sistema en caso de problema. La opción `Snapshot` permite crear una instantánea manual como punto único de restauración.
>>
> Backup automatizado
>>
>> Se realiza automáticamente una copia de seguridad diaria del sistema (excepto los discos adicionales) y se conserva durante 24 horas (aplicable únicamente a los servicios adquiridos a partir del 7 de agosto de 2025). Al pasar a la opción "**Backup automático Premium**", dispondrá de las 7 últimas copias de seguridad diarias de su VPS, que podrá utilizar para montajes y restauraciones.  
>> En comparación con las instantáneas manuales, esta funcionalidad aumenta la seguridad de los datos al crear varios puntos de restauración a intervalos regulares.
>>

Encuentre toda la información sobre las soluciones de copia de seguridad disponibles para su servicio en la [página del producto VPS](/links/bare-metal/vps-options) y en [nuestras guías correspondientes](/products/bare-metal-cloud-virtual-private-servers-configuration).

#### Mi solución <a name="myoffer"></a>

Esta sección presenta la información más importante sobre la facturación de su servicio. Encuentre toda la información sobre este tema en [nuestras guías correspondientes](/products/account-and-service-management-managing-billing-payments-and-services).

<a name="hometab"></a>

### Funciones VPS disponibles en la pestaña "Inicio"

> [!warning]
>
> OVHcloud pone a su disposición servicios cuya configuración y gestión le incumben. Es por tanto su responsabilidad asegurarse de su buen funcionamiento.
>
> Esta guía tiene como objetivo acompañarle lo mejor posible en tareas habituales. Sin embargo, le recomendamos que contacte con un [proveedor de servicios especializado](/links/partner) o con [nuestra comunidad](/links/community) si tiene dificultades o dudas sobre la administración, el uso o la implementación de servicios en un servidor.
>

#### Reiniciar su VPS <a name="rebootvps"></a>

Un reinicio puede ser necesario para aplicar actualizaciones de configuración o para resolver un problema. En la medida de lo posible, realice un "reinicio software" desde la interfaz gráfica del servidor (Windows, Plesk, etc.) o a través del siguiente comando en la línea de comandos:

```bash
sudo reboot
```

Sin embargo, puede realizar un reinicio forzado en cualquier momento desde su [área de cliente de OVHcloud](/links/manager). Desde la pestaña `Inicio`{.action}, haga clic en el botón `...`{.action} junto a `Boot` en la sección **Su VPS**. Seleccione `Reiniciar mi VPS`{.action} y haga clic en `Confirmar`{.action} en la ventana que aparece.

![Reiniciar](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/vps/cp_reboot.png){.thumbnail}

#### Reinstalar su VPS <a name="reinstallvps"></a>

La reinstalación de su VPS puede realizarse desde su espacio cliente. Esta operación se utiliza normalmente en caso de problema del sistema, cambio de entorno o para comenzar con una instalación limpia.

Haga clic en el botón `...`{.action} a la derecha de `SO/Distribución`{.action}, y luego en `Reinstalar mi VPS`{.action}.

![Reinstalar](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/vps/cp_reinst.png){.thumbnail}

En la ventana que aparece, elija un sistema operativo en el menú desplegable. Las opciones propuestas son [imágenes compatibles con un VPS de OVHcloud](/pages/public_cloud/compute/image-life-cycle) y están inmediatamente operativas tras la instalación.

Si ha seleccionado un sistema operativo compatible, puede proporcionar una **clave pública** para instalar automáticamente. Tiene dos opciones:

- Copie manualmente la cadena de clave y péguela en el campo `Su llave SSH pública`.
- Si ha guardado previamente una clave pública en su [área de cliente de OVHcloud](/links/manager), seleccione la clave deseada en el menú desplegable `Llave SSH a preinstalar`.

![VPSnewreinstallation](images/reinstall.png){.thumbnail}

Para obtener más información sobre este tema, consulte nuestras guías:

- [Cómo crear y utilizar claves de autenticación para conexiones SSH a los servidores de OVHcloud](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)
- [Tutorial - Cómo utilizar PuTTY para conexiones SSH y autenticación](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

Si ha seleccionado una clave SSH y no necesita contraseña para conectarse, active la opción `No quiero recibir por correo electrónico los códigos de autenticación de mi VPS`.

> [!warning]
>
> La reinstalación formateará todos los discos del servidor. Se recomienda encarecidamente crear una instantánea de su VPS antes de continuar, para poder volver al estado anterior en caso de problema.
>

> [!primary]
>
> **Licencias**
>
> Algunos sistemas operativos o plataformas propietarias, como Plesk o cPanel, requieren licencias que generan gastos adicionales. Las licencias se administran desde su espacio cliente: vaya a la sección `Bare Metal Cloud`{.action}, y haga clic en `Licencias`{.action} en la barra de navegación de la izquierda.
>
> Para tener un sistema operativo **Windows** funcionando en un VPS, debe haberlo elegido previamente **en el proceso de compra**. Un VPS con otro sistema operativo instalado no puede reinstalarse con Windows mediante el método descrito anteriormente.
>

El proceso de reinstalación puede durar unos minutos.

## Más información

[VPS FAQ](/pages/bare_metal_cloud/virtual_private_servers/vps-faq)

[Introducción al SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Seguridad de un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

[Cómo recuperar el acceso al servidor en caso de pérdida de la contraseña del usuario](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)

Interactúe con nuestra [comunidad de usuarios](/links/community).