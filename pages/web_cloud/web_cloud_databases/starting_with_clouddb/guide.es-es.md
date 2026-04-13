---
title: 'Primeros pasos con Web Cloud Databases'
excerpt: 'Descubra cómo empezar a utilizar la solución Web Cloud Databases'
updated: 2026-03-24
---

## Objetivo

La solución Web Cloud Databases ofrece una instancia de bases de datos con recursos dedicados y garantizados, proporcionando rendimiento y flexibilidad.
Por defecto, su solución Web Cloud Databases está asociada a la red de alojamientos web de OVHcloud. También puede asociarla a cualquier otra red a través de una lista de direcciones IP autorizadas.

**Descubra cómo empezar a utilizar la solución Web Cloud Databases.**

## Requisitos

- Una [instancia Web Cloud Databases](/links/web/databases) (incluida en un plan de [alojamiento web Performance](/links/web/hosting)).

<!-- CP-NAV-START:web-cloud-databases -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Ruta de navegación:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Seleccione su servicio de base de datos

---
<!-- CP-NAV-END:web-cloud-databases -->

## Procedimiento

### Activación de su servidor Web Cloud Databases incluido con su plan de alojamiento web

<!-- CP-STEPS-START:activate-wcdb-hosting -->
Si su plan de alojamiento incluye la opción Web Cloud Databases, haga clic en las fichas siguientes para ver cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Desde la pestaña `Información general`, en el apartado `Configuración`, haga clic en el botón `...`{.action} a la derecha de **Web Cloud Databases**. A continuación, haga clic en `Activar`{.action} para iniciar el proceso de activación.
>>
>> ![Información general](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/web-cloud-databases-enable.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Siga las instrucciones proporcionadas para determinar el tipo y la versión de su servidor Web Cloud Databases. A continuación, estará accesible desde la columna izquierda en `Web Cloud Databases`{.action}.
<!-- CP-STEPS-END:activate-wcdb-hosting -->

### Consultar la información general de la instancia

<!-- CP-STEPS-START:general-information -->
Haga clic en las fichas siguientes para ver cada una de las **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Web Cloud Databases](/links/control-panel/web-cloud-databases) y seleccione la solución correspondiente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > El nombre del servicio Web Cloud Databases en su área de cliente de OVHcloud contiene una parte de su referencia de cliente y termina con tres cifras (001 para el primer servicio Web Cloud Databases instalado, 002 para el segundo, etc.).
>>
> **Etapa 2**
>>
>> Asegúrese de estar en la pestaña `Información general`{.action}.
>>
>> Compruebe que la información mostrada es correcta o se corresponde con las indicaciones siguientes.
>>
>> |Información|Detalles|
>> |---|---|
>> |Estado del servicio|Muestra si la instancia está iniciada, reiniciándose o suspendida. Su instancia debe estar iniciada para poder realizar acciones en ella.|
>> |Tipo|Muestra el sistema de bases de datos utilizado por el servidor.|
>> |Versión|Muestra la versión del sistema de bases de datos utilizada por el servidor. Asegúrese de que su sitio web es compatible con la versión elegida.|
>> |Saturación CPU|Muestra el tiempo de CPU en saturación. Su instancia Web Cloud Databases no está limitada en términos de CPU, pero debe asegurarse de no sobrecargarla.|
>> |RAM|Muestra la memoria RAM disponible para su instancia, así como los posibles desbordamientos de memoria. Su instancia Web Cloud Databases dispone de recursos dedicados y garantizados: su memoria RAM. Si lo necesita, puede ampliarla y recibir una notificación si consume todos los recursos de memoria de su instancia.|
>> |Infraestructura|Muestra la infraestructura utilizada por su instancia. Se trata de una información inherente a la infraestructura de OVHcloud.|
>> |Datacenter|Muestra el centro de datos en el que se ha creado la instancia.|
>> |Host|Muestra el servidor de OVHcloud en el que se ha creado su instancia. Se trata de una información inherente a la infraestructura de OVHcloud y puede utilizarse en las comunicaciones relativas a los [incidentes de OVHcloud](https://www.status-ovhcloud.com/).|
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/general-information.png){.thumbnail}
<!-- CP-STEPS-END:general-information -->

### Crear una base de datos

> [!primary]
>
> Este paso no se aplica al sistema de bases de datos Redis.

<!-- CP-STEPS-START:create-database -->
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
>> Complete los campos siguiendo los criterios indicados. Puede crear directamente un usuario marcando la casilla **"Crear un usuario"**:
>>
>> - **Nombre de la base de datos** (obligatorio): es el nombre de su futura base de datos.
>> - **Nombre de usuario** (solo si la casilla `Crear un usuario` está marcada): el usuario que podrá conectarse a su base de datos y realizar consultas.
>> - **Permisos** (solo si la casilla `Crear un usuario` está marcada): los permisos asociados al usuario en la base de datos. Para un uso estándar, seleccione `Administrador`{.action}. Los permisos pueden modificarse posteriormente.
>> - **Contraseña**/**Confirmar contraseña** (solo si la casilla `Crear un usuario` está marcada): seleccione una contraseña y confírmela.
>>
>> Haga clic en `Aceptar`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database-confirmation.png){.thumbnail}
<!-- CP-STEPS-END:create-database -->

### Crear un usuario

> [!primary]
>
> Este paso no se aplica al sistema de bases de datos Redis.

Si ha creado el usuario a la vez que su base de datos en el paso anterior, este paso es opcional. Sin embargo, un proyecto puede requerir varios usuarios con permisos diferentes (por ejemplo, lectura/escritura para uno y solo lectura para otro).

<!-- CP-STEPS-START:create-user -->
Si su proyecto no necesita un usuario adicional, puede pasar al siguiente paso. En caso contrario, haga clic en las fichas siguientes para ver cada una de las **4** etapas.

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
<!-- CP-STEPS-END:create-user -->

Si necesita modificar los permisos de un usuario existente, consulte nuestra guía "[Web Cloud Databases - Modificar los permisos de un usuario](/pages/web_cloud/web_cloud_databases/modify_rights_for_users)".

### Importar una base de datos

> [!primary]
>
> Este paso se aplica si desea importar una copia de seguridad de una base de datos existente. Si no es el caso, pase al siguiente paso.

Para importar una base de datos, consulte nuestra guía "[Restaurar e importar una base de datos en su servidor de bases de datos](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server)".

Se describen varios métodos de importación.

### Autorizar una dirección IP

Para que su instancia Web Cloud Databases funcione, debe indicar las IP o rangos de IP autorizados a conectarse a sus bases de datos.

<!-- CP-STEPS-START:authorize-ip -->
Para ello, haga clic en las fichas siguientes para ver cada una de las **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Web Cloud Databases](/links/control-panel/web-cloud-databases) y seleccione la solución correspondiente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la página que se muestra, haga clic en la pestaña `IP autorizadas`{.action}.
>>
>> ![IP autorizadas](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorised-ips.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Haga clic en el botón `Añadir una dirección IP/máscara`{.action} situado encima de la tabla.
>>
>> ![Interfaz de IP autorizadas](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/tab-0000-sftp-hosting-enabled.png){.thumbnail}
>>
>> > [!success]
>> >
>> > Si desea modificar una dirección IP o un rango de IP ya autorizado, haga clic en el botón `...`{.action} a la derecha de la línea correspondiente en la tabla y luego en `Editar la whitelist`{.action}.
>>
> **Etapa 4**
>>
>> En la ventana que se abre, deben completarse varios campos:
>>
>> ![Añadir una dirección IP o máscara](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask-confirmation.png){.thumbnail}
>>
>> - `IP/máscara *`{.action}: Introduzca la dirección IP (p. ej., `203.0.113.44`) o el rango de IP (p. ej., `203.0.113.0/24`, que representa todas las direcciones IP de `203.0.113.0` a `203.0.113.255`) que desea autorizar en su solución Web Cloud Databases.
>> - `Descripción`{.action} (opcional): Puede añadir información sobre la función de la dirección IP o del rango de IP en cuestión.
>> - `Bases de datos`{.action}: Marque esta casilla para que la dirección IP o el rango de IP pueda acceder a las bases de datos de su solución Web Cloud Databases.
>> - `SFTP`{.action}: Marque esta casilla para que la dirección IP o el rango de IP pueda acceder a los logs de su solución Web Cloud Databases.
>>
>> > [!warning]
>> >
>> > Se desaconseja encarecidamente marcar la casilla `Bases de datos`{.action} para autorizar el rango de IP `0.0.0.0/0` a acceder a sus bases de datos.
>> >
>> > Esto permitiría que todas las direcciones IPv4 existentes accedan a sus bases de datos.
>>
>> Una vez introducida la información, haga clic en el botón `Aceptar`{.action}.
<!-- CP-STEPS-END:authorize-ip -->

### Autorizar las conexiones desde un alojamiento web de OVHcloud <a name="trustip"></a>

Por defecto, su solución Web Cloud Databases está automáticamente asociada a los alojamientos web de OVHcloud. Si lo desea, puede desactivar el acceso de los alojamientos web de OVHcloud a su Web Cloud Databases.

Para ello, consulte los casos particulares de nuestra guía "[Web Cloud Databases - ¿Cómo autorizar una dirección IP?](/pages/web_cloud/web_cloud_databases/authorise_IP)" para activar o desactivar el acceso de los alojamientos web de OVHcloud a su Web Cloud Databases.

### Asociar su sitio web a la base de datos

Ahora que su base de datos está creada, uno o varios usuarios tienen permisos sobre ella y al menos una dirección IP o los alojamientos web de OVHcloud han sido autorizados en su instancia Web Cloud Databases, solo queda asociar su sitio web a su base de datos. Este paso puede realizarse de varias formas, en función del sitio web o del CMS (WordPress, Joomla!, etc.) utilizado, así como de la etapa en la que se encuentre si está instalando un sitio web.

Para ello, necesita las siguientes 5 informaciones:

|Información|Descripción|
|---|---|
|Nombre de la base de datos|El nombre que definió al crear la base de datos.|
|Nombre de usuario|El nombre de usuario que definió al crear la base de datos o cualquier usuario adicional que haya añadido.|
|Contraseña del usuario|La contraseña asociada al usuario, que definió en los pasos anteriores.|
|Nombre de host del servidor|El servidor que debe indicar para que su sitio web pueda conectarse a su base de datos.|
|Puerto del servidor|El puerto de conexión a su instancia Web Cloud Databases para que su sitio web pueda conectarse a su base de datos.|

<!-- CP-STEPS-START:link-website-database -->
Para obtener esta información, haga clic en las fichas siguientes para ver cada una de las **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Web Cloud Databases](/links/control-panel/web-cloud-databases) y seleccione la solución correspondiente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Obtenga la siguiente información de conexión:
>>
>> - **Servidor (nombre de host) y puerto:** visibles en la pestaña `Información general`{.action}, en el apartado `Datos de conexión`.
>> - **Nombre de usuario:** visible en la pestaña `Usuarios y permisos`{.action}.
>> - **Contraseña:** la contraseña asociada al usuario. Si la ha olvidado, acceda a la pestaña `Usuarios y permisos`{.action}, haga clic en `...`{.action} a la derecha del usuario correspondiente y luego en `Cambiar la contraseña`{.action}.
>>
>> > [!warning]
>> >
>> > Si cambia la contraseña de un usuario de la base de datos, todas las aplicaciones o sitios web que acceden a esta base de datos deben actualizarse en consecuencia.
<!-- CP-STEPS-END:link-website-database -->

> [!warning]
>
> Es posible que el campo `puerto`{.action} no esté disponible en la configuración de su sitio web. Debe añadir este campo después del nombre de host de su servidor, separándolos con *:*.
>
> Por ejemplo, para el nombre de host `aaXXXXX-XXX.eu.clouddb.ovh.net` con el puerto SQL `12345`, deberá indicar `aaXXXXX-XXX.eu.clouddb.ovh.net:12345` en el apartado "Host" / "Nombre de host".

### Obtener los logs de su servidor Web Cloud Databases

Para acceder a los logs de su solución Web Cloud Databases, consulte nuestra guía "[Web Cloud Databases - ¿Cómo obtener los logs?](/pages/web_cloud/web_cloud_databases/retrieve-logs)".

## Más información

[Crear bases de datos y usuarios en un servidor de bases de datos](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server)

[Conectarse a la base de datos de un servidor de bases de datos](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server)

[Guardar y exportar una base de datos en un servidor de bases de datos](/pages/web_cloud/web_cloud_databases/save-export-on-database-server)

[Restaurar e importar una base de datos en un servidor de bases de datos](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server)

[Configurar el servidor de bases de datos](/pages/web_cloud/web_cloud_databases/configure-database-server)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas [soluciones en materia de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
