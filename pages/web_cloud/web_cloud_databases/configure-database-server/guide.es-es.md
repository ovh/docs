---
title: 'Configurar el servidor de bases de datos'
excerpt: 'Cómo configurar y optimizar el servidor de bases de datos'
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

Los servidores de bases de datos Web Cloud Databases le permiten modificar los parámetros globales de su servidor. También puede consultar la actividad de su servidor.

**Esta guía explica cómo configurar y optimizar su servidor de bases de datos.**

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

### Consultar la información general del servidor de bases de datos


Haga clic en las fichas siguientes para ver cada una de las **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Web Cloud Databases](/links/control-panel/web-cloud-databases) y seleccione la solución correspondiente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Asegúrese de estar en la pestaña `Información general`{.action}.
>>
>> Podrá consultar la información más importante de su instancia SQL. Le recomendamos que se tome unos minutos para comprobar que la información mostrada es correcta y se corresponde con las indicaciones que se ofrecen a continuación.
>>
>> |Información|Detalles|
>> |---|---|
>> |Estado del servicio|Indica si la instancia está iniciada, se está reiniciando o está suspendida. La instancia debe estar iniciada para poder realizar cualquier acción.|
>> |Tipo|Muestra el sistema de bases de datos utilizado por el servidor. Si no sabe si el tipo utilizado es correcto, debe saber que el más habitual es "MySQL", aunque existen otros como PostgreSQL o MariaDB. Por ejemplo, si su sitio web es un WordPress, el sistema MySQL es perfectamente adecuado.|
>> |Versión|Muestra la versión del sistema de bases de datos utilizado por el servidor. Asegúrese de que su sitio web es compatible con la versión elegida.|
>> |Saturación CPU|Muestra el tiempo de CPU consumido en saturación en las últimas 24 horas.|
>> |RAM|Muestra la memoria RAM disponible para su instancia, así como los posibles desbordamientos de memoria. Su servidor de bases de datos dispone de recursos dedicados y garantizados: su memoria RAM. Si lo necesita, puede escalarla y recibir alertas si consume todos los recursos de RAM de su instancia.|
>> |Infraestructura|Muestra la infraestructura utilizada por su instancia. Se trata de una información inherente a la infraestructura de OVHcloud.|
>> |Datacenter|Muestra el centro de datos en el que se ha creado la instancia. Asegúrese de que el datacenter de su instancia sea el mismo que el del plan de hosting de OVHcloud en el que esté (o vaya a estar) alojado su sitio web.|
>> |Host|Indica el servidor de OVHcloud en el que se ha creado la instancia. Se trata de una información inherente a la infraestructura de OVHcloud y puede utilizarse en nuestras comunicaciones relacionadas con [incidencias de OVHcloud](https://web-cloud.status-ovhcloud.com/).|
>>
>> ![Información general](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/general-information.png){.thumbnail}


### Gestionar los accesos

Puede acceder a su Web Cloud Databases desde sus alojamientos web de OVHcloud o desde la red pública.

**Haga clic en cada título para ver su contenido.**

/// details | Autorizar una dirección IP

Para acceder a su instancia Web Cloud Databases, deberá indicar las direcciones IP o rangos de IP autorizados a conectarse a sus bases de datos.

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
>> Haga clic en la pestaña `IP autorizadas`{.action} y, a continuación, en el botón `Añadir una dirección IP/máscara`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la ventana que aparece, indique en `IP/Máscara`{.action} la dirección IP o la máscara que desee autorizar y, si lo desea, añada una descripción. A continuación, indique si desea autorizar el acceso únicamente a las bases de datos o también al SFTP. Por último, haga clic en `Aceptar`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask-confirmation.png){.thumbnail}

///

/// details | Autorizar las conexiones a los alojamientos web de OVHcloud

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
>> Haga clic en la pestaña `IP autorizadas`{.action}.
>>
> **Etapa 3**
>>
>> Marque `Autorizar a los alojamientos web de OVHcloud a acceder a la base de datos`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/tab-empty.png){.thumbnail}

///

### Modificar su solución Web Cloud Databases <a name="modify-ram-web-cloud-db"></a>


> [!warning]
>
> Si su solución Web Cloud Databases está asociada a un plan de hosting **Performance**, deberá desvincular previamente la solución Web Cloud Databases de su alojamiento **Performance** antes de migrar a un plan superior.
>
> Para desvincular una solución Web Cloud Databases de un alojamiento web **Performance**, consulte nuestra guía "[Desvincular mi solución Web Cloud Databases de un alojamiento web](/pages/web_cloud/web_cloud_databases/detach-from-web-hosting)".
>
> **Esta acción es irreversible y la solución Web Cloud Databases se facturará de forma independiente de su plan de hosting Performance.**
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
>> En la pestaña **Información general** que se muestra por defecto, haga clic en `...`{.action} a la derecha de "RAM" y, a continuación, en `Cambiar la cantidad de RAM`{.action} para acceder al pedido de esta modificación.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/change-the-amount-of-ram.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Elija la cantidad de RAM deseada y haga clic en `Siguiente`{.action}. A continuación, seleccione la duración deseada.
>>
>> > [!primary]
>> >
>> > El tiempo restante hasta la fecha de expiración se prorrateará. Este prorrateo se basará en la fecha de expiración de su instancia Web Cloud Databases, no en la fecha de la orden de pedido.
>>
>> Una vez aceptados los contratos, será redirigido a la orden de pedido para abonar la modificación. El cambio será efectivo en unas horas.
>>
>> > [!warning]
>> >
>> > Si actualmente dispone de un Web Cloud Databases gratuito gracias a su hosting Performance, la modificación del plan hará que deje de ser gratuito.


### Modificar la configuración de mi servidor de bases de datos

**Haga clic en cada título para ver su contenido.**

/// details | Instancia MySQL y MariaDB

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
>> Haga clic en la pestaña `Configuración`{.action}.
>>
> **Etapa 3**
>>
>> En el recuadro **Configuración general de MySQL** encontrará la configuración actualmente establecida para su base de datos. Puede modificarla directamente y hacer clic en `Aplicar`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/configuration/general-configuration-of-mysql.png){.thumbnail}
>>
>> - **MaxAllowedPacket**: Tamaño máximo de los paquetes.
>> - **Max_user_connections**: Número de conexiones simultáneas autorizadas por usuario.
>> - **AutoCommit**: Define si las peticiones se validan automáticamente (committed) o no.
>> - **Interactive_timeout**: Tiempo (en segundos) que el servidor espera actividad en una conexión interactiva antes de cerrarla.
>> - **InnodbBufferPoolSize**: Tamaño de la memoria intermedia seleccionada.
>> - **MaxConnections:** Número de conexiones simultáneas autorizadas en el servidor de bases de datos.
>> - **Wait_timeout**: Tiempo (en segundos) que el servidor espera actividad en una conexión no interactiva antes de cerrarla.
>> - **Event_scheduler**: Permite activar la ejecución de consultas programadas directamente en el servidor MySQL.
>> - **sql_mode**: La opción **sql_mode** afecta a la sintaxis SQL soportada y a las verificaciones de validación de datos realizadas por MySQL/MariaDB.
>>
>> > [!primary]
>> > Cuando aparece un error en su sitio web que indica **"Too many connections"**, se debe a que se ha superado el número de conexiones simultáneas en su servidor de bases de datos. Puede aumentar la variable **"MaxConnections"** si no está al máximo.
>>
>> > [!primary]
>> >
>> > <b>sql_mode</b>:
>> >
>> > &emsp;&emsp;Modo por defecto de MariaDB 10.1:
>> > <pre class="highlight language-console"><code class="language-console">NO_ENGINE_SUBSTITUTION,NO_AUTO_CREATE_USER</code></pre>
>> >
>> > &emsp;&emsp;Modo por defecto de MariaDB 10.2 y versiones superiores:
>> > <pre class="highlight language-console"><code class="language-console">STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION</code></pre>
>> >
>> > &emsp;&emsp;Modo por defecto de MySQL 5.6:
>> > <pre class="highlight language-console"><code class="language-console">NO_ENGINE_SUBSTITUTION</code></pre>
>> >
>> > &emsp;&emsp;Modo por defecto de MySQL 5.7 y versiones superiores:
>> > <pre class="highlight language-console"><code class="language-console">ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION</code></pre>
>> >
>> > Le recomendamos que utilice siempre el modo por defecto, excepto si su base de datos se ha actualizado desde una versión con un modo por defecto diferente al de la versión actual.
>>
>> Realice los cambios necesarios y haga clic en `Aceptar`{.action}.

> [!warning]
>
> Cualquier modificación requiere el reinicio del servidor de bases de datos.
>

///

/// details | Instancia PostgreSQL

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
>> Haga clic en la pestaña `Configuración`{.action}.
>>
> **Etapa 3**
>>
>> En el recuadro **Configuración general de PostgreSQL** encontrará la configuración actualmente definida para su base de datos. Puede modificarla directamente y hacer clic en `Aplicar`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/configuration/general-configuration-of-postgresql.png){.thumbnail}
>>
>> - **log_min_messages**: Controla los niveles de mensajes que se registran en los logs del servidor. Los niveles disponibles para una solución Web Cloud Databases son:
>>     - **"WARNING"**: Proporciona mensajes de advertencia sobre posibles problemas.
>>     - **"ERROR"**: Envía el error que ha provocado la cancelación de un comando en curso.
>>     - **"LOG"**: Registra la información destinada a los administradores del servidor.
>>     - **"FATAL"**: Envía el error que ha provocado el final de la sesión en curso.
>>     - **"PANIC"**: Envía el error que ha provocado el final de todas las sesiones.
>>
>> Cada nivel incluye todos los niveles posteriores. Cuanto mayor sea el nivel, menos mensajes se registrarán en los logs del servidor.
>>
>> Por defecto, el valor definido es **"WARNING"**, ya que incluye los valores **"ERROR"**, **"LOG"**, **"FATAL"** y **"PANIC"**.
>>
>> También puede activar extensiones en sus bases de datos. Para ello, haga clic en la pestaña `Bases de datos`{.action} y, a continuación, en el icono de la tabla de su base de datos en la columna **"Extensiones"**.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/extensions.png){.thumbnail}

///

### Cambiar la versión MySQL, PostgreSQL o MariaDB del servidor de bases de datos


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
>> En la pestaña **Información general**, la versión actual aparece en la línea **Versión**.
>>
> **Etapa 3**
>>
>> Para modificar esta versión, haga clic en `Cambiar la versión`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/postgre-12-update-version.png){.thumbnail}

/// details | ¿Cómo puedo conocer la versión exacta de PostgreSQL que utilizo?

Introduzca este comando en phpPgAdmin haciendo clic en **Su base de datos**, en la sección **"SQL"**, y haga clic en `Iniciar`{.action}:

```sql
select version();
```

///

/// details | ¿Cómo puedo conocer la versión exacta de MySQL o MariaDB que utilizo?

Introduzca este comando en phpMyAdmin, en la sección **"SQL"**, y haga clic en `Ejecutar`{.action}:

```sql
show variables like "version";
```

///

> [!primary]
>
> - Antes de migrar a una versión superior, asegúrese de que su base de datos es compatible con la versión elegida.
> - La modificación será efectiva en unos minutos.
>

> [!warning]
>
> No es posible pasar directamente de una versión antigua a la última.
> Es obligatorio pasar por todas las versiones intermedias.
>


### Logs y métricas

**Haga clic en cada título para ver su contenido.**

/// details | Acceso a los logs

Para acceder a los logs de su solución Web Cloud Databases, consulte nuestra guía "[Web Cloud Databases - Cómo recuperar los logs](/pages/web_cloud/web_cloud_databases/retrieve-logs)".

///

/// details | Seguimiento del uso de RAM

Haga clic en las fichas siguientes para ver cada una de las **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Web Cloud Databases](/links/control-panel/web-cloud-databases) y seleccione la solución correspondiente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en la pestaña `Métricas`{.action}. Encontrará el gráfico **"Estadísticas de memoria RAM utilizada"**.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/metrics/ram-memory-usage-statistics.png){.thumbnail}

///

/// details | Seguimiento del número de conexiones por minuto

Este gráfico permite realizar un seguimiento, en las últimas 24 horas, de la carga de las conexiones por minuto en su servidor de bases de datos.

Haga clic en las fichas siguientes para ver cada una de las **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Web Cloud Databases](/links/control-panel/web-cloud-databases) y seleccione la solución correspondiente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en la pestaña `Métricas`{.action}. Encontrará el gráfico **"Estadísticas del total de conexiones por minuto"**.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/metrics/statistics-for-total-connections-per-minute.png){.thumbnail}

///

### Optimizar las bases de datos

Es recomendable mantener su base de datos para que ofrezca un buen rendimiento y devuelva la información a los scripts con rapidez. Para ello, es necesaria una base de datos estructurada y optimizada.

**Haga clic en cada título para ver su contenido.**

/// details | Indexar la base de datos

Para aumentar la velocidad de búsqueda en una consulta, es necesario indexar los campos utilizados en las cláusulas WHERE.

Ejemplo: realiza regularmente una búsqueda de personas por ciudad. Indexe el campo "city" con la siguiente consulta:

```sql
ALTER TABLE 'test' ADD INDEX ('city')
```

///

/// details | Purgar la base de datos

¿Algunos de sus datos ya no se consultan? Archívelos: sus tablas estarán menos saturadas y las búsquedas serán más rápidas.

///

/// details | Limitación de visualización

Limite la visualización de los registros a un número determinado (por ejemplo, 10 por página) con la parte LIMIT de su consulta SQL.

///

/// details | Agrupar las consultas

Agrupe sus consultas al inicio del script de esta forma:

```bash
open_connection
request1
request2
...
close_connection
Display...
Process data
Loop through data...
Display...
...
```

///

/// details | Obtener solo los datos útiles

En sus consultas SQL, compruebe que solo seleccione lo que necesite y que no haya olvidado los enlaces entre las tablas.

Ejemplo:

```sql
(where table1.champs = table2.champs2)
```

///

/// details | Evitar opciones que consuman demasiados recursos

Evite usar **"HAVING"**, por ejemplo, ya que incrementa sus consultas. Del mismo modo, evite usar **"GROUP BY"**, a menos que sea estrictamente necesario.

///

## Más información

[Lista de direcciones IP de los clusters y alojamientos web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas [ofertas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
