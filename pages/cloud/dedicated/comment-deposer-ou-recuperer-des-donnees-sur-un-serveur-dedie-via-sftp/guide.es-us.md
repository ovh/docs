---
title: 'Subir o descargar datos en un servidor dedicado por SFTP'
slug: subir-y-descargar-datos-por-sftp
excerpt: 'Cómo transferir datos desde un servidor dedicado hacia un ordenador personal y viceversa'
section: Tutoriales
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 18/05/2021**

## Objetivo

Si necesita migrar sus datos, es posible que tenga que descargarlos desde su servidor dedicado para a continuación guardarlos en otra máquina. Existen diferentes formas de realizar esta operación. Una de ellas es el protocolo SFTP (Secure File Transfert Protocol), que permite transferir archivos de forma sencilla y rápida mediante una conexión SSH segura.

**Este tutorial explica cómo subir o descargar datos en un servidor dedicado por SFTP.**

> [!warning]
>
En este tutorial explicamos cómo utilizar una o más soluciones de OVHcloud con herramientas externas en un contexto concreto. Deberá adaptar las indicaciones a su caso particular. Si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](https://partner.ovhcloud.com/es/directory/) o que comparta sus dudas con nuestra comunidad en <https://community.ovh.com/en/>. Nosotros no podremos asistirle.
>

## Requisitos

- Un [servidor dedicado](https://www.ovhcloud.com/es/bare-metal/){.external} en el que se instala una distribución GNU/Linux.
- Cliente FTP encargado de las conexiones SFTP (esta guía explica el uso de [FileZilla](https://filezilla-project.org/){.external}).
- Acceso administrativo a su servidor por SSH.

## Procedimiento

### Utilizar FileZilla para recuperar y subir los datos

El protocolo SFTP puede utilizarse para transferir archivos a través de una conexión segura (SSH). Existen dos posibilidades para este escenario: o dispone de un acceso normal al servidor o se conecta a él en [modo de rescate](../modo_de_rescate/).

Por defecto, un servidor que utilice un sistema operativo GNU/Linux tendrá acceso SSH a través del puerto 22. Sin embargo, puede que ya haya cambiado el puerto (por ejemplo, siguiendo [nuestra guía para proteger un servidor dedicado](../seguridad-de-un-servidor-dedicado/)).

#### **Si tiene acceso al servidor**

En la interfaz gráfica de FileZilla, introduzca la dirección IP del servidor en el campo `Host`, así como su nombre de usuario y contraseña en los campos respectivos. En el campo `Puerto`, introduzca "22" o el puerto en el que escucha el servicio SSH si lo ha modificado.

Una vez establecida la conexión, se mostrará un árbol de archivos en el apartado `Sitio remoto`.

![Sitio remoto SFTP](images/sftp_sd_01.png){.thumbnail}

En nuestro ejemplo, los datos que debe recuperarse se encuentran en la carpeta "/home/data". Puede arrastrar y soltar archivos desde el panel derecho (`Sitio remoto`) al panel izquierdo (`Sitio local`) para guardarlos en su dispositivo local.

Para subir archivos al servidor, arrastre sus archivos desde su carpeta local a la carpeta de destino remota situada en el panel derecho.

El progreso de la transferencia de datos se muestra en la parte inferior de la interfaz de FileZilla.

![Progreso de la transferencia SFTP](images/sftp_sd_02.png){.thumbnail}

#### **Si el servidor está en modo de rescate**

En modo de rescate, es necesario montar primero la partición. Para ello, siga las indicaciones de [esta guía](../modo_de_rescate/).

Una vez montada la partición, utilice el cliente FileZilla como se explica más arriba, utilizando el puerto 22 para conectarse al servidor.

> [!primary]
>
> Las claves de acceso que debe utilizar se envían por correo electrónico al activar el modo de rescate en el servidor.
>

Si ha creado correctamente el punto de montaje, los datos se encuentran en el directorio "/mnt" ("/mnt/home/data" en este ejemplo).

![modo rescue - sftp del sitio remoto](images/sftp_sd_03.png){.thumbnail}

## Más información

[Activar y utilizar el modo de rescate](../modo_de_rescate/)

[Proteger un servidor dedicado](../seguridad-de-un-servidor-dedicado/)

Para más información, interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
