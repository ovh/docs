---
title: "Web hosting - Instalar un certificado SSL personalizado"
excerpt: "Descubra cómo importar e instalar un certificado SSL personalizado en un alojamiento web de OVHcloud"
updated: 2024-10-17
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

Los certificados Secure Socket Layer (SSL) permiten cifrar los intercambios efectuados desde o hacia su sitio web. Esto evita que una persona o un robot malicioso venga a "escuchar" claramente las peticiones enviadas o emitidas con su sitio web.

OVHcloud ofrece varios tipos de certificados SSL en los planes de [hosting OVHcloud](/links/web/hosting). Estos se describen en la guía "[Alojamiento web - Gestionar un certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting)". Los certificados SSL son indispensables para la seguridad de su sitio web.

En función de su situación, es posible que quiera instalar un certificado SSL diferente de los que ofrece OVHcloud en su alojamiento web.

**Descubra cómo importar e instalar un certificado SSL personalizado en un alojamiento web de OVHcloud.**

## Requisitos

- Estar conectado a su [área de cliente de OVHcloud](/links/manager).
- Contratar o disponer de un [alojamiento compartido OVHcloud](/links/web/hosting) en el que no haya ningún certificado SSL instalado.
- Contratar o disponer de un [dominio](/links/web/domains) y disponer de derechos exclusivos sobre su uso. El nombre de dominio no debe estar ya asociado a un certificado SSL.
- Tener OpenSSL o una aplicación compatible instalada localmente en su dispositivo.

## Procedimiento

> [!warning]
>
> OVHcloud pone a su disposición servicios cuya configuración, gestión y responsabilidad recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las tareas más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner). OVHcloud no podrá asistirle en **la instalación o contratación de un certificado SSL que no sea [los que ofrece OVHcloud](/links/web/hosting-options-ssl)**. Para más información, consulte la sección "[Más información](#go-further)" de esta guía.
>

### Etapa 1 - Obtener una solicitud de firma de certificados (CSR) SSL <a name="step-1"></a>

> [!primary]
>
> Este etapa es opcional si ya ha generado y recuperado el certificado SSL de su proveedor SSL o si este último propone la generación del CSR durante el pedido del certificado SSL. En ese caso, vaya directamente al [etapa 2](#step-2).

#### 1.1 - Generar la clave privada y la CSR en línea de comandos <a name="step-1.1"></a>

Para ejecutar los siguientes comandos, necesitará la caja de herramientas OpenSSL incluida en numerosas distribuciones Linux. De lo contrario, instálela a través del gestor de paquetes del sistema o use una aplicación de otro fabricante compatible. En Windows, puede utilizar el subsistema Windows para Linux (WSL) o instalarlo a través de una aplicación de otro fabricante.
Esta operación depende del sistema operativo que utilice, por lo que no podemos detallar todos los casos posibles en esta guía.

Abra la interfaz de línea de comandos (terminal) y ejecute el siguiente comando:

```sh
openssl req -nodes -newkey rsa:2048 -sha256 -keyout my_private.key -out your_file_name.csr -utf8
```

Sustituya los términos `my_private` y `your_file_name` por los nombres de archivo que desee.

Una vez lanzado el pedido, el terminal le pedirá cada uno de los siguientes datos (para usted mismo, su empresa o su asociación). Una vez que haya respondido a la pregunta, pulse la tecla `ENTRAR`{.action} en su teclado para ver la siguiente pregunta:

- `Country Name (2 letter code) [AU]`: introduzca en mayúscula el **Country Code** de su país. Si es necesario, consulte la lista de todos los **Country Codes** [aquí](https://www.iban.com/country-codes){.external}.
- `State or Province Name (full name) [Some-State]`: escriba en mayúscula el nombre de su región (o de su estado si, por ejemplo, se encuentra en Estados Unidos).
- `Locality Name (eg, city) []`: escriba el nombre de su ciudad en mayúscula.
- `Organization Name (eg, company) [Internet Widgits Pty Ltd]`: introduzca el nombre de su organización, empresa o asociación. **Si es un particular, no responda a esta pregunta y pulse directamente la tecla `ENTRAR`{.action} en su teclado para ver la siguiente pregunta**.
- `Organizational Unit Name (eg, section) []`: introduzca el nombre de su departamento o departamento dentro de su organización, empresa o asociación. **Si es un particular, no responda a esta pregunta y pulse directamente la tecla `ENTRAR`{.action} en su teclado para ver la siguiente pregunta**.
- `Common Name (e.g. server FQDN or YOUR name) []`: introduzca el nombre de dominio (p.ej. `domain.tld`) o el subdominio (p.ej. `sub.domain.tld`) para el que desea obtener un certificado SSL. **Aquí solo puede introducirse un único** nombre de dominio o subdominio. En función del proveedor SSL, deberá indicar su dominio solo (por ejemplo, `domain.tld`) o su subdominio en "www" (por ejemplo, `www.domain.tld`). Si necesita más información, puede ponerse en contacto con su proveedor SSL.
- `Email Address []` : Introduzca su dirección de correo electrónico.

Las siguientes preguntas son opcionales y se refieren principalmente a usuarios experimentados. En caso de duda, le recomendamos encarecidamente que los pase pulsando la tecla `ENTRAR`{.action} en su teclado hasta que el terminal no le haga más preguntas.

- `A challenge password []`: Para usuarios experimentados, introduzca una contraseña secreta que se utilizará entre usted y el proveedor de certificados SSL. Tenga en cuenta que, por lo que respecta a OVHcloud, la CSR y la clave privada no deben estar protegidas por una contraseña para poder añadirse a un alojamiento compartido de OVHcloud.
- `An optional company name []`: para usuarios avanzados, puede introducir un nombre diferente para su organización, empresa o asociación.

#### 1.2 - Obtener la clave privada

Para recuperar la clave privada generada anteriormente y siempre desde su terminal, ejecute el siguiente comando:

```sh
cat my_private.key
```

Sustituya el término `my_private` por el nombre de archivo que haya elegido anteriormente en el [etapa 1.1](#step-1.1) de esta guía.

La clave privada se mostrará en su terminal de la siguiente forma:

```console
-----BEGIN PRIVATE KEY-----
XXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXX The Private Key XXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXX
------END PRIVATE KEY------
```

Abra un procesador de textos (bloc de notas, LibreOffice, etc.) y luego `copie/pegue`{.action} la clave privada completa, incluidos los términos `-----BEGIN PRIVATE KEY-----` y `-----END PRIVATE KEY-----`.

Guarde este archivo y guárdelo cuidadosamente para el resto de esta guía si su proveedor SSL se lo pide al realizar su pedido.

#### 1.3 - Obtener la CSR

Para recuperar el CSR generado anteriormente y siempre desde su terminal, ejecute el siguiente comando:

```sh
cat your_file_name.csr
```

Sustituya el término `your_file_name` por el nombre de archivo que haya elegido anteriormente en el [etapa 1.1](#step-1.1) de esta guía.

El CSR se mostrará en su terminal con el siguiente formato:

```console
-----BEGIN CERTIFICATE REQUEST-----
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXX The CSR XXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
------END CERTIFICATE REQUEST------
```

Abra un programa de procesamiento de textos y, a continuación, `copie/pegue`{.action} toda la CSR, incluidos los términos `-----BEGIN CERTIFICATE REQUEST-----` y `-----END CERTIFICATE REQUEST-----`.

Guarde este archivo y guárdelo cuidadosamente para el resto de esta guía si su proveedor SSL se lo pide al realizar su pedido.

> [!warning]
>
> El archivo que contiene la clave privada y el archivo que contiene la CSR están vinculados y no son intercambiables. Si ha generado varias claves privadas o varios CSR, asegúrese de no mezclar las distintas claves privadas con los distintos CSR.

### Etapa 2 - Contratar el certificado SSL con su proveedor SSL <a name="step-2"></a>

> [!primary]
>
> Este etapa es opcional si ya ha generado y recuperado el certificado SSL de su proveedor SSL. En ese caso, vaya directamente al [etapa 3](#step-3).

Contrate el certificado SSL a su proveedor SSL. Si este último lo necesita, puede enviarle el contenido de la CSR generada en el [etapa 1](#step-1) de esta guía. Si le pide además la clave privada generada en el [etapa 1](#step-1), transmítala también.

Después de su pedido, el proveedor de certificado SSL debe proporcionarle 3 archivos:

- el archivo `certificate.crt`;
- el archivo `private.key`;
- el archivo `ca_bundle.crt`.

El contenido de cada uno de sus archivos será necesario para realizar el [etapa 3](#step-3) de esta guía.

<a name="3files"></a>

> [!warning]
>
> Algunos proveedores SSL entregan el contenido de los ficheros `certificate.crt` y `ca_bundle.crt` en un solo fichero. Deberá separar el contenido de este archivo para poder reformar los archivos `certificate.crt` y `ca_bundle.crt`. Antes de realizar el [etapa 3](#step-3) de esta guía.
>
> Otros proveedores SSL entregan el fichero `ca_bundle.crt` en varias partes/ficheros. Deberá concatenar los contenidos de estos archivos para poder reformar un único archivo `ca_bundle.crt` y así seguir el [etapa 3](#step-3) de esta guía.
>
> Si esta situación le afecta y tiene dificultades para realizar estas operaciones, póngase en contacto con su proveedor SSL. Por favor, indique que todo el contenido que le ha entregado debe repartirse únicamente en 3 ficheros (`certificate.crt`, `ca_bundle.crt` y `private.key`) para que pueda proceder a la instalación del certificado SSL.

### Etapa 3 - Instalar el certificado SSL personalizado en su alojamiento web <a name="step-3"></a>

Si empieza a leer esta guía en este etapa porque ya tiene un certificado SSL externo contratado a un proveedor SSL, compruebe que solo dispone de los 3 archivos siguientes: `certificate.crt`, `private.key` y `ca_bundle.crt`. En caso contrario, consulte la información [arriba](#3files).

**Antes de finalizar la instalación del certificado SSL en su alojamiento web**, compruebe que **todos los dominios y/o subdominios** afectados por su certificado SSL:

- apuntan a la dirección IP de su alojamiento web;
- están declarados como multisitio en su alojamiento web;

Compruebe también lo siguiente:

- La casilla `SSL` no debe estar marcada al añadir en multisitio un dominio o subdominio al que se refiera su certificado SSL externo.
- El estado `Por generar` o `Activado` no debe estar ya presente en todos los dominios o subdominios a los que se refiera su certificado SSL externo.

Para más información, consulte nuestras guías "[Alojar varios sitios web en un mismo hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite)" y "[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

Una vez que haya cumplido todos estos requisitos, ya puede finalizar la instalación del certificado SSL personalizado en su alojamiento web.

Para ello, lleve a cabo las siguientes acciones:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager).
2. En la línea situada en la parte superior del área de cliente, haga clic en la pestaña `Web Cloud`{.action}.
3. En la columna izquierda, haga clic en el menú desplegable `Alojamientos`{.action}.
4. Seleccione el alojamiento web correspondiente.
5. A continuación, siga en la pestaña `Información general`{.action}.
6. Acceda al recuadro `Configuración`.
7. A la derecha de la mención `Certificado SSL`, haga clic en el botón `...`{.action} y luego en `Contratar un certificado SSL`{.action}.

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate.png){.thumbnail}

En la nueva ventana, seleccione `Importación de un certificado SSL`{.action} de la lista de opciones y haga clic en `Siguiente`{.action}.

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate-step-1-custom.png){.thumbnail}

Se abrirá la siguiente ventana con 3 formularios para completar:

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate-step-2-custom-empty.png){.thumbnail}

- `Copiar el contenido de su certificado (solo RSA)`{.action}: introduzca el contenido del archivo **certificate.crt** emitido por su proveedor SSL, incluidos los términos `-----BEGIN CERTIFICATE-----` y `-----END CERTIFICATE-----` (o sus equivalentes). El cifrado RSA corresponde al cifrado estándar de los certificados SSL.
- `Copiar el contenido de su clave privada (no cifrada)`{.action}: introduzca el contenido del archivo **private.key** emitido por su proveedor SSL, incluidos los términos `-----BEGIN RSA PRIVATE KEY-----` y `-----END RSA PRIVATE KEY-----` (o sus equivalentes). La mención *no cifrada* significa que la clave privada no debe estar protegida con una contraseña o una contraseña. En caso contrario, la instalación del certificado no se realizará correctamente.
- `Copiar el contenido de su cadena de certificados`{.action}: introduzca el contenido del archivo **ca_bundle.crt** emitido por su proveedor SSL, incluidos los términos `-----BEGIN CERTIFICATE-----` y `-----END CERTIFICATE-----` (o sus equivalentes).

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate-step-2-custom.png){.thumbnail}

Una vez que haya completado los 3 formularios, haga clic en `Aceptar`{.action} para finalizar la importación del certificado SSL personalizado en su alojamiento web.

Si el proveedor SSL ha generado el certificado SSL correctamente y se cumplen los requisitos, aparecerá un mensaje indicándole que la activación del certificado SSL en su alojamiento web está en curso.

> [!warning]
>
> Si encuentra el error `error check SAN from certificate`, se debe a al menos una de las dos situaciones siguientes:
>
> - al menos un dominio o subdominio declarado en su certificado SSL no apunta a la dirección IP de su alojamiento web;
> - al menos un dominio o subdominio declarado en su certificado SSL no está declarado en la pestaña `Multisitio` de su alojamiento web.
>
> Consulte nuestras guías "[Alojar varios sitios web en un mismo hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite)" y "[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)" para resolver esta situación.

La instalación puede tardar varios minutos.

Para comprobar que la instalación se ha completado, lleve a cabo los siguientes pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager).
2. En la línea situada en la parte superior del área de cliente, haga clic en la pestaña `Web Cloud`{.action}.
3. En la columna izquierda, haga clic en el menú desplegable `Alojamientos`{.action}.
4. Seleccione el alojamiento web correspondiente.
5. A continuación, siga en la pestaña `Información general`{.action}.
6. Acceda al recuadro `Configuración`.

Si todo ha terminado, debe encontrar un valor equivalente a este que aparece debajo de la mención `Certificado SSL`: `Sí - CUSTOM - CUSTOM`.

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/ssl-certificate-custom-enable.png){.thumbnail}

Su certificado SSL personalizado ya está instalado y activo. Ya puede utilizarlo con su sitio web pasando, por ejemplo, su [sitio web en HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Más información <a name="go-further"></a>

[Web hosting - Gestionar un certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Web hosting - Cambiar su sitio web a HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Errores comunes relacionados con la seguridad de su sitio web con el SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).
 
Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).