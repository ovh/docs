---
title: 'Hostname einer Public Cloud Instanz ändern'
slug: hostname-einer-instanz-aendern
excerpt: 'So ändern Sie den Hostnamen einer Public Cloud Instanz'
legacy_guide_number: 1928
section: 'Tutorials'
---

**Letzte Aktualisierung am 15.10.2020**

## Ziel

Mit dem *cloud-init* Modul können Sie Ihre [Public Cloud Instanz](https://www.ovhcloud.com/de/public-cloud) direkt bei der Erstellung und bei jedem Neustart anpassen. Wenn Sie Ihren Hostnamen neu konfigurieren möchten, weil beim Einrichten der Instanz ein Fehler aufgetreten ist oder um den E-Mail-Server neu einzurichten, muss deshalb zunächst das *cloud-init* Modul deaktiviert werden. Denn das Modul ist für die Konfiguration des Hostnamens zuständig und die Deaktivierung verhindert, dass dieser zurückgesetzt wird.

**Diese Anleitung erklärt, wie Sie *cloud-init* neu konfigurieren, damit Sie den Hostnamen Ihrer Instanz ändern können.**

> [!warning]
> 
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für die Sie die alleinige Verantwortung tragen. Da wir keinen Zugriff auf diese Maschinen haben, können wir hierfür keinerlei Administrator-Aufgaben übernehmen oder sonstige Hilfeleistung anbieten. Es liegt daher in Ihrer Verantwortung, das Softwaremanagement und die tägliche Sicherheit zu gewährleisten.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Wir empfehlen Ihnen jedoch, sich an einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu wenden, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Sicherheit eines Servers haben. Sie können sich auch jederzeit an unsere [Community](https://community.ovh.com/en/) wenden, um sich mit anderen Benutzern auszutauschen.
>


## Voraussetzungen

- Sie verfügen über eine [Public Cloud Instanz](https://www.ovhcloud.com/de/public-cloud).
- Sie haben [administrativen Zugriff](../root-rechte_erlangen_und_passwort_festlegen/) auf Ihre Instanz über SSH.


## In der praktischen Anwendung

### *cloud-init* Modul deaktivieren

Um das *cloud-init* Modul zu deaktivieren, muss zunächst die Konfigurationsdatei bearbeitet werden.

```sh
sudo vim /etc/cloud/cloud.cfg
```

Fügen Sie einfach die folgenden beiden Zeilen hinzu oder bearbeiten Sie die vorhandenen:

```sh
preserve_hostname: true
manage_etc_hosts: false
```

### Hostname ändern

Bearbeiten Sie zunächst den Hostnamen:

```sh
sudo vim /etc/hostname
webserver
```

Bearbeiten Sie dann die Datei `/etc/hosts`:

```sh
sudo vim /etc/hosts

127.0.1.1 webserver.localdomain webserver
127.0.0.1 localhost
```

Starten Sie anschließend die Instanz neu:

```bash
sudo reboot
```

Nach dem Neustart wurde die Änderung des Hostnamens korrekt registriert:

```sh
sudo cat /etc/hosts

127.0.1.1 webserver.localdomain webserver
127.0.0.1 localhost
```

## Weiterführende Informationen 

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
