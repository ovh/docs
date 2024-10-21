---
title: "Ersetzen eines SSH-Schlüsselpaars einer Public Cloud-Instanz"
excerpt: "Erfahren Sie hier, wie Sie den Server-Zugriff mit einem neuen SSH-Schlüsselpaar wiederherstellen, falls der private Schlüssel verloren ist"
updated: 2024-06-13
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Der Verlust Ihres privaten SSH-Schlüssels führt zum Verlust des Zugriffs auf Ihre Instanz, sofern Sie keinen alternativen Zugriffsweg konfiguriert haben.

Sie können sich jedoch weiterhin über den OVHcloud Rescue-Modus mit einem provisorischen Passwort auf Ihrer Instanz einloggen und so Ihre Dateien bearbeiten.

**Diese Anleitung erklärt, wie Sie Ihre SSH-Schlüssel ersetzen, wenn Sie keinen Zugang mehr zu Ihrer Instanz haben.**

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung genereller Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren oder Ihre Fragen an die [OVHcloud Community](/links/community) zu richten, wenn Sie bei der Administration Ihres Systems Hilfe benötigen. 
>

## Voraussetzungen

- Sie haben eine [Public Cloud Instanz](/links/public-cloud/public-cloud) in Ihrem OVHcloud Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

### Schritt 1: Erstellen eines neuen Schlüsselpaars

Erstellen Sie ein neues SSH-Schlüsselpaar auf Ihrem lokalen Gerät, wie im [ersten Abschnitt der Dokumentation zu SSH-Schlüsseln](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated) beschrieben.

### Schritt 2: Auf Ihre Instanz im Rescue-Modus zugreifen

Folgen Sie den Anweisungen in der [Anleitung zum Rescue-Modus](/pages/public_cloud/compute/put_an_instance_in_rescue_mode), um die Instanz im Rescue-Modus neu zu starten, sich mit ihr zu verbinden und Ihre Partitionen zu mounten.

Wenn Sie den Befehl `mount` (wie in der Anleitung beschrieben) eingegeben haben und auf Ihre Systempartition zugegriffen werden kann, können Sie den folgenden Befehl verwenden:

```bash
chroot path/to/partition/mountpoint
```

Der Dateipfad hängt vom verwendeten Einhängepunkt ab. Wenn Sie Ihre Partition auf `/mnt` gemountet haben, müssen Sie Folgendes eingeben:

```bash
chroot /mnt/
```

Sie sollten nun vollen Schreibzugriff auf Ihre Dateien in diesem Ordner haben.

### Schritt 3: Den Schlüssel ersetzen

Öffnen Sie die relevante Datei "authorized_keys" mit einem Texteditor. Diese Datei speichert SSH-Schlüssel und befindet sich im Verzeichnis `home` des Benutzers, mit dem Sie sich auf Ihrer Instanz einloggen.

Beispiel:

```bash
nano /mnt/home/USER_NAME/.ssh/authorized_keys
```

Ersetzen Sie "USER_NAME" mit Ihrem verwendeten Benutzernamen.

Kopieren Sie Ihren neuen öffentlichen Schlüssel (erstellt in Schritt 1) und fügen Sie ihn in die Datei ein. Es sollte dann ähnlich dem folgenden Beispiel aussehen:

```console
ssh-rsa 1111111111122222222222333333333333444444444555555555556666666666
777777777778888888888999999900000000000000000000000000== old@sshkey
ssh-rsa AAAAAAAAABBBBBBBBBBBCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDEEEEEEEEE
EEFFFFFFFFFFFFFGGGGGGGGGGGGGhhhhhhhhhhhhhhhhhhhhhhhhhh== new@sshkey
```

Löschen Sie aus Sicherheitsgründen die obsolete "alte" Schlüsselzeichenfolge aus der Datei. Speichern Sie die Änderungen und schließen Sie den Editor.

Starten Sie die Instanz im "normalen" Modus über Ihr [OVHcloud Kundencenter](/links/manager) neu. Folgen Sie bei Bedarf der [Anleitung zum Rescue-Modus](/pages/public_cloud/compute/put_an_instance_in_rescue_mode).

Sie haben jetzt mit Ihrem neuen SSH-Schlüsselpaar wieder Zugriff auf die Instanz.

## Weiterführende Informationen

Treten Sie unserer [User Community](/links/community) bei.