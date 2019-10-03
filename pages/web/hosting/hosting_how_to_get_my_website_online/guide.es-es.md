---
title: 'Publicar un sitio web en internet'
slug: web_hosting_publicar_un_sitio_web_en_internet
excerpt: 'Cómo subir un sitio web a un alojamiento de OVH para publicarlo en internet'
section: 'Primeros pasos'
order: 2
---

**Última actualización: 16/04/2019**

## Objetivo

Actualmente, hay una ingente cantidad de sitios web en la red. Tanto si quiere crear un blog o una tienda online como compartir una afición o promover una actividad profesional, los [planes de hosting de OVH](https://www.ovh.es/hosting/){.external} le permiten alojar cualquier sitio web, siempre que sea compatible con la [configuración de nuestras infraestructuras](http://pro.ovh.net/infos/){.external}.

**Esta guía explica cómo publicar en internet un sitio web alojado en un plan de hosting de OVH.**

## Requisitos

- Tener contratado un [plan de hosting de OVH](https://www.ovh.es/hosting/){.external}.
- Haber recibido el email de confirmación de la instalación de su alojamiento web.
- Disponer de un [dominio](https://www.ovh.es/dominios/){.external} con el que poder acceder a su sitio web.
- Estar conectado al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Procedimiento

### 1. Definir el proyecto

Para llevar su proyecto a buen puerto, es importante tener una visión clara de su objetivo. ¿Qué quiere conseguir con su sitio web? ¿Cómo quiere publicarlo? Los alojamientos web de OVH le ofrecen diversas posibilidades para hacer realidad su proyecto:

- **Crear un sitio web llave en mano con los módulos en un clic de OVH**: Los módulos en un clic permiten tener la estructura de un sitio web lista para usar, que podrá personalizar a su gusto (diseño, contenido, etc.). OVH ofrece cuatro módulos en un clic compatibles con nuestras infraestructuras, que puede consultar en la página [Crear un sitio web con los CMS más populares](https://www.ovh.es/hosting/website/){.external}.

- **Crear un sitio web llave en mano con instalación manual**: Esta solución permite tener la estructura de un sitio web lista para usar, que podrá personalizar a su gusto (diseño, contenido, etc.), pero que deberá instalar usted mismo en su alojamiento web de OVH.

- **Crear usted mismo un sitio web**: Esta opción le permitirá crear un proyecto a medida, aunque es la más técnica y requiere conocimientos de programación.

- **Migrar un sitio web ya existente a OVH**: Esta opción es delicada si no desea que se interrumpa el acceso al sitio web. Si necesita ayuda para migrar su sitio web, puede consultar la guía [Migrar un sitio web y el correo a OVH](https://docs.ovh.com/es/hosting/web_hosting_transferir_un_sitio_web_y_el_correo_sin_cortes_del_servicio/){.external}.


Según el método elegido para llevar a cabo su proyecto, tendrá dos posibilidades:

- **Utilizar nuestros módulos en un clic**: Para más información, consulte la guía [Instalar un sitio web con un módulo en un clic](https://docs.ovh.com/es/hosting/modulos-en-un-clic/){.external}.

- **No utilizar nuestros módulos en un clic**: En ese caso, deberá instalar el sitio web en su alojamiento manualmente. La información que ofrece esta guía puede serle útil. No obstante, si necesita ayuda, puede ponerse en contacto con un webmaster.
 
> [!warning]
>
> La responsabilidad sobre la configuración y la gestión de los servicios que OVH pone a su disposición recae íntegramente en usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
> 
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda, le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado «Más información» de esta guía.
>

### 2. Colocar los archivos del sitio web en el espacio de almacenamiento

Para subir un sitio web a un alojamiento manualmente es necesario realizar diversas acciones. Puede haber varias formas de realizarlas y, en función del sitio web, algunas de ellas son opcionales. No obstante, en la mayoría de los proyectos actuales, podemos diferenciar dos grandes etapas a la hora de publicar un sitio web en internet. La primera de ellas, que consiste en subir los archivos del sitio web al espacio de almacenamiento, se explica en este apartado.

Para ello, debe realizar las acciones que se indican a continuación.

#### 2.1. Obtener los archivos del sitio web

Asegúrese de tener los archivos del sitio web que quiera publicar. Si va a migrar un sitio web que ya exista, deberá descargarse los archivos desde su anterior proveedor.

#### 2.2. Conectarse al espacio de almacenamiento

Para conectarse al espacio de almacenamiento, necesitará lo siguiente:

- un usuario FTP o SSH activo;
- la contraseña de dicho usuario FTP o SSH;
- la dirección del servidor;
- el puerto de conexión al servidor.

Habrá recibido esta información por correo electrónico tras la instalación de su alojamiento. Si no dispone de esta información, conéctese al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external} en la sección **Web** y, en la columna izquierda, haga clic en `Alojamientos`{.action}. Seleccione el alojamiento correspondiente y abra la pestaña `FTP - SSH`{.action}.

![Instalación de un sitio web](images/get-website-online-step1.png){.thumbnail}

Se mostrará la información relativa a su espacio de almacenamiento. Entre esa información se encuentran los datos necesarios para conectarse a este último. Para más información, consulte nuestra guía [Conectarse al espacio de almacenamiento de un alojamiento web](../conexion-espacio-almacenamiento-ftp-alojamiento-web/){.external}. Si no recuerda la contraseña, consulte nuestra guía [Cambiar la contraseña de un usuario FTP](../cambiar-contrasena-usuario-ftp/){.external}.

Una vez que disponga de todos los datos necesarios, podrá conectarse a su espacio de almacenamiento de tres formas diferentes:

- **Explorador FTP de OVH**: Le permite acceder al espacio de almacenamiento desde un navegador web. Para utilizarlo, en la pestaña `FTP - SSH`{.action}, haga clic en el botón `Explorador FTP`{.action}.

- **Cliente FTP o SFTP**: Deberá instalar en su ordenador un programa compatible con el protocolo FTP o SFTP (por ejemplo, FileZilla). Si necesita ayuda, le recomendamos que se ponga en contacto con el editor del programa.

- **Acceso SSH**: Para interactuar con su espacio de almacenamiento, deberá ejecutar comandos desde un terminal. Este tipo de acceso requiere conocimientos técnicos avanzados. Por otro lado, no todos los [planes de hosting de OVH](https://www.ovh.es/hosting/){.external} son compatibles.

#### 2.3. Cargar los archivos en el espacio de almacenamiento

Una vez que se haya conectado al espacio de almacenamiento, solo tendrá que subir los archivos del sitio web. **Preste especial atención al directorio en el que vaya a colocar los archivos**. Para un uso convencional, deberá cargar el sitio web en la carpeta «www». Sin embargo, si quiere utilizar el alojamiento para alojar varios sitios web, deberá utilizar la opción de multisitio.

Para conocer la carpeta en la que debe colocar el sitio web, vaya a la pestaña `Multisitio`{.action} del área de cliente de OVH. Aparecerá una tabla en la que podrá consultar la **Carpeta raíz** del dominio correspondiente. Ese es el directorio en el que debe colocar los archivos del sitio web.

Es posible que en el espacio de almacenamiento ya haya un archivo denominado **index.html**, que puede haber sido creado por OVH durante la instalación del alojamiento para mostrar una página por defecto en el sitio web. En ese caso, no olvide eliminarlo (o renombrarlo) antes de colocar sus archivos.

![Instalación de un sitio web](images/get-website-online-step2.png){.thumbnail}

### 3. Conectar el sitio web a una base de datos

> [!primary]
>
> Si su sitio web no está conectado a una base de datos, puede omitir este paso.
>

En la actualidad, prácticamente todos los sistemas de gestión de contenidos (CMS), como WordPress o Joomla, utilizan bases de datos para almacenar los elementos dinámicos, como comentarios o artículos. Para que el sitio web funcione correctamente, es imprescindible conectar los archivos del sitio web a la base de datos mediante un archivo de configuración que contiene la información de conexión a la base de datos.

Según el sitio web, la conexión puede realizarse, o bien manualmente, o bien a través de un panel de administración generado por el propio sitio web. Para ello, debe realizar las acciones que se indican a continuación.

#### 3.1. Obtener la base de datos existente (opcional)

Si va a migrar un sitio web que ya existe, descargue la base de datos desde su anterior proveedor. Si se trata de un sitio web nuevo, omita este paso.

#### 3.2. Crear la base de datos en OVH (opcional)

Si ya dispone de una base de datos (incluida con un [plan de hosting de OVH](https://www.ovh.es/hosting/){.external}, una solución [SQL Privado](https://www.ovh.es/hosting/opciones-sql.xml){.external} o [Cloud Databases](https://www.ovh.es/cloud/cloud-databases/){.external}), necesitará el nombre de usuario y la contraseña, el nombre de la base de datos y la dirección del servidor. Una vez disponga de estos datos, vaya al siguiente paso.

Si quiere crear una nueva base de datos en OVH, conéctese al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external} y, en la columna izquierda, haga clic en `Alojamientos`{.action}. Seleccione el alojamiento correspondiente y abra la pestaña `Bases de datos`{.action}.

A continuación, haga clic en `Crear una base de datos`{.action} o, si este botón no aparece, en `Acciones`{.action} > `Crear una base de datos`{.action}. Introduzca la información solicitada.

![Instalación de un sitio web](images/get-website-online-step3.png){.thumbnail}


#### 3.3. Importar una base de datos existente (opcional)

Si está migrando un sitio web, deberá importar la base de datos existente en la que acaba de crear. Si se trata de un sitio web nuevo, omita este paso.

Existen diversas formas de realizar la importación. OVH le ofrece la posibilidad de hacerlo desde el área de cliente. Para ello, sitúese en la tabla que contiene las bases de datos creadas en su servicio, haga clic en los tres puntos situados al final de la línea correspondiente a la base de datos recién creada y seleccione la opción `Importar un archivo`{.action}. Introduzca la información solicitada.

![Instalación de un sitio web](images/get-website-online-step4.png){.thumbnail}

#### 3.4. Conectar el sitio web a la base de datos

Una vez que la base de datos esté disponible y que haya cargado los archivos en el espacio de almacenamiento, solo tendrá que conectar ambos. En primer lugar, asegúrese de que tiene la información necesaria para conectarse a la base de datos: el nombre de usuario, la contraseña, el nombre de la base de datos y la dirección del servidor.

La forma de realizar la conexión con la base de datos dependerá del sitio web que quiera publicar. Esta operación no forma parte de la configuración de los servicios de OVH sino del sitio web, por lo que, si necesita ayuda para realizarla, le recomendamos que se ponga en contacto con el editor del sitio web o con un profesional especializado.

### 4. Acceder al sitio web

Una vez que haya cargado los archivos en el espacio de almacenamiento y que la base de datos (si el sitio web utiliza una) esté conectada, ya podrá visitar su sitio web, que debería mostrarse correctamente al introducir la dirección en el navegador.

Si no puede ver el sitio web, le recomendamos lo siguiente:

- **Compruebe la configuración del dominio**: Es posible que la configuración DNS del dominio no permita que este último muestre el sitio web que acaba de subir al alojamiento web de OVH. Asegúrese de que el registro A actualmente configurado en la zona DNS del dominio se corresponde con la dirección IP de su alojamiento web de OVH.

- **Compruebe que no falta ningún archivo**: Es posible que, al cargar los archivos en su alojamiento web de OVH, haya olvidado algún archivo o se haya producido un error. Preste atención al realizar las distintas operaciones para no romper la conexión entre los archivos del sitio web y la base de datos (si el sitio web utiliza una).

- **Compruebe que no hay errores en el código del sitio web**: Esta comprobación es más técnica, pero es posible que los archivos que haya cargado tengan errores y no permitan que el servidor muestre correctamente o en absoluto el sitio web.

Le recomendamos que, si necesita ayuda para publicar su sitio web, se ponga en contacto con el editor del servicio (del CMS instalado, por ejemplo) o con un profesional especializado.

## Más información

[Migrar un sitio web y el correo a OVH](https://docs.ovh.com/es/hosting/web_hosting_transferir_un_sitio_web_y_el_correo_sin_cortes_del_servicio/){.external}

[Instalar un sitio web con los módulos en un clic](https://docs.ovh.com/es/hosting/modulos-en-un-clic/){.external}

[Conectarse al espacio de almacenamiento de un alojamiento web](https://docs.ovh.com/es/hosting/conexion-espacio-almacenamiento-ftp-alojamiento-web/){.external}

[Cambiar la contraseña de un usuario FTP](https://docs.ovh.com/es/hosting/cambiar-contrasena-usuario-ftp/){.external}

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.