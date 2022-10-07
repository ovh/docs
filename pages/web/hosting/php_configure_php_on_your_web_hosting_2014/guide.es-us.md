---
title: "Cambiar la versión de PHP de un alojamiento web"
slug: cambiar-version-php-en-alojamiento-web
excerpt: "Cómo cambiar la versión de PHP de un alojamiento web de OVHcloud"
section: PHP
order: 01
---

**Última actualización: 19/09/2022**

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

Su [plan de hosting de OVHcloud](https://www.ovhcloud.com/es/web-hosting/){.external} permite alojar el sitio web que desee, siempre que sea compatible con [la configuración de nuestras infraestructuras](https://webhosting-infos.hosting.ovh.net){.external}. En este sentido, quizá desee modificar la versión de PHP utilizada por su alojamiento web.

**Descubra cómo cambiar la versión de PHP de un alojamiento web de OVHcloud.**

## Requisitos

- Tener contratado un [plan de hosting de OVHcloud](https://www.ovhcloud.com/es/web-hosting/){.external}, a excepción de un plan de hosting Cloud Web.
- Tener acceso a su plan de hosting desde el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws) o conocer la información necesaria para conectarse al[espacio de almacenamiento FTP](https://docs.ovh.com/us/es/hosting/conexion-espacio-almacenamiento-ftp-alojamiento-web/). 

## Procedimiento

Existen varias versiones del lenguaje de programación PHP. La evolución de las versiones aporta varios parches, así como la adición o interrupción de las funcionalidades. OVHcloud ofrece las últimas versiones mayores de PHP, que puede consultar en la lista [aquí](https://www.ovhcloud.com/es/web-hosting/uc-programming-language/). 

> [!primary]
>
> Debido a que algunas funcionalidades pueden no mantenerse en las nuevas versiones, **asegúrese, antes de realizar cualquier cambio, de que la nueva versión de PHP deseada es compatible con su sitio web.**
>

### Etapa 1: asegurarse de que su sitio web es compatible

Aunque OVHcloud gestiona la instalación de las últimas versiones de PHP en sus servidores, usted es el webmaster quien debe asegurarse de que su sitio web está **siempre actualizado** y, por tanto, es compatible con las últimas versiones de PHP. Existen dos formas de hacerlo, en función del sitio web:

**Caso n°1: Si utiliza un sitio web "llave en mano" como un sistema de gestión de contenidos (content management system o CMS)**, como WordPress, Joomla, PrestaShop o Drupal: 

Consulte la documentación oficial creada por el editor del CMS que utilice.
- Tome nota de la información relativa a los requisitos técnicos necesarios para el funcionamiento de su CMS, así como de la operación necesaria para actualizarlo.
Actualice su CMS para asegurarse de que la nueva versión es compatible con el alojamiento de OVHcloud.

**Caso n°2: si utiliza un sitio web basado en una solución personalizada**: 

Acceda al webmaster que haya creado el sitio web.
- Si desea más información sobre las migraciones de versión, consulte la [documentación oficial de PHP](http://php.net/manual/en/appendices.php){.external}.
Actualice el código del sitio web, garantizando que siga siendo compatible con el alojamiento de OVHcloud, si es necesario.

Si lo necesita, puede consultar la versión actual de PHP del alojamiento de dos formas distintas:

- **Desde el área de cliente de OVHcloud** : conéctese al [área de cliente](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}, acceda a la sección `Web Cloud`{.action}, haga clic en `Alojamientos`{.action} y seleccione el alojamiento correspondiente. En la pestaña `Información general`{.action}, localice la versión a continuación de *Versión PHP global*. 

![phpversion](images/change-php-version-step1.png) {.thumbnail}

> [!primary]
Si aparece un círculo de color azul, espere unos minutos a que se actualice la versión.
>

- **a través de un script** : Cree un script **.php** que contenga únicamente el código `<?php phpinfo(); ?>`. Haga clic en su [espacio de almacenamiento FTP](https://docs.ovh.com/us/es/hosting/conexion-espacio-almacenamiento-ftp-alojamiento-web/) y llámelo accediendo a su dirección URL completa.

Si no puede comprobar que su sitio web es compatible con la nueva versión de PHP y **aunque desaconseja este método**, puede intentar cambiar la versión actual y volver atrás. pero corre el riesgo de generar un posible fallo de funcionamiento en su sitio web. Por otra parte, incluso si este se sigue mostrando después del cambio, es posible que alguna de sus funcionalidades específicas se vea afectada y se torne inoperante. 

Una vez que esté listo para realizar el cambio, vaya al paso 2.

#### Etapa 2: cambiar la versión de PHP de un alojamiento web

Existen dos formas de modificar la versión de PHP de un alojamiento web:

- **a través de un asistente de configuración desde el área de cliente** : una vez que se haya conectado a su [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws), podrá elegir la nueva versión de PHP deseada entre otros parámetros. Para más información, consulte nuestra guía [Modificar la configuración de un alojamiento web](https://docs.ovh.com/us/es/hosting/cambiar_el_entorno_de_ejecucion_de_un_alojamiento/){.external} .

- **Modificando manualmente un archivo en su espacio de almacenamiento** : esta solución es más técnica y necesita estar conectado a su [espacio de almacenamiento FTP](https://docs.ovh.com/us/es/hosting/conexion-espacio-almacenamiento-ftp-alojamiento-web/), donde deberá editar el archivo.ovhconfig`. Para más información, consulte nuestra guía ["Configurar el archivo .ovhconfig de un alojamiento web"](https://docs.ovh.com/us/es/hosting/configurar-archivo-ovhconfig/){.external} .

> [!primary]
>
> La modificación de la versión de PHP a través de un archivo ".htaccess" ya no es posible en los últimos planes de [hosting de OVHcloud](https://www.ovhcloud.com/es/web-hosting/){.external}.<br>
> El comando que permite cambiar la versión de PHP en el archivo ".htaccess" no permite utilizar las versiones recientes de PHP en nuestras infraestructuras.<br>
> Para ello, deberá utilizar obligatoriamente el archivo.`ovhconfig` con ayuda de nuestra documentación ["Configurar el archivo .ovhconfig de mi alojamiento web"](https://docs.ovh.com/us/es/hosting/configurar-archivo-ovhconfig/){.external}.
>

Algunas versiones de PHP sólo funcionan con algunos entornos de ejecución. A continuación encontrará las versiones de PHP disponibles en los alojamientos compartidos de OVHcloud y [los entornos de ejecución](https://docs.ovh.com/us/es/hosting/cambiar_el_entorno_de_ejecucion_de_un_alojamiento/) compatibles:

|Versiones PHP|Entornos de ejecución compatibles|
|---|---|
|5.4, 5.5, 5.6 y 7.0|Legacy, Stable|
|7.1, 7.2 y 7.3|Stable|
|7.4, 8.0 y 8.1 (bêta)|stable64|

## Más información

[Modificar la configuración de un alojamiento web](https://docs.ovh.com/us/es/hosting/cambiar_el_entorno_de_ejecucion_de_un_alojamiento/){.external}

[Configurar el archivo .ovhconfig de un alojamiento web](https://docs.ovh.com/us/es/hosting/configurar-archivo-ovhconfig/){.external}

[Conectarse al espacio de almacenamiento de su alojamiento web](https://docs.ovh.com/us/es/hosting/conexion-espacio-almacenamiento-ftp-alojamiento-web/){.external}

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](https://partner.ovhcloud.com/es/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](https://www.ovhcloud.com/es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.