---
title: "Bare Metal 3-AZ Region - Vorstellung des Angebots"
excerpt: "Entdecken Sie den Bare Metal 3-AZ Dienst, der eine unübertroffene Hochverfügbarkeit und Redundanz zwischen drei Rechenzentren bietet"
updated: 2025-06-04
---

## Ziel

OVHcloud bietet Bare-Metal-Dienste in der [3-AZ-Region](/links/bare-metal/regions) an. Dies ist ein wichtiger Schritt in der Regionalisierungsstrategie des Unternehmens. Dieser Dienst, der im Großraum Paris verfügbar ist, stellt einen neuen Branchenstandard für die Zuverlässigkeit und Leistung von Bare-Metal-Servern dar.

Bare Metal in der 3-AZ-Region erfüllt die Anforderungen von Kunden, die hohe Verfügbarkeit und Redundanz zur Sicherstellung von Business Continuity benötigen. Dieser Dienst bietet Bare-Metal-Server in drei Rechenzentren in der Nähe von Paris, die über ein Netzwerk mit niedrigen Latenzen verbunden sind. Sie bietet erhöhte Sicherheit, verbesserte Leistung und unterbrechungsfreie Funktionen, selbst bei lokalen Unterbrechungen.

> [!primary]
>
> **Wichtiger Hinweis - Weiterentwicklung von Bare Metal 3-AZ**
>
> Ab Mai 2025 entwickelt sich das Liefermodell für Bare Metal Server in der Region Paris 3-AZ deutlich weiter. Das Modell der obligatorischen Bereitstellung in Clustern mit 3 Servern (einer pro Verfügbarkeitszone) wird eingestellt.
>
> **Wichtigste Änderungen:**
>
> - Kunden können nun frei die genaue Anzahl der benötigten Server auswählen.
> - Die Verteilung von Servern über verschiedene Verfügbarkeitszonen (AZ) kann individuell angepasst werden.
> - Keine Verpflichtung zur gleichzeitigen Bereitstellung in allen drei Zonen.
>
> Die hier beschriebenen Schritte, insbesondere zur obligatorischen Cluster-Bereitstellung und möglicherweise zur Nutzererfahrung, die dieses Modell widerspiegelt, gelten in erster Linie für Kunden, deren Server *vor Mai 2025* unter dem vorherigen Cluster-Modell ausgeliefert wurden. Neue Deployments ab Mai 2025 profitieren von der Flexibilität der neuen Möglichkeiten und einer angepassten Benutzeroberfläche. Bei Fragen zu dieser Weiterentwicklung oder zur Anpassung Ihrer bestehenden Infrastruktur können Sie sich an Ihren Account Manager oder den OVHcloud Support wenden.
>

## Übersicht

### Zweck des Dienstes

Der Wert der 3-AZ-Region liegt im Angebot von drei identischen Servern, die über drei Verfügbarkeitszonen in derselben Region verteilt sind. Diese Konfiguration gewährleistet eine hohe Verfügbarkeit und Datenredundanz, während die Betriebskontinuität gewahrt bleibt und das Risiko von Datenverlusten reduziert wird. Die unternehmenskritische Serververteilung minimiert die Latenz und verbessert die Anwendungsleistung.

### Regionalisierung bei OVHcloud

OVHcloud ist weltweit tätig, insbesondere in Europa, den USA, Kanada und im Asien-Pazifik-Raum. Die Einführung des Regionalkonzepts und der Support von Verfügbarkeitszonen ist eine strategische Initiative, die darauf abzielt, Kunden optimale Leistung und Resilienz zu bieten. Die Region Paris ist die erste Region, die das 3-AZ-Modell einführt.

### Tipps zur Auswahl der Region

Für eine optimale Leistung sollte eine Region so nah wie möglich an den Benutzern ausgewählt werden. Um weltweit verfügbar zu sein, müssen die Dienste über mehrere Regionen verteilt sein. Die 3-AZ-Region ist ideal für Kunden, die höchste Resilienz suchen, und sollte für die Erstellung von Multi-AZ-Anwendungsentwürfen verwendet werden.

Im [OVHcloud Kundencenter](/links/manager) können Sie Ihre Cluster in der Liste der `Dedicated Server`{.action} im Menü `Bare Metal Cloud`{.action} sehen, indem Sie zum Tab `3-AZ Cluster`{.action} wechseln.

![list_clusters](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/dedicated-servers/general-information/clusters1.png){.thumbnail}

Klicken Sie auf den Cluster-Namen in der Tabelle, um die Details anzuzeigen.

![list_clusters](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/dedicated-servers/general-information/clusters2.png){.thumbnail}

Klicken Sie auf den Tab `Nodes`{.action}, um die Serverliste des Clusters zu öffnen.

![list_clusters](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/dedicated-servers/general-information/clusters3.png){.thumbnail}

Durch Klicken auf einen Server-/Knotennamen in dieser Liste öffnet sich der Tab `Allgemeine Informationen`{.action} des Servers. Einzelheiten zu diesem Bereich finden Sie in unserer Anleitung:

[Erste Schritte mit einem Dedicated Server](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)

## Weiterführende Informationen <a name="go-further"></a>

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
