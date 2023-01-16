---
title: 'Eine Datenbank auf Ihrem Webhosting erstellen und verwalten'
slug: datenbank-erstellen
excerpt: 'Erfahren Sie hier, wie Sie in OVHcloud Webhostings enthaltene Datenbanken verwenden'
section: 'Datenbanken'
order: 01
---

**Letzte Aktualisierung am 03.02.2022**

## Ziel 

Datenbanken (DBs) werden verwendet, um sogenannte dynamische Elemente wie Kommentare oder Artikel zu speichern. Diese Datenbanken werden heutzutage in praktisch allen modernen Content Management Systemen (CMS) wie WordPress oder Joomla! eingesetzt.

**Diese Anleitung erklärt die ersten Schritte mit einer Datenbank in Ihrem OVHcloud Webhosting und liefert Ihnen grundlegende Informationen zu deren Verwaltung.**

## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/) Angebot.
- Ihnen steht eine in Ihrem Webhosting enthaltene Datenbank zur Verfügung.
- Sie haben Zugriff zum [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) und verfügen über die erforderlichen Berechtigungen zur Verwaltung des Webhostings. 

## In der praktischen Anwendung

### Schritt 1: Auf die Datenbankverwaltung des Webhostings zugreifen

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und wählen Sie im Bereich `Web Cloud`{.action} unter `Hosting-Pakete`{.action} das betreffende Hosting aus. Gehen Sie dann auf den Tab `Datenbanken`{.action}.

Die Tabelle in diesem Bereich enthält alle Datenbanken, die als Teil Ihres Webhosting Angebots erstellt wurden.

![Datenbank erstellen](images/database-creation-step1.png){.thumbnail}

### Schritt 2: Datenbank erstellen

Es gibt zwei Möglichkeiten, um eine neue Datenbank zu erstellen:

- **Sie haben noch keine Datenbank erstellt**\: Klicken Sie auf den Button `Datenbank erstellen`{.action}.

- **Sie haben bereits eine Datenbank erstellt**\: Klicken Sie auf den Button `Aktionen`{.action} und dann auf `Datenbank erstellen`{.action}.

Wählen Sie im daraufhin geöffneten Fenster die passenden Informationen aus und klicken Sie auf `Weiter`{.action}.

|Information|Beschreibung|  
|---|---|  
|Datenbank-Engine|Wählen Sie die Engine aus, die die Datenbank verwenden wird. In einem [OVHcloud Webhosting Angebot](https://www.ovhcloud.com/de/web-hosting/) enthaltene Datenbanken sind ausschließlich mit MySQL-Engine verfügbar.|  
|Datenbankversion|Wählen Sie die von der Datenbank-Engine verwendete Version aus. Stellen Sie sicher, dass Ihre Website mit der gewählten Version kompatibel ist. |  
|Datenbanktyp|Wählen Sie die Größe der Datenbank aus. Die Größe bezieht sich auf den Speicherplatz, der Ihrer Datenbank zum Speichern von Daten zur Verfügung steht.|   

Geben Sie anschließend die angeforderten Informationen ein und klicken Sie auf `Weiter`{.action}.

|Information|Beschreibung|   
|---|---|   
|Benutzer|Geben Sie einen spezifischen Benutzernamen ein, der mit Ihrer Datenbank verbunden wird.|   
|Passwort|Geben Sie ein Passwort für diesen Benutzer ein und bestätigen Sie dieses.|   

Überprüfen Sie, dass alle in der Zusammenfassung angezeigten Informationen korrekt sind. Ist das der Fall, klicken Sie auf `Bestätigen`{.action}, um die Erstellung der Datenbank zu starten. Sie können diesen Vorgang so oft wie nötig wiederholen, um mehrere Datenbanken zu erstellen (solange die maximale Anzahl der inklusiven Datenbanken nicht überschritten wird).

> [!primary]
>
> Aus Sicherheitsgründen halten Sie sich bitte an die bei der Eingabe des Passworts angezeigten Bedingungen. Wir empfehlen Ihnen außerdem:
>
> - nicht zweimal das gleiche Passwort zu verwenden
>
> - ein Passwort zu verwenden, das keinen Bezug zu Ihren persönlichen Angaben hat (vermeiden Sie zum Beispiel Ihren Namen, Vornamen oder Ihr Geburtsdatum)
>
> - Ihr Passwort regelmäßig zu erneuern
>
> - Ihr Passwort nicht auf Papier zu notieren oder anderen per E-Mail zuzusenden
>
> - Ihr Passwort nicht in Ihrem Webbrowser zu speichern, auch wenn dieser Sie dazu auffordert
>

> [!warning]
>Denken Sie bei der Änderung eines Datenbankpassworts daran, dass alle Anwendungen, die auf diese Datenbank zugreifen, entsprechend aktualisiert werden müssen.
>

![Datenbank erstellen](images/database-creation-step2.png){.thumbnail}

### Schritt 3: Datenbank verwalten

> [!warning]
>Diese Anleitung ersetzt nicht die Unterstützung eines professionellen Webmasters. Wir empfehlen Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen können wir Ihnen leider keine Unterstützung anbieten. Weitere Hinweise finden Sie im Teil „Weiterführende Informationen” dieser Anleitung.
>

Sie können Ihre Datenbank jetzt verwenden. Hierzu benötigen Sie Ihre Login-Daten: den von Ihnen festgelegten Benutzernamen und das zugehörige Passwort, den Namen der Datenbank sowie die Serveradresse. Diese Informationen sind erforderlich, damit sich Ihre Website mit der Datenbank verbinden kann.

Je nach der verwendeten Software muss diese Verbindung gegebenenfalls manuell oder über ein vom Website-Backend generiertes Interface konfiguriert werden. Da dieser Prozess eher die Konfiguration Ihrer Website als der von OVHcloud bereitgestellten Dienste betrifft, empfehlen wir Ihnen, die entsprechenden Online-Ressourcen zu verwenden. 

#### Auf das phpMyAdmin-Interface zugreifen

OVHcloud stellt Ihnen ein Online-Tool für das Datenbankmanagement zur Verfügung: phpMyAdmin. Den Zugangslink für diese Anwendung finden Sie im `Datenbanken`{.action}-Tab. Klicken Sie rechts neben der betreffenden Datenbank auf `...`{.action} und wählen Sie `Zugang zu phpMyAdmin`{.action} aus.

Die Login-Daten sind im neuen Fenster bereits vorausgefüllt; nur das Datenbankpasswort ist noch einzugeben. Auf diese Weise können Sie auch Ihr aktuelles Passwort überprüfen, zum Beispiel, wenn ein CMS die Fehlermeldung „permission denied“ ausgibt.

![Datenbank erstellen](images/database-creation-step3.png){.thumbnail}


#### Datenbank-Backups verwenden

Für jede Webhosting-Datenbank werden täglich automatische Snapshots erstellt (bis zu 32 Einheiten). Sie können daher problemlos eine frühere Version einer Datenbank über Ihr OVHcloud Kundencenter wiederherstellen. 

Um die verfügbaren Snapshots zu überprüfen und deren Erstellungszeitpunkt einzusehen, klicken Sie auf das Symbol rechts neben dem grünen Kreis in Ihrer Datenbanktabelle. Von dort können Sie auch jedes Backup einer Datenbank herunterladen. Weitere Informationen zu diesem Thema finden Sie in unserer Anleitung „[Backup einer Webhosting-Datenbank exportieren](../webhosting_hilfe_zum_export_von_datenbanken/)“.

#### Häufige Probleme verstehen

**Too many connections**

Webhosting-Datenbanken sind auf 30 Simultanverbindungen begrenzt (Systemvariable *max_connections*). SQL-Anfragen sollten daher entsprechend optimiert werden, um diesen Fehler zu vermeiden. Besteht das Problem weiterhin, sollten Sie alternative Maßnahmen in Erwägung ziehen, zum Beispiel den Wechsel auf eine [Web Cloud Databases](https://www.ovh.de/cloud/cloud-databases/) oder ein [Upgrade Ihres Webhostings](https://www.ovhcloud.com/de/web-hosting/uc-best-web-hosting/). 

**Verbindungsfehler und „not found“-Meldungen**

Es wird empfohlen, für Skripte und Konfigurationsdateien immer den tatsächlichen Datenbanknamen anstelle von IP-Adressen oder _localhost_ zu verwenden.

**Database overquota**

Übersteigt eine Webhosting-Datenbank den empfohlenen Speicherplatz, wird diese automatisch in den Modus "read only" / "select only" versetzt. Der Administrator erhält eine Benachrichtigung per E-Mail.

Nachdem die Datenbank optimiert (bereinigt) wurde, können Sie Ihre Quota über Ihr OVHcloud Kundencenter neu berechnen, damit die Datenbank entsperrt wird. Es wird empfohlen, die Datenbank herunterzuladen, den Inhalt lokal zu überarbeiten und die Datenbank anschließend per Import zu ersetzen. Weitere Informationen hierzu finden Sie in [dieser Anleitung](../webhosting_optimierung_der_performance_ihrer_webseite/#schritt-7-ihre-datenbank-optimieren).


## Weiterführende Informationen

[Passwort einer Webhosting-Datenbank ändern](../datenbank-passwort-aendern/)

[Backup einer Webhosting-Datenbank exportieren](../webhosting_hilfe_zum_export_von_datenbanken/)

[Backup in eine Webhosting-Datenbank importieren](../webhosting_import_einer_mysql-datenbank/)

[Optimierung der Performance Ihrer Webseite](../webhosting_optimierung_der_performance_ihrer_webseite/)

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.
