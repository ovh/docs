---
title: 'System für die Verwendung der OpenStack API vorbereiten'
excerpt: 'Erfahren Sie hier, wie Sie Ihre Arbeitsumgebung zur Verwaltung von Instanzen über die OpenStack API nutzen'
updated: 2024-01-22
---

## Ziel

Es ist möglich, Public Cloud Dienste mit Befehlen aus der Systemkonsole zu verwalten, wenn die OpenStack Tools heruntergeladen und installiert wurden.

Mithilfe der OpenStack API können Sie die Verwaltung automatisieren, indem Sie Skripte erstellen.

> [!primary]
>
> OpenStack benötigt Python >=3.8.
> Diese Anleitung beschreibt die Installation des Pakets `python-openstackclient`, das die Kommandozeile für die meisten OpenStack-Projekte bündelt.
> Das Octavia-Projekt (das den `Public Cloud Load Balancer` betreibt) ist nicht enthalten. Daher müssen Sie `pip3 install python-octaviaclient` zusätzlich zu den unten stehenden Installationsanweisungen ausführen.

**Diese Anleitung erklärt, wie Sie OpenStack Tools installieren.**

## Voraussetzungen

- Sie haben administrativen Zugriff auf die Umgebung, die Sie konfigurieren möchten.

## In der praktischen Anwendung

### Debian

Öffnen Sie das Terminal oder verbinden Sie sich via SSH mit der Umgebung, die Sie vorbereiten möchten.

Aktualisieren Sie den Paket-Cache:

```sh
apt update
```

Verwenden Sie die nachstehenden Befehle, um den OpenStack Client zu installieren:

```sh
$ apt install python3-pip python3-venv -y
$ python3 -m venv env
$ source env/bin/activate
(env)$ pip3 install --upgrade pip
(env)$ pip3 install python-openstackclient
```

Python3 Version:

```sh
apt-get install python3-openstackclient python3-novaclient python3-swiftclient -y
```

Wir empfehlen, nach diesem Schritt einen speziellen Benutzer ohne *root*-Berechtigungen zu erstellen.

Um die Hilfe zu den Tools zu öffnen, führen Sie folgenden Befehl aus:

```sh
openstack --help
```

> [!primary]
> 
> Die Dokumentation für die OpenStack API ist [auf dieser Seite](https://docs.openstack.org/python-openstackclient/latest/){.external} verfügbar.
> 

### CentOS

Öffnen Sie das Terminal oder verbinden Sie sich via SSH mit der Umgebung, die Sie vorbereiten möchten.

Aktualisieren Sie den Paket-Cache:

```sh
yum update -y
```

Verwenden Sie die nachstehenden Befehle, um den OpenStack Client zu installieren:

```sh
yum install python3-pip -y
$ python3 -m venv env
$ source env/bin/activate
(env)$ pip3 install --upgrade pip
(env)$ pip3 install python-openstackclient
```

Wir empfehlen, nach diesem Schritt einen speziellen Benutzer ohne *root*-Berechtigungen zu erstellen.

Um die Hilfe zu den Tools zu öffnen, führen Sie folgenden Befehl aus:

```sh
openstack --help
```

> [!primary]
> 
> Die Dokumentation für die OpenStack API ist [auf dieser Seite](https://docs.openstack.org/python-openstackclient/latest/){.external} verfügbar.
> 

### Windows

Laden Sie die Version 3.12.0 von Python herunter und installieren Sie diese. Sie können die Python-Programmiersprache automatisch hinzufügen, indem Sie die folgende Option in der Installationskonfiguration auswählen.

![Automatische Installation](1_preparation_openstack_environment_windows.png){.thumbnail}

Sie können die Installation auch selbst durchführen. Befolgen Sie hierzu die nachstehenden Aktionen:

#### Schritt 1: Umgebungsvariablen des Systems bearbeiten

Suchen Sie nach den Systemumgebungsvariablen und klicken Sie auf “Systemumgebungsvariablen bearbeiten”.

![Einstellungen der Umgebungsvariablen](2_preparation_openstack_environment_windows.png){.thumbnail}

#### Schritt 2: Systemeinstellungen bearbeiten

Gehen Sie in den Tab `Erweitert`{.action} und klicken Sie auf `Umgebungsvariablen`{.action}, um die Einstellungen zu ändern.

![Umgebungseinstellungen](3_preparation_openstack_environment_windows.png){.thumbnail}

#### Schritt 3: Umgebungsvariablen konfigurieren 

Im Bereich “Systemvariablen”, wählen Sie “Neu”, verwenden Sie den Namen “PYTHON_HOME” und fügen Sie den Pfad zu Python hinzu.

![Zugriffspfad hinzufügen](4_edit_system_variables.png){.thumbnail}

#### Schritt 4: Pfad der Variablen hinzufügen

Wenn Sie Python hinzugefügt haben, ändern Sie “Path” (Pfad) in den Systemvariablen und fügen Sie folgendes zum Ende des Pfads hinzu:

`...;%PYTHON_HOME%\;%PYTHON_HOME%\Script`

#### Schritt 5: Windows neu starten

Starten Sie Windows neu, damit die vorgenommen Änderungen angewandt werden.

#### Schritt 6: OpenStack Client installieren

Wenn Sie als Administrator eingeloggt sind, öffnen Sie das Programm in der Kommandozeile (CMD) und installieren Sie den OpenStack-Client mit folgendem Befehl:

```sh
pip install python-openstackclient
```

Wurde die Operation erfolgreich ausgeführt, wird eine Zusammenfassung geöffnet:

![Automatische Installation](5_preparation_openstack_environment_windows.png){.thumbnail}

Sie können die installierte Version im neu geöffneten CMD-Fenster (Kommandozeile) überprüfen, indem Sie “python-V” eingeben (egal, wo Sie sich im System befinden).

![Überprüfung](6_preparation_openstack_environment_windows.png){.thumbnail}

#### MacOS

Sie können [HomeBrew](https://brew.sh), einen Paket-Manager für MacOS verwenden.

Öffnen Sie das Terminal und geben Sie folgenden Befehl ein:

```bash
brew install openstackclient
```

Um auf die Tools zuzugreifen, führen Sie folgenden Befehl aus:

```sh
openstack --help
```

## Weiterführende Informationen

[OpenStack Umgebungsvariablen einrichten](loading_openstack_environment_variables1.)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
