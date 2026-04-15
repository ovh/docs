---
title: "FAQ sobre los nombres de dominio y DNS"
excerpt: "Encuentre las principales preguntas sobre los nombres de dominio, los servidores DNS y las zonas DNS"
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

**Haga clic en las preguntas de abajo para ver las explicaciones.**

## Contratación de un nombre de dominio

/// details | ¿Cómo puedo contratar un nombre de dominio en OVHcloud?

Siga estos pasos:

1. Acceda a nuestro sitio web [OVHcloud](/links/website).
2. En la página que aparece, introduzca en el campo previsto a tal efecto el nombre de dominio que desea reservar (por ejemplo: `domain.tld`) y haga clic en el botón `Buscar`{.action}.
3. En la nueva página que aparece, nuestra interfaz le indicará si el nombre de dominio elegido está disponible o no para su compra. Si ya está reservado con la sintaxis que ha introducido, modifíquelo y realice una nueva búsqueda de disponibilidad.
4. Una vez que haya encontrado un nombre de dominio disponible, haga clic en el botón `Comprar`{.action} y luego en el botón `Continuar con el pedido`{.action} en la columna de la derecha.
5. Seleccione las posibles opciones o servicios que desea contratar junto con su nombre de dominio y haga clic en `Siguiente`{.action} hasta que el proceso de pedido le invite a autenticarse o a crear una cuenta de cliente OVHcloud.
6. Una vez autenticado con su cuenta de cliente OVHcloud, podrá personalizar la información de los contactos (titular, administrador, técnico) de su nombre de dominio. A continuación, haga clic en el botón `Continuar`{.action} para acceder al resumen de su pedido.
7. En la página `Resumen de su pedido`, si es necesario, podrá modificar la configuración DNS que se aplicará a su nombre de dominio haciendo clic en el enlace `Modificar la configuración`{.action}. Una vez finalizadas las modificaciones, haga clic en el botón `Pagar`{.action} para acceder a la última etapa de su pedido.

A continuación, pague su pedido para iniciar la reserva de su nombre de dominio, así como la instalación de los servicios y opciones que haya contratado.

Unos instantes más tarde, recibirá un e-mail de confirmación de su pedido.
Posteriormente, podrá administrar su nombre de dominio conectándose a su [área de cliente de OVHcloud](/links/manager).

No dude en crear un tíquet de asistencia desde el [centro de ayuda](https://help.ovhcloud.com/csm?id=csm_get_help) si es necesario.

///

/// details | ¿Cómo puedo comprar un nombre de dominio en el mercado secundario?

La compra de un nombre de dominio en el mercado secundario se realiza de la misma manera que la contratación de un nombre de dominio.

Siga estos pasos:

1. Acceda a nuestro sitio web [OVHcloud](/links/website).
2. En la página que aparece, introduzca en el campo previsto a tal efecto el nombre de dominio que desea reservar (por ejemplo: `domain.tld`) y haga clic en el botón `Buscar`{.action}.
3. En la nueva página que aparece, nuestra interfaz le indicará si el nombre de dominio elegido está disponible o no para su compra. Si ya está reservado con la sintaxis que ha introducido, modifíquelo y realice una nueva búsqueda de disponibilidad.
4. Una vez que haya encontrado un nombre de dominio disponible, haga clic en el botón `Comprar`{.action} y luego en el botón `Continuar con el pedido`{.action} en la columna de la derecha.
5. Seleccione las posibles opciones o servicios que desea contratar junto con su nombre de dominio y haga clic en `Siguiente`{.action} hasta que el proceso de pedido le invite a autenticarse o a crear una cuenta de cliente OVHcloud.
6. Una vez autenticado con su cuenta de cliente OVHcloud, podrá personalizar la información de los contactos (titular, administrador, técnico) de su nombre de dominio. A continuación, haga clic en el botón `Continuar`{.action} para acceder al resumen de su pedido.
7. En la página `Resumen de su pedido`, si es necesario, podrá modificar la configuración DNS que se aplicará a su nombre de dominio haciendo clic en el enlace `Modificar la configuración`{.action}. Una vez finalizadas las modificaciones, haga clic en el botón `Pagar`{.action} para acceder a la última etapa de su pedido.

A continuación, pague su pedido para iniciar la reserva de su nombre de dominio, así como la instalación de los servicios y opciones que haya contratado.

Unos instantes más tarde, recibirá un e-mail de confirmación de su pedido.
Posteriormente, podrá administrar su nombre de dominio conectándose a su [área de cliente de OVHcloud](/links/manager).

No dude en crear un tíquet de asistencia desde el [centro de ayuda](https://help.ovhcloud.com/csm?id=csm_get_help) si es necesario.

///

## Gestión de un nombre de dominio

/// details | ¿Cómo saber si mi nombre de dominio está registrado en OVHcloud?

Para ello, puede realizar una consulta [WHOIS](/links/web/domains-whois) para saber dónde está registrado su nombre de dominio y verificar que usted figura como titular del nombre de dominio.

Cada registrador (como OVHcloud) puede elegir cómo mostrar la información relativa a un nombre de dominio en el WHOIS.

Una vez realizada la consulta WHOIS, busque en el resultado al menos una de las siguientes líneas:

- Domain Name: ovhcloud.com
- Registrar WHOIS Server: whois.ovh.com
- Registrar URL: https://ovh.com
- Registrar: OVH sas

Si observa al menos una de estas líneas en el resultado, su nombre de dominio está registrado en OVHcloud.

En caso contrario, su nombre de dominio está registrado en otro registrador. Busque entonces las líneas relativas al `Registrar` para identificar el registrador donde está registrado su nombre de dominio.

///

<!-- CP-STEPS-START:expiry-date -->
/// details | ¿Cómo conocer la fecha de expiración de un nombre de dominio?

La solución más rápida es realizar una consulta [WHOIS](/links/web/domains-whois) sobre el nombre de dominio. Una vez realizada la consulta, busque en el resultado la línea correspondiente a la fecha de expiración (por ejemplo: `Expiry Date: 2025-09-22T08:00:00Z`, `Registry Expiry Date: 2025-09-22T08:00:00Z`, etc.).

Si su nombre de dominio está registrado en OVHcloud, haga clic en las pestañas de abajo para ver cada uno de los **2** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Mis soluciones y servicios](/links/control-panel/billing-services).
>>
> **Paso 2**
>>
>> En la tabla que aparece, busque la línea correspondiente a su nombre de dominio y localice la fecha presente en la columna `Fecha de efecto`. Esta fecha corresponde a la fecha de expiración de su nombre de dominio.

///
<!-- CP-STEPS-END:expiry-date -->

/// details | ¿Cómo cambiar la fecha anual de expiración de un nombre de dominio?

La fecha anual de expiración de un nombre de dominio (por ejemplo: el 24 de septiembre) se establece en función de la fecha de registro (creación) del nombre de dominio.

Generalmente, la fecha anual de expiración de un nombre de dominio es la misma que la fecha en la que registró el nombre de dominio.

Por lo tanto, no es posible cambiar la fecha anual de expiración de un nombre de dominio.

///

<br>

/// details | ¿Cómo puedo corregir una errata en mi nombre de dominio?

Una vez contratado un nombre de dominio, este se registra con los caracteres que le haya asignado durante su pedido. El registro se realiza ante el registro de la extensión de su nombre de dominio (por ejemplo: el registro de los *.com*) y se aplican los costes de reserva por parte del registrador (como OVHcloud).

Un nombre de dominio es una dirección única en Internet, por ejemplo: `ovhcloud.com`.
Cada cambio en ese nombre, ya sea un carácter o una extensión (.com, .fr, .net, etc.), lo convierte en un nombre de dominio completamente diferente.

Por lo tanto, si ha cometido un error de escritura durante su pedido, este no podrá ser modificado ni corregido. Deberá contratar un nuevo nombre de dominio independientemente del anterior (siempre que la nueva ortografía deseada no esté ya reservada por otra persona).

Los nombres de dominio se consideran productos personalizados, ya que se registran específicamente para un titular y quedan bloqueados para los demás desde el momento del pedido. Por eso, una vez registrados, no pueden ser reembolsados.

///

/// details | ¿Cómo modificar un nombre de dominio ya contratado?

Una vez contratado un nombre de dominio, este se registra con los caracteres que le haya asignado durante su pedido. El registro se realiza ante el registro de la extensión de su nombre de dominio (por ejemplo: el registro de los *.com*) y se aplican los costes de reserva por parte del registrador (como OVHcloud).

Un nombre de dominio es una dirección única en Internet, por ejemplo: `ovhcloud.com`.
Cada cambio en ese nombre, ya sea un carácter o una extensión (.com, .fr, .net, etc.), lo convierte en un nombre de dominio completamente diferente.

Por lo tanto, si ha cometido un error de escritura durante su pedido, este no podrá ser modificado ni corregido. Deberá contratar un nuevo nombre de dominio independientemente del anterior (siempre que la nueva ortografía deseada no esté ya reservada por otra persona).

Los nombres de dominio se consideran productos personalizados, ya que se registran específicamente para un titular y quedan bloqueados para los demás desde el momento del pedido. Por eso, una vez registrados, no pueden ser reembolsados.

///

<!-- CP-STEPS-START:delete-domain -->
/// details | ¿Cómo eliminar un nombre de dominio?

Haga clic en las pestañas de abajo para ver cada uno de los **3** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Mis soluciones y servicios](/links/control-panel/billing-services).
>>
> **Paso 2**
>>
>> En la tabla que aparece, busque la línea correspondiente a su nombre de dominio, haga clic en el botón `...`{.action} a la derecha y luego en `Dar de baja mi servicio`{.action}.
>>
> **Paso 3**
>>
>> En la página que aparece, seleccione el modo de baja (inmediatamente o en la fecha de expiración del servicio) y haga clic en el botón `Sí, dar de baja`{.action} en la parte inferior.
>>
>> Su nombre de dominio quedará suspendido en la fecha de expiración y, a partir de esa fecha, será eliminado **definitivamente** en un plazo máximo de 60 días. Este plazo está definido por la **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) para que un nombre de dominio sea completamente eliminado y esté disponible de nuevo para el registro por otro titular.

> [!primary]
>
> Una vez solicitada la baja, puede acelerar la eliminación creando un tíquet de asistencia desde el [centro de ayuda](https://help.ovhcloud.com/csm?id=csm_get_help). Se requerirán documentos justificativos para acelerar esta eliminación.

> [!success]
>
> Consulte todos los detalles en nuestra guía "[Cómo dar de baja mis servicios de OVHcloud](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_cancel_services)".

///
<!-- CP-STEPS-END:delete-domain -->

/// details | He recibido un e-mail relativo a la validación de la información del titular asociada a mi nombre de dominio, ¿qué debo hacer?

En primer lugar, si tiene alguna duda sobre la legitimidad del e-mail recibido, consulte nuestra guía "[Phishing - ¿Cómo reconocer e-mails o SMS fraudulentos?](/pages/account_and_service_management/account_information/phishing_care)".

De conformidad con una directiva de la **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) del 01/09/2014, los registradores (por ejemplo: OVHcloud) están obligados a verificar la validez de los datos de contacto de los titulares de nombres de dominio. OVHcloud envía entonces un e-mail a los titulares del nombre de dominio registrado a la dirección e-mail de contacto declarada en OVHcloud.

Recibirá este e-mail cuando realice una de las siguientes acciones:

- Registro de un nuevo nombre de dominio.
- Transferencia de un nombre de dominio.
- Modificación de los datos de contacto asociados a su nombre de dominio.

Este e-mail contiene un enlace que permite verificar rápidamente sus datos como titular legal del nombre de dominio.

Atención: Esta verificación debe realizarse en un plazo de 15 días. Transcurrido este plazo, el nombre de dominio quedará técnicamente suspendido. Seguirá estando contractualmente a su nombre, pero ya no será accesible en Internet. Se mostrará un mensaje de error a los visitantes de su sitio web.

Puede recibir los siguientes e-mails durante los primeros 15 días:

- **Día 0**: Inmediatamente después de contratar el nombre de dominio o modificar sus datos de contacto, usted (o la persona registrada como titular del nombre de dominio) recibirá el primer e-mail con un enlace de verificación.
- **Días 4, 9 y 13 (e-mails de recordatorio)**: Si aún no ha verificado el nombre de dominio, recibirá de nuevo el e-mail.
- **Día 14**: Si aún no ha verificado el nombre de dominio, el e-mail se envía de nuevo. Además, también se envía un e-mail a la dirección del administrador/titular del nombre de dominio para informarle de que los datos de contacto no han sido confirmados.
- **Día 15**: Si el titular del nombre de dominio aún no ha respondido, enviamos un e-mail al administrador del nombre de dominio para informarle de la situación y de la desactivación del nombre de dominio.

Más allá de estos 15 días, el sistema envía e-mails adicionales (hasta 9 e-mails) antes de eliminar su nombre de dominio. Esta eliminación se efectuará 60 días después del día 0.

> [!warning]
>
> En función de la extensión del nombre de dominio (por ejemplo: *.com*, *.net*, etc.), algunos plazos mencionados anteriormente pueden variar. Le recomendamos encarecidamente que compruebe, ante el registro de la extensión de su nombre de dominio, el proceso de verificación del control de los contactos.

///

/// details | No he recibido el e-mail de validación de la información del titular asociado a mi nombre de dominio y este se ha suspendido, ¿qué debo hacer?

Si no ha recibido el e-mail de validación del titular de su nombre de dominio, compruebe los siguientes puntos:

1. La dirección e-mail declarada para el titular del nombre de dominio es válida y operativa.
2. El e-mail de validación no se encuentra en el correo no deseado.

Tras haber verificado y confirmado los dos puntos anteriores, si aún no consigue recuperar el e-mail de validación del titular, le invitamos a abrir un tíquet de asistencia desde el [centro de ayuda](https://help.ovhcloud.com/csm?id=csm_get_help) para solicitar el reenvío de este e-mail.

///

/// details | ¿Qué es un nombre de dominio en formato IDN?

Inicialmente, los nombres de dominio solo podían contener caracteres **ASCII** muy específicos (entre ellos, las 26 letras del alfabeto latino). Un **I**nternationalized **D**omain **N**ame (**IDN**) permite utilizar caracteres especiales o acentuados, e incluso otros alfabetos (como el *cirílico*).

En OVHcloud, es posible contratar IDN y utilizarlos como un nombre de dominio completo con nuestros otros servicios (alojamiento web, zona DNS, etc.<sup>1</sup>).

Una vez contratados, los IDN aparecen en su [área de cliente de OVHcloud](/links/manager) en formato **xn--**.

Aunque su nombre de dominio se muestre en [notación internacionalizada (IDN)](https://es.wikipedia.org/wiki/Nombre_de_dominio_internacionalizado) en su [área de cliente de OVHcloud](/links/manager), funcionará y se mostrará de forma normal en cualquier otro lugar. La dirección de su sitio web se mostrará tal como la ha solicitado. Sus direcciones e-mail también se mostrarán como desee a sus contactos.

> [!alert]
>
> <sup>1</sup>: Se desaconseja utilizar una dirección e-mail con un nombre de dominio IDN desde un cliente de correo (Outlook, Mail de macOS, etc.). Algunos clientes de correo aún no interpretan los nombres de dominio con caracteres acentuados, lo que bloquea la transmisión de los e-mails. Cuando un remitente le envía un e-mail, recibe un mensaje automático indicando que su dirección e-mail no existe.
>
> **Se recomienda reservar, además de su nombre de dominio con caracteres acentuados, el mismo nombre de dominio sin acentos, para evitar cualquier incompatibilidad en los intercambios de e-mails.**

///

/// details | ¿Cómo corregir un nombre de dominio en formato IDN?

Al igual que los nombres de dominio "clásicos", una vez contratado un nombre de dominio o un IDN, este se registra con los caracteres que le haya asignado durante su pedido.

Por lo tanto, si ha cometido un error de escritura durante su pedido, este no podrá ser corregido. Deberá contratar un nuevo nombre de dominio independientemente del anterior (siempre que la nueva ortografía deseada no esté ya reservada por otra persona).

///

<!-- CP-STEPS-START:renew-alldom -->
/// details | ¿Cómo renovar un solo nombre de dominio presente en un pack Alldom?

Para ello, debe estar declarado como mínimo como [contacto "Facturación"](/pages/account_and_service_management/account_information/managing_contacts) del nombre de dominio en cuestión. A continuación, deberá modificar el modo de renovación del nombre de dominio para pasar a la **renovación automática**.

Para ello, haga clic en las pestañas de abajo para ver cada uno de los **2** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Mis soluciones y servicios](/links/control-panel/billing-services).
>>
> **Paso 2**
>>
>> En la tabla que aparece, a la derecha del nombre de dominio en cuestión, haga clic en el botón `...`{.action} en la columna `Acciones` y luego en `Configurar la renovación`{.action}. A continuación, podrá configurar la renovación de este nombre de dominio en **renovación automática**.

> [!primary]
>
> Si dispone de una antigua oferta de alojamiento web que incluye un nombre de dominio gratuito y modifica esta oferta de alojamiento, en algunos casos esto puede anular la gratuidad del nombre de dominio.
>
> En caso de duda, le invitamos a abrir un tíquet de asistencia desde el [centro de ayuda](https://help.ovhcloud.com/csm?id=csm_get_help) indicando el nombre de dominio y el alojamiento web en cuestión.

> [!success]
>
> Consulte todos los detalles en nuestra guía "[Cómo renovar mis servicios de OVHcloud](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal)".

///
<!-- CP-STEPS-END:renew-alldom -->

## Transferencia de un nombre de dominio

/// details | ¿Es transferible mi nombre de dominio después de un cambio de titular?

La **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) ha implementado medidas de seguridad para prevenir las transferencias o cambios de titular no autorizados o abusivos de los nombres de dominio.

La ICANN ha definido un plazo incompresible de **60** días entre cada operación que pueda realizarse en un nombre de dominio (creación, cambio de titular, transferencia).

Las reglas definidas por la ICANN deben ser obligatoriamente respetadas por los registradores (como OVHcloud).

Por lo tanto, no tendrá más opción que esperar hasta el final del plazo de 60 días para poder transferir su nombre de dominio después de haber cambiado su titular.

///

/// details | Mi nombre de dominio está bloqueado contra la transferencia durante 60 días, ¿qué puedo hacer?

La **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) ha implementado medidas de seguridad para prevenir las transferencias o cambios de titular no autorizados o abusivos de los nombres de dominio.

La ICANN ha definido un plazo incompresible de **60** días entre cada operación que pueda realizarse en un nombre de dominio (creación, cambio de titular, transferencia).

Las reglas definidas por la ICANN deben ser obligatoriamente respetadas por los registradores (como OVHcloud).

Por lo tanto, no tendrá más opción que esperar hasta el final del plazo de 60 días para realizar una nueva operación (cambio de titular o transferencia) en su nombre de dominio.

///

/// details | No encuentro mi nombre de dominio en mi área de cliente, ¿qué debo hacer?

En primer lugar, realice una consulta [WHOIS](/links/web/domains-whois) para saber dónde está registrado su nombre de dominio y verificar que usted figura como titular del nombre de dominio.

Caso n.º 1.A - Su nombre de dominio está registrado en OVHcloud y usted figura como titular del nombre de dominio:

Realice un [procedimiento de recuperación de contactos](/links/transversal/procedure-contact-change) para que su nombre de dominio se gestione íntegramente desde su [área de cliente de OVHcloud](/links/manager). Así no necesitará contactar con la persona que gestionaba anteriormente su nombre de dominio.

Caso n.º 1.B - Su nombre de dominio está registrado en OVHcloud y usted no figura como titular del nombre de dominio:

De conformidad con el **R**eglamento **G**eneral de **P**rotección de **D**atos (**RGPD**), OVHcloud no podrá proporcionar información relativa a la persona u organización que gestiona el nombre de dominio en OVHcloud.

Sin embargo, puede intentar contactar con la persona u organización que lo gestiona siguiendo las instrucciones de [este formulario](/links/web/contact-domain-owner).

Caso n.º 2 - Su nombre de dominio no está registrado en OVHcloud:

Contacte directamente con el registrador (indicado en las líneas que comienzan por el término `Registrar`) de su nombre de dominio para continuar con sus investigaciones. Si el nombre de dominio no está registrado en OVHcloud, no estaremos en condiciones de asistirle en este asunto.

///

/// details | No consigo contactar con la persona que gestiona mi nombre de dominio, ¿qué debo hacer?

En primer lugar, realice una consulta [WHOIS](/links/web/domains-whois) para verificar que usted figura como titular del nombre de dominio.

Caso n.º 1 - Usted figura como titular del nombre de dominio:

Realice un [procedimiento de recuperación de contactos](/links/transversal/procedure-contact-change) para que su nombre de dominio se gestione íntegramente desde su [área de cliente de OVHcloud](/links/manager). Así no necesitará contactar con la persona que gestionaba anteriormente su nombre de dominio.

Caso n.º 2 - Usted no figura como titular del nombre de dominio:

De conformidad con el **R**eglamento **G**eneral de **P**rotección de **D**atos (**RGPD**), OVHcloud no podrá proporcionar información relativa a la persona u organización que gestiona el nombre de dominio en OVHcloud.

Sin embargo, puede intentar contactar con la persona u organización que lo gestiona siguiendo las instrucciones de [este formulario](/links/web/contact-domain-owner).

///

/// details | ¿Puedo vender mi nombre de dominio?

Actualmente, OVHcloud no se encarga directamente del proceso de venta de los nombres de dominio ya registrados. No ofrecemos este tipo de servicio.

Sin embargo, si desea poner en venta su nombre de dominio en un mercado secundario, contacte con uno de nuestros partners:

- [Afternic](https://www.afternic.com).
- [Sedo](https://sedo.com).

Si desea vender su nombre de dominio, puede añadirlo a estas plataformas. Una vez añadido, los proveedores autorizados ofrecerán su nombre de dominio al precio que haya definido en una de las plataformas anteriores.

///

## Zona DNS

> [!primary]
>
> La modificación de una zona DNS es una manipulación delicada y puede provocar una interrupción de los servicios asociados a su nombre de dominio (alojamiento web, e-mail, etc.). En caso de duda, no dude en contactar con un [proveedor especializado](/links/partner).

/// details | ¿Qué es una zona DNS?

La zona DNS de un nombre de dominio contiene una configuración aplicable a este último. Se compone de información técnica, denominada *registros DNS*. La zona DNS funciona como un centro de enrutamiento, dirigiendo el tráfico hacia los servicios correctos asociados al dominio.

Puede especificar, por ejemplo:

- La dirección IP (registros DNS de tipo *A* y *AAAA*) de su alojamiento web para mostrar su sitio web con su nombre de dominio.
- Los servidores e-mail (registros DNS de tipo *MX*) hacia los que su nombre de dominio debe redirigir los e-mails que recibe.
- Información relacionada con la seguridad y autenticación de sus servicios (alojamiento web, servidor web, servidor e-mail, etc.) asociados a su nombre de dominio (registros DNS de tipo *SPF*, *DKIM*, *DMARC*, etc.).

Una zona DNS está alojada/registrada en **servidores DNS**. Estos **servidores DNS** deben declararse ante el registrador del nombre de dominio para utilizar la zona DNS que alojan.

> [!success]
>
> Consulte todos los detalles en nuestra guía "[Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information)".

///

/// details | ¿Qué es un registro DNS?

Los registros DNS se utilizan, por ejemplo, para:

- Asociar un nombre de dominio a una dirección IP, lo que permite a los usuarios acceder a un sitio web o a un servidor remoto.
- Asociar un nombre de dominio a otros recursos en línea utilizando un nombre de dominio (más fácil de recordar) en lugar de una dirección IP.
- Validar configuraciones de asociación o seguridad, especialmente para los servicios e-mail y los alojamientos compartidos.

Existen numerosos registros DNS. Cada uno tiene un propósito específico en la resolución DNS. En OVHcloud, se distinguen en tres partes:

- **Campos de apuntado**: `A`, `AAAA`, `NS`, `CNAME` y `DNAME`.
- **Campos extendidos**: `CAA`, `TXT`, `NAPTR`, `SRV`, `LOC`, `SSHFP`, `TLSA`, `RP`, `SVCB` y `HTTPS`.
- **Campos mail**: `MX`, `SPF`, `DKIM` y `DMARC`.

> [!success]
>
> Consulte más detalles en las siguientes guías:
>
> - Información general:
>     - [Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records)
> - Registros DNS de apuntado:
>     - [Añadir un registro DNS de tipo A para un nombre de dominio](/pages/web_cloud/domains/dns_zone_a_record_creation)
>     - [Añadir un registro DNS de tipo AAAA para un nombre de dominio](/pages/web_cloud/domains/dns_zone_aaaa_record_creation)
>     - [Añadir un registro DNS de tipo CNAME para un nombre de dominio](/pages/web_cloud/domains/dns_zone_cname_record_creation)
> - Registros DNS extendidos:
>     - [Añadir un registro DNS de tipo TXT para un nombre de dominio](/pages/web_cloud/domains/dns_zone_txt_record_creation)
> - Registros DNS de e-mail:
>     - [Configurar un registro MX para la gestión de los e-mails](/pages/web_cloud/domains/dns_zone_mx)
>     - [Mejorar la seguridad de los e-mails mediante un registro SPF](/pages/web_cloud/domains/dns_zone_spf)
>     - [Mejorar la seguridad de los e-mails mediante un registro DKIM](/pages/web_cloud/domains/dns_zone_dkim)
>     - [Mejorar la seguridad de los e-mails mediante un registro DMARC](/pages/web_cloud/domains/dns_zone_dmarc)

///

<!-- CP-STEPS-START:dns-records-available -->
/// details | ¿Cuáles son los registros DNS disponibles en una zona DNS de OVHcloud?

Haga clic en las pestañas de abajo para ver cada uno de los **2** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Zonas DNS](/links/control-panel/web-dns-zone) y seleccione el dominio correspondiente.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Paso 2**
>>
>> A la derecha o debajo de la tabla, haga clic en `Añadir un registro`{.action}.
>>
>> Visualizará todos los registros DNS que podrá añadir a través del asistente de configuración de OVHcloud:
>>
>> - **Campos de apuntado**: `A`, `AAAA`, `NS`, `CNAME` y `DNAME`.
>> - **Campos extendidos**: `CAA`, `TXT`, `NAPTR`, `SRV`, `LOC`, `SSHFP`, `TLSA`, `RP`, `SVCB` y `HTTPS`.
>> - **Campos mail**: `MX`, `SPF`, `DKIM` y `DMARC`.
>>
>> > [!primary]
>> >
>> > Si desea añadir un registro DNS que no aparece en la lista, cierre la ventana que se ha abierto tras hacer clic en el botón `Añadir un registro`{.action} y haga clic en el botón `Modificar en modo de texto`{.action} situado a la derecha o debajo de la tabla.
>> >
>> > Así podrá añadir manualmente el registro DNS de su elección.

> [!success]
>
> Consulte más detalles en las siguientes guías:
>
> - Información general:
>     - [Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records)
> - Registros DNS de apuntado:
>     - [Añadir un registro DNS de tipo A para un nombre de dominio](/pages/web_cloud/domains/dns_zone_a_record_creation)
>     - [Añadir un registro DNS de tipo AAAA para un nombre de dominio](/pages/web_cloud/domains/dns_zone_aaaa_record_creation)
>     - [Añadir un registro DNS de tipo CNAME para un nombre de dominio](/pages/web_cloud/domains/dns_zone_cname_record_creation)
> - Registros DNS extendidos:
>     - [Añadir un registro DNS de tipo TXT para un nombre de dominio](/pages/web_cloud/domains/dns_zone_txt_record_creation)
> - Registros DNS de e-mail:
>     - [Configurar un registro MX para la gestión de los e-mails](/pages/web_cloud/domains/dns_zone_mx)
>     - [Mejorar la seguridad de los e-mails mediante un registro SPF](/pages/web_cloud/domains/dns_zone_spf)
>     - [Mejorar la seguridad de los e-mails mediante un registro DKIM](/pages/web_cloud/domains/dns_zone_dkim)
>     - [Mejorar la seguridad de los e-mails mediante un registro DMARC](/pages/web_cloud/domains/dns_zone_dmarc)

///
<!-- CP-STEPS-END:dns-records-available -->

<!-- CP-STEPS-START:change-ns-in-dns-zone -->
/// details | ¿Puedo cambiar los servidores DNS declarados en mi zona DNS en OVHcloud?

La modificación manual de los registros DNS de tipo NS de un nombre de dominio en una zona DNS de OVHcloud no se recomienda, ya que impediría la resolución DNS de la zona DNS correspondiente.

Si desea modificar la configuración de los registros DNS de tipo NS de su nombre de dominio, probablemente sea porque desea cambiar los servidores DNS declarados para este último.

> [!primary]
>
> Para cambiar los servidores DNS de su nombre de dominio en OVHcloud, ya debe existir una zona DNS en los nuevos servidores DNS deseados.
> Además, deberá verificar en esta misma zona DNS que los registros DNS de tipo NS correspondan a los servidores DNS correspondientes.

Para ello, haga clic en las pestañas de abajo para ver cada uno de los **3** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Dominios](/links/control-panel/web-domains) y seleccione el dominio correspondiente.
>>
>> ![Dominios](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Paso 2**
>>
>> Seleccione la pestaña `Servidores DNS`{.action} una vez posicionado en el nombre de dominio en cuestión.
>>
> **Paso 3**
>>
>> Haga clic en el botón `Modificar los servidores DNS`{.action} situado a la derecha de la tabla "servidores DNS". Dependiendo de la resolución de su pantalla, el botón puede encontrarse debajo de la tabla.
>>
>> Podrá modificar los servidores DNS de su nombre de dominio en la página que aparece.

> [!primary]
>
> La propagación de la modificación de los servidores DNS declarados para un nombre de dominio puede tardar hasta **48** horas.

En caso de error, le invitamos a abrir un tíquet de asistencia desde el [centro de ayuda](https://help.ovhcloud.com/csm?id=csm_get_help) indicando la siguiente información:

- Los nombres de los servidores DNS que desea configurar.
- El mensaje de error encontrado.

> [!success]
>
> Consulte todos los detalles en nuestra guía "[Modificar los servidores DNS de un nombre de dominio en OVHcloud](/pages/web_cloud/domains/dns_server_edit)".

///
<!-- CP-STEPS-END:change-ns-in-dns-zone -->

/// details | ¿Cuál es la diferencia entre un registro DNS de tipo A (IPv4) y AAAA (IPv6)?

La red Internet funciona desde principios de los años 1990 siguiendo la norma IPv4. Esta norma permite proporcionar una dirección IP X.X.X.X (donde cada "X" es un número comprendido entre 0 y 255) a cada una de las máquinas conectadas a la red Internet (servidores, ordenadores, smartphones, tablets, etc.). Sin embargo, esta norma limita a aproximadamente 4 mil millones el número de dispositivos conectados a la red Internet.

Posteriormente, se introdujo el protocolo IPv6 para permitir conectar a la red Internet hasta 340 sextillones de dispositivos.

Al estar las direcciones IPv4 cada vez menos disponibles, resulta más difícil añadir nuevas máquinas a la red Internet con la norma IPv4. No obstante, las conexiones con una dirección IPv6 solo son útiles si, por ejemplo, su sitio web también está disponible con este mismo protocolo.

Los registros DNS de tipo A y AAAA son dos tipos de registros de recursos utilizados para asociar un nombre de dominio a una dirección IP.

Sus principales diferencias residen en el tipo de dirección IP que utilizan:

- **Registro A** (también denominado "registro de host"): Asocia un nombre de dominio a una dirección IPv4 (por ejemplo, 213.0.113.0). Las direcciones IPv4 son direcciones de 32 bits, generalmente escritas en notación decimal con puntos.
- **Registro AAAA** (también denominado "cuádruple registro A"): Asocia un nombre de dominio a una dirección IPv6 (por ejemplo, 2001:db8:1:1b00:213:0:113:0). Las direcciones IPv6 son direcciones de 128 bits, generalmente escritas en notación hexadecimal.

En otras palabras, los registros A se utilizan para las direcciones IPv4, mientras que los registros AAAA se utilizan para las direcciones IPv6. Ambos tipos de registros se utilizan para dirigir el tráfico hacia una dirección IP específica, pero se utilizan para diferentes versiones del protocolo de Internet.

Cabe destacar que un nombre de dominio puede tener a la vez registros A y AAAA, lo que le permite ser accesible en las redes IPv4 e IPv6. Esto se conoce como "doble pila", una práctica habitual para los sitios web y servicios que desean ser accesibles a los usuarios en las redes IPv4 e IPv6.

> [!success]
>
> Consulte más detalles en las siguientes guías:
>
> - [Añadir un registro DNS de tipo A para un nombre de dominio](/pages/web_cloud/domains/dns_zone_a_record_creation)
> - [Añadir un registro DNS de tipo AAAA para un nombre de dominio](/pages/web_cloud/domains/dns_zone_aaaa_record_creation)
> - [Configure una dirección IPv6 para su sitio web](/pages/web_cloud/web_hosting/configure_ipv6)

///

/// details | ¿Cómo configurar un registro PTR para mi dirección IP externa a OVHcloud?

En OVHcloud, las configuraciones **P**oin**T**er **R**ecord (**PTR**) no pueden gestionarse directamente dentro de nuestras zonas DNS.

Para configurar un registro reverse/PTR para una dirección IP externa, contacte con su **P**roveedor de **A**cceso a **I**nternet (**ISP**), ya que es el responsable de la gestión de los registros DNS inversos de las direcciones IP que asigna.

> [!success]
>
> Consulte todos los detalles en nuestra guía "[Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records)".

///

<!-- CP-STEPS-START:change-ttl -->
/// details | ¿Cómo cambiar el TTL predeterminado en mi zona DNS de OVHcloud?

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
>> A la derecha o debajo de la tabla, haga clic en `Modificar el TTL predeterminado`{.action}.
>>
> **Paso 3**
>>
>> En la ventana que se abre, ajuste el valor bajo la mención `TTL predeterminado` según sus necesidades y haga clic en `Modificar`{.action}.

> [!primary]
>
> La propagación de la modificación de una zona DNS puede tardar hasta **24** horas.

///
<!-- CP-STEPS-END:change-ttl -->

/// details | ¿Qué es un registro DNS de tipo SOA?

El registro DNS de tipo **S**tart **O**f **A**uthority (**SOA**) proporciona un conjunto de elementos relativos a la configuración DNS de un nombre de dominio.

A continuación se muestra el resultado de una consulta SOA para el nombre de dominio `domain.tld`.

```bash
              ;; ANSWER SECTION:

domain.tld.           3600    IN      SOA     dns200.anycast.me. tech.ovh.net. 2025091801 86400 3600 3600000 300
```

|Elemento en el resultado|Descripción|Correspondencia en el ejemplo anterior|
|---|---|---|
|**NS (Name Server)**|Servidor DNS principal declarado para el nombre de dominio `domain.tld`.|`dns200.anycast.me`.|
|**Email address**|Dirección e-mail del responsable de la zona DNS.|`tech.ovh.net` (el punto entre los términos `tech` y `ovh` debe sustituirse por una `@`).|
|**Serial number**|Número de serie único que se incrementa con cada modificación de la zona DNS.<br>Generalmente está compuesto por la fecha de actualización en formato `YYYYMMDD` seguida del número de actualizaciones realizadas en el día.|`2025091801`: Aquí se han realizado 2 actualizaciones (`00` para 1, `01` para 2, etc.) el 18/09/2025.|
|**Refresh time**|Intervalo (en segundos) entre cada actualización de los servidores DNS secundarios (que componen la red DNS) con el servidor DNS principal.|`86400` (24 horas).|
|**Retry time**|Intervalo (en segundos) entre cada intento de reactualización de los parámetros de los servidores DNS secundarios (que componen la red DNS) con el servidor DNS principal si este no responde o no está disponible.|`3600` (1 hora).|
|**Expire time**|Plazo (en segundos) tras el cual los servidores DNS secundarios (que componen la red DNS) dejan de responder a las consultas DNS si el servidor DNS principal ya no se actualiza con ellos.|`3600000` (1000 horas, 41,67 días).|
|**Minimum TTL**|Tiempo de vida mínimo (en segundos) durante el cual los registros DNS de la zona DNS se almacenan en caché en los servidores DNS secundarios (que componen la red DNS).|`300` (5 minutos).|

///

<br>

/// details | ¿Cómo verificar la configuración de mi zona DNS?

Estas son diferentes soluciones para verificar la configuración de una zona DNS:

- **Una herramienta de verificación en línea**: Varias herramientas en línea permiten verificar la configuración de su zona DNS. Encuéntrelas directamente a través de un navegador de Internet (Chrome, Edge, Firefox, Safari, etc.) introduciendo las palabras clave adecuadas (por ejemplo: "verificar propagación DNS") en un motor de búsqueda.

- **El comando "dig"**: Si tiene acceso a un *terminal* desde un sistema operativo Linux o macOS, puede utilizar el comando `dig` para verificar la configuración de su zona DNS en la red DNS.

- **El comando "nslookup"**: El comando `nslookup` está disponible en la mayoría de los sistemas operativos y también permite verificar la configuración de su zona DNS.

- **Desde su área de cliente de OVHcloud**: Si la zona DNS activa de su nombre de dominio se gestiona en OVHcloud, acceda a la página [Zonas DNS](/links/control-panel/web-dns-zone) para visualizar todos los registros DNS declarados para su nombre de dominio.

> [!success]
>
> Consulte todos los detalles en nuestra guía "[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

///

<!-- CP-STEPS-START:verify-dns-propagation -->
/// details | ¿Cómo verificar la propagación de las modificaciones realizadas en mi zona DNS?

> [!primary]
>
> Antes de continuar, tenga en cuenta que:
>
> - La propagación de una modificación realizada en una zona DNS puede tardar hasta **24** horas.
> - La propagación de una modificación de servidores DNS para un nombre de dominio puede tardar hasta **48** horas.

Sin embargo, puede verificar que la propagación DNS se está realizando correctamente con la ayuda del registro DNS de tipo **S**tart **O**f **A**uthority (**SOA**).

En primer lugar, abra un terminal compatible en su ordenador y ejecute la siguiente línea de comando (sustituya `domain.tld` por su propio nombre de dominio):

```bash
dig domain.tld soa
```

> [!primary]
>
> Los sistemas operativos Linux y macOS disponen de forma nativa de un terminal compatible para ejecutar este tipo de comando. Si utiliza otro sistema operativo, como Windows, deberá instalar previamente un terminal compatible para ejecutar el comando.
>
> Además, existen herramientas disponibles en Internet para verificar la propagación DNS.

Una vez ejecutado el comando, obtendrá un resultado similar a este:

```bash
              ;; ANSWER SECTION:

domain.tld.           3600    IN      SOA     dns200.anycast.me. tech.ovh.net. 2025091801 86400 3600 3600000 300
```

En este resultado, obtenga el **número de serie** (en nuestro ejemplo: `2025091801`).

Tiene la siguiente forma `YYYYMMDDRR` donde:

- `YYYYMMDD`: Representa la fecha (año, mes y día) de la última actualización DNS propagada para el nombre de dominio.
- `RR`: Representa el número de actualizaciones realizadas en la fecha indicada. Por ejemplo, si se ha realizado una sola actualización en un día, tendrá el valor `00`. Si se han realizado 2 actualizaciones en el mismo día, tendrá el valor `01` y así sucesivamente.

Una vez obtenido el número de serie, haga clic en las pestañas de abajo para ver cada uno de los **4** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Zonas DNS](/links/control-panel/web-dns-zone) y seleccione el dominio correspondiente.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Paso 2**
>>
>> A la derecha o debajo de la tabla, haga clic en `Modificar en modo de texto`{.action}.
>>
> **Paso 3**
>>
>> En la ventana que se abre, localice la segunda línea que, siguiendo nuestro ejemplo, sería equivalente a esta: `@	IN SOA dns200.anycast.me. tech.ovh.net. (2025091801 86400 3600 3600000 60)`.
>>
> **Paso 4**
>>
>> Compare el número de serie obtenido a través del terminal con el que aparece en su área de cliente de OVHcloud.
>>
>> **Caso n.º 1** - Los dos números de serie coinciden:
>>
>> Esto significa que la propagación DNS se está realizando correctamente. No tiene que hacer nada más.
>>
>> **Caso n.º 2** - Los dos números de serie son diferentes:
>>
>> Esto significa que:
>>
>> - La propagación DNS de sus modificaciones aún no ha terminado completamente (todavía está dentro de los plazos estándar de propagación DNS). En este caso, espere a que la propagación DNS finalice completamente (**24** horas para una modificación de zona DNS y **48** horas para una modificación de servidores DNS) y repita la operación.
>> - La propagación DNS no se está realizando correctamente. En este caso, desde la ventana `Modificar en modo de texto`{.action} que se abrió en el paso **3**, haga clic directamente **sin realizar modificaciones** en el botón `Siguiente`{.action} y luego en `Validar`{.action}. Se iniciará una nueva propagación DNS.

///
<!-- CP-STEPS-END:verify-dns-propagation -->

<!-- CP-STEPS-START:restore-dns-zone -->
/// details | ¿Cómo restaurar una zona DNS?

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
>> A la derecha o debajo de la tabla, haga clic en `Ver el historial de mi zona DNS`{.action}.
>>
> **Paso 3**
>>
>> En la tabla de la página que aparece, identifique la línea correspondiente a la copia de seguridad de la zona DNS que desea y haga clic en el icono presente en la columna `Restaurar`{.action}. La configuración actual de la zona DNS será sustituida por la copia de seguridad elegida.

> [!primary]
>
> La propagación de la modificación de una zona DNS puede tardar hasta **24** horas.

> [!success]
>
> Consulte todos los detalles en nuestra guía "[Gestionar el historial de una zona DNS](/pages/web_cloud/domains/dns_zone_history)".

///
<!-- CP-STEPS-END:restore-dns-zone -->

<!-- CP-STEPS-START:get-dns-zone-copy -->
/// details | ¿Cómo obtener una copia de mi zona DNS?

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
>> A la derecha o debajo de la tabla, haga clic en `Ver el historial de mi zona DNS`{.action}.
>>
> **Paso 3**
>>
>> En la tabla de la página que aparece, identifique la línea correspondiente a la copia de seguridad de la zona DNS que desea y haga clic en el icono presente en la columna `Descargar`{.action}. La copia de la zona DNS se descargará en formato *.txt*.

> [!success]
>
> Consulte todos los detalles en nuestra guía "[Gestionar el historial de una zona DNS](/pages/web_cloud/domains/dns_zone_history)".

///
<!-- CP-STEPS-END:get-dns-zone-copy -->

<!-- CP-STEPS-START:create-dns-zone-subdomain -->
/// details | ¿Puedo crear una zona DNS para un subdominio?

Puede crear una zona DNS para un subdominio.

Para ello, haga clic en las pestañas de abajo para ver cada uno de los **4** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Zonas DNS](/links/control-panel/web-dns-zone) y haga clic en el botón `Contratar`{.action} en la parte superior derecha de la tabla que aparece.
>>
> **Paso 2**
>>
>> En la página que aparece, introduzca el subdominio (por ejemplo: *www.domain.tld*) para el que desea crear una zona DNS de OVHcloud. Espere unos instantes mientras la herramienta realiza las verificaciones relativas al subdominio.
>>
> **Paso 3**
>>
>> Cuando la verificación haya finalizado, elija si desea activar o no las entradas mínimas para la zona DNS que va a crear. Esta elección no es definitiva, ya que siempre podrá [editar los registros de la zona DNS](/pages/web_cloud/domains/dns_zone_edit) posteriormente.
>>
> **Paso 4**
>>
>> Una vez realizada su elección, continúe con los pasos hasta la creación de la zona DNS.

Esta zona DNS se instalará en 2 servidores DNS de OVHcloud. Deberá declarar los nombres de estos dos servidores en la zona DNS activa del nombre de dominio de su subdominio (por ejemplo, *www.domain.tld* es un subdominio del nombre de dominio *domain.tld*).

Para obtener los nombres de los 2 servidores DNS, haga clic en las pestañas de abajo para ver cada uno de los **2** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Zonas DNS](/links/control-panel/web-dns-zone) y seleccione el subdominio correspondiente.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Paso 2**
>>
>> En la parte superior izquierda de la página que aparece, obtenga los 2 nombres de los servidores DNS presentes bajo la mención `Name Servers`. Estos tienen una de las 2 formas siguientes:
>>
>> - `dnsXXX.ovh.net` y `nsXXX.ovh.net` **o** `dnsXXX.ovh.ca` y `nsXXX.ovh.ca` (donde cada `X` representa un dígito comprendido entre `0` y `9`).
>> - `dns200.ovh.me` y `ns200.anycast.me`.

Una vez obtenidos los 2 servidores DNS, declárelos mediante dos registros de tipo NS en la zona DNS activa del nombre de dominio del que proviene su subdominio.

Caso n.º 1 - La zona DNS activa del nombre de dominio del que proviene su subdominio está en OVHcloud:

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
>> A la derecha o debajo de la tabla, haga clic en `Añadir un registro`{.action} y seleccione el tipo de registro DNS `NS`{.action} para declarar un servidor DNS.
>>
> **Paso 3**
>>
>> En la ventana que se abre, introduzca el subdominio en cuestión en el campo `Subdominio *`{.action} (por ejemplo, escriba **únicamente** *www* si su nombre de dominio es *domain.tld* y su subdominio completo es *www.domain.tld*). En el campo `Destino *`{.action}, introduzca **solo uno** de los 2 servidores DNS.
>>
> **Paso 4**
>>
>> Haga clic en `Siguiente`{.action} y luego en `Validar`{.action}.
>>
>> Repita la operación para el segundo servidor DNS restante.

Caso n.º 2 - La zona DNS activa del nombre de dominio del que proviene su subdominio no está en OVHcloud:

Deberá declarar los 2 servidores DNS para su subdominio directamente ante el proveedor DNS de su nombre de dominio (del que proviene su subdominio).

> [!primary]
>
> En ambos casos, la propagación de la modificación de una zona DNS puede tardar hasta **24** horas.

> [!success]
>
> Consulte más detalles en las siguientes guías:
>
> - [Crear una zona DNS de OVHcloud para un nombre de dominio](/pages/web_cloud/domains/dns_zone_create)
> - [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

///
<!-- CP-STEPS-END:create-dns-zone-subdomain -->

<!-- CP-STEPS-START:redirect-all-subdomains -->
/// details | ¿Cómo redirigir todos los subdominios de un mismo nombre de dominio a la misma dirección IP?

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
>> A la derecha o debajo de la tabla, haga clic en `Añadir un registro`{.action} y seleccione el tipo de registro DNS `A`{.action} para una IPv4 (por ejemplo: `203.0.113.0`) o `AAAA`{.action} para una IPv6 (por ejemplo: `2001:db8:1:1b00:203:0:113:0`).
>>
> **Paso 3**
>>
>> En la ventana que se abre, en el campo de entrada `Subdominio *`{.action}, introduzca el valor `*`. El asterisco `*` representará todos los subdominios (por ejemplo: `www.domain.tld` o `ovhcloud.domain.tld`) de su nombre de dominio. Complete el campo `Destino *`{.action} con la dirección IP deseada.
>>
> **Paso 4**
>>
>> Haga clic en `Siguiente`{.action} y luego en `Validar`{.action}.

> [!primary]
>
> La propagación de la modificación de una zona DNS puede tardar hasta **24** horas.

> [!success]
>
> Consulte todos los detalles en nuestra guía "[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

///
<!-- CP-STEPS-END:redirect-all-subdomains -->

<!-- CP-STEPS-START:wildcard-dns -->
/// details | ¿Puedo configurar un wildcard en mi zona DNS?

Es posible configurar un wildcard en una zona DNS de OVHcloud.

Para ello, haga clic en las pestañas de abajo para ver cada uno de los **4** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Zonas DNS](/links/control-panel/web-dns-zone) y seleccione el dominio correspondiente.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Paso 2**
>>
>> A la derecha o debajo de la tabla, haga clic en `Añadir un registro`{.action} y seleccione el tipo de registro DNS para el que desea configurar un wildcard.
>>
> **Paso 3**
>>
>> En la ventana que se abre, en el campo de entrada `Subdominio *`{.action}, introduzca el valor `*`. El asterisco `*` representará todos los subdominios (por ejemplo: `www.domain.tld` o `ovhcloud.domain.tld`) de su nombre de dominio. Complete los demás campos con los valores deseados.
>>
> **Paso 4**
>>
>> Haga clic en `Siguiente`{.action} y luego en `Validar`{.action}.

> [!primary]
>
> La propagación de la modificación de una zona DNS puede tardar hasta **24** horas.

> [!success]
>
> Consulte todos los detalles en nuestra guía "[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

///
<!-- CP-STEPS-END:wildcard-dns -->

<br>

<!-- CP-STEPS-START:restore-deleted-dns-zone -->
/// details | He eliminado accidentalmente mi zona DNS y deseo restaurarla, ¿qué debo hacer?

OVHcloud envía un e-mail con una copia de la zona DNS en formato de texto una vez eliminada su zona DNS, para que pueda restaurarla posteriormente si es necesario.
Este e-mail se envía a la dirección e-mail asociada a su cuenta de cliente de OVHcloud.

> [!success]
>
> Si no ha recibido este e-mail, compruebe su correo no deseado o acceda a la página [Mi cuenta](/links/control-panel/account-dashboard) y haga clic en la pestaña `E-mails recibidos`{.action}.

Para restaurar su zona DNS, descargue el archivo que contiene la zona DNS desde el e-mail recibido.

Haga clic en las pestañas de abajo para ver cada uno de los **4** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Dominios](/links/control-panel/web-domains) y seleccione el dominio correspondiente.
>>
>> ![Dominios](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Paso 2**
>>
>> Seleccione la pestaña `Zona DNS`{.action} una vez posicionado en el nombre de dominio en cuestión. **Si la zona DNS está inactiva, actívela desde esta pestaña.**
>>
> **Paso 3**
>>
>> A la derecha o debajo de la tabla, haga clic en `Modificar en modo de texto`{.action}.
>>
> **Paso 4**
>>
>> En la ventana que se abre, sustituya todo el contenido que aparece por la copia de la zona DNS eliminada. A continuación, haga clic en `Siguiente`{.action} y luego en `Validar`{.action}.

> [!primary]
>
> La propagación de la modificación de una zona DNS puede tardar hasta **24** horas.

> [!success]
>
> Consulte más detalles en las siguientes guías:
>
> - [Crear una zona DNS de OVHcloud para un nombre de dominio](/pages/web_cloud/domains/dns_zone_create)
> - [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
> - [Gestionar el historial de una zona DNS](/pages/web_cloud/domains/dns_zone_history)

///
<!-- CP-STEPS-END:restore-deleted-dns-zone -->

/// details | ¿Cómo cancelar una solicitud de eliminación de mi zona DNS?

Para cada solicitud de eliminación de un servicio, se envía un e-mail de confirmación de eliminación a la dirección e-mail asociada a su cuenta de cliente de OVHcloud.

Si no ha hecho clic en el enlace de confirmación presente en este e-mail, no se preocupe, su zona DNS no será eliminada.

En caso contrario, la eliminación se ha iniciado y ya no puede cancelarse. La operación de eliminación puede tardar hasta 3 días antes de que pueda volver a crear una zona DNS de OVHcloud para su nombre de dominio.

///

<!-- CP-STEPS-START:activate-dns-zone -->
/// details | No consigo activar una zona DNS para mi nombre de dominio, ¿qué debo hacer?

Esta situación se produce cuando ya existe una zona DNS para su nombre de dominio en OVHcloud.

Haga clic en las pestañas de abajo para ver cada uno de los **2** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Zonas DNS](/links/control-panel/web-dns-zone) y compruebe si el nombre de dominio en cuestión aparece.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Paso 2**
>>
>> **Caso n.º 1** - El nombre de dominio en cuestión aparece en la lista:
>>
>> Esto significa que la zona DNS del nombre de dominio ya existe en su área de cliente de OVHcloud. Podrá gestionarla directamente en ese lugar.
>>
>> **Caso n.º 2** - El nombre de dominio en cuestión no aparece en la lista:
>>
>> Esto significa que la zona DNS del nombre de dominio está gestionada por otro identificador de cliente de OVHcloud distinto al suyo.
>>
>> De conformidad con el **R**eglamento **G**eneral de **P**rotección de **D**atos (**RGPD**), el identificador de cliente en el que se encuentra la zona DNS permanecerá confidencial.
>>
>> En esta situación, si no conoce este otro identificador de cliente, le invitamos a abrir un tíquet de asistencia desde el [centro de ayuda](https://help.ovhcloud.com/csm?id=csm_get_help) para recuperar la gestión de la zona DNS.

///
<!-- CP-STEPS-END:activate-dns-zone -->

/// details | ¿Por qué no encuentro la pestaña "GLUE" en mi área de cliente de OVHcloud?

La funcionalidad no está disponible con todas las extensiones de nombres de dominio.
Si la pestaña no aparece en su [área de cliente de OVHcloud](/links/manager), la opción "GLUE" no está disponible para su nombre de dominio.

> [!success]
>
> Consulte todos los detalles en nuestra guía "[Personalizar los servidores DNS de un nombre de dominio (Glue records)](/pages/web_cloud/domains/glue_registry)".

///

## Servidores DNS

> [!primary]
>
> La modificación de los servidores DNS es una manipulación delicada y puede provocar una interrupción de los servicios asociados a su nombre de dominio (alojamiento web, e-mail, etc.). En caso de duda, no dude en contactar con un [proveedor especializado](/links/partner).

<!-- CP-STEPS-START:change-dns-servers -->
/// details | ¿Cómo modificar mis servidores DNS?

Haga clic en las pestañas de abajo para ver cada uno de los **3** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Dominios](/links/control-panel/web-domains) y seleccione el dominio correspondiente.
>>
>> ![Dominios](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Paso 2**
>>
>> Seleccione la pestaña `Servidores DNS`{.action} una vez posicionado en el nombre de dominio en cuestión.
>>
> **Paso 3**
>>
>> Haga clic en el botón `Modificar los servidores DNS`{.action} situado a la derecha de la tabla "servidores DNS". Dependiendo de la resolución de su pantalla, el botón puede encontrarse debajo de la tabla.
>>
>> Podrá modificar los servidores DNS de su nombre de dominio en la página que aparece.

> [!primary]
>
> La propagación de la modificación de los servidores DNS declarados para un nombre de dominio puede tardar hasta **48** horas.

> [!success]
>
> Consulte todos los detalles en nuestra guía "[Modificar los servidores DNS de un nombre de dominio en OVHcloud](/pages/web_cloud/domains/dns_server_edit)".

///
<!-- CP-STEPS-END:change-dns-servers -->

<!-- CP-STEPS-START:customize-dns-servers -->
/// details | ¿Cómo personalizar mis servidores DNS?

Haga clic en las pestañas de abajo para ver cada uno de los **3** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Dominios](/links/control-panel/web-domains) y seleccione el dominio correspondiente.
>>
>> ![Dominios](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Paso 2**
>>
>> Seleccione la pestaña `Servidores DNS`{.action} una vez posicionado en el nombre de dominio en cuestión.
>>
> **Paso 3**
>>
>> Haga clic en el botón `Modificar los servidores DNS`{.action} situado a la derecha de la tabla "servidores DNS". Dependiendo de la resolución de su pantalla, el botón puede encontrarse debajo de la tabla.
>>
>> Podrá personalizar los servidores DNS de su nombre de dominio en la página que aparece.

> [!primary]
>
> La propagación de la modificación de los servidores DNS declarados para un nombre de dominio puede tardar hasta **48** horas.

> [!success]
>
> Consulte todos los detalles en nuestra guía "[Modificar los servidores DNS de un nombre de dominio en OVHcloud](/pages/web_cloud/domains/dns_server_edit)".

///
<!-- CP-STEPS-END:customize-dns-servers -->

<!-- CP-STEPS-START:replace-with-ovhcloud-dns -->
/// details | ¿Cómo sustituir mis servidores DNS por los de OVHcloud?

Haga clic en las pestañas de abajo para ver cada uno de los **3** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Dominios](/links/control-panel/web-domains) y seleccione el dominio correspondiente.
>>
>> ![Dominios](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Paso 2**
>>
>> Seleccione la pestaña `Servidores DNS`{.action} una vez posicionado en el nombre de dominio en cuestión.
>>
> **Paso 3**
>>
>> Haga clic en el botón `Modificar los servidores DNS`{.action} situado a la derecha de la tabla "servidores DNS". Dependiendo de la resolución de su pantalla, el botón puede encontrarse debajo de la tabla.
>>
>> Podrá sustituir los servidores DNS de su nombre de dominio por los de OVHcloud en la página que aparece.

> [!primary]
>
> La propagación de la modificación de los servidores DNS declarados para un nombre de dominio puede tardar hasta **48** horas.

> [!success]
>
> Consulte todos los detalles en nuestra guía "[Modificar los servidores DNS de un nombre de dominio en OVHcloud](/pages/web_cloud/domains/dns_server_edit)".

///
<!-- CP-STEPS-END:replace-with-ovhcloud-dns -->

/// details | En mi área de cliente, aparece un mensaje de error indicando que no estoy utilizando los servidores DNS de OVHcloud para mi nombre de dominio, ¿qué debo hacer?

En su [área de cliente de OVHcloud](/links/manager), este mensaje indica únicamente que la zona DNS creada para su nombre de dominio no es su zona DNS activa.

En otras palabras, esto significa que la configuración presente en esta zona DNS no es la que se aplica actualmente a su nombre de dominio.

No obstante, verifique que los servidores DNS mencionados en el mensaje de error corresponden a los servidores DNS que desea aplicar a su nombre de dominio. A continuación, compruebe la configuración de la zona DNS declarada en esos mismos servidores DNS ante su proveedor DNS.

Si desea utilizar los servidores DNS de OVHcloud para su nombre de dominio, podrá preparar la configuración DNS de la zona DNS presente en OVHcloud para que se ajuste a sus necesidades y luego activarla para su nombre de dominio.

> [!success]
>
> Consulte más detalles en las siguientes guías:
>
> - [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
> - [Modificar los servidores DNS de un nombre de dominio en OVHcloud](/pages/web_cloud/domains/dns_server_edit)

///

<!-- CP-STEPS-START:cannot-change-dns-servers -->
/// details | No consigo modificar los servidores DNS de un nombre de dominio desde mi área de cliente de OVHcloud, ¿qué debo hacer?

Esto significa que solo dispone de la gestión de la zona DNS del nombre de dominio, pero no del nombre de dominio en sí.

Para verificarlo, haga clic en las pestañas de abajo para ver cada uno de los **2** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Dominios](/links/control-panel/web-domains) y compruebe si el nombre de dominio en cuestión aparece.
>>
>> ![Dominios](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Paso 2**
>>
>> **Caso n.º 1** - El nombre de dominio no aparece en la lista:
>>
>> Esto significa que el nombre de dominio no se gestiona desde su área de cliente de OVHcloud. Realice una consulta [WHOIS](/links/web/domains-whois) para saber dónde está registrado.
>>
>> A continuación, podrá realizar una de las siguientes acciones (si es el titular declarado en el WHOIS del nombre de dominio):
>>
>> - El nombre de dominio está registrado en OVHcloud: Podrá realizar un [procedimiento de recuperación de contactos](/links/transversal/procedure-contact-change) para que su nombre de dominio se gestione desde su área de cliente de OVHcloud.
>> - El nombre de dominio no está registrado en OVHcloud: Podrá realizar una operación de [transferencia entrante](/pages/web_cloud/domains/transfer_incoming_generic_domain) hacia OVHcloud para que su nombre de dominio se gestione desde su área de cliente de OVHcloud.
>>
>> **Caso n.º 2** - El nombre de dominio aparece en la lista:
>>
>> Esto significa que no dispone de los derechos suficientes para gestionar el nombre de dominio desde su área de cliente de OVHcloud. Realice una consulta [WHOIS](/links/web/domains-whois) para verificar que usted figura como titular del nombre de dominio.
>>
>> A continuación, podrá realizar un [procedimiento de recuperación de contactos](/links/transversal/procedure-contact-change) para que su nombre de dominio se gestione íntegramente desde su área de cliente de OVHcloud.

///
<!-- CP-STEPS-END:cannot-change-dns-servers -->

## Más información <a name="go-further"></a>

[FAQ de e-mail en OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

[Alojamiento web - FAQ](/pages/web_cloud/web_hosting/faq-web_hosting)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda en el uso y la configuración de sus soluciones de OVHcloud, puede consultar nuestras distintas [soluciones de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
