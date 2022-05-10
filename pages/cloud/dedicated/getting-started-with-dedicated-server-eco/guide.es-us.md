---
title: Primeros pasos con un servidor dedicado Kimsufi, So you Start o Rise
slug: getting-started-dedicated-server-eco
routes:
    canonical: 'https://docs.ovh.com/es/dedicated/primeros-pasos-servidor-dedicado/'
excerpt: 'Cómo empezar a utilizar un servidor dedicado Kimsufi, So you Start o Rise'
section: 'Primeros pasos'
order: 2
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 14/03/2022**

## Objetivo

Un servidor dedicado es un servidor físico situado en uno de nuestros datacenters. A diferencia de los planes de hosting (descritos como "compartidos"), que técnicamente son gestionados por OVHcloud, usted es el único responsable de la administración de su servidor dedicado.

**Esta guía ofrece algunos consejos para que pueda empezar a utilizar su servidor dedicado Kimsufi, So you Start o Rise.**

## Requisitos

- Tener un [servidor dedicado](https://www.ovhcloud.com/es/bare-metal/) de las gamas Kimsufi, So you Start o Rise en el área de cliente de OVHcloud.
- Estar conectado al servidor por SSH (acceso root) en Linux o a través de un escritorio remoto en Windows.
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).

## Procedimiento

Cuando su servidor dedicado esté configurado por primera vez durante el proceso de pedido, puede seleccionar el sistema operativo que desea instalar.

### Instalar o reinstalar el servidor dedicado

Puede reinstalar fácilmente el servidor y elegir otra imagen del sistema operativo desde el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws). En la pestaña `Información general`{.action}, haga clic en `...`{.action} delante del sistema operativo y seleccione `Instalar`{.action}.

![Reinstalar](images/reinstalling-your-server-00.png){.thumbnail}

A continuación, seleccione `Instalar desde una plantilla de OVHcloud`{.action} o `Instalar una de sus plantillas`{.action} para utilizar una plantilla de instalación.

Para instalar una imagen personalizada en el servidor, seleccione la tercera opción `Instalar desde una imagen personalizada`{.action}. Para más información sobre los parámetros de esta funcionalidad, consulte la guía [Utilizar la funcionalidad Bring Your Own Image](../bringyourownimage/).

> [!primary]
>
> Algunos sistemas operativos o plataformas propietarias, como Plesk o Windows, necesitan licencias que generan costes adicionales. Puede adquirir licencias [con OVHcloud](https://www.ovhcloud.com/es/bare-metal/os/) o con un revendedor externo. A continuación, deberá aplicar la licencia en el propio sistema operativo o desde el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).
>
> Puede gestionar todas sus licencias en la sección `Bare Metal Cloud`{.action}, con `Licencias`{.action}. En esta sección también puede contratar licencias o añadir licencias existentes a través del botón `Acciones`{.action}.
>

Haga clic en `Siguiente`{.action} para continuar.

![Selección de plantilla](images/reinstalling-your-server-02.png){.thumbnail}

Una vez elegido `Instalar desde una plantilla de OVHcloud`{.action}, puede seleccionar el sistema operativo en los menús desplegables.

![Selección operativa](images/reinstalling-your-server-03.png){.thumbnail}

Si debe cambiar el esquema de partición del sistema operativo, marque la casilla "Personalizar la configuración de las particiones" antes de hacer clic en `Siguiente`{.action}.

![Personalizar la configuración de las particiones](images/SSH_02.png){.thumbnail}

Una vez realizados los ajustes, haga clic en `Siguiente`{.action} para acceder a la página de resumen.

#### Añadir una llave SSH (opcional)

Si instala un sistema operativo GNU/Linux, puede añadir su llave SSH en la última etapa del proceso de instalación.

![Personalizar la configuración de la partición](images/SSH_03.png){.thumbnail}

Si una llave SSH ya está registrada, aparecerá en el menú desplegable bajo "Llaves SSH" en la parte inferior. En caso contrario, deberá añadir primero una en la sección "Mis servicios".

Para ello, abra la columna izquierda haciendo clic en su nombre en la esquina superior derecha y utilice el acceso rápido `Gestión de servicios`{.action}.

![Personalizar la configuración de la partición](images/SSH_13.1.png){.thumbnail}

En "Mis servicios", abra la pestaña `Llaves SSH`{.action} y haga clic en `Añadir una llave SSH`{.action}.

![Personalizar la configuración de la partición](images/SSH_14.png){.thumbnail}

Si quiere instalar un servidor dedicado, seleccione "Dedicado" en el menú desplegable (también compatible con un VPS).

En la nueva ventana, introduzca un ID (nombre que elija) y la propia llave (de tipo RSA, ECDSA o Ed25519) en los campos correspondientes.

![Personalizar la configuración de la partición](images/SSH_12.png){.thumbnail}

Para más información sobre la generación de llaves SSH, consulte nuestra [guía](../crear-claves-ssh-dedicadas/).

> [!warning]
>OVHcloud le ofrece los servicios que usted es responsable de configurar y gestionar. Usted es responsable de su buen funcionamiento.
>
>Esta guía le ayudará en la mayor medida posible a realizar las tareas habituales. No obstante, si tiene dificultades o dudas con respecto a la administración, el uso o la ejecución de los servicios en un servidor, le recomendamos que contacte con un proveedor de servicios especializado.
>

### Conexión al servidor

#### Linux

Una vez finalizada la instalación, recibirá por correo electrónico las instrucciones de acceso administrativo. Puede conectarse a su servidor a través de un terminal de comandos o con un cliente tercero utilizando SSH, que es un protocolo de comunicación seguro.

Utilice los siguientes ejemplos para conectarse a su servidor y sustituya la información de identificación por sus propias claves (la dirección IP y el nombre de referencia del servidor son intercambiables).

**Ejemplo de root:**

```bash
ssh root@IPv4_del_servidor
```

**Ejemplo de usuario preconfigurado:**

```bash
ssh root@nombre_de_referencia_del_servidor
```

Para más información sobre SSH, consulte nuestra guía [Introducción al SSH](../introduccion-ssh/).

#### Windows

Una vez finalizada la instalación, recibirá un mensaje de correo electrónico con la contraseña del acceso de administrador (root). Utilice estas claves de acceso para conectarse al servidor a través de RDP (**R**emote **D**esktop **P**rotocol). Una vez conectado, Windows le guiará durante la instalación inicial.

Consulte también nuestra guía [Configurar una nueva instalación de Windows Server](https://docs.ovh.com/es/dedicated/windows-first-config/).

### Reinicio del servidor dedicado <a name="reboot"></a>

Es posible que necesite reiniciar para aplicar configuraciones actualizadas o resolver un problema. En la medida de lo posible, ejecute el "soft reboot" del servidor en la siguiente línea de comandos:

```bash
reboot
```

No obstante, puede realizar "hard reboot" en cualquier momento desde el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws). En la pestaña `Información general`{.action}, haga clic en `...`{.action} frente a "Estado" en la zona **Estado de los servicios** y seleccione `Reiniciar`{.action} y `Aceptar`{.action} en la ventana emergente.

![Reinicio](images/rebooting-your-server.png){.thumbnail}

### Seguridad de su servidor dedicado

Como se recuerda en el apartado Objetivo de esta guía, usted es el administrador de su servidor dedicado Como tal, usted es responsable de sus datos y de su seguridad. Para más información sobre la seguridad de su servidor, consulte nuestra guía [Proteger un servidor dedicado](../seguridad-de-un-servidor-dedicado/).

### Monitorización OVHcloud

Puede activar o desactivar la monitorización de un servidor dedicado desde la pestaña `Información general`{.action} de su [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws). La opción se encuentra en la sección `Estado de los servicios`.

![monitoring](images/monitoring-your-server-alt.png){.thumbnail}

Si la **monitorización** está `activada`, recibirá un mensaje de correo electrónico cada vez que el servidor se comporte de forma inesperada. Puede desactivar estos mensajes con el botón `...`{.action}.

Para más información sobre la monitorización de OVHcloud, consulte [esta guía](https://docs.ovh.com/us/es/dedicated/monitoring-ip-ovh/).

### Configuración de red

> [!primary]
>
> Tenga en cuenta que las direcciones [IP adicionales](https://www.ovhcloud.com/es/bare-metal/ip/) no son compatibles con la gama **Kimsufi**.
>


#### Modo bridge IP

El modo bridge es la acción emprendida por el dispositivo de red para crear una red agregada a partir de varias redes de comunicación o de varios segmentos de red. El modo bridge es distinto del enrutado, que permite que las redes se comuniquen de forma independiente, pero al mismo tiempo se mantienen separadas.

Esta configuración se utiliza con frecuencia en virtualización, para que cada máquina virtual pueda tener su propia dirección IP pública.

Para más información sobre el modo bridge, consulte nuestra guía: [Modo bridge IP](../network-bridging/).

#### Alias IP

El modo alias IP se utiliza para asociar dos direcciones IP a una única interfaz de red para que así el servidor pueda establecer varias conexiones con una red, cada una de ellas con un objetivo diferente.

Para más información sobre la configuración del alias IP, consulte la guía [Configurar una dirección IP como alias](../network-ipaliasing).

#### Configuración IPv6

> [!primary]
>
> Los servidores de la gama **Kimsufi** solo disponen de una dirección IPv4 y una dirección IPv6. Las direcciones se configurarán automáticamente al instalar el sistema operativo.
>

Todos los servidores dedicados de OVHcloud se entregan con un bloque /64 IPv6. Para utilizar las direcciones de este bloque, debe realizar cambios en la configuración de la red. Consulte nuestra guía [Configuración IPv6](../network-ipv6/).

### Modo de rescate

Para cualquier problema, el primer paso para solucionarlo es reiniciar el servidor en modo de rescate desde el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws). Es importante identificar los problemas del servidor en este modo para excluir los problemas relacionados con el software antes de contactar con nuestro equipo de soporte.

Para más información, consulte la guía "[Activar y utilizar el modo de rescate"](../modo_de_rescate/)".

### Acceso a la ayuda del IPMI

> [!primary]
>
> Atención: Esta opción no está disponible para la gama **Kimsufi**.
>

OVHcloud despliega todos los servidores dedicados con una consola IPMI (Intelligent Platform Management Interface) que se ejecuta en su navegador o a partir de un applet Java y le permite conectarse directamente a su servidor aunque no tenga conexión de red. Esto la convierte en una herramienta útil para resolver los problemas que han podido desconectar el servidor.

Para más información, consulte nuestra guía [Uso de IPMI con servidores dedicados](../utilizar-ipmi-servidor-dedicado/).

### Backup Storage

> [!primary]
>
> Atención: Esta opción no está disponible para la gama **Kimsufi**.
>

Los servidores dedicados de OVHcloud incluyen un espacio de almacenamiento con control de acceso, que se proporciona como opción gratuita. Es preferible utilizarlo como opción de backup adicional si el propio servidor sufre una pérdida de datos.

Para activar y utilizar la opción Backup Storage, consulte [esta guía](../servicio-backup-storage/).

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
