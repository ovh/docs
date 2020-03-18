---
title: 'Auf einer Public Cloud Instanz einloggen'
slug: erster-login
legacy_guide_number: 1787
excerpt: 'Erfahren Sie hier, wie Sie sich unter Windows und Linux mit Ihren Public Cloud Instanzen verbinden'
section: 'Erste Schritte'
---

**Letzte Aktualisierung am 03.12.2019**

## Ziel

Das Einloggen in Ihre OVHcloud Public Cloud Instanzen erfolgt ähnlich einem Login für VPS oder dedizierte Server, jedoch hat jede Instanz ein eigenes Benutzerkonto.

**Diese Anleitung erklärt, wie Sie sich unter Windows und Linux in einer OVHcloud Public Cloud Instanz einloggen können.**

## Voraussetzungen

- Sie verfügen über eine [Public Cloud Instanz](https://www.ovhcloud.com/de/public-cloud).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager).


## In der praktischen Anwendung

### Einloggen in eine Linux-Instanz mit Linux-/Mac-Betriebssystem

Nutzen Sie zum Einloggen in Ihre OVHcloud Public Cloud Instanz den nachfolgenden Befehl, wobei Sie „user“ individuell anpassen und anstelle „instance_IP“ die IP-Adresse Ihrer Instanz nutzen: 

```sh
ssh user@instance_IP
```

Der Public Cloud Nutzer unterscheidet sich in Abhängigkeit des von Ihnen genutzten Betriebssystems. Die nachfolgende Tabelle bietet eine (unvollständige) Auflistung von Anwenderbezeichnungen nach Betriebssystem.

|Betriebssystem|User|
|---|---|
|Arch Linux|arch|
|CentOS 6|CentOS 7|
|CentOS 7|CentOS 7|
|CoreOS|core|
|Debian 7|Debian 7|
|Debian 8|Debian 7|
|Debian 9|Debian 7|
|Fedora 25|Fedora 27|
|Fedora 26|Fedora 27|
|FreeBSD 11.0 ZFS|freeBSD|
|Ubuntu 14.04|ubuntu|
|Ubuntu 16.04|ubuntu|
|Ubuntu 16.10|ubuntu|
|Ubuntu 17.04|ubuntu|

> [!primary]
>
> Sie werden mit Standard-Nutzerberechtigungen eingeloggt. Wenn Sie zum Root-Benutzer wechseln möchten, können Sie den _sudo -i_ oder den _sudo su_ Befehl verwenden.
>


**Warnungsmeldung bezüglich des SSH Remote Server Fingerprint:**

Beim ersten Einloggen müssen Sie die Authentizität des Nutzers mit `yes` bestätigen.

```sh
The authenticity of host 217.xxx.xxx.98 (217.xxx.xx.98) can't be established.
ECDSA key fingerprint is f4:95:09:ce:b6:63:73:ea:54:db:76:5e:64:f1:5e:6d.
Are you sure you want to continue connecting (yes/no)?
```


### Einloggen in eine Linux-Instanz mit Windows-Betriebssystem

Um sich unter Windows mit einer Linux-Instanz zu verbinden, können Sie eine Anwendung wie z.B. [PuTTY](https://www.putty.org) verwenden oder, unter den letzten Windows 10 Versionen, auch [die systemeigenen Funktionen nutzen](https://docs.microsoft.com/en-us/windows/wsl/about). Sie können dabei den Instruktionen folgen wie oben beschrieben.


### Einloggen in eine Windows-Instanz

#### Schritt 1: Abschließen der Installation

Wenn Sie Ihre Instanz erstellt haben, muss noch _sysprep_ ausgeführt werden. Hierzu loggen Sie sich ins [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager) ein und starten die `VNC-Konsole`{.action} von der Startseite der ausgewählten Instanz.

![VNC Instrumententafel](images/vnc_console.png)

Wählen Sie im ersten Schritt Ihr Land, die Sprache und die Tastaturbelegung aus und klicken Sie auf `Weiter`{.action}:

![Wählen Sie die Sprache in sysprep](images/sysprep_first_step.png)

Danach müssen Sie das Administrator-Passwort festlegen:

![Wählen Sie die Passwort-Option in  sysprep](images/sysprep_password.png)

Schließlich bestätigen Sie die Änderungen, indem Sie auf `Fertig stellen`{.action} klicken. Die Instanz startet neu und Sie können sich auf Ihrem Windows-Server einloggen. 


#### Schritt 2: Einloggen uner Windows

Sie können direkt von Ihrem Windows PC aus auf die Windows-Instanz zugreifen, indem Sie die `Remote Desktop` Funktion nutzen:

![Wählen Sie die Passwort-Option in  sysprep](images/remote_desktop.png)

In den nächsten Schritten geben Sie die IP-Adresse Ihrer Instanz ein, gefolgt von der Eingabe des Benutzernamens („administrator“) und des von Ihnen definierten Passworts: 

![Remote desktop - Login](images/remote_desktop_connection_IP.png)

![Remote desktop - User login](images/remote_desktop_connection_user.png)

Danach erscheint eine Meldung, mit der Sie aufgefordert werden Ihre Login-Daten zu bestätigen. Klicken Sie auf `Ja`{.action}:

![Login Bestätigung](images/connection_validation.png)

Sie werden dann in Ihre Instanz eingeloggt.

> [!primary]
>
> Wenn Probleme beim Einloggen in Ihre Windows-Instanz auftreten, überprüfen Sie, ob Ihre Windows Firewall RDP-Verbindungen erlaubt. Bitte beachten Sie unsere Anleitung zur [Windows Server-Konfiguration](https://docs.ovh.com/gb/en/vps/windows-first-config), falls Sie weitere Informationen dazu benötigen.
> 


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf [https://community.ovh.com/en](https://community.ovh.com/en).
