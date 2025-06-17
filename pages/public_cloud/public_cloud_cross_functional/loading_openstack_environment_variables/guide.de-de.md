---
title: 'OpenStack Umgebungsvariablen einrichten'
excerpt: 'Erfahren Sie hier, wie Sie Ihre Umgebungsvariablen für die Nutzung der OpenStack API einrichten'
updated: 2024-07-15
---

## Ziel

Das Konfigurieren der OpenStack Umgebungsvariablen auf Ihrem lokalen Gerät ermöglicht es, die OpenStack API zu nutzen und auf diese Weise Ihre Infrastruktur zu verwalten.

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).
- Sie haben einen [OpenStack User erstellt](/pages/public_cloud/public_cloud_cross_functional/create_and_delete_a_user).
- OpenStack ist bereits [auf Ihrem System installiert](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api).

## In der praktischen Anwendung

### Schritt Nr 1: Die Variablen abrufen

Um die Umgebungsvariablen zu erhalten, können Sie die *OpenRC*-Datei von Ihrem zuvor erstellten OpenStack User-Account herunterladen.

Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein, gehen Sie in den Bereich `Public Cloud`{.action} und wählen Sie das betreffende Public Cloud Projekt aus.
<br>Öffnen Sie `User und Rollen`{.action} unter **Einstellungen** im linken Menü. klicken Sie auf `...`{.action} rechts von Ihrem Benutzer und wählen Sie dann `RC-Datei von OpenStack herunterladen`{.action}.

![openstack-variables](images/download_rc_file.png){.thumbnail}

Eine *OpenRC*-Datei entspricht einem User und einer Zone. Sie können nicht mehrere Zonen in derselben Datei verwalten.

### Schritt Nr 2: Die Variablen konfigurieren

#### **Mit Linux**

Öffnen Sie ein Terminal oder verbinden Sie sich über den Benutzer, der die Aufrufe an die OpenStack API ausführen wird.

Laden Sie den Inhalt der Datei in die bestehende Umgebung. Sie werden dann nach dem Passwort des Benutzers gefragt:

```bash
admin@remote_host:~$ source openrc.sh
Please enter your OpenStack Password:
```

Wie in [dieser Anleitung](/pages/public_cloud/public_cloud_cross_functional/create_and_delete_a_user) erklärt, ist das Passwort ist nur eimalig während der Erstellung sichtbar.

Wenn Sie das Passwort nicht zur Verfügung haben, muss es neu erstellt werden.

Wenn die CLIs schon installiert sind, überprüfen Sie deren Funktion wie folgt:

```bash
(env)$ openstack server list
+--------------------------------------+------------+--------+-----------------------------------------------+-----------+--------+
| ID                                   | Name       | Status | Networks                                      | Image     | Flavor |
+--------------------------------------+------------+--------+-----------------------------------------------+-----------+--------+
| 8d7c67c0-38e1-4091-88d5-c14844c1f455 | b2-7-gra11 | ACTIVE | Ext-Net=2001:xxxx:xxx:xxx::xxxx, xx.xxx.xx.xx | Debian 12 | b2-7   |
+--------------------------------------+------------+--------+-----------------------------------------------+-----------+--------+
```

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

[OpenStack Dokumentation](https://docs.openstack.org/)

Treten Sie unserer [User Community](/links/community) bei.