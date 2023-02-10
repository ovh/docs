---
title: Eine neue Windows Server Installation konfigurieren
slug: windows-first-config
routes:
    canonical: 'https://docs.ovh.com/de/vps/windows-first-config/'
excerpt: Erfahren Sie hier, wie Sie die Remotedesktop-Verbindung und die ICMP Antwort aktivieren
section: Erste Schritte
updated: 2022-01-18
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 18.01.2022**

## Ziel

Nach der Neuinstallation eines Windows Server Betriebssystems auf einem Dedicated Server können der Fernzugriff und die ICMP-Antwort (Internet Control Message Protocol) manchmal deaktiviert werden.

**In dieser Anleitung erfahren Sie, wie Sie Windows konfigurieren, um ICMP wieder zu aktivieren und Verbindungen über das Remote Desktop Protocol zu erlauben.**

## Voraussetzungen

- Sie haben einen Windows [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

### Schritt 1: KVM Zugang

Um auf die KVM-Konsole Ihres Servers zuzugreifen, folgen Sie dieser [Anleitung](../verwendung-ipmi-dedicated-server/#kvm-uber-ihren-webbrowser-verwenden-nur-fur-neuere-server).

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

### Schritt 3: Windows Firewall ändern

Öffnen Sie die `Verwaltungstools`{.action} des Konfigurationspanel `System und Sicherheit`{.action} und klicken Sie auf `Windows Firewall mit erweiterter Sicherheit`{.action}.

![Admin](images/windows4.png){.thumbnail}

Hier können Sie jeweils die Eingangsregeln für `ICMP` und `Remote Desktop` aktivieren. (Klicken Sie mit der rechten Maustaste auf die Regel und wählen Sie `Regel aktivieren`{.action} im Kontextmenü.)

![Aktiviert](images/windows5.png){.thumbnail}

Ihr Server sollte nun auf Anfragen antworten, die diese Protokolle verwenden.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com>.
