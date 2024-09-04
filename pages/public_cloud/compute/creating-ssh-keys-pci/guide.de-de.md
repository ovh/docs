---
title: SSH-Schlüssel für Public Cloud Instanzen erstellen und verwenden
excerpt: Erfahren Sie hier, wie Sie SSH-Schlüssel auf Ihrem lokalen Gerät konfigurieren und für eine sichere Verbindung zu Ihrer Instanz verwenden
updated: 2024-09-02
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Die Verwendung des SSH-Protokolls ermöglicht einen sicheren Kanal über ein ungesichertes Netzwerk innerhalb einer Client-Server-Architektur, um einen SSH-Client mit einem SSH-Server zu verbinden. Mit dem Erstellen eines SSH-Schlüsselsatzes erhalten Sie einen öffentlichen und einen privaten Schlüssel. Sie können den öffentlichen Schlüssel auf einem Server ablegen und sich dann über einen Client verbinden, der über den zugehörigen privaten Schlüssel verfügt. Wenn der öffentliche und der private SSH-Schlüssel übereinstimmen, werden Sie eingeloggt, ohne dass ein Passwort benötigt wird.

Dies ist üblicherweise die sicherste und bequemste Verbindungsmethode und die Standardeinstellung für Public Cloud Instanzen.

**Diese Anleitung erklärt, wie Sie SSH-Schlüssel auf Ihrem lokalen Gerät konfigurieren, um sie für den sicheren Zugriff auf Public Cloud-Instanzen zu verwenden.**

## Voraussetzungen

- Sie haben ein [Public Cloud Projekt](/links/public-cloud/public-cloud) in Ihrem OVHcloud Kunden-Account.
- Sie haben eine SSH-Client-Anwendung installiert (Befehlszeile oder GUI).

> [!primary]
> Diese Anleitung gilt nicht für Standardinstallationen von **Windows Server**, da diese auf dem `Remote Desktop Protocol` (RDP) für Verbindungen basieren.
>
> Weitere Informationen finden Sie in unserer [Anleitung zur Erstellung einer Public Cloud Instanz](/pages/public_cloud/compute/public-cloud-first-steps).
>

Die folgenden Erläuterungen behandeln zwei Methoden zum Verwenden von SSH-Schlüsseln:

- [Erstellung eines **Open SSH** Schlüsselpaars und Verbindung mit einem Server über SSH-Client in der Befehlszeile](#openssh)
- [Erstellung eines Schlüsselpaars mit `PuTTY` und Verbindung mit einem Server über den SSH-Client von `PuTTY`](#useputty)

Sie können beide Methoden nebeneinander verwenden, aber beachten Sie, dass `PuTTY` die Schlüsseldateien in einem eigenen Format erstellt, was sie inkompatibel mit den mit den in **Open SSH** erstellten SSH-Schlüsseldateien macht.

Dies bedeutet, dass ein privater Schlüssel, der mit dem SSH-Client in der Befehlszeile erstellt wurde, zuerst [in das `PuTTY`-Format konvertiert werden muss und umgekehrt](https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html#faq-ssh2-keyfmt){.external}.

<a name="openssh"></a>

#### SSH-Schlüsselpaar in der Befehlszeile erstellen

Öffnen Sie auf einem **Mac**-Computer oder einem Gerät, auf dem ein **Linux**-Betriebssystem installiert ist die Befehlszeilenanwendung (`Terminal`).

Stellen Sie sicher, dass sich im Verzeichnis `$HOME` ein Ordner namens `.ssh` befindet. Wenn der Ordner nicht vorhanden ist, erstellen Sie ihn:

```bash
mkdir ~/.ssh
```

Öffnen Sie auf einem aktuellen **Windows** Betriebssystem die Eingabeaufforderung, indem Sie "cmd" in die Suchleiste eingeben (oder öffnen Sie `PowerShell` über das Menü).

Gehen Sie zum Verzeichnis `.ssh` Ihres aktiven **Windows** Benutzers (Standard: `C:\Users\WindowsUsername.ssh`):

```bash
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
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa):
```

Bestätigen Sie mit `Enter`, um den vorgeschlagenen Dateinamen zu akzeptieren oder geben Sie einen individuellen Namen ein. Dies ist sinnvoll, wenn mehrere Schlüsselpaare im Verzeichnis `.ssh` platziert werden. Weitere Informationen hierzu finden Sie im Abschnitt "[Verwaltung mehrerer SSH-Schlüssel auf Ihrem lokalen Gerät](#multiplekeys)" in dieser Anleitung.  
In diesem Beispiel werden die Standarddateinamen `id_rsa` und `id_rsa.pub` verwendet.

Sie können Ihren SSH-Schlüssel im nächsten Schritt mit einer Passphrase schützen. Dies ist eine empfohlene Maßnahme für erhöhte Sicherheit.

> [!warning]
>
> Der Remote-Zugriff auf Ihre Instanz ist nur so sicher wie das Clientgerät, das den privaten Schlüssel speichert. Der Schutz Ihres Geräts und Ihrer Dateien vor unbefugtem Zugriff ist daher bei der Verwendung von SSH-Schlüsseln von entscheidender Bedeutung.
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

Um Ihren öffentlichen Schlüssel anzuzeigen und zu exportieren, wenden Sie den Befehl `cat` auf die Schlüsseldatei (`.pub`) an. Kopieren Sie die vollständige Schlüsselzeichenfolge um sie [einer neuen Instanz hinzufügen](/pages/public_cloud/compute/public-cloud-first-steps#create-instance) oder in das [OVHcloud Kundencenter zu importieren](/pages/public_cloud/compute/import-ssh).

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

Kopieren Sie die vollständige Schlüsselzeichenfolge um sie [einer neuen Instanz hinzufügen](/pages/public_cloud/compute/public-cloud-first-steps#create-instance) oder in das [OVHcloud Kundencenter zu importieren](/pages/public_cloud/compute/public-cloud-first-steps#import-ssh).

> [!primary]
>
> **Zwischenablage verwenden**
>
> Wenn Sie in der Befehlszeile unter **Windows** arbeiten, klicken Sie mit der rechten Mautaste, um den Inhalt der Zwischenablage in das Befehlszeilenfenster **einzufügen**. Um eine Zeichenfolge aus dem Befehlszeilenfenster zu **kopieren**, markieren Sie sie mit der Maus und drücken Sie die `Eingabetaste`. Sie finden diese Funktionen auch über einen `Rechtsklick` auf die Menüleiste.
>

<a name="useputty"></a>

#### SSH-Schlüsselpaar mit PuTTY erstellen

[PuTTY](https://putty.org/){.external} ist ein Open Source SSH Client mit grafischer Benutzeroberfläche, verfügbar für **Windows** und andere Betriebssysteme, der zusätzliche Software zum Erstellen von SSH-Schlüsseln beinhaltet: `PuTTY Key Generator` (`PuTTYgen`).

> [!primary]
>
> Der Hauptzweck von `PuTTY` ist die Verwaltung von SSH-Verbindungen von einem **Windows** Client zu einem **GNU/Linux** Server. `PuTTY` speichert Schlüsseldateien in einem bestimmten Format und ist daher nicht mit den SSH-Schlüsseldateien kompatibel, die mit dem **Open SSH** Client erstellt wurden, der nativ in den meisten modernen Betriebssystemen enthalten ist.
>
> Wie oben in dieser Anleitung erwähnt, können in der *Befehlszeile* generierte Schlüssel [in das Format `PPK`](https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html#faq-ssh2-keyfmt) für die Verwendung mit dem `PuTTY` Client konvertiert werden. Für eine bequeme Verwendung von SSH-Schlüsseln wählen Sie bestenfalls eine der beiden Optionen und behalten sie bei (private Schlüssel mit **Open SSH** oder private Schlüssel mit `PuTTY`).
>

Wenn `PuTTY` noch nicht installiert ist (sehen Sie in Ihrer Anwendungsliste nach oder verwenden Sie die Suchfunktion), laden Sie `PuTTY` von der [offiziellen Website](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html){.external} herunter. Das empfohlene Installationspaket enthält bereits `PuTTYgen`; die Anwendung ist aber auch als eigenständige Datei auf der Website verfügbar.

Öffnen Sie `PuTTYgen`, und wählen Sie einen der unterstützten Verschlüsselungsalgorithmen aus. In diesem Beispiel wird RSA verwendet. Geben Sie in der rechten unteren Ecke 4096 als Anzahl von Bits ein, und klicken Sie auf die Schaltfläche `Generate`{.action}.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen_01.png){.thumbnail}

Bewegen Sie den Mauszeiger frei im Bereich unter der Statusanzeige:

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen_02.gif){.thumbnail}

Der Schlüssel ist bereit, sobald die Statusanzeige voll ist.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen_03.png){.thumbnail}

Kopieren Sie die vollständige Schlüsselzeichenfolge um sie [einer neuen Instanz hinzufügen](/pages/public_cloud/compute/public-cloud-first-steps#create-instance) oder in das [OVHcloud Kundencenter zu importieren](/pages/public_cloud/compute/public-cloud-first-steps#import-ssh).

Speichern Sie beide Schlüssel als Dateien, indem Sie auf die entsprechenden Schaltflächen klicken. Geben Sie eine Passphrase ein, um die Dateien abzusichern.

> [!warning]
>
> Der Remote-Zugriff auf Ihre Instanz ist nur so sicher wie das Clientgerät, das den privaten Schlüssel speichert. Der Schutz Ihres Geräts und Ihrer Dateien vor unbefugtem Zugriff ist daher bei der Verwendung von SSH-Schlüsseln von entscheidender Bedeutung.
> 
> Aus Gründen der Benutzerfreundlichkeit und Sicherheit empfiehlt es sich, einen Passwort-Manager auf Ihrem Gerät zu verwenden, wie zum Beispiel die Open-Source-Lösung `KeePass`.
> 

Einer der Vorteile der Verwendung von `PuTTY` ist die Möglichkeit, verschiedene Verbindungen als `Sessions` zu speichern. Weitere Informationen finden Sie unten im Abschnitt [Verwaltung mehrerer SSH-Schlüssel auf Ihrem lokalen Gerät](#puttykeys).

<a name="multiplekeys"></a>

### Verwaltung mehrerer SSH-Schlüssel auf Ihrem lokalen Gerät

Sie können mehrere SSH-Schlüsselpaare verwenden, um Verbindungen zu verschiedenen Remote-Hosts herzustellen.

> [!PRIMARY]
>
> Wenn Sie `PuTTY` verwenden, fahren Sie mit dem [entsprechenden Abschnitt unten](#puttykeys) fort.
>

Da alle Schlüssel im Ordner `.ssh` auf dem lokalen Gerät gespeichert werden sollten, müssen die Dateinamen unterschiedlich sein. Wenn Sie [ein neues Schlüsselpaar erstellen](#createnewkey) und nach einem Dateinamen gefragt werden, geben Sie eine individuelle Bezeichnung ein, etwa entsprechend Ihrer Instanz.

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
ssh -i ~/.ssh/myInstance_rsa ubuntu@203.0.113.100
```

Wie in den vorherigen Abschnitten beschrieben, funktionieren dieselben Anweisungen auf einem **Windows** Client. Ersetzen Sie lediglich `~/` durch den Pfad des Benutzerordners von **Windows**, standardmäßig `C:\Users\WindowsUsername\` (Beispiel: `ssh -i C:\Users\Username\.ssh/myInstance_rsa ubuntu@203.0.113.100`).

#### Verwendung der Datei "config"

Die Alternative zum Hinzufügen der Option `-i` zu jedem Befehl besteht darin, eine Datei mit dem Namen `config` im Ordner `~/.ssh` zu bearbeiten (`\Users\Username\.ssh` für **Windows**). Hier können Sie die Details Ihrer verschiedenen Verbindungen konfigurieren (Benutzername, Port, Schlüsseldatei, optionale Parameter, etc.)

Wenn diese Datei in `.ssh` vorhanden ist, enthält sie wahrscheinlich bereits Verbindungseinstellungen. Je nach Ihrer Arbeitsumgebung sollten Sie dann eine Sicherungskopie der Originaldatei erstellen.

Beispiel für den Ordnerinhalt von `.ssh`:

```bash
ls ~/.ssh/
```

```console
config    id_rsa    id_rsa.pub    known_hosts     known_hosts.old
```

In der Datei `config` können Sie zusätzlich zu den Standardwerten mehrere SSH-Verbindungen und deren individuelle Einstellungen speichern. Die Nutzung des gesamten Potenzials dieser Datei kann komplex werden, da sie insbesondere für erfahrene Benutzer von Nutzen ist, die regelmäßig mehrere Server verwalten.

Im Folgenden finden Sie ein einfaches Beispiel für die Konfiguration einer SSH-Verbindung zu einer Instanz.  
Öffnen Sie die Datei und fügen Sie oben die folgenden Zeilen hinzu:

```console
Host instance
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myInstance_rsa
```

Sie können sich dann mit dem Alias-Namen, den Sie als `Host` festgelegt haben, auf der Instanz einloggen:

```bash
ssh ubuntu@instance
```

Im vorherigen Beispiel wurden nur die Server-IP und die Schlüsseldatei angegeben, es können jedoch weitere Details hinzugefügt werden.  
Um eine SSH-Verbindung zu einem zweiten Server mit dem Benutzernamen "rocky", dem geänderten SSH-Port "49160" und dem privaten Schlüssel in der Datei "myserver_rsa" einzurichten, erweitern Sie den Inhalt der Datei wie in diesem Beispiel:

```console
Host instance
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myInstance_rsa

Host myserver
    HostName 203.0.113.101
    User rocky
    Port 49160
    IdentityFile ~/.ssh/myserver_rsa
```

Anschließend können Sie sich folgendermaßen mit dem Server verbinden:

```bash
ssh myserver
```

Weitere Informationen finden Sie auf [der entsprechenden `man`-Seite](https://manpages.org/ssh_config/5){.external}.

<a name="puttykeys"></a>

#### Verwendung von PuTTY

`PuTTY` kann die Anmeldeinformationen und Einstellungen einer SSH-Verbindung als `Session` speichern. Auf diese Weise können Sie sich auch mit individuellen Schlüsseln bei verschiedenen Servern anmelden.

Öffnen Sie `PuTTY` und klappen Sie den Unterabschnitt `SSH` im linken Menü auf und klicken Sie auf `Auth` und `Credentials`.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen_04.png){.thumbnail}

Klicken Sie auf die Schaltfläche `Browse`{.action} und wählen Sie die Datei mit dem privaten Schlüssel `PuTTY` (`keyfile.ppk`) in dem Ordner aus, in dem Sie sie gespeichert haben

Die Schlüsseldatei ist nun der aktuellen SSH-Sitzung zugeordnet. Wechseln Sie im linken Menü zu `Session` und geben Sie Ihre Anmeldedaten für die [Serververbindung](#getstarted) (`username@IPv4_address`) ein.

Geben Sie unter `Saved Sessions` einen Namen für diese Verbindung ein, und klicken Sie auf `Save`{.action}, um sie zur Liste hinzuzufügen.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen_05.png){.thumbnail}

Sie können ab sofort auf diesen `Session`-Eintrag klicken um eine Verbindung zu Ihrem Server herzustellen. Zum Testen klicken Sie auf `Open`{.action}. Wenn Sie die Schlüsseldatei mit einer Passphrase geschützt haben, geben Sie diese hier ein.

#### Hinzufügen zusätzlicher öffentlicher Schlüssel zu Ihrer Instanz

Um SSH-Schlüssel für weitere Benutzer hinzuzufügen, die auf Ihre Instanz zugreifen, wiederholen Sie die Schritte zur Erstellung des Schlüssels, aber verwenden Sie den entsprechenden `$HOME`-Ordner oder für **Windows** den Ordner `Users` des betreffenden Benutzers, um die SSH-Schlüssel zu erstellen und zu speichern (oder führen Sie die Befehle auf dem dedizierten Gerät des Benutzers aus).

Eine detaillierte Erklärung dieser Schritte finden Sie in unserer [Anleitung](/pages/public_cloud/compute/configuring_additional_ssh_keys).

<a name="gofurther"></a> 

## Weiterführende Informationen 

[Erstellung einer Public Cloud Instanz](/pages/public_cloud/compute/public-cloud-first-steps)

[Einführung SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Zusätzliche SSH-Schlüssel erstellen](/pages/public_cloud/compute/configuring_additional_ssh_keys)

Wenn Sie Schulungen oder technische Unterstützung bei der Implementierung unserer Lösungen benötigen, wenden Sie sich an Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](/links/professional-services), um einen Kostenvoranschlag zu erhalten und eine persönliche Analyse Ihres Projekts durch unsere Experten des Professional Services Teams anzufordern.

Treten Sie unserer [User Community](/links/community) bei.