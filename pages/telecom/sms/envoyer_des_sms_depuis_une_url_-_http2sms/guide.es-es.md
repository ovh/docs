---
title: 'Enviar SMS desde una URL'
slug: enviar-sms-desde-una-url
excerpt: 'Cómo enviar SMS desde una dirección http'
section: 'Enviar SMS'
---

**Última actualización: 04/11/2019** 

## Objetivo

Existen distintas formas de enviar SMS. Una de ellas es la herramienta Wget, que permite hacerlo directamente desde la barra de direcciones del navegador web.

**Esta guía explica cómo enviar SMS mediante la herramienta Wget.**

## Requisitos

- Haber creado un usuario de SMS desde el área de cliente de OVHcloud o a través de la API. Para ello, puede consultar la guía [Usuarios de SMS](https://docs.ovh.com/es/sms/usuarios-de-sms/).
- Disponer de una cuenta de SMS en OVHcloud con saldo de SMS.


## Procedimiento

Es posible enviar SMS mediante una petición HTTPS a la siguiente dirección: <https://www.ovh.com/cgi-bin/sms/http2sms.cgi?>, seguida de los parámetros obligatorios (y los opcionales que desee).

![URL de envío de sms](images/img_4011.jpg){.thumbnail}

### Parámetros obligatorios

La URL deberá tener el siguiente formato: 

```
https://www.ovh.com/cgi-bin/sms/http2sms.cgi?account=XXXXXXX&login=XXXXXXX&password=XXXXXXX&from=XXXXXXX&to=XXXXXXX&message=XXXXXXX
```

Los parámetros deben estar separados entre sí por el símbolo `&`. Sustituya las «X» por los valores correspondientes:

|Clave|Valor|
|---|---|
|account|Cuenta de SMS que vaya a utilizar (p. ej., sms-ab1234-1).|
|login|Usuario de SMS que vaya utilizar (usuario API), creado en la cuenta de SMS anterior.|
|password|Contraseña del usuario de SMS.|
|from|Uno de los remitentes declarados en su cuenta de SMS.|
|to|Número de teléfono móvil del destinatario del mensaje **en formato internacional** (00346XXXXXXXX para un número español). En caso de añadir varios destinatarios, estos deben separarse con una coma («,»).|
|message|El mensaje que quiera enviar. Para añadir saltos de línea en el texto del SMS, introduzca `%0d`.|

Por defecto, el mensaje se enviará de inmediato.

### Parámetros opcionales

Opcionalmente, es posible añadir otros parámetros, como los que se indican a continuación:

```
https://www.ovh.com/cgi-bin/sms/http2sms.cgi?&account=XXXXXXX&login=XXXXXXX&password=XXXXXXX&from=XXXXXXX&to=XXXXXXX1,XXXXXXX2&message=XXXXXXX&deferred=XXXXXXX&class=X&smsCoding=X&noStop=X
```

Sustituya las «X» por los valores correspondientes:

|Clave|Valor|
|---|---|
|deferred|Permite establecer una fecha de envío diferida, en formato hhmmddMMAAAA (p. ej., 125025112019 para enviar el mensaje el 25/11/2019 a las 12:50).|
|class|Clase del SMS, en formato de una cifra (para más información, consulte el primer recuadro informativo de abajo).|
|noStop|En Francia únicamente, indique 1 para no incluir la mención «STOP XXXXX» al final del mensaje en los SMS que no tengan carácter comercial.|
|tag|Cadena de un máximo de 20 caracteres que permite marcar los mensajes enviados.|
|contentType|En Francia únicamente, permite elegir el tipo de respuesta: text/xml, application/xml, text/json, application/json, text/plain, text/html (por defecto, se utiliza text/plain).|
|smsCoding|Tipo de codificación del SMS, en formato de una cifra (para más información, consulte el segundo recuadro informativo de abajo).|

> [!primary]
>
> **Posibles valores para la clave `class`:**
> 
> **0**: En los destinos compatibles, el mensaje se muestra directamente en la pantalla del móvil del usuario. No se guarda en la memoria del teléfono ni en la tarjeta SIM, sino que se borra una vez que el usuario confirma su visualización.
> 
> **1**: El mensaje se guarda en la memoria del teléfono y, si esta está llena, se almacena por defecto en la tarjeta SIM.
> 
> **2**: El mensaje se guarda en la tarjeta SIM.
> 
> **3**: El mensaje se transfiere a un dispositivo externo conectado al móvil (PDA, ordenador portátil...).
>

> [!primary]
>
> **Posibles valores para la clave `smsCoding`**
> 
> **1**: Codificación de 7 bits.
> 
> **2**: Codificación Unicode.
> 
>Si utiliza la codificación Unicode, el tamaño máximo del SMS se reducirá a 70 caracteres, frente a los 160 de la codificación de 7 bits.
>
>Para más información sobre los caracteres autorizados con codificación de 7 bits, consulte el [anexo](https://docs.ovh.com/es/sms/enviar-sms-desde-una-url/#anexo_2) que encontrará al final de esta guía.
>


### Analizar los envíos realizados

Una vez realizado el envío, recibirá un código de respuesta de la API indicándole si el SMS se ha enviado correctamente o si se ha producido un error.
La mención «OK» o un código superior a 100 e inferior a 200 indican que el mensaje se ha enviado correctamente.

Puede consultar a continuación la lista de códigos de respuesta de la API:

- **100 o 101**: Solicitud procesada.
- **201**: Falta un parámetro (p. ej., «missing login», «missing password»).
- **202**: Falta un parámetro (p. ej., «invalid tag: is too long», «invalid deferred time»).
- **401**: No hay IP autorizadas. Desde el área de cliente es posible aplicar restricciones por IP.


En caso de error, se indicará la causa:

* en el campo del mensaje, para JSON o XML;
* en la segunda línea, para HTML o text/plain.

#### XML

Si el envío se ha realizado correctamente:

```xml
<?xml version="1.0" encoding="UTF-8" ?><response><status>100</status><creditLeft>1987</creditLeft><smsIds><smsId>10867690</smsId></smsIds></response>
```

Si se ha producido un fallo en el envío:

```xml
<?xml version="1.0" encoding="UTF-8" ?><response><status>201</status><message>Missing message. For more informations : http://guides.ovh.com/httpToSms</message></response>
```


#### JSON

Si el envío se ha realizado correctamente:

```json
{"status":100,"creditLeft":"1987","SmsIds":["10867690"]}
```

Si se ha producido un fallo en el envío:

```json
{"status":201,"message":"Missing message. For more informations : http//:guides.ovh.com/httpToSms"}
```


#### HTML

Si el envío se ha realizado correctamente:

```html
<!DOCTYPE html>
<html>
<head>
    <title>HTTP2SMS</title>    
</head>
<body>
OK<br>
1987<br>
10867690<br>
</body>
</html>
```

Si se ha producido un fallo en el envío:

```html
<!DOCTYPE html>
<HTML>
<HEAD>
    <title>HTTP2SMS</title>
</HEAD>
<BODY>
KO<br>
Missing message. For more informations: https://docs.ovh.com/es/sms/enviar-sms-desde-una-url<br>
</BODY>
</HTML>
```

#### Text/plain

Si el envío se ha realizado correctamente:

```
OK
1987
10867690
```

Si se ha producido un fallo en el envío:

```
KO
Missing message. For more informations : http://guides.ovh.com/httpToSms
```

## Anexo

Las tablas que ofrecemos a continuación recogen los caracteres autorizados con codificación de 7 bits. Los caracteres de la tabla «**Extensiones**» cuentan por dos. Si utiliza caracteres que no figuran en estas tablas, la codificación pasará a Unicode y la longitud máxima del SMS se reducirá a 70 caracteres.

El tamaño máximo de un SMS es de 160 caracteres con codificación de 7 bits (norma GMS 03.38).

![Lista de caracteres de SMS](images/smsauthorizedcharacters.png){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/).
