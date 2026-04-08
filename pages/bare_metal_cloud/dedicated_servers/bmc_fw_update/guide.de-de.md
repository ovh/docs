---
title: "BMC-Firmware-Version auf einem Linux Dedicated Server überprüfen"
excerpt: "Überprüfen Sie die BMC-Firmware-Version auf Ihrem OVHcloud Dedicated Server, um die Kompatibilität der Hardware-Verwaltung sicherzustellen."
updated: 2026-02-25
---

## Ziel

Ein BMC (Baseboard Management Controller) ist für die Remote-Verwaltung und Steuerung der Server-Hardware auf niedriger Systemebene verantwortlich. Eine veraltete Version kann sich direkt auf die Sicherheit, Stabilität und Verwaltbarkeit des Servers auswirken. Die Aktualisierung der BMC-Firmware ist notwendig, um Sicherheitsschwachstellen zu beheben, die Systemstabilität aufrechtzuerhalten und Compliance-Anforderungen zu erfüllen.

**Diese Anleitung beschreibt die Schritte, um die BMC-Firmware-Version auf einem dedizierten Server zu prüfen.**

## Voraussetzungen

- Sie haben einen [Dedicated Server](/links/bare-metal/bare-metal) in Ihrem Kunden-Account.
- Sie haben administrativen Zugriff (sudo) auf Ihren Server.
- Ihr dedicated Server muss mit dem Internet verbunden sein (nur wenn das Tool `ipmitool` noch nicht installiert ist).

> [!primary]
> Aufgrund unserer dedizierten Konfiguration erfolgt die BMC-Aktualisierung ausschließlich durch die OVHcloud-Automatisierung unter Aufsicht unserer Techniker. Wir stellen weder Pakete noch automatisierte Mechanismen dafür bereit.
>

### Auf einem Linux-Server

Zunächst müssen Sie das Paket `ipmitool` installieren. Dieses Tool ermöglicht es Ihnen, das BMC über die IPMI-Schnittstelle abzufragen. Weitere Informationen finden Sie in der offiziellen Dokumentation: <https://linux.die.net/man/1/ipmitool>.

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

![BMC-Firmware-Version in der ipmitool-Ausgabe unter Linux](images/ipmi_tool.png){.thumbnail} 

- Wenn die Firmware-Version kleiner oder gleich 1.14 ist, kontaktieren Sie unser Support-Team, indem Sie ein [Support-Ticket im OVHcloud Help Center](/links/support-contact) erstellen, um ein Firmware-Update anzufordern. 
- Wenn die Version höher als 1.14 ist, sind keine Maßnahmen erforderlich.

### Auf einem Windows-Server

Derzeit können wir den Vorgang nur für Server bereitstellen, die mit Linux-basierten Betriebssystemen laufen. Wir empfehlen Ihnen, Ihren Windows-Server in unserem [Rescue-Modus](/pages/bare_metal_cloud/dedicated_servers/rescue_mode) zu starten, Um die Version zu überprüfen, befolgen Sie die nachstehenden Anweisungen.

### Auf einem Server im Rescue modus

Sobald Ihr Server im [Rescue-Modus](/pages/bare_metal_cloud/dedicated_servers/rescue_mode) neu gestartet wurde, installieren Sie das Paket `ipmitool`.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # apt install ipmitool -y
```

Überprüfen Sie anschließend die Firmware-Version:

```sh
ipmitool mc info
```

![BMC-Firmware-Version in der ipmitool-Ausgabe im Rescue-Modus](images/ipmi_tool_rescue.png){.thumbnail}

- Wenn die Firmware-Version kleiner oder gleich 1.14 ist, kontaktieren Sie unser Support-Team, indem Sie ein [Support-Ticket im OVHcloud Help Center](/links/support-contact) erstellen, um ein Firmware-Update anzufordern. 
- Wenn die Version höher als 1.14 ist, sind keine Maßnahmen erforderlich.

## Weiterführende Informationen

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

- [Upgrading Samsung NVMe PM9A1 Firmware on Dedicated Servers](/pages/bare_metal_cloud/dedicated_servers/samsung-nvme-fw-upgrade)

- [Dedicated Servers - Upgrading your Micron 7500 PRO firmware](/pages/bare_metal_cloud/dedicated_servers/micron-7500-fw-upgrade)

Treten Sie unserer [User Community](/links/community) bei.
