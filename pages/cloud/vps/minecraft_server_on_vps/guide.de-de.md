---
title: 'Tutorial - Einen Minecraft-Server auf einem VPS oder Dedicated Server einrichten'
slug: minecraft-server-auf-vps
excerpt: 'Erfahren Sie hier, wie Sie Ihren eigenen Minecraft-Server installieren'
section: Tutorial
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 29.06.2021**

## Ziel

Minecraft ist ein populäres Sandbox-Spiel. Es muss auf einem Server gehostet werden, wenn Sie im Multiplayer-Modus spielen möchten.

Sie können einen vorkonfigurierten Minecraft-Server mieten oder einen solchen selbst auf einem [VPS](https://www.ovhcloud.com/de/vps/) oder einem dedizierten [Server](https://www.ovhcloud.com/de/bare-metal/) installieren. Dadurch werden die Kosten reduziert und Sie haben die volle Kontrolle über Ihre Spielinstanz.

**Diese Anleitung erklärt, wie Sie einen Minecraft-Server Java Edition auf einem OVHcloud VPS starten und die Verbindung testen.**

> [!warning]
>In diesem Tutorial zeigen wir Ihnen (unter anderem) die Verwendung einer oder mehrerer OVHcloud Lösungen mit externen Tools. Die durchgeführten Aktionen werden in einem bestimmten Kontext beschrieben. Denken Sie daran, diese an Ihre Situation anzupassen.
>
>Bei Schwierigkeiten kontaktieren Sie bitte einen spezialisierten Dienstleister und/oder stellen Ihre Fragen in der OVHcloud Community. Leider können wir Ihnen für externe Dienstleistungen keine weitergehende Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#gofurther).
>

## Voraussetzungen

- Sie haben einen [VPS](https://www.ovhcloud.com/de/vps/) in Ihrem OVHcloud Kunden-Account.
- Sie haben eine GNU/Linux Distribution auf dem Server installiert.
- Administrator-Zugang (root) über SSH auf Ihren Server.
- Sie verfügen über ein grundlegendes Verständnis der GNU/Linux-Administration.

## In der praktischen Anwendung

> [!primary]
> Diese Anleitung basiert auf der Minecraft Java Edition Version "1.17" und der OpenJDK Version "16.0.1".
>

### Schritt 1: Server vorbereiten

Konfigurieren Sie zunächst Ihren VPS für eine Minecraft-Installation.
<br>Es wird empfohlen, einen neuen VPS zu bestellen oder einen bestehenden Server über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) zu [re-installieren](../erste-schritte-mit-einem-vps/#reinstallvps) und dabei die neueste verfügbare Version von Ubuntu oder Debian zu verwenden.

Wenn das Betriebssystem installiert ist, verbinden Sie sich mit Ihrem VPS per SSH, wie in der Anleitung "[Erste Schritte mit einem VPS](../erste-schritte-mit-einem-vps/)" erklärt.

Aktualisieren Sie zunächst die Pakete auf die neuesten Versionen:

```sh
~$ sudo apt update
```

```sh
~$ sudo apt full-upgrade
```

Verwenden Sie folgenden Befehl, um sicherzustellen, dass alle notwendigen Pakete installiert sind:

```sh
~$ sudo apt install screen nano wget git
```

Installieren Sie das Java-Paket:

```sh
~$ sudo apt install openjdk-16-jdk
```

Um Sicherheitslücken in Ihrem System zu vermeiden, erstellen Sie einen Benutzer namens "minecraft", der die Server-Aktionen ausführen wird:

```sh
~$ sudo adduser minecraft —disabled-login —disabled-password
```

Bestätigen Sie einfach mit `Enter`{.action}, um das Ausfüllen der üblichen Kontoinformationen zu überspringen.

Der Benutzer wurde erstellt. Bitte beachten Sie, dass für diesen Benutzer kein Passwort festgelegt wurde. Das ist normal, da das Konto nur zugänglich ist, wenn Sie bereits mit Ihrem eigenen Benutzerkonto über SSH verbunden sind.

Wechseln Sie zum neuen Benutzer:

```sh
~$ sudo su - minecraft
```

> [!primary]
>
> Alle nachfolgenden Befehle sind vom Benutzer "minecraft" auszuführen.
>

Erstellen Sie einen Ordner mit dem Namen `server`.

```sh
~$ mkdir ~/server && cd ~/server
```

### Schritt 2: Ihren Minecraft-Server installieren

> [!primary]
>
> Ein "Vanilla"-Server ist eine Instanz ohne jegliche Add-ons oder Plugins. Sie werden das Spiel so erfahren, wie es von den Entwicklern veröffentlicht wurde.
>

Kopieren Sie zuerst den Download-Link für das Server-Programm.
<br>Klicken Sie dazu auf der offiziellen [Website von Minecraft](https://minecraft.net/download/server){.external} mit der rechten Maustaste auf den Download-Link und wählen Sie `Linkadresse kopieren`{.action}.

![Download des Servers](images/download_jar.png){.thumbnail}

Überprüfen Sie in Ihrem Kommandozeilenterminal, dass Sie noch im Verzeichnis `server` sind und verwenden Sie `wget`, um die Datei herunterzuladen.
<br>Ersetzen Sie `download_link` mit der URL, die Sie zuvor kopiert haben.

```sh
~/server$ wget download_link
```

Bevor Sie den Server starten, müssen Sie die EULA (*End User License Agreement*) akzeptieren. Geben Sie hierzu folgenden Befehl ein:

```sh
~/server$ echo "eula=true" > eula.txt
```

Anschließend befindet sich eine Datei namens `eula.txt` im Wurzelverzeichnis Ihres Servers, die die Zeile `eula=true` enthält. Dies zeigt der Software an, dass Sie die Nutzungsbedingungen für Minecraft akzeptieren.
<br>Die allgemeinen Nutzungsbedingungen finden Sie auf der offiziellen [Website von Minecraft](https://www.minecraft.net/){.external}.

Ihr Server kann nun gestartet werden.

In Schritt 1 wurde das Paket `screen` installiert, dem mehrere Terminalsitzungen (Shell) geöffnet werden können. Wir starten Minecraft nun in einer neuen Session, die im Hintergrund ausgeführt werden kann. Die Verwendung von `screen` kann sehr praktisch sein, weil Sie so mehrere Minecraft-Server gleichzeitig starten können.

Erzeugen Sie zunächst eine neue Shell namens "minecraft1":

```sh
~/$ screen -S minecraft1
```

Das aktive Fenster Ihres Terminals ändert sich und Sie wechseln automatisch auf die neue Shell-Session. Wenn nötig können Sie weitere Shell-Instanzen erstellen und diese über folgenden Befehl auflisten:

```sh
screen -ls
```

Um eine Shell zu verlassen (während diese weiter ausgeführt wird), drücken Sie auf `Ctrl`{.action}, dann auf `a`{.action} und dann auf `d`{.action} Ihrer Tastatur.

Um von einer Shell zur anderen zu wechseln verwenden Sie folgenden Befehl:

```sh
~/server$ screen -x name_der_shell
```

Sie können alternativ auch `Ctrl`{.action}, dann auf `a`{.action} und dann auf `n`{.action} Ihrer Tastatur drücken.

Starten Sie den Server in der zuvor erstellten Shell "minecraft1" mit folgendem Befehl. (Verwenden Sie `ls`, um den Namen der Datei zu überprüfen, falls dieser abweicht.)

```sh
~/server$ java -jar server.jar
```

Um Ihren Server anzuhalten, geben Sie den Befehl `stop` ein.

### Schritt 3: Mit dem Server verbinden

Ihre Server-Instanz ist nun funktionsfähig. Um zu spielen, beziehen Sie den Minecraft-Client von der [offiziellen Website](https://www.minecraft.net/){.external}.

Installieren und starten Sie den Client für Ihr Betriebssystem und registrieren Sie sich.

![Verbindung zum Server](images/login_minecraft.png){.thumbnail}

Geben Sie im folgenden Fenster den Servernamen im Feld `Server Name` ein und die IP-Adresse des Servers im Feld `Server Address`.

![Informationen zum Server](images/minecraft_server_login.png){.thumbnail}

Standardmäßig ist kein Port anzugeben.

### Zum Abschluss

Ihr Minecraft Vanilla Server ist nun auf Ihrem VPS installiert.

Bitte beachten Sie, dass diese Installationsanleitung auch für einen [OVHcloud Dedicated Server](https://www.ovhcloud.com/de/bare-metal/) oder eine [Public Cloud Instanz](https://www.ovhcloud.com/de/public-cloud/) gilt. Mit diesen Lösungen profitieren Sie auch von garantierten und stabilen physischen Ressourcen, da die Hardware dediziert ist.

## Weiterführende Informationen <a name="gofurther"></a>

Zu Add-ons, Mods und um die Konfiguration Ihres Minecraft-Servers zu individualisieren, finden Sie hier die offizielle Dokumentation: <https://help.mojang.com/>.

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.