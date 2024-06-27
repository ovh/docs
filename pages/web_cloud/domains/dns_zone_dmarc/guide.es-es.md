---
title: "Mejorar la seguridad del correo electrónico mediante el registro DMARC"
excerpt: "Descubra cómo funciona DMARC y cómo implementarlo para su servicio de correo"
updated: 2023-12-13
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

El registro **D**omain-based **M**essage **A**uthentication, **R**eporting, and **C**onformance (DMARC) es un mecanismo de seguridad del correo electrónico. Se basa en los resultados de las comprobaciones [SPF](/pages/web_cloud/domains/dns_zone_spf) y [DKIM](/pages/web_cloud/domains/dns_zone_dkim).

**Esta guía explica cómo funciona DMARC y cómo implementarlo para su servicio de correo.**

> [!warning]
>
> OVHcloud ofrece servicios cuya configuración, gestión y responsabilidad recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
> 
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner). Nosotros no podremos asistirle al respecto. Para más información, consulte la sección [«Más información»](#go-further) de este tutorial.
>

## Requisitos

- Tener acceso a la gestión del dominio (asociado a la solución de correo) desde el [área de cliente de OVHcloud](/links/manager).
- Uno de los mecanismos de autenticación, [SPF](/pages/web_cloud/domains/dns_zone_spf) y/o [DKIM](/pages/web_cloud/domains/dns_zone_dkim), debe configurarse en la zona DNS del dominio de la solución de correo.

## Procedimiento

El DMARC permite al propietario de un dominio gestionar la seguridad de los mensajes de correo electrónico enviados con su nombre de dominio. Su objetivo es:

- Declarar al servidor destinatario las acciones que deben llevarse a cabo en caso de fallo de los mecanismos de autenticación SPF y/o DKIM.
- Mejorar el control del uso del dominio y detectar los intentos de usurpación mediante los informes enviados en caso de fallo de autenticación del correo. Además, también mejora la seguridad al crear el enlace entre los protocolos SPF y DKIM.

El registro DMARC contiene información sobre la política que debe aplicarse a los mensajes de correo electrónico maliciosos que intentan usurpar su dominio.<br>
DMARC consulta los mecanismos de autenticación [SPF](/pages/web_cloud/domains/dns_zone_spf) y [DKIM](/pages/web_cloud/domains/dns_zone_dkim) para comprobar los mensajes de correo electrónico entrantes.<br>
El resultado de estas comprobaciones SPF y/o DKIM es traducido por DMARC como «medidas a tomar» cuando un correo electrónico falla en las comprobaciones. Estas medidas pueden consistir en poner en quarantine o rechazar los mensajes de correo electrónico afectados.

### ¿Cómo funciona DMARC? <a name="how-dmarc-works"></a>

A continuación ofrecemos un ejemplo de cómo funciona el DMARC.

Cuando **contact@mydomain.ovh** envía un mensaje de correo electrónico a **recipient@otherdomain.ovh**, el servidor receptor consulta la zona DNS del dominio remitente **mydomain.ovh** para ver las instrucciones del registro DMARC.

El registro DMARC comunica la política que debe adoptarse en función del resultado de las pruebas SPF y DKIM. También puede introducir una o varias direcciones de correo electrónico (representadas en nuestro ejemplo por la dirección **report@mydomain.ovh**) que sirven para recibir los informes de fallos de correo enviados desde el dominio **mydomain.ovh**.

Tras leer las instrucciones del registro DMARC del dominio **mydomain.ovh** por el servidor de recepción de **«otherdomain.ovh»**, los mensajes de correo se enviarán a la dirección **recipient@otherdomain.ovh**, o bien se marcarán como «SPAM» o se rechazarán.

![dmarc](/pages/assets/schemas/emails/dns-dmarc-diagram.png){.thumbnail}

### Configurar el DMARC

Existen dos formas de configurar el DMARC en la zona DNS de OVHcloud:

- Por [la herramienta de configuración DMARC](#dmarc-record). Este registro permite una configuración simplificada del DMARC. Solo tendrá que rellenar los campos con los parámetros DMARC necesarios para su configuración. Los servidores DNS leen este registro como registro TXT.
- Mediante un [registro TXT](#txt-record). Este registro estándar puede utilizarse para configurar el DMARC desde el área de cliente de OVHcloud. Con él, podrá integrar todas las etiquetas de configuración DMARC, incluidas las que faltan a través del registro DMARC de OVHcloud. Sin embargo, debe respetar las reglas de sintaxis del protocolo DMARC.

#### Registro DMARC <a name="dmarc-record"></a>

Puede añadir el registro DMARC a su zona DNS desde el área de cliente de OVHcloud. Para ello, conéctese al [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}. En la columna izquierda, seleccione el dominio en la sección `Nombres de dominio`{.action} y abra la pestaña `Zona DNS`{.action} para acceder a su zona DNS.

Una vez que haya visualizado la zona DNS, haga clic en el botón `Añadir un registro`{.action} y seleccione «Campos de correo» `DMARC`{.action}.

- **Subdominio**: esta entrada debe **empezar por** `_dmarc`. Si aplica su DMARC a todo el dominio, no introduzca nada más que `_dmarc` en esta casilla. Si define su DMARC a un subdominio de su dominio principal, añada su subdominio después de `_dmarc`. Por ejemplo, si se debe aplicar el DMARC a un subdominio.*mydomain.ovh*, hay que introducir `_dmarc.subdomain` en la casilla «subdominio» para el nombre de dominio *mydomain.ovh*.

A continuación ofrecemos una descripción completa de las etiquetas utilizadas para **el registro DMARC** de OVHcloud:

- **Versión (v=)**: campo obligatorio que determina la versión del protocolo DMARC.

- **Regla para el dominio (p=)**: política que debe adoptar el destinatario a petición del propietario del dominio remitente. La política se aplica al dominio consultado y a los subdominios, a menos que la etiqueta de subdominio **sp=** indique instrucciones diferentes. Los valores posibles son los siguientes:
    - *none*: el propietario del dominio no solicita ninguna acción específica relativa a la entrega de mensajes.
    - *quarantine*: si se produce un fallo en la comprobación del mecanismo DMARC, los destinatarios deben considerar el correo como sospechoso. En función de la capacidad del servidor destinatario, esto puede significar «colocar en la carpeta spam» y/o «informar como sospechoso».
    - *reject*: rechazo de los mensajes de correo electrónico que no superan la comprobación del mecanismo DMARC.

> [!warning]
>
> La configuración del parámetro `p=` puede afectar considerablemente a la entrega de los mensajes de correo electrónico del dominio. Es recomendable configurar `p=none` y realizar un análisis de los informes de fallos durante varias semanas para corregir cualquier anomalía. Pasar a `p=quarantine` o `p=reject` requiere un control total de los parámetros de seguridad del correo electrónico, relativos al [SPF](/pages/web_cloud/domains/dns_zone_spf) y al [DKIM](/pages/web_cloud/domains/dns_zone_dkim). El uso del factor `pct=`, que se muestra a continuación, permite realizar una transición gradual.

- **Porcentaje de mensajes filtrados (pct=)** (valor entre 0 y 100, el valor predeterminado es 100): porcentaje del flujo de mensajes al que se debe aplicar la política DMARC. El objetivo de la etiqueta «pct» es permitir a los propietarios de dominios adoptar una implementación lenta del mecanismo DMARC.

- **URI de informes globales (rua=)**: direcciones a las que se enviarán los informes (lista de texto sin formato con comas). Se puede especificar cualquier URI válido. La mención « mailto: » debe preceder al destinatario de correo (por ejemplo: `mailto:address@example.com`).

- **Regla para los subdominios (sp=)**: política que debe adoptar el destinatario para todos los subdominios. Se aplica únicamente a los subdominios del dominio consultado y no al dominio en sí. Su sintaxis es idéntica a la de la etiqueta «p» definida anteriormente. Si esta etiqueta no está presente, la política especificada por la etiqueta 'p' se aplica a los subdominios.

- **Modo de alineación para SPF (aspf=)** (el valor predeterminado es `r`): especifica el modo de alineación SPF. Los valores son los siguientes:
    - `R`(Relaxed) para el modo flexible: los mensajes de correo electrónico pueden enviarse, por ejemplo, desde un subdominio del dominio declarado. Esto se conoce como alineación parcial.
    - `s`(strict) para el modo strict: los mensajes de correo deben enviarse desde el dominio declarado y únicamente desde este. El resultado es «alineado».

> [!primary]
>
> En el contexto de los mecanismos de autenticación SPF y DKIM, la **alineación** se refiere a la correspondencia entre el nombre de dominio (y/o la firma de dominio) utilizado en el envío **y** el nombre de dominio registrado en estos mecanismos.
>
> **Ejemplos**
>
> - **Alineado**: cuando la dirección *john.smith@mydomain.ovh* transmite un mensaje desde el servicio de correo asociado al dominio *mydomain.ovh* y se han configurado los mecanismos de autenticación SPF y DKIM, se obtiene un resultado alineado.
> - **Parcialmente alineado**: cuando la dirección *john.smith@subdomain.mydomain.ovh* transmite un mensaje desde el servicio de correo asociado al dominio *mydomain.ovh*, pero los mecanismos de autenticación SPF y DKIM se han configurado únicamente en el dominio principal (es decir, *mydomain.ovh*), se obtiene un resultado parcialmente alineado.
> - **Fallos de los mecanismos de autenticación**: el remitente intenta enviar un mensaje de correo electrónico como *john.smith@mydomain.ovh*, pasando por otra dirección (como *robert@example.com*) o utilizando un servicio de envío de correo electrónico que no aparece en el SPF. En este caso, los mecanismos de autenticación SPF y DKIM devuelven un error como resultado.

![dmarc](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-dmarc-01.png){.thumbnail}

#### Registro TXT <a name="txt-record"></a>

Puede añadir el registro TXT a su zona DNS desde el [área de cliente de OVHcloud](/links/manager) y accediendo a la sección `Web Cloud`{.action}. Haga clic en `Dominios`{.action} y seleccione el dominio correspondiente. A continuación, abra la pestaña `Zona DNS`{.action}.

Una vez que haya visualizado la zona DNS, haga clic en el botón `Añadir un registro`{.action} y seleccione «Campos extendidos» `TXT`{.action}.

- **Subdominio**: esta entrada debe **empezar por** `_dmarc`. Si aplica su DMARC a todo el dominio, no introduzca nada más que `_dmarc` en esta casilla. Si define su DMARC a un subdominio de su dominio principal, añada su subdominio después de `_dmarc`. Por ejemplo, si se debe aplicar el DMARC a un subdominio.*mydomain.ovh*, hay que introducir `_dmarc.subdomain` en la casilla «subdominio» para el nombre de dominio *mydomain.ovh*

A continuación se muestra una lista de las etiquetas utilizadas para crear un **registro TXT** con la configuración de DMARC. Esta lista es complementaria a las etiquetas mencionadas en la sección anterior «[Registro DMARC](#dmarc-record)».

- **adkim** (el valor predeterminado es `r`): especifica el modo de alineación DKIM. Los valores son los siguientes:
    - `r`(relaxed) para el modo flexible: los mensajes de correo electrónico que no superen la autenticación DKIM son marcados como «no deseados» por el servidor de destino.
    - `s`(strict) para el modo strict: los mensajes de correo electrónico que fallan en la autenticación DKIM son rechazados por el servidor de destino.

- **ruf** (lista de texto sin formato delimitada por comas): direcciones a las que se debe notificar la información de error específica del mensaje. Si esta etiqueta está presente, el propietario del dominio remitente solicita a los destinatarios que envíen informes de errores detallados sobre los mensajes de correo electrónico que no superen la evaluación DMARC de forma específica (consulte la etiqueta `fo` a continuación). El formato del mensaje que se va a generar debe seguir el formato especificado para la etiqueta `rf`. La mención « mailto: » debe preceder al destinatario de correo (por ejemplo: `mailto:address@example.com`).

- **fo** (texto sin formato; el valor predeterminado es `0`): Opciones de informe de errores detallado. Los generadores de informes pueden optar por cumplir las opciones solicitadas. El contenido de esta etiqueta debe omitirse si no se especifica una etiqueta `ruf` (arriba). El valor de esta etiqueta es una lista de caracteres separados por dos puntos (`:`) que indican las siguientes opciones de informe de errores:
     - **0**: genera un informe de errores de DMARC si todos los mecanismos de autenticación (DKIM **ET** SPF) no pueden producir un resultado "pass" alineado.
     - **1**: genera un informe de errores de DMARC si un mecanismo de autenticación (DKIM **O** SPF) produce algo distinto de un resultado alineado "success".
     - **d**: genera un informe de errores de DKIM si se produce un error en el mecanismo de autenticación de DKIM, independientemente de su alineación.
     - **s**: genera un informe de fallos de SPF si falla el mecanismo de autenticación de SPF, independientemente de su alineación.

- **rf** (valores de texto sin formato separados por comas, el valor predeterminado es `afrf`): esta etiqueta indica el tipo de formato esperado para los informes que proporcionan detalles específicos sobre los errores de autenticación de mensajes. Actualmente solo se admite el `afrf` (Auth Failure Reporting Format).

- **ri** (entero sin signo de 32 bits en texto sin formato; el valor predeterminado es 86400): intervalo necesario, en segundos, entre informes agregados. Esta etiqueta especifica la frecuencia con la que los destinatarios de correo electrónico deben generar informes agregados sobre los resultados de la evaluación de DMARC para el dominio en cuestión.

![dmarc](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-dmarc-02.png){.thumbnail}

#### Ejemplos de registro <a name="record-example"></a>

> [!warning]
>
> En nuestros dos ejemplos, el parámetro `p=`se utiliza en su forma restrictiva para ilustrar el comportamiento de un servicio de correo en este caso.
>
> La configuración del parámetro `p=` puede afectar considerablemente a la entrega de los mensajes de correo electrónico del dominio. Se recomienda configurar `p=none` y realizar un análisis de los informes de errores durante varias semanas para corregir cualquier anomalía. Pasar a `p=quarantine` o `p=reject` requiere un control total de los parámetros de seguridad del correo electrónico, relativos al [SPF](/pages/web_cloud/domains/dns_zone_spf) y al [DKIM](/pages/web_cloud/domains/dns_zone_dkim). El uso del factor `pct=`, que se muestra a continuación, permite realizar una transición gradual.

##### Primer ejemplo

Para ilustrar este primer ejemplo, hemos utilizado el [registro DMARC](#dmarc-record) en la zona DNS y le hemos aplicado los siguientes parámetros:

![dmarc](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-dmarc-03.png){.thumbnail}

Obtenemos el siguiente resultado:

```
"v=DMARC1;p=quarantine;pct=100;rua=mailto:report@mydomain.ovh;aspf=s;"
```

Todos los mensajes de correo enviados (**pct=100**) se procesan mediante los mecanismos de autenticación SPF y/o DKIM. Los mensajes de correo electrónico que no superen la prueba SPF se rechazarán automáticamente porque «**aspf=s**» (mecanismo SPF en modo strict). Se envía un informe de errores sobre el fallo de los mecanismos de autenticación SPF y/o DKIM a `report@mydomain.ovh` (**rua=mailto:report@mydomain.ovh**).

##### Segundo ejemplo

En este segundo ejemplo, se ha utilizado un [registro TXT](#txt-record) para utilizar etiquetas que no están disponibles a través del [registro DMARC](#dmarc-record) simplificado.

![dmarc](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-dmarc-04.png){.thumbnail}

Obtenemos el siguiente resultado:

```
"v=DMARC1; p=quarantine; pct=100; ruf=mailto:report@mydomain.ovh; fo=0; adkim=r; aspf=s; adkim=r; ri=86400"
```

- **p=quarantine**: los mensajes de correo electrónico que no superan las pruebas DMARC se tratan como "sospechosos".

- **pct=100**: La política DMARC se aplica al 50% de los mensajes procedentes del flujo de correo del propietario del dominio.

- **ruf=mailto:report@mydomain.ovh**: dirección de correo electrónico a la que se enviarán los informes de errores detallados con el argumento "mailto".

- **fo=0**: opciones para generar informes de errores. El valor '0' indica que sólo se deben generar informes de errores DMARC si los mecanismos de autenticación SPF y DKIM no pueden producir un resultado alineado 'pass'.

- **adkim=r**: el modo de alineación de ID de DKIM requerido por el propietario del dominio es "relaxed" (modo flexible). En este modo, DKIM debe proporcionar una firma válida y el identificador del encabezado "From" se puede alinear parcialmente.

- **aspf=s**: el modo de alineación del identificador SPF requerido es "strict". Esto significa que el SPF del dominio alineado debe coincidir exactamente con la dirección IP remitente del mensaje.

- **adkim=r**: el modo de alineación de ID de DKIM requerido por el propietario del dominio es «relaxed» (modo flexible). En este modo, DKIM debe proporcionar una firma válida y el identificador del encabezado 'From' se puede alinear parcialmente.

- **ri=86400**: Establece el intervalo solicitado entre informes agregados, en segundos. En este caso, debe generarse un informe agregado al menos una vez cada 86400 segundos (una vez al día).

## Más información <a name="go-further"></a>

Para servicios especializados (posicionamiento web, desarrollo...), póngase en contacto con los [partners de OVHcloud](/links/partner).

Si necesita ayuda sobre el uso y la configuración de sus soluciones de OVHcloud, puede consultar nuestras diferentes [ofertas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).