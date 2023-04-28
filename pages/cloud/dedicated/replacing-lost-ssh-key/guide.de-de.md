---
title: "Ersetzen Ihres SSH-Schlüsselpaars bei Verlust"
slug: dedicated-servers-replacing-lost-ssh-key-pair
excerpt: "Erfahren Sie hier, wie Sie den SSH-Zugriff auf Ihren Dedicated Server wiederherstellen"
section: Diagnose & Rescue Modus
order: 2
updated: 2023-02-06
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

**Letzte Aktualisierung am 06.02.2023**

## Ziel

Wenn Sie [SSH-Schlüssel verwenden](https://docs.ovh.com/de/dedicated/ssh-schluessel-erzeugen/), um sich mit Ihrem dedizierten Server zu verbinden, kann der Verlust Ihres privaten SSH-Schlüssels den vollständigen Verlust des Zugangs zu Ihrem Server bedeuten.

Sie können sich jedoch weiterhin über den [OVHcloud Rescue-Modus](https://docs.ovh.com/de/dedicated/ovh-rescue/) mit Ihrem Server verbinden. Dieser Modus ermöglicht den Login mit einem provisorischen Passwort, um Zugriff auf Ihre Dateien zu erhalten.

**Diese Anleitung erklärt, wie Sie Ihre SSH-Schlüssel ersetzen, wenn Sie den Zugriff auf Ihren Server verloren haben.**

>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren oder Ihre Fragen an die [OVHcloud Community](https://community.ovh.com/en/) zu richten, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Implementierung der Dienste auf einem Server haben.
>

## Voraussetzungen

- Sie haben einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

### Schritt 1: Aktuellen SSH-Schlüssel deaktivieren

Um auf Ihren Server im Rescue-Modus zuzugreifen, muss zuerst der aktuell genutzte SSH-Schlüssel deaktiviert werden.

Loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und gehen Sie zum Bereich `SSH-Schlüssel`{.action}. Folgen hierzu Sie bei Bedarf unserer Anleitung zu [SSH-Schlüsseln](https://docs.ovh.com/de/dedicated/ssh-schluessel-erzeugen/#cpsshkey).

Da der im Kundencenter hinterlegte öffentliche Schlüssel ohne den zugehörigen privaten Schlüssel nutzlos ist, können Sie diesen einfach entfernen. Klicken Sie auf den Button <i class="icons-ellipsis icons-border-rounded icons-masterbrand-blue"></i> in der Zeile des Schlüssels und wählen Sie `Schlüssel löschen`{.action}.

![Löschtaste](images/replace-lost-key-01.png){.thumbnail}

Klicken Sie im Popup-Fenster auf `Bestätigen`{.action}.

### Schritt 2: Ein neues Schlüsselpaar erstellen

Erstellen Sie auf Ihrem Gerät ein neues SSH-Schlüsselpaar, wie im ersten Teil der Dokumentation zu [SSH-Schlüsseln](https://docs.ovh.com/de/dedicated/ssh-schluessel-erzeugen/) beschrieben.

### Schritt 3: Im Rescue-Modus auf den Server zugreifen und den Schlüssel ersetzen

Folgen Sie den Anweisungen in der [Anleitung zum Rescue-Modus](https://docs.ovh.com/de/dedicated/ovh-rescue/), um sich mit Ihrem Server zu verbinden und Ihre Partitionen zu mounten.

Sobald Sie Zugriff auf Ihre Dateien haben, öffnen Sie die relevante Datei "authorized_keys" mit einem Texteditor. Diese Datei speichert SSH-Schlüssel und befindet sich im Verzeichnis `home` des Benutzers, mit dem Sie sich auf dem Server einloggen. (Ersetzen Sie "USER_NAME" mit Ihrem verwendeten Benutzernamen.)

```
rescue-customer:~# sudo nano /mnt/home/USER_NAME/.ssh/authorized_keys
```

Kopieren Sie Ihren neuen öffentlichen Schlüssel (erstellt in Schritt 2) und fügen Sie ihn in die Datei ein. Es sollte dann ähnlich dem folgenden Beispiel aussehen:

```console
ssh-rsa 1111111111122222222222333333333333444444444555555555556666666666
777777777778888888888999999900000000000000000000000000== alt@sshkey
ssh-rsa AAAAAAAAABBBBBBBBBBBCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDEEEEEEEEE
EEFFFFFFFFFFFFFGGGGGGGGGGGGGhhhhhhhhhhhhhhhhhhhhhhhhhh== neu@sshkey
```

Sie können die nun obsolete "alte" Schlüsselzeichenfolge aus der Datei löschen. Speichern Sie die Änderungen und schließen Sie den Editor.

Stellen Sie den Boot-Modus wieder auf "normal" um und starten Sie den Server in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) neu. Folgen Sie bei Bedarf der [Anleitung zum Rescue-Modus](https://docs.ovh.com/de/dedicated/ovh-rescue/).

Sie haben jetzt mit Ihrem neuen SSH-Schlüsselpaar wieder Zugriff auf den Server.

## Weiterführende Informationen

[Root-Passwort auf einem Dedicated Server ändern](https://docs.ovh.com/de/dedicated/root-passwort-aendern-linux-dedicated-server/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.