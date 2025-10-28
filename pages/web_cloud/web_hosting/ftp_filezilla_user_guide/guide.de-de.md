---
title: "Webhosting - Verwendung von FileZilla"
excerpt: "Erfahren Sie, wie Sie sich mit dem Speicherplatz Ihres OVHcloud Webhostings verbinden und die darin enthaltenen Daten mithilfe der FileZilla Software verwalten"
updated: 2025-09-12
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

> [!primary]
> **FTP-Explorer/Net2FTP**
>
> Bei Webhostings ist es nicht mehr möglich, sich mit dem FTP-Speicherplatz über das Online-Tool FTP Explorer/Net2FTP zu verbinden. Um sich weiterhin per FTP mit Ihrem Webhosting zu verbinden, verwenden Sie die Programme [FileZilla](https://filezilla-project.org/download.php) oder [Cyberduck](https://cyberduck.io/).

## Ziel

FileZilla ist ein FTP-Client, der für mehrere Betriebssystemen (Windows, macOS etc.) kostenlos zur Verfügung steht.

Sie können damit Dateien oder Ihre Website online stellen, indem Sie sich [mit dem Speicherplatz Ihres Webhostings verbinden](/pages/web_cloud/web_hosting/ftp_connection).

**Diese Anleitung erklärt, wie Sie sich mit dem Speicherplatz Ihres OVHcloud Webhostings verbinden und die darin enthaltenen Daten mithilfe der FileZilla Software verwalten.**

## Voraussetzungen

- Sie haben ein [OVHcloud Webhosting](/links/web/hosting) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).
- Sie haben FileZilla auf Ihrem Gerät installiert. Das Programm ist kostenlos verfügbar auf der offiziellen Seite: [filezilla-project.org](https://filezilla-project.org/download.php).

## Interface Übersicht <a name="interface"></a>

/// details | Klicken Sie hier, um den Inhalt dieses Abschnitts anzuzeigen.

![FileZilla-interface](/pages/assets/screens/other/web-tools/filezilla/main-interface.png){.thumbnail}

- Die obere Leiste (`Quickconnect`{.action}) ermöglicht die schnelle Verbindung zu Ihrem Hosting, indem Sie den **Hostnamen**, den **Benutzernamen**, das zugehörige **Passwort** und die verwendete **Port-Nummer** eintragen.
- **Bereich 1**: Details zur Transferhistorie, Verbindung zum FTP Bereich, Dateitransfers, Fehlern etc. Weitere Informationen finden Sie in der offiziellen [FileZilla Dokumentation](https://filezilla-project.org/).
- **Bereich 2**: Ordnerstruktur der lokalen Verzeichnisse/Dateien auf Ihrem Computer.
- **Bereich 3**: Ordnerstruktur der Verzeichnisse/Dateien auf Ihrem Hosting.
- **Bereich 4**: Liste der Verzeichnisse/Dateien in Ihrem lokal ausgewählten Verzeichnis.
- **Bereich 5**: Liste der Verzeichnisse/Dateien in dem auf Ihrem Hosting ausgewählten Verzeichnis.
- **Bereich 6**: Liste der laufenden, ausstehenden oder fehlerhaften Transfervorgänge zwischen Ihrem Computer und Ihrem Hosting.

///

## In der praktischen Anwendung

### 1 - Login-Daten für den Speicherplatz des Webhostings abrufen <a name="part-1"></a>

Führen Sie die folgenden Aktionen aus:

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
2. Klicken Sie auf das Menü `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus.
3. Klicken Sie auf den Tab `FTP - SSH`{.action}.
4. Auf der neuen Seite werden die Informationen zu Ihrem Speicherplatz angezeigt. Rufen Sie die folgenden Elemente ab:
    - Der `FTP- und SFTP-Server`, als `ftp.clusterXXX.hosting.ovh.net` (wobei jedes `X` eine Zahl zwischen `0` und `9` ist).
    - Einer der Benutzer in der Spalte `Login` der Tabelle unten auf der Seite. Sie können auch `Primäres Login` verwenden, wenn Sie möchten.
    - Die Nummer des `FTP-Port` oder die Nummer des `SFTP-Port`, je nachdem, welches Verbindungsprotokoll Sie für die Verbindung mit Ihrem Speicherplatz verwenden möchten.

> [!primary]
>
> Aus Sicherheitsgründen wird das Passwort eines Benutzers nicht auf der Seite `FTP - SSH`{.action} angezeigt. Wenn Sie es vergessen haben, lesen Sie [diese Anleitung](/pages/web_cloud/web_hosting/ftp_change_password), um es zu ändern.

### 2 - Mit FileZilla auf den Speicherplatz Ihres Hostings zugreifen

Die Verbindung kann über zwei Dateiübertragungsprotokolle hergestellt werden:

- **F**ile **T**ransfer **P**rotocol (**FTP**).
- **S**ecure **F**ile **T**ransfer **P**rotocol (**SFTP**).

> [!primary]
>
> Wir empfehlen, so weit wie möglich das **SFTP** Protokoll zu verwenden, um sich mit FileZilla mit Ihrem Speicherplatz zu verbinden.
>
> Das **SFTP** Protokoll verschlüsselt den Datenaustausch zwischen Ihrem Gerät und Ihrem Webhosting. Wenn jedoch bei der Verwendung Einschränkungen auftreten, wie z.B. Benutzersegmentierung oder Ordnersegmentierung, müssen Sie das **FTP**-Protokoll verwenden.

**Klicken Sie auf das gewünschte Verbindungsprotokoll, um die Erläuterungen anzuzeigen.**

/// details | Mit FileZilla per SFTP mit dem Speicherplatz Ihres Webhostings verbinden. <a name="sftp"></a>

**SFTP** verwendet wie SSH den Standard-Port 22 anstelle von Port 21. Wenn Sie ein Cloud Web Hosting Angebot verwenden, müssen Sie den Port verwenden, der in Ihrem [OVHcloud Kundencenter](/links/manager) angezeigt wird. Port 22 ist für Cloud Web Hostings per SSH und SFTP deaktiviert.

> [!success]
>
> SFTP ist für alle Hosting-Angebote von OVHcloud kostenlos verfügbar (mit Ausnahme der ausgelaufenen Angebote 60free und demo1g).
>

**SFTP-Aktivierung überprüfen**

Gehen Sie hierzu in Ihrem [OVHcloud Kundencenter](/links/manager) zum Tab `FTP - SSH`{.action} zurück, wie im [ersten Teil](#part-1) dieser Anleitung beschrieben.

Suchen Sie in der Tabelle unten auf der Seite nach der Spalte `SFTP`, um sicherzustellen, dass der Benutzer (in der Spalte `Login` der Tabelle) über einen aktiven SFTP-Zugang verfügt. Ist dies nicht der Fall, erscheint der Hinweis `Deaktiviert`.

Wenn der SFTP-Zugang des betreffenden Benutzers in der Tabelle `Deaktiviert` lautet, gehen Sie wie folgt vor:

- Bei Basic Angeboten setzen Sie einen Haken links neben `Deaktiviert` in der Tabelle.

- Für die Pro und Performance Angebote:

    - 1: Klicken Sie auf den Button `...`{.action} rechts neben der Zeile für den Benutzer und dann auf `Ändern`{.action}.
    - 2: Wählen Sie im angezeigten Fenster im Bereich `Verbindungsprotokolle` die Option `FTP und SFTP`{.action} aus und klicken Sie auf `Weiter`{.action}.
    - 3: Überprüfen Sie die Zusammenfassung der angeforderten Änderung, und klicken Sie dann auf `Bestätigen`{.action}.

**SFTP-Verbindung mit FileZilla**

![hosting](/pages/assets/screens/other/web-tools/filezilla/quick-connect.png){.thumbnail}

Geben Sie in der Schnellverbindungsleiste die folgenden Informationen ein:

|Auszufüllende Informationen|Details|
|---|---|
|Host| Serveradresse für den Zugriff auf den Speicherplatz Ihres Webhostings.<br> Diese hat in der Regel folgende Form: `ftp.clusterXXX.hosting.ovh.net` (die `XXX` stellen die Nummer des Clusters dar, in dem sich Ihr Webhosting befindet).|
|Benutzer|Kennung, die Sie für den Zugriff auf den Speicherplatz Ihres Hostings verwenden.|
|Kennwort|Das Kennwort für den Benutzer.|
|Port|Geben Sie die zuvor im [ersten Teil](#part-1) dieser Anleitung für eine SFTP-Verbindung ermittelte SFTP-Portnummer ein.|

Wenn Sie in der Box **1** im Bild unten alles korrekt eingegeben haben, klicken Sie auf `Quickconnect`{.action}.

![hosting](/pages/assets/screens/other/web-tools/filezilla/quick-connect-successfull.png){.thumbnail}

Es wird ein Dialogfeld geöffnet (siehe Abbildung unten), um die Verbindung mit dem Host zu bestätigen, mit dem Sie eine Verbindung herstellen möchten. Wenn Sie auf einem OVHcloud Host angemeldet sind, können Sie die Option *Diesem Host immer vertrauen, diesen Schlüssel zum Cache hinzufügen* anhaken, damit die Software Sie in Zukunft nicht erneut auffordert.

![hosting](/pages/assets/screens/other/web-tools/filezilla/unknown-host-key-message.png){.thumbnail}

///

/// details | Mit FileZilla per FTP mit dem Speicherplatz Ihres Webhostings verbinden.

![hosting](/pages/assets/screens/other/web-tools/filezilla/quick-connect.png){.thumbnail}

Geben Sie in der Schnellverbindungsleiste die folgenden Informationen ein:

|Auszufüllende Informationen|Details|
|---|---|
|Host| Serveradresse für den Zugriff auf den Speicherplatz Ihres Webhostings.<br> Diese hat in der Regel folgende Form: `ftp.clusterXXX.hosting.ovh.net` (die `XXX` stellen die Nummer des Clusters dar, in dem sich Ihr Webhosting befindet).|
|Benutzer|Kennung, die Sie für den Zugriff auf den Speicherplatz Ihres Hostings verwenden.|
|Kennwort|Das Kennwort für den Benutzer.|
|Port|Es wird normalerweise automatisch durch die Software ausgefüllt. Andernfalls geben Sie den Port `21` für eine FTP-Verbindung ein.|

Wenn Sie in der Box **1** im Bild unten alles korrekt eingegeben haben, klicken Sie auf `Quickconnect`{.action}.

![hosting](/pages/assets/screens/other/web-tools/filezilla/quick-connect-successfull.png){.thumbnail}

Wenn die Verbindung erfolgreich hergestellt wurde, werden Sie über den Status in der Randleiste **2** auf dem obigen Bild informiert. Sie können so Ihre bereits auf Ihrem Hosting vorhandenen Ordner und Dateien einsehen (Bereich **3**).

///

#### Verbindungsfehler

**Klicken Sie auf den Fehler, um die Lösung anzuzeigen.**

/// details | Authentication failed - Could not connect to server 

Die unten abgebildete Nachricht zeigt einen Authentifizierungsfehler bei der Verbindung mit einem Webhosting per FTP oder SFTP an:

![Hosting](/pages/assets/screens/other/web-tools/filezilla/authentification-failed-could-not-connect-server.png){.thumbnail}

Diese Nachricht entsteht durch einen Fehler beim eingegebenen Login/Passwort.

Überprüfen Sie Ihre Zugangsdaten, um sicherzustellen, dass keine Fehler gemeldet werden. Gegebenenfalls können Sie [Passwort des FTP-Zugangs ändern](/pages/web_cloud/web_hosting/ftp_change_password) Ihres Webhostings direkt im [OVHcloud Kundencenter](/links/manager).

///

/// details | Connection timed out after 20 seconds of inactivity - Could not connect to server

Im folgenden Fall wird der Fehler aufgrund eines falschen Hostnamens generiert:

![Hosting](/pages/assets/screens/other/web-tools/filezilla/connection-timed-out-after-20s.png){.thumbnail}

Überprüfen Sie diesen anhand des in Ihrem [OVHcloud Kundencenter](/links/manager) angezeigten Hostnamens.

///

### 3 - Dateitransfer

Um Ihre Dateien per (S)FTP zu übertragen, können Sie diese im linken Fenster (*Local site*) auswählen und Verzeichnisse/Dateien daraus ins rechte Fenster (*Remote site*) verschieben (**Bereich 4** und **5** wie im Abschnitt [Interface Übersicht](#interface) dieses Tutorials dargestellt).

Achten Sie darauf, das Zielverzeichnis im rechten Fenster auszuwählen.

Sobald diese Aktion abgeschlossen ist, werden Ihre Dateien automatisch in die Warteschlange gestellt und auf dem Server abgelegt.

![Hosting](/pages/assets/screens/other/web-tools/filezilla/drag-drop-en.png){.thumbnail}

### 4 - Weitere Funktionen von FileZilla

**Klicken Sie auf die Abschnitte unten, um deren Inhalt anzuzeigen.**

/// details | Warteschlange (Queue)

Sie finden die Warteschlange-Anzeige im Bereich **6**, wie im Abschnitt [Interface Übersicht](#interface) dieses Tutorials dargestellt.

Hier finden Sie:

- Dateien, die auf dem Remote-Server gespeichert werden sollen und sich noch in der Warteschlange befinden.
- Dateien, bei denen der Transfer fehlgeschlagen ist.
- Dateien, für die der Transfer zum Remote-Server erfolgreich war.

![Hosting](/pages/assets/screens/other/web-tools/filezilla/waiting-list-view.png){.thumbnail}

///

/// details | Kontextmenü Server

Klicken Sie mit der rechten Maustaste auf eine der Dateien in Bereich **5** (wie im Abschnitt [Interface Übersicht](#interface) dieses Tutorials dargestellt).

Es erscheint ein Kontextmenü mit mehreren Optionen:

- **Download**: Herunterladen der Datei in den lokalen Ordner.
- **Add files to queue**: Fügt die Datei zur Warteschlange hinzu damit Sie zum Beispiel das Hochladen der Dateien verschieben können.
- **View/Edit**: Erlaubt es, eine Datei auf Ihrem Hosting anzuzeigen oder direkt zu bearbeiten. Sie müssen jedoch lokal über ein Programm verfügen, das die Datei lesen kann.
- **Create directory**: Erlaubt es, einen neuen Ordner direkt auf Ihrem Hosting zu erstellen.
- **Refresh**: Aktualisiert die Anzeige, um eine aktuelle Ansicht der Dateien zu erhalten.
- **Delete**: Erlaubt es, die ausgewählte Datei zu löschen.
- **Rename**: Erlaubt es, die ausgewählte Datei umzubenennen.
- **Copy URL(s) to clipboard**: Erlaubt es, den Direktlink zur Datei automatisch zu kopieren. Beispiel einer so generierten URL: `ftp://loginftp@ftp.clusterXXX.hosting.ovh.net/www/VERZEICHNIS/dateiname.jpg`.
- **File permissions...**: Erlaubt es, die Dateiberechtigungen zu bearbeiten (**chmod**).

![Hosting](/pages/assets/screens/other/web-tools/filezilla/contextual-menu-server.png){.thumbnail}

///

/// details | Zugriffsrechte auf Dateien und Ordner (CHMOD)

Klicken Sie mit der rechten Maustaste auf eine der auf dem Server vorhandenen Dateien und wählen Sie `File permissions...`{.action}.

Sie können so die Zugriffsrechte (*chmod*) für Dateien und Ordner auf dem Hosting ändern.

Im Allgemeinen ist es einfacher, *chmod*-Berechtigungen mit einem dreistelligen numerischen Wert (bestehend aus 3 Ziffern von 0 bis 7) zu verwalten. Die Berechtigungen können dann zwischen `000` (keine Rechte) und `777` (alle Rechte) genau festgelegt werden.

> [!alert]
>
> Es wird nicht empfohlen, Berechtigungen auf "*chmod* 000" für Ihre Ordner oder Dateien zu setzen. Sie können diese dann auch als FTP-Administrator nicht mehr verwalten.
>
> Das Gleiche gilt für die Berechtigungen "*chmod* 777", da in diesem Fall jeder Zugreifende den Ordner oder die Datei bearbeiten kann, was eine erhebliche Sicherheitslücke für Ihre gehosteten Daten bedeutet.
>

Die erste der drei Ziffern, die *chmod*-Rechte definieren, entspricht den Rechten des Inhabers/Administrators, die zweite den Rechten für Gruppen (die selten genutzt werden und in der Regel auf 0 gesetzt sind) und die dritte den Besuchern Ihrer gehosteten Website.

Wir empfehlen generell, die *chmod*-Rechte **705** für Ordner und die *chmod*-Rechte **604** für Dateien nicht auszuweiten.

Je höher die Zahl, desto höher die Berechtigungen.

![Hosting](/pages/assets/screens/other/web-tools/filezilla/change-file-attributes.png){.thumbnail}

Geben Sie die Berechtigungen ein, die Sie zuweisen möchten. Der *chmod*-Wert wird automatisch geupdatet.

Sie können die Option “Recurse into subdirectories” aktivieren, um nicht nur die Rechte des betreffenden Ordners, sondern auch die der Ordner und Dateien innerhalb dieses Ordners zu ändern.

///

/// details | Eine blockierte Website wieder freischalten

> [!primary]
>
> Unabhängig von einer Aktion Ihrerseits kann Ihr Hosting automatisch deaktiviert werden, wenn unsere Sicherheitssysteme schädliche oder nicht autorisierte Dateien auf Ihrem Hosting erkennen.
>
> [Sichern Sie dann Ihre Dienste](/pages/web_cloud/web_hosting/diagnostic_403_forbidden#step-2) und beheben Sie dabei die Sicherheitslücken, die in der per E-Mail erhaltenen Benachrichtigung erwähnt werden.
>

Klicken Sie anschließend auf `Server`{.action} und wählen Sie `Enter custom command`{.action} (diese Option kann auch als `Enter FTP command`{.action} bezeichnet sein).

Geben Sie folgenden Befehl ein:

```bash
SITE CHMOD 705 /
```

> [!warning]
>
> Dieser Befehl ist nicht per SFTP funktionsfähig.
>

![Hosting](/pages/assets/screens/other/web-tools/filezilla/site-chmod-705-command.png){.thumbnail}

Wenn Sie den Fehler `550 would not change perms on /. no such file or directory` erhalten, verwenden Sie folgenden Befehl:

```bash
SEITE CHMOD 705 .
```

> [!primary]
>
> Um zu überprüfen, ob die Freischaltung erfolgreich war, öffnen Sie Ihre Website nach einigen Minuten im Webbrowser.
>

> [!warning]
>
> Überprüfen Sie die Webseiten-Anzeige nach 3 Stunden.<br>
> Unsere Roboter prüfen alle 3 Stunden auf Statusänderungen.<br>
> Je nachdem, wann die oben genannte Änderung durchgeführt wird, kann die Wiederherstellung der Anzeige Ihrer Website daher mehr oder weniger schnell erfolgen.<br>
> Wenn die 3-Stunden-Frist abgelaufen ist und Ihre Website noch nicht online ist, stellen Sie sicher, dass der eingegebene Befehl erfolgreich übernommen wurde, indem Sie die Operation wiederholen.<br>
> Wenn dies auch nicht funktioniert, kontaktieren Sie unseren Support.
> 

///

/// details | Transfer von Binärdateien 

Bei binären Dateien, wie z.B. **CGI**-Dateien, kann es von Interesse sein, wie der Transfer ausgeführt wird.

Um den Transfertyp zu ändern, wählen Sie `Transfer`{.action} im Hauptmenü und dann `Transfer type`{.action}.

![Hosting](/pages/assets/screens/other/web-tools/filezilla/transfert-binary-files.png){.thumbnail}

///

/// details | Ordnervergleich

![Hosting](/pages/assets/screens/other/web-tools/filezilla/comparison-tool.png){.thumbnail}

Die Option zum Ordnervergleich von Dateien aktiviert farbkodierte Ansichten in den **Bereichen 4** und **5** (wie im Abschnitt [Interface Übersicht](#interface) dieses Tutorials dargestellt). Mit dieser Option können Sie Unterschiede zwischen lokalen Dateien und Ordnern und denen auf dem Server erkennen. 

Wenn Sie mit der rechten Maustaste auf das Icon klicken, können Sie den Vergleichsmodus ändern. Sie können die Option aktivieren und deaktivieren, und darüber hinaus:

- Die Dateigröße vergleichen.
- Zeitstempel vergleichen.
- Die identischen Dateien ausblenden.

**Bedeutung der Farbkodierung**:

- Gelb: Die Datei existiert nur auf einer Seite.
- Grün: Die Datei ist aktueller als die farblose Datei auf der anderen Seite.
- Rot: Die Dateigrößen sind unterschiedlich.

///

## Weiterführende Informationen <a name="go-further"></a>

Sie finden [hier unsere Anleitung zur Behebung von Fehlern bei der Verwendung eines FTP-Programms](/pages/web_cloud/web_hosting/ftp_recurring_ftp_problems).

Sie finden [hier alle unsere Hilfen zu Webhostings](/products/web-cloud-hosting).

Die offizielle Website von FileZilla finden Sie [hier](https://filezilla-project.org/).

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.