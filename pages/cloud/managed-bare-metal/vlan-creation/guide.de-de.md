---
title: VLAN-Erstellung
excerpt: Hier erfahren Sie, wie Sie VLANs (vRack) erstellen.
updated: 2020-11-18
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

**Stand 18.11.2020**

## Einleitung

In einer Managed Bare Metal Infrastruktur verfügen Sie über eine Datenbank mit 11 mit dem vRack gelieferten VLANs.

**Diese Anleitung zeigt die Erstellung zusätzlicher VLANs**

## Voraussetzungen

- Sie haben Zugriff auf den vSphere Web Client (HTML5)

## Beschreibung

### VLANs erstellen

Ihnen stehen zwei verteilte virtuelle Switches (vDS) zur Verfügung:

- Der erste vDS nutzt nur *port groups* zur Kommunikation ins Internet
- Der zweite vDS verfügt über VLAN *port groups*, zur Isolierung privater Kommunikation innerhalb der Managed Bare Metal und zwischen den verschiedenen vRack kompatiblen OVHcloud Diensten (Dedicated Server, Public Cloud...)

Auf diesem Switch wurden 11 VLANs als Basis erstellt (VLAN10 bis VLAN20). Indem Sie `Administrator`-Rechte für den `Zugang zum V(x)LAN` in [der Benutzerverwaltung Ihres Kundencenters einräumen](/pages/cloud/managed-bare-metal/manager-ovhcloud#benutzer), können Sie zusätzliche VLANs erstellen.

Gehen Sie zunächst in die Netzwerkansicht. Deployen Sie den **vRack** Ordner, klicken Sie mit der rechten Maustaste auf **dVS**, die mit *-vRack* endet, und klicken Sie dann auf `New Distributed Port Group`{.action}.

![vRack](images/07network.png){.thumbnail}

![New Distributed Port Group](images/08network1.png){.thumbnail}

Als nächster Schritt benennen Sie Ihre **PortGroup**:

![die Portgroup](images/09network2.png){.thumbnail}

Konfigurieren Sie dann die von OVHcloud empfohlenen Einstellungen:

- **Port Binding**: Static (Reservierung und Zuweisung des Ports zu einer virtuellen Maschine)
- **Port allocation**: Elastic (Erlaubt die Erweiterung der Port-Anzahl im laufenden Betrieb)
- **Number of ports**: 24
- **VLAN Type**: VLAN (die anderen sind [PVLAN](https://kb.vmware.com/s/article/1010691){.external} und Trunk)
- **VLAN ID**: 21 (Die ID kann zwischen 1 und 4096 konfiguriert sein)
- Setzen Sie einen Haken bei der *Customize default policies configuration*.

![konfiguration Portgroup](images/10network3.png){.thumbnail}

Sie haben 3 Sicherheitseinstellungen, die bei Bedarf aktiviert werden können: 

- *Promiscuous mode*: Eliminiert jegliche Eingangsfilterung, die der Adapter für die virtuelle Maschine durchführen kann, damit das Gastbetriebssystem den gesamten im Netzwerk beobachteten Traffic empfängt.
- *MAC address changes*: Beeinträchtigt den Traffic, den eine virtuelle Maschine empfängt. Wenn die Option auf **Accept** festgelegt ist, akzeptiert ESXi Anfragen zur Änderung der tatsächlichen MAC-Adresse auf eine andere Adresse als die ursprüngliche MAC-Adresse.
- *Forged Transmits*: Beeinträchtigt den von einer virtuellen Maschine übertragenen Traffic. Wird die Option auf **Accept** gesetzt, vergleicht ESXi die Quell- und die tatsächliche MAC-Adresse nicht.

> [!primary]
>
> Die häufigste Verwendung dieser 3 Parameter ist CARP, insbesondere bei **pfSense**.
> 

![Sicherheit](images/11network4.png){.thumbnail}

Wir lassen die [Traffic-Shaping](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.networking.doc/GUID-CF01515C-8525-4424-92B5-A982489BACE2.html){.external} deaktiviert.

![Traffic-Glättung](images/12network5.png){.thumbnail}

Wählen Sie auf Loadbalancing-Ebene *Route based on IP hash* aus, was die beste Methode für Redundanz und Verteilung ist.

> [!warning]
>
> Bitte beachten Sie bei der Konfiguration der Failover-Reihenfolge: Der `lag1` Uplink muss als *Active* (Verbindung zwischen dem virtuellen Netzwerk und dem physischen Netzwerk) eingerichtet werden, da ansonsten keine Kommunikation zwischen den Hosts möglich ist.
>

![load balancing](images/13network6.png){.thumbnail}

`Netflow` ist deaktiviert (Aktivitätsverhältnis zu den Traffic-Strömen).

![netflow](images/14network7.png){.thumbnail}

Geben Sie den Wert `Block All Ports` auf "No".

![Finalisierung der Portgroup](images/15network9.png){.thumbnail}

Sie erhalten eine Zusammenfassung der Änderungen. Klicken Sie auf `Finish`, um die Erstellung zu bestätigen.

![Finalisierung der Portgroup](images/16network10.png){.thumbnail}

Hier stellen wir fest, dass **VLAN21** verfügbar und funktionsfähig ist.

![vlan erstellt](images/17network11.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
