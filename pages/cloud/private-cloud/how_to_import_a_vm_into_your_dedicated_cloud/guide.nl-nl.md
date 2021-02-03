---
deprecated: true
title: Het importeren van een VM naar uw Dedicated Cloud
excerpt: In deze handleiding wordt uitgelegd hoe de bestaande VM's geïmporteerd kunnen worden naar Hyper V Dedicated Cloud
slug: het_importeren_van_een_vm_naar_uw_dedicated_cloud
---


## Uw VM exporteren
We kunnen het export proces hier niet beschrijven, omdat het afhankelijk is van de infrastructuur waarop de VM draait. Gebruik de beschikbare software om uw VM te herstellen. De key is om de disk van de virtual machine onder Hyper-V te herstellen: vhdx of vmdk in vmware.


- Ik beschik over mijn vhdx:

In dit geval kunt u de sectie import overslaan.


- Ik beschik over vmdk:

Het is eerst nodig om uw vmdk te converteren naar vhdx om compatibel met HyperV te zijn. Voor de conversie kunt u gebruik maken van een van deze tools: 

- Microsoft Virtual Machine Converter Solution Accelerator
- 2Tware Convert VHD

OVH communiceert deze tools alleen voor informatie. U kunt ook gebruik maken van andere tools.
OVH kan geen support geven voor deze tools ontwikkeld door vendors.


## Inloggen naar de catalogus via FTPS
Zodra uw disk is hersteld, moet u het in uw VMM catalogus duwen dan zult u in staat zijn om een ​​VM van deze disk te implementeren. Om naar de FTPs dienst te gaan en uw disk te uploaden, kunt u deze handleiding volgen: []({legacy}1425).
Vergeet niet om uw disk te uploaden in de "Data" map.

![](images/img_1995.jpg){.thumbnail}


## Controleer de aanwezigheid van de ingevoerde disk in VMM
U ziet nu uw disk in de VMM, de catalogus ververst elk uur, het kan zijn dat u een tijdje moet wachten voordat u de disk ziet.

![](images/img_1996.jpg){.thumbnail}


## Het aanmaken van een template vanaf de disk
U kunt een template van de disk maken, zodat u de aanpassing voor toekomstige VM implementaties van de disk kunt gebruiken. Alles wordt beschreven in deze handleiding:
[]({legacy}1436)


## Een VM aanmaken vanaf de disk
Als u iets wilt aanpassen, dan kunt u een VM implementeren van de disk, alles is gedetailleerd beschreven in deze handleiding: []({legacy}1426)

