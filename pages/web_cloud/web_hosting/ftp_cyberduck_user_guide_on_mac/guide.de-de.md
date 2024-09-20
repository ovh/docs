---
title: "Tutorial - Cyberduck mit einem Webhosting verwenden"
excerpt: "Erfahren Sie hier, wie Sie die Software Cyberduck verwenden, um sich mit Ihrem OVHcloud Webhosting zu verbinden"
updated: 2024-02-26
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Cyberduck ist eine Open-Source-Anwendung zur Dateiübertragung und steht für macOS und Windows zur Verfügung. Damit können Sie sich mit dem FTP-Speicherplatz Ihres Webhostings verbinden (per FTP oder SFTP).

Um Cyberduck herunterzuladen, gehen Sie auf die [offizielle Website](https://cyberduck.io/).

![hosting](/pages/assets/screens/other/web-tools/cyberduck/logo.png){.thumbnail}

> [!primary]
>
> - Cyberduck ist eine Anwendung, die für macOS und Windows verfügbar ist. Da Cyberduck's Oberfläche und Funktionen auf beiden Betriebssystemen ähnlich sind, kann das Tutorial universell angewendet werden, auch wenn es auf Screenshots der Windows-Version basiert.
> - Dieses Tutorial wurde mit der freien Version 8.7.2 erstellt, bezogen von der [offiziellen Website](https://cyberduck.io/).
>

> [!warning]
>
> OVHcloud stellt Ihnen Dienste zur Verfügung, für deren Konfiguration, Verwaltung und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit in Ihrer Verantwortung, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Sie bei gängigen Aufgaben bestmöglich zu begleiten. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](/links/partner) und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bieten wir leider keine Unterstützung. Weitere Informationen finden Sie im Abschnitt [Weiterführende Informationen](#go-further) dieser Anleitung.
>

## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](/links/web/hosting).
- Sie haben Cyberduck heruntergeladen und installiert.

## In der praktischen Anwendung

### Interface

Wenn Sie die Anwendung starten, wird das folgende Interface angezeigt.

- Der obere Teil, der in orange umrandet ist, entspricht der Symbolleiste. Von hier aus können Sie sich mit Ihrem Webhosting-Speicherplatz verbinden, die Ordnerstruktur Ihrer Dateien und Ordner navigieren, den Aktionsverlauf einsehen und andere Aktionen durchführen.
- Der untere Bereich zeigt den Inhalt, den Sie anzeigen möchten. Wenn Sie z.B. auf das Symbol `History`{.action} klicken, wird eine Liste Ihrer Aktionen angezeigt.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/start-page.png){.thumbnail}

### Die Anzeige von Cyberduck personalisieren

Sie können die Anzeige von Cyberduck anpassen, um es effektiver und individuell zu gestalten.

Klicken Sie im Hauptmenü ganz oben auf `View`{.action} und dann auf `Customize Toolbar...`{.action}.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/customize-toolbar.png){.thumbnail}

Ziehen Sie im angezeigten Fenster die gewünschten Elemente auf die Symbolleiste. Wenn Sie beispielsweise die Funktion `Download`{.action} in die Symbolleiste einfügen möchten, ziehen Sie das Symbol `Download`{.action} auf die Symbolleiste. Um die Änderungen zu übernehmen, klicken Sie auf `Done`{.action}.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/customize-display.png){.thumbnail}

### Cyberduck verwenden

#### SFTP-Verbindung

> [!warning]
>
> Aus Sicherheitsgründen wird die Verwendung von FTP nicht empfohlen. Die meisten Betriebssysteme lassen keine FTP-Verbindung mehr zu. Verwenden Sie stattdessen eine SFTP-Verbindung.
>

Um sich mit Ihrem Webhosting-Speicherplatz zu verbinden, folgen Sie diesen Schritten:

**1.** Klicken Sie in der Symbolleiste auf `Open Connection`{.action}.

**2.** Wählen Sie im Dropdown-Menü (orangefarbener Rahmen des Bildes) `SFTP (SSH File Transfer Protocol)`{.action} aus.

**3.** Geben Sie die Verbindungsinformationen zu Ihrem FTP-Bereich ein:

- Server (Servername)
- Username (Benutzername)
- Password (Passwort)
- Port (22)

![hosting](/pages/assets/screens/other/web-tools/cyberduck/sftp-connection.png){.thumbnail}

> [!success]
>
> - Sie können Ihr Passwort in Cyberduck speichern, indem Sie `Add to keychain`{.action} auswählen. Wenn Sie die Option nicht aktivieren, müssen Sie das Passwort eingeben, um sich erneut mit Ihrem Webhosting-Speicherplatz zu verbinden.
> - Wenn Sie nicht alle Ihre FTP-Informationen (Server, Login-Daten, etc.) kennen, lesen Sie die Anleitung „[Mit dem FTP-Speicherplatz Ihres Webhostings verbinden](/pages/web_cloud/web_hosting/ftp_connection)“.
> 

Wenn Sie sich zum ersten Mal mit Ihrem Webhosting verbinden, erscheint ein Fenster mit dem Titel `Modified fingerprint`{.action}. Aktivieren Sie die Option `Always`{.action} und bestätigen Sie. So können Sie den Verbindungshost (OVHcloud) dauerhaft zertifizieren.

> [!success]
>
> - Wir empfehlen die Verwendung von Bookmarks zur Speicherung von Login-Daten. Auf diese Weise können Sie alle für eine individuelle Verbindung erforderlichen Informationen beibehalten.
> - Lesen Sie diesen Teil der Anleitung: [Was sind Bookmarks?](#signet)
> 

#### Anmeldefehler

Beim Versuch, sich in Ihrem Webhosting-Bereich einzuloggen, kann ein Fehler auftreten. Dies sind die 2 häufigsten Fehler, die auftreten können:

- `Connection failed (<server-SFTP>) - DNS lookup for <server> failed`

In den meisten Fällen hängt dieser Fehler mit falsch eingegebenen Login-Daten zusammen. Überprüfen Sie daher die eingegebenen Verbindungsinformationen.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/open-session-failed.png){.thumbnail}

> [!success]
>
> - Wenn Sie nicht alle Ihre FTP-Informationen (Server, Login-Daten, etc.) kennen, lesen Sie die Anleitung „[Mit dem FTP-Speicherplatz Ihres Webhostings verbinden](/pages/web_cloud/web_hosting/ftp_connection)“.
> 

- `Connection failed (<server-SFTP>) - Operation timed out`

Die Nachricht `Operation timed out` weist normalerweise darauf hin, dass der Host nicht erreichbar oder fehlerhaft ist. Prüfen Sie die eingegebenen Login-Daten.

Dieser Fehler kann auch durch eine Firewall oder ein lokales Netzwerk verursacht werden, die bzw. das Port 21 oder 22 blockiert, die zum Herstellen einer Verbindung mit dem Server verwendet werden. Überprüfen Sie in diesem Fall Ihre lokalen Einstellungen.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/connection-failed.png){.thumbnail}

> [!primary]
>
> - Zur Erinnerung: Der Login-Host für Ihren Hosting-Bereich ist `ftp.cluster0XX.hosting.ovh.net` (ersetzen Sie `XXX` durch Ihre Cluster-Nummer).
> - Lesen Sie bei Bedarf die Anleitung „[Mit dem FTP-Speicherplatz Ihres Webhostings verbinden](/pages/web_cloud/web_hosting/ftp_connection)“.
>

<a name="signet"></a>

### Was sind Bookmarks?

Um den Zugriff auf Ihren Webhosting-Bereich zu erleichtern, empfehlen wir die Verwendung von Bookmarks. Sie ermöglichen es, Ihre Verbindungsinformationen zu speichern, sodass Sie diese nicht bei jeder Verbindung eingeben müssen.

So fügen Sie Bookmarks hinzu:

1. Loggen Sie sich in den FTP-Speicherplatz Ihres Webhostings ein.
2. Klicken Sie oben in der Symbolleiste auf den Tab `Bookmarks`{.action} (orangefarbener Rahmen in der Abbildung unten).
3. Klicken Sie unten links im Fenster auf das Symbol `+`{.action}, um ein neues Bookmark hinzuzufügen.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/add-signet.png){.thumbnail}

Es wird ein Fenster mit Ihren Anmeldeinformationen und eine neue Zeile in der Bookmark-Liste angezeigt. Beim nächsten Start von Cyberduck können Sie auf das Bookmark doppelklicken, um sich schneller einzuloggen.

### Dateien übertragen

Mit der Dateiübertragung können Sie Ihre Website auf Ihrem Webhosting-Speicherplatz ablegen. Standardmäßig sollten Sie Ihre Dateien im Verzeichnis `www` ablegen. Sie können Ihre Dateien auf verschiedene Arten übertragen.

#### Per Drag & Drop

Um Ihre Dateien zu übertragen, wählen Sie diese aus und ziehen Sie sie aus dem Fenster des lokalen Ordners (Ihre Dateien auf Ihrem Computer) in das Fenster von Cyberduck (FTP-Speicherplatz Ihres Webhostings). Sobald diese Aktion abgeschlossen ist, werden Ihre Dateien automatisch in die Warteschlange eingereiht und auf dem Server abgelegt. Es wird dann ein Fenster geöffnet.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/drag-drop-transfert-file.png){.thumbnail}

#### Über das Hauptmenü

Klicken Sie im Menü von Cyberduck auf `File`{.action} und dann auf `Upload...`{.action}. Wählen Sie die Dateien aus, die Sie auf den Server hochladen möchten, und klicken Sie auf `Upload`{.action}.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/transfert-files.png){.thumbnail}

### Laufende Übertragungen anzeigen

Sie können den Verlauf der durchgeführten Transfers zum FTP-Speicherplatz Ihres Webhostings einsehen. So finden Sie:

- Dateien, die auf das Ablegen auf dem Remote-Server warten (die sich noch in der Warteschlange befinden oder gesendet werden).
- Dateien, deren Übertragung fehlgeschlagen ist.
- Dateien, für die die Übertragung auf das Remote-Webhosting erfolgreich war.

Dieses Fenster wird auf zwei Arten angezeigt:

- Automatisch, wenn ein Transfer initiiert wird
- Indem Sie auf `Window`{.action} (im Hauptmenü), dann auf `Transfers`{.action} klicken

![hosting](/pages/assets/screens/other/web-tools/cyberduck/transfert-files-list.png){.thumbnail}

### Mögliche Aktionen für eine Datei oder einen Ordner

Doppelklicken Sie auf eine Datei oder einen Ordner, um die folgenden Aktionen auszuführen:

- Datei- oder Ordnerinformationen lesen und Berechtigungen ändern (CHMOD).
- Bearbeiten einer Datei mit der Anwendung Ihrer Wahl.
- Datei oder Ordner umbenennen.
- Datei oder Ordner löschen.
- Ausgewählte Elemente herunterladen.
- Erstellen von Ordner oder Dateien.

Die obige Liste ist nicht vollständig; es sind weitere Aktionen möglich. Falls nötig, besuchen Sie die [offizielle Website](https://cyberduck.io/) von Cyberduck.

### Nützliche Informationen

#### Datei- und Ordnerrechte

Sie können die Rechte (CHMOD) Ihrer Dateien und Ordner auf dem Webhosting ändern.

Sie sind in drei Berechtigungsklassen unterteilt:

- Owner (Inhaber)
- Group (Gruppe)
- Others (Andere)

Doppelklicken Sie auf eine Datei oder einen Ordner, und wählen Sie `Info`{.action} aus. Das folgende Fenster wird angezeigt:

![hosting](/pages/assets/screens/other/web-tools/cyberduck/transfert-files-list.png){.thumbnail}

Klicken Sie auf den Tab `Permissions`{.action} und nehmen Sie die gewünschten Änderungen vor:

- UNIX Permissions: Dieser Wert definiert die Rechte der Berechtigungsdreiergruppe (*Owner*, *Group* und *Others*).
- Aktivieren Sie die gewünschten Optionen über die Box: Der Wert wird automatisch für UNIX-Berechtigungen aktualisiert.

#### Website entsperren

Sie können Ihre Website mit einem benutzerdefinierten Befehl nach einer Sperrung wieder öffnen.

In den meisten Fällen ist diese Aktion notwendig, nachdem der FTP-Speicherplatz Ihres Webhostings von OVHcloud aus Sicherheitsgründen nach einem Hack gesperrt wurde.

Klicken Sie im Cyberduck-Menü auf `Go`{.action} und dann auf `Send Command...`{.action}.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/send-ftp-command.png){.thumbnail}

Fügen Sie im neuen Fenster den Befehl `CHMOD 705 /` ein und klicken Sie auf `Send`{.action}, um den Befehl auszuführen. Zur Bestätigung sollte im unteren Bereich die Meldung `200 Permissions changed on /` erscheinen.

Um zu überprüfen, ob die Entsperrung erfolgt ist, öffnen Sie Ihre Website in einem Browser.

![hosting](/pages/assets/screens/other/web-tools/cyberduck/site-chmod-705-command.png){.thumbnail}

> [!warning]
>
> - Dieser Befehl funktioniert über SFTP nicht. Verwenden Sie hierzu eine FTP-Verbindung.
> - Unsere Bots überprüfen alle 3 Stunden auf Statusänderungen; es ist daher nicht ungewöhnlich, dass die Entsperrung nicht sofort wirksam wird.
> - Wenn die 3-Stunden-Frist abgelaufen ist und Ihre Website immer noch nicht online ist, wenden Sie sich an den OVHcloud Support.
>

## Weitere Informationen <a name="go-further"></a>

[Tutorial - FileZilla mit Ihrem OVHcloud Hosting verwenden](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Treten Sie unserer [User Community](/links/community) bei.
