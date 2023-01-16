---
title: 'Crear bases de datos y usuarios en un servidor de bases de datos'
slug: crear-bases-de-datos-y-usuarios
excerpt: 'Cómo crear una base de datos en un servidor de bases de datos'
section: Configuración
order: 02
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 23/06/2022**

## Objetivo

Una base de datos (también llamada *database*, DB o BD) permite almacenar elementos dinámicos, como comentarios o artículos. Prácticamente todos los sistemas de gestión de contenidos (*content management system* o CMS), como WordPress o Joomla!, utilizan bases de datos.

**Esta guía explica cómo crear una base de datos en un servidor de bases de datos.**

## Requisitos

- Tener una [instancia Web Cloud Databases](https://www.ovh.es/cloud/cloud-databases/) (incluida en un [plan de hosting Performance](https://www.ovhcloud.com/es-es/web-hosting/)
- Estar conectado a su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es)

## Procedimiento

### Crear una base de datos

Acceda al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}. Haga clic en la pestaña `Web Cloud` y seleccione `Base de datos`{.action}. Seleccione el nombre del servidor de bases de datos.

Abra la pestaña `Bases de datos` y haga clic en `Añadir una base de datos.`{.action}

![private-sql](images/private-sql-createdb01.png){.thumbnail}

Introduzca los campos de acuerdo con los criterios indicados. Es posible crear directamente un usuario marcando la casilla **"Crear un usuario"**:

- **Nombre de la BD** (obligatorio): Nombre que tendrá la base de datos.
- **Nombre de usuario** (solo si está marcada la casilla `Crear un usuario`): usuario que podrá conectarse a la base de datos y realizar consultas.
- **Permisos** (solo si está marcada la casilla `Crear un usuario`): son los permisos que se asociarán al usuario sobre la base de datos. Para un uso convencional, seleccione `Administrador`{.action}. Más adelante podrá modificar los permisos.
- **Contraseña**/**Confirmar contraseña** (solo si está marcada la casilla `Crear usuario`): seleccione una contraseña y luego confírmela introduciéndola de nuevo.

Haga clic en `Aceptar`{.action}.

![private-sql](images/private-sql-createdb02.png){.thumbnail}

### Crear un usuario

Para utilizar un servidor de bases de datos de OVHcloud, es necesario crear usuarios que tengan permisos específicos para conectarse a una base de datos.

Acceda al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}. Haga clic en la pestaña `Web Cloud` y seleccione `Base de datos`{.action}. Seleccione el nombre del servidor de bases de datos.

Acceda a la pestaña `Usuarios y permisos` y haga clic en `Añadir un usuario`{.action}

![private-sql](images/private-sql-user01.png){.thumbnail}

Introduzca un nombre de usuario y una contraseña y haga clic en `Aceptar`{.action}.

### Gestionar los derechos de los usuarios

Para autorizar a un usuario a realizar acciones en una base de datos, es necesario asignarle permisos.

Para administrar los permisos de cada usuario, acceda al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}. Haga clic en la pestaña `Web Cloud` y seleccione `Base de datos`{.action}. Seleccione el nombre del servidor de bases de datos. Haga clic en la pestaña `Usuarios y permisos`.

Haga clic en el botón `...`{.action} a la derecha del usuario correspondiente y, seguidamente, en `Gestionar los permisos`{.action}.

![private-sql](images/private-sql-rights01.png){.thumbnail}

En la columna izquierda, **"Bases de datos"**, encontrará una lista de las bases de datos del servidor de bases de datos.

La descripción de los tres tipos de derechos propuestos es la siguiente:

- `Administrador:` autorización de consultas de tipo **Select, Insert, Update, Delete, Create, Alter y Drop**.
- `Lectura/Escritura:` autorización de consultas de tipo **Select, Insert, Update y Delete**.
- `Lecture`: autorización de consultas de tipo **Select**.
- `Ninguno:` sin derechos sobre la base de datos.

> [!primary]
> 
> La segmentación de los permisos mencionados es exclusiva de OVHcloud. De este modo, un usuario con permisos `Administrador` podrá realizar **DLL** (Data Definición Language) y **DML** (Data Manipulation Language), mientras que un usuario con permisos `Lectura/Escritura` solo realizará la Manipulación del DML (Data Manipulation Language).

![private-sql](images/private-sql-rights02.png){.thumbnail}

#### Eliminar una base de datos

> [!warning]
>
> Antes de eliminar una base de datos en un servidor de bases de datos, no se comprueba el contenido de la base de datos.
> Se eliminará incluso si los datos todavía están almacenados en él.
> Por este motivo, se recomienda que se cree y descargue una copia de seguridad de su lado antes de cualquier eliminación.
> 

Acceda al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}. Haga clic en la pestaña `Web Cloud` y seleccione `Base de datos`{.action}. Seleccione el nombre del servidor de bases de datos.

Para eliminar una base de datos en su servidor de bases de datos, abra la pestaña `Bases de datos`, haga clic en el botón `...`{.action} situado a la derecha de la base de datos correspondiente y seleccione `Eliminar la base`{.action}.

![private-sql](images/private-sql-deldb01.png){.thumbnail}


## Más información

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](https://partner.ovhcloud.com/es-es/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](https://www.ovhcloud.com/es-es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
