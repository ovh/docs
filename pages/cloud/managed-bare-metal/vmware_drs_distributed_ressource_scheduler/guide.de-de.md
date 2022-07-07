---
title: VMware DRS (Distributed Resource Scheduler)
slug: vmware-drs-distributed-resource-scheduler
routes:
    canonical: 'https://docs.ovh.com/de/private-cloud/vmware-drs-distributed-resource-scheduler/'
excerpt: So steuern Sie die Lastverteilung mit der DRS-Funktion
section: VMware vSphere Funktionen
order: 03
---

**Stand 18.11.2020**

## Einleitung

Die **DRS**-Funktion (Distributed Resource Scheduler) ist in **VMware**-Clustern verfügbar und erlaubt eine Lastverteilung zwischen Hosts mithilfe der automatischen Verschiebung virtueller Maschinen (vMotion). Die VMs werden hierbei entsprechend ihrer Verwendung und Ressourcen auf die verschiedenen Hosts des Clusters verteilt.

**In dieser Anleitung erfahren Sie, wie Sie diese Funktion konfigurieren.**

## Voraussetzungen

- Sie verfügen über ein [Managed Bare Metal](https://www.ovhcloud.com/de/managed-bare-metal/){.external} Produkt.
- Sie sind auf Ihrem [vSphere Interface](../den_vsphere_client_installieren/) eingeloggt.

## Beschreibung

Zweck der **DRS**-Funktion ist, Ressourcen besser zu verteilen. Hierzu kann diese VMs entweder selbst auf einen (besser geeigneten) Host oder Pool verschieben oder Ihnen dazu raten.

![Prinzip des DRS](images/drs0.png){.thumbnail}

### Aktivierung

Die DRS-Funktion ist standardmäßig im Basis-Cluster, den Ihnen OVHcloud bei Lieferung Ihrer Managed Bare Metal bereitstellt, aktiviert.

Wird ein neuer Cluster erstellt, können Sie die DRS-Funktion direkt bei der Erstellung oder auch im Nachhinein aktivieren.

Ist die Funktion in Ihrem Cluster nicht aktiviert, wählen Sie diesen Cluster aus und gehen Sie in den Tab `Konfigurieren`{.action}.

Gehen Sie ins `Dienste`{.action}-Menü und dann ins Untermenü `vSphere DRS`{.action}.

Klicken Sie auf `Bearbeiten`{.action} und aktivieren Sie das Kontrollkästchen `vSphere DRS`, um die DRS-Funktion einzuschalten.

![DRS aktivieren](images/drs01.png){.thumbnail}

### Einstellungen 

Im selben Fenster zur Bearbeitung der Einstellungen finden Sie 4 Optionskategorien.

#### Automatisierung

Es sind drei verschiedene Automatisierungsebenen verfügbar:

- Im Modus “Manuell” verschiebt DRS die VMs nicht. Sie sind selbst für die Migration und Neuverteilung Ihrer VMs verantwortlich.

- Im Modus “Teilautomatisiert” berät Sie DRS zur Migration Ihrer VMs, nimmt diese jedoch nur vor, wenn Sie das Verschieben der VMs bestätigen.

- Im Modus “Vollautomatisiert” verschiebt DRS die VMs automatisch und ohne Bestätigung Ihrerseits entsprechend der auf den Hosts vorhandenen Last.

Darüber hinaus können Sie einen Migrationsschwellenwert zwischen “konservativ” und “aggressiv” für die automatischen Modi festlegen.

Mit der Option “Predictive DRS”, verfügbar ab VMware Version 6.5, ist es möglich, Migrationen basierend auf den von vROps ausgegebenen prognostizierten Metriken durchzuführen.
Letzteres ist daher unerlässlich für den Einsatz dieser DRS-Option.

Mit der Option “VM-Automatisierung” können spezifische DRS-Regeln für bestimmte VMs konfiguriert werden. Gehen Sie hierzu im Tab `Konfigurieren` ins Untermenü `VM-Außerkraftsetzungen` (einzelne VMs können “teilautomatisch” als Migrationsmodus haben, auch wenn für den Cluster “vollautomatisch” als Modus eingestellt ist).

![DRS-Automatisierung](images/drs02.png){.thumbnail}


#### Weitere Optionen

Sie können drei weitere Optionen in den DRS-Einstellungen einrichten:

- VM-Verteilung: Verteilen Sie hinsichtlich der Verfügbarkeit eine gleiche Anzahl an virtuellen Maschinen auf den Hosts. 

- Speichermetrik für Lastausgleich: Lastausgleich basierend auf dem belegten Arbeitsspeicher virtueller Maschinen statt auf dem aktiven Arbeitsspeicher.
Diese Einstellung wird nur für Cluster empfohlen, deren Host-Arbeitsspeicher nicht überbelegt ist. 

- CPU-Überbelegung: Begrenzen Sie die CPU-Überbelegung für alle Hosts im Cluster. Bei dieser Einstellung wird eine virtuelle CPU entsprechend einem primären Verhältnislimit zur physischen CPU (vCPU:pCPU) erstellt, das auf jedem ESXi-Host angewendet wird. 

![Weitere DRS-Optionen](images/drs03.png){.thumbnail}

#### Energieverwaltung

**Diese Option muss immer deaktiviert sein.**

Zweck dieser Option ist, Hosts Ihrer Infrastruktur auszuschalten, wenn DRS feststellt, dass diese nicht benötigt werden, und dabei das erforderliche Failover-Level für HA aufrechtzuerhalten.
Das Monitoring bei OVHcloud erkennt dieses Ausschalten als Anomalie und erstellt automatisch eine Störungsintervention im betreffenden Datacenter.

#### Erweiterte Optionen

Sie können mehrere erweiterte Konfigurationseinstellungen in Ihrem DRS-Cluster verwenden.

Hier ein paar Beispiele:

|Name der erweiterten Option|Beschreibung|Standardwert|Aggressivster Wert|
|:---|:---|:---|:---|
|UseDownTime|Bestimmt, ob bei der Kostenanalyse die Auswirkungen möglicher Arbeitsspeicherausfälle während der Migration auf den Workload berücksichtigt werden sollen|1|0 (Auswirkungen werden nicht berücksichtigt)|
|IgnoreDownTimeLessThan|Schwelle (in Sekunden) für das Ignorieren kumulativer Migrationsausfallzeiten in der Kostenanalyse. (Kann erhöht werden, wenn VM-Workload nicht durch Arbeitsspeicherausfälle während der Migration beeinflusst wird.)|1|Große Zahl (keine Berücksichtigung der Downtime)|
|MinImbalance|Verwendet, um Ziel-Ungleichgewicht zu berechnen|50|0|
|MinGoodness|Erforderliche Mindestverbesserung des Cluster-Ungleichgewichts für jede Verschiebung|Adaptive|0 (alle Verschiebungen werden berücksichtigt)|
|MaxMovesPerHost|Empfohlene maximale Anzahl an Verschiebungen jedes Hosts je Aufruf|Adaptive|0 (kein Limit)|

![Erweiterte DRS-Optionen](images/drs05.png){.thumbnail}

### DRS-Regeln

Im Tab `Konfigurieren` finden Sie die Verwaltung der VM/Host-Regeln.

![DRS-Regeln](images/drs06.png){.thumbnail}

- Virtuelle Maschinen zusammenhalten: Die virtuellen Maschinen befinden sich auf demselben Host.
- Separate virtuelle Maschinen: Die virtuellen Maschinen befinden sich auf verschiedenen Hosts innerhalb desselben Clusters.
- Virtuelle Maschinen zu Hosts: Die virtuellen Maschinen der eingegebenen VM-Gruppe des Clusters müssen auf der eingegebenen Host-Gruppe ausgeführt werden. Hierzu müssen VM- und Host-Gruppen im Tab `VM/-Host-Gruppen` erstellt werden.

Die vierte Regel, “Virtuelle Maschinen zu virtuelle Maschinen”, wird in unserer Anleitung zur [HA-Funktion](../vmware-ha-high-availability) erklärt (Englisch).

![DRS-Regeln erstellen](images/drs07.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
