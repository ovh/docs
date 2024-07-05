---
title: "Webhosting: Was tun, wenn meine Datenbank voll ist?"
excerpt: "Erfahren Sie hier, wie Sie vorgehen, wenn Ihre Datenbank voll ist"
updated: 2023-12-13
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Eine Datenbank kann beispielsweise Daten bezüglich einer Website und deren Funktionen speichern. Diese Informationen sind so strukturiert, dass Ihre Website einfach darauf zugreifen kann, was einen optimalen und personalisierten Zugang für Benutzer/Besucher Ihrer Website ermöglicht. 

Während der Nutzung kann eine Datenbank Informationen abrufen, ändern oder löschen (Verbindungsdaten, Benutzerdaten, Anzeigedaten, Daten, die für das ordnungsgemäße Funktionieren Ihrer Website erforderlich sind etc.). 

In manchen Fällen werden in der Datenbank so viele Daten gespeichert, dass der zugewiesene Speicherplatz überlastet wird. Wenn eine Datenbank voll ist, wird dieser Zustand als **overquota** bezeichnet.

Dieses Tutorial zeigt anhand von Beispielen die möglichen Aktionen, wenn eine OVHcloud Webhosting-Datenbank fast ausgelastet ist oder sich bereits im Status **overquota** befindet.

**Dieses Tutorial erklärt die Vorgehensweise, wenn der Speicherplatz für Ihre Datenbank nicht mehr ausreicht.**

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).
- Sie verfügen über ein [OVHcloud Webhosting](/links/web/hosting) mit einer dazugehörigen OVHcloud Datenbank.
  
## In der praktischen Anwendung

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
> Wenn Sie Schwierigkeiten haben, die Schritte in diesem Tutorial durchzuführen, empfehlen wir, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren oder Ihre Fragen in der OVHcloud Community zu stellen. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

Wenn Ihre OVHcloud Webhosting-Datenbank (*shared database*) eine bestimmte Sättigung (**overquota**) erreicht, senden unsere Bots eine Benachrichtigung an die E-Mail-Adresse des [Administratorkontakts](/pages/account_and_service_management/account_information/managing_contacts) der Datenbank. 

Die erste E-Mail wird versandt, wenn Ihre Datenbank mehr als **80%** der Speicherkapazität belegt hat. Eine zweite E-Mail wird gesendet, wenn **90%** der Kapazität erreicht sind.

Wenn Ihre Datenbank im Status **overquota** ist, erhalten Sie eine dritte Warnung per E-Mail. Ihre Datenbank wird dann auf *READ ONLY* umgestellt. Sie können dann Datenbankeinträge nicht mehr hinzufügen oder ändern, aber sie können weiterhin **gelesen** und **gelöscht** werden. 

### Schritt 1: Identifizieren großer Tabellen

Eine Datenbank besteht aus einer oder mehreren **Tabellen**, die ihrerseits aus einer oder mehreren **Zeilen** bestehen, die anhand vorgegebener **Spalten** organisiert sind.

Im ersten Schritt werden die großen Tabellen in der Datenbank identifiziert.

> [!primary]
>
> Alle folgenden in diesem Tutorial beschriebenen Aktionen werden über das **phpMyAdmin**-Interface ausgeführt.
>
> [phpMyAdmin](https://www.phpmyadmin.net/){.external} ist für alle Webhosting-Datenbanken von OVHcloud verfügbar.
> Mit dieser Anwendung zur Datenbankverwaltung können Sie manuelle Datenbank-Aktionen einfach durchführen.
>

#### 1.1 - Verbindung zur Datenbank über phpMyAdmin

Das Passwort für den Zugriff auf Ihre Datenbank erhalten Sie direkt aus der Konfigurationsdatei Ihrer Seite. Führen Sie diese Aktion mithilfe von **Schritt 1** in unserer Anleitung zur [Änderung des Datenbankpassworts](/pages/web_cloud/web_hosting/sql_change_password) durch.

Loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein und wählen Sie in der Navigationsleiste oben `Web Cloud`{.action} aus. Klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie den relevanten Dienst mit der Datenbank aus. Gehen Sie anschließend zum Tab `Datenbanken`{.action}.

Unten auf dem Bildschirm wird eine Tabelle mit den Datenbanken angezeigt.

![phpMyAdmin Access](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/go-to-phpmyadmin.png){.thumbnail}

Beachten Sie für Ihre **überlastete Datenbank** den `Benutzernamen` und die `Server-Adresse` in der Tabelle Ihrer Datenbanken. 

Klicken Sie auf den Button `...`{.action} rechts neben der relevanten Datenbank und dann auf `Zugang zu phpMyAdmin`{.action}.

![phpMyAdmin Go Login](/pages/assets/screens/other/web-tools/phpmyadmin/pma-interface-login.png){.thumbnail}

Geben Sie die Zugangsdaten für Ihre Datenbank ein und klicken Sie auf `Anmeldung`{.action}.

#### 1.2 - Finden der größten Tabellen

> [!alert]
>
> Von hier an wirken sich Ihre Aktionen auf den Inhalt Ihrer Datenbank aus. Die Änderungen, die Sie an **phpMyAdmin** vornehmen, können irreversible Folgen haben, wenn sie nicht korrekt durchgeführt werden.
>
> Achten Sie auf jeden Befehl, den Sie in der Datenbank ausführen. Sollten Sie Probleme haben, empfehlen wir Ihnen, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren. OVHcloud kann Ihnen bezüglich Datenbankinhalten nicht weiterhelfen.
>

Sobald die Verbindung hergestellt wurde, wird die folgende Seite angezeigt:

![phpMyAdmin Login](/pages/assets/screens/other/web-tools/phpmyadmin/pma-main-page-2.png){.thumbnail}

Klicken Sie in der linken Spalte auf `"Ihr Datenbankname"`{.action} und dann in der rechten oberen Ecke der Tabelle auf `Size`{.action}:

![phpMyAdmin Tables](/pages/assets/screens/other/web-tools/phpmyadmin/pma-check-size.png){.thumbnail}

Die größten Tabellen werden oben in der sortierten Liste angezeigt. Identifizieren Sie diese, und fahren Sie mit **Schritt 2** fort.

### Schritt 2: Bestimmen Sie den Nutzen des Inhalts großer Tabellen

Nachdem Sie die großen Tabellen identifiziert haben, bestimmen Sie, ob der gesamte Inhalt für das Funktionieren Ihrer Website erforderlich ist.

> [!primary]
>
> Falls Sie ein Content Management System (CMS) wie WordPress, Joomla!, PrestaShop oder Drupal verwenden, stellen Sie sicher, dass Ihre großen Tabellen nicht mit einem kürzlich installierten oder aktualisierten Plugin/Theme verbunden sind.
>
> Wenden Sie sich in diesem Fall an den Entwickler des Plugins/Themes, um die geeigneten Aktionen für Ihr CMS zu bestimmen.
>
 
Für andere CMS-Typen empfehlen wir Ihnen, sich an den entsprechenden Herausgeber zu wenden, bevor Sie die folgenden Aktionen ausführen.

Hier finden Sie die Links zu den offiziellen CMS-Websites für die **1-Klick-Module** von OVHcloud:

- [WordPress](https://wordpress.org/){.external}
- [Joomla!](https://www.joomla.org){.external}
- [PrestaShop](https://www.prestashop.com/){.external}
- [Drupal](https://drupal.org){.external}

> [!primary]
>
> Wenn es sich bei Ihrer Website um eine von einem spezialisierten Anbieter entwickelte, **personalisierte** Software handelt, empfehlen wir Ihnen, sich mit dem jeweiligen Anbieter in Verbindung zu setzen.
>

### Schritt 3: Korrekturmaßnahmen ergreifen

Sobald Sie festgestellt haben, ob der Inhalt der Tabellen für das Funktionieren Ihrer Website erforderlich ist, stehen Ihnen mehrere Optionen zur Verfügung:

#### Fall 1 - Alle Inhalte der großen Tabelle sind für das Funktionieren Ihrer Website erforderlich

Führen Sie ein Upgrade Ihres Datenbankdienstes auf ein Angebot durch, das mehr Speicherplatz für Datenbanken enthält.

> [!primary]
>
> Um die Größe Ihrer Datenbank zu erhöhen, müssen Sie eine neue, größere Datenbank erstellen und den Inhalt der alten Datenbank in die neue Datenbank kopieren. Es ist nicht möglich, die Größe einer Datenbank, die mit einem Webhosting verbunden ist, direkt zu vergrößern.
>

Konsultieren Sie unsere Angebotsseite [Web Cloud Databases](/links/web/databases), um sich über die Optionen zu informieren. 

Wir empfehlen diese Lösung für große Datenbanken.

Es ist möglich, den Inhalt Ihrer OVHcloud Datenbank direkt in eine andere Ihrer OVHcloud Datenbanken zu kopieren, indem Sie eine Funktion in Ihrem [OVHcloud Kundencenter](/links/manager) nutzen. Weitere Informationen finden Sie in unserer Anleitung „[Inhalt einer Datenbank in eine andere duplizieren](/pages/web_cloud/web_hosting/copy_database)“.

Zur Migration auf eine Datenbank außerhalb der Angebote [Start SQL](/links/web/hosting-options-startsql) und [Web Cloud Databases](/links/web/databases) können Sie den Inhalt Ihrer alten Datenbank mithilfe unserer Anleitungen manuell in eine neue Datenbank verschieben:

- [Exportieren Sie Ihre bestehende Datenbank](/pages/web_cloud/web_hosting/sql_database_export)
- [Erste Schritte mit Web Cloud Databasess](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)
- [Importieren Sie Ihre alte Datenbank nach Web Cloud Databasess](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server)

#### Fall 2 - Der Inhalt der großen Tabelle ist nicht oder nur teilweise für das Funktionieren Ihrer Website erforderlich

Bevor Sie die folgenden Schritte ausführen, überprüfen Sie, ob die Daten in der großen Tabelle Elementen entsprechen, die aus Ihrer CMS-Verwaltungsoberfläche gelöscht werden können. 

**Beispiele**:

- Alte Kommentare / Posts
- Elemente im `Trash` Ihres CMS
- Daten alter Themes und Plugins

> [!alert]
>
> Der folgende Teil dieses Tutorials zeigt, wie Sie in Ihrer Datenbank gespeicherte Daten löschen. Vergewissern Sie sich, welche Aktionen Sie durchführen müssen und wenden Sie sich im Zweifelsfall an einen [Experten](/links/partner).
>

Für OVHcloud Datenbanken sind verschiedene SQL-Befehle verfügbar, um Inhalte zu beeinflussen.

Bei **overquota** oder einer großen Tabelle sind **drei Befehle** verfügbar.

Sie können diese Anfragen über das **phpMyAdmin** Interface, über den Tab `SQL`{.action} durchführen:

![SQL PHPMyAdmin Anfrage](/pages/assets/screens/other/web-tools/phpmyadmin/pma-sql-menu.png){.thumbnail}

- Der Befehl **DELETE**:

Sie können damit **eine oder mehrere Zeilen** aus einer bestimmten Tabelle entfernen. Dieser Befehl ist nützlich, wenn ein Teil des Tabelleninhalts für das ordnungsgemäße Funktionieren Ihrer Website erforderlich ist.

**Beispiel**:

```sql
DELETE FROM `table_1` WHERE `id` = 1
```

> In diesem Beispiel löscht der Befehl die Zeile(n) in **table_1**, deren Wert in der Spalte **id** **1** ist.

- Der Befehl **TRUNCATE**:

Mit diesem Befehl werden **alle Zeilen** aus einer bestimmten Tabelle gelöscht.

**Beispiel**:

```sql
TRUNCATE TABLE `table_1`
```

> In diesem Beispiel löscht der Befehl alle Zeilen aus **table_1**.

- Der Befehl **DROP**:

Damit können Sie **eine Tabelle und alle darin enthaltenen Zeilen** vollständig entfernen. Dieser Befehl sollte nicht verwendet werden, wenn die Tabelle weiterhin benötigt wird.

**Beispiel**:

```sql
DROP TABLE `table_1`
```

> In diesem Beispiel löscht der Befehl die Tabelle **table_1** und alle darin enthaltenen Zeilen.

## Weiterführende Informationen <a name="go-further"></a>

[Inhalt einer Datenbank in eine andere duplizieren](/pages/web_cloud/web_hosting/copy_database)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.