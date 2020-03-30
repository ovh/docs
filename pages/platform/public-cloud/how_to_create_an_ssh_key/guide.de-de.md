---
title: 'SSH-Schlüssel erstellen'
slug: create-ssh-keys
excerpt: 'Erfahren Sie hier, wie Sie einen SSH-Schlüssel erstellen, um sich bei Ihrer Instanz anzumelden'
section: Sicherheit
---

**Letzte Aktualisierung am 14.11.2019**

## Ziel

Wenn Sie eine [Public Cloud Instanz](https://www.ovh.de/public-cloud/instances/) erstellen, erhalten Sie keine E-Mail mit Anmeldeinformationen, da die Authentifizierung auf sicheren SSH-Schlüsseln anstelle von Benutzernamen und Kennwörtern basiert.

**Diese Anleitung erklärt, wie Sie einen SSH-Schlüssel erstellen, um sich bei Ihrer Instanz anzumelden.**

> [!primary]
>
Beachten Sie bitte, dass SSH-Schlüssel bei Instanzen, auf denen das Windows-Betriebssystem ausgeführt wird, nicht zur Authentifizierung verwendet werden. Für Windows-Instanzen müssen Sie weiterhin einen Benutzernamen und ein Kennwort verwenden.
>

## Voraussetzungen

- Sie haben ein [Public Cloud Projekt](https://www.ovhcloud.com/de/public-cloud) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager).

## In der praktischen Anwendung

### Erstellen eines SSH-Schlüssels auf Linux und Mac

Öffnen Sie zuerst die Terminal-App (Befehlszeile) und führen Sie dann den folgenden Befehl aus, um einen 4096-Bit-SSH-Schlüssel zu generieren:

```sh
# ssh-keygen -b 4096
```

Der Befehl gibt das folgende Ergebnis aus und fordert Sie auf, den neu erstellten Schlüssel zu speichern:

```sh
Generating public/private rsa key pair.
Enter file in which to save the key (/home/user/.ssh/id_rsa):
```

> [!warning]
>
> Der private Teil des Schlüssels sollte sicher aufbewahrt werden, und der Zugriff sollte auf Personen beschränkt sein, die zur Verwendung des Schlüssels berechtigt sind.
> 

Nachdem Sie den Schlüssel gespeichert haben, gibt die Befehlszeile Folgendes aus:

```ssh
Your identification has been saved in /home/user/.ssh/id_rsa.
Your public key has been saved in /home/user/.ssh/id_rsa.pub.
The key fingerprint is:
0a:3a:a4:ac:d1:40:6d:63:6d:fd:d9:fa:d6:b2:e0:36 user@host
The key's randomart image is:
+---[RSA 4096]----+
|      .          |
|                 |
| .               |
|. . . .          |
|. .=.o .S.       |
| =o.o. ..   .    |
|o +   .  . o ..  |
|.. .      oEoo . |
|o.        .o+oo  |
+-----------------+
```

Sie können den Schlüssel mithilfe des folgenden Befehls lesen und anzeigen:

```ssh
# cat .ssh/id_rsa.pub
```

Wenn Sie diesen Befehl ausführen, wird Folgendes ausgegeben:

```ssh
cat /home/user/.ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC8teh2NJ42qYZV98gTNhumO1b6rMYIkAfRVazl
k6dSS3xf2MXJ4YHsDacdjtJ+evXCFBy/IWgdkFtcvsGAMZ2N1RdvhDyQYcy6NDaJCBYw1K6Gv5fJ
SHCiFXvMF0MRRUSMneYlidxU3U2q66yt/wPmw1yRsQagtNKHAzFUCSOB1nFz0RkqvqgARrHTY0bd
aS0weA//aK9f6z+Y4THPbcCj4xPH4iGikFMPrFivP8Z6tidzVpAtbr1sXmJGZazYWrU3FoK2a1sF
i4ANmLy7NULWK36yU0Rp9bFJ4o0/4PTkZiDCsK0QyHhAJXdLN7ZHpfJtHIPCnexmwIMLfIhCWhO5
 user@host
```

### Erstellen eines SSH-Schlüssels unter Windows

#### Verwendung von PuTTY

[PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/) ist ein beliebter SSH-Client für Windows. PuTTY bietet Ihnen die Möglichkeit, eine Remoteverbindung mit einem Linux-Server herzustellen. Die zugehörige Software [PuTTYgen](https://the.earth.li/~sgtatham/putty/latest/w64/puttygen.exe) kann zum Erstellen von SSH-Schlüsseln verwendet werden.

Laden Sie zunächst die Software [PuTTYgen](https://the.earth.li/~sgtatham/putty/latest/w64/puttygen.exe) herunter, mit der wir den Schlüssel generieren.

Führen Sie als nächstes die Software aus und wählen Sie RSA als Schlüsseltyp. Geben Sie danach 4096 als Anzahl der zu generierenden Bits ein und klicken Sie dann auf die Schaltfläche `Generieren`{.action}.

![Schlüssel generieren](images/puttygen-01.png){.thumbnail}

Als nächstes führen Sie Mausbewegungen in dem Bereich unterhalb des Fortschrittsbalkens aus (siehe unten).

![Schlüssel generieren](images/puttygen-02.gif){.thumbnail}

Sobald Sie die Maus bewegen, füllt sich der Fortschrittsbalken. Wenn er voll ist, ist der Schlüssel fertiggestellt.

![Schlüssel generieren](images/puttygen-03.png){.thumbnail}

### Ihren SSH-Schlüssel ins OVHcloud Kundencenter importieren

Markieren und kopieren Sie zuerst den Text Ihres öffentlichen Schlüssels und melden Sie sich dann im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) an.

Wechseln Sie zum Bereich `Public Cloud`{.action}.

![Cloud-Menü](images/cloud-menu.png){.thumbnail}

Wählen Sie Ihr Public Cloud Projekt aus der linken Menüspalte aus.

![Projekt auswählen](images/select-project.png){.thumbnail}

Klicken Sie links unten auf `SSH Keys`{.action} und dann auf `SSH-Schlüssel hinzufügen`{.action}. Fügen Sie nun den 4096-Byte-Schlüssel in das dafür vorgesehene Feld ein, geben Sie dem Schlüssel einen Namen und klicken Sie auf `Hinzufügen`{.action}.

![SSH-Schlüssel speichern](images/save-key.png){.thumbnail}

Ihr Schlüssel wird anschließend zur Authentifizierung im OVHcloud Kundencenter gespeichert.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.