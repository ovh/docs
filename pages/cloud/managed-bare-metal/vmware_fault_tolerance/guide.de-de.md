---
title: VMware Fault Tolerance
slug: vmware-fault-tolerance
routes:
    canonical: 'https://docs.ovh.com/de/private-cloud/vmware-fault-tolerance/'
excerpt: Gewährleisten Sie das kontinuierliche Funktionieren Ihrer virtuellen Maschine mit Fault Tolerance
section: VMware vSphere Funktionen
order: 06
---

**Stand 18.11.2020**

## Einleitung

Die Funktion **Fault Tolerance** (FT) von VMware vSphere ermöglicht den Schutz einer virtuellen Maschine vor Hardwarefehlern. Dazu wird die Maschine auf zwei verschiedenen Hosts geklont. 

![Fault Tolerance](images/FT10v2.gif){.thumbnail}

**Sehen Sie hier, wie Sie die Funktion Fault Tolerance auf Ihrer virtuellen Maschine nutzen können**

## Voraussetzungen

- vSphere HA aktivieren.
- Reservierung von Ressourcen entspricht 100% des Arbeitsspeichers.
- Die VMware Tools sind installiert.
- Die Prozessoren gehören derselben Generation an.
- Höchstens 4 vCPUs.

## Praktische Anwendung

Um die Option **Fault Tolerance** zu aktivieren, klicken Sie mit der rechten Maustaste auf eine virtuelle Maschine. Klicken Sie danach erst auf `Fault Tolerance`, dann auf `Fault Tolerance` aktivieren.

![Fault Tolerance](images/FT.png){.thumbnail}

Daraufhin öffnet sich ein Fenster für die Konfigurierung. Hier werden Sie gebeten, Ihre Auswahl für die virtuelle Sekundärmaschine zu treffen. 

Die Datenbank:

![Fault Tolerance](images/FT1.png){.thumbnail}

Der Host: 

![Fault Tolerance](images/FT2.png){.thumbnail}

Abschließend: Eine Zusammenfassung Ihrer Auswahl. Bestätigen Sie, um FT auf Ihrer virtuellen Maschine zu aktivieren:

![Fault Tolerance](images/FT3.png){.thumbnail}

Nun ist Ihre virtuelle Maschine durch **Fault Tolerance** geschützt. Sie können eine Veränderung des Symbols feststellen, außerdem zeigt der Name nun den Status “Primär” an.

![Fault Tolerance](images/FT4.png){.thumbnail}

Nun haben Sie je nach Bedarf die Auswahl zwischen verschiedenen Aktionen.

![Fault Tolerance](images/FT5.png){.thumbnail}

## Unmögliche Aktionen und Fälle von Inkompatibilität

Ist **Fault Tolerance** bei einer virtuellen Maschine aktiviert, so sind einige Aktionen und der Gebrauch bestimmter Peripheriegeräte nicht mehr möglich.

Die Liste der nun nicht mehr unterstützten Aktionen finden Sie auf [dieser Seite](https://docs.vmware.com/de/VMware-vSphere/6.7/com.vmware.vsphere.avail.doc/GUID-F5264795-11DA-4242-B774-8C3450997033.html){.external-link}, eine Auflistung von Fällen von Inkompatibilität auf [dieser Seite](https://docs.vmware.com/de/VMware-vSphere/6.7/com.vmware.vsphere.avail.doc/GUID-C1749AD4-70E2-406C-864C-719F54BF1BC1.html){.external-link}.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/>.
