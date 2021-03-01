---
deprecated: true
title: Gebruik van de KVM voor de VPS 
excerpt: Gebruik van de KVM voor de VPS 
slug: kvm_gebruiken_voor_vps
section: Eerste stappen
---

**Laatste update 18-04-2018**

## Introductie

De KVM-console staat een directe verbinding met uw VPS toe, zonder gebruik te hoeven maken van een extern programma (terminal, Putty, enz.). Deze console is toegankelijk via uw Control Panel of de API.  

**De twee oplossingen worden u in de handleiding uitgelegd.**

## Vereisten

- U moet ingelogd zijn op uw [Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.

## Instructie

### Log in op de KVM via uw Control Panel

Wanneer u op uw Control Panel bent ingelogd gaat u naar de beheerpagina van uw VPS. Vindt u de knop `KVM`{.action}:

![Selecteer de KVM-knop](images/activating_kvm_manager.png){.thumbnail}

 
Een venster zal de verbinding op uw VPS voorbereiden, dit kan enkele seconden duren.  U hoeft zich alleen nog maar te verbinden:

![Verbinding met de KVM](images/kvm_screen.png){.thumbnail}

> [!primary]
>
> De afbeelding van het toetsenbord kan verschillen met uw toetsenbord. Denk eraan om dit te controleren, het toetsenbord kan bijvoorbeeld in QWERTY in plaats van in AZERTY zijn.
>

### Log in op de KVM via de API

Soms is het mogelijk dat u problemen tegenkomt om u via uw Control Panel met de KVM te verbinden. Dan kunt u de API gebruiken. Allereerst logt u zich in op [OVH API](https://api.ovh.com/).

#### Op een VPS 2014

Op de VPS 2014 kunnen foutmeldingen 1006 voorkomen, via de API kan dit opgelost worden. Hier de te gebruiken API:

> [!api]
>
> @api {POST} /vps/{serviceName}/openConsoleAccess
>

Ondanks een positieve terugkoppeling van de API is het mogelijk dat de verbinding een of twee minuten in beslag neemt, de tijd dat de poort zich daadwerkelijk opent.

#### Op een VPS 2016

In geval van een probleem met de KVM, wordt hier de API die aangeraden voor de toegang met de KVM:

> [!api]
>
> @api {POST} /vps/{serviceName}/getConsoleUrl
>

## Verder 

Ga in gesprek met onze communitygebruikers via: <https://community.ovh.com/en/>.


