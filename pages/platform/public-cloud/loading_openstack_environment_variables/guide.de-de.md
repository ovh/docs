---
title: 'OpenStack Umgebungsvariablen einrichten'
excerpt: 'Erfahren Sie hier, wie Sie Ihre Umgebungsvariablen für die Nutzung der OpenStack API einrichten'
slug: set-openstack-environment-variables
legacy_guide_number: 1852
section: 'OpenStack'
---

**Letzte Aktualisierung am 18.08.2021**

## Ziel

Das Konfigurieren der OpenStack Umgebungsvariablen auf Ihrem lokalen Gerät ermöglicht es, die OpenStack API zu nutzen und auf diese Weise Ihre Infrastruktur zu verwalten.

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie haben einen [OpenStack User erstellt](https://docs.ovh.com/de/public-cloud/openstack-user-erstellen-loeschen/).
- OpenStack ist bereits [auf Ihrem System installiert](https://docs.ovh.com/de/public-cloud/prepare_the_environment_for_using_the_openstack_api/).

## In der praktischen Anwendung

### Schritt Nr 1: Die Variablen abrufen

Um die Umgebungsvariablen zu erhalten, können Sie die *OpenRC*-Datei von Ihrem zuvor erstellten OpenStack User-Account herunterladen.

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wechseln Sie zum Bereich `Public Cloud`{.action}. Wählen Sie Ihr Public Cloud Projekt oben links aus.
<br>Öffnen Sie `Users & Roles`{.action} unter `Project Management` im linken Menü. klicken Sie auf `...`{.action} rechts von Ihrem Benutzer und wählen Sie dann `RC-Datei von OpenStack herunterladen`{.action}.

![openstack-variables](images/pciopenstackvariables1e.png){.thumbnail}

Eine *OpenRC*-Datei entspricht einem User und einer Zone. Sie können nicht mehrere Zonen in derselben Datei verwalten.

### Schritt Nr 2: Die Variablen konfigurieren

#### **Mit Linux**

Öffnen Sie ein Terminal oder verbinden Sie sich über den Benutzer, der die Aufrufe an die OpenStack API ausführen wird.

Laden Sie den Inhalt der Datei in die bestehende Umgebung. Sie werden dann nach dem Passwort des Benutzers gefragt:

```bash
admin@vpsxxxxxx:~$ source openrc.sh
Please enter your OpenStack Password:
```

Wie in [dieser Anleitung](https://docs.ovh.com/de/public-cloud/openstack-user-erstellen-loeschen/) erklärt, ist das Passwort ist nur eimalig während der Erstellung sichtbar.

Wenn Sie das Passwort nicht zur Verfügung haben, muss es neu erstellt werden.

Wenn die CLIs schon installiert sind, überprüfen Sie deren Funktion wie folgt:

```bash
admin@vpsxxxxxx:~$ nova list
+--------------------------------------+------+--------+------------+-------------+------------------------+
| ID | Name | Status | Task State | Power State | Networks |
+--------------------------------------+------+--------+------------+-------------+------------------------+
| 2278e269-a529-40cc-9a08-794fda9302d3 | deb8 | ACTIVE | -          | Running     | Ext-Net=xx.xxx.xx.xxx |
+--------------------------------------+------+--------+------------+-------------+------------------------+
```

Das Passwort des Horizon-Nutzers kann fest gespeichert werden. Dazu ersetzen Sie den folgenden Abschnitt:

```bash
echo "Please enter your OpenStack Password: "
read -sr OS_PASSWORD_INPUT
export OS_PASSWORD=$OS_PASSWORD_INPUT
```

Fügen Sie Folgendes ein:

```bash
#echo "Please enter your OpenStack Password: "
#read -sr OS_PASSWORD_INPUT
export OS_PASSWORD="Ihr Benutzerpasswort"
```

Diese Umgebung muss für jede neue Sitzung in der bestehenden Umgebung geladen werden. Sie können dies aber auch auf permanente Weise einrichten, indem die Quelle (*openrc.sh*) zur Datei *bashrc* hinzugefügt wird. Dazu muss das Passwort in die Datei geschrieben werden. 


#### **Mit Windows**

Die *OpenRC*-Datei ist nicht dazu vorgesehen, unter Windows geladen zu werden.

Für das Laden der Umgebungsvariablen gitb es zwei Lösungen:

- Die Datei kann mittels entsprechender Änderungen angepasst werden. Sie können **export** durch **set** ersetzen:

```bash
set OS_PASSWORD="Ihr Benutzerpasswort"
```

- Man kann die Variablen über den folgenden Menüpfad direkt aus den Systemeinstellungen heraus laden: Systemsteuerung > System > Fortgeschrittene Systemeinstellungen > Umgebungsvariablen.

![public-cloud](images/pciopenstackvariables2.png){.thumbnail}

## Weiterführende Informationen

[OpenStack Dokumentation](https://docs.openstack.org/train/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.