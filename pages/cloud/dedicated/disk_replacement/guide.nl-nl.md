---
deprecated: true
title: 'Vervanging van een defecte schijf'
excerpt: 'Ontdek hoe u een defecte schijf kunt identificeren en vervanging ervan kunt aanvragen'
updated: 2018-06-21
---

**Laatste update 07-06-2018**

## Introductie

Als u merkt dat een schijf defect is, of als u een e-mail ontvangt over een defecte schijf, moet u de nodige maatregelen nemen om deze zo snel mogelijk te vervangen.

In deze handleiding wordt uitgelegd hoe u een defecte schijf kunt identificeren en hoe u een schijfvervanging bij onze teams kunt aanvragen.

> [!warning]
>
> OVH levert machines waarvoor alleen u verantwoordelijk bent. Omdat wij geen toegang hebben tot deze machines, kunnen we er geen beheerderstaken op uitvoeren. Het is aan u om het softwarebeheer en de beveiliging voor het dagelijks gebruik ervan te verzekeren.
> 
> Wij stellen u deze handleiding ter beschikking om u zo goed mogelijk te begeleiden bij deze dagelijkse taken. We raden we u echter aan om een gespecialiseerde dienstverlener in te schakelen als u moeilijkheden ondervindt of twijfels heeft over het beheer, het gebruik of de beveiliging van een server. Meer informatie in het gedeelte ‘Verder’ in deze handleiding.
> 


## Vereisten

- U moet via SSH verbonden zijn met uw [OVH dedicated server](https://www.ovh.com/nl/dedicated_servers/){.external}, met root-toegang (Linux).


## Instructies

### Maak een backup van uw data

Voordat u iets anders doet, moet u allereerst een backup van uw gegevens maken. Het enige doel van RAID (met uitzondering van RAID 0) is om uw gegevens te beschermen tegen schijven die defect raken. Zodra een schijf onbruikbaar wordt, zijn al uw gegevens afhankelijk van de werking van de resterende schijf (of schijven).

Hoewel het zelden voorkomt dat twee schijven tegelijk defect raken, is het niet onmogelijk.
We zullen geen schijfvervanging uitvoeren zonder:

-	Uw bevestiging dat u een backup van uw gegevens hebt gemaakt.
-	Uw bevestiging dat u zich volledig bewust bent van het risico van gegevensverlies als gevolg van schijfvervanging en dat u dit risico accepteert.


### Een defecte schijf opsporen

Als u een e-mailwaarschuwing ontvangt of tekenen ziet dat u een defecte schijf hebt, is het absoluut noodzakelijk om te controleren of al uw schijven naar behoren werken. Als twee schijven die deel uitmaken van een enkele RAID-array defect lijken te zijn, vervangen we degene die het hogere aantal fouten als prioriteit markeert.

#### Servers die gebruikmaken van softRAID

Als u een server hebt die gebruikmaakt van softRAID, raadpleeg dan de [Software RAID - EN](/pages/cloud/dedicated/raid_soft){.external}-handleiding om de schijven te vinden die op uw server zijn geïnstalleerd.

Nadat u het toegangspad voor uw schijven hebt gevonden, kunt u ze als volgt testen met het commando `smartctl`:

```sh
smartctl -a /dev/sdX
```

> [!primary]
>
> Vergeet niet om `/dev/sdX` te vervangen met het toegangspad naar uw schijf, waarbij sdX de betreffende schijf is, d.w.z. sdA, sdB, enz.
> 

Door dit commando uit te voeren, kunt u ook het *Serial Number* van de schijven ophalen die moeten worden vervangen, zodat u ze aan de technicus kunt geven.

Hier is een voorbeeld van een resultaat dat kan worden geretourneerd:

```sh
smartctl -a /dev/sda

>>> smartctl 5.41 2011-06-09 r3365 [x86_64-linux-3.14.32-xxxx-grs-ipv6-64] (local build)                                                                                          
>>> Copyright (C) 2002-11 by Bruce Allen, http://smartmontools.sourceforge.net

>>> === START OF INFORMATION SECTION ===
>>> Device Model:     TOSHIBA DT01ACA050
>>> Serial Number:    5329T58NS
>>> LU WWN Device Id: 5 000039 ff6d28993
>>> Firmware Version: MS1OA750
>>> User Capacity:    500 107 862 016 bytes [500 GB]
>>> Sector Sizes:     512 bytes logical, 4096 bytes physical
>>> Device is:        Not in smartctl database [for details use: -P showall]
>>> ATA Version is:   8
>>> ATA Standard is:  ATA-8-ACS revision 4
>>> Local Time is:    Thu Nov 24 15:51:25 2016 CET
>>> SMART support is: Available - device has SMART capability.
>>> SMART support is: Enabled
```

In dit geval is de regel waar u op moet letten als volgt:

**`Serial Number:    5329T58N`**

#### Servers die gebruikmaken van hardRAID

Als u een server hebt die hardRAID gebruikt, raadpleegt u de [Hardware RAID - EN](/pages/cloud/dedicated/raid_hard){.external}-handleiding en gebruikt u de juiste procedure voor uw RAID-controller om de toegangspaden naar uw schijven te vinden.

Nadat u het toegangspad voor uw schijven hebt gevonden, kunt u ze als volgt testen met het commando `smartctl`:

```sh
smartctl -d megaraid,N -a /dev/sdX
```

> [!primary]
>
> Vergeet niet om /dev/sdX te vervangen met het toegangspad naar uw schijf, waarbij sdX de betreffende schijf is, d.w.z. sdA, sdB, enz.
> 


> [!warning]
>
> In sommige gevallen kan het commando het volgende bericht retourneren: `/dev/sda [megaraid_disk_00][SAT]: Device open changed type from 'megaraid' to 'sat'`.
> 
> In dit geval moet u `megaraid` vervangen met `sat+megaraid` middels: `smartctl -d sat+megaraid,N -a /dev/sdX`.
> 

Voor LSI RAID-kaarten kunt u de schijven als volgt testen met de opdracht `smartctl`:

```sh
smartctl -a /dev/sda
```

U moet het RAID-nummer definiëren (/dev/sg0 = 1er RAID, /dev/sg1 = 2e RAID, etc.) 


#### Servers met NVMe-schijven

Als u een NVMe-schijf hebt, moet u de server in de [reddingsmodus - EN](https://docs.ovh.com/gb/en/dedicated/rescue_mode/){.external} zetten, waarop de **nvme-cli**-tool standaard is geïnstalleerd.

U moet dan het comando `nvme list` gebruiken en de serienummers van uw schijven ophalen:

```sh
root@rescue:~# nvme list
>>> Node           SN                  Model                 Namespace Usage                     Format        FW Rev
>>> -------------- ------------------- --------------------- --------- ------------------------- ------------- --------
>>> /dev/nvme0n1   CVPF636600YC450RGN  INTEL SSDPE2MX450G7   1         450.10  GB / 450.10  GB   512  B +  0 B MDV10253
>>> /dev/nvme1n1   CVPF6333002Y450RGN  INTEL SSDPE2MX450G7   1         450.10  GB / 450.10  GB   512  B +  0 B MDV10253
```


### Verzoek om vervanging van een schijf

#### Cold-swapping van de schijf (server-downtime vereist)

Om een schijfvervanging aan te vragen, hoeft u alleen maar een ticket te maken via uw [OVH Control Panel](https://www.ovh.com/manager/dedicated/index.html#/ticket){.external}. U kunt het proces versnellen door de informatie te verstrekken die voor de tests is vereist. Hieronder staat een lijst met wat u moet verstrekken:

- **Het serienummer van de schijf die moet worden vervangen, evenals de serienummers voor alle schijven die correct werken.** Volg [deze handleiding - EN](/pages/cloud/dedicated/how_to_find_hdd_serial){.external} om het serienummer van de schijf op te halen die moet worden vervangen. Als u om wat voor reden dan ook het serienummer van de schijf niet kunt achterhalen, laat het ons weten in het ticket en vermeld de serienummers van de schijven die niet hoeven te worden vervangen. 

Ter herinnering: het is belangrijk om de serienummers van alle schijven op te nemen. Ze worden naar de technicus van het datacenter gestuurd en voorkomen fouten als de vervangende handeling wordt uitgevoerd.

- **De datum en tijd van de ingreep.** Houd er rekening mee dat er een korte onderbreking van de dienst plaatsvindt, maar u kunt de ingreep plannen om plaats te vinden op elk gewenst moment, 24/7.

- **Bevestiging dat uw gegevens worden gebackupt en bevestiging dat u het risico accepteert dat uw gegevens mogelijk verloren gaan.**


#### Hot-swapping van de schijf (geen server-downtime)

> [!primary]
>
> Dit vervangende type is alleen mogelijk voor [Big-HG](https://www.ovh.nl/dedicated_servers/hg/){.external}-servers met een RAID-kaart.
> 

Als u hot-swapping van een schijf op een server met een megaRAID-kaart maakt, laat dan het LED-lampje knipperen voor de schijf die moet worden vervangen, zodra de interventie is gepland. Dit maakt het proces eenvoudiger voor de teams die aan de vervangingsoperatie werken.

Als uw server een megaRAID-kaart gebruikt, gebruikt u de volgende commando‘s:

- Om het LED-lampje te laten knipperen:

```sh
MegaCli -PdLocate -start -physdrv[E0:S0] -a0
```

- Om het knipperen van het LED-lampje te stoppen:

```sh
MegaCli -PdLocate -stop -physdrv[E0:S0] -a0
```

> [!primary]
>
> Equivalent via het `storcli`-commando:
>
> - Om het knipperen van het LED-lampje te starten:
>
> ```sh
> storcli /c0/e0/s0 start locate
> ```
>
> - Om het knipperen van het LED-lampje te stoppen:
>
> ```sh
> storcli /c0/e0/s0 stop locate
> ```
>


> [!primary]
>
> Ook al laat u het LED-lampje van de schijf knipperen, vergeet niet het serienummer en het *slot* van de schijf op te nemen in uw supportticket.
> 

### Nadat de vervanging is voltooid

Als u een server hebt die hardRAID gebruikt, zal de RAID zichzelf opnieuw opbouwen. Let op: *auto-rebuild* is standaard  ingeschakeld. Ga aub na of u het niet hebt uitgeschakeld. Het hersynchronisatieproces duurt enkele minuten en kan de lees- en schrijfprestaties van uw RAID tijdelijk verminderen.

Als u een server hebt die gebruik maakt van softRAID, raden wij u aan om uw schijven handmatig opnieuw te synchroniseren. Hiervoor kunt u onze [softRAID - EN](/pages/cloud/dedicated/raid_soft){.external}-handleiding raadplegen.


## Verder

[softRAID - EN](/pages/cloud/dedicated/raid_soft){.external}

[hardRAID - EN](/pages/cloud/dedicated/raid_hard){.external}

[Reddingsmodus - EN](https://docs.ovh.com/gb/en/dedicated/rescue_mode/){.external}

Ga in gesprek met andere communityleden op <https://community.ovh.com/en/>.
