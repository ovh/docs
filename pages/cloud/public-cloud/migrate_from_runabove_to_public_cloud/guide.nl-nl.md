---
title: Migreren van RunAbove naar de Public Cloud
excerpt: Migreren van RunAbove naar de Public Cloud
slug: migreren_van_runabove_naar_de_public_cloud
legacy_guide_number: g1942
---


## 
Zoals u op deze [site](https://www.runabove.com/index.xml) kunt zien, wordt RunAbove voortaan het merk dat alle OVH innovaties in de vorm van verschillende Labs presenteert zoals de [Desktop as a service](https://www.runabove.com/deskaas.xml) en natuurlijk alles dat om [IoT](https://www.runabove.com/iot-paas-timeseries.xml) draait. 

De Labs zoals [Object Storage[/url, de [url="https://www.runabove.com/cloud-instance.xml"]instances](https://www.runabove.com/cloud-storage.xml) en de [extra volumes](https://www.runabove.com/cloud-disks.xml) zijn voortaan gesloten, u kunt ze echter terugvinden op [OVH Public Cloud](https://www.ovh.nl/cloud/).


## 
Vanwege de afsluitingsfase op RunAbove, moet u uw activiteiten die verbonden zijn met de instances, extra volumes en Object Storage zo snel mogelijk laten migreren. Meerdere handleidingen zijn voor u beschikbaar gesteld om u hierbij te helpen.


## Vooraf vereist

- [De omgeving klaarmaken voor het gebruik van API OpenStack]({legacy}1851)




## De variabelen van de OpenStack-omgeving laden voor RunAbove
In eerste instantie moet het RC bestand worden teruggevonden die alle benodigde informatie heeft voor het gebruik van de OpenStack API: 


- inloggen op uw RunAbove account 
- Klik op de naam rechts bovenaan en selecteer OpenStack Horizon



![](images/img_3038.jpg){.thumbnail}

- Selecteer links de regio

- Ga naar het menu Toegang & Veiligheid en daarna naar de tab API toegang



![](images/img_3039.jpg){.thumbnail}

- Klik op Download OpenStack RC File

- Laad de variabelen voor de OpenStack omgeving voor RunAbove met het RC bestand


```
root@serveur:~$ source RunAbove_OpenRC.sh
```





## Migratie
Handleidingen zijn beschikbaar waarin wordt uitgelegd hoe de transfer van back-ups van instances en extra volumes van een datacenter naar een andere verloopt. 
Omdat ze compatibel zijn met RunAbove, kunnen ze worden gebruikt om u te helpen met de migratie van uw activiteiten: 

Instances migreren:

- [Transfer van een back-up tussen twee datacenters]({legacy}1853)


Extra volumes migreren:

- [Transfer van een back-up van een volume tussen twee datacenters]({legacy}1941)


Voor de migratie van Object Storage, kunt u uw gegevens eerst downloaden en daarna naar uw nieuwe project verzenden. 2 containers kunnen ook tussen de twee worden gesynchroniseerd: 

- [Synchronisatie van object containers]({legacy}1919)




## Facturering
In tegenstelling tot RunAbove, zijn er twee soorten facturen:


- Factuur per uur: 

Zoals die die al bestaat op RunAbove, zal de factuur volgens de consumptie in de maand die volgt worden opgesteld. 


- Factuur per maand: 

U kunt profiteren van 50% korting als u voor deze factuur kiest. De factuur wordt meteen en op pro-rata basis (tijdelijk) opgesteld voor de lopende maand.


## Functionaliteiten
Op dit moment zijn bepaalde functies niet beschikbaar op de Public Cloud: 


- privénetwerken
- floating IP-en


De privénetwerken zullen gauw beschikbaar zijn en zullen compatibel zijn met de vRack. 

Andere functionaliteiten die niet aanwezig waren op RunAbove zijn nu aanwezig op de Public Cloud: 


- Windows licenties beschikbaar voor EG en SP instances
- IP Failover adressen importeren 
- Het gebruik van IP Load Balancing




## 
[Teruggaan naar de index van Cloud handleidingen]({legacy}1785)

