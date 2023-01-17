---
title: Empezar con MySQL y MariaDB
slug: empezar-con-mysql-y-mariadb
excerpt: Como utilizar las bases de datos
section: Primeros pasos
order: 02
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

**Última actualización: 01/03/2023**

## Objetivo

¿Quiere utilizar MySQL o MariaDB para sus bases de datos?

### Que es una base de datos MySQL

MySQL es un sistema de gestión de bases de datos relacionales desarrollado para obtener un rendimiento en lectura superior al que ofrecen otros sistemas.

Este motor es *open source*, y actualmente es desarrollado por Oracle.

### Que es una base de datos MariaDB

MariaDB es un derivado (*fork*) del sistema de gestión de bases de datos MySQL.

Este motor es 100% compatible y más «libre» que su hermano mayor MySQL. Al contrario que la versión de Oracle, todos los bugs y roadmaps están disponibles públicamente.

Además, la sustitución del motor de almacenamiento InnoDB por XtraDB sumada a otras optimizaciones prometen un mejor rendimiento.

**Descubra cómo crear y gestionar sus bases de datos MySQL o MariaDB**

## Requisitos

Para seguir los pasos de esta guía, es necesario:

- Tener una [instancia Web Cloud Databases](https://www.ovh.es/cloud/cloud-databases/) (incluida en un plan de [hosting Performance](https://www.ovhcloud.com/es-es/web-hosting/))
- Estar conectado a su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es)
- Haber consultado la [guía de inicio de Web Cloud Databases](https://docs.ovh.com/es/clouddb/empezar-con-clouddb/).

## Procedimiento

### Conexion a la base de datos

> [!primary]
>
> Tenga en cuenta que la solución Web Cloud Databases no da acceso al servidor host, sino a las bases de datos alojadas en él. Los comandos SQL genéricos funcionan sin ningún problema, y los programas de tipo HeidiSQL o SQuirreL SQL son totalmente compatibles.
> 

> [!primary]
>
> Como MariaDB es un derivado de MySQL, los distintos comandos son exactamente los mismos para los dos tipos de bases de datos.
> 

Para conectarse a ella, es necesario disponer de la siguiente información relativa a la base de datos:

- Disponer de la dirección de su instancia Web Cloud Databases.
- el puerto de su instancia Web Cloud Databases;
- el nombre de usuario de su instancia Web Cloud Databases
- Disponer de la contraseña asociada al usuario.
- el nombre de la base de datos;

Puede encontrar todos estos datos en el [área de cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}.

Para más información, puede consultar la guía [Primeros pasos con el servicio Cloud Databases](https://docs.ovh.com/es/clouddb/empezar-con-clouddb/).

#### Conexion en linea de comandos

```bash
mysql --host=servidor --user=usuario --port=puerto --contraseña=contraseña nombre_de_la_BD
```

#### Conexion mediante un script PHP

```php
1. <?php
2. $db = new PDO('mysql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```

#### Conexion a traves de la aplicacion SQuirreL SQL

- Ejecute SQuirreL SQL, abra el menú `Aliases`{.action} y haga clic en `+`{.action}.

![ejecutar SQuirreL SQL](images/1.PNG){.thumbnail}

- Cumplimente los campos como se indica a continuación y acepte con el botón `OK`{.action}:
    - **Name**: Indique un nombre.
    - **Driver**: Seleccione `MySQL Driver`.
    - **URL**: Indique la dirección del servidor y el puerto en formato `jdbc:mysql://servidor:puerto`.
    - **User Name**: Indique el nombre de usuario.
    - **Password**: Indique la contraseña.

![configuración de la conexión](images/2.PNG){.thumbnail}

- Confirme con el botón `Connect`{.action}.

![confirmación de la conexión](images/3.PNG){.thumbnail}

Se establecerá la conexión a la base de datos:

![conexión a la base de datos](images/4.PNG){.thumbnail}

### Conexion mediante phpMyAdmin

Puede utilizar phpMyAdmin para explorar el contenido de su base de datos. Para ello, instale phpMyAdmin en su propio servidor o alojamiento web. Durante la instalación, asegúrese de configurar la información de su servidor Cloud Databases y la base de datos deseada para que phpMyAdmin pueda conectarse a ella.

### Exportar e importar una base de datos MySQL o MariaDB

- **Exportar la base de datos en linea de comandos**

```bash
mysqldump --host=servidor --user=usuario --port=puerto --contraseña=contraseña nombre_de_la_BD > nombre_de_la_BD.sql
```

- **Importar la base de datos en linea de comandos**

```bash
cat nombre_de_la_BD.sql | mysql --host=servidor --user=usuario --port=puerto --contraseña=contraseña nombre_de_la_BD
```

> [!primary]
>
> En algunos casos, la RAM disponible en la instancia Cloud Databases puede no permitir la exportación o importación deseadas. En ese caso, le recomendamos que utilice la herramienta OVHcloud en el área de cliente. Si lo necesita, consulte la guía ["Primeros pasos con el servicio Cloud Databases"](https://docs.ovh.com/es/clouddb/empezar-con-clouddb/).
>

## Más información

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](https://partner.ovhcloud.com/es-es/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](https://www.ovhcloud.com/es-es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.