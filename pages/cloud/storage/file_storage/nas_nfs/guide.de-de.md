---
title: HA-NAS über NFS mounten
slug: nas/nfs
excerpt: "Erfahren Sie hier, wie sich mit Ihrem HA-NAS unter Verwendung einer NFS-Freigabe verbinden"
section: NAS
order: 03
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 08.11.2022**

## Ziel

OVHcloud HA-NAS ermöglicht Ihnen die Verwaltung eines über Netzwerk zugänglichen Datei-Storage.

**Diese Anleitung erklärt, wie Sie mit NFS unter den gängigsten Betriebssystemen auf Ihr HA-NAS zugreifen.**

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren oder Ihre Fragen an die [OVHcloud Community](https://community.ovh.com/en/) zu richten, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Implementierung der Dienste auf einem Server haben.
> 

## Voraussetzungen

- Sie haben ein [OVHcloud HA-NAS](https://www.ovhcloud.com/de/storage-solutions/nas-ha/) in Ihrem Kunden-Account.
- Sie verfügen über einen OVHcloud Dienst, dem eine öffentliche IP-Adresse zugeordnet ist (Hosted Private Cloud, Dedicated Server, VPS, Public Cloud Instanz, etc.).
- Auf Ihrem zugreifenden Server ist ein mit NFS kompatibles Betriebssystem installiert.
- [Sie haben auf dem Dienst eine Partition mit aktiviertem NFS-Protokoll erstellt](https://docs.ovh.com/de/storage/file-storage/nas/get-started/#partition).
- [Sie haben einen ACL-Eintrag für die IP-Adresse des Servers angelegt](https://docs.ovh.com/de/storage/file-storage/nas/get-started/#addaccess).
- Sie haben administrativen Zugriff (Root) auf Ihren Server über SSH oder GUI.

## In der praktischen Anwendung

Die folgenden Abschnitte enthalten Konfigurationsbeispiele für die am häufigsten verwendeten Distributionen/Betriebssysteme. Verbinden Sie sich zunächst per SSH mit Ihrem Server oder loggen Sie sich in die grafische Oberfläche Ihres installierten Betriebssystems ein. Die Beispiele und Instruktionen setzen voraus, dass Sie als Benutzer mit erhöhten Berechtigungen verbunden sind.

Sie benötigen auch den **internen Namen** und die **IP-Adresse** Ihres HA-NAS, die Sie in der nach der Installation erhaltenen E-Mail oder in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) finden können.

Die folgenden Notationen werden als Argumente in den Kommandozeilenabschnitten verwendet. Ersetzen Sie diese mit den entsprechenden Werten bei der Eingabe der Befehle.

|Argument|Beschreibung|
|---|---|
|IP_HA-NAS|IP-Adresse des HA-NAS (Beispiel: `10.1.1.1`)|
|NFS_PATH|Zugriffspfad zu der zu mountenden HA-NAS Partition, bestehend aus dem Namen der Dienstleistung und dem Namen Ihrer Partition (Beispiel: `zpool-123456/partition01`)|
|MOUNTING_FOLDER|Der lokale Ordner für Ihre gemountete Partition|

> [!warning]
>
> Der NFS Benutzer ist `root`; Änderungen der Rechte mit diesem Benutzer können zu Konflikten mit bestehenden CIFS/SMB-Rechten führen.
>

### Debian-basierte Distributionen

Installieren Sie das Paket `nfs-common`:

```bash
ubuntu@server:~$ sudo apt install nfs-common
```

Verwenden Sie anschließend folgenden Mount-Befehl:

```bash
ubuntu@server:~$ sudo mount -t nfs IP_HA-NAS:NFS_PATH /MOUNTING_FOLDER
```

**Beispiel:**

```bash
ubuntu@server:~$ sudo mount -t nfs 10.1.1.1:zpool-123456/partition01 /mount/ha_nas
```

Sie können nun über den angegebenen Ordner auf Ihre gemountete Partition zugreifen.

> [!primary]
>
> Um die Mountoperation automatisch auszuführen, wenn der Server bootet, fügen Sie folgende Zeile zur Datei `/etc/fstab` hinzu:
>
> `IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER nfs rw 0 0`
>

### CentOS 7 / AlmaLinux / Rocky Linux

Überprüfen Sie, dass die neuesten Versionen der Pakete `nfs-utils` und `rpcbind` installiert sind:

```bash
centos@server:~$ sudo yum install nfs-utils rpcbind
```

Falls nötig, starten Sie den Dienst `rpcbind` mit folgendem Befehl neu:

```bash
centos@server:~$ sudo systemctl restart rpcbind
```

Verwenden Sie folgenden Befehl, um Ihre Partition zu mounten:

```bash
centos@server:~$ sudo mount -t nfs IP_HA-NAS:NFS_PATH /MOUNTING_FOLDER
```

**Beispiel:**

```bash
centos@server:~$ sudo mount -t nfs 10.1.1.1:zpool-123456/partition01 /mount/ha_nas
```

Sie können nun über den angegebenen Ordner auf Ihre gemountete Partition zugreifen.

> [!primary]
>
> Um die Mountoperation automatisch auszuführen, wenn der Server bootet, fügen Sie folgende Zeile zur Datei `/etc/fstab` hinzu:
>
> `IP_HA-NAS:NFS_PATH /MOUNTING_FOLDER nfs rw 0 0`
>

### Fedora

Installieren Sie das Paket `nfs-utils`:

```bash
fedora@server:~$ sudo dnf -y install nfs-utils
```

Verwenden Sie anschließend folgenden Mount-Befehl:

```bash
fedora@server:~$ sudo mount -t nfs IP_HA-NAS:NFS_PATH /MOUNTING_FOLDER
```

**Beispiel:**

```bash
fedora@server:~$ sudo mount -t nfs 10.1.1.1:zpool-123456/partition01 /mount/ha_nas
```

Sie können nun über den angegebenen Ordner auf Ihre gemountete Partition zugreifen.


### Proxmox

Klicken Sie im Verwaltungsinterface von Proxmox im vertikalen Menü auf `Storage`{.action}.

![proxmox](images/proxmox1.png){.thumbnail}

Klicken Sie auf den Button `Add`{.action} und wählen Sie `NFS`{.action} aus.

Geben Sie im neu angezeigten Fenster die folgenden Informationen ein.

|Detail|Beschreibung|
|---|---|
|ID|Bezeichnung für den Share|
|Server|IP-Adresse des HA-NAS (Beispiel: `10.1.1.1`)|
|Export|Pfad zur HA-NAS Partition (Er sollte vom automatischen Scan erkannt werden; wählen Sie ihn in der Liste aus.)|
|Content|Inhaltstypen für diese NFS-Freigabe (Disk image, ISO image, Container template, VZDump backup file, Container, Snippets)|

![proxmox](images/proxmox2.png){.thumbnail}

Klicken Sie auf `Add`{.action}, um Ihre Partition zu mounten.

### VMware ESXI

Klicken Sie im Verwaltungsinterface von VMware ESXI im linken Menü auf `Storage`{.action}.

Klicken Sie dann auf den Button `New datastore`{.action}, um den Assistenten zu öffnen.

![ESXI](images/esxi1.png){.thumbnail}

Wählen Sie im neuen Fenster `Mount NFS datastore`{.action} und klicken Sie auf `Next`{.action}.

![ESXI](images/esxi2.png){.thumbnail}

Füllen Sie das Formular mit den folgenden Angaben aus.

|Detail|Beschreibung|
|---|---|
|Name|Bezeichnung für den Share|
|NFS server|IP-Adresse des HA-NAS (Beispiel: `10.1.1.1`)|
|NFS share|Pfad der zu mountenden HA-NAS Partition (Beispiel: `zpool-123456/partition01`)|

![ESXI](images/esxi3.png){.thumbnail}

Wenn Sie fertig sind, klicken Sie auf `Next`{.action}. Klicken Sie im letzten Schritt auf `Finish`{.action}.

Ihre HA-NAS Partition wurde nun als Datastore hinzugefügt.

![ESXI](images/esxi4.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.