---
title: 'Phishing - ¿Cómo reconocer e-mails fraudulentos?'
excerpt: '¿Cómo reconocer un correo electrónico de phishing y qué hacer si ha hecho clic en un enlace fraudulento?'
updated: 2026-03-03
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objetivo

El phishing es una técnica fraudulenta destinada a engañar al internauta para que facilite datos personales (identificadores de acceso, contraseñas, etc.) y/o bancarios haciéndose pasar por un tercero o un sitio de confianza.<br>
En la práctica, se trata con frecuencia del envío de un correo electrónico o de un SMS que le invita a hacer clic en un enlace. Este enlace le redirige a un formulario que imita fraudulentamente los colores de una marca y le pide que introduzca sus identificadores personales.

**Esta guía le explica cómo reconocer un correo electrónico o un SMS de phishing y qué medidas tomar si ha hecho clic en un enlace fraudulento.**

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/RED6EuCLFjk?si=9ppewOVm_bXymThM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Procedimiento

### He recibido un correo electrónico o un SMS a nombre de OVHcloud, ¿cómo saber si es legítimo?

#### Identificar un correo de phishing

En primer lugar, verifique si el correo que ha recibido también es visible en la página [Mis mensajes](/links/control-panel/account-messages) de su área de cliente de OVHcloud. Allí encontrará copias de los correos oficiales enviados por OVHcloud.

Además, aquí tiene algunos elementos que le ayudarán a distinguir visualmente un correo electrónico auténtico de OVHcloud de una tentativa de phishing.

Haga clic en la imagen para agrandarla. Encuentre los detalles y explicaciones en la tabla que aparece a continuación.

![Diferencia entre correo OVHcloud y correo de phishing](images/EN-legit-and-phishing-email.png){.thumbnail}

> [!primary]
>
> Los números de la tabla corresponden a los visibles en la imagen de arriba.

|Número - descripción|Correo electrónico OVHcloud legítimo|Correo electrónico de phishing fraudulento|
|---|---|---|
|1 - Remitente|Compruebe que la dirección utilizada para el envío del correo termina con un nombre de dominio (o subdominio, por ejemplo `events.ovhcloud.com`) perteneciente a OVHcloud (vea la lista que aparece a continuación)|El remitente del correo será muy probablemente una dirección que no proviene de OVHcloud.|
|2 - Asunto|Compruebe que su identificador **(que suele comenzar por las iniciales de la persona que creó la cuenta de OVHcloud)** y/o la dirección de correo de su cuenta aparezcan en el asunto del mensaje.|Con frecuencia, el correo estará marcado como \[SPAM] y **su identificador no aparecerá o será incorrecto**.|
|3 - Enlace|**Sin hacer clic en él, pase el puntero del ratón sobre el enlace o el botón** y verá directamente su destino (justo debajo o en la parte inferior de su navegador). En nuestro ejemplo, el enlace lleva correctamente a una dirección https://www.ovh.com/. Al hacer clic en un enlace, compruebe siempre la dirección en el navegador. OVHcloud utiliza un conjunto de nombres de dominio reconocibles, generalmente ovhcloud.com u ovh.com (vea a continuación la lista de dominios legítimos y los consejos para verificar un enlace sospechoso).|En un correo de phishing, el enlace no será el de una página oficial de OVHcloud. **No haga clic en él.**|
|4 - Cabecera y pie del correo|OVHcloud envía correos en formatos TXT y HTML. La cabecera contendrá el logotipo de OVHcloud, el pie del correo contendrá información legal relacionada con OVHcloud|Es posible que la cabecera o el pie contengan enlaces que no tienen nada que ver con OVHcloud. **No haga clic en estos enlaces.**|

/// details | **Lista de dominios legítimos de OVHcloud** (haga clic para mostrarla)

- ovhcloud.com
- ovh.com
- ovh.fr
- services.ovhcloud.com
- news.ovhcloud.com
- clientmanager.fr
- kimsufi.com
- soyoustart.com
- ovh.ca
- ovh.com.au
- ovh.co.uk
- ovh.ie
- ovh.de
- ovh.es
- ovh.it
- ovh.lt
- ovh-hosting.fi
- ovh.net
- ovh.nl
- ovh.pl
- ovh.pt
- ovh.sn
- ovh.us
- robot.ovh.net

También pueden enviarse correos desde subdominios auténticos como:

- events.ovhcloud.com
- news.soyoustart.com
- services.kimsufi.com

///

/// details | **Consejos para verificar un enlace sospechoso** (haga clic para mostrar)

**Leer la URL de derecha a izquierda**

El verdadero nombre de dominio se encuentra justo antes de la primera `/` en la dirección. Las URL de phishing suelen añadir palabras antes del dominio para hacerlo creíble:

- `https://www.ovhcloud.com/account/login` — el verdadero dominio es **ovhcloud.com** ✓
- `https://ovhcloud.com.login-secure.xyz/account` — el verdadero dominio es **login-secure.xyz** ✗

Para encontrar el verdadero dominio, observe la barra de direcciones y lea **desde la primera `/` hacia la izquierda** — las dos últimas partes antes de esa barra oblicua son el dominio real.

**Atención a los caracteres similares**

Los estafadores a veces sustituyen letras por caracteres visualmente parecidos para crear direcciones engañosas:

- `ovhcIoud.com` (I mayúscula en lugar de la L minúscula)
- `0vhcloud.com` (cero en lugar de la letra O)
- `ovhclould.com` (letra adicional)

Si algo le parece inusual, no haga clic. Escriba `ovhcloud.com` manualmente en su navegador.

**Los acortadores de URL son una señal de alerta**

Los enlaces cortos como `bit.ly/xxx`, `tinyurl.com/xxx` o `t.co/xxx` ocultan el destino real. OVHcloud **nunca** utiliza acortadores de URL en sus correos oficiales.

**En el móvil: pulsación larga en lugar de pasar el ratón**

En un teléfono o una tableta, no puede pasar el ratón sobre un enlace. En su lugar, realice una **pulsación larga** (mantenga el dedo sobre el enlace sin soltarlo). Aparecerá una vista previa de la URL completa. Si el dominio le resulta desconocido, no abra el enlace.

**En caso de duda, acceda directamente al sitio**

El reflejo más seguro: **nunca haga clic en un enlace de un correo electrónico para acceder a su cuenta**. En su lugar, abra su navegador y escriba `www.ovhcloud.com` usted mismo, y luego conéctese desde el sitio. Si OVHcloud requiere una acción por su parte, verá la notificación en su área de cliente.

///

#### Identificar un SMS de phishing

OVHcloud **nunca** le enviará un enlace por SMS. Los SMS que enviamos suelen estar relacionados con la [autenticación en dos pasos en su área de cliente](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa).

A continuación tiene 2 ejemplos de SMS, el primero es legítimo y corresponde a la autenticación en dos pasos. El segundo SMS es fraudulento.

![SMS fraudulento](images/sms-phishing.png){.thumbnail}

#### ¿Cómo denunciar un correo de phishing?

Después de realizar las comprobaciones explicadas anteriormente, si está seguro de haber recibido un correo de phishing que usurpa la identidad de OVHcloud, puede comunicárnoslo guardando el correo como archivo (`.eml` o `.msg`) y enviándolo como **archivo adjunto** en un nuevo mensaje a la dirección **<fraude@ovh.com>**.

Estos formatos de archivo conservan la información técnica oculta (denominada "cabeceras") que nuestros equipos necesitan para rastrear el origen del fraude y actuar.

> [!warning]
>
> **No reenvíe directamente el correo de phishing.** Al reenviarlo, es su propia bandeja de correo la que envía el contenido fraudulento, lo que puede provocar el bloqueo de su dirección de correo electrónico al ser considerada como emisora de spam. En su lugar, guarde el correo como archivo y adjúntelo a un **nuevo** mensaje.

**Cómo guardar un correo como archivo:**

Haga clic en el título correspondiente a la aplicación de correo que utiliza.

**Programas de correo (escritorio)**

/// details | **Outlook para Windows**

Existen dos versiones de Outlook para Windows: **Outlook clásico** y el **nuevo Outlook**. Para distinguirlas, escriba "Outlook" en la barra de búsqueda de Windows. La versión clásica muestra la mención *"(clásico)"*, mientras que el nuevo Outlook no tiene mención especial.

![Outlook Windows - identificar la versión](images/outlook-windows-identify01.png){.thumbnail .h-500}

**Outlook clásico:**

1. Seleccione el correo de phishing en su bandeja de entrada (no lo abra).
2. Haga clic en `Archivo`{.action} en la barra de menú y luego en `Guardar como`{.action}.
3. En el menú desplegable "Tipo de archivo", seleccione **Formato de mensaje de Outlook - Unicode (.msg)**.
4. Elija una ubicación en su ordenador (por ejemplo el Escritorio) y haga clic en `Guardar`{.action}.

También puede **arrastrar y soltar** el correo desde su bandeja de entrada directamente a su Escritorio. Esto creará un archivo `.msg` que podrá adjuntar a su denuncia.

**Nuevo Outlook:**

1. En la lista de mensajes, haga **clic derecho** en el correo de phishing.
2. Seleccione `Guardar como`{.action} y luego elija `Guardar como archivo EML`{.action}.
3. Elija una ubicación en su ordenador y haga clic en `Guardar`{.action}.

///

/// details | **Thunderbird**

1. Haga clic derecho en el correo de phishing en su bandeja de entrada.
2. Seleccione `Guardar como`{.action}.
3. El correo se guardará como archivo `.eml`. Elija una ubicación en su ordenador y haga clic en `Guardar`{.action}.

///

/// details | **Apple Mail (macOS)**

1. Seleccione el correo de phishing en su bandeja de entrada.
2. En la barra de menú, haga clic en `Archivo`{.action} > `Guardar como`{.action}.
3. Elija el formato **Fuente del mensaje sin formato**, seleccione una ubicación en su ordenador y haga clic en `Guardar`{.action}.

///

**Correo web (navegador)**

/// details | **OWA - Outlook Web Application**

1. Abra el correo de phishing.
2. Haga clic en los **tres puntos horizontales** (⋯) en la parte superior derecha del correo.
3. Seleccione `Ver`{.action} > `Ver origen del mensaje`{.action}.
4. Seleccione todo el texto (`Ctrl+A` o `Cmd+A`), cópielo (`Ctrl+C` o `Cmd+C`), péguelo en un editor de texto sin formato (por ejemplo el Bloc de notas o TextEdit) y guarde el archivo con la extensión `.eml`.

///

/// details | **Roundcube (Webmail OVHcloud)**

1. Seleccione el correo de phishing en su bandeja de entrada.
2. Haga clic en `Más`{.action} (o el icono **⋮**) en la barra de herramientas.
3. Seleccione `Descargar (.eml)`{.action}.
4. El archivo se guardará en su carpeta de Descargas.

///

/// details | **Zimbra (Webmail OVHcloud)**

1. Seleccione el correo de phishing en su bandeja de entrada.
2. Haga clic en `Más`{.action} en la barra de herramientas.
3. Seleccione `Ver original`{.action}. El contenido sin formato del correo se abrirá en una nueva pestaña del navegador.
4. En esta nueva pestaña, utilice `Ctrl+S` (o `Cmd+S` en macOS) para guardar la página. Guarde el archivo con la extensión `.eml` (si su navegador propone `.txt`, renombre el archivo después de guardarlo).

///

/// details | **Gmail**

1. Abra el correo de phishing.
2. Haga clic en los **tres puntos verticales** (⋮) en la parte superior derecha del correo.
3. Seleccione `Descargar mensaje`{.action}.
4. Se guardará un archivo `.eml` en su carpeta de Descargas.

///

Una vez guardado el archivo, cree un **nuevo correo electrónico** dirigido a **<fraude@ovh.com>** y adjunte el archivo.

> [!primary]
>
> Tenga en cuenta que la información que nos facilite podrá ser compartida con terceros con el fin de luchar contra estas amenazas.
>

### He introducido mis datos personales: ¿qué debo hacer?

Haga clic en los títulos que aparecen a continuación para mostrar las instrucciones.

/// details | **Si ha introducido su número de tarjeta bancaria en un sitio fraudulento**

Póngase en contacto rápidamente con su banco para bloquear su medio de pago. Indíqueles la fecha y, si es posible, la hora en que introdujo su número de tarjeta bancaria.

**Su banco es el único que puede cancelar las transacciones fraudulentas que podrían haberse realizado sin su conocimiento.**

///

/// details | **Si ha introducido su contraseña de OVHcloud en un sitio fraudulento**

Abra la página [Seguridad de la cuenta](/links/control-panel/account-security) y cambie inmediatamente su contraseña.<br>

Encontrará en nuestra guía "[Cambiar la contraseña de su cuenta](/pages/account_and_service_management/account_information/manage-ovh-password)" el método para cambiar su contraseña desde su área de cliente, así como nuestras recomendaciones para generar una contraseña eficaz y almacenarla en un gestor de contraseñas.

Le recomendamos encarecidamente que active también la [autenticación en dos pasos](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa) para asegurar de forma duradera su cuenta.

> [!primary]
>
> Recuerde que, para asegurar eficazmente sus datos, su contraseña debe:
>
> - contener al menos doce caracteres;
> - contener al menos 1 letra mayúscula, 1 letra minúscula y 1 número;
> - contener caracteres especiales (por ejemplo: `%`, `#`, `:`, `$`, `*`);
> - no estar tomada del diccionario;
> - no contener información personal (su nombre, apellido o fecha de nacimiento);
> - no ser utilizada para varios accesos de usuario;
> - ser almacenada en un gestor de contraseñas;
> - ser cambiada cada tres meses;
> - ser diferente de las contraseñas anteriores.
>

///

## Más información

[Establecer y gestionar la contraseña de su cuenta](/pages/account_and_service_management/account_information/manage-ovh-password)

[Proteger su cuenta de OVHcloud con la autenticación en dos pasos](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa)

[Proteger mi cuenta de OVHcloud y gestionar mis datos personales](/pages/account_and_service_management/account_information/all_about_username)

Interactúe con nuestra [comunidad de usuarios](/links/community).