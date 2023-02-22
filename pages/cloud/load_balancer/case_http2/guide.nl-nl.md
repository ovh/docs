---
deprecated: true
title: Configuratie van HTTP/2 op een OVH Load Balancer
slug: lb-http2
excerpt: Ontdek hoe u HTTP/2 kunt configureren op een OVH Load Balancer
section: Use cases
updated: 2018-01-15
---

**Laatste update 01-02-2018**

## Introductie

De OVH Load Balancer ondersteunt momenteel niet het HTTP/2-protocol. U kunt deze beperking echter omzeilen door de TCP-modus te gebruiken met de ALPN-extensie van het TLS-protocol.


ALPN (Application-Layer Protocol Negotiation) is een TLS-extensie waarmee de toepassingslaag kan bepalen welk protocol wordt gebruikt (in dit geval h2).

**Deze handleiding kan u helpen een HTTP/2-dienst te maken met de OVH Load Balancer-oplossing. Hier zullen we deze dienst configureren om de lading te verdelen op verschillende servers die reageren met HTTP/2.**


## Vereisten

- U moet een TCP-front-end hebben gemaakt.
- U moet een TCP-farm hebben gemaakt, waaraan servers zijn toegevoegd.


## Instructies

> [!warning]
>
> De volgorde waarin u elementen maakt, is belangrijk: de routes moeten worden geconfigureerd voordat u ze aan regels koppelt.
> 


### Voeg een route toe

We gaan een route toevoegen aan onze dienst. 


#### Via de API

> [!faq]
>
> Dienst:
>
>> > [!api]
>> >
>> > @api {GET} /ipLoadbalancing/{serviceName}/http/farm/{farmId}
>> >
>>
>
> Instellingen:
>
>> > **serviceName***
>> >
>> >> `<ID van de Load Balancer>`
>> >
>> > **action**
>> >
>> >> **type**
>> >> >
>> >> > `"farm"`
>> >>
>> >> **target**
>> >> >
>> >> > `<ID van uw TCP-farm die de HTTP/2 moet beheren>`
>> >
>> > **frontendId**
>> >
>> >> `<ID van uw front-end tcp 443>`
>


### Voeg een regel toe

Nu gaan we een regel toevoegen aan onze route. 



#### Via de API

> [!faq]
>
> Dienst:
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule
>> >
>>
>
> Instellingen:
>
>> > **serviceName***
>> >
>> >> `<ID van de Load Balancer>`
>> >
>> > **routeId**
>> >
>> >> `<ID van de gecreëerde route hierboven>`
>> >
>> > **field**
>> >
>> >> `"protocol"`
>> >
>> > **match**
>> >
>> >> `"is"`
>> >
>> > **pattern**
>> >
>> >> `"http/2.0"`
>


### Pas de wijzigingen toe

De wijzigingen aan uw OVH Load Balancer moeten *expliciet worden toegepast* in elk van de zones die voor uw dienst zijn geconfigureerd. Alleen op dit punt zijn ze zichtbaar voor bezoekers van uw website. Op deze manier kunt u in één keer complexe configuratiewijzigingen aanbrengen.

Als u meerdere zones heeft, moet u voor elk daarvan dezelfde configuratie toepassen.


#### Via de API

Vernieuw een zone:

> [!faq]
>
> Dienst:
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/refresh
>> >
>>
>
> Instellingen:
>
>> > **serviceName***
>> >
>> >> `<ID van de Load Balancer>`
>> >
>> > **zone**
>> >
>> >> `<zone om de configuratie in te zetten>`
>

### Bevestig

Nadat u al deze stappen hebt uitgevoerd, moet u nu een functionele load balancer-dienst voor uw HTTP / 2-servers hebben. U kunt nu de status van uw dienst bevestigen door deze bij uw OVH Load Balancer aan te vragen en vervolgens de antwoordversie te controleren:

```bash
curl -I --http2 https://www.ovh.com/
HTTP/2 200
```

## Verder

Ga in gesprek met andere communitygebruikers op <https://community.ovh.com/en/>.