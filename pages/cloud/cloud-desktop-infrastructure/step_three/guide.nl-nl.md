---
deprecated: true
title: Stap 3 - Creatie van uw eerste virtual desktop-pools
slug: howto-creatie-pool
excerpt: Leer hoe u uw eerste pool kunt aanmaken met VMware Horizon 7.1
section: Aan de slag
order: 3
---

**Laatste update 16-02-2018**

## Introductie

U hebt al geleerd hoe u zich kunt inloggen op uw [VMware Horizon](https://docs.ovh.com/nl/cloud-desktop-infrastructure/platform-horizon-7/){.external}, en uw [pool-sjabloon](https://docs.ovh.com/nl/cloud-desktop-infrastructure/create-pool/){.external} is gebruiksklaar.  Het is nu tijd om uw eerste pool te creëren. 

**Deze handleiding legt uit hoe u een pool aanmaakt met VMware Horizon 7.1.**



## Vereisten

- U moet ingelogd zijn op VMware Horizon 7.1.


## Instructies

Nadat u op VMware Horizon bent ingelogd, voert u het volgende uit: 

- Klik in het gedeelte `Catalog`{.external} op `Desktop Pool`{.external}, en dan op `Add`{.action} om de procedure van de pool-creatie te starten.

![creatie van een pool](images/1200.png){.thumbnail}

- Kies vervolgend het `pool-type` (*Automatisch* in dit voorbeeld). 


> [!primary]
>
> Er zijn drie soorten desktop-pools: *automatisch*, *handmatig*, en *RDS*. 
> 
> - *Geautomatiseerde* pools zijn gecreëerd vanaf eenzelfde sjabloon of vanaf een sjabloon-snapshot van een virtuele machine (VM). 
> 
> - *Handmatige* desktop-pools zijn een verzameling VM's, fysieke computers of VM's van derden. In *geautomatiseerde* en *handmatige* desktop-pools kan elke machine slechts door één externe gebruiker tegelijk worden benaderd.
>
> - *RDS* desktop-pools zijn geen verzameling van machines. In plaats daarvan bieden ze desktop-sessies op RDS-hosts. Op een RDS-host kunnen verschillende gebruikers verschillende desktop-sessies tegelijk hebben.
> 


![creatie van een pool](images/1201.png){.thumbnail}

- Kies het `toewijzingstype` voor de virtuele desktops:

 - *Dedicated*: Virtuele desktops zijn toegewezen aan één specifieke gebruiker.
 - *Floating*: Virtuele desktops worden gedistribueerd naar gebruikers op basis van beschikbaarheid op het moment van elke login.

![creatie van een pool](images/1202.png){.thumbnail}

- Selecteer het type kloon dat u wilt maken en toevoegen aan de pool:

 - *Full virtual machines*: Er zal een complete kloon van het VM-sjabloon worden aangemaakt.
 - *View Composer linked clones*: Er zal een kloon worden gemaakt van de parent snapshot. Dit bespaart datastore-ruimte, gebruikt minder resources, en is sneller in gebruik, maar het houdt een sterke link tussen het VM-sjabloon en de geïmplementeerde desktop-VM.

![creatie van een pool](images/1203.png){.thumbnail}

- Kies de naam van de desktop-pool (de *weergavenaam* kan in een later stadium worden gewijzigd, maar niet het ID/gebruikersnaam).

![creatie van een pool](images/1204.png){.thumbnail}

- Kies de pool-configuratie (denk aan het inschakelen van *HTML-toegang*, indien nodig).


> [!primary]
>
> We raden aan het **Blast**-protocol te gebruiken omdat het u aanzienlijk soepelere prestaties biedt (ongeacht uw bandbreedtecondities), een hogere veiligheid, en een veel langere levensduur van de batterij als u een mobiel apparaat gebruikt. Raadpleeg deze [VMware-documentatiepagina](https://docs.vmware.com/fr/VMware-Horizon-7/7.2/com.vmware.horizon-view.installation.doc/GUID-F64BAD49-78A0-44FE-97EA-76A56FD022D6.html){.external} voor meer informatie over dit protocol.
> 

![creatie van een pool](images/1205.png){.thumbnail}

- U kunt nu de manier selecteren waarop uw virtuele desktops een naam krijgen, en ook het aantal in te zetten VM's.

![creatie van een pool](images/1206.png){.thumbnail}

- In het volgende weergavevenster kunt u kiezen of gebruikersprofielen worden opgeslagen op een permanente schijf en of een afzonderlijke schijf nodig is voor tijdelijke Windows-bestanden.

![creatie van een pool](images/1207.png){.thumbnail}

- U kunt vervolgens het opslagbeleid selecteren, inclusief of u OS-schijven en permanente schijven wilt scheiden.

![creatie van een pool](images/1208.png){.thumbnail}

- Kies vervolgens het *VM-sjabloon* dat u wilt implementeren.

> [!primary]
>
> Als de VM niet wordt weergegeven, selecteert u `Show all parent VMs`{.action} om na te gaan waarom.
> 

![creatie van een pool](images/1209.png){.thumbnail}

- U kunt dan de bovenliggende snapshot kiezen (u kunt verschillende snapshots hebben voor versiebeheer, tests of productie op verschillende pools).

![creatie van een pool](images/1210.png){.thumbnail}

- Selecteer de *doelmap* van uw desktop-pool (voor vSphere-organisatie). Er wordt een submap gemaakt met de naam van uw desktop-pool, en de VM's die u hebt geïmplementeerd, worden daar opgeslagen.

![creatie van een pool](images/1211.png){.thumbnail}

- Kies de *datastores* waarin de VM's worden opgeslagen.

![creatie van een pool](images/1212.png){.thumbnail}

- In het volgende scherm kunt u geavanceerde opslagopties kiezen voor uw virtuele desktops.

![creatie van een pool](images/1213.png){.thumbnail}

- U kunt vervolgens de implementatieopties voor Active Directory en VM-aanpassing kiezen (selecteer sysprep-aanpassing van de specificaties die zijn [aangemaakt op uw Private Cloud](https://docs.ovh.com/fr/cloud-desktop-infrastructure/create-sysprep/){.external}.

![creatie van een pool](images/1214.png){.thumbnail}

- U kunt er in dit stadium ook voor kiezen om gebruikers aan de pool met virtuele desktops te koppelen, of het maken van de pool te beëindigen en gebruikers er later aan te koppelen.

Afhankelijk van het sjabloon dat u hebt gebruikt, kan het een lange tijd duren voordat de desktop-pool is gemaakt. Als er fouten optreden, geeft het `Inventory`-gedeelte van de desktop-pool informatie over het maken van elk van de VM's en kan het u helpen bij het vinden van de oorzaak van het probleem.

Nu u uw desktop-pool hebt aangemaakt, kunt u meer leren over de [toewijzing van virtuele desktop-toegang aan gebruikers](https://docs.ovh.com/nl/cloud-desktop-infrastructure/howto-create-pool/){.external}.


## Verder

Ga in gesprek met andere communityleden op <https://community.ovh.com/en/>.