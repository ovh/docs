---
title: 'Cambiar de facturación por horas a mensual'
excerpt: 'Cómo cambiar la modalidad de facturación de una instancia de Public Cloud'
slug: cambiar-modalidad-facturacion-public-cloud
section: 'Gestión del proyecto'
order: 06
---

**Última actualización: 21/03/2022**

## Objetivo

Al crear una instancia de Public Cloud, puede elegir entre una tarifa por horas o mensual. Las instancias con tarifa por horas se facturan según el consumo, esto es, los usuarios reciben una factura por los recursos específicos que han utilizado al final de cada mes. Las instancias con tarifas mensuales se pueden pagar por adelantado y se facturan a un precio inferior (hasta un 50 % menos que aquellas según el consumo). Si inicialmente seleccionó la facturación por horas, puede cambiar a la facturación mensual en cualquier momento.

**Esta guía explica cómo cambiar de facturación por horas a facturación mensual.**

> [!warning]
>
> No puede cambiar de facturación mensual a facturación por horas. Si desea que se le facture con la tarifa por horas, tendrá que eliminar su instancia de facturación con tarifa mensual, crear una nueva y seleccionar facturación por horas. En este caso, le sugerimos que siga el siguiente procedimiento:
>
>- Cree una instantánea de su instancia actual
>
>- Cree una nueva instancia basada en la instantánea anterior
>
>- Elimine la instancia mensual
>

## Requisitos

- Debe haber creado una [instancia de Public Cloud](https://www.ovhcloud.com/es/public-cloud/){.external}
- Debe estar conectado a su [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}.


## Procedimiento

### Desde el área de cliente de OVHcloud

Una vez iniciada sesión en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}, seleccione la instancia cuya tarifa de facturación desea cambiar en el panel de control y abra su menú de opciones haciendo clic en los tres puntos a la derecha de dicha instancia. A continuación, podrá ver el botón `«Cambiar a suscripción mensual»`{.action}:

![Change billing calculation](images/switch_to_monthly_updated.png){.thumbnail}

A continuación, debe confirmar que desea cambiar su tarifa de facturación:

![Confirm billing calculation change](images/confirm_to_monthly_updated.png){.thumbnail}

Una vez confirmada su elección, recibirá de inmediato una factura mensual proporcional a la parte restante. El próximo proyecto de ley incluirá la parte de la tarifa horaria del mes (el 1er del mes hasta el cambio) y la nueva tarifa mensual.

### Desde la API OpenStack

Al crear una instancia utilizando la API OpenStack, a menos que se especifique en el script de creación, la instancia se crea automáticamente con una suscripción por horas. Para cambiar a una suscripción mensual, ejecute el siguiente comando:

```bash
openstack server set --property ovh-monthly-instance=1 "InstanceID"
```

Sustituya "InstanceID" por el ID de la instancia correspondiente. Puede obtener este identificador desde el área de cliente o la API de OVHcloud.

### Desde la API OVHcloud

Conéctese a la [interfaz API OVHcloud](https://ca.api.ovh.com/console/) según la [guía adecuada](https://docs.ovh.com/us/es/api/first-steps-with-ovh-api/) y siga los pasos que se indican a continuación.

Utilice la siguiente llamada:

> [!api]
>
> @api {POST} /cloud/project/{serviceName}/instance/{instanceId}/activeMonthlyBilling
>

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
