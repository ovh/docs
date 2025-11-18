---
title: PuTTY für SSH-Verbindungen und Authentifizierung verwenden
excerpt: Erfahren Sie hier, wie Sie mit der SSH Client-Software PuTTY auf Cloud Server oder Webhostings zugreifen und SSH-Schlüssel verwalten können
updated: 2024-11-11
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

[PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) ist ein Open-Source-SSH-Client mit grafischer Benutzeroberfläche. Es wurde für Windows entwickelt, ist aber auch für andere Betriebssysteme verfügbar und enthält nützliche Features wie die Verwaltung von SSH-Schlüsseln.

**Diese Anleitung erklärt, wie Sie PuTTY verwenden, um Verbindungen zu Ihrem OVHcloud-Dienst über SSH abzusichern.**

## Voraussetzungen

- [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) ist auf Ihrem lokalen Gerät installiert.
- Sie verfügen über Grundkenntnisse des [SSH-Protokolls und seiner Verwendung](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

> [!warning]
> In diesem Tutorial erläutern wir die Verwendung einer oder mehrerer OVHcloud Lösungen mit externen Tools. Die durchgeführten Aktionen werden in einem bestimmten Kontext beschrieben. Möglicherweise müssen Sie bestimmte Anweisungen an das Betriebssystem Ihres lokalen Systems oder Ihres Servers anpassen.
>
> Wir empfehlen Ihnen, sich bei Schwierigkeiten an einen [spezialisierten Dienstleister](/links/partner) zu wenden oder Ihre Fragen an die [OVHcloud Community](/links/community) zu richten.
>

## In der praktischen Anwendung

### Inhaltsübersicht

- [PuTTY Installation](#installation)
- [SSH-Verbindungen mit Benutzername und Passwort](#sshconnect1)
    - [Webhosting](#webhosting)
    - [Dedicated Server oder VPS](#cloud-server)
- [SSH-Verbindungen mit Benutzername und SSH-Schlüsselauthentifizierung](#sshconnect2)
    - [Erstellen von SSH-Schlüsseln mit PuTTY](#puttygen)
    - [Transfer öffentlicher SSH-Schlüssel auf Ihren Server](#transferkeys)
    - [Verbindung mit Ihrem Server](#puttykeys)
    - [Verwaltung privater SSH-Schlüssel auf einem lokalen Gerät (PuTTY authentication agent)](#pageant)
- [Verwendung von PuTTY *Sessions*](#sessions)
- [Anwendungsbeispiel: Verwendung von PuTTY-Tools zur Konfiguration sicherer Verbindungen zu OVHcloud Servern (VPS, Dedicated Server, Public Cloud Instanz)](#example)

<a name="installation"></a>

### Installation von PuTTY

Laden Sie die aktuelle Version des PuTTY-Clients von der [offiziellen Website](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) herunter, und installieren Sie sie auf Ihrem System (oder entpacken Sie die ausführbaren Dateien). Portierte Versionen von PuTTY können auch über Ihren Paketmanager oder [Homebrew](https://brew.sh/) verfügbar sein.

Das empfohlene Standard-Installationspaket enthält mehrere Anwendungen, die die Funktionalität von PuTTY erweitern, darunter Dateitransfer (`psftp`, `pscp`, nicht in diesem Tutorial behandelt) und die Verwaltung von SSH-Schlüsseln (`PuTTYgen`, `Pageant`, erforderlich für die entsprechenden Abschnitte unten).

> [!primary]
> Die folgenden Anweisungen basieren auf einem Windows-Betriebssystem. Die Funktionen der PuTTY-Software selbst sollten auf allen Betriebssystemen ähnlich sein. Wenn Sie PuTTY jedoch nicht auf einem Windows-Computer verwenden, müssen Sie möglicherweise die Dokumentation Ihres Betriebssystems oder die offizielle [FAQ](https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html) und [Dokumentation](https://www.chiark.greenend.org.uk/~sgtatham/putty/docs.html) von PuTTY heranziehen.
>

> [!success]
> Sie können mehrere Instanzen von PuTTY und dessen Begleitwerkzeugen simultan geöffnet haben. Sie können z.B. ein Fenster öffnen, um dem Tutorial zu folgen, und ein zweites, um Verbindungen zu testen.
>

<a name="sshconnect1"></a>

### SSH-Verbindungen mit PuTTY - Benutzername und Passwort

In diesem Abschnitt wird erläutert, wie Sie eine erste SSH-Verbindung mit den folgenden OVHcloud Diensten herstellen:

- [FTP-Speicherplatz eines SSH-fähigen Webhostings](/links/web/hosting-compare)
- [Dedicated Server](/links/bare-metal/bare-metal)
- [VPS](/links/bare-metal/vps)

<a name="webhosting"></a>

### Webhosting

Sie benötigen den Cluster-Namen Ihres Webhostings, den Sie in Ihrem [OVHcloud Kundencenter](/links/manager) finden, sowie den FTP-Benutzernamen und das Passwort.  Weitere Informationen zu dieser Zugriffsmethode finden Sie in der [zugehörigen Anleitung](/pages/web_cloud/web_hosting/ftp_connection).

/// details | Verbindung mit einem Webhosting

Öffnen Sie PuTTY und geben Sie die FTP-Zugangsdaten Ihres Webhostings in die dafür vorgesehenen Felder ein.

- `Host Name (or IP address)`: **ftp_username@hosting_cluster_name** (Beispiel: **nutzername@ssh.cluster042.hosting.ovh.net**)
- `Port`: 22

![putty](/pages/assets/screens/other/web-tools/putty/putty1.png){.thumbnail}

Klicken Sie auf `Open`{.action}.

Bei der ersten Anmeldung erscheint die Meldung "PuTTY Security Alert", die Sie auf mögliche Risiken hinweist. Dies ist normalerweise kein Problem, solange Sie sich mit einem vertrauenswürdigen Host verbinden (z.B. dem FTP-Speicher eines Webhostings).  
Klicken Sie auf `Accept`{.action}, um fortzufahren. Wenn Sie `Connect Once`{.action} auswählen, wird der Fingerprint des Webhostings nicht im Cache gespeichert und das Warnfenster erscheint bei der nächsten Verbindung erneut. Weitere Informationen hierzu finden Sie in unserer [Einführung zu SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).

Es öffnet sich das Befehlszeilenfenster (PuTTY Terminal), in dem Sie zur Eingabe des Login-Passworts aufgefordert werden.

Geben Sie das Passwort ein, das Sie [diesem FTP-Benutzer zugewiesen haben](/pages/web_cloud/web_hosting/ftp_connection). Sie können die Passwortzeichenfolge mit einem Rechtsklick in dieses Fenster einfügen.

Beachten Sie, dass **bei einer Passworteingabeaufforderung im PuTTY-Terminal Ihre Eingaben nicht angezeigt werden**. Beispielausgabe:

```console
Using username "yourlogin".
yourlogin@ssh.cluster042.hosting.ovh.net's password:
```

```console
Welcome to OVH
yourlogin@ssh.cluster042.hosting.ovh.net (php/7.3/production/stable) ~ $ 
```

In unserer Anleitung zum [SSH-Zugang für OVHcloud Webhostings](/pages/web_cloud/web_hosting/ssh_on_webhosting) finden Sie mögliche Aktionen auf dem FTP-Speicherplatz Ihres Webhostings.

PuTTY kann die Anmeldeinformationen und Parameter einer SSH-Verbindung als *Session* speichern. Auf diese Weise können Sie eine Verbindung mit bekannten Hosts oder lokalen Netzwerk-Geräten herstellen, ohne jedes Mal die entsprechenden Informationen einzugeben. Informationen zum Verwenden von PuTTY-*Sessions* finden Sie im [Abschnitt unten](#sessions).

///

<a name="cloudserver"></a>

### Dedicated Server oder VPS

Sie benötigen die IP-Adresse Ihres Servers, die Sie in Ihrem [OVHcloud Kundencenter](/links/manager) finden, sowie den Namen des Benutzer-Accounts, den Sie für diese Login-*Session* verwenden möchten. Weitere Informationen zu diesem Thema finden Sie in unseren Anleitungen zu den ersten Schritten:

- Für [Dedicated Server](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- Für [Dedicated Server der Reihe **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- Für [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

/// details | Herstellen einer Verbindung mit einem Remote-Host

Öffnen Sie PuTTY und geben Sie die Login-Daten in die entsprechenden Felder ein.

- `Host Name (or IP address)`: **username@IPv4_server** (Beispiel: **ubuntu@203.0.113.101**)
- `Port`: 22 (außer Sie haben die SSH-Port-Nummer des Servers geändert)

![putty](/pages/assets/screens/other/web-tools/putty/putty2.png){.thumbnail}

Klicken Sie auf `Open`{.action}.

Bei der ersten Anmeldung erscheint die Meldung "PuTTY Security Alert", die Sie auf mögliche Risiken hinweist. Dies ist normalerweise kein Problem, solange Sie sich mit einem vertrauenswürdigen Host verbinden (z.B. Ihrem eigenen abgesicherten Server).  
Klicken Sie auf `Accept`{.action}, um fortzufahren. Wenn Sie `Connect Once`{.action} auswählen, wird der *Fingerprint* des Servers nicht im Cache gespeichert, und die Warnung wird bei der nächsten Verbindung erneut angezeigt. Weitere Informationen hierzu finden Sie in unserer [SSH-Einführung](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).

Es öffnet sich das Befehlszeilenfenster (PuTTY Terminal), in dem Sie zur Eingabe des Benutzer-Passworts aufgefordert werden. Sie können die Passwortzeichenfolge mit einem Rechtsklick in dieses Fenster einfügen.

Beachten Sie, dass **bei einer Passworteingabeaufforderung im PuTTY-Terminal Ihre Eingaben nicht angezeigt werden**. Beispielausgabe:

```console
Using username "ubuntu".
ubuntu@203.0.113.101's password:
```

```console
Welcome to Ubuntu 24.04.1 LTS (GNU/Linux 6.8.0-47-generic x86_64)
```

Weitere Informationen zu SSH-Verbindungen finden Sie in unserer [Einführung zu SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).

PuTTY kann die Anmeldeinformationen und Parameter einer SSH-Verbindung als *Session* speichern. Auf diese Weise können Sie eine Verbindung mit bekannten Hosts oder lokalen Netzwerk-Geräten herstellen, ohne jedes Mal die entsprechenden Informationen einzugeben. Informationen zum Verwenden von PuTTY-*Sessions* finden Sie im [entsprechenden Abschnitt dieser Anleitung](#sessions).

///

<a name="sshconnect2"></a>

### SSH-Verbindungen mit PuTTY - Benutzername und Authentifizierungsschlüssel (SSH-Schlüsseldateien)

In diesem Teil des Tutorials erfahren Sie, wie Sie SSH mit **Schlüssel-Authentifizierung** in PuTTY verwenden, um sich mit den folgenden OVHcloud Diensten zu verbinden:

- [Public Cloud Instanz](/links/public-cloud/public-cloud)
- [Dedicated Server](/links/bare-metal/bare-metal)
- [VPS](/links/bare-metal/vps)

Sie benötigen die IP-Adresse Ihres Servers, die Sie in Ihrem [OVHcloud Kundencenter](/links/manager) finden, sowie den Namen des Benutzer-Accounts, den Sie für diese Login-*Session* verwenden möchten. Weitere Informationen zu diesem Thema finden Sie in unseren Anleitungen zu den ersten Schritten:

- Für [Public Cloud Instanzen](/pages/public_cloud/compute/public-cloud-first-steps)
- Für [Dedicated Server](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- Für [Dedicated Server der Reihe **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- Für [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

> [!primary]
>
> PuTTY speichert Schlüsseldateien in einem bestimmten Format, das sie inkompatibel mit in **OpenSSH**-Clients erstellten SSH-Schlüsseldateien macht. Wenn Sie einen **Private Key** verwenden möchten, der zuvor mit einem SSH-Client in der Kommandozeile erstellt wurde (zum Beispiel für einen [Dedicated Server](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated) oder eine [Public Cloud Instanz](/pages/public_cloud/compute/creating-ssh-keys-pci)), muss er zuerst [in das PuTTY-Format konvertiert werden](https://www.chiark.greenend.org.uk/~sgtatham/putty/faq.html#faq-ssh2-keyfmt).
>

<a name="puttygen"></a>

### SSH-Schlüssel erstellen (PuTTY key generator)

Für diesen Schritt ist das zusätzliche Tool **PuTTY key generator** (PuTTYgen) erforderlich.

/// details | Erstellen von SSH-Schlüsseln mit PuTTYgen

##### Schritt 1: Schlüsselpaar erstellen

Öffnen Sie die Anwendung PuTTYgen, und wählen Sie den Verschlüsselungsalgorithmus aus. In diesem Beispiel wird **RSA** verwendet. Geben Sie "4096" unten in das Feld `Number of bits in a generated key:` ein.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen1.png){.thumbnail}

Klicken Sie auf die Schaltfläche `Generate`{.action}.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen2.png){.thumbnail}

Eine Statusanzeige erscheint. Bewegen Sie den Mauszeiger über den Bereich unter der Fortschrittsleiste, bis PuTTYgen über genügend zufällige Daten verfügt, um mit der Schlüsselgenerierung zu beginnen.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen.gif){.thumbnail}

Sie verfügen nun über ein **Schlüsselpaar**, das aus zwei Teilen besteht:

- **Public Key**: Die öffentliche Schlüsselzeichenfolge, die auf Remote-Hosts gespeichert wird, zu denen Sie eine Verbindung herstellen möchten.
- **Private Key**: Die private Schlüsselzeichenfolge, die auf dem lokalen Gerät verbleibt, von dem aus Sie eine Verbindung mit einem Remote-Host (oder mehreren) herstellen.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen3.png){.thumbnail}

Optional können Sie das Feld `Comment` mit Ihrer eigenen Beschreibung ausfüllen. Sie wird von den PuTTY-Tools angezeigt, wenn der Schlüssel verwendet wird.

##### Schritt 2: Privaten Schlüssel speichern

Geben Sie eine Passphrase in die Felder `Key passphrase` und `Confirm` ein, um Ihre private Schlüsseldatei zu schützen. Der beste Ansatz besteht darin, einen Passwort-Manager zu verwenden, um ein Passwort zu erstellen und zu speichern, das aus mehreren Wörtern besteht (Passphrase).

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen4.png){.thumbnail}

Klicken Sie auf `Save private key`{.action}. Wählen Sie einen Ordner für Ihre Schlüsseldateien aus, oder erstellen Sie einen neuen Ordner, zum Beispiel mit dem Namen `putty_key_files`.  
Geben Sie einen Namen für Ihre Schlüsseldatei ein und speichern Sie sie. Sie sollten nun eine neue Datei mit dem der Erweiterung `ppk` (*PuTTY private key*) in Ihrem Ordner haben.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen5.png){.thumbnail}

> [!warning]
>
> Der Zugriff auf Remote-Server ist nur so sicher wie das Client-Gerät, das den privaten Schlüssel speichert. Daher ist es wichtig, Ihr Gerät und die darin enthaltenen Schlüsseldateien vor unberechtigtem Zugriff zu schützen.
>
> Speichern Sie die Passphrasen in einem Passwortmanager auf Ihrem Gerät, z.B. der Open-Source-Lösung **KeePass**, und verwenden Sie das Tool [Pageant](#pageant) für schlüsselbasierte Verbindungen.
>

Die Option `Save public key`{.action} in PuTTYgen konvertiert die Zeichenfolge des **Public Key** in das "*SSH-2 standard format*" und erstellt eine Datei mit dieser Zeichenfolge. Schlüsselzeichenfolgen in diesem Format sind für dieses Tutorial jedoch nicht relevant.

##### Schritt 3: Den Public Key vorbereiten

Im nächsten Schritt wird der **öffentliche Schlüssel** auf dem Remote-Host, zu dem Sie eine Verbindung herstellen möchten, gespeichert. Das Format der Schlüsselzeichenfolge, das im PuTTYgen-Fenster unter `Public key for pasting into OpenSSH authorized_keys file` angezeigt wird, ist mit OpenSSH kompatibel. Sie benötigen die exakte Schlüsselzeichenfolge in einer Zeile.

> [!primary]
> Sie müssen den öffentlichen Schlüssel nicht als Datei speichern, da Sie ihn jederzeit aus der privaten Schlüsseldatei abrufen können. Öffnen Sie dazu PuTTYgen und klicken Sie auf den Button `Load`{.action}. Wählen Sie Ihre Schlüsseldatei im Format `ppk` aus und geben Sie Ihre Passphrase ein, um sie zu öffnen.
>
> Sie können auch die Zeichenfolge für den öffentlichen Schlüssel kopieren und in eine reine Text-Datei einfügen (ohne die Schlüsselzeichenfolge durch Zeilenumbrüche zu unterbrechen).
>

Um mit [dem nächsten Schritt](#transferkeys) fortzufahren, markieren und kopieren Sie **die gesamte Schlüsselzeichenfolge**.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen6.png){.thumbnail}

///

<a name="transferkeys"></a>

#### Transfer von öffentlichen Schlüsseln auf Ihren Server

Die Aktionen in diesem Schritt hängen von der Art des verwendeten Diensts ab und davon, ob Sie ein neues Betriebssystem installieren oder den Schlüssel einem bereits verwendeten System hinzufügen.

/// details | Hinzufügen eines öffentlichen SSH-Schlüssels bei der Installation oder Neuinstallation eines Betriebssystems (OVHcloud Kundencenter)

Klicken Sie auf den Tab Ihres Dienstes:

> [!tabs]
> **Public Cloud Instanz**
>>
>> Markieren und kopieren Sie **die gesamte Zeichenfolge des öffentlichen Schlüssels** aus dem PuTTYgen-Fenster, die Sie [im vorherigen Schritt erstellt haben](#puttygen) (öffnen Sie ggf. zuerst die entsprechende **Datei des privaten Schlüssels**). Dann verwenden Sie diese wie im entsprechenden Abschnitt unserer [Anleitung zur Erstellung einer Public Cloud Instanz im OVHcloud Kundencenter beschrieben](/pages/public_cloud/compute/public-cloud-first-steps).
>>
>>![putty key](/pages/assets/screens/other/web-tools/putty/puttygen6.png){.thumbnail}
>>
> **Dedicated Server**
>>
>> Markieren und kopieren Sie **die gesamte Zeichenfolge des öffentlichen Schlüssels** aus dem PuTTYgen-Fenster, die Sie [im vorherigen Schritt erstellt haben](#puttygen) (öffnen Sie ggf. zuerst die entsprechende **Datei des privaten Schlüssels**). Geben Sie diese bei der Installation in das entsprechende Feld ein. Weitere Informationen finden Sie in unserer Anleitung: [Erste Schritte mit einem Dedicated Server](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server).
>>
>>![putty key](/pages/assets/screens/other/web-tools/putty/puttygen6.png){.thumbnail}
>>
> **VPS**
>>
>> Markieren und kopieren Sie **die gesamte Zeichenfolge des öffentlichen Schlüssels** aus dem PuTTYgen-Fenster, die Sie [im vorherigen Schritt erstellt haben](#puttygen) (öffnen Sie ggf. zuerst die entsprechende **Datei des privaten Schlüssels**). Geben Sie diese bei der Installation in das entsprechende Feld ein. Weitere Informationen finden Sie in unserer Anleitung: [Erste Schritte mit einem VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps).
>>
>>![putty key](/pages/assets/screens/other/web-tools/putty/puttygen6.png){.thumbnail}
>>

///

**Hinzufügen eines öffentlichen SSH-Schlüssels zu einem laufenden Betriebssystem**

Wählen Sie den Diensttyp aus:

/// details | Public Cloud Instanz

Markieren und kopieren Sie **die gesamte Zeichenfolge des öffentlichen Schlüssels** aus dem PuTTYgen-Fenster, die Sie [im vorherigen Schritt erstellt haben](#puttygen) (öffnen Sie ggf. zuerst die entsprechende **Datei des privaten Schlüssels**). Befolgen Sie nun die Anweisungen in der relevanten Anleitung:

- [Konfigurieren zusätzlicher SSH-Schlüssel für eine Instanz](/pages/public_cloud/compute/configuring_additional_ssh_keys)
- [Ersetzen eines verlorenen SSH-Schlüsselpaars auf einer Instanz](/pages/public_cloud/compute/replacing_lost_ssh_key)

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen6.png){.thumbnail}

///


/// details | Dedicated Server oder VPS

[Loggen Sie sich auf dem Server](#cloudserver) mit dem gewünschten Benutzer-Account ein. Erstellen Sie den Ordner `.ssh` (wenn er nicht existiert):

```bash
mkdir ~/.ssh
```

Um den Schlüssel für den aktuellen Benutzer zu speichern, öffnen (oder erstellen) Sie die Datei `authorized_keys` mit Ihrem bevorzugten Texteditor (`nano` wird in diesem Beispiel verwendet):

```bash
nano ~/.ssh/authorized_keys
```

Markieren und kopieren Sie **die gesamte Zeichenfolge des öffentlichen Schlüssels**, die Sie [im vorherigen Schritt erstellt](#puttygen) aus dem Fenster PuTTYgen erstellt haben (öffnen Sie ggf. zuerst die entsprechende **Datei des privaten Schlüssels**).

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen6.png){.thumbnail}

Fügen Sie die vollständige **Zeichenfolge des öffentlichen Schlüssels** in diese Datei ein. Stellen Sie sicher, dass die Schlüsselzeichenfolge durchgehend, ohne Zeilenumbrüche vorhanden ist.

![putty key](/pages/assets/screens/other/web-tools/putty/puttygen7.png){.thumbnail}

Speichern Sie die Datei und beenden Sie den Editor. Starten Sie Ihren Server neu (`sudo reboot`) oder starten Sie nur den OpenSSH-Dienst neu, mit einem der folgenden Befehle (der korrekte Befehl kann je nach Betriebssystem variieren):

```bash
sudo systemctl restart ssh
```

```bash
sudo systemctl restart sshd
```

Beenden Sie die aktuelle PuTTY-*Session*:

```bash
logout
```

Um zu überprüfen, dass Ihr Schlüssel korrekt konfiguriert ist, melden Sie sich mit den [unten beschriebenen Schritten](#puttykeys) bei Ihrem Server an.

///

<a name="puttykeys"></a>

#### Verbindung zum Server

Um sich mit einem Remote-Host (Public Cloud Instanz, Dedicated Server oder VPS) zu verbinden, müssen Sie [das Schlüsselpaar erstellt](#puttygen) und [die Zeichenfolge des öffentlichen Schlüssels zu Ihrem Server hinzugefügt](#transferkeys) haben.

| ![putty](/pages/assets/screens/other/web-tools/putty/putty3.png){.thumbnail} |
|:--|
| 1\. Öffnen Sie PuTTY.<br> 2\. Erweitern Sie den Knoten `SSH` unter `Connection` in der Struktur `Category`.<br> 3\. Erweitern Sie den Knoten `Auth`.<br> 4\. Klicken Sie auf `Credentials`, um die entsprechenden Einstellungen anzuzeigen.<br> 5\. Klicken Sie auf `Browse`{.action}.<br> 6\. Wählen Sie die Datei für den privaten Schlüssel (`keyfile.ppk`) aus dem Ordner, in dem Sie sie gespeichert haben. |

Gehen Sie im linken Menü zurück zu `Session`. Geben Sie die Verbindungsdaten in die entsprechenden Felder ein.

![putty](/pages/assets/screens/other/web-tools/putty/putty2.png){.thumbnail}

- `Host Name (or IP address)`: **username@IPv4_server** (Beispiel: **ubuntu@203.0.113.101**)
- `Port`: 22 (außer Sie haben die SSH-Port-Nummer des Servers geändert)

Klicken Sie auf `Open`{.action}. Das PuTTY-Terminal fragt nach dem Passwort für die Schlüsseldatei.  
Beachten Sie, dass **bei einer Passworteingabeaufforderung im PuTTY-Terminal Ihre Eingaben nicht angezeigt werden**. Beispielausgabe:

```console
Using username "ubuntu".
Authenticating with public key "rsa-key-example"
Passphrase for key "rsa-key-example":
```

```console
Welcome to Ubuntu 24.04.1 LTS (GNU/Linux 6.8.0-47-generic x86_64)
```

Erfahren Sie in den nächsten Abschnitten, wie Sie mithilfe von Pageant der Verbindung eine Schlüsseldatei zuordnen und [diese dann speichern](#sessions).

<a name="pageant"></a>

#### Verwaltung von SSH-Schlüsseln auf einem lokalen Gerät mit Pageant (PuTTY Authentication Agent)

Wenn Sie die obigen Anweisungen befolgt haben, können Sie mithilfe der Schlüsselauthentifizierung auf Ihren Remote-Host zugreifen. Während für die Verbindung selbst kein Passwort erforderlich ist, wird PuTTY jedoch jedes Mal nach dem Passwort für die entsprechende private Schlüsseldatei fragen.

![pageant](/pages/assets/screens/other/web-tools/putty/pterminal.png){.thumbnail}

Die Verwendung von Pageant ermöglicht schnellere Verbindungen auf zwei Wegen:

- Sie müssen nicht für jede Verbindung in PuTTY die Datei für den privaten Schlüssel auswählen.
- Die Passphrase für die Datei mit dem privaten Schlüssel muss nur einmal eingegeben werden, und zwar wenn die Schlüsseldatei von Pageant geöffnet wird.

Öffnen Sie die Pageant-Anwendung [auf Ihrem Gerät](#installation). Da sich das Pageant-Schlüsselfenster nicht automatisch öffnet, müssen Sie noch auf das entsprechende Symbol in der Taskleiste (*System Tray* in Windows) (doppel-)klicken.

![pageant](/pages/assets/screens/other/web-tools/putty/systray.png){.thumbnail}

Dadurch wird die **Pageant Key List** geöffnet. Klicken Sie auf `Add Key`{.action} und wählen Sie die Datei mit dem privaten Schlüssel (`keyfile.ppk`) in dem Ordner aus, in dem Sie sie gespeichert haben.

![pageant](/pages/assets/screens/other/web-tools/putty/pageant1.png){.thumbnail}

Geben Sie die Passphrase für diese Schlüsseldatei ein. Der Schlüssel ist jetzt in der Liste und wird von PuTTY verwendet, solange Pageant ausgeführt wird.

![pageant](/pages/assets/screens/other/web-tools/putty/pageant2.png){.thumbnail}

Auch wenn Sie dieses Fenster schließen, wird Pageant weiterhin im Hintergrund ausgeführt und kann Schlüssel bereitstellen, sofern das Symbol in der Taskleiste angezeigt wird.

Wenn Sie Ihre Verbindung zusätzlich als *Session* in PuTTY speichern, wie im nächsten Abschnitt beschrieben, können Sie Remote-Verbindungen mit nur wenigen Klicks öffnen.

<a name="sessions"></a>

### Login-*Sessions* in PuTTY verwenden

PuTTY bietet die Möglichkeit, Parameter für verschiedene Verbindungen als *Sessions* zu speichern, wodurch eine schnellere Verbindung zum Remote-Host (Webhosting, Server, Instanz, LAN-Gerät) ermöglicht wird.

Wählen Sie die zutreffende Verbindungsmethode aus:

/// details | Anmeldung mit Benutzername und Passwort

Um eine [passwortbasierte Login-*Session*](#sshconnect1) zu speichern, führen Sie die folgenden Schritte aus:

| ![Sessions](/pages/assets/screens/other/web-tools/putty/sessions1.png){.thumbnail} |
|---|
| 1\. Öffnen Sie PuTTY.<br> 2\. Geben Sie die Verbindungsinformationen in das Feld `Host Name (or IP address)` ein: **username@IPv4_server** (Beispiel: **ubuntu@203.0.113.101**)<br> 3\. Ändern Sie gegebenenfalls die Nummer des SSH-Ports im Feld unter `Port`.<br> 4\. Geben Sie einen Namen für diese Verbindung in das Feld unter `Saved Sessions` ein.<br> 5\. Klicken Sie auf den Button `Save`{.action}. |

Um eine zuvor gespeicherte Verbindung zu öffnen, führen Sie die folgenden Schritte aus:

| ![Sessions](/pages/assets/screens/other/web-tools/putty/sessions2.png){.thumbnail} |
|---|
| 1\. Öffnen Sie PuTTY.<br> 2\. Doppelklicken Sie auf die gewünschte *Session* in der Liste unter `Saved Sessions` (oder wählen Sie sie aus und klicken Sie auf den Button `Open`{.action}). |

| ![Sessions](/pages/assets/screens/other/web-tools/putty/sessions3.png){.thumbnail} |
|---|
| Geben Sie im PuTTY-Terminal das Benutzerpasswort für den Remote-Host ein. |

///

<a name="sessionskeys"></a>

/// details | Anmeldung mit Benutzername und Authentifizierungsschlüsseln

Um eine [schlüsselbasierte Login-*Session*](#puttykeys) zu speichern, führen Sie die folgenden Schritte aus:

| ![putty](/pages/assets/screens/other/web-tools/putty/sessions4.png){.thumbnail} |
|---|
| 1\. Öffnen Sie PuTTY.<br> 2\. Geben Sie die Verbindungsinformationen in das Feld `Host Name (or IP address)` ein: **username@IPv4_server** (Beispiel: **ubuntu@203.0.113.101**)<br> 3\. Bearbeiten Sie gegebenenfalls die Nummer des SSH-Ports im Feld unter `Port`. |

| ![putty](/pages/assets/screens/other/web-tools/putty/putty3.png){.thumbnail} |
|---|
| 4\. Erweitern Sie den Knoten `SSH` unter `Connection` in der Struktur `Category`.<br> 5\. Erweitern Sie den Knoten `Auth` in der Struktur `Category`.<br> 6\. Klicken Sie auf `Credentials`, um die entsprechenden Einstellungen anzuzeigen.<br> 7\. Klicken Sie auf `Browse`{.action}.<br> 8\. Navigieren Sie zu dem Ordner, in dem die Dateien mit dem privaten Schlüssel gespeichert sind.<br> 9\. Öffnen Sie die betreffende Schlüsseldatei. |

| ![Sessions](/pages/assets/screens/other/web-tools/putty/sessions5.png){.thumbnail} |
|---|
| 10\. Gehen Sie im Menü links zur Konfigurationskategorie `Session` zurück.<br> 11\. Geben Sie einen Namen für diese Verbindung in das Feld unter `Saved Sessions` ein.<br> 12\. Klicken Sie auf den Button `Save`{.action}. |

<a name="qconnect"></a>

Sie können jetzt Ihre gespeicherten schlüsselbasierten Verbindungen schnell aufbauen, entweder im PuTTY-Fenster oder über Pageant:

| **PuTTY** | **Pageant** |
|---|---|
| ![Sessions](/pages/assets/screens/other/web-tools/putty/sessions2.png){.thumbnail}<br> 1\. Öffnen Sie PuTTY.<br> 2\. Doppelklicken Sie auf die gewünschte Session in der Liste unter `Saved Sessions`. | ![pageant](/pages/assets/screens/other/web-tools/putty/pageant3.png){.thumbnail}<br> 1\. Klicken Sie mit der rechten Maustaste auf das Pageant-Symbol in der Taskleiste.<br> 2\. Klicken Sie im Untermenü `Saved Sessions` auf die gewünschte Session. |

///

Um die Einstellungen für eine Session zu ändern, wählen Sie sie in der Liste aus und klicken auf die Schaltfläche `Load`{.action}.

<a name="example"></a>

### Anwendungsbeispiel: Verwendung von PuTTY Tools zur Konfiguration sicherer Verbindungen zu OVHcloud Servern (VPS, Dedicated Server, Public Cloud Instanz)

Dieses Tutorial kann auf verschiedene Szenarien und Verbindungstypen angewendet werden.

Wenn Sie die folgenden Schritte in der angegebenen Reihenfolge ausführen, können Sie Ihre Verbindungen so konfigurieren, dass sie mit nur wenigen Klicks geöffnet werden können:

- Schritt 1: [PuTTY-Paket installieren](#installation)
- Schritt 2: [Schlüsselpaar in PuTTYgen erstellen](#puttygen)
- Schritt 3: [Öffentlichen Schlüssel zu Ihrem Remote-Host hinzufügen](#transferkeys)
- Schritt 4: [Privaten Schlüssel in Pageant hinzufügen](#pageant)
- Schritt 5: [Verbindung als *Sessions* in PuTTY speichern](#sessions)
- Schritt 6: [Verbindung mit dem Remote-Host über die zugehörige *Session* aufbauen](#qconnect)

## Weiterführende Informationen

[Einführung in SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[SSH-Schlüssel mit OpenSSH erstellen](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)

[SSH-Schlüssel mit OpenSSH für Public Cloud Instanzen erstellen](/pages/public_cloud/compute/creating-ssh-keys-pci)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.