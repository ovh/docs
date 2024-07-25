---
title: "Recuperar la copia de seguridad de una base de datos eliminada"
excerpt: "Descubra cómo encontrar la copia de seguridad de una base de datos eliminada desde el área de cliente de OVHcloud"
updated: 2024-07-25
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

La mayoría de nuestros [planes de hosting](/links/web/hosting) incluyen bases de datos. Si, por accidente, elimina una base de datos asociada a su alojamiento web, puede intentar recuperar la copia de seguridad a través de nuestra API.

**Descubra cómo, a través de las API de OVHcloud, recuperar una copia de seguridad de una base de datos eliminada desde el área de cliente de OVHcloud.**

> [!warning]
>
> OVHcloud pone a su disposición servicios cuya configuración, gestión y responsabilidad recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las tareas más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner). ya que no podremos proporcionarle ayuda adicional sobre las API. Para más información, consulte la sección ["Más información"](#go-further) de esta guía.
>

## Requisitos

- Tener un [plan de hosting de OVHcloud](/links/web/hosting) activo que incluya una o varias bases de datos compartidas de OVHcloud asociadas.
- La eliminación de la base de datos debe tener menos de 30 días.

## Procedimiento

Las API de OVHcloud permiten a los desarrolladores o integradores asociar, por ejemplo, funcionalidades presentes o no en el área de cliente de OVHcloud directamente en sus aplicaciones o soluciones.

> [!warning]
>
> Las copias de seguridad ofrecidas por OVHcloud para los alojamientos compartidos y sus bases de datos asociadas no son contractuales. OVHcloud le ofrece estos servicios como complemento de sus servicios para ayudarle en situaciones urgentes. Le recomendamos que realice regularmente sus propias copias de seguridad para paliar las posibles pérdidas de datos.
>
> Además, cuando una base de datos es eliminada por su usuario o su administrador, OVHcloud no podrá garantizar la recuperación de la copia de seguridad de la misma por las razones anteriormente citadas.
>

### Etapa 1 - Obtener el nombre del alojamiento web al que estaba asociada la base de datos eliminada

Para obtener el nombre del alojamiento web, lleve a cabo los siguientes pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager).
2. En la línea situada en la parte superior del área de cliente, haga clic en la pestaña `Web Cloud`{.action}.
3. En la columna izquierda, haga clic en el menú desplegable `Alojamientos`{.action}.
4. Seleccione el alojamiento web correspondiente.
5. En la parte superior izquierda de la página que aparece, consulte el nombre de su alojamiento web, a la derecha de la mención `Alojamientos /`{.action}.

![API](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-webhosting-name.png){.thumbnail}

### Etapa 2 - Conectarse a las API de OVHcloud y permitirles el acceso a sus servicios

Para ello, lleve a cabo las siguientes acciones:

- Visite nuestro sitio web [API OVHcloud](/links/api) (compruebe que está en `https://eu.api.ovh.com` si sus servicios están alojados en Europa y en `https://ca.api.ovh.com` si están alojados fuera de Europa).
- En la nueva página, haga clic en `Explore the OVHcloud API`{.action}.
- En la nueva página que aparece, en el lado izquierdo de la página, sitúese en el formulario situado a la derecha del formulario `v1`{.action} y seleccione o introduzca la opción `/hosting/web`.
- En la columna izquierda, debajo de la lista de API, busque y haga clic en la siguiente API: **GET /hosting/web/{serviceName}/dump**. También puede hacer clic directamente en la API para acceder:

> [!api]
>
> @api {v1} /hosting/web GET /hosting/web/{serviceName}/dump
>

- En la parte derecha de la página se muestra la API con sus diferentes formularios a rellenar.
- Haga clic en el botón situado en la esquina superior derecha, titulado `Authenticate`{.action}, y luego en el botón `Login with OVHcloud SSO`{.action}.
- Se abrirá la interfaz de conexión a su [área de cliente de OVHcloud](/links/manager).
- Conéctese con su ID de cliente y haga clic en `Authorize`{.action} para utilizar las API de OVHcloud con los servicios presentes en su área de cliente.
- A continuación, el sistema le redirigirá automáticamente a la página anterior de la API **GET /hosting/web/{serviceName}/dump** mientras está conectado al área de cliente de OVHcloud.

### Etapa 3 - Comprobar la disponibilidad de las copias de seguridad y recuperar el ID de la última copia de seguridad

Para ello, complete los diferentes formularios como se detalla a continuación:

- Para la sección titulada `PATH PARAMETERS`:
- `serviceName`: Introduzca el nombre de su alojamiento web obtenido anteriormente en el etapa 1 de esta guía.

- Para la sección titulada `QUERY-STRING PARAMETERS`:
- `creationDate.from`: Deje el formulario en blanco.
- `creationDate.to`: Deje el formulario en blanco.
- `databaseName`: Introduzca el nombre de la base de datos eliminada accidentalmente. (ejemplo: **deletedDatabase.mysql.db**).
- `deletionDate.from`: Deje el formulario en blanco.
- `deletionDate.to`: Deje el formulario en blanco.
- `orphan`: Introduzca el valor en minúscula: `true`.

![API](/pages/assets/screens/api/get-hosting-web-servicename-dump.png){.thumbnail}

Una vez que haya completado todos los formularios, haga clic en el botón azul `Try`{.action} situado en la parte inferior derecha de las dos secciones que haya completado.

Si todo se ha rellenado correctamente y hay copias de seguridad disponibles para la base de datos eliminada, aparecerá una lista de números de identificador de copia de seguridad en la ventana `RESPONSE`{.action} al acceder a la página situada debajo del botón `Try`{.action}.

![API](/pages/assets/screens/api/get-hosting-web-servicename-dump-response.png){.thumbnail}

Cada uno de estos números corresponde a un identificador de copia de seguridad disponible (ID). Estos identificadores de copia de seguridad aparecen del más reciente al más antiguo. **Copie el ID más alto de la lista** (sin la `,` al final) si desea recuperar (en el paso 4 de esta guía) la última copia de seguridad de su base de datos eliminada.

Si no aparece ningún ID de cliente en la ventana, compruebe que ha iniciado sesión con el ID de cliente de OVHcloud correcto (si tiene varios). Compruebe también la información introducida en las secciones **PATH PARAMETERS** y **QUERY-STRING PARAMETERS**. A continuación, vuelva a intentar la operación.

Si, a pesar de todo, todavía no aparece un ID, significa que no hay copias de seguridad disponibles para la base de datos eliminada en nuestra infraestructura.

### Etapa 4 - Obtener la última copia de seguridad

Gracias al número de identificador de copia de seguridad obtenido en el paso 3, podrá descargar, mediante un enlace generado por la API, la última copia de seguridad de su base de datos eliminada.

Para ello, puede permanecer en nuestro sitio web [API OVHcloud](/links/api) y realizar las siguientes acciones:

- En la parte izquierda de la página, haga clic en el formulario situado a la derecha del formulario `v1`{.action} y seleccione o introduzca la opción `/hosting/web`{.action}.
- En la columna izquierda, debajo de la lista de API, busque y haga clic en la siguiente API: **GET /hosting/web/{serviceName}/dump/{id}**. También puede hacer clic directamente en la API para acceder:

> [!api]
>
> @api {v1} /hosting/web GET /hosting/web/{serviceName}/dump/{id}
>

- En la parte derecha de la página se muestra la API con sus diferentes formularios a rellenar.

Rellene los distintos formularios de la sección "PATH PARAMETERS" del siguiente modo:

- `id`: Copie el número de identificador de backup recuperado en el paso 3. Si no ha sido desconectado de nuestro sitio API OVHcloud, la interfaz le puede proponer directamente los diferentes números de ID de copia de seguridad disponibles. En ese caso, puede hacer clic directamente en el primer número de ID de la lista que aparece debajo del formulario **id**.
- `serviceName`: Introduzca el nombre de su alojamiento web obtenido anteriormente en el paso 1 de esta guía.

![API](/pages/assets/screens/api/get-hosting-web-servicename-dump-id.png){.thumbnail}

Una vez que haya completado todos los formularios, haga clic en el botón azul `Try`{.action} situado en la parte inferior derecha de la sección que haya completado.

Si todo se ha introducido correctamente, el siguiente resultado aparecerá en la ventana `RESPONSE`{.action} cuando se desplace a la página debajo del botón `Try`{.action}:

![API](/pages/assets/screens/api/get-hosting-web-servicename-dump-id-response.png){.thumbnail}

```bash
{
  "taskId": null,
  "orphan": true,
  "status": "created",
  "deletionDate": "2024-07-18T20:02:00+02:00",
  "databaseName": "deleteDatabase.mysql.db",
  "url": "Find here the complete URL to download the deleted database backup",
  "type": "now",
  "creationDate": "2024-06-17T22:17:42+02:00",
  "id": 22XXXXX888
}
```


> [!warning]
>
> Las filas del resultado anterior no siempre aparecen en este orden.
>

En este resultado, copie la URL completa en "HTTPS" **sin las comillas** a la derecha de la indicación `"url":` y péguela en la barra de búsqueda de su navegador para iniciar la descarga de la copia de seguridad.

### Etapa 5 - Crear una nueva base de datos, importar el archivo de copia de seguridad y restablecer el enlace entre su sitio web y la nueva base de datos

Una vez recuperada la copia de seguridad de la base de datos, deberá crear una nueva base de datos. Para ello, consulte nuestra guía "[Crear una base de datos en un alojamiento web](/pages/web_cloud/web_hosting/sql_create_database)".

Cuando se cree esta nueva base de datos, importe la copia de seguridad utilizando nuestra guía "[Importar una copia de seguridad en la base de datos de un alojamiento web](/pages/web_cloud/web_hosting/sql_importing_mysql_database)".

Por último, asocie su base de datos de OVHcloud con el archivo de configuración de su sitio web que encontrará en el [espacio de almacenamiento FTP de su alojamiento de OVHcloud](/pages/web_cloud/web_hosting/ftp_connection).
Para ello, sustituya la información de conexión de la base de datos eliminada accidentalmente por la de su nueva base de datos de OVHcloud. Esta información se encuentra en el archivo de configuración de la base de datos de su sitio web.

> [!success]
>
> Para vincular su nueva base de datos si utiliza un Content Management System (CMS) como WordPress, Joomla!, Drupal o PrestaShop, consulte la información sobre sus ficheros de configuración en **el etapa 2** de la guía "[Cambiar la contraseña de una base de datos](/pages/web_cloud/web_hosting/sql_change_password)".
>

## Más información <a name="go-further"></a>

[Crear una base de datos en un alojamiento web](/pages/web_cloud/web_hosting/sql_create_database).

[Importar una copia de seguridad en la base de datos de un alojamiento web](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

[Cambiar contraseña de base de datos](/pages/web_cloud/web_hosting/sql_change_password).
 
Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).