---
title: Exchange 2013/2016 Verwendung der Ressourcen-Accounts
excerpt: In dieser Hilfe wird die Verwendung der Ressourcen-Accounts Ihres Exchange Angebots beschrieben
slug: exchange_20132016_verwendung_der_ressourcen-accounts
legacy_guide_number: g1325
section: 'Exchange Account-Funktionen'
---

**Letzte Aktualisierung am 22 Dezember 2020**

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

## Ziel

Diese kollaborative Exchange Funktion erlaubt die Erstellung von E-Mail-Adressen, die den Ressourcen Ihrer Organisation zugewiesen sind, wie Konferenzräume und geteilte Hardware. Die Verwendung dieser Ressourcen-Accounts erlaubt es, die Organisation von Events in einer kollaborativen Arbeitsumgebung zu optimieren, indem Sie Verfügbarkeitskontrollen durchführen und die Ressourcen transparent in Ihre Exchange Kalender integrieren.

**In dieser Anleitung wird die Verwaltung der Ressourcen mithilfe des OVHcloud Kundencenters und der Outlook Web App (OWA) erläutert.**

## Voraussetzungen

- Sie verfügen über eine [bereits konfigurierte Exchange](https://www.ovh.de/emails/hosted-exchange/) Lösung
- Sie sind in Ihrem [OVHcloud Kundencenter eingeloggt](https://www.ovh.com/auth/?action=gotomanager)
- Sie verfügen über die Login-Daten für die E-Mail-Accounts mit Zugriff auf die Ressource

## In der praktischen Anwendung

Loggen Sie sich in Ihr [OVHcloud Kundencenter ein](https://www.ovh.com/auth/?action=gotomanager) und wählen Sie in der oberen Menüleiste `Web Cloud`{.action} aus. Klicken Sie links im Menü auf `Microsoft`{.action} und dann auf `Exchange`{.action}. Wählen Sie dann den betreffenden Exchange Dienst aus. Klicken Sie auf den Tab `Mehr +`{.action} und dann auf `Ressourcen`{.action}.

### Schritt 1: eine Ressource erstellen

![erstellen](images/exchange-resources-step1.png){.thumbnail}

Klicken Sie auf den Button `Ressourcen-Account hinzufügen`{.action} um Ihre erste Ressource zu erstellen. Geben Sie im neuen Fenster folgende Felder ein:

![erstellen](images/exchange-resources-step2.png){.thumbnail}

|Name|Beschreibung|
|---|---|
|E-Mail der Ressource|Geben Sie die Adresse der Ressource ein. Bitte beachten Sie, dass Sie keine existierende E-Mail-Adresse auswählen können.|
|Name der Ressource|Vollständiger Name, der in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) und im [OVHcloud Webmail](https://www.ovh.de/mail/) (OWA) angezeigt wird.|
|Kapazität|Sie können die maximale Größe einer Ressource festlegen (z. B. die Anzahl der Sitzplätze in einem Raum oder die Sitze in einem geteilten Fahrzeug).|
|Konflikte erlauben|Wenn Sie dieses Kästchen ankreuzen, können Sie sich überschneidende Kalenderereignisse mit derselben Ressource erstellen.|
|Ressourcen-Typ|Wählen Sie den Ressourcentyp aus: "Ausrüstung" oder "Saal".|

Klicken Sie auf `Weiter`{.action}, um zur Zusammenfassung zu gelangen, und bestätigen Sie den Task, indem Sie auf `Erstellen klicken`{.action}.


### Schritt 2: Ressourcen nutzen

Ihre Ressourcen können ab der Tabelle im Tab "Ressourcen"verwaltet werden. Klicken Sie auf `...`{.action} um eine Ressource zu ändern oder zu löschen. Die Option `Delegationen konfigurieren`{.action} wird ebenfalls angezeigt. Mit dieser Option können Sie den Zugriff auf die gleiche Weise wie für einen Exchange Account delegieren. Die Details finden Sie [in dieser Anleitung](../exchange_2013_send_as_versand_als/).

![verwenden](images/exchange-resources-step3.png){.thumbnail}

### Einen Ressourcenkalender in OWA hinzufügen

> [!primary]
>
Lesen Sie auch unsere Anleitung [zur Kalenderfreigabe über OWA](../exchange_2016_einen_kalender_via_owa_webmail_freigeben/).
>

Verbinden Sie sich über das OVHcloud Webmail mit [Ihrem Exchange Account](https://www.ovh.de/mail/). Wechseln Sie zum "Kalender"-Interface, indem Sie in der oberen linken Ecke auf den "Initiator"klicken und anschließend das Kalender-Symbol `auswählen`{.action}.

![hinzufügen](images/exchange-calendars-step1.png){.thumbnail}

Klicken Sie in der oberen Navigationsleiste auf `Kalender hinzufügen`{.action} und dann auf `Ab dem Verzeichnis`{.action}.

![auswählen](images/exchange-resources-step4.png){.thumbnail}

Geben Sie den Text ein, um die Vorschläge Ihrer Kontakte anzuzeigen, geben Sie eine vollständige E-Mail-Adresse ein oder verwenden Sie die Suchoption über `Aus dem Telefonbuch`{.action}. Die E-Mail-Adresse der Ressource sollte jedoch zu diesem Zeitpunkt vorgeschlagen werden, da sie bei ihrer Erstellung automatisch zur Globalen Adressliste (GAL) hinzugefügt wurde. Klicken Sie `auf`{.action} Öffnen, um den Kalender dieser Ressource zur Übersicht über Ihren Kalender hinzuzufügen.

### Event in OWA erstellen

Um ein Ereignis zu planen, klicken Sie zunächst auf `Neu`{.action} im oberen Menü und wählen Sie `Kalenderereignis aus`{.action}. Im neuen Fenster können Sie die Details Ihres Events definieren und die erforderliche Hardware sowie den Standort hinzufügen, indem Sie die entsprechenden Ressourcen hinzufügen.

![Planung](images/exchange-resources-step5_1.png){.thumbnail}

Der Ereignisverwalter besteht aus drei Komponenten:

#### Beschreibung

- (1) Einen Titel für das Ereignis hinzufügen: wird in den Kalendern angezeigt.
- (2) Einen Ort oder Saal hinzufügen: Sie können aus Ihren Ressourcen-Accounts wählen.
- (3) Anfang/Ende: Legen Sie die Dauer des Ereignisses fest.
- (4) Wiederholen: Wählen Sie gegebenenfalls einen Wiederholungszyklus (täglich, jeden Monat am gleichen Tag usw.).
- (5) Erinnerung: OWA zeigt zur angegebenen Zeit ein Erinnerungsfenster an.
- (6) Anzeigen wie: Wählen Sie einen Zustand für Ihren Verfügbarkeitskalender aus.
- (7) Eine Erinnerung per Post hinzufügen: eine Option, um Erinnerungen per E-Mail an Sie oder alle Teilnehmer zu versenden.

Geben Sie Ihre Einladungsmitteilung an den Herausgeber (8) und fügen Sie weiterhin Teilnehmer zu Ihrem Event hinzu.

Wenn Sie versuchen, eine bereits reservierte Ressource ("besetzt") hinzuzufügen, wird eine Nachricht angezeigt, die die [Verwendung des Planungsassistenten](./#planung) (9) vorschlägt, der einen umfassenderen Überblick über den Zeitplan für den gewählten Zeitraum bietet.

#### Kontakte

Da ein Ressourcen-Account auch ein Kontakt ist, können Sie wie bei den anderen Teilnehmern (10) Räume und Geräte zu diesem Bereich hinzufügen. Geben Sie zunächst die Vorschläge Ihrer Kontakte an, geben Sie eine vollständige E-Mail ein oder verwenden Sie die Suchoption (ein Klick auf `+`{.action} öffnet Ihre Kontakte).

Sobald Sie die Planung abgeschlossen haben, indem Sie auf `Versenden`{.action} im oberen Menü klicken, sendet Ihnen der Ressourcen-Account eine Nachricht, um zu bestätigen, dass er für Ihr Event reserviert ist. Setzen Sie ein Häkchen bei "Antworten anfordern", wenn Sie eine aktive Bestätigung der Gäste benötigen, um Ihren Kalender automatisch zu aktualisieren.

#### Planung

Ein Kalender-Auszug aus Ihren eigenen Events, **Planung**, erscheint rechts, sobald Sie eine Ressource oder eine Person zu dem Ereignis hinzufügen. Er liefert einen grafischen Überblick über die Verfügbarkeit der Ressourcen am gewählten Tag. Sie können Zeit und Dauer des Ereignisses direkt festlegen, indem Sie mit der Maus klicken und das Menü oben rechts auswählen.

Wenn nötig, klicken Sie auf `Assistent`{.action} für Planung im **Bereich** Kontakte, um einen noch detaillierteren Überblick zu geben. Dieser Assistent ist nützlich für größere Ereignisse oder wenn Sie Konflikte managen müssen, da er den gesamten Planungsprozess darstellt. Sie können die Verfügbarkeit überprüfen und Ihre Planung anpassen, indem Sie Standorte und Kontakte auswählen, ohne dieses Interface zu verlassen.

![Assistent](images/exchange-resources-step6.png){.thumbnail}

### Antworten der Ressource

Nach Erstellung des Events (indem Sie auf `Versenden`{.action} im oberen Menü klicken) versendet Exchange automatisch Nachrichten:

- Die Teilnehmer erhalten Einladungen (um die betreffenden Kalender oder nur ihre eigenen zu aktualisieren, je nachdem, wie Sie zuvor "Antworten anfordern" ausgewählt haben).

- Sie erhalten eine Bestätigungs-E-Mail von jedem ausgewählten Ressourcen-Account (wenn die Ressource verfügbar ist oder reserviert ist, aber bei **der Erstellung** "Konflikte erlauben" angekreuzt haben).

![Annahmenachricht](images/exchange-resources-step7.png){.thumbnail}

- Sie erhalten eine ablehnende E-Mail von jedem ausgewählten Ressourcen-Account (wenn die Ressource nicht verfügbar ist und Sie **bei der Erstellung** nicht "Konflikte erlauben" angekreuzt haben).

![ablehnende Nachricht](images/exchange-resources-step8.png){.thumbnail}

## Weiterführende Informationen

[Ihren Exchange Account über das OWA Interface einsehen](../exchange_2016_verwendung_der_outlook_web_app/)

[Kalender über das OWA Interface teilen](../exchange_2016_einen_kalender_via_owa_webmail_freigeben/)

[Ordner über das OWA Interface teilen](../exchange_2016_einen_ordner_via_owa_webmail_freigeben/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
