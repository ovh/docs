---
title: "Tutorial - Proteger un directorio o el panel de administración de su sitio web con los archivos .htaccess y .htpasswd"
slug: compartido-htaccess-como-proteger-el-acceso-a-un-directorio-por-autenticacion
excerpt: "Descubra cómo proteger un repertorio o el acceso a la administración de su sitio web mediante autenticación con los archivos .htaccess y .htpasswd"
section: Reescritura y autenticación
order: 02
updated: 2023-06-01
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 01/06/2023"**

## Objetivo

Este tutorial explica cómo crear la autenticación "usuario/contraseña" para acceder a la totalidad o parte de su sitio web a través de un navegador de internet. 

Utilizando dos archivos de configuración (HTTP) Apache que quiere situar en [el espacio FTP](/pages/web/hosting/ftp_connection/) de su alojamiento web: 

- "**.htaccess**": para más información sobre las funcionalidades de este fichero, consulte nuestro tutorial sobre ["Operaciones realizables con un fichero ".htaccess"](/pages/web/hosting/htaccess_what_else_can_you_do/).
- "**.htpasswd**": además de este tutorial, consulte la [documentación oficial de Apache](https://httpd.apache.org/docs/2.4/en/programs/htpasswd.html) relativa a este archivo.

> [!warning]
>
La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
> 
> Ponemos a su disposición esta guía para ayudarle a realizar las tareas más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](https://partner.ovhcloud.com/es-es/directory/) o con el editor del servicio. Nosotros no podremos asistirle. Más información en la sección ["Más información"](#go-further) de esta guía.
>
> Deberá configurar los siguientes ejemplos en archivos con los nombres ".htaccess" y ".htpasswd". Atención: Las reglas que usted establezca en estos archivos tienen consecuencias directas en su sitio web. Compruebe sistemáticamente las reglas que añade antes de aplicarlas a su sitio web. 
> 

**Descubra cómo proteger un repertorio o el acceso a la parte de administrador de su sitio web mediante autenticación con los archivos ".htaccess" y ".htpasswd".**

## Requisitos

- Tener un [plan de hosting](https://www.ovhcloud.com/es-es/web-hosting/).
- Estar conectado a su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).
- Disponer de las claves de conexión a [el espacio FTP de su alojamiento](/pages/web/hosting/ftp_connection/).

## Procedimiento

> [!primary]
>
> La solución de seguridad propuesta aquí es solo una posibilidad técnica entre otras. 
>
> Tenga en cuenta, por ejemplo, que si utiliza un **C**onent **M**anagement **S**ystem (**CMS**), existen otras soluciones de seguridad.
>
Si utiliza un CMS WordPress, OVHcloud también pone a su disposición un tutorial sobre cómo [utilizar el archivo htaccess con WordPress](/pages/web/hosting/htaccess_how_to_protect_wordpress/).
>
> Si tiene cualquier duda relativa a la creación, el uso o la programación de su sitio web, el soporte de OVHcloud no podrá ofrecerle soporte sobre estos temas.
>
> Para ello, contacte con nuestra [comunidad de usuarios](https://community.ovh.com/en/) o nuestros [partners de OVHcloud](https://partner.ovhcloud.com/es-es/directory/).
>

A continuación explicamos los 4 pasos principales que debe seguir para proteger el acceso a un directorio o a la totalidad o parte de su sitio web:

- Crear archivos "crypt.php", ".htaccess" y ".htpasswd";
- Generar contraseñas codificadas con el archivo "crypt.php".
- Establecer usuarios y contraseñas codificadas con el archivo ".htpasswd".
- Configurar reglas en el archivo ".htaccess" y eliminar el archivo "crypt.php".

> [!warning]
>
> Los pasos que se indican a continuación optimizarán la seguridad de los datos alojados.
> Por lo tanto, si sus sitios web son compatibles, le recomendamos encarecidamente que utilice la versión de PHP más reciente posible.
> 
> Para modificar la versión de PHP de sus sitios web en su alojamiento web, consulte las siguientes guías:
> 
> - [Modificar la configuración de un alojamiento web](/pages/web/hosting/ovhconfig_modify_system_runtime/)
> - [Cambiar la versión de PHP de un alojamiento web](/pages/web/hosting/php_configure_php_on_your_web_hosting_2014/)
>
> En efecto, los scripts e información descritos más abajo en este tutorial sólo funcionan con un entorno de ejecución y una versión PHP reciente.
> 
> En su defecto, le recomendamos que optimice su sitio web para hacerla compatible antes de realizar las acciones que se indican a continuación. Esto reducirá aún más el riesgo de piratear los datos mediante fallos de seguridad.
>

### Etapa 1: crear los archivos "crypt.php", ".htaccess" y ".htpasswd"

Conéctese al [espacio de almacenamiento FTP](/pages/web/hosting/ftp_connection/) de su alojamiento web. Abra el ["directorio raíz"](/pages/web/hosting/multisites_configure_multisite/) hacia el que apunte su nombre de dominio.

Cree un archivo "crypt.php" en esta carpeta raíz.

![root_folder](images/root_folder.png){.thumbnail}

Abra o cree la carpeta destinada a la protección de su sitio web. En nuestro ejemplo, esta es la carpeta "admin". Cree un archivo ".htpasswd" y un archivo ".htaccess" en este directorio.

![folder_admin](images/folder_admin.png){.thumbnail}

Para utilizar correctamente los archivos ".htaccess" y ".htpasswd", debe conocer y respetar las siguientes reglas: 

- **un único** fichero ".htaccess" y **un único** fichero ".htpasswd" por directorio o subdirectorio, para evitar conflictos entre diferentes ficheros ".htaccess" y diferentes ".htpasswd";
- los archivos ".htaccess" y ".htpasswd" son invisibles para los internautas que visitan su sitio web;
- las reglas declaradas en un archivo ".htaccess" se aplican a todo el directorio en el que está instalado el archivo ".htaccess", así como a todos los subdirectorios del mismo directorio.
Los archivos ".htpasswd" y ".htaccess" pueden estar en carpetas diferentes. Solo puede utilizar un fichero ".htpasswd" para varios ".htaccess".

### Etapa 2: completar el archivo "crypt.php"

Suba a la carpeta raíz en la que creó el archivo "crypt.php". Haga clic en `Editar`{.action} y sitúe las siguientes líneas:

```php
<?php
$string = password_hash("plain_text_password", PASSWORD_BCRYPT);

echo nl2br("$string");
 ?>
```

Sustituya únicamente por `plain_text_password` por la contraseña **en claro** que desee cifrar.

**Puede ajustar el script en función del número de contraseñas que desee cifrar.**

- Ejemplo en el que el script PHP cifrará 3 contraseñas en una sola operación:

```php
<?php
$string_1 = password_hash("plain_text_password1", PASSWORD_BCRYPT);
$string_2 = password_hash("plain_text_password2", PASSWORD_BCRYPT);
$string_3 = password_hash("plain_text_password3", PASSWORD_BCRYPT);

echo nl2br("$string_1 \n $string_2 \n $string_3");
 ?>
```

Sustituya únicamente por `plain_text_password1`, `plain_text_password2` y `plain_text_password3` por las contraseñas **en claro*** que desee cifrar.

> [!primary]
>
> Los dos scripts anteriores utilizan, en la fecha, el método de cifrado más seguro utilizando el algoritmo **bcrypt** recomendado por Apache.
>
> Para más información sobre el asunto, consulte la [documentación oficial Apache](https://httpd.apache.org/docs/2.4/en/misc/password_encryptions.html){.external}.
>

Si dispone de un alojamiento [Pro](https://www.ovhcloud.com/es-es/web-hosting/professional-offer/) o [Performance](https://www.ovhcloud.com/es-es/web-hosting/performance-offer/), conéctese a su alojamiento web en [SSH](/pages/web/hosting/ssh_on_webhosting/). Vaya a la carpeta "**raíz*" en la que se encuentra su script "crypt.php".

Para ello, utilice el siguiente comando SSH:

```bash
cd Name_of_your_root_folder
```

Sustituya `Name_of_your_root_folder` por el nombre de su "carpeta raíz" para descender a la que está su script "crypt.php".

Si, por ejemplo, el archivo "crypt.php" está en una subcarpeta de su "carpeta raíz", utilice el siguiente comando SSH:

```bash
cd Name_of_your_root_folder/sub_folder
```

Sustituya `Name_of_your_root_folder` por el nombre de su "carpeta raíz" y `sub_folder` por el subdirectorio en el que se encuentra su script "crypt.php".

Una vez que esté presente en el nivel en el que se encuentra su script "crypt.php", ejecute el siguiente comando:

```bash
php crypt.php
```

> [!warning]
>
> Por motivos de seguridad, se recomienda el uso del SSH. No obstante, si tiene un producto [Kimsufi Web](https://www.kimsufi.com/es-es/hosting.xml) o [Perso](https://www.ovhcloud.com/es-es/web-hosting/personal-offer/) en el que el SSH no está disponible, puede igualmente ejecutar el fichero "crypt.php" a través de su navegador web.
>
> Para ello, introduzca la siguiente URL: `https://domain.tld/crypt.php` modificando `domain.tld` por su propio nombre de dominio. Esto se muestra directamente en la barra de direcciones de su navegador web.
>

Obtenga las contraseñas encriptadas **sin copiar** el "&#60;br />" si ejecuta el comando "*php crypt.php*" en SSH:

```bash
encrypted_password1
encrypted_password2
encrypted_password3
```

Los valores de `encrypted_password1`, `encrypted_password2` y `encrypted_password3` deben, por ejemplo, parecerse al formato de la siguiente línea:

```bash
$2y$10$8eO7Iq3rh.u3CXvhuhKq.Om.nQJN.Z1sBT2jvOqVKCGzP42T/4LBC
```

Compruebe que su(s) contraseña(s) haya(n) comenzado(n) bien por `$2y$`. Esto le confirmará que la contraseña se ha cifrado correctamente con el algoritmo seguro **bcrypt**.

### Etapa 3: establecer los usuarios y las contraseñas codificadas con el archivo ".htpasswd"

El archivo ".htpasswd" contiene las contraseñas cifradas correspondientes a cada uno de los usuarios declarados en el archivo. Solo estos usuarios podrán conectarse al directorio del que quiera proteger el acceso.

Para ello, introduzca en el archivo una línea con el nombre de usuario y la contraseña numéricos, y haga clic en **cada usuario**:

```bash
user1:encrypted_password1
user2:encrypted_password2
user3:encrypted_password3
```

Sustituya los valores `user1`, `user2` y `user3` de nuestro ejemplo por sus propios nombres de usuario.

Sustituya también los `encrypted_password1`, `encrypted_password2` y `encrypted_password3` por sus propias contraseñas encriptadas anteriormente.

### Etapa 4: configurar las reglas en el archivo ".htaccess"

#### Bloquear el acceso a un directorio completo

Cree un archivo ".htaccess" con el siguiente código en el directorio que quiere proteger:

```bash
AuthName "Indicates your login(s)"
AuthType Basic
AuthUserFile "/home/your_ftp_login/root_folder/admin/.htpasswd"
Require valid-user
```

-`"Indicates your login(s)"` : corresponde al usuario o usuarios autorizados a acceder al directorio completo. Si tiene más de un usuario, diviértelos únicamente por un *espace*.
- `your_ftp_login` : el login FTP que utiliza para conectarse a su espacio de almacenamiento FTP. Para obtener su login FTP, consulte nuestra guía sobre [conexión a su espacio FTP](/pages/web/hosting/ftp_connection/).
- `root_folder/admin/.htpasswd` : ruta de acceso de repertorio desde la raíz FTP de su alojamiento web hasta el archivo ".htpasswd" que debe utilizarse para autentificar a los usuarios autorizados por la regla presente en su fichero ".htaccess".

#### Bloquear el acceso a uno o más archivos

Para bloquear el acceso a uno o varios archivos específicos, añada una [Directiva "Files"](https://httpd.apache.org/docs/2.4/en/mod/core.html#files){.external} en el archivo ".htaccess":

```bash
<Files test.php>

AuthName "Indicates your login(s)"
AuthType Basic
AuthUserFile "/home/your_ftp_login/root_folder/admin/.htpasswd"
Require valid-user

</Files>
```

En el script anterior, sustituya los siguientes elementos por sus propios valores:

- `test.php` : Nombre del archivo específico o grupo de archivos que contiene, en el ejemplo, el término **test.php** (término para el que debe aplicarse la restricción de acceso).
-`"Indicates your login(s)"` : corresponde al usuario o usuarios autorizados a acceder a los archivos cuyos nombres contienen **test.php**. Si tiene varios usuarios, diviértelos por un *espace*.
- `your_ftp_login` : el login FTP que utiliza para conectarse a su espacio de almacenamiento FTP. Para obtener su login FTP, consulte nuestra guía sobre [conexión a su espacio FTP](/pages/web/hosting/ftp_connection/).
- `root_folder/admin/.htpasswd` : ruta de acceso a la carpeta desde la raíz FTP de su alojamiento web hasta el archivo ".htpasswd" que debe utilizarse para autentificar a los usuarios autorizados por la directiva del fichero ".htaccess".

> [!warning]
>
> Deberá indicar una [Directiva "Files"](https://httpd.apache.org/docs/2.4/en/mod/core.html#files){.external} para **cada archivo** que quiera proteger.
>
> Las directivas "Files" se aplican a todos los archivos del mismo nombre o que terminan con el nombre especificado. Siempre que estén contenidos en el mismo directorio que el ".htaccess" o en uno de sus subdirectorios.
>
> En la configuración arriba indicada, como "new_test.php" contiene **test.php** en su nombre, la directiva "Files" se aplicaría también a un fichero "new_test.php" contenido en un subdirectorio de la carpeta "admin".
>
Además, mientras no se haya autenticado para acceder a los archivos afectados por la Directiva, estos pueden no aparecer y, por tanto, no pueden ser "listables" a través de una página "índex of".
>

> [!alert]
>
> Una vez que haya finalizado la instalación de los archivos ".htaccess" y ".htpasswd", elimine el archivo de cifrado "crypt.php" de su alojamiento web.
>

## Más información <a name="go-further"></a>

[Documentación oficial Apache](https://httpd.apache.org/docs/2.4/){.external}

[Conectarse al espacio FTP de un alojamiento web](/pages/web/hosting/ftp_connection/)

[Tutorial - Operaciones viables con un fichero ".htaccess"](/pages/web/hosting/htaccess_what_else_can_you_do/)

[Bloquear el acceso a mi sitio web para algunas direcciones IP a través de un archivo .htaccess](/pages/web/hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website/)

[Reescribir la URL de acceso a mi sitio web gracias al mod_rewrite a través del archivo .htaccess](/pages/web/hosting/htaccess_url_rewriting_using_mod_rewrite/)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](https://partner.ovhcloud.com/es-es/directory/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](https://www.ovhcloud.com/es-es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.