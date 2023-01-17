---
title: Empezar con PostgreSQL
slug: empezar-con-postgresql
excerpt: Como utilizar las bases de datos
section: Primeros pasos
order: 03
---

**Última actualización: 01/03/2023**

¿Quiere utilizar PostgreSQL en Web Cloud Databases? Descubra cómo crear y administrar fácilmente sus bases de datos alojadas en esta solución.


## Introduccion

### Requisitos
Para seguir los pasos de esta guía, es necesario:

- tener una instancia Web Cloud Databases;
- haber consultado [esta guía](../empezar-con-clouddb/).


### Que es una base de datos PostgreSQL
PostgreSQL es un sistema de gestión de bases de datos relacional y orientado a objetos.

Es un sistema robusto y extensible, capaz de manipular con total fiabilidad grandes volúmenes de datos.

Además, tiene una comunidad *open source* muy activa.


## Conexion a la base de datos


> [!primary]
>
> Tenga en cuenta que la solución Web Cloud Databases no da acceso al servidor host, sino a las bases de datos alojadas en él. Los comandos SQL genéricos funcionan sin ningún problema, y los programas de tipo HeidiSQL o SQuirreL SQL son totalmente compatibles.
> 

Para conectarse a ella, es necesario disponer de la siguiente información relativa a la base de datos:

- la dirección de la instancia Web Cloud Databases en la que está alojada;
- el puerto;
- el nombre de usuario;
- la contraseña;
- el nombre;

Puede encontrar todos estos datos en el [área de cliente Web](https://www.ovh.com/manager/web/){.external}.

Para más información, puede consultar la guía [Primeros pasos con el servicio Cloud Databases](../starting_with_clouddb/guide.es-es.md){.ref}


### Conexion en linea de comandos

```bash
psql --host=servidor --port=puerto --user=usuario --contraseña=contraseña nombre_de_la_BD
```


### Conexion mediante un script PHP

```php
1. <?php
2. $myPDO = new PDO('pgsql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```


### Conexion a traves de la aplicacion SQuirreL SQL
Ejecute SQuirreL SQL, abra el menú `Aliases`{.action} y haga clic en `+`{.action}.


![ejecutar SQuirreL SQL](images/1.PNG){.thumbnail}

Cumplimente los campos como se indica a continuación y acepte con el botón `OK`{.action}:

- **Name**: Indique un nombre.
- **Driver**: Seleccione `PostgreSQL`{.action}.
- **URL**: Indique la dirección del servidor y el puerto en formato jdbc:postgresql://server:port/database.
- **User Name**: Indique el nombre de usuario.
- **Password**: Indique la contraseña.


![configuración de la conexión](images/2.PNG){.thumbnail}

Confirme con el botón `Connect`{.action}.


![confirmación de la conexión](images/3.PNG){.thumbnail}

Se establecerá la conexión a la base de datos:


![conexión a la base de datos](images/4.PNG){.thumbnail}


### Conexion mediante phppgAdmin
*Próximamente disponible en otra guía.*


## Exportar una base de datos PostgreSQL

### Exportar la base de datos en linea de comandos

```bash
pg_dump --host=servidor --port=puerto --user=usuario --contraseña=contraseña nombre_de_la_BD > nombre_de_la_BD.sql
```


## Importar una base de datos PostgreSQL

### Importar la base de datos en linea de comandos

```bash
psql --host=servidor --port=puerto --user=usuario --contraseña=contraseña nombre_de_la_BD < nombre_de_la_BD.sql
```

## Más información

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](https://partner.ovhcloud.com/es-es/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](https://www.ovhcloud.com/es-es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.