---
title: 'Umgebung für die Verwendung der OpenStack-API vorbereiten'
slug: vorbereitung_der_umgebung_fur_die_verwendung_der_openstack_api
excerpt: 'Installieren Sie die OpenStack-Umgebung, um Ihre Instanzen über die API zu verwalten.'
section: 'Über Clients in der Befehlszeile'
legacy_guide_number: g1851
---

**Stand 16.07.2019**

## Einleitung

Es ist möglich, Public Cloud Dienste mit Befehlen aus der Systemkonsole zu verwalten, wenn die OpenStack-Tools heruntergeladen und installiert wurden.

Mithilfe der OpenStack-API können Sie die Verwaltung automatisieren, indem Sie Skripte erstellen. Mit dem OpenStack-Nova-Client können Sie Instanzen und Festplattenspeicher verwalten. Mit dem OpenStack-Glance-Client können Sie Images und Backups verwalten, während der Swift-Client für die Verwaltung von Objektspeicherplatz verwendet wird.

**In dieser Anleitung erfahren Sie, wie Sie diese OpenStack-Tools installieren.**

## Voraussetzungen

- Sie haben **root**-Zugriff auf die Umgebung, die Sie konfigurieren möchten.

## Beschreibung

### Unter Debian

Öffnen Sie das Terminal oder verbinden Sie sich via SSH mit der Umgebung, die Sie vorbereiten möchten.

Aktualisieren Sie den Paket-Cache mit dem Befehl `apt-get update`:

```sh
apt-get update
```

Verwenden Sie den nachstehenden Befehl, um die Nova- (Compute-Anwendung), Glance- (Image Service) und Swift-Clients zu installieren:

```sh
apt-get install python-openstackclient python-novaclient -y
```

Wir empfehlen Ihnen, nach diesem Schritt einen speziellen Benutzer zu erstellen, um nicht den root-Benutzer zu verwenden.

Um auf die Hilfe-Tools zuzugreifen, führen Sie folgenden Befehl aus:

```sh
openstack --help
nova help
```

> [!primary]
> 
> Die Dokumentation für die OpenStack-API ist [auf dieser Seite](https://docs.openstack.org/python-openstackclient/latest/){.external} verfügbar.
> 

### Unter CentOS

Öffnen Sie das Terminal oder verbinden Sie sich via SSH mit der Umgebung, die Sie vorbereiten möchten.

Aktualisieren Sie den Paket-Cache mit folgendem Befehl:

```sh
yum update -y
```
Installieren Sie das rpm-Paket rdo-release mit folgendem Befehl:

```sh
yum install -y https://rdoproject.org/repos/rdo-release.rpm
```

Installieren Sie dann den OpenStack-Client:

```sh
yum install -y python-openstackclient
```

Installieren Sie anschließend den Nova-Client:

```sh
yum install -y python-novaclient
```

Wir empfehlen Ihnen, nach diesem Schritt einen speziellen Benutzer zu erstellen, um nicht den root-Benutzer zu verwenden.

Um auf die Hilfe-Tools zuzugreifen, führen Sie folgenden Befehl aus:

```sh
openstack --help
nova help
```

> [!primary]
> 
> Die Dokumentation für die OpenStack-API ist [auf dieser Seite](https://docs.openstack.org/python-openstackclient/latest/){.external} verfügbar.
> 

### Unter Windows

Laden Sie die Version 2.7.14 von Python herunter und installieren Sie diese. Sie können die Python-Programmiersprache automatisch zu Path hinzufügen, indem Sie diese Option in der Installationskonfiguration auswählen:

![Automatische Installation](images/1_preparation_openstack_environment_windows.png){.thumbnail}

Sie können die Installation auch selbst durchführen. Befolgen Sie hierzu die nachstehenden Aktionen:

#### Schritt 1: Umgebungsvariablen des Systems bearbeiten

Suchen Sie nach den Systemumgebungsvariablen und klicken Sie auf „Systemumgebungsvariablen bearbeiten“:

![Einstellungen der Umgebungsvariablen](images/2_preparation_openstack_environment_windows.png){.thumbnail}

#### Schritt 2: Systemeinstellungen bearbeiten

Gehen Sie in den Tab `Erweitert`{.action} und klicken Sie auf `Umgebungsvariablen`{.action}, um die Einstellungen zu ändern.

![Umgebungseinstellungen](images/3_preparation_openstack_environment_windows.png){.thumbnail}

#### Schritt 3: Umgebungsvariablen konfigurieren 

Im Bereich „Systemvariablen“, wählen Sie „Neu“, verwenden Sie den Namen „PYTHON_HOME“ und fügen Sie den Pfad bis Python hinzu. Dieser ist standardmäßig: „C:\\Python27“.

![Zugriffspfad hinzufügen](images/4_edit_system_variables.png){.thumbnail}

#### Schritt 4: Pfad der Variablen hinzufügen

Wenn Sie Python hinzugefügt haben, ändern Sie „Path“ (Pfad) in den Systemvariablen und fügen Sie folgendes zum Ende des Pfads hinzu:

`...;%PYTHON_HOME%\;%PYTHON_HOME%\Script`

#### Schritt 5: Windows neu starten

Starten Sie Windows neu, damit die vorgenommen Änderungen angewandt werden.

#### Schritt 6: OpenStack-Client installieren

Wenn Sie als Administrator eingeloggt sind, öffnen Sie das Programm in der Kommandozeile (CMD) und installieren Sie den OpenStack-Client mit folgendem Befehl:

```sh
# pip install python-openstackclient
```

Wurde die Operation erfolgreich ausgeführt, wird eine Zusammenfassung geöffnet:

![Automatische Installation](images/5_preparation_openstack_environment_windows.png){.thumbnail}

Sie können die installierte Version im neu geöffneten CMD-Fenster (Kommandozeile) überprüfen, indem Sie „python-V“ eingeben (egal, wo Sie sich im System befinden).

![Überprüfung](images/6_preparation_openstack_environment_windows.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.