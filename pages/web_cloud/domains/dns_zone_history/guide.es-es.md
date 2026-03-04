---
title: "Gestionar el historial de una zona DNS"
excerpt: "Descubra cómo consultar, comparar, descargar y restaurar las copias de seguridad de la zona DNS"
updated: 2025-04-28
---

## Objetivo

La zona **D**omain **N**ame **S**ystem (**DNS**) de un dominio es el fichero de configuración del dominio. Consta de información técnica, denominada *registros DNS*. La zona DNS es como un centro de reenvío.

Para más información, consulte nuestras guías:

- [Todo sobre los servidores DNS](/pages/web_cloud/domains/dns_server_general_information)
- [Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records)

Existen diversos motivos por los que podría necesitar aplicar una configuración DNS anterior al dominio.

A partir de ahora, la gestión de los DNS se simplifica gracias al historial de sus zonas DNS.

**Descubra cómo consultar, comparar, descargar y restaurar las copias de seguridad de la zona DNS**

## Requisitos

- Tener acceso a la gestión del dominio

<!-- CP-NAV-START:web-dns-zone -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [DNS zones](/links/control-panel/web-dns-zone)
- **Ruta de navegación:** `Web Cloud`{.action} >  `Zonas DNS`{.action} > Seleccione su nombre de dominio

---
<!-- CP-NAV-END:web-dns-zone -->

## Procedimiento

Haga clic en las fichas siguientes para ver cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Haga clic en [este enlace](/links/control-panel/web-dns-zone) y seleccione el dominio correspondiente.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Se mostrará una tabla con la zona DNS del dominio. Aquí encontrará la lista de los registros DNS que contiene. A la derecha del cuadro, varios botones le permiten realizar acciones en su zona DNS. 
>>
>> ![DNS history tool](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-history.png){.thumbnail}
>>
>> Haga clic en `Ver el historial de mi zona DNS`{.action}. 
>>
> **Etapa 3**
>>
>> Se abrirá una nueva página en la que podrá consultar el historial de copias de seguridad de su zona DNS, ordenado de la fecha más reciente a la más antigua. En la parte superior de la tabla se encuentra la versión actual de la zona DNS. En esta página, puede:
>>
>> - [Ver una zona DNS](#view)
>> - [Descargar una zona DNS](#download)
>> - [Restaurar una zona DNS](#restore)
>> - [Comparar dos zonas DNS](#compare)

> [!primary]
>
> Las copias de seguridad de la zona DNS están sujetas a las siguientes limitaciones:
>
> - Conservamos un máximo de 200 copias de seguridad para una misma zona DNS.
> - Cuando una copia de seguridad tiene más de 31 días, se elimina automáticamente, a excepción de las **5 copias de seguridad más recientes** realizadas.
>

### Ver una zona DNS <a name="view"></a>

Para ver la zona DNS que desea ver, identifique la fila correspondiente en la tabla y haga clic en el icono de la columna `Ver`{.action}.

![Ver una zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/visualize-dns-eyes.png){.thumbnail}

Se mostrarán los datos de la zona DNS correspondiente.

![Detalle de una zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/details-dns-zone.png){.thumbnail}

Haga clic en `Cerrar`{.action} para volver a la página principal "Historial de la zona DNS".

### Descargar una zona DNS <a name="download"></a>

Para descargar la zona DNS que desee, identifique la fila correspondiente en la tabla y haga clic en el icono de la columna `Descargar`{.action}.

![Descargar una zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/download-dns-zone.png){.thumbnail}

La zona DNS se descarga en formato .txt.

### Restaurar una zona DNS <a name="restore"></a>

Si quiere sustituir la zona DNS actual por otra, solo tiene que restaurar una zona DNS anterior. En la tabla que contiene el historial de sus zonas DNS, identifique la fila correspondiente a la zona DNS que quiere restaurar (compruebe la fecha a la izquierda de la fila) y haga clic en el icono de la columna `Restaurar`{.action}.

![Restaurar una zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/restore-dns-zone.png){.thumbnail}

Se abrirá la siguiente ventana.

![Confirmation restaurar zone DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/confirmation-restore-dns-zone.png){.thumbnail}

Compruebe que la fecha indicada en el mensaje corresponde a la zona DNS que desea restaurar. Recuerde, como indica el banner amarillo, que la zona DNS actual (situada en la parte superior de la lista del historial de zonas DNS) será eliminada y sustituida por la zona DNS que quiera restaurar.

Haga clic en `Restaurar`{.action} para confirmar la restauración o en `Cancelar`{.action}.

> [!primary]
>
> La modificación o restauración de una zona DNS conlleva un retraso de propagación de **4** a **24** horas para que se aplique por completo a la red DNS.
>

### Comparar dos zonas DNS <a name="compare"></a>

Puede comparar el contenido de dos zonas DNS. En la tabla que contiene el historial de su zona DNS, identifique las dos líneas correspondientes a las dos zonas DNS que desea comparar (compruebe la fecha a la izquierda de cada línea) y selecciónelas. Para comparar estas dos versiones de zona DNS, haga clic en `Comparar las versiones`{.action}, en la parte superior izquierda.

![Comparar dos zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/compare-two-dns-zone.png){.thumbnail}

Aparecerá una nueva página con el contenido de las dos zonas DNS. Por encima de cada versión se muestra la fecha correspondiente. Por defecto, la versión de la zona DNS más reciente se encuentra a la izquierda y la más antigua a la derecha. Un código de color ayuda a identificar las diferencias de contenido.<br>
A la izquierda, el contenido resaltado en rojo se ha modificado o eliminado en la versión más reciente.<br>
A la derecha, el contenido resaltado en verde ha cambiado o se ha añadido con respecto a la versión anterior. 

También puede actualizar las fechas de las versiones que desea comparar con las dos listas desplegables.

![Detalles comparación dos zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/compare-dns-zone-details.png){.thumbnail}

Esta guía explica cómo comparar dos zonas DNS, ver, descargar, restaurar y eliminar una zona DNS.

## Más información

[Todo sobre los servidores DNS](/pages/web_cloud/domains/dns_server_general_information)

[Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records)

[Todo sobre los servidores DNS](/pages/web_cloud/domains/dns_server_general_information)

[Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records)

[Conectarse al área de cliente de OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-login)

[Crear una zona DNS en OVHcloud](/pages/web_cloud/domains/dns_zone_create)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).