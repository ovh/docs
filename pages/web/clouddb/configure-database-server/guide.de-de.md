---
title: 'Konfigurieren Ihres Datenbankservers'
slug: konfigurieren-ihres-datenbank-servers
excerpt: 'Erfahren Sie hier, wie Sie Ihren Datenbankserver konfigurieren und optimieren können'
section: Konfiguration
order: 6
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 30.06.2022**

## Ziel

Die CloudDB geben Ihnen die Möglichkeit, auf die Gesamtparameter Ihres Servers einzuwirken. Sie können auch die Aktivität Ihres Servers sehen.

**Diese Anleitung erklärt, wie Sie Ihren Datenbankserver konfigurieren und optimieren können.**

## Voraussetzungen

- Sie verfügen über eine [CloudDB Instanz](https://www.ovh.de/cloud/cloud-databases/) (auch in einem [Performance Web Hosting](https://www.ovhcloud.com/de/web-hosting/) Angebot enthalten).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

### Abrufen der allgemeinen Informationen eines Datenbank-Servers

Gehen Sie In Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) in den Bereich `Datenbanken`{.action} und klicken Sie anschließend auf die entsprechende SQL-Instanz. Vergewissern Sie sich, dass Sie sich im Tab `Allgemeine Informationen`{.action} befinden.

Hier können Sie wichtige Informationen zu Ihrer SQL-Instanz einsehen. Wir bitten Sie, sich einen Moment Zeit zu nehmen und zu überprüfen, dass die angezeigten Daten korrekt sind bzw. mit den nachfolgenden Angaben übereinstimmen.

|Information|Details|
|---|---|
|Status der Dienstleistung|Zeigt an, ob die Instanz gestartet wurde, gerade neu gestartet wird oder gesperrt wurde. Ihre Instanz muss gestartet worden sein, damit Sie Aktionen durchführen können.|
|Typ|Zeigt das vom Server verwendete Datenbanksystem an. Wenn Sie nicht wissen, ob der verwendete Typ korrekt ist, beachten Sie, dass MySQL das am weitesten verbreitete System ist. Es gibt jedoch auch andere Datenbanksysteme (PostgreSQL, MariaDB). Wurde Ihre Website zum Beispiel mit WordPress erstellt, ist ein MySQL-System die richtige Wahl.|
|Version|Zeigt die Version des vom Server verwendeten Datenbanksystems an. Achten Sie auf die Kompatibilität Ihrer Website mit der gewählten Version.|
|CPU Auslastung|Zeigt die überlastete CPU Zeit über die letzten 24 Stunden an.|
|RAM|Zeigt den für Ihre Instanz verfügbaren Arbeitsspeicher sowie eventuelle Überschreitungen der RAM-Kapazität. Ihr Datenbankserver verfügt über dedizierte und garantierte Ressourcen: den RAM-Speicher. Falls nötig, können Sie Ihren RAM skalieren und eine Warnmeldung erhalten, wenn Sie sämtliche RAM-Ressourcen Ihrer Instanz verwenden.|
|Infrastruktur|Zeigt die von Ihrer Instanz verwendete Infrastruktur an. Hierbei handelt es es sich um eine interne Information der OVHcloud Infrastruktur.|
|Datacenter|Zeigt das Rechenzentrum an, in dem Ihre Instanz angelegt wurde. Vergewissern Sie sich, dass das Rechenzentrum Ihrer Instanz mit dem Rechenzentrum des Webhostings übereinstimmt, auf dem Ihre Website aktuell (oder in Zukunft) gehostet wird.|
|Host|Zeigt den OVHcloud Server an, auf dem Ihre Instanz angelegt wurde. Hierbei handelt es sich um eine interne Information der OVHcloud Infrastruktur, die im Rahmen unserer Kommunikation zu [OVHcloud Störungen](https://web-cloud.status-ovhcloud.com/) verwendet werden kann.|

![Allgemeine Informationen](images/privatesql01-General-information.png){.thumbnail}

## Zugangsverwaltung

Ihre CloudDB ist über Ihre OVHcloud Webhostings oder/und über das öffentliche Netzwerk erreichbar.

#### Eine IP-Adresse erlauben

Damit auf Ihre CloudDB Instanz zugegriffen werden kann, müssen zunächst die IP-Adressen oder IP-Bereiche festgelegt werden, die sich mit dieser verbinden dürfen.

Gehen Sie In Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) in den Bereich `Datenbanken`{.action} und klicken Sie anschließend auf die entsprechende CloudDB-Instanz.

Klicken Sie hierzu im Tab `Autorisierte IPs`{.action} auf den Button `IP-Adresse / Maske hinzufügen`{.action}.

![clouddb](images/clouddb-add-ip.png){.thumbnail}

Geben Sie im angezeigten Fenster im Feld `IP / Maske`{.action} die IP-Adresse oder Maske ein, der Sie den Zugriff erlauben möchten. Legen Sie anschließend fest, ob Sie nur Zugriff auf die Datenbanken oder auch auf den SFTP-Port erlauben möchten. Klicken Sie dann auf `Bestätigen`{.action}.

![clouddb](images/clouddb-add-ip-step2.png){.thumbnail}

#### Autorisieren der Anbindung eines OVHcloud Webhostings

Für ein OVHcloud Webhosting können Sie einfach `Den OVHcloud Webhostings den Zugriff auf die Datenbank erlauben` auswählen.

![clouddb](images/clouddb-add-ip-step3.png){.thumbnail}

#### Ihr CloudDB Angebot bearbeiten

Um Ihr CloudDB Angebot zu ändern, melden Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) an. Klicken Sie auf `Web Cloud`{.action} und dann auf `Datenbanken`{.action}. Wählen Sie den Namen Ihres Datenbankservers aus.

In der Standardansicht **Allgemeine Informationen** klicken Sie auf `...`{.action} rechts neben "RAM" und dann auf `RAM Menge ändern`{.action}, um zur Bestellung geleitet zu werden.

![clouddb](images/private-sql-order-ram01.png){.thumbnail}

Wählen Sie die gewünschte Menge RAM aus und klicken Sie auf `Weiter`{.action}. Danach können Sie die gewünschte Dauer wählen.

> [!primary]
>
> Eine anteilige Berechnung erfolgt basierend auf der Restlaufzeit des Dienstes. Diese Berechnung basiert auf dem Ablaufdatum des CloudDB Instanz, nicht auf dem Datum des Bestellscheins.
> 

Nach Bestätigung der Verträge werden Sie auf den Bestellschein umgeleitet, um die Änderung auszuführen. Die Anpassung erfolgt innerhalb einiger Stunden.

> [!warning]
>
> Wenn Sie dank Ihres Performance Hostings derzeit über ein kostenloses CloudDB verfügen, verlieren Sie dessen Kosten.
> 

### Die Konfiguration meines Datenbankservers ändern

Loggen Sie sich in Ihrem OVHcloud Kundencenter ein Klicken Sie auf `Web Cloud`{.action} und dann auf `Datenbanken`{.action}. und wählen Sie den Namen Ihres CloudDB Servers aus. 

#### MySQL und MariaDB Instanzen

- Gehen Sie zum Tab `Konfiguration`.

Im Kasten **Allgemeine Konfiguration von MySQL** finden Sie die derzeit für Ihre Datenbank festgelegte Konfiguration. Sie können hier direkt Änderungen durchführen und dann auf `Anwenden`{.action} klicken.

![clouddb](images/private-sql-config02.png){.thumbnail}

- **Tmpdir**: Verzeichnis temporärer Dateien. **/dev/shm** entspricht dem RAM Speicher der Instanz. **/tmp** entspricht der Festplatte der Instanz.
- **MaxAllowedPacket**: Maximale Paketgröße.
- **max_user_connections**: Anzahl der erlaubten Simultanverbindungen je Benutzer.
- **AutoCommit**: Legt fest, ob die SQL-Transaktionen automatisch bestätigt werden oder nicht.
- **Interactive_timeout**: Zeit (in Sekunden), während der der Server auf eine Aktivität auf einer interaktiven Verbindung wartet, bevor er diese schließt.
- **InnodbBufferPoolSize**: Größe des Pufferspeichers auswählen (in Megabyte).
- **MaxLines:** Anzahl der erlaubten Simultanverbindungen auf CloudDB.
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
> <pre class="highlight command-prompt"> <span class="prompt">NO_ENGINE_SUBSTITUTION,NO_AUTO_CREATE_USER</span> </pre>
> 
> &emsp;&emsp;Standardmodus von MariaDB 10.2 und spätere Versionen:
> <pre class="highlight command-prompt"> <span class="prompt">STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION</span> </pre>
>
> &emsp;&emsp;Standardmodus von MySQL 5.6:
> <pre class="highlight command-prompt"> <span class="prompt">NO_ENGINE_SUBSTITUTION</span> </pre>
>
> &emsp;&emsp;Standardmodus von MySQL 5.7 und spätere Versionen:
> <pre class="highlight command-prompt"> <span class="prompt">ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION</span> </pre>
>
> Wir empfehlen Ihnen, immer den Standardmodus zu nutzen, sofern Ihre Datenbank nicht auf Basis einer Version aktualisiert wurde, die einen anderen Standardmodus hat, als die aktuelle Version.
>

Nachdem Sie die notwendigen Änderungen durchgeführt haben, klicken Sie auf `Bestätigen`{.action}.

> [!warning]
>
> Jede Änderung erfordert einen Neustart des Datenbankservers.
> 

#### Instance PostgreSQL

Die Konfiguration einer PostgreSQL-Instanz kann nicht geändert werden. 

Sie können jedoch Erweiterungen auf Ihren Datenbanken aktivieren. Klicken Sie hierzu auf den Tab `Datenbanken` und dann auf das Tabellensymbol der betreffenden Datenbank in der Spalte **Erweiterungen**.

![clouddb](images/private-sql-config03.png){.thumbnail}

### Ändern der MySQL-, PostgreSQL- oder MariaDB-Version des Datenbankservers

Um die MySQL-, PostgreSQL- oder MariaDB-Version des Datenbankservers zu erfahren, überpüfen Sie nach der Wahl Ihres Datenbankservers den Tab **Allgemeine Informationen**.

Die aktuelle Version wird unter **Version** angezeigt.

Um die Version anzupassen, klicken Sie auf `Die Version ändern`{.action}.

![clouddb](images/private-sql-config04.png){.thumbnail}


#### **Wie kann ich die genaue Version von PostgreSQL erfahren, die verwendet wird?**

Geben Sie diesen Befehl in phpPgAdmin ein, nachdem Sie auf **Ihre Datenbank** im Bereich **SQL** geklickt haben und klicken Sie dann auf `Ausführen`{.action}:

```sql
select version();
```

#### **Woher weiß ich, welche Version von MySQL oder MariaDB ich benutze?**

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

#### Statistiken zur Ausführungsdauer der Anfragen

So können Sie die Ausführungsdauer auf Ihrem Datenbankserver während der letzten 24 Stunden visualisieren.

Loggen Sie sich in Ihrem OVHcloud Kundencenter ein Klicken Sie auf `Web Cloud`{.action} und dann auf `Datenbanken`{.action}. Wählen Sie den Namen Ihres Datenbankservers aus.

Gehen Sie hierzu zum Tab `Messwerte` Ihres Datenbankservers. Sie finden hier die **Statistiken zur Ausführungsdauer der Anfragen**.

![clouddb](images/private-sql-metrics01.png){.thumbnail}

#### Zugang zu Slow-Query-Logs

> **Definition von "slow query log"**
>
> Es handelt sich um Anfragen, die zu lange benötigten, bis sie ausgeführt wurden. Der Wert wird auf „1 Sekunde“ auf unseren Datenbankservern in der **“long_query_time"**-Variable festgelegt.

Diese Logs (**"slow-query.log"**) können im Wurzelverzeichnis des SFTP-Zugangs Ihres Datenbankservers abgerufen werden.

Loggen Sie sich in Ihrem OVHcloud Kundencenter ein Klicken Sie auf `Web Cloud`{.action} und dann auf Datenbanken. Wählen Sie den Namen Ihres Datenbankservers aus.

Im Kasten `Allgemeine Informationen` finden Sie den Abschnitt **SFTP** unter **Verbindungsinformationen**.

![clouddb](images/private-sql-SFTP01.png){.thumbnail}

Um sich via **SFTP** einzuloggen, können Sie den Client von FileZilla verwenden. Diese Anleitung kann Ihnen dabei helfen: [Verwendung von FileZilla](https://docs.ovh.com/de/hosting/webhosting_hilfe_zur_verwendung_von_filezilla/)

Wenn diese Datei leer ist, haben Sie keine langsamen Anfragen.

#### Überprüfung der RAM Nutzung

Loggen Sie sich in Ihrem OVHcloud Kundencenter ein Klicken Sie auf `Web Cloud`{.action} und dann auf `Datenbanken`{.action}. Wählen Sie den Namen Ihres Datenbankservers aus.

Gehen Sie zum Tab `Messwerte` Ihres Datenbankservers. Hier finden Sie die Grafik **Statistiken zum verwendeten RAM**.

![clouddb](images/private-sql-metrics02.png){.thumbnail}

#### Verbindungen pro Minute überprüfen

Diese Anzeige ermöglicht es, die Verbindungslast pro Minute während der letzten 24 Stunden auf Ihrem Datenbankserver zu verfolgen.

Loggen Sie sich in Ihrem OVHcloud Kundencenter ein Klicken Sie auf `Web Cloud`{.action} und dann auf `Datenbanken`{.action}. Wählen Sie den Namen Ihres Datenbankservers aus.

Gehen Sie zum Tab `Messwerte` Ihres Datenbankservers. Hier finden Sie die Grafik **Statistiken der Gesamtzahl der Verbindungen pro Minute**.

![clouddb](images/private-sql-metrics03.png){.thumbnail}

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

[Verzeichnis von IP-Adressen für die Webhosting Cluster](https://docs.ovh.com/de/hosting/verzeichnis-der-ip-adressen-web-hosting-cluster/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com>.
