---
title: 'Mit dem Speicherplatz eines Webhostings verbinden'
slug: verbindung-ftp-speicher-webhosting
excerpt: 'Erfahren Sie hier, wie Sie sich mit dem Speicherplatz Ihres OVHcloud Webhostings verbinden'
section: 'FTP und SSH'
order: 02
---

**Letzte Aktualisierung am 19.01.2022**

## Ziel 

Mit OVHcloud Webhosting Angeboten verfügen Sie über einen Speicherplatz für das Online-Stellen der Dateien Ihrer Websites und Anwendungen. Auf diesen können Sie mit den entsprechenden Passwörtern via SSH oder als FTP-Benutzer zugreifen.

**Diese Anleitung erklärt, wie Sie sich mit dem Speicherplatz Ihres OVHcloud Webhostings verbinden.**

## Voraussetzungen

- Sie haben ein [OVHcloud Webhosting](https://www.ovh.de/hosting) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

### Schritt 1: Erforderliche Verbindungsinformationen abrufen

Um sich mit Ihrem Speicherplatz zu verbinden, benötigen Sie die folgenden Elemente:

- einen aktiven FTP- oder SSH-Benutzer
- das Passwort für den FTP- bzw. SSH-Benutzer
- die Serveradresse
- den Verbindungsport des Servers

> [!primary]
>
> Diese Informationen wurden Ihnen bei der Installation Ihres Webhostings per E-Mail mitgeteilt und sind über Ihr OVHcloud Kundencenter verfügbar.
>
> **Wenn Sie diese Daten bereits haben**, gehen Sie direkt zu Schritt 2 „[Auf den Speicherplatz zugreifen](./#schritt-2-auf-den-speicherplatz-zugreifen)“ über.
> 

Wenn Sie nicht mehr im Besitz dieser Daten sind, loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und wählen Sie im Bereich `Web Cloud`{.action} unter `Hosting-Pakete`{.action} das betreffende Hosting aus. Gehen Sie dann auf den Tab `FTP - SSH`{.action}. 

Hier werden alle zum Speicherplatz gehörigen Informationen sowie eine Tabelle angezeigt, in der die für Ihr Webhosting angelegten FTP- und SSH-Benutzer aufgelistet werden.

![ftp login](images/connect-ftp-step1.png){.thumbnail}

In den angezeigten Informationen finden Sie alle Elemente, die Sie für die Verbindung mit Ihrem Speicherplatz brauchen. Wenn nötig, lesen Sie die nachstehende Tabelle, um die Informationen zu identifizieren. Beachten Sie, dass je nach Ihrem [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external} Angebot eventuell nicht alle Angaben angezeigt werden.

- **FTP- und SFTP-Server**: Hierbei handelt es sich um die Serveradresse, über die Sie via FTP oder SFTP mit einem FTP-Programm auf Ihren Speicherplatz zugreifen können.

> Der klassische Verbindungsport ist der Port "21". Verwenden Sie den Port "22" für eine Verbindung über das SFTP-Protokoll (falls dieses aktiviert ist)

- **SSH-Server**: Hierbei handelt es sich um die Serveradresse, die den Zugriff auf Ihren Speicherplatz über ein SSH-Protokoll ermöglicht.
- **Haupt-Login**: Hierbei handelt es sich um die Haupt-FTP-Kennung (S)Ihres Hostings. Sie finden alle FTP-Benutzer Ihres Hostings in der Tabelle in der Spalte "Login".

Wenn Sie das Passwort eines FTP- oder SSH-Benutzers vergessen haben, klicken Sie je nach Angebot auf das Bleistift-Symbol oder den Button `...`{.action} und dann auf `Passwort ändern`{.action}. Weitere Informationen hierzu finden Sie in der Anleitung „[Passwort eines FTP-Benutzers ändern](https://docs.ovh.com/de/hosting/ftp-benutzer-passwort-aendern/)“.

![ftp login](images/connect-ftp-step2.png){.thumbnail}

Sie sollten nun im Besitz aller notwendigen Elemente sein, um sich mit Ihrem Speicherplatz zu verbinden.

### Schritt 2: Auf den Speicherplatz zugreifen

Um sich mit dem Speicherplatz zu verbinden, haben Sie verschiedene Möglichkeiten. Bitte wählen Sie aus den in dieser Anleitung behandelten Vorgehensweisen die von Ihnen gewünschte aus.

[1. Via FTP-Explorer verbinden](#ftpexplorer): Dieser ermöglicht es Ihnen, über einen Webbrowser auf Ihren Speicherplatz zuzugreifen.

[2. Via FTP-Client verbinden](#ftpsoftware): So können Sie über ein Programm wie FileZilla oder Cyberduck auf Ihren Speicherplatz zugreifen. Hierzu muss das gewünschte Programm auf Ihrem PC installiert sein.

[3. Via SSH-Zugriff verbinden](#ssh): Verbinden Sie sich via SSH mit Ihrem Speicherplatz. Für diesen Zugriffstyp sind fortgeschrittene Kenntnisse sowie ein passendes [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external} Angebot erforderlich.

#### 1. Via FTP-Explorer verbinden <a name="ftpexplorer"></a>

Um sich via FTP-Explorer mit Ihrem Speicherplatz zu verbinden, loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und wählen Sie im Bereich `Web Cloud`{.action} unter `Hosting-Pakete`{.action} das betreffende Hosting aus. 

Gehen Sie dann auf den Tab FTP - SSH und klicken Sie auf den Button FTP-Explorer. 

![ftp login](images/connect-ftp-step3.png){.thumbnail}

Geben Sie auf der angezeigten Seite den FTP-Login und das zugehörige Passwort ein, um sich zu verbinden. Sind alle Informationen korrekt, können Sie jetzt mit Ihrem Speicherplatz interagieren.

![ftp login](images/connect-ftp-step4.png){.thumbnail}

#### 2. Via FTP-Client verbinden <a name="ftpsoftware"></a>

Nachdem Sie den FTP-Client Ihrer Wahl (z. B. FileZilla oder Cyberduck) auf Ihrem PC installiert haben, starten Sie diesen. 

Geben Sie bei Aufforderung Ihre Verbindungsdaten ein. Dieser Vorgang variiert je nach dem verwendeten Client und dessen Version. Daher können wir Ihnen nicht alle Vorgehensweisen in dieser Anleitung beschreiben.

Lesen Sie bei Bedarf die nachfolgenden Informationen zu den erforderlichen Angaben:

- **FTP- und SFTP-Server**: Hierbei handelt es sich um die Serveradresse, die Sie benötigen, um auf Ihren Speicherplatz zuzugreifen. Je nach verwendetem Client sind verschiedene Bezeichnungen möglich: „Server“, „Serveradresse“, „Host“. „Hostname“ etc.
- **Haupt-Login**: Hierbei handelt es sich um die Kennung bzw. den Login, den Sie benötigen, um auf Ihren Speicherplatz zuzugreifen. Je nach verwendetem Client sind verschiedene Bezeichnungen möglich: „Benutzer“, „Benutzername“, „Kennung“, „Login“, „Username“ etc.
- **Passwort des FTP-Benutzers**: Hierbei handelt es sich um das Passwort des FTP-Benutzers. Je nach verwendetem Client sind verschiedene Bezeichnungen wie „Passwort“ oder „Password“ möglich.
- **Verbindungsport**: Der Verbindungsport wird meistens automatisch angegeben. Falls Sie diesen jedoch selbst eingeben müssen:
    - Verwenden Sie den Port "21" für eine Verbindung über das FTP-Protokoll.
    - Verwenden Sie den Port "22" für eine Verbindung, die das SFTP-Protokoll verwendet (sofern dieses aktiviert ist).

Sind die Informationen korrekt, zeigt der Client nun den Inhalt Ihres Speicherplatzes an. Möglicherweise erscheint eine Nachricht (auch „Status“ genannt), um zu bestätigen, dass der Inhalt erfolgreich von Ihrem Client geladen wurde.

#### 3. Via SSH-Zugriff verbinden <a name="ssh"></a>

Um sich via SSH zu verbinden, verwenden Sie ein Terminal, um direkt über Befehlszeilen mit Ihrem Speicherplatz zu kommunizieren. 

Dieses Tool ist normalerweise in macOS- und Linux-Systemen vorinstalliert. In einer Windows-Umgebung muss zunächst ein Programm wie PuTTY oder die Funktion „OpenSSH“ installiert werden. Da die Vorgehensweise je nach verwendetem Betriebssystem variiert, können wir sie in dieser Anleitung nicht vollständig beschreiben.

Wenn die SSH-Verbindung hergestellt ist, haben Sie je nach gewählter Vorgehensweise zwei Möglichkeiten, um sich zu verbinden: 

- über ein Programm: Geben Sie die Verbindungsinformationen in die entsprechenden Textfelder ein.
- über eine Befehlszeile: Beachten Sie, dass eine bestimmte Syntax eingehalten werden muss.

Wenn Sie sich via Befehlszeile verbinden, ersetzen Sie die Elemente „sshlogin“, „sshserver“ und „connectionport“ mit den entsprechenden Angaben. Nachdem Sie den Befehl abgeschickt haben, werden Sie dazu aufgefordert, das Passwort des SSH-Benutzers einzugeben.

```ssh
ssh sshlogin@sshserver -p connectionport
```

Sind alle Informationen korrekt, können Sie jetzt mit Ihrem Speicherplatz interagieren. Für weitere Informationen, lesen Sie unsere Anleitung „[SSH auf Ihren Webhostings](https://docs.ovh.com/de/hosting/webhosting_ssh_auf_ihren_webhostings/)“.

![ftp login](images/connect-ftp-step5.png){.thumbnail}

## Weiterführende Informationen

[Passwort eines FTP-Benutzers ändern](https://docs.ovh.com/de/hosting/ftp-benutzer-passwort-aendern/){.external}

[SSH auf Ihren Webhostings](https://docs.ovh.com/de/hosting/webhosting_ssh_auf_ihren_webhostings/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
