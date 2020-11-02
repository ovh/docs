---
deprecated: true
title: 'Obnovení služeb prostřednictvím OVH API'
slug: obnoveni-sluzeb-api
excerpt: 'Zjistěte, jak provést manuální obnovení služeb pomocí OVH API'
section: 'První kroky'
---

**Poslední aktualizace 14/06/2018**


## Cíl

V nativní konfiguraci OVH je obnovení služby prováděno automaticky. Obnovení služeb lze však v případě zájmu provést i manuálně prostřednictvím OVH API.

**V následující příručce se dozvíte, jak provést manuální obnovení služeb pomocí OVH API.**

## Prerekvizity

- Přístup k [OVH API](https://api.ovh.com/console){.external}.
- [Přihlašovací údaje k OVH API](https://api.ovh.com/g934.first_step_with_api){.external}.

## Postup

Abyste mohli použít [API pro obnovení](https://api.ovh.com/console/#/service/{serviceId}/renew#GET){.external}, musíte mít k dispozici `serviceId` služby, kterou si přejete obnovit. Tento údaj je dostupný prostřednictvím `serviceInfos` API, například:

> [!api]
>
> @api {GET} /vps/{serviceName}/serviceInfos
>

Pro získání seznamu svých služeb můžete zároveň použít následující API:

> [!api]
>
> @api {GET} /service
>


### Získání seznamu dostupných strategií pro obnovení

Pokud si přejete získat seznam dostupných strategií pro obnovení dané služby, použijte následující API:

> [!api]
>
> @api {GET} /service/{serviceId}/renew
>


Zobrazí se `RenewDescription` seznam se dvěma klíči:
     
* `renewPeriod`: doba trvání obnovení služby
* `strategies`: seznam `RenewStrategy` (strategie obnovení).

`RenewStrategy` obsahuje informace o ceně a seznam služeb, které mají být obnoveny. Obnovení domény představuje jednu z možných strategií. Další strategií je například obnovení domény a webhostingového řešení. Strategie tedy představují seznam všech možných kombinací pro danou službu: asociované služby, volitelná rozšíření apod.

Příklad získání informací o obnovení služby v Pythonu:
     
```python
import ovh
client = ovh.Client()
     
client.get('/service/12345/renew',
includeOptions=False, // Include service s option(s) (type: boolean)
)
```
     
Příklad analyzovatelného výsledku (za daný časový úsek):
     
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

Více informací o formátu daného výsledku získáte pomocí `renew` API:

> [!api]
>
> @api {GET} /service/{serviceId}/renew
>

 
### Vytvoření nového požadavku na obnovení

Pro vytvoření nového požadavku na obnovení je zapotřebí specifikovat, které služby mají být obnoveny a na jak dlouho:     
     
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

Což má za následek následující odpověď:
     
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

Následně bude možné objednávku uhradit prostřednictvím `order` API:

     
> [!api]
>
> @api {POST} /me/order/{orderId}/payWithRegisteredPaymentMean
>

### Příklad: obnovení VPS

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


## Kam dál

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.