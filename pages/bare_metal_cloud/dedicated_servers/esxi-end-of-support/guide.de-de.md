---
title: VMware ESXi auf OVHcloud Dedicated Servern - End of Support
excerpt: End of Support für VMware Free vSphere Hypervisor (ESXi) auf Dedicated Servern bei OVHcloud
updated: 2024-09-13
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## VMware ESXi - End of Support

Im Zuge der Übernahme von VMware durch Broadcom entschied Broadcom, die allgemeine Verfügbarkeit des Free vSphere Hypervisor (ESXi) einzustellen. Seit dem 6. Juni 2024 werden daher alle ESXi Images aus dem Katalog an Betriebssystem-Templates für unsere Bare Metal Dedicated Server entfernt. Diese Änderung hat keine Auswirkungen auf Ihre Server, die derzeit ESXi Images verwenden. Sie können Ihren bestehenden Server jedoch nicht neu installieren oder einen neuen Server mit einem der zuvor von OVHcloud bereitgestellten ESXi Templates installieren.

> [!primary]
> Weitere Informationen zur Entscheidung von Broadcom, die allgemeine Verfügbarkeit seiner vSphere Free Edition Images zu beenden, finden Sie in diesem Knowledge Base-Artikel: <https://knowledge.broadcom.com/external/article?legacyId=2107518>.

Obwohl es technisch möglich sein kann, ESXi auf unseren Dedicated Servern zu installieren, können wir keine Hilfen oder Support bei der Konfiguration oder dem Betrieb von VMware ESXi anbieten. Wir empfehlen Ihnen, einen der von uns unterstützten Hypervisor zu verwenden, um die bestmögliche Benutzererfahrung zu gewährleisten.

Wenn Sie einen Hypervisor für die Verwendung mit unseren Dedicated Servern benötigen, empfehlen wir Ihnen die Verwendung eines der folgenden:

- Proxmox VE
- Microsoft Hyper-V

Wir empfehlen Ihnen als Alternative auch die [OVHcloud Hosted Private Cloud Angebote](/links/hosted-private-cloud/hosted-private-cloud) in Betracht zu ziehen.

## Unsere Hilfen zu ESXi

- [ESXi Dedicated Server absichern](/pages/bare_metal_cloud/dedicated_servers/esxi-hardening)
- [Dedicated Server - ESXi-Partitionierung](/pages/bare_metal_cloud/dedicated_servers/esxi-partitioning)
- [Netzwerk auf ESXi auf den High Grade & SCALE Reihen konfigurieren](/pages/bare_metal_cloud/dedicated_servers/esxi-network-HG-Scale)
- [ESXi Dedicated Server - FAQ](https://help.ovhcloud.com/csm/en-gb-dedicated-servers-esxi-faq?id=kb_article_view&sysparm_article=KB0056381)

## Weiterführende Informationen

- [VMware by Broadcom: New Offerings and Opportunities](https://blog.ovhcloud.com/vmware-by-broadcom-new-offerings-and-opportunities-vcf/)

Treten Sie unserer [User Community](/links/community) bei.
