---
title: "SSH-Zugang Ihres Webhostings verwenden"
excerpt: "Erfahren Sie hier, wie Sie den SSH-Zugang zur Verbindung mit Ihrem OVHcloud Webhosting nutzen"
updated: 2024-01-30
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel 

Mit OVHcloud Webhosting Angeboten erhalten Sie einen Speicherplatz zum Online-Stellen der Dateien Ihrer Websites und Anwendungen. Auf diesen können Sie mithilfe eines SSH- oder FTP-Benutzers und den zugehörigen Passwörtern zugreifen.

**Diese Anleitung erklärt, wie Sie den SSH-Zugang verwenden, um sich mit Ihrem OVHcloud Webhosting zu verbinden.**

## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](/links/web/hosting){.external} Angebot mit SSH-Zugang.
- Sie verfügen über die erforderlichen Informationen, um sich via SSH mit Ihrem Speicherplatz zu verbinden.
- Sie sind in Ihrem [OVHcloud Kundencenter](/links/manager){.external} eingeloggt und befinden sich im Bereich `Web Cloud`{.action}.

> [!warning]
> 
> SSH-Zugang zu einem OVHcloud Webhosting ist ab dem Angebot [Pro Hosting](/links/web/hosting-compare) verfügbar.

## In der praktischen Anwendung

### Schritt 1: Sicherstellen, dass der SSH-Zugang aktiv ist <a name="sshcheck"></a>

Loggen Sie sich zunächst in Ihr [OVHcloud Kundencenter](/links/manager){.external} ein und wählen Sie im Bereich `Web Cloud`{.action} unter `Hosting-Pakete`{.action} das betreffende Hosting aus. Gehen Sie dann auf den Tab `FTP - SSH`{.action}. Es werden nun die Informationen für Ihren Speicherplatz angezeigt. 

Gehen Sie in der angezeigten Tabelle zur Spalte „SSH“ und überprüfen Sie, dass der betreffende SSH-Benutzer (oder „Login“) über einen aktiven SSH-Zugang verfügt. Ist das nicht der Fall, wird der Status „Deaktiviert“ angezeigt.

![SSH verwenden](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-ssh.png){.thumbnail}

Ist der SSH-Zugang nicht aktiv, klicken Sie rechts neben dem betreffenden Benutzer auf den Button `...`{.action} und dann auf `Bearbeiten`{.action}. Aktivieren Sie im daraufhin angezeigten Fenster den SSH-Zugang und schließen Sie die Änderung ab. Wenn Sie den Zugang nicht aktivieren können, überprüfen Sie, dass [Ihr OVHcloud Webhosting](/links/web/hosting){.external} über einen SSH-Zugang verfügt.

### Schritt 2: Erforderliche Verbindungsinformationen abrufen <a name="sshlogin"></a>

Um sich via SSH mit Ihrem Speicherplatz zu verbinden, finden Sie die notwendigen Elemente im Tab `FTP - SSH`{.action}:

- **SSH-Benutzer aktiv**: Überprüfen Sie dies in der Spalte "**Login**"der Tabelle. Denken Sie daran, dass dieser Benutzer [über einen aktiven SSH-Zugang verfügen](#sshcheck) muss.
- **SSH-Benutzerpasswort**: Wenn Sie dieses Passwort vergessen haben, können Sie es ändern, indem Sie auf den Button `...`{.action} und dann auf `Passwort ändern`{.action} klicken.
- **SSH-Server**: Sie finden diese Angabe unter "**SSH-Server**".
- **Verbindungsport des SSH-Servers**: Sie finden diese Angabe unter "**SSH Port**"

### Schritt 3: Via SSH in den Speicherplatz einloggen

Verwenden Sie für den Login via SSH ein Terminal, um direkt über Befehlszeilen mit Ihrem Speicherplatz zu kommunizieren. 

> [!primary]
>
> Dieses Tool ist standardmäßig auf macOS, Linux und Windows 10 installiert. Bei einer älteren Windows-Umgebung muss ein Programm wie PuTTY installiert oder die OpenSSH-Funktion hinzugefügt werden.

Je nach der von Ihnen verwendeten Methode gibt es nun zwei Arten, um sich via SSH zu verbinden:

#### 3.1 Über ein Terminal

> [!warning]
> Für unsere Shared Hosting Angebote gibt es keinen „Superuser“- oder „root“-Zugriff via SSH.

Wenn das Terminal geöffnet ist, verwenden Sie folgenden Befehl, indem Sie die Elemente "Yourlogin", "ssh.cluster000.hosting.ovh.net"und "22"durch die Elemente ersetzen, die Ihren SSH-Kennungen entsprechen. 

```bash
ssh yourlogin@ssh.cluster000.hosting.ovh.net -p 22
```

Nach Senden des Befehls werden Sie dazu aufgefordert, das Passwort des SSH-Benutzers einzugeben. Wenn Sie eingeloggt sind, können Sie zum nächsten Schritt „[Via SSH mit Ihrem Speicherplatz interagieren](./#schritt-4-via-ssh-mit-ihrem-speicherplatz-interagieren)“ übergehen.

![SSH verwenden](/pages/assets/screens/other/web-tools/terminal/terminal-ssh-login.png){.thumbnail}

#### 3.2 Über eine Anwendung

Wenn Sie die Anwendung (zum Beispiel PuTTY) geöffnet haben, geben Sie die SSH-Verbindungsinformationen ein. Das die Vorgehensweise vom verwendeten Programm abhängig ist, können wir diese hier nicht im Detail aufführen. Lesen Sie bei Bedarf die nachfolgenden Beschreibungen zu den anzugebenden Informationen:

- **SSH-Server**: Geben Sie die [in Schritt 2](#sshlogin) erhaltene SSH-Serveradresse ein. Je nach verwendetem Programm sind verschiedene Bezeichnungen möglich: „Serveradresse“, „Host“. „Hostname“ etc.
- **Verbindungsport**: Geben Sie den [in Schritt 2](#sshlogin) erhaltenen Verbindungsport ein.
- **SSH-Login**: Geben Sie den SSH-Benutzer ein. Je nach verwendetem Programm sind verschiedene Bezeichnungen möglich: „Benutzername“, „Kennung“, „Login“, „Username“ etc.
- **SSH-Benutzerpasswort**: Geben Sie das Passwort des SSH-Benutzers ein. Je nach verwendetem Programm sind verschiedene Bezeichnungen wie „Passwort“ oder „Kennwort“ möglich.

Wenn Sie eingeloggt sind, können Sie zum nächsten Schritt übergehen.

### Schritt 4: Via SSH mit Ihrem Speicherplatz interagieren

Um mit Ihrem Speicherplatz zu interagieren, müssen die entsprechenden Befehle verwendet werden. Jeder dieser Befehle hat eine direkte Bedeutung aus dem Englischen. Wenn Sie Hilfe brauchen, können Sie einige Bedeutungen in der nachstehenden Liste nachlesen. Bitte beachten Sie, dass **diese Liste nicht vollständig ist**.

|Befehl|Englische Bedeutung|Beschreibung| 
|---|---|---|
|pwd|Print working directory|Zeigt das Arbeitsverzeichnis an, in dem Sie sich befinden.| 
|cd `arg`|Change directory|Erlaubt das Ersetzen des Arbeitsverzeichnisses durch das Verzeichnis, dass anstelle von `arg` angegeben wird.|
|cd `..`|Change directory|Erlaubt das Ändern des Arbeitsverzeichnisses, indem Sie in der Ordnerstruktur Ihrer Verzeichnisse um ein Level aufsteigen.|
|cd|Change directory|Durch Auslassen des Arguments gelangt man mit diesem Befehl zurück ins Wurzelverzeichnis Ihres Speicherplatzes (home).|
|ls|List|Listet den Inhalt des Arbeitsverzeichnisses auf. Sie können Attribute hinzufügen, um die Ergebnisanzeige des Befehls zu ändern (zum Beispiel `ls -ulhG`).| 
|chmod `right` `arg`|Change mode|Ändert die Rechte der Datei oder des Verzeichnisses, das als Argument `arg` eingegeben wurde.| 
|mkdir `arg`|Make directory|Erlaubt das Erstellen eines Verzeichnisses mit dem Namen des Arguments `arg`.| 
|touch `arg`|Touch|Erstellt eine leere Datei (falls diese noch nicht existiert) mit dem als Argument `arg` eingegebenen Namen.|
|rm `arg`|Remove|Löscht die als Argument `arg` benannte Datei.| 
|rm -r `arg`|Remove|Löscht das als Argument `arg` benannte Verzeichnis inklusive aller Dateien und Unterordner (rekursiv).| 
|mv `arg1` `arg2`|Move|Benennt ein als `arg1` eingegebenes Element um oder verschiebt dieses an einen neuen Speicherort (angegeben als `arg2`).| 

Sie können über einen Befehl auch ein Skript ausführen, indem Sie eine bestimmte PHP-Version verwenden. Verwenden Sie zum Beispiel für die PHP-Version 7.1 den nachfolgenden Befehl. Passen Sie die enthaltenen Elemente an Ihre Situation an.

```sh
/usr/local/php7.1/bin/php myscript.php
```

Je nach der PHP-Version, die Sie verwenden möchten, kann es sein, dass die Ausführungsumgebung aus Kompatibilitätsgründen angepasst werden muss. Weitere Informationen finden Sie in den unten aufgeführten Anleitungen : [Webhosting : umgebung, PHP-Version, .ovhconfig](/pages/web_cloud/web_hosting/configure_your_web_hosting).

> [!primary]
>
> Dateien und Ordner können auch mit dem **S**ecure **C**opy **P**rotocol (**SCP**) kopiert werden.
> Dieses Protokoll verwendet das SSH-Protokoll, um Inhalte sicher zu duplizieren zwischen:
>
> - Lokaler Computer/Gerät und Remote-Server
> - Remote-Serverund lokaler Computer/Gerät
> - Zwei Remote-Server
>
> Weitere Informationen zur Verwendung des Befehls `scp` mit unseren OVHcloud Webhostings finden Sie in unserer Anleitung "[Webhosting - Kopieren von Dateien mit dem Befehl SCP](/pages/web_cloud/web_hosting/using-scp-command)"
>

## Weiterführende Informationen

[Webhosting : umgebung, PHP-Version, .ovhconfig](/pages/web_cloud/web_hosting/configure_your_web_hosting)

Treten Sie unserer [User Community](/links/community) bei.Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.