---
deprecated: true
title: Het gebruik van de VMware Update Manager
excerpt: ''
legacy_guide_number: g591
updated: 2021-12-09
---


## Vereisten
Wij zullen u de Update Manager plug-in geven op de vSphere Client.

U moet hiervoor reeds de vSphere Client geïnstalleerd hebben op uw machine:

-[Install the vSphere client](/pages/cloud/private-cloud/vmware_update_manager%7Blegacy%7D600)

## BELANGRIJK!!!
Als de RDP-verbinding is geleverd bij het maken van uw account, zal het niet nodig zijn om de Update Manager te installeren.


## 
Om de Update Manager te installeren, moet u de aangesloten plug-in in uw vSphere installeren:

![](images/img_156.jpg){.thumbnail}
U komt dan terecht bij het plug-in scherm, de Update Manager is onderaan dit venster. Klik dan op 'Download & install'.

Vervolgens verschijnt er een nieuwe tab op het cluster en de hosts:

![](images/img_66.jpg){.thumbnail}
Het enige wat u nadien hoeft te doen, is op de 'Attach' knop klikken, zodat u het type update kunt selecteren:

![](images/img_67.jpg){.thumbnail}
Zodra de baselines zijn geselecteerd en gekoppeld, kunt u een Patch en Upgrade scan uitvoeren:

![](images/img_68.jpg){.thumbnail}
U heeft dan een tabel waarin de updates en patches beschikbaar zijn en de statistieken van de bijgewerkte hosts worden samengevat. Als u gewoon de updates wilt downloaden zonder ze te installeren, kunt u gebruikmaken van de "Transfer" knop en als u deze dan wilt installeren, kunt u de "Correct" knop gebruiken:

![](images/img_69.jpg){.thumbnail}

