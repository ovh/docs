---
title: 'Guardar y exportar una base de datos en un servidor de bases de datos'
excerpt: 'Cómo realizar el backup y la exportación de una base de datos en su servidor Web Cloud Databases desde el área de cliente de OVHcloud o a través de phpMyAdmin'
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

Su base de datos puede contener una gran cantidad de información esencial para su sitio web. Por lo tanto, es muy importante poder realizar una copia de seguridad o exportarla.

**Esta guía explica cómo realizar el backup y la exportación de la base de datos desde un servidor de bases de datos.**

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
> - Los comandos SQL genéricos funcionan con normalidad, y software como HeidiSQL, SQuirreL SQL o Adminer es totalmente compatible.
>

### Guardar y exportar una base de datos desde el área de cliente

> [!primary]
>
> - Las copias de seguridad se realizan automáticamente una vez al día
> en todas sus bases de datos.
> - Las copias de seguridad automáticas y manuales se conservan durante 30 días.
> Una vez transcurrido este plazo, se eliminarán automáticamente.

#### Realizar una copia de seguridad manual

<!-- CP-STEPS-START:manual-backup -->
Haga clic en las fichas siguientes para ver cada una de las **3** etapas.

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
>> En la columna **Copias de seguridad**, la cifra corresponde al número de copias de seguridad disponibles para su base de datos.
>>
> **Etapa 3**
>>
>> Haga clic en el botón `...`{.action} a la derecha de la base de datos y, a continuación, en `Guardar`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/back-up-now.png){.thumbnail}
<!-- CP-STEPS-END:manual-backup -->

#### Exportar una copia de seguridad

<!-- CP-STEPS-START:export-backup -->
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
>> En la columna **Copias de seguridad**, la cifra corresponde al número de copias de seguridad disponibles para su base de datos.
>>
> **Etapa 3**
>>
>> Haga clic en el botón `...`{.action} a la derecha de la base de datos y, a continuación, en `Mostrar las copias de seguridad`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/show-backups.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Se mostrará la lista de las copias de seguridad disponibles. Haga clic en el botón `...`{.action} a la derecha de la copia de seguridad seleccionada y, a continuación, en `Descargar la copia de seguridad`{.action}.
<!-- CP-STEPS-END:export-backup -->

### Copia de seguridad y exportación de una base de datos fuera del área de cliente

Si la RAM disponible en su servidor no permite realizar la exportación deseada, utilice la herramienta OVHcloud en el área de cliente, que utiliza recursos externos a su solución. Consulte el apartado "[Guardar y exportar una base de datos desde el área de cliente](./#guardar-y-exportar-una-base-de-datos-desde-el-area-de-cliente)" de esta guía.

**Haga clic en el método de exportación que desee para ver el contenido.**

/// details | Exportar una base de datos MySQL o MariaDB desde phpMyAdmin OVHcloud

Para exportar su base de datos directamente desde phpMyAdmin, es necesario conectarse previamente. Para ello, consulte la guía "[Conectarse a una base de datos](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server)".

Una vez conectado a phpMyAdmin, haga clic en el nombre de la base de datos que quiera exportar y, a continuación, en la pestaña `Exportar`{.action} en la parte superior.

Existen dos modos de exportación. Si no tiene necesidades específicas, le recomendamos que utilice el modo **rápido** en formato **SQL**.

![Web Cloud Databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-export-backup-web-cloud-db.png){.thumbnail}

///

/// details | Exportar una base de datos MySQL o MariaDB en línea de comandos

```bash
mysqldump --host=servidor --user=usuario --port=puerto --password=contraseña nombre_de_la_BD > nombre_de_la_BD.sql
```

///

/// details | Exportar una base de datos MySQL o MariaDB desde un script PHP

```php
1. <?php echo "Se está guardando la base de datos.......";
2. system("mysqldump --host=servidor --user=usuario --port=puerto --password=contraseña nombre_de_la_BD > nombre_de_la_BD.sql");
3. echo "Completado. Puede recuperar la base de datos por FTP.";
4. ?>
```

> [!warning]
>
> - Para evitar que un tercero acceda a este archivo con datos sensibles, proteja su acceso con la ayuda de la guía: [Proteger el acceso a un directorio con .htaccess](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password).
> - Esta acción solo es posible desde un alojamiento compartido de OVHcloud.

///

/// details | Exportar una base de datos PostgreSQL en línea de comandos

```bash
pg_dump --host=servidor --port=puerto --user=usuario --password=contraseña nombre_de_la_BD > nombre_de_la_BD.sql
```

///

/// details | Exportar una base de datos PostgreSQL desde un script PHP

```php
1. <?php echo "Se está guardando la base de datos.......";
2. system("PGPASSWORD=contraseña pg_dump --host=servidor --port=puerto --user=usuario --password=contraseña nombre_de_la_BD > nombre_de_la_BD.sql");
3. echo "Completado. Puede recuperar la base de datos por FTP.";
4. ?>
```

> [!warning]
>
> - Para evitar que un tercero acceda a este archivo con datos sensibles, proteja su acceso con la ayuda de la guía: [Proteger el acceso a un directorio con .htaccess](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password).
> - Esta acción solo es posible desde un alojamiento compartido de OVHcloud.

///

## Más información

[Guardar y exportar una base de datos desde el área de cliente](./#guardar-y-exportar-una-base-de-datos-desde-el-area-de-cliente)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas [ofertas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
