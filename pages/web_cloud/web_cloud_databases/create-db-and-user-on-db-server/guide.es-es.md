---
title: 'Crear bases de datos y usuarios en un servidor de bases de datos'
excerpt: 'Cómo crear una base de datos en un servidor de bases de datos'
updated: 2026-03-24
---

## Objetivo

Una base de datos (DB) permite almacenar elementos denominados dinámicos, como comentarios o artículos, por ejemplo. Prácticamente todos los sistemas de gestión de contenidos (CMS), como WordPress o Joomla!, utilizan bases de datos.

**Esta guía explica cómo crear una base de datos en un servidor de bases de datos y dar acceso a los usuarios.**

## Requisitos

- Disponer de una [instancia Web Cloud Databases](/links/web/databases) (incluida en un [plan de hosting Performance](/links/web/hosting)).

<!-- CP-NAV-START:web-cloud-databases -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Ruta de navegación:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Seleccione su servicio de base de datos

---
<!-- CP-NAV-END:web-cloud-databases -->

## Procedimiento

### Crear una base de datos

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
>> Haga clic en `Añadir una base de datos`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > La creación de esquemas PostgreSQL no está disponible actualmente en los servidores Web Cloud Databases.
>>
> **Etapa 4**
>>
>> Cumplimente los campos de acuerdo con los criterios indicados. Puede crear directamente un usuario marcando la casilla **"Crear un usuario"**:
>>
>> - **Nombre de la base de datos** (obligatorio): es el nombre de su futura base de datos.
>> - **Nombre de usuario** (solo si la casilla `Crear un usuario` está marcada): es el usuario que podrá conectarse a la base de datos y realizar consultas.
>> - **Permisos** (solo si la casilla `Crear un usuario` está marcada): son los permisos que se asociarán al usuario en la base de datos. Para un uso estándar, seleccione `Administrador`{.action}. Los permisos pueden modificarse posteriormente.
>> - **Contraseña**/**Confirmar contraseña** (solo si la casilla `Crear un usuario` está marcada): seleccione una contraseña y confírmela.
>>
>> Haga clic en `Aceptar`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database-confirmation.png){.thumbnail}

### Crear un usuario

Para utilizar un servidor de bases de datos de OVHcloud, cree usuarios con permisos específicos de conexión a una base de datos.

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
>> Haga clic en la pestaña `Usuarios y permisos`{.action}.
>>
> **Etapa 3**
>>
>> Haga clic en `Añadir un usuario`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/add-user.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Introduzca un "nombre de usuario" y una "contraseña" y haga clic en `Aceptar`{.action}.

### Gestionar los permisos de los usuarios

Para permitir que un usuario realice acciones en una base de datos, es necesario asignarle permisos.

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
>> Haga clic en la pestaña `Usuarios y permisos`{.action}.
>>
> **Etapa 3**
>>
>> Haga clic en el botón `...`{.action} a la derecha del usuario correspondiente y luego en `Gestionar los permisos`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/manage-rights.png){.thumbnail}
>>
> **Etapa 4**
>>
>> En la columna izquierda **Base de datos**, encontrará la lista de las bases de datos de su servidor.
>>
>> Existen 3 tipos de permisos:
>>
>> - `Administrador`: autorización de las consultas de tipo **Select / Insert / Update / Delete / Create / Alter / Drop**.
>> - `Lectura / Escritura`: autorización de las consultas de tipo **Select / Insert / Update / Delete**.
>> - `Lectura`: autorización de las consultas de tipo **Select**.
>> - `Ninguno`: ningún permiso en la base de datos.
>>
>> > [!primary]
>> >
>> > La distribución de los permisos mencionados anteriormente es propia de OVHcloud. Así, un usuario con permisos de `Administrador` podrá utilizar **DDL** (Data Definition Language) y **DML** (Data Manipulation Language), mientras que un usuario con permisos de `Lectura / Escritura` solo podrá utilizar **DML** (Data Manipulation Language).
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/changing-user-rights.png){.thumbnail}

### Eliminar una base de datos

> [!warning]
>
> Antes de eliminar una base de datos en un servidor de bases de datos,
> no se realiza ninguna verificación de su contenido. La base de datos se
> eliminará aunque contenga datos. Por lo tanto, se recomienda crear
> una copia de seguridad y descargarla antes de cualquier eliminación.
>

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
> **Etapa 3**
>>
>> Haga clic en el botón `...`{.action} a la derecha de la base de datos correspondiente y luego en `Eliminar la base de datos`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/delete-the-database.png){.thumbnail}

## Más información

Para servicios especializados (SEO, desarrollo, etc.), contacte con los [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda en el uso y la configuración de sus soluciones de OVHcloud, puede consultar nuestras distintas [ofertas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
