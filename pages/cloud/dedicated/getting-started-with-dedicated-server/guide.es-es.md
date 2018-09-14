---
title: 'Primeros pasos con un servidor dedicado'
slug: primeros-pasos-servidor-dedicado
excerpt: 'Cómo empezar a utilizar un servidor dedicado'
section: 'Primeros pasos'
---

**Última actualización: 12/09/2018**

## Objetivo

Un servidor dedicado es un servidor físico situado en uno de nuestros datacenters. A diferencia de un alojamiento web (también llamado «compartido»), cuya gestión técnica recae en OVH, usted es el único responsable de la administración de su servidor dedicado.

**Esta guía ofrece algunos consejos para que pueda empezar a utilizar su servidor dedicado.**

> [!warning]
>
> La responsabilidad sobre los servicios que OVH pone a su disposición recae íntegramente en usted. Nuestros técnicos no son los administradores de las máquinas, ya que no tienen acceso a ellas. Por lo tanto, la gestión del software y la seguridad le corresponde a usted.
> 
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene problemas o dudas sobre la administración, la utilización o la seguridad de su servidor, le recomendamos que contacte con un proveedor de servicios especializado. Para más información, consulte el apartado «Más información» de esta guía.
>


## Requisitos

* Tener un [servidor dedicado](https://www.ovh.es/servidores_dedicados/){.external}. Para consultar la información relativa al servidor dedicado, conéctese al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, acceda a la sección `Dedicado`{.action} y, en la columna izquierda, haga clic en `Servidores dedicados`{.action} y seleccione el servidor.


## Procedimiento

### Conectarse al servidor

#### En Linux

Al configurar un servidor dedicado por primera vez, recibirá por correo electrónico la contraseña de acceso *root*, necesaria para conectarse al servidor mediante el protocolo SSH de comunicaciones seguras. Puede acceder al servidor a través de un terminal (en Linux o Mac) o utilizando software de terceros en Windows (PuTTy, por ejemplo).

Una vez abierto el terminal, ejecute uno de los siguientes comandos para conectarse al servidor. No olvide sustituir el texto situado tras la arroba por el valor correspondiente (dirección IP o nombre de referencia del servidor). El nombre de referencia del servidor siempre empieza por «**ns**».

- Utilizando la dirección IP:

```sh
ssh root@IPv4_del_servidor
```

- Utilizando la referencia del servidor:

```sh
ssh root@nombre_de_referencia_del_servidor
```

#### En Windows

Al configurar un servidor dedicado por primera vez, recibirá por correo electrónico su contraseña de administrador. Utilícela para conectarse al servidor a través del Remote Desktop Protocol (RDP). Una vez conectado, Windows le guiará para realizar la configuración inicial.

### Instalar o reinstalar el servidor dedicado

Acceda a la página del servidor en el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external} como se indica más arriba. En el recuadro **Información general**, haga clic en el botón `···`{.action} situado en el apartado **Sistema operativo** y seleccione `Reinstalar`{.action}.

![Reinstalar](images/reinstalling-your-server-01.png){.thumbnail}

A continuación, seleccione la opción `Instalar desde una plantilla de OVH`{.action} (para utilizar una de nuestras plantillas de instalación) o `Instalar una de sus plantillas`{.action} (para utilizar su propia plantilla). Haga clic en `Siguiente`{.action}.

![Instalación del servidor](images/reinstalling-your-server-02.png){.thumbnail}

Seleccione el sistema operativo que quiera instalar y haga clic en `Siguiente`{.action}.

![Selección del sistema operativo](images/reinstalling-your-server-03.png){.thumbnail}

Siga las indicaciones y haga clic en `Aceptar`{.action} para iniciar la instalación.


> [!primary]
>
> Para instalar algunos sistemas operativos o plataformas, como Plesk o Windows, es necesario haber adquirido una licencia previamente. OVH le ofrece la posibilidad de contratar estas licencias desde el [área de cliente](https://www.ovh.com/auth/?action=gotomanager){.external}, seleccionando `Licencias`{.action} en la columna izquierda. También puede adquirirlas a través de un revendedor. A continuación, deberá añadirla, o bien a través del propio sistema operativo, o bien desde el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}. 
> 


### Proteger el servidor dedicado

Como se recuerda en el apartado [Objetivo](https://docs.ovh.com/es/dedicated/primeros-pasos-servidor-dedicado/#objetivo){.external} de esta guía, usted es el administrador de su servidor dedicado y, por lo tanto, el responsable de los datos almacenados, así como de su seguridad. No obstante, a continuación le ofrecemos unos consejos que le ayudarán a proteger su servidor dedicado:

* Mantenga actualizado el sistema operativo.
* Mantenga actualizado el software.
* Sustituya el puerto SSH por defecto (22) por otro diferente.
* Cambie la contraseña *root*.
* Cree un nuevo usuario de sistema con acceso restringido para el uso cotidiano.

Para más información, consulte la guía [Proteger un servidor dedicado](https://docs.ovh.com/es/dedicated/seguridad-de-un-servidor-dedicado/){.external}.


### Configurar una red

#### Modo bridge IP

El modo bridge IP se utiliza para crear una red global a partir de dos o más redes de comunicación, o de dos o más segmentos de red.

Esta configuración se utiliza con frecuencia en virtualización, para que cada máquina virtual pueda tener su propia dirección IP pública.

Para más información, consulte la guía [Modo bridge IP](https://docs.ovh.com/es/dedicated/network-bridging/){.external}.

#### Modo alias IP

El modo alias IP se utiliza para asociar dos direcciones IP a una única interfaz de red para que así el servidor pueda establecer varias conexiones con una red, cada una de ellas con un objetivo diferente.

Para más información, consulte la guía [Configurar una IP como alias](https://docs.ovh.com/es/dedicated/network-ipaliasing/){.external}.

#### Configuración de la IPv6

Todos los servidores dedicados de OVH incluyen un bloque /64 de IPv6. Para utilizar las direcciones de dicho bloque, deberá realizar algunos cambios en su configuración de red. Para más información, consulte la guía [Configuración de IPv6](https://docs.ovh.com/gb/en/dedicated/network-ipv6/){.external} (en inglés).


### Resolver problemas de configuración a través de IPMI

OVH despliega todos sus servidores con una consola IPMI (Intelligent Platform Management Interface) que puede ejecutarse en el navegador o desde un applet Java. Esta consola permite establecer una conexión directa con un servidor dedicado, aunque este no tenga conexión de red, para solucionar los problemas que hayan provocado la desconexión del servidor.

Para más información, consulte la guía [Utilizar IPMI en un servidor dedicado](https://docs.ovh.com/es/dedicated/utilizar-ipmi-servidor-dedicado/){.external}.


### Modo de rescate

Si el servidor tiene algún problema, el primer paso para solucionarlo es reiniciarlo en modo de rescate. Para activarlo, conéctese al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external} y acceda a la página de su servidor dedicado. En la pestaña `Estado del servidor`{.action}, en el recuadro **Información general**, haga clic en el botón `···`{.action} situado en el apartado `Boot`{.action} y seleccione `Editar`{.action} para cambiar el modo de arranque.

![Cambiar el modo de arranque](images/rescue-mode-01.png){.thumbnail}

En el cuadro de diálogo, seleccione la opción `Arrancar en modo rescue`{.action} y elija `rescue64-pro`{.action} en la lista desplegable. Por último, introduzca su dirección de correo electrónico en el campo de texto y haga clic en `Siguiente`{.action}.

![Rescue Pro 64](images/rescue-mode-03.png){.thumbnail}

Después de comprobar que la información es correcta, confirme haciendo clic en `Aceptar`{.action} y, a continuación, reinicie el servidor para guardar los cambios.

![Confirmación y reinicio](images/rescue-mode-02.png){.thumbnail}

El servidor se reiniciará en modo de rescate y usted recibirá las claves de acceso para conectarse en la dirección de correo electrónico que haya introducido. Para salir del modo de rescate, vuelva a cambiar el modo de arranque y seleccione `Arrancar en el disco duro`{.action}. A continuación reinicie de nuevo el servidor.

Para más información sobre cómo utilizar el modo de rescate para resolver fallos en el servidor, consulte nuestra guía sobre el [modo de rescate](https://docs.ovh.com/es/dedicated/modo_de_rescate/){.external}.


#### Diagnóstico de hardware

Los tests de hardware disponibles en modo de rescate le ayudarán a diagnosticar posibles averías que puedan estar provocando fallos en el funcionamiento del servidor dedicado.

Una vez conectado a la interfaz web del modo de rescate, podrá realizar pruebas en los siguientes componentes de hardware:

* discos duros
* RAID
* procesador
* RAM
* conexión de red

#### Interfaz web del modo de rescate

![Interfaz web](images/rescue-mode-04.png){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/).