---
title: "Administrator-Passwort eines Windows Servers mit dem Windows Customer Rescue System zurücksetzen"
excerpt: "Erfahren Sie hier, wie Sie den OVHcloud Windows-Rescue-Modus verwenden, um das Passwort des Administrator-Accounts auf einem Windows Dedicated Server zurückzusetzen"
updated: 2025-10-22
---

## Ziel

Diese Anleitung erklärt, wie Sie das Passwort für den Administrator-Account mithilfe der Funktion mit dem **Windows Customer Rescue System** zurückzusetzen.

## Voraussetzungen

- Sie haben einen [Dedicated Server](/links/bare-metal/bare-metal), auf dem Microsoft Windows Server 2016 oder höher installiert ist.
- Der Server verfügt über mindestens 16 GB RAM.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

> [!warning]
>
> Diese Anleitung ist nicht anwendbar für das **Legacy Windows Rescue System (WinPE-Rescue-Modus)** (Details dazu in der [Anleitung zum Rescue-Modus](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)).
>
> Wenn Ihre Windows Server-Version nicht mehr unterstützt wird, ist das aktuelle Rescue-System für Windows nicht aktivierbar. In diesem Fall konsultieren Sie stattdessen unsere Anleitung zum [Zurücksetzen des Administrator-Accounts mit dem Legacy Windows Rescue System](/pages/bare_metal_cloud/dedicated_servers/changing-admin-password-on-windows).  
> Dieselbe Anleitung erläutert auch eine alternative Methode zum Zurücksetzen des Administrator-Passworts mit dem Debian-basierten OVHcloud Rescue-Modus.

## In der praktischen Anwendung

### Schritt 1 - Neustart des Servers im Rescue-Modus <a name="step1"></a>

Das System muss im **Windows Customer Rescue System** gestartet werden, bevor das Administratorkennwort geändert werden kann.

Detaillierte Anweisungen finden Sie in der [Anleitung zum Windows Rescue-Modus](/pages/bare_metal_cloud/dedicated_servers/rescue-customer-windows).

### Schritt 2 - Löschen des aktuellen Passworts <a name="step2"></a>

Stellen Sie mithilfe den per E-Mail bereitgestellten Anmeldedaten eine Verbindung mit dem Server über *Remote Desktop* her.

Beachten Sie, dass der Benutzername für den Rescue-Modus "Administrator" ist.

- Wenn der Server Software-RAID auf der Windows-Disk verwendet, müssen Sie die lokale Windows-Disk importieren, um darauf zugreifen zu können: Befolgen Sie die Anweisungen im [Abschnitt A](#sectionA) unten.
- Wenn der Server kein Software-RAID auf der Windows-Disk verwendet, sollten Sie wie im [Abschnitt B](#sectionB) dieser Anleitung beschrieben direkt auf die lokale Windows-Disk zugreifen können.

#### A - Import des lokalen Windows-Datenträgers <a name="sectionA"></a>

##### 1. Zugriff auf Datenträgerverwaltung

Klicken Sie mit der rechten Maustaste auf das Menü `Start`{.action} und wählen Sie `Datenträgerverwaltung`{.action}.

![disk_manager_menu](images/disk_manager_menu.png){.thumbnail}

Sie können dann die Disks und Volumes des Servers anzeigen.

![disk_manager_window](images/disk_manager_window1.png){.thumbnail}

Die Windows-Disk Ihres Servers ist wahrscheinlich *Disk 1*. Sie müssen sie importieren, um darauf zugreifen zu können.

Beachten Sie, dass die Anzahl der Windows-Datenträger variieren kann, wenn Sie über mehrere Datenträgergruppen verfügen. Möglicherweise müssen Sie mehrere Datenträger importieren, um die Windows-Disk zu erhalten.

Außerdem müssen Sie die zweite Disk importieren, um Ihr Software-RAID-Volume ordnungsgemäß zu importieren.

##### 2. Lokale Datenträger importieren

Klicken Sie mit der rechten Maustaste auf *Disk 1* und wählen Sie `Online`{.action}.

![disk_import_disk1](images/disk_manager_disk1on.png){.thumbnail}

Führen Sie dasselbe für die zweite Disk (*Disk 2*) aus, um das Software-RAID-Volume ordnungsgemäß zu importieren.

Klicken Sie mit der rechten Maustaste auf *Disk 2* und wählen Sie `Online`{.action}.

![disk_import_disk2](images/disk_manager_disk2on.png){.thumbnail}

Datenträger werden jetzt als "Dynamic" und "Foreign" angezeigt.

Klicken Sie erneut mit der rechten Maustaste auf *Disk 1* und wählen Sie `Fremde Datenträger importieren`{.action}.

![disk_import_menu](images/disk_manager_diskimport.png){.thumbnail}

Klicken Sie wiederholt auf `OK`{.action}.

![disk_import1](images/disk_import1.png){.thumbnail}

![disk_import2](images/disk_import2.png){.thumbnail}

Sie sehen, dass jetzt auf den lokalen Datenträger zugegriffen werden kann und dass `(E:)` der Windows-Datenträger ist (verteilt auf zwei Software RAID Datenträger vom Typ *Mirrored Volume*).

![disk_import_sync](images/disk_import_sync.png){.thumbnail}

> [!primary]
> In diesem Beispiel ist der Volume-Status "*Resynching*", da der Server im Rescue-Modus neu gestartet wurde. Dies ist ein erwarteter Zustand, der nicht vom Rescue-Modus selbst verursacht wird.
>
> Die Daten auf dem Volume sind hiervon nicht betroffen, und die Neusynchronisierung wird fortgesetzt, sobald der Server auf dem installierten Betriebssystem neu gestartet wird.

> [!warning]
>
> Sie müssen dann den Pfad Ihres lokalen Windows-Verzeichnisses (hier ist es `E:\Windows`) verwenden, wenn Sie nach der unten stehenden SAM-Konfigurationsdatei suchen.

Sie können das Passwort jetzt zurücksetzen, indem Sie die folgenden Anweisungen ausführen.

#### B - Zurücksetzen des Passworts <a name="sectionB"></a>

Zum Zurücksetzen von Passwörtern ist das Tool NTPWEdit erforderlich.  
Sobald Sie über *Remote Desktop* verbunden sind, öffnen Sie den Browser und laden die Software von der [offiziellen Website](http://www.cdslow.org.ru/files/ntpwedit/ntpwed07.zip) herunter.  
Navigieren Sie zu dem Ordner, in dem sich die heruntergeladene ZIP-Datei befindet, und extrahieren Sie den Inhalt.<br>
Öffnen Sie anschließend die ausführbare Datei `ntpwedit64`, um die Anwendung zu starten.

In dieser Benutzeroberfläche können Sie die SAM-Datei bearbeiten, um das Kennwort des Administrator-Accounts zu löschen.

Sie müssen das lokale Windows-Laufwerk durchsuchen, um die SAM-Datei Ihres Systems zu finden.

Klicken Sie auf `...`{.action}, um das Laufwerk mit dem lokalen Windows-Ordner Ihres Servers zu durchsuchen.

Normalerweise ist dies das Laufwerk `Windows (E:\)`.

![ntpwedit1](images/ntpwedit_1.png){.thumbnail}

Gehen Sie zu `E:\WINDOWS\SYSTEM32\CONFIG\`.

Öffnen Sie die SAM-Datei, um die Benutzerkonten anzuzeigen, indem Sie auf `Open`{.action} klicken.

![ntpwedit_sam](images/SAM.png){.thumbnail}

Wählen Sie das Benutzerkonto "admin" und klicken Sie auf `Change password`{.action}.

![ntpwedit2](images/ntpwedit_2.png){.thumbnail}

Geben Sie im angezeigten Fenster in beiden Feldern Ihr neues Passwort ein und klicken Sie auf `OK`{.action}.

> [!warning]
>
> Das neue Passwort wird ohne Überprüfung seiner Komplexität akzeptiert.
>
> Denken Sie daran, dass dieses Passwort die Remote-Verbindung zum Server ermöglicht, nachdem der Server mit seinem Betriebssystem neu gestartet wurde.

Klicken Sie zum Abschluss auf `Save changes`{.action} und dann auf `Exit`{.action}.

Danach muss der Server mit dem regulären Betriebssystem neu gestartet werden.

### Schritt 3 - Neustart des Servers <a name="step3"></a>

Ändern Sie zuerst den Netboot-Modus im OVHcloud Kundencenter wieder auf "Von Festplatte booten" (siehe [Schritt 1](#step1)).

Wechseln Sie wieder zum Fenster der KVM-Sitzung und wählen Sie die Herunterfahren-Option `Neustart`{.action} über den Windows-Button unten links aus. 

![reboot](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/dedicated-servers/general-information/cp_dedicated_restart.png){.thumbnail}

## Weiterführende Informationen

Treten Sie unserer [User Community](/links/community) bei.