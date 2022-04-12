---
title: 'Utilizar IPMI en un servidor dedicado'
slug: utilizar-ipmi-servidor-dedicado
excerpt: 'Cómo conectarse a un servidor mediante IPMI, sin necesidad de utilizar software externo'
section: 'Primeros pasos'
order: 4
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 18/03/2021**

## Objetivo

La consola IPMI (Intelligent Platform Management Interface) permite establecer una conexión directa con un servidor dedicado sin necesidad de utilizar software externo (un terminal o PuTY, por ejemplo). Esta guía explica cómo iniciar esta consola.

En otros documentos puede encontrar el término KVM, del inglés keyboard, video and mouse (teclado, vídeo y ratón), que se utiliza sobre todo en el caso de los VPS.

## Requisitos

- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

> [!warning]
> Esta funcionalidad puede no estar disponible o estar limitada en los [servidores dedicados **Eco**](https://eco.ovhcloud.com/es-es/about/).
>
> Para más información, consulte nuestra [comparativa](https://eco.ovhcloud.com/es-es/compare/).

## Procedimiento

Existen diversos métodos para conectarse al IPMI: el applet Java (recomendado) o el navegador (Serial over LAN).

- **Applet Java** : permite utilizar una herramienta KVM (teclado, vídeo, ratón) a través de una consola Java para realizar las acciones que desee. Aquí hay dos opciones: teclado y ratón.

- **Navegador (Serial over LAN)** : permite acceder a distancia a la consola del servidor a través de un navegador web.

- Un tercer método, solo disponible para los servidores más recientes, permite utilizar una herramienta KVM desde un navegador web.

Para activar uno de estos métodos, conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es). En la pestaña `Bare Metal Cloud`{.action}, haga clic en `Servidores dedicados`{.action} y seleccione el servidor. A continuación, abra la pestaña `IPMI`{.action}.

### Conectarse con el applet Java <a name="applet-java"></a>

Para que el applet funcione, debe tener Java instalado en su equipo. Si todavía no lo ha hecho, visite la [página oficial](https://www.java.com/en/download/){.external}.

En la sección `IPMI`{.action} del área de cliente de OVHcloud, haga clic en `Desde un applet Java (KVM)`{.action} :

![Iniciado IPMI Java](images/java_ipmi_initiate_2022.png){.thumbnail}

Descargue el archivo `kvm.jnlp` cuando se le pida, y ejecute el siguiente comando:

![Apertura IPMI Java](images/java_ipmi_activation.png){.thumbnail}

Se abrirá la página de conexión. Introduzca sus claves `root`, como cuando se conecta a través de un terminal o un programa externo:

![Conexión Java IPMI](images/java_ipmi_login.png){.thumbnail}

Ya puede gestionar su servidor.

### Utilizar el KVM a través de su navegador web (solo para los servidores más recientes)

En la sección `IPMI`{.action} del área de cliente de OVHcloud, haga clic en `Desde su navegador (KVM)`{.action}:

![IPMI navegador](images/KVM-web-browser01.png){.thumbnail}

La activación tarda unos segundos. Un mensaje le informará de la disponibilidad de la conexión a través de IPMI.

![IPMI navegador](images/KVM-web-browser02.png){.thumbnail}

Haga clic en `Acceder a la consola (KVM)`{.action} para abrir la consola en su navegador.

![IPMI navegador](images/KVM-web-browser03b.png){.thumbnail}

### Conectarse desde el navegador con Serial Over LAN (SoL)

Aunque le recomendamos que se conecte a través del applet Java, también puede utilizar IPMI en Serial Over LAN (SoL). Para ello, haga clic en `Desde el navegador (SoL)`{.action} en la sección `IPMI`{.action} del área de cliente.

![Activación de la declaración de integridad IPMI](images/sol_ipmi_activation_2022.png){.thumbnail}

> [!warning]
>
> La conexión por SoL puede tardar varios minutos. Por eso se recomienda el applet Java.
>

### Probar y reiniciar IPMI

Es posible que IPMI ya no responda. Si no puede acceder, realice una prueba haciendo clic en `Probar IPMI`{.action} y consulte el resultado del diagnóstico.

![Test IPMI](images/ipmi_test_2022.png){.thumbnail}

Si todo es normal, como en nuestro ejemplo, probablemente se trate de un problema local (conexión a Internet, correo local). Si, por el contrario, existe un problema relacionado con IPMI, puede reiniciarlo haciendo clic en `Reiniciar IPMI`{.action}.

![Test IPMI](images/ipmi_reboot_2022.png){.thumbnail}

El reinicio del IPMI tarda unos minutos.

> [!primary]
> Esta operación no afecta al funcionamiento del servidor.
>

### Instalación de un sistema operativo con IPMI v1

> [!warning]
> OVHcloud no garantiza la funcionalidad de los sistemas operativos instalados mediante IPMI. Este método solo debe ser considerado por un administrador de servidores con experiencia.

En primer lugar, abra [IPMI desde un applet Java](./#applet-java) desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es). A continuación, haga clic en `Device`{.action} en la barra de menú y seleccione `Redirect ISO`{.action} en el menú desplegable.

![Redirect_ISO](images/RedirectISO.jpg){.thumbnail}

A continuación, seleccione la ISO que desee utilizar en el sistema de archivos de su ordenador local. Una vez que haya seleccionado su ISO, pulse el botón `Ctrl Alt Del`{.action} en la esquina superior derecha de la pantalla para reiniciar el servidor. Pulse la tecla `F` para acceder a las opciones de arranque.

> [!primary]
> Puede que necesite utilizar el teclado de software para guardar las entradas en IPMI. Para acceder, haga clic en la opción `Keyboard`{.action} en la barra de menú situada en la parte superior de la ventana. Seleccione `Soft Keyboard` en el menú desplegable y haga clic en `Show`{.action}.
>

Seleccione la opción `UEFI Virtual CDROM 1.00` en el menú de arranque (Boot) para arrancar el servidor a partir de la ISO asociada anteriormente.

![UEFI_Virt](images/UEFIVirt.jpg){.thumbnail}

Siga los pasos necesarios para instalar el sistema operativo. No olvide eliminar la ISO de la opción "Redirect ISO".

### Instalación de un sistema operativo con IPMI v2

> [!warning]
> OVHcloud no garantiza la funcionalidad de los sistemas operativos instalados mediante IPMI. Este método solo debe ser considerado por un administrador de servidores con experiencia.
>

En primer lugar, abra [IPMI desde un applet Java](./#applet-java) desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es). Haga clic en `Virtual Media`{.action} y seleccione `Virtual Storage`{.action}.

![Virtual storage](images/virtual_storage.png){.thumbnail}

En la nueva ventana, seleccione `ISO File` en la lista desplegable Logical Drive Type. Haga clic en `Open Image`{.action} y navegue hasta su archivo ISO. Por último, haga clic en `Plug-in`{.action} y `OK`{.action}.

![ISO_file](images/iso_file.png){.thumbnail}

Para empezar desde su archivo ISO, debe acceder a la BIOS y cambiar las opciones de inicio. Para ello, haga clic en `Power Control`{.action} y seleccione `Set Power Reset`{.action}.

![Power_Reserver](images/power_reset.png){.thumbnail}

> [!primary]
> Puede que necesite utilizar el teclado de software para guardar las entradas en IPMI. Para acceder, haga clic en la opción `Virtual Media`{.action} en la barra de menú situada en la parte superior de la ventana. A continuación, seleccione `Virtual Keyboard`{.action} en el menú desplegable.
>

Durante el proceso de arranque, pulse la tecla `SUPPR` cuando se le pida acceder a la BIOS. También puede pulsar la tecla `F11` y acceder a la BIOS seleccionando la opción `Enter Setup`{.action}.

![Menu_Inicio](images/boot_menu.png){.thumbnail}

En la BIOS, navegue hasta la pestaña `Boot`{.action} y sustituya `UEFI Boot Order #1` por `UEFI USB CD/DVD:UEFI: CDROM virtual ATEN YSOJ`.

![Bios](images/bios.png){.thumbnail}

Por último, pulse la tecla `F4` para guardar los cambios y reiniciar el servidor.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
