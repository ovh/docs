---
title: 'Konfigurieren Ihres Datenbankservers'
excerpt: 'Erfahren Sie, wie Sie Ihren Datenbankserver konfigurieren und optimieren'
updated: 2026-03-24
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Ziel

Web Cloud Databases Datenbankserver ermöglichen es Ihnen, die globalen Einstellungen Ihres Servers zu ändern. Sie können auch die Aktivität Ihres Servers einsehen.

**Diese Anleitung erklärt, wie Sie Ihren Datenbankserver konfigurieren und optimieren.**

## Voraussetzungen

- Sie verfügen über eine [Web Cloud Databases Instanz](/links/web/databases) (auch in einem [Performance Webhosting](/links/web/hosting) Angebot enthalten).

<!-- CP-NAV-START:web-cloud-databases -->
---

### Zugang zum OVHcloud Kundencenter

- **Direkter Link:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Navigationspfad:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Wählen Sie Ihren Datenbankdienst aus

---
<!-- CP-NAV-END:web-cloud-databases -->

## In der praktischen Anwendung

### Allgemeine Informationen Ihres Datenbankservers anzeigen

Klicken Sie auf die unten stehenden Tabs, um die **2** Schritte nacheinander anzuzeigen.


> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Web Cloud Databases](/links/control-panel/web-cloud-databases), und wählen Sie die betreffende Lösung aus.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Vergewissern Sie sich, dass Sie sich im Tab `Allgemeine Informationen`{.action} befinden.
>>
>> Hier können Sie wichtige Informationen zu Ihrer SQL-Instanz einsehen. Nehmen Sie sich einen Moment Zeit, um zu überprüfen, dass die angezeigten Daten korrekt sind und mit den nachfolgenden Angaben übereinstimmen.
>>
>> |Information|Details|
>> |---|---|
>> |Status der Dienstleistung|Zeigt an, ob die Instanz gestartet wurde, gerade neu gestartet wird oder gesperrt ist. Ihre Instanz muss gestartet sein, damit Sie Aktionen durchführen können.|
>> |Typ|Zeigt das vom Server verwendete Datenbanksystem an. Wenn Sie nicht wissen, ob der verwendete Typ korrekt ist, beachten Sie, dass MySQL das am weitesten verbreitete System ist. Es gibt jedoch auch andere Datenbanksysteme (PostgreSQL, MariaDB). Wurde Ihre Website zum Beispiel mit WordPress erstellt, ist ein MySQL-System die richtige Wahl.|
>> |Version|Zeigt die Version des vom Server verwendeten Datenbanksystems an. Achten Sie auf die Kompatibilität Ihrer Website mit der gewählten Version.|
>> |CPU-Auslastung|Zeigt die CPU-Zeit an, die in den letzten 24 Stunden in Sättigung verbracht wurde.|
>> |RAM|Zeigt den für Ihre Instanz verfügbaren Arbeitsspeicher sowie eventuelle Überschreitungen der RAM-Kapazität an. Ihr Datenbankserver verfügt über dedizierte und garantierte Ressourcen: den RAM-Speicher. Falls nötig, können Sie diesen skalieren und werden gewarnt, wenn Sie sämtliche RAM-Ressourcen Ihrer Instanz verbrauchen.|
>> |Infrastruktur|Zeigt die von Ihrer Instanz verwendete Infrastruktur an. Hierbei handelt es sich um eine interne Information der OVHcloud Infrastruktur.|
>> |Datacenter|Zeigt das Rechenzentrum an, in dem Ihre Instanz angelegt wurde. Vergewissern Sie sich, dass das Rechenzentrum Ihrer Instanz mit dem des OVHcloud Webhostings übereinstimmt, auf dem Ihre Website aktuell gehostet wird oder in Zukunft gehostet werden soll.|
>> |Host|Zeigt den OVHcloud Server an, auf dem Ihre Instanz angelegt wurde. Hierbei handelt es sich um eine interne Information der OVHcloud Infrastruktur, die im Rahmen unserer Kommunikation zu [OVHcloud Störungen](https://web-cloud.status-ovhcloud.com/) verwendet werden kann.|
>>
>> ![Allgemeine Informationen](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/general-information.png){.thumbnail}


### Zugriff verwalten

Ihre Web Cloud Databases ist über Ihre OVHcloud Webhostings und/oder über das öffentliche Netzwerk erreichbar.

**Klicken Sie auf jeden Titel, um den Inhalt anzuzeigen.**

/// details | Eine IP-Adresse autorisieren

Um auf Ihre Web Cloud Databases Instanz zuzugreifen, müssen die IP-Adressen oder IP-Bereiche festgelegt werden, die sich mit Ihren Datenbanken verbinden dürfen.

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
>> Klicken Sie auf den Tab `Autorisierte IPs`{.action} und dann auf den Button `IP-Adresse / Maske hinzufügen`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Geben Sie im angezeigten Fenster die IP-Adresse oder Maske, die Sie autorisieren möchten, unter `IP / Maske`{.action} ein und fügen Sie bei Bedarf eine Beschreibung hinzu. Legen Sie dann fest, ob Sie nur Zugriff auf die Datenbanken oder auch auf SFTP gewähren möchten. Klicken Sie abschließend auf `Bestätigen`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask-confirmation.png){.thumbnail}


///

/// details | Verbindungen von OVHcloud Webhostings autorisieren

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
>> Klicken Sie auf den Tab `Autorisierte IPs`{.action}.
>>
> **Schritt 3**
>>
>> Setzen Sie einen Haken bei `Den OVHcloud Webhostings den Zugriff auf die Datenbank erlauben`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/tab-empty.png){.thumbnail}


///

### Ihren Web Cloud Databases Dienst ändern <a name="modify-ram-web-cloud-db"></a>

> [!warning]
>
> Wenn Ihr Web Cloud Databases Dienst an ein **Performance** Webhosting gebunden ist, müssen Sie ihn zuerst von Ihrem **Performance** Hosting trennen, um den Dienst hochzustufen.
>
> Um einen Web Cloud Databases Dienst vom Webhosting **Performance** abzutrennen, lesen Sie unsere Anleitung "[Web Cloud Databases von einem Webhosting abtrennen](/pages/web_cloud/web_cloud_databases/detach-from-web-hosting)".
>
> **Diese Aktion ist unwiderruflich. Der Web Cloud Databases Dienst wird anschließend unabhängig von Ihrem Performance Webhosting abgerechnet.**
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
>> Im standardmäßig angezeigten Tab **Allgemeine Informationen** klicken Sie auf `...`{.action} rechts neben "RAM" und dann auf `RAM-Menge ändern`{.action}, um zur Bestellung für diese Änderung geleitet zu werden.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/change-the-amount-of-ram.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Wählen Sie die gewünschte RAM-Größe aus und klicken Sie auf `Weiter`{.action}. Danach können Sie die gewünschte Laufzeit wählen.
>>
>> > [!primary]
>> >
>> > Eine anteilige Berechnung erfolgt basierend auf der Restlaufzeit des Dienstes. Diese Berechnung basiert auf dem Ablaufdatum der Web Cloud Databases Instanz, nicht auf dem Datum des Bestellscheins.
>>
>> Nach Bestätigung der Verträge werden Sie auf den Bestellschein umgeleitet, um die Änderung zu bezahlen. Diese wird dann innerhalb weniger Stunden wirksam.
>>
>> > [!warning]
>> >
>> > Wenn Sie derzeit über eine kostenfreie, in einem Performance Hosting inkludierte Web Cloud Databases Instanz verfügen, wird diese mit dem Wechsel des Dienstes kostenpflichtig.


### Konfiguration des Datenbankservers ändern

**Klicken Sie auf jeden Titel, um den Inhalt anzuzeigen.**

/// details | MySQL und MariaDB Instanz

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
>> Klicken Sie auf den Tab `Konfiguration`{.action}.
>>
> **Schritt 3**
>>
>> Im Bereich **Allgemeine Konfiguration von MySQL** finden Sie die derzeit für Ihre Datenbank festgelegte Konfiguration. Sie können diese direkt bearbeiten und dann auf `Anwenden`{.action} klicken.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/configuration/general-configuration-of-mysql.png){.thumbnail}
>>
>> - **MaxAllowedPacket**: Maximale Paketgröße.
>> - **Max_user_connections**: Anzahl der erlaubten gleichzeitigen Verbindungen pro Benutzer.
>> - **AutoCommit**: Legt fest, ob die Anfragen automatisch bestätigt werden oder nicht.
>> - **Interactive_timeout**: Zeit (in Sekunden), die der Server auf eine Aktivität auf einer interaktiven Verbindung wartet, bevor er diese schließt.
>> - **InnodbBufferPoolSize**: Größe des ausgewählten Pufferspeichers.
>> - **MaxConnections:** Anzahl der erlaubten gleichzeitigen Verbindungen auf dem Datenbankserver.
>> - **Wait_timeout**: Zeit (in Sekunden), die der Server auf eine Aktivität auf einer nicht interaktiven Verbindung wartet, bevor er diese schließt.
>> - **Event_scheduler**: Löst die Ausführung von programmierten Anfragen direkt auf dem MySQL-Server aus.
>> - **sql_mode**: Die Option **sql_mode** beeinflusst die unterstützte SQL-Syntax und die Datenvalidierungsprüfungen durch MySQL/MariaDB.
>>
>> > [!primary]
>> > Wenn auf Ihrer Website der Fehler **"Too many connections"** angezeigt wird, ist dies auf die Überschreitung der gleichzeitigen Verbindungen auf Ihrem Datenbankserver zurückzuführen. Sie können dann die Variable **"MaxConnections"** erhöhen, wenn sie nicht bereits den Maximalwert erreicht hat.
>>
>> > [!primary]
>> >
>> > <b>sql_mode</b>:
>> >
>> > &emsp;&emsp;Standardmodus von MariaDB 10.1:
>> > <pre class="highlight language-console"><code class="language-console">NO_ENGINE_SUBSTITUTION,NO_AUTO_CREATE_USER</code></pre>
>> >
>> > &emsp;&emsp;Standardmodus von MariaDB 10.2 und höher:
>> > <pre class="highlight language-console"><code class="language-console">STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION</code></pre>
>> >
>> > &emsp;&emsp;Standardmodus von MySQL 5.6:
>> > <pre class="highlight language-console"><code class="language-console">NO_ENGINE_SUBSTITUTION</code></pre>
>> >
>> > &emsp;&emsp;Standardmodus von MySQL 5.7 und höher:
>> > <pre class="highlight language-console"><code class="language-console">ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION</code></pre>
>> >
>> > Wir empfehlen, immer den Standardmodus zu verwenden, es sei denn, Ihre Datenbank wurde von einer Version aktualisiert, deren Standardmodus sich vom aktuellen unterscheidet.
>>
>> Nehmen Sie die erforderlichen Änderungen vor und klicken Sie auf `Bestätigen`{.action}.

> [!warning]
>
> Jede Änderung erfordert einen Neustart des Datenbankservers.
>


///

/// details | PostgreSQL Instanz

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
>> Klicken Sie auf den Tab `Konfiguration`{.action}.
>>
> **Schritt 3**
>>
>> Im Bereich **Allgemeine Konfiguration von PostgreSQL** finden Sie die derzeit für Ihre Datenbank festgelegte Konfiguration. Sie können diese direkt bearbeiten und dann auf `Anwenden`{.action} klicken.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/configuration/general-configuration-of-postgresql.png){.thumbnail}
>>
>> - **log_min_messages**: Steuert die Ebenen der Nachrichten, die in den Serverlogs protokolliert werden sollen. Für eine Web Cloud Databases Lösung sind folgende Ebenen verfügbar:
>>     - **"WARNING"**: Stellt Warnmeldungen zu potenziellen Problemen bereit.
>>     - **"ERROR"**: Sendet den Fehler, der zum Abbruch eines laufenden Befehls geführt hat.
>>     - **"LOG"**: Speichert Informationen für Serveradministratoren.
>>     - **"FATAL"**: Sendet den Fehler, der zum Beenden der aktuellen Sitzung geführt hat.
>>     - **"PANIC"**: Sendet den Fehler, der zum Beenden aller Sitzungen geführt hat.
>>
>> Jede Ebene enthält alle nachfolgenden Ebenen. Je höher die Stufe, desto weniger Meldungen werden in den Serverlogs gespeichert.
>>
>> Der Standardwert ist **"WARNING"**, da er die Werte **"ERROR"**, **"LOG"**, **"FATAL"** und **"PANIC"** enthält.
>>
>> Außerdem können Sie Erweiterungen für Ihre Datenbanken aktivieren. Klicken Sie hierzu auf den Tab `Datenbanken`{.action} und dann auf das Tabellensymbol der betreffenden Datenbank in der Spalte **"Erweiterungen"**.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/extensions.png){.thumbnail}


///

### MySQL-, PostgreSQL- oder MariaDB-Version des Datenbankservers ändern

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
>> Im Tab **Allgemeine Informationen** wird die aktuelle Version in der Zeile **Version** angezeigt.
>>
> **Schritt 3**
>>
>> Um die Version zu ändern, klicken Sie auf `Die Version ändern`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/postgre-12-update-version.png){.thumbnail}


/// details | Wie erfahre ich die genaue PostgreSQL-Version, die ich verwende?

Geben Sie diesen Befehl in phpPgAdmin ein, nachdem Sie auf **Ihre Datenbank** im Bereich **"SQL"** geklickt haben, und klicken Sie dann auf `Starten`{.action}:

```sql
select version();
```

///

/// details | Wie erfahre ich die genaue MySQL- oder MariaDB-Version, die ich verwende?

Geben Sie diesen Befehl in phpMyAdmin im Bereich **"SQL"** ein und klicken Sie dann auf `Ausführen`{.action}:

```sql
show variables like "version";
```

///

> [!primary]
>
> - Bevor Sie zu einer höheren Version migrieren, stellen Sie sicher, dass Ihre Datenbank mit der gewählten Version kompatibel ist.
> - Die Änderung wird innerhalb weniger Minuten wirksam.
>

> [!warning]
>
> Es ist nicht möglich, direkt von einer älteren Version zur neuesten zu wechseln. Alle Zwischenversionen müssen durchlaufen werden.
>

### Logs und Metriken

**Klicken Sie auf jeden Titel, um den Inhalt anzuzeigen.**

/// details | Zugang zu den Logs

Um die Logs Ihrer Web Cloud Databases Lösung einzusehen, lesen Sie unsere Anleitung "[Web Cloud Databases - Logs abrufen](/pages/web_cloud/web_cloud_databases/retrieve-logs)".

///

/// details | RAM-Nutzung überwachen

Klicken Sie auf die unten stehenden Tabs, um die **2** Schritte nacheinander anzuzeigen.


> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Web Cloud Databases](/links/control-panel/web-cloud-databases), und wählen Sie die betreffende Lösung aus.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `Metriken`{.action}. Sie finden dort die Grafik **"Statistiken zum verwendeten RAM"**.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/metrics/ram-memory-usage-statistics.png){.thumbnail}


///

/// details | Anzahl der Verbindungen pro Minute überwachen

Diese Grafik ermöglicht es, die Verbindungslast pro Minute während der letzten 24 Stunden auf Ihrem Datenbankserver zu verfolgen.

Klicken Sie auf die unten stehenden Tabs, um die **2** Schritte nacheinander anzuzeigen.


> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Web Cloud Databases](/links/control-panel/web-cloud-databases), und wählen Sie die betreffende Lösung aus.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `Metriken`{.action}. Sie finden dort die Grafik **"Statistiken der Gesamtzahl der Verbindungen pro Minute"**.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/metrics/statistics-for-total-connections-per-minute.png){.thumbnail}


///

### Ihre Datenbanken optimieren

Pflegen Sie Ihre Datenbank, um eine gute Leistung beizubehalten und schnelle Rückgaben an die Skripte zu gewährleisten. Dies erfordert eine strukturierte und optimierte Datenbank.

**Klicken Sie auf jeden Titel, um den Inhalt anzuzeigen.**

/// details | Datenbank indexieren

Um die Geschwindigkeit der Suche bei einer Abfrage zu erhöhen, müssen Sie einen Index auf die Felder setzen, die in WHERE-Klauseln verwendet werden.

Beispiel: Sie suchen regelmäßig nach Personen in Verbindung mit einer Stadt. Indexieren Sie das Feld "city" mit folgender Abfrage:

```sql
ALTER TABLE 'test' ADD INDEX ('city')
```

///

/// details | Datenbank bereinigen

Auf einige Ihrer Daten wird nicht mehr zugegriffen? Durch deren Archivierung werden Ihre Tabellen kleiner und Suchen schneller.

///

/// details | Anzeigebegrenzung

Beschränken Sie die Anzeige der Datensätze auf eine feste Anzahl (z.B. 10 pro Seite) mit dem LIMIT-Teil Ihrer SQL-Abfrage.

///

/// details | Anfragen gruppieren

Gruppieren Sie Ihre Anfragen zu Beginn des Skripts folgendermaßen:

```bash
open_connection
request1
request2
...
close_connection
Display...
Process data
Loop through data...
Display...
...
```

///

/// details | Nur nützliche Daten abrufen

Stellen Sie in Ihren SQL-Abfragen sicher, dass Sie nur die benötigten Daten auswählen und die Verknüpfungen zwischen den Tabellen nicht vergessen haben.

Beispiel:

```sql
(where table1.champs = table2.champs2)
```

///

/// details | Optionen mit zu hohem Ressourcenverbrauch vermeiden

Verwenden Sie beispielsweise nicht **"HAVING"**. Dies erhöht die Anzahl der Anfragen. Vermeiden Sie ebenso die Verwendung von **"GROUP BY"**, es sei denn, dies ist unbedingt erforderlich.

///

## Weiterführende Informationen

[Verzeichnis von IP-Adressen für die Webhosting Cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
