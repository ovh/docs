---
title: Game Server mit der Application Firewall schützen
excerpt: Erfahren Sie hier, wie Sie die OVHcloud GAME DDoS Firewall konfigurieren
updated: 2023-12-19
--- 

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

In dieser Anleitung wird die Funktionsweise des GAME DDoS-Schutzes (GAME Firewall) erläutert und Anweisungen zur Konfiguration eines effektiven Schutzes für unterstützte Server zu geben.

> [!primary]
> Weitere Informationen zum GAME DDoS-Schutz finden Sie auf unserer Website: <https://www.ovhcloud.com/de/security/game-ddos-protection/>.
> 

Unsere Bare Metal Game Dedicated Server sind mit einem DDoS-Schutz ausgestattet, der speziell entwickelt wurde, um Gaming-Anwendungen vor gezielten Angriffen zu schützen und Stabilität und Zugänglichkeit für Gamer zu gewährleisten. Diese Lösung für dedizierten Schutz ist sowohl robust als auch einfach zu bedienen. So können Sie sich auf die Entwicklung Ihres Unternehmens konzentrieren, ohne von Maßnahmen gegen Cyberkriminalität abgelenkt zu sein.

| ![global-schema](images/global_schema_focus_game.png) |
|:--:|
| Diagramm zu DDoS-Schutz & Infrastruktur bei OVHcloud |

## Voraussetzungen 

- Sie haben einen [OVHcloud **Game** Dedicated Server](/links/bare-metal/bare-metalprices/#filterType=range_element&filterValue=game)
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

> [!warning]
> Diese Funktion kann nur eingeschränkt oder nicht verfügbar sein, falls ein Dedicated Server der [**Eco** Produktlinie](https://eco.ovhcloud.com/de/about/) eingesetzt wird.
>
> Weitere Informationen finden Sie auf der [Vergleichsseite](https://eco.ovhcloud.com/de/compare/).

## In der praktischen Anwendung

### Einführung

Die Anti-DDoS-Infrastruktur sorgt zusammen mit der Edge Network Firewall dafür, dass das Netzwerk vor gängigen Bedrohungen geschützt ist (hauptsächlich durch ISO OSI Ebenen 3 und 4). Allerdings kann das Hosting von Spieleanwendungen eine Herausforderung in Bezug auf die Netzwerksicherheit darstellen. Der GAME DDoS Schutz setzt hier als spezielle Lösung an: Es handelt es sich um eine Layer 7 Application Firewall, die auf den Schutz bestimmter Gaming-Protokolle fokussiert ist (in der Regel über UDP). Die Hauptvorteile:

- **Distanz**: Latenz und ihre Stabilität sind für Gaming entscheidend. Diese Lösungen befinden sich so nahe wie möglich an den Servern und arbeiten mit dedizierter Hardware zusammen.
- **2-Wege**: Die Plattform analysiert den ein- und ausgehenden Traffic, um die Situation von Spielern besser zu verstehen.
- **Instant**: Legitimer Traffic kann von schädlichen Angriffen auf einen Server von den ersten Netzwerkpaketen an unterschieden werden.
- **Always-On**: Die Fähigkeit, Angriffe zu erkennen und abzuwehren, sorgt für ein reibungsloses Spielerlebnis für sensible Spieleanwendungen ohne Unterbrechungen und Latenzänderungen.

### Aktivieren des GAME DDoS-Schutzes

> [!primary]
> Die GAME Firewall schützt die einem Server zugeordnete IP. Wenn Sie einen Server mit mehreren IP-Adressen (Additional IP), müssen diese separat konfiguriert werden.
>

Melden Sie sich im OVHcloud Kundencenter an und konfigurieren Sie die Regeln der Game Firewall in den folgenden Schritten:

- Klicken Sie auf die Registerkarte `Bare Metal Cloud`{.action}.
- Gehen Sie zu `Netzwerk`{.action} in der linken Seitenleiste.
- Open `IP`{.action}.

| ![Game-Server](images/firewall_game_01_blur.png) |
|:--:|
| Klicken Sie auf den Button `...`{.action}' neben der IP-Adresse Ihres Game Servers. |

| ![configure-game-firewall](images/firewall_game_02.png) |
|:--:|
| Klicken Sie auf `GAME Firewall konfigurieren`{.action}. |


| ![add-rule-btn](images/firewall_game_03.png) |
|:--:|
| Klicken Sie auf die Schaltfläche `Regel hinzufügen`{.action}, um eine Regel zur GAME Firewall hinzuzufügen. |


Sie können bis zu **30 Regeln pro IP** einrichten, um eines oder mehrere auf Ihrem Server gehostete Spiele hinter der GAME Firewall zu schützen. Die Liste der unterstützten Spielprofile finden Sie [hier](https://www.ovhcloud.com/de/security/game-ddos-protection/).

> [!primary]
> Die Game Firewall ist mit bestimmten Regeln vorkonfiguriert, die OVHcloud für die beliebtesten Spiele festgelegt hat. Kunden mit einem Game Dedicated Server können jedoch noch einen Schritt weiter gehen und Regeln für Ports konfigurieren.
> 

| ![confirm-new-rule](images/firewall_game_04.png) |
|:--:|
| Aktivieren Sie die Ports nach Bedarf und klicken Sie auf den Button `Bestätigen`{.action}, wenn Sie Ihre Regeln hinzugefügt haben. Sie haben nun erfolgreich GAME Firewall- Regeln konfiguriert. |

> [!primary]
> Beachten Sie, dass der GAME DDoS-Schutz keine Aktion ausführt, solange keine Regeln konfiguriert sind.
>
> Für den besten Schutz wird außerdem dringend empfohlen, eine Standardrichtlinie *DROP* festzulegen, bei der jeglicher Datenverkehr abgelehnt wird, der nicht den definierten Regeln entspricht. Auf diese Weise wird die Anwendung geschützt und es können keine weiteren Daten zum Server gelangen.
> 

> [!warning]
> Der GAME DDoS-Schutz wird nach der [Edge Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network) wirksam. Damit diese ordnungsgemäß funktioniert, darf der Edge Network-Schutz nicht zu strikt sein und muss Traffic an den GAME DDoS-Schutz weiterleiten. Am besten wird eine Regel in der Edge Network Firewall angelegt, die den gesamten UDP-Datenverkehr zulässt und dann den GAME DDoS-Schutz die spezifischen UDP-Ports filtern lässt.
>

### Wichtige Hinweise

#### FiveM

FiveM ist eine Mod von GTA V. Derzeit wird sie vom Publisher Rockstar nicht unterstützt.

Aus diesem Grund planen wir nicht, für FiveM ein Game Firewall-Profil zum Layer 7-Schutz zu veröffentlichen.

#### Rust

Die GAME Firewall unterstützt Rust mit einem detaillierten Profil. Weitere Informationen zum Hosting von Rust auf OVHcloud Servern [hier](/links/bare-metal/bare-metalgame/rust-server/).

#### Minecraft

Minecraft wird in den folgenden Versionen unterstützt:

- Minecraft Java Edition 
- Minecraft Pocket Edition
- Minecraft Query

> [!primary]
> Die Minecraft Java Edition ist derzeit im Modus "Default" ohne zusätzliches Setup geschützt. Wenn Sie größere Minecraft Server hosten oder besondere Anforderungen haben, kontaktieren Sie unseren Support über das [Help Center](https://help.ovhcloud.com/csm?id=csm_get_help) mit allen Details, um das Anwendungsprofil zu optimieren.
>

## FAQ

### Kann ich die GAME Firewall auch für andere Reihen als Bare Metal Game Server verwenden?

Nein, die GAME Firewall ist nur für unsere dedizierten Bare Metal Game Server verfügbar.

### Kann ich den GAME Firewall-Schutz deaktivieren?

Dies ist möglich, aber nicht empfohlen. Sie können dies tun, indem Sie alle Regeln aus der Konfiguration entfernen und die Standardregel ür *DROP* deaktivieren.

### Mein Spiel ist nicht auf der Liste der unterstützten Protokolle. Was kann ich tun?

Sie können Ihre Anforderungen in unserer [Roadmap für Infrastrukturlösungen auf GitHub](https://github.com/orgs/ovh/projects/16/views/14) vorschlagen. Dies wird uns helfen, Prioritäten für die nächsten zu entwickelnden Funktionen zu setzen.

### Nachdem ich mein Spiel mit geeigneten Ports und Standardregeln zum Löschen konfiguriert habe, erhalte ich immer noch Angriffe, die meinen Game Server beeinträchtigen. Was ist zu tun?

Hierzu müssen Sie relevante Abbilder des Netzwerkverkehrs (Traffic *dump*) als Beispiele für solche Angriffe erzeugen (*.pcap* Datei) und eine Schutzoptimierung Ihres Profils anfordern. Dies kann über unser [Help Center](https://help.ovhcloud.com/csm?id=csm_get_help) erfolgen.


## Weitere Informationen

Wenn Sie Schulungen oder technische Unterstützung bei der Implementierung unserer Lösungen benötigen, wenden Sie sich an Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](/links/professional-services), um einen Kostenvoranschlag zu erhalten und eine persönliche Analyse Ihres Projekts durch unsere Experten des Professional Services Teams anzufordern.

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.