---
title: 'Cisco ASA Firewall aktualisieren'
slug: cisco-asa-firewall-aktualisieren
excerpt: 'Hier erfahren Sie, wie Sie Ihre Cisco ASA Firewall aktualisieren'
section: 'Fortgeschrittene Nutzung'
---

> [!primary]
> **End of support Cisco ASA Firewall**
>
> OVHcloud stellt den Support für das Dedicated Server Feature Cisco ASA Firewall demnächst ein. Genauere Informationen finden Sie auf [dieser Seite](https://docs.ovh.com/gb/en/dedicated/cisco-asa-eol/).
>

**Stand 16.08.2018**

## Einleitung

Für einen optimalen Schutz Ihres Systems ist es wichtig, Ihre Cisco Adaptive Security Appliance (ASA) Firewall immer mit den neuesten Patches zu aktualisieren, um eventuelle Sicherheitslücken zu schließen.

**In dieser Anleitung erfahren Sie, wie Sie Ihre Cisco ASA Firewall aktualisieren.**

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external}.


## Beschreibung

### ASA über das Kundencenter deaktivieren

Für die Aktualisierung sind mehrere Neustarts notwendig. Wir empfehlen Ihnen deshalb, die ASA zu deaktivieren, damit der Server während der Aktualisierung verfügbar bleibt.

Gehen Sie dazu in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} in den Bereich `Bare Metal Cloud`{.action}. Wählen Sie dann Ihren Dedicated Server aus und gehen Sie auf `Cisco ASA Firewall`{.action}. Klicken Sie anschließend rechts auf `Cisco ASA Firewall deaktivieren`{.action}.

![ASA deaktivieren](images/customer_panel_asa_disable.png){.thumbnail}

### Konfiguration vornehmen

#### Erste Methode: über den ASDM

Loggen Sie sich im Cisco Adaptive Security Device Manager (ASDM) ein und wählen Sie dann `File`{.action} und `Save Running Configuration to Flash`{.action}:

![Eingeben der Einstellungen über ASDM](images/asa1.jpg){.thumbnail}

#### Zweite Methode: über SSH

Loggen Sie sich via SSH in der ASA ein:

```sh
user@desk:~$ ssh adminovh@IP_ASA

adminovh@IP_ASAs password:
Type help or '?' for a list of available commands.

asa12345> en
Password: ********
```

Geben Sie danach folgenden Befehl ein:

```sh
asa12345# write memory

Building configuration...
Cryptochecksum: 4b86b1e4 2e731d6b 9d1fc491 a5eae0f3
6854 bytes copied in 1.20 secs (6854 bytes/sec)
[OK]
```


### Konfiguration speichern

Erstellen Sie eine lokale Datei, z. B. `backupAsa.txt`. Loggen Sie sich in den ASDM ein, gehen Sie auf `Tools`{.action} und dann auf `Backup Configurations`{.action}.

![Speichern der Konfiguration über ASDM](images/asa2.jpg){.thumbnail}

Wählen Sie im Kontextmenü die lokale Datei aus, die Sie gerade erstellt haben (über `Browse Local...`{.action}) und speichern Sie die Konfiguration, indem Sie auf `Backup`{.action} klicken.

![Speichern der Konfiguration über ASDM 2](images/asa3.jpg){.thumbnail}


### ASA neu starten

Dieser Schritt ist notwendig, um zu überprüfen, dass die ASA funktioniert und nach einem einfachen Neustart verfügbar ist.

#### Erste Methode: über den ASDM

Loggen Sie sich in den Adaptive Security Device Manager ein und gehen Sie auf `Tools`{.action}, dann auf `System Reload...`{.action}:

![ASA über ASDM neu starten 1](images/asa5.jpg){.thumbnail}

Ein Fenster öffnet sich. Wählen Sie für einen sofortigen Neustart `Reload Start Time` > `Now`{.action} > `Schedule Reload`{.action}.

![ASA über ASDM neu starten 2](images/asa6.jpg){.thumbnail}

![ASA über ASDM neu starten 3](images/asa7.jpg){.thumbnail}


#### Zweite Methode: über SSH

Loggen Sie sich via SSH in der ASA ein und geben Sie den Befehl `reload` ein:

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

Der Neustart wird einige Minuten dauern, da die Konfiguration neu geladen wird.


### ASA über das Kundencenter erneut aktivieren

Loggen Sie sich wie im ersten Schritt in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und gehen Sie in den Bereich `Bare Metal Cloud`{.action}. Wählen Sie dann Ihren Dedicated Server aus und gehen Sie auf `Cisco ASA Firewall`{.action}. Klicken Sie anschließend rechts auf `Cisco ASA Firewall aktivieren`{.action}.

![ASA aktivieren](images/customer_panel_asa_enable.png){.thumbnail}


Überprüfen Sie nach dem Neustart, wenn die ASA wieder aktiviert ist, ob alle Dienste Ihres Servers funktionieren. Wenn alles in Ordnung ist, gehen Sie zum nächsten Schritt über. Bei Problemen führen Sie zunächst die erforderlichen Kontrollen durch, um die Fehlfunktionen zu beheben.


### ASA erneut über das Kundencenter deaktivieren

ASA muss nun erneut wie im ersten Schritt deaktiviert werden.

Gehen Sie dazu in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} in den Bereich `Bare Metal Cloud`{.action}. Wählen Sie dann Ihren Dedicated Server aus und gehen Sie auf `Cisco ASA Firewall`{.action}. Klicken Sie anschließend rechts auf `Cisco ASA Firewall deaktivieren`{.action}.

![ASA deaktivieren](images/customer_panel_asa_disable.png){.thumbnail}


### Aktuell verwendete Binärdatei überprüfen

#### Erste Methode: über den ASDM

Loggen Sie sich in den Adaptive Security Device Manager ein, gehen Sie auf `Device Information`{.action} und dann auf `General`{.action}. Hier finden Sie Ihre ASA- und ASDM-Versionen. Wir empfehlen, diese aufzuschreiben und zu verwahren.

![Binärdateien über ASDM überprüfen](images/asa9.jpg){.thumbnail}


#### Zweite Methode: über SSH

Loggen Sie sich via SSH in der ASA ein und geben Sie folgenden Befehl ein:


```sh
asa12345# sh run | i bin

boot system disk0:/asa847-30-k8.bin
asdm image disk0:/asdm-771.bin
```

- *boot system*: ASA-Version
- *asdm image*: ASDM-Version


### Überprüfen, welche Binärdatei zu verwenden ist

In der folgenden Tabelle können Sie nachlesen, welche Binärdatei verwendet werden muss:

|Aktuelle ASA-Version|Erstes erforderliches Update|Letztes erforderliches Update|
|---|---|---|
|8.2(x) und älter|8.4(6)|9.1(3) und neuer|
|8.3(x)|8.4(6)|9.1(3) und neuer|
|8.4(1) bis 8.4(4)|8.4(6) oder 9.0(2+)|9.1(3) und neuer|
|8.4(5+)|-|9.1(3) und neuer|
|8.5(1)|9.0(2+)|9.1(3) und neuer|
|8.6(1)|9.0(2+)|9.1(3) und neuer|
|9.0(1)|9.0(2+)|9.1(3) und neuer|
|9.0(2+)|-|9.1(3) und neuer|
|9.1(1)|9.1(2)|9.1(3) und neuer|
|9.1(2+)|-|9.1(3) und neuer|
|9.2(x)|-|9.2(2) und neuer|

Sollte Ihre ASA beispielsweise Version 8.4(2) haben, muss Ihr System zunächst auf Version 8.4(6) und anschließend auf die Versionen 8.4(7+) oder 9.2+ aktualisiert werden.


Für weitere Informationen, lesen Sie die zugehörige [Cisco Dokumentation](https://www.cisco.com/c/en/us/td/docs/security/asa/migration/upgrade/upgrade.html){.external}.

> [!primary]
>
> Bei einer Cisco ASA Firewall mit 256 MB Speicher empfehlen wir nur auf Version 8.4(x) zu aktualisieren. Die Versionen 9.1(x) und 9.2(x) verbrauchen fast den gesamten Speicherplatz von 256 MB, noch bevor sie überhaupt gestartet werden.
>

Es gibt zwei Möglichkeiten, um zu überprüfen, welche Version Sie aktuell verwenden:

- Via SSH mit folgendem Befehl:

```
asa12345# sh ver| i RAM

Hardware: ASA5505, 512 MB RAM, CPU CPU Geode 500 MHz
```

- Im ASDM, über den Bereich `Tools`{.action}, dann `Command Line Interface...`{.action}:

![Version der Binärdatei im ASDM überprüfen 1](images/asa10.jpg){.thumbnail}

![Version der Binärdatei im ASDM überprüfen 2](images/asa11.jpg){.thumbnail}


### Nicht verwendete Binärdateien entfernen

Bevor Sie neue Binärdateien hinzufügen, sollten die alten entfernt werden.

#### Erste Methode: über den ASDM
Loggen Sie sich in den Adaptive Security Device Manager ein. Gehen Sie dann auf `Tools`{.action} und auf `File Management...`{.action}.

![Im ASDM nicht verwendete Binärdateien entfernen 1](images/asa12.jpg){.thumbnail}

Löschen Sie nun die nicht verwendeten Binärdateien (*.bin*). Auf der Festplatte sollten nun jeweils eine Datei für die ASA und eine für den ASDM angezeigt werden.

![Im ASDM nicht verwendete Binärdateien entfernen 2](images/asa13.jpg){.thumbnail}


#### Zweite Methode: über SSH

Loggen Sie sich via SSH in der ASA ein und entfernen Sie die Dateien, die Sie notiert haben:

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

### ASDM-Binärdateien hinzufügen und installieren

#### Erste Methode: über den ASDM

Loggen Sie sich in den Adaptive Security Device Manager ein. Gehen Sie dann auf `Tools`{.action} und auf `Upgrade Software from Local Computer...`{.action}.

![ASDM-Binärdateien hinzufügen und installieren](images/asa14.jpg){.thumbnail}

Im angezeigten Fenster wählen Sie:

- *Image to upload*: ASDM
- *Local File Patch*: Klicken Sie auf `Browse Local Files`{.action} und wählen Sie die Version Ihrer ASDM-Binärdatei.

Bestätigen Sie Ihre Auswahl mit `Upload Image`{.action}und wählen Sie dann `Yes`{.action}, um zu bestätigen, dass dieses Bild als Startbild verwendet werden soll:

![ASDM-Binärdateien über ASDM hinzufügen und installieren 2](images/asa15.jpg){.thumbnail}

![ASDM-Binärdateien über ASDM hinzufügen und installieren 3](images/asa16.jpg){.thumbnail}


#### Zweite Methode: über SSH

Die Binärdatei sollte zunächst auf einem FTP-Server gespeichert werden. Dann können Sie die ASA über SSH konfigurieren und die Konfiguration speichern:

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

asa12345(config)# asdm image disk0:/asdm-781.bin
asa12345(config)# end

asa12345# write memory
```

### Neue ASA-Binärdateien hinzufügen und installieren

#### Erste Methode: über den ASDM

Loggen Sie sich in den Adaptive Security Device Manager ein. Gehen Sie auf `Tools`{.action} und anschließend auf `Upgrade Software from Local Computer...`{.action}.

![ASA-Binärdateien über ASDM hinzufügen und installieren 1](images/asa14.jpg){.thumbnail}

Im angezeigten Fenster wählen Sie:

- *Image to upload*: ASA
- *Local File Patch*: Klicken Sie auf `Browse Local Files`{.action} und wählen Sie Ihre Version der ASA-Binärdatei.

 
Bestätigen Sie Ihre Auswahl mit `Upload Image`{.action}und wählen Sie dann `Yes`{.action}, um zu bestätigen, dass dieses Bild als Startbild verwendet werden soll:

![ASA-Binärdateien über ASDM hinzufügen und installieren 2](images/asa18.jpg){.thumbnail}

![ASA-Binärdateien über ASDM hinzufügen und installieren 3](images/asa20.jpg){.thumbnail}


#### Zweite Methode: über SSH

Loggen Sie sich via SSH ein und geben Sie folgende Befehle ein:

```sh
asa12345# copy ftp://USER:PASSWORD@FTP_IP/FOLDER/asa-924.bin flash:asa-924.bin

Address or name of remote host [FTP_IP]?

Source username [USER]?

Source password [PASSWORD]?

Source filename [asa-924.bin]?

Destination filename [asa-924.bin]?

Accessing ftp://USER:PASSWORD@FTP_IP/FOLDER/asa-924.bin...!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Writing file disk0:/asa-924.bin...
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
28057462 bytes copied in 46.270 secs (609345 bytes/sec)

asa12345# conf t

asa12345(config)# asdm image disk0:/asa-924.bin

asa12345(config)# end

asa12345# write memory
```
 

### ASA neu starten

Dieser Schritt ist notwendig, um sich zu vergewissern, dass die ASA funktioniert und nach einem einfachen Neustart verfügbar ist.

#### Erste Methode: über den ASDM

Loggen Sie sich in den Adaptive Security Device Manager ein. Gehen Sie auf `Tools`{.action}, dann auf `System Reload...`{.action}:

![ASA über ASDM neu starten 1](images/asa5.jpg){.thumbnail}

Ein Fenster öffnet sich. Wählen Sie für einen sofortigen Neustart `Reload Start Time`: `Now`{.action} und anschließend `Schedule Reload`{.action}:

![ASA über ASDM neu starten 2](images/asa6.jpg){.thumbnail}

![ASA über ASDM neu starten 3](images/asa7.jpg){.thumbnail}


#### Zweite Methode: über SSH

Loggen Sie sich via SSH in der ASA ein und geben Sie den Befehl `reload` ein:

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

Der Neustart wird einige Minuten dauern, da die Konfiguration neu geladen wird.

 

> [!warning]
>
> Sollten Sie bei diesem Schritt die ASA-Binärdatei nicht hinzuzufügen können, starten Sie das System neu, um den ASDM zu aktualisieren und entfernen Sie dann die nicht verwendete ASDM-Binärdatei für mehr Speicherplatz.
> 
> Aktualisieren Sie anschließend die ASA-Binärdatei wie in den obigen Schritten beschrieben.
>

 

### Die Konfiguration korrigieren

Wenn Sie die ASA von älteren Versionen als 8.4.6 aktualisieren, sehen Sie nach dem Neustart diese neue Konfiguration:

```sh
asa12345# sh run | i permit-

no arp permit-nonconnected
```


Korrigieren Sie diese wie folgt:

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

![Cisco ASA Firewall aktualisiert](images/asa10.jpg){.thumbnail}

![Cisco ASA Firewall aktualisiert](images/asa23.jpg){.thumbnail}



### ASA über das Kundencenter erneut aktivieren

Loggen Sie sich wie im ersten Schritt in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und gehen Sie auf den Bereich `Bare Metal Cloud`{.action}. Wählen Sie dann Ihren Dedicated Server aus und gehen Sie auf `Cisco ASA Firewall`{.action}. Klicken Sie anschließend rechts auf `Cisco ASA Firewall aktivieren`{.action}.

![ASA aktivieren](images/customer_panel_asa_enable.png){.thumbnail}


Ihre Cisco ASA Firewall ist jetzt auf dem neuesten Stand.

![Cisco ASA Firewall aktualisiert](images/asa22.jpg){.thumbnail}



## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.