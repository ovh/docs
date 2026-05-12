---
title: "Transferir un nombre de dominio a otro agente registrador"
excerpt: "Descubra cómo transferir un nombre de dominio de OVHcloud al agente registrador que elija"
updated: 2026-03-24
---

## Objetivo

Una **transferencia de nombre de dominio** hace referencia a la transferencia de un nombre de dominio de un agente registrador a otro. Por ejemplo, si ha contratado un nombre de dominio en nuestro sitio web, OVHcloud es su actual agente registrador. El nuevo agente registrador debe iniciar una transferencia de nombre de dominio saliente.

Con el fin de evitar las transferencias de nombre de dominio no autorizadas, los nombres de dominio suelen estar bloqueados por el estado *clientTransferProhibited*. Es necesario eliminar esta protección desde el área de cliente de OVHcloud antes de iniciar la transferencia.

**Descubra cómo preparar su nombre de dominio para una transferencia saliente.**

> [!warning]
>
> Si el nombre de dominio en cuestión debe permanecer registrado en OVHcloud, pero modificado en sus modalidades de gestión o de titularidad, una transferencia saliente de nombre de dominio no es el procedimiento adecuado.
>
> Para transferir la gestión de su nombre de dominio a otra cuenta de cliente de OVHcloud, el método adecuado es un **cambio de contactos**. El procedimiento se describe en [esta guía](/pages/account_and_service_management/account_information/managing_contacts).
>
> Si también debe cambiar el **titular** del nombre de dominio, debe hacerlo **antes** de cambiar los contactos del nombre de dominio. Para ello, siga las indicaciones que le indicamos en la guía sobre el [cambio de titular de los nombres de dominio](/pages/web_cloud/domains/trade_domain).
>

## Requisitos

- Tener un [nombre de dominio](/links/web/domains) registrado con OVHcloud.
- Estar facultado para solicitar la transferencia del nombre de dominio. El titular y las personas que lo administren deben haber sido informados.
- El registro del nombre de dominio en cuestión data de hace al menos 60 días **y** no ha sido transferido ni intercambiado (es decir, el cambio de titular) en los últimos 60 días.

<!-- CP-NAV-START:web-domains -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Dominios](/links/control-panel/web-domains)
- **Ruta de navegación:** `Web Cloud`{.action} > `Dominios`{.action} > Seleccione su nombre de dominio

---
<!-- CP-NAV-END:web-domains -->

> [!primary]
>
> Si usted es el **titular** del nombre de dominio pero su gestión en el área de cliente de OVHcloud no está disponible, ya sea a través de su propio acceso o a través del contacto administrativo del nombre de dominio, consulte [esta guía](/pages/account_and_service_management/account_information/managing_contacts) antes de continuar.
>

## Procedimiento

> [!warning]
>
> Las instrucciones siguientes describen la forma más común de transferir un nombre de dominio, válido para la mayoría de los nombres de dominio de primer nivel (top-level domain, o TLD). No obstante, las normas específicas de procedimiento de los TLD son definidas únicamente por la autoridad competente, es decir, el **registro**. Los agentes registradores como OVHcloud deben respetar estas reglas y no influyen en las decisiones de los registros.
>
> El procedimiento exacto para las transferencias de nombre de dominio puede variar, en particular en el caso de determinados TLD de código de país (ccTLD, como .lu, .uk, .hk, .ro) y de algunos TLD especiales (.am, .fm, etc.). Las transferencias también pueden prohibirse por diversos motivos, por ejemplo en los casos de pago en espera, abuso o bloqueo del registro.
>
> En caso de duda, le recomendamos que consulte los siguientes recursos:
>
> - el sitio web del registro TLD correspondiente;
> - la [lista de TLD disponibles en OVHcloud](/links/web/domains-tld);
> - [Las explicaciones de la ICANN sobre los códigos de estado EPP](https://www.icann.org/resources/pages/epp-status-codes-2014-06-16-en) (para saber qué códigos de estado se aplican actualmente a su nombre de dominio, realice una búsqueda *Whois*, utilizando preferentemente el sitio web del registro TLD correspondiente);
> - el sitio web y la interfaz de gestión de su nuevo agente registrador, especialmente en lo que respecta a las cuestiones relativas a un proceso de transferencia pendiente.
>
> Según el nuevo agente registrador que elija, la transferencia de un nombre de dominio puede ser de pago. Antes de continuar, le recomendamos que se informe sobre este punto.
>

### 1 - Eliminar la protección contra la transferencia del nombre de dominio

Haga clic en las pestañas a continuación para ver cada uno de los **3** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Dominios](/links/control-panel/web-domains) y seleccione el dominio correspondiente.
>>
>> ![Domain names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Paso 2**
>>
>> En la pestaña `Información general`{.action}, encontrará el cursor `Protección contra la transferencia` en **Seguridad**, con el estado `Activado`{.action} por defecto.
>>
>> > [!warning]
>> >
>> > Si el botón `Protección contra la transferencia` no está presente, significa que la extensión del nombre de dominio no requiere un código de transferencia. A continuación, podrá lanzar la transferencia directamente.
>>
>> ![protección activada](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/protection-against-domain-name-transfert-enabled.png){.thumbnail}
>>
> **Paso 3**
>>
>> Haga clic en el cursor y confirme en la nueva ventana que desea eliminar la protección. Espere unos minutos a que el estado pase a `Desactivado`{.action}.
>>
>> > [!primary]
>> >
>> > Si encuentra el mensaje "**Se ha producido un error al solicitar la desactivación de la protección del nombre de dominio ("User not granted for this request")**", significa que no tiene los permisos suficientes para desbloquear el nombre de dominio.
>> >
>> > Además, si encuentra el mensaje: "**AUTH/INFO code : Authcode is not managed by OVHcloud, contact the registry to claim it**", que significa que el código de transferencia de su nombre de dominio no es recuperable a través de su [área de cliente de OVHcloud](/links/manager).
>> >
>> > En ambos casos, compruebe que es el contacto **administrador** del nombre de dominio con ayuda de nuestra guía sobre la [gestión de contactos](/pages/account_and_service_management/account_information/managing_contacts) y compruebe que la extensión de su nombre de dominio permite un desbloqueo desde el [área de cliente de OVHcloud](/links/manager).
>> >
>> > En efecto, algunos *códigos de transferencia* son gestionados directamente por el *registro* de la extensión del nombre de dominio. Un *registro* es una organización que gestiona el conjunto de nombres de dominio para una extensión determinada. Por ejemplo, el **AFNIC** gestiona el conjunto de nombres de dominio con la extensión "*.fr*". En ese caso, deberá contactar directamente con el *registro*, que gestiona la extensión del nombre de dominio, para obtener el *código de transferencia*.
>>
>> ![desactivación de la protección](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/protection-against-domain-name-transfert-deactivating.png){.thumbnail}

> [!primary]
>
> Una vez levantada la protección, el nombre de dominio permanece desbloqueado durante siete días. Después de este período, la protección se reactivará automáticamente. Si no solicita la transferencia del nombre de dominio a su nuevo agente registrador durante este período, será necesario volver a eliminar la protección del nombre de dominio.
>

### 2 - Obtener el código de transferencia

> [!warning]
>
> Tenga en cuenta que siempre es posible desbloquear y recuperar el código de transferencia de su nombre de dominio después de su vencimiento. De acuerdo con las reglas del registro, es posible que sea necesario restaurar un nombre de dominio en [período de redención](https://www.icann.org/resources/pages/epp-status-codes-2014-06-16-en) para transferirlo. Comuníquese con su nuevo registrador para conocer los detalles de la transferencia.
>

Una vez desbloqueada la protección contra la transferencia, puede obtener el código de transferencia del nombre de dominio.

Haga clic en las pestañas a continuación para ver cada uno de los **3** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Dominios](/links/control-panel/web-domains) y seleccione el dominio correspondiente.
>>
>> ![Domain names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Paso 2**
>>
>> En la pestaña `Información general`{.action}, haga clic en el enlace `AUTH/INFO`{.action}, situado junto a `Protección contra la transferencia`{.action}. Actualice la página si es necesario.
>>
>> ![Transferencia saliente](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/protection-against-domain-name-transfert-disabled.png){.thumbnail}
>>
> **Paso 3**
>>
>> Se abrirá una ventana en la que podrá consultar su código AUTH/INFO (también llamado código de transferencia, contraseña de nombre de dominio, AUTH-CODE o EPP-Code).
>>
>> El nuevo agente registrador solicitará el código para finalizar la transferencia. Puede consultar los detalles en el nuevo agente registrador.
>>
>> En lugar de escribir manualmente el código, le recomendamos que copie y pegue el código, ya que algunos caracteres pueden confundirse fácilmente.

Una vez recuperado el código de transferencia, **no vuelva a bloquear su nombre de dominio a menos que ya no quiera transferirlo**.

### 3 - Iniciar la transferencia al nuevo agente registrador

Una vez realizados los pasos anteriores, inicie el proceso de transferencia, normalmente realizando un pedido a su nuevo agente registrador. La transferencia puede tardar hasta 10 días.

Para más información, póngase en contacto con el nuevo agente registrador que haya elegido.

> [!warning]
>
> Si su nuevo agente registrador solicita un nuevo código de transferencia, reactive la **Protección contra la transferencia** para su nombre de dominio y desactive este de nuevo unos minutos después. Así podrá obtener un nuevo código de transferencia.

## Más información

[Transferencia del nombre de dominio .co.uk saliente](/pages/web_cloud/domains/transfer_outgoing_couk)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
