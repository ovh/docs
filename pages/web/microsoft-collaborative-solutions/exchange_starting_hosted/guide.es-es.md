---
title: 'Primeros pasos con el servicio Hosted Exchange'
excerpt: 'Cómo configurar por primera vez el servicio Hosted Exchange'
updated: 2023-03-06
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

<style>
.w-640 {
  max-width:640px !important;
}
</style>

**Última actualización: 06/03/2023**

## Objetivo

El servicio Hosted Exchange le permite disfrutar de direcciones de correo electrónico profesionales que facilitan el trabajo colaborativo gracias a funciones como la sincronización del calendario o de los contactos.

**Esta guía explica cómo configurar por primera vez el servicio Hosted Exchange.**

## Requisitos

- Tener contratado un plan [Hosted Exchange](https://www.ovhcloud.com/es-es/emails/hosted-exchange/).
- Haber recibido el email de confirmación de la instalación de la solución Hosted Exchange.
- Tener un dominio.
- Estar conectado al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

## Procedimiento

### Acceder a la gestión del servicio

Una vez que el servicio Hosted Exchange haya sido creado y esté disponible, puede administrarlo desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

Para ello, Haga clic en `Microsoft`{.action}, luego en `Exchange`{.action} y seleccione el servicio Hosted Exchange correspondiente.

> [!primary]
>
> El nombre de los servicios Hosted Exchange comienza por «**hosted-**», contiene una parte del ID de cliente y termina por una cifra (1 para el primer servicio Hosted Exchange instalado, 2 para el segundo y así sucesivamente).
>

### Configuración del servicio por primera vez

Si todavía no ha utilizado el servicio, deberá configurarlo por primera vez. que le permitirá acceder a las nuevas direcciones de correo Exchange.

Para ello, la primera vez que acceda al panel de gestión de su servicio Hosted Exchange, aparecerá un asistente de configuración. Haga clic en `Empezar`{.action} para configurar el servicio.

Este asistente de configuración le permitirá realizar diversas acciones. En función de su situación:

#### Elegir un dominio

Seleccione uno de sus dominios de la lista o marque la casilla `Mi dominio no aparece en la lista de abajo` para introducir un dominio que no esté gestionado en su área de cliente **pero que pueda configurar**.

![Correo electrónico](images/exchange-wizard01.png){.thumbnail}

#### ¿Solo va a utilizar el servicio Exchange de OVH con este dominio?

La pregunta "¿**Va a utilizar únicamente la solución Exchange de OVH con este dominio?** " determinará el tipo de configuración del dominio. 

- Si utiliza un servicio Exchange solo o con otros servicios de **correo de OVHcloud**, podrá configurarlo automáticamente o manualmente solo utilizando los servidores de correo de OVHcloud.
- Si utiliza su servicio Exchange como complemento de un servicio de correo **externo a los productos de correo de OVHcloud**, deberá introducir, bajo la mención `Servidor de relay (SMTP)`, la URL del servidor de recepción de su servicio de correo externo.

![Correo electrónico](images/exchange-wizard02.png){.thumbnail}

#### ¿Cómo quiere configurar su zona DNS?

- **Configuración automática**: Si el dominio está gestionado por OVHcloud y es el mismo ID de cliente que el servicio Exchange, se configurará automáticamente en la zona DNS del dominio.
- **Configuración manual**: El dominio no se gestiona en el mismo área de cliente que su plataforma, sino que se gestiona con otro proveedor de dominios, o usted mismo quiere realizar la configuración.<br> Una vez finalizado el proceso de configuración, podrá consultar los valores que deberá introducir, o bien en la sección `Dominios asociados`{.action} de su plataforma.

![Correo electrónico](images/exchange-wizard03.png){.thumbnail}

#### **Configuración de las cuentas Exchange**

Asigne un nombre a sus direcciones de correo Exchange y añada información adicional.

![Correo electrónico](images/exchange-wizard04.png){.thumbnail}

#### **Caso particular**

- Si configura su plataforma Exchange con un dominio no gestionado en el mismo área de cliente que esta plataforma, o con otro proveedor de dominio, tendrá la siguiente ventana:<br>
![Correo electrónico](images/exchange-wizard05.png){.thumbnail .w-640}<br>
Esta ventana le invita a añadir un **registro CNAME** en la zona DNS del dominio. Este registro permite comprobar que usted gestiona el dominio.<br>

> [!warning]
> Sin esta validación por registro CNAME, no es posible utilizar la plataforma con este nombre de dominio.

- Si configura su plataforma Exchange con un dominio no gestionado en el mismo área de cliente que esta plataforma, gestionada con otro proveedor de dominio, o si ha optado por configurar manualmente su nombre de dominio, se mostrará la siguiente ventana:<br>
![Correo electrónico](images/exchange-wizard06.png){.thumbnail .w-640}<br>
Aquí encontrará los valores que deberá introducir en su zona DNS. Los **registros MX** corresponden a la recepción del correo. El **registro SRV** se corresponde con la configuración automática de las direcciones de correo.

Consulte la configuración de su zona DNS relativa a su servicio de correo en nuestra página "[Añadir un registro MX a la configuración del dominio](/pages/web/domains/dns_zone_mx)".

### Añadir dominios adicionales (opcional)

Una vez que haya configurado por primera vez el dominio, también puede configurar, a través del asistente, dominios adicionales si así lo desea y si todavía no lo ha hecho.

> [!warning]
>
> Todas las direcciones creadas en el servicio Exchange se mostrarán en el directorio de las direcciones del servicio, incluidas aquellas que posean un dominio diferente. Si desea crear directorios separados, deberá contratar un nuevo servicio Hosted Exchange para el o los dominios en cuestión.
>

Para añadir un nuevo dominio, seleccione el servicio Hosted Exchange correspondiente en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) y abra la pestaña `Dominios asociados`{.action}. Se mostrará una tabla con los dominios ya configurados o que estén siendo configurados en el servicio. Haga clic en el botón `Añadir un dominio`{.action} y siga los pasos que se le indican para añadir el dominio.

Para más información, consulte la guía [Añadir un dominio a un servicio Exchange](/pages/web/microsoft-collaborative-solutions/exchange_adding_domain).

> [!primary]
>
> Si es necesario realizar alguna acción concreta para configurar el dominio, se mostrará una etiqueta roja en la columna `Diagnóstico`{.action}. Al hacer clic, se mostrarán las operaciones necesarias. Si el dominio no utiliza la configuración de OVHcloud (es decir, si no utiliza los servidores DNS de OVHcloud), deberá realizar los cambios necesarios desde el panel que le ofrezca su proveedor para gestionar sus servidores DNS. 
>

![Añadir un dominio](images/first-steps-hosted-exchange-add-domain.png)

### Configurar cuentas Exchange adicionales (opcional)

Puede configurar cuentas adicionales si lo desea y si no lo ha hecho ya a través del asistente.

Para ello, acceda al servicio Hosted Exchange correspondiente en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) y abra la pestaña `Cuentas de correo`{.action}. Se mostrará una tabla con las cuentas de correo ya configuradas o que estén siendo configuradas en el servicio.

La tabla mostrará las cuentas pendientes de configurar con el formato *@configureme.me*. Para configurarlas, haga clic en el icono con forma de lápiz y siga los pasos que se le indican.

> [!primary]
>
> Repita esta operación para cada cuenta que tenga. Puede contratar nuevas contrataciones haciendo clic en el botón `Acciones`{.action} y seleccionando `Contratar cuentas`{.action}.
>

![Añadir una cuenta de correo](images/first-steps-hosted-exchange-add-account.png)

### Utilizar las direcciones de correo

Una vez que haya configurado las cuentas, ¡ya puede utilizarlas! Para ello, OVHcloud pone a su disposición el webmail **Outlook Web Application** (OWA). Puede acceder a ella en la dirección <https://www.ovhcloud.com/es-es/mail/>. Para acceder, introduzca las claves de su dirección de correo electrónico. Para más información, consulte las guías de OVHcloud sobre las [Soluciones colaborativas Microsoft](/products/web-cloud-email-collaborative-solutions-microsoft-exchange), en el apartado relativo a Outlook Web Application (OWA).

Si desea configurar su cuenta de correo electrónico en un cliente de correo o un dispositivo externo (smartphone o tablet), consulte las guías de OVHcloud sobre las [soluciones colaborativas Microsoft](/products/web-cloud-email-collaborative-solutions-microsoft-exchange). Para un uso óptimo de su cuenta Exchange en un cliente de correo de escritorio, asegúrese de que este sea compatible con el servicio.

OVHcloud ofrece, desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), licencias Outlook opcionales con su cuenta de correo Exchange.

Para suscribirse, consulte nuestra página "[Obtener una licencia Outlook para Exchange](/pages/web/microsoft-collaborative-solutions/office_outlook_license)". 

También puede consultar [las licencias Office 365](https://www.ovhcloud.com/es-es/collaborative-tools/microsoft-365/). Si desea disfrutar del cliente de correo Outlook o de otros programas de la suite Office, le recomendamos una de estas soluciones.

> [!primary]
>
> Tanto si utiliza un cliente de correo web como uno de escritorio compatible, Exchange sincroniza todos los parámetros de configuración (filtros, firmas, carpetas...).
> Así pues, si utiliza Exchange en tres dispositivos y a través de tres modos de conexión distintos (webmail, distintos clientes de correo compatibles), toda su información estará disponible simultáneamente.
>

### Configuración de las funciones colaborativas (opcional)

Una vez que el servicio Hosted Exchange haya sido configurado y esté operativo, ya puede activar las funcionalidades de colaboración en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es). Estas funciones permiten crear recursos (salas de reuniones, equipamiento...) y grupos, entre otros. 

Para activar las distintas funciones, seleccione el servicio Hosted Exchange correspondiente en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) y abra la pestaña correspondiente a la acción que quiera realizar.

Para más información sobre estas funciones, consulte las guías de OVH sobre las [soluciones colaborativas Microsoft](/products/web-cloud-email-collaborative-solutions-microsoft-exchange).

## Más información

[Crear un grupo de contactos](/pages/web/microsoft-collaborative-solutions/feature_groups)

[Crear y utilizar una cuenta compartida](/pages/web/microsoft-collaborative-solutions/feature_shared_account)

[Crear y utilizar cuentas de recursos](/pages/web/microsoft-collaborative-solutions/feature_resources)

[Establecer permisos sobre una cuenta de correo](/pages/web/microsoft-collaborative-solutions/feature_delegation)

[Compartir una carpeta desde la interfaz OWA](/pages/web/microsoft-collaborative-solutions/owa_directory_sharing)

[Gestionar la facturación de las cuentas Exchange](/pages/web/microsoft-collaborative-solutions/manage_billing_exchange)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.