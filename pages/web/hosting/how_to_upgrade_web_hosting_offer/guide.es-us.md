---
title: Mejorar la solución de alojamiento web
excerpt: Cómo cambiar la fórmula de suscripción de un plan de hosting de OVHcloud
slug: how_to_change_web_hosting_offer
section: Optimización del sitio web
order: 02
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

**Última actualización: 22/06/2022**

## Objetivo

Su [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws) le permite aumentar la capacidad de sus [planes de hosting](https://www.ovhcloud.com/es/web-hosting/) para disponer de un alojamiento más potente, más espacio de almacenamiento, bases de datos, direcciones de correo o funcionalidades adicionales como los [listas de correo](https://ovhcloud.com/us/es/emails/guia_de_utilizacion_de_listas_de_difusion/) (a partir del [plan Profesional](https://www.ovhcloud.com/es/web-hosting/professional-offer/)) o el [servicio SQL privado](https://www.ovhcloud.com/es/web-hosting/options/private-sql/) (incluidos los productos de la [gama Performance](https://www.ovhcloud.com/es/web-hosting/performance-offer/)).

**Descubra cómo cambiar sin interrupción el plan de hosting de OVHcloud.**

## Requisitos

- Tener un [plan de hosting](https://www.ovhcloud.com/es/web-hosting/)
- Estar conectado a su [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws)

## En la práctica

> [!warning]
>
> **Antes** de realizar cualquier cambio en la suscripción actual, compruebe si tiene alguna de las siguientes preguntas:
>
> - [¿Cómo disfrutar de un aumento temporal del rendimiento de mi plan de hosting Performance?](#boost)
> - [¿Voy a perder el tiempo restante de mi actual plan de hosting al cambiar de plan?](#billing)
> - [¿Es posible cambiar mi solución actual a una inferior?](#checks)
>

### Modificar el plan de hosting <a name="modify"></a>

Para modificar su suscripción, vaya a su [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws) en la sección `Web Cloud`{.action}. Haga clic en `Alojamientos`{.action} y seleccione el alojamiento correspondiente.

En el recuadro `Suscripción`, haga clic en el botón `...`{.action} a la derecha de `Solución` y luego en `Cambiar de plan`{.action}.

![change_plan](images/change_plan.png){.thumbnail}

A continuación, seleccione la nueva suscripción y la duración de la misma. Acepte los contratos correspondientes y haga clic en `Enviar`{.action}.

### Comprobar que el alojamiento es compatible con un producto inferior <a name="checks"></a>

> [!warning]
>
> Solo es posible modificar la suscripción para un producto que ofrezca menos recursos si se trata del producto **inmediatamente inferior**. 
> Por ejemplo, no podrá pasar de una fórmula *Performance 2* a una fórmula *Profesional* en una sola operación.
> **En primer lugar**, deberá migrar su alojamiento desde la fórmula *Performance 2* al plan *Performance 1* y **después** al plan *Profesional*.
>

Antes de realizar el cambio a una gama inferior, compruebe los siguientes 6 elementos:

#### 1 - Número de sitios

El producto [Kimsufi Web](https://www.ovhcloud.com/es/web-hosting/old-web-hosting-offers/) no permite tener más de un dominio en el [multisitio](https://ovhcloud.com/us/es/hosting/configurar-un-multisitio-en-un-alojamiento-web/) de su alojamiento.

Antes de cambiar del plan [Personal](https://www.ovhcloud.com/es/web-hosting/personal-offer/) al plan [Kimsufi Web](https://www.ovhcloud.com/es/web-hosting/old-web-hosting-offers/), compruebe que el alojamiento solo tenga un sitio web.

#### 2 - Bases de datos Start SQL

Antes de cambiar al plan de hosting inferior, asegúrese de que el nuevo plan incluya suficientes [bases de datos](https://www.ovhcloud.com/es/web-hosting/options/start-sql/). Compruebe también que sean de tamaño suficiente.

En caso contrario, elimine las bases de datos no utilizadas y reduzca la cantidad de datos que contienen. Esta cantidad no deberá exceder del tamaño máximo de las bases de datos de la nueva oferta (para cualquier solicitud de soporte sobre las operaciones a realizar, contacte con los [partners de OVHcloud](https://partner.ovhcloud.com/es/)).

Una vez que haya eliminado los datos de sus bases de datos, vuelva a calcular el espacio utilizado en la pestaña `Bases de datos`{.action} de la sección `Alojamientos`{.action} del área de cliente. Haga clic en el botón `...`{.action} a la derecha de la base de que se trate y, seguidamente, `Recalcular el espacio utilizado`{.action}.

![cuota](images/quota.png){.thumbnail}

#### 3 - Espacio FTP

Antes de cambiar al plan de hosting inferior, asegúrese de que el nuevo plan incluye suficiente [espacio de almacenamiento FTP](https://ovhcloud.com/us/es/hosting/conexion-espacio-almacenamiento-ftp-alojamiento-web/) para poder importar los archivos de su alojamiento actual.

La cuota utilizada en su alojamiento FTP puede verse en la sección `Alojamientos`{.action} del área de cliente. Haga clic en la pestaña `Información general`{.action} y encontrará el límite en el `Espacio en disco`.

![ftp](images/ftp.png){.thumbnail}

#### 4 - Direcciones de correo

Compruebe también que la nueva solución ofrezca un número suficiente de direcciones de correo electrónico disponibles. En caso contrario, elimine las direcciones superfluas después de haberlas [guardado](https://ovhcloud.com/us/es/emails/migrar-sus-direcciones-de-correo-manualmente/) si es necesario.

Si quiere conservar el mismo número de cuentas de correo antes de pasar el alojamiento a una solución inferior, puede contratar una nueva solución de correo **MX Plan**. En la sección `Correo electrónico`{.action} del área de cliente, haga clic en el producto correspondiente y, seguidamente, en el botón `...`{.action} a la derecha del `Producto`{.action}. Haga clic en `Cambiar de plan`{.action}.

![mxplan](images/mxplan.png){.thumbnail}

#### 5 - Mailing lists

La funcionalidad [Mailing lists](https://ovhcloud.com/us/es/emails/guia_de_utilizacion_de_listas_de_difusion/) está opcional en los alojamientos [Personal](https://www.ovhcloud.com/es/web-hosting/personal-offer/) y [Kimsufi Web](https://www.ovhcloud.com/es/web-hosting/old-web-hosting-offers/).

Para migrar a un plan de hosting [Personal](https://www.ovhcloud.com/es/web-hosting/personal-offer/), primero deberá eliminar las listas de correo o contratar un servicio de correo que incluya esta funcionalidad (**MX Plan 100** o **MX Plan Full**) desde su [área de cliente OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).

En la sección `Correo electrónico`{.action} del área de cliente, seleccione el servicio correspondiente y haga clic en `...`{.action} a la derecha del `Producto`{.action}. Haga clic en `Cambiar de plan`{.action}.

#### Finalización

Una vez que haya comprobado estos 6 elementos, puede realizar el [cambio de producto](#modify).

### Casos particulares

#### Mejorar temporalmente el plan de hosting Performance <a name="boost"></a>

Con la [opción Boost](https://www.ovhcloud.com/es/web-hosting/options/boost/), disponible en nuestros planes *Performance*, puede aumentar temporalmente los recursos de CPU y RAM de su alojamiento para absorber un aumento puntual del tráfico. Si el incremento se prolonga en el tiempo, también puede [migrar al plan Performance de nivel superior](#modify) para disponer de estos recursos de forma permanente.

> [!warning]
>
> Al activar la opción Boost, esta permanecerá activa y será facturada **hasta que la haya desactivado**.

Si la opción **Boost** se ajusta a sus necesidades, a continuación se indican las instrucciones para **activar** o **desactivar** esta opción en su alojamiento.

> [!tabs]
> **Activar la opción Boost**
>>
>> En el cuadro `Información general` de su alojamiento, haga clic en el botón `...`{.action} a la derecha de `Boost` y luego en `Booster mi producto`{.action}.<br><br>
>> ![boost](images/enable_boost.png){.thumbnail}<br>
>>
> **Desactivar la opción Boost**
>>
>> En la pestaña `Plus` del alojamiento, haga clic en `Mejorar mi plan`{.action}.<br>
>> Se mostrará la tabla de uso de la opción Boost. Haga clic en `Desactivar el plan "boost`{.action}".<br><br>
>> ![boost](images/disable_boost.png){.thumbnail}<br>

#### Facturación en caso de cambio de producto <a name="billing"></a>

Al cambiar el plan inicial a un plan superior, se aplicará un cálculo de la *parte proporcional al período restante* hasta la próxima fecha de renovación de la suscripción inicial.
Este cálculo corresponde a la diferencia de precio entre su producto inicial y su nuevo producto.

> **Por ejemplo:**<br>
>
> Ha contratado una suscripción [Personal](https://www.ovhcloud.com/es/web-hosting/personal-offer/) el 1 de enero de 2022.
>
> El 31 de octubre de 2022, pasará de esta oferta **Personal** a una suscripción a la oferta [Profesional](https://www.ovhcloud.com/es/web-hosting/professional-offer/).<br>
>
> Por consiguiente, el importe correspondiente a la duración restante de la suscripción **Personal** (2 meses, del 1 de noviembre de 2022 al 1 de enero de 2023) se sustrae automáticamente del coste de la nueva suscripción **Profesional**, hasta el 1 de enero de 2023. Sólo pagarán la diferencia.
> A partir del 1 de enero de 2023, la suscripción Profesional se factura a su precio en vigor.

Siga [estas instrucciones](#modify) para cambiar de producto.

## Más información <a name="gofurther"></a>

[Consultar las estadísticas y logs de mi sitio web alojado en un plan compartido](https://ovhcloud.com/us/es/hosting/web_hosting_consultar_las_estadisticas_y_logs_de_un_sitio_web/)

[Optimización del rendimiento de su sitio web](https://ovhcloud.com/us/es/hosting/web_hosting_guia_de_optimizacion_del_rendimiento_de_un_sitio_web/)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](https://partner.ovhcloud.com/es/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, consulte [nuestras distintas soluciones pestañas de soporte](https://www.ovhcloud.com/es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.