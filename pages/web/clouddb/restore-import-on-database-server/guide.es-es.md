---
title: 'Restaurar e importar una base de datos en su servidor de bases de datos'
slug: restaurar-importar-base-de-datos
excerpt: 'Cómo restaurar e importar la base de datos'
section: 'Configuración'
order: 5
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 03/02/2022**

## Objetivo

Si se produce un error en la base de datos, es necesario que pueda restaurar una copia de seguridad o importar una base de datos local. 

**Esta guía explica cómo restaurar e importar la base de datos en un servidor de bases de datos.**

## Requisitos

- Tener una [instancia CloudDB](https://www.ovh.es/cloud/cloud-databases/) (incluida en un plan de [hosting Performance](https://www.ovhcloud.com/es-es/web-hosting/)).
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

## Procedimiento

> [!primary]
>
> Tenga en cuenta que las soluciones [CloudDB](https://www.ovh.es/cloud/cloud-databases/){.external} no permiten acceder al sistema de gestión de bases de datos, sino a las bases de datos alojadas en él.
> <br> - Tenga en cuenta que no hay acceso "root".
> <br> - Los comandos genéricos SQL funcionan con normalidad, y software como HeidiSQL, SQLuireL o Admin es totalmente compatible.
> 

### Restaurar e importar una base de datos desde el área de clientes

Acceda al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es). Haga clic en la pestaña `Web` y seleccione `Base de datos`{.action} en el panel izquierdo. Seleccione el nombre del servidor de bases de datos. Acceda a la pestaña `Bases de datos`.

En la columna **"Copias de seguridad"**, la cifra corresponde al número de copias de seguridad disponibles para la base de datos.

#### 1\. Restaurar una copia de seguridad existente

Haga clic en el botón `...`{.action} a la derecha de la base de datos y, seguidamente, en `Mostrar las copias de seguridad`{.action}.

Se mostrará una lista de las copias de seguridad disponibles. Haga clic en el botón `...`{.action} a la derecha de la copia de seguridad seleccionada y, seguidamente, en `Restaurar la copia de seguridad`{.action}.

![clouddb](images/private-sql-restore01.png){.thumbnail}

> [!warning]
>
> La restauración implica la sobrescritura del contenido de la base de datos y, por tanto, una posible pérdida de datos. Si no está seguro de lo que está haciendo, le recomendamos que realice una copia de seguridad antes.
> 

#### 2\. Importar una copia de seguridad local

Haga clic en el botón `...`{.action} a la derecha de la base de datos y seleccione `Importar archivo`{.action}.

![clouddb](images/private-sql-import01.png){.thumbnail}

Tiene dos posibilidades:

##### Importar un nuevo archivo

Haga clic en **"Importar un nuevo archivo"** y, seguidamente, en `Siguiente`{.action}.

Escriba un nombre para el archivo importado, haga clic en `Navegar`{.action} para seleccionarlo, luego `Enviar`{.action} y luego en `Siguiente`{.action}.

> [!warning]
>
> El archivo debe tener el formato ".sql", ".txt" o ".gz".
> 

![clouddb](images/private-sql-import02.png){.thumbnail}

Marque **"Vaciar la base de datos actual"** antes de la importación y **"Enviar un email al final de la importación"** para estar informado del fin de la operación en la dirección de correo electrónico de referencia de su cuenta de OVHcloud y haga clic en `Aceptar`{.action}.

##### Utilizar un archivo existente

Si ya había importado un archivo antes, puede seleccionar la opción **"Importar un archivo existente"**.

Seleccione el archivo en el menú desplegable y haga clic en `Siguiente`{.action}.

![clouddb](images/private-sql-import03.png){.thumbnail}

Marque **"Vaciar la base de datos actual"** antes de la importación y **"Enviar un email al final de la importación"** para estar informado del fin de la operación en la dirección de correo electrónico de referencia de su cuenta de OVHcloud y haga clic en `Aceptar`{.action}.

### Importación de bases de datos MySQL o MariaDB fuera del área de cliente

En algunos casos, la RAM disponible en su servidor de bases de datos no permite realizar la importación deseada fuera del área de cliente. Consulte la sección ["Restaurar e importar una base de datos desde el área de cliente"](./#restaurar-e-importar-una-base-de-datos-desde-el-area-de-cliente) de esta guía.


#### Importar una base MySQL o MariaDB desde phpMyAdmin

Para importar su base de datos directamente desde phpMyAdmin, es necesario conectarse a ella previamente. Para ello, puede utilizar el apartado ["Conectarse a una base de datos MySQL o MariaDB"](https://docs.ovh.com/es/clouddb/coneccion-base-de-datos-servidor-bdd/#importar-una-base-de-datos-mysql-o-mariadb.

Una vez conectado a phpMyAdmin, seleccione la base de datos haciendo clic en su nombre.

A continuación, abra la pestaña `Importar`{.action}.

Seleccione el archivo de backup haciendo clic en `Navegar`{.action} (atención: el archivo no puede superar los 100 MB).

> [!primary]
>
> Le recomendamos que fraccione su base de datos en varios archivos cuando supere los 100 MB y realice varias importaciones desde phpMyAdmin.<br>
> La importación de archivos que superen los 100 MB puede realizarse desde el área de cliente siguiendo el paso ["Guardar, restaurar e importar una base de datos desde el área de cliente".](./#restaurar-e-importar-una-base-de-datos-desde-el-area-de-clientes) 


Deje las opciones predeterminadas y haga clic en `Ejecutar`{.action} para iniciar la importación.

![clouddb](images/private-sql-import04.png){.thumbnail}

#### Importar una base de datos MySQL o MariaDB en línea de comandos

Esta operación solo es posible por [SSH](https://docs.ovh.com/es/hosting/web_hosting_ssh_en_alojamiento_compartido/) desde un alojamiento compartido de OVHcloud.

```bash
cat nombre_de_la_base.sql | mysql —host=servidor —user=usuario —port=puerto —contraseña=contraseña nombre_de_la_BD
```

#### Importar una base de datos MySQL o MariaDB desde un archivo PHP

```php
1. <?php
2. echo "La base de datos se está restaurando.......<br>";
3. system("cat nombre_de_la_base.sql | mysql —host=servidor —user=usuario —port=puerto —password=contraseña nombre_de_la_BD");
4. echo "Ya se acabó. Su base de datos está instalada en este alojamiento".
5. ?>
```

> [!warning]
>
> - Para evitar que alguien acceda a este archivo, que contiene datos sensibles, consulte la guía Proteger el acceso a él: [Uso de .htaccess para proteger con contraseña un directorio de su sitio web](https://docs.ovh.com/gb/en/hosting/how_to_password_protect_a_directory_on_your_website/)
> - Esta acción solo es posible desde un alojamiento de OVHcloud compartido.
>

### importación de bases de datos PostgreSQL fuera del área de cliente

En algunos casos, la RAM disponible en su servidor de bases de datos no permite realizar la importación deseada fuera del área de cliente. Consulte la sección ["Restaurar e importar una base de datos desde el área de cliente"](./#restaurar-e-importar-una-base-de-datos-desde-el-area-de-clientes) de esta guía.

#### Importar una base de datos PostgreSQL en línea de comandos

Esta operación solo es posible por [SSH](https://docs.ovh.com/es/hosting/web_hosting_ssh_en_alojamiento_compartido/) desde un alojamiento compartido de OVHcloud en versión estable o superior.

```bash
psql —host=servidor —port=puerto —user=usuario —password=contraseña nombre_de_la_BD < nombre_de_la_BD.sql
```

#### Importar una base de datos PostgreSQL desde un archivo PHP

```php
1. <?php
2. echo "La base de datos se está restaurando.......<br>";
3. system("PGPASSWORD=contraseña psql —host=servidor —port=puerto —user=usuario —password=contraseña nombre_de_la_BD < nombre_de_la_BD.sql");
4. echo "Ya se acabó. Su base de datos está instalada en este alojamiento".
5. ?>
```

> [!warning]
>
> - Para evitar que alguien acceda a este archivo con datos sensibles, le recomendamos que proteja el acceso a él en la guía [Uso de .htaccess para proteger con contraseña un directorio de su sitio web](https://docs.ovh.com/gb/en/hosting/how_to_password_protect_a_directory_on_your_website/).
> - Esta acción solo es posible desde un alojamiento de OVHcloud compartido.
>

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
