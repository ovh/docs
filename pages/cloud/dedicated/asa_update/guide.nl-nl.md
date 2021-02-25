---
deprecated: true
title: 'Upgraden van de CISCO ASA firewall'
excerpt: 'Ontdek hoe u uw CISCO ASA firewall kunt upgraden'
slug: upgrade-firewall-cisco-asa
section: 'Geavanceerd gebruik'
---

**Laatste update 12-03-2018**

## Introductie

Om ervoor te zorgen dat uw systeem optimaal wordt beschermd, moet u uw firewall voor Cisco Adaptive Security Appliance (ASA) regelmatig updaten met de nieuwste patches. Hiermee voorkomt u mogelijke beveiligingsrisico's.

**In deze handleiding wordt uitgelegd hoe u uw Cisco ASA-firewall kunt upgraden.**

## Vereisten

- U moet toegang hebben tot een [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}.


## Instructies

### Schakel de Cisco ASA-firewall uit via het Control Panel

Het upgradeproces vereist dat uw systeem meerdere keren opnieuw opstart. Daarom raden we aan de Cisco ASA-firewall uit te schakelen, zodat uw server tijdens het upgradeproces geen storingen ondervindt.

Hiervoor gaat u naar uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external} in het gedeelte `Dedicated`{.action}. Kies vervolgens uw dedicated server, en ` Cisco ASA Firewall`{.action}. Klik vervolgens op `Cisco ASA-firewall uitschakelen`{.action} aan de rechterkant.

![Schakel ASA uit](images/customer_panel_asa_disable.png){.thumbnail}

### Pas configuratie toe

#### Eerste methode via ASDM

Log in op uw Cisco Adaptive Security Device Manager (of ASDM), kies dan `File`{.action} en `Save Running Configuration to Flash`{.action}:

![Configuratie opslaan via ASDM](images/asa1.jpg){.thumbnail}

#### Tweede methode via SSH

Log u in op de ASA via het SSH-protocol:

```sh
user@desk:~$ ssh adminovh@IP_ASA

adminovh@IP_ASAs password:
Type help or '?' for a list of available commands.

asa12345> en
Password:
```

Draai het volgende commando uit:

```sh
asa12345# write memory

Building configuration...
Cryptochecksum: 4b86b1e4 2e731d6b 9d1fc491 a5eae0f3
6854 bytes copied in 1.20 secs (6854 bytes/sec)
[OK]
```


### Sla de configuratie op

Creëer een lokaal bestand, bijvoorbeeld `backupAsa.txt`. Log u in op ASDM en ga naar `Tools`{.action}, dan `Backup Configurations`{.action}.

![Sla de configuratie op via ADSM 1](images/asa2.jpg){.thumbnail}

Selecteer in het popup-menu dat wordt geopend het lokale bestand dat u zojuist hebt gemaakt (met `Browse Local...`{.action}) en sla de configuratie op door op Backup te klikken.

![Sla de configuratie op via ADSM 2](images/asa3.jpg){.thumbnail}


### Laad de ASA opnieuw

Deze stap is belangrijk, omdat u ervoor moet zorgen dat de ASA naar behoren werkt en toegankelijk is na een enkele reload.

#### Eerste methode via ASDM

Log u in op Cisco Adaptive Security Device Manager, kies vervolgens `Tools`{.action} en `System Reload...`{.action}:

![Herlaad ASA via ASDM 1](images/asa5.jpg){.thumbnail}

Als u de dienst onmiddellijk opnieuw wilt laden, selecteert u in het venster dat verschijnt `Reload Start Time` > `Now`{.action} > `Schedule Reload`{.action}.

![Herlaad ASA via ASDM 2](images/asa6.jpg){.thumbnail}

![Herlaad ASA via ASDM 3](images/asa7.jpg){.thumbnail}


#### Tweede methode via SSH

Log u in op de ASA met behulp van het SSH-protocol en voer het volgende commando uit`reload`:

```sh
asa12345# reload

Proceed with reload? [confirm]
***
*** --- START GRACEFUL SHUTDOWN ---
Shutting down isakmp
Shutting down File system

***
*** --- SHUTDOWN NOW ---
```

De herstart voor het opnieuw laden van de configuratie duurt enkele minuten.


### Schakel de ASA opnieuw in via het Control Panel

Hiervoor gaat u naar uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external} in het gedeelte `Dedicated`{.action}. Kies vervolgens uw dedicated server, en ` Cisco ASA Firewall`{.action}. Klik vervolgens op `Cisco ASA-firewall inschakelen`{.action} aan de rechterkant.

![Schakel ASA in](images/customer_panel_asa_enable.png){.thumbnail}


Na het herladen, nadat de ASA-firewall opnieuw is ingeschakeld, controleert u of alle diensten van uw server correct werken. Als alles werkt, gaat u naar de volgende stap. Als u problemen ondervindt, voert u de controles uit die nodig zijn om ze op te lossen voordat u doorgaat met de volgende stappen.


### Schakel de Cisco ASA-firewall opnieuw uit via het Control Panel

Nu moet u de Cisco ASA-firewall opnieuw uitschakelen, net als in de eerste stap.

Hiervoor gaat u naar uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external} in het gedeelte `Dedicated`{.action}. Kies vervolgens uw dedicated server, en `Cisco ASA Firewall`{.action}. Klik vervolgens op `Cisco ASA-firewall uitschakelen`{.action} aan de rechterkant.

![Schakel ASA uit](images/customer_panel_asa_disable.png){.thumbnail}


### Controleer de binaire afbeelding die momenteel wordt gebruikt

#### Eerste methode via ASDM

Meld u aan bij Cisco Adaptive Security Device Manager en ga vervolgens naar `Apparaatinformatie`{.action}, dan `Algemeen`{.action}. Hier ziet u de Cisco ASA- en ASDM-versies die u gebruikt. We raden u aan deze gegevens te noteren en bij de hand te houden.

![Controleer binaire afbeeldingen via ASDM](images/asa9.jpg){.thumbnail}


#### Tweede methode via SSH

Log in via het SSH-protocol en voer het volgende commando in:


```sh
asa12345# sh run | i bin

boot system disk0:/asa847-30-k8.bin
asdm image disk0:/asdm-771.bin
```

- *boot system*: ASA versie
- *asdm image*: ASDM versie


### Ga na welke binaire afbeelding moet worden gebruikt

Raadpleeg de onderstaande tabel om de binaire afbeelding te vinden die u moet gebruiken:

|Huidige ASA-versie|Eerste versie om naar te upgraden|Upgrade dan naar|
|---|---|---|
|8.2(x) of ouder|8.4(6)|9.1(3) en later|
|8.3(x)|8.4(6)|9.1(3) en later|
|8.4(1) tot 8.4(4)|8.4(6) of 9.0(2+)|9.1(3) en later|
|8.4(5+)|Geen|9.1(3) en later|
|8.5(1)|9.0(2+)|9.1(3) en later|
|8.6(1)|9.0(2+)|9.1(3) en later|
|9.0(1)|9.0(2+)|9.1(3) en later|
|9.0(2+)|Geen|9.1(3) en later|
|9.1(1)|9.1(2)|9.1(3) en later|
|9.1(2+)|Geen|9.1(3) en later|
|9.2(x)|Geen|9.2(2) en later|

Als u bijvoorbeeld ASA-versie 8.4 (2) gebruikt, dan moet u eerst uw systeem upgraden naar versie 8.4 (6) en vervolgens upgraden naar 8.4 (7+) of 9.2+.


Voor meer informatie kunt u de [Cisco ASA-upgrade](https://www.cisco.com/c/en/us/td/docs/security/asa/migration/upgrade/upgrade.html){.external}-handleiding raadplegen.

> [!primary]
>
> Voor Cisco ASA-firewalls met 256 MB geheugen raden we aan om alleen naar 8.4 (x) te upgraden. Versies 9.1 (x) en 9.2 (x) gebruiken bijna alle 256 MB zelfs voordat ze al gaan draaien.
>

Er zijn twee manieren om te controleren welke versie u hebt:

- In SSH met het commando: 

```
asa12345# sh ver| i RAM

Hardware: ASA5505, 512 MB RAM, CPU CPU Geode 500 MHz
```

- In ASDM, in het `Tools`{.action}-gedeelte, vervolgens `Command Line Interface...`{.action}:

![Controleer de binaire versie in de ASDM 1](images/asa10.jpg){.thumbnail}

![Controleer de binaire versie in de ASDM 2](images/asa11.jpg){.thumbnail}


### Ongebruikte binaire afbeeldingen verwijderen

Voordat u nieuwe binaire afbeeldingen toevoegt, raden we aan oude afbeeldingen te verwijderen.

#### Eerste methode via ASDM

Log u in op Cisco Adaptive Security Device Manager. Ga dan naar `Tools`{.action}, vervolgens `File Management...`{.action}.

![Verwijder ongebruikte binaire afbeeldingen in ASDM 1](images/asa12.jpg){.thumbnail}

Verwijder vervolgens de binaire afbeeldingen (.*bin*) die u niet gebruikt. Nu zou u slechts één bestand voor de ASA moeten hebben en een andere voor de ASDM op de schijf.

![Verwijder ongebruikte binaire afbeeldingen in ASDM 2](images/asa13.jpg){.thumbnail}


#### Tweede methode via SSH

Log u in op uw ASA via het SSH-protocol en verwijder vervolgens de bestanden nadat u ze hebt vermeld:

```sh
asa12345# sh flash: | i bin

128 26995116 Apr 18 2017 23:55:52 asdm-771.bin
144 23016144 Dec 12 2016 14:35:07 asdm-721-150.bin
138 25214976 Nov 18 2017 23:29:54 asa847-30-k8.bin
```

```sh
asa12345# delete flash:asdm-781-150.bin

Delete filename [asdm-721-150.bin]?
Delete disk0:/asdm-721-150.bin? [confirm]
```

### Voeg de ASDM binaire afbeeldingen toe en installeer deze

#### Eerste methode via ASDM

Log u in op Cisco Adaptive Security Device Manager. Ga vervolgens naar `Tools`{.action} en klik op `Upgrade Software from Local Computer...`{.action}.

![Voeg de ASDM binaire afbeeldingen toe en installeer deze via ASDM 1](images/asa14.jpg){.thumbnail}

Selecteer in het volgende venster:

- *Image to upload*: ASDM;
- *Local File Patch*: klik `Browse Local Files`{.action} en kies uw ASDM binaire beeldversie.

Om uw keuze te bevestigen, klikt u op `Upload Image`{.action} en vervolgens op `Yes`{.action} om te bevestigen dat dit de boot-afbeelding zou moeten zijn:

![Voeg de ASDM binaire afbeeldingen toe en installeer deze via ASDM 2](images/asa15.jpg){.thumbnail}

![Voeg de ASDM binaire afbeeldingen toe en installeer deze via ASDM 3](images/asa16.jpg){.thumbnail}


#### Tweede methode via SSH

De binaire afbeelding moet van tevoren op een FTP-server worden geplaatst, daarna moet u de ASA configureren met behulp van het SSH-protocol, en de configuratie opslaan:

```sh
asa12345# copy ftp://USER:PASSWORD@FTP_IP/FOLDER/asdm-781.bin flash:asdm-781.bin

Address or name of remote host [FTP_IP]?

Source username [USER]?

Source password [PASSWORD]?

Source filename [asdm-781.bin]?

Destination filename [asdm-781.bin]?

Accessing ftp://USER:PASSWORD@FTP_IP/FOLDER/asdm-781.bin...!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Writing file disk0:/asdm-781.bin...
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
25025404 bytes copied in 41.690 secs (610375 bytes/sec)
```

```sh
asa12345# conf t

asdm image asa12345:/asdm-781.bin
asa12345(config)# end

asa12345# write memory
```

### Voeg de ASDM binaire afbeeldingen toe en installeer deze

#### Eerste methode via ASDM

Log u in op Cisco Adaptive Security Device Manager. Ga vervolgens naar `Tools`{.action} en klik op `Upgrade Software from Local Computer...`{.action}.

![Voeg de ASDM binaire afbeeldingen toe en installeer deze via ASDM 1](images/asa14.jpg){.thumbnail}

Selecteer in het volgende venster:

- *Image to upload*: ASA;
- *Local File Patch*: klik `Browse Local Files`{.action} en kies uw ASDM binaire beeldversie.

 
Om uw keuze te bevestigen, klikt u op `Upload Image`{.action} en vervolgens op `Yes`{.action} om te bevestigen dat dit de boot-afbeelding zou moeten zijn:

![Voeg de ASDM binaire afbeeldingen toe en installeer deze via ASDM 2](images/asa18.jpg){.thumbnail}

![Voeg de ASDM binaire afbeeldingen toe en installeer deze via ASDM 3](images/asa20.jpg){.thumbnail}


#### Tweede methode via SSH

Log in via het SSH-protocol en voer het volgende commando in:

```sh
asa12345# copy ftp://USER:PASSWORD@FTP_IP/FOLDER/asdm-924.bin flash:asdm-924.bin

Address or name of remote host [FTP_IP]?

Source username [USER]?

Source password [PASSWORD]?

Source filename [asdm-924.bin]?

Destination filename [asdm-924.bin]?

Accessing ftp://USER:PASSWORD@FTP_IP/FOLDER/asdm-924.bin...!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Writing file disk0:/asdm-924.bin...
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
28057462 bytes copied in 46.270 secs (609345 bytes/sec)

asa12345# conf t

asdm image asa12345:/asdm-924.bin

asa12345(config)# end

asa12345# write memory
```
 

### Laad de ASA opnieuw

Deze stap is belangrijk, omdat u ervoor moet zorgen dat de ASA naar behoren werkt en toegankelijk is na een enkele reload.

#### Eerste methode via ASDM

Log u in op Cisco Adaptive Security Device Manager. Kies dan `Tools`{.action}, vervolgens `System Reload...`{.action}:

![Herlaad ASA via ASDM 1](images/asa5.jpg){.thumbnail}

Als u de dienst onmiddellijk opnieuw wilt laden, selecteert u in het venster dat verschijnt `Reload Start Time`: `Now`{.action}, klik daarna op `Schedule Reload`{.action}:

![Herlaad ASA via ASDM 2](images/asa6.jpg){.thumbnail}

![Herlaad ASA via ASDM 3](images/asa7.jpg){.thumbnail}


#### Tweede methode via SSH

Log u in op de ASA met behulp van het SSH-protocol en voer het volgende commando uit`reload`:

```sh
asa12345# reload

Proceed with reload? [confirm]
***
*** --- START GRACEFUL SHUTDOWN ---
Shutting down isakmp
Shutting down File system

***
*** --- SHUTDOWN NOW ---
```

De herstart voor het opnieuw laden van de configuratie duurt enkele minuten.

 

> [!warning]
>
> Als u in dit stadium de ASA-binaire afbeelding niet kunt toevoegen, start u het systeem opnieuw op om de ASDM te upgraden en verwijdert u vervolgens de ongebruikte ASDM-binaire afbeelding om ruimte vrij te maken.
> 
> Update vervolgens de ASA binaire afbeelding volgens de hierboven beschreven procedure.
>

 

### Corrigeer de configuratie

Wanneer u ASA upgradet van versies ouder dan 8.4.6, ziet u deze nieuwe configuratie na het opnieuw opstarten:

```sh
asa12345# sh run | i bin

no arp permit-nonconnected
```


De configuratie moet als volgt worden gecorrigeerd: 

```sh
asa12345# conf t
asa12345(config)# aarp permit-nonconnected
asa12345(config)# end
asa12345# write memory

Building configuration...
Cryptochecksum: 4b86b1e4 2e731d6b 9d1fc491 a5eae0f3
6854 bytes copied in 1.20 secs (6854 bytes/sec)
[OK]
```

![Upgraded Firewall Cisco ASA](images/asa10.jpg){.thumbnail}

![Upgraded Firewall Cisco ASA](images/asa23.jpg){.thumbnail}



### Schakel de ASA opnieuw in via het Control Panel

Hiervoor gaat u naar uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external} in het gedeelte `Dedicated`{.action}. Kies vervolgens uw dedicated server, en `Cisco ASA Firewall`{.action}. Klik vervolgens op `Cisco ASA-firewall inschakelen`{.action} aan de rechterkant.

![Schakel ASA in](images/customer_panel_asa_enable.png){.thumbnail}


Uw ASA is geüpgraded. 

![Upgraded Firewall Cisco ASA](images/asa22.jpg){.thumbnail}



## Verder

Ga in gesprek met andere communityleden op <https://community.ovh.com/en/>.