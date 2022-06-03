---
title: Eine neue Windows Server Installation konfigurieren
slug: windows-first-config
excerpt: Erfahren Sie hier, wie Sie Remote-Desktop-Verbindung, ICMP Antwort und Bootlogs aktivieren
section: Erste Schritte
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 06.05.2022**

## Ziel

Nach der Neuinstallation eines Windows Server Betriebssystems auf einem VPS können der Remote-Zugriff und die ICMP-Antwort (Internet Control Message Protocol) deaktiviert sein. Mit OVHcloud KVM können Sie jedoch auf Ihren VPS zugreifen und die Windows Firewall-Anwendung so konfigurieren, dass ICMP aktiviert wird und Verbindungen über das Remote Desktop Protocol (RDP) wieder möglich sind.<br>Die Aktivierung von Windows-Startprotokollen kann bei der Serverfehlerdiagnose hilfreich sein.

**Diese Anleitung erklärt, wie Sie ICMP, RDP und Bootlogs auf einem Windows VPS aktivieren.**

## Voraussetzungen

- Sie haben einen Windows [VPS](https://www.ovhcloud.com/de/vps/) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

### Schritt 1: KVM Zugang

Um auf die KVM-Konsole Ihres VPS zuzugreifen, folgen Sie [unserer Anleitung](../verwendung_von_kvm_fur_vps/).

### Schritt 2: Die Installation von Windows abschließen

Sobald die KVM-Session abgeschlossen ist, werden die Bildschirme mit der ursprünglichen Konfiguration angezeigt. Konfigurieren Sie hier Ihr **Land/Region**, die **Sprache von Windows** und **Ihre Tastaturanordnung**. Wenn Sie diese Operation durchgeführt haben, klicken Sie auf `Next`{.action}.

![KVM](images/setup-03.png){.thumbnail}

Geben Sie im zweiten Fenster ein Passwort für Ihren Administrator-Account ein und bestätigen Sie dieses und klicken Sie dann auf `Finish`{.action}.

![KVM](images/setup-04.png){.thumbnail}

Windows wendet Ihre Einstellungen an und zeigt dann den Login-Screen an. Klicken Sie in der oberen rechten Ecke auf `Send CtrlAltDel`{.action}, um sich zu einzuloggen.

![KVM](images/setup-05.png){.thumbnail}

Geben Sie das Passwort ein, das Sie für Ihren Administrator-Account erstellt haben, und klicken Sie auf den Pfeil.

![KVM](images/setup-06.png){.thumbnail}

Damit ist die Erstkonfiguration abgeschlossen. Sobald Sie eingeloggt sind, ändern Sie die notwendigen Einstellungen der Windows Firewall.

### Schritt 3: Windows Firewall bearbeiten

Öffnen Sie die `Verwaltungstools`{.action} des Konfigurationspanel `System und Sicherheit`{.action} und klicken Sie auf `Windows Firewall mit erweiterter Sicherheit`{.action}.

![Admin](images/windows4.png){.thumbnail}

Hier können Sie jeweils die Eingangsregeln für `ICMP` und `Remote Desktop` aktivieren. (Klicken Sie mit der rechten Maustaste auf die Regel und wählen Sie `Regel aktivieren`{.action} im Kontextmenü.)

![Aktiviert](images/windows5.png){.thumbnail}

Ihr Server sollte nun auf Anfragen antworten, die diese Protokolle verwenden.

### Windows Bootlogs aktivieren (optional)

Loggen Sie sich via Remote-Desktop-Verbindung oder [KVM](../verwendung_von_kvm_fur_vps/) auf dem Server ein. Öffnen Sie das Windows Startmenü und klicken Sie auf `Run`{.action}.

![Bootlog](images/windowsboot1.png){.thumbnail}

Geben Sie "msconfig" ein und klicken Sie auf `OK`{.action}.

![Bootlog](images/windowsboot2.png){.thumbnail}

Aktivieren Sie im neuen Fenster die Option `Boot log`. Klicken Sie auf `OK`{.action}.

![Bootlog](images/windowsboot3.png){.thumbnail}

Bein nächsten Hochfahren des Servers werden die Logs in eine TXT-Datei geschrieben. Der Dateipfad lautet ```C:\Windows\ntbtlog.txt```.

Um die in der Datei gespeicherten Protokolle im Rescue-Modus einzusehen, folgen Sie der [Anleitung zum Rescue-Modus für VPS](../rescue/). 

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
