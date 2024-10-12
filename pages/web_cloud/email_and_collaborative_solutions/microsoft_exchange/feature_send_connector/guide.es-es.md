---
title: Configurar un conector de envío en su plataforma Private o Trusted Exchange
excerpt: Cómo añadir un conector de envío SMTP a la plataforma Exchange de OVHcloud
updated: 2023-11-06
---

<style>
 pre {
     font-size: 14px !important;
 }
 pre.bgwhite {
   background-color: #fff !important;
   color: #000 !important;
   font-family: monospace !important;
   padding: 5px !important;
   margin-bottom: 5px !important;
 }
 pre.bgwhite code {
   background-color: #fff !important;
   border: solid 0px transparent !important;
   font-family: monospace !important;
   font-size: 0.90em !important;
   color: #000 !important;
 }
 .small {
     font-size: 0.90em !important;
 }
</style>

## Objetivo

Añadir un conector de envío SMTP a su plataforma Exchange permite, para una o varias direcciones de correo Exchange, enviar emails pasando por un servidor de envío externo a su plataforma Exchange. Puede utilizarse, por ejemplo, para campañas de envío masivo de correo o para utilizar una solución antispam externa. Solo las direcciones de correo asociadas al conector de envío utilizarán este conector.

**Esta guía explica cómo configurar un conector de envío en la plataforma Private Exchange.**

**Caso práctico**

La dirección de correo **newsletter@mydomain.ovh** está asociada al conector de envío (Send Connector) configurado en la plataforma Exchange. La dirección **@mydomain.ovh** no está asociada al conector de envío.

![send connector](images/send-connector01.png){.thumbnail}

Este es el contexto del diagrama anterior:

- **contact@mydomain.ovh** envía un mensaje de correo electrónico a la dirección **mary.johnson@guides.ovh** : se trata de un envío normal, ya que el conector de envío no se ha asociado a la dirección **contact@mydomain.ovh**. **mary.johnson@guides.ovh** recibe el correo electrónico del servidor de envío de la plataforma Exchange (*Outgoing mail server*).
- **newsletter@mydomain.ovh** envía un mensaje de correo electrónico a la dirección **john.smith@guias.ovh** : **newsletter@mydomain.ovh** se ha asociado al conector de envío, **john.smith@guias.ovh** recibirá el correo electrónico del servidor de envío del conector (*Send Connector*) configurado en la plataforma Exchange.

## Requisitos

- Haber contratado una plataforma [Private Exchange de OVHcloud](/links/web/emails-private-exchange) o [Trusted Exchange de OVHcloud](/links/web/emails-trusted-exchange).
- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager).
- Estar conectado a la [API de OVHcloud](https://api.ovh.com/).
- Tener los parámetros necesarios para configurar el conector de envío. Contacte con el proveedor de servicios que le ofrezca el servicio.

## Procedimiento

La instalación de un conector de envío se realiza en 3 pasos.

- [1. Añadir el conector de envío a su plataforma](#addconnector): Introduzca los parámetros del conector de envío que le haya transmitido su proveedor.
- [2. Configurar una dirección de correo electrónico en un conector de envío](#addaddress): Asocie el conector de envío a una o varias direcciones de correo electrónico para que las envíen a través de este conector durante el envío .
- [3. Verificar que su dirección de correo electrónico utiliza el conector de envío](#checkheader): realizar un envío desde una dirección de correo electrónico configurada con un conector y recuperar el encabezado del correo electrónico desde la dirección de correo electrónico de recepción para comprobar que el correo electrónico se ha enviado correctamente a través del conector de envío.

Esta guía también incluye otras operaciones útiles sobre los conectores de envío.

- [Eliminar un conector de envío asociado a una dirección de correo](#removeaddress)
- [Establecer un conector de envío como servidor de envío predeterminado](#defaultconnector)
- [Listas de otras llamadas API relacionadas con los conectores de envío](#apilist)

### Añadir un conector de envío a su plataforma Exchange <a name="addconnector"></a>

> [!warning]
>
> La adición de un conector de envío está reservada y prevista para las ofertas [Private Exchange OVHcloud](/links/web/emails-private-exchange) y [Trusted Exchange OVHcloud](/links/web/emails-trusted-exchange). Si activa un conector de envío en un servicio Exchange de OVHcloud distinto de los mencionados anteriormente, nuestros administradores pueden desactivarlo en cualquier momento por motivos de seguridad.

Antes de empezar, necesitará la siguiente información. Deben ser proporcionados por el proveedor que suministra el conector de envío.

- la dirección del servidor de envío (SMTP)
- el puerto utilizado para el envío (por ejemplo: 587)
- El nombre de usuario asociado (por ejemplo, una dirección de correo electrónico) **puede ser opcional en función del conector de envío**.
- La contraseña asociada al nombre de usuario , **puede ser opcional en función del conector de envío**.

A continuación, conéctese a la API de OVHcloud con sus claves de acceso. Para más información, consulte nuestra guía [Primeros pasos con la API de OVHcloud ](/pages/manage_and_operate/api/first-steps).

Para añadir un conector de envío a su plataforma Exchange, utilice la siguiente llamada a la API.

> [!api]
>
> @api {v1} /email/exchange POST /email/exchange/{organizationName}/service/{exchangeService}/sendConnector

- `organizationName` : Introduzca el nombre de su plataforma Exchange con el formato «private-zz111111-1» o «dedicated-zz11111-1».
- `exchangeService` : Introduzca el nombre de su plataforma Exchange con el formato «private-zz111111-1» o «dedicated-zz11111-1».
- `displayName`: nombre mostrado del conector de envío.
- `maxSendSize`: tamaño máximo, en MB, de un mensaje de correo electrónico cuando se envía (100MB máximo y por defecto si no se pone nada).
- `password`: contraseña asociada al usuario del conector de envío.
- `port`: Puerto utilizado para el envío.
- `requireTLS`: usar TLS de seguridad en el envío.
- `smartHost`: dirección del conector de envío (SMTP).
- `smartHostAuthMechanism`: mecanismo de autenticación utilizado para el conector de envío.
- `user`: usuario asociado al conector de envío.

Este es el resultado:

``` console
{
    todoDate: "2023-09-25T14:06:02+02:00"
    id: 113924189
    finishDate: null
    function: "addSendConnector"
    status: "todo"
}
```

Una vez creado el conector de envío, utilice la siguiente llamada a la API para recuperar su ID (identificador).

> [!api]
>
> @api {v1} /email/exchange GET email/exchange/{organizationName}/service/{exchangeService}/sendConnector

- `organizationName` : Introduzca el nombre de su plataforma Exchange con el formato «private-zz111111-1» o «dedicated-zz11111-1».
- `exchangeService` : Introduzca el nombre de su plataforma Exchange con el formato «private-zz111111-1» o «dedicated-zz11111-1».

Este es el resultado:

``` console
[
    29
]
```

Puede consultar los detalles de su conector de envío utilizando esta API: <a name="idconnector"></a>

> [!api]
>
> @api {v1} /email/exchange GET /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}

- `organizationName` : Introduzca el nombre de su plataforma Exchange con el formato «private-zz111111-1» o «dedicated-zz11111-1».
- `id`: Introduzca el ID del conector de envío, que se obtiene como número en el paso anterior.
- `exchangeService` : Introduzca el nombre de su plataforma Exchange con el formato «private-zz111111-1» o «dedicated-zz11111-1».

Este es el resultado:

``` console
{
    smartHost: "smtp-relay.example.com"
    displayName: "testconnector"
    state: "ok"
    maxSendSize: 100
    smartHostAuthMechanism: "basicAuthRequireTLS"
    port: 587
    lastUpdateDate: null
    creationDate: "2023-09-25T14:06:02+02:00"
    taskPendingId: 0
    id: 29
    requireTLS: true
}
```

### Configurar una dirección de correo electrónico para utilizar un conector de envío <a name="addaddress"></a>

Para poder enviar mensajes de correo a través de un conector de envío, es necesario asociarlo a una o varias direcciones de correo.

Utilizar la llamada API de configuración de una cuenta Exchange para añadir el ID de su conector de envío a una dirección de correo electrónico:

> [!api]
>
> @api {v1} /email/exchange PUT /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}

- `organizationName` : Introduzca el nombre de su plataforma Exchange con el formato «private-zz111111-1» o «dedicated-zz11111-1».
- `primaryEmailAddress` : Introduzca una de las direcciones de correo electrónico de su plataforma Exchange a la que quiera asociar el conector de envío.
- `exchangeService` : Introduzca el nombre de su plataforma Exchange con el formato «private-zz111111-1» o «dedicated-zz11111-1».
- `Account`: Aquí es donde se introduce la información asociada a la dirección de correo electrónico. **Solo vamos a ver la línea relativa al conector de envío**.
    - `sendConnectorId` : introduzca el ID del conector de envío, que se obtiene como número en [el paso anterior](#idconnector).
    - Marque la casilla `deleteVirus` (si aún no está marcada) para evitar errores al ejecutar la llamada a la API

El resultado es el siguiente:

``` console
{
    null
}
```

### Probar el conector de envío <a name="checkheader"></a>

Si su configuración se ajusta a la información transmitida por el proveedor del conector de envío, su dirección de correo electrónico enviará los mensajes a través de este conector de envío. No es necesario realizar ninguna operación especial en el envío, solo enviar desde la dirección o direcciones de correo asociadas al conector de envío.

Para probar su envío, envíe un mensaje de correo electrónico desde una dirección que esté asociada al conector de envío a una dirección de prueba que haya elegido y que pueda consultar. Una vez enviado el mensaje de correo de prueba, conéctese a la dirección de destino y observe el encabezado del mensaje de correo para comprobar que el envío se ha realizado correctamente a través del conector de envío. Si lo necesita, consulte nuestra guía [Recuperar el encabezado de un mensaje de correo](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_headers) electrónico.

**Ejemplo de encabezado**

La dirección de correo electrónico **newsletter@mydomain.ovh** envía un mensaje a la dirección **john.smith@guides.ovh**. La dirección de correo electrónico **newsletter@mydomain.ovh** se ha asociado al conector de envío. El conector de envío tiene el nombre de dominio **sender-id.example.com**

A continuación ofrecemos un ejemplo de encabezado de un mensaje de correo electrónico enviado desde un servicio Private Exchange que utiliza un conector de envío, en el contexto anteriormente citado:

&lt;robert@hisdomain.ovh&gt;

<pre class="bgwhite"><code>Return-Path: &lt;bounces-249164590-newsletter=mydomain.ovh@sender-id.example.com&gt;
Delivered-To: john.smith@guides.ovh
Received: from localhost (HELO queue) (127.0.0.1)
    by localhost with SMTP; 28 Feb 2023 09:51:02 +0200
Received: from unknown (HELO output28.mail.ovh.net) (192.168.11.93)
    by 192.168.1.2 with AES256-GCM-SHA384 encrypted SMTP; 28 Feb 2023 09:51:02 +0200
Received: from vr45.mail.ovh.net (unknown [10.101.8.45])
    by out28.mail.ovh.net (Postfix) with ESMTP id 4PQqLG4KHRzRxRQZj
    for &lt;john.smith@guides.ovh&gt;; Tue, 28 Feb 2023 07:51:02 +0000 (UTC)
Received: from in31.mail.ovh.net (unknown [10.101.4.31])
    by vr45.mail.ovh.net (Postfix) with ESMTP id 4PQqLF6ZBMz37ZHNP
    for &lt;john.smith@guides.ovh&gt;; Tue, 28 Feb 2023 07:51:01 +0000 (UTC)
Received-SPF: Pass (mailfrom) identity=mailfrom; client-ip=11.22.333.44; helo=sender-id.example.com; envelope-from=bounces-249164590-newsletter=mydomain.ovh@sender-id.example.com; receiver=john.smith@guides.ovh
Authentication-Results: in31.mail.ovh.net;
    dkim=pass (1024-bit key; unprotected) header.d=smtp.example.com header.i=@smtp.example.com header.b="HDetLEPl";
    dkim-atps=neutral
Received: from sender-id.example.com (sender-id.example.com [11.22.333.44])
    by in31.mail.ovh.net (Postfix) with ESMTPS id 4PQsPF43SEm78WdxQ
    for &lt;john.smith@guides.ovh&gt;; Tue, 28 Feb 2023 07:51:01 +0000 (UTC)
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=smtp.example.com;
    q=dns/txt; s=mail; bh=gZnUUk4TldsnAE7L+M9zwjuOeOmD6FwV4Yyq99XN2a0=;
    h=from:subject:date:to:mime-version:content-type:list-unsubscribe:x-csa-complaints:list-unsubscribe-post;
    b=HDiySKAl0J78ByyGlPjCVc+zvEv/DP9NkfUdso8DkB5z1Lig4rfbqCLnD6SE6wh7sjsZMsae0gk
    Muy0Uur0tw2nWq/WI94O4grD/KAWWC+jo2w/1+0ol1VCQN2+zQEhM+HJj4pcnn+MfU/RrXLkXfDV
    BLfqJiRcWJCQ3fy3Gag=
Received: by smtp-relay.smtp.example.com with ESMTP id 12185513-794a-4762-b3ee-a4044d30975e; Tue Feb 28 2023 07:51:00 GMT+0000
X-Mailin-EID: MjAxMTY0NTkwfm5vLXJlcGx5QHRlc3QtbXV0dS5jb21%2BPDE2N2U1NdkfOTQ3MzQ1YWFiNzY3NWY3ZmJkMWUzZGJkQHRlYW1qZXJlbS5vdmg%2B25ead5LmQuc2VuZGVyLXNpYi5jb20%3D
To: &lt;john.smith@guides.ovh&gt;
Date: Tue, 28 Feb 2023 07:50:56 +0000
Subject: Test SBR 3 (SIB)
Message-Id: &lt;12185193-354a-4762-b3ee-a40484d30975e@smtp-relay.smtp.example.com&gt;
Origin-messageId: &lt;167e568a947345aab7675f7fbd1e3dbd@mydomain.ovh&gt;
Thread-Index: AQHZS0ljK1OFDltwD80S81Qo68wiBIQ==
Accept-Language: fr-FR, en-US
Content-Language: fr-FR
X-MS-Has-Attach:
X-MS-TNEF-Correlator:
x-mclm-sbr-processed: true
MIME-Version: 1.0
X-sib-id: 8dUZE2ztHUSpKwRy5O0fOawZARq-Dh8BNrytyOAwG9i3ybk5nxMfOvwZLeo778wLsYKejwcxuIEci6PKSzh3d4X7w126g-32syWTSQKRPQZTyxdXonPcl3lqm3pXkNolSaGbfG4dHY38OoEF7aXWMGvRsJtNlvsy1sEx8vGFOpxg_3cK
X-CSA-Complaints: csa-complaints@eco.de
From: &lt;newsletter@mydomain.ovh&gt;
</code></pre>

### Eliminar un conector de envío asociado a una dirección de correo <a name="removeaddress"></a>

Para retirar un conector de envío asociado a una cuenta de la plataforma Exchange, utilice la llamada API de configuración de la cuenta Exchange correspondiente para cambiar el ID de su conector de envío por el ID del servidor de envío de su plataforma Exchange:

> [!api]
>
> @api {v1} /email/exchange PUT /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}

- `organizationName` : Introduzca el nombre de su plataforma Exchange con el formato «private-zz111111-1» o «dedicated-zz11111-1».
- `primaryEmailAddress` : Introduzca una de las direcciones de correo de su plataforma Exchange, a la que quiere desvincular el conector de envío.
- `exchangeService` : Introduzca el nombre de su plataforma Exchange con el formato «private-zz111111-1» o «dedicated-zz11111-1».
- `Account` : Introduzca aquí la información relativa a la dirección de correo electrónico que ha indicado en el campo «primaryEmailAddress». Solo vamos a ver las líneas relacionadas con el conector de envío.
    - `sendConnectorId`: escriba « 0 » para establecer el identificador del servidor de envío de la plataforma de Exchange.
    - Marque la casilla de verificación `deleteVirus` (si aún no está marcada) para evitar errores.

El resultado es el siguiente:

``` console
{
    null
}
```

### Establecer un conector de envío como servidor de envío predeterminado <a name="defaultconnector"></a>

Es posible asociar automáticamente un conector de envío cada vez que añada una cuenta Exchange a su plataforma. De esta forma, todas las cuentas que se agreguen pasarán por defecto por el conector de envío que haya establecido.

Para ello, utilice la siguiente llamada a la API:

> [!api]
>
> @api {v1} /email/exchange PUT /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/changeDefaultSBR

- `organizationName` : Introduzca el nombre de su plataforma Exchange con el formato «private-zz111111-1» o «dedicated-zz11111-1».
- `exchangeService` : Introduzca el nombre de su plataforma Exchange con el formato «private-zz111111-1» o «dedicated-zz11111-1».
- `domainName`: introduzca el nombre de dominio que se beneficiará del conector de envío.
- `sbrDefault `: Dejar en blanco.
- `sendConnectorIdDefault`: Introduzca el ID del conector de envío, que se obtiene como número en [este paso](#idconnector).

El resultado es el siguiente:

``` console
{
    null
}
```

> [!warning]
>
> Para restablecer el servidor de envío predeterminado de la plataforma Exchange, escriba « 0 » en el cuadro `sendConnectorIdDefault`.

### Listas de otras llamadas API relacionadas con los conectores de envío <a name="apilist"></a>

- Recuperar los conectores de envío ya creados en un servicio Exchange:

> [!api]
>
> @api {v1} /email/exchange GET email/exchange/{organizationName}/service/{exchangeService}/sendConnector

- Eliminar un conector de envío existente:

> [!api]
>
> @api {v1} /email/exchange DELETE /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}

- Obtener los detalles de un conector de envío existente:

> [!api]
>
> @api {v1} /email/exchange GET /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}

- Editar un conector de envío existente:

> [!api]
>
> @api {v1} /email/exchange PUT /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}

- Cambiar el método de autenticación de un conector de envío existente:

> [!api]
>
> @api {v1} /email/exchange POST /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}/changeAuthentication

## Más información

[«Editar una zona DNS de OVH»](/pages/web_cloud/domains/dns_zone_edit)

[Añadir un dominio a un servicio Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
