---
title: 'Configurar el servidor de bases de datos'
excerpt: 'Cómo configurar y optimizar el servidor de bases de datos'
updated: 2024-03-20
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

Los servidores Web Cloud Databases le ofrecen la posibilidad de modificar los parámetros globales de su servidor. También puede ver la actividad del servidor.

**Esta guía explica cómo configurar y optimizar el servidor de bases de datos.**

## Requisitos

- Tener una [instancia Web Cloud Databases](https://www.ovh.es/cloud/cloud-databases/) (incluida en un [plan de hosting Performance](/links/web/hosting).
- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager).

## Procedimiento

### Ver la información general del servidor de bases de datos

Desde el [área de cliente de OVHcloud](/links/manager), haga clic en `Web Cloud Databases`{.action} y seleccione el servicio de bases de datos correspondiente. Por defecto, se abrirá la pestaña `Información general`{.action}.

En dicha pestaña podrá consultar la información más importante relativa al servicio de SQL. Le invitamos a tomarse unos momentos para asegurarse de que la información mostrada es correcta y se corresponde con las indicaciones que se ofrecen a continuación.

|Información|Detalles|
|---|---|
|Estado del servicio|Indica si el servicio está iniciado, se está reiniciando o está suspendido. El servicio debe estar iniciado para poder realizar cualquier tipo de acción.|
|Tipo|Muestra el sistema de bases de datos utilizado por el servidor. Si no sabe si el tipo utilizado es correcto, debe saber que el más frecuente es MySQL, aunque existen otros, como PostgreSQL o MariaDB. Por ejemplo, si su sitio web está basado en WordPress, MySQL es un sistema perfectamente adecuado.|
|Versión|Muestra la versión del sistema de bases de datos utilizado por el servidor. Asegúrese de que su sitio web es compatible con la versión elegida.|
|Saturación CPU|Muestra el tiempo de CPU consumido en las últimas 24 horas.|
|RAM|Muestra la memoria RAM disponible para la instancia e indica si se ha sobrepasado dicha cantidad de memoria. Su servidor de bases de datos dispone de recursos dedicados y garantizados: su memoria RAM. Si lo necesita, puede cambiar a un modelo superior, así como recibir alertas si consume todos los recursos de RAM de su servicio.|
|Infraestructura|Muestra la infraestructura utilizada por la instancia. Se trata de una información inherente a la infraestructura de OVHcloud.|
|Datacenter|Muestra el centro de datos en el que se ha creado la instancia Web Cloud Databases. Asegúrese de que el datacenter de su servicio sea el mismo que el del plan de hosting de OVHcloud en el que esté alojado su sitio web.|
|Host|Indica el servidor de OVHcloud en el que se ha creado la instancia. Se trata de una información inherente a la infraestructura de OVHcloud y se utiliza en nuestras comunicaciones relacionadas con [incidencias](https://web-cloud.status-ovhcloud.com/).|

![Información general](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/general-information.png){.thumbnail}

### Gestionar los accesos

Puede acceder a su Web Cloud Databases desde su alojamiento web de OVHcloud o desde la red pública.

#### Autorizar una dirección IP

Para que sea posible acceder a la instancia Web Cloud Databases, deberá indicar las direcciones IP o rangos de IP autorizados a conectarse a la base de datos.

Desde el [área de cliente de OVHcloud](/links/manager), haga clic en `Web Cloud Databases`{.action} y seleccione la instancia Web Cloud Databases correspondiente.

Para ello, abra la pestaña `IP autorizadas`{.action} y haga clic en el botón `Añadir una dirección IP/máscara`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask.png){.thumbnail}

En la nueva ventana, indique en `IP/máscara`{.action} la dirección IP o la máscara de red que quiera autorizar y, si lo desea, añada una descripción. Indique si quiere autorizar el acceso únicamente a las bases de datos o también al SFTP. Para terminar, haga clic en `Aceptar`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask-confirmation.png){.thumbnail}

#### Autorizar la conexión a un alojamiento web de OVHcloud

Para un alojamiento web de OVHcloud, solo tiene que marcar `Autorizar a los alojamientos web de OVHcloud a acceder a la base de datos`.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/tab-empty.png){.thumbnail}

### Modificar su solución Web Cloud Databases <a name="modify-ram-web-cloud-db"></a>

> [!warning]
> 
> Si su plan de hosting Cloud Databases está asociado a un plan de hosting **Performance**, deberá eliminar obligatoria y previamente el plan de hosting Cloud Databases de su alojamiento **Performance** para migrar a un plan superior.
>
> Para desvincular una oferta de Web Cloud Databases asociada a un alojamiento web **Performance**, acceda a su [área de cliente de OVHcloud](/links/manager). Haga clic en la pestaña `Web Cloud`{.action} y seleccione el alojamiento correspondiente en la pestaña `Alojamientos`{.action}, que aparece en la columna izquierda. 
>
> En la nueva página `Información general`{.action}, encontrará un recuadro titulado `Configuración`{.action} en el centro de la página. Haga clic en el botón `...` a la derecha de la mención `Web Cloud Databases`{.action} y luego en `Desvincular`{.action}. Seleccione la duración de renovación más corta y continúe hasta la validación del pedido.
>
> **Esta acción es irreversible y la solución Web Cloud Databases se facturará a continuación, independientemente de su plan de hosting Performance.**
>

Para cambiar su solución Web Cloud Databases, acceda al [área de cliente de OVHcloud](/links/manager). Haga clic en la pestaña `Web Cloud` y seleccione `Web Cloud Databases`{.action}. Seleccione el nombre del servidor de bases de datos.
En la pestaña **"Información general"** que se muestra por defecto, haga clic en `...`{.action} a la derecha de la indicación "RAM" y luego en `Cambiar la cantidad de RAM`{.action} para acceder al pedido de esta modificación.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/change-the-amount-of-ram.png){.thumbnail}

Elija la cantidad de RAM deseada y haga clic en el botón `Siguiente`{.action}. A continuación, elija la duración deseada.

> [!primary]
>
> La parte proporcional se transferirá si solo tiene unos meses antes.
> Expiración Esta parte se basará en la fecha de expiración de la instancia Web Cloud Databases, no de la orden de pedido.
> 

Tras la validación de los contratos, será redirigido a la orden de pedido, donde deberá abonar los cambios. La eliminación tardará unas horas en aplicarse.

> [!warning]
>
> Si actualmente dispone de un Web Cloud Databases gratuito gracias a su hosting Performance, la modificación de la solución le hará perder su gratuidad.
> 

### Modificar la configuración de mi servidor de bases de datos

Acceda a su área de cliente (sección IP) Haga clic en la pestaña `Web Cloud` y seleccione `Web Cloud Databases`{.action}. Seleccione el nombre de su servidor Web Cloud Databases.

#### Instancia MySQL y MariaDB

- Abra la pestaña `Configuración`{.action}:

En el cuadro **"Configuración general de MySql"** encontrará la configuración actualmente establecida para su base de datos. Puede modificarla directamente y hacer clic en `Aplicar`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/configuration/general-configuration-of-mysql.png){.thumbnail}

- **Tmpdir**: Directorio de archivos temporales. **/dev/shm** corresponde a la memoria RAM de la instancia. **/tmp** es el disco duro de la instancia.
- **MaxAllowedPacket**: Tamaño máximo de los envíos
- **max_user_connections**: Número de conexiones simultáneas autorizadas por usuario.
- **AutoCommit**: Define si las peticiones se validan automáticamente (committed) o no.
- **Interactive_timeout**: Tiempo (en segundos) que el servidor espera actividad en una conexión no interactiva antes de cerrarla.
- **InnodbBufferPoolSize**: Tamaño de la memoria intermedia (en megabytes).
- **MaxConnexions**: Número de conexiones simultáneas autorizadas en el Web Cloud Databases.
- **Wait_timeout**: Tiempo (en segundos) que el servidor espera actividad en una conexión no interactiva antes de cerrarla.
- **Event_scheduler**: Permite activar la ejecución de consultas programadas directamente en el servidor MySQL.
- **sql_mode**: La opción **sql_mode** afecta a la sintaxis SQL y las verificaciones de validación de datos realizadas por MySQL o MariaDB.

> [!primary]
> Cuando se produce un error en el sitio web que indica **"Too many connections"**, se debe a que se han superado las conexiones simultáneas a su base de datos.
> Puede aumentar la variable **"MaxConnections"** si no está al máximo.
>

> [!primary]
>
> <b>Tmpdir</b>:
>
> - /dev/shm: El servidor de bases de datos asignará la mitad de su memoria RAM a este directorio para un mayor rendimiento.
>
> - /tmp: El servidor asignará a su disco duro un espacio ilimitado para este repertorio, pero será mucho menos potente. Le recomendamos que utilice este directorio únicamente para operaciones ocasionales pesadas.
>

> [!primary]
>
> <b>sql_mode</b>:
>
> &emsp;&emsp;Modo por defecto de MariaDB 10.1:
> <pre class="highlight language-console"><code class="language-console">NO_ENGINE_SUBSTITUTION,NO_AUTO_CREATE_USER</code></pre>
> 
> &emsp;&emsp;Modo por defecto de MariaDB 10.2 y versiones superiores:
> <pre class="highlight language-console"><code class="language-console">STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION</code></pre>
>
> &emsp;&emsp;Modo por defecto de MySQL 5.6:
> <pre class="highlight language-console"><code class="language-console">NO_ENGINE_SUBSTITUTION</code></pre>
> 
> &emsp;&emsp;Modo por defecto de MySQL 5.7 y versiones superiores:
> <pre class="highlight language-console"><code class="language-console">ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION</code></pre>
>
> Le recomendamos que utilice siempre el modo por defecto, excepto si su base de datos se ha actualizado desde una versión con un modo por defecto diferente al de la versión actual.
>

Realice los cambios necesarios y haga clic en `Confirmar`{.action}.

> [!warning]
>
> Cualquier modificación supondrá el reinicio del servidor de la base de datos de forma automática.
> 

#### Instancia PostgreSQL

- Haga clic en la pestaña `Configuración`{.action}.

En el recuadro **"Configuración General de PostgreSQL"** encontrará la configuración actualmente definida para su base de datos. Puede modificarla directamente y hacer clic en `Aplicar`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/configuration/general-configuration-of-postgresql.png){.thumbnail}

- **log_min_messages**: controla los niveles de mensajes que se deben registrar en los logs del servidor. Los niveles disponibles para una solución Web Cloud Databases son: 
    - **"WARNING"**: Proporciona mensajes de advertencia sobre posibles problemas.
    - **"ERROR"**: Envía el error que ha provocado la cancelación de un pedido en curso.
    - **"LOG"**: Registra la información destinada a los administradores del servidor.
    - **"FATAL"**: Envía el error que ha provocado el final de la sesión en curso.
    - **"PANIC"**: Envía el error que ha provocado el final de todas las sesiones.

Cada nivel incluye todos los niveles posteriores. Cuanto mayor sea el nivel, menos mensajes se registrarán en los logs del servidor.

Por defecto, el valor definido es **"WARNING"**, ya que incluye los valores **"ERROR"**, **"LOG"**, **"FATAL"** y **"PANIC"**.

Además, puede activar extensiones en sus bases de datos. Para ello, abra la pestaña `Bases de datos`{.action} y haga clic en el icono de la tabla de la base de datos en la columna **"Extensiones"**

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/extensions.png){.thumbnail}

### Cambiar la versión MySQL, PostgreSQL o MariaDB del servidor de bases de datos

Para conocer la versión de MySQL, PostgreSQL o MariaDB de su servidor de bases de datos, acceda a la pestaña **"Información general"** después de haber elegido su servidor de bases de datos.

La versión actual aparece en la línea **"Versión"**.

Para modificar esta versión, haga clic en `Editar la versión`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/postgre-12-update-version.png){.thumbnail}

#### ¿Cómo puedo conocer la versión exacta de PostgreSQL que utilizo?

Introduzca este comando en phpMyAdmin haciendo clic en la **base de datos**, en la sección **"SQL"**, y haciendo clic en `Ejecutar`{.action}:

```sql
select version();
```

#### ¿Cómo puedo conocer la versión exacta de MySQL o MariaDB que utilizo?

Para ello, introduzca el comando en phpMyAdmin, en la sección **"SQL"** y haga clic en `Ejecutar`{.action}.

```sql
show variables like "version";
```

> [!primary]
>
> - Antes de migrar a una versión superior, asegúrese de que la base de datos es compatible con la versión seleccionada.
> - El cambio de contraseña tardará unos minutos en aplicarse.
>

> [!warning]
>
> No es posible pasar de una versión antigua a la última directamente. Es obligatorio pasar por todas las versiones intermedias.
> 

### Logs y Métricas

#### Acceso a los logs

Para acceder a los logs de su solución Web Cloud Databases, consulte nuestra guía "[Web Cloud Databases - ¿Cómo recuperar los logs?](/pages/web_cloud/web_cloud_databases/retrieve-logs)".

#### Seguimiento de la RAM consumida

Acceda a su área de cliente (sección IP) Haga clic en la pestaña `Web Cloud` y seleccione `Web Cloud Databases`{.action}. Seleccione el nombre del servidor de bases de datos.

Acceda a la pestaña `Métricas` del área de cliente. Encontrará el gráfico **"Estadísticas de memoria RAM utilizada"**.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/metrics/ram-memory-usage-statistics.png){.thumbnail}

#### Número de conexiones por minuto

Esta gráfica permite realizar un seguimiento, en las últimas 24 horas, de la carga de las conexiones por minuto al servidor de la base de datos.

Acceda a su área de cliente (sección IP) Haga clic en la pestaña `Web Cloud` y seleccione `Web Cloud Databases`{.action}. Seleccione el nombre del servidor de bases de datos.

Acceda a la pestaña `Métricas` del área de cliente. Puede consultar el gráfico **"Estadísticas del total de conexiones por minuto"**.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/metrics/statistics-for-total-connections-per-minute.png){.thumbnail}

### Gestionar las bases de datos

Es recomendable mantener su base de datos para que sea potente. Lo que significa "alto rendimiento" es que la información contenida en la base de datos se devuelve lo antes posible al script que la solicita. Para ello, es necesaria una base de datos estructurada y optimizada.

#### Seleccionar la base de datos

Para aumentar la velocidad de búsqueda en una petición, es necesario poner un índice en los campos que se utilizan en las cláusulas WHERE.

Ejemplo: regularmente realiza una búsqueda de persona respecto a la ciudad. Introduzca el campo "ciudad" con la siguiente petición:

```sql
ALTER TABLE 'test' ADD INDEX ('city')
```

#### Seleccionar la base de datos

¿Alguno de sus datos ya no está disponible? Archívelos, sus tabalas estarán optimizadas y las búsquedas irán más rápido.

#### Limitación de visualización

Limite la visualización de los registros a un número limitado (por ejemplo, 10 por página) con la parte LIMIT de su consulta SQL.

#### Agrupar las consultas

Reagrupe sus peticiones al inicio del script de esta forma :

```bash
Connexion SFTP
requete1
requete2
...
Desconexión
Visualización
traitement des données
Circulos...
Visualización
...
```

#### Obtener sólo los datos útiles

En sus consultas SQL, compruebe que solo seleccione lo que necesite, y sobre todo que no haya olvidado los enlaces entre tablas.

Por ejemplo:

```sql
(where table1.champs = table2.champs2)
```

#### Evitar opciones que consuman demasiados recursos

Evite usar **"HAVING"**, por ejemplo. Está consulta incrementará el número de peticiones a la base de datos. De la misma manera, evita usar **"GROUP BY"**, a menos que sea estrictamente necesario.

## Más información

[Lista de direcciones IP de los clusters y alojamientos web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).