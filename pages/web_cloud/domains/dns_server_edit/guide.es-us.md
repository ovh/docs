---
title: 'Cambiar los servidores DNS de un dominio en OVHcloud'
excerpt: 'Descubra cómo cambiar los servidores DNS de un dominio registrado en OVHcloud'
updated: 2024-09-16
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

## Objetivo

La sigla DNS, que significa **D**omain **N**ame **S**ystem, es un conjunto de elementos (servidores DNS, zonas DNS, etc.) que permiten hacer coincidir un dominio con una dirección IP.

Para más información, consulte nuestras guías "[Todo sobre los servidores DNS](/pages/web_cloud/domains/dns_server_general_information)" y "[Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information)".

**Descubra cómo cambiar los servidores DNS de un dominio en OVHcloud.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Requisitos

- Tener un [dominio](/links/web/domains) registrado en OVHcloud.
- Disponer de [permisos adecuados para gestionar](/pages/account_and_service_management/account_information/managing_contacts) el nombre de dominio desde el [área de cliente de OVHcloud](/links/manager){.external}.
- Estar conectado a su [área de cliente de OVHcloud](/links/manager){.external}.

> [!primary]
>
> Un **registrar** es una organización autorizada a vender dominios. OVHcloud forma parte de estos **registrars**.
>
> Si su dominio no está registrado con OVHcloud, deberá modificar los servidores DNS en el **registrar** en el que esté registrado su dominio.
>

## Procedimiento

> [!warning]
>
> **Tenga cuidado al modificar los servidores DNS de un dominio.** Un error de manipulación puede inhabilitar el acceso al sitio web o impedir que las direcciones de correo electrónico reciban nuevos mensajes de correo electrónico. A continuación explicamos lo que ocurre cuando se cambia la contraseña para que entienda las consecuencias que ello implica.
>

Al modificar los servidores DNS de un dominio, también se modifica su configuración DNS. La nueva configuración DNS sustituye a la antigua y se almacena en los servidores DNS recién definidos. Técnicamente, el dominio utiliza una nueva zona DNS.

Sin embargo, es importante tener en cuenta que:

- Al cambiar de servidor DNS (p.ej. DNS externo por DNS de OVHcloud), el contenido de la antigua configuración / zona DNS no se replica automáticamente en la nueva. Asegúrese de que la nueva zona DNS contiene todos los registros DNS necesarios para que los servicios asociados al dominio funcionen correctamente (por ejemplo, el sitio web y las direcciones de correo electrónico).

- Si quiere modificar, no los servidores DNS, sino uno o varios registros de su configuración / zona DNS actual, consulte nuestra guía: "[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

- Algunas organizaciones, los registros, que gestionan las extensiones de dominios, tienen requisitos particulares relativos a los servidores DNS (cantidad de servidores de nombres, valor de los registros, etc.). En caso de duda, consulte con el registro responsable del dominio.

Asegúrese de que los cambios no inhabilitarán el dominio. Si no está seguro, póngase en contacto con la persona que le pide que realice los cambios.

### Acceder a la gestión de los servidores DNS de OVHcloud

Conéctese a su [área de cliente de OVHcloud](/links/manager){.external} y acceda a la sección `Web Cloud`{.action} de la página. En la columna izquierda, haga clic en `Dominios`{.action} y seleccione el dominio correspondiente. Por último, abra la pestaña Servidores DNS`{.action}.

Se mostrará una tabla con los servidores DNS actualmente definidos por OVHcloud para su dominio. Es posible mostrar varios servidores DNS, cada uno con su propia fila en la tabla.

> [!primary]
>
> Al utilizar los servidores DNS de OVHcloud, los números que aparecen en los nombres de los servidores no tienen relación con los servicios que utiliza. Solo la opción [DNS anycast](/links/web/domains-options) utiliza servidores DNS específicos que se le asignan automáticamente. 

![dns-server](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/tab-ca.png){.thumbnail}

### Cambiar los servidores DNS

Si deseas utilizar servidores DNS externos, debes sustituir los servidores DNS de OVHcloud por estos servidores DNS externos, y no sumar ambos.

Haga clic en `Cambiar los servidores DNS`{.action} a la derecha.

En los formularios de datos, **sustituya** los valores actuales de los servidores DNS por la información relativa a los nuevos servidores DNS que quiera definir. Para añadir más servidores a la lista actual, haga clic en el botón `+`{.action} situado a la derecha de la última fila de la tabla. En la tabla se mostrará una fila adicional que podrá completar.

> [!warning]
>
> No mezcle un grupo de servidores DNS con otro. 
>
> Por ejemplo, *dnsXX.ovh.ca* y *nsXX.ovh.ca* corresponden a un grupo de servidores DNS de OVHcloud, van de la mano y están sincronizados. Si añade servidores DNS externos a OVHcloud (o a un grupo diferente de OVHcloud), la resolución DNS se realizará de forma aleatoria entre los servidores DNS de OVHcloud y los servidores DNS externos que introduzca.
>
> En OVHcloud, los grupos de servidores DNS pueden identificarse mediante el número que figura en los nombres de los servidores. Dos servidores DNS de OVHcloud forman parte de un mismo grupo de servidores desde el momento en que comparten el mismo número. Por ejemplo, *dnsXX.ovh.ca* y *nsXX.ovh.ca*.
>

Una vez que haya introducido los datos, haga clic en `Aplicar la configuración`{.action}. Los estados de los servidores DNS se actualizarán en la tabla mostrando la nueva información que acaba de proporcionar.

![dns-server](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/edit-dns-servers-ca.png){.thumbnail}

> [!success]
>
> La modificación de los servidores DNS asociados a un dominio conlleva un plazo de propagación de **24** a **48** horas máximo para que esta sea efectiva.
>

#### Caso particular: Restaurar los servidores DNS 

El botón `Restaurar los servidores DNS`{.action} permite restaurar los servidores DNS actuales sustituyéndolos automáticamente por los servidores DNS de OVHcloud de origen. Utilice esta opción **únicamente** si quiere reutilizar los servidores DNS de OVHcloud (y la zona DNS de OVHcloud asociada a sus servidores DNS). 

![dns-server](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/reset-the-dns-servers.png){.thumbnail}

Una vez realizados los cambios necesarios, debe esperar a que los cambios surtan efecto. Hay que tener en cuenta dos períodos sucesivos:

- el *registre* que gestiona la extensión del dominio (por ejemplo, el registro de extensiones en *.es*) debe aplicar los cambios realizados por OVHcloud. Puede consultar el progreso en el [área de cliente de OVHcloud](/links/manager){.external}. Para ello, acceda a la sección `Web Cloud`{.action}, acceda a la sección `Dominios`{.action} en la columna de la izquierda y haga clic en `Operaciones en curso`{.action}.
- Una vez que la organización que gestiona la extensión del dominio haya aplicado el cambio, deberá esperar un máximo de **48 horas** para que los cambios que haya realizado se propaguen por completo.

## Más información

[Todo sobre los servidores DNS](/pages/web_cloud/domains/dns_server_general_information)

[Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records)

[Modificación de una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).