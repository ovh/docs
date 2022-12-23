---
title: 'Optimización del envío de correos electrónicos'
excerpt: 'Averigüe cómo enviar correos electrónicos y limite el riesgo de que se marquen como spam'
slug: optimizar-envio-correo-electronico
section: Uso avanzado
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 22-12-2022**

## Objectivo

Las políticas antispam cada vez son más estrictas. Para asegurarse que sus correos electrónicos llegan a los destinatarios sin ser bloqueados por las herramientas de seguridad, usted necesita configurar en su servicio para autenticar los correos y validar su contenido.

**En esta guía se le dan algunos consejos para optimizar como se envían sus correos electrónicos.**

> [!warning]
>
>OVHcloud ofrece servicios de los cuales usted es responsable. De hecho, como no tenemos acceso administrativo a estas máquinas, no somos administradores y no podemos ofrecerle soporte. Esto significa que depende de usted administrar el software y la seguridad diariamente. Le proporcionamos esta guía para ayudarlo con tareas comunes. Sin embargo, le recomendamos ponerse en contacto con un [proveedor especializado](https://partner.ovhcloud.com/es-es/directory/) si tiene dificultades o dudas sobre la administración, el uso o la seguridad del servidor.
>

## Requisitos

- Tener un servidor de correo ya configurado.

> [!warning]
>
> Esta guía explica cómo optimizar el envío de mensajes de correo electrónico. Tenga en cuenta que cada servicio de correo tiene sus propias directrices y buenas prácticas para garantizar la recepción del correo electrónico por los destinatarios. Le recomendamos encarecidamente que los consulte.
>

## Requisitos

### Configurar el registro SPF <a name="spfrecord"></a>

Si usted está usando una infraestructura dedicada (ejem. Un servidor dedicado, VPS, instancia cloud publica o privada), el SPF optimo es: `v=spf1 ip4:server_ipv4 ~all`. Recuerde cambiar 'server_ipv4' con la dirección IPv4 de su servidor.

> [!primary]
>
> El símbolo que precede al **all** es muy importante:
> 
> - `+`: aceptar
> - `-`: no aceptar
> - `~`: fallo suave (*soft fail*)
> - `?`: neutro
>

Para más información sobre el registro SPF, vaya a la siguiente página: <http://www.open-spf.org/>.

Usted puede encontrar más información sobre como configurar el registro SPF para un dominio, o especificando directamente la dirección IPv6. Puede encontrar como hacerlo en la siguiente guía: [Añadir un registro SPF a la configuración del dominio](../../domains/web_hosting_el_registro_spf/).

### Configurar el registro DKIM

Configurando el registro DKIM (DomainKeys Identified Mail), añade protección extra para evitar que sus correos se marquen como SPAM. En términos simples, DKIM es una firma que permite al autenticar el dominio remitente.

La autenticación se lleva a cabo médiente una clave DKIM que debe de añadir a su zona DNS. Existen diferente generadores para claves DKIM, incluyendo: <http://dkimcore.org/tools/keys.html>. Por favor, siga las instrucciones que figuran en el sitio web.

### Configurar el Registro inverso <a name="reverseip"></a>

Para optimizar el envío de correos electrónicos y evitar que sus correos sean bloqueado, usted puede configurar il Registro inverso con su nombre de dominio.

Si los servidores DNS son gestionados por OVHcloud, consulte esta [guía](https://docs.ovh.com/es/domains/web_hosting_como_editar_mi_zona_dns/#acceder-a-la-gestion-de-una-zona-dns-de-ovhcloud).

Una vez que haya editado la zona DNS del dominio, los cambios tardarán un máximo de 24 horas en propagarse y ser efectivos.

A continuación, añada el registro PTR (también conocido como registro inverso):

En el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}, acceda a la pestaña `Bare Metal Cloud`{.action} y abra `IP`{.action}.

Si desea configurar el Registro DNS inverso  en una dirección Additional IP, abra la pestaña `Additional IP`{.action}.

El menú desplegable en "**Mis direcciones IP públicas y servicios asociados**" le permite filtrar sus servicios por categorías.

![IP inversa](images/selectservice2022.png){.thumbnail}

Haga clic en el botón `...`{.action} a la derecha de la línea correspondiente y luego en `Cambiar el registro inverso`{.action}:

![IP inversa](images/addreverse2022.png){.thumbnail}

Introduzca su dominio en la sección `Registro inverso` y haga clic en `Aceptar`{.action}.

![IP inversa](images/enterreverse.png){.thumbnail}

> [!primary]
> Al introducir su dominio en el registro inverso, comprueba de inmediato si el registro A devuelve la misma IP. Se utiliza en los procedimientos antispam, por lo que el registro A debe ser válido y propagado. Existen algunas reglas a seguir al introducir el registro inverso:
>
>  - el registro inverso no puede empezar por un `-`
>  - el registro inverso no puede tener más de 80 caracteres.
>  - el registro inverso no puede contener caracteres en mayúscula.
>  - el registro inverso debe terminar en un `.`
>
> Por ejemplo: "MyDomain.ca" en el registro inverso sería **mydomain.ca.**
>


### Casos específicos de envío de correos

#### Desde Servidor de Microsoft (Outlook, etc..)

Microsoft utiliza una política de lista blanca (whitelist). Esto significa que inicialmente, todo empieza en una blacklist, y se requiere un procedimiento específico para validar los correos en el servidor.

Antes de iniciar el procedimiento de whitelist de su IP, asegúrese de haber configurado correctamente un [registro inverso](#reverseip) en su IP (y no el registro inverso por defecto de OVHcloud).

Microsoft también verifica el registro SPF, por lo que se recomienda [configurar uno](#spfrecord).

A continuación, debe firmar los contratos SNDS (Smart Network Data Services) y JMRP (Junk Mail Reporting Partner Program).

Para contratar gratuitamente el programa, basta con crear una cuenta JMRP/SNDS en la siguiente dirección:
<https://postmaster.live.com/snds/JMRP.aspx?wa=wsignin1.0>

Una vez activada la cuenta, deberá completar el siguiente formulario:

- **Company name**: (nombre de su empresa)
- **Contact email address**: (una dirección de correo electrónico válida en la que Microsoft puede contactar con usted)
- **Complaint feedback email address**: (una dirección de correo electrónico válida en la que podrá recibir las quejas por spam, las *best practices* quieren que la dirección de correo electrónico sea la siguiente: **abuse@mydomain.com**.)

A continuación, añada sus direcciones IP a la sección `IP address or range`.

Al hacer clic en `Add new Network`, se le pedirá que establezca una dirección de correo electrónico de contacto válida. Introduzca la dirección del tipo **abuse@mydomain.com** para recibir las denuncias por spam.

Una vez introducidos los datos, haga clic en `Begin Setup` para enviar la solicitud. Microsoft enviará entonces un email titulado `SNDS-JMRP Contract` y, a continuación, un segundo email a **mydomain.com**.

Confirme la información y la suscripción a JMRP/SNDS se completará.

Una vez que haya realizado estas acciones, si su IP aparece bloqueada, podrá solicitar su desbloqueo a través del [procedimiento junkmail](https://support.microsoft.com/en-us/getsupport?oaspworkflow=start_1.0.0.0&wfname=capsub&productkey=edfsmsbl3&locale=en-us&ccsid=635857671692853062). El procedimiento suele tardar 48 horas.

Microsoft puede a veces solicitarle la fecha de la primera facturación de su IP/servidor. En ese caso, envíe a Microsoft una copia de su factura e indique su IP/servidor (p. ej.: host nsXXX) en su respuesta.

Para más información, [solicite ayuda](https://support.microsoft.com/en-us/getsupport?oaspworkflow=start_1.0.0.0&wfname=capsub&productkey=edfsmsbl3&ccsid=6364926882037750656) a Microsoft.

> [!warning]
>
> **La negación de Microsoft**
>
> Es posible que Microsoft se niegue a desbloquear su dirección o direcciones IP, en cuyo caso OVHcloud no podrá intervenir. Es importante respetar las buenas prácticas de Microsoft.
>


#### Desde el servidor de Gmail

Si sus destinatarios son Gmail, debe de añadir los registros específicos (ejem. Registro DMARC) para garantizarse que los correos llegan. Aquí puede encontrar el artículo de Google donde puede encontrar más información: [Add a DMARC record](https://support.google.com/a/answer/2466563?hl=en).

Google también ofrece un [artículo dedicado a la prevención del spam](https://support.google.com/mail/answer/81126?hl=en){.external} para los usuarios de Gmail.

### Revisa su información

Usted puede utilizar un sitio web como [Mail Tester](http://www.mail-tester.com/){.external} para verificar que todas sus configuración son correctas.

## Más información

Para recibir soporte y configurar sus soluciones OVHcloud, contacte con nuestra [red de partners OVHcloud](https://partner.ovhcloud.com/es-es/directory/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>