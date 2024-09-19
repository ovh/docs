---
title: 'Crear un registro CNAME para asociar un dominio'
excerpt: 'Cómo y por qué añadir un registro CNAME a un dominio'
updated: 2023-08-29
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

Al añadir un dominio a su plataforma de correo, es posible que se le pida que configure un registro CNAME en la zona DNS. El objetivo de esta operación es garantizar que el dominio en cuestión es legítimo para su uso en la plataforma de correo.

> [!primary]
>
> Si el dominio añadido se gestiona en la misma cuenta de cliente que la plataforma de correo, y más concretamente en su zona DNS, no es necesario configurar ningún registro CNAME.

**Esta guía explica cómo validar un dominio en una plataforma de correo añadiendo un registro CNAME.**

## Requisitos

- Estar conectado al [área de cliente de OVHcloud](/links/manager), en la sección `Web Cloud`{.action}.
- Disponer de una solución [Exchange](/links/web/emails) o [Email Pro](/links/web/email-pro).
- Haber añadido un dominio a su plataforma de correo. Si lo necesita, puede consultar la guía [Añadir un dominio a una plataforma de correo](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain).
- Estar en condiciones de [configurar la zona DNS](/pages/web_cloud/domains/dns_zone_edit) del dominio en cuestión, desde el área de cliente de OVHcloud o desde la interfaz de gestión en la que esté registrado.

## Procedimiento

### ¿Por qué crear un registro CNAME?

Aquí se utiliza el registro CNAME como alias, que apunta a un destino que, a su vez, apunta a una dirección IP. Por lo tanto, no se trata de un registro vinculado a un servicio de correo.

En el marco de nuestras ofertas [**Hosted Exchange**](/links/web/emails-hosted-exchange) y [**Email Pro**](/links/web/email-pro), este registro CNAME se utiliza como código de validación (token) que será visible en la zona DNS del dominio que se quiera validar. El objetivo es comprobar que el usuario de la plataforma de correo es el gestor del dominio que añade.

En el diagrama siguiente, la plataforma de correo electrónico ([Exchange](/links/web/emails) o [Email Pro](/links/web/email-pro)) se representa mediante el marco verde.<br>
Para formar las direcciones de correo electrónico, añada cuentas (representadas en este caso por "**contacto**", "**john.smith**" y "**mary.johnson**").<br>
El dominio **mydomain.ovh** se ha añadido a la plataforma de correo (consultar la guía "[Añadir un dominio a una plataforma de correo](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain) ").<br>
La plataforma genera un código de validación (en nuestro ejemplo, "**abcd1-check**").<br>
Si la zona DNS del dominio **mydomain.ovh** no está gestionada en la misma cuenta de cliente de OVHcloud o se gestiona desde un panel de control externo, deberá añadir el código en forma de registro CNAME. Este registro se representa mediante el marco azul del ejemplo.<br>
La plataforma de correo puede observar los registros DNS del dominio **mydomain.ovh** para comprobar la presencia del código de validación.

![Correo electrónico](images/email-dns-conf-cname01.png){.thumbnail}

Una vez que la plataforma de correo haya podido leer el código de validación en la zona DNS del dominio **mydomain.ovh**, es posible formar las direcciones **contact@mydomain.ovh**, **john.smith@mydomain.ovh** y **mary.johnson@mydomain.ovh**.

### Paso 1 - Entender el diagnóstico CNAME de OVHcloud <a name="step1"></a>

La etiqueta de diagnóstico **CNAME** aparece en la pestaña `Dominios asociados`{.action} de su plataforma de correo tras añadir su dominio.

![CNAME](images/cname_exchange_diagnostic.png){.thumbnail}

En el ejemplo anterior, la etiqueta es roja. Estas son las posibles razones de este diagnóstico:

- **El dominio declarado no se gestiona con la misma cuenta de cliente de OVHcloud que su plataforma de correo**. Realice [el paso 3](#step3) de esta guía desde el área de cliente de la cuenta de OVHcloud que gestiona la zona DNS del dominio.
- **El dominio declarado utiliza servidores DNS externos a OVHcloud**: el dominio está registrado en OVHcloud, pero utiliza servidores DNS "personalizados". Para comprobarlo, en la columna izquierda, haga clic en `Dominios`{.action} y seleccione el dominio. En la pestaña `Información general`{.action}, consulte "Servidores DNS". Si especifica `Personalizados`{.action}, deberá conectarse a la interfaz de gestión de los servidores DNS registrados en la pestaña `Servidores DNS`{.action}

![Correo electrónico](images/email-dns-conf-cname02.png){.thumbnail}

- **El dominio no está registrado en OVHcloud y no utiliza servidores DNS de OVHcloud**: el dominio está registrado en otro agente registrador. Compruebe que la zona DNS se haya configurado correctamente desde el panel que le ofrezca el agente registrador del dominio.

### Paso 2 - Obtener el código de validación <a name="step2"></a>

Abra la pestaña `Dominios asociados`{.action} y haga clic en la etiqueta roja `CNAME` en la columna "Diagnóstico" para obtener la información necesaria.

El registro CNAME se describe en el cuadro de diálogo que aparece.

![CNAME](images/cname_exchange_informations.png){.thumbnail}

Introduzca el código único que aparece en la línea central (`a1bcd-check.mydomain.ovh to ovh.com.` en el ejemplo anterior).

### Paso 3 - Crear el registro CNAME <a name="step3"></a>

Seleccione la pestaña correspondiente a su situación:

> [!tabs]
> **Desde el área de cliente de OVHcloud**
>> En la sección `Web Cloud`{.action}, haga clic en `Dominios`{.action} y seleccione el dominio correspondiente. A continuación, abra la pestaña `Zona DNS`{.action}.<br>
>> Aparecerá la configuración de la zona DNS. Para añadir un registro CNAME, haga clic en el botón `Añadir un registro`{.action} a la derecha.<br>
>> En la nueva ventana, podrá ver varios registros DNS. Haga clic en `CNAME`{.action} y complete los campos según la información obtenida en [el paso 2](#step2) de esta guía.<br>
>> Por ejemplo, si el código de validación es "**a1bcd-check**", debe introducirse en la casilla "subdominio". Por último, introduzca "**ovh.com.**" en el apartado "Destino", recordando el apartado **.**" final.
>>
>> ![CNAME](images/cname_add_entry_dns_zone.png){.thumbnail}
>>
>> Una vez introducidos los datos, haga clic en el botón `Siguiente`{.action}. Asegúrese de que la información mostrada es correcta y haga clic en `Confirmar`{.action}.<br>
>>
>> > [!warning]
>> >
>> > El cambio tarda un tiempo de propagación que normalmente se aplica en unos minutos. Sin embargo, puede llegar hasta las 24 horas.
>>
> **Desde una interfaz externa a OVHcloud**
>>
>> Conéctese a la interfaz que gestiona la zona DNS del dominio y añada un registro de tipo CNAME a la misma, con los siguientes parámetros:
>>
>> - **Subdominio**: Introduzca el valor como "**xxxxx-check**", sustituyendo las "**x**" por el código único que aparece en [el paso 2](#step2) de esta guía.
>> - **Destino**: Introduzca el valor "**ovh.com.**" recordando el "**.**" final si su interfaz de entrada no lo hace automáticamente.
>>
>> Confirme este cambio en su zona DNS.
>>
>> > [!warning]
>> >
>> > Este cambio requiere un tiempo de propagación, que suele aplicarse en cuestión de minutos. Sin embargo, puede llegar hasta las 24 horas.
>> >
>>
>> A continuación ofrecemos un ejemplo de respuesta DNS tras añadir un registro CNAME de validación:
>>
>> ```bash
>> ab1cd-check.mydomain.ovh. 3600	IN	CNAME	ovh.com.
>> ```

Para comprobar que la plataforma de correo ha leído la configuración del registro CNAME, vuelva a esta y abra la pestaña `Dominios asociados`{.action}. Si la etiqueta `CNAME` ya no aparece en la columna "Diagnóstico", el dominio se añadirá correctamente. Si sigue estando roja, es posible que la propagación todavía no haya finalizado.

![CNAME](images/cname_exchange_diagnostic_green.png){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.