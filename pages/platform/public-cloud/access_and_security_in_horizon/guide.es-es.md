---
title: Parámetros de acceso y seguridad en Horizon
excerpt: Cómo gestionar y proteger el acceso a sus instancias
slug: access_and_security_in_horizon
legacy_guide_number: g1774
section: Gestión desde Horizon
order: 4
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 26/05/2021**

## Objetivo

La interfaz OpenStack Horizon ofrece opciones para configurar el acceso a sus instancias y a otros servicios.<br>
Por ejemplo, puede configurar grupos de seguridad para filtrar las conexiones entrantes y salientes o descargar el archivo OpenRC que contiene sus claves para utilizar las API OpenStack.

**Cómo gestionar y proteger el acceso a sus instancias**

## Requisitos

- [Conectarse a Horizon](../horizon/)

## Procedimiento

Conéctese a [Horizon](https://horizon.cloud.ovh.net/auth/login/).

Los parámetros de acceso y seguridad se componen de las siguientes secciones, disponibles a través del menú de la izquierda:

- **API Access** (en `Project`{.action})

La tabla de acceso a la API enumera los puntos de las API OpenStack.

![horizon - acceso a la API](images/api_access.png){.thumbnail}

Para comprobar los valores de acceso a utilizar con las API, haga clic en `View Credentials`{.action}.

Haga clic en el botón `Download OpenStack RC File`{.action} para abrir un menú desplegable en el que puede elegir el archivo RC apropiado para descargar.

- **Key Pairs** (bajo `Project`{.action} y luego `Compute`{.action})

Esta sección permite almacenar y gestionar pares de claves SSH. Simplemente puede crear y añadir una clave pública y privada haciendo clic en el botón `Create Key Pair`{.action}.

![horizon - llaves SSH](images/key_pairs.png){.thumbnail}

Si desea añadir una llave preexistente, haga clic en `Importar Public Key`{.action}. Se abrirá una ventana en la que podrá introducir una clave o seleccionar un archivo de claves.

Esta sección de la interfaz contiene instrucciones básicas. Para más información sobre las llaves SSH, consulte [esta guía](../crear-llave-ssh/).

- **Security Groups** (bajo `Project`{.action} y luego `Network`{.action})

Los grupos de seguridad son conjuntos de reglas de filtrado que se aplican a las interfaces de red. Los puede utilizar para restringir el acceso a las instancias a direcciones IP y puertos.

![horizon - grupos de seguridad](images/security_groups.png){.thumbnail}

Añada un grupo de seguridad haciendo clic en `Create Security Group`{.action} y aplicándole las reglas personalizadas o predefinidas en la tabla con el botón `Manage Rules`{.action}.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
