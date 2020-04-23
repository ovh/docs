---
title: 'CMS: Instalar manualmente WordPress'
excerpt: ¿Cómo instalar manualmente WordPress?
id: '1977'
slug: cms_instalar_manualmente_wordpress
legacy_guide_number: g1977
section: CMS
---


## Paso 1: Preparar la instalación

## Herramientas necesarias
Para instalar la plataforma WordPress en su plan de web hosting, le aconsejamos que utilice un software FTP como FileZilla (gratis).

## Claves necesarias para la instalación
Asegúrese de que cuenta con su ID de cliente (NIC Handle) y su contraseña para conectarse al área de cliente, si fuera necesario. 

Recupere el identificador y la contraseña FTP que le permitirán conectarse a su web hosting. 


- Si necesita ayuda sobre cómo recuperar sus claves FTP, consulte la siguiente guía: []({legacy}1374)


También debe estar en posesión de su identificador y la contraseña de su base de datos SQL para conectarse a esta última. 


- Si necesita ayuda sobre cómo recuperar sus claves SQL, consulte la siguiente guía: []({legacy}1374)



![](images/img_3125.jpg){.thumbnail}


## Paso 2: Recuperar los archivos de origen
Acceda al sitio del desarrollador de [WordPress](http://es.wordpress.org/). 

Encontrará un enlace en el que podrá descargar la última versión completa de su CMS en el ordenador. 

El archivo de descarga es un archivo comprimido (.zip), que deberá descomprimir (extraer) en su ordenador. En internet encontrará información sobre cómo realizar esta operación.

![](images/img_3126.jpg){.thumbnail}


## Paso 3: Colocar los archivos en el alojamiento a través de FTP

## Descomprimir la carpeta del archivo
Abra la carpeta en la que ha descargado el archivo comprimido. 

Haga clic con el botón derecho sobre esta carpeta y seleccione «Extraer todo...». 

Indique un destino para extraer los archivos en una nueva carpeta. 

En internet encontrará diversos tutoriales y programas de descompresión que le ayudarán a realizar esta operación. 

La carpeta de destino se llamará «wordpress».

![](images/img_3127.jpg){.thumbnail}

## Conexión al web hosting a través de FTP
Para subir archivos de WordPress a su alojamiento, primero deberá conectarse a este último. 

Si necesita ayuda sobre cómo conectarse a su web hosting a través de FTP, consulte la siguiente guía: []({legacy}1374).

![](images/img_3128.jpg){.thumbnail}

## Transferencia de archivos a través de FTP
Siga los siguientes pasos para subir sus archivos con un cliente de FTP.

## Etapa 1
Conéctese a FileZilla. 

Desde el apartado «Sitio local», en el que se incluye la lista de archivos presentes en su ordenador, abra la carpeta descomprimida titulada «wordpress» en la que se encuentran los archivos del CMS. 

En el apartado «Sitio remoto», que corresponde en este caso a su alojamiento compartido de OVH, abra la carpeta «www». Todos los archivos del CMS deberán depositarse en esta carpeta.

Si la carpeta no existe, puede crearla. 

Deberá colocar sus archivos obligatoriamente en la carpeta «www». De lo contrario, no podrá acceder a este procedimiento de instalación desde su dominio.

![](images/img_3129.jpg){.thumbnail}

## Etapa 2
Una vez abiertas estas carpetas, en el apartado «Sitio local» encontrará todos los archivos necesarios para la instalación del CMS WordPress. 

Para seleccionar todos los archivos a la vez, pulse «CTRL+A». 

A continuación, arrastre y suelte los archivos en la carpeta «www» del apartado «Sitio remoto». 

Es probable que la carpeta «www» no esté vacía, pero no es obligatorio eliminar los archivos que contiene. Analizaremos este punto más adelante.

![](images/img_3130.jpg){.thumbnail}

## Etapa 3
A continuación, se transferirán los distintos archivos. 

Espere a que todos los archivos se copien al servidor FTP remoto. Esta operación puede tardar algunos minutos. 

Una vez completada la transferencia, asegúrese de que todos los archivos y carpetas se han copiado correctamente.

![](images/img_3131.jpg){.thumbnail}


## Paso 4: Conexión con la base de datos

## Seguimiento de las etapas de instalación de WordPress
Antes de continuar con la instalación, vacíe la caché de su navegador web para evitar posibles errores. 

Para establecer la conexión entre su base de datos y WordPress, debemos seguir las distintas etapas de instalación del CMS.

## Etapa 1
Acceda a su nombre de dominio. Encontrará el siguiente mensaje: 

Haga clic en «Crear un archivo de configuración» para continuar.

![](images/img_3132.jpg){.thumbnail}

## Etapa 2
Recopile las claves de acceso a su base de datos (encontrará ayuda sobre este punto al principio de la guía). 

Haga clic en «¡Vamos a ello!» para acceder a la siguiente etapa.

![](images/img_3133.jpg){.thumbnail}

## Etapa 3
Introduzca la información relativa a la base de datos: 

Nombre de la base de datos: El nombre que eligió durante su creación en el área de cliente. 

Nombre de usuario: Idéntico al nombre de la base de datos. 

Contraseña: La contraseña que recibió por correo al crear su base de datos. Es posible que la haya modificado. 

Host de la base de datos: El nombre del servidor de su base de datos, tal y como se indica en el correo de instalación o en su área de cliente. 

Prefijo de tabla: Resulta útil a la hora de realizar varias instalaciones de WordPress en una misma base de datos. En este caso, deberá indicar un prefijo diferente para cada instalación. 

Atención: Las claves de la base de datos no se envían automáticamente durante la instalación del alojamiento. Para recibirlas, debe activar la base de datos en su área de cliente. 

Haga clic en «Enviar» para validar la información de conexión a la base de datos. 

Este es el último paso para establecer la conexión entre su base de datos y WordPress. Tan solo deberá concluir la instalación.

![](images/img_3134.jpg){.thumbnail}


## Concluir la instalación

## Concluir las etapas de instalación
Para concluir la instalación de su blog WordPress, complete las siguientes etapas.

## Etapa 1
Haga clic en «Iniciar la instalación» para continuar.

![](images/img_3135.jpg){.thumbnail}

## Etapa 2
Complete la siguiente información relativa a la administración de su blog WordPress: 

Título del sitio: Introduzca el título de su blog.

Nombre de usuario: Seleccione el nombre de usuario de conexión para administrar su blog. 

Password, dos veces: Introduzca dos veces la contraseña para conectarse al panel de administración de su blog WordPress. 

Tu correo electrónico: Introduzca una dirección de correo electrónico válida. 

Privacidad: Si marca esta casilla, permitirá a los buscadores que indexen el sitio. 

Haga clic en «Instalar WordPress» para lanzar la instalación.

![](images/img_3136.jpg){.thumbnail}

## Etapa 3
¡Ya ha terminado la instalación de su blog WordPress! 

Identifíquese introduciendo su nombre de usuario y contraseña, y haga clic en «Acceder» para empezar a trabajar con su blog.

![](images/img_3137.jpg){.thumbnail}

## Visualización del panel de administración de WordPress
Este será el aspecto del panel de administración de Wordpress.

![](images/img_3138.jpg){.thumbnail}


## Información útil
El soporte de OVHcloud no está facultado para responder a solicitudes relativas a la configuración de WordPress, pero puede consultar nuestra guía para más información: []({legacy}2053).

Si necesita ayuda, consulte alguno de los foros dedicados a la solución [WordPress](https://es.wordpress.com/).

También puede encontrar más información en el [foro de ayuda de WordPress](https://es.forums.wordpress.org/).

## Error clásico: Sitio en construcción
Ha colocado sus archivos en el FTP, pero sigue viéndose la página de «sitio en construcción». 

Al instalar el alojamiento, OVHcloud crea una página de espera hasta que usted coloca los archivos de su sitio web. 

Si ha subido los archivos a la carpeta «www», pero no ha eliminado el contenido colocado en esta por OVHcloud, puede aparecer este problema. 

Para solucionarlo, elimine o renombre el archivo «index.html» colocado por OVHcloud en el alojamiento. Si le asigna otro nombre, podrá reactivarlo en cualquier momento y utilizarlo como página de espera.

Importante: Los archivos del sitio web deben subirse a la carpeta «www».

![](images/img_3139.jpg){.thumbnail}

## Error clásico: Versión PHP
Se trata de un error relativo a la versión PHP de su servidor. 

La causa es muy sencilla: no ha activado la última versión de PHP. 

Si necesita ayuda sobre cómo modificar la versión PHP de su plan de web hosting, consulte la siguiente guía: []({legacy}1207).

![](images/img_3140.jpg){.thumbnail}

