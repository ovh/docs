---
title: 'SSH-Schlüssel erzeugen'
slug: ssh-schluessel-erzeugen
excerpt: 'Erfahren Sie hier, wie Sie SSH-Schlüssel für eine sichere Verbindung zu Ihrem Server verwenden'
section: 'Erste Schritte'
---

**Letzte Aktualisierung am 20.07.2020**

## Ziel

Durch die Verwendung des SSH-Protokolls entsteht ein sicherer Kanal über ein ungesichertes Netzwerk in einer Client-Server-Architektur, der einen SSH-Client mit einem SSH-Server verbindet. Durch das Erstellen eines SSH-Schlüsselsatzes erhalten Sie einen öffentlichen und einen privaten Schlüssel. 

Sie können den öffentlichen Schlüssel auf einem beliebigen Server platzieren und ihn dann entsperren, indem Sie eine Verbindung mit einem Client herstellen, auf dem bereits Ihr privater Schlüssel gespeichert ist. Wenn die SSH-Schlüsselsätze übereinstimmen, werden Sie ohne Eingabe eines Kennworts angemeldet.

**Diese Anleitung erläutert, wie Sie SSH-Schlüssel erstellen und diese dann für den sicheren Zugriff auf Ihren Server verwenden.**

> [!primary]
>
Beachten Sie bitte, dass SSH-Schlüssel bei Servern, auf denen Windows installiert ist, nicht zur Authentifizierung verwendet werden. Für Windows Server müssen Sie weiterhin einen Benutzernamen und ein Kennwort verwenden.
>

## Voraussetzungen

- Sie haben einen [Dedicated Server](https://www.ovh.de/dedicated_server/) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager).
- Sie haben administrativen Zugriff (Root) über SSH auf Ihren Server.

## In der praktischen Anwendung

### Erstellen eines SSH-Schlüssels mit einem Linux- oder Mac-Betriebssystem

Öffnen Sie zunächst die Befehlszeilenanwendung (Terminal).

Stellen Sie sicher, dass sich in Ihrem $HOME-Verzeichnis der Ordner „.ssh“ befindet. Wenn der Ordner nicht vorhanden ist, erstellen Sie ihn:

```sh
# mkdir ~/.ssh
```

Verwenden Sie den folgenden Befehl, um einen 4096-Bit-RSA-Schlüssel zu erstellen:

```sh
# ssh-keygen -b 4096
```
Wenn Sie die Option „-t“ mit diesem Befehl verwenden, können Sie eine andere Verschlüsselungsmethode angeben, z.B.:

```sh
# ssh-keygen -t ed25519 -a 256
```

Sie werden nachfolgend aufgefordert, den neu erstellten Schlüssel in der Standarddatei zu speichern:

```sh
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa):
```

Sie können die Standarddatei akzeptieren, indem Sie "↩" drücken. Jetzt haben Sie die Möglichkeit, eine Passphrase einzugeben, um Ihren SSH-Schlüssel abzusichern. Dies wird als zusätzliche Sicherheitsmaßnahme empfohlen.

Ihre SSH-Schlüssel sollten im Verzeichnis „.ssh“ gespeichert sein. Der Datei mit dem öffentlichen Schlüssel wird ".pub" zum Dateinamen hinzugefügt.

```ssh
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

> [!warning]
>
> Der private Schlüssel sollte stets sicher aufbewahrt werden, und der Zugriff darauf sollte ausschließlich autorisierten Personen gestattet sein.
> 

Verwenden Sie zum Lesen und Exportieren Ihres öffentlichen Schlüssels den Befehl „cat“ auf Ihre Schlüsseldatei und kopieren Sie die Ausgabe:

```ssh
# cat ~/.ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC8teh2NJ42qYZV98gTNhumO1b6rMYIkAfRVazl
k6dSS3xf2MXJ4YHsDacdjtJ+evXCFBy/IWgdkFtcvsGAMZ2N1RdvhDyQYcy6NDaJCBYw1K6Gv5fJ
SHCiFXvMF0MRRUSMneYlidxUJg9eDvdygny4xOdC6c1JrPrSgOc2nQuKeMpOoOWLINIswg1IIFVk
kFMPrFivP8Z6tidzVpAtbr1sXmJGZazYWrU3FoK2a1sF1zEWrmlMOzX81zEWrmlMOzX8CpZW8Rae
i4ANmLy7NULWK36yU0Rp9bFJ4o0/4PTkZiDCsK0QyHhAJXdLN7ZHpfJtHIPCnexmwIMLfIhCWhO5
 user@hostname
```

> [!primary]
>
>In einem MacOS Terminal können Sie auch die Kommandos „pbcopy“ und „pbpaste“ verwenden, um mit Schlüsselstrings zu arbeiten. Verwenden Sie den folgenden Befehl zum Kopieren des Schlüssels aus der Datei „id_rsa.pub“ in die Zwischenablage:
>

```ssh
$ pbcopy < ~/.ssh/id_rsa.pub
```


### Erstellen eins SSH-Schlüssels mithilfe von PuTTY (für Windows)

[PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/) ist eine Open Source SSH Client Software mit einer grafischen Benutzeroberfläche, die für Windows und andere Betriebssysteme verfügbar ist. PuTTY bietet Ihnen die Möglichkeit, eine Remoteverbindung mit einem Linux-Server herzustellen. Die dazugehörige Software, PuTTY Key Generator (PuTTYgen), kann zum Erstellen von SSH-Schlüsseln verwendet werden.

Laden Sie zunächst PuTTY auf der [offiziellen Webseite](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) herunter, wenn es noch nicht installiert ist. Das empfohlene Standard-Installationspaket enthält bereits PuTTYgen, es ist aber auch als eigenständige Datei verfügbar. Um herauszufinden, ob es bereits auf Ihrem System verfügbar ist, schauen Sie in Ihr "Programme"-Menü oder verwenden Sie die Windows-Suche.

Führen Sie als Nächstes die Software aus und wählen Sie einen unterstützten Verschlüsselungsalgorithmus aus. Im Beispiel wird RSA verwendet. Geben Sie 4096 als Anzahl der Bits ein, und klicken Sie dann auf die Schaltfläche `Generate`{.action}.

![putty key](images/puttygen_01.png){.thumbnail}

Bewegen Sie den Mauscursor beliebig über den Bereich unterhalb des Fortschrittsbalkens.

![putty key](images/puttygen_02.gif){.thumbnail}

Der Schlüssel ist bereit, wenn der Fortschrittsbalken voll ist.

![putty key](images/puttygen_03.png){.thumbnail}

Sie können den öffentlichen Schlüssel in diesem Fenster markieren und kopieren. Es gibt hier auch die Möglichkeit, die Schlüssel in Dateien zu speichern.

### SSH-Schlüssel zur Ihrem Server hinzufügen

Wechseln Sie zu Ihrem $HOME-Verzeichnis und erstellen Sie den Ordner „.ssh“ (falls nicht vorhanden):

```ssh
$ mkdir ~/.ssh
```

Um den Schlüssel für den aktuellen Benutzer zu speichern, öffnen Sie eine Datei mit dem Namen „authorized_keys“ mit Ihrem bevorzugten Texteditor:

```ssh
$ nano ~/.ssh/authorized_keys
```

Kopieren Sie Ihren **öffentlichen Schlüssel** und fügen Sie ihn in diese neue Datei ein. Speichern Sie die Datei und beenden Sie den Editor. Starten Sie Ihren Server oder nur den OpenSSH-Daemon neu (der entsprechende Befehl kann je nach Betriebssystem variieren):

```ssh
$ systemctl restart sshd
```

Um zu überprüfen, ob Ihr Schlüssel ordnungsgemäß eingerichtet wurde, versuchen Sie unter Verwendung Ihres Benutzernamens mit dem folgenden Befehl über SSH auf Ihren Server zuzugreifen. Ersetzen Sie „IP_ADDRESSorHOSTNAME“ durch die IP-Adresse oder den Hostnamen des Servers, auf den Sie zugreifen möchten:

```ssh
$ ssh user@IP_ADDRESSorHOSTNAME
```

#### Zusätzliche Schlüssel zu Ihrem Server hinzufügen

Um SSH-Schlüssel für zusätzliche Benutzer hinzuzufügen, wiederholen Sie einfach die vorherigen Schritte. Verwenden Sie jedoch das $HOME-Verzeichnis des entsprechenden Benutzers, um den eindeutigen Schlüssel dieses Benutzers zu erstellen.

#### Autorisierte Schlüssel von Ihrem Server entfernen

Löschen Sie den Schlüssel, der dem Benutzer entspricht, dessen Zugriff entfernt werden soll, aus der „authorized_keys“ Datei. Speichern Sie nach dem Entfernen des Schlüssels die Datei und beenden Sie den Texteditor.

### Ihren SSH-Schlüssel ins OVHcloud Kundencenter importieren

Im OVHcloud Kundencenter können Sie öffentliche Schlüssel speichern, die mit einem der unterstützten Verschlüsselungstypen (derzeit RSA, ECDSA, ED25519) erstellt wurden. 

Öffnen Sie das vertikale Seitenmenü, indem Sie oben rechts auf Ihren Namen klicken und wählen Sie danach den Shortcut `Produkte und Dienstleistungen`{.action}.

![SSH-Schlüssel Kundencenter](images/SSH_keys_panel_1.png){.thumbnail}

In „Meine Dienste“ wechseln Sie zum Tab `SSH-Schlüssel`{.action} und klicken Sie auf `SSH-Schlüssel hinzufügen`{.action}.

![SSH-Schlüssel Kundencenter](images/SSH_keys_panel_2.png){.thumbnail}

Wählen Sie im Dropdown-Menü „Dedicated“ aus.

Geben Sie im neuen Fenster eine Kennung (einen Namen Ihrer Wahl) für den Schlüssel ein. Fügen Sie die Schlüsselzeichenfolge (kopiert aus Ihrer „.pub“ -Datei oder PuTTYgen) in das Feld „Schlüssel“ ein.

![SSH-Schlüssel Kundencenter](images/SSH_keys_panel_3.png){.thumbnail}

Wenn Sie die vollständige Ausgabe kopiert haben, sollte der „Identifier“ hinter dem Schlüsselstring bereits enthalten sein. Beachten Sie, dass Sie zum Speichern Ihres Schlüssels immer Ihren „Identifier“ nach dem Schlüssel angeben müssen. Dies ist eine Anforderung des OVHcloud Kundencenters (Beispielformat oben im Screenshot). Klicken Sie zum Speichern Ihres öffentlichen Schlüssels auf `Bestätigen`{.action}.

> [!primary]
>
> Alle im Abschnitt „Dedicated“ gespeicherten Schlüssel können auch für Ihre VPS Dienste verwendet werden. Informationen zum Hinterlegen von SSH-Schlüsseln für Public Cloud Dienste finden Sie in [dieser Anleitung](../../public-cloud/create-ssh-keys/#ihren-ssh-schlussel-ins-ovhcloud-kundencenter-importieren_1).
>


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.