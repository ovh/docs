---
title: Utilizar el KVM en un VPS
excerpt: Cómo utilizar el KVM en un VPS
slug: utilizar_el_kvm_para_los_vps
section: Primeros pasos
---

**Última actualización: 18/04/2018**

## Objetivo

La consola KVM permite establecer una conexión directa con un VPS sin necesidad de utilizar software externo (terminal o Putty, por ejemplo). Puede acceder a esta consola desde el área de cliente o mediante la API de OVH.  

**Esta guía explica cómo acceder al KVM de ambas formas.**

## Requisitos

- Estar conectado al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Procedimiento

### Conexión al KVM desde el área de cliente

Una vez conectado al área de cliente, vaya a la sección  `Cloud`{.action}. En la columna izquierda, haga clic en `Servidores`{.action} y seleccione el VPS. Haga clic en el botón `KVM`{.action} que aparece.

![Hacer clic en KVM](images/activating_kvm_manager.png){.thumbnail}

 
A continuación, se establecerá la conexión al VPS en una nueva ventana. Este proceso podría tardar unos segundos. Una vez iniciado el KVM, solo tendrá que introducir sus claves de acceso.

![Conexión al KVM](images/kvm_screen.png){.thumbnail}

> [!primary]
>
> Compruebe la distribución del teclado, que podría ser diferente de la suya (por ejemplo, AZERTY en lugar de QWERTY).
>

### Conexión al KVM a través de la API

Si, por algún motivo, no pudiera conectarse al KVM desde el área de cliente, puede hacerlo a través de la API de OVH. En primer lugar, conéctese a la [API](https://api.ovh.com/){.external}.

#### VPS 2014

En los VPS 2014, se pueden producir errores 1006. Para resolverlos, utilice la siguiente llamada a la API:

> [!api]
>
> @api {POST} /vps/{serviceName}/openConsoleAccess
>

Aunque la respuesta de la API sea positiva, puede que la conexión tarde un par de minutos en establecerse, hasta que el puerto esté abierto.

#### VPS 2016

Si tiene problemas con el KVM, le recomendamos la siguiente llamada a la API:

> [!api]
>
> @api {POST} /vps/{serviceName}/getConsoleUrl
>

## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.

