---
title: Instalar Joomla! manualmente
slug: instalar-manualmente-joomla
excerpt: Esta guía explica cómo instalar manualmente un CMS Joomla!
section: CMS
---

> [!warning]
>
> La responsabilidad sobre la configuración y la gestión de los servicios que OVH pone a su disposición recae íntegramente en usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
> 
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado «Más información» de esta guía.
> 

Si necesita ayuda, puede hacerlo en todos los pasos. Si desea más información sobre el CMS, puede ponerse en contacto con el editor del CMS o con las comunidades asociadas al CMS.

Si desea instalar otros módulos o CMS, consulte [esta guía](https://docs.ovh.com/es/hosting/web_hosting_instalar_un_cms_manualmente/).

Los CMS son [sistemas de gestión de contenidos](https://es.wikipedia.org/wiki/Sistema_de_gesti%C3%B3n_de_contenidos){.external}, por lo general necesitan una plataforma de alojamiento que incluya un servidor FTP, una base de datos y un dominio.

Todos estos elementos se encuentran en [nuestros productos](https://www.ovhcloud.com/es-es/web-hosting/){.external}.

*Si desea instalar Joomla! de forma automática desde el área de cliente, puede consultar la [siguiente guía](https://docs.ovh.com/es/hosting/modulos-en-un-clic/).* 


## Joomla!

### Parte 1: preparación de la instalación

Para instalar la plataforma **Joomla!**  en su plan de hosting, le recomendamos que disponga de un programa **FTP** como **FileZilla** (gratuito). *Asegúrese de tener su identificador de cliente (NIC) y contraseña para poder conectarse al área de cliente de OVH si es necesario.*

- Obtenga su identificador y la contraseña FTP para conectarse al alojamiento web.
- También es necesario disponer de su identificador y la contraseña de la base de datos SQL, que le permiten conectarse a la base de datos.


![hosting](images/3141.png){.thumbnail}


### Parte 2: obtener archivos fuente
- ¡Visite la web del desarrollador de [Joomla!](https://downloads.joomla.org/es/){.external} que podrá descargar.

**comprimido** (zippé), deberá ser capaz de **descomprimirlo** (extraer) en su ordenador. Encontrará ayuda en internet.


![hosting](images/3142.png){.thumbnail}


### Parte 3: instalación de archivos en el FTP
Abra la carpeta en la que haya descargado la carpeta comprimida.

Haga clic derecho en la carpeta correspondiente y seleccione "Extraer todo...".

Indique un destino para extraer sus archivos de una nueva carpeta.

*En internet encontrará numerosos tutoriales y programas de descompresión para ayudarle a realizar estas operaciones. Consulte si está bloqueado en esta etapa.*

La carpeta de destino se titulará " **Joomla** "


![hosting](images/3143.png){.thumbnail}

Para subir los archivos de **Joomla!**  en su alojamiento, deberá conectarse a él en primer lugar.

*Consulte nuestra guía para [conectarse al espacio de almacenamiento de un alojamiento web](https://docs.ovh.com/es/hosting/conexion-espacio-almacenamiento-ftp-alojamiento-web/)*


![hosting](images/3144.png){.thumbnail}

Siga estos pasos para subir los archivos al FTP. Una vez conectado a FileZilla.

En el apartado "Sitio local", que corresponde a la lista de archivos presentes en su ordenador, abra la carpeta descomprimida titulada "Joomla!" en el que están presentes los archivos del CMS.

En la pestaña "Sitio remoto" del apartado correspondiente al alojamiento compartido de OVH, abra la pestaña "www". En esta carpeta es donde deberá subir todos los archivos del CMS.

*Si esta carpeta no existe, puede crearla.*

*Sus archivos deben estar obligatoriamente depositados en la carpeta "www", de lo contrario el procedimiento de instalación no será accesible desde su nombre de dominio.*


![hosting](images/3145.png){.thumbnail}

Una vez abiertas las carpetas:

En la sección "Sitio local", encontrará todos los archivos necesarios para instalar el CMS Joomla!.

Para seleccionar todos, utilice la combinación de teclas **Ctrl+A** .

Arrastre y coloque los archivos en el apartado "Sitio remoto" de la carpeta "www".

*Es muy probable que la carpeta "www" no esté vacía. No es obligatorio borrar los archivos presentes en ellos. Volveremos a este punto en la siguiente guía.*


![hosting](images/3146.png){.thumbnail}

La transferencia de los archivos ha finalizado.

Todos los archivos deben subirse al servidor FTP remoto. Esto puede tardar unos minutos.

Una vez finalizada la transferencia, asegúrese de que todos los archivos y carpetas se hayan transferido correctamente.

Esta operación concluye la sección relativa al depósito de archivos en el FTP.


![hosting](images/3147.png){.thumbnail}


### Parte 4: enlace con la base de datos
- Antes de continuar la instalación, vacíe la caché del navegador de internet para evitar errores.

Para conectar la base de datos con Joomla!, siga los pasos de instalación del CMS: Acceda a su dominio. Se ejecuta el asistente de instalación.

En primer lugar, es necesario configurar la información de configuración de **Joomla!.**  :

Select Language : seleccione el idioma de instalación de Joomla!.

Nombre del sitio web: defina el nombre del sitio web, lo que puede influir en el posicionamiento.

Descripción: defina la descripción del sitio web, lo que puede influir en el posicionamiento.

Sitio web fuera de línea: permite bloquear el acceso del sitio web al público.

Email: introduzca un mensaje de correo electrónico válido a este nivel.

Identificador: seleccione el usuario para acceder a la consola de administración.

Contraseña: establezca su contraseña para acceder al apartado de administración del sitio web.

Confirmar la contraseña: confirme la contraseña introducida anteriormente.

Haga clic en "Siguiente" para continuar en el siguiente paso.


![hosting](images/3148.png){.thumbnail}

Introduzca las claves de su base de datos (puede consultar la ayuda al respecto en el apartado inicio de esta guía).

Introduzca la información solicitada para la base de datos:

Tipo de base de datos: seleccione el tipo de base MySQL.

Nombre del servidor: introduzca el nombre del servidor de la base de datos, que se indica en el email de instalación o en el área de cliente.

Nombre de usuario: el nombre de la base de datos se indica en el email de instalación de la base de datos.

Contraseña: le hemos enviado por correo electrónico al crear la base de datos. es posible que haya cambiado la base de datos.

Nombre de la base de datos: elegido al crearlo en el área de cliente.

Prefijo de tablas: útil para realizar varias instalaciones de Joomla! en la misma base de datos. En este caso, deberá indicar un prefijo diferente para cada una de las instalaciones.

Instalación anterior: si hay tablas en la base de datos, las tablas cuyo prefijo es el mismo que las indicadas en la instalación se renombrarán con el prefijo "bak".

Haga clic en "Siguiente" para confirmar la información solicitada.


![hosting](images/3149.png){.thumbnail}


### Finalización
Continúe con las etapas de instalación para finalizar la instalación de Joomla!. Aparecerá un recordatorio de los parámetros seleccionados.

Se le solicita la siguiente información:

- Tipo de sitio:

Seleccione "Sencilla página de inicio en francés".

- Envío de la configuración

Indique si quiere recibir por correo electrónico la información de instalación, como la contraseña de acceso a la sección Administración anteriormente definida.

Haga clic en "Instalar" para continuar.


![hosting](images/3150.png){.thumbnail}

Espere unos segundos a que se instale.


![hosting](images/3151.png){.thumbnail}

Por medida de seguridad **Joomla!**  le pedirá que elimine el directorio de instalación.

Para ello, haga clic en "Eliminar el directorio de instalación".


![hosting](images/3152.png){.thumbnail}

Un mensaje confirma la eliminación del directorio.

Ya puede conectarse al apartado Administración de **Joomla!.** . Identifíquese en la ventana que se abre, donde también puede consultar la página de inicio de **Joomla!** .


![hosting](images/3153.png){.thumbnail}

Para obtener una visión general del panel de administración de Joomla!, haga clic en la imagen.


![hosting](images/3154.png){.thumbnail}


### Información útil

**El soporte de OVH no estará facultado para responder a cualquier solicitud de ayuda relativa a la configuración de su Joomla!.**

Puede consultar los foros dedicados a la solución Joomla!.

- Este es un enlace a un [foro de soporte](https://forum.joomla.org/viewforum.php?f=24){.external} dedicado a este CMS.

Si ha configurado sus archivos en el espacio FTP, la página "Sitio en construcción" siempre se muestra.

Durante la instalación de su alojamiento, OVHcloud muestra una página por defecto para que pueda cargar los archivos de su sitio web.

Si simplemente coloca sus archivos en la carpeta **"www"** sin eliminar el contenido depositado por OVH, puede aparecer este problema.

Para corregirlo, elimine o renombre el archivo "index.html" instalado por OVH en su alojamiento.

*Para poder reactivar este contenido en cualquier momento y utilizarlo como página por defecto, puede asignarle otro nombre al archivo.*

Otra información útil: los archivos de su sitio web deben subirse a la carpeta "www" para que se apliquen.


![hosting](images/3155.png){.thumbnail}

Se trata de un error relativo a la versión PHP del servidor.

La causa es simple: la última versión de PHP no ha sido activada.

*Consulte nuestra guía sobre la [modificación de la versión PHP del servicio compartido](https://docs.ovh.com/es/hosting/cambiar-version-php-en-alojamiento-web/).*


![hosting](images/3156.png){.thumbnail}

Se trata de una variable indefinida que impide la instalación de Joomla!.

Magic Quotes debe estar en Off y, por tanto, a 0 en su archivo de configuración.

En los nuevos productos 2014, si PHP-FPM está activado, la variable Magic Quote está desactivada por defecto. Para los antiguos productos compartidos, puede desactivar esta variable en el archivo .htaccess.

*Consulte nuestra guía sobre la [modificación de la versión PHP del servicio compartido](https://docs.ovh.com/es/hosting/cambiar-version-php-en-alojamiento-web/).*

![hosting](images/3157.png){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.