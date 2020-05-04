---
title: 'Cambiar los servidores DNS de un dominio en OVH'
slug: web_hosting_informacion_general_sobre_los_servidores_dns
excerpt: 'Cómo cambiar los servidores DNS de un dominio registrado en OVH'
section: 'DNS (servidor y zona)'
order: 1
---

**Última actualización: 17/05/2019**

## Objetivo

La función de los servidores DNS es alojar la configuración DNS de los dominios. La configuración DNS, también llamada zona DNS, contiene una serie de datos técnicos: los registros. Estos registros permiten relacionar el dominio con el servidor o servidores en los que están alojados el sitio web y las cuentas de correo electrónico.

Dicho de otra forma, los registros DNS, que se almacenan en los servidores DNS, permiten que se pueda acceder a los dominios desde internet.

**Esta guía explica cómo cambiar los servidores DNS de un dominio en OVH.**

## Requisitos

- Tener un dominio registrado en OVH.
- Disponer de los [permisos necesarios para gestionar el dominio](https://docs.ovh.com/es/customer/gestion-de-los-contactos/){.external} desde el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.
- Estar conectado al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

> [!warning]
>
> Si el dominio no está registrado en OVH, deberá editar los servidores DNS desde el panel que le ofrezca el proveedor que tenga su gestión.
>

## Procedimiento

**Le recomendamos que preste especial atención cuando edite los servidores DNS de un dominio**, ya que una modificación errónea podría deshabilitar el acceso al sitio web y la recepción de nuevos mensajes en las direcciones de correo electrónico. A continuación explicamos lo que ocurre cuando se editan los servidores DNS para que entienda las consecuencias que ello implica.

Al cambiar los servidores DNS de un dominio, también se modifica su configuración DNS. La nueva configuración, que sustituye a la antigua, se almacena en los nuevos servidores DNS. Técnicamente, el dominio pasa a utilizar una nueva zona DNS.

Tenga en cuenta los siguientes aspectos:

- El contenido de la antigua configuración DNS no se replica automáticamente en la nueva. Por lo tanto, deberá asegurarse de que la nueva configuración contiene toda la información necesaria para que los servicios asociados al dominio (como el sitio web o las direcciones de correo electrónico) funcionen correctamente.

- Si quiere modificar un único elemento de la configuración DNS actual (un registro DNS, por ejemplo), le recomendamos que edite la zona DNS como se indica en la guía [Editar una zona DNS de OVH](https://docs.ovh.com/es/domains/web_hosting_como_editar_mi_zona_dns/){.external}.

- Existen registros (las entidades encargadas de gestionar las extensiones de dominio) que aplican requisitos particulares relativos a los servidores DNS: número de servidores de nombres, valor de los registros... En caso de duda, consulte con el registro responsable de la extensión.

> [!warning]
>
> Antes de realizar cualquier cambio, asegúrese de que la modificación no hará que su dominio deje de estar accesible. Si no está seguro, contacte con la persona que haya solicitado la modificación.
>

### 1. Acceder a la zona de gestión de los servidores DNS del dominio

En primer lugar, conéctese al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, haga clic en `Dominios`{.action} en la columna izquierda y seleccione el dominio correspondiente. A continuación, abra la pestaña `Servidores DNS`{.action}.

Se mostrará una tabla con los servidores DNS actualmente configurados en OVH para el dominio. Cada línea de la tabla contiene un servidor DNS (puede haber varios).

![Servidor DNS](images/edit-dns-server-ovh-step1.png){.thumbnail}

### 2. Editar los servidores DNS de un dominio

Para editar los servidores DNS, haga clic en el botón `Cambiar los servidores DNS`{.action}.

Sustituya en los campos de texto los detalles actuales del servidor DNS por la información relativa a los nuevos servidores que desee configurar. Para añadir más servidores a la lista, haga clic en el botón `+`{.action} situado al final de la última línea de la tabla. Aparecerá una nueva línea, donde deberá completar los campos de texto.

Una vez que haya introducido los datos, haga clic en el botón `Aplicar la configuración`{.action}. El estado de los servidores DNS se actualizará en la tabla, mostrando los cambios que acaba de realizar.

> [!primary]
>
> El botón `Restaurar los servidores DNS`{.action} permite sustituir los servidores DNS actuales del dominio por los servidores de OVH de origen. Le recomendamos que solo utilice esta opción si quiere volver a utilizar los servidores DNS de OVH. 
>

![Servidor DNS](images/edit-dns-server-ovh-step2.png){.thumbnail}

### 3. Esperar a que se propaguen los cambios

Una vez que haya realizado los cambios, deberá esperar a que se apliquen. Ocurrirán dos cosas:

- En primer lugar, el registro encargado de gestionar la extensión del dominio debe aplicar los cambios realizados desde OVH. Puede consultar el progreso de esta operación en el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}. Para ello, en la columna izquierda, haga clic en `Dominios`{.action} y seleccione `Operaciones en curso`{.action}.
- Una vez que el registro encargado de gestionar la extensión del dominio haya aplicado los cambios, estos tardan un máximo de 48 horas en propagarse y ser efectivos.

## Más información

[Editar una zona DNS de OVH](https://docs.ovh.com/es/domains/web_hosting_como_editar_mi_zona_dns/){.external}

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.