---
deprecated: true
title: 'Hardware diagnostics'
excerpt: 'Ontdek hoe u hardwarestoringen op uw server kunt diagnosticeren'
updated: 2022-12-15
---

**Laatste update 09-13-2018**

## Introductie


Op een bepaald moment tijdens de levensduur van uw server kunt u een fout tegenkomen die veroorzaakt is door een hardwareprobleem. Uw server is uitgerust met een aantal tools voor probleemoplossing om beschadigde onderdelen te detecteren.

Deze handleiding legt uit hoe hardwarestoringen kunnen worden gedetecteerd op uw server.


## Vereisten

* U moet beschikken over een [dedicated server](https://www.ovh.nl/dedicated_servers/){.external}.
* U moet de server opnieuw hebben gestart in de [reddingsmodus](/pages/cloud/dedicated/rescue_mode){.external}.


## Instructie

### Gebruik de webinterface.

Nadat uw server opnieuw is opgestart in de [reddingsmodus](/pages/cloud/dedicated/rescue_mode), ontvangt u een e-mail met toegangsinformatie voor uw dienst. Het bericht bevat ook een link naar de reddingsmodus voor de netwerkinterface. Het ziet er meestal zo uit: *https://server_IP:444*.

Nadat u op de koppeling hebt geklikt, wordt u doorgestuurd naar de webinterface, zoals hieronder wordt weergegeven.

![Webinterface](images/rescue-mode-04.png){.thumbnail}


### Voer hardwaretests uit

In de webinterface kunt u klikken op de functie `Alle tests starten`{.action}, die tegelijkertijd alle beschikbare hardwaretests uitvoert.

![Start alle tests](images/rescue-mode-042.png){.thumbnail}


### Voer verschillende hardwaretests uit

Via de webinterface kunt u verschillende tests uitvoeren voor:

- Processors
- Netwerkverbinding
- RAM-geheugen
- Schijfpartities

U kunt ook SMART-log informatie op uw server zien die meer gedetailleerde informatie over uw harde schijven biedt.

 
#### Processors

De processortest controleert de CPU-prestaties van uw server, een succesvolle test neemt ongeveer 30 minuten in beslag. Als de server tijdens de test faalt, betekent dit dat de processor defect is.

Klik op de knop om de test te starten, zoals weergegeven in de afbeelding hieronder.

![Processortest](images/processors.png){.thumbnail}

#### Netwerkverbinding

De netwerkverbindingstest controleert uw interne en externe bandbreedte. Klik op de knop om de test te starten, zoals weergegeven in de afbeelding hieronder.

![Netwerktest](images/network-connection.png){.thumbnail}

#### RAM-geheugen

De geheugentest controleert de integriteit van de RAM-modules van uw server. Als de server tijdens de test faalt, betekent dit dat een of meer RAM-modules defect zijn.

Klik op de knop om de test te starten, zoals weergegeven in de afbeelding hieronder.

![Geheugentest](images/memory.png){.thumbnail}

#### Schijfpartities

De schijfpartitietest bevat een inlogtest voor een schijf en een bestandssysteemscan. De schijftoegangstest controleert of het systeem kan communiceren met de harde schijven van uw server. De controle van het bestandssysteem maakt gebruik van het `fsck -fy` commando.

> [!warning]
>
> Het uitvoeren van een bestandssysteemcontrole op een beschadigde harde schijf kan leiden tot gegevensverlies.
>

![Schijftest](images/partitions.png){.thumbnail}

## Verder

Ga in gesprek met onze communitygebruikers via <https://community.ovh.com/en/>.