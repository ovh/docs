---
title: "Web hosting - Cómo mejorar su solución"
excerpt: "Descubra cómo modificar la fórmula de suscripción de un plan de hosting de OVHcloud"
updated: 2024-10-03
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

Su [área de cliente de OVHcloud](/links/manager) permite aumentar la capacidad de sus [planes de hosting](/links/web/hosting). Así podrá disponer de:

- un alojamiento más potente;
- más espacio de almacenamiento FTP;
- bases de datos adicionales; 
- direcciones de correo adicionales;
- funcionalidades adicionales como las [mailing-lists](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_mailing_list) (a partir de [la oferta Pro](/links/web/hosting-professional-offer) o el [servicio Web Cloud Databases](/links/web/databases){.external} (incluido en [los planes Performance](https://www.ovhcloud.com/es-es/web-hosting/performance-offer)/).

**Descubra cómo mejorar su plan de hosting de OVHcloud sin interrupciones del servicio.**

## Requisitos

- Tener un [plan de hosting](/links/web/hosting)
- Estar conectado a su [área de cliente de OVHcloud](/links/manager)
- Ser, como mínimo, el contacto «[Administrador](/pages/account_and_service_management/account_information/managing_contacts)» de los servicios para los que quiera modificar la suscripción.

## Procedimiento

> [!warning]
>
> **Antes** de realizar cualquier cambio en su suscripción actual, compruebe si alguna de estas preguntas le afecta:
>
> - [¿Cómo cambiar mi plan de hosting gratuito de 100M a un plan de hosting?](#100m)
> - [¿Cómo disfrutar de un aumento de rendimiento temporal en mi plan de hosting Performance?](#boost)
> - [¿Perderé el tiempo restante de mi plan de hosting actual al cambiar de plan?](#billing)
> - [¿Es posible cambiar mi plan actual a un plan inferior?](#checks)
>

### Cambiar su plan de hosting <a name="modify"></a>

Para modificar su suscripción, acceda a su [área de cliente de OVHcloud](/links/manager) y acceda al apartado `Web Cloud`{.action}. Haga clic en `Alojamientos`{.action} y seleccione el alojamiento correspondiente.

En el recuadro `Suscripción`, haga clic en el botón `...`{.action} a la derecha de `Solución` y seleccione `Cambiar de plan`{.action}.

![change_plan](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/pro-change-plan.png){.thumbnail}

A continuación, seleccione la nueva suscripción y su duración. Acepte los contratos correspondientes y haga clic en `Enviar`{.action}.

### Compruebe que su alojamiento web es compatible con un producto de la gama inferior <a name="checks"></a>

> [!warning]
>
> Solo es posible modificar su suscripción para un plan de la gama inferior si se trata del plan **inmediatamente inferior**.
> Por ejemplo, no podrá pasar de una fórmula *Performance 2* a una fórmula *Pro* en una sola operación.
> **Deberá** cambiar de plan de hosting *Performance 2* a un plan *Performance 1* **y, posteriormente,** a un plan *Pro*.

**Antes de realizar el cambio a una gama inferior**, compruebe los 6 puntos siguientes:

#### 1 - Bases de datos Start SQL

Asegúrese de que el nuevo plan tiene suficientes [bases de datos](/links/web/hosting-options-startsql). Compruebe también que el tamaño es suficiente.

En caso contrario, elimine las bases de datos no utilizadas y, si es necesario, reduzca la cantidad de datos que contienen. Esta cantidad no debe superar el tamaño máximo de las bases de datos del nuevo producto. Si necesita ayuda para realizar las operaciones necesarias, puede ponerse en contacto con los [partners de OVHcloud](/links/partner).

Después de eliminar los datos de sus bases de datos, vuelva a calcular la cuota utilizada. Para ello, conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`. En la columna izquierda, haga clic en `Alojamientos`{.action} y seleccione el alojamiento web correspondiente. En la nueva página, abra la pestaña `Bases de datos`{.action} y haga clic en el botón `...`{.action} situado al final de la línea correspondiente a la base de datos y seleccione Volver a `Recalcular el espacio utilizado`{.action}.

![quota](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/recalculate-quota.png){.thumbnail}

> [!primary]
>
> Recalcular el límite de su base de datos puede tardar hasta **15 minutos**. No dude en recargar la página desde su navegador de internet si el límite recalculado no se muestra espontáneamente.
>

#### 2 - Web Cloud Databases

Si utiliza el servicio [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) incluido con su alojamiento web [Performance](/links/web/hosting-performance-offer) y desea cambiar su alojamiento web a un plan [Pro](/links/web/hosting-professional-offer), deberá disociar en primer lugar el servicio Web Cloud Databases de su alojamiento web.<br>
Para ello, conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección «Web Cloud» de la columna izquierda de la columna izquierda, en la columna izquierda, en la columna izquierda y en la columna izquierda de la página «Servidores dedicados» de OVHcloud > {.action}. En la columna izquierda, haga clic en `Alojamientos`{.action} y seleccione el alojamiento web correspondiente. A continuación, siga en la pestaña `Información general`{.action}. En la columna central `Configuración`, haga clic en el botón `...`{.action} situado a la derecha de `Web Cloud Databases`{.action} y seleccione `Desvincular`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/wcdb-detach.png){.thumbnail}

Esta acción le permitirá contratar una solución Web Cloud Databases independiente de su suscripción *Performance*. Los datos de su servidor se conservarán.

Si no desea conservar estos datos, puede eliminar su solución Web Cloud Databases antes de cambiar al plan *Pro*: 

1. Haga una copia de seguridad de sus datos siguiendo las instrucciones de esta [guía](/pages/web_cloud/web_cloud_databases/save-export-on-database-server).<br>
2. Elimine su servidor Web Cloud Databases a través de su [área de cliente de OVHcloud](/links/manager). Para ello, conéctese a su [área de cliente de OVHcloud](/links/manager), haga clic en su nombre en la esquina superior derecha y seleccione el icono `Productos y servicios`{.action}. A continuación, haga clic en el botón `...`{.action} situado al final de la línea correspondiente al servicio Web Cloud Databases/SQL Privado y seleccione `Eliminar mi alojamiento SQL Privado`{.action}.

#### 3 - Espacio de almacenamiento FTP

Asegúrese de que el nuevo plan ofrece [espacio de almacenamiento FTP](/pages/web_cloud/web_hosting/ftp_connection) suficiente para que sea posible importar los archivos del alojamiento actual.

Para comprobar el espacio de almacenamiento FTP utilizado en su alojamiento web, conéctese al [área de cliente de OVHcloud](/links/manager) y acceda a la sección «Web Cloud» de la página {.action}. En la columna izquierda, haga clic en `Alojamientos`{.action} y seleccione el alojamiento web correspondiente. En la página `Información general`{.action} que aparece, consulte la cuota en la sección `Espacio en disco`.

![ftp](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-disk-space.png){.thumbnail}

#### 4 - Direcciones de correo

Asegúrese de que su nuevo plan tiene suficientes direcciones de correo electrónico disponibles. En caso contrario, elimine las direcciones de correo electrónico no utilizadas después de haber [guardado](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration) su contenido, si es necesario.

Si quiere conservar el mismo número de cuentas de correo y **antes de cambiar su alojamiento web a un plan inferior**, también puede contratar un nuevo plan de correo **MX Plan**. Para ello, conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}. En la columna izquierda, haga clic en `Direcciones de correo`{.action} y seleccione el servicio de correo correspondiente. En la página que aparece, en el recuadro `Suscripción`{.action} y a la derecha de la mención `Producto`{.action}, haga clic en el botón `...`{.action} y luego en `Cambiar de plan`{.action}.

![mxplan](/pages/assets/screens/control_panel/product-selection/web-cloud/emails/general-information/change-solution.png){.thumbnail}

>[!primary]
>
> Si el botón `...`{.action} no está disponible en su servicio de correo, puede desvincular el servicio de correo de su alojamiento web. Para ello, conéctese a su [área de cliente de OVHcloud](/links/manager) en la sección `Web Cloud`{.action}. En la columna izquierda, haga clic en `Alojamientos`{.action} y seleccione el alojamiento web correspondiente. En la página `Información general`{.action} que aparece y en el cuadro `Configuración`{.action}, haga clic en el botón `...`{.action} a la derecha de la mención `Direcciones de correo`{.action} y seleccione `Desvincular mi opción de correo`{.action}.
>

#### 5 - Listas de correo

La funcionalidad [Mailing lists](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_mailing_list) es opcional en los alojamientos [Personal](/links/web/hosting-personal-offer).

Para cambiar el alojamiento web a un plan de hosting [Personal](/links/web/hosting-personal-offer), deberá eliminar las listas de correo o contratar un servicio de correo que incluya esta funcionalidad (**MX Plan 100** o **MX Plan Full**) desde su [área de cliente de OVHcloud](/links/manager).

Para ello, conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}. En la columna izquierda, haga clic en `Direcciones de correo`{.action} y seleccione el servicio de correo correspondiente. En la página que aparece, en el recuadro `Suscripción`{.action} y a la derecha de la mención `Producto`{.action}, haga clic en el botón `...`{.action} y luego en `Cambiar de plan`{.action}.

>[!primary]
>
> Si el botón `...`{.action} no está disponible en su servicio de correo, puede desvincular el servicio de correo de su alojamiento web. Para ello, conéctese a su [área de cliente de OVHcloud](/links/manager) en la sección `Web Cloud`{.action}. En la columna izquierda, haga clic en `Alojamientos`{.action} y seleccione el alojamiento web correspondiente. En la página `Información general`{.action} que aparece y en el cuadro `Configuración`{.action}, haga clic en el botón `...`{.action} a la derecha de la mención `Direcciones de correo`{.action} y seleccione `Desvincular mi opción de correo`{.action}.
>

#### 6 - Usuarios FTP

Asegúrese de que la nueva oferta ofrece suficientes usuarios FTP.

El número de usuarios FTP puede consultarse en el área de cliente de OVHcloud. Una vez que se haya conectado, acceda a la sección `Web Cloud`{.action} de la página. En la columna izquierda, haga clic en `Alojamientos`{.action} y seleccione el alojamiento web correspondiente. A continuación, abra la pestaña `FTP-SSH`{.action}.

En la parte inferior de la página que aparece, aparece una tabla con todos los usuarios FTP creados para el alojamiento web.

Para eliminar usuarios FTP, haga clic en el botón `...`{.action} situado al final de la línea correspondiente al usuario FTP que quiera eliminar y seleccione `Eliminar`{.action}.

![user FTP deletion](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/edit-ftp-user-2.png){.thumbnail} 

#### Finalización

Una vez verificados estos 6 puntos, puede realizar su [cambio de producto](#modify).

### Casos especiales

#### Tiene contratado un plan de hosting gratuito de 100M <a name="100m"></a>

En caso de cambiar de plan de hosting [100M gratuito](/pages/web_cloud/web_hosting/activate_start10m), solo se ofrecerá el [plan de hosting Personal](/links/web/hosting-personal-offer). No obstante, tras cambiar a la solución Personal, podrá actualizarla a todos nuestros [planes de hosting](/links/web/hosting).

Siga [estas instrucciones](#modify) para realizar el cambio de producto.

#### Mejorar temporalmente su plan de hosting Performance <a name="boost"></a>

Con la [opción Boost](/links/web/hosting-options-boost), disponible en nuestros planes *Performance*, puede aumentar temporalmente los recursos de CPU y RAM de su alojamiento web para absorber un aumento puntual del tráfico. Si este aumento se prolonga en el tiempo, también puede [cambiar al plan Performance de nivel superior](#modify) para disponer de estos recursos de forma permanente.

> [!warning]
>
> Si activa la opción Boost, esta permanecerá activa y se facturará **hasta que la desactive**.

Si la opción **Boost** es adecuada para usted, encontrará a continuación las instrucciones para **activar** o **desactivar** esta opción en su alojamiento.

> [!tabs]
> **Activar la opción Boost**
>>>
>> Para activar la opción Boost, conéctese al [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}. En la columna izquierda, haga clic en `Alojamientos`{.action} y seleccione el alojamiento web correspondiente. En el recuadro `Información general` de la página que se abre, haga clic en el botón `...`{.action} a la derecha de `Boost` y seleccione `Mejorar mi plan`{.action}.<br><br>
>>![boost](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/boost-my-hosting-plan.png){.thumbnail}<br>
>>>
> **Desactivar la opción Boost**
>>>
>> Para desactivar la opción Boost, conéctese al [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}. En la columna izquierda, haga clic en `Alojamientos`{.action} y seleccione el alojamiento web correspondiente. Abra la pestaña `Más` y haga clic en `Mejorar mi plan`{.action}.<br>
>> Se mostrará la tabla de uso de la opción Boost. Haga clic en `Desactivar el plan Boost`{.action}.<br><br>
>>![boost](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/boost-my-hosting-plan/deactivate-the-boost-plan.png){.thumbnail}<br>

#### La facturación en caso de cambio de producto <a name="billing"></a>

**Caso 1**: Al cambiar su plan inicial a uno superior, se aplicará un cálculo de la parte proporcional* hasta la siguiente fecha de renovación de la suscripción inicial.
Este cálculo corresponde a la diferencia de precio entre su oferta inicial y su nueva oferta.

> **Ejemplo:**<br>
>
> Ha contratado una suscripción [Personal](/links/web/hosting-personal-offer) el 1 de enero de 2024.
>
> El 31 de octubre de 2024, cambiará de esta oferta **Perso** a una suscripción en el plan [Pro](/links/web/hosting-professional-offer).<br>
>
> Por lo tanto, el importe correspondiente al período restante de la suscripción **Perso** (2 meses, del 1 de noviembre de 2024 al 1 de enero de 2025) se restará automáticamente del coste de la nueva suscripción **Pro**, hasta el 1 de enero de 2025. Solo pagará la diferencia.
> A partir del 1 de enero de 2025, la suscripción **Pro** se facturará al precio vigente.

Siga [estas instrucciones](#modify) para realizar el cambio de producto.

**Caso 2**: Al cambiar su plan inicial a un plan inferior, el tiempo de suscripción restante para el plan inicial se pierde definitivamente. No se realizará ningún reembolso por el tiempo restante, incluso si usted tiene varios meses de suscripción. Por lo tanto, deberá pagar directamente la totalidad de la suscripción de la oferta inferior.

> **Ejemplo:**<br>
>
> Ha contratado una suscripción de [Pro](/links/web/hosting-professional-offer) el 1 de enero de 2024.
>
> El 31 de octubre de 2024, cambiará de esta oferta **Pro** a una suscripción en el plan [Personal](/links/web/hosting-personal-offer).<br>
>
> En consecuencia, se pierde el importe correspondiente al período restante de la suscripción **Pro** (2 meses, del 1 de noviembre de 2024 al 1 de enero de 2025).
> A partir del 1 de noviembre de 2024, la suscripción **Perso** se facturará directamente al precio vigente (aunque haya pagado los 2 meses restantes de la oferta **Pro**).

Siga [estas instrucciones](#modify) para realizar el cambio de producto.

## Más información <a name="go-further"></a>

[Consultar las estadísticas y los logs de un sitio alojado en un alojamiento compartido](/pages/web_cloud/web_hosting/logs_and_statistics)

[Optimización del rendimiento de su sitio web](/pages/web_cloud/web_hosting/optimise_your_website_performance)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).