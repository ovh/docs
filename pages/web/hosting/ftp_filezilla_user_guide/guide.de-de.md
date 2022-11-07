---
title: "Tutorial - FileZilla mit Ihrem OVHcloud Hosting nutzen"
slug: webhosting_hilfe_zur_verwendung_von_FileZilla
excerpt: "Verwendung der FileZilla Software mit Ihrem Webhosting"
section: FTP und SSH
order: 01
---

> [!primary]
>
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 13.09.2022**

## Ziel 

FileZilla ist ein FTP-Client, der für mehrere Betriebssystemen (Windows, macOS etc.) kostenlos zur Verfügung steht.

Sie können damit Dateien bzw. Ihre Websiten online stellen, indem Sie sich im [FTP-Bereich Ihres Hostings einloggen](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/).

**In dieser Anleitung erfahren Sie, wie Sie FileZilla mit Ihrem Webhosting verwenden.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/) zu kontaktieren oder Ihre Fragen in der OVHcloud Community zu stellen. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

## Voraussetzungen

- Sie haben ein [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie haben FileZilla auf Ihrem Gerät installiert. Das Programm ist kostenlos verfügbar auf der offiziellen Seite: [filezilla-project.org](https://FileZilla-project.org/download.php){.external}

## Interface Übersicht <a name="interface"></a>

![Hosting](images/1818.png){.thumbnail}

- Die obere Leiste (`Quickconnect`{.action}) ermöglicht die schnelle Verbindung zu Ihrem Hosting, indem Sie den **Hostnamen**, den **Benutzernamen**, das zugehörige **Passwort** und die verwendete **Port-Nummer** eintragen.
- **Bereich 1**: Details zur Transferhistorie, Verbindung zum FTP Bereich, Dateitransfers, Fehlern etc. Weitere Informationen finden Sie in der offiziellen [FileZilla Dokumentation](https://filezilla-project.org/){.external}.
- **Bereich 2**: Ordnerstruktur der lokalen Verzeichnisse/Dateien auf Ihrem Computer.
- **Bereich 3**: Ordnerstruktur der Verzeichnisse/Dateien auf Ihrem Hosting.
- **Bereich 4**: Liste der Verzeichnisse/Dateien in Ihrem lokal ausgewählten Verzeichnis.
- **Bereich 5**: Liste der Verzeichnisse/Dateien in dem auf Ihrem Hosting ausgewählten Verzeichnis.
- **Bereich 6**: Liste der laufenden, ausstehenden oder fehlerhaften Transfervorgänge zwischen Ihrem Computer und Ihrem Hosting.

## In der praktischen Anwendung

### FTP-Verbindungen mit FileZilla

![Hosting](images/quickcnt.png){.thumbnail}

Tragen Sie die nötigen Details in die Schnellverbindungsleiste mithilfe der folgenden Tabelle ein:

|Anzugebender Wert|Beschreibung|
|---|---|
|Host|Serveradresse, die den Zugriff auf den Speicherplatz Ihres Hostings ermöglicht.<br><br> Bei Webhostings hat sie in der Regel folgende Form: `ftp.clusterXXX.hosting.ovh.net` (wobei `XXX` für die Cluster-Nummer Ihres Hostings steht).|
|User|Diese Kennung erlaubt Ihnen den Zugriff auf den Speicherplatz Ihres Hostings.|
|Password|Passwort des FTP-Benutzers.|
|Port|Wird in der Regel automatisch durch die Software ergänzt. Wenn nicht, geben Sie ein:<br><br>\- Port `21` für eine FTP Verbindung.<br>\- Port `22` für eine SFTP-Verbindung (falls aktiviert). Weitere Informationen zu SFTP finden Sie [weiter unten in diesem Tutorial](#sftp).|

Falls diese Informationen nicht vorliegen, loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und klicken Sie dann auf `Hosting-Pakete`{.action}. Wählen Sie das betreffende Hosting aus und gehen Sie dann auf den Tab `FTP - SSH`{.action}. Die Informationen zu Ihrem Speicherplatz werden dort angezeigt.

![Hosting](images/loginFTP-SSH.png){.thumbnail}

> [!warning]
>
> Einige OVHcloud Angebote verwenden Port 22 nicht für SFTP- und/oder SSH-Verbindungen. Im Zweifel verwenden Sie die Ports, die in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} zu finden sind.
>

Wenn Sie alle Werte eingetragen haben wie im Bild zu sehen, klicken Sie auf `Quickconnect`{.action}.

![Hosting](images/1819.png){.thumbnail}

Wenn die Verbindung erfolgreich hergestellt wurde, werden Sie über den Status im Bereich **2** informiert. So können Sie Ihre Verzeichnisse und Dateien auf Ihrem Hosting einsehen (Bereich **3**).

### Verbindung mit SFTP in FileZilla <a name="sftp"></a>

Das Protokoll **SFTP** (**S**ecure **F**ile **T**ransfer **P**rotocol) ist nahezu identisch mit **FTP**, verwendet aber (wie SSH) standardmäßig Port 22 statt Port 21. Wenn Sie ein Cloud Web Hosting-Angebot verwenden, verwenden Sie den Port, der in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} angezeigt wird. Port 22 ist aus Sicherheitsgründen für Cloud Web Hostings deaktiviert und kann daher nicht für Verbindungen über SSH oder SFTP verwendet werden.

> [!success]
>
> SFTP ist für alle Hosting-Dienste von OVHcloud kostenlos aktivierbar (außer bei den alten 60free/demo1g Angeboten).
> 

#### Aktivierung von SFTP überprüfen

Überprüfen Sie zuerst, dass SFTP für Ihren **FTP**-Login aktiviert ist.

Gehen Sie in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} in den Bereich "Web Cloud" und klicken Sie dann auf `Hosting-Pakete`{.action}. Wählen Sie das betreffende Hosting aus und gehen Sie dann auf den Tab `FTP - SSH`{.action}.

Überprüfen Sie anschließend, ob **SFTP** in der Tabelle unten aktiv ist.

![SFTP Start Angebot aktivieren](images/enable_sftp_start.png){.thumbnail}

Falls **SFTP** nicht aktiviert ist:

- Klicken Sie auf den Button `...`{.action} rechts neben der Tabelle und dann auf `Bearbeiten`{.action}.

![SFTP 1 Aktivierung](images/enable_sftp_1.png){.thumbnail}

- Überprüfen Sie im neu angezeigten Fenster, ob eine der folgenden Optionen aktiviert ist:
    - **FTP und SFTP**: Um SFTP zusätzlich zu FTP zu aktivieren.
    - **FTP, SFTP und SSH**: Um FTP, SFTP und SSH zu aktivieren.

![SFTP 2 Aktivierung](images/enable_sftp_2.png){.thumbnail}

- Klicken Sie auf `Weiter`{.action} und dann auf `Bestätigen`{.action}.

#### SFTP-Verbindung aufbauen

![Hosting](images/quickcnt.png){.thumbnail}

Geben Sie in der Verbindungsleiste folgende Werte ein, um die Verbindung zum Remote-Server (Ihrem Hosting) herzustellen:

- Host: `ftp.clusterXXX.hosting.ovh.net` (Ersetzen Sie `XXX` durch die Nummer Ihres Hosting-Clusters.)
- ID: Ihr FTP-Login
- Password: Das dem FTP-Benutzer zugewiesene Passwort
- Port: 22

Nachdem Sie auf den Button `Quickconnect`{.action} geklickt haben, öffnet sich eine Dialogbox (siehe unten stehende Abbildung), um die herzustellende Verbindung mit dem Host zu bestätigen. Wenn Sie sich auf einem OVHcloud Webhosting einloggen, können Sie die Option *Always trust this host, add this key to the cache*, um diese Bestätigung für nachfolgende Verbindungen zu deaktivieren.

![Hosting](images/1834.png){.thumbnail}

### Verbindungsfehler

Die unten abgebildete Nachricht zeigt einen Authentifizierungsfehler bei der Verbindung mit einem Webhosting per FTP oder SFTP an:

![Hosting](images/1820.png){.thumbnail}

Diese Nachricht entsteht durch einen Fehler beim eingegebenen Login/Passwort.

Überprüfen Sie Ihre Zugangsdaten, um sicherzustellen, dass diese korrekt sind. Nötigenfalls können Sie das Passwort des FTP-Zugangs für Ihr Hosting direkt im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ändern.

> [!success]
> Sie finden genauere Informationen dazu in der [Anleitung zur Änderung des FTP-Passworts](https://docs.ovh.com/de/hosting/ftp-benutzer-passwort-aendern/).

Im folgenden Fall wird der Fehler aufgrund eines falschen Hostnamens generiert:

![Hosting](images/1824.png){.thumbnail}

Überprüfen Sie diesen anhand des in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} angezeigten Hostnamens.

### Dateitransfer

Um Ihre Dateien per FTP zu übertragen, können Sie diese im linken Fenster (*Local site*) auswählen und Verzeichnisse/Dateien daraus ins rechte Fenster (*Remote site*) verschieben (**Bereich 4** und **5** wie im Abschnitt [Interface Übersicht](#interface) dieses Tutorials dargestellt).

Achten Sie darauf, das Zielverzeichnis im rechten Fenster auszuwählen.

Sobald diese Aktion abgeschlossen ist, werden Ihre Dateien automatisch in die Warteschlange gestellt und auf dem Server abgelegt.

![Hosting](images/drag-drop-en.png){.thumbnail}

### Warteschlange (Queue)

Sie finden die Warteschlange-Anzeige im Bereich **6**, wie im Abschnitt [Interface Übersicht](#interface) dieses Tutorials dargestellt.

Hier finden Sie:

- Dateien, die auf dem Remote-Server gespeichert werden sollen und sich noch in der Warteschlange befinden.
- Dateien, bei denen der Transfer fehlgeschlagen ist.
- Dateien, für die der Transfer zum Remote-Server erfolgreich war.

![Hosting](images/1822.png){.thumbnail}

### Kontextmenü Server

Klicken Sie mit der rechten Maustaste auf eine der Dateien in Bereich **5** (wie im Abschnitt [Interface Übersicht](#interface) dieses Tutorials dargestellt).

Es erscheint ein Kontextmenü mit mehreren Optionen:

- **Download**: Herunterladen der Datei in den lokalen Ordner.
- **Add files to queue**: Fügt die Datei zur Warteschlange hinzu damit Sie zum Beispiel das Hochladen der Dateien verschieben können.
- **View/Edit**: Erlaubt es, eine Datei auf Ihrem Hosting anzuzeigen oder direkt zu bearbeiten. Sie müssen jedoch lokal über ein Programm verfügen, das die Datei lesen kann.
- **Create directory**: Erlaubt es, einen neuen Ordner direkt auf Ihrem Hosting zu erstellen.
- **Refresh**: Aktualisiert die Anzeige, um eine aktuelle Ansicht der Dateien zu erhalten.
- **Delete**: Erlaubt es, die ausgewählte Datei zu löschen.
- **Rename**: Erlaubt es, die ausgewählte Datei umzubenennen.
- **Copy URL(s) to clipboard**: Erlaubt es, den Direktlink zur Datei automatisch zu kopieren. Beispiel einer so generierten URL: `ftp://loginftp@ftp.clusterXXX.hosting.ovh.net/www/VERZEICHNIS/dateiname.jpg`
- **File permissions...**: Erlaubt es, die Dateiberechtigungen zu bearbeiten (**chmod**).

![Hosting](images/1830.png){.thumbnail}

## Nützliche Informationen <a name="useful-information"></a>

### Zugriffsrechte auf Dateien und Ordner (CHMOD)

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

Wir empfehlen generell, die *chmod*-Rechte **705** für Ordner und die *chmod*-Rechte **604** für Dateien nicht zu überschreiten.

Je höher die Zahl, desto größer die Berechtigungen.

![Hosting](images/1831.png){.thumbnail}

Geben Sie die Berechtigungen ein, die Sie zuweisen möchten. Der *chmod*-Wert wird automatisch geupdatet.

Sie können die Option “Recurse into subdirectories” aktivieren, um nicht nur die Rechte des betreffenden Ordners, sondern auch die der Ordner und Dateien innerhalb dieses Ordners zu ändern.

### Eine blockierte Website wieder freischalten

> [!primary]
>
> Unabhängig von einer Aktion Ihrerseits kann Ihr Hosting automatisch deaktiviert werden, wenn unsere Sicherheitssysteme schädliche oder nicht autorisierte Dateien auf Ihrem Hosting erkennen.
>
> [Sichern Sie dann Ihre Dienste](https://docs.ovh.com/de/hosting/diagnose-403-forbidden/) und korrigieren Sie dabei die Sicherheitslücken, die in der per E-Mail erhaltenen Blockierungsbenachrichtigung erwähnt werden.
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

![Hosting](images/1829.png){.thumbnail}

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
> Überprüfen Sie die Webseiten-Anzeige nach maximal 3 Stunden.<br>
> Unsere Roboter prüfen mindestens alle 3 Stunden auf Statusänderungen.<br>
> Je nachdem, wann die oben genannte Änderung durchgeführt wird, kann die Wiederherstellung der Anzeige Ihrer Website daher mehr oder weniger schnell erfolgen.<br>
> Wenn die 3-Stunden-Frist abgelaufen ist und Ihre Website noch nicht online ist, stellen Sie sicher, dass der eingegebene Befehl erfolgreich übernommen wurde, indem Sie die Operation wiederholen.<br>
> Wenn dies auch nicht funktioniert, kontaktieren Sie unseren Support.
> 

### Transfer von Binärdateien 

Bei binären Dateien, wie z.B. **CGI**-Dateien, kann es von Interesse sein, wie der Transfer ausgeführt wird.

Um den Transfertyp zu ändern, wählen Sie `Transfer`{.action} im Hauptmenü und dann `Transfer type`{.action}.

![Hosting](images/1832.png){.thumbnail}

### Ordnervergleich

![Hosting](images/1823.png){.thumbnail}

Die Option zum Ordnervergleich von Dateien aktiviert farbkodierte Ansichten in den **Bereichen 4** und **5** (wie im Abschnitt [Interface Übersicht](#interface) dieses Tutorials dargestellt). Mit dieser Option können Sie Unterschiede zwischen lokalen Dateien und Ordnern und denen auf dem Server erkennen. 

Wenn Sie mit der rechten Maustaste auf das Icon klicken, können Sie den Vergleichsmodus ändern. Sie können die Option aktivieren und deaktivieren, und darüber hinaus:

- Die Dateigröße vergleichen.
- Zeitstempel vergleichen.
- Die identischen Dateien ausblenden.

**Bedeutung der Farbkodierung**:

- Gelb: Die Datei existiert nur auf einer Seite.
- Grün: Die Datei ist aktueller als die farblose Datei auf der anderen Seite.
- Rot: Die Dateigrößen sind unterschiedlich.

## Weiterführende Informationen <a name="go-further"></a>

Sie finden [hier unsere Anleitung zur Behebung von Fehlern bei der Verwendung eines FTP-Programms](https://docs.ovh.com/de/hosting/webhosting_haufige_ftp-probleme/).

Im Allgemeinen finden Sie [hier alle unsere Hilfen zu Webhostings](https://docs.ovh.com/de/hosting/).

Die offizielle Website von FileZilla finden Sie [hier](https://filezilla-project.org/).

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
