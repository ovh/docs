---
title: 'Mit dem Speicherplatz eines Webhostings verbinden'
slug: verbindung-ftp-speicher-webhosting
excerpt: 'Hier erfahren Sie, wie Sie sich mit dem Speicherplatz Ihres OVH Webhostings verbinden.'
section: 'FTP und SSH'
order: 2
---

**Stand 04.04.2019**

## Einleitung

Mit OVH Webhosting Angeboten verfügen Sie über einen Speicherplatz für das Online-Stellen der Dateien Ihrer Websites und Anwendungen. Auf diesen können Sie mit den entsprechenden Passwörtern via SSH oder als FTP-Benutzer zugreifen.

**Hier erfahren Sie, wie Sie sich mit dem Speicherplatz Ihres OVH Webhostings verbinden.**

## Voraussetzungen

- Sie verfügen über ein [OVH Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external} Angebot.
- Sie sind in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} eingeloggt und befinden sich im Bereich `Web Cloud`{.action}.

## Beschreibung

### Schritt 1: Erforderliche Verbindungsinformationen abrufen

Um sich mit Ihrem Speicherplatz zu verbinden, benötigen Sie die folgenden Elemente:

- einen aktiven FTP- oder SSH-Benutzer
- das Passwort für den FTP- bzw. SSH-Benutzer
- die Serveradresse
- den Verbindungsport des Servers

> [!primary]
>
> Diese Informationen wurden Ihnen bei der Installation Ihres Webhostings per E-Mail mitgeteilt und sind über Ihr OVH Kundencenter verfügbar.
>
> **Wenn Sie diese Daten bereits haben**, gehen Sie direkt zu Schritt 2 „[Auf den Speicherplatz zugreifen](./#schritt-2-auf-den-speicherplatz-zugreifen)“ über.
> 

Wenn Sie nicht mehr im Besitz dieser Daten sind, loggen Sie sich in Ihr [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und klicken Sie im Bereich „Web“ links in der Menüleiste auf `Hosting-Pakete`{.action}. Wählen Sie das betreffende Hosting aus und gehen Sie dann auf den Tab `FTP - SSH`{.action}. 

Hier werden alle zum Speicherplatz gehörigen Informationen sowie eine Tabelle angezeigt, in der die für Ihr Webhosting angelegten FTP- und SSH-Benutzer aufgelistet werden.

![ftp login](images/connect-ftp-step1.png){.thumbnail}

In den angezeigten Informationen finden Sie alle Elemente, die Sie für die Verbindung mit Ihrem Speicherplatz brauchen. Wenn nötig, lesen Sie die nachstehende Tabelle, um die Informationen zu identifizieren. Beachten Sie, dass je nach Ihrem [OVH Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external} Angebot eventuell nicht alle Angaben angezeigt werden.

|Information|Beschreibung|
|---|---|
|FTP-Server:|Hier finden Sie die Serveradresse, die Sie benötigen, um auf Ihren Speicherplatz zuzugreifen. Verwenden Sie diese Adresse, wenn Sie sich über einen FTP-Client verbinden möchten.<br><br> Der übliche Verbindungsport ist der Port „21“. Verwenden Sie den Port „22“, um sich via SFTP-Protokoll zu verbinden (das heißt, wenn dieses aktiviert ist).|
|SSH-Zugang zum Cluster|Das angezeigte Element enthält zwei Informationen: <br>**\- Serveradresse**: Die Adresse beginnt hinter „ssh://“ und endet vor dem Doppelpunkt („:“).<br> **\- Verbindungsport**: Der Port ist die Nummer hinter „:“. <br><br>So ist zum Beispiel bei ssh://`ssh.cluster023.hosting.ovh.net`:`22`/ „ssh.cluster023.hosting.ovh.net“ die Serveradresse und „22“ der Verbindungsport.|
|FTP Haupt-Login:|Hierbei handelt es sich um den Haupt-FTP-Benutzer Ihres Hostings. Sie finden alle FTP-Benutzer Ihres Webhostings in der Tabelle in der Spalte „FTP-Login".|
|SSH Haupt-Login:|Hierbei handelt es sich um den Haupt-SSH-Benutzer Ihres Hostings. Sie finden alle SSH-Benutzer Ihres Webhostings in der Tabelle in der Spalte SSH-Login".|

Wenn Sie das Passwort eines FTP- oder SSH-Benutzers vergessen haben, klicken Sie je nach Angebot auf das Bleistift-Symbol oder den Button `...`{.action} und dann auf `Passwort ändern`{.action}. Weitere Informationen hierzu finden Sie in der Anleitung „[Passwort eines FTP-Benutzers ändern](https://docs.ovh.com/de/hosting/ftp-benutzer-passwort-aendern/)“.

![ftp login](images/connect-ftp-step2.png){.thumbnail}

Sie sollten nun im Besitz aller notwendigen Elemente sein, um sich mit Ihrem Speicherplatz zu verbinden.

### Schritt 2: Auf den Speicherplatz zugreifen

Um sich mit dem Speicherplatz zu verbinden, haben Sie verschiedene Möglichkeiten. Bitte wählen Sie aus den in dieser Anleitung behandelten Vorgehensweisen die von Ihnen gewünschte aus.

[1. Via FTP-Explorer verbinden](./#1-via-ftp-explorer-verbinden): Dieser ermöglicht es Ihnen, über einen Webbrowser auf Ihren Speicherplatz zuzugreifen.

[2. Via FTP-Client verbinden](./#2-via-ftp-client-verbinden): So können Sie über ein Programm wie FileZilla oder Cyberduck auf Ihren Speicherplatz zugreifen. Hierzu muss das gewünschte Programm auf Ihrem PC installiert sein.

[3. Via SSH-Zugriff verbinden](./#3-via-ssh-zugriff-verbinden): Verbinden Sie sich via SSH mit Ihrem Speicherplatz. Für diesen Zugriffstyp sind fortgeschrittene Kenntnisse sowie ein passendes [OVH Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external} Angebot erforderlich.

#### 1. Via FTP-Explorer verbinden

Um sich via FTP-Explorer mit Ihrem Speicherplatz zu verbinden, loggen Sie sich zunächst im [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein, klicken Sie im Bereich „Web“ links im Menü auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus. 

Gehen Sie dann auf den Tab FTP - SSH und klicken Sie auf den Button FTP-Explorer. 

![ftp login](images/connect-ftp-step3.png){.thumbnail}

Geben Sie auf der angezeigten Seite den FTP-Login und das zugehörige Passwort ein, um sich zu verbinden. Sind alle Informationen korrekt, können Sie jetzt mit Ihrem Speicherplatz interagieren.

![ftp login](images/connect-ftp-step4.png){.thumbnail}

#### 2. Via FTP-Client verbinden

Nachdem Sie den FTP-Client Ihrer Wahl (z. B. FileZilla oder Cyberduck) auf Ihrem PC installiert haben, starten Sie diesen. 

Geben Sie bei Aufforderung Ihre Verbindungsdaten ein. Dieser Vorgang variiert je nach dem verwendeten Client und dessen Version. Daher können wir Ihnen nicht alle Vorgehensweisen in dieser Anleitung beschreiben.

Lesen Sie bei Bedarf die nachfolgenden Informationen zu den erforderlichen Angaben:

|Anzugebende Information:|Beschreibung|
|---|---|
|FTP-Server:|Hierbei handelt es sich um die Serveradresse, die Sie benötigen, um auf Ihren Speicherplatz zuzugreifen.<br><br> Je nach verwendetem Client sind verschiedene Bezeichnungen möglich: „Server“, „Serveradresse“, „Host“. „Hostname“ etc.|
|FTP-Login|Hierbei handelt es sich um die Kennung bzw. den Login, den Sie benötigen, um auf Ihren Speicherplatz zuzugreifen.<br><br> Je nach verwendetem Client sind verschiedene Bezeichnungen möglich: „Benutzer“, „Benutzername“, „Kennung“, „Login“, „Username“ etc.|
|FTP-Benutzerpasswort|Hierbei handelt es sich um das Passwort des FTP-Benutzers.<br><br> Je nach verwendetem Client sind verschiedene Bezeichnungen wie „Passwort“ oder „Password“ möglich.|
|Verbindungsport|Der Verbindungsport wird meistens automatisch angegeben. Falls Sie diesen jedoch selbst eingeben müssen:<br><br>\- verwenden Sie den Port „21“ für eine Verbindung via FTP.<br>\- verwenden Sie den Port „22“ für eine Verbindung via SFTP (falls das Protokoll aktiviert ist).|

Sind die Informationen korrekt, zeigt der Client nun den Inhalt Ihres Speicherplatzes an. Möglicherweise erscheint eine Nachricht (auch „Status“ genannt), um zu bestätigen, dass der Inhalt erfolgreich von Ihrem Client geladen wurde.

#### 3. Via SSH-Zugriff verbinden

Um sich via SSH zu verbinden, verwenden Sie ein Terminal, um direkt über Befehlszeilen mit Ihrem Speicherplatz zu kommunizieren. 

Dieses Tool ist standardmäßig auf macOs oder Linux installiert. In einer Windows-Umgebung muss zunächst ein Programm wie PuTTY oder die Funktion „OpenSSH“ installiert werden. Da die Vorgehensweise je nach verwendetem Betriebssystem variiert, können wir sie in dieser Anleitung nicht vollständig beschreiben.

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
