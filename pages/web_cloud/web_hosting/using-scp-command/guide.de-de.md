---
title: "Webhosting - Dateien mit dem Befehl SCP kopieren"
excerpt: "Diese Anleitung erklärt, wie Sie den Befehl Secure Copy Protocol (SCP) per SSH, um Dateien von oder auf Ihr Webhosting zu kopieren"
updated: 2024-01-22
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Das Secure Copy Protocol (SCP) ermöglicht das sichere Kopieren von Daten (über das SSH-Protokoll) zwischen zwei Geräten. So können Sie Inhalte kopieren:

- lokal vom Computer auf ein Remotegerät
- von einem Remotegerät zum Computer
- von einem Server auf einen anderen (nicht zwischen zwei OVHcloud Webhostings verfügbar).

Es ermöglicht über ein Terminal und mit einem Linux-Befehl das Kopieren einer Datei oder eines Ordners, die bzw. der eine oder mehrere Dateien enthält.

> [!warning]
>
> OVHcloud stellt Ihnen Dienste zur Verfügung, für deren Konfiguration, Verwaltung und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit in Ihrer Verantwortung, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Sie bei gängigen Aufgaben bestmöglich zu begleiten. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren. Für externe Dienstleistungen bieten wir leider keine Unterstützung. Weitere Informationen finden Sie im Abschnitt [„Weiterführende Informationen“](#go-further) dieser Anleitung.
>

**Diese Anleitung erklärt, wie Sie den Befehl Secure Copy Protocol (SCP) per SSH verwenden, um Dateien von oder auf Ihr Webhosting zu kopieren.**

## Voraussetzungen

- Sie verfügen über ein Terminal, das mit den Linux- und SSH-Befehlen kompatibel ist (zum Beispiel das *Terminal* von MacOS oder der *Ubuntu* Emulator unter Windows)
- Mit den Linux- und SSH-Befehlen vertraut sein
- Sie verfügen über ein [Webhosting](https://www.ovhcloud.com/de/web-hosting/) Angebot  mit SSH-Zugang
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external}

## In der praktischen Anwendung

In dieser Anleitung erfahren Sie, welche Funktionen mit dem Befehl `scp` verfügbar sind. Für weitere Informationen zur Bestellung kontaktieren Sie bitte unsere User Community auf <https://community.ovh.com/en/>.

### Schritt 1 - SSH-Zugang von Ihrem Webhosting erhalten

Die SSH-Zugänge zu Ihrem Webhosting finden Sie in unserer Anleitung „[SSH-Zugang Ihres Webhostings verwenden](/pages/web_cloud/web_hosting/ssh_on_webhosting)“.

### Schritt 2 - Vollständigen Pfad zum FTP-Speicherplatz Ihres Webhostings abrufen<a name="step2"></a>

Öffnen Sie Ihr Terminal und verbinden Sie sich via SSH mit Ihrem Webhosting.

Wenn Sie via SSH mit Ihrem Webhosting verbunden sind, geben Sie folgenden Befehl ein: 

```ssh
cd ..
```

Bestätigen Sie den Befehl mit der Taste `enter`(↲) auf Ihrer Tastatur, und geben Sie dann folgenden Befehl ein:

```ssh
ls
```

Bestätigen Sie diesen zweiten Befehl mit der Taste `enter` (↲) auf Ihrer Tastatur.

In Ihrem Terminal wird ein ähnliches Ergebnis wie das folgende Beispiel angezeigt:

```ssh
FTP-login@ssh0X.cluster0XX.xxx.hosting.ovh.net (php/X.X/production/legacy) /homez.XXX $
FTP-main-login
```

In unserem Beispiel:

- `FTP-Login`: Name eines der FTP-Benutzer (Haupt- oder Nicht-Haupt) Ihres Webhostings.
- `/homez.XXX`: *filer*, auf dem sich Ihr Webhosting befindet.
- `FTP-main-login`: Verzeichnispfad des FTP-Speicherplatzes Ihres Webhostings. Dieses Verzeichnis wird in der Regel mit dem FTP-Haupt-Login Ihres Webhostings benannt.

In unserem Beispiel lautet der vollständige Pfad zum FTP-Speicherplatz für den Zugriff auf den FTP-Wurzelordner des Webhostings: `/homez.XXX/FTP-main-login`.

Nur aus einem Verzeichnis, das dem Verzeichnis `FTP-main-login` in unserem Beispiel entspricht, können Sie den Befehl `scp` verwenden.

Wenn Sie sich nämlich wie gewohnt mit dem FTP-Bereich eines Webhostings verbinden, werden Sie direkt in den Ordner versetzt, der dem Ordner `FTP-main-login` in unserem Beispiel entspricht.

Auf dieser Ebene befinden sich standardmäßig der Ordner `www` und die Datei `.ovhconfig` Ihres Webhostings.

### Schritt 3 - Den Befehl „scp“ mit Ihrem Webhosting verwenden

> [!success]
>
> Alle folgenden Befehle werden über das Terminal Ihres Geräts/Computers ausgeführt **lokal**. Sie müssen also nicht via SSH in Ihrem Terminal oder Ihrem Webhosting eingeloggt sein.
>
> Wenn Sie Inhalte auf Ihr Webhosting kopieren möchten, positionieren Sie Ihren **lokalen** Benutzer rechtzeitig vor den Dateien/Ordnern, die Sie auf Ihr Webhosting kopieren möchten.
>
> Wenn Sie eine Kopie der Dateien/Ordner auf Ihrem Webhosting lokal auf Ihrem Gerät/Computer abrufen möchten, positionieren Sie Ihren **lokalen** Benutzer rechtzeitig vor dem Ordner, der die Kopie Ihrer gehosteten Daten abrufen wird.
>

Denken Sie daran, alle folgenden allgemeinen Einstellungen durch eigene Einstellungen zu ersetzen:

- `FTP-login`: FTP-Login Ihres Webhostings.
- `ssh.cluster0XX.hosting.ovh.net` : ersetzen Sie die `XX` durch die Nummer des Clusters, in dem sich Ihr Webhosting befindet. Weitere Informationen finden Sie in unserer Anleitung „[SSH-Zugang Ihres Webhostings verwenden](/pages/web_cloud/web_hosting/ssh_on_webhosting)“.
- `/homez.XXX/FTP-main-login/`: Ändern Sie die `XXX` mit der Nummer des *filer* und die `FTP-main-login` mit den Einstellungen aus dem [Schritt 2](#step2) dieser Anleitung.
- `source_folder`: Der Name des zu kopierenden Quellordners oder des Ordners, in dem sich die zu kopierende Datei befindet. *Wenn die Struktur eine Folge von verschachtelten Ordnern ist, müssen Sie alle Ordnernamen durch ein `/`* getrennt angeben.
- `target_folder`: Der Name des Zielordners, der den zu kopierenden lokalen Ordner bzw. die zu kopierende lokale Datei empfängt. *Wenn die Struktur eine Folge von verschachtelten Ordnern ist, müssen Sie alle Ordnernamen durch ein `/`* getrennt angeben.
- `file` - Der Name der Datei, die mit dem Befehl `scp` kopiert werden soll. Denken Sie daran, auch die Erweiterung dieser Datei anzugeben (Beispiele: *.html*, *.css*, *.php*, *.txt* usw.).

#### Inhalte von Ihrem lokalen Gerät auf Ihr Webhosting kopieren

Um eine einzelne lokale Datei auf Ihr Webhosting zu kopieren, verwenden Sie folgenden Befehl:

```ssh
scp source_folder/file FTP-login@ssh.cluster0XX.hosting.ovh.net:/homez.XXX/FTP-main-login/target_folder
```

Um einen lokalen Ordner mit allen Inhalten auf Ihr Webhosting zu kopieren, verwenden Sie folgenden Befehl:

```ssh
scp -r source_folder FTP-login@ssh.cluster0XX.hosting.ovh.net:/homez.XXX/FTP-main-login/target_folder 
```

#### Inhalte von Ihrem Webhosting auf Ihr lokales Gerät kopieren

Um eine einzelne Datei von Ihrem Webhosting auf Ihr lokales Gerät zu kopieren, verwenden Sie folgenden Befehl:

```ssh
scp FTP-login@ssh.cluster0XX.hosting.ovh.net:/homez.XXX/FTP-main/login/source_folder/file target_folder 
```

Um einen Ordner auf Ihrem Webhosting und dessen gesamten Inhalt auf Ihr lokales Gerät zu kopieren, verwenden Sie folgenden Befehl:

```ssh
scp -r FTP-login@ssh.cluster0XX.hosting.ovh.net:/homez.XXX/FTP-main-login/source_folder target_folder
```

#### Inhalte von Ihrem OVHcloud Webhosting auf ein anderes OVHcloud Webhosting kopieren

Aus Sicherheitsgründen wird der Befehl `scp` per SSH von der OVHcloud Webhosting-Infrastruktur abgelehnt, wenn zwei Webhostings versuchen, Inhalte untereinander zu kopieren.

### Schritt 4 - Sicherstellen, dass der Inhalt kopiert wurde

Um zu überprüfen, ob lokal auf Ihrem Computer vorhandene Inhalte auf Ihr Webhosting kopiert wurden, können Sie sich [mit dem FTP-Speicherplatz Ihres Webhostings verbinden](/pages/web_cloud/web_hosting/ftp_connection) und dann in das Zielverzeichnis navigieren, in das die Inhalte kopiert werden sollen.

Um zu überprüfen, ob Inhalte auf Ihrem Webhosting lokal auf Ihren Computer kopiert wurden, gehen Sie in das Zielverzeichnis auf Ihrem Gerät/Computer und überprüfen Sie, ob der Inhalt, der kopiert werden soll, dort vorhanden ist.

## Weiterführende Informationen <a name="go-further"></a>

[SSH-Zugang Ihres Webhostings verwenden](/pages/web_cloud/web_hosting/ssh_on_webhosting)

[Mit dem FTP-Speicherplatz Ihres Webhostings verbinden](/pages/web_cloud/web_hosting/ftp_connection)
 
Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).
 
Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.