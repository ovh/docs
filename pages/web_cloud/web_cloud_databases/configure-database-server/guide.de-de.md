---
title: 'Konfigurieren Ihres Datenbankservers'
excerpt: 'Erfahren Sie hier, wie Sie Ihren Datenbankserver konfigurieren und optimieren können'
updated: 2024-03-20
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Web Cloud Databases Datenbanken geben Ihnen die Möglichkeit, auf die globalen Einstellungen Ihres Servers einzuwirken. Sie können auch die Aktivität Ihres Servers sehen.

**Diese Anleitung erklärt, wie Sie Ihren Datenbankserver konfigurieren und optimieren können.**

## Voraussetzungen

- Sie verfügen über eine [Web Cloud Databases Instanz](https://www.ovh.de/cloud/cloud-databases/) (auch in einem [Performance Web Hosting](/links/web/hosting) Angebot enthalten).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

### Abrufen der allgemeinen Informationen eines Datenbank-Servers

Gehen Sie In Ihrem [OVHcloud Kundencenter](/links/manager) in den Bereich `Web Cloud Databases`{.action} und klicken Sie anschließend auf die entsprechende SQL-Instanz. Vergewissern Sie sich, dass Sie sich im Tab `Allgemeine Informationen`{.action} befinden.

Hier können Sie wichtige Informationen zu Ihrer SQL-Instanz einsehen. Wir bitten Sie, sich einen Moment Zeit zu nehmen und zu überprüfen, dass die angezeigten Daten korrekt sind bzw. mit den nachfolgenden Angaben übereinstimmen.

|Information|Details|
|---|---|
|Status der Dienstleistung|Zeigt an, ob die Instanz gestartet wurde, gerade neu gestartet wird oder gesperrt wurde. Ihre Instanz muss gestartet worden sein, damit Sie Aktionen durchführen können.|
|Typ|Zeigt das vom Server verwendete Datenbanksystem an. Wenn Sie nicht wissen, ob der verwendete Typ korrekt ist, beachten Sie, dass MySQL das am weitesten verbreitete System ist. Es gibt jedoch auch andere Datenbanksysteme (PostgreSQL, MariaDB). Wurde Ihre Website zum Beispiel mit WordPress erstellt, ist ein MySQL-System die richtige Wahl.|
|Version|Zeigt die Version des vom Server verwendeten Datenbanksystems an. Achten Sie auf die Kompatibilität Ihrer Website mit der gewählten Version.|
|CPU Auslastung|Zeigt Auslastungsspitzen der CPU über die letzten 24 Stunden an.|
|RAM|Zeigt den für Ihre Instanz verfügbaren Arbeitsspeicher sowie eventuelle Überschreitungen der RAM-Kapazität. Ihr Datenbankserver verfügt über dedizierte und garantierte Ressourcen: den RAM-Speicher. Falls nötig, können Sie Ihren RAM skalieren und eine Warnmeldung erhalten, wenn Sie sämtliche RAM-Ressourcen Ihrer Instanz verwenden.|
|Infrastruktur|Zeigt die von Ihrer Instanz verwendete Infrastruktur an. Hierbei handelt es es sich um eine interne Information der OVHcloud Infrastruktur.|
|Datacenter|Zeigt das Rechenzentrum an, in dem Ihre Instanz angelegt wurde. Vergewissern Sie sich, dass das Rechenzentrum Ihrer Instanz mit dem Rechenzentrum des Webhostings übereinstimmt, auf dem Ihre Website aktuell (oder in Zukunft) gehostet wird.|
|Host|Zeigt den OVHcloud Server an, auf dem Ihre Instanz angelegt wurde. Hierbei handelt es sich um eine interne Information der OVHcloud Infrastruktur, die im Rahmen unserer Kommunikation zu [OVHcloud Störungen](https://web-cloud.status-ovhcloud.com/) verwendet werden kann.|

![Allgemeine Informationen](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/general-information.png){.thumbnail}

### Zugangsverwaltung

Ihre Web Cloud Databases ist über Ihre OVHcloud Webhostings oder/und über das öffentliche Netzwerk erreichbar.

#### Eine IP-Adresse erlauben

Damit auf Ihre Web Cloud Databases Instanz zugegriffen werden kann, müssen zunächst die IP-Adressen oder IP-Bereiche festgelegt werden, die sich mit dieser verbinden dürfen.

Gehen Sie In Ihrem [OVHcloud Kundencenter](/links/manager) in den Bereich `Web Cloud Databases`{.action} und klicken Sie anschließend auf die entsprechende Web Cloud Databases Instanz.

Klicken Sie hierzu im Tab `Autorisierte IPs`{.action} auf den Button `IP-Adresse / Maske hinzufügen`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask.png){.thumbnail}

Geben Sie im angezeigten Fenster im Feld `IP / Maske`{.action} die IP-Adresse oder Maske ein, der Sie den Zugriff erlauben möchten. Legen Sie anschließend fest, ob Sie nur Zugriff auf die Datenbanken oder auch auf den SFTP-Port erlauben möchten. Klicken Sie dann auf `Bestätigen`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask-confirmation.png){.thumbnail}

#### Autorisieren der Anbindung eines OVHcloud Webhostings

Für ein OVHcloud Webhosting können Sie einfach `Den OVHcloud Webhostings den Zugriff auf die Datenbank erlauben` auswählen.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/tab-empty.png){.thumbnail}

#### Ihren Web Cloud Databases Dienst ändern <a name="modify-ram-web-cloud-db"></a>

> [!warning]
> 
> Wenn Ihr Web Cloud Databases Dienst an ein **Performance** Webhosting gebunden ist, müssen Sie ihn zuerst von Ihrem **Performance** Hosting trennen, um den Dienst hochzustufen.
>
> Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein, um den Web Cloud Databases Dienst vom Webhosting **Performance** abzutrennen. Klicken Sie auf den Tab `Web Cloud`{.action} und wählen Sie Ihr Hosting unter `Hosting-Pakete`{.action} in der linken Spalte aus. 

> Auf der neuen Seite `Allgemeine Informationen`{.action} finden Sie mittig den Bereich `Konfiguration`{.action}. Klicken Sie rechts neben `Web Cloud Databases`{.action} auf `...`{.action} und dann auf `Abtrennen`{.action}. Wählen Sie die kürzeste Verlängerungsdauer aus und fahren Sie fort bis zur Bestätigung der Bestellung.
>
> **Diese Aktion ist unwiderruflich. Der Web Cloud Databases Dienst wird anschließend unabhängig von Ihrem Performance Webhosting abgerechnet.**
>

Um Ihren Web Cloud Databases Dienst zu bearbeiten, melden Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) an. Klicken Sie auf `Web Cloud`{.action} und dann auf `Web Cloud Databases`{.action}. Wählen Sie den Namen Ihres Datenbankservers aus.

In der Standardansicht **Allgemeine Informationen** klicken Sie auf `...`{.action} rechts neben "RAM" und dann auf `RAM Menge ändern`{.action}, um zur Bestellung geleitet zu werden.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/change-the-amount-of-ram.png){.thumbnail}

Wählen Sie die gewünschte RAM-Größe aus und klicken Sie auf `Weiter`{.action}. Danach können Sie die Laufzeit wählen.

> [!primary]
>
> Eine anteilige Berechnung erfolgt basierend auf der Restlaufzeit des Dienstes. Diese Berechnung basiert auf dem Ablaufdatum der Web Cloud Databases Instanz, nicht auf dem Datum des Bestellscheins.
> 

Nach Bestätigung der Verträge werden Sie auf den Bestellschein umgeleitet, um die Änderung auszuführen. Die Anpassung erfolgt innerhalb einiger Stunden.

> [!warning]
>
> Wenn Sie derzeit über eine kostenfreie, in einem Performance Hosting inkludierte Web Cloud Databases Instanz verfügen, wird diese mit dem Wechsel des Dienstes hinfällig.
> 

### Die Konfiguration meines Datenbankservers ändern

Loggen Sie sich in Ihrem OVHcloud Kundencenter ein Klicken Sie auf `Web Cloud`{.action} und dann auf `Web Cloud Databases`{.action}. und wählen Sie den Namen Ihres Web Cloud Databases Servers aus. 

#### MySQL und MariaDB Instanzen

- Gehen Sie zum Tab `Konfiguration`{.action}.

Im Kasten **Allgemeine Konfiguration von MySQL** finden Sie die derzeit für Ihre Datenbank festgelegte Konfiguration. Sie können hier direkt Änderungen durchführen und dann auf `Anwenden`{.action} klicken.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/configuration/general-configuration-of-mysql.png){.thumbnail}

- **Tmpdir**: Verzeichnis temporärer Dateien. **/dev/shm** entspricht dem RAM Speicher der Instanz. **/tmp** entspricht der Festplatte der Instanz.
- **MaxAllowedPacket**: Maximale Paketgröße.
- **max_user_connections**: Anzahl der erlaubten Simultanverbindungen je Benutzer.
- **AutoCommit**: Legt fest, ob die SQL-Transaktionen automatisch bestätigt werden oder nicht.
- **Interactive_timeout**: Zeit (in Sekunden), während der der Server auf eine Aktivität auf einer interaktiven Verbindung wartet, bevor er diese schließt.
- **InnodbBufferPoolSize**: Größe des Pufferspeichers auswählen (in Megabyte).
- **MaxLines**: Anzahl der erlaubten Simultanverbindungen auf Web Cloud Databases.
- **Wait_timeout**: Zeit (in Sekunden), während der der Server auf eine Aktivität auf einer nicht interaktiven Verbindung wartet, bevor er diese schließt.
- **Event_scheduler**: Wird verwendet, um die Ausführung programmierter Anfragen direkt im MySQL-Server zu starten.
- **sql_mode**: Die Option **sql_mode** betrifft die jeweilige SQL-Syntax und die Überprüfungen der Datenvalidierung durch MySQL/MariaDB.

> [!primary]
> Wenn Sie auf Ihrer Webseite einen Fehler feststellen, der **"Too many connections"** anzeigt, ist dies auf die Überschreitung der Anzahl der gleichzeitigen Verbindungen auf Ihrer Datenbank zurückzuführen.
> Dann können Sie die **MaxConnections**-Variable erhöhen, wenn sie nicht bereits am Limit ist.
>

> [!primary]
>
> <b>Tmpdir</b>:
>
> - /dev/shm: Der Datenbankserver wird die Hälfte seines RAM-Speichers diesem Verzeichnis für mehr Leistung zuweisen.
>
> - /tmp: Der Server wird auf seiner Festplatte unbegrenzten Speicherplatz für dieses Verzeichnis freigeben, aber deutlich zu Lasten der Performance. Wir empfehlen Ihnen, dieses Verzeichnis nur gelegentlich für größere Operationen zu verwenden.
>

> [!primary]
>
> <b>sql_mode</b>:
>  
> &emsp;&emsp;Standardmodus von MariaDB 10.1:
> <pre class="highlight language-console"><code class="language-console">NO_ENGINE_SUBSTITUTION,NO_AUTO_CREATE_USER</code></pre>
> 
> &emsp;&emsp;Standardmodus von MariaDB 10.2 und spätere Versionen:
> <pre class="highlight language-console"><code class="language-console">STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION</code></pre>
>
> &emsp;&emsp;Standardmodus von MySQL 5.6:
> <pre class="highlight language-console"><code class="language-console">NO_ENGINE_SUBSTITUTION</code></pre>
>
> &emsp;&emsp;Standardmodus von MySQL 5.7 und spätere Versionen:
> <pre class="highlight language-console"><code class="language-console">ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION</code></pre>
>
> Wir empfehlen Ihnen, immer den Standardmodus zu nutzen, sofern Ihre Datenbank nicht auf Basis einer Version aktualisiert wurde, die einen anderen Standardmodus hat, als die aktuelle Version.
>

Nachdem Sie die notwendigen Änderungen durchgeführt haben, klicken Sie auf `Bestätigen`{.action}.

> [!warning]
>
> Jede Änderung erfordert einen Neustart des Datenbankservers.
> 

#### PostgreSQL Instanzen

- Klicken Sie auf den Tab `Konfiguration`{.action}.

Im Feld **Allgemeine Konfiguration von PostgreSQL** finden Sie die derzeit für Ihre Datenbank festgelegte Konfiguration. Sie können diese direkt bearbeiten und dann auf `Anwenden`{.action} klicken.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/configuration/general-configuration-of-postgresql.png){.thumbnail}

- **log_min_messages**: Steuert die Ebenen der Nachrichten, die in den Serverlogs protokolliert werden sollen. Für eine Web Cloud Databases Lösung sind folgende Level verfügbar: 
    - **WARNING**: Stellt Warnmeldungen zu potenziellen Problemen bereit.
    - **ERROR**: Sendet den Fehler, der zur Stornierung einer laufenden Bestellung geführt hat.
    - **LOG**: Speichert Informationen für Serveradministratoren.
    - **FATAL**: Sendet den Fehler, der zum Beenden der aktuellen Sitzung geführt hat.
    - **PANIC**: Sendet den Fehler, der zum Beenden aller Sitzungen geführt hat.

Jede Ebene enthält alle nachfolgenden Ebenen. Je höher die Stufe, desto weniger Meldungen werden in den Logs des Servers gespeichert.

Der Standardwert ist **WARNING**, da er die Werte **ERROR**, **LOG**, **FATAL** und **PANIC** enthält.

Außerdem können Sie Erweiterungen für Ihre Datenbanken aktivieren. Klicken Sie hierzu auf den Tab `Datenbanken`{.action} und dann auf das Tabellensymbol der betreffenden Datenbank in der Spalte **Erweiterungen**.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/extensions.png){.thumbnail}

### Ändern der MySQL-, PostgreSQL- oder MariaDB-Version des Datenbankservers

Um die MySQL-, PostgreSQL- oder MariaDB-Version des Datenbankservers zu erfahren, überpüfen Sie nach der Wahl Ihres Datenbankservers den Tab **Allgemeine Informationen**.

Die aktuelle Version wird unter **Version** angezeigt.

Um die Version anzupassen, klicken Sie auf `Die Version ändern`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/postgre-12-update-version.png){.thumbnail}

#### Wie kann ich die genaue Version von PostgreSQL erfahren, die verwendet wird?

Geben Sie diesen Befehl in phpPgAdmin ein, nachdem Sie auf **Ihre Datenbank** im Bereich **SQL** geklickt haben und klicken Sie dann auf `Ausführen`{.action}:

```sql
select version();
```

#### Woher weiß ich, welche Version von MySQL oder MariaDB ich benutze?

Hierzu geben Sie in phpMyAdmin unter der Rubrik **SQL** den folgenden Befehl ein und klicken Sie dann auf `Ausführen`{.action}:

```sql
show variables like "version";
```

> [!primary]
>
> - Bevor Sie zu einer höheren Version migrieren, stellen Sie sicher, dass Ihre Datenbank mit der gewählten Version kompatibel ist.
> - Die Änderung wird innerhalb weniger Minuten wirksam.
>

> [!warning]
>
> Es ist nicht möglich, direkt von einer älteren Version zur neuesten zu wechseln. Die Zwischenversionen müssen einbezogen werden.
>

### Logs und Messwerte

#### Zugang zu den Logs

Um die Logs Ihrer Web Cloud Databases Lösung einzusehen, folgen Sie unserer Anleitung „[Web Cloud Databases - Logs abrufen](/pages/web_cloud/web_cloud_databases/retrieve-logs)“.

#### Überprüfung der RAM Nutzung

Loggen Sie sich in Ihrem OVHcloud Kundencenter ein Klicken Sie auf `Web Cloud`{.action} und dann auf `Web Cloud Databases`{.action}. Wählen Sie den Namen Ihres Datenbankservers aus.

Gehen Sie zum Tab `Messwerte` Ihres Datenbankservers. Hier finden Sie die Grafik **Statistiken zum verwendeten RAM**.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/metrics/ram-memory-usage-statistics.png){.thumbnail}

#### Verbindungen pro Minute überprüfen

Diese Anzeige ermöglicht es, die Verbindungslast pro Minute während der letzten 24 Stunden auf Ihrem Datenbankserver zu verfolgen.

Loggen Sie sich in Ihrem OVHcloud Kundencenter ein Klicken Sie auf `Web Cloud`{.action} und dann auf `Web Cloud Databases`{.action}. Wählen Sie den Namen Ihres Datenbankservers aus.

Gehen Sie zum Tab `Messwerte` Ihres Datenbankservers. Hier finden Sie die Grafik **Statistiken der Gesamtzahl der Verbindungen pro Minute**.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/metrics/statistics-for-total-connections-per-minute.png){.thumbnail}

### Ihre Datenbanken optimieren

Es wird empfohlen, die Datenbank so zu administrieren, dass sie effizient ist. Effizienz (Performance) bezieht sich hier auf die möglichst schnelle Rückgabe der Information an das anfragende Skript. Dazu bedarf es einer strukturierten und optimierten Datenbank.

#### Datenbank indexieren

Um die Bearbeitungsgeschwindigkeit einer Anfrage zu erhöhen, sollte ein Index auf die in den **"WHERE"**-Klauseln verwendeten Felder gesetzt werden.

Beispiel: Sie suchen regelmäßig nach „Person“ in Verbindung mit „Stadt“. Indexieren Sie das Feld "Stadt" folgendermaßen:

```sql
ALTER TABLE 'test' ADD INDEX ('Stadt');
```

#### Datenbank bereinigen

Daten, auf die nicht mehr zugegriffen wird, sollten archiviert werden. Archivieren von Daten hilft, Ihre Tabellen kleiner und damit schneller durchsuchbar zu halten.

#### Anzeigebegrenzung

Beschränken Sie die Anzeige der Datensätze auf eine begrenzte Zahl (z.B. 10 pro Seite) mit dem **"LIMIT"**-Teil Ihrer SQL-Abfrage.

#### Gruppieren von Anfragen

Gruppieren Sie Anfragen zu Beginn des Skriptes wie folgt:

```bash
verbindung_db
anfrage1
anfrage2
...
abmeldung_db
Anzeige …
Datenverarbeitung
Schleife …
Anzeige …
...
```

#### Nur notwendige Daten abrufen

Prüfen Sie in Ihren SQL-Anfragen, ob Sie nur die tatsächlich benötigten Daten abfragen und vergessen Sie insbesondere nicht die Tabellenverlinkung.

Beispiel:

```sql
(where table1.champs = table2.champs2)
```

#### Vermeidung von Optionen mit zu hohem Ressourcenverbrauch

Verwenden Sie beispielsweise nicht **"HAVING"**. Dies erhöht die Zahl der Abfragen. Vermeiden Sie ebenso die Verwendung von **"GROUP BY"**, es sei denn, dies ist unbedingt erforderlich.

## Weiterführende Informationen

[Verzeichnis von IP-Adressen für die Webhosting Cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
