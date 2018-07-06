---
title: 'Cambiar los servidores DNS de un dominio en OVH'
slug: web_hosting_informacion_general_sobre_los_servidores_dns
excerpt: 'Cómo cambiar los servidores DNS de un dominio en OVH'
section: 'DNS (servidor y zona)'
order: 1
---

**Última actualización: 06/07/2018**

## Objetivo

Los servidores DNS alojan la configuración DNS de los dominios. La configuración DNS, también llamada zona DNS, contiene una serie de datos técnicos: los registros. Convencionalmente, estos registros sirven de enlace entre el dominio y el servidor o servidores en los que están alojados el sitio web y las cuentas de correo electrónico.

Así pues, podemos decir que los registros DNS, que se almacenan en los servidores DNS, son los que permiten que se pueda acceder a los dominios desde internet.

**Esta guía explica cómo cambiar los servidores DNS de un dominio en OVH.**

## Requisitos

- Tener un [dominio](https://www.ovh.es/dominios/){.external} registrado en OVH.
- Tener acceso a la gestión del dominio desde el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.
- Estar conectado al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

> [!warning]
>
> Si el dominio no está registrado en OVH, deberá editar los servidores DNS desde el panel que le ofrezca el proveedor que tenga su gestión.
>

## Procedimiento

**Editar los servidores DNS de un dominio es una operación delicada.** Una modificación errónea podría deshabilitar el acceso al sitio web y la recepción de nuevos mensajes en las direcciones de correo electrónico. A continuación explicamos lo que ocurre cuando se editan los servidores DNS para que entienda las consecuencias que ello implica sobre el dominio.

Al cambiar los servidores DNS de un dominio, también se modifica la configuración DNS que utiliza dicho dominio. La nueva configuración se almacena en los nuevos servidores DNS configurados, sustituyendo a la antigua configuración. Técnicamente, el dominio utiliza una nueva zona DNS.

Tenga en cuenta los siguientes aspectos:

- El contenido de la antigua configuración DNS no se replica automáticamente en la nueva. Por lo tanto, deberá asegurarse de que la nueva configuración contiene todos los elementos necesarios para el buen funcionamiento de los servicios asociados al dominio (como un sitio web o direcciones de correo electrónico).

- Si quiere modificar un único elemento de la configuración DNS actual (un registro, por ejemplo), le recomendamos que edite la zona DNS como se indica en la guía [Editar una zona DNS de OVH](https://docs.ovh.com/es/domains/web_hosting_como_editar_mi_zona_dns/){.external}.

> [!warning]
>
> Antes de realizar cualquier cambio, asegúrese de que la modificación no hará que su dominio deje de estar accesible. Si no está seguro, puede ponerse en contacto con la persona que haya solicitado la modificación para confirmar que es correcta.
>

### 1. Acceder a la gestión de los servidores DNS del dominio

Conéctese al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}. En la columna izquierda, haga clic en `Dominios`{.action} y seleccione el dominio correspondiente. A continuación, abra la pestaña `Servidores DNS`{.action}.

Se mostrará una tabla con los servidores DNS configurados actualmente en OVH para el dominio. Cada línea de la tabla contiene un servidor DNS (puede haber varios).

![Servidor DNS](images/edit-dns-server-ovh-step1.png){.thumbnail}

### 2. Editar los servidores DNS del dominio

Para editar los servidores DNS, haga clic en el botón `Cambiar los servidores DNS`{.action}.

Sustituya en los campos de texto los servidores DNS actuales por los nuevos servidores que desee configurar. Para añadir más servidores a la lista, haga clic en el botón `+`{.action} situado al final de la última línea.

Una vez que haya introducido los nuevos servidores, haga clic en el botón `Aplicar la configuración`{.action}. El estado de los servidores DNS se actualizará en la tabla, mostrando los cambios que acaba de realizar.

> [!primary]
>
> El botón `Restaurar los servidores DNS`{.action} permite sustituir los servidores DNS actuales del dominio por los servidores de OVH de origen. Le recomendamos que solo utilice esta opción si quiere volver a utilizar los servidores DNS de OVH. 
>

![Servidor DNS](images/edit-dns-server-ovh-step2.png){.thumbnail}

### 3. Esperar a que se apliquen los cambios

Una vez que haya editado los servidores DNS, deberá esperar a que se apliquen los cambios. Ocurrirán dos cosas:

- En primer lugar, el organismo encargado de gestionar la extensión del dominio debe aplicar los cambios realizados desde OVH. Puede consultar el progreso en el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}. Para ello, en la columna izquierda, haga clic en `Dominios`{.action} y seleccione `Operaciones en curso`{.action}.

- Una vez que el organismo encargado de gestionar la extensión del dominio haya aplicado los cambios, la modificación tarda un máximo de 48 horas en propagarse y ser efectiva.

## Más información

[Editar una zona DNS de OVH](https://docs.ovh.com/es/domains/web_hosting_como_editar_mi_zona_dns/){.external}

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.