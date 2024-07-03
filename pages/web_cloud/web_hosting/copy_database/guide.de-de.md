---
title: "Inhalt einer Datenbank in eine andere duplizieren"
excerpt: "Erfahren Sie hier, wie Sie den Inhalt einer OVHcloud Datenbank in eine andere OVHcloud Datenbank kopieren"
updated: 2023-11-22
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Ihre Datenbank ist ein zentrales Element Ihrer dynamischen Website. Während des Lebenszyklus Ihrer Website kann es aus praktischen oder technischen Gründen erforderlich sein, den Inhalt Ihrer Datenbank in eine andere Ihrer Datenbanken zu kopieren. Dies is möglich innerhalb der Angebote [Start SQL](/links/web/hosting-options-startsql) oder [Web Cloud Databases](/links/web/databases).

**Diese Anleitung erklärt, wie Sie den Inhalt einer OVHcloud Datenbank in eine andere OVHcloud Datenbank kopieren.**

> [!primary]
>
> Mit dieser Funktion werden Datenbanken nicht verschoben, sondern kopiert. Im Gegensatz zu einem Migrationsprozess wird die ursprüngliche Datenbank nicht automatisch gelöscht. Der Inhalt der Quelldatenbank wird in die Zieldatenbank dupliziert.

## Voraussetzungen

- Sie verfügen über Datenbanken der Dienste [Start SQL](/links/web/hosting-options-startsql) oder [Web Cloud Databases](/links/web/databases). Beide Datenbanken müssen erstellt sein, bevor die Duplikationsfunktion verwendet werden kann.
- Sie haben Zugriff auf Ihr Webhosting über das [OVHcloud Kundencenter](/links/manager) mit den erforderlichen Berechtigungen zur Verwaltung aller betroffenen Datenbankdienste. Weitere Informationen finden Sie in unserer Anleitung [Verwaltung der Kontakte der Dienste](/pages/account_and_service_management/account_information/managing_contacts).

## In der praktischen Anwendung

Bevor Sie beginnen, überprüfen Sie diese Voraussetzungen:

- Beide Datenbanken (Quelle und Ziel) verwenden dasselbe **D**ata**b**ase **M**anagement **S**ystem (MySQL, PostgreSQL etc.).
- Die Version des DBMS für beide Datenbanken ist identisch. Obwohl das Duplizieren mit verschiedenen Versionen funktioniert, sollten Sie dieselben Versionen verwenden.
- Der Inhalt der Quelldatenbank darf die Größe der Zieldatenbank nicht überschreiten.

### Quelldatenbank identifizieren

Die Duplikationsfunktion ist verfügbar für folgende Dienste:

- [Start SQL](/links/web/hosting-options-startsql) (in einigen unserer [Webhostings](/links/web/hosting) enthalten oder [separat bestellt](/links/web/hosting-options-startsql))
- [Web Cloud Databases](/links/web/databases) (in unseren [Performance Hostings](/links/web/hosting-performance-offer) enthalten oder [separat bestellt](/links/web/databases)). 

Je nach Ihrer Ausgangslage ist der Zugriffspfad zur Quelldatenbank unterschiedlich.

#### Start SQL

Wählen Sie in Ihrem [OVHcloud Kundencenter](/links/manager) `Web Cloud`{.action} aus dem Menü oben aus. Öffnen Sie in der linken Spalte `Hosting-Pakete`{.action} und klicken Sie auf das Webhosting mit der Quelldatenbank.

![Liste der Hostings](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/web-hosting-selection.png){.thumbnail}

Wenn Sie auf den Tab `Datenbanken`{.action} klicken, wird eine Liste Ihrer Start SQL-Datenbanken angezeigt.

![Liste der SQL-Start-Datenbanken](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/sharedsql-dashboard-db-list.png){.thumbnail}

#### Web Cloud Databases

Wählen Sie in Ihrem [OVHcloud Kundencenter](/links/manager) `Web Cloud`{.action} aus dem Menü oben aus. Öffnen Sie in der linken Spalte `Web Cloud Databases`{.action} und wählen Sie den Web Cloud Databases Server mit der Quelldatenbank aus.

![Liste der WCD-Server](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/wcdb-server-selection.png){.thumbnail}

Wenn Sie auf den Tab `Datenbanken`{.action} klicken, wird eine Liste der Datenbanken auf Ihrem Web Cloud Databases Server angezeigt.

![WCD DB-Liste](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/wcdb-dashboard-db-list.png){.thumbnail}

### Inhalt einer Datenbank kopieren

Klicken Sie im Tab `Datenbanken`{.action} auf den Button `...`{.action} rechts in der Zeile der Datenbank, deren Inhalt Sie kopieren möchten. Wählen Sie `Datenbank kopieren`{.action}.

![CTA_copy_BDD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/copy-db-tool.png){.thumbnail}

Es wird ein Fenster angezeigt, in dem Sie Ihre Zieldatenbank identifizieren können.

![Interface Copy BDD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-step-1.png){.thumbnail}

Wenn Sie keine Zieldatenbank haben, klicken Sie auf den Link im Text, um eine neue Datenbank zu bestellen.

![WCD DB-Liste](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-link-to-buy-db.png){.thumbnail}

Sie haben die Wahl zwischen [Start SQL](/links/web/hosting-options-startsql) oder [Web Cloud Databases](/links/web/databases).

> [!primary]
>
> Ihre neu bestellte Datenbank wird nicht automatisch aktiviert. Loggen Sie sich zum Aktivieren der Datenbank in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie in den Bereich `Web Cloud`{.action}.
> 
> - Für eine Shared SQL Datenbank: Folgen Sie unserer Anleitung „[Datenbank auf Ihrem Webhosting erstellen](/pages/web_cloud/web_hosting/sql_create_database)“.
> - Für eine Datenbank auf einem Web Cloud Databases Server: Folgen Sie unserer Anleitung „[Datenbank auf einem Web Cloud Databases Server erstellen](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server)“.
>

Wenn Sie bereits über eine Zieldatenbank verfügen, wählen Sie zunächst deren Typ aus:

- `In Datenbank kopieren`{.action}: Wenn Sie den Inhalt der Quelldatenbank nach **Start SQL** kopieren möchten.
- `In eine Web Cloud Databases kopieren`{.action}: Wenn Sie den Inhalt der Quelldatenbank nach **Web Cloud Databases** kopieren möchten.

#### Auswahl 1: Start SQL

Sie haben `In Datenbank kopieren`{.action} ausgewählt. Es werden zwei Dropdownlisten angezeigt. Wählen Sie zuerst das Webhosting aus, auf dem sich Ihre Zieldatenbank befindet. Klicken Sie auf die zweite Dropdown-Liste, um die Start SQL Zieldatenbank auszuwählen.

Klicken Sie auf `Weiter`{.action}. Die folgende Bestätigungsmeldung wird angezeigt:

![BDD-Kopierbestätigungsnachricht](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-step-2.png){.thumbnail}

Wenn Sie die ausgewählte Zieldatenbank nicht überschreiben möchten, klicken Sie auf `Zurück`{.action}, um Ihre Auswahl zu ändern, oder auf `Abbrechen`{.action}, um den Vorgang abzubrechen. Klicken Sie andernfalls auf `Bestätigen`{.action}, um den Inhalt der Quelldatenbank in die Zieldatenbank zu duplizieren.

Die folgende Bestätigungsmeldung wird angezeigt:

![BDD-Erfolgsmeldung](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-copied-successfull.png){.thumbnail}

Der Kopiervorgang kann einige Minuten dauern. Um den Status zu überprüfen, öffnen Sie den Tab `Aktuelle Tasks`{.action}. In der Tabelle wird eine Zeile für das Kopieren mit dem Status „Geplant“ angezeigt. Wenn der Vorgang abgeschlossen ist, wird die Zeile gelöscht.

![Aktuelle Tasks](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-ongoing-tasks.png){.thumbnail}

#### Auswahl 2: Web Cloud Databases

Sie haben `In eine Web Cloud Databases kopieren`{.action} ausgewählt. Es werden zwei Dropdownlisten angezeigt. Wählen Sie zuerst den Server von Web Cloud Databases aus, auf dem sich Ihre Zieldatenbank befindet. Klicken Sie auf die zweite Dropdown-Liste, um die Zieldatenbank auf Ihrem Web Cloud Databases Server auszuwählen.

Klicken Sie auf `Weiter`{.action}. Die folgende Bestätigungsmeldung wird angezeigt:

![BDD-Kopierbestätigungsnachricht](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-step-2.png){.thumbnail}

Wenn Sie die ausgewählte Zieldatenbank nicht überschreiben möchten, klicken Sie auf `Zurück`{.action}, um Ihre Auswahl zu ändern, oder auf `Abbrechen`{.action}, um den Vorgang abzubrechen. Klicken Sie andernfalls auf `Bestätigen`{.action}, um den Inhalt der Quelldatenbank in die Zieldatenbank zu duplizieren.

Der Kopiervorgang kann einige Minuten dauern. Um den Status zu überprüfen, öffnen Sie den Tab `Aktuelle Tasks`{.action}. In der Tabelle wird eine Zeile für das Kopieren mit dem Status „Geplant“ angezeigt. Wenn der Vorgang abgeschlossen ist, wird die Zeile gelöscht.

![Aktuelle Tasks](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-ongoing-tasks.png){.thumbnail}

### Konfiguration Ihrer Website mit einer neuen Datenbank

Nachdem Sie die Quelldatenbank kopiert haben, müssen Sie eine letzte Aktion ausführen, wenn Sie die neue Datenbank verwenden möchten.

Prüfen Sie im Tab `Aktuelle Tasks`{.action}, dass der Kopiervorgang abgeschlossen ist (also der Fortschritt der Kopie nicht mehr angezeigt wird).

Um die neue Datenbank mit Ihrer Website zu verbinden, bearbeiten Sie die Konfigurationsdatei Ihres **C**ontent **M**anagement **S**ystem (**CMS**) und geben Sie die Zugangsdaten für die neue Datenbank ein.

> [!warning]
>
> Es wird empfohlen, vor der Bearbeitung eine Kopie der Konfigurationsdatei Ihrer Website zu erstellen. So wird sichergestellt, dass die neue Version der Datei mit der alten überschrieben werden kann, wenn die Konfiguration fehlschlägt.

Wenn Sie beispielsweise WordPress verwenden, müssen Sie die Konfigurationsdatei *wp-config.php* im Wurzelverzeichnis Ihres WordPress-Ordners im Speicherplatz (FTP) Ihres Hostings bearbeiten und die folgenden Felder aktualisieren:

- DB_NAME
- DB_USER
- DB_PASSWORD
- DB_HOST

Für weitere Informationen oder wenn Sie ein anderes CMS verwenden, lesen Sie unsere Anleitung [Passwort einer Webhosting-Datenbank ändern](/pages/web_cloud/web_hosting/sql_change_password).

> [!primary]
>
> Die Duplikaton Ihrer Datenbank ist keine Migration. Die Quelldatenbank bleibt bestehen, bis Sie sie löschen. Sie können also Ihre Website weiterhin mit der alten Datenbank betreiben.
>

### Fehlerbehebung

Beim Kopieren des Datenbankinhalts können Probleme auftreten.

#### In der Liste werden keine Datenbanken angezeigt

Dies bedeutet, dass nur eine Datenbank aktiv ist. Zum Kopieren der Quelldatenbank ist auch eine aktive Zieldatenbank erforderlich. Sie haben mehrere Möglichkeiten:

- Konfigurieren Sie eine neue Datenbank auf Ihrem Webhosting.
- Konfigurieren Sie eine neue Datenbank auf Ihrem [Web Cloud Databases](/links/web/databases) Server.
- Bestellen Sie eine neue Datenbank innerhalb der Angebote [Start SQL](/links/web/hosting-options-startsql) oder [Web Cloud Databases](/links/web/databases).

#### Es wird bereits eine Aktion ausgeführt

Diese Meldung bedeutet, dass bereits ein Task für die Datenbank ausgeführt wird. Gehen Sie auf den Tab `Aktuelle Tasks`{.action} zum Überprüfen laufender Operationen. Ist das der Fall, warten Sie, bis der Vorgang abgeschlossen ist, und starten Sie dann ggf. die Duplikation neu.

#### Die Zieldatenbank enthält nicht genügend Speicherplatz

Ihre Zieldatenbank enthält nicht genügend Speicherplatz. Sie haben zwei Möglichkeiten:

- Eine neue Datenbank des Typs [Start SQL](/links/web/hosting-options-startsql) mit mehr Speicherplatz bestellen.
- Wenn Sie bereits über einen [Web Cloud Databases](/links/web/databases) Server verfügen, wechseln Sie zu einem Angebot mit mehr Speicherplatz.

#### Quell- und Zieldatenbank sind nicht kompatibel

Diese Benachrichtigung bedeutet, dass das **D**ata**b**ase **M**anagement **S**ystem (**DBMS**) Ihrer Quelldatenbank nicht mit dem DBMS Ihrer Zieldatenbank übereinstimmt.

Dieser Fehler kann beispielsweise auftreten, wenn Sie MySQL für die Quelldatenbank und PostgreSQL für die Zieldatenbank verwenden.

## Weiterführende Informationen

[In das OVHcloud Kundencenter einloggen](/pages/account_and_service_management/account_information/ovhcloud-account-login)

[Datenbank auf Ihrem Datenbankserver sichern und exportieren](/pages/web_cloud/web_cloud_databases/save-export-on-database-server)

[Datenbank auf Ihrem Datenbankserver wiederherstellen und importieren](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server/)

[Backup einer Webhosting-Datenbank abrufen](/pages/web_cloud/web_hosting/sql_database_export)

[Backup in eine Webhosting-Datenbank importieren](/pages/web_cloud/web_hosting/sql_importing_mysql_database)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.