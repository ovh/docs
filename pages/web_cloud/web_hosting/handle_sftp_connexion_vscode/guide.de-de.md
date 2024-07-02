---
title: "Webhosting mit Visual Studio Code über SFTP verwalten"
excerpt: "Eine Website auf einem Webhosting mit Visual Studio Code mithilfe einer SFTP-Erweiterung verwalten"
updated: 2023-11-06
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Wenn Sie über ein OVHcloud Webhosting verfügen, können Sie auf einen Speicherplatz zugreifen, mit dem Sie Ihre Website verwalten können. Der Zugriff auf diesen Speicherplatz ist über SFTP möglich. Sie können sich über einen Client anmelden, aber auch die integrierte Entwicklungsumgebung (Integrated Development Environment - IDE) von Visual Studio Code verwenden, um die Ordner und Dateien Ihrer Website zu verwalten.

> [!PRIMARY]
>
> Wenn Sie Ihre Website ohne Visual Studio Code verwalten möchten, können Sie den FileZilla FTP-Client installieren. Weitere Informationen finden Sie in unserer Anleitung „[FileZilla mit Ihrem OVHcloud Hosting verwenden](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)“. Wenn Sie sich via SSH mit Ihrer Website verbinden möchten, lesen Sie unsere Dokumentation „[SSH-Zugang Ihres Webhostings verwenden](/pages/web_cloud/web_hosting/ssh_on_webhosting)“.
>

**Diese Anleitung erklärt, wie Sie Ihre Website mithilfe von Visual Studio Code verwalten.**
  
## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](/links/web/hosting).
- Sie haben [Microsoft Visual Studio Code](https://visualstudio.microsoft.com/#vscode-section) installiert.

## In der praktischen Anwendung
 
> [!warning]
>
> OVHcloud stellt Ihnen Dienste zur Verfügung, für deren Konfiguration, Verwaltung und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit in Ihrer Verantwortung, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen dieses Tutorial zur Verfügung, um Sie bestmöglich bei gängigen Aufgaben zu begleiten. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Anbieter](/links/partner) oder den Herausgeber von [Visual Studio Code IDE](https://code.visualstudio.com/){.external} zu kontaktieren. Für externe Dienstleistungen bieten wir leider keine Unterstützung. Weitere Informationen finden Sie im Abschnitt [„Weiterführende Informationen“](#go-further) dieser Anleitung.
>

### SFTP-Erweiterung für Visual Studio Code installieren

> [!warning]
>
> In diesem Tutorial haben wir die Erweiterung „SFTP/FTP sync“ von *Natizyskunk* gewählt. Es steht Ihnen frei, eine andere Wahl zu treffen. Beachten Sie jedoch, dass eine Erweiterung in Visual Studio Code häufig von einem unabhängigen Entwickler erstellt wird, der die Entwicklung jederzeit unterbrechen kann.
>

Nachdem Sie Visual Studio Code gestartet haben, klicken Sie oben auf der Benutzeroberfläche im horizontalen Menü auf `View`{.action} und dann auf `Extensions`{.action}.

![hosting](/pages/assets/screens/other/web-tools/vscode/view_extensions.png){.thumbnail}

Um dieselbe Aktion mit der Tastenkombination durchzuführen, wählen Sie:

- `Ctrl + Shift + X`, wenn Sie Windows verwenden, 
- `Maj + Command + X`, wenn Sie auf macOS sind.

Geben Sie oben links im Interface den Namen der Erweiterung „SFTP/FTP sync“ für *Natizyskunk* ein und klicken Sie auf `Install`{.action}.

![hosting](/pages/assets/screens/other/web-tools/vscode/extensions.png){.thumbnail}

Es ist auch möglich, [die Erweiterung „SFTP/FTP-Sync“](https://marketplace.visualstudio.com/items?itemName=Natizyskunk.sftp#sftp-sync-extension-for-vs-code)“vom Marketplace in Visual Studio aus zu installieren.
  
### Projekt lokal initialisieren

Geben Sie den lokalen Speicherort des Projekts ein, um die Dateien Ihrer Website auf dem Webhosting über Visual Studio Code zu synchronisieren. Erstellen Sie hierzu einen Ordner am gewünschten Speicherort.

Wechseln Sie zurück zu Visual Studio Code im horizontalen Menü am oberen Rand der Benutzeroberfläche, klicken Sie auf `View`{.action} und dann auf `Command Palette`{.action}, um den Befehlseditor anzuzeigen.

Um dieselbe Aktion mit der Tastenkombination durchzuführen, wählen Sie:

- `Ctrl + Shift + P` wenn Sie Windows verwenden.
- `Maj + Command + P` wenn Sie macOS verwenden.

Geben Sie den folgenden Befehl ein: `SFTP: Config`.

![hosting](/pages/assets/screens/other/web-tools/vscode/SFTP_config.png){.thumbnail}

Mit diesem Befehl erstellt Visual Studio Code die Konfigurationsdatei „sftp.json“ im Wurzelverzeichnis des zuvor erstellten lokalen Ordners. Da der Speicherort des Projekts in Visual Studio Code jedoch noch nicht lokal bekannt ist, sollte die folgende Meldung angezeigt werden:

![hosting](/pages/assets/screens/other/web-tools/vscode/SFTP_folder.png){.thumbnail}

Klicken Sie auf `Open Folder`{.action}, navigieren Sie zum gewünschten Speicherort des lokalen Ordners, und klicken Sie zur Bestätigung auf `Select a folder`{.action}.

![hosting](/pages/assets/screens/other/web-tools/vscode/select_folder.png){.thumbnail}

Geben Sie in Visual Studio Code den Befehl `SFTP: Config` erneut ein. Eine Konfigurationsdatei mit dem Namen „sftp.json“ wird in Visual Studio Code angezeigt.

![hosting](/pages/assets/screens/other/web-tools/vscode/sftp_json_default.png){.thumbnail}

Diese Datei befindet sich im Ordner .vscode, der sich wiederum im Wurzelverzeichnis des lokalen Projekts befindet.

### Datei sftp.json konfigurieren

Bevor Sie an Ihrem Projekt arbeiten, laden Sie es in Ihren zuvor erstellten lokalen Ordner herunter. Stellen Sie jedoch zunächst sicher, dass die Datei „sftp.json“ richtig konfiguriert ist. Die relevanten Informationen finden Sie in Ihrem [OVHcloud Kundencenter](/links/manager). Klicken Sie im Bereich `Web Cloud`{.action} auf `Hosting-Pakete`{.action}. Wählen Sie das betreffende Hosting aus und klicken Sie dann auf `FTP - SSH`{.action}.

Geben Sie in der Datei „sftp.json“ Werte für die folgenden Einträge ein:

#### name 

Markieren Sie ihn an beiden Stellen, die orange hervorgehoben sind.

![hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/hosting_name.png){.thumbnail}

> [!primary]
>
> Der Wert `name` ist personalisierbar, Sie können also einen Wert Ihrer Wahl einstellen. Wenn Sie jedoch mehrere „sftp.json“-Dateien konfigurieren, sollten Sie aus organisatorischen Gründen die oben angezeigten Werte als Referenz verwenden.
>

#### host

Ebenfalls im Tab `FTP-SSH`{.action} ist der Hostname (`host`) unter `FTP- und SFTP-Server`{.action} sichtbar.

![hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/hostname.png){.thumbnail}

#### username

Suchen Sie den Benutzernamen (`username`) in der Spalte `Login`{.action} der Tabelle.

#### remotePath

Den Remote-Pfad (`remotePath`) finden Sie unter `Pfad des home-Verzeichnisses`{.action}. Wenn jedoch mehrere Benutzer konfiguriert sind, kann der angegebene Pfad abweichen. Ersetzen Sie in diesem Fall den nach `home/` angegebenen Benutzernamen durch den Namen Ihrer Wahl aus der Liste `Login`{.action} Ihres Webhostings.

**Beispiel**: Wenn Ihr Benutzername „john-smith“ lautet, erhalten Sie `home/john-smith`

Denken Sie außerdem daran, diese Zeile in die Datei „sftp.json“ einzufügen: `"openSsh": true`

> [!primary]
>
> Um nicht nach jedem Befehl in Visual Studio Code das Kennwort eingeben zu müssen, speichern Sie es in der Datei „sftp.json“, indem Sie die Zeile `"password": "<password>"` hinzufügen
>

Hier ein Beispiel für eine „sftp.json“-Datei:

```json

{
    "name": "<name>",
    "host": "<host>",
    "protocol": "sftp",
    "port": 22,
    "username": "myusername",
    "password": "mypassword",
    "remotePath": "/home/myusername",
    "uploadOnSave": false,
    "useTempFile": false,
    "openSsh": true
}

```

Weitere Informationen zu den Optionen in der Datei „sftp.json“ finden Sie in der [Projektdokumentation](https://github.com/Natizyskunk/vscode-sftp/wiki/configuration).

### Projekt lokal herunterladen

Nachdem Sie die Datei „sftp.json“ konfiguriert haben, laden Sie den Inhalt Ihres Projekts herunter, um alle Ordner und Dateien Ihrer Website abzurufen. Rufen Sie dazu Visual Studio Code auf, und geben Sie den folgenden Befehl ein: `SFTP: Download Project`.

Visual Studio Code fordert Sie auf, den Ordner auszuwählen, den Sie auf Ihr Webhosting hochladen möchten. Geben Sie den zuvor in der Datei „sftp.json“ festgelegten Wert `name` ein.

![hosting](/pages/assets/screens/other/web-tools/vscode/download_project.png){.thumbnail}

Wenn Sie dazu aufgefordert werden, geben Sie das Passwort für den in der Datei „sftp.json“ angegebenen Benutzer ein und klicken Sie dann auf `enter`. Nach dem Herunterladen werden alle Projektordner und -dateien im Datei-Explorer in der linken Spalte der Visual Studio Code Benutzeroberfläche angezeigt.

![hosting](/pages/assets/screens/other/web-tools/vscode/explorer.png){.thumbnail}

> [!primary]
>
> Zur Erinnerung: Die richtige Konfiguration der Datei „sftp.json“ ist entscheidend. Wenn Sie vor dem Hochladen Ihres Projekts auf einen Fehler stoßen, wird dies normalerweise durch einen Konfigurationsfehler in der Datei „sftp.json“ verursacht. Weitere Informationen hierzu finden Sie in den [FAQ](https://github.com/Natizyskunk/vscode-sftp/blob/HEAD/FAQ.md){.external}.
>

### Änderungen an Dateien vornehmen

Nun, da das Projekt lokal auf Ihren Computer heruntergeladen wurde, können Sie Dateien in Visual Studio Code auf einfache Weise bearbeiten, hinzufügen oder löschen.

Wenn Sie möchten, dass Ihre lokalen Änderungen bei jedem Speichern einer Datei synchronisiert werden, fügen Sie diese Zeile der Datei „sftp.json“ hinzu: `"uploadOnSave": true`

Um diese Funktion zu deaktivieren, aber in der Datei „sftp.json“ zu belassen, ersetzen Sie den Wert `true` durch `false`.

Bisher haben wir nur die Befehle: `SFTP: Config` und `SFTP: Download Project` erwähnt. Es gibt weitere Befehle, die Sie durch Autovervollständigung beobachten können, indem Sie im Befehlseditor `SFTP:` eingeben.

![hosting](/pages/assets/screens/other/web-tools/vscode/list_commands.png){.thumbnail}

Die Liste der Befehle finden Sie [hier](https://github.com/Natizyskunk/vscode-sftp/wiki/Commands){.external}.

Sie können nun über Visual Studio Code auf den Inhalt Ihres Webhostings zugreifen und diesen bearbeiten.

In diesem Tutorial wird die effiziente Verwaltung eines Projekts in Visual Studio Code vorgestellt. Es ist für erste Erfahrungen geeignet. Wenn Sie jedoch mehrere Dateien bearbeiten und diese mit Ihrem Webhosting synchronisiert werden, können Sie die History Ihrer Änderungen nicht einsehen, um diese möglicherweise erneut zu bearbeiten oder einen Fehler zu beheben.

## Weiterführende Informationen <a name="go-further"></a>

[Mit dem FTP-Speicherplatz Ihres Webhostings verbinden](/pages/web_cloud/web_hosting/ftp_connection)

[FileZilla mit Ihrem OVHcloud Hosting verwenden](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)

[SSH-Zugang Ihres Webhostings verwenden](/pages/web_cloud/web_hosting/ssh_on_webhosting) (nur verfügbar mit [Pro oder Performance Webhostings](/links/web/hosting))

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.