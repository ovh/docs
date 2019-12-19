---
title: 'Enviar SMS con Java usando la API de OVHcloud'
slug: enviar-sms-con-java-usando-la-api-de-ovhcloud
excerpt: 'Cómo enviar SMS con Java usando la API RESTful de OVHcloud'
legacy_guide_number: g1670
section: 'Enviar SMS'
---

**Última actualización: 04/11/2019**

## Objetivo

Los SMS se utilizan con frecuencia para difundir información práctica, informar del estado de un pedido o una transacción, enviar alertas relativas a acontecimientos imprevistos o recordar citas. Esta guía explica cómo enviar un primer SMS con Java usando la API RESTful de OVHcloud. 

**Esta guía explica cómo enviar SMS con Java usando la API RESTful de OVHcloud.**

## Requisitos

- Tener un entorno de desarrollo en Java.
- Disponer de una cuenta de SMS en OVHcloud con saldo de SMS.

## Procedimiento

### Llamadas a la API

Debido a que todavía no existe un wrapper para Java, la llamada al servicio web deberá introducirse directamente en el código, sin añadir librerías adicionales. Para facilitar la lectura, el código de las llamadas a la API no se desarrolla al completo en esta guía (deserialización json, etc.).

En esta guía utilizamos dos llamadas a la API:

- Mostrar la lista de servicios SMS activos:

> [!api]
>
> @api {GET} /sms
>

- Enviar SMS:

> [!api]
>
> @api {POST} /sms/{serviceName}/jobs
>


### 1. Generar las claves

Para utilizar el servicio de SMS con la API, es necesario disponer de unas claves. Dichas claves se generan una sola vez para identificar la aplicación que enviará SMS. Es posible configurar su validez.

Genere las claves para su script (se crean todas a la vez) desde esta página: [https://eu.api.ovh.com/createToken/](https://eu.api.ovh.com/createToken/?GET=/sms/&GET=/sms/*/jobs/&POST=/sms/*/jobs/) (si accede desde este enlace, tendrá automáticamente los permisos necesarios para seguir los pasos que se explican en esta guía).

![Crear los tokens](images/img_2479.jpg){.thumbnail}

En el ejemplo de la imagen, hemos configurado los permisos para tener acceso a la información de la cuenta, ver los envíos pendientes y enviar SMS.

- GET /sms
- GET /sms/\*/jobs/
- POST /sms/\*/jobs/

El asterisco (\*) activa las llamadas a la API para todas sus cuentas de SMS. En caso de que gestione varias cuentas de SMS en la misma cuenta de OVHcloud, puede restringir las llamadas a una sola cuenta sustituyendo `/sms` por `/sms/NOMBRE_DE_LA_CUENTA` y `/sms/*/` por `/sms/NOMBRE_DE_LA_CUENTA/`.

De este modo, obtendrá las siguientes claves para su script:

- Application Key: identifica la aplicación
- Application Secret: autentifica la aplicación
- Consumer Key: autoriza a la aplicación para que acceda a las llamadas a la API elegidas

![Obtención de los tokens](images/img_2480.jpg){.thumbnail}

Una vez que el entorno esté listo y haya generado las claves, ya puede escribir su llamada a la API.


### 2. Conectarse a la API: consultar la cuenta de SMS

Pruebe la conexión a la API mostrando, por ejemplo, el nombre del servicio (**serviceName**):

```
import java.net.*;
import java.io.*;
import java.util.Date;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class Program {

    public static void main (String[] args)
    {
        getSmsAccount();
    }

    private static void getSmsAccount()
    {
        String AK = "your_app_key";
        String AS = "your_app_secret";
        String CK = "your_consumer_key";

        String METHOD = "GET";
        try {
            URL    QUERY  = new URL("https://eu.api.ovh.com/1.0/sms/");
            String BODY   = "";

            long TSTAMP  = new Date().getTime()/1000;

            // Creación de la firma
            String toSign    = AS + "+" + CK + "+" + METHOD + "+" + QUERY + "+" + BODY + "+" + TSTAMP;
            String signature = "$1$" + HashSHA1(toSign);

            HttpURLConnection req = (HttpURLConnection)QUERY.openConnection();
            req.setRequestMethod(METHOD);
            req.setRequestProperty("Content-Type",      "application/json");
            req.setRequestProperty("X-Ovh-Application", AK);
            req.setRequestProperty("X-Ovh-Consumer",    CK);
            req.setRequestProperty("X-Ovh-Signature",   signature);
            req.setRequestProperty("X-Ovh-Timestamp",   "" + TSTAMP);

            String inputLine;
            BufferedReader in;
            int responseCode = req.getResponseCode();
            if ( responseCode == 200 )
            {
            	// Obtención del resultado de la llamada
                in = new BufferedReader(new InputStreamReader(req.getInputStream()));
            }
            else
            {
                in = new BufferedReader(new InputStreamReader(req.getErrorStream()));
            }
            StringBuffer response   = new StringBuffer();
     
            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }
            in.close();
     
            // Visualización del resultado
            System.out.println(response.toString());

        } catch (MalformedURLException e) {
            final String errmsg = "MalformedURLException: " + e;
        } catch (IOException e) {
            final String errmsg = "IOException: " + e;
        }
    }

	// Cálculo del SHA1
    public static String HashSHA1(String text) 
    {
        MessageDigest md;
        try {
            md = MessageDigest.getInstance("SHA-1");
            byte[] sha1hash = new byte[40];
            md.update(text.getBytes("iso-8859-1"), 0, text.length());
            sha1hash = md.digest();
            return convertToHex(sha1hash);
        } catch (NoSuchAlgorithmException e) {
            final String errmsg = "NoSuchAlgorithmException: " + text + " " + e;
            return errmsg;
        } catch (UnsupportedEncodingException e) {
            final String errmsg = "UnsupportedEncodingException: " + text + " " + e;
            return errmsg;
        }
    }
    
    private static String convertToHex(byte[] data)
    { 
        StringBuffer buf = new StringBuffer();
        for (int i = 0; i < data.length; i++) { 
            int halfbyte = (data[i] >>> 4) & 0x0F;
            int two_halfs = 0;
            do { 
                if ((0 <= halfbyte) && (halfbyte <= 9)) 
                    buf.append((char) ('0' + halfbyte));
                else 
                    buf.append((char) ('a' + (halfbyte - 10)));
                halfbyte = data[i] & 0x0F;
            } while(two_halfs++ < 1);
        } 
        return buf.toString();
    }
}
```


Al ejecutar esta aplicación Java, obtendrá la lista de sus cuentas de SMS.

```
["sms-XX0000-1"]
```

### 3. Enviar un SMS

Para enviar SMS, utilice la siguiente llamada a la API:

> [!api]
>
> @api {POST} /sms/{serviceName}/jobs
>

> [!primary]
>
> **Solo para las cuentas de OVHcloud Francia:**
> 
> El parámetro **senderForResponse** permite utilizar un número corto para enviar SMS directamente, sin tener que crear un remitente alfanumérico (por ejemplo, su nombre).
> 
> Los números cortos también permiten recibir respuestas de los destinatarios de sus SMS, lo que puede ser útil para encuestas de satisfacción, aplicaciones de votación, juegos...
>
>


```
import java.net.*;
import java.io.*;
import java.util.Date;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class ProgramSendSms {

    public static void main (String[] args)
    {
        sendSms();
    }

    private static void sendSms()
    {
        String AK = "your_app_key";
        String AS = "your_app_secret";
        String CK = "your_consumer_key";

        String ServiceName = "sms-xx000000-1";
        String METHOD = "POST";
        try {
            URL    QUERY  = new URL("https://eu.api.ovh.com/1.0/sms/"+ServiceName+"/jobs/");
            String BODY   = "{\"receivers\":[\"+34612345678\"],\"message\":\"Test SMS OVHcloud\",\"priority\":\"high\",\"senderForResponse\":true}";

            long TSTAMP  = new Date().getTime()/1000;

            // Creación de la firma
            String toSign    = AS + "+" + CK + "+" + METHOD + "+" + QUERY + "+" + BODY + "+" + TSTAMP;
            String signature = "$1$" + HashSHA1(toSign);
            System.out.println(signature);

            HttpURLConnection req = (HttpURLConnection)QUERY.openConnection();
            req.setRequestMethod(METHOD);
            req.setRequestProperty("Content-Type",      "application/json");
            req.setRequestProperty("X-Ovh-Application", AK);
            req.setRequestProperty("X-Ovh-Consumer",    CK);
            req.setRequestProperty("X-Ovh-Signature",   signature);
            req.setRequestProperty("X-Ovh-Timestamp",   "" + TSTAMP);

            if(!BODY.isEmpty())
            {
                req.setDoOutput(true);
                DataOutputStream wr = new DataOutputStream(req.getOutputStream());
                wr.writeBytes(BODY);
                wr.flush();
                wr.close();
            }

            String inputLine;
            BufferedReader in;
            int responseCode = req.getResponseCode();
            if ( responseCode == 200 )
            {
            	// Obtención del resultado de la llamada
                in = new BufferedReader(new InputStreamReader(req.getInputStream()));
            }
            else
            {
                in = new BufferedReader(new InputStreamReader(req.getErrorStream()));
            }
            StringBuffer response   = new StringBuffer();
     
            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }
            in.close();
     
            // Visualización del resultado     
            System.out.println(response.toString());

        } catch (MalformedURLException e) {
            final String errmsg = "MalformedURLException: " + e;
        } catch (IOException e) {
            final String errmsg = "IOException: " + e;
        }
    }

    public static String HashSHA1(String text) 
    {
        MessageDigest md;
        try {
            md = MessageDigest.getInstance("SHA-1");
            byte[] sha1hash = new byte[40];
            md.update(text.getBytes("iso-8859-1"), 0, text.length());
            sha1hash = md.digest();
            return convertToHex(sha1hash);
        } catch (NoSuchAlgorithmException e) {
            final String errmsg = "NoSuchAlgorithmException: " + text + " " + e;
            return errmsg;
        } catch (UnsupportedEncodingException e) {
            final String errmsg = "UnsupportedEncodingException: " + text + " " + e;
            return errmsg;
        }
    }
    
    private static String convertToHex(byte[] data)
    { 
        StringBuffer buf = new StringBuffer();
        for (int i = 0; i < data.length; i++) { 
            int halfbyte = (data[i] >>> 4) & 0x0F;
            int two_halfs = 0;
            do { 
                if ((0 <= halfbyte) && (halfbyte <= 9)) 
                    buf.append((char) ('0' + halfbyte));
                else 
                    buf.append((char) ('a' + (halfbyte - 10)));
                halfbyte = data[i] & 0x0F;
            } while(two_halfs++ < 1);
        } 
        return buf.toString();
    }
}
```


Este es un ejemplo de respuesta:

```
{"totalCreditsRemoved":1,"invalidReceivers":[],"ids":[27814656],"validReceivers":["+34600000000"]}
```


En la respuesta se indica el crédito consumido (1, correspondiente a un destinatario válido). 

El mensaje por defecto incluye la mención STOP, que permite a los destinatarios dejar de recibir SMS. 

Si su SMS no tiene carácter publicitario, puede utilizar el parámetro `noStopClause` para desactivar la mención STOP.

Si su SMS tiene carácter publicitario, solo puede enviarlo de 8:00 a 20:00 de lunes a sábado.


## Más información

En la consola de la API ([https://api.ovh.com/console/#/sms](https://api.ovh.com/console/#/sms)) podrá descubrir otras llamadas que le permitirán integrar servicios SMS, tales como permitir la respuesta a los SMS (solo para las cuentas de OVHcloud Francia), envío masivo con un archivo CSV, envío de publicidad, seguimiento de los acuses de recibo...

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://community.ovh.com).