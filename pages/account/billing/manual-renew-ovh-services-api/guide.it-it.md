---
title: 'Rinnovare un servizio tramite l’API OVHcloud'
slug: rinnovare-servizi-tramite-api
excerpt: 'Scopri come rinnovare un servizio utilizzando l’API OVHcloud'
section: 'Per iniziare'
---

**Ultimo aggiornamento: 10/09/2018**


## Obiettivo

Di base, OVHcloud ti propone il rinnovo automatico dei tuoi servizi ma è possibile eseguire il rinnovo anche attraverso le API.

**Questa guida ti mostra come rinnovare un servizio utilizzando le API OVHcloud.**

## Prerequisiti

- Essere connesso alle [API OVHcloud](https://api.ovh.com/){.external}
- Disporre delle [credenziali di accesso per connettersi alle API - EN](https://docs.ovh.com/gb/en/api/first-steps-with-ovh-api/){.external}

## Procedura

Per utilizzare l'[API di rinnovo](https://api.ovh.com/console/#/service/{serviceId}/renew#GET){.external}, è necessario avere il `serviceId`. Puoi ottenere questo dato con l’API `serviceInfos`, come nel seguente esempio:

> [!api]
>
> @api {GET} /vps/{serviceName}/serviceInfos
>

È inoltre possibile visualizzare la lista dei tuoi servizi con l’API service:

> [!api]
>
> @api {GET} /service
>


### Crea una lista delle diverse strategie di rinnovo

Per consultare le diverse strategie di rinnovo disponibili per un servizio, utilizza la seguente API:

> [!api]
>
> @api {GET} /service/{serviceId}/renew
>


Visualizzerai una lista di `RenewDescription` con due chiavi:
     
* `reniewPeriod`: una durata di rinnovo (formattata ISO 8601)
* `strategies`: una lista delle possibili strategie di rinnovo (`RenewStrategy`)

Una `RenewStrategy` descrive il prezzo e la lista di servizi da rinnovare. Ad esempio, rinnovare un dominio è un tipo di strategia diversa rispetto a rinnovare un dominio e il relativo hosting. Le strategie mostrano quindi tutte le combinazioni possibili di un determinato servizio: servizi associati, opzioni, ecc...

Di seguito, un esempio in Python per recuperare le informazioni di rinnovo:
     
```python
import ovh
client = ovh.Client()
     
client.get('/service/12345/renew',
includeOptions=False, // Include service s option(s) (type: boolean)
)
```
     
Questo è un esempio del tipo di risposta che si può ottenere per un servizio in un determinato periodo:
     
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

Per ulteriori informazioni sul formato della risposta, puoi fare riferimento all’API `renew`:

> [!api]
>
> @api {GET} /service/{serviceId}/renew
>

 
### Crea un nuovo buono d’ordine per il rinnovo

Per creare un nuovo buono d’ordine per il rinnovo, è necessario precisare i servizi da rinnovare e per quale periodo:    
     
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

E la risposta sarà la seguente:
     
```json
{
  "expirationDate": "2018-05-16T15:49:06+02:00",
  "password": "aBcD",
  "date": "2018-05-15T15:49:06+02:00",
  "priceWithTax": {
    "value": 45.44,
    "text": "45.44 \u20ac",
    "currencyCode": "EUR"
  },
 "tax": {
    "value": 7.57,
    "text": "7.57 \u20ac",
    "currencyCode": "EUR"
  },
  "pdfUrl": "https://www.ovh.com/cgi-bin/order/displayOrder.cgi?orderId=123456789&orderPassword=aBcD",
  "orderId": 123456789,
  "url": "https://www.ovh.com/cgi-bin/order/displayOrder.cgi?orderId=123456789&orderPassword=aBcD",
  "priceWithoutTax": {
    "value": 37.87,
    "text": "37.87 \u20ac",
    "currencyCode": "EUR"
  },
 "retractionDate": null
}
```

A questo punto, sarà possibile saldare questo buono d’ordine tramite l’API `order`:

     
> [!api]
>
> @api {POST} /me/order/{orderId}/payWithRegisteredPaymentMean
>

### Esempio: rinnovare un VPS

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


## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.