---
title: 'Festplatte auf einem Server mit Software-RAID im laufenden Betrieb wechseln'
slug: hotswap-software-raid
excerpt: 'Hier erfahren Sie, wie eine Festplatte auf einem Server mit Software-RAID im laufenden Betrieb ausgetauscht wird.'
section: 'RAID & Festplatten'
---

**Stand 02.09.2019**

## Einleitung

Wenn eine Festplatte Ihres Servers nicht mehr funktioniert, können Sie diese im laufenden Betrieb austauschen, wenn Sie über einen kompatiblen High-End Server (HG) verfügen.

**In dieser Anleitung werden Ihnen die notwendigen Schritte gezeigt, um die Festplatte eines Servers mit Software-RAID-Konfiguration im laufenden Betrieb zu wechseln (Hot Swap).**

## Voraussetzungen

- Sie verfügen über einen mHG, HG oder BHG Server.
- Sie haben ein Software-RAID (mit LSI-Karte).
- Sie haben Zugriff via SSH (Linux) oder RDP (Windows).
- Sie haben das Tool „sas2ircu“ installiert (Sie finden dieses über die Suchmaschine [Broadcom](https://www.broadcom.com/support/download-search/?dk=sas2ircu){.external}).

## Beschreibung

### Linux

#### Schritt 1: Festplatte ermitteln

Wir gehen in dieser Anleitung zunächst davon aus, dass wir einen Alarm für die Festpatte `/dev/sdb` erhalten haben. Sie ist defekt und wir möchten sie ersetzen. **Passen Sie die Elemente dieser Anleitung entsprechend Ihrer Situation an.**

Überprüfen Sie zuerst die „**Serial Number**“ der betreffenden Festplatte.

```sh
root@ns3054662:/home# smartctl -a /dev/sdb
>>> smartctl 6.4 2014-10-07 r4002 [x86_64-linux-3.14.32-xxxx-grs-ipv6-64] (local build)
>>> Copyright (C) 2002-14, Bruce Allen, Christian Franke, www.smartmontools.org

>>> === START OF INFORMATION SECTION ===
>>> Vendor:               HGST
>>> Product:              HUS726040ALS210
>>> Revision:             A907
>>> Compliance:           SPC-4
>>> User Capacity:        4,000,787,030,016 bytes [4.00 TB]
>>> Logical block size:   512 bytes
>>> LB provisioning type: unreported, LBPME=0, LBPRZ=0
>>> Rotation Rate:        7200 rpm
>>> Form Factor:          3.5 inches
>>> Logical Unit id:      0x5000cca25d3155bc
>>> Serial number:        K4GW439B
>>> Device type:          disk
>>> Transport protocol:   SAS (SPL-3)
>>> Local Time is:        Mon Nov 21 14:23:43 2016 CET
>>> SMART support is:     Available - device has SMART capability.
>>> SMART support is:     Enabled
>>> Temperature Warning:  Enabled

>>> === START OF READ SMART DATA SECTION ===
>>> SMART Health Status: OK

>>> Current Drive Temperature:     34 C
>>> Drive Trip Temperature:        85 C

>>> Manufactured in week 44 of year 2016
>>> Specified cycle count over device lifetime:  50000
>>> Accumulated start-stop cycles:  9
>>> Specified load-unload count over device lifetime:  600000
>>> Accumulated load-unload cycles:  14
>>> Elements in grown defect list: 0

>>> Vendor (Seagate) cache information
>>> Blocks sent to initiator = 2305525022720

>>> Error counter log:
>>>        Errors Corrected by           Total   Correction     Gigabytes    Total
>>>            ECC          rereads/    errors   algorithm      processed    uncorrected
>>>        fast | delayed   rewrites  corrected  invocations   [10^9 bytes]  errors
>>> read:          0        572         0       22548         77          4.725         5580
>>> write:         0        0         0         19548       196         17.344          2569

>>> Non-medium error count:        0

>>> SMART Self-test log
>>> Num  Test              Status                 segment  LifeTime  LBA_first_err [SK ASC ASQ]
>>>  Description                              number   (hours)
>>> # 1  Background short  Completed                   -       6                 - [-   -    -]
>>> # 2  Background short  Completed                   -       4                 - [-   -    -]
>>> # 3  Background short  Completed                   -       4                 - [-   -    -]
>>> # 4  Background short  Completed                   -       4                 - [-   -    -]
>>> # 5  Background short  Completed                   -       1                 - [-   -    -]

>>> Long (extended) Self Test duration: 34237 seconds [570.6 minutes]
```

Hier sehen Sie, dass: 

- die Festplatte „**sdb**“ aufgrund nicht korrigierter Fehler („uncorrected errors“) fehlerhaft ist,
- die „**Serial Number**“ der Festplatte mit der Seriennummer aus der Alarm-Nachricht (über das Datacenter oder einem anderen Monitoring-Tool) übereinstimmt.

Um nur die „**Serial Number**“ zu erhalten, verwenden Sie folgenden Befehl:

```sh
root@ns3054662:/home# smartctl -a /dev/sdb | grep Serial
>>> Serial number:        K4GW439B
```

#### Schritt 2: Position der Festplatte ermitteln

Als Nächstes müssen die „**Slot ID**“ und die „**Enclosure ID**“ der betreffenden Festplatte ermittelt werden. Verwenden Sie hierfür das zuvor installierte Tool „sas2ircu“.

Überprüfen Sie zunächst, dass alle Festplatten korrekt über eine LSI-Karte verbunden sind.

```sh
root@ns3054662:/home# lspci | grep -i LSI
>>> 81:00.0 Serial Attached SCSI controller: LSI Logic / Symbios Logic SAS2004 PCI-Express Fusion-MPT SAS-2 [Spitfire] (rev 03)
```

Ist das der Fall, ermitteln Sie die ID der LSI-Karte.

```sh
root@ns3054662:/home# ./sas2ircu list
>>> LSI Corporation SAS2 IR Configuration Utility.
>>> Version 5.00.00.00 (2010.02.09)
>>> Copyright (c) 2009 LSI Corporation. All rights reserved.


>>>          Adapter      Vendor  Device                       SubSys  SubSys
>>>  Index    Type          ID      ID    Pci Address          Ven ID  Dev ID
>>>  -----  ------------  ------  ------  -----------------    ------  ------
>>>      0     SAS2004     1000h    70h   00h:81h:00h:00h      1000h   3010h
>>> SAS2IRCU: Utility Completed Successfully.
```

Der Index entspricht der ID. In unserem Beispiel ist der Index/die ID 0.

Mit dieser Information können Sie jetzt für die betreffende Festplatte (mithilfe ihrer „**Serial Number**“) die „**Slot ID**“ und die „**Enclosure ID**“ ermitteln.

```sh
root@ns3054662:/home# ./sas2ircu 0 display | grep -B 7 -A 2 K4GW439B
>>> Device is a Hard disk
>>>   Enclosure                               : 1
>>>   Slot                                    : 3
>>>   State                                   : Available (AVL)
>>>   Manufacturer                            : HGST
>>>   Model Number                            : HUS726040ALS210
>>>   Firmware Revision                       : A907
>>>   Serial No                               : K4GW439B
>>>   Protocol                                : SAS
>>>   Drive Type                              : SAS_HDD
```

Mit diesem Befehl erhalten Sie die Festplatteninformationen, darunter die „**Serial Number**“, hier K4GW439B.

Wir haben also nun die „**Enclosure ID**“ (1) und die „**Slot ID**“ (3) ermittelt.

#### Schritt 3: LED der Festplatte anschalten

Verwenden Sie die in den vorherigen Schritten ermittelten Informationen, um die LED der fehlerhaften Festplatte für deren Austausch mit dem Befehl `./sas2ircu 0 locate EncID:SlotID on` anzuschalten. Passen Sie den Befehl wie im folgenden Beispiel an Ihre Situation an:

```sh
root@ns3054662:/home# ./sas2ircu 0 locate 1:3 on
>>> LSI Corporation SAS2 IR Configuration Utility.
>>> Version 5.00.00.00 (2010.02.09)
>>> Copyright (c) 2009 LSI Corporation. All rights reserved.

>>> SAS2IRCU: LOCATE Command completed successfully.
>>> SAS2IRCU: Command LOCATE Completed Successfully.
>>> SAS2IRCU: Utility Completed Successfully.
```

Sie können das Blinken der Festplatte deaktivieren, indem Sie im Befehl „on“ durch „off“ ersetzen.

#### Schritt 4: Fehlerhafte Festplatte aus dem RAID entfernen

Ist das noch nicht der Fall, dann versetzen Sie die Festplatte in den Status „**Faulty**“. Sehen Sie sich anschließend den RAID-Status an.

```sh
root@ns3054662:/home# cat /proc/mdstat
>>> Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
>>> md2 : active raid1 sda2[0] sdb2[1]
>>>       3885385728 blocks super 1.2 [2/2] [UU]
>>>       bitmap: 0/29 pages [0KB], 65536KB chunk

>>> md1 : active raid1 sdb1[1] sda1[0]
>>>       20971456 blocks [2/2] [UU]

>>> unused devices: <none>
```

Im vorliegenden Beispiel gehört die defekte Festplatte zu md1 und md2 (sbd1 und sbd2). Wir werden diese also nun in den „**Faulty**“-Status versetzen, d. h. jeweils sdb1 in md1 und sdb2 in md2.

```sh
root@ns3054662:/home# mdadm --manage /dev/md1 --set-faulty /dev/sdb1
>>> mdadm: set /dev/sdb1 faulty in /dev/md1
```

```sh
root@ns3054662:/home# mdadm --manage /dev/md2 --set-faulty /dev/sdb2
>>> mdadm: set /dev/sdb2 faulty in /dev/md2
```

Wenn Sie mit diesen Aktionen fertig sind, überprüfen Sie erneut den RAID-Status.

```sh
root@ns3054662:/home# cat /proc/mdstat
>>> Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
>>> md2 : active raid1 sda2[0] sdb2[1](F)
>>>       3885385728 blocks super 1.2 [2/1] [U_]
>>>       bitmap: 0/29 pages [0KB], 65536KB chunk

>>> md1 : active raid1 sdb1[2](F) sda1[0]
>>>       20971456 blocks [2/1] [U_]

>>> unused devices: <none>
```

Sowohl sbd1 als auch sbd2 sind nun auf Faulty **(F**) umgestellt. Jetzt können Sie die Festplatte aus dem RAID entfernen.

```sh
root@ns3054662:/home# mdadm --manage /dev/md1 --remove /dev/sdb1
>>> mdadm: hot removed /dev/sdb1 from /dev/md1
```

```sh
root@ns3054662:/home# mdadm --manage /dev/md2 --remove /dev/sdb2
>>> mdadm: hot removed /dev/sdb2 from /dev/md2
```

Überprüfen Sie, dass die Festplatte nicht mehr vorhanden ist.

```sh
root@ns3054662:/home# cat /proc/mdstat
>>> Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
>>> md2 : active raid1 sda2[0]
>>>       3885385728 blocks super 1.2 [2/1] [U_]
>>>       bitmap: 0/29 pages [0KB], 65536KB chunk

>>> md1 : active raid1 sda1[0]
>>>       20971456 blocks [2/1] [U_]

>>> unused devices: <none>
```

Die defekte Festplatte kann jetzt von einem Techniker im Rechenzentrum ausgetauscht werden. Nachdem der Vorgang abgeschlossen ist, muss das RAID nur erneut synchronisiert werden. Verwenden Sie hierzu folgende Dokumentation: [Software-RAID](https://docs.ovh.com/de/dedicated/soft-raid/){.external}.

### Windows

#### Schritt 1: Festplatte ermitteln

Wir gehen in dieser Anleitung zunächst davon aus, dass wir einen Alarm für die Festpatte `/dev/sdb` erhalten haben. Sie ist defekt und wir möchten sie ersetzen. **Passen Sie die Elemente dieser Anleitung entsprechend Ihrer Situation an.**

> [!primary]
>
> Es ist wichtig, dass Sie die Kommandozeile als Administrator ausführen, damit Sie keine Fehler erhalten.
> 

Überprüfen Sie zuerst die „**Serial Number**“ der betreffenden Festplatte. **Im unten stehenden Screenshot ist der Speicher eigentlich nicht fehlerhaft. Wie werden jedoch so fortfahren, als wäre das der Fall.**

![smart_sdb_windows](images/smart_sdb_windows.png){.thumbnail}

Hier sehen Sie, dass: 

- die Festplatte „**sdb**“ aufgrund nicht korrigierter Fehler („uncorrected errors“) fehlerhaft ist,
- die „**Serial Number**“ der Festplatte mit der Seriennummer aus der Alarm-Nachricht (über das Datacenter oder einem anderen Monitoring-Tool) übereinstimmt.

#### Schritt 2: Position der Festplatte ermitteln

Als Nächstes müssen die „**Slot ID**“ und die „**Enclosure ID**“ der betreffenden Festplatte ermittelt werden. Verwenden Sie hierfür das zuvor installierte Tool „sas2ircu“.

Ermitteln Sie zunächst die ID der LSI-Karte.

![id_lsi_windows](images/id_lsi_windows.png){.thumbnail}

In unserem Beispiel hat die LSI-Karte den Index/die ID 0.

Mit dieser Information können Sie jetzt für die betreffende Festplatte (mithilfe ihrer „**Serial Number**“) die „**Slot ID**“ und die „**Enclosure ID**“ ermitteln.

![select-string](images/select-string.png){.thumbnail}

Mit diesem Befehl erhalten Sie die Festplatteninformationen, darunter die „**Serial Number**“, hier K4G187WB.

Wir haben also nun die „**Enclosure ID**“ (1) und die „**Slot ID**“ (1) ermittelt.

#### Schritt 3: LED der Festplatte anschalten

Verwenden Sie die in den vorherigen Schritten ermittelten Informationen, um die LED der fehlerhaften Festplatte für deren Austausch mit dem Befehl `.\sas2ircu 0 locate EncID:SlotID on` anzuschalten. Passen Sie den Befehl wie im folgenden Beispiel an Ihre Situation an:

![locate](images/locate.png){.thumbnail}

Sie können das Blinken der Festplatte deaktivieren, indem Sie im Befehl „on“ durch „off“ ersetzen.

#### Schritt 4: Fehlerhafte Festplatte aus dem RAID entfernen

Führen Sie diese Aktion über das Interface „**Datenträgerverwaltung**“ Ihres Windows Servers aus.

Die defekte Festplatte kann jetzt von einem Techniker im Rechenzentrum ausgetauscht werden. Nachdem der Vorgang abgeschlossen ist, muss das RAID nur erneut synchronisiert werden. Verwenden Sie hierzu folgende Dokumentation: [Software-RAID](https://docs.ovh.com/de/dedicated/soft-raid/){.external}.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.