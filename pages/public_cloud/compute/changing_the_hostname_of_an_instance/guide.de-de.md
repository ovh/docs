---
title: 'Hostname einer Public Cloud Instanz ändern'
excerpt: 'Erfahren Sie hier, wie Sie den Hostnamen einer Public Cloud Instanz bearbeiten'
updated: 2025-03-20
---

## Ziel

Mit dem *cloud-init* Modul können Sie Ihre [Public Cloud Instanz](/links/public-cloud/public-cloud) direkt bei der Erstellung und bei jedem Neustart anpassen. Wenn Sie Ihren Hostnamen neu konfigurieren möchten, weil beim Einrichten der Instanz ein Fehler aufgetreten ist oder um den E-Mail-Server neu einzurichten, muss deshalb zunächst das *cloud-init* Modul deaktiviert werden. Denn das Modul ist für die Konfiguration des Hostnamens zuständig und die Deaktivierung verhindert, dass dieser zurückgesetzt wird.

**Diese Anleitung erklärt, wie Sie *cloud-init* neu konfigurieren, damit Sie den Hostnamen Ihrer Instanz ändern können.**

> [!warning]
> 
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für die Sie die alleinige Verantwortung tragen. Da wir keinen Zugriff auf diese Maschinen haben, können wir hierfür keinerlei Administrator-Aufgaben übernehmen oder sonstige Hilfeleistung anbieten. Es liegt daher in Ihrer Verantwortung, das Softwaremanagement und die tägliche Sicherheit zu gewährleisten.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Wir empfehlen Ihnen jedoch, sich an einen [spezialisierten Dienstleister](/links/partner) zu wenden, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Sicherheit eines Servers haben. Sie können sich auch jederzeit an unsere [Community](https://community.ovh.com/en/) wenden, um sich mit anderen Benutzern auszutauschen.
>
> Diese Anleitung betrifft **nur** Instanzen, die auf Linux-Distributionen basieren.
>

## Voraussetzungen

- Sie verfügen über eine [Public Cloud Instanz](/pages/public_cloud/compute/public-cloud-first-steps).
- Sie haben [administrativen Zugriff](/pages/public_cloud/compute/public-cloud-first-steps#connect-instance) (sudo) auf Ihre Instanz über SSH.

## In der praktischen Anwendung

### *cloud-init* Modul deaktivieren

> [!primary]
>
> Für diese Anleitung verwenden wir den Dateieditor **vi**, da er standardmäßig auf Linux-Distributionen vorhanden ist. Sie können natürlich auch einen Editor Ihrer Wahl verwenden.
>
> Grundlegende Verwendung von vi:
>
> - Drücken Sie **i**, um in den Editiermodus zu wechseln.
> - Drücken Sie **Esc**, um den Editiermodus zu verlassen.
> - Geben Sie **:wq** gefolgt von **Enter** ein, um zu speichern und zu beenden.
> - Geben Sie **:q!** gefolgt von **Enter** ein, um ohne zu speichern zu beenden.

Um das *cloud-init* Modul zu deaktivieren, muss zunächst die Konfigurationsdatei bearbeitet werden.

```sh
sudo vi /etc/cloud/cloud.cfg
```

Fügen Sie einfach die folgenden beiden Zeilen hinzu oder bearbeiten Sie die vorhandenen:

```sh
preserve_hostname: true
manage_etc_hosts: false
```

### Hostname ändern

Der erste Schritt besteht darin, den Hostnamen (*hostname*) zu ändern. In diesem Beispiel ändern wir den Hostnamen zu **webserver**. Sie können natürlich einen beliebigen Namen eingeben:

```sh
sudo vi /etc/hostname
```

Fügen Sie die Zeile hinzu oder ersetzen Sie sie:

```sh
webserver
```

Anschließend muss noch die Datei `/etc/hosts` geändert werden:

```sh
sudo vi /etc/hosts
```

Fügen Sie die Zeile hinzu oder ersetzen Sie sie:

```sh
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

Treten Sie unserer [User Community](/links/community) bei.
