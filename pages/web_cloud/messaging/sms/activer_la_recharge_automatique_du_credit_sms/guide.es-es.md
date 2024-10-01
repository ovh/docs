---
title: 'Crédito de SMS y recarga automática'
excerpt: 'Cómo gestionar el crédito de SMS en OVHcloud'
updated: 2023-02-09
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

Esta guía explica en qué consiste el crédito de SMS, cómo recargarlo de forma automática y cómo transferirlo entre cuentas de SMS.

## Requisitos

- Disponer de una cuenta de SMS en OVHcloud.
- Conectarse a la [API de OVHcloud](https://api.ovh.com/) (solo para las transferencias de crédito).
- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager){.external}, en la sección `Telecom`{.action}{.action} > `SMS`{.action}.

![área de cliente Telecom SMS](/pages/assets/screens/control_panel/product-selection/telecom/tpl-telecom-03-en-sms.png){.thumbnail}

## Procedimiento

### Crédito de SMS

En España, 0,7 créditos equivalen a 1 SMS enviado (máximo 160 caracteres). El precio por SMS es decreciente y depende de la cantidad de crédito de SMS que se adquiera en una misma contratación. 

Puede consultar la lista de packs de créditos de SMS en el siguiente enlace: [https://www.ovh.es/sms/](https://www.ovh.es/sms/).

**Por ejemplo, si adquiere un pack de 100 créditos de SMS, cada crédito tendrá un precio de 0,06 € :**

Cada SMS enviado en España equivale a 0,7 créditos, por lo que podrá enviar hasta 142 SMS.<br>
En el caso de India, por ejemplo, cada SMS equivale a 0,4 créditos, por lo que podrá enviar hasta 250 SMS.

Para más información sobre el coste de envío en créditos de sus SMS en función del destino, consulte la siguiente página: [https://www.ovh.es/sms/precios/](https://www.ovh.es/sms/precios/).

> [!primary]
>
> Un SMS solo puede contener una cantidad limitada de caracteres en función de la codificación. Para más información sobre la codificación y los caracteres admitidos, consulte la siguiente guía:
> 
> [Enviar SMS desde el área de cliente](/pages/web_cloud/messaging/sms/envoyer_des_sms_depuis_mon_espace_client)
>

### Recarga automática

Para garantizar que su cuenta de SMS dispone siempre de crédito, puede activar la recarga automática. Con esta opción, cada vez que su cuenta de SMS baje de un número de créditos determinado, se añadirá de forma automática una nueva cantidad de crédito en su cuenta.

> [!warning]
>
> La opción de recarga automática sólo puede activarse si se cumplen las siguientes condiciones:
>
> - una forma de pago de tipo SEPA está presente y validada en su cuenta de OVHcloud.
> - su servicio SMS debe tener al menos 2 meses de antigüedad.

Para activar la recarga automática, conéctese al [área de cliente de OVHcloud](/links/manager){.external}, acceda a la pestaña `Telecom`{.action} y abra la sección `SMS`{.action}. Seleccione la cuenta de SMS en la que desea activar la recarga automática.

Acceda al menú `Opciones`{.action} (1) y seleccione la opción `Recarga automática`{.action} (2).

![Crédito de SMS](images/smscredit01.png){.thumbnail}

En la sección "Administrar las opciones", haga clic en `Modificar`{.action}.

![Crédito de SMS](images/smscredit02.png){.thumbnail}

Por último, configure los siguientes campos:

- Umbral mínimo (1): límite mínimo por debajo del cual se realizará la recarga automática.
- Cantidad a recargar (2): cantidad de créditos que desea recargar en su cuenta de SMS. Puede elegir entre 100, 200, 250, 500, 1000, 5000 y 10000 créditos.
- Haga clic en `Aceptar`{.action} para guardar los cambios.

![Crédito de SMS](images/smscredit03.png){.thumbnail}

### Transferir créditos SMS

> [!primary]
>
> Solo es posible transferir créditos entre cuentas de SMS de un mismo ID de cliente de OVHcloud. No es posible transferir créditos entre dos ID de cliente de OVHcloud diferentes.
>

En el área de cliente de OVHcloud, seleccione una de sus cuentas de SMS y haga clic en `Transferir crédito`{.action} en la pestaña `Inicio`{.action}.

![transferencia de créditos de SMS](images/credit-transfer01.png){.thumbnail}

Seleccione:

- la cuenta de SMS que va a transferir los créditos
- la cuenta de SMS que va a recibir los créditos
- el número de créditos que se transferirán

Haga clic en `Enviar`{.action} para confirmar la transferencia. Esta operación es inmediata.

![transferencia de créditos de SMS](images/credit-transfer02.png){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
