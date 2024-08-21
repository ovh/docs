---
title: 'Primeros pasos con el servicio Web Cloud Databases'
excerpt: 'Descubra cómo empezar a utilizar la solución Web Cloud Databases'
updated: 2024-03-18
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

La solución Cloud Databases permite disfrutar de una instancia de bases de datos, con recursos dedicados y garantizados que ofrecen rendimiento y flexibilidad.
Su solución Cloud Databases está asociada por defecto a la red de alojamientos web de OVHcloud. Es posible asociarla a cualquier otra red a través de una lista de direcciones IP autorizadas.

**Esta guía explica cómo empezar a utilizar la solución Cloud Databases.**

## Requisitos

- Tener una instancia [Cloud Databases](https://www.ovh.es/cloud/cloud-databases/) (incluido en un [plan de hosting performance](/links/web/hosting)).
- Estar conectado al [área de cliente de OVHcloud](/links/manager){.external}.

## Procedimiento

### Activación de su servidor Web Cloud Databases incluido con su plan de hosting

Si el plan de hosting incluye la opción Web Cloud Databases, acceda al [área de cliente de OVHcloud](/links/manager){.external}. En la sección `Web Cloud`{.action}, haga clic en `Alojamientos`{.action} en la columna izquierda.

En la pestaña `Información general`, en el cuadro `Configuración`, haga clic en el botón `...`{.action} situado a la derecha de la **Web Cloud Databases**. Por último, haga clic en `Activar`{.action} para iniciar el proceso de activación.

![Información general](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/web-cloud-databases-enable.png){.thumbnail}

Para finalizar, siga las indicaciones que se ofrecen a continuación para determinar el tipo y la versión de su servidor Web Cloud Databases. A continuación, podrá acceder a ella desde la columna de la izquierda en la `Web Cloud Databases`{.action}.

### Ver la información general del servicio

En la columna izquierda de la sección Web del [área de cliente de OVHcloud](/links/manager){.external}, haga clic en `Web Cloud Databases`{.action} y seleccione el servicio Cloud Databases correspondiente. Por defecto, se abrirá la pestaña `Información general`{.action}.

> [!primary]
>
> El nombre del servicio Cloud Databases en el área de cliente de OVHcloud contiene una parte de su ID de cliente y termina en tres cifras («001» para el primer servicio Cloud Databases instalado, «002» para el segundo y así sucesivamente).
>

En dicha pestaña podrá consultar la información más importante relativa al servicio. Compruebe que los datos mostrados son correctos y se corresponden con las indicaciones que se ofrecen a continuación.

|Campo|Detalles|
|---|---|
|Estado del servicio|Indica si el servicio está iniciado, se está reiniciando o está suspendido. El servicio debe estar iniciado para poder realizar cualquier tipo de acción.|
|Tipo|Muestra el sistema de bases de datos utilizado por la instancia.|
|Versión|Muestra la versión del sistema de bases de datos utilizado por la instancia. Asegúrese de que su sitio web es compatible con la versión elegida.|
|Saturación CPU|Muestra el tiempo de CPU pasado en saturación. Su instancia Web Cloud Databases no está limitada en términos de CPU, pero debe asegurarse de que no sobrecarga la CPU de su Web Cloud Databases.|
|RAM|Muestra la memoria RAM disponible para la instancia e indica si se ha sobrepasado dicha cantidad de memoria. La instancia Cloud Databases tiene recursos de RAM dedicados y garantizados. Si lo necesita, puede aumentar la capacidad de RAM de la instancia, así como recibir alertas si consume todos los recursos de RAM asignados.|
|Infraestructura|Muestra la infraestructura utilizada por la instancia. Se trata de una información inherente a la infraestructura de OVHcloud.|
|Datacenter|Muestra el centro de datos en el que se ha creado la instancia Cloud Databases. Asegúrese de que el datacenter sea el mismo que el del servicio (VPS, servidor dedicado, Public Cloud...) que aloje su sitio web.|
|Host|Indica el servidor de OVHcloud en el que se ha creado la instancia. Se trata de una información inherente a la infraestructura de OVHcloud y se utiliza en nuestras comunicaciones relacionadas con [incidencias](http://status.ovh.es){.external}.|

![Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/general-information.png){.thumbnail}

### Crear una base de datos

> [!primary]
>
> Este paso no es aplicable a los sistemas de bases de datos Redis.
>

Para crear una base de datos en una instancia Cloud Databases, abra la pestaña `Bases de datos`{.action} y haga clic en el botón `Añadir una base de datos`{.action}.

![Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database.png){.thumbnail}

Se abrirá una ventana en la que podrá elegir las siguientes opciones relativas a la nueva base de datos:

-  **Crear un usuario**: El nuevo usuario podrá realizar consultas a la base de datos tales como lectura, inserción o eliminación de datos.
- **Añadir una dirección IP autorizada**: Las consultas provenientes de dicha dirección IP estarán autorizadas a acceder a las bases de datos.

Complete la información solicitada y haga clic en `Aceptar`{.action}.

|Campo|Descripción|
|---|---|
|Nombre de la BD|Nombre que quiera asignar a la base de datos.|
|Nombre de usuario|Usuario que podrá conectarse a la base de datos y realizar consultas (obligatorio si la casilla `Crear un usuario`{.action} está marcada).|
|Permisos|Permisos que tendrá el usuario sobre la base de datos (obligatorio si la casilla `Crear un usuario`{.action} está marcada). Para un uso convencional, seleccione `Administrador`{.action} |
|Contraseña|Introduzca una contraseña y luego confírmela introduciéndola de nuevo (obligatorio si la casilla `Crear un usuario`{.action} está marcada).|
|IP/Máscara|Dirección IP o máscara de red del servidor o servidores autorizados a acceder a las bases de datos (obligatorio si la casilla `Añadir una dirección IP autorizada`{.action} está marcada).|

> [!warning]
>
> Por motivos de seguridad, los datos introducidos deben cumplir los criterios indicados.
>

![Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database-create-user-confirmation.png){.thumbnail}

### Crear un usuario

> [!primary]
>
> Este paso no es aplicable a los sistemas de bases de datos Redis.
>

Si ha creado el usuario junto con la base de datos en la operación anterior, no tendrá que realizar esta etapa. No obstante, en determinados proyectos puede ser necesario habilitar a varios usuarios para que intervengan en la base de datos. Por ejemplo, uno de los usuarios puede tener permisos de lectura y escritura, y otro, solo de lectura.

Si su proyecto no requiere usuarios adicionales, puede omitir este paso. En caso contrario, para crear un usuario en su instancia Cloud Databases, abra la pestaña `Usuarios y permisos`{.action} y haga clic en el botón `Añadir un usuario`{.action}.

![Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/add-user.png){.thumbnail}

Se abrirá una ventana en la que deberá completar la información solicitada y hacer clic en `Aceptar`{.action}.

|Campo|Descripción|
|---|---|
|Nombre de usuario|Usuario que podrá conectarse al servicio. Más adelante podrá asignarle permisos sobre la base de datos.|
|Contraseña|Introduzca una contraseña y luego confírmela en el campo `Repetir contraseña`{.action}.|

> [!warning]
>
> Por motivos de seguridad, los datos introducidos deben cumplir los criterios indicados.
>

![Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/add-user-confirmation.png){.thumbnail}

Una vez que haya creado el usuario, deberá asignarle permisos para que pueda realizar acciones en la base de datos, tales como la lectura, la inserción o la eliminación de datos. Para ello, haga clic en el botón `...`{.action} situado al final de la línea correspondiente al usuario y seleccione `Editar los permisos`{.action}. En la nueva página, seleccione los permisos marcando la opción correspondiente. Para un uso convencional, seleccione `Administrador`{.action}.

![Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/manage-rights-2.png){.thumbnail}

### Importar una base de datos

> [!primary]
>
> Esta operación solo es necesaria si desea importar una copia de seguridad de una base de datos preexistente. Si no tiene que importar ninguna base de datos, puede omitir este paso.
>

Hay varias maneras de importar una base de datos. OVHcloud ofrece una herramienta que permite hacerlo desde el área de cliente. No obstante, puede utilizar cualquier otro método de importación en función de sus preferencias y conocimientos.

A continuación se explica cómo importar una base de datos utilizando la herramienta que OVHcloud pone a su disposición en el área de cliente.

**1. Acceder a la función de importación**

Abra la pestaña `Bases de datos`{.action}, haga clic en el icono con forma de rueda dentada correspondiente a la base de datos y seleccione `Importar un archivo`{.action}. Se abrirá una ventana en la que deberá marcar la opción `Importar un nuevo archivo`{.action}. Haga clic en `Siguiente`{.action}.

![Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/import-file.png){.thumbnail}

**2. Seleccione y envíe el archivo de la copia de seguridad**

Asigne un nombre al archivo para poder identificar la copia de seguridad más adelante si quiere restaurarla. A continuación, seleccione el archivo de la copia de seguridad en su ordenador y haga clic en `Enviar`{.action}. Espere hasta que la pantalla indique que el archivo se ha enviado correctamente y haga clic en `Siguiente`{.action}.

![Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/database-import-new-file-step-2.png){.thumbnail}

**3. Ejecute la importación de la base de datos**

Por último, seleccione las opciones adicionales que quiera que se apliquen y haga clic en `Aceptar`{.action}.

|Opciones adicionales|Descripción|
|---|---|
|Vaciar la base de datos actual|Todo el contenido existente en la base de datos se eliminará y será sustituido por el de la copia de seguridad.|
|Enviar un email cuando termine la importación|Si marca la casilla, se enviará una notificación por correo electrónico cuando haya finalizado la importación de la base de datos.|

![Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/database-import-new-file-step-3-send-email.png){.thumbnail} 

### Autorizar una dirección IP <a name="trustip"></a>

Para que sea posible acceder a la instancia Cloud Databases, deberá indicar las direcciones IP o rangos de IP autorizados a conectarse a la base de datos. Para ello, abra la pestaña `IP autorizadas`{.action} y haga clic en el botón `Añadir una dirección IP/máscara`{.action}.

![Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask-2.png){.thumbnail}

En la nueva ventana, indique en **IP/máscara** la dirección IP o la máscara de red que quiera autorizar y, si lo desea, añada una descripción. Indique si quiere autorizar el acceso únicamente a las bases de datos o también al SFTP. Para terminar, haga clic en `Aceptar`{.action}.

![Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask-confirmation.png){.thumbnail}

### Autorizar la conexión a un alojamiento web de OVHcloud <a name="trustip"></a>

Por defecto, la solución Cloud Databases está asociada automáticamente a los planes de hosting de OVHcloud. No obstante, si lo desea, puede desactivar el acceso a la base de datos Cloud Databases de OVHcloud.

Para ello, abra la pestaña `IP autorizadas`{.action} y haga clic en el botón `Acceso a los alojamientos web de OVHcloud`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/access-to-ovhcloud-web-hosting.png){.thumbnail}

### Conectar el sitio web con la base de datos

Una vez que la base de datos está creada, que uno o más usuarios tienen permisos sobre ella y que al menos una dirección IP o que los alojamientos web de OVHcloud han sido autorizados en su instancia Cloud Databases, solo queda conectar el sitio web a la base de datos. Esto puede hacerse de varias formas, en función del sitio web o del CMS utilizado (WordPress, Joomla!...), así como de la fase en la que se encuentre si está instalando un sitio web.

Para poder realizar esta operación, deberá disponer de los siguientes datos:

|Campo|Descripción|
|---|---|
|Nombre de la base de datos|Nombre que le haya asignado a la base de datos al crearla. Puede consultar todas las bases de datos creadas en su servicio Cloud Databases en la pestaña `Bases de datos`{.action}.|
|Nombre de usuario|Nombre que le haya asignado al usuario al crear la base de datos o al añadir el usuario adicional, en su caso. Puede consultar todos los usuarios creados en su servicio Cloud Databases en la pestaña `Usuarios y permisos`{.action}.|
|Contraseña del usuario|Contraseña asociada al usuario, que habrá establecido en las operaciones anteriores.|
|Nombre del host|Servidor en el que está alojado el servicio de bases de datos. Es necesario para que el sitio web pueda conectarse a la base de datos, y puede consultarlo en el área de cliente, en la pestaña `Información general`{.action}, dentro del recuadro **Información de conexión**.|
|Puerto|Puerto de conexión al servicio Cloud Databases. Es necesario para que el sitio web pueda conectarse a la base de datos, y puede consultarlo en el área de cliente, en la pestaña `Información general`{.action}, dentro del recuadro **Información de conexión**.|

> [!warning]
>
> Es posible que el campo `port`{.action} no esté disponible en la configuración de su sitio. Tendrá que añadir este campo después del nombre de host de su servidor, separándolos con un *:*. <br><br>
> Por ejemplo, para el nombre de host `zz1111111-002.eu.clouddb.ovh.net` con el puerto SQL `34567`, deberá introducir `zz1111111-002.eu.clouddb.ovh.net:34567` en el Parte "Host" / "Nombre de host".
>

![Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/login-information.png){.thumbnail}

### Obtener los logs de su servidor Web Cloud Databases

Para acceder a los logs de su solución Web Cloud Databases, consulte nuestra guía "[Web Cloud Databases - ¿Cómo recuperar los logs?](/pages/web_cloud/web_cloud_databases/retrieve-logs)".

## Más información

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).