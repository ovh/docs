---
title: "Webhosting - Dateien mit dem Befehl SCP kopieren"
excerpt: "Erfahren Sie hier, wie Sie mit SSH und dem Secure Copy Protocol (SCP) Dateien auf Ihr Webhosting kopieren"
updated: 2024-01-30
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Das Secure Copy Protocol (SCP) ermöglicht das sichere Kopieren von Daten (über das SSH-Protokoll) zwischen zwei Geräten. Sie können somit Inhalte kopieren:

- Von einem lokalen Gerät zu einem Remotegerät
- Von einem Remotegerät zu einem lokalen Gerät
- Von einem Server auf einen anderen (nicht zwischen zwei OVHcloud Webhostings verfügbar)

Es ermöglicht über ein Terminal mit einem Linux-Befehl das Kopieren von Dateien und Ordnern.

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
> Wenn Sie Schwierigkeiten haben, die Schritte in diesem Tutorial durchzuführen, empfehlen wir, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren oder Ihre Fragen in der OVHcloud Community zu stellen. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

**Diese Anleitung erklärt, wie Sie den Befehl Secure Copy Protocol (SCP) per SSH verwenden, um Dateien von oder auf Ihr Webhosting zu kopieren.**

## Voraussetzungen

- Sie verfügen über ein Terminal, das mit Linux- und SSH-Befehlen kompatibel ist (zum Beispiel das *Terminal* von MacOS oder der *Ubuntu* Emulator unter Windows).
- Sie können mit SSH und Kommandzeile umgehen.
- Sie verfügen über ein OVHcloud [Webhosting](/links/web/hosting) mit SSH-Zugang.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

In dieser Anleitung erfahren Sie, welche Funktionen mit dem Befehl `scp` verfügbar sind. Für genauere Informationen kontaktieren Sie unsere [User Community](/links/community).

### Schritt 1: SSH-Zugang Ihres Webhostings

Informationen zum SSH-Zugriff auf Webhostings finden Sie in unserer Anleitung „[SSH-Zugang Ihres Webhostings verwenden](/pages/web_cloud/web_hosting/ssh_on_webhosting)“.

### Schritt 2: Vollständigen Pfad zum FTP-Speicherplatz Ihres Webhostings abrufen<a name="step2"></a>

Öffnen Sie Ihr Terminal und verbinden Sie sich via SSH mit Ihrem Webhosting.

Wenn Sie via SSH mit Ihrem Webhosting verbunden sind, geben Sie folgenden Befehl ein: 

```bash
cd ..
```

Bestätigen Sie den Befehl mit der Taste `Enter`(↲) auf Ihrer Tastatur, und geben Sie dann folgenden Befehl ein:

```bash
ls
```

Bestätigen Sie diesen zweiten Befehl mit der Taste `Enter`(↲) auf Ihrer Tastatur.

In Ihrem Terminal wird ein ähnliches Ergebnis wie das folgende Beispiel angezeigt:

```console
FTP-login@ssh0X.cluster0XX.xxx.hosting.ovh.net (php/X.X/production/legacy) /homez.XXX $
FTP-main-login
```

In diesem Beispiel:

- `FTP-Login`: Name eines FTP-Benutzers Ihres Webhostings.
- `/homez.XXX`: *filer*, auf dem sich Ihr Webhosting befindet.
- `FTP-main-login`: Verzeichnispfad des FTP-Speicherplatzes Ihres Webhostings. Dieses Verzeichnis wird in der Regel nach dem primären FTP-Login Ihres Webhostings benannt.

In diesem Beispiel lautet der vollständige Pfad zum FTP-Speicherplatz für den Zugriff auf den FTP-Wurzelordner des Webhostings: `/homez.XXX/FTP-main-login`.

Nur aus einem Verzeichnis, das dem Verzeichnis `FTP-main-login` in unserem Beispiel entspricht, können Sie den Befehl `scp` verwenden.

Wenn Sie sich mit dem FTP-Bereich eines Webhostings verbinden, befinden Sie sich in dem Ordner, der dem Ordner `FTP-main-login` in unserem Beispiel entspricht.

Auf dieser Ebene befinden sich standardmäßig der Ordner `www` und die Datei `.ovhconfig` Ihres Webhostings.

### Schritt 3: Den Befehl "scp" mit Ihrem Webhosting verwenden

> [!success]
>
> Alle folgenden Beispiel-Befehle werden über das Terminal Ihres Geräts/Computers **lokal** ausgeführt. Sie müssen also nicht via SSH auf Ihrem Webhosting eingeloggt sein.
>
> Der mit dem Befehl `scp` verwendete Dateipfad ist relativ zum aktuellen lokalen Verzeichnis. Bevor Sie also Inhalte auf Ihr Webhosting oder vom Webhosting zu Ihrem lokalem Gerät übertragen, wechseln Sie zum jeweils übergeordneten lokalen Verzeichnis, entsprechend der unten aufgeführten Beispiele.
>

Denken Sie daran, alle folgenden Werte mit Ihren eigenen Daten zu ersetzen:

- `FTP-login`: FTP-Login Ihres Webhostings.
- `ssh.cluster0XX.hosting.ovh.net`: Ersetzen Sie `XX` durch die Nummer des Clusters, auf dem sich Ihr Webhosting befindet. Genauere Informationen finden Sie in unserer Anleitung „[SSH-Zugang Ihres Webhostings verwenden](/pages/web_cloud/web_hosting/ssh_on_webhosting)“.
- `/homez.XXX/FTP-main-login/`: Ersetzen Sie `XXX` mit der Nummer des *Filer* und `FTP-main-login` mit den Einstellungen aus [Schritt 2](#step2) dieser Anleitung.
- `source_folder`: Der Name des zu kopierenden Quellordners oder des Ordners, in dem sich die zu kopierende Datei befindet. *Wenn dieser Pfad mehrere Ordner enthält, müssen Sie alle Ordnernamen durch ein `/` getrennt angeben.*
- `target_folder`: Der Name des Zielordners, der den zu kopierenden lokalen Ordner bzw. die zu kopierende lokale Datei empfängt. *Wenn dieser Pfad mehrere Ordner enthält, müssen Sie alle Ordnernamen durch ein `/` getrennt angeben.*
- `file` - Der Name der Datei, die mit dem Befehl `scp` kopiert werden soll. Denken Sie daran, auch die Erweiterung dieser Datei anzugeben (Beispiele: *.html*, *.css*, *.php*, *.txt* usw.).

#### Inhalte von Ihrem lokalen Gerät auf Ihr Webhosting kopieren

Um eine einzelne lokale Datei auf Ihr Webhosting zu kopieren, verwenden Sie folgenden Befehl:

```bash
scp source_folder/file FTP-login@ssh.cluster0XX.hosting.ovh.net:/homez.XXX/FTP-main-login/target_folder
```

Um einen lokalen Ordner mit allen Inhalten auf Ihr Webhosting zu kopieren, verwenden Sie folgenden Befehl:

```bash
scp -r source_folder FTP-login@ssh.cluster0XX.hosting.ovh.net:/homez.XXX/FTP-main-login/target_folder 
```

#### Inhalte von Ihrem Webhosting auf Ihr lokales Gerät kopieren

Um eine einzelne Datei von Ihrem Webhosting auf Ihr lokales Gerät zu kopieren, verwenden Sie folgenden Befehl:

```bash
scp FTP-login@ssh.cluster0XX.hosting.ovh.net:/homez.XXX/FTP-main/login/source_folder/file target_folder 
```

Um einen Ordner auf Ihrem Webhosting und dessen gesamten Inhalt auf Ihr lokales Gerät zu kopieren, verwenden Sie folgenden Befehl:

```bash
scp -r FTP-login@ssh.cluster0XX.hosting.ovh.net:/homez.XXX/FTP-main-login/source_folder target_folder
```

#### Inhalte von Ihrem OVHcloud Webhosting auf ein anderes OVHcloud Webhosting kopieren

Aus Sicherheitsgründen wird der Befehl `scp` von der OVHcloud Webhosting-Infrastruktur abgelehnt, wenn versucht wird, Daten zwischen Webhostings zu übertragen.

### Schritt 4 - Sicherstellen, dass der Inhalt kopiert wurde

Um zu überprüfen, ob lokal auf Ihrem Computer vorhandene Inhalte auf Ihr Webhosting kopiert wurden, können Sie sich [mit dem FTP-Speicherplatz Ihres Webhostings verbinden](/pages/web_cloud/web_hosting/ftp_connection) und dann in das Zielverzeichnis navigieren, in das die Inhalte kopiert werden sollen.

Um zu überprüfen, ob Inhalte auf Ihrem Webhosting lokal auf Ihren Computer kopiert wurden, gehen Sie in das Zielverzeichnis auf Ihrem Gerät/Computer und überprüfen Sie, ob die Daten dort vorhanden sind.

## Weiterführende Informationen <a name="go-further"></a>

[SSH-Zugang Ihres Webhostings verwenden](/pages/web_cloud/web_hosting/ssh_on_webhosting)

[Mit dem FTP-Speicherplatz Ihres Webhostings verbinden](/pages/web_cloud/web_hosting/ftp_connection)
 
Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Treten Sie unserer [User Community](/links/community) bei.