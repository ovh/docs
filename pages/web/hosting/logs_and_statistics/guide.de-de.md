---
title: 'Statistiken und Logs einer Webseite einsehen'
excerpt: Zugriff auf die Statistiken Ihrer Webseite
slug: webhosting_die_statistiken_und_logs_meiner_website_einsehen
section: 'Webseitenoptimierung'
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Stand 05.01.2021**

## Ziel

Der Zugang zu den Logs und Statistiken Ihrer Website ist in Ihrem Webhosting Angebot enthalten, das über Ihr OVHcloud Kundencenter erreichbar ist.

**Hier erfahren Sie, wie Sie die Statistiken und Logs Ihrer Website einsehen.**

## Voraussetzungen

- Sie verfügen über ein kompatibles [Webhosting Angebot](https://www.ovh.de/hosting/){.external} .
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} angemeldet.

## In der praktischen Anwendung

Loggen Sie sich in Ihrem OVHcloud Kundencenter ein Klicken Sie auf den Tab `Web Cloud`{.action} und dann `in der`{.action} linken Spalte auf Hosting.

Wählen Sie das betreffende Hosting aus und klicken Sie dann auf den Tab `Statistiken und Logs`{.action}

![Hosting](images/statistics01.png){.thumbnail}

Das angezeigte Fenster besteht aus 3 Abschnitten. Die erste zeigt **die** Statistiken, die zweite **die** Rohlogs Ihres Webhostings, die letzte dient der Verwaltung **der Benutzer, die Zugriff auf die** Statistiken haben.

![Hosting](images/statistics02u.png){.thumbnail}

### Verwaltung der Benutzer

Die Erstellung eines Benutzers ermöglicht es einer Person, auf die Statistiken Ihres Hostings zuzugreifen, ohne Zugang zu Ihrem OVHcloud Kundencenter zu haben. 

Klicken Sie im Bereich `Benutzer-Administration auf den Button`{.action} Einen neuen Benutzer` erstellen` und folgen Sie den Anweisungen.  

![Hosting](images/user-statistics01.png){.thumbnail}

> [!warning] 
>
> Wenn Sie die separaten Logs auf einem [Multisite-Eintrag](../multisites-mehrere-websites-konfigurieren/#schritt-2-eine-domain-oder-subdomain-hinzufugen) aktiviert haben, können die hier erstellten Benutzer nicht auf die Statistiken dieses Multisite-Eintrags zugreifen.
>

### Besucherstatistiken

Um Ihnen dabei zu helfen, den Traffic Ihrer Webseiten besser zu verfolgen und zu steuern, verfügen Sie über ein Tool für Besucherstatistiken und die Messung der Zuschauerzahlen Ihrer auf Ihrem Shared Hosting gehosteten Webseiten, **OVHcloud Web Statistics**.

![Hosting](images/OWStats01.gif){.thumbnail}

Das Dashboard von OVHcloud Web Statistics ist in 6 Abschnitten im linken Bereich dargestellt.

- Dashboard: Anzeige des Traffics auf den Webseiten Ihres Hostings.
- Browsers: Klassifizierung der Webbrowser, die am häufigsten für die Anzeige Ihrer Websites verwendet werden.
- Geolocalization:  Anteil der Besucher je nach Standort.
- Requests: Sortierung der am häufigsten auf Ihren Webseiten genutzten Seiten.
- Roboter: Visualisierung der Roboter, die auf Ihren Seiten vorbeikommen.
- Status: statistische Fehlschläge und Erfolge, die anhand der zurückgegebenen HTTP-Codes festgestellt wurden.
- FAQ: Rubrik für die häufigsten Fragen

Das Period `Selection` Framework oben rechts erlaubt es Ihnen, eine bestimmte Zeitspanne auszuwählen.

### Logs

Sie können die Rohlogs Ihrer Website mit einer Verzögerung von etwa 5 Minuten visualisieren.

![Hosting](images/logs01.png){.thumbnail}

Es stehen Ihnen verschiedene Log-Typen zur Verfügung:

- Logs Web: Hier finden Sie die verschiedenen Logs zum Abrufen Ihrer Seite sowie die verschiedenen Aktionen, die von Ihrer Seite aus durchgeführt wurden. So können Sie beispielsweise Versuche erkennen, böswillige Handlungen zu begehen.
- FTP Logs: Die verschiedenen FTP Verbindungen werden in diesen Logs gespeichert und gespeichert.
- Logs fehlerhaft: die verschiedenen Fehler Ihrer Website.
- CGI Logs: die verschiedenen Aufrufe zu den cgi.bin Skripten, die durchgeführt wurden.
- Logs out: die Statistiken Ihres Webhostings zu den verschiedenen externen Anrufen.
- SSH Logs: Diese Logs geben die verschiedenen Verbindungen an, die mit dem SSH-Protokoll hergestellt wurden.
- CRON Logs: das Ergebnis der Ausführung Ihrer geplanten Tasks ([automatisierte Tasks (CRON) auf Ihrem Hosting](../webhosting_automatisierte_aufgaben_cron/)).

### Aktivität des Webhostings

In diesem Bereich finden Sie die Aktivität der Infrastruktur Ihres Hostings, um den Verbrauch der Ihnen zur Verfügung gestellten Ressourcen zu visualisieren.

Klicken Sie auf den Tab `Allgemeine`{.action} Informationen und gehen Sie dann nach unten.

![Hosting](images/statistics03.png){.thumbnail}

Im Drop-down-Menü oben links können Sie verschiedene Arten von Grafiken anzeigen:

- Ausgehende Verbindungen: Anfragen, die von Ihrer Website auf eine externe Seite versandt werden.
- CPU-Nutzung: CPU-Verbrauch auf Ihrer Hosting-Instanz
- Überschreitung der Ressourcenobergrenze: gibt an, wann Ihr Hosting sein Ressourcen-Quota überschreitet.
- SQL Requests: Anzahl der Anfragen an die Datenbanken Ihres Hostings.
- SQL Antwortzeit: Antwortzeit der an die Datenbanken Ihres Hostings gesendeten Anfragen.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
