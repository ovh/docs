---
title: 'Restaurar e importar una base de datos en su servidor de bases de datos'
excerpt: 'Cómo restaurar e importar una base de datos en su servidor Web Cloud Databases desde el área de cliente de OVHcloud o a través de phpMyAdmin'
updated: 2026-03-24
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objetivo

Si se produce un error en la base de datos, es necesario poder restaurar una copia de seguridad o importar una base de datos local.

**Esta guía explica cómo restaurar e importar la base de datos en un servidor de bases de datos.**

## Requisitos

- Tener una [instancia Web Cloud Databases](/links/web/databases) (incluida en un plan de [hosting Performance](/links/web/hosting)).

<!-- CP-NAV-START:web-cloud-databases -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Ruta de navegación:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Seleccione su servicio de base de datos

---
<!-- CP-NAV-END:web-cloud-databases -->

## Procedimiento

> [!primary]
>
> Las soluciones [Web Cloud Databases](/links/web/databases) no permiten acceder al sistema de gestión de bases de datos, sino a las bases de datos alojadas en él.
>
> - No hay acceso de superusuario "root".
> - Los comandos genéricos SQL funcionan con normalidad, y software como HeidiSQL, SQuirreL SQL o Adminer es totalmente compatible.

### Restaurar e importar una base de datos desde el área de cliente

#### Restaurar una copia de seguridad existente

<!-- CP-STEPS-START:restore-backup -->
Haga clic en las fichas siguientes para ver cada una de las **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Web Cloud Databases](/links/control-panel/web-cloud-databases) y seleccione la solución correspondiente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en la pestaña `Bases de datos`{.action}.
>>
>> En la columna **"Copias de seguridad"**, la cifra corresponde al número de copias de seguridad disponibles para la base de datos.
>>
> **Etapa 3**
>>
>> Haga clic en el botón `...`{.action} a la derecha de la base de datos y luego en `Mostrar las copias de seguridad`{.action}.
>>
> **Etapa 4**
>>
>> Se mostrará la lista de las copias de seguridad disponibles. Haga clic en el botón `...`{.action} a la derecha de la copia de seguridad seleccionada y luego en `Restaurar la copia de seguridad`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/restore-the-backup.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > La restauración implica la sobrescritura del contenido de la base de datos y, por tanto, una posible pérdida de datos. Si no está seguro de lo que hace, le recomendamos que realice una copia de seguridad antes.
<!-- CP-STEPS-END:restore-backup -->

#### Importar una copia de seguridad local

<!-- CP-STEPS-START:import-local-backup -->
Haga clic en las fichas siguientes para ver cada una de las **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Web Cloud Databases](/links/control-panel/web-cloud-databases) y seleccione la solución correspondiente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en la pestaña `Bases de datos`{.action}.
>>
> **Etapa 3**
>>
>> Haga clic en el botón `...`{.action} a la derecha de la base de datos y luego en `Importar archivo`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/import-file.png){.thumbnail}
>>
> **Etapa 4**
>>
>> ***Tiene dos posibilidades:***
>>
>> **1 - Importar un nuevo archivo**
>>
>> Haga clic en **"Importar un nuevo archivo"** y luego en `Siguiente`{.action}.
>>
>> Escriba un nombre para el archivo importado, haga clic en `Navegar`{.action} para seleccionarlo, luego en `Enviar`{.action} y por último en `Siguiente`{.action}.
>>
>> > [!warning]
>> >
>> > El archivo debe tener el formato ".sql", ".txt" o ".gz".
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/database-import-new-file-step-2.png){.thumbnail}
>>
>> Si lo desea, marque **"Vaciar la base de datos actual"** antes de la importación y **"Enviar un email al final de la importación"** para estar informado del fin de la operación en la dirección de correo electrónico de referencia de su cuenta de OVHcloud, y haga clic en `Aceptar`{.action}.
>>
>> **2 - Utilizar un archivo existente**
>>
>> Si ya había importado un archivo anteriormente, puede seleccionar la opción **"Importar un archivo existente"**.
>>
>> Seleccione el archivo en el menú desplegable y haga clic en `Siguiente`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/database-import-existing-file-step-2.png){.thumbnail}
>>
>> Si lo desea, marque **"Vaciar la base de datos actual"** antes de la importación y **"Enviar un email al final de la importación"** para estar informado del fin de la operación en la dirección de correo electrónico de referencia de su cuenta de OVHcloud, y haga clic en `Aceptar`{.action}.
<!-- CP-STEPS-END:import-local-backup -->

### Importar una base de datos fuera del área de cliente

En algunos casos, la RAM disponible en su servidor de bases de datos no permite realizar la importación deseada fuera del área de cliente. En ese caso, le recomendamos que utilice la herramienta de OVHcloud en el área de cliente. Consulte la sección "[Restaurar e importar una base de datos desde el área de cliente](./#restaurar-e-importar-una-base-de-datos-desde-el-area-de-cliente)" de esta guía.

**Haga clic en el método de importación que prefiera para ver el contenido.**

/// details | Importar una base MySQL o MariaDB desde phpMyAdmin

Para importar su base de datos directamente desde phpMyAdmin, es necesario conectarse previamente. Para ello, consulte el apartado "[Conectarse a una base de datos MySQL o MariaDB](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server#conectarse-a-una-base-de-datos-mysql-o-mariadb)".

Una vez conectado a phpMyAdmin, seleccione la base de datos haciendo clic en su nombre.

A continuación, abra la pestaña `Importar`{.action}.

Seleccione el archivo de backup haciendo clic en `Navegar`{.action} (el archivo no puede superar los 100 MB).

> [!primary]
>
> Le recomendamos que fraccione su base de datos en varios archivos cuando supere los 100 MB y realice varias importaciones desde phpMyAdmin.
> La importación de archivos que superen los 100 MB puede realizarse desde el área de cliente siguiendo el paso "[Restaurar e importar una base de datos desde el área de cliente](./#restaurar-e-importar-una-base-de-datos-desde-el-area-de-cliente)".

Deje las opciones predeterminadas y haga clic en `Ejecutar`{.action} para iniciar la importación.

![Web Cloud Databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-upload-backup-web-cloud-db.png){.thumbnail}

///

/// details | Importar una base de datos MySQL o MariaDB en línea de comandos

Esta operación solo es posible por [SSH](/pages/web_cloud/web_hosting/ssh_on_webhosting) desde un alojamiento compartido de OVHcloud.

```bash
cat nombre_de_la_base.sql | mysql --host=servidor --user=usuario --port=puerto --password=contraseña nombre_de_la_BD
```

///

/// details | Importar una base de datos MySQL o MariaDB desde un archivo PHP

```php
1. <?php
2. echo "La base de datos se está restaurando.......<br>";
3. system("cat nombre_de_la_base.sql | mysql --host=servidor --user=usuario --port=puerto --password=contraseña nombre_de_la_BD");
4. echo "Completado. Su base de datos está instalada en este alojamiento.";
5. ?>
```

> [!warning]
>
> - Para evitar que alguien acceda a este archivo, que contiene datos sensibles, proteja el acceso siguiendo la guía: [¿Cómo proteger con contraseña el acceso a un directorio?](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password)
> - Esta acción solo es posible desde un alojamiento compartido de OVHcloud.

///

/// details | Importar una base de datos PostgreSQL en línea de comandos

Esta operación solo es posible por [SSH](/pages/web_cloud/web_hosting/ssh_on_webhosting) desde un alojamiento compartido de OVHcloud en versión estable o superior.

```bash
psql --host=servidor --port=puerto --user=usuario --password=contraseña nombre_de_la_BD < nombre_de_la_BD.sql
```

///

/// details | Importar una base de datos PostgreSQL desde un archivo PHP

```php
1. <?php
2. echo "La base de datos se está restaurando.......<br>";
3. system("PGPASSWORD=contraseña psql --host=servidor --port=puerto --user=usuario --password=contraseña nombre_de_la_BD < nombre_de_la_BD.sql");
4. echo "Completado. Su base de datos está instalada en este alojamiento.";
5. ?>
```

> [!warning]
>
> - Para evitar que alguien acceda a este archivo con datos sensibles, proteja el acceso siguiendo la guía: [¿Cómo proteger con contraseña el acceso a un directorio?](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password)
> - Esta acción solo es posible desde un alojamiento compartido de OVHcloud.

///

## Más información

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas [ofertas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
