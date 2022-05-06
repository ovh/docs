---
deprecated: true
title: 'Activering en gebruik van de reddingsmodus'
slug: ovh-rescue
excerpt: 'Reddingsmodus activeren en gebruiken op een dedicated server'
section: 'Diagnose en reddingsmodus'
---

**Laatste update 16-08-2018**

## Introductie

De reddingsmodus is een tool op uw dedicated server die u op een tijdelijk besturingssysteem kunt starten om problemen te diagnosticeren en op te lossen.

**Deze handleiding geeft uitleg over het inschakelen en gebruiken van de reddingsmodus op uw server.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/UdMZSgXATFU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Vereisten

- U moet SSH-toegang (root) hebben tot uw dedicated server.


## Instructie

U kunt de reddingsmode activeren door in te loggen op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}. Kies uw server in het `Dedicated`{.action}-gedeelte en vervolgens `Dedicated Servers`{.action}. Ga vervolgens naar `Serverstatus`{.action} > `Algemene informatie`{.action} > `...`{.action} en klik op de knop `Bewerken`{.action} om de opstartmodus te wijzigen.

![Wijzig de opstartmodus](images/rescue-mode-01.png){.thumbnail}

Selecteer in het volgende scherm `Opstarten in reddingsmodus`{.action}. Als uw server een Linux-besturingssysteem heeft, selecteert u `rescue-customer`{.action} in de vervolgkeuzelijst. Als u een Windows-server hebt, selecteert u `WinRescue`{.action}. Voer ten slotte uw e-mailadres in het tekstveld in en klik op `Volgende`{.action}.

![Rescue-pro modus](images/rescue-mode-03.png){.thumbnail}

Bevestig uw opties op het volgende scherm en start uw server opnieuw op om de wijzigingen toe te passen. 

![Reboot de server](images/rescue-mode-02.png){.thumbnail}

Uw server zal nu opnieuw opstarten in de reddingsmodus, u ontvangt inloggegevens om in te loggen via het e-mailadres dat u hebt opgegeven. Om de reddingsmodus te verlaten, wijzigt u simpelweg de opstartmodus naar `Opstarten op de harde schijf`{.action} en start u uw server opnieuw op.

### Linux

#### Gebruik de webinterface.

Nadat uw server opnieuw is opgestart, ontvangt u een e-mail met de inloggegevens voor uw reddingsmodus. De e-mail bevat ook een link naar de webinterface van de reddingsmodus, die u kunt gebruiken om de volgende tests uit te voeren:

- <b>Harde schijven</b>: controleert hun integriteit met SMART-tests.
- <b>Processoren</b>: controleert of ze normaal functioneren.
- <b>Partities (status)</b>: controleert de status van de schijf.
- <b>Partities (bestandssysteem)</b>: controleert het bestandssysteem.
- <b>Partities (explore)</b>: start een browser voor het verkennen van bestanden. U kunt de bestanden niet bewerken met deze tool, maar u kunt er wel een backup van maken.
- <b>Geheugen</b>: controleert het RAM-geheugen dat op de server is geïnstalleerd.

![Webinterface voor reddingsmodus](images/rescue-mode-04.png){.thumbnail}

#### Gebruik SSH (opdrachtregel).


> [!primary]
> 
> Als u een SSH-sleutel gebruikt (ook actief in het OVH Control Panel), ontvangt u geen wachtwoord. Zodra de server zich in de reddingsmodus bevindt, kunt u rechtstreeks verbinding maken via uw SSH-sleutel.
>

Nadat uw server opnieuw is opgestart, ontvangt u een e-mail met de inloggegevens voor uw reddingsmodus. U moet dan toegang krijgen tot uw server via de gebruikelijke opdrachtregels, met behulp van het root-wachtwoord voor de reddingsmodus in plaats van die van uzelf.

Bijvoorbeeld:

```sh
ssh root@IP_van_uw_server
Wachtwoord: wachtwoord_van_uw_server
```

Voor de meeste wijzigingen die u aanbrengt in uw server via SSH in de reddingsmodus, moet u een partitie koppelen. Deze modus heeft een eigen tijdelijk bestandssysteem, dus alle bestandssysteemwijzigingen die u aanbrengt in de reddingsmodus gaan verloren zodra u de server opnieuw opstart in de normale modus.

U kunt partities koppelen met behulp van het commando `mount` in SSH. Allereerst moet u uw partities vermelden, zodat u de naam van de partitie kunt ophalen die u wilt koppelen. U kunt de volgende codevoorbeelden raadplegen:

```sh
rescue-customer:~# fdisk -l

Disk /dev/hda 40.0 GB, 40020664320 bytes
255 heads, 63 sectors/track, 4865 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes

Device Boot Start End Blocks Id System
/dev/hda1 * 1 1305 10482381 83 Linux
/dev/hda2 1306 4800 28073587+ 83 Linux
/dev/hda3 4801 4865 522112+ 82 Linux swap / Solaris

Disk /dev/sda 8254 MB, 8254390272 bytes
16 heads, 32 sectors/track, 31488 cylinders
Units = cylinders of 512 * 512 = 262144 bytes

Device Boot Start End Blocks Id System
/dev/sda1 1 31488 8060912 c W95 FAT32 (LBA)
```

Zodra u de naam van de partitie die u wilt mounten hebt gevonden, gebruikt u het volgende commando:

```sh
rescue:~# mount /dev/hda1 /mnt/
```

> [!primary]
>
> Uw partitie zal nu worden gemount.  U kunt vervolgens bewerkingen uitvoeren op het bestandssysteem.
> 
> Als uw server een softRAID-configuratie gebruikt, moet u uw RAID-volume (meestal: /dev/mdX) koppelen.
>


### Windows

#### Toegang tot WinRescue

Nadat uw server opnieuw is opgestart, ontvangt u een e-mail met de inloggegevens voor uw reddingsmodus. Om ze te gebruiken, moet u een VNC-console downloaden en installeren of de `IPMI`-module gebruiken in het [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.

![Winrescue Windows](images/rescue-mode-06.png){.thumbnail}

#### WinRescue tool

|Tools|Omschrijving|
|---|---|
|Freecommander|Een bestandsbeheerder met alle standaardfuncties die u nodig hebt.|
|NTPWdi|Een eenvoudig te gebruiken wachtwoordbeheerder. U kunt het gebruiken om de wachtwoorden van gebruikersaccounts op uw server opnieuw te activeren of te wijzigen. Deze tool is handig als u ooit uw inloggegevens kwijtraakt of een beveiligingsaccount opnieuw moet activeren.|
|FileZilla|Een open-source FTP client. Het ondersteunt SSH- en SSL-protocollen en heeft een duidelijke en intuïtieve drag-and-drop-interface. U kunt het gebruiken om uw gegevens over te brengen naar een FTP-server, zoals de FTP-backup-service die bij de meeste OVH servermodellen wordt geleverd.|
|7-ZIP|Een hulpprogramma voor het comprimeren en archiveren van bestanden, dat de volgende indelingen bevat: ARJ, CAB, CHM, CPIO, CramFS, DEB, DMG, FAT, HFS, ISO, LZH, LZMA, MBR, MSI, NSIS, NTFS, RAR, RPM, SquashFS, UDF, VHD, WIM, XAR en Z. U kunt het ook gebruiken om uw eigen archieven te maken in de volgende formaten: BZIP2, GZIP, TAR, WIM, XZ, Z, en ZIP.|
|Avast Virus Cleaner|Een antivirusprogramma dat bestanden scant en opschoont.|
|ActivNIC|Een tool die u kunt inzetten om een interfacekaart voor uitgeschakeld netwerk in te schakelen.|
|SRVFirewall|Een script dat de firewall op uw server in- en uitschakelt.|
|SysInternal|Een softwarepakket van Microsoft met verschillende tools die u kunt gebruiken om netwerkonderhoud uit te voeren en processen te beheren.|
|Virtual Clone Drive|Een tool waarmee u BIN-, CCD- en ISO-bestanden in een virtuele CD-lezer kunt plaatsen.|
|Firefox|Een browser|
|Testdisk|Een krachtige applicatie voor dataherstel. U kunt het gebruiken om beschadigde partities te herstellen en aan te passen, verloren partities te vinden, een boot sector te repareren en zelfs een defecte MBR opnieuw te bouwen.|

## Verder

Ga in gesprek met onze communitygebruikers via <https://community.ovh.com/en/>.