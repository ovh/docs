---
title: "Web hosting - Instalar un certificado SSL personalizado"
excerpt: "Descubra cómo importar e instalar un certificado SSL personalizado en un alojamiento web de OVHcloud"
updated: 2025-12-16
---

## Objetivo

Los certificados Secure Socket Layer (SSL) permiten cifrar los intercambios efectuados desde o hacia su sitio web. Esto evita que una persona o un robot malicioso venga a "escuchar" claramente las peticiones enviadas o emitidas con su sitio web.

OVHcloud ofrece varios tipos de certificados SSL en los planes de [hosting OVHcloud](/links/web/hosting). Estos se describen en la guía "[Alojamiento web - Gestionar un certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting)". Los certificados SSL son indispensables para la seguridad de su sitio web.

En función de su situación, es posible que quiera instalar un certificado SSL diferente de los que ofrece OVHcloud en su alojamiento web.

**Descubra cómo importar e instalar un certificado SSL personalizado en un alojamiento web de OVHcloud.**

## Requisitos

- Estar conectado a su [área de cliente de OVHcloud](/links/manager).
- Contratar o disponer de un [alojamiento compartido OVHcloud](/links/web/hosting).
- Contratar o disponer de un [dominio](/links/web/domains) y disponer de derechos exclusivos sobre su uso. El nombre de dominio no debe estar ya asociado a un certificado SSL.
- Tener OpenSSL o una aplicación compatible instalada localmente en su dispositivo.

## Procedimiento

> [!warning]
>
> OVHcloud pone a su disposición servicios cuya configuración, gestión y responsabilidad recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las tareas más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner). OVHcloud no podrá asistirle en **la instalación o contratación de un certificado SSL que no sea [los que ofrece OVHcloud](/links/web/hosting-options-ssl)**. Para más información, consulte la sección "[Más información](#go-further)" de esta guía.

### 1 - Obtener una solicitud de firma de certificados (CSR) SSL <a name="step-1"></a>

> [!primary]
>
> Este etapa es opcional si ya ha generado y recuperado el certificado SSL de su proveedor SSL o si este último propone la generación del CSR durante el pedido del certificado SSL. En ese caso, vaya directamente a la [parte 2](#step-2).

#### 1.1 - Generar la clave privada y la CSR en línea de comandos <a name="step-1.1"></a>

Para ejecutar los siguientes comandos, necesitará la caja de herramientas OpenSSL incluida en numerosas distribuciones Linux. De lo contrario, instálela a través del gestor de paquetes del sistema o use una aplicación de otro fabricante compatible. En Windows, puede utilizar el subsistema Windows para Linux (WSL) o instalarlo a través de una aplicación de otro fabricante.
Esta operación depende del sistema operativo que utilice, por lo que no podemos detallar todos los casos posibles en esta guía.

Abra la interfaz de línea de comandos (terminal) y ejecute el siguiente comando:

```sh
openssl req -nodes -newkey rsa:2048 -sha256 -keyout my_private.key -out your_file_name.csr -utf8
```

Sustituya los términos `my_private` y `your_file_name` por los nombres de archivo que desee.

Una vez lanzado el pedido, el terminal le pedirá cada uno de los siguientes datos (para usted mismo, su empresa o su asociación). Una vez que haya respondido a la pregunta, pulse la tecla `ENTRAR`{.action} en su teclado para ver la siguiente pregunta:

- `Country Name (2 letter code) [AU]`: introduzca en mayúscula el **Country Code** de su país. Si es necesario, consulte la lista de todos los **Country Codes** [aquí](https://www.iban.com/country-codes).
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

Sustituya el término `my_private` por el nombre de archivo que haya elegido anteriormente en la [parte 1.1](#step-1.1) de esta guía.

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

Sustituya el término `your_file_name` por el nombre de archivo que haya elegido anteriormente en la [parte 1.1](#step-1.1) de esta guía.

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

### 2 - Contratar el certificado SSL con su proveedor SSL <a name="step-2"></a>

> [!primary]
>
> Este etapa es opcional si ya ha generado y recuperado el certificado SSL de su proveedor SSL. En ese caso, vaya directamente a la [parte 3](#step-3).

Contrate el certificado SSL a su proveedor SSL. Si este último lo necesita, puede enviarle el contenido de la CSR generada en la [parte 1](#step-1) de esta guía. Si le pide además la clave privada generada en la [parte 1](#step-1), transmítala también.

Después de su pedido, el proveedor de certificado SSL debe proporcionarle 3 archivos:

- El archivo `certificate.crt`.
- El archivo `private.key`.
- El archivo `ca_bundle.crt`.

El contenido de cada uno de sus archivos será necesario para realizar la [parte 3](#step-3) de esta guía.

<a name="3files"></a>

> [!warning]
>
> Algunos proveedores SSL entregan el contenido de los ficheros `certificate.crt` y `ca_bundle.crt` en un solo fichero. Deberá separar el contenido de este archivo para poder reformar los archivos `certificate.crt` y `ca_bundle.crt`. Antes de realizar la [parte 3](#step-3) de esta guía.
>
> Otros proveedores SSL entregan el fichero `ca_bundle.crt` en varias partes/ficheros. Deberá concatenar los contenidos de estos archivos para poder reformar un único archivo `ca_bundle.crt` y así seguir la [parte 3](#step-3) de esta guía.
>
> Si esta situación le afecta y tiene dificultades para realizar estas operaciones, póngase en contacto con su proveedor SSL. Por favor, indique que todo el contenido que le ha entregado debe repartirse únicamente en 3 ficheros (`certificate.crt`, `ca_bundle.crt` y `private.key`) para que pueda proceder a la instalación del certificado SSL.

### 3 - Instalar el certificado SSL personalizado en su alojamiento web <a name="step-3"></a>

Si empieza a leer esta guía en este etapa porque ya tiene un certificado SSL externo contratado a un proveedor SSL, compruebe que solo dispone de los 3 archivos siguientes: `certificate.crt`, `private.key` y `ca_bundle.crt`. En caso contrario, consulte la información [arriba](#3files).

**Antes de finalizar la instalación del certificado SSL en su alojamiento web**, compruebe que **todos los dominios y/o subdominios** afectados por su certificado SSL:

- apuntan a la dirección IP de su alojamiento web.
- estén declarados en uno de los sitios web de su alojamiento web.
- no disponen ya de un certificado SSL activo.

Para más información, consulte nuestras guías:

- [Alojar varios sitios web en un mismo hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite).
- [Web hosting - Lista de direcciones IP por cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).
- [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit).
- [Web hosting - Gestionar un certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting), parte **Desactivar un certificado SSL en un alojamiento web**.

Una vez que haya cumplido todos estos requisitos, ya puede finalizar la instalación del certificado SSL personalizado en su alojamiento web.

Haga clic en las fichas siguientes para ver cada una de las **5** etapas:

> [!tabs]
> **Etapa 1**
>>
>> Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la nueva página, haga clic en la pestaña `Certificados SSL`{.action}.
>>
>> ![Certificados SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Cuando aparezca la pestaña, haga clic en el botón `Importación de su propio certificado SSL`{.action}.
>>
>> ![SSL personalizado](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/import-your-own-ssl-certificate.png){.thumbnail}
>>
> **Etapa 5**
>>
>> En la siguiente ventana se muestra un formulario con 3 campos para completar:
>>
>> ![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/import-your-own-ssl-certificate-window.png){.thumbnail}
>>
>> - `Copiar el contenido de su certificado (solo RSA)`{.action}: introduzca el contenido del archivo **certificate.crt** emitido por su proveedor SSL, incluidos los términos `-----BEGIN CERTIFICATE-----` y `-----END CERTIFICATE-----` (o sus equivalentes). El cifrado RSA corresponde al cifrado estándar de los certificados SSL.
>> - `Copiar el contenido de su clave privada (no cifrada)`{.action}: introduzca el contenido del archivo **private.key** emitido por su proveedor SSL, incluidos los términos `-----BEGIN RSA PRIVATE KEY-----` y `-----END RSA PRIVATE KEY-----` (o sus equivalentes). La mención *no cifrada* significa que la clave privada no debe estar protegida con una contraseña o una contraseña. En caso contrario, la instalación del certificado no se realizará correctamente.
>> - `Copiar el contenido de su cadena de certificados`{.action}: introduzca el contenido del archivo **ca_bundle.crt** emitido por su proveedor SSL, incluidos los términos `-----BEGIN CERTIFICATE-----` y `-----END CERTIFICATE-----` (o sus equivalentes).
>>
>> ![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/import-your-own-ssl-certificate-window-completed.png){.thumbnail}
>>
>> Una vez que haya completado los 3 formularios, haga clic en `Aceptar`{.action} para finalizar la importación del certificado SSL personalizado en su alojamiento web.

Si el proveedor SSL ha generado el certificado SSL correctamente y se cumplen los requisitos, aparecerá un mensaje indicándole que la activación del certificado SSL en su alojamiento web está en curso.

> [!warning]
>
> Si encuentra el error `error check SAN from certificate`, se debe a al menos una de las dos situaciones siguientes:
>
> - al menos un dominio o subdominio declarado en su certificado SSL no apunta a la dirección IP de su alojamiento web;
> - al menos un dominio o subdominio declarado en su certificado SSL no está asociado a ninguno de los sitios web de su alojamiento web.
>
> Consulte nuestras guías "[Alojar varios sitios web en un mismo hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite)" y "[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)" para resolver esta situación.

La instalación puede tardar varios minutos.

Para comprobar que la instalación se ha completado, haga clic en las fichas siguientes para ver cada uno de los **4** pasos:

> [!tabs]
> **Etapa 1**
>>
>> Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la nueva página, haga clic en la pestaña `Certificados SSL`{.action}.
>>
>> ![Certificados SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Cuando aparezca el contenido de la pestaña, compruebe que cada dominio y/o subdominio correspondiente figura en la tabla con el tipo de certificado SSL `Custom`.
>>
>> ![Tabla de gestión de certificados SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/tab-custom.png){.thumbnail}

Su certificado SSL personalizado ya está instalado y activo. Ya puede utilizarlo con su sitio web pasando, por ejemplo, su [sitio web en HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Más información <a name="go-further"></a>

[Web hosting - Gestionar un certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Web hosting - Cambiar su sitio web a HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Errores comunes relacionados con la seguridad de su sitio web con el SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).
 
Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).