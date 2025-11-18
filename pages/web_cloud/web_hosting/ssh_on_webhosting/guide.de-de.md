---
title: "Webhosting - Verwendung des SSH Zugangs"
excerpt: "Erfahren Sie hier, wie Sie den SSH-Zugang zur Verbindung mit Ihrem OVHcloud Webhosting nutzen"
updated: 2025-09-08
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

## Ziel 

Mit OVHcloud Webhosting Angeboten verfügen Sie über einen Speicherplatz für das Online-Stellen der Dateien Ihrer Websites oder Anwendungen. Der Zugriff auf diesen Speicherplatz ist über FTP- oder SSH-Zugangsdaten möglich.

**Diese Anleitung erklärt, wie Sie den SSH-Zugang verwenden, um sich mit Ihrem OVHcloud Webhosting zu verbinden.**

## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](/links/web/hosting) Angebot mit SSH-Zugang.
- Sie sind in Ihrem [OVHcloud Kundencenter](/links/manager) eingeloggt und befinden sich im Bereich `Web Cloud`{.action}.

> [!warning]
> 
> SSH-Zugang zu einem OVHcloud Webhosting ist ab dem Angebot [Pro Hosting](/links/web/hosting-compare) verfügbar.

## In der praktischen Anwendung

Um sich zu verbinden und den SSH Zugang Ihres Webhostings zu verwenden benötigen Sie Folgendes:

- Den aktiven SSH-Benutzer
- Das Passwort des SSH-Benutzers
- Die SSH-Serveradresse Ihres Webhostings
- Den Verbindungsport zum SSH-Server Ihres Webhostings

### 1 - Stellen Sie sicher, dass der SSH-Zugang für den ausgewählten SSH-Benutzer aktiv ist <a name="user-ssh-enablement"></a>

Klicken Sie auf die Tabs, um die **4** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf das Menü `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Klicken Sie auf den Tab `FTP - SSH`{.action}.
>>
>> ![FTP-SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>> 
> **Schritt 4**
>>
>> Auf der neuen Seite werden die Informationen zu Ihrem Speicherplatz angezeigt.
>>
>> Suchen Sie in der Tabelle nach der Spalte `SSH`, um zu überprüfen, ob der betreffende SSH-Benutzer (in der Spalte `Login` der Tabelle) über einen aktiven SSH-Zugang verfügt. Ist dies nicht der Fall, erscheint der Hinweis `Deaktiviert`.
>>
>> ![usessh](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-ssh.png){.thumbnail}
>>
>> Wenn der SSH-Zugang des betreffenden Benutzers in der Tabelle `Deaktiviert` ist, gehen Sie wie folgt vor:
>>
>> - 1: Klicken Sie auf die Schaltfläche `...`{.action} rechts neben der Zeile für den Benutzer und dann auf `Ändern`{.action}.
>> - 2: Wählen Sie im angezeigten Fenster im Abschnitt `Verbindungsprotokolle` die Option `FTP, SFTP und SSH`{.action} aus, und klicken Sie dann auf `Weiter`{.action}.
>> - 3: Überprüfen Sie die Zusammenfassung der angeforderten Änderung, und klicken Sie dann auf `Bestätigen`{.action}.
>>
>> > Wenn Sie es nicht aktivieren können, überprüfen Sie, dass [Ihr OVHcloud Webhosting](/links/web/hosting) über einen SSH-Zugang verfügt.

### 2 - Rufen Sie die notwendigen Informationen für die Verbindung per SSH ab <a name="sshlogin"></a>

Klicken Sie auf die Tabs, um die **4** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf das Menü `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Klicken Sie auf den Tab `FTP - SSH`{.action}.
>>
>> ![FTP-SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>> 
> **Schritt 4**
>>
>> Rufen Sie auf der neuen Seite die in der folgenden Tabelle beschriebenen Elemente ab:
>>
>> |Element|Beschreibung|
>> |---|---|
>> |**SSH-Serveradresse**| Suchen Sie nach `SSH-Server`. Es hat die Form `ssh.clusterXXX.hosting.ovh.net` (wobei `X` eine Zahl zwischen `0` und `9` ist).|
>> |**SSH-Server-Verbindungsport**| Geben Sie `SSH-Port` an. Standardmäßig lautet die Nummer des SSH-Ports `22`.|
>> |**Aktiver SSH-Benutzer**| In der Tabelle unten auf der Seite finden Sie diesen in der Spalte `Login`.<br>Zur Erinnerung: Dieser Benutzer muss [über einen aktiven SSH-Zugriff verfügen](#user-ssh-enablement).|
>> |**Passwort des SSH-Benutzers**| Wenn Sie dieses Passwort vergessen haben, klicken Sie auf den Button `...`{.action} rechts neben der Zeile für den betreffenden Benutzer in der Tabelle unten auf `Passwort ändern`{.action}.|

### 3 - Loggen Sie sich via SSH in den Speicherplatz Ihres Webhostings ein

Um sich via SSH zu verbinden, verwenden Sie ein Terminal, um direkt über Befehlszeilen mit Ihrem Speicherplatz zu interagieren.

> [!primary]
>
> Die Kommandozeile ist standardmäßig auf macOS, Linux und Windows 10 installiert. Für eine ältere Windows-Umgebung muss eine Software wie [PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows) installiert oder die OpenSSH-Funktion hinzugefügt werden.

Es gibt nun zwei Möglichkeiten, um sich via SSH mit Ihrem Webhosting zu verbinden. 

**Klicken Sie unten auf die gewünschte Verbindungsmethode, um die Erläuterungen anzuzeigen.**

/// details | Von einem Terminal aus

> [!warning]
>
> Es gibt keinen „Superuser“ (oder „Root“) via SSH auf unseren Hosting Angeboten.

Wenn das Terminal geöffnet ist, verwenden Sie folgenden Befehl und ersetzen Sie die Elemente `yourlogin`, `ssh.clusterXXX.hosting.ovh.net` und `22` durch die Elemente, die Ihren SSH-Zugangsdaten entsprechen.

```bash
ssh yourlogin@ssh.clusterXXX.hosting.ovh.net -p 22
```

Nachdem Sie den Befehl abgeschickt haben, werden Sie aufgefordert, das Passwort des SSH-Benutzers einzugeben.

![usessh](/pages/assets/screens/other/web-tools/terminal/terminal-ssh-login.png){.thumbnail}

///

/// details | Software

Geben Sie nach dem Öffnen der Software (z.B. PuTTY) die SSH-Verbindungsinformationen ein. Diese Vorgehensweise ist abhängig von Ihrem Passwort und wir können sie in dieser Anleitung nicht im Detail beschreiben. Nachfolgend finden Sie eine Erinnerung an die Informationen, die Sie dort eingeben müssen:

- **SSH-Server**: Geben Sie die [in Schritt 2](#sshlogin) erhaltene SSH-Serveradresse ein. Je nach verwendetem Programm sind verschiedene Bezeichnungen möglich: „Serveradresse“, „Host“. „Hostname“ etc.
- **Verbindungsport**: Geben Sie den [in Schritt 2](#sshlogin) erhaltenen Verbindungsport ein.
- **SSH-Login**: Geben Sie den SSH-Benutzer ein. Je nach verwendetem Programm sind verschiedene Bezeichnungen möglich: „Benutzername“, „Kennung“, „Login“, „Username“ etc.
- **Passwort des SSH-Benutzers**: Geben Sie das Passwort des SSH-Benutzers ein. Je nach verwendetem Programm sind verschiedene Bezeichnungen wie „Passwort“ oder „Kennwort“ möglich.

///

Nachdem Sie sich eingeloggt haben, können Sie zum nächsten Abschnitt übergehen.

### 4 - Interagieren Sie via SSH mit Ihrem Speicherplatz <a name="ssh-using"></a>

Um mit Ihrem Speicherplatz zu interagieren, müssen Sie Befehle verwenden. Diese haben eine direkte Bedeutung aus dem Englischen. Verwenden Sie bei Bedarf die unten stehende Liste. Beachten Sie: **Diese Angaben sind nicht vollständig**.

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

Sie können ein Skript auch mit einer bestimmten PHP-Version ausführen. Verwenden Sie z. B. für die PHP-Version 7.1 den folgenden Befehl. Passen Sie seine Elemente an Ihre Situation an.

```sh
/usr/local/php7.1/bin/php myscript.php
```

Je nach der PHP-Version, die Sie verwenden möchten, muss die Ausführungsumgebung möglicherweise aus Kompatibilitätsgründen geändert werden. Weitere Informationen finden Sie in unserer Dokumentation „[Webhosting: Umgebung, PHP-Version, .ovhconfig](/pages/web_cloud/web_hosting/configure_your_web_hosting)“.

> [!primary]
>
> Dateien und/oder Ordner können auch mit dem **S**ecure **C**opy **P**rotocol (**SCP**) kopiert werden.
> Dieses Protokoll verwendet das SSH-Protokoll, um Inhalte sicher zu duplizieren zwischen:
>
> - Ein lokaler Computer/Gerät und ein Remoteserver
> - Zwei Remote-Server
>
> Weitere Informationen zur Verwendung des Befehls `scp` mit unseren OVHcloud Webhostings finden Sie in unserer Anleitung „[Webhosting - Dateien mit dem Befehl SCP kopieren](/pages/web_cloud/web_hosting/using-scp-command)“.

## Weiterführende Informationen

[Webhosting: U mgebung, PHP-Version, .ovhconfig](/pages/web_cloud/web_hosting/configure_your_web_hosting)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
