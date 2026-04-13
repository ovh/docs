---
title: 'Web Cloud Databases - Wie verwaltet man Logs?'
excerpt: 'Erfahren Sie, wie Sie die Logs Ihrer auf dem Web Cloud Databases Server gehosteten Datenbanken verwalten'
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

Ein Log entspricht einem Ereignis, das auf einem Computersystem auftritt (Server, Computer, Anwendung, Website, Datenbank, Computernetzwerk usw.).
Ein Log kann beispielsweise eines oder mehrere der folgenden Elemente aufzeichnen und enthalten:

- Den Zeitstempel (Datum, Uhrzeit, Minute, Sekunde usw.) des Ereignisses.
- Die Art des Ereignisses (Verbindung, Trennung, Fehler, Download, Upload, Warnung usw.).
- Zusatzinformationen zum Ereignis (aufgerufene Seite oder Datei, gestartete Anwendung, kontaktierter Remote-Server, Name einer hoch- oder heruntergeladenen Datei usw.)
- Den Ursprung des Ereignisses (Benutzerkennung, Quell-IP-Adresse, Quellprogramm usw.).
- Den Zustand des Systems, in dem das Ereignis stattfindet (verfügbare Ressourcen, verbleibender Speicher, CPU-Auslastung usw.).

In der Regel werden Logs direkt von den Computersystemen erzeugt, in denen die Ereignisse stattfinden.
Sie werden in Textdateien gespeichert, die auch als Logdateien bezeichnet werden.

Logdateien ermöglichen somit folgende Aktionen:

- Das Verhalten des Computersystems zu analysieren, das die Logs erzeugt.
- Fehler zu identifizieren, die auf dem Computersystem aufgetreten sind.
- Auf dem Computersystem aufgetretene Fehler zu beheben.
- Die Leistung des Computersystems zu optimieren und zu verbessern.

Ihr [Web Cloud Databases](/links/web/databases) Dienst erzeugt eigene Logs.

In bestimmten Situationen kann es erforderlich sein, die Logs abzurufen:

- Von Ihrem Web Cloud Databases Server.
- Für eine der auf Ihrem Web Cloud Databases Server gehosteten Datenbanken.

**Diese Anleitung erklärt, wie Sie die Logs Ihres Web Cloud Databases Dienstes einsehen und verwalten.**

## Voraussetzungen

- Sie verfügen über eine [Web Cloud Databases](/links/web/databases) Instanz.

<!-- CP-NAV-START:web-cloud-databases -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Navigationspfad:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Wählen Sie Ihren Datenbankdienst aus

---
<!-- CP-NAV-END:web-cloud-databases -->

## In der praktischen Anwendung

> [!warning]
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Sie bei gängigen Aufgaben zu unterstützen. Wir empfehlen Ihnen jedoch, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren, falls Sie Schwierigkeiten haben. Wir können Ihnen bei der Interpretation der mit Ihrem Web Cloud Databases Dienst verfügbaren Logs keine Unterstützung bieten. Weitere Informationen finden Sie im Abschnitt [Weiterführende Informationen](#go-further) dieser Anleitung.
>

### Echtzeit-Logs Ihres Web Cloud Databases einsehen

<!-- CP-STEPS-START:realtime-logs -->
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
>> Klicken Sie auf den Tab `Logs`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/tab.png){.thumbnail}
>>
>> In dieser integrierten Konsole finden Sie die Echtzeit-Logs Ihres Web Cloud Databases Dienstes.
>>
>> > [!primary]
>> >
>> > Die Logs sind hier nur in Echtzeit verfügbar. Sie werden nur angezeigt, wenn sie erzeugt werden, während Sie sich auf dem Tab `Logs`{.action} befinden.
>> >
>> > Wenn Sie den Tab `Logs`{.action} verlassen und später zu ihm zurückkehren, ist der zuvor angezeigte Verlauf nicht mehr vorhanden.
<!-- CP-STEPS-END:realtime-logs -->

### Den Logverlauf Ihres Web Cloud Databases Dienstes abrufen

Um den Logverlauf Ihres Web Cloud Databases Dienstes abzurufen, müssen Sie sich per SFTP verbinden.

> [!warning]
>
> Überprüfen Sie vor der Verbindung, ob die öffentliche IP-Adresse des von Ihnen verwendeten Computers auf Ihrem Web Cloud Databases Server mit aktivierter Option `SFTP` autorisiert ist.
>
> Um dies zu überprüfen, ermitteln Sie die öffentliche IP-Adresse Ihres Internetzugangs und lesen Sie den Abschnitt **IP-Adresse autorisieren** in [dieser Anleitung](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).
>

<!-- CP-STEPS-START:sftp-connection-info -->
Um die SFTP-Verbindungsinformationen für Ihren Web Cloud Databases Dienst zu finden, klicken Sie auf die unten stehenden Tabs, um die **2** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Web Cloud Databases](/links/control-panel/web-cloud-databases), und wählen Sie die betreffende Lösung aus.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Im Tab `Allgemeine Informationen`{.action} finden Sie den Bereich **Login-Daten**. Unter `SFTP`{.action} finden Sie die für die Verbindung per SFTP erforderlichen Informationen.
>>
>> > [!primary]
>> >
>> > Wenn Sie das `Server-Passwort` nicht kennen, klicken Sie auf den Button `...`{.action} rechts daneben, um es zu ändern.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/sftp-login.png){.thumbnail}

Wenn Sie die SFTP-Zugangsdaten abgerufen haben, verbinden Sie sich über einen FTP-Client (FileZilla, Cyberduck, WinSCP usw.).

Gehen Sie in FileZilla oben links zum Menü `Datei`{.action} und klicken Sie dann auf `Servermanager`{.action}.

Klicken Sie auf `Neuer Server`{.action} und geben Sie die zuvor ermittelten Einstellungen ein.

![Web Cloud Databases](/pages/assets/screens/other/web-tools/filezilla/site-manager.png){.thumbnail}

Die Logdatei mit dem Namen `stdout.log` befindet sich im Stammverzeichnis.

Laden Sie sie auf Ihren Computer herunter, um sie einzusehen.
<!-- CP-STEPS-END:sftp-connection-info -->

> [!primary]
>
> Eine zusätzliche Logdatei mit dem Namen `slow-query.log` kann im SFTP-Stammverzeichnis Ihres Web Cloud Databases Servers erscheinen.
> Diese Datei enthält den Verlauf der langsamen Abfragen, die auf Ihrem Web Cloud Databases Server ausgeführt wurden.
>
> Standardmäßig ist der Wert auf den Web Cloud Databases Diensten in der Variable **long_query_time** auf 1 Sekunde festgelegt.
>
> Mit dieser Datei können Sie Ihre Skripte und den Inhalt Ihrer Datenbank(en) optimieren, um die Leistung Ihrer zugehörigen Dienste zu verbessern.
>

### Die Logs Ihres Web Cloud Databases Dienstes bei Logs Data Platform abonnieren <a name="wcdb-ldp"></a>

[Logs Data Platform](/links/manage-operate/ldp) ist eine Plattform zur Verwaltung Ihrer Logs. Sie erleichtert die Aggregation und Verwaltung von Logs, insbesondere für Infrastrukturen, die ein großes Volumen an Logs erzeugen.

Sie funktioniert durch Abruf der von Ihrer Infrastruktur, Ihren Websites oder Anwendungen erzeugten Logs, um diese beispielsweise:

- zu speichern;
- in Echtzeit-Dashboards anzuzeigen;
- Benutzern komplexe Abfragen zu ermöglichen;
- nach Datum, Anwendung, Typ oder Inhalt zu filtern.

Weitere Informationen zu Logs Data Platform finden Sie in unserer Anleitung [Einführung in Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP) (EN).

Da [Web Cloud Databases](/links/web/databases) Dienste mit vielen Services (Webhostings, VPS, Dedicated Server usw.) genutzt werden können, können diese zusätzlich zu den bereits verfügbaren Echtzeit-Logs über einen Datenstream bei Logs Data Platform abonniert werden.

Um Ihren Web Cloud Databases Dienst bei einem Datenstream auf Logs Data Platform zu abonnieren, gibt es zwei mögliche Szenarien.

**Klicken Sie auf jeden Fall, um den Inhalt anzuzeigen.**

<a name="wcdb-ldp-case1"></a>

<!-- CP-STEPS-START:ldp-subscribe-existing -->
/// details | Szenario 1 - Einen bestehenden Datenstream auf Ihrer Logs Data Platform abonnieren

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
>> Klicken Sie auf den Tab `Logs`{.action} und dann auf den Button `Abonnieren`{.action} rechts neben dem Echtzeit-Log-Bereich.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/tab-subscribe.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Wenn Sie über mehrere Logs Data Platform Dienste verfügen, wählen Sie die gewünschte Referenz aus der Dropdown-Liste unterhalb des Buttons `Datenstream hinzufügen`{.action} aus.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/data-stream.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Der bestehende Datenstream wird in der Tabelle am Ende der Seite angezeigt. Klicken Sie auf den Button `Abonnieren`{.action} rechts neben der entsprechenden Zeile.
>>
>> Nach einigen Sekunden bestätigt eine Meldung, dass das Abonnement erfolgreich erstellt wurde.

///
<!-- CP-STEPS-END:ldp-subscribe-existing -->

<!-- CP-STEPS-START:ldp-subscribe-new -->
/// details | Szenario 2 - Einen neuen Datenstream auf Ihrer Logs Data Platform abonnieren

Klicken Sie auf die unten stehenden Tabs, um die **5** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Web Cloud Databases](/links/control-panel/web-cloud-databases), und wählen Sie die betreffende Lösung aus.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `Logs`{.action} und dann auf den Button `Abonnieren`{.action} rechts neben dem Echtzeit-Log-Bereich.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/tab-subscribe.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Wenn Sie über mehrere Logs Data Platform Dienste verfügen, wählen Sie die gewünschte Referenz aus der Dropdown-Liste unterhalb des Buttons `Datenstream hinzufügen`{.action} aus.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/data-stream.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Da der Datenstream noch nicht existiert, klicken Sie auf den Button `Datenstream hinzufügen`{.action}. Sie werden auf eine Seite weitergeleitet, auf der Sie einen neuen Datenstream auf Ihrem Logs Data Platform Dienst erstellen können.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/logs-data-platform/data-stream/add-data-stream.png){.thumbnail}
>>
>> Lesen Sie bei Bedarf unsere Anleitungen "[Einführung in Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP)" (EN) und "[Schnelleinstieg in Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start)" (EN).
>>
> **Schritt 5**
>>
>> Wenn die Formulare ausgefüllt sind, klicken Sie auf `Speichern`{.action}. Sie werden auf den Tab `Datenstream` Ihres Logs Data Platform Dienstes weitergeleitet.
>>
>> Um Ihren Web Cloud Databases Dienst bei diesem neuen Datenstream zu abonnieren, kehren Sie zum Tab `Logs`{.action} Ihres Web Cloud Databases Dienstes zurück und folgen Sie dem oben beschriebenen [Szenario 1](#wcdb-ldp-case1).

///
<!-- CP-STEPS-END:ldp-subscribe-new -->

## Weiterführende Informationen <a name="go-further"></a>

[Erste Schritte mit Ihrem Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)

[Einführung in Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP) (EN)

[Schnelleinstieg in Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start) (EN)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Treten Sie unserer [User Community](/links/community) bei.
