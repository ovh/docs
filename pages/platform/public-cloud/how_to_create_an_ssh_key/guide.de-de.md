---
title: 'SSH-Schlüssel erstellen'
slug: create-ssh-keys
excerpt: 'In diesem Handbuch erfahren Sie, wie Sie einen SSH-Schlüssel erstellen, um sich bei Ihrer Instanz anzumelden.'
section: Sicherheit
---

**Letzte Aktualisierung am 14\. November 2019**

## Ziel

Wenn Sie eine [Public Cloud-Instanz](https://www.ovh.de/public-cloud/instances/){.external} erstellen, erhalten Sie keine E-Mail mit Anmeldeinformationen, da die Authentifizierung auf sicheren SSH-Schlüsseln anstelle von Benutzernamen und Kennwörtern basiert.

**In diesem Handbuch erfahren Sie, wie Sie einen SSH-Schlüssel erstellen, um sich bei Ihrer Instanz anzumelden.**

> [!primary]
>
Beachten Sie bitte, dass SSH-Schlüssel bei Instanzen, auf denen das Windows-Betriebssystem ausgeführt wird, nicht zur Authentifizierung verwendet werden. Für Windows-Instanzen müssen Sie weiterhin einen Benutzernamen und ein Kennwort verwenden.
>

## Anforderungen

* ein [Public Cloud](https://www.ovh.de/public-cloud/instances/){.external}-Projekt in Ihrem OVH-Konto
* Zugriff auf das [OVH-Bedienfeld](https://www.ovh.com/auth/?action=gotomanager){.external}

## Anweisungen

### Erstellen eines SSH-Schlüssels auf Linux und Mac

Öffnen Sie zuerst die Terminal-App (Befehlszeile) und führen Sie dann den folgenden Befehl aus, um einen 4096-Bit-SSH-Schlüssel zu generieren:

```sh
# ssh-keygen -b 4096
```

Der Befehl gibt das folgende Ergebnis aus und fordert Sie auf, den neu erstellten Schlüssel zu speichern:

```sh
Generierung eines öffentlichen/privaten RSA-Schlüsselpaars.
Geben Sie die Datei ein, in der der Schlüssel gespeichert werden soll (/home/user/.ssh/id_rsa):
```

> [!warning]
>
> Der private Teil des Schlüssels sollte sicher aufbewahrt werden, und der Zugriff sollte auf Personen beschränkt sein, die zur Verwendung des Schlüssels berechtigt sind.
> 

Nachdem Sie den Schlüssel gespeichert haben, gibt die Befehlszeile Folgendes aus:

```ssh
Ihre Identifikation wurde in /home/user/.ssh/id_rsa gespeichert.
Ihr öffentlicher Schlüssel wurde in /home/user/.ssh/id_rsa.pub gespeichert.
Der Schlüsselfingerabdruck lautet:
0a:3a:a4:ac:d1:40:6d:63:6d:fd:d9:fa:d6:b2:e0:36 user@host
Das „Randomart Image“ des Schlüssels sieht wie folgt aus:
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

[PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/){.external} ist ein beliebter SSH-Client für Windows. PuTTY bietet Ihnen die Möglichkeit, eine Remoteverbindung mit einem Linux-Server herzustellen. Die zugehörige Software [PuTTYgen](https://the.earth.li/~sgtatham/putty/latest/w64/puttygen.exe){.external} kann zum Erstellen von SSH-Schlüsseln verwendet werden.

Laden Sie zunächst die Software [PuTTYgen](https://the.earth.li/~sgtatham/putty/latest/w64/puttygen.exe){.external} herunter, mit der wir den Schlüssel generieren.

Führen Sie als nächstes die Software aus und wählen Sie RSA als Schlüsseltyp. Geben Sie danach 4096 als Anzahl der zu generierenden Bits ein und klicken Sie dann auf die Schaltfläche `Generieren`{.action}.

![Schlüssel generieren](images/puttygen-01.png){.thumbnail}

Als nächstes bewegen Sie die Maus zufällig in dem Bereich unterhalb des Fortschrittsbalkens (siehe unten).

![Schlüssel generieren](images/puttygen-02.gif){.thumbnail}

Sobald Sie die Maus bewegen, füllt sich der Fortschrittsbalken. Wenn er ganz voll ist, ist der Schlüssel fertiggestellt.

![Schlüssel generieren](images/puttygen-03.png){.thumbnail}

### Ihren SSH-Schlüssel in die OVH-Systemsteuerung importieren

Markieren und kopieren Sie zuerst den Text Ihres öffentlichen Schlüssels und melden Sie sich dann in der [OVH-Systemsteuerung](https://www.ovh.com/auth/?action=gotomanager){.external} an.

Klicken Sie nun auf das Menü `Public Cloud`{.action}.

![Cloud-Menü](images/cloud-menu.png){.thumbnail}

Wählen Sie nun Ihr Public Cloud-Projekt aus dem linken Menü {.action} aus.

![Projekt auswählen](images/select-project.png){.thumbnail}

Wählen Sie nun die Registerkarte `SSH-Schlüssel`{.action}. Fügen Sie anschließend den 4096-Byte-Schlüssel in das dafür vorgesehene Feld ein, geben Sie dem Schlüssel einen Namen und klicken Sie auf die Schaltfläche `Diesen Schlüssel hinzufügen`{.action}.

![SSH-Schlüssel speichern](images/save-key.png){.thumbnail}

Ihr Schlüssel wird nun zur Authentifizierung in der OVH-Systemsteuerung gespeichert.

## Fortfahren

Treten Sie am <https://community.ovh.com/en/> unserer Nutzergemeinschaft bei.