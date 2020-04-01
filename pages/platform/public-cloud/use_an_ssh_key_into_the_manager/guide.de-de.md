---
title: 'Verwendung von SSH-Schlüsseln im Public Cloud Interface'
slug: verwendung-ssh-key-public-cloud-interface
excerpt: 'Erfahren Sie hier, wie Sie SSH-Schlüssel zum einfachen Zugriff auf Public Cloud Instanzen einsetzen'
section: Sicherheit
order: 2
---

**Letzte Aktualisierung am 14.12.2019**

## Ziel

SSH ist ein Protokoll, das den authentifizierten und verschlüsselten Zugriff auf einen Server und die Kommunikation mit diesem Server ermöglicht.

**Diese Anleitung erklärt die Vorgehensweisen, um SSH-Schlüssel für Public Cloud Instanzen zu nutzen.**

### Voraussetzungen

- Sie haben bereits ein [Public Cloud Projekt](https://www.ovhcloud.com/de/public-cloud) erstellt.
- Sie verfügen über einen [SSH-Schlüssel](https://docs.ovh.com/de/public-cloud/create-ssh-keys/).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager).

## In der praktischen Anwendung

Es gibt zwei Möglichkeiten, einen SSH-Schlüssel über das Public Cloud Interface hinzuzufügen:

- Die erste und direktere Methode erfolgt zum Zeitpunkt der Erstellung einer Instanz.
- Die zweite Methode besteht darin, einen Schlüssel aus dem SSH-Schlüsselmanager hinzuzufügen.

## Bei Erstellung einer Instanz

Klicken Sie im Public Cloud Interface des OVHcloud Kundencenters im Menü `Instances`{.action} unter dem Abschnitt „Compute“ auf `Instanz erstellen`{.action}.

![Einen Server hinzufügen](images/compute.png){.thumbnail}

Während der Erstellung der Instanz im Schritt 3 werden Sie nach Ihrem SSH-Schlüssel gefragt.

![Einen Server hinzufügen](images/selectkey.png){.thumbnail}

Wenn Sie bereits Schlüssel haben, markieren Sie einfach den Schlüssel Ihrer Wahl.

Wenn Sie einen Schlüssel hinzufügen möchten, klicken Sie auf `Schlüssel hinzufügen`{.action}. Vergeben Sie einen Namen für Ihren Schlüssel und fügen Sie den Schlüssel in das Schlüssel-Feld ein. Klicken Sie zum Abschluss auf `Hinzufügen`{.action}.

![Einen Schlüssel hinzufügen](images/addkey.png){.thumbnail}

## Aus dem Schlüsselverwaltungstool

Wenn Sie `SSH Keys`{.action}. aus dem linken Menü Ihres Projekts auswählen, wird der Tab „SSH Schlüssel“ angezeigt.

![Einen Schlüssel hinzufügen](images/addkeymenu.png){.thumbnail}

Klicken Sie auf `SSH-Schlüssel hinzufügen`{.action} und danach auf `Hinzufügen`{.action}, nachdem Sie den Schlüssel benannt und in das dafür vorgesehene Feld eingefügt haben.

![Einen Schlüssel hinzufügen](images/addkeymenu1.png){.thumbnail}

Der neue Schlüssel steht bei der [Erstellung Ihrer nächsten Public Cloud Instanz](https://docs.ovh.com/de/public-cloud/erstellung_einer_instanz_im_ovh_kundencenter) zur Verfügung.


## Weiterführende Informationen


Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
