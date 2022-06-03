---
title: Transferir un dominio .uk a otro agente registrador
slug: transferencia-saliente-de-dominio-uk
excerpt: "Descubra cómo transferir la salida de un dominio UK a otro registrador"
section: 'Operaciones en los dominios'
order: 5
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 12/07/2021**

## Objetivo

El proceso de cambio de agente registrador (*registrador*) para los dominios de primer nivel (*top-level domain*, o **TLD**) del indicativo de país **UK** (**.uk**) difiere del descrito en nuestra [guía de transferencia de los TLD genéricos](../transferencia_saliente_de_un_dominio_generico_o_geografico/). Las siguientes instrucciones se aplican a las siguientes extensiones:

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

## Requisitos

- Tener un [dominio .uk](https://www.ovhcloud.com/es-es/domains/) registrado con OVHcloud.
- Tienes acceso a tu [Panel de configuración de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) y tener los permisos necesarios para gestionar el dominio (ser administrador del dominio).
- El dominio debe estar siempre activo, es decir, no debe haber expirado o haber sido bloqueado por OVHcloud.
- El nombre de dominio no debe ser objeto de un litigio en curso ante el [Registro Nominet](https://www.nominet.uk/)

> [!primary]
>
> Si el dominio ha expirado desde **menos de 90 días**, puede transferirse siempre. Por favor, contacte con nuestro equipo de soporte técnico creando una solicitud de soporte en su Panel de control de OVHcloud para desbloquear el dominio para la transferencia.
>
> Si usted es el **propietario** del dominio pero su gestión en el área de cliente de OVHcloud no está disponible, ya sea a través de su propio acceso o a través del contacto administrativo del dominio, consulte [esta guía](../../customer/gestion-de-los-contactos/#caso-particular-de-un-propietario-de-dominio) antes de continuar.
>

## Procedimiento

Cada TLD correspondiente dispone de una etiqueta (*TAG*) correspondiente a su actual agente registrador de dominios, como OVHcloud. La transferencia se inicia sustituyendo el TAG por el identificador de su nuevo agente registrador.

Si todavía no conoce el TAG necesario, puede solicitarlo a su nuevo proveedor o consultar la [lista de agentes registradores Nominet](https://registrars.nominet.uk/uk-namespace/registrar-agreement/list-of-registrars/).

### Paso 1: comprobar la información necesaria

Conéctese al [Panel de configuración de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) y seleccione `Web Cloud`{.action}. Haga clic en `Dominios`{.action} y seleccione el dominio correspondiente.

Recuerde que debe estar conectado como administrador.

En la pestaña `Información general`{.action}, puede comprobar que se cumplen los requisitos para el proceso de transferencia.


### Paso 2: modificar el TAG del dominio

Haga clic en el enlace `Etiqueta de transferencia saliente`{.action} en la sección titulada **Seguridad**.

![transferencia saliente](images/img_4267.jpg){.thumbnail}

Se abrirá una ventana en la que deberá introducir el TAG del nuevo agente registrador y hacer clic en `Confirmar`{.action}.

![transferencia saliente](images/img_4268.jpg){.thumbnail}

Si no puede cambiar el TAG de su dominio desde el área de cliente, puede solicitarlo al Registro Nominet. Más información en la [web oficial de Nominet](https://www.nominet.uk/domain-support/).

### Paso 3: seguir el proceso de transferencia a su nuevo agente registrador

La modificación de la etiqueta TAG activa el proceso de transferencia.

Contacte con su nuevo proveedor para más información y para conocer cualquier duda relativa al seguimiento de la transferencia.

## Más información

[Transferir un dominio a otro agente registrador](../transferencia_saliente_de_un_dominio_generico_o_geografico/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.