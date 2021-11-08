---
title: 'SSH-Zugang Ihres Webhostings verwenden'
excerpt: 'Erfahren Sie hier, wie Sie den SSH-Zugang zur Verbindung mit Ihrem OVHcloud Webhosting nutzen'
id: '1962'
slug: webhosting_ssh_auf_ihren_webhostings
legacy_guide_number: g1962
section: 'FTP und SSH'
order: 4
---

**Letzte Aktualisierung am 21.09.2020**

## Ziel

Mit OVHcloud Webhosting Angeboten erhalten Sie einen Speicherplatz zum Online-Stellen der Dateien Ihrer Websites und Anwendungen. Auf diesen können Sie mithilfe eines SSH- oder FTP-Benutzers und den zugehörigen Passwörtern zugreifen.

**Diese Anleitung erklärt, wie Sie den SSH-Zugang verwenden, um sich mit Ihrem OVHcloud Webhosting zu verbinden.**

## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external} Angebot mit SSH-Zugang.
- Sie verfügen über die erforderlichen Informationen, um sich via SSH mit Ihrem Speicherplatz zu verbinden.
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} eingeloggt und befinden sich im Bereich `Web Cloud`{.action}.

## In der praktischen Anwendung

### Schritt 1: Sicherstellen, dass der SSH-Zugang aktiv ist

Loggen Sie sich zunächst in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und klicken Sie im Bereich `Web Cloud`{.action} links in der Menüleiste auf `Hosting-Pakete`{.action}. Wählen Sie das betreffende Hosting aus und gehen Sie dann auf den Tab `FTP - SSH`{.action}. Es werden nun die Informationen für Ihren Speicherplatz angezeigt. 

Gehen Sie in der angezeigten Tabelle zur Spalte „SSH“ und überprüfen Sie, dass der betreffende SSH-Benutzer (oder „SSH-Login“) über einen aktiven SSH-Zugang verfügt. Ist das nicht der Fall, wird der Status „Deaktiviert“ angezeigt.

![SSH verwenden](images/use-ssh-step1.png){.thumbnail}

Ist der SSH-Zugang nicht aktiv, klicken Sie rechts neben dem betreffenden Benutzer auf den Button `...`{.action} und dann auf `Bearbeiten`{.action}. Aktivieren Sie im daraufhin angezeigten Fenster den SSH-Zugang und schließen Sie die Änderung ab. Wenn Sie den Zugang nicht aktivieren können, überprüfen Sie, dass [Ihr OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external} über einen SSH-Zugang verfügt.

### Schritt 2: Erforderliche Verbindungsinformationen abrufen

Um sich per SSH in Ihren Speicherplatz einzuloggen, benötigen Sie die nachfolgenden Elemente. Sollten Sie diese Informationen nicht zur Hand haben, können Sie sie im Tab `FTP-SSH`{.action} einsehen.

|Element|Wo finde ich dieses?|
|---|---|
|Aktiver SSH-Benutzer|Diesen finden Sie in der Tabelle in der Spalte „SSH-Login“. Denken Sie daran, dass dieser Benutzer [über einen aktiven SSH-Zugang verfügen](./#schritt-1-sicherstellen-dass-der-ssh-zugang-aktiv-ist) muss.|
|SSH-Benutzerpasswort|Wenn Sie dieses Passwort vergessen haben, können Sie es ändern, indem Sie auf den Button `...`{.action} und dann auf `Passwort ändern`{.action} klicken.|
|SSH-Serveradresse|Gehen Sie zu „SSH-Zugang zum Cluster“. Die SSH-Serveradresse beginnt hinter „ssh://“ und endet vor dem Doppelpunkt („:“).|
|SSH-Verbindungsport des Servers|Gehen Sie zu „SSH-Zugang zum Cluster“. Die Port-Nummer steht hinter dem Doppelpunkt („:“).|

Beispiel: In `ssh://ssh.cluster023.hosting.ovh.net:22/`, ist „ssh.cluster023.hosting.ovh.net“ die SSH-Serveradresse und „22“ der SSH-Verbindungsport.

![SSH verwenden](images/use-ssh-step2.png){.thumbnail}

### Schritt 3: Via SSH in den Speicherplatz einloggen

Verwenden Sie für den Login via SSH ein Terminal, um direkt über Befehlszeilen mit Ihrem Speicherplatz zu kommunizieren. 

Dieses Tool ist standardmäßig auf macOS, Linux und Windows 10 installiert. Bei einer älteren Windows-Umgebung muss ein Programm wie PuTTY installiert oder die OpenSSH-Funktion hinzugefügt werden. Dieser Vorgang variiert je nach verwendetem Betriebssystem. Wir können die Vorgehensweise daher in dieser Anleitung nicht im Detail beschreiben.

Je nach der von Ihnen verwendeten Methode gibt es nun zwei Arten, um sich via SSH zu verbinden:

#### 3.1 Über ein Terminal

> [!warning]
> Für unsere Shared Hosting Angebote gibt es keinen „Superuser“- oder „root“-Zugriff via SSH.

Wenn das Terminal geöffnet ist, verwenden Sie folgenden Befehl und ersetzen Sie die Elemente „sshlogin“, „sshserver“ und „connectionport“ mit den entsprechenden Elementen aus Ihren SSH-Verbindungsinformationen. 

```ssh
ssh sshlogin@sshserver -p connectionport
```

Nach Senden des Befehls werden Sie dazu aufgefordert, das Passwort des SSH-Benutzers einzugeben. Wenn Sie eingeloggt sind, können Sie zum nächsten Schritt „[Via SSH mit Ihrem Speicherplatz interagieren](./#schritt-4-via-ssh-mit-ihrem-speicherplatz-interagieren_1)“ übergehen.

![SSH verwenden](images/use-ssh-step3.png){.thumbnail}

#### 3.2 Über eine Anwendung

Wenn Sie die Anwendung (zum Beispiel PuTTY) geöffnet haben, geben Sie die SSH-Verbindungsinformationen ein. Das die Vorgehensweise vom verwendeten Programm abhängig ist, können wir diese hier nicht im Detail aufführen. Lesen Sie bei Bedarf die nachfolgenden Beschreibungen zu den anzugebenden Informationen:

|Anzugebende Information|Beschreibung|
|---|---|
|SSH-Server|Geben Sie die [in Schritt 2](./#schritt-2-erforderliche-verbindungsinformationen-abrufen) erhaltene SSH-Serveradresse ein. Je nach verwendetem Programm sind verschiedene Bezeichnungen möglich: „Serveradresse“, „Host“. „Hostname“ etc.|
|Verbindungsport|Geben Sie den [in Schritt 2](./#schritt-2-erforderliche-verbindungsinformationen-abrufen) erhaltenen Verbindungsport ein.|
|SSH-Login|Geben Sie den SSH-Benutzer ein. Je nach verwendetem Programm sind verschiedene Bezeichnungen möglich: „Benutzername“, „Kennung“, „Login“, „Username“ etc.|
|SSH-Benutzerpasswort|Geben Sie das Passwort des SSH-Benutzers ein.<br><br> Je nach verwendetem Programm sind verschiedene Bezeichnungen wie „Passwort“ oder „Kennwort“ möglich.|

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

Je nach der PHP-Version, die Sie verwenden möchten, kann es sein, dass die Ausführungsumgebung aus Kompatibilitätsgründen angepasst werden muss. Weitere Informationen finden Sie in den unten aufgeführten Anleitungen.

## Weiterführende Informationen

[Konfiguration Ihres Webhostings bearbeiten](../die_laufzeitumgebung_meines_webhostings_andern/)

[.ovhconfig-Datei Ihres Webhostings konfigurieren](../ovhconfig-datei-konfigurieren/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
