---
title: Authentifizierungsschlüssel für SSH-Verbindungen zu Public Cloud Instanzen erstellen und verwenden
excerpt: Erfahren Sie hier, wie Sie Schlüsselpaare für OpenSSH auf Ihrem lokalen Gerät konfigurieren und für sichere Verbindungen zu Ihrer Instanz verwenden
updated: 2024-09-02
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

SSH ermöglicht einen sicheren Kommunikationskanal über öffentliche Netzwerke in einer Client-Server-Architektur. Diese SSH-Verbindungen zwischen zwei vertrauenswürdigen Hosts, etwa zwischen einem Desktop-Client und einem Remote-Server, können mithilfe von Schlüsselpaaren authentifiziert werden, 

Ein Schlüsselsatz besteht aus einem öffentlichen Schlüssel, der weitergegeben werden kann, und einem privaten Schlüssel, der geheim bleibt. Wenn der öffentliche Schlüssel auf einem Server gespeichert wird, kann sich jeder Client, der über den zugehörigen privaten Schlüssel verfügt, ohne Eingabe eines Kennworts anmelden.

Diese Methode ist in der Regel der beste Kompromiss zwischen Sicherheit und Komfort und die Standardeinstellung für Public Cloud Instanzen.

**Diese Anleitung erklärt, wie Sie Schlüsselpaare zur Authentifizierung auf Ihrem lokalen Gerät erstellen und verwalten und diese für die Verbindung mit Public Cloud Instanzen verwenden.**

## Voraussetzungen

- Sie haben ein [Public Cloud Projekt](/links/public-cloud/public-cloud) in Ihrem OVHcloud Kunden-Account.
- Sie haben eine mit dem OpenSSH-Protokoll kompatible Anwendung für Remote-Verbindungen installiert.

> [!primary]
> Diese Anleitung gilt nicht für Verbindungen zu Standardinstallationen von **Windows Server**, da diese auf dem `Remote Desktop Protocol` (RDP) für Verbindungen basieren.
>
> Weitere Informationen finden Sie in unserer [Anleitung zur Erstellung einer Public Cloud Instanz](/pages/public_cloud/compute/public-cloud-first-steps).
>

## In der praktischen Anwendung

### Erstellung von Schlüsselpaaren für OpenSSH-Verbindungen

In den folgenden Anweisungen wird erläutert, wie Sie Schlüsselpaare für Remote-Verbindungen mit **OpenSSH** über die **Befehlszeile** erstellen und verwalten. Die meisten aktuellen Betriebssysteme enthalten diese Funktion, ohne dass zusätzliche Software installiert werden muss.

Wenn Sie eine grafische Benutzeroberfläche bevorzugen, können Sie für jede Art von Betriebssystem zahlreiche Anwendungen finden, mit denen Sie sich über das OpenSSH-Protokoll mit Remote-Hosts verbinden können.

Beispielsweise ist [PuTTY](https://putty.org/) eine Open Source-SSH-Clientsoftware mit vielen nützlichen Funktionen. In unserem detaillierten Tutorial erfahren Sie, wie Sie damit Verbindungen zu OVHcloud Servern und Instanzen konfigurieren:

- [Verwendung von PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)

> [!primary]
>
> Wenn bei einem Verbindungsversuch eine Fehlermeldung angezeigt wird, überprüfen Sie, ob Sie die korrekten Verbindungsdaten und Einstellungen verwenden und ob Ihr System und die installierten Anwendungen auf dem neuesten Stand sind. Wenn Sie eine Warnmeldung vom Typ `REMOTE HOST IDENTIFICATION HAS CHANGED` erhalten, lesen Sie unsere [SSH Einführung](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).
>

#### Konfiguration von Schlüsselpaaren aus einer GNU/Linux- oder macOS-Distribution

/// details | Diesen Abschnitt erweitern

Öffnen Sie die Befehlszeilenanwendung (`Terminal`) auf Ihrem lokalen Gerät.

Stellen Sie sicher, dass sich im Benutzer-Verzeichnis `$HOME` ein Ordner namens `.ssh` befindet. Wenn der Ordner nicht vorhanden ist, erstellen Sie ihn:

```bash
mkdir ~/.ssh
```

Verwenden Sie den Befehl `ssh-keygen`, um ein Schlüsselpaar zu erstellen. Mit der Option `-t` können Sie die Verschlüsselungsmethode angeben.

> [!primary]
>
> `Ed25519` gilt als derzeit sicherste Methode, aber `RSA` ist eine valide Alternative. Beide sind mit dem [OVHcloud Kundencenter](/pages/public_cloud/compute/public-cloud-first-steps) kompatibel.

Beispiele:

```bash
ssh-keygen -t ed25519 -a 100
```

```bash
ssh-keygen -t rsa -b 4096 -a 100
```

An der nächsten Eingabeaufforderung können Sie den neu erstellten Schlüssel benennen oder den Standard-Dateinamen verwenden:

```console
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa):
```

Wenn Sie mit `Enter`{.action} bestätigen, ohne einen Namen einzugeben, wird der Standarddateiname verwendet (`id_rsa` in diesem Beispiel).

Wenn Sie künftig mehrere Schlüsselpaare verwenden möchten, geben Sie einen einzelnen Dateinamen ein, um den Schlüssel zu identifizieren. Weitere Informationen dazu finden Sie unten im Abschnitt **Verwaltung mehrerer Authentifizierungsschlüssel auf Ihrem lokalen Gerät**.

Die nachfolgenden Beispielausgaben verwenden weiterhin die Dateinamen `id_rsa` und `id_rsa.pub` zur Veranschaulichung.

Sie können Ihren SSH-Schlüssel an der nächsten Eingabeaufforderung mit einer Passphrase schützen. Dies wird aus Sicherheitsgründen empfohlen.

> [!warning]
>
> Der Remote-Zugriff auf Ihre Instanz ist nur so sicher wie das Client-Gerät, das den privaten Schlüssel speichert. Daher ist es wichtig, Ihr Gerät und Ihre Schlüsseldateien vor unberechtigtem Zugriff zu schützen.
>
> Speichern Sie Passphrasen für mehr Komfort und Sicherheit in einem Passwort-Manager auf Ihrem Desktop, zum Beispiel der Open-Source-Lösung **KeePass**.
>

Alle SSH-Schlüssel werden standardmäßig im Verzeichnis `.ssh` gespeichert. Die Erweiterung `.pub` wird den Dateinamen von öffentlichen Schlüsseln hinzugefügt.

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

Um Ihren öffentlichen Schlüssel anzuzeigen und zu exportieren, wenden Sie den Befehl `cat` auf die Schlüsseldatei (`.pub`) an oder öffnen Sie sie mit einem Texteditor.

```bash
cat ~/.ssh/id_rsa.pub
```

```console
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC8teh2NJ42qYZV98gTNhumO1b6rMYIkAfRVazl
k6dSS3xf2MXJ4YHsDacdjtJ+evXCFBy/IWgdkFtcvsGAMZ2N1RdvhDyQYcy6NDaJCBYw1K6Gv5fJ
SHCiFXvMF0MRRUSMneYlidxUJg9eDvdygny4xOdC6c1JrPrSgOc2nQuKeMpOoOWLINIswg1IIFVk
kFMPrFivP8Z6tidzVpAtbr1sXmJGZazYWrU3FoK2a1sF1zEWrmlMOzX81zEWrmlMOzX8CpZW8Rae
i4ANmLy7NULWK36yU0Rp9bFJ4o0/4PTkZiDCsK0QyHhAJXdLN7ZHpfJtHIPCnexmwIMLfIhCWhO5
 user@hostname
```

Kopieren Sie diese Schlüsselzeichenfolge, um [sie einer neuen Instanz hinzuzufügen oder in Ihr Kundencenter zu importieren](/pages/public_cloud/compute/public-cloud-first-steps).

> [!primary]
>
> In einem **MacOS** Terminal können Sie die Befehle `pbcopy` und `pbpaste` verwenden, um Zeichenfolgen schneller zu handhaben. Verwenden Sie beispielsweise diesen Befehl, um den Schlüssel aus der Datei `id_rsa.pub` in die Zwischenablage zu kopieren:
>
> `pbcopy < ~/.ssh/id_rsa.pub`
>

### Verwaltung mehrerer Authentifizierungsschlüssel auf Ihrem lokalen Gerät

Sie können mehrere SSH-Schlüsselpaare verwenden, um Verbindungen mit verschiedenen Remote-Hosts oder LAN-Geräten herzustellen.

Da alle Schlüssel im Ordner `.ssh` auf dem lokalen Gerät gespeichert werden sollten, müssen die Dateinamen unterschiedlich sein. Wenn Sie ein neues Schlüsselpaar erstellen und nach einem Dateinamen gefragt werden, geben Sie eine individuelle Bezeichnung ein, etwa entsprechend Ihrer Instanz.

Beispielausgabe:

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

##### Verwendung der Datei "config"

Die Alternative zum Hinzufügen der Option `-i` zu jedem Befehl besteht darin, eine Datei mit dem Namen `config` im Ordner `~/.ssh` zu bearbeiten. Hier können Sie die Details Ihrer verschiedenen Verbindungen konfigurieren (Benutzername, Port, Schlüsseldatei, optionale Parameter, etc.)

Wenn diese Datei in `.ssh` vorhanden ist, enthält sie wahrscheinlich bereits Verbindungseinstellungen. Je nach Ihrer Arbeitsumgebung sollten Sie dann eine Sicherungskopie der Originaldatei erstellen.

Beispiel für den Ordnerinhalt von `.ssh`:

```bash
ls ~/.ssh/
```

```console
config    id_rsa    id_rsa.pub    known_hosts     known_hosts.old
```

In der Datei `config` können Sie zusätzlich zu den Standardwerten mehrere SSH-Verbindungen und deren individuelle Einstellungen speichern. Die Nutzung des vollen Potenzials dieser Datei kann komplex werden, da sie insbesondere für erfahrene Anwender nützlich ist, die mehrere Server verwalten.

Im Folgenden finden Sie ein einfaches Beispiel für die Konfiguration einer SSH-Verbindung zu einer Instanz.  
Öffnen Sie die Datei und fügen Sie oben die folgenden Zeilen hinzu:

```console
Host instance
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myInstance_rsa
```

Stellen Sie sicher, dass Sie die richtige IP-Adresse und den korrekten Schlüsseldateinamen verwenden. In der ersten Zeile, die mit `Host` beginnt, wird der Name dieser Verbindung festgelegt (in diesem Beispiel `instance`).

Sie können sich dann mit der Instanz verbinden, indem Sie die IP-Adresse der Instanz durch den Aliasnamen ersetzen, der diese Verbindung identifiziert (`Host`):

```bash
ssh username@connection_name
```

Beispiel:

```bash
ssh ubuntu@instance
```

Im vorherigen Beispiel wurden nur die Instanz-IP und die Schlüsseldatei angegeben, es können jedoch weitere Details hinzugefügt werden.  
Um eine SSH-Verbindung zu einem zweiten Remote-Host mit dem Benutzernamen "rocky", dem geänderten SSH-Port "49160" und dem privaten Schlüssel in der Datei "myserver_rsa" einzurichten, erweitern Sie den Inhalt der Datei wie in diesem Beispiel:

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

Anschließend können Sie sich folgendermaßen mit dem zweiten Host verbinden:

```bash
ssh myserver
```

Weitere Informationen finden Sie auf [der entsprechenden `man`-Seite](https://manpages.org/ssh_config/5)

///


#### Konfiguration von Schlüsselpaaren auf einem Windows-Gerät

/// details | Diesen Abschnitt erweitern

Öffnen Sie die Anwendung `Eingabeaufforderung`, indem Sie "cmd" in die Suchleiste eingeben (oder öffnen Sie PowerShell über das "Startmenü").

Öffnen Sie das Verzeichnis `.ssh` Ihres aktiven Windows Benutzer-Accounts (Standardpfad: `C:\Users\WindowsUsername\.ssh`):

```bash
cd .ssh
```

Verwenden Sie den Befehl `ssh-keygen`, um ein Schlüsselpaar zu erstellen. Mit der Option `-t` können Sie die Verschlüsselungsmethode festlegen.

> [!primary]
>
> `Ed25519` gilt als derzeit sicherste Methode, aber `RSA` ist eine valide Alternative. Beide sind mit dem [OVHcloud Kundencenter](/pages/public_cloud/compute/public-cloud-first-steps) kompatibel.

Beispiele:

```bash
ssh-keygen -t ed25519 -a 100
```

```bash
ssh-keygen -t rsa -b 4096 -a 100
```

An der nächsten Eingabeaufforderung können Sie den neu erstellten Schlüssel benennen oder den Standard-Dateinamen verwenden:

```console
Generating public/private rsa key pair.
Enter file in which to save the key (C:\Users\Username/.ssh/id_rsa):
```

Wenn Sie mit `Enter`{.action} bestätigen, ohne einen Namen einzugeben, wird der Standarddateiname verwendet (`id_rsa` in diesem Beispiel).

Wenn Sie künftig mehrere Schlüsselpaare verwenden möchten, geben Sie einen einzelnen Dateinamen ein, um den Schlüssel zu identifizieren. Weitere Informationen dazu finden Sie unten im Abschnitt **Verwaltung mehrerer Authentifizierungsschlüssel auf Ihrem lokalen Gerät**.

Die nachfolgenden Beispielausgaben verwenden weiterhin die Dateinamen `id_rsa` und `id_rsa.pub` zur Veranschaulichung.

Sie können Ihren SSH-Schlüssel an der nächsten Eingabeaufforderung mit einer Passphrase schützen. Dies wird aus Sicherheitsgründen empfohlen.

> [!warning]
>
> Der Remote-Zugriff auf Ihre Instanz ist nur so sicher wie das Client-Gerät, das den privaten Schlüssel speichert. Daher ist es wichtig, Ihr Gerät und Ihre Schlüsseldateien vor unberechtigtem Zugriff zu schützen.
>
> Speichern Sie Passphrasen für mehr Komfort und Sicherheit in einem Passwort-Manager auf Ihrem Desktop, zum Beispiel der Open-Source-Lösung **KeePass**.
>

Alle SSH-Schlüssel werden standardmäßig im Verzeichnis `.ssh` gespeichert. Die Erweiterung `.pub` wird den Dateinamen von öffentlichen Schlüsseln hinzugefügt.

```console
Your identification has been saved in id_rsa.
Your public key has been saved in id_rsa.pub.
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

Die Schlüsseldatei kann mit einem Texteditor (Notepad, Notepad++, etc.) geöffnet werden. Klicken Sie im Windows Datei-Explorer mit der rechten Maustaste auf die Datei und wählen Sie `Öffnen mit`{.action}.

Sie können auch einen der folgenden Befehle verwenden (im Verzeichnis `\Users\WindowsUsername\.ssh`):

- `cmd`

```bash
more id_rsa.pub
```

- `powershell`

```bash
cat id_rsa.pub
```

Kopieren Sie diese Schlüsselzeichenfolge, um [sie einer neuen Instanz hinzuzufügen oder in Ihr Kundencenter zu importieren](/pages/public_cloud/compute/public-cloud-first-steps).

> [!primary]
>
> **Zwischenablage verwenden**
>
> Wenn Sie in der Befehlszeile unter **Windows** arbeiten, klicken Sie mit der rechten Mautaste, um den Inhalt der Zwischenablage in das Befehlszeilenfenster **einzufügen**. Um eine Zeichenfolge aus dem Befehlszeilenfenster zu **kopieren**, markieren Sie sie mit der Maus und drücken Sie die `Eingabetaste`. Sie finden diese Funktionen auch über einen `Rechtsklick` auf die Menüleiste.
>

#### Verwaltung mehrerer Authentifizierungsschlüssel auf Ihrem lokalen Gerät

Sie können mehrere SSH-Schlüsselpaare verwenden, um Verbindungen mit verschiedenen Remote-Hosts oder LAN-Geräten herzustellen.

Da alle Schlüssel im Ordner `.ssh` des Windows-Benutzerverzeichnisses gespeichert werden sollten, müssen die Dateinamen unterschiedlich sein. Wenn Sie ein neues Schlüsselpaar erstellen und nach einem Dateinamen gefragt werden, geben Sie eine individuelle Bezeichnung ein, etwa entsprechend Ihrer Instanz.

Beispielausgabe:

```console
Generating public/private rsa key pair.
Enter file in which to save the key (C:\Users\Username/.ssh/id_rsa): KeyFileName_rsa

Your identification has been saved in KeyFileName_rsa.
Your public key has been saved in KeyFileName_rsa.pub.
```

Geben Sie dann bei der Verbindung mit dem entsprechenden Server zusätzlich zu den Benutzer- und Serverdetails den Namen der Schlüsseldatei an:

```bash
ssh -i C:\Users\Username\.ssh/KeyFileName user@IP_ADDRESS
```

Beispiel:

```bash
ssh -i C:\Users\Username\.ssh/myInstance_rsa ubuntu@203.0.113.100
```

##### Verwendung der Datei "config"

Die Alternative zum Hinzufügen der Option `-i` zu jedem Befehl besteht darin, eine Datei mit dem Namen `config` im Ordner `C:\Users\Username\.ssh` zu bearbeiten. Hier können Sie die Details Ihrer verschiedenen Verbindungen konfigurieren (Benutzername, Port, Schlüsseldatei, optionale Parameter, etc.)

Wenn diese Datei in `.ssh` vorhanden ist, enthält sie wahrscheinlich bereits Verbindungseinstellungen. Je nach Ihrer Arbeitsumgebung sollten Sie dann eine Sicherungskopie der Originaldatei erstellen.

Beispiel für den Ordnerinhalt von `.ssh`:

```bash
C:\Users\Username\.ssh>dir /B
```

```console
config
id_rsa
id_rsa.pub
known_hosts    
known_hosts.old
```

In der Datei `config` können Sie zusätzlich zu den Standardwerten mehrere SSH-Verbindungen und deren individuelle Einstellungen speichern. Die Nutzung des vollen Potenzials dieser Datei kann komplex werden, da sie insbesondere für erfahrene Anwender nützlich ist, die mehrere Server verwalten.

Im Folgenden finden Sie ein einfaches Beispiel für die Konfiguration einer SSH-Verbindung zu einer Instanz.  
Öffnen Sie die Datei und fügen Sie oben die folgenden Zeilen hinzu:

```console
Host instance
    HostName 203.0.113.100
    IdentityFile ~/.ssh/myInstance_rsa
```

Stellen Sie sicher, dass Sie die richtige IP-Adresse und den korrekten Schlüsseldateinamen verwenden. In der ersten Zeile, die mit `Host` beginnt, wird der Name dieser Verbindung festgelegt (in diesem Beispiel `instance`).

Sie können sich dann mit der Instanz verbinden, indem Sie die IP-Adresse der Instanz durch den Aliasnamen ersetzen, der diese Verbindung identifiziert (`Host`):

```bash
ssh username@connection_name
```

Beispiel:

```bash
ssh ubuntu@instance
```

Im vorherigen Beispiel wurden nur die Instanz-IP und die Schlüsseldatei angegeben, es können jedoch weitere Details hinzugefügt werden.  
Um eine SSH-Verbindung zu einem zweiten Remote-Host mit dem Benutzernamen "rocky", dem geänderten SSH-Port "49160" und dem privaten Schlüssel in der Datei "myserver_rsa" einzurichten, erweitern Sie den Inhalt der Datei wie in diesem Beispiel:

```console
Host instance
    HostName 203.0.113.100
    IdentityFile C:\Users\Username\.ssh/myInstance_rsa

Host myserver
    HostName 203.0.113.101
    User rocky
    Port 49160
    IdentityFile C:\Users\Username\.ssh/myserver_rsa
```

Anschließend können Sie sich folgendermaßen mit dem zweiten Host verbinden:

```bash
ssh myserver
```

Weitere Informationen finden Sie auf [der entsprechenden `man`-Seite](https://manpages.org/ssh_config/5)

///


### Hinzufügen zusätzlicher öffentlicher Schlüssel zu einer laufenden Instanz

Um SSH-Schlüssel für weitere Benutzer hinzuzufügen, die auf Ihre Instanz zugreifen, wiederholen Sie die Schritte zur Erstellung des Schlüssels, aber verwenden Sie den entsprechenden `$HOME`-Ordner oder für Windows den Ordner `Users` des betreffenden Benutzers, um die SSH-Schlüssel zu erstellen und zu speichern (oder führen Sie die Befehle auf dem dedizierten Gerät des Benutzers aus).

Eine detaillierte Erklärung dieser Schritte finden Sie in [unserer Anleitung](/pages/public_cloud/compute/configuring_additional_ssh_keys).

## Weiterführende Informationen

[Erstellung einer Public Cloud Instanz](/pages/public_cloud/compute/public-cloud-first-steps)

[Erste Schritte mit SSH-Verbindungen](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Zusätzliche SSH-Schlüssel erstellen](/pages/public_cloud/compute/configuring_additional_ssh_keys)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.