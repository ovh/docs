---
title: "Cómo obtener la huella de carbono de los servicios de OVHcloud"
excerpt: "Descubra cómo obtener la huella de carbono mensual de los servicios de OVHcloud con nuestra calculadora de carbono"
updated: 2026-02-11
---

## Objetivo

En el marco de sus actividades profesionales o por interés sobre el tema, es posible que deba calcular la huella de carbono de sus servicios.

**Descubra cómo recuperar mensualmente la huella de carbono de sus servicios de OVHcloud.**

## Requisitos

- Ser contacto de "Facturación" de los servicios para los que desea obtener la huella de carbono. Para más información, consulte [nuestra guía sobre la gestión de contactos](/pages/account_and_service_management/account_information/managing_contacts).

<!-- CP-NAV-START:account-dashboard -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Mi cuenta](/links/control-panel/account-dashboard)
- **Ruta de navegación:** Haga clic en su nombre en la parte superior derecha > `Acceder a mi cuenta`{.action}

---
<!-- CP-NAV-END:account-dashboard -->

**El cálculo de la huella de carbono está disponible para los siguientes servicios:**

- [Servidor dedicado](/links/bare-metal/bare-metal) (Advance, Game, Scale, High Grade, Storage)
- [Servidor Dedicado Eco](/links/bare-metal/eco) (Rise, Kimsufi, So You Start)
- [VMware on OVHcloud](/links/hosted-private-cloud/vmware)
- [Public Cloud](/links/public-cloud/public-cloud)

## Procedimiento

> [!primary]
>
> Los datos de huella de carbono todavía no están disponibles para las arquitecturas 3AZ y las Zonas Locales.
>

Tenga en cuenta los siguientes puntos:

- No puede generar un balance de situación para el mes en curso.
- Si introduce una fecha de inicio, mitad o fin de mes para el mes seleccionado a través de la API de OVHcloud, el balance tendrá en cuenta el mes completo.
- No se pueden generar balances después de los últimos 24 meses.
- No es posible generar ningún balance del período anterior a la fecha de puesta en marcha de la funcionalidad para cada servicio de OVHcloud (ver la tabla a continuación).

**Disponibilidad de los datos de huella de carbono:**

| Servicios OVHcloud    | Productos                         | Estado       | Fecha de puesta en marcha de la calculadora de huella de carbono |
| -------------------- | ---------------------------------- | ------------ | -------------------------------------------------------------- |
| Servidores Dedicados | Servidor Dedicado                  | Disponible   | 2023/05/01 |
|                      | Servidor Dedicado Eco              | Disponible   | 2023/05/01 |
| Hosted Private Cloud | VMware on OVHcloud                 | Disponible   | 2023/08/01 |
| Public Cloud         | Instancias Public Cloud            | Disponible   | 2025/01/01 |
|                      | Block Storage                      | Disponible   | 2025/12/01 |
|                      | Object Storage S3                  | Próximamente |            |
|                      | File Storage                       | Próximamente |            |
|                      | Network                            | Próximamente |            |
|                      | Managed Kubernetes Service         | Próximamente |            |
|                      | Public Cloud Databases/Analytics   | Próximamente |            |
|                      | Data Platform                      | Próximamente |            |
|                      | AI                                 | Próximamente |            |
|                      | Quantum                            | Próximamente |            |

### Obtener el balance mensual del mes anterior desde el área de cliente de OVHcloud

<!-- CP-STEPS-START:retrieve-cp-footprint -->
1. En el [Panel de control de la cuenta](/links/control-panel/account-dashboard), en la columna izquierda, desplácese hasta la sección que contiene los **Enlaces útiles** y haga clic en la pestaña `Mi huella de carbono`{.action}.
1. En la nueva página que aparece, haga clic en `Descargar mi huella de [Mes] [Año]`{.action}.

![Carbon footprint](/pages/assets/screens/control_panel/product-selection/right-column/carbon-footprint/my-carbon-footprint.png){.thumbnail}

Podrá recuperar cada mes la huella de carbono del mes anterior para sus servicios elegibles.

Si necesita la huella de carbono durante un mes anterior al mes anterior al mes en curso, deberá utilizar obligatoriamente nuestras API para recuperarla.
<!-- CP-STEPS-END:retrieve-cp-footprint -->

### Recuperar un balance mensual anterior al mes anterior a través de nuestras API

Por defecto, las API de OVHcloud están disponibles para que los desarrolladores o integradores puedan asociar, por ejemplo, funcionalidades presentes o no en el área de cliente de OVHcloud directamente en sus aplicaciones o soluciones.

#### Etapa 1 - Conectarse a la API OVHcloud

- Visite nuestro sitio web [API OVHcloud](/links/api) (compruebe que está en `https://eu.api.ovh.com` si sus servicios están alojados en Europa y en `https://ca.api.ovh.com` si están alojados fuera de Europa).
- En la nueva página, haga clic en `Explore the OVHcloud API`{.action}.
- En la nueva página que aparece, en el lado izquierdo de la página, sitúese en el formulario situado a la derecha del campo `v1`{.action} y seleccione/introduzca la opción `/me`.
- Entre la lista de llamadas API que aparece a continuación, busque y haga clic en la siguiente llamada API: **POST /me/carbonCalculator/task**. También puede hacer clic directamente en la siguiente llamada a la API para acceder:

> [!api]
>
> @api {v1} /me POST /me/carbonCalculator/task
>

- En la parte derecha de la página aparece la API con su recuadro a completar.
- Haga clic en el botón situado en la esquina superior derecha, titulado `Authenticate`{.action}, y luego en el botón `Login with OVHcloud SSO`{.action}.
- Se abrirá la interfaz de conexión a su [área de cliente de OVHcloud](/links/control-panel/account-dashboard).
- Conéctese con su ID de cliente y haga clic en `Authorize`{.action} para utilizar las API de OVHcloud con sus servicios.
- A continuación, el sistema le redirigirá automáticamente a la página anterior de la API **POST /me/carbonCalculator/task**.

#### Etapa 2 - Solicitar la generación de la hoja de balance y obtener el ID de la tarea solicitada

Sustituya la fecha actual que aparece en el recuadro de la API por la fecha en la que desea detener el cálculo del balance de situación. Utilice el siguiente formato de fecha:

```bash
{
  "date": "YYYY-MM-DD"
}
```

![API](/pages/assets/screens/api/post-me-carboncalculator-task.png){.thumbnail}

Una vez que haya elegido la fecha y la haya introducido correctamente, haga clic en el botón azul `EXECUTE`{.action} situado en la parte inferior derecha de la sección que haya rellenado.

Si todo se ha realizado correctamente, aparecerá un `taskID` en la ventana `RESPONSE`{.action} al bajar a la página, debajo del botón `EXECUTE`{.action}.

![API](/pages/assets/screens/api/post-me-carboncalculator-task-response.png){.thumbnail}

Por ejemplo, si su ID de cliente de OVHcloud es el `aa00000-ovh` y la fecha elegida anteriormente era el `31-01-2025`, obtendrá el siguiente resultado:

```bash
{
  "taskID": "aa00000-ovh_202501"
}
```

Copie únicamente el valor obtenido de su lado y equivalente al valor de nuestro ejemplo `aa00000-ovh_202501` (sin copiar los dos `"` situados en los extremos).

#### Etapa 3 - Obtener el archivo que contiene el balance de carbono de sus servicios en formato PDF

Gracias al valor del `taskID` recuperado anteriormente, podrá recuperar el balance de carbono de sus servicios en formato PDF.

Permanezca en nuestro sitio web [API OVHcloud](/links/api) y realice las siguientes acciones:

- En la parte izquierda de la página, sitúese en el formulario situado a la derecha del formulario `v1`{.action} y seleccione/introduzca la opción `/me`{.action}.
- Entre la lista de llamadas API que aparece a continuación, busque y haga clic en la siguiente llamada API: **GET /me/carbonCalculator/task/{taskID}**. También puede hacer clic directamente en la siguiente llamada a la API para acceder:

> [!api]
>
> @api {v1} /me GET /me/carbonCalculator/task/{taskID}
>

- En la parte derecha de la página se muestra la llamada API con un formulario a rellenar.

Rellene el formulario de la sección `PATH PARAMETERS` del siguiente modo:

- `taskID`: copie aquí el valor del taskID recuperado en la etapa 2.

![API](/pages/assets/screens/api/get-me-carboncalculator-task-taskid.png){.thumbnail}

Una vez introducido correctamente el valor de su `taskID`, haga clic en el botón azul `EXECUTE`{.action}.

El siguiente resultado aparece en la ventana `RESPONSE`{.action} cuando se desplaza a la página, debajo del botón `EXECUTE`{.action}:

![API](/pages/assets/screens/api/get-me-carboncalculator-task-taskid-response.png){.thumbnail}

```bash
{
  "link": "Find here the complete URL to download the carbon footprint in PDF format",
  "status": "SUCCESS",
  "taskID": "aa00000-ovh_202501"
}
```

En este resultado, copie la URL completa en "HTTPS" (**sin las comillas**) a la derecha de la mención `"link":` y péguela en la barra de búsqueda de su navegador de Internet para iniciar la descarga del balance de carbono en formato PDF.

Su navegador de Internet descargará automáticamente el archivo y lo mostrará.

> [!primary]
>
> En función de la configuración del navegador, es posible que se bloquee la descarga y visualización del archivo. En ese caso, compruebe la configuración de su navegador y vuelva a cargar la página.

Una vez abierto el archivo, podrá ver lo siguiente:

- Una tabla de las emisiones de C02 por categoría para el mes solicitado.
- Un cuadro de las emisiones de C02 por categoría entre el comienzo del año natural y el mes solicitado.
- Una tabla que detalla los valores por tipo de producto suscrito.
- Un gráfico que muestra las emisiones de C02 por categoría.

> [!warning]
> El vínculo generado sólo es válido durante 24 horas. Una vez abierto el enlace, asegúrese de descargar el balance de carbono desde su navegador.

## Más información <a name="go-further"></a>

[Primeros pasos con las API de OVHcloud](/pages/manage_and_operate/api/first-steps)
 
Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).