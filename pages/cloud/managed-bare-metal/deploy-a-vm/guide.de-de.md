---
title: Eine virtuelle Maschine deployen
slug: virtuelle-maschine-deployen
routes:
    canonical: 'https://docs.ovh.com/de/private-cloud/virtuelle-maschine-deployen/'
excerpt: Hier erfahren Sie, wie Sie eine virtuelle Maschine über das vSphere Interface erstellen.
section: Verwaltung virtueller Maschinen
order: 0
---

**Letzte Aktualisierung am 18.11.2020**

## Ziel

Es gibt mehrere Möglichkeiten, um virtuelle Maschinen über Ihr vSphere Interface zu deployen. 

**In dieser Anleitung erfahren Sie, wie Sie eine virtuelle Maschine mithilfe einer ISO-Datei erstellen.**

## Voraussetzungen

- Sie verfügen über ein [Managed Bare Metal](https://www.ovhcloud.com/de/managed-bare-metal/){.external} Produkt.
- Sie sind auf Ihrem [vSphere Interface](../den_vsphere_client_installieren/) eingeloggt.

## In der praktischen Anwendung

### Virtuelle Maschine deployen

Das Deployment der neuen virtuellen Maschine geschieht über den vSphere Client im Bereich `Hosts und Cluster`.

Klicken Sie mit der rechten Maustaste auf den Cluster Ihrer Wahl und dann auf `Neue virtuelle Maschine`{.action}.

![VM deployen](images/vm01.png){.thumbnail}

Sie haben mehrere Optionen, um eine virtuelle Maschine zu erstellen:

- Per ISO-Datei, verfügbar in Ihrem Datastore (um die Datei zu importieren, befolgen Sie die [Anleitung zur Verbindung via SFTP](../verbindung_per_sftp/)).
- über ein eigenes oder ein [von OVHcloud bereitgestelltes](../ovhcloud-template-deployment/) Template.
- Durch Klonen einer bereits vorhandenen virtuellen Maschine (achten Sie darauf, mögliche Konflikte in der IP-Adressierung zu vermeiden).
- Durch Klonen einer virtuellen Maschine als Template, für ein schnelleres Deployment der nächsten virtuellen Maschinen.
- Klonen eines Templates als ein anderes Template, um das Template beispielsweise auf verschiedenen Datastores abzulegen und Leistungseinbußen bei umfangreicheren Deployments zu vermeiden.
- Durch Konvertieren eines Templates in eine virtuelle Maschine. Dies führt zum Verlust des Templates, kann jedoch nützlich sein, wenn Sie dieses ändern möchten.

![Erstellungsoptionen](images/vm02.png){.thumbnail}

In dieser Anleitung erklären wir, wie Sie eine virtuelle Maschine mithilfe einer ISO-Datei erstellen.

Im folgenden Schritt können Sie den Namen Ihrer Maschine sowie deren Speicherort festlegen. Wenn Sie keinen Ordner auswählen, wird sie im Wurzelverzeichnis des Datacenters erstellt.

![Speicherort der virtuellen Maschine](images/vm03.png){.thumbnail}

Anschließend können Sie den Cluster, den Host, [den Ressourcenpool](https://docs.vmware.com/de/VMware-vSphere/6.7/com.vmware.vsphere.resmgmt.doc/GUID-60077B40-66FF-4625-934A-641703ED7601.html){.external-link} oder die [vApp](https://docs.vmware.com/de/VMware-vSphere/6.7/com.vmware.vsphere.vm_admin.doc/GUID-E6E9D2A9-D358-4996-9BC7-F8D9D9645290.html){.external-link} auswählen, um die VM zu platzieren.

Im vorliegenden Beispiel wird die virtuelle Maschine entsprechend den konfigurierten DRS-Regeln deployt und im Wurzelverzeichnis des Clusters platziert.

![Auswahl der Ressourcen](images/vm04.png){.thumbnail}

Wählen Sie nun die Datenbank aus, in der Sie die Konfigurations- und Festplattendateien speichern möchten.

Wir raten Ihnen davon ab, Ihre virtuelle Maschine in “storageLocal”, was dem lokalen Speicher Ihres Hosts entspricht, zu platzieren. Bei einer Störung Ihres Hosts könnte Ihre virtuelle Maschine sonst nicht neu gestartet werden und wäre somit nicht mehr verfügbar.

![Wahl des Speichers](images/vm05.png){.thumbnail}

Wählen Sie anschließend die Kompatibilität zwischen Ihrer virtuellen Maschine und dem Host. Außer in Sonderfällen wird empfohlen, die aktuellste Version zu wählen.

![Auswahl der Kompatibilität](images/vm06.png){.thumbnail}

Wählen Sie nun ein Gast-Betriebssystem. Das “Guest OS” installiert nicht das Betriebssystem. Stattdessen wird die virtuelle Maschine automatisch vorkonfiguriert (Anzahl CPU/RAM, Netzwerkkartentyp, Installieren der VMware Tools).

![Auswahl des Gast-Betriebssystems](images/vm07.png){.thumbnail}

### Virtuelle Maschine konfigurieren

In den nachfolgenden Schritten können Sie die Ressourcen Ihrer virtuellen Maschine konfigurieren.

In der Zeile `Neues Netzwerk` kann eine Netzwerkkarte hinzugefügt werden:

- “VM-Netzwerk” wird als öffentliches Netzwerk und für den direkten Internetzugriff verwendet.
- Die VLANs werden für das private Netzwerk zwischen Ihren virtuellen Maschinen (sowie mit anderen OVHcloud Diensten via vRack) verwendet.

![Wahl des Netzwerks](images/vm08.png){.thumbnail}

In der Zeile `Neues CD/DVD-Laufwerk` können Sie “ISO-Datei für Datenspeicher” auswählen.

Es wird ein neues Fenster geöffnet, in dem Sie Ihre ISO-Datei auswählen können. Diese kann auch nach der Erstellung der virtuellen Maschine hinzugefügt werden.

![Auswahl der ISO-Datei](images/vm09.png){.thumbnail}

Nachdem Sie die Datei ausgewählt haben, wird sie wie nachstehend angezeigt. Denken Sie daran, diese zu verbinden, indem Sie den Haken bei `Beim Einschalten verbinden`{.action} setzen.

![ISO verbinden](images/vm10.png){.thumbnail}

Daraufhin wird Ihnen eine Zusammenfassung zur Erstellung der virtuellen Maschine angezeigt. Wenn Sie Ihre Konfiguration bearbeiten möchten, klicken Sie direkt auf einen der Schritte auf der linken Seite.

Klicken Sie auf `BEENDEN`{.action}, um das Deployment abzuschließen.

![VM Zusammenfassung](images/vm11.png){.thumbnail}

Sobald die virtuelle Maschine in Ihrer Bestandsliste angezeigt wird, können Sie diese starten, indem Sie mit der rechten Maustaste auf die VM und dann nacheinander auf `Power`{.action} und auf `Einschalten`{.action} klicken. 

Klicken Sie schließlich auf `Remote Console öffnen`{.action}, um Zugriff auf den Bildschirm der VM zu erhalten und mit der Installation des Betriebssystems zu beginnen.

![VM starten](images/vm12.png){.thumbnail}

Die Konsole wird in einem neuen Tab geöffnet und Sie können Ihre neue virtuelle Maschine nach Abschluss der Installation verwenden.

![VM-Konsole](images/vm13.png){.thumbnail}

> [!primary]
> Wir empfehlen Ihnen nach abgeschlossener Installation die ISO-Datei in den Einstellungen zu trennen. Tun Sie dies nicht, können Sie die virtuelle Maschine nicht verschieben.
>

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
