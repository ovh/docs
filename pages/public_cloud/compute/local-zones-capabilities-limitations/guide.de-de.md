---
title: Local Zone Compute - Funktionen, Kapazitäten und Einschränkungen
excerpt: Informieren Sie sich über die aktuellen Funktionen, Kapazitäten und Einschränkungen von Local Zones Instanzen
updated: 2026-01-16
---

## Ziel

Local Zones sind eine Erweiterung von [Regionen](/links/public-cloud/regions-pci), die OVHcloud Dienste näher an bestimmten Standorten platzieren und so für reduzierte Latenzen und verbesserte Anwendungsleistung sorgen.

Die Local Zones Instanzen befinden sich strategisch in der Nähe von Bereichen mit hoher Benutzeranforderung. Ihr Hauptziel ist es, die für die Übertragung von Daten zwischen dem Benutzer und der Cloud erforderliche Zeit zu minimieren, um die Dienste reaktionsschneller zu machen und Anforderungen für Data Residency zu erfüllen.

Weitere Informationen finden Sie auf unserer [Seite für Local Zones](/links/public-cloud/local-zones).

**Erfahren Sie mehr über die aktuellen und zukünftigen Funktionen von Local Zones Instanzen.**

## Verfügbare Funktionen

| Public Cloud Services | Produkt                    | Verfügbarkeit in Local Zones | Einschränkungen |
| --------------------- | -------------------------- | ----------------------------- | --------------- |
| Compute               | Instanzen                  | Ja | Aktion „Suspend (shelve)“ wird in Local Zones nicht unterstützt |
|                       | Metal Instanzen            | Nein | |
|                       | GPU                        | Nein | |
|                       | Instanzsicherung           | Ja | |
|                       | Fernsicherung              | Nein | |
|                       | Sicherungsworkflow-Management | Ja | |
|                       | Linux-Images               | Ja | |
|                       | Windows-Images             | Nein | |
|                       | Eigenes Image hochladen    | Ja | Maximal 25 GB |
| Netzwerk              | Load Balancer              | Nein | |
|                       | Gateway                    | Nein | |
|                       | Floating IP                | Nein | |
|                       | Additional IP             | Nein | |
|                       | Private Netzwerk mit vRack   | Nein | Local Zones sind nicht mit vRack kompatibel. Private Netzwerke sind auf dieselbe Local Zone beschränkt. DHCP wird auf Local Private Netzwerken unterstützt. |
| Speicher              | Object Storage             | Ja | 1. Benutzerrichtlinien werden nicht unterstützt. Alle Zugriffschlüssel innerhalb eines Projekts können auf alle Buckets in allen Local Zones zugreifen. </br> 2. Nur die Standard-Speicherklasse wird unterstützt. </br> 3. S3<sup>1</sup>-Funktionen werden nicht unterstützt: S3-Tags, Legal Hold, SSE-OMK, S3-Replikation, Serverzugriffsprotokollierung. |
|                       | Block Storage              | Ja | Keine Verschlüsselung. Klassische Volumes können nicht mehrfach angehängt werden. Klassische Volumes sind auf 250 IOPS begrenzt (gegenüber 500 IOPS in 1AZ und 3AZ-Regionen). Maximale Größe 4 TB (gegenüber 12 TB). |
|                       | File Storage               | Nein | |
| Container             | Managed Kubernetes Service | Nein | |
|                       | Managed Rancher Service    | Nein | |
|                       | Managed Private Registry   | Nein | |
| DBaas                 | DBaas                      | Nein | |
|                       | Analytics                  | Nein | |
| AI                    | AI                         | Nein | |

## Kapazitäten und Einschränkungen

Alle hier nicht aufgeführten Funktionen wie Neustart (Reboot) von Instanzen, Unterstützung von Object Storage werden in den nächsten Monaten verfügbar sein. Unser Ziel ist es, alle Funktionen zu unterstützen, die in globalen Regionen bereits unterstützt werden.

### SMTP-Server

Instanzen in der Local Zone können keine SMTP-Server kontaktieren.

## Weiterführende Informationen

- [Object Storage - Local Zones specifications](/pages/storage_and_backup/object_storage/s3_local_zones_limitations) (EN)

Zögern Sie nicht, uns Ihre Fragen, Rückmeldungen und Vorschläge zur Verbesserung des Dienstes mitzuteilen:

- Auf dem [OVHcloud Discord Server](https://discord.gg/ovhcloud)

<sup>1</sup>: S3 is a trademark of Amazon Technologies, Inc. OVHcloud’s service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies, Inc.