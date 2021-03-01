---
deprecated: true
title: Veelgestelde vragen over NAS
slug: faq-nas
excerpt: Heeft u een vraag over NAS? Bekijk de meest gestelde vragen.
section: NAS
---

**Laatste update 01/12/2017**

## Het product

### Wat wordt bedoeld met ‘HA’ als ik NAS bestel bij OVH?

HA staat voor High Availability en betekent dat OVH een hoge beschikbaarheid van services garandeert. Deze garantie wordt verstrekt als een SLA (Service Level Agreement), die OVH verantwoordelijk maakt voor het aanbieden van compensatie aan zijn klanten, als zich een incident voordoet waardoor hun dienst niet beschikbaar is.

### Welke datacenters bieden NAS-HA? 

U kunt zich abonneren op HA-NAS in datacenters in Frankrijk (Roubaix, Strasbourg, Gravelines) en ons datacenter in Beauharnois, Canada. U kunt het datacenter kiezen tijdens het bestelproces.  LET OP: zodra het product besteld is, kan het datacenter niet meer gewijzigd worden. 

### Kan ik mijn NAS-HA beheren via een configuratiepanel?

Ja, deze ruimte is toegankelijk via uw [OVH control panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl), onder `Cloud` en `Plateforms en services`.

### Kan ik de totale opslagcapaciteit van mijn NAS vergroten?

Nadat u een HA-NAS hebt besteld kunt u de opslagcapaciteit niet vergroten. Als u de opslagcapaciteit wilt vergroten dan dient u uw data te migreren naar een tweede NAS met een hogere opslagcapaciteit. 

### Welke opslagmogelijkheden zijn beschikbaar?

We bieden de volgende opslagcapaciteiten:

- 1.2 TB (1.1 TB beschikbare opslagruimte);
- 2.4 TB (2.2 TB beschikbare opslagruimte);
- 3.6 TB (3.2 TB beschikbare opslagruimte);
- 7.2 TB (6.4 TB beschikbare opslagruimte);
- 13.2 TB (10 TB beschikbare opslagruimte);
- 19.2 TB (17 TB beschikbare opslagruimte);
- 26.4 TB (24 TB beschikbare opslagruimte).

Deze opslagcapaciteit-opties bestaan allemaal uit 1.2 TB dedicated disks.

### Zijn mijn NAS-HA resources dedicated aan mijn diensten?

De disks van uw NAS-HA zijn dedicated aan uw diensten.  De andere resources van de machine zijn gedeeld (RAM, CPU, bandbreedte).

**Bijzondere situatie :** als u zich abonneert op de 26.4 TB-oplossing dan zijn alle resources van de hostserver dedicated aan uw services (RAM, CPU, bandbreedte).

### Voor hoe lang kan ik me abonneren op NAS-HA?

De aangeboden abonnementsperioden zijn 1 maand, 3 maanden, 6 maanden en 12 maanden. Aan het einde van uw abonnementsperiode wordt uw abonnement automatisch verlengd, tenzij u een annuleringsverzoek indient. U kunt dit op elk moment tijdens uw abonnementsperiode doen via uw [OVH control panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl).

### Heb ik toegang tot alle opslagruimte die wordt weergegeven in de bestelling?

Voor de meeste opslagoplossingen verschilt de theoretische capaciteit enigszins van de bruikbare capaciteit, omdat een deel van de opslagruimte nodig is om de disk te laten functioneren:

- voor een 1.2 TB HA-NAS is 1.1 TB bruikbaar;
- voor een 2.4 TB HA-NAS is 2.2 TB bruikbaar;
- voor een 3.6 TB HA-NAS is 3.2 TB bruikbaar;
- voor een 7.2 TB HA-NAS is 6.4 TB bruikbaar;
- voor een 13.2 TB HA-NAS is 10 TB bruikbaar; 
- voor een 19.2 TB HA-NAS is 17 TB bruikbaar;
- voor een 26.4 TB HA-NAS is 24 TB bruikbaar.

Houd er rekening mee dat de verstrekte informatie correct is op de 'laatst bijgewerkte' datum bovenaan de pagina en in de toekomst kan variëren.

## Gebruik van het product

### Waar kan NAS-HA voor worden ingezet?

In een infrastructuur biedt NAS-HA opslagruimte waaraan u meerdere [dedicated servers](https://www.ovh.nl/dedicated_servers/), [Private Cloud](https://www.ovh.nl/private-cloud/) of [Public Cloud instances](https://www.ovh.nl/public-cloud/instances/) kunt verbinden.

Er zijn veel use-cases voor, maar de hoge beschikbaarheid van OVH‘s HA-NAS is vooral gunstig voor de volgende toepassingen:

- Het opslaan van gegevens die niet vaak wordt geopend: data dat geen verkeersvolume genereert, maar wel permanent toegankelijk moet zijn (juridische documenten, instructies, etc.);
- Het opslaan van ‘statische’ data: gegevens die niet regelmatig moeten worden gewijzigd. Op deze manier kunt u ruimte vrijmaken op een krachtige infrastructuur, prioriteiten stellen voor gegevens die altijd worden bijgewerkt, of computing power nodig hebben (databases, bedrijfstoepassingen, enz.);
- De Hot Backup-oplossing: de hoge beschikbaarheid van de NAS-service zorgt ervoor dat uw gegevens te allen tijde toegankelijk blijven, zodat u bestanden kunt openen (of doorsturen) die elders niet beschikbaar of beschadigd zouden zijn.

### In welke gevallen zou de HA-NAS-oplossing een betere optie zijn dan Backup Storage?

HA-NAS en Backup Storage zijn niet ontworpen voor hetzelfde gebruik. We raden aan om NAS te gebruiken voor het opslaan van statische gegevens, die permanent toegankelijk moeten zijn. Backup Storage is echter ontworpen voor het opslaan van gegevens die niet regelmatig hoeven te worden geopend.

Technisch gezien zijn de belangrijkste verschillen:

- Data over een HA-NAS wordt opgeslagen op dedicated disks, terwijl bij Backup Storage de ruimte wordt gedeeld;
- HA-NAS is een opslagruimte die op een andere server is gemonteerd en die NFS- of CIFS-overdrachtsprotocollen gebruikt. Backup Storage is een onafhankelijke ruimte, toegankelijk via FTP.

### Zijn er synchronisatiefuncties (zoals met Synology)?

Nee, HA-NAS kan alleen als een bestandssysteem direct op een OS worden gemonteerd. Er kan echter nog een synchronisatieproces worden ingesteld door de beheerder van de opslagruimte.

### Kan HA-NAS tegelijkertijd met meerdere servers worden verbonden?

Ja, dat kan.  U kunt uw NAS gelijktijdig laten werken met verschillende OVH-services.

### Kan ik een besturingssysteem op NAS-HA installeren?

Nee, het is niet mogelijk om een OS op NAS-HA te installeren.

### Welke protocollen zijn compatibel met de HA-NAS-oplossing?

HA-NAS kan op een Windows- of Linux-server worden gemonteerd via CIFS (Samba) of NFS-protocollen.

### Is HA-NAS compatibel met het FTP-protocol?

Nee, de HA-NAS-oplossing is niet compatibel met het FTP-protocol.

### Kan de toegewezen ruimte verdeeld worden?

Ja, u moet dan één of meerdere partities maken, afhankelijk van hoe u het zal gebruiken. Creatie van partities is onbeperkt.

## Productcompatibiliteit

### Is HA-NAS compatibel met andere services buiten OVH?

Nee, u hebt alleen toegang tot uw HA-NAS vanuit het OVH-netwerk.

### Welke dienst(en) kan ik gebruiken om toegang te krijgen tot HA-NAS?

De service is toegankelijk vanuit alle OVH-producten met een besturingssysteem of distributie: dedicated servers (OVH, So you Start, Kimsufi), Dedicated Cloud, Public Cloud en VPS.

### Hoe beheer ik de toegang tot een HA-NAS-oplossing?

De toegangscontrolelijst (ACL) kan worden geconfigureerd via uw OVH control panel. Voer simpelweg het IP-adres in van de service waarvoor u de toegang tot de HA-NAS wilt autoriseren.

### Komt HA-NAS in aanmerking voor de vRack-oplossing?

Momenteel kan HA-NAS niet worden geïntegreerd in het vRack-privénetwerk. HA-NAS en vRack zijn echter niet incompatibel als u via de openbare IP-route gaat van de server die is verbonden met vRack.

## Bandbreedte

### Zijn de overdrachts- en beschikbaarheidspercentages gegarandeerd?

- Overdracht: de bandbreedte van de service wordt gedeeld. De overdrachtsnelheid kan niet worden gegarandeerd door OVH.
- Beschikbaarheid: beschikbaarheid van de service is gegarandeerd en is het onderwerp van een service level agreement. De details zijn te vinden in onze speciale gebruiksvoorwaarden.

## Snapshots

### Wat zijn snapshots?

Snapshot toont u de status van een disk en de data die u daar op een bepaald moment, het moment dat de snapshot genomen wordt, op hebt staan opgeslagen. U kunt snapshots configureren en beheren via uw control panel.

De snapshot-functie is standaard ingeschakeld wanneer u uw partitie maakt en de frequentie wordt standaard ingesteld op "één keer per uur".

### Hoe vaak worden snapshots genomen?

U kunt de frequentie van snapshots instellen via uw control panel. U kunt de frequentie kiezen uit de volgende opties: 

- Een keer per uur; 
- Een keer per 6 uur;
- Een keer per dag;
- Een keer per 2 dagen;
- Een keer per 3 dagen;
- Een keer per week.  


U kunt ook op elk moment handmatige snapshots maken, ze opslaan zonder tijdslimiet of ze verwijderen. Deze functie is beschikbaar vanaf uw [OVH control panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl) of via de[API](https://api.ovh.com/):

> [!api]
>
> @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
> 

### Hoe werkt het snapshot management systeem? 

U kunt automatische snapshots configureren en er is een aantal frequenties beschikbaar. Ongeacht de ingestelde frequentie, zal de meest recente genomen momentopname de vorige vervangen en verwijderen. U kunt ook on demand snapshots maken en verwijderen.

### Kan ik een snapshot verwijderen?

Alleen snapshots die ‘on demand’ zijn gemaakt, kunnen worden verwijderd (zie vorige vraag ‘Hoe vaak worden snapshots genomen?’). Snapshots met een ingestelde frequentie worden automatisch verwijderd en kunnen niet handmatig worden verwijderd.

### Hoeveel opslagruimte gebruiken snapshots op een HA-NAS-oplossing?

De opslagcapaciteit die wordt gebruikt door een snapshot kan variëren naar gelang de acties die worden ondernomen in de tijdsperiode tussen twee snapshots.

Vanaf het moment dat u de snapshot maakt, worden alle acties die op de desbetreffende partitie zijn uitgevoerd opgeslagen in deze snapshot en verhogen ze de bestandsgrootte. Op deze manier kunt u op elk moment terugkeren naar de beginstatus van uw partitie (zoals toen de snapshot werd gemaakt). Vanuit technisch oogpunt zal het wijzigen en verwijderen van data de opslagruimte vergroten die door de snapshotbestanden wordt gebruikt.

### Wat is het maximale aantal snapshots dat ik kan maken?

- Voor automatische snapshots: één per partitie
- Voor handmatige snapshots: tien per partitie

### Waar kan ik mijn snapshots ophalen? 

In de betreffende partitie: een verborgen map met de naam `.zfs` → directory `snapshots` . Bestanden zijn beschikbaar in de alleen-lezen modus.

### Maakt OVH ook backups van mijn data?

Ja, OVH maakt dagelijks interne backups. Hier wordt ook een snapshot bij gemaakt. Deze backup kan niet worden uitgeschakeld door de klant.

## Ga verder 

Ga in gesprek met andere klanten op [https://community.ovh.com](https://community.ovh.com).