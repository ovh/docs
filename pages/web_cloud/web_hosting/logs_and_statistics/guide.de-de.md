---
title: "Webhosting - Statistiken und Logs einer Website einsehen"
excerpt: "Erfahren Sie hier, wie Sie die Statistiken und Logs Ihrer Website auf Ihrem Webhosting einsehen"
updated: 2025-10-09
---

## Ziel

Der Zugriff auf die Logs und Statistiken Ihrer Website ist in Ihrem Webhosting-Angebot enthalten und über Ihr OVHcloud Kundencenter möglich.

**Diese Anleitung erklärt, wie Sie die Statistiken und Logs Ihrer Website auf Ihrem Webhosting anzeigen.**

## Voraussetzungen

- Sie haben ein [OVHcloud Webhosting](/links/web/hosting) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

Um die verschiedenen statistischen Daten und Logs Ihres Webhostings einzusehen, folgen Sie diesen Schritten. Klicken Sie auf die Tabs, um die **4** Schritte anzuzeigen:

> [!tabs]
> **Schritt 1**
>>
>> Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie in den Bereich `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf das Menü `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Klicken Sie auf den Tab `Statistiken und Logs`{.action}.
>>
>> ![statistics-and-logs](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Der Bereich besteht aus 4 Abschnitten:
>>
>> - [Statistiken der Seitenaufrufe](#website-stats): Zeigt zahlreiche Statistiken zu Ihrem Webhosting an.
>> - [Logs der Website](#website-logs): Zeigt die Rohdaten-Logs Ihres Webhostings an.
>> - [Infrastrukturstatistiken](#infra-stats): Zeigt grafische Statistiken an (HTTP- und SQL-Anfragen, FTP-Befehle, CPU-Auslastung, ausgehende Verbindungen, etc.).
>> - [Verwaltung der Nutzer](#admin-user): Zeigt die Benutzer an, die Zugriff auf die Statistiken haben.
>>
>> ![statistics and logs interface](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/tab.png){.thumbnail}

### Statistiken der Seitenaufrufe <a name="website-stats"></a>

Um den Traffic Ihrer Websites besser verfolgen und steuern zu können, verfügen Sie über **OVHcloud Web Statistics**, ein Tool für Besucherstatistiken und Reichweitenmessungen für auf Ihrem Webhosting gehostete Websites.

![ows dashboard](/pages/assets/screens/other/web-tools/logs/ows-presentation.gif){.thumbnail}

Das Dashboard von **OVHcloud Web Statistics** enthält 7 Abschnitte:

- **Dashboard**: Visualisiert den Traffic der Website auf Ihrem Webhosting.
- **Browsers**: Zeigt ein Ranking der Webbrowser an, die am häufigsten für die Anzeige Ihrer Websites verwendet werden.
- **Geolocalization**: Gruppiert die Besucher der Website je nach Standort.
- **Requests**: Zeigt ein Ranking der Seiten an, die am häufigsten auf Ihren Webseiten besucht werden.
- **Robots**: Visualisiert automatische Verbindungsversuche zu Ihren Webseiten.
- **Status**: Zeigt Statistiken über Fehler und Erfolge an, die anhand der zurückgegebenen HTTP-Codes ermittelt wurden.
- **FAQ**: Öffnet den Bereich für häufig gestellte Fragen.

Im Feld `Period selection` oben rechts können Sie einen bestimmten Zeitraum auswählen.

### Logs der Website <a name="website-logs"></a>

> [!primary]
>
> Wir sind nicht in der Lage, bei der Interpretation der Logs Ihres Webhostings zu assistieren, da dies ausschließlich die Webentwicklung und nicht das Webhosting selbst betrifft.
>
> Wenden Sie sich bei Schwierigkeiten an einen [spezialisierten Dienstleister](/links/partner).
>

Sie können die *Raw Logs* Ihrer Website mit einer Verzögerung von ca. 5 Minuten einsehen.

![osl statistiques dashboard](/pages/assets/screens/other/web-tools/logs/osl-statistics-board.png){.thumbnail}

Es stehen verschiedene Arten von Logs zur Verfügung:

- **Web**: Enthält die verschiedenen Logs zu Besuchen Ihrer Website sowie die verschiedenen Aktionen, die über Ihre Website durchgeführt werden. So können Sie beispielsweise Versuche illegitimer Zugriffe erkennen.
- **FTP**: Die verschiedenen Verbindungen und Kommandos über FTP werden in diesen Logs gespeichert.
- **error**: Hier finden Sie die verschiedenen Fehler, die von Ihrer Website generiert wurden.
- **CGI**: Die verschiedenen Aufrufe von cgi.bin Skripten, die durchgeführt wurden, werden in diesen Logs aufgezeichnet.
- **out**: Enthält die History der verschiedenen externen Anfragen (ausgehende TCP Verbindungen), die von Ihrem Webhosting zu Remote Hosts durchgeführt wurden.
- **SSH**: Diese Logs zeigen die verschiedenen Verbindungen und Befehle an, die mit dem SSH-Protokoll durchgeführt wurden.
- **CRON**: Hier finden Sie die Ergebnisse der Ausführung Ihrer geplanten Tasks [(CRON)](/pages/web_cloud/web_hosting/cron_tasks) auf Ihrem Webhosting.

> [!success]
>
> Um die Statistiken und/oder Logs des CDN einzusehen, lesen Sie unsere zugehörige Anleitung: „[Webhosting - CDN Statistiken und Logs einsehen](/pages/web_cloud/web_hosting/cdn_statistics_and_logs)“.

### Infrastrukturstatistiken <a name="infra-stats"></a>

In diesem Bereich finden Sie die Aktivität der Infrastruktur Ihres Webhostings, um den Verbrauch der Ihnen zur Verfügung gestellten Ressourcen einsehen zu können.

![infrastructure statistics](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/infrastructure-statistics-graph.png){.thumbnail}

Sie können verschiedene Diagrammtypen aus dem Dropdown-Menü oben links anzeigen:

- **FTP Befehle**: Zeigt die wichtigsten Befehle (*Upload*, *Download*, *Login*, *Delete*) an, die über das FTP-Protokoll auf Ihrem Webhosting ausgeführt werden.
- **HTTP-Anfragen**: Gibt die Anzahl und den Rückgabecode der HTTP-Anfragen an, die auf Ihrem Webhosting ausgeführt wurden, eingeteilt in die verschiedenen HTTP-Codes (2xx/3xx, 4xx und 5xx). Bei Bedarf können Sie die Liste der HTTP-Codes und deren Bedeutung direkt über eine Suchmaschine (Google, Yahoo!, Bing, etc.) abrufen.
- **Ausgehende Verbindungen**: Anfragen von Ihrer Website nach extern.
- **CPU-Verwendung**: CPU-Verbrauch Ihrer Webhosting-Instanz.
- **Überschreitungen der Ressourcenobergrenzen**: Zeigt an, wann Ihr Webhosting sein Ressourcenkontingent überschreitet.
- **SQL Requests**: Anzahl der Anfragen an die Datenbanken Ihres Webhostings.
- **SQL-Antwortzeiten**: Antwortzeit der Anfragen an die Datenbanken Ihres Webhostings.

### Verwaltung der Nutzer <a name="admin-user"></a>

Die Erstellung eines Benutzers ermöglicht es einer Person, auf die Statistiken Ihres Webhostings zuzugreifen, ohne Zugriff auf Ihr OVHcloud Kundencenter zu haben.

Klicken Sie im Bereich `Verwaltung der Nutzer`{.action} auf `Einen neuen Nutzer erstellen`{.action} und folgen Sie den Anweisungen, um die Erstellung eines neuen Benutzers abzuschließen.

![create a new user](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/create-a-new-user.png){.thumbnail}

Um mit einem von Ihnen erstellten Benutzer auf die Statistiken Ihrer Website zuzugreifen, müssen Sie die folgende Adresse eingeben und `000` durch die Nummer des Clusters Ihres Webhostings und `domain.tld` durch den Domainnamen Ihrer Website ersetzen (ohne `www`):

```bash
https://logs.cluster000.hosting.ovh.net/domain.tld/
```

Sie können auch direkt über Ihr Kundencenter den Zugangslink zu den Statistiken und Logs abrufen:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein.
2. Klicken Sie auf den Tab `Web Cloud`{.action}.
3. Klicken Sie in der linken Spalte auf `Hosting-Pakete`{.action}.
4. Wählen Sie das betreffende Webhosting aus.
5. Klicken Sie auf der angezeigten Seite auf den Tab `Statistiken und Logs`{.action}.
6. Gehen Sie in den Bereich `Statistiken der Seitenaufrufe`{.action}.
7. Wählen Sie die Schaltfläche `Die Statistiken anzeigen`{.action}.

![website visit statistics](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/view-statistics.png){.thumbnail}

Rufen Sie auf der neu geöffneten Seite die URL in der Adresszeile Ihres Browsers ab.

> [!warning]
>
> Wenn Sie separate Logs für einen [Multisite-Eintrag](/pages/web_cloud/web_hosting/multisites_configure_multisite) aktiviert haben, können die hier erstellten Benutzer nicht auf die Statistiken für diesen spezifischen Multisite-Eintrag zugreifen.
>

## Weiterführende Informationen

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
