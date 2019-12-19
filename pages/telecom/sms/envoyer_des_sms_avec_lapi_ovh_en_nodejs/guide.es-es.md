---
title: 'Enviar SMS con Node.js usando la API de OVHcloud'
excerpt: 'Cómo enviar SMS con Node.js usando la API RESTful de OVHcloud'
slug: enviar-sms-con-nodejs-usando-la-api-de-ovhcloud
legacy_guide_number: g1651
section: 'Enviar SMS'
---

**Última actualización: 04/11/2019**

## Objetivo

Los SMS se utilizan con frecuencia para difundir información práctica, informar del estado de un pedido o una transacción, enviar alertas relativas a acontecimientos imprevistos o recordar citas.

**Esta guía explica cómo enviar un SMS con Node.js usando la API RESTful de OVHcloud.**

## Requisitos

- Disponer de una cuenta de SMS en OVHcloud con saldo de SMS.
- Tener un servidor con Node.js y npm instalados. Ejemplo de instalación en Ubuntu:

```
$ sudo apt-get install nodejs npm
```

Más información sobre el proyecto [en GitHub](https://github.com/ovh/node-ovh).


## Procedimiento

La forma más rápida de obtener el wrapper Node.js para la API de OVHcloud es utilizar **npm** para añadir el módulo **ovh**:

```
$ npm install ovh
```

Se creará un directorio llamado **./node_modules/ovh/...**.

### 1. Generar las claves

Para utilizar el servicio de SMS con la API, es necesario disponer de unas claves. Dichas claves se generan una sola vez para identificar la aplicación que enviará SMS. Es posible configurar su validez.

Genere las claves para su script (se crean todas a la vez) desde esta página:
[https://api.ovh.com/createToken](https://eu.api.ovh.com/createToken/index.cgi?GET=/sms&GET=/sms/*/jobs/&POST=/sms/*/jobs/) (si accede desde este enlace, tendrá automáticamente los permisos necesarios para seguir los pasos que se explican en esta guía).

![generar los tokens](images/img_2462.jpg){.thumbnail}

En el ejemplo de la imagen, hemos configurado los permisos para tener acceso a la información de la cuenta, ver los envíos pendientes y enviar SMS.

- GET /sms
- GET /sms/\*/jobs/
- POST /sms/\*/jobs/


El asterisco (\*) activa las llamadas a la API para todas sus cuentas de SMS. En caso de que gestione varias cuentas de SMS en la misma cuenta de OVHcloud, puede restringir las llamadas a una sola cuenta sustituyendo `/sms` por `/sms/NOMBRE_DE_LA_CUENTA` y `/sms/\*/` por `/sms/NOMBRE_DE_LA_CUENTA/`.

De este modo, obtendrá las siguientes claves para su script:

- Application Key: identifica la aplicación
- Application Secret: autentifica la aplicación
- Consumer Key: autoriza a la aplicación para que acceda a las llamadas a la API elegidas


![Obtención de los tokens](images/img_2463.jpg){.thumbnail}

Una vez que el entorno esté listo y haya generado las claves, ya puede escribir su script Node.js.


### 2. Obtener el serviceName y enviar un SMS

Para obtener el serviceName (nombre de su cuenta de SMS) y enviar un SMS, puede utilizar el siguiente código (en caso de que solo tenga una cuenta):

```
var ovh = require('ovh')({
  appKey: 'your_app_key',
  appSecret: 'your_app_secret',
  consumerKey: 'your_consumer_key'
});
 
 // Obtener el serviceName (nombre de la cuenta de SMS)
ovh.request('GET', '/sms', function (err, serviceName) {
  if(err) {
    console.log(err, serviceName);
  }
  else {
    console.log("My SMS account is " + serviceName);
 
    // Enviar un simple SMS con un número corto utilizando el serviceName
    ovh.request('POST', '/sms/' + serviceName + '/jobs', {
      message: 'Hello World!',
      senderForResponse: true,
      receivers: ['0034600000000']
    }, function (errsend, result) {
      console.log(errsend, result);
    });
  }
});
```


Ejecute el script para enviar un primer SMS.

```
$ nodejs sms.js
My SMS account is sms-XXXXXXX-1
{ totalCreditsRemoved: 1,
  invalidReceivers: [],
  ids: [ 2700042‡ ],
  validReceivers: [ '+34600000000' ] }
```


En la respuesta se indica la cuenta de SMS (el serviceName), seguida del crédito consumido ( 1, correspondiente a un destinatario válido).


## Más información

En la consola de la API ([https://api.ovh.com/console/#/sms](https://api.ovh.com/console/#/sms)) podrá descubrir otras llamadas que le permitirán integrar servicios SMS, tales como permitir la respuesta a los SMS (solo para las cuentas de OVHcloud Francia), envío masivo con un archivo CSV, envío de publicidad, seguimiento de los acuses de recibo...


Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/).
