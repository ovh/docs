---
title: 'Tutorials - FileZilla mit Ihrem OVHcloud Hosting nutzen'
slug: webhosting_hilfe_zur_verwendung_von_filezilla
excerpt: 'Hier finden Sie ein Tutorial zur Verwendung der Filezilla Software auf Ihrem Webhosting.'
section: 'FTP und SSH'
order: 04
---

> [!primary]
>
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 13.09.2022**

## Ziel

FileZilla ist ein Programm, das auf mehreren Betriebssystemen (Windows, macOS etc.) kostenlos zur Verfügung steht.
Es erlaubt es, Dateien oder Ihre Website online zu stellen, indem Sie sich [mit dem FTP-Bereich Ihres](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/) Hostings verbinden.

**In dieser Anleitung erfahren Sie, wie Sie Filezilla auf Ihrem Webhosting verwenden.**

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen dieses Tutorial zur Verfügung, um Sie bei alltäglichen Aufgaben bestmöglich zu unterstützen. Dennoch empfehlen wir Ihnen, falls Sie [Hilfe brauchen](https://partner.ovhcloud.com/de/), einen spezialisierten Dienstleister und/oder den Herausgeber der Software zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Weitere Informationen finden Sie im Abschnitt ["Weiterführende Informationen"](#go-further)in dieser Anleitung.
> 

## Voraussetzungen

- Sie sind in Ihrem [OVHcloud-Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de)angemeldet.
- Sie haben ein [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external}.
- Sie haben das Filezilla-Programm auf Ihrem Computer installiert. Diese ist kostenlos verfügbar auf der Seite [filezilla-project.org](https://filezilla-project.org/download.php){.external}

## Vorstellung des Interface <a name="interface"></a>

![Hosting](images/1818.png){.thumbnail}

- Der gehostete **Bereich** ermöglicht eine schnelle Verbindung zu Ihrem Hosting, indem **Sie Ihren Hostnamen, den **Benutzernamen**, das zugehörige** Passwort** und die verwendete **Port-Nummer** ** angeben.
- **Zone 1**\: Details zur Transaktionshistorie, Verbindung zum FTP Bereich, Dateitransfers, Fehlern usw. Weitere Informationen finden Sie in der offiziellen [Filezilla Dokumentation](https://filezilla-project.org/){.external}.
- **Zone 2**: Ordnerstruktur der lokalen Verzeichnisse/Dateien auf Ihrem Computer.
- **Zone 3**: Ordnerstruktur entfernter Verzeichnisse/Dateien, wenn Sie mit Ihrem Hosting verbunden sind.
- **Zone 4**: Liste der Verzeichnisse/Dateien in dem auf Ihrem Computer lokal ausgewählten Verzeichnis.
- **Zone 5**: Liste der entfernten Verzeichnisse/Dateien in dem auf Ihrem Hosting ausgewählten Verzeichnis.
- **Zone 6**: Liste der laufenden, ausstehenden oder fehlerhaften Transfervorgänge zwischen Ihrem Computer und Ihrem Hosting.

## In der praktischen Anwendung

### Verbindung mit Filezilla per FTP

![Hosting](images/quickcnt.png){.thumbnail}

Vervollständigen Sie die Informationen über die Schnellverbindungsleiste in der folgenden Tabelle:

|Anzugebende Information|Beschreibung|
|---|---|
|Host| Serveradresse, die den Zugriff auf den Speicherplatz Ihres Hostings ermöglicht.<br><br> Bei Shared Hosting Paketen hat es in der Regel folgende Form: `ftp.clusterXXX.hosting.ovh.net` (die `XXX` sind die Cluster-Nummer Ihres Hostings)|
|Benutzer|Diese Kennung erlaubt Ihnen den Zugriff auf den Speicherplatz Ihres Hostings.|
|Passwort|Passwort des Benutzers|
|Port|Sie wird in der Regel automatisch durch die Software ergänzt. Wenn nicht, geben Sie ein:<br><br>\- Port "21" für eine FTP Verbindung<br>\- den Port "22" für eine SFTP-Verbindung (falls aktiviert). Weitere Informationen zum SFTP finden Sie im [dedizierten Teil dieses Tutorials](#sftp).|

Wenn Sie nicht über diese Elemente verfügen, loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und klicken Sie dann auf `Hosting-Pakete`{.action}. Wählen Sie das betreffende Hosting aus und gehen Sie dann auf den Tab `FTP - SSH`{.action}. Die Informationen zu Ihrem Speicherplatz erscheinen:

![Hosting](images/loginFTP-SSH.png){.thumbnail}

> [!warning]
>
> Einige OVHcloud Angebote verwenden Port 22 nicht für SFTP- und/oder SSH-Verbindungen. Verwenden Sie die Ports, die in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external}angezeigt werden.
>

Wenn Sie alles korrekt in Kasten **1** des Images eingegeben haben, klicken Sie auf `Schnellverbindung`{.action}.

![Hosting](images/1819.png){.thumbnail}

Wenn die Verbindung erfolgreich hergestellt wurde, werden Sie über den Status in Kasten **2** des Images informiert. So können Sie Ihre Verzeichnisse/Ordner und Dateien auf Ihrem Hosting einsehen (Kasten **3**).

### Verbindung mit Filezilla via SFTP <a name="sftp"></a>

Das **SFTP** (für ****Secure ****File ****Transfer ****Protocol) ist ein FTP-ähnliches **Protokoll**. Wie beim SSH verwendet er standardmäßig Port 22 statt Port 21. Wenn Sie ein Cloud Web Hosting-Angebot verwenden, verwenden Sie den Port, der in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} angezeigt wird. Port 22 ist per SSH und SFTP für Cloud Web Hostings deaktiviert.

> [!success]
>
> SFTP ist für alle Hosting-Angebote von OVHcloud kostenlos aktivierbar (außer bei den alten 60free/demo1g Angeboten).
> 

#### Aktivierung von SFTP überprüfen

Überprüfen Sie zuerst, dass der SFTP für Ihren **FTP Login aktiviert ist**.

Gehen Sie in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external}, gehen Sie in den Bereich "Web Cloud"und klicken Sie dann auf `Hosting`{.action}. Wählen Sie das betreffende Hosting aus und gehen Sie dann auf den Tab `FTP - SSH`{.action}.

Überprüfen Sie anschließend, ob **SFTP** in der Tabelle unten aktiv ist.

![SFTP Start Angebot aktivieren](images/enable_sftp_start.png){.thumbnail}

Wenn nicht aktiv:

- Klicken Sie auf den Button `..`{.action}. rechts neben der Tabelle und dann auf `Editer`{.action}.

![SFTP 1 Aktivierung](images/enable_sftp_1.png){.thumbnail}

- Überprüfen Sie im angezeigten Fenster, ob eine der folgenden 2 Optionen aktiviert ist:
    - **FTP und SFTP**\: um ausschließlich den SFTP zusätzlich zum FTP zu aktivieren.
    - **FTP, SFTP und SSH**\: um FTP, SFTP und SSH zu aktivieren.

![SFTP 2 Aktivierung](images/enable_sftp_2.png){.thumbnail}

- Klicken Sie dann auf `Weiter`{.action} und dann auf `Bestätigen`{.action}

#### Die SFTP Verbindung starten

![Hosting](images/quickcnt.png){.thumbnail}

Geben Sie im oberen Teil von Filezilla folgende Angaben ein, um die Verbindung zum Remote-Server (Hosting) herzustellen:

- Host: `ftp.clusterXXX.hosting.ovh.net` (denken Sie daran, die `X`-Werte durch die Werte Ihres Hosting-Clusters zu ersetzen)
- Kennung: Ihren FTP Login
- Passwort: das dem Login zugewiesene FTP Passwort
- Port: 22

Nachdem Sie auf den Button `Schnelle`{.action} Verbindung geklickt haben, öffnet sich eine Dialogbox (siehe unten stehende Abbildung), um die Verbindung mit dem Host zu bestätigen, mit dem Sie sich verbinden möchten. Wenn Sie auf einem OVHcloud Host eingeloggt sind, können Sie das Kästchen *Immer diesem Host vertrauen, diesen Schlüssel zum Cache hinzufügen*, damit Sie ihn in Zukunft nicht mehr von der Software abfragen können.

![Hosting](images/1834.png){.thumbnail}

### Verbindungsfehler

Die unten angezeigte Nachricht zeigt einen Identifizierungsfehler bei der Verbindung mit dem Shared Hosting per FTP oder SFTP an:

![Hosting](images/1820.png){.thumbnail}

Dieser Nachrichtentyp wird durch einen Fehler im Paar Login / Passwort generiert.

Überprüfen Sie Ihre Zugangsdaten, um sicherzustellen, dass keine Fehler gemeldet werden. Wenn nötig können Sie das Passwort des FTP-Zugangs Ihres Hostings direkt im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ändern.

> [!success]
> Sie finden eine Anleitung zur [Änderung des FTP-Passworts](https://docs.ovh.com/de/hosting/ftp-benutzer-passwort-aendern/) bei den Webhosting-Angeboten.

Im folgenden Fall wird der Fehler durch einen falschen Hostnamen generiert:

![Hosting](images/1824.png){.thumbnail}

Überprüfen Sie diesen anhand des in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} angegebenen Hostnamens.

### Dateitransfer

Um Ihre Dateien per FTP zu übertragen, können Sie diese auswählen und Verzeichnisse/Dateien vom linken Fenster (*Computer)* zum rechten Fenster *(Hosting)* verschieben (**Zonen 4** und **5** im Abschnitt dieses Tutorials zum[ ](#interface) Filezilla-Interface).

Achten Sie darauf, das Zielverzeichnis im rechten Fenster auszuwählen.

Sobald diese Aktion abgeschlossen ist, werden Ihre Dateien automatisch in die Warteschlange gestellt und auf dem Server abgelegt.

![Hosting](images/drag-drop-en.png){.thumbnail}

### Ansicht zur Warteschleife

Eine Ansicht zur Warteschlange ist verfügbar (Zone **6**, beschrieben im Abschnitt dieses Tutorials über [das Filezilla-Interface](#interface)).

Hier finden Sie:

- Dateien, die auf dem Remote-Server gespeichert werden sollen und sich noch in der Warteschlange befinden
- Dateien, bei denen der Transfer fehlgeschlagen ist
- die Dateien, für die der Transfer auf dem Remote-Hosting erfolgreich ist.

![Hosting](images/1822.png){.thumbnail}

### Kontextmenü Server

Klicken Sie mit der rechten Maustaste auf eine der Dateien in Zone **5** (beschrieben im Abschnitt dieses Tutorials über [das Filezilla](#interface)-Interface).

Es erscheint ein kontextuelles Menü und es stehen Ihnen mehrere Optionen zur Verfügung:

- Herunterladen: laden Sie die Datei in den offenen lokalen Ordner herunter.
- Die Dateien zur Warteschlange hinzufügen: die Datei zur Warteschlange hinzufügen, damit Sie zum Beispiel den Download der Daten verschieben können.
- Anzeigen/Bearbeiten: erlaubt es Ihnen, eine Datei auf Ihrem Hosting anzuzeigen oder direkt zu bearbeiten. Sie müssen jedoch über ein Programm verfügen, das die auf Ihrem Computer installierte Datei lesen kann.
- Einen Ordner erstellen: erlaubt es Ihnen, einen neuen Ordner direkt auf Ihrem Hosting zu erstellen.
- Aktualisieren: aktualisiert die Anzeige der Daten, um die verschiedenen vorhandenen Dateien korrekt anzuzeigen.
- Löschen: erlaubt es Ihnen, die ausgewählte Datei zu löschen.
- Umbenennen: erlaubt es Ihnen, die ausgewählte Datei umzubenennen.
- Adresse(n) in die Zwischenablage kopieren: erlaubt es Ihnen, den direkten Link automatisch auf die ausgewählte Datei zu kopieren. Beispiel einer URL, die erstellt werden kann: `ftp://loginftp@ftp.cluster0XX.hosting.ovh.net/www/mondossier1/monfichier.jpg`
- Dateirechte: bietet Ihnen die Möglichkeit, die Dateirechte zu ändern (Chmod)

![Hosting](images/1830.png){.thumbnail}

## Nützliche Informationen

### Zugriffsrechte (Chmod) auf Dateien und Ordner

Klicken Sie mit der rechten Maustaste auf eine der auf dem Server vorhandenen Dateien und wählen Sie `Dateirechte ...`{.action}.

Sie können die Zugriffsrechte (Chmod) Ihrer Dateien und Ordner auf dem Hosting ändern.

Im Allgemeinen ist es einfacher, Chmod-Rechte mit dem Zahlenwert `XXX` zu verwalten (bestehend aus 3 Ziffern von 0 bis 7). Das Berechtigungspanel kann dann von `000` (kein Recht) bis `777` (alle Rechte) reichen.

> [!alert]
>
> Achtung, es wird nicht empfohlen, die Chmod 000 Rechte in Ihre Ordner oder Dateien einzutragen. Sie können dieses Element (auch als FTP-Administrator) nicht mehr verwalten.
>
> Das Gleiche gilt für die Chmod 777 Rechte, da im Gegensatz zu Chmod 000 jeder den Ordner oder die Datei bearbeiten kann, was eine erhebliche Sicherheitslücke für Ihre gehosteten Daten darstellt.
>

Die erste der drei Ziffern `XXX`, die den Chmod definieren, entspricht den Rechten des Inhabers/Administrators, die zweite den Rechten der Gruppen (die selten genutzt werden und in der Regel 0 entsprechen) und die dritte den Besuchern Ihrer Website auf Ihrem Hosting.

Standardmäßig empfehlen wir, die Chmod-Rechte **705** für Ordner und die Chmod-Rechte **604** für Dateien nicht zu überschreiten.

Je höher die Zahl, desto größer die Berechtigungen.

![Hosting](images/1831.png){.thumbnail}

Geben Sie die Berechtigungen ein, die Sie zuweisen möchten. Der Chmod-Wert wird automatisch geupdatet.

Sie können das Kästchen "Rekursion in den Unterordnern"ankreuzen.

Dadurch werden die Rechte des betreffenden Dossiers sowie der Akten und Dateien, die in diesem Dossier enthalten sein könnten, geändert.

### Wiederöffnung der Website

> [!primary]
>
> Unabhängig von einer Aktion Ihrerseits kann Ihr Hosting deaktiviert werden, sobald unsere Sicherheitssysteme böswillige oder nicht autorisierte Dateien auf Ihrem Hosting erkennen.
>
> Sichern Sie [Ihre Lösungen](https://docs.ovh.com/de/hosting/diagnose-403-forbidden/) ab und korrigieren Sie dabei die Sicherheitslücken, die in der per E-Mail erhaltenen Blockierungsbenachrichtigung erwähnt werden.
>

Klicken Sie anschließend auf `Server`{.action} und wählen Sie `Eine personalisierte Bestellung eingeben`{.action} (diese Option kann auch als `FTP-Befehl bezeichnet werden`{.action}).

Geben Sie folgenden Befehl ein:

```bash
SITE CHMOD 705 /
```

> [!warning]
>
> Dieser Befehl ist nicht per SFTP funktionsfähig.
>

![Hosting](images/1829.png){.thumbnail}

Wenn Sie den Fehler `550 would not perms on /. not such file or director` erhalten, verwenden Sie folgenden Befehl:

```bash
SEITE CHMOD 705
```

> [!primary]
>
> Um zu überprüfen, ob die Wiederöffnung aktiv ist, testen Sie Ihre Website nach einigen Minuten über einen Browser.
>

> [!warning]
>
> Überprüfen Sie die Anzeige nach maximal 3 Stunden.<br>
> Unsere Roboter verbringen mindestens alle 3 Stunden, um Statusänderungen zu überprüfen.<br>
> Je nachdem, wann die oben genannte Änderung durchgeführt wird, kann die Wiederherstellung der Anzeige Ihrer Website daher mehr oder weniger schnell erfolgen.<br>
> Wenn die 3-Stunden-Frist abgelaufen ist und Ihre Website noch nicht online ist, überprüfen Sie, dass die eingegebene Bestellung erfolgreich aufgegeben wurde, indem Sie die Operation wiederholen.<br>
> Wenn dies noch nicht funktioniert, kontaktieren Sie bitte unseren Support.
> 

### Transfer von Binärdateien 

Bei binären Dateien, wie z. B. **CGI**-Dateien, kann es interessant sein, wie der Transfer ausgeführt wird.

Um den Transfertyp zu ändern, wählen Sie `Transfer`{.action} im Hauptmenü und `dann Transfertyp`{.action}.

![Hosting](images/1832.png){.thumbnail}

### Ordnervergleich

![Hosting](images/1823.png){.thumbnail}

Die Option zum Vergleich von Dateien zeigt Farben in den **Zonen 4** und **5** (im Abschnitt dieser Anleitung zum [Filezilla-Interface](#interface) dargestellt). Mit dieser Option können Sie Unterschiede zwischen lokalen Dateien und Ordnern und denen auf dem Server erkennen. 

Indem Sie mit der rechten Maustaste auf das Icon klicken, können Sie den Vergleichsmodus ändern. Es wird Ihnen dann angeboten, die Option zu aktivieren oder zu deaktivieren, aber auch:

- Die Dateigröße vergleichen
- Zeitstempel vergleichen
- die identischen Dateien ausblenden.

**Farbbedeutung** :

- Gelb: Die Datei existiert nur auf einer Seite.
- Grün: Die Datei ist aktueller als die farblose Datei auf der anderen Seite.
- Rot: Die Dateigrößen sind unterschiedlich.

## Mehr <a name="go-further"></a>

Im Folgenden finden Sie den Link zur [Anleitung zur Behebung wiederholter Fehler bei der Verwendung eines FTP-Programms](https://docs.ovh.com/de/hosting/webhosting_haufige_ftp-probleme/).

Im Allgemeinen finden [Sie alle unsere Hilfen zu den Shared Hosting](https://docs.ovh.com/de/hosting/).

Die offizielle Website von Filezilla [finden Sie](https://filezilla-project.org/).

Für spezialisierte Dienstleistungen (Referenzierung, Entwicklung etc.) kontaktieren Sie die [OVHcloud Partner](https://partner.ovhcloud.com/de/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, können Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/) einsehen.

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
