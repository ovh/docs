---
title: SSH-Schlüssel erstellen und verwenden
excerpt: Erfahren Sie hier, wie Sie SSH-Schlüssel für eine sichere Verbindung zu Ihrem Server verwenden
updated: 2023-07-24
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>


## Ziel

Die Verwendung des SSH-Protokolls ermöglicht einen sicheren Kanal über ein ungesichertes Netzwerk innerhalb einer Client-Server-Architektur, um einen SSH-Client mit einem SSH-Server zu verbinden. Mit dem Erstellen eines SSH-Schlüsselsatzes erhalten Sie einen öffentlichen und einen privaten Schlüssel. Sie können den öffentlichen Schlüssel auf einem Server ablegen und sich dann über einen Client verbinden, der über den zugehörigen privaten Schlüssel verfügt. Wenn der öffentliche und der private SSH-Schlüssel übereinstimmen, werden Sie eingeloggt, ohne dass ein Passwort benötigt wird.

Dies ist in der Regel die sicherste und bequemste Verbindungsmethode.

**Diese Anleitung erläutert, wie Sie SSH-Schlüssel auf Ihrem lokalen Gerät konfigurieren, um sie für den sicheren Zugriff auf Remoteserver zu verwenden.**

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie haben einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/) oder einen [VPS](https://www.ovhcloud.com/de/vps/) in Ihrem Kunden-Account.
- Sie haben eine SSH-Client-Anwendung installiert (Befehlszeile oder GUI).
- Sie haben administrativen Zugang (Root) über SSH auf Ihren Server.

> [!primary]
> Diese Anleitung gilt nicht für Standardinstallationen von **Windows Server**, da sich diese auf das `Remote Desktop Protocol` (RDP) für Verbindungen stützen. SSH-Verbindungen werden jedoch für den Rescue-Modus von OVHcloud verwendet. Weitere Informationen finden Sie im Abschnitt [Weiterführende Informationen](#gofurther) dieser Anleitung.
>

## In der praktischen Anwendung

Beachten Sie auch unsere Anleitungen zu "Ersten Schritten": <a name="getstarted"></a>

- Für einen [Dedicated Server](/pages/cloud/dedicated/getting-started-with-dedicated-server)
- Für einen [Dedicated Server der Reihe **Eco**](/pages/cloud/dedicated/getting-started-with-dedicated-server-eco)
- Für einen [VPS](/pages/cloud/vps/starting_with_a_vps)

Lesen Sie auch die Einführung zum [SSH Protokoll](/pages/cloud/dedicated/ssh_introduction).

Die folgenden Anweisungen behandeln zwei Methoden zum Verwenden von SSH-Schlüsseln:

- [Erstellung eines **Open SSH** Schlüsselpaars und Verbindung mit einem Server über SSH-Client in der Befehlszeile](#openssh)
- [Erstellung eines Schlüsselpaars mit `PuTTY` und Verbindung mit einem Server über den SSH-Client von `PuTTY`](#useputty)

Sie können beide Methoden nebeneinander verwenden, aber beachten Sie, dass `PuTTY` die Schlüsseldateien in einem eigenen Format erstellt, was sie inkompatibel mit den mit den in **Open SSH** erstellten SSH-Schlüsseldateien macht.

Dies bedeutet, dass ein privater Schlüssel, der mit dem SSH-Client in der Befehlszeile erstellt wurde, zuerst [in das `PuTTY`-Format konvertiert werden muss und umgekehrt](https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html#faq-ssh2-keyfmt){.external}.

### Erstellung eines SSH-Schlüsselpaars in der Befehlszeile <a name="openssh"></a>

Öffnen Sie die Befehlszeilenanwendung (`Terminal`) auf einem **Mac**-Computer oder einem Gerät, auf dem ein **Linux**-Betriebssystem installiert ist.

Stellen Sie sicher, dass sich im Verzeichnis `$HOME` ein Ordner namens `.ssh` befindet. Wenn der Ordner nicht vorhanden ist, erstellen Sie ihn:

```bash
mkdir ~/.ssh
```

Öffnen Sie auf einem aktuellen **Windows** Betriebssystem die Eingabeaufforderung, indem Sie "cmd" in die Suchleiste eingeben (oder öffnen Sie `PowerShell` über das Menü).

Gehen Sie zum Verzeichnis `.ssh` Ihres aktiven **Windows** Benutzers (Standard: `C:\Users\WindowsUsername.ssh`):

```powershell
cd .ssh
```

<a name="createnewkey"></a>
Verwenden Sie dann den folgenden Befehl, um einen 4096-Bit-RSA-Schlüssel zu erstellen:

```bash
ssh-keygen -b 4096
```

Wenn Sie die Option `-t` mit diesem Befehl verwenden, können Sie eine andere Verschlüsselungsmethode angeben. Beispiel:

```bash
ssh-keygen -t ed25519 -a 256
```

Die Befehlszeile fordert Sie auf, den neu erstellten Schlüssel in der Standarddatei zu speichern:


```console
Your identification has been saved in /home/user/.ssh/id_rsa.
Your public key has been saved in /home/user/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:MRk+Y0zCOoOkferhkTvMpcMsYspj212lK7sEauNap user@hostname
The key's randomart image is:
+---[RSA 4096]----+
|     .. o        |
|    . .= o       |
|   o o  X        |
|. . . .          |
|. .=.o .S.       |
| =o.o.  .   .    |
|o +   .  . o ..  |
|.. .  .   oEoo . |
|o.        .o+oo  |
+----[SHA256]-----+
```

Bestätigen Sie mit `Enter`, um den vorgeschlagenen Dateinamen zu akzeptieren oder geben Sie einen individuellen Namen ein. Dies ist sinnvoll, wenn mehrere Schlüsselpaare im Verzeichnis `.ssh` platziert werden. Weitere Informationen hierzu finden Sie im Abschnitt "[Verwaltung mehrerer SSH-Schlüssel auf Ihrem lokalen Gerät](#multiplekeys)" in dieser Anleitung.<br>
In diesem Beispiel werden die Standarddateinamen `id_rsa` und `id_rsa.pub` verwendet.

Sie können Ihren SSH-Schlüssel im nächsten Schritt mit einer Passphrase schützen. Dies ist eine empfohlene Maßnahme für erhöhte Sicherheit.

> [!warning]
>
> Der Remotezugriff auf den Server ist nur so sicher wie das Clientgerät, das den privaten Schlüssel speichert. Der Schutz Ihres Geräts und Ihrer Dateien vor unbefugtem Zugriff ist daher bei der Verwendung von SSH-Schlüsseln von entscheidender Bedeutung.
> 
> Aus Gründen der Benutzerfreundlichkeit und Sicherheit empfiehlt es sich, einen Passwort-Manager auf Ihrem Gerät zu verwenden, wie zum Beispiel die Open-Source-Lösung `KeePass`.
> 

Alle SSH-Schlüssel sollten im Verzeichnis `.ssh` gespeichert werden. Die Erweiterung `.pub` wird den Dateinamen von öffentlichen Schlüsseln hinzugefügt.

```console
Your identification has been saved in /home/user/.ssh/id_rsa.
Your public key has been saved in /home/user/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:MRk+Y0zCOoOkferhkTvMpcMsYspj212lK7sEauNap user@hostname
The key's randomart image is:
+---[RSA 4096]----+
|     .. o        |
|    . .= o       |
|   o o  X        |
|. . . .          |
|. .=.o .S.       |
| =o.o.  .   .    |
|o +   .  . o ..  |
|.. .  .   oEoo . |
|o.        .o+oo  |
+----[SHA256]-----+
```

<a name="publickey"></a>

Um Ihren öffentlichen Schlüssel anzuzeigen und zu exportieren, wenden Sie den Befehl `cat` auf die Schlüsseldatei (`.pub`) an. Kopieren Sie die vollständige Schlüsselzeichenfolge in die Zwischenablage, um sie [zum Server hinzufügen](#addserverkey).

```bash
cat ~/.ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC8teh2NJ42qYZV98gTNhumO1b6rMYIkAfRVazl
k6dSS3xf2MXJ4YHsDacdjtJ+evXCFBy/IWgdkFtcvsGAMZ2N1RdvhDyQYcy6NDaJCBYw1K6Gv5fJ
SHCiFXvMF0MRRUSMneYlidxUJg9eDvdygny4xOdC6c1JrPrSgOc2nQuKeMpOoOWLINIswg1IIFVk
kFMPrFivP8Z6tidzVpAtbr1sXmJGZazYWrU3FoK2a1sF1zEWrmlMOzX81zEWrmlMOzX8CpZW8Rae
i4ANmLy7NULWK36yU0Rp9bFJ4o0/4PTkZiDCsK0QyHhAJXdLN7ZHpfJtHIPCnexmwIMLfIhCWhO5
 user@hostname
```


> [!primary]
>
> In einem **MacOS** Terminal können Sie die Befehle `pbcopy` und `pbpaste` verwenden, um Zeichenfolgen schneller zu handhaben. Verwenden Sie beispielsweise diesen Befehl, um den Schlüssel aus der Datei `id_rsa.pub` in die Zwischenablage zu kopieren:
>
> `pbcopy < ~/.ssh/id_rsa.pub`
>

Öffnen Sie die Datei unter einem **Windows** Betriebssystem mit der Anwendung `Notepad` im Datei-Explorer (Rechtsklick auf die Datei und dann `Öffnen mit`), oder verwenden Sie einen der folgenden Befehle (in `\Users\WindowsUsername\.ssh`):

- `cmd`

```powershell
more id_rsa.pub
```

- `PowerShell`

```powershell
cat id_rsa.pub
```

Kopieren Sie die vollständige Schlüsselzeichenfolge in die Zwischenablage, um sie [zum Server hinzufügen](#addserverkey).

> [!primary]
>
> **Zwischenablage verwenden**
>
> Wenn Sie in der Befehlszeile unter **Windows** arbeiten, klicken Sie mit der rechten Mautaste, um den Inhalt der Zwischenablage in das Befehlszeilenfenster **einzufügen**. Um eine Zeichenfolge aus dem Befehlszeilenfenster zu **kopieren**, markieren Sie sie mit der Maus und drücken Sie die `Eingabetaste`. Sie finden diese Funktionen auch über einen `Rechtsklick` auf die Menüleiste.
>

### SSH-Schlüsselpaar mit PuTTY erstellen <a name="useputty"></a> 

[PuTTY](https://putty.org/){.external} ist ein Open Source SSH Client mit grafischer Benutzeroberfläche, verfügbar für **Windows** und andere Betriebssysteme, der zusätzliche Software zum Erstellen von SSH-Schlüsseln beinhaltet: `PuTTY Key Generator` (kurz `PuTTYgen`).

> [!primary]
>
> Der Hauptzweck von `PuTTY` ist die Verwaltung von SSH-Verbindungen von einem **Windows** Client zu einem **GNU/Linux** Server. `PuTTY` speichert Schlüsseldateien in einem bestimmten Format und ist daher nicht mit den SSH-Schlüsseldateien kompatibel, die mit dem **Open SSH** Client erstellt wurden, der nativ in den meisten modernen Betriebssystemen enthalten ist.
>
> Wie oben in dieser Anleitung erwähnt, können in der *Befehlszeile* generierte Schlüssel [in das Format `PPK`](https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html#faq-ssh2-keyfmt) für die Verwendung mit dem `PuTTY` Client konvertiert werden. Für eine bequeme Verwendung von SSH-Schlüsseln wählen Sie bestenfalls eine der beiden Optionen und behalten sie bei (private Schlüssel mit **Open SSH** oder private Schlüssel mit `PuTTY`).
>

Wenn `PuTTY` noch nicht installiert ist (sehen Sie in Ihrer Anwendungsliste nach oder verwenden Sie die Suchfunktion), laden Sie `PuTTY` von der [offiziellen Website](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html){.external} herunter. Das empfohlene Installationspaket enthält bereits `PuTTYgen`, die Anwendung ist aber auch als eigenständige Datei auf der Website verfügbar.

Öffnen Sie `PuTTYgen`, und wählen Sie einen der unterstützten Verschlüsselungsalgorithmen aus. In diesem Beispiel wird RSA verwendet. Geben Sie in der rechten unteren Ecke 4096 als Anzahl von Bits ein, und klicken Sie auf die Schaltfläche `Generate`{.action}.

![PuTTy Key](images/puttygen_01.png){.thumbnail}

Bewegen Sie den Mauszeiger frei im Bereich unter der Statusanzeige:

![PuTTy Key](images/puttygen_02.gif){.thumbnail}

Der Schlüssel ist bereit, sobald die Statusanzeige voll ist.

![PuTTy Key](images/puttygen_03.png){.thumbnail}

Kopieren Sie die vollständige Schlüsselzeichenfolge in die Zwischenablage, um sie [zum Server hinzufügen](#addserverkey) und optional [in Ihr Kundencenter importieren](#importkey). Speichern Sie beide Schlüssel als Dateien, indem Sie auf die entsprechenden Schaltflächen klicken. Geben Sie eine Passphrase ein, um die Dateien abzusichernn.

> [!warning]
>
> Der Remotezugriff auf den Server ist nur so sicher wie das Clientgerät, das den privaten Schlüssel speichert. Der Schutz Ihres Geräts und Ihrer Dateien vor unbefugtem Zugriff ist daher bei der Verwendung von SSH-Schlüsseln von entscheidender Bedeutung.
> 
> Aus Gründen der Benutzerfreundlichkeit und Sicherheit empfiehlt es sich, einen Passwort-Manager auf Ihrem Gerät zu verwenden, wie zum Beispiel die Open-Source-Lösung `KeePass`.
>

Einer der Vorteile von `PuTTY` ist die Möglichkeit, verschiedene Verbindungen als "Sessions" zu speichern. Weitere Informationen finden Sie unten im Abschnitt "[Verwaltung mehrerer SSH-Schlüssel auf Ihrem lokalen Gerät](#puttykeys)".

Weitere Informationen zu SSH-Verbindungen finden Sie in den "[Erste Schritte](#getstarted)"-Anleitungen und unserer [Einführung in das SSH-Protokoll](/pages/cloud/dedicated/ssh_introduction).

### SSH-Schlüssel zu Ihrem Server hinzufügen <a name="addserverkey"></a>

[Verbinden Sie sich mit Ihrem Server](/pages/cloud/dedicated/ssh_introduction) und stellen Sie sicher, dass Sie sich im Verzeichnis `$HOME` Ihres Benutzers befinden. Wenn er noch nicht existiert, erstellen Sie den Ordner `.ssh`:

```bash
mkdir ~/.ssh
```

Um den Schlüssel für den aktuellen Benutzer zu speichern, öffnen (oder erstellen) Sie die Datei `authorized_keys` mit Ihrem bevorzugten Texteditor (`nano` wird in diesem Beispiel verwendet):


```bash
nano ~/.ssh/authorized_keys
```

Fügen Sie Ihren [**öffentlichen Schlüssel**](#publickey) in diese Datei ein. Speichern Sie die Datei, und beenden Sie den Editor. Starten Sie Ihren Server oder nur den OpenSSH-Dienst mit einem der folgenden Befehle neu (der entsprechende Befehl kann je nach Betriebssystem variieren):

```bash
sudo systemctl restart ssh
```

```bash
sudo systemctl restart sshd
```

Um zu überprüfen, ob Ihr Schlüssel korrekt konfiguriert wurde, loggen Sie sich mit folgendem Befehl auf Ihrem Server ein. Ersetzen Sie "user" durch den Benutzernamen, für den die Schlüssel erstellt wurden, und "IP_ADDRESS" durch die IP-Adresse (oder den Hostnamen) des Servers, auf den Sie zugreifen möchten:

```bash
ssh user@IP_ADDRESS
```

Beispiel:
    
```bash
ssh ubuntu@169.254.10.250
```

### Zusätzliche öffentliche Schlüssel zu Ihrem Server hinzufügen

Um SSH-Schlüssel für andere Benutzer hinzuzufügen, die auf Ihren Server zugreifen, wiederholen Sie die Schritte zur Schlüsselerstellung, verwenden Sie jedoch den entsprechenden `$HOME`-Ordner oder in **Windows** das `Users`-Verzeichnis des betreffenden Benutzers, um die SSH-Schlüssel zu erstellen und zu speichern (oder führen Sie die Befehle auf dem dedizierten Gerät des betreffenden Benutzers aus). Fügen Sie anschließend den neuen öffentlichen Schlüssel wie oben beschrieben zum Server in `authorized_keys` hinzu.

#### Löschen öffentlicher Schlüssel von Ihrem Server

Öffnen Sie die Datei `authorized_keys` (wie [oben beschrieben](#addserverkey)), und löschen Sie die Schlüsselzeichenfolge für den Benutzer, dessen Zugriff widerrufen werden soll.

Speichern Sie die Datei, und schließen Sie den Editor.

### Verwaltung mehrerer SSH-Schlüssel auf Ihrem lokalen Gerät <a name="multiplekeys"></a>

Sie können mehrere SSH-Schlüsselpaare verwenden, um Verbindungen zu verschiedenen Remote-Hosts herzustellen. Wenn Sie `PuTTY` verwenden, fahren Sie mit dem[entsprechenden Abschnitt unten](#puttykeys) fort.

Da alle Schlüssel im Ordner `.ssh` auf dem lokalen Gerät gespeichert werden sollten, müssen die Dateinamen unterschiedlich sein. Wenn Sie [ein neues Schlüsselpaar erstellen](#createnewkey) und nach einem Dateinamen gefragt werden, geben Sie eine individuelle Bezeichnung ein, etwa Ihrem Servernamen entsprechend.

```console
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa): KeyFileName_rsa

Your identification has been saved in /home/user/.ssh/KeyFileName_rsa.
Your public key has been saved in /home/user/.ssh/KeyFileName_rsa.pub.
```

Geben Sie dann bei der Verbindung mit dem entsprechenden Server zusätzlich zu den Benutzer- und Serverdetails den Namen der Schlüsseldatei an:

```bash
ssh -i ~/.ssh/KeyFileName user@IP_ADDRESS
```

Beispiel:

```bash
ssh -i ~/.ssh/myVPS_rsa ubuntu@169.254.10.250
```

Wie in den vorherigen Abschnitten beschrieben, funktionieren dieselben Anweisungen auf einem **Windows** Client. Ersetzen Sie lediglich `~/` durch den Pfad des Benutzerordners von **Windows**, standardmäßig `C:\Users\WindowsUsername\`. Zum Beispiel: `ssh -i C:\Users\Username\.ssh/myVPS_rsa ubuntu@169.254.10.250`.

#### Verwendung der Datei "config"

Die Alternative zum Hinzufügen der Option `-i` zu jedem Befehl besteht darin, eine Datei mit dem Namen `config` im Ordner `~/.ssh` zu bearbeiten (`\Users\Username\.ssh` für **Windows**). Hier können Sie die Details Ihrer verschiedenen Verbindungen konfigurieren (Benutzername, Port, Schlüsseldatei, optionale Parameter, etc.)

Wenn diese Datei in `.ssh` vorhanden ist, enthält sie wahrscheinlich bereits Verbindungenseinstellungen. Je nach Ihrer Arbeitsumgebung sollten Sie dann eine Sicherungskopie der Originaldatei erstellen.

Beispiel für den Ordnerinhalt von `.ssh`:

```bash
ls ~/.ssh/
config    id_rsa    id_rsa.pub    known_hosts     known_hosts.old
```

In der Datei `config` können Sie zusätzlich zu den Standardwerten mehrere SSH-Verbindungen und deren individuelle Einstellungen speichern. Die Nutzung des gesamten Potenzials dieser Datei kann komplex werden, da sie insbesondere für erfahrene Benutzer von Nutzen ist, die regelmäßig mehrere Server verwalten.

Im Folgenden finden Sie ein einfaches Beispiel für die Konfiguration einer SSH-Verbindung zu einem VPS.<br>
Öffnen Sie die Datei und fügen Sie oben die folgenden Zeilen hinzu:


```console
Host vps
    HostName 169.254.10.250
    IdentityFile ~/.ssh/myVPS_rsa
```

Sie können sich dann mit dem Alias-Namen, den Sie als `Host` festgelegt haben, auf Ihrem VPS einloggen:

```bash
ssh ubuntu@vps
```

Im vorherigen Beispiel wurden nur die Server-IP und die Schlüsseldatei angegeben, es können jedoch weitere Details hinzugefügt werden. Um eine SSH-Verbindung zu einem zweiten Server mit dem Benutzernamen "rocky", dem [geänderten SSH-Port](/pages/cloud/vps/secure_your_vps#changesshport) "49160" und dem privaten Schlüssel in der Datei "myserver_rsa" einzurichten, erweitern Sie den Inhalt der Datei wie in diesem Beispiel:


```console
Host vps
    HostName 169.254.10.250
    IdentityFile ~/.ssh/myVPS_rsa

Host dedicated_server
    HostName 169.254.10.251
    User rocky
    Port 49160
    IdentityFile ~/.ssh/myserver_rsa
```

Anschließend können Sie sich folgendermaßen mit dem Server verbinden:

```bash
ssh dedicated_server
```

Weitere Informationen finden Sie auf [der entsprechenden `man`-Seite](https://manpages.org/ssh_config/5){.external}.

#### Verwendung von PuTTY <a name="puttykeys"></a>

Wenn Sie die Anweisungen unter "[SSH-Schlüsselpaar mit PuTTY erstellen](#useputty)" und "[SSH-Schlüssel zu Ihrem Server hinzufügen](#addserverkey)" befolgt haben, verfügen Sie über ein Schlüsselpaar, mit dem Sie sich mit Ihrem Server verbinden können. 

`PuTTY` kann die Anmeldeinformationen und Einstellungen einer SSH-Verbindung als `Session` speichern. Auf diese Weise können Sie sich auch mit individuellen Schlüsseln bei verschiedenen Servern anmelden.

Öffnen Sie `PuTTY` und klappen Sie den Unterabschnitt `SSH` im linken Menü auf und klicken Sie auf `Auth` und `Credentials`.

![PuTTy Key](images/puttygen_04.png){.thumbnail}

Klicken Sie auf die Schaltfläche `Browse`{.action} und wählen Sie die Datei mit dem privaten Schlüssel `PuTTY` (`keyfile.ppk`) in dem Ordner aus, in dem Sie sie gespeichert haben.

Die Schlüsseldatei ist nun der aktuellen SSH-Sitzung zugeordnet. Wechseln Sie im linken Menü zu `Session` und geben Sie Ihre Anmeldedaten für die [Serververbindung](#getstarted) (`username@IPv4_address`) ein.

Geben Sie unter `Saved Sessions` einen Namen für diese Verbindung ein, und klicken Sie auf `Save`{.action}, um sie zur Liste hinzuzufügen.

![PuTTy Key](images/puttygen_05.png){.thumbnail}

Sie können ab sofort auf diesen `Session`-Eintrag klicken um eine Verbindung zu Ihrem Server herzustellen. Zum Testen klicken Sie auf `Open`{.action}. Wenn Sie die Schlüsseldatei mit einer Passphrase geschützt haben, geben Sie diese hier ein.

Um eine weitere Serververbindung einzurichten, wiederholen Sie die folgenden Schritte:

- [Schlüsselpaar erstellen](#useputty).
- [Den öffentlichen Schlüssel zu Ihrem Server hinzufügen](#addserverkey).
- [Details des Servers eingeben und die Schlüsseldatei zu `PuTTY` hinzufügen](#puttykeys).


### SSH-Schlüssel in das Kundencenter importieren <a name="importkey"></a>

Im OVHcloud Kundencenter können Sie öffentliche Schlüssel speichern, wenn diese mit einem der unterstützten Verschlüsselungstypen erstellt wurden. Diese Funktion kann Ihnen bei der Konfiguration oder Neuinstallation eines neuen Servers Zeit sparen, da Sie [den öffentlichen Schlüssel nicht manuell zu Ihrem Server hinzufügen](#addserverkey) müssen. 

Öffnen Sie die seitliche Navigationsleiste, indem Sie oben rechts auf Ihren Namen klicken und die Verknüpfung `Produkte und Dienstleistungen`{.action} verwenden.

![SSH-Schlüsselverwaltungsbereich](images/SSH_keys_panel_2022.png){.thumbnail}

Gehen Sie in `Meine Dienste` auf den Tab `SSH-Schlüssel`{.action} und klicken Sie auf `SSH-Schlüssel hinzufügen`{.action}.

![SSH-Schlüsselverwaltungsbereich](images/SSH_keys_panel_2.1.png){.thumbnail}

Wählen Sie im Drop-down-Menü die Option `Dedicated` aus.

Geben Sie im neuen Fenster eine Kennung (einen Namen Ihrer Wahl) für den Schlüssel ein. Fügen Sie die Schlüsselzeichenfolge (kopiert aus [Ihrer `.pub`-Datei](#publickey) oder aus dem [`PuTTYgen`-Fenster)](#useputty) in das `Key`-Feld ein).

![SSH-Schlüsselverwaltungsbereich](images/SSH_keys_panel_3.png){.thumbnail}

Wenn Sie die vollständige Ausgabe kopiert haben, sollte die Benutzer-Information hinter dem Schlüssel bereits angefügt sein. Beachten Sie, dass Sie zum Import Ihres Schlüssels nach der Zeichenfolge eine (lokale) Benutzer-Identifikation angeben müssen. (Siehe oben stehendes Beispielformat.) Dies ist eine Anforderung des OVHcloud Kundencenters. Klicken Sie auf `Bestätigen`{.action}, um Ihren öffentlichen Schlüssel zu speichern.

> [!primary]
>
> Alle unter `Dedicated` registrierten Schlüssel sind zur Vorinstallation auf einem Dedicated Server oder VPS verfügbar. Informationen zu SSH-Schlüsseln für Public-Cloud-Dienste finden Sie in [dieser Anleitung](/pages/platform/public-cloud/public-cloud-first-steps).
>

### Standard-SSH-Schlüssel festlegen (nur für den Bereich "Dedicated") <a name="cpsshkey"></a>

Wenn Sie in Ihrem OVHcloud Kundencenter mehrere SSH-Schlüssel hinzugefügt haben, können Sie einen auswählen, der als Standardschlüssel für den Account verwendet werden soll. 

> [!warning]
> Hinweis: Sobald der Standardschlüssel festgelegt ist, wird er auch als Verbindungsmethode verwendet, wenn ein Server im Rescue-Modus neu gestartet wird. Um stattdessen ein Kennwort zu erhalten, muss der Standardschlüssel [deaktiviert](#disablesshkey) sein, bevor der Server im Rescue-Modus neu gestartet wird. Weitere Informationen hierzu finden Sie im Abschnitt [Weiterführende Informationen](#gofurther) dieser Anleitung.
> 

Öffnen Sie die seitliche Navigationsleiste, indem Sie oben rechts auf den Namen Ihres Accounts klicken und die Verknüpfung `Produkte und Dienstleistungen`{.action} verwenden, um zum Bereich `SSH-Schlüssel`{.action} zu gelangen.

![SSH-Schlüsselverwaltungsbereich](images/SSH_keys_panel_2022.png){.thumbnail}

Klicken Sie in der Liste auf das `Schlüssel`-Symbol neben dem gewünschten SSH-Schlüssel, um diesen als Standardschlüssel festzulegen.

![SSH-Schlüsselverwaltungsbereich](images/defaultsshkey.png){.thumbnail}

Sobald dies erfolgt ist, wird eine Meldung angezeigt, die bestätigt, dass der Schlüssel als Standard eingestellt wurde, und das `Schlüssel`-Symbol wird hervorgehoben.

![SSH-Schlüsselverwaltungsbereich](images/defaultsshkey1.png){.thumbnail}

### Standard-SSH-Schlüssel <a name="disablesshkey"></a> deaktivieren

Um den aktuellen **Standard**-SSH-Schlüssel zu deaktivieren, gehen Sie wie oben beschrieben in den Bereich `SSH-Schlüssel`{.action}. Klicken Sie auf das blaue `Schlüssel`-Symbol neben dem entsprechenden SSH-Schlüssel, um diese Einstellung zu ändern.


## Weiterführende Informationen <a name="gofurther"></a> 

[Einführung SSH](/pages/cloud/dedicated/ssh_introduction)

[Rescue-Modus für Dedicated Server](/pages/cloud/dedicated/rescue_mode)

[Rescue-Modus für VPS](/pages/cloud/vps/rescue)

Wenn Sie Schulungen oder technische Unterstützung bei der Implementierung unserer Lösungen benötigen, wenden Sie sich an Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](https://www.ovhcloud.com/de/professional-services/), um einen Kostenvoranschlag zu erhalten und eine persönliche Analyse Ihres Projekts durch unsere Experten des Professional Services Teams anzufordern.

Werden Sie Mitglied unserer User Community auf <https://community.ovh.com/en/>.