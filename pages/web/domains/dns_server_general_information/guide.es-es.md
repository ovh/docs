---
title: 'Cambiar los servidores DNS de un dominio en OVHcloud'
slug: web_hosting_informacion_general_sobre_los_servidores_dns
excerpt: 'Cómo cambiar los servidores DNS de un dominio registrado en OVHcloud'
section: 'DNS (servidor y zona)'
order: 01
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 18 de febrero de 2021**

## Objetivo

### Entender el concepto de DNS 

La sigla DNS, que significa **D**omain **N**ame **S**ystem, es un conjunto de elementos que permiten hacer coincidir un dominio con una dirección IP.

Para más información, consulte la guía [Editar una zona DNS de OVHcloud](../web_hosting_como_editar_mi_zona_dns/#understanddns).

### Servidores DNS 

Los **servidores DNS** contienen los archivos de configuración DNS de los dominios llamados **zonas DNS**.

![DNS](images/dnsserver.png){.thumbnail}

Los servidores DNS suelen ser utilizados por grupos de dos (primario y secundario), con el objetivo de obtener una redundancia en caso de fallo de uno de los servidores DNS.

**Esta guía explica cómo cambiar los servidores DNS de un dominio en OVHcloud.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Requisitos

- Tener un [dominio](https://www.ovhcloud.com/es-es/domains/) registrado con OVHcloud.
- Disponer de los permisos [necesarios para gestionar](../../customer/gestion-de-los-contactos/){.external} el dominio desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}.
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}.

> [!primary]
>
> Si su dominio no está registrado en OVHcloud, deberá editar los servidores DNS utilizando la interfaz proporcionada por el proveedor de servicios que lo gestiona.
>

## Procedimiento

> [!warning]
>
> **Le recomendamos que tenga cuidado al modificar los servidores DNS de un dominio.** Un error de manipulación puede hacer que su sitio web sea inaccesible o impedir que sus direcciones de correo reciban nuevos mensajes. A continuación explicamos lo que ocurre cuando se editan los servidores DNS para que entienda las consecuencias que ello implica.
>

Al cambiar los servidores DNS de un dominio, también se modifica su configuración DNS. La nueva configuración DNS sustituye a la antigua y se almacena en los nuevos servidores DNS. Técnicamente, el dominio pasa a utilizar una nueva zona DNS.

Tenga en cuenta los siguientes aspectos:

- Al cambiar el servidor DNS (p. ej. El contenido de la antigua configuración DNS externa (DNS externo) no se replica automáticamente en la nueva. Asegúrese de que su nueva zona DNS incluye todos los registros DNS necesarios para que los servicios asociados a su dominio funcionen correctamente (por ejemplo, su sitio web y sus direcciones de correo).

- Si quiere modificar un único elemento de la configuración DNS actual (por ejemplo, un registro DNS), le recomendamos que edite la zona DNS en la siguiente guía: "[Editar una zona DNS de OVHcloud](../web_hosting_como_editar_mi_zona_dns/){.external}".

- Algunas organizaciones, los registros, que gestionan las extensiones de dominios, tienen requisitos especiales relativos a los servidores DNS (cantidad de servidores de nombres, valor de los registros...). En caso de duda, consulte con el registro responsable del dominio.

Asegúrese de que los cambios no harán que su dominio deje de estar accesible. Si no está seguro, póngase en contacto con la persona que le pida que realice los cambios.


### Acceder a la gestión de los servidores DNS de OVHcloud

En primer lugar, conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}, haga clic en `Dominios`{.action} y seleccione el dominio correspondiente. Abra la pestaña `Servidores DNS`{.action}.

Se mostrará una tabla con los servidores DNS actualmente configurados por OVHcloud para el dominio. Cada línea de la tabla contiene un servidor DNS (puede haber varios).

> [!primary]
>
> Cuando se utilizan los servidores DNS de OVHcloud, los números de servidores no guardan relación con el servicio o servicios que utiliza. Sólo la opción [DNS anycast](https://www.ovhcloud.com/es-es/domains/options/dns-anycast/) utiliza servidores DNS específicos que se le atribuyen automáticamente.

![Servidor DNS](images/edit-dns-server-ovh-step1.png){.thumbnail}

### Cambiar los servidores DNS

Si quiere utilizar servidores DNS externos, debe sustituirlos por los servidores DNS de OVHcloud y no añadirlos a ellos.

Haga clic en `Cambiar los servidores DNS`{.action} a la derecha.

En los campos de texto, **sustituya** los valores actuales de los servidores DNS por la información relativa a los nuevos servidores que desee definir. Para añadir más servidores a la lista, haga clic en el botón `+`{.action} situado a la derecha de la última fila de la tabla. Aparecerá una nueva línea, donde deberá completar los campos de texto.

> [!warning]
>
> No mezclar un grupo de servidores DNS con otro.
> Por ejemplo, *dns19.ovh.net* y *ns19.ovh.net* corresponden a un grupo de servidores DNS de OVHcloud, son idénticos y están sincronizados. Si añade servidores DNS externos a OVHcloud (o de un grupo OVHcloud diferente), la resolución DNS se realizará de forma aleatoria entre los servidores DNS de OVHcloud y los servidores DNS externos indicados.

Una vez que haya introducido los datos, haga clic en `Aplicar la configuración`{.action}. El estado de los servidores DNS se actualizará en la tabla, mostrando los cambios que acaba de realizar.

![Servidor DNS](images/edit-dns-server-ovh-step2.png){.thumbnail}

### Restaurar los servidores DNS 

Al hacer clic en el botón `Restaurar los servidores DNS`{.action}, puede restaurar los servidores DNS actuales sustituyéndolos automáticamente por los servidores DNS de OVHcloud de origen. Le recomendamos que solo utilice esta opción si quiere reutilizar los servidores DNS de OVHcloud. 

![Servidor DNS](images/edit-dns-server-ovh-step3.png){.thumbnail}

Una vez que haya realizado los cambios, deberá esperar a que se apliquen. Ocurrirán dos cosas:

- el registro encargado de gestionar la extensión del dominio debe aplicar los cambios realizados desde OVHcloud. Puede consultar el progreso de esta operación en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external} accediendo a la sección `Dominios`{.action} y seleccionando `Operaciones en curso`{.action}.
- Una vez que el registro encargado de gestionar la extensión del dominio haya aplicado los cambios, estos tardan un máximo de 48 horas en propagarse y ser efectivos.

## Más información

[ Modificación de una zona](../web_hosting_como_editar_mi_zona_dns/){.external} DNS de OVHcloud.

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
