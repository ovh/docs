---
deprecated: true
title: Load balancing methode
excerpt: Ontdek de verschillende methoden voor load balancing die worden gebruikt door de OVH Load Balancer
updated: 2018-01-17
---

**Laatste update 31-01-2018**

## Introductie

De nieuwe OVH Load Balancer biedt verschillende load balancing methodes voor uw diensten. Dit proces bepaalt de manier waarop de OVH Load Balancer de verzoeken die door uw servers worden ontvangen, distribueert.

**Deze handleiding biedt een inleiding tot de verschillende methoden voor load balancing, en legt uit hoe u deze kunt wijzigen.**

## Vereisten

- U moet ingelogd zijn op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}
- U moet een serverfarm hebben gemaakt.


## Instructies

### Verschillende methoden voor load balancing

Load balancing wordt gebruikt in serverfarms. Deze instelling definieert de manier waarop verzoeken worden verdeeld tussen de servers in de farm.

Om de basisprincipes van de OVH Load Balancer te begrijpen, raadpleegt u de [Introductie tot de Load Balancer](/pages/cloud/load_balancer/use_presentation){.external}.

|Algoritme|Functies|
|---|---|
|First|De eerste beschikbare server ontvangt de verbinding. De server wordt gekozen op basis van zijn ID, van klein tot groot.|
|LeastConn|Selecteert de server met het laagste aantal actieve verbindingen. Deze instelling wordt aanbevolen voor lange sessies met weinig verkeer. Het *Round Robin*-algoritme wordt toegepast op groepen servers met hetzelfde aantal actieve verbindingen.|
|RoundRobin|Selecteert de servers na elkaar voor elke verbinding. Dit is het **standaardalgoritme**.|
|Source|Dit algoritme *hashet* het bron-IP-adres en verdeelt het resultaat vervolgens met het aantal servers dat momenteel wordt uitgevoerd. Hetzelfde bron-IP-adres wordt dan nog steeds omgeleid naar dezelfde server, op voorwaarde dat het blijft werken.|
|URI|Dit algoritme *hashet* een deel of alle URI en verdeelt het resultaat vervolgens met het aantal servers dat momenteel wordt uitgevoerd. Hetzelfde URI wordt dan nog steeds omgeleid naar dezelfde server, op voorwaarde dat het blijft werken.|


### Wijzig de load balancing-methode van een serverfarm via het Control Panel

- In het gedeelte `Server Farms`{.action} (1) ziet u de farms die zijn gemaakt. U kunt ze bewerken door op de drie punten aan de rechterkant (2) te klikken en vervolgens op `Bewerken`{.action}:

![Bewerking van een farm](images/server_cluster_change.png){.thumbnail}

In `Geavanceerde instellingen`{.action} kunt u de `load balancing-methode`{.action}wijzigen:

![Bewerking van een farm](images/distrib_mode_edit.png){.thumbnail}

Nadat u de gewenste methode voor taakverdeling hebt geselecteerd, klikt u op `Update`{.action} en vervolgens op `Configuratie toepassen`{.action} in de gele banner die verschijnt:

![Configuratie toepassen](images/apply_config.png){.thumbnail}


### Wijzig de load balancing-methode van een serverfarm via de API

U kunt de instellingen van de taakverdeling wijzigen door deze in de serverfarm te bewerken.

- Bekijk details van een farm

Met deze oproepinstructie kunt u details over een serverfarm bekijken als u het ID kent. In dit voorbeeld werken we aan een HTTP-farm:

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/http/farm/{farmId}
> 

|Instelling|Betekenis|
|---|---|
|ServiceNaam*|ID van uw Load Balancer|
|farmId*|ID-nummer van de farm|

|Respons (BackendHttp)|Betekenis|
|---|---|
|farmId|ID-nummer van de farm|
|balance|Balance type momenteel ingesteld voor de farm|
|zone|Naam van de zone waar de farm geconfigureerd is|
|Poort|Poort gebruikt om contact te maken met de servers die op de farm zijn geconfigureerd|
|probe|Type probe dat momenteel is geconfigureerd op de farm|
|displayName|Naam die aan deze farm gegeven is|
|stickiness|Verbindingsbewakingsmethode momenteel ingesteld op de farm|

- Wijzig de load balancing-methode van een farm

Met deze oproepinstructie kunt u de instellingen van een serverfarm bewerken als u het ID kent. In dit voorbeeld werken we aan een HTTP-farm: Om de balancing-methode te wijzigen, moet het `BackendHttp.balance`-veld worden bijgewerkt met een beschikbare balancing-methode:

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/http/farm/{farmId}
> 

|Instelling|Betekenis|
|---|---|
|ServiceNaam*|ID van uw Load Balancer|
|farmId*|ID-nummer van de farm|
|BackendHttp.balance|Gewenste balancing-methode voor deze farm|

- Wijzigingen toepassen

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/http/farm/{farmId}
> 

|Instelling|Betekenis|
|---|---|
|ServiceNaam*|ID van uw Load Balancer|
|zone|Naam van de zone waarin de configuratie wordt uitgevoerd|


## Verder

Ga in gesprek met andere communitygebruikers via <https://community.ovh.com/en/>.
