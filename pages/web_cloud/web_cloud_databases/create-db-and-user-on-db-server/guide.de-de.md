---
title: 'Datenbanken und Benutzer auf Ihrem Datenbankserver erstellen'
excerpt: 'Erfahren Sie hier, wie Sie eine Datenbank auf Ihrem Datenbankserver erstellen'
updated: 2026-03-24
---

## Ziel

In einer Datenbank (DB) können sogenannte dynamische Elemente, wie zum Beispiel Kommentare oder Artikel, gespeichert werden. Diese Datenbanken werden heute von praktisch allen Content Management Systemen (CMS) wie WordPress oder Joomla! verwendet.

**Diese Anleitung erklärt, wie Sie eine Datenbank auf Ihrem Datenbankserver erstellen und Benutzern Zugriff gewähren.**

## Voraussetzungen

- Sie verfügen über eine [Web Cloud Databases Instanz](/links/web/databases) (auch in einem [Performance Web Hosting](/links/web/hosting) Angebot enthalten).

<!-- CP-NAV-START:web-cloud-databases -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Navigationspfad:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Wählen Sie Ihren Datenbankdienst aus

---
<!-- CP-NAV-END:web-cloud-databases -->

## In der praktischen Anwendung

### Datenbank erstellen

Klicken Sie auf die unten stehenden Tabs, um die **4** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Web Cloud Databases](/links/control-panel/web-cloud-databases), und wählen Sie die betreffende Lösung aus.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `Datenbanken`{.action}.
>>
> **Schritt 3**
>>
>> Klicken Sie auf `Datenbank hinzufügen`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > Die Erstellung von PostgreSQL-Schemas ist derzeit für die Web Cloud Databases Server nicht verfügbar.
>>
> **Schritt 4**
>>
>> Füllen Sie die Felder gemäß den angegebenen Kriterien aus. Sie können direkt einen Benutzer erstellen, indem Sie das Feld **Benutzer erstellen** anhaken:
>>
>> - **Name der Datenbank** (Pflichtfeld): Dies ist der Name Ihrer zukünftigen Datenbank.
>> - **Benutzername** (nur wenn das Feld `Benutzer erstellen` angehakt wurde): Der Benutzer, der sich mit Ihrer Datenbank verbinden und Anfragen ausführen kann.
>> - **Rechte** (nur wenn das Feld `Benutzer erstellen` angehakt wurde): Die Berechtigungen, die dem Benutzer auf der Datenbank zugewiesen werden. Für eine standardmäßige Verwendung wählen Sie `Administrator`{.action} aus. Berechtigungen können nachträglich geändert werden.
>> - **Passwort**/**Passwort bestätigen** (nur wenn das Feld `Benutzer erstellen` angehakt wurde): Wählen Sie ein Passwort aus und bestätigen Sie es.
>>
>> Klicken Sie auf `Bestätigen`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database-confirmation.png){.thumbnail}

### Benutzer erstellen

Um einen Datenbankserver von OVHcloud zu verwenden, erstellen Sie Benutzer mit spezifischen Rechten für die Verbindung mit einer Datenbank.

Klicken Sie auf die unten stehenden Tabs, um die **4** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Web Cloud Databases](/links/control-panel/web-cloud-databases), und wählen Sie die betreffende Lösung aus.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `Benutzer und Rechte`{.action}.
>>
> **Schritt 3**
>>
>> Klicken Sie auf `Einen Benutzer hinzufügen`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/add-user.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Geben Sie einen "Benutzernamen" und ein "Passwort" ein und klicken Sie anschließend auf `Bestätigen`{.action}.

### Verwaltung der Benutzerrechte

Um einem Benutzer die Durchführung von Aktionen auf einer Datenbank zu ermöglichen, müssen ihm Rechte zugewiesen werden.

Klicken Sie auf die unten stehenden Tabs, um die **4** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Web Cloud Databases](/links/control-panel/web-cloud-databases), und wählen Sie die betreffende Lösung aus.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `Benutzer und Rechte`{.action}.
>>
> **Schritt 3**
>>
>> Klicken Sie auf die Schaltfläche `...`{.action} rechts neben dem jeweiligen Benutzer, dann auf `Rechte verwalten`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/manage-rights.png){.thumbnail}
>>
> **Schritt 4**
>>
>> In der linken Spalte **Datenbank** finden Sie die Liste der Datenbanken Ihres Datenbankservers.
>>
>> 3 Berechtigungsarten stehen zur Verfügung:
>>
>> - `Administrator`: Freigabe von Anfragen des Typs **Select / Insert / Update / Delete / Create / Alter / Drop**.
>> - `Lesen/Schreiben`: Freigabe von Anfragen des Typs **Select / Insert / Update / Delete**.
>> - `Lesen`: Freigabe von Anfragen des Typs **Select**.
>> - `Keine`: Keine Rechte auf der Datenbank.
>>
>> > [!primary]
>> >
>> > Die Segmentierung der oben genannten Rechte ist OVHcloud vorbehalten. So kann ein Benutzer mit der `Administrator`-Berechtigung **DDL** (Data Definition Language) und **DML** (Data Manipulation Language) verwenden, während ein Benutzer mit der Berechtigung `Lesen/Schreiben` nur **DML** (Data Manipulation Language) nutzen kann.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/changing-user-rights.png){.thumbnail}

### Datenbank löschen

> [!warning]
>
> Beim Löschen einer Datenbank auf einem Datenbankserver findet keine Überprüfung
> des Datenbankinhalts statt. Die Datenbank wird auch dann gelöscht, wenn
> noch Daten darin gespeichert sind. Es wird daher empfohlen, vor jeder
> Löschung ein Backup zu erstellen und herunterzuladen.
>

Klicken Sie auf die unten stehenden Tabs, um die **3** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Web Cloud Databases](/links/control-panel/web-cloud-databases), und wählen Sie die betreffende Lösung aus.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `Datenbanken`{.action}.
>>
> **Schritt 3**
>>
>> Klicken Sie auf die Schaltfläche `...`{.action} rechts neben der betreffenden Datenbank, dann auf `Die Datenbank löschen`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/delete-the-database.png){.thumbnail}

## Weiterführende Informationen

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
