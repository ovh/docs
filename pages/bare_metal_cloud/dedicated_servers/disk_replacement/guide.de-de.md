---
title: 'Eine defekte Disk austauschen'
excerpt: 'In dieser Anleitung erklären wir Ihnen, wie Sie eine defekte Festplatte erkennen und deren Austausch beantragen.'
updated: 2018-06-21
---

## Ziel

Wenn Sie feststellen, dass eine Festplatte defekt ist, oder per E-Mail eine Systeminformation über den Ausfall einer Festplatte erhalten haben, sollten Sie schnellstmöglich die notwendigen Maßnahmen ergreifen, um den Austausch der betreffenden Festplatte in die Wege zu leiten.

**Hier erfahren Sie, wie Sie einen Festplattendefekt erkennen und den Austausch der betreffenden Festplatte durch unsere Teams beantragen.**

> [!warning]
>Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Denken Sie daran, diese Aktionen nötigenfalls an Ihre Situation anzupassen.
>
> Bei Schwierigkeiten kontaktieren Sie bitte einen [spezialisierten Dienstleister](/links/partner) oder stellen Sie Ihre Fragen in der [OVHcloud Community](https://community.ovh.com/en/). Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten.
>

## Voraussetzungen

- Sie sind via SSH (*Root*-Zugriff) mit Ihrem [OVHcloud Dedicated Server](https://www.ovh.de/dedicated_server/){.external} verbunden (Linux).

## In der praktischen Anwendung

### Ihre Daten sichern

Bevor Sie weitere Schritte einleiten, **sollten Sie in jedem Fall eine vollständige Datensicherung vornehmen**. Der alleinige Zweck einer RAID-Infrastruktur (mit Ausnahme von RAID 0) besteht im Schutz Ihrer Daten im Falle eines Festplattenausfalls. Sollte eine der Festplatten nicht mehr nutzbar sein, hängt der Fortbestand Ihrer Daten vom Zustand der verbleibenden Festplatten ab.

Es ist zwar außerordentlich selten, dass zwei Festplatten gleichzeitig ausfallen, allerdings auch nicht unmöglich.
Wir führen keinen Festplattenwechsel durch ohne:

-	eine Bestätigung Ihrerseits über die ordnungsgemäße Sicherung Ihrer Daten
-	eine Bestätigung Ihrerseits, dass Sie sich der Möglichkeit eines Datenverlusts im Rahmen des Festplattenaustauschs bewusst sind

### Eine defekte Festplatte erkennen

Sollten Sie durch eine E-Mail-Benachrichtigung oder eine Überprüfung Ihrerseits von einer Festplattenstörung Kenntnis erlangen, sollte unbedingt der Zustand aller Festplatten überprüft werden. Falls zwei Festplatten innerhalb derselben RAID-Infrastruktur nicht mehr ordnungsgemäß funktionieren, werden wir diejenige mit den meisten Fehlern zuerst austauschen.

#### Server mit Software-RAID

Falls Sie einen Server mit Software-RAID besitzen, erfahren Sie in der Anleitung [Software-RAID](/pages/bare_metal_cloud/dedicated_servers/raid_soft){.external}, wie Sie die auf Ihrem Server installierten Festplatten finden.

Wenn Ihnen der Zugriffspfad zu Ihren Festplatten bekannt ist, können Sie diese mithilfe des Befehls `smartctl` folgendermaßen überprüfen:

```sh
smartctl -a /dev/sdX
```

> [!primary]
>
> Denken Sie daran, die Folge `/dev/sdX` durch den Zugriffspfad auf Ihre Festplatte zu ersetzen; sdX steht hier für die betreffende Festplatte, sdA, sdB etc.
> 

So können Sie auch die betreffende Seriennummer (*Serial Number*) der zu ersetzenden Festplatten in Erfahrung bringen, um diese später dem Techniker mitzuteilen.

Hier ein Beispiel für eine entsprechende Ergebnisausgabe:

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

Die Seriennummer finden Sie in unserem Beispiel also in folgender Zeile:

**`Serial Number:    5329T58N`**

#### Server mit Hardware-RAID

Falls Sie einen Server mit Hardware RAID besitzen, lesen Sie unsere Anleitung [Managing Hardware RAID - EN](/pages/bare_metal_cloud/dedicated_servers/raid_hard){.external} und folgen Sie den Vorgaben für Ihren RAID-Controller-Typ, um die Zugriffspfade zu Ihren Festplatten zu identifizieren.

Wenn Ihnen der Zugriffspfad zu Ihren Festplatten bekannt ist, können Sie diese mithilfe des Befehls `smartctl` folgendermaßen überprüfen:

```sh
smartctl -d megaraid,N -a /dev/sdX
```

> [!primary]
>
> Denken Sie daran, die Folge /dev/sdX durch den Zugriffspfad auf Ihre Festplatte zu ersetzen; sdX steht hier für die betreffende Festplatte, sdA, sdB etc.
> 

> [!warning]
>
> In einigen Fällen erscheint möglicherweise folgender Hinweis: `/dev/sda [megaraid_disk_00][SAT]: Device open changed type from 'megaraid' to 'sat'`.
> 
> In diesem Fall genügt es, `megaraid` durch `sat+megaraid` zu ersetzen: `smartctl -d sat+megaraid,N -a /dev/sdX`.
> 

Bei einer LSI-RAID-Karte können Sie die Festplatte mit dem Befehl `smartctl` folgendermaßen testen:

```sh
smartctl -a /dev/sgY
```

Dabei ist die RAID-Nummer anzugeben (/dev/sg0 = RAID 1, /dev/sg1 = RAID 2 etc.)

#### Server mit NVMe

Bei einer NVMe-Disk muss der Server in erst in den [Rescue-Modus](/pages/bare_metal_cloud/dedicated_servers/rescue_mode){.external} versetzt werden. Installieren Sie dann das Tool `nvme-cli`.

```sh
apt install nvme-cli
```

Verwenden Sie in den Befehl `nvme list`, um die Seriennummern Ihrer Festplatten in Erfahrung zu bringen:

```sh
root@rescue:~# nvme list
>>> Node           SN                  Model                 Namespace Usage                     Format        FW Rev
>>> -------------- ------------------- --------------------- --------- ------------------------- ------------- --------
>>> /dev/nvme0n1   CVPF636600YC450RGN  INTEL SSDPE2MX450G7   1         450.10  GB / 450.10  GB   512  B +  0 B MDV10253
>>> /dev/nvme1n1   CVPF6333002Y450RGN  INTEL SSDPE2MX450G7   1         450.10  GB / 450.10  GB   512  B +  0 B MDV10253
```

### Austausch der Festplatte anfordern

#### Cold Swap (Abschaltung des Servers notwendig)

Den Austausch einer Ihrer Festplatten können Sie ganz bequem durch die Erstellung einer Support-Anfrage über Ihr [OVHcloud Help Center](https://help.ovhcloud.com/csm?id=csm_get_help) anfordern. Sie können den Vorgang beschleunigen, indem Sie uns alle mit den Tests verbundenen Daten mitteilen. Hier eine Zusammenfassung der von uns benötigten Informationen:

- **die Seriennummer sowohl der zu ersetzenden Festplatte als auch aller weiteren intakten Festplatten**. Wie Sie die Seriennummer der zu ersetzenden Festplatte in Erfahrung bringen, sehen Sie in [dieser Anleitung](/pages/bare_metal_cloud/dedicated_servers/how_to_find_hdd_serial){.external} (Englisch). Sollten Sie aus irgendeinem Grund die Seriennummer der Festplatte nicht abrufen können, geben Sie dies bitte im Ticket an und teilen Sie uns die Seriennummern der nicht zu ersetzenden Festplatten mit. 

Wie oben bereits erläutert, benötigen wir idealerweise die Seriennummern aller Festplatten. Diese werden dem Techniker im Rechenzentrum mitgeteilt, um Fehler beim Austausch zu vermeiden.

- **Datum und Uhrzeit für den Beginn des Eingriffs**. Eine kurze Dienstunterbrechung muss eingeplant werden. Sie können den Beginn des Eingriffs aber auf jede beliebige Uhrzeit an jedem beliebigen Wochentag festlegen.

- **die Bestätigung, dass Ihre Daten ordnungsgemäß gesichert sind und Sie einen möglichen Datenverlust akzeptieren**.

#### Hot Swap (ohne Serverabschaltung)

> [!primary]
>
> Die Möglichkeit des Hot Swap ohne Serverabschaltung besteht ausschließlich für die Server [FS-MAX](https://www.ovh.de/dedicated_server/storage/1801fs05.xml){.external} und [Big-HG](https://www.ovh.de/dedicated_server/hg/1801bhg01.xml){.external} mit RAID-Karte.
> 

Bei einem Hot Swap auf einem Server mit MegaRAID-Karte werden Sie aufgefordert, zum Zeitpunkt des gewünschten Interventionsstarts die LED der zu ersetzenden Festplatte blinken zu lassen, um so die Arbeit unserer Techniker zu erleichtern.

Für Server mit MegaRAID-Karte verwenden Sie bitte folgende Befehle:

- Blinken der LED starten:

```sh
MegaCli -PdLocate -start -physdrv[E0:S0] -a0
```

- Blinken der LED beenden:

```sh
MegaCli -PdLocate -stop -physdrv[E0:S0] -a0
```

> [!primary]
>
> Analog mithilfe des Befehls `storcli`:
>
> - Blinken der LED starten:
>
> ```sh
> storcli /c0/e0/s0 start locate
> ```
>
> - Blinken der LED beenden:
>
> ```sh
> storcli /c0/e0/s0 stop locate
> ```
>

> [!primary]
>
> Auch wenn die blinkende LED eine wertvolle Hilfe für unsere Techniker ist, geben Sie bitte dennoch in Ihrer Anfrage die Seriennummer sowie den *Slot* der betreffenden Festplatte an.
> 

### Nach dem Austausch der Festplatte

Wenn Sie über einen Hardware-RAID verfügen, wird sich der RAID selbst wiederherstellen. Bitte beachten Sie: Hierfür darf die standardmäßig aktivierte Funktion *auto-rebuild* nicht manuell von Ihnen deaktiviert worden sein. Bitte beachten Sie auch, dass der Resynchronisationsprozess einige Minuten in Anspruch nehmen kann und die Lese-/Schreibperformance Ihres RAID in dieser Zeit eingeschränkt sein kann.

Wenn Sie über einen Software-RAID verfügen, muss die Resynchronisation Ihrer Festplatten manuell gestartet werden. Wie das geht, erfahren Sie in unserer Anleitung zum Thema [Software-RAID](/pages/bare_metal_cloud/dedicated_servers/raid_soft){.external}.

## Weiterführende Informationen

[Software-RAID](/pages/bare_metal_cloud/dedicated_servers/raid_soft)

[Hardware-Raid - EN](/pages/bare_metal_cloud/dedicated_servers/raid_hard)

[Rescue-Modus](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
