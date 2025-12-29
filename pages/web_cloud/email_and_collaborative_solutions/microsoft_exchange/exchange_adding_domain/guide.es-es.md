---
title: 'Añadir un dominio a un servicio Exchange'
excerpt: 'Cómo añadir un dominio a un servicio Exchange'
updated: 2025-04-28
---

<style>
.w-600 {
  max-width:600px !important;
}
.h-400 {
  max-height:400px !important;
}
</style>

## Objetivo

Añadir un dominio a un servicio Exchange es un requisito indispensable para poder utilizar las cuentas de dicho servicio. También es posible añadir varios dominios a un servicio Exchange o Email Pro.

**Esta guía explica cómo añadir un dominio a una plataforma Exchange o Email Pro.**

## Requisitos

- Tener una [solución Exchange](/links/web/emails) o [Email Pro](/links/web/email-pro).
- Tener uno o más dominios.
- Estar en condiciones de modificar la configuración del dominio ([zona DNS](/pages/web_cloud/domains/dns_zone_edit)).
- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager).

## Procedimiento

### Acceder a la gestión del servicio

> [!tabs]
> **Exchange**
>>
>> 1. Conéctese al [área de cliente de OVHcloud](/links/manager).
>> 1. Acceda al apartado `Web Cloud`{.action}.
>> 1. En la sección `MICROSOFT`, haga clic en `Exchange`{.action}.
>> 1. Seleccione la plataforma correspondiente.
>>
> **Email Pro**
>>
>> 1. Conéctese a su [área de cliente de OVHcloud](/links/manager).
>> 1. Haga clic en la pestaña `Web Cloud`{.action}.
>> 1. Haga clic en `Email Pro`{.action}.
>> 1. Seleccione la plataforma correspondiente.
>>

### Añadir un dominio

1. Haga clic en la pestaña `Dominios asociados`{.action} de su plataforma Exchange o Email Pro.
1. Se mostrará una tabla con los dominios asociados a su servicio.
1. Haga clic en el botón `Añadir un dominio`{.action}.

![Add Domain](images/add_domain_exchange_step1.png){.thumbnail .w-600}

> [!warning]
>
> Por defecto, todas las cuentas de correo de una plataforma están interconectadas. Todas las direcciones creadas en el servicio de correo podrán ver todas las direcciones de ese servicio en el directorio, incluidas las que tengan un nombre de dominio diferente. Para disociar la visualización de los dominios, es necesario contratar otra plataforma [Exchange o Email Pro](/links/web/emails) para el dominio o dominios en cuestión.
>

En la ventana de adición de dominio:

- **Seleccionar un dominio de la lista**: En el área de cliente de OVHcloud, podrá ver la lista de dominios que gestiona en su totalidad (o como mínimo, la zona DNS).

- **introducir un dominio no gestionado por su cuenta de OVHcloud**: Para poder configurar el servicio, deberá poder modificar la configuración del dominio, concretamente su zona DNS.

Una vez su elegido hecho, haga clic en el botón `Siguiente`{.action}.

![Add Domain](images/add_domain_exchange_step2.png){.thumbnail .w-600}

La ventana muestra ahora la información relativa a la configuración de los modos.

- **Si ha seleccionado en la lista un dominio gestionado por OVHcloud**, puede elegir entre dos modos.
    - **Configuración recomendada**: su zona DNS se configurará automáticamente. Es adecuado si no tiene una configuración específica en su zona DNS para los registros MX, SPF, DKIM y SRV.
    - **Configuración personalizada**: adecuado si ya ha configurado una solución de correo en su dominio. Puede elegir los elementos que le interesen.
        - Si desea utilizar un servicio de correo privado o externo a OVHcloud como complemento de esta plataforma de correo, introduzca el nombre de host del servidor de correo en el recuadro `URL del servidor de correo de destino`.
        - *Configurar el registro MX automáticamente*: Permite introducir automáticamente los servidores de recepción de OVHcloud (se aplica a todos los productos de correo de OVHcloud).
        - *Configurar el registro SPF automáticamente*: Permite introducir automáticamente el registro SPF para autorizar a los servidores de envío de correo de OVHcloud a transmitir sus mensajes de correo. Este registro es válido para todas las soluciones de correo de OVHcloud.
        - *Configurar el registro DKIM automáticamente*: Permite introducir automáticamente los registros necesarios para autentificar los envíos de correo.
        - *Configurar el registro SRV automáticamente*: Permite que el cliente de correo configure automáticamente las cuentas Exchange en el dominio.

![Add Domain](images/add_domain_exchange_step2-1b.png){.thumbnail .w-600}

- **Si ha introducido un dominio no gestionado por su cuenta de OVHcloud**, significa que el dominio, y en particular su zona DNS, no está gestionado desde el área de cliente de OVHcloud. También puede estar registrado en otro agente registrador. Para ello, deberá realizar la configuración directamente en su interfaz de gestión, independientemente de la siguiente opción elegida.
    - **Configuración recomendada**: adecuada si solo utiliza las soluciones de correo electrónico de OVHcloud.<br><br>
    - **Configuración personalizada**: si desea utilizar un servicio de correo privado o externo a OVHcloud como complemento de esta plataforma de correo, introduzca el nombre de host del servidor de correo en el recuadro `URL del servidor de correo de destino`.

![Add Domain](images/add_domain_exchange_step2-2.png){.thumbnail .w-600}

Una vez realizada la configuración, compruebe que la información mostrada es correcta y haga clic en `Confirmar`{.action} para añadir el dominio.

### Configurar el dominio (zona DNS)

Una vez asociado el dominio, asegúrese de que su configuración es correcta comprobando la información indicada en la tabla. La etiqueta verde indica que el dominio está configurado correctamente.<br>

Si la etiqueta es roja:

- **Si ha elegido la configuración automática al añadir el dominio**, puede durar unos minutos en mostrarse en el área de cliente de OVHcloud.

- **Si ha introducido un dominio no gestionado por su cuenta de OVHcloud**:
    - Haga clic en la etiqueta roja `MX`, `SRV`, `SPF` y `DKIM` para ver los cambios que debe realizar. Si el dominio no utiliza la configuración de OVHcloud (es decir, si no utiliza los servidores DNS de OVHcloud), deberá realizar los cambios necesarios desde el panel de administración del dominio.
    - En el marco de una etiqueta roja `CNAME`, consulte nuestra guía explicando cómo [crear un registro CNAME al añadir un dominio asociado](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_dns_cname).

![exchange](images/add_domain_exchange_step4.png){.thumbnail .w-600}

> [!primary]
>
> La modificación de la configuración de un dominio dura entre 4 y 24 horas en propagarse y ser efectiva.
>

Para comprobar que la configuración del dominio es correcta, vuelva a la tabla `Dominios asociados`{.action} del servicio. Si la etiqueta es ahora de color verde, el dominio está correctamente configurado. De lo contrario, es posible que la propagación aún no se haya finalizado.

### Cambiar el modo de un dominio asociado

Es posible modificar el modo de un dominio asociado en su plataforma. En primer lugar, es necesario entender la diferencia de funcionamiento entre los modos autoritario y no autoritario.

> [!primary]
>
> **Autoritario/no autoritario**
>
> - La elección del modo **autoritario** en su plataforma de correo (*Server A*) implica el alojamiento de todas las direcciones de correo de su nombre de dominio en esta plataforma.<br>Por ejemplo, si se envía un mensaje de correo a la dirección «*mary.johnson@mydomain.ovh*», el «*Server A*» devuelve un mensaje de error al remitente, ya que esta dirección no existe en el «*Server A*».<br><br>
>
> - El modo **no autoritario** de su plataforma de correo (*Server A*) permite dividir las direcciones de correo de su dominio entre su plataforma de correo principal (*Server A*) y otro servicio de correo (*Server B*).<br>Por ejemplo, si envía un mensaje de correo a la dirección «*mary.johnson@mydomain.ovh*», el *Server A* remitirá el correo electrónico al «*Server B*» para que este último pueda entregarlo.<br>
>
>![Authoritative](images/add_domain_exchange_authoritative.png){.thumbnail .w-600}

1. Haga clic en la pestaña `Dominios asociados`{.action}.
1. Haga clic en el botón `...`{.action} en la línea del dominio correspondiente.
1. Haga clic en `Configuración`{.action}.
1. Seleccione el modo que desee.

> [!warning]
>
> Si recibe el mensaje «**authoritative domain detected**» al añadir el dominio a su plataforma de correo, significa que el dominio está declarado en modo **autoritativo** en otra plataforma de correo. Deberá cambiarlo a modo **no autoritario** en ambas plataformas para que puedan coexistir.

### Configurar y utilizar las cuentas

Una vez que haya añadido los dominios, ya puede configurar sus cuentas de correo con ellos. Para ello, abra la pestaña `Cuentas de correo`{.action} de . Si lo necesita, puede contratar cuentas adicionales con el botón `Acción`{.action}/`Contratar cuentas`{.action} o `Añadir una cuenta`{.action}.

Le recordamos que todas las direcciones creadas en el servicio podrán ver en el directorio todas las direcciones del servicio, incluidas aquellas que tengan un nombre de dominio diferente.

Una vez que haya configurado las cuentas, ya puede empezar a utilizarlas. Para ello, OVHcloud pone a su disposición el **webmail**, disponible [aquí](/links/web/email). Para un uso óptimo de su dirección en un programa, asegúrese de que es compatible con el servicio.

Si desea configurar su dirección de correo electrónico en un cliente de correo o un dispositivo periférico, como un smartphone o una tablet, u obtener ayuda sobre las funcionalidades de su servicio de correo, consulte nuestras guías, que encontrará en las páginas [Exchange](/links/web/emails) y [E-mail Pro](/links/web/email-pro).

Puede adquirir licencias Outlook en el [área de cliente de OVHcloud](/links/manager) y licencias Office 365 en la página [Microsoft 365](/links/web/ms365). Le recomendamos una de estas soluciones si desea disfrutar del cliente de correo Outlook o de más programas de la suite Office, según sus necesidades.

### Eliminar un dominio de una plataforma

Si quiere eliminar un dominio asociado a su servicio Exchange o Email Pro, compruebe que este no esté asociado a cuentas de correo, alias, recursos, cuentas compartidas (solo en Exchange), grupos, contactos externos o pies de página siempre configurados. En ese caso, deberá **asociar las cuentas a otro dominio** de su plataforma o eliminarlas y/o **eliminarlas**.

> [!warning]
>
> Antes de eliminar cuentas de correo, asegúrese de que no se están utilizando. Puede que sea necesario realizar una copia de seguridad de estas cuentas. Si necesita ayuda, consulte la guía [Migrar manualmente una dirección de correo electrónico](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration), que explica cómo exportar los datos de una cuenta desde el área de cliente o desde un cliente de correo.

Acceda a la pestaña `Dominios asociados`{.action} de su plataforma. Desde la tabla, la columna `Cuentas` indica el número de cuentas asociadas a los dominios de su lista.

Si tiene cuentas de correo asociadas al dominio que desea desvincular, tiene dos posibilidades:

**Asociar las cuentas a otro dominio**:

1. Acceda a la pestaña `Cuentas de correo`{.action}.
1. A la derecha de las cuentas que quiera modificar, haga clic en el botón `...`{.action}.
1. Haga clic en `Editar`{.action}.

![exchange](images/add_domain_exchange_step8.png){.thumbnail .w-600}

4\. Desde la ventana de modificación, puede modificar el nombre de dominio asociado a la cuenta a través del menú desplegable.

![exchange](images/add_domain_exchange_step9.png){.thumbnail .w-600}

**Eliminar las cuentas de su plataforma**:

1. Acceda a la pestaña `Cuentas de correo`{.action}.
1. A la derecha de la cuenta que quiera eliminar, haga clic en el botón `...`{.action}.
1. Haga clic en `Restablecer esta cuenta`{.action} o `Restablecer`{.action}.

![exchange](images/add_domain_exchange_step7.png){.thumbnail .w-600}

Una vez que las cuentas se hayan reasignado a otro dominio o se hayan restablecido, es posible eliminar el dominio.

En la pestaña `Dominios asociados`{.action} de su plataforma, haga clic en el botón `...`{.action} a la derecha del dominio correspondiente y seleccione `Eliminar este dominio`{.action}.

![exchange](images/add_domain_exchange_step10.png){.thumbnail .w-600}

## Más información

[Crear un registro CNAME al añadir un dominio asociado](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_dns_cname)

[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [partners de OVHcloud](/links/partner).
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestros distintos [servicios de soporte.](/links/support)

Interactúe con nuestra [comunidad de usuarios](/links/community).
