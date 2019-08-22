---
title: 'Seriennummer einer Festplatte ermitteln'
slug: find-disk-serial-number
excerpt: 'Hier erfahren Sie, wie Sie die Seriennummer einer Festplatte ermitteln, um diese auszutauschen.'
section: 'RAID & Festplatten'
---

**Stand 02.07.2019**

## Einleitung

Um das Fehlerrisiko beim Austausch einer Festplatte zu minimieren, bitten wir unsere Kunden, die Seriennummer der zu ersetzenden Festplatte anzugeben. In den meisten Fällen finden Sie diese, indem Sie Ihre Festplatten mit dem Smartmontools-Tool überprüfen.

**In dieser Anleitung erfahren Sie, wie Sie die Seriennummer Ihrer Festplatte ermitteln.**

## Voraussetzungen

- Sie verfügen über einen [dedizierten Server](https://www.ovh.de/dedicated_server/){.external}.
- Sie haben als Administrator (Root) via SSH Zugriff auf Ihren Server.
- Auf Windows Servern ist das Tool sas2ircu installiert (verfügbar über das [Broadcom](https://www.broadcom.com/support/download-search/?dk=sas2ircu){.external} Search Engine).

## Beschreibung

> [!primary]
>
> Bei einer NVMe-Festplatte muss der Server in den Rescue64-Modus versetzt und das standardmäßig installierte Tool nvme-cli verwendet werden.
> 

### Seriennummer einer Festplatte ermitteln (Software-RAID)

Um die Seriennummer Ihrer Festplatte mit Software-RAID-Konfiguration zu ermitteln, können Sie einfach smartctl verwenden:

```sh
# smartctl -a /dev/sdX | grep Serial Serial Number:    XXXXXXX
```

Das Gerät wird über das Betriebssystem erkannt. Zum Beispiel: `/dev/sda`, `/dev/sdb` etc.

### Seriennummer einer NVMe-Festplatte ermitteln

Bei NVMe-Festplatten muss der Befehl `nvme list` verwendet werden.

```sh
root@rescue:~# nvme list

Node          SN                  Model                Namespace  Usage                      Format   FW Rev
/dev/nvme0n1  CVPF636600YC450RGN  INTEL SSDPE2MX450G7  1          450.10 GB / 450.10 GB 512  B + 0 B  MDV10253
/dev/nvme1n1  CVPF6333002Y450RGN  INTEL SSDPE2MX450G7  1          450.10 GB / 450.10 GB 512  B + 0 B  MDV10253
```

Nun können Sie die Seriennummern Ihrer NVMe-Festplatten einsehen (`nvme0` und `nvme1`).

### Seriennummer einer Festplatte ermitteln (Windows)

Die Vorgehensweise für Windows ist ähnlich wie bei Linux. Wir werden das Tool sas2ircu mit denselben Befehlen verwenden wie zuvor für Linux.

> [!primary]
>
> Die Befehlszeile muss mit Administratorrechten ausgeführt werden, um Fehler zu vermeiden.
> 

Um die Seriennummer einer Festplatte mit Software-RAID-Konfiguration zu ermitteln, verwenden Sie den folgenden Befehl:

```sh
# .\smartctl -a /dev/sdX Serial Number: 1234567890
```

Das Gerät wird über das Betriebssystem erkannt und wie folgt angezeigt: `/dev/sda`, `/dev/sdb` etc.

![smart_sdb_windows](images/smart_sdb_windows.png){.thumbnail}


### Seriennummer einer Festplatte ermitteln (Hardware-RAID)

Für eine detaillierte Übersicht der Befehle sowie die Vorgehensweise beim Testen Ihrer Festplatten lesen Sie folgende [Anleitung (LSI Raid Controller)](https://docs.ovh.com/gb/en/dedicated/raid-hard/#using-the-lsi-raid-controller_1){.external} (Englisch).


#### MegaRaid-Controller

##### Schritt 1: RAID-Sets ermitteln

Sie können die Seriennummern der Festplatten über den Befehl `smartctl` ermitteln. Bevor Sie diesen Befehl ausführen, ermitteln Sie zuerst, wie viele RAID-Sets (oder virtuelle Festplatten) sich auf Ihrem Server befinden.

Diese Information erhalten Sie über den folgenden Befehl:

```sh
# MegaCli -LDInfo -Lall -aALL | egrep 'Adapter|Size' | grep -v Strip

Adapter 0

Virtual Drive Information: Size : 36.321 GB

Adapter 1

Virtual Drive Information: Size : 2.727 TB
```

Im obenstehenden Beispiel sind zwei RAIDs auf dem Server eingerichtet: „Adapter 0“ und „Adapter 1“. Diese werden jeweils mit `/dev/sda` und `/dev/sdb` abgebildet.


##### Schritt 2: Festplatteninformationen abrufen

Rufen Sie anschließend über folgenden Befehl die Informationen der physischen Festplatte ab:

```sh
# MegaCli -PDList -aAll | egrep 'Slot\ Number|Device\ Id|Inquiry\ Data|Raw|Firmware\ state' | sed 's/Slot/\nSlot/g'

Slot Number: 0
Device Id: 4
Raw Size: 279.460 GB [0x22eec130 Sectors]
Firmware state: Online, Spun Up
Inquiry Data: BTWL3450062J300PGN  INTEL SSDSC2BB300G4                     D2010355

Slot Number: 1
Device Id: 5
Raw Size: 279.460 GB [0x22eec130 Sectors] 
Firmware state: Online, Spun Up 
Inquiry Data: BTWL345003X6300PGN  INTEL SSDSC2BB300G4                     D2010355

Slot Number: 2
Device Id: 7
Raw Size: 2.728 TB [0x15d50a3b0 Sectors] 
Firmware state: Online, Spun Up 
Inquiry Data:       PN2234P8K2PKDYHGST HUS724030ALA640                    MF8OAA70

Slot Number: 3 
Device Id: 6 
Raw Size: 2.728 TB [0x15d50a3b0 Sectors] 
Firmware state: Online, Spun Up 
Inquiry Data:       PN2234P8JYP59YHGST HUS724030ALA640                    MF8OAA70
```

##### Schritt 3: Seriennummer ermitteln

Verwenden Sie die Geräte-ID und die Adapter-ID, um smartctl zu zeigen, welche Festplatte in welchem RAID-Set gesucht werden soll.

Der Befehl sieht in etwa wie folgt aus:

```sh
# smartctl -d megaraid,N -a /dev/sdX | grep Serial Serial Number: 1234567890
```

Die ID des RAID-Geräts wird wie folgt angezeigt: `/dev/sda` = 1\. RAID, `/dev/sdb` = 2\. RAID etc.


> [!primary]
>
> In manchen Fällen erhalten Sie folgendes Ergebnis:
> 
> ```
> /dev/sda [megaraid_disk_00] [SAT]: Device open changed type from 'megaraid' to 'sat'
> ```
> 
> Ersetzen Sie in diesem Fall `megaraid` durch `sat+megaraid`:
>
> ```
> smartctl -d sat+megaraid,N -a /dev/sdX | grep Serial Number:    1234567890
> ```
>

#### Seriennummer einer Festplatte ermitteln (LSI-RAID-Controller)

Der LSI-RAID-Controller verwendet ein Modul namens `sg-map`, das Geräte in der Form `/dev/sgX` abbildet („X“ ist hierbei die Nummer des Geräts).

Um zu ermitteln, welche Festplatte zu einem bestimmten „sg“-Gerät gehört, folgen Sie dieser [Anleitung](https://docs.ovh.com/gb/en/dedicated/raid-hard/){.external} (Englisch).

Wenn Sie das Gerät ermittelt haben, das mit der Festplatte, die Sie analysieren möchten, verbunden ist, verwenden Sie folgenden Befehl:

```sh
# smartctl -a /dev/sgX | grep Serial Serial Number:    1234567890
```

Die Nummer des sg-Geräts wird wie folgt angezeigt: `/dev/sg0`, `/dev/sg1` etc.



## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.