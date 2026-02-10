---
title: Überprüfen der BMC-Firmware-Version auf einem dedizierten Server
excerpt: "Erfahren Sie, wie Sie die BMC-Firmware-Version auf einem dedizierten Server prüfen."
updated: 2026-02-11
---

## Ziel

Regelmäßige Firmware-Updates spielen eine entscheidende Rolle bei der Aufrechterhaltung der Leistung, Stabilität und Sicherheit Ihrer Laufwerke. Solche Updates enthalten oft wichtige Fehlerbehebungen, verbesserte Kompatibilität und erweiterte Sicherheitsfunktionen, die unerlässlich sind, um die Integrität Ihrer Daten zu gewährleisten und eine optimale Betriebsleistung zu erzielen.

**Dieses Handbuch beschreibt die Schritte, um die BMC-Firmware-Version auf einem dedizierten Server zu prüfen.**

## Voraussetzungen

- Ein [dedizierter Server](/links/bare-metal/bare-metal) in Ihrem OVHcloud-Konto.
- Administratorrechte (sudo).
- Internetverbindung (nur wenn das Paket `ipmitool` noch nicht auf dem Server installiert ist).

### Auf einem Linux-Server

Zunächst müssen Sie das Paket `ipmitool` installieren. Dieses Tool ermöglicht es Ihnen, das BMC über die IPMI-Schnittstelle abzufragen. Hier finden Sie die offizielle Dokumentation: <https://linux.die.net/man/1/ipmitool>

Je nach verwendeter Linux-Distribution kann der Befehl variieren:

> [!tabs]
> **Debian/Ubuntu**
>>
>> ```sh
>> sudo apt update
>> sudo apt install ipmitool -y
>> ```
>>
> **RHEL/CentOS/AlmaLinux/Rocky Linux**
>>
>> ```sh
>> sudo dnf install epel-release -y
>> sudo dnf install ipmitool -y
>> ```
>>

Überprüfen Sie die BMC-Firmware-Version mithilfe des folgenden Befehls:

```sh
sudo ipmitool mc info
```

![bmc](images/ipmi_tool.png){.thumbnail} 

Wenn die Firmware-Version niedriger als 1.14 ist, kontaktieren Sie bitte unser Support-Team, indem Sie ein [Support-Ticket über den OVHcloud Help Center](/links/support-contact) erstellen, um ein Firmware-Update anzufordern. Ist die Version jedoch höher als 1.14, ist keine weitere Aktion erforderlich.

### Auf einem Windows-Server

Derzeit können wir den Vorgang nur für Server bereitstellen, die mit Linux-basierten Betriebssystemen laufen. Wir empfehlen Ihnen, Ihren Windows-Server in unserem [Rescue modus](/pages/bare_metal_cloud/dedicated_servers/rescue_mode) zu starten, um die Version zu prüfen. Der Befehl funktioniert auch im Rescue modus.

### Auf einem Server im Rescue modus

Sobald Ihr Server im [Rescue modus](/pages/bare_metal_cloud/dedicated_servers/rescue_mode) neu gestartet wurde, installieren Sie das Paket `ipmitool`.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # apt install ipmitool -y
```

Überprüfen Sie anschließend die Firmware-Version:

```sh
ipmitool mc info
```

![bmc](images/ipmi_tool_rescue.png){.thumbnail}

Wenn die Firmware-Version niedriger als 1.14 ist, kontaktieren Sie bitte unser Support-Team, indem Sie ein [Support-Ticket über den OVHcloud Help Center](/links/support-contact) erstellen, um ein Firmware-Update anzufordern. Ist die Version jedoch höher als 1.14, ist keine weitere Aktion erforderlich.

## Weiterführende Informationen

Für spezialisierte Dienstleistungen (SEO, Entwicklung usw.) kontaktieren Sie [OVHcloud Partner](/links/partner).

Wenn Sie bei der Nutzung und Konfiguration Ihrer OVHcloud-Lösungen Unterstützung benötigen, bieten wir verschiedene [Support-Optionen](/links/support) an.

Treten Sie unserer [User Community](/links/community) bei.