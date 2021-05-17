---
title: Cheat-sheet OVH markdown custom content
slug: cheat-sheet
excerpt: Some additional description
section: Section
order: 20
---

**Last updated xxth xxxx 2018**

## notices

### alert

> [!alert]
>
> this is an alert!
> 

### Other notices: 

#### primary

> [!primary]
>
> this is a primary notice!
> 

#### warning

> [!warning]
>
> this is a warning!
> 

#### info

>
> this is a simple notice!
> 

## Carousel

> [!carousel]
>
> - ![caption of image 1](/images/jobs.jpg)
> - ![caption of image 2](images/icn-confluence-infra.png)
> - ![caption of image 3](images/icn-confluence-infra.png)
> 

## FAQ


> [!faq]
>
> Question 1
>> Response 1
> Question 2
>> - item 1
>> - item 2
> Question 3
>> col 3-1-1
>>> col 3-1-2
>> col 3-2-1
>>> col 3-2-2
>> col 3-3-1
>>> col 3-3-2

## Api

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/tcp/route
> 


## Advanced

You can mix different custom syntax

> [!faq]
>
> Service:
>
>> > [!api]
>> >
>> > @api {POST} /ipLoadbalancing/{serviceName}/tcp/route
>> >
>>
>
> Paramètres:
>
>> serviceName *
>>> Nom du service IP Load Balancer concerné de la forme `ip-a.b.c.d`
>> action.type
>>> Mettre "farm"
>> action.target
>>> &lt;id de votre ferme tcp qui doit savoir gérer le HTTP/2&gt;
>> frontendId
>>> &lt;id de votre frontend tcp 443&gt;
