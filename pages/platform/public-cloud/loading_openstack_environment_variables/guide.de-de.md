---
title: 'Laden der OpenStack-Umgebungsvariablen.'
excerpt: 'Lernen Sie, wie Sie Ihre Umgebungsvariablen für die Nutzung der API von OpenStack laden können'
slug: die-variablen-der-umgebung-openstack-laden
legacy_guide_number: 1852
section: 'Über APIs und Befehlszeile'
---

**letzter Stand 20.11.2019**

## Ziel

Das Laden der Umgebungsvariablen OpenStack auf Ihrem Arbeitsplatz ermöglicht Ihnen die API OpenStack zu nutzen und auf diese Weise Ihre Infrastruktur durch sie zu verwalten.


## Voraussetzungen
- Einen OpenStack-Benutzer erstellen Konsultieren Sie [den hierfür gedachten Leitfaden](https://docs.ovh.com/de/public-cloud/erstellung_eines_zugangs_zu_horizon/)
- Sie müssen zuvor die Umgebung für die Verwendung von OpenStack vorbereitet haben. Konsultieren Sie dazu den folgenden Leitfaden: [Umgebung für die Verwendung der OpenStack-API vorbereiten](https://docs.ovh.com/de/public-cloud/vorbereitung_der_umgebung_fur_die_verwendung_der_openstack_api/)

## Praktische Vorgehensweise:

### Schritt Nr 1: die Variablen wieder erhalten

Nachdem Sie Ihre Umgebungsvariablen zurück bekommen haben können Sie die Datei OpenRC von Ihrem vorher erstellten OpenStack-Nutzer herunterladen.

Gehen Sie dazu zur Rubrik `Nutzer & Rollen`{.action}, klicken Sie auf die`...`{.action} rechts von Ihrem Nutzer und wählen Sie dann `Die Datei RC von OpenStack herunterladen`{.action}.

![openstack-variables](images/pciopenstackvariables1.png){.thumbnail}

Eine OpenRC-Datei entspricht einem Nutzer und auch einer Zone. Sie können nicht mehrere Zonen in derselben Datei verwalten.

### Schritt Nr 2: Die Variablen laden

#### **Unter Linux**

* Öffnen Sie einen Terminal oder verbinden Sie sich mit dem Nutzer der die Aufrufe an die OpenStack API machen wird
* Laden Sie den Inhalt der Datei in die bestehende Umgebung. Sie werden jetzt nach dem Passwort des Nutzers Horizon gefragt.

```bash
admin@vpsxxxxxx:~$ source openrc.sh
Bitte geben Sie Ihr OpenStack-Passwort ein:
```

Wie in dem Leitfaden angegeben [Zur Benutzeroberfläche Horizon gehen](https://docs.ovh.com/de/public-cloud/erstellung_eines_zugangs_zu_horizon/), das Passwort ist nur ein einziges Mal, sichtbar und dies während seiner Erstellung, sichtbar.

Wenn Sie es vergessen haben müssen Sie es neu erstellen.

Wenn die CLI schon installiert sind überprüfen Sie deren reibungslose Funktion ganz einfach wie folgt:

```bash
admin@vpsxxxxxx:~$ nova list
+--------------------------------------+------+--------+------------+-------------+------------------------+
| ID | Name | Status | Task State | Power State | Networks |
+--------------------------------------+------+--------+------------+-------------+------------------------+
| 2278e269-a529-40cc-9a08-794fda9302d3 | deb8 | ACTIVE | -          | Running     | Ext-Net=xx.xxx.xx.xxx |
+--------------------------------------+------+--------+------------+-------------+------------------------+
```

Man kann das Passwort des Horizon-Nutzers fest gespeichert werden. Dazu ersetzen Sie:

```bash
echo „Bitte geben Sie Ihr OpenStack-Passwort ein:“
read -sr OS_PASSWORD_INPUT
export OS_PASSWORD=$OS_PASSWORD_INPUT
```

durch:

```bash
#echo "Please enter your OpenStack Password: "
#read -sr OS_PASSWORD_INPUT
export OS_PASSWORD="Passwort Horizon-Nutzer"
```

Standardmäßig muss diese Umgebung nach jeder Sitzungseröffnung in der bestehenden Umgebung geladen werden.  Eine dauerhafte Ladung kann durch Hinzufügung der Quelle openrc.sh zur Datei bashrc erstellt werden. Dies erfordert die Integrierung des Passwortes auf der Datei. 


#### **Unter Windows**

Die OpenRC Datei ist nicht dazu vorgesehen um unter Windows gestartet zu werden.

Sie haben also für das Laden der Umgebungsvariablen 2 Lösungen:

- Man muss die Datei durch die Änderung mancher Befehle anpassen. In der Tat kann **export** durch **set**  ersetzt werden :

```bash
export OS_PASSWORD="Passwort Horizon-Nutzer"
```

- Man kann die Variablen direkt aus den Systemeinstellungen heraus laden: Systemsteuerung > System > fortgeschrittene Systemeinstellungen > Umgebungsvariablen:


![public-cloud](images/pciopenstackvariables2.png){.thumbnail}

## Weiterführende Informationen

Um die Nutzung von OpenStack zu erlernen: [OpenStack Dokumentation](https://docs.openstack.org/train/){.external}

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>