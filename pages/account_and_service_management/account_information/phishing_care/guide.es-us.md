---
title: 'Protéjase contra el fraude: cómo detectar los mensajes de correo fraudulento y el phishing'
excerpt: 'Cómo reconocer un email de phishing y qué hacer si ha hecho clic en un enlace fraudulento'
updated: 2026-01-06
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

**Este guía le explica cómo reconocer un correo electrónico o un SMS de phishing y qué medidas tomar si ha hecho clic en un enlace fraudulento.**

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/RED6EuCLFjk?si=9ppewOVm_bXymThM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Procedimiento

### He recibido un correo electrónico o un SMS a nombre de OVHcloud, ¿cómo saber si es legítimo?

#### Identificar un correo de phishing

En primer lugar, verifique si el correo que ha recibido también es visible en su [área de cliente de OVHcloud](/links/manager). Conéctese, haga clic en su nombre en la parte superior derecha y luego en `Emails de servicio`{.action} (o `Mis mensajes`{.action}). Allí encontrará copias de los correos oficiales enviados por OVHcloud.

Además, aquí tiene algunos elementos que le ayudarán a distinguir visualmente un correo electrónico auténtico de OVHcloud de una tentativa de phishing.

Haga clic en la imagen para agrandarla. Encuentre los detalles y explicaciones en la tabla que aparece a continuación.

![Diferencia entre correo OVHcloud y correo de phishing](images/EN-legit-and-phishing-email.png){.thumbnail}

> [!primary]
> 
> Los números de la tabla corresponden a los visibles en la imagen de arriba.

|Número - descripción|Correo electrónico OVHcloud legítimo|Correo electrónico de phishing fraudulento|
|---|---|---|
|1 - Remitente|Compruebe que la dirección utilizada para el envío del correo termina con un nombre de dominio (o subdominio, por ejemplo `events.ovhcloud.com` ) perteneciente a OVHcloud (vea la lista que aparece a continuación)|El remitente del correo será muy probablemente una dirección que no proviene de OVHcloud.|
|2 - Asunto|Compruebe que su identificador **(que suele comenzar por las iniciales de la persona que creó la cuenta de OVHcloud)** y/o la dirección de correo de su cuenta aparezcan en el asunto del mensaje.|Con frecuencia, el correo estará marcado como \[SPAM] y **su identificador no aparecerá o será incorrecto**.|
|3 - Enlace|**Sin hacer clic en él, pase el puntero del ratón sobre el enlace o el botón** y verá directamente su destino (justo debajo o al final de su navegador). En nuestro ejemplo, el enlace lleva correctamente a una dirección https://www.ovh.com/. Al hacer clic en un enlace, compruebe siempre la dirección en el navegador. OVHcloud utiliza un conjunto de nombres de dominio reconocibles, generalmente ovhcloud.com o ovh.com (ver la lista a continuación).|En un correo de phishing, el enlace no será el de una página oficial de OVHcloud. **No haga clic en él.**|
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

#### Identificar un SMS de phishing

OVHcloud **nunca** le enviará un enlace por SMS. Los SMS que enviamos suelen estar relacionados con la [autenticación en dos pasos en su espacio cliente](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa).

A continuación, tiene 2 ejemplos de SMS, el primero es legítimo y corresponde a la autenticación en dos pasos. El segundo SMS es fraudulento.

![SMS fraudulento](images/sms-phishing.png){.thumbnail}

#### Cómo denunciar un correo de phishing

Después de realizar las comprobaciones explicadas anteriormente, si está seguro de haber recibido un correo de phishing que usurpa la identidad de OVHcloud, puede enviarnos la mayor cantidad de información posible (al menos el contenido del correo) a la siguiente dirección de correo electrónico: **<fraude@ovh.com>**.

> [!primary]
> 
> Tenga en cuenta que las informaciones que nos facilite podrán ser compartidas con terceros con el fin de luchar contra estas amenazas.
> 

### He introducido mis datos personales: ¿qué debo hacer?

Haga clic en los títulos que aparecen a continuación para mostrar las instrucciones.

/// details | **Si ha introducido su número de tarjeta bancaria en un sitio fraudulento**

Póngase en contacto rápidamente con su banco para bloquear su medio de pago. Indíqueles la fecha y, si es posible, la hora en que introdujo su número de tarjeta bancaria.

**Su banco es el único que puede cancelar las transacciones fraudulentas que podrían haberse realizado sin su conocimiento.**

///

/// details | **Si ha introducido su contraseña de OVHcloud en un sitio fraudulento**

Conéctese a su [área de cliente de OVHcloud](/links/manager) y cambie inmediatamente su contraseña.<br>

Encontrará, en nuestro guía « [Modificar la contraseña de su cuenta](/pages/account_and_service_management/account_information/manage-ovh-password) », el método para cambiar su contraseña desde su espacio cliente, así como nuestras recomendaciones para generar una contraseña eficaz y almacenarla en un gestor de contraseñas. 

Le recomendamos encarecidamente que active también la [autenticación en dos pasos](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa) para asegurar de forma duradera su cuenta.

> [!primary]
>
> Para recordar, con el fin de asegurar eficazmente sus datos, su contraseña debe :
>
> - contener al menos doce caracteres ;
> - contener al menos 1 letra mayúscula, 1 letra minúscula y 1 número ;
> - contener caracteres especiales (por ejemplo : `%`, `#`, `:`, `$`, `*`) ;
> - no estar tomada del diccionario ;
> - no contener información personal (su nombre, apellido o fecha de nacimiento) ;
> - no ser utilizada para varios accesos de usuario ;
> - ser almacenada en un gestor de contraseñas ;
> - ser cambiada cada tres meses ;
> - ser diferente de las contraseñas anteriores.
>

///

## Más información

[Definir y gestionar la contraseña de su cuenta](/pages/account_and_service_management/account_information/manage-ovh-password)

[Seguridad de su cuenta OVHcloud con la autenticación en dos pasos](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa)

[Seguridad de mi cuenta OVHcloud y gestión de mis datos personales](/pages/account_and_service_management/account_information/all_about_username)

Interactúe con nuestra [comunidad de usuarios](/links/community).
