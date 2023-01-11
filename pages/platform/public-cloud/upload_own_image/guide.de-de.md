---
title: 'Ein eigenes Image importieren'
slug: eigenes-image-importieren
excerpt: Erfahren Sie hier, wie Sie Ihr eigenes Image in der Public Cloud verwenden
section: 'OpenStack'
order: 10
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 27.10.2020**

## Ziel

OVHcloud bietet Public Cloud Nutzern gebrauchsfertige Images, aber auch die Möglichkeit, ihre eigenen Images zu verwenden.

**Diese Anleitung gibt Ihnen Hinweise zum Import Ihre eigenen Images in Ihr Public Cloud Projekt.**

## Voraussetzungen

- eine [Public Cloud](../erstellung_einer_instanz_im_ovh_kundencenter/) Instanz in Ihrem OVHcloud Kundencenter
- Ihr eigenes RAW/QCOW2 Image (empfohlene Formate) 
- einem OpenStack-[Benutzer](../openstack-user-erstellen-loeschen/) 
- einer OpenStack [CLI ready Umgebung](../prepare_the_environment_for_using_the_openstack_api/) (wenn Sie CLI verwenden)

## In der praktischen Anwendung

### Vorbereitung

Es wird empfohlen, *cloud-ready* Images der Anbieter zu verwenden oder Ihr eigenes Image mit Lösungen wie [OpenStack Builder zu erstellen](https://docs.ovh.com/gb/en/public-cloud/packer-openstack-builder/).

Kompatible cloud-ready Images sind hier verfügbar:

- <https://cloud.centos.org/centos/>{.external}
- <https://cloud.debian.org/images/cloud/>{.external}
- <https://cloud-images.ubuntu.com/releases/>{.external}
- <https://alt.fedoraproject.org/cloud/>{.external}

Andere Betriebssysteme bieten wahrscheinlich auch ISO-Images, die bei der Erstellung von [Images mit Packer](https://www.packer.io/docs/builders){.external} wie QEMU und VirtualBox angewendet werden können.

Stellen Sie sicher, dass folgende Elemente auf Ihren Images installiert sind, um sie als *cloud-ready* vorzubereiten:

- *QEMU Guest Agent*\: Diese Operation ermöglicht es dem Host, mit der Instanz für Live-Snapshots direkt zu kommunizieren. Nicht alle Betriebssysteme sind mit diesem Paket kompatibel.
- *cloud-init*\: So können Sie Ihre Instanz beim ersten Start booten, indem Sie SSH-Schlüssel hinzufügen und das Netzwerk konfigurieren. Die meisten Betriebssysteme sind mit dieser Funktion kompatibel.

Wir empfehlen die Verwendung von Bildern im RAW- oder QCOW2-Format. Halten Sie die Größe des Images so klein wie möglich, um die monatlichen Abrechnungskosten zu minimieren und die Zeit bis zur Erstellung Ihrer Instanzen zu verkürzen.

### Image importieren

Bei OpenStack gibt es zwei Methoden, um Ihr eigenes Image zu importieren. Dies können Sie über das OpenStack-Kommandozeileninterface oder das [Horizon-Interface tun](https://horizon.cloud.ovh.net/auth/login/).

#### OpenStack Kommandozeile

Wenn Ihr Image fertig ist, folgen Sie diesen Schritten, um den Import mit der OpenStack CLI zu starten:

1\. Laden Sie Ihre Datei "openrc.sh" für Ihren OpenStack-Benutzer aus Ihrem OVHcloud Kundencenter herunter (wählen Sie die Region aus, in der Sie den Upload durchführen möchten).

![openrc](images/openrc_file.png){.thumbnail}

2\. Laden Sie die openrc Datei:

```sh
source openrc.sh
```

3\. Sobald die Datei geladen ist, werden Sie aufgefordert, das Passwort des OpenStack-Benutzers einzugeben.

4\. Sie können jetzt Ihr Image importieren. Das folgende Beispiel führt folgende Operationen durch:

- Das Festplattenformat ist "RAW"
- Download eines Images vom aktuellen Pfad namens "debian9.raw"
- Benennen des Image "debian 9 - my image"
- Definiert das Image als privat
- Definiert die empfohlenen Eigenschaften. Eine optimale Konfiguration ermöglicht die Nutzung von Funktionen wie *live-snapshot* und *cloud-init* (benötigt die Verwendung des Benutzernamens)

```sh
openstack image create —disk-format raw —container-format bare —file debian9.raw "debian 9 - my image" —private —property distribution=debian —property hw_disk_bus=scsi —property hw_scsi_model=virtio-scsi —property hw_qemu_guest_agent es —property image_original_user=debian
```

#### Über das Horizon-Interface

Sobald Ihr Image importbereit ist, folgen Sie den diesen Schritten, um es über das OpenStack Horizon Webinterface zu importieren:

1\. Verbinden Sie sich [mit dem Horizon-Interface](https://horizon.cloud.ovh.net/auth/login/).

2\. Wählen Sie oben links die Region aus, in die Sie Ihr Image hochladen möchten.

![horizon_1](images/horizon_1.png){.thumbnail}

3\. Gehen Sie zum Bereich `Images` und klicken Sie dann auf `Create Image`{.action}.

![horizon_2](images/horizon_2.png){.thumbnail}

4\. Geben Sie die Details Ihres Images ein und wählen Sie die Datei von Ihren Computer aus.

![horizon_3](images/horizon_3.png){.thumbnail}

5\. Geben Sie die Metadaten der Instanz ein (Sie können auch die personalisierten Metadaten Ihrer Wahl angeben) und klicken Sie dann auf `Create Image`{.action}.

![horizon_4](images/horizon_4.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
