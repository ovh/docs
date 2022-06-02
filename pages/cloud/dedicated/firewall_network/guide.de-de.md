---
title: 'Konfiguration des Firewall Network'
slug: firewall-network
excerpt: 'Hier erfahren Sie, wie Sie Firewall Network konfigurieren.'
section: 'Netzwerk & IP'
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen” auf dieser Seite.
>

**Letzte Aktualisierung am 31.05.2022**

## Ziel

Zum Schutz seiner weltweiten Infrastruktur und der Server seiner Kunden bietet OVHcloud eine konfigurierbare Firewall an, die in die **Anti-DDoS** (VAC) Lösung integriert ist: Firewall Network. Mithilfe dieser Option kann die Anfälligkeit der Dienste für Angriffe aus dem öffentlichen Netz begrenzt werden.

**In dieser Anleitung erklären wir Ihnen, wie Sie Firewall Network konfigurieren.**


> [!primary]
>
> Weitere Informationen zu unserer Anti-DDoS-Lösung finden Sie hier: <https://www.ovh.de/anti-ddos/>.
> 

![VAC im Detail](images/vac-inside.png){.thumbnail}


## Voraussetzungen

- Sie haben eine OVHcloud Dienstleistung abonniert, in der die Firewall Network Option enthalten ist ([Dedicated Server](https://www.ovh.de/dedicated_server/){.external}, [VPS](https://www.ovh.de/virtual_server/){.external}, [Public Cloud Instanz](https://www.ovh.de/public-cloud/instances/){.external}, [Private Cloud](https://www.ovh.de/private-cloud/){.external}, [Failover-IP](https://www.ovh.de/dedicated_server/ip_failover.xml){.external}, ...)
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} eingeloggt.
- Sie verfügen über grundlegende Netzwerkkenntnisse.

> [!warning]
> Diese Funktion kann nur eingeschränkt oder nicht verfügbar sein, falls ein Dedicated Server der [**Eco** Produktlinie](https://eco.ovhcloud.com/de/about/) eingesetzt wird.
>
> Weitere Informationen finden Sie auf der [Vergleichsseite](https://eco.ovhcloud.com/de/compare/).

## Beschreibung

### Firewall Network aktivieren

> [!primary]
>
> Firewall Network schützt die IP-Adressen, die mit einer Maschine verbunden sind. Daher ist es notwendig, jede IP-Adresse einzeln zu konfigurieren, eine globale Serverkonfiguration ist nicht möglich.
> 

Wenn Sie in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} eingeloggt sind, gehen Sie in den Bereich `IP`{.action} und klicken Sie auf `...`{.action}, um die Firewall für die gewünschte IPv4-Adresse zu aktivieren.

![Aktivierung der Firewall Network](images/firewall_creation2022.png){.thumbnail}

- Anschließend werden Sie nach einer Bestätigung gefragt.

![Bestätigung](images/creationvalid.png){.thumbnail}

- Klicken Sie danach auf `Firewall aktivieren`{.action} (1) und dann auf `Firewall konfigurieren`{.action} (2), um mit der Konfiguration zu beginnen.

![Aktivierung der Konfiguration](images/activationconfig.png){.thumbnail}

Sie können bis zu **20 Regeln für jede IP** festlegen.


> [!warning]
>
> Die Firewall wird bei jedem DDoS-Angriff automatisch aktiviert, und es ist nicht möglich, sie vor Ende des Angriffs zu deaktivieren. Deshalb ist es wichtig, dass Ihre Firewall-Regeln immer auf dem neuesten Stand sind.
> Standardmäßig sind keine Regeln konfiguriert, so dass alle Verbindungen offen sind.
> Sollten Sie Firewall-Regeln angelegt haben, denken Sie bitte daran, diese regelmäßig zu überprüfen, auch wenn Sie die Firewall deaktivieren.
> 



> [!primary]
>
> - Die UDP-Fragmentierung (DROP) ist standardmäßig blockiert. Wenn Sie ein VPN verwenden, denken Sie bitte nach der Aktivierung des Firewall Network daran, Ihre maximale Übertragungseinheit (MTU) korrekt zu konfigurieren. Auf OpenVPN können Sie z. B. `MTU Test`{.action} ankreuzen.
> - Firewall Network hat keinen Einfluss auf die Verbindungen innerhalb des OVHcloud Netzwerks. Die definierten Regeln haben also keine Auswirkungen auf die Verbindungen im internen Netzwerk.
>


### Konfiguration der Network Firewall

> [!warning]
> Bitte beachten Sie, dass die Network Firewall von OVHcloud nicht verwendet werden kann, um Ports auf einem Server zu öffnen. Um Ports auf einem Server zu öffnen müssen Sie die Firewall des auf dem Server installierten Betriebssystems einrichten.<br>
> Weitere Informationen finden Sie in den folgenden Anleitungen: [Firewall auf einem Windows Server konfigurieren](https://docs.ovh.com/de/dedicated/firewall-windows/) und [Konfiguration der Linux Firewall mit iptables](https://docs.ovh.com/de/dedicated/firewall-iptables/).
>

Um eine Regel hinzuzufügen, klicken Sie rechts auf die Schaltfläche `Eine Regel hinzufügen`{.action}:


![Regel hinzufügen](images/ajoutregle1.png){.thumbnail}

Legen Sie dann für jede Regel folgende Einstellungen fest:

- die Priorität (von 0 bis 19, wobei die Regel mit dem Wert 0 als erste Regel angewandt wird, danach in aufsteigender Reihenfolge)
- die auszuführende Aktion: (`Erlauben`{.action} oder `Verbieten`{.action})
- das Protokoll
- eine IP-Adresse (optional)
- den Quell-Port (nur bei TCP)
- den Ziel-Port (nur bei TCP)
- die TCP-Optionen (nur bei TCP)


![Details zum Hinzufügen einer Regel](images/ajoutregle4.png){.thumbnail}


> [!primary]
>
> - Priorität 0: Es wird empfohlen, das TCP-Protokoll auf allen IPs mit der `ESTABLISHED`{.action} Option zuzulassen. Mit dieser Option kann überprüft werden, ob das Paket Teil einer zuvor geöffneten (bereits initiierten) Sitzung ist. Wenn Sie diese Option nicht zulassen, wird der Server keine TCP-Rückmeldungen für SYN/ACK-Anfragen erhalten.
> - Priorität 19: Die empfohlene Einstellung ist, mit der Regel 19 das Verwerfen aller IPv4-Pakete einzustellen, damit alle Pakete, die durch keine der vorangegangenen Regeln akzeptiert wurden, blockiert werden.
> 


### Konfigurationsbeispiel:

Um nur die Ports für SSH (22), HTTP (80), HTTPS (443) und UDP (auf Port 10000) zu öffnen, wenn ICMP erlaubt ist, beachten Sie die folgenden Regeln:

![Konfigurationsbeispiel:](images/exemple.png){.thumbnail}

Die Regeln sind chronologisch geordnet von 0 (erste angewandte Regel) bis 19 (zuletzt angewandte Regel). Die chronologische Überprüfung der Regelkette wird abgebrochen, sobald eine Regel auf das empfangene Paket zutrifft.

Im Beispiel wird ein Paket für den TCP-Port 80 von der Regel 2 angenommen, die nachfolgenden Regeln werden also nicht getestet. Ein Paket, das für TCP-Port 25 bestimmt ist, wird nur von der letzten Regel (Nummer 19) abgefangen. Die Regel 19 blockiert daraufhin das Paket, da OVHcloud in den vorherigen Regeln keine Kommunikation auf Port 25 zulässt.

> [!warning]
> Wie bereits erwähnt, ist die vorstehende Konfiguration nur ein Beispiel und sollte als Referenz verwendet werden, wenn die Regeln nicht für die auf Ihrem Server gehosteten Dienste gelten. Es ist absolut notwendig, die Regeln Ihrer Firewall entsprechend den auf Ihrem Server gehosteten Diensten zu konfigurieren. Eine fehlerhafte Konfiguration Ihrer Firewall-Regeln kann dazu führen, dass der rechtmäßige Traffic blockiert wird und die Server-Dienste nicht erreichbar sind.
>

### Schutz

Es gibt drei Schutzmodi: automatisch, dauerhaft oder erzwungen

**Automatisch Schutz**: Bei diesem Modus läuft der Traffic nur über das Abwehrsystem, wenn er im Vergleich zum normalen Traffic, den der Server normalerweise empfängt, als "ungewöhnlicherkannt" wird.

**Permanenter Schutz**: Wenn Sie den permanenter Schutz aktivieren, wenden Sie über unser Hardware-Shield ein erstes konstantes Filterniveau an.<br>
Der gesamte Traffic läuft permanent über das Schutzsystem, bevor er den Server erreicht. Wir empfehlen diesen Modus für Dienste mit häufigen Angriffen.<br>
Bitte beachten Sie, dass Firewall Network nicht erstellt/aktiviert werden darf, um den permanenter Schutz für Ihre IP zu aktivieren.

Klicken Sie auf das Menü `Bare Metal Cloud`{.action} und öffnen Sie `IP`{.action}. Klicken Sie dann auf die `...`{.action}. rechts neben der betreffenden IPv4 und wählen Sie `Schutz: permanenter Modus`{.action}.

**Erzwungene Schutz**: Dieser Modus wird automatisch aktiviert, sobald ein Angriff auf den Server erkannt wurde. Nach der Aktivierung kann dieser Modus nicht deaktiviert werden. Zum Schutz unserer Infrastruktur wird der Schutz während des gesamten Angriffs aktiviert, bis er vollständig abgeschwächt ist.

> [!warning]
>
> Wenn Sie die DDoS-Schutz-Funktion aktivieren, werden automatisch auch Ihre Firewall Network Regeln aktiviert, auch wenn Sie die Firewall deaktiviert haben. Um Firewall Network vollständig zu deaktivieren, denken Sie also bitte daran, Ihre Regeln zu löschen.
> 
> Bitte beachten Sie, dass die DDoS-Abschwächung nicht deaktiviert werden kann.

### Armor Firewall konfigurieren (Game Firewall)

> [!primary]
> Die Armor Firewall ist standardmäßig mit bestimmten Regeln vorkonfiguriert, die OVHcloud für die gängigsten Spiele festgelegt hat. Für Kunden, die über einen dedizierten Game Server verfügen, erlauben wir Ihnen jedoch, einen Schritt weiter zu gehen und auch Regeln für Ports zu konfigurieren.
>

Um die Regeln Ihrer Ports in Armor zu konfigurieren müssen Sie sich zuerst in Ihrem OVHcloud Kundencenter einloggen.<br>
Gehen Sie anschließend in das Menü `Bare Metal Cloud`{.action} und öffnen Sie `IP`{.action}. Klicken Sie auf `...`{.action}. neben der IP-Adresse Ihres Gameservers und anschließend auf `Game Firewall konfigurieren`{.action}.

![Game_wall](images/GAMEwall2021.png){.thumbnail}

Klicken Sie auf dem folgenden Bildschirm auf den Button `Regel hinzufügen`{.action}, um Armor hinzuzufügen.

![configure_Armor](images/ConfigureArmor2021.png){.thumbnail}

Aktivieren Sie die Ports nach Bedarf auf dem folgenden Bildschirm und klicken Sie auf `Bestätigen`{.action}, wenn Sie Ihre Regeln hinzugefügt haben. Die Armor Firewall wurde nun erfolgreich konfiguriert.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
