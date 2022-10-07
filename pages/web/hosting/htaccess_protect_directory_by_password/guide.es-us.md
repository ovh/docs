---
title: Proteger el panel de administración del sitio web con un archivo .htaccess
slug: compartido-htaccess-como-proteger-el-acceso-a-un-directorio-por-autenticacion
excerpt: Cómo proteger el acceso a la administración de su sitio web con un archivo .htaccess
section: Reescritura y autenticación
order: 02
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 20/09/2021**

## Objetivo

A veces puede ser necesario proteger el acceso a una parte del sitio web con identificadores. También puede crear un archivo ".htaccess" para proteger el acceso a su panel de administración.

**Esta guía explica cómo proteger el acceso a la parte de administrador de su sitio web mediante la autenticación mediante un archivo ".htaccess".**

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle al respecto. Para más información, consulte el apartado [Más información](#gofurther) de esta guía.
>

## Requisitos

- Tener un [plan de hosting](https://www.ovhcloud.com/es/web-hosting/).
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).
- Disponer de las claves necesarias para conectarse al [espacio de almacenamiento del alojamiento](../conexion-espacio-almacenamiento-ftp-alojamiento-web/).

## Procedimiento

> [!primary]
>
> La solución que ofrece es solo una posibilidad técnica entre otras para crear un espacio de administrador en su sitio web. También puede utilizar la funcionalidad [Módulo en 1 clic](../modulos-en-un-clic/) que ofrece [OVHcloud](https://www.ovhcloud.com/es/).
>
> Para solicitar cualquier tipo de creación o programación de su sitio web, contacte con nuestra [comunidad de usuarios](https://community.ovh.com/en/) o los [partners de OVHcloud](https://partner.ovhcloud.com/es/directory/). Nosotros no podremos asistirle en estos temas.
>

### Etapa 1: crear el árbol

Conéctese al [espacio de almacenamiento](../conexion-espacio-almacenamiento-ftp-alojamiento-web/) de su alojamiento. Abra el ["Pasta raiz"](../configurar-un-multisitio-en-un-alojamiento-web/#21-anadir-un-dominio-registrado-con-ovhcloud) de su sitio web.<br>
Cree un archivo "crypter.php".

![root_folder](images/root_folder.png){.thumbnail}

Abra o cree la carpeta que contiene la sección "admin" del sitio web. Cree un archivo ".htpasswd" y un archivo ".htaccess" en este directorio.

![folder_admin](images/folder_admin.png){.thumbnail}

> [!primary]
>
> Los archivos ".htpasswd" y ".htaccess" pueden estar en carpetas diferentes. Solo puede utilizar un fichero ".htpasswd" para varios ".htaccess".
>
> La configuración de un archivo ".htaccess" se aplica al directorio en el que está instalado y a todos sus subdirectorios.
>

### Etapa 2: completar el archivo "crypter.php"

Introduzca las siguientes líneas en el archivo "crypter.php" creado anteriormente (repetir en función del número de contraseñas que quiera generar):

```php
<?php
$string_1 = crypt('contraseña_sin_cifrar_1');
$string_2 = crypt('contraseña_sin_cifrar_2');
$string_3 = crypt('contraseña_sin_cifrar_3');
echo nl2br("$string_1 \n $string_2 \n $string_3");
?>
```

Si tiene contratado un plan de hosting [Profesional](https://www.ovhcloud.com/es/web-hosting/professional-offer/) o [Performance](https://www.ovhcloud.com/es/web-hosting/performance-offer/), conéctese al alojamiento por [SSH](../web_hosting_ssh_en_alojamiento_compartido/). Ejecute el siguiente comando:

```bash
php crypter.php
```

> [!warning]
>
> Por motivos de seguridad, se recomienda utilizar el SSH. No obstante, si tiene un plan [Kimsufi Web](https://www.kimsufi.com/es/) o [Personal](https://www.ovhcloud.com/es/web-hosting/personal-offer/) y no quiere cambiar a un plan [Pro](https://www.ovhcloud.com/es/web-hosting/professional-offer/) o [Performance](https://www.ovhcloud.com/es/web-hosting/performance-offer/), puede ejecutar el archivo "crypter.php" a través de su navegador web (yendo a una URL del tipo https://su-dominio.ovh/crypter.php).
>
> Para más información sobre el método de cifrado de sus contraseñas, contacte con nuestra [comunidad de usuarios](https://community.ovh.com/en/) o los [partners de OVHcloud](https://partner.ovhcloud.com/es/directory/). No podremos asistirle en este asunto.
>

Obtenga las contraseñas encriptadas (no copie el "&#60;br />" si ejecuta el comando "php crypter.php" en SSH):

```bash
contraseña_encriptada_1
contraseña_encriptada_2
contraseña_encriptada_3
```

### Etapa 3: completar el archivo ".htpasswd"

El archivo ".htpasswd" contiene la lista de usuarios autorizados a conectarse al panel de administración de su sitio web y su contraseña encriptada.

Escriba en este archivo para **cada usuario** una línea que indique su identificador y su contraseña cifrada:

```bash
usuario1:contraseña_encriptada_1
usuario2:contraseña_encriptada_2
usuario3:contraseña_encriptada_3
```

### Etapa 4: completar el archivo ".htaccess"

#### Bloquear el acceso a un directorio completo

Cree un archivo ".htaccess" con el siguiente código en el directorio que quiere proteger:

```bash
AuthName "Indique su identificador de administrador y su contraseña"
AuthType Basic
AuthUserFile "/home/su_login_ftp/carpeta_raíz/admin/.htpasswd"
Require valid-user
```

> [!warning]
>
> En este ejemplo, sustituya "su_login_ftp" por su [identificador FTP](../conexion-espacio-almacenamiento-ftp-alojamiento-web/#1-obtener-los-datos-de-conexion). En el apartado `Alojamientos`{.action}, encontrará la pestaña `FTP-SSH`{.action} del alojamiento correspondiente.
>
> Sustituya si fuera necesario en el ejemplo "carpeta_raíz" por el nombre de la [carpeta que contiene los archivos de su sitio web](../configurar-un-multisitio-en-un-alojamiento-web/#21-anadir-un-dominio-registrado-con-ovhcloud).
>

#### Bloquear el acceso a uno o más archivos

Para bloquear el acceso a uno o varios archivos específicos, añada una [directiva "Files"](https://httpd.apache.org/docs/2.4/es/mod/core.html#files){.external} al archivo ".htaccess":

```bash
<Files test.php>

AuthName "Indique sus claves de acceso"
AuthType Basic
AuthUserFile "/home/su_login_ftp/carpeta_raíz/admin/.htpasswd"
Require valid-user

</Files>
```

> [!warning]
>
> Debe indicar una [directiva "Files"](https://httpd.apache.org/docs/2.4/es/mod/core.html#files){.external} para **cada archivo** que desee proteger.
>
> Las directivas "Files" se aplican a todos los archivos del mismo nombre o que terminan con el nombre especificado. Esto, siempre que estén en el mismo directorio que el ".htaccess" o en uno de sus subdirectorios (en la configuración indicada aquí, la directiva "Files" se aplicaría, por ejemplo, a un fichero "nueva_test.php" contenido en un subdirectorio de la carpeta "admin").
>

## Más información <a name="gofurther"></a>

[.htaccess, reescritura de URL con mod_rewrite](../web_hosting_htaccess_reescritura_de_url_con_mod_rewrite/)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [partners de OVHcloud](https://partner.ovhcloud.com/es/directory/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
