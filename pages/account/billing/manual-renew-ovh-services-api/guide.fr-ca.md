---
title: 'Renouveler mes services via l''API OVHcloud'
slug: renouveler-manuellement-service-via-api
excerpt: 'Découvrez comment renouveler vos services via l’API OVHcloud'
section: 'Gérer mes services et leur renouvellement'
---

**Dernière mise à jour le 14 juillet 2020**


## Objectif

Nativement, OVH vous propose le renouvellement automatique de votre offre. Il est néanmoins possible de renouveler vos services en utilisant les API.

**Ce guide vous explique comment effectuer cette opération de renouvellement.**

## Prérequis

- Être connecté aux [API OVH](https://api.ovh.com/console){.external}.
- Avoir [créé ses identifiants pour l'API OVH](https://docs.ovh.com/ca/fr/customer/first-steps-with-ovh-api/){.external}.

## En pratique

Pour utiliser l'[API de renouvellement](https://api.ovh.com/console/#/service/{serviceId}/renew#GET){.external}, vous aurez besoin du `serviceId`. Cette information est disponible avec l'API `serviceInfos`, par exemple :

> [!api]
>
> @api {GET} /vps/{serviceName}/serviceInfos
>

Il est également possible de lister vos services avec l'API service :

> [!api]
>
> @api {GET} /service
>


### Lister les différentes stratégies de renouvellement

Afin de lister les différentes stratégies de renouvellement disponibles pour un service, voici l'API à utiliser :

> [!api]
>
> @api {GET} /service/{serviceId}/renew
>


Une liste de `RenewDescription` va apparaître avec deux clés :
     
* `renewPeriod`: une durée de renouvellement (formatée ISO 8601) ;
* `strategies` : une liste de `RenewStrategy` (stratégie de renouvellement).

Une `RenewStrategy` décrit un prix ainsi qu'une liste de services à renouveler. Renouveler un nom de domaine est une stratégie, renouveler un nom de domaine et son hébergement en est une autre. Les stratégies listent donc toutes les combinaisons possibles d'un service donné : services liés, options...

Voici un exemple en Python pour récupérer les informations du renouvellement :
     
```python
import ovh
client = ovh.Client()
     
client.get('/service/12345/renew',
includeOptions=False, // Include service s option(s) (type: boolean)
)
```
     
Voici un exemple du retour que nous pouvons examiner, l'exemple étant pris sur une période donnée :
     
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

Référez-vous à l'API `renew`pour plus d'information sur le format de retour :

> [!api]
>
> @api {GET} /service/{serviceId}/renew
>

 
### Créer un nouveau bon de commande pour le renouvellement

Pour créer un nouveau bon de commande pour le renouvellement, il va falloir préciser le ou les services à renouveler, ainsi qu'une période spécifique :     
     
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

Ce qui retournera la réponse suivante :
     
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

Il sera alors possible de régler ce bon de commande via l'API `order` :

     
> [!api]
>
> @api {POST} /me/order/{orderId}/payWithRegisteredPaymentMean
>

### Exemple : renouveler un VPS

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


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
