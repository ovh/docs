---
title: Änderung der Hardware-Konfiguration einer Virtuellen Maschine
excerpt: ''
slug: nderung_der_hardware-konfiguration_einer_virtuellen_maschine
legacy_guide_number: g587
---


## 
In dieser Hilfe werden die möglichen Änderungen an einer Virtuellen Maschine beschrieben, also die Details der Funktion "Edit Settings" von VMware.

Dazu muss zuerst wie in folgender Hilfe beschrieben eine Virtuelle Maschine erstellt werden:


- []({legacy}607)




## 
Sämtliche weiter unten beschriebenen Änderungen müssen in vSphere von Ihrer Private Cloud aus durchgeführt werden. Machen Sie dazu einen Rechtsklick auf einer Virtuellen Maschine und wählen Sie dann "Edit Settings" aus.


## Arbeitsspeicher (RAM)
Der zugewiesene Arbeitsspeicher kann jederzeit geändert werden, sofern die Maschine ausgeschaltet ist (Ab dem L Host aufwärts kann diese Operation dank der Hot Add Funktion von VMware auch bei einer laufenden Maschine durchgeführt werden).

![](images/img_53.jpg){.thumbnail}
Mehr Informationen zur Anpassung im laufenden Betrieb mit Hot Add finden Sie [hier](#CONFIG_AND_ADVANCED_OPTIONS)


## Prozessor (CPU)
Die Anzahl der der Virtuellen Maschine zugewiesenen CPUs kann geändert werden, wenn diese ausgeschaltet ist (Ab dem L Host aufwärts kann diese Operation dank der Hot Add Funktion von VMware auch bei einer laufenden Maschine durchgeführt werden).

![](images/img_54.jpg){.thumbnail}
Mehr Informationen zur Anpassung im laufenden Betrieb mit Hot Add finden Sie [hier](#CONFIG_AND_ADVANCED_OPTIONS)


## Grafikkarte
Sie können die Einstellungen der Grafikkarte festlegen, indem Sie folgende Einstellungen ändern:

- Die automatische Erkennung
- Die Auswahl der Auflösung von Hand
- Die Anzahl der für die Grafikkarte reservierten MB RAM.



![](images/img_55.jpg){.thumbnail}


## Festplatte
Sie können jederzeit den virtuellen Festplattenplatz der Maschine anpassen, indem Sie den zugewiesenen Speicherplatz ändern:

![](images/img_56.jpg){.thumbnail}
Sie können auch den Festplattentyp (SATA oder IDE) sowie den Typ des Speicherbereichs (persistent oder nicht persistent) auswählen.

Der persistente Speicherbereich erlaubt die Speicherung von Daten beim Reboot einer Virtuellen Maschine.
Beim nicht-persistenten Speicherbereich bleiben die Daten in diesem Fall nicht erhalten: bei einem Reboot der Maschine werden sämtliche Daten gelöscht.

Mit dem Button "Add..." können Sie jederzeit eine zweite Festplatte zu einer Virtuellen Maschine hinzufügen, egal ob diese ein- oder ausgeschaltet ist.


## CD/DVD Laufwerk
Erlaubt Ihnen das einfache Mounten eines Images Ihres Datastores:

![](images/img_62.jpg){.thumbnail}

## WICHTIG!
Die Option "Connect at power on" muss ausgewählt werden, damit das Laufwerk erkannt und Ihr Image geladen werden kann.


## Netzwerkkarte
Hier können Sie den Karten-Typ, den Sie auf der Virtuellen Maschine konfigurieren möchten, und den Verbindungs-Typ (VM Network oder LocalportGroup) auswählen.

Mit dem VM Network kann eine Virtuelle Maschine im öffentlichen Netzwerk (mit einer RIPE IP) oder einem lokalen Netzwerk zwischen den Hosts erreichbar gemacht werden.

Die LocalPortGroup erlaubt ausschliesslich die Kommunikation innerhalb eines privaten Netzwerks und ist auf den Host beschränkt (nur die VMs eines Hosts können untereinander kommunizieren).

Für die Konfiguration steht Ihnen folgende Hilfe zur Verfügung:


- []({legacy}582)



![](images/img_63.jpg){.thumbnail}


## Allgemeine Optionen
In dieser Rubrik kann der bei der Erstellung der VM ausgewählte Typ der Maschine oder deren Name geändert werden.


## vApp Options
Hier können der gewünschte IP-Typ oder die OVF Einstellungen der Virtuellen Maschine genauer definiert werden.


## VMware Tools
Diese Rubrik erlaubt die Verwaltung der Aktionen der Buttons, die von den VMware Werkzeugen verwendet werden.
Der Button "Stop" kann zum Beispiel konfiguriert werden, damit er einen Shutdown der VM oder einen Power Off ausführt.


## Fortgeschrittene Optionen
Die fortgeschrittenen Optionen erlauben eine feinere Einstellung Ihrer Virtuellen Maschine. In dieser Rubrik können Sie mit Hilfe der Option "Memory/CPU Hotplug" das Hinzufügen von CPU oder RAM Ressourcen im laufenden Betrieb konfigurieren. Diese Option ist erst ab dem L Host aufwärts verfügbar.

Eine weitere Option ist die "SwapFile Location". Standardmässig konfiguriert OVH diese Option so, dass die Swap Datei der Virtuellen Maschine sich direkt auf dem Host, im Fall der Private Cloud also auf den SSD Festplatten, befindet. Diese Konfiguration sorgt für eine bessere Performance bei den Lese- und Schreiboperationen.

Wenn Sie aber beispielsweise eine Virtuelle Maschine mit 12 GB Arbeitsspeicher konfigurieren, dann erstellt VMware automatisch eine 12 GB Swap Datei auf dem Local Storage mit 30 GB Speicherplatz. Die Festplatte läuft so Gefahr, sehr schnell voll zu sein.

Ausserdem verfügen Sie bei der Nutzung dieser Option nicht mehr über den Schutz, den Ihnen die HA Funktion bietet.

Deshalb können Sie diese Option so anpassen, dass die Swap Datei immer an die VM gebunden und somit mit den .vmx und .vmdk Dateien auf dem NAS abgelegt wird.

