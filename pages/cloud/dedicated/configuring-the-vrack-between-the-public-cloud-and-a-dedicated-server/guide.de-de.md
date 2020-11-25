---
title: 'vRack zwischen Public Cloud und Dedicated Server einrichten'
slug: vrack-zwischen-public-cloud-dedicated-server-einrichten
excerpt: 'Hier erfahren Sie, wie Sie ein privates Netzwerk zwischen einer Public Cloud Instanz und einem dedizierten Server einrichten.'
section: vRack
---

**Stand 02.04.2019**

## Einleitung

Das [vRack](https://www.ovh.de/loesungen/vrack/){.external} ist ein privates Netzwerk, mit dem Sie das Routing zwischen zwei oder mehr OVH [Dedicated Servern](https://www.ovh.de/dedicated_server/){.external} einrichten können. Darüber hinaus können Sie auch [Public Cloud Instanzen](https://www.ovh.de/public-cloud/instances/){.external} zu Ihrem privaten Netzwerk hinzufügen, um eine Infrastruktur aus physischen und virtuellen Ressourcen zu erstellen.

**In dieser Anleitung erfahren Sie, wie Sie ein privates Netzwerk zwischen einer Public Cloud Instanz und einem dedizierten Server einrichten.**


## Voraussetzungen

- Sie haben einen [vRack](https://www.ovh.de/loesungen/vrack){.external} Dienst aktiviert.
- Sie verfügen über einen mit vRack kompatiblen [Dedicated Server](https://www.ovh.de/dedicated_server/){.external}.
- Sie sind in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} eingeloggt.
- Sie haben Zugriff auf den von Ihnen gewählten IP-Adressbereich.


## Beschreibung

### Public Cloud Projekt erstellen

Wenn Sie in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} eingeloggt sind, gehen Sie in den Bereich `Cloud`{.action} und anschließend auf den Button `Bestellen`{.action}.

![Ein Projekt erstellen](images/pci-project-01.png){.thumbnail}

Klicken Sie nun im Menü unter `Bestellen` auf `Cloud Projekt`{.action}.

![Ein Projekt erstellen](images/pci-project-02.png){.thumbnail}

Geben Sie einen Namen für Ihr Projekt ein, wählen Sie das Zahlungsmittel aus und klicken Sie anschließend auf den Button `Projekt anlegen`{.action}.

![Ein Projekt erstellen](images/pci-project-03.png){.thumbnail}

Nachdem das Projekt eingerichtet ist, aktivieren Sie die privaten Netzwerke. Klicken Sie hierzu auf der Seite des Projekts auf `Private Netzwerke aktivieren`{.action}.

![vRack aktivieren](images/pci-vrack-01.png){.thumbnail}

Wählen Sie anschließend in der Drop-down-Liste unter `Vorhandenes vRack auswählen`{.action} Ihr vRack aus.

![vRack aktivieren](images/pci-vrack-02.png){.thumbnail}


### Public Cloud Instanz erstellen

Klicken Sie auf der Seite Ihres Projekts auf den Button `Aktionen`{.action}.

![Eine Instanz erstellen](images/pci-01.png){.thumbnail}

Klicken Sie in der Drop-down-Liste auf die Option `Server hinzufügen`{.action}.

![Eine Instanz erstellen](images/pci-02.png){.thumbnail}

Klicken Sie dann auf den Button `Fortgeschrittene Optionen`{.action}.

![Eine Instanz erstellen](images/pci-03.png){.thumbnail}

Klicken Sie anschließend auf die Drop-down-Liste unter „**Zuweisung zum privaten Netzwerk:**“ und wählen Sie Ihr vRack aus. Klicken Sie nun auf `Weiter`{.action}, um zum vorherigen Fenster zurückzukehren.

![Eine Instanz erstellen](images/pci-04.png){.thumbnail}

Um den Vorgang abzuschließen, wählen Sie Ihre Installationsoptionen aus und klicken Sie auf den Button `Jetzt starten`{.action}.

![Eine Instanz erstellen](images/pci-05.png){.thumbnail}


### Netzwerkinterfaces konfigurieren

Um die Netzwerkinterfaces zwischen der neu erstellten Public Instanz und Ihrem dedizierten Server einzurichten, befolgen Sie unsere Anleitung „[Mehrere dedizierte Server im vRack konfigurieren](../mehrere-dedizierte-server-im-vrack-konfigurieren/)“


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.