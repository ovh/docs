---
deprecated: true
title: 'Gebruik van een OVF-sjabloon'
excerpt: 'Ontdek hoe u een sjabloon kunt toepassen met de vSphere fat-client'
updated: 2020-10-12
---

**Laatste update 30-05-2018**

## Introductie

OVH biedt Windows-sjablonen (in OVF-indeling) die u rechtstreeks vanuit uw vSphere fat-client kunt inzetten.

Deze handleiding legt uit hoe u een sjabloon kunt gebruiken met de vSphere fat-client

## Vereisten

- U moet toegang hebben tot de webclient
- U moet de Windows-licentie hebben geactiveerd vanuit uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external} (het tabblad `Windows-licentie`{.action} voor het datacenter) 


## Instructies

### Zoek de URL van het OVF-sjabloon

Ga in uw webbrowser naar de startpagina van uw Private Cloud en klik op `OVH-sjabloon`{.action} (OVH Template).

![Naam foto](images/gatewayssl.png){.thumbnail}

Selecteer `Windows`{.action} op de pagina `Templates Library` die verschijnt. U krijgt de details van de beschikbare Windows-sjablonen te zien.

Nu hoeft u alleen maar te klikken met de rechtermuisknop op het sjabloon van uw keuze en het linkadres te kopiëren:

![Naam foto](images/copylink.png){.thumbnail}


### Gebruik van een OVF-sjabloon 

Zodra u bent aangemeld bij uw vSphere webclient, gaat u naar de pagina `Hosts en clusters`{.action}, klikt u met de rechtermuisknop op uw datacenter en klikt u op `OVF-sjabloon toepassen...`{.action}:

![Naam foto](images/selectdeploy.png){.thumbnail}

Het contextmenu wordt geopend en u kunt gaan configureren hoe het sjabloon wordt toegepast. De eerste stap is om de link toe te voegen die u eerder hebt gevonden:

![Naam foto](images/puturl.png){.thumbnail}

Met de volgende stap kunt u het datacenter kiezen:

![Naam foto](images/selectdatacenter.png){.thumbnail}

Nu kunt u het cluster kiezen waarin de virtuele machine zal worden gemaakt:

![Naam foto](images/selectcluster.png){.thumbnail}

Deze pagina geeft alle details van het sjabloon, inclusief het standaard wachtwoord. Om veiligheidsredenen is het belangrijk dat u uw wachtwoord wijzigt zodra u zich voor de eerste keer inlogt:

![Naam foto](images/detailstemplate.png){.thumbnail}

Selecteer de datastore waarin de virtuele machine geplaatst zal worden, en de indeling van de schijf:

![Naam foto](images/selectdatastore.png){.thumbnail}

U moet nu het te gebruiken netwerk selecteren.

![Naam foto](images/selectnetwork.png){.thumbnail}

Het configuratieproces is bijna voltooid en u ziet een samenvatting van de gevraagde configuratie:

![Naam foto](images/resume.png){.thumbnail}

Wanneer u op `Voltooien`{.action} klikt, wordt een taak gemaakt waarmee u de voortgang van de toepassing kunt volgen.

![Naam foto](images/startdeploy.png){.thumbnail}

Nadat het sjabloon is toegepast, kunt u dit venster sluiten.

U zult nu de nieuwe virtuele machine in uw inventaris vinden.

![Naam foto](images/inventory.png){.thumbnail}


## Verder

Ga in gesprek met andere communityleden op <https://community.ovh.com/en/>.