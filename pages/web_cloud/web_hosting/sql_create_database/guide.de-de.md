---
title: "Eine Datenbank auf Ihrem Webhosting erstellen"
excerpt: "Diese Anleitung erklärt, wie Sie eine Datenbank auf Ihrem OVHcloud Webhosting"
updated: 2023-11-02
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Eine Datenbank (DB) wird verwendet, um dynamische Elemente (Verbindungsdaten, Benutzerdaten, Anzeigedaten, für das reibungslose Funktionieren Ihrer Website notwendige Daten usw.) zu speichern. Diese Datenbanken werden in den meisten modernen Content Management Systemen (CMS) wie *WordPress*, *Joomla!*, *Drupal* oder *PrestaShop* verwendet.

**Diese Anleitung erklärt, wie Sie eine Datenbank auf Ihrem OVHcloud Webhosting**

## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](hhttps://www.ovhcloud.com/de/web-hosting/) Angebot mit mindestens einer Datenbank.
- Sie verfügen über eine Datenbank, die als „Erstellung“ unter den in Ihrem Webhosting Angebot enthaltenen Datenbanken verfügbar ist.
- Sie haben für die Verwaltung Ihres Webhostings Zugriff auf das [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) mit den [erforderlichen Berechtigungen](/pages/account_and_service_management/account_information/managing_contacts).

## In der praktischen Anwendung

### Schritt 1 - Auf den Tab zur Datenbankverwaltung eines Webhostings zugreifen

Verbinden Sie sich mit Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) und gehen Sie dann in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Hosting-Pakete`{.action}, wählen Sie das Hosting-Paket aus, auf dem Sie eine Datenbank erstellen möchten, und klicken Sie dann auf den Tab `Datenbanken`{.action}.

Die Tabelle in diesem Abschnitt enthält alle Datenbanken, die mit Ihrem Webhosting erstellt wurden.

![databaseCreation](images/database-creation-step1.png){.thumbnail}

### Schritt 2 - Datenbank erstellen

Es gibt zwei Möglichkeiten, eine neue Datenbank zu erstellen:

- **Wenn Sie noch keine Datenbank erstellt haben** : Klicken Sie auf den Button `Datenbank erstellen`{.action}.

- **Wenn Sie bereits eine Datenbank erstellt haben** : Klicken Sie auf `Aktionen`{.action} und dann auf `Datenbank erstellen`{.action}.

Wählen Sie im angezeigten Fenster die folgenden Informationen aus:

![database-creation-step1](images/database-creation-1.png){.thumbnail}

|Information|Beschreibung|  
|---|---|
|**Wählen Sie den Datenbanktyp aus**|Wählen Sie die Größe der Datenbank aus. Diese Größe bezieht sich auf den Speicherplatz, den Ihre Datenbank zum Speichern von Daten hat.|
|**Hinzuzufügende Datenbank-Engine auswählen**|Wählen Sie die Engine aus, die die Datenbank verwenden soll. Die in Ihrem [OVHcloud Webhosting Angebot](https://www.ovhcloud.com/de/web-hosting/) enthaltenen Datenbanken sind ausschließlich mit der MySQL-Engine verfügbar.|
|**Wählen Sie die Version der Datenbank aus, die Sie hinzufügen möchten**|Wählen Sie die Version aus, die vom Datenbankmodul verwendet wird. Stellen Sie sicher, dass Ihre Website mit der von Ihnen gewählten Version kompatibel ist. |

Klicken Sie dann auf `Weiter`{.action}.

Ein neues Fenster wird angezeigt:

![database-creation-step2](images/database-creation-2.png){.thumbnail}

|Information|Beschreibung|
|---|---|
|**Benutzer**|Geben Sie einen Benutzernamen ein, der mit Ihrer Datenbank verknüpft wird (maximal 6 Zeichen zusätzlich zum bereits angegebenen Benutzerpräfix).|
|**Passwort**|Geben Sie ein Passwort für diesen Benutzer ein, und befolgen Sie dabei die unten aufgeführten *Kriterien*.|
|**Bestätigung**|Geben Sie das Passwort für diesen Benutzer erneut ein.|

> [!primary]
>
> Aus Sicherheitsgründen befolgen Sie die bei der Erstellung Ihres Passworts angeforderten Richtlinien.
>
> Wir empfehlen Ihnen außerdem:
>
> - für jeden Ihrer Dienste ein anderes Passwort festlegen;
> - ein Passwort erstellen, das keine persönlichen Informationen enthält (Name, Vorname, Geburtsdatum usw.);
> - Ihr Passwort regelmäßig erneuern;
> - Ihr Passwort nicht aufbewahren und nicht an andere Personen (auch nicht über Ihre E-Mail-Adresse) versenden;
> - Speichern Sie Ihr Passwort nicht in Ihrem Webbrowser, auch wenn Ihr Browser dies anbietet.
>

> [!warning]
>
> Denken Sie daran, dass alle Anwendungen, die auf eine Datenbank zugreifen, entsprechend aktualisiert werden müssen, wenn Sie das Datenbankkennwort ändern.
>

Geben Sie die erforderlichen Informationen ein und klicken Sie auf `Weiter`{.action}.

![database-creation-step3](images/database-creation-3.png){.thumbnail}

Überprüfen Sie, ob alle Informationen in der Zusammenfassung korrekt sind. Ist das der Fall, klicken Sie auf `Bestätigen`{.action}, um mit der Erstellung der Datenbank zu beginnen.

> [!primary]
>
> Wenn Sie auf `Bestätigen`{.action} klicken, kann die Erstellung der Datenbank bis zu **15 Minuten** dauern. Laden Sie die Webseite Ihres [OVHcloud Kundencenters](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) neu, wenn die Datenbank nicht automatisch in der Tabelle mit den Datenbanken angezeigt wird.
>

Wiederholen Sie diesen Vorgang so oft wie Sie möchten, um mehrere Datenbanken zu erstellen (im Rahmen der in Ihrem Angebot verfügbaren Datenbanken).

### Schritt 3 - Verwaltung Ihrer Datenbank <a name="step3"></a>

> [!warning]
>
> Dieser Leitfaden ersetzt nicht die Unterstützung durch einen Entwicklungsspezialisten. Wir empfehlen Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) und/oder den Softwareherausgeber Ihrer Lösung zu kontaktieren. OVHcloud kann Ihnen diesbezüglich keine Unterstützung bieten. Weitere Informationen finden Sie im Abschnitt [„Weiterführende Informationen“](#go-further) dieser Anleitung.
>

Sie können nun Ihre Datenbank verwenden. Hierzu benötigen Sie Ihre Anmeldeinformationen:

- den von Ihnen definierten *Benutzernamen* und das *Passwort*,
- den von Ihnen angegebenen *Datenbanknamen*,
- *Serveradresse*.

Diese Informationen sind für die Verbindung der Website mit der Datenbank unbedingt erforderlich.

Loggen Sie sich für den Abruf dieser Verbindungsinformationen in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Hosting-Pakete`{.action}, wählen Sie das Hosting-Paket aus, auf dem Sie die Verbindungsinformationen zu Ihrer Datenbank abrufen möchten, und klicken Sie dann auf den Tab `Datenbanken`{.action}.

Die vollständigen Verbindungsinformationen zu Ihrer Datenbank finden Sie in der angezeigten Tabelle. Dies mit Ausnahme des *Passworts* aus Sicherheitsgründen.

> [!warning]
>
> Wenn Sie sich nicht mehr an Ihr Datenbankpasswort erinnern können, lesen Sie unsere Anleitung „[Datenbankpasswort ändern](/pages/web_cloud/web_hosting/sql_change_password)“.
>

Je nach verwendeter Software kann es sein, dass diese Verbindung manuell oder über ein vom Konfigurationsinterface (Backend) der Website generiertes Interface konfiguriert werden muss. Da dieses Verfahren die Konfiguration Ihrer Website und nicht Ihr OVHcloud Hosting betrifft, empfehlen wir Ihnen, die verfügbaren Ressourcen online zu konsultieren oder einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren.

#### Auf das phpMyAdmin-Interface zugreifen

OVHcloud bietet ein Online-Tool zur Verwaltung der Datenbanken an: „phpMyAdmin“. Loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Hosting-Pakete`{.action}, wählen Sie das Hosting-Paket aus, auf dem Sie die Verbindungsinformationen zu Ihrer Datenbank abrufen möchten, und klicken Sie dann auf den Tab `Datenbanken`{.action}. Klicken Sie in der angezeigten Tabelle auf den Button `...`{.action} rechts neben der betreffenden Datenbank und dann im Drop-down-Menü auf `Zugang zu phpMyAdmin`{.action}.

![phpMyAdmin Go Login](images/pma-interface-login.png){.thumbnail}

Geben Sie die Zugangsdaten für Ihre Datenbank ein und klicken Sie auf `Verbindung`{.action}.

Falls nötig, lesen Sie den [Schritt 3](#step3) in dieser Anleitung, um die Verbindungsinformationen zu Ihrer Datenbank zu finden.

#### Datenbanken sichern

Für jede Webhosting-Datenbank werden automatisch jeden Tag Snapshots erstellt (bis zu maximal 32). Sie können also schnell eine frühere Version einer Datenbank über Ihr OVHcloud Kundencenter wiederherstellen.

Um die verfügbaren Snapshots sowie deren Erstellungsdatum und -zeit zu überprüfen, loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Hosting-Pakete`{.action}, wählen Sie das Hosting-Paket aus, auf dem Sie die für Ihre Datenbank verfügbaren Snapshots einsehen möchten, und klicken Sie dann auf den Tab `Datenbanken`{.action}. Klicken Sie in der angezeigten Tabelle auf das Symbol neben dem grünen Kreis. Sie können auch jedes Backup einer Datenbank von diesem Speicherort herunterladen. Weitere Informationen zu diesem Thema finden Sie in unserer Anleitung „[Backup einer Webhosting-Datenbank abrufen](/pages/web_cloud/web_hosting/sql_database_export)“.

#### Allgemeine Probleme verstehen

**Zu viele Verbindungen**

Webhosting-Datenbanken sind auf 30 Simultanverbindungen beschränkt (Systemvariable *max_connections*). Die SQL-Anforderungen müssen daher optimiert werden, um diese Art von Fehlern zu vermeiden. Sollten die Probleme dennoch bestehen, müssen alternative Massnahmen in Betracht gezogen werden. Sie können Ihre Datenbank zum Beispiel auf eine [Web Cloud Databases](https://www.ovhcloud.com/de/web-cloud/databases/) Datenbank migrieren  oder ein [Upgrade Ihres Webhosting-Angebots](https://www.ovhcloud.com/de/web-hosting/uc-best-web-hosting/) durchführen .

**Verbindungsfehler / „Nicht gefunden“**

Wird i. d R. angezeigt, wenn in der Datenbankverbindungsdatei auf der Website nicht der tatsächliche Datenbankname verwendet wird.

Es wird empfohlen, für Skripts und Konfigurationsdateien immer den tatsächlichen Datenbanknamen anstelle der IP-Adressen oder des _localhost_ zu verwenden.

**Quota für Datenbanken überschritten**

Wenn eine Webhosting-Datenbank den empfohlenen Speicherplatz überschreitet, wechselt sie automatisch zu „Schreibgeschützt“/„Schreibgeschützt“. Der Administrator erhält eine E-Mail-Benachrichtigung.

Sobald die Datenbank optimiert (gelöscht) wurde, berechnen Sie das Quota in Ihrem OVHcloud Kundencenter neu, um es erneut zu entsperren. Weitere Informationen zu diesem Thema finden Sie in unserer Anleitung „[Was tun, wenn das Speicherkontingent meiner Datenbank überschritten wird?](/pages/web_cloud/web_hosting/sql_overquota_database)“

## Weiterführende Informationen <a name="go-further"></a>

[Passwort einer Webhosting-Datenbank ändern](/pages/web_cloud/web_hosting/sql_change_password)

[Backup einer Webhosting-Datenbank abrufen](/pages/web_cloud/web_hosting/sql_database_export)

[Backup in eine Webhosting-Datenbank importieren](/pages/web_cloud/web_hosting/sql_importing_mysql_database)

[Optimieren Sie die Performance Ihrer Website](/pages/web_cloud/web_hosting/optimise_your_website_performance)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.