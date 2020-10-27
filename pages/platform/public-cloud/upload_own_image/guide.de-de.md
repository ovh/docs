---
title 'importieren Sie Ihr eigenes Image'
slug: -ihr-eigenes-image importieren
excerpt: So importieren Sie Ihr eigenes Image in die Public Cloud
section: 'OpenStack'
order: 10
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Stand 27.10.2020**

## Einleitung

OVHcloud bietet Public Cloud Kunden gebrauchsfertige Images, aber auch die Möglichkeit, ihre eigenen Images zu verwenden.

**Hier erfahren Sie, wie Sie Ihre eigenen Images in Ihr Public Cloud Projekt importieren.**

## Voraussetzungen

- eine [Public Cloud](../erstellung_einer_instanz_im_ovh_kundencenter/) Instanz in Ihrem OVHcloud Kundencenter
- Ihr eigenes RAW/QCOW2 Image (empfohlene Formate) 
- einem OpenStack-[Benutzer](../openstack-user-erstellen-loeschen/) 
- einer OpenStack [CLI ready Umgebung](../vorbereitung_der_umgebung_fur_die_verwendung_der_openstack_api/) (wenn Sie CLI verwenden)

## Beschreibung

### Vor den Benchmark-Tests

Es wird empfohlen, cloudkompatible Images des Händlers zu verwenden oder Ihr eigenes Image mit Lösungen wie [OpenStack Builder zu erstellen](https://docs.ovh.com/gb/en/public-cloud/packer-openstack-builder/).

Die kompatiblen Cloud Images sind hier verfügbar:

- https://cloud.centos.org/centos/
- https://cloud.debian.org/images/cloud/
- https://cloud-images.ubuntu.com/releases/
- https://alt.fedoraproject.org/cloud/

Andere Betriebssysteme bieten auch ISO-Images, die auch bei der Erstellung von [Images mit Packer](https://www.packer.io/docs/builders) wie QEMU und VirtualBox angewendet werden können.

Stellen Sie sicher, dass folgende Elemente auf Ihren Bildern installiert sind, damit sie in die Cloud-Umgebung integriert werden können:

- *QEMU Guest Agent*\: Diese Operation ermöglicht es dem Host, mit der Instanz für die Sicherungen direkt zu kommunizieren. Nicht alle Betriebssysteme sind mit diesem Paket kompatibel.
- *cloud-init*\: So können Sie Ihre Instanz beim ersten Start starten, indem Sie SSH-Schlüssel hinzufügen und das Netzwerk konfigurieren. Die meisten Betriebssysteme sind mit dieser Funktion kompatibel.

Wir empfehlen die Verwendung von Bildern im RAW- oder QCOW2-Format. Optimieren Sie die Größe des Images so klein wie möglich, um die monatlichen Abrechnungskosten zu minimieren und die Zeit bis zur Erstellung Ihrer Instanzen zu verkürzen.

### Image importieren

Bei OpenStack gibt es zwei Methoden, um Ihr eigenes Image zu importieren. Dies können Sie über das OpenStack-Kommandozeileninterface oder das [Horizon-Interface tun](https://horizon.cloud.ovh.net/auth/login/).

#### OpenStack Kommandozeile

Wenn Ihr Image fertig ist, folgen Sie den folgenden Schritten, um den Import mit dem OpenStack CLI zu starten:

1\. Laden Sie Ihre Datei openrc.sh für Ihren OpenStack-Benutzer aus Ihrem OVHcloud-Kundencenter herunter (wählen Sie die Region aus, in die Sie das Download durchführen möchten).

![openrc](images/openrc_file.png){.thumbnail}

2\. Laden Sie die openrc Datei:

```sh
source openrc.sh
```

3\. Sobald die Datei geladen ist, werden Sie aufgefordert, das Passwort des OpenStack-Benutzers einzugeben.

4\. Sie können jetzt Ihr Image importieren. Das folgende Bestellbeispiel führt folgende Operationen durch:

- Das Festplattenformat ist "RAW"
- Download eines Images vom aktuellen Pfad namens "debian9.raw"
- Nenn das Image "Debian 9 - Mein Image"
- Definiert das Image privat
- Definiert die empfohlenen Eigenschaften. Eine optimale Konfiguration ermöglicht die Nutzung von Funktionen wie *Live-Snapshot* und *cloud-init* (benötigt die Verwendung des Benutzernamens)

```sh
openstack image create —disk-format raw —container-format bare —file debian9.raw "debian 9 - Mon image" —private —property distribution=debian —property hw_disk_bus=scsi —property hw_scsi_model=virtio-scsi —property hw_qemu_guest_agent es —property image_original_user=debian
```

#### Über das Horizon-Interface

Sobald Ihr Image importbereit ist, folgen Sie den folgenden Schritten, um es über das OpenStack Horizon Webinterface zu importieren:

1\. Verbinden Sie sich [mit dem Horizon-Interface](https://horizon.cloud.ovh.net/auth/login/).

2\. Wählen Sie oben links die Region aus, in die Sie Ihr Image herunterladen möchten.

![horizon_1](images/horizon_1.png){.thumbnail}

3\. Gehen Sie zum Bereich Images `und klicken` Sie dann auf `Create Image`{.action}.

![horizon_2](images/horizon_2.png){.thumbnail}

4\. Geben Sie die Details Ihres Images ein und wählen Sie die Datei über Ihren Computer aus.

![horizon_3](images/horizon_3.png){.thumbnail}

5\. Geben Sie die Metadaten der Instanz ein (Sie können auch die personalisierten Metadaten Ihrer Wahl angeben) und klicken Sie dann auf `Create Image`{.action}.

![horizon_4](images/horizon_4.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
