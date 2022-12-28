---
title: 'Renovar os seus serviços através da API OVHcloud'
slug: renovar-servico-atraves-api
excerpt: 'Saiba como renovar os seus serviços através da API OVHcloud'
section: Introdução
---

**Última atualização: 06/08/2018**


## Sumário

Inerentemente, a OVHcloud oferece-lhe a renovação automática dos seus serviços. No entanto, é possível renová-los por meio das API.

**Este guia explica como efetuar esta operação de renovação.**

## Requisitos

- Estar conectado às [API OVHcloud](https://api.ovh.com/console){.external}.
- Ter [criado os ID para a API OVHcloud -EN](https://docs.ovh.com/gb/en/api/first-steps-with-ovh-api/).

## Instruções

Para utilizar a [API de renovação](https://api.ovh.com/console/#/service/{serviceId}/renew#GET){.external}, vai precisar do `serviceId`. Esta informação está disponível na API `serviceInfos`; por exemplo:

> [!api]
>
> @api {GET} /vps/{serviceName}/serviceInfos
>

Também é possível listar os seus serviços através da seguinte API:

> [!api]
>
> @api {GET} /service
>


### Listar as diferentes estratégias de renovação

De modo a listar as diferentes estratégias de renovação disponíveis para um serviço, esta é a API a utilizar:

> [!api]
>
> @api {GET} /service/{serviceId}/renew
>


Vai aparecer uma lista de `RenewDescription` com duas chaves:
     
* `renewPeriod`: um período de renovação (em formato ISO 8601);
* `strategies`: uma lista de `RenewStrategy` (estratégia de renovação).

Uma `RenewStrategy` descreve um preço, bem como uma lista de serviços a renovar. Renovar um nome de domínio é uma estratégia; renovar um nome de domínio e o seu plano de armazenamento é outra. Portanto, as estratégias listam todas as combinações possíveis de um dado serviço: serviços associados, opções...

Aqui fica um exemplo em Phyton para obter as informações de renovação:
     
```python
import ovh
client = ovh.Client()
     
client.get('/service/12345/renew',
includeOptions=False, // Include service s option(s) (type: boolean)
)
```
     
De seguida fica um exemplo do resultado que podemos analisar, sendo o exemplo relativo a determinado período:
     
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

Recorra à API `renew` para obter mais informações acerca do formato de retorno:

> [!api]
>
> @api {GET} /service/{serviceId}/renew
>

 
### Criar uma nova nota de encomenda para a renovação

Para criar uma nova nota de encomenda para a renovação, será preciso especificar o(s) serviço(s) a renovar, bem como um período específico:     
     
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

O que dará a resposta seguinte:
     
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

Então já será possível pagar a nota de encomenda através da API `order`:

     
> [!api]
>
> @api {POST} /me/order/{orderId}/payWithRegisteredPaymentMean
>

### Exemplo: renovar um VPS

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


## Quer saber mais?

Fale com a nossa comunidade de utilizadores: <https://community.ovh.com/en/>.