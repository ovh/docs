---
title: "Primeros pasos con un servidor dedicado Kimsufi, So you Start o Rise"
excerpt: "Cómo gestionar un servidor dedicado Kimsufi, So you Start o Rise en su área de cliente y cómo empezar con la configuración y la seguridad de un servidor"
updated: 2024-04-10
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

Un servidor dedicado es un servidor físico ("bare metal") situado en uno de nuestros datacenters. A diferencia de los planes de hosting (también denominados "shared hosting"), que son técnicamente gestionados por OVHcloud, usted es el único responsable de la administración de su servidor dedicado.

**Esta guía le ofrece toda la información necesaria para empezar a utilizar un servidor dedicado Kimsufi, So you Start o Rise.**

## Requisitos

- Tener un [servidor dedicado](/links/bare-metal/bare-metal) de las gamas Kimsufi, So you Start o Rise en el área de cliente de OVHcloud.
- Estar conectado al servidor por SSH en Linux o a través de un escritorio remoto en Windows.
- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager).

## Procedimiento

### Contenido

- [Instalación o reinstalación de un sistema operativo](#install)
- [Conexión al servidor](#connect)
- [Reinicio del servidor dedicado](#reboot)
- [Seguridad de su servidor dedicado](#secure)
- [Monitorización OVHcloud](#monitoring-server)
- [Configuración de red](#network)
- [Modo de rescate](#rescue)
- [Acceso a la ayuda del IPMI](#console)
- [Backup Storage](#backup)

<a name="install"></a>

### Instalación o reinstalación de un sistema operativo

> [!success]
>
> Más información sobre los sistemas operativos de los servidores en [nuestra página web](/links/bare-metal/os).
>

Puede reinstalar fácilmente su servidor o elegir otra imagen de SO para instalar en su [área de cliente de OVHcloud](/links/manager). En la pestaña `Información general`{.action}, haga clic en `...`{.action} delante del sistema operativo y seleccione `Instalar`{.action}.

![Reinstalar](images/reinstalling-your-server-01.png){.thumbnail}

En la nueva ventana, seleccione una de las opciones de instalación:

- `Instalar desde una plantilla de OVHcloud`{.action}: puede seleccionar el sistema operativo y personalizar la configuración de su servidor.
- `Instalar una de sus plantillas`{.action}: para poder aplicar una plantilla personalizada, es necesario haber guardado previamente al menos una configuración de servidor. Para ello, marque la opción "Guardar esta instalación" en el paso 4 del proceso de instalación.
- `Instalar desde una imagen personalizada`{.action}: esta opción le permite instalar una imagen externa en el servidor. Para más información sobre esta opción, consulte la [guía Bring Your Own Image](/pages/bare_metal_cloud/dedicated_servers/bring-your-own-image).

> [!primary]
>
> Algunos sistemas operativos o plataformas propietarias, como Plesk o Windows, necesitan licencias que generan costes adicionales. Puede adquirir licencias [con OVHcloud](/links/bare-metal/os) o con un revendedor externo. A continuación, deberá aplicar la licencia en el propio sistema operativo o desde el [área de cliente de OVHcloud](/links/manager).
>
> Puede gestionar todas sus licencias en la sección `Bare Metal Cloud`{.action}, con `Licencias`{.action}. En esta sección también puede contratar licencias o añadir licencias existentes a través del botón `Acciones`{.action}.
>

Haga clic en `Siguiente`{.action} para continuar.

![Selección de plantilla](images/reinstalling-your-server-02.png){.thumbnail}

Una vez elegido `Instalar desde una plantilla de OVHcloud`{.action}, puede seleccionar el sistema operativo en los menús desplegables.

![Selección operativa](images/reinstalling-your-server-03.png){.thumbnail}

Si necesita cambiar el esquema de partición del sistema operativo, marque la casilla "Personalizar la configuración de las particiones" antes de hacer clic en `Siguiente`{.action}.

![Personalizar la configuración de las particiones](images/reinstalling-your-server-04.png){.thumbnail}

Este paso le permite configurar el tipo de RAID y la partición, dentro de los límites del hardware y del sistema operativo.

Una vez realizados los ajustes, haga clic en `Siguiente`{.action} para acceder a la página de resumen.

Esto incluye preguntas adicionales específicas para el sistema operativo seleccionado.          

Por ejemplo, si instala un sistema operativo GNU/Linux, puede añadir su llave SSH.

Para más información sobre la generación de llaves SSH, consulte [nuestra guide](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated).

![configuración SSH](images/reinstalling-your-server-05.png){.thumbnail}

Por último, haga clic en `Confirmar`{.action} para instalar el sistema operativo en su servidor dedicado.

<a name="connect"></a>

### Conexión al servidor

> [!warning]
> OVHcloud pone a su disposición servicios cuya configuración y gestión son responsabilidad suya. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía explica las tareas más habituales. No obstante, le recomendamos que contacte con un [proveedor de servicios especializado](/links/partner) si tiene problemas o dudas sobre la administración, el uso o la implementación de servicios en un servidor.
>

#### Linux

Si ha instalado un modelo de SO de OVHcloud en su servidor, se crea automáticamente un usuario con permisos elevados. El nombre del usuario dependerá del sistema operativo, por ejemplo, «ubuntu» o «rocky».

Recibirá por correo electrónico la información necesaria para establecer una conexión SSH inicial. SSH es un protocolo de comunicación seguro que se utiliza para establecer conexiones cifradas con un host remoto. Para más información, consulte nuestra guía: [Primeros pasos en SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).

La mayoría de los sistemas operativos actuales tienen un cliente **Open SSH** instalado de forma nativa. Esto significa que sus claves de acceso le permiten establecer rápidamente una conexión con su servidor desde su puesto de trabajo a través de la aplicación de línea de comandos adecuada (`Terminal`, `Command prompt`, `Powershell`, etc.). Introduzca el siguiente comando:

```bash
ssh username@IPv4
```

**Ejemplo:**

```bash
ssh ubuntu@203.0.113.1
```

También puede utilizar cualquier aplicación de terceros compatible con **Open SSH**.

Una vez que se haya conectado, puede sustituir la contraseña predefinida del usuario actual por una frase de contraseña mejor (*passphrase*) utilizando este comando:

```bash
passwd
```

En una distribución GNU/Linux, **una petición de contraseña no mostrará sus entradas de teclado**.

Escriba su contraseña actual y presione `Entrar`{.action}. Escriba la nueva frase de contraseña y vuelva a escribirla en el siguiente mensaje para confirmarla.

```console
Changing password for ubuntu.
Current password:
New password: 
Retype new password: 
passwd: password updated successfully
```

> [!warning]
> 
> **Activación de la cuenta de usuario root**
>
> No es necesario utilizar la cuenta de usuario "root" para iniciar la administración del servidor. Esta cuenta debe estar habilitada en el sistema operativo del servidor para poder usarla. Además, como medida de seguridad, las conexiones SSH con el usuario root están **desactivadas** por defecto.
> 
> A menos que se indique lo contrario, todas las acciones de administración descritas en nuestra documentación pueden ser realizadas por la cuenta de usuario predeterminada, es decir, escribiendo `sudo` seguido del comando correspondiente. Para más información, consulte nuestra guía sobre la [configuración de las cuentas de usuario y el acceso root en un servidor](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).
>

En función de sus necesidades en materia de seguridad, movilidad y comodidad, las llaves SSH pueden servir como método de conexión adicional o incluso sustituir una identificación mediante un nombre de usuario y una contraseña. Esta guía explica cómo utilizarlas: [Crear y utilizar llaves SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated).

#### Windows

Una vez finalizada la instalación, recibirá por correo electrónico las claves de acceso de Windows. A continuación, puede conectarse al servidor mediante RDP (**R**emote **D**esktop **P**rotocol). En su dispositivo Windows local, abra la aplicación `Remote Desktop Connection`.

![Windows Remote](/pages/assets/screens/other/windows/windows_rdp.png){.thumbnail}

Introduzca la dirección IPv4 del servidor, su nombre de usuario y su contraseña. Normalmente, aparece un mensaje de advertencia solicitándole que confirme la conexión debido a un certificado desconocido. Haga clic en `Sí`{.action} para conectarse.

También puede utilizar cualquier aplicación de terceros compatible con RDP. Este requisito es necesario si Windows no está instalado en el dispositivo local.

> [!primary]
>
> Si tiene problemas con este método, compruebe que las conexiones remotas (RDP) están permitidas en su equipo mediante la inspección de la configuración del sistema, las reglas de firewall y las posibles restricciones de red.
> 

Como solución de seguridad, puede utilizar la [consola IPMI en el área de cliente de OVHcloud](#console) para conectarse.

##### Activación de los logs de inicio de Windows (opcional)

Los logs de inicio de Windows pueden ser útiles para los diagnósticos de errores del servidor.

Para activarlas, siga los pasos que se indican a continuación en las fichas:

> [!tabs]
> 1. **Conectarse al servidor**
>>
>> Conéctese al servidor mediante RDP o [IPMI](#console).<br>
>>
> 2. **Abrir la utilidad "Run"**
>>
>> Abra el menú Inicio de Windows y haga clic en `Ejecutar`{.action}.<br><br>
>>![IPMI](/pages/assets/screens/other/windows/windows_start_run.png){.thumbnail}<br>
>>
> 3. **Abrir "msconfig"**
>>
>> Escriba "msconfig" y haga clic en `OK`{.action}.<br><br>
>>![IPMI](/pages/assets/screens/other/windows/windows_msconfig.png){.thumbnail}<br>
>>
> 4. **Activar los logs**
>>
>> En la nueva ventana, active la opción logs junto a `Boot log`. Haga clic en `OK`{.action}.<br><br>
>>![IPMI](/pages/assets/screens/other/windows/windows_log.png){.thumbnail}<br>
>>

La próxima vez que inicie el servidor, los logs se guardarán en un archivo `.txt`. La ruta del archivo es: `C:\Windows\ntbtlog.txt`.

Para acceder al archivo de logs en modo de rescate, siga las instrucciones de la [guía del modo de rescate](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

<a name="reboot"></a>

### Reinicio del servidor dedicado

Es posible que necesite reiniciar para aplicar configuraciones actualizadas o resolver un problema. En la medida de lo posible, ejecute el "soft reboot" del servidor en la siguiente línea de comandos:

```bash
reboot
```

No obstante, puede realizar "hard reboot" en cualquier momento desde el [área de cliente de OVHcloud](/links/manager). En la pestaña `Información general`{.action}, haga clic en `...`{.action} frente a "Estado" en la zona **Estado de los servicios** y seleccione `Reiniciar`{.action} y `Aceptar`{.action} en la ventana emergente.

![Reinicio](images/rebooting-your-server.png){.thumbnail}

<a name="secure"></a>

### Seguridad de su servidor dedicado

Como se recuerda en el apartado Objetivo de esta guía, usted es el administrador de su servidor dedicado Como tal, usted es responsable de sus datos y de su seguridad. Para más información sobre la seguridad de su servidor, consulte nuestra guía [Proteger un servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server).

Si utiliza un servidor Windows, consulte [esta guía](/pages/bare_metal_cloud/dedicated_servers/activate-port-firewall-soft-win).

<a name="monitoring-server"></a>

### Monitorización OVHcloud

Puede activar o desactivar la monitorización de un servidor dedicado desde la pestaña `Información general`{.action} de su [área de cliente de OVHcloud](/links/manager). La opción se encuentra en la sección `Estado de los servicios`.

![Monitoring](images/monitoring-your-server.png){.thumbnail}

Haga clic en el botón `Configurar`{.action}. En el cuadro de diálogo, se mostrarán tres opciones para el comportamiento de la vigilancia:

- **Desactivado**: Esta opción detiene los mensajes de alerta y las intervenciones de OVHcloud. Seleccione esta opción si ejecuta acciones de administración relevantes en el servidor que impidan una respuesta ICMP.
- **Activado con intervención proactiva**: Si el servidor no responde, recibirá un mensaje de correo electrónico de alerta y el servidor será verificado por un técnico.
- **Activado sin intervención proactiva**: Recibirá un mensaje de alerta por correo electrónico en caso de que el servidor deje de responder. Para iniciar una intervención, es necesario crear una solicitud de asistencia.

![Monitoring](images/monitoring-your-server2.png){.thumbnail}

Haga clic en `Confirmar`{.action} para actualizar su configuración de monitorización.

Para más información sobre la monitorización de OVHcloud, consulte [esta guía](/pages/bare_metal_cloud/dedicated_servers/network_ip_monitoring).

<a name="network"></a>

### Configuración de red

> [!primary]
>
> Tenga en cuenta que las direcciones [IP adicionales](/links/network/additional-ip) no son compatibles con la gama **Kimsufi**.
>

#### Modo bridge IP

El modo bridge es la acción emprendida por el dispositivo de red para crear una red agregada a partir de varias redes de comunicación o de varios segmentos de red. El modo bridge es distinto del enrutado, que permite que las redes se comuniquen de forma independiente, pero al mismo tiempo se mantienen separadas.

Esta configuración se utiliza con frecuencia en virtualización, para que cada máquina virtual pueda tener su propia dirección IP pública.

Para más información sobre el modo bridge, consulte nuestra guía: [Modo bridge IP](/pages/bare_metal_cloud/dedicated_servers/network_bridging).

#### Alias IP

El modo alias IP se utiliza para asociar dos direcciones IP a una única interfaz de red para que así el servidor pueda establecer varias conexiones con una red, cada una de ellas con un objetivo diferente.

Para más información sobre la configuración del alias IP, consulte la guía [Configurar una dirección IP como alias](/pages/bare_metal_cloud/dedicated_servers/network_ipaliasing).

#### Configuración IPv6

> [!primary]
>
> Los servidores de la gama **Kimsufi** solo disponen de una dirección IPv4 y una dirección IPv6. Las direcciones se configurarán automáticamente al instalar el sistema operativo.
>

Todos los servidores dedicados de OVHcloud se entregan con un bloque /64 IPv6. Para utilizar las direcciones de este bloque, debe realizar cambios en la configuración de la red. Consulte nuestra guía [Configuración IPv6](/pages/bare_metal_cloud/dedicated_servers/network_ipv6).

<a name="rescue"></a>

### Modo de rescate

Para cualquier problema, el primer paso para solucionarlo es reiniciar el servidor en modo de rescate desde el [área de cliente de OVHcloud](/links/manager). Es importante identificar los problemas del servidor en este modo para excluir los problemas relacionados con el software antes de contactar con nuestro equipo de soporte.

Para más información, consulte la guía "[Activar y utilizar el modo de rescate"](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)".

<a name="console"></a>

### Acceso a la ayuda del IPMI

> [!primary]
>
> Atención: Esta opción no está disponible para la gama **Kimsufi**.
>

OVHcloud despliega todos los servidores dedicados con una consola IPMI (Intelligent Platform Management Interface) que se ejecuta en su navegador o a partir de un applet Java y le permite conectarse directamente a su servidor aunque no tenga conexión de red. Esto la convierte en una herramienta útil para resolver los problemas que han podido desconectar el servidor.

Para más información, consulte nuestra guía [Uso de IPMI con servidores dedicados](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers).

<a name="backup"></a>

### Backup Storage

> [!primary]
>
> Atención: Esta opción no está disponible para la gama **Kimsufi**.
>

Los servidores dedicados de OVHcloud incluyen un espacio de almacenamiento con control de acceso, que se proporciona como opción gratuita. Es preferible utilizarlo como opción de backup adicional si el propio servidor sufre una pérdida de datos.

Para activar y utilizar la opción Backup Storage, consulte [esta guía](/pages/bare_metal_cloud/dedicated_servers/services_backup_storage).

## Más información

[Configuración de las cuentas de usuario y del acceso root en un servidor](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds)

[Proteger un servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server)

[Activar y utilizar el modo de rescate](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[OVHcloud API & OS installation](/pages/bare_metal_cloud/dedicated_servers/api-os-installation) (EN)

Si necesita formación o asistencia técnica para implantar nuestras soluciones, póngase en contacto con su representante de ventas o haga clic en [este enlace](/links/professional-services) para obtener un presupuesto y solicitar un análisis personalizado de su proyecto a nuestros expertos del equipo de Servicios Profesionales.

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
