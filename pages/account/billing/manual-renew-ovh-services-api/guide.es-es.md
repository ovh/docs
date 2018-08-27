---
title: 'Renovar un servicio a través de la API de OVH'
slug: renovar-servicio-mediante-api
excerpt: 'Cómo renovar un servicio utilizando la API de OVH'
section: 'Primeros pasos'
---

**Última actualización: 27/08/2018**


## Objetivo

OVH ofrece de forma nativa la renovación automática de sus soluciones, aunque también es posible renovar un servicio utilizando la API.

**Esta guía explica cómo renovar un servicio a través de la API de OVH.**

## Requisitos

- Estar conectado a la [API de OVH](https://api.ovh.com/console){.external}.
- Disponer de las [claves para conectarse a la API de OVH](https://docs.ovh.com/gb/en/customer/first-steps-with-ovh-api/){.external}.

## Procedimiento

Para utilizar la [función de renovación de la API](https://api.ovh.com/console/#/service/{serviceId}/renew#GET){.external}, necesitará el **serviceId**. Puede obtener este dato con la función **serviceInfos**, como en el siguiente ejemplo:

> [!api]
>
> @api {GET} /vps/{serviceName}/serviceInfos
>

También puede ver la lista de sus servicios con la función **service**:

> [!api]
>
> @api {GET} /service
>


### Consultar las distintas estrategias de renovación

Para consultar las distintas estrategias de renovación disponibles para un servicio determinado, utilice la siguiente función:

> [!api]
>
> @api {GET} /service/{serviceId}/renew
>


Aparecerá una lista **RenewDescription** con dos propiedades:
     
* **renewPeriod**: Duración de renovación (en formato ISO 8601).
* **strategies**: Lista de posibles estrategias de renovación (**RenewStrategy**).

Una estrategia de renovación describe el precio y la lista de servicios que se pueden renovar. Por ejemplo, renovar un dominio es una estrategia distinta de renovar un dominio y su alojamiento. Las estrategias muestran todas las posibles combinaciones para una solución determinada: servicios asociados, opciones....

A continuación ofrecemos un ejemplo en Python para consultar la información de renovación:
     
```python
import ovh
client = ovh.Client()
     
client.get('/service/12345/renew',
includeOptions=False, // Include service s option(s) (type: boolean)
)
```
     
Este es un ejemplo del tipo de respuesta que se puede obtener para un servicio en un período determinado:
     
```json
[
  {
    "renewPeriod": "P1Y",
    "strategies": [
      {
        "services": [
          12345
        ],
        "price": {
          "value": 1.99
           },
           "servicesDetails": [
             {
               "serviceType": "Domain .ovh",
               "serviceId": 12345
           }
         ]
       },
       {
         "services": [
           67890,
           12345
           ],
           "price": {
           "value": 37.87
         },
         "servicesDetails": [
           {
             "serviceType": "Hosting Perso 2014",
             "serviceId": 67890
           },
           {
             "serviceType": "Domain .ovh",
             "serviceId": 12345
           }
         ]
       }
     ]
   }
 ]
```

Para más información sobre el formato de la respuesta, consulte la función **renew** de la API.

> [!api]
>
> @api {GET} /service/{serviceId}/renew
>

 
### Crear una nueva orden de pedido para la renovación

Para crear una nueva orden de pedido de renovación, deberá especificar qué servicios quiere renovar, así como el período de renovación deseado:     
     
```python
import ovh
client = ovh.Client()
 
client.post('/service/12345/renew',
    dryRun=False, // Indicates if renew order is generated (type: boolean)
    duration='P1Y',
    services=[
        67890,
        12345
    ]
)
```

Obtendrá una respuesta como la siguiente:
     
```json
{
  "expirationDate": "2018-05-16T15:49:06+02:00",
  "password": "aBcD",
  "date": "2018-05-15T15:49:06+02:00",
  "priceWithTax": {
    "value": 45.44,
    "text": "45.44 u20ac",
    "currencyCode": "EUR"
  },
 "tax": {
    "value": 7.57,
    "text": "7.57 u20ac",
    "currencyCode": "EUR"
  },
  "pdfUrl": "https://www.ovh.com/cgi-bin/order/displayOrder.cgi?orderId=123456789&orderPassword=aBcD",
  "orderId": 123456789,
  "url": "https://www.ovh.com/cgi-bin/order/displayOrder.cgi?orderId=123456789&orderPassword=aBcD",
  "priceWithoutTax": {
    "value": 37.87,
    "text": "37.87 u20ac",
    "currencyCode": "EUR"
  },
 "retractionDate": null
}
```

A continuación, podrá abonar la orden de pedido con la función **order** de la API:

     
> [!api]
>
> @api {POST} /me/order/{orderId}/payWithRegisteredPaymentMean
>

### Ejemplo: Renovar un VPS

```python
import ovh
client = ovh.Client()

myVps = "vps112233.ovh.net"
expectedRenewPeriod = "P3M"

def checkStrategy(choices, serviceId):
     
    for choice in choices:
       if choice['renewPeriod'] != expectedRenewPeriod:
           continue
       for strategy in choice['strategies']:
           services = strategy['services']
           if len(services) == 1 and serviceId in services:
                return True
     
raise ValueError('Unable to find expected service/renewPeriod in choices')
     
     
def main():
     
    serviceId = client.get('/vps/{}/serviceInfos'.format(myVps))['serviceId']

    choices = client.get('/service/{}/renew'.format(serviceId))
    checkStrategy(choices, serviceId)

    order = client.post('/service/{}/renew'.format(serviceId),
        dryRun=False,
        duration=expectedRenewPeriod,
        services=[
           serviceId
       ]
   )

    client.post('/me/order/{}/payWithRegisteredPaymentMean'.format(order['orderId']),
        paymentMean='paypal',
        paymentMeanId=1234
    )
:if __name__ == '__main__':
 
    main()
 
```


## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.