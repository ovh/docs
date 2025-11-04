---
title: "Primeros pasos con el producto Zimbra"
excerpt: "Cómo empezar a utilizar la solución Zimbra desde el área de cliente de OVHcloud"
updated: 2025-11-04
---

<style>
.w-500 {
  max-width:500px !important;
}
</style>

## Objetivo

Con el servicio Zimbra, OVHcloud le ofrece una plataforma de mensajería en colaboración open source que ofrece todas las funcionalidades necesarias para un uso profesional. Esta guía explica los pasos necesarios para configurar una cuenta de correo electrónico de Zimbra.

**Descubra cómo empezar con la solución de correo electrónico Zimbra**

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/PdKKoTlJkec?si=RU3CRnpLQsqhxbF2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Requisitos

- Tener una cuenta de correo en nuestra solución de correo Zimbra OVHcloud.
- Tener un [dominio de OVHcloud](/links/web/domains).
- Estar conectado a su [área de cliente de OVHcloud](/links/manager).

## Procedimiento

**Contenido**

- [Acceder a la gestión de su servicio](#zimbra-access)
- [Configurar el servicio Zimbra](#zimbra-conf)
- [Organizaciones](#organizations)
    - [Crear organización](#organizations-create)
    - [Filtrar por organización](#organizations-filters)
- [Dominios](#domains)
    - [Añadir un dominio](#domains-add)
    - [Modificar un dominio](#domains-modify)
- [Cuentas de correo electrónico](#emails)
    - [Crear una cuenta de correo electrónico](#emails-create)
    - [Cambiar de plan](#emails-offer)
- [Consultar la cuenta de correo](#emails-consult)
- [Redirecciones](#redirections)
- [Alias](#alias)
- [Respuestas automáticas](#autoreply)

### Acceder a la gestión de su servicio <a name="zimbra-access"></a>

1. Conéctese al [área de cliente de OVHcloud](/links/manager).
1. Acceda al apartado `Web Cloud`{.action}.
1. Haga clic en `Zimbra Mail`{.action}.

![zimbra](images/zimbra_general_information.png){.thumbnail .w-500}

### Configurar su servicio Zimbra <a name="zimbra-conf"></a>

Antes de empezar a configurar las cuentas de correo de Zimbra, deberá analizar los tres elementos que estructuran jerárquicamente el servicio Zimbra:

- [**Organización**](#organizations): permite agrupar los nombres de dominio para asociarlos.
- [**Nombre de dominio**](#domains): es indispensable para crear una cuenta de correo. Debe gestionar al menos uno desde el área de cliente de OVHcloud y añadirlo a su servicio Zimbra.
- [**Cuentas de correo electrónico**](#emails): Utilizando los nombres de dominio añadidos a su servicio Zimbra, podrá crear una dirección de correo electrónico.

> [!primary]
>
> La *organización* se utiliza para representar una entidad (empresa, asociación, proyecto personal, etc.). Permite el aislamiento de las cuentas de correo, la aplicación de políticas de seguridad específicas (funcionalidad futura) y la delegación de los permisos a una organización (funcionalidad futura). El uso de organizaciones facilita la navegación y la gestión de la plataforma Zimbra.

El diagrama siguiente resume la relación jerárquica entre los elementos mencionados anteriormente.

![zimbra](images/zimbra_organization.png){.thumbnail .w-500}

### Organizaciones <a name="organizations"></a>

Si añade un gran número de dominios a su servicio Zimbra, puede ser útil reagruparlos asociándolos a una  «organización». Desde su servicio Zimbra, haga clic en `Organización`{.action}.

![zimbra](images/zimbra_organization_tab.png){.thumbnail .w-500}

#### Crear una organización <a name="organizations-create"></a>

Para crear una organización, haga clic en `Agregar organización`{.action}. Establezca el `Nombre` de la organización y el `Label de la organización`, que es una breve descripción de la organización que le permite identificarse al filtrar la visualización de los nombres de dominio y cuentas de correo de su servicio Zimbra.

![zimbra](images/zimbra_organization_add.png){.thumbnail .w-500}

#### Filtrar por organización <a name="organizations-filters"></a>

Desde las fichas `Organización`{.action}, `Dominio`{.action} y `Cuentas de correo`{.action}, al hacer clic en el label de una organización, se crea un filtro que muestra únicamente los elementos asociados a esa organización.

Observe que el filtro se aplica cuando aparece el label junto al nombre del servicio Zimbra.

Para retirar el filtro, simplemente haga clic en la cruz del filtro.

![zimbra](images/zimbra_organization_filter.png){.thumbnail .w-500}

### Dominios <a name="domains"></a>

> [!warning]
>
> Para un funcionamiento óptimo cuando utilice el mismo nombre de dominio entre los productos OVHcloud [Exchange](/links/web/emails-hosted-exchange), [E-mail Pro](/links/web/email-pro) y Zimbra, es necesario configurar el dominio en «no autoritativo». Para más información sobre cómo configurar un dominio sin autorización en una plataforma Exchange o Email Pro, consulte nuestra guía [Añadir un dominio a una plataforma de correo](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain).

En esta pestaña podrá consultar todos los dominios añadidos al servicio Zimbra. Es necesario gestionarlos desde el área de cliente de OVHcloud para poder añadirlos.

En la tabla de dominios encontrará dos datos:

- **Organización**: esta se determina al añadir el dominio. En esta columna encontrará automáticamente la etiqueta.
- **Número de cuentas**: Aquí encontrará todas las cuentas creadas con el dominio correspondiente.

![zimbra](images/zimbra_domain_tab.png){.thumbnail .w-500}

#### Añadir un dominio <a name="domains-add"></a>

> [!warning]
>
> Es necesario [crear una organización](#organisations) para poder añadir un dominio al servicio Zimbra.

Para añadir un dominio a su servicio Zimbra, haga clic en la pestaña `Dominio`{.action} y luego en `Añadir un dominio`{.action}.

Seleccione una organización en el menú desplegable y, a continuación, seleccione una de las dos opciones siguientes:

- **Seleccionar un dominio de la lista** (dominio interno): en esta lista, puede encontrar los dominios que gestiona desde el área de cliente de OVHcloud.
- **Introducir un dominio no gestionado por su cuenta de OVHcloud** (dominio externo): introduzca un dominio no gestionado en su área de cliente de OVHcloud o registrado en otro agente registrador y gestionado por usted.

Seleccione la pestaña correspondiente a su elección:

> [!tabs]
> **Dominio interno**
>>
>> Seleccione de la lista un dominio gestionado desde el área de cliente de OVHcloud.
>>
>> ![zimbra](images/zimbra_domain_add_internal01.png){.thumbnail .w-500}
>>
>> Para configurar la zona DNS, seleccione una de las dos opciones siguientes:
>>
>> - **Configuración recomendada**: su zona DNS se configurará automáticamente. Esta opción es adecuada si no ha configurado ninguna solución de correo en su dominio.
>> - **Configuración personalizada**: Si ya ha configurado una solución de correo en su dominio, puede elegir los elementos que le interesen.
>>    - *Configurar el registro MX automáticamente*: Permite introducir automáticamente los servidores de recepción de OVHcloud (se aplica a todos los productos de correo de OVHcloud).
>>    - *Configurar el registro SPF automáticamente*: Permite introducir automáticamente el registro que autoriza a los servidores de correo de envío de OVHcloud a transmitir sus mensajes de correo. Este registro es válido para todas las soluciones de correo de OVHcloud.
>>    - *Configurar el registro DKIM automáticamente*: Permite introducir automáticamente los registros necesarios para autenticar los envíos de correo.
>>    - *Configurar el registro SRV automáticamente* : permite la configuración automática de los parámetros de una cuenta de correo cuando la añade a un software de mensajería (Outlook, Mail para Mac, Thunderbird, etc.).
>>
>> ![zimbra](images/zimbra_domain_add_internal02.png){.thumbnail .w-500}
>>
>> Haga clic en `Confirmar`{.action} para añadir el dominio e iniciar el proceso de configuración.
>>
> **Dominio externo**
>>
>> Introduzca un dominio no gestionado en su área de cliente. Asegúrese de que tiene permisos para modificar la zona DNS del dominio.
>>
>> Haga clic en `Confirmar`{.action}
>>
>> ![zimbra](images/zimbra_domain_add_external01.png){.thumbnail .w-500}
>>
>> En la siguiente ventana, introduzca el registro CNAME en la zona DNS del dominio para que sea validado en su plataforma Zimbra.
>>
>> ![zimbra](images/zimbra_domain_add_external02.png){.thumbnail .w-500}
>>
>> > [!warning]
>> >
>> > Después de 48 horas, si el CNAME no está visible en la zona DNS, la operación se cancela. Será necesario volver a intentar la operación.

#### Editar un dominio <a name="domains-modify"></a>

Puede cambiar el nombre de dominio para cambiar su organización o comprobar los registros DNS asociados.

En la pestaña `Dominio`{.action} del servicio Zimbra, haga clic en el icono &#8285; situado al final de la línea correspondiente al dominio para ver las opciones.

![zimbra](images/zimbra_domain_modify01.png){.thumbnail .w-500}

- Haga clic en `Configurar`{.action} para modificar la organización asociada a su dominio.
- Haga clic en `Diagnósticos`{.action} para ver la interfaz de diagnóstico de los registros DNS del dominio. Es necesario asegurarse de que no se muestran alertas para cada uno de los registros DNS mencionados en las fichas. Siga las instrucciones detalladas en cada ficha de alertas para configurar los registros DNS:
    - **MX**: Indispensable para recibir mensajes de correo.
    - **SPF**: Seguridad requerida por la mayoría de los servidores de correo de destino para legitimar los servidores de envío de correo de OVHcloud con su dominio.
    - **DKIM**: Permite implementar un sistema de firma para cada mensaje de correo electrónico enviado por su servicio Zimbra. El destinatario comprueba la firma con la clave pública visible en la zona DNS.
     - **SRV** : Facilita la configuración de su cuenta Zimbra cuando la configura en un software de mensajería (Outlook, Mail para Mac, Thunderbird, etc.).

![zimbra](images/zimbra_domain_modify02.png){.thumbnail .w-500}

### Cuentas de correo <a name="email"></a>

La gestión de las direcciones de correo de su servicio Zimbra se realiza desde la pestaña `Cuentas de correo`{.action}. La tabla muestra las cuentas de correo que tiene en el servicio, así como 3 datos para cada una de ellas:

- **Organización**: si el nombre de dominio de su cuenta de correo está asociado a una organización, su etiqueta aparecerá automáticamente en esta columna.
- **Oferta**: como su servicio Zimbra puede alojar varios productos Zimbra en su interior, encontrará la oferta asociada a su cuenta de correo en esta columna.
- **Tamaño**: esta columna muestra la capacidad total de su cuenta de correo y el espacio que ocupa actualmente.

En la parte superior de esta página también encontrará un enlace al [Webmail](/links/web/email) para poder conectarse directamente al contenido de su cuenta de correo desde su navegador de internet.

![zimbra](images/zimbra_emailaccounts_tab.png){.thumbnail .w-500}

#### Crear una cuenta de correo <a name="emails-create"></a>

Para crear una cuenta de correo en su servicio Zimbra, haga clic en la pestaña `Cuentas de correo`{.action} y seleccione `Crear una cuenta`{.action}.

Complete la información que se muestra.

- **Cuenta de correo**: introduzca el *nombre de la cuenta* que llevará su dirección de correo (por ejemplo, su nombre.apellido) y *seleccione un nombre de dominio* en el menú desplegable.

> [!warning]
>
> La elección del nombre de su dirección de correo electrónico debe respetar las siguientes condiciones:
>
> - Mínimo 2 caracteres.
> - Máximo 32 caracteres.
> - Sin caracteres acentuados.
> - Sin caracteres especiales, excepto los siguientes: `.`, `+`, `-` y `_`.

- **Nombre**: introduzca un nombre.
- **Nombre**: introduzca un nombre.
- **Nombre a mostrar**: Introduzca el nombre que quiera que figure como remitente cuando envíe mensajes desde esta dirección.
- **Contraseña**: Establezca una contraseña segura que incluya (como mínimo) 9 caracteres, una mayúscula, una minúscula y una cifra. Por motivos de seguridad, no utilice la misma contraseña dos veces. Elija un nombre que no guarde relación con sus datos personales (por ejemplo, no incluya su nombre, apellidos ni fecha de nacimiento). Cámbielo regularmente.

> [!warning]
>
> La elección de la contraseña debe respetar las siguientes condiciones:
>
> - mínimo 10 caracteres.
> - Máximo 64 caracteres.
> - Mínimo 1 mayúscula.
> - Mínimo 1 carácter especial.
> - Sin caracteres acentuados.

Haga clic en `Confirmar`{.action} para crear la cuenta.

![zimbra](images/zimbra_emailaccounts_add.png){.thumbnail .w-500}

### Cambiar de plan <a name="emails-offer"></a>

Es posible cambiar el plan de cualquier cuenta Zimbra por un plan superior o inferior.

1. Inicie sesión en su [área de cliente de OVHcloud](/links/manager).
1. Vaya a la sección `Web Cloud`{.action}.
1. Haga clic en `Zimbra Mail`{.action}.
1. Haga clic en la pestaña `Cuenta de correo`{.action}.
1. A la derecha de la cuenta de correo para la que desea cambiar a un plan superior, haga clic en `⁝`{.action}.
1. Haga clic en `Cambiar de plan`{.action}.

![Zimbra](images/zimbra-change-offer.png){.thumbnail .w-500}

> [!warning]
>
> Antes de cambiar a un plan inferior, asegúrese de los siguientes puntos:
>
> - No hay ningún archivo almacenado en su volumen de almacenamiento "Breifcase" si cambia a el plan Starter.
> - El contenido de su cuenta de correo debe ser inferior a 15 Go si cambia a el plan Starter.

### Consultar su cuenta de correo <a name="mail-consult"></a>

Para consultar su cuenta de correo:

- Conéctese al [webmail](/links/web/email) desde un navegador de internet e introduzca su dirección de correo y contraseña. Para más información, consulte nuestra página «[Utilizar el webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)».
- Configure un programa de mensajería en su ordenador, smartphone o tablet. Consulte nuestra página «[Configurar una dirección de correo electrónico de Zimbra en un cliente de correo](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_apps)».

### Redirecciones <a name="redirecciones"></a>

Para crear una redirección en una dirección de correo electrónico de Zimbra, conéctese al [webmail](/links/web/email).
La creación de una redirección se realiza a través de reglas de bandeja de entrada, denominadas «filtros» en el webmail. Estas reglas, que se aplican al recibir un email, permiten transferir o redirigir un email.

Para redirigir los emails de su cuenta Zimbra hacia otra dirección de correo, vamos a aplicar una regla de transferencia. Siga las pestañas que aparecen a continuación para activar la redirección.

> [!primary]
>
> En el ejemplo siguiente, hemos decidido redirigir todos los mensajes entrantes a otra dirección de correo electrónico. Para entender el ejemplo en las capturas de pantalla, hemos iniciado sesión en **zimbra@mydomain.ovh** y queremos redirigir los correos electrónicos de esta cuenta a **address@example.com**.

> [!tabs]
> **Paso 1**
>>
>> Haga clic en el botón &#9881; en la esquina superior derecha de su ventana de webmail y seleccione `Parámetros`{.action}.
>>
>> ![zimbra](images/zimbra_settings01.png){.thumbnail .w-500}
>>
> **Paso 2**
>>
>> Haga clic en la sección `Filtros`{.action} en la ventana de configuración y, a continuación, haga clic en el botón `Añadir un filtro`{.action}.
>>
>> ![zimbra](images/zimbra_redirection02.png){.thumbnail .w-500}
>>
> **Paso 3**
>>
>> - En primer lugar, haga clic en <u>Modo avanzado</u> en la parte superior derecha para aplicar esta regla.
>> - Asigne un nombre al filtro en el cuadro `Nombre del filtro`.
>> - Deje el menú desplegable en `todas` en la frase «Si un mensaje entrante cumple ... estas condiciones».
>> - En el primer menú desplegable de reglas, seleccione `A` (To), deje `contiene` (contains) e introduzca la dirección de correo electrónico en la que ha iniciado sesión en el cuadro de la derecha.
>> - Bajo el epígrafe «Entonces» (Then), seleccione `Reenviar a `(Forward to) en el menú desplegable e introduzca la dirección de correo electrónico de destino.
>> - Haga clic en `+ Añadir acción`{.action}(Add an action) más abajo y seleccione `Mover a recepción` (Keep in Inbox).
>> - Haga clic en `Guardar`{.action} en la ventana de su filtro y también en la ventana de configuración.
>>
>> ![zimbra](images/zimbra_redirection03.png){.thumbnail .w-500}
>>

Para más información sobre el uso del webmail Zimbra, consulte nuestra guía «[Utilizar el webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)».

### Alias <a name="alias"></a>

Crear un alias para su dirección de correo electrónico le permite comunicar una dirección «máscara» a sus contactos, sin tener que comunicar su dirección de correo electrónico personal al remitente.

Puede crear un alias desde el [espacio de cliente OVHcloud](/links/manager), Haga clic en los pasos a continuación:

> [!tabs]
> **Paso 1**
>>
>> - Haga clic en la pestaña `Cuentas de correo`{.action} de su servicio Zimbra.
>> - Haga clic en el botón &#8942; de la cuenta de correo correspondiente.
>> - Haga clic en `Modificar`{.action}.
>>
>> ![zimbra](images/zimbra_alias01.png){.thumbnail .w-500}
>>
> **Paso 2**
>>
>> Se abrirá la ventana de configuración de su cuenta de correo, haciendo clic en la pestaña `Alias`{.action}.
>>
>> ![zimbra](images/zimbra_alias02.png){.thumbnail .w-500}
>>
> **Paso 3**
>>
>> La siguiente ventana contiene la lista de alias que puede asociar a la cuenta correspondiente. Haga clic en el botón `Crear un Alias`{.action}.
>>
>> ![zimbra](images/zimbra_alias03.png){.thumbnail .w-500}
>>
> **Paso 4**
>>
>> Indique la dirección del alias y seleccione uno de los dominios asociados al servicio Zimbra.
>>
>> ![zimbra](images/zimbra_alias04.png){.thumbnail .w-500}
>>

### Respuestas automáticas <a name="autoreply"></a>

Si tiene que ausentarse y no tiene la posibilidad de procesar sus mensajes de correo, es posible implementar un mensaje de ausencia. Siga los pasos que se indican a continuación:

- Haga clic en el botón &#9881; en la esquina superior derecha de su ventana de webmail y luego en `Parámetros`{.action}.

![zimbra](images/zimbra_settings01.png){.thumbnail .w-500}

- Haga clic en la sección `Ausente del escritorio` de la ventana de parámetros.
- Marque la casilla «Activar la respuesta automática durante estas fechas (incluidas)».
- Complete la fecha de inicio de la ausencia con la indicación «De».
- Desactive la casilla de verificación «Sin fecha de finalización» si desea determinar una fecha de finalización de ausencia y defínala.
- Introduzca su mensaje de ausencia.
- Haga clic en `Guardar`{.action} para finalizar la puesta en marcha de su mensaje de ausencia.

![zimbra](images/zimbra_autoreply01.png){.thumbnail .w-500}

Para más información sobre el uso del webmail Zimbra, consulte nuestra guía «[Utilizar el webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)»

## Más información <a name="go-further"></a>

[Configurar una dirección de correo electrónico de Zimbra en un cliente de correo](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_apps)

[Utilizar el webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[FAQ sobre la solución Zimbra OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).