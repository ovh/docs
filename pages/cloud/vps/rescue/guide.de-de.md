---
title: Rescue-Modus für VPS
slug: rescue
excerpt: In dieser Anleitung erfahren Sie, wie Sie Ihren VPS in den Rescue-Modus versetzen
section: Diagnose & Rescue Modus
---

**Letzte Aktualisierung am 24 November 2020**

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>


## Ziel

Der Rescue-Modus ist ein Werkzeug Ihres VPS. Damit können Sie Ihren Server mit einem temporären Betriebssystem starten. So können Sie Probleme in Ihrem primären Betriebssystem diagnostizieren und lösen. 

Über den Rescue-Modus können Sie:

  - Ihr Root-Passwort ändern
  - Netzwerkprobleme diagnostizieren
  - Reparatur eines fehlerhaften Betriebssystems
  - Fehlkonfiguration der Firewall korrigieren
  - die Leistung der Festplatte testen.

Die Durchführung von Überprüfungen im Rescue-Modus hilft Ihnen auch, festzustellen, ob ein Problem mit der Software oder Hardware zusammenhängt. Wir empfehlen Ihnen, dies zu tun, bevor Sie unsere Support-Teams kontaktieren.

> [!warning]
>
> Wenn Sie Dienste auf Ihrem VPS in Produktion haben, wird der Rescue-Modus diese Dienste abbrechen, bis die Maschine im normalen Modus neu gestartet wurde.
> 

**In dieser Anleitung erfahren Sie, wie Sie Ihren VPS im Rescue-Modus neu starten.**

## Voraussetzungen

- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} angemeldet.
- Sie haben Ihren [OVHcloud VPS bereits](https://www.ovhcloud.com/de/vps/){.external} konfiguriert.

> [!warning]
>
> OVHcloud stellt Ihnen Maschinen zur Verfügung, für die Sie die alleinige Verantwortung tragen. Da wir keinen Zugriff auf diese Maschinen haben, können wir keinerlei Administrator-Aufgaben für diese Server übernehmen. Es liegt daher in Ihrer Verantwortung, das Softwaremanagement und die tägliche Sicherheit Ihrer Anlage zu gewährleisten. Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Wir empfehlen Ihnen jedoch, sich an einen spezialisierten Dienstleister zu wenden, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Sicherheit eines Servers haben. Genauere Informationen finden Sie im Teil „Weiterführende Informationen" dieser Anleitung.
> 

## In der praktischen Anwendung

### Aktivierung des Rescue-Modus

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) ein, gehen Sie in den Bereich `Bare Metal Cloud`{.action} und wählen Sie Ihren Server in der linken Navigationsliste unter `VPS`{.action}.

#### Mit einem aktuellen VPS Angebot

Klicken Sie im Tab `Empfang`{.action} auf `...`{.action} neben "Boot"im Bereich **Ihres VPS**.

![Konfiguration des Rescue-Modus](images/rescue_new.png){.thumbnail}

Wählen `Sie Im Menü im Rescue`{.action}-Modus neu starten.

#### Mit einem alten VPS Angebot

Klicken Sie im Tab `Empfang`{.action} auf den Link Neustart im `Rescue-Modus`{.action}.

![Konfiguration des Rescue-Modus](images/rescue_legacy.png){.thumbnail}

Es wird ein Fenster angezeigt, klicken Sie auf `Bestätigen`{.action}, um den Neustart im Rescue-Modus zu starten.

### Verwendung des Rescue-Modus

Sobald Sie den Neustart gestartet haben, gibt ein Fortschrittsbalken den Fortschritt der Aufgabe an. Bitte beachten Sie, dass dies einige Minuten dauern kann.

> [!primary]
>
> Sie erhalten eine automatische E-Mail mit den SSH-Login-Daten, um auf den Rescue-Modus zuzugreifen. Bitte warten Sie auf den Eingang der E-Mail, bevor Sie weitere Maßnahmen ergreifen. Diese E-Mail ist auch in Ihrem [OVHcloud Kundencenter verfügbar](https://www.ovh.com/auth/?action=gotomanager). Klicken Sie in der rechten oberen Ecke auf den Namen Ihrer OVHcloud-Kennung und wählen Sie `E-Mails aus`{.action}.
>

Sie können sich nun via SSH mit Ihrem VPS verbinden, indem Sie die Login-Daten des Rescue-Modus verwenden. Sobald Ihre Aktionen im Rescue-Modus abgeschlossen sind, starten Sie den VPS über Ihr OVHcloud Kundencenter im "normalen"[Modus neu](https://www.ovh.com/auth/?action=gotomanager).

## Weiterführende Informationen

[Root-Passwort auf einem VPS ändern](../root-password/)

[SSH Einführung](../../dedicated/ssh-einfuehrung/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
