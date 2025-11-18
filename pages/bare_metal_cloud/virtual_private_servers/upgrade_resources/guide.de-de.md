---
title: "Upgrade der Ressourcen eines VPS"
excerpt: "Erfahren Sie hier, wie Sie RAM, vCPU und Speicherplatz im OVHcloud Kundencenter upgraden können"
updated: 2025-09-08
---

<style> details>summary { color:rgb(33, 153, 232) !important; cursor: pointer; } details>summary::before { content:'\25B6'; padding-right:1ch; } details[open]>summary::before { content:'\25BC'; } </style>

## Ziel

Unsere VPS-Dienste bieten Flexibilität, Zuverlässigkeit und Leistung für verschiedene Hosting-Anforderungen. Sie können Upgrades Ihres Arbeitsspeichers, vCPU oder Speicherplatzes direkt im [OVHcloud Kundencenter](/links/manager) durchführen.

**Diese Anleitung erklärt, wie Sie Ihrem VPS vCores, Speicherplatz und Arbeitsspeicher hinzufügen.** 

## Voraussetzungen

- Sie haben einen [VPS](/links/bare-metal/vps) in Ihrem OVHcloud Kundencenter.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein, gehen Sie in den Bereich `Bare Metal Cloud`{.action} und wählen Sie links im Menü unter `Virtual Private Server`{.action} Ihren Server aus.

> [!primary]
>
> Die im Kundencenter verfügbaren Upgrade-Optionen hängen von der Reihe und dem Modell des ausgewählten VPS ab. Die unten angezeigten Screenshots dienen lediglich der Veranschaulichung und beziehen sich nicht auf ein konkretes VPS-Upgrade-Szenario.

Von hier aus können Sie vCores (`1`), RAM (`2`) oder Speicherplatz (`3`) erhöhen.

![Ressourcen upgraden](images/vps_upgrade01.png){.thumbnail}

### 1. So fügen Sie **vCores** hinzu

Unter dem Tab **Start** im Panel **Ihre Konfiguration** klicken Sie auf `vCores hinzufügen und dazu zur nächsthöheren Serverreihe wechseln`{.action}.

Wählen Sie ein neues Modell aus und klicken Sie auf `Weiter`{.action}.

![Ressourcen upgraden](images/vps_upgrade02.png){.thumbnail}

Wählen Sie Ihre RAM- und Speicheroptionen aus und klicken Sie auf `Weiter`{.action}.

![Ressourcen upgraden](images/vps_upgrade03.png){.thumbnail}

Akzeptieren (`☑`{.action}) Sie die **Nutzungsbedingungen** und klicken Sie auf `Weiter`{.action}.

![Ressourcen upgraden](images/vps_upgrade04.png){.thumbnail}

Überprüfen Sie Ihre Änderungen und klicken Sie auf `Bestellen`{.action}.

![Ressourcen upgraden](images/vps_upgrade05.png){.thumbnail}

### 2. So upgraden Sie den **Arbeitsspeicher**

Im Tab **Start** im Panel **Ihre Konfiguration** klicken Sie auf den Arbeitsspeicher, auf den Sie upgraden möchten. Die verfügbaren Optionen hängen von der VPS-Reihe ab, die Sie derzeit nutzen.

Klicken Sie im Popup-Fenster auf `Bestätigen und bezahlen`{.action}, um Ihre Bestellung abzuschließen.

![Ressourcen upgraden](images/vps_upgrade06.png){.thumbnail}

### 3. So upgraden Sie den **Speicherplatz**

Im Tab **Start** im Panel **Ihre Konfiguration** klicken Sie auf den Speicher, auf den Sie upgraden möchten. Die verfügbaren Optionen hängen von der VPS-Reihe ab, die Sie derzeit nutzen.

Klicken Sie im Pop-up-Fenster auf `Bestätigen und bezahlen`{.action}, um Ihre Bestellung abzuschließen.

![Ressourcen upgraden](images/vps_upgrade07.png){.thumbnail}

Lesen Sie unsere dedizierte Anleitung für die nächsten Schritte: [VPS-Partitionierung nach einem Storage-Upgrade](/pages/bare_metal_cloud/virtual_private_servers/upsize_vps_partition)

## FAQ

/// details | Behalte ich die gleiche IP-Adresse?

Ja, Sie behalten die IP-Adresse nach dem Upgrade Ihres VPS.

///

/// details | Behalte ich meine Daten auf dem Server?

Ja, nach einem Upgrade behalten Sie Ihre Daten. Wenn Sie Ihre Disk upgraden, müssen Sie möglicherweise die Partitionen erweitern.

///

/// details | Was passiert mit der Sicherung/Snapshot? Kann ich sie auf dem neuen VPS verwenden?

Ja. Nach einem Upgrade haben Sie weiterhin Zugriff auf Ihre Backups und Snapshots.

///

/// details | Was passiert mit der Software-Lizenz auf dem alten VPS? Kann sie automatisch auf das neue VPS übertragen werden?

Wenn Sie eine aktive Lizenz haben, bleibt sie an das VPS gebunden. Die Preise können je nach Lizenzvereinbarung oder Anforderungen des Anbieters geändert werden.  
Wenn es Änderungen an der Lizenz gibt, werden sie vor dem Upgrade des VPS erläutert.

///

/// details | Ändert sich die Bandbreite?

In einigen Fällen kann sich die Bandbreite ändern, insbesondere wenn Sie von einer VPS-Reihe auf eine höhere Reihe umsteigen.

///

/// details | Wird das Upgrade sofort wirksam, oder habe ich Zeit, beide gleichzeitig zu verwenden (konfigurieren, Daten übertragen usw.)?

Das Upgrade wird sofort wirksam und bewahrt alle Ihre Daten. Durch das Upgrade werden mehr Ressourcen Ihrem bestehenden VPS zugewiesen.

///


## Weiterführende Informationen

[VPS FAQ](/pages/bare_metal_cloud/virtual_private_servers/vps-faq)

Treten Sie unserer [User Community](/links/community) bei.