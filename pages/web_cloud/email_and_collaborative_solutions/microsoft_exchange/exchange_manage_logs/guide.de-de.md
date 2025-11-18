---
title: Exchange - Verwaltung der Logs
excerpt: Erfahren Sie, wie Sie Logs Ihres Private Exchange oder Trusted Exchange ansehen und verwalten können
updated: 2025-10-28
---

<style>
.w-640 {
  max-width:640px !important;
}
</style>

## Ziel 

Logs entsprechen Ereignissen, die auf einem Computersystem (Server, Computer, Anwendung, Website, Datenbank, Netzwerk etc.) auftreten. Logs können beispielsweise folgende Elemente aufzeichnen und enthalten:

- Der Zeitstempel (Datum, Stunde, Minute, Sekunde) des Ereignisses.
- Die Natur des Ereignisses (Anmeldung, Abmeldung, Fehler, Download, Upload, Warnung etc.).
- Zusätzliche Informationen zum Ereignis (angeforderte Seiten oder Dateien, gestartete Anwendungen, *remote* aufgerufene Server, Name einer hochgeladenen oder heruntergeladenen Datei etc.).
- Die Herkunft des Ereignisses (Benutzerkennung, Quell-IP-Adresse, Quellprogramm etc.).
- Der Zustand des Systems zum Zeitpunkt des Ereignisses (verfügbare Ressourcen, verbleibender Speicher, CPU-Auslastung etc.).

Im Allgemeinen werden Logs direkt von den Computersystemen generiert, auf denen die Ereignisse stattfinden. Sie werden in Textdateien gespeichert und archiviert, die auch als Log-Dateien bezeichnet werden.

Log-Dateien ermöglichen Ihnen folgende Aktionen:

- Analyse des Verhaltens des Computersystems, das die Logs generiert.
- Identifizierung von aufgetretenen Fehlern im Computersystem.
- Behebung von Fehlern, die im Computersystem aufgetreten sind.
- Optimierung des Betriebs und der Leistung des Computersystems.

Ihr Private Exchange oder Trusted Exchange generiert daher auch eigene Logs. Sie müssen möglicherweise auf diese Logs zugreifen oder sie abrufen, um den Zugriff auf Ihre E-Mail-Postfächer zu analysieren oder E-Mail-Verkemhr nachzuverfolgen.

**Diese Anleitung erklärt, wie Sie Logs Ihres Private Exchange oder Trusted Exchange ansehen und verwalten können**

## Voraussetzungen

- Sie verwenden [Hosted Exchange](/links/web/emails-hosted-exchange) oder [Trusted Exchange](/links/web/emails-trusted-exchange).
- Sie haben einen Account für Logs Data Platform (LDP). Diese Anleitung führt Sie durch alle notwendigen Schritte: [Quick start for Logs Data Platform (EN)](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

### Anzeigen der Exchange Logs in Echtzeit

Um Echtzeit-Logs auf Ihrem Private- oder Trusted Exchange zu öffnen, gehen Sie wie folgt vor:

1. Loggen Sie sich im [OVHcloud Kundencenter](/links/manager) ein.
1. Gehen Sie in den Bereich `Web Cloud`{.action}.
1. Im Abschnitt `MICROSOFT` klicken Sie auf `Exchange`{.action}.
1. Wählen Sie die relevante Plattform aus.
1. Klicken Sie auf den Tab `Mehr +`{.action} und dann auf `Logs`{.action}.

![exchange - logs](images/exchange-logs01.png){.thumbnail}

> [!warning]
>
> Da dies eine Echtzeitkonsole ist, erscheinen Logs nur, wenn Sie sich im Tab `Logs`{.action} befinden. Wenn Sie den Tab `Logs`{.action} verlassen und darauf zurückkehren, wird die Anzeige aktualisiert und die vorher angezeigten Logs sind nicht mehr verfügbar.

Exchange Dienste bieten zwei Arten von Logs:

- **Access**: Ermöglicht es Ihnen, die Aktivität von Verbindungen auf Ihrem Exchange Dienst anzuzeigen.
- **Message Tracking**: Ermöglicht es Ihnen, detaillierte Logs des E-Mail-Verkehrs über Ihren Exchange Dienst anzuzeigen. Sie finden folgende Informationen:
    - Zustellstatus von E-Mails auf Ihren Exchange Accounts
    - Zustellstatus von E-Mails von Ihrem Exchange Dienst
    - Größe der übertragenen E-Mails
    - etc.

### Integration der Exchange Logs in Logs Data Platform

Die Lösung Logs Data Platform kann nützlich sein, wenn Sie eine große Infrastruktur haben oder wenn Ihre Dienste viele Logs generieren. Diese Plattform so konzipiert, dass sie die Aggregation und Verwaltung von Logs erleichtert.

Sie funktioniert, indem sie Logs abruft, die von Ihrer Infrastruktur, Ihren Webseiten oder Anwendungen generiert werden, beispielsweise um:

- Logs zu speichern.
- Logs in Echtzeit-Dashboards anzuzeigen.
- Benutzern zu ermöglichen, komplexe Abfragen durchzuführen.
- Logs nach Datum, Anwendung, Typ oder Inhalt zu filtern.

> [!primary]
>
> Für weitere Informationen zu Logs Data Platform konsultieren Sie unsere Anleitung zu [Logs Data Platform (EN)](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP).

Exchange Lösungen sind mit verschiedenen Diensten wie Webhosting, VPS und Dedicated Servern kompatibel. Sie können auch durch Datenströme auf Logs Data Platform ergänzt werden, zusätzlich zu den bereits verfügbaren Echtzeit-Logs.

Um die Logs Ihrer Exchange Lösung einem Datenstrom auf Logs Data Platform hinzuzufügen, führen Sie die folgenden Aktionen aus:

1. Melden Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) an.
1. Gehen Sie in den Bereich `Web Cloud`{.action}.
1. Im Abschnitt `MICROSOFT` klicken Sie auf `Exchange`{.action}.
1. Wählen Sie den relevanten Dienst aus.
1. Rechts neben der Reihe von Tabs klicken Sie auf den Tab `Mehr +`{.action} und dann auf `Logs`{.action}.
1. Auf der rechten Seite des Bereichs, in dem Ihre Echtzeit-Logs angezeigt werden, klicken Sie auf den Button `Abonnieren`{.action}.

![exchange - logs](images/exchange-logs02.png){.thumbnail}

Wählen Sie den Account aus dem Dropdown-Menü über der Tabelle aus.

![exchange - logs](images/exchange-logs03.png){.thumbnail}

Zwei Möglichkeiten stehen Ihnen zur Verfügung, um Ihre Exchange Lösung registrieren zu können:

> [!tabs]
> **Fall 1**
>> **Abonnieren eines vorhandenen Datenstroms auf Ihrer Logs Data Platform Lösung**
>>
>> Wenn der relevante Datenstrom bereits existiert, wird er als Zeile in der Tabelle angezeigt. In diesem Fall können Sie Ihre Exchange Lösung einfach durch Klicken auf den Button `Abonnieren`{.action} rechts des relevanten Datenstroms hinzufügen.
>>
>> Es erscheint eine Nachricht in Ihrem Kundencenter, um Sie darüber zu informieren, dass die Aktion erfolgreich abgeschlossen wurde.
>>
> **Fall 2**
>> **Abonnieren eines neuen Datenstroms auf Ihrer Logs Data Platform Lösung**
>>
>> Wenn der relevante Stream noch nicht existiert, klicken Sie auf den Button `Stream hinzufügen`{.action}. Sie werden dann auf eine neue Seite in Ihrem OVHcloud Kundencenter weitergeleitet, auf der Sie einen neuen Stream auf Ihrer Logs Data Platform Lösung erstellen können.
>>
>> Konsultieren Sie unsere Anleitungen [Introduction to Logs Data Platform (EN)](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP) und [Quick start for Logs Data Platform (EN)](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start), um diese Aktion durchzuführen.
>>
>> Nachdem Sie das Formular ausgefüllt haben, klicken Sie auf den Button `Speichern`{.action}.
>>
>> ![exchange - logs](images/exchange-logs04.png){.thumbnail}
>>
>> Sie werden dann auf den Tab `Streams`{.action} Ihrer Logs Data Platform Lösung weitergeleitet.
>>
>> Sie können jetzt Ihr Exchange zum neuen Datenstrom hinzufügen, indem Sie die Anweisungen oben befolgen.

## Weiterführende Informationen <a name="go-further"></a>

Für spezialisierte Dienstleistungen (SEO, Entwicklung etc.) kontaktieren Sie [OVHcloud Partner](/links/partner).

[Einführung in Private Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_private)

[Introduction to Logs Data Platform (EN)](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP)

[Quick start for Logs Data Platform (EN)](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start)

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
