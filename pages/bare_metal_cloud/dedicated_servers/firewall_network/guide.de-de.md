---
title: "Die Edge Network Firewall für Dedicated Server konfigurieren"
excerpt: "Aktivieren und konfigurieren Sie die Edge Network Firewall, um eingehenden Traffic zu Ihrem OVHcloud Dedicated Server zu filtern."
updated: 2026-03-10
---

## Ziel

Zum Schutz von Kundendiensten, die über öffentliche IP-Adressen zugänglich sind, bietet OVHcloud eine zustandslose Firewall an, die in die **DDoS-Schutz-Infrastruktur** integriert ist: die Edge Network Firewall. Sie begrenzt die Anfälligkeit für DDoS-Angriffe, indem sie bestimmte Netzwerkdatenströme von außerhalb des OVHcloud Netzwerks verwirft.

**Diese Anleitung erklärt, wie Sie die Edge Network Firewall für Ihre Dienste konfigurieren.**

> [!primary]
>
> Weitere Informationen zu unserer Anti-DDoS-Lösung finden Sie auf [unserer Website](/links/security/antiddos).
>

| Diagramm der DDoS-Schutz-Infrastruktur und Game-Schutzdienste bei OVHcloud |
|:--:|
| ![global-schema](images/global_schema_2025.png){.thumbnail} |

## Voraussetzungen

- Sie verfügen über einen OVHcloud Dienst mit einer dedizierten öffentlichen IP-Adresse ([Dedicated Server](/links/bare-metal/bare-metal), [VPS](/links/bare-metal/vps), [Public Cloud Instanz](/links/public-cloud/public-cloud), [Hosted Private Cloud](/links/hosted-private-cloud/vmware), [Additional IP](/links/network/additional-ip) etc.).

<!-- CP-NAV-START:network-public-ip -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Public IP](/links/control-panel/network-public-ip)
- **Navigationspfad:** `Network`{.action} > `Öffentliche IP`{.action}

---
<!-- CP-NAV-END:network-public-ip -->

> [!warning]
> Diese Funktion kann nur eingeschränkt oder nicht verfügbar sein, falls ein Dedicated Server der [**Eco** Produktlinie](/links/bare-metal/eco-about) eingesetzt wird.
>
> Weitere Informationen finden Sie auf unserer [Vergleichsseite](/links/bare-metal/eco-compare).

> [!warning]
> Die Edge Network Firewall unterstützt das QUIC-Protokoll nicht.

## In der praktischen Anwendung

Die Edge Network Firewall reduziert die Anfälligkeit für DDoS-Angriffe im Netzwerk, indem sie es Benutzern ermöglicht, einige der Firewall-Regeln des Servers an den Rand des OVHcloud Netzwerks zu übertragen. Dadurch werden eingehende Angriffe so nahe wie möglich an ihrem Ursprung blockiert, was das Risiko einer Überlastung der Serverressourcen oder der Rack-Verbindungen im Falle größerer Angriffe verringert.

### Edge Network Firewall konfigurieren

Die Edge Network Firewall kann jederzeit vom Benutzer aktiviert oder deaktiviert werden, mit einer Ausnahme: Sie wird **automatisch aktiviert**, wenn ein DDoS-Angriff erkannt wird, und kann **nicht deaktiviert** werden, bis der Angriff beendet ist. Daher werden alle in der Firewall konfigurierten Regeln während der Dauer des Angriffs angewendet. Dank dieser Logik können unsere Kunden die Firewall-Regeln des Servers für die Dauer des Angriffs an den Rand des OVHcloud Netzwerks auslagern.

#### Zugriff auf die Konfigurationsseite der Edge Network Firewall

> [!primary]
>
> Derzeit ist diese Funktion nur für IPv4-Adressen verfügbar.
>

> [!primary]
>
> Die Edge Network Firewall schützt eine bestimmte, mit einem Server (oder Dienst) verbundene IP-Adresse. Wenn Sie also einen Server mit mehreren IP-Adressen haben, müssen Sie jede IP separat konfigurieren.
>

Sie können das Dropdown-Menü unter **"Meine öffentlichen IP-Adressen und dazugehörige Dienste"** verwenden, um Ihre Dienste nach Kategorie zu filtern, oder die gewünschte IP-Adresse direkt in die Suchleiste eingeben.

![Filter-Dienst](images/selectservice_cut_new.png){.thumbnail}

Klicken Sie anschließend auf die Schaltfläche `⁝`{.action} rechts neben der entsprechenden IPv4-Adresse und wählen Sie `Edge Network Firewall konfigurieren`{.action} (oder klicken Sie auf das Status-Symbol in der Spalte **Edge Firewall**).

![Aktivierung der Network Firewall](images/firewall_config_new.png){.thumbnail}

Sie werden dann zur Seite für die Firewall-Konfiguration weitergeleitet.

> [!primary]
>
> - Die UDP-Fragmentierung ist standardmäßig blockiert (DROP). Wenn Sie ein VPN verwenden, denken Sie daran, Ihre Maximum Transmission Unit (MTU) korrekt zu konfigurieren. Mit OpenVPN können Sie beispielsweise `MTU test` überprüfen.
> - Die Edge Network Firewall (ENF), die in den Scrubbing Centern (VAC) integriert ist, verarbeitet nur Netzwerkdatenverkehr von außerhalb des OVHcloud Netzwerks.
>

> [!warning]
> Bitte beachten Sie, dass Sie Ihre eigenen lokalen Firewalls unabhängig von der Edge Network Firewall konfigurieren sollten, da deren Hauptaufgabe die Verarbeitung von Traffic von außerhalb des OVHcloud Netzwerks ist.
>
> Wenn Sie Regeln konfiguriert haben, empfehlen wir Ihnen, diese regelmäßig zu überprüfen oder bei Änderungen an Ihren Diensten anzupassen. Wie bereits erwähnt, wird die Edge Network Firewall im Falle eines DDoS-Angriffs automatisch aktiviert, auch wenn sie in Ihren IP-Einstellungen deaktiviert ist.
>

### Firewall-Regeln konfigurieren

Sie können bis zu **20 Regeln pro IP** einrichten.

> [!primary]
> Seit März 2026 unterstützt die Edge Network Firewall Regeln, die für Portbereiche gelten, zusätzlich zu den üblichen Einzelport-Regeln.
>
> Durch die Verwendung von Portbereichen können Sie Anwendungen, die mehrere aufeinanderfolgende Ports benötigen, mit einem einzigen Eintrag schützen. So bleibt Ihre Konfiguration innerhalb des Limits von 20 Regeln, da keine separaten Regeln für jeden einzelnen Port erforderlich sind.

> [!warning]
> Bitte beachten Sie, dass die OVHcloud Edge Network Firewall nicht zum Öffnen von Ports auf einem Server verwendet werden kann. Um Ports auf einem Server zu öffnen, müssen Sie die Firewall des auf dem Server installierten Betriebssystems konfigurieren.
>
> Weitere Informationen finden Sie in den folgenden Anleitungen: [Firewall auf einem Windows Server konfigurieren](/pages/bare_metal_cloud/dedicated_servers/activate-port-firewall-soft-win) und [Konfiguration der Linux Firewall mit iptables](/pages/bare_metal_cloud/dedicated_servers/firewall-Linux-iptable).
>

**Um eine Regel hinzuzufügen**, klicken Sie oben links auf die Schaltfläche `+ Regel hinzufügen`{.action}:

| ![add-rule-btn](images/enf_add_rule_new.png) |
|:--:|
| Klicken Sie auf `+ Regel hinzufügen`{.action}. |

Für jede Regel (mit Ausnahme von TCP) müssen Sie Folgendes auswählen:

| ![add-rule-btn](images/enf_add_rule_no_tcp_new.png){.thumbnail} |
|:--|
| - Eine Priorität (von 0 bis 19, wobei 0 die erste anzuwendende Regel ist, gefolgt von den anderen) <br> - Eine Aktion (`Accept`{.action} oder `Deny`{.action}) <br> - Das Protokoll <br> - Quell-IP (optional) |

Für jede **TCP**-Regel müssen Sie Folgendes auswählen:

| ![add-rule-btn](images/enf_add_rule_tcp_new.png){.thumbnail} |
|:--|
| - Eine Priorität (von 0 bis 19, wobei 0 die erste anzuwendende Regel ist, gefolgt von den anderen) <br> - Eine Aktion (`Accept`{.action} oder `Deny`{.action}) <br> - Das Protokoll <br> - Quell-IP (optional) <br> - Der Quellport oder Portbereich (optional) <br> - Der Zielport oder Portbereich (optional) <br> - Der TCP-Status (optional) <br> - Fragmente (optional) |

Wenn Sie eine TCP- oder UDP-Regel mit einem Port oder Portbereich konfigurieren, stellen Sie sicher, dass die Felder für Quell- und Zielport entweder eine einzelne Nummer zwischen 1 und 65535 (einschließlich) oder einen Portbereich (zwei durch einen Bindestrich getrennte Nummern, z.B. 8887-8888) enthalten.

> [!primary]
> Es wird empfohlen, das TCP-Protokoll mit der Option "established" zuzulassen (für Pakete, die Teil einer zuvor geöffneten/gestarteten Sitzung sind), ICMP-Pakete (für Ping und Traceroute) und optional UDP-DNS-Antworten von externen Servern (wenn Sie externe DNS-Server verwenden).
>
> **Konfigurationsbeispiel:**
>
> - Priorität 0: TCP "established" zulassen
> - Priorität 1: UDP zulassen, Quellport 53
> - Priorität 2: ICMP zulassen
> - Priorität 19: IPv4 ablehnen

> [!warning]
> Firewall-Konfigurationen, die nur `Accept`-Regeln enthalten, sind nicht wirksam. Es muss eine Anweisung geben, welcher Traffic von der Firewall abgelehnt werden soll. Es wird eine Warnung angezeigt, falls eine solche `Deny`-Regel nicht erstellt wurde.
>

**Firewall aktivieren/deaktivieren:**

| ![activate-desactivate](images/enf_enable_disable_new.png) |
|:--:|
| `Einschalten`{.action} zum Aktivieren |

Nach der Bestätigung wird die Firewall aktiviert bzw. deaktiviert.

Beachten Sie, dass Regeln deaktiviert bleiben, bis ein Angriff erkannt wird, und dann aktiviert werden. Diese Logik kann für Regeln verwendet werden, die nur bei einem bekannten, wiederkehrenden Angriff aktiv sein sollen.

### Häufige Fehler und Best Practices

#### Gleichzeitiges Festlegen von Quell- und Zielport in derselben Regel

Beim Erstellen von Firewall-Regeln ist die gleichzeitige Definition von Quell- und Zielport in der Regel eine Fehlkonfiguration, da Quellports typischerweise vom Betriebssystem des Clients zufällig zugewiesen werden (ephemere Ports).

Wenn Sie eine Regel auf einen bestimmten Quellport beschränken, wird sie wahrscheinlich legitimen Traffic verwerfen, sobald sich der Port des Clients bei der nächsten Sitzung ändert. Um die Konnektivität sicherzustellen, sollten Sie nur den Zielport (Ihren Serviceport) angeben.

**Best Practice:** Lassen Sie den Quellport leer, es sei denn, Sie filtern Traffic von einem spezialisierten System mit einer statischen ausgehenden Konfiguration.

#### Große Portbereiche

Das Erstellen von Regeln, die Traffic über sehr große Portbereiche zulassen, kann ein Sicherheitsrisiko darstellen, da es die Angriffsfläche auf Ihrem Server erheblich vergrößert. Dies kann zu verschiedenen Problemen führen:

- Sie können unbeabsichtigt Hintergrunddienste freilegen, die nicht öffentlich zugänglich sein sollten, wodurch möglicherweise Informationen über Ihr System preisgegeben werden und böswillige Akteure Ihre Server auf Schwachstellen untersuchen können.
- Audit und Fehlerbehebung werden erheblich schwieriger, da es schwerer ist, festzustellen, welche Anwendungen tatsächlich kommunizieren, was potenzielle Fehlkonfigurationen oder Sicherheitsverletzungen verschleiern kann.
- Große offene UDP-Bereiche werden häufig für Amplification- und Reflection-Angriffe ausgenutzt, da die Wahrscheinlichkeit höher ist, öffentlich zugängliche Dienste zu finden. Angreifer können eine Ziel-IP fälschen, um kleine Anfragen an Dienste in diesem offenen Bereich zu senden, die dann mit deutlich größeren Paketen antworten. Auf diese Weise wird Ihr Server effektiv zum Versenden von DDoS-Angriffen missbraucht, während gleichzeitig Ihre eigene Bandbreite überlastet werden kann.

**Best Practice:** Verwenden Sie nur begrenzte Bereiche für aufeinanderfolgende Ports, die von einer einzelnen Anwendung benötigt werden (z.B. 5000-5100).

### Konfigurationsbeispiel

Um sicherzustellen, dass bei der Autorisierung von ICMP nur die Standardports für SSH (22), HTTP (80), HTTPS (443) und UDP (53) geöffnet bleiben, verwenden Sie die folgenden Regeln:

![Konfigurationsbeispiel](images/exemple.png){.thumbnail}

Die Regeln werden von 0 (die erste gelesene Regel) bis 19 (die letzte) sortiert. Die Regelkette wird beendet, sobald eine Regel auf das Paket angewendet wird.

Beispiel: Ein Paket für TCP-Port 80 wird von Regel 2 abgefangen und die folgenden Regeln werden nicht angewendet. Ein Paket für TCP-Port 25 wird nur von der letzten Regel (19) erfasst, die es blockiert, da die Firewall in den vorherigen Regeln keine Kommunikation auf Port 25 zulässt.

> [!warning]
> Die oben stehende Konfiguration dient nur als Beispiel und sollte nur als Referenz verwendet werden, wenn die Regeln nicht auf die auf Ihrem Server gehosteten Dienste zutreffen. Es ist wichtig, dass Sie die Regeln in Ihrer Firewall so konfigurieren, dass sie mit den auf Ihrem Server gehosteten Diensten übereinstimmen. Eine falsche Konfiguration der Firewall-Regeln kann dazu führen, dass legitimer Traffic blockiert wird und auf Serverdienste nicht zugegriffen werden kann.
>

### Angriffsminderung - Aktivität im Scrubbing Center

Unsere DDoS-Schutz-Infrastruktur (VAC) arbeitet automatisch. Der Schutzprozess erfolgt über das automatisierte Scrubbing Center. Dort untersucht unsere fortschrittliche Technologie die Datenpakete eingehend und versucht, den DDoS-Datenverkehr zu entfernen, während der legitime Datenverkehr durchgelassen wird.

Alle OVHcloud IPs unterliegen der automatischen Mitigation. Wird schädlicher Traffic erkannt, wird das Scrubbing Center aktiviert. Dieser Zustand wird durch den Status "Erzwungen" für eine bestimmte IP-Adresse angezeigt. Zu diesem Zeitpunkt ist auch die Edge Network Firewall aktiv. Die Situation normalisiert sich wieder, wenn der Angriff abgemildert wurde und keine verdächtigen Aktivitäten mehr beobachtet werden.

> [!success]
> **Tipps**
>
> Sie können Firewall-Regeln erstellen, die nur nach Erkennung eines Angriffs gelten. Dazu müssen Edge Network Firewall-Regeln erstellt, aber deaktiviert werden.
>

> [!warning]
> Wenn unsere DDoS-Schutz-Infrastruktur einen Angriff abwehrt, werden Ihre Edge Network Firewall-Regeln letztendlich angewendet, auch wenn Sie die Firewall deaktiviert haben. Wenn Sie Ihre Firewall deaktiviert haben, vergessen Sie nicht, auch Ihre Regeln zu löschen.
>
> Bitte beachten Sie, dass unsere DDoS-Schutz-Infrastruktur für einen Dienst nicht deaktiviert werden kann. Alle OVHcloud Produkte werden im Rahmen des Schutzes bereitgestellt und dies kann nicht geändert werden.
>

## Network Security Dashboard

Detaillierte Einblicke in erkannte Angriffe und die Ergebnisse der Aktivitäten des Scrubbing Centers erhalten Sie in unserem [Network Security Dashboard](/pages/bare_metal_cloud/dedicated_servers/network_security_dashboard).

## Fazit

Nachdem Sie diese Anleitung gelesen haben, sollten Sie in der Lage sein, die Edge Network Firewall zu konfigurieren, um die Sicherheit Ihrer OVHcloud Dienste zu verbessern.

## Weiterführende Informationen

- [Einen Game Server mit der Application Firewall schützen](/pages/bare_metal_cloud/dedicated_servers/firewall_game_ddos)

- [Configuring Anti-DDoS for Solana on Dedicated Servers](/pages/bare_metal_cloud/dedicated_servers/blockchain_anti_ddos)

Treten Sie unserer [User Community](/links/community) bei.
