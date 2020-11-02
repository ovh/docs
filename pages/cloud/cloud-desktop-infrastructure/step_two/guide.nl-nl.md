---
deprecated: true
title: Stap 2 - Creatie van een sjabloon voor een virtuele desktop-pool
slug: creatie-pool
excerpt: Ontdek hoe u pool-sjablonen kunt maken in VMware Horizon 7.1
section: Aan de slag
order: 2
---

**Laatste update 20-02-2018**

## Introductie

U kunt nu beginnen met het gebruik van uw [Cloud Desktop Infrastructure](https://www.ovh.com/nl/cloud/cloud-desktop/infrastructure/){.external}-oplossing.

**In deze handleiding wordt uitgelegd hoe u een automatische pool van Linked Clones-machines implementeert.**


## Vereisten

- U hebt een compatibel besturingssysteem (OS) nodig: u kunt [hier](https://pubs.vmware.com/horizon-7-view/index.jsp?topic=%2Fcom.vmware.horizon-view.installation.doc%2FGUID-B45E1464-92B1-4AA8-B4BB-AD59EDF98530.html){.external} de lijst bekijken van besturingssystemen die door Horizon Agent worden ondersteund.
- U moet de software, die u in de pool wilt gebruiken, hebben geïnstalleerd.
- U moet het adres van de netwerkkaart hebben geconfigureerd via DHCP (Dynamic Host Configuration Protocol).
- U moet het sjabloon voor de virtuele machine (VM) hebben gekoppeld aan het bestemmingsnetwerk van de pool (poortgroep of VLAN).
- U moet klaar zijn met het installeren van de VMware Horizon 7.1-agent.
- U moet een snapshot hebben gemaakt (met de virtuele machine uitgeschakeld) die als een onveranderbaar referentiepunt zal fungeren.  
- U moet een aanpassingssjabloon (sysprep) hebben gemaakt. 


## Instructies

### Importeer een sjabloon voor een virtuele machine (VM)


U kunt zowel volledig als gedeeltelijk geconfigureerde VM-sjablonen maken en importeren op de Private Cloud die is gekoppeld aan uw VMware Horizon 7.1-infrastructuur.

Hiervoor zijn de volgende handleidingen beschikbaar: 

- Creatie van een VM vanuit een ISO-image: [Implementatie van een virtuele machine](https://docs.ovh.com/fr/private-cloud/deploiement-d-une-machine-virtuelle-depuis-un-iso/){.external}
- Creatie van een VM vanuit een OVH-sjabloon: [Implementatie van een virtuele machine vanuit een OVH-sjabloon](https://docs.ovh.com/fr/private-cloud/deploiement-template-ovh/){.external}
- Importeer via OVFtool: [OVFtool](https://docs.ovh.com/fr/private-cloud/ovf-tool/){.external}.


### Koppel het sjabloon aan het bestemmingsnetwerk van de pool

Om virtuele desktops correct te implementeren en ervoor te zorgen dat gebruikers er toegang toe hebben, is het belangrijk om het VM-sjabloon op het juiste virtuele netwerk te configureren. De details voor dit netwerk worden verzonden in de bevestigende e-mail na levering (**DHCP-netwerk**), weergegeven door een `dvportgroup` op de vSphere-interface.

Om het VM-sjabloon en het pool-netwerk te koppelen, moet u het volgende doen:

- Klik met de rechtermuisknop op de VM en kies `Edit settings`{.action}.
- Selecteer het apparaat dat overeenkomt met de netwerkinterface.
- In het gedeelte `Netwerk Connection`{.action}, selecteert u het `Network label`{.action}, weergegeven in de bevestigende e-mail van levering van **DHCP Network** (zie afbeelding hieronder).

![DHCP Network](images/1200.png){.thumbnail}

Als u een extra netwerk nodig hebt dat geïsoleerd is van het bestaande netwerk, kunt u een nieuw toegangspunt implementeren met een speciaal netwerk: [Creatie van een nieuw toegangspunt](https://docs.ovh.com/nl/cloud-desktop-infrastructure/create-access-point/).


### Installatie van VMware Horizon 7.1

> [!primary]
>
> Als u de HaaS-oplossing gebruikt, kunt u de installatiebestanden voor de Horizon Agent hier downloaden: <https://files.horizonaas.com/>.
> 

Dubbelklik op het installatiebestand van de Horizon Agent en volg het installatieproces:

- Accepteer de VMware-licentievoorwaarden.
- Selecteer `Install VMware Horizon Agent`{.action} in `My Computer Mode.`{.action}
- Kies het IPv4-protocol.
- Selecteer de installatieopties (de standaardopties zijn een goed startpunt). 
- Schakel RDP niet in wanneer dit van u wordt gevraagd.
- Accepteer of wijzig de doelmap.
- Voltooi de installatie.

Als u meer informatie wilt over het installeren van de Horizon 7.1 Agent op een virtuele machine, raadpleeg dan de volgende VMware Horizon-pagina: [Installatie van Horizon Agent op een virtuele machine](http://pubs.vmware.com/horizon-7-view/index.jsp?topic=%2Fcom.vmware.horizon-view.desktops.doc%2FGUID-1F2D0C6E-6379-4B52-A7EA-C1EF09CE2F9B.html){.external}


### Creëer de parent snapshot

Om ervoor te zorgen dat het een onveranderde versie van de virtuele machine gebruikt als sjabloon voor de pool, vertrouwt VMware Horizon op een snapshot. Op deze manier hebben de bewerkingen die op de sjabloon worden uitgevoerd geen directe invloed op de inhoud van de virtuele desktop.

- Selecteer op de vSphere-clientinterface (in dit geval de webversie) het VM-sjabloon en vervolgens het `actiemenu`{.action}. Klik ten slotte op `Creëer snapshot`{.action}:

![Creëer snapshot](images/1201.png){.thumbnail}

- Geef uw snapshot een titel (in dit geval een versienummer) en een beschrijving:

![ Snapshot titel](images/1202.png){.thumbnail}

Nu u het sjabloon hebt gemaakt, kunt u meer leren over de [creatie van een pool](https://docs.ovh.com/nl/cloud-desktop-infrastructure/howto-create-pool/).  

## Verder

Ga in gesprek met andere communityleden op <https://community.ovh.com/en/>.