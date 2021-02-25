---
deprecated: true
title: Automatische back-up
excerpt: ''
slug: automatische_back-up
legacy_guide_number: g1486
hidden: true
---


## 
Om de automatische back-up te beheren, moet u beschikken over:

- Een VPS uit het Cloud aanbod
- Uw inloggegevens voor de OVH Manager
- De toegang tot uw server (SSH of RDP)




## Vanaf de Manager
Eerst moet u verbinding maken met de Manager via deze link: [Manager](https://www.ovh.com/manager/web/)

![](images/img_2080.jpg){.thumbnail}

- Gebruikersnaam, uw OVH account (nic handle)
- Wachtwoord, voer het OVH account wachtwoord in


Selecteer nu uw VPS in het linkermenu:

![](images/img_2023.jpg){.thumbnail}
Ga vanaf het hoofdmenu naar de tab "Automatische Back-up":

![](images/img_2026.jpg){.thumbnail}
Klik nu op het icon, rechts, "Activeer de Automatische Back-up"

![](images/img_2027.jpg){.thumbnail}
Klik op de knop "betalen" om naar de bestelbon te gaan:

![](images/img_2028.jpg){.thumbnail}
Door de betaling uit te voeren, wordt de automatische back-up optie geactiveerd.


## Vanaf de Manager
Eerst moet u inloggen op de Manager, zie het eerste deel van deze handleiding, vervolgens kunt u de gewenste VPS selecteren.
Ga vanaf het hoofdmenu, naar de tab "Automatische back-up" waar u de lijst met beschikbare back-ups kunt raadplegen:

![](images/img_2021.jpg){.thumbnail}
Klik nu op Herstel:

![](images/img_2025.jpg){.thumbnail}
Zodra de validatie klaar is, zal een hersteltaak worden aangemaakt. (Duur: 30 minuten tot een uur, afhankelijk van het VPS-model)

Tegen het einde van het herstel zal een e-mail worden verstuurd met daarin uw VPS inloggegevens:


```
TOEGANG PARAMETERS:

Het IPv4 adres van de VPS: uw IPv4
Het IPv6 adres van de VPS: uw IPv6

De naam van de VPS: vpsXXXXX.ovh.net

Het wachtwoord van uw VPS is het wachtwoord dat actief was op 24/06/2014, 02:37:16.
```




## Met behulp van de Manager
Eenmaal ingelogd op de Manager (de procedure is hierboven beschreven) in het VPS menu, klikt u op de tab "Automatische back-ups", vervolgens selecteert u het gewenste mount tijdstip:

![](images/img_2022.jpg){.thumbnail}
Bevestig het verzoek per e-mail om de inloggegevens te ontvangen voor het mounten van uw back-up op uw VPS.

In de e-mail vindt u de commando's om uw back-up te mounten in NFS of CIFS:


```
U kunt uw back-up onder Linux mounten met de volgende commando's:

mount -t nfs -o ro,vers=3 IP.IP.IP.IP:/mnt/veeam/vpsXXXXX /mnt

Het kan nodig zijn om het nfs-common pack te installeren, als u Debian en Ubuntu en/of de
nfs-utils en nfs-utils-lib packs mbv CentOS gebruikt.

mount -t cifs -o username=vpsXXXXX,password=YYYYYY //IP.IP.IP.IP/VPSXXXXX /mnt

Het kan nodig zijn om het cifs-utils pack te installeren, als u Debian, Ubuntu en CentOS gebruikt.
```



