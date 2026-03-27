---
title: "Gestionar el historial de una zona DNS"
excerpt: "Descubra cómo consultar, comparar, descargar y restaurar las copias de seguridad de la zona DNS"
updated: 2026-03-27
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

La zona **D**omain **N**ame **S**ystem (**DNS**) de un dominio es el fichero de configuración de este. Se compone de información técnica denominada *registros DNS*. La zona DNS es, en cierto modo, un centro de distribución.

Para más información, consulte nuestras guías:

- [Todo sobre los servidores DNS](/pages/web_cloud/domains/dns_server_general_information)
- [Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records)

Por diversos motivos, podría necesitar aplicar una configuración DNS anterior a su dominio.

La gestión de los DNS se simplifica gracias al historial de las zonas DNS.

**Descubra cómo consultar, comparar, descargar y restaurar las copias de seguridad de la zona DNS**

## Requisitos

- Tener acceso a la gestión del dominio en cuestión

<!-- CP-NAV-START:web-dns-zone -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Zonas DNS](/links/control-panel/web-dns-zone)
- **Ruta de navegación:** `Web Cloud`{.action} > `Zonas DNS`{.action} > Seleccione su nombre de dominio

---
<!-- CP-NAV-END:web-dns-zone -->

## Procedimiento

> [!primary]
>
> Las copias de seguridad de su zona DNS están sujetas a las siguientes limitaciones:
>
> - Conservamos un máximo de 200 copias de seguridad para una misma zona DNS.
> - Cuando una copia de seguridad tiene más de 31 días, se elimina automáticamente, a excepción de las **5 copias de seguridad más recientes** realizadas.

**Haga clic en la acción de su elección para ver el contenido.**

/// details | Ver una zona DNS

Haga clic en las pestañas de abajo para ver cada uno de los **4** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Zonas DNS](/links/control-panel/web-dns-zone) y seleccione el dominio correspondiente.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Paso 2**
>>
>> La tabla que aparece muestra la zona DNS de su dominio. En ella encontrará la lista de registros DNS que contiene. A la derecha de la tabla, varios botones le permiten realizar acciones en su zona DNS.
>>
>> ![Herramienta de historial DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-history.png){.thumbnail}
>>
>> Haga clic en `Ver el historial de mi zona DNS`{.action}.
>>
> **Paso 3**
>>
>> En la nueva página que aparece, una tabla muestra el historial de las copias de seguridad de su zona DNS, de la más reciente a la más antigua. En la parte superior de la tabla se encuentra la versión actual de su zona DNS.
>>
>> Para ver la zona DNS de su elección, identifique la fila correspondiente en la tabla y haga clic en el icono de la columna `Ver`{.action}.
>>
>> ![Ver una zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/visualize-dns-eyes.png){.thumbnail}
>>
> **Paso 4**
>>
>> Se muestran los datos de la zona DNS seleccionada.
>>
>> ![Detalle de una zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/details-dns-zone.png){.thumbnail}
>>
>> Haga clic en `Cerrar`{.action} para volver a la página principal "Historial de la zona DNS".

///

/// details | Descargar una zona DNS

Haga clic en las pestañas de abajo para ver cada uno de los **3** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Zonas DNS](/links/control-panel/web-dns-zone) y seleccione el dominio correspondiente.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Paso 2**
>>
>> La tabla que aparece muestra la zona DNS de su dominio. En ella encontrará la lista de registros DNS que contiene. A la derecha de la tabla, varios botones le permiten realizar acciones en su zona DNS.
>>
>> ![Herramienta de historial DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-history.png){.thumbnail}
>>
>> Haga clic en `Ver el historial de mi zona DNS`{.action}.
>>
> **Paso 3**
>>
>> En la nueva página que aparece, una tabla muestra el historial de las copias de seguridad de su zona DNS, de la más reciente a la más antigua. En la parte superior de la tabla se encuentra la versión actual de su zona DNS.
>>
>> Para descargar la zona DNS de su elección, identifique la fila correspondiente en la tabla y haga clic en el icono de la columna `Descargar`{.action}.
>>
>> ![Descargar una zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/download-dns-zone.png){.thumbnail}
>>
>> La zona DNS se descarga en formato .txt.

///

/// details | Restaurar una zona DNS

Haga clic en las pestañas de abajo para ver cada uno de los **4** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Zonas DNS](/links/control-panel/web-dns-zone) y seleccione el dominio correspondiente.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Paso 2**
>>
>> La tabla que aparece muestra la zona DNS de su dominio. En ella encontrará la lista de registros DNS que contiene. A la derecha de la tabla, varios botones le permiten realizar acciones en su zona DNS.
>>
>> ![Herramienta de historial DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-history.png){.thumbnail}
>>
>> Haga clic en `Ver el historial de mi zona DNS`{.action}.
>>
> **Paso 3**
>>
>> En la nueva página que aparece, una tabla muestra el historial de las copias de seguridad de su zona DNS, de la más reciente a la más antigua. En la parte superior de la tabla se encuentra la versión actual de su zona DNS.
>>
>> Si desea sustituir su zona DNS actual por otra, solo tiene que restaurar una zona DNS más antigua. En la tabla con el historial de sus zonas DNS, identifique la fila correspondiente a la zona DNS que quiere restaurar (compruebe la fecha a la izquierda de la fila) y haga clic en el icono de la columna `Restaurar`{.action}.
>>
>> ![Restaurar una zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/restore-dns-zone.png){.thumbnail}
>>
> **Paso 4**
>>
>> Aparece la siguiente ventana.
>>
>> ![Confirmación restauración zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/confirmation-restore-dns-zone.png){.thumbnail}
>>
>> Compruebe que la fecha indicada en el mensaje corresponde a la zona DNS que desea restaurar. Como indica el banner amarillo, recuerde que la zona DNS actual (en la parte superior de la lista del historial de zonas DNS) será eliminada y sustituida por la zona DNS que quiera restaurar.
>>
>> Haga clic en `Restaurar`{.action} para confirmar la restauración o en `Cancelar`{.action}.

> [!primary]
>
> La modificación o restauración de una zona DNS conlleva un plazo de propagación de **4** a **24** horas para que se aplique completamente en la red DNS.

///

/// details | Comparar dos zonas DNS

Haga clic en las pestañas de abajo para ver cada uno de los **4** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Zonas DNS](/links/control-panel/web-dns-zone) y seleccione el dominio correspondiente.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Paso 2**
>>
>> La tabla que aparece muestra la zona DNS de su dominio. En ella encontrará la lista de registros DNS que contiene. A la derecha de la tabla, varios botones le permiten realizar acciones en su zona DNS.
>>
>> ![Herramienta de historial DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-history.png){.thumbnail}
>>
>> Haga clic en `Ver el historial de mi zona DNS`{.action}.
>>
> **Paso 3**
>>
>> En la nueva página que aparece, una tabla muestra el historial de las copias de seguridad de su zona DNS, de la más reciente a la más antigua. En la parte superior de la tabla se encuentra la versión actual de su zona DNS.
>>
>> Puede comparar el contenido de dos zonas DNS. En la tabla con el historial de su zona DNS, identifique las dos filas correspondientes a las dos zonas DNS que desea comparar (compruebe la fecha a la izquierda de cada fila) y selecciónelas. Para comparar estas dos versiones de zona DNS, haga clic en la parte superior izquierda en `Comparar las versiones`{.action}.
>>
>> ![Comparar dos zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/compare-two-dns-zone.png){.thumbnail}
>>
> **Paso 4**
>>
>> Aparece una nueva página con el contenido de las dos zonas DNS. Encima de cada versión se muestra la fecha correspondiente. Por defecto, la versión más reciente de la zona DNS se encuentra a la izquierda y la más antigua a la derecha. Un código de colores le permite identificar las diferencias de contenido.
>>
>> A la izquierda, el contenido resaltado en rojo se ha modificado o eliminado en la versión más reciente.
>>
>> A la derecha, el contenido resaltado en verde se ha modificado o añadido respecto a la versión más antigua.
>>
>> También puede actualizar las fechas de las versiones que desea comparar con las dos listas desplegables.
>>
>> ![Detalles comparación dos zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/compare-dns-zone-details.png){.thumbnail}

///

## Más información

[Todo sobre los servidores DNS](/pages/web_cloud/domains/dns_server_general_information)

[Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records)

[Conectarse al área de cliente de OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-login)

[Crear una zona DNS en OVHcloud](/pages/web_cloud/domains/dns_zone_create)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas [ofertas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
