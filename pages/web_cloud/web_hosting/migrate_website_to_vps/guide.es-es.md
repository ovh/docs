---
title: "Cómo migrar un sitio web desde un alojamiento web compartido hacia un VPS"
excerpt: "Descubra cómo migrar un sitio web de un alojamiento compartido a un VPS de OVHcloud"
updated: 2025-10-23
---

## Objetivo

A medida que su sitio web evoluciona, su consumo de recursos se vuelve tal que su alojamiento web ya no se ajusta a sus necesidades en términos de rendimiento o de capacidad para procesar tareas más complejas. Migrar a un VPS permite mejorar la velocidad y la reactividad de su sitio web, aumentar los recursos de cálculo disponibles (CPU, RAM, etc.) y tener más control sobre el entorno de servidor. Esta guía se centra en los pasos esenciales para migrar eficazmente a un VPS, garantizando al mismo tiempo la continuidad del servicio.

**Descubra cómo migrar su sitio web de un alojamiento compartido a un VPS.**

## Requisitos

- Tener un [plan de hosting](/links/web/hosting) activo.
- Haber contratado un [VPS](/links/bare-metal/vps) en su cuenta de OVHcloud.
- Estar conectado a su [área de cliente de OVHcloud](/links/manager).

## Procedimiento

> [!warning]
>
> OVHcloud pone a su disposición servicios cuya configuración, gestión y responsabilidad recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las tareas más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner). Nosotros no podremos asistirle. Para más información, consulte la sección ["Más información"](#go-further) de esta guía.
>

### Etapa 1 - Realizar una copia de seguridad de los archivos y la base de datos de su sitio web <a name="step1"></a>

En primer lugar, deberá realizar una copia de seguridad de todos los archivos del sitio web, normalmente mediante el **F**ile **T**ransfer **P**rotocol (**FTP**), así como de la base de datos.

Si utiliza WordPress, siga nuestra guía "[Guardar una copia de seguridad de su sitio web WordPress](/pages/web_cloud/web_hosting/how_to_backup_your_wordpress)" para aprender a realizar una copia de seguridad de los archivos y la base de datos de su sitio web WordPress y continúe con el [etapa 2](#step2).

#### Etapa 1.1. Conectarse al espacio de almacenamiento FTP de un alojamiento web

Siga los pasos indicados en nuestra guía "[Conectarse al espacio de almacenamiento FTP de un alojamiento web](/pages/web_cloud/web_hosting/ftp_connection)" para conectarse al espacio de almacenamiento FTP de un alojamiento web.

#### Etapa 1.2 - Hacer una copia de seguridad de los archivos por FTP <a name="step1.2"></a>

Si no utiliza un CMS (WordPress, Joomla, Drupal, PrestaShop...), descargue una copia de seguridad completa de todos los archivos presentes en su espacio FTP en su dispositivo local. Esto incluye todos los archivos HTML, CSS, JavaScript, imágenes y archivos de configuración (`config.php`, `.env`, etc.) que componen su sitio web. Asegúrese de recuperar todas las carpetas y archivos del directorio raíz (a menudo denominado `public_html` o `www`) para que se guarde todo el contenido necesario para el funcionamiento de su sitio web para la migración.

Si utiliza un CMS y quiere realizar una copia de seguridad de sus archivos, abra la pestaña correspondiente para seleccionar el método de copia de seguridad más adecuado.

> [!tabs]
> PrestaShop
>>
>> Para PrestaShop, realice copias de seguridad de los directorios críticos como:
>>
>> - `/admin`: para archivos de back-office.
>> - `/modules` : para los módulos instalados.
>> - `/img`: para todas las imágenes e iconos.
>> - `/themes`: para los archivos del tema de su sitio web.
>>
>> Para más información sobre la estructura de los archivos PrestaShop, consulte su [documentación técnica oficial](https://docs.prestashop-project.org/welcome).
>>
> Joomla!
>>
>> Para Joomla!, los archivos importantes para guardar incluyen los directorios :
>>
>> - `/administrator`: para la interfaz de administración.
>> - `/components`, `/plugins`: para las extensiones instaladas.
>> - `/images` : para los archivos multimedia de su sitio web.
>>
>> Para más información sobre la estructura de los archivos Joomla!, consulte la [documentación oficial de Joomla!](https://docs.joomla.org/).
>>
> Drupal
>>
>> Para Drupal, las carpetas importantes de las que realizar una copia de seguridad son:
>>
>> - `/sites` : que contiene los archivos específicos de su sitio web.
>> - `/modules`: et `/themes`: para módulos y temas personalizados.
>>
>> Para más información, consulte la [documentación oficial de Drupal](https://www.drupal.org/docs).

> [!primary]
>
> Una vez que haya descargado todos los archivos de su sitio web, asegúrese de almacenarlos en una carpeta local fácilmente identificable para facilitar su posterior transferencia al VPS.

#### Etapa 1.3 - Guardar copia de seguridad de la base de datos

> [!primary]
>
> Si ya utiliza una base de datos Web Cloud Database para su sitio web, puede seguir utilizándola sin migrarla. Su VPS se conectará a la base de datos Web Cloud Database para gestionar los datos.

Si tiene previsto migrar la base de datos al VPS, siga los pasos que se indican en la guía "[Exportar una copia de seguridad de la base de datos de un alojamiento web](/pages/web_cloud/web_hosting/sql_database_export)" para realizar una copia de seguridad de la base de datos.

### Etapa 2 - Configurar su VPS <a name="step2"></a>

> [!primary]
>
> Si todavía no tiene un VPS, consulte la [página del producto VPS de OVHcloud](/links/bare-metal/vps) para adquirir uno. Asegúrese de elegir un VPS que se ajuste a las necesidades de recursos (RAM, CPU, almacenamiento, etc.) de su sitio web y a las especificaciones técnicas de su CMS. Si no está familiarizado con los VPS, consulte nuestra guía "[Primeros pasos con un VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)".

#### Etapa 2.1 - Conectarse a su VPS

Para conectarse a su VPS, consulte la sección "Conectarse a su VPS" de nuestra guía "[Primeros pasos con un VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)".

#### Etapa 2.2 - Instalar y configurar un servidor web en su VPS <a name="step2.2"></a>

Una vez conectado a su VPS, instale y configure un entorno de desarrollo web en su VPS. Una vez transferidos los archivos y la base de datos, el servidor ya estará listo para alojar el sitio web.

Para instalar este entorno web, consulte nuestra guía "[Instalar un entorno de desarrollo web en un VPS o un servidor dedicado](/pages/bare_metal_cloud/virtual_private_servers/install_env_web_dev_on_vps)".

### Etapa 3 - Transferir los archivos de su sitio web a través de SFTP

Utilizar el **S**ecure **F**ile **T**ransfer **P**rotocol (**SFTP**) es el método recomendado para transferir los archivos de su sitio web a su VPS. Ofrece un nivel de seguridad superior al FTP gracias al uso del cifrado proporcionado por el servicio SSH, que ya está activado por defecto en su VPS OVHcloud.

#### Etapa 3.1 - Conectarse a su VPS por SFTP

Siga nuestra [guía de uso de FileZilla](/pages/bare_metal_cloud/dedicated_servers/comment-deposer-ou-recuperer-des-donnees-sur-un-serveur-dedie-via-sftp) e introduzca los siguientes datos:

- **Host**: Utilice la dirección IP de su VPS.
- **Username** y **Password**: Las claves de acceso de su cuenta de usuario SSH en el VPS.
- **Puerto**: utilice el puerto 22 (puerto por defecto para SFTP).

#### Etapa 3.2 - Transferir los archivos de su sitio web al VPS

Una vez conectado a su VPS, la estructura de archivos locales aparece a la izquierda de la interfaz de FileZilla, y la de su VPS a la derecha.

El directorio web (o raíz web) es el lugar donde se almacenarán los archivos de su sitio web para que sean accesibles en Internet. **Por defecto, puede ser un directorio llamado `/var/www/html` o otro directorio configurado durante la instalación de su servidor web en el [paso 2.2](#step2.2)**. Asegúrese de colocar sus archivos en la carpeta configurada como **raíz web** para que su sitio funcione correctamente.

> [!warning]
>
> Si se conecta a través de SFTP con un usuario no root (ej. `debian`), no tendrá permiso para escribir directamente en `/var/www/html`.

**Procedimiento simple: depositar en `/home` y luego mover con `sudo`**

##### En FileZilla (SFTP)

- En el lado "Sitio remoto" (panel derecho), vaya a: `/home/debian/`
- Arrastre y suelte el archivo de su base de datos (ej. `backup.sql`) en `/home/debian/`. **No coloque esta copia de seguridad ni en la carpeta que va a copiar hacia la raíz web** (ej. `/home/debian/site/`) **ni en la raíz web** (ej. `/var/www/html`), de lo contrario podría ser descargada públicamente.
- Cree una carpeta `site` en `/home/debian/` (haga clic derecho → `Crear un directorio`{.action}), y ábrala.
- Seleccione todos los archivos de su sitio web (la base de datos ya no debe estar allí) y arrástrelos y suéltelos en `/home/debian/site/`. **No deposite sus volcados SQL en esta carpeta**. Manténgalos fuera de la raíz web, (ej. `/home/debian/backup.sql`.)

##### En su VPS

Conéctese al VPS mediante SSH consultando la sección "Conexión a su VPS" de nuestro guía "[Primeros pasos con un VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)".

Ejecute los siguientes comandos:

> [!warning]
>
> En este ejemplo, la raíz web es `/var/www/html`. Si su raíz web es diferente (configurada en el paso 2.2), reemplace `/var/www/html` por su ruta real.

Cree la raíz web si no existe:

```bash
sudo mkdir -p /var/www/html
```

Copie el contenido de `/home/debian/site/` hacia la raíz web preservando la estructura y las metadatos:

```bash
sudo rsync -a /home/debian/site/ /var/www/html/
```

Alternativa si `rsync` no está instalado: 

```bash
sudo cp -a /home/debian/site/. /var/www/html/
```

Asigne la propiedad de los archivos al servicio web (`www-data` para Nginx/Apache en Debian/Ubuntu):

```bash
sudo chown -R www-data:www-data /var/www/html
```

Fije los permisos de los directorios en `755` (navegable) y de los archivos en `644` (legible):

```bash
sudo find /var/www/html -type d -exec chmod 755 {} \;
sudo find /var/www/html -type f -exec chmod 644 {} \;
```

### Etapa 4 - Importar la base de datos en su VPS (opcional)

> [!warning]
>
> Si la base de datos ya está alojada en un servicio Web Cloud Databases, no es necesario migrarla al VPS. Puede conservar la base de datos en el servicio Web Cloud Databases y configurar su VPS para que se conecte a esta base de datos ([etapa 5](#step5)).

#### Antes de comenzar

- Su archivo de respaldo (`.sql`) ha sido depositado en el paso 3.2 (por ejemplo: `/home/debian/backup.sql`).
- El **S**istema de **G**estión de **B**ase de **D**atos (**SGBD**) (MySQL / MariaDB) y su cliente de línea de comandos han sido instalados en el [paso 2.2](#step2.2).
- La base **`db_name`**:
    - **ya existe** si la ha creado durante el paso 2.2 (o a través de su panel de administración).
    - **puede ser creada automáticamente** si su respaldo `.sql` contiene `CREATE DATABASE`.
    - **de lo contrario, créela antes de la importación**:

    ```bash
    sudo mysql -e "CREATE DATABASE db_name CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
    ```

    (reemplace `db_name` por el nombre deseado).

#### Importar la base de datos

1. Conéctese al VPS mediante SSH consultando la sección "Conexión a su VPS" de nuestro guía "[Primeros pasos con un VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)".
2. Inicie la importación utilizando el cliente del SGBD:

    En el ejemplo siguiente, utilizamos MySQL como SGBD. Utilice la documentación oficial del SGBD que ha instalado durante el [paso 2.2](#step2.2) para utilizar el comando adecuado para importar la base de datos en su VPS.

    ```bash
    mysql -u user_name -p db_name < /home/debian/backup.sql
    ```

    - Reemplace `user_name` por su nombre de usuario MySQL (MySQL/MariaDB), y no por su login SSH.
    - Reemplace `db_name` por el nombre de la base de datos a importar.

3. Introduzca la contraseña del usuario SGBD cuando se le pida y espere a que finalice la importación.

### Etapa 5 - Configurar los archivos de configuración de su sitio web <a name="step5"></a>

Una vez que haya transferido los archivos de su sitio web y, en su caso, haya importado la base de datos en su VPS, es importante actualizar los archivos de configuración de su sitio web para garantizar su correcto funcionamiento. A menudo, las variables principales que deben ajustarse son la información de conexión a la base de datos y las rutas de acceso a las carpetas. Estas son las configuraciones específicas que deberá actualizar para los principales CMS.

> [!tabs]
> WordPress
>>
>> Modifique las siguientes variables en el archivo `wp-config.php`:
>>
>> - **DB_NAME**: el nombre de la base de datos.
>> - **DB_USER**: el usuario de la base de datos.
>> - **DB_PASSWORD** : Contraseña del usuario.
>> - **DB_HOST**: el host de la base de datos (generalmente localhost en un VPS).
>>
>> Para más información, consulte la [documentación oficial de WordPress](https://developer.wordpress.org/advanced-administration/wordpress/wp-config/).
>>
>> Para evitar problemas de seguridad, consulte la documentación oficial sobre los [permisos de archivos para WordPress](https://wordpress.org/support/article/changing-file-permissions/)
>>
> PrestaShop
>>
>> Edite las siguientes variables en el archivo `parameters.php`:
>>
>> - **database_host**: el host de la base de datos.
>> - **database_name**: el nombre de la base de datos.
>> - **database_user**: el usuario de la base de datos.
>> - **database_password** : la contraseña de la base de datos.
>>
>> Para más información, consulte la [documentación oficial de PrestaShop](https://devdocs.prestashop-project.org/8/development/configuration/configuring-prestashop/).
>>
>> Para evitar problemas de seguridad, consulte la [documentación oficial](https://devdocs.prestashop-project.org/) sobre los permisos de archivos para PrestaShop.
>>
> Joomla!
>>
>> Modifique las siguientes variables en el archivo `configuration.php`:
>>
>> - **public $host**: el host de la base de datos (a menudo localhost).
>> - **public $db** : el nombre de la base de datos.
>> - **public $user**: el usuario de la base de datos.
>> - **public $password** : la contraseña de la base de datos.
>>
>> Para más información, consulte la [documentación oficial de Joomla!](https://docs.joomla.org/).
>>
>> Para evitar problemas de seguridad, consulte la documentación oficial sobre los [permisos de archivo para Joomla!](https://docs.joomla.org/What_are_the_recommended_file_and_directory_permissions%3F)
>>
> Drupal
>>
>> Edite las siguientes variables en el archivo `settings.php`:
>>
>> - **host**: el host de la base de datos (a menudo localhost).
>> - **database**: el nombre de la base de datos.
>> - **username**: el usuario de la base de datos.
>> - **password**: la contraseña de la base de datos.
>>
>> Para más información, consulte la [documentación oficial de Drupal](https://www.drupal.org/documentation).
>>
>> Para evitar problemas de seguridad, consulte la documentación oficial sobre los [permisos de archivo para Drupal](https://www.drupal.org/docs/administering-a-drupal-site/security-in-drupal/securing-file-permissions-and-ownership)
>>
> Sin CMS
>>
>> **1. Actualizar la información de conexión a la base de datos**
>>
>> Identifique los archivos de configuración (como `config.php` o `.env`). Algunos pueden estar ubicados en subcarpetas. En estos archivos, busque los parámetros de conexión a la base de datos y edítelos en función de los nuevos valores de conexión del VPS:
>>
>> - **DB_HOST** : Dirección del servidor de bases de datos.
>> - **DB_NAME** : Nombre de la base de datos.
>> - **DB_USER**: usuario de la base de datos.
>> - **DB_PASSWORD** : contraseña.
>>
>> **2. Configurar rutas de acceso de archivos**
>>
>> Algunos sitios web utilizan rutas absolutas (p. ej.: `/home/user/public_html/`) para archivos o recursos específicos como imágenes, archivos CSS, etc. Asegúrese de que estas rutas se ajustan correctamente a la estructura del servidor en el VPS, p. ej. `/var/www/html/`.
>>
>> Para evitar errores de carga de archivos o vínculos rotos, asegúrese de ajustar estas rutas en todos los archivos de configuración, `.htaccess` u otros scripts que contengan vínculos a estos recursos. Esto garantiza que el sitio web encuentre correctamente todos los elementos necesarios para su correcto funcionamiento, incluso después de la migración.
>>
>> **3. Modificar el archivo .htaccess** (opcional)
>>
>> Asegúrese de que el archivo `.htaccess` está configurado correctamente para el nuevo entorno. Si utiliza reglas de reescritura (`RewriteRule`) para personalizar las direcciones URL, asegúrese de que las rutas son adecuadas para la estructura del VPS (por ejemplo, `/var/www/html/` en lugar de `/public_html/`). Esto garantiza el buen funcionamiento de las redirecciones y los accesos.
>>
>> Si el archivo `.htaccess` incluye restricciones de acceso o parámetros de seguridad, como la desactivación de la lista de directorios o la configuración del almacenamiento en caché, modifique estos parámetros para que coincidan con las configuraciones y condiciones de seguridad del nuevo servidor.
>>
>> **4. Configurar permisos de archivos y carpetas**
>>
>> Asegúrese de que los permisos (por ejemplo, `chmod`) de los archivos y carpetas están configurados correctamente para evitar errores de acceso. En un VPS, los permisos recomendados suelen ser `755` para los archivos y `644` para los archivos, pero esto puede variar en función de sus necesidades de seguridad.

Si utiliza una base de datos Web Cloud Databases, asegúrese de que su VPS está autorizado a conectarse a ella. Para ello, añada la dirección IP del VPS a la lista de direcciones IP autorizadas. Esta configuración permite proteger el acceso a la base de datos y evitar problemas de conexión. Consulte la sección "Autorizar una dirección IP" de nuestra guía "[Primeros pasos con el servicio Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)".

### Etapa 6 - Asociar su dominio a la dirección IP del VPS

> [!primary]
>
> Antes de modificar los registros de su zona DNS para que apunten a la dirección IP del VPS, le recomendamos que reduzca el **T**ime **T**o **L**ive (**TTL**). Esto permite acelerar la propagación de cambios, ya que los servidores DNS actualizarán la información más rápidamente. Siga el paso "El tiempo de propagación" de nuestra guía "[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)" para ajustar el TTL y configurar los registros para que el dominio apunte hacia el VPS.

Para que el dominio de su sitio web apunte a su VPS, configure los registros DNS del dominio para que dirijan el tráfico hacia la dirección IP pública de su VPS. Para más información, consulte nuestra guía "[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

### Etapa 7 - Comprobar el buen funcionamiento de su sitio web

Una vez completada la migración, pruebe su sitio web para asegurarse de que funciona según lo previsto. Verifique todas las funcionalidades esenciales (formularios, conexiones de usuario, pagos en línea, etc.) y asegúrese de que todas las páginas se muestren correctamente.

### Etapa 8 - Proteger su VPS

Una vez que haya migrado su sitio web a su VPS, es fundamental proteger su servidor para proteger sus datos y garantizar el buen funcionamiento de sus servicios. Para reforzar la seguridad de su VPS, deberá adoptar las siguientes medidas:

- Cambiar la contraseña SSH y el puerto de acceso SSH por defecto proporcionados por OVHcloud.
- Configurar un firewall.
- Configurar la autenticación de dos factores (2FA).
- Supervisar los logs.
- Etc.

Para más información sobre las buenas prácticas de seguridad, consulte nuestra guía "[Proteger un VPS](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)".

## Más información <a name="go-further"></a>
 
Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).