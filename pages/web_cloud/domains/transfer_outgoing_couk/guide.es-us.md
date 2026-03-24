---
title: Transferir un nombre de dominio .uk a otro agente registrador
excerpt: "Descubra cómo transferir la salida de un nombre de dominio UK a otro registrador"
updated: 2026-03-13
---

## Objetivo

El proceso de cambio de agente registrador (*registrador*) para los nombres de dominio de primer nivel (*top-level domain*, o **TLD**) del indicativo de país **UK** (**.uk**) difiere del descrito en nuestra [guía de transferencia de los TLD genéricos](/pages/web_cloud/domains/transfer_outgoing_domain). Las siguientes instrucciones se aplican a las siguientes extensiones:

- .uk
- .co.uk
- .ac.uk
- .gov.uk
- .me.uk
- .net.uk
- .org.uk
- .plc.uk
- .sch.uk

**Esta guía explica cómo iniciar una transferencia saliente para estas TLD desde el área de cliente de OVHcloud.**

> [!warning]
>
> Si el nombre de dominio en cuestión debe permanecer registrado en OVHcloud, pero modificado en sus modalidades de gestión o de titularidad, una transferencia saliente de nombre de dominio no es el procedimiento adecuado.
>
> Para transferir la gestión de su nombre de dominio a otra cuenta de cliente de OVHcloud, el método adecuado es un cambio de contactos. El procedimiento se describe en [esta guía](/pages/account_and_service_management/account_information/managing_contacts).
>
> Si también debe cambiar el **titular** del nombre de dominio, debe hacerlo **antes** de cambiar los contactos del nombre de dominio. Para ello, siga las indicaciones que le indicamos en la guía sobre el [cambio de titular de los nombres de dominio](/pages/web_cloud/domains/trade_domain).
>

## Requisitos

- Tener un [nombre de dominio .uk](/links/web/domains) registrado con OVHcloud.
- El nombre de dominio debe estar siempre activo, es decir, no debe haber expirado o haber sido bloqueado por OVHcloud.
- El nombre de dominio no debe ser objeto de un litigio en curso ante el [Registro Nominet](https://www.nominet.uk/).

<!-- CP-NAV-START:web-domains -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Dominios](/links/control-panel/web-domains)
- **Ruta de navegación:** `Web Cloud`{.action} > `Dominios`{.action} > Seleccione su nombre de dominio

---
<!-- CP-NAV-END:web-domains -->


> [!primary]
>
> Si el nombre de dominio ha expirado hace **menos de 90 días**, aún puede transferirse. Contacte con nuestro equipo de soporte técnico creando una solicitud de soporte en su Panel de control de OVHcloud para desbloquear el nombre de dominio para la transferencia.
>
> Si usted es el **titular** del nombre de dominio pero no puede gestionarlo en el área de cliente de OVHcloud, ni a través de su propio acceso ni del contacto administrativo, consulte [esta guía](/pages/account_and_service_management/account_information/managing_contacts) antes de continuar.
>

## Procedimiento

Cada TLD correspondiente dispone de una etiqueta (*TAG*) correspondiente a su actual agente registrador de nombres de dominio, como OVHcloud. La transferencia se inicia sustituyendo el TAG por el identificador de su nuevo agente registrador.

Si todavía no conoce el TAG necesario, puede solicitarlo a su nuevo proveedor o consultar la [lista de agentes registradores Nominet](https://registrars.nominet.uk/uk-namespace/registrar-agreement/list-of-registrars/).

### 1 - Modificar el TAG del nombre de dominio para iniciar la transferencia a otro agente registrador

> [!primary]
>
> Debe estar conectado como [administrador](/pages/account_and_service_management/account_information/managing_contacts) para realizar estas acciones.

Haga clic en las fichas siguientes para ver cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Dominios](/links/control-panel/web-domains) y seleccione el dominio correspondiente.
>>
>> ![Panel de control de OVHcloud - lista de nombres de dominio](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la sección **Configuración**, haga clic en el enlace `Etiqueta de transferencia saliente`{.action}.
>>
>> ![transferencia saliente](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/outgoing-transfer-tag.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Se abrirá una ventana en la que deberá introducir el TAG del nuevo agente registrador y hacer clic en `Confirmar`{.action}.
>>
>> ![transferencia saliente](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/outgoing-transfer-tag-confirmation.png){.thumbnail}

Si no puede cambiar el TAG de su nombre de dominio desde el área de cliente, puede solicitarlo al Registro Nominet. Más información en la [web oficial de Nominet](https://www.nominet.uk/domain-support/).

### 2 - Seguir el proceso de transferencia a su nuevo agente registrador

La modificación de la etiqueta TAG activa el proceso de transferencia.

Contacte con su nuevo proveedor para más información y para conocer cualquier duda relativa al seguimiento de la transferencia.

## Más información

[Transferir un nombre de dominio a otro agente registrador](/pages/web_cloud/domains/transfer_outgoing_domain)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Interactúe con nuestra [comunidad de usuarios](/links/community).
