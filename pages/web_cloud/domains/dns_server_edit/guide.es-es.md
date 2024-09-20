---
title: "Modificar los servidores DNS de un dominio de OVHcloud"
excerpt: "Descubra cómo modificar los servidores DNS de un dominio registrado en OVHcloud"
updated: 2024-09-16
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

La sigla **DNS** (**D**omain **N**ame **S**ystem) es un conjunto de elementos (servidores DNS, zonas DNS, etc.) que permite asociar un dominio a una dirección IP.

Para más información, consulte nuestras guías "[Todo sobre los servidores DNS](/pages/web_cloud/domains/dns_server_general_information)" y "[Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information)".

**Esta guía explica cómo cambiar los servidores DNS de un dominio en 3 pasos.**

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Requisitos

- Tener un [dominio](/links/web/domains) registrado en OVHcloud.
- Disponer de los permisos necesarios [para gestionar](/pages/account_and_service_management/account_information/managing_contacts) para el dominio desde el [área de cliente de OVHcloud](/links/manager).
- Estar conectado a su [área de cliente de OVHcloud](/links/manager).

> [!primary]
>
> Un **registrar** es una organización autorizada a vender dominios. OVHcloud forma parte de estos **registrars**.
>
> Si su dominio no está registrado con OVHcloud, deberá modificar los servidores DNS en el **registrar** en el que esté registrado su dominio.
>

## Procedimiento

> [!alert]
>
> **Tenga cuidado al modificar los servidores DNS de un dominio.**
>
> Un error de manipulación puede inhabilitar el acceso al sitio web o impedir que las direcciones de correo electrónico reciban nuevos mensajes de correo electrónico. A continuación explicamos lo que ocurre cuando se cambia la contraseña para que entienda las consecuencias que ello implica.

Al modificar los servidores DNS de un dominio, también se modifica su configuración DNS. La nueva configuración DNS sustituye a la antigua y se almacena en los servidores DNS recién definidos. Técnicamente, el dominio utiliza una nueva zona DNS.

Sin embargo, es importante tener en cuenta lo siguiente:

- Al cambiar de servidor DNS (por ejemplo, un DNS externo por un DNS de OVHcloud), el contenido de la antigua configuración o zona DNS no se replica automáticamente en la nueva. Asegúrese de que la nueva zona DNS contiene todos los registros DNS necesarios para que los servicios asociados al dominio funcionen correctamente (por ejemplo, el sitio web y las direcciones de correo electrónico).
- Si no desea modificar los servidores DNS, pero sí uno o varios registros de su configuración / zona DNS actual, consulte nuestra guía: "[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".
- Algunas organizaciones, los registros, que gestionan las extensiones de dominios, tienen requisitos particulares relativos a los servidores DNS (cantidad de servidores de nombres, valor de los registros, etc.). En caso de duda, consulte con el registro responsable del dominio.

### Etapa 1 - Acceder a la gestión de los servidores DNS de OVHcloud <a name="access-dns-servers"></a>

Para ello, lleve a cabo las siguientes acciones:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager).
2. En la línea situada en la parte superior del área de cliente, haga clic en la pestaña `Web Cloud`{.action}.
3. En la columna izquierda, haga clic en el menú desplegable `Dominios`{.action}.
4. Seleccione el dominio correspondiente.
5. A continuación, abra la pestaña `Servidores DNS`{.action}.

Se mostrará una tabla con los servidores DNS actualmente definidos por OVHcloud para su dominio. Es posible mostrar varios servidores DNS, cada uno con su propia fila en la tabla.

> [!primary]
>
> Al utilizar los servidores DNS de OVHcloud, los números que aparecen en los nombres de los servidores no tienen relación con los servicios que utiliza. Solo la opción [DNS anycast](/links/web/domains-options) utiliza servidores DNS específicos (`ns200.anycast.me` y `dns200.anycast.me`). Una vez contratados, se le asignarán automáticamente.

![DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/tab.png){.thumbnail}

### Etapa 2 - Modificar los servidores DNS <a name="modify-dns-servers"></a>

> [!primary]
>
> Todas las funcionalidades descritas a continuación se realizan desde la pestaña `Servidores DNS`{.action} mencionada en el [etapa 1](#access-dns-servers) de esta guía.
>

Para modificar los servidores DNS, haga clic en el botón `Cambiar los servidores DNS`{.action}, situado a la derecha de la tabla "Servidores DNS". Dependiendo de la resolución de la pantalla, el botón puede estar debajo de la tabla.

Aparecerá una nueva página con tres opciones de edición disponibles.

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers.png){.thumbnail}

#### Opción 1 - Utilizar los DNS por defecto de OVHcloud

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-1.png){.thumbnail}

Esta opción permite aplicar automáticamente la configuración de la zona DNS de OVHcloud existente para su dominio. Asegúrese previamente de que OVHcloud dispone de una zona DNS para su dominio.

> [!primary]
>
> Si lo necesita, consulte las guías "[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)" y/o "[Crear una zona DNS de OVHcloud para un dominio](/pages/web_cloud/domains/dns_zone_create)" para comprobar si existe una zona DNS de OVHcloud para su dominio.

Para utilizar los servidores DNS por defecto de OVHcloud, haga clic en `Aplicar la configuración`{.action}. Se abrirá la siguiente ventana:

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-1-apply-configuration.png){.thumbnail}

Este cuadro de diálogo resume el nombre de los dos servidores DNS que se aplicarán al dominio. Deben tener una de las 3 formas siguientes:

- `nsXX.ovh.net` y `dnsXX.ovh.net` o, `nsXXX.ovh.net` y `dnsXXX.ovh.net` (donde cada `X` representa un número comprendido entre **0** y **9**)
- `nsXX.ovh.ca` y `dnsXX.ovh.ca` o, `nsXXX.ovh.ca` y `dnsXXX.ovh.ca` (donde cada `X` representa un número comprendido entre **0** y **9**)
- `ns200.anycast.me` y `dns200.anycast.me` (si ha contratado la opción [DNS anycast](/links/web/domains-options))

Si coinciden con los que desea aplicar, haga clic en `Aplicar`{.action}.

Así, los 2 servidores DNS declarados (en los registros de tipo NS de la zona DNS de OVHcloud) se utilizarán para su dominio.

Los antiguos servidores DNS declarados y la configuración DNS que aplicaban se desactivarán para el dominio. La zona DNS de OVHcloud se convertirá en la zona DNS activa de su dominio.

#### Opción 2 - Utilizar mis propios DNS

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-2.png){.thumbnail}

Esta opción permite declarar los servidores DNS de una zona DNS no gestionada desde el área de cliente de OVHcloud.

Por ejemplo:

- los servidores DNS externos proporcionados por uno de nuestros competidores;
- sus propios servidores DNS si aloja su zona DNS en uno de sus servidores. Estos servidores DNS también pueden estar alojados en una infraestructura de OVHcloud (servidor dedicado, VPS, etc.).

> [!success]
>
> Antes de añadir un servidor DNS, asegúrese de que este último **está disponible** y contiene una zona DNS para el dominio. Asegúrese también de que esta zona DNS contiene todos los registros de tipo "NS" a todos los servidores DNS que va a declarar para su nombre de dominio.
>
> Por ejemplo, si desea declarar los servidores DNS *ns1.dns-server.tld*, *ns2.dns-server.tld* y *ns3.dns-server.tld* para su dominio. A continuación, compruebe que los tres registros de tipo "NS" siguientes están presentes en las 3 zonas DNS alojadas en los 3 servidores DNS:
>
> - "Your own domain (or just an @)" IN NS ns1.dns-server.tld.
> - "Your own domain (or just an @)" IN NS ns2.dns-server.tld.
> - "Your own domain (or just an @)" IN NS ns3.dns-server.tld.
>

Para introducir uno de sus propios servidores DNS, complete los dos formularios que se incluyen en el recuadro:

- `Servidor DNS`: nombre del servidor DNS que debe aplicarse a su dominio.
- `IP asociada (opcional)`: dirección IP (IPv4 o IPv6) del servidor DNS indicado. Solo puede introducir **una dirección IP** en este formulario.

> [!warning]
>
> Cada cuadro de entrada (que se muestra en la captura de pantalla anterior) sólo puede contener **un** servidor DNS a la vez. Un servidor DNS corresponde a un recuadro.
>
> Además, una nota informativa sobre fondo azul, situada encima del primer recuadro, indica el intervalo de servidores DNS que puede declarar para su dominio. Estos valores varían según la extensión del dominio.

Una vez introducidos los datos, haga clic en el botón `+`{.action} situado a la derecha de los dos formularios. Permite añadir el servidor DNS y muestra una nueva barra de entrada debajo del anterior.

Repita la operación tantas veces como desee añadir servidores DNS, dentro de los límites indicados en la nota informativa.
Haga clic en el botón `+`{.action} para cada servidor DNS con el fin de validar la entrada y la adición.

Una vez que haya añadido todos sus propios servidores DNS, haga clic en `Aplicar la configuración`{.action}. Se abrirá la siguiente ventana:

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-2-apply-configuration.png){.thumbnail}

Este cuadro de diálogo resume los nombres de los servidores DNS que se aplicarán al dominio.
Si coinciden con los que desea aplicar, haga clic en `Aplicar`{.action}.

Los antiguos servidores DNS declarados y la configuración DNS que aplicaban se desactivarán para el dominio. La zona DNS declarada en sus propios servidores DNS se convertirá en la zona DNS activa para su dominio.

#### Opción 3 - Utilizar los DNS de OVHcloud y mis propios DNS

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-3.png){.thumbnail}

Esta opción permite combinar el uso de sus propios servidores DNS conservando los servidores DNS de OVHcloud activos para su dominio. Esta combinación permite, por ejemplo, garantizar un mayor acceso a los distintos servicios asociados al dominio (alojamiento web, servidores de correo, etc.). Si un grupo de servidores DNS deja de estar disponible durante unos minutos, los otros servidores DNS declarados pueden tomar el relevo.

No obstante, asegúrese de que las configuraciones de las zonas DNS de los distintos servidores DNS afectados estén configuradas correctamente para que funcionen todas juntas. La mayoría de las veces, todos los servidores DNS estarán operativos. Todos ellos podrán responder a las peticiones que se les hagan aleatoriamente a través de la red DNS.

> [!warning]
>
> 1. Tenga cuidado si decide utilizar esta última opción. Para ello, necesita conocimientos avanzados sobre el funcionamiento de la red DNS, los servidores DNS y las zonas DNS.<br>
> 2. Debe desactivar la opción [DNSSEC](/pages/web_cloud/domains/dns_dnssec) para combinar el uso de sus propios servidores DNS con los DNS de OVHcloud.<br>
> 3. No mezcle un grupo de servidores DNS de OVHcloud con otro grupo de servidores DNS de OVHcloud. Por ejemplo, *dns19.ovh.net* y *ns19.ovh.net* corresponden a un grupo de servidores DNS de OVHcloud, van de la mano y están sincronizados. En OVHcloud, los grupos de servidores DNS se identifican mediante el número que figura en los nombres de los servidores. Dos servidores DNS de OVHcloud forman parte de un mismo grupo de servidores DNS desde el momento en que comparten el mismo número. Por ejemplo, *dns19.ovh.net* y *ns19.ovh.net*.

> [!success]
>
> Antes de añadir un servidor DNS, asegúrese de que este último **está disponible** y contiene una zona DNS para el dominio. Asegúrese también de que esta zona DNS contiene todos los registros de tipo "NS" a todos los servidores DNS que va a declarar para su nombre de dominio.
>
> Por ejemplo, si quiere declarar los servidores DNS *ns1.dns-server.tld*, *dnsXX.ovh.net* y *nsXX.ovh.net* para su dominio. A continuación, compruebe que los tres registros de tipo "NS" siguientes están presentes en las 3 zonas DNS alojadas en los 3 servidores DNS:
>
> - "Your own domain (or just an @)" IN NS ns1.dns-server.tld.
> - "Your own domain (or just an @)" IN NS dnsXX.ovh.net.
> - "Your own domain (or just an @)" IN NS nsXX.ovh.net.
>

Para introducir uno de sus propios servidores DNS, complete los dos formularios que se incluyen en el recuadro:

- `Servidor DNS`: nombre del servidor DNS que debe aplicarse a su dominio.
- `IP asociada (opcional)`: dirección IP (IPv4 o IPv6) del servidor DNS indicado. Solo puede introducir **una dirección IP** en este formulario.

> [!warning]
>
> Cada cuadro de entrada (que se muestra en la captura de pantalla anterior) sólo puede contener **un** servidor DNS a la vez. Un servidor DNS corresponde a un recuadro.
>
> Además, una nota informativa sobre fondo azul, situada encima del primer recuadro, indica el intervalo de servidores DNS que puede declarar para su dominio. Estos valores varían según la extensión del dominio.

Una vez introducidos los datos, haga clic en el botón `+`{.action} situado a la derecha de los dos formularios. Permite añadir el servidor DNS y muestra una nueva barra de entrada debajo del anterior.

Repita la operación tantas veces como desee añadir servidores DNS, dentro de los límites indicados en la nota informativa.
Haga clic en el botón `+`{.action} para cada servidor DNS con el fin de validar la entrada y la adición.

Una vez que haya añadido todos sus propios servidores DNS, haga clic en `Aplicar la configuración`{.action}. Se abrirá la siguiente ventana:

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-3-apply-configuration.png){.thumbnail}

Este cuadro de diálogo resume los nombres de los servidores DNS que se aplicarán al dominio.
Si coinciden con los que desea aplicar, haga clic en `Aplicar`{.action}.

Los antiguos servidores DNS declarados y la configuración DNS que aplicaban se desactivarán para el dominio. Las zonas DNS de sus propios servidores DNS y de los servidores DNS de OVHcloud se convertirán en las zonas DNS activas para su dominio.

### Etapa 3 - Registro de la modificación de los servidores DNS

Una vez realizados los cambios, deberá tener en cuenta dos períodos de tiempo:

- El *registro* que gestione su extensión de dominio (por ejemplo, el registro de extensiones en *.fr*) debe ser informado de la modificación DNS efectuada por OVHcloud. Siga el progreso en su [área de cliente de OVHcloud](/links/manager). Para ello, acceda a la sección `Web Cloud`{.action}, acceda a la sección `Dominios`{.action} en la columna de la izquierda y haga clic en `Operaciones en curso`{.action}.
- Una vez que haya actualizado la información del *registro*, espere un máximo de **48 horas** para que los cambios realizados se propaguen y sean efectivos.

## Más información

[Todo sobre los servidores DNS](/pages/web_cloud/domains/dns_server_general_information)

[Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records)

[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).