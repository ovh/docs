---
title: Verwendung von Ressourcen-Accounts
excerpt: In dieser Hilfe wird die Verwendung der Ressourcen-Accounts Ihres Exchange Angebots beschrieben
slug: exchange_20132016_verwendung_der_ressourcen-accounts
section: 'Exchange Account-Funktionen'
order: 05
---

**Letzte Aktualisierung am 22.12.2020**

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

## Ziel

Diese kollaborative Exchange-Funktion erlaubt die Erstellung von E-Mail-Adressen, die den Ressourcen Ihrer Organisation zugewiesen sind, etwa für Konferenzräume und gemeinsam genutzte Hardware. Die Verwendung dieser Ressourcen-Accounts erlaubt es, die Organisation von Events in einer kollaborativen Arbeitsumgebung zu optimieren, indem Verfügbarkeitsprüfungen automatisch ausgeführt und die Ressourcen unmittelbar im Exchange Kalender integriert werden können.

**Diese Anleitung erklärt, wie Sie Ressourcen mithilfe des OVHcloud Kundencenters und der Outlook Web App (OWA) verwalten.**

## Voraussetzungen

- Sie haben einen [OVHcloud Exchange](https://www.ovhcloud.com/de/emails/hosted-exchange/) Dienst eingerichtet.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie verfügen über Login-Daten für die E-Mail-Accounts mit Zugriff auf die Ressource.

## In der praktischen Anwendung

Loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wählen Sie unter `Microsoft`{.action} und `Exchange`{.action} Ihren Exchange Dienst aus.
Klicken Sie auf den Tab `Mehr +`{.action} und dann auf `Ressourcen`{.action}.

### Schritt 1: eine Ressource erstellen

![Erstellen](images/exchange-resources-step1.png){.thumbnail}

Klicken Sie auf den Button `Ressourcen-Account hinzufügen`{.action} um Ihre erste Ressource zu erstellen. Füllen Sie im neuen Fenster folgende Felder aus:

![Erstellen](images/exchange-resources-step2.png){.thumbnail}

|Name|Beschreibung|
|---|---|
|E-Mail-Adresse der Ressource|Geben Sie die Adresse der Ressource ein. Bitte beachten Sie, dass Sie keine existierende E-Mail-Adresse auswählen können.|
|Name der Ressource|Anzeigename, der in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) und im [OVHcloud Webmail](https://www.ovh.de/mail/) (OWA) verwendet wird.|
|Kapazität|Sie können die maximale Größe einer Ressource festlegen (z.B. die Anzahl der Sitzplätze in einem Raum oder die Sitze in einem Unternehmensfahrzeug).|
|Konflikte erlauben|Wenn Sie dies anhaken, können Sie sich überschneidende Kalenderereignisse mit derselben Ressource erstellen.|
|Ressourcen-Typ|Wählen Sie den Ressourcentyp aus: "Ausrüstung" oder "Saal".|

Klicken Sie auf `Weiter`{.action}, um zur Zusammenfassung zu gelangen, und bestätigen Sie den Task, indem Sie auf `Erstellen`{.action} klicken.


### Schritt 2: Ressourcen verwenden

Ihre Ressourcen können in der Tabelle im Tab "Ressourcen" verwaltet werden. Klicken Sie auf `...`{.action} um eine Ressource zu ändern oder zu löschen. Hier erscheint auch die Option `Berechtigungen konfigurieren`{.action}. Mit dieser Option können Sie den Zugriff auf die gleiche Weise wie für einen Exchange Account delegieren. Die Details finden Sie [in dieser Anleitung](../exchange_2013_send_as_versand_als/).

![Verwenden](images/exchange-resources-step3.png){.thumbnail}

### Einen Ressourcenkalender in OWA hinzufügen

> [!primary]
>
Nutzen Sie auch unsere Anleitung zur [Kalenderfreigabe über OWA](../exchange_2016_einen_kalender_via_owa_webmail_freigeben/).
>

Verbinden Sie sich mit Ihrem Exchange Account über das [OVHcloud Webmail](https://www.ovh.de/mail/). Wechseln Sie zum "Kalender"-Interface, indem Sie in der oberen linken Ecke auf den "Launcher"-Button klicken und anschließend den `Kalender`{.action} auswählen.

![Hinzufügen](images/exchange-calendars-step1.png){.thumbnail}

Klicken Sie in der oberen Navigationsleiste auf `Kalender hinzufügen`{.action} und dann auf `Aus dem Verzeichnis`{.action}.

![Auswählen](images/exchange-resources-step4.png){.thumbnail}

Schreiben Sie in das Feld, um automatisch Vorschläge aus Ihren Kontakte anzuzeigen, geben Sie direkt eine vollständige E-Mail-Adresse ein oder verwenden Sie die Suchfunktion über `Verzeichnis durchsuchen`{.action}. Die E-Mail-Adresse der Ressource sollte hier jedoch bereits vorgeschlagen werden, da sie bei der Erstellung automatisch zur Globalen Adressliste (GAL) hinzugefügt wurde.

Klicken Sie auf `Öffnen`{.action}, um den Ressourcenkalender zur Ihrer Kalenderübersicht hinzuzufügen.

### Ein Event in OWA erstellen

Um ein Ereignis zu planen, klicken Sie zunächst auf `Neu`{.action} im oberen Menü und wählen Sie `Kalenderereignis`{.action} aus. Im neuen Fenster können Sie die Details Ihres Events definieren und die erforderliche Hardware sowie den Standort hinzufügen, indem Sie die entsprechenden Ressourcen hinzufügen.

![Planung](images/exchange-resources-step5_1.png){.thumbnail}

Der Ereignisplaner besteht aus drei Komponenten:

#### Details

- (1) Einen Titel für das Ereignis hinzufügen: Ereignis wird so in den Kalendern angezeigt.
- (2) Einen Ort oder Raum hinzufügen: Sie können aus Ihren Ressourcen-Accounts wählen.
- (3) Start/Ende: Legen Sie die Dauer des Ereignisses fest.
- (4) Wiederholen: Wählen Sie gegebenenfalls einen Wiederholungszyklus (täglich, monatlich am gleichen Tag usw.).
- (5) Erinnerung: OWA zeigt zur angegebenen Zeit ein Hinweisfenster an.
- (6) Anzeigen als: Wählen Sie einen Status für Ihren Verfügbarkeitskalender aus.
- (7) E-Mail-Erinnerung hinzufügen: eine Option, um Erinnerungen per E-Mail an Sie oder alle Teilnehmer zu versenden.

Geben Sie Ihre Einladungsnachricht in den Editor unten (8) ein und fügen Sie anschließend Teilnehmer zu Ihrem Event hinzu.

Wenn Sie versuchen, eine bereits reservierte Ressource ("belegt") hinzuzufügen, wird eine Nachricht angezeigt, die die [Verwendung des Planungsassistenten](./#zeitplan) (9) vorschlägt, der einen umfassenderen Kalender-Überblick für den gewählten Zeitraum bietet.

#### Personen

Da ein Ressourcen-Account auch ein Kontakt ist, können Sie wie bei anderen Teilnehmern (10) Räume und Geräte in diesem Bereich hinzufügen. Schreiben Sie in das Feld, um automatisch Vorschläge aus Ihren Kontakte anzuzeigen, geben Sie direkt eine vollständige E-Mail-Adresse ein oder verwenden Sie die Suchfunktion über `Verzeichnis durchsuchen`{.action} (ein Klick auf `+`{.action} öffnet Ihre Kontakte).

Sobald Sie die Planung abschließen, indem Sie auf `Senden`{.action} im oberen Menü klicken, sendet Ihnen der Ressourcen-Account eine Nachricht, um zu bestätigen, dass er für Ihr Event reserviert ist. Setzen Sie einen Haken bei "Antworten anfordern", wenn Sie eine aktive Bestätigung der Eingeladenen benötigen, um Ihren Kalender automatisch zu aktualisieren.

#### Zeitplan

Ein Kalender-Auszug aus Ihren eigenen Events (**Schedule**) erscheint rechts, sobald Sie eine Ressource oder eine Person zu dem Ereignis hinzufügen. Er liefert einen grafischen Überblick über die Verfügbarkeit der Ressourcen am gewählten Tag. Sie können Zeit und Dauer des Ereignisses direkt festlegen, indem Sie Mausklicks und das Auswahlmenü oben rechts verwenden.

Wenn nötig, klicken Sie auf den `Planungsassistenten`{.action} im Bereich **Kontakte**, um einen noch detaillierteren Überblick zu erhalten. Dieser Assistent ist nützlich für größere Ereignisse oder wenn Sie Konflikte managen müssen, da er den gesamten Planungsprozess darstellt. Sie können Verfügbarkeiten überprüfen und Ihre Planung anpassen ohne dieses Interface zu verlassen, indem Sie Standorte und Kontakte auswählen.

![Assistent](images/exchange-resources-step6.png){.thumbnail}

### Antwortnachrichten der Ressource

Nach Erstellung des Events (indem Sie auf `Senden`{.action} im oberen Menü klicken) versendet Exchange automatisch Nachrichten:

- Die Teilnehmer erhalten Einladungen (um die betroffenen Kalender oder nur ihre eigenen zu aktualisieren, je nachdem, ob Sie zuvor "Antworten anfordern" ausgewählt haben).

- Sie erhalten eine Bestätigungsmail von jedem ausgewählten Ressourcen-Account (wenn die Ressource verfügbar ist oder reserviert ist, Sie aber bei der Erstellung **"Konflikte erlauben" angehakt** haben).

![Annahmenachricht](images/exchange-resources-step7.png){.thumbnail}

- Sie erhalten eine ablehnende E-Mail von jedem ausgewählten Ressourcen-Account (wenn die Ressource nicht verfügbar ist **und** Sie bei der Erstellung **"Konflikte erlauben" nicht angehakt** haben).

![Ablehnungsnachricht](images/exchange-resources-step8.png){.thumbnail}

## Weiterführende Informationen

[Verwendung der Outlook Web App](../exchange_2016_verwendung_der_outlook_web_app/)

[Kalender in OWA freigeben](../exchange_2016_einen_kalender_via_owa_webmail_freigeben/)

[Ordner in OWA freigeben](../exchange_2016_einen_ordner_via_owa_webmail_freigeben/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
