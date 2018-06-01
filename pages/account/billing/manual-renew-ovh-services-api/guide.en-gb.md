---
title: 'Renewing your services via the OVH API'
slug: renewing-service-ia-api
excerpt: 'Find out how to renew your services via the OVH API'
section: 'Getting started'
---

**Last updated 1st June 2018**


## Objective

Natively, OVH offers you the option of renewing your solution automatically. However, you can also use OVH APIs to renew your services.

**This guide will explain how to proceed with this renewal process.**

## Requirements

- You need to be connected to the [OVH API](https://api.ovh.com/console){.external}.
- You need to have [created your login details for the OVH API](https://api.ovh.com/g934.first_step_with_api){.external}.

## Instructions

To use the [renewal API](https://api.ovh.com/console/#/service/{serviceId}/renew#GET){.external}, you will need your `serviceId`. You can get this information via the `serviceInfos` API, for example:

> [!api]
>
> @api {GET} /vps/{serviceName}/serviceInfos
>

You can also use the following API to list your services:

> [!api]
>
> @api {GET} /service
>


### List the different renewal strategies

If you want to list the different renewal strategies available for a given service, this is the API to use:

> [!api]
>
> @api {GET} /service/{serviceId}/renew
>


A `RenewDescription` list will appear with two keys:
     
* `renewPeriod`: a renewal period (in ISO 8601 format)
* `strategies`: a list of `RenewStrategy` (renewal strategies)

A `RenewStrategy` contains a price and a list of services to be renewed. Renewing a domain name is one strategy; renewing a domain name and its hosting plan is another. The strategies therefore list all potential combinations for a given service: associated services, options, etc.

Below is an example in Python for retrieving renewal information:
     
```python
import ovh
client = ovh.Client()
     
client.get('/service/12345/renew',
includeOptions=False, // Include service s option(s) (type: boolean)
)
```
     
Here is an example of a result that we can analyse, with the example being taken over a given period of time:
     
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

Please refer to the `renew` API for more information on the format of the result:

> [!api]
>
> @api {GET} /service/{serviceId}/renew
>

 
### Create a new purchase order for renewals

To create a new purchase order for a renewal, you will need to specify which services are to be renewed, and for which period:     
     
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

Which will give the following response:
     
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

You will now be able to settle this purchase order via the `order` API:

     
> [!api]
>
> @api {POST} /me/order/{orderId}/payWithRegisteredPaymentMean
>

### Example: renewing a VPS

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


## Go further

Join our community of users on <https://community.ovh.com/en/>.