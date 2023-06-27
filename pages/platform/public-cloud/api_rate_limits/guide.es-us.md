---
title: 'Límites de velocidad de las API de Public Cloud'
excerpt: "Descubra los límites y restricciones de la API Public Cloud"
updated: 2023-06-23
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## ¿Qué es un límite de velocidad?

Un límite de velocidad es una restricción que aplica la API al número de solicitudes que un cliente puede hacer a la API en un período de tiempo determinado.

## ¿Por qué imponer límites?

Los límites de velocidad son una práctica común para las API. Estas medidas se aplican por diversos motivos:

- nos ayudan a proteger el backend de la API contra los abusos o los malos usos de la API;
- garantizan una mejor calidad del servicio en la API gracias a un acceso equitativo a la API.

Por ejemplo, un script defectuoso o mal optimizado podría intentar utilizar la API en exceso, lo que podría provocar problemas de rendimiento en el backend de la API. 

Al establecer límites de velocidad, nos aseguramos de que la API pueda mantener una experiencia fluida y coherente para todos los clientes.

## ¿Cuáles son los límites de velocidad para nuestra API?

### Keystone (API de identidad OpenStack)

Aplicamos límites de ancho de banda a nivel de usuario** de OpenStack.

Un usuario puede realizar **60 peticiones por minuto** antes de recibir una respuesta HTTP 429.

### Nova (API de cálculo OpenStack)

Aplicamos límites de ancho de banda en el nivel de **proyecto** de OpenStack.

Un proyecto puede realizar **20 peticiones por segundo** antes de recibir una respuesta HTTP 429.

### Neutron (API red OpenStack)

Aplicamos límites de ancho de banda en el nivel de **proyecto** de OpenStack.

Un proyecto puede realizar **20 peticiones por segundo** antes de recibir una respuesta HTTP 429.

### Glance (API de imagen OpenStack)

Aplicamos límites de ancho de banda en el nivel de **proyecto** de OpenStack.

Un proyecto puede realizar **20 peticiones por segundo** antes de recibir una respuesta HTTP 429.

### Cinder (API de cálculo OpenStack)

Aplicamos límites de ancho de banda en el nivel de **proyecto** de OpenStack.

Un proyecto puede realizar **20 peticiones por segundo** antes de recibir una respuesta HTTP 429.

## ¿Cómo funcionan los límites de velocidad?

Si realiza demasiadas solicitudes de tokens a Keystone (la API de identidad) o envía demasiadas solicitudes a un extremo de la API como Nova (la API de cálculo), el extremo comenzará a responder con un código de respuesta **HTTP 429** que contiene un objeto JSON como éste:

```json
{
    "error": {
        "status": "429 Too Many Requests",
        "message": "Too Many Requests"
    }
}
```

## ¿Cómo puedo asegurarte de que no estás haciendo demasiadas peticiones?

Le recomendamos que reduzca el número de llamadas a la API realizadas por su automatización, para que permanezca por debajo del límite de velocidad del extremo.

Por lo general, esto puede ocurrir cuando se realizan varias consultas en paralelo (utilizando varios procesos o subprocesos).

Existen varias formas de mejorar la eficacia de la automatización, como el almacenamiento en caché o el uso de mecanismos de cancelación de reintentos (*retry backoffs*).

### Usar caché

Una de las opciones para reducir el número de llamadas es utilizar la caché.

Por ejemplo, un token keystone es válido 24 horas después de su emisión. ¡Puede solicitar una sola ficha, conservarla en caché y reutilizarla durante todo el día!

### Implementar el *retry backoff*

Si realmente necesita obtener información regular de la API, puede implementar una automatización de reintentos de consultas, junto con una desactivación exponencial aleatoria.

Si vuelve a intentarlo con una función de desactivación exponencial, significa que está suspendiendo rápidamente cuando se detecta un error de límite de rendimiento y, a continuación, vuelve a intentar la solicitud que ha fallado.<br>
Si la solicitud vuelve a fallar, se aumenta el tiempo de espera y se repite el proceso.<br>
Esta operación continuará hasta que se complete la solicitud o se alcance el número máximo de reintentos.

Este enfoque tiene muchas ventajas:

- los reintentos automáticos le permiten recuperar errores de límite de velocidad sin bloqueo ni pérdida de datos;
- la desactivación exponencial le permite realizar sus primeros intentos rápidamente, beneficiándose de plazos más largos en caso de fracaso de sus primeros intentos;
- la adición de un retraso aleatorio evita que todos los intentos se realicen al mismo tiempo.

Tenga en cuenta que las solicitudes infructuosas no entran en el cálculo de su límite de velocidad. Por lo tanto, el reenvío continuo de una solicitud podría funcionar, pero podemos cambiar este comportamiento en el futuro. Le recomendamos que no confíe en este mecanismo.

Estos son algunos ejemplos de librerías conocidas por implementar la función *retry backoff* en python:

- tenacity: <https://pypi.org/project/tenacity/>
- backoff: <https://pypi.org/project/backoff/>

## Ir más allá

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.