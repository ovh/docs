---
title: 'Proteger un dominio con DNSSEC'
slug: proteja_su_dominio_con_dnssec
excerpt: 'Cómo proteger un dominio contra el «cache poisoning» activando DNSSEC'
section: 'Protección y seguridad'
order: 01
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 19/10/2022**

## Objetivo

Los servidores DNS alojan la configuración DNS de los dominios. Normalmente, esta configuración sirve de enlace entre el dominio y el servidor o servidores en los que están alojados el sitio web y las cuentas de correo electrónico. En los últimos años, los piratas informáticos han perfeccionado los métodos de envenenamiento de los servidores DNS (*DNS poisoning*), lo que les permite desviar el tráfico hacia otros servidores. DNSSEC permite proteger el dominio contra este tipo de acciones.

**Esta guía explica cómo activar DNSSEC en un dominio para protegerlo contra el *DNS cache poisoning*.** Para más información, le recomendamos que consulte nuestra página relativa a [DNSSEC](https://www.ovhcloud.com/es-es/domains/dnssec/){.external}.

## Requisitos

- Tener un dominio registrado en OVHcloud.
- El dominio debe tener una extensión compatible con DNSSEC.
- Estar conectado al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}, en la sección `Web Cloud`{.action}.

## Procedimiento

Existen dos formas de activar DNSSEC:

- **Si el dominio utiliza los servidores DNS de OVHcloud**, puede realizar la activación directamente desde el área de cliente.

- **Si su dominio no utiliza los servidores DNS de OVHcloud**, debe ponerse en contacto con el proveedor que gestiona la configuración DNS y solicitarle todos los parámetros. A continuación, acceda a la sección `Web Cloud`{.action}. Haga clic en `Dominios`{.action} y, a continuación, seleccione el dominio correspondiente en la lista.
Haga clic en la pestaña `Registros DS`{.action}, a continuación, haga clic en el botón Editar de la derecha y, por último, en el botón `+`{.action}.
Rellene los 4 campos "Key tag", "Flag", "Algorithm", "Public key (codificado en base 64)" con los datos que le ofrece su actual proveedor.

> [!primary]
>
> Puede comprobar si su dominio utiliza la configuración DNS de OVHcloud directamente desde el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}. Para ello, haga clic en `Dominios`{.action} y seleccione el dominio correspondiente. A continuación, abra la pestaña `Servidores DNS`{.action}.
>

### 1. Acceder a la gestión del dominio

En la sección `Web Cloud`{.action} del [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}, haga clic en `Dominios`{.action} y seleccione el dominio correspondiente.

Se mostrará la información general del dominio. 

### 2. Configurar el servicio DNSSEC del dominio

En la pestaña `Información general`{.action} puede comprobar el estado de activación de DNSSEC en su dominio.

Para ello, en la columna **Seguridad**, consulte el apartado **Delegación segura (DNSSEC)**.

![Delegación segura (DNSSEC)](images/activate-dnssec-step2.png){.thumbnail}

Utilice el botón de tipo on/off para activar o desactivar el servicio DNSSEC en el dominio. Se abrirá una ventana en la que deberá confirmar el cambio.

![Activación de DNSSEC](images/activate-dnssec-step3.png){.thumbnail}

### 3. Esperar durante la propagación

La activación o desactivación de DNSSEC en un dominio puede tardar hasta 24 horas en aplicarse. 

## Más información

Interactúe con nuestra comunidad de usuarios en [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
