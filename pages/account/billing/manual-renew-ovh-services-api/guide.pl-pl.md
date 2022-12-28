---
title: 'Odnawianie usług przy użyciu API OVHcloud'
slug: odnawianie-uslug-api-ovh
excerpt: 'Dowiedz się, jak odnawiać usługi przy użyciu API OVHcloud'
section: 'Pierwsze kroki'
---

**Ostatnia aktualizacja dnia 2018-08-06**

## Wprowadzenie

Domyślnie, OVHcloud oferuje automatyczne odnawianie usług. Istnieje jednak możliwość odnowienia usług przy użyciu API.

**Niniejszy przewodnik opisuje, w jaki sposób przeprowadzić operację odnowienia usługi.**

## Wymagania początkowe

- Zalogowanie do [API OVHcloud](https://api.ovh.com/console){.external}
- Utworzenie [danych identyfikacyjnych dla API OVH](https://docs.ovh.com/gb/en/api/first-steps-with-ovh-api/)

## W praktyce

Aby użyć [API do odnowienia usługi](https://api.ovh.com/console/#/service/{serviceId}/renew#GET){.external}, będziesz potrzebował `serviceId`. Informacja ta jest dostępna poprzez API, za pomocą `serviceInfos`:

> [!api]
>
> @api {GET} /vps/{serviceName}/serviceInfos
>

Możesz również skorzystać z API, aby uzyskać listę Twoich usług:

> [!api]
>
> @api {GET} /service
>


### Uzyskanie listy dostępnych strategii odnawiania

Aby uzyskać listę dostępnych strategii odnawiania usług, skorzystaj z następującego polecenia:

> [!api]
>
> @api {GET} /service/{serviceId}/renew
>


Lista `RenewDescription` pojawi się z dwoma kluczami:
     
* `renewPeriod`: czas, na jaki ma być odnowiona usługa (w formacie zgodnym z ISO 8601);
* `strategie`: lista `RenewStrategy` strategia odnawiania.

`RenewStrategy` określa cenę, a także listę usług do odnowienia.  Odnowienie samej domeny to jedna strategia, odnowienie domeny i hostingu to inna strategia. Strategie obejmują listę wszystkich możliwych kombinacji danej usługi: usługi powiązane, opcje...

Przykład pobrania informacji o odnowieniu w języku Python:
     
```python
import ovh
client = ovh.Client()
     
client.get('/service/12345/renew',
includeOptions=False, // Include service s option(s) (type: boolean)
)
```
     
Przykład wyniku, który możesz przeanalizować (w danym okresie czasu):
     
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
          "value": -1.99
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

Aby dowiedzieć się więcej o formacie wyniku, skorzystaj z API `renew`:

> [!api]
>
> @api {GET} /service/{serviceId}/renew
>

 
### Tworzenie zamówienia dotyczącego odnowienia usługi

Aby utworzyć zamówienie dotyczące odnowienia usługi, określ, którą usługę lub usługi chcesz odnowić oraz podaj okres, na jaki ma być odnowiona.     
     
```python
import ovh
client = ovh.Client()
 
client.get('/service/12345/renew',
    dryRun=False, // Indicates if renew order is generated (type: boolean)
    duration='P1Y',
    services=[
        67890,
        12345
    ]
)
```

Otrzymasz następującą odpowiedź:
     
```json
{
  "expirationDate": "2018-05-16T15:49:06+02:00",
  "password": "aBcD",
  "date": "2018-05-15T15:49:06+02:00",
  "priceWithTax": {
    "value": 45.44
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

Następnie zamówienie można opłacić za pośrednictwem API `order`:

     
> [!api]
>
> @api {POST} /me/order/{orderId}/payWithRegisteredPaymentMean
>

### Przykładowa operacja: odnowienie VPS

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
    def checkStrategy(choices, serviceId):

    order = client.post('/service/{}/renew'.format(serviceId),
        dryRun=False,
        duration=expectedRenewPeriod,
        services=[
           "serviceId":
       ]
   )

    client.post('/me/order/{}/payWithRegisteredPaymentMean'.format(order['orderId']),
        paymentMean='paypal',
        paymentMeanId=1234
    )
:if __name__ == '__main__':
 
    main()
 
```


## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.