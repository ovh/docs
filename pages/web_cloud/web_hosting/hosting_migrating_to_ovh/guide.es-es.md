---
title: "Migrar un sitio web y los servicios asociados a OVHcloud"
excerpt: "Descubra cómo migrar un sitio web, un dominio, una base de datos o un correo a OVHcloud sin interrupción del servicio"
updated: 2024-06-24
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

Esta guía explica las diferentes acciones que debe realizar para migrar su sitio web, sus carpetas, su dominio, su base de datos y sus direcciones de correo electrónico a OVHcloud, sin interrupción del servicio.

> [!warning]
>
La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
> 
> Ponemos a su disposición esta guía para ayudarle a realizar las tareas más habituales. No obstante, si tiene alguna duda, le recomendamos que contacte con un [proveedor especializado](/links/partner). Nosotros no podremos asistirle. Más información en la sección ["Más información"](#go-further) de esta guía.
>

## Requisitos

- Tener acceso a la gestión del dominio de su sitio web (este último también debe existir desde hace más de 60 días).
- Tener acceso a la zona DNS (Domain Name System) activa del dominio.
- Tener acceso a los archivos y a la base de datos de su sitio web en su actual proveedor de hosting.
- Disponer de las claves (usuario, contraseña, servidor) de las direcciones de correo actuales.
- Estar conectado a su [área de cliente de OVHcloud](/links/manager).

## Procedimiento

> [!success]
>
> Las instrucciones de esta guía hacen referencia a varios productos del universo Web Cloud. Le recomendamos que lea todos los pasos que se indican a continuación **antes** para migrar sus servicios.
>

Migrar todo su sitio web y el correo a OVHcloud **sin interrupción del servicio** requiere un procedimiento específico en 10 pasos:

- [Etapa 1: contratar el alojamiento y las direcciones de correo en OVHcloud](#step1)
- [Etapa 2: crear y pre-configurar una zona DNS para su dominio en OVHcloud](#step2)
- [Etapa 3: recuperar una copia de seguridad completa de su sitio web](#step3)
- [Etapa 4: importar la copia de seguridad de su sitio web en su plan de hosting de OVHcloud](#step4)
- [Etapa 5: crear sus direcciones de correo de forma idéntica en OVHcloud](#step5)
- [Etapa 6: Declarar los servidores de correo de OVHcloud en la zona DNS activa de su dominio](#step6)
- [Etapa 7: transferir el contenido de sus antiguas direcciones de correo a sus nuevas direcciones en OVHcloud](#step7)
- [Etapa 8: reconfigurar sus aplicaciones de mensajería](#step8)
- [Etapa 9: sustituir los servidores DNS activos de su dominio por los de OVHcloud](#step9)
- [Etapa 10: transferir su dominio a OVHcloud](#step10)

Siguiendo estos 10 Etapas **en el orden**, no tendrá interrupción del servicio para el acceso a su sitio web y para la recepción de sus nuevos emails.

No obstante, en función del agente registrador, del proveedor de alojamiento o del proveedor de servicios de correo, es posible que corten el acceso a sus antiguos servicios si se da cuenta de que el dominio ya no está configurado por sus infraestructuras.<br>
En ese caso, puede producirse una interrupción del servicio.

En caso de que se produzca dicha interrupción, la guía se construirá de forma que se reduzca al mínimo su duración.

### Etapa 1: contratar el alojamiento y las direcciones de correo en OVHcloud <a name="step1"></a>

Varios [planes de hosting de OVHcloud](/links/web/hosting) contienen una solución de correo electrónico [MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities). Esta solución de correo permite crear direcciones de correo con un espacio de almacenamiento de hasta 5 GB para cada dirección. Elija entre los siguientes planes de hosting en función de la versión PHP, la versión SQL, el número de direcciones de correo que necesite y el tamaño del sitio web que quiere migrar:

- El alojamiento [Personal](/links/web/hosting-personal-offer) con **10 direcciones de correo** "MX Plan"
- El alojamiento [Pro](/links/web/hosting-professional-offer) con **100 direcciones de correo** "MX Plan"
- El alojamiento [Performance](/links/web/hosting-performance-offer) con **1000 direcciones de correo** "MX Plan". Esta oferta se divide en 4 "subproductos".
- El alojamiento [Cloud Web](/links/web/hosting-cloud-web-offer) con **200 direcciones de correo** "MX Plan". Esta oferta la utilizan los desarrolladores de aplicaciones.

Si todavía no es cliente de OVHcloud, haga clic en el botón `Contratar`{.action} de las páginas comerciales anteriores. Siga los pasos del pedido **sin solicitar la transferencia del dominio** (esta acción se realizará en el paso 10 de esta guía).

También puede realizar el pedido desde su [área de cliente de OVHcloud](/links/manager). Una vez conectado, siga estas instrucciones:

- Acceda a la pestaña `Web Cloud`{.action}.
- En la parte superior izquierda de la interfaz, haga clic en el botón `Contratar`{.action} y luego en `Alojamiento`{.action}.
- Siga los pasos del pedido **sin solicitar la transferencia del dominio** (esta acción se realizará en el paso 10 de esta guía).

Una vez validado el pago, se iniciará la instalación del alojamiento. Recibirá un mensaje de correo electrónico en su dirección de correo electrónico de contacto. que contendrá las claves de acceso al espacio de almacenamiento FTP (File Transfert Protocol) de su alojamiento web.

> [!primary]
>
> Además de la solución MX Plan, OVHcloud ofrece otras soluciones de correo. Por ejemplo, puede combinar con direcciones de correo MX Plan direcciones ["Email-Pro"](/links/web/email-pro) y/o cuentas ["Exchange"](/links/web/emails-hosted-exchange).
>

### Etapa 2: crear y preconfigurar una zona DNS para su dominio en OVHcloud <a name="step2"></a>

Si su dominio está alojado en otro proveedor y desea transferirlo a OVHcloud, deberá crear y preconfigurar previamente una zona DNS antes de iniciar la transferencia para evitar una interrupción del servicio.

Si su dominio está alojado en otro proveedor y desea transferirlo a OVHcloud, deberá crear y preconfigurar previamente una zona DNS antes de iniciar la transferencia para evitar una interrupción del servicio.

Una vez creado el alojamiento, conéctese a su [área de cliente de OVHcloud](/links/manager) y cree una zona DNS para su dominio **sin los "www"**. Si lo necesita, consulte nuestra guía sobre la [creación de una zona DNS en OVHcloud](/pages/web_cloud/domains/dns_zone_create).

Una vez creada la zona DNS, acceda a su gestión utilizando la guía "[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

Si no están presentes, introduzca los siguientes datos:

**Ejemplo** (para el nombre de dominio "domain.tld"):

|Dominio|Tipo de registro|Prioridad|Destino|
|---|---|---|---|
|domain.tld.|MX|1|mx1.mail.ovh.net.|
|domain.tld.|MX|5|mx2.mail.ovh.net.|
|domain.tld.|MX|100|mx3.mail.ovh.net.|
|www.domain.tld.|CNAME|-|domain.tld.|
|domain.tld.|A|-|<dirección_IP_de_destino>|

Para conocer la dirección IP de destino de su alojamiento de OVHcloud, consulte nuestra guía que enumera las [direcciones IP de los distintos clusters de alojamiento compartido](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).

**Ejemplo**: Para el nombre de dominio "domain.tld", la representación de las entradas de su dominio debe ser la siguiente:

![hosting](images/dashboard-mx-a-cname.png){.thumbnail}

> [!success]
>
> Observe los dos valores de destino con el tipo de registro "NS". Estos valores, de tipo `dnsXX.ovh.net` y `nsXX.ovh.net` (o `dns200.anycast.me` y `ns200.anycast.me`), corresponden a los servidores DNS asociados a esta zona DNS para su dominio. Se utilizarán en la [etapa 9](#step9) de esta guía.
>

### Etapa 3: obtener una copia de seguridad completa del sitio web <a name="step3"></a>

Descargue el contenido del espacio de almacenamiento FTP de su alojamiento actual, así como una copia de seguridad de su base de datos si el sitio web utiliza una.

Estas operaciones se realizan exclusivamente con su proveedor de hosting actual. Contacte con él si tiene dificultades para obtener una copia de seguridad completa de su sitio web.

### Etapa 4: importar la copia de seguridad de su sitio web en su plan de hosting de OVHcloud <a name="step4"></a>

Para importar la copia de seguridad del espacio de almacenamiento FTP de su anterior proveedor, [conéctese al espacio de almacenamiento FTP de su alojamiento de OVHcloud](/pages/web_cloud/web_hosting/ftp_connection) y envíe la copia de seguridad a la carpeta raíz "www" (o a otra carpeta raíz que haya creado previamente).

Le recomendamos que utilice el programa [FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide) para transferir su copia de seguridad FTP a su alojamiento.

Si el archivo de backup está comprimido (zip), descomprimirlo en una carpeta vacía en su ordenador antes de transferir sus archivos al alojamiento de OVHcloud.

Para la copia de seguridad de su base de datos, [cree una nueva base de datos](/pages/web_cloud/web_hosting/sql_create_database) y luego [importe la copia de seguridad en su nueva base de datos](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

> [!primary]
>
> OVHcloud ofrece servidores de bases de datos Web Cloud Databases. Si desea utilizar esta solución en su sitio web, consulte toda la documentación relativa a este producto en nuestra página dedicada </products/web-cloud-clouddb>.
>

Conecte a continuación su base de datos de OVHcloud con el archivo de configuración de su sitio web, presente en el espacio de almacenamiento FTP de su alojamiento de OVHcloud.
Para ello, sustituya los datos de conexión de su antigua base de datos por los de su nueva base de datos de OVHcloud. Esta información se encuentra en el archivo de configuración/conexión a la base de datos del sitio web.

> [!success]
>
> Para asociar una nueva base de datos si utiliza un Content Management System (CMS) como WordPress, Joomla, Drupal o PrestaShop, consulte la información relativa a sus archivos de configuración desde **el etapa 2** de la guía "[Modificación de la contraseña de una base de datos](/pages/web_cloud/web_hosting/sql_change_password)".
>

Declare/autorice su dominio externo en su alojamiento web de OVHcloud en la guía "[gestión de multisitios de un alojamiento web de OVHcloud](/pages/web_cloud/web_hosting/multisites_configure_multisite)". Introduzca el nombre de la carpeta raíz que haya elegido al comienzo del[etapa 4](#step4). Le recordamos que esta es la carpeta en la que ha guardado sus archivos en su espacio de almacenamiento FTP.

> [!warning]
>
> **La realización de esta operación es crucial**, su sitio web no aparecerá hasta que haya introducido los elementos correctos. Respeta especialmente la sintaxis del registro DNS "TXT".
>
> Como su dominio todavía no está en OVHcloud, deberá añadir un registro DNS de tipo "TXT" con el "token OVHcontrol" y cambiar el puntero de tipo "A" del dominio. Esto se realiza directamente en la zona DNS activa de su dominio con su actual proveedor.
>
> Haga lo mismo para su subdominio en "www".
>
> Contacte con el actual gestor de su zona DNS si es necesario para realizar la operación.
>

**Ejemplo**: para el dominio "domain.tld":

![hosting](images/dashboard-a-txt-cname.png){.thumbnail}

**La modificación de los registros DNS "A", "CNAME" y "TXT" debe realizarse ante el actual proveedor DNS de su dominio y necesita un tiempo de propagación de 4 a 24 horas máximo antes de ser plenamente efectivo.**

Tras la propagación DNS, el sitio web que se mostrará con su dominio será el alojado en OVHcloud.

### Etapa 5: crear sus direcciones de correo de forma idéntica en OVHcloud <a name="step5"></a>

Utilice nuestra guía sobre la [creación de direcciones de correo electrónico MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_creation).

Si ha optado por una solución Email Pro o Exchange, consulte nuestra documentación sobre el asunto para crear sus direcciones de correo:

- Para [Email-Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config)
- Para [Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)

### Etapa 6: Declarar los servidores de correo de OVHcloud en la zona DNS activa de su dominio <a name="step6"></a>

En primer lugar, debe cambiar los servidores de correo MX de la zona DNS activa del dominio.
Recibirá los nuevos mensajes de correo en las nuevas direcciones de correo de OVHcloud.

Sustituya (sin dejar las antiguas entradas) sus antiguas entradas "MX" en su proveedor por las tres entradas siguientes:

- Su nombre de dominio (sin los "www") hacia el destino de tipo "MX": "mx1.mail.ovh.net. ".
- Su nombre de dominio (sin los "www") hacia el destino de tipo "MX": "mx2.mail.ovh.net. ".
- Su nombre de dominio (sin los "www") hacia el destino de tipo "MX": "mx3.mail.ovh.net. ".

El cambio de los servidores "MX" se efectúa ante el actual proveedor DNS de su dominio y tarda un tiempo de **propagación de 4 a 24 horas** máximo antes de ser plenamente efectivo.<br>
Esto significa que, durante la propagación DNS de la modificación, el correo se recibirá cada vez menos en las antiguas direcciones de correo y cada vez más en las nuevas direcciones de correo de OVHcloud.<br>.
Una vez finalizada la propagación, se le comunicarán todos los nuevos mensajes de correo electrónico recibidos en las direcciones de correo de OVHcloud.

Le recomendamos que realice el cambio de las entradas "MX" **antes** de migrar el contenido de sus antiguas direcciones de correo.
Este método permite evitar la migración de los pocos mensajes de correo recibidos a sus antiguas direcciones de correo electrónico durante la propagación de DNS.

### Etapa 7: transferir el contenido de sus antiguas direcciones de correo a sus nuevas direcciones en OVHcloud <a name="step7"></a>

Tras la propagación DNS , todos los nuevos mensajes de correo se reciben en las nuevas direcciones de correo. Sin embargo, los mensajes de correo antiguos siempre se guardan en el servidor de correo antiguo.

Existen dos opciones para migrar el contenido de sus antiguas direcciones de correo.

**Opción 1**: utilice nuestra herramienta [OVH Mail Migrator (OMM)](https://omm.ovh.net/) {.external} que permite copiar el contenido de las direcciones de correo electrónico que tuviera con su anterior proveedor a las creadas en OVHcloud. Para más información, consulte nuestra guía [Migrar cuentas de correo electrónico a través de OVH Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm).

Le recomendamos que no utilice el `Tipo de servidor`{.action} **POP** en la sección `Cuenta de origen`{.action}. Este protocolo elimina los mensajes de correo de su antiguo servidor para enviarlos al servidor de destino de OVHcloud. En ese caso, no podrá comparar el contenido de la antigua dirección de correo con el de la nueva dirección.

En la sección `Cuenta de destino`{.action}, introduzca únicamente la dirección de correo electrónico de OVHcloud correspondiente y su contraseña asociada, dejando el `Tipo de servidor`{.action} como `Hosted by OVH (Autodetect)`{.action}.

Una vez completada la migración, conéctese a su dirección de correo electrónico de OVHcloud utilizando el [webmail OVHcloud](/links/web/email) para comprobar que todos sus mensajes de correo estén presentes en la nueva cuenta.

Repita la operación para todas sus cuentas de correo.

> [!primary]
>
Para ello, es necesario tener las claves de acceso de todas sus antiguas cuentas de correo y el nombre del servidor de correo de su anterior proveedor.
>
> Si sus direcciones de correo estuvieran configuradas en POP sin conservar copias de los mensajes en su antiguo servidor de correo, o si tuviera los emails registrados "localmente" en sus dispositivos, solo podrá realizar la **opción 2**.
>

**Opción 2**: realice una copia de seguridad del contenido de sus direcciones de correo mediante un cliente de correo (Outlook, Mail para Mac...), reconfigure su cliente de correo e importe la copia de seguridad en su nueva dirección de correo de OVHcloud.

### Etapa 8: reconfigurar su cliente de correo <a name="step8"></a>

Una vez que haya migrado sus antiguas direcciones de correo a OVHcloud, reconfigure su cliente de correo utilizando todas nuestras guías.

#### Para las cuentas de correo "MX Plan": 

Todos los parámetros de configuración se encuentran en la guía "[Información general sobre los MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities#2-utilizar-el-programa-que-elija)". También encontrará enlaces a las guías de configuración personalizadas para los principales programas de mensajería.

#### Para las cuentas "Email-Pro":

Consulte todas nuestras guías de configuración en `Configuración en el ordenador` y `Configuración en smartphone` de [nuestra documentación sobre la solución Email-Pro](/products/web-cloud-email-collaborative-solutions-email-pro).

#### Para las cuentas de correo "Exchange":

Consulte todas nuestras guías de ayuda a la configuración en `Configuración Exchange en ordenador` y `Configuración Exchange en smartphone` de [nuestra documentación sobre Exchange](/products/web-cloud-email-collaborative-solutions-microsoft-exchange).

### Etapa 9: sustituir los servidores DNS activos de su dominio por los de OVHcloud <a name="step9"></a>

La zona DNS preconfigurada en el [etapa 2](#step2) aún no se aplica a su dominio. Actualmente, su dominio sigue utilizando los servidores DNS de su proveedor de origen.

Sustituya los servidores DNS actuales (del registrador de origen) por los dos servidores DNS declarados en la zona DNS de OVHcloud (de tipo `dnsXX.ovh.net` y `nsXX.ovh.net` o `dns200.anycast.me` y `ns200.anycast.me`). Esta operación se realiza en la interfaz de gestión del registrador de origen.

> [!warning]
>
> El cambio de los servidores DNS debe realizarse desde el actual agente registrador del dominio y tarda entre **propagación de 24 a 48 horas**.
>

### Etapa 10: transferir su dominio a OVHcloud <a name="step10"></a>

Una vez completada la propagación DNS, compruebe que todo su sitio web esté operativo. Navegue por su sitio web para comprobar que todas las páginas se muestran correctamente y que no se devuelve ningún error 404. Compruebe también el envío y la recepción de los emails desde sus direcciones de correo.

Si todo está en orden, desbloquee su dominio y recupere su "código de transferencia", "EPP" o "AuthCode" desde su actual agente registrador.

Transfiera su dominio con ayuda de nuestra guía sobre [transferencia de un dominio a OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain).

Una vez que haya realizado la transferencia de los datos y servicios, solo tendrá que dar de baja los antiguos servicios que haya contratado con su(s) antiguo(s) proveedor(s).

### Conclusión

Una vez que haya realizado los diez pasos anteriores, podrá migrar a OVHcloud la totalidad de su sitio web, sin interrupción del servicio.

## Más información <a name="go-further"></a>

[Información general sobre los mensajes de correo en alojamiento compartido](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).

[Información general sobre los servidores DNS](/pages/web_cloud/domains/dns_server_general_information).

[Crear una dirección de correo en alojamiento compartido](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_creation).

[Importar una base de datos MySQL](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

[Gestión de una base de datos desde un alojamiento compartido](/pages/web_cloud/web_hosting/sql_create_database).

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).