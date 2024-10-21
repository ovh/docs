---
title: Austauschen eines SSH-Schlüsselpaars
excerpt: Erfahren Sie hier, wie Sie Zugriff auf Ihren Server mit einem neuen SSH-Schlüsselpaar wiederherstellen, falls der private Schlüssel verloren ist
updated: 2024-04-04
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Wenn Sie [SSH-Schlüssel](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated) zum Zugriff auf Ihren Server verwenden, kann der Verlust Ihres privaten SSH-Schlüssels zur Folge haben, dass Sie sich nicht mehr auf Ihrem Server einloggen können.

Sie können sich jedoch weiterhin über den [OVHcloud Rescue-Modus](/pages/bare_metal_cloud/dedicated_servers/rescue_mode) mit Ihrem Server verbinden. Dieser Modus ermöglicht den Login mit einem provisorischen Passwort, um Zugriff auf Ihr System zu erhalten.

**Diese Anleitung erklärt, wie Sie Ihre SSH-Schlüssel ersetzen, wenn Sie keinen Zugang mehr zu Ihrem Server haben.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren oder Ihre Fragen an die [OVHcloud Community](https://community.ovh.com/en/) zu richten, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Implementierung der Dienste auf einem Server haben.
>

## Voraussetzungen

- Sie haben einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/) oder einen [VPS](https://www.ovhcloud.com/de/vps/) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

### Schritt 1: Ein neues Schlüsselpaar erstellen

Erstellen Sie auf Ihrem Gerät ein neues SSH-Schlüsselpaar, wie im ersten Teil der Dokumentation zu [SSH-Schlüsseln](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated) beschrieben.

<a name="step2"></a>

### Schritt 2: Im Rescue-Modus auf den Server zugreifen und den Schlüssel ersetzen

Folgen Sie den Anweisungen in der Anleitung zum Rescue-Modus, um sich mit Ihrem Server zu verbinden und Ihre Partitionen zu mounten:

- [Rescue-Modus Dedicated Server](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)
- [Rescue-Modus VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Sobald Sie Zugriff auf Ihre Dateien haben, öffnen Sie die relevante Datei "authorized_keys" mit einem Texteditor. Diese Datei speichert SSH-Schlüssel und befindet sich im Verzeichnis `home` des Benutzers, mit dem Sie sich auf dem Server einloggen. (Ersetzen Sie "USER_NAME" mit Ihrem verwendeten Benutzernamen.)

```bash
nano /mnt/home/USER_NAME/.ssh/authorized_keys
```

Kopieren Sie Ihren neuen öffentlichen Schlüssel (erstellt in Schritt 1) und fügen Sie ihn in die Datei ein. Es sollte dann ähnlich dem folgenden Beispiel aussehen:

```console
ssh-rsa 1111111111122222222222333333333333444444444555555555556666666666
777777777778888888888999999900000000000000000000000000== alt@sshkey
ssh-rsa AAAAAAAAABBBBBBBBBBBCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDEEEEEEEEE
EEFFFFFFFFFFFFFGGGGGGGGGGGGGhhhhhhhhhhhhhhhhhhhhhhhhhh== neu@sshkey
```

Löschen Sie aus Sicherheitsgründen die obsolete "alte" Schlüsselzeichenfolge aus der Datei. Speichern Sie die Änderungen und schließen Sie den Editor.

Stellen Sie den Boot-Modus wieder auf "normal" um und starten Sie den Server in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) neu. Folgen Sie bei Bedarf der [Anleitung zum Rescue-Modus](#step2).

Sie haben jetzt mit Ihrem neuen SSH-Schlüsselpaar wieder Zugriff auf den Server.

## Weiterführende Informationen

[Einführung SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Rescue-Modus Dedicated Server](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[Rescue-Modus VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.