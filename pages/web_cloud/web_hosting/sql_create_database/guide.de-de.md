---
title: "Eine Datenbank auf Ihrem Webhosting erstellen"
excerpt: "Erfahren Sie hier, wie Sie in OVHcloud Webhostings enthaltene Datenbanken verwenden"
updated: 2024-05-17
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Datenbanken (DBs) werden verwendet, um dynamische Elemente (Verbindungsdaten, Benutzerdaten, Anzeigedaten, für Ihre Website-Funktionen notwendige Daten usw.) zu speichern. Diese Datenbanken werden in den meisten modernen Content Management Systemen (CMS) wie *WordPress*, *Joomla!*, *Drupal* oder *PrestaShop* verwendet.

**Diese Anleitung erklärt, wie Sie eine Datenbank auf Ihrem OVHcloud Webhosting erstellen und verwalten.**

## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](/links/web/hosting) mit mindestens einer inkludierten Datenbank.
- Sie haben unter den in Ihrem Webhosting enthaltenen Datenbanken eine zur Erstellung verfügbare Datenbank. Bei Bedarf können Sie [Start SQL](/links/web/hosting-options-startsql) Datenbanken zu Ihrem Webhosting hinzufügen.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager) mit den [erforderlichen Berechtigungen](/pages/account_and_service_management/account_information/managing_contacts) zur Verwaltung des Webhostings.

## In der praktischen Anwendung

### Schritt 1: Auf die Datenbankverwaltung des Webhostings zugreifen

Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und wählen Sie im Bereich `Web Cloud`{.action} links unter `Hosting-Pakete`{.action} das betreffende Hosting aus. Gehen Sie dann auf den Tab `Datenbanken`{.action}.

Die Tabelle auf dieser Seite enthält alle Datenbanken, die mit Ihrem Webhosting erstellt wurden.

![databasecreation](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/tab.png){.thumbnail}

In der Tabelle können Datenbanken verschiedene Typen haben:

- **Inklusive**: Gibt an, dass die Datenbank in Ihrem Webhosting enthalten ist. Sie verursacht keine zusätzlichen Kosten.</br></br>
- **Optional**: Gibt an, dass die Datenbank als Ergänzung zu den in Ihrem Webhosting enthaltenen Datenbanken abonniert wurde. Sie zahlen einen Aufpreis, um über diese zusätzliche Datenbank auf Ihrem Webhosting zu verfügen.</br></br>
- **Inklusive - aus dem Verkauf genommen**: Gibt an, dass die Inklusiv-Datenbank in Kürze aus dem Verkauf genommen wird. </br>Es wird empfohlen, **bevor** die Datenbank veraltet ist, ihren Inhalt in eine neue, aktuellere Datenbank zu verschieben (deren Verkaufsende noch nicht geplant ist).</br></br>
- **Optional – aus dem Verkauf genommen**: Gibt an, dass die zusätzlich zu Ihrem Webhosting abonnierte Datenbank in Kürze aus dem Verkauf genommen wird. </br>Es wird empfohlen, **bevor** die Datenbank veraltet ist, den Inhalt der Datenbank in eine neue, aktuellere Datenbank zu verschieben (deren Verkaufsende noch nicht geplant ist).

> [!success]
>
> Informationen zum schnellen Duplizieren des Inhalts einer Datenbank im Zustand **Inklusive - aus dem Verkauf genommen** oder **Optional - aus dem Verkauf genommen** in eine neue Datenbank, deren Obsoleszenz noch nicht geplant ist, finden Sie in unserer Anleitung "[Den Inhalt einer OVHcloud-Datenbank in einer anderen Datenbank duplizieren](/pages/web_cloud/web_hosting/copy_database)".
>

### Schritt 2: Datenbank erstellen

Es gibt zwei Möglichkeiten, eine neue Datenbank zu erstellen:

- **Wenn Sie noch keine Datenbank erstellt haben**: Klicken Sie auf den Button `Datenbank erstellen`{.action}.

- **Wenn Sie bereits eine Datenbank erstellt haben**: Klicken Sie auf `Aktionen`{.action} und dann auf `Datenbank erstellen`{.action}.

Wählen Sie im angezeigten Fenster unter den folgenden Optionen aus:

![database-creation-step1](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/create-a-database-step-1.png){.thumbnail}

|Information|Beschreibung|  
|---|---|
|**Wählen Sie den Typ der Datenbank aus**|Wählen Sie die Größe der Datenbank aus. Diese Größe bezieht sich auf den Speicherplatz, den Ihre Datenbank zum Speichern von Daten hat.|
|**Wählen Sie die Engine der Datenbank aus**|Wählen Sie die Engine aus, die die Datenbank verwenden soll. Die in einem [OVHcloud Webhosting](/links/web/hosting) inkludierten Datenbanken sind ausschließlich mit der MySQL-Engine verfügbar.|
|**Wählen Sie die Version der Datenbank aus**|Wählen Sie die Version aus, die vom Datenbankmodul verwendet wird. Stellen Sie sicher, dass Ihre Website mit der von Ihnen gewählten Version kompatibel ist.|

Klicken Sie auf `Weiter`{.action}.

Ein neues Fenster wird angezeigt:

![database-creation-step2](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/create-a-database-step-2.png){.thumbnail}

|Information|Beschreibung|
|---|---|
|**Benutzer**|Geben Sie einen Benutzernamen ein, der für die Datenbank angelegt wird (maximal 6 Zeichen zusätzlich zum bereits angegebenen Benutzerpräfix).|
|**Passwort**|Geben Sie ein Passwort für diesen Benutzer ein, und beachten Sie dabei die unten aufgeführten Voraussetzungen.|
|**Bestätigung**|Geben Sie das Passwort für diesen Benutzer erneut ein.|

> [!primary]
>
> Aus Sicherheitsgründen beachten Sie bei der Erstellung Ihres Passworts die erforderlichen Richtlinien.
>
> Wir empfehlen außerdem diese Maßnahmen:
>
> - Verwendung von unterschiedlichen Passwörtern für jeden Ihrer Dienste.
> - Verwenden Sie keine Passwörter mit persönlichen Informationen (Name, Vorname, Geburtsdatum etc.).
> - Erneuern Passwörter regelmäßig.
> - Bewahren Sie Passwörter nicht schriftlich auf und geben Sie sie nicht an andere Personen weiter (auch nicht per E-Mail).
> - Speichern Sie Passwörter nicht im Webbrowser, auch wenn dies automatisch angeboten wird.
>

> [!warning]
>
> Denken Sie daran, dass alle Anwendungen, die auf eine Datenbank zugreifen, entsprechend aktualisiert werden müssen, wenn Sie das Datenbankpasswort ändern.
>

Geben Sie die erforderlichen Informationen ein und klicken Sie auf `Weiter`{.action}.

![database-creation-step3](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/create-a-database-step-3.png){.thumbnail}

Überprüfen Sie, ob alle Informationen in der Zusammenfassung korrekt sind. Ist das der Fall, klicken Sie auf `Bestätigen`{.action}, um mit der Erstellung der Datenbank zu beginnen.

> [!primary]
>
> Wenn Sie auf `Bestätigen`{.action} klicken, wird die Erstellung der Datenbank bis zu **15 Minuten** dauern. Laden Sie die Seite des [OVHcloud Kundencenters](/links/manager) neu, wenn die Datenbank nicht automatisch in der Tabelle mit den Datenbanken erscheint.
>

Wiederholen Sie diesen Vorgang so oft wie nötig, um mehrere Datenbanken zu erstellen (im Rahmen der in Ihrem Webhosting verfügbaren Datenbanken).

> [!warning]
>
> Nachdem die Erstellung der Datenbank bestätigt wurde, können der Benutzername und der Datenbankname nicht mehr geändert werden.
>

### Schritt 3: Verwaltung Ihrer Datenbank <a name="step3"></a>

> [!warning]
>
> Diese Anleitung ersetzt nicht die Unterstützung durch einen Spezialisten, wie etwa eines Webentwicklers. Wir empfehlen, einen [spezialisierten Dienstleister](/links/partner) oder den Herausgeber der verwendeten Software zu kontaktieren, falls Sie auf Schwierigkeiten stoßen. Leider können wir Ihnen keine weitergehende technische Unterstützung hierzu anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

Sie können nun Ihre Datenbank verwenden. Hierzu benötigen Sie Ihre Anmeldeinformationen:

- *Benutzername* und *Passwort*
- *Datenbankname*
- *Serveradresse*

> [!primary]
>
Wenn Sie aufgefordert werden, den Datenbank-Port einzugeben, ist die zu verwendende **Port**-Nummer **3306**, unabhängig davon, welche [Start SQL](/links/web/hosting-options-startsql) Datenbank Ihr OVHcloud Webhosting verwendet.
>

Diese Informationen sind für die Verbindung von Websites mit der Datenbank unbedingt erforderlich.

Um diese Verbindungsinformationen einzusehen, loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Hosting-Pakete`{.action}, wählen Sie das betreffende Hosting aus, und klicken Sie auf den Tab `Datenbanken`{.action}.

Die Verbindungsinformationen zu Ihrer Datenbank finden Sie in der angezeigten Tabelle, aus Sicherheitsgründen unter Ausnahme von Passwörtern.

> [!warning]
>
> Wenn Sie das Datenbankpasswort nicht haben, lesen Sie unsere Anleitung „[Datenbankpasswort ändern](/pages/web_cloud/web_hosting/sql_change_password)“.
>

Je nach verwendeter Software muss diese Verbindung gegebenenfalls manuell oder über ein vom Website-Backend generiertes Interface konfiguriert werden. Da dieser Prozess eher die Konfiguration Ihrer Website als der von OVHcloud bereitgestellten Dienste betrifft, empfehlen wir Ihnen, die entsprechenden Online-Ressourcen zu konsultieren oder einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren.

> [!primary]
>
> Die im Webhosting inkludierten Datenbanken sind nur erreichbar über direkt auf Ihrem Webhosting installierte Anwendungen oder Skripte, oder über das *phpMyAdmin*-Interface.
>

#### Auf das phpMyAdmin-Interface zugreifen

OVHcloud stellt Ihnen ein Online-Tool für das Datenbankmanagement zur Verfügung: phpMyAdmin. Loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Hosting-Pakete`{.action}, wählen Sie das betreffende Hosting aus, und klicken Sie dann auf den Tab `Datenbanken`{.action}.

Klicken Sie in der angezeigten Tabelle auf `...`{.action} rechts neben der betreffenden Datenbank und dann im Drop-down-Menü auf `Zugang zu phpMyAdmin`{.action}.

![phpMyAdmin Go Login](/pages/assets/screens/other/web-tools/phpmyadmin/pma-interface-login.png){.thumbnail}

Geben Sie die Zugangsdaten für Ihre Datenbank ein und klicken Sie auf `Log in`{.action}.

Falls nötig, folgen Sie [Schritt 3](#step3) dieser Anleitung, um die Zugangsdaten zu Ihrer Datenbank zu finden.

#### Datenbanken sichern

Für jede Webhosting-Datenbank werden täglich Snapshots erstellt (maximal 32 insgesamt). Sie können damit schnell eine frühere Version einer Datenbank über Ihr OVHcloud Kundencenter wiederherstellen.

Um die verfügbaren Snapshots sowie deren Erstellungsdatum und -zeit zu einzusehen, loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Hosting-Pakete`{.action}, wählen Sie das betreffende Hosting aus, und klicken Sie dann auf den Tab `Datenbanken`{.action}.

Klicken Sie in der hier angezeigten Tabelle auf das Symbol neben dem grünen Kreis. Von dort können Sie auch jedes Backup einer Datenbank herunterladen. Weitere Informationen zu diesem Thema finden Sie in unserer Anleitung „[Backup einer Webhosting-Datenbank exportieren](/pages/web_cloud/web_hosting/sql_database_export)“.

#### Allgemeine Fehlermeldungen verstehen

**Too many connections**

Webhosting-Datenbanken sind auf 30 Simultanverbindungen begrenzt (Systemvariable *max_connections*). SQL-Anfragen sollten daher entsprechend optimiert werden, um diesen Fehler zu vermeiden. Besteht das Problem weiterhin, sollten Sie alternative Maßnahmen in Erwägung ziehen, zum Beispiel den Wechsel auf eine [Web Cloud Databases](/links/web/databases) Datenbank oder ein [Upgrade Ihres Webhostings](/links/web/hosting-best-web).

**Connection error / "not found"**

Diese Fehlermeldungen werden angezeigt, wenn in der Datenbankverbindungsdatei der Website nicht der explizite Datenbankname verwendet wird.

Es wird empfohlen, für Skripte und Konfigurationsdateien immer den Datenbanknamen zu verwenden, anstelle von IP-Adressen oder *localhost*.

**Quota exceeded for databases**

Übersteigt eine Webhosting-Datenbank den empfohlenen Speicherplatz, wird diese automatisch in den Modus "read only" / "select only" versetzt. Der Administrator erhält eine Benachrichtigung per E-Mail.

Nachdem die Datenbank optimiert wurde (*purge*), können Sie die Quota über Ihr OVHcloud Kundencenter neu berechnen, damit die Datenbank entsperrt werden kann. Weitere Informationen zu diesem Thema finden Sie in unserer Anleitung „[Was tun, wenn das Speicherkontingent meiner Datenbank überschritten wird?](/pages/web_cloud/web_hosting/sql_overquota_database)“

## Weiterführende Informationen <a name="go-further"></a>

[Passwort einer Webhosting-Datenbank ändern](/pages/web_cloud/web_hosting/sql_change_password)

[Backup einer Webhosting-Datenbank exportieren](/pages/web_cloud/web_hosting/sql_database_export)

[Backup in eine Webhosting-Datenbank importieren](/pages/web_cloud/web_hosting/sql_importing_mysql_database)

[Optimierung der Performance Ihrer Webseite](/pages/web_cloud/web_hosting/optimise_your_website_performance)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
