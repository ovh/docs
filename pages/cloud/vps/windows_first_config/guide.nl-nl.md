---
deprecated: true
title: Eerste Windows serverconfiguratie (Firewall)
slug: windows-first-config
excerpt: Leer hoe u uw remote desktop verbinding in kunt schakelen via KVM, als deze is uitgeschakeld.
---


## Vereisten
Wanneer u Windows Server 2012, 2012 R2 of 2016 op een VPS installeert dan kan de verbinding met uw remote desktop soms worden uitgeschakeld, evenals de respons van het ICMP-protocol. Als dit het geval is dan zal deze gids u tonen welke instellingen moeten worden gewijzigd.

Hiervoor heeft u het volgende nodig:

- Een VPS met Windows Server 2012, 2012 R2 of 2016 geïnstalleerd.
- Toegang tot uw OVH Control Panel.


## Procedure

### Stap 1&#58; Log in op de KVM
Om te kunnen inloggen op de KVM, moet u inloggen op uw `OVH Control Panel`{.action}, ga naar de `Dedicated`{.action} tab, vervolgens naar uw VPS.

Klik dan op de `KVM`{.action} knop in de rechterbovenhoek van uw Control Panel.


![KVM](images/windowsvps.png){.thumbnail}

U zult 'virtual keyboard and mouse'-toegang hebben tot uw VPS.


### Stap 2&#58;  Eerste Windows instellingen
Op het scherm KVM ziet u Windows opstarten. U moet de taal van het Windows-toetsenbord configureren, evenals het **Administrator** wachtwoord.


![Taal](images/windows2.png){.thumbnail}


![Wachtwoord](images/windows3.png){.thumbnail}


### Stap 3&#58; Windows Firewall wijzigen
Zodra de installatie voltooid is, ga naar `Systeembeheer`{.action}, vervolgens `Windows Firewall met geavanceerde beveiliging`{.action}.


![Admin](images/windows4.png){.thumbnail}

Vervolgens moet u de ICMP en de remote desktop verbinding *(right-click-> Authorise rule)* inschakelen.


![Ingeschakeld](images/windows5.png){.thumbnail}