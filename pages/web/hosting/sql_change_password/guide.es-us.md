---
title: Cambiar la contraseña de la base de datos de un alojamiento web
slug: cambiar-contrasena-base-de-datos
excerpt: Cómo cambiar la contraseña de una base de datos creada en un plan de hosting
section: Bases de datos
order: 02
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

**Última actualización: 26/01/2022**

## Objetivo

La mayoría de los sitios web utilizan una **base de datos** para almacenar sus artículos, comentarios o direcciones de correo electrónico de sus usuarios.

La conexión a esta base de datos es posible gracias a un **archivo de configuración** que se encuentra en el [espacio de almacenamiento de archivos](https://docs.ovh.com/us/es/hosting/conexion-espacio-almacenamiento-ftp-alojamiento-web/) del alojamiento. que contiene la información que permite al sitio web "identificarse" con el **servidor de la base de datos**.

Por lo tanto, siempre debe cambiar la contraseña de una base de datos:

- En el [archivo de configuración](https://docs.ovh.com/us/es/hosting/1-click-module-management/#etapa-1-identificar-la-base-de-datos-asociada-a-su-modulo) de su sitio web a través del [espacio FTP de su alojamiento](https://docs.ovh.com/us/es/hosting/conexion-espacio-almacenamiento-ftp-alojamiento-web/);

- **Y** en el servidor que contiene la base de datos desde el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).

Mientras no se realice el cambio **en estos dos lugares**, el sitio web mostrará un "[error al conectar a la base de datos](https://docs.ovh.com/es/hosting/error-requentes-base-de-datos/#error-al-conectar-a-la-base-de-datos)".

Si desea cambiar la contraseña de la base de datos, deberá realizar todas **las operaciones** que se indican en esta guía. En caso de duda sobre las operaciones a realizar, contacte con su webmaster o contacte con un [proveedor especializado](https://partner.ovhcloud.com/es/directory/).

La modificación de la contraseña de la base de datos del sitio web se realiza en cuatro pasos:

- [1. identificar el archivo de configuración del sitio web](#step1);
- [2. identificar la base de datos del sitio web](#step2);
- [3. cambiar la contraseña de la base de datos del sitio web en el archivo de configuración](#step3);
- [4. cambiar la contraseña de la base de datos del sitio web en el servidor de bases de datos](#step4).

**Esta guía explica cómo cambiar la contraseña de una base de datos de forma segura.**

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle al respecto. Para más información, consulte el apartado [Más información](#gofurther) de esta guía.
>

## Requisitos

- Tener contratado un plan de [hosting de OVHcloud](https://www.ovhcloud.com/es/web-hosting/).
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).
- Utilizar una [base de datos asociada a su plan de hosting](https://www.ovhcloud.com/es/web-hosting/options/start-sql/).
- Disponer de las claves FTP para conectarse al [espacio de almacenamiento](https://docs.ovh.com/us/es/hosting/conexion-espacio-almacenamiento-ftp-alojamiento-web/) del alojamiento.

## Procedimiento

### Etapa 1: identificar el archivo de configuración del sitio web <a name="step1"></a>

En el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws), haga clic en `Web Cloud`{.action} y, seleccione `Alojamientos`{.action} y seleccione el alojamiento correspondiente. A continuación, abra la pestaña `Multisitio`{.action}. Identifique el nombre de la `Carpeta raíz` del sitio web (el directorio en el que se encuentran sus archivos y carpetas).

![root_folder](images/root_folder.png){.thumbnail}

A continuación, abra la pestaña `FTP-SSH`{.action} y acceda al espacio que contiene los archivos y carpetas de su sitio web (*espacio FTP*) haciendo clic en el botón `Explorador FTP`{.action}.

> [!primary]
>
> Si desea cambiar la contraseña de su espacio FTP, consulte esta [guía](https://docs.ovh.com/us/es/hosting/cambiar-contrasena-usuario-ftp/).
>
> Si desea conectarse por otro método, consulte esta [guía](https://docs.ovh.com/us/es/hosting/conexion-espacio-almacenamiento-ftp-alojamiento-web/).
>

Abra la `Carpeta raíz` anteriormente indicada.

Busque y abra el archivo de configuración de su sitio web:

- Para un sitio web WORDPRESS, se trata de **"wp-config.php"**;
- Para un sitio web JOOMLA, se trata de **"configuration.php"**;
- Para un sitio web DRUPAL, haga clic en el directorio **"sites"** y luego en **"default"**. El archivo de configuración es **"settings.php"**;
- Para un sitio web PRESTASHOP, haga clic en el directorio **"app"** y luego en **"config"**. El archivo de configuración es **"parameters.php"**.

### Etapa 2: identificar la base de datos del sitio web <a name="step2"></a>

En el archivo de configuración indicado en el [Etapa 1](#step1), empiece por anotar el nombre de la base de datos:

- Para WORDPRESS: el nombre aparece con la mención **"DB_NAME"**;
- Para JOOMLA: el nombre aparece en **"public $db"**;
- Para DRUPAL: el nombre aparece en **"database"**;
- Para PRESTASHOP: el nombre aparece en **"database_name"**.

Vuelva al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws), en la sección `Web Cloud`{.action}:

- Acceda a la sección `Alojamientos`{.action} y seleccione el alojamiento correspondiente.
- Haga clic en la pestaña `Bases de datos`{.action} **a la derecha** de su pantalla.
- Busque el nombre de la base de datos encontrada anteriormente en la columna `Nombre de la base` de datos.

### Etapa 3: cambiar la contraseña de la base de datos del sitio web en el archivo de configuración <a name="step3"></a>

> [!primary]
>
> Para más información sobre las buenas prácticas de gestión de contraseñas, consulte [esta guía](https://docs.ovh.com/es/customer/gestionar-su-contrase%c3%b1a/).
>

Seleccione la nueva contraseña de la base de datos y nócelo. Deberá cumplir las siguientes condiciones:

- Minimum 8 caractères;
- Maximum 30 caractères;
- Al menos una letra mayúscula;
- Al menos una letra minúscula;
- Al menos una cifra;
- Estar compuesto únicamente por números y letras.

Así como en el [Etapa 1](#step1), vuelva al espacio de almacenamiento de archivos de su alojamiento y abra el archivo de configuración del sitio web editando.

**Antes de realizar cualquier modificación**, guarde localmente el contenido del archivo en un documento de texto para poder guardar una copia de él en caso de que se produzca algún error.

Sustituya manualmente la contraseña de su base de datos **evitando modificar o eliminar cualquier otro elemento del archivo de configuración** (en los siguientes extractos, solo debe sustituir la contraseña de ejemplo "*0VhCloudPa55w0rdDB123*"):

- En el archivo de configuración de un sitio web WORDPRESS, modifique el **"DB_PASSWORD"**:

```php
// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'dbname123');
 
/** MySQL database username */
define('DB_USER', 'dbname123');
 
/** MySQL database password */
define('DB_PASSWORD', '0VhCloudPa55w0rdDB123');
 
/** MySQL hostname */
define('DB_HOST', 'dbname123.mysql.db:3306');
```

- En el archivo de configuración de un sitio web JOOMLA, modifique el **"public $password"** (justo al final del archivo de configuración):

```php
public $host = 'dbname123.mysql.db:3306';
public $user = 'dbname123';
public $password = '0VhCloudPa55w0rdDB123';
public $db = 'dbname123';
```

- En el archivo de configuración de un sitio web DRUPAL, modifique el **"password"**:

```php
$databases['default']['default'] = array (
  'database' => 'dbname123',
  'username' => 'dbname123',
  'password' => '0VhCloudPa55w0rdDB123',
  'prefix' => 'prefix123_',
  'host' => 'dbname123.mysql.db',
  'puerto' => '3306',
```

- En el archivo de configuración de PRESTASHOP, modifique el **"database_password"**:

```php
'database_host' => 'dbname123.mysql.db',
'database_port' => '3306',
'database_name' => 'dbname123',
'database_user' => 'dbname123',
'database_password' => '0VhCloudPa55w0rdDB123',
```

Guarde el cambio.

### Etapa 4: cambiar la contraseña de la base de datos del sitio web en el servidor de bases de datos <a name="step4"></a>

> [!primary]
>
> Esta operación tardará unos minutos en aplicarse. Abra la pestaña `Tareas en curso`{.action} y compruebe su estado.
>

En la sección `Alojamientos`{.action} del área de cliente, acceda a la pestaña `Bases de datos`{.action} que aparece a la derecha de la pantalla.

![database-password-step1](images/database-password-step1.png){.thumbnail}

Haga clic en los tres puntos situados al final de la línea correspondiente a la base de datos del sitio web y seleccione `Cambiar la contraseña`{.action}.

![database-password-step2](images/database-password-step2.png){.thumbnail}

Se abrirá una ventana en la que deberá introducir la nueva contraseña de la base de datos (definida en el [Etapa 3](#step3)). Confírmela y haga clic en `Aceptar`{.action}.

![database-password-step3](images/database-password-step3.png){.thumbnail}

## Más información <a name="gofurther"></a>

[Web hosting: guía de uso de FileZilla](https://docs.ovh.com/us/es/hosting/web_hosting_guia_de_uso_de_filezilla/)

[Establecer y gestionar la contraseña de su cuenta](https://docs.ovh.com/us/es/customer/gestionar-su-contrase%C3%B1a/)

[Resolver los errores más frecuentes asociados a las bases de datos](https://docs.ovh.com/us/es/hosting/error-requentes-base-de-datos/)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [partners de OVHcloud](https://partner.ovhcloud.com/es/directory/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.