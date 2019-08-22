---
title: 'Hostname einer Public Cloud Instanz ändern'
slug: hostname-einer-instanz-aendern
excerpt: 'So ändern Sie den Hostnamen einer Public Cloud Instanz'
legacy_guide_number: 1928
section: Tutorials
---

**Stand 21.09.2018**

## Einleitung

Mit dem Cloud-init-Modul können Sie Ihre [Public Cloud Instanz](https://www.ovh.com/de/public-cloud/instances/){.external} direkt bei der Erstellung und bei jedem Neustart anpassen. Wenn Sie Ihren Hostnamen neu konfigurieren möchten, weil beim Einrichten der Instanz ein Fehler aufgetreten ist oder um den E-Mail-Server neu einzurichten, muss deshalb zunächst das Cloud-init-Modul deaktiviert werden. Denn das Modul ist für die Konfiguration des Hostnamens zuständig und die Deaktivierung verhindert, dass dieser zurückgesetzt wird.

**In dieser Anleitung erfahren Sie, wie Sie Cloud-init neu konfigurieren, damit Sie den Hostnamen Ihrer Instanz ändern können.**

> [!warning]
>
> OVH stellt Ihnen Dienstleistungen zur Verfügung, für die Sie die alleinige Verantwortung tragen. Da wir keinen Zugriff auf diese Maschinen haben, können wir hierfür keinerlei Administrator-Aufgaben übernehmen oder sonstige Hilfeleistung anbieten. Es liegt daher in Ihrer Verantwortung, das Softwaremanagement und die tägliche Sicherheit Ihrer Anlage zu gewährleisten.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Wir empfehlen Ihnen jedoch, sich an einen spezialisierten Dienstleister zu wenden, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Sicherheit eines Servers haben. Genauere Informationen finden Sie im Teil „Weiterführende Informationen" dieser Anleitung.
>


## Voraussetzungen

- Sie haben eine[ Public Cloud Instanz](https://www.ovh.de/public-cloud/instances/){.external} erstellt.
- Sie sind auf der Instanz [via SSH eingeloggt](https://docs.ovh.com/de/public-cloud/erster-login/){.external} (Root-Zugriff).


## Beschreibung

### Cloud-init-Modul deaktivieren

Um das Cloud-init-Modul zu deaktivieren, muss zunächst die Konfigurationsdatei bearbeitet werden.

```sh
sudo vim /etc/cloud/cloud.cfg
```

Fügen Sie einfach die folgenden beiden Zeilen hinzu oder bearbeiten Sie diese:

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