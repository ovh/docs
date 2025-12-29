---
title: "FAQ sobre los dominios y DNS"
excerpt: "Encuentre las principales preguntas formuladas sobre los nombres de dominio, los servidores DNS y las zonas DNS"
updated: 2025-12-16
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

## Suscripción de un nombre de dominio

/// details | ¿Cómo puedo suscribirme a un nombre de dominio en OVHcloud?

Siga estos pasos:

1. Vaya a nuestro sitio web [OVHcloud](/links/website).
2. En la página que aparece y en el campo correspondiente, escriba el nombre de dominio que desea reservar (por ejemplo: `domain.tld`), luego haga clic en el botón `Buscar`{.action}.
3. En la nueva página que aparece, nuestra interfaz le indicará si el nombre de dominio elegido está disponible para la compra o no. Si ya está reservado con la sintaxis que ingresó, modifíquelo y realice una nueva búsqueda de disponibilidad.
4. Una vez que haya encontrado un nombre de dominio disponible, haga clic en el botón `Comprar`{.action}, luego en el botón `Continuar con el pedido`{.action} en la columna de la derecha.
5. Seleccione las opciones o servicios adicionales a los que desea suscribirse junto con su nombre de dominio, luego haga clic en `Continuar`{.action} hasta que el proceso de compra le pida que se autentique o cree una cuenta de cliente OVHcloud.
6. Una vez autenticado con su cuenta de cliente OVHcloud, podrá personalizar las informaciones de contacto (propietario/titular, administrador, técnico) para su nombre de dominio. Haga clic luego en el botón `Continuar`{.action} para acceder al resumen de su pedido.
7. En la página `Resumen de su pedido` y si es necesario, podrá modificar la configuración DNS que se aplicará a su nombre de dominio haciendo clic en el enlace `Modificar la configuración`{.action}. Una vez que sus modificaciones estén terminadas, haga clic en el botón `Pagar`{.action} para acceder a la última etapa de su pedido.

Pague su pedido para iniciar la reserva de su nombre de dominio así como la instalación de los servicios y opciones a los que se ha suscrito.

Algunos minutos más tarde, recibirá un correo electrónico de confirmación para su pedido.
Podrá administrar su nombre de dominio conectándose a su [área de cliente de OVHcloud](/links/manager).

No dude en crear un ticket de asistencia desde el [centro de ayuda](https://help.ovhcloud.com/csm?id=csm_get_help) si es necesario.

///

/// details | ¿Cómo puedo comprar un nombre de dominio en el mercado secundario?

La compra de un nombre de dominio en el mercado secundario se realiza de la misma manera que la suscripción de un mismo nombre de dominio.

Siga estos pasos:

1. Vaya a nuestro sitio web [OVHcloud](/links/website).
2. En la página que aparece y en el campo correspondiente, escriba el nombre de dominio que desea reservar (por ejemplo: `domain.tld`), luego haga clic en el botón `Buscar`{.action}.
3. En la nueva página que aparece, nuestra interfaz le indicará si el nombre de dominio elegido está disponible para la compra o no. Si ya está reservado con la sintaxis que ingresó, modifíquelo y realice una nueva búsqueda de disponibilidad.
4. Una vez que haya encontrado un nombre de dominio disponible, haga clic en el botón `Comprar`{.action}, luego en el botón `Continuar con el pedido`{.action} en la columna de la derecha.
5. Seleccione las opciones o servicios adicionales a los que desea suscribirse junto con su nombre de dominio, luego haga clic en `Continuar`{.action} hasta que el proceso de compra le pida que se autentique o cree una cuenta de cliente OVHcloud.
6. Una vez autenticado con su cuenta de cliente OVHcloud, podrá personalizar las informaciones de contacto (propietario/titular, administrador, técnico) para su nombre de dominio. Haga clic luego en el botón `Continuar`{.action} para acceder al resumen de su pedido.
7. En la página `Resumen de su pedido` y si es necesario, podrá modificar la configuración DNS que se aplicará a su nombre de dominio haciendo clic en el enlace `Modificar la configuración`{.action}. Una vez que sus modificaciones estén terminadas, haga clic en el botón `Pagar`{.action} para acceder a la última etapa de su pedido.

Pague su pedido para iniciar la reserva de su nombre de dominio así como la instalación de los servicios y opciones a los que se ha suscrito.

Algunos minutos más tarde, recibirá un correo electrónico de confirmación para su pedido.
Podrá administrar su nombre de dominio conectándose a su [área de cliente de OVHcloud](/links/manager).

No dude en crear un ticket de asistencia desde el [centro de ayuda](https://help.ovhcloud.com/csm?id=csm_get_help) si es necesario.

///

## Gestión de un nombre de dominio

/// details | ¿Cómo saber si mi nombre de dominio está registrado en OVHcloud?

Para ello, puede realizar una consulta [WHOIS](/links/web/domains-whois) para saber dónde está registrado su nombre de dominio y verificar que esté declarado como titular.

Cada oficina de registro (como OVHcloud) tiene la posibilidad de elegir cómo mostrar las informaciones relativas a un nombre de dominio en el WHOIS.

Una vez realizada la consulta WHOIS, busque en el resultado al menos una de las siguientes líneas:

- Domain Name: ovhcloud.com
- Registrar WHOIS Server: whois.ovh.com
- Registrar URL: https://ovh.com
- Registrar: OVH sas

Si observa al menos una de estas líneas en el resultado, su nombre de dominio está bien registrado en OVHcloud.

En caso contrario, su nombre de dominio está registrado en otra oficina de registro. Busque entonces las líneas relativas al `Registrar` para identificar la oficina de registro donde está registrado su nombre de dominio.

///

/// details | ¿Cómo conocer la fecha de vencimiento de un nombre de dominio?

La solución más rápida es realizar una consulta [WHOIS](/links/web/domains-whois) sobre el nombre de dominio. Una vez realizada la consulta, busque en el resultado la línea correspondiente a la fecha de vencimiento (por ejemplo: `Expiry Date: 2025-09-22T08:00:00Z`, `Registry Expiry Date: 2025-09-22T08:00:00Z`, etc.).

Si su nombre de dominio está registrado en OVHcloud, también puede seguir estos pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager).
2. Haga clic en su nombre en la esquina superior derecha y elija `Mis soluciones y servicios`{.action}.
3. En la tabla que aparece, busque la línea correspondiente a su nombre de dominio, luego identifique la fecha presente en la columna `Fecha de aplicación`. Esta fecha corresponde a la fecha de vencimiento de su nombre de dominio.

///

/// details | ¿Cómo cambiar la fecha anual de vencimiento de un nombre de dominio?

La fecha anual de vencimiento de un nombre de dominio (por ejemplo: el 24 de septiembre) está preestablecida en función de la fecha de registro (creación) del nombre de dominio.

Normalmente, la fecha anual de vencimiento de un nombre de dominio es la misma que la fecha en la que registró el nombre de dominio.

Por lo tanto, no es posible cambiar la fecha anual de vencimiento de un nombre de dominio.

///

<br>

/// details | ¿Cómo puedo corregir una errata en mi nombre de dominio?

Una vez que se contrata un nombre de dominio, se registra a partir de los caracteres que le definiste al realizar la compra. El registro se realiza ante el registro de la extensión de tu nombre de dominio (por ejemplo: el registro de *.com*) y se aplican tarifas de reserva por parte del registrador (como OVHcloud).

Un nombre de dominio es una dirección única en Internet, por ejemplo: `ovhcloud.com`.
Cualquier cambio en este nombre, ya sea un carácter o una extensión (.com, .fr, .net, etc.), lo convierte en un nombre de dominio completamente diferente.

Por lo tanto, si cometiste un error de escritura al realizar tu compra, no será posible modificarlo ni corregirlo. Deberás contratar un nuevo nombre de dominio independientemente del anterior (siempre que la nueva ortografía deseada no esté ya reservada por otra persona).

Los nombres de dominio se consideran productos personalizados, ya que se registran específicamente para un titular y se bloquean para otros desde el momento de la compra. Por esta razón, una vez registrados, no pueden ser reembolsados.

///

/// details | ¿Cómo modificar un nombre de dominio ya contratado?

Una vez que se contrata un nombre de dominio, se registra a partir de los caracteres que le definiste al realizar la compra. El registro se realiza ante el registro de la extensión de tu nombre de dominio (por ejemplo: el registro de *.com*) y se aplican tarifas de reserva por parte del registrador (como OVHcloud).

Un nombre de dominio es una dirección única en Internet, por ejemplo: `ovhcloud.com`.
Cualquier cambio en este nombre, ya sea un carácter o una extensión (.com, .fr, .net, etc.), lo convierte en un nombre de dominio completamente diferente.

Por lo tanto, si cometiste un error de escritura al realizar tu compra, no será posible modificarlo ni corregirlo. Deberás contratar un nuevo nombre de dominio independientemente del anterior (siempre que la nueva ortografía deseada no esté ya reservada por otra persona).

Los nombres de dominio se consideran productos personalizados, ya que se registran específicamente para un titular y se bloquean para otros desde el momento de la compra. Por esta razón, una vez registrados, no pueden ser reembolsados.

///

/// details | ¿Cómo eliminar un nombre de dominio?

Siga estos pasos:

1. Inicie sesión en su [área de cliente de OVHcloud](/links/manager).
2. Haga clic en su nombre en la esquina superior derecha y elija `Mis soluciones y servicios`{.action}.
3. En la tabla que aparece, busque la línea correspondiente a su nombre de dominio, haga clic en el botón `...`{.action} a la derecha y luego en `Dar de baja mi servicio`{.action}.
4. En la página que aparece, seleccione el modo de cancelación (inmediatamente o en la fecha de vencimiento del servicio) y haga clic en el botón `Sí, dar de baja`{.action} de abajo.

Su nombre de dominio se suspenderá en la fecha de vencimiento y, a partir de esa fecha, se eliminará **definitivamente** dentro de un plazo máximo de 60 días. Este plazo está definido por la **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) para garantizar que un nombre de dominio se elimine por completo y esté nuevamente disponible para su registro por otro propietario/titular.

> [!primary]
>
> Una vez solicitada la baja, puede acelerar la eliminación creando una solicitud de asistencia desde el [centro de ayuda](https://help.ovhcloud.com/csm?id=csm_get_help). Deberá proporcionar documentos justificativos para acelerar esta eliminación.

> [!success]
>
> Encuentre todos los detalles en nuestra guía « [Cómo dar de baja sus servicios de OVHcloud](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_cancel_services) ».

///

/// details | He recibido un correo electrónico sobre la validación de la información del titular asociada a mi nombre de dominio, ¿qué debo hacer?

En primer lugar, si tiene dudas sobre la legitimidad del correo electrónico recibido, consulte nuestra guía « [Protéjase contra el fraude: cómo detectar los mensajes de correo fraudulento y el phishing](/pages/account_and_service_management/account_information/phishing_care) ».

De acuerdo con una directiva de la **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) del 01/09/2014, los registradores (por ejemplo: OVHcloud) deben verificar la validez de las coordenadas de los titulares/propietarios de nombres de dominio. OVHcloud envía un correo electrónico a los titulares/propietarios del nombre de dominio registrado a la dirección de correo electrónico de contacto declarada en OVHcloud.

Recibirá este correo electrónico cuando realice una de las siguientes acciones:

- Registro de un nuevo nombre de dominio.
- Transferencia de un nombre de dominio.
- Modificación de las coordenadas asociadas a su nombre de dominio.

Este correo electrónico contiene un enlace para verificar rápidamente sus coordenadas como propietario/titular legal del nombre de dominio.

Atención: Esta verificación debe realizarse dentro de un plazo de 15 días. Si no se realiza, el nombre de dominio se suspenderá técnicamente. Permanecerá contractualmente a su nombre, pero ya no será accesible en Internet. Los visitantes de su sitio web verán un mensaje de error.

Puede recibir los siguientes correos electrónicos durante los primeros 15 días:

- **Día 0**: Inmediatamente después de haber contratado el nombre de dominio o haber modificado sus coordenadas, usted (o la persona registrada como propietario/titular del nombre de dominio) recibirá el primer correo electrónico con un enlace de verificación.
- **Días 4, 9 y 13 (correos electrónicos de recordatorio)**: Si aún no ha verificado el nombre de dominio, recibirá nuevamente el correo electrónico.
- **Día 14**: Si aún no ha verificado el nombre de dominio, se envía el correo electrónico una vez más. Además, se envía un correo electrónico a la dirección de correo electrónico del administrador/titular del nombre de dominio para informarle de que las coordenadas de este último no han sido confirmadas.
- **Día 15**: Si el propietario/titular del nombre de dominio aún no ha respondido, enviamos un correo electrónico al administrador del nombre de dominio para informarle de la situación y de la desactivación del nombre de dominio.

Tras estos 15 días, el sistema enviará correos electrónicos adicionales (hasta 9 correos electrónicos) antes de eliminar su nombre de dominio. Esta eliminación se realizará 60 días después del día 0.

> [!warning]
>
> Según la extensión del nombre de dominio (por ejemplo: *.com*, *.net*, etc.), algunos plazos mencionados anteriormente pueden variar. Le recomendamos encarecidamente que verifique, ante el registro de la extensión de su nombre de dominio, el proceso de verificación del control de contactos.

///

/// details | No he recibido el correo electrónico de validación del titular asociado a mi nombre de dominio y este está suspendido, ¿qué debo hacer?

Si no ha recibido el correo electrónico de validación del propietario de su nombre de dominio, verifique los siguientes puntos:

1. La dirección de correo electrónico declarada para el titular del nombre de dominio es válida y operativa.
2. El correo electrónico de validación no se encuentra en la carpeta de spam.

Después de verificar y confirmar los dos puntos anteriores, si aún no puede recuperar el correo electrónico de validación del titular, le invitamos a abrir una solicitud de asistencia desde el [centro de ayuda](https://help.ovhcloud.com/csm?id=csm_get_help) para solicitar el reenvío de este correo electrónico.

///

/// details | ¿Qué es un nombre de dominio en formato IDN?

Inicialmente, los nombres de dominio solo podían contener caracteres **ASCII** específicos (incluidas las 26 letras del alfabeto latino). Un **I**nternationalized **D**omain **N**ame (**IDN**) permite, entre otras cosas, utilizar caracteres especiales o acentuados, o incluso otros alfabetos (como el *cirílico*).

En OVHcloud, es perfectamente posible contratar IDN y utilizarlos como un nombre de dominio autónomo con nuestros otros servicios (alojamiento web, zona DNS, etc.<sup>1</sup>).

Una vez contratados, los IDN aparecen en su [área de cliente de OVHcloud](/links/manager) en formato **xn--**.

Aunque su dominio se muestre en [notación internacionalizada (IDN)](https://es.wikipedia.org/wiki/Nombre_de_dominio_internacionalizado) en su [área de cliente de OVHcloud](/links/manager), funcionará y se mostrará de forma completamente normal en otros lugares. La dirección de su sitio web se mostrará tal como la solicitó. Sus direcciones de correo electrónico también se mostrarán como desee a sus contactos.

> [!alert]
>
> <sup>1</sup>: No se recomienda utilizar una dirección de correo electrónico con un nombre de dominio IDN desde un cliente de correo (Outlook, Mail de macOS, etc.). De hecho, algunos clientes de correo aún no interpretan los nombres de dominio con caracteres acentuados, lo que bloquea la transmisión de los correos electrónicos. Cuando un remitente le envía un correo electrónico, recibe un mensaje automático indicando que su dirección de correo electrónico no existe.
>
> **Se recomienda encarecidamente reservar, además de su nombre de dominio con caracteres acentuados, el mismo nombre de dominio sin estos acentos, para evitar cualquier incompatibilidad en los intercambios de correos electrónicos.**

///

/// details | ¿Cómo corregir un nombre de dominio en formato IDN?

Al igual que los nombres de dominio « clásicos », una vez que se contrata un nombre de dominio o un IDN, se registra a partir de los caracteres que le definiste al realizar la compra.

Por lo tanto, si cometiste un error de escritura al realizar tu compra, no será posible corregirlo. Deberás contratar un nuevo nombre de dominio independientemente del anterior (siempre que la nueva ortografía deseada no esté ya reservada por otra persona).

///

/// details | ¿Cómo renovar un solo nombre de dominio incluido en un pack Alldom?

Para ello, debe estar al menos declarado como [contacto « Facturación »](/pages/account_and_service_management/account_information/managing_contacts) del nombre de dominio en cuestión. A continuación, deberá modificar el modo de renovación del nombre de dominio para pasarlo a **renovación automática**.

Para ello, siga estos pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager).
2. Haga clic en su nombre en la esquina superior derecha y elija `Mis soluciones y servicios`{.action}.
3. En la tabla que aparece y a la derecha del nombre de dominio en cuestión, haga clic en el botón `...`{.action} en la columna `Acciones`, y luego en `Configurar la renovación`{.action}. A continuación, podrá configurar la renovación de este nombre de dominio en **renovación automática**.

> [!primary]
>
> Si dispone de una antigua oferta de alojamiento web que incluye un nombre de dominio gratuito y modifica esta oferta de alojamiento, esto puede anular en algunos casos la gratuidad del nombre de dominio.
>
> En caso de duda, le invitamos a abrir una solicitud de asistencia desde el [centro de ayuda](https://help.ovhcloud.com/csm?id=csm_get_help) especificando el nombre de dominio y el alojamiento web en cuestión.

> [!success]
>
> Encuentre todos los detalles en nuestra guía « [Cómo renovar mis servicios OVHcloud](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal) ».

///

## Transferencia de un nombre de dominio

/// details | ¿Es transferible mi nombre de dominio después de un cambio de propietario?

La **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) ha implementado medidas de seguridad para prevenir transferencias o cambios de propietarios no autorizados o abusivos de los nombres de dominio.

La ICANN ha definido un plazo inamovible de **60** días entre cada operación que pueda realizarse sobre un nombre de dominio (creación, cambio de propietario, transferencia).

Las reglas establecidas por la ICANN deben respetarse obligatoriamente por los registradores (como OVHcloud).

Por lo tanto, no tendrá otra opción que esperar hasta el final del plazo de 60 días para poder transferir su nombre de dominio después de haber cambiado su propietario.

///

/// details | Mi nombre de dominio está bloqueado contra la transferencia durante 60 días, ¿qué debo hacer?

La **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) ha implementado medidas de seguridad para prevenir transferencias o cambios de propietarios no autorizados o abusivos de los nombres de dominio.

La ICANN ha definido un plazo inamovible de **60** días entre cada operación que pueda realizarse sobre un nombre de dominio (creación, cambio de propietario, transferencia).

Las reglas establecidas por la ICANN deben respetarse obligatoriamente por los registradores (como OVHcloud).

Por lo tanto, no tendrá otra opción que esperar hasta el final del plazo de 60 días para realizar una nueva operación (cambio de propietario o transferencia) sobre su nombre de dominio.

///

/// details | No encuentro mi nombre de dominio en mi área de cliente, ¿qué debo hacer?

En primer lugar, realice una consulta [WHOIS](/links/web/domains-whois) para saber dónde está registrado su nombre de dominio y verificar que está declarado como titular del mismo.

**Caso n°1.A** - Su nombre de dominio está registrado en OVHcloud y está declarado como titular:

Realice una [procedimiento de recuperación de contactos](/links/transversal/procedure-contact-change) para que su nombre de dominio sea gestionado completamente en su [área de cliente de OVHcloud](/links/manager). De esta manera, ya no tendrá que contactar a la persona que gestionaba anteriormente su nombre de dominio.

**Caso n°1.B** - Su nombre de dominio está registrado en OVHcloud pero no está declarado como titular:

Conforme al **R**eglamento **G**eneral de **P**rotección de **D**atos (**RGPD**), OVHcloud no podrá proporcionar información sobre la persona o organización que gestiona el nombre de dominio en OVHcloud.

Sin embargo, puede intentar contactar a la persona o organización que lo gestiona siguiendo las instrucciones de [este formulario](/links/web/contact-domain-owner).

**Caso n°2** - Su nombre de dominio no está registrado en OVHcloud:

Contacte directamente al registrador (indicado en las líneas que comienzan con el término `Registrar`) de su nombre de dominio para continuar sus investigaciones. Si el nombre de dominio no está registrado en OVHcloud, no podremos ayudarle en este asunto.

///

/// details | No puedo contactar a la persona que gestiona mi nombre de dominio, ¿qué debo hacer?

En primer lugar, realice una consulta [WHOIS](/links/web/domains-whois) para verificar que está declarado como titular del nombre de dominio.

**Caso n°1** - Está declarado como titular del nombre de dominio:

Realice una [procedimiento de recuperación de contactos](/links/transversal/procedure-contact-change) para que su nombre de dominio sea gestionado completamente en su [área de cliente de OVHcloud](/links/manager). De esta manera, ya no tendrá que contactar a la persona que gestionaba anteriormente su nombre de dominio.

**Caso n°2** - No está declarado como titular del nombre de dominio:

Conforme al **R**eglamento **G**eneral de **P**rotección de **D**atos (**RGPD**), OVHcloud no podrá proporcionar información sobre la persona o organización que gestiona el nombre de dominio en OVHcloud.

Sin embargo, puede intentar contactar a la persona o organización que lo gestiona siguiendo las instrucciones de [este formulario](/links/web/contact-domain-owner).

///

/// details | ¿Puedo vender mi nombre de dominio?

Actualmente, OVHcloud no gestiona directamente el proceso de venta de nombres de dominio ya registrados. No ofrecemos este tipo de servicio.

Sin embargo, si desea poner su nombre de dominio a la venta en un mercado secundario, contacte a uno de nuestros socios:

- [Afternic](https://www.afternic.com).
- [Sedo](https://sedo.com).

Si desea vender su nombre de dominio, puede agregarlo a estas plataformas. Una vez agregado, los proveedores autorizados ofrecerán su nombre de dominio al precio que haya definido en una de las plataformas mencionadas anteriormente.

///

## Zona DNS

> [!primary]
>
> La modificación de una zona DNS es una operación sensible y puede provocar interrupciones en los servicios asociados a su nombre de dominio (alojamiento web, correo electrónico, etc.). En caso de duda, no dude en contactar a un [proveedor especializado](/links/partner).

/// details | ¿Qué es una zona DNS?

La zona DNS de un nombre de dominio contiene una configuración aplicable a este último. Está compuesta por información técnica, llamada *registros DNS*. La zona DNS funciona como un centro de enrutamiento, dirigiendo el tráfico hacia los servicios asociados al dominio.

Puede, por ejemplo, especificar:

- La dirección IP (registros DNS de tipo *A* y *AAAA*) de su alojamiento web para mostrar su sitio web con su nombre de dominio.
- Los servidores de correo electrónico (registros DNS de tipo *MX*) hacia los cuales su nombre de dominio debe redirigir los correos electrónicos que recibe.
- Información relacionada con la seguridad / autenticación de sus servicios (alojamiento web, servidor web, servidor de correo electrónico, etc.) asociados a su nombre de dominio (registros DNS de tipo *SPF*, *DKIM*, *DMARC*, etc.).

Una zona DNS está alojada / registrada en **servidores DNS**. Estos **servidores DNS** deben declararse ante el registrador del nombre de dominio para utilizar la zona DNS que alojan.

> [!success]
>
> Encuentre todos los detalles en nuestra guía « [Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information) ».

///

/// details | ¿Qué es un registro DNS?

Los registros DNS se utilizan, por ejemplo, para:

- Asociar un nombre de dominio a una dirección IP, lo que permite a los usuarios acceder a un sitio web o a un servidor remoto.
- Asociar un nombre de dominio a otras recursos en línea utilizando un nombre de dominio (más fácil de recordar) en lugar de una dirección IP.
- Validar configuraciones de asociación o seguridad, especialmente para servicios de correo electrónico y alojamientos compartidos.

Existen muchos tipos de registros DNS. Cada uno tiene un propósito específico en la resolución DNS. En OVHcloud, se distinguen en tres categorías:

- **Campos de puntero**: `A`, `AAAA`, `NS`, `CNAME` y `DNAME`.
- **Campos extendidos**: `CAA`, `TXT`, `NAPTR`, `SRV`, `LOC`, `SSHFP`, `TLSA`, `RP`, `SVCB` y `HTTPS`.
- **Campos de correo**: `MX`, `SPF`, `DKIM` y `DMARC`.

> [!success]
>
> Encuentre más detalles en las siguientes guías:
>
> - Información general:
>     - [Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records)
> - Registros DNS de puntero:
>     - [Añadir un registro DNS de tipo A a un dominio](/pages/web_cloud/domains/dns_zone_a_record_creation)
>     - [Añadir un registro DNS de tipo AAAA a un dominio](/pages/web_cloud/domains/dns_zone_aaaa_record_creation)
>     - [Añadir un registro DNS de tipo CNAME a un dominio](/pages/web_cloud/domains/dns_zone_cname_record_creation)
> - Registros DNS extendidos:
>     - [Añadir un registro DNS de tipo TXT a un dominio](/pages/web_cloud/domains/dns_zone_txt_record_creation)
> - Registros DNS de correo:
>     - [Configurar un registro MX para la gestión del correo](/pages/web_cloud/domains/dns_zone_mx)
>     - [Mejorar la seguridad del correo electrónico mediante el registro SPF](/pages/web_cloud/domains/dns_zone_spf)
>     - [Mejorar la seguridad del correo electrónico mediante el registro DKIM](/pages/web_cloud/domains/dns_zone_dkim)
>     - [Mejorar la seguridad del correo electrónico mediante el registro DMARC](/pages/web_cloud/domains/dns_zone_dmarc)

///

/// details | ¿Cuáles son los registros DNS disponibles en una zona DNS de OVHcloud?

Siga estos pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
2. Haga clic en el menú `Zonas DNS`{.action} y seleccione el dominio correspondiente.
3. A la derecha o debajo de la tabla, haga clic en `Añadir un registro`{.action}.

En este punto, visualizará todos los registros DNS que podrá agregar mediante el asistente de configuración de OVHcloud.

Gracias a este asistente de configuración, podrá añadir los siguientes tipos de registros DNS:

- **Campos de puntero**: `A`, `AAAA`, `NS`, `CNAME` y `DNAME`.
- **Campos extendidos**: `CAA`, `TXT`, `NAPTR`, `SRV`, `LOC`, `SSHFP`, `TLSA`, `RP`, `SVCB` y `HTTPS`.
- **Campos de correo**: `MX`, `SPF`, `DKIM` y `DMARC`.

> [!primary]
>
> Si desea añadir un registro DNS que no esté en la lista, cierre la ventana que se abrió después de hacer clic en el botón `Añadir un registro`{.action} y haga clic en el botón `Editar en modo de texto`{.action} situado a la derecha o debajo de la tabla.
>
> De esta manera, podrá añadir manualmente el registro DNS de su elección.

> [!success]
>
> Encuentre más detalles en las siguientes guías:
>
> - Información general:
>     - [Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records)
> - Registros DNS de puntero:
>     - [Añadir un registro DNS de tipo A a un dominio](/pages/web_cloud/domains/dns_zone_a_record_creation)
>     - [Añadir un registro DNS de tipo AAAA a un dominio](/pages/web_cloud/domains/dns_zone_aaaa_record_creation)
>     - [Añadir un registro DNS de tipo CNAME a un dominio](/pages/web_cloud/domains/dns_zone_cname_record_creation)
> - Registros DNS extendidos:
>     - [Añadir un registro DNS de tipo TXT a un dominio](/pages/web_cloud/domains/dns_zone_txt_record_creation)
> - Registros DNS de correo:
>     - [Configurar un registro MX para la gestión del correo](/pages/web_cloud/domains/dns_zone_mx)
>     - [Mejorar la seguridad del correo electrónico mediante el registro SPF](/pages/web_cloud/domains/dns_zone_spf)
>     - [Mejorar la seguridad del correo electrónico mediante el registro DKIM](/pages/web_cloud/domains/dns_zone_dkim)
>     - [Mejorar la seguridad del correo electrónico mediante el registro DMARC](/pages/web_cloud/domains/dns_zone_dmarc)

///

/// details | ¿Puedo cambiar los servidores DNS declarados en mi zona DNS de OVHcloud?

No se recomienda modificar manualmente los registros DNS de tipo NS de un nombre de dominio en una zona DNS de OVHcloud, ya que esto impediría la resolución DNS de la zona DNS correspondiente.

Si desea modificar la configuración de los registros DNS de tipo NS de su nombre de dominio, probablemente sea porque desea cambiar los servidores DNS declarados para este último.

> [!primary]
>
> Para cambiar los servidores DNS de su nombre de dominio en OVHcloud, debe existir ya una zona DNS en los nuevos servidores DNS deseados.
> Además, deberá verificar en esta misma zona DNS que los registros DNS de tipo NS corresponden correctamente a los servidores DNS asociados.

Para ello, siga estos pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
2. Haga clic en el menú `Dominios`{.action} y seleccione el dominio correspondiente.
3. Seleccione la pestaña `Servidores DNS`{.action} una vez posicionado en el nombre de dominio deseado.
4. Para modificar los servidores DNS, haga clic en el botón `Cambiar los servidores DNS`{.action} situado a la derecha de la tabla « servidores DNS ». Dependiendo de la resolución de su pantalla, el botón puede estar debajo de la tabla.

Podrá modificar los servidores DNS para su nombre de dominio en la página que aparece.

> [!primary]
>
> La propagación de los cambios en los servidores DNS declarados para un nombre de dominio puede tardar hasta **48** horas.

En caso de error, le invitamos a abrir una solicitud de asistencia desde el [centro de ayuda](https://help.ovhcloud.com/csm?id=csm_get_help) especificando las siguientes informaciones:

- Los nombres de los servidores DNS que desea configurar.
- El mensaje de error encontrado.

> [!success]
>
> Encuentre todos los detalles en nuestra guía « [Modificar los servidores DNS de un dominio de OVHcloud](/pages/web_cloud/domains/dns_server_edit) ».

///

/// details | ¿Cuál es la diferencia entre un registro DNS de tipo A (IPv4) y AAAA (IPv6)?

La red Internet ha funcionado desde principios de los años 90 siguiendo el estándar IPv4. Este estándar permite proporcionar una dirección IP X.X.X.X (donde cada « X » es un número entre 0 y 255) a cada una de las máquinas conectadas a la red Internet (servidores, ordenadores, smartphones, tabletas, etc.). Sin embargo, este estándar limita a aproximadamente 4 mil millones el número de dispositivos conectados a la red Internet.

Posteriormente, se introdujo el protocolo IPv6 para permitir conectar hasta 340 sextillones de dispositivos a la red Internet.

Las direcciones IPv4 ahora son menos disponibles, por lo que resulta más difícil agregar nuevas máquinas a la red Internet con el estándar IPv4. Sin embargo, las conexiones con una dirección IPv6 son útiles solo si, por ejemplo, su sitio web también está disponible con este mismo protocolo.

Los registros DNS de tipo A y AAAA son dos tipos de registros de recursos utilizados para asociar un nombre de dominio a una dirección IP.

Sus principales diferencias residen en el tipo de dirección IP que utilizan:

- **Registro A** (también llamado « registro de host »): Asocia un nombre de dominio a una dirección IPv4 (por ejemplo, 213.0.113.0). Las direcciones IPv4 son direcciones de 32 bits, generalmente escritas en notación decimal punteada.
- **Registro AAAA** (también llamado « registro cuádruple A »): Asocia un nombre de dominio a una dirección IPv6 (por ejemplo, 2001:db8:1:1b00:213:0:113:0). Las direcciones IPv6 son direcciones de 128 bits, generalmente escritas en notación hexadecimal.

En otras palabras, los registros A se utilizan para direcciones IPv4, mientras que los registros AAAA se utilizan para direcciones IPv6. Ambos tipos de registros se utilizan para dirigir el tráfico a una dirección IP específica, pero se emplean para diferentes versiones del protocolo Internet.

Es importante destacar que un dominio puede tener tanto registros A como AAAA, lo que le permite ser accesible en redes IPv4 e IPv6. Esto se conoce como « doble apilamiento », una práctica común para sitios web y servicios que desean ser accesibles para usuarios en redes IPv4 e IPv6.

> [!success]
>
> Encuentre más detalles en las siguientes guías:
>
> - [Añadir un registro DNS de tipo A a un dominio](/pages/web_cloud/domains/dns_zone_a_record_creation)
> - [Añadir un registro DNS de tipo AAAA a un dominio](/pages/web_cloud/domains/dns_zone_aaaa_record_creation)
> - [Configure una dirección IPv6 para su sitio web](/pages/web_cloud/web_hosting/configure_ipv6)

///

/// details | ¿Cómo configurar un registro PTR para mi dirección IP externa en OVHcloud?

En OVHcloud, las configuraciones de **P**oin**T**er **R**ecord (**PTR**) no pueden gestionarse directamente en nuestras zonas DNS.

Para configurar un registro reverse/PTR para una dirección IP externa, contacte a su **P**roveedor de **A**cceso a **I**nternet (**PAI**) ya que es responsable de la gestión de los registros DNS inversos de las direcciones IP que asigna.

> [!success]
>
> Encuentre todos los detalles en nuestra guía « [Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records) ».

///

/// details | ¿Cómo cambiar el TTL predeterminado en mi zona DNS de OVHcloud?

Siga estos pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
2. Haga clic en el menú `Zonas DNS`{.action} y seleccione el dominio correspondiente.
3. A la derecha o debajo de la tabla, haga clic en `Modificar el TTL por defecto`{.action}.
4. En la ventana que se abre, ajuste el valor bajo la etiqueta `TTL por defecto` según sus necesidades, luego haga clic en `Editar`{.action}.

> [!primary]
>
> La propagación de los cambios en una zona DNS puede tardar hasta **24** horas.

///

/// details | ¿Qué es un registro DNS de tipo SOA?

El registro DNS de tipo **S**tart **O**f **A**uthority (**SOA**) proporciona un conjunto de elementos relacionados con la configuración DNS de un nombre de dominio.

A continuación, se muestra el resultado de una consulta SOA para el nombre de dominio `domain.tld`.

```bash
              ;; ANSWER SECTION:                                                                                                     

domain.tld.           3600    IN      SOA     dns200.anycast.me. tech.ovh.net. 2025091801 86400 3600 3600000 300   
```

|Elemento en el resultado|Descripción|Correspondencia en el ejemplo anterior|
|---|---|---|
|**NS (Name Server)**|Servidor DNS principal declarado para el nombre de dominio `domain.tld`.|`dns200.anycast.me`.|
|**Email address**|Dirección de correo electrónico del responsable de la zona DNS.|`tech.ovh.net` (el punto entre los términos `tech` y `ovh` debe reemplazarse por un `@`).|
|**Serial number**|Número de serie único que se incrementa cada vez que se modifica la zona DNS.<br>Generalmente está compuesto por la fecha de actualización en formato `YYYYMMDD` seguido del número de actualizaciones realizadas ese día.|`2025091801`: Aquí se realizaron 2 actualizaciones (`00` para 1, `01` para 2, etc.) el 18/09/2025.|
|**Refresh time**|Intervalo (en segundos) entre cada actualización de los servidores DNS secundarios (componentes de la red DNS) con el servidor DNS principal.|`86400` (24 horas).|
|**Retry time**|Intervalo (en segundos) entre cada intento de actualización de los parámetros de los servidores DNS secundarios (componentes de la red DNS) con el servidor DNS principal si este no responde o está fuera de servicio.|`3600` (1 hora).|
|**Expire time**|Plazo (en segundos) después del cual los servidores DNS secundarios (componentes de la red DNS) dejan de responder a las consultas DNS si el servidor DNS principal no se actualiza con ellos.|`3600000` (1000 horas, 41,67 días).|
|**Minimum TTL**|Duración de vida mínima (en segundos) durante la cual los registros DNS de la zona DNS se almacenan en caché en los servidores DNS secundarios (componentes de la red DNS).|`300` (5 minutos).|

///

<br>

/// details | ¿Cómo verificar la configuración de mi zona DNS?

Aquí hay varias soluciones para verificar la configuración de una zona DNS:

- **Una herramienta de verificación en línea**: Varios herramientas en línea permiten verificar la configuración de su zona DNS. Puede encontrarlas directamente mediante un navegador web (Chrome, Edge, Firefox, Safari, etc.) introduciendo las palabras clave adecuadas (por ejemplo: « verificar propagación DNS ») en un motor de búsqueda.

- **El comando « dig »**: Si tiene acceso a un *terminal* desde un sistema operativo Linux o macOS, puede utilizar el comando `dig` para verificar la configuración de su zona DNS en la red DNS.

- **El comando « nslookup »**: El comando `nslookup` está disponible en la mayoría de los sistemas operativos y también permite verificar la configuración de su zona DNS.

- **Desde su área de cliente de OVHcloud**: Para ello, siga estos pasos (si la zona DNS activa de su nombre de dominio está gestionada en OVHcloud):
    1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
    2. Haga clic en el menú `Zonas DNS`{.action} y seleccione el dominio correspondiente.
    3. En la tabla de la página que aparece, visualizará todos los registros DNS declarados para su nombre de dominio.

> [!success]
>
> Encuentre todos los detalles en nuestra guía « [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

///

/// details | ¿Cómo verificar la propagación de los cambios realizados en mi zona DNS?

> [!primary]
>
> Antes de continuar, tenga en cuenta que:
>
> - La propagación de un cambio realizado en una zona DNS puede tardar hasta **24** horas.
> - La propagación de un cambio en los servidores DNS de un nombre de dominio puede tardar hasta **48** horas.

Puede verificar que la propagación DNS se realiza correctamente utilizando el registro DNS de tipo **S**tart **O**f **A**uthority (**SOA**).

En primer lugar, abra un terminal compatible en su computadora y ejecute la siguiente línea de comandos (reemplace `domain.tld` por su propio nombre de dominio):

```bash
dig domain.tld soa
```

> [!primary]
>
> Los sistemas operativos Linux y macOS tienen un terminal compatible de forma nativa para ejecutar este tipo de comandos. Si utiliza otro sistema operativo, como Windows, deberá instalar previamente un terminal compatible para ejecutar el comando.
>
> Además, existen herramientas disponibles en Internet para verificar la propagación DNS.

Una vez ejecutado el comando, obtendrá un resultado similar al siguiente:

```bash
              ;; ANSWER SECTION:                                                                                                     

domain.tld.           3600    IN      SOA     dns200.anycast.me. tech.ovh.net. 2025091801 86400 3600 3600000 300   
```

En este resultado, recupere el **número de serie** (en nuestro ejemplo: `2025091801`).

Este tiene la forma `YYYYMMDDRR` donde:

- `YYYYMMDD`: Representa la fecha (año, mes y día) de la última actualización DNS propagada para el nombre de dominio.
- `RR`: Representa el número de actualizaciones realizadas en la fecha indicada. Por ejemplo, si se realizó una sola actualización en un día, tendrá el valor `00`. Si se realizaron 2 actualizaciones en el mismo día, tendrá el valor `01` y así sucesivamente.

Una vez recuperado el número de serie, siga estos pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
2. Haga clic en el menú `Zonas DNS`{.action} y seleccione el dominio correspondiente.
3. A la derecha o debajo de la tabla, haga clic en `Editar en modo de texto`{.action}.
4. En la ventana que se abre, identifique la segunda línea, que, siguiendo nuestro ejemplo, sería equivalente a esta: `@	IN SOA dns200.anycast.me. tech.ovh.net. (2025091801 86400 3600 3600000 60)`.
5. Compare el número de serie recuperado a través del terminal con el que se muestra en su área de cliente de OVHcloud.

**Caso n°1** - Los dos números de serie coinciden:

Esto significa que la propagación DNS se realiza correctamente. No tiene que hacer nada más.

**Caso n°2** - Los dos números de serie son diferentes:

Esto significa que:

- La propagación DNS de sus cambios no está totalmente terminada (todavía está dentro de los plazos estándar de propagación DNS). En este caso, espere el tiempo necesario para que la propagación DNS se complete totalmente (**24** horas para una modificación de zona DNS y **48** horas para una modificación de servidores DNS), luego repita la operación.
- La propagación DNS no se está realizando correctamente. En este caso, desde la ventana `Editar en modo de texto`{.action} que se abrió en el paso **4**, haga clic directamente **sin realizar modificaciones** en el botón `Siguiente`{.action}, y luego en `Aceptar`{.action}. Se iniciará una nueva propagación DNS.

///

/// details | ¿Cómo restaurar una zona DNS?

Siga estos pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
2. Haga clic en el menú `Zonas DNS`{.action} y seleccione el dominio correspondiente.
3. A la derecha o debajo de la tabla, haga clic en `Ver el historial de mi zona DNS`{.action}.
4. En la tabla de la página que aparece, identifique la línea correspondiente a la copia de seguridad de la zona DNS que desee, luego haga clic en el icono presente en la columna `Restaurar`{.action}. La configuración actual de la zona DNS será reemplazada por la copia de seguridad elegida.

> [!primary]
>
> La propagación de los cambios en una zona DNS puede tardar hasta **24** horas.

> [!success]
>
> Encuentre todos los detalles en nuestra guía « [Gestionar el historial de una zona DNS](/pages/web_cloud/domains/dns_zone_history) ».

///

/// details | ¿Cómo recuperar una copia de mi zona DNS?

Siga estos pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
2. Haga clic en el menú `Zonas DNS`{.action} y seleccione el dominio correspondiente.
3. A la derecha o debajo de la tabla, haga clic en `Ver el historial de mi zona DNS`{.action}.
4. En la tabla de la página que aparece, identifique la línea correspondiente a la copia de seguridad de la zona DNS que desee, luego haga clic en el icono presente en la columna `Descargar`{.action}. La copia de la zona DNS será descargada en formato *.txt*.

> [!success]
>
> Encuentre todos los detalles en nuestra guía « [Gestionar el historial de una zona DNS](/pages/web_cloud/domains/dns_zone_history) ».

///

/// details | ¿Puedo crear una zona DNS para un subdominio?

Puede crear una zona DNS para un subdominio.

Para ello, siga estos pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
2. Haga clic en el menú `Zonas DNS`{.action}, luego haga clic en el botón `Contratar`{.action} en la parte superior derecha de la tabla que aparece.
3. En la página que aparece, indique el subdominio (por ejemplo: *www.domain.tld*) para el cual desea crear una zona DNS de OVHcloud. Espere unos momentos mientras la herramienta realiza verificaciones sobre el subdominio.
4. Una vez que la verificación se complete, elija si desea activar o no las entradas mínimas para la zona DNS que va a crear. Esta elección no es definitiva, ya que siempre podrá [editar los registros de la zona DNS](/pages/web_cloud/domains/dns_zone_edit) posteriormente.
5. Una vez que haya realizado su elección, siga los pasos hasta la creación de la zona DNS.

Esta zona DNS se instalará en 2 servidores DNS de OVHcloud. Deberá declarar los nombres de estos dos servidores en la zona DNS activa del nombre de dominio de su subdominio (por ejemplo, *www.domain.tld* es un subdominio del nombre de dominio *domain.tld*).

Para recuperar los nombres de los 2 servidores DNS, siga estos pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
2. Haga clic en el menú `Zonas DNS`{.action}, luego elija el subdominio correspondiente.
3. En la parte superior izquierda de la página que aparece, recupere los 2 nombres de los servidores DNS presentes bajo la mención `Name Servers`. Estos tienen una de las 2 formas siguientes:

- `dnsXXX.ovh.net` y `nsXXX.ovh.net` **o** `dnsXXX.ovh.ca` y `nsXXX.ovh.ca` (donde cada `X` representa un número entre `0` y `9`).
- `dns200.ovh.me` y `ns200.anycast.me`.

Una vez que tenga los 2 servidores DNS, declarelos mediante dos registros de tipo NS en la zona DNS activa del nombre de dominio del cual proviene su subdominio.

**Caso n°1** - La zona DNS activa del nombre de dominio del cual proviene su subdominio está en OVHcloud:

Siga estos pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
2. Haga clic en el menú `Zonas DNS`{.action} y seleccione el dominio correspondiente.
3. A la derecha o debajo de la tabla, haga clic en `Añadir un registro`{.action}, luego seleccione el tipo de registro DNS de tipo `NS`{.action} para declarar un servidor DNS.
4. En la ventana que se abre, indique el subdominio correspondiente en el campo `Subdominio *`{.action} (por ejemplo, escriba **únicamente** *www* si su nombre de dominio es *domain.tld* y su subdominio completo es *www.domain.tld*). En el campo `Destino *`{.action}, indique **únicamente** uno de los 2 servidores DNS.
5. Haga clic en `Siguiente`{.action}, luego en `Aceptar`{.action}.

Repita la operación para el segundo servidor DNS restante a declarar.

**Caso n°2** - La zona DNS activa del nombre de dominio del cual proviene su subdominio no está en OVHcloud:

Deberá declarar los 2 servidores DNS para su subdominio directamente ante el proveedor DNS de su nombre de dominio (del cual proviene su subdominio).

> [!primary]
>
> En ambos casos, la propagación de los cambios en una zona DNS puede tardar hasta **24** horas.

> [!success]
>
> Encuentre más detalles en las siguientes guías:
>
> - [Crear una zona DNS de OVHcloud para un dominio](/pages/web_cloud/domains/dns_zone_create)
> - [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

///

/// details | ¿Cómo redirigir todos los subdominios de un mismo nombre de dominio hacia la misma dirección IP?

Siga estos pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
2. Haga clic en el menú `Zonas DNS`{.action} y seleccione el dominio correspondiente.
3. A la derecha o debajo de la tabla, haga clic en `Añadir un registro`{.action}, luego seleccione el tipo de registro DNS de tipo `A`{.action} para una IPv4 (por ejemplo: `203.0.113.0`) o de tipo `AAAA`{.action} para una IPv6 (por ejemplo: `2001:db8:1:1b00:203:0:113:0`).
4. En la ventana que se abre y en el campo de entrada titulado `Subdominio *`{.action}, indique el valor `*`. El asterisco `*` representará todos los subdominios (por ejemplo: `www.domain.tld` o `ovhcloud.domain.tld`) de su nombre de dominio. Complete el campo `Destino *`{.action} con la dirección IP deseada.
5. Haga clic en `Siguiente`{.action}, luego en `Aceptar`{.action}.

> [!primary]
>
> La propagación de los cambios en una zona DNS puede tardar hasta **24** horas.

> [!success]
>
> Encuentre todos los detalles en nuestra guía « [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

///

/// details | ¿Puedo implementar un comodín en mi zona DNS?

Es posible implementar un comodín en una zona DNS de OVHcloud.

Para ello, siga estos pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
2. Haga clic en el menú `Zonas DNS`{.action} y seleccione el dominio correspondiente.
3. A la derecha o debajo de la tabla, haga clic en `Añadir un registro`{.action}, luego seleccione el tipo de registro DNS para el cual desea implementar un comodín.
4. En la ventana que se abre y en el campo de entrada titulado `Subdominio *`{.action}, indique el valor `*`. El asterisco `*` representará todos los subdominios (por ejemplo: `www.domain.tld` o `ovhcloud.domain.tld`) de su nombre de dominio. Complete los demás campos con los valores deseados.
5. Haga clic en `Siguiente`{.action}, luego en `Aceptar`{.action}.

> [!primary]
>
> La propagación de los cambios en una zona DNS puede tardar hasta **24** horas.

> [!success]
>
> Encuentre todos los detalles en nuestra guía « [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit) ».

///

<br>

/// details | He eliminado accidentalmente mi zona DNS y deseo restaurarla, ¿qué debo hacer?

OVHcloud envía un correo electrónico que contiene una copia de la zona DNS en formato de texto una vez que su zona DNS se ha eliminado, para que pueda restaurarla posteriormente si es necesario.
Este correo electrónico se envía a la dirección de correo electrónico asociada a su cuenta de cliente de OVHcloud.

> [!success]
>
> Si no ha recibido este correo electrónico, verifique en su carpeta de spam o siga estos pasos:
>
> 1. Inicie sesión en su [área de cliente de OVHcloud](/links/manager), haga clic en su nombre en la parte superior derecha y luego en `Acceder a mi cuenta`{.action}.
> 2. En la página que aparece, haga clic en la pestaña `Mensages recibidos`{.action}.
> 3. En la tabla que aparece y entre la lista de correos electrónicos recibidos, haga clic en el correo electrónico correspondiente para mostrar su contenido.

Para restaurar su zona DNS, siga estos pasos:

1. Descargue el archivo que contiene la zona DNS desde el correo electrónico recibido.
2. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
3. Haga clic en el menú `Dominios`{.action} y seleccione el dominio correspondiente.
4. Seleccione la pestaña `Zona DNS`{.action} una vez posicionado en el nombre de dominio correspondiente. **Si la zona DNS está inactiva, actívela desde esta pestaña.**
5. A la derecha o debajo de la tabla, haga clic en `Editar en modo de texto`{.action}.
6. En la ventana que se abre, reemplace todo el contenido que se muestra por la copia de la zona DNS eliminada. Haga clic después en `Siguiente`{.action}, y luego en `Aceptar`{.action}.

> [!primary]
>
> La propagación de los cambios en una zona DNS puede tardar hasta **24** horas.

> [!success]
>
> Encuentre más detalles en las siguientes guías:
>
> - [Crear una zona DNS de OVHcloud para un dominio](/pages/web_cloud/domains/dns_zone_create)
> - [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
> - [Gestionar el historial de una zona DNS](/pages/web_cloud/domains/dns_zone_history)

///

/// details | ¿Cómo cancelar una solicitud de eliminación de mi zona DNS?

Para cada solicitud de eliminación de un servicio, se envía un correo electrónico solicitando la confirmación de eliminación a la dirección de correo electrónico asociada a su cuenta de cliente de OVHcloud.

Si no ha hecho clic en el enlace de confirmación presente en este correo electrónico, no se preocupe, su zona DNS no será eliminada.

En caso contrario, la eliminación se inicia y no se puede cancelar. La operación de eliminación puede tardar hasta 3 días antes de que pueda recrear una zona DNS de OVHcloud para su nombre de dominio.

///

/// details | No puedo activar una zona DNS para mi nombre de dominio, ¿qué debo hacer?

Esta situación ocurre cuando ya existe una zona DNS para su nombre de dominio en OVHcloud.

Siga estos pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
2. Haga clic en el menú `Zonas DNS`{.action}, luego verifique si el nombre de dominio correspondiente aparece.

**Caso n°1** - El nombre de dominio correspondiente aparece en la lista:

Esto significa que la zona DNS del nombre de dominio ya existe en su [área de cliente de OVHcloud](/links/manager). Podrá gestionarla directamente desde este lugar.

**Caso n°2** - El nombre de dominio correspondiente no aparece en la lista:

Esto significa que la zona DNS del nombre de dominio está gestionada por otro identificador de cliente de OVHcloud que no es el suyo.

Conforme al **R**eglamento **G**eneral de **P**rotección de **D**atos (**RGPD**), el identificador de cliente en el que se encuentra la zona DNS permanecerá confidencial. 

En esta situación y si no conoce este otro identificador de cliente, le invitamos a abrir una solicitud de asistencia desde el [centro de ayuda](https://help.ovhcloud.com/csm?id=csm_get_help) para recuperar la gestión de la zona DNS.

///

/// details | ¿Por qué no encuentro la pestaña « GLUE » en mi área de cliente de OVHcloud?

La funcionalidad no está disponible con todas las extensiones de nombres de dominio.
Si la pestaña no aparece en su [área de cliente de OVHcloud](/links/manager), es porque la opción « GLUE » no está disponible para su nombre de dominio.

> [!success]
>
> Encuentre todos los detalles en nuestra guía « [Personalizar los servidores DNS de un dominio (Glue Records)](/pages/web_cloud/domains/glue_registry) ».

///

## Servidores DNS

> [!primary]
>
> La modificación de los servidores DNS es una operación sensible y puede provocar interrupciones en los servicios asociados a su nombre de dominio (alojamiento web, correo electrónico, etc.). En caso de duda, no dude en contactar a un [proveedor especializado](/links/partner).

/// details | ¿Cómo modificar mis servidores DNS?

Siga estos pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
2. Haga clic en el menú `Dominios`{.action} y seleccione el dominio correspondiente.
3. Seleccione la pestaña `Servidores DNS`{.action} una vez posicionado en el nombre de dominio correspondiente.
4. Para modificar los servidores DNS, haga clic en el botón `Cambiar los servidores DNS`{.action} situado a la derecha de la tabla « servidores DNS ». Dependiendo de la resolución de su pantalla, el botón puede estar debajo de la tabla.

Podrá modificar los servidores DNS para su nombre de dominio en la página que aparece.

> [!primary]
>
> La propagación de los cambios en los servidores DNS declarados para un nombre de dominio puede tardar hasta **48** horas.

> [!success]
>
> Encuentre todos los detalles en nuestra guía « [Modificar los servidores DNS de un dominio de OVHcloud](/pages/web_cloud/domains/dns_server_edit) ».

///

/// details | ¿Cómo personalizar mis servidores DNS?

Siga estos pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
2. Haga clic en el menú `Dominios`{.action} y seleccione el dominio correspondiente.
3. Seleccione la pestaña `Servidores DNS`{.action} una vez posicionado en el nombre de dominio correspondiente.
4. Para modificar los servidores DNS, haga clic en el botón `Cambiar los servidores DNS`{.action} situado a la derecha de la tabla « servidores DNS ». Dependiendo de la resolución de su pantalla, el botón puede estar debajo de la tabla.

Podrá personalizar los servidores DNS para su nombre de dominio en la página que aparece.

> [!primary]
>
> La propagación de los cambios en los servidores DNS declarados para un nombre de dominio puede tardar hasta **48** horas.

> [!success]
>
> Encuentre todos los detalles en nuestra guía « [Modificar los servidores DNS de un dominio de OVHcloud](/pages/web_cloud/domains/dns_server_edit) ».

///

/// details | ¿Cómo reemplazar mis servidores DNS por los de OVHcloud?

Siga estos pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
2. Haga clic en el menú `Dominios`{.action} y seleccione el dominio correspondiente.
3. Seleccione la pestaña `Servidores DNS`{.action} una vez posicionado en el nombre de dominio correspondiente.
4. Para modificar los servidores DNS, haga clic en el botón `Cambiar los servidores DNS`{.action} situado a la derecha de la tabla « servidores DNS ». Dependiendo de la resolución de su pantalla, el botón puede estar debajo de la tabla.

Podrá reemplazar los servidores DNS para su nombre de dominio por los de OVHcloud en la página que aparece.

> [!primary]
>
> La propagación de los cambios en los servidores DNS declarados para un nombre de dominio puede tardar hasta **48** horas.

> [!success]
>
> Encuentre todos los detalles en nuestra guía « [Modificar los servidores DNS de un dominio de OVHcloud](/pages/web_cloud/domains/dns_server_edit) ».

///

/// details | En mi área de cliente, tengo un mensaje de error que me indica que no estoy utilizando los servidores DNS de OVHcloud para mi nombre de dominio, ¿qué debo hacer?

En su [área de cliente de OVHcloud](/links/manager), este mensaje indica únicamente que la zona DNS creada para su nombre de dominio no es su zona DNS activa.

En otras palabras, esto significa que la configuración presente en esta zona DNS no es la que actualmente se aplica a su nombre de dominio.

Sin embargo, verifique que los servidores DNS mencionados en el mensaje de error correspondan realmente a los servidores DNS que desea aplicar a su nombre de dominio. Luego, verifique la configuración de la zona DNS declarada en estos mismos servidores DNS a través de su proveedor DNS.

Si desea utilizar los servidores DNS de OVHcloud para su nombre de dominio, podrá preparar la configuración DNS de la zona DNS presente en OVHcloud para que se ajuste a sus necesidades y luego activarla para su nombre de dominio.

> [!success]
>
> Encuentre más detalles en las siguientes guías:
>
> - [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
> - [Modificar los servidores DNS de un dominio de OVHcloud](/pages/web_cloud/domains/dns_server_edit)

///

/// details | No puedo modificar los servidores DNS de un nombre de dominio desde mi área de cliente de OVHcloud, ¿qué debo hacer?

Esto significa que solo dispone de la gestión de la zona DNS del nombre de dominio, pero no del nombre de dominio en sí mismo.

Para verificarlo, siga estos pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
2. Haga clic en el menú `Dominios`{.action}, luego verifique si el nombre de dominio correspondiente aparece.

**Caso n°1** - El nombre de dominio no aparece en la lista:

Esto significa que el nombre de dominio no está gestionado desde su [área de cliente de OVHcloud](/links/manager). Realice una consulta [WHOIS](/links/web/domains-whois) con este último para conocer dónde está registrado.

Podrá realizar una de las siguientes acciones (si es el titular declarado en el WHOIS del nombre de dominio):

- El nombre de dominio está registrado en OVHcloud: Podrá realizar una [procedimiento de recuperación de contactos](/links/transversal/procedure-contact-change) para que su nombre de dominio sea gestionado en su [área de cliente de OVHcloud](/links/manager).
- El nombre de dominio no está registrado en OVHcloud: Podrá realizar una operación de [transferencia entrante](/pages/web_cloud/domains/transfer_incoming_generic_domain) hacia OVHcloud para que su nombre de dominio sea gestionado en su [área de cliente de OVHcloud](/links/manager).

**Caso n°2** - El nombre de dominio aparece en la lista:

Esto significa que no dispone de los derechos suficientes para gestionar el nombre de dominio desde su [área de cliente de OVHcloud](/links/manager). Realice una consulta [WHOIS](/links/web/domains-whois) para verificar que está declarado como titular del nombre de dominio.

Podrá realizar una [procedimiento de recuperación de contactos](/links/transversal/procedure-contact-change) para que su nombre de dominio sea gestionado completamente en su [área de cliente de OVHcloud](/links/manager).

///

## Más información <a name="go-further"></a>

[FAQ soluciones de correo electrónico de OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

[FAQ Web Hosting](/pages/web_cloud/web_hosting/faq-web_hosting)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
