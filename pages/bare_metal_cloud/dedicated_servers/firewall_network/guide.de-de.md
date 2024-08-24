---
title: Aktivieren und Konfigurieren der Edge Network Firewall
excerpt: Erfahren Sie hier, wie Sie die Edge Network Firewall konfigurieren
updated: 2024-01-05
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Zum Schutz von Diensten, die über öffentliche IP-Adressen zugänglich sind, bietet OVHcloud eine konfigurierbare Firewall an, die in unsere **DDoS-Schutz-Infrastruktur** integriert ist: Edge Network Firewall. Mithilfe dieser Option kann die Anfälligkeit der Dienste für Angriffe von außerhalb des OVHcloud Netzwerks begrenzt werden.

**Diese Anleitung erklärt, wie Sie die Edge Network Firewall für Ihre Dienste konfigurieren.**

> [!primary]
>
> Weitere Informationen zu unserer Anti-DDoS-Lösung finden Sie hier: <https://www.ovhcloud.com/de/security/anti-ddos/>.
> 

| ![global-schema](images/global_schema.png) | 
|:--:| 
| Diagramm zu DDoS-Schutz & Infrastruktur bei OVHcloud |

## Voraussetzungen 

- Sie haben eine OVHcloud Dienstleistung abonniert, die über eine dedizierte öffentliche IP-Adresse erreichbar ist ([Dedicated Server](/links/bare-metal/bare-metal), [VPS](https://www.ovhcloud.com/de/vps/), [Public Cloud Instanz](https://www.ovhcloud.com/de/public-cloud/), [Hosted Private Cloud](https://www.ovhcloud.com/de/hosted-private-cloud/), [Additional IP](https://www.ovhcloud.com/en-gb/network/additional-ip/), etc.).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

> [!warning]
> Diese Funktion kann nur eingeschränkt oder nicht verfügbar sein, falls ein Dedicated Server der [**Eco** Produktlinie](https://eco.ovhcloud.com/de/about/) eingesetzt wird.
>
> Weitere Informationen finden Sie auf der [Vergleichsseite](https://eco.ovhcloud.com/de/compare/).

## In der praktischen Anwendung

Die Edge Network Firewall reduziert die Anfälligkeit für DDoS-Angriffe im Netzwerk, indem sie es Benutzern ermöglicht, einige der Firewall-Regeln des Servers an den Rand des OVHcloud Netzwerks zu übertragen. Dadurch werden eingehende Angriffe so nahe wie möglich an ihrem Ursprung blockiert, was das Risiko einer Überlastung der Ressourcen oder der Rack-Verbindungen im Falle größerer Angriffe verringert.

### Edge Network Firewall aktivieren

> [!primary]
>
> Die Edge Network Firewall schützt eine bestimmte, mit einem Server (oder Dienst) verbundene IP. Wenn Sie also einen Server mit mehreren IP-Adressen haben, müssen Sie jede IP separat konfigurieren.
> 

Klicken Sie im OVHcloud Kundencenter auf den Bereich `Bare Metal Cloud`{.action} und anschließend auf das Menü `Netzwerk`{.action}} links. Gehen Sie zum Tab `Öffentliche IP Adressen`{.action}. Über das Dropdown-Menü unter **Meine öffentlichen IP-Adressen und zugehörige Dienste** können Sie Ihre Dienste nach Kategorien filtern.

![filter service](images/selectservice_cut.png){.thumbnail}

Klicken Sie anschließend rechts neben der IPv4 auf `...`{.action} und wählen Sie `Firewall erstellen`{.action}.

![Netzwerkfirewall aktivieren](images/firewallcreation2022.png){.thumbnail}

Sie werden dann um Bestätigung gebeten. Die Firewall wird erstellt, und Sie können die Regeln konfigurieren.

> [!primary]
> Die Schaltfläche `Firewall erstellen`{.action} ist nur für IPs verfügbar, für die keine Firewall konfiguriert wurde. Wenn Sie Ihre Firewall nicht zum ersten Mal konfigurieren, können Sie diesen Schritt überspringen. 
>

| ![Konfiguration wird aktiviert](images/activationconfig.png) | 
|:--:| 
| Klicken Sie auf `Edge Network Firewall Konfiguration`{.action}, um mit der Konfiguration zu beginnen. |

Auf dieser Seite können Sie die Firewall über den Slider-Button **aktivieren** oder **deaktivieren**.
Weiter unten wird die alternative Vorgehensweise beschrieben.

Sie können bis zu **20 Regeln pro IP** einrichten.

> [!warning]
>
> Die Edge Network Firewall wird automatisch aktiviert, wenn ein DDoS-Angriff erkannt wird, und kann erst nach Beendigung des Angriffs deaktiviert werden. Daher werden alle in der Firewall konfigurierten Regeln während der Dauer des Angriffs angewendet. Dank dieser Vorgehensweise können unsere Kunden die Firewall-Regeln des Servers für die Dauer des Angriffs an den Rand des OVHcloud Netzwerks verschieben.
>
> Beachten Sie, dass Sie Ihre eigenen lokalen Firewalls unabhängig von der Edge Network Firewall konfigurieren sollten. Die Edge Network Firewall hat die Funktion, Traffic von außerhalb des OVHcloud Netzwerks verarbeiten.
>
> Wenn Sie einige Regeln konfiguriert haben, empfehlen wir Ihnen, diese regelmäßig zu überprüfen oder zu ändern, je nach Bedarf Ihrer Dienste. Wie bereits erwähnt, wird die Edge Network Firewall im Falle eines DDoS-Angriffs automatisch aktiviert, selbst wenn sie in den IP-Einstellungen deaktiviert ist.
>

> [!primary]
>
> - UDP-Fragmentierung ist standardmäßig blockiert (*DROP*). Wenn Sie die Edge Network Firewall aktivieren und einen VPN verwenden, denken Sie daran, die maximale Übertragungseinheit (MTU) ordnungsgemäß zu konfigurieren. Mit OpenVPN zum Beispiel können Sie `MTU test` überprüfen.
> - Die Edge Network Firewall (ENF), die in den Scrubbing Centern (VAC) integriert ist, verarbeitet nur Netzwerkdatenverkehr von außerhalb des OVHcloud Netzwerks.
>

### Konfigurieren der Edge Network Firewall

> [!warning]
> Beachten Sie, dass die OVHcloud Edge Network Firewall nicht zum Öffnen von Ports auf einem Server verwendet werden kann. Um Ports auf einem Server zu öffnen, müssen Sie die Firewall des auf dem Server installierten Betriebssystems konfigurieren. 
>
> Weitere Informationen finden Sie in unseren Anleitungen: [Firewall auf einem Windows Server konfigurieren](/pages/bare_metal_cloud/dedicated_servers/activate-port-firewall-soft-win) und [Konfiguration der Linux Firewall mit iptables](/pages/bare_metal_cloud/dedicated_servers/firewall-linux-iptable).
>

**Hinzufügen einer Regel:**

| ![add-rule-btn](images/enf_add_rule.png) | 
|:--:| 
| Auf `Regel hinzufügen`{.action} klicken |

Für jede Regel (mit Ausnahme von TCP) müssen Sie Folgendes auswählen:

| ![add-rule-btn](images/enf_add_rule_other_than_tcp.png) | 
|:-| 
| &bull; Eine Priorität (0 bis 19, wobei 0 die erste anzuwendende Regel ist) <br>&bull; Eine Aktion (`Accept`{.action} oder `Deny`{.action}) <br>&bull; Das Protokoll <br>&bull; Quell-IP (optional) |

Für jede **TCP**-Regel müssen Sie Folgendes auswählen:

| ![add-rule-btn](images/enf_add_rule_tcp.png) | 
|:-| 
| &bull; Eine Priorität (0 bis 19, 0 ist die erste anzuwendende Regel, gefolgt von den anderen) <br>&bull; Eine Aktion (`Accept`{.action} oder `Deny`{.action}) <br>&bull; Das Protokoll <br>&bull; Quell-IP (optional) <br>&bull; Der Quell-Port (optional) <br>&bull; Der Ziel-Port (optional) <br>&bull; Der TCP-Status (optional) <br>&bull; Fragmente (optional)|

> [!primary]
> Es wird empfohlen, TCP mit der Option `established` zuzulassen (für Pakete, die Teil einer zuvor gestarteten Sitzung sind), außerdem ICMP-Pakete (für Ping und Traceroute) und optional DNS-Antworten über UDP von externen Servern (wenn Sie externe DNS-Server verwenden).
>
> **Konfigurationsbeispiel:**
>
> - Priorität 0: TCP `established` zulassen
> - Priorität 1: UDP zulassen, Quellport 53
> - Priorität 2: ICMP zulassen
> - Priorität 19: IPv4 ablehnen

> [!warning]
> Firewall-Setups, die nur akzeptierende Regeln enthalten, sind nicht wirksam. Es muss eine Anweisung geben, welcher Traffic von der Firewall abgelehnt werden soll. Es wird eine Warnung angezeigt, falls eine solche *Deny*-Regel nicht existiert.
> 

**Firewall aktivieren:**

| ![activate-desactivate](images/enf_enabled_button_01.png) | 
|:--:| 
| `Umschalten`{.action} zum Aktivieren |

Nach der Bestätigung wird die Firewall aktiviert.

**Firewall deaktivieren:**

| ![activate-desactivate](images/enf_enabled_button_04.png) | 
|:--:| 
| `Umschalten`{.action} zum Deaktivieren |

Nach der Bestätigung wird die Firewall deaktiviert.

Regeln bleiben deaktiviert, bis ein Angriff erkannt wird und werden dann aktiv. Diese Logik kann für Regeln verwendet werden, die nur aktiv sein sollen, wenn ein bekannter wiederholter Angriff eintrifft.

### Konfigurationsbeispiel

Um sicherzustellen, dass bei der Autorisierung des ICMP nur die Standardports für SSH (22), HTTP (80), HTTPS (443) und UDP (53) geöffnet bleiben, können Sie die folgenden Regeln einsetzen:

![Konfigurationsbeispiel](images/exemple.png){.thumbnail}

Die Regeln werden von 0 (erste Regel) bis 19 (letzte Regel) sortiert. Die Regelkette wird beendet, sobald eine Regel auf das Paket angewendet wird.

Beispiel: Ein Paket für den TCP-Port 80 wird von Regel 2 abgefangen und die folgenden Regeln werden nicht angewendet. Ein Paket für den TCP-Port 25 wird nur von der letzten Regel (19) erfasst, die es blockiert, da die Firewall in den vorherigen Regeln keine Kommunikation auf Port 25 zulässt.

> [!warning]
> Die oben stehende Konfiguration dient als Beispiel und sollte nur als Referenz verwendet werden, wenn die Regeln nicht auf die auf Ihrem Server gehosteten Dienste zutreffen. Es ist wichtig, dass Sie die Regeln in Ihrer Firewall so konfigurieren, dass sie mit den auf Ihrem Server gehosteten Diensten übereinstimmen. Eine falsche Konfiguration der Firewall-Regeln kann dazu führen, dass legitimer Traffic blockiert wird und auf Serverdienste nicht zugegriffen werden kann.
> 

### Schutz vor Angriffen - Aktivität im Scrubbing Center

Unsere Anti-DDoS-Infrastruktur (VAC) verfügt über zwei Betriebsmodusse: **automatisch** und **permanent**. Der Schutz erfolgt über das automatische Scrubbing Center. In diesem Bereich untersucht unsere Technik die Datenpakete und versucht, den DDoS-Datenverkehr zu entfernen, während der legitime Datenverkehr durchgelassen wird.

- **Automatische Abwehr** ist die Standardeinstellung: Alle IPs von OVHcloud werden automatisch protektiert. In der Regel ist dies die beste Wahl für Ihre Dienste. Wird illegitimer Traffic entdeckt, wird das Scrubbing Center aktiviert. Dies wird durch den Status „Erzwungen“ für eine bestimmte IP-Adresse angezeigt. Zu diesem Zeitpunkt ist auch die Edge Network Firewall aktiv. Die Situation normalisiert sich wieder, wenn der Angriff abgemildert wurde und keine verdächtigen Aktivitäten mehr beobachtet werden.

- **Der permanente Schutz** kann über das OVHcloud Kundencenter aktiviert und deaktiviert werden. Bei permanentem Schutz wird die erste Filterstufe permanent angewendet, damit der gesamte Traffic das Schutzsystem durchläuft, bevor er den Server erreicht. Es wird davon abgeraten, diese Option über längere Zeiträume zu aktivieren, es sei denn, Sie bemerken starke Latenzschwankungen, da das Scrubbing Center den Traffic zu häufig umleitet.

Beachten Sie, dass im Vergleich zum automatischen Modus **keine** Erhöhung des Schutzniveaus erreicht wird, wenn dieser Modus aktiviert ist.

So aktivieren Sie die Funktion:

- Klicken Sie auf das Menü `Bare Metal Cloud`{.action}.
- Gehen Sie zu `Netzwerk`{.action} in der linken Seitenleiste.
- Gehen Sie zum Abschnitt `IP`{.action}.

| ![menu-ipv4](images/mitigation_menu.png) | 
|:--:| 
| Als Nächstes klicken Sie auf die Schaltfläche `...`{.action} rechts von der betreffenden IPv4. |


| ![mitigation-option](images/mitigation_menu_step_2.png) |
|:--:| 
| Wählen Sie `Mitigation: Permanent mode`{.action}. |



> [!success]
> **Hinweis**
>
> Sie können Firewall-Regeln erstellen, die nur dann gelten, wenn ein Angriff entdeckt wurde. Hierzu müssen Edge Network Firewall-Regeln erstellt, aber deaktiviert werden.
>

> [!warning]
> Wenn unsere Anti-DDoS-Infrastruktur einen Angriff abwehrt, werden die Regeln der Edge Network Firewall angewendet, selbst wenn Sie die Firewall deaktiviert haben. Wenn Ihre Firewall deaktiviert bleiben soll, vergessen Sie nicht, auch Ihre Regeln zu löschen.
> 
> Beachten Sie, dass unsere DDoS-Schutz-Infrastruktur für einen Dienst nicht deaktiviert werden kann. Alle OVHcloud Produkte werden im Rahmen des Schutzes geliefert und können nicht ausgenommen werden.
>


## Network Security Dashboard

Detaillierte Einblicke in entdeckte Angriffe und die Ergebnisse der Aktivitäten des Scrubbing Centers erhalten Sie in unserem [Network Security Dashboard](/pages/bare_metal_cloud/dedicated_servers/network_security_dashboard).


## Fazit

Nachdem Sie dieses Tutorial gelesen haben, sollten Sie in der Lage sein, die Edge Network Firewall zu konfigurieren, um die Sicherheit Ihrer OVHcloud Dienste zu verbessern.

## Weiterführende Informationen

[Game Server mit der Application Firewall schützen](/pages/bare_metal_cloud/dedicated_servers/firewall_game_ddos)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
