---
title: 'Primeros pasos con un servidor dedicado'
slug: primeros-pasos-servidor-dedicado
excerpt: 'Cómo empezar a utilizar un servidor dedicado'
section: 'Primeros pasos'
---

**Última actualización: 2 de abril de 2020**

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

## Objetivo

Un servidor dedicado es un servidor físico situado en uno de nuestros datacenters. A diferencia de los planes de hosting (descritos como "compartidos"), que técnicamente son gestionados por OVHcloud, usted es el único responsable de la administración de su servidor dedicado.

**Esta guía ofrece algunos consejos para que pueda empezar a utilizar su servidor dedicado.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/I2G6TkKg0gQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> [!warning]
>
> La responsabilidad sobre los servicios que OVHcloud pone a su disposición recae íntegramente en usted. Nuestros técnicos no son los administradores de las máquinas, ya que no tienen acceso a ellas. Por lo tanto, la gestión del software y la seguridad le corresponde a usted.
>
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene problemas o dudas sobre la administración, la utilización o la seguridad de su servidor, le recomendamos que contacte con un proveedor de servicios especializado. Para más información, consulte el apartado «Más información» de esta guía.
>

## Requisitos

- Tener un [servidor dedicado](https://www.ovhcloud.com/es-es/bare-metal/){.external}.
- Estar conectado por SSH (acceso root) en Linux o como administrador en Windows.
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).

## Procedimiento

Al configurar un servidor dedicado por primera vez, puede seleccionar el sistema operativo que desea instalar.

### Instalar o reinstalar el servidor dedicado

Puede reinstalar fácilmente el servidor y elegir otro modelo de sistema operativo desde el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws). En la pestaña `Información general`{.action}, haga clic en `..`{.action} junto al `sistema (SO)` y seleccione `Instalar`{.action}.

![Reinstalar](images/reinstalling-your-server-00.png){.thumbnail}

A continuación, seleccione `Instalar desde una plantilla de OVH`{.action} (para utilizar uno de nuestros modelos de instalación) o `Instalar una de sus plantillas`{.action} (para utilizar el suyo). Haga clic en `Siguiente`{.action}.

![Selección de plantilla](images/reinstalling-your-server-02.png){.thumbnail}

Seleccione el sistema operativo que desea instalar y haga clic en `Siguiente`{.action}.

![Selección operativa](images/reinstalling-your-server-03.png){.thumbnail}

Si desea modificar el esquema de partición del sistema operativo, marque la casilla "Personalizar la configuración de las particiones" y haga clic en `Siguiente`{.action}.

![Personalizar la configuración de la partición](images/SSH_02.png){.thumbnail}

Una vez realizados los ajustes, haga clic en `Siguiente`{.action} para acceder a la página de resumen.

### Añadir una llave SSH (opcional)

Si instala un sistema operativo Linux, puede añadir su llave SSH en la última etapa del proceso de instalación.

![Personalizar la configuración de la partición](images/SSH_03.png){.thumbnail}

Si una llave SSH ya está guardada, aparecerá en el menú desplegable bajo la `Llaves SSH` de la parte inferior. Si no, deberá añadir primero uno en la sección "Mis servicios".

Para ello, abra la columna izquierda haciendo clic en su nombre en la esquina superior derecha y utilice el acceso rápido `Productos y servicios`{.action}.

![Personalizar la configuración de la partición](images/SSH_13.png){.thumbnail}

En "Mis servicios", abra la pestaña `Llaves SSH`{.action} y haga clic en `Añadir una llave SSH`{.action}.

![Personalizar la configuración de la partición](images/SSH_14.png){.thumbnail}

Para instalar un servidor dedicado (o un VPS), seleccione "Dedicado" en el menú desplegable.

En la nueva ventana, introduzca un ID (nombre que elija) y la propia llave (de tipo RSA, ECDSA o Ed25519) en los campos correspondientes.

![Personalizar la configuración de la partición](images/SSH_12.png){.thumbnail}

Para más información sobre la creación de llaves SSH, consulte [esta guía](https://docs.ovh.com/es/public-cloud/crear-llave-ssh/).


> [!primary]
>
> Algunos sistemas operativos o plataformas, como Plesk y Windows, requieren la adquisición de una licencia antes de la instalación. Puede adquirir esta [licencia en OVHcloud](https://www.ovhcloud.com/es-es/bare-metal/os/) o a través de un revendedor. A continuación, deberá añadirla manualmente, ya sea a través del propio sistema operativo o desde el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws). Puede gestionar sus licencias en el Panel de configuración de la sección `Bare Metal Cloud`{.action}, con `licencias`{.action}. En esta sección también puede contratar licencias (utilizando el botón `Contratar`{.action} a la izquierda) o añadir su propia licencia de servidor SQL o Windows SPLA (utilizando el botón `Añadir una licencia SPLA`{.action} a la izquierda).
>

### Conexión al servidor

#### Linux

Una vez finalizada la instalación, recibirá una notificación por correo electrónico con la contraseña del acceso root. necesaria para conectarse al servidor mediante el protocolo SSH de comunicaciones seguras. Puede acceder al servidor a través de un terminal (en Linux o MAC) o a través de un software de terceros en Windows (por ejemplo: PuTTy).

Una vez abierto el terminal, ejecute el siguiente comando para conectarse al servidor, sustituyendo el texto situado después del símbolo de arroba por la información solicitada (dirección IP o nombre de referencia del servidor). El nombre de referencia del servidor siempre empieza por «*ns*».

**Ejemplo con una dirección IP**

```sh
ssh root@IPv4_del_servidor
```

**Ejemplo con referencia del servidor**

```sh
ssh root@nombre_de_referencia_del_servidor
```

#### Windows

Una vez finalizada la instalación, recibirá un mensaje de correo electrónico con la contraseña del acceso de administrador (root). Utilice estas claves de acceso para conectarse al servidor a través de RDP (**R**emote **D**esktop **P**rotocol). Una vez conectado, Windows le guiará durante la instalación inicial.


### Seguridad de su servidor dedicado

Como se recuerda en el apartado Objetivo de esta guía, usted es el administrador de su servidor dedicado y, por lo tanto, el responsable de los datos almacenados, así como de su seguridad. No obstante, a continuación le ofrecemos unos consejos que le ayudarán a proteger su servidor dedicado:

* Mantenga actualizado el sistema operativo.
* Mantenga actualizado el software.
* Sustituya el puerto SSH por defecto (22) por otro diferente.
* cambiar la contraseña root;
* Cree un nuevo usuario de sistema con acceso restringido para su uso cotidiano.

Para más información, consulte la guía [Proteger un servidor dedicado](../seguridad-de-un-servidor-dedicado/){.external}.

### Configuración de red

#### Modo bridge IP

El modo bridge IP se utiliza para crear una red global a partir de dos o más redes de comunicación, o de dos o más segmentos de red. El modo bridge es diferente del enrutado, que permite a las redes comunicarse de forma independiente, pero al mismo tiempo permanecer separadas.

Esta configuración se utiliza con frecuencia en virtualización, para que cada máquina virtual pueda tener su propia dirección IP pública.

Para más información, consulte nuestra guía: [Modo bridge IP](../network-bridging/){.external}.

#### Modo alias IP

El modo alias IP se utiliza para asociar dos direcciones IP a una única interfaz de red para que así el servidor pueda establecer varias conexiones con una red, cada una de ellas con un objetivo diferente.

Para más información, consulte la guía [Configurar una dirección IP como alias](../network-ipaliasing).

#### Configuración IPv6

Todos los servidores dedicados de OVHcloud incluyen un bloque /64 IPv6. Para utilizar las direcciones de este bloque, debe realizar cambios en la configuración de la red. Consulte nuestra guía: [Configurar IPv6 en un servidor dedicado](../network-ipv6/).


### Reparación

OVHcloud despliega todos sus servidores dedicados con una consola IPMI (Intelligent Platform Management Interface), que se ejecuta en su navegador o desde un applet Java, y le permite conectarse directamente a su servidor, aunque no tenga conexión de red. para solucionar los problemas que hayan provocado la desconexión del servidor.

Para más información, consulte nuestra guía: [Uso de IPMI para los servidores dedicados](../utilizar-ipmi-servidor-dedicado/).

### Modo de rescate

Si tiene algún problema con el servidor, reinicie el servidor en modo de rescate. Para activar el modo de rescate, conéctese al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws) y acceda a la página del servidor. En el menú `Información general`, haga clic en `...`{.action} y luego en `Editar`{.action} para cambiar el modo de arranque.

![Editar la selección de inicio](images/rescue-mode-01.png){.thumbnail}

En la siguiente pantalla, seleccione `Arrancar en modo`{.action} rescue y seleccione `rescue64-pro`{.action} en la lista desplegable. Introduzca su dirección de correo electrónico en el campo de texto y haga clic en `Siguiente`{.action}. Si deja el campo del mensaje vacío, se utilizará por defecto la dirección de correo asociada a su cuenta de OVHcloud.

![Rescue Pro 64](images/rescue-mode-03.png){.thumbnail}

Después de comprobar que la información es correcta, confirme haciendo clic en Aceptar y, a continuación, reinicie el servidor para guardar los cambios.

![Confirmación y reinicio](images/rescue-mode-02.png){.thumbnail}

El servidor se reiniciará en modo de rescate y recibirá las claves de acceso para conectarse en la dirección de correo electrónico que haya introducido. Para salir del modo de rescate, solo tiene que volver a modificar el netboot para volver a ponerlo en `Arrancar en el disco duro`{.action} y reiniciar el servidor.

Para más información sobre el uso del modo de rescate para resolver problemas con el servidor, consulte nuestra guía sobre el [modo de rescate](../modo_de_rescate/).


#### Diagnóstico de hardware

Las pruebas de hardware disponibles en modo de rescate le ayudarán a diagnosticar fallos de hardware que puedan causar problemas en el servidor.

Una vez que se haya conectado a la interfaz web del modo de rescate, podrá realizar pruebas en los siguientes componentes de hardware:

* RAM
* Discos duros
* Rack RAID
* Procesador
* Conexión de red

#### Interfaz web del modo de rescate

![Interfaz web](images/rescue-mode-04.png){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
