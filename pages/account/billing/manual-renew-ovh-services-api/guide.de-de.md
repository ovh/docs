---
title: 'Ihre Dienste über die OVHcloud API verlängern'
slug: dienst-via-api-verlaengern
excerpt: 'So verlängern Sie Ihre Dienste über die OVHcloud API'
section: 'Verlängerung der Dienste verwalten'
---

**Letzte Aktualisierung am 05.05.2020**

## Einleitung

OVHcloud bietet Ihnen standardmäßig die Möglichkeit, Ihre Dienste automatisch zu verlängern. Sie können diese jedoch auch manuell über die APIs verlängern.

**In dieser Anleitung erfahren Sie, wie Sie die Verlängerung via API durchführen.**


## Voraussetzungen

- Sie sind in der [OVHcloud API](https://api.ovh.com/console){.external} eingeloggt.
- Sie haben Ihre [Zugangsdaten für die OVHcloud API eingerichtet](https://docs.ovh.com/gb/en/customer/first-steps-with-ovh-api/).

## In der praktischen Anwendung

Um die [Verlängerungs-API](https://api.ovh.com/console/#/service/{serviceId}/renew#GET){.external} zu verwenden, benötigen Sie die `serviceId`. Diese Information finden Sie in der API `serviceInfos`, zum Beispiel:

> [!api]
>
> @api {GET} /vps/{serviceName}/serviceInfos
>

Sie können Ihre Dienste auch über die Dienst-API auflisten:

> [!api]
>
> @api {GET} /service
>


### Die verschiedenen Verlängerungsstrategien auflisten

Um alle verfügbaren Verlängerungsstrategien eines Dienstes aufzulisten, verwenden Sie folgende API:

> [!api]
>
> @api {GET} /service/{serviceId}/renew
>


Es erscheint eine `RenewDescription`-Liste mit zwei Schlüsseln:
     
* `renewPeriod`: Verlängerungsdauer (Format ISO 8601)
* `strategies`: `RenewStrategy`-Liste (Verlängerungsstrategie)

Eine `RenewStrategy` beschreibt einen Preis sowie eine Liste zu verlängernder Dienste. Eine Domain zu verlängern ist eine Strategie, eine Domain und das zugehörige Webhosting zu verlängern eine andere. Die Strategien zählen also alle möglichen Kombinationen eines bestimmten Dienstes auf: zugehörige Dienste, Optionen, ...

Hier ein Beispiel in Python, um die Verlängerungsinformationen anzuzeigen:
     
```python
import ovh
client = ovh.Client()
     
client.get('/service/12345/renew',
includeOptions=False, // Include service s option(s) (type: boolean)
)
```
     
Und hier ein Beispiel eines Ergebnisses über einen bestimmten Zeitraum:
     
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
           67890
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

Für mehr Informationen zum Ergebnisformat verwenden Sie bitte die `renew`-Api.

> [!api]
>
> @api {GET} /service/{serviceId}/renew
>

 
### Einen neuen Bestellschein für die Verlängerung erstellen

Um einen neuen Bestellschein für die Verlängerung zu erstellen, müssen die zu verlängernden Dienste sowie eine bestimmte Dauer angegeben werden:     
     
```python
import ovh
client = ovh.Client()
 
client.get('/service/12345/renew',
    dryRun=False, // Indicates if renew order is generated (type: boolean)
    duration='P1Y',
    services=[
        67890
        12345
    ]
)
```

Woraufhin folgende Antwort ausgegeben wird:
     
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
    "value": 7.57
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

Daraufhin kann der Bestellschein über die API `order` beglichen werden:

     
> [!api]
>
> @api {POST} /me/order/{orderId}/payWithRegisteredPaymentMean
>

### Beispiel: einen VPS verlängern

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


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.