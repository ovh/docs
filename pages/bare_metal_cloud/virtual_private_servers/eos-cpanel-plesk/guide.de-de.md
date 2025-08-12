---
title: "Plesk und cPanel: End of Support für VPS - Gewährleistung der Kontinuität Ihrer Dienste"
excerpt: "Erfahren Sie, ab wann die Plesk- und cPanel-Betriebssysteme Ihres OVHcloud VPS nicht mehr unterstützt werden"
updated: 2025-07-22
---

## Ziel

In dieser Anleitung erfahren Sie, wie Sie die Kontinuität Ihrer lizenzbasierten Dienste gewährleisten können, indem Sie Ihren OVHcloud VPS nach dem Auslaufen des Supports für mehrere Betriebssysteme auf ein Betriebssystem migrieren, das mit den neuesten Versionen von **Plesk** und **cPanel** kompatibel ist.

**Hier finden Sie die Support-Enddaten für die Betriebssysteme Ihres OVHcloud VPS, die sich auf Plesk- und cPanel-Lizenzen auswirken.**

## Voraussetzungen

- Sie haben einen [VPS](/links/bare-metal/vps) mit einer [kompatiblen Distribution](/links/bare-metal/vps-os).

## In der praktischen Anwendung

Die Herausgeber von **Plesk** und **cPanel** kündigen das Ende der Unterstützung für die folgenden Betriebssysteme an:

| Betriebssystem | Produkt      | Ende des Supports  |
| -------------- | ------------ | ------------------ |
| Ubuntu 18.04   | Plesk        | **1. Januar 2026** |
| Debian 10      | Plesk        | **1. Januar 2026** |
| CentOS 7       | Plesk/cPanel | **1. Januar 2026** |
| CloudLinux 7   | Plesk/cPanel | **1. Januar 2026** |

Weitere Informationen zum Support finden Sie in der offiziellen Dokumentation:

- [Plesk](https://docs.plesk.com/release-notes/obsidian/system-requirements/)
- [cPanel](https://docs.cpanel.net/knowledge-base/cpanel-product/cpanel-deprecation-plan/)

### Was kann ich konkret tun?

> [!primary]
>
> Aus der Sicht der **Sicherheit** birgt die fortgesetzte Verwendung eines nicht unterstützten Betriebssystems ein erhöhtes Risiko für Angriffe.  
> Wir empfehlen, hierzu die folgenden Informationen zu beachten:
>
> - [cPanel Recommendations](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/)
> - [Plesk Recommendations](https://docs.plesk.com/en-US/obsidian/administrator-guide/plesk-administration/securing-plesk.59464/)

#### 1. Aktuelles System überprüfen

Loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager), gehen Sie zum Bereich `Bare Metal Cloud`{.action} und wählen Sie Ihren Server im Bereich `Virtual Private Server`{.action} aus.

![EOS Plesk cPanel](images/vpshome.png){.thumbnail}

Im Tab `Start`{.action} finden Sie die Details Ihres Betriebssystems im Abschnitt `Betriebssystem / Distribution` unter `Ihr VPS`.

#### 2. Ermitteln eines kompatiblen Betriebssystems

Wenn Ihr installiertes Betriebssystem nicht mehr unterstützt wird, migrieren Sie zu einem kompatiblen System, das vom Herausgeber empfohlen wird.

Weitere Informationen finden Sie in der offiziellen Dokumentation zu unterstützten Betriebssystemen:

- [Liste der von Plesk unterstützten Betriebssysteme](https://docs.plesk.com/release-notes/obsidian/system-requirements/)
- [Liste der cPanel kompatiblen Betriebssysteme](https://docs.cpanel.net/installation-guide/system-requirements/)

#### 3. Dienst migrieren

**Option A — Manuelle Neuinstallation**

1. [Backup der Daten](/pages/bare_metal_cloud/virtual_private_servers/using-automated-backups-on-a-vps) (Web-Inhalte, Datenbanken, E-Mails, etc.).
2. Installieren Sie ein kompatibles Betriebssystem über das OVHcloud Kundencenter, erklärt in unserer Anleitung [Erste Schritte mit einem VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps) unter "Neuinstallation Ihres VPS".
3. Installieren von [cPanel](/pages/bare_metal_cloud/virtual_private_servers/cpanel) oder Plesk auf dem neuen System.
4. Daten aus Ihren Backups wiederherstellen.

**Option B - Migration über Plesk oder cPanel**

Diese Methode wird empfohlen, wenn Sie einen neuen VPS mit einem aktualisierten System zusammen mit dem alten bereitstellen können.

Bestellen Sie einen neuen VPS mit einem kompatiblen Betriebssystem, falls Sie dies noch nicht getan haben. Installieren Sie [cPanel](/pages/bare_metal_cloud/virtual_private_servers/cpanel) oder Plesk.

Verwenden Sie ein Tool zur Migration. Mit diesen Tools können Sie Ihre Websites, Datenbanken, E-Mail-Accounts und Konfigurationen automatisch von einem VPS auf einen anderen übertragen:

- Plesk Migrator - [Offizielle Dokumentation](https://docs.plesk.com/en-US/obsidian/migration-guide/introduction.75496/)
- cPanel Transfer Tool - [Official documentation](https://docs.cpanel.net/whm/transfers/transfer-tool/)

**Option C - Direktes Betriebssystem-Update ohne Neuinstallation oder Migration (erfahrene Benutzer)**

Wenn Sie keinen neuen VPS bereitstellen können, können Sie bestimmte Tools verwenden, um **Ihr Betriebssystem direkt zu aktualisieren**, während Plesk oder cPanel installiert bleibt. Diese Methode ist für fortgeschrittene Benutzer vorgesehen, da sie Risiken birgt, wenn sie falsch ausgeführt wird.

- **Plesk** (Wechsel von CentOS 7 zu AlmaLinux 8): Verwenden Sie das Skript `centos2alma`, wie in der [offiziellen Plesk-Dokumentation](https://github.com/plesk/centos2alma) erklärt. Siehe auch die ausführlichen Anweisungen in [Plesk Support](https://support.plesk.com/hc/en-us/articles/12377714344983).

- **cPanel** (Wechsel von CentOS 7 zu AlmaLinux 8): Verwenden Sie das Tool **Elevate**, wie in der [offiziellen cPanel-Dokumentation](https://cpanel.github.io/elevate/) beschrieben.

> [!primary]
>
> Für diese Tools wird keine Garantie übernommen und sollten nicht ohne vorherige vollständige genutzt werden. Stellen Sie außerdem sicher, dass Ihr VPS über ausreichende Ressourcen verfügt (RAM, CPU, Storage).

## Weiterführende Informationen <a name="go-further"></a>

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Treten Sie unserer [User Community](/links/community) bei.
