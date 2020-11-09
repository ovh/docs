---
deprecated: true
title: 'Palveluiden uusinta OVH:n API-rajapinnan kautta'
slug: palvelun-uusinta-apin-kautta
excerpt: 'Katso, kuinka uusit palvelusi OVH:n API-rajapinnan kautta'
section: Aluksi
---

**Päivitetty 29.6.2018**


## Tavoite

OVH tarjoaa natiivisti palvelusi automaattista uusintaa. On kuitenkin mahdollista uusia palvelut myös APIa käyttämällä.

**Tässä ohjeessa käydään läpi, kuinka uusintaprosessi tapahtuu.**

## Edellytykset

- Olet kirjautunut [OVH:n APIin](https://api.ovh.com/console){.external}.
- Olet luonut tunnuksesi OVH:n APIin.

## Käytännössä

Käyttääksesi [uusinta-APIa](https://api.ovh.com/console/#/service/{serviceId}/renew#GET){.external} tarvitset `serviceId`:n. Tämä tieto on saatavilla esimerkiksi API-kutsulla `serviceInfos`:

> [!api]
>
> @api {GET} /vps/{serviceName}/serviceInfos
>

On myös mahdollista listata palvelusi APIlla service:

> [!api]
>
> @api {GET} /service
>


### Uusintastrategioiden listaus

Palvelulle saatavilla olevien eri uusintastrategioiden listaamiseksi käytä seuraavaa APIa:

> [!api]
>
> @api {GET} /service/{serviceId}/renew
>


`RenewDescription`-lista tulee näkyviin kahdella avaimella:
     
* `renewPeriod`: uusinnan kesto (ISO 8601 formatoitu)
* `strategiat`: `RenewStrategy`-lista (uusintastrategia).

`RenewStrategy` kuvaa hintaa sekä uusittavaa palvelulistaa. Verkkotunnuksen uusinta on yksi strategia, verkkotunnuksen ja sen webhotellin uusinta on toinen strategia. Strategiat listaavat siis kaikki mahdolliset yhdistelmät annetusta palvelusta, siihen liittyvistä palveluista, lisäpalveluista...

Tässä Python-esimerkki uusintatietojen hakemisesta:
     
```python
import ovh
client = ovh.Client()
     
client.get('/service/12345/renew',
includeOptions=False, // Include service s option(s) (type: boolean)
)
```
     
Tässä esimerkki vastauksesta, jota voimme tutkia. Esimerkki on otettu tietyltä ajanjaksolta.
     
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

Käytä APIa `renew` saadaksesi lisätietoja vastausformaatista.

> [!api]
>
> @api {GET} /service/{serviceId}/renew
>

 
### Uusintatilauksen teko

Luodaksesi uuden tilauksen uusintaa varten on tarkennettava uusittava tai uusittavat palvelut sekä tarkka ajanjakso.     
     
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

Mistä palautuu seuraava vastaus:
     
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

Tämän jälkeen on mahdollista maksaa tilaus APIlla `order`:

     
> [!api]
>
> @api {POST} /me/order/{orderId}/payWithRegisteredPaymentMean
>

### Esimerkki: VPS:n uusinta

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


## Lue lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.