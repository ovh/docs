---
deprecated: true
title: 'Uw diensten verlengen via de OVH API'
slug: dienst-verlengen-via-api
excerpt: 'Ontdek hoe u uw diensten middels OVH‘s API kunt vernieuwen'
section: 'Aan de slag'
---

**Laatste update 25-05-2018**


## Introductie

OVH biedt uiteraard de mogelijkheid om uw oplossing automatisch te verlengen. U kunt dit echter ook handmatig via de OVH API doen.

**Deze handleiding legt uit hoe u uw diensten verlengt via OVH’s API.**

## Vereisten

- U moet ingelogd zijn op de [OVH API](https://api.ovh.com/){.external}.
- U moet uw inloggegevens voor de OVH API hebben aangemaakt.

## Instructies

Om de [verlengings-API](https://api.ovh.com/console/#/service/{serviceId}/renew#GET){.external} te gebruiken, hebt u uw `serviceId` nodig. Deze informatie kan worden verkregen via de API `serviceInfos`, bijvoorbeeld:

> [!api]
>
> @api {GET} /vps/{serviceName}/serviceInfos
>

U kunt ook de volgende API gebruiken om uw diensten te vermelden:

> [!api]
>
> @api {GET} /service
>


### Geef de verschillende verlengingsstrategieën weer

Als u een lijst wilt maken met de verschillende verlengingsstrategieën die beschikbaar zijn voor een bepaalde dienst, dan is dit de API die moet worden gebruikt:

> [!api]
>
> @api {GET} /service/{serviceId}/renew
>


Er verschijnt een `RenewDescription-lijst` met twee keys:
     
* `renewPeriod`: een verlengingsperiode (in ISO 8601-indeling);
* `strategies`: een lijst met `RenewStrategy` (verlengingsstrategieën).

Een `RenewStrategy` bevat een prijs en een lijst met te verlengen diensten. Verlenging van een domeinnaam is één strategie; het verlengen van een domeinnaam en het bijbehorende hostingplan is een andere. De strategieën vermelden daarom alle mogelijke combinaties voor een bepaalde dienst: bijbehorende services, opties, enz.

Een voorbeeld in Python voor het herstellen van verlengingsinformatie:
     
```python
import ovh
client = ovh.Client()
     
client.get('/service/12345/renew',
includeOptions=False, // Include service s option(s) (type: boolean)
)
```
     
Een voorbeeld van een resultaat dat we kunnen analyseren, waarbij het voorbeeld over een bepaalde periode wordt overgenomen:
     
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

Raadpleeg de `renew`-API voor meer informatie over de indeling van het resultaat:

> [!api]
>
> @api {GET} /service/{serviceId}/renew
>

 
### Een nieuwe bestelling aanmaken voor verlengingen

Om een nieuwe bestelling voor een verlenging te plaatsen, moet u aangeven welke dienst(en) moet(en) worden verlengd en voor welke periode:     
     
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

Dit zal de volgende respons opleveren:
     
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

U kunt nu deze bestelling via de `order`-API afhandelen:

     
> [!api]
>
> @api {POST} /me/order/{orderId}/payWithRegisteredPaymentMean
>

### Bijv. een VPS verlengen

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


## Verder

Ga in gesprek met andere communityleden op <https://community.ovh.com/en/>.