---
title: Añadir un alias a una cuenta de correo
slug: email-alias
excerpt: Cómo añadir un alias a una dirección de correo electrónico desde el área de cliente de OVHcloud
section: Funcionalidades de las cuentas Exchange
order: 01
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 20/09/2021**

## Objetivo

Crear un alias para su dirección de correo le permite comunicar una dirección "máscara" a sus contactos, sin tener que proporcionar su dirección de correo personal al remitente. Una dirección de correo electrónico puede tener varios alias.

![correo electrónico](images/email-alias01.png){.thumbnail}

Por ejemplo, su dirección de correo electrónico es **john.smith@mydomain.ovh** y su alias **anonymous@mydomain.ovh**. A continuación, podrá comunicar a sus contactos la dirección **anonymous@mydomain.ovh** y recibir sus emails en **john.smith@mydomain.ovh** sin que el remitente tenga conocimiento de **john.smith@mydomain.ovh**.

**Cómo añadir un alias a una dirección de correo electrónico desde el área de cliente de OVHcloud**

> [!warning]
>
> Los alias de OVHcloud solo funcionan para el correo entrante. No es posible enviar correos electrónicos utilizando el alias del remitente del email.
>

## Requisitos

- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).
- Disponer de una solución de correo electrónico de OVHcloud que debe haber sido previamente configurada (**MX Plan** (nueva versión), ofrecida entre nuestros [planes de hosting](https://www.ovhcloud.com/es-es/web-hosting/) o contratada por separado como solución autónoma, [**Hosted Exchange**](https://www.ovhcloud.com/es-es/emails/hosted-exchange/) o [**Email Pro**](https://www.ovhcloud.com/es-es/emails/email-pro/)).

## Procedimiento

### Crear un alias

Inicie sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) y acceda al apartado `Web Cloud`. A continuación, seleccione el menú en función de su servicio de correo:

- **Exchange**: `Microsoft`{.action}, luego en `Exchange`{.action} y seleccione la plataforma correspondiente. Haga clic en la pestaña `Cuentas de correo`{.action}.

- **Email Pro**: en `Email Pro`{.action}, seleccione la plataforma correspondiente y haga clic en la pestaña `Cuentas de correo`{.action}.

- **Emails** (MXplan): en `Emails`{.action}, seleccione la plataforma correspondiente y haga clic en `Cuentas de correo`{.action}.

Se abrirá una columna llamada `Alias`.

![correo electrónico](images/email-alias012.png){.thumbnail}

> [!warning]
>
> Si tiene un servicio de correo de tipo MXplan y no aparece la columna Alias, puede consultar la versión histórica del servicio. En este caso, los alias se crean en forma de redirecciones. Para ello, consulte nuestra guía [Utilizar las redirecciones de correo](https://docs.ovh.com/es/emails/correo_redirecciones_de_correo/#version-historica-de-la-solucion-mx-plan).
>

Para añadir un alias a su cuenta de correo:

- Haga clic en el botón `...`{.action} y, a continuación, en `Configurar alias`{.action} (o `Gestionar alias`{.action}).

![correo electrónico](images/email-alias02.png){.thumbnail}

- Haga clic en `Añadir un alias`{.action} e introduzca la dirección que ha elegido para el alias y acepte su elección.

![correo electrónico](images/email-alias03.png){.thumbnail}

### Eliminar un alias

En la pestaña `Cuentas de correo`{.action}, haga clic en el botón `...`{.action} situado al final de la línea correspondiente a la dirección de correo y seleccione `Configurar alias`{.action} (o `Gestionar alias`{.action}).

Haga clic en el botón `...`{.action} situado a la derecha del alias correspondiente en el menú de gestión de alias. Por último, haga clic en `Eliminar el alias`{.action}

![correo electrónico](images/email-alias04.png){.thumbnail}

## Más información

[Consultar una cuenta Exchange desde la interfaz OWA](https://docs.ovh.com/es/microsoft-collaborative-solutions/exchange_2016_guia_de_uso_de_outlook_web_app/)

[Reglas de la bandeja de entrada desde la interfaz OWA](https://docs.ovh.com/es/microsoft-collaborative-solutions/crear-reglas-de-bandeja-de-entrada-en-owa/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
