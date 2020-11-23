---
deprecated: true
title: Stap 1 - Uw VMware Horizon 7.1-platform
slug: platform-horizon-7
excerpt: Leer hoe u VMware Horizon 7.1 kunt opzetten
section: Aan de slag
order: 1
---

**Laatste update 14-02-2018**

## Introductie

Via vijf gedetailleerde stappen leggen we uit hoe u uw [Cloud Desktop Infrastructure](https://www.ovh.nl/cloud/cloud-desktop/infrastructure/){.external} kunt beheren.

**In deze eerste handleiding wordt uitgelegd hoe u aan de slag kunt gaan met uw VMware Horizon 7.1-platform.**

## Vereisten

- U moet een e-mail hebben ontvangen met uw [Cloud Desktop Infrastructure](https://www.ovh.nl/cloud/cloud-desktop/infrastructure/){.external}-inloggegevens.

## Instructies

### Algemene informatie

Het VMware Horizon 7.1-platform bestaat uit verschillende delen:

- Een VMware Horizon 7.1 administrator-interface
- Een URL voor uw eerste pool van virtuele desktops
- Een [Private Cloud](https://www.ovh.nl/private-cloud/){.external}-platform voor de implementatie van virtuele machines en virtuele desktops


### Infrastructuur

![VMware Horizon 7.1-infrastructuur](images/1200.png){.thumbnail}

De admin-infrastructuur (*View ConnectionServer*, *View composerServer*, *ActiveDirectory*) wordt geïmplementeerd, beheerd, en gemonitord door OVH, zodat deze geen invloed heeft op de resource-capaciteiten die aan u zijn verstrekt voor het implementeren van desktoppools.

OVH implementeert virtuele routers (OVH vRouter) en *AccessPoint*, zodat uw pools volledige toegang hebben tot de Private Cloud-resources die bij uw platform zijn geleverd.

Standaard wordt een privénetwerk met een *AccessPoint* geconfigureerd wanneer het platform wordt afgeleverd. Vervolgens kunt u via uw Control Panel andere access points toevoegen.


### Levering

U ontvangt onderstaande e-mail binnen een uur na het betalen van uw bestelling. Deze e-mail bevat alle details die u nodig hebt om in te loggen op uw infrastructuur, uw eerste pool aan te maken en te beheren. 

> [!secondary]
>
> Beste klant,
>
> Hartelijk dank voor het opzetten van de Virtual Desktop Infrastructure (VDI) -optie in uw datacenter.
>
> 
> Hieronder vindt u de inloggegevens voor uw dienst: 
>
> 
> * Desktop admin-toegang: https://#URL#/admin
> 
> * Gebruikersnaam: #USERNAME#
> 
> * Wachtwoord: #PASSWORD#
> 
> 
> U moet inloggen op uw Private Cloud om uw sjablonen te beheren.
>
> U kunt inloggen: 
> 
> - Via vSphere-client 
> 
>   * Download de client: https://#VPNHOSTNAME#/client/VMware-viclient.exe
> 
>   * IP-adres: #VPNHOSTNAME#
>
> 
> - Via vSphere
> 
>   *  https://#VPNHOSTNAME#/vsphere-client
>
> NB: vSphere gebruikt de volgende toegangspoorten: 80, 443, en 8443. Om uw eerste pool te maken, moet u de volgende informatie gebruiken:
>
> 
> * Desktop-toegang: https://#POOLURL#
> 
> * DHCP-netwerk: #PORTGROUP#
>
> 
> De 10 domeingebruikers worden hieronder vermeld:
> 
> * vdi1: #USER1#
> 
> * vdi2: #USER2#
> 
> * vdi3: #USER3#
> ...
>
> 
> Als u verdere ondersteuning nodig hebt, kunt u onze Cloud Desktop Infrastructure-handleidingen raadplegen via de volgende link:
> 
>  
> https://www.ovh.com/nl/cloud/cloud-desktop/infrastructure/
>
> 
> U kunt ook uw feedback en vragen sturen naar onze mailinglijst:
>
> 
> cdi@ml.ovh.net
> 
>  
> Hartelijk dank voor uw vertrouwen in OVH, we staan graag tot uw beschikking.
> 
> Het Cloud Desktop Infrastructure team
> 


U kunt nu onze handleiding bekijken over de [creatie van een poolsjabloon](https://docs.ovh.com/fr/cloud-desktop-infrastructure/create-pool/){.external}. 


## Verder

Ga in gesprek met andere communityleden op <https://community.ovh.com/en/>.