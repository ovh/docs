---
deprecated: true
title: Het gebruik van vScope
excerpt: ''
slug: het_gebruik_van_vscope
legacy_guide_number: g718
updated: 2022-01-28
---


## Toegang
U kunt naar VScope gaan vanaf de volgende url (af te stemmen op uw private cloud): 

https://pcc-178-32-194-8.ovh.com/vScope (let op de hoofdletter S)

![](images/img_368.jpg){.thumbnail}
U wordt om een gebruikersnaam en wachtwoord voor het inloggen gevraagd, gebruik de admin login, om in te loggen op de vSphere Client.
Zodra u heeft ingelogd, ziet u op het interface een globaal overzicht van uw datacenter:

![](images/img_364.jpg){.thumbnail}


## Filer
Aan de linkerkant heeft u een lijst met uw opslagruimtes en hun gebruikstatistiek(en).


## Hosts
In deze weergave vindt u de lijst van uw hosts met het aantal cores, VM's, CPU's en de gebruikte RAM en het 'network maps host traffic' (TX= upload en RX= download).
Als u dubbelklikt op de host, heeft u toegang tot een andere tab met de grafieken die het gebruik weergeven van de resources (RAM, CPU, Netwerk, etc.):

![](images/img_366.jpg){.thumbnail}
U kunt ook de grafiek op een bepaalde periode inzoomen, door met de linkermuisknop te klikken op de gewenste zone op de grafiek:

![](images/img_367.jpg){.thumbnail}
U kunt de periode kiezen waarvoor u de grafieken wilt zien (dag, week, maand, jaar), bovenaan met het drop-down menu.


## Virtual Machine
In deze paragraaf vindt u de statistieken van uw virtual machines met 

- hun namen
- de storage waarop de vmdk werd geplaatst, en de gebruikte en toegewezen ruimte op de datastore
- het aantal snapshots om de machine te presenteren (genomen via de snapshot manager)
- de host waarop de VM wordt opgeslagen
- de status (aan, uit, pauze)
- het CPU en RAM verbruik 
- informatie over de disks (bandbreedte statistieken, I/O, latency)


Net zoals bij de hosts, heeft u toegang tot de grafiek van de virtual machine en kunt u haar andere grafieken bekijken door te dubbelklikken op de VM.

