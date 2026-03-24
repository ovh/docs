---
title: 'Resolver un error en un nombre de dominio'
updated: 2026-03-24
---

<style>
details>summary {
    color:rgb(33, 153, 232);
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

## Objetivo

La creación, la transferencia o el cambio de titular de un nombre de dominio pueden generar errores que requieren una intervención por su parte.

**Descubra cómo actuar cuando se produce un error en un nombre de dominio.**

## Requisitos

- Ser titular de uno o varios [nombres de dominio](/links/web/domains).
- Estar al corriente en los [pagos](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) y [renovaciones](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) de sus nombres de dominio.

<!-- CP-NAV-START:web-ongoing-operations -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Operaciones en curso](/links/control-panel/web-ongoing-operations)
- **Ruta de navegación:** `Web Cloud`{.action} > `Operaciones en curso`{.action} > Seleccione la pestaña `Dominio`{.action} o `DNS`{.action}.

---
<!-- CP-NAV-END:web-ongoing-operations -->

## Procedimiento

### Presentación de la interfaz de gestión de las operaciones en curso

Haga clic en las pestañas de abajo para ver cada uno de los **2** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Operaciones en curso](/links/control-panel/web-ongoing-operations).
>>
> **Paso 2**
>>
>> Una tabla lista todas las operaciones relacionadas con los nombres de dominio de su área de cliente.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-error-creating-domain-name-with-registry.png){.thumbnail}
>>
>> - `Dominio`: Nombre de dominio afectado por la operación.
>> - `Operación`: Operación en curso sobre el nombre de dominio.
>> - `Comentario`: Detalles de la operación en curso. Instrucciones.
>> - `Fecha de tratamiento`: Fecha de creación de la operación.
>> - `Fecha de actualización`: Marca de tiempo de actualización de la operación en curso.
>> - `Fecha de finalización`: Fecha de finalización de la operación.
>> - `Estado`: Estado actual de la operación.

No todas las operaciones listadas en esta tabla requieren su intervención para que se realicen con normalidad.

Esta guía trata de las operaciones **en error** a través de situaciones recurrentes.

### Situaciones

> [!primary]
>
> La siguiente lista de situaciones no es exhaustiva. Si se produce un error que no se detalla en esta guía:
>
> - Compruebe que está al corriente en los [pagos](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) y [renovaciones](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) de sus nombres de dominio.
> - Compruebe si es posible realizar alguna acción consultando las opciones disponibles a la derecha de la operación en cuestión.
> - Lea el mensaje descriptivo y compruebe si le permite resolver el error.
>
> Si, a pesar de estas comprobaciones, no consigue resolver el error, [abra un tíquet de asistencia](/links/support) desde su área de cliente.

**Haga clic en la situación que desee para ver su contenido.**

/// details | Solicitud de documentos

Algunas extensiones de nombres de dominio requieren justificar su uso proporcionando documentos. En ese caso, debe enviar los documentos desde su área de cliente de OVHcloud.

Haga clic en las pestañas de abajo para ver cada uno de los **4** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Operaciones en curso](/links/control-panel/web-ongoing-operations).
>>
> **Paso 2**
>>
>> Localice la operación en error en la tabla.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/contacts-update-provide-us-with-the-documents-required.png){.thumbnail}
>>
> **Paso 3**
>>
>> Haga clic en el botón `...`{.action} a la derecha de la operación en cuestión.
>>
> **Paso 4**
>>
>> Aparecerá la ventana de abajo. La sección "Description" le permite obtener información detallada sobre el documento que debe proporcionar, así como un botón para subir su documento.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/operation-data-provide-us-with-the-documents-required.png){.thumbnail}

///

/// details | Información incompleta

Al registrar su nombre de dominio, a veces es necesario completar los datos de "contacto". Si estos no cumplen los criterios del nombre de dominio, puede obtener el error que se muestra a continuación.

Haga clic en las pestañas de abajo para ver cada uno de los **4** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Operaciones en curso](/links/control-panel/web-ongoing-operations).
>>
> **Paso 2**
>>
>> Localice la operación en error en la tabla.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-complete-nic-admin-es-tld.png){.thumbnail}
>>
> **Paso 3**
>>
>> Haga clic en el botón `...`{.action} a la derecha de la operación en cuestión.
>>
> **Paso 4**
>>
>> Aparecerá la ventana de abajo. Complete los campos con la información del contacto correspondiente.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/operation-data-complete-nic-admin-es-tld.png){.thumbnail}

///

/// details | Código de transferencia erróneo

Al transferir su nombre de dominio a OVHcloud, debe introducir un código de transferencia (**authInfo** / **AuthCode**) durante el pedido. Si el código es incorrecto, la operación se suspende. Puede reiniciarla introduciendo el código correcto.

Haga clic en las pestañas de abajo para ver cada uno de los **4** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Operaciones en curso](/links/control-panel/web-ongoing-operations).
>>
> **Paso 2**
>>
>> Localice la operación en error en la tabla.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-auth-code-missing.png){.thumbnail}
>>
> **Paso 3**
>>
>> Haga clic en el botón `...`{.action} a la derecha de la operación en cuestión.
>>
> **Paso 4**
>>
>> Aparecerá la ventana de abajo. Introduzca el código de transferencia (**authInfo** / **AuthCode**) y reinicie la operación.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/operation-data-auth-code-missing.png){.thumbnail}

///

/// details | Error relacionado con los servidores DNS

Se puede producir un error si los servidores DNS asociados a un nombre de dominio no funcionan.
En la situación que se muestra a continuación, la dirección IP del servidor DNS no responde.

Haga clic en las pestañas de abajo para ver cada uno de los **4** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Operaciones en curso](/links/control-panel/web-ongoing-operations).
>>
> **Paso 2**
>>
>> Localice la operación en error en la tabla.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-dns-update-unable-to-retrieve-dns-ip.png){.thumbnail}
>>
> **Paso 3**
>>
>> En la sección `Dominios`{.action}, seleccione el nombre de dominio correspondiente y haga clic en la pestaña `Servidores DNS`{.action}.
>>
> **Paso 4**
>>
>> Desde esta pestaña, [modifique sus servidores DNS](/pages/web_cloud/domains/dns_server_edit).

///

/// details | Error en un nombre de dominio en .ie, .de o .it después de una actualización DNS

Al modificar sus servidores DNS, el registro puede verificar los nuevos servidores DNS y la zona DNS asociada y bloquear el nombre de dominio si la configuración no es correcta.

> [!warning]
>
> Este tipo de bloqueo es iniciado por el registro y no por OVHcloud. Así, aunque el nombre de dominio esté bloqueado por el registro, sus servidores DNS aparecerán como `Activos` en su área de cliente de OVHcloud.

Para comprobar si su nombre de dominio está afectado por dicho bloqueo, haga clic en las pestañas de abajo para ver cada uno de los **4** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Operaciones en curso](/links/control-panel/web-ongoing-operations).
>>
> **Paso 2**
>>
>> Localice la operación en error en la tabla.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-dns-update-error-occured-updating-domain.png){.thumbnail}
>>
> **Paso 3**
>>
>> Para verificar su nombre de dominio, le recomendamos utilizar la herramienta de verificación proporcionada por el registro:
>>
>> - Para un nombre de dominio en **.de**: <https://nast.denic.de/>.
>> - Para un nombre de dominio en **.it**: <https://dns-check.nic.it/>.
>>
>> > [!primary]
>> >
>> > Si su registro no proporciona una herramienta de verificación de servidores DNS, puede consultar sus nuevos servidores DNS mediante el comando `nslookup` en un "símbolo del sistema" de Windows o mediante el comando `dig` en un "terminal" de Linux o macOS.
>> >
>> > Si sus servidores DNS son accesibles, la herramienta le devolverá una dirección IP.
>> >
>> > En cualquier caso, asegúrese de que el administrador del servidor DNS lo ha configurado correctamente para alojar la zona DNS de su nombre de dominio.
>>
> **Paso 4**
>>
>> Una vez que haya identificado el origen del error y lo haya corregido, haga clic en el botón `...`{.action} a la derecha de la operación en cuestión y reinicie la operación de verificación DNS.

///

/// details | Error interno de OVHcloud

Puede encontrar un error con el detalle "error interno".

Haga clic en las pestañas de abajo para ver cada uno de los **3** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Operaciones en curso](/links/control-panel/web-ongoing-operations).
>>
> **Paso 2**
>>
>> Localice la operación en error en la tabla.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-renewal-internal-error.png){.thumbnail}
>>
> **Paso 3**
>>
>> Este error no permite ninguna acción por su parte desde el área de cliente de OVHcloud.
>>
>> En primer lugar, compruebe que su nombre de dominio y sus servidores DNS están activos.
>>
>> Si detecta una anomalía que no está relacionada con la configuración de los servidores DNS o de la zona DNS, [contacte con el soporte de OVHcloud](/links/support) para identificar el origen del problema.

///

## Más información

[Transferir un nombre de dominio a OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)

[Transferir un nombre de dominio a otro agente registrador](/pages/web_cloud/domains/transfer_outgoing_domain)

[Modificar los servidores DNS de un nombre de dominio de OVHcloud](/pages/web_cloud/domains/dns_server_edit)

Para servicios especializados (SEO, desarrollo, etc.), contacte con los [partners de OVHcloud](/links/partner).

Si necesita ayuda en el uso y la configuración de sus soluciones de OVHcloud, puede consultar nuestras [ofertas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
