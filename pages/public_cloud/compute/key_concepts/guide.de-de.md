---
title: 'Public Cloud Instances - Schlüsselkonzepte'
excerpt: 'Erfahren Sie die Grundlagen von Public Cloud Compute: wie Instanzen funktionieren, verfügbare Arten und Größen, Multi-AZ-Bereitstellungen, Image-Management, SSH-Sicherheit, Backup-Mechanismen, öffentliche/private Netzwerke und Vorteile von Savings Plans.'
updated: 2025-12-05
---

## Ziel

Diese Anleitung hat zum Ziel, Ihnen ein klares Verständnis der grundlegenden Konzepte zu vermitteln, die erforderlich sind, um Ihre ersten OVHcloud Public Cloud Compute Instanzen zu erstellen, zu konfigurieren und zu verwalten. Sie lernen, wie Instanzen funktionieren, wie Sie den richtigen Instanztyp auswählen und wie sich Schlüsselelemente wie Images, Verfügbarkeitszonen, Netzwerke, Sicherheit und Backups im OVHcloud Ökosystem zusammensetzen.

## Was ist eine Instanz (Virtual Machine)?

Eine Instanz, auch als virtuelle Maschine (VM) bezeichnet, ist ein vollständig isolierter Server, der auf der gemeinsamen physischen Infrastruktur von OVHcloud läuft. Sie funktioniert wie ein traditioneller Server, bietet jedoch die Flexibilität und Skalierbarkeit des Cloud-Computings. Sie wählen das Betriebssystem aus, definieren die CPU, RAM und Speicherressourcen und stellen Ihre Anwendungen, Webseiten oder Entwicklungs-Umgebungen bereit.

Public Cloud Compute Instanzen bieten:

- On-Demand-Erstellung und flexible Größen – Skalieren Sie Ressourcen nach Bedarf auf oder herab.
- Pay-as-you-go-Berechnung – Stündlich oder monatlich nach realer Nutzung abgerechnet.
- Nahtlose Integration mit OVHcloud Diensten – einschließlich Object Storage, Networking, Backup und mehr.

Instanzen können über das OVHcloud Kundencenter, die Horizon-Oberfläche, API-Endpunkte oder über Automatisierungs- und Orchestrierungstools wie die OVHcloud CLI und Terraform verwaltet werden.

## Instanzmodelle

OVHcloud bietet mehrere Instanzmodelle an, die so gestaltet sind, dass sie unterschiedliche Anforderungen an Workloads erfüllen. Jeder Instanz-Typ bietet eine Reihe von Größen (Flavors), um Ihre Ressourcenanforderungen präzise abzustimmen.

| Instanz-Typ  | Beschreibung | Typische Anwendungsfälle |
| ------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Allgemein (General Purpose) | Ausgewogene CPU und RAM | Eignet sich für Entwicklungs-Server, Webanwendungen und allgemeine Geschäftsworkloads. Bietet ein ausgewogenes Verhältnis von CPU und RAM. |
| CPU-optimiert | Hohe Prozessorleistung | Ideal für rechenintensive Anwendungen, parallele Aufgaben, CI/CD-Pipelines oder Microservices, die eine hohe CPU-Frequenz benötigen. |
| RAM-optimiert | Hohe RAM-Kapazität | Für Datenanalyse, Big-Data-Workloads und Datenbank-Caching konzipiert. Bietet hohe RAM-zu-CPU-Verhältnisse und beschleunigte IOPS. vCores laufen mit 2 GHz oder höher. |
| Speicher-optimiert | Hohe IOPS-Leistung | Ausgestattet mit NVMe-Speicher für ultra-schnelle Disks-I/O, perfekt für Datenbanken und Big-Data-Anwendungen. |
| GPU | Hardware-beschleunigte Grafik | Bietet außergewöhnliche parallele Rechenleistung, bis zu 1.000-mal schneller als CPU für bestimmte Workloads. Eignet sich für KI, Deep Learning und 3D-Rendern. |
| Discovery | Kosten-effizient, geteilte Ressourcen | Eintrittsniveau Instanzen mit geteilten Ressourcen, bieten stabile Leistung zu einem erschwinglichen Preis. Ideal für Testumgebungen, Schulungen oder Proof-of-Concept-Projekte. |

Jeder Instanz-Typ umfasst mehrere Größen (Flavors), um Ihnen zu helfen, die Instanz an die spezifischen Ressourcenanforderungen Ihrer Anwendung anzupassen.

## Lokalisierung und Verfügbarkeitszonen

OVHcloud Compute Instanzen werden in [mehreren Rechenzentren weltweit](/links/infrareg) bereitgestellt, um eine hohe Verfügbarkeit und Nähe zu Ihren Nutzern zu gewährleisten. Beispiele für Regionen sind:

- GRA – Gravelines, Frankreich
- BHS – Beauharnois, Kanada
- DE – Frankfurt, Deutschland

**Typen von Verfügbarkeitszonen:**

| Typen von Zonen | Beschreibung | Empfohlene Anwendung |
| ------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| 1-AZ (Single Availability Zone) | Instanzen werden innerhalb einer Zone bereitgestellt. | Einfache Umgebungen, Entwicklung, Tests oder nicht-kritische Workloads. |
| 3-AZ (Triple Availability Zone) | Instanzen werden über drei redundante Zonen innerhalb der gleichen Region verteilt. | Produktionsworkloads, die eine hohe Verfügbarkeit und Fehlertoleranz erfordern. |
| Local Zones | Edge-Positionen, die näher an Endnutzern liegen, um Latenz zu reduzieren. | Latenzsensitive Anwendungen wie Echtzeit-Datenverarbeitung, Gaming oder interaktive Webdienste. |

> [!primary]
> 
> **Best Practice:** Für kritische Workloads ist eine [Multi-AZ-Bereitstellung](/pages/public_cloud/public_cloud_cross_functional/3az_ref_architecture) zu bevorzugen, um Dienstresilienz und -kontinuität zu gewährleisten.
>

## Verfügbare System-Images

Wenn Sie eine Instanz erstellen, wählen Sie ein Image aus, das das Betriebssystem und optional vorinstallierte Anwendungen enthält. OVHcloud bietet eine Vielzahl von Images an, um unterschiedliche Anforderungen abzudecken:

- **Linux-Distributionen:** Ubuntu, Debian, CentOS, AlmaLinux, Rocky Linux und andere. Diese Images sind für Webserver, Entwicklungs-Umgebungen und allgemeine Workloads sofort einsatzbereit.
- **Windows Server:** Versionen mit integrierten Lizenzen, die sofort für auf Microsoft basierte Anwendungen und Unternehmensworkloads bereitgestellt werden können.
- **Vorab konfigurierte Anwendungen:** Images mit Software wie cPanel, Plesk, Docker oder NVIDIA GPU Cloud (NGC). Sie vereinfachen die Bereitstellung und beschleunigen den Go-to-Market-Prozess.
- **[Benutzerdefinierte Images](/pages/public_cloud/compute/upload_own_image):** Sie können eigene Images im QCOW2- oder RAW-Format importieren, wodurch Sie Ihre Umgebung vollständig steuern und Migrationen, standardisierte Vorlagen oder spezialisierte Konfigurationen ermöglichen.

**Lebenszyklus und Support:** OVHcloud aktualisiert regelmäßig den Image-Katalog. Prüfen Sie die Lebenszyklus- und End-of-Support-Bekanntmachungen, um sicherzustellen, dass Ihre Images weiterhin unterstützt werden. Siehe [hier](/pages/public_cloud/compute/image-life-cycle).

## SSH-Schlüssel

SSH-Schlüssel bieten eine sichere Methode, um auf Ihre Instanzen ohne Passwörter zuzugreifen. Sie bestehen aus zwei Komponenten:

- **Öffentlicher Schlüssel:** Auf der Instanz installiert, um Zugriff zu ermöglichen.
- **Privater Schlüssel:** Auf Ihrem lokalen Rechner sicher aufbewahrt und zur Authentifizierung der Verbindung verwendet.

SSH-Authentifizierung gewährleistet verschlüsselten und verlässlichen Zugriff auf Ihre Server.

Best Practices:

- Teilen Sie Ihren privaten Schlüssel niemals.
- Verwenden Sie für jeden Benutzer einen eindeutigen Schlüssel.
- Speichern Sie Ihre Schlüssel in einem sicheren Manager oder Vault.

Für detaillierte Anweisungen zur Erstellung und Nutzung von SSH-Schlüsseln konsultieren Sie [unsere Anleitung](/pages/public_cloud/compute/creating-ssh-keys-pci).

## Backups

Backups schützen Ihre Daten und Konfigurationen vor versehentlichem Verlust oder Fehlern. OVHcloud bietet mehrere Backup-Mechanismen, um sicherzustellen, dass Ihre Instanzen und Daten sicher bleiben:

- **Backup-Typen:**
    - Manuelle Backups: Erstellen Sie zu jedem Zeitpunkt einen Snapshot Ihrer Disk.
    - Automatische Backups: Geplante Backups, die in regelmäßigen Abständen erstellt werden.
    - Instanz-Erstellung und -Wiederherstellung: Stellen Sie eine neue Instanz direkt von einem vorhandenen Backup bereit.
- **Backup-Orte:**
    - Lokales Backup: In derselben Region wie Ihre Instanz gespeichert.
    - Remote-Backup: Erstellt automatisch eine Kopie des lokalen Backups in einer anderen Region Ihrer Wahl.

> [!primary]
>
> **Best Practice:** Backups ersetzen keine [resiliente Architektur](/pages/public_cloud/public_cloud_cross_functional/3az_ref_architecture). Für kritische Umgebungen kombinieren Sie Backups mit Multi-AZ-Replikation, um maximale Datensicherheit und Dienstverfügbarkeit zu gewährleisten.
>

## Öffentliche und private Netzwerke

OVHcloud Compute Instanzen können je nach Anwendungsbedarf an verschiedene Arten von Netzwerken angeschlossen werden.

| Typen von Netzwerken | Beschreibung | Anwendungsfälle |
| ------------------------| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Öffentliches Netzwerk | Instanzen sind über eine öffentliche IP-Adresse mit dem Internet verbunden. | Hosting von Webseiten, APIs oder Bereitstellen von Fernzugriff auf Ihre Server. |
| Privates Netzwerk (vRack) | Eine private Verbindung zwischen Ihren OVHcloud Ressourcen, isoliert vom öffentlichen Internet. | Verbinden von Datenbanken, Backend-Diensten oder interner Kommunikation zwischen Instanzen. |

Der vRack ermöglicht es Ihnen, ein sicheres, isoliertes Netzwerk zu erstellen, selbst über verschiedene Regionen oder Projekte hinweg.

**Beispiel:** Hosten Sie Ihre Datenbank auf einem privaten Netzwerk, während Sie nur Ihren Webserver auf dem öffentlichen Netzwerk freigeben.

Für detailliertere Anweisungen zur Konfiguration von Public Cloud Netzwerken konsultieren Sie [unsere Anleitung](/pages/public_cloud/public_cloud_network_services/concepts-01-public-cloud-networking-concepts).

## Savings Plans

Savings Plans ermöglichen es Ihnen, Ihre Public Cloud Compute Kosten zu reduzieren, indem Sie sich für eine konsistente Nutzung über einen definierten Zeitraum von 1 Monat bis zu 3 Jahren verpflichten.

**Hauptvorteile:**

- **Geringere Kosten:** Kosteneffizienter als Pay-as-you-go-Berechnung.
- **Automatische Anwendung:** Einsparungen werden automatisch auf alle kompatiblen Instanzen angewandt.
- **Flexibel:** Sie können Instanztypen oder -größen ändern, ohne die Vorteile Ihres Plans zu verlieren.

**Ideal für:**

- Stabile und vorhersehbare Workloads, wie Produktionsanwendungen oder Geschäftsserver.
- Dienste mit konstanten Ressourcenanforderungen, die von Kosteneinsparungen profitieren.

Savings Plans helfen Ihnen, Ihr Budget zu optimieren, ohne die Leistung und Zuverlässigkeit Ihrer Cloud-Umgebung zu beeinträchtigen. Weitere Informationen finden Sie in [unserer Anleitung](/pages/public_cloud/public_cloud_cross_functional/savings_plans).

## Weitere Informationen

Nachdem Sie mit den grundlegenden Konzepten von OVHcloud Public Cloud Compute vertraut sind, finden Sie in unseren Anleitungen alle Informationen zu fortgeschrittenen Operationen und Verwaltungsaufgaben:

- [So erstellen Sie eine Public Cloud Instanz und verbinden sich damit](/pages/public_cloud/compute/public-cloud-first-steps)
- [Verwalten Sie Ihre Public Cloud Instanzen](/pages/public_cloud/compute/first_steps_with_public_cloud_instance)
- [Starten Sie eine Instanz von einem bootfähigen Volume](/pages/public_cloud/compute/start_instance_on_attached_volume)
- [Instanz einstellen oder pausieren](/pages/public_cloud/compute/suspend_or_pause_an_instance)
- [Erste Schritte mit vorinstallierten Anwendungen](/pages/public_cloud/compute/apps_first_steps)
- [Cloud-Guthaben hinzufügen](/pages/account_and_service_management/managing_billing_payments_and_services/add_cloud_credit_to_project)

Treten Sie unserer [User Community](/links/community) bei.
