---
title: Gestionar las formas de pago
slug: gestionar-formas-de-pago
excerpt: Cómo añadir y gestionar las formas de pago en el área de cliente de OVHcloud
section: Pedidos, facturas y servicios
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

**Última actualización: 18/05/2022**

## Objetivo

En el área de cliente de OVHcloud, puede registrar y gestionar diferentes formas de pago.

## Requisitos

- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).
- Disponer de un medio de pago válido.

## Procedimiento <a name="payment_methods"></a>

En el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), haga clic en su nombre en la esquina superior derecha y seleccione `Forma de pago`{.action}.

![hubpayment](images/hubpayment.png){.thumbnail}

Se abrirá una página en la que podrá consultar la forma de pago registrada en su cuenta de cliente. Allí, podrá:

- Añadir una forma de pago
- Cambiar su forma de pago por defecto
- Editar la descripción de la forma de pago
- Eliminar una forma de pago

### Añadir una forma de pago

Al realizar el primer pedido, deberá registrar una forma de pago para garantizar la renovación del servicio mediante cargo automático.

Esta forma de pago se utilizará por defecto para todas sus renovaciones y se le propondrá abonar nuevos pedidos.

Puede registrar otras formas de pago para que le sean propuestas al realizar nuevos pedidos o utilizar por defecto para sus futuros cargos.

Es posible registrar dos tipos de formas de pago:

- Tarjeta bancaria
- Cuenta PayPal

Para ello, haga clic en el botón `Añadir una forma de pago`{.action}.

![manage-payment-methods](images/managepaymentmethods2.png){.thumbnail}

Seleccione la forma de pago que quiera utilizar: 

![choose-payment-method-no-sepa](images/choose-payment-method-no-sepa.png){.thumbnail}

Siga los siguientes pasos para registrar una forma de pago. En el primer paso, puede marcar la casilla `Una vez validada, quiero seleccionar esta forma de pago por defecto`{.action}, para que se utilice en las futuras compras o cargos automáticos.

#### Tarjeta bancaria

![credit-card-no-sepa](images/credit-card-no-sepa.png){.thumbnail}

Para registrar una nueva tarjeta bancaria, será redirigido a la página de pago seguro de nuestro proveedor. Para confirmar el registro y la validez de la tarjeta, realizaremos una retención en su cuenta.<br>
No se cargará ningún importe y su tarjeta bancaria se activará en unos minutos.

#### Cuenta PayPal

![paypal_no_sepa](images/paypal_no_sepa.png){.thumbnail}

Seleccionar `PayPal`{.action} como forma de pago. Haga clic en el botón `Paypal`{.action}. Se abrirá una ventana emergente donde podrá conectarse a su cuenta de PayPal® y registrarla como forma de pago autorizada con OVHcloud.

Su cuenta de PayPal® se activará en unos minutos.

### Cambiar su forma de pago por defecto

Las facturas correspondientes a la renovación de sus servicios siempre se cargarán a su forma de pago por defecto. Si desea modificarla, deberá añadir primeramente una nueva forma de pago en su área de cliente.

Para ello, haga clic en el botón `...`{.action} a la derecha de la nueva forma de pago y, seguidamente, en `Establecer como forma de pago por defecto`{.action}.

![manage-payment-methods](images/managepaymentmethods3.png){.thumbnail}

> **Deseo cambiar mi forma de pago por defecto por otra, ¿cómo puedo hacerlo?**
>
> - 1. añada la nueva forma de pago
> - 2. establezca la nueva forma de pago por defecto
> - 3. elimine la antigua forma de pago
>

### Eliminar una forma de pago

Si ya no desea utilizar alguna de sus formas de pago, puede eliminarla haciendo clic en el botón `...`{.action} a la derecha de esta. A continuación, haga clic en `Eliminar esta forma de pago`{.action}.

![manage-payment-methods](images/managepaymentmethods4.png){.thumbnail}

Si quiere eliminar todas sus formas de pago, todos sus servicios deben estar [renovados manualmente](https://docs.ovh.com/es/billing/renovacion-automatica-ovh/#renovacion-manual).

#### Eliminar una forma de pago a través de las API OVHcloud

La eliminación de una forma de pago puede realizarse a través de las API conectándose a [https://eu.api.ovh.com/](https://eu.api.ovh.com/).

En primer lugar, debe obtener el id. de la forma de pago:

> [!api]
>
> @api {GET} /me/payment/method
>

A continuación, elimine la forma de pago utilizando el ID obtenido en el paso anterior:

> [!api]
>
> @api {DELETE} /me/payment/method/{paymentMethodId}
>

> [!primary]
>
> Para más información, consulte la guía [Primeros pasos con la API OVHcloud](https://docs.ovh.com/es/api/first-steps-with-ovh-api/).
>
> Si necesita ayuda para identificar sus formas de pago a través de las API de OVHcloud, utilice la función `Modificar la descripción`{.action} (botón `...`{.action} a la derecha de su pantalla) en la sección [Formas de pago](#payment_methods) del [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).
>

### Cuenta de prepago

#### ¿Qué es la cuenta de prepago?

Una vez que haya creado, la *cuenta de prepago* aparecerá en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es). Le permite recargar con antelación su cuenta de cliente y utilizar estos fondos para abonar sus pedidos y sus facturas de renovación.

Recargando su cuenta con regularidad, se asegurará de que la [renovación automática](https://docs.ovh.com/gb/en/billing/how-to-use-automatic-renewal-at-ovh/) de sus servicios no se interrumpa nunca por defecto de pago.

Para ello, acceda a la sección `Formas de pago` del área de cliente:

- haga clic en su nombre en la esquina superior derecha y seleccione `Forma de pago`{.action} en el menú de la derecha.
- seleccione la pestaña `Mi cuenta de prepago`{.action}.

![prepaid-account](images/prepaid-account.png){.thumbnail}

#### ¿Cómo funciona?

Cuando tiene servicios configurados con *renovación automática*, el importe de la factura se cargará prioritariamente a su cuenta de prepago cada vez que tenga contratados servicios.

A falta de fondos suficientes, el saldo de su cuenta pasará a negativo y permanecerá pendiente de pago.

Si dispone de una forma de pago válida guardada en su cuenta de cliente, este importe se cargará automáticamente en las 24 horas y el saldo será cero. sin que ello afecte al estado de sus servicios.

Si no ha registrado ninguna forma de pago, deberá abonar el importe pendiente desde el área de cliente en un plazo de 7 días para evitar cortes del servicio.

Si no ha guardado ninguna forma de pago, le recomendamos que establezca un **umbral de alerta** para asegurarse de que dispone de los fondos necesarios para sus próximas facturas:

![warning_prepaid_account](images/warning_prepaid_account.png){.thumbnail}

Si el crédito disponible en su cuenta de prepago se reduce por debajo del límite establecido, se le enviará de inmediato un email de notificación.

#### ¿Cómo recargar su cuenta de prepago?

En la pestaña `Mi cuenta de prepago`{.action}, haga clic en el botón `Recargar`{.action}.

![credit-prepaid-account](images/credit-prepaid-account.png){.thumbnail}

En la nueva ventana, seleccione el importe que desea recargar y haga clic en `Siguiente`{.action}. A continuación, haga clic en `Contratar`{.action}.

![order-prepaid-account](images/order-prepaid-account.png){.thumbnail}

En la nueva orden de pedido, seleccione la forma de pago que desee y abone el pedido.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
