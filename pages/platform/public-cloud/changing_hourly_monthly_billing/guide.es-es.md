---
title: 'Cambiar de facturación por horas a mensual'
excerpt: 'Cómo cambiar la modalidad de facturación de una instancia de Public Cloud'
slug: cambiar-modalidad-facturacion-public-cloud
section: 'Gestión del proyecto'
---

**Última actualización: 6/12/2019**

## Objetivo

Al crear una instancia de Public Cloud, puede elegir entre una tarifa por horas o mensual. Las instancias con tarifa por horas se facturan según el consumo, esto es, los usuarios reciben una factura por los recursos específicos que han utilizado al final de cada mes. Las instancias con tarifas mensuales se pueden pagar por adelantado y se facturan a un precio inferior (un 50 % menos que aquellas según el consumo). Si inicialmente seleccionó la facturación por horas, puede cambiar a la facturación mensual en cualquier momento.

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
- Debe haber iniciado sesión en el [área de cliente de OVHcloud para tener acceso al panel de control](https://www.ovh.com/auth/?action=gotomanager){.external}.


## Procedimiento

Una vez iniciada sesión en el [área de cliente](https://www.ovh.com/auth/?action=gotomanager){.external}, seleccione la instancia cuya tarifa de facturación desea cambiar en el panel de control y abra su menú de opciones haciendo clic en los tres puntos a la derecha de dicha instancia. A continuación, podrá ver el botón `«Cambiar a suscripción mensual»`{.action}:

![Change billing calculation](images/switch.png){.thumbnail}

A continuación, debe confirmar que desea cambiar su tarifa de facturación:

![Confirm billing calculation change](images/switch1.png){.thumbnail}

Una vez confirmada su elección, su siguiente factura incluirá el coste por horas de la instancia en concepto de los días restantes del mes, incluyendo el coste del mes siguiente a la tarifa plana mensual.


## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.