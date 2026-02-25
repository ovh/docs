---
title: "OVHcloud Rescue-Modus aktivieren und verwenden"
excerpt: "Erfahren Sie hier, wie Sie das <i>Customer Rescue System</i> zur Fehlerbehebung bei einem Dedicated Server einsetzen"
updated: 2026-01-09
---

<style>
details>summary {
	color:rgb(33, 153, 232) !important;
	cursor: pointer;
}
details>summary::before {
	content:'\25B6';
	padding-right:1ch;
}
details[open]>summary::before {
	content:'\25BC';
}
</style>

## Ziel

Der Rescue-Modus ist ein von OVHcloud zur Verfügung gestelltes Tool für Ihren dedizierten Server, das dazu dient, den Server mithilfe eines temporären Betriebssystems zu booten. Damit haben Sie Zugriff auf den Server und können Probleme diagnostizieren und beheben.

Der Rescue-Modus ist generell für folgende Aufgaben einzusetzen:

- [Zurücksetzen Ihres User-Passworts](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)
- [Diagnose von Netzwerkproblemen](/pages/bare_metal_cloud/dedicated_servers/hardware-diagnose)
- Reparatur eines beschädigten Betriebssystems
- Korrektur einer fehlerhaften Konfiguration einer Software-Firewall
- [Performance-Test von Disks](/pages/bare_metal_cloud/dedicated_servers/hardware-diagnose)
- [Testen des Prozessors und des RAM](/pages/bare_metal_cloud/dedicated_servers/hardware-diagnose)

> [!warning]
>
> Falls Sie nicht schon über aktuelle Backups verfügen, sollte der erste Schritt im Troubleshooting, auch im Rescue-Modus, immer darin bestehen, ein Backup Ihrer Daten zu erstellen.
>
> Wenn Sie Dienste auf Ihrem Dedicated Server im laufenden Betrieb haben, wird der Rescue-Modus diese Dienste unterbrechen, da er in das Hilfsbetriebssystem neu gestartet wird.
> 

**Diese Anleitung erklärt, wie Sie Ihren OVHcloud Dedicated Server in den Rescue-Modus versetzen und Partitionen mounten.**

## Voraussetzungen

- Sie haben einen [Dedicated Server](/links/bare-metal/bare-metal) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

Um den Rescue-Modus zu verwenden, müssen die Einstellung des `Netboot` für den Server geändert werden. Der Server muss anschließend neu gestartet werden.

Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und öffnen Sie den Bereich `Bare Metal Cloud`{.action} und dann `Dedicated Server`{.action}.

Klicken Sie auf den Namen Ihres Servers, um den Tab `Allgemeine Informationen`{.action} zu öffnen.

### Aktivierung des Rescue-Modus

Klicken Sie im Feld **Allgemeine Informationen** auf den Button `...`{.action} neben `Boot`. Klicken Sie im Kontextmenü auf `Bearbeiten`{.action}.

![Startmodus ändern](images/rescue-mode-001.png){.thumbnail}

<a name="netboot"></a>

#### 1: Optionen für den Rescue-Modus

Wählen Sie auf der Seite **Netboot-Modus ändern** `Im Rescue-Modus booten`{.action} aus.

![Startmodus ändern](images/rescue-mode-002.png){.thumbnail}

Die verfügbaren Optionen für den Rescue-Modus hängen vom Servertyp und dem installierten **Betriebssystem** ab.

- *Customer Rescue System* (immer verfügbar)
- *Windows Customer Rescue System* (verfügbar für Windows Server)
- [iPXE](https://ipxe.org) / *ipxe-shell* (externes Open-Source-Tool, immer verfügbar)
- [Legacy Windows Rescue System](#windows_legacy) (veraltetes WinPE-System; nur relevant, wenn Ihr Server nicht die Anforderungen für das *Windows Customer Rescue System* erfüllt)

> [!primary]
> 
> Die nachfolgenden Anweisungen betreffen nur das **Customer Rescue System**, die meistverwendete Option.
>
> Alle Informationen zur Verwendung des **Windows Customer Rescue System** finden Sie in unserer [Anleitung zum Rescue-Modus für Windows](/pages/bare_metal_cloud/dedicated_servers/rescue-customer-windows).

Wählen Sie `Customer rescue system`{.action} aus dem Dropdown-Menü.

#### 2: Authentifizierungsoptionen

In dieser Auswahl wird die Authentifizierungsmethode für die SSH-Verbindung mit dem Rescue-Modus festgelegt. Dies ist hauptsächlich eine Frage der Zweckmäßigkeit, da jede Nutzung des Rescue-Systems eine transitorische Login-Sitzung, und verfällt, sobald der Server von seiner Disk neu gestartet wird.

- **Passwortauthentifizierung**: Die Zugangsdaten werden Ihnen per E-Mail mitgeteilt.
- **Schlüsselauthentifizierung**: Sie können einen öffentlichen Authentifizierungsschlüssel Ihrer Wahl verwenden (kompatible Formate: `RSA`, `ECDSA`, `ED25519`).

Klicken Sie auf den Tab für Ihre Verbindungsmethode:

> [!tabs]
> Authentifizierung mit Passwort
>>
>> Klicken Sie auf `Authentifizierung per Kennwort`{.action}.
>>
>>![Auth method](images/rescue-mode-003.png){.thumbnail width="700"}
>>
>> Die Benachrichtigung zur Aktivierung des Rescue-Modus und die zugehörigen Login-Daten werden an die Kontakt-E-Mail-Adresse Ihres OVHcloud Kunden-Accounts gesendet. Um eine abweichende E-Mail-Adresse zu verwenden, geben Sie diese in das Feld `Zugangsdaten an folgende E-Mail-Adresse versenden` ein.
>>
>> Klicken Sie auf `Weiter`{.action}.
>>
> Authentifizierung mit Schlüssel
>>
>> Klicken Sie auf `Authentifizierung per SSH-Schlüssel`{.action}.
>>
>>![Auth method](images/rescue-mode-004.png){.thumbnail width="700"}
>>
>> Sie haben zwei Optionen:
>>
>> - Wählen Sie im Dropdown-Menü einen Schlüssel aus. Dazu muss bereits mindestens ein [öffentlicher Schlüssel in Ihrem OVHcloud Kundencenter hinterlegt sein](/pages/bare_metal_cloud/dedicated_servers/import-keys-control-panel).
>> - Kopieren Sie die Zeichenfolge des öffentlichen Schlüssels manuell und fügen Sie sie in das Feld `Ihr öffentlicher SSH-Schlüssel` ein.
>>
>> Weitere Informationen zu diesem Thema finden Sie in unseren Anleitungen:
>>
>> - [Erstellen und Verwenden von Schlüsseln zur SSH-Authentifizierung](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)
>> - [Erstellen und Verwenden von Schlüsseln zur SSH-Authentifizierung mit PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)
>>
>> > [!success]
>> > Sie können über die OVHcloud API einen öffentlichen Schlüssel als Standard für den Rescue-Modus eines Servers hinzufügen. Weitere Informationen finden Sie im [Abschnitt unten](#rescuessh).
>>
>> Klicken Sie auf `Weiter`{.action}.
>>

#### 3: Abschließende Schritte zur Aktivierung des Rescue-Modus

Klicken Sie im Schritt **Zusammenfassung** auf `Bestätigen`{.action}.

![Summary](images/rescue-mode-005.png){.thumbnail}

Sie sollten nun eine Meldung bezüglich des geänderten `Netboot` im Tab `Allgemeine Informationen`{.action} erhalten.

![Netboot](images/rescue-mode-006.png){.thumbnail}

Im letzten Schritt muss der Server neu gestartet werden. Klicken Sie auf den Button `...`{.action} neben "Status" im Feld **Status der Dienste** und dann auf `Neu starten`{.action}. Klicken Sie im Popup-Fenster auf `Bestätigen`{.action}.

![Reboot](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/dedicated-servers/general-information/rebooting-your-server.png){.thumbnail}

Der *hard reboot* benötigt einige Minuten zur Durchführung. Sie können den aktuellen Status im Tab `Tasks`{.action} überprüfen.

> [!primary]
>
> Achten Sie darauf, nach Abschluss Ihrer Aktionen im Rescue-Modus den `Netboot` auf `Von Festplatte booten`{.action} zurückzusetzen, bevor Sie den Server neu starten.

### Zugriff auf Ihren Server im Rescue-Modus via SSH

Sobald Sie die E-Mail zur Aktivierung des Rescue-Modus erhalten haben, können Sie sich über das Rescue-System einloggen und auf Ihren Server zugreifen.  
Diese E-Mail ist auch in Ihrem [OVHcloud Kundencenter](/links/manager) verfügbar, sobald sie verschickt wurde. Klicken Sie oben rechts auf den zu Ihrer Kundenkennung gehörigen Namen und wählen Sie `E-Mails von OVHcloud`{.action} aus.

> [!primary]
>
> Ihr SSH-Client wird die Verbindung üblicherweise zunächst blockieren, weil der ECDSA-Fingerprint nicht mehr übereinstimmt. Das ist normal, da der Rescue-Modus seinen eigenen temporären SSH-Server verwendet. Um dies zu beheben, bearbeiten Sie die Datei `known_hosts` in Ihrem lokalen Ordner `.ssh`.  
> Sie haben zwei Möglichkeiten:
>
> - **Den Fingerprint aus der Datei löschen.** Ihr SSH-Client fügt dann einen neuen Fingerprint-Eintrag für den Server hinzu, sobald Sie den Rescue-Modus nicht mehr verwenden. Eine ausführliche Erläuterung finden Sie im Abschnitt "Login und Fingerprint" in unserer [Einführung zu SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).
>
> - **Den Fingerprint vorübergehend deaktivieren.** Öffnen Sie die Datei `known_hosts` mit einem Texteditor und identifizieren Sie die Fingerprint-Zeichenfolge Ihres Servers anhand dessen IP-Adresse. Fügen Sie am Anfang der Zeile das Zeichen `#` ein. Dadurch wird die Zeile zu einem "Kommentar" und von Anwendungen, die die Datei auslesen, ignoriert. Machen Sie diese Änderung rückgängig, bevor Sie den `Netboot`-Modus wieder auf den "normalen" Modus umstellen.
>

Klicken Sie auf den Tab für Ihre Verbindungsmethode:

> [!tabs]
> Authentifizierung mit Passwort
>>
>> Öffnen Sie die Befehlszeilenanwendung Ihres lokalen Geräts, und geben Sie den folgenden Befehl ein:
>>
>> ```bash
>> ssh root@SERVER_IP
>> ```
>>
>> Beispiel:
>>
>> ```bash
>> ssh root@203.0.113.100
>> ```
>>
>> Geben Sie das temporäre Passwort für den Rescue-Modus ein, wenn Sie dazu aufgefordert werden.
>>
>> ```console
>> root@ns9356771.ip-203-0-113.eu's password:
>> root@rescue-customer-eu (ns9356771.ip-203-0-113.eu) ~ #
>> ```
>>
>> Weitere Informationen zu SSH-Verbindungen finden Sie in unserer [Einführung in SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).  
>> Sie können auch eine Anwendung für SSH-Verbindungen Ihrer Wahl verwenden, wie z.B. [PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows).
>>
> Authentifizierung mit Schlüssel
>>
>> Öffnen Sie die Befehlszeilenanwendung auf dem lokalen Gerät, und geben Sie den folgenden Befehl ein:
>>
>> ```bash
>> ssh -i USER_FOLDER/.ssh/KEY_FILE_NAME root@SERVER_IP
>> ```
>>
>> Beispiel:
>>
>> ```bash
>> ssh -i ~/.ssh/MyAuthKey root@203.0.113.100
>> ```
>>
>> Geben Sie ggf. nach Aufforderung Ihr Passwort ein, um die Datei mit dem privaten Schlüssel zu öffnen.
>>
>> Weitere Informationen zu diesem Thema finden Sie in unseren Anleitungen:
>>
>> - [Erstellen und Verwenden von Schlüsseln zur SSH-Authentifizierung](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)
>> - [Erstellen und Verwenden von Schlüsseln zur SSH-Authentifizierung mit PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)
>>

### Mounten von Partitionen zum Dateizugriff

Sofern Sie nicht beabsichtigen, die Datenträger des Servers auf eine Art zu konfigurieren, die einen getrennten Zustand erfordert (*unmounted*), müssen Sie zuerst **die Systempartition mounten**, um über den Rescue-Modus auf Ihre Daten zugreifen zu können.

Listen Sie zuerst alle Partitionen auf, um den Namen der Partition zu finden, die Sie mounten müssen:

```bash
lsblk
```

Beispiele für Ausgaben:

```console
NAME      MAJ:MIN RM  SIZE RO TYPE  MOUNTPOINT
sda         8:0    0  1.8T  0 disk
├─sda1      8:1    0  511M  0 part
├─sda2      8:2    0  1.8T  0 part
│ └─md127   9:127  0  1.8T  0 raid1
├─sda3      8:3    0  512M  0 part
└─sda4      8:4    0    2M  0 part
sdb         8:16   0  1.8T  0 disk
├─sdb1      8:17   0  511M  0 part
├─sdb2      8:18   0  1.8T  0 part
│ └─md127   9:127  0  1.8T  0 raid1
└─sdb3      8:19   0  512M  0 part
```

```console
NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINT
nvme1n1     259:0    0 894.3G  0 disk
├─nvme1n1p1 259:2    0   511M  0 part
├─nvme1n1p2 259:3    0     1G  0 part
│ └─md2       9:2    0  1022M  0 raid1
├─nvme1n1p3 259:4    0 892.3G  0 part
│ └─md3       9:3    0 892.1G  0 raid1
└─nvme1n1p4 259:5    0   512M  0 part
nvme0n1     259:1    0 894.3G  0 disk
├─nvme0n1p1 259:6    0   511M  0 part
├─nvme0n1p2 259:7    0     1G  0 part
│ └─md2       9:2    0  1022M  0 raid1
├─nvme0n1p3 259:8    0 892.3G  0 part
│ └─md3       9:3    0 892.1G  0 raid1
├─nvme0n1p4 259:9    0   512M  0 part
└─nvme0n1p5 259:10   0     2M  0 part
```

Mounten Sie dann die entsprechende Partition entsprechend:

```bash
mount /dev/PARTITION_NAME /MOUNT_POINT/
```

Die zu mountende Partition sollte einfach anhand der Größe in der Tabellenspalte **SIZE** zu identifizieren sein (`sda2` im ersten Beispiel, `nvme1n1p3` im zweiten Beispiel). In einer [Software-RAID-Konfiguration](/pages/bare_metal_cloud/dedicated_servers/raid_soft) (ein Standard-RAID1 in den Beispielen oben) müssen Sie jedoch die ID des RAID-Volumes verwenden (`mdX`).  
Mit dem Ordnernamen `mnt` als Einhängepunkt wäre der Befehl `mount` für das erste Beispiel folgendermaßen anzuwenden:

```bash
mount /dev/md127 /mnt/
```

Befehl für das zweite Beispiel:

```bash
mount /dev/md3 /mnt/
```

> [!warning]
> Die obigen Beispiele dienen lediglich der Veranschaulichung der erforderlichen Schritte auf der Grundlage einer typischen Serverkonfiguration. Die Daten in der Ausgabetabelle hängen von der Hardware des Servers und dessen Partitionsschema ab. Konsultieren Sie im Zweifelsfall die Dokumentation zu Ihrem Betriebssystem.
>
> Wenn Sie professionelle Unterstützung bei der Verwaltung Ihres Servers benötigen, beachten Sie die Informationen im Abschnitt [Weiterführende Informationen](#gofurther) dieser Anleitung.

Verwenden Sie den folgenden Befehl, um weitere technische Details zu den Datenträgern und Partitionen des Servers zu erhalten:

```bash
fdisk -l
```

Für einige Aufgaben müssen möglicherweise Datenträger oder Partitionen wieder abgetrennt werden. Verwenden Sie hierzu den Befehl zum *Unmounten*:

```bash
umount /mnt
```

#### VMware - Mounten eines Datastores

/// details | Diesen Abschnitt erweitern

Sie können einen VMware Datastore auf ähnliche Weise mounten wie im vorherigen Segment beschrieben

Listen Sie Ihre Partitionen auf, um den Namen der Partition des Datastores abzurufen:

```bash
lsblk
```

```bash
fdisk -l
```

Mounten Sie die Partition mit folgendem Befehl, und ersetzen Sie dabei `sdbX` mit dem im vorherigen Schritt identifizierten W

```bash
vmfs-fuse /dev/sdbX /mnt
```

Wenn Sie Datastores vom Typ `VMFS 6` haben, wechseln Sie in den Ordner `sbin`, um den Mount-Ordner zu erstellen:

```bash
cd /usr/local/sbin/
mkdir /mnt/datastore
```

Listen Sie Ihre Partitionen auf, um den Namen der Partition des Datastores abzurufen:

```bash
lsblk
```

```bash
fdisk -l
```

Mounten Sie die Partition mit folgendem Befehl, und ersetzen Sie dabei `sdbX` mit dem im vorherigen Schritt identifizierten Wert:

```bash
vmfs6-fuse /dev/sdbX /mnt/datastore/
```

///

Nach Abschluss des Mount-Vorgangs können Sie auf Ihre Dateien zugreifen und Problembehebungsaufgaben innerhalb des Ordners ausführen, den Sie als Mountpoint festgelegt haben. Beispiel:

```bash
cd /mnt
```

Für bestimmte Dateisystem´-Operationen (z.B. das Bearbeiten von Benutzer-Accounts) ist ein zusätzlicher Schritt erforderlich. Erstellen Sie mit diesem Befehl eine temporäre `chroot` Umgebung am Mount-Punkt:

```bash
chroot /mnt/
```

Jetzt sollten Sie in der Lage sein, alle erforderlichen Änderungen am System vorzunehmen, z.B. um den [Zugriff auf den Server wiederherzustellen](#gofurther).

### Konfiguration der Link-Aggregation im Rescue-Modus

Die Link-Aggregation (LACP) ist sehr vorteilhaft, da sie die Gesamtbandbreite Ihres Servers erhöht und gleichzeitig Netzwerkredundanz für den Fall eines Ausfalls einer Netzwerkschnittstelle bietet.

Obwohl der Rescue-Modus auf dem Betriebssystem Debian 12 basiert, basiert seine Netzwerkkonfiguration auf dem Dienstprogramm `ifupdown` und nicht auf `Netplan`.

Wenn Sie über einen Server verfügen, der Link Aggregation unterstützt, und diese im Rescue-Modus konfigurieren möchten, lesen Sie [diese Anleitung](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9).

### Rescue-Modus verlassen

Falls notwendig, kehren Sie zur Login-Shell des Rescue-Modus zurück, indem Sie Folgendes eingeben:

```bash
exit
```

Öffnen Sie dann in Ihrem [OVHcloud Kundencenter](/links/manager) die `Netboot`-Einstellungen und [ändern Sie den Modus](#netboot) wieder zu `Auf Festplatte booten`{.action}.

![Netboot Disk](images/rescue-mode-007.png){.thumbnail}

Sie können den Server jetzt in der Shell des Rescue-Modus neu starten:

```bash
reboot
```

Sie können alternativ die Funktion `Neu starten`{.action} in Ihrem Kundencenter verwenden.

<a name="rescuessh"></a>

### Hinzufügen eines Standard-Authentifizierungsschlüssels für den Rescue-Modus

/// details | Diesen Abschnitt erweitern

Um den Vorgang zu beschleunigen, können Sie über die [OVHcloud API](/pages/manage_and_operate/api/first-steps) einen öffentlichen Standard-Schlüssel für den SSH-Zugang im Rescue-Modus zu Ihrem Server hinzufügen.

Öffnen Sie hierzu in der Web API-Konsole den folgenden API-Endpunkt:

> [!api]
>
> @api {v1} /dedicated/server PUT /dedicated/server/{serviceName}
>

Geben Sie den internen Namen Ihres Servers (`ns111111.ip-203-0-113.eu`) in das entsprechende Feld ein.

Ändern Sie anschließend das folgende Textfeld wie folgt:

```bash
{
  "rescueSshKey": "string"
}
```

Ersetzen Sie dabei `string` mit der vollständigen Zeichenfolge des öffentlichen Schlüssels.

Das Ergebnis sollte wie im folgenden Beispiel aussehen:

![Rescue-Key-Beispiel](images/rescue-mode-008.png){.thumbnail}

Wenn Sie die Werte korrekt eingegeben haben, klicken Sie auf den Button `EXECUTE`{.action}.

Das Feld `Ihr öffentlicher SSH-Schlüssel:` wird jetzt beim [Umschalten des `Netboot`](#netboot) automatisch mit dieser Schlüsselzeichenfolge ausgefüllt.

///

<a name="windows_legacy"></a>

### Legacy Windows Rescue System (WinPE Rescue-Modus)

/// details | Diesen Abschnitt erweitern

Sobald Sie die E-Mail zur Aktivierung des Rescue-Modus erhalten haben, können Sie sich über das Rescue-Modus-System einloggen und auf Ihren Server zugreifen.  
Diese E-Mail ist auch in Ihrem [OVHcloud Kundencenter](/links/manager) verfügbar, sobald sie verschickt wurde. Klicken Sie oben rechts auf den zu Ihrer Kundenkennung gehörigen Namen und wählen Sie `E-Mails von OVHcloud`{.action} aus.

Um die Windows PE GUI des Rescue-Modus zu verwenden, müssen Sie eine VNC-Konsole herunterladen und installieren oder das [IPMI-Modul](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers) verwenden (nicht bei allen Servermodellen verfügbar).

![Windows Rescue](images/rescue-mode-009.png){.thumbnail}

Folgende Anwendungen sind bereits in diesem Modus installiert:

|Tool|Beschreibung|
|---|---|
|Mozilla ULight|Ein Webbrowser.|
|Memory Diagnostics Tool|Ein Windows Tool zum Testen des RAM.|
|Explorer_Q-Dir|Ein Dateiexplorer.|
|GSmartControl|Ein Werkzeug zur Überprüfung von Festplatten/SSDs.|
|PhotoRec|Ein Tool zum Abruf potenziell verlorener Dateien auf einer Festplatte.|
|SilverSHielD|Ein SSH2 und SFTP Server.|
|System Recovery|Ein Windows Tool zur Systemwiederherstellung und Fehlerbehebung.|
|TestDisk|Eine leistungsstarke Anwendung zur Datenwiederherstellung. Mit diesem Tool können Sie beschädigte Partitionen wiederherstellen und bearbeiten, verlorene Partitionen wiederfinden, einen Bootsektor reparieren oder sogar einen fehlerhaften MBR rekonstruieren.|
|FileZilla|Ein Open-Source-FTP-Client. Er unterstützt SSH- und SSL-Protokolle und verfügt über ein intuitives Drag-and-Drop-Interface. Es kann verwendet werden, um Ihre Daten auf einen FTP-Server zu übertragen, zum Beispiel das FTP-Backup, das mit den meisten OVHcloud-Servermodellen bereitgestellt wird.|
|7-ZIP|Ein Datenkomprimierungs- und Datenarchivierungstool, das die folgenden Formate liest: ARJ, CAB, CHM, CPIO, CramFS, DEB, DMG, FAT, HFS, ISO, LZH, LZMA, MBR, MSI, NSIS, NTFS, RAR, RPM, SquashFS, UDF, VHD, WIM, XAR und Z. Außerdem können Sie mit diesem Tool Ihre eigenen Archive in den folgenden Formaten anlegen: BZIP2, GZIP, TAR, WIM, XZ, Z und ZIP.|

///

<a name="gofurther"></a>

## Weiterführende Informationen

[Rescue-Modus für Windows verwenden](/pages/bare_metal_cloud/dedicated_servers/rescue-customer-windows)

[Server-Zugriff wiederherstellen, wenn Ihr Benutzerpasswort verloren geht](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)

[Ersetzen Ihrer Authentifizierungsschlüssel für den SSH-Zugriff bei Schlüsselverlust](/pages/bare_metal_cloud/dedicated_servers/replacing-lost-ssh-key)

[Konfiguration und Neuerstellung des Software-RAID](/pages/bare_metal_cloud/dedicated_servers/raid_soft)

[Diagnostizieren von Hardware-Problemen](/pages/bare_metal_cloud/dedicated_servers/hardware-diagnose)

[Verwenden der IPMI-Konsole mit einem Dedicated Server](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.